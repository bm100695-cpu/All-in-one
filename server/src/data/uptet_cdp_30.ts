export interface UptetQuestionDef {
  subject: string;
  topic: string;
  questionType: string;
  contentHi: string;
  contentEn: string;
  options: { id: string; textHi: string; textEn: string }[];
  correctAnswer: string;
  explanationHi: string;
  explanationEn: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  sourceReference: string;
}

export const uptetCdpQuestions: UptetQuestionDef[] = [
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Theories of Learning (Thorndike)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'निम्न में से कौन-सा थार्नडाइक के अधिगम के प्राथमिक नियमों में शामिल नहीं है?',
    contentEn: "Which of the following is NOT included in Thorndike's primary laws of learning?",
    options: [
      { id: 'A', textHi: 'अभ्यास का नियम', textEn: 'Law of Exercise' },
      { id: 'B', textHi: 'प्रभाव का नियम', textEn: 'Law of Effect' },
      { id: 'C', textHi: 'तत्परता का नियम', textEn: 'Law of Readiness' },
      { id: 'D', textHi: 'सहचर्यात्मक स्थानान्तरण का नियम', textEn: 'Law of Associative Shifting' }
    ],
    correctAnswer: 'D',
    explanationHi: "थार्नडाइक ने अधिगम के तीन मुख्य नियम दिए: तत्परता, अभ्यास और प्रभाव का नियम। 'सहचर्यात्मक स्थानान्तरण' गौण नियम है।",
    explanationEn: "Thorndike proposed three primary laws: Readiness, Exercise, and Effect. Associative shifting is a secondary law.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#3'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Cognitive Development (Jean Piaget)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'पियाजे के अनुसार संज्ञानात्मक विकास की तृतीय अवस्था निम्न में से कौन-सी है?',
    contentEn: "According to Piaget, which of the following is the third stage of cognitive development?",
    options: [
      { id: 'A', textHi: 'औपचारिक संक्रिया अवस्था', textEn: 'Formal Operational Stage' },
      { id: 'B', textHi: 'पूर्व-संक्रिया अवस्था', textEn: 'Pre-operational Stage' },
      { id: 'C', textHi: 'मूर्त संक्रिया अवस्था (7-11 वर्ष)', textEn: 'Concrete Operational Stage (7-11 yrs)' },
      { id: 'D', textHi: 'संवेदनात्मक गामक अवस्था', textEn: 'Sensory-motor Stage' }
    ],
    correctAnswer: 'C',
    explanationHi: "पियाजे के 4 चरण हैं: 1. संवेदी पेशीय (0-2), 2. पूर्व संक्रियात्मक (2-7), 3. मूर्त संक्रियात्मक (7-11), 4. औपचारिक (11+)।",
    explanationEn: "Piaget's 4 stages: Sensorimotor, Pre-operational, Concrete Operational (3rd stage), Formal Operational.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#8'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Moral Development (Kohlberg)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'कोहलबर्ग के अनुसार किस अवस्था में नैतिकता बाह्य कारकों द्वारा निर्धारित होती है?',
    contentEn: "According to Kohlberg, at which level is morality determined by external factors?",
    options: [
      { id: 'A', textHi: 'पूर्व-पारंपरिक अवस्था', textEn: 'Pre-conventional Level' },
      { id: 'B', textHi: 'पारंपरिक अवस्था', textEn: 'Conventional Level' },
      { id: 'C', textHi: 'उत्तर-पारंपरिक अवस्था', textEn: 'Post-conventional Level' },
      { id: 'D', textHi: 'इनमें से कोई नहीं', textEn: 'None of these' }
    ],
    correctAnswer: 'A',
    explanationHi: "पूर्व-पारंपरिक स्तर पर बच्चे सही और गलत का निर्णय बाह्य दंड या पुरस्कार के आधार पर करते हैं।",
    explanationEn: "At the pre-conventional level, morality is externally controlled through punishment and rewards.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#14'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Operant Conditioning (Skinner)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'क्रियाप्रसूत अनुबंधन सिद्धांत का प्रतिपादन किसने किया था?',
    contentEn: "Who propounded the Operant Conditioning Theory of learning?",
    options: [
      { id: 'A', textHi: 'क्लार्क एल. हल', textEn: 'Clark L. Hull' },
      { id: 'B', textHi: 'एडवर्ड थार्नडाइक', textEn: 'Edward Thorndike' },
      { id: 'C', textHi: 'हेगार्टी', textEn: 'Hegarty' },
      { id: 'D', textHi: 'बी.एफ. स्किनर', textEn: 'B.F. Skinner' }
    ],
    correctAnswer: 'D',
    explanationHi: "बी.एफ. स्किनर ने चूहों व कबूतरों पर प्रयोग कर क्रियाप्रसूत अनुबंधन (Operant Conditioning) सिद्धांत दिया।",
    explanationEn: "B.F. Skinner propounded Operant Conditioning using experimental Skinner boxes.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, CDP Q#2'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Intelligence & Mental Age',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'मानसिक आयु (Mental Age) का प्रत्यय सर्वप्रथम किसने दिया था?',
    contentEn: "Who first introduced the concept of 'Mental Age'?",
    options: [
      { id: 'A', textHi: 'विलियम स्टर्न', textEn: 'William Stern' },
      { id: 'B', textHi: 'अल्फ्रेड बिने एवं साइमन', textEn: 'Alfred Binet & Theodore Simon' },
      { id: 'C', textHi: 'लुईस टर्मन', textEn: 'Lewis Terman' },
      { id: 'D', textHi: 'चार्ल्स स्पीयरमैन', textEn: 'Charles Spearman' }
    ],
    correctAnswer: 'B',
    explanationHi: "1908 में बिने-साइमन ने मानसिक आयु का प्रत्यय दिया। स्टर्न ने IQ का अनुपात और टर्मन ने 100 से गुणा का सूत्र दिया।",
    explanationEn: "Alfred Binet and Simon introduced Mental Age in 1908.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#22'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Sociocultural Theory (Vygotsky)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'वाइगोत्स्की के अनुसार बच्चों के सीखने में निम्नलिखित में से किस कारक की महत्वपूर्ण भूमिका है?',
    contentEn: "According to Vygotsky, which factor plays a significant role in children's learning?",
    options: [
      { id: 'A', textHi: 'सामाजिक (Social)', textEn: 'Social' },
      { id: 'B', textHi: 'आनुवंशिक (Hereditary)', textEn: 'Hereditary' },
      { id: 'C', textHi: 'नैतिक (Moral)', textEn: 'Moral' },
      { id: 'D', textHi: 'शारीरिक (Physical)', textEn: 'Physical' }
    ],
    correctAnswer: 'A',
    explanationHi: "लेव वाइगोत्स्की ने सामाजिक-सांस्कृतिक सिद्धांत प्रतिपादित किया जिसमें सामाजिक अंतःक्रिया और ZPD मुख्य हैं।",
    explanationEn: "Lev Vygotsky emphasized social interaction, language, and culture in cognitive development.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#9'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Classical Conditioning (Pavlov)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'अनुकूलित अनुक्रिया सिद्धांत (Classical Conditioning) किसके अनुकूलन पर बल देता है?',
    contentEn: "Classical conditioning theory lays emphasis on the conditioning of:",
    options: [
      { id: 'A', textHi: 'तर्क (Reasoning)', textEn: 'Reasoning' },
      { id: 'B', textHi: 'व्यवहार (Behaviour)', textEn: 'Behaviour' },
      { id: 'C', textHi: 'चिंतन (Thinking)', textEn: 'Thinking' },
      { id: 'D', textHi: 'अभिप्रेरणा (Motivation)', textEn: 'Motivation' }
    ],
    correctAnswer: 'B',
    explanationHi: "इवान पावलोव का शास्त्रीय अनुबंधन सिद्धांत व्यवहार (Behaviour) के अनुकूलन व साहचर्य पर बल देता है।",
    explanationEn: "Pavlov's classical conditioning focuses on stimulus-response associative behavior conditioning.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#11'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Insight Learning (Kohler)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'सूझ या अंतर्दृष्टि के सिद्धांत का प्रतिपादन किसने किया?',
    contentEn: "Who propounded the theory of Insight Learning?",
    options: [
      { id: 'A', textHi: 'थार्नडाइक', textEn: 'Thorndike' },
      { id: 'B', textHi: 'गेस्टाल्टवादी मनोवैज्ञानिक (कोहलर)', textEn: 'Gestalt Psychologists (Kohler)' },
      { id: 'C', textHi: 'हेगार्टी', textEn: 'Hegarty' },
      { id: 'D', textHi: 'स्किनर', textEn: 'Skinner' }
    ],
    correctAnswer: 'B',
    explanationHi: "वोल्फगैंग कोहलर ने 'सुल्तान' नामक चिम्पांजी पर प्रयोग कर सूझ या अंतर्दृष्टि (Insight) का सिद्धांत दिया।",
    explanationEn: "Wolfgang Köhler (Gestalt school) demonstrated insight learning using Sultan the chimpanzee.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#5'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Microteaching (सूक्ष्म शिक्षण)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'भारतीय प्रतिमान (NCERT) में सूक्ष्म शिक्षण चक्र की कुल अवधि कितनी होती है?',
    contentEn: "What is the total duration of the microteaching cycle in the Indian (NCERT) model?",
    options: [
      { id: 'A', textHi: '36 मिनट', textEn: '36 Minutes' },
      { id: 'B', textHi: '40 मिनट', textEn: '40 Minutes' },
      { id: 'C', textHi: '45 मिनट', textEn: '45 Minutes' },
      { id: 'D', textHi: '30 मिनट', textEn: '30 Minutes' }
    ],
    correctAnswer: 'A',
    explanationHi: "NCERT सूक्ष्म शिक्षण चक्र: शिक्षण (6m) + प्रतिपुष्टि (6m) + पुनः योजना (12m) + पुनः शिक्षण (6m) + पुनः प्रतिपुष्टि (6m) = कुल 36 मिनट।",
    explanationEn: "The standard Indian NCERT microteaching cycle consists of 36 minutes total.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#15'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Need Hierarchy Theory (Maslow)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'मैस्लो के अभिप्रेरणा सिद्धांत में सर्वोच्च स्तर की आवश्यकता कौन-सी है?',
    contentEn: "Which is the highest-level need in Maslow's hierarchy of needs?",
    options: [
      { id: 'A', textHi: 'सुरक्षा की आवश्यकता', textEn: 'Safety Needs' },
      { id: 'B', textHi: 'सम्बद्धता एवं प्रेम की आवश्यकता', textEn: 'Belongingness & Love Needs' },
      { id: 'C', textHi: 'सम्मान की आवश्यकता', textEn: 'Esteem Needs' },
      { id: 'D', textHi: 'आत्मसिद्धि की आवश्यकता', textEn: 'Self-Actualization Need' }
    ],
    correctAnswer: 'D',
    explanationHi: "अब्राहम मैस्लो के पदानुक्रम में सबसे शीर्ष पर 'आत्मसिद्धि' (Self-actualization) की आवश्यकता होती है।",
    explanationEn: "Self-Actualization is the pinnacle/highest need in Maslow's hierarchy.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#19'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Learning Disabilities (डिस्लेक्सिया)',
    questionType: 'SINGLE_CHOICE',
    contentHi: "'डिस्लेक्सिया' (Dyslexia) किससे संबंधित विकार है?",
    contentEn: "'Dyslexia' is associated primarily with disability in:",
    options: [
      { id: 'A', textHi: 'पढ़ने संबंधी विकार', textEn: 'Reading Disability' },
      { id: 'B', textHi: 'लिखने संबंधी विकार', textEn: 'Writing Disability' },
      { id: 'C', textHi: 'गणितीय गणना संबंधी विकार', textEn: 'Mathematical Disability' },
      { id: 'D', textHi: 'मानसिक विकार', textEn: 'Mental Retardation' }
    ],
    correctAnswer: 'A',
    explanationHi: "डिस्लेक्सिया पठन अक्षमता (Reading disorder) है जिसमें शब्दों को पहचानने व वर्तनी में कठिनाई होती है।",
    explanationEn: "Dyslexia is a learning disorder characterized by difficulty reading.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2016 Paper 1, CDP Q#12'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Learning Disabilities (डिसग्राफिया)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'हाथ की मांसपेशियों के समन्वय तथा हस्तलेखन में होने वाली अधिगम अक्षमता को क्या कहते हैं?',
    contentEn: "A learning disability affecting hand-muscle coordination and handwriting is known as:",
    options: [
      { id: 'A', textHi: 'डिस्कैल्कूलिया', textEn: 'Dyscalculia' },
      { id: 'B', textHi: 'डिसग्राफिया', textEn: 'Dysgraphia' },
      { id: 'C', textHi: 'डिस्फेजिया', textEn: 'Dysphasia' },
      { id: 'D', textHi: 'डिसप्रैक्सिया', textEn: 'Dyspraxia' }
    ],
    correctAnswer: 'B',
    explanationHi: "डिसग्राफिया (Dysgraphia) लेखन संबंधी अक्षमता है जिसमें सुंदर और सही अक्षर लिखने में समस्या आती है।",
    explanationEn: "Dysgraphia is a neurological condition causing impaired handwriting.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, CDP Q#18'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Learning Disabilities (डिसकैलकुलिया)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'गणितीय गणनाओं को करने में अक्षमता निम्न में से किससे संबंधित है?',
    contentEn: "Inability to perform basic mathematical calculations is known as:",
    options: [
      { id: 'A', textHi: 'डिस्लेक्सिया', textEn: 'Dyslexia' },
      { id: 'B', textHi: 'डिसग्राफिया', textEn: 'Dysgraphia' },
      { id: 'C', textHi: 'डिसकैलकुलिया', textEn: 'Dyscalculia' },
      { id: 'D', textHi: 'डिस्टीमिया', textEn: 'Dysthymia' }
    ],
    correctAnswer: 'C',
    explanationHi: "डिसकैलकुलिया (Dyscalculia) अंकों और गणितीय संक्रियाओं को समझने की अक्षमता है।",
    explanationEn: "Dyscalculia is a learning disorder affecting arithmetic ability.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#14'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Multiple Intelligences (Gardner)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'बहुबुद्धि सिद्धांत (Theory of Multiple Intelligences) का प्रतिपादन किसने किया था?',
    contentEn: "Who propounded the Theory of Multiple Intelligences?",
    options: [
      { id: 'A', textHi: 'जीन पियाजे', textEn: 'Jean Piaget' },
      { id: 'B', textHi: 'हावर्ड गार्डनर', textEn: 'Howard Gardner' },
      { id: 'C', textHi: 'अल्फ्रेड बिने', textEn: 'Alfred Binet' },
      { id: 'D', textHi: 'रॉबर्ट स्टर्नबर्ग', textEn: 'Robert Sternberg' }
    ],
    correctAnswer: 'B',
    explanationHi: "हावर्ड गार्डनर ने 1983 में 'फ्रेम्स ऑफ माइंड' पुस्तक में बहुबुद्धि सिद्धांत प्रतिपादित किया।",
    explanationEn: "Howard Gardner proposed the Theory of Multiple Intelligences in 1983.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#18'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Two-Factor Theory of Intelligence (Spearman)',
    questionType: 'SINGLE_CHOICE',
    contentHi: "बुद्धि के द्विकारक सिद्धांत (Two-Factor Theory) में 'g' कारक और 's' कारक किसने दिए?",
    contentEn: "Who introduced the 'g' factor and 's' factor in the Two-Factor Theory of intelligence?",
    options: [
      { id: 'A', textHi: 'थर्स्टन', textEn: 'Thurstone' },
      { id: 'B', textHi: 'चार्ल्स स्पीयरमैन', textEn: 'Charles Spearman' },
      { id: 'C', textHi: 'गिलफोर्ड', textEn: 'Guilford' },
      { id: 'D', textHi: 'कैटल', textEn: 'Cattell' }
    ],
    correctAnswer: 'B',
    explanationHi: "स्पीयरमैन ने 1904 में बुद्धि के दो कारक बताए: सामान्य कारक (g factor) और विशिष्ट कारक (s factor)।",
    explanationEn: "Charles Spearman proposed the Two-Factor theory comprising general (g) and specific (s) factors.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#7'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Principles of Child Development',
    questionType: 'SINGLE_CHOICE',
    contentHi: "विकास का 'मस्तकाधोमुखी' (Cephalocaudal) नियम बताता है कि शारीरिक विकास किस दिशा में होता है?",
    contentEn: "The Cephalocaudal principle of development states that physical development proceeds from:",
    options: [
      { id: 'A', textHi: 'पैर से सिर की ओर', textEn: 'Feet to head' },
      { id: 'B', textHi: 'सिर से पैर की ओर', textEn: 'Head to feet' },
      { id: 'C', textHi: 'केंद्र से बाहर की ओर', textEn: 'Center to extremities' },
      { id: 'D', textHi: 'सामान्य से विशिष्ट की ओर', textEn: 'General to specific' }
    ],
    correctAnswer: 'B',
    explanationHi: "मस्तकाधोमुखी (Cephalocaudal) सिद्धांत के अनुसार विकास सिर से पैर की ओर अग्रसर होता है।",
    explanationEn: "Cephalocaudal sequence implies development begins from head and progresses downward toward feet.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#25'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Principles of Child Development',
    questionType: 'SINGLE_CHOICE',
    contentHi: "शरीर के केंद्र भाग से परिधि या बाह्य अंगों की ओर होने वाला विकास कहलाता है:",
    contentEn: "Development that proceeds from the center of the body outward toward extremities is called:",
    options: [
      { id: 'A', textHi: 'समीप-दूराभिमुख (Proximodistal)', textEn: 'Proximodistal' },
      { id: 'B', textHi: 'मस्तकाधोमुखी (Cephalocaudal)', textEn: 'Cephalocaudal' },
      { id: 'C', textHi: 'वर्गाकार विकास', textEn: 'Square development' },
      { id: 'D', textHi: 'रैखिक विकास', textEn: 'Linear development' }
    ],
    correctAnswer: 'A',
    explanationHi: "समीप-दूराभिमुख (Proximodistal) विकास का सिद्धांत बताता है कि विकास रीढ़ की हड्डी से शुरू होकर उंगलियों तक पहुंचता है।",
    explanationEn: "The proximodistal pattern states development proceeds from the spinal axis outward to extremities.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#21'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Memory and Forgetting (Ebbinghaus)',
    questionType: 'SINGLE_CHOICE',
    contentHi: "'विस्मृति वक्र' (Curve of Forgetting) का सर्वप्रथम प्रायोगिक अध्ययन किसने किया था?",
    contentEn: "Who conducted the first experimental study on the 'Curve of Forgetting'?",
    options: [
      { id: 'A', textHi: 'विलियम जेम्स', textEn: 'William James' },
      { id: 'B', textHi: 'हर्मन एबिंगहास', textEn: 'Hermann Ebbinghaus' },
      { id: 'C', textHi: 'बार्टलेट', textEn: 'Frederic Bartlett' },
      { id: 'D', textHi: 'कर्ट लेविन', textEn: 'Kurt Lewin' }
    ],
    correctAnswer: 'B',
    explanationHi: "हर्मन एबिंगहास (1885) ने निरर्थक पदों (Nonsense syllables) पर प्रयोग कर विस्मरण वक्र प्रतिपादित किया।",
    explanationEn: "Hermann Ebbinghaus pioneered experimental research on memory and the forgetting curve in 1885.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#24'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Transfer of Learning',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शरीर के एक भाग को दिए गए प्रशिक्षण का अंतरण दूसरे भाग में होना क्या कहलाता है?',
    contentEn: "Transfer of training acquired by one part of the body to another part is called:",
    options: [
      { id: 'A', textHi: 'क्षैतिज अंतरण (Horizontal)', textEn: 'Horizontal transfer' },
      { id: 'B', textHi: 'ऊर्ध्व अंतरण (Vertical)', textEn: 'Vertical transfer' },
      { id: 'C', textHi: 'द्विपार्श्विक अंतरण (Bilateral)', textEn: 'Bilateral transfer' },
      { id: 'D', textHi: 'शून्य अंतरण (Zero)', textEn: 'Zero transfer' }
    ],
    correctAnswer: 'C',
    explanationHi: "दाएं हाथ से सीखी गई क्रिया का बाएं हाथ में अंतरित हो जाना द्विपार्श्विक अंतरण (Bilateral transfer) कहलाता है।",
    explanationEn: "Bilateral transfer occurs when learning on one side of the body transfers to symmetrical opposite organs.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#27'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Creativity (सृजनात्मकता)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'सृजनात्मकता (Creativity) का मुख्य रूप से किससे संबंध होता है?',
    contentEn: "Creativity is primarily associated with which type of thinking?",
    options: [
      { id: 'A', textHi: 'अभिसारी चिंतन (Convergent thinking)', textEn: 'Convergent thinking' },
      { id: 'B', textHi: 'अपसारी चिंतन (Divergent thinking)', textEn: 'Divergent thinking' },
      { id: 'C', textHi: 'अनुकरण (Imitation)', textEn: 'Imitation' },
      { id: 'D', textHi: 'प्रतिरूपण (Modeling)', textEn: 'Modeling' }
    ],
    correctAnswer: 'B',
    explanationHi: "गिलफोर्ड के अनुसार सृजनात्मकता का संबंध अपसारी चिंतन (Divergent Thinking - एक समस्या के अनेक नवीन हल) से है।",
    explanationEn: "Creativity relies primarily on divergent thinking to generate novel, diverse solutions.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#11'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Personality Assessment (Rorschach)',
    questionType: 'SINGLE_CHOICE',
    contentHi: "रोर्शा स्याही धब्बा परीक्षण (Rorschach Inkblot Test) में कुल कितने कार्ड होते हैं?",
    contentEn: "How many total cards are used in the Rorschach Inkblot Test?",
    options: [
      { id: 'A', textHi: '10 कार्ड', textEn: '10 Cards' },
      { id: 'B', textHi: '20 कार्ड', textEn: '20 Cards' },
      { id: 'C', textHi: '30 कार्ड', textEn: '30 Cards' },
      { id: 'D', textHi: '15 कार्ड', textEn: '15 Cards' }
    ],
    correctAnswer: 'A',
    explanationHi: "हर्मन रोर्शा के परीक्षण में कुल 10 कार्ड होते हैं (5 काले-सफेद, 2 काले-लाल और 3 बहुरंगी)।",
    explanationEn: "The Rorschach inkblot test contains 10 standardized inkblot cards.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#28'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Thematic Apperception Test (TAT)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'टी.ए.टी. (TAT - Thematic Apperception Test) का निर्माण किसने किया था?',
    contentEn: "Who developed the Thematic Apperception Test (TAT)?",
    options: [
      { id: 'A', textHi: 'हर्मन रोर्शा', textEn: 'Hermann Rorschach' },
      { id: 'B', textHi: 'मॉर्गन एवं मरे', textEn: 'Morgan and Murray' },
      { id: 'C', textHi: 'कैटल', textEn: 'Raymond Cattell' },
      { id: 'D', textHi: 'हॉर्न', textEn: 'Horn' }
    ],
    correctAnswer: 'B',
    explanationHi: "1935 में सी.डी. मॉर्गन और हेनरी ए. मरे ने व्यक्तित्व मापन का TAT परीक्षण तैयार किया।",
    explanationEn: "The TAT was developed in 1935 by Christina Morgan and Henry Murray.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#29'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Action Research (क्रियात्मक अनुसंधान)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शिक्षा के क्षेत्र में क्रियात्मक अनुसंधान (Action Research) को स्थापित करने का श्रेय किसे जाता है?',
    contentEn: "Who is credited with pioneering Action Research in the field of education?",
    options: [
      { id: 'A', textHi: 'कर्ट लेविन', textEn: 'Kurt Lewin' },
      { id: 'B', textHi: 'स्टीफन एम. कोरे', textEn: 'Stephen M. Corey' },
      { id: 'C', textHi: 'जॉन डीवी', textEn: 'John Dewey' },
      { id: 'D', textHi: 'स्किनर', textEn: 'B.F. Skinner' }
    ],
    correctAnswer: 'B',
    explanationHi: "शिक्षा के क्षेत्र में विद्यालयी समस्याओं के समाधान हेतु क्रियात्मक अनुसंधान का श्रेय स्टीफन एम. कोरे (1953) को जाता है।",
    explanationEn: "Stephen M. Corey popularized action research in educational practice in 1953.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#26'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Levels of Teaching (Herbart)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शिक्षण के स्मृति स्तर (Memory Level of Teaching) के मुख्य प्रस्तावक कौन हैं?',
    contentEn: "Who is the chief exponent of the Memory Level of Teaching?",
    options: [
      { id: 'A', textHi: 'हर्बर्ट (Herbart)', textEn: 'Herbart' },
      { id: 'B', textHi: 'मॉरिसन (Morrison)', textEn: 'Morrison' },
      { id: 'C', textHi: 'हंट (Hunt)', textEn: 'Hunt' },
      { id: 'D', textHi: 'ब्लूम (Bloom)', textEn: 'Bloom' }
    ],
    correctAnswer: 'A',
    explanationHi: "शिक्षण के तीन स्तर: 1. स्मृति स्तर (हर्बर्ट), 2. बोध स्तर (मॉरिसन), 3. चिंतन स्तर (हंट)।",
    explanationEn: "Herbart is the proponent of memory level teaching, Morrison of understanding level, Hunt of reflective level.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, CDP Q#27'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Levels of Teaching (Morrison)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शिक्षण के बोध स्तर (Understanding Level of Teaching) का प्रतिपादन किसने किया था?',
    contentEn: "Who propounded the Understanding Level of Teaching?",
    options: [
      { id: 'A', textHi: 'एच. सी. मॉरिसन', textEn: 'H. C. Morrison' },
      { id: 'B', textHi: 'जे. एफ. हर्बर्ट', textEn: 'J. F. Herbart' },
      { id: 'C', textHi: 'हंट', textEn: 'Hunt' },
      { id: 'D', textHi: 'डीवी', textEn: 'John Dewey' }
    ],
    correctAnswer: 'A',
    explanationHi: "बोध स्तर के शिक्षण का प्रतिपादन एच. सी. मॉरिसन ने किया, जिसमें संबंधों और नियमों की समझ पर बल होता है।",
    explanationEn: "H. C. Morrison developed the understanding level of teaching model.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#30'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Levels of Teaching (Hunt)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शिक्षण के चिंतनशील स्तर (Reflective Level of Teaching) के प्रवर्तक कौन हैं?',
    contentEn: "Who is the pioneer of the Reflective Level of Teaching?",
    options: [
      { id: 'A', textHi: 'हंट (Hunt)', textEn: 'Hunt' },
      { id: 'B', textHi: 'मॉरिसन', textEn: 'Morrison' },
      { id: 'C', textHi: 'हर्बर्ट', textEn: 'Herbart' },
      { id: 'D', textHi: 'गाग्ने', textEn: 'Robert Gagné' }
    ],
    correctAnswer: 'A',
    explanationHi: "चिंतन स्तर शिक्षण का सर्वोच्च स्तर है, जिसके मुख्य प्रतिपादक हंट (Hunt) हैं।",
    explanationEn: "Hunt developed the reflective level model, focusing on problem-solving and critical reflection.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, CDP Q#29'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Assessment and Evaluation (CCE)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'कक्षा शिक्षण के दौरान सीखने में सुधार हेतु किया जाने वाला मूल्यांकन क्या कहलाता है?',
    contentEn: "Assessment conducted during instructional process to monitor and improve learning is called:",
    options: [
      { id: 'A', textHi: 'रचनात्मक / निर्माणात्मक मूल्यांकन', textEn: 'Formative Assessment' },
      { id: 'B', textHi: 'योगात्मक / संकलनात्मक मूल्यांकन', textEn: 'Summative Assessment' },
      { id: 'C', textHi: 'मानक-संदर्भित मूल्यांकन', textEn: 'Norm-referenced Assessment' },
      { id: 'D', textHi: 'निदानात्मक मूल्यांकन केवल', textEn: 'Diagnostic Assessment only' }
    ],
    correctAnswer: 'A',
    explanationHi: "रचनात्मक मूल्यांकन (Formative assessment) शिक्षण-अधिगम प्रक्रिया के दौरान निरंतर प्रतिपुष्टि हेतु किया जाता है।",
    explanationEn: "Formative assessment is ongoing during instruction to guide improvements in learning.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, CDP Q#17'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Right to Education Act 2009',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'शिक्षा का अधिकार अधिनियम (RTE Act) 2009 के तहत प्राथमिक स्तर पर छात्र-शिक्षक अनुपात कितना निर्धारित है?',
    contentEn: "Under the RTE Act 2009, what is the prescribed pupil-teacher ratio at primary level?",
    options: [
      { id: 'A', textHi: '30 : 1', textEn: '30 : 1' },
      { id: 'B', textHi: '35 : 1', textEn: '35 : 1' },
      { id: 'C', textHi: '40 : 1', textEn: '40 : 1' },
      { id: 'D', textHi: '25 : 1', textEn: '25 : 1' }
    ],
    correctAnswer: 'A',
    explanationHi: "RTE Act 2009 के अनुसार प्राथमिक विद्यालय (कक्षा 1-5) के लिए छात्र-शिक्षक अनुपात 30:1 है।",
    explanationEn: "The pupil-teacher ratio prescribed for primary level under RTE 2009 is 30:1.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, CDP Q#21'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'National Curriculum Framework 2005',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'राष्ट्रीय पाठ्यचर्या रूपरेखा (NCF) 2005 के अनुसार शिक्षक की मुख्य भूमिका क्या है?',
    contentEn: "According to NCF 2005, what is the primary role of a teacher?",
    options: [
      { id: 'A', textHi: 'अधिनायकवादी', textEn: 'Authoritarian' },
      { id: 'B', textHi: 'अनुज्ञात्मक', textEn: 'Permissive' },
      { id: 'C', textHi: 'सुविधादाता / सुगमकर्ता', textEn: 'Facilitator' },
      { id: 'D', textHi: 'उपदेशक', textEn: 'Preacher' }
    ],
    correctAnswer: 'C',
    explanationHi: "NCF 2005 के अनुसार शिक्षक ज्ञान का दाता नहीं अपितु सीखने की प्रक्रिया में एक 'सुविधादाता' (Facilitator) है।",
    explanationEn: "NCF 2005 designates the teacher as a facilitator of student-led discovery and inquiry.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2016 Paper 1, CDP Q#27'
  },
  {
    subject: 'Child Development & Pedagogy',
    topic: 'Emotion and Cognition',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'संज्ञान (Cognition) और संवेग (Emotion) के मध्य संबंध के बारे में कौन-सा कथन सत्य है?',
    contentEn: "Which statement is true regarding the relationship between cognition and emotion?",
    options: [
      { id: 'A', textHi: 'वे एक-दूसरे से पूर्णतः स्वतंत्र हैं', textEn: 'They are completely independent' },
      { id: 'B', textHi: 'वे एक-दूसरे से सन्निहित एवं परस्पर जुड़े हैं', textEn: 'They are interwoven and interconnected' },
      { id: 'C', textHi: 'संज्ञान संवेग को प्रभावित करता है परंतु संवेग संज्ञान को नहीं', textEn: 'Cognition affects emotion but not vice versa' },
      { id: 'D', textHi: 'संवेग संज्ञान से अप्रभावित रहता है', textEn: 'Emotion remains unaffected by cognition' }
    ],
    correctAnswer: 'B',
    explanationHi: "आधुनिक बाल मनोविज्ञान के अनुसार संज्ञान और संवेग एक-दूसरे में अंतर्निहित व परस्पर जुड़े हुए (Interwoven) होते हैं।",
    explanationEn: "Cognition and emotion are bi-directionally interwoven and inseparable in learning processes.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2021 Paper 1, CDP Q#30'
  }
];
