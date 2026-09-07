const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("aptiace.db");

console.log("=============================================");
console.log("APTIACE - Normalize Aptitude Difficulties");
console.log("=============================================\n");

// Verbal topics to exclude
const verbalTopics = [
    'Spotting Errors','Synonyms','Antonyms','Selecting Words','Spellings',
    'Sentence Formation','Ordering of Words','Sentence Correction',
    'Sentence Improvement','Completing Statements','Ordering of Sentences',
    'Paragraph Formation','Cloze Test','Comprehension','One Word Substitutes',
    'Idioms and Phrases','Change of Voice','Change of Speech','Verbal Analogies'
];

db.serialize(() => {

    // =====================================================
    // STEP 1: Normalize casing (easy → Easy, etc.)
    // =====================================================

    console.log("Step 1: Normalizing difficulty casing...");

    const caseFixes = [
        ["easy", "Easy"],
        ["medium", "Medium"],
        ["hard", "Hard"],
        ["advanced", "Advanced"],
        ["interview", "Interview"]
    ];

    caseFixes.forEach(([from, to]) => {
        db.run(
            `UPDATE questions SET difficulty = ? WHERE LOWER(difficulty) = ? AND difficulty != ?`,
            [to, from, to],
            function(err) {
                if (err) console.error("  Error:", err.message);
                else console.log(`  "${from}" → "${to}": ${this.changes} rows`);
            }
        );
    });

    // =====================================================
    // STEP 2: For aptitude topics with only 3 levels,
    //         redistribute hard questions into 5 levels.
    //
    //         Strategy: Topics with only Easy/Medium/Hard
    //         have uneven hard distributions (often 13 hard).
    //         Split hard questions into Hard/Advanced/Interview.
    // =====================================================

    console.log("\nStep 2: Redistributing to 5 difficulty levels...");

    // Get all aptitude topics
    db.all(
        `SELECT DISTINCT topic FROM questions 
         WHERE topic NOT IN (${verbalTopics.map(() => '?').join(',')})
         ORDER BY topic`,
        verbalTopics,
        (err, topics) => {
            if (err) { console.error(err); return; }

            let pending = topics.length;

            topics.forEach(topicRow => {
                const topic = topicRow.topic;

                // Check if topic already has Advanced/Interview levels
                db.all(
                    `SELECT difficulty, COUNT(*) as count FROM questions 
                     WHERE topic = ? GROUP BY difficulty ORDER BY difficulty`,
                    [topic],
                    (err, diffs) => {
                        if (err) { console.error(err); return; }

                        const diffMap = {};
                        diffs.forEach(d => {
                            diffMap[d.difficulty.toLowerCase()] = d.count;
                        });

                        const hasAdvanced = diffMap["advanced"] || 0;
                        const hasInterview = diffMap["interview"] || 0;
                        const hardCount = diffMap["hard"] || 0;

                        if (hasAdvanced > 0 && hasInterview > 0) {
                            console.log(`  ${topic}: Already has 5 levels, skipping.`);
                            if (--pending === 0) verify();
                            return;
                        }

                        // Get hard questions for this topic, ordered by ID
                        db.all(
                            `SELECT id FROM questions 
                             WHERE topic = ? AND LOWER(difficulty) = 'hard'
                             ORDER BY id`,
                            [topic],
                            (err, hardQs) => {
                                if (err) { console.error(err); return; }

                                if (hardQs.length < 3) {
                                    console.log(`  ${topic}: Only ${hardQs.length} hard questions, can't split.`);
                                    if (--pending === 0) verify();
                                    return;
                                }

                                // Split hard questions into 3 groups:
                                // First third → keep as Hard
                                // Second third → Advanced
                                // Last third → Interview
                                const third = Math.floor(hardQs.length / 3);
                                const advancedIds = hardQs.slice(third, third * 2).map(q => q.id);
                                const interviewIds = hardQs.slice(third * 2).map(q => q.id);

                                let subPending = 2;

                                if (advancedIds.length > 0) {
                                    db.run(
                                        `UPDATE questions SET difficulty = 'Advanced' 
                                         WHERE id IN (${advancedIds.join(',')})`,
                                        function(err) {
                                            if (err) console.error("  Error:", err.message);
                                            else console.log(`  ${topic}: ${this.changes} → Advanced`);
                                            if (--subPending === 0 && --pending === 0) verify();
                                        }
                                    );
                                } else {
                                    if (--subPending === 0 && --pending === 0) verify();
                                }

                                if (interviewIds.length > 0) {
                                    db.run(
                                        `UPDATE questions SET difficulty = 'Interview' 
                                         WHERE id IN (${interviewIds.join(',')})`,
                                        function(err) {
                                            if (err) console.error("  Error:", err.message);
                                            else console.log(`  ${topic}: ${this.changes} → Interview`);
                                            if (--subPending === 0 && --pending === 0) verify();
                                        }
                                    );
                                } else {
                                    if (--subPending === 0 && --pending === 0) verify();
                                }
                            }
                        );
                    }
                );
            });
        }
    );
});


function verify() {
    console.log("\n=============================================");
    console.log("VERIFICATION");
    console.log("=============================================\n");

    db.all(
        `SELECT topic, difficulty, COUNT(*) as count 
         FROM questions 
         WHERE topic NOT IN (${verbalTopics.map(() => '?').join(',')})
         GROUP BY topic, difficulty 
         ORDER BY topic, 
            CASE LOWER(difficulty)
                WHEN 'easy' THEN 1
                WHEN 'medium' THEN 2
                WHEN 'hard' THEN 3
                WHEN 'advanced' THEN 4
                WHEN 'interview' THEN 5
            END`,
        verbalTopics,
        (err, rows) => {
            if (err) { console.error(err); db.close(); return; }

            let currentTopic = "";
            rows.forEach(r => {
                if (r.topic !== currentTopic) {
                    if (currentTopic) console.log("");
                    console.log(r.topic + ":");
                    currentTopic = r.topic;
                }
                console.log(`  ${r.difficulty}: ${r.count}`);
            });

            console.log("\n=============================================");
            db.close(() => console.log("Done!"));
        }
    );
}
