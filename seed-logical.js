// =====================================================
// APTIACE - LOGICAL REASONING SEED SCRIPT
// =====================================================
// Seeds all 19 topics (475 questions, 25 per topic)
// into aptiace.db and exports logical-questions.sql
// =====================================================

const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const part1 = require("./data/logical/part1.js");
const part2 = require("./data/logical/part2.js");
const part3 = require("./data/logical/part3.js");
const part4 = require("./data/logical/part4.js");
const part5 = require("./data/logical/part5.js");

const allQuestions = [
    ...part1,
    ...part2,
    ...part3,
    ...part4,
    ...part5
];

console.log("=============================================");
console.log("APTIACE - LOGICAL REASONING SEEDER");
console.log("=============================================");
console.log(`Total questions loaded: ${allQuestions.length}`);

// Validation
const expectedTopics = [
    "Number Series",
    "Letter and Symbol Series",
    "Verbal Classification",
    "Essential Part",
    "Analogies",
    "Artificial Language",
    "Matching Definitions",
    "Making Judgments",
    "Verbal Reasoning",
    "Logical Problems",
    "Logical Games",
    "Analyzing Arguments",
    "Statement and Assumption",
    "Course of Action",
    "Statement and Conclusion",
    "Theme Detection",
    "Cause and Effect",
    "Statement and Argument",
    "Logical Deduction"
];

const topicCounts = {};
expectedTopics.forEach(t => { topicCounts[t] = { Easy: 0, Medium: 0, Hard: 0, Advanced: 0, Interview: 0, Total: 0 }; });

let validationErrors = 0;

allQuestions.forEach((q, idx) => {
    if (!expectedTopics.includes(q.topic)) {
        console.error(`[Error] Q#${idx + 1} has unexpected topic: "${q.topic}"`);
        validationErrors++;
        return;
    }
    if (!["Easy", "Medium", "Hard", "Advanced", "Interview"].includes(q.difficulty)) {
        console.error(`[Error] Q#${idx + 1} (${q.topic}) has invalid difficulty: "${q.difficulty}"`);
        validationErrors++;
    }
    if (!["A", "B", "C", "D"].includes(q.correct_answer)) {
        console.error(`[Error] Q#${idx + 1} (${q.topic}) has invalid correct_answer: "${q.correct_answer}"`);
        validationErrors++;
    }
    if (!q.question || !q.option_a || !q.option_b || !q.option_c || !q.option_d || !q.explanation) {
        console.error(`[Error] Q#${idx + 1} (${q.topic}) has empty fields`);
        validationErrors++;
    }
    topicCounts[q.topic][q.difficulty]++;
    topicCounts[q.topic].Total++;
});

console.log("\n--- TOPIC QUESTION COUNTS & DIFFICULTY DISTRIBUTION ---");
let distributionValid = true;
expectedTopics.forEach(t => {
    const c = topicCounts[t];
    console.log(`${t.padEnd(28)} | Total: ${String(c.Total).padStart(2)} | Easy: ${c.Easy} Med: ${c.Medium} Hard: ${c.Hard} Adv: ${c.Advanced} Int: ${c.Interview}`);
    if (c.Total !== 25 || c.Easy !== 5 || c.Medium !== 5 || c.Hard !== 5 || c.Advanced !== 5 || c.Interview !== 5) {
        distributionValid = false;
        console.error(`  ^^ DISTRIBUTION MISMATCH FOR: ${t}`);
    }
});

if (validationErrors > 0 || !distributionValid) {
    console.error(`\nValidation failed! Errors: ${validationErrors}, Distribution valid: ${distributionValid}`);
    process.exit(1);
}

console.log("\nAll 475 questions validated successfully! Exactly 25 per topic, 5 per difficulty.\n");

// Connect to SQLite Database
const dbPath = path.join(__dirname, "aptiace.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
    console.log("Connected to SQLite database:", dbPath);
    runSeeder();
});

function runSeeder() {
    const placeholders = expectedTopics.map(() => "?").join(",");

    db.serialize(() => {
        // 1. Delete previous records
        db.run(`DELETE FROM questions WHERE topic IN (${placeholders})`, expectedTopics, function(err) {
            if (err) {
                console.error("Error clearing existing logical questions:", err.message);
                process.exit(1);
            }
            console.log(`Cleared previous records for the 19 Logical topics (deleted: ${this.changes}).`);
        });

        // 2. Begin transaction
        db.run("BEGIN TRANSACTION");

        // 3. Prepare statement
        const insertStmt = db.prepare(`
            INSERT INTO questions (topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        for (const q of allQuestions) {
            insertStmt.run(
                q.topic,
                q.question,
                q.option_a,
                q.option_b,
                q.option_c,
                q.option_d,
                q.correct_answer,
                q.difficulty,
                q.explanation
            );
        }

        // 4. Finalize statement
        insertStmt.finalize((err) => {
            if (err) console.error("Error finalizing statement:", err.message);
        });

        // 5. Commit transaction
        db.run("COMMIT", (err) => {
            if (err) {
                console.error("Commit error:", err.message);
                process.exit(1);
            }
            console.log(`Successfully committed all ${allQuestions.length} Logical Reasoning questions to aptiace.db!`);

            // 6. Verify total in DB
            db.get(
                `SELECT COUNT(*) as count FROM questions WHERE topic IN (${placeholders})`,
                expectedTopics,
                (err, row) => {
                    if (err) {
                        console.error("Verification error:", err.message);
                    } else {
                        console.log(`Verification: Exactly ${row.count} Logical Reasoning questions in database.`);
                    }

                    // 7. Verify per topic count
                    db.all(
                        `SELECT topic, COUNT(*) as count FROM questions WHERE topic IN (${placeholders}) GROUP BY topic`,
                        expectedTopics,
                        (err, rows) => {
                            if (err) {
                                console.error("Per-topic verification error:", err.message);
                            } else {
                                console.log(`Verified ${rows.length} topics present in DB.`);
                            }
                            generateSqlFile();
                        }
                    );
                }
            );
        });
    });
}

function escapeSql(str) {
    if (!str) return "''";
    return "'" + String(str).replace(/'/g, "''") + "'";
}

function generateSqlFile() {
    const sqlPath = path.join(__dirname, "logical-questions.sql");
    console.log("\nGenerating logical-questions.sql for collaborator sync...");

    let sql = "-- =====================================================\n";
    sql += "-- APTIACE - LOGICAL REASONING QUESTIONS (19 TOPICS, 475 QUESTIONS)\n";
    sql += "-- =====================================================\n\n";

    expectedTopics.forEach((topicName, tIdx) => {
        const tQuestions = allQuestions.filter(q => q.topic === topicName);
        sql += `-- =====================================================\n`;
        sql += `-- TOPIC ${(tIdx + 1).toString().padStart(2, "0")}: ${topicName.toUpperCase()}\n`;
        sql += `-- =====================================================\n\n`;

        sql += `INSERT INTO questions (topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation) VALUES\n`;

        const rowStrings = tQuestions.map(q => {
            return `(${escapeSql(q.topic)}, ${escapeSql(q.question)}, ${escapeSql(q.option_a)}, ${escapeSql(q.option_b)}, ${escapeSql(q.option_c)}, ${escapeSql(q.option_d)}, ${escapeSql(q.correct_answer)}, ${escapeSql(q.difficulty)}, ${escapeSql(q.explanation)})`;
        });

        sql += rowStrings.join(",\n") + ";\n\n";
    });

    fs.writeFileSync(sqlPath, sql, "utf8");
    console.log(`Exported all 475 questions to: ${sqlPath}`);
    console.log("Seeding complete!");
    db.close();
}
