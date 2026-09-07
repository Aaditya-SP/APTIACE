const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "aptiace.db");
const sqlPath = path.join(__dirname, "verbal-questions.sql");

console.log("=============================================");
console.log("APTIACE - Verbal Questions Importer");
console.log("=============================================");
console.log("Database:", dbPath);
console.log("SQL File:", sqlPath);
console.log("");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
    console.log("Connected to database.");
});

// Read SQL file
const sqlContent = fs.readFileSync(sqlPath, "utf8");

// Extract INSERT blocks - each INSERT INTO ... VALUES block followed by rows
// Strategy: Find each INSERT INTO ... VALUES block and extract individual rows
const insertBlocks = [];
const insertRegex = /INSERT INTO questions\s*\(([^)]+)\)\s*VALUES\s*([\s\S]*?)(?=INSERT INTO|$)/gi;

let match;
while ((match = insertRegex.exec(sqlContent)) !== null) {
    const columns = match[1].trim();
    const valuesBlock = match[2].trim();
    insertBlocks.push({ columns, valuesBlock });
}

console.log(`Found ${insertBlocks.length} INSERT blocks.\n`);

let totalInserted = 0;
let totalErrors = 0;
let blocksProcessed = 0;

db.serialize(() => {

    insertBlocks.forEach((block, blockIndex) => {

        // Parse individual row tuples from the VALUES block
        // Each row starts with ( and ends with ),  or ); 
        const rows = [];
        let depth = 0;
        let current = "";
        let inString = false;
        let escapeNext = false;

        for (let i = 0; i < block.valuesBlock.length; i++) {
            const ch = block.valuesBlock[i];

            if (escapeNext) {
                current += ch;
                escapeNext = false;
                continue;
            }

            if (ch === "'" && !escapeNext) {
                // Check for escaped quote ''
                if (block.valuesBlock[i + 1] === "'") {
                    current += "''";
                    i++;
                    continue;
                }
                inString = !inString;
                current += ch;
                continue;
            }

            if (ch === "\\" && inString) {
                escapeNext = true;
                current += ch;
                continue;
            }

            if (!inString) {
                if (ch === "(") {
                    depth++;
                    if (depth === 1) {
                        current = "(";
                        continue;
                    }
                }
                if (ch === ")") {
                    depth--;
                    if (depth === 0) {
                        current += ")";
                        rows.push(current.trim());
                        current = "";
                        continue;
                    }
                }
            }

            if (depth > 0) {
                current += ch;
            }
        }

        console.log(`Block ${blockIndex + 1}: Found ${rows.length} rows.`);

        const sql = `INSERT INTO questions (${block.columns}) VALUES `;

        rows.forEach((row, rowIndex) => {

            const fullSql = sql + row;

            db.run(fullSql, function(err) {

                if (err) {
                    totalErrors++;
                    console.error(`  ERROR row ${rowIndex + 1}:`, err.message);
                    console.error("    SQL:", fullSql.substring(0, 150) + "...");
                } else {
                    totalInserted++;
                }

            });

        });

    });

});

// After all, verify
db.all(
    `SELECT topic, COUNT(*) as count 
     FROM questions 
     WHERE topic IN (
         'Spotting Errors', 'Synonyms', 'Antonyms',
         'Selecting Words', 'Spellings', 'Sentence Formation',
         'Ordering of Words', 'Sentence Correction',
         'Sentence Improvement', 'Completing Statements',
         'Ordering of Sentences', 'Paragraph Formation',
         'Cloze Test', 'Comprehension', 'One Word Substitutes',
         'Idioms and Phrases', 'Change of Voice',
         'Change of Speech', 'Verbal Analogies'
     )
     GROUP BY topic
     ORDER BY topic`,
    [],
    (err, rows) => {
        if (err) {
            console.error("Verification error:", err.message);
        } else {
            console.log("\n=============================================");
            console.log("VERBAL ABILITY QUESTION COUNTS:");
            console.log("---------------------------------------------");
            let total = 0;
            rows.forEach(row => {
                console.log(`  ${row.topic}: ${row.count}`);
                total += row.count;
            });
            console.log("---------------------------------------------");
            console.log(`  TOTAL: ${total}`);
            console.log("=============================================");
        }

        db.close(() => {
            console.log("\nDatabase closed. Import complete!");
        });
    }
);
