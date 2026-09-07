// =====================================================
// APTIACE - COMMON QUIZ ENGINE
// =====================================================

console.log("=====================================");
console.log("APTIACE QUIZ ENGINE STARTING");
console.log("=====================================");


// =====================================================
// GET TOPIC FROM URL
// =====================================================

const urlParams = new URLSearchParams(window.location.search);

const topic = urlParams.get("topic");

console.log("Topic from URL:", topic);


// =====================================================
// QUIZ VARIABLES
// =====================================================

let questions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let answerSubmitted = false;
let score = 0;


// =====================================================
// GET HTML ELEMENTS
// =====================================================

const quizTitle = document.getElementById("quizTitle");
const questionNumber = document.getElementById("questionNumber");
const difficultyBadge = document.getElementById("difficultyBadge");
const progressBar = document.getElementById("progressBar");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const submitButton = document.getElementById("submitButton");
const selectionMessage = document.getElementById("selectionMessage");

const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const formulaContent = document.getElementById("formulaContent");
const formulaToggle = document.getElementById("formulaToggle");


// =====================================================
// CHECK HTML ELEMENTS
// =====================================================

console.log("Checking HTML elements...");

if (!quizTitle) {
    console.error("ERROR: quizTitle not found");
}

if (!questionNumber) {
    console.error("ERROR: questionNumber not found");
}

if (!difficultyBadge) {
    console.error("ERROR: difficultyBadge not found");
}

if (!progressBar) {
    console.error("ERROR: progressBar not found");
}

if (!questionText) {
    console.error("ERROR: questionText not found");
}

if (!optionsContainer) {
    console.error("ERROR: options container not found");
}

if (!feedback) {
    console.error("ERROR: feedback not found");
}

if (!feedbackTitle) {
    console.error("ERROR: feedbackTitle not found");
}

if (!feedbackText) {
    console.error("ERROR: feedbackText not found");
}

if (!submitButton) {
    console.error("ERROR: submitButton not found");
}

if (!selectionMessage) {
    console.error("ERROR: selectionMessage not found");
}

if (!quizSection) {
    console.error("ERROR: quizSection not found");
}

if (!resultSection) {
    console.error("ERROR: resultSection not found");
}

if (!finalScore) {
    console.error("ERROR: finalScore not found");
}

if (!resultMessage) {
    console.error("ERROR: resultMessage not found");
}

if (!formulaContent) {
    console.error("ERROR: formulaContent not found");
}

if (!formulaToggle) {
    console.error("ERROR: formulaToggle not found");
}

console.log("HTML element check completed.");


// =====================================================
// FORMULAS FOR ALL 16 TOPICS
// =====================================================

const formulas = {

    // =================================================
    // 01 - NUMBER SYSTEM
    // =================================================

    "Number System": [

        [
            "Sum of first n natural numbers",
            "n(n + 1) / 2"
        ],

        [
            "Sum of first n odd numbers",
            "n²"
        ],

        [
            "Sum of first n even numbers",
            "n(n + 1)"
        ],

        [
            "Divisibility by 2",
            "Last digit must be 0, 2, 4, 6 or 8"
        ],

        [
            "Divisibility by 3",
            "Sum of digits must be divisible by 3"
        ],

        [
            "Divisibility by 5",
            "Last digit must be 0 or 5"
        ],

        [
            "Divisibility by 9",
            "Sum of digits must be divisible by 9"
        ],

        [
            "Divisibility by 10",
            "Last digit must be 0"
        ]

    ],


    // =================================================
    // 02 - HCF & LCM
    // =================================================

    "HCF & LCM": [

        [
            "HCF × LCM",
            "HCF × LCM = Product of two numbers"
        ],

        [
            "LCM",
            "LCM = Product of two numbers / HCF"
        ],

        [
            "HCF",
            "HCF is the greatest number that divides all given numbers exactly"
        ],

        [
            "Co-prime numbers",
            "HCF of co-prime numbers = 1"
        ],

        [
            "HCF of fractions",
            "HCF = HCF of numerators / LCM of denominators"
        ],

        [
            "LCM of fractions",
            "LCM = LCM of numerators / HCF of denominators"
        ]

    ],


    // =================================================
    // 03 - PERCENTAGE
    // =================================================

    "Percentage": [

        [
            "Percentage",
            "Percentage = (Part / Whole) × 100"
        ],

        [
            "x% of y",
            "x% of y = (x / 100) × y"
        ],

        [
            "Percentage increase",
            "Increase % = (Increase / Original) × 100"
        ],

        [
            "Percentage decrease",
            "Decrease % = (Decrease / Original) × 100"
        ],

        [
            "New value after increase",
            "New Value = Original × (1 + r/100)"
        ],

        [
            "New value after decrease",
            "New Value = Original × (1 − r/100)"
        ]

    ],


    // =================================================
    // 04 - PROFIT & LOSS
    // =================================================

    "Profit & Loss": [

        [
            "Profit",
            "Profit = Selling Price − Cost Price"
        ],

        [
            "Loss",
            "Loss = Cost Price − Selling Price"
        ],

        [
            "Profit %",
            "Profit % = (Profit / Cost Price) × 100"
        ],

        [
            "Loss %",
            "Loss % = (Loss / Cost Price) × 100"
        ],

        [
            "Selling Price with profit",
            "SP = CP × (100 + Profit%) / 100"
        ],

        [
            "Selling Price with loss",
            "SP = CP × (100 − Loss%) / 100"
        ],

        [
            "Cost Price with profit",
            "CP = SP × 100 / (100 + Profit%)"
        ],

        [
            "Cost Price with loss",
            "CP = SP × 100 / (100 − Loss%)"
        ]

    ],


    // =================================================
    // 05 - RATIO & PROPORTION
    // =================================================

    "Ratio & Proportion": [

        [
            "Ratio",
            "a : b = a / b"
        ],

        [
            "Equivalent ratios",
            "a : b = ka : kb"
        ],

        [
            "Proportion",
            "a : b = c : d → ad = bc"
        ],

        [
            "Fourth proportional",
            "a : b = c : x → x = bc / a"
        ],

        [
            "Third proportional",
            "a : b = b : x → x = b² / a"
        ]

    ],


    // =================================================
    // 06 - AVERAGES
    // =================================================

    "Averages": [

        [
            "Average",
            "Average = Sum of observations / Number of observations"
        ],

        [
            "Sum",
            "Sum = Average × Number of observations"
        ],

        [
            "Number of observations",
            "Number = Sum / Average"
        ]

    ],


    // =================================================
    // 07 - PROBLEMS ON AGES
    // =================================================

    "Problems on Ages": [

        [
            "Future age",
            "Future age = Present age + Number of years"
        ],

        [
            "Past age",
            "Past age = Present age − Number of years"
        ],

        [
            "Age difference",
            "Age difference remains constant"
        ]

    ],


    // =================================================
    // 08 - TIME & WORK
    // =================================================

    "Time & Work": [

        [
            "Work",
            "Work = Rate × Time"
        ],

        [
            "One-day work",
            "If work is completed in n days, one-day work = 1/n"
        ],

        [
            "Combined work",
            "Combined rate = Rate₁ + Rate₂"
        ],

        [
            "Time",
            "Time = Work / Rate"
        ],

        [
            "Work efficiency",
            "Efficiency ∝ 1 / Time"
        ]

    ],


    // =================================================
    // 09 - PIPES & CISTERNS
    // =================================================

    "Pipes & Cisterns": [

        [
            "Filling pipe",
            "If a pipe fills a tank in n hours, rate = 1/n"
        ],

        [
            "Emptying pipe",
            "If a pipe empties a tank in n hours, rate = −1/n"
        ],

        [
            "Combined rate",
            "Combined rate = Filling rate − Emptying rate"
        ],

        [
            "Time",
            "Time = 1 / Combined rate"
        ]

    ],


    // =================================================
    // 10 - TIME, SPEED & DISTANCE
    // =================================================

    "Time, Speed & Distance": [

        [
            "Distance",
            "Distance = Speed × Time"
        ],

        [
            "Speed",
            "Speed = Distance / Time"
        ],

        [
            "Time",
            "Time = Distance / Speed"
        ],

        [
            "km/h to m/s",
            "m/s = km/h × 5/18"
        ],

        [
            "m/s to km/h",
            "km/h = m/s × 18/5"
        ],

        [
            "Average speed",
            "Average Speed = Total Distance / Total Time"
        ]

    ],


    // =================================================
    // 11 - BOATS & STREAMS
    // =================================================

    "Boats & Streams": [

        [
            "Downstream speed",
            "Downstream = Boat speed + Stream speed"
        ],

        [
            "Upstream speed",
            "Upstream = Boat speed − Stream speed"
        ],

        [
            "Boat speed",
            "Boat speed = (Downstream + Upstream) / 2"
        ],

        [
            "Stream speed",
            "Stream speed = (Downstream − Upstream) / 2"
        ]

    ],


    // =================================================
    // 12 - PROBLEMS ON TRAINS
    // =================================================

    "Problems on Trains": [

        [
            "Train crossing a pole",
            "Time = Length of train / Speed"
        ],

        [
            "Train crossing a platform",
            "Time = (Train length + Platform length) / Speed"
        ],

        [
            "Opposite directions",
            "Relative speed = Speed₁ + Speed₂"
        ],

        [
            "Same direction",
            "Relative speed = |Speed₁ − Speed₂|"
        ]

    ],


    // =================================================
    // 13 - SIMPLE INTEREST
    // =================================================

    "Simple Interest": [

        [
            "Simple Interest",
            "SI = (P × R × T) / 100"
        ],

        [
            "Amount",
            "Amount = Principal + Simple Interest"
        ],

        [
            "Principal",
            "P = (SI × 100) / (R × T)"
        ],

        [
            "Rate",
            "R = (SI × 100) / (P × T)"
        ],

        [
            "Time",
            "T = (SI × 100) / (P × R)"
        ]

    ],


    // =================================================
    // 14 - COMPOUND INTEREST
    // =================================================

    "Compound Interest": [

        [
            "Compound Amount",
            "A = P(1 + R/100)^T"
        ],

        [
            "Compound Interest",
            "CI = A − P"
        ],

        [
            "Half-yearly compounding",
            "A = P(1 + R/200)^(2T)"
        ],

        [
            "Quarterly compounding",
            "A = P(1 + R/400)^(4T)"
        ]

    ],


    // =================================================
    // 15 - PROBABILITY
    // =================================================

    "Probability": [

        [
            "Probability",
            "P(E) = Favorable outcomes / Total outcomes"
        ],

        [
            "Probability range",
            "0 ≤ P(E) ≤ 1"
        ],

        [
            "Impossible event",
            "P(E) = 0"
        ],

        [
            "Certain event",
            "P(E) = 1"
        ],

        [
            "Complement",
            "P(not E) = 1 − P(E)"
        ]

    ],


    // =================================================
    // 16 - PERMUTATION & COMBINATION
    // =================================================

    "Permutation & Combination": [

        [
            "Factorial",
            "n! = n × (n − 1) × (n − 2) × ... × 1"
        ],

        [
            "Permutation",
            "nPr = n! / (n − r)!"
        ],

        [
            "Combination",
            "nCr = n! / [r!(n − r)!]"
        ],

        [
            "Permutation and combination relation",
            "nPr = nCr × r!"
        ],

        [
            "All objects arranged",
            "nPn = n!"
        ],

        [
            "Combination symmetry",
            "nCr = nC(n − r)"
        ],

        [
            "Permutation with repeated objects",
            "Number of arrangements = n! / (p!q!r!)"
        ],

        [
            "Circular permutation",
            "Number of circular arrangements = (n − 1)!"
        ]

    ],


    // =================================================
    // VERBAL ABILITY TOPICS (17-35)
    // =================================================


    // =================================================
    // 17 - SPOTTING ERRORS
    // =================================================

    "Spotting Errors": [

        [
            "Subject-Verb Agreement",
            "Singular subject → singular verb. Plural subject → plural verb."
        ],

        [
            "Tense Consistency",
            "Do not mix tenses in the same sentence without reason."
        ],

        [
            "Pronoun Agreement",
            "Pronouns must agree with their antecedents in number and gender."
        ],

        [
            "Article Usage",
            "'a' before consonant sounds, 'an' before vowel sounds, 'the' for specific nouns."
        ],

        [
            "Preposition Rules",
            "'agree with' a person, 'agree to' a proposal, 'agree on' a point."
        ]

    ],


    // =================================================
    // 18 - SYNONYMS
    // =================================================

    "Synonyms": [

        [
            "Definition",
            "A synonym is a word with the same or similar meaning as another word."
        ],

        [
            "Context Matters",
            "Choose the synonym that matches the specific context of usage."
        ],

        [
            "Common Roots",
            "'bene' = good, 'mal' = bad, 'phil' = love, 'phob' = fear."
        ],

        [
            "Elimination Strategy",
            "Remove antonyms and unrelated words first, then pick the closest match."
        ]

    ],


    // =================================================
    // 19 - ANTONYMS
    // =================================================

    "Antonyms": [

        [
            "Definition",
            "An antonym is a word with the opposite meaning of another word."
        ],

        [
            "Prefix Antonyms",
            "'un-', 'dis-', 'in-', 'im-', 'ir-', 'il-' often create opposites."
        ],

        [
            "Tricky Words",
            "'invaluable' = very valuable (NOT 'not valuable')."
        ],

        [
            "Strategy",
            "Know the word's meaning first, think of its opposite, then match options."
        ]

    ],


    // =================================================
    // 20 - SELECTING WORDS
    // =================================================

    "Selecting Words": [

        [
            "Context Clues",
            "Read the entire sentence to understand tone and meaning before choosing."
        ],

        [
            "Signal Words",
            "'but/however' = contrast, 'and/moreover' = addition, 'because' = cause."
        ],

        [
            "Collocations",
            "'make a decision' (not 'do'), 'heavy rain' (not 'strong')."
        ],

        [
            "Grammar Fit",
            "The word must match the required part of speech (noun, verb, adjective)."
        ]

    ],


    // =================================================
    // 21 - SPELLINGS
    // =================================================

    "Spellings": [

        [
            "i before e rule",
            "'i' before 'e' except after 'c'. Exceptions: weird, seize, neither."
        ],

        [
            "Double Consonants",
            "Double the final consonant before '-ing'/'-ed' if word ends in vowel+consonant: run→running."
        ],

        [
            "Drop the 'e'",
            "Drop silent 'e' before vowel suffixes: make→making. Keep before consonants: hope→hopeful."
        ],

        [
            "Common Misspellings",
            "accommodate, occurrence, separate, necessary, definitely, embarrass."
        ]

    ],


    // =================================================
    // 22 - SENTENCE FORMATION
    // =================================================

    "Sentence Formation": [

        [
            "SVO Order",
            "English follows Subject-Verb-Object order: 'The cat ate the fish.'"
        ],

        [
            "Adjective Placement",
            "Adjectives come before nouns: 'a beautiful house' (not 'a house beautiful')."
        ],

        [
            "Article Clues",
            "Articles (a, an, the) always precede the noun or its adjective."
        ],

        [
            "Strategy",
            "Identify the subject first, then the verb, then arrange the rest."
        ]

    ],


    // =================================================
    // 23 - ORDERING OF WORDS
    // =================================================

    "Ordering of Words": [

        [
            "Connectors",
            "Words like 'and', 'but', 'however', 'which', 'who' indicate order."
        ],

        [
            "Pronoun References",
            "Pronouns must come after the noun they refer to."
        ],

        [
            "Logical Sequence",
            "Cause before effect, general before specific, introduction before detail."
        ],

        [
            "Strategy",
            "Find mandatory pairs first, then build the sequence around them."
        ]

    ],


    // =================================================
    // 24 - SENTENCE CORRECTION
    // =================================================

    "Sentence Correction": [

        [
            "Subject-Verb Agreement",
            "Check the verb matches the subject, especially with 'neither...nor', 'either...or'."
        ],

        [
            "Parallel Structure",
            "Items in a list must be in the same form: 'to read, to write, to learn'."
        ],

        [
            "Modifier Placement",
            "Place modifiers next to the word they describe to avoid ambiguity."
        ],

        [
            "Comparisons",
            "'er/more' for two things, 'est/most' for three or more."
        ]

    ],


    // =================================================
    // 25 - SENTENCE IMPROVEMENT
    // =================================================

    "Sentence Improvement": [

        [
            "Conciseness",
            "'at this point in time' → 'now', 'in spite of the fact that' → 'although'."
        ],

        [
            "Avoid Redundancy",
            "'return back' → 'return', 'repeat again' → 'repeat', 'advance forward' → 'advance'."
        ],

        [
            "Active Voice",
            "Prefer active voice for clarity: 'She wrote the report' over 'The report was written by her'."
        ],

        [
            "Correct Idioms",
            "'comply with' (not 'to'), 'different from' (not 'than'), 'prefer X to Y' (not 'than')."
        ]

    ],


    // =================================================
    // 26 - COMPLETING STATEMENTS
    // =================================================

    "Completing Statements": [

        [
            "Signal Words",
            "'although' → contrast, 'because' → reason, 'therefore' → result."
        ],

        [
            "Logical Completion",
            "The ending must follow logically from the beginning of the sentence."
        ],

        [
            "Tone Matching",
            "The completion should match the formal/informal, positive/negative tone."
        ],

        [
            "Strategy",
            "Predict the ending before reading options, then match your prediction."
        ]

    ],


    // =================================================
    // 27 - ORDERING OF SENTENCES
    // =================================================

    "Ordering of Sentences": [

        [
            "Opening Sentence",
            "Introduces the topic; does not contain undefined pronouns or references."
        ],

        [
            "Pronoun Chain",
            "Pronouns (he, she, it, this) must follow the noun they refer to."
        ],

        [
            "Transition Words",
            "'however' = contrast, 'moreover' = addition, 'finally' = conclusion."
        ],

        [
            "Closing Sentence",
            "Summarizes, concludes or states the final outcome."
        ]

    ],


    // =================================================
    // 28 - PARAGRAPH FORMATION
    // =================================================

    "Paragraph Formation": [

        [
            "Topic Sentence",
            "The most general statement is usually the opening sentence."
        ],

        [
            "Supporting Details",
            "Sentences that elaborate or give examples follow the topic sentence."
        ],

        [
            "Logical Flow",
            "General → Specific, Cause → Effect, Problem → Solution."
        ],

        [
            "Conclusion Markers",
            "'Thus', 'Hence', 'In conclusion', 'Therefore' indicate the last sentence."
        ]

    ],


    // =================================================
    // 29 - CLOZE TEST
    // =================================================

    "Cloze Test": [

        [
            "Read First",
            "Read the entire passage before filling any blank."
        ],

        [
            "Grammar Fit",
            "The word must fit the correct part of speech, tense and form."
        ],

        [
            "Context Clues",
            "Surrounding sentences give clues about meaning and tone."
        ],

        [
            "Fill Easy First",
            "Fill the obvious blanks first — they help with the harder ones."
        ]

    ],


    // =================================================
    // 30 - COMPREHENSION
    // =================================================

    "Comprehension": [

        [
            "Factual Questions",
            "Answer is directly stated in the passage — locate the keywords."
        ],

        [
            "Inference Questions",
            "Answer is implied — choose what is logically supported, not extreme."
        ],

        [
            "Main Idea",
            "Look at the first and last paragraphs for the central theme."
        ],

        [
            "Author's Tone",
            "Is the author critical, supportive, neutral, sarcastic, or optimistic?"
        ],

        [
            "Strategy",
            "Skim questions first, then read the passage — you'll know what to look for."
        ]

    ],


    // =================================================
    // 31 - ONE WORD SUBSTITUTES
    // =================================================

    "One Word Substitutes": [

        [
            "Definition",
            "A single word that replaces a phrase: 'A lover of books' = 'Bibliophile'."
        ],

        [
            "Root Words",
            "'graph' = write, 'phile' = lover, 'phobia' = fear, 'cide' = killing."
        ],

        [
            "Common Prefixes",
            "'mono' = one, 'poly' = many, 'bio' = life, 'geo' = earth, 'omni' = all."
        ],

        [
            "Strategy",
            "Use root words to decode unfamiliar options. Eliminate clearly wrong meanings."
        ]

    ],


    // =================================================
    // 32 - IDIOMS AND PHRASES
    // =================================================

    "Idioms and Phrases": [

        [
            "Definition",
            "An idiom's meaning differs from the literal meaning of its words."
        ],

        [
            "Don't Be Literal",
            "'Raining cats and dogs' = heavy rain, not actual animals."
        ],

        [
            "Context Helps",
            "The sentence context often reveals the idiom's meaning."
        ],

        [
            "Common Idioms",
            "'Break the ice' = start conversation, 'Piece of cake' = very easy."
        ]

    ],


    // =================================================
    // 33 - CHANGE OF VOICE
    // =================================================

    "Change of Voice": [

        [
            "Active → Passive",
            "Object → Subject, Verb → be + V3, Subject → by + agent."
        ],

        [
            "Present Tense",
            "Active: does/do + V1 → Passive: is/am/are + V3."
        ],

        [
            "Past Tense",
            "Active: did + V1 → Passive: was/were + V3."
        ],

        [
            "Modal Verbs",
            "modal + V1 → modal + be + V3. Example: 'can solve' → 'can be solved'."
        ],

        [
            "Imperative",
            "'Close the door' → 'Let the door be closed'."
        ]

    ],


    // =================================================
    // 34 - CHANGE OF SPEECH
    // =================================================

    "Change of Speech": [

        [
            "Tense Shift",
            "Present → Past, Past → Past Perfect, Will → Would."
        ],

        [
            "Pronoun Changes",
            "1st person → matches reporting subject. 2nd person → matches object."
        ],

        [
            "Time/Place Changes",
            "'today' → 'that day', 'here' → 'there', 'now' → 'then', 'this' → 'that'."
        ],

        [
            "Questions",
            "Yes/No → 'if/whether'. Wh-questions keep the question word. No inversion."
        ],

        [
            "Commands",
            "Use 'to + verb': 'Sit down' → 'He told me to sit down'."
        ]

    ],


    // =================================================
    // 35 - VERBAL ANALOGIES
    // =================================================

    "Verbal Analogies": [

        [
            "Format",
            "A : B :: C : D — A is to B as C is to D."
        ],

        [
            "Common Relationships",
            "Synonym, Antonym, Part-Whole, Cause-Effect, Worker-Tool, Degree."
        ],

        [
            "Order Matters",
            "The direction of relationship must match: tool→worker, not worker→tool."
        ],

        [
            "Strategy",
            "Form a sentence with the given pair, then find the matching pair."
        ]

    ]

};


// =====================================================
// DISPLAY FORMULAS
// =====================================================

function displayFormulas(selectedTopic) {

    console.log("Displaying formulas for:", selectedTopic);

    if (!formulaContent) {

        console.error("Formula container does not exist.");

        return;
    }


    // Clear previous formulas

    formulaContent.innerHTML = "";


    // Find formulas

    const formulaList = formulas[selectedTopic];


    // No formulas found

    if (!formulaList) {

        console.warn(
            "No formulas found for topic:",
            selectedTopic
        );

        formulaContent.innerHTML = `
            <div class="formula-item">

                <div class="formula-name">
                    Formula Sheet
                </div>

                <div class="formula-expression">
                    No formulas available for this topic.
                </div>

            </div>
        `;

        return;
    }


    // Create formula items

    formulaList.forEach(function(formula) {

        const item = document.createElement("div");

        item.className = "formula-item";


        const name = document.createElement("div");

        name.className = "formula-name";

        name.textContent = formula[0];


        const expression = document.createElement("div");

        expression.className = "formula-expression";

        expression.textContent = formula[1];


        item.appendChild(name);

        item.appendChild(expression);

        formulaContent.appendChild(item);

    });


    console.log(
        "Formulas successfully loaded for:",
        selectedTopic
    );

}


// =====================================================
// FORMULA TOGGLE
// =====================================================

if (formulaToggle && formulaContent) {

    formulaToggle.addEventListener(
        "click",
        function() {

            const isHidden =
                formulaContent.style.display === "none";


            if (isHidden) {

                formulaContent.style.display = "block";

                formulaToggle.textContent =
                    "Hide Formulas";

            }

            else {

                formulaContent.style.display = "none";

                formulaToggle.textContent =
                    "Show Formulas";

            }

        }
    );

}


// =====================================================
// FISHER-YATES SHUFFLE
// =====================================================

function fisherYatesShuffle(array) {

    const shuffled = array.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;

    }

    return shuffled;

}


// =====================================================
// FULL QUESTION POOL (stored for re-selection)
// =====================================================

let allQuestionsPool = [];


// =====================================================
// SELECT AND SHUFFLE QUESTIONS
// =====================================================
//
// Groups questions by 5 difficulty levels.
// Randomly picks 5 from each level.
// Returns 25 questions ordered Easy → Interview.
//
// =====================================================

function selectAndShuffleQuestions(pool) {

    // -------------------------------------------------
    // Difficulty levels in order
    // -------------------------------------------------

    const levels = [
        "easy",
        "medium",
        "hard",
        "advanced",
        "interview"
    ];


    // -------------------------------------------------
    // Group questions by difficulty
    // -------------------------------------------------

    const groups = {};

    levels.forEach(function(level) {
        groups[level] = [];
    });


    pool.forEach(function(q) {

        const diff = String(q.difficulty || "easy")
            .trim()
            .toLowerCase();

        if (groups[diff]) {
            groups[diff].push(q);
        } else {
            // Unknown difficulty — put in easy
            groups["easy"].push(q);
        }

    });


    // -------------------------------------------------
    // Pick 5 random questions from each level
    // -------------------------------------------------

    const selected = [];

    levels.forEach(function(level) {

        const shuffled = fisherYatesShuffle(
            groups[level]
        );

        const picked = shuffled.slice(0, 5);

        selected.push.apply(selected, picked);

    });


    console.log(
        "Selected " + selected.length +
        " questions from pool of " + pool.length
    );


    return selected;

}


// =====================================================
// SORT QUESTIONS BY DIFFICULTY (backward compat)
// =====================================================

function sortQuestionsByDifficulty(list) {

    const difficultyOrder = {

        easy: 1,
        medium: 2,
        hard: 3,
        advanced: 4,
        interview: 5

    };


    return list.sort(function(a, b) {

        const difficultyA =
            String(a.difficulty || "")
                .trim()
                .toLowerCase();


        const difficultyB =
            String(b.difficulty || "")
                .trim()
                .toLowerCase();


        const orderA =
            difficultyOrder[difficultyA] || 99;


        const orderB =
            difficultyOrder[difficultyB] || 99;


        return orderA - orderB;

    });

}


// =====================================================
// NORMALIZE CORRECT ANSWER
// =====================================================
//
// Supports:
// A
// B
// C
// D
//
// Also supports:
// 1
// 2
// 3
// 4
//
// And:
// option_a
// option_b
// option_c
// option_d
//
// =====================================================

function normalizeCorrectAnswer(value) {

    if (value === null || value === undefined) {

        return "";

    }


    let answer =
        String(value)
            .trim()
            .toUpperCase();


    // ---------------------------------------------
    // Numeric answers
    // ---------------------------------------------

    if (answer === "1") {

        return "A";

    }

    if (answer === "2") {

        return "B";

    }

    if (answer === "3") {

        return "C";

    }

    if (answer === "4") {

        return "D";

    }


    // ---------------------------------------------
    // option_a etc.
    // ---------------------------------------------

    if (answer === "OPTION_A") {

        return "A";

    }

    if (answer === "OPTION_B") {

        return "B";

    }

    if (answer === "OPTION_C") {

        return "C";

    }

    if (answer === "OPTION_D") {

        return "D";

    }


    // ---------------------------------------------
    // "A." / "B." etc.
    // ---------------------------------------------

    if (
        answer.startsWith("A")
    ) {

        return "A";

    }

    if (
        answer.startsWith("B")
    ) {

        return "B";

    }

    if (
        answer.startsWith("C")
    ) {

        return "C";

    }

    if (
        answer.startsWith("D")
    ) {

        return "D";

    }


    return answer;

}


// =====================================================
// LOAD QUESTIONS
// =====================================================

async function loadQuestions() {

    console.log("=====================================");
    console.log("LOADING QUIZ");
    console.log("=====================================");


    try {

        // ---------------------------------------------
        // Check topic
        // ---------------------------------------------

        if (!topic) {

            throw new Error(
                "No topic found in URL."
            );

        }


        console.log(
            "Loading topic:",
            topic
        );


        // ---------------------------------------------
        // Set title
        // ---------------------------------------------

        if (quizTitle) {

            quizTitle.textContent =
                topic + " Practice";

        }


        // ---------------------------------------------
        // Load formulas
        // ---------------------------------------------

        displayFormulas(topic);


        // ---------------------------------------------
        // API URL
        // ---------------------------------------------

        const apiURL =
            "/api/questions?topic=" +
            encodeURIComponent(topic);


        console.log(
            "Fetching:",
            apiURL
        );


        // ---------------------------------------------
        // Fetch
        // ---------------------------------------------

        const response =
            await fetch(apiURL);


        console.log(
            "API response status:",
            response.status
        );


        if (!response.ok) {

            throw new Error(
                "Server returned HTTP " +
                response.status
            );

        }


        // ---------------------------------------------
        // Convert to JSON
        // ---------------------------------------------

        const data =
            await response.json();


        console.log(
            "API data:",
            data
        );


        // ---------------------------------------------
        // Verify array
        // ---------------------------------------------

        if (!Array.isArray(data)) {

            throw new Error(
                "API did not return a question array."
            );

        }


        // ---------------------------------------------
        // Store full pool for re-selection
        // ---------------------------------------------

        allQuestionsPool = data;


        console.log(
            "Questions pool received:",
            allQuestionsPool.length
        );


        // ---------------------------------------------
        // No questions
        // ---------------------------------------------

        if (allQuestionsPool.length === 0) {

            throw new Error(
                "No questions found for " +
                topic +
                ". Check the topic name in the database."
            );

        }


        // ---------------------------------------------
        // Select 25 random questions (5 per level)
        // ---------------------------------------------

        questions = selectAndShuffleQuestions(
            allQuestionsPool
        );


        console.log(
            "Quiz ready: " + questions.length +
            " questions (Easy→Interview)"
        );


        // ---------------------------------------------
        // Show first question
        // ---------------------------------------------

        currentQuestion = 0;

        score = 0;

        showQuestion();


    }

    catch (error) {

        console.error(
            "====================================="
        );

        console.error(
            "QUIZ LOAD ERROR:",
            error
        );

        console.error(
            "====================================="
        );


        if (questionText) {

            questionText.textContent =
                "Unable to load quiz.";

        }


        if (selectionMessage) {

            selectionMessage.textContent =
                error.message;

        }


        if (formulaContent) {

            formulaContent.innerHTML = `
                <div class="formula-item">

                    <div class="formula-name">
                        Formula Sheet
                    </div>

                    <div class="formula-expression">
                        Formulas could not be displayed.
                    </div>

                </div>
            `;

        }

    }

}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const q =
        questions[currentQuestion];


    if (!q) {

        console.error(
            "Question not found:",
            currentQuestion
        );

        return;

    }


    console.log(
        "Showing question:",
        q
    );


    // ---------------------------------------------
    // Reset state
    // ---------------------------------------------

    selectedAnswer = null;

    answerSubmitted = false;


    // ---------------------------------------------
    // Question number
    // ---------------------------------------------

    if (questionNumber) {

        questionNumber.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;

    }


    // ---------------------------------------------
    // Difficulty
    // ---------------------------------------------

    if (difficultyBadge) {

        const difficulty =
            String(q.difficulty || "easy")
                .trim()
                .toLowerCase();


        difficultyBadge.textContent =
            difficulty.toUpperCase();


        difficultyBadge.className =
            "difficulty " +
            difficulty;

    }


    // ---------------------------------------------
    // Progress bar
    // ---------------------------------------------

    if (progressBar) {

        const progress =
            ((currentQuestion + 1) /
            questions.length) *
            100;


        progressBar.style.width =
            progress + "%";

    }


    // ---------------------------------------------
    // Question text
    // ---------------------------------------------

    if (questionText) {

        questionText.textContent =
            q.question ||
            "Question unavailable.";

    }


    // ---------------------------------------------
    // Clear old options
    // ---------------------------------------------

    if (!optionsContainer) {

        return;

    }


    optionsContainer.innerHTML = "";


    // ---------------------------------------------
    // Create option data
    // ---------------------------------------------

    const optionValues = [

        {
            original: "A",
            text: q.option_a
        },

        {
            original: "B",
            text: q.option_b
        },

        {
            original: "C",
            text: q.option_c
        },

        {
            original: "D",
            text: q.option_d
        }

    ];


    // ---------------------------------------------
    // Shuffle options
    // ---------------------------------------------

    optionValues.sort(
        () => Math.random() - 0.5
    );


    // ---------------------------------------------
    // Display options
    // ---------------------------------------------

    optionValues.forEach(
        function(optionData, index) {

            const option =
                document.createElement("div");


            option.className =
                "option";


            // Visible option text

            option.textContent =
                String.fromCharCode(65 + index) +
                ". " +
                String(
                    optionData.text || ""
                ).trim();


            // Store original database answer

            option.dataset.originalAnswer =
                optionData.original;


            // Store visible option letter

            option.dataset.visibleAnswer =
                String.fromCharCode(65 + index);


            // -----------------------------------------
            // Click event
            // -----------------------------------------

            option.addEventListener(
                "click",
                function() {

                    selectOption(index);

                }
            );


            optionsContainer.appendChild(
                option
            );

        }
    );


    // ---------------------------------------------
    // Reset feedback
    // ---------------------------------------------

    if (feedback) {

        feedback.style.display =
            "none";

        feedback.className =
            "feedback";

    }


    if (feedbackTitle) {

        feedbackTitle.textContent =
            "";

    }


    if (feedbackText) {

        feedbackText.innerHTML =
            "";

    }


    // ---------------------------------------------
    // Reset button
    // ---------------------------------------------

    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            "Submit Answer";

    }


    // ---------------------------------------------
    // Reset selection message
    // ---------------------------------------------

    if (selectionMessage) {

        selectionMessage.textContent =
            "Select an answer";

    }

}


// =====================================================
// SELECT OPTION
// =====================================================

function selectOption(index) {

    // Don't allow changes after submit

    if (answerSubmitted) {

        return;

    }


    // Store selected index

    selectedAnswer =
        index;


    console.log(
        "User selected visible option:",
        String.fromCharCode(65 + index)
    );


    // Get all options

    const allOptions =
        document.querySelectorAll(".option");


    // Remove selected class

    allOptions.forEach(
        function(option) {

            option.classList.remove(
                "selected"
            );

        }
    );


    // Selected option

    const selectedOption =
        allOptions[index];


    if (selectedOption) {

        selectedOption.classList.add(
            "selected"
        );


        // ---------------------------------------------
        // SHOW EXACT OPTION USER SELECTED
        // ---------------------------------------------

        const visibleLetter =
            String.fromCharCode(
                65 + index
            );


        const selectedText =
            selectedOption.textContent
                .trim();


        if (selectionMessage) {

            selectionMessage.textContent =
                "You selected: " +
                selectedText;

        }

    }


    // Enable submit

    if (submitButton) {

        submitButton.disabled =
            false;

    }

}


// =====================================================
// SUBMIT ANSWER
// =====================================================

function submitAnswer() {

    // No selection

    if (selectedAnswer === null) {

        if (selectionMessage) {

            selectionMessage.textContent =
                "Please select an answer first.";

        }

        return;

    }


    // ---------------------------------------------
    // If already submitted → next question
    // ---------------------------------------------

    if (answerSubmitted) {

        nextQuestion();

        return;

    }


    // ---------------------------------------------
    // Mark submitted
    // ---------------------------------------------

    answerSubmitted = true;


    // Current question

    const q =
        questions[currentQuestion];


    // All options

    const allOptions =
        document.querySelectorAll(".option");


    // ---------------------------------------------
    // Get correct answer
    // ---------------------------------------------

    const correctAnswer =
        normalizeCorrectAnswer(
            q.correct_answer
        );


    console.log(
        "Database correct answer:",
        q.correct_answer
    );


    console.log(
        "Normalized correct answer:",
        correctAnswer
    );


    // ---------------------------------------------
    // Find correct visible option
    // ---------------------------------------------

    let correctVisibleIndex =
        -1;


    allOptions.forEach(
        function(option, index) {

            const originalAnswer =
                normalizeCorrectAnswer(
                    option.dataset.originalAnswer
                );


            if (
                originalAnswer ===
                correctAnswer
            ) {

                correctVisibleIndex =
                    index;

            }

        }
    );


    console.log(
        "Correct visible index:",
        correctVisibleIndex
    );


    // ---------------------------------------------
    // Mark correct answer
    // ---------------------------------------------

    if (correctVisibleIndex !== -1) {

        allOptions[
            correctVisibleIndex
        ].classList.add(
            "correct"
        );

    }


    // ---------------------------------------------
    // Find user's selected answer
    // ---------------------------------------------

    const selectedOption =
        allOptions[
            selectedAnswer
        ];


    const selectedOriginalAnswer =
        selectedOption
            ? normalizeCorrectAnswer(
                selectedOption.dataset.originalAnswer
            )
            : "";


    console.log(
        "User selected original answer:",
        selectedOriginalAnswer
    );


    // ---------------------------------------------
    // SHOW USER'S SELECTED OPTION
    // ---------------------------------------------

    if (selectedOption && selectionMessage) {

        selectionMessage.textContent =
            "You selected: " +
            selectedOption.textContent.trim();

    }


    // ---------------------------------------------
    // CHECK ANSWER
    // ---------------------------------------------

    if (
        selectedOriginalAnswer ===
        correctAnswer
    ) {

        // -----------------------------------------
        // Correct
        // -----------------------------------------

        score++;


        console.log(
            "Answer result: CORRECT"
        );


        if (feedbackTitle) {

            feedbackTitle.textContent =
                "✓ Correct!";

        }


        if (feedback) {

            feedback.className =
                "feedback correct-feedback";

        }

    }

    else {

        // -----------------------------------------
        // Wrong
        // -----------------------------------------

        console.log(
            "Answer result: INCORRECT"
        );


        if (selectedOption) {

            selectedOption.classList.add(
                "wrong"
            );

        }


        if (feedbackTitle) {

            feedbackTitle.textContent =
                "✗ Incorrect";

        }


        if (feedback) {

            feedback.className =
                "feedback wrong-feedback";

        }

    }


    // ---------------------------------------------
    // Show explanation
    // ---------------------------------------------

    if (feedbackText) {

        const explanation =
            q.explanation;


        if (
            explanation &&
            String(explanation).trim() !== ""
        ) {

            feedbackText.textContent =
                explanation;

        }

        else {

            feedbackText.textContent =
                "No explanation available.";

        }

    }


    // Show feedback

    if (feedback) {

        feedback.style.display =
            "block";

    }


    // ---------------------------------------------
    // Disable options
    // ---------------------------------------------

    allOptions.forEach(
        function(option) {

            option.style.pointerEvents =
                "none";

        }
    );


    // ---------------------------------------------
    // Button
    // ---------------------------------------------

    if (submitButton) {

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

    console.log(
        "Quiz completed."
    );


    console.log(
        "Final score:",
        score,
        "/",
        questions.length
    );


    if (quizSection) {

        quizSection.style.display =
            "none";

    }


    if (resultSection) {

        resultSection.style.display =
            "block";

    }


    if (finalScore) {

        finalScore.textContent =
            score +
            " / " +
            questions.length;

    }


    const percentage =
        questions.length > 0
            ? (score / questions.length) * 100
            : 0;


    if (resultMessage) {

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

}


// =====================================================
// RESTART QUIZ
// =====================================================

function restartQuiz() {

    console.log(
        "Restarting quiz..."
    );


    currentQuestion = 0;

    selectedAnswer = null;

    answerSubmitted = false;

    score = 0;


    // Hide result

    if (resultSection) {

        resultSection.style.display =
            "none";

    }


    // Show quiz

    if (quizSection) {

        quizSection.style.display =
            "block";

    }


    // Re-select fresh questions from pool

    questions = selectAndShuffleQuestions(
        allQuestionsPool
    );


    // Show first question

    showQuestion();

}


// =====================================================
// SUBMIT BUTTON
// =====================================================

if (submitButton) {

    submitButton.addEventListener(
        "click",
        submitAnswer
    );

}


// =====================================================
// START QUIZ
// =====================================================

console.log(
    "Starting loadQuestions()..."
);


loadQuestions();


// =====================================================
// END OF QUIZ ENGINE
// =====================================================