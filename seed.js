const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "aptiace.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("Connected to SQLite.");
    }
});

const questions = [
    // =========================
    // EASY — Questions 1-5
    // =========================
    {
        topic: "Percentage",
        question: "What is 20% of 250?",
        option_a: "40",
        option_b: "50",
        option_c: "60",
        option_d: "70",
        correct_answer: "B",
        difficulty: "Easy",
        explanation: "20% of 250 = (20 / 100) * 250 = 0.20 * 250 = 50."
    },
    {
        topic: "Percentage",
        question: "Express 3/5 as a percentage.",
        option_a: "50%",
        option_b: "55%",
        option_c: "60%",
        option_d: "65%",
        correct_answer: "C",
        difficulty: "Easy",
        explanation: "(3 / 5) * 100% = 0.6 * 100% = 60%."
    },
    {
        topic: "Percentage",
        question: "What percentage of 80 is 20?",
        option_a: "20%",
        option_b: "25%",
        option_c: "30%",
        option_d: "35%",
        correct_answer: "B",
        difficulty: "Easy",
        explanation: "(20 / 80) * 100% = (1 / 4) * 100% = 25%."
    },
    {
        topic: "Percentage",
        question: "If 15% of x is 45, what is the value of x?",
        option_a: "250",
        option_b: "300",
        option_c: "350",
        option_d: "400",
        correct_answer: "B",
        difficulty: "Easy",
        explanation: "0.15 * x = 45 => x = 45 / 0.15 = 300."
    },
    {
        topic: "Percentage",
        question: "A student scored 36 out of 50 in an exam. What is the percentage?",
        option_a: "68%",
        option_b: "70%",
        option_c: "72%",
        option_d: "75%",
        correct_answer: "C",
        difficulty: "Easy",
        explanation: "(36 / 50) * 100% = 36 * 2 = 72%."
    },

    // =========================
    // MEDIUM — Questions 6-10
    // =========================
    {
        topic: "Percentage",
        question: "If price of an item increases from $80 to $100, find the percentage increase.",
        option_a: "20%",
        option_b: "25%",
        option_c: "30%",
        option_d: "35%",
        correct_answer: "B",
        difficulty: "Medium",
        explanation: "Increase = 100 - 80 = 20. Percentage Increase = (20 / 80) * 100% = 25%."
    },
    {
        topic: "Percentage",
        question: "A salary of $4,000 is reduced by 15%. What is the new salary?",
        option_a: "$3,200",
        option_b: "$3,400",
        option_c: "$3,500",
        option_d: "$3,600",
        correct_answer: "B",
        difficulty: "Medium",
        explanation: "Reduction = 15% of 4000 = 600. New salary = 4000 - 600 = $3,400."
    },
    {
        topic: "Percentage",
        question: "In a class of 60 students, 45% are girls. How many boys are there?",
        option_a: "27",
        option_b: "30",
        option_c: "33",
        option_d: "35",
        correct_answer: "C",
        difficulty: "Medium",
        explanation: "Percentage of boys = 100% - 45% = 55%. Number of boys = 55% of 60 = 0.55 * 60 = 33."
    },
    {
        topic: "Percentage",
        question: "If 30% of a number is 120, what is 50% of the same number?",
        option_a: "180",
        option_b: "200",
        option_c: "220",
        option_d: "250",
        correct_answer: "B",
        difficulty: "Medium",
        explanation: "Let the number be x. 0.30 * x = 120 => x = 400. 50% of 400 = 200."
    },
    {
        topic: "Percentage",
        question: "A shop gives a 10% discount on an item tagged at $250. What is the selling price?",
        option_a: "$220",
        option_b: "$225",
        option_c: "$230",
        option_d: "$235",
        correct_answer: "B",
        difficulty: "Medium",
        explanation: "Discount = 10% of 250 = $25. Selling Price = 250 - 25 = $225."
    },

    // =========================
    // HARD — Questions 11-15
    // =========================
    {
        topic: "Percentage",
        question: "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",
        option_a: "4% increase",
        option_b: "4% decrease",
        option_c: "No change",
        option_d: "2% decrease",
        correct_answer: "B",
        difficulty: "Hard",
        explanation: "Net change = x + y + (xy/100) = 20 - 20 + ((20 * -20) / 100) = -4% (a 4% decrease)."
    },
    {
        topic: "Percentage",
        question: "The population of a town increases from 50,000 to 60,000. What is the percentage increase?",
        option_a: "10%",
        option_b: "15%",
        option_c: "20%",
        option_d: "25%",
        correct_answer: "C",
        difficulty: "Hard",
        explanation: "Increase = 60,000 - 50,000 = 10,000. Percentage = (10,000 / 50,000) * 100% = 20%."
    },
    {
        topic: "Percentage",
        question: "A student's marks increase from 400 to 460. What is the percentage increase?",
        option_a: "10%",
        option_b: "12%",
        option_c: "15%",
        option_d: "20%",
        correct_answer: "C",
        difficulty: "Hard",
        explanation: "Increase = 460 - 400 = 60. Percentage = (60 / 400) * 100% = 15%."
    },
    {
        topic: "Percentage",
        question: "If 40% of a number is 80, what is 75% of that number?",
        option_a: "120",
        option_b: "150",
        option_c: "160",
        option_d: "180",
        correct_answer: "B",
        difficulty: "Hard",
        explanation: "Let the number be x. 0.40 * x = 80 => x = 200. 75% of 200 = 0.75 * 200 = 150."
    },
    {
        topic: "Percentage",
        question: "A number is first increased by 10% and then increased by 20%. What is the total percentage increase?",
        option_a: "30%",
        option_b: "32%",
        option_c: "28%",
        option_d: "35%",
        correct_answer: "B",
        difficulty: "Hard",
        explanation: "Net increase = a + b + (ab/100) = 10 + 20 + ((10 * 20) / 100) = 30 + 2 = 32%."
    },

    // =========================
    // ADVANCED — Questions 16-20
    // =========================
    {
        topic: "Percentage",
        question: "A person's salary is increased by 25%. By what percentage should the new salary be decreased to get the original salary?",
        option_a: "15%",
        option_b: "18%",
        option_c: "20%",
        option_d: "25%",
        correct_answer: "C",
        difficulty: "Advanced",
        explanation: "Required reduction = [r / (100 + r)] * 100% = [25 / 125] * 100% = 20%."
    },
    {
        topic: "Percentage",
        question: "The price of a product is increased by 30%. By what percentage must the increased price be reduced to restore the original price?",
        option_a: "20%",
        option_b: "23.08%",
        option_c: "25%",
        option_d: "30%",
        correct_answer: "B",
        difficulty: "Advanced",
        explanation: "Required reduction = [30 / (100 + 30)] * 100% = (30 / 130) * 100% = 23.076% ≈ 23.08%."
    },
    {
        topic: "Percentage",
        question: "A number is decreased by 20% and then increased by 25%. What is the final percentage change?",
        option_a: "5% increase",
        option_b: "5% decrease",
        option_c: "No change",
        option_d: "10% increase",
        correct_answer: "C",
        difficulty: "Advanced",
        explanation: "Net change = -20 + 25 + ((-20 * 25) / 100) = 5 - 5 = 0% (No change)."
    },
    {
        topic: "Percentage",
        question: "In an examination, a student scores 30% marks and fails by 20 marks. Another student scores 40% marks and gets 30 marks more than the passing marks. Find the maximum marks.",
        option_a: "400",
        option_b: "450",
        option_c: "500",
        option_d: "600",
        correct_answer: "C",
        difficulty: "Advanced",
        explanation: "Difference in % = 40% - 30% = 10%. Difference in marks = 30 - (-20) = 50 marks. 10% = 50 => Total (100%) = 500."
    },
    {
        topic: "Percentage",
        question: "The population of a city increases by 10% in the first year and decreases by 10% in the second year. What is the net change?",
        option_a: "1% increase",
        option_b: "1% decrease",
        option_c: "No change",
        option_d: "2% decrease",
        correct_answer: "B",
        difficulty: "Advanced",
        explanation: "Net change = 10 - 10 + ((10 * -10) / 100) = -1% (1% decrease)."
    },

    // =========================
    // INTERVIEW — Questions 21-25
    // =========================
    {
        topic: "Percentage",
        question: "A shopkeeper marks an article 40% above its cost price and gives a 20% discount. What is his profit percentage?",
        option_a: "10%",
        option_b: "12%",
        option_c: "15%",
        option_d: "20%",
        correct_answer: "B",
        difficulty: "Interview",
        explanation: "Let CP = 100. Marked Price = 140. Selling Price = 140 * 0.80 = 112. Profit = 112 - 100 = 12%."
    },
    {
        topic: "Percentage",
        question: "A number is increased by 50% and then decreased by 40%. What is the net percentage change?",
        option_a: "10% increase",
        option_b: "10% decrease",
        option_c: "20% increase",
        option_d: "20% decrease",
        correct_answer: "B",
        difficulty: "Interview",
        explanation: "Net change = 50 - 40 + ((50 * -40) / 100) = 10 - 20 = -10% (10% decrease)."
    },
    {
        topic: "Percentage",
        question: "If the numerator of a fraction is increased by 20% and its denominator is decreased by 20%, by what percentage does the value of the fraction increase?",
        option_a: "40%",
        option_b: "45%",
        option_c: "50%",
        option_d: "60%",
        correct_answer: "C",
        difficulty: "Interview",
        explanation: "New fraction = (1.20 * N) / (0.80 * D) = (1.2 / 0.8) * (N/D) = 1.5 * (N/D). Increase = (1.5 - 1) * 100% = 50%."
    },
    {
        topic: "Percentage",
        question: "A candidate needs 40% marks to pass an examination. He scores 220 marks and fails by 20 marks. What are the maximum marks?",
        option_a: "500",
        option_b: "550",
        option_c: "600",
        option_d: "650",
        correct_answer: "C",
        difficulty: "Interview",
        explanation: "Passing marks = 220 + 20 = 240. 40% of Total = 240 => Total = 240 / 0.40 = 600."
    },
    {
        topic: "Percentage",
        question: "A company's profit increases by 20% while its expenditure increases by 10%. If the original profit was 25% of the expenditure, what is the percentage increase in profit as a percentage of the new expenditure?",
        option_a: "25%",
        option_b: "27.27%",
        option_c: "30%",
        option_d: "33.33%",
        correct_answer: "B",
        difficulty: "Interview",
        explanation: "Let original expenditure = 100 => original profit = 25. New profit = 25 * 1.20 = 30. New expenditure = 100 * 1.10 = 110. Profit as % of new expenditure = (30 / 110) * 100% = 27.27%."
    }
];

db.serialize(() => {
    // Drop table if exists to start fresh and avoid duplicates
    db.run(`DROP TABLE IF EXISTS questions`);

    // Create table with explanation column
    db.run(`
        CREATE TABLE questions (
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
    `);

    const sql = `
        INSERT INTO questions (
            topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const stmt = db.prepare(sql);
    questions.forEach((q) => {
        stmt.run([
            q.topic,
            q.question,
            q.option_a,
            q.option_b,
            q.option_c,
            q.option_d,
            q.correct_answer,
            q.difficulty,
            q.explanation
        ]);
    });
    stmt.finalize();
});

db.close((err) => {
    if (err) {
        console.error("Error closing DB:", err.message);
    } else {
        console.log(`Database reset: ${questions.length} questions with explanations seeded successfully.`);
    }
});