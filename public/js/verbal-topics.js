// =====================================================
// APTIACE - VERBAL ABILITY TOPIC DATA
// =====================================================
// Introduction, rules, and tips for all 19 topics.
// Used by verbal-topic.html to render the intro page.
// =====================================================

const verbalTopics = {


    // =================================================
    // 01 - SPOTTING ERRORS
    // =================================================

    "Spotting Errors": {

        intro: "Spotting Errors is one of the most important topics in verbal ability. In these questions, a sentence is divided into parts and you must identify which part contains a grammatical error. These questions test your knowledge of grammar rules including subject-verb agreement, tense usage, prepositions, articles, pronouns and more.",

        rules: [
            {
                name: "Subject-Verb Agreement",
                description: "A singular subject takes a singular verb, and a plural subject takes a plural verb. Example: 'He goes' (not 'He go')."
            },
            {
                name: "Tense Consistency",
                description: "Do not mix tenses within a sentence unless there is a valid reason. Example: 'He went to the market and bought vegetables' (not 'went...buys')."
            },
            {
                name: "Pronoun Agreement",
                description: "Pronouns must agree with their antecedents in number and gender. Example: 'Each student must bring his or her book' (not 'their book')."
            },
            {
                name: "Correct Use of Articles",
                description: "Use 'a' before consonant sounds, 'an' before vowel sounds, and 'the' for specific nouns. Example: 'an honest man' (h is silent)."
            },
            {
                name: "Preposition Usage",
                description: "Use the correct preposition with verbs and adjectives. Example: 'agree with a person', 'agree to a proposal', 'agree on a point'."
            },
            {
                name: "Parallelism",
                description: "Items in a list or comparison must be in the same grammatical form. Example: 'She likes reading, writing and painting' (not 'reading, to write and paint')."
            }
        ],

        tips: [
            "Read the entire sentence before checking each part — context matters.",
            "Pay special attention to subject-verb agreement, especially when the subject and verb are far apart.",
            "Watch for common confusions: 'affect' vs 'effect', 'than' vs 'then', 'its' vs 'it's'.",
            "Check if the sentence uses the correct tense throughout.",
            "Look for misplaced modifiers — the modifier should be next to the word it modifies.",
            "If no error is found, the answer is 'No Error' — do not force an error."
        ]

    },


    // =================================================
    // 02 - SYNONYMS
    // =================================================

    "Synonyms": {

        intro: "Synonym questions test your vocabulary by asking you to find a word that has a similar meaning to a given word. A strong vocabulary is essential for competitive exams and interviews. These questions appear frequently in aptitude tests, and the best way to prepare is by reading extensively and learning word roots.",

        rules: [
            {
                name: "What is a Synonym?",
                description: "A synonym is a word that has the same or nearly the same meaning as another word. Example: 'Happy' and 'Joyful' are synonyms."
            },
            {
                name: "Context Matters",
                description: "Some words have multiple meanings. Choose the synonym that matches the context. Example: 'Fair' can mean 'just' or 'light-complexioned'."
            },
            {
                name: "Word Roots",
                description: "Learning Latin and Greek roots helps guess meanings. Example: 'bene' means good (benefactor, benevolent), 'mal' means bad (malicious, malfunction)."
            },
            {
                name: "Degree of Meaning",
                description: "Choose the closest match in intensity. 'Furious' is a stronger synonym for 'angry' than 'annoyed' is."
            }
        ],

        tips: [
            "If you don't know the word, try to recall where you've heard or read it before.",
            "Use elimination — remove options that are clearly antonyms or unrelated.",
            "Learn common word roots: 'phil' (love), 'phob' (fear), 'graph' (write), 'aud' (hear).",
            "Practice with a word-a-day routine to build vocabulary steadily.",
            "Pay attention to prefixes: 'un-', 'dis-', 'in-', 'im-' usually negate the meaning.",
            "Group words by themes (emotions, actions, descriptions) for easier memorization."
        ]

    },


    // =================================================
    // 03 - ANTONYMS
    // =================================================

    "Antonyms": {

        intro: "Antonym questions test your ability to identify words with opposite meanings. These questions require a strong vocabulary and the ability to understand word relationships. Like synonyms, antonyms are a staple of verbal ability sections in competitive exams.",

        rules: [
            {
                name: "What is an Antonym?",
                description: "An antonym is a word that means the opposite of another word. Example: 'Hot' and 'Cold' are antonyms."
            },
            {
                name: "Prefixes Create Antonyms",
                description: "Adding prefixes like 'un-', 'dis-', 'in-', 'im-', 'ir-', 'il-' can create antonyms. Example: 'possible' → 'impossible'."
            },
            {
                name: "Complementary Antonyms",
                description: "Some words are absolute opposites with no middle ground. Example: 'alive' / 'dead', 'true' / 'false'."
            },
            {
                name: "Gradable Antonyms",
                description: "Some antonyms exist on a spectrum. Example: 'hot' / 'cold' (with 'warm', 'cool' in between)."
            }
        ],

        tips: [
            "If you know the meaning of the word, think of its exact opposite first, then match with options.",
            "Use prefixes to your advantage: 'un-', 'dis-', 'non-', 'anti-' often indicate opposites.",
            "Don't confuse antonyms with unrelated words — the answer must be a direct opposite.",
            "Watch for tricky words where the prefix doesn't negate: 'invaluable' means very valuable, not 'not valuable'.",
            "Learn words in pairs (synonym + antonym) for maximum retention.",
            "Eliminate options that are synonyms of the given word."
        ]

    },


    // =================================================
    // 04 - SELECTING WORDS
    // =================================================

    "Selecting Words": {

        intro: "In Selecting Words questions, you are given a sentence with a blank and must choose the most appropriate word from the options to complete it. These questions test your understanding of vocabulary, context, grammar and collocations (words that naturally go together).",

        rules: [
            {
                name: "Read for Context",
                description: "The sentence around the blank gives clues about what type of word is needed — positive/negative, noun/verb/adjective, formal/informal."
            },
            {
                name: "Collocations",
                description: "Some words naturally pair together. Example: 'make a decision' (not 'do a decision'), 'heavy rain' (not 'strong rain')."
            },
            {
                name: "Grammar Fit",
                description: "The word must fit grammatically — correct part of speech, correct tense, correct number (singular/plural)."
            },
            {
                name: "Tone Matching",
                description: "The word should match the tone of the sentence — formal sentences need formal words, casual sentences need casual words."
            }
        ],

        tips: [
            "Read the complete sentence with each option inserted — the correct one should sound natural.",
            "Look for signal words: 'but', 'however', 'although' signal contrast; 'and', 'moreover' signal continuation.",
            "Pay attention to prepositions after the blank — they can narrow down the correct word.",
            "If two options seem correct, choose the one that is most precise in meaning.",
            "Practice reading newspapers and editorials to naturally absorb correct word usage.",
            "Watch for confusing word pairs: 'principal/principle', 'complement/compliment', 'stationary/stationery'."
        ]

    },


    // =================================================
    // 05 - SPELLINGS
    // =================================================

    "Spellings": {

        intro: "Spelling questions test your ability to identify correctly or incorrectly spelled words. English spelling can be tricky because many words don't follow phonetic rules. These questions are common in competitive exams and test your attention to detail and familiarity with English word patterns.",

        rules: [
            {
                name: "i before e",
                description: "Generally 'i' comes before 'e' except after 'c'. Example: 'believe', 'receive'. Exceptions: 'weird', 'seize', 'neither'."
            },
            {
                name: "Silent Letters",
                description: "Many English words have silent letters. Example: 'k' in 'knife', 'w' in 'write', 'b' in 'doubt', 'p' in 'psychology'."
            },
            {
                name: "Double Consonants",
                description: "When adding suffixes, double the final consonant if the word ends in a single vowel + single consonant. Example: 'run' → 'running', 'begin' → 'beginning'."
            },
            {
                name: "Dropping the 'e'",
                description: "Drop the silent 'e' before a suffix starting with a vowel. Example: 'make' → 'making', 'hope' → 'hoping'. Keep 'e' before consonant suffixes: 'hope' → 'hopeful'."
            },
            {
                name: "Changing 'y' to 'i'",
                description: "When a word ends in consonant + 'y', change 'y' to 'i' before adding a suffix. Example: 'happy' → 'happiness', 'carry' → 'carried'."
            }
        ],

        tips: [
            "Memorize commonly misspelled words: 'accommodate', 'occurrence', 'separate', 'necessary', 'definitely'.",
            "Break long words into syllables to spell them correctly.",
            "Watch for words with double letters: 'committee', 'accommodation', 'occurrence', 'Mississippi'.",
            "Learn British vs American spelling differences: 'colour/color', 'centre/center', 'analyse/analyze'.",
            "Use mnemonics: 'necessary' = one Collar, two Socks (one 'c', two 's's).",
            "Read extensively — exposure to correct spelling helps build visual memory."
        ]

    },


    // =================================================
    // 06 - SENTENCE FORMATION
    // =================================================

    "Sentence Formation": {

        intro: "Sentence Formation questions give you a set of words or phrases that must be arranged to form a grammatically correct and meaningful sentence. These questions test your understanding of sentence structure, word order and English syntax.",

        rules: [
            {
                name: "Basic Sentence Structure",
                description: "English follows Subject-Verb-Object (SVO) order. Example: 'The cat (S) ate (V) the fish (O).'"
            },
            {
                name: "Adjective Placement",
                description: "Adjectives come before nouns in English. Example: 'a beautiful house' (not 'a house beautiful')."
            },
            {
                name: "Adverb Placement",
                description: "Adverbs of frequency go before the main verb but after 'be' verbs. Example: 'She always reads' but 'She is always happy'."
            },
            {
                name: "Article Placement",
                description: "Articles (a, an, the) always come before the noun or its adjective. Example: 'the big red car'."
            }
        ],

        tips: [
            "Identify the subject first — it usually comes at the beginning of the sentence.",
            "Look for the main verb — it follows the subject.",
            "Articles and prepositions are strong clues about word order.",
            "Check if the sentence makes logical sense after arrangement.",
            "Look for capital letters and punctuation as position hints.",
            "Practice by reading sentences and mentally rearranging their parts."
        ]

    },


    // =================================================
    // 07 - ORDERING OF WORDS
    // =================================================

    "Ordering of Words": {

        intro: "In Ordering of Words questions, you are given a sentence broken into several parts (usually labeled P, Q, R, S) and you must arrange them in the correct order. The first and last parts are usually fixed, and you need to order the middle parts logically.",

        rules: [
            {
                name: "Identify Opening and Closing",
                description: "The first part often introduces the subject or topic. The last part often concludes the thought."
            },
            {
                name: "Look for Connectors",
                description: "Words like 'and', 'but', 'however', 'therefore', 'which', 'who' connect parts and indicate order."
            },
            {
                name: "Pronoun References",
                description: "Pronouns (he, she, it, they, this) must come after the noun they refer to."
            },
            {
                name: "Chronological Order",
                description: "Events should follow a logical time sequence — cause before effect, general before specific."
            }
        ],

        tips: [
            "Read all parts first to understand the overall meaning.",
            "Find mandatory pairs — some parts must go together based on grammar or meaning.",
            "Use articles and pronouns as clues: 'the' usually refers to something already mentioned.",
            "Try different arrangements and read aloud — the correct one will sound natural.",
            "Look for cause-effect relationships to determine order.",
            "Practice regularly — pattern recognition improves with repetition."
        ]

    },


    // =================================================
    // 08 - SENTENCE CORRECTION
    // =================================================

    "Sentence Correction": {

        intro: "Sentence Correction questions present a sentence that may contain a grammatical error, and you must choose the correct version from the options. These questions test your knowledge of grammar rules including tense, agreement, parallelism, modifiers and idiomatic expressions.",

        rules: [
            {
                name: "Subject-Verb Agreement",
                description: "Ensure the verb matches the subject in number. Watch for tricky subjects like 'neither...nor', 'either...or', collective nouns."
            },
            {
                name: "Correct Tense Usage",
                description: "Use the appropriate tense based on the time reference in the sentence. Past actions use past tense, habitual actions use present tense."
            },
            {
                name: "Parallel Structure",
                description: "Items in a list or comparison must have the same grammatical form. Example: 'to read, to write, and to learn' (not 'reading, to write, and learn')."
            },
            {
                name: "Modifier Placement",
                description: "Place modifiers close to the word they describe. Misplaced modifiers change the meaning. Example: 'She nearly drove all the way' vs 'She drove nearly all the way'."
            },
            {
                name: "Correct Comparisons",
                description: "Use 'er/more' for comparing two things and 'est/most' for three or more. Example: 'taller than' (two people), 'tallest of all' (three or more)."
            }
        ],

        tips: [
            "Read the original sentence carefully — sometimes it is already correct.",
            "Focus on the underlined/highlighted part — that is where the error usually is.",
            "Check subject-verb agreement first — it is the most common error type.",
            "Look for pronoun errors: ambiguous references, wrong case (who/whom, I/me).",
            "Watch for double negatives: 'can't hardly' should be 'can hardly'.",
            "If you are stuck between two options, choose the one that is simpler and more direct."
        ]

    },


    // =================================================
    // 09 - SENTENCE IMPROVEMENT
    // =================================================

    "Sentence Improvement": {

        intro: "Sentence Improvement questions give you a sentence with an underlined portion and ask you to choose the best replacement for it. The goal is to make the sentence grammatically correct, clear and concise. If no improvement is needed, the answer is 'No improvement'.",

        rules: [
            {
                name: "Conciseness",
                description: "Prefer shorter, clearer expressions. Example: 'at this point in time' → 'now', 'in spite of the fact that' → 'although'."
            },
            {
                name: "Active Voice Preference",
                description: "Active voice is generally preferred over passive voice for clarity. Example: 'The manager approved the plan' (active) vs 'The plan was approved by the manager' (passive)."
            },
            {
                name: "Avoid Redundancy",
                description: "Remove unnecessary words. Example: 'return back' → 'return', 'advance forward' → 'advance', 'repeat again' → 'repeat'."
            },
            {
                name: "Correct Idiom Usage",
                description: "Use the standard form of idiomatic expressions. Example: 'comply with' (not 'comply to'), 'different from' (not 'different than')."
            }
        ],

        tips: [
            "Read the original sentence first — understand what it is trying to say.",
            "Compare each option with the original — the improvement must fix an error or improve clarity.",
            "Don't change the meaning of the sentence while improving it.",
            "Look for wordiness — the best answer is often the most concise.",
            "Check if 'No improvement' could be the answer — don't force a change.",
            "Practice identifying common errors: wrong prepositions, incorrect verb forms, redundant words."
        ]

    },


    // =================================================
    // 10 - COMPLETING STATEMENTS
    // =================================================

    "Completing Statements": {

        intro: "Completing Statements questions present an incomplete sentence and ask you to choose the option that best completes it logically and grammatically. These questions test your comprehension, logical thinking and language skills.",

        rules: [
            {
                name: "Logical Completion",
                description: "The completion must follow logically from the given part of the sentence. Cause-effect, contrast and continuation are common patterns."
            },
            {
                name: "Grammar Consistency",
                description: "The completion must be grammatically consistent with the beginning of the sentence — matching tense, voice and number."
            },
            {
                name: "Tone Matching",
                description: "The completion should match the tone (formal/informal, positive/negative) of the beginning."
            }
        ],

        tips: [
            "Read the incomplete sentence and try to predict the ending before looking at options.",
            "Look for signal words: 'although' expects a contrast, 'because' expects a reason, 'therefore' expects a result.",
            "Eliminate options that contradict the logic of the sentence.",
            "Check that the completed sentence reads as one coherent thought.",
            "Pay attention to punctuation — commas, semicolons and dashes give structural clues.",
            "If the statement is about a general truth, the completion should also be general."
        ]

    },


    // =================================================
    // 11 - ORDERING OF SENTENCES
    // =================================================

    "Ordering of Sentences": {

        intro: "Ordering of Sentences (also called Para Jumbles) gives you a set of sentences in a jumbled order. You must rearrange them to form a coherent and logical paragraph. This tests your ability to understand narrative flow, logical connections and paragraph structure.",

        rules: [
            {
                name: "Identify the Opening Sentence",
                description: "The first sentence usually introduces the main topic or subject. It does not contain pronouns referring to something undefined."
            },
            {
                name: "Follow Pronoun References",
                description: "Pronouns (he, she, it, they, this, these) must come after the nouns they refer to."
            },
            {
                name: "Use Transition Words",
                description: "Words like 'however', 'moreover', 'consequently', 'finally' indicate the position of a sentence in the paragraph."
            },
            {
                name: "Identify the Closing Sentence",
                description: "The last sentence usually summarizes, concludes or provides the final outcome."
            }
        ],

        tips: [
            "Read all sentences first to understand the overall theme.",
            "Identify the opening sentence — it introduces the topic without referring to prior context.",
            "Find mandatory pairs — sentences that must go together.",
            "Look for chronological or logical order (cause → effect, problem → solution).",
            "Transition words are your biggest clue: 'firstly', 'then', 'finally' indicate sequence.",
            "Verify your answer by reading the paragraph in your chosen order — it should flow naturally."
        ]

    },


    // =================================================
    // 12 - PARAGRAPH FORMATION
    // =================================================

    "Paragraph Formation": {

        intro: "Paragraph Formation questions are similar to Ordering of Sentences but focus on creating a well-structured paragraph from scattered sentences. You must identify the topic sentence, supporting details and conclusion to form a logically flowing paragraph.",

        rules: [
            {
                name: "Topic Sentence First",
                description: "A paragraph starts with a topic sentence that states the main idea."
            },
            {
                name: "Supporting Details Follow",
                description: "Sentences that elaborate, explain or provide examples come after the topic sentence."
            },
            {
                name: "Logical Flow",
                description: "Ideas should progress from general to specific, or from cause to effect."
            },
            {
                name: "Concluding Sentence Last",
                description: "The paragraph ends with a sentence that wraps up the discussion or provides a takeaway."
            }
        ],

        tips: [
            "Identify the broadest, most general sentence — it is likely the opening.",
            "Group sentences by sub-topic — they should appear together.",
            "Look for definite articles: 'The' often refers to something already introduced.",
            "Check for conclusion markers: 'Thus', 'Hence', 'In conclusion', 'Therefore'.",
            "Read your final arrangement aloud — a well-formed paragraph sounds smooth.",
            "Practice with newspaper editorials — they follow clear paragraph structure."
        ]

    },


    // =================================================
    // 13 - CLOZE TEST
    // =================================================

    "Cloze Test": {

        intro: "A Cloze Test presents a passage with several blanks, each to be filled with the most appropriate word from the given options. It tests vocabulary, grammar and reading comprehension simultaneously. Understanding the context of the entire passage is crucial for answering correctly.",

        rules: [
            {
                name: "Read the Entire Passage First",
                description: "Before filling any blank, read the complete passage to understand the theme, tone and context."
            },
            {
                name: "Grammar Fit",
                description: "The word must fit grammatically — correct part of speech (noun/verb/adjective/adverb), correct tense, correct form."
            },
            {
                name: "Contextual Meaning",
                description: "The word must make sense in the context of the surrounding sentences, not just the immediate sentence."
            },
            {
                name: "Consistency",
                description: "All filled words should maintain the same tone, style and narrative flow as the rest of the passage."
            }
        ],

        tips: [
            "Read the entire passage without filling blanks first — understand the big picture.",
            "Fill the easiest blanks first — they help you understand the context for harder ones.",
            "Look at the words before and after the blank for grammatical clues.",
            "Pay attention to conjunctions and prepositions around blanks — they constrain word choices.",
            "Check if the passage is positive or negative in tone — this helps narrow options.",
            "After filling all blanks, read the complete passage to verify it makes sense."
        ]

    },


    // =================================================
    // 14 - COMPREHENSION
    // =================================================

    "Comprehension": {

        intro: "Reading Comprehension questions give you a passage followed by questions about its content. You must read carefully and answer based on what is stated or implied in the passage. This tests reading speed, understanding, inference ability and vocabulary in context.",

        rules: [
            {
                name: "Factual Questions",
                description: "These ask about directly stated facts. The answer is explicitly in the passage — you just need to locate it."
            },
            {
                name: "Inference Questions",
                description: "These ask what can be concluded from the passage. The answer is not directly stated but can be logically derived."
            },
            {
                name: "Vocabulary in Context",
                description: "These ask the meaning of a word as used in the passage. The meaning may differ from its common definition."
            },
            {
                name: "Main Idea Questions",
                description: "These ask about the central theme or purpose of the passage. Look at the first and last paragraphs for clues."
            },
            {
                name: "Tone/Attitude Questions",
                description: "These ask about the author's attitude — is it critical, supportive, neutral, sarcastic, optimistic?"
            }
        ],

        tips: [
            "Skim the questions first before reading the passage — this tells you what to look for.",
            "Read the passage carefully but don't spend too long on it — you can always refer back.",
            "For factual questions, look for keywords from the question in the passage.",
            "For inference questions, choose what is most logically supported — avoid extreme conclusions.",
            "Don't bring outside knowledge — answer only based on what the passage says.",
            "Manage your time — don't spend more than 8-10 minutes on one passage."
        ]

    },


    // =================================================
    // 15 - ONE WORD SUBSTITUTES
    // =================================================

    "One Word Substitutes": {

        intro: "One Word Substitutes questions give you a phrase or description and ask you to find a single word that conveys the same meaning. This is a vocabulary-intensive topic that tests your knowledge of precise English words. These words often have Latin or Greek origins.",

        rules: [
            {
                name: "What is a One Word Substitute?",
                description: "A single word that replaces a group of words or a phrase. Example: 'A person who loves books' = 'Bibliophile'."
            },
            {
                name: "Common Categories",
                description: "Questions often cover: types of people, places, actions, study fields, phobias, and collections."
            },
            {
                name: "Root Words Help",
                description: "Knowing roots helps decode unfamiliar words. 'graph' = writing, 'phile' = lover, 'phobia' = fear, 'cide' = killing."
            }
        ],

        tips: [
            "Learn one word substitutes by category: people (misanthrope, philanthropist), actions (assassination, emigration).",
            "Focus on commonly tested words: 'ambidextrous', 'anonymous', 'autobiography', 'omnivore', 'epitaph'.",
            "Use root words to guess: 'mono' = one, 'poly' = many, 'bio' = life, 'geo' = earth.",
            "Eliminate options where you know the meaning doesn't match.",
            "Create flashcards with the phrase on one side and the word on the other.",
            "Group similar-sounding words together and learn their distinct meanings."
        ]

    },


    // =================================================
    // 16 - IDIOMS AND PHRASES
    // =================================================

    "Idioms and Phrases": {

        intro: "Idioms and Phrases questions test your knowledge of common English expressions whose meanings cannot be understood from the individual words. An idiom's meaning is figurative, not literal. These expressions are widely used in both spoken and written English.",

        rules: [
            {
                name: "What is an Idiom?",
                description: "An idiom is a group of words whose meaning is different from the meanings of the individual words. Example: 'Break the ice' means to initiate conversation, not literally breaking ice."
            },
            {
                name: "Context is Key",
                description: "When an idiom appears in a sentence, use the surrounding context to understand which meaning is intended."
            },
            {
                name: "Fixed Expressions",
                description: "Idioms have fixed forms — changing words changes or destroys the meaning. 'Kick the bucket' cannot be 'kick the pail'."
            }
        ],

        tips: [
            "Learn idioms in groups by theme: body parts ('cold feet', 'cold shoulder'), animals ('let the cat out of the bag'), food ('piece of cake').",
            "Read the sentence context — it often gives clues about the idiom's meaning.",
            "Don't interpret idioms literally — 'raining cats and dogs' means heavy rain, not actual animals.",
            "Focus on the 100 most commonly tested idioms for competitive exams.",
            "Use idioms in your daily English to remember them better.",
            "Associate each idiom with a visual image for stronger memory."
        ]

    },


    // =================================================
    // 17 - CHANGE OF VOICE
    // =================================================

    "Change of Voice": {

        intro: "Change of Voice questions ask you to convert sentences between active voice and passive voice. In active voice, the subject performs the action. In passive voice, the subject receives the action. Understanding voice conversion is essential for grammar mastery.",

        rules: [
            {
                name: "Active to Passive",
                description: "Object becomes subject, verb changes to 'be + past participle', subject becomes 'by + agent'. Example: 'She writes a letter' → 'A letter is written by her'."
            },
            {
                name: "Tense Changes in Passive",
                description: "Simple Present: is/am/are + V3. Simple Past: was/were + V3. Future: will be + V3. Present Continuous: is/am/are + being + V3."
            },
            {
                name: "Pronoun Changes",
                description: "Subject pronouns become object pronouns: I→me, we→us, he→him, she→her, they→them."
            },
            {
                name: "Modal Verbs",
                description: "With modals: modal + be + V3. Example: 'He can solve this' → 'This can be solved by him'."
            },
            {
                name: "Imperative Sentences",
                description: "Commands in passive: 'Let + object + be + V3'. Example: 'Close the door' → 'Let the door be closed'."
            }
        ],

        tips: [
            "Identify the subject, verb and object in the active sentence first.",
            "The tense of the active sentence determines the form of 'be' in the passive.",
            "Remember: only transitive verbs (verbs with objects) can be changed to passive voice.",
            "The 'by + agent' can be omitted when the doer is obvious or unknown.",
            "Practice converting sentences in all tenses — this builds muscle memory.",
            "Watch for special cases: questions, negative sentences and sentences with two objects."
        ]

    },


    // =================================================
    // 18 - CHANGE OF SPEECH
    // =================================================

    "Change of Speech": {

        intro: "Change of Speech (also called Direct and Indirect Speech or Reported Speech) involves converting spoken words between their direct form and reported form. Direct speech quotes exact words, while indirect speech reports what was said without quotation marks.",

        rules: [
            {
                name: "Tense Shift",
                description: "When the reporting verb is in the past tense, tenses shift back: Simple Present → Simple Past, Present Continuous → Past Continuous, Simple Past → Past Perfect."
            },
            {
                name: "Pronoun Changes",
                description: "First person pronouns change to match the subject of the reporting verb. Second person pronouns change to match the object. Third person remains unchanged."
            },
            {
                name: "Time and Place Changes",
                description: "'today' → 'that day', 'yesterday' → 'the previous day', 'tomorrow' → 'the next day', 'here' → 'there', 'this' → 'that', 'now' → 'then'."
            },
            {
                name: "Reporting Verbs",
                description: "Statements use 'said/told'. Questions use 'asked'. Commands use 'ordered/requested/advised'. Exclamations use 'exclaimed'."
            },
            {
                name: "Question Conversion",
                description: "Yes/No questions use 'if/whether'. Wh-questions retain the question word. Word order becomes statement order (no inversion)."
            }
        ],

        tips: [
            "Always identify the reporting verb tense first — it determines all other changes.",
            "Change pronouns carefully based on who is speaking and who is being spoken to.",
            "Remember the time/place word changes — they are frequently tested.",
            "For commands, use 'to + verb' in indirect speech. Example: 'Sit down' → 'He told me to sit down'.",
            "For exclamations, describe the emotion. Example: 'What a beautiful day!' → 'He exclaimed that it was a beautiful day'.",
            "Practice converting dialogue from books or conversations into indirect speech."
        ]

    },


    // =================================================
    // 19 - VERBAL ANALOGIES
    // =================================================

    "Verbal Analogies": {

        intro: "Verbal Analogy questions present a pair of words with a specific relationship and ask you to find another pair with the same relationship. These questions test your ability to identify and apply logical relationships between words such as synonyms, antonyms, part-whole, cause-effect, and degree relationships.",

        rules: [
            {
                name: "What is an Analogy?",
                description: "An analogy establishes a relationship between two pairs. Format: A : B :: C : D (A is to B as C is to D). Example: 'Doctor : Hospital :: Teacher : School'."
            },
            {
                name: "Common Relationship Types",
                description: "Synonym, Antonym, Part-Whole, Cause-Effect, Worker-Tool, Worker-Workplace, Object-Function, Degree (mild-extreme)."
            },
            {
                name: "Order Matters",
                description: "The relationship direction must be the same. If A→B is 'tool used by worker', then C→D must also be 'tool used by worker', not 'worker who uses tool'."
            }
        ],

        tips: [
            "First, determine the exact relationship between the given pair before looking at options.",
            "Form a sentence using the pair: 'A pen is used to write' → look for 'X is used to Y'.",
            "Be precise about the relationship — 'car : road' and 'train : track' share the same relationship (vehicle : surface).",
            "Watch for order reversal traps — if the given pair is cause:effect, the answer must also be cause:effect.",
            "Eliminate options where the relationship type doesn't match, even if the words seem related.",
            "Practice identifying relationships: is it a part-whole, degree, function, or category relationship?"
        ]

    }

};
