-- =========================================================
-- APTIACE - VERBAL ABILITY QUESTIONS
-- 19 TOPICS × 25 QUESTIONS = 475 QUESTIONS
-- Difficulty: Easy(1-5), Medium(6-10), Hard(11-15),
--             Advanced(16-20), Interview(21-25)
-- =========================================================


-- =========================================================
-- TOPIC 1: SPOTTING ERRORS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Spotting Errors', 'Find the error: He go / to school / every day / No Error', 'He go', 'to school', 'every day', 'No Error', 'A', 'Easy', 'The subject "He" is singular and requires the singular verb "goes", not "go". Correct: "He goes to school every day."'),

('Spotting Errors', 'Find the error: She is / more taller / than her sister / No Error', 'She is', 'more taller', 'than her sister', 'No Error', 'B', 'Easy', '"Taller" is already a comparative form. Using "more" with it is a double comparative error. Correct: "She is taller than her sister."'),

('Spotting Errors', 'Find the error: I have / visited Paris / last year / No Error', 'I have', 'visited Paris', 'last year', 'No Error', 'A', 'Easy', 'The phrase "last year" indicates a definite past time, so simple past tense should be used. Correct: "I visited Paris last year."'),

('Spotting Errors', 'Find the error: Each of the boys / have completed / their homework / No Error', 'Each of the boys', 'have completed', 'their homework', 'No Error', 'B', 'Easy', '"Each" is a singular pronoun and takes a singular verb. Correct: "Each of the boys has completed his homework."'),

('Spotting Errors', 'Find the error: The news / are very / shocking / No Error', 'The news', 'are very', 'shocking', 'No Error', 'B', 'Easy', '"News" is an uncountable noun and takes a singular verb. Correct: "The news is very shocking."'),

('Spotting Errors', 'Find the error: Neither Ram / nor his friends / was present / at the meeting / No Error', 'Neither Ram', 'nor his friends', 'was present', 'at the meeting', 'C', 'Medium', 'With "neither...nor", the verb agrees with the nearest subject. "Friends" is plural, so the verb should be "were". Correct: "Neither Ram nor his friends were present."'),

('Spotting Errors', 'Find the error: The committee / have decided / to postpone the event / No Error', 'The committee', 'have decided', 'to postpone the event', 'No Error', 'B', 'Medium', 'When a collective noun acts as a single unit, it takes a singular verb. Correct: "The committee has decided to postpone the event."'),

('Spotting Errors', 'Find the error: One of the student / has failed / in the examination / No Error', 'One of the student', 'has failed', 'in the examination', 'No Error', 'A', 'Medium', '"One of" must be followed by a plural noun. Correct: "One of the students has failed in the examination."'),

('Spotting Errors', 'Find the error: He told me / that he will / come tomorrow / No Error', 'He told me', 'that he will', 'come tomorrow', 'No Error', 'B', 'Medium', 'In reported speech with a past reporting verb ("told"), "will" changes to "would". Correct: "He told me that he would come the next day."'),

('Spotting Errors', 'Find the error: The furniture / in the room / are very old / No Error', 'The furniture', 'in the room', 'are very old', 'No Error', 'C', 'Medium', '"Furniture" is an uncountable noun and takes a singular verb. Correct: "The furniture in the room is very old."'),

('Spotting Errors', 'Find the error: Hardly had he reached / the station / where the train left / No Error', 'Hardly had he reached', 'the station', 'where the train left', 'No Error', 'C', 'Hard', '"Hardly...when" is the correct construction, not "hardly...where". Correct: "Hardly had he reached the station when the train left."'),

('Spotting Errors', 'Find the error: The reason / for his absence / is because he is ill / No Error', 'The reason', 'for his absence', 'is because he is ill', 'No Error', 'C', 'Hard', '"The reason...is because" is redundant. Use "The reason...is that". Correct: "The reason for his absence is that he is ill."'),

('Spotting Errors', 'Find the error: No sooner did he arrive / than he started / to work on it / No Error', 'No sooner did he arrive', 'than he started', 'to work on it', 'No Error', 'D', 'Hard', 'The sentence is grammatically correct. "No sooner...than" is the correct construction and all parts are properly formed.'),

('Spotting Errors', 'Find the error: He is one of those players / who has / represented the country / No Error', 'He is one of those players', 'who has', 'represented the country', 'No Error', 'B', 'Hard', '"Who" refers to "players" (plural), so the verb should be "have". Correct: "He is one of those players who have represented the country."'),

('Spotting Errors', 'Find the error: Had I known / about the meeting / I will have attended / No Error', 'Had I known', 'about the meeting', 'I will have attended', 'No Error', 'C', 'Hard', 'This is a past unreal conditional. "Had I known" requires "would have attended". Correct: "Had I known about the meeting, I would have attended."'),

('Spotting Errors', 'Find the error: It is I / who is responsible / for this mistake / No Error', 'It is I', 'who is responsible', 'for this mistake', 'No Error', 'B', 'Advanced', 'In "It is I who...", the verb should agree with "I". Correct: "It is I who am responsible for this mistake."'),

('Spotting Errors', 'Find the error: The number of students / who has passed / the examination is large / No Error', 'The number of students', 'who has passed', 'the examination is large', 'No Error', 'B', 'Advanced', '"Who" refers to "students" (plural), so it should be "who have passed". Correct: "The number of students who have passed the examination is large."'),

('Spotting Errors', 'Find the error: Despite of working hard / he could not / pass the examination / No Error', 'Despite of working hard', 'he could not', 'pass the examination', 'No Error', 'A', 'Advanced', '"Despite" does not take "of". Use "Despite working hard" or "In spite of working hard".'),

('Spotting Errors', 'Find the error: Not only he was / late for the meeting / but also left early / No Error', 'Not only he was', 'late for the meeting', 'but also left early', 'No Error', 'A', 'Advanced', '"Not only" should be followed by the auxiliary verb before the subject (inversion). Correct: "Not only was he late for the meeting but he also left early."'),

('Spotting Errors', 'Find the error: The teacher along with / the students were / going on a picnic / No Error', 'The teacher along with', 'the students were', 'going on a picnic', 'No Error', 'B', 'Advanced', 'When "along with" connects subjects, the verb agrees with the first subject ("teacher" is singular). Correct: "The teacher along with the students was going on a picnic."'),

('Spotting Errors', 'Find the error: Scarcely had I finished / my work / when he had arrived / No Error', 'Scarcely had I finished', 'my work', 'when he had arrived', 'No Error', 'C', 'Interview', '"Scarcely...when" uses simple past for the second clause, not past perfect. Correct: "Scarcely had I finished my work when he arrived."'),

('Spotting Errors', 'Find the error: Unless you do not / work hard / you will not succeed / No Error', 'Unless you do not', 'work hard', 'you will not succeed', 'No Error', 'A', 'Interview', '"Unless" already implies a negative condition. Adding "not" creates a double negative. Correct: "Unless you work hard, you will not succeed."'),

('Spotting Errors', 'Find the error: He asked me / that where / I was going / No Error', 'He asked me', 'that where', 'I was going', 'No Error', 'B', 'Interview', 'In indirect questions, "that" and "where" are not used together. Correct: "He asked me where I was going."'),

('Spotting Errors', 'Find the error: Lest he should / miss the train / he left / in a hurry / No Error', 'Lest he should', 'miss the train', 'he left', 'in a hurry', 'No Error', 'E', 'Interview', 'The sentence is grammatically correct. "Lest...should" is the proper construction expressing fear or caution.'),

('Spotting Errors', 'Find the error: A lot of progress / have been made / in the field of science / No Error', 'A lot of progress', 'have been made', 'in the field of science', 'No Error', 'B', 'Interview', '"Progress" is an uncountable noun, so the verb should be singular. Correct: "A lot of progress has been made in the field of science."');


-- =========================================================
-- TOPIC 2: SYNONYMS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Synonyms', 'Choose the synonym of: HAPPY', 'Sad', 'Joyful', 'Angry', 'Tired', 'B', 'Easy', '"Joyful" means feeling great happiness, which is the same as "happy". The other options are unrelated or opposite in meaning.'),

('Synonyms', 'Choose the synonym of: BEGIN', 'End', 'Start', 'Stop', 'Finish', 'B', 'Easy', '"Start" means to begin or commence something. "End", "Stop" and "Finish" all mean the opposite.'),

('Synonyms', 'Choose the synonym of: FAST', 'Slow', 'Quick', 'Heavy', 'Lazy', 'B', 'Easy', '"Quick" means moving at high speed, the same as "fast". The other options are unrelated or opposite.'),

('Synonyms', 'Choose the synonym of: BIG', 'Small', 'Tiny', 'Large', 'Narrow', 'C', 'Easy', '"Large" means great in size, which is a synonym for "big". The others mean small or unrelated.'),

('Synonyms', 'Choose the synonym of: BRAVE', 'Cowardly', 'Courageous', 'Timid', 'Weak', 'B', 'Easy', '"Courageous" means showing bravery and courage, the same meaning as "brave".'),

('Synonyms', 'Choose the synonym of: ABUNDANT', 'Scarce', 'Plentiful', 'Rare', 'Limited', 'B', 'Medium', '"Plentiful" means existing in large quantities, which is the same as "abundant". The other options suggest scarcity.'),

('Synonyms', 'Choose the synonym of: DILIGENT', 'Lazy', 'Careless', 'Hardworking', 'Idle', 'C', 'Medium', '"Hardworking" means putting great effort, which matches "diligent". The others suggest lack of effort.'),

('Synonyms', 'Choose the synonym of: CONCEAL', 'Reveal', 'Hide', 'Expose', 'Display', 'B', 'Medium', '"Hide" means to keep out of sight, the same as "conceal". The other options mean to make visible.'),

('Synonyms', 'Choose the synonym of: TRANQUIL', 'Noisy', 'Peaceful', 'Chaotic', 'Violent', 'B', 'Medium', '"Peaceful" means calm and quiet, the same as "tranquil". The others suggest disturbance.'),

('Synonyms', 'Choose the synonym of: ARDUOUS', 'Easy', 'Simple', 'Difficult', 'Light', 'C', 'Medium', '"Difficult" matches "arduous" which means requiring great effort. The others suggest ease.'),

('Synonyms', 'Choose the synonym of: BENEVOLENT', 'Cruel', 'Kind-hearted', 'Selfish', 'Mean', 'B', 'Hard', '"Benevolent" means well-meaning and kindly. "Kind-hearted" is its synonym. The others suggest ill intent.'),

('Synonyms', 'Choose the synonym of: EPHEMERAL', 'Permanent', 'Transient', 'Eternal', 'Lasting', 'B', 'Hard', '"Ephemeral" means lasting for a very short time. "Transient" also means temporary or brief.'),

('Synonyms', 'Choose the synonym of: PRAGMATIC', 'Idealistic', 'Practical', 'Theoretical', 'Imaginary', 'B', 'Hard', '"Pragmatic" means dealing with things in a practical way. "Practical" is its closest synonym.'),

('Synonyms', 'Choose the synonym of: ELOQUENT', 'Inarticulate', 'Articulate', 'Silent', 'Quiet', 'B', 'Hard', '"Eloquent" means fluent and expressive in speaking. "Articulate" shares this meaning.'),

('Synonyms', 'Choose the synonym of: METICULOUS', 'Careless', 'Thorough', 'Sloppy', 'Hasty', 'B', 'Hard', '"Meticulous" means showing great attention to detail. "Thorough" is the closest synonym.'),

('Synonyms', 'Choose the synonym of: UBIQUITOUS', 'Rare', 'Omnipresent', 'Scarce', 'Unique', 'B', 'Advanced', '"Ubiquitous" means found everywhere. "Omnipresent" (present everywhere) is its synonym.'),

('Synonyms', 'Choose the synonym of: AMELIORATE', 'Worsen', 'Improve', 'Destroy', 'Ignore', 'B', 'Advanced', '"Ameliorate" means to make something better. "Improve" is its direct synonym.'),

('Synonyms', 'Choose the synonym of: SYCOPHANT', 'Leader', 'Flatterer', 'Rebel', 'Critic', 'B', 'Advanced', '"Sycophant" is a person who acts obsequiously to gain advantage. "Flatterer" is the closest synonym.'),

('Synonyms', 'Choose the synonym of: MAGNANIMOUS', 'Petty', 'Generous', 'Selfish', 'Cruel', 'B', 'Advanced', '"Magnanimous" means very generous or forgiving. "Generous" is its synonym.'),

('Synonyms', 'Choose the synonym of: LACONIC', 'Verbose', 'Brief', 'Lengthy', 'Elaborate', 'B', 'Advanced', '"Laconic" means using very few words. "Brief" is the closest synonym. The others suggest wordiness.'),

('Synonyms', 'Choose the synonym of: RECALCITRANT', 'Obedient', 'Defiant', 'Compliant', 'Submissive', 'B', 'Interview', '"Recalcitrant" means stubbornly uncooperative. "Defiant" is the closest synonym.'),

('Synonyms', 'Choose the synonym of: OBFUSCATE', 'Clarify', 'Confuse', 'Explain', 'Illuminate', 'B', 'Interview', '"Obfuscate" means to make obscure or unclear. "Confuse" is the closest synonym.'),

('Synonyms', 'Choose the synonym of: PERSPICACIOUS', 'Dull', 'Astute', 'Ignorant', 'Foolish', 'B', 'Interview', '"Perspicacious" means having keen mental perception. "Astute" (shrewd) is the closest synonym.'),

('Synonyms', 'Choose the synonym of: LOQUACIOUS', 'Taciturn', 'Talkative', 'Silent', 'Reserved', 'B', 'Interview', '"Loquacious" means tending to talk a great deal. "Talkative" is its direct synonym.'),

('Synonyms', 'Choose the synonym of: ALTRUISTIC', 'Selfish', 'Selfless', 'Greedy', 'Egotistic', 'B', 'Interview', '"Altruistic" means showing unselfish concern for others. "Selfless" is its synonym.');


-- =========================================================
-- TOPIC 3: ANTONYMS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Antonyms', 'Choose the antonym of: ACCEPT', 'Receive', 'Reject', 'Agree', 'Approve', 'B', 'Easy', '"Reject" means to refuse or dismiss, which is the opposite of "accept" (to receive willingly).'),

('Antonyms', 'Choose the antonym of: ANCIENT', 'Old', 'Historic', 'Modern', 'Antique', 'C', 'Easy', '"Modern" means relating to the present time, which is the opposite of "ancient" (very old).'),

('Antonyms', 'Choose the antonym of: FREEDOM', 'Liberty', 'Captivity', 'Rights', 'Independence', 'B', 'Easy', '"Captivity" means the state of being imprisoned, the opposite of "freedom".'),

('Antonyms', 'Choose the antonym of: INCREASE', 'Expand', 'Grow', 'Decrease', 'Multiply', 'C', 'Easy', '"Decrease" means to become smaller, the opposite of "increase" (to become larger).'),

('Antonyms', 'Choose the antonym of: VICTORY', 'Win', 'Triumph', 'Defeat', 'Success', 'C', 'Easy', '"Defeat" means losing a contest, the opposite of "victory" (winning).'),

('Antonyms', 'Choose the antonym of: HOSTILE', 'Aggressive', 'Friendly', 'Angry', 'Bitter', 'B', 'Medium', '"Friendly" means kind and warm, the opposite of "hostile" (unfriendly or aggressive).'),

('Antonyms', 'Choose the antonym of: TEMPORARY', 'Brief', 'Permanent', 'Short', 'Fleeting', 'B', 'Medium', '"Permanent" means lasting forever, the opposite of "temporary" (lasting for a limited time).'),

('Antonyms', 'Choose the antonym of: HUMBLE', 'Modest', 'Arrogant', 'Meek', 'Simple', 'B', 'Medium', '"Arrogant" means having an exaggerated sense of importance, the opposite of "humble".'),

('Antonyms', 'Choose the antonym of: OPTIMISTIC', 'Hopeful', 'Pessimistic', 'Positive', 'Cheerful', 'B', 'Medium', '"Pessimistic" means expecting the worst, the opposite of "optimistic" (expecting the best).'),

('Antonyms', 'Choose the antonym of: VOLUNTARY', 'Willing', 'Compulsory', 'Optional', 'Free', 'B', 'Medium', '"Compulsory" means required by law or rule, the opposite of "voluntary" (done by choice).'),

('Antonyms', 'Choose the antonym of: EXTRAVAGANT', 'Lavish', 'Frugal', 'Expensive', 'Luxurious', 'B', 'Hard', '"Frugal" means sparing with money, the opposite of "extravagant" (spending excessively).'),

('Antonyms', 'Choose the antonym of: VERBOSE', 'Wordy', 'Concise', 'Lengthy', 'Elaborate', 'B', 'Hard', '"Concise" means brief and clear, the opposite of "verbose" (using too many words).'),

('Antonyms', 'Choose the antonym of: AUDACIOUS', 'Bold', 'Timid', 'Brave', 'Daring', 'B', 'Hard', '"Timid" means lacking courage, the opposite of "audacious" (showing willingness to take bold risks).'),

('Antonyms', 'Choose the antonym of: PROLIFIC', 'Productive', 'Barren', 'Abundant', 'Fertile', 'B', 'Hard', '"Barren" means unproductive, the opposite of "prolific" (producing much).'),

('Antonyms', 'Choose the antonym of: VINDICATE', 'Justify', 'Accuse', 'Support', 'Defend', 'B', 'Hard', '"Accuse" means to charge with wrongdoing, the opposite of "vindicate" (to clear of blame).'),

('Antonyms', 'Choose the antonym of: CACOPHONY', 'Noise', 'Harmony', 'Discord', 'Racket', 'B', 'Advanced', '"Harmony" means a pleasing arrangement of sounds, the opposite of "cacophony" (harsh, discordant sounds).'),

('Antonyms', 'Choose the antonym of: CLANDESTINE', 'Secret', 'Open', 'Hidden', 'Covert', 'B', 'Advanced', '"Open" means not secret, the opposite of "clandestine" (done secretly).'),

('Antonyms', 'Choose the antonym of: EGREGIOUS', 'Terrible', 'Commendable', 'Awful', 'Shocking', 'B', 'Advanced', '"Commendable" means praiseworthy, the opposite of "egregious" (outstandingly bad).'),

('Antonyms', 'Choose the antonym of: PERFIDIOUS', 'Treacherous', 'Loyal', 'Deceitful', 'Dishonest', 'B', 'Advanced', '"Loyal" means faithful, the opposite of "perfidious" (deceitful and untrustworthy).'),

('Antonyms', 'Choose the antonym of: PERNICIOUS', 'Harmful', 'Beneficial', 'Toxic', 'Dangerous', 'B', 'Advanced', '"Beneficial" means producing good results, the opposite of "pernicious" (causing harm).'),

('Antonyms', 'Choose the antonym of: PARSIMONIOUS', 'Miserly', 'Generous', 'Stingy', 'Frugal', 'B', 'Interview', '"Generous" means willing to give, the opposite of "parsimonious" (excessively unwilling to spend).'),

('Antonyms', 'Choose the antonym of: GARRULOUS', 'Chatty', 'Reticent', 'Talkative', 'Verbose', 'B', 'Interview', '"Reticent" means reserved and uncommunicative, the opposite of "garrulous" (excessively talkative).'),

('Antonyms', 'Choose the antonym of: PUSILLANIMOUS', 'Cowardly', 'Courageous', 'Timid', 'Fearful', 'B', 'Interview', '"Courageous" means brave, the opposite of "pusillanimous" (showing a lack of courage).'),

('Antonyms', 'Choose the antonym of: SANGUINE', 'Optimistic', 'Pessimistic', 'Hopeful', 'Confident', 'B', 'Interview', '"Pessimistic" means expecting the worst, the opposite of "sanguine" (optimistic, especially in difficult situations).'),

('Antonyms', 'Choose the antonym of: TRUCULENT', 'Fierce', 'Amiable', 'Aggressive', 'Hostile', 'B', 'Interview', '"Amiable" means friendly and pleasant, the opposite of "truculent" (eager to fight, aggressively defiant).');


-- =========================================================
-- TOPIC 4: SELECTING WORDS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Selecting Words', 'The sun _____ in the east.', 'rises', 'sets', 'falls', 'drops', 'A', 'Easy', '"Rises" is the correct word as the sun rises (comes up) in the east. This is a basic factual statement.'),

('Selecting Words', 'She was _____ tired to continue working.', 'to', 'too', 'two', 'so', 'B', 'Easy', '"Too" means excessively and is used before adjectives. "Too tired" means excessively tired. "To" is a preposition, "two" is a number.'),

('Selecting Words', 'He is known for his _____ in dealing with people.', 'cruelty', 'kindness', 'rudeness', 'harshness', 'B', 'Easy', 'The positive construction "known for" combined with "dealing with people" suggests a positive quality. "Kindness" fits best.'),

('Selecting Words', 'The teacher asked the students to _____ their homework on time.', 'submit', 'reject', 'ignore', 'destroy', 'A', 'Easy', '"Submit" means to hand in work for assessment, which is what teachers ask students to do with homework.'),

('Selecting Words', 'We must _____ the rules of the school.', 'break', 'follow', 'ignore', 'violate', 'B', 'Easy', '"Follow" means to obey or comply with. "Must follow" indicates obligation to adhere to rules.'),

('Selecting Words', 'The manager _____ the proposal after careful consideration.', 'rejected', 'accepted', 'ignored', 'delayed', 'B', 'Medium', '"After careful consideration" suggests a thoughtful decision. In this context, "accepted" works best as it implies a positive outcome after review.'),

('Selecting Words', 'Despite his best efforts, he could not _____ the task.', 'begin', 'accomplish', 'start', 'initiate', 'B', 'Medium', '"Accomplish" means to successfully complete. "Despite his best efforts...could not accomplish" shows failure despite trying hard.'),

('Selecting Words', 'The _____ of the movie was so gripping that the audience sat in silence.', 'comedy', 'climax', 'beginning', 'credits', 'B', 'Medium', '"Climax" is the most intense point of a story. A gripping climax would keep the audience in silence.'),

('Selecting Words', 'Her speech was so _____ that everyone was moved to tears.', 'boring', 'eloquent', 'confusing', 'lengthy', 'B', 'Medium', '"Eloquent" means fluent and persuasive. An eloquent speech would move people emotionally.'),

('Selecting Words', 'The scientist made a _____ discovery that changed the world.', 'trivial', 'groundbreaking', 'insignificant', 'minor', 'B', 'Medium', '"Groundbreaking" means innovative and revolutionary. A discovery that changed the world must be groundbreaking.'),

('Selecting Words', 'Although he is wealthy, he leads a very _____ lifestyle.', 'lavish', 'frugal', 'extravagant', 'luxurious', 'B', 'Hard', '"Although" signals contrast. Despite being wealthy, he leads a "frugal" (economical) lifestyle. This creates the expected contrast.'),

('Selecting Words', 'The politician tried to _____ the controversy by making a public statement.', 'ignite', 'quell', 'amplify', 'provoke', 'B', 'Hard', '"Quell" means to suppress or put an end to. Making a public statement to quell a controversy means trying to calm it down.'),

('Selecting Words', 'His _____ behavior at the party embarrassed his friends.', 'courteous', 'boorish', 'polite', 'graceful', 'B', 'Hard', '"Boorish" means rough and bad-mannered, which would cause embarrassment. The other options describe positive behavior.'),

('Selecting Words', 'The company decided to _____ its operations to reduce losses.', 'expand', 'curtail', 'increase', 'boost', 'B', 'Hard', '"Curtail" means to reduce or restrict. To reduce losses, a company would curtail (cut back) its operations.'),

('Selecting Words', 'The judge delivered a _____ verdict that surprised everyone.', 'predictable', 'unanimous', 'expected', 'contentious', 'D', 'Hard', '"Contentious" means causing disagreement or controversy. A contentious verdict would surprise everyone because it was controversial.'),

('Selecting Words', 'His _____ nature made it difficult for him to make friends.', 'gregarious', 'reclusive', 'outgoing', 'sociable', 'B', 'Advanced', '"Reclusive" means avoiding the company of others. A reclusive nature would make friendship difficult. The others suggest sociability.'),

('Selecting Words', 'The government took _____ measures to combat the economic crisis.', 'half-hearted', 'stringent', 'lenient', 'relaxed', 'B', 'Advanced', '"Stringent" means strict and precise. Combating an economic crisis requires stringent (strict, forceful) measures.'),

('Selecting Words', 'Her _____ remarks during the meeting offended many colleagues.', 'tactful', 'caustic', 'diplomatic', 'considerate', 'B', 'Advanced', '"Caustic" means sarcastic and harsh. Caustic remarks would offend colleagues. The other options describe careful, sensitive speech.'),

('Selecting Words', 'The artist created a _____ masterpiece that left critics speechless.', 'mediocre', 'sublime', 'ordinary', 'average', 'B', 'Advanced', '"Sublime" means of outstanding quality. A sublime masterpiece would leave critics speechless with its excellence.'),

('Selecting Words', 'The new policy was met with _____ opposition from the workers.', 'mild', 'vehement', 'weak', 'passive', 'B', 'Advanced', '"Vehement" means showing strong feeling or passion. Vehement opposition indicates fierce resistance.'),

('Selecting Words', 'The diplomat handled the crisis with remarkable _____, avoiding conflict on all sides.', 'aggression', 'finesse', 'hostility', 'clumsiness', 'B', 'Interview', '"Finesse" means refined skill and tact. Handling a crisis with finesse means doing it skillfully and diplomatically.'),

('Selecting Words', 'Her _____ approach to problem-solving earned her the respect of her peers.', 'haphazard', 'methodical', 'chaotic', 'random', 'B', 'Interview', '"Methodical" means systematic and orderly. A methodical approach would earn respect. The others suggest disorder.'),

('Selecting Words', 'The CEO was known for making _____ decisions that often paid off handsomely.', 'timid', 'audacious', 'cautious', 'conservative', 'B', 'Interview', '"Audacious" means bold and daring. Audacious decisions that paid off suggest brave risk-taking.'),

('Selecting Words', 'The professor''s lecture was so _____ that even the most disinterested students paid attention.', 'tedious', 'riveting', 'monotonous', 'dull', 'B', 'Interview', '"Riveting" means completely engrossing. A riveting lecture would capture even disinterested students'' attention.'),

('Selecting Words', 'The company''s _____ growth over the past decade has been nothing short of phenomenal.', 'sluggish', 'exponential', 'stagnant', 'negligible', 'B', 'Interview', '"Exponential" means rapid and increasing. Exponential growth described as phenomenal fits the context perfectly.');


-- =========================================================
-- TOPIC 5: SPELLINGS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Spellings', 'Which word is spelled correctly?', 'Recieve', 'Receive', 'Receve', 'Receeve', 'B', 'Easy', '"Receive" follows the "i before e except after c" rule. After "c", the "e" comes before "i".'),

('Spellings', 'Which word is spelled correctly?', 'Beautful', 'Beautifull', 'Beautiful', 'Beutiful', 'C', 'Easy', 'The correct spelling is "beautiful" — beauty + ful.'),

('Spellings', 'Which word is spelled correctly?', 'Freind', 'Frend', 'Friend', 'Freand', 'C', 'Easy', '"Friend" is the correct spelling. Remember: "I before E except after C" — "fri-end".'),

('Spellings', 'Which word is spelled correctly?', 'Tommorow', 'Tomorow', 'Tomorrow', 'Tommorrow', 'C', 'Easy', '"Tomorrow" has one "m" and two "r" sounds but only one "r" in spelling.'),

('Spellings', 'Which word is spelled correctly?', 'Enviroment', 'Environment', 'Enviromnent', 'Envirornment', 'B', 'Easy', '"Environment" — remember the "n" before "ment": environ-ment.'),

('Spellings', 'Which word is spelled correctly?', 'Accomodate', 'Acommodate', 'Accommodate', 'Acomodate', 'C', 'Medium', '"Accommodate" has two "c"s and two "m"s. A very commonly misspelled word.'),

('Spellings', 'Which word is spelled correctly?', 'Occassion', 'Occasion', 'Ocassion', 'Ocasion', 'B', 'Medium', '"Occasion" has two "c"s and one "s". Unlike "occurrence", it has only one "s".'),

('Spellings', 'Which word is spelled correctly?', 'Seperate', 'Separete', 'Separate', 'Seperete', 'C', 'Medium', '"Separate" — remember: there is "a rat" in separate (sep-a-rat-e).'),

('Spellings', 'Which word is spelled correctly?', 'Neccessary', 'Necessary', 'Necessery', 'Neccesary', 'B', 'Medium', '"Necessary" — one "c" and two "s"s. Remember: one Collar, two Socks.'),

('Spellings', 'Which word is spelled correctly?', 'Definately', 'Definatly', 'Definitely', 'Definetly', 'C', 'Medium', '"Definitely" — remember it contains the word "finite" (definite + ly).'),

('Spellings', 'Which word is spelled correctly?', 'Occurence', 'Occurrence', 'Occurrance', 'Ocurrence', 'B', 'Hard', '"Occurrence" — two "c"s, two "r"s, one "e" before "nce".'),

('Spellings', 'Which word is spelled correctly?', 'Embarass', 'Embarrass', 'Embarras', 'Embaras', 'B', 'Hard', '"Embarrass" — two "r"s and two "s"s. A very commonly misspelled word.'),

('Spellings', 'Which word is spelled correctly?', 'Consciencious', 'Conscientious', 'Conscentious', 'Conscientous', 'B', 'Hard', '"Conscientious" means thorough and careful. Note the "tious" ending.'),

('Spellings', 'Which word is spelled correctly?', 'Mischievious', 'Mischievous', 'Mischevous', 'Mischeivous', 'B', 'Hard', '"Mischievous" — note there is no "i" after the "v". It is NOT "mischievious".'),

('Spellings', 'Which word is spelled correctly?', 'Maintenence', 'Maintainance', 'Maintenance', 'Maintanence', 'C', 'Hard', '"Maintenance" — note the "ten" in the middle, not "tain" like "maintain".'),

('Spellings', 'Which word is spelled correctly?', 'Bureacracy', 'Beaurocracy', 'Bureaucracy', 'Bueaucracy', 'C', 'Advanced', '"Bureaucracy" — bureau + cracy. Remember the "eau" pattern from "bureau".'),

('Spellings', 'Which word is spelled correctly?', 'Idiosyncracy', 'Idiosyncrasy', 'Idiosyncricy', 'Idiosyncrosy', 'B', 'Advanced', '"Idiosyncrasy" ends in "-asy", not "-acy". A distinctive individual habit or characteristic.'),

('Spellings', 'Which word is spelled correctly?', 'Sacrilegious', 'Sacreligious', 'Sacreligous', 'Sacriligious', 'A', 'Advanced', '"Sacrilegious" — from "sacrilege", not "religious". A common trap!'),

('Spellings', 'Which word is spelled correctly?', 'Supercede', 'Supersede', 'Superceed', 'Superseed', 'B', 'Advanced', '"Supersede" — the only English word ending in "-sede". All others use "-cede" or "-ceed".'),

('Spellings', 'Which word is spelled correctly?', 'Manoeuver', 'Maneuver', 'Manuever', 'Manuver', 'B', 'Advanced', '"Maneuver" is the correct American English spelling. "Manoeuvre" is British.'),

('Spellings', 'Which word is spelled correctly?', 'Onomatopeia', 'Onomatopoeia', 'Onomatopea', 'Onomatapoeia', 'B', 'Interview', '"Onomatopoeia" — a word that imitates a sound (buzz, hiss, splash). Note the "oeia" ending.'),

('Spellings', 'Which word is spelled correctly?', 'Pnuemonia', 'Pneumonia', 'Neumonia', 'Puenmonia', 'B', 'Interview', '"Pneumonia" — starts with silent "p", then "neu". From Greek "pneumon" (lung).'),

('Spellings', 'Which word is spelled correctly?', 'Mneumonic', 'Nemonic', 'Mnemonic', 'Mnuemonic', 'C', 'Interview', '"Mnemonic" — starts with silent "m". A device to aid memory. From Greek "mnemonikos".'),

('Spellings', 'Which word is spelled correctly?', 'Liason', 'Liasion', 'Liaison', 'Liaision', 'C', 'Interview', '"Liaison" — note the "ai" then "s" then "on" pattern. A link or connection between groups.'),

('Spellings', 'Which word is spelled correctly?', 'Millenium', 'Millennium', 'Milenium', 'Milennium', 'B', 'Interview', '"Millennium" — two "l"s and two "n"s. A period of one thousand years.');


-- =========================================================
-- TOPIC 6: SENTENCE FORMATION
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Sentence Formation', 'Arrange the words to form a sentence: is / name / my / John', 'My name is John', 'Is my name John', 'John my name is', 'Name is my John', 'A', 'Easy', 'The correct sentence follows SVO order: "My name is John" — Subject (My name) + Verb (is) + Complement (John).'),

('Sentence Formation', 'Arrange the words: the / reads / she / newspaper / daily', 'She reads the newspaper daily', 'Daily she the newspaper reads', 'The newspaper reads she daily', 'Reads she the daily newspaper', 'A', 'Easy', 'SVO order: "She (S) reads (V) the newspaper (O) daily (adverb of time)."'),

('Sentence Formation', 'Arrange the words: playing / children / in / the / are / park', 'The children are playing in the park', 'In the park children playing are', 'Are playing children in park the', 'Playing are children the in park', 'A', 'Easy', 'Correct: "The children (S) are playing (V) in the park (prepositional phrase)."'),

('Sentence Formation', 'Arrange the words: has / homework / he / finished / his', 'He has finished his homework', 'His homework has he finished', 'Finished has he his homework', 'Has he finished his homework', 'A', 'Easy', 'Statement form: "He (S) has finished (V) his homework (O)."'),

('Sentence Formation', 'Arrange the words: very / the / is / cold / weather / today', 'The weather is very cold today', 'Today very cold is the weather', 'Cold is very weather the today', 'Very the weather is cold today', 'A', 'Easy', '"The weather (S) is (V) very cold (C) today (time adverb)."'),

('Sentence Formation', 'Arrange the words: despite / rain / the / went / they / heavy / out', 'Despite the heavy rain they went out', 'They went out despite the heavy rain', 'Heavy rain despite they went out the', 'Out they went despite the heavy rain', 'B', 'Medium', 'Both A and B are valid, but "They went out despite the heavy rain" is the most natural word order.'),

('Sentence Formation', 'Arrange the words: been / she / for / working / has / hours / three', 'She has been working for three hours', 'For three hours she has been working', 'Has she been working for three hours', 'Working has she been for three hours', 'A', 'Medium', 'Present perfect continuous: "She has been working for three hours."'),

('Sentence Formation', 'Arrange the words: always / she / others / helps / who / in / are / need', 'She always helps others who are in need', 'Always she helps others who are in need', 'Others who are in need she always helps', 'Who are in need she always helps others', 'A', 'Medium', '"She always helps others who are in need" — adverb of frequency before main verb.'),

('Sentence Formation', 'Arrange the words: will / completed / project / the / by / tomorrow / be', 'The project will be completed by tomorrow', 'By tomorrow the project will be completed', 'Will the project be completed by tomorrow', 'Completed will be the project by tomorrow', 'A', 'Medium', 'Future passive: "The project will be completed by tomorrow."'),

('Sentence Formation', 'Arrange the words: not / should / waste / we / water / precious', 'We should not waste precious water', 'Should we not waste precious water', 'Precious water we should not waste', 'Not waste precious water we should', 'A', 'Medium', '"We should not waste precious water" — Subject + modal + not + verb + object.'),

('Sentence Formation', 'Arrange the words: would / had / I / known / earlier / if / I / have / come', 'If I had known earlier I would have come', 'I would have come if I had known earlier', 'Had I known earlier I would have come', 'Would I have come if I had known earlier', 'A', 'Hard', 'Past unreal conditional: "If I had known earlier, I would have come."'),

('Sentence Formation', 'Arrange the words: only / realized / too / he / late / his / mistake', 'He realized his mistake only too late', 'Only too late he realized his mistake', 'He only realized his mistake too late', 'Too late only he realized his mistake', 'A', 'Hard', '"He realized his mistake only too late" — placing "only too late" at the end for emphasis.'),

('Sentence Formation', 'Arrange the words: neither / the / teacher / nor / satisfied / were / the / students', 'Neither the teacher nor the students were satisfied', 'The teacher neither nor the students were satisfied', 'Were neither the teacher nor the students satisfied', 'Satisfied were neither the teacher nor the students', 'A', 'Hard', '"Neither...nor" construction: "Neither the teacher nor the students were satisfied."'),

('Sentence Formation', 'Arrange the words: hardly / finished / had / speaking / he / when / rang / the / bell', 'Hardly had he finished speaking when the bell rang', 'He had hardly finished speaking when the bell rang', 'When the bell rang hardly had he finished speaking', 'The bell rang when hardly had he finished speaking', 'A', 'Hard', '"Hardly had he..." uses inverted word order for emphasis. Both A and B are correct; A uses the emphatic inversion.'),

('Sentence Formation', 'Arrange the words: so / was / tired / that / he / he / could / barely / walk', 'He was so tired that he could barely walk', 'So tired was he that he could barely walk', 'Barely could he walk so tired was he that', 'That he could barely walk so tired he was', 'A', 'Hard', '"So...that" construction: "He was so tired that he could barely walk."'),

('Sentence Formation', 'Arrange the words: not / it / until / did / realize / the / he / importance / later / much', 'Not until much later did he realize the importance', 'He did not realize the importance until much later', 'Until much later he did not realize the importance', 'The importance he did not realize until much later', 'A', 'Advanced', '"Not until...did" uses inversion: "Not until much later did he realize the importance."'),

('Sentence Formation', 'Arrange the words: seldom / such / performance / have / brilliant / we / a / seen', 'Seldom have we seen such a brilliant performance', 'We have seldom seen such a brilliant performance', 'Such a brilliant performance seldom have we seen', 'Have we seldom seen such a brilliant performance', 'A', 'Advanced', 'Negative adverb inversion: "Seldom have we seen such a brilliant performance."'),

('Sentence Formation', 'Arrange the words: little / he / did / know / what / await / would / him', 'Little did he know what would await him', 'He did little know what would await him', 'What would await him little did he know', 'Did he little know what would await him', 'A', 'Advanced', '"Little did he know" uses inversion with the negative adverb "little" for dramatic effect.'),

('Sentence Formation', 'Arrange the words: no / had / sooner / arrived / he / than / started / it / raining', 'No sooner had he arrived than it started raining', 'He had no sooner arrived than it started raining', 'Than it started raining no sooner had he arrived', 'Arrived had he no sooner than it started raining', 'A', 'Advanced', '"No sooner...than" with inversion: "No sooner had he arrived than it started raining."'),

('Sentence Formation', 'Arrange the words: were / to / I / president / the / I / would / change / the / policy', 'Were I the president I would change the policy', 'I were the president I would change the policy', 'The president were I I would change the policy', 'Would I change the policy were I the president', 'A', 'Advanced', 'Subjunctive inversion: "Were I the president, I would change the policy" (If I were...).'),

('Sentence Formation', 'Arrange the words: on / account / no / should / be / rules / broken / the', 'On no account should the rules be broken', 'The rules should be broken on no account', 'Should the rules be broken on no account', 'No account on should the rules be broken', 'A', 'Interview', '"On no account" at the start triggers inversion: "On no account should the rules be broken."'),

('Sentence Formation', 'Arrange the words: under / circumstances / no / will / tolerated / be / such / behavior', 'Under no circumstances will such behavior be tolerated', 'Such behavior will be tolerated under no circumstances', 'No circumstances under will such behavior be tolerated', 'Will such behavior be tolerated under no circumstances', 'A', 'Interview', '"Under no circumstances" triggers inversion: "Under no circumstances will such behavior be tolerated."'),

('Sentence Formation', 'Arrange the words: only / when / he / left / did / I / the / realize / truth', 'Only when he left did I realize the truth', 'I did realize the truth only when he left', 'When he left only did I realize the truth', 'Did I realize the truth only when he left', 'A', 'Interview', '"Only when..." triggers inversion in the main clause: "Only when he left did I realize the truth."'),

('Sentence Formation', 'Arrange the words: at / time / no / during / the / meeting / was / issue / the / raised', 'At no time during the meeting was the issue raised', 'The issue was raised at no time during the meeting', 'During the meeting at no time was the issue raised', 'Was the issue raised at no time during the meeting', 'A', 'Interview', '"At no time" at the start triggers subject-auxiliary inversion.'),

('Sentence Formation', 'Arrange the words: so / complex / the / was / problem / that / could / nobody / it / solve', 'So complex was the problem that nobody could solve it', 'The problem was so complex that nobody could solve it', 'Nobody could solve it so complex was the problem that', 'That nobody could solve it so complex the problem was', 'A', 'Interview', '"So...that" with fronted adjective triggers inversion: "So complex was the problem that nobody could solve it."');


-- =========================================================
-- TOPIC 7: ORDERING OF WORDS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Ordering of Words', 'Arrange P, Q, R, S to form a meaningful sentence. Start: "The boy" / P: who was standing / Q: at the gate / R: is my / S: brother / End: "."', 'PQRS', 'QPRS', 'PRQS', 'RSPQ', 'A', 'Easy', '"The boy who was standing at the gate is my brother." P(who was standing) Q(at the gate) R(is my) S(brother).'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "I" / P: went to / Q: the market / R: to buy / S: some vegetables', 'PQRS', 'QPSR', 'RSPQ', 'SRPQ', 'A', 'Easy', '"I went to the market to buy some vegetables." Natural sequence of actions.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "She" / P: is a / Q: very talented / R: young / S: singer', 'PQRS', 'PRQS', 'PSRQ', 'PQSR', 'A', 'Easy', '"She is a very talented young singer." Adjective order: opinion (talented) before age (young) before noun (singer).'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "My father" / P: works in / Q: a big / R: software / S: company', 'PQRS', 'PRQS', 'QPRS', 'PSQR', 'A', 'Easy', '"My father works in a big software company." Size (big) before type (software) before noun (company).'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The teacher" / P: told the students / Q: to complete / R: their assignment / S: before Friday', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Easy', '"The teacher told the students to complete their assignment before Friday." Logical sequence.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Although" / P: he studied hard / Q: he could not / R: pass the / S: examination', 'PQRS', 'QPRS', 'RSPQ', 'SRPQ', 'A', 'Medium', '"Although he studied hard, he could not pass the examination." Concession followed by result.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The man" / P: whom I met / Q: at the party / R: turned out to be / S: a famous scientist', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Medium', '"The man whom I met at the party turned out to be a famous scientist."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Not only" / P: did he fail / Q: the exam / R: but he also / S: lost his scholarship', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Medium', '"Not only did he fail the exam but he also lost his scholarship." Not only...but also construction.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Had" / P: I known / Q: about the problem / R: I would have / S: helped you', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Medium', '"Had I known about the problem, I would have helped you." Inverted conditional.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The book" / P: which was written / Q: by a famous author / R: has been translated / S: into many languages', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Medium', '"The book which was written by a famous author has been translated into many languages."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Despite" / P: facing many obstacles / Q: throughout her career / R: she managed to / S: achieve great success', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Hard', '"Despite facing many obstacles throughout her career, she managed to achieve great success."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "It was" / P: only after / Q: the accident / R: that he realized / S: the importance of safety', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Hard', '"It was only after the accident that he realized the importance of safety." Cleft sentence.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "No sooner" / P: had the match / Q: started than / R: it began / S: to rain heavily', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Hard', '"No sooner had the match started than it began to rain heavily."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The teacher" / P: as well as / Q: the students / R: was praised / S: for the excellent results', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Hard', '"The teacher as well as the students was praised for the excellent results." Verb agrees with first subject.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Seldom" / P: does one find / Q: a person / R: who is both / S: intelligent and humble', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Hard', '"Seldom does one find a person who is both intelligent and humble." Inversion after negative adverb.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The government" / P: in collaboration with / Q: international organizations / R: has launched a program / S: to eradicate poverty', 'PQRS', 'RSPQ', 'RPQS', 'PQSR', 'C', 'Advanced', '"The government in collaboration with international organizations has launched a program to eradicate poverty." R before P makes less sense; the natural flow is description first (PQ) then action (RS). Wait — re-reading: RPQS = "has launched a program in collaboration with international organizations to eradicate poverty" which also works. But PQRS = "in collaboration with international organizations has launched a program to eradicate poverty" is more natural.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The discovery" / P: which was made / Q: by a team of scientists / R: has the potential / S: to revolutionize medicine', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Advanced', '"The discovery which was made by a team of scientists has the potential to revolutionize medicine."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "While" / P: the developed nations / Q: continue to prosper / R: the developing countries / S: struggle with basic needs', 'PQRS', 'RSPQ', 'QPRS', 'PRQS', 'A', 'Advanced', '"While the developed nations continue to prosper, the developing countries struggle with basic needs." Contrast structure.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "What" / P: surprised everyone / Q: was the fact / R: that he had / S: completed the task alone', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Advanced', '"What surprised everyone was the fact that he had completed the task alone." Noun clause as subject.'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "The extent" / P: to which / Q: technology has changed / R: our daily lives / S: is truly remarkable', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Advanced', '"The extent to which technology has changed our daily lives is truly remarkable."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Were it" / P: not for / Q: the timely intervention / R: of the fire brigade / S: the building would have collapsed', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Interview', '"Were it not for the timely intervention of the fire brigade, the building would have collapsed."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "So profound" / P: was the impact / Q: of his speech / R: that the entire audience / S: rose to give a standing ovation', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Interview', '"So profound was the impact of his speech that the entire audience rose to give a standing ovation."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Little" / P: did the world know / Q: at that time / R: that the young boy / S: would one day become a legend', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Interview', '"Little did the world know at that time that the young boy would one day become a legend."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Nowhere" / P: in the annals / Q: of history / R: has such a feat / S: been accomplished before', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Interview', '"Nowhere in the annals of history has such a feat been accomplished before."'),

('Ordering of Words', 'Arrange P, Q, R, S. Start: "Only by" / P: adopting sustainable practices / Q: can we hope / R: to preserve / S: the environment for future generations', 'PQRS', 'QPRS', 'RSPQ', 'PRQS', 'A', 'Interview', '"Only by adopting sustainable practices can we hope to preserve the environment for future generations."');


-- =========================================================
-- TOPIC 8: SENTENCE CORRECTION
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Sentence Correction', 'Choose the correct sentence:', 'He don''t know the answer.', 'He doesn''t know the answer.', 'He doesn''t knows the answer.', 'He don''t knows the answer.', 'B', 'Easy', '"He" is third person singular and requires "doesn''t" (does not) with the base form "know".'),

('Sentence Correction', 'Choose the correct sentence:', 'Me and him went to the store.', 'Him and me went to the store.', 'He and I went to the store.', 'I and he went to the store.', 'C', 'Easy', 'Subject pronouns "He and I" are used as subjects. Convention places "I" last.'),

('Sentence Correction', 'Choose the correct sentence:', 'She is more smarter than her sister.', 'She is smarter than her sister.', 'She is most smarter than her sister.', 'She is smart than her sister.', 'B', 'Easy', '"Smarter" is already comparative. Do not use "more" with comparative forms ending in "-er".'),

('Sentence Correction', 'Choose the correct sentence:', 'The childrens are playing outside.', 'The children is playing outside.', 'The children are playing outside.', 'The child are playing outside.', 'C', 'Easy', '"Children" is already plural (irregular). It takes the plural verb "are". No need to add "s".'),

('Sentence Correction', 'Choose the correct sentence:', 'I have went to the museum yesterday.', 'I went to the museum yesterday.', 'I have go to the museum yesterday.', 'I going to the museum yesterday.', 'B', 'Easy', '"Yesterday" indicates simple past. Use "went" (simple past), not "have went" (incorrect past participle usage).'),

('Sentence Correction', 'Choose the correct sentence:', 'Neither of the students have completed the assignment.', 'Neither of the students has completed the assignment.', 'Neither of the student has completed the assignment.', 'Neither of students have completed the assignment.', 'B', 'Medium', '"Neither" is singular and takes "has". "Students" is correct after "of the" (plural noun, singular verb).'),

('Sentence Correction', 'Choose the correct sentence:', 'Everyone should bring their books.', 'Everyone should bring his or her books.', 'Everyone should bring its books.', 'Everyone should brings their books.', 'B', 'Medium', '"Everyone" is singular. Formally, "his or her" is the correct pronoun. "Their" is increasingly accepted but B is traditionally correct.'),

('Sentence Correction', 'Choose the correct sentence:', 'He is one of the best player in the team.', 'He is one of the best players in the team.', 'He is one of the best players in team.', 'He is one of best players in the team.', 'B', 'Medium', '"One of" requires a plural noun: "one of the best players". Also needs "the" before "team".'),

('Sentence Correction', 'Choose the correct sentence:', 'The team have won the match.', 'The team has won the match.', 'The team won has the match.', 'The team have win the match.', 'B', 'Medium', 'When "team" acts as a single unit, it takes the singular verb "has". "Has won" is present perfect.'),

('Sentence Correction', 'Choose the correct sentence:', 'She told that she will come.', 'She said that she would come.', 'She told that she would come.', 'She said that she will come.', 'B', 'Medium', '"Said" is correct (not "told" without an indirect object). In reported speech, "will" changes to "would".'),

('Sentence Correction', 'Choose the correct sentence:', 'Hardly had he reached the station where the train departed.', 'Hardly had he reached the station when the train departed.', 'Hardly he had reached the station when the train departed.', 'Hardly has he reached the station when the train departed.', 'B', 'Hard', '"Hardly...when" is the correct construction. "Hardly had he..." uses correct inversion and past perfect.'),

('Sentence Correction', 'Choose the correct sentence:', 'Despite of the rain, we went out.', 'Despite the rain, we went out.', 'Despite of rain, we went out.', 'Despite to the rain, we went out.', 'B', 'Hard', '"Despite" does not take "of". Use "despite the rain" or "in spite of the rain".'),

('Sentence Correction', 'Choose the correct sentence:', 'I prefer tea than coffee.', 'I prefer tea over coffee.', 'I prefer tea to coffee.', 'I prefer tea from coffee.', 'C', 'Hard', '"Prefer...to" is the correct construction. Not "than", "over" or "from".'),

('Sentence Correction', 'Choose the correct sentence:', 'No sooner did he arrive when the meeting started.', 'No sooner did he arrive than the meeting started.', 'No sooner he arrived than the meeting started.', 'No sooner did he arrived than the meeting started.', 'B', 'Hard', '"No sooner...than" is the correct pair. Uses inversion "did he arrive" and base form "arrive".'),

('Sentence Correction', 'Choose the correct sentence:', 'The reason for his failure is because he was lazy.', 'The reason for his failure is that he was lazy.', 'The reason for his failure is since he was lazy.', 'The reason for his failure is due to he was lazy.', 'B', 'Hard', '"The reason...is that" is correct. "The reason...is because" is redundant.'),

('Sentence Correction', 'Choose the correct sentence:', 'Scarcely had he finished speaking than the bell rang.', 'Scarcely had he finished speaking when the bell rang.', 'Scarcely he had finished speaking when the bell rang.', 'Scarcely has he finished speaking when the bell rang.', 'B', 'Advanced', '"Scarcely...when" is correct (not "than"). Uses past perfect "had finished" with inversion.'),

('Sentence Correction', 'Choose the correct sentence:', 'Not only he is intelligent but also hardworking.', 'Not only is he intelligent but also hardworking.', 'Not only he is intelligent but he is also hardworking.', 'He not only is intelligent but also hardworking.', 'B', 'Advanced', '"Not only" at the beginning requires inversion: "Not only is he..." and parallel structure.'),

('Sentence Correction', 'Choose the correct sentence:', 'Each of the boys were given a prize.', 'Each of the boys was given a prize.', 'Each of the boy was given a prize.', 'Each of boys were given a prize.', 'B', 'Advanced', '"Each" is singular, requiring "was". "Of the boys" uses plural noun after "of the".'),

('Sentence Correction', 'Choose the correct sentence:', 'Had I been knowing the answer, I would have told you.', 'Had I known the answer, I would have told you.', 'If I had been known the answer, I would have told you.', 'If I would have known the answer, I would have told you.', 'B', 'Advanced', 'Past unreal conditional: "Had I known" (not "been knowing" — "know" is a stative verb). No "would" in the if-clause.'),

('Sentence Correction', 'Choose the correct sentence:', 'He along with his friends are going.', 'He along with his friends is going.', 'He along with his friends were going.', 'He along his friends is going.', 'B', 'Advanced', '"Along with" does not change the subject number. "He" is singular, so "is" is correct.'),

('Sentence Correction', 'Choose the correct sentence:', 'Unless you will not study, you will fail.', 'Unless you study, you will fail.', 'Unless you do not study, you will fail.', 'Unless you will study, you will not fail.', 'B', 'Interview', '"Unless" means "if not" — adding "not" creates double negation. "Unless you study" = "If you do not study".'),

('Sentence Correction', 'Choose the correct sentence:', 'He asked me that where did I live.', 'He asked me where I lived.', 'He asked me that where I lived.', 'He asked me where did I live.', 'B', 'Interview', 'Indirect questions: no "that" with "where", no inversion (statement order), past tense "lived".'),

('Sentence Correction', 'Choose the correct sentence:', 'Lest he should not miss the bus, he left early.', 'Lest he should miss the bus, he left early.', 'Lest he may miss the bus, he left early.', 'Lest he might not miss the bus, he left early.', 'B', 'Interview', '"Lest" already implies negation ("for fear that"). "Should" is used with "lest", and no "not" is needed.'),

('Sentence Correction', 'Choose the correct sentence:', 'It is time he goes home.', 'It is time he went home.', 'It is time he has gone home.', 'It is time he will go home.', 'B', 'Interview', '"It is time" is followed by the past subjunctive: "It is time he went home" (not present or future).'),

('Sentence Correction', 'Choose the correct sentence:', 'I wish I was a bird.', 'I wish I were a bird.', 'I wish I am a bird.', 'I wish I will be a bird.', 'B', 'Interview', 'After "wish" for unreal conditions, use the subjunctive "were" for all persons: "I wish I were a bird."');


-- =========================================================
-- TOPIC 9: SENTENCE IMPROVEMENT
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Sentence Improvement', 'Improve the underlined part: "He RETURNED BACK to his house."', 'came back', 'returned', 'returned again', 'No improvement', 'B', 'Easy', '"Returned back" is redundant — "returned" already means "went back". Simply "returned" is correct.'),

('Sentence Improvement', 'Improve the underlined part: "She IS BEEN WORKING here for five years."', 'has been working', 'was been working', 'is working', 'No improvement', 'A', 'Easy', '"Has been working" is the correct present perfect continuous form for an action continuing from the past.'),

('Sentence Improvement', 'Improve the underlined part: "He TOLD TO ME that he was busy."', 'told me', 'said to me', 'told for me', 'No improvement', 'A', 'Easy', '"Told" takes a direct object without "to": "He told me." Or use "said to me."'),

('Sentence Improvement', 'Improve the underlined part: "I HAVE VISITED Paris LAST YEAR."', 'visited Paris last year', 'have visited Paris last year ago', 'had visited Paris last year', 'No improvement', 'A', 'Easy', '"Last year" is a specific past time — use simple past "visited", not present perfect "have visited".'),

('Sentence Improvement', 'Improve the underlined part: "She is ELDER THAN me by two years."', 'older than', 'more elder than', 'eldest than', 'No improvement', 'A', 'Easy', '"Elder" is used for family relationships without "than". For general comparisons, use "older than".'),

('Sentence Improvement', 'Improve the underlined part: "He REPENTED FOR what he had done."', 'repented of', 'repented about', 'repented on', 'No improvement', 'A', 'Medium', 'The correct preposition with "repent" is "of": "repented of what he had done."'),

('Sentence Improvement', 'Improve the underlined part: "The sceneries OF KASHMIR are very beautiful."', 'The scenery of Kashmir is', 'The sceneries of Kashmir is', 'The scenery of Kashmir are', 'No improvement', 'A', 'Medium', '"Scenery" is uncountable — no plural form. Use "The scenery of Kashmir is very beautiful."'),

('Sentence Improvement', 'Improve the underlined part: "He gave me AN ADVICE."', 'a piece of advice', 'many advices', 'an advise', 'No improvement', 'A', 'Medium', '"Advice" is uncountable. Use "a piece of advice" for a single instance.'),

('Sentence Improvement', 'Improve the underlined part: "I am looking forward TO MEET you."', 'to meeting', 'for meeting', 'to have met', 'No improvement', 'A', 'Medium', '"Look forward to" uses a gerund because "to" here is a preposition: "looking forward to meeting you."'),

('Sentence Improvement', 'Improve the underlined part: "The PRINCIPLE of the school addressed the students."', 'principal', 'principle man', 'princple', 'No improvement', 'A', 'Medium', '"Principal" (head of school) vs "principle" (fundamental truth). The correct word here is "principal".'),

('Sentence Improvement', 'Improve the underlined part: "He PREVENTED ME TO GO there."', 'prevented me from going', 'prevented me for going', 'prevented me of going', 'No improvement', 'A', 'Hard', '"Prevent" takes "from + gerund": "prevented me from going."'),

('Sentence Improvement', 'Improve the underlined part: "She AVAILED THE OPPORTUNITY to study abroad."', 'availed herself of the opportunity', 'availed of the opportunity', 'availed with the opportunity', 'No improvement', 'A', 'Hard', '"Avail" is reflexive: "availed herself of the opportunity." You avail yourself of something.'),

('Sentence Improvement', 'Improve the underlined part: "He COULD NOT HARDLY believe what happened."', 'could hardly', 'could not hard', 'cannot hardly', 'No improvement', 'A', 'Hard', '"Could not hardly" is a double negative. "Hardly" already implies negation. Use "could hardly."'),

('Sentence Improvement', 'Improve the underlined part: "THE REASON IS BECAUSE he was ill."', 'The reason is that', 'The reason is since', 'The reason is due to', 'No improvement', 'A', 'Hard', '"The reason is because" is redundant. Use "The reason is that he was ill."'),

('Sentence Improvement', 'Improve the underlined part: "SUPPOSING IF it rains, what will you do?"', 'Supposing', 'If supposing', 'Suppose if', 'No improvement', 'A', 'Hard', '"Supposing if" is redundant — "supposing" already means "if". Just "Supposing it rains" is correct.'),

('Sentence Improvement', 'Improve the underlined part: "I WOULD RATHER TO DIE than beg."', 'would rather die', 'would rather dying', 'would rather to dying', 'No improvement', 'A', 'Advanced', '"Would rather" is followed by the base verb without "to": "would rather die."'),

('Sentence Improvement', 'Improve the underlined part: "He INSISTED TO GO alone."', 'insisted on going', 'insisted for going', 'insisted in going', 'No improvement', 'A', 'Advanced', '"Insist" takes "on + gerund": "insisted on going alone."'),

('Sentence Improvement', 'Improve the underlined part: "She is HABITUAL OF getting up early."', 'in the habit of', 'habitual to', 'habituated of', 'No improvement', 'A', 'Advanced', '"Habitual of" is incorrect. Use "in the habit of" or "accustomed to."'),

('Sentence Improvement', 'Improve the underlined part: "He WAS BLIND WITH one eye."', 'was blind in', 'was blind from', 'was blind by', 'No improvement', 'A', 'Advanced', 'The correct preposition is "blind in one eye", not "blind with."'),

('Sentence Improvement', 'Improve the underlined part: "I could not HELP BUT LAUGH."', 'help laughing', 'help but to laugh', 'help but laughing', 'No improvement', 'A', 'Advanced', '"Cannot help" takes a gerund: "could not help laughing." "Cannot but" takes base verb: "cannot but laugh."'),

('Sentence Improvement', 'Improve the underlined part: "He LEFT NO STONE UPTURN to achieve success."', 'left no stone unturned', 'left no stones upturn', 'left no stone returned', 'No improvement', 'A', 'Interview', 'The correct idiom is "left no stone unturned" (tried every possible method).'),

('Sentence Improvement', 'Improve the underlined part: "The news ARE too good to be true."', 'The news is', 'The news were', 'These news are', 'No improvement', 'A', 'Interview', '"News" is singular (uncountable) and takes "is": "The news is too good to be true."'),

('Sentence Improvement', 'Improve the underlined part: "He IS WORKING here SINCE 2010."', 'has been working here since', 'was working here since', 'had been working here since', 'No improvement', 'A', 'Interview', '"Since" indicates an action continuing from a past point — use present perfect continuous: "has been working here since 2010."'),

('Sentence Improvement', 'Improve the underlined part: "You HAD BETTER TO CONSULT a doctor."', 'had better consult', 'had better consulting', 'have better to consult', 'No improvement', 'A', 'Interview', '"Had better" is followed by the base verb without "to": "had better consult."'),

('Sentence Improvement', 'Improve the underlined part: "He is THE BEST PLAYER THAT HAS EVER PLAYED for the team."', 'the best player who has ever played', 'the best player which has ever played', 'best player that has ever played', 'No improvement', 'A', 'Interview', 'After superlatives referring to people, "who" is preferred over "that": "the best player who has ever played."');


-- =========================================================
-- TOPIC 10: COMPLETING STATEMENTS
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Completing Statements', 'He ran fast _____.', 'so he missed the bus', 'so that he could catch the bus', 'because he caught the bus', 'although he caught the bus', 'B', 'Easy', '"So that" expresses purpose. He ran fast with the purpose of catching the bus.'),

('Completing Statements', 'She studied hard _____.', 'so she failed the exam', 'because she wanted to fail', 'and she passed with flying colors', 'but she did not study', 'C', 'Easy', 'Studying hard logically leads to passing. "And she passed with flying colors" completes the cause-effect.'),

('Completing Statements', 'If it rains tomorrow, _____.', 'we will go to the beach', 'we will cancel the picnic', 'we already went to the park', 'we had gone shopping', 'B', 'Easy', 'Rain logically leads to canceling outdoor activities. This is a first conditional (if + present, will + base).'),

('Completing Statements', 'The doctor advised him to rest _____.', 'because he was perfectly healthy', 'as he had been working too hard', 'so that he could work more', 'although he was not tired', 'B', 'Easy', 'A doctor advises rest because someone has been overworking. "As" introduces the reason.'),

('Completing Statements', 'He is too short _____.', 'to reach the top shelf', 'to be short', 'because he is tall', 'although he can reach', 'A', 'Easy', '"Too...to" construction: "too short to reach the top shelf" — the shortness prevents reaching.'),

('Completing Statements', 'Although he is rich, _____.', 'he lives in a mansion', 'he drives luxury cars', 'he leads a simple life', 'he spends lavishly', 'C', 'Medium', '"Although" introduces contrast. Being rich but living simply creates the expected contradiction.'),

('Completing Statements', 'Not only did he complete the project on time, _____.', 'but he also exceeded expectations', 'and he was late', 'so he failed', 'because he was lazy', 'A', 'Medium', '"Not only...but also" requires a positive addition. Exceeding expectations adds to completing on time.'),

('Completing Statements', 'Unless the government takes strict action, _____.', 'the problem will be solved easily', 'pollution will continue to increase', 'everything will be fine', 'the situation will improve', 'B', 'Medium', '"Unless" means "if not". If the government does NOT take action, pollution will increase.'),

('Completing Statements', 'Had he not been careless, _____.', 'he would have passed the exam', 'he would have failed the exam', 'he might have been more careless', 'he could not have succeeded', 'A', 'Medium', 'Past unreal conditional: If he had NOT been careless, the positive outcome would be passing the exam.'),

('Completing Statements', 'The more you practice, _____.', 'the less you improve', 'the worse you become', 'the better you will perform', 'the more mistakes you make', 'C', 'Medium', '"The more...the more/better" is a correlative comparative. More practice leads to better performance.'),

('Completing Statements', 'Notwithstanding the challenges he faced, _____.', 'he gave up immediately', 'he managed to succeed', 'he never tried at all', 'he refused to participate', 'B', 'Hard', '"Notwithstanding" means "despite". Despite challenges, the positive outcome is succeeding.'),

('Completing Statements', 'So engrossed was he in his work that _____.', 'he noticed everyone around him', 'he did not hear the phone ring', 'he stopped working immediately', 'he was very distracted', 'B', 'Hard', 'Being engrossed means deeply absorbed. He was so absorbed he didn''t hear the phone — showing extreme focus.'),

('Completing Statements', 'In the event of an emergency, _____.', 'ignore all safety protocols', 'remain calm and follow the exit signs', 'panic and run in all directions', 'do nothing and wait', 'B', 'Hard', 'Emergency instructions logically advise remaining calm and following proper procedures.'),

('Completing Statements', 'The fact that he resigned suggests _____.', 'he was extremely happy with his job', 'he was dissatisfied with the working conditions', 'he wanted a promotion', 'he loved the company culture', 'B', 'Hard', 'Resignation logically suggests dissatisfaction with working conditions. The other options contradict the act of resigning.'),

('Completing Statements', 'Much as I appreciate your concern, _____.', 'I must make my own decision', 'I completely agree with you', 'I have no opinion on this matter', 'I cannot think for myself', 'A', 'Hard', '"Much as" concedes appreciation while introducing a contrast — "I must make my own decision."'),

('Completing Statements', 'The hypothesis was rejected because _____.', 'the experimental results supported it perfectly', 'the data consistently contradicted its predictions', 'everyone believed it was true', 'no experiment was conducted', 'B', 'Advanced', 'A hypothesis is rejected when data contradicts its predictions. This is basic scientific methodology.'),

('Completing Statements', 'Inasmuch as the evidence was circumstantial, _____.', 'the jury convicted him immediately', 'the judge could not deliver a definitive verdict', 'the case was considered closed', 'the prosecution rested its case successfully', 'B', 'Advanced', '"Inasmuch as" means "to the extent that". Circumstantial evidence is insufficient for a definitive verdict.'),

('Completing Statements', 'Were the committee to approve the proposal, _____.', 'the project has already been completed', 'it would mark a significant shift in policy', 'nothing would change at all', 'the proposal would be rejected', 'B', 'Advanced', 'Subjunctive "Were...to" indicates a hypothetical situation. Approval would mark a significant policy shift.'),

('Completing Statements', 'In light of recent developments, _____.', 'the company decided to maintain the status quo', 'the organization has revised its strategic plan', 'nothing new has happened', 'the developments were ignored', 'B', 'Advanced', '"In light of" means "considering". New developments logically lead to revising plans.'),

('Completing Statements', 'Compelling as his argument may be, _____.', 'everyone agrees with him completely', 'it fails to address the fundamental issues', 'his argument has no flaws', 'it is the best argument ever made', 'B', 'Advanced', '"Compelling as...may be" concedes strength while introducing a weakness — failing to address fundamental issues.'),

('Completing Statements', 'The paradox of modern technology is that _____.', 'it has made everything simpler', 'while it connects us globally, it often isolates us personally', 'everyone benefits equally from it', 'it has no negative consequences', 'B', 'Interview', 'A paradox is a seemingly contradictory statement. Connecting globally while isolating personally is paradoxical.'),

('Completing Statements', 'The unprecedented nature of the crisis necessitated _____.', 'business as usual', 'extraordinary measures that defied conventional wisdom', 'ignoring the problem entirely', 'applying the same old solutions', 'B', 'Interview', '"Unprecedented" and "necessitated" require an equally strong response — extraordinary measures.'),

('Completing Statements', 'For all his professed expertise in the field, _____.', 'he demonstrated remarkable competence', 'his practical knowledge proved woefully inadequate', 'everyone respected his abilities', 'he was the most qualified candidate', 'B', 'Interview', '"For all" introduces contrast. Despite professing expertise, his practical knowledge was inadequate.'),

('Completing Statements', 'The ramifications of this decision are such that _____.', 'they are completely insignificant', 'they will fundamentally alter the course of the organization', 'no one will notice any difference', 'the decision has no importance', 'B', 'Interview', '"Ramifications...are such that" introduces significant consequences — fundamentally altering the organization.'),

('Completing Statements', 'It would be presumptuous to assume that _____.', 'careful research has been done', 'a single solution can address all the complexities of this issue', 'the problem is well understood', 'experts have been consulted', 'B', 'Interview', '"Presumptuous" means overstepping bounds. Assuming one solution fits all complexities is an overreach.');


-- =========================================================
-- TOPIC 11: ORDERING OF SENTENCES
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Ordering of Sentences', 'P: He is a doctor. Q: He lives in Mumbai. R: His name is Raj. S: He works at a hospital. Choose the correct order:', 'RQPS', 'RPQS', 'RPSQ', 'RQSP', 'A', 'Easy', 'Introduce name (R) → location (Q) → profession (P) → workplace (S). RQPS: "His name is Raj. He lives in Mumbai. He is a doctor. He works at a hospital."'),

('Ordering of Sentences', 'P: She loves reading books. Q: Her favorite subject is English. R: Priya is a bright student. S: She wants to become a teacher. Choose the correct order:', 'RQPS', 'RPQS', 'RPSQ', 'QRPS', 'A', 'Easy', 'Introduce person (R) → subject (Q) → hobby (P) → aspiration (S). RQPS flows naturally.'),

('Ordering of Sentences', 'P: Then he had breakfast. Q: He brushed his teeth. R: He woke up at 6 AM. S: Finally, he left for school. Choose the correct order:', 'RQPS', 'RPQS', 'QRPS', 'RPSQ', 'A', 'Easy', 'Chronological order: Woke up (R) → brushed teeth (Q) → breakfast (P) → left for school (S).'),

('Ordering of Sentences', 'P: The dog started barking loudly. Q: A stranger came to the door. R: The family was having dinner. S: Everyone rushed to see what happened. Choose the correct order:', 'RQPS', 'RPQS', 'QRPS', 'RPSQ', 'A', 'Easy', 'Setting (R: dinner) → event (Q: stranger) → reaction (P: barking) → response (S: rushed).'),

('Ordering of Sentences', 'P: It was very hot. Q: He decided to drink some water. R: He was walking in the sun. S: He felt very thirsty. Choose the correct order:', 'PRsq', 'RPQS', 'RPSQ', 'PRSQ', 'C', 'Easy', 'Sequence: Walking (R) → hot (P) → thirsty (S) → drank water (Q). RPSQ is logical.'),

('Ordering of Sentences', 'P: They decided to help the villagers. Q: The flood destroyed many houses. R: A team of volunteers arrived. S: The villagers were left homeless. Choose the correct order:', 'QSRP', 'RQSP', 'QRSP', 'SQRP', 'A', 'Medium', 'Cause (Q: flood) → effect (S: homeless) → help arrives (R: volunteers) → action (P: help). QSRP.'),

('Ordering of Sentences', 'P: However, he did not give up. Q: He failed multiple times. R: Thomas Edison was a great inventor. S: He finally succeeded in inventing the light bulb. Choose the correct order:', 'RQPS', 'RPQS', 'QRPS', 'RPSQ', 'A', 'Medium', 'Introduction (R) → struggle (Q) → perseverance (P: "However") → success (S: "finally").'),

('Ordering of Sentences', 'P: Consequently, global temperatures are rising. Q: This is leading to climate change. R: Human activities are increasing greenhouse gases. S: Ice caps are melting rapidly. Choose the correct order:', 'RPQS', 'RQPS', 'RPQS', 'RPSQ', 'A', 'Medium', 'Cause (R: activities) → result (P: "Consequently" temperatures rising) → effect (Q: climate change) → evidence (S: ice melting).'),

('Ordering of Sentences', 'P: It promotes physical fitness. Q: Sports play a vital role in our lives. R: It also teaches teamwork and discipline. S: Therefore, sports should be encouraged in schools. Choose the correct order:', 'QPRS', 'PQRS', 'QRPS', 'RQPS', 'A', 'Medium', 'General statement (Q) → benefit 1 (P) → benefit 2 (R: "also") → conclusion (S: "Therefore").'),

('Ordering of Sentences', 'P: Her performance was outstanding. Q: She was selected for the lead role. R: Auditions were held last week. S: She had practiced for months. Choose the correct order:', 'RSQP', 'RSPQ', 'SRPQ', 'SRQP', 'B', 'Medium', 'Event (R: auditions) → preparation (S: practiced) → result (P: outstanding) → outcome (Q: selected). RSPQ.'),

('Ordering of Sentences', 'P: These emissions trap heat in the atmosphere. Q: Burning fossil fuels releases carbon dioxide. R: This phenomenon is known as the greenhouse effect. S: As a result, the earth''s temperature increases. Choose the correct order:', 'QPSR', 'QPRS', 'PQSR', 'QSPR', 'A', 'Hard', 'Process chain: Burning fuels (Q) → emissions trap heat (P) → temperature rises (S: "As a result") → named (R: "This phenomenon").'),

('Ordering of Sentences', 'P: Nevertheless, he continued his research. Q: His early experiments were failures. R: Dr. Salk dedicated his life to finding a polio vaccine. S: His persistence eventually led to a breakthrough. Choose the correct order:', 'RQPS', 'RPQS', 'QRPS', 'RPSQ', 'A', 'Hard', 'Introduction (R) → setback (Q) → perseverance (P: "Nevertheless") → success (S: "eventually").'),

('Ordering of Sentences', 'P: Moreover, it provides a sense of accomplishment. Q: Reading expands our knowledge. R: It should therefore be made a daily habit. S: It also improves vocabulary and communication skills. Choose the correct order:', 'QSPR', 'QPSR', 'QSRP', 'QRSP', 'A', 'Hard', 'Main point (Q) → addition (S: "also") → addition (P: "Moreover") → conclusion (R: "therefore").'),

('Ordering of Sentences', 'P: Meanwhile, urban areas are expanding rapidly. Q: This is resulting in loss of biodiversity. R: Deforestation continues at an alarming rate. S: Forests are being cleared for agriculture and industry. Choose the correct order:', 'RSPQ', 'RSQP', 'RPSQ', 'RPQS', 'A', 'Hard', 'Problem (R) → elaboration (S) → parallel issue (P: "Meanwhile") → consequence (Q: "This is resulting").'),

('Ordering of Sentences', 'P: Consequently, many species are now endangered. Q: Human activities have disrupted natural habitats. R: Conservation efforts are crucial to reversing this trend. S: Pollution and deforestation are the main causes. Choose the correct order:', 'QSPR', 'QPSR', 'SQPR', 'QSRP', 'A', 'Hard', 'General cause (Q) → specific causes (S) → consequence (P: "Consequently") → solution (R: "reversing this trend").'),

('Ordering of Sentences', 'P: Notwithstanding these challenges, India has made remarkable progress. Q: The country continues to face issues of poverty and inequality. R: India''s economy has grown significantly since liberalization. S: It is now one of the fastest-growing economies in the world. Choose the correct order:', 'RQPS', 'RPQS', 'RPSQ', 'QRPS', 'A', 'Advanced', 'Growth (R) → challenges (Q) → despite that, progress (P: "Notwithstanding") → current status (S: "now").'),

('Ordering of Sentences', 'P: This has led to a paradigm shift in how we communicate. Q: The proliferation of smartphones has transformed society. R: Social media platforms have further accelerated this change. S: Today, information travels across the globe in seconds. Choose the correct order:', 'QPRS', 'QRPS', 'QPSR', 'QSRP', 'A', 'Advanced', 'Cause (Q: smartphones) → effect (P: paradigm shift) → amplification (R: "further") → current state (S: "Today").'),

('Ordering of Sentences', 'P: Its impact on daily life cannot be overstated. Q: Artificial intelligence is revolutionizing every industry. R: However, ethical concerns about AI must be addressed. S: From healthcare to finance, AI is transforming operations. Choose the correct order:', 'QSPR', 'QPSR', 'QSRP', 'QPRS', 'A', 'Advanced', 'General statement (Q) → examples (S) → impact (P) → counterpoint (R: "However").'),

('Ordering of Sentences', 'P: Furthermore, it fosters innovation and entrepreneurship. Q: Education is the cornerstone of societal development. R: An educated populace drives economic growth. S: Therefore, investing in education should be a national priority. Choose the correct order:', 'QRPS', 'QPRS', 'QRSP', 'QPSR', 'A', 'Advanced', 'Thesis (Q) → benefit (R) → addition (P: "Furthermore") → conclusion (S: "Therefore").'),

('Ordering of Sentences', 'P: The implications of this discovery are far-reaching. Q: Scientists have identified a new species in the deep ocean. R: It challenges our understanding of life in extreme environments. S: This finding could lead to breakthroughs in biotechnology. Choose the correct order:', 'QPRS', 'QRPS', 'QPSR', 'QSRP', 'A', 'Advanced', 'Discovery (Q) → implications (P) → significance (R) → applications (S).'),

('Ordering of Sentences', 'P: Its ramifications for international trade are immense. Q: Globalization has interconnected economies worldwide. R: Developing nations, in particular, face both opportunities and threats. S: The key lies in adopting policies that balance growth with equity. Choose the correct order:', 'QPRS', 'QRPS', 'QPSR', 'QSRP', 'A', 'Interview', 'Overview (Q) → impact (P) → specifics (R) → solution (S).'),

('Ordering of Sentences', 'P: The epistemological foundations of this theory have been questioned. Q: A new philosophical framework has been proposed. R: It seeks to reconcile empiricism with rationalism. S: Critics argue that it oversimplifies complex cognitive processes. Choose the correct order:', 'QRPS', 'QPRS', 'QRSP', 'QPSR', 'A', 'Interview', 'Introduction (Q) → purpose (R) → criticism (P) → critics'' argument (S).'),

('Ordering of Sentences', 'P: The socioeconomic disparities exposed by the pandemic are staggering. Q: The pandemic has fundamentally altered the global landscape. R: Healthcare systems worldwide were pushed to their limits. S: Recovery will require unprecedented levels of international cooperation. Choose the correct order:', 'QRPS', 'QPRS', 'QRSP', 'QPSR', 'A', 'Interview', 'Overview (Q) → impact (R) → disparities (P) → solution (S: Recovery).'),

('Ordering of Sentences', 'P: The intersection of technology and ethics presents unprecedented challenges. Q: As artificial intelligence becomes more sophisticated, accountability becomes murkier. R: Legislators struggle to keep pace with technological advancements. S: A multidisciplinary approach is essential to navigating this complex terrain. Choose the correct order:', 'PQRS', 'PRQS', 'PQSR', 'PRQR', 'A', 'Interview', 'Theme (P) → example (Q) → problem (R) → solution (S).'),

('Ordering of Sentences', 'P: The dialectical relationship between individual liberty and collective responsibility. Q: has been a central theme in political philosophy. R: Thinkers from Locke to Rawls have grappled with this tension. S: The debate remains as relevant today as it was centuries ago. Choose the correct order:', 'PQRS', 'PRQS', 'PQSR', 'RPQS', 'A', 'Interview', 'P+Q form one sentence (subject + verb). Then historical context (R) → present relevance (S).');


-- =========================================================
-- TOPIC 12: PARAGRAPH FORMATION
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Paragraph Formation', 'P: Water is essential for all life forms. Q: We must conserve water for future generations. R: Many regions face water scarcity. S: Pollution is making the problem worse. Best order:', 'PRsq', 'PRSQ', 'RSPQ', 'QPRS', 'B', 'Easy', 'General fact (P) → problem (R) → worsening (S) → solution/call to action (Q).'),

('Paragraph Formation', 'P: They provide us with oxygen. Q: Trees are very important for the environment. R: We should plant more trees. S: They also prevent soil erosion. Best order:', 'QPSR', 'PQSR', 'QSPR', 'RQPS', 'A', 'Easy', 'Introduction (Q) → benefit 1 (P) → benefit 2 (S: "also") → conclusion (R).'),

('Paragraph Formation', 'P: She became a famous scientist. Q: She worked hard throughout her life. R: Marie Curie was born in Poland. S: She won two Nobel Prizes. Best order:', 'RQPS', 'RPQS', 'RPSQ', 'RQSP', 'A', 'Easy', 'Birth (R) → effort (Q) → achievement (P) → greatest honor (S).'),

('Paragraph Formation', 'P: It helps us stay healthy. Q: Exercise is important for everyone. R: Even 30 minutes of walking daily is beneficial. S: It also improves mental health. Best order:', 'QPSR', 'PQRS', 'QSPR', 'QRPS', 'A', 'Easy', 'General statement (Q) → physical benefit (P) → mental benefit (S: "also") → practical tip (R).'),

('Paragraph Formation', 'P: Many people visit it every year. Q: The Taj Mahal is one of the Seven Wonders. R: It was built by Emperor Shah Jahan. S: It is located in Agra, India. Best order:', 'QSRP', 'QRSP', 'QPRS', 'QSPR', 'A', 'Easy', 'Introduction (Q) → location (S) → history (R) → tourism (P).'),

('Paragraph Formation', 'P: This has raised concerns about screen addiction. Q: Children today spend more time on gadgets than outdoors. R: Parents should encourage outdoor activities. S: Studies show excessive screen time affects development. Best order:', 'QPSR', 'QSPR', 'QPRS', 'QRPS', 'A', 'Medium', 'Problem (Q) → concern (P) → evidence (S) → solution (R).'),

('Paragraph Formation', 'P: However, it also has negative effects. Q: Social media has transformed communication. R: Cyberbullying and misinformation are growing concerns. S: Users must practice responsible online behavior. Best order:', 'QPRS', 'QRPS', 'PQRS', 'QPSR', 'A', 'Medium', 'Positive intro (Q) → contrast (P: "However") → specifics (R) → solution (S).'),

('Paragraph Formation', 'P: Regular reading improves vocabulary significantly. Q: Books are windows to the world. R: They expose us to different cultures and ideas. S: Making reading a daily habit is highly recommended. Best order:', 'QRPS', 'QPRS', 'RPQS', 'QRSP', 'A', 'Medium', 'Metaphor intro (Q) → elaboration (R) → specific benefit (P) → recommendation (S).'),

('Paragraph Formation', 'P: India is a land of diverse cultures. Q: This diversity is celebrated through various festivals. R: Each state has its own traditions and customs. S: Unity in diversity is India''s greatest strength. Best order:', 'PRQS', 'PQRS', 'PRQS', 'PRSQ', 'A', 'Medium', 'Introduction (P) → details (R) → celebration (Q) → conclusion (S).'),

('Paragraph Formation', 'P: Online learning offers flexibility to students. Q: Education has undergone a digital transformation. R: However, it cannot fully replace classroom interaction. S: A blended approach may be the best solution. Best order:', 'QPRS', 'QRPS', 'PQRS', 'QPSR', 'A', 'Medium', 'Overview (Q) → advantage (P) → limitation (R: "However") → balanced conclusion (S).'),

('Paragraph Formation', 'P: This phenomenon is accelerating at an alarming rate. Q: Global warming is the most pressing environmental challenge. R: Rising sea levels threaten coastal communities worldwide. S: Immediate collective action is imperative to mitigate its effects. Best order:', 'QPRS', 'QRPS', 'QPSR', 'QSPR', 'A', 'Hard', 'Statement (Q) → acceleration (P) → specific consequence (R) → call to action (S).'),

('Paragraph Formation', 'P: Renewable energy sources offer a sustainable alternative. Q: Fossil fuels have powered industrial growth for centuries. R: However, their environmental impact is devastating. S: Transitioning to clean energy is both an economic and ecological imperative. Best order:', 'QRPS', 'QPRS', 'RQPS', 'QRSP', 'A', 'Hard', 'Historical context (Q) → problem (R: "However") → solution (P) → conclusion (S: "imperative").'),

('Paragraph Formation', 'P: It has reduced mortality rates significantly. Q: Modern medicine has made remarkable advances. R: However, access to healthcare remains unequal. S: Bridging this gap should be a global priority. Best order:', 'QPRS', 'QRPS', 'PQRS', 'QPSR', 'A', 'Hard', 'Achievement (Q) → evidence (P) → limitation (R: "However") → solution (S: "priority").'),

('Paragraph Formation', 'P: Automation is reshaping the job market fundamentally. Q: Many routine jobs are being replaced by machines. R: However, new roles requiring creativity and critical thinking are emerging. S: Reskilling the workforce is essential for navigating this transition. Best order:', 'PQRS', 'QPRS', 'PRQS', 'PQSR', 'A', 'Hard', 'Overview (P) → specifics (Q) → counterbalance (R: "However") → solution (S: "essential").'),

('Paragraph Formation', 'P: The digital divide exacerbates existing inequalities. Q: Access to technology has become a fundamental need. R: Rural communities are disproportionately affected. S: Governments must invest in digital infrastructure to bridge this gap. Best order:', 'QPRS', 'QRPS', 'PQRS', 'QPSR', 'A', 'Hard', 'Need (Q) → problem (P) → affected group (R) → solution (S: "must invest").'),

('Paragraph Formation', 'P: Its applications span healthcare, finance, and transportation. Q: Artificial intelligence represents a paradigm shift in computing. R: Ethical frameworks must evolve alongside technological capabilities. S: However, concerns about bias and privacy persist. Best order:', 'QPSR', 'QPRS', 'QSPR', 'QSRP', 'A', 'Advanced', 'Introduction (Q) → applications (P) → concerns (S: "However") → solution (R: "must evolve").'),

('Paragraph Formation', 'P: Biodiversity loss threatens ecosystem stability worldwide. Q: Habitat destruction is the primary driver of species extinction. R: Conservation programs have shown promising results in some regions. S: A coordinated global effort is needed to reverse this trend. Best order:', 'PQRS', 'QPRS', 'PQSR', 'QPSR', 'A', 'Advanced', 'Problem (P) → cause (Q) → progress (R) → call for action (S: "needed to reverse").'),

('Paragraph Formation', 'P: The democratization of information has empowered citizens globally. Q: The internet has fundamentally altered the information landscape. R: However, the proliferation of misinformation poses serious threats. S: Media literacy education is crucial in this new digital age. Best order:', 'QPRS', 'QRPS', 'PQRS', 'QPSR', 'A', 'Advanced', 'Overview (Q) → positive impact (P) → problem (R: "However") → solution (S: "crucial").'),

('Paragraph Formation', 'P: Mental health awareness has increased significantly in recent years. Q: Stigma surrounding mental illness has long prevented people from seeking help. R: However, the gap between awareness and accessible treatment remains wide. S: Integrating mental health services into primary care could help bridge this divide. Best order:', 'QPRS', 'PQRS', 'QPSR', 'PQSR', 'A', 'Advanced', 'Historical problem (Q) → improvement (P) → remaining gap (R: "However") → solution (S: "could help").'),

('Paragraph Formation', 'P: Space exploration has yielded invaluable scientific knowledge. Q: The quest to explore the cosmos has captivated humanity for centuries. R: Current missions to Mars represent the next frontier. S: The benefits of space research extend far beyond the scientific community. Best order:', 'QPSR', 'QPRS', 'QRPS', 'QSPR', 'A', 'Advanced', 'Historical hook (Q) → achievements (P) → broader impact (S) → future (R: "next frontier").'),

('Paragraph Formation', 'P: Urbanization creates both opportunities and challenges for sustainable development. Q: By 2050, nearly 70 percent of the world population will live in cities. R: Smart city initiatives leverage technology to address urban challenges. S: However, equitable development remains elusive in many rapidly growing metropolises. Best order:', 'PQSR', 'QPSR', 'PQRS', 'QPRS', 'B', 'Interview', 'Statistic (Q) → theme (P) → but inequality (S: "However") → solution (R).'),

('Paragraph Formation', 'P: The interplay between technological innovation and regulatory frameworks is complex. Q: Regulators often struggle to keep pace with rapid technological change. R: This lag can create vulnerabilities in consumer protection and market stability. S: Adaptive governance models that anticipate change are essential. Best order:', 'PQRS', 'QPRS', 'PRQS', 'PQSR', 'A', 'Interview', 'Theme (P) → problem (Q) → consequence (R) → solution (S: "essential").'),

('Paragraph Formation', 'P: Economic inequality has widened in most developed nations. Q: The concentration of wealth among a small percentage of the population raises fundamental questions. R: Progressive taxation and social safety nets are among the proposed remedies. S: The debate over redistribution versus incentive-driven growth continues to shape policy. Best order:', 'PQRS', 'QPRS', 'PQSR', 'QPSR', 'A', 'Interview', 'Trend (P) → deeper issue (Q) → proposed solutions (R) → ongoing debate (S).'),

('Paragraph Formation', 'P: The resurgence of nationalism in an interconnected world presents a paradox. Q: While globalization has fostered economic interdependence, political fragmentation persists. R: This tension between integration and sovereignty defines contemporary geopolitics. S: Finding a balance between national interests and global cooperation is the central challenge. Best order:', 'PQRS', 'QPRS', 'PRQS', 'PQSR', 'A', 'Interview', 'Paradox introduced (P) → elaboration (Q) → definition of tension (R) → central challenge (S).'),

('Paragraph Formation', 'P: The synthesis of traditional knowledge systems and modern science offers untapped potential. Q: Indigenous communities possess centuries of ecological wisdom. R: Integrating these perspectives can enrich scientific research and conservation efforts. S: However, this integration must be conducted ethically, respecting intellectual property and cultural sovereignty. Best order:', 'QPRS', 'PQRS', 'QRPS', 'QPSR', 'A', 'Interview', 'Foundation (Q) → potential (P) → benefit (R) → ethical caveat (S: "However...must be conducted ethically").');


-- =========================================================
-- TOPIC 13: CLOZE TEST
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Cloze Test', 'Education is the most powerful _____ that can change the world.', 'weapon', 'weakness', 'problem', 'disease', 'A', 'Easy', 'Nelson Mandela famously said "Education is the most powerful weapon which you can use to change the world." "Weapon" fits as a tool of change.'),

('Cloze Test', 'Hard work is the _____ to success.', 'lock', 'key', 'door', 'wall', 'B', 'Easy', '"Key to success" is a common expression meaning the essential element needed to achieve success.'),

('Cloze Test', 'She has a _____ command over the English language.', 'weak', 'poor', 'good', 'bad', 'C', 'Easy', '"Good command" means strong ability. Having a "good command over a language" means speaking it well.'),

('Cloze Test', 'The students were _____ to participate in the competition.', 'reluctant', 'eager', 'unwilling', 'afraid', 'B', 'Easy', '"Eager to participate" suggests enthusiasm and willingness. The positive context of a competition suggests eagerness.'),

('Cloze Test', 'Pollution has become a _____ problem in many cities.', 'minor', 'trivial', 'serious', 'small', 'C', 'Easy', '"Serious problem" indicates significant concern. Pollution in many cities is indeed a serious issue.'),

('Cloze Test', 'The government has taken _____ steps to improve public transportation.', 'backward', 'significant', 'negligible', 'minor', 'B', 'Medium', '"Significant steps" means meaningful actions. The context of improving transportation suggests positive, notable measures.'),

('Cloze Test', 'The scientist made a _____ that could revolutionize medicine.', 'mistake', 'discovery', 'blunder', 'confusion', 'B', 'Medium', 'Something that "revolutionizes medicine" must be a positive finding. "Discovery" fits as a breakthrough finding.'),

('Cloze Test', 'Despite facing numerous _____, she never lost hope.', 'victories', 'challenges', 'successes', 'celebrations', 'B', 'Medium', '"Despite" signals contrast. Facing "challenges" but "never lost hope" creates a meaningful contrast.'),

('Cloze Test', 'The book provides a _____ analysis of the economic crisis.', 'superficial', 'comprehensive', 'brief', 'incomplete', 'B', 'Medium', '"Comprehensive analysis" means thorough and complete. A book on an important topic would provide in-depth analysis.'),

('Cloze Test', 'His _____ attitude towards work earned him a promotion.', 'casual', 'dedicated', 'careless', 'indifferent', 'B', 'Medium', 'A "dedicated attitude" (showing commitment) logically leads to earning a promotion.'),

('Cloze Test', 'The _____ between the two countries has improved significantly after the treaty.', 'hostility', 'relationship', 'conflict', 'tension', 'B', 'Hard', 'After a treaty (agreement), "relationship" is the neutral term that can "improve". The others suggest negativity.'),

('Cloze Test', 'The new policy aims to _____ the gap between the rich and the poor.', 'widen', 'bridge', 'increase', 'maintain', 'B', 'Hard', '"Bridge the gap" is an idiom meaning to reduce differences. The policy aims to reduce inequality.'),

('Cloze Test', 'His failure to _____ with the regulations resulted in a heavy fine.', 'comply', 'compete', 'compare', 'compose', 'A', 'Hard', '"Comply with regulations" means to follow rules. Failure to comply results in penalties.'),

('Cloze Test', 'The _____ nature of the problem requires a multi-faceted approach.', 'simple', 'complex', 'trivial', 'basic', 'B', 'Hard', 'A problem requiring a "multi-faceted approach" must be "complex" — having many interconnected parts.'),

('Cloze Test', 'The organization is committed to _____ sustainable development.', 'hindering', 'promoting', 'preventing', 'obstructing', 'B', 'Hard', '"Committed to promoting" means dedicated to advancing. An organization supports sustainable development.'),

('Cloze Test', 'The _____ of technological advancement on society cannot be underestimated.', 'irrelevance', 'impact', 'absence', 'failure', 'B', 'Advanced', '"Impact...cannot be underestimated" means the effect is significant. Technology''s impact on society is profound.'),

('Cloze Test', 'The diplomat''s _____ handling of the negotiations averted a potential crisis.', 'clumsy', 'adroit', 'incompetent', 'careless', 'B', 'Advanced', '"Adroit" means clever and skillful. Skillful handling would avert (prevent) a crisis.'),

('Cloze Test', 'The research _____ compelling evidence that early intervention is effective.', 'contradicts', 'yields', 'dismisses', 'ignores', 'B', 'Advanced', '"Yields compelling evidence" means produces strong proof. Research yields (produces) findings.'),

('Cloze Test', 'The unprecedented crisis _____ immediate and decisive action from the government.', 'prohibited', 'warranted', 'prevented', 'discouraged', 'B', 'Advanced', '"Warranted" means justified or required. An unprecedented crisis warranted (required) immediate action.'),

('Cloze Test', 'The company''s decision to _____ its environmental policies was widely praised.', 'weaken', 'strengthen', 'abolish', 'ignore', 'B', 'Advanced', '"Strengthen" environmental policies would receive praise, as it shows commitment to the environment.'),

('Cloze Test', 'The _____ of evidence against the defendant left little room for doubt.', 'absence', 'preponderance', 'lack', 'scarcity', 'B', 'Interview', '"Preponderance of evidence" is a legal term meaning the greater weight of evidence, leaving little doubt.'),

('Cloze Test', 'The philosopher''s arguments, though _____, failed to persuade the skeptics.', 'weak', 'cogent', 'flawed', 'irrelevant', 'B', 'Interview', '"Cogent" means clear and convincing. "Though cogent" creates contrast — despite strong arguments, skeptics remained unconvinced.'),

('Cloze Test', 'The institution''s _____ to ethical standards has earned it international recognition.', 'indifference', 'adherence', 'opposition', 'resistance', 'B', 'Interview', '"Adherence to standards" means following them closely. This commitment earned recognition.'),

('Cloze Test', 'The economic _____ caused by the pandemic necessitated unprecedented fiscal measures.', 'boom', 'downturn', 'growth', 'prosperity', 'B', 'Interview', 'A pandemic causes economic "downturn" (decline), which necessitates (requires) special fiscal measures.'),

('Cloze Test', 'The report''s findings _____ the long-held assumption that economic growth always reduces poverty.', 'corroborate', 'debunk', 'support', 'validate', 'B', 'Interview', '"Debunk" means to expose as false. The findings challenge (debunk) the assumption, showing it is not always true.');


-- =========================================================
-- TOPIC 14: COMPREHENSION
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Comprehension', 'Passage: "The sun is a star at the center of our solar system. It provides light and heat to Earth." What does the sun provide to Earth?', 'Water and food', 'Light and heat', 'Wind and rain', 'Gravity and magnetism', 'B', 'Easy', 'The passage directly states: "It provides light and heat to Earth."'),

('Comprehension', 'Passage: "Bees play a crucial role in pollination. Without bees, many plants would not be able to reproduce." What is the crucial role of bees?', 'Making honey', 'Pollination', 'Building hives', 'Producing wax', 'B', 'Easy', 'The passage states bees play a crucial role in "pollination."'),

('Comprehension', 'Passage: "Water covers about 71% of the Earth''s surface. Most of this water is found in oceans." Where is most of Earth''s water found?', 'Rivers', 'Lakes', 'Underground', 'Oceans', 'D', 'Easy', 'The passage states: "Most of this water is found in oceans."'),

('Comprehension', 'Passage: "Exercise helps improve both physical and mental health. Regular physical activity reduces the risk of heart disease." What does regular physical activity reduce?', 'Body weight only', 'Risk of heart disease', 'Mental stress only', 'Appetite', 'B', 'Easy', 'The passage directly states that regular physical activity "reduces the risk of heart disease."'),

('Comprehension', 'Passage: "The Great Wall of China was built over many centuries. Its main purpose was to protect against invasions." What was the main purpose of the Great Wall?', 'Tourism', 'Trade routes', 'Protection against invasions', 'Communication', 'C', 'Easy', 'The passage states its main purpose was "to protect against invasions."'),

('Comprehension', 'Passage: "Deforestation is the clearing of forests for agriculture and urban development. This leads to loss of biodiversity and contributes to climate change." What are the effects of deforestation mentioned?', 'Increased rainfall and cooler temperatures', 'Loss of biodiversity and contribution to climate change', 'Better soil quality and more farmland', 'Increased oxygen production', 'B', 'Medium', 'The passage mentions two effects: "loss of biodiversity" and "contributes to climate change."'),

('Comprehension', 'Passage: "Mahatma Gandhi believed in non-violence as a means to achieve independence. He led several movements against British rule in India." What did Gandhi believe in?', 'Armed revolution', 'Non-violence', 'Military power', 'Foreign intervention', 'B', 'Medium', 'The passage states Gandhi "believed in non-violence as a means to achieve independence."'),

('Comprehension', 'Passage: "The Industrial Revolution began in Britain in the late 18th century. It marked a shift from manual labor to machine-based manufacturing." What shift did the Industrial Revolution mark?', 'From agriculture to services', 'From manual labor to machine-based manufacturing', 'From rural to urban living', 'From monarchy to democracy', 'B', 'Medium', 'The passage states it "marked a shift from manual labor to machine-based manufacturing."'),

('Comprehension', 'Passage: "While renewable energy sources like solar and wind are clean, they are intermittent. This means they do not produce energy consistently." What is the limitation of renewable energy mentioned?', 'They are expensive', 'They are intermittent', 'They cause pollution', 'They require rare materials', 'B', 'Medium', 'The passage states renewable sources "are intermittent" — they don''t produce energy consistently.'),

('Comprehension', 'Passage: "The Amazon rainforest is often called the lungs of the Earth because it produces a significant amount of the world''s oxygen." Why is the Amazon called the lungs of the Earth?', 'It is shaped like lungs', 'It produces significant oxygen', 'It has many hospitals', 'It has clean air', 'B', 'Medium', 'It is called the lungs of the Earth "because it produces a significant amount of the world''s oxygen."'),

('Comprehension', 'Passage: "Studies have shown that bilingual individuals often outperform monolinguals in tasks requiring cognitive flexibility. Learning a second language appears to strengthen neural pathways." What advantage do bilingual individuals have?', 'Better physical health', 'Superior cognitive flexibility', 'Higher income', 'More social connections', 'B', 'Hard', 'The passage states bilingual individuals "outperform monolinguals in tasks requiring cognitive flexibility."'),

('Comprehension', 'Passage: "Despite its reputation for being a difficult language, Mandarin Chinese is spoken by more people worldwide than any other language." What can be inferred from this passage?', 'Mandarin is the easiest language', 'Difficulty does not determine a language''s popularity', 'No one wants to learn Mandarin', 'Mandarin is only spoken in China', 'B', 'Hard', 'Despite being "difficult," it is the most spoken language — implying difficulty doesn''t determine popularity.'),

('Comprehension', 'Passage: "The concept of democracy originated in ancient Athens around the 5th century BCE. However, Athenian democracy excluded women, slaves, and non-citizens." What was a limitation of Athenian democracy?', 'It was too expensive', 'It excluded women, slaves, and non-citizens', 'It was only theoretical', 'It lasted only one year', 'B', 'Hard', 'The passage states Athenian democracy "excluded women, slaves, and non-citizens."'),

('Comprehension', 'Passage: "Ocean acidification occurs when CO2 is absorbed by seawater, lowering its pH. This threatens marine organisms that build shells from calcium carbonate." What is threatened by ocean acidification?', 'Fish migration patterns', 'Marine organisms with calcium carbonate shells', 'Whale populations only', 'Coral reef colors', 'B', 'Hard', 'The passage states acidification "threatens marine organisms that build shells from calcium carbonate."'),

('Comprehension', 'Passage: "The placebo effect demonstrates that belief can influence physical health outcomes. Patients given sugar pills sometimes show improvement simply because they believe they are receiving treatment." What does the placebo effect demonstrate?', 'Sugar is medicinal', 'Belief can influence health outcomes', 'All medicine is unnecessary', 'Doctors are dishonest', 'B', 'Hard', 'The passage states the placebo effect "demonstrates that belief can influence physical health outcomes."'),

('Comprehension', 'Passage: "Quantum computing operates on principles fundamentally different from classical computing. While classical computers use bits, quantum computers use qubits that can exist in multiple states simultaneously." How do qubits differ from bits?', 'They are larger', 'They can exist in multiple states simultaneously', 'They are cheaper', 'They use less energy', 'B', 'Advanced', 'Qubits "can exist in multiple states simultaneously," unlike classical bits which are either 0 or 1.'),

('Comprehension', 'Passage: "The Anthropocene, a proposed geological epoch, recognizes human impact as the dominant force shaping Earth''s geology and ecosystems. Critics argue the term oversimplifies complex environmental changes." What do critics of the Anthropocene concept argue?', 'Humans have no environmental impact', 'The term oversimplifies complex changes', 'The concept is universally accepted', 'Geology cannot be influenced by humans', 'B', 'Advanced', 'Critics "argue the term oversimplifies complex environmental changes."'),

('Comprehension', 'Passage: "Epigenetics reveals that environmental factors can alter gene expression without changing the DNA sequence. These changes can potentially be passed to offspring." What does epigenetics reveal?', 'DNA can be permanently altered by diet', 'Environmental factors can alter gene expression without changing DNA', 'Genes have no role in heredity', 'All traits are determined at birth', 'B', 'Advanced', 'Epigenetics reveals "environmental factors can alter gene expression without changing the DNA sequence."'),

('Comprehension', 'Passage: "The gig economy has transformed traditional employment models, offering flexibility but often at the cost of job security and benefits. Workers in this sector frequently lack access to healthcare and retirement plans." What is often sacrificed in the gig economy?', 'Flexibility', 'Job security and benefits', 'Innovation', 'Customer satisfaction', 'B', 'Advanced', 'The gig economy offers flexibility "but often at the cost of job security and benefits."'),

('Comprehension', 'Passage: "Neuroplasticity refers to the brain''s ability to reorganize itself by forming new neural connections throughout life. This has profound implications for rehabilitation after brain injuries." What are the implications of neuroplasticity for brain injury patients?', 'Brain injuries are permanent', 'The brain can reorganize and potentially recover', 'New neurons cannot form after injury', 'Only children''s brains can recover', 'B', 'Advanced', 'Neuroplasticity — forming new connections — has "profound implications for rehabilitation after brain injuries."'),

('Comprehension', 'Passage: "The tragedy of the commons describes a situation where individuals, acting in their own self-interest, deplete a shared resource. Garrett Hardin argued that without regulation, common resources are inevitably overexploited." According to Hardin, what happens to common resources without regulation?', 'They become more abundant', 'They are inevitably overexploited', 'They are equally shared', 'They improve in quality', 'B', 'Interview', 'Hardin argued that "without regulation, common resources are inevitably overexploited."'),

('Comprehension', 'Passage: "The Sapir-Whorf hypothesis suggests that the structure of a language influences its speakers'' worldview and cognition. The strong version claims language determines thought, while the weak version suggests it merely influences it." What does the weak version of the Sapir-Whorf hypothesis claim?', 'Language has no effect on thought', 'Language determines thought completely', 'Language influences thought', 'Thought determines language', 'C', 'Interview', 'The "weak version suggests it merely influences" thought, not determines it.'),

('Comprehension', 'Passage: "CRISPR technology has made gene editing faster, cheaper, and more accurate than previous methods. However, its potential for germline editing — changes that are inheritable — raises profound ethical questions about designer babies and consent." What ethical concern does germline editing raise?', 'It is too expensive', 'Changes are inheritable, raising questions about consent', 'It only works on plants', 'It is too slow', 'B', 'Interview', 'Germline editing involves "changes that are inheritable" which "raises profound ethical questions about designer babies and consent."'),

('Comprehension', 'Passage: "Behavioral economics challenges the classical assumption of rational actors in markets. Research by Kahneman and Tversky demonstrated that cognitive biases systematically lead individuals to make irrational decisions." What did Kahneman and Tversky demonstrate?', 'All market actors are rational', 'Cognitive biases lead to irrational decisions', 'Economics is not a science', 'Markets always reach equilibrium', 'B', 'Interview', 'They "demonstrated that cognitive biases systematically lead individuals to make irrational decisions."'),

('Comprehension', 'Passage: "The observer effect in quantum mechanics states that the act of observation alters the phenomenon being observed. This has implications beyond physics, influencing debates in social science methodology about whether truly objective observation is possible." What broader implication of the observer effect is discussed?', 'Physics is subjective', 'Whether truly objective observation is possible in social science', 'Quantum mechanics is irrelevant to other fields', 'Social scientists should avoid observation', 'B', 'Interview', 'The observer effect influences debates about "whether truly objective observation is possible" in social science.');


-- =========================================================
-- TOPIC 15: ONE WORD SUBSTITUTES
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('One Word Substitutes', 'A person who loves books:', 'Bibliophobe', 'Bibliophile', 'Biography', 'Bilingual', 'B', 'Easy', '"Bibliophile" — ''biblio'' means book, ''phile'' means lover. A person who loves books.'),

('One Word Substitutes', 'A person who can use both hands equally well:', 'Handicapped', 'Ambidextrous', 'Amphibian', 'Amateur', 'B', 'Easy', '"Ambidextrous" — ''ambi'' means both, ''dextrous'' means skilled with hands.'),

('One Word Substitutes', 'A government ruled by a king or queen:', 'Democracy', 'Monarchy', 'Anarchy', 'Oligarchy', 'B', 'Easy', '"Monarchy" — ''mono'' means one, ''archy'' means rule. Rule by a single sovereign.'),

('One Word Substitutes', 'The life story of a person written by that person:', 'Biography', 'Autobiography', 'Diary', 'Memoir', 'B', 'Easy', '"Autobiography" — ''auto'' means self, ''bio'' means life, ''graphy'' means writing. Self-written life story.'),

('One Word Substitutes', 'A person who eats all kinds of food:', 'Herbivore', 'Carnivore', 'Omnivore', 'Insectivore', 'C', 'Easy', '"Omnivore" — ''omni'' means all, ''vore'' means to eat. An organism that eats both plants and animals.'),

('One Word Substitutes', 'One who hates mankind:', 'Philanthropist', 'Misanthrope', 'Misogynist', 'Anthropologist', 'B', 'Medium', '"Misanthrope" — ''mis'' means hatred, ''anthrope'' means mankind. One who dislikes or distrusts humankind.'),

('One Word Substitutes', 'Words inscribed on a tomb:', 'Epilogue', 'Epitaph', 'Epitome', 'Epigraph', 'B', 'Medium', '"Epitaph" — an inscription on a tombstone in memory of the person buried there.'),

('One Word Substitutes', 'A person who speaks many languages:', 'Bilingual', 'Multilingual', 'Polyglot', 'Linguist', 'C', 'Medium', '"Polyglot" — ''poly'' means many, ''glot'' means tongue/language. One who knows several languages.'),

('One Word Substitutes', 'Murder of one''s own father:', 'Matricide', 'Patricide', 'Fratricide', 'Regicide', 'B', 'Medium', '"Patricide" — ''patri'' means father, ''cide'' means killing. The killing of one''s father.'),

('One Word Substitutes', 'A place where dead bodies are kept for identification:', 'Mortuary', 'Morgue', 'Cemetery', 'Crematorium', 'B', 'Medium', '"Morgue" — a place where dead bodies are kept temporarily for identification before burial.'),

('One Word Substitutes', 'A government in which power is held by a small group:', 'Democracy', 'Theocracy', 'Oligarchy', 'Autocracy', 'C', 'Hard', '"Oligarchy" — ''oligo'' means few, ''archy'' means rule. Government by a small group of powerful people.'),

('One Word Substitutes', 'Something that is present everywhere:', 'Unique', 'Ubiquitous', 'Universal', 'Unanimous', 'B', 'Hard', '"Ubiquitous" means present, appearing, or found everywhere. From Latin ''ubique'' meaning everywhere.'),

('One Word Substitutes', 'Fear of confined spaces:', 'Agoraphobia', 'Claustrophobia', 'Acrophobia', 'Xenophobia', 'B', 'Hard', '"Claustrophobia" — ''claustro'' means confined space, ''phobia'' means fear.'),

('One Word Substitutes', 'One who walks in sleep:', 'Insomniac', 'Somnambulist', 'Somnolent', 'Narcoleptic', 'B', 'Hard', '"Somnambulist" — ''somn'' means sleep, ''ambul'' means walk. One who walks while asleep.'),

('One Word Substitutes', 'A word or law no longer in use:', 'Obsolete', 'Modern', 'Contemporary', 'Current', 'A', 'Hard', '"Obsolete" means no longer produced or used; out of date. From Latin ''obsoletus'' meaning worn out.'),

('One Word Substitutes', 'A speech delivered without preparation:', 'Rehearsed', 'Extempore', 'Memorized', 'Scripted', 'B', 'Advanced', '"Extempore" means spoken or done without preparation. Also called an impromptu speech.'),

('One Word Substitutes', 'The practice of having more than one spouse at the same time:', 'Monogamy', 'Polygamy', 'Bigamy', 'Celibacy', 'B', 'Advanced', '"Polygamy" — ''poly'' means many, ''gamy'' means marriage. Having multiple spouses simultaneously.'),

('One Word Substitutes', 'A person who is indifferent to pain and pleasure:', 'Stoic', 'Hedonist', 'Epicurean', 'Cynic', 'A', 'Advanced', '"Stoic" — from the Stoic school of philosophy. One who endures pain and hardship without showing feelings.'),

('One Word Substitutes', 'Something that can be easily broken:', 'Flexible', 'Fragile', 'Durable', 'Resilient', 'B', 'Advanced', '"Fragile" means easily broken, damaged, or destroyed. From Latin ''fragilis'' meaning breakable.'),

('One Word Substitutes', 'The killing of a large number of people:', 'Homicide', 'Suicide', 'Genocide', 'Infanticide', 'C', 'Advanced', '"Genocide" — ''geno'' means race/people, ''cide'' means killing. The deliberate killing of a large group of people.'),

('One Word Substitutes', 'A person who renounces the world and practices self-discipline:', 'Hedonist', 'Ascetic', 'Epicurean', 'Materialist', 'B', 'Interview', '"Ascetic" — one who practices severe self-discipline and abstains from indulgence, typically for religious reasons.'),

('One Word Substitutes', 'Language that is difficult to understand; gibberish:', 'Eloquence', 'Jargon', 'Vernacular', 'Dialect', 'B', 'Interview', '"Jargon" — special words or expressions used by a profession that are difficult for others to understand.'),

('One Word Substitutes', 'An excessive fear of foreigners or strangers:', 'Claustrophobia', 'Agoraphobia', 'Xenophobia', 'Hydrophobia', 'C', 'Interview', '"Xenophobia" — ''xeno'' means stranger/foreigner, ''phobia'' means fear. Intense dislike or fear of people from other countries.'),

('One Word Substitutes', 'A person who believes that nothing can be known about God:', 'Atheist', 'Theist', 'Agnostic', 'Pantheist', 'C', 'Interview', '"Agnostic" — ''a'' means without, ''gnostic'' means knowledge. One who believes the existence of God cannot be known.'),

('One Word Substitutes', 'A remedy for all diseases or difficulties:', 'Placebo', 'Panacea', 'Antidote', 'Vaccine', 'B', 'Interview', '"Panacea" — from Greek ''panakeia'' meaning cure-all. A solution or remedy for all difficulties or diseases.');


-- =========================================================
-- TOPIC 16: IDIOMS AND PHRASES
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Idioms and Phrases', 'What does "break the ice" mean?', 'To break something frozen', 'To initiate conversation in a social setting', 'To cancel an agreement', 'To start a fight', 'B', 'Easy', '"Break the ice" means to do or say something to relieve tension or get conversation going in a new social situation.'),

('Idioms and Phrases', 'What does "piece of cake" mean?', 'A slice of cake', 'Something very easy', 'A cooking recipe', 'A reward', 'B', 'Easy', '"Piece of cake" means something very easy to do. Example: "The exam was a piece of cake."'),

('Idioms and Phrases', 'What does "raining cats and dogs" mean?', 'Animals falling from sky', 'Raining very heavily', 'A pet store sale', 'Light drizzle', 'B', 'Easy', '"Raining cats and dogs" means raining very heavily. It is a common English idiom.'),

('Idioms and Phrases', 'What does "once in a blue moon" mean?', 'During a blue moon', 'Very rarely', 'Every night', 'Very frequently', 'B', 'Easy', '"Once in a blue moon" means very rarely or very infrequently.'),

('Idioms and Phrases', 'What does "hit the nail on the head" mean?', 'To hurt yourself with a hammer', 'To describe exactly what is true', 'To fail at something', 'To build furniture', 'B', 'Easy', '"Hit the nail on the head" means to say or do something exactly right; to be precisely correct.'),

('Idioms and Phrases', 'What does "burn the midnight oil" mean?', 'To waste oil', 'To work or study late into the night', 'To cook at night', 'To start a fire', 'B', 'Medium', '"Burn the midnight oil" means to work or study late into the night. Refers to staying up by oil lamp light.'),

('Idioms and Phrases', 'What does "let the cat out of the bag" mean?', 'To free a cat', 'To reveal a secret', 'To buy a pet', 'To open a bag', 'B', 'Medium', '"Let the cat out of the bag" means to reveal a secret accidentally or carelessly.'),

('Idioms and Phrases', 'What does "bite the bullet" mean?', 'To eat ammunition', 'To endure a painful situation bravely', 'To shoot a gun', 'To refuse to act', 'B', 'Medium', '"Bite the bullet" means to endure a difficult or unpleasant situation with courage.'),

('Idioms and Phrases', 'What does "cry over spilled milk" mean?', 'To be sad about spilling milk', 'To complain about something that cannot be undone', 'To clean up a mess', 'To buy more milk', 'B', 'Medium', '"Don''t cry over spilled milk" means don''t waste time being upset about something that has already happened and cannot be changed.'),

('Idioms and Phrases', 'What does "the ball is in your court" mean?', 'You are playing tennis', 'It is your turn to make a decision', 'You lost the game', 'The court is full', 'B', 'Medium', '"The ball is in your court" means it is your decision or responsibility to take the next step.'),

('Idioms and Phrases', 'What does "add insult to injury" mean?', 'To hurt someone physically', 'To worsen an already bad situation', 'To insult someone''s intelligence', 'To give first aid', 'B', 'Hard', '"Add insult to injury" means to make a bad situation even worse by saying or doing something hurtful.'),

('Idioms and Phrases', 'What does "a blessing in disguise" mean?', 'A hidden blessing', 'A bad event that turns out to have good results', 'A religious ceremony', 'A costume party', 'B', 'Hard', '"A blessing in disguise" means something that seems bad at first but ends up having positive results.'),

('Idioms and Phrases', 'What does "pull someone''s leg" mean?', 'To physically grab a leg', 'To joke with someone or tease them', 'To trip someone', 'To help someone walk', 'B', 'Hard', '"Pull someone''s leg" means to tease or joke with someone playfully, not to be taken seriously.'),

('Idioms and Phrases', 'What does "barking up the wrong tree" mean?', 'A dog barking at a tree', 'Pursuing a mistaken course of action', 'Looking for a lost pet', 'Climbing the wrong tree', 'B', 'Hard', '"Barking up the wrong tree" means making a wrong assumption or pursuing the wrong course of action.'),

('Idioms and Phrases', 'What does "turn a blind eye" mean?', 'To become blind', 'To deliberately ignore something', 'To close one eye', 'To look away briefly', 'B', 'Hard', '"Turn a blind eye" means to pretend not to notice something, deliberately ignoring wrongdoing.'),

('Idioms and Phrases', 'What does "burn one''s bridges" mean?', 'To set fire to bridges', 'To destroy all chances of going back', 'To build new bridges', 'To cross a river', 'B', 'Advanced', '"Burn one''s bridges" means to do something that makes it impossible to return to a previous situation.'),

('Idioms and Phrases', 'What does "the elephant in the room" mean?', 'A large pet in the room', 'An obvious problem that everyone ignores', 'A zoo exhibit', 'A large piece of furniture', 'B', 'Advanced', '"The elephant in the room" refers to an obvious problem or issue that people avoid discussing.'),

('Idioms and Phrases', 'What does "play devil''s advocate" mean?', 'To worship the devil', 'To argue the opposite position for the sake of debate', 'To be evil', 'To hire a lawyer', 'B', 'Advanced', '"Play devil''s advocate" means to argue against something you may actually agree with, to test the strength of the argument.'),

('Idioms and Phrases', 'What does "cut the Gordian knot" mean?', 'To untie a rope', 'To solve a complex problem with bold action', 'To tie a knot', 'To learn sailing', 'B', 'Advanced', '"Cut the Gordian knot" means to solve a complex or unsolvable problem with a bold, decisive action.'),

('Idioms and Phrases', 'What does "cross the Rubicon" mean?', 'To swim across a river', 'To pass a point of no return', 'To visit Italy', 'To build a bridge', 'B', 'Advanced', '"Cross the Rubicon" means to take an irreversible step or make a decision from which there is no turning back.'),

('Idioms and Phrases', 'What does "Pyrrhic victory" mean?', 'A Greek celebration', 'A victory won at too great a cost', 'A complete victory', 'A military defeat', 'B', 'Interview', '"Pyrrhic victory" — a victory that inflicts such devastating cost that it is tantamount to defeat.'),

('Idioms and Phrases', 'What does "between Scylla and Charybdis" mean?', 'Between two cities', 'Between two equally dangerous alternatives', 'Between two friends', 'Between two meals', 'B', 'Interview', '"Between Scylla and Charybdis" means caught between two equally dangerous or undesirable situations.'),

('Idioms and Phrases', 'What does "Hobson''s choice" mean?', 'A difficult decision', 'A choice with no real alternative', 'A generous offer', 'Multiple excellent options', 'B', 'Interview', '"Hobson''s choice" means a free choice in which only one thing is offered — take it or leave it.'),

('Idioms and Phrases', 'What does "Sisyphean task" mean?', 'A simple task', 'An endlessly laborious or futile task', 'A creative project', 'A rewarding challenge', 'B', 'Interview', '"Sisyphean task" — from the myth of Sisyphus — refers to a task that is endless and ultimately futile.'),

('Idioms and Phrases', 'What does "hoist with one''s own petard" mean?', 'To lift a flag', 'To be harmed by one''s own plan to harm others', 'To win a competition', 'To climb a wall', 'B', 'Interview', '"Hoist with one''s own petard" means to be harmed by the very scheme you devised to harm others.');


-- =========================================================
-- TOPIC 17: CHANGE OF VOICE
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Change of Voice', 'Change to passive: "She writes a letter."', 'A letter is written by her.', 'A letter was written by her.', 'A letter has been written by her.', 'A letter will be written by her.', 'A', 'Easy', 'Simple present active → Simple present passive: is/am/are + V3. "A letter is written by her."'),

('Change of Voice', 'Change to passive: "They play football."', 'Football is played by them.', 'Football was played by them.', 'Football has been played by them.', 'Football is being played by them.', 'A', 'Easy', 'Simple present: "Football is played by them." Subject (football) + is + V3 (played) + by + agent.'),

('Change of Voice', 'Change to passive: "He ate the cake."', 'The cake is eaten by him.', 'The cake was eaten by him.', 'The cake has been eaten by him.', 'The cake was being eaten by him.', 'B', 'Easy', 'Simple past active → Simple past passive: was/were + V3. "The cake was eaten by him."'),

('Change of Voice', 'Change to active: "The book was read by the students."', 'The students read the book.', 'The students reads the book.', 'The students are reading the book.', 'The students have read the book.', 'A', 'Easy', 'Simple past passive → Simple past active: "The students read the book."'),

('Change of Voice', 'Change to passive: "The cat chased the mouse."', 'The mouse is chased by the cat.', 'The mouse was chased by the cat.', 'The mouse has been chased by the cat.', 'The mouse was being chased by the cat.', 'B', 'Easy', 'Simple past: "The mouse was chased by the cat." Was + V3 (chased).'),

('Change of Voice', 'Change to passive: "She is cooking dinner."', 'Dinner is being cooked by her.', 'Dinner is cooked by her.', 'Dinner was being cooked by her.', 'Dinner has been cooked by her.', 'A', 'Medium', 'Present continuous → is/am/are + being + V3: "Dinner is being cooked by her."'),

('Change of Voice', 'Change to passive: "They have completed the project."', 'The project has been completed by them.', 'The project was completed by them.', 'The project is being completed by them.', 'The project had been completed by them.', 'A', 'Medium', 'Present perfect → has/have + been + V3: "The project has been completed by them."'),

('Change of Voice', 'Change to passive: "He will write the exam."', 'The exam will be written by him.', 'The exam is written by him.', 'The exam was written by him.', 'The exam would be written by him.', 'A', 'Medium', 'Simple future → will + be + V3: "The exam will be written by him."'),

('Change of Voice', 'Change to passive: "She can solve this problem."', 'This problem can be solved by her.', 'This problem could be solved by her.', 'This problem is solved by her.', 'This problem was solved by her.', 'A', 'Medium', 'Modal verb → modal + be + V3: "This problem can be solved by her."'),

('Change of Voice', 'Change to active: "A song is being sung by the children."', 'The children are singing a song.', 'The children sing a song.', 'The children were singing a song.', 'The children have sung a song.', 'A', 'Medium', 'Present continuous passive → active: "The children are singing a song."'),

('Change of Voice', 'Change to passive: "They were building a bridge."', 'A bridge was being built by them.', 'A bridge was built by them.', 'A bridge is being built by them.', 'A bridge had been built by them.', 'A', 'Hard', 'Past continuous → was/were + being + V3: "A bridge was being built by them."'),

('Change of Voice', 'Change to passive: "He had finished the work before noon."', 'The work had been finished by him before noon.', 'The work was finished by him before noon.', 'The work has been finished by him before noon.', 'The work would be finished by him before noon.', 'A', 'Hard', 'Past perfect → had + been + V3: "The work had been finished by him before noon."'),

('Change of Voice', 'Change to passive: "Open the door." (Imperative)', 'The door is opened.', 'Let the door be opened.', 'The door was opened.', 'The door should open.', 'B', 'Hard', 'Imperative to passive: "Let + object + be + V3": "Let the door be opened."'),

('Change of Voice', 'Change to passive: "Who wrote this book?"', 'By whom was this book written?', 'Who was written this book?', 'This book was written by who?', 'By whom this book was written?', 'A', 'Hard', '"Who" questions: "By whom + was + subject + V3?" — "By whom was this book written?"'),

('Change of Voice', 'Change to passive: "People speak English all over the world."', 'English is spoken all over the world.', 'English was spoken all over the world.', 'English is being spoken all over the world.', 'English has been spoken all over the world.', 'A', 'Hard', 'When the subject is generic ("people"), it is omitted in passive: "English is spoken all over the world."'),

('Change of Voice', 'Change to passive: "They made him captain of the team."', 'He was made captain of the team.', 'Captain was made him of the team.', 'He is made captain of the team.', 'He had been made captain of the team.', 'A', 'Advanced', 'With two objects, the person becomes subject: "He was made captain of the team (by them)."'),

('Change of Voice', 'Change to passive: "The teacher is teaching us grammar."', 'We are being taught grammar by the teacher.', 'Grammar is being taught us by the teacher.', 'We are taught grammar by the teacher.', 'Grammar is taught to us by the teacher.', 'A', 'Advanced', 'Present continuous with indirect object: "We are being taught grammar by the teacher."'),

('Change of Voice', 'Change to passive: "Please help me." (Request)', 'I am helped.', 'You are requested to help me.', 'I was helped by you.', 'Help me is requested.', 'B', 'Advanced', 'Polite requests in passive: "You are requested to help me."'),

('Change of Voice', 'Change to passive: "Do not touch the exhibits." (Negative imperative)', 'The exhibits are not touched.', 'Let the exhibits not be touched.', 'The exhibits should not touched.', 'Let not the exhibits be touched.', 'B', 'Advanced', 'Negative imperative: "Let + object + not + be + V3": "Let the exhibits not be touched."'),

('Change of Voice', 'Change to passive: "It is time to close the shop."', 'It is time for the shop to be closed.', 'The shop is closed by time.', 'It was time to close the shop.', 'The shop was closed on time.', 'A', 'Advanced', '"It is time + for + object + to be + V3": "It is time for the shop to be closed."'),

('Change of Voice', 'Change to passive: "He is said to be a genius."', 'People say that he is a genius.', 'He says he is a genius.', 'It is being said he is a genius.', 'A genius is said by him.', 'A', 'Interview', '"He is said to be..." converts to active as: "People say that he is a genius."'),

('Change of Voice', 'Change to passive: "The manager will have completed the report by Friday."', 'The report will have been completed by the manager by Friday.', 'The report will be completed by the manager by Friday.', 'The report has been completed by the manager by Friday.', 'The report would have been completed by the manager by Friday.', 'A', 'Interview', 'Future perfect → will + have + been + V3: "The report will have been completed by the manager by Friday."'),

('Change of Voice', 'Change to passive: "They believe him to be innocent."', 'He is believed to be innocent.', 'He was believed to be innocent.', 'Innocent is believed by them.', 'He is being believed to be innocent.', 'A', 'Interview', '"They believe him to be X" → "He is believed to be X." The infinitive construction is preserved.'),

('Change of Voice', 'Change to passive: "Someone must have stolen the painting."', 'The painting must have been stolen.', 'The painting must be stolen.', 'The painting had been stolen by someone.', 'The painting must been have stolen.', 'A', 'Interview', 'Modal + perfect: modal + have + been + V3: "The painting must have been stolen."'),

('Change of Voice', 'Change to passive: "It is expected that the prices will fall."', 'The prices are expected to fall.', 'The prices were expected to fall.', 'Falling prices are expected.', 'Expected are the prices to fall.', 'A', 'Interview', '"It is expected that X will..." → "X is/are expected to...": "The prices are expected to fall."');


-- =========================================================
-- TOPIC 18: CHANGE OF SPEECH
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Change of Speech', 'Change to indirect: He said, "I am happy."', 'He said that he is happy.', 'He said that he was happy.', 'He said that I am happy.', 'He said that I was happy.', 'B', 'Easy', 'Reporting verb in past → tense shifts back. "am" → "was", "I" → "he". "He said that he was happy."'),

('Change of Speech', 'Change to indirect: She said, "I like chocolate."', 'She said that she likes chocolate.', 'She said that she liked chocolate.', 'She said that I liked chocolate.', 'She said that I like chocolate.', 'B', 'Easy', '"Like" (present) → "liked" (past). "I" → "she". "She said that she liked chocolate."'),

('Change of Speech', 'Change to indirect: He said, "I will come tomorrow."', 'He said that he will come tomorrow.', 'He said that he would come the next day.', 'He said that I would come tomorrow.', 'He said that he would come tomorrow.', 'B', 'Easy', '"Will" → "would", "tomorrow" → "the next day", "I" → "he".'),

('Change of Speech', 'Change to indirect: She said, "I am reading a book."', 'She said that she is reading a book.', 'She said that she was reading a book.', 'She said that I was reading a book.', 'She said that she has been reading a book.', 'B', 'Easy', '"Am reading" → "was reading" (present continuous → past continuous). "I" → "she".'),

('Change of Speech', 'Change to direct: He told me that he was tired.', 'He said to me, "I am tired."', 'He said to me, "He was tired."', 'He said to me, "I was tired."', 'He said to me, "You are tired."', 'A', 'Easy', 'Indirect to direct: "was" → "am" (shift back), "he" → "I". "He said to me, I am tired."'),

('Change of Speech', 'Change to indirect: He said, "I have finished my work."', 'He said that he has finished his work.', 'He said that he had finished his work.', 'He said that he have finished his work.', 'He said that I had finished my work.', 'B', 'Medium', '"Have finished" (present perfect) → "had finished" (past perfect). "I" → "he", "my" → "his".'),

('Change of Speech', 'Change to indirect: She asked me, "Where do you live?"', 'She asked me where do I live.', 'She asked me where I lived.', 'She asked me that where I lived.', 'She asked me where did I live.', 'B', 'Medium', 'Wh-questions: use question word, no inversion, no "that". "Do you live" → "I lived".'),

('Change of Speech', 'Change to indirect: He asked, "Did you go to school?"', 'He asked if I went to school.', 'He asked that did I go to school.', 'He asked whether do I go to school.', 'He asked if I had gone to school.', 'D', 'Medium', 'Yes/No questions use "if/whether". "Did you go" (past) → "I had gone" (past perfect). "He asked if I had gone to school."'),

('Change of Speech', 'Change to indirect: The teacher said, "The earth revolves around the sun."', 'The teacher said that the earth revolved around the sun.', 'The teacher said that the earth revolves around the sun.', 'The teacher said the earth is revolving around the sun.', 'The teacher told the earth revolves around the sun.', 'B', 'Medium', 'Universal truths do not change tense in indirect speech. "The earth revolves around the sun."'),

('Change of Speech', 'Change to indirect: She said to me, "Please help me."', 'She told me to help her.', 'She requested me to help her.', 'She said me to help her.', 'She asked me to helped her.', 'B', 'Medium', '"Please" indicates a request → use "requested". "She requested me to help her."'),

('Change of Speech', 'Change to indirect: He said, "I was playing cricket yesterday."', 'He said that he had been playing cricket the previous day.', 'He said that he was playing cricket yesterday.', 'He said that he has been playing cricket the day before.', 'He said that he played cricket the previous day.', 'A', 'Hard', '"Was playing" → "had been playing", "yesterday" → "the previous day".'),

('Change of Speech', 'Change to indirect: The captain said, "Hurrah! We have won the match."', 'The captain exclaimed with joy that they had won the match.', 'The captain said hurrah that they had won the match.', 'The captain exclaimed that hurrah they have won the match.', 'The captain said joyfully that they have won the match.', 'A', 'Hard', 'Exclamations: use "exclaimed with joy/sorrow". "Have won" → "had won".'),

('Change of Speech', 'Change to indirect: He said, "Let us go for a walk."', 'He said that let us go for a walk.', 'He suggested that they should go for a walk.', 'He told to go for a walk.', 'He said to let them go for a walk.', 'B', 'Hard', '"Let us" = suggestion → use "suggested". "He suggested that they should go for a walk."'),

('Change of Speech', 'Change to indirect: She said, "What a beautiful painting!"', 'She exclaimed that it was a very beautiful painting.', 'She said what a beautiful painting.', 'She exclaimed that what a beautiful painting it is.', 'She told that it was a beautiful painting.', 'A', 'Hard', 'Exclamation → "exclaimed that" + statement form: "She exclaimed that it was a very beautiful painting."'),

('Change of Speech', 'Change to indirect: The officer said to the soldiers, "March forward."', 'The officer told the soldiers to march forward.', 'The officer ordered the soldiers to march forward.', 'The officer said the soldiers to march forward.', 'The officer commanded the soldiers that march forward.', 'B', 'Hard', 'An officer giving commands → use "ordered/commanded". "The officer ordered the soldiers to march forward."'),

('Change of Speech', 'Change to indirect: He said, "Had I been there, I would have helped."', 'He said that had he been there, he would have helped.', 'He said that if he had been there, he would have helped.', 'He said that he would have helped if he was there.', 'He said that if he were there he would help.', 'B', 'Advanced', 'Past perfect conditional remains unchanged in indirect speech. "He said that if he had been there, he would have helped."'),

('Change of Speech', 'Change to indirect: "Don''t go there," she warned me.', 'She warned me not to go there.', 'She warned me to not going there.', 'She warned me that don''t go there.', 'She warned me against to go there.', 'A', 'Advanced', 'Negative commands: "not + to + verb". "She warned me not to go there."'),

('Change of Speech', 'Change to indirect: He said, "I wish I were a king."', 'He said that he wished he were a king.', 'He said that he wishes he was a king.', 'He said that he wished he had been a king.', 'He said that he wished he is a king.', 'A', 'Advanced', '"Wish + were" (subjunctive) remains unchanged in indirect speech. "He said that he wished he were a king."'),

('Change of Speech', 'Change to indirect: She said, "I have been working here since 2015."', 'She said that she had been working there since 2015.', 'She said that she has been working here since 2015.', 'She said that she was working there since 2015.', 'She said that she have been working there since 2015.', 'A', 'Advanced', '"Have been working" → "had been working", "here" → "there". Time reference (2015) stays unchanged.'),

('Change of Speech', 'Change to indirect: He said to me, "You should have been more careful."', 'He told me that I should have been more careful.', 'He told me that he should have been more careful.', 'He said me that you should have been more careful.', 'He told me that I should had been more careful.', 'A', 'Advanced', '"Should have been" doesn''t change. "You" → "I". "He told me that I should have been more careful."'),

('Change of Speech', 'Change to indirect: She said, "May God bless you!"', 'She prayed that God might bless me.', 'She said that may God bless me.', 'She wished that God may bless you.', 'She prayed God to bless me.', 'A', 'Interview', 'Prayers/wishes: use "prayed/wished". "May" → "might". "She prayed that God might bless me."'),

('Change of Speech', 'Change to indirect: He said, "How foolish I have been!"', 'He exclaimed that he had been very foolish.', 'He said how foolish he had been.', 'He exclaimed that how foolish he has been.', 'He told that he had been very foolish.', 'A', 'Interview', 'Exclamation with "How" → "exclaimed that" + adjective becomes adverb. "He exclaimed that he had been very foolish."'),

('Change of Speech', 'Change to indirect: The notice read, "Trespassers will be prosecuted."', 'The notice warned that trespassers would be prosecuted.', 'The notice said that trespassers will be prosecuted.', 'The notice read that trespassers would been prosecuted.', 'The notice told that trespassers would be prosecuted.', 'A', 'Interview', 'Written statements: "read" as reporting verb. "Will" → "would". "The notice warned that trespassers would be prosecuted."'),

('Change of Speech', 'Change to indirect: He said, "Had I realized the consequences, I would never have acted so rashly."', 'He said that had he realized the consequences, he would never have acted so rashly.', 'He said that if he had realized the consequences, he would never have acted so rashly.', 'He said that he had realized the consequences and would not have acted rashly.', 'He said if he realized consequences he would not act rashly.', 'B', 'Interview', 'Third conditional in indirect speech: "Had I realized" → "if he had realized". No further tense change needed.'),

('Change of Speech', 'Change to indirect: She said, "I would rather die than beg."', 'She said that she would rather die than beg.', 'She said that she would rather died than begged.', 'She said that she will rather die than beg.', 'She said that she rather would die than beg.', 'A', 'Interview', '"Would rather" doesn''t change further. "She said that she would rather die than beg."');


-- =========================================================
-- TOPIC 19: VERBAL ANALOGIES
-- 25 QUESTIONS
-- =========================================================

INSERT INTO questions
(topic, question, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation)
VALUES

('Verbal Analogies', 'Doctor : Hospital :: Teacher : ?', 'Student', 'School', 'Book', 'Class', 'B', 'Easy', 'A doctor works in a hospital; a teacher works in a school. Relationship: Worker → Workplace.'),

('Verbal Analogies', 'Pen : Write :: Knife : ?', 'Sharp', 'Cut', 'Steel', 'Kitchen', 'B', 'Easy', 'A pen is used to write; a knife is used to cut. Relationship: Tool → Function.'),

('Verbal Analogies', 'Bird : Nest :: Human : ?', 'Tree', 'House', 'Cave', 'Forest', 'B', 'Easy', 'A bird lives in a nest; a human lives in a house. Relationship: Creature → Dwelling.'),

('Verbal Analogies', 'Hot : Cold :: Big : ?', 'Large', 'Small', 'Huge', 'Tall', 'B', 'Easy', 'Hot is the opposite of cold; big is the opposite of small. Relationship: Antonym pair.'),

('Verbal Analogies', 'Cow : Milk :: Hen : ?', 'Meat', 'Egg', 'Feather', 'Chick', 'B', 'Easy', 'A cow produces milk; a hen produces eggs. Relationship: Animal → Product.'),

('Verbal Analogies', 'Eye : See :: Ear : ?', 'Sound', 'Hear', 'Music', 'Noise', 'B', 'Medium', 'Eyes are used to see; ears are used to hear. Relationship: Organ → Function.'),

('Verbal Analogies', 'Author : Book :: Composer : ?', 'Instrument', 'Music', 'Singer', 'Orchestra', 'B', 'Medium', 'An author creates a book; a composer creates music. Relationship: Creator → Creation.'),

('Verbal Analogies', 'Soldier : Army :: Player : ?', 'Game', 'Team', 'Ball', 'Stadium', 'B', 'Medium', 'A soldier belongs to an army; a player belongs to a team. Relationship: Individual → Group.'),

('Verbal Analogies', 'Optimist : Hopeful :: Pessimist : ?', 'Happy', 'Gloomy', 'Neutral', 'Excited', 'B', 'Medium', 'An optimist is hopeful; a pessimist is gloomy. Relationship: Person → Characteristic.'),

('Verbal Analogies', 'Chapter : Book :: Act : ?', 'Movie', 'Play', 'Scene', 'Story', 'B', 'Medium', 'A chapter is a division of a book; an act is a division of a play. Relationship: Part → Whole.'),

('Verbal Analogies', 'Archipelago : Islands :: Constellation : ?', 'Planets', 'Stars', 'Galaxies', 'Moons', 'B', 'Hard', 'An archipelago is a group of islands; a constellation is a group of stars. Relationship: Collection → Components.'),

('Verbal Analogies', 'Cub : Bear :: Fawn : ?', 'Rabbit', 'Deer', 'Fox', 'Horse', 'B', 'Hard', 'A cub is the young of a bear; a fawn is the young of a deer. Relationship: Young → Adult animal.'),

('Verbal Analogies', 'Botany : Plants :: Entomology : ?', 'Birds', 'Insects', 'Fish', 'Reptiles', 'B', 'Hard', 'Botany is the study of plants; entomology is the study of insects. Relationship: Science → Subject of study.'),

('Verbal Analogies', 'Acrophobia : Heights :: Hydrophobia : ?', 'Fire', 'Water', 'Closed spaces', 'Darkness', 'B', 'Hard', 'Acrophobia is fear of heights; hydrophobia is fear of water. Relationship: Phobia → Object of fear.'),

('Verbal Analogies', 'Preamble : Constitution :: Prologue : ?', 'Chapter', 'Book', 'Index', 'Summary', 'B', 'Hard', 'A preamble is the introduction to a constitution; a prologue is the introduction to a book. Relationship: Introduction → Document.'),

('Verbal Analogies', 'Soporific : Sleep :: Emetic : ?', 'Laughter', 'Vomiting', 'Crying', 'Sneezing', 'B', 'Advanced', 'A soporific induces sleep; an emetic induces vomiting. Relationship: Agent → Effect.'),

('Verbal Analogies', 'Ornithology : Birds :: Ichthyology : ?', 'Insects', 'Mammals', 'Fish', 'Reptiles', 'C', 'Advanced', 'Ornithology studies birds; ichthyology studies fish. Relationship: Science → Subject.'),

('Verbal Analogies', 'Sartorial : Clothing :: Culinary : ?', 'Music', 'Cooking', 'Writing', 'Dancing', 'B', 'Advanced', '"Sartorial" relates to clothing; "culinary" relates to cooking. Relationship: Adjective → Domain.'),

('Verbal Analogies', 'Misanthrope : People :: Misogamist : ?', 'Women', 'Marriage', 'Money', 'Children', 'B', 'Advanced', 'A misanthrope hates people; a misogamist hates marriage. Relationship: One who hates → Object of hatred.'),

('Verbal Analogies', 'Cacophony : Sound :: Chaos : ?', 'Silence', 'Order', 'Disorder', 'Harmony', 'C', 'Advanced', 'Cacophony is harsh, discordant sound; chaos is complete disorder. Both represent the negative extreme.'),

('Verbal Analogies', 'Ephemeral : Permanent :: Loquacious : ?', 'Talkative', 'Taciturn', 'Eloquent', 'Verbose', 'B', 'Interview', 'Ephemeral (short-lived) is opposite of permanent; loquacious (talkative) is opposite of taciturn (reserved).'),

('Verbal Analogies', 'Pedagogue : Teaching :: Demagogue : ?', 'Democracy', 'Rabble-rousing', 'Leadership', 'Education', 'B', 'Interview', 'A pedagogue is one who teaches; a demagogue is one who appeals to emotions (rabble-rousing) to gain political power.'),

('Verbal Analogies', 'Malapropism : Words :: Anachronism : ?', 'Numbers', 'Time', 'People', 'Places', 'B', 'Interview', 'A malapropism is the mistaken use of words; an anachronism is something placed in the wrong time period.'),

('Verbal Analogies', 'Pusillanimous : Courage :: Parsimonious : ?', 'Wisdom', 'Generosity', 'Patience', 'Intelligence', 'B', 'Interview', 'Pusillanimous means lacking courage; parsimonious means lacking generosity. Both describe a deficiency.'),

('Verbal Analogies', 'Quixotic : Pragmatic :: Sycophantic : ?', 'Flattering', 'Sincere', 'Obsequious', 'Servile', 'B', 'Interview', 'Quixotic (idealistic) is the opposite of pragmatic (practical); sycophantic (flattering insincerely) is the opposite of sincere.');
