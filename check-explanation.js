const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "aptiace.db");

const db = new sqlite3.Database(dbPath);

db.get(
    "SELECT id, question, explanation FROM questions WHERE id = 1",
    (err, row) => {

        if (err) {

            console.error("Database error:", err.message);

        } else {

            console.log("QUESTION:");
            console.log(row.question);

            console.log("\nEXPLANATION:");
            console.log(row.explanation);

        }

        db.close();

    }
);