const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
const PORT = 3000;


// ==================================================
// MIDDLEWARE
// ==================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ==================================================
// SESSION
// ==================================================

app.use(
    session({
        secret: "aptiace-secret-key-change-later",

        resave: false,

        saveUninitialized: false,

        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
);


// ==================================================
// SERVE FRONTEND
// ==================================================

// Your HTML, CSS and JavaScript files are inside:
// APTIACE/public

const publicPath = path.join(__dirname, "public");

console.log("Frontend path:", publicPath);

app.use(express.static(publicPath));
app.get("/register.html", (req, res) => {
    res.sendFile(path.join(publicPath, "register.html"));
});


// ==================================================
// DATABASE
// ==================================================

const db = new sqlite3.Database(
    path.join(__dirname, "aptitude.db"),
    (error) => {

        if (error) {

            console.error(
                "Database connection failed:",
                error.message
            );

        } else {

            console.log(
                "Connected to SQLite database."
            );

        }
    }
);


// ==================================================
// CREATE USERS TABLE
// ==================================================

db.run(
    `
    CREATE TABLE IF NOT EXISTS users (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        email TEXT UNIQUE NOT NULL,

        password TEXT NOT NULL,

        created_at DATETIME
            DEFAULT CURRENT_TIMESTAMP

    )
    `,
    (error) => {

        if (error) {

            console.error(
                "Could not create users table:",
                error.message
            );

        } else {

            console.log(
                "Users table ready."
            );

        }
    }
);


// ==================================================
// HOME PAGE
// ==================================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            publicPath,
            "login.html"
        )
    );

});


// ==================================================
// REGISTER
// ==================================================

app.post("/register", async (req, res) => {

    try {

        const { email, password } = req.body;


        // ------------------------------------------
        // Check empty fields
        // ------------------------------------------

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message:
                    "Please enter your Gmail and password."

            });

        }


        // ------------------------------------------
        // Clean email
        // ------------------------------------------

        const cleanEmail =
            email.trim().toLowerCase();


        // ------------------------------------------
        // Check Gmail
        // ------------------------------------------

        if (!cleanEmail.endsWith("@gmail.com")) {

            return res.status(400).json({

                success: false,

                message:
                    "Please use a valid Gmail address."

            });

        }


        // ------------------------------------------
        // Password length
        // ------------------------------------------

        if (password.length < 6) {

            return res.status(400).json({

                success: false,

                message:
                    "Password must contain at least 6 characters."

            });

        }


        // ------------------------------------------
        // Check if email already exists
        // ------------------------------------------

        db.get(
            "SELECT id FROM users WHERE email = ?",
            [cleanEmail],
            async (error, user) => {

                if (error) {

                    console.error(error);

                    return res.status(500).json({

                        success: false,

                        message:
                            "Database error."

                    });

                }


                if (user) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "This Gmail is already registered."

                    });

                }


                // ----------------------------------
                // Hash password
                // ----------------------------------

                const hashedPassword =
                    await bcrypt.hash(
                        password,
                        10
                    );


                // ----------------------------------
                // Save user
                // ----------------------------------

                db.run(
                    `
                    INSERT INTO users
                    (email, password)
                    VALUES (?, ?)
                    `,
                    [
                        cleanEmail,
                        hashedPassword
                    ],
                    function (insertError) {

                        if (insertError) {

                            console.error(
                                insertError
                            );

                            return res.status(500).json({

                                success: false,

                                message:
                                    "Could not create account."

                            });

                        }


                        console.log(
                            "New user registered:",
                            cleanEmail
                        );


                        res.json({

                            success: true,

                            message:
                                "Account created successfully!"

                        });

                    }
                );

            }
        );

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                "Server error."

        });

    }

});


// ==================================================
// LOGIN
// ==================================================

app.post("/login", (req, res) => {

    const { email, password } = req.body;


    // ----------------------------------------------
    // Check fields
    // ----------------------------------------------

    if (!email || !password) {

        return res.status(400).json({

            success: false,

            message:
                "Please enter your Gmail and password."

        });

    }


    const cleanEmail =
        email.trim().toLowerCase();


    // ----------------------------------------------
    // Find user
    // ----------------------------------------------

    db.get(
        `
        SELECT *
        FROM users
        WHERE email = ?
        `,
        [cleanEmail],
        async (error, user) => {

            if (error) {

                console.error(error);

                return res.status(500).json({

                    success: false,

                    message:
                        "Database error."

                });

            }


            // --------------------------------------
            // User doesn't exist
            // --------------------------------------

            if (!user) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid Gmail or password."

                });

            }


            // --------------------------------------
            // Compare password
            // --------------------------------------

            const passwordCorrect =
                await bcrypt.compare(
                    password,
                    user.password
                );


            if (!passwordCorrect) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid Gmail or password."

                });

            }


            // --------------------------------------
            // Create session
            // --------------------------------------

            req.session.userId =
                user.id;

            req.session.email =
                user.email;


            console.log(
                "User logged in:",
                user.email
            );


            res.json({

                success: true,

                message:
                    "Login successful!"

            });

        }
    );

});


// ==================================================
// CHECK LOGIN
// ==================================================

app.get("/check-login", (req, res) => {

    if (req.session.userId) {

        res.json({

            loggedIn: true,

            email:
                req.session.email

        });

    } else {

        res.json({

            loggedIn: false

        });

    }

});


// ==================================================
// LOGOUT
// ==================================================

app.get("/logout", (req, res) => {

    req.session.destroy((error) => {

        if (error) {

            return res.status(500).json({

                success: false,

                message:
                    "Could not logout."

            });

        }


        res.json({

            success: true,

            message:
                "Logged out successfully."

        });

    });

});


// ==================================================
// START SERVER
// ==================================================

app.listen(PORT, () => {

    console.log(
        "======================================"
    );

    console.log(
        "       APTIACE SERVER STARTED"
    );

    console.log(
        "======================================"
    );

    console.log(
        `Website: http://localhost:${PORT}`
    );

    console.log(
        "======================================"

    );

});