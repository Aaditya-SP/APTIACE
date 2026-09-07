// =====================================================
// LOGICAL REASONING QUESTIONS - PART 4
// Topics:
// 13. Statement and Assumption (25 questions)
// 14. Course of Action (25 questions)
// 15. Statement and Conclusion (25 questions)
// 16. Theme Detection (25 questions)
// =====================================================

module.exports = [

    // =========================================================================
    // 13 - STATEMENT AND ASSUMPTION
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Please do not feed the animals in the zoo.' - Notice outside the safari park.\nAssumptions:\nI. Feeding animals could be harmful to their health.\nII. Visitors might attempt to feed the animals if not advised otherwise.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Either I or II is implicit",
        option_d: "Both I and II are implicit",
        correct_answer: "D", difficulty: "Easy",
        explanation: "The notice is posted because visitors might feed them (Assumption II), and doing so is generally harmful to animal welfare or safety (Assumption I). Both assumptions are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Buy pure organic honey from ABC Farms for better immunity.' - Advertisement.\nAssumptions:\nI. People desire better immunity.\nII. ABC Farms produces pure organic honey.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Neither I nor II is implicit",
        option_d: "Both I and II are implicit",
        correct_answer: "D", difficulty: "Easy",
        explanation: "Advertisers assume that consumers want the advertised benefit (better immunity) and that their claim of offering pure organic honey will be believed by potential buyers. Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Fasten your seatbelts before takeoff.' - Flight attendant announcement.\nAssumptions:\nI. Passengers might not fasten their seatbelts without an announcement.\nII. Fastening seatbelts provides safety during takeoff.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Easy",
        explanation: "The airline assumes that the announcement is necessary for passenger compliance (I) and that seatbelts ensure safety during takeoff (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Apply before July 31st to avail a 20% early-bird discount on course enrollment.'\nAssumptions:\nI. The discount will motivate students to enroll earlier.\nII. Some students will enroll before July 31st.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Easy",
        explanation: "The institute assumes the early discount acts as an incentive (I) and expects students will take advantage of the deadline (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Warning: Trespassers will be prosecuted.'\nAssumptions:\nI. People can read the warning notice.\nII. The threat of prosecution deters unauthorized entry.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Any public signboard fundamentally assumes that the target audience can read it (I) and that the warning has deterrent value (II). Both are implicit."
    },

    // MEDIUM (6-10)
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The government has decided to provide free internet access in all rural public schools.'\nAssumptions:\nI. Rural public schools have computers or digital devices to use the internet.\nII. Internet access will enhance learning opportunities for rural students.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Neither I nor II is implicit",
        option_d: "Both I and II are implicit",
        correct_answer: "D", difficulty: "Medium",
        explanation: "Providing internet presupposes that receiving institutions have means to access it (computers/devices) and that doing so will serve an educational benefit. Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Join our coaching academy to crack competitive programming interviews in 6 months.'\nAssumptions:\nI. Cracking competitive programming interviews is desirable to aspiring software engineers.\nII. 6 months is an adequate timeframe to prepare under proper coaching.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Medium",
        explanation: "The academy assumes demand for cracking programming interviews exists (I) and that 6 months is a realistic preparation duration with their guidance (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'You are cordially invited to our wedding on December 15.' - Invitation card.\nAssumptions:\nI. The recipient is expected to attend or acknowledge the occasion.\nII. The wedding will take place on December 15.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Medium",
        explanation: "An invitation assumes that the sender desires attendance/acknowledgment (I) and that the stated date is firm (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The municipality appealed to citizens to conserve drinking water due to delayed monsoons.'\nAssumptions:\nI. Citizens are capable of reducing their daily water consumption.\nII. The public will respond favorably to the municipality's appeal.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Medium",
        explanation: "An appeal is made under the assumption that the public can conserve water (I) and that citizens will cooperate (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'If you want to understand modern economics, you must read Adam Smith's Wealth of Nations.'\nAssumptions:\nI. Adam Smith's book contains foundational principles relevant to modern economics.\nII. No other book covers economic concepts.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "A", difficulty: "Medium",
        explanation: "The recommendation assumes Smith's book provides fundamental insights (I). It does not assume that no other book covers economics (II is an extreme, unwarranted negative assumption). Only I is implicit."
    },

    // HARD (11-15)
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The central bank has reduced benchmark interest rates by 50 basis points to stimulate private sector capital investment.'\nAssumptions:\nI. Lower borrowing costs will encourage corporations to borrow and expand business operations.\nII. Commercial banks will pass on the rate cut to retail and corporate borrowers.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "For the central bank's rate reduction to stimulate investment, it must assume that commercial banks will transmit the rate cut (II) and that businesses will respond by borrowing and expanding (I). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'To reduce urban traffic congestion, the city should implement congestion pricing for private vehicles entering the city center during peak hours.'\nAssumptions:\nI. The congestion toll will deter a significant portion of drivers from driving into the center during peak hours.\nII. Feasible public transit alternatives exist for commuters who choose not to drive.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither I nor II is implicit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "The proposal assumes that price sensitivity will curb vehicle entries (I) and that alternative transit options exist so the city center remains accessible (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'All newly constructed high-rise buildings must incorporate seismic dampeners to withstand earthquakes.' - Civil Engineering Directive.\nAssumptions:\nI. Seismic dampeners significantly mitigate structural damage during earthquakes.\nII. Future earthquakes of moderate or high magnitude are possible in this region.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Mandating expensive seismic equipment assumes that the technology is effective (I) and that the geographic area faces a real earthquake risk (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The CEO announced that bonuses this year will be tied strictly to customer satisfaction ratings rather than quarterly revenue.'\nAssumptions:\nI. Customer satisfaction ratings can be reliably measured.\nII. Focusing on customer satisfaction will not cause financial ruin for the company.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Tying compensation to a metric assumes the metric can be quantified accurately (I) and that prioritizing it is sustainable for the business (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The company switched from in-person interviews to automated AI video assessments to evaluate entry-level candidates.'\nAssumptions:\nI. AI assessments can accurately evaluate relevant skills and behavioral traits of candidates.\nII. Candidates will accept participating in an AI-driven interview process.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Adopting the tool assumes it produces valid evaluations (I) and that applicants will comply with the format (II). Both are implicit."
    },

    // ADVANCED (16-20)
    {
        topic: "Statement and Assumption",
        question: "Statement: 'A leading hospital introduced robotic-assisted surgery for cardiac procedures.'\nAssumptions:\nI. Robotic surgery offers precision or recovery advantages compared to conventional techniques.\nII. The surgical staff has been adequately trained to operate the robotic equipment safely.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Deploying the technology assumes clinical advantages justify the investment (I) and that surgeons are capable of operating it safely (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'We must diversify our company's product line beyond smartphones into wearable smart devices to safeguard long-term profitability.'\nAssumptions:\nI. Global smartphone market growth will eventually plateau or decline.\nII. The company possesses or can acquire the expertise to manufacture competitive wearable devices.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "The rationale for diversification rests on the premise that the core market cannot sustain indefinite growth alone (I) and that the company can realistically enter the new sector (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Implementing mandatory two-factor authentication (2FA) for all employee accounts will prevent corporate data breaches.'\nAssumptions:\nI. Stolen or compromised passwords are a major vulnerability for corporate data breaches.\nII. 2FA cannot be bypassed by any cybersecurity attack.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "Assumption I is implicit because 2FA directly secures passwords. Assumption II is an extreme, unrealistic absolute ('cannot be bypassed by any attack') that security architects do not assume. Only I is implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The university eliminated standardized test scores (SAT/ACT) from its admissions criteria to enhance diversity.'\nAssumptions:\nI. Standardized tests disproportionately disadvantage socioeconomically underprivileged applicants.\nII. Holistic review of grades and essays will increase campus demographic diversity.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Dropping tests to foster diversity assumes standardized scores created systemic barriers (I) and that alternative review methods will achieve the diversity goal (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The ministry launched a nationwide campaign offering tax rebates for homeowners installing rooftop solar panels.'\nAssumptions:\nI. Financial incentives are an effective mechanism to encourage green energy adoption.\nII. Rooftop solar technology is commercially accessible and suitable for many residential homes.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "A government rebate program assumes price sensitivity governs adoption (I) and that the technical solution is widely deployable on rooftops (II). Both are implicit."
    },

    // INTERVIEW (21-25)
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The autonomous vehicle manufacturer stated: Our self-driving fleet will reduce road fatalities by 90% once all human drivers are replaced.'\nAssumptions:\nI. The vast majority of traffic fatalities are caused by human behavioral error (distraction, intoxication, speeding).\nII. Autonomous driving software will function with near-zero fatal algorithmic or hardware failures.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Interview",
        explanation: "To achieve a 90% fatality reduction by eliminating human drivers, human error must be the predominant cause of current deaths (I) and the autonomous replacement systems must not introduce comparable fatal failure modes (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'Central banks exploring Central Bank Digital Currencies (CBDCs) aim to preserve the sovereign monetary anchor in an increasingly digitized payments ecosystem.'\nAssumptions:\nI. The proliferation of private cryptocurrencies and corporate digital payment platforms threatens the dominance of state fiat currency.\nII. Citizens will utilize a government-issued digital currency for everyday transactions.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Interview",
        explanation: "The stated motivation to preserve the monetary anchor assumes that private digital currencies pose a displacement threat (I) and that public adoption of CBDCs will succeed (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'A sovereign wealth fund divested all its holdings in fossil fuel exploration firms to future-proof its endowment against stranded asset risk.'\nAssumptions:\nI. Global transition to renewable energy will render unextracted hydrocarbon reserves economically unviable.\nII. Climate regulations and carbon pricing will materially impair fossil fuel equity valuations over the investment horizon.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Interview",
        explanation: "The fund's strategic decision specifically relies on the economic concept of stranded assets: reserves becoming unprofitable (I) due to impending environmental policy and market transitions (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The multinational pharmaceutical firm announced open-source licensing for its neglected tropical disease patents.'\nAssumptions:\nI. Commercial market profit incentives in developed nations are inadequate to drive manufacturing of affordable treatments for neglected tropical diseases.\nII. Generic drug manufacturers in developing nations have the technical capacity to synthesize the patented compounds.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Waiving patent protection assumes regular market mechanisms failed to supply affordable access (I) and that generic producers can produce the medicines when IP barriers are removed (II). Both are implicit."
    },
    {
        topic: "Statement and Assumption",
        question: "Statement: 'The cybersecurity agency recommended that critical infrastructure operators disconnect industrial control systems (SCADA) from the public internet.'\nAssumptions:\nI. Air-gapped isolation substantially decreases the attack surface against remote cyber intrusions.\nII. The operational benefits of internet connectivity for critical infrastructure are outweighed by the catastrophic risks of potential cyber sabotage.",
        option_a: "Only assumption I is implicit",
        option_b: "Only assumption II is implicit",
        option_c: "Both I and II are implicit",
        option_d: "Neither is implicit",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Recommending physical air-gapping assumes that isolation significantly hinders remote hacking (I) and that security risks outweigh convenience benefits (II). Both are implicit."
    },

    // =========================================================================
    // 14 - COURSE OF ACTION
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Course of Action",
        question: "Statement: Several students in a university dormitory fell ill with food poisoning after eating dinner at the campus cafeteria.\nCourses of Action:\nI. The cafeteria kitchen should be immediately inspected and samples of the food tested.\nII. All students should be expelled from the university.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Easy",
        explanation: "Inspecting the kitchen and testing food is a direct, practical, and logical response to food poisoning (I). Expelling victims is absurd and vindictive (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: Heavy monsoon rains have caused severe waterlogging in several low-lying neighborhoods of the city.\nCourses of Action:\nI. Emergency civic pumps should be deployed immediately to drain standing water.\nII. Citizens in severely flooded areas should be provided temporary shelter and potable water.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Deploying water pumps directly addresses the waterlogging (I), and providing shelter/clean water protects vulnerable displaced citizens (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: A significant number of counterfeit currency notes were detected in circulation in the regional retail market.\nCourses of Action:\nI. Banks and retail establishments should be mandated to install counterfeit detection scanners.\nII. All cash transactions in the country should be permanently outlawed.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Easy",
        explanation: "Detection scanners address the fake currency directly (I). Outlawing all cash transactions permanently is an extreme, impractical, and destructive overreaction (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: A primary school reported that several playground swings and slides are rusted and have sharp exposed bolts.\nCourses of Action:\nI. The damaged equipment should be cordoned off and repaired or replaced immediately.\nII. Children should be permanently banned from ever playing outdoors.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Easy",
        explanation: "Fixing damaged playground equipment ensures child safety (I). Permanently banning outdoor play is an unreasonable extreme measure (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: The air quality index (AQI) in the metropolitan area reached 'Hazardous' levels due to seasonal crop burning and vehicle emissions.\nCourses of Action:\nI. Schools should temporarily suspend outdoor athletic activities, and vulnerable citizens should be advised to wear masks.\nII. The government should enforce strict curbs on stubble burning and heavily penalize polluting vehicles.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Action I provides immediate public health protection, and Action II addresses the root causes of the pollution. Both follow."
    },

    // MEDIUM (6-10)
    {
        topic: "Course of Action",
        question: "Statement: A routine audit revealed that 25% of commercial trucks traveling on the interstate highway are exceeding legal cargo weight limits, accelerating roadway damage.\nCourses of Action:\nI. Highway authorities should establish automated weigh-in-motion stations and levy substantial fines on overloaded trucks.\nII. The highway should be completely closed to all commercial freight traffic indefinitely.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Weigh stations with fines enforce compliance directly (I). Closing an interstate to all freight would paralyze supply chains and the economy (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: A regional hospital faces a severe shortage of blood units in its emergency trauma bank.\nCourses of Action:\nI. The hospital should organize urgent public blood donation drives across local colleges and corporate offices.\nII. Elective, non-critical surgeries requiring substantial blood reserves should be temporarily rescheduled until stocks stabilize.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Holding blood drives increases supply (I), and prioritizing emergency trauma cases by postponing elective procedures manages critical demand responsibly (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Many public bus drivers have been observed skipping designated passenger stops along suburban routes to complete shifts faster.\nCourses of Action:\nI. GPS tracking and passenger complaint hotlines should be instituted to monitor bus adherence to routes.\nII. Drivers found guilty of bypassing stops without valid justification should face disciplinary warnings and financial penalties.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Monitoring through GPS and complaint hotlines ensures oversight (I), and disciplinary penalties deter future misconduct (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Over the past two years, an alarming number of seabirds were found dead on coastal beaches with stomachs filled with microplastic debris.\nCourses of Action:\nI. Coastal municipalities should implement stringent bans on single-use plastics and increase beach clean-up operations.\nII. All fishing and marine tourism along the entire coastline should be terminated forever.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Banning single-use plastics and organizing clean-ups tackles the plastic waste problem (I). Banning fishing and tourism permanently is disproportionate and ignores urban runoff plastic sources (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: A prominent e-commerce platform suffered a database intrusion where thousands of customer email addresses were compromised.\nCourses of Action:\nI. The company should notify affected customers immediately, advise password resets, and patch the security vulnerability.\nII. The company should permanently shut down its website and cease all business operations.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Customer notification and security remediation are standard, responsible cyber-incident protocols (I). Shutting down the entire business permanently over a credential leak is disproportionate (II). Only I follows."
    },

    // HARD (11-15)
    {
        topic: "Course of Action",
        question: "Statement: A major public bridge constructed over 40 years ago has developed extensive micro-fissures in its primary support piers, threatening catastrophic structural failure.\nCourses of Action:\nI. Heavy multi-axle freight vehicles should be immediately diverted to an alternate bypass route while engineers conduct ultrasonic structural testing.\nII. The city administration should allocate emergency capital funds for structural reinforcement or phased replacement of the bridge.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Diverting heavy loads provides immediate safety and allows testing (I), while allocating emergency repair/replacement capital addresses long-term structural viability (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: A severe outbreak of an antibiotic-resistant bacterial strain has been detected in the neonatal intensive care unit (NICU) of a metropolitan hospital.\nCourses of Action:\nI. The affected NICU wing should be isolated, deep sterilized, and all medical equipment sanitized according to strict infectious disease protocols.\nII. All healthcare workers who had direct contact with infected infants should undergo rigorous microbiological screening.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Isolation and sterilization halt hospital transmission (I), and screening clinical staff prevents staff from acting as asymptomatic carriers (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Despite large public subsidies, small farmers in a drought-prone district are experiencing chronic debt and crop failures due to excessive reliance on water-intensive cash crops.\nCourses of Action:\nI. Agricultural extension officers should train farmers to transition toward drought-resistant millets, pulses, and micro-drip irrigation.\nII. The government should establish subsidized crop insurance and local processing facilities for alternative dryland produce.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Agricultural training in resilient crops tackles the agronomic problem (I), while insurance and market infrastructure ensure economic viability for the transition (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: A whistleblowing report revealed that several private universities are granting accredited degrees to international students without requiring class attendance or examinations.\nCourses of Action:\nI. The higher education accreditation council should conduct a surprise forensic audit of attendance and grading records at the named institutions.\nII. If fraudulent practices are substantiated, the offending institutions' accreditations should be revoked and administrative officers prosecuted.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Forensic audits investigate the allegation objectively (I), and legal/accreditation sanctions enforce the law if fraud is confirmed (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: An artificial intelligence facial recognition tool deployed by city police has demonstrated a 35% false positive error rate when identifying members of minority communities.\nCourses of Action:\nI. The operational use of the facial recognition tool for criminal investigations should be suspended pending independent algorithmic audit and bias mitigation.\nII. Clear legal standards and human oversight protocols must be established before any biometric surveillance technology is re-authorized.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Suspending a flawed biometric tool prevents wrongful arrests (I), and instituting legal and technical safeguards establishes proper governance (II). Both follow."
    },

    // ADVANCED (16-20)
    {
        topic: "Course of Action",
        question: "Statement: Over-extraction of groundwater by bottling plants and commercial agriculture has depleted the regional water table by 15 meters in five years, causing residential wells to run dry.\nCourses of Action:\nI. The state water authority should place immediate caps on commercial extraction quotas and mandate rainwater recharge structures for industrial users.\nII. Municipal authorities should expedite piped water connectivity to impacted residential households.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Capping commercial over-extraction and mandating recharge addresses aquifer depletion (I), while extending piped water provides essential relief to residents (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: A clinical trial for an experimental oncology drug showed unprecedented tumor reduction, but 3% of patients developed severe cardiac inflammation (myocarditis).\nCourses of Action:\nI. Researchers should pause enrollment to identify genetic or physiological biomarkers that predispose patients to myocarditis.\nII. The trial protocol should be modified to include intensive cardiac monitoring and prophylactic anti-inflammatory regimens.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Investigating biomarkers explains the etiology of the adverse event (I), and enhanced cardiac screening preserves patient safety while preserving the drug's therapeutic potential (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Rising geopolitical tensions have disrupted international maritime shipping corridors, tripling freight transit times and causing factory supply-chain standstills.\nCourses of Action:\nI. Domestic manufacturing enterprises should diversify critical component suppliers and increase buffer inventory levels.\nII. National trade ministries should explore overland multimodal transit corridors and provide trade credit guarantees to domestic manufacturers.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Supply chain diversification and safety stocks mitigate enterprise risk (I), while overland alternatives and trade finance provide macro-level economic resilience (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: An electric utility's regional grid suffered cascading blackouts during an extreme winter freeze as uninsulated natural gas pipes froze and wind turbine de-icing failed.\nCourses of Action:\nI. The energy regulatory commission should mandate rigorous cold-weather winterization standards for both gas pipelines and renewable turbines.\nII. The grid operator should incorporate battery storage systems and demand-response programs to absorb sudden generation shortfalls.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Winterization targets the mechanical point of failure across energy sources (I), while storage and demand-response provide grid resilience against supply shocks (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: A surge in sophisticated phishing attacks using deepfake CEO audio has resulted in unauthorized wire transfers of millions of dollars at several financial institutions.\nCourses of Action:\nI. Banks and corporations should mandate multi-party verification protocols and cryptographic out-of-band confirmation for all high-value capital transfers.\nII. Financial institutions should conduct mandatory biometric spoof-awareness training for all treasury and accounting personnel.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Multi-party out-of-band authorization stops single-point-of-failure audio deception (I), and employee security training builds organizational immunity against deepfakes (II). Both follow."
    },

    // INTERVIEW (21-25)
    {
        topic: "Course of Action",
        question: "Statement: A critical vulnerability (Zero-Day) has been uncovered in a ubiquitous open-source cryptographic library used by 70% of global internet servers, allowing remote code execution.\nCourses of Action:\nI. Cybersecurity agencies should issue an emergency advisory, release a verified security patch immediately, and coordinate automated scanning tools for enterprise remediation.\nII. Organizations worldwide should shut down the entire global internet until all servers are patched.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Coordinated vulnerability disclosure, rapid patch deployment, and automated scanning represent industry standard best practice (I). Shutting down the entire global internet is impossible and would cause catastrophic global economic collapse (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: A sovereign nation's currency has depreciated by 40% against major global currencies in six months, driving double-digit domestic inflation and threatening foreign debt default.\nCourses of Action:\nI. The central bank should tighten monetary policy, enforce macroprudential capital flow management, and negotiate foreign exchange swap lines with international multilateral institutions.\nII. The government should immediately nationalize all private bank deposits and freeze all domestic consumer bank accounts indefinitely.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Monetary tightening and external currency swap arrangements are rational macroeconomic stabilization tools (I). Confiscating and freezing private deposits destroys property rights, causes run-on-banks, and precipitates financial collapse (II). Only I follows."
    },
    {
        topic: "Course of Action",
        question: "Statement: Clinical surveillance indicates that a novel zoonotic respiratory virus with a 10% mortality rate and high aerosol transmissibility has emerged in two international transit hub cities.\nCourses of Action:\nI. Public health authorities should initiate rapid genomic sequencing, establish contact-tracing sentinel surveillance, and enforce targeted airport health screenings.\nII. Vaccine developers and public health consortia should fast-track preclinical mRNA candidate formulations and coordinate clinical testing platforms.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Surveillance and screening detect and contain community transmission (I), while proactive vaccine platform acceleration ensures therapeutic preparedness against high mortality (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Satellite telemetry reveals that a decommissioned communications satellite has suffered an orbital collision, generating an expanding cloud of high-velocity space debris threatening active low-Earth orbit satellites.\nCourses of Action:\nI. Space agencies should issue real-time conjunction warnings enabling active satellites to execute autonomous orbital collision avoidance burns.\nII. International space regulatory bodies should accelerate binding treaties for active orbital debris removal and post-mission disposal standards.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Immediate orbital avoidance burns protect active satellites from immediate destruction (I), and international debris removal agreements prevent future Kessler syndrome scenarios (II). Both follow."
    },
    {
        topic: "Course of Action",
        question: "Statement: Widespread algorithmic trading flash-crashes have caused acute liquidity evaporation in equity markets during periods of heightened market volatility.\nCourses of Action:\nI. Financial market exchanges should implement calibrated dynamic circuit breakers and minimum quote lifetime rules to stabilize order book depth.\nII. Regulatory oversight bodies should mandate rigorous stress-testing and automated kill-switches for high-frequency algorithmic market-making models.",
        option_a: "Only I follows", option_b: "Only II follows", option_c: "Both I and II follow", option_d: "Neither follows",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Exchange circuit breakers prevent uncontrolled price cascades (I), and algorithmic stress-testing and kill-switches ensure trading algorithms do not amplify systemic liquidity dry-ups (II). Both follow."
    },

    // =========================================================================
    // 15 - STATEMENT AND CONCLUSION
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Statement and Conclusion",
        question: "Statements: All cars are vehicles. All vehicles have wheels.\nConclusions:\nI. All cars have wheels.\nII. All vehicles are cars.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Easy",
        explanation: "Since cars are within vehicles and vehicles have wheels, all cars must have wheels (I follows). However, vehicles include trucks and motorcycles, so not all vehicles are cars (II does not follow)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: In a one-day cricket match, the total runs made by a team were 200. Out of these, 160 runs were made by spinners.\nConclusions:\nI. 80% of the team consists of spinners.\nII. The opening batsmen were spinners.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "D", difficulty: "Easy",
        explanation: "Runs scored by spinners (160/200 = 80%) does not mean 80% of players are spinners (one spinner could score 160). The statement also says nothing about whether opening batsmen were spinners. Neither follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Regular physical exercise reduces the risk of heart disease.\nConclusions:\nI. People who exercise regularly never suffer from heart disease.\nII. Leading a sedentary lifestyle increases the probability of heart disease.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "B", difficulty: "Easy",
        explanation: "Exercise 'reduces risk'; it does not provide absolute immunity ('never' in I is invalid). Since exercise lowers risk, a sedentary life naturally correlates with increased probability (II follows)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statements: Some apples are oranges. All oranges are grapes.\nConclusions:\nI. Some apples are grapes.\nII. All grapes are oranges.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Easy",
        explanation: "The intersection between apples and oranges is entirely contained inside grapes; hence some apples are grapes (I follows). But grapes can be larger than oranges, so II does not follow."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Only high-achieving students receive the university merit scholarship. Priya received the university merit scholarship.\nConclusions:\nI. Priya is a high-achieving student.\nII. Students who do not achieve highly do not receive the scholarship.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "C", difficulty: "Easy",
        explanation: "The word 'Only' establishes an exclusive condition: Scholarship -> High-achieving. Since Priya got the scholarship, she is high-achieving (I). Conversely, non-high-achievers cannot receive it (II). Both follow."
    },

    // MEDIUM (6-10)
    {
        topic: "Statement and Conclusion",
        question: "Statement: A company's revenue doubled in 2023, while its net profit margin remained constant at 15%.\nConclusions:\nI. The company's total net profit in dollars doubled in 2023.\nII. The company increased its sales prices in 2023.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Net profit = Revenue × Margin. If revenue doubles and the margin remains 15%, net profit in absolute terms doubles (I follows). Doubled revenue could be driven by sales volume rather than price hikes, so II does not follow."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Economic development in country X has led to a 50% expansion of the urban middle class, but income inequality between rural and urban sectors has widened.\nConclusions:\nI. Country X's rural population did not benefit equally from economic development.\nII. Country X should stop industrial urban development.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "The widening inequality directly demonstrates unequal distribution of economic benefits (I follows). Halting urban development is a subjective policy proposal, not a factual logical conclusion (II does not follow)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Solar power generation in State Y increased by 300% over three years, making it the cheapest source of wholesale daytime electricity in the state.\nConclusions:\nI. State Y generates all of its electrical power from solar energy.\nII. Daytime wholesale electricity costs have dropped compared to three years ago.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "B", difficulty: "Medium",
        explanation: "A 300% growth does not mean solar produces 100% of the state's total energy (I is false). If solar grew by 300% and is now the cheapest source, daytime wholesale costs have declined (II follows)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: All individuals who practice meditation daily report lower stress levels. Anil does not meditate daily.\nConclusions:\nI. Anil suffers from high stress levels.\nII. Only meditation can reduce stress.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "D", difficulty: "Medium",
        explanation: "The premise says: Meditate -> Lower stress. It does not state the inverse (Not meditate -> High stress; this is the Inverse Fallacy). Nor does it state meditation is the 'only' way. Neither follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: The national literacy rate rose from 65% to 82% over the last decade, with female literacy recording the fastest rate of growth.\nConclusions:\nI. The education initiatives implemented during the decade positively influenced literacy.\nII. The absolute number of literate females now exceeds literate males in the country.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Medium",
        explanation: "A 17% national surge with female acceleration demonstrates positive educational progress (I follows). Having the fastest 'rate of growth' does not mean total female literates exceed male literates (percentage growth vs baseline volume). Only I follows."
    },

    // HARD (11-15)
    {
        topic: "Statement and Conclusion",
        question: "Statement: In an international science olympiad, all medalists demonstrated advanced mastery in calculus. Some medalists were high school freshmen.\nConclusions:\nI. Some high school freshmen demonstrated advanced mastery in calculus.\nII. All students with advanced mastery in calculus win medals in the olympiad.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Hard",
        explanation: "The freshmen medalists possess advanced calculus mastery (since all medalists do), so I follows. But not everyone who masters calculus wins an olympiad medal (converse is invalid), so II does not follow."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Nations that spend more than 3% of their GDP on scientific research and development produce, on average, 4 times more patented innovations per capita than nations spending less than 1%.\nConclusions:\nI. R&D expenditure is positively correlated with patent output per capita.\nII. Increasing R&D expenditure to 3% guarantees that any nation will become a global innovation leader.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Hard",
        explanation: "The 4-fold increase directly reflects positive correlation (I follows). Conclusion II uses the extreme word 'guarantees', which is unsupportable because innovation depends on institutional factors, education, and legal protection. Only I follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: During peak heatwaves, electricity grids with higher shares of interconnected battery storage experienced zero rolling blackouts compared to non-battery regions.\nConclusions:\nI. Battery storage buffers grid reliability during extreme weather demand spikes.\nII. Fossil fuel plants are no longer needed on the electric grid.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Hard",
        explanation: "The operational survival of battery-equipped grids confirms battery buffering value (I follows). The statement says nothing about eliminating fossil fuel plants entirely (II is an extreme, unwarranted extrapolation). Only I follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: A corporate survey of 10,000 workers showed that employees with hybrid schedules reported higher work-life balance scores than fully in-office or fully remote workers.\nConclusions:\nI. A balance of social office interaction and home flexibility optimizes perceived employee well-being.\nII. Fully remote work is completely detrimental to employee mental health.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Hard",
        explanation: "Hybrid outperforming both extremes logically aligns with optimizing social interaction and flexibility (I follows). Conclusion II is an extreme, unjustified assertion ('completely detrimental'). Only I follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: No software application that has unpatched vulnerabilities is immune to cyberattacks. System Q has unpatched vulnerabilities.\nConclusions:\nI. System Q is vulnerable to cyberattacks.\nII. System Q has already been hacked by cybercriminals.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Hard",
        explanation: "Since unpatched apps are not immune, System Q is vulnerable (I follows). However, being vulnerable does not mean a hack has already taken place (II is an unproven assumption). Only I follows."
    },

    // ADVANCED (16-20)
    {
        topic: "Statement and Conclusion",
        question: "Statement: In clinical trials, targeted immunotherapy eradicated leukemia cells in 80% of refractory patients who had failed conventional chemotherapy.\nConclusions:\nI. Targeted immunotherapy offers a viable therapeutic mechanism for patients resistant to chemotherapy.\nII. Targeted immunotherapy will completely replace chemotherapy for all types of cancer within one year.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "An 80% success rate in refractory leukemia demonstrates a viable therapeutic mechanism (I follows). Extrapolating this to all cancers and asserting complete replacement within a year is a wildly unsubstantiated extreme claim (II does not follow)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Automated warehouse robotics increased package fulfillment throughput by 65% while reducing workplace ergonomic injuries by 40%.\nConclusions:\nI. Integrating robotics in logistics operations can simultaneously enhance operational speed and worker safety.\nII. Human warehouse workers will be entirely eliminated from logistics by 2030.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "The stated facts report both increased throughput (+65%) and decreased injuries (-40%), directly proving Conclusion I. Conclusion II is an unproven speculative forecast not found in the premises."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: In deep-sea ecosystems around hydrothermal vents where sunlight never penetrates, diverse animal communities thrive solely on chemosynthetic bacteria that synthesize energy from hydrogen sulfide.\nConclusions:\nI. Photosynthesis driven by solar radiation is not the universal biological prerequisite for sustaining complex animal life.\nII. All ocean creatures can survive without sunlight.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "Vent communities relying on chemosynthesis disprove the universal necessity of sunlight for animal life (I follows). Conclusion II overgeneralizes to 'all ocean creatures', which is false since surface marine life relies directly on photosynthetic food chains. Only I follows."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Countries that introduced universal pre-kindergarten education experienced higher adult high-school graduation rates and lower adult incarceration rates over a 25-year longitudinal study.\nConclusions:\nI. Early childhood educational investments yield long-term societal and educational benefits.\nII. Pre-kindergarten education guarantees that an individual will never commit a crime.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "The 25-year longitudinal data substantiates long-term educational and societal benefits (I follows). Conclusion II asserts an absolute guarantee of zero crime, which is logically invalid and contradicted by statistical reality."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Quantum computers utilizing superconducting qubits can factor large integers exponentially faster than classical supercomputers using Shor's algorithm.\nConclusions:\nI. Current RSA public-key encryption protocols based on the difficulty of integer factorization are vulnerable to sufficiently powerful quantum computers.\nII. Classical supercomputers will immediately be discarded and scrapped.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "Since RSA relies on the computational hardness of factoring large integers, Shor's algorithm on quantum machines threatens RSA security (I follows). Classical computers will continue handling general-purpose computing tasks, so II is absurd."
    },

    // INTERVIEW (21-25)
    {
        topic: "Statement and Conclusion",
        question: "Statement: Empirical macroeconomic data shows that during severe balance-sheet recessions, zero lower bound interest rates fail to stimulate private borrowing because private households and corporations prioritize debt minimization over profit maximization.\nConclusions:\nI. Standard monetary policy transmission channels are impaired during balance-sheet recessions.\nII. Fiscal stimulus and government deficit spending become essential to avert economic depression when monetary policy is caught in a liquidity trap.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "C", difficulty: "Interview",
        explanation: "When zero rates fail to stimulate borrowing because entities prioritize deleveraging, monetary transmission is broken (I follows). In modern macroeconomic theory (Koo's Balance Sheet Recession), government fiscal intervention becomes the necessary compensatory mechanism to absorb private savings and maintain aggregate demand (II follows). Both follow."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: In deep neural networks, increasing model parameter size and training compute exhibits power-law scaling in test loss reduction across multiple modalities.\nConclusions:\nI. Scaling model parameters and computational resources reliably produces predictable reductions in empirical cross-entropy loss.\nII. Large language models possess genuine subjective consciousness and human emotional empathy.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "The empirical power-law scaling of test loss confirms predictable mathematical performance gains (I follows). Concluding that statistical language models have subjective consciousness is an unscientific philosophical leap (II does not follow)."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: In clinical genomics, polygenic risk scores (PRS) calculate disease predisposition by aggregating thousands of small-effect genetic variants across the genome.\nConclusions:\nI. Many complex diseases are not caused by single monogenic mutations but by the cumulative interplay of multiple genetic variants.\nII. An individual with a high polygenic risk score for heart disease is irrevocably destined to suffer a heart attack regardless of lifestyle.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Polygenic scores aggregating thousands of variants proves complex diseases stem from multi-gene interplay (I follows). Genetic risk is probabilistic, not deterministic, and lifestyle factors can mitigate risk, so II is false."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: The transition to electric vehicles (EVs) significantly reduces direct tailpipe carbon emissions, but the lifecycle carbon benefit depends heavily on whether regional electricity grids are powered by fossil fuels or renewables.\nConclusions:\nI. Decarbonizing electric power generation is crucial to maximizing the environmental impact of automotive electrification.\nII. Electric vehicles powered on 100% coal-fired grids generate zero environmental footprint.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Since lifecycle benefits depend on grid generation sources, decarbonizing the power grid is essential to maximize EV benefits (I follows). Conclusion II is factually and logically false, as coal-powered grids generate upstream emissions."
    },
    {
        topic: "Statement and Conclusion",
        question: "Statement: Blockchain consensus protocols operating under Proof-of-Stake eliminate over 99.9% of the computational electrical energy consumed by Proof-of-Work mining mechanisms while maintaining cryptographic Byzantine Fault Tolerance.\nConclusions:\nI. A blockchain network can achieve distributed consensus and security without massive thermodynamic energy expenditure.\nII. Proof-of-Stake systems are completely free from any game-theoretic attack vectors or wealth centralization risks.",
        option_a: "Only conclusion I follows",
        option_b: "Only conclusion II follows",
        option_c: "Both conclusions follow",
        option_d: "Neither conclusion follows",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Proof-of-Stake achieving BFT with 99.9% less energy demonstrates that distributed security does not require massive energy consumption (I follows). Conclusion II is an absolute claim refuted by known staking centralization and 'nothing-at-stake' nuances."
    },

    // =========================================================================
    // 16 - THEME DETECTION
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Theme Detection",
        question: "Passage: 'A healthy lifestyle is not about strict diets or intense gym sessions that leave you exhausted. It is about making sustainable, everyday choices—drinking enough water, sleeping seven to eight hours, eating nutritious meals, and staying active throughout the day. Consistency over time produces lasting health.'\nWhat is the main theme of the passage?",
        option_a: "Extreme diets are the fastest route to fitness.",
        option_b: "Sustainable habits and consistency are the keys to a healthy lifestyle.",
        option_c: "Sleep is more important than nutrition and exercise.",
        option_d: "Gym memberships are unnecessary for staying fit.",
        correct_answer: "B", difficulty: "Easy",
        explanation: "The passage emphasizes that health stems from sustainable daily habits and long-term consistency rather than extreme or temporary measures."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Reading fiction allows us to step into the lives of characters across diverse cultures and historical eras. By experiencing their challenges, hopes, and sorrows, readers develop deeper empathy and emotional intelligence in their real-world interactions.'\nWhat is the main theme of the passage?",
        option_a: "Reading fiction improves vocabulary and spelling.",
        option_b: "Fiction enhances empathy by exposing readers to diverse human perspectives.",
        option_c: "Historical novels are superior to modern literature.",
        option_d: "People who read fiction have fewer real-world problems.",
        correct_answer: "B", difficulty: "Easy",
        explanation: "The central thesis of the paragraph is that reading fiction builds empathy and emotional intelligence by allowing readers to experience other people's perspectives."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Time management is not simply about packing as many tasks into a day as possible. True productivity involves identifying high-priority goals, eliminating non-essential distractions, and maintaining energy reserves for meaningful work.'\nWhat is the main theme of the passage?",
        option_a: "Working longer hours guarantees career advancement.",
        option_b: "True productivity focuses on prioritization and eliminating distractions rather than just doing more tasks.",
        option_c: "Multitasking is the best way to handle heavy workloads.",
        option_d: "Daily planners are essential tools for office workers.",
        correct_answer: "B", difficulty: "Easy",
        explanation: "The passage directly contrasts packing tasks with meaningful productivity, arguing that focusing on high-priority goals and eliminating distractions is true productivity."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Mistakes are inevitable in any creative or learning process. Rather than treating errors as shameful failures, successful innovators treat them as informative feedback that reveals what does not work, guiding them closer to a workable solution.'\nWhat is the main theme of the passage?",
        option_a: "Innovators never make errors in their work.",
        option_b: "Mistakes should be embraced as valuable feedback in the learning and innovation process.",
        option_c: "Creativity can only be learned in formal academic settings.",
        option_d: "Failure is the only proof of hard work.",
        correct_answer: "B", difficulty: "Easy",
        explanation: "The author argues that mistakes should be viewed constructively as feedback that helps guide innovation and learning."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Public libraries have evolved far beyond quiet warehouses of paper books. Today, they serve as community innovation hubs, offering free access to high-speed internet, digital literacy workshops, 3D printing labs, and public meeting spaces for civic engagement.'\nWhat is the main theme of the passage?",
        option_a: "Paper books are becoming completely obsolete.",
        option_b: "Modern public libraries have transformed into dynamic community and digital technology hubs.",
        option_c: "All public libraries now require digital access fees.",
        option_d: "3D printing is the most popular service in modern libraries.",
        correct_answer: "B", difficulty: "Easy",
        explanation: "The passage highlights the evolution of libraries from book repositories into multi-faceted community innovation and digital hubs."
    },

    // MEDIUM (6-10)
    {
        topic: "Theme Detection",
        question: "Passage: 'The digital age has brought infinite access to information, yet it has also brought an epidemic of distraction. When notifications fragment our concentration every few minutes, we lose the capacity for deep work—the ability to focus without distraction on cognitively demanding tasks. Without deep work, true creativity and mastery remain out of reach.'\nWhat is the central theme of the passage?",
        option_a: "Smartphones should be banned in professional workplaces.",
        option_b: "Constant digital distractions undermine the deep concentration necessary for high-level creative and intellectual achievement.",
        option_c: "Social media companies are entirely responsible for declining cognitive scores.",
        option_d: "Modern technology has made cognitively demanding work obsolete.",
        correct_answer: "B", difficulty: "Medium",
        explanation: "The passage focuses on the tension between digital distraction and 'deep work', concluding that distraction impairs high-level creativity and intellectual mastery."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Urban green spaces—parks, community gardens, and tree-lined corridors—are often viewed as aesthetic luxuries. However, epidemiological studies prove they are vital public health infrastructure. Green spaces cool urban heat islands, filter airborne particulates, reduce cardiovascular stress, and foster community social cohesion.'\nWhat is the primary theme of the passage?",
        option_a: "City parks cost too much municipal tax revenue to maintain.",
        option_b: "Urban green spaces are critical health and environmental infrastructure, not merely aesthetic luxuries.",
        option_c: "Urban heat islands can only be eliminated by planting trees.",
        option_d: "Suburban living is healthier than city living.",
        correct_answer: "B", difficulty: "Medium",
        explanation: "The author explicitly refutes the idea that green spaces are just luxuries, establishing that they serve as vital public health and environmental infrastructure."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Throughout history, scientific progress has rarely been a tidy, linear progression of obvious discoveries. Rather, it is characterized by unexpected anomalies, fierce paradigm shifts, and stubborn resistance from established authorities before novel hypotheses gain acceptance.'\nWhat is the main theme of the passage?",
        option_a: "Established scientific authorities always welcome new ideas.",
        option_b: "Scientific advancement is an irregular, contested process involving paradigm shifts rather than smooth linear progress.",
        option_c: "Ancient science was superior to modern methodology.",
        option_d: "All hypotheses eventually become accepted scientific laws.",
        correct_answer: "B", difficulty: "Medium",
        explanation: "The passage describes the messy, non-linear reality of scientific advancement, marked by anomalies, resistance, and paradigm shifts."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'In our rush to celebrate economic metrics like GDP growth, we frequently overlook the depletion of natural capital. A nation can artificially inflate its GDP by cutting down old-growth forests and over-pumping aquifers, yet this is akin to a household selling off its furniture to pay for dinner.'\nWhat is the main theme of the passage?",
        option_a: "GDP growth is an incomplete and potentially misleading measure of true national wealth and ecological sustainability.",
        option_b: "Timber harvesting should be completely prohibited globally.",
        option_c: "Households should invest in commercial real estate.",
        option_d: "Economic growth is impossible without depleting natural resources.",
        correct_answer: "A", difficulty: "Medium",
        explanation: "The author warns that standard GDP measurements fail to account for the depletion of natural resources, making it an incomplete metric of true sustainable prosperity."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Mentorship in the corporate sphere is frequently misunderstood as a one-directional lecture where a veteran executive instructs a junior employee. In truth, the most impactful mentorship is reciprocal: senior leaders gain fresh insights into emerging cultural trends and digital tools, while junior associates gain strategic perspective and organizational navigation.'\nWhat is the central theme of the passage?",
        option_a: "Senior executives do not need technical advice from junior staff.",
        option_b: "Effective mentorship is a mutually beneficial, two-way exchange of perspectives rather than top-down instruction.",
        option_c: "Junior employees make better executives than older managers.",
        option_d: "Formal corporate mentoring programs have failed universally.",
        correct_answer: "B", difficulty: "Medium",
        explanation: "The core idea is that mentorship is reciprocal, offering mutual benefits to both senior mentors and junior mentees."
    },

    // HARD (11-15)
    {
        topic: "Theme Detection",
        question: "Passage: 'The concept of meritocracy promises that individuals rise purely on talent and effort. However, this ideal obscures how parental wealth, early social networks, and educational access quietly tilt the playing field. When those who succeed believe their triumph is entirely self-made, they look upon the disadvantaged with condescension rather than solidarity, eroding social trust.'\nWhat is the primary theme of the passage?",
        option_a: "Effort and talent have no influence on personal career success.",
        option_b: "Uncritical faith in meritocracy masks systemic advantages and fosters divisive hubris that damages social solidarity.",
        option_c: "All private schools should be nationalized by the state.",
        option_d: "Social trust can only be rebuilt through economic equality.",
        correct_answer: "B", difficulty: "Hard",
        explanation: "The author critiques the myth of pure meritocracy, arguing that ignoring systemic head starts breeds hubris among the successful and erodes social solidarity."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Architecture is not merely the engineering of physical shelters; it is the spatial choreography of human behavior. The layout of an office, the acoustics of a lecture hall, or the openness of a town square subtly dictate whether people collaborate, isolate, engage in contemplative thought, or feel alienated.'\nWhat is the central thesis of the passage?",
        option_a: "Architectural design profoundly shapes human interactions, emotions, and social dynamics.",
        option_b: "Modern buildings focus too much on acoustics rather than aesthetics.",
        option_c: "Engineers are more important than architects in construction.",
        option_d: "Open-plan offices are superior to private cubicles.",
        correct_answer: "A", difficulty: "Hard",
        explanation: "The passage centers on the power of architectural spaces to shape, guide, and influence human behavior and social connection."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'The paradox of modern consumer choice is that having dozens of competing brands often leaves shoppers more anxious than satisfied. When presented with thirty varieties of jam or television models, consumers spend excessive cognitive energy comparing marginal features, ultimately fearing they made a suboptimal choice.'\nWhat is the main theme of the passage?",
        option_a: "Consumers prefer having only one brand of each product.",
        option_b: "Excessive choices can induce decision paralysis and dissatisfaction rather than greater happiness.",
        option_c: "Product advertising intentionally deceives retail shoppers.",
        option_d: "Grocery stores should discontinue specialty food items.",
        correct_answer: "B", difficulty: "Hard",
        explanation: "This summarizes the 'Paradox of Choice': an abundance of options generates cognitive fatigue, anxiety, and post-purchase regret."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Algorithmic curation on social media platforms prioritizes emotional engagement over factual veracity. Because outrage and confirmation bias trigger the fastest shares and longest screen times, online discourse inevitably fragments into hyper-partisan echo chambers where compromise is perceived as betrayal.'\nWhat is the central theme of the passage?",
        option_a: "Social media platforms should be shut down by international courts.",
        option_b: "Engagement-driven algorithms promote outrage, fragmenting public discourse and undermining political compromise.",
        option_c: "Fact-checking organizations have successfully eliminated online misinformation.",
        option_d: "Political compromise has never existed in human democracy.",
        correct_answer: "B", difficulty: "Hard",
        explanation: "The passage argues that algorithms optimized for engagement fuel outrage and tribalism, crippling constructive political dialogue."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Biodiversity is often defended on romantic or ethical grounds, but its most critical value is ecological resilience. A monoculture crop is vulnerable to annihilation by a single pathogen, whereas a biodiverse ecosystem contains natural genetic redundancies and predation checks that buffer it against environmental catastrophe.'\nWhat is the primary theme of the passage?",
        option_a: "Ethical arguments for conservation are completely invalid.",
        option_b: "Biodiversity's paramount value lies in providing functional ecological resilience and stability against systemic threats.",
        option_c: "Genetically modified crops are immune to plant diseases.",
        option_d: "Hydrothermal ecosystems are more resilient than agricultural systems.",
        correct_answer: "B", difficulty: "Hard",
        explanation: "The author argues that biodiversity's most important attribute is its pragmatic role in conferring resilience and stability against environmental shocks."
    },

    // ADVANCED (16-20)
    {
        topic: "Theme Detection",
        question: "Passage: 'The commodification of leisure in contemporary culture has transformed relaxation into an optimized performance. Rather than embracing unstructured idleness, individuals schedule mindfulness retreats, track sleep quality on wearable biometric sensors, and consume self-help audiobooks at double speed, turning rejuvenation into another demanding chore.'\nWhat is the core theme of the passage?",
        option_a: "Wearable fitness trackers provide inaccurate health metrics.",
        option_b: "The modern pressure to optimize and commodify leisure subverts authentic rest into performative productivity.",
        option_c: "Audiobooks should only be listened to at normal speed.",
        option_d: "Meditation retreats are effective for executive stress.",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "The passage critiques how modern hustle culture invades leisure, turning restorative rest into an anxiety-driven optimization task."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Language is not an inert mirror reflecting an objective reality; it is a cognitive scaffolding that filters and shapes human perception. Cultures whose languages lack grammatical future tenses often exhibit higher personal savings rates, as speakers perceive tomorrow not as a detached distant era, but as an immediate continuation of today.'\nWhat is the central thesis of the passage?",
        option_a: "All world languages share identical grammatical syntax.",
        option_b: "Linguistic structures actively shape cognitive thought, perception, and behavioral decisions.",
        option_c: "Nations with future-tense verbs have higher economic growth.",
        option_d: "Grammar rules are irrelevant to economic decision-making.",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "This describes the linguistic relativity principle (Sapir-Whorf hypothesis): language structures actively influence how speakers perceive the world and make choices."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'The cult of speed in contemporary software development—popularized by mantras like \"move fast and break things\"—has created staggering technical and societal debt. In the race to deploy features ahead of rivals, security architecture, data privacy, and ethical guardrails are treated as friction, leaving digital infrastructure vulnerable to exploitation.'\nWhat is the primary theme of the passage?",
        option_a: "Software companies should never release product updates.",
        option_b: "Prioritizing rapid deployment over security and ethics creates severe vulnerabilities and technical debt.",
        option_c: "Startup founders should be legally prohibited from writing code.",
        option_d: "Open-source software is inherently faster than proprietary platforms.",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "The author argues that prioritizing reckless speed over deliberate architectural and ethical safeguards produces dangerous long-term vulnerabilities."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'The illusion of historical inevitability leads people to believe that current democratic and technological liberties were guaranteed outcomes of civilizational progress. In reality, every civic right was wrested through contingent, messy struggles that could easily have failed, and their preservation requires perpetual institutional vigilance.'\nWhat is the main theme of the passage?",
        option_a: "Human progress is an automated, inevitable historical law.",
        option_b: "Democratic liberties are fragile, hard-won historical achievements that require active, ongoing protection.",
        option_c: "Modern democracies are facing imminent collapse.",
        option_d: "Historical events are purely accidental with no underlying patterns.",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "The author warns against the complacency of believing democratic rights are automatic, emphasizing that they are fragile and require constant vigilance."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Anthropomorphism in artificial intelligence marketing—referring to models as \"thinking\", \"feeling\", or possessing \"intentions\"—is a deliberate rhetorical sleight of hand. By masking complex statistical matrix operations behind humanized vocabulary, corporations evade accountability for algorithmic bias and mislead the public about the true mechanics of machine learning.'\nWhat is the central theme of the passage?",
        option_a: "Machine learning algorithms have developed authentic human feelings.",
        option_b: "Anthropomorphizing AI obscures its statistical reality and deflects corporate accountability.",
        option_c: "Computer science terminology should be banned in marketing.",
        option_d: "AI models will replace human engineers within a decade.",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "The passage argues that humanizing AI is misleading marketing that hides statistical mechanics and helps companies dodge accountability for flawed algorithms."
    },

    // INTERVIEW (21-25)
    {
        topic: "Theme Detection",
        question: "Passage: 'In financial markets, the doctrine of \"efficient market hypothesis\" asserts that asset prices always reflect all available information. Yet financial history demonstrates that asset markets are prone to endogenous feedback loops: rising prices breed optimistic narratives, which attract speculative leverage, driving prices further from fundamentals until the speculative bubble bursts under its own fragility.'\nWhat is the central theme of the passage?",
        option_a: "Asset prices are always mathematically accurate and rational.",
        option_b: "Financial markets are driven by reflexive feedback loops and speculation rather than perfect informational efficiency.",
        option_c: "Speculative bubbles only occur in real estate markets.",
        option_d: "Central banks should set all stock market prices directly.",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The passage critiques the efficient market hypothesis by contrasting it with George Soros's concept of reflexivity: endogenous psychological and leverage loops that detach prices from fundamentals."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'The precautionary principle in environmental law states that when human activity poses threats of serious or irreversible harm to public health or ecosystems, lack of full scientific certainty should not be used as a reason for postponing cost-effective preventive measures. Waiting for absolute scientific consensus in complex open ecosystems is often an invitation to irrevocable catastrophe.'\nWhat is the core theme of the passage?",
        option_a: "Scientific research is useless in environmental policy.",
        option_b: "Proactive preventive action must be taken to mitigate irreversible ecological risks even in the absence of absolute certainty.",
        option_c: "All industrial activity must cease until environmental impacts are proven zero.",
        option_d: "Economic cost-benefit analysis should always supersede ecosystem preservation.",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The passage outlines the core rationale of the Precautionary Principle: demanding 100% scientific certainty before acting risks irreversible ecological disaster."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'Throughout the history of philosophical thought, reductionism—the belief that any complex system can be fully understood by breaking it down into its constituent parts—has yielded immense scientific breakthroughs. Yet when applied to consciousness, culture, or macroeconomic networks, reductionism falters: emergent phenomena arise from non-linear interactions that cannot be predicted merely by analyzing individual components in isolation.'\nWhat is the primary theme of the passage?",
        option_a: "Reductionism is completely useless across all scientific disciplines.",
        option_b: "While reductionism is powerful, complex systems display emergent properties that cannot be understood by examining components in isolation.",
        option_c: "Consciousness can be fully explained by simple Newtonian mechanics.",
        option_d: "Non-linear mathematics has eliminated all reductionist sciences.",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The author argues that reductionism has fundamental limits in complex systems where emergent properties cannot be deduced from isolated parts alone."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'In modern statecraft, the concept of \"soft power\"—the ability to affect others through attraction, cultural appeal, and moral legitimacy rather than coercion or economic payment—is increasingly potent. While military armaments can compel submission through fear, soft power cultivates voluntary alignment and enduring international cooperation that brute force can never achieve.'\nWhat is the central theme of the passage?",
        option_a: "Military defense budgets should be reduced to zero by all nations.",
        option_b: "Soft power creates enduring international influence through attraction and legitimacy, which military coercion cannot match.",
        option_c: "Economic sanctions are the only effective tool of foreign policy.",
        option_d: "Cultural exports have replaced the need for diplomatic embassies.",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The passage highlights the efficacy of soft power (attraction, legitimacy) in building voluntary and lasting international partnerships compared to military force."
    },
    {
        topic: "Theme Detection",
        question: "Passage: 'The tragedy of modern educational credentialism is that degrees have increasingly become positional goods rather than genuine indicators of capability. As higher percentages of the workforce acquire university diplomas, employers raise baseline degree requirements not because jobs have grown more technically demanding, but merely to filter the deluge of applications, locking qualified non-degree holders out of economic mobility.'\nWhat is the primary theme of the passage?",
        option_a: "University education has become too rigorous for modern students.",
        option_b: "Credential inflation turns degrees into arbitrary filtering mechanisms rather than measures of actual job competence, impairing mobility.",
        option_c: "All jobs should immediately eliminate educational requirements.",
        option_d: "Vocational schools have higher graduation rates than universities.",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The passage critiques credential inflation: degrees serving as artificial screening filters rather than measures of actual job skill, thereby blocking social mobility."
    }

];
