const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "aptiace.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        return;
    }

    console.log("Connected to SQLite.");
});

const explanations = {

    1: "20% of 250 = (20/100) × 250 = 50. Therefore, the correct answer is 50.",

    2: "15% of 200 = (15/100) × 200 = 30. Therefore, the correct answer is 30.",

    3: "Percentage = (Part/Whole) × 100 = (40/160) × 100 = 25%. Therefore, 40 is 25% of 160.",

    4: "25% of 360 = (25/100) × 360 = 90. Therefore, the correct answer is 90.",

    5: "12.5% = 12.5/100 = 1/8. Therefore, 12.5% of 80 = 80/8 = 10.",


    6: "30% of the number = 72. Therefore, the number = 72 × (100/30) = 240.",

    7: "Increase = 10% of ₹20,000 = ₹2,000. New salary = ₹20,000 + ₹2,000 = ₹22,000.",

    8: "Discount = 20% of ₹500 = ₹100. New price = ₹500 − ₹100 = ₹400.",

    9: "30% of the number = 54. Therefore, number = 54 × (100/30) = 180.",

    10: "15% of the number = 45. Therefore, number = 45 × (100/15) = 300.",


    11: "Assume the original number is 100. After a 20% increase it becomes 120. A 20% decrease on 120 is 24, giving 96. Therefore, the final value is 4% less than the original.",

    12: "Increase = 60,000 − 50,000 = 10,000. Percentage increase = (10,000/50,000) × 100 = 20%.",

    13: "Increase = 460 − 400 = 60. Percentage increase = (60/400) × 100 = 15%.",

    14: "40% of the number = 80. Therefore, number = 80 × (100/40) = 200. 75% of 200 = (75/100) × 200 = 150.",

    15: "Assume the original number is 100. After a 10% increase it becomes 110. A further 20% increase gives 110 × 1.20 = 132. Therefore, total increase = 32%.",


    16: "Assume the original salary is 100. After a 25% increase it becomes 125. To return from 125 to 100, the decrease is 25. Percentage decrease = (25/125) × 100 = 20%.",

    17: "Assume the original price is 100. After a 30% increase it becomes 130. To return to 100, the reduction is 30. Percentage reduction = (30/130) × 100 = 23.08%.",

    18: "Assume the original number is 100. After a 20% decrease it becomes 80. Increasing 80 by 25% gives 80 × 1.25 = 100. Therefore, there is no net change.",

    19: "Let the maximum marks be x. Passing marks = 30% of x + 20. The second student gets 40% of x and is 30 marks above passing marks. Therefore, 40%x = 30%x + 20 + 30. Thus, 10%x = 50, so x = 500.",

    20: "Assume the original population is 100. After a 10% increase it becomes 110. A 10% decrease on 110 gives 99. Therefore, the population has decreased by 1%.",


    21: "Assume the cost price is ₹100. Marked price = ₹140. A 20% discount gives selling price = ₹140 × 80/100 = ₹112. Profit = ₹112 − ₹100 = ₹12. Therefore, profit percentage = 12%.",

    22: "Assume the original number is 100. After a 50% increase it becomes 150. A 40% decrease on 150 gives 150 × 60/100 = 90. Therefore, the final value is 10% less than the original.",

    23: "Assume the original fraction is N/D. New numerator = 1.20N and new denominator = 0.80D. New fraction = (1.20N)/(0.80D) = 1.5(N/D). Therefore, the fraction increases by 50%.",

    24: "The candidate scores 220 marks and fails by 20 marks, so passing marks = 220 + 20 = 240. Passing marks are 40% of maximum marks. Therefore, maximum marks = 240 × (100/40) = 600.",

    25: "Assume original expenditure = 100. Original profit = 25% of expenditure = 25. New expenditure = 110 after a 10% increase. New profit = 30 after a 20% increase. Profit as a percentage of new expenditure = (30/110) × 100 = 27.27%."

};


db.serialize(() => {

    const sql = `
        UPDATE questions
        SET explanation = ?
        WHERE id = ?
    `;

    Object.entries(explanations).forEach(([id, explanation]) => {

        db.run(
            sql,
            [explanation, id],
            function (err) {

                if (err) {

                    console.error(
                        `Error updating question ${id}:`,
                        err.message
                    );

                } else {

                    console.log(
                        `Explanation added to question ${id}`
                    );

                }

            }
        );

    });

});


db.close(() => {

    console.log(
        "All 25 explanations have been added."
    );

});