export interface SuperTetSubjectSpec {
  key: string;
  sectionNameEn: string;
  sectionNameHi: string;
  order: number;
  questionCount: number;
  marks: number;
  defaultMedium: 'hi' | 'en' | 'sa';
  topics: readonly string[];
}

export const SUPERTET_EXAM_SLUG = 'super-tet';
export const SUPERTET_DURATION_MINUTES = 150;
export const SUPERTET_TOTAL_QUESTIONS = 150;
export const SUPERTET_TOTAL_MARKS = 150;
export const SUPERTET_MARKS_PER_CORRECT = 1;
export const SUPERTET_NEGATIVE_MARKS = 0;

export const SUPERTET_DIFFICULTY_TIERS = {
  FOUNDATION: {
    code: 'FOUNDATION',
    labelEn: 'Foundation Tests',
    labelHi: 'आधारभूत अभ्यास (Foundation)',
    mockRange: [1, 20] as const,
  },
  MODERATE: {
    code: 'MODERATE',
    labelEn: 'Moderate Practice Tests',
    labelHi: 'मध्यम स्तर अभ्यास (Moderate)',
    mockRange: [21, 50] as const,
  },
  EXAM_STANDARD: {
    code: 'EXAM_STANDARD',
    labelEn: 'Actual Exam Standard',
    labelHi: 'परीक्षा स्तर (Exam Standard)',
    mockRange: [51, 80] as const,
  },
  ADVANCED: {
    code: 'ADVANCED',
    labelEn: 'Advanced Practice',
    labelHi: 'उच्च स्तरीय अभ्यास (Advanced)',
    mockRange: [81, 95] as const,
  },
  GRAND_MOCK: {
    code: 'GRAND_MOCK',
    labelEn: 'Grand Full-Length Mock',
    labelHi: 'ग्रैंड फुल मॉक (Grand Mock)',
    mockRange: [96, 100] as const,
  },
} as const;

export type SuperTetDifficultyTier = keyof typeof SUPERTET_DIFFICULTY_TIERS;

export const SUPERTET_SOURCE_TYPES = {
  VERIFIED_PYQ: 'VERIFIED_PYQ',
  PYQ_BASED_MOCK: 'PYQ_BASED_MOCK',
  ORIGINAL_FULL_MOCK: 'ORIGINAL_FULL_MOCK',
} as const;

export type SuperTetSourceType = (typeof SUPERTET_SOURCE_TYPES)[keyof typeof SUPERTET_SOURCE_TYPES];

export const SUPERTET_HISTORICAL_BENCHMARKS = [
  {
    year: 2019,
    recruitmentLabel: 'UP 69,000 Assistant Teacher Recruitment Exam (ATRE 2019)',
    examDate: 'January 6, 2019',
    questionFormat: '150 Objective MCQs, 150 Marks, 150 Minutes, No Negative Marking',
    cutoffs: [
      { category: 'General / Unreserved', marks: 97, outOf: 150, percentage: 65 },
      { category: 'OBC / SC / ST / Reserved', marks: 90, outOf: 150, percentage: 60 },
    ],
    disclaimerHi:
      'यह 2019 सहायक अध्यापक भर्ती परीक्षा (69,000 पद) का ऐतिहासिक अर्हक अंक संदर्भ है। आगामी परीक्षा के कट-ऑफ आधिकारिक अधिसूचना व रिक्तियों के अनुसार भिन्न हो सकते हैं।',
    disclaimerEn:
      'Historical qualifying benchmark from the 2019 UP ATRE (69,000 posts). Actual cutoffs depend on official notification and vacancies.',
  },
];

export const SUPERTET_DECLARATION_HI =
  'मैंने परीक्षा से संबंधित सभी निर्देश पढ़ एवं समझ लिए हैं और मैं परीक्षा देने के लिए तैयार हूँ।';

export const SUPERTET_DEFAULT_INSTRUCTIONS_HI = [
  'इस मॉक टेस्ट में कुल 150 वस्तुनिष्ठ (बहुविकल्पीय) प्रश्न हैं और अधिकतम अंक 150 हैं।',
  'परीक्षा की कुल अवधि 150 मिनट (2 घंटे 30 मिनट) है।',
  'प्रत्येक सही उत्तर के लिए +1 अंक दिया जाएगा और कोई नकारात्मक अंकन (Negative Marking = 0) नहीं है।',
  'प्रश्न पत्र में 12 खंड शामिल हैं: हिंदी (20), संस्कृत (10), अंग्रेज़ी (10), विज्ञान (10), गणित (20), पर्यावरण एवं सामाजिक अध्ययन (10), शिक्षण कौशल (10), बाल मनोविज्ञान (10), सामान्य ज्ञान एवं समसामयिक घटनाएँ (30), तार्किक ज्ञान (5), सूचना तकनीकी (5), तथा जीवन कौशल / प्रबंधन एवं अभिवृत्ति (10)।',
  'आप स्क्रीन पर दाईं ओर दिए गए प्रश्न पैलेट (Question Palette) की सहायता से किसी भी प्रश्न पर सीधे जा सकते हैं।',
  'उत्तर चुनने के बाद "सहेजें और अगला (Save & Next)" दबाएँ। किसी प्रश्न को बाद में देखने के लिए "पुनर्विचार हेतु चिह्नित करें (Mark for Review)" का उपयोग करें।',
  'परीक्षा के दौरान ब्राउज़र टैब बदलने या फुल-स्क्रीन छोड़ने की चेतावनी रिकॉर्ड की जाएगी। समय समाप्त होने पर परीक्षा स्वतः सबमिट हो जाएगी।',
].join('\n');

export const SUPERTET_DEFAULT_INSTRUCTIONS_EN = [
  'Total 150 objective Multiple Choice Questions carrying 150 marks.',
  'Total duration is 150 minutes (2 hours 30 minutes).',
  '+1 mark for each correct answer. There is NO negative marking (0).',
  'All 12 syllabus areas follow the UP Super TET pattern (Hindi 20, Sanskrit 10, English 10, Science 10, Mathematics 20, EVS & Social Studies 10, Teaching Skills 10, Child Psychology 10, GK & Current Affairs 30, Reasoning 5, Information Technology 5, Life Skills / Management & Aptitude 10).',
  'Use Save & Next to record your response. Exam auto-submits when the server countdown reaches 00:00.',
].join('\n');

export const SUPERTET_SUBJECTS: readonly SuperTetSubjectSpec[] = [
  {
    key: 'Hindi',
    sectionNameEn: 'Hindi',
    sectionNameHi: 'हिंदी',
    order: 1,
    questionCount: 20,
    marks: 20,
    defaultMedium: 'hi',
    topics: [
      'अपठित गद्यांश एवं पद्यांश',
      'संधि',
      'समास',
      'उपसर्ग एवं प्रत्यय',
      'तत्सम एवं तद्भव',
      'विलोम एवं पर्यायवाची',
      'मुहावरे एवं लोकोक्तियाँ',
      'अलंकार, रस एवं छंद',
      'वाक्य शुद्धि एवं व्याकरण',
      'हिंदी साहित्य एवं रचनाकार',
    ],
  },
  {
    key: 'Sanskrit',
    sectionNameEn: 'Sanskrit',
    sectionNameHi: 'संस्कृत',
    order: 2,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'sa',
    topics: [
      'संस्कृत गद्यांश एवं पद्यांश',
      'संधि (स्वर, व्यंजन, विसर्ग)',
      'समास',
      'प्रत्यय',
      'शब्द रूप',
      'धातु रूप एवं लकार',
      'कारक एवं विभक्ति',
      'संस्कृत संख्या ज्ञान (1–100)',
      'सूक्तियाँ एवं साहित्य',
    ],
  },
  {
    key: 'English',
    sectionNameEn: 'English',
    sectionNameHi: 'अंग्रेज़ी',
    order: 3,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'en',
    topics: [
      'Unseen Comprehension Passage',
      'Parts of Speech',
      'Tenses & Subject-Verb Agreement',
      'Active and Passive Voice',
      'Direct and Indirect Speech',
      'Prepositions & Conjunctions',
      'Articles & Determiners',
      'Vocabulary, Synonyms, Antonyms & Idioms',
    ],
  },
  {
    key: 'Science',
    sectionNameEn: 'Science',
    sectionNameHi: 'विज्ञान',
    order: 4,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'hi',
    topics: [
      'दैनिक जीवन में विज्ञान',
      'गति एवं बल',
      'ऊर्जा एवं ऊष्मा',
      'प्रकाश एवं ध्वनि',
      'जीवों की दुनिया एवं मानव शरीर',
      'स्वास्थ्य एवं स्वच्छता',
      'पर्यावरण एवं प्राकृतिक संसाधन',
      'पदार्थ एवं पदार्थ की अवस्थाएँ',
      'अम्ल, क्षार एवं लवण',
      'धातु एवं अधातु',
    ],
  },
  {
    key: 'Mathematics',
    sectionNameEn: 'Mathematics',
    sectionNameHi: 'गणित',
    order: 5,
    questionCount: 20,
    marks: 20,
    defaultMedium: 'hi',
    topics: [
      'संख्यात्मक क्षमता एवं अंकगणितीय संक्रियाएँ',
      'दशमलव एवं भिन्न',
      'स्थानीय मान एवं अंकित मान',
      'प्रतिशतता',
      'लाभ एवं हानि',
      'साधारण एवं चक्रवृद्धि ब्याज',
      'अनुपात एवं समानुपात',
      'औसत',
      'ऐकिक नियम एवं समय-कार्य',
      'गुणनखंड एवं बीजीय सर्वसमिकाएँ',
      'ज्यामिति (कोण, त्रिभुज, वृत्त)',
      'क्षेत्रमिति (परिमाप, क्षेत्रफल, आयतन)',
      'तथ्यात्मक आँकड़े एवं सांख्यिकी (माध्य, माध्यिका, बहुलक)',
    ],
  },
  {
    key: 'Environmental & Social Studies',
    sectionNameEn: 'Environmental & Social Studies',
    sectionNameHi: 'पर्यावरण एवं सामाजिक अध्ययन',
    order: 6,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'hi',
    topics: [
      'पृथ्वी की संरचना एवं सौरमंडल',
      'नदियाँ, पर्वत, महाद्वीप एवं महासागर',
      'प्राकृतिक संपदा एवं पारिस्थितिकी',
      'भारतीय स्वतंत्रता संग्राम',
      'भारतीय समाज सुधारक',
      'भारतीय संविधान एवं शासन व्यवस्था',
      'भारतीय भूगोल एवं यातायात सुरक्षा',
      'सांस्कृतिक विरासत एवं पर्यावरण संरक्षण',
    ],
  },
  {
    key: 'Teaching Skills',
    sectionNameEn: 'Teaching Skills',
    sectionNameHi: 'शिक्षण कौशल',
    order: 7,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'hi',
    topics: [
      'शिक्षण की विधियाँ एवं कौशल',
      'शिक्षण अधिगम के सिद्धांत',
      'वर्तमान भारतीय समाज एवं प्रारंभिक शिक्षा',
      'समावेशी शिक्षा',
      'प्रारंभिक शिक्षा के नवीन प्रयास',
      'शैक्षिक मूल्यांकन एवं मापन',
      'आरंभिक पठन कौशल',
      'शैक्षिक प्रबंधन एवं प्रशासन',
    ],
  },
  {
    key: 'Child Psychology',
    sectionNameEn: 'Child Psychology',
    sectionNameHi: 'बाल मनोविज्ञान',
    order: 8,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'hi',
    topics: [
      'वैयक्तिक भिन्नता',
      'बाल विकास को प्रभावित करने वाले कारक',
      'सीखने की आवश्यकता की पहचान',
      'पढ़ने के लिए वातावरण का सृजन',
      'सीखने के सिद्धांत एवं कक्षा शिक्षण में उपयोग',
      'दिव्यांग छात्रों हेतु विशेष व्यवस्था',
    ],
  },
  {
    key: 'General Knowledge & Current Affairs',
    sectionNameEn: 'General Knowledge & Current Affairs',
    sectionNameHi: 'सामान्य ज्ञान एवं समसामयिक घटनाएँ',
    order: 9,
    questionCount: 30,
    marks: 30,
    defaultMedium: 'hi',
    topics: [
      'अंतरराष्ट्रीय एवं राष्ट्रीय महत्त्व की समसामयिक घटनाएँ',
      'उत्तर प्रदेश से संबंधित महत्त्वपूर्ण घटनाक्रम एवं योजनाएँ',
      'प्रमुख व्यक्तित्व एवं नियुक्तियाँ',
      'पुरस्कार एवं सम्मान',
      'खेलकूद',
      'भारतीय संस्कृति एवं कला',
      'भारत का इतिहास, राजव्यवस्था एवं अर्थव्यवस्था (सामान्य)',
    ],
  },
  {
    key: 'Reasoning',
    sectionNameEn: 'Reasoning',
    sectionNameHi: 'तार्किक ज्ञान',
    order: 10,
    questionCount: 5,
    marks: 5,
    defaultMedium: 'hi',
    topics: [
      'सादृश्य एवं वर्गीकरण',
      'कथन एवं तर्क / निष्कर्ष',
      'कूटलेखन-कूटवाचन (Coding-Decoding)',
      'श्रृंखला एवं क्रम व्यवस्था',
      'दिशा ज्ञान एवं रक्त संबंध',
      'पहेली एवं वेन आरेख',
    ],
  },
  {
    key: 'Information Technology',
    sectionNameEn: 'Information Technology',
    sectionNameHi: 'सूचना तकनीकी',
    order: 11,
    questionCount: 5,
    marks: 5,
    defaultMedium: 'hi',
    topics: [
      'शिक्षण कौशल विकास में तकनीकी',
      'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
      'इंटरनेट एवं नेटवर्किंग',
      'स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)',
      'ओपन एजुकेशनल रिसोर्सेस (OER)',
    ],
  },
  {
    key: 'Life Skills / Management & Aptitude',
    sectionNameEn: 'Life Skills / Management & Aptitude',
    sectionNameHi: 'जीवन कौशल / प्रबंधन एवं अभिवृत्ति',
    order: 12,
    questionCount: 10,
    marks: 10,
    defaultMedium: 'hi',
    topics: [
      'व्यावसायिक आचरण एवं नीति',
      'प्रेरणा (Motivation)',
      'शिक्षक की भूमिका (सुविधाप्रदाता, अनुश्रवणकर्ता, नेतृत्वकर्ता)',
      'संवैधानिक और मानवीय मूल्य',
      'दंड एवं पुरस्कार व्यवस्था का प्रभावी प्रयोग',
    ],
  },
] as const;

export const SUPERTET_SUBJECT_QUOTAS: Record<string, number> = Object.fromEntries(
  SUPERTET_SUBJECTS.map((s) => [s.key, s.questionCount])
);

export const SUPERTET_SUBJECT_HI_MAP: Record<string, string> = Object.fromEntries(
  SUPERTET_SUBJECTS.map((s) => [s.key, s.sectionNameHi])
);

export function getTierForMockNumber(mockNumber: number): SuperTetDifficultyTier {
  if (mockNumber <= 20) return 'FOUNDATION';
  if (mockNumber <= 50) return 'MODERATE';
  if (mockNumber <= 80) return 'EXAM_STANDARD';
  if (mockNumber <= 95) return 'ADVANCED';
  return 'GRAND_MOCK';
}

export function getAccessTypeForMockNumber(mockNumber: number): 'free' | 'premium' {
  return mockNumber >= 1 && mockNumber <= 5 ? 'free' : 'premium';
}

export function getDifficultyForTier(tier: SuperTetDifficultyTier): 'EASY' | 'MEDIUM' | 'HARD' {
  switch (tier) {
    case 'FOUNDATION':
      return 'EASY';
    case 'MODERATE':
    case 'EXAM_STANDARD':
      return 'MEDIUM';
    case 'ADVANCED':
    case 'GRAND_MOCK':
      return 'HARD';
  }
}
