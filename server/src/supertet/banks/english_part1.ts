import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('English');

export const ENGLISH_BANK_PART1: RawBankQuestion[] = [
  // =========================================================================
  // SECTION 1: UNSEEN COMPREHENSION PASSAGES (55 Passages × 4 Qs = 220 Qs)
  // =========================================================================

  // Passage 1: Reading Habits
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nप्रश्न: गद्यांश के अनुसार, सोने से पहले पंद्रह मिनट छपी हुई पुस्तक पढ़ने का क्या लाभ है?',
    'Read the passage carefully and answer the question:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nQuestion: According to the passage, what is a benefit of reading a printed book for fifteen minutes before sleep?',
    ['स्क्रीन की थकान कम होना और स्मरण शक्ति बढ़ना', 'Reduces screen fatigue and improves memory retention'],
    [
      ['शारीरिक व्यायाम की आवश्यकता समाप्त होना', 'Eliminates the need for physical exercise'],
      ['डिजिटल उपकरणों की गति बढ़ाना', 'Increases the speed of digital devices'],
      ['नींद के घंटों को आधे से कम करना', 'Cuts sleeping hours in half'],
    ],
    'गद्यांश के दूसरे वाक्य में स्पष्ट कहा गया है कि सोने से पहले 15 मिनट मुद्रित पुस्तक पढ़ने से स्क्रीन की थकान (screen fatigue) कम होती है और स्मरण शक्ति (memory retention) बढ़ती है।',
    'The second sentence explicitly states that fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention.',
    'EASY',
    { grammarRuleHi: 'प्रत्यक्ष तथ्यात्मक प्रश्न (Direct factual retrieval) में गद्यांश के सटीक वाक्यांश से उत्तर मिलाएँ।' }
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nप्रश्न: गद्यांश के अनुसार पठन सहानुभूति (empathy) कैसे विकसित करता है?',
    'Read the passage carefully and answer the question:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nQuestion: How does reading nurture empathy according to the passage?',
    ['पाठकों को अपरिचित जीवन-अनुभवों को समझने का अवसर देकर', 'By letting readers step into unfamiliar lives'],
    [
      ['केवल कठिन व्याकरण के नियम याद कराकर', 'By teaching difficult grammar rules only'],
      ['पाठकों को बाहरी दुनिया से पूरी तरह अलग करके', 'By isolating readers completely from society'],
      ['केवल तकनीकी शब्दावली सिखाकर', 'By teaching technical jargon exclusively'],
    ],
    'गद्यांश में बताया गया है कि पढ़ना पाठकों को अपरिचित जीवन में झाँकने का अवसर देकर सहानुभूति (empathy) पोषित करता है।',
    'The passage explains that reading nurtures empathy by allowing readers to step into unfamiliar lives.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nप्रश्न: गद्यांश में प्रयुक्त शब्द "retention" का सबसे उपयुक्त अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nQuestion: Which word best matches the meaning of "retention" as used in the passage?',
    ['धारण / स्मृति में बनाए रखना', 'Keeping or holding in memory'],
    [
      ['तुरंत भूल जाना', 'Immediate forgetting'],
      ['अस्थायी आकर्षण', 'Temporary distraction'],
      ['पूर्ण अस्वीकृति', 'Complete rejection'],
    ],
    '"Memory retention" का अर्थ जानकारी को मस्तिष्क में बनाए रखने या याद रखने की क्षमता है।',
    'In the context of memory, "retention" means the ability to keep or hold information.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nप्रश्न: इस गद्यांश का मुख्य विचार (central idea) क्या है?',
    'Read the passage carefully and answer the question:\n"Daily reading strengthens vocabulary, sharpens focus, and nurtures empathy by letting readers step into unfamiliar lives. Even fifteen minutes with a printed book before sleep reduces screen fatigue and improves memory retention."\nQuestion: What is the central idea of the passage?',
    ['नियमित पठन के संज्ञानात्मक और मानसिक लाभ', 'The cognitive and mental benefits of regular reading'],
    [
      ['प्रकाशन उद्योग में कागज़ की बढ़ती लागत', 'The rising cost of paper in publishing'],
      ['रात्रि में कृत्रिम प्रकाश के खतरे', 'The dangers of artificial lighting at night'],
      ['परीक्षाओं में रटने की पद्धति का महत्व', 'The importance of rote memorization in exams'],
    ],
    'पूरा गद्यांश दैनिक पठन से शब्द-भंडार, एकाग्रता, सहानुभूति और स्मृति में होने वाले लाभों पर केंद्रित है।',
    'The entire passage highlights the cognitive, emotional, and memory benefits of daily reading.',
    'EASY'
  ),

  // Passage 2: Water Harvesting
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nप्रश्न: गद्यांश के अनुसार वर्षा जल संचयन छतों से बहते पानी को कहाँ भेजता है?',
    'Read the passage carefully and answer the question:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nQuestion: Where does rainwater harvesting direct rooftop runoff according to the passage?',
    ['भूमिगत पुनर्भरण गड्ढों में', 'Into underground recharge pits'],
    [
      ['पास की नदियों के मुहाने में', 'Into nearby river estuaries'],
      ['खुले कृषि नालों में', 'Into open agricultural canals'],
      ['शहरी सीवेज उपचार संयंत्रों में', 'Into urban sewage treatment plants'],
    ],
    'गद्यांश के पहले वाक्य में लिखा है कि वर्षा जल संचयन छतों के बहाव को भूमिगत रीचार्ज पिट्स (underground recharge pits) में भेजता है।',
    'The first sentence explicitly mentions directing rooftop runoff into underground recharge pits.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nप्रश्न: अर्ध-शुष्क कस्बों में यह उपाय सड़कों से संबंधित किस समस्या को रोकता है?',
    'Read the passage carefully and answer the question:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nQuestion: Which street-related problem does this practice prevent in semi-arid towns?',
    ['मौसमी जलभराव', 'Seasonal waterlogging'],
    [
      ['यातायात संकेतों की विफलता', 'Traffic signal failure'],
      ['सड़क की सतह का पिघलना', 'Melting of road asphalt'],
      ['धूल भरी आंधियों का बनना', 'Formation of dust storms'],
    ],
    'गद्यांश के अनुसार यह प्रक्रिया सड़कों पर होने वाले मौसमी जलभराव (seasonal waterlogging) को रोकती है।',
    'The passage states that rainwater harvesting prevents seasonal waterlogging on streets.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nप्रश्न: गद्यांश में प्रयुक्त शब्द "replenishes" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nQuestion: What does the word "replenishes" mean in the context of the passage?',
    ['पुनः भरना या स्तर बढ़ाना', 'Refills or restores to a previous level'],
    [
      ['पूरी तरह सुखा देना', 'Completely drains out'],
      ['रासायनिक रूप से प्रदूषित करना', 'Chemically contaminates'],
      ['अन्य दिशा में मोड़ देना', 'Diverts permanently away'],
    ],
    '"Replenish" का अर्थ किसी घटे हुए संसाधन (यहाँ भूजल स्तर) को फिर से भरना या बहाल करना होता है।',
    '"Replenish" means to refill or restore a depleted resource such as groundwater tables.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nप्रश्न: लेखक ने वर्षा जल संचयन को कैसा अभ्यास बताया है?',
    'Read the passage carefully and answer the question:\n"Rainwater harvesting collects runoff from rooftops and directs it into underground recharge pits. In semi-arid towns, this simple practice replenishes groundwater tables and prevents seasonal waterlogging on streets."\nQuestion: How does the author describe rainwater harvesting as a practice?',
    ['एक सरल परंतु प्रभावी उपाय', 'A simple practice with dual benefits'],
    [
      ['एक अत्यंत खर्चीली आधुनिक तकनीक', 'An extremely expensive modern technology'],
      ['केवल तटीय महानगरों तक सीमित पद्धति', 'A method limited to coastal megacities'],
      ['भविष्य में अप्रासंगिक होने वाली विधि', 'An outdated method with little effect'],
    ],
    'गद्यांश में इसे "this simple practice" कहा गया है जो भूजल बढ़ाने और जलभराव रोकने का दोहरा लाभ देती है।',
    'The author calls it "this simple practice" that simultaneously restores groundwater and prevents waterlogging.',
    'MEDIUM'
  ),

  // Passage 3: Constructivist Classroom
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nप्रश्न: रचनावादी कक्षा (constructivist classroom) में शिक्षक की भूमिका क्या होती है?',
    'Read the passage carefully and answer the question:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nQuestion: What is the role of the teacher in a constructivist classroom?',
    ['सुगमकर्ता (फैसिलिटेटर) के रूप में मार्गदर्शन करना', 'To act as a facilitator rather than a mere lecturer'],
    [
      ['बिना प्रश्न पूछे लगातार भाषण देना', 'To deliver uninterrupted monologues without questions'],
      ['छात्रों को समूह कार्य से रोकना', 'To discourage students from working in groups'],
      ['केवल पाठ्यपुस्तक की पंक्तियाँ दोहराना', 'To dictate textbook lines for rote copying'],
    ],
    'गद्यांश में स्पष्ट है कि रचनावादी कक्षा में शिक्षक केवल व्याख्याता न होकर सुगमकर्ता (facilitator) की भूमिका निभाता है।',
    'The passage states that the teacher acts as a facilitator rather than a mere lecturer.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nप्रश्न: छात्र इस कक्षा में अर्थ या समझ का निर्माण कैसे करते हैं?',
    'Read the passage carefully and answer the question:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nQuestion: How do learners build meaning in such a classroom?',
    ['प्रत्यक्ष व्यावहारिक अनुभवों और सहयोगी अन्वेषण से', 'Through hands-on experiences and collaborative exploration'],
    [
      ['सप्ताह में एक बार बहुविकल्पीय परीक्षा देकर', 'By taking weekly multiple-choice tests alone'],
      ['अन्य विद्यार्थियों की उत्तरपुस्तिका देखकर', 'By copying notes from senior students'],
      ['कक्षा में शांत बैठकर सुनने मात्र से', 'By sitting silently and listening passively'],
    ],
    'वाक्य में "explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences" दिया गया है।',
    'Learners collaborate, test hypotheses, and construct meaning from hands-on experiences.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nप्रश्न: गद्यांश में "collaboratively" शब्द का निकटतम पर्याय क्या है?',
    'Read the passage carefully and answer the question:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nQuestion: Which option is closest in meaning to "collaboratively"?',
    ['मिलजुलकर / सहयोगात्मक रूप से', 'Jointly or cooperatively with others'],
    [
      ['प्रतिस्पर्धात्मक और अकेले', 'Competitively and alone'],
      ['बिना सोचे-समझे शीघ्रता से', 'Carelessly and hurriedly'],
      ['कठोर आदेशों के अधीन', 'Under strict command'],
    ],
    '"Collaboratively" का अर्थ दूसरों के साथ मिलकर या सहयोगपूर्वक कार्य करना है।',
    '"Collaboratively" means working together jointly toward a shared goal.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nप्रश्न: "hands-on experiences" किस प्रकार की गतिविधि को दर्शाता है?',
    'Read the passage carefully and answer the question:\n"In a constructivist classroom, the teacher acts as a facilitator rather than a mere lecturer. Learners explore problems collaboratively, test hypotheses, and build meaning from hands-on experiences."\nQuestion: What kind of activity is indicated by "hands-on experiences"?',
    ['सक्रिय व्यावहारिक प्रयोग और करके सीखना', 'Active practical participation and learning by doing'],
    [
      ['केवल अमूर्त सिद्धांतों का पठन', 'Purely abstract theoretical reading'],
      ['शारीरिक दंड पर आधारित अनुशासन', 'Discipline based on physical punishment'],
      ['वीडियो व्याख्यान की रिकॉर्डिंग देखना', 'Watching recorded video lectures passively'],
    ],
    '"Hands-on experiences" का तात्पर्य स्वयं प्रयोग करके और सक्रिय भागीदारी से सीखने से है।',
    '"Hands-on experiences" refers to direct, active, practical engagement rather than passive observation.',
    'MEDIUM'
  ),

  // Passage 4: Honeybees and Pollination
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nप्रश्न: विश्व भर के फूलों वाली फसलों के लगभग कितने भाग का परागण मधुमक्खियाँ करती हैं?',
    'Read the passage carefully and answer the question:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nQuestion: Roughly what proportion of flowering crops worldwide do honeybees pollinate?',
    ['लगभग तीन-चौथाई', 'Nearly three-quarters'],
    [
      ['ठीक एक-तिहाई', 'Exactly one-third'],
      ['लगभग एक-दसवाँ भाग', 'About one-tenth'],
      ['केवल आधे से कम', 'Slightly less than half'],
    ],
    'गद्यांश के पहले वाक्य में "nearly three-quarters" (लगभग तीन-चौथाई) स्पष्ट रूप से लिखा है।',
    'The first sentence states that honeybees pollinate "nearly three-quarters" of flowering crops.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nप्रश्न: मधुमक्खियों की कॉलोनियों के घटने के मुख्य कारण क्या बताए गए हैं?',
    'Read the passage carefully and answer the question:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nQuestion: What two causes have shrunk bee colonies according to the passage?',
    ['आवास की हानि और अंधाधुंध कीटनाशक छिड़काव', 'Habitat loss and indiscriminate pesticide sprays'],
    [
      ['अत्यधिक वर्षा और उच्च आर्द्रता', 'Heavy rainfall and high humidity'],
      ['शहरी शोर और पवन चक्कियाँ', 'Urban noise and wind turbines'],
      ['केवल सर्दियों में तापमान की कमी', 'Only low winter temperatures'],
    ],
    'दूसरे वाक्य में "habitat loss" और "indiscriminate pesticide sprays" को मधुमक्खियों की संख्या घटने का कारण बताया गया है।',
    'The second sentence blames habitat loss and indiscriminate pesticide sprays for shrinking bee colonies.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nप्रश्न: गद्यांश में "indiscriminate" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nQuestion: What does "indiscriminate" mean in the phrase "indiscriminate pesticide sprays"?',
    ['बिना सोचे-समझे या अंधाधुंध किया गया', 'Done without careful judgment or distinction'],
    [
      ['अत्यंत सीमित और सावधानीपूर्वक', 'Highly restricted and cautious'],
      ['केवल जैविक और सुरक्षित', 'Purely organic and harmless'],
      ['वैज्ञानिक मानकों के पूर्णतः अनुकूल', 'Strictly calibrated by scientists'],
    ],
    '"Indiscriminate" का अर्थ है बिना भेदभाव या सावधानी के अंधाधुंध प्रयोग करना।',
    '"Indiscriminate" means unselective or done at random without considering harmful consequences.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nप्रश्न: मधुमक्खियों के घटने से किन दो क्षेत्रों पर संकट उत्पन्न हुआ है?',
    'Read the passage carefully and answer the question:\n"Honeybees pollinate nearly three-quarters of flowering crops worldwide. Yet habitat loss and indiscriminate pesticide sprays have shrunk bee colonies, threatening both biodiversity and food security."\nQuestion: Which two areas are threatened by shrinking bee colonies?',
    ['जैव विविधता और खाद्य सुरक्षा', 'Biodiversity and food security'],
    [
      ['खनिज खनन और वस्त्र उद्योग', 'Mineral mining and textile trade'],
      ['समुद्री परिवहन और पर्यटन', 'Maritime shipping and tourism'],
      ['अंतरिक्ष अन्वेषण और दूरसंचार', 'Space exploration and telecom'],
    ],
    'गद्यांश का अंतिम वाक्यांश "threatening both biodiversity and food security" इसे स्पष्ट करता है।',
    'The closing clause explicitly mentions threats to both biodiversity and food security.',
    'MEDIUM'
  ),

  // Passage 5: Mother Tongue in Early Education
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nप्रश्न: शोध के अनुसार, प्रारंभिक विद्यालयी शिक्षा में बच्चे बुनियादी संख्या-ज्ञान और साक्षरता तेज़ी से कब सीखते हैं?',
    'Read the passage carefully and answer the question:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nQuestion: According to research cited in the passage, when do children grasp foundational numeracy and literacy faster?',
    ['जब उन्हें प्रारंभिक वर्षों में उनकी मातृभाषा में पढ़ाया जाए', 'When taught in their mother tongue during early schooling'],
    [
      ['जब उन्हें केवल विदेशी भाषा में पढ़ाया जाए', 'When taught strictly in an unfamiliar foreign language'],
      ['जब औपचारिक शिक्षा बारह वर्ष की आयु में शुरू हो', 'When formal schooling begins at age twelve'],
      ['जब पाठ्यपुस्तकों से सभी चित्र हटा दिए जाएँ', 'When all illustrations are removed from textbooks'],
    ],
    'प्रथम वाक्य में बताया गया है कि प्रारंभिक शिक्षा में मातृभाषा में पढ़ाने पर बच्चे बुनियादी कौशल तेज़ी से सीखते हैं।',
    'The first sentence states that children grasp foundational skills faster when taught in their mother tongue early on.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nप्रश्न: अवधारणात्मक स्पष्टता (conceptual clarity) आने के बाद क्या आसान हो जाता है?',
    'Read the passage carefully and answer the question:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nQuestion: What becomes smoother once conceptual clarity takes root?',
    ['अन्य अतिरिक्त भाषाओं की ओर संक्रमण (सीखना)', 'Transitioning to additional languages'],
    [
      ['गणितीय सूत्रों को बिना समझे रटना', 'Memorizing formulas without understanding'],
      ['विद्यालय छोड़ने की प्रक्रिया', 'Dropping out of primary school'],
      ['बच्चों का व्याकरण से दूर रहना', 'Avoiding grammar in all grades'],
    ],
    'दूसरे वाक्य के अनुसार अवधारणा स्पष्ट होने पर अन्य भाषाओं में संक्रमण (transitioning) सरल हो जाता है।',
    'The second sentence states that once conceptual clarity takes root, transitioning to additional languages becomes smoother.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nप्रश्न: गद्यांश में "takes root" मुहावरे का आशय क्या है?',
    'Read the passage carefully and answer the question:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nQuestion: What does the idiom "takes root" mean in this passage?',
    ['मजबूती से स्थापित होना', 'Becomes firmly established'],
    [
      ['जल्दी नष्ट हो जाना', 'Withers away quickly'],
      ['सतह पर तैरते रहना', 'Remains superficial'],
      ['अस्थायी रूप से रुक जाना', 'Pauses temporarily'],
    ],
    '"Take root" का अर्थ है किसी विचार या समझ का गहरे और स्थायी रूप से जड़ पकड़ना या स्थापित होना।',
    '"Take root" figuratively means to become deeply and firmly established.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nप्रश्न: गद्यांश किस शैक्षिक नीति का समर्थन करता प्रतीत होता है?',
    'Read the passage carefully and answer the question:\n"Research consistently shows that children grasp foundational numeracy and literacy faster when taught in their mother tongue during early schooling. Once conceptual clarity takes root, transitioning to additional languages becomes far smoother."\nQuestion: Which educational approach does the passage support?',
    ['प्रारंभिक शिक्षा मातृभाषा में तथा क्रमशः बहुभाषी दक्षता', 'Early instruction in the mother tongue followed by multilingual transition'],
    [
      ['प्रथम दिन से मातृभाषा पर पूर्ण प्रतिबंध', 'Banning the mother tongue from day one'],
      ['अन्य भाषाओं के शिक्षण का पूर्ण बहिष्कार', 'Excluding additional languages permanently'],
      ['प्रारंभिक कक्षाओं में संख्या-ज्ञान को समाप्त करना', 'Eliminating numeracy in early grades'],
    ],
    'गद्यांश प्रारंभ में मातृभाषा के माध्यम से मजबूत नींव बनाने और फिर अन्य भाषाएँ सीखने का समर्थन करता है।',
    'The passage advocates mother-tongue instruction first to build clarity, aiding later multilingual learning.',
    'HARD'
  ),

  // Passage 6: Mangroves
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nप्रश्न: मैंग्रोव वन तटीय क्षेत्रों की रक्षा कैसे करते हैं?',
    'Read the passage carefully and answer the question:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nQuestion: How do mangrove forests protect coastal areas?',
    ['तूफानी लहरों का वेग कम करके और तटों को स्थिर रखकर', 'By absorbing storm surges and stabilizing shorelines'],
    [
      ['समुद्र के पानी को मीठे पानी में बदलकर', 'By turning seawater into freshwater'],
      ['तटों पर कंक्रीट की दीवारें बनाकर', 'By building concrete walls on beaches'],
      ['समुद्री तापमान को तेजी से बढ़ाकर', 'By rapidly raising ocean temperatures'],
    ],
    'गद्यांश के अनुसार मैंग्रोव तूफानी लहरों की शक्ति सोखते हैं और अपनी उलझी जड़ों से तटरेखा को स्थिर रखते हैं।',
    'Mangroves absorb the force of storm surges and stabilize shorelines with their tangled roots.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nप्रश्न: मैंग्रोव वन छोटी मछलियों के लिए क्यों महत्वपूर्ण हैं?',
    'Read the passage carefully and answer the question:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nQuestion: Why are mangrove forests vital for young fish?',
    ['वे शिकारियों से सुरक्षा देने वाली नर्सरी का कार्य करते हैं', 'They act as nurseries offering shelter from predators'],
    [
      ['वे मछलियों को स्थल पर रहने योग्य बनाते हैं', 'They allow fish to walk on dry land'],
      ['वे सभी बड़े शिकारियों को आश्रय देते हैं', 'They exclusively shelter large predators'],
      ['वे केवल प्रवासी पक्षियों के घोंसले हटाते हैं', 'They keep migratory birds completely away'],
    ],
    'दूसरे वाक्य में बताया गया है कि मैंग्रोव ऐसी नर्सरी हैं जहाँ छोटी मछलियाँ शिकारियों (predators) से सुरक्षित रहती हैं।',
    'The second sentence states that mangroves serve as nurseries where young fish shelter from predators.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nप्रश्न: गद्यांश में "tangled" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nQuestion: What does "tangled" mean in the context of mangrove roots?',
    ['आपस में गुँथी या उलझी हुई', 'Intertwined or twisted together'],
    [
      ['सीधी और समानांतर', 'Straight and parallel'],
      ['छोटी और कमजोर', 'Short and fragile'],
      ['सजावटी और कृत्रिम', 'Ornamental and artificial'],
    ],
    '"Tangled" का अर्थ जड़ों का घना और आपस में गुँथा हुआ होना है, जो मिट्टी को बाँधे रखता है।',
    '"Tangled" means twisted or intertwined together in a dense mass.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nप्रश्न: गद्यांश में किस अलंकार या शैली का उपयोग "natural coastal shields" में हुआ है?',
    'Read the passage carefully and answer the question:\n"Mangrove forests act as natural coastal shields, absorbing the force of storm surges and stabilizing shorelines with their tangled roots. They also serve as vital nurseries where young fish shelter from predators."\nQuestion: Which figure of speech is used when describing mangroves as "natural coastal shields"?',
    ['रूपक अलंकार (Metaphor)', 'Metaphor'],
    [
      ['अतिशयोक्ति अलंकार (Hyperbole)', 'Hyperbole'],
      ['विरोधाभास (Oxymoron)', 'Oxymoron'],
      ['ध्वन्यात्मकता (Onomatopoeia)', 'Onomatopoeia'],
    ],
    'मैंग्रोव को बिना "like" या "as" के सीधे "तटीय ढाल" (coastal shields) कहा गया है, अतः यहाँ रूपक (Metaphor) है।',
    'Calling mangroves "natural coastal shields" without "like" or "as" is an implied comparison, i.e., a metaphor.',
    'HARD',
    { grammarRuleHi: 'Metaphor में दो भिन्न वस्तुओं की सीधी तुलना (बिना like/as के) की जाती है।' }
  ),

  // Passage 7: Digital Detox & Sleep
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nप्रश्न: स्मार्टफोन से निकलने वाली नीली रोशनी किस हार्मोन को दबाती है?',
    'Read the passage carefully and answer the question:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nQuestion: Which hormone is suppressed by blue light from smartphones?',
    ['मेलाटोनिन (Melatonin)', 'Melatonin'],
    [
      ['इंसुलिन (Insulin)', 'Insulin'],
      ['एड्रेनालाईन (Adrenaline)', 'Adrenaline'],
      ['थायरॉक्सिन (Thyroxine)', 'Thyroxine'],
    ],
    'गद्यांश के पहले वाक्य में मेलाटोनिन को नींद का संकेत देने वाला हार्मोन बताया गया है।',
    'The first sentence states that blue light suppresses melatonin, the sleep-signaling hormone.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nप्रश्न: प्राकृतिक नींद चक्र को बहाल करने के लिए गद्यांश में क्या सलाह दी गई है?',
    'Read the passage carefully and answer the question:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nQuestion: What does the passage recommend to restore natural sleep cycles?',
    ['सोने से एक घंटे पहले स्क्रीन बंद कर देना', 'Switching off screens an hour before bedtime'],
    [
      ['सोते समय फोन की चमक बढ़ा देना', 'Increasing screen brightness at night'],
      ['देर रात तक समाचार पढ़ते रहना', 'Reading news updates until midnight'],
      ['दोपहर में लंबे समय तक सोना', 'Taking long naps every afternoon'],
    ],
    'दूसरे वाक्य में सोने से एक घंटे पहले स्क्रीन बंद करने की अनुशंसा की गई है।',
    'The passage recommends switching off screens an hour before bedtime.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nप्रश्न: गद्यांश में प्रयुक्त शब्द "emitted" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nQuestion: What does "emitted" mean in the context of blue light?',
    ['उत्सर्जित या बाहर छोड़ा गया', 'Given off or discharged'],
    [
      ['अंदर सोखा गया', 'Absorbed inward'],
      ['पूर्णतः अवरुद्ध किया गया', 'Completely blocked'],
      ['स्थायी रूप से संग्रहीत', 'Stored permanently'],
    ],
    '"Emit" का अर्थ प्रकाश, ध्वनि या ऊर्जा आदि को बाहर उत्सर्जित करना होता है।',
    '"Emitted" means sent out or discharged, as light from a screen.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nप्रश्न: मेलाटोनिन मस्तिष्क को क्या संकेत देता है?',
    'Read the passage carefully and answer the question:\n"Blue light emitted by smartphones suppresses melatonin, the hormone that signals the brain it is time to sleep. Switching off screens an hour before bedtime helps restore natural sleep cycles."\nQuestion: What signal does melatonin send to the brain?',
    ['कि अब सोने का समय हो गया है', 'That it is time to sleep'],
    [
      ['कि भोजन पचाने का समय है', 'That it is time to digest food'],
      ['कि शारीरिक दौड़ शुरू करनी है', 'That strenuous exercise should begin'],
      ['कि आँखों को तेज़ प्रकाश चाहिए', 'That the eyes need brighter light'],
    ],
    'गद्यांश में लिखा है: "the hormone that signals the brain it is time to sleep".',
    'The passage directly says melatonin signals the brain that it is time to sleep.',
    'EASY'
  ),

  // Passage 8: Community Libraries
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nप्रश्न: लेखक सामुदायिक पुस्तकालय को केवल पुस्तकों का गोदाम क्यों नहीं मानता?',
    'Read the passage carefully and answer the question:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nQuestion: Why does the author say a library is more than a warehouse of books?',
    ['क्योंकि यह सभी वर्गों के लिए निःशुल्क ज्ञान का लोकतांत्रिक मंच है', 'Because it is a free, democratic space where diverse people access knowledge'],
    [
      ['क्योंकि वहाँ केवल महँगी पत्रिकाएँ बेची जाती हैं', 'Because it sells expensive rare magazines'],
      ['क्योंकि वह केवल विश्वविद्यालय के प्रोफेसरों के लिए है', 'Because it serves university professors exclusively'],
      ['क्योंकि वहाँ पुरानी पुस्तकें नष्ट की जाती हैं', 'Because old books are destroyed there weekly'],
    ],
    'गद्यांश में पुस्तकालय को ऐसा लोकतांत्रिक स्थान कहा गया है जहाँ सेवानिवृत्त, छात्र और रोजगार के इच्छुक सभी निःशुल्क ज्ञान प्राप्त करते हैं।',
    'The passage calls it a democratic space where retirees, students, and job seekers access knowledge free of charge.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nप्रश्न: निष्क्रिय आगंतुकों को आजीवन शिक्षार्थी (lifelong learners) कौन बनाता है?',
    'Read the passage carefully and answer the question:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nQuestion: What transforms passive visitors into lifelong learners according to the passage?',
    ['शांत पठन कोने और सप्ताहांत कार्यशालाएँ', 'Quiet reading corners and weekend workshops'],
    [
      ['कड़े प्रवेश शुल्क और जुर्माना', 'Strict entry fees and heavy fines'],
      ['पुस्तकें घर ले जाने पर प्रतिबंध', 'Bans on borrowing books'],
      ['केवल मूक फिल्म प्रदर्शन', 'Silent film screenings alone'],
    ],
    'दूसरे वाक्य में "Quiet reading corners and weekend workshops" का उल्लेख है।',
    'The second sentence credits quiet reading corners and weekend workshops.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nप्रश्न: "democratic space" वाक्यांश का यहाँ क्या तात्पर्य है?',
    'Read the passage carefully and answer the question:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nQuestion: What is meant by "democratic space" in this passage?',
    ['एक खुला स्थान जो बिना भेदभाव के सभी नागरिकों के लिए सुलभ हो', 'An inclusive place accessible equally to everyone regardless of background'],
    [
      ['एक ऐसा भवन जहाँ केवल चुनाव आयोजित होते हैं', 'A hall used exclusively for casting votes'],
      ['एक निजी क्लब जो उच्च शुल्क लेता है', 'A private club restricted to wealthy members'],
      ['एक सरकारी कार्यालय जहाँ पुस्तकें प्रतिबंधित हैं', 'A government office where books are restricted'],
    ],
    'यहाँ "democratic" का तात्पर्य समान अवसर और सभी नागरिकों के लिए निःशुल्क व खुली पहुँच से है।',
    'In this context, "democratic space" means open and equally accessible to all members of society.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nप्रश्न: गद्यांश में "vibrant" शब्द का विलोम क्या होगा?',
    'Read the passage carefully and answer the question:\n"A vibrant community library is far more than a warehouse of books; it is a democratic space where retirees, students, and job seekers access knowledge free of charge. Quiet reading corners and weekend workshops turn passive visitors into lifelong learners."\nQuestion: Which word is opposite in meaning to "vibrant" as used in the passage?',
    ['नीरस या निष्प्राण (Lifeless / Dull)', 'Lifeless or dull'],
    [
      ['जीवंत (Lively)', 'Lively'],
      ['ऊर्जावान (Energetic)', 'Energetic'],
      ['सक्रिय (Active)', 'Active'],
    ],
    '"Vibrant" का अर्थ जीवंत और सक्रिय होता है; अतः इसका विलोम "Lifeless or dull" (नीरस) है।',
    '"Vibrant" means full of energy and life; its opposite is "lifeless or dull."',
    'EASY'
  ),

  // Passage 9: Composting Kitchen Waste
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nप्रश्न: जैविक कचरे की खाद (कम्पोस्टिंग) बनाने से लैंडफिल पर क्या प्रभाव पड़ता है?',
    'Read the passage carefully and answer the question:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nQuestion: How does composting affect landfills according to the passage?',
    ['यह जैविक कचरे को लैंडफिल में जाने से रोकता है', 'It diverts organic waste away from landfills'],
    [
      ['यह लैंडफिल में प्लास्टिक की मात्रा दोगुनी करता है', 'It doubles plastic waste in landfills'],
      ['यह लैंडफिल की ऊँचाई तेज़ी से बढ़ाता है', 'It rapidly increases landfill height'],
      ['यह कचरे को विषैले धुएँ में बदल देता है', 'It turns scraps into toxic smoke'],
    ],
    'पहले वाक्य में कहा गया है कि कम्पोस्टिंग से जैविक कचरा लैंडफिल में जाने से बचता है।',
    'The first sentence explains that composting diverts organic waste from overflowing landfills.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nप्रश्न: छिलकों और सूखे पत्तों को ह्यूमस में कौन बदलता है?',
    'Read the passage carefully and answer the question:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nQuestion: What breaks down the organic scraps into humus?',
    ['सूक्ष्मजीव (Microbes)', 'Microbes'],
    [
      ['कृत्रिम रसायन (Synthetic chemicals)', 'Synthetic chemicals'],
      ['सूर्य की पराबैंगनी किरणें (UV rays alone)', 'Ultraviolet rays alone'],
      ['प्लास्टिक अपघटक (Plastic polymers)', 'Plastic polymers'],
    ],
    'दूसरे वाक्य के अनुसार सूक्ष्मजीव (microbes) कचरे को विघटित कर पोषक तत्वों से भरपूर ह्यूमस बनाते हैं।',
    'The second sentence states that microbes break down the scraps into nutrient-rich humus.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nप्रश्न: गद्यांश में प्रयुक्त "synthetic" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nQuestion: What does "synthetic" mean in "synthetic chemicals"?',
    ['मानव-निर्मित या कृत्रिम', 'Man-made or artificial'],
    [
      ['पूर्णतः प्राकृतिक', 'Completely natural'],
      ['पौधों से सीधे प्राप्त', 'Directly plant-derived'],
      ['समुद्री लवण से बना', 'Made of pure sea salt'],
    ],
    '"Synthetic" का अर्थ प्रयोगशाला या कारखानों में कृत्रिम रूप से निर्मित पदार्थ होता है।',
    '"Synthetic" means artificially produced through chemical synthesis rather than occurring naturally.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nप्रश्न: ह्यूमस मिट्टी के लिए किस प्रकार उपयोगी है?',
    'Read the passage carefully and answer the question:\n"Composting vegetable peels and fallen leaves diverts organic waste from overflowing landfills. Within weeks, microbes break down the scraps into nutrient-rich humus that boosts soil fertility without synthetic chemicals."\nQuestion: How is humus beneficial for the soil?',
    ['यह बिना रासायनिक उर्वरकों के मिट्टी की उर्वरता बढ़ाता है', 'It boosts soil fertility naturally without synthetic chemicals'],
    [
      ['यह मिट्टी की नमी को पूर्णतः सुखा देता है', 'It dries out all soil moisture'],
      ['यह मिट्टी को काँच जैसा कठोर बनाता है', 'It hardens soil like glass'],
      ['यह पौधों की जड़ों को बढ़ने से रोकता है', 'It prevents plant roots from growing'],
    ],
    'अंतिम पंक्ति बताती है कि ह्यूमस बिना कृत्रिम रसायनों के मिट्टी की उर्वरता (fertility) बढ़ाता है।',
    'The passage says humus boosts soil fertility without synthetic chemicals.',
    'MEDIUM'
  ),

  // Passage 10: Time Management for Students
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nप्रश्न: गद्यांश के अनुसार प्रभावी समय-प्रबंधन का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nQuestion: What does effective time management involve according to the passage?',
    ['महत्वपूर्ण लक्ष्यों को प्राथमिकता देना, छोटे विश्राम रखना और व्यर्थ भटकाव से बचना', 'Prioritizing high-impact goals, scheduling breaks, and avoiding trivial distractions'],
    [
      ['बिना रुके प्रतिदिन अठारह घंटे काम करना', 'Working eighteen hours daily without breaks'],
      ['एक साथ बीस साधारण कार्य आरंभ करना', 'Starting twenty minor tasks simultaneously'],
      ['प्रत्येक सामाजिक निमंत्रण को स्वीकार करना', 'Accepting every social invitation'],
    ],
    'दूसरे वाक्य में तीन प्रमुख तत्व बताए गए हैं: उच्च-प्रभाव वाले लक्ष्यों को प्राथमिकता, छोटे विश्राम और तुच्छ भटकाव को न कहना।',
    'The passage defines it as prioritizing high-impact goals, scheduling short breaks, and refusing trivial distractions.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nप्रश्न: समय-प्रबंधन के विषय में लेखक किस गलत धारणा का खंडन करता है?',
    'Read the passage carefully and answer the question:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nQuestion: Which misconception about time management does the author reject?',
    ['कि जागने के हर घंटे को कार्यों से भर देना समय-प्रबंधन है', 'That it means filling every waking hour with tasks'],
    [
      ['कि विश्राम लेना कार्यक्षमता के लिए अच्छा है', 'That taking short breaks aids productivity'],
      ['कि प्राथमिकताओं का निर्धारण आवश्यक है', 'That setting priorities is useful'],
      ['कि भटकाव से बचना कठिन होता है', 'That distractions can reduce focus'],
    ],
    'पहला वाक्य इस भ्रम को तोड़ता है कि हर घंटे लगातार काम करते रहना ही समय प्रबंधन है।',
    'The opening sentence explicitly rejects the idea that every waking hour must be crammed with tasks.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nप्रश्न: गद्यांश में "trivial" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nQuestion: What does "trivial" mean in the phrase "trivial distractions"?',
    ['महत्वहीन या तुच्छ', 'Of little value or importance'],
    [
      ['अत्यंत आवश्यक', 'Highly crucial'],
      ['गंभीर और अनिवार्य', 'Serious and mandatory'],
      ['दीर्घकालिक लाभकारी', 'Beneficial in the long run'],
    ],
    '"Trivial" का अर्थ कम महत्व वाला या मामूली होता है।',
    '"Trivial" means minor, unimportant, or of little significance.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nप्रश्न: गद्यांश का स्वर (tone) कैसा है?',
    'Read the passage carefully and answer the question:\n"Effective time management does not mean filling every waking hour with tasks. Instead, it involves prioritizing high-impact goals, scheduling short breaks, and saying no to trivial distractions."\nQuestion: What is the tone of the passage?',
    ['व्यावहारिक और परामर्शदात्री', 'Practical and advisory'],
    [
      ['व्यंग्यात्मक और कटु', 'Sarcastic and bitter'],
      ['निराशावादी और भयभीत', 'Pessimistic and fearful'],
      ['अत्यधिक भावुक और काल्पनिक', 'Overly emotional and fictional'],
    ],
    'लेखक संतुलित एवं व्यावहारिक सलाह दे रहा है, अतः स्वर practical and advisory है।',
    'The passage offers balanced, actionable guidance, making its tone practical and advisory.',
    'HARD'
  ),

  // Passage 11: Braille System
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nप्रश्न: ब्रेल लिपि का आविष्कार किस शताब्दी में हुआ था?',
    'Read the passage carefully and answer the question:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nQuestion: In which century was the Braille system invented?',
    ['उन्नीसवीं शताब्दी में', 'In the nineteenth century'],
    [
      ['सोलहवीं शताब्दी में', 'In the sixteenth century'],
      ['अठारहवीं शताब्दी में', 'In the eighteenth century'],
      ['बीसवीं शताब्दी में', 'In the twentieth century'],
    ],
    'गद्यांश में स्पष्ट है कि लुई ब्रेल ने उन्नीसवीं शताब्दी (nineteenth century) में इसका आविष्कार किया।',
    'The passage explicitly says Louis Braille invented it in the nineteenth century.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nप्रश्न: ब्रेल प्रणाली में अक्षरों और संख्याओं को दर्शाने के लिए कितने उभरे हुए बिंदुओं के पैटर्न का उपयोग होता है?',
    'Read the passage carefully and answer the question:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nQuestion: How many raised dots form the patterns used in Braille?',
    ['छह उभरे हुए बिंदु', 'Six raised dots'],
    [
      ['चार उभरे हुए बिंदु', 'Four raised dots'],
      ['आठ उभरे हुए बिंदु', 'Eight raised dots'],
      ['बारह उभरे हुए बिंदु', 'Twelve raised dots'],
    ],
    'गद्यांश में लिखा है: "patterns of six raised dots".',
    'The passage specifies patterns of six raised dots.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nप्रश्न: गद्यांश में प्रयुक्त "tactile" शब्द का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nQuestion: What does "tactile" mean in the passage?',
    ['स्पर्श की इंद्रिय से संबंधित', 'Related to the sense of touch'],
    [
      ['केवल श्रवण से संबंधित', 'Related purely to hearing'],
      ['रंगों की पहचान से संबंधित', 'Related to color vision'],
      ['तेज़ गति से बोलने से संबंधित', 'Related to rapid speech'],
    ],
    '"Tactile" का अर्थ स्पर्श से संबंधित होता है, क्योंकि ब्रेल लिपि को उँगलियों से छूकर पढ़ा जाता है।',
    '"Tactile" refers to the sense of touch, as Braille dots are read by feeling them with fingertips.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nप्रश्न: अक्षरों और संख्याओं के अतिरिक्त ब्रेल लिपि और किसे दर्शाने में सक्षम है?',
    'Read the passage carefully and answer the question:\n"Invented by Louis Braille in the nineteenth century, the tactile writing system uses patterns of six raised dots to represent letters, numbers, and musical notes. It empowered visually impaired learners to read and write independently."\nQuestion: Besides letters and numbers, what else can Braille represent according to the passage?',
    ['संगीत के स्वर (Musical notes)', 'Musical notes'],
    [
      ['मौसम के पूर्वानुमान के नक्शे', 'Weather radar maps'],
      ['रक्तचाप के ग्राफ', 'Blood pressure charts'],
      ['रासायनिक प्रयोगशाला के रंग', 'Chemical flame colors'],
    ],
    'गद्यांश में "letters, numbers, and musical notes" का उल्लेख है।',
    'The passage lists letters, numbers, and musical notes.',
    'MEDIUM'
  ),

  // Passage 12: Solar Microgrids in Villages
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nप्रश्न: सौर माइक्रोग्रिड से पहले दूरस्थ गाँव प्रकाश के लिए किस पर निर्भर थे?',
    'Read the passage carefully and answer the question:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nQuestion: What did remote villages rely on before solar microgrids?',
    ['धुआँ छोड़ने वाले मिट्टी के तेल के लैंप', 'Smoky kerosene lamps'],
    [
      ['परमाणु ऊर्जा संयंत्र', 'Nuclear power plants'],
      ['भूमिगत कोयला भट्ठियाँ', 'Underground coal furnaces'],
      ['समुद्री ज्वार टरबाइन', 'Tidal ocean turbines'],
    ],
    'पहले वाक्य में स्पष्ट लिखा है कि ये गाँव पहले "smoky kerosene lamps" पर निर्भर थे।',
    'The first sentence states they previously relied on smoky kerosene lamps.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nप्रश्न: विश्वसनीय बिजली से गाँव के स्वास्थ्य क्षेत्र को क्या लाभ मिला है?',
    'Read the passage carefully and answer the question:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nQuestion: How has reliable electricity benefited village healthcare?',
    ['स्थानीय क्लीनिक सूर्यास्त के बाद भी खुले रह सकते हैं', 'Local clinics can stay open after sunset'],
    [
      ['बड़े अस्पतालों की आवश्यकता समाप्त हो गई है', 'Large hospitals are no longer needed anywhere'],
      ['दवाइयों की कीमतें शून्य हो गई हैं', 'Medicines have become completely free'],
      ['चिकित्सक केवल ऑनलाइन परामर्श देते हैं', 'Doctors work exclusively from distant cities'],
    ],
    'अंतिम वाक्य के अनुसार इससे स्थानीय क्लीनिक (local clinics) सूर्यास्त के बाद भी खुले रहते हैं।',
    'The passage mentions that reliable electricity keeps local clinics open after sunset.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nप्रश्न: गद्यांश में "Decentralized" शब्द का क्या आशय है?',
    'Read the passage carefully and answer the question:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nQuestion: What does "decentralized" imply about solar microgrids?',
    ['किसी एक बड़े केंद्र पर निर्भर न रहकर स्थानीय स्तर पर संचालित', 'Operated locally rather than from a single central power station'],
    [
      ['केवल राष्ट्रीय राजधानी में स्थित', 'Located solely inside the national capital'],
      ['किसी एक निजी व्यक्ति के घर तक सीमित', 'Restricted to a single household'],
      ['बिना किसी तार या बैटरी के चलने वाला', 'Operating without wires or panels'],
    ],
    '"Decentralized" का अर्थ शक्ति या उत्पादन का किसी एक केंद्रीय स्थल के बजाय स्थानीय इकाइयों में वितरित होना है।',
    '"Decentralized" means distributed across local units rather than controlled from one central hub.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nप्रश्न: बच्चों की पढ़ाई पर सौर बिजली का क्या असर हुआ है?',
    'Read the passage carefully and answer the question:\n"Decentralized solar microgrids are transforming remote villages that previously relied on smoky kerosene lamps. Reliable evening electricity allows children to study longer, powers grain mills, and keeps local clinics open after sunset."\nQuestion: How has solar electricity affected children’s study habits?',
    ['बच्चे शाम को अधिक देर तक पढ़ाई कर पा रहे हैं', 'Children are able to study for longer hours'],
    [
      ['बच्चों ने विद्यालय जाना बंद कर दिया है', 'Children stopped attending daytime school'],
      ['बच्चे केवल सुबह के समय पढ़ते हैं', 'Children study only at dawn'],
      ['बच्चों को कम गृहकार्य मिलता है', 'Children receive less homework'],
    ],
    'गद्यांश में लिखा है: "allows children to study longer".',
    'The passage states that reliable evening electricity allows children to study longer.',
    'EASY'
  ),

  // Passage 13: Active Listening
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nप्रश्न: गद्यांश के अनुसार, केवल चुप रहना ही सक्रिय श्रवण (active listening) क्यों नहीं है?',
    'Read the passage carefully and answer the question:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nQuestion: Why is remaining silent not enough for active listening?',
    ['क्योंकि इसमें आँखों से संपर्क, न टोकना और मुख्य बातों को दोहराकर पुष्टि करना भी शामिल है', 'Because it also requires eye contact, avoiding interruptions, and paraphrasing key points'],
    [
      ['क्योंकि श्रोता को बोलते हुए साथ-साथ लिखना अनिवार्य है', 'Because the listener must dictate notes aloud'],
      ['क्योंकि चुप रहने से वक्ता भ्रमित हो जाता है', 'Because silence always confuses the speaker'],
      ['क्योंकि सक्रिय श्रवण केवल फोन पर संभव है', 'Because active listening works only on phone calls'],
    ],
    'दूसरे वाक्य में सक्रिय श्रवण के तीन घटक बताए गए हैं: आँखों का संपर्क, न टोकना और समझ की पुष्टि हेतु बातों को अपने शब्दों में कहना।',
    'The second sentence adds maintaining eye contact, not interrupting, and paraphrasing key points.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nप्रश्न: "paraphrases key points" का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nQuestion: What does "paraphrases key points" mean?',
    ['मुख्य बिंदुओं को स्पष्टता के लिए अपने शब्दों में दोहराना', 'Restating main ideas in one’s own words to verify meaning'],
    [
      ['वक्ता की हर बात पर असहमति जताना', 'Disagreeing with every point raised'],
      ['बातचीत का विषय अचानक बदल देना', 'Changing the topic abruptly'],
      ['कठिन शब्दों का शब्दकोश में अर्थ खोजना', 'Looking up words in a dictionary'],
    ],
    '"Paraphrase" का अर्थ किसी के कहे मुख्य भाव को अपने शब्दों में कहकर सुनिश्चित करना कि बात सही समझी गई है।',
    '"Paraphrase" means expressing someone else’s ideas in your own words to confirm accurate understanding.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nप्रश्न: एक कुशल श्रोता को किस आवेग पर नियंत्रण रखना चाहिए?',
    'Read the passage carefully and answer the question:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nQuestion: Which urge should a skilled listener resist?',
    ['वक्ता को बीच में टोकने के आवेग पर', 'The urge to interrupt the speaker'],
    [
      ['प्रश्न पूछने के आवेग पर', 'The urge to ask clarifying questions'],
      ['आँखों से संपर्क बनाने पर', 'The urge to maintain eye contact'],
      ['बात को ध्यान से समझने पर', 'The urge to focus on key points'],
    ],
    'गद्यांश में लिखा है: "resists the urge to interrupt" (बीच में टोकने की इच्छा को रोकता है)।',
    'The passage explicitly says a skilled listener "resists the urge to interrupt."',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nप्रश्न: वाक्य "A skilled listener maintains eye contact..." में "skilled" किस शब्द-भेद (Part of Speech) का कार्य कर रहा है?',
    'Read the passage carefully and answer the question:\n"Active listening requires more than remaining silent while someone speaks. A skilled listener maintains eye contact, resists the urge to interrupt, and paraphrases key points to confirm understanding."\nQuestion: What part of speech is the word "skilled" in "A skilled listener"?',
    ['विशेषण (Adjective)', 'Adjective'],
    [
      ['संज्ञा (Noun)', 'Noun'],
      ['क्रियाविशेषण (Adverb)', 'Adverb'],
      ['संयोजक (Conjunction)', 'Conjunction'],
    ],
    '"Skilled" शब्द संज्ञा "listener" की विशेषता बता रहा है, अतः यह एक विशेषण (Adjective) है।',
    '"Skilled" modifies the noun "listener," so it functions as an adjective.',
    'MEDIUM',
    { grammarRuleHi: 'जो शब्द किसी संज्ञा (Noun) या सर्वनाम (Pronoun) की विशेषता बताए, वह Adjective होता है।' }
  ),

  // Passage 14: Urban Trees
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nप्रश्न: शहरी सड़कों के किनारे लगे छायादार वृक्ष गर्मियों में क्या कम करते हैं?',
    'Read the passage carefully and answer the question:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nQuestion: What do shade trees reduce along city avenues during scorching summers?',
    ['सड़क और फुटपाथ के तापमान को कई डिग्री कम करते हैं', 'They lower pavement temperatures by several degrees'],
    [
      ['शहर में वार्षिक वर्षा को पूरी तरह रोकते हैं', 'They stop annual rainfall completely'],
      ['यातायात वाहनों की संख्या बढ़ाते हैं', 'They increase traffic congestion'],
      ['सौर पैनलों की आवश्यकता समाप्त करते हैं', 'They eliminate the need for streetlights'],
    ],
    'पहले वाक्य में कहा गया है कि छायादार पेड़ फुटपाथ के तापमान को कई डिग्री कम करते हैं।',
    'The first sentence states that shade trees lower pavement temperatures by several degrees.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nप्रश्न: पेड़ों की पत्तियाँ हवा को स्वच्छ कैसे बनाती हैं?',
    'Read the passage carefully and answer the question:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nQuestion: How do tree leaves make neighborhood air cleaner?',
    ['हवा में उड़ने वाले धूल के कणों को रोककर/फँसाकर', 'By trapping airborne dust particles'],
    [
      ['कारखानों से निकलने वाले धुएँ को दोगुना करके', 'By doubling factory exhaust'],
      ['सड़कों पर धूल उड़ाने वाली हवाएँ चलाकर', 'By creating dusty gusts'],
      ['पत्तियों को प्रतिदिन गिराकर', 'By shedding all leaves daily'],
    ],
    'दूसरे वाक्य में "trap airborne dust particles" का उल्लेख है।',
    'The second sentence mentions that their leaves trap airborne dust particles.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nप्रश्न: गद्यांश में "scorching" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nQuestion: What does "scorching" mean in "scorching summers"?',
    ['अत्यंत झुलसाने वाली / तपती हुई', 'Extremely hot or burning'],
    [
      ['बर्फीली और ठंडी', 'Freezing and icy'],
      ['हल्की और सुहावनी', 'Mild and pleasant'],
      ['धुंध भरी और नम', 'Misty and damp'],
    ],
    '"Scorching" का अर्थ अत्यधिक झुलसा देने वाली गर्मी होता है।',
    '"Scorching" means intensely hot, enough to burn or parch.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nप्रश्न: गद्यांश में "pedestrians" किन्हें कहा गया है?',
    'Read the passage carefully and answer the question:\n"Shade trees along city avenues lower pavement temperatures by several degrees during scorching summers. Their leaves also trap airborne dust particles, making neighborhood air cleaner for pedestrians and cyclists."\nQuestion: Who are referred to as "pedestrians" in the passage?',
    ['पैदल चलने वाले यात्री', 'People traveling on foot'],
    [
      ['भारी ट्रक चालक', 'Heavy truck drivers'],
      ['रेलगाड़ी के यात्री', 'Train passengers'],
      ['हवाई जहाज के पायलट', 'Airplane pilots'],
    ],
    '"Pedestrian" वह व्यक्ति है जो पैदल चलता है।',
    'A "pedestrian" is a person walking along a road or in a developed area.',
    'EASY'
  ),

  // Passage 15: Growth Mindset
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nप्रश्न: विकासपरक मानसिकता (growth mindset) वाले छात्र गलतियों को किस रूप में देखते हैं?',
    'Read the passage carefully and answer the question:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nQuestion: How do students with a growth mindset view mistakes?',
    ['दक्षता प्राप्त करने की दिशा में सीढ़ी के रूप में', 'As stepping stones toward mastery'],
    [
      ['अपनी स्थायी अक्षमता के प्रमाण के रूप में', 'As proof of permanent inadequacy'],
      ['पढ़ाई छोड़ने के कारण के रूप में', 'As reasons to abandon learning'],
      ['अन्य सहपाठियों से शर्मिंदा होने की बात के रूप में', 'As events to hide from teachers'],
    ],
    'पहले वाक्य के अनुसार ऐसे छात्र गलतियों को निपुणता की ओर बढ़ने की सीढ़ी (stepping stones toward mastery) मानते हैं।',
    'The first sentence states they view mistakes as stepping stones toward mastery.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nप्रश्न: शिक्षार्थियों को कठिन चुनौतियाँ स्वीकार करने के लिए कौन सी शिक्षक-प्रतिक्रिया प्रेरित करती है?',
    'Read the passage carefully and answer the question:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nQuestion: What teacher feedback encourages learners to tackle harder challenges?',
    ['जन्मजात प्रतिभा के बजाय प्रयास और रणनीति की प्रशंसा करना', 'Praising effort and strategy instead of innate talent'],
    [
      ['केवल जन्मजात बुद्धिमत्ता की प्रशंसा करना', 'Praising innate talent exclusively'],
      ['कठिन प्रश्नों से छात्रों को दूर रखना', 'Shielding students from tough tasks'],
      ['प्रत्येक त्रुटि पर अंक काटना', 'Penalizing every minor mistake harshly'],
    ],
    'दूसरे वाक्य के अनुसार जब शिक्षक प्रयास और रणनीति की प्रशंसा करते हैं, तो छात्र कठिन चुनौतियों का सामना करने को तैयार होते हैं।',
    'The second sentence notes that praising effort and strategy encourages learners to tackle harder challenges.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nप्रश्न: गद्यांश में "innate" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nQuestion: What does "innate" mean in the phrase "innate talent"?',
    ['जन्मजात या स्वाभाविक', 'Inborn or natural from birth'],
    [
      ['बाद में सीखा हुआ', 'Acquired late in life'],
      ['नकली या बनावटी', 'Artificial or pretended'],
      ['भूल जाने योग्य', 'Easily forgotten'],
    ],
    '"Innate" का अर्थ जन्म से ही विद्यमान या नैसर्गिक होता है।',
    '"Innate" means existing naturally from birth; inborn.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nप्रश्न: "inadequacy" शब्द का सबसे उपयुक्त विलोम कौन-सा है?',
    'Read the passage carefully and answer the question:\n"Students with a growth mindset view mistakes not as proof of inadequacy, but as stepping stones toward mastery. When teachers praise effort and strategy instead of innate talent, learners willingly tackle harder challenges."\nQuestion: Which word is an antonym of "inadequacy" in this context?',
    ['सक्षमता / योग्यता (Competence)', 'Competence'],
    [
      ['कमी (Shortcoming)', 'Shortcoming'],
      ['कमजोरी (Weakness)', 'Weakness'],
      ['विफलता (Failure)', 'Failure'],
    ],
    '"Inadequacy" का अर्थ अपर्याप्तता या अक्षमता है, इसलिए इसका विलोम "Competence" (सक्षमता) होगा।',
    '"Inadequacy" means lacking ability or sufficiency; its opposite is "competence."',
    'HARD'
  ),

  // Passage 16: Wetlands
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nप्रश्न: आर्द्रभूमियों (wetlands) को "प्रकृति के गुर्दे" (nature’s kidneys) क्यों कहा गया है?',
    'Read the passage carefully and answer the question:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nQuestion: Why are wetlands called "nature’s kidneys" in the passage?',
    ['क्योंकि वे पानी से प्रदूषकों और भारी धातुओं को छानकर अलग करती हैं', 'Because they filter pollutants and heavy metals from water'],
    [
      ['क्योंकि वे केवल मरुस्थलों में पाई जाती हैं', 'Because they occur only in dry deserts'],
      ['क्योंकि वे मानसून की बारिश रोक देती हैं', 'Because they block monsoon clouds'],
      ['क्योंकि उनका आकार मानव शरीर जैसा है', 'Because they look like human organs'],
    ],
    'पहले वाक्य में बताया गया है कि वे पानी से प्रदूषक और भारी धातुएँ छानती हैं, इसलिए उन्हें प्रकृति के गुर्दे कहा गया है।',
    'They are called nature’s kidneys because they filter pollutants and heavy metals from water.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nप्रश्न: मानसून के दौरान आर्द्रभूमियाँ बाढ़ के अतिरिक्त जल के साथ क्या करती हैं?',
    'Read the passage carefully and answer the question:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nQuestion: What do wetlands do with excess floodwater during monsoons?',
    ['विशाल स्पंज की तरह अतिरिक्त जल को सोख लेती हैं', 'They absorb it like giant sponges'],
    [
      ['उसे तुरंत भाप बनाकर उड़ा देती हैं', 'They evaporate it instantaneously'],
      ['उसे शहरों की ओर मोड़ देती हैं', 'They push it into residential areas'],
      ['उसे बर्फ में जमा देती हैं', 'They freeze it into solid glaciers'],
    ],
    'अंतिम वाक्य में "absorb excess floodwater like giant sponges" दिया गया है।',
    'The passage says they absorb excess floodwater like giant sponges during monsoons.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nप्रश्न: "like giant sponges" वाक्यांश में कौन-सा अलंकार प्रयुक्त हुआ है?',
    'Read the passage carefully and answer the question:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nQuestion: Which figure of speech is used in the phrase "like giant sponges"?',
    ['उपमा अलंकार (Simile)', 'Simile'],
    [
      ['श्लेष अलंकार (Pun)', 'Pun'],
      ['मानवीकरण (Personification)', 'Personification'],
      ['अनुप्रास (Alliteration)', 'Alliteration'],
    ],
    'यहाँ "like" शब्द का प्रयोग कर आर्द्रभूमि की तुलना स्पंज से की गई है, अतः यह उपमा (Simile) है।',
    'A direct comparison using "like" or "as" ("like giant sponges") is a simile.',
    'MEDIUM',
    { grammarRuleHi: 'Simile में "like" या "as" शब्दों से स्पष्ट तुलना की जाती है।' }
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nप्रश्न: लोग प्रायः आर्द्रभूमियों को गलत तरीके से क्या समझ लेते हैं?',
    'Read the passage carefully and answer the question:\n"Often dismissed as barren swamps, wetlands act as nature’s kidneys by filtering pollutants and heavy metals from water. During monsoons, they absorb excess floodwater like giant sponges."\nQuestion: How are wetlands often wrongly dismissed according to the passage?',
    ['बंजर दलदल के रूप में', 'As barren swamps'],
    [
      ['उपजाऊ गेहूँ के खेत के रूप में', 'As fertile wheat fields'],
      ['बर्फीली पर्वत चोटियों के रूप में', 'As snowy mountain peaks'],
      ['ऊँचे पठारों के रूप में', 'As dry rocky plateaus'],
    ],
    'गद्यांश के प्रारंभ में "Often dismissed as barren swamps" लिखा है।',
    'The opening phrase notes that they are often dismissed as barren swamps.',
    'EASY'
  ),

  // Passage 17: Ancient Indian Astronomy / Aryabhata
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nप्रश्न: आर्यभट्ट के अनुसार तारों की पश्चिम की ओर प्रतीत होने वाली गति का वास्तविक कारण क्या है?',
    'Read the passage carefully and answer the question:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nQuestion: According to Aryabhata, what causes the apparent westward motion of stars?',
    ['पृथ्वी का अपनी धुरी पर घूर्णन', 'The rotation of the Earth on its own axis'],
    [
      ['तारों का सूर्य के चारों ओर तेज दौड़ना', 'Stars racing rapidly around the Sun'],
      ['समुद्री ज्वार का गुरुत्वाकर्षण', 'Ocean tides pulling the sky'],
      ['चंद्रमा का पृथ्वी से टकराना', 'The Moon colliding with the Earth'],
    ],
    'पहले वाक्य के अनुसार पृथ्वी के अपनी धुरी पर घूमने से तारे पश्चिम की ओर जाते प्रतीत होते हैं।',
    'The passage states Aryabhata proposed that Earth’s rotation on its axis causes the apparent motion of stars.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nप्रश्न: आर्यभट्ट ने सूर्य और चंद्र ग्रहण की वैज्ञानिक व्याख्या किस रूप में की?',
    'Read the passage carefully and answer the question:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nQuestion: How did Aryabhata scientifically explain eclipses?',
    ['खगोलीय पिंडों द्वारा डाली गई छाया के रूप में', 'As shadows cast by celestial bodies'],
    [
      ['बादलों के आपस में टकराने के रूप में', 'As collisions between storm clouds'],
      ['वायुमंडलीय धूल के घने होने के रूप में', 'As thickening atmospheric dust'],
      ['पृथ्वी के चुंबकीय ध्रुव बदलने के रूप में', 'As shifts in magnetic poles'],
    ],
    'दूसरे वाक्य में ग्रहणों को खगोलीय पिंडों की छाया (shadows cast by celestial bodies) बताया गया है।',
    'He explained lunar and solar eclipses as shadows cast by celestial bodies.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nप्रश्न: गद्यांश में प्रयुक्त "apparent" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nQuestion: What does "apparent" mean in "apparent westward motion"?',
    ['प्रतीत होने वाला (जो वास्तव में वैसा न हो)', 'Seeming to be real or visible, though not necessarily actual'],
    [
      ['अदृश्य और पूर्णतः छिपा हुआ', 'Invisible and completely hidden'],
      ['असंभव और काल्पनिक', 'Impossible and imaginary'],
      ['स्थायी रूप से रुका हुआ', 'Permanently motionless'],
    ],
    'यहाँ "apparent" का अर्थ "दिखाई पड़ने वाला / आभासी" है, क्योंकि वास्तव में पृथ्वी घूमती है, तारे नहीं।',
    'Here "apparent" means seeming or appearing to move from an observer’s perspective.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nप्रश्न: आर्यभट्ट का कार्य किस शताब्दी ईस्वी का है?',
    'Read the passage carefully and answer the question:\n"In the fifth century CE, mathematician-astronomer Aryabhata proposed that the Earth rotates on its own axis, causing the apparent westward motion of stars. He also explained lunar and solar eclipses scientifically as shadows cast by celestial bodies."\nQuestion: To which century does the passage date Aryabhata’s proposal?',
    ['पाँचवीं शताब्दी ईस्वी', 'Fifth century CE'],
    [
      ['तीसरी शताब्दी ईसा पूर्व', 'Third century BCE'],
      ['दसवीं शताब्दी ईस्वी', 'Tenth century CE'],
      ['पंद्रहवीं शताब्दी ईस्वी', 'Fifteenth century CE'],
    ],
    'गद्यांश के प्रारंभ में "In the fifth century CE" लिखा है।',
    'The passage opens with "In the fifth century CE."',
    'EASY'
  ),

  // Passage 18: Public Transport & Air Quality
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nप्रश्न: इलेक्ट्रिक बसों और मेट्रो रेल के विस्तार से शहरों को कौन-से दो प्रमुख लाभ ("dual dividend") मिलते हैं?',
    'Read the passage carefully and answer the question:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nQuestion: What is the "dual dividend" offered to cities by electric buses and metro corridors?',
    ['यातायात जाम में कमी और वाहन उत्सर्जन में भारी गिरावट', 'Fewer traffic bottlenecks and sharply lower tailpipe emissions'],
    [
      ['अधिक टोल प्लाजा और महँगा ईंधन', 'More toll plazas and costlier fuel'],
      ['निजी कारों की बिक्री में भारी वृद्धि', 'Higher private car sales'],
      ['राजमार्गों की चौड़ाई का कम होना', 'Narrower rural highways'],
    ],
    'कोलन (:) के बाद दोनों लाभ स्पष्ट दिए गए हैं: fewer traffic bottlenecks और sharply lower tailpipe emissions।',
    'Following the colon, the dual dividend is stated as fewer traffic bottlenecks and sharply lower tailpipe emissions.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nप्रश्न: किफायती सार्वजनिक परिवहन से यात्रियों (commuters) को क्या आर्थिक लाभ होता है?',
    'Read the passage carefully and answer the question:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nQuestion: How does affordable public transit help commuters financially?',
    ['यह उनके मासिक ईंधन खर्च में बड़ी बचत करता है', 'It saves them substantial monthly fuel expenses'],
    [
      ['यह उनकी मासिक आय दोगुनी कर देता है', 'It doubles their monthly salary'],
      ['यह उन्हें मुफ्त कार प्रदान करता है', 'It gives them free private cars'],
      ['यह उनके कार्यालय के घंटे कम करता है', 'It shortens their office working hours'],
    ],
    'अंतिम वाक्य में लिखा है: "saves commuters substantial monthly fuel expenses."',
    'The second sentence states that affordable public transit saves commuters substantial monthly fuel expenses.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nप्रश्न: गद्यांश में "bottlenecks" शब्द का संदर्भगत अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nQuestion: What does "bottlenecks" mean in the context of traffic?',
    ['संकरा या जाम वाला स्थान जहाँ गति रुकती है', 'Points of congestion that slow down movement'],
    [
      ['काँच की बोतलों का निर्माण', 'Manufacturing of glass bottles'],
      ['सड़कों पर तेज़ गति की सीमा', 'High-speed express lanes'],
      ['वाहन पार्किंग के विशाल मैदान', 'Spacious parking lots'],
    ],
    '"Traffic bottlenecks" से आशय ऐसे संकरे या भीड़भाड़ वाले बिंदुओं से है जहाँ यातायात अवरुद्ध हो जाता है।',
    'In traffic contexts, a "bottleneck" refers to a narrow or congested section that impedes smooth flow.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nप्रश्न: गद्यांश में प्रयुक्त "substantial" शब्द का निकटतम पर्याय क्या है?',
    'Read the passage carefully and answer the question:\n"Expanding electric bus fleets and metro rail corridors offers cities a dual dividend: fewer traffic bottlenecks and sharply lower tailpipe emissions. Affordable public transit also saves commuters substantial monthly fuel expenses."\nQuestion: Which word is closest in meaning to "substantial" as used in the passage?',
    ['काफी अधिक / महत्वपूर्ण (Considerable)', 'Considerable'],
    [
      ['नगण्य (Negligible)', 'Negligible'],
      ['अस्थायी (Temporary)', 'Temporary'],
      ['संदिग्ध (Doubtful)', 'Doubtful'],
    ],
    '"Substantial" का अर्थ मात्रा या महत्व में काफी बड़ा (considerable) होता है।',
    '"Substantial" means of considerable importance, size, or worth.',
    'MEDIUM'
  ),

  // Passage 19: Formative Assessment
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nप्रश्न: रचनात्मक आकलन (formative assessment) कब किया जाता है?',
    'Read the passage carefully and answer the question:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nQuestion: When does formative assessment take place according to the passage?',
    ['शिक्षण के दौरान निरंतर रूप से', 'Continuously during instruction'],
    [
      ['केवल शैक्षणिक सत्र के अंतिम दिन', 'Only on the final day of the academic term'],
      ['ग्रीष्मावकाश समाप्त होने के बाद', 'After summer vacations conclude'],
      ['केवल प्रवेश परीक्षा के समय', 'Strictly during college admissions'],
    ],
    'पहले वाक्य में लिखा है: "formative assessment takes place continuously during instruction."',
    'The passage explicitly says formative assessment takes place continuously during instruction.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nप्रश्न: लघु प्रश्नोत्तरी, एग्जिट स्लिप और सहपाठी प्रतिक्रिया शिक्षक की किस प्रकार सहायता करते हैं?',
    'Read the passage carefully and answer the question:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nQuestion: How do short quizzes, exit slips, and peer feedback assist teachers?',
    ['वे समय रहते सीखने की कमियों की पहचान कराते हैं ताकि पुनः शिक्षण हो सके', 'They alert teachers to learning gaps while there is time to reteach'],
    [
      ['वे छात्रों को अंतिम रैंक देने का एकमात्र आधार हैं', 'They serve only to assign final board rankings'],
      ['वे शिक्षकों का शिक्षण समय पूरी तरह समाप्त करते हैं', 'They eliminate the need for classroom teaching'],
      ['वे माता-पिता को केवल वार्षिक परिणाम भेजते हैं', 'They produce annual report cards only'],
    ],
    'दूसरे वाक्य में बताया गया है कि ये साधन शिक्षक को अधिगम अंतराल (learning gaps) की समय पर सूचना देते हैं ताकि पुनः पढ़ाया जा सके।',
    'They alert teachers to learning gaps early enough to reteach concepts.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nप्रश्न: गद्यांश में वर्णित अंतिम परीक्षाओं (final exams) की मुख्य सीमा क्या बताई गई है?',
    'Read the passage carefully and answer the question:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nQuestion: What limitation of high-stakes final exams is implied in the passage?',
    ['वे सत्र के अंत में केवल छात्रों को रैंक प्रदान करती हैं', 'They merely rank students at the end of a term'],
    [
      ['वे प्रतिदिन कक्षा में आयोजित की जाती हैं', 'They are conducted every single morning'],
      ['वे छात्रों को परस्पर प्रतिक्रिया देना सिखाती हैं', 'They rely heavily on peer feedback'],
      ['वे शिक्षकों को तुरंत पुनः पढ़ाने का समय देती हैं', 'They leave ample time for immediate reteaching'],
    ],
    'गद्यांश में "that merely rank students at the end of a term" कहकर अंतिम परीक्षाओं की सीमा बताई गई है।',
    'The passage contrasts formative tools with final exams that "merely rank students at the end of a term."',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nप्रश्न: "reteach" शब्द में उपसर्ग (prefix) "re-" का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Unlike high-stakes final exams that merely rank students at the end of a term, formative assessment takes place continuously during instruction. Short quizzes, exit slips, and peer feedback alert teachers to learning gaps while there is still time to reteach."\nQuestion: What does the prefix "re-" signify in the word "reteach"?',
    ['पुनः / दोबारा (Again)', 'Again or anew'],
    [
      ['विरुद्ध (Against)', 'Against'],
      ['बिना (Without)', 'Without'],
      ['नीचे (Under)', 'Under'],
    ],
    'अंग्रेजी में "re-" उपसर्ग का अर्थ "फिर से / दोबारा" होता है, जैसे reteach (दोबारा पढ़ाना), rewrite (दोबारा लिखना)।',
    'The prefix "re-" means "again" or "anew," so "reteach" means to teach again.',
    'EASY',
    { grammarRuleHi: 'Prefix "re-" का अर्थ "again" या "back" होता है।' }
  ),

  // Passage 20: Coral Reefs
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nप्रश्न: प्रवाल भित्तियाँ (coral reefs) समुद्र तल के कितने भाग पर फैली हैं?',
    'Read the passage carefully and answer the question:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nQuestion: What fraction of the ocean floor do coral reefs occupy?',
    ['एक प्रतिशत से भी कम', 'Less than one percent'],
    [
      ['लगभग पच्चीस प्रतिशत', 'Roughly twenty-five percent'],
      ['पूरा पचास प्रतिशत', 'Exactly fifty percent'],
      ['लगभग दस प्रतिशत', 'Nearly ten percent'],
    ],
    'पहले वाक्य में लिखा है: "occupy less than one percent of the ocean floor" (समुद्र तल का 1% से कम, जबकि वे 25% समुद्री प्रजातियों को आश्रय देती हैं)।',
    'The passage states they occupy less than one percent of the ocean floor (while supporting a quarter of marine species).',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nप्रश्न: प्रवाल विरंजन (coral bleaching) का मुख्य कारण क्या बताया गया है?',
    'Read the passage carefully and answer the question:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nQuestion: What causes coral bleaching according to the passage?',
    ['समुद्र के तापमान में वृद्धि', 'Rising sea temperatures'],
    [
      ['समुद्र तल में भूकंप', 'Underwater earthquakes'],
      ['अत्यधिक वर्षा का मीठा जल', 'Freshwater from heavy rain'],
      ['समुद्री जल का जम जाना', 'Freezing of ocean currents'],
    ],
    'दूसरे वाक्य में "Rising sea temperatures cause coral bleaching" स्पष्ट लिखा है।',
    'The passage states that rising sea temperatures cause coral bleaching.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nप्रश्न: प्रवाल विरंजन के दौरान भित्तियों से क्या छिन जाता है?',
    'Read the passage carefully and answer the question:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nQuestion: What are coral reefs stripped of during bleaching?',
    ['रंग और आवश्यक शैवाल दोनों', 'Both color and essential algae'],
    [
      ['केवल कैल्शियम और लवण', 'Only salt and sand'],
      ['गहरे समुद्र की चट्टानें', 'Deep seabed rocks'],
      ['ज्वालामुखीय खनिज', 'Volcanic minerals'],
    ],
    'अंतिम पंक्ति में "stripping reefs of both color and essential algae" लिखा है।',
    'Coral bleaching strips reefs of both color and essential algae.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nप्रश्न: पहला वाक्य किस विरोधाभासी तथ्य को उजागर करता है?',
    'Read the passage carefully and answer the question:\n"Although coral reefs occupy less than one percent of the ocean floor, they support roughly a quarter of all marine species. Rising sea temperatures cause coral bleaching, stripping reefs of both color and essential algae."\nQuestion: What striking contrast is highlighted in the first sentence?',
    ['बहुत कम क्षेत्रफल होने के बावजूद वे अत्यधिक समुद्री जैव विविधता को पोषित करती हैं', 'Despite covering a tiny area, they support a massive share of marine life'],
    [
      ['वे गहरे महासागर में सबसे ठंडी जगहें हैं', 'They are the coldest zones in deep oceans'],
      ['वे किसी भी मछली को भोजन नहीं देतीं', 'They provide no food to marine animals'],
      ['वे केवल नदियों के मीठे पानी में उगती हैं', 'They grow exclusively in freshwater rivers'],
    ],
    '"Although" से जुड़ा वाक्य क्षेत्र की लघुता (<1%) और जैव विविधता की विशालता (~25%) के बीच के विरोधाभास को दिखाता है।',
    'The "Although" clause contrasts their tiny area (<1%) with their huge ecological role (~25% of marine species).',
    'HARD'
  ),

  // Passage 21: Critical Thinking & News
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nप्रश्न: वायरल सुर्खियों के युग में मीडिया साक्षरता नागरिकों को क्या सिखाती है?',
    'Read the passage carefully and answer the question:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nQuestion: What does media literacy teach citizens in an age of viral headlines?',
    ['अपुष्ट दावों को साझा करने से पहले रुककर विचार करना', 'To pause before sharing unverified claims'],
    [
      ['हर सनसनीखेज पोस्ट को तुरंत फॉरवर्ड करना', 'To forward sensational posts immediately'],
      ['समाचार पत्रों को पढ़ना पूरी तरह बंद करना', 'To stop reading newspapers altogether'],
      ['केवल शीर्षक पढ़कर निष्कर्ष निकालना', 'To judge articles solely by their headlines'],
    ],
    'पहले वाक्य में कहा गया है कि मीडिया साक्षरता अपुष्ट दावों को साझा करने से पहले रुकने (pause before sharing) की सीख देती है।',
    'The first sentence states that media literacy teaches citizens to pause before sharing unverified claims.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nप्रश्न: गलत सूचना (misinformation) के प्रसार को रोकने के लिए किन तीन बातों की जाँच करनी चाहिए?',
    'Read the passage carefully and answer the question:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nQuestion: Which three items should be checked to prevent misinformation?',
    ['मूल स्रोत, प्रकाशन तिथि और सहायक साक्ष्य', 'Original source, publication date, and supporting evidence'],
    [
      ['लाइक्स की संख्या, फ़ॉन्ट का आकार और रंग', 'Number of likes, font size, and color'],
      ['लेखक की आयु, शहर और पसंद', 'Author’s age, hometown, and hobbies'],
      ['केवल वीडियो की लंबाई, ध्वनि और संगीत', 'Video length, background music, and filters'],
    ],
    'दूसरे वाक्य में "original source, publication date, and supporting evidence" की जाँच का उल्लेख है।',
    'The second sentence lists checking the original source, publication date, and supporting evidence.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nप्रश्न: गद्यांश में "unverified" का विलोम शब्द क्या होगा?',
    'Read the passage carefully and answer the question:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nQuestion: What is the opposite of "unverified" as used in the passage?',
    ['सत्यापित या प्रमाणित (Confirmed / Authenticated)', 'Confirmed or authenticated'],
    [
      ['अस्पष्ट (Vague)', 'Vague'],
      ['संदिग्ध (Suspicious)', 'Suspicious'],
      ['अफवाहपूर्ण (Rumored)', 'Rumored'],
    ],
    '"Unverified" का अर्थ जिसकी पुष्टि न हुई हो; अतः इसका विलोम "Confirmed or authenticated" है।',
    '"Unverified" means not proven true; its antonym is "confirmed" or "authenticated."',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nप्रश्न: "misinformation" शब्द में उपसर्ग "mis-" क्या दर्शाता है?',
    'Read the passage carefully and answer the question:\n"In an age of viral headlines, media literacy teaches citizens to pause before sharing unverified claims. Checking the original source, publication date, and supporting evidence prevents the spread of misinformation."\nQuestion: What does the prefix "mis-" indicate in "misinformation"?',
    ['गलत या भ्रामक (Wrongly or inaccurately)', 'Wrongly or inaccurately'],
    [
      ['अत्यधिक तेज (Very fast)', 'Very fast'],
      ['संपूर्ण और सटीक (Complete and exact)', 'Complete and exact'],
      ['प्राचीन (Ancient)', 'Ancient'],
    ],
    'उपसर्ग "mis-" का अर्थ "गलत या अनुचित" होता है, जैसे misunderstand, misbehave, misinformation।',
    'The prefix "mis-" means wrong or bad, so "misinformation" refers to false or inaccurate information.',
    'EASY',
    { grammarRuleHi: 'Prefix "mis-" का प्रयोग "गलत/त्रुटिपूर्ण" भाव व्यक्त करने के लिए होता है।' }
  ),

  // Passage 22: Handloom Artisans
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nप्रश्न: भारतीय हथकरघा बुनकर अपने करघों को चलाने के लिए किस पर निर्भर हैं?',
    'Read the passage carefully and answer the question:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nQuestion: What powers the wooden looms used by handloom weavers?',
    ['केवल मानवीय कौशल और श्रम', 'Human skill alone'],
    [
      ['डीजल जनरेटर', 'Diesel generators'],
      ['उच्च वोल्टेज औद्योगिक मोटरें', 'High-voltage industrial motors'],
      ['कोयले से चलने वाले भाप इंजन', 'Coal-fired steam engines'],
    ],
    'पहले वाक्य में लिखा है: "wooden looms powered solely by human skill."',
    'The first sentence explicitly says the wooden looms are powered solely by human skill.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nप्रश्न: पावर-लूम वस्त्रों की तुलना में हथकरघा वस्त्रों का कार्बन फुटप्रिंट कम क्यों होता है?',
    'Read the passage carefully and answer the question:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nQuestion: Why do hand-woven textiles have a lower carbon footprint than power-loom textiles?',
    ['क्योंकि इन्हें बनाने में बहुत कम बिजली की आवश्यकता होती है', 'Because they require minimal electricity'],
    [
      ['क्योंकि इनमें कृत्रिम प्लास्टिक के धागे अधिक होते हैं', 'Because they use more synthetic plastic threads'],
      ['क्योंकि इन्हें केवल सर्दियों में बुना जाता है', 'Because they are woven only in winter'],
      ['क्योंकि इनमें किसी रंगाई की आवश्यकता नहीं होती', 'Because they never use natural dyes'],
    ],
    'दूसरे वाक्य के अनुसार हाथ से बुने कपड़े में न्यूनतम बिजली लगती है, जिससे कार्बन फुटप्रिंट कम रहता है।',
    'The second sentence states that hand-woven cloth requires minimal electricity, resulting in a low carbon footprint.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nप्रश्न: गद्यांश में "motifs" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nQuestion: What does "motifs" refer to in this passage?',
    ['वस्त्रों पर बनाए जाने वाले पारंपरिक डिज़ाइन या रूपांकन', 'Decorative patterns or traditional designs'],
    [
      ['लकड़ी के भारी उपकरण', 'Heavy wooden tools'],
      ['कपड़ा बेचने के बाजार', 'Wholesale textile markets'],
      ['बिजली के मीटर', 'Electric power meters'],
    ],
    'कला एवं वस्त्र के संदर्भ में "motif" का अर्थ बार-बार दोहराया जाने वाला सजावटी डिज़ाइन या आकृति है।',
    'In art and textiles, "motifs" are distinctive decorative designs or recurring patterns.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nप्रश्न: गद्यांश हथकरघा उद्योग के किन दो गुणों की सराहना करता है?',
    'Read the passage carefully and answer the question:\n"Indian handloom weavers preserve centuries-old motifs using wooden looms powered solely by human skill. Because hand-woven cloth requires minimal electricity, it carries a remarkably low carbon footprint compared to power-loom textiles."\nQuestion: Which two qualities of handloom weaving are praised in the passage?',
    ['सांस्कृतिक विरासत का संरक्षण और पर्यावरण-अनुकूल उत्पादन', 'Cultural preservation and environmental sustainability'],
    [
      ['स्वचालन और बड़े पैमाने पर कारखाना उत्पादन', 'Full automation and factory mass production'],
      ['उच्च बिजली खपत और तीव्र गति', 'High electricity consumption and rapid speed'],
      ['विदेशी मशीनों पर निर्भरता और सस्ता प्लास्टिक', 'Reliance on imported machines and plastics'],
    ],
    'सदियों पुराने डिज़ाइन बचाना सांस्कृतिक संरक्षण है और कम कार्बन फुटप्रिंट पर्यावरण-अनुकूलता का प्रमाण है।',
    'Preserving centuries-old motifs reflects cultural heritage, while a low carbon footprint shows sustainability.',
    'HARD'
  ),

  // Passage 23: Posture & Ergonomics
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nप्रश्न: घंटों लैपटॉप पर झुककर काम करने से शरीर के किन अंगों पर दबाव पड़ता है?',
    'Read the passage carefully and answer the question:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nQuestion: Which body parts are affected by hunching over a laptop for hours?',
    ['गर्दन की मांसपेशियाँ और निचली रीढ़ की हड्डी', 'Neck muscles and the lower spine'],
    [
      ['घुटने और टखने', 'Knees and ankles'],
      ['हृदय और फेफड़े', 'Heart and lungs'],
      ['कान और दाँत', 'Ears and teeth'],
    ],
    'पहले वाक्य के अनुसार लैपटॉप पर झुकने से गर्दन की मांसपेशियों पर तनाव पड़ता है और निचली रीढ़ दबती है।',
    'The first sentence states that hunching strains neck muscles and compresses the lower spine.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nप्रश्न: पीठ दर्द से बचने के लिए स्क्रीन को किस ऊँचाई पर रखना चाहिए?',
    'Read the passage carefully and answer the question:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nQuestion: At what height should the screen be positioned to help prevent backaches?',
    ['आँखों के स्तर (Eye level) पर', 'At eye level'],
    [
      ['घुटनों के स्तर पर', 'At knee level'],
      ['सिर से काफी ऊपर', 'High above the head'],
      ['कमर के ठीक नीचे', 'Below waist height'],
    ],
    'दूसरे वाक्य में "Positioning the screen at eye level" की सलाह दी गई है।',
    'The passage recommends positioning the screen at eye level.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nप्रश्न: हर कितनी देर में खड़े होकर स्ट्रेच करने की सलाह दी गई है?',
    'Read the passage carefully and answer the question:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nQuestion: How often does the passage advise standing up to stretch?',
    ['प्रत्येक तीस मिनट में', 'Every thirty minutes'],
    [
      ['प्रत्येक चार घंटे में', 'Every four hours'],
      ['दिन में केवल एक बार', 'Only once a day'],
      ['सप्ताह में दो बार', 'Twice a week'],
    ],
    'गद्यांश में "every thirty minutes" लिखा है।',
    'The passage advises standing up to stretch every thirty minutes.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nप्रश्न: गद्यांश में "chronic" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Hunching over a laptop for hours strains neck muscles and compresses the lower spine. Positioning the screen at eye level and standing up to stretch every thirty minutes can prevent chronic backaches."\nQuestion: What does "chronic" mean in "chronic backaches"?',
    ['लंबे समय तक बना रहने वाला या पुराना', 'Persisting for a long time or constantly recurring'],
    [
      ['केवल एक सेकंड का', 'Lasting only a single second'],
      ['हँसी-मजाक से जुड़ा', 'Humorous and lighthearted'],
      ['अत्यंत सुखद', 'Pleasant and soothing'],
    ],
    'चिकित्सा में "chronic" का अर्थ दीर्घकालिक या बार-बार होने वाला रोग/दर्द होता है (इसका विलोम "acute" है)।',
    'In health contexts, "chronic" refers to a condition persisting over a long period or recurring frequently.',
    'MEDIUM'
  ),

  // Passage 24: Millets (Nutri-cereals)
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nप्रश्न: चावल और गेहूँ की तुलना में मोटे अनाज (बाजरा, ज्वार, रागी) किस विशेषता के कारण सूखे क्षेत्रों में उग सकते हैं?',
    'Read the passage carefully and answer the question:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nQuestion: Why can millets thrive in dry soils compared to rice or wheat?',
    ['क्योंकि इन्हें बहुत कम पानी की आवश्यकता होती है', 'Because they require far less water'],
    [
      ['क्योंकि ये केवल गहरे पानी के नीचे उगते हैं', 'Because they grow underwater'],
      ['क्योंकि इनमें रासायनिक खाद की भारी जरूरत होती है', 'Because they require heavy chemical sprays'],
      ['क्योंकि ये बिना मिट्टी के हवा में उगते हैं', 'Because they grow without any soil'],
    ],
    'पहले वाक्य में कहा गया है कि बाजरा, ज्वार और रागी चावल या गेहूँ की तुलना में बहुत कम पानी से सूखी मिट्टी में पनपते हैं।',
    'The first sentence states that millets thrive in dry soils with far less water than rice or wheat.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nप्रश्न: गद्यांश में मोटे अनाजों में किन तीन पोषक तत्वों की प्रचुरता बताई गई है?',
    'Read the passage carefully and answer the question:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nQuestion: Which three nutrients are millets rich in according to the passage?',
    ['आहार रेशा (फाइबर), आयरन और कैल्शियम', 'Dietary fiber, iron, and calcium'],
    [
      ['विटामिन सी, सोडियम और आयोडीन', 'Vitamin C, sodium, and iodine'],
      ['केवल वसा और शर्करा', 'Saturated fat and refined sugar'],
      ['क्लोरीन और पारा', 'Chlorine and mercury'],
    ],
    'दूसरे वाक्य में "dietary fiber, iron, and calcium" स्पष्ट रूप से उल्लिखित है।',
    'The second sentence lists dietary fiber, iron, and calcium.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nप्रश्न: गद्यांश में प्रयुक्त "bolster" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nQuestion: What does "bolster" mean in the final sentence?',
    ['मजबूत करना या सहारा देना', 'Strengthen or support'],
    [
      ['कमजोर करना या घटाना', 'Weaken or undermine'],
      ['पूरी तरह समाप्त करना', 'Eliminate entirely'],
      ['अनदेखा करना', 'Ignore completely'],
    ],
    '"Bolster" का अर्थ किसी व्यवस्था या स्थिति को सहारा देकर और अधिक सुदृढ़ करना होता है।',
    '"Bolster" means to strengthen, reinforce, or support.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nप्रश्न: इन अनाजों को "hardy grains" क्यों कहा गया है?',
    'Read the passage carefully and answer the question:\n"Millets such as bajra, jowar, and ragi thrive in dry soils with far less water than rice or wheat. Rich in dietary fiber, iron, and calcium, these hardy grains bolster both farmer resilience and nutritional security."\nQuestion: Why are millets described as "hardy grains"?',
    ['क्योंकि वे शुष्क मिट्टी और कम पानी जैसी कठिन परिस्थितियों को सहन कर लेते हैं', 'Because they withstand tough, dry growing conditions'],
    [
      ['क्योंकि वे खाने में पत्थर जैसे कठोर होते हैं', 'Because they are impossible to cook or chew'],
      ['क्योंकि वे केवल हिमालय की बर्फ में उगते हैं', 'Because they grow only in Himalayan snow'],
      ['क्योंकि उन्हें केवल काँच के घरों में उगाया जाता है', 'Because they require climate-controlled greenhouses'],
    ],
    'पौधों के लिए "hardy" का अर्थ प्रतिकूल जलवायु और सूखे में भी जीवित रहने की क्षमता होना है।',
    '"Hardy" means robust and capable of surviving harsh, dry conditions.',
    'MEDIUM'
  ),

  // Passage 25: Inclusive Education
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nप्रश्न: समावेशी शिक्षा (inclusive education) क्या करती है?',
    'Read the passage carefully and answer the question:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nQuestion: What does inclusive education do according to the passage?',
    ['विविध आवश्यकताओं वाले बच्चों को अलग-थलग करने के बजाय पास के सामान्य विद्यालयों में स्वागत करती है', 'Welcomes children with diverse needs into neighborhood schools rather than segregating them'],
    [
      ['केवल उच्च अंक वाले छात्रों को प्रवेश देती है', 'Admits only top-scoring students'],
      ['दिव्यांग बच्चों को घर तक सीमित रखती है', 'Confines children with disabilities at home'],
      ['सभी विद्यालयों से खेल गतिविधियाँ हटाती है', 'Removes sports from all schools'],
    ],
    'पहले वाक्य में समावेशी शिक्षा को बच्चों को अलग करने (segregating) के बजाय पड़ोस के विद्यालयों में शामिल करने वाला बताया गया है।',
    'The first sentence states that it welcomes children with diverse needs into neighborhood schools instead of segregating them.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nप्रश्न: प्रत्येक बच्चे की सम्मानजनक भागीदारी सुनिश्चित करने के लिए कौन-से तीन उपाय बताए गए हैं?',
    'Read the passage carefully and answer the question:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nQuestion: Which three accommodations are mentioned to ensure participation with dignity?',
    ['व्हीलचेयर रैंप, ऑडियो पुस्तकें और लचीली शिक्षण विधियाँ', 'Wheelchair ramps, audio books, and flexible teaching methods'],
    [
      ['कठोर समय-सारणी, लंबी परीक्षाएँ और दंड', 'Strict timetables, long exams, and penalties'],
      ['अलग इमारतें, मौन नियम और एकल व्याख्यान', 'Separate buildings, silence rules, and monologues'],
      ['महँगे टैबलेट, अतिरिक्त शुल्क और वर्दी', 'Costly tablets, extra fees, and uniforms'],
    ],
    'दूसरे वाक्य में "Wheelchair ramps, audio books, and flexible teaching methods" का उल्लेख है।',
    'The second sentence lists wheelchair ramps, audio books, and flexible teaching methods.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nप्रश्न: गद्यांश में "segregating" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nQuestion: What does "segregating" mean in this context?',
    ['मुख्य धारा से अलग-थलग कर देना', 'Setting apart or isolating from the main group'],
    [
      ['समान रूप से एक साथ जोड़ना', 'Integrating equally together'],
      ['पुरस्कार देकर सम्मानित करना', 'Honoring with awards'],
      ['समान पाठ्यक्रम पढ़ाना', 'Teaching a shared curriculum'],
    ],
    '"Segregate" का अर्थ किसी समूह को अलग रखना या पृथक करना होता है।',
    '"Segregating" means separating or isolating a group from others.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nप्रश्न: इस व्यवस्था का अंतिम नैतिक लक्ष्य क्या है?',
    'Read the passage carefully and answer the question:\n"Inclusive education welcomes children with diverse physical and learning needs into neighborhood schools rather than segregating them. Wheelchair ramps, audio books, and flexible teaching methods ensure every child participates with dignity."\nQuestion: What is the ultimate value upheld by these inclusive measures?',
    ['प्रत्येक बच्चे की गरिमा और समान भागीदारी', 'Every child’s dignity and equal participation'],
    [
      ['विद्यालयों की इमारत का व्यावसायिक लाभ', 'Commercial profit for school owners'],
      ['छात्रों के बीच कटु प्रतिस्पर्धा', 'Fierce competition among pupils'],
      ['शिक्षण कार्य का पूर्ण मशीनीकरण', 'Total mechanization of classrooms'],
    ],
    'अंतिम शब्द "participates with dignity" स्पष्ट करते हैं कि हर बच्चे की गरिमा के साथ भागीदारी ही मूल लक्ष्य है।',
    'The closing phrase "ensure every child participates with dignity" highlights equal participation and respect.',
    'MEDIUM'
  ),

  // Passage 26: Soil Erosion & Terracing
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nप्रश्न: तेज बारिश के समय खड़ी पहाड़ी ढलानों पर कौन-सी समस्या उत्पन्न होती है?',
    'Read the passage carefully and answer the question:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nQuestion: What problem occurs on steep mountain slopes during heavy rains?',
    ['उपजाऊ ऊपरी मिट्टी का तेज़ी से बह जाना (मृदा अपरदन)', 'Rapid loss of fertile topsoil'],
    [
      ['मिट्टी में खनिजों का अपने आप दुगना होना', 'Automatic doubling of soil minerals'],
      ['पहाड़ों का समतल मैदान बन जाना', 'Mountains turning into flat deserts overnight'],
      ['वर्षा जल का ऊपर की ओर बहना', 'Rainwater flowing uphill'],
    ],
    'पहले वाक्य के अनुसार भारी वर्षा से खुली पहाड़ी ढलानों की उपजाऊ ऊपरी मिट्टी (topsoil) तेज़ी से बह जाती है।',
    'The first sentence states that steep slopes rapidly lose fertile topsoil during heavy rains.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nप्रश्न: किसान इस अपरदन को रोकने के लिए पहाड़ियों पर क्या बनाते हैं?',
    'Read the passage carefully and answer the question:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nQuestion: How do farmers counter erosion on hillsides?',
    ['पहाड़ियों को काटकर सीढ़ीदार खेत (terraced steps) बनाकर', 'By carving terraced steps into hillsides'],
    [
      ['सभी पेड़ों को जड़ से काटकर', 'By clearing all hillside trees'],
      ['प्लास्टिक की चादरें बिछाकर', 'By covering slopes with plastic sheets'],
      ['कंक्रीट की नालियाँ बनाकर', 'By building steep concrete chutes'],
    ],
    'दूसरे वाक्य में "carving terraced steps into hillsides" का उल्लेख है।',
    'Farmers carve terraced steps into hillsides to counter soil erosion.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nप्रश्न: सीढ़ीदार खेती से पानी और नमी पर क्या दो प्रभाव पड़ते हैं?',
    'Read the passage carefully and answer the question:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nQuestion: What two effects do terraced steps have on water?',
    ['पानी के बहाव को धीमा करना और बहुमूल्य नमी को रोकना', 'Slowing water flow and trapping precious moisture'],
    [
      ['पानी के बहाव को तेज़ करना और मिट्टी सुखाना', 'Speeding runoff and drying the soil'],
      ['पानी को पूरी तरह भाप बनाना', 'Evaporating water instantly'],
      ['नदियों का मार्ग मोड़ना', 'Diverting distant rivers'],
    ],
    'अंतिम वाक्यांश में "slowing water flow and trapping precious moisture" दिया गया है।',
    'Terraces slow water flow and trap precious moisture.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nप्रश्न: गद्यांश में प्रयुक्त "bare" (bare earth) शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Steep mountain slopes lose fertile topsoil rapidly when heavy rains wash down bare earth. Farmers counter this erosion by carving terraced steps into hillsides, slowing water flow and trapping precious moisture."\nQuestion: What does "bare" mean in the phrase "bare earth"?',
    ['वनस्पति या आवरण से रहित (अनावृत)', 'Uncovered or without vegetation'],
    [
      ['बर्फ से ढकी हुई', 'Covered in thick snow'],
      ['घने जंगलों से भरी', 'Dense with tall forests'],
      ['समतल और पक्की', 'Paved and flat'],
    ],
    'यहाँ "bare earth" का अर्थ बिना घास या पौधों के आवरण वाली खुली मिट्टी से है।',
    '"Bare earth" refers to exposed soil lacking protective grass or vegetation cover.',
    'MEDIUM'
  ),

  // Passage 27: Power of Silence / Reflection in Learning
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nप्रश्न: प्रश्न पूछने के बाद शिक्षक को कितने सेकंड रुकने की सलाह दी गई है?',
    'Read the passage carefully and answer the question:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nQuestion: How long should a teacher wait after asking a question according to the research?',
    ['तीन से पाँच सेकंड', 'Three to five seconds'],
    [
      ['पंद्रह से बीस मिनट', 'Fifteen to twenty minutes'],
      ['ठीक एक सेकंड से कम', 'Less than half a second'],
      ['पूरी कक्षा समाप्त होने तक', 'Until the end of the period'],
    ],
    'पहले वाक्य में स्पष्ट है: "waiting just three to five seconds transforms discussion."',
    'The passage specifically cites waiting three to five seconds.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nप्रश्न: संक्षिप्त विराम संकोची छात्रों (hesitant students) की कैसे मदद करता है?',
    'Read the passage carefully and answer the question:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nQuestion: How does the brief pause help hesitant students?',
    ['उन्हें अपने विचारों को व्यवस्थित करने का अवसर देता है', 'It lets them organize their thoughts'],
    [
      ['उन्हें कक्षा से बाहर जाने देता है', 'It allows them to leave early'],
      ['उन्हें उत्तर न देने के लिए प्रेरित करता है', 'It encourages them to stay silent forever'],
      ['उन्हें पाठ्यपुस्तक बंद करने को कहता है', 'It forces them to close textbooks'],
    ],
    'दूसरे वाक्य के अनुसार यह विराम संकोची छात्रों को अपने विचार व्यवस्थित करने (organize their thoughts) में मदद करता है।',
    'The second sentence states that the pause lets hesitant students organize their thoughts.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nप्रश्न: प्रतीक्षा समय देने से छात्रों के उत्तरों की गुणवत्ता में क्या परिवर्तन आता है?',
    'Read the passage carefully and answer the question:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nQuestion: How does wait time change the quality of students’ answers?',
    ['उत्तर अधिक समृद्ध और तर्कसंगत होते हैं', 'Answers become richer and more reasoned'],
    [
      ['उत्तर छोटे और केवल हाँ/ना में होते हैं', 'Answers become one-word guesses'],
      ['उत्तर और अधिक अस्पष्ट हो जाते हैं', 'Answers become more confused'],
      ['छात्र प्रश्न ही भूल जाते हैं', 'Students forget the question entirely'],
    ],
    'अंतिम शब्दों में लिखा है: "leads to richer, more reasoned answers."',
    'The passage concludes that wait time leads to richer, more reasoned answers.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nप्रश्न: गद्यांश में "hesitant" शब्द का विलोम क्या होगा?',
    'Read the passage carefully and answer the question:\n"Teachers often rush to fill classroom silence after asking a question, yet research shows that waiting just three to five seconds transforms discussion. That brief pause lets hesitant students organize their thoughts and leads to richer, more reasoned answers."\nQuestion: Which word is opposite in meaning to "hesitant"?',
    ['आत्मविश्वासी (Confident)', 'Confident'],
    [
      ['संकोची (Shy)', 'Shy'],
      ['अनिश्चित (Uncertain)', 'Uncertain'],
      ['डरपोक (Timid)', 'Timid'],
    ],
    '"Hesitant" का अर्थ झिझकने वाला या अनिश्चित होता है; इसका सटीक विलोम "Confident" (आत्मविश्वासी) है।',
    '"Hesitant" means tentative or unsure; its opposite is "confident."',
    'EASY'
  ),

  // Passage 28: Vaccination & Herd Protection
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nप्रश्न: नियमित बाल टीकाकरण (immunization) टीका लगवाने वाले बच्चे के अलावा और किसे सुरक्षा देता है?',
    'Read the passage carefully and answer the question:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nQuestion: Besides the vaccinated child, whom does routine immunization protect?',
    ['उन संवेदनशील पड़ोसियों को जो चिकित्सा कारणों से टीका नहीं लगवा सकते', 'Vulnerable neighbors who cannot receive shots for medical reasons'],
    [
      ['केवल उन लोगों को जो यात्रा पर जाते हैं', 'Only international travelers'],
      ['केवल पालतू जानवरों को', 'Domestic pets exclusively'],
      ['केवल अस्पताल के कर्मचारियों को', 'Hospital administrators alone'],
    ],
    'पहले वाक्य में स्पष्ट लिखा है कि यह उन संवेदनशील लोगों की भी रक्षा करता है जो चिकित्सीय कारणों से टीका नहीं ले सकते।',
    'The first sentence states that immunization also protects vulnerable neighbors unable to get shots for medical reasons.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nप्रश्न: जब समुदाय के अधिकांश लोग प्रतिरक्षित (immune) हो जाते हैं, तो संक्रामक रोगों पर क्या असर होता है?',
    'Read the passage carefully and answer the question:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nQuestion: What happens to infectious outbreaks when most of a community is immune?',
    ['रोग के फैलने के रास्ते बंद हो जाते हैं', 'They lose pathways to spread'],
    [
      ['रोग और अधिक तेजी से फैलते हैं', 'They spread twice as rapidly'],
      ['अस्पतालों की संख्या घटानी पड़ती है', 'Disease severity increases everywhere'],
      ['टीके अपना प्रभाव खो देते हैं', 'Vaccines stop working immediately'],
    ],
    'दूसरे वाक्य के अनुसार संक्रामक प्रकोपों के फैलने के मार्ग (pathways to spread) समाप्त हो जाते हैं।',
    'The second sentence states that infectious outbreaks lose pathways to spread.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nप्रश्न: गद्यांश में "vulnerable" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nQuestion: What does "vulnerable" mean in this passage?',
    ['रोग या हानि के प्रति आसानी से संवेदनशील/असुरक्षित', 'Easily susceptible to harm or illness'],
    [
      ['पूर्णतः अजेय और सुरक्षित', 'Completely invincible'],
      ['शारीरिक रूप से अत्यंत बलवान', 'Exceptionally strong'],
      ['चिकित्सा विज्ञान से अनजान', 'Unaware of medicine'],
    ],
    '"Vulnerable" का अर्थ कमजोर या किसी खतरे/बीमारी की चपेट में आसानी से आने वाला व्यक्ति होता है।',
    '"Vulnerable" means exposed to the possibility of being harmed or infected easily.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nप्रश्न: इस गद्यांश का मुख्य संदेश किस सिद्धांत को दर्शाता है?',
    'Read the passage carefully and answer the question:\n"Routine childhood immunization protects not only the vaccinated child but also vulnerable neighbors who cannot receive shots for medical reasons. When most of a community is immune, infectious outbreaks lose pathways to spread."\nQuestion: Which public health concept is illustrated by the passage?',
    ['सामूहिक प्रतिरक्षा (Community/Herd protection)', 'Community immunity (herd protection)'],
    [
      ['रोगों का प्राकृतिक उत्परिवर्तन', 'Random viral mutation'],
      ['निजी स्वच्छता की उपेक्षा', 'Neglect of personal hygiene'],
      ['औषधि निर्माण का निजीकरण', 'Privatization of pharmacies'],
    ],
    'गद्यांश बताता है कि जब अधिकांश लोग प्रतिरक्षित होते हैं तो पूरा समुदाय—विशेषकर कमजोर वर्ग—सुरक्षित रहता है, यही सामूहिक प्रतिरक्षा है।',
    'The passage explains how widespread immunity protects even unvaccinated individuals, illustrating community immunity.',
    'HARD'
  ),

  // Passage 29: Microplastics in Rivers
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nप्रश्न: माइक्रोप्लास्टिक्स नदियों में मुख्य रूप से किन स्रोतों से प्रवेश करते हैं?',
    'Read the passage carefully and answer the question:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nQuestion: Through which sources do microplastics enter rivers according to the passage?',
    ['कपड़े धोने के अपशिष्ट जल (लॉन्ड्री रनऑफ) और फेंकी गई पैकेजिंग से', 'Laundry runoff and discarded packaging'],
    [
      ['ज्वालामुखी की राख और बर्फ पिघलने से', 'Volcanic ash and melting glaciers'],
      ['भूमिगत चूना पत्थर के क्षरण से', 'Underground limestone erosion'],
      ['जलीय पौधों की प्राकृतिक पत्तियों से', 'Natural leaves of aquatic plants'],
    ],
    'पहले वाक्य में "laundry runoff and discarded packaging" स्पष्ट रूप से लिखा है।',
    'The first sentence states that microplastics enter rivers through laundry runoff and discarded packaging.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nप्रश्न: मछलियाँ गलती से माइक्रोप्लास्टिक्स को क्यों निगल लेती हैं?',
    'Read the passage carefully and answer the question:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nQuestion: Why do fish mistakenly ingest microplastics?',
    ['क्योंकि ये कण प्लवक (plankton) जैसे दिखाई देते हैं', 'Because these particles resemble plankton'],
    [
      ['क्योंकि इन कणों में मीठा स्वाद होता है', 'Because the particles taste sweet'],
      ['क्योंकि ये कण पानी की सतह पर चमकते हैं', 'Because the particles glow brightly'],
      ['क्योंकि मछलियाँ इन्हें ऑक्सीजन समझती हैं', 'Because fish confuse them with oxygen'],
    ],
    'दूसरे वाक्य में कारण दिया गया है: "Because these particles resemble plankton."',
    'Fish ingest them mistakenly because the tiny particles resemble plankton.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nप्रश्न: गद्यांश में "ingest" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nQuestion: What does "ingest" mean in this passage?',
    ['भोजन के रूप में निगलना या शरीर के भीतर लेना', 'To swallow or take into the body as food'],
    [
      ['सतह से बाहर फेंक देना', 'To spit out forcefully'],
      ['पंखों से दूर धकेलना', 'To push away with fins'],
      ['रासायनिक रूप से शुद्ध करना', 'To purify chemically'],
    ],
    '"Ingest" का अर्थ किसी पदार्थ को खाना, पीना या निगलकर शरीर के अंदर ग्रहण करना होता है।',
    '"Ingest" means to take food or another substance into the body by swallowing.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nप्रश्न: मछलियों द्वारा माइक्रोप्लास्टिक निगलने का व्यापक पारिस्थितिक परिणाम क्या है?',
    'Read the passage carefully and answer the question:\n"Tiny fragments of degraded plastic, known as microplastics, enter rivers through laundry runoff and discarded packaging. Because these particles resemble plankton, fish ingest them mistakenly, passing toxins up the food chain."\nQuestion: What is the broader ecological consequence of fish ingesting microplastics?',
    ['विषाक्त पदार्थ खाद्य श्रृंखला में ऊपर की ओर स्थानांतरित हो जाते हैं', 'Toxins are passed up the food chain'],
    [
      ['नदियों का जल तुरंत खारा हो जाता है', 'River water turns salty overnight'],
      ['सभी प्लवक विशाल पौधों में बदल जाते हैं', 'Plankton grows into giant trees'],
      ['प्लास्टिक कचरा पूरी तरह से गायब हो जाता है', 'Plastic waste disappears safely'],
    ],
    'अंतिम शब्द "passing toxins up the food chain" इस पारिस्थितिक संकट को स्पष्ट करते हैं।',
    'The closing phrase explains that this passes toxins up the food chain.',
    'MEDIUM'
  ),

  // Passage 30: Civic Sense & Public Parks
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nप्रश्न: गद्यांश के अनुसार सार्वजनिक उद्यानों की देखभाल मुख्य रूप से किस पर निर्भर करती है?',
    'Read the passage carefully and answer the question:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nQuestion: What does the upkeep of public parks depend heavily on according to the passage?',
    ['नागरिकों के दैनिक नागरिक बोध (Civic sense) पर', 'Everyday civic sense'],
    [
      ['केवल ऊँची कँटीली बाड़ लगाने पर', 'Only erecting tall barbed-wire fences'],
      ['पार्क में प्रवेश पर भारी शुल्क लगाने पर', 'Charging high entry fees'],
      ['सप्ताहांत में पार्क बंद रखने पर', 'Closing parks every weekend'],
    ],
    'पहले वाक्य में लिखा है: "their upkeep depends heavily on everyday civic sense."',
    'The first sentence states that park upkeep depends heavily on everyday civic sense.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nप्रश्न: चेतावनी बोर्ड लगाने की तुलना में हरित स्थलों को कौन-सी दो आदतें अधिक सुरक्षित रखती हैं?',
    'Read the passage carefully and answer the question:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nQuestion: Which two habits preserve green spaces better than warning signs alone?',
    ['कचरा कूड़ेदान में डालना और फूलों की क्यारियों का सम्मान करना', 'Carrying litter to dustbins and respecting flowerbeds'],
    [
      ['बेंचों पर नाम खोदना और घास पर वाहन चलाना', 'Carving names on benches and parking on lawns'],
      ['पौधों को बिना पानी दिए छोड़ना', 'Leaving plants unwatered'],
      ['प्लास्टिक की बोतलें तालाब में फेंकना', 'Tossing plastic bottles into ponds'],
    ],
    'दूसरे वाक्य में "Carrying litter to dustbins and respecting flowerbeds" का स्पष्ट उल्लेख है।',
    'The second sentence credits carrying litter to dustbins and respecting flowerbeds.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nप्रश्न: गद्यांश में "upkeep" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nQuestion: What does "upkeep" mean in this passage?',
    ['रखरखाव और उचित देखभाल', 'Maintenance and care'],
    [
      ['ध्वस्तीकरण और बिक्री', 'Demolition and sale'],
      ['निजी स्वामित्व', 'Private ownership'],
      ['पूर्ण त्याग', 'Total abandonment'],
    ],
    '"Upkeep" का अर्थ किसी सार्वजनिक या निजी संपत्ति को अच्छी दशा में बनाए रखने का कार्य (रखरखाव) है।',
    '"Upkeep" refers to the process of keeping something in good condition; maintenance.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nप्रश्न: इस गद्यांश से नागरिकों को क्या मुख्य संदेश मिलता है?',
    'Read the passage carefully and answer the question:\n"Public parks belong equally to every resident, yet their upkeep depends heavily on everyday civic sense. Carrying litter to dustbins and respecting flowerbeds preserve green spaces far better than warning signs alone."\nQuestion: What key message does the passage convey to citizens?',
    ['साझा सार्वजनिक संपत्ति की रक्षा व्यक्तिगत जिम्मेदारी से होती है, न कि केवल नियमों के डर से', 'Shared spaces thrive through personal responsibility rather than mere warning signs'],
    [
      ['चेतावनी बोर्ड हर समस्या का पूर्ण समाधान हैं', 'Warning signs solve all cleanliness problems'],
      ['केवल नगर निगम कर्मचारियों को ही स्वच्छता की चिंता करनी चाहिए', 'Only municipal workers should care about cleanliness'],
      ['पार्क केवल बच्चों के खेलने के लिए बनाए जाते हैं', 'Parks are built exclusively for children'],
    ],
    'गद्यांश का सार यह है कि साझा संपत्ति की सुरक्षा के लिए प्रत्येक नागरिक का जिम्मेदार आचरण नियमों के बोर्ड से अधिक प्रभावी है।',
    'The passage emphasizes that voluntary civic responsibility protects public parks better than posted warnings.',
    'MEDIUM'
  ),

  // Passage 31: Peer Tutoring
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nप्रश्न: सहपाठी शिक्षण (peer tutoring) में किन्हें आपस में जोड़ा जाता है?',
    'Read the passage carefully and answer the question:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nQuestion: Who are paired together in peer tutoring?',
    ['विषय में निपुण एक छात्र को ऐसे सहपाठी के साथ जिसे अतिरिक्त अभ्यास की आवश्यकता हो', 'A student who has mastered a topic with a classmate needing extra practice'],
    [
      ['दो बाहरी पेशेवर प्रशिक्षकों को आपस में', 'Two external professional trainers'],
      ['प्रधानाचार्य को अभिभावकों के साथ', 'The principal with school trustees'],
      ['दो ऐसे छात्रों को जो दोनों ही विषय से अनजान हों', 'Two students unfamiliar with the subject'],
    ],
    'पहला वाक्य बताता है कि इसमें विषय समझ चुके छात्र और अतिरिक्त अभ्यास चाहने वाले सहपाठी की जोड़ी बनाई जाती है।',
    'The first sentence defines peer tutoring as pairing a student who mastered a topic with a classmate needing practice.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nप्रश्न: किसी अवधारणा को बोलकर समझाने से ट्यूटर (सिखाने वाले छात्र) को क्या लाभ होता है?',
    'Read the passage carefully and answer the question:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nQuestion: How does teaching a concept aloud benefit the peer tutor?',
    ['यह ट्यूटर को अपना स्वयं का तर्क स्पष्ट करने के लिए प्रेरित करता है', 'It forces the tutor to clarify her own reasoning'],
    [
      ['यह ट्यूटर के गृहकार्य को पूरी तरह माफ कर देता है', 'It exempts the tutor from all homework'],
      ['यह ट्यूटर की बोलने की गति को घटा देता है', 'It slows down the tutor’s reading pace'],
      ['यह ट्यूटर को परीक्षा से बाहर कर देता है', 'It removes the tutor from final exams'],
    ],
    'दूसरे वाक्य में स्पष्ट है: "forces the tutor to clarify her own reasoning."',
    'The passage explains that teaching aloud forces the tutor to clarify her own reasoning.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nप्रश्न: "judgment-free support" से शिक्षार्थी के लिए किस प्रकार के वातावरण का बोध होता है?',
    'Read the passage carefully and answer the question:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nQuestion: What kind of environment is suggested by "judgment-free support"?',
    ['एक सुरक्षित वातावरण जहाँ छात्र बिना उपहास या आलोचना के डर के पूछ सकें', 'A safe atmosphere where learners can ask questions without fear of criticism'],
    [
      ['एक ऐसा स्थान जहाँ कोई मूल्यांकन या अभ्यास नहीं होता', 'A place with no learning activities at all'],
      ['एक कठोर न्यायालय जैसा अनुशासन', 'A strict courtroom-like setting'],
      ['केवल मौन स्वाध्याय कक्ष', 'A completely silent study hall'],
    ],
    '"Judgment-free support" का अर्थ ऐसा सहज सहयोग है जहाँ छात्र संकोच या आलोचना के भय के बिना प्रश्न पूछ सके।',
    '"Judgment-free support" indicates a welcoming space free from harsh criticism or embarrassment.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nप्रश्न: गद्यांश में प्रयुक्त "mastered" का विलोम संदर्भ के अनुसार क्या होगा?',
    'Read the passage carefully and answer the question:\n"Peer tutoring pairs a student who has mastered a topic with a classmate who needs extra practice. Teaching a concept aloud forces the tutor to clarify her own reasoning while giving the learner comfortable, judgment-free support."\nQuestion: Which phrase from the passage contrasts with having "mastered a topic"?',
    ['अतिरिक्त अभ्यास की आवश्यकता होना (Needs extra practice)', 'Needs extra practice'],
    [
      ['तर्क स्पष्ट करना (Clarify reasoning)', 'Clarify reasoning'],
      ['बोलकर पढ़ाना (Teaching aloud)', 'Teaching aloud'],
      ['सहज समर्थन (Comfortable support)', 'Comfortable support'],
    ],
    'विषय में निपुण (mastered a topic) होने का सीधा विपरीत संदर्भ "needs extra practice" (अतिरिक्त अभ्यास की जरूरत) है।',
    'The passage directly contrasts a student who "has mastered a topic" with one who "needs extra practice."',
    'EASY'
  ),

  // Passage 32: Wetlands & Migratory Birds
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nप्रश्न: प्रवासी पक्षी प्रतिवर्ष शीत ऋतु में भारतीय झीलों में किस उद्देश्य से आते हैं?',
    'Read the passage carefully and answer the question:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nQuestion: Why do migratory birds visit Indian lakes every winter?',
    ['लंबी यात्रा के बाद विश्राम करने के लिए', 'To rest after traveling thousands of kilometers'],
    [
      ['गर्म रेगिस्तानों से बचने के लिए केवल एक दिन रुकने', 'To pass through deserts for one hour'],
      ['समुद्र की गहराई मापने के लिए', 'To dive into deep ocean trenches'],
      ['शहरों की ऊँची इमारतों पर बैठने के लिए', 'To nest on urban skyscrapers'],
    ],
    'पहले वाक्य में लिखा है कि वे हज़ारों किलोमीटर की यात्रा करके भारतीय झीलों में विश्राम करने (to rest) आते हैं।',
    'The first sentence says they travel thousands of kilometers to rest in Indian lakes.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nप्रश्न: उथले दलदली क्षेत्रों (shallow marshes) की रक्षा करने से पक्षियों को क्या दो चीजें मिलती हैं?',
    'Read the passage carefully and answer the question:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nQuestion: What two things do protected shallow marshes provide to these birds?',
    ['सुरक्षित घोंसला बनाने के स्थान और प्रचुर भोजन', 'Safe nesting grounds and abundant food'],
    [
      ['कृत्रिम प्रकाश और पिंजरे', 'Artificial lighting and cages'],
      ['तेज़ समुद्री हवाएँ और चट्टानें', 'Fierce ocean gales and cliffs'],
      ['पक्की सड़कें और पुल', 'Paved walkways and bridges'],
    ],
    'दूसरे वाक्य में "safe nesting grounds and abundant food" स्पष्ट उल्लिखित है।',
    'The second sentence mentions safe nesting grounds and abundant food.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nप्रश्न: गद्यांश में "exhausted" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nQuestion: What does "exhausted" mean in "these exhausted travelers"?',
    ['अत्यंत थके हुए', 'Completely worn out or extremely tired'],
    [
      ['पूर्णतः तरोताजा', 'Fully refreshed'],
      ['अत्यंत क्रोधित', 'Deeply angry'],
      ['दिशाहीन और लापरवाह', 'Careless and reckless'],
    ],
    '"Exhausted" का अर्थ बहुत लंबी यात्रा के कारण पूरी तरह थक जाना है।',
    '"Exhausted" means drained of physical energy; extremely tired.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nप्रश्न: गद्यांश में प्रयुक्त "abundant" शब्द का विलोम क्या है?',
    'Read the passage carefully and answer the question:\n"Every winter, thousands of migratory birds travel thousands of kilometers along invisible aerial flyways to rest in Indian lakes. Protecting shallow marshes ensures these exhausted travelers find safe nesting grounds and abundant food."\nQuestion: Which word is an antonym of "abundant"?',
    ['दुर्लभ या कम (Scarce)', 'Scarce'],
    [
      ['प्रचुर (Plentiful)', 'Plentiful'],
      ['पर्याप्त (Ample)', 'Ample'],
      ['विशाल (Vast)', 'Vast'],
    ],
    '"Abundant" का अर्थ बहुत अधिक मात्रा में उपलब्ध होना है, इसलिए इसका विलोम "Scarce" (अल्प/दुर्लभ) है।',
    '"Abundant" means existing in large quantities; its antonym is "scarce."',
    'MEDIUM'
  ),

  // Passage 33: Balanced Breakfast for Schoolchildren
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nप्रश्न: सुबह का नाश्ता छोड़ने से स्कूली बच्चे पूर्वाह्न तक सुस्त क्यों महसूस करते हैं?',
    'Read the passage carefully and answer the question:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nQuestion: Why do schoolchildren feel sluggish by mid-morning if they skip breakfast?',
    ['क्योंकि रात भर के उपवास के बाद रक्त में ग्लूकोज का स्तर गिर जाता है', 'Because blood glucose drops after an overnight fast'],
    [
      ['क्योंकि सुबह हवा का दबाव अधिक होता है', 'Because morning air pressure rises'],
      ['क्योंकि विद्यालय की वर्दी भारी होती है', 'Because school uniforms are heavy'],
      ['क्योंकि कक्षाओं में शोर बहुत होता है', 'Because classrooms are overly noisy'],
    ],
    'पहले वाक्य में कारण दिया गया है: "because blood glucose drops after an overnight fast."',
    'The passage explains that blood glucose drops after an overnight fast.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nप्रश्न: गद्यांश के अनुसार संतुलित नाश्ते में किन तीन घटकों का संयोजन होना चाहिए?',
    'Read the passage carefully and answer the question:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nQuestion: Which three components make up a balanced meal according to the passage?',
    ['साबुत अनाज, प्रोटीन और फल', 'Whole grains, protein, and fruit'],
    [
      ['केवल तले हुए चिप्स और सोडा', 'Fried snacks and carbonated soda'],
      ['रिफाइंड चीनी, मक्खन और नमक', 'Refined sugar, butter, and salt'],
      ['केवल ठंडा पानी और कैंडी', 'Cold water and candy bars'],
    ],
    'दूसरे वाक्य में "whole grains, protein, and fruit" का उल्लेख है।',
    'The second sentence lists whole grains, protein, and fruit.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nप्रश्न: गद्यांश में "sluggish" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nQuestion: What does "sluggish" mean in this context?',
    ['सुस्त और ऊर्जाहीन', 'Slow-moving and lacking energy'],
    [
      ['अत्यंत चंचल और तेज', 'Hyperactive and speedy'],
      ['गंभीर और चिंतनशील', 'Deeply thoughtful'],
      ['निडर और साहसी', 'Bold and courageous'],
    ],
    '"Sluggish" का अर्थ आलसी, मंद या ऊर्जा की कमी के कारण सुस्त पड़ जाना है।',
    '"Sluggish" means lacking energy, slow, or lethargic.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nप्रश्न: संतुलित भोजन का कक्षा में बच्चों के व्यवहार पर क्या सकारात्मक प्रभाव पड़ता है?',
    'Read the passage carefully and answer the question:\n"Skipping breakfast leaves schoolchildren sluggish by mid-morning because blood glucose drops after an overnight fast. A balanced meal combining whole grains, protein, and fruit sustains attention and improves classroom participation."\nQuestion: How does a balanced meal positively affect students in class?',
    ['यह एकाग्रता बनाए रखता है और कक्षा में भागीदारी बढ़ाता है', 'It sustains attention and improves classroom participation'],
    [
      ['यह छात्रों को कक्षा में तुरंत सुला देता है', 'It makes students fall asleep during lessons'],
      ['यह परीक्षा के प्रश्नों को सरल कर देता है', 'It alters the difficulty of exam papers'],
      ['यह पठन की आवश्यकता समाप्त करता है', 'It removes the need for textbooks'],
    ],
    'अंतिम पंक्ति कहती है: "sustains attention and improves classroom participation."',
    'The passage states it sustains attention and improves classroom participation.',
    'EASY'
  ),

  // Passage 34: Seed Banks
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nप्रश्न: सामुदायिक बीज बैंक (community seed banks) किन फसल किस्मों की रक्षा करते हैं?',
    'Read the passage carefully and answer the question:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nQuestion: Which crop varieties do community seed banks safeguard?',
    ['पारंपरिक फसल किस्में जिन्हें व्यावसायिक कृषि अक्सर अनदेखा करती है', 'Traditional crop varieties often overlooked by commercial agriculture'],
    [
      ['केवल आनुवंशिक रूप से परिवर्तित सजावटी फूल', 'Only genetically modified ornamental flowers'],
      ['केवल आयातित विदेशी फल', 'Exclusively imported exotic fruits'],
      ['समुद्री शैवाल की कृत्रिम किस्में', 'Artificial varieties of seaweed'],
    ],
    'पहले वाक्य में कहा गया है कि सामुदायिक बीज बैंक पारंपरिक फसल किस्मों (traditional crop varieties) की रक्षा करते हैं।',
    'The first sentence states they safeguard traditional crop varieties overlooked by commercial agriculture.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nप्रश्न: स्थानीय स्तर पर सूखा-सहिष्णु बीजों को सहेजने से छोटे किसानों को क्या आर्थिक लाभ होता है?',
    'Read the passage carefully and answer the question:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nQuestion: What financial benefit do smallholders gain by preserving drought-tolerant seeds locally?',
    ['महँगे वार्षिक बीज खरीदने पर उनकी निर्भरता कम हो जाती है', 'They reduce dependence on costly annual seed purchases'],
    [
      ['उन्हें प्रतिवर्ष दो बार नए ट्रैक्टर खरीदने पड़ते हैं', 'They must buy new tractors twice yearly'],
      ['उन्हें खेती छोड़कर शहरों में जाना पड़ता है', 'They abandon farming for city jobs'],
      ['उनकी सिंचाई की लागत तीन गुना बढ़ जाती है', 'Their irrigation costs triple'],
    ],
    'दूसरे वाक्य में "reduce dependence on costly annual seed purchases" लिखा है।',
    'They reduce their dependence on costly annual seed purchases.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nप्रश्न: गद्यांश में "smallholders" किन्हें कहा गया है?',
    'Read the passage carefully and answer the question:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nQuestion: Who are "smallholders" in agricultural contexts?',
    ['छोटी जोत वाले किसान', 'Farmers who own or manage small plots of land'],
    [
      ['बड़े बहुराष्ट्रीय बीज निगम', 'Large multinational seed corporations'],
      ['अनाज का परिवहन करने वाले रेलवे ठेकेदार', 'Railway grain freight contractors'],
      ['शहरी अनाज गोदामों के मालिक', 'Owners of urban grain warehouses'],
    ],
    '"Smallholders" का अर्थ छोटे कृषि भूखंडों पर खेती करने वाले किसान होता है।',
    '"Smallholders" are farmers cultivating small-scale agricultural holdings.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nप्रश्न: "overlooks" शब्द का अर्थ गद्यांश के अनुसार क्या है?',
    'Read the passage carefully and answer the question:\n"Community seed banks safeguard traditional crop varieties that commercial agriculture often overlooks. By preserving drought-tolerant seeds locally, smallholders reduce dependence on costly annual seed purchases and protect agricultural heritage."\nQuestion: What does "overlooks" mean in the first sentence?',
    ['नजरअंदाज या उपेक्षा करना', 'Fails to notice or ignores'],
    [
      ['अत्यधिक महत्व देना', 'Prioritizes heavily'],
      ['सूक्ष्मदर्शी से जाँचना', 'Inspects carefully'],
      ['कानूनी रूप से सुरक्षित करना', 'Protects legally'],
    ],
    '"Overlook" का अर्थ ध्यान न देना या अनदेखा कर देना है।',
    '"Overlooks" here means ignores or fails to value.',
    'EASY'
  ),

  // Passage 35: Value of Failure in Science
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nप्रश्न: वैज्ञानिक अन्वेषण में असफल या खंडित हुई परिकल्पना (disproved hypothesis) व्यर्थ प्रयास क्यों नहीं होती?',
    'Read the passage carefully and answer the question:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nQuestion: Why is a disproved hypothesis never wasted effort in science?',
    ['क्योंकि त्रुटिपूर्ण मान्यताओं को हटाने से विश्वसनीय सत्य का मार्ग स्पष्ट होता है', 'Because eliminating flawed assumptions narrows the path toward reliable truth'],
    [
      ['क्योंकि इससे वैज्ञानिकों को शोध बंद करने का बहाना मिलता है', 'Because it allows scientists to quit research early'],
      ['क्योंकि यह प्रयोगशाला उपकरणों की लागत घटाता है', 'Because it lowers the price of glassware'],
      ['क्योंकि असफल प्रयोग हमेशा बिना परीक्षण के प्रकाशित होते हैं', 'Because disproved ideas are accepted without evidence'],
    ],
    'दूसरे वाक्य में बताया गया है कि गलत धारणाओं को हटाने से सत्य का रास्ता संकरा/स्पष्ट होता है और प्रयोगों में सुधार होता है।',
    'Eliminating flawed assumptions narrows the path toward reliable truth and improves experimental designs.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nप्रश्न: गलत मान्यताओं को हटाना शोधकर्ताओं को किस कार्य के लिए प्रोत्साहित करता है?',
    'Read the passage carefully and answer the question:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nQuestion: What does eliminating flawed assumptions encourage researchers to do?',
    ['अपने प्रयोगात्मक डिज़ाइनों को परिष्कृत (बेहतर) करने के लिए', 'To refine experimental designs'],
    [
      ['पुराने आंकड़ों को मनमाने ढंग से बदलने के लिए', 'To fabricate data artificially'],
      ['सभी अवलोकन त्यागने के लिए', 'To abandon observation altogether'],
      ['केवल पुस्तकालय में बैठने के लिए', 'To stop conducting experiments'],
    ],
    'अंतिम वाक्यांश में "encourages researchers to refine experimental designs" लिखा है।',
    'The passage says it encourages researchers to refine experimental designs.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nप्रश्न: गद्यांश में "flawed" शब्द का पर्यायवाची क्या है?',
    'Read the passage carefully and answer the question:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nQuestion: Which word is closest in meaning to "flawed"?',
    ['त्रुटिपूर्ण / दोषयुक्त (Faulty / Imperfect)', 'Faulty or imperfect'],
    [
      ['निर्दोष (Faultless)', 'Faultless'],
      ['सटीक (Accurate)', 'Accurate'],
      ['स्थायी (Permanent)', 'Permanent'],
    ],
    '"Flawed" का अर्थ दोषपूर्ण या त्रुटिपूर्ण होता है।',
    '"Flawed" means containing a defect, error, or weakness; faulty.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nप्रश्न: "refine" शब्द का उपयुक्त अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"In scientific inquiry, a disproved hypothesis is never wasted effort. Eliminating flawed assumptions narrows the path toward reliable truth and encourages researchers to refine experimental designs."\nQuestion: What does "refine" mean in "refine experimental designs"?',
    ['छोटी-छोटी कमियाँ दूर कर सुधार करना', 'To improve by making small, careful adjustments'],
    [
      ['पूरी तरह नष्ट करना', 'To destroy completely'],
      ['और अधिक जटिल व भ्रामक बनाना', 'To make messier and vague'],
      ['दोगुना महंगा करना', 'To double the cost'],
    ],
    '"Refine" का अर्थ किसी प्रक्रिया या डिज़ाइन से त्रुटियाँ हटाकर उसे अधिक शुद्ध और बेहतर बनाना है।',
    '"Refine" means to polish or improve something by removing flaws.',
    'MEDIUM'
  ),

  // Passage 36: Storytelling in Primary Grades
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nप्रश्न: धाराप्रवाह मुद्रित पाठ पढ़ने से पहले ही बच्चों को क्या आकर्षित करता है?',
    'Read the passage carefully and answer the question:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nQuestion: What captivates young learners before they can read printed text fluently?',
    ['मौखिक कहानी सुनाना (Oral storytelling)', 'Oral storytelling'],
    [
      ['जटिल व्याकरण अभ्यास पुस्तिकाएँ', 'Complex grammar workbooks'],
      ['मूक लिखित निबंध परीक्षाएँ', 'Silent written essay tests'],
      ['शब्दकोश के पृष्ठ रटना', 'Memorizing dictionary pages'],
    ],
    'पहले वाक्य में स्पष्ट है कि मौखिक कथा-वाचन (Oral storytelling) बच्चों को बहुत पहले से ही मंत्रमुग्ध कर देता है।',
    'The first sentence states that oral storytelling captivates young learners early on.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nप्रश्न: भावपूर्ण स्वर-उतार-चढ़ाव और सजीव बिंब-निर्माण के क्या दो लाभ हैं?',
    'Read the passage carefully and answer the question:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nQuestion: What two benefits come from expressive voice modulation and vivid imagery?',
    ['श्रवण शब्द-भंडार का विस्तार और पुस्तकों के प्रति जिज्ञासा का जागना', 'Expanding listening vocabulary and sparking curiosity about books'],
    [
      ['कक्षा में नींद बढ़ाना और लिखना रोकना', 'Inducing sleep and discouraging writing'],
      ['गणितीय गणनाएँ धीमी करना', 'Slowing mental arithmetic'],
      ['केवल कठिन वर्तनी सिखाना', 'Teaching only difficult spellings'],
    ],
    'दूसरे वाक्य में "expand listening vocabulary and spark curiosity about books" दिया गया है।',
    'They expand listening vocabulary and spark curiosity about books.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nप्रश्न: गद्यांश में "captivates" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nQuestion: What does "captivates" mean in the opening sentence?',
    ['ध्यान आकर्षित कर मंत्रमुग्ध कर लेना', 'Attracts and holds the attention delightfully'],
    [
      ['ऊबा देना या थका देना', 'Bores or tires out'],
      ['भयभीत कर भगा देना', 'Frightens away'],
      ['सजा के रूप में बंद करना', 'Locks in a room'],
    ],
    '"Captivate" का अर्थ किसी को मोह लेना या गहरी रुचि के साथ ध्यान बाँधे रखना होता है।',
    '"Captivates" means to attract and hold the interest and attention of someone.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nप्रश्न: "vivid imagery" वाक्यांश का तात्पर्य क्या है?',
    'Read the passage carefully and answer the question:\n"Oral storytelling captivates young learners long before they decode printed sentences fluently. Expressive voice modulation and vivid imagery expand listening vocabulary and spark curiosity about books."\nQuestion: What is meant by "vivid imagery"?',
    ['स्पष्ट और जीवंत मानसिक चित्र उत्पन्न करने वाला वर्णन', 'Clear, lifelike descriptions that create strong mental pictures'],
    [
      ['रंगहीन और धुंधले रेखाचित्र', 'Faded, colorless sketches'],
      ['कठिन तकनीकी आँकड़े', 'Dry statistical spreadsheets'],
      ['बिना शब्दों के मौन संकेत', 'Silent hand gestures without words'],
    ],
    '"Vivid imagery" से आशय ऐसे सजीव शब्द-चित्रों से है जो श्रोता के मन में स्पष्ट दृश्य रच दें।',
    '"Vivid imagery" refers to descriptive language that creates clear, memorable mental images.',
    'MEDIUM'
  ),

  // Passage 37: Cycling Cities
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nप्रश्न: यात्रियों को सुरक्षित साइकिल चलाने के लिए क्या प्रोत्साहित करता है?',
    'Read the passage carefully and answer the question:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nQuestion: What invites commuters of all ages to cycle safely?',
    ['तेज मोटर यातायात से अलग समर्पित साइकिल लेन', 'Dedicated bicycle lanes separated from fast motor traffic'],
    [
      ['वाहनों के बीच बिना हेलमेट के दौड़', 'Riding between fast trucks without lanes'],
      ['राजमार्गों पर गति सीमा हटाना', 'Removing all speed limits on highways'],
      ['केवल रात में साइकिल चलाने की अनुमति', 'Allowing cycling only after midnight'],
    ],
    'पहले वाक्य में लिखा है कि तेज मोटर यातायात से अलग समर्पित साइकिल लेन सभी उम्र के यात्रियों को सुरक्षित साइकिल चलाने को प्रेरित करती है।',
    'The first sentence identifies dedicated bicycle lanes separated from fast motor traffic.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nप्रश्न: छायादार साइकिल पथों में निवेश करने वाले शहरों में कौन-से तीन बदलाव देखे जाते हैं?',
    'Read the passage carefully and answer the question:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nQuestion: What three changes do cities investing in shaded bike paths witness?',
    ['मोटापे की दर में कमी, शांत सड़कें और अधिक जीवंत स्थानीय दुकानें', 'Lower obesity rates, quieter streets, and livelier neighborhood shops'],
    [
      ['अधिक शोर, बढ़े हुए ईंधन बिल और खाली बाजार', 'Louder noise, higher fuel bills, and empty shops'],
      ['लंबा यातायात जाम और कम पैदल यात्री', 'Longer traffic jams and fewer pedestrians'],
      ['अधिक पार्किंग स्थल और कम वृक्ष', 'More parking lots and fewer trees'],
    ],
    'दूसरे वाक्य में "lower obesity rates, quieter streets, and livelier neighborhood shops" स्पष्ट दिए हैं।',
    'The second sentence lists lower obesity rates, quieter streets, and livelier neighborhood shops.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nप्रश्न: स्थानीय दुकानें अधिक जीवंत (livelier) क्यों हो जाती होंगी?',
    'Read the passage carefully and answer the question:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nQuestion: What can be inferred about why neighborhood shops become livelier?',
    ['साइकिल चालक स्थानीय बाजारों के पास आसानी से रुककर खरीदारी कर सकते हैं', 'Cyclists can easily stop by local stores along safe neighborhood paths'],
    [
      ['क्योंकि सभी दुकानें साइकिल के पुर्जे बेचती हैं', 'Because every shop sells only bicycle tires'],
      ['क्योंकि मोटर वाहन पूरी तरह प्रतिबंधित कर दिए जाते हैं', 'Because groceries are delivered only by air'],
      ['क्योंकि दुकानें केवल रविवार को खुलती हैं', 'Because shops open only on Sundays'],
    ],
    'सुरक्षित व शांत साइकिल मार्ग होने से लोग स्थानीय दुकानों के पास आसानी से रुकते हैं, जिससे पड़ोस के व्यापार में रौनक बढ़ती है।',
    'Calm, accessible bike paths make it convenient for riders to stop and patronize nearby shops.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nप्रश्न: गद्यांश में "Dedicated" शब्द का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Dedicated bicycle lanes separated from fast motor traffic invite commuters of all ages to cycle safely. Cities that invest in shaded bike paths witness lower obesity rates, quieter streets, and livelier neighborhood shops."\nQuestion: What does "dedicated" mean in "dedicated bicycle lanes"?',
    ['केवल एक विशिष्ट उद्देश्य (साइकिल चालन) के लिए आरक्षित', 'Reserved exclusively for a specific purpose'],
    [
      ['सभी भारी वाहनों के साथ साझा', 'Shared with heavy freight trucks'],
      ['टूटी-फूटी और उपेक्षित', 'Broken and neglected'],
      ['अस्थायी रूप से चिह्नित', 'Temporarily painted for one day'],
    ],
    'यातायात योजना में "dedicated lane" का अर्थ केवल एक विशेष वाहन वर्ग (यहाँ साइकिल) के लिए आरक्षित लेन होता है।',
    'In urban planning, "dedicated" means set aside exclusively for one particular use.',
    'MEDIUM'
  ),

  // Passage 38: Importance of Play
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nप्रश्न: लेखक असंरचित बाहरी खेल (unstructured outdoor play) को क्या मानता है?',
    'Read the passage carefully and answer the question:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nQuestion: How does the author characterize unstructured outdoor play?',
    ['सामाजिक विकास की एक महत्वपूर्ण प्रयोगशाला', 'A vital laboratory of social growth'],
    [
      ['अध्ययन से समय की पूर्ण बर्बादी', 'A total waste of academic time'],
      ['केवल अनुशासनहीनता का स्रोत', 'A cause of classroom indiscipline'],
      ['खेल मैदान में केवल दौड़ने का नियम', 'A strict athletic competition'],
    ],
    'पहले वाक्य में इसे "a vital laboratory of social growth" कहा गया है।',
    'The first sentence calls it "a vital laboratory of social growth."',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nप्रश्न: खेल के मैदान में नए खेल गढ़ते समय बच्चे कौन-से कौशल सीखते हैं?',
    'Read the passage carefully and answer the question:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nQuestion: What skills do children develop while inventing games on a playground?',
    ['नियमों पर सहमति बनाना, विवादों को निष्पक्ष सुलझाना और शारीरिक समन्वय विकसित करना', 'Negotiating rules, resolving disputes fairly, and building physical coordination'],
    [
      ['केवल वीडियो गेम की रणनीतियाँ रटना', 'Memorizing video game cheat codes'],
      ['दूसरों पर दोष मढ़ना और खेल छोड़ना', 'Blaming teammates and quitting early'],
      ['अकेले बैठकर चुपचाप पढ़ना', 'Sitting alone reading silently'],
    ],
    'दूसरे वाक्य में "negotiate rules, resolve disputes fairly, and build physical coordination" लिखा है।',
    'They negotiate rules, resolve disputes fairly, and build physical coordination.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nप्रश्न: गद्यांश में प्रयुक्त "idle" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nQuestion: What does "idle" mean in "an idle break"?',
    ['व्यर्थ / निष्क्रिय या बिना किसी उद्देश्य के', 'Unproductive or having no purpose'],
    [
      ['अत्यंत आदर्श और पूजनीय', 'Ideal and worshipful'],
      ['सक्रिय और लाभकारी', 'Active and productive'],
      ['अत्यंत कठिन', 'Extremely strenuous'],
    ],
    '"Idle" (आइडल) का अर्थ बेकार या निठल्ला होता है; ध्यान दें कि यह "idol" (मूर्ति) और "ideal" (आदर्श) से भिन्न homophone है।',
    '"Idle" means purposeless or unproductive (distinct from homophones "idol" and "ideal").',
    'MEDIUM',
    { grammarRuleHi: 'Homophones: idle (निष्क्रिय/व्यर्थ), idol (मूर्ति), ideal (आदर्श) — वर्तनी और अर्थ अलग हैं।' }
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nप्रश्न: "vital laboratory of social growth" में प्रयुक्त अलंकार पहचानिए।',
    'Read the passage carefully and answer the question:\n"Unstructured outdoor play is not an idle break from learning; it is a vital laboratory of social growth. While inventing games on a playground, children negotiate rules, resolve disputes fairly, and build physical coordination."\nQuestion: Identify the figure of speech in calling play "a vital laboratory of social growth."',
    ['रूपक अलंकार (Metaphor)', 'Metaphor'],
    [
      ['उपमा अलंकार (Simile)', 'Simile'],
      ['अतिशयोक्ति (Hyperbole)', 'Hyperbole'],
      ['व्यंग्योक्ति (Irony)', 'Irony'],
    ],
    'खेल को सीधे "सामाजिक विकास की प्रयोगशाला" कह दिया गया है, इसलिए यह रूपक (Metaphor) है।',
    'Play is directly equated with a "laboratory" without using "like" or "as," forming a metaphor.',
    'HARD'
  ),

  // Passage 39: Savitribai Phule
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nप्रश्न: सावित्रीबाई फुले और ज्योतिराव फुले ने 1848 में पुणे में क्या स्थापित किया?',
    'Read the passage carefully and answer the question:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nQuestion: What did Savitribai and Jyotirao Phule open in Pune in 1848?',
    ['भारत के सबसे प्रारंभिक बालिका विद्यालयों में से एक', 'One of India’s earliest schools for girls'],
    [
      ['एक समुद्री व्यापारिक बंदरगाह', 'A maritime trading port'],
      ['एक शाही संगीत विद्यालय', 'A royal conservatory of music'],
      ['एक आधुनिक रेल कारखाना', 'A locomotive workshop'],
    ],
    'पहले वाक्य में 1848 में पुणे में लड़कियों के लिए भारत के शुरुआती विद्यालयों में से एक खोलने का उल्लेख है।',
    'The first sentence states they opened one of India’s earliest schools for girls in Pune in 1848.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nप्रश्न: सावित्रीबाई का कौन-सा गुण उन्हें विरोध के बावजूद शिक्षण जारी रखने में सक्षम बनाता है?',
    'Read the passage carefully and answer the question:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nQuestion: Which quality of Savitribai Phule is highlighted by her continuing to teach despite hostility?',
    ['दृढ़ संकल्प और लगन (Perseverance / Persistence)', 'Perseverance and determination'],
    [
      ['उदासीनता (Indifference)', 'Indifference'],
      ['भीरुता (Timidity)', 'Timidity'],
      ['स्वार्थपरता (Selfishness)', 'Selfishness'],
    ],
    'गद्यांश में "Despite facing hostility... Savitribai persisted" उनके अडिग साहस और दृढ़ संकल्प (perseverance) को दर्शाता है।',
    '"Despite facing hostility... Savitribai persisted" highlights her perseverance and determination.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nप्रश्न: गद्यांश में "entrenched" शब्द का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nQuestion: What does "entrenched" mean in "entrenched social prejudice"?',
    ['गहराई से जमी हुई और आसानी से न बदलने वाली', 'Deeply established and difficult to change'],
    [
      ['अस्थायी और नई', 'Temporary and recent'],
      ['तर्कसंगत और न्यायपूर्ण', 'Logical and fair'],
      ['हल्की और नगण्य', 'Mild and insignificant'],
    ],
    '"Entrenched" का अर्थ लंबे समय से समाज में गहराई से जड़ जमाए हुए विचार या पूर्वाग्रह होता है।',
    '"Entrenched" describes beliefs or habits that are firmly established and hard to alter.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nप्रश्न: गद्यांश के अनुसार सावित्रीबाई किस विरासत को छोड़ गईं?',
    'Read the passage carefully and answer the question:\n"In 1848, Savitribai Phule and Jyotirao Phule opened one of India’s earliest schools for girls in Pune, defying entrenched social prejudice. Despite facing hostility on her daily walk to teach, Savitribai persisted, leaving an enduring legacy of universal education."\nQuestion: What enduring legacy did Savitribai leave behind?',
    ['सार्वभौमिक शिक्षा की चिरस्थायी विरासत', 'A lasting legacy of universal education'],
    [
      ['केवल निजी शिक्षण संस्थानों की परंपरा', 'A tradition of exclusive elite academies'],
      ['औद्योगिक विनिर्माण की नीति', 'A policy of heavy industrialization'],
      ['शिक्षा पर कर लगाने की प्रथा', 'A system of taxing schools'],
    ],
    'अंतिम शब्द "leaving an enduring legacy of universal education" इसे स्पष्ट करते हैं।',
    'The passage closes with "leaving an enduring legacy of universal education."',
    'EASY'
  ),

  // Passage 40: Antibiotics Resistance
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nप्रश्न: सामान्य सर्दी-जुकाम में एंटीबायोटिक्स प्रभावी क्यों नहीं होते?',
    'Read the passage carefully and answer the question:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nQuestion: Why are antibiotics ineffective against common colds?',
    ['क्योंकि सामान्य सर्दी-जुकाम विषाणुओं (viruses) से होता है, जीवाणुओं से नहीं', 'Because common colds are caused by viruses'],
    [
      ['क्योंकि सर्दी-जुकाम केवल ठंडे पानी से होता है', 'Because colds are caused by cold water'],
      ['क्योंकि एंटीबायोटिक्स केवल सर्दियों में काम करते हैं', 'Because antibiotics work only in winter'],
      ['क्योंकि सर्दी के जीवाणु तुरंत नष्ट हो जाते हैं', 'Because cold bacteria dissolve on their own'],
    ],
    'पहला वाक्य बताता है कि एंटीबायोटिक्स जीवाणु (bacterial) संक्रमण ठीक करते हैं, विषाणु (viruses) से होने वाले जुकाम पर बेअसर हैं।',
    'Antibiotics cure bacterial infections, whereas common colds are caused by viruses.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nप्रश्न: किन दो गलत आदतों से जीवाणुओं में प्रतिरोधक क्षमता (resistance) विकसित होती है?',
    'Read the passage carefully and answer the question:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nQuestion: Which two practices allow bacteria to evolve antibiotic resistance?',
    ['अनावश्यक रूप से एंटीबायोटिक लेना और निर्धारित कोर्स को समय से पहले बंद करना', 'Taking antibiotics unnecessarily or stopping a prescribed course early'],
    [
      ['स्वच्छ पानी पीना और संतुलित आहार लेना', 'Drinking clean water and eating balanced meals'],
      ['चिकित्सक के परामर्श का पूरा पालन करना', 'Completing the full prescribed course'],
      ['नियमित हाथ धोना और पर्याप्त नींद लेना', 'Washing hands regularly and sleeping well'],
    ],
    'दूसरे वाक्य में "Taking antibiotics unnecessarily or stopping a prescribed course early" स्पष्ट लिखा है।',
    'The second sentence warns against unnecessary antibiotic use and stopping a prescribed course early.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nप्रश्न: जीवाणुओं में प्रतिरोध विकसित होने का भावी परिणाम क्या होता है?',
    'Read the passage carefully and answer the question:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nQuestion: What is the future consequence of bacteria evolving resistance?',
    ['भविष्य के चिकित्सा उपचार विफल हो सकते हैं', 'Future treatments may fail'],
    [
      ['भविष्य में दवाइयों की कीमत शून्य हो जाएगी', 'Medicines will become unnecessary'],
      ['वायरस अपने आप एंटीबायोटिक में बदल जाएँगे', 'Viruses will turn into useful nutrients'],
      ['सभी रोग एक दिन में समाप्त हो जाएँगे', 'All diseases will vanish permanently'],
    ],
    'अंतिम शब्द "making future treatments fail" भावी खतरे को स्पष्ट करते हैं।',
    'The closing phrase warns that resistance results in "making future treatments fail."',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nप्रश्न: गद्यांश में प्रयुक्त "powerless" शब्द में प्रत्यय (suffix) "-less" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Antibiotics cure bacterial infections, yet they are powerless against common colds caused by viruses. Taking antibiotics unnecessarily or stopping a prescribed course early allows surviving bacteria to evolve resistance, making future treatments fail."\nQuestion: What does the suffix "-less" indicate in "powerless"?',
    ['रहित / बिना (Without)', 'Without or lacking'],
    [
      ['से भरा हुआ (Full of)', 'Full of'],
      ['की ओर (Toward)', 'Toward'],
      ['अत्यंत शक्तिशाली (Extremely strong)', 'Extremely strong'],
    ],
    '"-less" प्रत्यय का अर्थ "बिना / रहित" होता है, जैसे powerless (शक्तिहीन), careless (लापरवाह)।',
    'The suffix "-less" means "without" or "lacking," so "powerless" means lacking power or effect.',
    'EASY',
    { grammarRuleHi: 'Suffix "-less" किसी संज्ञा के अंत में जुड़कर "रहित/बिना" अर्थ वाला विशेषण बनाता है।' }
  ),

  // Passage 41: Origami and Geometry
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nप्रश्न: ओरिगामी (कागज मोड़ने की कला) ने आधुनिक इंजीनियरों को किन दो क्षेत्रों के उपकरण बनाने में प्रेरित किया है?',
    'Read the passage carefully and answer the question:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nQuestion: Which two engineering applications mentioned in the passage have been inspired by origami?',
    ['अंतरिक्ष दूरबीन (Space telescopes) और चिकित्सा स्टेंट (Medical stents)', 'Space telescopes and medical stents'],
    [
      ['कोयला खनन और रेल पटरी', 'Coal mining and railway tracks'],
      ['समुद्री पनडुब्बियाँ और पुल', 'Submarines and suspension bridges'],
      ['ईंट के भट्टे और सड़क रोलर', 'Brick kilns and road rollers'],
    ],
    'पहले वाक्य में "space telescopes and medical stents" स्पष्ट लिखा है।',
    'The first sentence cites space telescopes and medical stents.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nप्रश्न: सटीक सिलवटों (creases) के सहारे मोड़ने से अंतरिक्ष यान के प्रक्षेपण में क्या लाभ होता है?',
    'Read the passage carefully and answer the question:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nQuestion: How does folding along precise creases help during space launches?',
    ['बड़ी संरचनाएँ प्रक्षेपण के लिए छोटे स्थान में सिमट जाती हैं और कक्षा में सुगमता से खुलती हैं', 'Bulky structures pack compactly for launch and unfold smoothly in orbit'],
    [
      ['कागज अंतरिक्ष में धातु से अधिक भारी हो जाता है', 'Paper becomes heavier than steel in space'],
      ['रॉकेट को बिना ईंधन के उड़ने की शक्ति मिलती है', 'Rockets fly without any fuel'],
      ['दूरबीनें प्रक्षेपण के बाद सदा बंद रहती हैं', 'Telescopes remain permanently folded'],
    ],
    'दूसरे वाक्य में "bulky structures pack compactly for launch and unfold smoothly in orbit" लिखा है।',
    'Bulky structures pack compactly for launch and unfold smoothly once in orbit.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nप्रश्न: गद्यांश में "compactly" का विलोम क्या होगा?',
    'Read the passage carefully and answer the question:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nQuestion: Which word in the passage contrasts most closely with "compactly"?',
    ['विशाल/भारी-भरकम (Bulky)', 'Bulky'],
    [
      ['सपाट (Flat)', 'Flat'],
      ['सटीक (Precise)', 'Precise'],
      ['सुगम (Smoothly)', 'Smoothly'],
    ],
    '"Compactly" का अर्थ छोटे स्थान में सिमटा हुआ है, जबकि "Bulky" का अर्थ बड़ा और अधिक स्थान घेरने वाला होता है।',
    '"Compactly" implies tightly packed in small space, contrasting with "bulky" (large and unwieldy).',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nप्रश्न: यह गद्यांश किस व्यापक विचार को दर्शाता है?',
    'Read the passage carefully and answer the question:\n"Origami, the traditional art of paper folding, has inspired modern engineers designing space telescopes and medical stents. By folding flat sheets along precise creases, bulky structures pack compactly for launch and unfold smoothly in orbit."\nQuestion: What broader theme does this passage illustrate?',
    ['पारंपरिक कला रूप अत्याधुनिक विज्ञान और अभियांत्रिकी में नवाचार को प्रेरित कर सकते हैं', 'Traditional arts can inspire cutting-edge engineering solutions'],
    [
      ['अंतरिक्ष अभियांत्रिकी को कला से कोई सरोकार नहीं है', 'Engineering has nothing to learn from art'],
      ['कागज अंतरिक्ष यात्रा में मुख्य निर्माण सामग्री है', 'Ordinary paper is the primary material for spacecraft'],
      ['चिकित्सा विज्ञान केवल खगोल विज्ञान पर निर्भर है', 'Medicine depends entirely on astronomy'],
    ],
    'गद्यांश दिखाता है कि कागज मोड़ने की प्राचीन कला ने आधुनिक अंतरिक्ष व चिकित्सा इंजीनियरिंग को नई दिशा दी है।',
    'The passage demonstrates how a traditional art form inspires advanced aerospace and medical engineering.',
    'HARD'
  ),

  // Passage 42: School Gardens
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nप्रश्न: विद्यालय की रसोई-बगिया (school kitchen gardens) परिसर के बंजर कोनों को किस रूप में बदल देती हैं?',
    'Read the passage carefully and answer the question:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nQuestion: What do school kitchen gardens transform barren campus corners into?',
    ['जीवंत कक्षाओं (Living classrooms) में', 'Living classrooms'],
    [
      ['पक्के पार्किंग स्थलों में', 'Paved parking zones'],
      ['इनडोर खेल सभागारों में', 'Indoor sports auditoriums'],
      ['कचरा संग्रहण केंद्रों में', 'Garbage dumping yards'],
    ],
    'पहले वाक्य में स्पष्ट लिखा है: "into living classrooms."',
    'The first sentence states they turn barren corners into living classrooms.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nप्रश्न: बगीचे में छात्र कौन-सी दो वैज्ञानिक/शैक्षिक गतिविधियाँ करते हैं?',
    'Read the passage carefully and answer the question:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nQuestion: Which two observational or learning tasks do students perform in the garden?',
    ['पौधों की वृद्धि मापना और परागणकों का निकट से अवलोकन करना', 'Measuring plant growth and observing pollinators up close'],
    [
      ['मोबाइल पर चित्र संपादित करना', 'Editing photographs on tablets'],
      ['केवल सूखे पत्ते जलाना', 'Burning dry leaves in piles'],
      ['रासायनिक रंगों का निर्माण करना', 'Manufacturing synthetic dyes'],
    ],
    'दूसरे वाक्य में "measure plant growth, observe pollinators up close" का उल्लेख है।',
    'Students measure plant growth and observe pollinators up close.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nप्रश्न: उगाई गई सब्जियों (पालक व टमाटर) का उपयोग कहाँ होता है?',
    'Read the passage carefully and answer the question:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nQuestion: How are the harvested spinach and tomatoes used?',
    ['वे छात्रों के मध्याह्न भोजन (midday meals) को पौष्टिक बनाते हैं', 'They enrich the students’ midday meals'],
    [
      ['उन्हें केवल प्रदर्शन के लिए काँच के बक्सों में रखा जाता है', 'They are kept in glass display cases'],
      ['उन्हें दूसरे देश निर्यात किया जाता है', 'They are exported overseas'],
      ['उनसे कागज की लुगदी बनाई जाती है', 'They are pulped to make paper'],
    ],
    'अंतिम वाक्य में "enrich their midday meals" लिखा है।',
    'The passage says the harvested produce enriches their midday meals.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nप्रश्न: गद्यांश में "enrich" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"School kitchen gardens turn barren corners of a campus into living classrooms. Students measure plant growth, observe pollinators up close, and harvest fresh spinach and tomatoes that enrich their midday meals."\nQuestion: What does "enrich" mean in the final clause?',
    ['गुणवत्ता और पोषण मूल्य को बढ़ाना', 'To improve the quality or nutritional value of'],
    [
      ['कीमत में अत्यधिक वृद्धि करना', 'To make unaffordable'],
      ['स्वाद को फीका करना', 'To make bland and tasteless'],
      ['मात्रा में कमी करना', 'To reduce in portion size'],
    ],
    '"Enrich" का अर्थ किसी वस्तु (यहाँ भोजन) को अधिक पोषक, समृद्ध और गुणवत्तापूर्ण बनाना है।',
    '"Enrich" here means to enhance the quality, flavor, and nutritional value of the meals.',
    'MEDIUM'
  ),

  // Passage 43: Critical Role of Sleep in Memory
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nप्रश्न: परीक्षा से पहले पूरी रात जागकर रटने (cramming) का स्मरण शक्ति पर क्या प्रभाव पड़ता है?',
    'Read the passage carefully and answer the question:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nQuestion: How does cramming all night affect recall before an exam?',
    ['यह मदद करने के बजाय स्मरण शक्ति को कमजोर करता है', 'It undermines recall rather than helping it'],
    [
      ['यह स्मरण शक्ति को दोगुना मजबूत करता है', 'It doubles long-term recall'],
      ['यह गहरी नींद की आवश्यकता को समाप्त करता है', 'It removes the need for sleep'],
      ['यह परीक्षा के प्रश्नों को सरल बनाता है', 'It makes test questions shorter'],
    ],
    'पहले वाक्य में स्पष्ट है: "undermines recall rather than helping it."',
    'The first sentence states that all-night cramming undermines recall rather than helping it.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nप्रश्न: गहरी नींद के दौरान मस्तिष्क नए सीखे तथ्यों के साथ क्या करता है?',
    'Read the passage carefully and answer the question:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nQuestion: What does the brain do with newly learned facts during deep sleep?',
    ['उन्हें दोहराता है और अल्पकालिक स्मृति से टिकाऊ दीर्घकालिक स्मृति में स्थानांतरित करता है', 'It replays them and transfers them from short-term storage into long-term memory'],
    [
      ['उन्हें तुरंत मस्तिष्क से मिटा देता है', 'It erases them completely'],
      ['उन्हें केवल सपनों की तस्वीरों में बदलता है', 'It hides them permanently'],
      ['उन्हें मांसपेशियों में संग्रहीत करता है', 'It stores them in muscle fibers'],
    ],
    'दूसरे वाक्य के अनुसार मस्तिष्क गहरी नींद में तथ्यों को दोहराकर उन्हें दीर्घकालिक स्मृति में स्थानांतरित करता है।',
    'During deep sleep, the brain replays new facts and transfers them to durable long-term memory.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nप्रश्न: गद्यांश में "fragile" शब्द का विलोम शब्द कौन-सा प्रयुक्त हुआ है?',
    'Read the passage carefully and answer the question:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nQuestion: Which word in the passage is used as an antonym of "fragile"?',
    ['टिकाऊ / स्थायी (Durable)', 'Durable'],
    [
      ['नव-शिक्षित (Newly learned)', 'Newly learned'],
      ['अल्पकालिक (Short-term)', 'Short-term'],
      ['गहन (Deep)', 'Deep'],
    ],
    '"Fragile" (नाजुक/अस्थायी) के विपरीत "Durable" (मजबूत/टिकाऊ) शब्द का प्रयोग गद्यांश में किया गया है।',
    'The passage directly contrasts "fragile short-term storage" with "durable long-term memory."',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nप्रश्न: इस गद्यांश से परीक्षा की तैयारी करने वाले छात्र क्या व्यावहारिक निष्कर्ष निकाल सकते हैं?',
    'Read the passage carefully and answer the question:\n"Cramming all night before an exam undermines recall rather than helping it. During deep sleep, the brain replays newly learned facts and transfers them from fragile short-term storage into durable long-term memory."\nQuestion: What practical advice can a student draw from this passage?',
    ['पढ़े हुए को पक्का करने के लिए परीक्षा से पहले पर्याप्त गहरी नींद लेना आवश्यक है', 'Getting adequate sleep before an exam is essential to consolidate learning'],
    [
      ['परीक्षा से पहले बिल्कुल न पढ़ना और केवल सोना', 'Never study at all before an exam'],
      ['परीक्षा की रात तीन कप कॉफी पीकर जागना', 'Stay awake all night drinking coffee'],
      ['सुबह परीक्षा कक्ष में पहुँचकर पहली बार किताब खोलना', 'Open the book only outside the exam hall'],
    ],
    'गद्यांश यह सिद्ध करता है कि स्मृति स्थिरीकरण के लिए पर्याप्त गहरी नींद अनिवार्य है।',
    'Because deep sleep transfers facts to long-term memory, adequate rest before exams aids recall.',
    'EASY'
  ),

  // Passage 44: Language Diversity & Translation
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nप्रश्न: गद्यांश के अनुसार प्रत्येक क्षेत्रीय भाषा अपने भीतर क्या सहेजे हुए है?',
    'Read the passage carefully and answer the question:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nQuestion: What does every regional language carry according to the passage?',
    ['सदियों में रचा गया अपूरणीय पारिस्थितिक ज्ञान, स्थानीय लोकोक्तियाँ और लोकगीत', 'Irreplaceable ecological wisdom, local proverbs, and folk songs'],
    [
      ['केवल आधुनिक कंप्यूटर कोडिंग शब्दावली', 'Only modern computer coding terms'],
      ['विदेशी व्यापारिक कानून', 'Foreign commercial tariffs'],
      ['मानकीकृत गणितीय प्रतीक', 'Universal algebraic symbols alone'],
    ],
    'पहले वाक्य में "irreplaceable ecological wisdom, local proverbs, and folk songs" लिखा है।',
    'The first sentence lists irreplaceable ecological wisdom, local proverbs, and folk songs.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nप्रश्न: साहित्यिक अनुवाद (literary translation) किस प्रकार का कार्य करता है?',
    'Read the passage carefully and answer the question:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nQuestion: How does literary translation function according to the passage?',
    ['यह भाषाई विविधता को मिटाए बिना विभिन्न भाषाओं के बीच विचारों के आदान-प्रदान का सेतु बनता है', 'It bridges different languages to share ideas without erasing linguistic diversity'],
    [
      ['यह सभी स्थानीय बोलियों को समाप्त कर एक भाषा बनाता है', 'It eliminates all regional dialects into one tongue'],
      ['यह केवल सरकारी आदेशों को कठिन बनाता है', 'It complicates official legal notices'],
      ['यह लोकगीतों को बदलने से रोकता है', 'It forbids people from learning second languages'],
    ],
    'दूसरे वाक्य में बताया गया है कि अनुवाद एक पुल (bridge) का कार्य करता है जो विविधता नष्ट किए बिना विचारों को साझा करता है।',
    'The passage describes translation as a bridge enabling shared ideas without erasing diversity.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nप्रश्न: गद्यांश में "irreplaceable" शब्द की संरचना के अनुसार इसका अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nQuestion: What does "irreplaceable" mean?',
    ['अद्वितीय / जिसकी भरपाई या प्रतिस्थापन असंभव हो', 'Impossible to replace if lost'],
    [
      ['आसानी से बदला जाने योग्य', 'Easily substituted'],
      ['सस्ता और साधारण', 'Cheap and ordinary'],
      ['पुराना और अनुपयोगी', 'Outdated and useless'],
    ],
    'उपसर्ग "ir-" (नहीं) + replace + "-able" (योग्य) मिलकर "जिसकी जगह कोई दूसरा न ले सके" अर्थ बनाते हैं।',
    '"Irreplaceable" (ir- + replace + -able) means so valuable or unique that nothing can replace it.',
    'MEDIUM',
    { grammarRuleHi: 'शब्द के आरंभ में r होने पर नकारात्मक उपसर्ग प्रायः "ir-" लगता है (जैसे irreplaceable, irregular)।' }
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nप्रश्न: गद्यांश में "tongues" शब्द किस अर्थ में प्रयुक्त हुआ है?',
    'Read the passage carefully and answer the question:\n"Every regional language carries irreplaceable ecological wisdom, local proverbs, and folk songs shaped over centuries. Literary translation acts as a bridge, allowing speakers of different tongues to share ideas without erasing linguistic diversity."\nQuestion: What does "tongues" signify in the phrase "speakers of different tongues"?',
    ['भाषाएँ (Languages)', 'Languages'],
    [
      ['भोजन के स्वाद (Flavors)', 'Flavors'],
      ['जूते के हिस्से (Shoe parts)', 'Shoe parts'],
      ['आग की लपटें (Flames)', 'Flames'],
    ],
    'साहित्यिक प्रयोग में "tongue" का अर्थ "भाषा" भी होता है (जैसे mother tongue)।',
    'In the phrase "speakers of different tongues," "tongues" is a synonym for languages.',
    'EASY'
  ),

  // Passage 45: Light Pollution & Stargazing
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nप्रश्न: अधिकांश शहरवासियों को आकाशगंगा (Milky Way) क्यों दिखाई नहीं देती?',
    'Read the passage carefully and answer the question:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nQuestion: Why is the Milky Way hidden from most city dwellers?',
    ['असुरक्षित स्ट्रीटलाइट्स की ऊपर की ओर जाने वाली अत्यधिक चमक के कारण', 'Due to excessive upward glare from unshielded streetlights'],
    [
      ['क्योंकि आकाशगंगा केवल दक्षिणी ध्रुव पर रहती है', 'Because the Milky Way exists only over oceans'],
      ['क्योंकि शहरों के ऊपर हमेशा घने बादल रहते हैं', 'Because thick clouds cover cities permanently'],
      ['क्योंकि तारे रात में प्रकाश देना बंद कर देते हैं', 'Because stars stop shining at night'],
    ],
    'पहला वाक्य बताता है कि बिना ढकी स्ट्रीटलाइट्स से ऊपर जाने वाली चमक रात के आकाश को धुंधला कर देती है।',
    'The first sentence explains that upward glare from unshielded streetlights washes out the night sky.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nप्रश्न: बाहरी लैंपों पर आवरण (shielding) लगाकर रोशनी को नीचे की ओर केंद्रित करने के क्या दो लाभ हैं?',
    'Read the passage carefully and answer the question:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nQuestion: What two benefits come from shielding outdoor lamps downward?',
    ['तारों भरा आकाश पुनः दिखाई देना और व्यर्थ बिजली की खपत कम होना', 'Restoring starry skies and cutting wasted electricity'],
    [
      ['सड़कों पर अंधेरा बढ़ना और अपराध बढ़ना', 'Darkening pavements completely'],
      ['बल्बों की रोशनी नीली हो जाना', 'Turning lamp light blue'],
      ['पक्षी प्रवास को रोकना', 'Stopping nocturnal bird flight'],
    ],
    'दूसरे वाक्य में "restores starry skies while cutting wasted electricity" लिखा है।',
    'Shielding lamps downward restores starry skies while cutting wasted electricity.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nप्रश्न: गद्यांश में "dwellers" शब्द का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nQuestion: What does "dwellers" mean in "city dwellers"?',
    ['निवासी / रहने वाले लोग', 'Inhabitants or residents'],
    [
      ['विदेशी पर्यटक', 'Foreign tourists'],
      ['यात्री वाहन', 'Commuter vehicles'],
      ['गगनचुंबी इमारतें', 'Tall skyscrapers'],
    ],
    '"Dwell" का अर्थ निवास करना और "dweller" का अर्थ निवासी होता है।',
    '"City dwellers" means people who live in a city; inhabitants.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nप्रश्न: "washes out" वाक्यांश का यहाँ क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Excessive upward glare from unshielded streetlights washes out the night sky, hiding the Milky Way from most city dwellers. Shielding outdoor lamps so light shines downward restores starry skies while cutting wasted electricity."\nQuestion: What does the phrasal verb "washes out" mean in this passage?',
    ['चमक के कारण धुंधला कर देना या फीका कर देना', 'Makes faint or obscures with excessive brightness'],
    [
      ['पानी से धोकर साफ करना', 'Cleans thoroughly with soap and water'],
      ['अधिक गहरा और चमकदार बनाना', 'Makes darker and sharper'],
      ['इंद्रधनुषी रंग भर देना', 'Paints with rainbow colors'],
    ],
    'यहाँ "washes out the night sky" का अर्थ तेज कृत्रिम रोशनी से तारों की चमक को फीका या अदृश्य कर देना है।',
    'In optics and photography, "wash out" means to overpower or fade out faint details with excessive light.',
    'HARD'
  ),

  // Passage 46: Cooperative Learning
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nप्रश्न: लघु-समूह परियोजनाएँ (small-group projects) कब सफल होती हैं?',
    'Read the passage carefully and answer the question:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nQuestion: When do small-group projects succeed according to the passage?',
    ['जब शिक्षक प्रत्येक सदस्य को स्पष्ट व्यक्तिगत भूमिकाएँ सौंपते हैं', 'When teachers assign clear individual roles'],
    [
      ['जब परियोजना किसी एक छात्र को अकेले दी जाती है', 'When one student works alone'],
      ['जब समय-सीमा और भूमिकाओं का कोई नियम नहीं होता', 'When there are no roles or deadlines'],
      ['जब छात्र केवल अंतिम परिणाम की नकल करते हैं', 'When students copy the final project'],
    ],
    'पहला वाक्य बताता है कि समूह परियोजनाएँ तब सफल होती हैं जब शिक्षक स्पष्ट व्यक्तिगत भूमिकाएँ (recorder, presenter, timekeeper) तय करते हैं।',
    'They succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nप्रश्न: साझा जवाबदेही (shared accountability) किस समस्या को रोकती है?',
    'Read the passage carefully and answer the question:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nQuestion: What problem does shared accountability prevent?',
    ['एक ही परिश्रमी छात्र पर पूरा कार्यभार पड़ना जबकि अन्य निष्क्रिय रहें', 'One diligent student carrying the whole workload while others stay passive'],
    [
      ['शिक्षक द्वारा समूह कार्य का मूल्यांकन करना', 'The teacher grading the completed project'],
      ['छात्रों द्वारा प्रस्तुतीकरण समय पर पूरा करना', 'Groups finishing presentations on time'],
      ['समूह सदस्यों द्वारा आपस में चर्चा करना', 'Students discussing ideas politely'],
    ],
    'दूसरे वाक्य में "prevents one diligent student from carrying the entire workload while others remain passive" स्पष्ट है।',
    'Shared accountability stops one diligent student from doing all the work while others stay passive.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nप्रश्न: गद्यांश में "diligent" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nQuestion: What does "diligent" mean in "one diligent student"?',
    ['मेहनती और कर्तव्यनिष्ठ', 'Hardworking and conscientious'],
    [
      ['आलसी और टालमटोल करने वाला', 'Lazy and careless'],
      ['अक्खड़ और झगड़ालू', 'Rude and quarrelsome'],
      ['भुलक्कड़ और लापरवाह', 'Forgetful and distracted'],
    ],
    '"Diligent" का अर्थ लगन और परिश्रम से कार्य करने वाला होता है।',
    '"Diligent" means showing persistent, careful effort in one’s work.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nप्रश्न: गद्यांश में किस शब्द का विलोम "active" होगा?',
    'Read the passage carefully and answer the question:\n"Small-group projects succeed when teachers assign clear individual roles such as recorder, presenter, and timekeeper. Shared accountability prevents one diligent student from carrying the entire workload while others remain passive."\nQuestion: Which word in the passage is the direct antonym of "active"?',
    ['निष्क्रिय (Passive)', 'Passive'],
    [
      ['साझा (Shared)', 'Shared'],
      ['स्पष्ट (Clear)', 'Clear'],
      ['सफल (Succeed)', 'Succeed'],
    ],
    'अंतिम शब्द "passive" (निष्क्रिय), "active" (सक्रिय) का सीधा विलोम है।',
    '"Passive" is the direct antonym of "active."',
    'EASY'
  ),

  // Passage 47: Clean Drinking Water
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nप्रश्न: विद्यालय परिसर में सुरक्षित पेयजल की उपलब्धता से कौन-से दो बड़े लाभ होते हैं?',
    'Read the passage carefully and answer the question:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nQuestion: What two major benefits arise from safe drinking water on school premises?',
    ['जलजनित रोगों में भारी कमी और बालिकाओं की उपस्थिति में वृद्धि', 'Dramatically reducing waterborne illnesses and boosting girls’ attendance'],
    [
      ['क्रीड़ा अवधि का समाप्त होना और लंबी छुट्टियाँ', 'Canceling sports periods and extending holidays'],
      ['पाठ्यपुस्तकों की छपाई का खर्च बढ़ना', 'Increasing textbook printing costs'],
      ['कक्षाओं की संख्या में कमी आना', 'Reducing total classrooms'],
    ],
    'पहले वाक्य में "reduces waterborne illnesses and boosts girls’ attendance" लिखा है।',
    'The first sentence notes reduced waterborne illnesses and increased girls’ attendance.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nप्रश्न: स्वच्छ जलयोजन (hydration) शिक्षण के लंबे घंटों में छात्रों की कैसे सहायता करता है?',
    'Read the passage carefully and answer the question:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nQuestion: How does clean hydration help students during long instructional hours?',
    ['यह उनके मस्तिष्क को सतर्क और सक्रिय बनाए रखता है', 'It keeps young minds alert'],
    [
      ['यह उन्हें तुरंत नींद लाता है', 'It makes them drowsy'],
      ['यह केवल शारीरिक लंबाई बढ़ाता है', 'It doubles physical height'],
      ['यह भूख को पूरी तरह मिटाता है', 'It removes the need for lunch'],
    ],
    'दूसरे वाक्य के अनुसार स्वच्छ जलयोजन युवा मस्तिष्क को सतर्क (alert) रखता है।',
    'The second sentence states that clean hydration keeps young minds alert.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nप्रश्न: "waterborne illnesses" का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nQuestion: What does "waterborne illnesses" mean?',
    ['दूषित जल के माध्यम से फैलने वाले रोग', 'Diseases transmitted through contaminated water'],
    [
      ['समुद्री जहाज में लगने वाली चोटें', 'Injuries suffered on ocean ships'],
      ['तेज हवा से फैलने वाले रोग', 'Diseases spread solely by wind'],
      ['पानी की कमी से सूखने वाले पौधे', 'Plants wilting from drought'],
    ],
    '"Waterborne" में "-borne" का अर्थ "द्वारा वाहित/फैला हुआ" है, अतः waterborne illnesses का अर्थ दूषित जल से होने वाली बीमारियाँ (जैसे हैजा, टाइफाइड) है।',
    '"Waterborne" means carried or transmitted by water, referring to diseases spread via unsafe water.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nप्रश्न: गद्यांश में "premises" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Access to safe drinking water within school premises dramatically reduces waterborne illnesses and boosts girls’ attendance. Clean hydration keeps young minds alert throughout long instructional hours."\nQuestion: What does "premises" mean in "school premises"?',
    ['भवन और उससे जुड़ी भूमि (विद्यालय परिसर)', 'A building together with its grounds'],
    [
      ['तर्क के प्रारंभिक सिद्धांत', 'Initial logical assumptions'],
      ['केवल प्रधानाचार्य का कक्ष', 'Only the principal’s desk'],
      ['वार्षिक परीक्षा की तिथियाँ', 'Annual examination dates'],
    ],
    'ध्यान दें: बहुवचन रूप "premises" का एक अर्थ "भवन व परिसर" होता है, जबकि "premise" (एकवचन) का अर्थ "आधार वाक्य/मान्यता" होता है।',
    '"School premises" refers to the school buildings and surrounding land/campus.',
    'HARD'
  ),

  // Passage 48: Handwriting vs Typing
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nप्रश्न: टाइपिंग की तुलना में हाथ से नोट्स बनाना अवधारणात्मक समझ को गहरा क्यों बनाता है?',
    'Read the passage carefully and answer the question:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nQuestion: Why does taking notes by hand deepen conceptual processing compared to typing?',
    ['क्योंकि धीमी गति के कारण छात्रों को सक्रिय सुनकर विचारों का सारांश और पुनर्लेखन अपने शब्दों में करना पड़ता है', 'Because its slower pace forces students to listen actively, summarize, and reframe ideas in their own words'],
    [
      ['क्योंकि हाथ से लिखने में हर शब्द की हूबहू नकल आसान होती है', 'Because handwriting lets students copy every single word verbatim'],
      ['क्योंकि टाइपिंग से कंप्यूटर स्क्रीन की बिजली बचती है', 'Because typing uses too much electricity'],
      ['क्योंकि हस्तलेखन में कागज की आवश्यकता नहीं होती', 'Because handwriting requires no paper'],
    ],
    'दूसरे वाक्य में बताया गया है कि धीमी गति के कारण छात्र शब्दशः नहीं लिख पाते, इसलिए उन्हें सक्रिय रूप से सुनकर अपने शब्दों में सार लिखना पड़ता है।',
    'Because handwriting is slower, students must listen actively, summarize, and reframe ideas in their own words.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nप्रश्न: गद्यांश में "verbatim" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nQuestion: What does "verbatim" mean in "transcribe verbatim"?',
    ['शब्दशः / ठीक उन्हीं शब्दों में ज्यों का त्यों', 'Word for word in exactly the same words'],
    [
      ['अत्यंत संक्षेप में', 'In brief bullet points'],
      ['केवल चित्रों के रूप में', 'Solely through diagrams'],
      ['गलत और अधूरे ढंग से', 'Inaccurately and partially'],
    ],
    '"Verbatim" लैटिन मूल का शब्द है जिसका अर्थ "शब्द-दर-शब्द, ज्यों का त्यों" होता है।',
    '"Verbatim" means using the exact same words; word for word.',
    'HARD'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nप्रश्न: गद्यांश के अनुसार व्याख्यान को तेज़ी से लिखने में कौन-सी विधि आगे है?',
    'Read the passage carefully and answer the question:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nQuestion: Which method captures lectures more rapidly according to the passage?',
    ['टाइपिंग (Typing)', 'Typing'],
    [
      ['हाथ से लिखना (Handwriting)', 'Handwriting'],
      ['चित्रकारी (Sketching)', 'Sketching'],
      ['मौन मनन (Silent meditation)', 'Silent meditation'],
    ],
    'प्रारंभिक वाक्यांश "Although typing captures lectures rapidly" इसे स्पष्ट करता है।',
    'The opening clause acknowledges that typing captures lectures rapidly.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nप्रश्न: "reframe ideas" का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Although typing captures lectures rapidly, taking notes by hand deepens conceptual processing. Because handwriting is slower, students cannot transcribe verbatim; they must listen actively, summarize, and reframe ideas in their own words."\nQuestion: What does "reframe ideas" mean?',
    ['विचारों को नए ढंग से अपने शब्दों में ढालकर व्यक्त करना', 'To express concepts anew from one’s own understanding'],
    [
      ['तस्वीरों पर लकड़ी का फ्रेम लगाना', 'To mount pictures in wooden frames'],
      ['मूल विचारों को पूरी तरह बदलकर गलत अर्थ निकालना', 'To distort facts intentionally'],
      ['विचारों को लिखने से मना कर देना', 'To refuse to record ideas'],
    ],
    '"Reframe" का अर्थ किसी विचार को नई संरचना या अपने शब्दों में पुनः प्रस्तुत करना है।',
    '"Reframe" means expressing an idea in a different, personally meaningful way.',
    'MEDIUM'
  ),

  // Passage 49: Urban Rooftop Farming
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nप्रश्न: छत पर बनी सब्जियों की क्यारियाँ (rooftop vegetable beds) शहर की छतों को किस रूप में बदल देती हैं?',
    'Read the passage carefully and answer the question:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nQuestion: Into what do rooftop vegetable beds convert unused concrete terraces?',
    ['उत्पादक शहरी खेतों (Productive urban farms) में', 'Productive urban farms'],
    [
      ['भारी वाहन पार्किंग डेक में', 'Parking decks for heavy trucks'],
      ['सौर दर्पण प्रयोगशालाओं में', 'Solar mirror factories'],
      ['सूखी पथरीली बंजर भूमि में', 'Dry barren wastelands'],
    ],
    'पहले वाक्य में लिखा है: "convert unused concrete terraces into productive urban farms."',
    'The first sentence states they convert unused concrete terraces into productive urban farms.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nप्रश्न: ताजी हरी सब्जियाँ उपलब्ध कराने के अतिरिक्त नम मिट्टी की परत इमारत को क्या लाभ देती है?',
    'Read the passage carefully and answer the question:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nQuestion: Besides providing fresh greens, what extra benefit does the moist soil layer offer?',
    ['यह सबसे ऊपरी मंजिल के कमरों को दोपहर की भीषण गर्मी से बचाती (इंसुलेट करती) है', 'It insulates top-floor rooms against blistering afternoon heat'],
    [
      ['यह छत की दीवारों को चमकीले रंग में रंगती है', 'It paints walls in bright colors'],
      ['यह लिफ्ट की गति को दोगुना करती है', 'It speeds up building elevators'],
      ['यह सर्दियों में बर्फबारी को आकर्षित करती है', 'It triggers heavy indoor snowfall'],
    ],
    'दूसरे वाक्य में बताया गया है कि नम मिट्टी की परत ऊपरी मंजिल के कमरों को तपती गर्मी से ऊष्मारोधी सुरक्षा (insulates) देती है।',
    'The moist soil layer insulates top-floor rooms against blistering afternoon heat.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nप्रश्न: गद्यांश में "blistering" शब्द किसकी तीव्रता को दर्शाता है?',
    'Read the passage carefully and answer the question:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nQuestion: What does "blistering" describe in "blistering afternoon heat"?',
    ['अत्यधिक झुलसाने वाली तीव्र गर्मी', 'Intense, scorching heat'],
    [
      ['हल्की ठंडी फुहार', 'Cool refreshing drizzle'],
      ['सुबह की कोमल धूप', 'Gentle morning warmth'],
      ['शाम की मंद हवा', 'Mild evening breeze'],
    ],
    '"Blistering heat" का अर्थ इतनी तेज गर्मी है जो त्वचा पर छाले डाल दे, अर्थात् भीषण या झुलसाने वाली गर्मी।',
    '"Blistering" means intensely hot, as if capable of causing blisters.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nप्रश्न: "fresh greens within walking distance" से परिवहन पर क्या अप्रत्यक्ष प्रभाव अनुमानित होता है?',
    'Read the passage carefully and answer the question:\n"Rooftop vegetable beds convert unused concrete terraces into productive urban farms. Besides supplying fresh greens within walking distance, the moist soil layer insulates top-floor rooms against blistering afternoon heat."\nQuestion: What indirect advantage is implied by having "fresh greens within walking distance"?',
    ['लंबी दूरी से सब्जियाँ लाने वाले परिवहन और ईंधन की खपत कम होती है', 'It reduces the need for long-distance food transport'],
    [
      ['सब्जियों को हवाई जहाज से मँगवाना अनिवार्य होता है', 'Vegetables must be flown in by airplanes'],
      ['लोगों को पैदल चलना बंद करना पड़ता है', 'People must stop walking entirely'],
      ['बाजार हमेशा के लिए बंद हो जाते हैं', 'All local markets shut down'],
    ],
    'जब ताजी सब्जियाँ पैदल दूरी पर ही उग आती हैं, तो दूर से माल ढोने की जरूरत और परिवहन लागत घटती है।',
    'Growing food within walking distance reduces reliance on long-distance shipping.',
    'HARD'
  ),

  // Passage 50: Financial Literacy for Youth
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nप्रश्न: किशोरों को चक्रवृद्धि ब्याज (compound interest) के दोनों पक्ष सिखाने का क्या परिणाम होता है?',
    'Read the passage carefully and answer the question:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nQuestion: What does teaching adolescents how compound interest works for savings and against debt build?',
    ['आजीवन वित्तीय विवेक (Lifelong financial prudence)', 'Lifelong financial prudence'],
    [
      ['अंधाधुंध ऋण लेने की आदत', 'A habit of reckless borrowing'],
      ['बैंक खातों से दूरी', 'Fear of using bank accounts'],
      ['केवल नकद खर्च करने की जिद', 'Refusal to save any income'],
    ],
    'पहले वाक्य में स्पष्ट लिखा है: "builds lifelong financial prudence."',
    'The first sentence states that it builds lifelong financial prudence.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nप्रश्न: प्रारंभिक बजट बनाने की आदत युवाओं को किन दो बातों में अंतर करना सिखाती है?',
    'Read the passage carefully and answer the question:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nQuestion: What two things do early budgeting habits help young adults distinguish between?',
    ['वास्तविक आवश्यकताओं और आवेगी इच्छाओं के बीच', 'Genuine needs and impulsive wants'],
    [
      ['सोने और चाँदी के सिक्कों के बीच', 'Gold coins and silver coins'],
      ['गणित और इतिहास की पुस्तकों के बीच', 'Mathematics and history books'],
      ['राष्ट्रीय और अंतर्राष्ट्रीय मुद्राओं के बीच', 'Domestic and foreign currencies'],
    ],
    'दूसरे वाक्य में "distinguish genuine needs from impulsive wants" लिखा है।',
    'Early budgeting helps them distinguish genuine needs from impulsive wants.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nप्रश्न: गद्यांश में प्रयुक्त "prudence" शब्द का सबसे उपयुक्त अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nQuestion: Which option best defines "prudence" as used in the passage?',
    ['भविष्य का सोचकर समझदारी और सावधानी से निर्णय लेना', 'Careful judgment and wise foresight in managing affairs'],
    [
      ['बिना सोचे-समझे धन उड़ाना', 'Reckless overspending'],
      ['अत्यधिक घमंड और अहंकार', 'Extreme pride and arrogance'],
      ['अस्थायी आलस्य', 'Temporary laziness'],
    ],
    '"Prudence" का अर्थ विवेक, दूरदर्शिता और सावधानीपूर्ण प्रबंधन है।',
    '"Prudence" means wisdom, caution, and sound judgment, especially regarding the future.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nप्रश्न: "impulsive wants" का क्या तात्पर्य है?',
    'Read the passage carefully and answer the question:\n"Teaching adolescents how compound interest works both for savings and against unpaid credit-card debt builds lifelong financial prudence. Early budgeting habits help young adults distinguish genuine needs from impulsive wants."\nQuestion: What are "impulsive wants"?',
    ['बिना पूर्व-योजना के अचानक मन में उठने वाली इच्छाएँ', 'Sudden desires acted upon without careful thought'],
    [
      ['भोजन, आश्रय और चिकित्सा जैसी मूलभूत जरूरतें', 'Basic essentials like food and medicine'],
      ['वर्षों की बचत से पूरी होने वाली योजनाएँ', 'Long-term retirement savings plans'],
      ['सरकार द्वारा निर्धारित अनिवार्य कर', 'Mandatory government taxes'],
    ],
    '"Impulsive" का अर्थ आवेग में आकर बिना सोचे-समझे किया गया कार्य या इच्छा है।',
    '"Impulsive wants" are sudden urges to buy or spend without prior thought or necessity.',
    'MEDIUM'
  ),

  // Passage 51: Multilingualism & Brain Flexibility
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nप्रश्न: दो या अधिक भाषाओं के बीच सहजता से स्विच करने से मस्तिष्क के किस तंत्र का व्यायाम होता है?',
    'Read the passage carefully and answer the question:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nQuestion: Which brain system is exercised by switching between two or more languages?',
    ['मस्तिष्क का कार्यकारी नियंत्रण नेटवर्क (Executive control network)', 'The brain’s executive control network'],
    [
      ['पाचन तंत्र नेटवर्क', 'The digestive control system'],
      ['रीढ़ की हड्डी का प्रतिवर्ती मार्ग', 'Spinal reflex arcs alone'],
      ['केवल दृष्टि तंत्रिका', 'Only the optic nerve'],
    ],
    'पहले वाक्य में लिखा है: "exercises the brain’s executive control network."',
    'The first sentence states that it exercises the brain’s executive control network.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nप्रश्न: द्विभाषी वक्ताओं (bilingual speakers) में वयस्कता तक कौन-से दो गुण प्रायः अधिक मजबूत दिखते हैं?',
    'Read the passage carefully and answer the question:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nQuestion: Which two strengths do bilingual speakers often demonstrate throughout adulthood?',
    ['कार्य-परिवर्तन (Task-switching) की बेहतर क्षमता और अधिक सांस्कृतिक अनुकूलनशीलता', 'Stronger task-switching ability and greater cultural adaptability'],
    [
      ['अधिक भूलने की आदत और एकाकीपन', 'Higher forgetfulness and social isolation'],
      ['अन्य संस्कृतियों के प्रति अस्वीकृति', 'Resistance to other cultures'],
      ['केवल शारीरिक दौड़ने की गति', 'Faster physical sprinting speed'],
    ],
    'दूसरे वाक्य में "stronger task-switching ability and greater cultural adaptability" दिया गया है।',
    'They often show stronger task-switching ability and greater cultural adaptability.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nप्रश्न: "bilingual" शब्द में उपसर्ग "bi-" क्या संख्या दर्शाता है?',
    'Read the passage carefully and answer the question:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nQuestion: What number does the prefix "bi-" signify in "bilingual"?',
    ['दो (Two)', 'Two'],
    [
      ['एक (One)', 'One'],
      ['तीन (Three)', 'Three'],
      ['दस (Ten)', 'Ten'],
    ],
    '"Bi-" उपसर्ग का अर्थ "दो" होता है, जैसे bilingual (दो भाषाएँ बोलने वाला), bicycle (दो पहियों वाली), biannual (वर्ष में दो बार)।',
    'The prefix "bi-" means two, so "bilingual" means fluent in two languages.',
    'EASY',
    { grammarRuleHi: 'संख्यात्मक उपसर्ग: uni- (1), bi- (2), tri- (3), poly-/multi- (अनेक)।' }
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nप्रश्न: गद्यांश में "effortlessly" किस प्रकार का शब्द-भेद (Part of Speech) है?',
    'Read the passage carefully and answer the question:\n"Switching effortlessly between two or more languages exercises the brain’s executive control network. Bilingual speakers often demonstrate stronger task-switching ability and greater cultural adaptability throughout adulthood."\nQuestion: What part of speech is "effortlessly" in the first sentence?',
    ['क्रियाविशेषण (Adverb)', 'Adverb'],
    [
      ['संज्ञा (Noun)', 'Noun'],
      ['सर्वनाम (Pronoun)', 'Pronoun'],
      ['पूर्वसर्ग (Preposition)', 'Preposition'],
    ],
    '"Effortlessly" यहाँ क्रियावाचक "switching" के ढंग (manner) को बता रहा है, अतः यह Adverb है।',
    '"Effortlessly" modifies the gerund/verb action "switching" by telling how it is done, so it is an adverb.',
    'MEDIUM',
    { grammarRuleHi: 'Adjective + "-ly" से प्रायः Adverb of Manner बनता है (जैसे effortless -> effortlessly)।' }
  ),

  // Passage 52: Braille & Tactile Maps / Universal Design
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nप्रश्न: सार्वभौमिक डिज़ाइन (universal design) का मुख्य सिद्धांत क्या है?',
    'Read the passage carefully and answer the question:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nQuestion: What is the core principle of universal design?',
    ['बिना विशेष बाद के बदलावों के ऐसे स्थान बनाना जो सभी के उपयोग योग्य हों', 'Creating spaces usable by everyone without specialized retrofits'],
    [
      ['केवल एथलीटों के लिए ऊँची सीढ़ियाँ बनाना', 'Building steep stairs strictly for athletes'],
      ['हर उपयोगकर्ता के लिए अलग इमारत बनाना', 'Constructing separate buildings for each user'],
      ['सार्वजनिक भवनों से सभी संकेत हटा देना', 'Removing directional signs from public halls'],
    ],
    'पहले वाक्य में लिखा है: "creates spaces usable by everyone without specialized retrofits."',
    'Universal design creates spaces usable by everyone without requiring specialized retrofits.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nप्रश्न: फुटपाथ के ढलवाँ कट (curb cuts) मूल रूप से किसके लिए बनाए गए थे?',
    'Read the passage carefully and answer the question:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nQuestion: For whom were curb cuts originally built?',
    ['व्हीलचेयर उपयोगकर्ताओं के लिए', 'Wheelchair users'],
    [
      ['मोटरसाइकिल चालकों के लिए', 'Motorcycle racers'],
      ['मालवाहक ट्रकों के लिए', 'Cargo freight trucks'],
      ['आवारा पशुओं के लिए', 'Stray cattle'],
    ],
    'दूसरे वाक्य में "originally built for wheelchair users" स्पष्ट लिखा है।',
    'The passage says curb cuts were originally built for wheelchair users.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nप्रश्न: व्हीलचेयर उपयोगकर्ताओं के अलावा कर्व कट्स से किन अन्य तीन समूहों को सहायता मिलती है?',
    'Read the passage carefully and answer the question:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nQuestion: Which three other groups benefit from curb cuts?',
    ['बच्चों की गाड़ी (स्ट्रोलर) धकेलते माता-पिता, पहिएदार सामान खींचते यात्री और साइकिल चालक', 'Parents pushing strollers, travelers pulling wheeled luggage, and cyclists'],
    [
      ['तैराक, पर्वतारोही और नाविक', 'Swimmers, climbers, and sailors'],
      ['किसान, बढ़ई और बुनकर', 'Farmers, carpenters, and weavers'],
      ['पायलट, खनिक और डाकिया', 'Pilots, miners, and postmen'],
    ],
    'अंतिम वाक्य में तीनों समूह स्पष्ट दिए गए हैं: parents pushing strollers, travelers pulling wheeled luggage, and cyclists।',
    'The second sentence lists parents with strollers, travelers with wheeled luggage, and cyclists.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nप्रश्न: गद्यांश में "retrofits" का क्या आशय है?',
    'Read the passage carefully and answer the question:\n"Universal design creates spaces usable by everyone without specialized retrofits. Curb cuts originally built for wheelchair users also assist parents pushing strollers, travelers pulling wheeled luggage, and cyclists."\nQuestion: What does "retrofits" mean in this passage?',
    ['निर्माण पूरा होने के बाद बाद में जोड़े जाने वाले सुधार या बदलाव', 'Modifications added to a structure after it has already been built'],
    [
      ['प्राचीन शैली की सजावटी पेंटिंग', 'Vintage decorative paintings'],
      ['नींव खोदने की प्रारंभिक प्रक्रिया', 'Initial digging of a foundation'],
      ['इमारत को पूरी तरह ध्वस्त करना', 'Complete demolition of a building'],
    ],
    '"Retrofit" का अर्थ किसी पुरानी या पहले से बनी संरचना में बाद में नया भाग या सुविधा जोड़ना होता है।',
    '"Retrofit" means adding a component or feature to something that did not have it when originally built.',
    'HARD'
  ),

  // Passage 53: Paper Recycling
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nप्रश्न: एक मीट्रिक टन रद्दी कागज के पुनर्चक्रण से लगभग कितने पूर्ण विकसित वृक्ष बचाए जाते हैं?',
    'Read the passage carefully and answer the question:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nQuestion: Roughly how many mature trees are saved by recycling one metric ton of waste paper?',
    ['लगभग सत्रह पूर्ण विकसित वृक्ष', 'Roughly seventeen mature trees'],
    [
      ['केवल दो वृक्ष', 'Only two trees'],
      ['लगभग पाँच सौ वृक्ष', 'About five hundred trees'],
      ['लगभग सौ छोटे पौधे', 'About one hundred saplings'],
    ],
    'पहले वाक्य में लिखा है: "saves roughly seventeen mature trees."',
    'The first sentence states that it saves roughly seventeen mature trees.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nप्रश्न: सूखे कागज को गीले खाद्य कचरे से अलग रखना क्यों आवश्यक है?',
    'Read the passage carefully and answer the question:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nQuestion: Why should dry office paper be separated from wet food waste?',
    ['ताकि कागज के रेशे इतने स्वच्छ रहें कि उनकी बार-बार लुगदी बनाई जा सके', 'So the fibers stay clean enough to be pulped repeatedly'],
    [
      ['ताकि गीले कचरे को जलाया जा सके', 'So wet waste can be burned easily'],
      ['ताकि कागज का रंग स्वतः नीला हो जाए', 'So paper turns blue naturally'],
      ['ताकि कागज को सीधे मिट्टी में गाड़ा जा सके', 'So paper can be buried immediately'],
    ],
    'दूसरे वाक्य में "keeps fibers clean enough to be pulped repeatedly" स्पष्ट लिखा है।',
    'Keeping dry paper separate from wet food waste preserves clean fibers for repeated pulping.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nप्रश्न: वृक्षों के अतिरिक्त कागज पुनर्चक्रण किस अन्य प्राकृतिक संसाधन की बचत करता है?',
    'Read the passage carefully and answer the question:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nQuestion: Besides trees, which other natural resource does paper recycling save?',
    ['हज़ारों लीटर ताजा पानी (Fresh water)', 'Thousands of liters of fresh water'],
    [
      ['कच्चा लोहा (Iron ore)', 'Iron ore'],
      ['प्राकृतिक हीरे (Diamonds)', 'Natural diamonds'],
      ['ज्वालामुखीय लावा (Lava)', 'Volcanic rock'],
    ],
    'पहले वाक्य में "thousands of liters of fresh water" की बचत का उल्लेख है।',
    'The first sentence mentions saving thousands of liters of fresh water.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nप्रश्न: गद्यांश में "mature" शब्द का विलोम क्या होगा?',
    'Read the passage carefully and answer the question:\n"Recycling one metric ton of waste paper saves roughly seventeen mature trees and thousands of liters of fresh water. Separating dry office paper from wet food waste keeps fibers clean enough to be pulped repeatedly."\nQuestion: Which word is an antonym of "mature" in the context of trees?',
    ['अविकसित / तरुण (Immature / Young)', 'Immature or young'],
    [
      ['पूर्ण विकसित (Full-grown)', 'Full-grown'],
      ['प्राचीन (Ancient)', 'Ancient'],
      ['विशाल (Massive)', 'Massive'],
    ],
    '"Mature" का अर्थ पूर्णतः विकसित या परिपक्व होता है; इसका विलोम "Immature" या "Young" है।',
    '"Mature" means fully grown; its opposite is "immature" or "young."',
    'EASY'
  ),

  // Passage 54: Empathy through Literature
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nप्रश्न: गद्यांश के अनुसार कथा साहित्य (fiction) मनोरंजन के अलावा क्या करता है?',
    'Read the passage carefully and answer the question:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nQuestion: According to the passage, what does fiction do besides entertain?',
    ['यह नैतिक कल्पनाशीलता (moral imagination) को प्रशिक्षित करता है', 'It trains the moral imagination'],
    [
      ['यह वैज्ञानिक प्रयोगशाला नियम सिखाता है', 'It teaches laboratory safety rules'],
      ['यह सभी ऐतिहासिक तिथियों को बदल देता है', 'It alters verified historical dates'],
      ['यह पाठकों को सामाजिक संवाद से दूर करता है', 'It discourages human communication'],
    ],
    'पहले वाक्य में लिखा है: "it trains the moral imagination."',
    'The first sentence says fiction trains the moral imagination.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nप्रश्न: अपरिचित संस्कृतियों और युगों के पात्रों को पढ़ने से पाठकों को क्या अनुभूति होती है?',
    'Read the passage carefully and answer the question:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nQuestion: What does following characters across unfamiliar cultures and eras help readers recognize?',
    ['बाहरी भिन्नताओं के नीचे छिपी साझा मानवीय आशाएँ', 'Shared human hopes beneath surface differences'],
    [
      ['कि सभी संस्कृतियाँ एक-दूसरे से शत्रुता रखती हैं', 'That all cultures are hostile to one another'],
      ['कि अतीत के लोगों में कोई भावना नहीं थी', 'That people in earlier eras lacked emotions'],
      ['कि केवल बाहरी रूप-रंग ही महत्वपूर्ण है', 'That surface differences are permanent barriers'],
    ],
    'दूसरे वाक्य में "recognize shared human hopes beneath surface differences" स्पष्ट उल्लिखित है।',
    'It helps readers recognize shared human hopes beneath surface differences.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nप्रश्न: "surface differences" वाक्यांश का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nQuestion: What does "surface differences" refer to?',
    ['बाहरी या ऊपरी अंतर (जैसे वेशभूषा, भाषा या रीति-रिवाज)', 'External or superficial differences rather than deeper humanity'],
    [
      ['पृथ्वी की भूवैज्ञानिक गहराइयाँ', 'Deep geological layers'],
      ['बुनियादी मानवीय संवेदनाओं का अभाव', 'Absence of basic human emotions'],
      ['गणितीय सतह का क्षेत्रफल', 'Mathematical surface area'],
    ],
    '"Surface differences" का आशय ऊपरी या बाहरी अंतरों से है, जो अंदरूनी मानवीय समानता की तुलना में कम गहरे होते हैं।',
    '"Surface differences" means outward or superficial distinctions that mask deeper similarities.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nप्रश्न: इस गद्यांश का सबसे उपयुक्त शीर्षक क्या होगा?',
    'Read the passage carefully and answer the question:\n"Fiction does more than entertain; it trains the moral imagination. Following characters across unfamiliar cultures and eras helps readers recognize shared human hopes beneath surface differences."\nQuestion: Which title best suits this passage?',
    ['कथा साहित्य और साझा मानवीय सहानुभूति का विकास', 'Fiction and the Cultivation of Shared Empathy'],
    [
      ['इतिहास की पाठ्यपुस्तकों की छपाई', 'Printing History Textbooks'],
      ['मनोरंजन उद्योग में मुनाफा', 'Profits in the Entertainment Industry'],
      ['सांस्कृतिक अलगाव के कारण', 'Causes of Cultural Isolation'],
    ],
    'पूरा गद्यांश इस बात पर केंद्रित है कि कहानियाँ कैसे नैतिक कल्पना और मानवीय सहानुभूति जगाती हैं।',
    'The passage centers on how fiction nurtures moral imagination and shared human empathy.',
    'MEDIUM'
  ),

  // Passage 55: Disciplined Curiosity / Scientific Temper
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nप्रश्न: गद्यांश के अनुसार वैज्ञानिक दृष्टिकोण (scientific temper) विकसित करने का क्या अर्थ है?',
    'Read the passage carefully and answer the question:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nQuestion: What does cultivating a scientific temper mean according to the passage?',
    ['असाधारण दावों को स्वीकार करने से पहले प्रमाण (साक्ष्य) की माँग करना', 'Asking for evidence before accepting extraordinary claims'],
    [
      ['बिना जाँच के हर पुरानी अफवाह पर विश्वास करना', 'Believing every rumor without inquiry'],
      ['सभी प्रकार के आश्चर्य और जिज्ञासा को समाप्त करना', 'Eliminating curiosity and wonder'],
      ['केवल प्रयोगशाला में काम करने वालों को प्रश्न पूछने देना', 'Restricting questions to laboratory scientists'],
    ],
    'पहले वाक्य में लिखा है: "means asking for evidence before accepting extraordinary claims."',
    'The first sentence defines it as asking for evidence before accepting extraordinary claims.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nप्रश्न: वैज्ञानिक दृष्टिकोण नागरिकों को किन दो गुणों का समन्वय करने को प्रोत्साहित करता है?',
    'Read the passage carefully and answer the question:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nQuestion: Which two attitudes does scientific temper encourage citizens to combine?',
    ['स्वस्थ संदेहवाद (Healthy skepticism) और विस्मय/जिज्ञासा (Wonder)', 'Healthy skepticism and wonder'],
    [
      ['अंधविश्वास और भय', 'Superstition and fear'],
      ['क्रोध और हठधर्मिता', 'Anger and dogmatism'],
      ['आलस्य और उदासीनता', 'Laziness and apathy'],
    ],
    'दूसरे वाक्य में "combine healthy skepticism with wonder" का स्पष्ट उल्लेख है।',
    'It encourages citizens to combine healthy skepticism with wonder.',
    'EASY'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nप्रश्न: गद्यांश में "skepticism" शब्द का अर्थ क्या है?',
    'Read the passage carefully and answer the question:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nQuestion: What does "skepticism" mean in "healthy skepticism"?',
    ['तर्क और प्रमाण के बिना किसी दावे पर प्रश्न उठाने की प्रवृति', 'A questioning attitude that demands proof before believing'],
    [
      ['अंधी भक्ति या तुरंत स्वीकृति', 'Blind faith or instant belief'],
      ['पूर्ण अज्ञानता', 'Total ignorance'],
      ['जानबूझकर किया गया छल', 'Intentional deception'],
    ],
    '"Skepticism" का अर्थ किसी बात को बिना प्रमाण के आँख मूंदकर न मानने की तर्कशील जिज्ञासा है।',
    '"Skepticism" is a questioning attitude that seeks evidence rather than accepting claims blindly.',
    'MEDIUM'
  ),
  q(
    'Unseen Comprehension',
    'Reading Comprehension',
    'निम्नलिखित गद्यांश को पढ़कर प्रश्न का उत्तर दीजिए:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nप्रश्न: गद्यांश किन दो चीजों के बीच स्पष्ट विपरीतता (contrast) दिखाता है?',
    'Read the passage carefully and answer the question:\n"Cultivating a scientific temper means asking for evidence before accepting extraordinary claims. It encourages citizens to combine healthy skepticism with wonder, keeping minds open to verifiable facts rather than superstition."\nQuestion: What contrast does the passage draw at the end?',
    ['सत्यापन योग्य तथ्यों और अंधविश्वास के बीच', 'Between verifiable facts and superstition'],
    [
      ['साक्ष्य और प्रयोग के बीच', 'Between evidence and experiments'],
      ['जिज्ञासा और आश्चर्य के बीच', 'Between curiosity and wonder'],
      ['नागरिकों और वैज्ञानिकों के बीच', 'Between citizens and scientists'],
    ],
    'अंतिम पंक्ति "verifiable facts rather than superstition" इन दोनों के बीच स्पष्ट अंतर दर्शाती है।',
    'The closing phrase contrasts "verifiable facts" with "superstition."',
    'EASY'
  ),

  // =========================================================================
  // SECTION 2: VOCABULARY BANK - SYNONYMS (80 Qs)
  // =========================================================================
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ABUNDANT',
    'Choose the most appropriate synonym of the word: ABUNDANT',
    ['प्रचुर / भरपूर (Plentiful)', 'Plentiful'],
    [
      ['दुर्लभ (Scarce)', 'Scarce'],
      ['क्षीण (Feeble)', 'Feeble'],
      ['अल्प (Meager)', 'Meager'],
    ],
    '"Abundant" (विशेषण) का अर्थ प्रचुर या अधिक मात्रा में उपलब्ध होता है, अतः इसका सटीक पर्याय "Plentiful" है।',
    '"Abundant" means existing in large quantities; "plentiful" has the same meaning.',
    'EASY',
    { grammarRuleHi: 'पर्यायवाची चुनते समय शब्द-भेद (Part of Speech) का मिलान करें—Adjective का Synonym भी Adjective होना चाहिए।' }
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: CANDID',
    'Choose the most appropriate synonym of the word: CANDID',
    ['स्पष्टवादी / निष्कपट (Frank)', 'Frank'],
    [
      ['धूर्त (Cunning)', 'Cunning'],
      ['संकोची (Shy)', 'Shy'],
      ['भ्रामक (Deceptive)', 'Deceptive'],
    ],
    '"Candid" का अर्थ बिना लाग-लपेट के सच बोलने वाला (निष्कपट) होता है; इसका सही पर्याय "Frank" है।',
    '"Candid" means truthful and straightforward; "frank" is its closest synonym.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: DILIGENT',
    'Choose the most appropriate synonym of the word: DILIGENT',
    ['परिश्रमी (Industrious)', 'Industrious'],
    [
      ['आलसी (Indolent)', 'Indolent'],
      ['लापरवाह (Negligent)', 'Negligent'],
      ['अस्थिर (Erratic)', 'Erratic'],
    ],
    '"Diligent" का अर्थ मेहनती और लगनशील होता है; "Industrious" इसका सटीक पर्याय है।',
    '"Diligent" means showing care and conscientious effort; "industrious" means hardworking.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: EPHEMERAL',
    'Choose the most appropriate synonym of the word: EPHEMERAL',
    ['क्षणभंगुर / अल्पकालिक (Transitory)', 'Transitory'],
    [
      ['शाश्वत (Eternal)', 'Eternal'],
      ['टिकाऊ (Durable)', 'Durable'],
      ['स्थायी (Perpetual)', 'Perpetual'],
    ],
    '"Ephemeral" का अर्थ बहुत थोड़े समय तक रहने वाला होता है; अतः "Transitory" (क्षणिक) इसका सही पर्याय है।',
    '"Ephemeral" means lasting for a very short time; "transitory" is synonymous.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: FRUGAL',
    'Choose the most appropriate synonym of the word: FRUGAL',
    ['मितव्ययी / किफायती (Thrifty)', 'Thrifty'],
    [
      ['खर्चीला (Extravagant)', 'Extravagant'],
      ['उदारचेता (Lavish)', 'Lavish'],
      ['लापरवाह (Wasteful)', 'Wasteful'],
    ],
    '"Frugal" का अर्थ सोच-समझकर कम खर्च करने वाला (मितव्ययी) है; इसका सही पर्याय "Thrifty" है।',
    '"Frugal" means economical with money or resources; "thrifty" is its synonym.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: BENEVOLENT',
    'Choose the most appropriate synonym of the word: BENEVOLENT',
    ['परोपकारी / दयालु (Charitable)', 'Charitable'],
    [
      ['क्रूर (Cruel)', 'Cruel'],
      ['द्वेषपूर्ण (Malicious)', 'Malicious'],
      ['स्वार्थी (Selfish)', 'Selfish'],
    ],
    'लैटिन मूल "bene-" (अच्छा/भला) से बने "Benevolent" का अर्थ दयालु व परोपकारी होता है; "Charitable" इसका सही पर्याय है।',
    '"Benevolent" means well-meaning and kindly; "charitable" matches this sense.',
    'EASY',
    { grammarRuleHi: 'Root "bene-" का अर्थ "good/well" (भला) होता है (जैसे benevolent, benefit, benign)।' }
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: MITIGATE',
    'Choose the most appropriate synonym of the word: MITIGATE',
    ['कम करना / शांत करना (Alleviate)', 'Alleviate'],
    [
      ['भड़काना (Aggravate)', 'Aggravate'],
      ['बढ़ाना (Intensify)', 'Intensify'],
      ['उकसाना (Provoke)', 'Provoke'],
    ],
    '"Mitigate" (क्रिया) का अर्थ किसी दर्द, क्रोध या गंभीरता को कम करना है; "Alleviate" इसका उपयुक्त पर्याय है।',
    '"Mitigate" means to make less severe or painful; "alleviate" has the same meaning.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: OBSTINATE',
    'Choose the most appropriate synonym of the word: OBSTINATE',
    ['हठी / जिद्दी (Stubborn)', 'Stubborn'],
    [
      ['लचीला (Flexible)', 'Flexible'],
      ['आज्ञाकारी (Compliant)', 'Compliant'],
      ['विनम्र (Submissive)', 'Submissive'],
    ],
    '"Obstinate" का अर्थ अपनी बात पर अड़ा रहने वाला (जिद्दी) होता है; "Stubborn" इसका सटीक पर्याय है।',
    '"Obstinate" means refusing to change one’s opinion or course of action; "stubborn" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: LUCID',
    'Choose the most appropriate synonym of the word: LUCID',
    ['सुस्पष्ट / बोधगम्य (Clear)', 'Clear'],
    [
      ['अस्पष्ट (Obscure)', 'Obscure'],
      ['उलझा हुआ (Confusing)', 'Confusing'],
      ['संदिग्ध (Ambiguous)', 'Ambiguous'],
    ],
    '"Lucid" का अर्थ ऐसी भाषा या विचार है जो आसानी से समझ में आए (स्पष्ट); "Clear" इसका सही पर्याय है।',
    '"Lucid" means expressed clearly and easy to understand; "clear" is its synonym.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: PRUDENT',
    'Choose the most appropriate synonym of the word: PRUDENT',
    ['विवेकपूर्ण / सावधान (Wise)', 'Wise'],
    [
      ['उतावला (Rash)', 'Rash'],
      ['मूर्खतापूर्ण (Foolish)', 'Foolish'],
      ['लापरवाह (Reckless)', 'Reckless'],
    ],
    '"Prudent" का अर्थ दूरदर्शी एवं सोच-समझकर निर्णय लेने वाला (बुद्धिमान/सावधान) है; "Wise" इसका उपयुक्त पर्याय है।',
    '"Prudent" means acting with care and thought for the future; "wise" fits best.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: AMICABLE',
    'Choose the most appropriate synonym of the word: AMICABLE',
    ['मैत्रीपूर्ण (Friendly)', 'Friendly'],
    [
      ['शत्रुतापूर्ण (Hostile)', 'Hostile'],
      ['कड़वा (Bitter)', 'Bitter'],
      ['झगड़ालू (Quarrelsome)', 'Quarrelsome'],
    ],
    '"Amicable" का अर्थ आपसी सद्भाव व मित्रता से भरा हुआ होता है; अतः "Friendly" सही उत्तर है।',
    '"Amicable" means characterized by friendliness and absence of discord.',
    'EASY',
    { grammarRuleHi: 'Root "amic-" का अर्थ "friend" (मित्र) होता है (जैसे amicable, amity)।' }
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ARDUOUS',
    'Choose the most appropriate synonym of the word: ARDUOUS',
    ['कठिन / श्रमसाध्य (Strenuous)', 'Strenuous'],
    [
      ['सरल (Effortless)', 'Effortless'],
      ['आरामदायक (Comfortable)', 'Comfortable'],
      ['सुगम (Easy)', 'Easy'],
    ],
    '"Arduous" का अर्थ बहुत परिश्रम माँगने वाला और कठिन कार्य होता है; "Strenuous" इसका पर्याय है।',
    '"Arduous" means involving or requiring strenuous effort; difficult and tiring.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: AUDACIOUS',
    'Choose the most appropriate synonym of the word: AUDACIOUS',
    ['साहसी / निर्भीक (Daring)', 'Daring'],
    [
      ['डरपोक (Timid)', 'Timid'],
      ['कायर (Cowardly)', 'Cowardly'],
      ['संकोची (Meek)', 'Meek'],
    ],
    '"Audacious" का अर्थ निडर और जोखिम लेने का साहस रखने वाला होता है; "Daring" इसका सही पर्याय है।',
    '"Audacious" means showing a willingness to take surprisingly bold risks; "daring" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: CONCISE',
    'Choose the most appropriate synonym of the word: CONCISE',
    ['संक्षिप्त एवं सारगर्भित (Brief)', 'Brief'],
    [
      ['वाचाल / लंबा (Verbose)', 'Verbose'],
      ['विस्तृत (Lengthy)', 'Lengthy'],
      ['भटका हुआ (Rambling)', 'Rambling'],
    ],
    '"Concise" का अर्थ कम शब्दों में अधिक जानकारी देना (संक्षिप्त) होता है; "Brief" इसका पर्याय है।',
    '"Concise" means giving a lot of information clearly in a few words; "brief" is closest.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: DUBIOUS',
    'Choose the most appropriate synonym of the word: DUBIOUS',
    ['संदिग्ध (Doubtful)', 'Doubtful'],
    [
      ['निश्चित (Certain)', 'Certain'],
      ['विश्वसनीय (Trustworthy)', 'Trustworthy'],
      ['निर्विवाद (Undeniable)', 'Undeniable'],
    ],
    '"Dubious" का अर्थ संदेह से भरा या अविश्वसनीय होता है; "Doubtful" इसका सटीक पर्याय है।',
    '"Dubious" means hesitating or doubting; not to be relied upon ("doubtful").',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ENORMOUS',
    'Choose the most appropriate synonym of the word: ENORMOUS',
    ['विशाल / अत्यंत बड़ा (Immense)', 'Immense'],
    [
      ['नन्हा (Tiny)', 'Tiny'],
      ['सूक्ष्म (Minute)', 'Minute'],
      ['तुच्छ (Trivial)', 'Trivial'],
    ],
    '"Enormous" का अर्थ आकार या मात्रा में बहुत बड़ा होता है; "Immense" इसका सही पर्याय है।',
    '"Enormous" means very large in size, quantity, or extent; "immense" is synonymous.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: FLUCTUATE',
    'Choose the most appropriate synonym of the word: FLUCTUATE',
    ['उतार-चढ़ाव होना / बदलते रहना (Vary)', 'Vary'],
    [
      ['स्थिर रहना (Stabilize)', 'Stabilize'],
      ['जम जाना (Freeze)', 'Freeze'],
      ['समान रहना (Persist unchanged)', 'Remain constant'],
    ],
    '"Fluctuate" का अर्थ अनियमित रूप से घटते-बढ़ते रहना है; "Vary" इसका निकटतम पर्याय है।',
    '"Fluctuate" means to rise and fall irregularly in number or amount; "vary" fits best.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: GREGARIOUS',
    'Choose the most appropriate synonym of the word: GREGARIOUS',
    ['मिलनसार / सामाजिक (Sociable)', 'Sociable'],
    [
      ['एकांतप्रिय (Reclusive)', 'Reclusive'],
      ['असामाजिक (Antisocial)', 'Antisocial'],
      ['अलग-थलग (Solitary)', 'Solitary'],
    ],
    '"Gregarious" का अर्थ समूह में रहना पसंद करने वाला और मिलनसार होता है; "Sociable" इसका सही पर्याय है।',
    '"Gregarious" means fond of company and sociable.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: HAZARDOUS',
    'Choose the most appropriate synonym of the word: HAZARDOUS',
    ['खतरनाक / जोखिम भरा (Dangerous)', 'Dangerous'],
    [
      ['सुरक्षित (Safe)', 'Safe'],
      ['निरापद (Harmless)', 'Harmless'],
      ['आरामदेह (Soothing)', 'Soothing'],
    ],
    '"Hazardous" का अर्थ खतरे या जोखिम से भरा हुआ होता है; "Dangerous" इसका पर्याय है।',
    '"Hazardous" means risky or dangerous.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: IMPECCABLE',
    'Choose the most appropriate synonym of the word: IMPECCABLE',
    ['त्रुटिहीन / निर्दोष (Flawless)', 'Flawless'],
    [
      ['दोषपूर्ण (Defective)', 'Defective'],
      ['अशुद्ध (Impure)', 'Impure'],
      ['कलंकित (Tainted)', 'Tainted'],
    ],
    '"Impeccable" का अर्थ उच्चतम मानकों के अनुरूप और बिना किसी दोष के (निर्दोष) होता है; "Flawless" इसका सही पर्याय है।',
    '"Impeccable" means in accordance with the highest standards; faultless or flawless.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: JOVIAL',
    'Choose the most appropriate synonym of the word: JOVIAL',
    ['हँसमुख / आनंदित (Cheerful)', 'Cheerful'],
    [
      ['उदास (Gloomy)', 'Gloomy'],
      ['चिड़चिड़ा (Morose)', 'Morose'],
      ['शोकग्रस्त (Mournful)', 'Mournful'],
    ],
    '"Jovial" का अर्थ प्रसन्नचित्त और मिलनसार स्वभाव वाला होता है; "Cheerful" इसका सही पर्याय है।',
    '"Jovial" means cheerful and friendly.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: LETHARGIC',
    'Choose the most appropriate synonym of the word: LETHARGIC',
    ['सुस्त / आलसी (Sluggish)', 'Sluggish'],
    [
      ['स्फूर्तिवान (Energetic)', 'Energetic'],
      ['फुर्तीला (Brisk)', 'Brisk'],
      ['सचेत (Alert)', 'Alert'],
    ],
    '"Lethargic" का अर्थ ऊर्जा की कमी और आलस्य से ग्रस्त (सुस्त) होता है; "Sluggish" इसका पर्याय है।',
    '"Lethargic" means sluggish and apathetic.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: MAGNIFICENT',
    'Choose the most appropriate synonym of the word: MAGNIFICENT',
    ['भव्य / शानदार (Splendid)', 'Splendid'],
    [
      ['तुच्छ (Paltry)', 'Paltry'],
      ['साधारण (Mediocre)', 'Mediocre'],
      ['कुरूप (Ugly)', 'Ugly'],
    ],
    '"Magnificent" का अर्थ अत्यंत भव्य और प्रभावशाली होता है; "Splendid" इसका पर्यायवाची है।',
    '"Magnificent" means impressively beautiful, elaborate, or extravagant; "splendid" is synonymous.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: NOVICE',
    'Choose the most appropriate synonym of the word: NOVICE',
    ['नौसिखिया (Beginner)', 'Beginner'],
    [
      ['विशेषज्ञ (Expert)', 'Expert'],
      ['अनुभवी (Veteran)', 'Veteran'],
      ['आचार्य (Master)', 'Master'],
    ],
    '"Novice" (संज्ञा) का अर्थ किसी कार्य या क्षेत्र में नया और अनुभवहीन व्यक्ति (नौसिखिया) होता है; "Beginner" इसका पर्याय है।',
    '"Novice" means a person new to or inexperienced in a field; a beginner.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: OBSOLETE',
    'Choose the most appropriate synonym of the word: OBSOLETE',
    ['अप्रचलित / पुराना (Outdated)', 'Outdated'],
    [
      ['आधुनिक (Modern)', 'Modern'],
      ['नवीनतम (Cutting-edge)', 'Cutting-edge'],
      ['प्रचलित (Current)', 'Current'],
    ],
    '"Obsolete" का अर्थ ऐसी वस्तु या पद्धति है जो अब उपयोग में न हो (अप्रचलित); "Outdated" इसका सही पर्याय है।',
    '"Obsolete" means out of date and no longer used; "outdated" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: PERILOUS',
    'Choose the most appropriate synonym of the word: PERILOUS',
    ['खतरनाक / जोखिमपूर्ण (Treacherous)', 'Treacherous'],
    [
      ['सुरक्षित (Secure)', 'Secure'],
      ['निश्चिंत (Carefree)', 'Carefree'],
      ['संरक्षित (Protected)', 'Protected'],
    ],
    '"Perilous" (peril = संकट) का अर्थ संकटों से भरा होता है; "Treacherous" या "Dangerous" इसका पर्याय है।',
    '"Perilous" means full of danger or risk; "treacherous" matches this sense.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: QUERULOUS',
    'Choose the most appropriate synonym of the word: QUERULOUS',
    ['शिकायती / चिड़चिड़ा (Complaining)', 'Complaining'],
    [
      ['संतुष्ट (Contented)', 'Contented'],
      ['हँसमुख (Cheerful)', 'Cheerful'],
      ['प्रशंसक (Appreciative)', 'Appreciative'],
    ],
    '"Querulous" का अर्थ बात-बात पर शिकायत करने वाला या तुनकमिजाज होता है; "Complaining" इसका सटीक पर्याय है।',
    '"Querulous" means complaining in a petulant or whining manner.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: RESILIENT',
    'Choose the most appropriate synonym of the word: RESILIENT',
    ['लचीला / शीघ्र संभलने वाला (Adaptable)', 'Adaptable'],
    [
      ['भंगुर (Brittle)', 'Brittle'],
      ['कठोर (Rigid)', 'Rigid'],
      ['निराश (Fragile)', 'Fragile'],
    ],
    '"Resilient" का अर्थ कठिन परिस्थितियों या आघात से जल्दी उबरने की क्षमता रखने वाला (लचीला) होता है; "Adaptable" इसका निकटतम पर्याय है।',
    '"Resilient" means able to withstand or recover quickly from difficult conditions; "adaptable" aligns closely.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: SCRUTINIZE',
    'Choose the most appropriate synonym of the word: SCRUTINIZE',
    ['सूक्ष्मता से जाँचना (Inspect)', 'Inspect'],
    [
      ['अनदेखा करना (Overlook)', 'Overlook'],
      ['उपेक्षा करना (Neglect)', 'Neglect'],
      ['सरसरी नजर डालना (Skim)', 'Skim'],
    ],
    '"Scrutinize" का अर्थ किसी वस्तु या दस्तावेज़ की बारीकी और गंभीरता से जांच करना है; "Inspect" इसका सही पर्याय है।',
    '"Scrutinize" means to examine or inspect closely and thoroughly.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: TEDIOUS',
    'Choose the most appropriate synonym of the word: TEDIOUS',
    ['उबाऊ / नीरस (Monotonous)', 'Monotonous'],
    [
      ['रोमांचक (Thrilling)', 'Thrilling'],
      ['मनोरंजक (Entertaining)', 'Entertaining'],
      ['स्फूर्तिदायक (Invigorating)', 'Invigorating'],
    ],
    '"Tedious" का अर्थ बहुत लंबा, धीमा और थकाने वाला या उबाऊ होता है; "Monotonous" इसका पर्याय है।',
    '"Tedious" means too long, slow, or dull; tiresome or monotonous.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: UBIQUITOUS',
    'Choose the most appropriate synonym of the word: UBIQUITOUS',
    ['सर्वव्यापी (Omnipresent)', 'Omnipresent'],
    [
      ['दुर्लभ (Rare)', 'Rare'],
      ['अनुपस्थित (Absent)', 'Absent'],
      ['सीमित (Localized)', 'Localized'],
    ],
    '"Ubiquitous" का अर्थ हर जगह पाया जाने वाला (सर्वव्यापक) होता है; "Omnipresent" इसका सटीक पर्याय है।',
    '"Ubiquitous" means present, appearing, or found everywhere; "omnipresent" is its exact synonym.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: VIVID',
    'Choose the most appropriate synonym of the word: VIVID',
    ['जीवंत / सुस्पष्ट (Graphic)', 'Graphic'],
    [
      ['धुंधला (Vague)', 'Vague'],
      ['फीका (Pale)', 'Pale'],
      ['नीरस (Dull)', 'Dull'],
    ],
    '"Vivid" का अर्थ चमकीला, स्पष्ट और सजीव होता है; "Graphic" (जीवंत वर्णन) इसका उपयुक्त पर्याय है।',
    '"Vivid" means producing powerful feelings or strong, clear images in the mind; "graphic" fits best.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: WARY',
    'Choose the most appropriate synonym of the word: WARY',
    ['सतर्क / सावधान (Cautious)', 'Cautious'],
    [
      ['लापरवाह (Heedless)', 'Heedless'],
      ['उतावला (Impulsive)', 'Impulsive'],
      ['भोला (Gullible)', 'Gullible'],
    ],
    '"Wary" का अर्थ संभावित खतरे से सचेत और सतर्क रहना होता है; "Cautious" इसका सही पर्याय है।',
    '"Wary" means feeling or showing caution about possible dangers; "cautious" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ZEALOUS',
    'Choose the most appropriate synonym of the word: ZEALOUS',
    ['उत्साही / जोशपूर्ण (Enthusiastic)', 'Enthusiastic'],
    [
      ['उदासीन (Apathetic)', 'Apathetic'],
      ['निराश (Indifferent)', 'Indifferent'],
      ['ठंडा (Lukewarm)', 'Lukewarm'],
    ],
    '"Zealous" (zeal = उत्साह) का अर्थ किसी उद्देश्य के प्रति अत्यंत उत्साही व समर्पित होता है; "Enthusiastic" इसका पर्याय है।',
    '"Zealous" means having or showing great energy or enthusiasm in pursuit of a cause.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: AFFLUENT',
    'Choose the most appropriate synonym of the word: AFFLUENT',
    ['संपन्न / धनी (Wealthy)', 'Wealthy'],
    [
      ['निर्धन (Destitute)', 'Destitute'],
      ['कंगाल (Impoverished)', 'Impoverished'],
      ['जरूरतमंद (Needy)', 'Needy'],
    ],
    '"Affluent" का अर्थ धन-संपत्ति से समृद्ध (धनी) होता है; "Wealthy" इसका सही पर्याय है।',
    '"Affluent" means having a great deal of money; wealthy.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: BLISS',
    'Choose the most appropriate synonym of the word: BLISS',
    ['परमानंद (Ecstasy)', 'Ecstasy'],
    [
      ['विषाद (Misery)', 'Misery'],
      ['वेदना (Agony)', 'Agony'],
      ['शोक (Grief)', 'Grief'],
    ],
    '"Bliss" (संज्ञा) का अर्थ सर्वोच्च सुख या परमानंद होता है; "Ecstasy" इसका सटीक पर्याय है।',
    '"Bliss" means perfect happiness or great joy; "ecstasy" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: COERCE',
    'Choose the most appropriate synonym of the word: COERCE',
    ['बलपूर्वक बाध्य करना (Compel)', 'Compel'],
    [
      ['राजी करना (Persuade gently)', 'Persuade'],
      ['छूट देना (Exempt)', 'Exempt'],
      ['अनुमति देना (Permit)', 'Permit'],
    ],
    '"Coerce" का अर्थ धमकी या बल प्रयोग कर किसी से कोई काम करवाना होता है; "Compel" इसका सही पर्याय है।',
    '"Coerce" means to persuade an unwilling person to do something by using force or threats; "compel" fits best.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: DEFER',
    'Choose the most appropriate synonym of the word: DEFER',
    ['टालना / स्थगित करना (Postpone)', 'Postpone'],
    [
      ['जल्दी करना (Hasten)', 'Hasten'],
      ['तुरंत पूरा करना (Expedite)', 'Expedite'],
      ['आरंभ करना (Initiate)', 'Initiate'],
    ],
    '"Defer" का एक प्रमुख अर्थ किसी कार्य या बैठक को बाद के समय के लिए स्थगित करना (Postpone) होता है।',
    '"Defer" means to put off an action or event to a later time; postpone.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ELOQUENT',
    'Choose the most appropriate synonym of the word: ELOQUENT',
    ['वाक्पटु / प्रभावशाली वक्ता (Articulate)', 'Articulate'],
    [
      ['हकलाने वाला (Inarticulate)', 'Inarticulate'],
      ['मूक (Mute)', 'Mute'],
      ['संकोची (Hesitant)', 'Hesitant'],
    ],
    '"Eloquent" का अर्थ धाराप्रवाह और प्रभावशाली ढंग से बोलने वाला होता है; "Articulate" इसका सटीक पर्याय है।',
    '"Eloquent" means fluent or persuasive in speaking or writing; "articulate" is synonymous.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: FORTITUDE',
    'Choose the most appropriate synonym of the word: FORTITUDE',
    ['धैर्य और साहस (Courage)', 'Courage'],
    [
      ['भीरुता (Cowardice)', 'Cowardice'],
      ['कमजोरी (Frailty)', 'Frailty'],
      ['निराशा (Despair)', 'Despair'],
    ],
    '"Fortitude" का अर्थ संकट या पीड़ा के समय दिखाया जाने वाला मानसिक धैर्य और साहस है; "Courage" इसका पर्याय है।',
    '"Fortitude" means courage in pain or adversity.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: GENUINE',
    'Choose the most appropriate synonym of the word: GENUINE',
    ['असली / प्रामाणिक (Authentic)', 'Authentic'],
    [
      ['नकली (Counterfeit)', 'Counterfeit'],
      ['बनावटी (Spurious)', 'Spurious'],
      ['कृत्रिम (Artificial)', 'Artificial'],
    ],
    '"Genuine" का अर्थ वास्तविक, खरा या प्रामाणिक होता है; "Authentic" इसका सटीक पर्याय है।',
    '"Genuine" means truly what something is said to be; authentic.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: HARMONY',
    'Choose the most appropriate synonym of the word: HARMONY',
    ['सामंजस्य / एकता (Concord)', 'Concord'],
    [
      ['कलह (Discord)', 'Discord'],
      ['संघर्ष (Conflict)', 'Conflict'],
      ['मतभेद (Dissension)', 'Dissension'],
    ],
    '"Harmony" का अर्थ आपसी तालमेल और शांतिपूर्ण सहमति होता है; "Concord" इसका पर्यायवाची है।',
    '"Harmony" means agreement or concord.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: INDIGENOUS',
    'Choose the most appropriate synonym of the word: INDIGENOUS',
    ['स्वदेशी / देशज (Native)', 'Native'],
    [
      ['विदेशी (Foreign)', 'Foreign'],
      ['आयातित (Imported)', 'Imported'],
      ['अजनबी (Alien)', 'Alien'],
    ],
    '"Indigenous" का अर्थ किसी स्थान विशेष में मूल रूप से उत्पन्न या रहने वाला (देशज/स्वदेशी) होता है; "Native" इसका पर्याय है।',
    '"Indigenous" means originating or occurring naturally in a particular place; native.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: JEOPARDY',
    'Choose the most appropriate synonym of the word: JEOPARDY',
    ['संकट / खतरा (Peril)', 'Peril'],
    [
      ['सुरक्षा (Safety)', 'Safety'],
      ['निश्चितता (Assurance)', 'Assurance'],
      ['शरण (Refuge)', 'Refuge'],
    ],
    '"Jeopardy" (संज्ञा) का अर्थ गंभीर हानि या विनाश का खतरा होता है; "Peril" इसका सटीक पर्याय है।',
    '"Jeopardy" means danger of loss, harm, or failure; "peril" is synonymous.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: KEEN',
    'Choose the most appropriate synonym of the word: KEEN',
    ['उत्सुक / तीव्र (Eager)', 'Eager'],
    [
      ['अनिच्छुक (Reluctant)', 'Reluctant'],
      ['सुस्त (Dull)', 'Dull'],
      ['उदासीन (Indifferent)', 'Indifferent'],
    ],
    '"Keen" का अर्थ अत्यंत इच्छुक, उत्साही या तीक्ष्ण होता है; "Eager" इसका सही पर्याय है।',
    '"Keen" means having or showing eagerness or enthusiasm.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: LAMENT',
    'Choose the most appropriate synonym of the word: LAMENT',
    ['विलाप करना / शोक मनाना (Mourn)', 'Mourn'],
    [
      ['उत्सव मनाना (Celebrate)', 'Celebrate'],
      ['हर्षित होना (Rejoice)', 'Rejoice'],
      ['प्रशंसा करना (Applaud)', 'Applaud'],
    ],
    '"Lament" का अर्थ दुःख या पछतावा प्रकट करना (विलाप करना) है; "Mourn" इसका सही पर्याय है।',
    '"Lament" means a passionate expression of grief or sorrow; to mourn.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: METICULOUS',
    'Choose the most appropriate synonym of the word: METICULOUS',
    ['अति सूक्ष्म एवं सावधान (Fastidious)', 'Fastidious'],
    [
      ['लापरवाह (Sloppy)', 'Sloppy'],
      ['जल्दबाज (Careless)', 'Careless'],
      ['अव्यवस्थित (Haphazard)', 'Haphazard'],
    ],
    '"Meticulous" का अर्थ हर छोटी से छोटी बात का सावधानी से ध्यान रखने वाला होता है; "Fastidious" या "Painstaking" इसका पर्याय है।',
    '"Meticulous" means showing great attention to detail; very careful and precise ("fastidious").',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: NOSTALGIA',
    'Choose the most appropriate synonym of the word: NOSTALGIA',
    ['अतीत की मधुर याद (Longing for the past)', 'Homesickness for the past'],
    [
      ['भविष्य का भय (Dread)', 'Future dread'],
      ['विस्मृति (Amnesia)', 'Amnesia'],
      ['क्रोध (Wrath)', 'Wrath'],
    ],
    '"Nostalgia" का अर्थ बीते हुए सुखद दिनों या घर की भावुक याद है।',
    '"Nostalgia" is a sentimental longing or wistful affection for a period in the past.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: OMINOUS',
    'Choose the most appropriate synonym of the word: OMINOUS',
    ['अशुभ / अमंगलसूचक (Threatening)', 'Threatening'],
    [
      ['शुभ (Auspicious)', 'Auspicious'],
      ['आशाजनक (Promising)', 'Promising'],
      ['सौम्य (Benign)', 'Benign'],
    ],
    '"Ominous" का अर्थ किसी आने वाले संकट या अनिष्ट का संकेत देने वाला होता है; "Threatening" इसका पर्याय है।',
    '"Ominous" means giving the worrying impression that something bad is going to happen; threatening.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: PLACID',
    'Choose the most appropriate synonym of the word: PLACID',
    ['शांत / सौम्य (Calm)', 'Calm'],
    [
      ['उत्तेजित (Agitated)', 'Agitated'],
      ['तूफानी (Turbulent)', 'Turbulent'],
      ['उग्र (Fierce)', 'Fierce'],
    ],
    '"Placid" का अर्थ शांत, स्थिर और आसानी से क्रोधित न होने वाला होता है; "Calm" इसका सही पर्याय है।',
    '"Placid" means not easily upset or excited; calm and peaceful.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: RELUCTANT',
    'Choose the most appropriate synonym of the word: RELUCTANT',
    ['अनिच्छुक (Unwilling)', 'Unwilling'],
    [
      ['तत्पर (Eager)', 'Eager'],
      ['इच्छुक (Willing)', 'Willing'],
      ['उत्साही (Ardent)', 'Ardent'],
    ],
    '"Reluctant" का अर्थ किसी कार्य को करने में हिचकिचाने वाला या अनिच्छुक होता है; "Unwilling" इसका पर्याय है।',
    '"Reluctant" means unwilling and hesitant.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: SAGACIOUS',
    'Choose the most appropriate synonym of the word: SAGACIOUS',
    ['बुद्धिमान / दूरदर्शी (Shrewd)', 'Shrewd'],
    [
      ['नासमझ (Foolish)', 'Foolish'],
      ['अज्ञानी (Ignorant)', 'Ignorant'],
      ['भोला (Naive)', 'Naive'],
    ],
    '"Sagacious" का अर्थ तीक्ष्ण बुद्धि और सही निर्णय क्षमता वाला (विवेकी) होता है; "Shrewd" या "Wise" इसका पर्याय है।',
    '"Sagacious" means having or showing keen mental discernment and good judgment; shrewd or wise.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: TRANQUIL',
    'Choose the most appropriate synonym of the word: TRANQUIL',
    ['शांतिमय / निश्चल (Serene)', 'Serene'],
    [
      ['कोलाहलपूर्ण (Noisy)', 'Noisy'],
      ['अशांत (Chaotic)', 'Chaotic'],
      ['उग्र (Violent)', 'Violent'],
    ],
    '"Tranquil" का अर्थ शोरगुल और अशांति से मुक्त (शांत) होता है; "Serene" इसका सटीक पर्याय है।',
    '"Tranquil" means free from disturbance; calm and serene.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: VENERATE',
    'Choose the most appropriate synonym of the word: VENERATE',
    ['गहरा सम्मान करना (Revere)', 'Revere'],
    [
      ['तिरस्कार करना (Despise)', 'Despise'],
      ['अपमानित करना (Scorn)', 'Scorn'],
      ['मजाक उड़ाना (Mock)', 'Mock'],
    ],
    '"Venerate" का अर्थ किसी व्यक्ति या परंपरा के प्रति अत्यंत श्रद्धा व सम्मान प्रकट करना है; "Revere" इसका पर्याय है।',
    '"Venerate" means to regard with great respect; revere.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: WRETCHED',
    'Choose the most appropriate synonym of the word: WRETCHED',
    ['दयनीय / अत्यंत दुःखी (Miserable)', 'Miserable'],
    [
      ['सौभाग्यशाली (Fortunate)', 'Fortunate'],
      ['आनंदमय (Joyful)', 'Joyful'],
      ['उत्कृष्ट (Splendid)', 'Splendid'],
    ],
    '"Wretched" का अर्थ बहुत ही दयनीय या दुखद स्थिति में होना है; "Miserable" इसका पर्याय है।',
    '"Wretched" means in a very unhappy or unfortunate state; miserable.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: YEARN',
    'Choose the most appropriate synonym of the word: YEARN',
    ['तीव्र अभिलाषा करना / तरसना (Crave)', 'Crave'],
    [
      ['घृणा करना (Loathe)', 'Loathe'],
      ['अस्वीकार करना (Reject)', 'Reject'],
      ['त्यागना (Forsake)', 'Forsake'],
    ],
    '"Yearn" का अर्थ किसी वस्तु या व्यक्ति की प्रबल लालसा या चाह रखना है; "Crave" या "Long" इसका पर्याय है।',
    '"Yearn" means to have an intense feeling of longing for something; crave.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ACUMEN',
    'Choose the most appropriate synonym of the word: ACUMEN',
    ['कुशाग्र बुद्धि / सूझबूझ (Astuteness)', 'Astuteness'],
    [
      ['मंदबुद्धिता (Stupidity)', 'Stupidity'],
      ['अज्ञान (Ignorance)', 'Ignorance'],
      ['अनाड़ीपन (Clumsiness)', 'Clumsiness'],
    ],
    '"Acumen" का अर्थ त्वरित और सटीक निर्णय लेने की क्षमता (पैनी समझ) होता है; "Astuteness" इसका पर्याय है।',
    '"Acumen" means the ability to make good judgments and quick decisions; astuteness.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: BOISTEROUS',
    'Choose the most appropriate synonym of the word: BOISTEROUS',
    ['शोरगुल वाला / उद्दाम (Rowdy)', 'Rowdy'],
    [
      ['मौन (Silent)', 'Silent'],
      ['संयमित (Restrained)', 'Restrained'],
      ['शर्मीला (Bashful)', 'Bashful'],
    ],
    '"Boisterous" का अर्थ अत्यंत ऊर्जावान, उत्साही और शोर मचाने वाला होता है; "Rowdy" या "Noisy" इसका पर्याय है।',
    '"Boisterous" means noisy, energetic, and cheerful; rowdy.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: CHASTISE',
    'Choose the most appropriate synonym of the word: CHASTISE',
    ['फटकार लगाना / दंडित करना (Rebuke)', 'Rebuke'],
    [
      ['प्रशंसा करना (Praise)', 'Praise'],
      ['पुरस्कृत करना (Reward)', 'Reward'],
      ['सांत्वना देना (Console)', 'Console'],
    ],
    '"Chastise" का अर्थ किसी गलती के लिए कड़ी फटकार लगाना या दंड देना है; "Rebuke" इसका पर्याय है।',
    '"Chastise" means to reprimand or punish severely; rebuke.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: DESOLATE',
    'Choose the most appropriate synonym of the word: DESOLATE',
    ['उजाड़ / सुनसान (Bleak)', 'Bleak'],
    [
      ['आबाद (Populous)', 'Populous'],
      ['हरा-भरा (Lush)', 'Lush'],
      ['रौनकदार (Festive)', 'Festive'],
    ],
    '"Desolate" का अर्थ निर्जन, उजाड़ या निराशाजनक होता है; "Bleak" इसका सही पर्याय है।',
    '"Desolate" means deserted of people and in a state of bleak and dismal emptiness.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: EMULATE',
    'Choose the most appropriate synonym of the word: EMULATE',
    ['अनुकरण करना / बराबरी करने का प्रयास करना (Imitate)', 'Imitate'],
    [
      ['तिरस्कार करना (Disdain)', 'Disdain'],
      ['विरोध करना (Oppose)', 'Oppose'],
      ['मिटाना (Erase)', 'Erase'],
    ],
    '"Emulate" का अर्थ किसी के अच्छे गुणों की बराबरी करने या उनसे आगे निकलने के लिए अनुसरण करना होता है; "Imitate" इसका निकटतम पर्याय है।',
    '"Emulate" means to match or surpass a person or achievement, typically by imitation.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: FEASIBLE',
    'Choose the most appropriate synonym of the word: FEASIBLE',
    ['व्यावहारिक / संभव (Viable)', 'Viable'],
    [
      ['असंभव (Impossible)', 'Impossible'],
      ['कल्पनाशील मात्र (Impractical)', 'Impractical'],
      ['व्यर्थ (Futile)', 'Futile'],
    ],
    '"Feasible" का अर्थ जिसे आसानी से या व्यावहारिक रूप से किया जा सके (संभव) होता है; "Viable" इसका पर्याय है।',
    '"Feasible" means possible and practical to do easily or conveniently; viable.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: GARRULOUS',
    'Choose the most appropriate synonym of the word: GARRULOUS',
    ['बातूनी / वाचाल (Talkative)', 'Talkative'],
    [
      ['मितभाषी (Taciturn)', 'Taciturn'],
      ['मौन (Silent)', 'Silent'],
      ['संक्षिप्त (Laconic)', 'Laconic'],
    ],
    '"Garrulous" का अर्थ बहुत अधिक—अक्सर व्यर्थ की—बातें करने वाला होता है; "Talkative" इसका सही पर्याय है।',
    '"Garrulous" means excessively talkative, especially on trivial matters.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: HAUGHTY',
    'Choose the most appropriate synonym of the word: HAUGHTY',
    ['घमंडी / अहंकारी (Arrogant)', 'Arrogant'],
    [
      ['विनम्र (Humble)', 'Humble'],
      ['शालीन (Modest)', 'Modest'],
      ['दब्बू (Meek)', 'Meek'],
    ],
    '"Haughty" का अर्थ दूसरों को तुच्छ समझकर घमंड दिखाने वाला होता है; "Arrogant" इसका सटीक पर्याय है।',
    '"Haughty" means arrogantly superior and disdainful.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: INCESSANT',
    'Choose the most appropriate synonym of the word: INCESSANT',
    ['निरंतर / अनवरत (Ceaseless)', 'Ceaseless'],
    [
      ['रुक-रुक कर होने वाला (Intermittent)', 'Intermittent'],
      ['क्षणिक (Brief)', 'Brief'],
      ['सामयिक (Occasional)', 'Occasional'],
    ],
    '"Incessant" (in- + cease) का अर्थ बिना रुके लगातार जारी रहने वाला होता है; "Ceaseless" इसका सही पर्याय है।',
    '"Incessant" means continuing without pause or interruption; ceaseless.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: JUBILANT',
    'Choose the most appropriate synonym of the word: JUBILANT',
    ['अत्यंत प्रसन्न / विजयोल्लास से भरा (Exultant)', 'Exultant'],
    [
      ['उदास (Dejected)', 'Dejected'],
      ['निराश (Despondent)', 'Despondent'],
      ['चिंतित (Anxious)', 'Anxious'],
    ],
    '"Jubilant" का अर्थ किसी सफलता या खुशी के कारण बहुत प्रफुल्लित होना है; "Exultant" इसका सही पर्याय है।',
    '"Jubilant" means feeling or expressing great happiness and triumph; exultant.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: KINDLE',
    'Choose the most appropriate synonym of the word: KINDLE',
    ['प्रज्वलित करना / जगाना (Ignite)', 'Ignite'],
    [
      ['बुझाना (Extinguish)', 'Extinguish'],
      ['दबाना (Suppress)', 'Suppress'],
      ['ठंडा करना (Quench)', 'Quench'],
    ],
    '"Kindle" का अर्थ आग जलाना या मन में कोई भावना/रुचि जगाना होता है; "Ignite" इसका सटीक पर्याय है।',
    '"Kindle" means to light or set on fire, or arouse an emotion; ignite.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: LAX',
    'Choose the most appropriate synonym of the word: LAX',
    ['ढिलाई बरतने वाला / लापरवाह (Negligent)', 'Negligent'],
    [
      ['सख्त (Strict)', 'Strict'],
      ['कठोर (Rigorous)', 'Rigorous'],
      ['अनुशासित (Disciplined)', 'Disciplined'],
    ],
    '"Lax" का अर्थ नियमों या नियंत्रण के प्रति पर्याप्त सावधानी न रखने वाला (ढीला) होता है; "Negligent" इसका पर्याय है।',
    '"Lax" means not sufficiently strict, severe, or careful; negligent.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: MUNDANE',
    'Choose the most appropriate synonym of the word: MUNDANE',
    ['सांसारिक / नीरस व साधारण (Ordinary)', 'Ordinary'],
    [
      ['असाधारण (Extraordinary)', 'Extraordinary'],
      ['अलौकिक (Heavenly)', 'Heavenly'],
      ['रोमांचक (Exciting)', 'Exciting'],
    ],
    '"Mundane" का अर्थ रोजमर्रा का, साधारण और नीरस होता है; "Ordinary" इसका उपयुक्त पर्याय है।',
    '"Mundane" means lacking interest or excitement; dull and ordinary.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: NEFARIOUS',
    'Choose the most appropriate synonym of the word: NEFARIOUS',
    ['दुष्ट / अधम (Wicked)', 'Wicked'],
    [
      ['सदाचारी (Virtuous)', 'Virtuous'],
      ['नेक (Noble)', 'Noble'],
      ['पवित्र (Pure)', 'Pure'],
    ],
    '"Nefarious" का अर्थ अत्यंत दुष्ट या आपराधिक प्रवृत्ति का होता है; "Wicked" इसका सटीक पर्याय है।',
    '"Nefarious" means wicked or criminal.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: OSTENTATIOUS',
    'Choose the most appropriate synonym of the word: OSTENTATIOUS',
    ['दिखावटी / आडंबरपूर्ण (Showy)', 'Showy'],
    [
      ['सादा (Modest)', 'Modest'],
      ['संयमित (Restrained)', 'Restrained'],
      ['विनम्र (Unassuming)', 'Unassuming'],
    ],
    '"Ostentatious" का अर्थ धन या वैभव का भड़कीला प्रदर्शन करने वाला (दिखावटी) होता है; "Showy" इसका पर्याय है।',
    '"Ostentatious" means characterized by vulgar or pretentious display; designed to impress; showy.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: PERNICIOUS',
    'Choose the most appropriate synonym of the word: PERNICIOUS',
    ['अत्यंत हानिकारक / घातक (Harmful)', 'Harmful'],
    [
      ['लाभदायक (Beneficial)', 'Beneficial'],
      ['स्वास्थ्यकर (Wholesome)', 'Wholesome'],
      ['सहायक (Helpful)', 'Helpful'],
    ],
    '"Pernicious" का अर्थ धीरे-धीरे या गुप्त रूप से बहुत बड़ा नुकसान पहुँचाने वाला (घातक) होता है; "Harmful" इसका पर्याय है।',
    '"Pernicious" means having a harmful effect, especially in a gradual or subtle way.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: RANCOR',
    'Choose the most appropriate synonym of the word: RANCOR',
    ['कटुता / पुराना द्वेष (Bitterness)', 'Bitterness'],
    [
      ['सद्भाव (Goodwill)', 'Goodwill'],
      ['स्नेह (Affection)', 'Affection'],
      ['क्षमा (Forgiveness)', 'Forgiveness'],
    ],
    '"Rancor" का अर्थ लंबे समय से मन में दबा हुआ द्वेष या कड़वाहट होता है; "Bitterness" इसका सटीक पर्याय है।',
    '"Rancor" means bitterness or resentfulness, especially long-standing.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: SOLITARY',
    'Choose the most appropriate synonym of the word: SOLITARY',
    ['अकेला / एकाकी (Lonely)', 'Lonely'],
    [
      ['भीड़भाड़ वाला (Crowded)', 'Crowded'],
      ['सामाजिक (Social)', 'Social'],
      ['सामूहिक (Collective)', 'Collective'],
    ],
    '"Solitary" का अर्थ अकेला रहने वाला या एकांत होता है; "Lonely" या "Single" इसका पर्याय है।',
    '"Solitary" means done or existing alone; lonely.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: TENACIOUS',
    'Choose the most appropriate synonym of the word: TENACIOUS',
    ['दृढ़ / न छोड़ने वाला (Persistent)', 'Persistent'],
    [
      ['कमजोर (Weak)', 'Weak'],
      ['ढुलमुल (Irresolute)', 'Irresolute'],
      ['छोड़ देने वाला (Yielding)', 'Yielding'],
    ],
    '"Tenacious" का अर्थ किसी लक्ष्य या पकड़ को मजबूती से थामे रहने वाला (दृढ़निश्चयी) होता है; "Persistent" इसका पर्याय है।',
    '"Tenacious" means tending to keep a firm hold of something; persistent and determined.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: UNCANNY',
    'Choose the most appropriate synonym of the word: UNCANNY',
    ['अद्भुत / अलौकिक और विचित्र (Eerie)', 'Eerie'],
    [
      ['सामान्य (Ordinary)', 'Ordinary'],
      ['परिचित (Familiar)', 'Familiar'],
      ['स्वाभाविक (Natural)', 'Natural'],
    ],
    '"Uncanny" का अर्थ रहस्यमय या असामान्य रूप से विचित्र होता है; "Eerie" या "Mysterious" इसका पर्याय है।',
    '"Uncanny" means strange or mysterious, especially in an unsettling way; eerie.',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: VERACIOUS',
    'Choose the most appropriate synonym of the word: VERACIOUS',
    ['सत्यवादी / सच्चा (Truthful)', 'Truthful'],
    [
      ['झूठा (Mendacious)', 'Mendacious'],
      ['कपटी (Deceitful)', 'Deceitful'],
      ['बनावटी (False)', 'False'],
    ],
    'लैटिन मूल "ver-" (सत्य) से बने "Veracious" का अर्थ सच बोलने वाला (सत्यनिष्ठ) है; "Truthful" इसका पर्याय है।',
    '"Veracious" means speaking or representing the truth; truthful.',
    'HARD',
    { grammarRuleHi: 'Root "ver-" का अर्थ "truth" (सत्य) होता है (जैसे verify, verdict, veracity)।' }
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: WHIMSICAL',
    'Choose the most appropriate synonym of the word: WHIMSICAL',
    ['मनमौजी / सनकी और विनोदी (Fanciful)', 'Fanciful'],
    [
      ['गंभीर (Solemn)', 'Solemn'],
      ['तर्कसंगत (Rational)', 'Rational'],
      ['व्यावहारिक (Pragmatic)', 'Pragmatic'],
    ],
    '"Whimsical" का अर्थ कल्पनाशील, अनपेक्षित और मनमौजी ढंग से चंचल होता है; "Fanciful" इसका सही पर्याय है।',
    '"Whimsical" means playfully quaint or fanciful, especially in an appealing and amusing way.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: ALLEGE',
    'Choose the most appropriate synonym of the word: ALLEGE',
    ['बिना प्रमाण दावा या आरोप करना (Assert)', 'Assert'],
    [
      ['खंडन करना (Refute)', 'Refute'],
      ['सिद्ध करना (Disprove)', 'Disprove'],
      ['मुकर जाना (Deny)', 'Deny'],
    ],
    '"Allege" का अर्थ बिना ठोस सबूत के किसी बात का दावा करना या आरोप लगाना होता है; "Assert" या "Claim" इसका निकटतम पर्याय है।',
    '"Allege" means to claim or assert that someone has done something wrong, typically without proof.',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: BRISK',
    'Choose the most appropriate synonym of the word: BRISK',
    ['तेज / फुर्तीला (Energetic)', 'Energetic'],
    [
      ['धीमा (Slow)', 'Slow'],
      ['आलसी (Lethargic)', 'Lethargic'],
      ['मंद (Sluggish)', 'Sluggish'],
    ],
    '"Brisk" का अर्थ सक्रिय, तेज और ताजगी भरा होता है; "Energetic" या "Quick" इसका सही पर्याय है।',
    '"Brisk" means active, fast, and energetic.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: COMPASSION',
    'Choose the most appropriate synonym of the word: COMPASSION',
    ['करुणा / सहानुभूति (Sympathy)', 'Sympathy'],
    [
      ['निर्दयता (Cruelty)', 'Cruelty'],
      ['कठोरता (Harshness)', 'Harshness'],
      ['उदासीनता (Apathy)', 'Apathy'],
    ],
    '"Compassion" का अर्थ दूसरों के दुःख को देखकर उठने वाली दया और करुणा है; "Sympathy" या "Empathy" इसका पर्याय है।',
    '"Compassion" means sympathetic pity and concern for the sufferings or misfortunes of others.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Synonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त पर्यायवाची (Synonym) चुनिए: DETERIORATE',
    'Choose the most appropriate synonym of the word: DETERIORATE',
    ['बदतर होना / बिगड़ना (Worsen)', 'Worsen'],
    [
      ['सुधरना (Improve)', 'Improve'],
      ['बढ़ना (Flourish)', 'Flourish'],
      ['उन्नति करना (Progress)', 'Progress'],
    ],
    '"Deteriorate" का अर्थ समय के साथ स्थिति या गुणवत्ता में गिरावट आना (बिगड़ना) है; "Worsen" इसका सही पर्याय है।',
    '"Deteriorate" means to become progressively worse; worsen.',
    'MEDIUM'
  ),

  // =========================================================================
  // SECTION 3: VOCABULARY BANK - ANTONYMS (80 Qs)
  // =========================================================================
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ANCIENT',
    'Choose the most appropriate antonym of the word: ANCIENT',
    ['आधुनिक (Modern)', 'Modern'],
    [
      ['प्राचीन (Old)', 'Old'],
      ['पुरातन (Archaic)', 'Archaic'],
      ['ऐतिहासिक (Historic)', 'Historic'],
    ],
    '"Ancient" का अर्थ बहुत पुराना या प्राचीन होता है; इसका सटीक विलोम "Modern" (आधुनिक) है।',
    '"Ancient" means belonging to the very distant past; its antonym is "modern."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: BARREN',
    'Choose the most appropriate antonym of the word: BARREN',
    ['उपजाऊ (Fertile)', 'Fertile'],
    [
      ['बंजर (Sterile)', 'Sterile'],
      ['शुष्क (Arid)', 'Arid'],
      ['सूना (Desolate)', 'Desolate'],
    ],
    '"Barren" का अर्थ ऐसी भूमि है जिसमें कुछ न उगे (बंजर); इसका सटीक विलोम "Fertile" (उपजाऊ) है।',
    '"Barren" means too poor to produce vegetation; its antonym is "fertile."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: COURAGEOUS',
    'Choose the most appropriate antonym of the word: COURAGEOUS',
    ['कायर (Cowardly)', 'Cowardly'],
    [
      ['वीर (Brave)', 'Brave'],
      ['निडर (Fearless)', 'Fearless'],
      ['साहसी (Valiant)', 'Valiant'],
    ],
    '"Courageous" का अर्थ साहसी होता है; इसका सीधा विलोम "Cowardly" (डरपोक/कायर) है।',
    '"Courageous" means brave; its opposite is "cowardly."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: DENSE',
    'Choose the most appropriate antonym of the word: DENSE',
    ['विरल / छितराया हुआ (Sparse)', 'Sparse'],
    [
      ['घना (Thick)', 'Thick'],
      ['सघन (Compact)', 'Compact'],
      ['गाढ़ा (Concentrated)', 'Concentrated'],
    ],
    '"Dense" का अर्थ घना या सघन होता है; इसका सटीक विलोम "Sparse" (विरल या कम घना) है।',
    '"Dense" means closely compacted; its antonym is "sparse" (thinly dispersed).',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: EXPLICIT',
    'Choose the most appropriate antonym of the word: EXPLICIT',
    ['निहित / अस्पष्ट (Implicit)', 'Implicit'],
    [
      ['स्पष्ट (Clear)', 'Clear'],
      ['सुस्पष्ट (Obvious)', 'Obvious'],
      ['प्रकट (Overt)', 'Overt'],
    ],
    '"Explicit" का अर्थ जो खुलकर और स्पष्ट कहा गया हो; इसका विलोम "Implicit" (जो सीधे न कहकर भीतर निहित हो) होता है।',
    '"Explicit" means stated clearly and in detail; its antonym is "implicit."',
    'MEDIUM',
    { grammarRuleHi: 'उपसर्ग युग्म "ex-" (बाहर/प्रकट) और "im-/in-" (अंदर/निहित) प्रायः विपरीतार्थक युग्म बनाते हैं।' }
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: FLEXIBLE',
    'Choose the most appropriate antonym of the word: FLEXIBLE',
    ['कठोर / अनम्य (Rigid)', 'Rigid'],
    [
      ['लचीला (Pliable)', 'Pliable'],
      ['मुलायम (Supple)', 'Supple'],
      ['अनुकूलनशील (Adaptable)', 'Adaptable'],
    ],
    '"Flexible" का अर्थ जो आसानी से मुड़ सके या बदल सके (लचीला); इसका विलोम "Rigid" (कठोर/अपरिवर्तनशील) है।',
    '"Flexible" means able to bend or adapt easily; its opposite is "rigid."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: GLOOMY',
    'Choose the most appropriate antonym of the word: GLOOMY',
    ['प्रसन्न / उज्ज्वल (Cheerful)', 'Cheerful'],
    [
      ['उदास (Dismal)', 'Dismal'],
      ['अंधकारमय (Dark)', 'Dark'],
      ['खिन्न (Morose)', 'Morose'],
    ],
    '"Gloomy" का अर्थ अंधकारमय या उदासी भरा होता है; इसका सटीक विलोम "Cheerful" (प्रसन्नचित्त) है।',
    '"Gloomy" means dark or poorly lit, or feeling distressed; its antonym is "cheerful."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: HOSTILE',
    'Choose the most appropriate antonym of the word: HOSTILE',
    ['मैत्रीपूर्ण (Friendly)', 'Friendly'],
    [
      ['शत्रुतापूर्ण (Antagonistic)', 'Antagonistic'],
      ['आक्रामक (Aggressive)', 'Aggressive'],
      ['द्वेषपूर्ण (Spiteful)', 'Spiteful'],
    ],
    '"Hostile" का अर्थ शत्रुतापूर्ण या विरोधी होता है; इसका विलोम "Friendly" या "Amicable" है।',
    '"Hostile" means unfriendly and antagonistic; its antonym is "friendly."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: INNOCENT',
    'Choose the most appropriate antonym of the word: INNOCENT',
    ['दोषी (Guilty)', 'Guilty'],
    [
      ['निर्दोष (Blameless)', 'Blameless'],
      ['पवित्र (Pure)', 'Pure'],
      ['निष्कपट (Naive)', 'Naive'],
    ],
    '"Innocent" का अर्थ निर्दोष या अपराध से मुक्त होता है; इसका विलोम "Guilty" (दोषी) है।',
    '"Innocent" means not guilty of a crime or offense; its antonym is "guilty."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए:LENIENT',
    'Choose the most appropriate antonym of the word: LENIENT',
    ['कठोर / सख्त (Strict)', 'Strict'],
    [
      ['उदार (Merciful)', 'Merciful'],
      ['नरम (Mild)', 'Mild'],
      ['दयालु (Tolerant)', 'Tolerant'],
    ],
    '"Lenient" का अर्थ दंड या नियमों में ढील देने वाला (उदार) होता है; इसका विलोम "Strict" (कठोर) है।',
    '"Lenient" means merciful or tolerant; its antonym is "strict."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: MALIGNANT',
    'Choose the most appropriate antonym of the word: MALIGNANT',
    ['सौम्य / अहानिकर (Benign)', 'Benign'],
    [
      ['घातक (Fatal)', 'Fatal'],
      ['विषैला (Virulent)', 'Virulent'],
      ['विनाशकारी (Destructive)', 'Destructive'],
    ],
    'चिकित्सा व सामान्य प्रयोग में "Malignant" (घातक/दुष्ट) का सटीक विलोम "Benign" (सौम्य/हानिरहित) होता है।',
    '"Malignant" means evil or infectious/deadly in nature; its exact antonym is "benign."',
    'HARD',
    { grammarRuleHi: 'Root "mal-" (बुरा) और "ben-/bene-" (अच्छा) एक दूसरे के विपरीतार्थी होते हैं।' }
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: NARROW',
    'Choose the most appropriate antonym of the word: NARROW',
    ['चौड़ा / विशाल (Broad)', 'Broad'],
    [
      ['संकरा (Tight)', 'Tight'],
      ['सीमित (Confined)', 'Confined'],
      ['तंग (Cramped)', 'Cramped'],
    ],
    '"Narrow" का अर्थ संकीर्ण या संकरा होता है; इसका विलोम "Broad" या "Wide" (चौड़ा) है।',
    '"Narrow" means of small width; its opposite is "broad."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: OPTIMIST',
    'Choose the most appropriate antonym of the word: OPTIMIST',
    ['निराशावादी (Pessimist)', 'Pessimist'],
    [
      ['आदर्शवादी (Idealist)', 'Idealist'],
      ['यथार्थवादी (Realist)', 'Realist'],
      ['आशावादी (Hopeful person)', 'Believer'],
    ],
    '"Optimist" वह व्यक्ति है जो हमेशा सकारात्मक पक्ष देखता है (आशावादी); इसका विलोम "Pessimist" (निराशावादी) है।',
    'An "optimist" expects the best possible outcome; a "pessimist" expects the worst.',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: PROSPERITY',
    'Choose the most appropriate antonym of the word: PROSPERITY',
    ['विपत्ति / दरिद्रता (Adversity)', 'Adversity'],
    [
      ['संपन्नता (Affluence)', 'Affluence'],
      ['सफलता (Success)', 'Success'],
      ['समृद्धि (Wealth)', 'Wealth'],
    ],
    '"Prosperity" का अर्थ सुख-समृद्धि या खुशहाली है; इसका विलोम "Adversity" (विपत्ति/दुर्दशा) है।',
    '"Prosperity" means the state of being prosperous and flourishing; its opposite is "adversity."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: QUENCH',
    'Choose the most appropriate antonym of the word: QUENCH',
    ['भड़काना / जलाना (Ignite)', 'Ignite'],
    [
      ['बुझाना (Extinguish)', 'Extinguish'],
      ['शांत करना (Slake)', 'Slake'],
      ['दबाना (Douse)', 'Douse'],
    ],
    '"Quench" का अर्थ प्यास या आग बुझाना होता है; इसका विलोम "Ignite" (प्रज्वलित करना) है।',
    '"Quench" means to extinguish a fire or satisfy thirst; its antonym is "ignite."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: RECKLESS',
    'Choose the most appropriate antonym of the word: RECKLESS',
    ['सावधान / सतर्क (Cautious)', 'Cautious'],
    [
      ['उतावला (Rash)', 'Rash'],
      ['लापरवाह (Careless)', 'Careless'],
      ['अविवेकी (Heedless)', 'Heedless'],
    ],
    '"Reckless" का अर्थ परिणाम की चिंता किए बिना लापरवाह होना है; इसका विलोम "Cautious" (सावधान) है।',
    '"Reckless" means heedless of danger or consequences; its opposite is "cautious."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: SHALLOW',
    'Choose the most appropriate antonym of the word: SHALLOW',
    ['गहरा (Deep)', 'Deep'],
    [
      ['उथला (Superficial)', 'Superficial'],
      ['सतही (Surface-level)', 'Trivial'],
      ['हल्का (Slight)', 'Slight'],
    ],
    '"Shallow" का अर्थ कम गहरा (उथला) होता है; इसका सटीक विलोम "Deep" (गहरा) है।',
    '"Shallow" means of little depth; its antonym is "deep."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: TIMID',
    'Choose the most appropriate antonym of the word: TIMID',
    ['निडर / साहसी (Bold)', 'Bold'],
    [
      ['डरपोक (Shy)', 'Shy'],
      ['कायर (Fearful)', 'Fearful'],
      ['संकोची (Bashful)', 'Bashful'],
    ],
    '"Timid" का अर्थ डरपोक या संकोची होता है; इसका विलोम "Bold" (साहसी/निर्भीक) है।',
    '"Timid" means showing a lack of courage or confidence; its opposite is "bold."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: URBAN',
    'Choose the most appropriate antonym of the word: URBAN',
    ['ग्रामीण (Rural)', 'Rural'],
    [
      ['नगरीय (Municipal)', 'Municipal'],
      ['महानगरीय (Metropolitan)', 'Metropolitan'],
      ['नागरिक (Civic)', 'Civic'],
    ],
    '"Urban" का अर्थ शहर से संबंधित (नगरीय) होता है; इसका सटीक विलोम "Rural" (ग्रामीण) है।',
    '"Urban" relates to a town or city; its antonym is "rural" (countryside).',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: VOLUNTARY',
    'Choose the most appropriate antonym of the word: VOLUNTARY',
    ['अनिवार्य / बाध्यकारी (Compulsory)', 'Compulsory'],
    [
      ['स्वैच्छिक (Optional)', 'Optional'],
      ['इच्छानुसार (Discretionary)', 'Discretionary'],
      ['स्वतंत्र (Freewill)', 'Spontaneous'],
    ],
    '"Voluntary" का अर्थ अपनी इच्छा से किया जाने वाला (स्वैच्छिक) है; इसका विलोम "Compulsory" या "Mandatory" (अनिवार्य) है।',
    '"Voluntary" means done of one’s own free will; its antonym is "compulsory."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: WISDOM',
    'Choose the most appropriate antonym of the word: WISDOM',
    ['मूर्खता (Folly)', 'Folly'],
    [
      ['ज्ञान (Knowledge)', 'Knowledge'],
      ['विवेक (Prudence)', 'Prudence'],
      ['अंतर्दृष्टि (Insight)', 'Insight'],
    ],
    '"Wisdom" (संज्ञा) का अर्थ बुद्धिमत्ता या विवेक होता है; इसका सटीक विलोम "Folly" (मूर्खता) है।',
    '"Wisdom" means soundness of action or decision; its opposite is "folly."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ACQUIT',
    'Choose the most appropriate antonym of the word: ACQUIT',
    ['दोषी ठहराना (Convict)', 'Convict'],
    [
      ['बरी करना (Absolve)', 'Absolve'],
      ['दोषमुक्त करना (Exonerate)', 'Exonerate'],
      ['क्षमा करना (Pardon)', 'Pardon'],
    ],
    '"Acquit" का अर्थ न्यायालय द्वारा किसी व्यक्ति को आरोपों से बरी करना है; इसका विलोम "Convict" (दोषी सिद्ध करना) है।',
    '"Acquit" means to free someone from a criminal charge; its legal antonym is "convict."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: BLEAK',
    'Choose the most appropriate antonym of the word: BLEAK',
    ['आशाजनक / सुखद (Promising)', 'Promising'],
    [
      ['निराशाजनक (Dismal)', 'Dismal'],
      ['उजाड़ (Desolate)', 'Desolate'],
      ['बेरंग (Dreary)', 'Dreary'],
    ],
    '"Bleak" का अर्थ ठंडा, सूना या निराशाजनक होता है; इसका विलोम "Promising" या "Cheerful" है।',
    '"Bleak" means cold, miserable, and hopeless; its opposite is "promising."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: CONCEAL',
    'Choose the most appropriate antonym of the word: CONCEAL',
    ['प्रकट करना / उजागर करना (Reveal)', 'Reveal'],
    [
      ['छिपाना (Hide)', 'Hide'],
      ['ढकना (Mask)', 'Mask'],
      ['गुप्त रखना (Disguise)', 'Disguise'],
    ],
    '"Conceal" का अर्थ छिपाना या गुप्त रखना होता है; इसका सीधा विलोम "Reveal" (प्रकट करना) है।',
    '"Conceal" means to keep from sight or hide; its antonym is "reveal."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: DIFFIDENT',
    'Choose the most appropriate antonym of the word: DIFFIDENT',
    ['आत्मविश्वासी (Confident)', 'Confident'],
    [
      ['संकोची (Bashful)', 'Bashful'],
      ['शर्मीला (Shy)', 'Shy'],
      ['अनिश्चित (Tentative)', 'Tentative'],
    ],
    '"Diffident" का अर्थ आत्मविश्वास की कमी वाला या संकोची होता है; इसका सटीक विलोम "Confident" (आत्मविश्वासी) है।',
    '"Diffident" means modest or shy because of a lack of self-confidence; its antonym is "confident."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ELEVATE',
    'Choose the most appropriate antonym of the word: ELEVATE',
    ['नीचे गिराना / घटाना (Depress)', 'Depress'],
    [
      ['ऊपर उठाना (Raise)', 'Raise'],
      ['पदोन्नत करना (Promote)', 'Promote'],
      ['बढ़ाना (Uplift)', 'Uplift'],
    ],
    '"Elevate" का अर्थ ऊँचा उठाना होता है; इसका विलोम "Depress" या "Lower" (नीचे करना) है।',
    '"Elevate" means to raise or lift to a higher position; its antonym is "depress" or "lower."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: FRIVOLOUS',
    'Choose the most appropriate antonym of the word: FRIVOLOUS',
    ['गंभीर (Serious)', 'Serious'],
    [
      ['तुच्छ (Trivial)', 'Trivial'],
      ['चंचल (Flippant)', 'Flippant'],
      ['मूर्खतापूर्ण (Silly)', 'Silly'],
    ],
    '"Frivolous" का अर्थ हल्का, तुच्छ या अगंभीर होता है; इसका सटीक विलोम "Serious" (गंभीर) है।',
    '"Frivolous" means not having any serious purpose or value; its opposite is "serious."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: GENEROUS',
    'Choose the most appropriate antonym of the word: GENEROUS',
    ['कंजूस / स्वार्थी (Stingy)', 'Stingy'],
    [
      ['उदार (Bountiful)', 'Bountiful'],
      ['दानी (Charitable)', 'Charitable'],
      ['महानुभाव (Magnanimous)', 'Magnanimous'],
    ],
    '"Generous" का अर्थ खुले दिल से देने वाला (उदार) होता है; इसका विलोम "Stingy" (कंजूस) है।',
    '"Generous" means showing readiness to give more than expected; its opposite is "stingy."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: HUMBLE',
    'Choose the most appropriate antonym of the word: HUMBLE',
    ['अहंकारी / घमंडी (Arrogant)', 'Arrogant'],
    [
      ['विनम्र (Modest)', 'Modest'],
      ['शालीन (Meek)', 'Meek'],
      ['सरल (Unassuming)', 'Unassuming'],
    ],
    '"Humble" का अर्थ विनम्र या अहंकार-रहित होता है; इसका सटीक विलोम "Arrogant" (घमंडी) है।',
    '"Humble" means having a modest estimate of one’s importance; its antonym is "arrogant."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: IMPEDE',
    'Choose the most appropriate antonym of the word: IMPEDE',
    ['सुगम बनाना / सहायता करना (Facilitate)', 'Facilitate'],
    [
      ['बाधा डालना (Hinder)', 'Hinder'],
      ['अवरोध करना (Obstruct)', 'Obstruct'],
      ['विलंब करना (Delay)', 'Delay'],
    ],
    '"Impede" का अर्थ मार्ग में बाधा डालना होता है; इसका विलोम "Facilitate" (रास्ता आसान बनाना) है।',
    '"Impede" means to delay or prevent by obstructing; its antonym is "facilitate."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: JADED',
    'Choose the most appropriate antonym of the word: JADED',
    ['ताजा / उत्साही (Refreshed)', 'Refreshed'],
    [
      ['थका हुआ (Weary)', 'Weary'],
      ['ऊबा हुआ (Bored)', 'Bored'],
      ['निस्तेज (Exhausted)', 'Exhausted'],
    ],
    '"Jaded" का अर्थ अत्यधिक काम या दोहराव के कारण थका व ऊबा हुआ होता है; इसका विलोम "Refreshed" (ताजा/ऊर्जावान) है।',
    '"Jaded" means tired, bored, or lacking enthusiasm after having too much of something; its opposite is "refreshed."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: KNOWLEDGE',
    'Choose the most appropriate antonym of the word: KNOWLEDGE',
    ['अज्ञान (Ignorance)', 'Ignorance'],
    [
      ['विद्वत्ता (Erudition)', 'Erudition'],
      ['अधिगम (Learning)', 'Learning'],
      ['प्रज्ञा (Wisdom)', 'Wisdom'],
    ],
    '"Knowledge" का अर्थ ज्ञान या जानकारी होता है; इसका सीधा विलोम "Ignorance" (अज्ञानता) है।',
    '"Knowledge" means facts, information, and skills acquired; its antonym is "ignorance."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: LUCIDITY',
    'Choose the most appropriate antonym of the word: LUCIDITY',
    ['अस्पष्टता / धुंधलापन (Obscurity)', 'Obscurity'],
    [
      ['स्पष्टता (Clarity)', 'Clarity'],
      ['पारदर्शिता (Transparency)', 'Transparency'],
      ['सरलता (Simplicity)', 'Simplicity'],
    ],
    '"Lucidity" (संज्ञा) का अर्थ अभिव्यक्ति या विचार की स्पष्टता है; इसका सटीक विलोम "Obscurity" (अस्पष्टता) है।',
    '"Lucidity" means clarity of expression; its opposite is "obscurity."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: MILD',
    'Choose the most appropriate antonym of the word: MILD',
    ['तीव्र / कठोर (Severe)', 'Severe'],
    [
      ['कोमल (Gentle)', 'Gentle'],
      ['हल्का (Moderate)', 'Moderate'],
      ['शांत (Calm)', 'Calm'],
    ],
    '"Mild" का अर्थ हल्का, कोमल या मध्यम होता है; इसका विलोम "Severe" (प्रचंड/कठोर) है।',
    '"Mild" means gentle and not severe; its antonym is "severe."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: NOBLE',
    'Choose the most appropriate antonym of the word: NOBLE',
    ['नीच / अधम (Ignoble)', 'Ignoble'],
    [
      ['महान (Exalted)', 'Exalted'],
      ['कुलीन (Aristocratic)', 'Aristocratic'],
      ['सदाचारी (Virtuous)', 'Virtuous'],
    ],
    '"Noble" का अर्थ उच्च नैतिक गुणों वाला या श्रेष्ठ होता है; इसका विलोम "Ignoble" (नीच/अनैतिक) या "Base" है।',
    '"Noble" means having fine personal qualities or high moral principles; its antonym is "ignoble."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: OPAQUE',
    'Choose the most appropriate antonym of the word: OPAQUE',
    ['पारदर्शी (Transparent)', 'Transparent'],
    [
      ['अस्पष्ट (Cloudy)', 'Cloudy'],
      ['अपारदर्शी (Murky)', 'Murky'],
      ['धुंधला (Hazy)', 'Hazy'],
    ],
    '"Opaque" का अर्थ जिसके आर-पार न देखा जा सके (अपारदर्शी) होता है; इसका विलोम "Transparent" (पारदर्शी) है।',
    '"Opaque" means not able to be seen through; its exact antonym is "transparent."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: PERMANENT',
    'Choose the most appropriate antonym of the word: PERMANENT',
    ['अस्थायी (Temporary)', 'Temporary'],
    [
      ['स्थायी (Lasting)', 'Lasting'],
      ['अमर (Perpetual)', 'Perpetual'],
      ['स्थिर (Fixed)', 'Fixed'],
    ],
    '"Permanent" का अर्थ सदा बना रहने वाला (स्थायी) होता है; इसका विलोम "Temporary" (अस्थायी) है।',
    '"Permanent" means lasting indefinitely; its antonym is "temporary."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: QUIET',
    'Choose the most appropriate antonym of the word: QUIET',
    ['कोलाहलपूर्ण (Boisterous)', 'Boisterous'],
    [
      ['शांत (Peaceful)', 'Peaceful'],
      ['मौन (Silent)', 'Silent'],
      ['निश्चल (Still)', 'Still'],
    ],
    '"Quiet" का अर्थ शांत या चुपचाप होता है; इसका विलोम "Boisterous" या "Noisy" (शोरगुल वाला) है।',
    '"Quiet" means making little or no noise; its opposite is "boisterous."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: RIGID',
    'Choose the most appropriate antonym of the word: RIGID',
    ['कोमल / लचीला (Pliable)', 'Pliable'],
    [
      ['सख्त (Stiff)', 'Stiff'],
      ['अटल (Inflexible)', 'Inflexible'],
      ['कड़ा (Hard)', 'Hard'],
    ],
    '"Rigid" का अर्थ कड़ा और न मुड़ने वाला होता है; इसका विलोम "Pliable" (आसानी से मुड़ने या ढलने वाला) है।',
    '"Rigid" means unable to bend or be forced out of shape; its opposite is "pliable."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: SCARCITY',
    'Choose the most appropriate antonym of the word: SCARCITY',
    ['प्रचुरता / बहुतायत (Abundance)', 'Abundance'],
    [
      ['कमी (Shortage)', 'Shortage'],
      ['अकाल (Dearth)', 'Dearth'],
      ['अभाव (Deficiency)', 'Deficiency'],
    ],
    '"Scarcity" का अर्थ किसी वस्तु की कमी या अभाव होता है; इसका विलोम "Abundance" (प्रचुरता) है।',
    '"Scarcity" means the state of being scarce or in short supply; its antonym is "abundance."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: TRANSPARENT',
    'Choose the most appropriate antonym of the word: TRANSPARENT',
    ['अपारदर्शी / धुंधला (Opaque)', 'Opaque'],
    [
      ['स्वच्छ (Clear)', 'Clear'],
      ['निर्मल (Lucid)', 'Lucid'],
      ['पारगम्य (Translucent)', 'Pellucid'],
    ],
    '"Transparent" का अर्थ पारदर्शी या सुस्पष्ट होता है; इसका सटीक विलोम "Opaque" (अपारदर्शी) है।',
    '"Transparent" allows light to pass through so objects behind can be seen; its opposite is "opaque."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: UNANIMITY',
    'Choose the most appropriate antonym of the word: UNANIMITY',
    ['मतभेद / असहमति (Discord)', 'Discord'],
    [
      ['सर्वसम्मति (Consensus)', 'Consensus'],
      ['एकमत (Agreement)', 'Agreement'],
      ['सद्भाव (Harmony)', 'Harmony'],
    ],
    '"Unanimity" का अर्थ सभी लोगों की एक राय या सर्वसम्मति होता है; इसका विलोम "Discord" (मतभेद/कलह) है।',
    '"Unanimity" means agreement by all people involved; its antonym is "discord."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: VAGUE',
    'Choose the most appropriate antonym of the word: VAGUE',
    ['सटीक / सुस्पष्ट (Precise)', 'Precise'],
    [
      ['अस्पष्ट (Ambiguous)', 'Ambiguous'],
      ['धुंधला (Blurred)', 'Blurred'],
      ['अनिश्चित (Indefinite)', 'Indefinite'],
    ],
    '"Vague" का अर्थ अस्पष्ट या अनिश्चित होता है; इसका सटीक विलोम "Precise" (बिल्कुल स्पष्ट एवं सटीक) है।',
    '"Vague" means uncertain, indefinite, or unclear; its antonym is "precise."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: WANE',
    'Choose the most appropriate antonym of the word: WANE',
    ['बढ़ना / चमक बढ़ना (Wax)', 'Wax'],
    [
      ['घटना (Decrease)', 'Decrease'],
      ['कमजोर होना (Fade)', 'Fade'],
      ['क्षीण होना (Dwindle)', 'Dwindle'],
    ],
    'चंद्रमा की कलाओं और सामान्य प्रयोग में "Wane" (घटना/क्षीण होना) का पारंपरिक विलोम "Wax" (बढ़ना/पूर्ण होना) होता है।',
    '"Wane" means to decrease in vigor, power, or extent; its classic antonym (especially for the moon) is "wax."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: YIELD',
    'Choose the most appropriate antonym of the word: YIELD',
    ['विरोध करना / अड़े रहना (Resist)', 'Resist'],
    [
      ['समर्पण करना (Surrender)', 'Surrender'],
      ['झुक जाना (Submit)', 'Submit'],
      ['मान लेना (Concede)', 'Concede'],
    ],
    'जहाँ "Yield" का अर्थ दबाव में झुकना या समर्पण करना होता है, वहीं इसका सटीक विलोम "Resist" (प्रतिरोध करना) है।',
    'In the sense of giving way to pressure, "yield" has the antonym "resist."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ZENITH',
    'Choose the most appropriate antonym of the word: ZENITH',
    ['अधोबिंदु / निम्नतम स्तर (Nadir)', 'Nadir'],
    [
      ['शिखर (Apex)', 'Apex'],
      ['चोटी (Summit)', 'Summit'],
      ['पराकाष्ठा (Pinnacle)', 'Pinnacle'],
    ],
    '"Zenith" का अर्थ सर्वोच्च शिखर या चरम बिंदु होता है; इसका सटीक विलोम "Nadir" (निम्नतम बिंदु) है।',
    '"Zenith" means the highest point or peak; its exact antonym is "nadir" (the lowest point).',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: AMPLIFY',
    'Choose the most appropriate antonym of the word: AMPLIFY',
    ['कम करना / घटाना (Diminish)', 'Diminish'],
    [
      ['बढ़ाना (Magnify)', 'Magnify'],
      ['विस्तार करना (Expand)', 'Expand'],
      ['तीव्र करना (Intensify)', 'Intensify'],
    ],
    '"Amplify" का अर्थ आवाज, प्रभाव या आकार को बढ़ाना होता है; इसका विलोम "Diminish" (घटाना) है।',
    '"Amplify" means to increase the volume, strength, or extent of; its antonym is "diminish."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: BRITTLE',
    'Choose the most appropriate antonym of the word: BRITTLE',
    ['लचीला और मजबूत (Tough)', 'Tough'],
    [
      ['भंगुर (Fragile)', 'Fragile'],
      ['टूटने योग्य (Breakable)', 'Breakable'],
      ['नाजुक (Delicate)', 'Delicate'],
    ],
    '"Brittle" का अर्थ कड़ा पर आसानी से टूटने वाला (भंगुर) होता है; इसका विलोम "Tough" या "Flexible" (मजबूत/लचीला) है।',
    '"Brittle" means hard but liable to break easily; its opposite is "tough."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: CHAOTIC',
    'Choose the most appropriate antonym of the word: CHAOTIC',
    ['व्यवस्थित (Orderly)', 'Orderly'],
    [
      ['अस्त-व्यस्त (Disorganized)', 'Disorganized'],
      ['उथल-पुथल भरा (Turbulent)', 'Turbulent'],
      ['भ्रामक (Confused)', 'Confused'],
    ],
    '"Chaotic" का अर्थ पूर्णतः अव्यवस्थित या अराजक होता है; इसका सटीक विलोम "Orderly" (सुव्यवस्थित) है।',
    '"Chaotic" means in a state of complete confusion and disorder; its antonym is "orderly."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: DORMANT',
    'Choose the most appropriate antonym of the word: DORMANT',
    ['सक्रिय (Active)', 'Active'],
    [
      ['निष्क्रिय (Inactive)', 'Inactive'],
      ['सुप्त (Latent)', 'Latent'],
      ['सोया हुआ (Sleeping)', 'Asleep'],
    ],
    '"Dormant" का अर्थ सुप्त या अस्थायी रूप से निष्क्रिय होता है; इसका विलोम "Active" (सक्रिय) है।',
    '"Dormant" means having normal physical functions suspended or slowed down (inactive); its opposite is "active."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ECSTASY',
    'Choose the most appropriate antonym of the word: ECSTASY',
    ['तीव्र वेदना / दुख (Agony)', 'Agony'],
    [
      ['उल्लास (Rapture)', 'Rapture'],
      ['आनंद (Bliss)', 'Bliss'],
      ['हर्ष (Delight)', 'Delight'],
    ],
    '"Ecstasy" का अर्थ असीम आनंद या हर्षोन्माद होता है; इसका विलोम "Agony" (घोर यातना/पीड़ा) है।',
    '"Ecstasy" means an overwhelming feeling of great happiness; its opposite is "agony."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: FLOURISH',
    'Choose the most appropriate antonym of the word: FLOURISH',
    ['मुरझाना / पतन होना (Wither)', 'Wither'],
    [
      ['फलना-फूलना (Thrive)', 'Thrive'],
      ['उन्नति करना (Prosper)', 'Prosper'],
      ['खिलना (Bloom)', 'Bloom'],
    ],
    '"Flourish" का अर्थ स्वस्थ रूप से बढ़ना या समृद्ध होना है; इसका विलोम "Wither" (मुरझाना/क्षीण होना) है।',
    '"Flourish" means to grow or develop in a healthy, vigorous way; its antonym is "wither."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: GRATITUDE',
    'Choose the most appropriate antonym of the word: GRATITUDE',
    ['कृतघ्नता (Ingratitude)', 'Ingratitude'],
    [
      ['कृतज्ञता (Thankfulness)', 'Thankfulness'],
      ['आभार (Appreciation)', 'Appreciation'],
      ['सम्मान (Respect)', 'Respect'],
    ],
    '"Gratitude" का अर्थ उपकार मानने की भावना (कृतज्ञता) है; उपसर्ग "in-" जोड़कर बना "Ingratitude" (कृतघ्नता) इसका विलोम है।',
    '"Gratitude" means the quality of being thankful; its antonym is "ingratitude."',
    'EASY',
    { grammarRuleHi: 'कुछ संज्ञाओं के आगे नकारात्मक उपसर्ग "in-" लगाकर विलोम बनाया जाता है (जैसे gratitude -> ingratitude)।' }
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: HARSH',
    'Choose the most appropriate antonym of the word: HARSH',
    ['मृदु / कोमल (Gentle)', 'Gentle'],
    [
      ['कठोर (Severe)', 'Severe'],
      ['रूखा (Abrasive)', 'Abrasive'],
      ['कर्कश (Grating)', 'Grating'],
    ],
    '"Harsh" का अर्थ कर्कश, रूखा या निर्मम होता है; इसका सटीक विलोम "Gentle" (सौम्य/कोमल) है।',
    '"Harsh" means unpleasantly rough or cruel; its antonym is "gentle."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: INEVITABLE',
    'Choose the most appropriate antonym of the word: INEVITABLE',
    ['टाला जा सकने वाला (Avoidable)', 'Avoidable'],
    [
      ['अपरिहार्य (Unavoidable)', 'Unavoidable'],
      ['निश्चित (Certain)', 'Certain'],
      ['अनिवार्य (Inescapable)', 'Inescapable'],
    ],
    '"Inevitable" का अर्थ जिसे टाला न जा सके (अवश्यंभावी) होता है; इसका विलोम "Avoidable" (परिवर्जनीय) है।',
    '"Inevitable" means certain to happen and unavoidable; its opposite is "avoidable."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: JUVENILE',
    'Choose the most appropriate antonym of the word: JUVENILE',
    ['परिपक्व / वयस्क (Mature)', 'Mature'],
    [
      ['किशोर (Youthful)', 'Youthful'],
      ['बचकाना (Childish)', 'Childish'],
      ['तरुण (Young)', 'Young'],
    ],
    '"Juvenile" का अर्थ किशोर या अपरिपक्व होता है; इसका विलोम "Mature" या "Adult" (परिपक्व) है।',
    '"Juvenile" relates to young people or immature behavior; its antonym is "mature."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: KINDNESS',
    'Choose the most appropriate antonym of the word: KINDNESS',
    ['क्रूरता (Cruelty)', 'Cruelty'],
    [
      ['दयालुता (Benevolence)', 'Benevolence'],
      ['करुणा (Compassion)', 'Compassion'],
      ['उदारता (Generosity)', 'Generosity'],
    ],
    '"Kindness" का अर्थ दयालुता या नेकी होता है; इसका विलोम "Cruelty" (निर्ममता/क्रूरता) है।',
    '"Kindness" means the quality of being friendly, generous, and considerate; its opposite is "cruelty."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: LAVISH',
    'Choose the most appropriate antonym of the word: LAVISH',
    ['मितव्ययी / किफायती (Frugal)', 'Frugal'],
    [
      ['खर्चीला (Extravagant)', 'Extravagant'],
      ['भव्य (Sumptuous)', 'Sumptuous'],
      ['उदार (Generous)', 'Profuse'],
    ],
    '"Lavish" का अर्थ अत्यधिक खर्चीला या फिजूलखर्च होता है; इसका विलोम "Frugal" (किफायती) है।',
    '"Lavish" means sumptuously rich or spending extravagantly; its antonym is "frugal."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: MANDATORY',
    'Choose the most appropriate antonym of the word: MANDATORY',
    ['वैकल्पिक (Optional)', 'Optional'],
    [
      ['अनिवार्य (Obligatory)', 'Obligatory'],
      ['आवश्यक (Required)', 'Required'],
      ['बाध्यकारी (Binding)', 'Binding'],
    ],
    '"Mandatory" का अर्थ कानून या नियम द्वारा अनिवार्य होता है; इसका विलोम "Optional" (ऐच्छिक/वैकल्पिक) है।',
    '"Mandatory" means required by law or rules; its opposite is "optional."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: NEGLIGENT',
    'Choose the most appropriate antonym of the word: NEGLIGENT',
    ['कर्तव्यनिष्ठ / सावधान (Conscientious)', 'Conscientious'],
    [
      ['लापरवाह (Careless)', 'Careless'],
      ['असावधान (Heedless)', 'Heedless'],
      ['सुस्त (Remiss)', 'Remiss'],
    ],
    '"Negligent" का अर्थ उचित ध्यान या देखभाल न देने वाला (लापरवाह) होता है; इसका विलोम "Conscientious" या "Attentive" है।',
    '"Negligent" means failing to take proper care; its antonym is "conscientious."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: OBSCURE',
    'Choose the most appropriate antonym of the word: OBSCURE',
    ['सुप्रसिद्ध / सुस्पष्ट (Prominent)', 'Prominent'],
    [
      ['अस्पष्ट (Vague)', 'Vague'],
      ['अज्ञात (Unknown)', 'Unknown'],
      ['गूढ़ (Cryptic)', 'Cryptic'],
    ],
    '"Obscure" का अर्थ अज्ञात या अस्पष्ट होता है; इसका विलोम "Prominent" या "Clear" (प्रमुख/स्पष्ट) है।',
    '"Obscure" means not discovered or known about; uncertain; its antonym is "prominent."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: PARSIMONIOUS',
    'Choose the most appropriate antonym of the word: PARSIMONIOUS',
    ['मुक्तहस्त / फिजूलखर्च (Extravagant)', 'Extravagant'],
    [
      ['कंजूस (Miserly)', 'Miserly'],
      ['लोभी (Stingy)', 'Stingy'],
      ['कृपण (Penurious)', 'Tight-fisted'],
    ],
    '"Parsimonious" का अर्थ बहुत अधिक कंजूस (खर्च करने से कतराने वाला) होता है; इसका विलोम "Extravagant" या "Generous" है।',
    '"Parsimonious" means unwilling to spend money; stingy. Its opposite is "extravagant."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: RATIONAL',
    'Choose the most appropriate antonym of the word: RATIONAL',
    ['अतार्किक / अविवेकी (Irrational)', 'Irrational'],
    [
      ['तर्कसंगत (Logical)', 'Logical'],
      ['विवेकशील (Sensible)', 'Sensible'],
      ['बुद्धिमान (Reasonable)', 'Reasonable'],
    ],
    '"Rational" का अर्थ तर्क और कारण पर आधारित होता है; "ir-" उपसर्ग जोड़कर बना "Irrational" (तर्कहीन) इसका विलोम है।',
    '"Rational" means based on reason or logic; its antonym is "irrational."',
    'EASY',
    { grammarRuleHi: '"r" से शुरू होने वाले शब्दों का विलोम प्रायः "ir-" जोड़कर बनता है (rational -> irrational, regular -> irregular)।' }
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: SINCERE',
    'Choose the most appropriate antonym of the word: SINCERE',
    ['कपटी / बनावटी (Insincere)', 'Insincere'],
    [
      ['सच्चा (Earnest)', 'Earnest'],
      ['ईमानदार (Honest)', 'Honest'],
      ['निष्कपट (Candid)', 'Candid'],
    ],
    '"Sincere" का अर्थ ईमानदार और सच्ची भावना वाला होता है; इसका विलोम "Insincere" या "Hypocritical" (दिखावटी) है।',
    '"Sincere" means free from pretense or deceit; its antonym is "insincere."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: TURBULENT',
    'Choose the most appropriate antonym of the word: TURBULENT',
    ['शांत / स्थिर (Placid)', 'Placid'],
    [
      ['अशांत (Stormy)', 'Stormy'],
      ['उग्र (Tempestuous)', 'Tempestuous'],
      ['हंगामेदार (Rowdy)', 'Rowdy'],
    ],
    '"Turbulent" का अर्थ उथल-पुथल और अशांति से भरा होता है; इसका सटीक विलोम "Placid" या "Calm" है।',
    '"Turbulent" means characterized by conflict, disorder, or confusion; its antonym is "placid."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: UTOPIAN',
    'Choose the most appropriate antonym of the word: UTOPIAN',
    ['व्यावहारिक / यथार्थवादी (Pragmatic)', 'Pragmatic'],
    [
      ['काल्पनिक आदर्शवादी (Idealistic)', 'Idealistic'],
      ['स्वप्नदर्शी (Visionary)', 'Visionary'],
      ['अवास्तविक (Impractical)', 'Impractical'],
    ],
    '"Utopian" का अर्थ अव्यावहारिक आदर्श लोक की कल्पना करने वाला होता है; इसका विलोम "Pragmatic" या "Realistic" (व्यावहारिक) है।',
    '"Utopian" means modeled on or aiming for an unrealistically perfect state; its opposite is "pragmatic."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: VIGOROUS',
    'Choose the most appropriate antonym of the word: VIGOROUS',
    ['निर्बल / क्षीण (Feeble)', 'Feeble'],
    [
      ['ऊर्जावान (Energetic)', 'Energetic'],
      ['बलवान (Robust)', 'Robust'],
      ['सशक्त (Sturdy)', 'Sturdy'],
    ],
    '"Vigorous" का अर्थ शक्ति और ऊर्जा से भरपूर होता है; इसका विलोम "Feeble" (कमजोर/निर्बल) है।',
    '"Vigorous" means strong, healthy, and full of energy; its antonym is "feeble."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: WARY',
    'Choose the most appropriate antonym of the word: WARY',
    ['लापरवाह / निश्चिंत (Heedless)', 'Heedless'],
    [
      ['सतर्क (Watchful)', 'Watchful'],
      ['सावधान (Guarded)', 'Guarded'],
      ['चौकन्ना (Vigilant)', 'Vigilant'],
    ],
    '"Wary" का अर्थ संभावित खतरे से सतर्क रहना होता है; इसका विलोम "Heedless" या "Reckless" (बेपरवाह) है।',
    '"Wary" means cautious about dangers; its opposite is "heedless."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ZEAL',
    'Choose the most appropriate antonym of the word: ZEAL',
    ['उदासीनता (Apathy)', 'Apathy'],
    [
      ['उत्साह (Fervor)', 'Fervor'],
      ['जोश (Ardor)', 'Ardor'],
      ['लगन (Passion)', 'Passion'],
    ],
    '"Zeal" (संज्ञा) का अर्थ प्रबल उत्साह या लगन है; इसका सटीक विलोम "Apathy" (उदासीनता/रुचि का अभाव) है।',
    '"Zeal" means great energy or enthusiasm; its antonym is "apathy."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ABHOR',
    'Choose the most appropriate antonym of the word: ABHOR',
    ['प्रेम करना / सराहना (Adore)', 'Adore'],
    [
      ['घृणा करना (Detest)', 'Detest'],
      ['नफरत करना (Loathe)', 'Loathe'],
      ['तिरस्कार करना (Despise)', 'Despise'],
    ],
    '"Abhor" का अर्थ तीव्र घृणा या नफरत करना है; इसका सटीक विलोम "Adore" (गहरा प्रेम व आदर करना) है।',
    '"Abhor" means to regard with disgust and hatred; its antonym is "adore."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: BENIGN',
    'Choose the most appropriate antonym of the word: BENIGN',
    ['हानिकारक / द्वेषपूर्ण (Malevolent)', 'Malevolent'],
    [
      ['दयालु (Kindly)', 'Kindly'],
      ['सौम्य (Gentle)', 'Gentle'],
      ['सहानुभूतिपूर्ण (Sympathetic)', 'Sympathetic'],
    ],
    '"Benign" का अर्थ सौम्य, दयालु और अहानिकारक होता है; इसका सटीक विलोम "Malevolent" (द्वेषपूर्ण/अहितकर) है।',
    '"Benign" means gentle and kindly; its opposite is "malevolent."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: COMPLACENT',
    'Choose the most appropriate antonym of the word: COMPLACENT',
    ['असंतुष्ट / सुधार का इच्छुक (Dissatisfied)', 'Dissatisfied'],
    [
      ['आत्मसंतुष्ट (Smug)', 'Smug'],
      ['निश्चिंत (Self-satisfied)', 'Unconcerned'],
      ['संतुष्ट (Content)', 'Content'],
    ],
    '"Complacent" का अर्थ बिना प्रयास किए अपनी स्थिति से आत्मसंतुष्ट और बेफिक्र होना है; इसका विलोम "Dissatisfied" या "Ambitious" है।',
    '"Complacent" means smugly self-satisfied and uncritical of oneself; its antonym is "dissatisfied."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: DEARTH',
    'Choose the most appropriate antonym of the word: DEARTH',
    ['अधिकता / प्रचुरता (Surplus)', 'Surplus'],
    [
      ['कमी (Scarcity)', 'Scarcity'],
      ['अकाल (Famine)', 'Famine'],
      ['न्यूनता (Shortage)', 'Shortage'],
    ],
    '"Dearth" का अर्थ किसी वस्तु की भारी कमी या अभाव होता है; इसका सटीक विलोम "Surplus" (अधिशेष/अधिकता) है।',
    '"Dearth" means a scarcity or lack of something; its opposite is "surplus."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: ERUDITE',
    'Choose the most appropriate antonym of the word: ERUDITE',
    ['अज्ञानी / अनपढ़ (Ignorant)', 'Ignorant'],
    [
      ['विद्वान (Scholarly)', 'Scholarly'],
      ['पंडित (Learned)', 'Learned'],
      ['ज्ञानी (Well-read)', 'Well-read'],
    ],
    '"Erudite" का अर्थ गहन अध्ययन वाला अत्यंत विद्वान व्यक्ति होता है; इसका विलोम "Ignorant" (अज्ञानी) है।',
    '"Erudite" means having or showing great knowledge or learning; its antonym is "ignorant."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: FEIGNED',
    'Choose the most appropriate antonym of the word: FEIGNED',
    ['सच्चा / वास्तविक (Genuine)', 'Genuine'],
    [
      ['बनावटी (Pretended)', 'Pretended'],
      ['नकली (Simulated)', 'Simulated'],
      ['कपटी (Faked)', 'Faked'],
    ],
    '"Feigned" का अर्थ नकली या दिखावा किया हुआ होता है; इसका विलोम "Genuine" (वास्तविक/सच्चा) है।',
    '"Feigned" means pretended or insincere; its opposite is "genuine."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: GREGARIOUS',
    'Choose the most appropriate antonym of the word: GREGARIOUS',
    ['एकांतप्रिय (Reclusive)', 'Reclusive'],
    [
      ['मिलनसार (Sociable)', 'Sociable'],
      ['बहिर्मुखी (Outgoing)', 'Outgoing'],
      ['मित्रवत (Friendly)', 'Friendly'],
    ],
    '"Gregarious" का अर्थ लोगों की संगति पसंद करने वाला (मिलनसार) है; इसका विलोम "Reclusive" या "Solitary" (एकांतवासी) है।',
    '"Gregarious" means fond of company; its antonym is "reclusive."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: HETEROGENEOUS',
    'Choose the most appropriate antonym of the word: HETEROGENEOUS',
    ['सजातीय / एकरूप (Homogeneous)', 'Homogeneous'],
    [
      ['विविध (Diverse)', 'Diverse'],
      ['अनेकरूप (Varied)', 'Varied'],
      ['मिश्रित (Assorted)', 'Assorted'],
    ],
    '"Heterogeneous" (विषम/विविध तत्वों वाला) का सटीक विलोम "Homogeneous" (समान तत्वों वाला/सजातीय) होता है।',
    '"Heterogeneous" means diverse in character or content; its exact antonym is "homogeneous."',
    'MEDIUM',
    { grammarRuleHi: 'Root "hetero-" (भिन्न) तथा "homo-" (समान) विपरीतार्थक शब्द-युग्म बनाते हैं।' }
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: INDOLENT',
    'Choose the most appropriate antonym of the word: INDOLENT',
    ['परिश्रमी / कर्मठ (Industrious)', 'Industrious'],
    [
      ['आलसी (Lazy)', 'Lazy'],
      ['सुस्त (Slothful)', 'Slothful'],
      ['निष्क्रिय (Idle)', 'Idle'],
    ],
    '"Indolent" का अर्थ काम से जी चुराने वाला (आलसी) होता है; इसका सटीक विलोम "Industrious" (मेहनती) है।',
    '"Indolent" means wanting to avoid activity or exertion; lazy. Its opposite is "industrious."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: MODEST',
    'Choose the most appropriate antonym of the word: MODEST',
    ['डींग हाँकने वाला / घमंडी (Boastful)', 'Boastful'],
    [
      ['विनम्र (Humble)', 'Humble'],
      ['संकोची (Unassuming)', 'Unassuming'],
      ['सरल (Meek)', 'Meek'],
    ],
    '"Modest" का अर्थ अपनी उपलब्धियों का दिखावा न करने वाला (विनम्र) होता है; इसका विलोम "Boastful" (शेखी बघारने वाला) है।',
    '"Modest" means unassuming in the estimation of one’s abilities; its antonym is "boastful."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: NOVEL',
    'Choose the most appropriate antonym of the word: NOVEL',
    ['परंपरागत / पुराना (Traditional)', 'Traditional'],
    [
      ['नवीन (New)', 'New'],
      ['मौलिक (Original)', 'Original'],
      ['ताजा (Fresh)', 'Fresh'],
    ],
    'विशेषण के रूप में "Novel" का अर्थ नया और अनूठा होता है; इसका विलोम "Traditional" या "Conventional" (परंपरागत) है।',
    'As an adjective, "novel" means interestingly new or unusual; its antonym is "traditional."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: PACIFY',
    'Choose the most appropriate antonym of the word: PACIFY',
    ['उत्तेजित करना / भड़काना (Agitate)', 'Agitate'],
    [
      ['शांत करना (Appease)', 'Appease'],
      ['मनाना (Placate)', 'Placate'],
      ['सांत्वना देना (Soothe)', 'Soothe'],
    ],
    '"Pacify" का अर्थ क्रोध या अशांति को शांत करना है; इसका सटीक विलोम "Agitate" या "Provoke" (भड़काना) है।',
    '"Pacify" means to quell the anger or agitation of; its opposite is "agitate."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: RADICAL',
    'Choose the most appropriate antonym of the word: RADICAL',
    ['रूढ़िवादी / यथास्थितिवादी (Conservative)', 'Conservative'],
    [
      ['क्रांतिकारी (Revolutionary)', 'Revolutionary'],
      ['अतिवादी (Extreme)', 'Extreme'],
      ['मौलिक (Fundamental)', 'Drastic'],
    ],
    'सामाजिक-राजनीतिक संदर्भ में "Radical" (आमूलचूल परिवर्तन चाहने वाला) का विलोम "Conservative" (परंपरा/यथास्थिति समर्थक) है।',
    'In social or political usage, "radical" (favoring sweeping change) contrasts with "conservative."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: SUBTLE',
    'Choose the most appropriate antonym of the word: SUBTLE',
    ['प्रत्यक्ष / स्थूल (Obvious)', 'Obvious'],
    [
      ['सूक्ष्म (Delicate)', 'Delicate'],
      ['बारीक (Nuanced)', 'Nuanced'],
      ['अप्रत्यक्ष (Understated)', 'Understated'],
    ],
    '"Subtle" का अर्थ इतना सूक्ष्म या बारीक कि तुरंत ध्यान न जाए; इसका सटीक विलोम "Obvious" (प्रत्यक्ष/जाहिर) है।',
    '"Subtle" means so delicate or precise as to be difficult to analyze; its opposite is "obvious."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: TACITURN',
    'Choose the most appropriate antonym of the word: TACITURN',
    ['वाचाल / बातूनी (Talkative)', 'Talkative'],
    [
      ['अल्पभाषी (Reticent)', 'Reticent'],
      ['मौन (Silent)', 'Silent'],
      ['संकोची (Reserved)', 'Reserved'],
    ],
    '"Taciturn" का अर्थ स्वभाव से बहुत कम बोलने वाला (मितभाषी) होता है; इसका सटीक विलोम "Talkative" या "Garrulous" है।',
    '"Taciturn" means reserved or uncommunicative in speech; its opposite is "talkative."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: UNITY',
    'Choose the most appropriate antonym of the word: UNITY',
    ['विभाजन / फूट (Division)', 'Division'],
    [
      ['एकजुटता (Solidarity)', 'Solidarity'],
      ['सामंजस्य (Harmony)', 'Harmony'],
      ['अखंडता (Integrity)', 'Integrity'],
    ],
    '"Unity" का अर्थ एकता या अखंडता है; इसका सटीक विलोम "Division" या "Disunity" (विभाजन) है।',
    '"Unity" means the state of being united or joined as a whole; its antonym is "division."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: VERBOSE',
    'Choose the most appropriate antonym of the word: VERBOSE',
    ['संक्षिप्त (Concise)', 'Concise'],
    [
      ['शब्दाडंबरपूर्ण (Wordy)', 'Wordy'],
      ['दीर्घ (Long-winded)', 'Long-winded'],
      ['विस्तृत (Prolix)', 'Prolix'],
    ],
    '"Verbose" का अर्थ आवश्यकता से अधिक शब्दों का प्रयोग करने वाला होता है; इसका सटीक विलोम "Concise" या "Terse" (संक्षिप्त) है।',
    '"Verbose" means using more words than are needed; its antonym is "concise."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: WHOLESOME',
    'Choose the most appropriate antonym of the word: WHOLESOME',
    ['अस्वास्थ्यकर / हानिकारक (Unhealthy)', 'Unhealthy'],
    [
      ['पौष्टिक (Nutritious)', 'Nutritious'],
      ['स्वास्थ्यवर्धक (Healthy)', 'Healthy'],
      ['लाभकारी (Beneficial)', 'Beneficial'],
    ],
    '"Wholesome" का अर्थ शरीर और मन के लिए स्वास्थ्यकर व शुद्ध होता है; इसका विलोम "Unhealthy" (अस्वास्थ्यकर) है।',
    '"Wholesome" means conducive to or suggestive of good health and well-being; its opposite is "unhealthy."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: AMBIGUOUS',
    'Choose the most appropriate antonym of the word: AMBIGUOUS',
    ['असंदिग्ध / सुस्पष्ट (Unambiguous)', 'Unambiguous'],
    [
      ['द्विअर्थी (Equivocal)', 'Equivocal'],
      ['अस्पष्ट (Vague)', 'Vague'],
      ['संदिग्ध (Unclear)', 'Unclear'],
    ],
    '"Ambiguous" का अर्थ जिसके एक से अधिक अर्थ निकलें या जो स्पष्ट न हो; इसका विलोम "Unambiguous" या "Clear" है।',
    '"Ambiguous" means open to more than one interpretation; its opposite is "unambiguous."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: CANDID',
    'Choose the most appropriate antonym of the word: CANDID',
    ['कपटी / गुप्त रखने वाला (Deceptive)', 'Deceptive'],
    [
      ['निष्कपट (Frank)', 'Frank'],
      ['स्पष्टवादी (Outspoken)', 'Outspoken'],
      ['ईमानदार (Sincere)', 'Sincere'],
    ],
    '"Candid" का अर्थ सीधा, सच्चा और स्पष्टवादी होता है; इसका विलोम "Deceptive" या "Evasive" (कपटी/टालमटोल करने वाला) है।',
    '"Candid" means truthful and straightforward; its opposite is "deceptive."',
    'MEDIUM'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: DESPAIR',
    'Choose the most appropriate antonym of the word: DESPAIR',
    ['आशा (Hope)', 'Hope'],
    [
      ['हताशा (Hopelessness)', 'Hopelessness'],
      ['निराशा (Gloom)', 'Gloom'],
      ['विषाद (Sorrow)', 'Sorrow'],
    ],
    '"Despair" का अर्थ घोर निराशा होता है; इसका सटीक विलोम "Hope" (आशा) है।',
    '"Despair" means the complete loss or absence of hope; its antonym is "hope."',
    'EASY'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: EXONERATE',
    'Choose the most appropriate antonym of the word: EXONERATE',
    ['दोषारोपण करना / फँसाना (Incriminate)', 'Incriminate'],
    [
      ['दोषमुक्त करना (Absolve)', 'Absolve'],
      ['बरी करना (Acquit)', 'Acquit'],
      ['मुक्त करना (Vindicate)', 'Vindicate'],
    ],
    '"Exonerate" का अर्थ किसी को आरोप या दोष से मुक्त करना है; इसका विलोम "Incriminate" या "Accuse" (दोषी ठहराना) है।',
    '"Exonerate" means to absolve someone from blame for a fault or wrongdoing; its opposite is "incriminate."',
    'HARD'
  ),
  q(
    'Vocabulary',
    'Antonyms',
    'निम्नलिखित शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: FRAGILE',
    'Choose the most appropriate antonym of the word: FRAGILE',
    ['मजबूत / टिकाऊ (Sturdy)', 'Sturdy'],
    [
      ['नाजुक (Delicate)', 'Delicate'],
      ['कमजोर (Frail)', 'Frail'],
      ['भंगुर (Brittle)', 'Brittle'],
    ],
    '"Fragile" का अर्थ आसानी से टूटने या क्षतिग्रस्त होने वाला होता है; इसका सटीक विलोम "Sturdy" या "Robust" (मजबूत) है।',
    '"Fragile" means easily broken or damaged; its opposite is "sturdy."',
    'EASY'
  ),
];
