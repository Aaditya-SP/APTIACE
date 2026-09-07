// =====================================================
// APTIACE - LOGICAL REASONING TOPIC DATA
// =====================================================
// Introduction, rules, and tips for all 19 topics.
// Used by logical-topic.html to render the intro page.
// =====================================================

const logicalTopics = {

    // =================================================
    // 01 - NUMBER SERIES
    // =================================================
    "Number Series": {
        intro: "Number Series tests your ability to detect mathematical patterns, progressions, and underlying logical relationships between consecutive numbers. These questions frequently appear in technical campus recruitment (TCS, Infosys, Wipro, Accenture) and competitive exams.",
        rules: [
            {
                name: "Difference Series (Arithmetic)",
                description: "Check if consecutive numbers increase or decrease by a constant value or an increasing/decreasing difference (e.g., +2, +4, +6...)."
            },
            {
                name: "Geometric / Ratio Series",
                description: "Each term is multiplied or divided by a factor (e.g., ×2, ×3, or ×1.5)."
            },
            {
                name: "Squares & Cubes",
                description: "Look for numbers close to n², n³ or n²±1, n³±1 (e.g., 2, 9, 28, 65 are 1³+1, 2³+1, 3³+1, 4³+1)."
            },
            {
                name: "Alternating & Twin Series",
                description: "Two independent series interleaved together at odd and even positions."
            },
            {
                name: "Fibonacci / Cumulative Sequences",
                description: "Each number is the sum of previous two numbers (e.g., 1, 2, 3, 5, 8, 13...)."
            }
        ],
        tips: [
            "Always calculate the differences between consecutive terms first — over 60% of series reveal their pattern on the 1st or 2nd difference layer.",
            "If numbers grow very rapidly, suspect multiplication, squares, or cubes rather than addition.",
            "If the series oscillates up and down, immediately split it into two interleaved sub-series (indices 1, 3, 5 vs 2, 4, 6).",
            "Memorize squares up to 30² and cubes up to 15³ to spot nearby numbers instantly.",
            "Check for hybrid operations: like (×2 + 1), (×3 - 2), or (×1 + 1, ×2 + 2, ×3 + 3)."
        ]
    },

    // =================================================
    // 02 - LETTER AND SYMBOL SERIES
    // =================================================
    "Letter and Symbol Series": {
        intro: "Letter and Symbol Series test your sequential reasoning through alphabetical positional values, skip counts, backward cycles, and geometric/keyboard symbols. They are fundamental in cognitive and psychometric aptitude tests.",
        rules: [
            {
                name: "Alphabet Numerical Values (A=1 to Z=26)",
                description: "Convert letters to numbers using the EJOTY shortcut (E=5, J=10, O=15, T=20, Y=25) to easily calculate skips."
            },
            {
                name: "Reverse Alphabetic Ordering (Z=1 to A=26)",
                description: "Sum of opposite letter positions is always 27 (e.g., A(1) + Z(26) = 27; B(2) + Y(25) = 27)."
            },
            {
                name: "Multi-Letter Cluster Series",
                description: "In clusters like BDF, CFI, DHL, examine corresponding letters across clusters independently (1st with 1st, 2nd with 2nd)."
            },
            {
                name: "Symbol Positional Patterns",
                description: "Symbols often alternate in position, count, rotation (90° clockwise/counter-clockwise), or follow repetitive loops."
            }
        ],
        tips: [
            "Write the EJOTY guideline on your scratch pad immediately for quick reference.",
            "Convert letters to numbers mentally whenever a skip is greater than 3 positions.",
            "For groups of 3 or 4 letters, analyze the pattern column by column rather than across the whole word.",
            "Watch out for vowel-only sequences (A, E, I, O, U) or skipped alphabet clusters."
        ]
    },

    // =================================================
    // 03 - VERBAL CLASSIFICATION
    // =================================================
    "Verbal Classification": {
        intro: "Verbal Classification questions assess your ability to discern overarching categories and spot the 'odd word out'. Four of the five given words share an essential common characteristic, while one does not belong to that group.",
        rules: [
            {
                name: "Common Functional Category",
                description: "Words share a common purpose, genus, or biological taxonomy (e.g., mammals vs reptiles, input vs output devices)."
            },
            {
                name: "Part-to-Whole Relationship",
                description: "Four options may be constituent components of a single structure, while the outlier is a complete object or unrelated."
            },
            {
                name: "Grammatical & Morphological Classification",
                description: "All words may be adjectives or verbs except one noun, or all possess a certain prefix/suffix."
            },
            {
                name: "Degree / Intensity / Connotation",
                description: "All words may possess positive connotations while one carries negative connotation, or all indicate extreme magnitude."
            }
        ],
        tips: [
            "Focus on finding what connects the majority (the rule of the group) rather than just looking for differences.",
            "Beware of superficial similarities (e.g., all starting with the letter 'P') — logical classification is based on meaning and function.",
            "Examine physical states, habitats, tools of specific trades, and scientific classifications.",
            "If stuck, form a defining sentence: 'An X is a type of Y' and see if all four words satisfy it."
        ]
    },

    // =================================================
    // 04 - ESSENTIAL PART
    // =================================================
    "Essential Part": {
        intro: "Essential Part questions require you to identify the single indispensable component of a given word or concept. Without this element, the item or entity ceases to exist in its true definition.",
        rules: [
            {
                name: "Definition of Indispensability",
                description: "An essential part is strictly mandatory. An automobile can exist without air conditioning or a radio, but not without an engine or wheels."
            },
            {
                name: "Distinguishing Accessories vs Essentials",
                description: "Accessories improve comfort, appearance, or efficiency, but their absence does not destroy the object's fundamental identity."
            },
            {
                name: "Conceptual / Abstract Essentials",
                description: "For concepts like 'Contract', an 'Agreement' is essential, whereas 'Lawyer' or 'Written on paper' may be circumstantial."
            }
        ],
        tips: [
            "Ask the negative test: 'Can this object or concept exist without X?' If yes, X is not essential.",
            "Do not confuse the most frequent attribute with the essential attribute.",
            "Think about the dictionary definition of the headword — what word is impossible to omit when defining it?",
            "Ignore luxuries, common additions, and optional features."
        ]
    },

    // =================================================
    // 05 - ANALOGIES
    // =================================================
    "Analogies": {
        intro: "Analogies test your ability to recognize the precise logical relationship between a pair of words and apply that identical relationship to identify or complete a matching pair.",
        rules: [
            {
                name: "Worker and Tool / Product",
                description: "Relationships like Carpenter : Saw or Author : Book."
            },
            {
                name: "Cause and Effect / Action and Reaction",
                description: "Relationships like Heat : Expansion or Infection : Fever."
            },
            {
                name: "Part to Whole / Member to Class",
                description: "Relationships like Petal : Flower or Whale : Mammal."
            },
            {
                name: "Direction and Order of Relationship",
                description: "If the question is Tool : Worker, the answer MUST follow Tool : Worker, not Worker : Tool."
            }
        ],
        tips: [
            "Create a crisp bridge sentence with the first pair: '[Word A] is used by [Word B] to do [Action]'.",
            "Substitute your candidate pairs into the exact same sentence to verify the match.",
            "Pay close attention to part of speech: noun : noun should match noun : noun, verb : adjective must match verb : adjective.",
            "Watch out for inverted orders — order matters strictly in analogies."
        ]
    },

    // =================================================
    // 06 - ARTIFICIAL LANGUAGE
    // =================================================
    "Artificial Language": {
        intro: "Artificial Language questions present an invented vocabulary with English translations. You must deduce the underlying morphemes, prefixes, and grammatical structure to translate new terms.",
        rules: [
            {
                name: "Morpheme Isolation",
                description: "Compare two compound artificial words that share a common English word to isolate the exact artificial root."
            },
            {
                name: "Word Order & Syntax",
                description: "Check if the adjective precedes the noun or follows it in the artificial tongue (e.g., 'blue sky' might translate to 'sky blue')."
            },
            {
                name: "Consistency of Components",
                description: "Artificial words are strictly regular; each syllable or root maintains identical meaning across all appearances."
            }
        ],
        tips: [
            "Write down each English word and its isolated artificial fragment side by side on paper.",
            "Check word order immediately: does the artificial language put modifier first or base noun first?",
            "Eliminate options containing roots for words that are not present in the prompt.",
            "Double-check spelling in the options, as distractors differ by only one or two letters."
        ]
    },

    // =================================================
    // 07 - MATCHING DEFINITIONS
    // =================================================
    "Matching Definitions": {
        intro: "Matching Definitions questions provide a formal, rule-based definition followed by four situational scenarios. You must determine which scenario strictly meets every criterion outlined in the definition.",
        rules: [
            {
                name: "Deconstructing Necessary Criteria",
                description: "Break down the definition into distinct conditions (Condition 1 AND Condition 2 AND Condition 3)."
            },
            {
                name: "All Conditions Must Be Met",
                description: "If a scenario meets 2 out of 3 conditions, it fails. All criteria must be satisfied simultaneously."
            },
            {
                name: "No External Assumptions",
                description: "Do not assume unstated details. Base judgments solely on what is explicitly written in the scenario."
            }
        ],
        tips: [
            "Underline or list the 2-4 key mandatory criteria in the given definition.",
            "Treat each option as a checklist: place a check or cross next to each criterion.",
            "Beware of options that sound morally or practically good but violate a specific clause in the definition.",
            "Watch for restrictive words like 'only', 'must', 'prior to', 'unauthorized'."
        ]
    },

    // =================================================
    // 08 - MAKING JUDGMENTS
    // =================================================
    "Making Judgments": {
        intro: "Making Judgments questions place you in the position of an administrative authority, evaluator, or decision-maker. You must weigh facts against given company/organizational guidelines to select the correct course of action.",
        rules: [
            {
                name: "Objective Policy Adherence",
                description: "Follow the provided guidelines strictly, setting aside personal sympathies or informal assumptions."
            },
            {
                name: "Exceptional Clauses & Escalation",
                description: "Many judgment criteria have provisos (e.g., 'If candidate meets all except age, refer to Director'). Look for these exceptions."
            },
            {
                name: "Data Sufficiency Check",
                description: "If critical information required by the policy is missing from the candidate's profile, the decision must be 'Data inadequate'."
            }
        ],
        tips: [
            "Systematically tabulate the candidate's data against each criterion (Age, Qualification, Marks, Experience).",
            "Mark any criterion that is violated and immediately look if there is an alternative concession clause.",
            "Never assume missing dates or percentages; if an essential value is absent, choose 'Data inadequate'.",
            "Be vigilant about cutoff dates (e.g., 'as on 01.01.2024')."
        ]
    },

    // =================================================
    // 09 - VERBAL REASONING
    // =================================================
    "Verbal Reasoning": {
        intro: "Verbal Reasoning tests your ability to comprehend statements, evaluate truth values (True, False, Cannot be Determined), and extract logical deductions from textual premises without subjective bias.",
        rules: [
            {
                name: "Strict Truth Value Evaluation",
                description: "'Definitely True' means direct fact or unavoidable consequence; 'Definitely False' directly contradicts the premise."
            },
            {
                name: "The 'Probably True / Uncertain' Zone",
                description: "If a statement is plausible but not strictly proven by the text, it cannot be classified as definitely true."
            },
            {
                name: "Scope of Information",
                description: "Do not bring real-world knowledge into the evaluation if it is not supported by the passage."
            }
        ],
        tips: [
            "Read the statements with rigorous skepticism: accept only what is explicitly substantiated.",
            "Watch out for extreme qualifiers: 'all', 'always', 'never', 'none' vs 'some', 'often', 'can'.",
            "Separate facts directly mentioned from subjective opinions expressed by individuals in the text.",
            "If an option requires multiple extrapolations, it is almost certainly uncertain or false."
        ]
    },

    // =================================================
    // 10 - LOGICAL PROBLEMS
    // =================================================
    "Logical Problems": {
        intro: "Logical Problems involve constraint satisfaction puzzles, rank and order comparisons, truth-teller/liar riddles, and family relation deductions. They test structured spatial and deductive organization.",
        rules: [
            {
                name: "Comparative Ranking Equations",
                description: "Translate 'A is taller than B but shorter than C' into mathematical inequalities: C > A > B."
            },
            {
                name: "Linear and Positional Constraints",
                description: "Identify fixed anchors first (e.g., 'X sits at the extreme left end') before arranging relative neighbors."
            },
            {
                name: "Elimination of Contradictions",
                description: "Test hypothetical assignments; any assumption leading to an impossible conflict must be discarded."
            }
        ],
        tips: [
            "Draw a visual diagram, number line, or 2D grid immediately upon reading the puzzle.",
            "Start with the definite clues (fixed positions) rather than ambiguous conditional clues.",
            "Chain inequalities together: A > B and B > C gives A > B > C directly.",
            "In ranking formulas, remember: Total people = (Rank from Left + Rank from Right) - 1."
        ]
    },

    // =================================================
    // 11 - LOGICAL GAMES
    // =================================================
    "Logical Games": {
        intro: "Logical Games (analytical reasoning sets) require managing complex, interdependent constraints such as scheduling weekly tasks, assigning team members to projects, or solving circular seating arrangements.",
        rules: [
            {
                name: "Grid / Matrix Representation",
                description: "Create a cross-grid (rows for entities, columns for attributes) and mark tick (✓) for confirmed and cross (✗) for ruled-out pairs."
            },
            {
                name: "Circular Seating Rules",
                description: "Facing center: Right is anti-clockwise, Left is clockwise. Facing outward: Right is clockwise, Left is anti-clockwise."
            },
            {
                name: "Grouping and Distribution Limits",
                description: "Respect minimum/maximum quotas per group (e.g., 'At least 2 engineers in each team')."
            }
        ],
        tips: [
            "Never try to solve complex games purely mentally — draw the matrix on paper.",
            "Fill in negative clues immediately: 'P cannot be paired with Q' eliminates cells right away.",
            "Look for chain links: an entity mentioned in 3 different clues is usually the linchpin of the solution.",
            "When two configurations remain possible, write both branches down side by side."
        ]
    },

    // =================================================
    // 12 - ANALYZING ARGUMENTS
    // =================================================
    "Analyzing Arguments": {
        intro: "Analyzing Arguments evaluates your critical reasoning. You must dissect an argument into its Premise, Conclusion, and Implicit Assumption, and evaluate which statements strengthen or weaken the author's claim.",
        rules: [
            {
                name: "Premise vs Conclusion",
                description: "Premises are stated facts/evidence; Conclusion is the central claim or inference drawn from those premises."
            },
            {
                name: "Strengthening an Argument",
                description: "A statement strengthens an argument by validating the underlying assumption or eliminating alternative explanations."
            },
            {
                name: "Weakening an Argument",
                description: "A statement weakens an argument by showing a counter-example, pointing out a correlation-causation fallacy, or proving an alternative cause."
            }
        ],
        tips: [
            "Find the conclusion first — ask yourself: 'What is the author trying to convince me to believe?'",
            "Identify indicator words: 'therefore', 'thus', 'hence', 'so' signal conclusions; 'because', 'since', 'given that' signal premises.",
            "To weaken an argument, look for an option that introduces a plausible alternative cause.",
            "An option that merely repeats a stated premise does NOT strengthen the argument."
        ]
    },

    // =================================================
    // 13 - STATEMENT AND ASSUMPTION
    // =================================================
    "Statement and Assumption": {
        intro: "In Statement and Assumption questions, a statement is followed by proposed assumptions. An assumption is something supposed or taken for granted before making the statement.",
        rules: [
            {
                name: "Pre-existing Belief",
                description: "An assumption is formulated BEFORE the statement is spoken; it is the subconscious foundation of the speaker."
            },
            {
                name: "Implicit, Never Explicit",
                description: "An assumption is unstated in the text. If an option simply restates what is already said, it is a restatement, not an assumption."
            },
            {
                name: "The Negation Test",
                description: "If you negate the assumption and the original statement falls apart or becomes illogical, the assumption is definitely implicit."
            }
        ],
        tips: [
            "Think from the speaker's perspective: 'Why would someone say this? What must they believe to be true?'",
            "Advertisements assume that people read notices and respond to appeals.",
            "Government notices assume that the public will comply with regulations.",
            "Avoid assumptions that contain extreme or rigid assertions like 'only', 'all', 'every', 'never' unless the statement itself is extreme."
        ]
    },

    // =================================================
    // 14 - COURSE OF ACTION
    // =================================================
    "Course of Action": {
        intro: "Course of Action questions present a problem, situation, or crisis followed by suggested courses of action. You must determine which actions are practical, proportional, and effective remedies.",
        rules: [
            {
                name: "Feasibility and Practicality",
                description: "The course of action must be implementable in the real world with available resources."
            },
            {
                name: "Proportionality and Balance",
                description: "The cure must not be worse than the disease. Extreme, harsh, or disproportionate measures should be rejected."
            },
            {
                name: "Root Cause Resolution",
                description: "An effective action addresses the core problem directly rather than merely treating superficial symptoms."
            }
        ],
        tips: [
            "Adopt the mindset of an impartial, sensible administrator.",
            "Avoid extreme punitive actions (e.g., firing an entire department for one error).",
            "A good course of action solves the problem without generating new, severe complications.",
            "Immediate relief measures combined with long-term preventive investigations are almost always valid courses of action."
        ]
    },

    // =================================================
    // 15 - STATEMENT AND CONCLUSION
    // =================================================
    "Statement and Conclusion": {
        intro: "Statement and Conclusion questions provide one or two statements followed by conclusions. A conclusion is a deduction that can be drawn strictly, logically, and indisputably from the provided premises.",
        rules: [
            {
                name: "Strict Consequence",
                description: "A valid conclusion must be 100% logically derived from the statement; even 99% probability is insufficient."
            },
            {
                name: "No External Knowledge",
                description: "Even if a conclusion is a well-known scientific or historical fact, if it is not supported by the statement, it does not follow."
            },
            {
                name: "Avoid Over-generalization",
                description: "Moving from a specific statement ('some birds fly') to a universal conclusion ('all birds can fly') is invalid."
            }
        ],
        tips: [
            "Read the statements literally and strictly within their boundaries.",
            "Watch out for words that alter logical scope: 'only', 'all', 'always', 'at least', 'some'.",
            "If the conclusion requires external general knowledge not mentioned in the statement, reject it.",
            "If a conclusion directly restates the premise with valid deduction, it follows."
        ]
    },

    // =================================================
    // 16 - THEME DETECTION
    // =================================================
    "Theme Detection": {
        intro: "Theme Detection presents a compact paragraph on sociology, business, environment, or philosophy. You must discern the overarching central thesis and author's fundamental intent.",
        rules: [
            {
                name: "Central Theme vs Supporting Detail",
                description: "The theme is the main backbone idea of the whole passage, whereas examples, statistics, and anecdotes are mere supporting details."
            },
            {
                name: "Scope Calibration",
                description: "The correct theme is neither too broad (encompassing topics outside the passage) nor too narrow (capturing only one sentence)."
            },
            {
                name: "Tone and Author Stance",
                description: "Determine whether the author is advocating, warning, criticizing, or neutrally describing the situation."
            }
        ],
        tips: [
            "Pay close attention to the first and last sentences of the passage — they usually state the thesis or summary.",
            "Ask yourself: 'If the author had to summarize this paragraph in one tweet, what would it be?'",
            "Eliminate options that are true factual statements from the passage but represent only a secondary example.",
            "Beware of choices with overly assertive language not backed by the author's tone."
        ]
    },

    // =================================================
    // 17 - CAUSE AND EFFECT
    // =================================================
    "Cause and Effect": {
        intro: "Cause and Effect questions present two events. You must ascertain whether Event I caused Event II, Event II caused Event I, both are effects of an independent cause, or both are effects of a common cause.",
        rules: [
            {
                name: "Temporal Precedence and Mechanism",
                description: "A cause must precede its effect in time, and there must be a plausible logical mechanism connecting them."
            },
            {
                name: "Sufficient vs Contributing Cause",
                description: "Check if the occurrence of Event A directly and naturally explains why Event B happened."
            },
            {
                name: "Common Cause vs Independent Causes",
                description: "If both events stem from the same root event (e.g., torrential rains leading to waterlogging AND train delays), they are effects of a common cause."
            }
        ],
        tips: [
            "Connect the two statements with the word 'BECAUSE': 'Statement I happened BECAUSE Statement II happened'. Does it make sense?",
            "If reversing the order sounds more natural, then the second statement is the cause and the first is the effect.",
            "If both statements report reactions, measures, or consequences, check if a shared underlying event triggered both.",
            "Correlation does not imply causation — ensure a genuine causal link exists."
        ]
    },

    // =================================================
    // 18 - STATEMENT AND ARGUMENT
    // =================================================
    "Statement and Argument": {
        intro: "Statement and Argument questions present an issue or policy proposal followed by arguments for ('Yes...') and against ('No...'). You must determine which arguments are 'strong' and which are 'weak'.",
        rules: [
            {
                name: "Criteria for a Strong Argument",
                description: "A strong argument is directly relevant to the issue, supported by sound reasoning or established facts, and addresses significant social, legal, or economic consequences."
            },
            {
                name: "Weak Arguments (Personal Opinions / Dogma)",
                description: "Arguments based on mere emotion, tradition, personal bias, superstition, or simple assertions without evidence are weak."
            },
            {
                name: "Ambiguity and Irrelevance",
                description: "An argument that goes off on a tangent or discusses an unrelated consequence is weak."
            }
        ],
        tips: [
            "Never evaluate arguments based on your own personal political or social viewpoint.",
            "Check for universal validity: Does the argument offer tangible evidence or proven historical precedent?",
            "Arguments saying 'No, because it has never been done before' are classic weak arguments.",
            "Both 'Yes' and 'No' arguments can simultaneously be strong if both present valid, weighty considerations."
        ]
    },

    // =================================================
    // 19 - LOGICAL DEDUCTION
    // =================================================
    "Logical Deduction": {
        intro: "Logical Deduction focuses on categorical syllogisms. Given premises like 'All A are B' and 'Some B are C', you must determine which conclusions follow with absolute certainty, regardless of real-world truth.",
        rules: [
            {
                name: "Universal and Particular Propositions",
                description: "Universal: 'All A are B' (A-type), 'No A is B' (E-type). Particular: 'Some A are B' (I-type), 'Some A are not B' (O-type)."
            },
            {
                name: "Two Particulars Give No Conclusion",
                description: "From 'Some A are B' and 'Some B are C', no definite relation between A and C can be deduced."
            },
            {
                name: "Two Negatives Give No Conclusion",
                description: "From two negative premises ('No A is B', 'No B is C'), no definite conclusion can be drawn."
            },
            {
                name: "Venn Diagram / Euler Circle Technique",
                description: "Draw minimal overlapping circles to represent the premises; a conclusion is valid only if it holds in ALL possible valid diagrams."
            }
        ],
        tips: [
            "Always draw standard Venn diagrams for quick and error-free syllogism solving.",
            "Draw the 'least-commitment' diagram first (avoid assuming overlaps not mandated by the premise).",
            "Remember the Either-Or complementary pair: 'Some A are B' and 'No A is B' (or 'All' + 'Some not') form an Either-Or pair when neither is definitely true.",
            "Do not let real-world facts interfere: if the premise states 'All dogs are cats', treat it as 100% true."
        ]
    }

};

// Export for Node.js if in backend environment
if (typeof module !== "undefined" && module.exports) {
    module.exports = logicalTopics;
}
