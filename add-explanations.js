const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "aptiace.db");

const db = new sqlite3.Database(dbPath);

db.run(
    "ALTER TABLE questions ADD COLUMN explanation TEXT",
    (err) => {

        if (err) {

            if (err.message.includes("duplicate column")) {

                console.log(
                    "Explanation column already exists."
                );

            } else {

                console.error(
                    "Error adding explanation column:",
                    err.message
                );

            }

        } else {

            console.log(
                "Explanation column added successfully."
            );

        }

        db.close();
    }
);