// =====================================================
// APTIACE COMMON QUIZ ENGINE
// =====================================================


// =====================================================
// GET TOPIC FROM URL
// =====================================================

const urlParams =
    new URLSearchParams(window.location.search);

const topic =
    urlParams.get("topic");

console.log("Quiz topic:", topic);


// =====================================================
// QUIZ VARIABLES
// =====================================================

let questions = [];

let currentQuestion = 0;

let selectedAnswer = null;

let answerSubmitted = false;

let score = 0;


// =====================================================
// HTML ELEMENTS
// =====================================================

const quizTitle =
    document.getElementById("quizTitle");

const questionNumber =
    document.getElementById("questionNumber");

const difficultyBadge =
    document.getElementById("difficultyBadge");

const progressBar =
    document.getElementById("progressBar");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("options");

const feedback =
    document.getElementById("feedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const submitButton =
    document.getElementById("submitButton");

const selectionMessage =
    document.getElementById("selectionMessage");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");


// =====================================================
// LOAD QUESTIONS
// =====================================================

async function loadQuestions() {

    try {

        if (!topic) {

            questionText.textContent =
                "No quiz topic was specified.";

            return;

        }


        quizTitle.textContent =
            topic + " Practice";


        const response =
            await fetch(
                `/api/questions?topic=${encodeURIComponent(topic)}`
            );


        if (!response.ok) {

            throw new Error(
                "Failed to load questions"
            );

        }


        questions =
            await response.json();


        console.log(
            "Questions loaded:",
            questions
        );


        if (!questions.length) {

            questionText.textContent =
                "No questions found for this topic.";

            return;

        }


        showQuestion();

    }

    catch (error) {

        console.error(
            "Quiz loading error:",
            error
        );


        questionText.textContent =
            "Unable to load questions.";

    }

}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const q =
        questions[currentQuestion];


    selectedAnswer = null;

    answerSubmitted = false;


    // ---------------------------------------------
    // QUESTION NUMBER
    // ---------------------------------------------

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    // ---------------------------------------------
    // DIFFICULTY
    // ---------------------------------------------

    const difficulty =
        q.difficulty.toLowerCase();


    difficultyBadge.textContent =
        difficulty.toUpperCase();


    difficultyBadge.className =
        "difficulty " + difficulty;


    // ---------------------------------------------
    // PROGRESS
    // ---------------------------------------------

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        progress + "%";


    // ---------------------------------------------
    // QUESTION TEXT
    // ---------------------------------------------

    questionText.textContent =
        q.question;


    // ---------------------------------------------
    // CLEAR OPTIONS
    // ---------------------------------------------

    optionsContainer.innerHTML = "";


    // ---------------------------------------------
    // OPTIONS
    // ---------------------------------------------

    const optionValues = [

        q.option_a,
        q.option_b,
        q.option_c,
        q.option_d

    ];


    optionValues.forEach(
        (optionText, index) => {

            const option =
                document.createElement("div");


            option.className =
                "option";


            option.textContent =
                `${String.fromCharCode(65 + index)}. ${optionText}`;


            option.addEventListener(
                "click",
                () => selectOption(index)
            );


            optionsContainer.appendChild(
                option
            );

        }
    );


    // ---------------------------------------------
    // RESET FEEDBACK
    // ---------------------------------------------

    feedback.style.display =
        "none";


    feedback.className =
        "feedback";


    feedbackTitle.textContent =
        "";


    feedbackText.textContent =
        "";


    // ---------------------------------------------
    // RESET BUTTON
    // ---------------------------------------------

    submitButton.disabled =
        true;


    submitButton.textContent =
        "Submit Answer";


    selectionMessage.textContent =
        "Select an answer";

}


// =====================================================
// SELECT OPTION
// =====================================================

function selectOption(index) {

    if (answerSubmitted) {

        return;

    }


    selectedAnswer =
        index;


    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(
        option => {

            option.classList.remove(
                "selected"
            );

        }
    );


    allOptions[index]
        .classList.add("selected");


    submitButton.disabled =
        false;


    selectionMessage.textContent =
        "Answer selected";

}


// =====================================================
// CONVERT DATABASE ANSWER
// =====================================================
//
// Database stores:
//
// A = option 0
// B = option 1
// C = option 2
// D = option 3
//
// =====================================================

function getCorrectAnswerIndex(
    correctAnswer
) {

    const answer =
        String(correctAnswer)
            .trim()
            .toUpperCase();


    const answerMap = {

        "A": 0,

        "B": 1,

        "C": 2,

        "D": 3

    };


    return answerMap[answer];

}


// =====================================================
// SUBMIT ANSWER
// =====================================================

function submitAnswer() {

    if (selectedAnswer === null) {

        return;

    }


    // ---------------------------------------------
    // IF ALREADY SUBMITTED
    // ---------------------------------------------

    if (answerSubmitted) {

        nextQuestion();

        return;

    }


    answerSubmitted = true;


    const q =
        questions[currentQuestion];


    const allOptions =
        document.querySelectorAll(".option");


    // ---------------------------------------------
    // GET CORRECT ANSWER INDEX
    // ---------------------------------------------

    const correctAnswerIndex =
        getCorrectAnswerIndex(
            q.correct_answer
        );


    console.log(
        "Correct answer:",
        q.correct_answer
    );


    console.log(
        "Correct answer index:",
        correctAnswerIndex
    );


    console.log(
        "Selected answer:",
        selectedAnswer
    );


    // ---------------------------------------------
    // SHOW CORRECT ANSWER
    // ---------------------------------------------

    if (
        correctAnswerIndex !== undefined &&
        allOptions[correctAnswerIndex]
    ) {

        allOptions[
            correctAnswerIndex
        ].classList.add("correct");

    }


    // ---------------------------------------------
    // CHECK ANSWER
    // ---------------------------------------------

    if (
        selectedAnswer ===
        correctAnswerIndex
    ) {

        // Correct

        score++;


        feedbackTitle.textContent =
            "✓ Correct!";


        feedback.className =
            "feedback correct-feedback";


    }

    else {

        // Wrong

        if (allOptions[selectedAnswer]) {

            allOptions[selectedAnswer]
                .classList.add("wrong");

        }


        feedbackTitle.textContent =
            "✗ Incorrect";


        feedback.className =
            "feedback wrong-feedback";

    }


    // ---------------------------------------------
    // SHOW EXPLANATION
    // ---------------------------------------------

    feedbackText.textContent =
        q.explanation ||
        "No explanation available.";


    feedback.style.display =
        "block";


    // ---------------------------------------------
    // DISABLE OPTIONS
    // ---------------------------------------------

    allOptions.forEach(
        option => {

            option.style.pointerEvents =
                "none";

        }
    );


    // ---------------------------------------------
    // CHANGE BUTTON
    // ---------------------------------------------

    if (
        currentQuestion <
        questions.length - 1
    ) {

        submitButton.textContent =
            "Next Question";

    }

    else {

        submitButton.textContent =
            "View Result";

    }

}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

        return;

    }


    showQuestion();

}


// =====================================================
// SHOW RESULT
// =====================================================

function showResult() {

    quizSection.style.display =
        "none";


    resultSection.style.display =
        "block";


    finalScore.textContent =
        `${score} / ${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent! You have a strong understanding of this topic.";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good job! Keep practicing to improve your score.";

    }

    else {

        resultMessage.textContent =
            "Keep practicing. Review the explanations and try again.";

    }

}


// =====================================================
// RESTART QUIZ
// =====================================================

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswer = null;

    answerSubmitted = false;

    score = 0;


    resultSection.style.display =
        "none";


    quizSection.style.display =
        "block";


    showQuestion();

}


// =====================================================
// BUTTON EVENT
// =====================================================

submitButton.addEventListener(
    "click",
    submitAnswer
);


// =====================================================
// START QUIZ
// =====================================================

loadQuestions();