const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
app.use(session({
    secret: "aptiace-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================================================
// FRONTEND
// =====================================================

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

console.log("Frontend path:", publicPath);

// =====================================================
// SQLITE DATABASE
// =====================================================

const dbPath = path.join(__dirname, "aptiace.db");

console.log("Database path:", dbPath);

const db = new sqlite3.Database(dbPath, (err) => {

    if (err) {

        console.error(
            "Database connection error:",
            err.message
        );

    } else {

        console.log(
            "Connected to SQLite database."
        );

    }

});

// =====================================================
// QUESTIONS TABLE
// =====================================================

db.run(`
    CREATE TABLE IF NOT EXISTS questions (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        topic TEXT NOT NULL,

        question TEXT NOT NULL,

        option_a TEXT NOT NULL,

        option_b TEXT NOT NULL,

        option_c TEXT NOT NULL,

        option_d TEXT NOT NULL,

        correct_answer TEXT NOT NULL,

        difficulty TEXT NOT NULL,

        explanation TEXT

    )
`, (err) => {

    if (err) {

        console.error(
            "Error creating questions table:",
            err.message
        );

        return;
    }

    console.log("Questions table ready.");

    // Check explanation column
    db.all(
        "PRAGMA table_info(questions)",
        [],
        (err, columns) => {

            if (err) {

                console.error(
                    "Could not check table structure:",
                    err.message
                );

                return;
            }

            const explanationColumn =
                columns.find(
                    column =>
                        column.name === "explanation"
                );

            if (!explanationColumn) {

                console.log(
                    "Explanation column missing."
                );

                db.run(
                    "ALTER TABLE questions ADD COLUMN explanation TEXT",
                    (err) => {

                        if (err) {

                            console.error(
                                "Error adding explanation column:",
                                err.message
                            );

                        } else {

                            console.log(
                                "Explanation column added successfully."
                            );

                        }

                    }
                );

            } else {

                console.log(
                    "Explanation column already exists."
                );

            }

        }
    );

});

// =====================================================
// USERS TABLE
// =====================================================

db.run(`
    CREATE TABLE IF NOT EXISTS users (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        email TEXT UNIQUE NOT NULL,

        password TEXT NOT NULL

    )
`, (err) => {

    if (err) {

        console.error(
            "Error creating users table:",
            err.message
        );

    } else {

        console.log("Users table ready.");

    }

});

// =====================================================
// HOME PAGE
// =====================================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(publicPath, "login.html")
    );

});



// =====================================================
// REGISTER
// =====================================================

app.post("/register", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });

    }

    console.log(
        "Registration attempt:",
        email
    );

    try {

        const hashedPassword =
            await bcrypt.hash(password, 10);

        db.run(
            `
            INSERT INTO users (email, password)
            VALUES (?, ?)
            `,
            [email, hashedPassword],
            function (err) {

                if (err) {

                    console.error(
                        "Registration database error:",
                        err.message
                    );

                    if (err.message.includes("UNIQUE")) {

                        return res.status(409).json({
                            success: false,
                            message: "Email already registered"
                        });

                    }

                    return res.status(500).json({
                        success: false,
                        message: "Database error"
                    });

                }

                console.log(
                    "Registration successful:",
                    email
                );

                return res.status(201).json({

                    success: true,

                    message:
                        "Account created successfully",

                    user: {

                        id: this.lastID,

                        email: email

                    }

                });

            }
        );

    } catch (error) {

        console.error(
            "Registration error:",
            error.message
        );

        return res.status(500).json({

            success: false,

            message: "Registration error"

        });

    }

});
// =====================================================
// LOGIN
// =====================================================

app.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {

        return res.status(400).json({

            success: false,

            message:
                "Email and password are required"

        });

    }

    console.log(
        "Login attempt:",
        email
    );

    db.get(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, user) => {

            if (err) {

                console.error(
                    "Login database error:",
                    err.message
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Database error"

                });

            }

            if (!user) {

                console.log(
                    "User not found:",
                    email
                );

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password"

                });

            }

            try {

                const passwordMatch =
                    await bcrypt.compare(
                        password,
                        user.password
                    );

                if (!passwordMatch) {

                    console.log(
                        "Incorrect password:",
                        email
                    );

                    return res.status(401).json({

                        success: false,

                        message:
                            "Invalid email or password"

                    });

                }

                console.log(
                    "Login successful:",
                    email
                );


                // =====================================================
                // CREATE LOGIN SESSION
                // =====================================================

                req.session.user = {

                    id: user.id,

                    email: user.email

                };


                return res.json({

                    success: true,

                    message:
                        "Login successful",

                    user: {

                        id: user.id,

                        email: user.email

                    }

                });

            } catch (error) {

                console.error(
                    "Password verification error:",
                    error.message
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Login error"

                });

            }

        }
    );

});


// =====================================================
// CHECK LOGIN
// =====================================================

app.get("/check-login", (req, res) => {

    if (req.session && req.session.user) {

        return res.json({

            loggedIn: true,

            email:
                req.session.user.email

        });

    }

    return res.json({

        loggedIn: false

    });

});


// =====================================================
// LOGOUT
// =====================================================

app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {

            console.error(
                "Logout error:",
                err.message
            );

            return res.status(500).json({

                success: false,

                message:
                    "Logout failed"

            });

        }

        return res.json({

            success: true,

            message:
                "Logged out successfully"

        });

    });

});
   
// =====================================================
// GET QUESTIONS BY TOPIC
// =====================================================

app.get("/api/questions", (req, res) => {

    const topic = req.query.topic;

    if (!topic) {

        return res.status(400).json({

            error:
                "Topic is required"

        });

    }

    console.log(
        "Loading questions for topic:",
        topic
    );

    const sql = `
        SELECT
            id,
            topic,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            difficulty,
            explanation
        FROM questions
        WHERE topic = ?
        ORDER BY id
    `;

    db.all(
        sql,
        [topic],
        (err, rows) => {

            if (err) {

                console.error(
                    "Question query error:",
                    err.message
                );

                return res.status(500).json({

                    error:
                        "Database error"

                });

            }

            console.log(
                "Questions returned:",
                rows.length
            );

            if (rows.length > 0) {

                console.log(
                    "First question:",
                    rows[0].question
                );

                console.log(
                    "First explanation:",
                    rows[0].explanation ||
                    "NULL"
                );

            }

            res.json(rows);

        }
    );

});





// =====================================================
// TEST DATABASE
// =====================================================

app.get("/api/test-db", (req, res) => {

    db.get(
        "SELECT COUNT(*) AS count FROM questions",
        [],
        (err, row) => {

            if (err) {

                return res.status(500).json({

                    error:
                        err.message

                });

            }

            res.json({

                message:
                    "SQLite database is working",

                questionCount:
                    row.count

            });

        }
    );

});

// =====================================================
// TEST EXPLANATION
// =====================================================

app.get("/api/test-explanation", (req, res) => {

    db.get(
        `
        SELECT
            id,
            question,
            explanation
        FROM questions
        WHERE id = 1
        `,
        [],
        (err, row) => {

            if (err) {

                return res.status(500).json({

                    error:
                        err.message

                });

            }

            res.json(row);

        }
    );

});
// =====================================================
// IMPORT QUESTIONS FROM questions.sql
// =====================================================
// =====================================================
// FIX MALFORMED HCF & LCM TOPICS
// =====================================================



app.get("/api/import-questions", (req, res) => {

    const sqlPath = path.join(__dirname, "questions.sql");

    console.log("=====================================");
    console.log("Starting question import...");
    console.log("SQL file:", sqlPath);

    // -------------------------------------------------
    // CHECK SQL FILE
    // -------------------------------------------------

    if (!fs.existsSync(sqlPath)) {

        console.error("questions.sql not found!");

        return res.status(404).json({

            success: false,
            message: "questions.sql file not found"

        });

    }

    // -------------------------------------------------
    // READ SQL FILE
    // -------------------------------------------------

    const sqlFile =
        fs.readFileSync(sqlPath, "utf8");

    if (!sqlFile.trim()) {

        return res.status(400).json({

            success: false,
            message: "questions.sql is empty"

        });

    }

    console.log(
        "SQL file loaded successfully."
    );


    // -------------------------------------------------
    // FIND INSERT STATEMENTS
    // -------------------------------------------------

    const insertRegex =
        /INSERT\s+INTO\s+questions[\s\S]*?;/gi;

    const statements =
        sqlFile.match(insertRegex);


    if (!statements || statements.length === 0) {

        console.error(
            "No INSERT INTO questions statements found."
        );

        return res.status(400).json({

            success: false,

            message:
                "No INSERT INTO questions statements found in questions.sql"

        });

    }


    console.log(
        "INSERT statements found:",
        statements.length
    );


    let imported = 0;
    let skipped = 0;
    let errors = 0;


    // -------------------------------------------------
    // PROCESS ONE SQL STATEMENT
    // -------------------------------------------------

    const processStatement = (index) => {

        if (index >= statements.length) {

            console.log("=====================================");
            console.log("IMPORT FINISHED");
            console.log("Imported:", imported);
            console.log("Skipped:", skipped);
            console.log("Errors:", errors);
            console.log("=====================================");


            // -------------------------------------------------
            // FINAL DATABASE CHECK
            // -------------------------------------------------

            db.get(
                "SELECT COUNT(*) AS count FROM questions",
                [],
                (err, row) => {

                    if (err) {

                        console.error(
                            "Final count error:",
                            err.message
                        );

                        return res.status(500).json({

                            success: false,

                            message:
                                err.message

                        });

                    }


                    // -------------------------------------------------
                    // TOPIC COUNTS
                    // -------------------------------------------------

                    db.all(
                        `SELECT topic, COUNT(*) AS count
                         FROM questions
                         GROUP BY topic
                         ORDER BY topic`,
                        [],
                        (err, topics) => {

                            if (err) {

                                return res.status(500).json({

                                    success: false,

                                    message:
                                        err.message

                                });

                            }


                            console.log(
                                "Total questions:",
                                row.count
                            );

                            console.table(topics);


                            return res.json({

                                success: true,

                                message:
                                    "Question import completed",

                                imported:
                                    imported,

                                skipped:
                                    skipped,

                                errors:
                                    errors,

                                totalQuestions:
                                    row.count,

                                topics:
                                    topics

                            });

                        }
                    );

                }
            );

            return;
        }


        const statement =
            statements[index].trim();


        // -------------------------------------------------
        // GET VALUES PART
        // -------------------------------------------------

        const valuesIndex =
            statement
                .toUpperCase()
                .indexOf("VALUES");


        if (valuesIndex === -1) {

            console.error(
                "VALUES keyword not found."
            );

            errors++;

            processStatement(index + 1);

            return;

        }


        const valuesText =
            statement
                .substring(valuesIndex + 6)
                .trim()
                .replace(/;$/, "");


        // -------------------------------------------------
        // EXTRACT ROWS
        // -------------------------------------------------

        const rows = [];

        let current = "";
        let depth = 0;
        let inString = false;


        for (
            let i = 0;
            i < valuesText.length;
            i++
        ) {

            const char =
                valuesText[i];


            // Handle SQL single quotes
            if (
                char === "'" &&
                valuesText[i + 1] === "'"
            ) {

                current += "''";

                i++;

                continue;

            }


            if (char === "'") {

                inString =
                    !inString;

            }


            if (!inString) {

                if (char === "(") {

                    depth++;

                }

                else if (char === ")") {

                    depth--;

                }

            }


            current += char;


            if (
                depth === 0 &&
                char === ")"
            ) {

                rows.push(
                    current.trim()
                );

                current = "";


                // Skip comma
                if (
                    valuesText[i + 1] === ","
                ) {

                    i++;

                }

            }

        }


        console.log(
            "Rows found in statement:",
            rows.length
        );


        // -------------------------------------------------
        // PROCESS ROWS
        // -------------------------------------------------

        const processRow = (rowIndex) => {

            if (
                rowIndex >= rows.length
            ) {

                processStatement(
                    index + 1
                );

                return;

            }


            const row =
                rows[rowIndex];


            // -------------------------------------------------
            // SPLIT VALUES
            // -------------------------------------------------

            const parts = [];

            let value = "";
            let inString = false;


            for (
                let i = 1;
                i < row.length - 1;
                i++
            ) {

                const char =
                    row[i];


                if (
                    char === "'" &&
                    row[i + 1] === "'"
                ) {

                    value += "''";

                    i++;

                    continue;

                }


                if (char === "'") {

                    inString =
                        !inString;

                }


                if (
                    char === "," &&
                    !inString
                ) {

                    parts.push(
                        value.trim()
                    );

                    value = "";

                }

                else {

                    value += char;

                }

            }


            parts.push(
                value.trim()
            );


            // -------------------------------------------------
            // EXPECTED 9 COLUMNS
            // -------------------------------------------------

            if (
                parts.length !== 9
            ) {

                console.error(
                    "Invalid question row. Values found:",
                    parts.length
                );

                errors++;

                processRow(
                    rowIndex + 1
                );

                return;

            }


            // -------------------------------------------------
            // CLEAN SQL STRING
            // -------------------------------------------------

            const cleanValue = (text) => {

                text =
                    text.trim();


                if (
                    text.startsWith("'") &&
                    text.endsWith("'")
                ) {

                    text =
                        text.substring(
                            1,
                            text.length - 1
                        );

                }


                return text
                    .replace(/''/g, "'");

            };


            const topic =
                cleanValue(parts[0]);

            const question =
                cleanValue(parts[1]);

            const option_a =
                cleanValue(parts[2]);

            const option_b =
                cleanValue(parts[3]);

            const option_c =
                cleanValue(parts[4]);

            const option_d =
                cleanValue(parts[5]);

            const correct_answer =
                cleanValue(parts[6]);

            const difficulty =
                cleanValue(parts[7]);

            const explanation =
                cleanValue(parts[8]);


            // -------------------------------------------------
            // CHECK DUPLICATE
            // -------------------------------------------------

            db.get(
                `SELECT id
                 FROM questions
                 WHERE question = ?
                 LIMIT 1`,
                [question],
                (err, existing) => {

                    if (err) {

                        console.error(
                            "Duplicate check error:",
                            err.message
                        );

                        errors++;

                        processRow(
                            rowIndex + 1
                        );

                        return;

                    }


                    // -------------------------------------------------
                    // ALREADY EXISTS
                    // -------------------------------------------------

                    if (existing) {

                        console.log(
                            "Skipped existing:",
                            topic,
                            "-",
                            question
                        );

                        skipped++;

                        processRow(
                            rowIndex + 1
                        );

                        return;

                    }


                    // -------------------------------------------------
                    // INSERT QUESTION
                    // -------------------------------------------------

                    db.run(
                        `INSERT INTO questions
                        (
                            topic,
                            question,
                            option_a,
                            option_b,
                            option_c,
                            option_d,
                            correct_answer,
                            difficulty,
                            explanation
                        )
                        VALUES
                        (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        [
                            topic,
                            question,
                            option_a,
                            option_b,
                            option_c,
                            option_d,
                            correct_answer,
                            difficulty,
                            explanation
                        ],
                        function (err) {

                            if (err) {

                                console.error(
                                    "Insert error:",
                                    err.message
                                );

                                console.error(
                                    "Topic:",
                                    topic
                                );

                                console.error(
                                    "Question:",
                                    question
                                );

                                errors++;

                            }

                            else {

                                console.log(
                                    "Imported:",
                                    topic,
                                    "-",
                                    question
                                );

                                imported++;

                            }


                            processRow(
                                rowIndex + 1
                            );

                        }
                    );

                }
            );

        };


        processRow(0);

    };


    processStatement(0);

});
// =====================================================
// CLEAN MALFORMED HCF & LCM TOPIC NAMES
// =====================================================

db.run(
    `
    UPDATE questions
    SET topic = 'HCF & LCM'
    WHERE topic LIKE '%HCF & LCM%'
    `,
    [],
    function (err) {

        if (err) {

            console.error(
                "HCF & LCM cleanup error:",
                err.message
            );

        } else {

            console.log(
                "HCF & LCM cleanup:",
                this.changes,
                "rows updated"
            );

        }

    }
);


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log(
        `AptiAce server running at http://localhost:${PORT}`
    );

});

