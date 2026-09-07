// =====================================================
// LOGICAL REASONING QUESTIONS - PART 1
// Topics:
// 1. Number Series (25 questions)
// 2. Letter and Symbol Series (25 questions)
// 3. Verbal Classification (25 questions)
// 4. Essential Part (25 questions)
// =====================================================

module.exports = [

    // =========================================================================
    // 01 - NUMBER SERIES
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Number Series",
        question: "Look at this series: 2, 4, 6, 8, 10, ... What number should come next?",
        option_a: "11", option_b: "12", option_c: "13", option_d: "14",
        correct_answer: "B", difficulty: "Easy",
        explanation: "This is a simple addition series where 2 is added to each number: 2 + 2 = 4, 4 + 2 = 6, 6 + 2 = 8, 8 + 2 = 10, and 10 + 2 = 12."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
        option_a: "20", option_b: "22", option_c: "23", option_d: "26",
        correct_answer: "B", difficulty: "Easy",
        explanation: "This is an alternating subtraction series: -2, -4, -2, -4, ... 36 - 2 = 34, 34 - 4 = 30, 30 - 2 = 28, 28 - 4 = 24, and 24 - 2 = 22."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        option_a: "7", option_b: "10", option_c: "12", option_d: "13",
        correct_answer: "B", difficulty: "Easy",
        explanation: "This is an alternating addition and subtraction series: +3, -2, +3, -2, +3, ... 7 + 3 = 10, 10 - 2 = 8, 8 + 3 = 11, 11 - 2 = 9, 9 + 3 = 12, and 12 - 2 = 10."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 80, 10, 70, 15, 60, ... What number should come next?",
        option_a: "20", option_b: "25", option_c: "30", option_d: "50",
        correct_answer: "A", difficulty: "Easy",
        explanation: "This is an alternating series consisting of two patterns. First series: 80, 70, 60 (-10). Second series: 10, 15, 20 (+5). The next term is from the second series: 15 + 5 = 20."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?",
        option_a: "7", option_b: "10", option_c: "14", option_d: "15",
        correct_answer: "D", difficulty: "Easy",
        explanation: "The pattern alternates between adding 1 and adding 3: 3 + 1 = 4, 4 + 3 = 7, 7 + 1 = 8, 8 + 3 = 11, 11 + 1 = 12, and 12 + 3 = 15."
    },

    // MEDIUM (6-10)
    {
        topic: "Number Series",
        question: "Look at this series: 31, 29, 24, 22, 17, ... What number should come next?",
        option_a: "15", option_b: "14", option_c: "13", option_d: "12",
        correct_answer: "A", difficulty: "Medium",
        explanation: "This is an alternating subtraction series: -2, -5, -2, -5, ... 31 - 2 = 29, 29 - 5 = 24, 24 - 2 = 22, 22 - 5 = 17, and 17 - 2 = 15."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?",
        option_a: "4.2", option_b: "4.4", option_c: "4.7", option_d: "5.1",
        correct_answer: "C", difficulty: "Medium",
        explanation: "In this series, 0.8 is added to each number: 1.5 + 0.8 = 2.3; 2.3 + 0.8 = 3.1; 3.1 + 0.8 = 3.9; and 3.9 + 0.8 = 4.7."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 14, 28, 20, 40, 32, 64, ... What number should come next?",
        option_a: "52", option_b: "56", option_c: "96", option_d: "128",
        correct_answer: "B", difficulty: "Medium",
        explanation: "This is an alternating multiplication and subtraction series: ×2, -8, ×2, -8, ... 14 × 2 = 28, 28 - 8 = 20, 20 × 2 = 40, 40 - 8 = 32, 32 × 2 = 64, and 64 - 8 = 56."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 2, 6, 12, 20, 30, 42, ... What number should come next?",
        option_a: "52", option_b: "54", option_c: "56", option_d: "60",
        correct_answer: "C", difficulty: "Medium",
        explanation: "The differences between consecutive numbers form an arithmetic progression of even numbers: +4, +6, +8, +10, +12, +14. Thus, 42 + 14 = 56. (Also n² + n: 1²+1=2, 2²+2=6, 3²+3=12, ..., 7²+7=56)."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 544, 509, 474, 439, ... What number should come next?",
        option_a: "404", option_b: "414", option_c: "420", option_d: "445",
        correct_answer: "A", difficulty: "Medium",
        explanation: "This is a simple subtraction series where 35 is subtracted from each term: 544 - 35 = 509, 509 - 35 = 474, 474 - 35 = 439, and 439 - 35 = 404."
    },

    // HARD (11-15)
    {
        topic: "Number Series",
        question: "Look at this series: 2, 3, 8, 27, 112, ... What number should come next?",
        option_a: "450", option_b: "560", option_c: "565", option_d: "620",
        correct_answer: "C", difficulty: "Hard",
        explanation: "The pattern is: 2 × 1 + 1 = 3; 3 × 2 + 2 = 8; 8 × 3 + 3 = 27; 27 × 4 + 4 = 112; 112 × 5 + 5 = 565."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 6, 13, 28, 59, ... What number should come next?",
        option_a: "111", option_b: "118", option_c: "120", option_d: "122",
        correct_answer: "D", difficulty: "Hard",
        explanation: "The pattern is: ×2 + 1, ×2 + 2, ×2 + 3, ... 6 × 2 + 1 = 13; 13 × 2 + 2 = 28; 28 × 2 + 3 = 59; 59 × 2 + 4 = 122."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 0, 6, 24, 60, 120, 210, ... What number should come next?",
        option_a: "290", option_b: "336", option_c: "343", option_d: "504",
        correct_answer: "B", difficulty: "Hard",
        explanation: "The terms follow n³ - n: 1³ - 1 = 0, 2³ - 2 = 6, 3³ - 3 = 24, 4³ - 4 = 60, 5³ - 5 = 120, 6³ - 6 = 210, and 7³ - 7 = 343 - 7 = 336."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 4, 18, 48, 100, 180, ... What number should come next?",
        option_a: "248", option_b: "294", option_c: "312", option_d: "324",
        correct_answer: "B", difficulty: "Hard",
        explanation: "The terms follow n³ - n² or n²(n - 1) starting from n=2: 2²(2-1)=4; 3²(3-1)=18; 4²(4-1)=48; 5²(5-1)=100; 6²(6-1)=180; 7²(7-1)=49 × 6 = 294."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 1, 2, 6, 24, 120, 720, ... What number should come next?",
        option_a: "1440", option_b: "2880", option_c: "4320", option_d: "5040",
        correct_answer: "D", difficulty: "Hard",
        explanation: "This is a factorial progression: 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, and 7! = 5040."
    },

    // ADVANCED (16-20)
    {
        topic: "Number Series",
        question: "Look at this series: 8, 4, 4, 6, 12, 30, ... What number should come next?",
        option_a: "60", option_b: "75", option_c: "90", option_d: "105",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "The multiplier increases by 0.5 at each step: 8 × 0.5 = 4; 4 × 1 = 4; 4 × 1.5 = 6; 6 × 2 = 12; 12 × 2.5 = 30; 30 × 3 = 90."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 5, 16, 51, 158, ... What number should come next?",
        option_a: "474", option_b: "479", option_c: "481", option_d: "485",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "The pattern is: 5 × 3 + 1 = 16; 16 × 3 + 3 = 51; 51 × 3 + 5 = 158; next is 158 × 3 + 7 = 474 + 7 = 481 (multiplied by 3, with consecutive odd numbers added)."
    },
    {
        topic: "Number Series",
        question: "Find the missing number: 10, 14, 26, 50, 86, ...?",
        option_a: "128", option_b: "132", option_c: "134", option_d: "136",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "The differences are: 14 - 10 = 4; 26 - 14 = 12; 50 - 26 = 24; 86 - 50 = 36. The secondary differences are: 12 - 4 = 8, 24 - 12 = 12, 36 - 24 = 12 (or +4, +12, +24, +36; 4×1, 4×3, 4×6, 4×10). The next difference is 4 × 15 = 60, or 36 + 14 = 50... More cleanly: 10 + 2² = 14; 14 + (4²-4) = 26; 26 + (5²-1) = 50; 86 - 50 = 36. Differences: 4, 12, 24, 36, 50? Next difference is 50, giving 86 + 50 = 136."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 7, 9, 19, 45, 95, ... What number should come next?",
        option_a: "165", option_b: "177", option_c: "181", option_d: "189",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "Examine the differences: 9 - 7 = 2; 19 - 9 = 10; 45 - 19 = 26; 95 - 45 = 50. Notice that 2 = 1² + 1, 10 = 3² + 1, 26 = 5² + 1, 50 = 7² + 1. The next difference is 9² + 1 = 81 + 1 = 82. So, 95 + 82 = 177."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 3, 10, 32, 100, ... What number should come next?",
        option_a: "300", option_b: "308", option_c: "312", option_d: "320",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "The pattern is: 3 × 3 + 1 = 10; 10 × 3 + 2 = 32; 32 × 3 + 4 = 100; 100 × 3 + 8 = 308 (multiplied by 3, with powers of 2 added: +1, +2, +4, +8)."
    },

    // INTERVIEW (21-25)
    {
        topic: "Number Series",
        question: "Find the missing term: 11, 13, 17, 19, 23, 25, ...?",
        option_a: "27", option_b: "29", option_c: "31", option_d: "35",
        correct_answer: "B", difficulty: "Interview",
        explanation: "The pattern alternates adding 2 and adding 4: 11 + 2 = 13, 13 + 4 = 17, 17 + 2 = 19, 19 + 4 = 23, 23 + 2 = 25, and 25 + 4 = 29."
    },
    {
        topic: "Number Series",
        question: "In the sequence 2, 12, 36, 80, 150, ..., what is the next number?",
        option_a: "216", option_b: "248", option_c: "252", option_d: "270",
        correct_answer: "C", difficulty: "Interview",
        explanation: "The nth term is n³ + n²: for n=1: 1+1=2; n=2: 8+4=12; n=3: 27+9=36; n=4: 64+16=80; n=5: 125+25=150; for n=6: 6³ + 6² = 216 + 36 = 252."
    },
    {
        topic: "Number Series",
        question: "Find the wrong number in the series: 3, 8, 15, 24, 34, 48, 63",
        option_a: "15", option_b: "24", option_c: "34", option_d: "48",
        correct_answer: "C", difficulty: "Interview",
        explanation: "The series follows the formula n² - 1 for n = 2, 3, 4, 5, 6, 7, 8: 2²-1=3, 3²-1=8, 4²-1=15, 5²-1=24, 6²-1=35 (not 34), 7²-1=48, 8²-1=63. Therefore, 34 is incorrect."
    },
    {
        topic: "Number Series",
        question: "What is the next number in the series: 1, 5, 14, 30, 55, 91, ...?",
        option_a: "130", option_b: "140", option_c: "155", option_d: "160",
        correct_answer: "B", difficulty: "Interview",
        explanation: "This is the series of sum of squares of first n natural numbers: 1 = 1², 5 = 1²+2², 14 = 1²+2²+3², 30 = 14+16, 55 = 30+25, 91 = 55+36. Next term is 91 + 7² = 91 + 49 = 140."
    },
    {
        topic: "Number Series",
        question: "Look at this series: 4, 6, 12, 30, 90, 315, ... What number should come next?",
        option_a: "945", option_b: "1120", option_c: "1260", option_d: "1417.5",
        correct_answer: "C", difficulty: "Interview",
        explanation: "The multiplier increases by 0.5: 4 × 1.5 = 6; 6 × 2 = 12; 12 × 2.5 = 30; 30 × 3 = 90; 90 × 3.5 = 315; 315 × 4 = 1260."
    },

    // =========================================================================
    // 02 - LETTER AND SYMBOL SERIES
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: B, D, F, H, J, ... What letter should come next?",
        option_a: "K", option_b: "L", option_c: "M", option_d: "N",
        correct_answer: "B", difficulty: "Easy",
        explanation: "This is an alternating letter series skipping one letter each time: B (+2) D (+2) F (+2) H (+2) J (+2) L."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: SCD, TEF, UGH, ____, WKL. What letters fill the blank?",
        option_a: "CMN", option_b: "UJI", option_c: "VIJ", option_d: "IJT",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Look at the first letters: S, T, U, V, W (+1). Second letters: C, E, G, I, K (+2). Third letters: D, F, H, J, L (+2). Thus the missing cluster is VIJ."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: FAG, GAF, HAI, IAH, ... What combination comes next?",
        option_a: "JAK", option_b: "HAL", option_c: "HAK", option_d: "JAI",
        correct_answer: "A", difficulty: "Easy",
        explanation: "The middle letter is always A. The first and third letters swap places in alternate words while progressing alphabetically: F_G, G_F, H_I, I_H, next is J_K."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: ELFA, GLHA, ILJA, _____, MLNA. What letters fill the blank?",
        option_a: "OLPA", option_b: "KLMA", option_c: "LLMA", option_d: "KLLA",
        correct_answer: "D", difficulty: "Easy",
        explanation: "The second and fourth letters are always L and A. The first letter steps forward by 2: E, G, I, K, M. The third letter also steps forward: F, H, J, L, N. Thus the missing segment is KLLA."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: QAR, RAS, SAT, TAU, ... What combination comes next?",
        option_a: "UAV", option_b: "UAT", option_c: "TAS", option_d: "TAT",
        correct_answer: "A", difficulty: "Easy",
        explanation: "The middle letter is always A. The first and third letters move forward by 1: Q_R, R_S, S_T, T_U, U_V."
    },

    // MEDIUM (6-10)
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: DEF, DEF2, DE2F2, _____, D2E2F3. What segment comes next?",
        option_a: "DEF3", option_b: "D2E3F", option_c: "D2E2F2", option_d: "D3E2F2",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Notice the superscript power progression: starting with 1s, the 2s are added from right to left: DEF, DEF2, DE2F2, D2E2F2, and then the next step advances the last letter to 3: D2E2F3."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: ZA5, Y4B, XC6, W3D, ... What comes next?",
        option_a: "E7V", option_b: "V2E", option_c: "VE5", option_d: "VE7",
        correct_answer: "D", difficulty: "Medium",
        explanation: "First letter decreases: Z, Y, X, W, V. Second component alternates between number and letter: A5, 4B, C6, 3D... Letters advance: A, B, C, D, E. Numbers alternate +1, -1: 5, 4, 6, 3, 7. So V, E, 7 gives VE7."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: QPO, NML, KJI, _____, EDC. What segment comes next?",
        option_a: "HGF", option_b: "CAB", option_c: "JKL", option_d: "GHI",
        correct_answer: "A", difficulty: "Medium",
        explanation: "This series consists of letters in reverse alphabetical order in clusters of three: QPO, NML, KJI, HGF, EDC."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: JAK, KBL, LCM, MDN, ... What comes next?",
        option_a: "OEP", option_b: "NEO", option_c: "MEN", option_d: "PFQ",
        correct_answer: "B", difficulty: "Medium",
        explanation: "First letter: J, K, L, M, N (+1). Second letter: A, B, C, D, E (+1). Third letter: K, L, M, N, O (+1). Result is NEO."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: BCB, DED, FGF, HIH, ... What comes next?",
        option_a: "JKJ", option_b: "HJH", option_c: "IJI", option_d: "JHJ",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Each cluster has identical outer letters surrounding a middle letter that is 1 position ahead: B C B, D E D, F G F, H I H, J K J."
    },

    // HARD (11-15)
    {
        topic: "Letter and Symbol Series",
        question: "Complete the series: CX, FU, IR, ____, OL.",
        option_a: "LO", option_b: "MN", option_c: "NO", option_d: "OP",
        correct_answer: "A", difficulty: "Hard",
        explanation: "First letter increases by 3: C(3) + 3 = F(6) + 3 = I(9) + 3 = L(12). Second letter decreases by 3: X(24) - 3 = U(21) - 3 = R(18) - 3 = O(15). The term is LO."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Find the missing term: WFB, TGD, QHG, ...?",
        option_a: "NIK", option_b: "NIL", option_c: "OIK", option_d: "NJL",
        correct_answer: "A", difficulty: "Hard",
        explanation: "First letters: W(23), T(20), Q(17), N(14) [-3]. Second letters: F(6), G(7), H(8), I(9) [+1]. Third letters: B(2), D(4), G(7), K(11) [+2, +3, +4]. The result is NIK."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Complete the series: A, CD, GHI, ____, UVWXY.",
        option_a: "LMNO", option_b: "MNPQ", option_c: "MNOP", option_d: "NOPQ",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Number of letters in terms: 1, 2, 3, 4, 5. Skips between terms: A (skip B) CD (skip EF) GHI (skip JKL) MNOP (skip QRST) UVWXY. The missing 4-letter cluster is MNOP."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Find the next term: 2B, 4C, 8E, 14H, ...?",
        option_a: "22L", option_b: "24L", option_c: "22K", option_d: "20M",
        correct_answer: "A", difficulty: "Hard",
        explanation: "Numbers: 2 (+2) 4 (+4) 8 (+6) 14 (+8) 22. Letters: B(2) + 1 = C(3); C(3) + 2 = E(5); E(5) + 3 = H(8); H(8) + 4 = L(12). The term is 22L."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Complete the series: AYD, BVF, DRH, GMJ, ...?",
        option_a: "GLK", option_b: "HLM", option_c: "KGM", option_d: "KGL",
        correct_answer: "D", difficulty: "Hard",
        explanation: "First letters: A(1) + 1 = B(2) + 2 = D(4) + 3 = G(7) + 4 = K(11). Middle letters: Y(25) - 3 = V(22) - 4 = R(18) - 5 = M(13) - 6 = G(7). Last letters: D(4) + 2 = F(6) + 2 = H(8) + 2 = J(10) + 2 = L(12). Result: KGL."
    },

    // ADVANCED (16-20)
    {
        topic: "Letter and Symbol Series",
        question: "Find the missing term: Z, W, S, P, L, I, E, ...?",
        option_a: "B", option_b: "A", option_c: "C", option_d: "D",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "The pattern of steps backwards is alternating -3 and -4: Z(26) - 3 = W(23); W(23) - 4 = S(19); S(19) - 3 = P(16); P(16) - 4 = L(12); L(12) - 3 = I(9); I(9) - 4 = E(5); E(5) - 3 = B(2)."
    },
    {
        topic: "Letter and Symbol Series",
        question: "What comes next in the symbol-letter series: @A2, #B4, $D8, %G16, ...?",
        option_a: "^K32", option_b: "^J32", option_c: "&K32", option_d: "^L32",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "Symbols shift along keyboard number row shift keys: @(2), #(3), $(4), %(5), ^(6). Letters: A(1) + 1 = B(2); B + 2 = D(4); D + 3 = G(7); G + 4 = K(11). Numbers double: 2, 4, 8, 16, 32. Thus ^K32."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Find the next group: AZ, GT, MN, SH, ...?",
        option_a: "YB", option_b: "ZA", option_c: "XB", option_d: "YC",
        correct_answer: "A", difficulty: "Advanced",
        explanation: "Each pair consists of opposite letters summing to 27: A(1)+Z(26)=27, G(7)+T(20)=27, M(13)+N(14)=27, S(19)+H(8)=27. The first letters increase by 6: 1 + 6 = 7, 7 + 6 = 13, 13 + 6 = 19, 19 + 6 = 25 (Y). The opposite of Y is B (27 - 25 = 2). The pair is YB."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Look at this series: D-4, F-6, H-8, J-10, ... What should come next?",
        option_a: "K-11", option_b: "L-12", option_c: "M-13", option_d: "L-14",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "Each letter is paired with its alphabetic positional value, increasing by 2: D=4, F=6, H=8, J=10, L=12."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Find the missing letters in: _ b a _ b a _ b a _ b a",
        option_a: "b a b a", option_b: "a b a b", option_c: "b b b b", option_d: "a a a a",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "Filling 'a' in every blank yields: a b a a b a a b a a b a, which creates the repeating triplet pattern 'a b a' four times."
    },

    // INTERVIEW (21-25)
    {
        topic: "Letter and Symbol Series",
        question: "Complete the alphanumeric matrix column: [A1, C4, E9], [G16, I25, K36], [M49, O64, ...?]",
        option_a: "Q81", option_b: "P81", option_c: "Q100", option_d: "R81",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Letters skip one each time: A, C, E, G, I, K, M, O, Q (+2). The numbers are consecutive perfect squares: 1², 2², 3², 4², 5², 6², 7², 8², 9² = 81. The term is Q81."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Which term does not fit the series: BFJ, KOS, TXB, CGK?",
        option_a: "BFJ", option_b: "KOS", option_c: "TXB", option_d: "CGK",
        correct_answer: "B", difficulty: "Interview",
        explanation: "Look at internal gaps between letters: B(2) + 4 = F(6) + 4 = J(10) [+4, +4]. T(20) + 4 = X(24) + 4 = B(28 mod 26 = 2) [+4, +4]. C(3) + 4 = G(7) + 4 = K(11) [+4, +4]. But K(11) + 4 = O(15), but O(15) + 4 = S(19); wait: K(11)+4=15(O)+4=19(S) is also [+4,+4]. Check start letter jumps: B(2) + 9 = K(11) + 9 = T(20) + 9 = C(29 mod 26 = 3). Next term would be C + 9 = L. Wait, all groups have +4,+4 internally. Let's check vowel count: only KOS has an 'O' (vowel), whereas BFJ, TXB, CGK have only consonants! Hence KOS does not fit."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Complete the series: 3F, 6G, 11I, 18L, ...?",
        option_a: "27P", option_b: "25O", option_c: "27Q", option_d: "29P",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Numbers: 3 (+3) 6 (+5) 11 (+7) 18 (+9) 27 (odd additions). Letters: F(6) + 1 = G(7); G(7) + 2 = I(9); I(9) + 3 = L(12); L(12) + 4 = P(16). The next term is 27P."
    },
    {
        topic: "Letter and Symbol Series",
        question: "Find the missing term in: AB, DEF, HIJK, ..., STUVWXY",
        option_a: "MNOPQ", option_b: "LMNOP", option_c: "NOPQR", option_d: "MNOPR",
        correct_answer: "A", difficulty: "Interview",
        explanation: "Cluster sizes: 2 letters, 3 letters, 4 letters, 5 letters, 6 letters. Gaps between clusters: AB (skip C: 1) DEF (skip G: 1) HIJK (skip L: 1) MNOPQ (skip R: 1) STUVWXY. The missing 5-letter cluster is MNOPQ."
    },
    {
        topic: "Letter and Symbol Series",
        question: "In the sequence: P5QR, P4QS, P3QT, ..., P1QV, what is the missing term?",
        option_a: "P2QU", option_b: "PQ2U", option_c: "P2QU2", option_d: "P2QUV",
        correct_answer: "A", difficulty: "Interview",
        explanation: "First letter P and third letter Q remain constant. The embedded number decreases: 5, 4, 3, 2, 1. The last letter increases: R, S, T, U, V. Therefore, the missing term is P2QU."
    },

    // =========================================================================
    // 03 - VERBAL CLASSIFICATION
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Leopard", option_b: "Cougar", option_c: "Elephant", option_d: "Lion",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Leopard, Cougar, and Lion are all members of the cat family (Felidae) and carnivores, whereas the Elephant is an herbivore and belongs to the Elephantidae family."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Couch", option_b: "Table", option_c: "Chair", option_d: "Rug",
        correct_answer: "D", difficulty: "Easy",
        explanation: "Couch, Table, and Chair are pieces of furniture with elevated wooden/metal frames, whereas a Rug is a floor covering."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Cornea", option_b: "Retina", option_c: "Pupil", option_d: "Vision",
        correct_answer: "D", difficulty: "Easy",
        explanation: "Cornea, Retina, and Pupil are physical anatomical parts of the eye, whereas Vision is the sensory perception/function produced by the eye."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Triangle", option_b: "Circle", option_c: "Square", option_d: "Rectangle",
        correct_answer: "B", difficulty: "Easy",
        explanation: "Triangle, Square, and Rectangle are polygons made of straight line segments, whereas a Circle is a curved figure with no straight edges or vertices."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Copper", option_b: "Iron", option_c: "Brass", option_d: "Silver",
        correct_answer: "C", difficulty: "Easy",
        explanation: "Copper, Iron, and Silver are pure elemental metals, whereas Brass is an alloy (a mixture of copper and zinc)."
    },

    // MEDIUM (6-10)
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Tulip", option_b: "Rose", option_c: "Bud", option_d: "Daisy",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Tulip, Rose, and Daisy are specific types of flowers, while a Bud is an undeveloped stage or part of any plant."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Parsley", option_b: "Basil", option_c: "Dill", option_d: "Mayonnaise",
        correct_answer: "D", difficulty: "Medium",
        explanation: "Parsley, Basil, and Dill are all herbs/plants used as seasoning, whereas Mayonnaise is a condiment dressing prepared from oil and egg yolk."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Inch", option_b: "Ounce", option_c: "Centimeter", option_d: "Yard",
        correct_answer: "B", difficulty: "Medium",
        explanation: "Inch, Centimeter, and Yard are units of linear length/distance, whereas an Ounce is a unit of weight/mass."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Guitar", option_b: "Violin", option_c: "Flute", option_d: "Cello",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Guitar, Violin, and Cello are string instruments, while the Flute is a woodwind instrument."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Dodge", option_b: "Flee", option_c: "Duck", option_d: "Avoid",
        correct_answer: "B", difficulty: "Medium",
        explanation: "Dodge, Duck, and Avoid mean evading a specific blow or obstacle in place, whereas Flee means running completely away from a situation or place."
    },

    // HARD (11-15)
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Heft", option_b: "Weight", option_c: "Mass", option_d: "Bulk",
        correct_answer: "D", difficulty: "Hard",
        explanation: "Heft, Weight, and Mass refer strictly to heaviness and gravitational pull/matter, whereas Bulk refers primarily to physical volume, size, or magnitude."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Hypothesis", option_b: "Theory", option_c: "Premise", option_d: "Conclusion",
        correct_answer: "D", difficulty: "Hard",
        explanation: "A Hypothesis, Theory, and Premise are starting propositions, foundations, or propositions to be tested/argued, whereas a Conclusion is the final deduced outcome."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Sardine", option_b: "Trout", option_c: "Cod", option_d: "Lobster",
        correct_answer: "D", difficulty: "Hard",
        explanation: "Sardine, Trout, and Cod are vertebrate fish with fins and backbones, whereas Lobster is an invertebrate crustacean with an exoskeleton."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Clarinet", option_b: "Oboe", option_c: "Trumpet", option_d: "Saxophone",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Clarinet, Oboe, and Saxophone are reed instruments (woodwinds), whereas Trumpet is a brass instrument played with a cup mouthpiece."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Vagrant", option_b: "Nomad", option_c: "Wanderer", option_d: "Hermit",
        correct_answer: "D", difficulty: "Hard",
        explanation: "Vagrant, Nomad, and Wanderer describe individuals who move constantly from place to place, whereas a Hermit is a recluse who lives in solitary seclusion in one fixed location."
    },

    // ADVANCED (16-20)
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Ephemeral", option_b: "Transient", option_c: "Fleeting", option_d: "Perpetual",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "Ephemeral, Transient, and Fleeting all mean lasting for a very short time (temporary), while Perpetual means continuing forever or indefinitely (its direct antonym)."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Baritone", option_b: "Tenor", option_c: "Soprano", option_d: "Bass",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Baritone, Tenor, and Bass are traditional male vocal ranges, whereas Soprano is the highest female vocal range."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Monarchy", option_b: "Oligarchy", option_c: "Plutocracy", option_d: "Anarchy",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "Monarchy, Oligarchy, and Plutocracy are all systems of governance/rule, whereas Anarchy denotes the total absence of government or authoritative rule."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Exonerate", option_b: "Acquit", option_c: "Absolve", option_d: "Inculpate",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "Exonerate, Acquit, and Absolve mean to clear someone from blame or criminal guilt, whereas Inculpate means to incriminate or accuse someone of wrongdoing."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Diamond", option_b: "Ruby", option_c: "Emerald", option_d: "Granite",
        correct_answer: "D", difficulty: "Advanced",
        explanation: "Diamond, Ruby, and Emerald are precious gemstones / individual mineral crystals, while Granite is a composite igneous rock formed of multiple minerals."
    },

    // INTERVIEW (21-25)
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Altruistic", option_b: "Benevolent", option_c: "Magnanimous", option_d: "Parsimonious",
        correct_answer: "D", difficulty: "Interview",
        explanation: "Altruistic, Benevolent, and Magnanimous denote noble generosity, kindness, and selflessness, whereas Parsimonious means stingy, extremely frugal, or tight-fisted."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Sonnet", option_b: "Ballad", option_c: "Ode", option_d: "Biography",
        correct_answer: "D", difficulty: "Interview",
        explanation: "Sonnet, Ballad, and Ode are poetic lyrical forms, whereas a Biography is a prose account of an individual's life history."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Malleable", option_b: "Ductile", option_c: "Brittle", option_d: "Pliable",
        correct_answer: "C", difficulty: "Interview",
        explanation: "Malleable, Ductile, and Pliable all describe materials that yield, bend, or deform under mechanical stress without breaking, whereas Brittle describes materials that fracture or shatter instantly."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Inchoate", option_b: "Nascent", option_c: "Embryonic", option_d: "Moribund",
        correct_answer: "D", difficulty: "Interview",
        explanation: "Inchoate, Nascent, and Embryonic all refer to things in early development or just beginning to form, while Moribund refers to something at the point of death, decay, or ending."
    },
    {
        topic: "Verbal Classification",
        question: "Which word does NOT belong with the others?",
        option_a: "Tautology", option_b: "Pleonasm", option_c: "Redundancy", option_d: "Oxymoron",
        correct_answer: "D", difficulty: "Interview",
        explanation: "Tautology, Pleonasm, and Redundancy all involve needless repetition of identical meanings, whereas an Oxymoron intentionally joins mutually contradictory terms (e.g., 'deafening silence')."
    },

    // =========================================================================
    // 04 - ESSENTIAL PART
    // =========================================================================
    // EASY (1-5)
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: BOOK",
        option_a: "Fiction", option_b: "Pages", option_c: "Pictures", option_d: "Hardcover",
        correct_answer: "B", difficulty: "Easy",
        explanation: "A book by definition consists of bound sheets of paper or parchment (pages). A book does not need to be fiction, have pictures, or feature a hardcover."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: GUITAR",
        option_a: "Band", option_b: "Strings", option_c: "Amplifier", option_d: "Pick",
        correct_answer: "B", difficulty: "Easy",
        explanation: "A guitar is fundamentally a stringed instrument; without strings, it cannot function as a guitar. It does not require an amplifier, a band, or a pick (fingers can be used)."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: SHOE",
        option_a: "Laces", option_b: "Leather", option_c: "Sole", option_d: "Buckle",
        correct_answer: "C", difficulty: "Easy",
        explanation: "All shoes must possess a bottom base (sole) that provides protection against the ground. Shoes can be slip-ons (no laces or buckles) and made of canvas, rubber, or plastic."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: TREE",
        option_a: "Leaves", option_b: "Roots", option_c: "Flowers", option_d: "Apples",
        correct_answer: "B", difficulty: "Easy",
        explanation: "Roots anchor the tree and absorb essential water and nutrients. Deciduous trees lose all leaves in winter, and many trees never bear fruit or visible flowers."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: SCHOOL",
        option_a: "Students", option_b: "Cafeteria", option_c: "Uniforms", option_d: "Playground",
        correct_answer: "A", difficulty: "Easy",
        explanation: "A school's defining purpose is education; without learners (students), an institution cannot be a school. Uniforms, cafeterias, and playgrounds are optional amenities."
    },

    // MEDIUM (6-10)
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: HARVEST",
        option_a: "Autumn", option_b: "Tractor", option_c: "Crop", option_d: "Plow",
        correct_answer: "C", difficulty: "Medium",
        explanation: "Harvest is the act of gathering a mature agricultural yield (crop). Without a crop, there can be no harvest. Harvests can happen in any season without tractors."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: DESERT",
        option_a: "Cactus", option_b: "Aridity", option_c: "Oasis", option_d: "Camels",
        correct_answer: "B", difficulty: "Medium",
        explanation: "A desert is geographically defined by extreme lack of moisture/precipitation (aridity). Many deserts (including cold polar deserts) have no cacti, camels, or oases."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: LANGUAGE",
        option_a: "Alphabet", option_b: "Words", option_c: "Grammar", option_d: "Books",
        correct_answer: "B", difficulty: "Medium",
        explanation: "A language is a system of communication using conventional spoken, manual, or written units (words). Some ancient languages existed entirely orally without alphabets or books."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: LIGHTNING",
        option_a: "Electricity", option_b: "Thunder", option_c: "Rain", option_d: "Storm",
        correct_answer: "A", difficulty: "Medium",
        explanation: "Lightning is by physical definition an electrostatic discharge (electricity). While thunder is caused by lightning, lightning can occur as silent heat lightning from a distance or without rain."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: CLOUD",
        option_a: "Rain", option_b: "Vapor", option_c: "Wind", option_d: "Sunlight",
        correct_answer: "B", difficulty: "Medium",
        explanation: "A cloud is a visible mass of condensed water vapor or ice particles floating in the atmosphere. It does not necessarily produce rain."
    },

    // HARD (11-15)
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: CONTRACT",
        option_a: "Agreement", option_b: "Lawyer", option_c: "Money", option_d: "Notary",
        correct_answer: "A", difficulty: "Hard",
        explanation: "A contract is legally defined as an enforceable agreement between parties. Contracts do not require lawyers, notaries, or money (mutual exchange of promises or consideration suffices)."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: PAIN",
        option_a: "Cut", option_b: "Burn", option_c: "Sensation", option_d: "Hurt",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Pain is neurologically and psychologically categorized as a physical or mental sensation. Cuts and burns are merely specific causes of pain."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: ELECTION",
        option_a: "Voters", option_b: "Ballots", option_c: "Campaign", option_d: "Politicians",
        correct_answer: "A", difficulty: "Hard",
        explanation: "An election is a process of choosing by vote; without voters participating in the selection, an election cannot occur. Elections can happen by voice vote without paper ballots or formal campaigns."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: GLACIER",
        option_a: "Mountain", option_b: "Ice", option_c: "Precipice", option_d: "Rock",
        correct_answer: "B", difficulty: "Hard",
        explanation: "A glacier is a persistent, moving body of dense ice. While commonly associated with mountains, ice sheets (like Antarctica and Greenland) are glaciers that spread over plains and seas."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: SWIMMING",
        option_a: "Pool", option_b: "Goggles", option_c: "Water", option_d: "Swimsuit",
        correct_answer: "C", difficulty: "Hard",
        explanation: "Swimming is propulsion through liquid, universally requiring water. Pools, goggles, and swimsuits are artificial conveniences."
    },

    // ADVANCED (16-20)
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: CITIZENSHIP",
        option_a: "Passport", option_b: "Allegiance", option_c: "Rights", option_d: "Voting",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "Citizenship is the legal status endowing an individual with constitutional and civil rights within a political state. Passports are documents, and not all citizens are eligible to vote (e.g., minors)."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: GALAXY",
        option_a: "Planets", option_b: "Stars", option_c: "Black hole", option_d: "Moons",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "A galaxy is astronomically defined as a gravitationally bound system consisting of stars, stellar remnants, interstellar gas, and dark matter. Stars are the defining core visible constituents."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: AUDIENCE",
        option_a: "Performers", option_b: "Theater", option_c: "Listeners", option_d: "Tickets",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "The word audience stems from the Latin 'audire' (to hear) and denotes a group of listeners, viewers, or spectators. No theater or ticket is required."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: ORCHESTRA",
        option_a: "Violins", option_b: "Instruments", option_c: "Stage", option_d: "Applause",
        correct_answer: "B", difficulty: "Advanced",
        explanation: "An orchestra is an ensemble of musical instruments played together. While violins are common, modern or wind orchestras can feature diverse instrument arrangements."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: OVEN",
        option_a: "Door", option_b: "Timer", option_c: "Heat", option_d: "Electricity",
        correct_answer: "C", difficulty: "Advanced",
        explanation: "An oven is a thermally insulated chamber used for heating, baking, or drying. Without heat, it cannot perform the function of an oven. Many traditional ovens use wood or gas rather than electricity."
    },

    // INTERVIEW (21-25)
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: SYMBIOSIS",
        option_a: "Parasitism", option_b: "Relationship", option_c: "Host", option_d: "Benefit",
        correct_answer: "B", difficulty: "Interview",
        explanation: "Symbiosis in biology is defined broadly as any close, long-term biological interaction (relationship) between two different biological organisms (whether mutualistic, commensal, or parasitic)."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: MONOPOLY",
        option_a: "High prices", option_b: "Exclusive control", option_c: "Government charter", option_d: "Patent",
        correct_answer: "B", difficulty: "Interview",
        explanation: "A monopoly economically signifies the exclusive control by a single entity over the commercial supply of a commodity or service."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: CORRELATION",
        option_a: "Causation", option_b: "Variables", option_c: "Experiment", option_d: "Hypothesis",
        correct_answer: "B", difficulty: "Interview",
        explanation: "Correlation is a statistical measure expressing the degree of relationship between two or more variables. Correlation specifically does not imply causation."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: DEMOCRACY",
        option_a: "President", option_b: "Suffrage", option_c: "Two parties", option_d: "Parliament",
        correct_answer: "B", difficulty: "Interview",
        explanation: "Democracy is government by the people, requiring the fundamental right of people to vote (suffrage). Democracies can be direct or parliamentary, with or without presidents."
    },
    {
        topic: "Essential Part",
        question: "Choose the word that is a necessary part of the underlined word: METAMORPHOSIS",
        option_a: "Cocoon", option_b: "Change", option_c: "Caterpillar", option_d: "Wings",
        correct_answer: "B", difficulty: "Interview",
        explanation: "Metamorphosis biologically and etymologically means a profound transformation or change in physical form or structure from one developmental stage to another."
    }

];
