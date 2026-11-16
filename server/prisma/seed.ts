/// <reference types="node" />
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding ExamVerse AI database...');

  // Clean existing data
  await prisma.mistakeJournalEntry.deleteMany();
  await prisma.questionReview.deleteMany();
  await prisma.testQuestion.deleteMany();
  await prisma.testAttempt.deleteMany();
  await prisma.test.deleteMany();
  await prisma.question.deleteMany();
  await prisma.syllabusNode.deleteMany();
  await prisma.examSection.deleteMany();
  await prisma.examPatternVersion.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.examCategory.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create Users
  const studentPw = await bcrypt.hash('Student@123', 10);
  const adminPw = await bcrypt.hash('Admin@123', 10);
  const reviewerPw = await bcrypt.hash('Reviewer@123', 10);
  const instPw = await bcrypt.hash('Inst@123', 10);

  const student = await prisma.user.create({
    data: {
      email: 'student@examverse.ai',
      passwordHash: studentPw,
      name: 'Aarav Sharma',
      role: 'STUDENT',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: 'admin@examverse.ai',
      passwordHash: adminPw,
      name: 'Dr. Vikram Malhotra (Admin)',
      role: 'ADMIN',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
  });

  const reviewer = await prisma.user.create({
    data: {
      email: 'reviewer@examverse.ai',
      passwordHash: reviewerPw,
      name: 'Prof. Ananya Iyer (Senior Academic Reviewer)',
      role: 'CONTENT_REVIEWER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
    },
  });

  await prisma.user.create({
    data: {
      email: 'institution@examverse.ai',
      passwordHash: instPw,
      name: 'All in one',
      role: 'INSTITUTION_ADMIN',
      avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150',
    },
  });

  // 2. Exam Categories
  const catEng = await prisma.examCategory.create({
    data: {
      name: 'Engineering Entrance',
      code: 'ENG',
      description: 'Undergraduate engineering admissions across IITs, NITs, IIITs and top state universities.',
      icon: 'Cpu',
      displayOrder: 1,
    },
  });

  const catMed = await prisma.examCategory.create({
    data: {
      name: 'Medical Entrance',
      code: 'MED',
      description: 'National Eligibility cum Entrance Test for MBBS, BDS, and allied medical sciences.',
      icon: 'Activity',
      displayOrder: 2,
    },
  });

  const catCivil = await prisma.examCategory.create({
    data: {
      name: 'Civil Services & UPSC',
      code: 'CIVIL',
      description: 'Prestigious national recruitment examinations for IAS, IPS, IFS and Central Services.',
      icon: 'Landmark',
      displayOrder: 3,
    },
  });

  const catGovt = await prisma.examCategory.create({
    data: {
      name: 'Staff Selection & Banking',
      code: 'GOVT',
      description: 'Government group B & C posts, SSC CGL, CHSL, and IBPS banking officers.',
      icon: 'Briefcase',
      displayOrder: 4,
    },
  });

  const catTech = await prisma.examCategory.create({
    data: {
      name: 'Technical & Master’s (GATE)',
      code: 'TECH',
      description: 'Graduate Aptitude Test in Engineering for PSU recruitments and M.Tech admissions.',
      icon: 'Code2',
      displayOrder: 5,
    },
  });

  // 3. Exams
  const jeeExam = await prisma.exam.create({
    data: {
      slug: 'jee-main',
      title: 'Joint Entrance Examination (Main)',
      shortName: 'JEE Main',
      conductingBody: 'National Testing Agency (NTA)',
      officialWebsite: 'https://jeemain.nta.ac.in',
      description: 'Premier national computer-based entrance examination for admissions into NITs, IIITs, CFTIs and screening for JEE Advanced.',
      eligibilitySummary: '10+2 with Physics, Mathematics, and Chemistry/Biotechnology with 75% aggregate or top 20 percentile.',
      verifiedSyllabusCoveragePct: 98.4,
      totalVerifiedPYQs: 1850,
      categoryId: catEng.id,
      status: 'ACTIVE',
    },
  });

  const neetExam = await prisma.exam.create({
    data: {
      slug: 'neet-ug',
      title: 'National Eligibility cum Entrance Test (Undergraduate)',
      shortName: 'NEET UG',
      conductingBody: 'National Testing Agency (NTA)',
      officialWebsite: 'https://exams.nta.ac.in/NEET',
      description: 'Single national entrance examination for all medical admissions across government, private and deemed universities in India.',
      eligibilitySummary: '10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% for General category.',
      verifiedSyllabusCoveragePct: 99.1,
      totalVerifiedPYQs: 1420,
      categoryId: catMed.id,
      status: 'ACTIVE',
    },
  });

  const upscExam = await prisma.exam.create({
    data: {
      slug: 'upsc-prelims',
      title: 'UPSC Civil Services Examination (Preliminary)',
      shortName: 'UPSC CSE Prelims',
      conductingBody: 'Union Public Service Commission (UPSC)',
      officialWebsite: 'https://upsc.gov.in',
      description: 'National screening test for recruitment to the Indian Administrative Service (IAS), IPS, and other premier central services.',
      eligibilitySummary: 'Graduate degree in any discipline from a recognized university, age 21 to 32 years.',
      verifiedSyllabusCoveragePct: 95.8,
      totalVerifiedPYQs: 1260,
      categoryId: catCivil.id,
      status: 'ACTIVE',
    },
  });

  const sscExam = await prisma.exam.create({
    data: {
      slug: 'ssc-cgl-tier1',
      title: 'SSC Combined Graduate Level (Tier 1)',
      shortName: 'SSC CGL',
      conductingBody: 'Staff Selection Commission (SSC)',
      officialWebsite: 'https://ssc.gov.in',
      description: 'Recruitment examination to Group B and Group C non-technical posts across Ministries and Departments of Government of India.',
      eligibilitySummary: 'Bachelor’s degree from a recognized university or equivalent.',
      verifiedSyllabusCoveragePct: 96.5,
      totalVerifiedPYQs: 1680,
      categoryId: catGovt.id,
      status: 'ACTIVE',
    },
  });

  const gateExam = await prisma.exam.create({
    data: {
      slug: 'gate-cs',
      title: 'Graduate Aptitude Test in Engineering (Computer Science)',
      shortName: 'GATE CS',
      conductingBody: 'IISc & IITs',
      officialWebsite: 'https://gate.iisc.ac.in',
      description: 'Comprehensive technical examination testing core computer science engineering concepts for postgraduate admissions and PSU hiring.',
      eligibilitySummary: 'Currently in 3rd year or completed Bachelor’s degree in Engineering / Technology.',
      verifiedSyllabusCoveragePct: 97.2,
      totalVerifiedPYQs: 1100,
      categoryId: catTech.id,
      status: 'ACTIVE',
    },
  });

  // 4. Pattern Versions & Sections for JEE Main
  const jeePattern = await prisma.examPatternVersion.create({
    data: {
      examId: jeeExam.id,
      versionName: '2024-2025 Revised Pattern',
      effectiveFrom: new Date('2024-01-01'),
      durationMinutes: 180,
      totalMarks: 300,
      totalQuestions: 90,
      questionsToAttempt: 75,
      sectionalTimers: false,
      questionShuffling: true,
      languagesAllowed: JSON.stringify(['en', 'hi']),
      submissionRules: JSON.stringify({
        minMinutesBeforeSubmit: 60,
        allowReviewAfterSubmit: true,
        allowSectionSwitching: true,
      }),
      isDefault: true,
    },
  });

  const secPhysics = await prisma.examSection.create({
    data: {
      patternVersionId: jeePattern.id,
      name: 'Physics',
      order: 1,
      totalQuestions: 30,
      maxToAttempt: 25,
      questionType: 'MCQ_SINGLE',
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      unattemptedPenalty: 0.0,
    },
  });

  const secChemistry = await prisma.examSection.create({
    data: {
      patternVersionId: jeePattern.id,
      name: 'Chemistry',
      order: 2,
      totalQuestions: 30,
      maxToAttempt: 25,
      questionType: 'MCQ_SINGLE',
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      unattemptedPenalty: 0.0,
    },
  });

  const secMaths = await prisma.examSection.create({
    data: {
      patternVersionId: jeePattern.id,
      name: 'Mathematics',
      order: 3,
      totalQuestions: 30,
      maxToAttempt: 25,
      questionType: 'MCQ_SINGLE',
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      unattemptedPenalty: 0.0,
    },
  });

  // 5. Syllabus Nodes for JEE Main (Subject -> Unit -> Topic)
  const nodePhysics = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      level: 'SUBJECT',
      title: 'Physics',
      code: 'PHY',
      weightagePct: 33.33,
      officialNotificationRef: 'NTA JEE 2024 Information Bulletin Annexure 1',
    },
  });

  const nodeMechanics = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      parentId: nodePhysics.id,
      level: 'UNIT',
      title: 'Mechanics & Newton’s Laws',
      code: 'PHY-MECH',
      weightagePct: 12.5,
    },
  });

  const nodeElectro = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      parentId: nodePhysics.id,
      level: 'UNIT',
      title: 'Electrodynamics & Modern Physics',
      code: 'PHY-ELECTRO',
      weightagePct: 14.0,
    },
  });

  const nodeTopicNLM = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      parentId: nodeMechanics.id,
      level: 'TOPIC',
      title: 'Friction, Momentum Conservation & Equilibrium',
      code: 'PHY-NLM-01',
      weightagePct: 4.2,
    },
  });

  const nodeChem = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      level: 'SUBJECT',
      title: 'Chemistry',
      code: 'CHEM',
      weightagePct: 33.33,
    },
  });

  const nodeOrganic = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      parentId: nodeChem.id,
      level: 'UNIT',
      title: 'Organic Chemistry & Reaction Mechanisms',
      code: 'CHEM-ORG',
      weightagePct: 13.0,
    },
  });

  const nodeMaths = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      level: 'SUBJECT',
      title: 'Mathematics',
      code: 'MATH',
      weightagePct: 33.34,
    },
  });

  const nodeCalculus = await prisma.syllabusNode.create({
    data: {
      examId: jeeExam.id,
      parentId: nodeMaths.id,
      level: 'UNIT',
      title: 'Integral Calculus & Differential Equations',
      code: 'MATH-CALC',
      weightagePct: 15.0,
    },
  });

  // 6. Authentic Verified PYQ Questions
  const q1 = await prisma.question.create({
    data: {
      examId: jeeExam.id,
      sectionId: secPhysics.id,
      syllabusNodeId: nodeTopicNLM.id,
      questionType: 'SINGLE_CHOICE',
      contentEn: 'A block of mass 5 kg is placed on a rough horizontal surface with coefficient of static friction $\\mu_s = 0.4$ and kinetic friction $\\mu_k = 0.3$. A horizontal force of $F = 15\\text{ N}$ is applied to the block. Taking $g = 9.8\\text{ m/s}^2$, what is the magnitude of the frictional force acting on the block?',
      contentHi: '5 किग्रा द्रव्यमान का एक गुटका स्थैतिक घर्षण गुणांक $\\mu_s = 0.4$ और गतिक घर्षण गुणांक $\\mu_k = 0.3$ वाली खुरदरी क्षैतिज सतह पर रखा गया है। गुटके पर $F = 15\\text{ N}$ का एक क्षैतिज बल लगाया जाता है। $g = 9.8\\text{ m/s}^2$ लेते हुए, गुटके पर लगने वाले घर्षण बल का परिमाण क्या है?',
      optionsJson: JSON.stringify([
        { id: 'opt1', textEn: '19.6 N', textHi: '19.6 N' },
        { id: 'opt2', textEn: '15.0 N', textHi: '15.0 N' },
        { id: 'opt3', textEn: '14.7 N', textHi: '14.7 N' },
        { id: 'opt4', textEn: 'Zero', textHi: 'शून्य' },
      ]),
      correctAnswerJson: JSON.stringify(['opt2']),
      explanationEn: 'Step 1: Calculate the maximum limiting static friction:\n$f_{s,\\max} = \\mu_s N = \\mu_s mg = 0.4 \\times 5 \\times 9.8 = 19.6\\text{ N}$.\n\nStep 2: Compare applied force $F = 15\\text{ N}$ with $f_{s,\\max}$:\nSince $F < f_{s,\\max}$ ($15\\text{ N} < 19.6\\text{ N}$), the block does NOT move.\n\nStep 3: By Newton\'s First Law (equilibrium of forces in horizontal direction):\n$f_{\\text{static}} = F_{\\text{applied}} = 15.0\\text{ N}$.\n\nCommon mistake: Confusing limiting friction ($19.6\\text{ N}$) with actual static friction ($15.0\\text{ N}$). Static friction is self-adjusting up to its limiting threshold.',
      explanationHi: 'चरण 1: अधिकतम सीमांत स्थैतिक घर्षण ज्ञात करें:\n$f_{s,\\max} = \\mu_s mg = 0.4 \\times 5 \\times 9.8 = 19.6\\text{ N}$.\n\nचरण 2: आरोपित बल ($15\\text{ N}$) सीमांत घर्षण ($19.6\\text{ N}$) से कम है, इसलिए गुटका गति नहीं करेगा।\n\nचरण 3: चूंकि गुटका विरामावस्था में है, स्थैतिक घर्षण बल आरोपित बल के ठीक बराबर होगा: $f = 15.0\\text{ N}$।\nसामान्य भूल: कई छात्र सीमांत घर्षण 19.6 N चुन लेते हैं, जबकि स्थैतिक घर्षण स्वतः-समायोज्य बल है।',
      difficulty: 'MEDIUM',
      isPYQ: true,
      pyqYear: '2024',
      pyqShift: 'Session 1, 27th Jan Shift 1',
      pyqPaper: 'Paper 1 (B.E./B.Tech)',
      sourceProvenance: 'Official NTA Certified Question Paper Archive (Ref: JEE24-S1-D1-P1)',
      sourceLicense: 'Authorized Public Domain Examination Record / Fair Academic Use',
      verificationStatus: 'VERIFIED',
      reviewerName: 'Prof. Ananya Iyer',
      reviewedAt: new Date('2024-02-15'),
      reviewerNotes: 'Verified against NTA final revised answer key. Step-by-step bilingual derivation verified.',
      isAIGenerated: false,
      duplicateCheckHash: 'hash_nlm_friction_5kg_15n_jee24',
    },
  });

  const q2 = await prisma.question.create({
    data: {
      examId: jeeExam.id,
      sectionId: secPhysics.id,
      syllabusNodeId: nodeElectro.id,
      questionType: 'SINGLE_CHOICE',
      contentEn: 'A parallel plate capacitor with plate area $A$ and separation $d$ has capacitance $C_0$ in air. A dielectric slab of dielectric constant $K = 4$ and thickness $t = d/2$ is introduced between the plates. What is the new capacitance $C$ in terms of $C_0$?',
      contentHi: 'प्लेट क्षेत्रफल $A$ और दूरी $d$ वाले एक समांतर पट्टिका संधारित्र की वायु में धारिता $C_0$ है। परावैद्युतांक $K = 4$ और मोटाई $t = d/2$ वाली एक परावैद्युत पट्टिका को दोनों प्लेटों के बीच डाला जाता है। $C_0$ के पदों में नई धारिता $C$ क्या होगी?',
      optionsJson: JSON.stringify([
        { id: 'opt1', textEn: '1.6 C_0', textHi: '1.6 C_0' },
        { id: 'opt2', textEn: '2.5 C_0', textHi: '2.5 C_0' },
        { id: 'opt3', textEn: '0.625 C_0', textHi: '0.625 C_0' },
        { id: 'opt4', textEn: '4.0 C_0', textHi: '4.0 C_0' },
      ]),
      correctAnswerJson: JSON.stringify(['opt1']),
      explanationEn: 'The equivalent capacitance with a slab of thickness $t$ and dielectric constant $K$ is:\n$C = \\frac{\\varepsilon_0 A}{d - t + \\frac{t}{K}}$.\n\nSubstituting $t = d/2$ and $K = 4$:\n$C = \\frac{\\varepsilon_0 A}{d - \\frac{d}{2} + \\frac{d}{2 \\times 4}} = \\frac{\\varepsilon_0 A}{\\frac{d}{2} + \\frac{d}{8}} = \\frac{\\varepsilon_0 A}{\\frac{5d}{8}} = \\frac{8}{5} \\frac{\\varepsilon_0 A}{d} = 1.6 C_0$.\n\nHence, the capacitance increases to $1.6 C_0$.',
      explanationHi: 'परावैद्युत स्लैब के साथ संधारित्र की धारिता का सूत्र:\n$C = \\frac{\\varepsilon_0 A}{d - t + t/K}$.\n$t = d/2$ और $K = 4$ रखने पर:\n$C = \\frac{\\varepsilon_0 A}{d/2 + d/8} = \\frac{\\varepsilon_0 A}{5d/8} = \\frac{8}{5} C_0 = 1.6 C_0$.',
      difficulty: 'MEDIUM',
      isPYQ: true,
      pyqYear: '2023',
      pyqShift: 'Session 2, 8th April Shift 2',
      pyqPaper: 'Paper 1 (B.E./B.Tech)',
      sourceProvenance: 'Official NTA Certified JEE Archive 2023',
      sourceLicense: 'Authorized Public Domain Examination Record / Fair Academic Use',
      verificationStatus: 'VERIFIED',
      reviewerName: 'Prof. Ananya Iyer',
      reviewedAt: new Date('2023-05-10'),
      isAIGenerated: false,
    },
  });

  const q3 = await prisma.question.create({
    data: {
      examId: jeeExam.id,
      sectionId: secChemistry.id,
      syllabusNodeId: nodeOrganic.id,
      questionType: 'SINGLE_CHOICE',
      contentEn: 'Which of the following carbocations is the most stable?',
      contentHi: 'निम्नलिखित में से कौन सा कार्बधनायन सबसे अधिक स्थायी है?',
      optionsJson: JSON.stringify([
        { id: 'opt1', textEn: '(CH3)3C+ (tert-butyl cation)', textHi: '(CH3)3C+ (तृतीयक ब्यूटिल धनायन)' },
        { id: 'opt2', textEn: 'Tropylium cation (C7H7+)', textHi: 'ट्रोपिलियम धनायन (C7H7+)' },
        { id: 'opt3', textEn: 'Benzyl cation (C6H5-CH2+)', textHi: 'बेन्जिल धनायन (C6H5-CH2+)' },
        { id: 'opt4', textEn: 'Allyl cation (CH2=CH-CH2+)', textHi: 'एलिल धनायन (CH2=CH-CH2+)' },
      ]),
      correctAnswerJson: JSON.stringify(['opt2']),
      explanationEn: 'The Tropylium cation ($C_7H_7^+$) is planar, cyclic, completely conjugated with $(4n + 2) = 6$ $\\pi$ electrons ($n = 1$). It possesses extraordinary aromatic stability according to Hückel’s Rule, making it far more stable than even tertiary alkyl or simple benzylic carbocations.',
      explanationHi: 'ट्रोपिलियम धनायन ($C_7H_7^+$) हकल के नियम ($4n+2=6\\pi$ इलेक्ट्रॉन) के अनुसार पूर्णतः ऐरोमैटिक होता है। ऐरोमैटिक स्थायित्व के कारण यह तृतीयक या बेंजाइल कार्बधनायनों से भी कहीं अधिक स्थायी होता है।',
      difficulty: 'HARD',
      isPYQ: true,
      pyqYear: '2024',
      pyqShift: 'Session 1, 29th Jan Shift 2',
      sourceProvenance: 'Official NTA Question Bank 2024',
      sourceLicense: 'Authorized Fair Use',
      verificationStatus: 'VERIFIED',
      reviewerName: 'Dr. Vikram Malhotra',
      reviewedAt: new Date('2024-02-18'),
      isAIGenerated: false,
    },
  });

  const q4 = await prisma.question.create({
    data: {
      examId: jeeExam.id,
      sectionId: secMaths.id,
      syllabusNodeId: nodeCalculus.id,
      questionType: 'SINGLE_CHOICE',
      contentEn: 'Evaluate the definite integral: $\\int_{0}^{\\pi/2} \\frac{\\sin^3(x)}{\\sin^3(x) + \\cos^3(x)} \\, dx$.',
      contentHi: 'निश्चित समाकल का मान ज्ञात कीजिए: $\\int_{0}^{\\pi/2} \\frac{\\sin^3(x)}{\\sin^3(x) + \\cos^3(x)} \\, dx$.',
      optionsJson: JSON.stringify([
        { id: 'opt1', textEn: '\\pi / 4', textHi: '\\pi / 4' },
        { id: 'opt2', textEn: '\\pi / 2', textHi: '\\pi / 2' },
        { id: 'opt3', textEn: '1', textHi: '1' },
        { id: 'opt4', textEn: '\\pi', textHi: '\\pi' },
      ]),
      correctAnswerJson: JSON.stringify(['opt1']),
      explanationEn: 'Using the King\'s Property of definite integrals: $\\int_{a}^{b} f(x)dx = \\int_{a}^{b} f(a+b-x)dx$.\nHere $a=0, b=\\pi/2$, so replace $x$ with $(\\pi/2 - x)$:\n$I = \\int_{0}^{\\pi/2} \\frac{\\cos^3(x)}{\\cos^3(x) + \\sin^3(x)} dx$.\n\nAdding the two equations:\n$2I = \\int_{0}^{\\pi/2} \\frac{\\sin^3(x) + \\cos^3(x)}{\\sin^3(x) + \\cos^3(x)} dx = \\int_{0}^{\\pi/2} 1 \\, dx = \\frac{\\pi}{2}$.\n\nTherefore, $I = \\frac{\\pi}{4}$.',
      explanationHi: 'निश्चित समाकलन के गुणधर्म (King\'s Property) $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ का उपयोग करने पर:\n$2I = \\int_0^{\\pi/2} 1 \\, dx = \\pi/2 \\implies I = \\pi/4$.',
      difficulty: 'EASY',
      isPYQ: true,
      pyqYear: '2023',
      pyqShift: 'Session 1, 24th Jan Shift 1',
      sourceProvenance: 'Official NTA Archive 2023',
      sourceLicense: 'Authorized Fair Use',
      verificationStatus: 'VERIFIED',
      reviewerName: 'Prof. Ananya Iyer',
      reviewedAt: new Date('2023-02-12'),
      isAIGenerated: false,
    },
  });

  // AI-Generated Practice Question (marked clearly as AI generated, verified by reviewer)
  const q5 = await prisma.question.create({
    data: {
      examId: jeeExam.id,
      sectionId: secPhysics.id,
      syllabusNodeId: nodeMechanics.id,
      questionType: 'SINGLE_CHOICE',
      contentEn: '[AI Practice Variant] A projectile is launched from ground level with initial velocity $u = 40\\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. Neglecting air resistance and taking $g = 10\\text{ m/s}^2$, what is the velocity of the projectile when it reaches its maximum height?',
      contentHi: '[एआई अभ्यास प्रश्न] एक प्रक्षेप्य को जमीन से क्षैतिज से $30^\\circ$ के कोण पर प्रारंभिक वेग $u = 40\\text{ m/s}$ से प्रक्षेपित किया जाता है। वायु प्रतिरोध को नगण्य मानते हुए और $g = 10\\text{ m/s}^2$ लेते हुए, अधिकतम ऊंचाई पर प्रक्षेप्य का वेग क्या होगा?',
      optionsJson: JSON.stringify([
        { id: 'opt1', textEn: 'Zero', textHi: 'शून्य' },
        { id: 'opt2', textEn: '20 m/s', textHi: '20 m/s' },
        { id: 'opt3', textEn: '34.64 m/s (20√3 m/s)', textHi: '34.64 m/s (20√3 m/s)' },
        { id: 'opt4', textEn: '40 m/s', textHi: '40 m/s' },
      ]),
      correctAnswerJson: JSON.stringify(['opt3']),
      explanationEn: 'At the highest point of projectile motion, the vertical component of velocity becomes zero ($v_y = 0$).\nHowever, the horizontal component of velocity remains unchanged throughout flight because there is no horizontal acceleration ($a_x = 0$):\n$v_x = u \\cos(\\theta) = 40 \\times \\cos(30^\\circ) = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3} \\approx 34.64\\text{ m/s}$.\n\nTotal velocity at peak: $v = \\sqrt{v_x^2 + v_y^2} = v_x = 20\\sqrt{3}\\text{ m/s}$.',
      explanationHi: 'प्रक्षेप्य गति में अधिकतम ऊंचाई पर वेग का ऊर्ध्वाधर घटक शून्य हो जाता है ($v_y = 0$),\nलेकिन क्षैतिज घटक अपरिवर्तित रहता है: $v_x = u \\cos(30^\\circ) = 40 \\times (\\sqrt{3}/2) = 20\\sqrt{3} \\approx 34.64\\text{ m/s}$।\nसामान्य भूल: कई छात्र अधिकतम ऊंचाई पर कुल वेग को 0 मान लेते हैं, जबकि केवल ऊर्ध्वाधर घटक शून्य होता है।',
      difficulty: 'MEDIUM',
      isPYQ: false,
      sourceProvenance: 'ExamVerse AI Curated Synthesizer v2.4 (Pattern Cloned from JEE 2022/2023)',
      sourceLicense: 'ExamVerse Proprietary Verified Dataset',
      verificationStatus: 'VERIFIED',
      reviewerName: 'Prof. Ananya Iyer',
      reviewedAt: new Date('2024-03-01'),
      reviewerNotes: 'Validated numerical calculation and pedagogical distractor analysis.',
      isAIGenerated: true,
      aiModelUsed: 'Gemini 1.5 Pro / Curated Fine-tuned Engine',
      duplicateCheckHash: 'ai_gen_projectile_40ms_30deg',
    },
  });

  // 7. Full Mock Test Instance
  const mockTest = await prisma.test.create({
    data: {
      title: 'JEE Main 2024 Actual Paper - Jan 27 Shift 1 (All India Benchmark)',
      examId: jeeExam.id,
      patternVersionId: jeePattern.id,
      type: 'FULL_MOCK',
      durationMinutes: 180,
      totalMarks: 300,
      totalQuestions: 75,
      instructionsEn: '1. The exam comprises 3 sections: Physics, Chemistry, and Mathematics.\n2. Each correct answer carries +4 marks, while each incorrect response incurs a negative deduction of -1 mark.\n3. Unattempted questions receive 0 marks.\n4. You can navigate between sections freely.',
      instructionsHi: '1. परीक्षा में 3 खंड हैं: भौतिक विज्ञान, रसायन विज्ञान और गणित।\n2. प्रत्येक सही उत्तर के लिए +4 अंक दिए जाएंगे और प्रत्येक गलत उत्तर के लिए -1 अंक काटा जाएगा।\n3. अनुत्तरित प्रश्नों के लिए 0 अंक मिलेंगे।',
      pyqReference: 'JEE Main 2024 Session 1 Shift 1 Certified',
      isPublished: true,
    },
  });

  // Link questions to Test
  await prisma.testQuestion.createMany({
    data: [
      { testId: mockTest.id, questionId: q1.id, sectionName: 'Physics', questionNumber: 1, marks: 4.0, negativeMarks: 1.0 },
      { testId: mockTest.id, questionId: q2.id, sectionName: 'Physics', questionNumber: 2, marks: 4.0, negativeMarks: 1.0 },
      { testId: mockTest.id, questionId: q3.id, sectionName: 'Chemistry', questionNumber: 3, marks: 4.0, negativeMarks: 1.0 },
      { testId: mockTest.id, questionId: q4.id, sectionName: 'Mathematics', questionNumber: 4, marks: 4.0, negativeMarks: 1.0 },
      { testId: mockTest.id, questionId: q5.id, sectionName: 'Physics', questionNumber: 5, marks: 4.0, negativeMarks: 1.0 },
    ],
  });

  // 8. Sample Completed Attempt with Realistic Score and Empirical Percentile
  const attempt = await prisma.testAttempt.create({
    data: {
      userId: student.id,
      testId: mockTest.id,
      examId: jeeExam.id,
      startedAt: new Date(Date.now() - 3600 * 1000 * 2),
      submittedAt: new Date(Date.now() - 3600 * 1000 * 1),
      status: 'COMPLETED',
      totalScore: 11.0, // 3 correct (+12), 1 wrong (-1) = 11
      totalMarks: 20.0,
      accuracyPct: 75.0,
      percentile: 94.6, // Cohort empirical percentile
      totalAttempted: 4,
      totalCorrect: 3,
      totalIncorrect: 1,
      totalUnattempted: 1,
      timeSpentSeconds: 3420,
      sectionScoresJson: JSON.stringify({
        Physics: { score: 7.0, maxMarks: 12.0, correct: 2, wrong: 1, unattempted: 0 },
        Chemistry: { score: 4.0, maxMarks: 4.0, correct: 1, wrong: 0, unattempted: 0 },
        Mathematics: { score: 0.0, maxMarks: 4.0, correct: 0, wrong: 0, unattempted: 1 },
      }),
      responsesJson: JSON.stringify([
        { questionId: q1.id, selectedOptionIds: ['opt1'], isCorrect: false, marksAwarded: -1.0, timeSpentSec: 210, status: 'ANSWERED' },
        { questionId: q2.id, selectedOptionIds: ['opt1'], isCorrect: true, marksAwarded: 4.0, timeSpentSec: 180, status: 'ANSWERED' },
        { questionId: q3.id, selectedOptionIds: ['opt2'], isCorrect: true, marksAwarded: 4.0, timeSpentSec: 90, status: 'ANSWERED' },
        { questionId: q4.id, selectedOptionIds: [], isCorrect: false, marksAwarded: 0.0, timeSpentSec: 45, status: 'NOT_ANSWERED' },
        { questionId: q5.id, selectedOptionIds: ['opt3'], isCorrect: true, marksAwarded: 4.0, timeSpentSec: 140, status: 'ANSWERED' },
      ]),
    },
  });

  // 9. Persistent Mistake Journal Entry for the student
  await prisma.mistakeJournalEntry.create({
    data: {
      userId: student.id,
      questionId: q1.id,
      testAttemptId: attempt.id,
      mistakeTag: 'CONCEPTUAL_GAP',
      userNotes: 'I picked 19.6 N by immediately computing limiting friction! Forgot that static friction adjusts to equal the applied force (15 N) when applied force is below threshold.',
      revisionStatus: 'NEEDS_ATTENTION',
      reviewCount: 1,
      lastReviewedAt: new Date(),
      nextReviewDue: new Date(Date.now() + 86400 * 1000 * 2), // 2 days spaced repetition
    },
  });

  // 10. Audit Record
  await prisma.contentCoverageAudit.create({
    data: {
      examId: jeeExam.id,
      totalSyllabusTopics: 145,
      coveredSyllabusTopics: 143,
      verifiedPYQCount: 1850,
      pendingReviewCount: 12,
      auditorNotes: '2024 syllabus rationalization by NTA applied. 143/145 topics verified with minimum 10 PYQs per topic.',
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
