import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Teaching Skills');

export const TEACHING_BANK_PART1: RawBankQuestion[] = [
  // =========================================================================
  // 1. शिक्षण की विधियाँ एवं कौशल (Teaching Methods & Skills) — 185 Questions
  // =========================================================================
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'आगमन विधि (Inductive Method) में शिक्षण की प्रक्रिया किस क्रम में आगे बढ़ती है?',
    'In the Inductive Method, in which sequence does the teaching process proceed?',
    ['विशिष्ट उदाहरणों से सामान्य नियम की ओर', 'From specific examples to general rule'],
    [
      ['सामान्य नियम से विशिष्ट उदाहरण की ओर', 'From general rule to specific example'],
      ['अमूर्त अवधारणा से मूर्त वस्तु की ओर', 'From abstract concept to concrete object'],
      ['सूत्र रटने से अभ्यास करने की ओर', 'From memorizing formula to practicing'],
    ],
    'आगमन विधि में शिक्षक पहले विद्यार्थियों के समक्ष अनेक विशिष्ट एवं मूर्त उदाहरण प्रस्तुत करता है, फिर उनके निरीक्षण और विश्लेषण के आधार पर विद्यार्थी स्वयं सामान्य नियम या सूत्र का निर्माण करते हैं।',
    'In the inductive method, the teacher first presents several specific and concrete examples, and through observation and analysis, students arrive at a general rule or formula.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'प्राथमिक कक्षा में व्याकरण की संज्ञा या विशेषण पढ़ाने के लिए निम्नलिखित में से कौन-सी विधि सर्वाधिक उपयुक्त एवं मनोवैज्ञानिक मानी जाती है?',
    'Which of the following methods is considered most suitable and psychological for teaching grammar nouns or adjectives in primary classes?',
    ['आगमन विधि', 'Inductive Method'],
    [
      ['निगमन विधि', 'Deductive Method'],
      ['व्याख्यान विधि', 'Lecture Method'],
      ['सूत्र विधि', 'Formula Method'],
    ],
    'प्राथमिक स्तर पर बच्चे मूर्त अनुभवों व उदाहरणों से बेहतर सीखते हैं। आगमन विधि में पहले परिचित उदाहरण दिए जाते हैं और फिर नियम निकाला जाता है, जिससे रटने की प्रवृत्ति घटती है।',
    'At the primary level, children learn better from concrete experiences and examples. The inductive method presents familiar examples first and derives the rule, reducing rote memorization.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'निगमन विधि (Deductive Method) का प्रमुख गुण निम्नलिखित में से क्या है?',
    'Which of the following is a major merit of the Deductive Method?',
    ['कम समय में अधिक पाठ्यक्रम व अभ्यास पूर्ण कराना', 'Completing more syllabus and practice in less time'],
    [
      ['विद्यार्थियों में स्वयं खोजने की प्रवृत्ति विकसित करना', 'Developing self-discovery tendency in students'],
      ['रटने की प्रवृत्ति को पूर्णतः समाप्त करना', 'Completely eliminating rote learning'],
      ['केवल पूर्व-प्राथमिक स्तर के लिए उपयोगी होना', 'Being useful only for pre-primary level'],
    ],
    'निगमन विधि में शिक्षक पहले नियम या सूत्र बता देता है और विद्यार्थी उस पर आधारित प्रश्न हल करते हैं, जिससे समय की बचत होती है और उच्च कक्षाओं में अभ्यास में तेजी आती है।',
    'In the deductive method, the teacher states the rule or formula first and students solve problems based on it, saving time and accelerating practice in higher classes.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'एक गणित शिक्षक पहले आयत के क्षेत्रफल का सूत्र A = l × b बताता है और फिर अभ्यास के लिए पाँच प्रश्न देता है। शिक्षक किस विधि का प्रयोग कर रहा है?',
    'A mathematics teacher first states the formula for area of a rectangle A = l × b and then gives five problems for practice. Which method is the teacher using?',
    ['निगमन विधि', 'Deductive Method'],
    [
      ['आगमन विधि', 'Inductive Method'],
      ['ह्यूरिस्टिक विधि', 'Heuristic Method'],
      ['प्रोजेक्ट विधि', 'Project Method'],
    ],
    'जब शिक्षक सीधे नियम या सूत्र प्रस्तुत करके उसके बाद उदाहरण व अभ्यास कराता है, तो वह निगमन विधि (नियम से उदाहरण) का उपयोग कर रहा होता है।',
    'When a teacher directly presents a rule or formula followed by examples and practice, they are using the deductive method (rule to example).',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'आगमन-निगमन विधि के समन्वित प्रयोग (Inductive-Deductive Approach) में निगमन चरण का मुख्य कार्य क्या होता है?',
    'In the combined Inductive-Deductive approach, what is the main function of the deductive phase?',
    ['आगमन द्वारा प्राप्त नियम का सत्यापन एवं अनुप्रयोग करना', 'Verifying and applying the rule derived through induction'],
    [
      ['उदाहरणों को नकार कर नए नियम गढ़ना', 'Rejecting examples to invent new rules'],
      ['कक्षा में मौन वाचन प्रारंभ करना', 'Starting silent reading in class'],
      ['विद्यार्थियों का केवल मौखिक मूल्यांकन करना', 'Conducting only oral evaluation of students'],
    ],
    'सर्वश्रेष्ठ शिक्षण में आगमन से नियम निकाला जाता है और फिर निगमन द्वारा उस नियम को विभिन्न नई परिस्थितियों व प्रश्नों पर लागू कर सत्यापित किया जाता है।',
    'In best teaching practice, a rule is derived inductively and then verified and consolidated by applying it to new problems deductively.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'आगमन विधि की मुख्य सीमा (Limitation) क्या मानी जाती है?',
    'What is considered the main limitation of the Inductive Method?',
    ['यह समय-साध्य है और इससे शीघ्र पाठ्यक्रम पूरा करना कठिन होता है', 'It is time-consuming and difficult to complete the syllabus quickly'],
    [
      ['इसमें विद्यार्थी निष्क्रिय श्रोता बने रहते हैं', 'Students remain passive listeners in it'],
      ['यह स्मृति स्तर को बिल्कुल भी सहायता नहीं देती', 'It does not support memory retention at all'],
      ['इसमें कोई उदाहरण प्रयोग नहीं किए जाते', 'No examples are used in it'],
    ],
    'आगमन विधि में प्रत्येक नियम तक पहुंचने के लिए कई उदाहरणों का विश्लेषण करना पड़ता है, जिससे समय अधिक लगता है और हर विषय के प्रत्येक प्रकरण में इसका उपयोग कठिन होता है।',
    'In the inductive method, analyzing multiple examples to reach each rule takes considerable time, making it hard to cover vast syllabi quickly.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण विधि',
    'विश्लेषण विधि (Analytic Method) में समस्या को हल करने की दिशा क्या होती है?',
    'In the Analytic Method, what is the direction of solving a problem?',
    ['अज्ञात से ज्ञात की ओर', 'From unknown to known'],
    [
      ['ज्ञात से अज्ञात की ओर', 'From known to unknown'],
      ['निष्कर्ष से परिकल्पना की ओर', 'From conclusion to hypothesis'],
      ['सरल से जटिल की ओर केवल रटकर', 'From simple to complex merely by rote'],
    ],
    'विश्लेषण का अर्थ किसी जटिल समस्या को छोटे-छोटे भागों में तोड़ना है। इसमें हम अज्ञात (जो सिद्ध करना है) से प्रारंभ करके उन ज्ञात तथ्यों तक पहुँचते हैं जिनसे वह सिद्ध होता है।',
    'Analysis means breaking a complex problem into smaller parts. It proceeds from the unknown (what is to be proved) back to known facts that establish it.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण विधि',
    'ज्यामिति के प्रमेय (Geometry Theorems) सिद्ध करते समय संश्लेषण विधि (Synthetic Method) का मार्ग क्या होता है?',
    'While proving geometry theorems, what is the path of the Synthetic Method?',
    ['दिए गए ज्ञात तथ्यों से अज्ञात निष्कर्ष की ओर बढ़ना', 'Proceeding from given known facts towards the unknown conclusion'],
    [
      ['निष्कर्ष को पहले मानकर विपरीत जाना', 'Assuming the conclusion first and going backwards'],
      ['बिना किसी तर्क के सीधे चित्र बनाना', 'Drawing a diagram directly without reasoning'],
      ['प्रमेय को छोटे-छोटे हिस्सों में तोड़कर छोड़ देना', 'Breaking the theorem into parts and leaving it'],
    ],
    'संश्लेषण का अर्थ छोटे-छोटे ज्ञात भागों को जोड़कर निष्कर्ष तक पहुँचना है। इसलिए संश्लेषण विधि ज्ञात से अज्ञात तथा परिकल्पना से निष्कर्ष की ओर चलती है।',
    'Synthesis means combining small known parts to reach a conclusion. Thus, the synthetic method moves from known to unknown and from hypothesis to conclusion.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण विधि',
    '“विश्लेषण विधि खोज की विधि है, जबकि संश्लेषण विधि प्रस्तुतीकरण की विधि है।” इस कथन का सबसे सटीक शैक्षिक निहितार्थ क्या है?',
    '"Analysis is the method of discovery, whereas synthesis is the method of presentation." What is the most accurate educational implication of this statement?',
    ['पहले विश्लेषण से हल खोजा जाए और फिर संश्लेषण से क्रमबद्ध लिखा जाए', 'First find the solution via analysis and then write it systematically via synthesis'],
    [
      ['कक्षा में केवल संश्लेषण विधि का ही उपयोग होना चाहिए', 'Only the synthetic method should be used in class'],
      ['विश्लेषण विधि केवल भाषा शिक्षण में प्रयुक्त होती है', 'Analysis is used only in language teaching'],
      ['दोनों विधियाँ एक-दूसरे की विरोधी हैं और साथ नहीं चल सकतीं', 'Both methods oppose each other and cannot go together'],
    ],
    'विश्लेषण में विद्यार्थी यह समझता है कि कोई कदम क्यों उठाया गया (खोज), और संश्लेषण में उसे संक्षिप्त व तार्किक क्रम में प्रस्तुत करता है। दोनों पूरक हैं।',
    'In analysis, the learner discovers why each step is taken, and in synthesis, presents it concisely and logically. Both methods are complementary.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण विधि',
    'जब किसी हिंदी शिक्षक द्वारा वाक्य के कर्ता, कर्म और क्रिया को अलग-अलग पहचानकर वाक्य संरचना समझाई जाती है, तो यह किस विधि का उदाहरण है?',
    'When a Hindi teacher explains sentence structure by separately identifying subject, object, and verb, which method is this an example of?',
    ['विश्लेषण विधि', 'Analytic Method'],
    [
      ['संश्लेषण विधि', 'Synthetic Method'],
      ['खेल विधि', 'Play-way Method'],
      ['डाल्टन विधि', 'Dalton Plan'],
    ],
    'संपूर्ण वाक्य को उसके घटक अंगों (कर्ता, कर्म, क्रिया) में विभक्त करके अध्ययन करना विश्लेषण विधि कहलाता है।',
    'Dividing a whole sentence into its constituent parts (subject, object, verb) for study is an example of the analytic method.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'शिक्षा में प्रोजेक्ट विधि (Project Method) के प्रतिपादक के रूप में किसे जाना जाता है?',
    'Who is recognized as the propounder of the Project Method in education?',
    ['विलियम हर्ड किलपैट्रिक', 'William Heard Kilpatrick'],
    [
      ['हेनरी आर्मस्ट्रांग', 'Henry Armstrong'],
      ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
      ['हेलेन पार्कहर्स्ट', 'Helen Parkhurst'],
    ],
    'प्रोजेक्ट विधि का विकास जॉन डीवी के प्रयोजनवाद (Pragmatism) के दर्शन पर आधारित है, किंतु इसे शिक्षण विधि के रूप में 1918 में विलियम हर्ड किलपैट्रिक ने प्रतिपादित किया।',
    'The Project Method is rooted in John Dewey’s philosophy of pragmatism, but it was formulated as a formal teaching method in 1918 by William Heard Kilpatrick.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'किलपैट्रिक के अनुसार प्रोजेक्ट की सटीक परिभाषा क्या है?',
    'According to Kilpatrick, what is the accurate definition of a project?',
    ['सामाजिक वातावरण में पूर्ण तन्मयता से किया जाने वाला सोद्देश्य कार्य', 'A whole-hearted purposeful activity proceeding in a social environment'],
    [
      ['केवल घर पर किया जाने वाला लिखित गृहकार्य', 'Written homework done solely at home'],
      ['शिक्षक द्वारा श्यामपट्ट पर हल किया गया अभ्यास', 'An exercise solved by the teacher on the blackboard'],
      ['परीक्षा में अंक बढ़ाने हेतु चार्ट की नकल करना', 'Copying a chart to increase exam marks'],
    ],
    'किलपैट्रिक ने प्रोजेक्ट को "सामाजिक वातावरण में पूर्ण संलग्नता (whole-hearted) के साथ की जाने वाली सोद्देश्य क्रिया" के रूप में परिभाषित किया है।',
    'Kilpatrick defined a project as "a whole-hearted purposeful activity proceeding in a social environment."',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि के प्रमुख सोपानों (Steps) का सही क्रम क्या है?',
    'What is the correct sequence of major steps in the Project Method?',
    ['परिस्थिति उत्पन्न करना → प्रोजेक्ट का चयन → योजना बनाना → क्रियान्वयन → मूल्यांकन → अभिलेखन', 'Providing situation → Selection → Planning → Execution → Evaluation → Recording'],
    [
      ['योजना बनाना → मूल्यांकन → परिस्थिति उत्पन्न करना → चयन → क्रियान्वयन', 'Planning → Evaluation → Providing situation → Selection → Execution'],
      ['चयन → अभिलेखन → क्रियान्वयन → योजना बनाना → मूल्यांकन', 'Selection → Recording → Execution → Planning → Evaluation'],
      ['मूल्यांकन → चयन → योजना → परिस्थिति → क्रियान्वयन', 'Evaluation → Selection → Planning → Situation → Execution'],
    ],
    'प्रोजेक्ट विधि के छह क्रमबद्ध सोपान हैं: परिस्थिति प्रदान करना, प्रोजेक्ट चुनना, कार्यक्रम की योजना बनाना, कार्य का क्रियान्वयन, कार्य का मूल्यांकन और संपूर्ण प्रक्रिया का लेखा-जोखा (अभिलेखन)।',
    'The six systematic steps of the project method are: providing a situation, choosing the project, planning, executing, evaluating, and recording.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'एक पर्यावरण अध्ययन (EVS) की शिक्षिका कक्षा 5 के बच्चों से विद्यालय परिसर के पौधों का सर्वेक्षण कर उनकी पत्तियों का हर्बेरियम बनवाती हैं। यह किस विधि का श्रेष्ठ उदाहरण है?',
    'An EVS teacher asks Class 5 students to survey plants on the school campus and prepare a herbarium of their leaves. This is an excellent example of which method?',
    ['प्रोजेक्ट विधि', 'Project Method'],
    [
      ['व्याख्यान विधि', 'Lecture Method'],
      ['सूक्ष्म शिक्षण विधि', 'Micro-teaching Method'],
      ['निगमन विधि', 'Deductive Method'],
    ],
    'वास्तविक परिवेश में समूह या व्यक्तिगत रूप से योजना बनाकर किसी मूर्त उत्पाद (हर्बेरियम) का निर्माण करना प्रोजेक्ट विधि का सटीक उदाहरण है।',
    'Planning and creating a tangible product (herbarium) in a real environment is a classic example of the project method.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि किस दार्शनिक विचारधारा की देन है?',
    'The Project Method is a contribution of which philosophical school of thought?',
    ['प्रयोजनवाद (Pragmatism)', 'Pragmatism'],
    [
      ['आदर्शवाद (Idealism)', 'Idealism'],
      ['प्रकृतिवाद (Naturalism) केवल एकान्त में', 'Solitary Naturalism'],
      ['अस्तित्ववाद (Existentialism)', 'Existentialism'],
    ],
    'प्रोजेक्ट विधि जॉन डीवी के प्रयोजनवाद (व्यावहारिकतावाद) पर आधारित है, जो "करके सीखने" (Learning by Doing) और उपयोगिता पर बल देती है।',
    'The Project Method is based on John Dewey’s pragmatism, which emphasizes "learning by doing" and practical utility.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'किलपैट्रिक ने प्रोजेक्ट के चार मुख्य प्रकार बताए हैं। निम्नलिखित में से कौन-सा उनमें शामिल नहीं है?',
    'Kilpatrick classified projects into four main types. Which of the following is NOT among them?',
    ['अनुकरणात्मक दंड प्रोजेक्ट (Punitive Project)', 'Punitive Project'],
    [
      ['रचनात्मक प्रोजेक्ट (Producer Type)', 'Producer Type Project'],
      ['उपभोक्ता प्रोजेक्ट (Consumer Type)', 'Consumer Type Project'],
      ['समस्यात्मक प्रोजेक्ट (Problem Type)', 'Problem Type Project'],
    ],
    'किलपैट्रिक के चार प्रकार हैं— रचनात्मक (Producer), उपभोक्ता/रसास्वादन (Consumer), समस्यात्मक (Problem) तथा अभ्यासात्मक/विशिष्ट कौशल सीखना (Drill/Specific learning)। दंड प्रोजेक्ट जैसा कोई प्रकार नहीं है।',
    'Kilpatrick’s four types are Producer, Consumer, Problem, and Drill (Specific Learning). There is no punitive project type.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'शिक्षा में "खेल विधि" (Play-way Method) शब्द का सर्वप्रथम व्यवस्थित प्रयोग और प्रचार किसने किया?',
    'Who first systematically used and popularized the term "Play-way Method" in education?',
    ['हेनरी काल्डवेल कुक', 'Henry Caldwell Cook'],
    [
      ['मारिया मोंटेसरी', 'Maria Montessori'],
      ['बी.एफ. स्किनर', 'B.F. Skinner'],
      ['जे.एफ. हरबर्ट', 'J.F. Herbart'],
    ],
    'यद्यपि खेल द्वारा शिक्षा के विचार फ्रोबेल ने दिए, किंतु अंग्रेजी शिक्षण में "Play-way" शब्द का सर्वप्रथम प्रयोग और लोकप्रियता हेनरी काल्डवेल कुक ने अपनी पुस्तक "The Play Way" (1917) में की।',
    'Although Froebel championed learning through play, the term "Play-way" was coined and popularized by Henry Caldwell Cook in his book "The Play Way" (1917).',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'प्राथमिक विद्यालय में बच्चों को जोड़-घटाना सिखाने के लिए "दुकान-दुकान" (नकली मुद्रा से खरीद-बिक्री) का खेल खिलाना किस सिद्धांत को चरितार्थ करता है?',
    'Making primary school children play a "shopkeeper" game (buying and selling with play money) to teach addition and subtraction exemplifies which principle?',
    ['खेल विधि द्वारा आनंदपूर्ण एवं व्यावहारिक अधिगम', 'Joyful and practical learning through Play-way method'],
    [
      ['निगमन विधि द्वारा अमूर्त अभ्यास', 'Abstract practice via Deductive method'],
      ['कठोर अनुशासन द्वारा स्मृति प्रशिक्षण', 'Memory training via strict discipline'],
      ['सूक्ष्म शिक्षण का पुनर्बलन कौशल', 'Reinforcement skill of micro-teaching'],
    ],
    'दुकान-दुकान खेल से बच्चे बिना बोझ महसूस किए वास्तविक जीवन से जुड़कर गणितीय संक्रियाएँ सहजता और आनंद से सीखते हैं।',
    'Through the shopkeeper game, children connect with real life and learn mathematical operations joyfully and naturally without burden.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'खेल विधि के माध्यम से शिक्षण करने पर बालक के किस पक्ष का सर्वाधिक समग्र विकास होता है?',
    'Teaching through the Play-way method leads to the holistic development of which aspects of the child?',
    ['शारीरिक, मानसिक, सामाजिक एवं संवेगात्मक सभी पक्षों का', 'Physical, mental, social, and emotional aspects all together'],
    [
      ['केवल शारीरिक मांसपेशियों का', 'Only physical muscles'],
      ['केवल रटकर याद करने की क्षमता का', 'Only rote memorization ability'],
      ['केवल लेखन गति का', 'Only writing speed'],
    ],
    'खेल एक स्वाभाविक क्रिया है जिसमें बच्चा दौड़ता-भागता है (शारीरिक), नियम व रणनीति समझता है (मानसिक), सहपाठियों से सहयोग करता है (सामाजिक) तथा खुशी/हार-जीत को संभालता है (संवेगात्मक)।',
    'Play is a natural activity involving movement (physical), rules/strategy (mental), peer cooperation (social), and handling joy/failure (emotional).',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक (खोज/अन्वेषण) विधि के प्रतिपादक कौन हैं?',
    'Who is the propounder of the Heuristic (Discovery) Method?',
    ['प्रो. हेनरी एडवर्ड आर्मस्ट्रांग', 'Prof. Henry Edward Armstrong'],
    [
      ['जॉन डीवी', 'John Dewey'],
      ['सुकरात', 'Socrates'],
      ['ड्वाइट एलन', 'Dwight Allen'],
    ],
    'ह्यूरिस्टिक शब्द ग्रीक शब्द "Heurisco" से बना है, जिसका अर्थ है "मैं खोजता हूँ" (I find/discover)। रसायन विज्ञान के प्रोफेसर हेनरी एडवर्ड आर्मस्ट्रांग ने इस विधि का प्रतिपादन किया।',
    'The word Heuristic derives from the Greek "Heurisco", meaning "I discover". Prof. Henry Edward Armstrong propounded this method.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि में विद्यार्थी की भूमिका क्या होती है?',
    'What is the role of the student in the Heuristic Method?',
    ['एक स्वतंत्र अन्वेषक या नन्हे वैज्ञानिक की', 'That of an independent investigator or young scientist'],
    [
      ['शिक्षक के नोट्स उतारने वाले लिपिक की', 'That of a clerk copying teacher’s notes'],
      ['प्रश्नों के उत्तर रटने वाले परीक्षार्थी की', 'That of an examinee memorizing answers'],
      ['केवल व्याख्यान सुनने वाले श्रोता की', 'That of a passive listener to lectures'],
    ],
    'आर्मस्ट्रांग का मानना था कि विद्यार्थी को सत्य सीधे न बताकर उसे स्वयं प्रयोग, निरीक्षण व तर्क द्वारा खोजने का अवसर देना चाहिए, जिससे वह अन्वेषक की भूमिका में रहे।',
    'Armstrong believed students should not be told facts directly; instead, they should discover truth themselves through experimentation and observation, acting like investigators.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ग्रीक शब्द "Heurisco" (ह्यूरिस्को), जिससे ह्यूरिस्टिक विधि का नाम पड़ा, का शाब्दिक अर्थ क्या है?',
    'What is the literal meaning of the Greek word "Heurisco", from which the Heuristic method derives its name?',
    ['मैं खोजता हूँ', 'I find / I discover'],
    [
      ['मैं सुनता हूँ', 'I listen'],
      ['मैं आदेश देता हूँ', 'I command'],
      ['मैं स्मरण करता हूँ', 'I memorize'],
    ],
    '"Heurisco" का अर्थ "मैं खोज निकालता हूँ" होता है। इसी कारण इस विधि को अन्वेषण या खोज विधि भी कहा जाता है।',
    '"Heurisco" means "I find" or "I discover", which is why this method is also called the discovery method.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि के प्रयोग में निम्नलिखित में से कौन-सी व्यावहारिक कठिनाई प्राथमिक स्तर पर आती है?',
    'Which of the following practical difficulties arises when using the Heuristic Method at the primary level?',
    ['छोटे बच्चों में पर्याप्त पूर्व-ज्ञान व धैर्य का अभाव तथा अत्यधिक समय लगना', 'Lack of sufficient prior knowledge and patience in young children, and excessive time required'],
    [
      ['बच्चों में जिज्ञासा का पूर्णतः न होना', 'Complete absence of curiosity in children'],
      ['विज्ञान प्रयोगशाला का अत्यधिक सस्ता होना', 'Science laboratories being too inexpensive'],
      ['शिक्षक का कोई मार्गदर्शक न होना आवश्यक है', 'No guidance from the teacher being permissible'],
    ],
    'ह्यूरिस्टिक विधि वैज्ञानिक दृष्टिकोण विकसित करती है, पर छोटे बच्चों से प्रत्येक तथ्य की स्वतः खोज करवाना असंभव और अत्यधिक समय लेने वाला होता है; उन्हें शिक्षक के मार्गदर्शन की आवश्यकता होती है।',
    'While the heuristic method builds scientific temper, expecting young children to discover every fact on their own is impractical and overly time-consuming without scaffolding.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी शिक्षण पद्धति की प्रवर्तक डॉ. मारिया मोंटेसरी मूल रूप से किस देश और पेशे से संबंधित थीं?',
    'Dr. Maria Montessori, founder of the Montessori method, originally belonged to which country and profession?',
    ['इटली की चिकित्सक (Doctor)', 'Physician from Italy'],
    [
      ['जर्मनी की दार्शनिक', 'Philosopher from Germany'],
      ['अमेरिका की समाजशास्त्री', 'Sociologist from America'],
      ['फ्रांस की गणितज्ञ', 'Mathematician from France'],
    ],
    'मारिया मोंटेसरी इटली की प्रथम महिला चिकित्सकों में से एक थीं। उन्होंने 1907 में रोम में "कासा देई बाम्बिनी" (Children’s House) की स्थापना कर मोंटेसरी पद्धति का विकास किया।',
    'Maria Montessori was an Italian physician. She founded "Casa dei Bambini" (Children’s House) in Rome in 1907 and developed the Montessori method.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में बच्चों को प्रारंभिक शिक्षा देते समय किस पर सर्वाधिक बल दिया जाता है?',
    'In the Montessori method, what is given the greatest emphasis while educating young children?',
    ['ज्ञानेंद्रियों एवं कर्मेंद्रियों का प्रशिक्षण (Didactic Apparatus द्वारा)', 'Training of senses and motor organs (through Didactic Apparatus)'],
    [
      ['कठोर परीक्षा एवं रैंकिंग प्रणाली', 'Strict examination and ranking system'],
      ['समूह में बैठकर उच्च स्वर में पहाड़े रटना', 'Chanting multiplication tables aloud in groups'],
      ['केवल पुस्तकीय व्याख्यान सुनना', 'Listening only to textbook lectures'],
    ],
    'मोंटेसरी ने विशेष स्व-सुधारात्मक शिक्षण उपकरण (Didactic Apparatus) विकसित किए, जिनसे बच्चे छूकर, देखकर, सुनकर अपनी इंद्रियों को प्रशिक्षित करते हैं और स्वयं अपनी त्रुटि सुधारते हैं।',
    'Montessori designed self-correcting didactic apparatus through which children train their senses and motor skills by touching, seeing, and correcting their own errors.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में भाषा के कौशलों में लिखना और पढ़ना किस क्रम में सिखाया जाता है?',
    'In what sequence are writing and reading taught in the Montessori method?',
    ['पहले लिखना, फिर पढ़ना', 'Writing first, then reading'],
    [
      ['पहले पढ़ना, फिर लिखना', 'Reading first, then reading comprehension only'],
      ['पहले व्याकरण, फिर बोलना', 'Grammar first, then speaking'],
      ['दोनों को एक साथ रटाकर', 'Both together by rote'],
    ],
    'सामान्य परंपरा (सुनना-बोलना-पढ़ना-लिखना) के विपरीत, मोंटेसरी ने पाया कि बच्चे रेगमाल के अक्षरों (Sandpaper Letters) पर अंगुली फेरकर मांसपेशीय स्मृति से लिखना पहले सीख लेते हैं, फिर पढ़ना सहज हो जाता है।',
    'Unlike the traditional order, Montessori observed that children learn writing first through muscular training (e.g., tracing sandpaper letters), making reading easier afterward.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी विद्यालय में शिक्षिका को क्या नाम दिया जाता है और उसकी भूमिका कैसी होती है?',
    'In a Montessori school, what title is given to the teacher and what is her role?',
    ['निदेशिका (Directress), जो सुसज्जित परिवेश में मार्गदर्शन करती है', 'Directress, who guides within a prepared environment'],
    [
      ['नियंत्रक (Controller), जो कठोर दंड देती है', 'Controller, who gives strict punishment'],
      ['व्याख्याता (Lecturer), जो लगातार बोलती रहती है', 'Lecturer, who speaks continuously'],
      ['परीक्षक (Examiner), जो प्रतिदिन अंक काटती है', 'Examiner, who deducts marks daily'],
    ],
    'मोंटेसरी ने शिक्षक को "Directress" कहा है, जो कक्षा में प्रभुत्व न जमाकर बच्चे की आवश्यकताओं का सूक्ष्म निरीक्षण करती है और उसे उपयुक्त सामग्री उपलब्ध कराती है।',
    'Montessori called the teacher a "Directress", who observes the child’s needs quietly in a prepared environment and guides them toward suitable learning materials.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'किंडरगार्टन (Kindergarten) प्रणाली के जनक फ्रेडरिक फ्रोबेल किस देश के शिक्षाशास्त्री थे?',
    'Friedrich Froebel, the founder of the Kindergarten system, was an educationist from which country?',
    ['जर्मनी', 'Germany'],
    [
      ['स्विट्जरलैंड', 'Switzerland'],
      ['इंग्लैंड', 'England'],
      ['रूस', 'Russia'],
    ],
    'जर्मन शिक्षाशास्त्री फ्रेडरिक फ्रोबेल ने 1837 में ब्लैंकनबर्ग (जर्मनी) में पहला किंडरगार्टन स्थापित किया। "किंडरगार्टन" का अर्थ "बच्चों का बगीचा" होता है।',
    'German educationist Friedrich Froebel established the first Kindergarten in Blankenburg, Germany in 1837. "Kindergarten" literally means "children’s garden".',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'फ्रोबेल की किंडरगार्टन उपमा के अनुसार विद्यालय, बालक और शिक्षक क्रमशः किसके समान हैं?',
    'According to Froebel’s Kindergarten metaphor, what do the school, child, and teacher respectively represent?',
    ['बगीचा, पौधा और माली', 'Garden, plant, and gardener'],
    [
      ['कारखाना, कच्चा माल और इंजीनियर', 'Factory, raw material, and engineer'],
      ['रंगमंच, दर्शक और निर्देशक', 'Stage, audience, and director'],
      ['पुस्तकालय, पुस्तक और लिपिक', 'Library, book, and clerk'],
    ],
    'फ्रोबेल ने विद्यालय को "बगीचा" (Garden), बालक को "बढ़ता हुआ पौधा" (Plant) और शिक्षक को "माली" (Gardener) कहा है जो पौधे के स्वाभाविक विकास के लिए अनुकूल वातावरण तैयार करता है।',
    'Froebel compared the school to a garden, the child to a growing plant, and the teacher to a gardener who nurtures natural growth.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'किंडरगार्टन प्रणाली में बच्चों को आकार, संख्या और रचना सिखाने के लिए फ्रोबेल द्वारा बनाए गए विशेष खिलौनों को क्या कहा जाता है?',
    'What are the special toys designed by Froebel in the Kindergarten system to teach shape, number, and creativity called?',
    ['उपहार (Gifts) एवं व्यवसाय (Occupations)', 'Gifts and Occupations'],
    [
      ['डिडैक्टिक उपकरण (Didactic Apparatus)', 'Didactic Apparatus'],
      ['असाइनमेंट (Assignments)', 'Assignments'],
      ['माइक्रो-स्केल (Micro-scales)', 'Micro-scales'],
    ],
    'फ्रोबेल ने 20 "उपहार" (जैसे ऊन की गेंदें, लकड़ी के घन, गोला, बेलन) और "व्यवसाय" (जैसे मिट्टी के खिलौने बनाना, कागज मोड़ना, बुनना) विकसित किए। डिडैक्टिक उपकरण मोंटेसरी से जुड़े हैं।',
    'Froebel developed "Gifts" (wooden spheres, cubes, cylinders, yarn balls) and "Occupations" (clay modeling, paper folding, weaving). Didactic apparatus belongs to Montessori.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'फ्रोबेल ने बालक के स्वाभाविक विकास में किस सिद्धांत को केंद्रीय स्थान दिया?',
    'Which principle did Froebel place at the center of a child’s natural development?',
    ['स्व-क्रिया (Self-activity) एवं रचनात्मक खेल', 'Self-activity and creative play'],
    [
      ['दंडात्मक अनुशासन', 'Punitive discipline'],
      ['केवल अमूर्त तर्कशास्त्र', 'Pure abstract logic'],
      ['व्यक्तिगत एकांतवास', 'Solitary isolation'],
    ],
    'फ्रोबेल का मानना था कि बालक के भीतर ईश्वर प्रदत्त अंतर्निहित शक्तियाँ होती हैं, जो "स्व-क्रिया" (Self-activity), गीतों, खेलों और समूहिक सहभागिता से स्वतः प्रस्फुटित होती हैं।',
    'Froebel believed children possess inner capacities that unfold naturally through self-activity, songs, play, and social cooperation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'प्रश्नोत्तर विधि (Question-Answer / Dialectic Method) का जनक किसे माना जाता है?',
    'Who is considered the father of the Question-Answer (Dialectic) Method?',
    ['सुकरात (Socrates)', 'Socrates'],
    [
      ['अरस्तू (Aristotle)', 'Aristotle'],
      ['रूसो (Rousseau)', 'Rousseau'],
      ['पेस्टालॉजी (Pestalozzi)', 'Pestalozzi'],
    ],
    'यूनानी दार्शनिक सुकरात ने तार्किक प्रश्नों की श्रृंखला पूछकर विद्यार्थियों को स्वयं सत्य तक पहुँचाने की विधि विकसित की, इसलिए इसे सुकराती विधि भी कहते हैं।',
    'Greek philosopher Socrates developed the method of guiding learners to truth through a sequence of logical questions, hence it is also called the Socratic method.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'कक्षा में शिक्षण के दौरान प्रश्न पूछने का सबसे महत्वपूर्ण शैक्षिक उद्देश्य क्या होता है?',
    'What is the most important educational objective of asking questions during classroom teaching?',
    ['विद्यार्थियों की चिंतन-शक्ति जाग्रत करना और पूर्व-ज्ञान से जोड़ना', 'Stimulating students’ thinking and connecting with prior knowledge'],
    [
      ['शरारती बच्चों को दंडित करके चुप कराना', 'Punishing and silencing naughty students'],
      ['शिक्षक का समय व्यतीत करना', 'Passing the teacher’s time'],
      ['केवल कमजोर छात्रों को लज्जित करना', 'Embarrassing weak students'],
    ],
    'प्रभावी प्रश्न विद्यार्थियों की सक्रिय भागीदारी सुनिश्चित करते हैं, उनकी जिज्ञासा बढ़ाते हैं, पूर्व-ज्ञान की जांच करते हैं और उच्च स्तरीय चिंतन को प्रेरित करते हैं।',
    'Effective questioning ensures active student participation, arouses curiosity, checks prior knowledge, and stimulates higher-order thinking.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'कक्षा में "अपसारी प्रश्न" (Divergent / Open-ended Question) का सटीक उदाहरण कौन-सा है?',
    'Which of the following is an accurate example of a Divergent (Open-ended) question in the classroom?',
    ['"यदि हमारे शहर में एक सप्ताह तक पानी न आए, तो आप इसे सहेजने के क्या-क्या उपाय करेंगे?"', '"If water supply stops in our city for a week, what measures would you take to conserve it?"'],
    [
      ['"भारत की राजधानी का नाम क्या है?"', '"What is the name of the capital of India?"'],
      ['"जल का रासायनिक सूत्र क्या होता है?"', '"What is the chemical formula of water?"'],
      ['"सूर्य किस दिशा से उगता है?"', '"In which direction does the sun rise?"'],
    ],
    'अपसारी प्रश्नों के एक से अधिक संभावित, सृजनात्मक और तर्कपूर्ण उत्तर होते हैं, जबकि अन्य तीनों विकल्प अभिसारी (Convergent/Closed-ended) तथ्यात्मक प्रश्न हैं।',
    'Divergent questions invite multiple creative and reasoned responses, whereas the other three options are convergent factual questions with a single fixed answer.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'शिक्षक द्वारा प्रश्न पूछने के बाद 3 से 5 सेकंड रुकने (Wait Time) का मुख्य लाभ क्या है?',
    'What is the main benefit of a teacher pausing for 3 to 5 seconds (Wait Time) after asking a question?',
    ['विद्यार्थियों को सोचने, विचार संगठित करने और बेहतर उत्तर देने का अवसर मिलता है', 'Students get time to think, organize ideas, and give better responses'],
    [
      ['कक्षा में अनुशासनहीनता बढ़ जाती है', 'Indiscipline increases in the classroom'],
      ['केवल सबसे तेज बोलने वाला छात्र ही उत्तर दे पाता है', 'Only the fastest speaker can answer'],
      ['शिक्षक अपना पाठ भूल जाता है', 'The teacher forgets the lesson'],
    ],
    'शोध (मैरी बड रो) दर्शाते हैं कि पर्याप्त "Wait Time" देने से अधिक छात्र उत्तर देने के लिए प्रेरित होते हैं और उत्तरों की गुणवत्ता व तर्क क्षमता में सुधार होता है।',
    'Research (Mary Budd Rowe) shows that sufficient wait time encourages more students to participate and improves the depth and quality of their answers.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'प्रश्न कौशल में "अनुशीलन प्रश्न" (Probing Questions) कब पूछे जाते हैं?',
    'When are "Probing Questions" asked in the skill of questioning?',
    ['जब छात्र गलत, अधूरा या सतही उत्तर दे, तब उसे सही गहराई तक ले जाने के लिए', 'When a student gives a wrong, incomplete, or superficial answer, to guide them deeper'],
    [
      ['जब पूरी कक्षा बिना प्रश्न के शांत बैठी हो', 'When the entire class sits silent without any prompt'],
      ['केवल वार्षिक परीक्षा के प्रश्नपत्र में', 'Only in the annual examination paper'],
      ['अध्यापक के कक्षा छोड़ते समय', 'While the teacher is leaving the classroom'],
    ],
    'अनुशीलन प्रश्नों (जैसे संकेत देना, अधिक सूचना माँगना, पुनः ध्यान केंद्रित करना) का उद्देश्य विद्यार्थी को उसके अधूरे उत्तर से आगे सोचने में मदद करना होता है।',
    'Probing questions (prompting, seeking further information, refocusing) help guide a student from an incomplete or incorrect response toward deeper understanding.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'शिक्षण की डाल्टन योजना (Dalton Plan) की प्रवर्तक कौन थीं?',
    'Who was the propounder of the Dalton Plan of teaching?',
    ['कुमारी हेलेन पार्कहर्स्ट', 'Miss Helen Parkhurst'],
    [
      ['मारिया मोंटेसरी', 'Maria Montessori'],
      ['आनंदीबाई जोशी', 'Anandibai Joshi'],
      ['हंसा मेहता', 'Hansa Mehta'],
    ],
    'हेलेन पार्कहर्स्ट ने 1920 में अमेरिका के मैसाचुसेट्स राज्य के "डाल्टन" नगर के हाईस्कूल में इस व्यक्तिगत ठेका-आधारित शिक्षा प्रणाली का प्रयोग किया था।',
    'Helen Parkhurst introduced this individualized contract-based learning system in 1920 at a high school in Dalton, Massachusetts, USA.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना किन दो मुख्य सिद्धांतों पर आधारित है?',
    'On which two core principles is the Dalton Plan based?',
    ['स्वतंत्रता और सहयोग', 'Freedom and Cooperation'],
    [
      ['भय और दंड', 'Fear and Punishment'],
      ['प्रतिस्पर्धा और रटंत', 'Competition and Rote learning'],
      ['नियंत्रण और एकरूपता', 'Control and Uniformity'],
    ],
    'डाल्टन योजना में बालक को अपनी गति से कार्य करने की "स्वतंत्रता" मिलती है और प्रयोगशालाओं (Subject Laboratories) में सहपाठियों व शिक्षकों के साथ "सहयोग" से सीखने का वातावरण होता है।',
    'In the Dalton Plan, students get freedom to work at their own pace alongside cooperation with peers and teachers in subject laboratories.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना में पारंपरिक कक्षाओं और समय-सारिणी (Time-table) के स्थान पर क्या व्यवस्था अपनाई जाती है?',
    'In the Dalton Plan, what system replaces traditional classrooms and rigid timetables?',
    ['विषय प्रयोगशालाएँ (Laboratories) एवं मासिक ठेका कार्य (Contract/Assignment)', 'Subject laboratories and monthly contracts/assignments'],
    [
      ['कठोर घंटी व्यवस्था एवं रट्टा पुस्तिका', 'Strict bell schedule and cramming booklets'],
      ['केवल सायंकालीन व्याख्यान कक्ष', 'Only evening lecture halls'],
      ['बिना किसी लक्ष्य के अनियमित खेल', 'Unplanned play without goals'],
    ],
    'डाल्टन योजना में वर्ष के पाठ्यक्रम को 10 मासिक इकाइयों या "ठेकों" (Contracts) में बाँट दिया जाता है और छात्र संबंधित विषय की प्रयोगशाला में जाकर अपनी गति से उसे पूरा करते हैं।',
    'In the Dalton Plan, the yearly syllabus is divided into monthly contracts/assignments, and students work in subject laboratories at their own pace to complete them.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना के अंतर्गत विद्यार्थी की प्रगति का विवरण किस पर अंकित किया जाता है?',
    'Under the Dalton Plan, where is a student’s progress recorded?',
    ['प्रगति लेखा-चित्र (Progress Graph Card)', 'Progress Graph Card'],
    [
      ['दंड पंजिका (Punishment Register)', 'Punishment Register'],
      ['केवल वार्षिक रिपोर्ट कार्ड', 'Only annual report card'],
      ['उपस्थिति पंजिका के पीछे', 'Behind the attendance register'],
    ],
    'डाल्टन योजना में तीन प्रकार के ग्राफ कार्ड (विद्यार्थी का निजी कार्ड, प्रयोगशाला कार्ड और विद्यालय कार्ड) होते हैं, जिन पर छात्र अपनी दैनिक प्रगति स्वयं चिह्नित करता है।',
    'The Dalton Plan uses graph cards (student card, laboratory card, and school card) where learners track their daily progress through assignments.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण (Micro-teaching) शब्द का सर्वप्रथम प्रयोग और इसका विकास किस विश्वविद्यालय में किसके द्वारा किया गया?',
    'Where and by whom was the term "Micro-teaching" first coined and developed?',
    ['स्टैनफोर्ड विश्वविद्यालय में ड्वाइट एलन (1961-63) द्वारा', 'By Dwight Allen at Stanford University (1961-63)'],
    [
      ['ऑक्सफोर्ड विश्वविद्यालय में जॉन लॉक द्वारा', 'By John Locke at Oxford University'],
      ['हार्वर्ड विश्वविद्यालय में बी.एफ. स्किनर द्वारा', 'By B.F. Skinner at Harvard University'],
      ['कोलंबिया विश्वविद्यालय में किलपैट्रिक द्वारा', 'By Kilpatrick at Columbia University'],
    ],
    'सूक्ष्म शिक्षण की अवधारणा का विकास 1961-63 के बीच स्टैनफोर्ड विश्वविद्यालय (USA) में ड्वाइट डब्ल्यू. एलन तथा कीथ एचिसन आदि के सहयोग से हुआ।',
    'Micro-teaching was developed during 1961–63 at Stanford University (USA) by Dwight W. Allen along with Keith Acheson and colleagues.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण (Micro-teaching) किस प्रकार की प्रविधि है?',
    'What kind of technique is Micro-teaching?',
    ['शिक्षक-प्रशिक्षण की एक नियंत्रित कौशल अभ्यास प्रविधि', 'A controlled skill-training technique for teacher education'],
    [
      ['प्राथमिक बच्चों को विज्ञान सिखाने की प्रयोगशाला विधि', 'A lab method to teach science to primary kids'],
      ['बोर्ड परीक्षा की उत्तर-पुस्तिका जांचने की विधि', 'A method to evaluate board exam scripts'],
      ['अभिभावक-शिक्षक बैठक आयोजित करने का तरीका', 'A way to organize parent-teacher meetings'],
    ],
    'सूक्ष्म शिक्षण वास्तविक शिक्षण की एक लघु एवं नियंत्रित स्थिति है, जिसका उपयोग भावी शिक्षकों (छात्राध्यापकों) में विशिष्ट शिक्षण कौशलों के विकास के लिए किया जाता है।',
    'Micro-teaching is a scaled-down, controlled teaching encounter used in teacher training to develop specific teaching skills.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'भारत में NCERT द्वारा मानकीकृत सूक्ष्म शिक्षण चक्र (Micro-teaching Cycle) की कुल अवधि कितनी निर्धारित की गई है?',
    'What is the total duration of the Micro-teaching cycle standardized by NCERT in India?',
    ['36 मिनट', '36 minutes'],
    [
      ['20 मिनट', '20 minutes'],
      ['45 मिनट', '45 minutes'],
      ['60 मिनट', '60 minutes'],
    ],
    'NCERT के भारतीय प्रतिमान में सूक्ष्म शिक्षण चक्र के 36 मिनट इस प्रकार विभाजित हैं: शिक्षण (6 मिनट) + प्रतिपुष्टि (6 मिनट) + पुनः पाठ योजना (12 मिनट) + पुनः शिक्षण (6 मिनट) + पुनः प्रतिपुष्टि (6 मिनट)।',
    'In the NCERT Indian model, the 36-minute micro-teaching cycle comprises: Teach (6 min) + Feedback (6 min) + Re-plan (12 min) + Re-teach (6 min) + Re-feedback (6 min).',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'NCERT के सूक्ष्म शिक्षण चक्र में "पुनः पाठ योजना" (Re-plan) के लिए कितना समय निर्धारित है?',
    'How much time is allotted for "Re-plan" in the NCERT Micro-teaching cycle?',
    ['12 मिनट', '12 minutes'],
    [
      ['6 मिनट', '6 minutes'],
      ['10 मिनट', '10 minutes'],
      ['18 मिनट', '18 minutes'],
    ],
    'शिक्षण, प्रतिपुष्टि, पुनः शिक्षण और पुनः प्रतिपुष्टि प्रत्येक के लिए 6-6 मिनट होते हैं, जबकि प्रतिपुष्टि के आधार पर पाठ में सुधार (पुनः पाठ योजना) के लिए 12 मिनट निर्धारित हैं।',
    'Teaching, feedback, re-teaching, and re-feedback each take 6 minutes, while 12 minutes are allocated for re-planning based on feedback.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण के भारतीय प्रतिमान (NCERT) के अनुसार कक्षा में छात्रों की संख्या सामान्यतः कितनी होती है?',
    'According to the Indian model (NCERT) of Micro-teaching, how many students are normally in the class?',
    ['5 से 10 छात्र (सहपाठी समूह)', '5 to 10 students (peer group)'],
    [
      ['40 से 50 छात्र', '40 to 50 students'],
      ['60 से 80 छात्र', '60 to 80 students'],
      ['केवल 1 छात्र', 'Only 1 student'],
    ],
    'सूक्ष्म शिक्षण में कक्षा के आकार और समय दोनों को कम (Scaled down) कर दिया जाता है; इसमें 5 से 10 छात्रों या सहपाठियों के समक्ष एक समय में केवल एक शिक्षण कौशल का अभ्यास किया जाता है।',
    'In micro-teaching, both class size and time are scaled down; one teaching skill is practiced at a time with 5 to 10 students or peers.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'भारत में सूक्ष्म शिक्षण शब्द का सर्वप्रथम परिचय और प्रयोग 1967 में किसके द्वारा किया गया?',
    'Who first introduced and used Micro-teaching in India in 1967?',
    ['डी.डी. तिवारी (सेंट्रल पेडागॉगिकल इंस्टिट्यूट, प्रयागराज)', 'D.D. Tiwari (Central Pedagogical Institute, Prayagraj)'],
    [
      ['एन.के. जांगिड़', 'N.K. Jangid'],
      ['बी.के. पासी', 'B.K. Passi'],
      ['एल.सी. सिंह', 'L.C. Singh'],
    ],
    'भारत में सर्वप्रथम डी.डी. तिवारी ने 1967 में गवर्नमेंट सेंट्रल पेडागॉगिकल इंस्टिट्यूट (CPI), इलाहाबाद (प्रयागराज) में सूक्ष्म शिक्षण की शुरुआत की थी। बाद में बी.के. पासी व NCERT ने इसे विस्तार दिया।',
    'In India, D.D. Tiwari first initiated micro-teaching in 1967 at the Government Central Pedagogical Institute, Allahabad (Prayagraj). Later B.K. Passi and NCERT expanded it.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "प्रतिपुष्टि" (Feedback) का सबसे महत्वपूर्ण कार्य क्या है?',
    'What is the most important function of "Feedback" in Micro-teaching?',
    ['छात्राध्यापक को उसकी शिक्षण कमियों व सबल पक्षों से अवगत कराकर सुधार हेतु प्रेरित करना', 'Making the pupil-teacher aware of strengths and weaknesses to guide improvement'],
    [
      ['छात्राध्यापक को प्रशिक्षण से निष्कासित करना', 'Expelling the pupil-teacher from training'],
      ['केवल उसकी लिखावट की प्रशंसा करना', 'Praising only their handwriting'],
      ['पाठ का विषय बदल देना', 'Changing the subject of the lesson'],
    ],
    'तत्काल एवं रचनात्मक प्रतिपुष्टि से प्रशिक्षु शिक्षक को पता चलता है कि उसने कौशल के किस घटक का सही प्रयोग किया और कहाँ सुधार (Re-plan) की आवश्यकता है।',
    'Immediate, constructive feedback helps trainee teachers identify which skill components worked well and where improvement is needed during re-planning.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'प्रस्तावना कौशल',
    'प्रस्तावना कौशल (Skill of Introducing a Lesson) का मुख्य उद्देश्य क्या होता है?',
    'What is the main objective of the Skill of Introducing a Lesson (Set Induction)?',
    ['विद्यार्थियों के पूर्व-ज्ञान को नवीन ज्ञान से जोड़ना एवं पाठ के प्रति जिज्ञासा जगाना', 'Linking students’ prior knowledge to new knowledge and arousing curiosity'],
    [
      ['सीधे गृहकार्य लिखवाकर पाठ समाप्त करना', 'Ending the lesson by assigning homework directly'],
      ['कठिन परिभाषाएँ श्यामपट्ट पर लिखकर रटवाना', 'Writing hard definitions for rote learning'],
      ['पिछले दिन की अनुपस्थिति पर दंड देना', 'Punishing previous day’s absentees'],
    ],
    'प्रस्तावना कौशल द्वारा शिक्षक छोटे प्रश्नों, कहानी, चित्र या उदाहरण के माध्यम से पूर्व-ज्ञान की जांच कर बच्चों का ध्यान नए प्रकरण पर केंद्रित करता है।',
    'Through set induction, a teacher uses brief questions, stories, pictures, or examples to connect prior knowledge and focus student attention on the new topic.',
    'EASY'
  ),
  q(
    'शिक्षण कौशल',
    'प्रस्तावना कौशल',
    'प्रस्तावना कौशल में पूछे जाने वाले प्रश्नों में कौन-सा गुण अनिवार्यतः होना चाहिए?',
    'Which quality must necessarily be present in the questions asked during the Skill of Introducing a Lesson?',
    ['प्रश्नों में तारतम्यता (क्रमबद्धता) एवं पूर्व-ज्ञान से संबंध', 'Continuity (logical sequence) and linkage with prior knowledge'],
    [
      ['प्रश्न बहुत लंबे और द्विअर्थी होने चाहिए', 'Questions should be very long and ambiguous'],
      ['प्रश्नों का पाठ के विषय से कोई संबंध न हो', 'Questions should have no link to the topic'],
      ['अंतिम प्रश्न भी बेहद सरल परिचित तथ्य पर हो', 'The final question should also be a trivial known fact'],
    ],
    'प्रस्तावना के प्रश्न "जिगजैग" या तारतम्य में होते हैं, जहाँ पिछले उत्तर से अगला प्रश्न जुड़ता है और अंतिम समस्यात्मक प्रश्न सीधे "उद्देश्य कथन" तक ले जाता है।',
    'Introductory questions should follow logical continuity where each answer links to the next question, culminating in a problematic question that leads to the statement of aim.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'श्यामपट्ट कौशल',
    'श्यामपट्ट कौशल (Blackboard Writing Skill) के अनुसार लिखते समय शिक्षक को श्यामपट्ट से कितने अंश (डिग्री) के कोण पर खड़ा होना चाहिए?',
    'According to Blackboard Writing Skill, at approximately what angle should the teacher stand while writing on the board?',
    ['45 डिग्री के कोण पर (ताकि कक्षा पर भी दृष्टि रहे)', 'At a 45-degree angle (so the class remains visible)'],
    [
      ['90 डिग्री पर पीठ पूरी तरह कक्षा की ओर करके', 'At 90 degrees with back completely to the class'],
      ['0 डिग्री पर बैठकर', 'Sitting at 0 degrees'],
      ['180 डिग्री पर बोर्ड की ओर पीठ करके', 'At 180 degrees with back to the board'],
    ],
    '45 डिग्री के कोण पर खड़े रहने से शिक्षक लिखते समय भी तिरछी नजर से विद्यार्थियों पर निगरानी रख सकता है और उसकी आवाज कक्षा तक स्पष्ट पहुँचती है।',
    'Standing at a 45-degree angle allows the teacher to write clearly while maintaining eye contact and monitoring the class.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'श्यामपट्ट कौशल',
    'एक शिक्षक श्यामपट्ट पर लिखते समय बहुत छोटे अक्षर बनाता है और अंतिम पंक्ति तक तिरछी रेखा में लिखता है। यह किस शिक्षण कौशल की कमी दर्शाता है?',
    'While writing on the blackboard, a teacher makes very small letters and writes in slanted lines. This shows a deficiency in which teaching skill?',
    ['श्यामपट्ट लेखन कौशल', 'Blackboard Writing Skill'],
    [
      ['उद्दीपन परिवर्तन कौशल', 'Skill of Stimulus Variation'],
      ['पुनर्बलन कौशल', 'Skill of Reinforcement'],
      ['व्याख्यान कौशल', 'Skill of Explaining'],
    ],
    'श्यामपट्ट कौशल के प्रमुख घटकों में अक्षरों का स्पष्ट एवं पर्याप्त आकार (जो अंतिम बेंच से भी दिखे), सीधी पंक्ति, उचित अंतराल और स्वच्छता शामिल हैं।',
    'Key components of blackboard skill include legible and sufficiently large lettering (visible from the back row), straight lines, proper spacing, and neatness.',
    'EASY'
  ),
  q(
    'शिक्षण कौशल',
    'श्यामपट्ट कौशल',
    'श्यामपट्ट साफ करने (Duster usage) का सही तरीका क्या माना जाता है?',
    'What is considered the correct way to clean a blackboard with a duster?',
    ['ऊपर से नीचे की ओर (सीधी दिशा में)', 'From top to bottom (in downward strokes)'],
    [
      ['नीचे से ऊपर की ओर तेजी से रगड़कर', 'Rubbing rapidly from bottom to top'],
      ['गोल-गोल घुमाकर ताकि धूल फैले', 'In circular motions so dust spreads'],
      ['केवल हाथ से पोंछकर', 'Wiping merely with bare hands'],
    ],
    'ऊपर से नीचे की ओर साफ करने से चॉक की धूल नीचे की ओर गिरती है और शिक्षक व छात्रों की आँखों/सांस में उड़ने से बचती है।',
    'Wiping top to bottom causes chalk dust to fall downward instead of flying into the air toward the teacher and students.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'पुनर्बलन कौशल',
    'कक्षा में जब कोई छात्र सही उत्तर देता है और शिक्षक मुस्कुराकर सिर हिलाते हुए कहता है "शाबाश, बहुत अच्छा प्रयास!", तो यह किस प्रकार का पुनर्बलन है?',
    'In class, when a student gives a correct answer and the teacher smiles, nods, and says "Well done, great effort!", what kind of reinforcement is this?',
    ['धनात्मक शाब्दिक एवं अशाब्दिक दोनों पुनर्बलन', 'Both Positive Verbal and Positive Non-verbal Reinforcement'],
    [
      ['ऋणात्मक शाब्दिक पुनर्बलन', 'Negative Verbal Reinforcement'],
      ['दंडात्मक अनुशासन', 'Punitive Discipline'],
      ['शून्य पुनर्बलन', 'Zero Reinforcement'],
    ],
    '"शाबाश, बहुत अच्छा" कहना धनात्मक शाब्दिक पुनर्बलन है तथा मुस्कुराना व सहमति में सिर हिलाना धनात्मक अशाब्दिक पुनर्बलन है।',
    'Saying "Well done, great effort" is positive verbal reinforcement, while smiling and nodding is positive non-verbal reinforcement.',
    'EASY'
  ),
  q(
    'शिक्षण कौशल',
    'पुनर्बलन कौशल',
    'पुनर्बलन कौशल (Skill of Reinforcement) का अत्यधिक या अनावश्यक प्रयोग करने का क्या दुष्परिणाम हो सकता है?',
    'What can be the negative consequence of overusing or unnecessarily using reinforcement in the classroom?',
    ['छात्रों पर इसका प्रभाव कम हो जाता है और यह यांत्रिक लगने लगता है', 'Its impact on students diminishes and it begins to feel mechanical'],
    [
      ['छात्रों की तार्किक क्षमता दोगुनी हो जाती है', 'Students’ logical ability doubles'],
      ['पाठ्यक्रम जल्दी समाप्त हो जाता है', 'The syllabus finishes quickly'],
      ['छात्र प्रश्न पूछना सीख जाते हैं', 'Students learn to ask questions'],
    ],
    'हर छोटी बात पर बिना कारण "बहुत बढ़िया" कहने से पुनर्बलन अपना मूल्य खो देता है। अतः पुनर्बलन सार्थक, विविधतापूर्ण और वास्तविक उपलब्धि पर आधारित होना चाहिए।',
    'Praising indiscriminately makes reinforcement lose its motivational value and feel mechanical; it should be varied and tied to genuine effort or accuracy.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'उद्दीपन परिवर्तन कौशल',
    'शिक्षण के दौरान शिक्षक का अपनी आवाज में उतार-चढ़ाव लाना, कक्षा में उचित संचलन करना तथा हाथ के संकेतों का प्रयोग करना किस कौशल के घटक हैं?',
    'Modulating voice pitch, moving purposefully around the classroom, and using hand gestures during teaching are components of which skill?',
    ['उद्दीपन परिवर्तन कौशल', 'Skill of Stimulus Variation'],
    [
      ['श्यामपट्ट कौशल', 'Blackboard Skill'],
      ['पुनरावृत्ति कौशल', 'Skill of Repetition'],
      ['समापन कौशल', 'Skill of Closure'],
    ],
    'छात्रों का ध्यान कक्षा में निरंतर बनाए रखने और एकरसता तोड़ने के लिए शिक्षक जो विविध परिवर्तन (संचलन, हाव-भाव, स्वर परिवर्तन, मौन, अंतःक्रिया शैली परिवर्तन) करता है, वह उद्दीपन परिवर्तन कौशल कहलाता है।',
    'To sustain student attention and break monotony, variations in movement, gestures, voice modulation, pauses, and interaction styles constitute the Skill of Stimulus Variation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'उद्दीपन परिवर्तन कौशल',
    'उद्दीपन परिवर्तन कौशल में "सार्थक विराम या मौन" (Pausing) का प्रयोग शिक्षक कब करता है?',
    'When does a teacher use "purposeful pausing/silence" in the Skill of Stimulus Variation?',
    ['विद्यार्थियों का ध्यान आकर्षित करने या महत्वपूर्ण बिंदु पर सोचने का समय देने के लिए', 'To draw students’ attention or give them time to reflect on an important point'],
    [
      ['जब शिक्षक को पाठ याद न आ रहा हो', 'When the teacher cannot recall the lesson'],
      ['पूरी घंटी चुपचाप बैठकर बिताने के लिए', 'To spend the entire period sitting silently'],
      ['छात्रों से नाराजगी जताने के लिए लगातार', 'Continuously to show anger at students'],
    ],
    'व्याख्यान के बीच कुछ सेकंड का सार्थक मौन शोर कर रहे या विचलित विद्यार्थियों का ध्यान तुरंत शिक्षक की ओर खींचता है और महत्वपूर्ण तथ्य को उभारता है।',
    'A deliberate brief pause during explanation immediately regains distracted students’ attention and emphasizes key concepts.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'व्याख्यान एवं दृष्टांत कौशल',
    'दृष्टांत कौशल (Skill of Illustrating with Examples) का प्रमुख उद्देश्य क्या होता है?',
    'What is the primary objective of the Skill of Illustrating with Examples?',
    ['कठिन एवं अमूर्त संप्रत्ययों को सरल, मूर्त व बोधगम्य बनाना', 'Making difficult and abstract concepts simple, concrete, and comprehensible'],
    [
      ['कक्षा का समय केवल कहानियों में बिताना', 'Spending class time solely on stories'],
      ['विद्यार्थियों को प्रश्न पूछने से रोकना', 'Preventing students from asking questions'],
      ['पाठ्यपुस्तक को पूरी तरह बंद कर देना', 'Closing the textbook completely'],
    ],
    'जब कोई अमूर्त या जटिल सिद्धांत समझ में नहीं आता, तब शिक्षक मौखिक (कहानी, उपमा) या दृश्य (चित्र, मॉडल) दृष्टांत देकर उसे विद्यार्थियों के पूर्व-अनुभव से जोड़ता है।',
    'When an abstract or complex idea is hard to grasp, the teacher uses verbal (analogies, stories) or visual (models, pictures) examples linked to learners’ experiences.',
    'EASY'
  ),
  q(
    'शिक्षण कौशल',
    'व्याख्यान एवं दृष्टांत कौशल',
    'प्रभावी व्याख्या कौशल (Skill of Explaining) में "व्याख्यान कड़ियों" (Explaining Links) का अर्थ क्या है?',
    'What is meant by "Explaining Links" in an effective Skill of Explaining?',
    ['"क्योंकि", "इसलिए", "अतः", "जिसके परिणामस्वरूप" जैसे संयोजक शब्दों का प्रयोग', 'Use of connecting words like "because", "therefore", "hence", "as a result"'],
    [
      ['इंटरनेट के वेबसाइट लिंक प्रदान करना', 'Providing internet website links'],
      ['दो अलग पाठों के पन्नों को स्टेपल करना', 'Stapling pages of two different lessons'],
      ['बिना कारण बताए कठिन शब्द बोलना', 'Speaking difficult words without reason'],
    ],
    'व्याख्यान कड़ियाँ वे शब्द या वाक्यांश हैं जो कारण-प्रभाव और विचारों के बीच तार्किक संबंध जोड़ते हैं, जिससे विद्यार्थियों के लिए विषय को समझना आसान हो जाता है।',
    'Explaining links are connecting words or phrases showing cause-effect and logical continuity, making explanations coherent and easy to follow.',
    'HARD'
  ),
  q(
    'शिक्षण कौशल',
    'समापन एवं कक्षा प्रबंधन',
    'पाठ समापन कौशल (Skill of Achieving Closure) के अंतर्गत शिक्षक को पाठ के अंत में क्या करना चाहिए?',
    'Under the Skill of Achieving Closure, what should a teacher do at the end of a lesson?',
    ['मुख्य बिंदुओं का संक्षिप्त सार प्रस्तुत कर मूल्यांकन प्रश्न पूछना व नए ज्ञान को समेकित करना', 'Summarize key points, ask evaluative questions, and consolidate new learning'],
    [
      ['घंटी बजते ही बिना कुछ कहे कक्षा से बाहर निकल जाना', 'Leave the room immediately when the bell rings without saying anything'],
      ['अंतिम मिनट में बिल्कुल नया कठिन अध्याय शुरू करना', 'Start an entirely new difficult chapter in the last minute'],
      ['केवल छात्रों से कॉपियाँ बंद करने को कहना', 'Merely ask students to close their notebooks'],
    ],
    'प्रभावी समापन कौशल से छात्र पूरे पाठ के मुख्य बिंदुओं को एक सूत्र में पिरोकर याद रख पाते हैं और शिक्षक यह जांच पाता है कि उद्देश्य पूरे हुए या नहीं।',
    'Effective closure helps students integrate the main takeaways of the lesson and allows the teacher to verify whether learning objectives were met.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं मस्तिष्क उद्वेलन',
    'मस्तिष्क उद्वेलन विधि (Brainstorming Method) के प्रवर्तक कौन हैं?',
    'Who is the propounder of the Brainstorming Method?',
    ['एलेक्स एफ. ऑस्बोर्न (Alex F. Osborn)', 'Alex F. Osborn'],
    [
      ['बी.एस. ब्लूम', 'B.S. Bloom'],
      ['गैग्ने', 'R.M. Gagne'],
      ['मॉरिसन', 'H.C. Morrison'],
    ],
    'एलेक्स एफ. ऑस्बोर्न ने 1953 में अपनी पुस्तक "Applied Imagination" के माध्यम से समूह में सृजनात्मक विचार उत्पन्न करने हेतु मस्तिष्क उद्वेलन विधि को लोकप्रिय बनाया।',
    'Alex F. Osborn popularized the brainstorming technique for group creative problem-solving through his 1953 book "Applied Imagination".',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं मस्तिष्क उद्वेलन',
    'मस्तिष्क उद्वेलन (Brainstorming) सत्र के दौरान शिक्षक का अनिवार्य नियम क्या होना चाहिए?',
    'What must be an essential rule for the teacher during a Brainstorming session?',
    ['विचारों के निर्माण के समय किसी भी विचार की आलोचना या मूल्यांकन न करना', 'Deferring judgment and avoiding criticism while ideas are being generated'],
    [
      ['गलत या अजीब विचार देने वाले छात्र को तुरंत टोकना', 'Immediately interrupting students who give unusual ideas'],
      ['केवल पाठ्यपुस्तक में लिखे उत्तर ही स्वीकार करना', 'Accepting only answers written in the textbook'],
      ['केवल दो मेधावी छात्रों को बोलने देना', 'Allowing only two bright students to speak'],
    ],
    'मस्तिष्क उद्वेलन का मुख्य सिद्धांत "स्थगित निर्णय" (Deferred Judgment) है। बिना डर या आलोचना के मुक्त वातावरण में बच्चे अधिक मौलिक व अपसारी विचार दे पाते हैं।',
    'The core principle of brainstorming is deferred judgment. A criticism-free environment encourages free flow of original and divergent ideas.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं मस्तिष्क उद्वेलन',
    'वैज्ञानिक समस्या-समाधान विधि (Problem-Solving Method) के चरणों में "परिकल्पना निर्माण" (Formulation of Hypothesis) के ठीक बाद कौन-सा चरण आता है?',
    'In the steps of the scientific Problem-Solving Method, which step comes immediately after "Formulation of Hypothesis"?',
    ['आँकड़ों का संग्रहण एवं परिकल्पना का परीक्षण', 'Collection of data and testing of hypothesis'],
    [
      ['समस्या की पहचान करना', 'Identifying the problem'],
      ['पाठ्यपुस्तक से उत्तर की नकल करना', 'Copying the answer from the textbook'],
      ['समस्या को अस्वीकार कर देना', 'Rejecting the problem'],
    ],
    'समस्या-समाधान के प्रमुख सोपान हैं: समस्या की अनुभूति व परिभाषा → तथ्यों का संकलन → परिकल्पना निर्माण → परिकल्पना का परीक्षण (तर्क/प्रयोग) → निष्कर्ष निकालना व सामान्यीकरण।',
    'The steps of problem solving are: recognizing/defining the problem, gathering relevant info, formulating hypotheses, testing hypotheses via data/experiment, and drawing conclusions.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'रेखीय अभिक्रमित अनुदेशन (Linear Programmed Instruction) के जनक कौन हैं?',
    'Who is the father of Linear Programmed Instruction?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['नॉर्मन ए. क्राउडर', 'Norman A. Crowder'],
      ['थॉमस गिल्बर्ट', 'Thomas Gilbert'],
      ['थॉर्नडाइक', 'E.L. Thorndike'],
    ],
    '1954 में बी.एफ. स्किनर ने क्रिया-प्रसूत अनुबंधन सिद्धांत पर आधारित "रेखीय अभिक्रमित अनुदेशन" का विकास किया, जिसमें छोटे पदों (Frames) और तत्काल पृष्ठपोषण द्वारा स्व-गति से अधिगम होता है।',
    'In 1954, B.F. Skinner developed Linear Programmed Instruction based on operant conditioning, featuring small frames and immediate feedback for self-paced learning.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'शाखीय अभिक्रमित अनुदेशन (Branching Programmed Instruction) का प्रतिपादन किसने किया?',
    'Who propounded Branching Programmed Instruction?',
    ['नॉर्मन ए. क्राउडर', 'Norman A. Crowder'],
    [
      ['बी.एफ. स्किनर', 'B.F. Skinner'],
      ['सिड्नी प्रेसी', 'Sidney Pressey'],
      ['रॉबर्ट मेगर', 'Robert Mager'],
    ],
    'नॉर्मन क्राउडर ने 1960 के आसपास शाखीय अभिक्रमित अनुदेशन दिया, जिसमें बहुविकल्पीय प्रश्न होते हैं और त्रुटि करने पर छात्र को उपचारात्मक शाखा (Remedial frame) पर भेजा जाता है।',
    'Norman Crowder introduced Branching Programmed Instruction, using multiple-choice items where errors direct the learner to a remedial branch.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'अवरोह अभिक्रमित अनुदेशन (Mathetics Programmed Instruction) के प्रवर्तक कौन हैं?',
    'Who is the propounder of Mathetics Programmed Instruction?',
    ['थॉमस एफ. गिल्बर्ट', 'Thomas F. Gilbert'],
    [
      ['ड्वाइट एलन', 'Dwight Allen'],
      ['जॉन डीवी', 'John Dewey'],
      ['विलियम जेम्स', 'William James'],
    ],
    'थॉमस एफ. गिल्बर्ट ने 1962 में मैथेटिक्स (अवरोह अभिक्रमण) प्रतिपादित किया, जिसमें "पश्चगामी शृंखला" (Backward Chaining) अर्थात् प्रदर्शन, अनुबोधन और उन्मुक्ति का प्रयोग होता है।',
    'Thomas F. Gilbert propounded Mathetics in 1962, utilizing backward chaining through demonstration, prompting, and release.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिनय एवं भूमिका निर्वाह',
    'कक्षा में "भूमिका निर्वाह" (Role Play) विधि का प्रयोग किस विषय व कौशल के शिक्षण में सर्वाधिक प्रभावी होता है?',
    'In the classroom, the "Role Play" method is most effective in teaching which subjects and skills?',
    ['सामाजिक विज्ञान, भाषा संवाद, नैतिक मूल्य एवं सहानुभूति विकास में', 'Social science, language dialogue, moral values, and developing empathy'],
    [
      ['केवल बीजगणित के सूत्र रटने में', 'Only memorizing algebra formulas'],
      ['रासायनिक समीकरण संतुलित करने में', 'Balancing chemical equations'],
      ['मौन पठन की गति मापने में', 'Measuring speed of silent reading'],
    ],
    'भूमिका निर्वाह में विद्यार्थी ऐतिहासिक पात्रों या सामाजिक भूमिकाओं का अभिनय करते हैं, जिससे भाषा प्रवाह, संवेगात्मक समझ, सहानुभूति और सामाजिक कौशल विकसित होते हैं।',
    'In role play, students enact historical or social roles, building language fluency, emotional understanding, empathy, and social skills.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    'विनेटका योजना (Winnetka Plan) के प्रवर्तक कौन थे?',
    'Who was the propounder of the Winnetka Plan?',
    ['कार्लटन वाशबर्न', 'Carleton Washburne'],
    [
      ['हेलेन पार्कहर्स्ट', 'Helen Parkhurst'],
      ['ओविड डेक्रोली', 'Ovide Decroly'],
      ['फ्रोबेल', 'Froebel'],
    ],
    'कार्लटन वाशबर्न ने अमेरिका के इलिनोइस राज्य के विनेटका शहर में व्यक्तिगत एवं सामाजिक विकास को संतुलित करने वाली "विनेटका योजना" विकसित की।',
    'Carleton Washburne developed the Winnetka Plan in Winnetka, Illinois, balancing individualized academic mastery with social group activities.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    'बेल्जियम के किस शिक्षाशास्त्री ने "डेक्रोली पद्धति" (जीवन के लिए जीवन द्वारा शिक्षा) का विकास किया?',
    'Which Belgian educationist developed the "Decroly Method" (education for life through life)?',
    ['डॉ. ओविड डेक्रोली', 'Dr. Ovide Decroly'],
    [
      ['जीन पियाजे', 'Jean Piaget'],
      ['हेनरी बर्गसन', 'Henri Bergson'],
      ['जे.जे. रूसो', 'J.J. Rousseau'],
    ],
    'डॉ. ओविड डेक्रोली ने बच्चों की चार बुनियादी आवश्यकताओं (भोजन, सुरक्षा, संरक्षण, कार्य) को केंद्र मानकर "ग्लोबलाइजेशन" (संपूर्णता) पर आधारित डेक्रोली पद्धति विकसित की।',
    'Dr. Ovide Decroly developed the Decroly method centered on children’s fundamental needs (food, shelter, defense, work) and centers of interest.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    '"दल शिक्षण" (Team Teaching) से क्या तात्पर्य है?',
    'What is meant by "Team Teaching"?',
    ['दो या अधिक शिक्षकों का मिलकर एक ही कक्षा के शिक्षण की योजना बनाना, पढ़ाना व मूल्यांकन करना', 'Two or more teachers collaboratively planning, teaching, and evaluating the same group of students'],
    [
      ['खेल के मैदान में दो टीमों के बीच मैच कराना', 'Organizing a match between two teams on the playground'],
      ['एक ही छात्र से पूरी कक्षा को पढ़वाना', 'Having one student teach the whole class'],
      ['बिना किसी योजना के अलग-अलग कक्षाओं में जाना', 'Entering different classes without any plan'],
    ],
    'दल शिक्षण की शुरुआत 1955 में हार्वर्ड विश्वविद्यालय से हुई। इसमें विभिन्न विशेषज्ञता वाले शिक्षक अपनी शक्तियों का समन्वय करके विद्यार्थियों को श्रेष्ठ शिक्षण देते हैं।',
    'Team teaching originated at Harvard University in 1955. Teachers with complementary expertise collaborate to plan, instruct, and assess the same cohort.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    'प्राथमिक स्तर पर "सहकारी अधिगम" (Cooperative Learning) की "थिंग-पेयर-शेयर" (Think-Pair-Share) गतिविधि में सही क्रम क्या होता है?',
    'What is the correct sequence in the "Think-Pair-Share" cooperative learning activity at the primary level?',
    ['पहले व्यक्तिगत चिंतन → फिर जोड़ी में चर्चा → अंत में पूरी कक्षा से साझा करना', 'Individual thinking first → discussing in pairs → sharing with the whole class'],
    [
      ['पहले कक्षा में घोषणा → फिर अकेले बैठना → फिर घर जाना', 'Class announcement → sitting alone → going home'],
      ['पहले जोड़ी बनाना → फिर बिना सोचे बोलना → अंत में लिखना', 'Pairing → speaking without thinking → writing'],
      ['शिक्षक का बोलना → छात्रों का नकल करना → परीक्षा देना', 'Teacher speaking → students copying → taking test'],
    ],
    'थिंक-पेयर-शेयर (फ्रैंक लाइमन) में हर बच्चे को पहले स्वयं सोचने का अवसर मिलता है, फिर साथी से चर्चा कर आत्मविश्वास बढ़ता है और अंत में समूह के सामने विचार रखा जाता है।',
    'In Think-Pair-Share (Frank Lyman), every learner thinks independently first, refines ideas with a partner, and then shares confidently with the class.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    '"फ्लिप्ड क्लासरूम" (Flipped Classroom) शिक्षण उपागम की मुख्य विशेषता क्या है?',
    'What is the key feature of the "Flipped Classroom" teaching approach?',
    ['छात्र घर पर वीडियो/सामग्री से प्रारंभिक अवधारणा सीखते हैं और कक्षा में अभ्यास व चर्चा करते हैं', 'Students learn initial content at home via videos/material and do practice and discussion in class'],
    [
      ['कक्षा की कुर्सियाँ उल्टी दिशा में घुमाकर बिठाना', 'Turning classroom chairs in the opposite direction'],
      ['केवल शिक्षक घर से पढ़ाते हैं और छात्र स्कूल नहीं आते', 'Only teachers teach from home and students never come to school'],
      ['गृहकार्य को पूरी तरह बंद कर देना', 'Completely abolishing all home study'],
    ],
    'फ्लिप्ड क्लासरूम में पारंपरिक मॉडल उलट जाता है: ज्ञान प्राप्ति घर पर डिजिटल सामग्री से और उच्च स्तरीय अनुप्रयोग, समस्या-समाधान व शंका निवारण कक्षा में शिक्षक की उपस्थिति में होता है।',
    'In a flipped classroom, traditional instruction is inverted: foundational content is accessed at home, while class time is devoted to active problem-solving and interaction.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य नवीन एवं पारंपरिक विधियाँ',
    'क्षेत्रीय भ्रमण (Field Trip / Excursion Method) का सबसे बड़ा शैक्षिक लाभ क्या है?',
    'What is the greatest educational benefit of the Field Trip / Excursion Method?',
    ['प्रत्यक्ष अनुभव एवं वास्तविक परिवेश से जुड़कर स्थायी ज्ञान प्राप्त होना', 'Gaining permanent knowledge through direct experience and real-world connection'],
    [
      ['विद्यालय के नियमित अध्ययन से छुट्टी मिलना', 'Getting a break from regular school study'],
      ['केवल पिकनिक और मनोरंजन करना', 'Only having a picnic and entertainment'],
      ['पाठ्यपुस्तकों को नष्ट करना', 'Destroying textbooks'],
    ],
    'ऐतिहासिक स्मारक, संग्रहालय, खेत या जल-स्रोत के प्रत्यक्ष अवलोकन से विद्यार्थियों की सभी इंद्रियाँ सक्रिय होती हैं और पुस्तकीय ज्ञान वास्तविक जीवन से जुड़ता है।',
    'Direct observation of historical sites, museums, farms, or ecosystems engages all senses and connects textbook knowledge to real life.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'व्याख्यान एवं प्रदर्शन विधि',
    'व्याख्यान विधि (Lecture Method) की सबसे बड़ी कमजोरी प्राथमिक कक्षाओं के संदर्भ में क्या है?',
    'What is the biggest weakness of the Lecture Method in the context of primary classes?',
    ['यह शिक्षक-केंद्रित है और इसमें छोटे बच्चे निष्क्रिय श्रोता बनकर ऊब जाते हैं', 'It is teacher-centered and young children become passive listeners and get bored'],
    [
      ['इसमें शिक्षक को बहुत कम तैयारी करनी पड़ती है', 'The teacher needs very little preparation'],
      ['यह बहुत महँगी विधि है', 'It is a very expensive method'],
      ['इसमें कोई बोलने का अवसर नहीं मिलता शिक्षक को', 'The teacher gets no chance to speak'],
    ],
    'प्राथमिक स्तर के बच्चों की ध्यान अवधि कम होती है और वे क्रियाशीलता पसंद करते हैं। केवल एकतरफा व्याख्यान से उनकी रुचि समाप्त हो जाती है।',
    'Primary children have short attention spans and need active engagement; one-way lecturing quickly leads to boredom and disengagement.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'व्याख्यान एवं प्रदर्शन विधि',
    'विज्ञान शिक्षण में "प्रदर्शन विधि" (Demonstration Method) का अर्थ क्या है?',
    'What is the meaning of the "Demonstration Method" in science teaching?',
    ['शिक्षक द्वारा प्रयोग या क्रिया को करके दिखाना तथा विद्यार्थियों द्वारा अवलोकन व चर्चा करना', 'The teacher performing an experiment/activity while students observe and discuss'],
    [
      ['छात्रों को प्रयोगशाला में जाने से पूरी तरह रोकना', 'Completely barring students from laboratories'],
      ['केवल ब्लैकबोर्ड पर चित्र बनाकर छोड़ देना', 'Merely drawing a diagram on the blackboard'],
      ['नारे लगाते हुए जुलूस निकालना', 'Taking out a procession with slogans'],
    ],
    'जब उपकरण सीमित हों या प्रयोग में जोखिम (जैसे अम्ल-क्षार अभिक्रिया) हो, तब शिक्षक सुरक्षित ढंग से स्वयं प्रयोग करके दिखाता है और छात्र अवलोकन कर निष्कर्ष निकालते हैं।',
    'When equipment is limited or experiments carry safety risks, the teacher demonstrates the experiment while students actively observe and infer conclusions.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'प्राथमिक स्तर पर कहानी कथन विधि (Storytelling Method) से बच्चों में मुख्यतः किन कौशलों का विकास होता है?',
    'At the primary level, the Storytelling Method mainly develops which skills in children?',
    ['श्रवण कौशल, कल्पनाशक्ति, शब्द-भंडार एवं नैतिक संवेदनशीलता', 'Listening skills, imagination, vocabulary, and moral sensitivity'],
    [
      ['केवल सुलेख और वर्तनी की गति', 'Only calligraphy and spelling speed'],
      ['केवल गणितीय गणना क्षमता', 'Only mathematical calculation ability'],
      ['केवल शारीरिक दौड़ने की गति', 'Only physical running speed'],
    ],
    'कहानी बच्चों को भावपूर्ण ढंग से सुनने, मानसिक चित्र गढ़ने (कल्पना), नए शब्द सीखने और पात्रों के माध्यम से जीवन मूल्यों को समझने में मदद करती है।',
    'Stories help children practice attentive listening, build mental imagery, acquire new vocabulary, and internalize values through characters.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    '"अनुकरण विधि" (Imitation Method) प्राथमिक कक्षा में किस कौशल को सिखाने में सर्वाधिक प्रयुक्त होती है?',
    'The "Imitation Method" is most commonly used in primary classes to teach which skills?',
    ['शुद्ध उच्चारण, सुलेख (लिखना) एवं वाचन कौशल', 'Accurate pronunciation, handwriting, and oral reading'],
    [
      ['उच्च स्तरीय साहित्यिक आलोचना', 'High-level literary criticism'],
      ['वैज्ञानिक अनुसंधान कार्य', 'Scientific research work'],
      ['जटिल ज्यामितीय उपपत्तियाँ', 'Complex geometric proofs'],
    ],
    'छोटे बच्चे शिक्षक के शुद्ध उच्चारण (अनुकरण वाचन) तथा अक्षरों की बनावट (लेखन अनुकरण) को देखकर और दोहराकर सीखते हैं।',
    'Young children learn accurate pronunciation and letter formation by observing and imitating the teacher’s model reading and writing.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'भाषा शिक्षण की "प्रत्यक्ष विधि" (Direct Method) की मुख्य विशेषता क्या है?',
    'What is the key characteristic of the "Direct Method" of language teaching?',
    ['मातृभाषा का सहारा लिए बिना लक्ष्य भाषा को सीधे उसी भाषा में बोलकर सिखाना', 'Teaching the target language directly through conversation in that language without using the mother tongue'],
    [
      ['हर शब्द का मातृभाषा में अनुवाद करना', 'Translating every single word into the mother tongue'],
      ['केवल व्याकरण के नियम लिखवाना', 'Writing only grammar rules'],
      ['बोलचाल पर पूर्ण प्रतिबंध लगाना', 'Completely banning speaking practice'],
    ],
    'प्रत्यक्ष विधि (जिसे प्राकृतिक विधि भी कहते हैं) में द्वितीय भाषा (जैसे अंग्रेजी) पढ़ाते समय अनुवाद के बजाय वस्तु, चित्र, क्रिया और संदर्भ से सीधे लक्ष्य भाषा में संवाद किया जाता है।',
    'In the Direct Method, the target language is taught directly through objects, actions, and context without translating into the mother tongue.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'व्याकरण-अनुवाद विधि (Grammar-Translation Method) की प्रमुख आलोचना क्या है?',
    'What is the major criticism of the Grammar-Translation Method?',
    ['इसमें सुनने और बोलने (संप्रेषण) के कौशलों की उपेक्षा होती है', 'It neglects listening and speaking (communication) skills'],
    [
      ['इसमें शब्दों के अर्थ बिल्कुल नहीं बताए जाते', 'Word meanings are not taught at all'],
      ['इसमें व्याकरण पर बिल्कुल ध्यान नहीं दिया जाता', 'Grammar is ignored completely'],
      ['यह केवल दृश्य-श्रव्य उपकरणों पर निर्भर है', 'It relies solely on audio-visual aids'],
    ],
    'व्याकरण-अनुवाद विधि (क्लासिकल विधि) पठन और अनुवाद के नियमों पर इतना केंद्रित रहती है कि विद्यार्थी लक्ष्य भाषा में धाराप्रवाह बोलना नहीं सीख पाता।',
    'The Grammar-Translation Method focuses heavily on rules and written translation, leaving learners unable to speak or listen fluently in the target language.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'हिंदी पठन शिक्षण की "देखो और कहो" (Look and Say) विधि किस इकाई से प्रारंभ होती है?',
    'From which unit does the "Look and Say" method of reading instruction begin?',
    ['संपूर्ण शब्द या छोटे वाक्य से (अक्षरों को अलग-अलग रटाने के बजाय)', 'From whole words or short sentences (rather than isolated letters)'],
    [
      ['केवल स्वर और व्यंजन के कूट संकेतों से', 'Only from phonetic codes of vowels and consonants'],
      ['कठिन पर्यायवाची शब्दों की सूची से', 'From a list of difficult synonyms'],
      ['व्याकरण के समास प्रकरण से', 'From compound grammar rules'],
    ],
    '"देखो और कहो" (शब्द विधि) में चित्र के साथ पूरा सार्थक शब्द (जैसे "कमल", "घर") दिखाया और बोला जाता है, जिससे बच्चा अर्थ के साथ पढ़ना सीखता है।',
    'In the Look and Say (whole-word) method, meaningful words paired with pictures are presented directly, helping children associate print with meaning.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'गद्य एवं पद्य शिक्षण के संदर्भ में "रसास्वादन" (Appreciation) मुख्यतः किसके शिक्षण का केंद्रीय उद्देश्य होता है?',
    'In the context of prose and poetry teaching, "Appreciation" is mainly the central objective of teaching which genre?',
    ['कविता / पद्य शिक्षण', 'Poetry teaching'],
    [
      ['व्याकरण शिक्षण', 'Grammar teaching'],
      ['पत्र लेखन शिक्षण', 'Letter writing teaching'],
      ['इमला (श्रुतलेख) शिक्षण', 'Dictation teaching'],
    ],
    'कविता शिक्षण का मुख्य उद्देश्य केवल शब्दार्थ बताना नहीं, बल्कि लय, ताल, भाव, सौंदर्य और रस की अनुभूति कराना (रसास्वादन) है।',
    'The primary goal of teaching poetry is not mere word-by-word meaning, but experiencing rhythm, emotion, aesthetic beauty, and literary appreciation.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'गद्य शिक्षण में "कठिन शब्दों के अर्थ स्पष्ट करने" (काठिन्य निवारण) की सबसे प्रभावी युक्ति क्या है?',
    'What is the most effective technique for clarifying difficult words in prose teaching?',
    ['वाक्य-प्रयोग, चित्र, अभिनय या प्रत्यक्ष वस्तु दिखाकर संदर्भ में अर्थ स्पष्ट करना', 'Clarifying meaning in context using sentences, pictures, acting, or real objects'],
    [
      ['सभी शब्दों के कोश से 5-5 पर्यायवाची लिखवाना', 'Making students copy 5 synonyms from a dictionary'],
      ['शब्द का अर्थ बताए बिना आगे बढ़ जाना', 'Skipping ahead without explaining'],
      ['केवल अंग्रेजी अनुवाद रटाना', 'Making students memorize English translations only'],
    ],
    'संदर्भ, वाक्य-प्रयोग और दृश्य सहायता से शब्द का अर्थ बताने पर विद्यार्थी शब्द के सही उपयोग को स्थायी रूप से समझ जाता है।',
    'Explaining word meanings through context, sentence usage, gestures, or visuals ensures lasting comprehension and correct usage.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'गणित शिक्षण में "अभ्यास एवं ड्रिल कार्य" (Drill Work) का मुख्य प्रयोजन क्या है?',
    'What is the main purpose of "Drill Work" in mathematics teaching?',
    ['सीखी हुई संक्रियाओं में गति, सटीकता एवं स्थायीत्व लाना', 'Developing speed, accuracy, and permanence in learned operations'],
    [
      ['नए सिद्धांतों की सर्वप्रथम खोज करना', 'Discovering new theories for the first time'],
      ['बच्चों को सजा के तौर पर व्यस्त रखना', 'Keeping children busy as punishment'],
      ['अवधारणा समझाए बिना सूत्र थोपना', 'Imposing formulas without conceptual understanding'],
    ],
    'अवधारणा की समझ विकसित होने के बाद विविध अभ्यास (Drill) करने से गणना में त्रुटियाँ कम होती हैं और कौशल परिपक्व होता है।',
    'Once conceptual understanding is built, varied drill and practice improve computational speed, accuracy, and retention.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'यदि किसी विद्यालय में बच्चों को गणित की अवधारणाएं सिखाने के लिए अबेकस, जिओबोर्ड और टैंग्राम का प्रयोग किया जा रहा है, तो यह किस दृष्टिकोण का उदाहरण है?',
    'If a school uses an abacus, geoboard, and tangram to teach mathematical concepts, which approach does this exemplify?',
    ['गतिविधि-आधारित एवं हस्तपरक (Hands-on) शिक्षण', 'Activity-based and hands-on teaching'],
    [
      ['निगमनात्मक व्याख्यान पद्धति', 'Deductive lecture method'],
      ['पत्राचार शिक्षण पद्धति', 'Correspondence teaching method'],
      ['अभिक्रमित पाठ पद्धति', 'Programmed text method'],
    ],
    'अबेकस (स्थानीय मान), जिओबोर्ड (ज्यामितीय आकृतियाँ) और टैंग्राम (स्थानिक समझ) मूर्त हस्तपरक शिक्षण सामग्री हैं जो गतिविधि द्वारा सीखने को बढ़ावा देती हैं।',
    'Abacus, geoboard, and tangrams are concrete manipulatives that promote hands-on, activity-based mathematical learning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'प्रयोगशाला विधि (Laboratory Method) में कौन-सा शिक्षण सिद्धांत सर्वाधिक सक्रिय रहता है?',
    'Which teaching principle is most active in the Laboratory Method?',
    ['करके सीखना (Learning by Doing)', 'Learning by Doing'],
    [
      ['देखकर नकल करना', 'Copying by seeing'],
      ['सुनकर रटना', 'Memorizing by listening'],
      ['पढ़कर भूल जाना', 'Forgetting after reading'],
    ],
    'प्रयोगशाला विधि में विद्यार्थी स्वयं उपकरणों को संभालकर, मापन कर और निरीक्षण करके निष्कर्ष प्राप्त करता है, जो "करके सीखने" का प्रत्यक्ष रूप है।',
    'In the laboratory method, students handle apparatus, measure, observe, and draw conclusions themselves, directly embodying learning by doing.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 4 की एक शिक्षिका "जल चक्र" पढ़ाते समय पहले बच्चों से पूछती है कि धूप में सूखने डाले गए गीले कपड़े शाम को कैसे सूख जाते हैं। शिक्षिका किस शिक्षण कौशल का प्रयोग कर रही है?',
    'While teaching the "Water Cycle" to Class 4, a teacher asks how wet clothes hung in the sun dry by evening. Which teaching skill is she using?',
    ['प्रस्तावना एवं पूर्व-ज्ञान से जोड़ने का कौशल', 'Skill of Set Induction and linking prior knowledge'],
    [
      ['श्यामपट्ट लेखन कौशल', 'Blackboard writing skill'],
      ['पुनरावृत्ति मूल्यांकन कौशल', 'Recapitulation evaluation skill'],
      ['पुनर्बलन कौशल', 'Reinforcement skill'],
    ],
    'बच्चों के दैनिक जीवन के परिचित अनुभव (कपड़े सूखना) से वाष्पीकरण और जल चक्र की नई अवधारणा को जोड़ना प्रभावी प्रस्तावना कौशल है।',
    'Connecting the new concept of evaporation and water cycle to a familiar everyday experience (drying clothes) demonstrates effective set induction.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक ने देखा कि कक्षा में पीछे बैठे छात्र बार-बार आपस में बातें कर रहे हैं और पाठ में रुचि नहीं ले रहे। शिक्षक को सर्वप्रथम क्या करना चाहिए?',
    'A teacher notices that students sitting at the back are repeatedly talking and not taking interest in the lesson. What should the teacher do first?',
    ['अपनी शिक्षण शैली में बदलाव लाकर प्रश्न पूछना, कक्षा में घूमना व गतिविधि जोड़ना', 'Vary teaching style, move toward the back, ask engaging questions, and add activity'],
    [
      ['उन सभी छात्रों को कक्षा से बाहर खड़ा कर देना', 'Make all those students stand outside the classroom'],
      ['प्रधानाचार्य को शिकायत पत्र लिखकर भेजना', 'Send a complaint letter to the principal'],
      ['तेज आवाज में डाँटकर सभी को सिर नीचे करने को कहना', 'Scold loudly and ask everyone to put their heads down'],
    ],
    'विद्यार्थियों का ध्यान भटकना प्रायः शिक्षण में एकरसता का संकेत होता है। उद्दीपन परिवर्तन (पास जाना, आवाज में बदलाव, प्रश्न पूछना या गतिविधि) द्वारा सकारात्मक ढंग से उन्हें जोड़ा जा सकता है।',
    'Loss of attention often signals monotonous instruction. Using stimulus variation—moving closer, modulating voice, questioning, or introducing an activity—constructively re-engages learners.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक छात्र प्रश्न का आंशिक रूप से सही और आंशिक रूप से गलत उत्तर देता है। शिक्षक की सबसे उपयुक्त प्रतिक्रिया क्या होनी चाहिए?',
    'A student gives a partially correct and partially incorrect answer. What should be the teacher’s most appropriate response?',
    ['सही भाग की सराहना करके संकेत (Prompt) द्वारा सही उत्तर तक पहुँचाना', 'Appreciate the correct part and use prompts to guide toward the full answer'],
    [
      ['"तुम बिल्कुल गलत हो, बैठ जाओ" कहकर दूसरे छात्र से पूछना', 'Say "You are completely wrong, sit down" and ask another student'],
      ['पूरी कक्षा के सामने उसका उपहास उड़ाना', 'Mock the student in front of the whole class'],
      ['उत्तर को अनसुना कर देना', 'Ignore the answer completely'],
    ],
    'सही अंश को स्वीकार करने से छात्र का आत्मविश्वास बना रहता है और अनुशीलन/संकेत देने से वह स्वयं त्रुटि सुधार कर पूर्ण ज्ञान तक पहुँचता है।',
    'Acknowledging the correct part preserves confidence, while prompting helps the learner self-correct and reach the complete answer.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि आप अपनी कक्षा में "लोकतंत्र और ग्राम पंचायत" विषय पढ़ाना चाहते हैं, तो किस शिक्षण विधि का प्रयोग सबसे अधिक सजीव समझ विकसित करेगा?',
    'If you want to teach "Democracy and Gram Panchayat" in your class, which method will develop the liveliest understanding?',
    ['कक्षा में मॉक ग्राम सभा (भूमिका निर्वाह) का आयोजन करना', 'Organizing a mock Gram Sabha (Role Play) in the classroom'],
    [
      ['केवल पंचायत अधिनियम की धाराएँ लिखवाना', 'Dictating only the sections of the Panchayat Act'],
      ['श्यामपट्ट पर परिभाषा लिखकर रटवाना', 'Writing definition on the board for rote learning'],
      ['गृहकार्य में 5 बार पाठ की नकल कराना', 'Making students copy the chapter 5 times as homework'],
    ],
    'मॉक ग्राम सभा के अभिनय में बच्चे सरपंच, पंच व ग्रामवासी बनकर निर्णय प्रक्रिया को प्रत्यक्ष रूप से अनुभव करते हैं, जिससे लोकतांत्रिक मूल्य गहराई से समझ आते हैं।',
    'Through a mock Gram Sabha role play, students experience decision-making as Sarpanch, Panch, and villagers, deeply grasping democratic processes.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'बहुस्तरीय कक्षा (जहाँ कुछ बच्चे बहुत तेज सीखते हैं और कुछ धीरे) में शिक्षक के लिए कौन-सी शिक्षण रणनीति सबसे प्रभावी होगी?',
    'In a multi-level classroom (with both fast and slow learners), which teaching strategy is most effective for the teacher?',
    ['विभेदित अनुदेशन (Differentiated Instruction) एवं सहपाठी शिक्षण (Peer Tutoring)', 'Differentiated instruction and peer tutoring'],
    [
      ['केवल तेज छात्रों को ध्यान में रखकर पढ़ाना', 'Teaching only for the fast learners'],
      ['केवल धीमे छात्रों के साथ रुककर तेज छात्रों को खाली बिठाना', 'Waiting for slow learners while leaving fast learners idle'],
      ['सभी को एक ही कठिन प्रश्न हल करने के लिए दंडित करना', 'Punishing everyone on the same hard task'],
    ],
    'विभेदित अनुदेशन में छात्रों के स्तर के अनुसार अलग-अलग कार्यपत्रक/गतिविधियाँ दी जाती हैं और सहपाठी शिक्षण में बच्चे एक-दूसरे की मदद से सीखते हैं।',
    'Differentiated instruction provides tasks suited to varied readiness levels, and peer tutoring enables collaborative support among learners.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'प्रमुख कौशल एवं विशेषताएँ',
    'बी.के. पासी (B.K. Passi) ने भारतीय परिस्थितियों के अनुरूप कुल कितने शिक्षण कौशलों की सूची प्रस्तुत की थी?',
    'How many teaching skills did B.K. Passi list in accordance with Indian classroom conditions?',
    ['13 शिक्षण कौशल', '13 teaching skills'],
    [
      ['5 शिक्षण कौशल', '5 teaching skills'],
      ['8 शिक्षण कौशल', '8 teaching skills'],
      ['25 शिक्षण कौशल', '25 teaching skills'],
    ],
    'प्रो. बी.के. पासी ने 1976 में अपनी पुस्तक "Becoming Better Teacher: Microteaching Approach" में भारतीय संदर्भ हेतु 13 प्रमुख शिक्षण कौशलों का उल्लेख किया था।',
    'Prof. B.K. Passi listed 13 core teaching skills tailored to Indian contexts in his 1976 work "Becoming Better Teacher: Microteaching Approach".',
    'HARD'
  ),
  q(
    'शिक्षण कौशल',
    'प्रमुख कौशल एवं विशेषताएँ',
    'ड्वाइट एलन एवं रयान ने मूल रूप से कितने शिक्षण कौशलों की पहचान की थी?',
    'How many teaching skills were originally identified by Dwight Allen and Ryan?',
    ['14 शिक्षण कौशल', '14 teaching skills'],
    [
      ['7 शिक्षण कौशल', '7 teaching skills'],
      ['10 शिक्षण कौशल', '10 teaching skills'],
      ['20 शिक्षण कौशल', '20 teaching skills'],
    ],
    'स्टैनफोर्ड विश्वविद्यालय के ड्वाइट एलन और केविन रयान (1969) ने सूक्ष्म शिक्षण हेतु 14 प्रमुख शिक्षण कौशलों की सूची तैयार की थी।',
    'Dwight Allen and Kevin Ryan (1969) at Stanford University originally identified a list of 14 general teaching skills for micro-teaching.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'पद्धति तुलना एवं विशेषताएँ',
    'निम्नलिखित में से कौन-सा युग्म (शिक्षण विधि - प्रवर्तक) सही सुमेलित नहीं है?',
    'Which of the following pairs (Teaching Method - Propounder) is NOT correctly matched?',
    ['ह्यूरिस्टिक विधि — हेलेन पार्कहर्स्ट', 'Heuristic Method — Helen Parkhurst'],
    [
      ['किंडरगार्टन विधि — फ्रेडरिक फ्रोबेल', 'Kindergarten Method — Friedrich Froebel'],
      ['प्रोजेक्ट विधि — विलियम किलपैट्रिक', 'Project Method — William Kilpatrick'],
      ['मोंटेसरी विधि — मारिया मोंटेसरी', 'Montessori Method — Maria Montessori'],
    ],
    'ह्यूरिस्टिक विधि के प्रवर्तक हेनरी एडवर्ड आर्मस्ट्रांग हैं, जबकि हेलेन पार्कहर्स्ट डाल्टन योजना की प्रवर्तक हैं। अन्य तीनों युग्म सही सुमेलित हैं।',
    'The Heuristic Method was propounded by Henry Edward Armstrong, whereas Helen Parkhurst propounded the Dalton Plan. All other pairs are correctly matched.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'पद्धति तुलना एवं विशेषताएँ',
    'निम्नलिखित में से किस शिक्षण विधि में "स्व-अनुशासन" (Self-discipline) और "स्व-गति" (Self-pacing) पर विशेष बल नहीं दिया जाता?',
    'Which of the following teaching methods does NOT emphasize self-discipline and self-pacing?',
    ['कठोर व्याख्यान विधि', 'Rigid Lecture Method'],
    [
      ['डाल्टन योजना', 'Dalton Plan'],
      ['मोंटेसरी पद्धति', 'Montessori Method'],
      ['अभिक्रमित अनुदेशन', 'Programmed Instruction'],
    ],
    'डाल्टन, मोंटेसरी और अभिक्रमित अनुदेशन तीनों बालक/अधिगमकर्ता-केंद्रित हैं जहाँ बच्चा अपनी गति से सीखता है, जबकि पारंपरिक व्याख्यान शिक्षक की गति से चलता है।',
    'Dalton Plan, Montessori, and Programmed Instruction are learner-paced methods promoting self-discipline, whereas rigid lecturing moves solely at the teacher’s pace.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सहकारी एवं आधुनिक विधियाँ',
    '"जिग्सॉ" (Jigsaw) सहकारी अधिगम तकनीक (इलियट एरोनसन) में क्या होता है?',
    'What happens in the "Jigsaw" cooperative learning technique (Elliot Aronson)?',
    ['प्रत्येक छात्र एक उप-विषय का विशेषज्ञ बनता है और फिर अपने मूल समूह के साथियों को सिखाता है', 'Each student becomes an expert on one sub-topic and teaches it to their home group members'],
    [
      ['सभी छात्र अलग-अलग कमरों में बैठकर चुपचाप परीक्षा देते हैं', 'All students sit in separate rooms taking a silent exam'],
      ['शिक्षक गत्ते की पहेली तोड़कर फेंक देते हैं', 'The teacher breaks a cardboard puzzle and discards it'],
      ['केवल एक छात्र पूरे वर्ष कक्षा का मॉनिटर रहता है', 'Only one student stays class monitor all year'],
    ],
    'जिग्सॉ विधि में किसी पाठ को उप-भागों में बांटा जाता है; विशेषज्ञ समूह (Expert Group) में तैयारी के बाद प्रत्येक छात्र अपने मूल समूह को अपना भाग समझाता है।',
    'In the Jigsaw method, a topic is split into parts; after preparing in expert groups, each student returns to teach their segment to their home group.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्वेषण एवं रचनावाद',
    'रचनावादी शिक्षण का "5E मॉडल" (BSCS द्वारा विकसित) किन पाँच चरणों से मिलकर बना है?',
    'The "5E Model" of constructivist teaching (developed by BSCS) consists of which five phases?',
    ['संलग्न (Engage), अन्वेषण (Explore), व्याख्या (Explain), विस्तार (Elaborate), मूल्यांकन (Evaluate)', 'Engage, Explore, Explain, Elaborate, Evaluate'],
    [
      ['पढ़ना, लिखना, रटना, सुनना, परीक्षा देना', 'Read, Write, Memorize, Listen, Examine'],
      ['प्रस्तावना, तुलना, दंड, गृहकार्य, छुट्टी', 'Intro, Compare, Punish, Homework, Dismissal'],
      ['प्रेरणा, अनुकरण, व्याख्यान, लेखन, संश्लेषण', 'Motivate, Imitate, Lecture, Write, Synthesize'],
    ],
    'रचनावादी अधिगम का 5E चक्र (Engage → Explore → Explain → Elaborate → Evaluate) विद्यार्थियों को पूर्व-ज्ञान से जोड़ते हुए सक्रिय खोज द्वारा अवधारणा निर्माण में मदद करता है।',
    'The constructivist 5E cycle (Engage, Explore, Explain, Elaborate, Evaluate) guides learners to actively construct concepts from prior knowledge and inquiry.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    'रिचर्ड सचमैन (Richard Suchman) द्वारा विकसित "पूछताछ प्रशिक्षण प्रतिमान" (Inquiry Training Model) में विद्यार्थी शिक्षक से किस प्रकार के प्रश्न पूछते हैं?',
    'In the "Inquiry Training Model" developed by Richard Suchman, what type of questions do students ask the teacher?',
    ['ऐसे प्रश्न जिनका उत्तर केवल "हाँ" या "नहीं" में दिया जा सके', 'Questions that can be answered strictly with "Yes" or "No"'],
    [
      ['लंबे निबंधात्मक प्रश्न', 'Long essay-type questions'],
      ['असंगत चुटकुले', 'Irrelevant jokes'],
      ['केवल परिभाषा पूछने वाले प्रश्न', 'Questions asking only for definitions'],
    ],
    'सचमैन के पूछताछ प्रशिक्षण प्रतिमान में शिक्षक कोई विस्मयकारी घटना दिखाता है और छात्र परिकल्पना परीक्षण हेतु केवल "हाँ/नहीं" वाले तार्किक प्रश्न पूछकर कारण खोजते हैं।',
    'In Suchman’s Inquiry Training Model, after a discrepant event is shown, students ask "Yes/No" questions to test hypotheses and discover the causal explanation.',
    'HARD'
  ),
  q(
    'शिक्षण कौशल',
    'अनुदेशनात्मक उद्देश्य एवं कौशल',
    'शिक्षण कौशल अभ्यास के दौरान "अशाब्दिक अंतःक्रिया" (Non-verbal Interaction) का उदाहरण कौन-सा है?',
    'Which of the following is an example of "Non-verbal Interaction" during teaching?',
    ['विद्यार्थी की ओर देखकर मुस्कुराना, सिर हिलाना या पास जाकर पीठ थपथपाना', 'Making eye contact, smiling, nodding, or gently patting a student’s shoulder'],
    [
      ['श्यामपट्ट पर कठिन परिभाषा पढ़कर सुनाना', 'Reading out a difficult definition from the board'],
      ['मौखिक रूप से पाठ का सार बोलना', 'Orally stating the summary of the lesson'],
      ['भाषण प्रतियोगिता में अंक बोलना', 'Announcing scores in a speech contest'],
    ],
    'बिना शब्दों का प्रयोग किए चेहरे के भाव, नेत्र संपर्क, मुद्रा व संकेतों से विद्यार्थियों से संवाद स्थापित करना अशाब्दिक अंतःक्रिया कहलाता है।',
    'Communicating with students without words through eye contact, facial expressions, gestures, and posture constitutes non-verbal interaction.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'बाल-केंद्रित शिक्षण',
    'निम्नलिखित में से कौन-सी विधि पूर्णतः "शिक्षक-केंद्रित" (Teacher-centered) श्रेणी में आती है?',
    'Which of the following methods falls purely under the "Teacher-centered" category?',
    ['पारंपरिक व्याख्यान विधि', 'Traditional Lecture Method'],
    [
      ['प्रोजेक्ट विधि', 'Project Method'],
      ['ह्यूरिस्टिक विधि', 'Heuristic Method'],
      ['मोंटेसरी विधि', 'Montessori Method'],
    ],
    'व्याख्यान विधि में सूचना का प्रवाह एकतरफा (शिक्षक से छात्र की ओर) होता है और नियंत्रण पूर्णतः शिक्षक के हाथ में रहता है, जबकि शेष तीनों बाल-केंद्रित हैं।',
    'In the traditional lecture method, information flows one-way from teacher to passive learners under full teacher control, whereas the others are learner-centered.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'बाल-केंद्रित शिक्षण',
    'सामूहिक चर्चा विधि (Group Discussion Method) के सफल संचालन हेतु शिक्षक की क्या भूमिका होनी चाहिए?',
    'What should be the teacher’s role for successfully conducting the Group Discussion Method?',
    ['एक सुगमकर्ता (Facilitator) एवं मध्यस्थ की, जो सभी को बोलने का अवसर दे', 'That of a facilitator and moderator ensuring everyone gets a chance to speak'],
    [
      ['एक तानाशाह की, जो किसी छात्र को बोलने न दे', 'That of a dictator who prevents students from speaking'],
      ['चर्चा छोड़कर कक्षा से बाहर चले जाने वाले दर्शक की', 'That of a spectator leaving the classroom'],
      ['केवल अपने विचार थोपने वाले वक्ता की', 'That of a speaker imposing only personal views'],
    ],
    'समूह चर्चा में शिक्षक विषय को पटरी पर रखता है, संकोची छात्रों को प्रोत्साहित करता है और विषय से भटकने पर विनम्रता से दिशा देता है।',
    'In group discussion, the teacher facilitates, keeps the discussion focused, encourages shy learners, and ensures respectful turn-taking.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'आगमन विधि में किस तार्किक प्रक्रिया का उपयोग किया जाता है जब बच्चा कहता है— "मैंने देखा लोहा, तांबा और एल्युमिनियम गर्म करने पर फैलते हैं; अतः सभी धातुएं गर्म करने पर फैलती हैं"?',
    'Which logical process of the inductive method is used when a child says— "I saw iron, copper, and aluminum expand on heating; therefore, all metals expand on heating"?',
    ['विशेष प्रेक्षणों से सामान्य नियम का सामान्यीकरण (Generalization)', 'Generalization from specific observations to a general rule'],
    [
      ['निगमन द्वारा नियम की पुष्टि', 'Verification via deduction'],
      ['अनावश्यक अनुमान', 'Arbitrary guessing'],
      ['विश्लेषण का विपरीत संश्लेषण', 'Synthesis opposite to analysis'],
    ],
    'विभिन्न धातुओं के विशिष्ट उदाहरणों का निरीक्षण कर एक सार्वभौमिक नियम बनाना आगमन विधि का "सामान्यीकरण" सोपान है।',
    'Observing specific metal examples and formulating a universal statement represents the generalization step of induction.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'विज्ञान एवं गणित शिक्षण में "निगमन विधि" का प्रयोग कब सर्वाधिक लाभकारी होता है?',
    'When is the use of the "Deductive Method" most beneficial in science and mathematics teaching?',
    ['जब छात्रों को पहले से अवधारणा की समझ हो और प्राप्त सूत्रों का त्वरित अभ्यास व अनुप्रयोग करना हो', 'When students already grasp the concept and need quick practice and application of formulas'],
    [
      ['जब कक्षा 1 के बच्चों को पहली बार गिनती सिखानी हो', 'When teaching counting for the first time to Class 1 children'],
      ['जब बच्चों में रचनात्मक खोज की आदत डालनी हो', 'When instilling creative discovery habits in children'],
      ['जब बच्चे बिल्कुल भी पढ़ना न जानते हों', 'When children cannot read at all'],
    ],
    'उच्च प्राथमिक एवं माध्यमिक स्तर पर अवधारणा समझाने के बाद समस्याओं के तीव्र अभ्यास, पुनरावृत्ति और परीक्षा तैयारी में निगमन विधि समय बचाती है।',
    'Once concepts are understood, the deductive method saves time during rapid practice, revision, and problem-solving application at upper primary/secondary levels.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि में "योजना बनाना" (Planning) सोपान के दौरान शिक्षक को क्या ध्यान रखना चाहिए?',
    'During the "Planning" step of the Project Method, what should the teacher keep in mind?',
    ['योजना विद्यार्थियों की सक्रिय भागीदारी से बने, शिक्षक केवल मार्गदर्शन करे', 'The plan should be prepared with active student participation while the teacher guides'],
    [
      ['पूरी योजना शिक्षक चुपचाप अकेले बना कर दे दे', 'The teacher should prepare the whole plan alone secretly'],
      ['केवल एक छात्र को पूरी योजना बनाने का काम दे दिया जाए', 'Only one student should make the entire plan'],
      ['बिना किसी योजना के कार्य सीधे शुरू कर दिया जाए', 'Work should start directly without any planning'],
    ],
    'प्रोजेक्ट विधि की आत्मा लोकतांत्रिक सहभागिता और स्व-उत्तरदायित्व है। यदि शिक्षक स्वयं योजना थोप दे, तो प्रोजेक्ट का उद्देश्य समाप्त हो जाता है।',
    'Democratic participation and ownership lie at the heart of the project method; if the teacher imposes the plan, student agency is lost.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'अच्छा शैक्षिक प्रोजेक्ट चुनते समय किस कसौटी का ध्यान रखना सबसे आवश्यक है?',
    'Which criterion is most essential when selecting a good educational project?',
    ['प्रोजेक्ट छात्रों की आयु, रुचि, योग्यता तथा उपलब्ध संसाधनों के अनुकूल एवं उपयोगी हो', 'The project should match students’ age, interest, ability, available resources, and have utility'],
    [
      ['प्रोजेक्ट अत्यधिक महँगा और बाहरी बाजार से खरीदा गया हो', 'The project should be very expensive and bought ready-made'],
      ['प्रोजेक्ट का पाठ्यक्रम से कोई लेना-देना न हो', 'The project should be unrelated to the curriculum'],
      ['प्रोजेक्ट केवल माता-पिता द्वारा बनाया जाने वाला हो', 'The project should be such that only parents can build it'],
    ],
    'उत्तम प्रोजेक्ट वह है जिसे बच्चे स्वयं अपनी क्षमता व स्थानीय संसाधनों से पूरा कर सकें और जिससे वास्तविक अधिगम प्रतिफल प्राप्त हों।',
    'A good project is one children can execute themselves with local resources, matching their developmental level and curricular goals.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'निम्नलिखित में से कौन-सी गतिविधि भाषा शिक्षण में "खेल विधि" का उदाहरण नहीं है?',
    'Which of the following activities is NOT an example of the "Play-way Method" in language teaching?',
    ['शब्दों को 20-20 बार कॉपी में लिखकर याद करना', 'Writing words 20 times in a notebook to memorize them'],
    [
      ['अंत्याक्षरी (शब्द-श्रृंखला) खेलना', 'Playing word-chain (Antakshari)'],
      ['अक्षर-कार्ड द्वारा शब्द निर्माण प्रतियोगिता', 'Word-building game using letter cards'],
      ['कठपुतली (Puppet) के माध्यम से संवाद अभिनय', 'Dialogue acting through puppets'],
    ],
    'शब्दों को यांत्रिक रूप से 20 बार लिखना रटंत और उबाऊ अभ्यास है, जबकि अंत्याक्षरी, कार्ड-खेल और कठपुतली अभिनय आनंदपूर्ण खेल विधि के उदाहरण हैं।',
    'Mechanically copying words 20 times is tedious rote drill, whereas word-chains, card games, and puppet dialogues exemplify joyful play-way learning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी एवं किंडरगार्टन',
    'मोंटेसरी और किंडरगार्टन दोनों पद्धतियों में कौन-सी समानता पाई जाती है?',
    'Which similarity is found in both Montessori and Kindergarten methods?',
    ['दोनों बाल-केंद्रित हैं, स्वतंत्रता देती हैं और इंद्रियों व खेल/क्रिया द्वारा सीखने पर बल देती हैं', 'Both are child-centered, provide freedom, and emphasize sensory and activity-based learning'],
    [
      ['दोनों में कठोर शारीरिक दंड का प्रावधान है', 'Both prescribe strict corporal punishment'],
      ['दोनों केवल विश्वविद्यालय स्तर की शिक्षा के लिए हैं', 'Both are meant only for university-level education'],
      ['दोनों में किसी भी शिक्षण सामग्री का प्रयोग वर्जित है', 'Both prohibit the use of any teaching aids'],
    ],
    'यद्यपि मोंटेसरी व्यक्तिगत स्व-शिक्षण व वास्तविक जीवन कौशलों पर अधिक बल देती है और फ्रोबेल सामूहिक खेल व कल्पना पर, फिर भी दोनों ही बाल-केंद्रित और इंद्रिय-प्रशिक्षण की समर्थक हैं।',
    'While Montessori emphasizes individual didactic tasks and Froebel emphasizes group play and imagination, both are child-centered and value sensory, joyful learning.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी एवं किंडरगार्टन',
    'मोंटेसरी पद्धति तथा किंडरगार्टन पद्धति के बीच एक प्रमुख अंतर क्या है?',
    'What is a major difference between the Montessori Method and the Kindergarten Method?',
    ['मोंटेसरी में यथार्थ जीवन व व्यक्तिगत कार्य पर बल है, जबकि किंडरगार्टन में कल्पना, परीकथा व सामूहिक गीत-खेल पर', 'Montessori stresses practical life and individual work, whereas Kindergarten stresses imagination, fairy tales, and group songs/play'],
    [
      ['मोंटेसरी में बच्चे कभी नहीं बोलते, किंडरगार्टन में केवल बोलते हैं', 'Children never speak in Montessori, only in Kindergarten'],
      ['किंडरगार्टन में खिलौनों का प्रयोग नहीं होता', 'No toys are used in Kindergarten'],
      ['मोंटेसरी पद्धति केवल भारत में प्रचलित है', 'Montessori is practiced only in India'],
    ],
    'मारिया मोंटेसरी ने कपड़ा धोना, बटन लगाना, रेगमाल अक्षर जैसे यथार्थ व व्यक्तिगत कार्यों को प्राथमिकता दी, जबकि फ्रोबेल ने सामूहिक वृत्त-गीतों, कहानी व कल्पनाशील उपहारों पर जोर दिया।',
    'Montessori emphasized practical-life skills and individual self-correcting tasks, whereas Froebel emphasized group circle songs, stories, and imaginative play.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'आर्मस्ट्रांग की ह्यूरिस्टिक विधि मूलतः किस विषय के शिक्षण के लिए विकसित की गई थी?',
    'For teaching which subject was Armstrong’s Heuristic Method originally developed?',
    ['विज्ञान (विशेषतः रसायन विज्ञान)', 'Science (specifically Chemistry)'],
    [
      ['संस्कृत व्याकरण', 'Sanskrit Grammar'],
      ['संगीत गायन', 'Vocal Music'],
      ['केवल भूगोल मानचित्र', 'Only Geography Maps'],
    ],
    'हेनरी एडवर्ड आर्मस्ट्रांग लंदन में रसायन विज्ञान के प्रोफेसर थे; उन्होंने विज्ञान शिक्षण में रटने की प्रवृत्ति तोड़कर प्रयोग व अन्वेषण को बढ़ाने के लिए यह विधि विकसित की।',
    'Henry Edward Armstrong was a Chemistry professor in London who developed the heuristic method to replace rote science learning with experimental discovery.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "शिक्षण के आकार को छोटा करने" (Scaling down) में निम्नलिखित में से कौन-सा शामिल नहीं है?',
    'Which of the following is NOT included in "scaling down" in Micro-teaching?',
    ['अध्ययन विषय की गुणवत्ता को कम कर देना', 'Reducing the quality or accuracy of subject content'],
    [
      ['कक्षा में छात्रों की संख्या कम करना (5-10 छात्र)', 'Reducing class size (5–10 students)'],
      ['शिक्षण अवधि कम करना (5-6 मिनट)', 'Reducing teaching duration (5–6 minutes)'],
      ['एक समय में केवल एक शिक्षण कौशल तक सीमित रहना', 'Limiting to one teaching skill at a time'],
    ],
    'सूक्ष्म शिक्षण में समय, छात्र संख्या और प्रकरण का विस्तार कम किया जाता है, परंतु विषयवस्तु की शुद्धता या शिक्षण की गुणवत्ता से समझौता नहीं किया जाता।',
    'Micro-teaching scales down time, class size, and topic scope to one skill, never compromising the accuracy or quality of content.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण प्रक्रिया की शुरुआत किस सोपान से होती है?',
    'With which step does the Micro-teaching process begin?',
    ['विशिष्ट कौशल का अभिविन्यास (Orientation) एवं आदर्श पाठ प्रस्तुति (Modeling)', 'Orientation of the specific skill and model presentation'],
    [
      ['सीधे पुनः मूल्यांकन से', 'Directly with re-evaluation'],
      ['अंतिम प्रमाणपत्र वितरण से', 'With final certificate distribution'],
      ['बिना जानकारी के कक्षा में प्रवेश से', 'Entering class without any orientation'],
    ],
    'वास्तविक 36 मिनट का चक्र शुरू होने से पहले प्रशिक्षु शिक्षकों को कौशल के सिद्धांत व घटकों की समझ दी जाती है और आदर्श पाठ (Model Lesson) दिखाया जाता है।',
    'Before the 36-minute practice cycle begins, trainees receive orientation on the skill’s components and observe a model demonstration.',
    'MEDIUM'
  ),
  q(
    'शिक्षण कौशल',
    'पुनर्बलन कौशल',
    'यदि कोई शिक्षक छात्र द्वारा गलत उत्तर देने पर कहता है "नहीं, थोड़ा और ध्यान से सोचो", तो यह किस श्रेणी का पुनर्बलन कहलाएगा?',
    'If a teacher says "No, think a little more carefully" when a student gives an incorrect answer, which category of reinforcement is this?',
    ['ऋणात्मक शाब्दिक पुनर्बलन (सुधारात्मक प्रतिपुष्टि के रूप में)', 'Negative Verbal Reinforcement (as corrective feedback)'],
    [
      ['धनात्मक अशाब्दिक पुनर्बलन', 'Positive Non-verbal Reinforcement'],
      ['दंडात्मक शारीरिक क्रिया', 'Corporal Punishment'],
      ['धनात्मक शाब्दिक प्रशंसा', 'Positive Verbal Praise'],
    ],
    '"नहीं", "गलत" या असहमति जताना शाब्दिक ऋणात्मक पुनर्बलन की श्रेणी में आता है, यद्यपि इसे सदैव विनम्रता और सुधारात्मक संकेत के साथ प्रयोग किया जाना चाहिए।',
    'Verbal statements indicating incorrectness ("No", "Incorrect") fall under negative verbal reinforcement, which should always be delivered politely and constructively.',
    'HARD'
  ),
  q(
    'शिक्षण कौशल',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक पाठ पढ़ाते समय निरंतर एक ही स्थान पर कुर्सी पर बैठकर एक जैसी आवाज में किताब पढ़ता रहता है। इस स्थिति में किस कौशल का सर्वाधिक अभाव है?',
    'While teaching, a teacher sits continuously in a chair at one spot reading the book in a monotone voice. Which skill is most lacking here?',
    ['उद्दीपन परिवर्तन कौशल', 'Skill of Stimulus Variation'],
    [
      ['अनुकरण लेखन कौशल', 'Imitation writing skill'],
      ['गृहकार्य जांच कौशल', 'Homework checking skill'],
      ['सूक्ष्म अभिलेखन कौशल', 'Micro-recording skill'],
    ],
    'एक स्थान पर जमे रहने और एकरस आवाज में बोलने से छात्रों का ध्यान टूटता है। संचलन, स्वर उतार-चढ़ाव, नेत्र संपर्क व हाव-भाव उद्दीपन परिवर्तन कौशल के आवश्यक अंग हैं।',
    'Sitting motionless and speaking in a monotone breaks student focus; movement, voice modulation, eye contact, and gestures belong to Stimulus Variation.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'प्रश्न पूछते समय शिक्षक को किस प्रकार की भाषा और संरचना से बचना चाहिए?',
    'Which type of language and structure should a teacher avoid while framing questions?',
    ['द्विअर्थी, अस्पष्ट तथा केवल "हाँ/नहीं" वाले अनुमान-प्रश्नों (Yes/No guessing questions) की अधिकता से', 'Ambiguous, vague wording and excessive "Yes/No" guessing questions'],
    [
      ['संक्षिप्त एवं स्पष्ट भाषा से', 'Brief and clear language'],
      ['विद्यार्थियों के स्तर के अनुकूल शब्दावली से', 'Vocabulary suited to learners’ level'],
      ['सोचने को प्रेरित करने वाले "क्यों" और "कैसे" प्रश्नों से', 'Thought-provoking "Why" and "How" questions'],
    ],
    'अस्पष्ट या द्विअर्थी प्रश्न छात्रों में भ्रम पैदा करते हैं, और बार-बार केवल "हाँ/नहीं" वाले प्रश्न पूछने से छात्र बिना सोचे तुक्का लगाने लगते हैं।',
    'Ambiguous questions confuse learners, and overusing simple Yes/No questions encourages blind guessing rather than genuine thinking.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'कक्षा में शिक्षक का पहले पूरी कक्षा के सामने प्रश्न रखना, थोड़ी देर रुकना और फिर किसी एक छात्र का नाम लेकर उत्तर पूछना क्यों उचित माना जाता है?',
    'Why is it considered good practice for a teacher to pose a question to the whole class first, pause, and then call on a specific student?',
    ['ताकि कक्षा के सभी विद्यार्थी प्रश्न पर सक्रिय रूप से सोचें', 'So that all students in the class actively think about the question'],
    [
      ['ताकि केवल एक ही छात्र को डराया जा सके', 'So that only one student can be intimidated'],
      ['ताकि बाकी छात्र बातचीत में लग जाएँ', 'So that other students can start chatting'],
      ['ताकि समय बर्बाद किया जा सके', 'So that class time can be wasted'],
    ],
    'यदि पहले ही किसी छात्र का नाम ले लिया जाए तो बाकी बच्चे सोचने से मुक्त हो जाते हैं। पहले प्रश्न पूछने से पूरी कक्षा मानसिक रूप से सक्रिय रहती है।',
    'Naming a student before asking the question lets everyone else disengage; posing the question to the whole class first ensures universal cognitive engagement.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण विधि',
    'प्रारंभिक पठन शिक्षण में जब बच्चों को शब्द को ध्वनियों में तोड़ना (जैसे क-म-ल) सिखाया जाता है, तो यह किस प्रक्रिया का प्रयोग है?',
    'In early reading instruction, when children are taught to break a word into its sounds (e.g., k-a-m-a-l), which process is used?',
    ['ध्वनि विश्लेषण (Analysis)', 'Phonemic Analysis'],
    [
      ['संश्लेषण (Synthesis)', 'Synthesis'],
      ['निगमन (Deduction)', 'Deduction'],
      ['प्रोजेक्ट निर्माण (Project making)', 'Project making'],
    ],
    'किसी संपूर्ण शब्द को उसकी घटक ध्वनियों/वर्णों में विभाजित करना विश्लेषण है, जबकि अलग-अलग ध्वनियों को जोड़कर शब्द पढ़ना संश्लेषण (Blending) कहलाता है।',
    'Breaking a whole word into constituent sounds/letters is analysis, whereas blending separate sounds to form a word is synthesis.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण प्रविधियाँ',
    'निम्नलिखित में से कौन-सी प्रविधि "अधिगम केंद्रित" (Learner-centered) शिक्षण को बढ़ावा देती है?',
    'Which of the following techniques promotes "Learner-centered" teaching?',
    ['परियोजना, खोज एवं सहपाठी चर्चा गतिविधियाँ', 'Projects, discovery tasks, and peer discussion activities'],
    [
      ['एकतरफा श्रुतलेख लिखाना', 'One-way dictation'],
      ['श्यामपट्ट से उतारकर रटवाना', 'Copying from the board and memorizing'],
      ['लगातार 45 मिनट शिक्षक का भाषण', '45 minutes of continuous teacher talk'],
    ],
    'अधिगम-केंद्रित शिक्षण में विद्यार्थी ज्ञान के निष्क्रिय प्राप्तकर्ता न होकर सक्रिय निर्माता होते हैं, जो खोज, चर्चा और परियोजनाओं से सीखते हैं।',
    'In learner-centered teaching, students are active constructors of knowledge through inquiry, collaboration, and projects rather than passive recipients.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण प्रविधियाँ',
    '"बज़ सेशन" (Buzz Session) या छोटे समूह की त्वरित चर्चा का उपयोग कक्षा में कब किया जाता है?',
    'When is a "Buzz Session" (brief small-group discussion) used in the classroom?',
    ['किसी प्रश्न या विचार पर 3-5 मिनट में छोटे समूहों से त्वरित विचार एवं समाधान प्राप्त करने हेतु', 'To gather quick ideas and solutions from small groups on a prompt in 3–5 minutes'],
    [
      ['पूरे सत्र की वार्षिक परीक्षा लेने के लिए', 'To conduct the annual examination of the entire term'],
      ['कक्षा में पूर्ण सन्नाटा बनाए रखने के लिए', 'To maintain complete silence in the classroom'],
      ['व्याकरण के सूत्र रटाने के लिए', 'To make students memorize grammar formulas'],
    ],
    'बज़ सेशन (फिलिप्स 66 आदि) में छात्रों को 4-6 के छोटे समूहों में बांटकर किसी एक बिंदु पर कुछ मिनट चर्चा कराई जाती है, जिससे संकोची छात्र भी सक्रिय हो जाते हैं।',
    'In a buzz session, students form small groups for a few minutes to discuss a focused prompt, encouraging even shy students to contribute actively.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण प्रविधियाँ',
    '"प्रकरण अध्ययन विधि" (Case Study Method) किस प्रकार के शिक्षण के लिए सर्वाधिक उपयोगी है?',
    'For what kind of teaching is the "Case Study Method" most useful?',
    ['किसी वास्तविक समस्या, व्यक्ति या घटना के गहन एवं सर्वांगीण विश्लेषण हेतु', 'For in-depth and holistic analysis of a real-life problem, person, or event'],
    [
      ['केवल पहाड़े याद कराने हेतु', 'Only for memorizing multiplication tables'],
      ['अक्षर पहचान सिखाने हेतु', 'For teaching alphabet recognition'],
      ['शारीरिक व्यायाम कराने हेतु', 'For conducting physical exercises'],
    ],
    'केस स्टडी विधि में किसी विशिष्ट वास्तविक स्थिति या घटना का गहराई से अध्ययन कर कारणों और संभावित समाधानों तक पहुँचा जाता है।',
    'The case study method examines a specific real-life situation in depth to uncover underlying factors and viable solutions.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 3 में "भिन्न" (Fractions) की अवधारणा प्रारंभ करने के लिए सबसे उपयुक्त शिक्षण विधि कौन-सी होगी?',
    'Which teaching approach is most appropriate to introduce the concept of "Fractions" in Class 3?',
    ['कागज मोड़कर या रोटी/सेब के बराबर टुकड़े दिखाकर मूर्त गतिविधि कराना', 'Conducting concrete activities like paper folding or dividing a roti/apple into equal parts'],
    [
      ['सीधे अंश और हर की कठिन परिभाषा लिखाना', 'Directly writing hard definitions of numerator and denominator'],
      ['भिन्नों के लघुत्तम समापवर्त्य का सूत्र देना', 'Giving the LCM formula for fractions'],
      ['केवल परीक्षा में आने वाले प्रश्न हल करवाना', 'Solving only exam-oriented sums'],
    ],
    'कागज मोड़ने या रोटी को आधा-चौथाई बांटने जैसी मूर्त गतिविधि से बच्चे "संपूर्ण के बराबर भाग" की अवधारणा को स्वतः समझ लेते हैं।',
    'Concrete activities like folding paper or sharing a roti into equal pieces help children naturally grasp fractions as equal parts of a whole.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षिका चाहती हैं कि कक्षा के सभी बच्चे "सड़क सुरक्षा नियमों" को केवल याद न करें बल्कि व्यवहार में उतारें। उन्हें किस संयोजन का उपयोग करना चाहिए?',
    'A teacher wants students not just to memorize "Road Safety Rules" but to practice them in real life. Which combination should she use?',
    ['भूमिका निर्वाह (ट्रैफिक पार्क सिमुलेशन), दृश्य पोस्टर एवं यातायात चौराहे का अवलोकन', 'Role play (traffic park simulation), visual posters, and observing a real crossing'],
    [
      ['सड़क सुरक्षा के 50 नियम कॉपी में लिखवाना', 'Making students copy 50 rules in notebooks'],
      ['केवल पुलिस अधिनियम की धाराएँ सुनाना', 'Reciting sections of the Police Act'],
      ['निबंध रटवाकर मौखिक परीक्षा लेना', 'Testing a memorized essay orally'],
    ],
    'अभिनय (सिमुलेशन) और प्रत्यक्ष अवलोकन से ज्ञान व्यवहार और आदत में बदलता है, जो केवल रटने से संभव नहीं है।',
    'Simulation/role play and real-world observation translate knowledge into lasting habits and behavior, unlike rote memorization.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण की विशेषता के संदर्भ में निम्नलिखित में से कौन-सा कथन सत्य है?',
    'Which of the following statements is true regarding the nature of Micro-teaching?',
    ['यह वास्तविक शिक्षण है, परंतु इसकी जटिलताओं को कम कर दिया जाता है', 'It is real teaching, though its complexities are scaled down'],
    [
      ['यह केवल एक काल्पनिक नाटक है जिसमें कोई शिक्षण नहीं होता', 'It is purely an imaginary drama with no teaching'],
      ['इसमें शिक्षक को कोई प्रतिपुष्टि नहीं दी जाती', 'No feedback is given to the teacher in it'],
      ['यह केवल सेवा-निवृत्त शिक्षकों के लिए है', 'It is meant only for retired teachers'],
    ],
    'एलन के अनुसार सूक्ष्म शिक्षण "वास्तविक शिक्षण" (Real teaching) है, जिसमें कक्षा का आकार, समय और कौशल संख्या कम करके जटिलता घटाई जाती है ताकि प्रशिक्षु निपुण हो सके।',
    'According to Allen, micro-teaching is real teaching in which class size, time, and skill load are scaled down to reduce complexity for effective training.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण के दौरान "दृष्टांत" (Examples) देते समय शिक्षक को किस नियम का पालन करना चाहिए?',
    'Which rule should a teacher follow while giving examples during teaching?',
    ['उदाहरण विद्यार्थियों के परिवेश व पूर्व-अनुभव से जुड़े, सरल तथा रोचक होने चाहिए', 'Examples should be simple, interesting, and connected to students’ environment and prior experience'],
    [
      ['उदाहरण विषय से कठिन और अपरिचित होने चाहिए', 'Examples should be harder and more unfamiliar than the topic'],
      ['उदाहरण केवल विदेशी संदर्भों से लिए जाने चाहिए', 'Examples should only come from foreign contexts'],
      ['एक बार में 20 असंबद्ध उदाहरण दे देने चाहिए', '20 unrelated examples should be given at once'],
    ],
    'यदि उदाहरण स्वयं ही कठिन या अपरिचित होगा, तो वह अवधारणा को स्पष्ट करने के बजाय और उलझा देगा। अतः सरल व स्थानीय परिवेश से जुड़े उदाहरण श्रेष्ठ होते हैं।',
    'If an example itself is unfamiliar or complex, it confuses rather than clarifies; simple, locally rooted examples work best.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'समूह शिक्षण एवं विचार-विमर्श',
    '"पैनल चर्चा" (Panel Discussion) में किस प्रकार की संरचना होती है?',
    'What is the structure of a "Panel Discussion"?',
    ['4 से 6 विशेषज्ञ/प्रतिभागी एक मध्यस्थ के नेतृत्व में श्रोताओं के सामने किसी विषय के विभिन्न पहलुओं पर चर्चा करते हैं', '4–6 panelists discuss different facets of a topic before an audience under a moderator'],
    [
      ['एक ही व्यक्ति दो घंटे तक लगातार भाषण देता है', 'A single person delivers a two-hour monologue'],
      ['बिना किसी विषय के सभी छात्र एक साथ चिल्लाते हैं', 'All students shout together without any topic'],
      ['केवल लिखित प्रश्नपत्र बांटे जाते हैं', 'Only written question papers are distributed'],
    ],
    'पैनल चर्चा में सीमित सदस्य अनौपचारिक किंतु क्रमबद्ध संवाद द्वारा किसी समस्या के विविध दृष्टिकोण प्रस्तुत करते हैं और अंत में श्रोता भी प्रश्न पूछते हैं।',
    'In a panel discussion, a small group of panelists exchange viewpoints on a topic under a moderator, followed by audience questions.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'संगोष्ठी एवं कार्यशाला',
    'शिक्षक प्रशिक्षण में "कार्यशाला विधि" (Workshop Method) का मुख्य बल किस पर होता है?',
    'In teacher training, what is the main emphasis of the "Workshop Method"?',
    ['व्यावहारिक कौशल सीखकर कोई ठोस शैक्षिक उत्पाद (जैसे TLM, प्रश्न-बैंक) तैयार करना', 'Learning practical skills by creating tangible outputs (such as TLMs or question banks)'],
    [
      ['केवल बैठकर बड़े विद्वानों का भाषण सुनना', 'Merely sitting and listening to scholarly speeches'],
      ['बिना किसी गतिविधि के चाय-नाश्ता करना', 'Having refreshments without any activity'],
      ['पुरानी फाइलों पर हस्ताक्षर करना', 'Signing old files'],
    ],
    'सेमिनार या संगोष्ठी जहाँ सैद्धांतिक विचार-विमर्श पर केंद्रित होती है, वहीं कार्यशाला (Workshop) में प्रतिभागी स्वयं हाथों से कार्य कर व्यावहारिक उत्पाद निर्मित करते हैं।',
    'Unlike seminars focused on theoretical discussion, workshops emphasize hands-on practice to produce concrete educational materials or plans.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'संगोष्ठी एवं कार्यशाला',
    'निम्नलिखित में से किस प्रविधि में एक मुख्य वक्ता के बजाय छोटे-छोटे शोध-पत्र (Papers) प्रस्तुत कर उन पर बौद्धिक विमर्श किया जाता है?',
    'In which of the following techniques are short papers presented and intellectually discussed?',
    ['संगोष्ठी (Seminar)', 'Seminar'],
    [
      ['क्षेत्रीय भ्रमण (Field Trip)', 'Field Trip'],
      ['निगमन अभ्यास (Deductive Drill)', 'Deductive Drill'],
      ['कठपुतली खेल (Puppetry)', 'Puppetry'],
    ],
    'संगोष्ठी (सेमिनार) में प्रतिभागी किसी विषय पर अपने आलेख/शोध-पत्र प्रस्तुत करते हैं और प्रश्नोत्तर व चर्चा के माध्यम से विषय की गहराई में जाते हैं।',
    'In a seminar, participants present papers or prepared viewpoints on a theme followed by critical academic discussion.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'आगमन विधि के सही चार सोपानों का क्रम क्या है?',
    'What is the correct sequence of the four steps of the Inductive Method?',
    ['उदाहरण प्रस्तुति → निरीक्षण → सामान्यीकरण (नियम निर्माण) → परीक्षण/सत्यापन', 'Presentation of examples → Observation → Generalization → Verification'],
    [
      ['सामान्यीकरण → उदाहरण प्रस्तुति → परीक्षण → निरीक्षण', 'Generalization → Examples → Verification → Observation'],
      ['परीक्षण → सामान्यीकरण → निरीक्षण → उदाहरण', 'Verification → Generalization → Observation → Examples'],
      ['निरीक्षण → परीक्षण → उदाहरण → सामान्यीकरण', 'Observation → Verification → Examples → Generalization'],
    ],
    'आगमन विधि में पहले विभिन्न उदाहरण दिए जाते हैं, फिर छात्र उनका निरीक्षण व तुलना करते हैं, उससे सामान्य नियम (सामान्यीकरण) बनाते हैं और अंत में अन्य उदाहरणों पर उसकी जांच करते हैं।',
    'The four steps of the inductive method are presenting examples, observing/analyzing patterns, generalizing the rule, and verifying it on new cases.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'निगमन विधि के सोपानों का सही क्रम कौन-सा है?',
    'Which is the correct sequence of steps in the Deductive Method?',
    ['नियम/सूत्र का कथन → नियम का स्पष्टीकरण → उदाहरणों पर अनुप्रयोग → अभ्यास द्वारा सत्यापन', 'Statement of rule → Explanation of rule → Application to examples → Verification through practice'],
    [
      ['उदाहरणों का संकलन → नियम की खोज → सामान्यीकरण', 'Collecting examples → Discovering rule → Generalization'],
      ['अभ्यास → निरीक्षण → अज्ञानता → सूत्र', 'Practice → Observation → Ignorance → Formula'],
      ['प्रयोग → विश्लेषण → परिकल्पना → निष्कर्ष', 'Experiment → Analysis → Hypothesis → Conclusion'],
    ],
    'निगमन विधि में पहले नियम या सिद्धांत बताया जाता है, फिर उसका अर्थ स्पष्ट कर विभिन्न उदाहरणों और अभ्यास प्रश्नों पर उसे लागू किया जाता है।',
    'The deductive method begins with stating and explaining a rule, followed by applying and verifying it across examples and practice exercises.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 5 में एक छात्र बार-बार वर्तनी की एक ही प्रकार की त्रुटि (जैसे "ि" और "ी" की मात्रा में भ्रम) कर रहा है। शिक्षक को किस दृष्टिकोण से कार्य करना चाहिए?',
    'In Class 5, a student repeatedly makes the same spelling error (confusing short "i" and long "ee" matras). Which approach should the teacher adopt?',
    ['त्रुटि के कारण की पहचान कर उच्चारण-श्रवण व मात्रा भेद का उपचारात्मक अभ्यास कराना', 'Diagnose the cause and provide remedial practice in pronunciation-listening and matra contrast'],
    [
      ['उस त्रुटि वाले शब्द को 100 बार लिखने का दंड देना', 'Punish by making them write the word 100 times'],
      ['छात्र को कक्षा में सबसे पीछे बिठा देना', 'Seat the student at the very back of the class'],
      ['छात्र की कॉपी पर लाल पेन से बड़ा क्रॉस बनाकर छोड़ देना', 'Put a big red cross on the notebook and leave it'],
    ],
    'त्रुटियाँ सीखने की प्रक्रिया का स्वाभाविक हिस्सा हैं और छात्र की सोच को दर्शाती हैं। निदानात्मक पहचान के बाद लक्षित उपचारात्मक शिक्षण से मात्रा भ्रम दूर होता है।',
    'Errors are natural windows into a learner’s thinking. Diagnosing the root cause (sound discrimination) and giving targeted remedial practice resolves the confusion.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'सामाजिक विज्ञान के एक शिक्षक किसी ऐतिहासिक घटना को पढ़ाते समय विभिन्न पात्रों के पत्र, समाचार-पत्र की कतरनें और पुराने मानचित्र कक्षा में लाते हैं। वे किस विधि/उपागम को बढ़ावा दे रहे हैं?',
    'A social science teacher brings historical letters, newspaper clippings, and old maps while teaching a historical event. Which approach is being promoted?',
    ['स्रोत विधि (Source Method)', 'Source Method'],
    [
      ['मौन वाचन विधि', 'Silent Reading Method'],
      ['अभिक्रमित अनुदेशन', 'Programmed Instruction'],
      ['हस्तलेखन अनुकरण विधि', 'Handwriting Imitation Method'],
    ],
    'ऐतिहासिक शिक्षण में प्राथमिक एवं द्वितीयक स्रोतों (अभिलेख, पत्र, सिक्के, मानचित्र) का प्रत्यक्ष उपयोग कर निष्कर्ष निकालना "स्रोत विधि" कहलाता है।',
    'Using primary and secondary historical materials like letters, clippings, coins, and maps to construct understanding is the Source Method.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कला एवं गतिविधि आधारित शिक्षण',
    'प्राथमिक स्तर पर पर्यावरण अध्ययन या भाषा में "कठपुतली (Puppetry) विधि" के उपयोग का सबसे बड़ा लाभ क्या है?',
    'What is the greatest benefit of using "Puppetry" in EVS or language at the primary level?',
    ['यह संकोची बच्चों की झिझक दूर करती है तथा सृजनात्मक अभिव्यक्ति व ध्यान केंद्रित करती है', 'It removes shyness in hesitant children and promotes creative expression and attention'],
    [
      ['इससे बच्चों को गणित के सूत्र तुरंत याद हो जाते हैं', 'It makes children memorize math formulas instantly'],
      ['इससे शिक्षक को कुछ भी बोलना नहीं पड़ता', 'The teacher does not need to speak at all'],
      ['यह केवल बड़ी कक्षाओं के लिए उपयोगी है', 'It is useful only for higher classes'],
    ],
    'कठपुतली के पीछे रहकर बोलने में संकोची बच्चे भी खुलकर संवाद करते हैं, जिससे उनकी मौखिक अभिव्यक्ति, कल्पना और विषय में रुचि बढ़ती है।',
    'Speaking through a puppet lowers anxiety in shy learners, boosting oral expression, imagination, and sustained engagement.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण प्रविधियाँ',
    '"प्रायोगिक परियोजना" (Experimental Project) तथा "सृजनात्मक परियोजना" में मुख्य अंतर क्या है?',
    'What is the main difference between an "Experimental / Problem Project" and a "Creative / Producer Project"?',
    ['समस्यात्मक/प्रायोगिक परियोजना में किसी प्रश्न का हल खोजा जाता है, जबकि सृजनात्मक में कोई वस्तु या मॉडल बनाया जाता है', 'Problem projects aim to solve a question/issue, whereas producer projects aim to create a tangible object or model'],
    [
      ['सृजनात्मक परियोजना में केवल रटा जाता है', 'Producer projects involve only rote learning'],
      ['प्रायोगिक परियोजना घर पर ही बनती है', 'Experimental projects are done only at home'],
      ['दोनों में कोई अंतर नहीं होता', 'There is no difference between the two'],
    ],
    'सृजनात्मक (Producer) प्रोजेक्ट का परिणाम एक मूर्त रचना (जैसे विद्यालय बगीचा, नाटक, मॉडल) होता है, जबकि समस्यात्मक प्रोजेक्ट किसी बौद्धिक या सामाजिक समस्या का समाधान खोजता है।',
    'A producer project results in creating a tangible artifact or performance, whereas a problem project investigates and resolves a specific intellectual or social problem.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'रूसो के प्रकृतिवाद के अनुसार प्रारंभिक बाल्यावस्था में शिक्षा का स्वरूप कैसा होना चाहिए?',
    'According to Rousseau’s Naturalism, what should be the nature of education in early childhood?',
    ['निषेधात्मक शिक्षा (पुस्तकों के बोझ से मुक्त, प्रकृति व अनुभव द्वारा सीखना)', 'Negative education (free from bookish burden, learning through nature and experience)'],
    [
      ['चार वर्ष की आयु में कठोर व्याकरण व तर्कशास्त्र रटाना', 'Forcing strict grammar and logic at age four'],
      ['बच्चे को कमरे में बंद करके अनुशासन सिखाना', 'Locking the child in a room to teach discipline'],
      ['प्रारंभिक वर्षों में केवल धार्मिक उपदेश देना', 'Giving only religious sermons in early years'],
    ],
    'रूसो ने "एमिल" (Emile) में कहा कि प्रकृति की ओर लौटो; प्रारंभिक अवस्था में बच्चे को उपदेश या किताबें रटाने के बजाय इंद्रियों, खेल और प्राकृतिक परिणामों से सीखने देना चाहिए।',
    'In "Emile", Rousseau advocated returning to nature and negative education—letting young children learn through sensory experience, play, and natural consequences rather than rote books.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'एक शिक्षक जब पाठ के बीच-बीच में छात्रों की समझ जांचने के लिए छोटे-छोटे प्रश्न पूछता है, तो यह किस उद्देश्य की पूर्ति करता है?',
    'When a teacher asks short questions intermittently during a lesson to check understanding, what purpose does it serve?',
    ['रचनात्मक प्रतिपुष्टि (Formative Feedback) प्राप्त कर शिक्षण में तुरंत सुधार करना', 'Obtaining formative feedback to adjust instruction immediately'],
    [
      ['अंतिम वार्षिक ग्रेड तय करना', 'Determining the final annual grade'],
      ['पाठ को जानबूझकर लंबा खींचना', 'Intentionally dragging out the lesson'],
      ['छात्रों की अनुपस्थिति दर्ज करना', 'Marking student attendance'],
    ],
    'शिक्षण के मध्य पूछे जाने वाले बोध-प्रश्न (Comprehension checks) शिक्षक को तुरंत संकेत देते हैं कि बच्चे विषय समझ रहे हैं या पुनः समझाने की आवश्यकता है।',
    'Embedded comprehension checks give immediate formative feedback, letting the teacher know whether to move ahead or reteach.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'श्यामपट्ट कार्य करते समय निम्नलिखित में से किस बात से बचना चाहिए?',
    'Which of the following should be avoided while doing blackboard work?',
    ['लिखते समय लगातार बोलते रहना बिना कक्षा की ओर मुड़े और बोर्ड को अनावश्यक शब्दों से भर देना', 'Speaking continuously into the board without facing the class and overcrowding the board'],
    [
      ['रंगीन चॉक से मुख्य बिंदुओं को रेखांकित करना', 'Highlighting key points with colored chalk'],
      ['बोर्ड को दो भागों में व्यवस्थित रूप से विभाजित करना', 'Dividing the board neatly into sections'],
      ['स्वच्छ एवं पठनीय अक्षर लिखना', 'Writing neat and legible letters'],
    ],
    'श्यामपट्ट पर केवल मुख्य सारांश व बिंदु संक्षेप में लिखने चाहिए (पूर्ण पैराग्राफ नहीं) और लिखते समय बोर्ड की तरफ मुँह करके लगातार नहीं बोलना चाहिए।',
    'A blackboard should show concise key points rather than full paragraphs, and the teacher should avoid talking into the board with their back turned.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"अधिगम में अवधारणा मानचित्रण" (Concept Mapping - जोसेफ नोवाक) का मुख्य उपयोग क्या है?',
    'What is the primary use of "Concept Mapping" (Joseph Novak) in learning?',
    ['विभिन्न अवधारणाओं के बीच के आपसी संबंधों को चित्रात्मक रूप में संगठित एवं स्पष्ट करना', 'Visually organizing and clarifying hierarchical relationships among concepts'],
    [
      ['केवल भूगोल के देशों की सीमाएं रटना', 'Memorizing only borders of countries'],
      ['विद्यार्थियों की चित्रकला प्रतियोगिता लेना', 'Holding a drawing competition'],
      ['शब्दों की वर्तनी शुद्ध करना', 'Correcting spelling of words'],
    ],
    'जोसेफ नोवाक द्वारा विकसित अवधारणा मानचित्र (Concept Map) आसुबेल के अर्थपूर्ण अधिगम सिद्धांत पर आधारित है, जो विचारों के बीच जुड़े हुए संबंधों को दृश्य रूप देता है।',
    'Developed by Joseph Novak based on Ausubel’s meaningful learning theory, concept maps visually depict hierarchical links among ideas.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"मूक अभिनय" (Mime / Dumb Charades) का प्रयोग भाषा कक्षा में किस कौशल के अभ्यास हेतु अत्यंत रोचक होता है?',
    'The use of "Mime" (silent acting) in a language class is very engaging for practicing which aspect?',
    ['क्रिया शब्दों (Verbs), भावों एवं शब्द-भंडार की अर्थपूर्ण पहचान', 'Meaningful identification of action verbs, emotions, and vocabulary'],
    [
      ['केवल विराम चिह्नों के नियम रटने में', 'Memorizing punctuation rules'],
      ['श्रुतलेख की गति बढ़ाने में', 'Increasing dictation speed'],
      ['व्याकरण के संधि-विच्छेद में', 'Learning sandhi splitting'],
    ],
    'बिना बोले केवल हाव-भाव व क्रिया के अभिनय से साथी छात्र सही शब्द या वाक्य का अनुमान लगाते हैं, जिससे क्रिया शब्दों और भावों की गहरी समझ बनती है।',
    'Acting out actions and emotions silently lets peers guess words or sentences, reinforcing verbs and vocabulary meaningfully.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अधिगम वातावरण',
    'कक्षा में "लोकतांत्रिक शिक्षण शैली" की पहचान किस व्यवहार से होती है?',
    'Which behavior characterizes a "Democratic Teaching Style" in the classroom?',
    ['शिक्षक छात्रों के विचारों का सम्मान करता है, प्रश्न पूछने की स्वतंत्रता देता है और निर्णय में सहभागी बनाता है', 'The teacher respects students’ views, allows freedom to question, and involves them in decisions'],
    [
      ['शिक्षक किसी को बोलने नहीं देता और केवल आदेश देता है', 'The teacher forbids speaking and only issues orders'],
      ['शिक्षक कक्षा पर बिल्कुल ध्यान नहीं देता और छात्र मनमानी करते हैं', 'The teacher ignores the class and lets chaos prevail'],
      ['केवल मॉनिटर के माध्यम से दंड दिलवाया जाता है', 'Punishments are given solely through a monitor'],
    ],
    'लोकतांत्रिक (प्रजातांत्रिक) शिक्षण शैली (राल्फ लिपिट व लेविन के वर्गीकरण में) में अनुशासन और स्वतंत्रता का संतुलन रहता है, जिससे रचनात्मकता व सहयोग बढ़ता है।',
    'In a democratic teaching style, balance between guidance and student voice fosters mutual respect, inquiry, and collaboration (unlike authoritarian or laissez-faire styles).',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'अधिगम वातावरण',
    'निरंकुश (Authoritarian) और हस्तक्षेप-रहित (Laissez-faire) शिक्षण शैलियों की तुलना में लोकतांत्रिक शिक्षण क्यों श्रेष्ठ है?',
    'Why is democratic teaching superior to authoritarian and laissez-faire teaching styles?',
    ['निरंकुश भय पैदा करता है व हस्तक्षेप-रहित दिशाहीनता, जबकि लोकतांत्रिक उत्तरदायी स्वतंत्रता देता है', 'Authoritarianism breeds fear and laissez-faire breeds aimlessness, whereas democracy fosters responsible freedom'],
    [
      ['लोकतांत्रिक शिक्षण में पाठ्यक्रम पढ़ाना नहीं पड़ता', 'No syllabus needs to be taught in democratic teaching'],
      ['निरंकुश शिक्षण में बच्चे बहुत खुश रहते हैं', 'Children are happiest under authoritarianism'],
      ['हस्तक्षेप-रहित शैली में सर्वाधिक अनुशासन रहता है', 'Laissez-faire has the highest discipline'],
    ],
    'कर्ट लेविन के नेतृत्व अध्ययन के अनुसार, लोकतांत्रिक वातावरण में बच्चों की आंतरिक प्रेरणा, कार्य-गुणवत्ता और सामाजिक सौहार्द सर्वाधिक उच्च रहता है।',
    'As shown in Kurt Lewin’s leadership studies, democratic classrooms achieve the highest intrinsic motivation, quality of work, and social harmony.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पुनः शिक्षण" (Re-teach) का मुख्य उद्देश्य क्या होता है?',
    'What is the main objective of "Re-teach" in Micro-teaching?',
    ['प्रतिपुष्टि के बाद संशोधित पाठ योजना के अनुसार कौशल को बेहतर ढंग से पुनः प्रदर्शित करना', 'Demonstrating the skill with improved execution based on feedback and re-planning'],
    [
      ['उसी गलती को दोबारा दोहराना', 'Repeating the exact same mistake'],
      ['छात्रों की उपस्थिति दोबारा लेना', 'Taking attendance again'],
      ['नया विषय बदलकर पढ़ाना', 'Switching to a completely new subject'],
    ],
    'पुनः शिक्षण में छात्राध्यापक सहपाठियों/पर्यवेक्षक से मिले सुझावों को व्यवहार में उतारकर अपनी कमियों को दूर करने का प्रत्यक्ष अभ्यास करता है।',
    'During re-teaching, the trainee applies the feedback incorporated in the re-plan to correct earlier weaknesses and refine skill mastery.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'यदि किसी पाठ के बीच में छात्र प्रश्न का उत्तर नहीं दे पा रहे हैं, तो "अनुशीलन कौशल" के किस घटक का उपयोग कर शिक्षक उनकी मदद कर सकता है?',
    'If students fail to answer a question mid-lesson, which component of "Probing Skill" can help them?',
    ['संकेत देना (Prompting)', 'Prompting'],
    [
      ['पाठ बंद करना (Stopping)', 'Stopping'],
      ['निंदा करना (Scolding)', 'Scolding'],
      ['विषय से हटना (Diverting)', 'Diverting'],
    ],
    'संकेत देने (Prompting) में शिक्षक उत्तर सीधे न बताकर छोटा-सा सुराग या सहायक प्रश्न देता है, जिससे छात्र स्वयं उत्तर खोजने में समर्थ हो जाता है।',
    'In prompting, the teacher provides a gentle clue or simpler sub-question instead of giving away the answer, enabling the student to figure it out.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'व्याख्यान देते समय "अनावश्यक शाब्दिक बाधक" (जैसे बार-बार "अच्छा तो", "मतलब", "हाँ जी" बोलना) से क्या हानि होती है?',
    'What harm is caused by "verbal mannerisms / fillers" (like repeatedly saying "actually", "meaning", "you see") during lecturing?',
    ['विद्यार्थियों का ध्यान विषय से भटकता है और व्याख्यान की प्रभावशीलता घटती है', 'Students’ attention gets distracted from the content and explanation effectiveness drops'],
    [
      ['छात्रों की शब्दावली बहुत समृद्ध होती है', 'Students’ vocabulary becomes very rich'],
      ['ब्लैकबोर्ड लेखन तेज हो जाता है', 'Blackboard writing becomes faster'],
      ['कक्षा का शोर तुरंत समाप्त होता है', 'Classroom noise stops immediately'],
    ],
    'व्याख्यान कौशल में निरंतर प्रवाह और स्पष्टता आवश्यक है; बार-बार दोहराए जाने वाले तकियाकलाम (Vague words/mannerisms) श्रोताओं को विचलित करते हैं।',
    'Clarity and fluency are essential in explaining; repetitive filler phrases distract learners and reduce instructional impact.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"स्टेशन रोटेशन" (Station Rotation) या "लर्निंग कॉर्नर" विधि प्राथमिक कक्षा में क्यों अपनाई जाती है?',
    'Why is the "Station Rotation" or "Learning Corners" method adopted in primary classrooms?',
    ['ताकि छोटे समूहों में बच्चे बारी-बारी से अलग-अलग गतिविधियों (पठन, गणित, कला) का अनुभव कर सकें', 'So children in small groups can rotate through varied activities (reading, math, art)'],
    [
      ['ताकि बच्चों को रेलवे स्टेशन की टिकट काटना आ जाए', 'So children learn to cut railway station tickets'],
      ['ताकि शिक्षक पूरे दिन अपनी मेज पर सो सकें', 'So the teacher can sleep at the desk all day'],
      ['ताकि बच्चे एक-दूसरे से बिल्कुल बात न करें', 'So children do not talk to each other at all'],
    ],
    'लर्निंग कॉर्नर या स्टेशन रोटेशन में कक्षा के अलग-अलग कोनों में पठन कोना, गणित कोना, खिलौना कोना आदि बनाकर छोटे समूहों को सक्रिय व स्वायत्त अधिगम कराया जाता है।',
    'Learning corners or station rotation allow small groups to engage actively and autonomously across dedicated reading, math, and art stations.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'शिक्षक द्वारा किसी छात्र को किसी समस्या के समाधान हेतु "मचान/पाड़" (Scaffolding) देने का सबसे सटीक उदाहरण क्या है?',
    'What is the most accurate example of a teacher providing "Scaffolding" to a student solving a problem?',
    ['प्रारंभ में आवश्यकतानुसार संकेत व सहारा देना और छात्र के सक्षम होने पर धीरे-धीरे सहारा हटा लेना', 'Providing temporary hints and support initially and gradually fading support as the learner gains competence'],
    [
      ['छात्र की जगह पूरी परीक्षा का पेपर स्वयं लिख देना', 'Writing the entire exam paper for the student'],
      ['छात्र को किसी भी प्रकार की मदद देने से साफ मना कर देना', 'Refusing any help whatsoever'],
      ['कमरे में बांस का मचान बनवाना', 'Building a bamboo scaffold in the room'],
    ],
    'वाइगोत्स्की के सिद्धांत से जुड़े "स्कैफोल्डिंग" (वुड, ब्रूनर व रॉस) का अर्थ अस्थायी सहायता देना है जो सीखने के साथ कम होती जाती है, ताकि बच्चा आत्मनिर्भर बने।',
    'Scaffolding (linked to Vygotsky; coined by Wood, Bruner & Ross) is temporary, adjustable assistance that fades as the learner becomes independent.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'अन्वेषण एवं परियोजना आधारित शिक्षण में शिक्षक को अपनी भूमिका किस प्रकार बदलनी होती है?',
    'In inquiry and project-based teaching, how must the teacher transform their role?',
    ['"मंच पर ज्ञानदाता" (Sage on the Stage) से "साथ चलने वाले मार्गदर्शक" (Guide on the Side) के रूप में', 'From "Sage on the Stage" to "Guide on the Side"'],
    [
      ['"मार्गदर्शक" से "कठोर परीक्षक" के रूप में', 'From "Guide" to "Strict Examiner"'],
      ['"शिक्षक" से "प्रशासक" के रूप में', 'From "Teacher" to "Administrator"'],
      ['"सुगमकर्ता" से "व्याख्याता" के रूप में', 'From "Facilitator" to "Lecturer"'],
    ],
    'आधुनिक बाल-केंद्रित शिक्षण में शिक्षक ज्ञान का एकमात्र स्रोत न रहकर अधिगम परिस्थितियों का निर्माता और सहयोगी मार्गदर्शक होता है।',
    'In modern learner-centered pedagogy, the teacher shifts from being the sole transmitter of facts to a facilitator guiding student inquiry.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'प्राथमिक कक्षा में "द्विभाषी विधि" (Bilingual Method - सी.जे. डॉडसन) का प्रयोग कब किया जाता है?',
    'When is the "Bilingual Method" (C.J. Dodson) used in primary classes?',
    ['जब द्वितीय भाषा सिखाते समय केवल कठिन शब्दों के अर्थ स्पष्ट करने हेतु मातृभाषा का सीमित उपयोग किया जाए', 'When teaching a second language using the mother tongue sparingly only to clarify difficult meanings'],
    [
      ['जब हर वाक्य का शब्दशः अनुवाद किया जाए', 'When every sentence is translated word-for-word'],
      ['जब मातृभाषा बोलने पर जुर्माना लगाया जाए', 'When speaking the mother tongue is fined'],
      ['जब एक साथ चार विदेशी भाषाएँ रटाई जाएँ', 'When four foreign languages are crammed at once'],
    ],
    'सी.जे. डॉडसन की द्विभाषी विधि प्रत्यक्ष विधि और व्याकरण-अनुवाद विधि का मध्यम मार्ग है: इसमें शिक्षक जरूरत पड़ने पर मातृभाषा में अर्थ बताता है, पर अभ्यास लक्ष्य भाषा में ही कराता है।',
    'C.J. Dodson’s Bilingual Method bridges Direct and Grammar-Translation methods: the teacher uses the mother tongue briefly for meaning while keeping practice in the target language.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    '"ह्यूरिस्टिक" और "प्रयोगशाला" विधि दोनों में क्या समानता है?',
    'What is common between both the "Heuristic" and "Laboratory" methods?',
    ['दोनों में छात्र प्रत्यक्ष प्रयोग व अवलोकन द्वारा सीखते हैं, न कि केवल सुनकर', 'In both, students learn through direct experimentation and observation rather than passive listening'],
    [
      ['दोनों में किसी उपकरण की आवश्यकता नहीं होती', 'Neither requires any apparatus'],
      ['दोनों केवल कविता शिक्षण के लिए हैं', 'Both are exclusively for poetry teaching'],
      ['दोनों में शिक्षक सारा काम स्वयं करता है', 'In both, the teacher does all the work'],
    ],
    'दोनों वैज्ञानिक दृष्टिकोण और क्रियाशीलता पर आधारित हैं, यद्यपि ह्यूरिस्टिक में पूरी समस्या की खोज स्वतः करनी होती है जबकि प्रयोगशाला में निर्देशित प्रयोग भी शामिल होते हैं।',
    'Both emphasize scientific inquiry and hands-on experimentation, though heuristic demands fuller independent discovery while lab work may include guided experiments.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 2 की शिक्षिका ने बच्चों को पत्तियों, कंकड़ों और तीलियों से गिनती करने और पैटर्न बनाने को कहा। यह किस विधि के सर्वाधिक निकट है?',
    'A Class 2 teacher asked children to count and create patterns using leaves, pebbles, and sticks. This is closest to which approach?',
    ['मूर्त एवं स्थानीय संसाधन आधारित गतिविधि विधि', 'Concrete and local-resource-based activity method'],
    [
      ['अमूर्त निगमन विधि', 'Abstract deductive method'],
      ['व्याख्यान एवं श्रुतलेख विधि', 'Lecture and dictation method'],
      ['कंप्यूटर अभिक्रमित विधि', 'Computer programmed method'],
    ],
    'कम लागत या शून्य लागत (Zero-cost TLM) की स्थानीय वस्तुओं से बच्चे स्पर्श और अवलोकन द्वारा गणितीय पैटर्न व संख्या ज्ञान आसानी से सीखते हैं।',
    'Using zero-cost local manipulatives helps children learn counting and patterns naturally through touch and visual observation.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'किसी विषय पर वाद-विवाद (Debate) प्रतियोगिता आयोजित करने से छात्रों में किस कौशल का विकास होता है?',
    'Organizing a Debate on a topic develops which skills in students?',
    ['तार्किक अभिव्यक्ति, प्रमाण सहित पक्ष रखना, सक्रिय श्रवण एवं समालोचनात्मक चिंतन', 'Logical expression, evidence-based argumentation, active listening, and critical thinking'],
    [
      ['केवल विरोधियों पर चिल्लाना', 'Merely shouting at opponents'],
      ['विषय को बिना समझे रटना', 'Memorizing without understanding'],
      ['एकांत में चुप बैठना', 'Sitting silently in isolation'],
    ],
    'वाद-विवाद विद्यार्थियों को किसी मुद्दे के पक्ष व विपक्ष दोनों को समझने, तर्क गढ़ने और मर्यादित भाषा में अपनी बात रखने का प्रशिक्षण देता है।',
    'Debating trains students to examine multiple perspectives, construct evidence-based arguments, listen carefully, and speak persuasively.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'अभिक्रमित अनुदेशन (Programmed Instruction) के पाँच प्रमुख सिद्धांतों में निम्नलिखित में से कौन-सा शामिल है?',
    'Which of the following is included among the five core principles of Programmed Instruction?',
    ['लघु पदों का सिद्धांत, सक्रिय अनुक्रिया, तत्काल प्रतिपुष्टि, स्व-गति एवं स्व-परीक्षण', 'Small steps, active responding, immediate feedback, self-pacing, and student testing'],
    [
      ['कठोर दंड, विलंबित परिणाम और सामूहिक रटंत', 'Strict punishment, delayed results, and group cramming'],
      ['बिना प्रश्न के लंबे व्याख्यान', 'Long lectures without questions'],
      ['केवल शिक्षक की गति से चलना', 'Moving solely at the teacher’s pace'],
    ],
    'अभिक्रमित अनुदेशन छोटे-छोटे फ्रेम्स में सामग्री प्रस्तुत कर विद्यार्थी से तुरंत प्रतिक्रिया लेता है और तत्काल सही उत्तर दिखाकर स्व-गति से सीखने का अवसर देता है।',
    'Programmed instruction breaks content into small frames, requires active responses, provides immediate confirmation, and lets learners self-pace.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पर्यवेक्षक" (Supervisor) या सहपाठी मूल्यांकन हेतु किस उपकरण का उपयोग करते हैं?',
    'Which tool do the supervisor or peers use for observation and evaluation in Micro-teaching?',
    ['निरीक्षण अनुसूची एवं निर्धारण मापनी (Observation Schedule & Rating Scale)', 'Observation Schedule and Rating Scale'],
    [
      ['थर्मामीटर और बैरोमीटर', 'Thermometer and Barometer'],
      ['केवल मौखिक अनुमान बिना किसी रिकॉर्ड के', 'Only oral guessing without any record'],
      ['अंतिम वार्षिक बोर्ड परिणाम', 'Final annual board results'],
    ],
    'पर्यवेक्षक शिक्षण कौशल के विशिष्ट घटकों की आवृत्ति व गुणवत्ता को निरीक्षण अनुसूची (टैली शीट) एवं निर्धारण मापनी पर अंकित कर सटीक प्रतिपुष्टि देते हैं।',
    'Observers record the frequency and quality of specific skill components on an observation schedule or rating scale to give objective feedback.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना प्राथमिक की किस अवस्था के लिए अधिक उपयुक्त मानी जाती है?',
    'For which stage of schooling is the Dalton Plan considered more suitable?',
    ['उच्च प्राथमिक व माध्यमिक स्तर (लगभग 8-9 वर्ष से ऊपर, जब बच्चा स्वतंत्र अध्ययन कर सके)', 'Upper primary and secondary stages (above ~8–9 years, when learners can study independently)'],
    [
      ['नर्सरी और 3 वर्ष के बच्चों के लिए', 'For nursery and 3-year-old children'],
      ['नवजात शिशुओं के लिए', 'For newborn infants'],
      ['केवल निरक्षर वयस्कों के लिए', 'Only for non-literate adults'],
    ],
    'डाल्टन योजना में लिखित ठेकों (Assignments) को स्वयं पढ़कर हल करने की क्षमता आवश्यक होती है, अतः यह 8-9 वर्ष से अधिक आयु के विद्यार्थियों के लिए उपयुक्त है।',
    'Because the Dalton Plan requires reading and completing written contracts independently, it suits learners aged around 8–9 years and above.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    '"टॉय-आधारित शिक्षणशास्त्र" (Toy-Based Pedagogy), जिसे NEP 2020 में भी प्रोत्साहित किया गया है, का मूल विचार क्या है?',
    'What is the core idea of "Toy-Based Pedagogy", also encouraged under NEP 2020?',
    ['खिलौनों व पहेलियों के निर्माण व प्रयोग से विज्ञान, गणित और भाषा की अवधारणाओं को रोचक बनाना', 'Using and making toys/puzzles to make science, math, and language concepts engaging'],
    [
      ['विद्यालय को खिलौनों की दुकान में बदलकर बेचना', 'Turning the school into a toy shop for selling'],
      ['बच्चों से खिलौने छीनकर केवल किताबें देना', 'Taking away toys and giving only books'],
      ['खिलौनों को केवल सजावट के लिए अलमारी में बंद रखना', 'Locking toys in a showcase merely for decoration'],
    ],
    'स्थानीय पारंपरिक खिलौने (जैसे लट्टू, कठपुतली, लकड़ी के ब्लॉक) बच्चों को घूर्णन गति, संतुलन, मापन, कहानी निर्माण और संस्कृति से सहजता से जोड़ते हैं।',
    'Indigenous toys (spinning tops, puppets, wooden blocks) naturally teach concepts like rotation, balance, measurement, storytelling, and cultural heritage.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उद्दीपन परिवर्तन" (Stimulus Variation) के अंतर्गत "अंतःक्रिया शैली में परिवर्तन" (Change in Interaction Style) से क्या आशय है?',
    'Under "Stimulus Variation", what is meant by "Change in Interaction Style"?',
    ['शिक्षक-कक्षा संवाद से बदलकर शिक्षक-छात्र तथा छात्र-छात्र (समूह/जोड़ी) संवाद अपनाना', 'Shifting from teacher–class interaction to teacher–student and student–student interaction'],
    [
      ['कक्षा के बीच में अपनी मातृभाषा से विदेशी भाषा में चले जाना', 'Switching abruptly to an unknown foreign language'],
      ['छात्रों की सीटें रोज तोड़ देना', 'Breaking student seats daily'],
      ['एक दिन पढ़ाना और दूसरे दिन छुट्टी रखना', 'Teaching one day and taking leave the next'],
    ],
    'कभी पूरी कक्षा को संबोधित करना, कभी किसी एक छात्र से संवाद करना और कभी दो छात्रों के बीच चर्चा कराना—ये अंतःक्रिया शैली में बदलाव लाकर नीरसता मिटाते हैं।',
    'Alternating between teacher–whole class, teacher–individual, and student–student interaction keeps classroom energy dynamic and prevents monotony.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'पाठ पढ़ाते समय यदि शिक्षक हाथ में लिए गए मॉडल या चार्ट को केवल तब दिखाता है जब उसकी चर्चा हो रही हो, और बाद में अलग रख देता है, तो यह क्या दर्शाता है?',
    'While teaching, if a teacher displays a model or chart only when discussing it and puts it aside afterward, what does this show?',
    ['श्रव्य-दृश्य सामग्री के प्रयोग में कौशल एवं ध्यान-विकर्षण से बचाव', 'Skillful use of audio-visual aids and avoiding distraction'],
    [
      ['शिक्षक की कंजूसी', 'Teacher’s miserliness'],
      ['चार्ट के प्रति लापरवाही', 'Carelessness toward the chart'],
      ['श्यामपट्ट कौशल का उल्लंघन', 'Violation of blackboard skill'],
    ],
    'यदि चार्ट या मॉडल पूरे समय सामने लटका रहे तो बच्चे पाठ से भटककर उसी को देखते रहते हैं। आवश्यकता के समय प्रस्तुत कर बाद में हटाना शिक्षण सामग्री के सही प्रबंधन को दर्शाता है।',
    'Leaving an aid exposed when no longer needed distracts students; displaying it at the exact relevant moment and putting it away reflects sound TLM management.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    'निम्नलिखित में से कौन-सी स्थिति विद्यार्थियों में "आलोचनात्मक चिंतन" (Critical Thinking) को सर्वाधिक बढ़ावा देगी?',
    'Which of the following situations will promote "Critical Thinking" in students the most?',
    ['"प्लास्टिक प्रतिबंध के लाभ और इसके व्यावहारिक विकल्पों पर अपने तर्क प्रस्तुत कीजिए"', '"Present your arguments on the benefits of a plastic ban and its practical alternatives"'],
    [
      ['"प्लास्टिक का आविष्कार किस वर्ष हुआ?"', '"In which year was plastic invented?"'],
      ['"पाठ्यपुस्तक के पृष्ठ 14 का अनुच्छेद पढ़कर सुनाओ"', '"Read aloud the paragraph on page 14 of the textbook"'],
      ['"प्लास्टिक की स्पेलिंग पांच बार लिखो"', '"Write the spelling of plastic five times"'],
    ],
    'आलोचनात्मक चिंतन में किसी विषय के पक्ष-विपक्ष, प्रमाण, परिणाम और वैकल्पिक समाधानों का तार्किक विश्लेषण करना शामिल होता है।',
    'Critical thinking involves analyzing pros and cons, weighing evidence, evaluating consequences, and proposing reasoned alternatives.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में "त्रुटि-नियंत्रण" (Control of Error) की विशेषता किसमें निहित होती है?',
    'In the Montessori method, where does the feature of "Control of Error" reside?',
    ['स्वयं शिक्षण उपकरणों (Didactic Apparatus) की बनावट में, जिससे बच्चा अपनी गलती खुद देख लेता है', 'In the design of the didactic apparatus itself, allowing the child to spot their own mistake'],
    [
      ['शिक्षक की लाल स्याही वाली कलम में', 'In the teacher’s red-ink pen'],
      ['प्रधानाचार्य के दंड रजिस्टर में', 'In the principal’s punishment register'],
      ['माता-पिता की डांट में', 'In parents’ scolding'],
    ],
    'जैसे बेलनाकार गुटके (Cylinder Blocks) केवल अपने निश्चित आकार के खांचे में ही फिट होते हैं—यदि गलत खांचे में डाला जाए तो वह बाहर निकला रहता है या ढीला रहता है; इस प्रकार बच्चा बिना शिक्षक के टोके स्वयं सुधार करता है।',
    'For example, Montessori cylinder blocks fit only in their matching sockets; a mismatch visually shows the error, allowing immediate self-correction without adult reprimand.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'सुकरात एवं संवाद विधि',
    'सुकराती विधि (Socratic Method) में शिक्षक ज्ञान को किस प्रकार प्रकट करता है?',
    'In the Socratic Method, how does the teacher bring out knowledge?',
    ['विरोधाभास उजागर करने वाले तार्किक प्रश्नों के माध्यम से विद्यार्थी के भीतर छिपे बोध को बाहर लाकर', 'By drawing out latent understanding through logical questions that expose contradictions'],
    [
      ['नोट्स की फोटोकॉपी बांटकर', 'By distributing photocopies of notes'],
      ['श्यामपट्ट पर 10 पेज लिखवाकर', 'By making students copy 10 pages from the board'],
      ['बिना सवाल किए सीधे उत्तर बताकर', 'By giving direct answers without any questions'],
    ],
    'सुकरात ने अपनी विधि को "बौद्धिक प्रसूति-विद्या" (Maieutics) कहा—अर्थात् प्रश्नोत्तर द्वारा विद्यार्थी के मन से सत्य विचार को जन्म दिलाना।',
    'Socrates called his approach "intellectual midwifery" (maieutics)—helping learners give birth to truth through probing dialogue.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक प्राथमिक शिक्षिका कक्षा में नई कहानी शुरू करने से पहले किताब का मुखपृष्ठ (Cover Page) दिखाकर बच्चों से पूछती है— "इस चित्र को देखकर बताओ कहानी किस बारे में हो सकती है?"। वह किस प्रविधि का उपयोग कर रही हैं?',
    'Before starting a new story, a primary teacher shows the book cover and asks, "Looking at this picture, what might the story be about?" Which technique is she using?',
    ['अनुमान लगाना (Prediction) एवं पूर्व-पठन सक्रियण', 'Prediction and pre-reading activation'],
    [
      ['श्रुतलेख मूल्यांकन', 'Dictation evaluation'],
      ['व्याकरण विश्लेषण', 'Grammar analysis'],
      ['निगमन परीक्षण', 'Deductive testing'],
    ],
    'मुखपृष्ठ और शीर्षक से कहानी का अनुमान लगाना (Prediction) पठन के प्रति जिज्ञासा जगाता है, कल्पना बढ़ाता है और पठन बोध को गहरा करता है।',
    'Predicting story content from the cover and title activates prior schema, sparks curiosity, and deepens reading comprehension.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'जब कक्षा में कुछ छात्र बहुत शर्मीले हों और पूरे समूह के सामने बोलने से डरते हों, तो उन्हें बोलने के लिए प्रेरित करने का सर्वोत्तम उपाय क्या है?',
    'When some students in class are very shy and afraid to speak before the whole group, what is the best way to encourage them?',
    ['पहले उन्हें एक साथी (जोड़ी) या 3-4 मित्रों के छोटे समूह में बोलने के सुरक्षित अवसर देना', 'First giving them safe opportunities to speak in pairs or small groups of 3–4 peers'],
    [
      ['उन्हें मंच पर खड़ा करके माइक दे देना और न बोलने पर डांटना', 'Putting them on stage with a mic and scolding if silent'],
      ['उनसे कभी कोई प्रश्न न पूछना', 'Never asking them any questions'],
      ['उन्हें कक्षा के कोने में अलग बिठा देना', 'Seating them separately in a corner'],
    ],
    'छोटे समूह या जोड़ी में बोलने से सामाजिक भय कम होता है; धीरे-धीरे आत्मविश्वास बढ़ने पर वे पूरी कक्षा के समक्ष भी बोलने लगते हैं।',
    'Speaking in pairs or small groups lowers social anxiety; as confidence builds, shy learners gradually become comfortable speaking to the whole class.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'प्रभावी व्याख्या के लिए "पुनरावृत्ति एवं सारांश" (Repetition & Summarizing) का उपयोग किसलिए किया जाता है?',
    'Why are "Repetition and Summarizing" used for effective explanation?',
    ['मुख्य संकल्पनाओं को सुदृढ़ करने और अल्पकालिक स्मृति से दीर्घकालिक स्मृति में ले जाने हेतु', 'To reinforce key concepts and transfer learning from short-term to long-term memory'],
    [
      ['कक्षा का समय व्यर्थ करने हेतु', 'To waste class time'],
      ['बच्चों को चिढ़ाने हेतु', 'To irritate children'],
      ['केवल कॉपियाँ भरवाने हेतु', 'Only to fill up notebooks'],
    ],
    'महत्वपूर्ण बिंदुओं को अलग शब्दों या उदाहरणों में दोहराने और अंत में संक्षिप्त सार देने से धारण-शक्ति (Retention) मजबूत होती है।',
    'Restating key ideas in varied ways and summarizing at the end strengthens retention and conceptual clarity.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'संकलनात्मक एवं सहयोगात्मक विधियाँ',
    '"रोटेशनल पियर एडिटिंग" या सहपाठी समीक्षा (Peer Review) लेखन शिक्षण में किस प्रकार सहायक है?',
    'How is "Peer Review" helpful in teaching writing?',
    ['छात्र एक-दूसरे के लेख पढ़कर रचनात्मक सुझाव देते हैं जिससे दोनों के लेखन व आलोचनात्मक कौशल सुधरते हैं', 'Students read each other’s drafts and give constructive feedback, improving both writing and critical skills'],
    [
      ['छात्र एक-दूसरे की कॉपी फाड़ देते हैं', 'Students tear each other’s notebooks'],
      ['शिक्षक को बिल्कुल काम नहीं करना पड़ता और त्रुटियाँ बनी रहती हैं', 'Teachers do zero work and errors remain unchecked'],
      ['केवल सुंदर हस्तलेख पर अंक मिलते हैं', 'Marks are given only for neat handwriting'],
    ],
    'सरल चेकलिस्ट के आधार पर सहपाठी की रचना पढ़ने से बच्चे स्वयं की गलतियों के प्रति भी सजग होते हैं और सहयोग से लेखन परिष्कृत होता है।',
    'Reviewing a peer’s draft using a simple checklist makes learners aware of writing mechanics and improves revision collaboratively.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन विधि',
    'कक्षा 6 में संज्ञा, सर्वनाम या गणितीय नियम को उदाहरणों द्वारा निकालने के बाद यदि कुछ छात्र नियम को शब्दों में व्यक्त न कर पाएँ, तो शिक्षक को क्या करना चाहिए?',
    'In Class 6, after deriving a rule through examples, if some students struggle to verbalize the rule, what should the teacher do?',
    ['सहायक प्रश्नों के माध्यम से उनके विचारों को व्यवस्थित कर सही शब्दावली बनाने में मदद करना', 'Use guiding questions to help them organize their observations into clear wording'],
    [
      ['कहना कि आगमन विधि बेकार है और सीधे रटने को बोलना', 'Declare the inductive method useless and order rote memorization'],
      ['उन छात्रों को फेल घोषित कर देना', 'Declare those students failed'],
      ['बिना नियम स्पष्ट किए पाठ समाप्त मान लेना', 'Consider the lesson over without clarifying the rule'],
    ],
    'विद्यार्थी कई बार पैटर्न समझ लेते हैं पर उसे औपचारिक भाषा में ढालने में कठिनाई महसूस करते हैं; यहाँ शिक्षक का सहारा उन्हें सटीक सामान्यीकरण तक पहुँचाता है।',
    'Learners often grasp a pattern before being able to articulate it formally; teacher scaffolding helps bridge intuition to precise formulation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं गतिविधि विधि',
    'ईवीएस में "जल संरक्षण" पर प्रोजेक्ट बनाते समय किस प्रकार की गतिविधि सबसे सार्थक होगी?',
    'While doing a project on "Water Conservation" in EVS, which activity would be most meaningful?',
    ['विद्यालय व घर के नलों के रिसाव की जांच कर बर्बाद होने वाले पानी को मापना और समाधान लागू करना', 'Auditing leaking taps at school/home, measuring wasted water, and implementing fixes'],
    [
      ['इंटरनेट से जल संरक्षण का एक चित्र प्रिंट करके चिपकाना', 'Printing and pasting a picture from the internet'],
      ['केवल "जल ही जीवन है" नारे को 10 बार लिखना', 'Writing the slogan "Water is life" 10 times'],
      ['बाजार से बना-बनाया थर्मोकोल मॉडल खरीद लाना', 'Buying a ready-made thermocol model from the market'],
    ],
    'सच्चा प्रोजेक्ट वास्तविक समस्या के मापन, विश्लेषण और व्यावहारिक कार्रवाई (Action) से जुड़ा होता है, न कि बाजार से खरीदे सजावटी मॉडल से।',
    'An authentic project involves real investigation, measurement, and practical action rather than purchasing decorative models.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'निम्नलिखित में से कौन-सा गुण ह्यूरिस्टिक विधि द्वारा विकसित नहीं होता?',
    'Which of the following qualities is NOT developed by the Heuristic Method?',
    ['बिना सोचे-समझे दूसरों की बात आंख बंद करके मान लेने की प्रवृत्ति', 'Tendency to blindly accept others’ statements without questioning'],
    [
      ['वैज्ञानिक दृष्टिकोण एवं तर्कशक्ति', 'Scientific temper and reasoning'],
      ['आत्मनिर्भरता एवं आत्मविश्वास', 'Self-reliance and self-confidence'],
      ['सूक्ष्म अवलोकन क्षमता', 'Keen observation ability'],
    ],
    'ह्यूरिस्टिक विधि प्रत्यक्ष प्रमाण, प्रयोग और स्वयं की खोज पर आधारित है, अतः यह अंधानुकरण को समाप्त कर स्वतंत्र चिंतन विकसित करती है।',
    'The heuristic method relies on evidence, experimentation, and self-discovery, eliminating blind acceptance and fostering independent thinking.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    '"बंद सिरे वाले" (Closed-ended) प्रश्नों का मुख्य उपयोग किस स्थिति में उचित होता है?',
    'In which situation is the use of "Closed-ended" questions mainly appropriate?',
    ['तथ्यात्मक स्मरण, त्वरित पुनरावृत्ति एवं बुनियादी ज्ञान की जांच के समय', 'During factual recall, quick revision, and checking basic knowledge'],
    [
      ['सृजनात्मक कल्पना विकसित करने के समय', 'When developing creative imagination'],
      ['नैतिक दुविधाओं पर चर्चा करते समय', 'When discussing moral dilemmas'],
      ['विभिन्न समाधानों की तुलना करते समय', 'When comparing multiple solutions'],
    ],
    'तथ्यों, तिथियों, सूत्रों या शब्दावली की त्वरित जांच के लिए बंद सिरे वाले (अभिसारी) प्रश्न उपयोगी होते हैं, जबकि चिंतन विस्तार के लिए खुले प्रश्न चाहिए।',
    'Closed-ended (convergent) questions are useful for quick checks of facts, dates, and definitions, while open-ended questions foster deeper thinking.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "प्रश्नों की प्रवाहिता" (Fluency in Questioning) कौशल से क्या तात्पर्य है?',
    'In Micro-teaching, what is meant by the skill of "Fluency in Questioning"?',
    ['निर्धारित समय में स्पष्ट, व्याकरण-शुद्ध, संक्षिप्त एवं सार्थक प्रश्नों को सहज गति से पूछना', 'Asking clear, grammatically correct, concise, and meaningful questions at a smooth pace'],
    [
      ['बिना सांस लिए लगातार बेमतलब प्रश्न दागते रहना', 'Firing irrelevant questions non-stop without pause'],
      ['केवल एक ही प्रश्न को पांच बार दोहराना', 'Repeating the exact same question five times'],
      ['अत्यंत कठिन शब्दों में पहेलियाँ पूछना', 'Asking riddles in overly complex words'],
    ],
    'प्रश्नों की प्रवाहिता का अर्थ मात्रा के साथ-साथ गुणवत्ता (स्पष्टता, संक्षिप्तता, प्रासंगिकता और उचित गति) से है।',
    'Fluency in questioning combines appropriate pacing with clarity, conciseness, grammatical accuracy, and relevance to the topic.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा 4 के बच्चों को "ज्वालामुखी" पढ़ाना चाहता है, पर आसपास कोई वास्तविक ज्वालामुखी नहीं है। किस विधि/साधन का प्रयोग सबसे प्रभावी होगा?',
    'A teacher wants to teach "Volcanoes" to Class 4 students, but there is no real volcano nearby. Which method/aid would be most effective?',
    ['बेकिंग सोडा व सिरके से कार्यशील मॉडल प्रदर्शन तथा लघु वीडियो क्लिप दिखाना', 'Demonstrating a working model using baking soda and vinegar along with a short video clip'],
    [
      ['केवल मौखिक व्याख्यान देकर पाठ पूरा करना', 'Completing the chapter solely via oral lecture'],
      ['बच्चों को ज्वालामुखी की परिभाषा 10 बार रटाना', 'Making children memorize the definition 10 times'],
      ['कठिन भूवैज्ञानिक शब्दावली लिखवाना', 'Dictating difficult geological jargon'],
    ],
    'जब प्रत्यक्ष वस्तु या घटना उपलब्ध न हो, तब कार्यशील मॉडल (Working Model) और श्रव्य-दृश्य माध्यम (Audio-Visual) प्रत्यक्ष अनुभव के निकटतम विकल्प प्रदान करते हैं।',
    'When direct real-life observation is impossible, working models and audio-visual media provide the closest concrete substitute for meaningful understanding.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में बच्चों को प्रारंभ में अक्षरों की आकृति का ज्ञान किस प्रकार कराया जाता है?',
    'In the Montessori method, how are children initially introduced to the shapes of letters?',
    ['रेगमाल (Sandpaper) से बने उभरे अक्षरों पर अंगुली फेरकर स्पर्श व ध्वनि द्वारा', 'By tracing raised sandpaper letters with fingers while associating their sounds'],
    [
      ['केवल ब्लैकबोर्ड से देखकर पेन से लिखवाकर', 'By copying from the blackboard with a pen'],
      ['डांटकर बार-बार स्लेट साफ कराकर', 'By scolding and making them erase slates'],
      ['बिना स्पर्श किए केवल सुनकर', 'Only by listening without touching'],
    ],
    'सैंडपेपर लेटर्स पर अंगुली फेरने से स्पर्श (Tactile), दृष्टि (Visual) और श्रवण (Auditory) तीनों इंद्रियाँ एक साथ जुड़ती हैं, जिससे लेखन और पठन की मजबूत नींव पड़ती है।',
    'Tracing sandpaper letters integrates tactile, visual, and auditory senses simultaneously, building strong muscle memory and letter-sound association.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'फ्रोबेल की किंडरगार्टन प्रणाली में "गीत, हाव-भाव और खेल" (Songs, Gestures, and Games) का संयोजन किस नाम से प्रसिद्ध है?',
    'In Froebel’s Kindergarten system, what is the combination of "Songs, Gestures, and Games" famously linked to?',
    ['मातृ-क्रीड़ा एवं शिशु-गीत (Mother Play and Nursery Songs)', 'Mother Play and Nursery Songs'],
    [
      ['सूत्र-पाठ संग्रह', 'Formula Recitation Collection'],
      ['सैन्य अभ्यास नियमावली', 'Military Drill Manual'],
      ['अभिक्रमित पाठ-पुस्तिका', 'Programmed Booklet'],
    ],
    'फ्रोबेल ने 1843 में "Mutter- und Koselieder" (Mother’s Songs, Games and Stories) प्रकाशित की, जिसमें गीतों और शारीरिक मुद्राओं से शिशु की इंद्रियों व भावों को विकसित करने की विधि दी गई थी।',
    'Froebel published "Mother’s Songs, Games and Stories" (1843), using songs, finger plays, and gestures to nurture young children’s senses and emotions.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना के प्रमुख दोष के रूप में किस बात की ओर संकेत किया जाता है?',
    'What is pointed out as a major limitation of the Dalton Plan?',
    ['इसमें लिखित कार्य पर अत्यधिक बल तथा मौखिक व सामूहिक भावना की कमी हो सकती है', 'Overemphasis on written assignments and possible neglect of oral expression and collective spirit'],
    [
      ['इसमें छात्र कभी कुछ पढ़ते ही नहीं हैं', 'Students never read anything in it'],
      ['इसमें केवल खेल ही खेल होता है', 'It consists solely of games'],
      ['यह बहुत सस्ती व कम मेहनत वाली प्रणाली है', 'It is too cheap and effortless'],
    ],
    'मासिक ठेकों (Assignments) में लिखित व व्यक्तिगत कार्य की अधिकता के कारण छोटे बच्चों पर बोझ बढ़ सकता है और सामूहिक मौखिक चर्चा कम हो सकती है।',
    'Heavy reliance on written individual contracts can overburden younger learners and reduce opportunities for collective oral discussion.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण कौशल के संदर्भ में "दृष्टांत कौशल" के दो मुख्य प्रकार कौन-से हैं?',
    'In the context of teaching skills, what are the two main types of the "Skill of Illustrating with Examples"?',
    ['शाब्दिक (मौखिक) दृष्टांत तथा अशाब्दिक (दृश्य/प्रत्यक्ष) दृष्टांत', 'Verbal illustrations and Non-verbal (visual/concrete) illustrations'],
    [
      ['सरल दृष्टांत तथा अप्रासंगिक दृष्टांत', 'Simple and irrelevant illustrations'],
      ['कठोर दृष्टांत तथा मौन दृष्टांत', 'Strict and silent illustrations'],
      ['लिखित दृष्टांत तथा दंडात्मक दृष्टांत', 'Written and punitive illustrations'],
    ],
    'शाब्दिक दृष्टांत में कहानी, उपमा, उदाहरण व चुटकुले आते हैं, जबकि अशाब्दिक दृष्टांत में मॉडल, चित्र, मानचित्र, चार्ट व वास्तविक वस्तुएँ शामिल होती हैं।',
    'Verbal illustrations include analogies, stories, and oral examples, while non-verbal illustrations use models, pictures, maps, charts, and real objects.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"माइंड मैपिंग" (Mind Mapping - टोनी बुज़ान) तकनीक छात्रों की किस प्रकार मदद करती है?',
    'How does the "Mind Mapping" (Tony Buzan) technique help students?',
    ['केंद्रीय विचार से शाखाओं के रूप में संबंधित बिंदुओं, रंगों व संकेतों द्वारा स्मरण व सृजनशीलता बढ़ाने में', 'By radiating branches, colors, and cues from a central idea to boost memory and creativity'],
    [
      ['केवल रेखीय रूप से पूरे पैराग्राफ की नकल करने में', 'By copying full paragraphs linearly'],
      ['विचारों को छिपाकर रखने में', 'By hiding ideas'],
      ['गणितीय गणनाएँ मशीन से करने में', 'By calculating via machines'],
    ],
    'माइंड मैप के केंद्र में मुख्य विषय होता है और चारों ओर निकलती शाखाएँ उप-विषयों को जोड़ती हैं, जिससे मस्तिष्क को समग्र चित्र याद रखने में आसानी होती है।',
    'A mind map places a central concept in the middle with radiating branches for sub-ideas, aiding holistic recall, note-taking, and creative organization.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"फिशबाउल चर्चा" (Fishbowl Discussion) तकनीक में कक्षा की बैठक व्यवस्था कैसी होती है?',
    'How is seating arranged in a "Fishbowl Discussion" classroom technique?',
    ['एक आंतरिक वृत्त (चर्चा करने वाले छात्र) तथा उसके चारों ओर एक बाहरी वृत्त (अवलोकन करने वाले छात्र)', 'An inner circle of active discussants surrounded by an outer circle of observers'],
    [
      ['मछलीघर के सामने सीधी कतार में', 'In a straight queue in front of an aquarium'],
      ['सभी छात्र पीठ मिलाकर बाहर की ओर देखते हुए', 'All students sitting back-to-back facing outward'],
      ['केवल शिक्षक केंद्र में और छात्र कमरे से बाहर', 'Teacher in center and students outside the room'],
    ],
    'फिशबाउल प्रविधि में आंतरिक वृत्त के छात्र संवाद करते हैं और बाहरी वृत्त के छात्र सुनकर नोट्स लेते हैं; बाद में भूमिकाएँ बदल जाती हैं। इससे बड़ी कक्षा में भी सुव्यवस्थित संवाद होता है।',
    'In a fishbowl, inner-circle students discuss while outer-circle peers observe and take notes before swapping roles, enabling structured dialogue in large classes.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में नया विषय शुरू करते ही बच्चों से पूछते हैं— "अच्छा बच्चों, आज हम जो पढ़ने जा रहे हैं, क्या आपने कभी गाँव के मेले में गुब्बारे वाले को हवा भरते देखा है?" यहाँ कौन-सा शिक्षण कार्य हो रहा है?',
    'Upon starting a new topic, a teacher asks, "Children, have you ever seen a balloon seller filling balloons at the village fair?" Which teaching function is occurring here?',
    ['अभिप्रेरणा उत्पन्न करना एवं पूर्व-ज्ञान का आह्वान करना', 'Generating motivation and activating prior knowledge'],
    [
      ['योगात्मक मूल्यांकन करना', 'Conducting summative evaluation'],
      ['गृहकार्य की जांच करना', 'Checking homework'],
      ['उपचारात्मक निदान करना', 'Conducting remedial diagnosis'],
    ],
    'परिचित मेले और गुब्बारे के अनुभव से जोड़ने पर बच्चे तुरंत उत्साहित (अभिप्रेरित) होते हैं और वायु दाब या आयतन जैसे विज्ञान पाठ से सहजता से जुड़ जाते हैं।',
    'Connecting to a familiar fair experience motivates learners and activates prior schema for topics like air pressure or volume.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि किसी प्रयोग को करते समय कक्षा में वांछित परिणाम तुरंत न आए (प्रयोग विफल हो जाए), तो एक आदर्श विज्ञान शिक्षक को क्या करना चाहिए?',
    'If a classroom science demonstration fails to give the expected result immediately, what should an ideal science teacher do?',
    ['परिणाम छिपाने के बजाय छात्रों के साथ कारणों का विश्लेषण करना कि त्रुटि कहाँ हुई', 'Analyze with students why the expected result did not occur rather than hiding or faking it'],
    [
      ['झूठ बोल देना कि प्रयोग सफल हो गया', 'Falsely claim that the experiment succeeded'],
      ['छात्रों को डांटकर कॉपियाँ बंद करा देना', 'Scold students and shut their notebooks'],
      ['प्रयोग की मेज हटाकर पाठ छोड़ देना', 'Remove the table and skip the topic'],
    ],
    'विज्ञान में असफल प्रयोग भी सीखने का बेहतरीन अवसर होता है; त्रुटि के कारकों (जैसे तापमान, उपकरण रिसाव) की जांच करना सच्ची वैज्ञानिक भावना सिखाता है।',
    'An unexpected result is a rich scientific learning moment; investigating variables and experimental error teaches authentic scientific temper.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन विधि',
    'अंग्रेजी या हिंदी में "संयुक्ताक्षर" या "वचन परिवर्तन" के नियम सिखाने हेतु जब शिक्षक 10 शब्द-युग्म (लड़का-लड़के, घोड़ा-घोड़े...) बोर्ड पर लिखकर बच्चों से नियम निकलवाता है, तो वह किस विधि का उपयोग कर रहा है?',
    'When a teacher writes 10 word pairs (boy-boys, book-books...) on the board and guides students to deduce the pluralization rule, which method is being used?',
    ['आगमन विधि', 'Inductive Method'],
    [
      ['निगमन विधि', 'Deductive Method'],
      ['व्याख्यान विधि', 'Lecture Method'],
      ['प्रोजेक्ट विधि', 'Project Method'],
    ],
    'अनेक विशिष्ट शब्द-युग्मों का अवलोकन कराकर बच्चों से स्वयं नियम (जैसे आकारांत पुल्लिंग में "आ" को "ए" करना) निकलवाना आगमन विधि का उत्कृष्ट प्रयोग है।',
    'Having learners observe multiple word pairs to formulate the grammatical rule themselves is a classic application of the inductive method.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"सिनेक्टिक्स शिक्षण प्रतिमान" (Synectics Teaching Model - विलियम गॉर्डन) मुख्यतः किसके विकास के लिए बनाया गया है?',
    'The "Synectics Teaching Model" (William Gordon) is primarily designed to develop what?',
    ['रचनात्मक चिंतन एवं समस्या समाधान (रूपकों व सादृश्यों के माध्यम से)', 'Creative thinking and problem solving (through metaphors and analogies)'],
    [
      ['कठोर सैन्य अनुशासन', 'Strict military discipline'],
      ['तेज टाइपिंग गति', 'Fast typing speed'],
      ['केवल वर्तनी रटना', 'Only spelling memorization'],
    ],
    'विलियम गॉर्डन के सिनेक्टिक्स प्रतिमान में "अपरिचित को परिचित बनाना" और "परिचित को अपरिचित बनाना" रूपकों (Direct, Personal, Symbolic Analogies) द्वारा सृजनात्मकता बढ़ाई जाती है।',
    'William Gordon’s Synectics model uses analogies and metaphors ("making the strange familiar and the familiar strange") to nurture creativity.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'प्राथमिक स्तर पर "समन्वित या एकीकृत शिक्षण विधि" (Integrated Approach) से क्या तात्पर्य है?',
    'What is meant by the "Integrated Approach" to teaching at the primary level?',
    ['किसी थीम (जैसे "जल" या "परिवार") के माध्यम से भाषा, गणित व पर्यावरण को जोड़कर पढ़ाना', 'Connecting language, math, and EVS through a common theme (like "Water" or "Family")'],
    [
      ['सभी विषयों की किताबें एक ही जिल्द में बांध देना', 'Binding all subject textbooks into one cover'],
      ['केवल एक ही विषय पूरे वर्ष पढ़ाना', 'Teaching only one subject all year'],
      ['अलग-अलग शिक्षकों को आपस में बात न करने देना', 'Preventing subject teachers from collaborating'],
    ],
    'छोटे बच्चे दुनिया को अलग-अलग विषयों के खंडों में नहीं, बल्कि समग्र रूप में देखते हैं। एक ही थीम के इर्द-गिर्द गीत, गिनती, चित्र व पर्यावरण जोड़ने से अधिगम सार्थक बनता है।',
    'Young children perceive the world holistically rather than in rigid subject silos; weaving language, math, and EVS around a shared theme makes learning meaningful.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल एवं नाटकीय विधियाँ',
    '"स्वांग या मूक-मुद्रा" की तुलना में "कहानी नाट्यीकरण" (Story Dramatization) का विशेष लाभ क्या है?',
    'What is the specific advantage of "Story Dramatization" over mere silent reading?',
    ['इसमें वाचिक संवाद, भाव-भंगिमा, स्मरण और समूह समन्वय सभी एक साथ विकसित होते हैं', 'It simultaneously develops spoken dialogue, expression, recall, and group coordination'],
    [
      ['इसमें किसी पात्र की आवश्यकता नहीं होती', 'It requires no characters'],
      ['यह केवल लिखने की गति मापती है', 'It measures only writing speed'],
      ['इसमें बच्चे चुपचाप बैठे रहते हैं', 'Children sit silently in it'],
    ],
    'कहानी का नाट्य मंचन करने से बच्चे पात्र की भावनाओं को संवादों व अभिनय में उतारते हैं, जिससे भाषा प्रवाह व आत्मविश्वास दोनों बढ़ते हैं।',
    'Dramatizing a story engages spoken dialogue, emotional expression, comprehension, and teamwork simultaneously.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि की एक प्रमुख व्यावहारिक सीमा क्या है?',
    'What is a major practical limitation of the Project Method?',
    ['सभी विषयों के क्रमिक ज्ञान व पर्याप्त अभ्यास को केवल प्रोजेक्ट्स से पूरा करना कठिन है', 'Systematic coverage and sufficient drill of all curriculum topics are difficult through projects alone'],
    [
      ['इसमें बच्चे बिल्कुल सक्रिय नहीं रहते', 'Children are completely inactive in it'],
      ['यह जॉन डीवी के सिद्धांतों के विरुद्ध है', 'It opposes John Dewey’s principles'],
      ['इसमें कोई सामाजिक कौशल नहीं विकसित होता', 'No social skills develop in it'],
    ],
    'प्रोजेक्ट विधि अत्यंत रोचक व उपयोगी है, पर गणित या भाषा के कुछ क्रमिक कौशलों में व्यवस्थित अभ्यास व समय प्रबंधन हेतु अन्य विधियों का समन्वय आवश्यक होता है।',
    'While highly engaging, projects alone can leave gaps in systematic sequencing and skill practice unless combined with other methods.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'निम्नलिखित में से कौन-सा प्रश्न "संकल्पनात्मक समझ" (Conceptual Understanding) की जांच करता है, न कि केवल रटे तथ्य की?',
    'Which of the following questions checks "Conceptual Understanding" rather than mere rote recall?',
    ['"यदि पृथ्वी अपने अक्ष पर घूमना बंद कर दे, तो दिन और रात पर क्या प्रभाव पड़ेगा?"', '"If Earth stopped rotating on its axis, how would day and night be affected?"'],
    [
      ['"पृथ्वी अपने अक्ष पर एक चक्कर कितने घंटे में लगाती है?"', '"In how many hours does Earth complete one rotation?"'],
      ['"सौरमंडल में कुल कितने ग्रह हैं?"', '"How many planets are in the solar system?"'],
      ['"पृथ्वी का उपग्रह कौन है?"', '"Which is Earth’s natural satellite?"'],
    ],
    'घूर्णन बंद होने के परिणाम का अनुमान लगाने के लिए छात्र को दिन-रात बनने के कारण (घूर्णन प्रक्रिया) की गहरी समझ होना आवश्यक है, केवल समय रट लेना पर्याप्त नहीं।',
    'Predicting the consequence of Earth stopping its rotation requires understanding the causal mechanism of day and night rather than memorizing a number.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पुनः पाठ योजना" (Re-plan) क्यों आवश्यक होती है?',
    'Why is "Re-plan" essential in Micro-teaching?',
    ['ताकि प्रतिपुष्टि में चिह्नित त्रुटियों को सुधारने के लिए शिक्षण युक्तियों में बदलाव किया जा सके', 'So that teaching strategies can be modified to rectify weaknesses identified in feedback'],
    [
      ['ताकि 36 मिनट पूरे करने की औपचारिकता निभाई जाए', 'Just as a formality to fill 36 minutes'],
      ['ताकि कौशल को छोड़कर नया कौशल चुना जाए', 'To abandon the current skill and pick a new one'],
      ['ताकि छात्रों की परीक्षा ली जा सके', 'To test the students'],
    ],
    'यदि बिना सुधार किए तुरंत दोबारा पढ़ाया जाए, तो वही त्रुटियाँ दोहराई जाएंगी। अतः पुनः नियोजन (Re-plan) चिंतन और परिमार्जन का मुख्य चरण है।',
    'Reteaching immediately without re-planning would repeat the same errors; re-planning allows deliberate refinement based on feedback.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उचित व्याख्या" (Effective Explanation) के लिए शिक्षक को निम्नलिखित में से किससे बचना चाहिए?',
    'For an effective explanation in class, which of the following should a teacher avoid?',
    ['तर्कहीन असंबद्ध कथन (Irrelevant statements) तथा अचानक विषय से भटक जाना', 'Irrelevant statements and abrupt digressions from the main point'],
    [
      ['प्रारंभिक कथन द्वारा मुख्य विषय स्पष्ट करना', 'Using opening statements to clarify the focus'],
      ['सरल से कठिन की ओर बढ़ना', 'Moving from simple to complex'],
      ['बीच-बीच में बोध-प्रश्न पूछना', 'Asking intermittent comprehension checks'],
    ],
    'असंबद्ध बातें और संदर्भ से भटकाव विद्यार्थियों के लिए अवधारणा के तार्किक क्रम को तोड़ देते हैं।',
    'Irrelevant remarks and digressions break the logical chain of ideas and confuse learners.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'किसी छात्र से कहा जाता है— "इस कहानी के मुख्य पात्र के कार्यों की अच्छाई और कमियों की अलग-अलग जाँच कीजिए।" यह प्रश्न ब्लूम व शिक्षण विधि के अनुसार किस प्रक्रिया से जुड़ा है?',
    'A student is asked: "Examine separately the strengths and flaws in the main character’s actions in this story." Which cognitive/methodological process does this involve?',
    ['विश्लेषण (Analysis)', 'Analysis'],
    [
      ['यांत्रिक अनुकरण (Mechanical Imitation)', 'Mechanical Imitation'],
      ['केवल स्मरण (Mere Recall)', 'Mere Recall'],
      ['श्रुतलेख (Dictation)', 'Dictation'],
    ],
    'किसी पात्र या स्थिति के विभिन्न पहलुओं (गुण और दोष) को अलग-अलग करके कारणों सहित परखना "विश्लेषण" कहलाता है।',
    'Breaking down a character’s actions into distinct strengths and flaws with reasoning represents analysis.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'प्रसिद्ध शिक्षाविद यंग (J.W.A. Young) के अनुसार आगमन और निगमन के पारस्परिक संबंध के बारे में क्या सही है?',
    'What is true about the mutual relationship between induction and deduction in teaching?',
    ['आगमन मार्ग दिखाता है और निगमन उस पर तीव्र गति से चलने में सहायता करता है; दोनों एक ही प्रक्रिया के दो पूरक पक्ष हैं', 'Induction shows the way and deduction helps travel faster; both are complementary halves of one process'],
    [
      ['आगमन और निगमन कभी एक ही पाठ में प्रयोग नहीं हो सकते', 'Induction and deduction can never be used in the same lesson'],
      ['केवल आगमन पर्याप्त है, निगमन की कोई आवश्यकता नहीं', 'Only induction suffices; deduction is unnecessary'],
      ['निगमन केवल कला विषयों के लिए है', 'Deduction is meant only for arts subjects'],
    ],
    'प्रायः पाठ का प्रारंभ आगमन से (खोज व नियम निर्माण) और समापन निगमन से (अभ्यास व अनुप्रयोग) किया जाता है, जिससे समझ और गति दोनों प्राप्त होती हैं।',
    'Lessons ideally begin inductively (deriving the rule) and conclude deductively (applying and practicing it), uniting deep understanding with efficiency.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    '"डिस्कवरी लर्निंग" (Discovery Learning / अन्वेषणात्मक अधिगम) सिद्धांत को किस मनोवैज्ञानिक ने विशेष रूप से प्रतिपादित किया?',
    'Which psychologist prominently propounded the theory of "Discovery Learning"?',
    ['जेरोम ब्रूनर', 'Jerome Bruner'],
    [
      ['इवान पावलोव', 'Ivan Pavlov'],
      ['सिगमंड फ्रायड', 'Sigmund Freud'],
      ['ई.एल. थॉर्नडाइक', 'E.L. Thorndike'],
    ],
    'जेरोम ब्रूनर (1961) ने तर्क दिया कि जब विद्यार्थी स्वयं समस्याओं का अन्वेषण करके संबंधों व संरचनाओं को खोजते हैं, तो अधिगम अधिक सार्थक और दीर्घस्थायी होता है।',
    'Jerome Bruner argued that learning is deepest and longest-lasting when learners actively discover patterns and structures through inquiry.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    'खोज अधिगम (Discovery Learning) के दो रूप—"शुद्ध खोज" (Pure Discovery) और "निर्देशित खोज" (Guided Discovery)—में से विद्यालयी कक्षाओं के लिए कौन अधिक प्रभावी माना जाता है?',
    'Between "Pure Discovery" and "Guided Discovery", which is considered more effective for school classrooms?',
    ['निर्देशित खोज (Guided Discovery), जहाँ शिक्षक उपयुक्त संकेत व संरचना प्रदान करता है', 'Guided Discovery, where the teacher provides appropriate scaffolding and structure'],
    [
      ['शुद्ध खोज, जहाँ शिक्षक कोई भी मार्गदर्शन नहीं देता', 'Pure Discovery with zero teacher guidance'],
      ['केवल रटंत अधिगम', 'Pure rote learning'],
      ['दंड आधारित प्रशिक्षण', 'Punishment-based training'],
    ],
    'शैक्षिक शोध (रिचर्ड मेयर आदि) दर्शाते हैं कि बिना मार्गदर्शन के शुद्ध खोज से बच्चे भटक सकते हैं, जबकि निर्देशित खोज में उचित सहायता के साथ खोज का पूरा लाभ मिलता है।',
    'Educational research (e.g., Richard Mayer) shows that guided discovery with timely scaffolding prevents cognitive overload and yields far better learning than unguided discovery.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 5 में कुछ बच्चे गणित के इबारती प्रश्न (Word Problems) पढ़कर यह नहीं समझ पाते कि जोड़ करना है या गुणा। शिक्षक को किस विधि से मदद करनी चाहिए?',
    'In Class 5, some students read math word problems and cannot decide whether to add or multiply. How should the teacher help?',
    ['प्रश्न को छोटे वाक्यों में तोड़कर चित्र/बार-मॉडल बनवाना और वास्तविक जीवन स्थिति से जोड़ना', 'Break the problem into small parts, draw bar/visual models, and relate to real-life context'],
    [
      ['उन्हें केवल की-वर्ड रटा देना कि "कुल" दिखे तो जोड़ करो', 'Make them memorize keywords like "total means add"'],
      ['इबारती प्रश्न सिलेबस से हटा देना', 'Remove word problems from the syllabus'],
      ['बच्चों को गणित में कमजोर मानकर ध्यान न देना', 'Label them weak in math and ignore them'],
    ],
    'केवल की-वर्ड रटाने से भ्रम बढ़ता है (जैसे "अधिक" शब्द घटाव में भी आ सकता है)। दृश्य चित्र या बार-मॉडल बनाकर स्थिति की कल्पना कराने से वास्तविक समझ बनती है।',
    'Keyword tricks often mislead; visualizing the problem situation with drawings or bar models builds genuine relational understanding.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक अपने पाठ की प्रभावशीलता का स्वयं मूल्यांकन करना चाहता है। सबसे विश्वसनीय तरीका क्या होगा?',
    'A teacher wants to self-evaluate the effectiveness of their lesson. What would be the most reliable way?',
    ['छात्रों के अधिगम प्रतिफलों (Learning Outcomes) की जांच करना तथा सहकर्मी अवलोकन व छात्र प्रतिपुष्टि लेना', 'Checking students’ learning outcomes along with peer observation and student feedback'],
    [
      ['केवल यह देखना कि रजिस्टर में पाठ पूरा लिखा है या नहीं', 'Merely checking whether the register entry is complete'],
      ['स्वयं को मन ही मन 100 में से 100 अंक दे देना', 'Mentally giving oneself 100 out of 100'],
      ['देखना कि कक्षा में कितना सन्नाटा था', 'Checking how silent the classroom was'],
    ],
    'शिक्षण की सफलता इस बात से मापी जाती है कि विद्यार्थियों ने कितना और कैसा सीखा। अधिगम प्रमाण और सहकर्मी फीडबैक चिंतनशील शिक्षण (Reflective Teaching) का आधार हैं।',
    'Teaching effectiveness is measured by student learning evidence, complemented by peer feedback and reflective practice.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'भाषा शिक्षण की "ध्वन्यात्मक विधि" (Phonic Method) का मुख्य आधार क्या है?',
    'What is the core basis of the "Phonic Method" of reading instruction?',
    ['अक्षरों/लिपिचिह्नों को उनकी ध्वनियों (Sounds) से जोड़कर शब्द पढ़ना सिखाना', 'Teaching reading by linking letters/graphemes to their corresponding sounds/phonemes'],
    [
      ['शब्दों के चित्र देखकर रटना', 'Memorizing words by looking at pictures'],
      ['पूरे अनुच्छेद को बिना पढ़े सुनना', 'Listening to paragraphs without reading'],
      ['केवल व्याकरण के लिंग-वचन पढ़ना', 'Studying only gender and number in grammar'],
    ],
    'ध्वन्यात्मक विधि (Phonics) में बच्चा प्रत्येक वर्ण व मात्रा की ध्वनि पहचानता है और उन्हें मिलाकर (Blending) नए अपरिचित शब्द भी पढ़ पाता है।',
    'The phonic method teaches letter-sound correspondences so children can decode and blend sounds to read even unfamiliar words.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'सस्वर वाचन (Loud Reading) तथा मौन वाचन (Silent Reading) के उद्देश्य में क्या मुख्य अंतर है?',
    'What is the main difference in the purpose of Loud Reading and Silent Reading?',
    ['सस्वर वाचन शुद्ध उच्चारण व अभिव्यक्ति के लिए, जबकि मौन वाचन तीव्र गति व गहन अर्थ-ग्रहण के लिए होता है', 'Loud reading develops accurate pronunciation and expression, whereas silent reading builds speed and deep comprehension'],
    [
      ['सस्वर वाचन बड़ी कक्षाओं में और मौन वाचन नर्सरी में होता है', 'Loud reading is for higher classes and silent reading for nursery'],
      ['मौन वाचन में छात्र सो जाते हैं', 'Students sleep during silent reading'],
      ['दोनों के उद्देश्य बिल्कुल समान हैं', 'Both have identical objectives'],
    ],
    'प्राथमिक की शुरुआती कक्षाओं में सस्वर वाचन से उच्चारण व विराम चिह्नों का अभ्यास होता है; कक्षा 3-4 के बाद मौन वाचन पठन गति और गहन समझ को बढ़ाता है।',
    'Loud reading builds pronunciation, rhythm, and fluency in early grades, while silent reading promotes faster reading rate and deeper comprehension from Grade 3–4 onward.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'निम्नलिखित में से किस स्तर से छात्रों को व्यवस्थित रूप से "मौन वाचन" (Silent Reading) का अभ्यास शुरू कराना सबसे उपयुक्त माना जाता है?',
    'From which stage is it most appropriate to systematically introduce "Silent Reading" practice to students?',
    ['कक्षा 3 से 4 के आसपास (जब बुनियादी डिकोडिंग और उच्चारण सध जाए)', 'Around Class 3 to 4 (once basic decoding and pronunciation are established)'],
    [
      ['बालवाटिका (नर्सरी) से ही', 'Right from Balvatika (Nursery)'],
      ['केवल स्नातक स्तर से', 'Only from graduation level'],
      ['कक्षा 1 के पहले दिन से', 'From Day 1 of Class 1'],
    ],
    'जब तक बच्चा अक्षर-ध्वनि जोड़कर सहजता से पढ़ना न सीख ले, तब तक मौन वाचन कठिन होता है। बुनियादी पठन आने के बाद कक्षा 3-4 से मौन वाचन लाभकारी होता है।',
    'Silent reading requires basic decoding fluency first; introducing it systematically around Classes 3–4 maximizes comprehension.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    '"दक्षता आधारित शिक्षण" (Competency-Based Education) का मुख्य केंद्र बिंदु क्या होता है?',
    'What is the central focus of "Competency-Based Education" (CBE)?',
    ['रटने के बजाय प्रत्येक विद्यार्थी द्वारा अपेक्षित कौशल एवं समझ में वास्तविक निपुणता प्राप्त करना', 'Every learner achieving demonstrable mastery of specific skills and understanding rather than rote memorization'],
    [
      ['केवल कक्षा में उपस्थिति के दिन पूरे करना', 'Merely completing attendance days in school'],
      ['बिना जाँच किए अगली कक्षा में भेज देना', 'Promoting students without assessing mastery'],
      ['केवल पाठ्यपुस्तक के पृष्ठ गिनना', 'Merely counting textbook pages'],
    ],
    'NEP 2020 द्वारा अनुशंसित दक्षता-आधारित शिक्षण में समय की बजाय "क्या और कितना सीखा" (Mastery of Learning Outcomes) पर ध्यान दिया जाता है।',
    'Recommended by NEP 2020, Competency-Based Education focuses on demonstrable mastery of learning outcomes rather than time spent or rote recall.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"अनुभवात्मक अधिगम" (Experiential Learning - डेविड कोल्ब) के चार चरणों का सही चक्र कौन-सा है?',
    'Which is the correct cycle of four stages in David Kolb’s "Experiential Learning"?',
    ['मूर्त अनुभव → चिंतनशील अवलोकन → अमूर्त संकल्पना → सक्रिय प्रयोग', 'Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation'],
    [
      ['परीक्षा → रटंत → प्रमाणपत्र → विस्मरण', 'Exam → Rote → Certificate → Forgetting'],
      ['अमूर्त सिद्धांत → परीक्षा → दंड → अनुभव', 'Abstract theory → Exam → Punishment → Experience'],
      ['निष्क्रिय श्रवण → नकल → गृहकार्य → छुट्टी', 'Passive listening → Copying → Homework → Break'],
    ],
    'डेविड कोल्ब (1984) के अनुसार अनुभवात्मक अधिगम चक्र में व्यक्ति पहले प्रत्यक्ष अनुभव करता है, उस पर चिंतन करता है, सिद्धांत गढ़ता है और फिर नई स्थिति में उसका प्रयोग करता है।',
    'In David Kolb’s (1984) experiential learning cycle, learners move through Concrete Experience, Reflective Observation, Abstract Conceptualization, and Active Experimentation.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'समावेशी कक्षा में दृष्टिबाधित (Visually Impaired) छात्र को विज्ञान या भूगोल पढ़ाने के लिए शिक्षक को किस शिक्षण विधि व सामग्री का प्रयोग करना चाहिए?',
    'To teach science or geography to a visually impaired student in an inclusive classroom, which methods/materials should a teacher use?',
    ['स्पर्शनीय मानचित्र/मॉडल, उभरे हुए आरेख, ऑडियो वर्णन एवं ब्रेल सामग्री', 'Tactile maps/models, embossed diagrams, audio descriptions, and Braille materials'],
    [
      ['केवल श्यामपट्ट पर रंगीन चॉक से चित्र बनाना', 'Only drawing with colored chalk on the blackboard'],
      ['बिना बोले मूक वीडियो चला देना', 'Playing a silent video without narration'],
      ['छात्र को कक्षा से अलग प्रयोगशाला में बंद रखना', 'Keeping the student isolated from the lab'],
    ],
    'स्पर्श और श्रवण आधारित बहु-संवेदी शिक्षण सामग्री (Tactile & Audio TLM) दृष्टिबाधित छात्रों को समान रूप से अवधारणा समझने में सक्षम बनाती है।',
    'Multi-sensory tactile and audio resources (embossed maps, 3D models, verbal descriptions, Braille) ensure equitable participation for visually impaired learners.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'श्रवणबाधित (Hearing Impaired) विद्यार्थी की सहायता हेतु कक्षा शिक्षण में शिक्षक को क्या सावधानी बरतनी चाहिए?',
    'What precaution should a teacher take while teaching a hearing-impaired student in the classroom?',
    ['छात्र की ओर मुँह करके स्पष्ट व स्वाभाविक गति से बोलना तथा दृश्य सामग्री व संकेत भाषा का प्रयोग करना', 'Speak clearly facing the student at a natural pace, and use visual aids and sign language'],
    [
      ['बोर्ड की ओर मुँह करके धीरे-धीरे फुसफुसाना', 'Whisper softly while facing the board'],
      ['पीछे की पंक्ति में बिठाकर बहुत तेज चिल्लाना', 'Seat at the back and shout loudly'],
      ['दृश्य चार्ट का प्रयोग बंद कर देना', 'Stop using visual charts'],
    ],
    'सामने की पंक्ति में बिठाने और होंठों की गति (Lip-reading) व चेहरे के भाव स्पष्ट दिखने देने से तथा दृश्य संकेतों के प्रयोग से श्रवणबाधित छात्र आसानी से जुड़ते हैं।',
    'Seating near the front, facing the student so lips and expressions are visible, and pairing speech with visuals/signs greatly aids hearing-impaired learners.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'पाठ के मध्य किसी कठिन शब्द या सूत्र को समझाने के बाद शिक्षक पूछता है— "क्या तुम इस सूत्र को अपने शब्दों में एक उदाहरण द्वारा समझा सकते हो?" यह किस कौशल से जुड़ा है?',
    'After explaining a difficult rule, the teacher asks: "Can you explain this rule in your own words with an example?" Which skill does this reflect?',
    ['अवबोध जांच एवं अनुशीलन कौशल', 'Comprehension checking and Probing Skill'],
    [
      ['श्यामपट्ट मिटाने का कौशल', 'Blackboard erasing skill'],
      ['उद्दीपन परिवर्तन में मौन कौशल', 'Silence skill in stimulus variation'],
      ['गृहकार्य देने का कौशल', 'Homework assignment skill'],
    ],
    'छात्र को अपने शब्दों में उदाहरण सहित बताने को कहने से पता चलता है कि उसने अवधारणा को वास्तव में समझा है या केवल परिभाषा रटी है।',
    'Asking students to restate an idea in their own words with an example verifies true comprehension rather than rote repetition.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'जॉन डीवी द्वारा शिकागो में स्थापित प्रसिद्ध प्रयोगात्मक विद्यालय (Laboratory School) ने किस शिक्षण विधि की दार्शनिक पृष्ठभूमि तैयार की?',
    'John Dewey’s famous Laboratory School in Chicago laid the philosophical groundwork for which teaching method?',
    ['प्रोजेक्ट विधि एवं करके सीखना उपागम', 'Project Method and Learning by Doing approach'],
    [
      ['व्याकरण-अनुवाद विधि', 'Grammar-Translation Method'],
      ['रेखीय अभिक्रमित अनुदेशन', 'Linear Programmed Instruction'],
      ['मकतब पद्धति', 'Maktab System'],
    ],
    '1896 में शिकागो विश्वविद्यालय में जॉन डीवी ने लैब स्कूल स्थापित किया, जहाँ अनुभव, समस्या-समाधान और सामाजिक सहभागिता को शिक्षा का केंद्र बनाया गया; इसी से किलपैट्रिक की प्रोजेक्ट विधि निकली।',
    'John Dewey’s 1896 Laboratory School at Chicago centered education on inquiry, social life, and learning by doing, directly inspiring Kilpatrick’s Project Method.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी एवं किंडरगार्टन',
    'मोंटेसरी पद्धति में बच्चों की मांसपेशियों एवं लेखन की तैयारी हेतु कौन-सा अभ्यास पहले कराया जाता है?',
    'In the Montessori method, which exercises are practiced first to prepare children’s muscles for writing?',
    ['लकड़ी के ज्यामितीय फ्रेम (Metal Insets) भरना एवं सैंडपेपर अक्षरों पर अंगुली फेरना', 'Tracing metal insets and feeling sandpaper letters'],
    [
      ['सीधे बॉलपेन से चार लाइन की कॉपी में निबंध लिखना', 'Directly writing essays in ruled notebooks with a ballpen'],
      ['कठिन संधि शब्द रटना', 'Memorizing complex compound words'],
      ['स्लेट पर जोर-जोर से गिनती लिखना', 'Writing numbers forcefully on slates'],
    ],
    'मेटल इनसेट्स के भीतर पेंसिल घुमाने से कलाई और अंगुलियों का नियंत्रण (पेंसिल पकड़ना) विकसित होता है तथा सैंडपेपर अक्षर से आकृति की स्मृति बनती है।',
    'Tracing geometric metal insets develops pencil grip and wrist control, while sandpaper letters imprint letter shapes kinesthetically.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'निम्नलिखित में से कौन-सा उदाहरण "संश्लेषण विधि" (Synthetic Method) का सही प्रतिनिधित्व करता है?',
    'Which of the following examples accurately represents the "Synthetic Method"?',
    ['अक्षरों (क, ल, म) को मिलाकर शब्द (कलम) और शब्दों को मिलाकर वाक्य बनाना', 'Combining letters (k, a, l, a, m) to form a word and words to form a sentence'],
    [
      ['पूरे अनुच्छेद को अलग-अलग वाक्यों और शब्दों में तोड़ना', 'Breaking a paragraph into separate sentences and words'],
      ['प्रमेय के निष्कर्ष से शुरू करके पिछली शर्तों की खोज करना', 'Starting from the theorem’s conclusion to trace prior conditions'],
      ['किसी मशीन के पुर्जे अलग-अलग खोलकर रखना', 'Dismantling a machine into separate parts'],
    ],
    'छोटी ज्ञात इकाइयों (अक्षर/शब्द/तथ्य) को जोड़कर एक पूर्ण सार्थक इकाई (शब्द/वाक्य/निष्कर्ष) की रचना करना संश्लेषण है।',
    'Combining smaller known units (letters, words, or given facts) into a meaningful whole (words, sentences, or conclusions) is synthesis.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'यदि किसी ज्यामिति प्रश्न में शिक्षक पूछता है— "हमें ∠A = ∠B सिद्ध करना है; बताओ यह कब बराबर हो सकता है?" और बच्चे उत्तर देते हैं "जब इनके सामने की भुजाएँ बराबर हों"। यह किस विधि का प्रयोग है?',
    'In a geometry problem, a teacher asks: "We need to prove ∠A = ∠B; when can these be equal?" Students reply, "When opposite sides are equal." Which method is being used?',
    ['विश्लेषण विधि', 'Analytic Method'],
    [
      ['निगमन अभ्यास विधि', 'Deductive Drill Method'],
      ['खेल विधि', 'Play-way Method'],
      ['डाल्टन योजना', 'Dalton Plan'],
    ],
    'जो सिद्ध करना है (अज्ञात निष्कर्ष) उसे लेकर पीछे की ओर कारण खोजना ("यह किस पर निर्भर है?") विश्लेषण विधि की मूल पहचान है।',
    'Starting from what is to be proved and asking "what condition would guarantee this?" is the hallmark of the analytic method.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'रचनात्मक विज्ञान शिक्षण में "POE रणनीति" का पूर्ण रूप क्या है?',
    'In constructivist science teaching, what does the "POE strategy" stand for?',
    ['अनुमान लगाओ - अवलोकन करो - व्याख्या करो (Predict–Observe–Explain)', 'Predict–Observe–Explain'],
    [
      ['पढ़ो - रटो - परीक्षा दो (Practice–Order–Examine)', 'Practice–Order–Examine'],
      ['योजना - संचालन - समाप्त (Plan–Operate–End)', 'Plan–Operate–End'],
      ['दबाव - आज्ञा - मूल्यांकन (Pressure–Obey–Evaluate)', 'Pressure–Obey–Evaluate'],
    ],
    'POE (ह्वाइट और गनस्टोन) में विद्यार्थी पहले प्रयोग के परिणाम का अनुमान (Predict) लगाते हैं, फिर प्रत्यक्ष अवलोकन (Observe) करते हैं और अंत में अपने अनुमान व परिणाम के अंतर की व्याख्या (Explain) करते हैं।',
    'In POE (White & Gunstone), students predict an outcome, observe the demonstration, and explain any discrepancy between prediction and observation.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक विद्यालय में कक्षा 5 के बच्चों को स्थानीय डाकघर या बैंक ले जाया गया ताकि वे पत्र भेजने या पैसा जमा करने की प्रक्रिया समझ सकें। इसके बाद शिक्षक को क्या करना चाहिए?',
    'Class 5 students were taken to a local post office or bank to understand mailing letters or depositing money. What should the teacher do afterward?',
    ['भ्रमण के अनुभवों पर कक्षा में चर्चा, रिपोर्ट लेखन व अनुभव साझा करवाना', 'Hold a classroom debrief, reflection discussion, and report/experience sharing'],
    [
      ['इस बारे में कभी बात न करना और सीधे दूसरा अध्याय पढ़ाना', 'Never mention it again and jump to another chapter'],
      ['केवल बच्चों से पूछना कि समोसा कैसा था', 'Only ask students how the snacks were'],
      ['बच्चों को अगले दिन छुट्टी दे देना', 'Give students a holiday the next day'],
    ],
    'क्षेत्रीय भ्रमण तब तक सार्थक शैक्षिक गतिविधि नहीं बनता जब तक भ्रमण के बाद कक्षा में उसका अनुवर्तन (Follow-up), चर्चा और संकलन न किया जाए।',
    'A field trip achieves full pedagogical value only when followed by structured debriefing, discussion, and reflection activities in class.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा में "लैंगिक रूढ़िवादिता" (Gender Stereotyping) तोड़ने के लिए एक शिक्षिका किस शिक्षण व्यवहार का पालन करेंगी?',
    'To break "Gender Stereotyping" in the classroom, which teaching practice should a teacher follow?',
    ['लड़कों व लड़कियों दोनों को समान रूप से गणित, विज्ञान, खेल, स्वच्छता व नेतृत्व के अवसर देना', 'Giving equal opportunities to both boys and girls in math, science, sports, cleanliness, and leadership'],
    [
      ['लड़कियों को केवल रंगोली व सफाई का काम देना और लड़कों को विज्ञान मॉडल का', 'Assigning rangoli/cleaning only to girls and science models only to boys'],
      ['लड़कों से कहना कि रोना लड़कियों का काम है', 'Telling boys that crying is for girls'],
      ['लड़कियों को गणित के कठिन प्रश्न न देना', 'Avoiding tough math problems for girls'],
    ],
    'जेंडर-संवेदनशील शिक्षणशास्त्र में शिक्षक भूमिकाओं, भाषा और अवसरों में किसी भी लैंगिक भेदभाव को समाप्त कर समतामूलक वातावरण रचता है।',
    'Gender-responsive pedagogy ensures equal participation and leadership across all domains—STEM, sports, arts, and class duties—without stereotyping.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'निम्नलिखित में से कौन-सा शिक्षण कौशल "प्रारंभिक पाठ" और "मुख्य पाठ" के बीच सेतु का काम करता है?',
    'Which of the following teaching skills acts as a bridge between students’ prior life and the main lesson?',
    ['प्रस्तावना (विन्यास प्रेरणा) कौशल', 'Skill of Set Induction (Introducing a Lesson)'],
    [
      ['समापन कौशल', 'Skill of Closure'],
      ['दृष्टांत कौशल', 'Skill of Illustration'],
      ['श्यामपट्ट लेखन कौशल', 'Skill of Blackboard Writing'],
    ],
    'प्रस्तावना कौशल (Set Induction) पूर्व-ज्ञान और नवीन विषय के बीच सेतु निर्मित कर विद्यार्थियों को मानसिक रूप से सीखने के लिए तैयार करता है।',
    'Set induction builds a bridge between learners’ prior knowledge and the new lesson, preparing them mentally to learn.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षक द्वारा कक्षा में "पुनरावृत्ति" (Recapitulation) प्रश्न किस चरण में पूछे जाते हैं?',
    'At which stage of a lesson are "Recapitulation" questions asked by the teacher?',
    ['शिक्षण के अंत में संपूर्ण पाठ की समझ का आकलन करने हेतु', 'At the end of the lesson to assess overall understanding of what was taught'],
    [
      ['पाठ शुरू करने से पहले उपस्थिति लेते समय', 'While taking attendance before the lesson'],
      ['केवल परीक्षा परिणाम के दिन', 'Only on exam result day'],
      ['मध्यावकाश की घंटी में', 'During the lunch bell'],
    ],
    'पुनरावृत्ति प्रश्न पाठ के समापन पर पूछे जाते हैं ताकि मुख्य तथ्यों का दोहराव हो और शिक्षक यह जान सके कि अधिगम उद्देश्य प्राप्त हुए या नहीं।',
    'Recapitulatory questions are asked at the conclusion of the lesson to reinforce key takeaways and verify objective attainment.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'आगमन विधि किस मनोवैज्ञानिक सिद्धांत का सबसे अधिक अनुसरण करती है?',
    'Which psychological principle does the Inductive Method follow most closely?',
    ['बच्चा प्रत्यक्ष निरीक्षण और अनुभव से स्वयं ज्ञान की रचना करता है', 'The child constructs knowledge actively through direct observation and experience'],
    [
      ['ज्ञान बाहर से मस्तिष्क में केवल उड़ेल दिया जाता है', 'Knowledge is merely poured into the brain from outside'],
      ['बच्चे का दिमाग एक निष्क्रिय टेप रिकॉर्डर है', 'A child’s mind is a passive tape recorder'],
      ['रटने से ही बुद्धि का विकास होता है', 'Rote learning alone develops intelligence'],
    ],
    'आगमन विधि रचनावादी एवं बाल-मनोवैज्ञानिक दृष्टिकोण पर आधारित है जहाँ बच्चा स्वयं अवलोकन कर नियम बनाता है, न कि थोपे गए नियम रटता है।',
    'The inductive method aligns with constructivist child psychology: children construct principles from observation rather than passively memorizing imposed rules.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि में "मूल्यांकन" (Evaluation) किसके द्वारा किया जाना चाहिए?',
    'In the Project Method, who should carry out the "Evaluation"?',
    ['विद्यार्थियों और शिक्षक दोनों के द्वारा मिलकर (स्व-मूल्यांकन एवं सामूहिक समीक्षा)', 'Both students and the teacher collaboratively (self-evaluation and group review)'],
    [
      ['केवल विद्यालय के लिपिक द्वारा', 'Only by the school clerk'],
      ['केवल किसी बाहरी अजनबी द्वारा बिना प्रोजेक्ट देखे', 'By an outsider without seeing the project'],
      ['मूल्यांकन की कोई आवश्यकता ही नहीं होती', 'No evaluation is needed at all'],
    ],
    'प्रोजेक्ट पूर्ण होने पर बच्चे स्वयं अपनी योजना व परिणाम की समीक्षा करते हैं कि क्या अच्छा रहा और क्या सुधार हो सकता था; शिक्षक इसमें मार्गदर्शन करता है।',
    'Upon project completion, students reflect on their own work alongside teacher guidance to evaluate processes, challenges, and outcomes.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'किंडरगार्टन प्रणाली में बच्चों द्वारा कागज मोड़ना, कटाई करना, मोती पिरोना और मिट्टी के खिलौने बनाना किस श्रेणी में आता है?',
    'In the Kindergarten system, paper folding, cutting, bead stringing, and clay modeling fall under which category?',
    ['व्यवसाय (Occupations)', 'Occupations'],
    [
      ['उपहार (Gifts)', 'Gifts'],
      ['परीक्षाएँ (Examinations)', 'Examinations'],
      ['गृहकार्य (Homework)', 'Homework'],
    ],
    'फ्रोबेल की प्रणाली में "Gifts" वे स्थिर ज्यामितीय वस्तुएँ हैं जिनसे आकार-प्रकार सिखाया जाता है, जबकि "Occupations" वे क्रियाकलाप हैं जिनमें सामग्री का रूप बदलकर नई रचना बनाई जाती है।',
    'In Froebel’s system, Gifts are fixed geometric objects, whereas Occupations are creative activities (clay, paper folding, weaving) where materials are transformed.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी विद्यालयों में किस आयु वर्ग के बच्चों के लिए मुख्यतः शिक्षा की व्यवस्था विकसित की गई थी?',
    'For which age group was education primarily developed in Montessori’s original schools?',
    ['3 से 6 वर्ष (प्रारंभिक बाल्यावस्था)', '3 to 6 years (Early Childhood)'],
    [
      ['15 से 18 वर्ष', '15 to 18 years'],
      ['18 से 22 वर्ष', '18 to 22 years'],
      ['केवल 12 से 14 वर्ष', 'Only 12 to 14 years'],
    ],
    'रोम में स्थापित "कासा देई बाम्बिनी" मुख्यतः 3 से 6 वर्ष (प्री-प्राइमरी) के बच्चों की संवेदनशील अवस्था (Sensitive Periods) के लिए विकसित की गई थी।',
    'Montessori’s "Casa dei Bambini" primarily targeted early childhood (ages 3–6), capitalizing on children’s sensitive periods for sensory and language growth.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि में शिक्षक द्वारा छात्रों को दी जाने वाली "निर्देशिका शीट" (Instruction Sheet) में क्या होता है?',
    'What is contained in the "Instruction Sheet" given to students in the Heuristic Method?',
    ['समस्या और खोज करने के लिए संक्षिप्त संकेत, न कि तैयार उत्तर या निष्कर्ष', 'The problem and brief hints for investigation, never ready-made answers or conclusions'],
    [
      ['संपूर्ण प्रयोग के निष्कर्ष व रटने योग्य उत्तर', 'Complete experiment conclusions and memorizable answers'],
      ['केवल परीक्षा की तिथि', 'Only the exam date'],
      ['रंग-बिरंगे कार्टून चित्र केवल मनोरंजन हेतु', 'Cartoons solely for entertainment'],
    ],
    'आर्मस्ट्रांग की ह्यूरिस्टिक विधि में छात्र को समस्या-पत्रक मिलता है जिसके आधार पर वह स्वयं प्रयोग की रूपरेखा बनाकर अवलोकन व निष्कर्ष दर्ज करता है।',
    'In Armstrong’s heuristic method, the sheet poses the problem and safety/procedural hints while requiring the learner to investigate and record findings.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य विधियाँ',
    '"प्रत्यक्ष अनुभव, प्रतिमान, नाटकीय अनुभव, प्रदर्शन, भ्रमण, प्रदर्शनी, चलचित्र, रेडियो, दृश्य प्रतीक, शाब्दिक प्रतीक"— यह प्रसिद्ध "अनुभव शंकु" (Cone of Experience) किसने दिया?',
    'Who proposed the famous "Cone of Experience" ranging from direct purposeful experiences to verbal symbols?',
    ['एडगर डेल (Edgar Dale)', 'Edgar Dale'],
    [
      ['बी.एस. ब्लूम', 'B.S. Bloom'],
      ['रॉबर्ट मेगर', 'Robert Mager'],
      ['हरबर्ट स्पेंसर', 'Herbert Spencer'],
    ],
    'एडगर डेल (1946) ने "Audio-Visual Methods in Teaching" में अनुभव शंकु प्रस्तुत किया, जिसके अनुसार शंकु के आधार (प्रत्यक्ष अनुभव) पर अधिगम सर्वाधिक स्थायी और शीर्ष (केवल शाब्दिक प्रतीक) पर सबसे अमूर्त होता है।',
    'Edgar Dale (1946) introduced the Cone of Experience, showing that direct purposeful experiences at the base offer the richest concrete grounding compared to abstract verbal symbols at the apex.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य विधियाँ',
    'एडगर डेल के अनुभव शंकु (Cone of Experience) के अनुसार सबसे अधिक मूर्त और प्रत्यक्ष अनुभव शंकु के किस भाग में स्थित होते हैं?',
    'According to Edgar Dale’s Cone of Experience, where are the most concrete and direct experiences located?',
    ['शंकु के सबसे निचले आधार (Base) पर', 'At the broad base (bottom) of the cone'],
    [
      ['शंकु के सबसे ऊपरी शीर्ष (Apex) पर', 'At the top apex of the cone'],
      ['शंकु के ठीक बाहर', 'Outside the cone'],
      ['केवल दाहिनी ओर', 'Only on the right edge'],
    ],
    'शंकु का चौड़ा आधार "प्रत्यक्ष सोद्देश्य अनुभव" (Direct Purposeful Experiences) को दर्शाता है, जबकि सबसे ऊपरी नोक "शाब्दिक प्रतीकों" (केवल सुनना/पढ़ना) को दर्शाती है।',
    'The wide base represents Direct Purposeful Experiences, whereas the narrow apex represents abstract Verbal Symbols.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 1 के बच्चों को "जंगली और पालतू जानवरों" के बीच अंतर सिखाने हेतु सबसे प्रभावी गतिविधि क्या होगी?',
    'What would be the most effective activity to teach Class 1 children the difference between "wild and domestic animals"?',
    ['जानवरों के चित्र-कार्ड/खिलौने देकर बच्चों से दो अलग टोकरियों (जंगल और घर) में छंटवाना व चर्चा करना', 'Giving animal picture-cards/toys and having children sort them into two baskets (forest and home) with discussion'],
    [
      ['श्यामपट्ट पर 20 जानवरों के वैज्ञानिक नाम लिखवाना', 'Writing scientific names of 20 animals on the board'],
      ['बच्चों से केवल किताब का पन्ना खोलकर चुप रहने को कहना', 'Asking children to open the page and stay silent'],
      ['बच्चों को बिना चित्र के परिभाषा रटाना', 'Making them memorize definitions without pictures'],
    ],
    'छंटाई (Sorting) और वर्गीकरण खेल में बच्चे चित्र व खिलौने देखकर अपने परिवेश के अनुभव (गाय घर में, शेर जंगल में) के आधार पर अवधारणा पक्की करते हैं।',
    'Sorting animal cards or toy figures engages hands-on classification grounded in children’s familiar observations.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक पाठ के अंत में बच्चों से कहता है— "आज हमने जो सीखा, उनमें से कोई दो नई बातें अपनी कॉपी में लिखो या चित्र बनाओ और एक ऐसा सवाल लिखो जो अभी भी तुम्हारे मन में है।" यह किस प्रविधि का उदाहरण है?',
    'At the end of a lesson, a teacher asks students: "Write or draw two new things you learned today and one question you still have." Which technique is this?',
    ['एग्जिट टिकट (Exit Ticket) रचनात्मक आकलन प्रविधि', 'Exit Ticket formative assessment technique'],
    [
      ['योगात्मक वार्षिक परीक्षा', 'Summative annual examination'],
      ['निगमन अनुबंधन', 'Deductive conditioning'],
      ['कठोर दंड प्रणाली', 'Strict punishment system'],
    ],
    'एग्जिट टिकट या 3-2-1 चिंतन प्रविधि से शिक्षक को तुरंत पता चलता है कि कक्षा ने क्या सीखा और किस बिंदु पर छात्रों को अभी भी भ्रम या जिज्ञासा है।',
    'An Exit Ticket quickly reveals what students grasped and what misconceptions or curiosities remain to guide the next lesson.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक कक्षा में छात्र प्रोजेक्ट के दौरान आपस में सामग्री बांटने को लेकर झगड़ने लगे। शिक्षक के रूप में आपकी सबसे उचित प्रतिक्रिया क्या होगी?',
    'During a group project, students start arguing over sharing materials. As a teacher, what is your most appropriate response?',
    ['दोनों पक्षों की बात सुनकर बारी-बारी उपयोग व भूमिका विभाजन की नियम-व्यवस्था मिलकर तय कराना', 'Listen to both sides and collaboratively help them set a fair turn-taking and role plan'],
    [
      ['पूरे समूह का प्रोजेक्ट फाड़कर सबको शून्य अंक दे देना', 'Tear up the group’s project and give everyone zero'],
      ['पूरी कक्षा में प्रोजेक्ट विधि हमेशा के लिए बंद कर देना', 'Ban project work forever in the class'],
      ['सबसे कमजोर छात्र को समूह से बाहर निकाल देना', 'Remove the weakest student from the group'],
    ],
    'समूह कार्य का एक प्रमुख उद्देश्य सामाजिक समायोजन व संघर्ष समाधान सिखाना भी है; न्यायपूर्ण भूमिका विभाजन बच्चों को सहयोगी बनाता है।',
    'Resolving conflicts peacefully and establishing fair roles is a vital social learning goal of group project work.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    'कक्षा में "हस्तक्षेप-रहित प्रश्न" की अपेक्षा "संरचित व क्रमबद्ध प्रश्न" क्यों अधिक प्रभावी होते हैं?',
    'Why are "structured and sequenced questions" more effective than random questions in a classroom?',
    ['वे विद्यार्थियों की सोच को धीरे-धीरे सरल से जटिल व निष्कर्ष की ओर ले जाते हैं', 'They scaffold student thinking gradually from simple recall toward complex conclusions'],
    [
      ['उनसे छात्र भ्रमित होकर चुप हो जाते हैं', 'They confuse students into silence'],
      ['उन्हें पूछने में शिक्षक को कुछ सोचना नहीं पड़ता', 'The teacher needs zero preparation for them'],
      ['वे केवल अनुशासनहीनता बढ़ाते हैं', 'They only increase indiscipline'],
    ],
    'क्रमबद्ध प्रश्न सीढ़ी की तरह काम करते हैं—पहला प्रश्न आधार रखता है और अगले प्रश्न चिंतन के स्तर को ऊँचा उठाते हैं।',
    'Sequenced questions act like stepping stones, building a foundation first and progressively elevating the level of student reasoning.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण के "अवधि-विभाजन" में सबसे अधिक समय किस चरण को दिया जाता है?',
    'In the time allocation of the NCERT Micro-teaching cycle, which step gets the longest duration?',
    ['पुनः पाठ योजना (Re-plan) — 12 मिनट', 'Re-plan — 12 minutes'],
    [
      ['शिक्षण (Teach) — 6 मिनट', 'Teach — 6 minutes'],
      ['प्रतिपुष्टि (Feedback) — 6 मिनट', 'Feedback — 6 minutes'],
      ['पुनः शिक्षण (Re-teach) — 6 मिनट', 'Re-teach — 6 minutes'],
    ],
    '36 मिनट के कुल चक्र में पुनः पाठ योजना को 12 मिनट इसलिए दिए जाते हैं ताकि प्रशिक्षु मिली प्रतिपुष्टि का विश्लेषण कर उदाहरण, प्रश्न या प्रस्तुति में सुधार कर सके।',
    'Re-plan gets 12 minutes out of 36 so the trainee has sufficient time to reflect on feedback and redesign the mini-lesson.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    '"श्यामपट्ट कौशल" में "मुख्य बिंदुओं को रेखांकित करना" (Underlining / Boxing) क्यों आवश्यक है?',
    'Why is "underlining or boxing key points" important in Blackboard Writing Skill?',
    ['यह विद्यार्थियों का ध्यान सबसे महत्वपूर्ण शब्दों व सूत्रों पर केंद्रित करता है', 'It focuses students’ attention on the most critical terms and formulas'],
    [
      ['इससे चॉक जल्दी खत्म होता है', 'It finishes chalk quickly'],
      ['इससे श्यामपट्ट काला के बजाय सफेद दिखता है', 'It makes the board look white instead of black'],
      ['इससे छात्र लिखना बंद कर देते हैं', 'It makes students stop writing'],
    ],
    'सारांश के भीतर प्रमुख शब्दों को रेखांकित करने या बॉक्स में रखने से दृश्य पदानुक्रम (Visual hierarchy) बनता है और स्मरण सरल होता है।',
    'Underlining or boxing key terms creates visual hierarchy, helping learners spot core takeaways effortlessly.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'एक शिक्षक जब कठिन वैज्ञानिक सिद्धांत को समझाने के लिए किसी परिचित दैनिक वस्तु से उसकी तुलना करता है (जैसे मानव हृदय की तुलना पानी के पंप से), तो वह किस युक्ति का प्रयोग कर रहा है?',
    'When a teacher compares a complex scientific concept to a familiar everyday object (e.g., human heart to a water pump), which technique is used?',
    ['सादृश्य / उपमा दृष्टांत (Analogy)', 'Analogy / Simile Illustration'],
    [
      ['श्यामपट्ट विभाजन', 'Blackboard Partitioning'],
      ['पुनरावृत्ति मूल्यांकन', 'Recapitulation Test'],
      ['दंडात्मक संकेत', 'Punitive Cue'],
    ],
    'दृष्टांत कौशल के अंतर्गत सादृश्य (Analogy) का प्रयोग अपरिचित व अदृश्य प्रक्रियाओं को परिचित कार्यप्रणाली से जोड़कर अत्यंत स्पष्ट बना देता है।',
    'Using an analogy bridges an unfamiliar abstract mechanism to an everyday device students already understand.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'रेखीय (Linear) और शाखीय (Branching) अभिक्रमित अनुदेशन में मुख्य अंतर क्या है?',
    'What is the main difference between Linear and Branching Programmed Instruction?',
    ['रेखीय में सभी छात्र एक ही क्रम से बढ़ते हैं, जबकि शाखीय में गलत उत्तर देने पर छात्र उपचारात्मक शाखा में जाता है', 'In Linear, all learners follow the same fixed path, whereas in Branching, errors route learners to remedial frames'],
    [
      ['रेखीय में पुस्तक का उपयोग होता है, शाखीय में केवल चॉक का', 'Linear uses books, Branching uses only chalk'],
      ['रेखीय क्राउडर ने दिया और शाखीय स्किनर ने', 'Linear was given by Crowder and Branching by Skinner'],
      ['शाखीय में कोई प्रश्न नहीं पूछे जाते', 'No questions are asked in Branching'],
    ],
    'स्किनर के रेखीय मॉडल में त्रुटि न्यूनतम रखने के लिए छोटे-छोटे पदों का एकल मार्ग होता है; क्राउडर के शाखीय मॉडल में त्रुटि को निदान का माध्यम मानकर अलग उपचारात्मक फ्रेम दिया जाता है।',
    'Skinner’s linear program keeps everyone on one small-step sequence to minimize errors; Crowder’s branching program uses errors diagnostically to route learners to remedial explanations.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य विधियाँ',
    '"पूल-आउट" (Pull-out) की अपेक्षा "समावेशी सह-शिक्षण" (Inclusive Co-teaching) को आधुनिक शिक्षण में क्यों प्राथमिकता दी जाती है?',
    'Why is "Inclusive Co-teaching" preferred over "Pull-out" instruction in modern pedagogy?',
    ['यह विशेष आवश्यकता वाले बच्चों को अलग-थलग किए बिना मुख्यधारा की कक्षा में साथ सीखने का अवसर देती है', 'It allows children with special needs to learn alongside peers in the mainstream classroom without stigma or isolation'],
    [
      ['इसमें विशेष शिक्षक को कोई कार्य नहीं करना पड़ता', 'The special educator has nothing to do in it'],
      ['इसमें केवल सामान्य बच्चों पर ध्यान दिया जाता है', 'Only non-disabled children receive attention'],
      ['इसमें कक्षा का समय आधा कर दिया जाता है', 'Class time is cut in half'],
    ],
    'समावेशी सह-शिक्षण में सामान्य व विशेष शिक्षक मिलकर ही एक कक्षा में विविध आवश्यकताओं की पूर्ति करते हैं, जिससे अलगाव की भावना नहीं आती।',
    'In inclusive co-teaching, general and special educators collaborate within the same classroom, supporting diverse needs without isolating learners.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'गद्य पाठ पढ़ाते समय "मॉडल पठन" (आदर्श वाचन) सर्वप्रथम किसके द्वारा किया जाता है?',
    'While teaching a prose lesson, who performs "Model Reading" (Adarsh Vachan) first?',
    ['शिक्षक द्वारा', 'By the teacher'],
    [
      ['कक्षा के सबसे कमजोर छात्र द्वारा', 'By the weakest student in class'],
      ['प्रधानाचार्य द्वारा', 'By the principal'],
      ['पूरी कक्षा द्वारा एक साथ शोर मचाकर', 'By the whole class shouting together'],
    ],
    'शिक्षक पहले उचित आरोह-अवरोह, गति, विराम चिह्नों और शुद्ध उच्चारण के साथ आदर्श वाचन करता है, जिसके पश्चात विद्यार्थी अनुकरण वाचन करते हैं।',
    'The teacher first models fluent reading with correct pronunciation, pause, and intonation, followed by students’ imitation reading.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'प्राथमिक गणित शिक्षण में "अनुमान लगाना" (Estimation) सिखाने का क्या महत्व है?',
    'What is the importance of teaching "Estimation" in primary mathematics?',
    ['यह बच्चों में संख्या-बोध (Number Sense) और उत्तर की व्यावहारिक सटीकता जांचने की क्षमता विकसित करता है', 'It develops number sense and the ability to check the reasonableness of calculated answers'],
    [
      ['यह बच्चों को गलत गणना करना सिखाता है', 'It teaches children to calculate wrongly'],
      ['इससे गिनती सीखने की जरूरत खत्म हो जाती है', 'It removes the need to learn counting'],
      ['यह केवल परीक्षा में तुक्का लगाने के काम आता है', 'It is only useful for guessing in exams'],
    ],
    'जैसे 49 + 52 का योग लगभग 100 होगा—यह अनुमान कौशल दैनिक जीवन (बाजार में खरीदारी) और गणना में बड़ी त्रुटि पकड़ने में अत्यंत उपयोगी है।',
    'Estimating (e.g., 49 + 52 ≈ 100) strengthens number sense, aids everyday mental math, and helps spot gross calculation mistakes.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"मूल्यांकन के लिए अधिगम" में "पोर्टफोलियो" (Portfolio) तकनीक किस प्रकार की शिक्षण-अधिगम विधि का हिस्सा है?',
    'In modern assessment-integrated pedagogy, what is the "Portfolio" technique?',
    ['समय के साथ छात्र के सर्वोत्तम कार्यों, प्रगति व प्रयासों का व्यवस्थित संकलन', 'A systematic collection of a student’s work samples showing progress, effort, and growth over time'],
    [
      ['केवल वर्ष के अंत की एक अंकतालिका', 'Only a single year-end marksheet'],
      ['शिक्षक की निजी डायरी जिसमें वेतन लिखा हो', 'The teacher’s personal salary diary'],
      ['बिना जांचे फेंके गए पुराने रफ कागज', 'Unchecked scrap papers thrown away'],
    ],
    'पोर्टफोलियो में चित्र, निबंध, प्रोजेक्ट, स्व-आकलन आदि रखे जाते हैं, जिससे विद्यार्थी की क्रमिक प्रगति का समग्र प्रमाण मिलता है।',
    'A portfolio compiles drawings, essays, projects, and reflections over time, offering holistic evidence of a learner’s growth trajectory.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में अनुशासन बनाए रखने के लिए निम्नलिखित में से कौन-सा उपाय "सकारात्मक कक्षा प्रबंधन" के अंतर्गत आता है?',
    'Which of the following measures for maintaining classroom order falls under "Positive Classroom Management"?',
    ['छात्रों की सहभागिता से स्पष्ट कक्षा-नियम बनाना एवं अच्छे व्यवहार को प्रोत्साहित करना', 'Co-creating clear classroom norms with students and reinforcing positive behavior'],
    [
      ['गलती करने पर कक्षा के सामने मुर्गा बनाना', 'Giving physical stress positions in front of the class'],
      ['माता-पिता को बुलाकर बच्चे को विद्यालय से निकलवाने की धमकी देना', 'Threatening expulsion in front of parents'],
      ['लगातार डंडे का भय दिखाना', 'Constantly showing the stick to instill fear'],
    ],
    'RTE अधिनियम 2009 शारीरिक दंड को प्रतिबंधित करता है। बच्चों के साथ मिलकर नियम तय करने, रोचक पाठ पढ़ाने और अच्छे व्यवहार की प्रशंसा करने से स्वतः आत्मानुशासन बनता है।',
    'Corporal punishment is banned under RTE 2009. Co-creating clear norms, engaging lessons, and positive reinforcement build genuine self-discipline.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं अन्वेषण',
    'प्राथमिक कक्षा में "प्रकृति भ्रमण" (Nature Walk) का आयोजन करते समय शिक्षक को किस प्रकार की तैयारी करनी चाहिए?',
    'What preparation should a teacher make when organizing a "Nature Walk" for primary students?',
    ['स्पष्ट उद्देश्य व सुरक्षा निर्देश तय कर बच्चों को अवलोकन बिंदु (पत्ती, कीट, आवाज) देना', 'Set clear learning objectives and safety norms, and give observation prompts (leaves, insects, sounds)'],
    [
      ['बिना किसी सूचना के बच्चों को सड़क पर छोड़ देना', 'Letting children wander onto the road without supervision'],
      ['बच्चों से कहना कि केवल चुपचाप सिर नीचे करके चलें', 'Telling children to walk silently looking down'],
      ['अवलोकन के बिना तुरंत वापस आकर गणित का टेस्ट लेना', 'Returning immediately without observation to take a math test'],
    ],
    'सरल अवलोकन बिंदुओं (जैसे तीन अलग आकार की पत्तियाँ देखना, पक्षियों की आवाज सुनना) के साथ सुरक्षित भ्रमण बच्चों की वैज्ञानिक जिज्ञासा को तीव्र करता है।',
    'Guided observation prompts paired with safety planning turn a simple walk into a rich scientific inquiry experience.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 4 के एक बच्चे ने कहा—"मैडम, चाँद हमारे साथ-साथ चलता है जब हम गाड़ी में जाते हैं।" इस बाल-सुलभ भ्रांति (Misconception) पर शिक्षिका को कैसी प्रतिक्रिया देनी चाहिए?',
    'A Class 4 child says, "Ma’am, the moon walks along with us when we travel in a vehicle." How should the teacher respond to this childlike misconception?',
    ['बच्चे के अवलोकन की सराहना कर कक्षा में पास और दूर की वस्तुओं के साथ गतिविधि द्वारा कारण स्पष्ट करना', 'Appreciate the child’s observation and use an activity with near and far objects to explain why it seems so'],
    [
      ['हंसते हुए कहना कि "इतनी सी बात नहीं समझते, चाँद बहुत बड़ा है"', 'Laugh and say "You don’t even know this much"'],
      ['बच्चे को चुप करा देना कि यह पाठ किताब में नहीं है', 'Silence the child saying it is not in the book'],
      ['कह देना कि हाँ, चाँद सचमुच तुम्हारी गाड़ी के पीछे दौड़ता है', 'Agree that the moon really runs behind the vehicle'],
    ],
    'बच्चे का यह कहना उसके सूक्ष्म अवलोकन को दर्शाता है। पास के पेड़ और दूर की पहाड़ी/चाँद की तुलना करके पैरालैक्स (लंबन) का सरल अनुभव कराने से वैज्ञानिक समझ बनती है।',
    'Validating the child’s keen observation and demonstrating relative motion using near vs. distant objects builds authentic scientific understanding.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि किसी दिन विद्यालय में बिजली नहीं है और स्मार्ट बोर्ड काम नहीं कर रहा है, तो एक कुशल शिक्षक को क्या करना चाहिए?',
    'If there is a power outage at school and the smart board is not working, what should a skilled teacher do?',
    ['तुरंत वैकल्पिक निम्न-लागत सामग्री, ब्लैकबोर्ड, कहानी या गतिविधि से शिक्षण को सुचारु रखना', 'Immediately switch smoothly to blackboard, low-cost TLMs, storytelling, or interactive activities'],
    [
      ['बिजली आने तक कक्षा में खाली बैठे रहना', 'Sit idle until power returns'],
      ['बच्चों को घर भेज देना', 'Send children home'],
      ['अध्यापक कक्ष में जाकर समाचार पत्र पढ़ना', 'Go to the staffroom and read a newspaper'],
    ],
    'अच्छा शिक्षक तकनीक का दास नहीं होता; उसकी पाठ तैयारी में सदैव वैकल्पिक शिक्षण विधियाँ व सहज संसाधन (Plan B) उपलब्ध रहते हैं।',
    'An adaptable teacher never stalls when technology fails; alternative low-tech TLMs, blackboard visuals, and interactive tasks keep learning uninterrupted.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'संवाद या नाटक विधि से भाषा सीखने में सबसे बड़ा लाभ क्या होता है?',
    'What is the greatest benefit of learning language through dialogue or drama methods?',
    ['बच्चे संदर्भ के अनुसार स्वाभाविक लहजे, विराम व शारीरिक भाषा सहित बोलना सीखते हैं', 'Children learn to speak with natural intonation, pauses, and body language suited to context'],
    [
      ['बच्चे केवल शब्दकोश रटना सीखते हैं', 'Children learn only to memorize dictionaries'],
      ['बच्चे बिना सुने बोलना सीखते हैं', 'Children learn to speak without listening'],
      ['केवल विराम चिह्नों के नाम याद होते हैं', 'Only names of punctuation marks are memorized'],
    ],
    'संवाद और नाटक में भाषा जीवंत रूप में प्रयुक्त होती है, जिससे सुनने, बोलने और भाव-प्रकाशन का स्वाभाविक अभ्यास होता है।',
    'Dialogue and drama bring language to life in real social contexts, naturally training listening, speaking, and expressive tone.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'निम्नलिखित में से किस विधि को "मनोवैज्ञानिक विधि" कहा जाता है जबकि उसके पूरक को "तार्किक प्रस्तुतीकरण विधि"?',
    'Which method is termed a "psychological method" while its counterpart is termed a "logical presentation method"?',
    ['आगमन विधि (मनोवैज्ञानिक) तथा निगमन विधि (तार्किक प्रस्तुतीकरण)', 'Inductive Method (psychological) and Deductive Method (logical presentation)'],
    [
      ['व्याख्यान विधि तथा भाषण विधि', 'Lecture method and Speech method'],
      ['श्रुतलेख विधि तथा नकल विधि', 'Dictation method and Copying method'],
      ['दंड विधि तथा भय विधि', 'Punishment method and Fear method'],
    ],
    'आगमन विधि बालक की जिज्ञासा, निरीक्षण और अनुभव के प्राकृतिक क्रम का अनुसरण करती है (अतः मनोवैज्ञानिक), जबकि निगमन स्थापित तर्क पर सीधे आगे बढ़ती है।',
    'The inductive method follows the child’s natural psychological path of observation and discovery, while the deductive method presents established logical structure directly.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"ब्लूम का निपुणता अधिगम मॉडल" (Mastery Learning Model) किस शिक्षण विश्वास पर टिका है?',
    'What educational belief underlies Bloom’s "Mastery Learning Model"?',
    ['यदि उचित समय व गुणवत्तापूर्ण सुधारात्मक शिक्षण मिले, तो लगभग सभी छात्र निर्धारित दक्षता प्राप्त कर सकते हैं', 'Given sufficient time and quality corrective instruction, nearly all students can master the learning objectives'],
    [
      ['केवल 10% जन्मजात प्रतिभाशाली बच्चे ही सीख सकते हैं', 'Only 10% born geniuses can learn'],
      ['परीक्षा का उद्देश्य केवल छात्रों को छांटना और फेल करना है', 'Exams exist solely to sort and fail students'],
      ['सभी बच्चों को ठीक एक ही गति से सीखना चाहिए बिना किसी मदद के', 'All children must learn at the exact same speed with no help'],
    ],
    'बेंजामिन ब्लूम (1968) के निपुणता अधिगम में प्रारंभिक शिक्षण के बाद रचनात्मक जांच होती है और जिन्हें कठिनाई हो उन्हें उपचारात्मक सहायता (Correctives) दी जाती है।',
    'Benjamin Bloom’s Mastery Learning uses formative checks and targeted corrective loops so virtually all learners reach mastery.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    '"गृहकार्य कौशल" (Skill of Giving Assignments) के अनुसार प्राथमिक स्तर पर गृहकार्य कैसा होना चाहिए?',
    'According to the "Skill of Giving Assignments", how should homework be at the primary level?',
    ['सीखे गए पाठ से जुड़ा, संक्षिप्त, रोचक, स्पष्ट निर्देशों वाला एवं बिना अभिभावकों पर बोझ डाले स्वयं कर सकने योग्य', 'Linked to classwork, brief, engaging, clearly instructed, and doable independently without burdening parents'],
    [
      ['अत्यधिक लंबा जिससे बच्चा रात 11 बजे तक लिखता रहे', 'So lengthy that the child writes until 11 PM'],
      ['ऐसा कठिन कार्य जिसे केवल माता-पिता या ट्यूटर हल कर सकें', 'So hard that only parents or tutors can solve it'],
      ['सजा के रूप में 10 पेज नकल लिखने वाला', '10 pages of copying given as punishment'],
    ],
    'उचित गृहकार्य कक्षा-अधिगम को पुष्ट करता है, न कि बच्चे के खेल और आराम के समय को छीनता है।',
    'Effective homework reinforces classroom learning independently while preserving the child’s time for rest and play.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान विधि',
    'कक्षा में समस्या-समाधान कौशल विकसित करने के लिए शिक्षक को प्रश्नों का चयन कैसे करना चाहिए?',
    'How should a teacher select problems to develop problem-solving skills in class?',
    ['ऐसे प्रश्न जो वास्तविक जीवन से जुड़े हों और जिनमें एक से अधिक चरण या चिंतन की आवश्यकता हो', 'Problems linked to real life requiring multi-step reasoning rather than single-step recall'],
    [
      ['केवल एक शब्द में रटे उत्तर वाले प्रश्न', 'Only one-word rote recall questions'],
      ['ऐसे प्रश्न जिनका हल पहले से ब्लैकबोर्ड पर लिखा हो', 'Questions whose answers are already on the board'],
      ['बच्चों के स्तर से अत्यंत ऊँचे विश्वविद्यालयी प्रश्न', 'University-level problems far beyond learners’ level'],
    ],
    'मध्यम चुनौती (Zone of Proximal Development) वाले वास्तविक जीवन के प्रश्न बच्चों में विश्लेषण, योजना और समाधान कौशल को निखारते हैं।',
    'Moderately challenging real-world problems within the learners’ Zone of Proximal Development sharpen planning and analytical skills.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में नया पाठ पढ़ाने के तुरंत बाद कहता है— "चलिए, अब आप अपने पड़ोसी साथी को 1 मिनट में बताइए कि आज हमने सबसे मुख्य बात क्या सीखी।" यह किस गतिविधि का उदाहरण है?',
    'Right after teaching a concept, a teacher says, "Turn to your partner and explain in 1 minute the main thing we learned today." Which activity is this?',
    ['सहपाठी पुनर्कथन (Turn and Talk / Peer Summarizing)', 'Turn and Talk / Peer Summarizing'],
    [
      ['एकतरफा व्याख्यान', 'One-way lecturing'],
      ['दंडात्मक परीक्षण', 'Punitive testing'],
      ['श्रुतलेख अभ्यास', 'Dictation practice'],
    ],
    '"टर्न एंड टॉक" तकनीक में हर विद्यार्थी को सक्रिय रूप से बोलने, विचारों को संगठित करने और सहपाठी से अपनी समझ जांचने का अवसर मिलता है।',
    'Turn-and-Talk ensures every single student actively verbalizes, organizes, and cross-checks their understanding with a partner.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    '"तंबोला या बिंगो" खेल का उपयोग प्राथमिक कक्षा में किस शिक्षण उद्देश्य से किया जा सकता है?',
    'For which teaching purpose can a "Tambola / Bingo" game be used in primary classes?',
    ['अंक पहचान, शब्द पहचान, विलोम शब्द व मानसिक जोड़-गुणा का रोचक अभ्यास कराने हेतु', 'For engaging practice of number/word recognition, antonyms, and mental addition/multiplication'],
    [
      ['बच्चों को जुआ खेलना सिखाने हेतु', 'To teach children gambling'],
      ['कक्षा में अनुशासन भंग करने हेतु', 'To disrupt classroom discipline'],
      ['केवल खाली समय काटने हेतु बिना किसी लक्ष्य के', 'Merely to pass idle time without learning goals'],
    ],
    'शब्द-बिंगो या गुणनफल-बिंगो जैसे शैक्षिक खेलों से कठिन व उबाऊ अभ्यास भी अत्यंत उत्साहजनक बन जाता है।',
    'Educational Bingo (word bingo, multiplication bingo) turns repetitive recognition and mental math drills into exciting play.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सी विधि "अमूर्त विषयों" (जैसे दर्शन या उच्च स्तरीय नैतिक तर्क) की अपेक्षा "मूर्त व व्यावहारिक कौशलों" के शिक्षण के लिए कम उपयुक्त है?',
    'Which method is relatively well-suited for abstract philosophical discourse but poorly suited for teaching hands-on practical skills to primary children?',
    ['शुद्ध व्याख्यान विधि', 'Pure Lecture Method'],
    [
      ['प्रदर्शन एवं अभ्यास विधि', 'Demonstration-cum-Practice Method'],
      ['प्रोजेक्ट विधि', 'Project Method'],
      ['प्रयोगशाला विधि', 'Laboratory Method'],
    ],
    'व्याख्यान अमूर्त विचारों का संक्षिप्त विवरण तो दे सकता है, पर व्यावहारिक कौशल (जैसे पौधा लगाना, उपकरण चलाना, लिखना) करके देखने व अभ्यास से ही आते हैं।',
    'Lectures can outline abstract ideas, but hands-on practical skills require demonstration, manipulation, and guided practice.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'कक्षा में "श्रुतलेख" (Dictation) का मुख्य शैक्षिक उद्देश्य क्या होता है?',
    'What is the main educational objective of "Dictation" in the language classroom?',
    ['सचेत श्रवण, शुद्ध वर्तनी, विराम चिह्नों का सही प्रयोग एवं लेखन गति विकसित करना', 'Developing attentive listening, accurate spelling, proper punctuation usage, and writing fluency'],
    [
      ['बच्चों की उंगलियां थकाकर उन्हें शांत बैठाना', 'Tiring children’s fingers to keep them quiet'],
      ['केवल शिक्षक की आवाज की जांच करना', 'Only testing the teacher’s voice'],
      ['नकल करने की आदत डालना', 'Instilling copying habits'],
    ],
    'श्रुतलेख (सुनकर लिखना) में विद्यार्थी ध्वनि को सुनकर सही लिपि चिह्न व मात्राओं में बदलता है और संदर्भानुसार विराम चिह्न लगाता है।',
    'Dictation connects attentive listening to accurate orthography, punctuation awareness, and writing fluency.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'पुनर्बलन कौशल में "छात्र के सही उत्तर को श्यामपट्ट पर लिखना" किस प्रकार का पुनर्बलन है?',
    'Writing a student’s correct answer on the blackboard is which type of reinforcement?',
    ['धनात्मक अशाब्दिक पुनर्बलन (अतिरिक्त संकेतक के रूप में)', 'Positive Non-verbal Reinforcement (as a visual token of recognition)'],
    [
      ['ऋणात्मक अशाब्दिक पुनर्बलन', 'Negative Non-verbal Reinforcement'],
      ['शारीरिक दंड', 'Corporal Punishment'],
      ['अधिगम अवरोध', 'Learning Barrier'],
    ],
    'छात्र के उत्तर या विचार को बोर्ड पर स्थान देने से छात्र को गहरा सम्मान व प्रोत्साहन मिलता है, जो एक सशक्त सकारात्मक अशाब्दिक पुनर्बलन है।',
    'Recording a student’s contribution on the board validates their thinking and acts as strong positive non-verbal reinforcement.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पुनः प्रतिपुष्टि" (Re-feedback) क्यों आवश्यक है?',
    'Why is "Re-feedback" necessary in Micro-teaching?',
    ['यह जांचने के लिए कि पुनः नियोजन और पुनः शिक्षण के बाद छात्राध्यापक के कौशल में कितना सुधार हुआ', 'To assess how much the trainee improved the skill after re-planning and re-teaching'],
    [
      ['छात्राध्यापक को दोबारा उसी बात के लिए डांटने हेतु', 'To scold the trainee again for the same thing'],
      ['36 मिनट की घड़ी बंद करने हेतु', 'To stop the 36-minute timer'],
      ['केवल औपचारिक हस्ताक्षर करने हेतु', 'Merely for formal signatures'],
    ],
    'पुनः प्रतिपुष्टि से छात्राध्यापक को अपनी प्रगति की पुष्टि मिलती है और यदि कोई सूक्ष्म कमी शेष हो, तो उसका भी निवारण हो जाता है।',
    'Re-feedback confirms measurable improvement in skill execution and highlights any remaining fine-tuning needed.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं सहकारिता',
    'यदि एक कक्षा में प्रोजेक्ट के दौरान केवल एक ही मेधावी छात्र सारा काम कर ले रहा है और बाकी सदस्य बैठे देख रहे हैं, तो इस दोष को दूर करने के लिए शिक्षक को क्या करना चाहिए?',
    'If one bright student ends up doing all the work in a group project while others sit idle, what should the teacher do?',
    ['समूह के प्रत्येक सदस्य को स्पष्ट व्यक्तिगत भूमिका (जैसे सामग्री, चित्र, लेखन, प्रस्तुति) सौंपकर व्यक्तिगत उत्तरदायित्व तय करना', 'Assign clear individual roles (materials, illustration, writing, presenting) to ensure individual accountability'],
    [
      ['उस मेधावी छात्र को ही पूरे समूह के अंक दे देना', 'Give the whole group’s marks solely to that bright student'],
      ['बाकी छात्रों को समूह से निकाल देना', 'Expel the other students from the group'],
      ['प्रोजेक्ट के बजाय व्यक्तिगत रटंत टेस्ट ले लेना', 'Replace the project with an individual rote test'],
    ],
    'सहकारी अधिगम (जॉनसन एवं जॉनसन) के दो आधार स्तंभ "सकारात्मक अंतर्निर्भरता" और "व्यक्तिगत उत्तरदायित्व" हैं। स्पष्ट भूमिका देने से कोई भी छात्र निष्क्रिय (Free-rider) नहीं रहता।',
    'Cooperative learning (Johnson & Johnson) relies on positive interdependence and individual accountability; defined roles prevent social loafing.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक विज्ञान शिक्षिका कक्षा में "चुंबक के गुण" पढ़ा रही हैं। वे पहले चुंबक की परिभाषा लिखाने के बजाय बच्चों के समूह को चुंबक और कील, रबर, सिक्का, पेंसिल देकर जांचने को कहती हैं कि क्या चिपकता है और क्या नहीं। यह कौन-सी विधि है?',
    'Teaching "Properties of Magnets", a science teacher gives groups magnets along with nails, erasers, coins, and pencils to test what sticks instead of dictating definitions first. Which method is this?',
    ['आगमन एवं अन्वेषण (करके सीखने) विधि', 'Inductive and Discovery (Learning by Doing) Method'],
    [
      ['निगमन एवं व्याख्यान विधि', 'Deductive and Lecture Method'],
      ['श्रुतलेख एवं अभ्यास विधि', 'Dictation and Drill Method'],
      ['डाल्टन ठेका विधि', 'Dalton Contract Method'],
    ],
    'बच्चे स्वयं विभिन्न वस्तुओं पर प्रयोग व अवलोकन करके इस नियम तक पहुँचते हैं कि चुंबक लोहे आदि चुंबकीय पदार्थों को आकर्षित करता है—यही आगमन व अन्वेषण विधि है।',
    'Testing varied objects directly to generalize which materials are magnetic exemplifies inductive, hands-on discovery learning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"कंप्यूटर सहायक अनुदेशन" (CAI - Computer Assisted Instruction) में कंप्यूटर मुख्यतः किस रूप में कार्य करता है?',
    'In "Computer Assisted Instruction" (CAI), how does the computer primarily function?',
    ['व्यक्तिगत शिक्षक/अभ्यास सहायक के रूप में, जो तत्काल प्रतिक्रिया व स्व-गति से शिक्षण देता है', 'As an individualized tutor/practice aid providing immediate feedback and self-paced instruction'],
    [
      ['विद्यालय के शिक्षक का पूर्णतः मानवीय विकल्प बनकर संवेग सिखाने में', 'As a complete human replacement teaching empathy'],
      ['केवल छात्रों की पेंसिल छीलने वाली मशीन के रूप में', 'Merely as a mechanical gadget without interaction'],
      ['बिना किसी सॉफ्टवेयर के खाली डिब्बे के रूप में', 'As an empty box without software'],
    ],
    'CAI में इंटरैक्टिव सॉफ्टवेयर, ड्रिल, ट्यूटोरियल व सिमुलेशन द्वारा छात्र अपनी गति से अभ्यास कर तुरंत फीडबैक प्राप्त कर सकते हैं।',
    'In CAI, interactive tutorials, simulations, and drills adapt to the learner’s pace and provide immediate corrective feedback.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'प्राथमिक कक्षाओं में "पीयर ट्यूटरिंग" (Peer Tutoring / सहपाठी शिक्षण) से किसे लाभ होता है?',
    'Who benefits from "Peer Tutoring" in primary classrooms?',
    ['सिखाने वाले (Tutor) और सीखने वाले (Tutee) दोनों छात्रों को', 'Both the student tutor and the student tutee'],
    [
      ['केवल सीखने वाले कमजोर छात्र को', 'Only the weaker tutee'],
      ['केवल सिखाने वाले तेज छात्र को', 'Only the bright tutor'],
      ['दोनों में से किसी को नहीं, केवल समय नष्ट होता है', 'Neither; it merely wastes time'],
    ],
    'सिखाने के लिए बच्चे को अवधारणा को सरल शब्दों में संगठित करना पड़ता है जिससे उसकी अपनी समझ गहरी होती है, वहीं सहपाठी की सरल भाषा से दूसरे बच्चे का संकोच मिटता है।',
    'Teaching a peer forces the tutor to organize and clarify concepts deeply, while the tutee learns comfortably in relatable peer language.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उचित व्याख्या" में "अंतिम कथन" (Concluding Statement) का क्या महत्व है?',
    'What is the significance of a "Concluding Statement" in the Skill of Explaining?',
    ['यह संपूर्ण व्याख्या के मुख्य निष्कर्ष को एक संक्षिप्त व स्पष्ट सूत्र में बांधता है', 'It binds the entire explanation into a concise, clear takeaway'],
    [
      ['यह नई असंबद्ध कहानी शुरू करता है', 'It starts a new unrelated story'],
      ['यह विद्यार्थियों को भ्रमित करता है', 'It confuses students'],
      ['यह कक्षा में शोर बढ़ाता है', 'It increases noise in class'],
    ],
    'प्रारंभिक कथन की तरह अंतिम कथन भी व्याख्यान कौशल का अनिवार्य घटक है जो मुख्य निष्कर्ष को समेटकर छात्रों की स्मृति में स्थिर करता है।',
    'Just as an opening statement sets focus, a concluding statement consolidates the explanation’s core idea for lasting retention.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'जब कोई छात्र कक्षा में प्रश्न पूछने से झिझकता है, तो शिक्षक द्वारा "अरे, बहुत अच्छा सवाल पूछा! चलो सब लोग इस पर सोचते हैं"— ऐसा कहना किस कौशल व वातावरण को दर्शाता है?',
    'When a hesitant student asks a question and the teacher says, "What a great question! Let’s all think about this together"—what does this reflect?',
    ['सकारात्मक पुनर्बलन एवं जिज्ञासा-अनुकूल सुरक्षित कक्षा वातावरण', 'Positive reinforcement and a curiosity-friendly, psychologically safe classroom'],
    [
      ['श्यामपट्ट कौशल की त्रुटि', 'Error in blackboard skill'],
      ['समय बर्बाद करने की प्रवृत्ति', 'Tendency to waste time'],
      ['पाठ्यक्रम से भटकाव', 'Deviation from curriculum'],
    ],
    'प्रश्न पूछने की सराहना करने से बच्चों में पूछने का डर समाप्त होता है और पूरी कक्षा में अन्वेषण व विचारशीलता का वातावरण बनता है।',
    'Validating student questions removes fear of judgment and cultivates a psychologically safe, inquiry-driven classroom culture.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'प्राथमिक स्तर के विद्यार्थियों के लिए विश्लेषण और संश्लेषण विधियों में कौन-सी अधिक कठिन प्रतीत हो सकती है यदि उचित मार्गदर्शन न हो, और क्यों?',
    'For primary learners, why might the Analytic Method feel challenging without proper guidance?',
    ['क्योंकि इसमें किसी अज्ञात निष्कर्ष से पीछे की ओर तार्किक कड़ियों को खोजना पड़ता है', 'Because it requires tracing logical links backward from an unknown goal'],
    [
      ['क्योंकि इसमें रटना बहुत आसान होता है', 'Because rote memorization is too easy in it'],
      ['क्योंकि इसमें कोई सोचने की जरूरत नहीं होती', 'Because no thinking is needed in it'],
      ['क्योंकि इसमें केवल खेल खेला जाता है', 'Because only games are played in it'],
    ],
    'विश्लेषण विधि उच्च तार्किक चिंतन और प्रश्न पूछने ("यह क्यों और कैसे संभव है?") की मांग करती है, इसलिए प्राथमिक स्तर पर शिक्षक के छोटे-छोटे संकेतों के साथ इसे कराया जाता है।',
    'Analysis demands backward logical reasoning ("what is needed to get here?"), so younger learners benefit from structured teacher scaffolding alongside it.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'फ्रोबेल के किंडरगार्टन में "पहला उपहार" (First Gift) क्या था?',
    'What was the "First Gift" in Froebel’s Kindergarten?',
    ['प्राथमिक व द्वितीयक रंगों की 6 नरम ऊनी गेंदें (Woolen Balls)', 'Six soft woolen balls in primary and secondary colors'],
    [
      ['लकड़ी की पेंसिल और स्लेट', 'Wooden pencil and slate'],
      ['लोहे का कंपास बॉक्स', 'Iron compass box'],
      ['कागज की किताब', 'Paper textbook'],
    ],
    'फ्रोबेल का प्रथम उपहार छह रंग-बिरंगी नरम ऊन की गेंदें थीं (लाल, नारंगी, पीला, हरा, नीला, बैंगनी), जिनसे शिशु को रंग, गति, गोलाई व संख्या का प्रथम अनुभव मिलता था।',
    'Froebel’s First Gift consisted of six colored soft yarn balls (red, orange, yellow, green, blue, purple) to introduce color, motion, sphere shape, and counting.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना में "अनुबंध" (Contract) शब्द का क्या अर्थ है?',
    'What does the word "Contract" mean in the Dalton Plan?',
    ['एक माह की सभी विषयों की निर्धारित इकाइयों को पूरा करने का विद्यार्थी द्वारा लिया गया उत्तरदायित्व', 'A student’s commitment to complete one month’s assigned units across subjects'],
    [
      ['शिक्षक और अभिभावक के बीच फीस का कानूनी समझौता', 'A legal fee agreement between teacher and parent'],
      ['विद्यालय भवन बनाने का ठेका', 'A building construction contract'],
      ['परीक्षा में नकल करने का समझौता', 'An agreement to copy in exams'],
    ],
    'डाल्टन योजना में प्रत्येक छात्र एक महीने के लिए विभिन्न विषयों के कार्य-असाइनमेंट का अनुबंध लेता है और एक अनुबंध पूरा किए बिना अगले माह का अनुबंध नहीं लेता।',
    'In the Dalton Plan, a contract is a monthly set of assignments across subjects that the student commits to complete before taking the next month’s contract.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "कौशल के घटक" (Components of a Skill) निर्धारित करने का क्या लाभ है?',
    'What is the benefit of specifying "Components of a Skill" in Micro-teaching?',
    ['प्रशिक्षण, अवलोकन व प्रतिपुष्टि वस्तुनिष्ठ एवं सटीक हो जाती है', 'Training, observation, and feedback become objective, specific, and measurable'],
    [
      ['शिक्षक केवल एक ही शब्द बोल सकता है', 'The teacher can speak only one word'],
      ['छात्रों को कोई प्रश्न नहीं पूछने दिया जाता', 'Students are barred from asking questions'],
      ['पाठ योजना बनाने की जरूरत नहीं रहती', 'Lesson planning becomes unnecessary'],
    ],
    'जैसे श्यामपट्ट कौशल को अक्षर आकार, सीधी पंक्ति, उचित अंतराल आदि घटकों में बांटने से पर्यवेक्षक स्पष्ट बता पाता है कि किस विशेष पक्ष में सुधार की जरूरत है।',
    'Breaking a broad skill into observable components (e.g., letter size, spacing, alignment) makes observation and feedback objective and actionable.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'निगमन विधि के निम्नलिखित दोषों में से कौन-सा सर्वाधिक गंभीर है?',
    'Which of the following drawbacks of the Deductive Method is the most serious?',
    ['यह बालकों में बिना समझे सूत्र रटने और यांत्रिक अनुकरण की प्रवृत्ति को बढ़ावा दे सकती है', 'It can encourage rote memorization of rules and mechanical application without conceptual insight'],
    [
      ['यह बहुत कम समय लेती है', 'It takes very little time'],
      ['इसमें अभ्यास बहुत कम होता है', 'It provides too little practice'],
      ['यह उच्च कक्षाओं के लिए उपयोगी नहीं है', 'It is useless for higher classes'],
    ],
    'यदि शिक्षक सीधे सूत्र दे दे और उसका अर्थ व उत्पत्ति न समझाए, तो विद्यार्थी केवल यांत्रिक ढंग से सूत्र लगाते हैं और प्रश्न थोड़ा बदलते ही अटक जाते हैं।',
    'When formulas are given without derivation or meaning, students apply them mechanically and fail whenever problems vary slightly.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा 3 में "समानार्थी शब्द" पढ़ाते समय बच्चों से खेल-खेल में कहता है— "मैं एक शब्द बोलूँगा (जैसे जल), तुम्हें उसके दूसरे नाम (पानी, नीर) बताकर गेंद को आगे पास करना है।" यह कौन-सी विधि है?',
    'Teaching synonyms in Class 3, a teacher plays "pass the ball" where students call out another word for "Jal" (Pani, Neer) before passing the ball. Which method is this?',
    ['खेल एवं सहभागिता आधारित शिक्षण विधि', 'Play-way and participatory teaching method'],
    [
      ['व्याख्यान एवं श्रुतलेख विधि', 'Lecture and dictation method'],
      ['विश्लेषण-निगमन विधि', 'Analytic-deductive method'],
      ['अभिक्रमित अनुदेशन विधि', 'Programmed instruction method'],
    ],
    'गेंद पास करने वाले खेल से हर बच्चा सतर्क और उत्साहित रहता है तथा बिना दबाव के शब्द-भंडार का सक्रिय अभ्यास होता है।',
    'Passing the ball turns vocabulary recall into an alert, stress-free, participatory play-way experience.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा में कुछ विद्यार्थी हमेशा पहले ही प्रश्न का उत्तर चिल्लाकर दे देते हैं, जिससे धीमे सोचने वाले छात्रों को अवसर नहीं मिलता। शिक्षक को क्या रणनीति अपनानी चाहिए?',
    'Some students always shout out answers immediately, leaving slower-thinking peers no chance. What strategy should the teacher adopt?',
    ['"हाथ उठाकर बारी का इंतजार करें" नियम लागू कर पर्याप्त सोचने का समय (Wait Time) देना और सभी को बारी-बारी चुनना', 'Enforce a "raise hand and wait" norm, provide adequate wait time, and call on diverse students equitably'],
    [
      ['चिल्लाने वाले छात्रों की कॉपियाँ फाड़ देना', 'Tear notebooks of students who shout'],
      ['धीमे सोचने वाले छात्रों से कभी प्रश्न न पूछना', 'Never call on slower-thinking students'],
      ['कक्षा में प्रश्न पूछना ही बंद कर देना', 'Stop asking questions altogether'],
    ],
    'समान सहभागिता (Equitable Participation) के लिए शिक्षक शांत सोच समय (Think Time) दे, हाथ उठाने का नियम अपनाए और बिना हाथ उठाए संकोची बच्चों को भी स्नेहपूर्वक शामिल करे।',
    'Equitable participation requires think-time before responses, structured turn-taking norms, and gently inviting quieter learners.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'कविता शिक्षण की "समीक्षा विधि" (Criticism / Evaluation Method) किस स्तर के विद्यार्थियों के लिए उपयुक्त है?',
    'For which level of students is the "Criticism / Appreciation Analysis Method" of poetry suitable?',
    ['माध्यमिक एवं उच्च स्तर के विद्यार्थियों के लिए', 'Secondary and higher-level students'],
    [
      ['कक्षा 1 व 2 के विद्यार्थियों के लिए', 'Class 1 and 2 students'],
      ['आंगनवाड़ी बच्चों के लिए', 'Anganwadi children'],
      ['अक्षर ज्ञान न रखने वाले बच्चों के लिए', 'Non-literate beginners'],
    ],
    'प्राथमिक स्तर पर कविता "गीत व अभिनय विधि" से रसास्वादन हेतु पढ़ाई जाती है, जबकि छंद, अलंकार, काव्य-सौंदर्य व समीक्षा विधि उच्च कक्षाओं के लिए उपयुक्त होती है।',
    'Primary classes teach poetry through song, rhythm, and dramatization, whereas critical analysis of meter, figures of speech, and style fits secondary/higher levels.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि में शिक्षक द्वारा "अभिलेखन" (Recording) सोपान में क्या दर्ज किया जाता है?',
    'In the "Recording" step of the Project Method, what is documented?',
    ['प्रोजेक्ट के चयन से लेकर योजना, भूमिकाएँ, कठिनाइयाँ, व्यय व निष्कर्ष तक का पूरा विवरण', 'A complete record from project selection and plan to roles, challenges, expenses, and outcomes'],
    [
      ['केवल छात्रों के पिता का नाम व पता', 'Only students’ fathers’ names and addresses'],
      ['केवल विद्यालय की छुट्टियों की सूची', 'Only the school holiday list'],
      ['केवल गलत उत्तर देने वालों के नाम', 'Only names of students who answered wrongly'],
    ],
    'प्रोजेक्ट बुक में प्रक्रिया का विधिवत अभिलेखन करने से भविष्य में समीक्षा करना आसान होता है और विद्यार्थियों में व्यवस्थित दस्तावेजीकरण का कौशल आता है।',
    'Recording the complete project journey builds systematic documentation habits and supports meaningful future reflection.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'अन्य विधियाँ',
    '"मास्टरजी की छड़ी" या भय पर आधारित शिक्षण की जगह आधुनिक शिक्षणशास्त्र किस पर बल देता है?',
    'Instead of fear-based instruction, what does modern pedagogy emphasize?',
    ['भयमुक्त, आनंददायी, स्नेहपूर्ण एवं सहभागिता आधारित अधिगम परिवेश', 'A fear-free, joyful, affectionate, and participatory learning environment'],
    [
      ['कठोर मौखिक अपमान और अलगाव', 'Harsh verbal humiliation and isolation'],
      ['केवल परीक्षा केंद्रित दबाव', 'Pure exam-centric pressure'],
      ['अनुशासन के नाम पर चुप्पी थोपना', 'Enforcing silence in the name of discipline'],
    ],
    'भय और तनाव मस्तिष्क के संज्ञानात्मक कार्य को अवरुद्ध करते हैं, जबकि सुरक्षित व आनंदमय वातावरण में जिज्ञासा और सीखने की गति सर्वाधिक होती है।',
    'Fear and stress inhibit cognitive processing, whereas a safe, joyful, supportive climate maximizes curiosity and learning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि आपकी कक्षा में विभिन्न भाषाई पृष्ठभूमि के बच्चे हैं (जैसे अवधी, भोजपुरी, खड़ीबोली, मैथिली बोलने वाले), तो शिक्षण विधि के रूप में आपको क्या करना चाहिए?',
    'If your classroom has children from diverse linguistic backgrounds (e.g., Awadhi, Bhojpuri, Khadi Boli, Maithili), what pedagogical stance should you adopt?',
    ['बच्चों की मातृभाषा/घर की भाषा को संसाधन के रूप में सम्मान देते हुए धीरे-धीरे मानक भाषा से जोड़ना', 'Respect children’s home languages as a learning resource while gradually bridging to the standard school language'],
    [
      ['कक्षा में घर की भाषा बोलने पर जुर्माना लगाना', 'Impose a fine for speaking home languages in class'],
      ['उन्हें अलग कमरे में बंद करके पढ़ाना', 'Separate them into another room'],
      ['उनकी भाषा का मजाक उड़ाकर उन्हें चुप कराना', 'Ridicule their dialect into silence'],
    ],
    'NCF 2005 और NEP 2020 बहुभाषिकता को बाधा नहीं बल्कि संज्ञानात्मक संसाधन मानते हैं; घर की भाषा को स्वीकार करने से बच्चा कक्षा में जुड़ाव व आत्मविश्वास महसूस करता है।',
    'Both NCF 2005 and NEP 2020 view multilingualism as a cognitive asset; honoring home languages builds confidence and bridges smoothly to school language.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    '"अवलोकन विधि" (Observation Method) का सर्वाधिक उपयोग किस आयु व विषय क्षेत्र में होता है?',
    'In which subject areas and stages is the "Observation Method" most prominently used?',
    ['पर्यावरण अध्ययन (EVS), प्रकृति-विज्ञान एवं भूगोल में प्रत्यक्ष घटनाएँ देखने हेतु', 'In EVS, natural sciences, and geography to examine real phenomena directly'],
    [
      ['केवल अमूर्त त्रिकोणमिति के सूत्रों में', 'Only in abstract trigonometric identities'],
      ['केवल अंग्रेजी स्पेलिंग रटने में', 'Only in memorizing English spellings'],
      ['बिना देखे कविता सुनने में', 'In listening to poetry with eyes closed'],
    ],
    'पौधों की वृद्धि, मौसम परिवर्तन, कीटों का व्यवहार, नदी या मिट्टी के प्रकार को प्रत्यक्ष देखकर दर्ज करना अवलोकन विधि का मूल आधार है।',
    'Direct observation and recording of plant growth, weather patterns, soils, or habitats form the backbone of EVS, science, and geography.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सा "रचनावादी कक्षा" (Constructivist Classroom) का लक्षण नहीं है?',
    'Which of the following is NOT a characteristic of a "Constructivist Classroom"?',
    ['शिक्षक द्वारा दिए गए एकमात्र उत्तर को ज्यों का त्यों याद करना', 'Memorizing verbatim the single answer dictated by the teacher'],
    [
      ['विद्यार्थियों के पूर्व-ज्ञान को नए अनुभवों से जोड़ना', 'Connecting students’ prior knowledge to new experiences'],
      ['सामूहिक संवाद, प्रश्न और अन्वेषण के अवसर देना', 'Providing opportunities for dialogue, questioning, and inquiry'],
      ['त्रुटियों को सीखने की प्रक्रिया का हिस्सा मानना', 'Treating errors as part of the learning process'],
    ],
    'रचनावाद (पियाजे, वाइगोत्स्की) में विद्यार्थी सक्रिय खोज व सामाजिक अंतःक्रिया से ज्ञान का निर्माण करते हैं, न कि शिक्षक द्वारा दिए गए शब्दों को ज्यों का त्यों रटते हैं।',
    'In constructivism, learners actively build understanding through inquiry and social interaction rather than passively memorizing dictated answers.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'सूक्ष्म शिक्षण में "छात्र सहभागिता बढ़ाने का कौशल" (Skill of Increasing Pupil Participation) किस व्यवहार से प्रदर्शित होता है?',
    'In Micro-teaching, which teacher behavior demonstrates the "Skill of Increasing Pupil Participation"?',
    ['खुले प्रश्न पूछना, छात्रों के विचारों को स्वीकार करना, प्रोत्साहन देना तथा समूह कार्य कराना', 'Asking open questions, accepting student ideas, encouraging responses, and organizing group tasks'],
    [
      ['लगातार 30 मिनट बिना रुके स्वयं ही बोलते रहना', 'Speaking nonstop for 30 minutes without pause'],
      ['केवल आगे की बेंच के दो छात्रों से बात करना', 'Interacting only with two front-row students'],
      ['छात्र के बोलने पर बीच में ही डांटकर बैठा देना', 'Interrupting and scolding students when they speak'],
    ],
    'सभी छात्रों को समान रूप से संवाद में शामिल करना, उनके विचारों को ब्लैकबोर्ड पर स्थान देना और उत्साहित करना छात्र सहभागिता को बढ़ाता है।',
    'Inviting diverse learners, building on their ideas, and encouraging peer exchanges maximize active pupil participation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि में शिक्षक की आदर्श भूमिका को किस रूप में वर्णित किया जा सकता है?',
    'How can the teacher’s ideal role be described in the Heuristic Method?',
    ['तटस्थ किंतु सतर्क मार्गदर्शक की, जो सीधे उत्तर न बताकर खोज हेतु उपयुक्त समस्या व उपकरण उपलब्ध कराए', 'An attentive guide who refrains from telling answers directly and provides suitable problems and apparatus for discovery'],
    [
      ['निष्क्रिय व्यक्ति की जो कक्षा से बाहर बैठा रहे', 'A passive person sitting outside the classroom'],
      ['सर्वज्ञ व्याख्याता की जो हर तथ्य बोर्ड पर लिख दे', 'An all-telling lecturer who writes every fact on the board'],
      ['कठोर निरीक्षक की जो प्रयोग करने से रोके', 'A strict inspector who stops students from experimenting'],
    ],
    'आर्मस्ट्रांग ने स्पष्ट किया कि शिक्षक विद्यार्थी के लिए सोचकर उत्तर नहीं दे देता, बल्कि ऐसा वातावरण व समस्या देता है जिससे विद्यार्थी स्वयं सोचने और जांचने को प्रेरित हो।',
    'Armstrong emphasized that the teacher does not think for the student, but designs problems and lab conditions that provoke independent inquiry.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मारिया मोंटेसरी ने बच्चों में "स्वाभाविक लेखन के विस्फोट" (Explosion into Writing) की बात क्यों कही?',
    'Why did Maria Montessori speak of an "Explosion into Writing" in young children?',
    ['मांसपेशीय नियंत्रण, स्पर्श अक्षर व ध्वनि ज्ञान की पूर्व-तैयारी के बाद बच्चे अचानक स्वतः शब्द लिखने लगते हैं', 'After muscle control, sandpaper letters, and phonetic prep, children suddenly begin writing words spontaneously'],
    [
      ['क्योंकि बच्चों की पेंसिल टूट जाती है', 'Because children’s pencils break'],
      ['क्योंकि बच्चे परीक्षा के डर से लिखने लगते हैं', 'Because children write out of exam fear'],
      ['क्योंकि उन्हें रोज 50 पेज नकल कराई जाती है', 'Because they copy 50 pages daily'],
    ],
    'मोंटेसरी के अनुसार जब अंगुलियों की पकड़ (Metal Insets), अक्षर आकार (Sandpaper Letters) और ध्वनि विश्लेषण (Moveable Alphabet) परिपक्व हो जाते हैं, तब 4-5 वर्ष के बच्चे बिना दबाव अचानक धाराप्रवाह लिखना शुरू कर देते हैं।',
    'Montessori observed that once hand control, tactile letter memory, and phonemic awareness mature, 4–5-year-olds spontaneously burst into writing words effortlessly.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन पद्धति',
    'फ्रोबेल के किंडरगार्टन में "माताओं की गोद" (Mother’s Lap) और प्रारंभिक शिशु गीतों का क्या स्थान है?',
    'What role do early nursery songs and maternal warmth play in Froebel’s Kindergarten?',
    ['वे शिशु की प्रथम पाठशाला और भावनात्मक-इंद्रिय विकास का स्वाभाविक माध्यम हैं', 'They serve as the infant’s first school and natural medium for emotional and sensory growth'],
    [
      ['उनका शिक्षा से कोई संबंध नहीं माना गया', 'They are considered unrelated to education'],
      ['वे केवल बड़े बच्चों को अनुशासित करने के लिए हैं', 'They are only for disciplining older youths'],
      ['उन्हें विद्यालय में वर्जित किया गया था', 'They were banned inside schools'],
    ],
    'फ्रोबेल ने माताओं को बालक की प्रथम शिक्षिका माना और कहा कि गीतों, तालियों व खेलों द्वारा शिशु की इंद्रियाँ और प्रेम की भावना जागृत होती है।',
    'Froebel regarded mothers as first educators and saw nursery rhymes, clapping games, and warmth as foundational to sensory and emotional awakening.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'गणित शिक्षण में यदि कोई अध्यापक केवल संश्लेषण विधि से प्रमेय हल कर बोर्ड पर लिख देता है, तो छात्रों को क्या कठिनाई हो सकती है?',
    'In mathematics, if a teacher proves a theorem on the board solely using the Synthetic Method, what difficulty might students face?',
    ['उन्हें यह समझ नहीं आता कि पहला चरण क्यों और कैसे सोचा गया, जिससे वे रटने को विवश होते हैं', 'They fail to see why the initial step or construction was chosen, forcing rote memorization'],
    [
      ['प्रमेय बहुत लंबा हो जाता है और समय बहुत लगता है', 'The proof becomes too long and slow'],
      ['प्रमेय का निष्कर्ष गलत निकल आता है', 'The conclusion turns out false'],
      ['बोर्ड पर लिखने में चॉक नहीं चलती', 'Chalk stops writing on the board'],
    ],
    'संश्लेषण में हल सुव्यवस्थित व छोटा दिखता है, पर "रचना या पहला पद क्यों चुना गया" यह स्पष्ट नहीं होता; विश्लेषण पहले वह "क्यों" स्पष्ट करता है।',
    'Synthetic proofs look neat and concise, yet hide the motivation behind auxiliary steps; prior analysis reveals the "why" behind every step.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 4 में "पाचन तंत्र" पढ़ाते समय केवल किताब का चित्र दिखाने के बजाय बच्चे को रोटी का टुकड़ा चबाकर यह अनुभव कराना कि थोड़ी देर में वह मीठा क्यों लगने लगता है—किस विधि का उदाहरण है?',
    'While teaching the "Digestive System" in Class 4, having students chew a piece of roti to experience why it tastes sweet after a moment exemplifies which approach?',
    ['अनुभवात्मक एवं खोज आधारित शिक्षण', 'Experiential and inquiry-based teaching'],
    [
      ['शुद्ध निगमन विधि', 'Pure deductive method'],
      ['डाल्टन ठेका विधि', 'Dalton contract method'],
      ['शाखीय अभिक्रमित अनुदेशन', 'Branching programmed instruction'],
    ],
    'स्वयं के शरीर पर लार (एमाइलेज) द्वारा स्टार्च के शर्करा में बदलने का प्रत्यक्ष अनुभव लेने से बच्चा अमूर्त रासायनिक प्रक्रिया को जीवंत रूप से समझता है।',
    'Directly experiencing starch breaking down into sweet sugar via saliva makes an abstract biochemical process vivid and memorable.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में किसी कठिन बिंदु को तीन बार समझाता है, फिर भी कुछ छात्र नहीं समझ पाते। शिक्षक को क्या करना चाहिए?',
    'A teacher explains a difficult point three times, yet some students still do not understand. What should the teacher do?',
    ['वही व्याख्या दोहराने के बजाय शिक्षण विधि बदलकर दृश्य चित्र, मूर्त उदाहरण या सहपाठी मदद अपनाना', 'Change the strategy—use visual aids, concrete analogies, or peer explanation instead of repeating the same talk'],
    [
      ['उन छात्रों को मंदबुद्धि मानकर आगे बढ़ जाना', 'Label those students dull and move on'],
      ['उसी व्याख्यान को दस बार और तेज आवाज में चिल्लाकर बोलना', 'Shout the exact same explanation ten more times'],
      ['छात्रों को कक्षा से बाहर भेज देना', 'Send those students out of the room'],
    ],
    'यदि विद्यार्थी किसी एक विधि से नहीं सीख पा रहा, तो शिक्षक को अपनी प्रस्तुति की विधि में विविधता (Multimodal approach) लानी चाहिए, न कि उसी तरीके को जोर से दोहराना।',
    'When learners struggle with one mode of explanation, effective teachers shift modalities (visuals, manipulatives, analogies) rather than repeating louder.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सा विकल्प "ब्लैंडेड लर्निंग" (Blended Learning / मिश्रित अधिगम) की सबसे सही व्याख्या करता है?',
    'Which of the following best defines "Blended Learning"?',
    ['आमने-सामने कक्षीय शिक्षण (Face-to-face) और डिजिटल/ऑनलाइन अधिगम का सुविचारित समन्वय', 'Thoughtful integration of face-to-face classroom instruction with online/digital learning'],
    [
      ['दो अलग-अलग कक्षाओं के बच्चों को एक ही कमरे में बिना पढ़ाए बिठाना', 'Seating two different grades together without teaching'],
      ['सभी पाठ्यपुस्तकों को जलाकर केवल मोबाइल दे देना', 'Replacing all books with mobile phones'],
      ['केवल खेल के मैदान में पढ़ाई कराना', 'Teaching exclusively on the playground'],
    ],
    'मिश्रित अधिगम में पारंपरिक प्रत्यक्ष शिक्षक-छात्र अंतःक्रिया के सर्वश्रेष्ठ तत्वों को डिजिटल सिमुलेशन, वीडियो और स्व-गति अभ्यास के साथ जोड़ा जाता है।',
    'Blended learning combines the human interaction of face-to-face classrooms with the flexibility and multimedia richness of digital tools.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"गेमिफिकेशन" (Gamification in Education) से क्या तात्पर्य है?',
    'What is meant by "Gamification in Education"?',
    ['नियमित शिक्षण में अंक, बैज, स्तर, चुनौती और पुरस्कार जैसे खेल-तत्वों को जोड़कर प्रेरणा बढ़ाना', 'Incorporating game elements like points, badges, levels, and challenges into learning to boost engagement'],
    [
      ['पढ़ाई बंद करके पूरे दिन वीडियो गेम खिलवाना', 'Stopping studies to play video games all day'],
      ['केवल शारीरिक शिक्षा का पीरियड बढ़ाना', 'Increasing only physical education periods'],
      ['परीक्षा में अनुत्तीर्ण छात्रों को खेल से बाहर करना', 'Barring failing students from sports'],
    ],
    'गेमिफिकेशन में कठिन अभ्यास को स्तर-दर-स्तर चुनौतियों, तत्काल फीडबैक और रोचक लक्ष्यों में बदल दिया जाता है, जिससे बच्चों की आंतरिक प्रेरणा बढ़ती है।',
    'Gamification embeds game mechanics (challenges, levels, feedback, badges) into academic tasks to sustain motivation and active effort.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण कौशल के अंतर्गत "लक्ष्य-निर्देशित प्रश्न" और "पुनः केंद्रीकरण" (Refocusing) का प्रयोग कब किया जाता है?',
    'Under probing skills, when is "Refocusing" used?',
    ['जब छात्र सही उत्तर दे दे, तब उस उत्तर को किसी अन्य परिस्थिति या संबंधित विषय से जोड़ने के लिए', 'When a student gives a correct response, to relate it to another situation or broader concept'],
    [
      ['जब छात्र उत्तर बिल्कुल न दे पाए', 'When a student gives zero response'],
      ['जब कक्षा की घंटी बज चुकी हो', 'When the dismissal bell has rung'],
      ['जब चॉक खत्म हो जाए', 'When chalk runs out'],
    ],
    'अनुशीलन कौशल में सही उत्तर मिलने के बाद भी शिक्षक "यदि यह स्थिति बदल जाए तो क्या होगा?" या "इसे दूसरे उदाहरण से जोड़ो" पूछकर छात्र के चिंतन का विस्तार करता है।',
    'In probing, refocusing builds on a correct answer by prompting the student to link or apply that understanding to a new context or related principle.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'प्रभावशाली कक्षा संचार (Classroom Communication) में सबसे बड़ी बाधा कौन-सी होती है?',
    'What is a major barrier to effective Classroom Communication?',
    ['अस्पष्ट शब्दावली, अत्यधिक तेज गति, शोर तथा छात्रों के मानसिक स्तर की अनदेखी', 'Ambiguous jargon, excessive speaking pace, noise, and ignoring learners’ cognitive level'],
    [
      ['नेत्र संपर्क बनाए रखना', 'Maintaining eye contact'],
      ['सरल व परिचित उदाहरण देना', 'Giving simple familiar examples'],
      ['छात्रों को प्रश्न पूछने देना', 'Allowing students to ask questions'],
    ],
    'जब शिक्षक छात्रों की भाषायी क्षमता व पूर्व-ज्ञान से परे की क्लिष्ट भाषा बोलता है या कक्षा के शोर/संकेतों पर ध्यान नहीं देता, तो संप्रेषण टूट जाता है।',
    'Communication breaks down when teachers use jargon above students’ level, rush through explanations, or ignore feedback cues and noise.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से किस शिक्षण विधि में "सामाजिक अंतःक्रिया" (Social Interaction) सबसे कम होती है?',
    'In which of the following teaching methods is "Social Interaction" minimal?',
    ['व्यक्तिगत रेखीय अभिक्रमित अनुदेशन', 'Individual Linear Programmed Instruction'],
    [
      ['प्रोजेक्ट विधि', 'Project Method'],
      ['भूमिका निर्वाह (Role Play)', 'Role Play'],
      ['समूह चर्चा (Group Discussion)', 'Group Discussion'],
    ],
    'रेखीय अभिक्रमित अनुदेशन में छात्र अकेले स्व-अध्ययन पुस्तिका या स्क्रीन पर फ्रेम्स हल करता है, जबकि अन्य तीनों विधियाँ समूह संवाद व सहयोग पर टिकी हैं।',
    'Linear programmed instruction is an individual self-study format with minimal peer interaction, whereas projects, role play, and discussions thrive on social exchange.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'एक अंग्रेजी शिक्षिका पहले "Present Continuous Tense" के नियम (is/am/are + V-ing) लिखवाती हैं और फिर 10 वाक्यों का हिंदी से अंग्रेजी में अनुवाद कराती हैं। वह किस विधि का अनुसरण कर रही हैं?',
    'An English teacher first writes the rule for Present Continuous Tense (is/am/are + V-ing) and then asks students to translate 10 sentences. Which method is she following?',
    ['निगमन एवं व्याकरण-अनुवाद विधि', 'Deductive and Grammar-Translation Method'],
    [
      ['आगमन एवं प्रत्यक्ष विधि', 'Inductive and Direct Method'],
      ['किंडरगार्टन विधि', 'Kindergarten Method'],
      ['ह्यूरिस्टिक विधि', 'Heuristic Method'],
    ],
    'पहले व्याकरणिक नियम/संरचना बताकर फिर मातृभाषा से अनुवाद कराना स्पष्ट रूप से निगमन और व्याकरण-अनुवाद विधि का मिश्रण है।',
    'Presenting the grammatical formula first followed by translation exercises clearly reflects the Deductive and Grammar-Translation approach.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा में कुछ बच्चे बहुत जल्दी दिया गया कार्य पूरा कर लेते हैं और फिर खाली बैठकर अन्य बच्चों को परेशान करने लगते हैं। शिक्षक को क्या करना चाहिए?',
    'Some students finish assigned tasks very early and start disturbing others while waiting. What should the teacher do?',
    ['उनके लिए पहले से सृजनात्मक विस्तार गतिविधियाँ (Enrichment Corner / पहेलियाँ / पठन पुस्तकें) तैयार रखना', 'Keep creative enrichment tasks (puzzles, reading corner books, extension problems) ready for early finishers'],
    [
      ['उन्हें पूरे समय हाथ ऊपर करके खड़ा रखना', 'Make them stand with hands raised'],
      ['उनसे वही आसान कार्य पांच बार दोबारा करवाना', 'Make them redo the exact same easy worksheet five times'],
      ['उन्हें कक्षा के बाहर खेल के मैदान में अकेले भेज देना', 'Send them outside unattended'],
    ],
    'तेज सीखने वाले बच्चों को उबाऊ दोहराव के बजाय उच्च स्तरीय सृजनात्मक या पठन विस्तार कार्य (Enrichment activities) देने से उनकी प्रतिभा पोषित होती है और कक्षा शांत रहती है।',
    'Providing meaningful extension challenges, puzzles, or independent reading keeps early finishers productively engaged and nurtures higher-order skills.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि में निम्नलिखित में से कौन-सा कथन गलत है?',
    'Which of the following statements about the Project Method is INCORRECT?',
    ['प्रोजेक्ट सदैव व्यक्तिगत ही होना चाहिए, समूह में नहीं किया जा सकता', 'A project must always be individual and cannot be done in groups'],
    [
      ['प्रोजेक्ट का उद्देश्य वास्तविक जीवन की किसी समस्या या निर्माण से जुड़ा होता है', 'A project is linked to a real-life problem or creation'],
      ['इसमें विद्यार्थी करके सीखने के सिद्धांत का पालन करते हैं', 'Students follow the principle of learning by doing'],
      ['शिक्षक की भूमिका मार्गदर्शक व मित्र की होती है', 'The teacher acts as a guide and friend'],
    ],
    'प्रोजेक्ट व्यक्तिगत और सामूहिक (Group Project) दोनों हो सकते हैं; वस्तुतः किलपैट्रिक ने सामाजिक वातावरण में समूह प्रोजेक्ट को विशेष महत्व दिया है।',
    'Projects can be both individual and collaborative; in fact, Kilpatrick highlighted group projects in a social environment.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण के जन्मदाता ड्वाइट एलन के अनुसार एक सूक्ष्म शिक्षण सत्र सामान्यतः कितने समय का होता था (स्टैनफोर्ड मॉडल)?',
    'According to Dwight Allen (Stanford model), how long was a typical micro-teaching session?',
    ['5 से 10 मिनट (भारत में NCERT द्वारा 6 मिनट मानकीकृत)', '5 to 10 minutes (standardized to 6 minutes by NCERT in India)'],
    [
      ['45 से 60 मिनट', '45 to 60 minutes'],
      ['90 मिनट', '90 minutes'],
      ['120 मिनट', '120 minutes'],
    ],
    'स्टैनफोर्ड मॉडल में शिक्षण सत्र 5-10 मिनट (अक्सर 5 मिनट) का होता था; भारत में NCERT ने इसे 6 मिनट शिक्षण तथा कुल 36 मिनट के चक्र में मानकीकृत किया।',
    'In the Stanford model, the teach phase lasted 5–10 minutes; NCERT standardized it to 6 minutes within a 36-minute cycle in India.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'फ्रोबेल और मोंटेसरी दोनों के अनुसार "खेल" या "गतिविधि" बच्चों के लिए क्या है?',
    'According to both Froebel and Montessori, what does "play" or "purposeful activity" represent for young children?',
    ['बच्चे का स्वाभाविक कार्य और विकास का सर्वोत्तम माध्यम', 'The child’s natural work and the finest medium for development'],
    [
      ['केवल समय बर्बाद करने वाला मनोरंजन', 'Mere time-wasting amusement'],
      ['पढ़ाई से ध्यान भटकाने वाली बुरी आदत', 'A bad habit distracting from study'],
      ['केवल रविवार के लिए आरक्षित गतिविधि', 'An activity reserved only for Sundays'],
    ],
    'फ्रोबेल ने खेल को बाल्यकाल का सर्वोच्च विकास बिंदु कहा, वहीं मोंटेसरी ने उद्देश्यपूर्ण गतिविधि को "बच्चे का कार्य" (Play is the work of the child) कहा।',
    'Froebel called play the highest expression of human development in childhood, and Montessori regarded purposeful activity as the child’s true work.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    '"सुकराती संवाद" में शिक्षक द्वारा जानबूझकर अनजान बनने या सरल प्रश्न पूछने की कला को क्या कहा जाता है?',
    'In Socratic dialogue, what is the teacher’s art of feigning ignorance and asking probing elementary questions called?',
    ['सुकराती व्यंग्य / विनम्र जिज्ञासा (Socratic Irony)', 'Socratic Irony'],
    [
      ['निगमन अनुदेशन', 'Deductive Instruction'],
      ['दंडात्मक परीक्षण', 'Punitive Testing'],
      ['श्यामपट्ट प्रविधि', 'Blackboard Technique'],
    ],
    'सुकरात स्वयं को अज्ञानी बताकर ("मैं केवल इतना जानता हूँ कि मैं कुछ नहीं जानता") प्रश्न पूछते थे, ताकि सामने वाला अपनी मान्यताओं की गहराई से जांच करे।',
    'In Socratic irony, the questioner professes ignorance to prompt the learner to examine assumptions deeply and uncover contradictions.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "नकारात्मक अशाब्दिक पुनर्बलन" (Negative Non-verbal Reinforcement) का उदाहरण कौन-सा है?',
    'Which of the following is an example of "Negative Non-verbal Reinforcement" in the classroom?',
    ['छात्र के गलत व्यवहार या लापरवाही पर त्योरियां चढ़ाना या असहमति में सिर हिलाना', 'Frowning or shaking one’s head in disapproval at an incorrect response or misbehavior'],
    [
      ['मुस्कुराकर पीठ थपथपाना', 'Smiling and patting the back'],
      ['"बहुत बढ़िया" कहना', 'Saying "Very good"'],
      ['तालियां बजाना', 'Clapping hands'],
    ],
    'बिना कुछ बोले चेहरे पर असहमति का भाव लाना, त्योरियां चढ़ाना या सिर "ना" में हिलाना ऋणात्मक अशाब्दिक पुनर्बलन है।',
    'Expressing disapproval silently through frowning, raised eyebrows, or shaking the head is negative non-verbal reinforcement.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से किस शिक्षण विधि में "कहानी, यात्रा वृत्तांत और नाटक" को सबसे प्रभावी उपकरण माना जाता है?',
    'In which teaching areas are "stories, travelogues, and drama" considered highly effective tools?',
    ['भाषा, इतिहास और पर्यावरण अध्ययन (EVS) शिक्षण में', 'In teaching Language, History, and Environmental Studies (EVS)'],
    [
      ['केवल बीजगणितीय समीकरण हल करने में', 'Only in solving algebraic equations'],
      ['केवल प्रयोगशाला में अम्ल-क्षार अनुमापन में', 'Only in acid-base titration in labs'],
      ['केवल टाइपिंग गति बढ़ाने में', 'Only in increasing typing speed'],
    ],
    'कहानियाँ, यात्रा वृत्तांत व नाटक मानव अनुभव, समय, स्थान व संवेदनाओं को जीवंत करते हैं, अतः भाषा, इतिहास व EVS में अत्यंत प्रभावी होते हैं।',
    'Stories, travelogues, and drama bring human experiences, eras, and environments alive, making them powerful in Language, History, and EVS.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'शिक्षण में "श्रव्य-दृश्य सामग्री" (Audio-Visual Aids) के प्रयोग का सबसे महत्वपूर्ण लाभ क्या है?',
    'What is the most important benefit of using "Audio-Visual Aids" in teaching?',
    ['यह एक साथ अनेक ज्ञानेंद्रियों (आँख व कान) को सक्रिय कर सीखने को रोचक व दीर्घस्थायी बनाती है', 'It engages multiple senses (sight and hearing) simultaneously, making learning vivid and long-lasting'],
    [
      ['इससे शिक्षक को कक्षा में आने की आवश्यकता नहीं रहती', 'The teacher no longer needs to attend class'],
      ['इससे पाठ्यपुस्तकों की कोई उपयोगिता नहीं रहती', 'Textbooks become completely useless'],
      ['यह केवल मनोरंजन व समय काटने का साधन है', 'It is solely for entertainment and passing time'],
    ],
    'केवल सुनने की अपेक्षा जब बच्चा देखता और सुनता दोनों है, तो ध्यान केंद्रित रहता है, अमूर्त बातें स्पष्ट होती हैं और स्मृति में धारण बढ़ता है।',
    'Simultaneous auditory and visual stimulation captures attention, clarifies abstract ideas, and significantly improves retention.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 5 की एक शिक्षिका ने देखा कि बच्चे "पृथ्वी के घूर्णन" से दिन-रात बनने की बात किताब से रट तो लेते हैं, पर ग्लोब पर नहीं समझा पाते। कौन-सी गतिविधि उनकी गलतफहमी दूर करेगी?',
    'A Class 5 teacher notices students recite that Earth’s rotation causes day and night, yet cannot explain it on a globe. Which activity will fix this?',
    ['अँधेरे कमरे में टॉर्च (सूर्य) और घूमते हुए ग्लोब (पृथ्वी) से दिन-रात का सजीव प्रदर्शन कराना', 'Demonstrating day and night in a darkened room using a torch (Sun) and a rotating globe (Earth)'],
    [
      ['अध्याय को पांच बार और जोर से पढ़वाना', 'Making them read the chapter aloud five more times'],
      ['घूर्णन की परिभाषा कॉपी में लाल स्याही से लिखवाना', 'Making them write the definition in red ink'],
      ['केवल सूर्य और पृथ्वी का व्यास रटाना', 'Making them memorize the diameters of Sun and Earth'],
    ],
    'टॉर्च से ग्लोब के आधे हिस्से पर प्रकाश और आधे पर छाया दिखाकर ग्लोब घुमाने से बच्चा प्रत्यक्ष देख लेता है कि भारत में दिन और दूसरी तरफ रात कैसे होती है।',
    'Shining a torch on a spinning globe lets children directly observe how one hemisphere experiences day while the other experiences night.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक जब किसी पाठ को पढ़ाने से पहले छात्रों से उस विषय से जुड़े अपने स्थानीय अनुभव साझा करने को कहता है (जैसे "फसल" पढ़ाने से पहले गाँव की बुवाई-कटाई पूछना), तो वह किस शिक्षण युक्ति का प्रयोग कर रहा है?',
    'Before teaching a lesson on "Crops", a teacher invites students to share local experiences of sowing and harvesting. Which pedagogical approach is being used?',
    ['स्थानीय ज्ञान को विद्यालयी ज्ञान से जोड़ना (Contextualized Pedagogy)', 'Contextualized Pedagogy (connecting local knowledge to school knowledge)'],
    [
      ['रटंत आधारित अनुदेशन', 'Rote-based instruction'],
      ['निगमन परीक्षण', 'Deductive testing'],
      ['हस्तक्षेप-रहित प्रबंधन', 'Laissez-faire management'],
    ],
    'NCF 2005 भी निर्देश देता है कि विद्यालयी ज्ञान को बच्चे के बाहरी जीवन और स्थानीय समुदाय के अनुभवों से जोड़ा जाए।',
    'NCF 2005 emphasizes connecting school knowledge with learners’ lived community experiences, making instruction contextual and meaningful.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण के संदर्भ में "मॉडलिंग" (Modeling) से क्या आशय है?',
    'In Micro-teaching, what does "Modeling" refer to?',
    ['प्रशिक्षु शिक्षक को अभ्यास से पहले किसी विशेषज्ञ या वीडियो द्वारा विशिष्ट कौशल का आदर्श प्रदर्शन दिखाना', 'Demonstrating an ideal example of the target teaching skill via a supervisor or video before practice'],
    [
      ['थर्मोकोल का घर बनाना', 'Building a thermocol house'],
      ['फैशन शो का आयोजन करना', 'Organizing a fashion show'],
      ['छात्रों का केवल चित्र बनाना', 'Only drawing portraits of students'],
    ],
    'बंडूरा के सामाजिक अधिगम सिद्धांत के अनुरूप, अभ्यास करने से पहले कौशल का स्पष्ट आदर्श नमूना (Model lesson) देखने से प्रशिक्षु घटकों को बेहतर ढंग से समझ पाता है।',
    'Aligned with Bandura’s observational learning, observing a clear model demonstration helps trainees internalize the skill components before practicing.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन एवं विनेटका',
    'डाल्टन योजना (Helen Parkhurst) में "हाउस" (House) और "लेबोरेटरी" (Laboratory) के अतिरिक्त तीसरा प्रमुख तत्व क्या है?',
    'In Helen Parkhurst’s Dalton Plan, besides "House" and "Laboratory", what is the third major component?',
    ['असाइनमेंट / ठेका कार्य (Assignment / Contract)', 'Assignment / Contract'],
    [
      ['वार्षिक बोर्ड परीक्षा', 'Annual Board Examination'],
      ['दंड कक्ष (Detention Room)', 'Detention Room'],
      ['प्रार्थना सभा भाषण', 'Assembly Speech'],
    ],
    'डाल्टन प्रणाली तीन स्तंभों पर खड़ी है: (1) हाउस (सामाजिक/नैतिक मार्गदर्शन हेतु मिश्रित आयु समूह), (2) असाइनमेंट (मासिक अनुबंध), तथा (3) प्रयोगशाला (विषय कक्ष जहाँ छात्र स्वयं व शिक्षक सहायता से सीखते हैं)।',
    'The Dalton Plan rests on three pillars: the House (mixed-age advisory community), the Assignment (monthly contract), and the Laboratory (subject workspaces).',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'निम्नलिखित में से कौन-सा गुण "विश्लेषण विधि" और "संश्लेषण विधि" के संयोजन को श्रेष्ठ बनाता है?',
    'Which quality makes combining the "Analytic Method" and "Synthetic Method" superior to using either alone?',
    ['विश्लेषण तार्किक समझ व खोज पैदा करता है, जबकि संश्लेषण उस हल को संक्षिप्त, सुंदर व स्मरण योग्य बनाता है', 'Analysis builds understanding and discovery, while synthesis presents the solution concisely and elegantly'],
    [
      ['दोनों एक ही काम को बेवजह दो बार करते हैं', 'Both needlessly repeat the same task twice'],
      ['दोनों केवल प्राथमिक कक्षाओं में वर्जित हैं', 'Both are banned in primary classes'],
      ['दोनों बिना तर्क के उत्तर देते हैं', 'Both give answers without reasoning'],
    ],
    'विश्लेषण से छात्र समझता है कि हल कैसे मिला (Thinking process), और संश्लेषण से वह उसे सुस्पष्ट क्रम में लिखना सीखता है (Presentation process)।',
    'Analysis uncovers how the solution works, and synthesis organizes that solution into a clean, memorable logical presentation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'यदि एक शिक्षक विज्ञान कक्षा में पहले नियम बताता है— "सभी अम्ल नीले लिटमस को लाल कर देते हैं", और फिर बच्चों से विभिन्न घोलों पर लिटमस पेपर डुबोकर नियम की जांच कराता है, तो यह निगमन का कौन-सा रूप है?',
    'In science class, a teacher states the rule "All acids turn blue litmus red" and then has students dip litmus paper into solutions to verify it. Which approach is this?',
    ['प्रयोगात्मक सत्यापन के साथ निगमन विधि', 'Deductive Method with experimental verification'],
    [
      ['शुद्ध आगमन विधि', 'Pure Inductive Method'],
      ['ह्यूरिस्टिक खोज विधि', 'Heuristic Discovery Method'],
      ['मोंटेसरी संवेदी विधि', 'Montessori Sensory Method'],
    ],
    'चूँकि सामान्य नियम पहले ही बता दिया गया और उसके बाद विशिष्ट उदाहरणों पर परीक्षण कराया जा रहा है, यह निगमन विधि (सामान्य से विशिष्ट) है।',
    'Because the general rule is stated upfront and then tested on specific solutions, this follows the deductive path (general to specific).',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"स्टोरी मैपिंग" (Story Mapping) तकनीक का प्रयोग भाषा शिक्षण में किस उद्देश्य से किया जाता है?',
    'For what purpose is the "Story Mapping" technique used in language teaching?',
    ['कहानी के मुख्य तत्वों (पात्र, स्थान, समस्या, घटनाएँ, समाधान) को दृश्यात्मक रूप से व्यवस्थित करने हेतु', 'To visually organize core story elements (characters, setting, problem, events, resolution)'],
    [
      ['केवल शहर का सड़क मानचित्र बनाने हेतु', 'Only to draw a city street map'],
      ['कविता के छंद गिनने हेतु', 'To count poetic meters'],
      ['श्रुतलेख में अशुद्धियाँ काटने हेतु', 'To mark spelling errors in dictation'],
    ],
    'स्टोरी मैप ग्राफिक ऑर्गनाइज़र की तरह काम करता है जिससे छोटे बच्चे कहानी की संरचना को आसानी से समझ और पुनः सुना पाते हैं।',
    'A story map acts as a graphic organizer helping students identify story structure and retell narratives coherently.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में शिक्षण करते समय "दृष्टि संपर्क" (Eye Contact) बनाए रखने का सबसे बड़ा लाभ क्या है?',
    'What is the greatest advantage of maintaining "Eye Contact" while teaching?',
    ['विद्यार्थियों का ध्यान बना रहता है, वे स्वयं को जुड़ा हुआ महसूस करते हैं और शिक्षक को उनके हाव-भाव से प्रतिपुष्टि मिलती है', 'Students stay attentive, feel included, and the teacher receives real-time non-verbal feedback'],
    [
      ['छात्र डरकर चुपचाप नीचे देखने लगते हैं', 'Students look down out of fear'],
      ['शिक्षक को कुछ पढ़ना नहीं पड़ता', 'The teacher does not need to read anything'],
      ['श्यामपट्ट पर लिखना आसान हो जाता है', 'Writing on the blackboard becomes easier'],
    ],
    'पूरी कक्षा में समान रूप से दृष्टि संपर्क रखने से शिक्षक प्रत्येक बच्चे से भावनात्मक जुड़ाव बना पाता है और तुरंत भांप लेता है कि किसे बात समझ में नहीं आई।',
    'Balanced eye contact across the entire classroom fosters rapport, sustains engagement, and lets the teacher read comprehension cues instantly.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक प्राथमिक विद्यालय में "कबाड़ से जुगाड़" (Best out of Waste) गतिविधि द्वारा शिक्षण सामग्री (TLM) बनवाना किस शिक्षण उद्देश्य को पूरा करता है?',
    'Making TLMs through "Best out of Waste" activities in a primary school fulfills which pedagogical objective?',
    ['सृजनात्मकता, पर्यावरण संवेदनशीलता, कम लागत में व्यावहारिक सीखना एवं हस्त-कौशल विकास', 'Creativity, environmental awareness, low-cost practical learning, and motor-skill development'],
    [
      ['बच्चों को कबाड़ी का व्यवसाय सिखाना', 'Teaching children scrap trading'],
      ['केवल दीवारें गंदी करना', 'Merely dirtying classroom walls'],
      ['पाठ्यपुस्तकों की अनदेखी करना', 'Ignoring textbooks'],
    ],
    'खाली माचिस की डिब्बियों, बोतल के ढक्कनों व पुराने गत्ते से गिनती बॉक्स, तराजू या आकृतियाँ बनाने में रचनात्मकता, पुनर्चक्रण और गणित/विज्ञान कौशल एक साथ विकसित होते हैं।',
    'Building balances, counting boxes, or models from scrap cardboard and bottle caps fosters creativity, recycling values, and hands-on learning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि किसी पाठ को पढ़ाते समय छात्र बार-बार विषय से हटकर अप्रासंगिक प्रश्न पूछने लगे, तो एक संवेदनशील एवं कुशल शिक्षक को क्या करना चाहिए?',
    'If a student repeatedly asks off-topic questions during a lesson, what should a sensitive and skilled teacher do?',
    ['जिज्ञासा का सम्मान करते हुए संक्षेप में उत्तर या "कक्षा के बाद / पार्किंग लॉट" में चर्चा का आश्वासन देकर मुख्य पाठ पर लौटना', 'Respect curiosity, briefly acknowledge or park the question for after class, and smoothly return to the main lesson'],
    [
      ['छात्र को डांटकर कक्षा से बाहर निकाल देना', 'Scold and send the student out of the room'],
      ['पूरा पाठ छोड़कर पूरे दिन उसी अप्रासंगिक बात पर चर्चा करना', 'Abandon the lesson and spend all day on the off-topic point'],
      ['छात्र का नाम ब्लैकबोर्ड पर "शरारती" लिख देना', 'Write "naughty" next to the student’s name on the board'],
    ],
    'जिज्ञासा को कुचलना नहीं चाहिए; "पार्किंग लॉट" चार्ट पर प्रश्न लिख लेना और बाद में जवाब देना सम्मान और समय-प्रबंधन दोनों का श्रेष्ठ संतुलन है।',
    'Using a "Question Parking Lot" honors the child’s curiosity without derailing lesson pacing, balancing empathy with classroom management.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'खेल विधि',
    'किस शिक्षाशास्त्री ने कहा था— "खेल बाल्यकाल की सर्वोत्तम, शुद्धतम और आध्यात्मिक क्रिया है"?',
    'Which educationist said— "Play is the highest phase of child development, the purest and most spiritual activity of man at this stage"?',
    ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
    [
      ['बी.एफ. स्किनर', 'B.F. Skinner'],
      ['जॉन लॉक', 'John Locke'],
      ['हरबर्ट', 'J.F. Herbart'],
    ],
    'फ्रोबेल ने अपनी पुस्तक "The Education of Man" (1826) में खेल को बालक के आंतरिक जगत की स्वाभाविक व आध्यात्मिक अभिव्यक्ति बताया।',
    'In "The Education of Man" (1826), Friedrich Froebel described play as the highest, purest expression of the child’s inner development.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक एवं प्रोजेक्ट',
    'ह्यूरिस्टिक विधि और प्रोजेक्ट विधि में मुख्य अंतर क्या है?',
    'What is a key difference between the Heuristic Method and the Project Method?',
    ['ह्यूरिस्टिक मुख्यतः व्यक्तिगत वैज्ञानिक सत्य की खोज पर केंद्रित है, जबकि प्रोजेक्ट सामाजिक परिवेश में व्यावहारिक/सामूहिक रचना पर', 'Heuristic focuses mainly on individual scientific truth-discovery, whereas Project emphasizes purposeful practical/group work in a social setting'],
    [
      ['प्रोजेक्ट विधि केवल गणित के लिए है और ह्यूरिस्टिक केवल हिंदी के लिए', 'Project is only for math and Heuristic only for Hindi'],
      ['ह्यूरिस्टिक में कोई क्रिया नहीं होती', 'No activity takes place in Heuristic'],
      ['प्रोजेक्ट विधि में शिक्षक सब कुछ लिखवाता है', 'Teacher dictates everything in Project Method'],
    ],
    'आर्मस्ट्रांग की ह्यूरिस्टिक विधि प्रयोगशाला-केंद्रित वैज्ञानिक अन्वेषण है, जबकि किलपैट्रिक की प्रोजेक्ट विधि सामाजिक जीवन के सभी क्षेत्रों में सहयोगी सोद्देश्य कार्य है।',
    'Armstrong’s Heuristic Method emphasizes individual lab-like scientific inquiry, while Kilpatrick’s Project Method centers on purposeful social activity.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में "मौन का खेल" (Silence Game) किस उद्देश्य से कराया जाता है?',
    'For what purpose is the "Silence Game" practiced in the Montessori method?',
    ['आत्म-नियंत्रण, एकाग्रता और सूक्ष्म ध्वनियों के प्रति श्रवण संवेदनशीलता विकसित करने हेतु', 'To develop self-control, concentration, and auditory sensitivity to subtle sounds'],
    [
      ['बच्चों को सजा के रूप में चुप कराने हेतु', 'To silence children as punishment'],
      ['शिक्षक के आराम करने हेतु', 'For the teacher to take rest'],
      ['बोलने की क्षमता कम करने हेतु', 'To reduce speaking ability'],
    ],
    'मोंटेसरी के मौन खेल में बच्चे स्वेच्छा से बिल्कुल शांत बैठकर घड़ी की टिक-टिक या पक्षियों की आवाज जैसी सूक्ष्म ध्वनियाँ सुनते हैं, जिससे आंतरिक शांति और आत्म-नियमन आता है।',
    'In Montessori’s Silence Game, children voluntarily sit still to listen to faint ambient sounds, cultivating self-regulation, mindfulness, and auditory awareness.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उद्दीपन परिवर्तन" (Stimulus Variation) में "शिक्षक की भाव-भंगिमा" (Gestures) किस प्रकार सहायक होती है?',
    'How do "Teacher Gestures" help in the Skill of Stimulus Variation?',
    ['हाथ, सिर व चेहरे के स्वाभाविक संकेत शब्दों के अर्थ, आकार व भावना को अधिक स्पष्ट करते हैं', 'Natural movements of hands, head, and face clarify size, shape, direction, and emphasis in speech'],
    [
      ['वे छात्रों को डराने के काम आते हैं', 'They serve to frighten students'],
      ['वे केवल नृत्य कक्षा में काम आते हैं', 'They apply only to dance class'],
      ['वे व्याख्यान को धीमा कर देते हैं', 'They slow down the explanation'],
    ],
    'हाथों से बड़ा-छोटा दिखाना, दिशा बताना या चेहरे पर आश्चर्य/प्रसन्नता लाना मौखिक संदेश को प्रभावशाली और जीवंत बनाता है।',
    'Expressive, purposeful gestures reinforce verbal meaning, indicate magnitude or direction, and keep student attention anchored.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'सिड्नी एल. प्रेसी (Sidney L. Pressey) का नाम किस शैक्षिक तकनीक के प्रारंभिक इतिहास से जुड़ा है?',
    'Sidney L. Pressey’s name is associated with the early history of which educational innovation?',
    ['शिक्षण मशीन (Teaching Machine) और स्वचालित परीक्षण', 'Teaching Machine and automated testing'],
    [
      ['किंडरगार्टन उपहार', 'Kindergarten Gifts'],
      ['डाल्टन प्रयोगशाला', 'Dalton Laboratory'],
      ['ह्यूरिस्टिक प्रयोगशाला', 'Heuristic Laboratory'],
    ],
    '1920 के दशक में सिड्नी प्रेसी ने पहली यांत्रिक शिक्षण/परीक्षण मशीन बनाई थी, जिसने आगे चलकर स्किनर के अभिक्रमित अनुदेशन का मार्ग प्रशस्त किया।',
    'In the 1920s, Sidney Pressey invented an early mechanical testing/teaching machine, laying groundwork for later programmed instruction.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा 3 में "दिशाओं" (पूर्व, पश्चिम, उत्तर, दक्षिण) का ज्ञान कराना चाहते हैं। सबसे प्रभावशाली शुरुआती गतिविधि कौन-सी होगी?',
    'A teacher wants to teach "Directions" (East, West, North, South) to Class 3. Which initial activity will be most effective?',
    ['सुबह बच्चों को खुले मैदान में उगते सूर्य की ओर मुँह करके खड़ा कराना और आगे-पीछे, दाएं-बाएं की दिशाओं का अनुभव कराना', 'Taking children outdoors facing the rising sun and experiencing front, back, left, and right directions'],
    [
      ['केवल कॉपी में "ऊपर उत्तर, नीचे दक्षिण" लिखवाकर रटाना', 'Making them memorize "North is up, South is down" in notebooks'],
      ['विश्व का जटिल अक्षांश-देशांतर मानचित्र दिखाना', 'Showing a complex world latitude-longitude map'],
      ['दिशाओं की अंग्रेजी स्पेलिंग रटाना', 'Making them memorize English spellings of directions'],
    ],
    'स्वयं के शरीर और उगते सूर्य के प्रत्यक्ष संदर्भ में दिशा महसूस करने के बाद ही बच्चे कागज या मानचित्र पर दिशाओं की अमूर्त स्थिति समझ पाते हैं।',
    'Experiencing directions physically relative to one’s body and the rising sun creates the concrete anchor needed before reading flat maps.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि कोई छात्र कक्षा में बार-बार अन्य छात्रों के काम में हस्तक्षेप करता है और कार्य अधूरा छोड़ देता है, तो शिक्षक किस सकारात्मक विधि से सुधार कर सकता है?',
    'If a student repeatedly disrupts peers and leaves tasks unfinished, which positive strategy can the teacher use?',
    ['कार्य को छोटे लक्ष्यों में बाँटकर सार्थक जिम्मेदारी (जैसे सामग्री वितरक) देना व पूर्ण होने पर तुरंत प्रोत्साहन देना', 'Break tasks into short achievable steps, assign a meaningful responsibility, and immediately reinforce task completion'],
    [
      ['पूरी कक्षा के सामने उसे "बेकार लड़का" घोषित करना', 'Label them "useless" in front of the class'],
      ['उसे पूरे दिन कक्षा के बाहर धूप में खड़ा रखना', 'Make them stand outside in the sun all day'],
      ['उसकी किताबें जब्त कर लेना', 'Confiscate their books'],
    ],
    'ध्यान भटकने वाले या अतिसक्रिय बच्चों को छोटे-छोटे लक्ष्य व रचनात्मक कक्षा-जिम्मेदारी देने से उनकी ऊर्जा सकारात्मक दिशा में लगती है।',
    'Chunking tasks into manageable segments, offering constructive classroom roles, and reinforcing small wins channels excess energy positively.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    '"विचार-मंथन" (Brainstorming) में "गुणवत्ता से पहले मात्रा" (Quantity breeds Quality) का नियम क्यों अपनाया जाता है?',
    'Why is the rule "Quantity breeds Quality" adopted in Brainstorming?',
    ['प्रारंभिक संकोच हटने और अधिक से अधिक विचार आने के बाद ही अनूठे व श्रेष्ठ समाधान निकलते हैं', 'Generating a large volume of ideas lowers inhibition and increases the likelihood of original, high-quality solutions'],
    [
      ['ताकि पन्ने जल्दी भर जाएँ', 'So pages fill up fast'],
      ['ताकि शिक्षक को सोचने की जरूरत न पड़े', 'So the teacher doesn’t have to think'],
      ['ताकि गलत विचारों को रटा जा सके', 'So wrong ideas can be memorized'],
    ],
    'ऑस्बोर्न के अनुसार शुरुआती विचार प्रायः सामान्य होते हैं; जब बिना किसी रोक-टोक के विचारों की बाढ़ आती है, तब बाद में मौलिक और रचनात्मक विचार जन्म लेते हैं।',
    'Osborn noted that initial ideas are often conventional; free-flowing quantity suspends self-censorship and unlocks truly novel ideas later in the session.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण में "दृष्टांत" के प्रयोग के संदर्भ में कौन-सा कथन सही है?',
    'Which statement is correct regarding the use of "Illustrations/Examples" in teaching?',
    ['एक ही उदाहरण पर निर्भर न रहकर विविध उदाहरणों व प्रति-उदाहरणों (Non-examples) का भी उपयोग करना चाहिए', 'Instead of relying on one example, varied examples as well as non-examples should be used'],
    [
      ['केवल एक ही उदाहरण हमेशा पर्याप्त होता है', 'A single example is always enough'],
      ['प्रति-उदाहरण देने से बच्चे हमेशा भ्रमित होते हैं', 'Non-examples always confuse students'],
      ['उदाहरण पाठ के बाद ही दिए जाने चाहिए, बीच में नहीं', 'Examples should only be given after the lesson ends'],
    ],
    'विविध उदाहरणों (जैसे त्रिभुज के विभिन्न रूप) के साथ प्रति-उदाहरण (जैसे वृत्त या खुला वक्र क्यों त्रिभुज नहीं है) देने से अवधारणा की सीमाएँ एकदम स्पष्ट हो जाती हैं।',
    'Combining diverse positive examples with clear non-examples sharpens concept boundaries and prevents over-generalization.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'प्राथमिक स्तर पर "रचनात्मक लेखन" (Creative Writing) सिखाने की सबसे अच्छी शुरुआत किस विधि से होती है?',
    'Which method is the best starting point for teaching "Creative Writing" at the primary level?',
    ['चित्र दिखाकर या अधूरी कहानी देकर बच्चों को अपने शब्दों व कल्पना से वाक्य या अंत लिखने देना', 'Showing a picture or an incomplete story and letting children write sentences or endings in their own words'],
    [
      ['निबंध की किताब से "गाय" का निबंध अक्षरशः उतारना', 'Copying an essay on "The Cow" verbatim from a guide'],
      ['कठिन अलंकार व मुहावरे रटाकर लिखवाना', 'Making them memorize tough idioms first'],
      ['वर्तनी की एक गलती पर पूरा पन्ना कटवा देना', 'Crossing out the whole page for one spelling error'],
    ],
    'चित्र वर्णन और अधूरी कहानी पूरी करना बच्चों की कल्पना को पंख देता है और लिखने का भय समाप्त कर मौलिक अभिव्यक्ति सिखाता है।',
    'Picture prompts and open-ended story starters spark imagination, lower writing anxiety, and cultivate authentic self-expression.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'निम्नलिखित में से किस गणितीय अवधारणा को पढ़ाने में "जिओबोर्ड" (Geoboard) और रबर बैंड का प्रयोग सर्वाधिक उपयोगी है?',
    'In teaching which mathematical concept is a "Geoboard" with rubber bands most useful?',
    ['द्विविमीय ज्यामितीय आकृतियों (त्रिभुज, वर्ग, आयत), परिमाप एवं क्षेत्रफल की समझ में', 'Understanding 2D geometric shapes (triangles, squares, rectangles), perimeter, and area'],
    [
      ['दशमलव के भाग में', 'Division of decimals'],
      ['घड़ी देखना सिखाने में', 'Telling time on a clock'],
      ['रोमन अंकों को रटने में', 'Memorizing Roman numerals'],
    ],
    'कीलों वाले बोर्ड (जिओबोर्ड) पर रबर बैंड फंसाकर बच्चे स्वयं विभिन्न आकार बनाते हैं और इकाई वर्ग गिनकर परिमाप व क्षेत्रफल का अंतर प्रत्यक्ष समझते हैं।',
    'Stretching rubber bands on a pegboard lets learners construct polygons and distinguish perimeter from area concretely.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    '"डाइन्स ब्लॉक" (Dienes Blocks) किस गणितीय अवधारणा के शिक्षण हेतु एक प्रसिद्ध हस्तपरक सामग्री (Manipulative) है?',
    '"Dienes Blocks" are a famous manipulative used for teaching which mathematical concept?',
    ['स्थानीय मान (Place Value), दशमलव संख्या प्रणाली एवं जोड़-घटाव में हासिल', 'Place value, base-ten number system, and regrouping in addition/subtraction'],
    [
      ['कोणों के त्रिकोणमितीय अनुपात', 'Trigonometric ratios'],
      ['वृत्त की परिधि', 'Circumference of a circle'],
      ['केवल प्रायिकता', 'Probability only'],
    ],
    'जोल्टन डाइन्स द्वारा विकसित इकाई घन (1), छड़ (10), चपटी प्लेट (100) और बड़ा घन (1000) बच्चों को स्थानीय मान व हासिल लेने की प्रक्रिया मूर्त रूप से दिखाते हैं।',
    'Zoltan Dienes’ base-ten blocks (units, rods, flats, cubes) concretely illustrate place value and carrying/borrowing.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'किसी सूत्र को पहले आगमन से निकालकर और फिर निगमन से अभ्यास कराने की संयुक्त विधि को क्या कहा जाता है?',
    'What is the combined method of deriving a rule inductively first and then practicing it deductively called?',
    ['आगमन-निगमन समन्वित विधि (Inductive-Deductive Method)', 'Inductive-Deductive Method'],
    [
      ['विश्लेषण-प्रोजेक्ट विधि', 'Analytic-Project Method'],
      ['मोंटेसरी-डाल्टन विधि', 'Montessori-Dalton Method'],
      ['व्याख्यान-श्रुतलेख विधि', 'Lecture-Dictation Method'],
    ],
    'आगमन से "समझ व निर्माण" और निगमन से "स्थायीत्व व गति" मिलने के कारण गणित व व्याकरण में यह संयुक्त विधि सर्वश्रेष्ठ मानी जाती है।',
    'Combining induction (for conceptual derivation) and deduction (for fluency and application) is widely regarded as optimal in math and grammar.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'प्रस्तावना कौशल में "पूर्व-ज्ञान से नवीन ज्ञान का संबंध" स्थापित करते समय यदि सभी बच्चे किसी प्रश्न का उत्तर न दे पाएँ (समस्यात्मक प्रश्न), तो शिक्षक को क्या करना चाहिए?',
    'During set induction, when students cannot answer the final "problematic question", what should the teacher do?',
    ['उसी बिंदु से आज के पाठ का "उद्देश्य कथन" (Statement of Aim) प्रस्तुत करना', 'Use that gap to present the "Statement of Aim" for today’s lesson'],
    [
      ['पूरी कक्षा को असफल घोषित कर देना', 'Declare the entire class failed'],
      ['नाराज होकर किताब बंद कर देना', 'Shut the book angrily'],
      ['वही प्रश्न 10 मिनट तक बार-बार पूछते रहना', 'Keep repeating the exact same question for 10 minutes'],
    ],
    'प्रस्तावना का अंतिम प्रश्न "समस्यात्मक" होता ही इसलिए है कि बच्चे अपनी पूर्व-ज्ञान की सीमा महसूस कर नया पाठ सीखने को उत्सुक हों और शिक्षक उद्देश्य कथन कर सके।',
    'The final introductory question is intentionally problematic to create a cognitive gap, allowing the teacher to announce the lesson’s Statement of Aim.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक अपनी कक्षा के बच्चों में वैज्ञानिक दृष्टिकोण जगाने के लिए कौन-सा प्रश्न पूछना पसंद करेगा?',
    'Which question would a teacher choose to cultivate scientific temper in students?',
    ['"कुछ लोग कहते हैं कि रात में पीपल के पेड़ के नीचे नहीं सोना चाहिए; इसके पीछे क्या वैज्ञानिक कारण या भ्रम हो सकता है, हम इसकी जांच कैसे करें?"', '"Some people say not to sleep under a tree at night; what scientific cause or myth might be behind this, and how can we investigate it?"'],
    [
      ['"कहावत है तो मान लो, कारण पूछना मना है"', '"Accept the saying; questioning is forbidden"'],
      ['"किताब के पन्ने संख्या 42 की तीसरी लाइन पढ़ो"', '"Read line 3 on page 42 of the book"'],
      ['"पेड़ की स्पेलिंग लिखकर दिखाओ"', '"Write the spelling of tree"'],
    ],
    'प्रचलित लोक-विश्वासों का परीक्षण करने, प्रमाण खोजने (जैसे रात में श्वसन व CO2 उत्सर्जन) और तर्क से जांचने की प्रवृत्ति ही वैज्ञानिक दृष्टिकोण विकसित करती है।',
    'Examining everyday beliefs through evidence, causal reasoning (e.g., plant respiration at night), and investigation nurtures scientific temper.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 1 में प्रवेश लेने वाले बच्चे शुरुआती दिनों में स्कूल आने से रोते हैं और घर की याद करते हैं। शिक्षक को किस विधि से उन्हें सहज करना चाहिए?',
    'Newly admitted Class 1 children cry and feel homesick in the initial days. How should the teacher help them settle?',
    ['खेल, गीत, कहानी, चित्रकारी और स्नेहपूर्ण संवाद (स्कूल रेडीनेस गतिविधियों) से आत्मीय वातावरण बनाना', 'Build warmth through play, songs, stories, drawing, and affectionate conversation (school readiness activities)'],
    [
      ['पहले दिन से ही भारी बस्ता और पेंसिल लिखने की परीक्षा लेना', 'Give heavy bags and writing tests from Day 1'],
      ['रोने पर अंधेरे कमरे में बंद करने की धमकी देना', 'Threaten to lock them in a dark room'],
      ['अभिभावकों को बुलाकर डांट लगवाना', 'Call parents to scold them'],
    ],
    'बालवाटिका व विद्या प्रवेश (School Readiness) में गीत-संगीत, खेल, खिलौने व स्नेहिल व्यवहार से घर और स्कूल के बीच सहज संक्रमण होता है।',
    'Play, songs, storytelling, and warm teacher rapport ease the transition from home to school during early readiness weeks.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सा "सामाजिक रचनावाद" (Social Constructivism - वाइगोत्स्की) पर आधारित शिक्षण विधि का उदाहरण है?',
    'Which of the following teaching methods is rooted in "Social Constructivism" (Vygotsky)?',
    ['पारस्परिक शिक्षण (Reciprocal Teaching) एवं सहयोगात्मक समूह कार्य', 'Reciprocal Teaching and collaborative group work'],
    [
      ['एकाकी रटंत स्मरण', 'Solitary rote memorization'],
      ['बिना संवाद के मशीन द्वारा ड्रिल', 'Silent machine-based drill without dialogue'],
      ['केवल शिक्षक का एकतरफा भाषण', 'One-way teacher monologue'],
    ],
    'वाइगोत्स्की के अनुसार ज्ञान का निर्माण पहले सामाजिक अंतःक्रिया व संवाद में होता है; पैलिंक्सार व ब्राउन का पारस्परिक शिक्षण (भविष्यवाणी, प्रश्न, स्पष्टीकरण, सारांश) इसका उत्कृष्ट उदाहरण है।',
    'Vygotsky emphasized social interaction and language in learning; Palincsar & Brown’s Reciprocal Teaching (predicting, questioning, clarifying, summarizing) exemplifies this.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"गैलरी वॉक" (Gallery Walk) शिक्षण प्रविधि कक्षा में कैसे संचालित की जाती है?',
    'How is the "Gallery Walk" teaching technique conducted in a classroom?',
    ['छात्र समूहों के पोस्टर/चार्ट दीवारों पर लगाए जाते हैं और सभी समूह घूम-घूम कर उन्हें देखते व उन पर रचनात्मक टिप्पणियाँ लिखते हैं', 'Student groups display posters/charts on walls and rotate around the room to view and leave constructive comments'],
    [
      ['सभी बच्चे कला संग्रहालय में जाकर केवल मूर्तियाँ खरीदते हैं', 'Students go to a museum to buy statues'],
      ['शिक्षक बच्चों को कॉरिडोर में मुर्गा बनाकर चलाते हैं', 'Teachers march students in corridors as punishment'],
      ['बच्चे चुपचाप अपनी सीट पर बैठे रहते हैं', 'Students sit silently in their seats'],
    ],
    'गैलरी वॉक में गतिशीलता, सहपाठी मूल्यांकन, प्रस्तुति और विविध दृष्टिकोण देखने का अवसर एक साथ मिलता है।',
    'Gallery Walk combines physical movement, peer learning, presentation, and constructive feedback as groups rotate through displayed work.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण कौशल के अंतर्गत "श्यामपट्ट का विभाजन" (Blackboard Partitioning) क्यों उपयोगी है?',
    'Why is "Blackboard Partitioning" useful in teaching?',
    ['एक भाग में स्थायी पाठ-सार और दूसरे भाग में अस्थायी उदाहरण/कठिन शब्द/रफ कार्य व्यवस्थित ढंग से किए जा सकते हैं', 'One section can hold the permanent lesson summary while the other handles temporary examples, rough work, or diagrams'],
    [
      ['ताकि दो शिक्षक एक साथ अलग विषय लिख सकें', 'So two teachers can teach different subjects simultaneously'],
      ['ताकि चॉक कम खर्च हो', 'So chalk is saved'],
      ['ताकि बच्चे बोर्ड देख ही न पाएँ', 'So students cannot see the board'],
    ],
    'व्यवस्थित विभाजन (दाएँ/बाएँ खंड) से बोर्ड अव्यवस्थित नहीं होता और पाठ के अंत तक मुख्य रूपरेखा विद्यार्थियों के सामने सुरक्षित रहती है।',
    'Partitioning keeps the board uncluttered, preserving the core outline in one area while allowing dynamic examples or drawings in the other.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'निम्नलिखित में से किस प्रसंग में "आगमन विधि" की तुलना में "निगमन विधि" अधिक व्यावहारिक होगी?',
    'In which of the following contexts would the "Deductive Method" be more practical than the "Inductive Method"?',
    ['उच्च कक्षा में पहले से ज्ञात प्रमेय का उपयोग कर विभिन्न कोण ज्ञात करने के तीव्र अभ्यास में', 'In a higher class for rapid practice finding angles using an already-known theorem'],
    [
      ['कक्षा 2 के बच्चों को पहली बार संज्ञा पहचानना सिखाने में', 'Introducing nouns for the first time to Class 2'],
      ['कक्षा 3 के बच्चों को पैटर्न की खोज कराने में', 'Helping Class 3 discover number patterns'],
      ['प्राथमिक स्तर पर पौधों की जड़ों के प्रकार पहचानने में', 'Identifying root types at the primary level'],
    ],
    'जब अवधारणा या प्रमेय पहले से स्पष्ट हो और समय सीमित हो तथा विविध प्रश्नों का त्वरित अभ्यास कराना हो, तब निगमन विधि अधिक कुशल होती है।',
    'When a theorem is already established and time is limited for varied problem-solving practice, deduction is more efficient.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि में "करके सीखने" के अलावा और कौन-सा महत्वपूर्ण मनोवैज्ञानिक नियम सक्रिय रहता है?',
    'Besides "learning by doing", which other important psychological law is active in the Project Method?',
    ['थॉर्नडाइक के तत्परता, अभ्यास व प्रभाव के नियम (Laws of Readiness, Exercise, and Effect)', 'Thorndike’s Laws of Readiness, Exercise, and Effect'],
    [
      ['दंड एवं भय का नियम', 'Law of Punishment and Fear'],
      ['निष्क्रिय विस्मरण का नियम', 'Law of Passive Forgetting'],
      ['यांत्रिक रटंत का नियम', 'Law of Mechanical Cramming'],
    ],
    'प्रोजेक्ट बच्चे अपनी रुचि से चुनते हैं (तत्परता), सक्रिय कार्य करते हैं (अभ्यास) और सफल उत्पाद से संतोष पाते हैं (प्रभाव का नियम)।',
    'Students choose projects willingly (readiness), work actively (exercise), and experience satisfaction from a tangible outcome (effect).',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षिका कक्षा में "परिवार" विषय पढ़ाते समय बच्चों से उनके घर के सदस्यों और दादा-दादी से सुनी कहानियों के बारे में पूछती है। एक अनाथ बच्चा या एकल-अभिभावक वाला बच्चा चुपचाप असहज दिखता है। शिक्षिका को क्या करना चाहिए?',
    'While teaching "Family", a teacher asks about grandparents and parents; a child from a single-parent or foster home looks uncomfortable. What should the teacher do?',
    ['परिवार के विविध रूपों (संयुक्त, एकल, दादा-दादी या देखभालकर्ता आधारित) को स्वाभाविक व सम्मानजनक मानकर चर्चा को समावेशी बनाना', 'Normalize and respect diverse family structures (joint, single-parent, guardian-led) so every child feels included'],
    [
      ['उस बच्चे से सबके सामने पूछना कि तुम्हारे माता-पिता क्यों नहीं हैं', 'Publicly question why the child does not have both parents'],
      ['कहना कि केवल दो माता-पिता वाला परिवार ही असली परिवार होता है', 'State that only two-parent families are real families'],
      ['उस बच्चे को बाहर भेजकर बाकी बच्चों से बात करना', 'Send that child outside while continuing'],
    ],
    'संवेदनशील शिक्षक परिवार की विविध संरचनाओं को समान सम्मान देता है और ऐसी चर्चा गढ़ता है जिससे कोई भी बच्चा अलग-थलग या हीन महसूस न करे।',
    'An empathetic teacher validates diverse family structures so every child feels valued and emotionally safe.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक अपने पाठ की शुरुआत एक पहेली या विरोधाभासी कथन (जैसे— "लोहे की कील पानी में डूब जाती है, पर लोहे का बना विशाल जहाज क्यों तैरता है?") से करता है। यह किसलिए अत्यंत प्रभावी है?',
    'A teacher opens a lesson with a puzzling question: "An iron nail sinks in water, yet a huge iron ship floats—why?" Why is this opening so effective?',
    ['यह संज्ञानात्मक द्वंद्व (Cognitive Conflict) व प्रबल जिज्ञासा उत्पन्न कर विद्यार्थियों को सीखने हेतु तत्पर करती है', 'It creates cognitive conflict and strong curiosity, priming students eagerly for the concept'],
    [
      ['यह बच्चों को डराने के लिए पूछी जाती है', 'It is asked to intimidate children'],
      ['यह कक्षा में शोर मचाने के लिए है', 'It aims to create noise'],
      ['इसका विज्ञान से कोई संबंध नहीं है', 'It has no relation to science'],
    ],
    'पियाजे के अनुसार विस्मय या संज्ञानात्मक असंतुलन (Disequilibrium) चिंतन को सक्रिय करता है और छात्र स्वयं कारण (उत्प्लावन बल व घनत्व) जानने के लिए उत्सुक हो जाते हैं।',
    'Discrepant events spark cognitive disequilibrium and intense curiosity, motivating learners to investigate concepts like buoyancy and density.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण कौशल प्रशिक्षण में "सिमुलेटेड टीचिंग" (Simulated Teaching / अनुकरणीय शिक्षण) में छात्रों की भूमिका कौन निभाता है?',
    'In "Simulated Teaching" during teacher training, who plays the role of students?',
    ['प्रशिक्षु शिक्षक के अपने सहपाठी (Peer Trainees)', 'The trainee teacher’s own peers (fellow trainees)'],
    [
      ['विद्यालय के प्रधानाचार्य', 'The school principal'],
      ['बच्चों के माता-पिता', 'Students’ parents'],
      ['केवल रोबोट', 'Only robots'],
    ],
    'अनुकरणीय शिक्षण में छात्राध्यापक बारी-बारी से शिक्षक, छात्र और पर्यवेक्षक की भूमिका निभाकर वास्तविक कक्षा में जाने से पहले अभ्यास करते हैं।',
    'In simulated teaching, peer trainees rotate roles as teacher, students, and observers to practice skills in a low-stakes setting before real school teaching.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    'हिंदी की "संवाद/अभिनय विधि" में किस प्रकार के पाठ पढ़ाना सर्वाधिक उपयुक्त रहता है?',
    'Which type of lessons are most suitable for the "Dialogue / Dramatization Method" in Hindi?',
    ['एकांकी, नाटक और संवादात्मक कहानियाँ', 'One-act plays, dramas, and dialogue-rich stories'],
    [
      ['केवल व्याकरण के संधि सूत्र', 'Only grammar sandhi rules'],
      ['केवल शब्दकोश की सूची', 'Only dictionary word lists'],
      ['केवल सांख्यिकीय आँकड़े', 'Only statistical tables'],
    ],
    'एकांकी और संवादात्मक पाठों को विभिन्न पात्रों में बाँटकर उचित हाव-भाव व स्वर के साथ पढ़वाने से पठन सजीव और आनंददायक हो जाता है।',
    'Assigning character roles in plays and dialogue-rich stories brings expressive intonation and comprehension alive.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"संज्ञानात्मक प्रशिक्षुता" (Cognitive Apprenticeship - कॉलिन्स, ब्राउन और न्यूमैन) विधि में शिक्षक क्या करता है?',
    'In the "Cognitive Apprenticeship" method (Collins, Brown & Newman), what does the teacher do?',
    ['अपनी सोचने की प्रक्रिया को जोर से बोलकर प्रदर्शित (Modeling) करता है और धीरे-धीरे जिम्मेदारी छात्रों को सौंपता है', 'Models expert thinking aloud, coaches with scaffolding, and gradually fades support as learners gain autonomy'],
    [
      ['केवल शारीरिक श्रम का काम सिखाता है', 'Teaches only manual labor'],
      ['अपनी सोच बिल्कुल छिपाकर रखता है', 'Keeps thinking processes hidden'],
      ['छात्रों को केवल नोट्स रटने को कहता है', 'Asks students only to memorize notes'],
    ],
    'जैसे पारंपरिक कारीगर काम करके दिखाता है, वैसे ही संज्ञानात्मक प्रशिक्षुता में शिक्षक "मॉडलिंग, कोचिंग, स्कैफोल्डिंग, आर्टिकुलेशन, रिफ्लेक्शन व एक्सप्लोरेशन" द्वारा अदृश्य मानसिक प्रक्रिया को दृश्य बनाता है।',
    'Cognitive apprenticeship makes hidden thinking visible through modeling, coaching, scaffolding, articulation, reflection, and exploration.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से किस शिक्षण कौशल को "सभी शिक्षण कौशलों का आधार" कहा जाता है क्योंकि यह लगभग हर विधि में प्रयुक्त होता है?',
    'Which skill is often regarded as foundational across almost all teaching methods?',
    ['प्रभावी संप्रेषण एवं प्रश्न पूछने का कौशल', 'Effective communication and questioning skill'],
    [
      ['केवल डस्टर पकड़ने का कौशल', 'Only holding the duster'],
      ['केवल रजिस्टर भरने का कौशल', 'Only filling attendance registers'],
      ['केवल घंटी बजाने का कौशल', 'Only ringing the bell'],
    ],
    'स्पष्ट संप्रेषण और विचारोत्तेजक प्रश्नोत्तर व्याख्यान, प्रदर्शन, खोज, परियोजना और चर्चा—सभी शिक्षण विधियों की रीढ़ हैं।',
    'Clear communication and purposeful questioning form the backbone of lectures, demonstrations, inquiry, projects, and discussions alike.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक कक्षा में छात्र लगातार गलत गणितीय निष्कर्ष निकाल रहे हैं: "3/5 बड़ा है या 3/8?" — कई छात्र उत्तर देते हैं "3/8 बड़ा है क्योंकि 8 बड़ा है 5 से।" इस त्रुटि के निवारण हेतु सबसे अच्छी विधि क्या होगी?',
    'Many students answer "3/8 is bigger than 3/5 because 8 is bigger than 5." Which teaching strategy best corrects this misconception?',
    ['दो समान आकार की कागज की पट्टियों को क्रमशः 5 व 8 बराबर भागों में मोड़कर 3-3 भाग रंगकर प्रत्यक्ष तुलना कराना', 'Folding two identical paper strips into 5 and 8 equal parts, shading 3 parts each, and comparing lengths directly'],
    [
      ['केवल नियम रटा देना कि "जिसका हर छोटा हो वह भिन्न बड़ा होता है"', 'Making them memorize "smaller denominator means bigger fraction"'],
      ['गलत उत्तर देने वाले सभी छात्रों को सजा देना', 'Punishing all students who gave the wrong answer'],
      ['तिर्यक गुणा (Cross-multiplication) का यांत्रिक तरीका रटाना', 'Drilling mechanical cross-multiplication only'],
    ],
    'मूर्त कागज पट्टियों (Fraction Strips) पर बच्चा खुद देखता है कि एक ही रोटी के 8 टुकड़े करने पर हर टुकड़ा 5 टुकड़ों वाले से छोटा हो जाता है—इससे अवधारणा जीवन भर के लिए स्पष्ट हो जाती है।',
    'Comparing shaded identical fraction strips makes it visually obvious that dividing a whole into 8 parts yields smaller pieces than dividing into 5.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'व्याकरण शिक्षण की किस विधि को "अव्याकृत विधि" या "संसर्ग विधि" (Incidental / Correlation Method) कहा जाता है?',
    'Which method of teaching grammar is known as the "Incidental / Correlation Method" (संसर्ग विधि)?',
    ['अलग से व्याकरण न पढ़ाकर गद्य-पद्य पाठ पढ़ाते समय प्रसंगानुसार भाषा के शुद्ध रूप व नियमों का ज्ञान कराना', 'Teaching correct language usage and rules contextually during prose/poetry lessons rather than in isolated grammar classes'],
    [
      ['केवल अष्टाध्यायी के सूत्र रटाना', 'Memorizing Panini’s sutras in isolation'],
      ['व्याकरण को विद्यालय से पूरी तरह हटा देना', 'Eliminating grammar completely'],
      ['केवल अनुवाद कराना', 'Doing translation only'],
    ],
    'संसर्ग विधि (अव्याकृत सिद्धांत) में प्रारंभिक स्तर के बच्चों को गद्य-पद्य व संवाद के स्वाभाविक संदर्भ में ही व्याकरण के व्यावहारिक प्रयोग सिखाए जाते हैं।',
    'In the incidental/correlation method, grammar is taught naturally within the context of reading and communication rather than as dry isolated rules.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी पद्धति',
    'मोंटेसरी पद्धति में "संवेदनशील अवधि" (Sensitive Periods) से क्या अभिप्राय है?',
    'What is meant by "Sensitive Periods" in the Montessori method?',
    ['बचपन के वे विशेष विकासात्मक चरण जब बच्चा किसी कौशल (जैसे भाषा, क्रम, इंद्रिय अनुभव) को अत्यंत सहजता व तीव्रता से सीखता है', 'Specific developmental windows in childhood when a child absorbs a particular skill (language, order, sensory refinement) effortlessly'],
    [
      ['वह समय जब बच्चा बीमार रहता है', 'Periods when the child is ill'],
      ['परीक्षा के डर वाला सप्ताह', 'Exam fear week'],
      ['गर्मियों की छुट्टियों का समय', 'Summer vacation time'],
    ],
    'मारिया मोंटेसरी के अनुसार यदि इन संवेदनशील अवधियों में उपयुक्त परिवेश व सामग्री मिले, तो बच्चा बिना थकान और प्रयास के गहन दक्षता अर्जित कर लेता है।',
    'Montessori identified sensitive periods as transient developmental windows of peak receptivity when matching environments yield effortless mastery.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"म्यूजियम तकनीक" या "कक्षा संग्रहालय" (Classroom Museum) का निर्माण बच्चों में किस विधि को पोषित करता है?',
    'Creating a "Classroom Museum" nurtures which learning approach among children?',
    ['संग्रहण, वर्गीकरण, अवलोकन तथा स्थानीय विरासत व प्रकृति से जुड़कर खोज करना', 'Collecting, classifying, observing, and exploring local heritage and nature'],
    [
      ['केवल रटने की क्षमता', 'Only rote memory'],
      ['अन्य बच्चों से वस्तुएँ छीनना', 'Snatching objects from peers'],
      ['निष्क्रिय बैठकर सुनना', 'Sitting passively listening'],
    ],
    'बच्चे अपने आसपास से अलग-अलग बीज, पत्ते, चट्टानें, पुराने सिक्के या डाक टिकट इकट्ठा कर लेबल लगाते हैं, जिससे वैज्ञानिक वर्गीकरण व ऐतिहासिक रुचि जागती है।',
    'Gathering, labeling, and classifying seeds, rocks, leaves, or old coins develops scientific classification and curiosity about local heritage.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षक द्वारा "छात्र के सही उत्तर को दोहराना या उसे विस्तार देना" किस उद्देश्य की पूर्ति करता है?',
    'When a teacher repeats or elaborates on a student’s correct answer, what purpose does it serve?',
    ['पूरी कक्षा तक स्पष्ट आवाज में सही विचार पहुँचाना और उत्तर देने वाले छात्र का उत्साह बढ़ाना', 'Ensuring the whole class hears the accurate point clearly and boosting the respondent’s confidence'],
    [
      ['समय नष्ट करना', 'Wasting time'],
      ['छात्र के उत्तर को गलत साबित करना', 'Proving the student wrong'],
      ['केवल अपनी आवाज सुनाना', 'Showing off one’s own voice'],
    ],
    'हालांकि हर सामान्य उत्तर को यांत्रिक रूप से दोहराना टालना चाहिए, पर महत्वपूर्ण बिंदु को सुस्पष्ट शब्दों में समेकित करने से सभी छात्र लाभान्वित होते हैं।',
    'Thoughtfully amplifying and synthesizing a student’s strong point validates the learner and ensures clarity for the whole class.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं अन्वेषण',
    'निम्नलिखित में से किस कार्य को हम एक अच्छा "शिक्षण प्रोजेक्ट" मानेंगे?',
    'Which of the following tasks would we consider a sound "Educational Project"?',
    ['"हमारे गाँव/मोहल्ले में पक्षियों की घटती संख्या के कारणों की पड़ताल कर उनके लिए दाना-पानी केंद्र बनाना"', '"Investigating reasons for declining bird sightings in our neighborhood and setting up bird-feeder/water stations"'],
    [
      ['"कबूतर पर 10 लाइनें कॉपी में लिखना"', '"Writing 10 lines on a pigeon in a notebook"'],
      ['"किताब में छपे तोते के चित्र में हरा रंग भरना"', '"Coloring a parrot picture printed in the workbook"'],
      ['"पक्षी नाम की सूची रटना"', '"Memorizing a list of bird names"'],
    ],
    'पक्षियों की गिनती, कारणों का सर्वेक्षण और समाधान रूप में दाना-पानी केंद्र बनाना एक वास्तविक समस्या-उन्मुख और सृजनात्मक प्रोजेक्ट है।',
    'Surveying local bird counts, analyzing causes, and implementing feeder/water stations combines authentic investigation with meaningful action.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षिका चाहती हैं कि कक्षा 5 के छात्र "सौर ऊर्जा" के उपयोग को गहराई से समझें। निम्नलिखित में से कौन-सी गतिविधि सर्वाधिक प्रभावशाली होगी?',
    'A teacher wants Class 5 students to deeply understand "Solar Energy". Which activity would be most effective?',
    ['जूते के डिब्बे और एल्युमिनियम फॉयल से सरल "सोलर कुकर" बनवाकर धूप में पानी गर्म करने या पापड़ सेंकने का प्रयोग कराना', 'Building a simple shoebox-and-foil solar cooker to warm water or heat food in sunlight'],
    [
      ['सौर ऊर्जा पर तीन पन्नों का निबंध रटवाना', 'Making students memorize a 3-page essay on solar energy'],
      ['केवल सूर्य की पृथ्वी से दूरी याद कराना', 'Only memorizing the Sun–Earth distance'],
      ['बिना समझाए सौर पैनल की कीमत लिखवाना', 'Dictating solar panel prices without explanation'],
    ],
    'सोलर कुकर बनाकर स्वयं धूप की ऊष्मा से भोजन या पानी गर्म होते देखना बच्चों को सौर ऊर्जा के रूपांतरण की अविस्मरणीय समझ देता है।',
    'Constructing a simple solar cooker and watching sunlight heat water provides unforgettable hands-on understanding of solar energy conversion.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'यदि कक्षा में एक छात्र बहुत धीमी गति से लिखता है और ब्लैकबोर्ड से उतारने में हमेशा पीछे रह जाता है, तो शिक्षक को क्या करना चाहिए?',
    'If a student writes very slowly and always falls behind while copying from the blackboard, what should the teacher do?',
    ['बोर्ड पर कम और संक्षिप्त मुख्य बिंदु लिखना, अतिरिक्त समय देना तथा मुद्रित कार्यपत्रक (Worksheets) उपलब्ध कराना', 'Write concise key points on the board, allow extra time, and provide printed worksheets where helpful'],
    [
      ['बोर्ड तुरंत मिटा देना ताकि वह अपनी गति बढ़ाए', 'Erase the board immediately to force speed'],
      ['उसकी कॉपी फाड़कर उसे पीछे बिठा देना', 'Tear the notebook and move them to the back'],
      ['उसे लिखने से पूरी तरह मना कर देना', 'Forbid them from writing altogether'],
    ],
    'हर बच्चे की सूक्ष्म गत्यात्मक गति (Fine Motor Speed) एक जैसी नहीं होती; अनावश्यक बोर्ड-कॉपी कम करके संक्षिप्त नोट्स व सहयोगी वातावरण देना समावेशी शिक्षण है।',
    'Fine motor speed varies among learners; keeping board notes concise, granting reasonable time, and using worksheets supports inclusion.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"रोल-प्ले" (Role Play) और "नाट्य मंचन" (Full Drama) में क्या सूक्ष्म अंतर होता है?',
    'What is a subtle pedagogical difference between "Role Play" and a "Full Scripted Drama"?',
    ['रोल-प्ले में बिना रटी स्क्रिप्ट के तात्कालिक संवाद व परिस्थिति समाधान पर बल होता है, जबकि नाटक में पूर्व-लिखित संवाद होते हैं', 'Role play emphasizes spontaneous dialogue and situational problem-solving without a rigid script, whereas scripted drama follows memorized lines'],
    [
      ['रोल-प्ले में कोई छात्र भाग नहीं लेता', 'No students participate in role play'],
      ['नाटक केवल गणित में होता है', 'Drama occurs only in mathematics'],
      ['दोनों के लिए रंगमंच और महँगी वेशभूषा अनिवार्य है', 'Both strictly require expensive stage costumes'],
    ],
    'कक्षा में रोल-प्ले तुरंत 5 मिनट में किसी भी सामाजिक या भाषाई स्थिति (जैसे दुकानदार और ग्राहक, या यातायात सिपाही) पर बिना रटे संवादों से कराया जा सकता है।',
    'Classroom role play requires no elaborate scripts or costumes; learners spontaneously improvise dialogue and empathy in real-life scenarios.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रश्नोत्तर विधि',
    '"अनुवर्तन प्रश्न" (Follow-up Questions) पूछने का मुख्य प्रयोजन क्या है?',
    'What is the main purpose of asking "Follow-up Questions"?',
    ['छात्र के उत्तर के पीछे के तर्क ("तुम्हें ऐसा क्यों लगता है?") को जानना और समझ की गहराई बढ़ाना', 'To uncover the reasoning behind a student’s answer ("Why do you think so?") and deepen understanding'],
    [
      ['छात्र को फंसाकर गलत साबित करना', 'To trap and prove the student wrong'],
      ['समय पूरा होने तक टालमटोल करना', 'To stall until time runs out'],
      ['केवल हाजिरी की पुष्टि करना', 'Only to verify attendance'],
    ],
    'जब छात्र सही उत्तर भी दे, तब "कैसे पता चला?" पूछने से पता चलता है कि उसने तुक्का लगाया है या वास्तविक तार्किक प्रक्रिया समझी है।',
    'Asking "How did you figure that out?" even after a correct answer reveals whether reasoning is genuine rather than a lucky guess.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पुनर्बलन" (Reinforcement) कौशल का गलत प्रयोग किस स्थिति में माना जाएगा?',
    'In Micro-teaching, which situation would be considered a misuse of the "Reinforcement" skill?',
    ['गलत उत्तर पर भी "शाबाश, बिल्कुल सही" कह देना या केवल पसंदीदा छात्रों को ही प्रोत्साहित करना', 'Saying "Well done, completely right" for an incorrect answer, or reinforcing only favorite students'],
    [
      ['सही प्रयास पर मुस्कुराकर सहमति देना', 'Smiling and nodding at a genuine effort'],
      ['छात्र के विचार को बोर्ड पर लिखना', 'Writing a student’s idea on the board'],
      ['सभी छात्रों को अवसर व उचित प्रशंसा देना', 'Giving fair praise across all students'],
    ],
    'गलत उत्तर पर झूठी प्रशंसा भ्रम पैदा करती है और पक्षपातपूर्ण पुनर्बलन कक्षा का मनोबल तोड़ता है; पुनर्बलन सत्यनिष्ठ, निष्पक्ष और विवेकपूर्ण होना चाहिए।',
    'Praising an incorrect answer reinforces misconceptions, and favoritism undermines classroom morale; reinforcement must be authentic and equitable.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"प्रत्याशी शिक्षण" या "म्यूचुअल टीचिंग" में यदि कक्षा 5 का छात्र कक्षा 2 के बच्चों को कहानी पढ़कर सुनाए, तो इससे क्या लाभ होता है?',
    'In cross-age peer reading, if a Class 5 student reads stories aloud to Class 2 children, what benefits occur?',
    ['बड़े छात्र का पठन प्रवाह व जिम्मेदारी बढ़ती है तथा छोटे बच्चों में पठन के प्रति आकर्षण पैदा होता है', 'The older student gains reading fluency and responsibility while younger children develop enthusiasm for reading'],
    [
      ['दोनों कक्षाओं की पढ़ाई नष्ट हो जाती है', 'Both classes’ learning gets ruined'],
      ['बड़े छात्र छोटा पाठ्यक्रम पढ़कर सब भूल जाते हैं', 'Older students forget everything'],
      ['शिक्षक को विद्यालय से निकाल दिया जाता है', 'The teacher gets fired'],
    ],
    'क्रॉस-एज बडी रीडिंग (Buddy Reading) एक सिद्ध विधि है जो दोनों आयु वर्ग के बच्चों के आत्मविश्वास, भाषा कौशल और सामाजिक बंधन को मजबूत करती है।',
    'Cross-age buddy reading boosts fluency, empathy, and leadership in older learners while modeling joyful reading for younger children.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'निम्नलिखित में से किस विषय में केवल निगमन विधि से पढ़ाने पर सर्वाधिक नीरसता और रटंत होने की संभावना रहती है?',
    'In which of the following areas does teaching solely through the Deductive Method create the highest risk of boredom and rote learning?',
    ['प्राथमिक स्तर की हिंदी/अंग्रेजी व्याकरण एवं प्रारंभिक गणितीय अवधारणाएँ', 'Primary-level Hindi/English grammar and foundational math concepts'],
    [
      ['प्रयोगशाला में सिद्ध नियमों का सत्यापन', 'Verification of established laws in labs'],
      ['अंतिम परीक्षा की त्वरित पुनरावृत्ति', 'Rapid revision before final exams'],
      ['उच्च गणित में ज्ञात सूत्रों का अनुप्रयोग', 'Applying known formulas in higher math'],
    ],
    'प्राथमिक कक्षाओं में बच्चों का तार्किक अमूर्त चिंतन अभी विकसित हो रहा होता है; सीधे नियम थोपने से वे व्याकरण और गणित दोनों से डरने लगते हैं।',
    'Young learners are still developing abstract reasoning; imposing formal grammar or math rules upfront causes anxiety and mechanical memorization.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'किंडरगार्टन एवं मोंटेसरी',
    'मोंटेसरी और फ्रोबेल दोनों ने प्राथमिक शिक्षण में "दंड" (Punishment) के प्रति क्या दृष्टिकोण अपनाया?',
    'What stance did both Montessori and Froebel take toward "Punishment" in early education?',
    ['दोनों ने शारीरिक व मानसिक दंड का पूर्ण विरोध किया और स्वतंत्रता व स्नेह का समर्थन किया', 'Both strongly opposed physical and mental punishment, advocating freedom with loving guidance'],
    [
      ['दोनों ने गलती पर छड़ी से मारने का नियम बनाया', 'Both prescribed cane punishment for mistakes'],
      ['मोंटेसरी ने दंड का विरोध किया पर फ्रोबेल ने समर्थन किया', 'Montessori opposed punishment while Froebel supported it'],
      ['दोनों ने केवल भोजन बंद करने की सजा सुझाई', 'Both recommended withholding food'],
    ],
    'दोनों शिक्षाशास्त्रियों ने माना कि भय व दंड से बालक का स्वाभाविक विकास अवरुद्ध होता है; सही परिवेश और सार्थक कार्य में व्यस्त रहने से अनुशासन स्वतः उत्पन्न होता है।',
    'Both educationists rejected fear and punishment, believing meaningful activity and loving environments nurture natural self-discipline.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं समस्या-समाधान',
    '"प्रोजेक्ट विधि" और "समस्या-समाधान विधि" में एक प्रमुख अंतर क्या है?',
    'What is a major difference between the "Project Method" and the "Problem-Solving Method"?',
    ['प्रोजेक्ट में प्रायः कोई भौतिक/व्यावहारिक रचना या सामाजिक कार्य पूर्ण होता है, जबकि समस्या-समाधान मुख्यतः बौद्धिक/मानसिक समाधान तक सीमित हो सकता है', 'A project typically culminates in a tangible practical product or social activity, whereas problem-solving may conclude with an intellectual solution'],
    [
      ['समस्या-समाधान में सोचना नहीं पड़ता', 'No thinking is required in problem-solving'],
      ['प्रोजेक्ट में कोई समस्या नहीं होती', 'Projects have no challenges'],
      ['समस्या-समाधान केवल प्राथमिक कक्षा 1 में होता है', 'Problem-solving occurs only in Class 1'],
    ],
    'जैसे "विद्यालय बगीचा बनाना" प्रोजेक्ट है (मूर्त कार्य), वहीं "बीज क्यों नहीं अंकुरित हुए, कारण खोजना" समस्या-समाधान है (बौद्धिक निष्कर्ष)। दोनों में कई चरण साझा हैं।',
    'Creating a school garden is a tangible project, whereas investigating why seeds failed to germinate may end with a reasoned intellectual explanation.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'किसी शिक्षण कौशल में दक्षता प्राप्त करने के लिए सूक्ष्म शिक्षण में किस क्रम का होना आवश्यक है?',
    'To gain mastery in a teaching skill through Micro-teaching, which cyclical principle is essential?',
    ['योजना बनाना → शिक्षण → प्रतिपुष्टि → सुधार कर पुनः योजना → पुनः शिक्षण', 'Plan → Teach → Feedback → Re-plan with improvements → Re-teach'],
    [
      ['बिना योजना के सीधे पढ़ाना और घर चले जाना', 'Teaching without planning and leaving'],
      ['केवल एक बार पढ़ाना और कभी प्रतिपुष्टि न लेना', 'Teaching once and never taking feedback'],
      ['पहले परीक्षा लेना और बाद में योजना बनाना', 'Testing first and planning last'],
    ],
    'सूक्ष्म शिक्षण की शक्ति उसके चक्रीय परिमार्जन (Plan-Teach-Feedback-Re-plan-Re-teach-Re-feedback) में निहित है, जिससे अभ्यास से परिपूर्णता आती है।',
    'The power of micro-teaching lies in its iterative feedback-and-refinement cycle until the trainee masters the target skill.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक चाहता है कि बच्चे "लोक कथाओं" के महत्व को समझें। उसने बच्चों से अपने दादा-दादी या माता-पिता से एक स्थानीय लोककथा सुनकर कक्षा में अपने शब्दों में सुनाने को कहा। इस गतिविधि से क्या नहीं प्राप्त होगा?',
    'A teacher asks students to listen to a local folktale from grandparents/parents and narrate it in class. Which outcome will NOT result from this?',
    ['परिवार और संस्कृति से अलगाव तथा मौखिक अभिव्यक्ति में कमी', 'Alienation from family and culture, and decline in oral expression'],
    [
      ['अंतर-पीढ़ीगत संवाद और सांस्कृतिक जुड़ाव', 'Inter-generational bonding and cultural connection'],
      ['श्रवण एवं मौखिक कथावाचन कौशल का विकास', 'Development of listening and oral storytelling skills'],
      ['घर की भाषा और विद्यालयी शिक्षा के बीच सेतु निर्माण', 'Building a bridge between home language and school learning'],
    ],
    'बुजुर्गों से कहानियाँ सुनकर कक्षा में सुनाने से सांस्कृतिक जुड़ाव, श्रवण, स्मरण और आत्मविश्वास के साथ बोलने की क्षमता बढ़ती है—अलगाव बिल्कुल नहीं होता।',
    'Sharing family folktales strengthens cultural roots, listening, and oral fluency rather than causing alienation.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'प्राथमिक कक्षा में "बहु-संवेदी शिक्षण" (Multi-Sensory Teaching - VAKT) का सही अर्थ क्या है?',
    'What is the correct meaning of "Multi-Sensory Teaching (VAKT)" in primary classes?',
    ['दृश्य (Visual), श्रव्य (Auditory), गतिसंवेदी (Kinesthetic) और स्पर्श (Tactile) माध्यमों का समन्वित प्रयोग', 'Coordinated use of Visual, Auditory, Kinesthetic, and Tactile pathways'],
    [
      ['केवल टेलीविजन पर फिल्म दिखाना', 'Only showing movies on television'],
      ['चार अलग विषयों को एक साथ पढ़ाना', 'Teaching four different subjects simultaneously'],
      ['बच्चों से केवल बोलकर पाठ रटवाना', 'Making children chant lessons aloud'],
    ],
    'VAKT (Fernald/Orton-Gillingham) विधि विशेष रूप से डिस्लेक्सिया सहित सभी बच्चों के लिए अत्यंत प्रभावी है क्योंकि मस्तिष्क को अनेक इंद्रियों से संकेत मिलते हैं।',
    'VAKT engages seeing, hearing, movement, and touch together, proving effective for all learners and especially beneficial for children with learning difficulties.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से किस शिक्षण विधि को "स्व-अनुदेशन प्रणाली" (Self-Instructional System) भी कहा जाता है?',
    'Which of the following teaching methods is also called a "Self-Instructional System"?',
    ['अभिक्रमित अनुदेशन (Programmed Instruction)', 'Programmed Instruction'],
    [
      ['व्याख्यान विधि', 'Lecture Method'],
      ['प्रदर्शन विधि', 'Demonstration Method'],
      ['कहानी कथन विधि', 'Storytelling Method'],
    ],
    'अभिक्रमित अनुदेशन में शिक्षण सामग्री को छोटे-छोटे स्व-व्याख्यात्मक फ्रेमों में व्यवस्थित किया जाता है जिससे विद्यार्थी शिक्षक की प्रत्यक्ष उपस्थिति के बिना भी स्वयं सीख सकता है।',
    'Programmed instruction structures content into self-contained frames with immediate answers, enabling independent self-paced study.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'एक शिक्षक जब किसी छात्र द्वारा दिए गए संक्षिप्त उत्तर को और स्पष्ट कराने के लिए पूछता है— "क्या तुम इस पर एक और कारण या उदाहरण दे सकते हो?" तो यह अनुशीलन कौशल का कौन-सा घटक है?',
    'When a teacher asks after a brief student answer, "Can you add one more reason or example to support that?" which component of probing skill is this?',
    ['अधिक सूचना की माँग करना (Seeking Further Information)', 'Seeking Further Information'],
    [
      ['पुनः केंद्रीकरण (Refocusing)', 'Refocusing'],
      ['संकेत देना (Prompting)', 'Prompting'],
      ['पुनः निर्देशन (Redirecting)', 'Redirecting'],
    ],
    'जब उत्तर आंशिक या संक्षिप्त हो और शिक्षक उसी छात्र से और विवरण/उदाहरण माँगे, तो वह "अधिक सूचना की माँग" कहलाता है; दूसरे छात्र की ओर प्रश्न मोड़ना "पुनः निर्देशन" है।',
    'Asking the same student to elaborate or give an additional reason is Seeking Further Information, whereas passing the question to another student is Redirecting.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'अनुशीलन कौशल में "पुनः निर्देशन" (Redirecting) से क्या तात्पर्य है?',
    'What is meant by "Redirecting" in the Skill of Probing Questions?',
    ['एक ही प्रश्न या अधूरे उत्तर को चर्चा बढ़ाने हेतु कक्षा के अन्य विद्यार्थियों की ओर मोड़ना', 'Directing the same question or incomplete response to other students in the class to broaden participation'],
    [
      ['छात्र को कक्षा से बाहर जाने का रास्ता दिखाना', 'Showing a student the way out of class'],
      ['दूसरे विषय की किताब खोल देना', 'Opening a different subject’s book'],
      ['उत्तर स्वयं बताकर विषय बदल देना', 'Giving the answer oneself and changing the topic'],
    ],
    'पुनः निर्देशन से कक्षा में संवाद केवल शिक्षक और एक छात्र तक सीमित न रहकर अनेक विद्यार्थियों में फैलता है।',
    'Redirecting invites multiple students to contribute or build upon a peer’s response, widening classroom dialogue.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक विद्यालय में भाषा शिक्षण के अंतर्गत प्रतिदिन 15 मिनट "ड्रॉप एवरीथिंग एंड रीड" (DEAR) समय रखा जाता है, जिसमें शिक्षक सहित सभी लोग अपनी पसंद की कहानी की किताब पढ़ते हैं। इसका क्या लाभ है?',
    'A school holds a daily 15-minute "Drop Everything and Read" (DEAR) time where both teachers and students read books of their choice. What is the benefit?',
    ['पठन की आदत, स्वायत्तता और शिक्षक के आदर्श व्यवहार द्वारा पठन संस्कृति का निर्माण', 'Building a culture of joyful reading habits, learner autonomy, and teacher role-modeling'],
    [
      ['केवल परीक्षा के पाठ्यक्रम को रटना', 'Memorizing exam syllabus only'],
      ['पढ़ने से बचने का बहाना मिलना', 'Finding an excuse to avoid study'],
      ['लिखने की गति कम होना', 'Reducing writing speed'],
    ],
    'जब बच्चे शिक्षक को भी आनंद से किताब पढ़ते देखते हैं और स्वयं अपनी रुचि की पुस्तक चुनते हैं, तो पढ़ना बोझ के बजाय आजीवन आदत बनता है।',
    'Seeing teachers model reading for pleasure and choosing books freely cultivates intrinsic reading motivation and lifelong reading habits.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'व्याकरण शिक्षण की "आगमन-निगमन प्रणाली" में निम्नलिखित में से किस पर विशेष ध्यान दिया जाता है?',
    'In the "Inductive-Deductive system" of grammar teaching, what receives special emphasis?',
    ['उदाहरणों के विश्लेषण से नियम निकालना और फिर अभ्यास द्वारा उसकी पक्की पुष्टि करना', 'Deriving rules by analyzing examples and then consolidating them through guided practice'],
    [
      ['केवल संस्कृत के सूत्र कंठस्थ करना', 'Memorizing Sanskrit sutras only'],
      ['बिना उदाहरण के परिभाषा लिखवाना', 'Dictating definitions without examples'],
      ['व्याकरण के नियमों को गलत सिद्ध करना', 'Proving grammar rules wrong'],
    ],
    'अवधारणा की उत्पत्ति (आगमन) और अनुप्रयोग (निगमन) दोनों मिलकर भाषा के शुद्ध प्रयोग को स्थायी बनाते हैं।',
    'Combining rule discovery (induction) with structured application (deduction) builds both grammatical insight and accuracy.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सा "शिक्षण कौशल" और "शिक्षण विधि" के बीच का सही अंतर है?',
    'Which of the following correctly distinguishes a "Teaching Skill" from a "Teaching Method"?',
    ['शिक्षण विधि व्यापक समग्र रणनीति है (जैसे प्रोजेक्ट विधि), जबकि शिक्षण कौशल विशिष्ट सूक्ष्म व्यवहार है (जैसे प्रश्न पूछना, श्यामपट्ट लेखन)', 'A teaching method is a broad overall instructional approach, whereas a teaching skill is a specific micro-behavior like questioning or reinforcement'],
    [
      ['शिक्षण विधि केवल 5 मिनट की होती है और कौशल 1 वर्ष का', 'A method lasts 5 minutes while a skill lasts 1 year'],
      ['दोनों शब्दों का अर्थ पूर्णतः एक ही है और कोई भेद नहीं', 'Both terms mean the exact same thing'],
      ['शिक्षण कौशल केवल छात्रों द्वारा प्रयोग किए जाते हैं', 'Teaching skills are used only by students'],
    ],
    'एक ही शिक्षण विधि (जैसे प्रदर्शन या ह्यूरिस्टिक) के भीतर शिक्षक प्रस्तावना, प्रश्नोत्तर, पुनर्बलन और श्यामपट्ट लेखन जैसे कई शिक्षण कौशलों का प्रयोग करता है।',
    'A broad teaching method integrates multiple specific teaching skills (such as set induction, questioning, reinforcement, and board writing).',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 4 में "आकृतियों की सममिति" (Symmetry) सिखाने के लिए सबसे सटीक गतिविधि क्या होगी?',
    'Which activity would be most accurate for teaching "Symmetry of Shapes" in Class 4?',
    ['कागज को बीच से मोड़कर आधा तितली/पत्ता काटवाना या स्याही-धब्बा (Ink-blot) गतिविधि कराकर सममित रेखा खोजना', 'Paper-folding and cutting half-butterflies/leaves or ink-blot activities to discover lines of symmetry'],
    [
      ['सममिति की परिभाषा ब्लैकबोर्ड से 5 बार कॉपी में लिखवाना', 'Copying the definition of symmetry 5 times from the board'],
      ['केवल त्रिज्या और व्यास के सूत्र रटवाना', 'Making students memorize radius and diameter formulas'],
      ['बच्चों से आंख बंद कर लेने को कहना', 'Asking children to close their eyes'],
    ],
    'कागज मोड़कर काटने या स्याही की बूंद को कागज मोड़कर फैलाने से बच्चे दोनों हिस्सों का हूबहू मिलान (Overlapping) प्रत्यक्ष देख व छू सकते हैं।',
    'Paper folding and ink-blot activities let children directly see and touch identical overlapping halves along the line of symmetry.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'विनेटका योजना (Carleton Washburne) में पाठ्यक्रम को किन दो भागों में विभाजित किया गया था?',
    'In Carleton Washburne’s Winnetka Plan, into which two parts was the curriculum divided?',
    ['सामान्य आवश्यक ज्ञान/कौशल (व्यक्तिगत स्व-गति कार्य) तथा समूह एवं सृजनात्मक गतिविधियाँ', 'Common essentials (individual self-paced mastery) and group/creative social activities'],
    [
      ['लिखित परीक्षा तथा शारीरिक दंड', 'Written exams and physical punishment'],
      ['सुबह केवल गणित और शाम को केवल आराम', 'Morning math only and evening rest'],
      ['प्रयोगशाला तथा कारखाना श्रम', 'Laboratory and factory labor'],
    ],
    'वाशबर्न ने बुनियादी कौशल (पठन, लेखन, गणित) में स्व-गति व्यक्तिगत इकाइयाँ रखीं और कला, नाटक, खेल व नागरिक कार्यों को सामूहिक रखा ताकि सामाजिक विकास भी न छूटे।',
    'Washburne paired individualized mastery units for basic skills with collaborative arts, drama, and social activities to avoid isolation.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक जब बच्चों को कठिन विषय पढ़ाने के बाद उनसे कहता है— "अब आप खुद बताइए कि इस पाठ में से कौन-कौन से अच्छे प्रश्न बन सकते हैं?" तो वह किस कौशल को बढ़ावा दे रहा है?',
    'After teaching a lesson, a teacher asks students, "Now create some good questions of your own from this chapter." Which ability is being promoted?',
    ['उच्च स्तरीय समझ, स्व-मूल्यांकन एवं प्रश्न-निर्माण द्वारा सक्रिय समीक्षा', 'Deep comprehension, self-assessment, and active review through question generation'],
    [
      ['शिक्षक का आलस्य कि उसे प्रश्न न बनाने पड़ें', 'Teacher laziness to avoid making questions'],
      ['रटंत विद्या का अंधानुकरण', 'Blind imitation of rote learning'],
      ['अनावश्यक समय की बर्बादी', 'Needless waste of time'],
    ],
    'स्वयं प्रश्न गढ़ने के लिए विद्यार्थी को पूरे पाठ के मुख्य बिंदुओं, कारण-प्रभाव और संभावित भ्रमों का गहन विश्लेषण करना पड़ता है।',
    'Generating thoughtful questions requires analyzing key concepts, causal links, and subtle details—a powerful metacognitive strategy.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"KWL चार्ट" (Know – Want to know – Learned) शिक्षण प्रविधि का प्रयोग कक्षा में किस प्रकार किया जाता है?',
    'How is the "KWL Chart" (Know – Want to know – Learned) technique used in the classroom?',
    ['पाठ से पहले पूर्व-ज्ञान (K) व जिज्ञासाएँ (W) दर्ज करके और पाठ के बाद जो सीखा (L) उसे लिखकर अधिगम की निगरानी करना', 'Recording prior knowledge (K) and questions (W) before the lesson, then summarizing what was learned (L) afterward'],
    [
      ['केवल छात्रों की लंबाई, वजन और उम्र लिखने के लिए', 'Only to record height, weight, and age'],
      ['अंग्रेजी वर्णमाला के केवल तीन अक्षर सिखाने के लिए', 'To teach only three English letters'],
      ['परीक्षा में नकल रोकने के लिए', 'To stop cheating in exams'],
    ],
    'डोना ओगल द्वारा विकसित KWL चार्ट विद्यार्थियों को अपने पूर्व-ज्ञान से जुड़ने, उद्देश्यपूर्ण पढ़ने और अंत में अपनी सीख पर चिंतन (Metacognition) करने में मदद करता है।',
    'Developed by Donna Ogle, the KWL chart activates prior knowledge, sets learning goals, and fosters post-lesson metacognitive reflection.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 2 में एक बच्चा "14 + 7" को जोड़ते समय 14 के बाद उंगलियों पर 7 आगे गिनकर सही उत्तर "21" निकालता है। शिक्षक को क्या करना चाहिए?',
    'In Class 2, while solving "14 + 7", a child counts 7 steps forward on fingers from 14 to get "21". What should the teacher do?',
    ['उंगलियों से गिनने पर रोक लगाने के बजाय इस सही रणनीति (Counting On) की सराहना कर धीरे-धीरे दहाई बनाने की मानसिक युक्ति की ओर ले जाना', 'Praise this valid "counting-on" strategy instead of banning finger counting, and gradually bridge toward making-ten mental strategies'],
    [
      ['उंगलियां उपयोग करने पर हाथ पर स्केल मारना', 'Hit the hand with a ruler for using fingers'],
      ['कहना कि उंगलियों पर गिनना केवल मूर्ख बच्चों की आदत है', 'Say finger counting is only for foolish kids'],
      ['बच्चे को 21 तक के सारे जोड़ रटवा देना', 'Force rote memorization of all sums up to 21'],
    ],
    'न्यूरोसाइंस व गणित शिक्षणशास्त्र दर्शाते हैं कि प्रारंभिक चरण में उंगलियों पर आगे गिनना (Counting on) संख्या-बोध का महत्वपूर्ण व स्वाभाविक सोपान है।',
    'Research in math pedagogy confirms that finger-based counting-on is a healthy developmental bridge toward mental base-ten strategies.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'शिक्षण के दौरान "मापन योग्य और स्पष्ट अनुदेशात्मक उद्देश्य" (Instructional Objectives) निर्धारित करने का क्या लाभ है?',
    'What is the benefit of defining "measurable and clear Instructional Objectives" before teaching?',
    ['शिक्षण विधि, शिक्षण सामग्री (TLM) और मूल्यांकन प्रश्नों का चयन सटीक व लक्ष्योन्मुखी हो जाता है', 'Selection of teaching methods, TLMs, and assessment items becomes focused and aligned'],
    [
      ['रजिस्टर में अधिक पन्ने भर जाते हैं', 'More pages get filled in the register'],
      ['छात्रों को कोई गतिविधि नहीं करनी पड़ती', 'Students do not have to do any activity'],
      ['शिक्षक बिना पढ़ाए मूल्यांकन कर सकता है', 'Teachers can test without teaching'],
    ],
    'जब उद्देश्य स्पष्ट हो (जैसे "छात्र पत्तियों के भागों की पहचान कर सकेंगे"), तो उसी के अनुरूप गतिविधि और आकलन (Alignment) सहजता से तय हो जाता है।',
    'Clear objectives align instruction, learning activities, and assessment directly toward targeted student competencies.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'जॉन डीवी ने किस प्रकार के विद्यालय को "लघु समाज" (Miniature Society) कहा था?',
    'Which institution did John Dewey describe as a "Miniature Society"?',
    ['विद्यालय (School) को', 'The School'],
    [
      ['कारागार को', 'The Prison'],
      ['केवल पुस्तकालय को', 'Only the Library'],
      ['केवल परीक्षा केंद्र को', 'Only the Examination Hall'],
    ],
    'जॉन डीवी के अनुसार विद्यालय समाज से कटा हुआ द्वीप नहीं बल्कि एक "लघु समाज" है, जहाँ बच्चे सहयोग, लोकतंत्र और वास्तविक सामाजिक जीवन का अभ्यास करते हैं।',
    'John Dewey viewed the school as a "miniature society" where children practice democracy, cooperation, and purposeful social living.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'निम्नलिखित में से किस कथन द्वारा आगमन और निगमन विधि के बीच का अंतर सही रूप से स्पष्ट होता है?',
    'Which statement accurately distinguishes the Inductive Method from the Deductive Method?',
    ['आगमन में बच्चा स्वयं नियम खोजता है (उदाहरण → नियम), जबकि निगमन में नियम पहले देकर अभ्यास कराया जाता है (नियम → उदाहरण)', 'Induction lets learners derive the rule (Example → Rule), whereas deduction gives the rule first for practice (Rule → Example)'],
    [
      ['आगमन केवल विज्ञान में और निगमन केवल इतिहास में प्रयुक्त होता है', 'Induction is only for science and deduction only for history'],
      ['आगमन में उदाहरण नहीं होते, निगमन में नियम नहीं होते', 'Induction lacks examples and deduction lacks rules'],
      ['दोनों में शिक्षक की भूमिका बिल्कुल समान रहती है', 'Teacher role is identical in both'],
    ],
    'आगमन विशेष उदाहरणों से सामान्य नियम तक पहुँचने की खोज प्रक्रिया है और निगमन सामान्य नियम को विशेष उदाहरणों पर लागू करने की सत्यापन व अभ्यास प्रक्रिया है।',
    'Induction moves from specific examples to a generalized rule, while deduction moves from a stated rule to specific applications.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि में निम्नलिखित में से किस बात से शिक्षक को सदैव बचना चाहिए?',
    'In the Heuristic Method, which practice should a teacher always avoid?',
    ['विद्यार्थी के थोड़ा अटकते ही अधीर होकर स्वयं पूरा उत्तर या निष्कर्ष बता देना', 'Growing impatient as soon as a student pauses and telling them the complete answer or conclusion'],
    [
      ['प्रयोगशाला में सुरक्षा सावधानियां बताना', 'Explaining lab safety precautions'],
      ['प्रारंभिक समस्या स्पष्ट रूप से प्रस्तुत करना', 'Stating the initial problem clearly'],
      ['विद्यार्थी के अवलोकन की सराहना करना', 'Appreciating the student’s observation'],
    ],
    'यदि शिक्षक तुरंत उत्तर बता दे, तो छात्र में खोजने और मानसिक संघर्ष से निष्कर्ष तक पहुँचने का अवसर समाप्त हो जाता है।',
    'Giving away the answer too quickly short-circuits the learner’s investigative effort and defeats the purpose of discovery.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में पाठ पढ़ाते समय देखता है कि दो छात्र चुपचाप कागज के हवाई जहाज बना रहे हैं। डांटने के बजाय शिक्षक उन्हें अपने पास बुलाकर विज्ञान के "वायु दाब और ग्लाइडर के उड़ने" के विषय से उन्हें जोड़ देता है। शिक्षक का यह कौशल क्या दर्शाता है?',
    'Noticing two students secretly folding paper airplanes, a teacher avoids scolding and links their planes to a science lesson on air pressure and flight. What does this reflect?',
    ['तत्काल स्थितिजन्य अनुकूलन, सकारात्मक पुनर्निर्देशन एवं बाल-रुचि का शैक्षिक उपयोग', 'Situational adaptability, positive redirection, and harnessing student interest pedagogically'],
    [
      ['कक्षा पर नियंत्रण न रख पाने की कमजोरी', 'Weakness in classroom control'],
      ['बच्चों को पढ़ाई से भटकाना', 'Distracting children from studies'],
      ['पाठ्यक्रम के प्रति लापरवाही', 'Negligence toward curriculum'],
    ],
    'बच्चों की तात्कालिक रुचि को दंडित करने के बजाय उसे शिक्षण-अधिगम का हिस्सा बना लेना अत्यंत रचनात्मक व संवेदनशील शिक्षण कौशल है।',
    'Channeling students’ spontaneous interest into an authentic physics demonstration turns potential disruption into joyful engagement.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'प्राथमिक कक्षा में "पर्यावरण के प्रति संवेदनशीलता" सिखाने हेतु निम्नलिखित में से कौन-सी विधि सबसे कम प्रभावी होगी?',
    'Which method would be LEAST effective for cultivating "environmental sensitivity" in primary students?',
    ['पर्यावरण दिवस पर केवल परिभाषाएँ लिखवाकर याद करने का टेस्ट लेना', 'Simply dictating definitions on Environment Day and giving a memorization test'],
    [
      ['प्रत्येक बच्चे द्वारा एक पौधा लगाकर उसकी देखभाल करना', 'Each child planting and caring for a sapling'],
      ['विद्यालय परिसर में कचरा पृथक्करण (गीला/सूखा) अभियान चलाना', 'Running a wet/dry waste segregation drive on campus'],
      ['प्रकृति भ्रमण कर पक्षियों व पेड़ों का अवलोकन करना', 'Nature walks to observe trees and birds'],
    ],
    'संवेदनशीलता और मूल्य केवल परिभाषाएँ रटने से नहीं, बल्कि प्रत्यक्ष देखभाल, प्रकृति से जुड़ाव और व्यावहारिक भागीदारी से विकसित होते हैं।',
    'Values and environmental care grow from hands-on stewardship and nature connection, not from memorizing definitions.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'डाल्टन योजना',
    'डाल्टन योजना के अंतर्गत यदि कोई विद्यार्थी एक विषय में तेज है और दूसरे विषय में धीमा, तो यह प्रणाली उसकी मदद कैसे करती है?',
    'Under the Dalton Plan, if a student is fast in one subject and slow in another, how does the system help?',
    ['विद्यार्थी अपनी गति के अनुसार तेज विषय में आगे बढ़ सकता है और कठिन विषय की प्रयोगशाला में अधिक समय दे सकता है', 'The student can progress swiftly in stronger subjects while spending extra time in the laboratory of harder subjects'],
    [
      ['उसे पूरे साल एक ही कक्षा में रोक दिया जाता है', 'The student is detained in the whole grade'],
      ['उसे कमजोर विषय छोड़ने को कहा जाता है', 'The student is told to drop the weak subject'],
      ['सभी विषयों में समान घंटी बजती है और काम छीन लिया जाता है', 'Fixed bells force identical time in every subject'],
    ],
    'व्यक्तिगत समय-प्रबंधन (Budgeting of Time) डाल्टन योजना की प्रमुख शक्ति है; छात्र अपनी आवश्यकतानुसार समय का आवंटन करता है।',
    'Flexible time-budgeting lets students allocate more hours to challenging subject labs without holding back their stronger areas.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    '"उद्दीपन परिवर्तन कौशल" (Stimulus Variation) किस मनोवैज्ञानिक तथ्य पर आधारित है?',
    'The "Skill of Stimulus Variation" is based on which psychological fact?',
    ['निरंतर एक ही जैसे उद्दीपक से ध्यान हट जाता है, जबकि नियंत्रित विविधता ध्यान को पुनः केंद्रित रखती है', 'Monotonous unchanging stimuli cause habituation and inattention, whereas controlled variation sustains focus'],
    [
      ['मनुष्य केवल अंधेरे में सीख सकता है', 'Humans can learn only in the dark'],
      ['बच्चे एक साथ दस अलग आवाजें सुनकर बेहतर सीखते हैं', 'Children learn best with ten simultaneous loud noises'],
      ['शिक्षक के चुप रहने से ज्ञान स्वतः आ जाता है', 'Silence alone transmits knowledge'],
    ],
    'मानव ध्यान स्वाभाविक रूप से परिवर्तन के प्रति संवेदनशील होता है; आवाज, गति, माध्यम व अंतःक्रिया में सोद्देश्य बदलाव संज्ञानात्मक सतर्कता बनाए रखते हैं।',
    'Human attention naturally adapts away from unchanging stimuli; purposeful shifts in voice, movement, and media sustain cognitive alertness.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'भाषा शिक्षण विधियाँ',
    '"संप्रेषणात्मक भाषा शिक्षण" (Communicative Language Teaching - CLT) का मुख्य लक्ष्य क्या है?',
    'What is the main goal of "Communicative Language Teaching (CLT)"?',
    ['संप्रेषणात्मक दक्षता (Communicative Competence)—अर्थात् वास्तविक सामाजिक स्थितियों में अर्थपूर्ण भाषा का प्रयोग कर पाना', 'Communicative Competence—the ability to use language meaningfully and appropriately in real social contexts'],
    [
      ['केवल व्याकरण के अपवादों को रटना', 'Only memorizing grammar exceptions'],
      ['अंग्रेजी के प्राचीन साहित्य का शब्दशः अनुवाद करना', 'Word-for-word translation of archaic literature'],
      ['बिना बोले केवल निबंध लिखना', 'Writing essays silently without ever speaking'],
    ],
    'CLT (डेल हाइम्स) में व्याकरणिक शुद्धता के साथ-साथ सामाजिक संदर्भ के अनुरूप प्रभावी बातचीत, सुनना, पढ़ना व लिखना प्रमुख होता है।',
    'CLT (rooted in Dell Hymes’ communicative competence) prioritizes real-life meaningful communication over isolated structural drills.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'गणित एवं विज्ञान विधियाँ',
    'गणित में "मॉन्टेसरी की गोल्डन बीड्स" (Golden Beads) या "बंडल और तीलियाँ" (Bundles & Sticks) किसलिए प्रयुक्त होती हैं?',
    'In mathematics, what are "Bundles and Sticks" or "Golden Beads" used for?',
    ['इकाई, दहाई, सैकड़ा की अवधारणा तथा जोड़-घटाव में समूह बनाने (Regrouping) को मूर्त रूप से समझाने हेतु', 'To concretely demonstrate ones, tens, hundreds, and regrouping in addition and subtraction'],
    [
      ['केवल माला गूंथने के लिए', 'Only for making necklaces'],
      ['कोण मापने के लिए', 'For measuring angles'],
      ['बीजगणित के द्विघात समीकरण हल करने के लिए', 'For solving quadratic equations'],
    ],
    '10 तीलियों का एक बंडल बनाकर "एक दहाई" दिखाने से बच्चे स्थानीय मान और हासिल/उधार की अवधारणा कभी नहीं भूलते।',
    'Bundling 10 single sticks into one "ten" makes place value and regrouping tangible and intuitive for young children.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "पुनः पाठ योजना" और "शिक्षण" के बीच कौन-सा चरण आता है?',
    'Which stage comes between "Teach" and "Re-plan" in the Micro-teaching cycle?',
    ['प्रतिपुष्टि (Feedback)', 'Feedback'],
    [
      ['पुनः प्रतिपुष्टि (Re-feedback)', 'Re-feedback'],
      ['पुनः शिक्षण (Re-teach)', 'Re-teach'],
      ['वार्षिक परीक्षा (Annual Exam)', 'Annual Exam'],
    ],
    'क्रम इस प्रकार है: शिक्षण (6 मिनट) → प्रतिपुष्टि (6 मिनट) → पुनः पाठ योजना (12 मिनट) → पुनः शिक्षण (6 मिनट) → पुनः प्रतिपुष्टि (6 मिनट)।',
    'The cycle runs: Teach (6 min) → Feedback (6 min) → Re-plan (12 min) → Re-teach (6 min) → Re-feedback (6 min).',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"स्टीम शिक्षा" (STEAM Education) में कला (Arts) को विज्ञान, प्रौद्योगिकी, अभियांत्रिकी और गणित के साथ क्यों जोड़ा गया है?',
    'Why is "Arts" integrated with Science, Technology, Engineering, and Math in "STEAM Education"?',
    ['डिजाइन चिंतन, सृजनशीलता, सौंदर्यबोध और मानवीय अभिव्यक्ति को तकनीकी समस्या-समाधान से जोड़ने हेतु', 'To unite design thinking, creativity, aesthetics, and human expression with technical problem-solving'],
    [
      ['ताकि विज्ञान पढ़ना बंद कर दिया जाए', 'So science teaching can be stopped'],
      ['ताकि केवल पेंटिंग से गणित के अंक मिलें', 'So math marks are awarded just for painting'],
      ['ताकि प्रयोगशालाएँ बंद हो जाएँ', 'So laboratories can be closed'],
    ],
    'STEM में A (Arts) जोड़ने से विद्यार्थी केवल तकनीकी हल नहीं खोजते, बल्कि कल्पनाशील, उपयोगी और मानवीय संवेदना से युक्त नवाचार (Innovation) करते हैं।',
    'Adding Arts to STEM fosters divergent design thinking, visual communication, and human-centered innovation.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक किसी पाठ को पढ़ाते समय बीच-बीच में छात्रों से कहता है— "यदि आप इस कहानी के मुख्य पात्र की जगह होते, तो क्या निर्णय लेते?" यह प्रश्न किस प्रकार के चिंतन को प्रेरित करता है?',
    'During a lesson, a teacher asks, "If you were in the main character’s place, what decision would you make?" Which type of thinking does this stimulate?',
    ['समानुभूति (Empathy), मूल्य-निर्णय एवं अपसारी चिंतन', 'Empathy, ethical reasoning, and divergent thinking'],
    [
      ['केवल यांत्रिक स्मरण', 'Mechanical recall only'],
      ['गणितीय गणना', 'Mathematical computation'],
      ['अक्षर पहचान', 'Letter recognition'],
    ],
    'स्वयं को पात्र की परिस्थिति में रखकर सोचना संवेगात्मक बुद्धि, नैतिक तर्क और मौलिक निर्णय क्षमता को विकसित करता है।',
    'Stepping into a character’s shoes cultivates perspective-taking, ethical reflection, and open-ended decision-making.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'निम्नलिखित में से कौन-सी विधि "अज्ञात से ज्ञात" (Unknown to Known) सूत्र पर चलती है?',
    'Which of the following methods proceeds from "Unknown to Known"?',
    ['विश्लेषण विधि (Analytic Method)', 'Analytic Method'],
    [
      ['संश्लेषण विधि (Synthetic Method)', 'Synthetic Method'],
      ['प्रदर्शन विधि (Demonstration Method)', 'Demonstration Method'],
      ['कहानी विधि (Storytelling Method)', 'Storytelling Method'],
    ],
    'विश्लेषण विधि में जो सिद्ध या हल करना है (अज्ञात), वहाँ से शुरू करके टुकड़ों में तोड़ते हुए ज्ञात आधारों तक पहुँचा जाता है।',
    'The analytic method starts with the unknown goal/conclusion and breaks it down backward until reaching known givens.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि के संदर्भ में "संयोजन या समवाय का सिद्धांत" (Principle of Correlation) कैसे सिद्ध होता है?',
    'How is the "Principle of Correlation" realized in the Project Method?',
    ['एक ही प्रोजेक्ट (जैसे स्कूल कैंटीन या बगीचा) को करते समय गणित, भाषा, विज्ञान व कला स्वतः जुड़ जाते हैं', 'While executing a single project (like a school garden), math, language, science, and art integrate naturally'],
    [
      ['प्रत्येक विषय का अलग-अलग टेस्ट लेने से', 'By taking separate tests for every subject'],
      ['सभी विषयों की समय-सारिणी अलग रखने से', 'By keeping strict separate timetables'],
      ['केवल एक किताब पढ़ने से', 'By reading just one book'],
    ],
    'उदाहरणार्थ स्कूल बगीचे के प्रोजेक्ट में मापन व क्षेत्रफल (गणित), मिट्टी व अंकुरण (विज्ञान), रिपोर्ट व लेबल (भाषा) सभी स्वाभाविक रूप से एक साथ सीखे जाते हैं।',
    'In a school garden project, measuring plots (math), studying soil and seeds (science), and writing logs (language) correlate seamlessly.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी एवं किंडरगार्टन',
    'मोंटेसरी के शिक्षण उपकरणों में "गुलाबी मीनार" (Pink Tower) बच्चों को मुख्यतः किसका बोध कराती है?',
    'In Montessori apparatus, what does the "Pink Tower" primarily help children perceive?',
    ['त्रिविमीय आकार, आयतन के क्रमिक अंतर (बड़े से छोटे) एवं नेत्र-हस्त समन्वय', 'Three-dimensional size progression (largest to smallest), visual discrimination of volume, and hand-eye coordination'],
    [
      ['केवल गुलाबी रंग का नाम रटना', 'Only memorizing the name "pink"'],
      ['अंग्रेजी के स्वर और व्यंजन', 'English vowels and consonants'],
      ['ऐतिहासिक तिथियाँ', 'Historical dates'],
    ],
    'गुलाबी मीनार में 1 सेमी से 10 सेमी तक के दस लकड़ी के घन होते हैं जिन्हें क्रम से रखने पर बच्चा आयतन, संतुलन व दस-आधारित माप का सूक्ष्म बोध प्राप्त करता है।',
    'The Pink Tower has 10 cubes ranging from 1 cm to 10 cm, building visual discrimination of volume, order, and motor precision.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उद्दीपन परिवर्तन कौशल" में "इंद्रिय परिवर्तन" (Switching Sensory Channels) से क्या अभिप्राय है?',
    'In the Skill of Stimulus Variation, what does "Switching Sensory Channels" mean?',
    ['शिक्षण के दौरान केवल सुनने (मौखिक) से बदलकर देखने (चित्र/चार्ट) और छूने/करने (मॉडल/गतिविधि) के माध्यम पर आना', 'Shifting during teaching from auditory (listening) to visual (charts/board) and tactile/kinesthetic (models/activity)'],
    [
      ['कक्षा की लाइट बार-बार बंद व चालू करना', 'Turning classroom lights off and on repeatedly'],
      ['छात्रों को दूसरी कक्षा में भेज देना', 'Sending students to another room'],
      ['माइक से स्पीकर बदलना', 'Changing mic speakers'],
    ],
    'जब शिक्षक बोलने के साथ-साथ चित्र दिखाता है और फिर कोई वस्तु छूने या गतिविधि करने देता है, तो विभिन्न संवेदी चैनल सक्रिय होकर सीखने को गहरा बनाते हैं।',
    'Alternating among auditory, visual, and tactile modes refreshes attention and reinforces concepts across sensory pathways.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक प्राथमिक शिक्षक कक्षा में नए विद्यार्थियों के नाम याद रखने और हर बच्चे से व्यक्तिगत जुड़ाव बनाने के लिए शुरुआती दिनों में क्या प्रभावी उपाय कर सकता है?',
    'To learn students’ names and build personal rapport in the initial days, what effective step can a primary teacher take?',
    ['बच्चों से स्वयं अपना नाम-कार्ड (Name Tag) सजाकर मेज/कपड़े पर लगवाना और संवाद में नाम लेकर संबोधित करना', 'Have children decorate personal name tags and address every child warmly by name during interactions'],
    [
      ['सभी बच्चों को उनके रोल नंबर से ही पुकारना', 'Call every child solely by roll number'],
      ['केवल मॉनिटर का नाम याद रखना', 'Remember only the class monitor’s name'],
      ['पूरे साल नाम पूछे बिना पढ़ाना', 'Teach all year without learning names'],
    ],
    'नाम से पुकारे जाने पर बच्चा कक्षा में अपनी पहचान और महत्व महसूस करता है; रोल नंबर से पुकारना यांत्रिक और अलगाव पैदा करने वाला होता है।',
    'Addressing children by name affirms individual identity and warmth, unlike impersonal roll-number calling.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षिका कक्षा 5 में "सरकार और कर (Taxes)" जैसा अमूर्त सामाजिक विषय पढ़ा रही हैं। इसे सरल व बोधगम्य बनाने के लिए कौन-सी विधि सर्वोत्तम होगी?',
    'A teacher is teaching an abstract civics topic like "Government and Taxes" to Class 5. Which method will make it clearest?',
    ['"कक्षा-फंड" या "मध्याह्न भोजन/सड़क/स्कूल" के उदाहरण लेकर सिमुलेशन खेल द्वारा साझा योगदान और सार्वजनिक सुविधा दिखाना', 'Use a classroom-fund simulation or familiar examples (roads, schools, street lights) to show pooled contribution and public services'],
    [
      ['आयकर अधिनियम की धाराएँ रटवाना', 'Making students memorize Income Tax Act sections'],
      ['बिना उदाहरण दिए परिभाषा लिखवाना', 'Dictating definitions without examples'],
      ['केवल बजट के करोड़ों के आंकड़े पढ़वाना', 'Reading out multi-crore budget numbers'],
    ],
    'बच्चों से नकली सिक्कों से थोड़ा-थोड़ा साझा कोष इकट्ठा कराकर कक्षा की कॉमन जरूरतें (जैसे चॉक, पौधे, पुस्तकालय) पूरी करने का नाटक कराने से "कर" की अवधारणा तुरंत समझ आ जाती है।',
    'Pooling play coins into a mock class fund to pay for shared class amenities concretely demonstrates how taxes fund public infrastructure.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से कौन-सी विधि "व्यक्तिगत विभिन्नताओं" (Individual Differences) का सबसे कम ध्यान रखती है?',
    'Which of the following teaching methods accounts the LEAST for "Individual Differences"?',
    ['एकसमान गति वाला पारंपरिक व्याख्यान एवं सामूहिक रटंत', 'Uniform-paced traditional lecturing and uniform rote drill'],
    [
      ['डाल्टन योजना', 'Dalton Plan'],
      ['मोंटेसरी पद्धति', 'Montessori Method'],
      ['अभिक्रमित अनुदेशन', 'Programmed Instruction'],
    ],
    'पारंपरिक व्याख्यान में सभी 40 बच्चों से एक ही गति और एक ही शैली से सीखने की अपेक्षा की जाती है, जबकि डाल्टन, मोंटेसरी व अभिक्रमित अनुदेशन व्यक्तिगत गति का सम्मान करते हैं।',
    'Uniform lecturing assumes every student learns at the same pace and style, whereas Dalton, Montessori, and Programmed Instruction accommodate individual pacing.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"विचारों की शृंखला" (Think-Aloud Protocol) का उपयोग शिक्षक कक्षा में कब करता है?',
    'When does a teacher use the "Think-Aloud" strategy in the classroom?',
    ['जब शिक्षक किसी गणित प्रश्न या पठन गद्यांश को हल करते हुए अपनी आंतरिक सोचने की प्रक्रिया को जोर से बोलकर दिखाता है', 'When the teacher verbalizes their internal reasoning steps aloud while solving a math problem or reading a text'],
    [
      ['जब शिक्षक छात्रों को चुप रहने को कहे और खुद गाना गाए', 'When the teacher tells students to stay quiet and sings'],
      ['जब परीक्षा हॉल में नकल करानी हो', 'During exam cheating'],
      ['जब उपस्थिति पंजिका पढ़नी हो', 'While calling attendance'],
    ],
    '"मैं यहाँ रुककर सोच रहा हूँ कि इस कठिन शब्द का अर्थ आगे के वाक्य से क्या निकलता है"—इस प्रकार सोच को बोलकर दिखाने से छात्र सीखते हैं कि विशेषज्ञ समस्या पर कैसे सोचते हैं।',
    'Thinking aloud models expert comprehension and problem-solving strategies visibly so students learn how to monitor their own thinking.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'पाठ के दौरान यदि कोई छात्र प्रश्न का बिल्कुल सही और सटीक उत्तर दे, तो शिक्षक द्वारा "क्यों, बहुत सही! क्या बाकी छात्र भी इस बात से सहमत हैं?" पूछना किस कौशल का परिचायक है?',
    'When a student gives a correct answer and the teacher asks, "Great! Do the rest of you agree and why?" what does this demonstrate?',
    ['पुनर्बलन के साथ समालोचनात्मक संवाद और कक्षा-व्यापी सहभागिता बढ़ाना', 'Combining reinforcement with critical peer dialogue and whole-class engagement'],
    [
      ['छात्र पर संदेह करना', 'Doubting the student'],
      ['उत्तर को अस्वीकार करना', 'Rejecting the answer'],
      ['श्यामपट्ट कौशल का दुरुपयोग', 'Misusing blackboard skill'],
    ],
    'सही उत्तर के बाद भी अन्य छात्रों से तर्क पूछने पर कक्षा में "आँख बंद करके सहमति" के बजाय विचार-विमर्श और सक्रिय श्रवण विकसित होता है।',
    'Inviting peers to agree/disagree with reasons fosters active listening and collective reasoning rather than passive acceptance.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट एवं गतिविधि',
    'प्राथमिक कक्षा में "रोल मॉडल या जीवनी परियोजना" (Biography Project) का क्या लाभ है?',
    'What is the benefit of a "Biography Project" on inspiring figures in primary classes?',
    ['प्रेरणादायक मूल्यों, ऐतिहासिक संदर्भ, पठन-लेखन कौशल एवं प्रस्तुतीकरण का एक साथ विकास', 'Simultaneous growth of inspirational values, historical context, reading-writing skills, and presentation'],
    [
      ['केवल जन्म-मृत्यु की तारीख रटना', 'Only memorizing birth and death dates'],
      ['अन्य विषयों से कोई संबंध न रहना', 'Having zero link with other skills'],
      ['छात्रों को अतीत में जीने को मजबूर करना', 'Forcing students to live in the past'],
    ],
    'जब बच्चे किसी वैज्ञानिक, समाज सुधारक या खिलाड़ी के जीवन संघर्ष, पत्र व चित्र संकलित कर प्रस्तुत करते हैं, तो चरित्र निर्माण व भाषा कौशल दोनों निखरते हैं।',
    'Researching and presenting a figure’s life struggles and achievements builds reading, writing, historical empathy, and character values.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक कक्षा में कुछ बच्चे बहुत तेज़ी से प्रश्न हल कर लेते हैं और कुछ को कठिनाई होती है। "सहयोगात्मक जोड़ी" (Buddy Pairing) बनाते समय शिक्षक को क्या ध्यान रखना चाहिए?',
    'When forming "Buddy Pairs" in a mixed-ability class, what should the teacher keep in mind?',
    ['जोड़ी में परस्पर सम्मान व धैर्य हो, तथा दोनों को सीखने व सिखाने का बारी-बारी अवसर मिले', 'Ensure mutual respect and patience in pairs, giving both partners opportunities to contribute and learn'],
    [
      ['तेज छात्र से कहना कि कमजोर छात्र का पूरा काम वही लिख दे', 'Tell the fast learner to do all writing for the struggling peer'],
      ['दोनों को एक-दूसरे की आलोचना करने देना', 'Allow mutual mocking'],
      ['कभी जोड़ी न बदलना पूरे वर्ष', 'Never rotate pairs all year'],
    ],
    'अच्छी जोड़ी में एक साथी उत्तर बताता नहीं है, बल्कि समझाता है और समय-समय पर जोड़ी बदलने से कक्षा में सामाजिक सद्भाव व समावेशन बढ़ता है।',
    'Effective buddy pairing emphasizes explaining rather than doing the work for a peer, and periodic rotation sustains inclusive bonding.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण में "समय का निर्धारण" क्यों किया जाता है?',
    'Why is strict time structuring enforced in Micro-teaching?',
    ['ताकि प्रशिक्षु कम समय में सटीक व केंद्रित ढंग से केवल चयनित कौशल का गहन अभ्यास कर सके', 'So the trainee practices the targeted skill concisely and intensively within a controlled window'],
    [
      ['ताकि प्रशिक्षु को बोलने का समय ही न मिले', 'So the trainee gets no time to speak'],
      ['ताकि पर्यवेक्षक जल्दी घर जा सकें', 'So supervisors can go home early'],
      ['ताकि पाठ अधूरा छोड़ने की आदत पड़े', 'To cultivate a habit of leaving lessons incomplete'],
    ],
    '6 मिनट की सीमा प्रशिक्षु को अनावश्यक भूमिका से बचाकर सीधे मुख्य शिक्षण कौशल के घटकों पर ध्यान केंद्रित करने का अनुशासन देती है।',
    'The 6-minute limit removes fluff and forces focused, deliberate practice of the chosen skill’s specific components.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'संस्कृत या हिंदी में संधि पढ़ाने के लिए कौन-सी विधि "रटने" के बजाय "तर्क और पैटर्न पहचान" विकसित करेगी?',
    'Which method for teaching Sandhi in Hindi/Sanskrit develops pattern recognition and reasoning rather than rote memorization?',
    ['अनेक संधि शब्दों (हिम+आलय=हिमालय, विद्या+आलय=विद्यालय...) के विच्छेद दिखाकर बच्चों से ध्वनि-परिवर्तन का नियम निकलवाना (आगमन विधि)', 'Presenting multiple Sandhi pairs and guiding students to deduce the sound-change rule (Inductive Method)'],
    [
      ['सीधे संस्कृत का सूत्र "अकः सवर्णे दीर्घः" रटवाकर परीक्षा लेना', 'Making students memorize the sutra directly without examples'],
      ['संधि के केवल 50 शब्द उतारने को देना', 'Making them copy 50 Sandhi words'],
      ['संधि न पढ़ाना', 'Skipping Sandhi completely'],
    ],
    'उदाहरणों के माध्यम से स्वर ध्वनियों का मेल देखकर बच्चे स्वयं नियम खोज लेते हैं, फिर सूत्र देने पर वह सूत्र बोझिल नहीं बल्कि सार्थक संक्षेप बन जाता है।',
    'Observing sound combinations across familiar word pairs lets learners discover the Sandhi pattern naturally before naming the formal rule.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    'निम्नलिखित में से किस शिक्षाशास्त्री ने "अन्वेषण एवं करके सीखने" की भावना के विरुद्ध पुस्तकीय रटंत की सर्वाधिक तीव्र आलोचना की?',
    'Which educationist sharply criticized bookish rote cramming in favor of learning through nature, experience, and inquiry?',
    ['रवींद्रनाथ टैगोर और महात्मा गांधी एवं जॉन डीवी सभी ने', 'Rabindranath Tagore, Mahatma Gandhi, and John Dewey alike'],
    [
      ['थॉमस मैकाले ने भारतीय गुरुकुलों के समर्थन में', 'Thomas Macaulay in support of Gurukuls'],
      ['केवल प्राचीन स्मृतियों ने', 'Only ancient Smritis'],
      ['किसी ने नहीं, सभी रटने के समर्थक थे', 'No one; all favored rote learning'],
    ],
    'टैगोर (शांतिनिकेतन में प्रकृति व कला), गांधीजी (बुनियादी शिक्षा में हस्तशिल्प) और डीवी (प्रगतिशील शिक्षा) तीनों ने चारदीवारी में बंद रटंत शिक्षा की आलोचना की।',
    'Tagore (nature and arts at Santiniketan), Gandhi (craft-centered Nai Talim), and Dewey (progressive inquiry) all strongly opposed passive bookish cramming.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा 3 में "समय देखना" (Telling Time) पढ़ा रहा है। सबसे पहले किस शिक्षण सामग्री और विधि का प्रयोग करना उपयुक्त होगा?',
    'A teacher is teaching "Telling Time" in Class 3. Which TLM and approach should be used first?',
    ['गत्ते से बनी ऐसी कार्यशील घड़ी जिसकी मिनट व घंटे की सुइयाँ बच्चे अपने हाथ से घुमा सकें', 'A working cardboard clock whose hour and minute hands children can rotate with their own hands'],
    [
      ['डिजिटल स्टॉपवॉच के मिलीसेकंड दिखाना', 'Showing milliseconds on a digital stopwatch'],
      ['केवल कॉपी में "1 घंटा = 60 मिनट" रटाना', 'Memorizing "1 hour = 60 minutes" only'],
      ['बिना घड़ी दिखाए केवल समय के इबारती प्रश्न हल कराना', 'Solving time word problems without showing a clock'],
    ],
    'मूर्त गत्ते की घड़ी की सुइयाँ स्वयं घुमाने से बच्चे घंटे और मिनट की सुई के बीच के संबंध को प्रत्यक्ष देख और समझ पाते हैं।',
    'Manipulating movable hands on a cardboard clock lets learners directly observe how the hour and minute hands move in relation to each other.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"पीयर एसेसमेंट" (Peer Assessment / सहपाठी आकलन) को शिक्षण-अधिगम विधि के रूप में अपनाने से पहले शिक्षक को क्या तैयारी करनी चाहिए?',
    'Before using "Peer Assessment" as a classroom strategy, what preparation must the teacher do?',
    ['स्पष्ट, सरल मानदंड (Rubric/Checklist) तय कर बच्चों को सम्मानजनक और रचनात्मक फीडबैक देना सिखाना', 'Establish clear, simple criteria (rubric/checklist) and train students to give respectful, constructive feedback'],
    [
      ['बच्चों से कहना कि वे अपने दोस्तों को 100 में से 100 दें और दुश्मनों को शून्य', 'Tell students to give friends 100 and rivals zero'],
      ['बिना किसी नियम के कॉपियाँ बदलवा देना', 'Swap notebooks with zero guidelines'],
      ['केवल त्रुटियाँ खोजकर हँसने को कहना', 'Encourage laughing at mistakes'],
    ],
    'स्पष्ट रूब्रिक और "दो अच्छी बातें + एक सुधार सुझाव" जैसी संरचना सिखाने से सहपाठी आकलन निष्पक्ष, सुरक्षित और सीखने वाला बनता है।',
    'Clear rubrics and structured feedback norms (e.g., two strengths and one suggestion) make peer assessment fair, kind, and educational.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'कक्षा में "उद्दीपन परिवर्तन" के दौरान शिक्षक का "नियंत्रित संचलन" (Purposeful Movement) कैसा होना चाहिए?',
    'During "Stimulus Variation", how should a teacher’s "Purposeful Movement" in the classroom be?',
    ['शांत, स्वाभाविक व सभी पंक्तियों तक पहुँचने वाला, न कि तेजी से टहलकर ध्यान भटकाने वाला', 'Calm, natural, reaching all rows—not frantic pacing that distracts learners'],
    [
      ['तेजी से दौड़ते हुए चक्कर लगाना', 'Running around in circles rapidly'],
      ['पूरे पीरियड दरवाजे के पास स्थिर खड़े रहना', 'Standing frozen near the door all period'],
      ['केवल अपनी कुर्सी पर बैठे रहना', 'Remaining seated in one’s chair'],
    ],
    'उद्देश्यपूर्ण संचलन से पीछे बैठे छात्र भी शिक्षक की उपस्थिति महसूस करते हैं और शिक्षक कॉपी में काम भी देख पाता है; अत्यधिक व बेवजह टहलना बाधा डालता है।',
    'Purposeful movement brings the teacher close to back rows and allows work monitoring without the distraction of restless pacing.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रोजेक्ट विधि',
    'प्रोजेक्ट विधि के किस सोपान में विद्यार्थी अपनी सफलता और असफलता के कारणों पर विचार करते हैं?',
    'In which step of the Project Method do students reflect on the causes of their successes and shortcomings?',
    ['मूल्यांकन (Evaluation / Judging)', 'Evaluation / Judging'],
    [
      ['परिस्थिति प्रदान करना (Providing a situation)', 'Providing a situation'],
      ['चयन करना (Choosing)', 'Choosing'],
      ['योजना बनाना (Planning)', 'Planning'],
    ],
    'कार्य समाप्त होने के बाद मूल्यांकन सोपान में छात्र आत्म-आलोचना करते हैं कि योजना के अनुसार कार्य हुआ या नहीं और भविष्य में क्या सुधारा जा सकता है।',
    'In the evaluation step after execution, students critically judge their output against the plan and identify lessons for future improvement.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में देखता है कि जब वह केवल बोलकर पढ़ाता है तो कुछ बच्चे ऊंघते हैं, पर जब वह कहानी के बीच चित्र और प्रश्न जोड़ता है तो सभी सजग हो जाते हैं। यह क्या सिद्ध करता है?',
    'A teacher notices some students drowsy during pure verbal lecturing, yet everyone perks up when visuals and questions are woven into the story. What does this prove?',
    ['सक्रिय सहभागिता और बहु-माध्यम उद्दीपन अधिगम में ध्यान व रुचि बनाए रखते हैं', 'Active participation and multi-modal stimulation sustain attention and interest in learning'],
    [
      ['बच्चों को स्कूल में सो जाना चाहिए', 'Children should sleep in school'],
      ['पढ़ाई में प्रश्न नहीं पूछने चाहिए', 'Questions should not be asked during study'],
      ['चित्र केवल नर्सरी में दिखने चाहिए', 'Pictures should only appear in nursery'],
    ],
    'निष्क्रिय श्रवण से मानसिक थकान होती है; दृश्य सहायता और अंतःक्रियात्मक प्रश्न मस्तिष्क को सक्रिय कर सीखने की गति बढ़ाते हैं।',
    'Passive listening causes fatigue; visual anchors and interactive prompts re-engage cognitive processing.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'विश्लेषण एवं संश्लेषण',
    'निम्नलिखित में से कौन-सा "विश्लेषण विधि" का प्रमुख गुण है?',
    'Which of the following is a major merit of the "Analytic Method"?',
    ['यह छात्रों में तर्कशक्ति, खोज की भावना और प्रत्येक चरण के "क्यों" की गहरी समझ विकसित करती है', 'It develops reasoning, spirit of discovery, and deep understanding of the "why" behind each step'],
    [
      ['यह बहुत कम समय में सबसे जल्दी पाठ्यक्रम खत्म करती है', 'It finishes the syllabus fastest'],
      ['इसमें कोई मानसिक प्रयास नहीं लगता', 'It requires no mental effort'],
      ['यह केवल रटे हुए उत्तर दोहराती है', 'It only repeats memorized answers'],
    ],
    'यद्यपि विश्लेषण विधि थोड़ा समय लेती है, तथापि यह रटने की गुंजाइश समाप्त करके वास्तविक तार्किक चिंतन विकसित करती है।',
    'Though slightly slower than synthesis, the analytic method eliminates blind rote steps by clarifying the logical reason behind every move.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'मोंटेसरी एवं किंडरगार्टन',
    'मोंटेसरी विद्यालय में फर्नीचर और उपकरणों की ऊंचाई व आकार बच्चों के अनुरूप (Child-sized) क्यों रखे जाते हैं?',
    'Why are furniture and equipment kept child-sized in a Montessori school?',
    ['ताकि बच्चा बिना वयस्कों पर निर्भर रहे स्वतंत्र रूप से सामान उठा, रख और उपयोग कर सके', 'So children can independently reach, carry, and use materials without relying on adults'],
    [
      ['ताकि वयस्क कक्षा में बैठ ही न सकें', 'So adults cannot sit in the classroom'],
      ['ताकि लकड़ी का खर्च बचाया जा सके', 'To save wood costs'],
      ['केवल कमरे को गुड़ियाघर जैसा दिखाने के लिए', 'Merely to make the room look like a dollhouse'],
    ],
    'तैयार परिवेश (Prepared Environment) में छोटे मेज-कुर्सी, नीची अलमारियाँ और हल्के बर्तन बच्चों में आत्मनिर्भरता, व्यवस्था और आत्म-सम्मान बढ़ाते हैं।',
    'Child-sized furniture and accessible low shelves in a prepared environment foster independence, order, and dignity.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'ह्यूरिस्टिक विधि',
    'ह्यूरिस्टिक विधि की सफलता के लिए शिक्षक में कौन-सा गुण होना सर्वाधिक आवश्यक है?',
    'Which teacher quality is most essential for the success of the Heuristic Method?',
    ['धैर्य, विषय पर गहरी पकड़, तथा छात्रों को स्वयं खोजने देने की सूझबूझ', 'Patience, deep subject mastery, and skill in guiding without giving away answers'],
    [
      ['तेज बोलने और तुरंत उत्तर बता देने की आदत', 'Habit of speaking fast and revealing answers'],
      ['कठोरता एवं क्रोध', 'Harshness and anger'],
      ['केवल पुस्तकों से नोट्स पढ़कर सुनाना', 'Reading notes from books'],
    ],
    'ह्यूरिस्टिक शिक्षक को प्रत्येक संभावित दिशा की जानकारी होनी चाहिए ताकि जब छात्र अलग-अलग मार्ग से प्रयोग करें, तो वह धैर्यपूर्वक सही संकेत दे सके।',
    'A heuristic teacher needs deep mastery to anticipate varied student hypotheses and patient restraint to guide rather than tell.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'सूक्ष्म शिक्षण के अभ्यास के समय "एक ही कौशल पर ध्यान केंद्रित करने" का मुख्य कारण क्या है?',
    'Why does Micro-teaching focus on practicing "one skill at a time"?',
    ['एक साथ सभी शिक्षण कौशलों की जटिलता से बचाकर प्रशिक्षु को एक-एक कौशल में निपुण बनाना', 'To isolate complexity so the trainee can master each specific skill thoroughly before integrating them'],
    [
      ['ताकि बाकी कौशल कभी न सीखने पड़ें', 'So other skills never need to be learned'],
      ['ताकि समय कम से कम लगे और डिग्री जल्दी मिले', 'To finish degrees quickly'],
      ['क्योंकि एक शिक्षक एक से अधिक कौशल प्रयोग नहीं कर सकता', 'Because a teacher cannot use more than one skill'],
    ],
    'जिस प्रकार तैराकी या संगीत में पहले अलग-अलग बुनियादी अंगों का अभ्यास होता है, वैसे ही सूक्ष्म शिक्षण में एक-एक कौशल साधकर बाद में पूर्ण पाठ (Macro-teaching) में उन्हें जोड़ा जाता है।',
    'Just as musicians isolate scales before a concert, isolating one skill allows mastery before integrating all skills in full-class macro-teaching.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा 5 में "मानचित्र अध्ययन" (Map Reading) पढ़ाने की सबसे प्रभावी विधि कौन-सी होगी?',
    'What is the most effective method for teaching "Map Reading" in Class 5?',
    ['पहले बच्चों से स्वयं अपने कमरे/विद्यालय का कच्चा नक्शा (Sketch Map) बनवाकर संकेतों और दिशाओं की समझ विकसित करना, फिर राज्य/भारत के मानचित्र पर जाना', 'First having children draw a sketch map of their classroom/school using symbols and directions before introducing state/India maps'],
    [
      ['सीधे विश्व के राजनीतिक मानचित्र के 195 देशों के नाम रटाना', 'Making them memorize 195 country names on a world map directly'],
      ['बिना मानचित्र दिखाए केवल अक्षांशों की परिभाषा लिखवाना', 'Dictating latitude definitions without maps'],
      ['केवल ग्लोब को अलमारी में बंद करके उसके बारे में पढ़ाना', 'Keeping the globe locked in a cupboard'],
    ],
    'परिचित कक्षा या विद्यालय परिसर का नक्शा बनाने से बच्चा ऊपर से देखने का दृष्टिकोण (Bird’s-eye view), पैमाना व रूढ़ चिह्नों (Symbols) को सहजता से समझता है।',
    'Mapping a familiar classroom or schoolyard introduces bird’s-eye perspective, scale, and symbols concretely before reading regional maps.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक शिक्षक कक्षा में किसी छात्र के बार-बार गलत उत्तर देने पर भी उसे डांटता नहीं, बल्कि कहता है—"बहुत अच्छा प्रयास! चलो देखते हैं कि तुम्हारे उत्तर में हम क्या थोड़ा-सा बदलाव करें।" यह व्यवहार क्या सिखाता है?',
    'When a student repeatedly answers incorrectly, the teacher does not scold, saying instead: "Good try! Let’s see what small change we can make here." What does this teach?',
    ['विकासशील मानसिकता (Growth Mindset) और त्रुटियों से सीखने की सुरक्षित संस्कृति', 'A Growth Mindset and a safe classroom culture of learning from mistakes'],
    [
      ['गलत उत्तर देना ही सही है', 'That wrong answers are correct'],
      ['मेहनत करने की कोई आवश्यकता नहीं है', 'That effort is unnecessary'],
      ['परीक्षाएँ निरर्थक हैं', 'That exams are pointless'],
    ],
    'कैरोल ड्वेक के ग्रोथ माइंडसेट सिद्धांत के अनुरूप, प्रयास की सराहना और त्रुटि को सुधार का अवसर मानने से छात्र कठिन चुनौतियों से घबराते नहीं हैं।',
    'Aligned with Carol Dweck’s Growth Mindset, praising effort and treating errors as stepping stones builds resilience and curiosity.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'प्रमुख शिक्षण विधियाँ',
    '"फ्लिप-फ्लॉप" या "बज़ ग्रुप" की तुलना में "सिम्पोजियम" (Symposium / परिसंवाद) किस प्रकार की शिक्षण विधि है?',
    'Compared to buzz groups, what kind of method is a "Symposium"?',
    ['एक औपचारिक सभा जिसमें कई वक्ता किसी एक विषय के विभिन्न पहलुओं पर क्रमशः अपने संक्षिप्त विचार रखते हैं', 'A formal gathering where multiple speakers consecutively present prepared views on different facets of one theme'],
    [
      ['एक अनौपचारिक खेल प्रतियोगिता', 'An informal sports tournament'],
      ['प्राथमिक कक्षा 1 की गिनती विधि', 'A Class 1 counting method'],
      ['बिना बोले चित्र बनाने की विधि', 'A silent drawing technique'],
    ],
    'परिसंवाद (Symposium) में विषय एक होता है, पर 3-5 वक्ता उसके अलग-अलग आयामों पर 10-15 मिनट के सुव्यवस्थित वक्तव्य देते हैं, जिसके बाद चर्चा होती है।',
    'In a symposium, several speakers deliver short prepared presentations on distinct aspects of a single topic, followed by discussion.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'आगमन एवं निगमन',
    'आगमन विधि को "धीमी किंतु सुदृढ़" (Slow but Sure) विधि क्यों कहा जाता है?',
    'Why is the Inductive Method described as "Slow but Sure"?',
    ['यद्यपि उदाहरणों से नियम निकालने में समय अधिक लगता है, पर इससे प्राप्त ज्ञान स्थायी व पूर्णतः समझा हुआ होता है', 'Although deriving rules from examples takes longer, the resulting understanding is deep, meaningful, and permanent'],
    [
      ['क्योंकि इसमें बच्चे धीरे-धीरे लिखते हैं', 'Because children write slowly in it'],
      ['क्योंकि इसमें शिक्षक धीरे बोलता है', 'Because the teacher speaks slowly'],
      ['क्योंकि इससे पाठ्यक्रम हमेशा अधूरा रहता है', 'Because it always leaves the syllabus undone'],
    ],
    'स्वयं के निरीक्षण और तर्क से निकाला गया नियम बच्चा कभी नहीं भूलता और नई परिस्थितियों में भी उसका सही उपयोग कर पाता है।',
    'Rules discovered through personal observation and reasoning stick permanently and transfer reliably to unfamiliar problems.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'शिक्षण कौशल',
    'श्यामपट्ट लेखन कौशल में "आवश्यकतानुसार रंगीन चॉक" का प्रयोग किस सिद्धांत पर आधारित है?',
    'In Blackboard Skill, using colored chalk judiciously is based on which principle?',
    ['प्रत्यक्षीकरण में आकृति-पृष्ठभूमि विभेदन (Figure-Ground Differentiation) द्वारा महत्वपूर्ण अंतर उभारना', 'Highlighting key distinctions and hierarchy through visual figure-ground contrast'],
    [
      ['बोर्ड को होली के रंगों जैसा सजाना', 'Decorating the board like festival colors'],
      ['सफेद चॉक को बचाकर रखना', 'Saving white chalk'],
      ['छात्रों को रंगों के नाम याद कराना', 'Teaching color names'],
    ],
    'ज्यामिति के चित्रों, मानचित्र या व्याकरण में मुख्य अंतर (जैसे कर्ता बनाम क्रिया, या त्रिभुज के विभिन्न कोण) रंगीन चॉक से दिखाने पर दृष्टि तुरंत अंतर पकड़ लेती है।',
    'Using colored chalk sparingly in diagrams or grammar highlights contrasts and structural relationships instantaneously.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'एक विद्यालय में गणित मेले (Math Fair) का आयोजन किया गया जहाँ छात्रों ने स्वयं ज्यामितीय पहेलियाँ, मापन स्टॉल और संख्या खेल तैयार कर अभिभावकों को दिखाए। यह किस शिक्षण दृष्टिकोण को दर्शाता है?',
    'A school holds a Math Fair where students create and present geometric puzzles, measurement stalls, and number games to parents. Which approach does this exemplify?',
    ['प्रोजेक्ट, खेल एवं अनुभवात्मक प्रदर्शन का समन्वय', 'Integration of project-based, play-way, and experiential demonstration'],
    [
      ['केवल निगमन आधारित लिखित परीक्षा', 'Pure deductive written testing'],
      ['अभिक्रमित अनुदेशन', 'Programmed instruction'],
      ['मौन वाचन अभ्यास', 'Silent reading drill'],
    ],
    'गणित मेले में छात्र योजना बनाते हैं (प्रोजेक्ट), खेल तैयार करते हैं (खेल विधि) और समझाकर अपनी समझ पक्की करते हैं।',
    'A Math Fair unites project creation, playful engagement, and public communication of mathematical reasoning.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'कक्षीय अनुप्रयोग (Classroom Scenarios)',
    'कक्षा में शिक्षण करते समय यदि कोई विद्यार्थी बिल्कुल सही और मौलिक तर्क प्रस्तुत करता है जो शिक्षक की अपेक्षा से भी बेहतर है, तो शिक्षक को क्या करना चाहिए?',
    'During a lesson, if a student presents a completely valid, original argument even better than expected, what should the teacher do?',
    ['खुले मन से उस विचार की प्रशंसा कर उसे कक्षा के समक्ष साझा करना व स्वीकारना', 'Openly praise the original insight, validate it, and share it with the whole class'],
    [
      ['अपनी प्रतिष्ठा बचाने के लिए छात्र के विचार को गलत ठहराना', 'Dismiss it to protect teacher ego'],
      ['छात्र से कहना कि "ज्यादा होशियार मत बनो, किताब वाला ही लिखो"', 'Say "Don’t be over-smart, stick to the book"'],
      ['छात्र को चुप कराकर विषय बदल देना', 'Silence the student and change the topic'],
    ],
    'लोकतांत्रिक व रचनावादी शिक्षक विद्यार्थियों की मौलिक प्रतिभा से ईर्ष्या या असुरक्षा महसूस नहीं करता, बल्कि उसे प्रोत्साहित कर पूरी कक्षा को प्रेरित करता है।',
    'A confident, learner-centered teacher celebrates original student insight rather than insisting solely on textbook phrasing.',
    'EASY'
  ),
  q(
    'शिक्षण विधियाँ',
    'समस्या-समाधान एवं पूछताछ',
    '"5 क्यों तकनीक" (5 Whys Technique) का उपयोग समस्या-समाधान शिक्षण में क्यों किया जाता है?',
    'Why is the "5 Whys Technique" used in problem-solving education?',
    ['सतही लक्षण से आगे बढ़कर किसी समस्या के वास्तविक मूल कारण (Root Cause) तक पहुँचने के लिए', 'To move beyond surface symptoms and uncover the true root cause of a problem'],
    [
      ['बच्चों को चिढ़ाकर चुप कराने के लिए', 'To annoy children into silence'],
      ['केवल 5 नंबर का टेस्ट लेने के लिए', 'Only for a 5-mark test'],
      ['अंग्रेजी के प्रश्नवाचक शब्द रटने के लिए', 'To memorize English wh-words'],
    ],
    'पर्यावरण या सामाजिक समस्या (जैसे "नदी गंदी क्यों है?") पर लगातार "क्यों?" पूछते जाने से छात्र सतही बात से गहराई में जाकर व्यवस्थागत कारण समझ पाते हैं।',
    'Asking "Why?" iteratively peels away superficial symptoms to reveal deeper causal chains behind environmental or social issues.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'अभिक्रमित अनुदेशन',
    'अभिक्रमित अनुदेशन के "रेखीय प्रतिमान" में त्रुटि दर (Error Rate) बहुत कम रखने पर क्यों जोर दिया जाता है?',
    'Why does Skinner’s Linear Programmed Instruction emphasize keeping the error rate very low?',
    ['ताकि छात्र को बार-बार सही उत्तर का सकारात्मक पुनर्बलन मिले और सीखने का आत्मविश्वास बना रहे', 'So the learner frequently receives positive reinforcement for correct responses and maintains confidence'],
    [
      ['ताकि छात्र को कभी सोचने की जरूरत न पड़े', 'So the learner never has to think'],
      ['ताकि पुस्तक जल्दी छप सके', 'So the book prints faster'],
      ['ताकि क्राउडर का सिद्धांत गलत दिखे', 'To disprove Crowder'],
    ],
    'स्किनर के अनुसार सफलता ही अधिगम को पुनर्बलित करती है; इसलिए फ्रेम इतने छोटे व क्रमबद्ध होते हैं कि लगभग 95% तक सही अनुक्रियाएँ आएँ।',
    'Skinner held that success reinforces learning, so small sequential frames are crafted to keep success high and errors minimal.',
    'HARD'
  ),
  q(
    'शिक्षण विधियाँ',
    'सूक्ष्म शिक्षण',
    'सूक्ष्म शिक्षण प्रक्रिया के बाद शिक्षक प्रशिक्षण में अगला तार्किक चरण क्या होता है?',
    'In teacher education, what is the next logical phase after mastering individual skills in Micro-teaching?',
    ['समेकन शिक्षण (Integration / Link Practice) तथा वास्तविक पूर्ण कक्षा शिक्षण (Macro-teaching / Internship)', 'Skill integration (Link Practice) followed by full-class Macro-teaching / School Internship'],
    [
      ['प्रशिक्षण तुरंत समाप्त कर देना', 'Ending training immediately'],
      ['केवल लिखित परीक्षा देकर डिग्री लेना', 'Taking only written exams'],
      ['पुनः कक्षा 1 में प्रवेश लेना', 'Enrolling back in Class 1'],
    ],
    'अलग-अलग कौशलों में निपुणता के बाद "लिंक प्रैक्टिस" में 3-4 कौशलों को एक साथ जोड़कर 15-20 मिनट पढ़ाया जाता है और फिर वास्तविक 35-40 मिनट की कक्षा (इंटरर्नशिप) ली जाती है।',
    'After mastering isolated skills, trainees practice combining several skills in Link Practice before handling full-period macro-teaching internships.',
    'MEDIUM'
  ),
  q(
    'शिक्षण विधियाँ',
    'सारांश एवं समन्वय',
    'एक आदर्श शिक्षक के लिए विभिन्न शिक्षण विधियों के चयन का सर्वोत्तम सिद्धांत क्या होना चाहिए?',
    'What should be the guiding principle for an ideal teacher in choosing among various teaching methods?',
    ['कोई एक विधि हर परिस्थिति के लिए सर्वश्रेष्ठ नहीं; विषय की प्रकृति, विद्यार्थियों की आयु, स्तर व उद्देश्यों के अनुसार विधियों का लचीला समन्वय करना', 'No single method fits all situations; flexibly combine methods based on subject nature, learner age, readiness, and objectives'],
    [
      ['हमेशा जीवन भर केवल एक ही विधि (जैसे व्याख्यान) का प्रयोग करना', 'Always use only one fixed method (like lecturing) forever'],
      ['जो विधि शिक्षक को सबसे आसान व कम मेहनत वाली लगे वही चुनना', 'Choose whichever method takes the least teacher effort'],
      ['बिना सोचे प्रतिदिन अलग-अलग बेमेल विधियाँ थोपना', 'Randomly impose mismatched methods daily'],
    ],
    'उत्तम शिक्षण कला और विज्ञान दोनों है; परिस्थिति, प्रकरण और बाल-आवश्यकता के अनुरूप आगमन, खेल, प्रदर्शन, परियोजना व चर्चा का समन्वय सर्वोत्तम परिणाम देता है।',
    'Effective teaching is both art and science—flexibly blending induction, play, demonstration, projects, and dialogue to fit content, learners, and goals.',
    'EASY'
  ),
];
