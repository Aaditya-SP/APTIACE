const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const app = express();
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

    console.log("Registration attempt:", email);

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

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

                res.json({

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

                res.status(500).json({

                    success: false,

                    message:
                        "Login error"

                });

            }

        }
    );

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
// GET ALL QUESTIONS
// =====================================================

app.get("/api/all-questions", (req, res) => {

    db.all(
        "SELECT * FROM questions ORDER BY id",
        [],
        (err, rows) => {

            if (err) {

                console.error(
                    "Database error:",
                    err.message
                );

                return res.status(500).json({

                    error:
                        "Database error"

                });

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
// START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log(
        `AptiAce server running at http://localhost:${PORT}`
    );

});