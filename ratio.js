const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("aptiace.db", (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        return;
    }

    console.log("Connected to database.");

    insertQuestions();
});

const questions = [
    [
        "Ratio & Proportion",
        "If A:B = 3:4 and B:C = 6:7, find A:C.",
        "9:14",
        "3:7",
        "6:7",
        "18:28",
        "A",
        "Medium",
        "Make B common. A:B = 9:12 and B:C = 12:14. Therefore A:C = 9:14."
    ],

    [
        "Ratio & Proportion",
        "The ratio of the salaries of A and B is 4:7. If both salaries are increased by ₹3,000, the ratio becomes 5:8. Find A's original salary.",
        "₹8,000",
        "₹10,000",
        "₹12,000",
        "₹14,000",
        "C",
        "Hard",
        "Let the salaries be 4x and 7x. (4x + 3000)/(7x + 3000) = 5/8. Solving gives x = 3000. Therefore A's salary = 4 × 3000 = ₹12,000."
    ],

    [
        "Ratio & Proportion",
        "Three numbers are in the ratio 2:3:5 and their sum is 150. Find the difference between the largest and smallest numbers.",
        "30",
        "40",
        "45",
        "50",
        "C",
        "Medium",
        "Total parts = 2 + 3 + 5 = 10. One part = 150/10 = 15. Largest = 75 and smallest = 30. Difference = 45."
    ],

    [
        "Ratio & Proportion",
        "If 12 men can complete a work in 20 days, how many men are required to complete the same work in 15 days?",
        "14",
        "16",
        "18",
        "20",
        "B",
        "Medium",
        "Men and days are inversely proportional. 12 × 20 = M × 15. Therefore M = 240/15 = 16."
    ],

    [
        "Ratio & Proportion",
        "A sum of ₹9,000 is divided among A, B and C in the ratio 2:3:4. How much more does C receive than A?",
        "₹1,000",
        "₹1,500",
        "₹2,000",
        "₹2,500",
        "C",
        "Easy",
        "Total parts = 9. One part = ₹9,000/9 = ₹1,000. C receives ₹4,000 and A receives ₹2,000. Difference = ₹2,000."
    ],

    [
        "Ratio & Proportion",
        "If x:y = 3:5 and y:z = 10:7, find x:z.",
        "3:7",
        "6:7",
        "5:7",
        "6:5",
        "B",
        "Medium",
        "Make y common. x:y = 6:10 and y:z = 10:7. Therefore x:z = 6:7."
    ],

    [
        "Ratio & Proportion",
        "The ratio of two numbers is 4:7. If 6 is added to each number, the ratio becomes 5:8. Find the smaller number.",
        "18",
        "20",
        "22",
        "24",
        "D",
        "Hard",
        "Let the numbers be 4x and 7x. (4x + 6)/(7x + 6) = 5/8. Therefore 32x + 48 = 35x + 30, giving x = 6. The smaller number is 4 × 6 = 24."
    ]
];

function insertQuestions() {

    const sql = `
        INSERT INTO questions
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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let completed = 0;

    questions.forEach((question) => {

        db.run(sql, question, function(err) {

            if (err) {
                console.error("INSERT ERROR:", err.message);
            } else {
                console.log("Inserted question ID:", this.lastID);
            }

            completed++;

            if (completed === questions.length) {
                verify();
            }
        });
    });
}

function verify() {

    db.get(
        "SELECT COUNT(*) AS count FROM questions WHERE topic = ?",
        ["Ratio & Proportion"],
        (err, row) => {

            if (err) {
                console.error("Verification error:", err.message);
            } else {
                console.log(
                    "\nFINAL RATIO & PROPORTION COUNT:",
                    row.count
                );
            }

            db.get(
                "SELECT COUNT(*) AS count FROM questions",
                [],
                (err, row) => {

                    if (err) {
                        console.error("Total count error:", err.message);
                    } else {
                        console.log(
                            "FINAL TOTAL QUESTIONS:",
                            row.count
                        );
                    }

                    db.close((err) => {
                        if (err) {
                            console.error(
                                "Database close error:",
                                err.message
                            );
                        } else {
                            console.log("\nDatabase closed successfully.");
                        }
                    });
                }
            );
        }
    );
}