import { prisma } from './prisma';

interface DomainPracticeSeed {
  slug: string;
  headline: string;
  accentColor: string;
  latestNotification: string;
  notificationDate: string;
  officialNoticeUrl: string;
  importantDates: Record<string, string>;
  patternName: string;
  durationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  questionsToAttempt: number;
  sections: Array<{
    name: string;
    totalQuestions: number;
    maxToAttempt: number;
    marksPerCorrect: number;
    negativeMarks: number;
  }>;
  syllabusSubjects: Array<{ code: string; title: string; weightagePct: number }>;
  practiceTestTitle: string;
  practiceQuestions: Array<{
    subject: string;
    topic: string;
    contentEn: string;
    contentHi?: string;
    options: Array<{ id: 'A' | 'B' | 'C' | 'D'; textEn: string; textHi?: string }>;
    correct: 'A' | 'B' | 'C' | 'D';
    explanationEn: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    marks: number;
    negativeMarks: number;
  }>;
}

const DOMAIN_EXAM_CONFIGS: DomainPracticeSeed[] = [
  {
    slug: 'neet-ug',
    headline: 'Prepare for NEET UG with NCERT-aligned mock tests.',
    accentColor: '#BE123C',
    latestNotification: 'Official NEET UG 2025/2026 historical PYQs are currently pending verification on All in One. NCERT-aligned pattern practice is active.',
    notificationDate: 'Official notice verification pending',
    officialNoticeUrl: 'https://exams.nta.ac.in/NEET/',
    importantDates: { patternReference: 'NTA 180-Question Pattern (200 Mins, +4/-1)', pyqStatus: 'Verification Pending' },
    patternName: 'NTA NEET UG Official Pattern (+4 / -1)',
    durationMinutes: 200,
    totalMarks: 720,
    totalQuestions: 180,
    questionsToAttempt: 180,
    sections: [
      { name: 'Physics', totalQuestions: 45, maxToAttempt: 45, marksPerCorrect: 4, negativeMarks: 1 },
      { name: 'Chemistry', totalQuestions: 45, maxToAttempt: 45, marksPerCorrect: 4, negativeMarks: 1 },
      { name: 'Botany', totalQuestions: 45, maxToAttempt: 45, marksPerCorrect: 4, negativeMarks: 1 },
      { name: 'Zoology', totalQuestions: 45, maxToAttempt: 45, marksPerCorrect: 4, negativeMarks: 1 },
    ],
    syllabusSubjects: [
      { code: 'NEET-PHY', title: 'Physics (Mechanics, Electrodynamics, Optics, Modern Physics)', weightagePct: 25 },
      { code: 'NEET-CHEM', title: 'Chemistry (Physical, Organic & Inorganic NCERT)', weightagePct: 25 },
      { code: 'NEET-BOT', title: 'Botany (Plant Physiology, Genetics, Ecology)', weightagePct: 25 },
      { code: 'NEET-ZOO', title: 'Zoology (Human Physiology, Biotechnology, Evolution)', weightagePct: 25 },
    ],
    practiceTestTitle: 'NEET UG NCERT Pattern Diagnostic Practice (All in One Practice)',
    practiceQuestions: [
      {
        subject: 'Physics',
        topic: 'Electrostatics',
        contentEn: 'What is the SI unit of electric flux?',
        options: [
          { id: 'A', textEn: 'N·m²/C' },
          { id: 'B', textEn: 'N/C' },
          { id: 'C', textEn: 'J/C' },
          { id: 'D', textEn: 'V/m' },
        ],
        correct: 'A',
        explanationEn: 'Electric flux Φ = E·A, where E is in N/C and area A is in m², giving N·m²/C (or V·m).',
        difficulty: 'EASY',
        marks: 4,
        negativeMarks: 1,
      },
      {
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        contentEn: 'Which of the following molecules exhibits sp³d hybridization with a trigonal bipyramidal geometry?',
        options: [
          { id: 'A', textEn: 'SF₆' },
          { id: 'B', textEn: 'PCl₅' },
          { id: 'C', textEn: 'BF₃' },
          { id: 'D', textEn: 'CH₄' },
        ],
        correct: 'B',
        explanationEn: 'PCl₅ has 5 bond pairs and 0 lone pairs around Phosphorus, giving sp³d hybridization and trigonal bipyramidal geometry.',
        difficulty: 'EASY',
        marks: 4,
        negativeMarks: 1,
      },
      {
        subject: 'Botany',
        topic: 'Cell Biology',
        contentEn: 'Which organelle is responsible for ATP synthesis through oxidative phosphorylation in eukaryotic plant cells?',
        options: [
          { id: 'A', textEn: 'Golgi apparatus' },
          { id: 'B', textEn: 'Mitochondria' },
          { id: 'C', textEn: 'Lysosome' },
          { id: 'D', textEn: 'Peroxisome' },
        ],
        correct: 'B',
        explanationEn: 'Mitochondria produce cellular ATP via the inner membrane electron transport chain and F₀-F₁ ATP synthase.',
        difficulty: 'EASY',
        marks: 4,
        negativeMarks: 1,
      },
      {
        subject: 'Zoology',
        topic: 'Human Physiology',
        contentEn: 'Which enzyme present in human saliva initiates the digestion of starch into maltose?',
        options: [
          { id: 'A', textEn: 'Pepsin' },
          { id: 'B', textEn: 'Salivary amylase (Ptyalin)' },
          { id: 'C', textEn: 'Trypsin' },
          { id: 'D', textEn: 'Lipase' },
        ],
        correct: 'B',
        explanationEn: 'Salivary amylase hydrolyzes about 30% of dietary starch into maltose in the buccal cavity at pH ~6.8.',
        difficulty: 'EASY',
        marks: 4,
        negativeMarks: 1,
      },
      {
        subject: 'Zoology',
        topic: 'Genetics & Biotechnology',
        contentEn: 'In PCR (Polymerase Chain Reaction), Taq polymerase is isolated from which thermophilic bacterium?',
        options: [
          { id: 'A', textEn: 'Escherichia coli' },
          { id: 'B', textEn: 'Thermus aquaticus' },
          { id: 'C', textEn: 'Bacillus thuringiensis' },
          { id: 'D', textEn: 'Agrobacterium tumefaciens' },
        ],
        correct: 'B',
        explanationEn: 'Thermus aquaticus yields heat-stable Taq DNA polymerase capable of remaining active during high-temperature DNA denaturation (~94°C).',
        difficulty: 'EASY',
        marks: 4,
        negativeMarks: 1,
      },
    ],
  },
  {
    slug: 'upsc-prelims',
    headline: 'Practice for UPSC CSE Prelims with structured GS drills.',
    accentColor: '#3730A3',
    latestNotification: 'Official UPSC CSE historical archive is pending import. General Studies Paper I pattern diagnostics (+2 / -0.66) are active.',
    notificationDate: 'Official notice verification pending',
    officialNoticeUrl: 'https://upsc.gov.in/',
    importantDates: { patternReference: 'GS Paper I: 100 Qs, 200 Marks, 120 Mins (-1/3 negative)', pyqStatus: 'Verification Pending' },
    patternName: 'UPSC CSE Prelims GS Paper I (+2 / -0.66)',
    durationMinutes: 120,
    totalMarks: 200,
    totalQuestions: 100,
    questionsToAttempt: 100,
    sections: [
      { name: 'Indian Polity & Governance', totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 2, negativeMarks: 0.66 },
      { name: 'History & Culture', totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 2, negativeMarks: 0.66 },
      { name: 'Geography & Environment', totalQuestions: 25, maxToAttempt: 25, marksPerCorrect: 2, negativeMarks: 0.66 },
      { name: 'Economy & Current Affairs', totalQuestions: 35, maxToAttempt: 35, marksPerCorrect: 2, negativeMarks: 0.66 },
    ],
    syllabusSubjects: [
      { code: 'UPSC-POL', title: 'Indian Polity, Constitution & Public Policy', weightagePct: 20 },
      { code: 'UPSC-HIS', title: 'History of India & Indian National Movement', weightagePct: 20 },
      { code: 'UPSC-GEO', title: 'Indian & World Geography + Ecology', weightagePct: 25 },
      { code: 'UPSC-ECO', title: 'Economic & Social Development + Science & Current Events', weightagePct: 35 },
    ],
    practiceTestTitle: 'UPSC CSE Prelims GS-I Pattern Practice (All in One Practice)',
    practiceQuestions: [
      {
        subject: 'Indian Polity & Governance',
        topic: 'Constitutional Bodies',
        contentEn: 'Which Article of the Constitution of India empowers the President to appoint a Finance Commission every five years?',
        options: [
          { id: 'A', textEn: 'Article 263' },
          { id: 'B', textEn: 'Article 280' },
          { id: 'C', textEn: 'Article 315' },
          { id: 'D', textEn: 'Article 324' },
        ],
        correct: 'B',
        explanationEn: 'Article 280 provides for a Finance Commission constituted by the President at the expiration of every fifth year or earlier.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.66,
      },
      {
        subject: 'History & Culture',
        topic: 'Indian National Movement',
        contentEn: 'At which session of the Indian National Congress was the resolution for "Purna Swaraj" (Complete Independence) passed in 1929?',
        options: [
          { id: 'A', textEn: 'Calcutta Session' },
          { id: 'B', textEn: 'Lahore Session' },
          { id: 'C', textEn: 'Karachi Session' },
          { id: 'D', textEn: 'Surat Session' },
        ],
        correct: 'B',
        explanationEn: 'Under the presidentship of Jawaharlal Nehru in December 1929, the Lahore Session adopted the Purna Swaraj resolution.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.66,
      },
      {
        subject: 'Geography & Environment',
        topic: 'Biodiversity Conservation',
        contentEn: 'Which international convention specifically focuses on the conservation and wise use of wetlands?',
        options: [
          { id: 'A', textEn: 'Basel Convention' },
          { id: 'B', textEn: 'Ramsar Convention' },
          { id: 'C', textEn: 'Stockholm Convention' },
          { id: 'D', textEn: 'Montreal Protocol' },
        ],
        correct: 'B',
        explanationEn: 'Signed in Ramsar, Iran in 1971, the Ramsar Convention provides the framework for wetland conservation.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.66,
      },
      {
        subject: 'Economy & Current Affairs',
        topic: 'Monetary Policy',
        contentEn: 'Who chairs the Monetary Policy Committee (MPC) of India constituted under the RBI Act, 1934?',
        options: [
          { id: 'A', textEn: 'Union Finance Minister' },
          { id: 'B', textEn: 'Governor of the Reserve Bank of India' },
          { id: 'C', textEn: 'Chief Economic Adviser' },
          { id: 'D', textEn: 'NITI Aayog Vice-Chairperson' },
        ],
        correct: 'B',
        explanationEn: 'The Governor of the Reserve Bank of India serves as the ex-officio Chairperson of the 6-member Monetary Policy Committee.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.66,
      },
    ],
  },
  {
    slug: 'ssc-cgl-tier1',
    headline: 'Prepare for SSC CGL Tier 1 with timed CBT practice sets.',
    accentColor: '#0F766E',
    latestNotification: 'Official SSC CGL historical shift archive is pending editorial import. Tier-1 timed CBT practice (+2 / -0.50, 60 mins) is live.',
    notificationDate: 'Official notice verification pending',
    officialNoticeUrl: 'https://ssc.gov.in/',
    importantDates: { patternReference: 'Tier 1: 100 Qs, 200 Marks, 60 Mins (+2 / -0.50)', pyqStatus: 'Verification Pending' },
    patternName: 'SSC CGL Tier 1 CBT Pattern (+2 / -0.50)',
    durationMinutes: 60,
    totalMarks: 200,
    totalQuestions: 100,
    questionsToAttempt: 100,
    sections: [
      { name: 'General Intelligence & Reasoning', totalQuestions: 25, maxToAttempt: 25, marksPerCorrect: 2, negativeMarks: 0.5 },
      { name: 'General Awareness', totalQuestions: 25, maxToAttempt: 25, marksPerCorrect: 2, negativeMarks: 0.5 },
      { name: 'Quantitative Aptitude', totalQuestions: 25, maxToAttempt: 25, marksPerCorrect: 2, negativeMarks: 0.5 },
      { name: 'English Comprehension', totalQuestions: 25, maxToAttempt: 25, marksPerCorrect: 2, negativeMarks: 0.5 },
    ],
    syllabusSubjects: [
      { code: 'SSC-REAS', title: 'General Intelligence & Reasoning', weightagePct: 25 },
      { code: 'SSC-GA', title: 'General Awareness (History, Polity, Science, Current Affairs)', weightagePct: 25 },
      { code: 'SSC-QA', title: 'Quantitative Aptitude (Arithmetic, Algebra, Geometry, Trigonometry)', weightagePct: 25 },
      { code: 'SSC-ENG', title: 'English Comprehension & Grammar', weightagePct: 25 },
    ],
    practiceTestTitle: 'SSC CGL Tier 1 Timed Diagnostic Practice (All in One Practice)',
    practiceQuestions: [
      {
        subject: 'General Intelligence & Reasoning',
        topic: 'Number Series',
        contentEn: 'Find the missing number in the series: 7, 14, 28, 56, ?',
        options: [
          { id: 'A', textEn: '84' },
          { id: 'B', textEn: '98' },
          { id: 'C', textEn: '112' },
          { id: 'D', textEn: '120' },
        ],
        correct: 'C',
        explanationEn: 'Each term is multiplied by 2: 56 × 2 = 112.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.5,
      },
      {
        subject: 'General Awareness',
        topic: 'Indian Geography',
        contentEn: 'Which river is known as the "Sorrow of Bihar"?',
        options: [
          { id: 'A', textEn: 'Damodar' },
          { id: 'B', textEn: 'Kosi' },
          { id: 'C', textEn: 'Gandak' },
          { id: 'D', textEn: 'Son' },
        ],
        correct: 'B',
        explanationEn: 'The Kosi River frequently changes course and causes severe floods in Bihar, earning the name Sorrow of Bihar.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.5,
      },
      {
        subject: 'Quantitative Aptitude',
        topic: 'Time & Work',
        contentEn: 'A can finish a work in 12 days and B can finish it in 24 days. Working together, in how many days will they complete the work?',
        options: [
          { id: 'A', textEn: '6 days' },
          { id: 'B', textEn: '8 days' },
          { id: 'C', textEn: '9 days' },
          { id: 'D', textEn: '10 days' },
        ],
        correct: 'B',
        explanationEn: 'Combined rate = 1/12 + 1/24 = 3/24 = 1/8 per day, so together they finish in 8 days.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.5,
      },
      {
        subject: 'English Comprehension',
        topic: 'Synonyms',
        contentEn: 'Choose the word closest in meaning to "METICULOUS".',
        options: [
          { id: 'A', textEn: 'Careless' },
          { id: 'B', textEn: 'Thorough and careful' },
          { id: 'C', textEn: 'Hasty' },
          { id: 'D', textEn: 'Indifferent' },
        ],
        correct: 'B',
        explanationEn: 'Meticulous means showing great attention to detail; very careful and precise.',
        difficulty: 'EASY',
        marks: 2,
        negativeMarks: 0.5,
      },
    ],
  },
  {
    slug: 'gate-cs',
    headline: 'Practice for GATE Computer Science with core technical mocks.',
    accentColor: '#4338CA',
    latestNotification: 'Official GATE CS historical papers are pending verification import. Pattern diagnostic CBT (+1/-0.33, +2/-0.66) is active.',
    notificationDate: 'Official notice verification pending',
    officialNoticeUrl: 'https://gate2025.iitr.ac.in/',
    importantDates: { patternReference: 'GATE CS: 65 Qs, 100 Marks, 180 Mins', pyqStatus: 'Verification Pending' },
    patternName: 'GATE CS & IT Official Pattern (100 Marks)',
    durationMinutes: 180,
    totalMarks: 100,
    totalQuestions: 65,
    questionsToAttempt: 65,
    sections: [
      { name: 'General Aptitude', totalQuestions: 10, maxToAttempt: 10, marksPerCorrect: 1.5, negativeMarks: 0.5 },
      { name: 'Engineering Mathematics & Discrete Math', totalQuestions: 13, maxToAttempt: 13, marksPerCorrect: 1.5, negativeMarks: 0.5 },
      { name: 'Core Computer Science', totalQuestions: 42, maxToAttempt: 42, marksPerCorrect: 1.5, negativeMarks: 0.5 },
    ],
    syllabusSubjects: [
      { code: 'GATE-GA', title: 'General Aptitude (Verbal & Quantitative)', weightagePct: 15 },
      { code: 'GATE-ALGO', title: 'Algorithms & Data Structures', weightagePct: 20 },
      { code: 'GATE-OS', title: 'Operating Systems & Computer Networks', weightagePct: 20 },
      { code: 'GATE-DBMS', title: 'Databases, TOC & Compiler Design', weightagePct: 25 },
      { code: 'GATE-COA', title: 'Digital Logic, Computer Organization & Discrete Math', weightagePct: 20 },
    ],
    practiceTestTitle: 'GATE CS Core Subjects Diagnostic Mock (All in One Practice)',
    practiceQuestions: [
      {
        subject: 'Core Computer Science',
        topic: 'Algorithms & Complexity',
        contentEn: 'What is the worst-case time complexity of searching for an element in a balanced Binary Search Tree (AVL Tree) with n nodes?',
        options: [
          { id: 'A', textEn: 'O(1)' },
          { id: 'B', textEn: 'O(log n)' },
          { id: 'C', textEn: 'O(n)' },
          { id: 'D', textEn: 'O(n log n)' },
        ],
        correct: 'B',
        explanationEn: 'An AVL tree maintains O(log n) height at all times, guaranteeing O(log n) worst-case lookup time.',
        difficulty: 'EASY',
        marks: 1,
        negativeMarks: 0.33,
      },
      {
        subject: 'Core Computer Science',
        topic: 'Operating Systems',
        contentEn: 'Which page replacement algorithm can suffer from Belady\'s Anomaly?',
        options: [
          { id: 'A', textEn: 'Least Recently Used (LRU)' },
          { id: 'B', textEn: 'Optimal Page Replacement' },
          { id: 'C', textEn: 'First-In First-Out (FIFO)' },
          { id: 'D', textEn: 'Least Frequently Used with stack property' },
        ],
        correct: 'C',
        explanationEn: 'FIFO does not satisfy the stack property, so increasing page frames can paradoxically increase page faults (Belady\'s Anomaly).',
        difficulty: 'MEDIUM',
        marks: 2,
        negativeMarks: 0.66,
      },
      {
        subject: 'Core Computer Science',
        topic: 'Databases',
        contentEn: 'Which normal form strictly eliminates transitive dependencies of non-prime attributes on candidate keys?',
        options: [
          { id: 'A', textEn: '1NF' },
          { id: 'B', textEn: '2NF' },
          { id: 'C', textEn: '3NF' },
          { id: 'D', textEn: '4NF' },
        ],
        correct: 'C',
        explanationEn: 'Third Normal Form (3NF) removes transitive functional dependencies of non-prime attributes on any candidate key.',
        difficulty: 'EASY',
        marks: 1,
        negativeMarks: 0.33,
      },
      {
        subject: 'General Aptitude',
        topic: 'Quantitative Reasoning',
        contentEn: 'If a fair 6-sided die is rolled twice, what is the probability that the sum of the two outcomes equals 7?',
        options: [
          { id: 'A', textEn: '1/12' },
          { id: 'B', textEn: '1/6' },
          { id: 'C', textEn: '5/36' },
          { id: 'D', textEn: '7/36' },
        ],
        correct: 'B',
        explanationEn: 'There are 6 favorable pairs {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} out of 36 outcomes = 6/36 = 1/6.',
        difficulty: 'EASY',
        marks: 1,
        negativeMarks: 0.33,
      },
    ],
  },
];

async function runMultiExamCleanup() {
  console.log('=== ALL IN ONE: MULTI-EXAM PORTAL CLEANUP & SEEDING ===');

  // 1. Consolidate duplicate TEACH category into TEACHING
  const teachingCat = await prisma.examCategory.findUnique({ where: { code: 'TEACHING' } });
  const oldTeachCat = await prisma.examCategory.findUnique({ where: { code: 'TEACH' } });
  if (teachingCat && oldTeachCat) {
    await prisma.exam.updateMany({
      where: { categoryId: oldTeachCat.id },
      data: { categoryId: teachingCat.id },
    });
    await prisma.examCategory.delete({ where: { id: oldTeachCat.id } });
    console.log('Consolidated duplicate TEACH category into TEACHING cleanly.');
  }

  // 2. Update JEE Main, UPTET, SUPER TET portal headlines & official notices cleanly
  await prisma.exam.updateMany({
    where: { slug: 'jee-main' },
    data: {
      portalHeadline: 'Prepare with JEE Main previous-year papers.',
      accentColor: '#1D4ED8',
      latestNotification: 'NTA JEE Main Paper 1 (2021–2025 Shifts + 2026 Pattern Simulation) verified and live.',
      notificationDate: 'NTA Official Archive (2021–2025)',
      officialNoticeUrl: 'https://jeemain.nta.ac.in/',
      importantDatesJson: JSON.stringify({ examDuration: '180 Minutes', totalMarks: '300 Marks (+4 / -1)', totalQuestions: '75 (2025–26) / 90 (2021–24)' }),
    },
  });

  await prisma.exam.updateMany({
    where: { slug: 'uptet' },
    data: {
      portalHeadline: 'Prepare for UPTET with structured practice and mock tests.',
      accentColor: '#15803D',
      latestNotification: 'UPTET 2016–2021 Official Papers verified; 2020 & 2022–2025 cycles marked as non-conducted with separate All in One practice tests.',
      notificationDate: 'ERA Prayagraj / UPESSC Archive',
      officialNoticeUrl: 'https://updeled.gov.in/',
      importantDatesJson: JSON.stringify({ examDuration: '150 Minutes', totalMarks: '150 Marks (+1 / 0 Negative)', papers: 'Paper 1 (1–5) & Paper 2 (6–8)' }),
    },
  });

  const superTetExam = await prisma.exam.findUnique({ where: { slug: 'super-tet' } });
  if (superTetExam) {
    await prisma.exam.update({
      where: { id: superTetExam.id },
      data: {
        portalHeadline: 'Practice for SUPER TET with exam-focused mock tests.',
        accentColor: '#4338CA',
        latestNotification: 'Verified historical records for 2018 (68,500 ATRE) and 2019 (69,000 ATRE) imported; 2012–2017 & 2020–2025 accurately marked with zero fabricated PYQs.',
        notificationDate: 'Dec 1, 2018 (Last Completed Cycle: Jan 6, 2019)',
        officialNoticeUrl: 'https://atrexam.upsdc.gov.in/',
        importantDatesJson: JSON.stringify({ examDuration: '150 Mins (2019) / 180 Mins (2018)', totalMarks: '150 Marks (0 Negative)', cutoff: '65% General / 60% Reserved' }),
      },
    });

    // Ensure SUPER TET PatternVersion has explicit sections
    const stPv = await prisma.examPatternVersion.findFirst({ where: { examId: superTetExam.id }, include: { sections: true } });
    if (stPv && stPv.sections.length === 0) {
      const stSections = [
        { name: 'Hindi, Sanskrit & English', order: 1, totalQuestions: 40, maxToAttempt: 40, marksPerCorrect: 1, negativeMarks: 0 },
        { name: 'General Knowledge & Current Affairs', order: 2, totalQuestions: 30, maxToAttempt: 30, marksPerCorrect: 1, negativeMarks: 0 },
        { name: 'Mathematics', order: 3, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 1, negativeMarks: 0 },
        { name: 'Science & Environmental Studies', order: 4, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 1, negativeMarks: 0 },
        { name: 'Child Psychology, Teaching & Life Skills', order: 5, totalQuestions: 30, maxToAttempt: 30, marksPerCorrect: 1, negativeMarks: 0 },
        { name: 'Logical Reasoning & IT', order: 6, totalQuestions: 10, maxToAttempt: 10, marksPerCorrect: 1, negativeMarks: 0 },
      ];
      for (const s of stSections) {
        await prisma.examSection.create({
          data: {
            patternVersionId: stPv.id,
            name: s.name,
            order: s.order,
            totalQuestions: s.totalQuestions,
            maxToAttempt: s.maxToAttempt,
            questionType: 'MCQ_SINGLE',
            marksPerCorrect: s.marksPerCorrect,
            negativeMarks: s.negativeMarks,
            unattemptedPenalty: 0,
          },
        });
      }
      console.log('Added 6 official ExamSections for SUPER TET.');
    }
  }

  // 3. Configure NEET UG, UPSC Prelims, SSC CGL, GATE CS cleanly with ZERO fake PYQs + honest pattern tests
  for (const cfg of DOMAIN_EXAM_CONFIGS) {
    const exam = await prisma.exam.findUnique({ where: { slug: cfg.slug } });
    if (!exam) continue;

    await prisma.exam.update({
      where: { id: exam.id },
      data: {
        portalHeadline: cfg.headline,
        accentColor: cfg.accentColor,
        latestNotification: cfg.latestNotification,
        notificationDate: cfg.notificationDate,
        officialNoticeUrl: cfg.officialNoticeUrl,
        importantDatesJson: JSON.stringify(cfg.importantDates),
        isComingSoon: false,
      },
    });

    // Pattern version & sections
    let pv = await prisma.examPatternVersion.findFirst({ where: { examId: exam.id, isDefault: true } });
    if (!pv) {
      pv = await prisma.examPatternVersion.create({
        data: {
          examId: exam.id,
          versionName: cfg.patternName,
          effectiveFrom: new Date('2024-01-01'),
          durationMinutes: cfg.durationMinutes,
          totalMarks: cfg.totalMarks,
          totalQuestions: cfg.totalQuestions,
          questionsToAttempt: cfg.questionsToAttempt,
          isDefault: true,
        },
      });
      for (let i = 0; i < cfg.sections.length; i++) {
        const s = cfg.sections[i];
        await prisma.examSection.create({
          data: {
            patternVersionId: pv.id,
            name: s.name,
            order: i + 1,
            totalQuestions: s.totalQuestions,
            maxToAttempt: s.maxToAttempt,
            marksPerCorrect: s.marksPerCorrect,
            negativeMarks: s.negativeMarks,
          },
        });
      }
    }

    // Syllabus nodes if absent
    const existingNodes = await prisma.syllabusNode.count({ where: { examId: exam.id } });
    if (existingNodes === 0) {
      for (const sn of cfg.syllabusSubjects) {
        await prisma.syllabusNode.create({
          data: {
            examId: exam.id,
            level: 'SUBJECT',
            title: sn.title,
            code: sn.code,
            weightagePct: sn.weightagePct,
          },
        });
      }
    }

    // Create 1 honest Pattern Diagnostic Practice Test if exam has 0 tests
    const existingTestsCount = await prisma.test.count({ where: { examId: exam.id } });
    if (existingTestsCount === 0) {
      const totalTestMarks = cfg.practiceQuestions.reduce((acc, q) => acc + q.marks, 0);
      const test = await prisma.test.create({
        data: {
          title: cfg.practiceTestTitle,
          examId: exam.id,
          patternVersionId: pv.id,
          type: 'FULL_MOCK',
          durationMinutes: 15,
          totalMarks: totalTestMarks,
          totalQuestions: cfg.practiceQuestions.length,
          instructionsEn: `All in One Syllabus Diagnostic Practice for ${exam.shortName}. Strictly original practice questions — NOT historical PYQs.`,
          pyqReference: 'All in One Pattern Practice',
          accessLevel: 'FREE',
          isPublished: true,
          sourceType: 'PATTERN_PRACTICE',
          verificationStatus: 'TUTORNOVE_PRACTICE',
          totalAvailableQuestions: cfg.practiceQuestions.length,
        },
      });

      for (let i = 0; i < cfg.practiceQuestions.length; i++) {
        const pq = cfg.practiceQuestions[i];
        const qRecord = await prisma.question.create({
          data: {
            examId: exam.id,
            questionType: 'SINGLE_CHOICE',
            contentEn: pq.contentEn,
            contentHi: pq.contentHi || null,
            optionsJson: JSON.stringify(pq.options),
            correctAnswerJson: JSON.stringify([pq.correct]),
            explanationEn: pq.explanationEn,
            difficulty: pq.difficulty,
            isPYQ: false,
            sourceProvenance: 'All in One Original Curriculum Practice Bank',
            sourceLicense: 'Original Educational Content',
            verificationStatus: 'VERIFIED',
            isPublished: true,
            subject: pq.subject,
            topic: pq.topic,
          },
        });

        await prisma.testQuestion.create({
          data: {
            testId: test.id,
            questionId: qRecord.id,
            sectionName: pq.subject,
            questionNumber: i + 1,
            marks: pq.marks,
            negativeMarks: pq.negativeMarks,
          },
        });
      }
      console.log(`Configured pattern & honest practice diagnostic for ${cfg.slug} (${cfg.practiceQuestions.length} Qs).`);
    }
  }

  // 4. Recompute REAL verified PYQ counts directly from DB across ALL 7 exams (remove misleading placeholder numbers)
  const allExams = await prisma.exam.findMany();
  for (const ex of allExams) {
    let realPyqCount = await prisma.question.count({
      where: { examId: ex.id, isPYQ: true, isPublished: true },
    });
    if (ex.slug === 'super-tet') {
      realPyqCount = await prisma.superTetQuestion.count({ where: { isPYQ: true, isActive: true } });
    }
    await prisma.exam.update({
      where: { id: ex.id },
      data: { totalVerifiedPYQs: realPyqCount },
    });
    console.log(`Synced real PYQ count for ${ex.slug}: ${realPyqCount}`);
  }

  // 5. Clean up & configure Exam-Wise SubscriptionPlans + Coupons
  await prisma.subscriptionPlan.updateMany({
    where: { code: 'PREMIUM_MONTHLY_149' },
    data: {
      name: 'All in One Premium All-Access',
      description: 'Unlock all verified mock series and solutions across your target examination.',
      examSlug: null,
    },
  });

  await prisma.subscriptionPlan.updateMany({
    where: { code: 'TEST_PACK_99' },
    data: {
      examSlug: 'jee-main',
      name: 'JEE Main 5-Shift Booster Pack',
      description: 'Unlock any 5 verified JEE Main Shift Papers with detailed step-by-step derivations.',
    },
  });

  const examPlans = [
    {
      code: 'UPTET_SERIES_79',
      examSlug: 'uptet',
      name: 'UPTET Paper 1 & 2 Complete Pack',
      description: 'Full access to all UPTET 2016–2025 verified papers, Hindi/English bilingual review, and weakness diagnostics.',
      price: 79,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'UPTET Best Value',
      featuresJson: JSON.stringify(['All 2016–2021 Verified Papers', '150-Q Full Benchmark Mocks', 'Bilingual Hindi/English Mode', 'Zero Negative Marking Analytics']),
      displayOrder: 10,
    },
    {
      code: 'SUPERTET_SERIES_99',
      examSlug: 'super-tet',
      name: 'SUPER TET Recruitment Prep Pack',
      description: 'Complete access to 2018 & 2019 ATRE PYQ sets, 12-subject drills, UP GK, and UPESSC pattern mocks.',
      price: 99,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'Teacher Recruitment',
      featuresJson: JSON.stringify(['Verified 2018 & 2019 ATRE PYQs', '12-Subject Targeted Drills', 'NEP 2020 & UP GK Practice', 'Bookmark & Revision Hub']),
      displayOrder: 11,
    },
    {
      code: 'NEET_SERIES_129',
      examSlug: 'neet-ug',
      name: 'NEET UG NCERT Mock Series',
      description: '720-Mark NTA pattern CBT mock series covering Physics, Chemistry, Botany & Zoology.',
      price: 129,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'Medical Prep',
      featuresJson: JSON.stringify(['200-Min NTA Timed CBT Mode', '+4 / -1 Marking Analytics', 'Botany & Zoology Mistake Journal']),
      displayOrder: 12,
    },
    {
      code: 'UPSC_SERIES_149',
      examSlug: 'upsc-prelims',
      name: 'UPSC CSE Prelims GS Series',
      description: 'Structured General Studies Paper I practice drills with -1/3 penalty calibration and explanations.',
      price: 149,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'Civil Services',
      featuresJson: JSON.stringify(['Polity, History, Geo & Economy', 'Strict -0.66 Negative Calibration', 'Detailed Analytical Explanations']),
      displayOrder: 13,
    },
    {
      code: 'SSC_SERIES_79',
      examSlug: 'ssc-cgl-tier1',
      name: 'SSC CGL Tier-1 Speed CBT Pack',
      description: '60-minute high-speed Tier 1 practice series covering Reasoning, Quant, GA & English.',
      price: 79,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'Speed Drill',
      featuresJson: JSON.stringify(['60-Min Timed CBT Terminals', '+2 / -0.50 Official Scoring', 'Section-Wise Speed Analysis']),
      displayOrder: 14,
    },
    {
      code: 'GATE_SERIES_129',
      examSlug: 'gate-cs',
      name: 'GATE CS Technical Series',
      description: '180-minute technical mock series covering Algorithms, OS, DBMS, COA & General Aptitude.',
      price: 129,
      billingInterval: 'MONTHLY',
      durationDays: 30,
      testAccessLimit: 0,
      badge: 'Core CS',
      featuresJson: JSON.stringify(['Core CS + Engineering Maths', 'Virtual Calculator Ready Pattern', 'Topic Mistake Tracking']),
      displayOrder: 15,
    },
  ];

  for (const ep of examPlans) {
    await prisma.subscriptionPlan.upsert({
      where: { code: ep.code },
      update: ep,
      create: ep,
    });
  }

  // Seed verified Coupons
  const coupons = [
    { code: 'WELCOME20', discountPct: 20, examSlug: null, isActive: true },
    { code: 'TEACH25', discountPct: 25, examSlug: 'uptet', isActive: true },
    { code: 'STET25', discountPct: 25, examSlug: 'super-tet', isActive: true },
    { code: 'JEE15', discountPct: 15, examSlug: 'jee-main', isActive: true },
  ];
  for (const cp of coupons) {
    await prisma.coupon.upsert({
      where: { code: cp.code },
      update: cp,
      create: cp,
    });
  }

  console.log('=== MULTI-EXAM PORTAL CLEANUP COMPLETE ===');
}

if (require.main === module) {
  runMultiExamCleanup()
    .catch((e) => {
      console.error('Cleanup Error:', e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}

