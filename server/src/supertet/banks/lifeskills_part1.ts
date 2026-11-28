import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Life Skills / Management & Aptitude');

export const LIFESKILLS_BANK_PART1: RawBankQuestion[] = [
  // =========================================================================
  // 1. व्यावसायिक आचरण एवं शिक्षक की नैतिक संहिता (Professional Conduct & Ethics)
  // =========================================================================
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षकों के लिए व्यावसायिक नैतिक संहिता (Code of Professional Ethics) भारत में मुख्यतः किस संस्था द्वारा तैयार की गई है?',
    'In India, the Code of Professional Ethics for school teachers was primarily developed by which body?',
    ['एन.सी.टी.ई. (NCTE)', 'NCTE (National Council for Teacher Education)'],
    [
      ['विश्वविद्यालय अनुदान आयोग (UGC)', 'University Grants Commission (UGC)'],
      ['नीती आयोग (NITI Aayog)', 'NITI Aayog'],
      ['संघ लोक सेवा आयोग (UPSC)', 'Union Public Service Commission (UPSC)'],
    ],
    'राष्ट्रीय अध्यापक शिक्षा परिषद (NCTE) ने 2010 में स्कूली शिक्षकों के लिए व्यावसायिक नैतिक संहिता जारी की, जिसमें छात्रों, अभिभावकों, सहकर्मियों और व्यवसाय के प्रति कर्तव्यों का उल्लेख है।',
    'The National Council for Teacher Education (NCTE) developed the Code of Professional Ethics for School Teachers (2010) detailing obligations toward students, parents, colleagues, and the profession.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'NCTE की नैतिक संहिता (2010) के अनुसार शिक्षकों के नैतिक दायित्वों को कितने प्रमुख वर्गों में बाँटा गया है?',
    'According to the NCTE Code of Professional Ethics (2010), into how many major categories are teachers’ obligations divided?',
    ['तीन प्रमुख वर्ग', 'Three major categories'],
    [
      ['दो प्रमुख वर्ग', 'Two major categories'],
      ['पाँच प्रमुख वर्ग', 'Five major categories'],
      ['सात प्रमुख वर्ग', 'Seven major categories'],
    ],
    'NCTE की 2010 की संहिता शिक्षक के दायित्वों को तीन मुख्य वर्गों में बाँटती है: छात्रों के प्रति दायित्व, अभिभावकों/समुदाय/समाज के प्रति दायित्व, तथा व्यवसाय व सहकर्मियों के प्रति दायित्व।',
    'The NCTE 2010 Code divides obligations into three main categories: obligations towards students, towards parents/community/society, and towards the profession and colleagues.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षा का अधिकार अधिनियम (RTE Act, 2009) की किस धारा के अंतर्गत विद्यालय में बच्चों को शारीरिक दंड और मानसिक उत्पीड़न पूर्णतः निषिद्ध है?',
    'Under which section of the Right to Education Act (RTE Act, 2009) are physical punishment and mental harassment of children strictly prohibited?',
    ['धारा 17', 'Section 17'],
    [
      ['धारा 12', 'Section 12'],
      ['धारा 21', 'Section 21'],
      ['धारा 29', 'Section 29'],
    ],
    'RTE अधिनियम 2009 की धारा 17(1) के तहत किसी भी बालक को शारीरिक दंड या मानसिक प्रताड़ना नहीं दी जा सकती और धारा 17(2) के तहत ऐसा करने पर अनुशासनात्मक कार्रवाई का प्रावधान है।',
    'Section 17(1) of the RTE Act, 2009 prohibits physical punishment or mental harassment to any child, and Section 17(2) mandates disciplinary action against offenders.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'RTE अधिनियम, 2009 की कौन-सी धारा किसी शिक्षक द्वारा निजी ट्यूशन (Private Tuition) पढ़ाने पर प्रतिबंध लगाती है?',
    'Which section of the RTE Act, 2009 prohibits a teacher from engaging in private tuition?',
    ['धारा 28', 'Section 28'],
    [
      ['धारा 24', 'Section 24'],
      ['धारा 26', 'Section 26'],
      ['धारा 30', 'Section 30'],
    ],
    'RTE अधिनियम 2009 की धारा 28 स्पष्ट करती है कि कोई भी शिक्षक निजी ट्यूशन या निजी शिक्षण गतिविधि में संलग्न नहीं होगा।',
    'Section 28 of the RTE Act, 2009 explicitly prohibits teachers from engaging in private tuition or private teaching activities.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'RTE अधिनियम, 2009 की किस धारा में शिक्षकों के कर्तव्यों (जैसे नियमित उपस्थिति, समयबद्ध पाठ्यक्रम पूर्ण करना आदि) का वर्णन है?',
    'Which section of the RTE Act, 2009 specifies the duties of teachers such as regularity, punctuality, and timely completion of curriculum?',
    ['धारा 24', 'Section 24'],
    [
      ['धारा 19', 'Section 19'],
      ['धारा 22', 'Section 22'],
      ['धारा 27', 'Section 27'],
    ],
    'धारा 24 शिक्षकों के प्रमुख कर्तव्यों को निर्धारित करती है: विद्यालय में नियमित और समय पर उपस्थित रहना, पाठ्यक्रम को समय पर पूरा करना, प्रत्येक बालक की अधिगम क्षमता का आकलन करना और अभिभावकों से नियमित बैठक करना।',
    'Section 24 lays down key duties of teachers: maintaining regularity and punctuality, completing curriculum on time, assessing learning ability of each child, and holding regular parent meetings.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक कक्षा में किसी छात्र की व्यक्तिगत पारिवारिक समस्या की गोपनीय जानकारी अन्य छात्रों के सामने उजागर कर देता है। यह किस नैतिक सिद्धांत का उल्लंघन है?',
    'A teacher discloses confidential information about a student’s personal family issue in front of other students. Which ethical principle is violated?',
    ['गोपनीयता एवं गरिमा का सिद्धांत', 'Principle of confidentiality and dignity'],
    [
      ['समयपालन का सिद्धांत', 'Principle of punctuality'],
      ['वित्तीय पारदर्शिता का सिद्धांत', 'Principle of financial transparency'],
      ['पाठ्यक्रम पूर्णता का सिद्धांत', 'Principle of curriculum completion'],
    ],
    'शिक्षक की नैतिक संहिता के अनुसार छात्र या उसके परिवार से संबंधित संवेदनशील व व्यक्तिगत जानकारी को गोपनीय रखना और छात्र की गरिमा की रक्षा करना अनिवार्य है।',
    'According to teacher ethics, maintaining confidentiality of sensitive personal information about students and protecting their dignity is mandatory.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक आचरण” (Professional Conduct) और “व्यक्तिगत नैतिकता” (Personal Morality) के बीच मुख्य अंतर क्या है?',
    'What is the primary distinction between "Professional Conduct" and "Personal Morality"?',
    ['व्यावसायिक आचरण संस्थागत व पेशेवर मानकों पर आधारित होता है', 'Professional conduct is governed by institutional and occupational standards'],
    [
      ['व्यक्तिगत नैतिकता केवल कानून द्वारा लागू होती है', 'Personal morality is enforced solely by statutory law'],
      ['व्यावसायिक आचरण का शिक्षण कार्य से कोई संबंध नहीं होता', 'Professional conduct has no relation to teaching practice'],
      ['व्यक्तिगत नैतिकता सभी व्यवसायों के लिए समान लिखित संहिता है', 'Personal morality is a uniform written code for all professions'],
    ],
    'व्यावसायिक आचरण किसी पेशे विशेष (जैसे शिक्षण) के स्वीकृत मानकों, नियमों और कर्तव्यों से संचालित होता है, जबकि व्यक्तिगत नैतिकता व्यक्ति के निजी मूल्यों और अंतःकरण पर आधारित होती है।',
    'Professional conduct is governed by shared standards, rules, and obligations of an occupation, whereas personal morality stems from an individual’s private beliefs and conscience.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'राष्ट्रीय शिक्षा नीति (NEP) 2020 में शिक्षकों के व्यावसायिक मानकों को सुदृढ़ करने के लिए किस राष्ट्रीय ढाँचे के विकास की अनुशंसा की गई है?',
    'In NEP 2020, which national framework is recommended to strengthen professional standards of teachers?',
    ['शिक्षकों के लिए राष्ट्रीय व्यावसायिक मानक (NPST)', 'National Professional Standards for Teachers (NPST)'],
    [
      ['राष्ट्रीय छात्र दंड संहिता (NPSC)', 'National Pupil Punishment Code (NPSC)'],
      ['राष्ट्रीय निजी ट्यूशन विनियमन (NPTR)', 'National Private Tuition Regulation (NPTR)'],
      ['अखिल भारतीय विद्यालय परीक्षा मानक (AISES)', 'All India School Examination Standards (AISES)'],
    ],
    'NEP 2020 (अनुच्छेद 5.20) के तहत NCTE द्वारा शिक्षकों के लिए राष्ट्रीय व्यावसायिक मानक (NPST) विकसित करने की सिफारिश की गई है ताकि शिक्षण की गुणवत्ता और व्यावसायिक आचरण का मूल्यांकन हो सके।',
    'NEP 2020 recommends developing National Professional Standards for Teachers (NPST) through NCTE to define competencies, professional ethics, and career progression benchmarks.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी शिक्षक का अपना ही पुत्र उसी की कक्षा में पढ़ता है, तो परीक्षा की उत्तर-पुस्तिका जाँचते समय शिक्षक का सबसे उचित व्यावसायिक आचरण क्या होगा?',
    'If a teacher’s own child studies in the same class, what is the most appropriate professional conduct while evaluating exam answer scripts?',
    ['निष्पक्षता सुनिश्चित करने हेतु मूल्यांकन किसी अन्य सहकर्मी से कराना या अंध-मूल्यांकन अपनाना', 'Ensuring impartiality through blind evaluation or delegating grading to a colleague'],
    [
      ['पुत्र को प्रोत्साहित करने हेतु अतिरिक्त अंक देना', 'Awarding extra marks to encourage the child'],
      ['पुत्र के प्रति कठोर दिखने के लिए जानबूझकर अंक काटना', 'Deliberately deducting marks to appear strict'],
      ['पुत्र को परीक्षा में बैठने से रोक देना', 'Preventing the child from appearing in the exam'],
    ],
    'हितों के टकराव (Conflict of Interest) की स्थिति में निष्पक्षता और पारदर्शिता बनाए रखने के लिए मूल्यांकन किसी तटस्थ सहकर्मी या कोडिंग/अंध-मूल्यांकन प्रणाली से कराना नैतिक रूप से सर्वोत्तम है।',
    'To prevent conflict of interest and preserve fairness and transparency, using blind coding or having a neutral colleague grade the script is the most ethical practice.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक को विद्यालय में किस प्रकार की वेशभूषा और भाषा का प्रयोग करना चाहिए?',
    'What kind of attire and language should a teacher adopt in school?',
    ['शालीन, स्वच्छ वेशभूषा तथा मर्यादित एवं संवेदनशील भाषा', 'Decent, clean attire and dignified, sensitive language'],
    [
      ['केवल अत्यधिक भड़कीले वस्त्र और व्यंग्यात्मक भाषा', 'Excessively flashy clothes and sarcastic language'],
      ['बिना किसी मानदंड के अनौपचारिक व अशिष्ट बोलचाल', 'Casual slang without any decorum'],
      ['केवल प्रशासनिक अधिकारियों के सामने औपचारिक भाषा', 'Formal language only in front of administrative officers'],
    ],
    'शिक्षक विद्यार्थियों के लिए आदर्श (Role Model) होता है; अतः उसकी वेशभूषा शालीन व स्वच्छ तथा भाषा सम्मानजनक, स्पष्ट और संवेदनशील होनी चाहिए।',
    'A teacher serves as a role model for learners; therefore, modest, neat attire and respectful, clear, and sensitive language are essential aspects of professional conduct.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि कोई सहकर्मी शिक्षक अन्य छात्रों या अभिभावकों के सामने आपके शिक्षण कौशल की आलोचना करता है, तो नैतिक संहिता के अनुसार आपकी प्रतिक्रिया क्या होनी चाहिए?',
    'If a fellow teacher criticizes your teaching skills in front of students or parents, what should be your ethical response?',
    ['गरिमा बनाए रखते हुए विषय को निजी रूप से सहकर्मी के साथ संवाद द्वारा सुलझाना', 'Maintaining dignity and resolving the issue privately through dialogue with the colleague'],
    [
      ['छात्रों के सामने ही सहकर्मी की कमियाँ गिनवाना', 'Pointing out the colleague’s flaws in front of students'],
      ['अभिभावकों के समक्ष सहकर्मी के विरुद्ध उकसाना', 'Inciting parents against the colleague'],
      ['बदले की भावना से सहकर्मी की कक्षा में हस्तक्षेप करना', 'Interfering in the colleague’s class out of revenge'],
    ],
    'NCTE की नैतिक संहिता कहती है कि शिक्षक अपने सहकर्मियों के सम्मान की रक्षा करे और किसी भी मतभेद को छात्रों या अभिभावकों के सामने सार्वजनिक करने के बजाय सौहार्दपूर्ण निजी संवाद से सुलझाए।',
    'The NCTE ethical code urges teachers to respect colleagues and resolve professional disagreements privately and amicably rather than undermining peers before students or parents.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शैक्षणिक ईमानदारी” (Academic Integrity) का शिक्षक के संदर्भ में सही अर्थ क्या है?',
    'What does "Academic Integrity" accurately mean in the context of a teacher?',
    ['अध्ययन सामग्री के स्रोतों को स्वीकार करना, निष्पक्ष मूल्यांकन करना तथा नकल व साहित्यिक चोरी से बचना', 'Acknowledging sources, assessing fairly, and avoiding plagiarism or exam malpractice'],
    [
      ['सभी छात्रों को बिना परीक्षा लिए उत्तीर्ण कर देना', 'Promoting all students without conducting assessments'],
      ['केवल एक ही पाठ्यपुस्तक से बिना संशोधन के वर्ष भर पढ़ाना', 'Teaching from a single textbook without updating knowledge'],
      ['विद्यालय के वित्तीय खातों का लेखापरीक्षण करना', 'Auditing the school’s financial accounts'],
    ],
    'शैक्षणिक ईमानदारी का अर्थ ज्ञान के सृजन व प्रसार में सत्यनिष्ठा अपनाना, दूसरों के बौद्धिक कार्य का श्रेय देना, परीक्षा की गोपनीयता बनाए रखना और वस्तुनिष्ठ मूल्यांकन करना है।',
    'Academic integrity means upholding honesty in scholarship and evaluation—citing sources, protecting exam confidentiality, and avoiding bias or plagiarism.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक किसी छात्र को केवल इसलिए कम आंतरिक अंक देता है क्योंकि छात्र के माता-पिता ने शिक्षक की व्यक्तिगत बात नहीं मानी। यह किस प्रकार का कदाचार है?',
    'A teacher awards lower internal marks to a student solely because the parents refused a personal favor. What form of misconduct is this?',
    ['पद का दुरुपयोग और प्रतिशोधात्मक पक्षपात', 'Abuse of authority and retaliatory bias'],
    [
      ['सकारात्मक पुनर्बलन', 'Positive reinforcement'],
      ['रचनात्मक प्रतिपुष्टि', 'Constructive feedback'],
      ['मानक-संदर्भित मूल्यांकन', 'Criterion-referenced assessment'],
    ],
    'मूल्यांकन को व्यक्तिगत स्वार्थ या प्रतिशोध का हथियार बनाना शिक्षक की व्यावसायिक सत्यनिष्ठा और पद के कर्तव्य का गंभीर उल्लंघन है।',
    'Using student assessment as leverage for personal favors or retaliation constitutes grave abuse of professional authority and unethical bias.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'राष्ट्रीय शिक्षा नीति 2020 के अनुसार प्रत्येक शिक्षक को प्रतिवर्ष कम से कम कितने घंटे के सतत व्यावसायिक विकास (CPD) में भाग लेना अपेक्षित है?',
    'Under NEP 2020, how many hours of Continuous Professional Development (CPD) per year are expected for each teacher?',
    ['कम से कम 50 घंटे', 'At least 50 hours'],
    [
      ['कम से कम 10 घंटे', 'At least 10 hours'],
      ['कम से कम 150 घंटे', 'At least 150 hours'],
      ['कम से कम 5 घंटे', 'At least 5 hours'],
    ],
    'NEP 2020 (अनुच्छेद 5.15) में प्रावधान है कि प्रत्येक शिक्षक अपनी रुचि व व्यावसायिक उन्नयन के लिए प्रतिवर्ष न्यूनतम 50 घंटे के CPD कार्यक्रमों में भाग लेगा।',
    'NEP 2020 stipulates that every teacher will participate in at least 50 hours of Continuous Professional Development (CPD) opportunities every year.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'RTE अधिनियम, 2009 की धारा 27 के अनुसार शिक्षकों को किस प्रकार के गैर-शैक्षणिक कार्यों में नहीं लगाया जा सकता?',
    'Under Section 27 of the RTE Act, 2009, teachers CANNOT be deployed for which type of non-educational duties?',
    ['दसवर्षीय जनगणना, आपदा राहत और चुनावों को छोड़कर अन्य गैर-शैक्षणिक कार्य', 'Non-educational duties other than decennial census, disaster relief, and elections'],
    [
      ['केवल विद्यालय की समय-सारणी निर्माण कार्य', 'Only school timetable preparation'],
      ['केवल पुस्तकालय के रखरखाव का कार्य', 'Only library maintenance'],
      ['केवल पाठ योजना निर्माण कार्य', 'Only lesson planning'],
    ],
    'धारा 27 स्पष्ट करती है कि किसी शिक्षक को दसवर्षीय जनगणना, आपदा राहत कर्तव्यों तथा स्थानीय प्राधिकारी/राज्य विधानमंडल/संसद के चुनावों से संबंधित कर्तव्यों के अतिरिक्त किसी गैर-शैक्षणिक कार्य में नहीं लगाया जाएगा।',
    'Section 27 prohibits deploying teachers for non-educational purposes other than decennial population census, disaster relief duties, or election duties.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक कक्षा में कुछ छात्र दिव्यांग (CWSN) हैं। शिक्षक का नैतिक और समावेशी आचरण क्या होना चाहिए?',
    'In a classroom with Children With Special Needs (CWSN), what reflects ethical and inclusive professional conduct?',
    ['सभी छात्रों के प्रति संवेदनशील रहकर यथोचित अनुकूलन (Reasonable Accommodation) प्रदान करना', 'Remaining sensitive and providing reasonable accommodation to support full participation'],
    [
      ['अन्य छात्रों की गति बनाए रखने हेतु उन्हें कक्षा के पीछे बैठा देना', 'Seating them at the back so others are not slowed down'],
      ['उन्हें केवल चित्रकला जैसे कार्यों तक सीमित रखना', 'Restricting them solely to drawing tasks'],
      ['उनके माता-पिता से विशेष विद्यालय में भेजने का दबाव डालना', 'Pressuring parents to shift them to a separate school'],
    ],
    'समावेशी शिक्षा और RPWD अधिनियम 2016 तथा शिक्षक नैतिकता के अनुसार प्रत्येक बच्चे की विशिष्ट आवश्यकता के अनुरूप अनुकूलन करना और समान अवसर देना शिक्षक का कर्तव्य है।',
    'Under inclusive education principles and ethical standards, teachers must remain empathetic and make reasonable accommodations so CWSN learners participate fully.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा व्यवहार शिक्षक की “सामाजिक उत्तरदायित्व” (Social Accountability) को दर्शाता है?',
    'Which of the following behaviors best reflects a teacher’s "Social Accountability"?',
    ['अभिभावकों व समुदाय के साथ बालक की प्रगति साझा करना और बाल-अधिकारों के प्रति जागरूकता बढ़ाना', 'Sharing learner progress with parents/community and promoting awareness of child rights'],
    [
      ['केवल विद्यालय के अंदर रहकर बाहरी समाज से दूरी बनाए रखना', 'Isolating oneself from the local community'],
      ['केवल मेधावी छात्रों के अभिभावकों से संपर्क रखना', 'Contacting parents of high-scoring students only'],
      ['सामुदायिक बैठकों में विद्यालय की आलोचना मात्र करना', 'Only criticizing the school in community meetings'],
    ],
    'सामाजिक उत्तरदायित्व का अर्थ विद्यालय और समाज के बीच सेतु बनना, अभिभावकों को बच्चों की प्रगति से अवगत कराना और शिक्षा के सामाजिक उद्देश्यों की पूर्ति करना है।',
    'Social accountability means acting as a bridge between school and community, keeping parents informed about student growth, and advancing public educational goals.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी विद्यालय में प्रधानाध्यापक आपको गलत उपस्थिति अभिलेख (Fake Attendance) प्रमाणित करने के लिए कहता है। नैतिक संहिता के अनुसार आपको क्या करना चाहिए?',
    'A school head asks you to certify falsified student attendance records. According to professional ethics, what should you do?',
    ['विनम्रता एवं दृढ़ता से असहमति जताते हुए केवल वास्तविक उपस्थिति दर्ज करना', 'Politely yet firmly refuse and record only actual attendance'],
    [
      ['प्रधानाध्यापक के आदेश का आँख मूँदकर पालन करना', 'Blindly obey the head’s instruction'],
      ['गुपचुप तरीके से उपस्थिति रजिस्टर नष्ट कर देना', 'Secretly destroy the attendance register'],
      ['शर्त रखना कि इसके बदले अतिरिक्त अवकाश दिया जाए', 'Demand extra leave in exchange for compliance'],
    ],
    'सत्यनिष्ठा (Integrity) और अभिलेखीय ईमानदारी व्यावसायिक आचरण के मूल स्तंभ हैं; गैर-कानूनी या असत्य प्रशासनिक दबाव में भी झूठे अभिलेख प्रमाणित नहीं किए जा सकते।',
    'Integrity and honesty in official records are core ethical duties; teachers must not falsify attendance or official data even under administrative pressure.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण एक व्यवसाय (Profession) है, केवल एक नौकरी (Occupation) नहीं।” इस कथन का सबसे सटीक आधार क्या है?',
    '“Teaching is a profession, not merely an occupation.” What is the strongest basis for this statement?',
    ['इसमें विशिष्ट ज्ञान, दीर्घ प्रशिक्षण, सेवा-भाव, स्वायत्तता तथा आचार संहिता निहित होती है', 'It requires specialized knowledge, prolonged training, service orientation, autonomy, and an ethical code'],
    [
      ['इसमें प्रतिदिन निश्चित समय पर वेतन मिलता है', 'It provides a fixed monthly salary'],
      ['इसमें ग्रीष्मकालीन अवकाश अधिक होते हैं', 'It offers longer summer vacations'],
      ['इसमें किसी प्रकार की जवाबदेही नहीं होती', 'It involves no formal accountability'],
    ],
    'किसी भी कार्य को व्यवसाय (Profession) तब कहा जाता है जब उसमें विशिष्ट सैद्धांतिक ज्ञान, व्यावहारिक प्रशिक्षण, जनसेवा की भावना, व्यावसायिक संगठन और बाध्यकारी नैतिक आचार संहिता हो।',
    'A profession is characterized by specialized theoretical knowledge, formal training, service orientation, autonomy, and adherence to a formal code of ethics.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'ऑनलाइन शिक्षण या सोशल मीडिया के उपयोग में शिक्षक की डिजिटल नैतिकता (Digital Ethics) में क्या शामिल है?',
    'What does a teacher’s digital ethics include while using online teaching platforms or social media?',
    ['छात्रों की तस्वीरें/डेटा बिना सहमति साझा न करना और मर्यादित ऑनलाइन संवाद रखना', 'Not sharing student photos/data without consent and maintaining respectful online communication'],
    [
      ['कक्षा के छात्रों के अंक सार्वजनिक सोशल मीडिया पोस्ट पर डालना', 'Posting individual student scores publicly on social media'],
      ['देर रात तक छात्रों से व्यक्तिगत चैट पर अनौपचारिक बातें करना', 'Engaging in late-night informal personal chats with students'],
      ['अन्य शिक्षकों के डिजिटल कंटेंट को बिना अनुमति अपना बताना', 'Claiming other educators’ digital content as one’s own'],
    ],
    'डिजिटल नैतिकता में छात्रों की निजता व डेटा सुरक्षा का सम्मान, साइबर बुलिंग से बचाव, कॉपीराइट का पालन और पेशेवर डिजिटल सीमाएँ बनाए रखना शामिल है।',
    'Digital ethics requires protecting student privacy and data, respecting copyright, preventing cyberbullying, and maintaining professional boundaries online.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक छात्र द्वारा परीक्षा में नकल करते पकड़े जाने पर शिक्षक का प्रथम एवं उचित कदम क्या होना चाहिए?',
    'What should be a teacher’s first and appropriate step upon catching a student cheating in an exam?',
    ['शांतिपूर्वक नकल सामग्री जब्त कर नियमों के अनुसार कार्यवाही करना तथा छात्र को अपमानित न करना', 'Calmly confiscate the material, follow exam rules, and avoid publicly humiliating the student'],
    [
      ['पूरी कक्षा के सामने छात्र को थप्पड़ मारना', 'Slap the student in front of the whole class'],
      ['अन्य छात्रों को पता न चले इसलिए अनदेखा कर देना', 'Ignore it to avoid a scene'],
      ['छात्र के पूरे वर्ष के विद्यालय प्रवेश को स्वतः रद्द कर देना', 'Unilaterally expel the student for the entire year'],
    ],
    'परीक्षा की शुचिता बनाए रखने के लिए निर्धारित प्रक्रिया का पालन आवश्यक है, परंतु दंड या शारीरिक/मानसिक अपमान से बचते हुए गरिमापूर्ण एवं सुधारात्मक दृष्टिकोण अपनाया जाना चाहिए।',
    'Preserving exam integrity requires following standard procedures while avoiding physical punishment or public humiliation, keeping a calm and corrective demeanor.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'शिक्षक द्वारा अभिभावकों से महँगे उपहार स्वीकार करने के प्रति व्यावसायिक आचार संहिता का क्या दृष्टिकोण है?',
    'What is the stance of professional ethics regarding teachers accepting expensive gifts from parents?',
    ['यह पक्षपात और हितों के टकराव को जन्म दे सकता है, अतः इससे बचना चाहिए', 'It can create bias and conflict of interest, so it must be avoided'],
    [
      ['यह शिक्षक का वैधानिक अधिकार है', 'It is a statutory right of the teacher'],
      ['इससे कमजोर छात्रों को स्वतः अधिक अंक मिलते हैं', 'It automatically improves weak students’ grades'],
      ['यह केवल निजी विद्यालयों में अनिवार्य होता है', 'It is mandatory only in private schools'],
    ],
    'अभिभावकों से महँगे उपहार या आर्थिक लाभ लेना शिक्षक की निष्पक्षता पर प्रश्नचिह्न लगाता है और व्यावसायिक मर्यादा के विरुद्ध माना जाता है।',
    'Accepting expensive gifts or financial favors from parents compromises objectivity and creates conflicts of interest, violating professional decorum.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“जवाबदेही” (Accountability) और “उत्तरदायित्व” (Responsibility) में शिक्षा प्रशासन के संदर्भ में क्या सूक्ष्म अंतर है?',
    'In educational management, what is the subtle difference between "Accountability" and "Responsibility"?',
    ['उत्तरदायित्व कर्तव्य निभाने की भावना है, जबकि जवाबदेही परिणामों के लिए उत्तर देने की बाध्यता है', 'Responsibility is the obligation to perform a duty, while accountability is answerability for outcomes'],
    [
      ['दोनों शब्दों का प्रयोग केवल वित्तीय लेखा में होता है', 'Both terms apply strictly to financial accounting'],
      ['जवाबदेही हस्तांतरित की जा सकती है पर उत्तरदायित्व नहीं', 'Accountability can be delegated but responsibility cannot'],
      ['उत्तरदायित्व केवल छात्रों का होता है और जवाबदेही अभिभावकों की', 'Responsibility belongs only to students and accountability to parents'],
    ],
    'कार्य सौंपे जाने पर उसे करने का दायित्व (Responsibility) होता है, पर अंतिम परिणामों के प्रति स्पष्टीकरण देने की बाध्यता (Accountability) उच्च या मूल उत्तरदायी व्यक्ति पर बनी रहती है।',
    'Responsibility is the duty to carry out assigned tasks, whereas accountability is the obligation to explain and answer for the final results.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'यदि किसी विद्यालय में जेंडर रूढ़िवादिता (Gender Stereotyping) को कम करना है, तो शिक्षक का आचरण कैसा होना चाहिए?',
    'To reduce gender stereotyping in a school, how should a teacher conduct classroom activities?',
    ['सभी लिंग के छात्रों को विज्ञान, खेल, नेतृत्व व कला में समान अवसर और भूमिकाएँ देना', 'Providing equal opportunities and roles in science, sports, leadership, and arts to all genders'],
    [
      ['लड़कों को गणित और लड़कियों को केवल गृह विज्ञान के लिए प्रेरित करना', 'Encouraging boys toward math and girls solely toward home science'],
      ['कक्षा की सफाई का कार्य केवल छात्राओं को सौंपना', 'Assigning classroom cleaning exclusively to girls'],
      ['लड़कियों से कम अपेक्षाएँ रखना ताकि उन पर दबाव न पड़े', 'Holding lower academic expectations for girls'],
    ],
    'जेंडर-संवेदनशील शिक्षण में शिक्षक भाषा, उदाहरण, बैठने की व्यवस्था और जिम्मेदारियों में किसी भी प्रकार के लैंगिक भेदभाव से बचता है।',
    'Gender-sensitive pedagogy avoids stereotypes in language, examples, task allocation, and expectations, ensuring equal participation across genders.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निष्ठा (NISHTHA) प्रशिक्षण कार्यक्रम का संबंध किससे है?',
    'What is the NISHTHA training programme primarily associated with?',
    ['स्कूल प्रमुखों और शिक्षकों की समग्र क्षमता निर्माण एवं व्यावसायिक उन्नयन', 'Integrated capacity building and professional development of school heads and teachers'],
    [
      ['केवल विश्वविद्यालय के कुलपतियों की नियुक्ति', 'Appointment of university vice-chancellors only'],
      ['विद्यालय भवन निर्माण की निविदा प्रक्रिया', 'Tendering process for school building construction'],
      ['छात्रों के लिए राष्ट्रीय खेल छात्रवृत्ति', 'National sports scholarship for students'],
    ],
    'निष्ठा (National Initiative for School Heads’ and Teachers’ Holistic Advancement) NCERT द्वारा संचालित एकीकृत शिक्षक प्रशिक्षण पहल है जो शैक्षणिक गुणवत्ता और व्यावसायिक दक्षता बढ़ाती है।',
    'NISHTHA (National Initiative for School Heads’ and Teachers’ Holistic Advancement) is an integrated capacity-building programme by NCERT for teachers and school leaders.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब कोई शिक्षक अपनी ही कक्षा की कमजोरियों पर चिंतन करके शिक्षण विधि में सुधार करता है, तो इस प्रक्रिया को क्या कहते हैं?',
    'When a teacher reflects on weaknesses in their own teaching and modifies instructional practices, what is this process called?',
    ['चिंतनशील शिक्षण (Reflective Teaching)', 'Reflective Teaching'],
    [
      ['यांत्रिक रटंत शिक्षण (Rote Teaching)', 'Rote Teaching'],
      ['निरंकुश अनुशासन (Autocratic Discipline)', 'Autocratic Discipline'],
      ['मानकीकृत अनुकरण (Standardized Imitation)', 'Standardized Imitation'],
    ],
    'डोनाल्ड शॉन (Donald Schön) द्वारा चर्चित चिंतनशील अभ्यास (Reflective Practice) में शिक्षक अपने अनुभवों का स्व-मूल्यांकन कर व्यावसायिक सुधार करता है।',
    'Reflective teaching involves systematic self-evaluation of one’s classroom experiences to continuously refine pedagogy and professional effectiveness.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'पॉक्सो अधिनियम (POCSO Act, 2012) के संदर्भ में एक विद्यालय शिक्षक का अनिवार्य विधिक और नैतिक कर्तव्य क्या है?',
    'Under the POCSO Act, 2012, what is a mandatory legal and ethical duty of a school teacher?',
    ['बाल यौन शोषण की किसी भी आशंका या घटना की सूचना तुरंत पुलिस या सक्षम प्राधिकारी को देना', 'Immediately reporting any suspicion or incident of child sexual abuse to police or competent authority'],
    [
      ['विद्यालय की प्रतिष्ठा बचाने हेतु मामले को दबा देना', 'Suppressing the matter to protect the school’s reputation'],
      ['केवल मौखिक चेतावनी देकर मामला समाप्त करना', 'Closing the issue with a verbal warning only'],
      ['केवल वर्ष के अंत में वार्षिक रिपोर्ट में लिखना', 'Mentioning it only in the year-end annual report'],
    ],
    'POCSO अधिनियम 2012 की धारा 19 और 21 के अनुसार बाल यौन अपराध की जानकारी होने पर रिपोर्ट करना अनिवार्य (Mandatory Reporting) है; सूचना छिपाना दंडनीय अपराध है।',
    'Under Sections 19 and 21 of the POCSO Act, 2012, mandatory reporting of suspected child sexual abuse is a strict legal duty; failure to report is punishable.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“पीगमैलियन प्रभाव” (Pygmalion Effect / Rosenthal Effect) शिक्षक के किस आचरण से जुड़ा है?',
    'The "Pygmalion Effect" (Rosenthal Effect) is directly connected to which aspect of a teacher’s behavior?',
    ['शिक्षक की छात्रों से सकारात्मक अपेक्षाएँ छात्रों के प्रदर्शन को बढ़ाती हैं', 'Teachers’ positive expectations elevate students’ academic performance'],
    [
      ['कठोर शारीरिक दंड से अनुशासन बढ़ता है', 'Harsh physical punishment improves discipline'],
      ['अधिक गृहकार्य से रचनात्मकता स्वतः बढ़ती है', 'Excessive homework automatically increases creativity'],
      ['परीक्षा के अंक पूरी तरह आनुवंशिक होते हैं', 'Exam scores are purely genetic'],
    ],
    'रॉबर्ट रोज़ेनथल और जैकबसन के अध्ययन के अनुसार जब शिक्षक छात्रों से उच्च और सकारात्मक अपेक्षा रखता है, तो छात्र अधिक आत्मविश्वास व बेहतर प्रदर्शन करते हैं; अतः शिक्षक को पूर्वाग्रह से बचना चाहिए।',
    'Demonstrated by Rosenthal and Jacobson, high and positive teacher expectations lead to improved student performance, highlighting why bias-free optimism matters.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक विद्यालय समय में कक्षा छोड़कर अपने निजी शेयर बाजार या व्यापार की देखरेख करता है। यह किस मूल्य का हनन है?',
    'A teacher leaves class during school hours to manage personal stock trading or business. Which core value is violated?',
    ['कार्य के प्रति निष्ठा एवं व्यावसायिक ईमानदारी', 'Devotion to duty and professional integrity'],
    [
      ['शैक्षणिक स्वायत्तता', 'Academic autonomy'],
      ['नवाचारशील शिक्षण', 'Innovative pedagogy'],
      ['सहयोगात्मक अधिगम', 'Collaborative learning'],
    ],
    'विद्यालय अवधि छात्रों के शिक्षण के प्रति समर्पित होती है; उस समय निजी व्यावसायिक कार्य करना कर्तव्य-विमुखता (Dereliction of Duty) और सेवा आचरण नियमावली का उल्लंघन है।',
    'School hours are dedicated to student instruction; attending to private business during duty hours constitutes dereliction of duty and violates service conduct rules.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“क्रियात्मक अनुसंधान” (Action Research) अपनाने वाला शिक्षक किस प्रकार का व्यावसायिक गुण प्रदर्शित करता है?',
    'A teacher who conducts "Action Research" demonstrates which professional quality?',
    ['तात्कालिक कक्षा समस्याओं का वैज्ञानिक और स्व-सुधारात्मक समाधान खोजना', 'Seeking scientific and self-corrective solutions to immediate classroom problems'],
    [
      ['केवल राष्ट्रीय स्तर के बड़े सैद्धांतिक शोध पत्र प्रकाशित करना', 'Publishing only large-scale national theoretical papers'],
      ['अन्य विद्यालयों के प्रशासनिक मामलों में हस्तक्षेप करना', 'Interfering in other schools’ administration'],
      ['पाठ्यक्रम को पूरी तरह समाप्त करने की मांग करना', 'Demanding complete abolition of the curriculum'],
    ],
    'स्टीफन कोरी द्वारा शिक्षा में प्रचलित क्रियात्मक अनुसंधान शिक्षक को अपनी ही कक्षा की व्यावहारिक समस्याओं (जैसे अनुपस्थिति, वर्तनी त्रुटि) का व्यवस्थित समाधान करने में सक्षम बनाता है।',
    'Action research (popularized in education by Stephen Corey) enables teachers to systematically investigate and solve immediate classroom issues.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी संवेदनशील सामाजिक या राजनीतिक विवाद पर कक्षा में चर्चा करते समय शिक्षक का नैतिक दायित्व क्या है?',
    'When a sensitive social or political controversy arises in class, what is the teacher’s ethical obligation?',
    ['तटस्थ व संतुलित दृष्टिकोण अपनाकर विविध तर्कों को स्थान देना और छात्रों को अपनी राय थोपने से बचना', 'Maintain a balanced, neutral stance presenting multiple viewpoints without imposing personal ideology'],
    [
      ['अपनी व्यक्तिगत राजनीतिक विचारधारा को अंतिम सत्य बताकर थोपना', 'Impose personal political ideology as absolute truth'],
      ['विवाद से बचने के लिए छात्रों के प्रश्न पूछने पर रोक लगा देना', 'Ban students from asking questions'],
      ['केवल एक पक्ष का समर्थन करने वाले छात्रों को अधिक अंक देना', 'Award higher marks to students agreeing with one side'],
    ],
    'शिक्षक का दायित्व छात्रों में आलोचनात्मक चिंतन विकसित करना है, न कि मतारोपण (Indoctrination)। संतुलित और साक्ष्य-आधारित संवाद व्यावसायिक नैतिकता की माँग है।',
    'A teacher’s ethical duty is to foster critical thinking rather than indoctrination, facilitating balanced, evidence-based discussion of diverse perspectives.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षक के लिए “सहानुभूति” (Sympathy) की तुलना में “समानुभूति” (Empathy) क्यों अधिक महत्वपूर्ण मानी जाती है?',
    'Why is "Empathy" considered more vital than mere "Sympathy" for a teacher?',
    ['समानुभूति छात्र के दृष्टिकोण से उसकी भावना और कठिनाई को समझने में मदद करती है', 'Empathy enables understanding the student’s feelings and struggles from their own perspective'],
    [
      ['समानुभूति से शिक्षक छात्रों से पूरी तरह अलग-थलग रहता है', 'Empathy keeps the teacher completely detached from students'],
      ['सहानुभूति केवल दंड देने के काम आती है', 'Sympathy is only useful for administering punishment'],
      ['समानुभूति का अर्थ छात्र की प्रत्येक गलती को माफ कर देना है', 'Empathy means excusing every mistake without guidance'],
    ],
    'सहानुभूति में केवल दया भाव होता है, जबकि समानुभूति (Empathy) शिक्षक को छात्र की मनःस्थिति में उतरकर उसकी शैक्षिक व संवेगात्मक आवश्यकता को सटीकता से समझने में सक्षम बनाती है।',
    'While sympathy feels pity from outside, empathy helps a teacher step into the learner’s perspective to accurately address academic and emotional needs.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी छात्र द्वारा शिक्षक को अनुचित आर्थिक प्रलोभन देने का प्रयास किए जाने पर शिक्षक को क्या करना चाहिए?',
    'If a student or parent attempts to offer an improper financial bribe to a teacher, what should the teacher do?',
    ['स्पष्ट रूप से अस्वीकार कर प्रधानाध्यापक/सक्षम प्राधिकारी को विधिवत सूचित करना', 'Firmly refuse and formally report the incident to the principal or competent authority'],
    [
      ['चुपचाप स्वीकार कर लेना ताकि संबंध न बिगड़ें', 'Quietly accept to maintain cordial relations'],
      ['उसे अस्वीकार कर छात्र से वर्ष भर शत्रुता रखना', 'Refuse and hold a grudge against the student all year'],
      ['राशि कम होने पर अधिक राशि की मांग करना', 'Demand a higher amount if the offer is small'],
    ],
    'रिश्वत या अनुचित प्रलोभन को ठुकराना और पारदर्शिता हेतु उच्चाधिकारी को सूचित करना सत्यनिष्ठा एवं भ्रष्टाचार-मुक्त शैक्षणिक आचरण का अनिवार्य हिस्सा है।',
    'Refusing bribery immediately and reporting it transparently to the school head upholds institutional integrity and zero tolerance for corruption.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“पेडागॉजिकल कंटेंट नॉलेज” (PCK) की अवधारणा किसने दी जो शिक्षक की व्यावसायिक दक्षता का आधार मानी जाती है?',
    'Who introduced the concept of "Pedagogical Content Knowledge" (PCK), considered a cornerstone of teacher professionalism?',
    ['ली शुलमैन (Lee Shulman)', 'Lee Shulman'],
    [
      ['बी. एफ. स्किनर (B. F. Skinner)', 'B. F. Skinner'],
      ['इवान पावलोव (Ivan Pavlov)', 'Ivan Pavlov'],
      ['सिगमंड फ्रायड (Sigmund Freud)', 'Sigmund Freud'],
    ],
    'ली शुलमैन (1986) ने विषयवस्तु ज्ञान और शिक्षणशास्त्र के समन्वय को Pedagogical Content Knowledge (PCK) कहा, जो एक पेशेवर शिक्षक को सामान्य विषय-ज्ञाता से अलग करता है।',
    'Lee Shulman (1986) coined Pedagogical Content Knowledge (PCK) to describe the blend of content expertise and teaching skill that defines a professional educator.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'विद्यालय में नए नियुक्त कनिष्ठ शिक्षक के प्रति वरिष्ठ शिक्षकों का नैतिक व्यवहार कैसा होना चाहिए?',
    'How should senior teachers behave ethically toward a newly appointed junior teacher in school?',
    ['परामर्शदाता (Mentor) की भूमिका निभाते हुए विद्यालय संस्कृति व शिक्षण प्रक्रिया में सहयोग करना', 'Acting as mentors and supporting them in adapting to school culture and teaching practices'],
    [
      ['उन्हें कठिन और अवांछित कार्यों का बोझ डालकर हतोत्साहित करना', 'Overburdening them with undesirable tasks to discourage them'],
      ['अपनी शिक्षण सामग्री साझा करने से मना करना', 'Refusing to share teaching resources with them'],
      ['अन्य स्टाफ के सामने उनकी अनुभवहीनता का उपहास करना', 'Mocking their inexperience before other staff'],
    ],
    'व्यावसायिक बंधुत्व (Collegiality) के अंतर्गत वरिष्ठ शिक्षकों का कर्तव्य है कि वे नवागंतुक शिक्षकों का मार्गदर्शन करें और सहयोगात्मक वातावरण बनाएं।',
    'Professional collegiality calls on senior teachers to mentor newcomers, share expertise, and foster a supportive institutional climate.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'उत्तर प्रदेश बेसिक शिक्षा परिषद या सरकारी सेवा नियमों में शिक्षक द्वारा बिना पूर्व अनुमति के विद्यालय से अनुपस्थित रहना क्या माना जाता है?',
    'Under government service rules for teachers, remaining absent from school without prior permission or valid leave is treated as what?',
    ['अनधिकृत अनुपस्थिति एवं सेवा आचरण का उल्लंघन', 'Unauthorized absence and breach of service conduct'],
    [
      ['शैक्षणिक नवाचार', 'Educational innovation'],
      ['सामुदायिक सहभागिता', 'Community participation'],
      ['स्वैच्छिक सेवानिवृत्ति', 'Voluntary retirement'],
    ],
    'नियमित उपस्थिति और समयपालन शिक्षक का वैधानिक दायित्व है; बिना स्वीकृत अवकाश अनुपस्थित रहने से छात्रों की पढ़ाई बाधित होती है और यह आचरण नियमों के विरुद्ध है।',
    'Punctuality and regularity are statutory duties; absence without sanctioned leave disrupts student learning and violates service conduct regulations.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'निम्नलिखित में से कौन-सा गुण शिक्षक की “व्यावसायिक नैतिकता” का हिस्सा नहीं है?',
    'Which of the following traits is NOT part of a teacher’s "Professional Ethics"?',
    ['पक्षपातपूर्ण मूल्यांकन करना', 'Conducting biased and partial assessment'],
    [
      ['वस्तुनिष्ठता और निष्पक्षता', 'Objectivity and fairness'],
      ['आजीवन अधिगम के प्रति प्रतिबद्धता', 'Commitment to lifelong learning'],
      ['बाल-केंद्रित संवेदनशीलता', 'Child-centered sensitivity'],
    ],
    'पक्षपातपूर्ण मूल्यांकन शिक्षक की नैतिकता के विपरीत है; जबकि निष्पक्षता, सतत अध्ययन और बाल-संवेदनशीलता इसके मुख्य स्तंभ हैं।',
    'Biased assessment contradicts ethical conduct, whereas fairness, lifelong learning, and child-centered sensitivity are core pillars of teacher ethics.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी छात्र को बार-बार दंडित करने के बजाय शिक्षक उसके व्यवहार के मूल कारण (Root Cause) की जांच करता है, तो यह किस दृष्टिकोण को दर्शाता है?',
    'If a teacher investigates the root cause of a student’s misbehavior instead of repeatedly punishing them, which approach does this reflect?',
    ['निदानात्मक एवं संवेदनशील व्यावसायिक दृष्टिकोण', 'Diagnostic and empathetic professional approach'],
    [
      ['प्रतिक्रियावादी एवं दंडात्मक दृष्टिकोण', 'Reactive and punitive approach'],
      ['उदासीन एवं पलायनवादी दृष्टिकोण', 'Indifferent and escapist approach'],
      ['यांत्रिक एवं कठोर प्रशासनिक दृष्टिकोण', 'Mechanical and rigid administrative approach'],
    ],
    'अव्यवहारिक दंड समस्या का समाधान नहीं करता; निदानात्मक दृष्टिकोण पारिवारिक, संवेगात्मक या अधिगम संबंधी कारणों को समझकर स्थायी सुधार लाता है।',
    'Punishment rarely resolves underlying issues; a diagnostic approach uncovers emotional, social, or learning barriers to achieve lasting behavioral improvement.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“हॉलो इफेक्ट” (Halo Effect) मूल्यांकन में किस प्रकार की नैतिक एवं व्यावसायिक त्रुटि उत्पन्न करता है?',
    'What kind of ethical and professional error does the "Halo Effect" cause in student assessment?',
    ['किसी छात्र के एक अच्छे गुण (जैसे सुंदर लेखन) से प्रभावित होकर अन्य उत्तरों में भी अधिक अंक दे देना', 'Letting one positive trait (e.g., neat handwriting) bias the evaluator into awarding higher marks overall'],
    [
      ['सभी छात्रों को एक समान न्यूनतम अंक देना', 'Awarding identical minimum marks to all students'],
      ['केवल बहुविकल्पीय प्रश्नों का उपयोग करना', 'Using multiple-choice items exclusively'],
      ['उत्तर पुस्तिका को दो बार जाँचने की प्रक्रिया', 'Double-checking an answer script'],
    ],
    'हॉलो इफेक्ट एक संज्ञानात्मक पूर्वाग्रह है जिसमें शिक्षक छात्र की एक विशेषता (जैसे विनम्रता या स्वच्छ लिखावट) के आधार पर उसके समग्र प्रदर्शन का अवास्तविक ऊँचा आकलन कर बैठता है।',
    'The Halo Effect is a cognitive bias where an evaluator’s favorable impression of one trait unduly inflates grades across unrelated academic tasks.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“हॉर्न इफेक्ट” (Horn Effect) शिक्षक के आचरण को किस प्रकार प्रभावित करता है?',
    'How does the "Horn Effect" negatively influence a teacher’s judgment?',
    ['छात्र के एक नकारात्मक गुण या पिछली गलती के कारण उसके समस्त कार्यों को कम आंकना', 'Judging a student’s entire work negatively due to a single flaw or past mistake'],
    [
      ['छात्रों में संगीत के प्रति रुचि जगाना', 'Cultivating musical interest among students'],
      ['कक्षा में ध्वनि प्रदूषण कम करना', 'Reducing noise levels in the classroom'],
      ['समान रूप से सभी को पुरस्कृत करना', 'Rewarding everyone equally'],
    ],
    'हॉर्न इफेक्ट हॉलो इफेक्ट का विपरीत है; इसमें किसी एक नकारात्मक घटना के कारण शिक्षक छात्र के प्रति स्थायी नकारात्मक पूर्वाग्रह बना लेता है।',
    'Opposite to the Halo Effect, the Horn Effect occurs when a single negative trait or past incident causes a teacher to undervalue a student’s subsequent work.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“मूल्य शिक्षा” (Value Education) के संदर्भ में शिक्षक की भूमिका क्या है?',
    'What is the teacher’s primary role in "Value Education"?',
    ['स्वयं के आचरण में मूल्यों को जीकर छात्रों के समक्ष जीवंत उदाहरण प्रस्तुत करना', 'Living ethical values in personal and professional conduct as a living example for students'],
    [
      ['केवल नैतिक शिक्षा की पुस्तक से परिभाषाएँ रटवाना', 'Making students memorize definitions from a moral science book'],
      ['मूल्यों का उल्लंघन करने पर आर्थिक जुर्माना लगाना', 'Imposing monetary fines for value violations'],
      ['इसे केवल परिवार की जिम्मेदारी बताकर टालना', 'Dismissing it as solely the family’s duty'],
    ],
    'महात्मा गांधी और एनसीएफ 2005 दोनों इस बात पर बल देते हैं कि मूल्य उपदेश से नहीं बल्कि शिक्षक के स्वयं के आचरण, निष्पक्षता, सत्यनिष्ठा और करुणा से सीखे जाते हैं।',
    'Both Gandhian philosophy and NCF 2005 emphasize that values are caught through the teacher’s lived conduct—fairness, honesty, and empathy—rather than mere lecturing.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एन.सी.एफ. (NCF) 2005 के अनुसार शिक्षक से किस प्रकार के व्यावसायिक दृष्टिकोण की अपेक्षा की गई है?',
    'According to NCF 2005, what professional orientation is expected from a teacher?',
    ['ज्ञान का संवाहक मात्र न रहकर बालकों के ज्ञान-निर्माण में सहायक एवं संवेदनशील चिंतक बनना', 'Moving from being a mere transmitter of facts to a sensitive facilitator of knowledge construction'],
    [
      ['पाठ्यपुस्तक के प्रत्येक शब्द को अक्षरशः रटवाने वाला', 'Ensuring word-for-word memorization of textbooks'],
      ['कक्षा में पूर्ण मौन और भय का वातावरण बनाने वाला', 'Maintaining absolute silence and fear in class'],
      ['केवल बोर्ड परीक्षा के परिणाम पर केंद्रित रहने वाला', 'Focusing solely on board exam percentages'],
    ],
    'NCF 2005 शिक्षक को एक स्वायत्त, संवेदनशील एवं रचनात्मक सुविधाप्रदाता के रूप में देखता है जो बच्चे के संदर्भ से जोड़कर सीखने को अर्थपूर्ण बनाता है।',
    'NCF 2005 envisions the teacher as a reflective, child-sensitive facilitator who supports active knowledge construction rather than rote transmission.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपने विद्यालय के संसाधनों (जैसे कंप्यूटर लैब या विज्ञान किट) का उपयोग निजी व्यवसाय हेतु घर ले जाकर करता है। यह क्या है?',
    'A teacher takes school resources (like a computer or science kit) home for personal commercial use. What is this?',
    ['सार्वजनिक संपत्ति का दुरुपयोग और नैतिक कदाचार', 'Misappropriation of public property and ethical misconduct'],
    [
      ['संसाधन अनुकूलन', 'Resource optimization'],
      ['सामुदायिक साझेदारी', 'Community partnership'],
      ['नवाचार प्रबंधन', 'Innovation management'],
    ],
    'विद्यालय के उपकरण छात्रों और शैक्षणिक कार्यों के लिए न्यास (Trust) के रूप में होते हैं; उनका निजी व्यावसायिक उपयोग न्यास-भंग और कदाचार है।',
    'School assets are held in public trust for student learning; diverting them for private commercial use is misappropriation and serious misconduct.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षक संघों (Teachers’ Associations) में भागीदारी के संदर्भ में NCTE आचार संहिता क्या अपेक्षा करती है?',
    'Regarding participation in Teachers’ Associations, what does the NCTE Code of Ethics expect?',
    ['पेशेवर गरिमा बनाए रखते हुए शिक्षा की गुणवत्ता सुधारने और रचनात्मक संवाद करने में भाग लेना', 'Participating constructively to improve educational quality while upholding professional dignity'],
    [
      ['व्यक्तिगत लाभ के लिए कक्षाओं का अनिश्चितकालीन बहिष्कार करना', 'Boycotting classes indefinitely for personal gain'],
      ['अन्य सहकर्मियों पर संघ में शामिल होने हेतु दबाव डालना', 'Coercing colleagues to join a union'],
      ['शिक्षक संघों को पूर्णतः अवैध घोषित करना', 'Declaring all teacher associations illegal'],
    ],
    'शिक्षक संघों का उद्देश्य शैक्षिक गुणवत्ता, पेशेवर विकास और शिक्षकों के वैध अधिकारों का संतुलित एवं रचनात्मक संवर्धन होना चाहिए, जिससे छात्रों की शिक्षा बाधित न हो।',
    'Teachers’ associations should advance educational quality and legitimate professional interests constructively without harming student learning or professional dignity.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'विद्यालय में छात्र की प्रगति आख्या (Progress Report) तैयार करते समय शिक्षक को किन बातों का ध्यान रखना चाहिए?',
    'What should a teacher ensure while preparing a student’s progress report?',
    ['तथ्यात्मक, रचनात्मक, संतुलित और अभिभावकों के लिए सुबोध टिप्पणी लिखना', 'Writing factual, constructive, balanced, and easily understandable remarks for parents'],
    [
      ['केवल नकारात्मक लेबल जैसे “मंदबुद्धि” या “आलसी” लिखना', 'Writing negative labels like "dull" or "lazy"'],
      ['बिना जाँचे पिछले सत्र की रिपोर्ट कॉपी कर देना', 'Copying last term’s report without evaluation'],
      ['केवल अंक लिखकर किसी भी सुधारात्मक सुझाव से बचना', 'Writing only marks with zero developmental feedback'],
    ],
    'लेबलिंग (Labeling) बच्चे के आत्म-सम्मान को ठेस पहुँचाती है; प्रगति आख्या में बच्चे की शक्तियों के साथ-साथ सुधार के ठोस क्षेत्रों का स्पष्ट उल्लेख होना चाहिए।',
    'Labeling harms a child’s self-esteem; progress reports must be factual, respectful, highlight strengths, and provide actionable suggestions for growth.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“व्यक्तिगत सीमाएँ” (Professional Boundaries) बनाए रखने का क्या तात्पर्य है?',
    'What does maintaining "Professional Boundaries" mean for a teacher?',
    ['छात्रों के साथ स्नेहपूर्ण किंतु मर्यादित, सुरक्षित और गैर-शोषणकारी संबंध बनाए रखना', 'Maintaining warm yet dignified, safe, and non-exploitative relationships with students'],
    [
      ['छात्रों से कक्षा में बिल्कुल भी बात न करना', 'Refusing to talk to students in class'],
      ['छात्रों के प्रश्नों का उत्तर न देना', 'Refusing to answer student doubts'],
      ['केवल कक्ष के बाहर खड़े होकर पढ़ाना', 'Teaching strictly from outside the classroom'],
    ],
    'शिक्षक और छात्र का रिश्ता विश्वास पर आधारित होता है; व्यावसायिक सीमाएँ यह सुनिश्चित करती हैं कि आत्मीयता कभी अनुचित निर्भरता, पक्षपात या शोषण में न बदले।',
    'The teacher-student relationship relies on trust; professional boundaries ensure warmth never crosses into favoritism, over-familiarity, or exploitation.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'यदि एक शिक्षक देखता है कि उसका एक छात्र प्रतिदिन थका हुआ आता है और शरीर पर चोट के निशान हैं, तो शिक्षक का नैतिक दायित्व क्या है?',
    'If a teacher notices a student arriving exhausted daily with unexplained bruises, what is the ethical duty?',
    ['संवेदनशीलता से गोपनीय बातचीत करना तथा बाल संरक्षण तंत्र/परामर्शदाता को सूचित करना', 'Have a gentle confidential conversation and alert the school counselor or child protection mechanism'],
    [
      ['यह पारिवारिक मामला है सोचकर अनदेखा कर देना', 'Ignore it as a purely private family affair'],
      ['पूरी कक्षा के सामने छात्र से चोट का कारण पूछकर लज्जित करना', 'Question the child about the bruises in front of the class'],
      ['छात्र को विद्यालय आने से मना कर देना', 'Ask the child to stop attending school'],
    ],
    'शिक्षक बाल अधिकारों और बाल सुरक्षा का प्रथम रक्षक (First Responder) होता है; संदिग्ध दुर्व्यवहार या बाल श्रम की स्थिति में संवेदनशील जांच व संरक्षण तंत्र से समन्वय आवश्यक है।',
    'Teachers are frontline protectors of child welfare; suspected abuse or neglect requires sensitive inquiry and coordination with child protection mechanisms.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा गुण “नैतिक नेतृत्व” (Ethical Leadership) का उदाहरण है?',
    'Which of the following is an example of "Ethical Leadership" by a teacher?',
    ['स्वयं नियम का पालन कर छात्रों और सहकर्मियों के लिए मानक स्थापित करना तथा गलतियों की जिम्मेदारी लेना', 'Setting standards by following rules oneself and taking responsibility for one’s own mistakes'],
    [
      ['सफलता का श्रेय स्वयं लेना और असफलता का दोष छात्रों पर मढ़ना', 'Taking credit for success while blaming students for failure'],
      ['केवल वरिष्ठ अधिकारियों को खुश रखने के लिए दिखावा करना', 'Putting on a show only during official inspections'],
      ['नियमों को केवल कमजोर छात्रों पर लागू करना', 'Applying rules selectively to weaker students'],
    ],
    'नैतिक नेतृत्व कथनी और करनी की एकता (Walk the Talk) पर आधारित होता है, जहाँ शिक्षक स्वयं ईमानदारी, समयनिष्ठा और उत्तरदायित्व का उदाहरण बनता है।',
    'Ethical leadership rests on integrity and leading by example—modeling punctuality, fairness, and personal accountability.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“डिजिटल डिवाइड” (Digital Divide) के संदर्भ में एक शिक्षक का न्यायसंगत आचरण क्या होना चाहिए?',
    'In the context of the "Digital Divide," what is an equitable practice for a teacher?',
    ['जिन छात्रों के पास स्मार्टफोन/इंटरनेट नहीं है, उनके लिए ऑफलाइन कार्यपत्रक या वैकल्पिक सहायता उपलब्ध कराना', 'Providing offline worksheets or alternative support for students lacking smartphones or internet'],
    [
      ['केवल ऑनलाइन गृहकार्य देकर वंचित छात्रों के अंक काट लेना', 'Assigning strictly online homework and penalizing students without devices'],
      ['ऑनलाइन कक्षा में केवल महँगे उपकरण वाले छात्रों से प्रश्न पूछना', 'Interacting only with students using high-end devices'],
      ['तकनीक का प्रयोग पूर्णतः बंद कर देना', 'Completely abandoning technology for all learners'],
    ],
    'समता (Equity) का अर्थ है कि संसाधनों की कमी किसी छात्र के सीखने में बाधा न बने; अतः डिजिटल के साथ ऑफलाइन विकल्प रखना आवश्यक है।',
    'Equity requires ensuring lack of digital access does not exclude any learner; providing offline alternatives bridges the digital divide fairly.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'संतुलित व्यावसायिक जीवन में “बर्नआउट” (Teacher Burnout) से बचने के लिए शिक्षक को क्या करना चाहिए?',
    'To prevent "Teacher Burnout" and sustain ethical efficiency, what should a teacher practice?',
    ['प्रभावी समय-प्रबंधन, सहकर्मियों से सहयोग, यथार्थवादी लक्ष्य तथा कार्य-जीवन संतुलन', 'Effective time management, peer collaboration, realistic planning, and work-life balance'],
    [
      ['सारा शिक्षण कार्य केवल छात्रों को स्व-अध्ययन पर छोड़ देना', 'Leaving all instruction entirely to student self-study'],
      ['किसी भी सहकर्मी से संवाद न रखना', 'Avoiding all communication with colleagues'],
      ['तनाव के कारण छात्रों पर क्रोध निकालना', 'Venting work stress through anger at students'],
    ],
    'शिक्षक का मानसिक स्वास्थ्य सीधे कक्षा के वातावरण को प्रभावित करता है; समय-प्रबंधन, सहयोगात्मक कार्यसंस्कृति और आत्म-देखभाल बर्नआउट को रोकती है।',
    'A teacher’s well-being directly shapes classroom climate; time management, peer support, and healthy boundaries prevent burnout.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'निम्नलिखित में से किस स्थिति में शिक्षक द्वारा “सकारात्मक पक्षपात” (Positive Discrimination / Affirmative Support) उचित माना जाता है?',
    'In which situation is "Affirmative Support" by a teacher ethically justified?',
    ['आर्थिक या सामाजिक रूप से वंचित प्रथम पीढ़ी के शिक्षार्थी को अतिरिक्त उपचारात्मक समय देना', 'Giving extra remedial time to an economically or socially disadvantaged first-generation learner'],
    [
      ['अपने रिश्तेदार के बच्चे को परीक्षा के प्रश्न पहले ही बता देना', 'Leaking exam questions to a relative’s child'],
      ['अमीर अभिभावक के बच्चे को बिना योग्यता मॉनिटर बनाना', 'Making a wealthy parent’s child class monitor without merit'],
      ['किसी विशेष क्षेत्र के छात्रों को अतिरिक्त ग्रेस अंक देना', 'Awarding arbitrary grace marks to students from a specific region'],
    ],
    'समता के सिद्धांत के अनुसार पिछड़े या कमजोर शिक्षार्थी को बराबर स्तर पर लाने के लिए अतिरिक्त शैक्षणिक सहयोग (Remedial Support) देना नैतिक और संवैधानिक दृष्टि से उचित है।',
    'Under educational equity, providing additional remedial support to disadvantaged or first-generation learners helps level the playing field without compromising fairness.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'मध्याह्न भोजन योजना (PM POSHAN) के संचालन में शिक्षक की प्रमुख नैतिक और प्रशासनिक जिम्मेदारी क्या है?',
    'In implementing the Mid-Day Meal (PM POSHAN) scheme, what is a teacher’s key ethical and administrative responsibility?',
    ['भोजन की स्वच्छता व गुणवत्ता की जांच करना तथा बिना किसी जातिगत भेदभाव के सभी बच्चों को साथ बैठाकर भोजन कराना', 'Ensuring food hygiene/quality and seating all children together without caste or social discrimination'],
    [
      ['भोजन की गुणवत्ता परखे बिना वितरण की अनुमति देना', 'Allowing distribution without checking food quality'],
      ['सामाजिक वर्ग के आधार पर अलग-अलग पंक्तियाँ बनवाना', 'Arranging separate seating rows based on social background'],
      ['छात्रों की अनुपस्थिति में भी पूर्ण खाद्यान्न खर्च दर्शाना', 'Recording full grain consumption despite student absences'],
    ],
    'PM POSHAN में पोषण व सुरक्षा के साथ-साथ सामाजिक समरसता (Social Harmony) सुनिश्चित करना और खाद्यान्न अभिलेखों में ईमानदारी रखना शिक्षक का दायित्व है।',
    'In PM POSHAN, teachers must verify food safety/hygiene, maintain honest records, and ensure children dine together free of caste or social discrimination.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“नैतिक दुविधा” (Ethical Dilemma) की स्थिति कब उत्पन्न होती है?',
    'When does an "Ethical Dilemma" arise in teaching?',
    ['जब दो नैतिक मूल्यों या कर्तव्यों के बीच टकराव हो और किसी एक का चयन कठिन हो', 'When two legitimate ethical principles or duties conflict, making a single choice difficult'],
    [
      ['जब शिक्षक को पाठ का उत्तर पहले से ज्ञात हो', 'When the teacher already knows the textbook answer'],
      ['जब विद्यालय में ग्रीष्मावकाश की तिथि घोषित हो', 'When summer vacation dates are announced'],
      ['जब सभी छात्र 100% अंक प्राप्त कर लें', 'When every student scores 100%'],
    ],
    'उदाहरणार्थ, किसी छात्र के प्रति करुणा (जैसे बीमारी के कारण समय बढ़ाना) बनाम सभी छात्रों के लिए एकसमान नियम (निष्पक्षता) के बीच संतुलन साधना नैतिक दुविधा कहलाती है।',
    'An ethical dilemma occurs when competing moral values—such as compassion for one struggling learner versus uniform fairness for all—pull in opposite directions.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'जब कोई छात्र कक्षा में बार-बार असफल होने के कारण हीन भावना से ग्रस्त हो जाए, तो शिक्षक का नैतिक कर्तव्य क्या है?',
    'When a student develops an inferiority complex due to repeated academic failure, what is the teacher’s ethical duty?',
    ['क्षमता के छोटे-छोटे लक्ष्य निर्धारित कर सकारात्मक प्रोत्साहन एवं उपचारात्मक शिक्षण देना', 'Set achievable micro-goals, offer positive encouragement, and provide remedial instruction'],
    [
      ['उसे अन्य मेधावी छात्रों का उदाहरण देकर शर्मिंदा करना', 'Shame the student by comparing them to top scorers'],
      ['उसके माता-पिता को पढ़ाई छुड़वाने की सलाह देना', 'Advise parents to discontinue the child’s schooling'],
      ['उसे कक्षा की गतिविधियों से अलग कर देना', 'Exclude the student from classroom participation'],
    ],
    'प्रत्येक बच्चे की सीखने की गति भिन्न होती है; शिक्षक को बच्चे के आत्म-सम्मान की रक्षा करते हुए छोटे सफल अनुभवों द्वारा आत्मविश्वास पुनर्स्थापित करना चाहिए।',
    'Since learners progress at different paces, teachers must protect self-esteem and rebuild confidence through attainable goals and targeted remediation.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक कक्षा में प्रयुक्त होने वाली शिक्षण-अधिगम सामग्री (TLM) को स्थानीय एवं कम लागत वाले संसाधनों से तैयार करता है। यह उसके किस गुण को दर्शाता है?',
    'A teacher develops Teaching-Learning Material (TLM) using low-cost local resources. Which professional quality does this reflect?',
    ['सृजनशीलता, संसाधनशीलता एवं कर्तव्यनिष्ठा', 'Creativity, resourcefulness, and commitment to learning'],
    [
      ['वित्तीय लापरवाही', 'Financial negligence'],
      ['नियमों की अवहेलना', 'Disregard for rules'],
      ['पाठ्यक्रम से पलायन', 'Avoidance of syllabus'],
    ],
    'कम लागत वाली स्थानीय सामग्री (No-cost / Low-cost TLM) का निर्माण दर्शाता है कि शिक्षक सीमित संसाधनों में भी शिक्षण को रोचक और प्रभावी बनाने के लिए समर्पित है।',
    'Creating low-cost local TLM shows resourcefulness, creativity, and dedication to making learning engaging even under resource constraints.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'राष्ट्रीय शिक्षा नीति 2020 के अनुसार शिक्षक की गरिमा और स्वायत्तता को पुनर्स्थापित करने के लिए क्या कदम सुझाया गया है?',
    'To restore the dignity and autonomy of teachers, what step is suggested in NEP 2020?',
    ['अनावश्यक गैर-शैक्षणिक कार्यों से मुक्ति तथा शिक्षण विधियों के चयन में शैक्षणिक स्वायत्तता', 'Relief from excessive non-teaching duties and pedagogical autonomy in choosing teaching methods'],
    [
      ['शिक्षकों के वेतन में वार्षिक कटौती', 'Annual reduction in teacher salaries'],
      ['प्रत्येक कक्षा में सीसीटीवी के माध्यम से दंड का प्रावधान', 'Mandating punitive action via classroom CCTV'],
      ['शिक्षक स्थानांतरण प्रक्रिया को प्रतिवर्ष अनिवार्य करना', 'Making annual teacher transfers compulsory'],
    ],
    'NEP 2020 में शिक्षकों को चुनाव/जनगणना/आपदा को छोड़ गैर-शैक्षणिक बोझ से मुक्त रखने और उन्हें स्थानीय संदर्भानुसार शिक्षण-शास्त्र चुनने की स्वायत्तता देने की बात कही गई है।',
    'NEP 2020 recommends relieving teachers from unrelated administrative tasks and granting pedagogical autonomy to tailor methods to learners’ needs.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी छात्र के धर्म, भाषा या क्षेत्रीय पृष्ठभूमि पर आधारित व्यंग्य (Mockery) पर शिक्षक की क्या प्रतिक्रिया होनी चाहिए?',
    'How should a teacher react if students mock a peer’s religion, language, or regional background?',
    ['तत्काल हस्तक्षेप कर उसे अस्वीकार्य बताना और संवैधानिक मूल्यों व विविधता के सम्मान पर संवाद करना', 'Intervene immediately, state it is unacceptable, and foster dialogue on diversity and constitutional values'],
    [
      ['इसे बच्चों का सामान्य हँसी-मजाक मानकर टाल देना', 'Dismiss it as harmless children’s humor'],
      ['स्वयं भी व्यंग्य में शामिल होकर माहौल हल्का करना', 'Join the joke to lighten the mood'],
      ['पीड़ित छात्र को ही स्थान बदलने को कहना', 'Ask the targeted student to move elsewhere'],
    ],
    'विद्यालय में सुरक्षित, समावेशी और समतामूलक वातावरण बनाना शिक्षक का संवैधानिक व नैतिक दायित्व है; किसी भी प्रकार के भेदभाव या उपहास को तुरंत रोका जाना चाहिए।',
    'Teachers are ethically bound to ensure an inclusive, safe classroom; discriminatory mockery must be addressed immediately by reinforcing respect for diversity.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'कोहलबर्ग के नैतिक विकास के सिद्धांत के किस स्तर पर एक शिक्षक द्वारा “सभी छात्रों के सार्वभौमिक अधिकारों और न्याय” के लिए खड़े होना रखा जाएगा?',
    'In Kohlberg’s theory of moral development, standing up for "universal student rights and justice" corresponds to which level?',
    ['उत्तर-परंपरागत स्तर (Post-conventional Level)', 'Post-conventional Level'],
    [
      ['पूर्व-परंपरागत स्तर (Pre-conventional Level)', 'Pre-conventional Level'],
      ['दंड एवं आज्ञाकारिता अभिविन्यास', 'Punishment and obedience orientation'],
      ['यांत्रिक सापेक्षिक अभिविन्यास', 'Instrumental relativist orientation'],
    ],
    'उत्तर-परंपरागत स्तर (विशेषकर चरण 6 - सार्वभौमिक नैतिक सिद्धांत) में व्यक्ति दंड या सामाजिक प्रशंसा से ऊपर उठकर न्याय, समानता और मानवीय गरिमा के आधार पर निर्णय लेता है।',
    'At Kohlberg’s Post-conventional level (Stage 6), ethical decisions are guided by universal principles of justice, equality, and human dignity.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'विद्यालय में “प्रजातांत्रिक आचरण” (Democratic Conduct) अपनाने वाला शिक्षक क्या करता है?',
    'What does a teacher practicing "Democratic Conduct" do in the classroom?',
    ['कक्षा के नियम बनाने में छात्रों की सहभागिता लेता है और अभिव्यक्ति की स्वतंत्रता देता है', 'Involves students in framing classroom norms and encourages freedom of expression'],
    [
      ['बिना तर्क सुने एकतरफा आदेश पारित करता है', 'Issues unilateral orders without listening to reasons'],
      ['प्रश्न पूछने को अनुशासनहीनता मानता है', 'Treats questioning as indiscipline'],
      ['केवल कक्षा के मॉनिटर की बात को अंतिम सत्य मानता है', 'Accepts only the class monitor’s word'],
    ],
    'लोकतांत्रिक कक्षा वातावरण में छात्र भयमुक्त होकर विचार रखते हैं, नियमों का स्वेच्छा से पालन करते हैं और नागरिक मूल्यों का व्यावहारिक अभ्यास करते हैं।',
    'A democratic classroom involves learners in setting shared norms, values diverse voices, and cultivates responsible citizenship through practice.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'किसी शिक्षक द्वारा प्रश्नपत्र की गोपनीयता भंग कर किसी विशेष कोचिंग या छात्र को प्रश्न बताना किस श्रेणी का अपराध/कदाचार है?',
    'If a teacher breaches question paper confidentiality by leaking questions to a coaching center or student, what kind of misconduct is it?',
    ['गंभीर व्यावसायिक कदाचार एवं आपराधिक विश्वासघात', 'Grave professional misconduct and criminal breach of trust'],
    [
      ['सहयोगात्मक शिक्षण रणनीति', 'Collaborative teaching strategy'],
      ['पूर्व-परीक्षा अभ्यास मॉडल', 'Pre-exam practice model'],
      ['प्रत्यक्ष अनुदेशन विधि', 'Direct instruction method'],
    ],
    'प्रश्नपत्र लीक करना परीक्षा की विश्वसनीयता को नष्ट करता है, योग्य छात्रों के साथ अन्याय करता है तथा सेवा नियमावली एवं सार्वजनिक परीक्षा कानूनों के तहत दंडनीय अपराध है।',
    'Leaking exam papers destroys assessment credibility, harms deserving learners, and constitutes severe misconduct as well as a punishable legal offense.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“सतत और व्यापक मूल्यांकन” (CCE) को ईमानदारी से लागू करने में शिक्षक की कौन-सी नैतिक भूमिका निहित है?',
    'What ethical role is inherent in honestly implementing Continuous and Comprehensive Evaluation (CCE)?',
    ['वर्ष भर विविध उपकरणों से निष्पक्ष अवलोकन कर केवल अंत में मनमाने अंक भरने से बचना', 'Using varied tools for fair year-round observation instead of arbitrarily filling marks at year-end'],
    [
      ['रजिस्टर भरने के लिए सभी छात्रों को एक जैसे अंक लिख देना', 'Assigning identical marks to everyone just to fill registers'],
      ['केवल लिखित परीक्षा को ही मूल्यांकन का आधार मानना', 'Relying strictly on written tests alone'],
      ['सत्र के अंत में मनपसंद छात्रों को ग्रेड बढ़ा देना', 'Inflating grades for favorite students at term-end'],
    ],
    'CCE का वास्तविक उद्देश्य निरंतर निदान और सुधार है; कागजी औपचारिकता निभाने के लिए काल्पनिक ग्रेड भरना व्यावसायिक बेईमानी है।',
    'Authentic CCE requires continuous observation for diagnostic improvement; fabricating uniform grades at the end of the term defeats its purpose and is unethical.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षक के “वस्तुनिष्ठ आचरण” (Objective Conduct) की पहचान किस उदाहरण से होती है?',
    'Which example illustrates a teacher’s "Objective Conduct"?',
    ['अर्जित प्रमाणों और पूर्व-निर्धारित रूब्रिक (Rubric) के आधार पर परियोजना कार्य को अंक देना', 'Grading project work strictly based on evidence and a pre-defined rubric'],
    [
      ['छात्र की आर्थिक स्थिति देखकर अधिक या कम अंक देना', 'Grading based on a student’s economic status'],
      ['अपनी मनोदशा (Mood) के अनुसार कठोर या उदार अंकन करना', 'Grading strictly or leniently depending on personal mood'],
      ['पिछले वर्ष की छवि के आधार पर वर्तमान उत्तर जाँचना', 'Grading current answers based on last year’s impression'],
    ],
    'रूब्रिक या स्पष्ट मानदंडों के आधार पर मूल्यांकन करने से व्यक्तिगत पूर्वाग्रह और मनोदशा का प्रभाव समाप्त होता है, जिससे न्यायसंगत निर्णय सुनिश्चित होता है।',
    'Evaluating against clear, pre-defined rubrics removes mood swings and personal bias, ensuring transparent and fair judgment.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपनी कक्षा के बच्चों को स्थानीय ऐतिहासिक धरोहर या खेत का भ्रमण कराकर पर्यावरण व इतिहास पढ़ाता है। यह किस पेशेवर दक्षता का प्रमाण है?',
    'A teacher takes students to a local heritage site or farm to teach history and ecology. What professional competence does this show?',
    ['संदर्भ आधारित एवं अनुभवात्मक शिक्षण (Contextual & Experiential Pedagogy)', 'Contextual and experiential pedagogy'],
    [
      ['विद्यालय समय की बर्बादी', 'Wastage of school hours'],
      ['पाठ्यक्रम से भटकाव', 'Deviation from syllabus'],
      ['अनुशासनहीनता को बढ़ावा', 'Promotion of indiscipline'],
    ],
    'NCF 2005 और NEP 2020 अनुभवात्मक अधिगम (Experiential Learning) पर जोर देते हैं, जिसमें शिक्षक ज्ञान को विद्यालय की चारदीवारी से बाहर जीवन से जोड़ता है।',
    'Both NCF 2005 and NEP 2020 advocate experiential learning that connects classroom concepts to the local environment and real-world contexts.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“गोपनीयता भंग” के किस उदाहरण से शिक्षक को सदैव बचना चाहिए?',
    'Which breach of confidentiality must a teacher always avoid?',
    ['किसी छात्र के स्वास्थ्य (जैसे HIV या मानसिक विकार) संबंधी जानकारी को अनधिकृत लोगों से साझा करना', 'Sharing a student’s sensitive health status (e.g., HIV or mental health) with unauthorized persons'],
    [
      ['छात्र की अनुपस्थिति की सूचना उसके माता-पिता को देना', 'Informing parents about a student’s absence'],
      ['परीक्षा तिथि की सूचना नोटिस बोर्ड पर लगाना', 'Displaying exam dates on the notice board'],
      ['विद्यालय की वार्षिक उपलब्धि का विवरण पत्रिका में छपवाना', 'Publishing school annual achievements in a magazine'],
    ],
    'स्वास्थ्य, पारिवारिक संकट या विशेष आवश्यकता से जुड़े संवेदनशील विवरण को केवल आवश्यक विधिक या परामर्श प्राधिकारी तक सीमित रखना अनिवार्य है ताकि छात्र को सामाजिक लांछन से बचाया जा सके।',
    'Sensitive health or personal records must be restricted strictly to authorized counseling or legal personnel to protect the child from stigma.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब किसी विद्यालय में अभिभावक-शिक्षक बैठक (PTM) आयोजित होती है, तो शिक्षक का संवाद कैसा होना चाहिए?',
    'During a Parent-Teacher Meeting (PTM), how should a teacher structure communication?',
    ['सम्मानजनक, सहयोगात्मक, प्रमाण-आधारित तथा बच्चे के समग्र विकास पर केंद्रित', 'Respectful, collaborative, evidence-based, and focused on holistic child development'],
    [
      ['केवल माता-पिता की परवरिश पर दोषारोपण करने वाला', 'Blaming parents entirely for the child’s difficulties'],
      ['अन्य बच्चों की कमियाँ और अंक तुलनात्मक रूप से सुनाने वाला', 'Comparing and revealing other children’s scores'],
      ['अभिभावकों के सुझावों को अनसुना कर बैठक शीघ्र समाप्त करने वाला', 'Dismissing parent inputs to end the meeting quickly'],
    ],
    'PTM घर और विद्यालय के बीच साझेदारी का मंच है; यहाँ छात्र की शक्तियों, चुनौतियों और साझा कार्ययोजना पर सकारात्मक चर्चा होनी चाहिए।',
    'A PTM builds home-school partnership; discussions should be respectful, grounded in student work evidence, and focused on collaborative growth plans.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'भारतीय संविधान के किस अनुच्छेद में 6 से 14 वर्ष के बच्चों के लिए निःशुल्क एवं अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया है, जिसकी रक्षा करना प्रत्येक शिक्षक का संवैधानिक कर्तव्य है?',
    'Which Article of the Indian Constitution makes free and compulsory education for children aged 6–14 a Fundamental Right, which teachers help uphold?',
    ['अनुच्छेद 21A', 'Article 21A'],
    [
      ['अनुच्छेद 19(1)', 'Article 19(1)'],
      ['अनुच्छेद 44', 'Article 44'],
      ['अनुच्छेद 356', 'Article 356'],
    ],
    '86वें संविधान संशोधन (2002) द्वारा जोड़ा गया अनुच्छेद 21A शिक्षा को मौलिक अधिकार बनाता है, और शिक्षक इस अधिकार को धरातल पर साकार करने की मुख्य कड़ी है।',
    'Added by the 86th Constitutional Amendment (2002), Article 21A establishes education as a Fundamental Right for ages 6–14, which teachers directly operationalize.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक कक्षा में किसी कठिन प्रश्न का उत्तर तत्काल नहीं जानता। सबसे उचित व्यावसायिक आचरण क्या होगा?',
    'A teacher does not immediately know the answer to a challenging question asked in class. What is the most professional response?',
    ['ईमानदारी से स्वीकार करना कि वह जांचकर अगले दिन सटीक उत्तर देगा, तथा छात्र की जिज्ञासा की सराहना करना', 'Honestly acknowledge it, appreciate the student’s curiosity, and promise to verify and clarify the next day'],
    [
      ['मनगढ़ंत और गलत उत्तर देकर अपनी प्रतिष्ठा बचाने का प्रयास करना', 'Invent a wrong answer to protect personal prestige'],
      ['छात्र को डांटकर बैठा देना कि यह पाठ्यक्रम से बाहर है', 'Scold the student saying it is out of syllabus'],
      ['चर्चा को बीच में ही बंद कर कक्षा से बाहर चले जाना', 'Abruptly end the class and walk out'],
    ],
    'बौद्धिक ईमानदारी (Intellectual Honesty) और आजीवन सीखने की प्रवृत्ति एक आदर्श शिक्षक की पहचान है; गलत जानकारी देना छात्रों में स्थायी भ्रांति पैदा करता है।',
    'Intellectual honesty and modeling lifelong learning earn student trust; fabricating answers misleads learners and undermines credibility.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“व्यावसायिक स्वायत्तता” (Professional Autonomy) के साथ क्या सदैव जुड़ा रहता है?',
    'What always accompanies "Professional Autonomy" for a teacher?',
    ['उत्तरदायित्व और नैतिक जवाबदेही', 'Responsibility and ethical accountability'],
    [
      ['मनमानी करने की पूर्ण छूट', 'Unrestricted license to act arbitrarily'],
      ['पाठ्यक्रम का पूर्ण त्याग', 'Complete abandonment of the syllabus'],
      ['अभिभावकों से संवाद न करने का अधिकार', 'Right to avoid parent communication'],
    ],
    'स्वायत्तता का अर्थ मनमानी नहीं बल्कि पेशेवर निर्णय लेने की स्वतंत्रता के साथ-साथ छात्रों के अधिगम परिणामों के प्रति जवाबदेही स्वीकार करना है।',
    'Autonomy is never arbitrary freedom; it pairs pedagogical discretion with ethical accountability for student learning outcomes.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'निम्नलिखित में से कौन-सी स्थिति “हितों के टकराव” (Conflict of Interest) को दर्शाती है?',
    'Which situation clearly illustrates a "Conflict of Interest" for a school teacher?',
    ['किसी निजी प्रकाशक से कमीशन लेकर अपने ही विद्यालय के छात्रों को उसकी महँगी गाइडबुक खरीदने के लिए बाध्य करना', 'Accepting commission from a private publisher to compel one’s own students to buy their expensive guidebook'],
    [
      ['विद्यालय के पुस्तकालय से पुस्तकें लेकर कक्षा में पढ़ाना', 'Using school library books to enrich classroom teaching'],
      ['एनसीईआरटी की निःशुल्क ई-पुस्तकों का लिंक छात्रों को देना', 'Sharing links to free NCERT e-books with students'],
      ['अतिरिक्त अभ्यास हेतु स्वयं हस्तलिखित प्रश्नपत्र तैयार करना', 'Preparing handwritten practice sheets for extra drill'],
    ],
    'जब शिक्षक का निजी आर्थिक लाभ उसके छात्रों के शैक्षिक व आर्थिक हित से टकराता है, तो वह स्पष्ट रूप से हितों का टकराव और अनैतिक आचरण कहलाता है।',
    'When a teacher’s personal financial gain (commission) conflicts with students’ educational and financial welfare, it constitutes a clear conflict of interest.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'विद्यालय में सह-शैक्षणिक गतिविधियों (जैसे खेल, वाद-विवाद, कला) के प्रति शिक्षक का क्या दृष्टिकोण होना चाहिए?',
    'What should be a teacher’s attitude toward co-curricular activities (sports, debate, arts) in school?',
    ['इन्हें समग्र व्यक्तित्व विकास का अभिन्न अंग मानकर सभी छात्रों की भागीदारी प्रोत्साहित करना', 'Treating them as integral to holistic development and encouraging every student to participate'],
    [
      ['इन्हें केवल समय की बर्बादी मानकर समाप्त कर देना', 'Treating them as a waste of time and cancelling them'],
      ['इन अवसरों पर केवल कुछ चुनिंदा छात्रों को ही बार-बार मंच देना', 'Repeatedly selecting only a few favorite students'],
      ['इन घण्टों का उपयोग भी रटने वाले विषयों के लिए करना', 'Replacing these periods with rote memorization drills'],
    ],
    'NCF 2005 और NEP 2020 दोनों पाठ्यचर्या और सह-पाठ्यचर्या के अंतर को समाप्त कर कला, खेल और जीवन-कौशल को शिक्षा का अनिवार्य भाग मानते हैं।',
    'NCF 2005 and NEP 2020 remove rigid barriers between curricular and co-curricular areas, recognizing arts, sports, and clubs as vital to holistic growth.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपने विषय के नवीनतम शोध और शिक्षण तकनीकों से अद्यतन नहीं रहता और 20 वर्ष पुराने नोट्स ही दोहराता है। यह किस नैतिक दायित्व की कमी है?',
    'A teacher never updates subject knowledge or pedagogy and repeats 20-year-old notes. Which ethical obligation is neglected?',
    ['निरंतर व्यावसायिक विकास एवं अद्यतन ज्ञान का दायित्व', 'Obligation of continuous professional growth and staying updated'],
    [
      ['वित्तीय लेखाजोखा रखने का दायित्व', 'Obligation of financial bookkeeping'],
      ['अभिभावकों से शुल्क वसूली का दायित्व', 'Obligation of fee collection'],
      ['भवनों के रखरखाव का दायित्व', 'Obligation of building maintenance'],
    ],
    'NCTE आचार संहिता के अनुसार शिक्षक का कर्तव्य है कि वह जीवनपर्यंत विद्यार्थी बना रहे और बदलते ज्ञान व तकनीक के साथ स्वयं को अद्यतन रखे।',
    'The NCTE Code obligates teachers to remain lifelong learners who continuously update their subject knowledge and pedagogical repertoire.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“लोक सेवा मूल्य” (Public Service Values) के अंतर्गत सरकारी विद्यालय के शिक्षक के लिए कौन-सा कथन सर्वाधिक उपयुक्त है?',
    'Under "Public Service Values," which statement best applies to a government school teacher?',
    ['वंचित वर्गों तक गुणवत्तापूर्ण शिक्षा पहुँचाना एक संवैधानिक एवं नैतिक मिशन है', 'Delivering quality education to marginalized sections is a constitutional and moral mission'],
    [
      ['सरकारी सेवा मिलने के बाद शैक्षणिक प्रयास कम कर देना चाहिए', 'Instructional effort can relax once government tenure is secured'],
      ['केवल उच्चाधिकारियों के निरीक्षण के दिन ही पढ़ाना चाहिए', 'Teaching seriously only on inspection days'],
      ['निजी विद्यालयों से कम गुणवत्ता रखना स्वाभाविक है', 'Lower quality than private schools is inevitable'],
    ],
    'सार्वजनिक शिक्षा प्रणाली सामाजिक न्याय और समानता का माध्यम है; अतः समर्पण, संवेदनशीलता और पारदर्शिता लोक सेवा के मूल मूल्य हैं।',
    'Public schooling is a primary vehicle for social justice and equity; dedication, empathy, and transparency are foundational public service values.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'कक्षा में अनुशासन बनाए रखने का सबसे टिकाऊ और नैतिक तरीका क्या है?',
    'What is the most sustainable and ethical way to maintain classroom discipline?',
    ['रोचक शिक्षण, स्पष्ट सहयोगात्मक नियम और परस्पर सम्मान पर आधारित संबंध', 'Engaging instruction, clear shared norms, and relationships built on mutual respect'],
    [
      ['छड़ी और कठोर दंड का निरंतर भय बनाए रखना', 'Maintaining constant fear of corporal punishment'],
      ['अभिभावकों को बार-बार शिकायत पत्र भेजकर धमकाना', 'Threatening students with frequent complaint letters'],
      ['कमजोर छात्रों को कक्षा से बाहर खड़ा कर देना', 'Making struggling students stand outside the classroom'],
    ],
    'सकारात्मक अनुशासन (Positive Discipline) भय के बजाय सक्रिय सहभागिता, रोचक गतिविधि और स्व-नियमन (Self-regulation) विकसित करता है।',
    'Positive discipline builds self-regulation through engaging pedagogy, clear expectations, and mutual respect rather than fear or exclusion.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“प्री-सेवा” (Pre-service) और “सेवाकालीन” (In-service) शिक्षक शिक्षा के बीच नैतिक आचरण के विकास में क्या भूमिका है?',
    'What are the respective roles of pre-service and in-service teacher education in developing professional ethics?',
    ['प्री-सेवा आधारभूत नैतिक समझ बनाती है जबकि सेवाकालीन प्रशिक्षण वास्तविक कक्षा चुनौतियों में उसे सुदृढ़ करता है', 'Pre-service builds foundational ethical understanding, while in-service reinforces it amid real classroom challenges'],
    [
      ['दोनों का उद्देश्य केवल वेतनमान तय करना है', 'Both aim solely to determine pay scales'],
      ['नैतिकता केवल सेवाकालीन प्रशिक्षण में सिखाई जा सकती है', 'Ethics can only be taught during in-service training'],
      ['प्री-सेवा प्रशिक्षण में केवल खेल सिखाए जाते हैं', 'Pre-service training covers only sports'],
    ],
    'D.El.Ed./B.Ed. जैसे प्री-सेवा कार्यक्रम व्यावसायिक मूल्यों की नींव रखते हैं, और सेवाकालीन कार्यशालाएँ व मार्गदर्शन (Mentoring) उन्हें व्यावहारिक रूप से परिपक्व बनाते हैं।',
    'Pre-service programs lay the theoretical and value foundation, while in-service training and mentoring help teachers navigate real-world ethical dilemmas.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक छात्र अपनी भाषा या क्षेत्रीय उच्चारण के कारण कक्षा में बोलने से झिझकता है। शिक्षक का व्यावसायिक उत्तरदायित्व क्या है?',
    'A student hesitates to speak in class due to their regional dialect or accent. What is the teacher’s professional responsibility?',
    ['छात्र की मातृभाषा/बोली का सम्मान करते हुए उसे सुरक्षित माहौल में अभिव्यक्ति के अवसर देना', 'Respecting the child’s home dialect and providing a safe environment for gradual expression'],
    [
      ['सभी के सामने उसके उच्चारण को सुधारने के नाम पर टोकते रहना', 'Repeatedly interrupting and mocking their accent publicly'],
      ['उसे कक्षा में मौन रहने की सलाह देना', 'Advising the student to stay silent in class'],
      ['उसका उपहास होने पर मौन स्वीकृति देना', 'Silently allowing peers to laugh at the accent'],
    ],
    'NCF 2005 और बहुभाषिक शिक्षण सिद्धांत मानते हैं कि बच्चे की मातृभाषा/बोली उसकी पहचान और संज्ञानात्मक संसाधन है; उसका सम्मान आत्मविश्वास बढ़ाता है।',
    'NCF 2005 and multilingual pedagogy recognize the child’s home language as a cognitive asset; respecting it fosters confidence and inclusion.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'किस आयोग ने कहा था कि “भारत का भाग्य उसकी कक्षाओं में आकार ले रहा है” (The destiny of India is now being shaped in her classrooms)?',
    'Which Education Commission famously stated, "The destiny of India is now being shaped in her classrooms"?',
    ['कोठारी आयोग (शिक्षा आयोग, 1964-66)', 'Kothari Commission (Education Commission, 1964–66)'],
    [
      ['मुदालियर आयोग (1952-53)', 'Mudaliar Commission (1952–53)'],
      ['राधाकृष्णन आयोग (1948-49)', 'Radhakrishnan Commission (1948–49)'],
      ['हंटर आयोग (1882)', 'Hunter Commission (1882)'],
    ],
    'डॉ. डी.एस. कोठारी की अध्यक्षता वाले शिक्षा आयोग (1964-66) की रिपोर्ट का यह प्रारंभिक वाक्य शिक्षक की राष्ट्र-निर्माण में सर्वोच्च नैतिक एवं सामाजिक भूमिका को रेखांकित करता है।',
    'The Kothari Commission (1964–66) opened its report with this landmark statement, underscoring the teacher’s pivotal moral and national responsibility.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“कठोरता” (Rigidity) और “दृढ़ता” (Firmness) में शिक्षक के आचरण के संदर्भ में क्या अंतर है?',
    'In a teacher’s conduct, how does "Firmness" differ from "Rigidity"?',
    ['दृढ़ता सिद्धांतों पर अडिग रहते हुए परिस्थिति के अनुसार संवेदनशील लचीलापन रखती है, जबकि कठोरता अमानवीय होती है', 'Firmness upholds principles with humane flexibility, whereas rigidity refuses reasonable context'],
    [
      ['कठोरता सदैव सकारात्मक होती है और दृढ़ता कमजोरी है', 'Rigidity is always positive while firmness is weakness'],
      ['दोनों एक ही शब्द के पर्यायवाची हैं', 'Both are identical synonyms'],
      ['दृढ़ता का अर्थ नियमों को पूरी तरह समाप्त करना है', 'Firmness means abolishing all rules'],
    ],
    'एक प्रभावी शिक्षक मानकों व अनुशासन में दृढ़ (Firm) और निष्पक्ष होता है, किंतु मानवीय संकट या विशेष आवश्यकता की स्थिति में संवेदनशील लचीलापन भी दिखाता है।',
    'Effective teachers are firm and consistent about core standards while remaining empathetically flexible to genuine human circumstances, unlike rigid authoritarianism.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'राष्ट्रीय पाठ्यचर्या रूपरेखा (NCF-FS 2022 / NCF-SE 2023) भारतीय परंपरा में शिक्षक के किस मूल गुण पर विशेष बल देती है?',
    'In NCF-SE 2023 / Indian educational philosophy, which core teacher quality is strongly emphasized alongside subject mastery?',
    ['“पंचकोशीय” व समग्र विकास हेतु करुणा, धैर्य, संवेदनशीलता और स्वयं आदर्श आचरण', 'Compassion, patience, sensitivity, and exemplary conduct for holistic Panchakosha development'],
    [
      ['केवल परीक्षा कोचिंग की दक्षता', 'Mere exam-coaching efficiency'],
      ['अधिक से अधिक दंड देने की क्षमता', 'Capacity to administer strict punishment'],
      ['प्रशासनिक प्रभुत्व की भावना', 'Sense of administrative dominance'],
    ],
    'भारतीय शैक्षिक चिंतन और NCF 2023 शिक्षक के चरित्र, स्नेह, धैर्य और समग्र विकास (शारीरिक, प्राणिक, मानसिक, बौद्धिक, आनंदमय कोष) में सहायक भूमिका पर बल देते हैं।',
    'NCF-SE 2023 highlights teacher character—compassion, patience, and exemplary conduct—to nurture learners holistically across physical, emotional, and intellectual dimensions.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“प्रोफेशनल लर्निंग कम्युनिटी” (PLC) में शिक्षक की भागीदारी क्यों महत्वपूर्ण है?',
    'Why is a teacher’s participation in a "Professional Learning Community" (PLC) valuable?',
    ['सहकर्मियों के साथ सर्वोत्तम शिक्षण प्रथाओं और चुनौतियों को साझा कर सामूहिक सुधार करने हेतु', 'To share best pedagogical practices and collaboratively solve instructional challenges with peers'],
    [
      ['प्रधानाध्यापक के विरुद्ध गुटबाजी करने हेतु', 'To form factions against the principal'],
      ['व्यक्तिगत अवकाश बढ़ाने के लिए दबाव बनाने हेतु', 'To lobby for extra personal leave'],
      ['कक्षा शिक्षण से बचने के लिए समय बिताने हेतु', 'To pass time and avoid classroom teaching'],
    ],
    'PLC एक सहयोगात्मक मंच है जहाँ शिक्षक पाठ-योजना, मूल्यांकन डेटा और नवाचारी विधियों पर चर्चा कर छात्रों के सीखने को बेहतर बनाते हैं।',
    'A PLC fosters collaborative inquiry where teachers share instructional strategies, analyze learner outcomes, and grow professionally together.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक किसी छात्र की कॉपी जाँचते समय लाल स्याही से पूरे पृष्ठ पर बड़े क्रॉस और अपमानजनक टिप्पणियाँ लिखता है। इसका छात्र पर क्या प्रभाव पड़ता है और यह किसका उल्लंघन है?',
    'A teacher marks huge red crosses and writes humiliating remarks across a student’s notebook. What is its impact and ethical violation?',
    ['छात्र का आत्मविश्वास नष्ट होता है और यह गरिमापूर्ण एवं रचनात्मक प्रतिपुष्टि के सिद्धांत का उल्लंघन है', 'It destroys learner confidence and violates the principle of dignified, constructive feedback'],
    [
      ['इससे छात्र रातों-रात प्रतिभाशाली बन जाता है', 'It makes the student brilliant overnight'],
      ['यह उच्च शैक्षणिक मानकों का सर्वश्रेष्ठ प्रमाण है', 'It is the best proof of high academic standards'],
      ['इससे अभिभावकों का शिक्षक पर विश्वास बढ़ता है', 'It increases parents’ trust in the teacher'],
    ],
    'प्रतिपुष्टि (Feedback) का उद्देश्य त्रुटि की पहचान कर सुधार का मार्ग दिखाना है, न कि छात्र को अपमानित या हतोत्साहित करना।',
    'Feedback should guide improvement respectfully; harsh public shaming or derogatory remarks erode motivation and violate learner dignity.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'विद्यालय में किसी छात्र द्वारा आत्महत्या की प्रवृत्ति या गंभीर अवसाद के संकेत दिखने पर शिक्षक का प्रथम कर्तव्य क्या है?',
    'If a student exhibits signs of severe depression or suicidal ideation, what is a teacher’s immediate ethical responsibility?',
    ['छात्र को अकेला न छोड़ना, सहानुभूतिपूर्वक सुनना तथा तुरंत विद्यालय परामर्शदाता, प्रधानाध्यापक व माता-पिता/पेशेवर सहायता से जोड़ना', 'Never leave the child isolated, listen empathetically, and urgently connect them with the counselor, principal, parents, and professional help'],
    [
      ['यह कहकर टाल देना कि वह नाटक कर रहा है', 'Dismiss it claiming the student is seeking attention'],
      ['गोपनीयता के नाम पर किसी भी जिम्मेदार व्यक्ति या माता-पिता को न बताना', 'Withhold it from parents and professionals in the name of secrecy'],
      ['उसे कक्षा के सामने डांटकर मजबूत बनने को कहना', 'Scold the student publicly to "toughen up"'],
    ],
    'जीवन की रक्षा सर्वोपरि है (Duty of Care); आत्म-हानि के संकेतों में गोपनीयता की सीमा समाप्त हो जाती है और तत्काल पेशेवर मानसिक स्वास्थ्य सहायता व अभिभावक समन्वय अनिवार्य होता है।',
    'Protecting student life overrides confidentiality; immediate empathetic support and urgent referral to counselors, guardians, and mental health professionals are mandatory.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'किस दस्तावेज़ ने पहली बार स्वतंत्र भारत में “अध्यापक की आर्थिक व सामाजिक स्थिति सुधारने और आचार संहिता बनाने” पर व्यापक बल दिया?',
    'Which document in independent India strongly emphasized improving teachers’ socio-economic status alongside formulating professional norms?',
    ['राष्ट्रीय शिक्षा नीति 1986 (NPE 1986) एवं कोठारी आयोग (1964-66)', 'National Policy on Education (NPE 1986) and Kothari Commission (1964–66)'],
    [
      ['मैकाले का विवरण पत्र (1835)', 'Macaulay’s Minute (1835)'],
      ['वुड का घोषणापत्र (1854)', 'Wood’s Despatch (1854)'],
      ['सैडलर आयोग (1917)', 'Sadler Commission (1917)'],
    ],
    'कोठारी आयोग और NPE 1986 दोनों ने स्पष्ट किया कि किसी भी शिक्षा प्रणाली की गुणवत्ता उसके शिक्षकों की गुणवत्ता और उनके नैतिक-सामाजिक सम्मान से अधिक नहीं हो सकती।',
    'Both the Kothari Commission (1964–66) and NPE 1986 emphasized that no system of education can rise above the quality, status, and ethical standards of its teachers.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“पारदर्शिता” (Transparency) शिक्षक के किन कार्यों में सर्वाधिक आवश्यक है?',
    'In which teacher functions is "Transparency" most essential?',
    ['परीक्षा मूल्यांकन, छात्र चयन (जैसे मॉनिटर/प्रतियोगिता) और विद्यालयी निधि/सामग्री वितरण', 'Exam evaluation, student selection (monitors/competitions), and distribution of school funds or supplies'],
    [
      ['छात्रों के व्यक्तिगत चिकित्सा विवरण सार्वजनिक करने में', 'Publicizing students’ private medical records'],
      ['सहकर्मियों की निजी पारिवारिक चर्चा करने में', 'Discussing colleagues’ private family matters'],
      ['केवल अपनी पसंद की पाठ्यपुस्तक छिपाकर रखने में', 'Hiding preferred reference books'],
    ],
    'मूल्यांकन मानदंडों, पुरस्कार चयन और सरकारी योजनाओं (जैसे छात्रवृत्ति, गणवेश, पुस्तक वितरण) में पारदर्शिता विश्वास बढ़ाती है और पक्षपात के आरोपों को समाप्त करती है।',
    'Transparency in grading criteria, student selections, and distribution of scholarships or materials builds institutional trust and eliminates favoritism.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी विषय में प्रयोगात्मक कार्य के दौरान छात्र की सुरक्षा से जुड़ा जोखिम हो, तो शिक्षक का नैतिक और कानूनी दायित्व (Duty of Care) क्या है?',
    'During a science experiment involving safety risks, what is the teacher’s ethical and legal "Duty of Care"?',
    ['पूर्व-सुरक्षा निर्देश देना, सुरक्षा उपकरण उपलब्ध कराना और प्रयोग के दौरान निरंतर पर्यवेक्षण करना', 'Give prior safety instructions, ensure protective gear, and maintain active supervision throughout'],
    [
      ['छात्रों को प्रयोगशाला में अकेला छोड़कर स्टाफ रूम में बैठना', 'Leave students unsupervised in the lab and sit in the staff room'],
      ['बिना जाँचे खराब उपकरण उपयोग करने देना', 'Allow use of damaged equipment without inspection'],
      ['सुरक्षा के डर से जीवन भर कोई प्रयोग न कराना', 'Never conduct any practical work out of fear'],
    ],
    'इन लोको पेरेंटिस (In Loco Parentis) के सिद्धांत के तहत विद्यालय समय में शिक्षक पर माता-पिता के समान सावधानी और बाल-सुरक्षा का दायित्व होता है।',
    'Under the principle of "in loco parentis," teachers owe a strict duty of care requiring safety briefings, protective precautions, and active supervision.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'शिक्षण कार्य में “धैर्य” (Patience) को एक प्रमुख व्यावसायिक गुण क्यों माना जाता है?',
    'Why is "Patience" regarded as a critical professional virtue in teaching?',
    ['क्योंकि प्रत्येक छात्र की संज्ञानात्मक गति और पृष्ठभूमि भिन्न होती है तथा सीखने में समय लगता है', 'Because learners vary in cognitive pace and background, and meaningful learning takes time'],
    [
      ['क्योंकि शिक्षक को पाठ्यक्रम पूरा करने की कोई जल्दी नहीं होनी चाहिए', 'Because teachers need not worry about syllabus completion'],
      ['क्योंकि धैर्य रखने से छात्रों को परीक्षा नहीं देनी पड़ती', 'Because patience eliminates the need for exams'],
      ['क्योंकि इससे शिक्षक कक्षा में सो सकता है', 'Because it allows the teacher to remain passive'],
    ],
    'धैर्य शिक्षक को बार-बार समझाने, अलग-अलग उदाहरण गढ़ने और धीमी गति से सीखने वाले छात्रों के प्रति आक्रोश से बचने की शक्ति देता है।',
    'Patience enables teachers to re-explain concepts through varied strategies and support slow learners without frustration or anger.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“बौद्धिक संपदा और कॉपीराइट नैतिकता” के अनुसार यदि शिक्षक किसी अन्य लेखक की कार्यपत्रक या प्रस्तुति कक्षा में उपयोग करता है, तो उसे क्या करना चाहिए?',
    'According to intellectual property ethics, if a teacher uses another author’s worksheet or presentation in class, what should they do?',
    ['लाइसेंस शर्तों का पालन करना तथा मूल लेखक/स्रोत को स्पष्ट श्रेय (Attribution) देना', 'Comply with license terms and give clear attribution to the original author/source'],
    [
      ['मूल लेखक का नाम हटाकर अपना नाम लिख देना', 'Remove the original author’s name and put their own'],
      ['उसे व्यावसायिक रूप से बाजार में बेच देना', 'Sell it commercially in the open market'],
      ['केवल फोंट बदलकर उसे मौलिक शोध घोषित करना', 'Change the font and claim it as original research'],
    ],
    'स्रोत का उल्लेख करना (Attribution) छात्रों के सामने भी शैक्षणिक ईमानदारी और साहित्यिक चोरी (Plagiarism) से बचने का सही उदाहरण प्रस्तुत करता है।',
    'Properly crediting sources and respecting licensing models academic integrity and teaches students to avoid plagiarism.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“लर्निंग आउटकम्स” (Learning Outcomes) के प्रति शिक्षक की प्रतिबद्धता का अर्थ क्या है?',
    'What does a teacher’s commitment to "Learning Outcomes" signify?',
    ['केवल अध्याय पढ़ा देने के बजाय यह सुनिश्चित करना कि प्रत्येक छात्र ने अपेक्षित दक्षता वास्तव में प्राप्त की है', 'Ensuring every student actually masters expected competencies rather than merely covering textbook chapters'],
    [
      ['केवल बोर्ड पर पाठ्यक्रम पूरा होने की तारीख लिख देना', 'Merely marking syllabus completion dates on the register'],
      ['अंतिम परीक्षा से एक दिन पहले संभावित प्रश्न रटवाना', 'Making students cram likely questions a day before exams'],
      ['केवल शीर्ष 10% छात्रों की सफलता पर ध्यान देना', 'Focusing only on the top 10% of learners'],
    ],
    'पाठ्यक्रम पूर्ण करना (Syllabus Completion) और अधिगम प्रतिफल (Learning Outcomes) प्राप्त करना अलग हैं; नैतिक शिक्षक प्रत्येक छात्र के वास्तविक सीखने के लिए उत्तरदायी होता है।',
    'Covering chapters differs from achieving learning outcomes; an ethical educator ensures genuine competency mastery for all learners.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि विद्यालय में कोई छात्र आर्थिक तंगी के कारण पाठ्य-सामग्री नहीं खरीद पा रहा है और शिक्षक व्यक्तिगत या संस्थागत सहयोग से उसकी मदद करता है, तो यह किस मूल्य का प्रतीक है?',
    'If a student cannot afford study supplies due to poverty and a teacher arranges help discreetly through institutional or personal support, which value does this show?',
    ['करुणा, सामाजिक संवेदनशीलता एवं गरिमा की रक्षा', 'Compassion, social sensitivity, and preservation of dignity'],
    [
      ['वित्तीय अनियमितता', 'Financial irregularity'],
      ['अनुशासनहीनता', 'Indiscipline'],
      ['पक्षपातपूर्ण दंड', 'Biased punishment'],
    ],
    'गरीब छात्र की गोपनीय व सम्मानजनक ढंग से मदद करना यह सुनिश्चित करता है कि गरीबी शिक्षा में बाधा न बने और छात्र को सहपाठियों के समक्ष हीनता महसूस न हो।',
    'Discreetly supporting a needy student ensures poverty does not block learning while safeguarding the child’s self-respect before peers.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक सहकर्मी की अनुपस्थिति में उसकी कक्षा को व्यवस्थित रखने के बजाय खाली बैठा छोड़ देता है ताकि “अतिरिक्त काम” न करना पड़े। यह किस गुण की कमी है?',
    'During a colleague’s absence, a teacher leaves that class unattended to avoid "extra work." Which professional quality is lacking?',
    ['सामूहिक उत्तरदायित्व एवं टीम भावना (Team Spirit)', 'Collective responsibility and team spirit'],
    [
      ['व्यक्तिगत स्वायत्तता', 'Individual autonomy'],
      ['शोध अभिवृत्ति', 'Research aptitude'],
      ['वित्तीय साक्षरता', 'Financial literacy'],
    ],
    'विद्यालय एक टीम के रूप में कार्य करता है; व्यवस्था कालखंड (Arrangement Period) में छात्रों को सार्थक गतिविधि में संलग्न करना सहयोगात्मक आचरण है।',
    'A school functions as a cohesive team; engaging learners constructively during arrangement periods reflects shared responsibility and collegiality.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण आचार संहिता” के अनुसार शिक्षक का अपने व्यवसाय के प्रति सबसे महत्वपूर्ण कर्तव्य क्या है?',
    'According to the Code of Professional Ethics, what is a teacher’s foremost duty toward the teaching profession itself?',
    ['व्यावसायिक गरिमा बढ़ाना, नवीन ज्ञान अर्जित करना तथा शिक्षण मानकों को ऊँचा उठाना', 'Upholding professional dignity, acquiring new knowledge, and elevating instructional standards'],
    [
      ['केवल वेतन वृद्धि और पदोन्नति तक सीमित रहना', 'Focusing solely on pay hikes and promotions'],
      ['नए शिक्षकों के प्रवेश का विरोध करना', 'Opposing entry of new qualified teachers'],
      ['शिक्षण की तुलना में अन्य व्यवसायों को प्राथमिकता देना', 'Prioritizing side businesses over teaching'],
    ],
    'व्यवसाय के प्रति कर्तव्य में आत्म-विकास, नवाचार, नैतिक आचरण और समाज में शिक्षक पद की साख को मजबूत रखना शामिल है।',
    'Obligations toward the profession include continuous self-improvement, ethical integrity, and enhancing public trust in educators.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब शिक्षक छात्रों से फीडबैक (प्रतिपुष्टि) लेकर अपनी शिक्षण शैली में बदलाव करता है, तो वह किस सिद्धांत का पालन करता है?',
    'When a teacher collects student feedback and refines teaching style accordingly, which principle is practiced?',
    ['लोकतांत्रिक जवाबदेही एवं शिक्षार्थी-केंद्रित सुधार', 'Democratic accountability and learner-centered improvement'],
    [
      ['शिक्षक-केंद्रित निरंकुशता', 'Teacher-centered authoritarianism'],
      ['आत्म-प्रचार', 'Self-promotion'],
      ['अनुशासनहीनता', 'Lack of discipline'],
    ],
    'छात्रों से रचनात्मक फीडबैक स्वीकार करने का अर्थ है कि शिक्षक स्वयं को सर्वज्ञ मानने के बजाय सीखने की प्रक्रिया को प्राथमिकता देता है।',
    'Welcoming constructive student feedback demonstrates humility, responsiveness, and commitment to learner-centered effectiveness.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा व्यवहार “भावनात्मक बुद्धिमत्ता” (Emotional Intelligence) से युक्त शिक्षक को दर्शाता है?',
    'Which behavior best characterizes a teacher high in "Emotional Intelligence"?',
    ['स्वयं के क्रोध को नियंत्रित कर छात्र की भावनात्मक स्थिति को समझते हुए शांत समाधान निकालना', 'Regulating personal anger, recognizing the student’s emotional state, and finding a calm resolution'],
    [
      ['छात्र के चिल्लाने पर उससे अधिक जोर से चिल्लाना', 'Shouting louder whenever a student raises their voice'],
      ['कक्षा की समस्याओं से भावात्मक रूप से पूरी तरह कट जाना', 'Becoming completely cold and indifferent to students'],
      ['व्यक्तिगत घर का तनाव छात्रों की कॉपियाँ फाड़कर निकालना', 'Tearing student notebooks due to domestic stress'],
    ],
    'डेनियल गोलमैन के अनुसार भावनात्मक बुद्धिमत्ता (आत्म-जागरूकता, आत्म-नियमन, समानुभूति, सामाजिक कौशल) शिक्षक को तनावपूर्ण कक्षा स्थितियों को परिपक्वता से संभालने की क्षमता देती है।',
    'Following Daniel Goleman’s model, emotional intelligence (self-regulation, empathy, social skill) helps teachers manage tense classroom situations constructively.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“कदाचार निवारण” (Anti-Bullying) के संदर्भ में शिक्षक की भूमिका क्या है?',
    'What is the teacher’s role in preventing school bullying?',
    ['धमकाने/रैगिंग की घटनाओं के प्रति शून्य सहिष्णुता रखना, पीड़ित का संरक्षण करना और आक्रामक छात्र को परामर्श देना', 'Enforcing zero tolerance toward bullying, protecting victims, and counseling perpetrators'],
    [
      ['इसे बड़े छात्रों का स्वाभाविक अधिकार मानकर अनदेखा करना', 'Ignoring it as a normal rite of passage among older students'],
      ['पीड़ित छात्र को ही घर पर रहने की सलाह देना', 'Advising the victim to stay home'],
      ['बदला लेने के लिए पीड़ित छात्र को भी आक्रामक होने को कहना', 'Encouraging the victim to retaliate violently'],
    ],
    'धमकाना (Bullying) बच्चे के मानसिक स्वास्थ्य और विद्यालय छोड़ने (Dropout) का बड़ा कारण बनता है; अतः शून्य-सहिष्णुता नीति और संवेदनशील हस्तक्षेप अनिवार्य है।',
    'Bullying severely harms mental health and increases dropout rates; teachers must uphold zero tolerance while supporting victims and reforming bullies.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'RTE अधिनियम, 2009 के अनुसार प्राथमिक स्तर (कक्षा 1-5) में एक शैक्षणिक वर्ष में न्यूनतम कितने कार्य-दिवस और शिक्षण घंटे निर्धारित हैं?',
    'Under the RTE Act, 2009, what are the minimum working days and instructional hours per academic year for Classes 1–5?',
    ['200 कार्य-दिवस तथा 800 शिक्षण घंटे', '200 working days and 800 instructional hours'],
    [
      ['220 कार्य-दिवस तथा 1000 शिक्षण घंटे', '220 working days and 1000 instructional hours'],
      ['180 कार्य-दिवस तथा 600 शिक्षण घंटे', '180 working days and 600 instructional hours'],
      ['250 कार्य-दिवस तथा 1200 शिक्षण घंटे', '250 working days and 1200 instructional hours'],
    ],
    'RTE अधिनियम की अनुसूची के अनुसार कक्षा 1-5 के लिए न्यूनतम 200 कार्य-दिवस (800 घंटे) तथा कक्षा 6-8 के लिए 220 कार्य-दिवस (1000 घंटे) अनिवार्य हैं, जिनकी पूर्ति शिक्षक का व्यावसायिक कर्तव्य है।',
    'The RTE Schedule mandates at least 200 working days (800 instructional hours) for Classes 1–5, and 220 working days (1000 hours) for Classes 6–8.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'RTE अधिनियम, 2009 के अनुसार एक शिक्षक के लिए प्रति सप्ताह न्यूनतम कितने कार्य घंटे (तैयारी के घंटों सहित) निर्धारित किए गए हैं?',
    'Under the RTE Act, 2009, what is the minimum number of working hours per week (including preparation hours) prescribed for a teacher?',
    ['प्रति सप्ताह न्यूनतम 45 शिक्षण एवं तैयारी के घंटे', 'Minimum 45 hours per week including preparation hours'],
    [
      ['प्रति सप्ताह 25 घंटे', '25 hours per week'],
      ['प्रति सप्ताह 60 घंटे', '60 hours per week'],
      ['प्रति सप्ताह 30 घंटे', '30 hours per week'],
    ],
    'RTE अधिनियम 2009 की अनुसूची में शिक्षक के लिए प्रति सप्ताह शिक्षण और पाठ-तैयारी (Preparation) के घंटों को मिलाकर न्यूनतम 45 कार्य-घंटे निर्धारित हैं।',
    'The RTE Act, 2009 Schedule prescribes a minimum of 45 working hours per week for a teacher, inclusive of classroom teaching and preparation hours.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“मूक पाठ्यक्रम” (Hidden Curriculum) से शिक्षक के किस आचरण का सीधा संबंध है?',
    'How is the "Hidden Curriculum" directly linked to a teacher’s conduct?',
    ['शिक्षक की समयनिष्ठा, निष्पक्षता, बोलचाल और व्यवहार से छात्र अनौपचारिक रूप से मूल्य सीखते हैं', 'Students informally absorb values from the teacher’s punctuality, fairness, tone, and everyday conduct'],
    [
      ['यह सरकार द्वारा गुप्त रखी गई प्रश्न-बैंक पुस्तिका है', 'It is a secret government question bank'],
      ['यह केवल अंतिम परीक्षा का अघोषित पाठ्यक्रम है', 'It is an unannounced syllabus for final exams'],
      ['इसका कक्षा के वातावरण से कोई लेना-देना नहीं है', 'It has nothing to do with classroom culture'],
    ],
    'फिलिप जैक्सन द्वारा वर्णित Hidden Curriculum वे अनकहे मूल्य और दृष्टिकोण हैं जिन्हें छात्र शिक्षक के दैनिक आचरण, विद्यालयी संस्कृति और संबंधों से स्वतः ग्रहण करते हैं।',
    'Described by Philip Jackson, the hidden curriculum consists of unspoken norms and values learners internalize from a teacher’s daily conduct and classroom climate.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से किस स्थिति में शिक्षक द्वारा “सही व्यावसायिक निर्णय” लिया गया माना जाएगा?',
    'In which scenario has a teacher made a sound professional decision?',
    ['पाठ्यक्रम पूरा करने के नाम पर तेज दौड़ने के बजाय बुनियादी अवधारणाओं की स्पष्टता सुनिश्चित करना', 'Prioritizing foundational conceptual clarity over rushing merely to finish chapters'],
    [
      ['नोट्स न लिखवाकर केवल गाइड से रटने को कहना', 'Asking students to cram from guidebooks without explanation'],
      ['कमजोर छात्रों को पिछली बेंच पर बैठाकर अनदेखा करना', 'Ignoring slow learners seated at the back'],
      ['अभिभावकों के दबाव में सभी को समान उच्च ग्रेड देना', 'Giving everyone top grades under parental pressure'],
    ],
    'गुणवत्तापूर्ण शिक्षण का अर्थ विषय की सतही समाप्ति नहीं, बल्कि अवधारणात्मक समझ (Conceptual Mastery) सुनिश्चित करना है।',
    'Quality pedagogy prioritizes deep conceptual mastery over superficial syllabus rushing or grade inflation.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यवसाय के प्रति निष्ठा” का अर्थ क्या नहीं है?',
    'What is NOT implied by "Commitment to the Profession"?',
    ['अयोग्य व्यक्तियों को बिना योग्यता शिक्षण पद दिलाने की सिफारिश करना', 'Recommending unqualified individuals for teaching positions'],
    [
      ['नवाचारी शिक्षण विधियों का प्रयोग करना', 'Experimenting with innovative pedagogies'],
      ['शिक्षक संगोष्ठियों और कार्यशालाओं में भाग लेना', 'Attending academic seminars and workshops'],
      ['व्यावसायिक आचार संहिता का स्वैच्छिक पालन करना', 'Voluntarily upholding the ethical code'],
    ],
    'शिक्षण व्यवसाय की गुणवत्ता तभी बनी रहती है जब योग्यता, प्रशिक्षण और नैतिक मानकों से समझौता न किया जाए।',
    'Commitment to the profession requires safeguarding merit and quality standards rather than endorsing unqualified appointments.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'कक्षा में अनुचित भाषा (Abusive Language) का प्रयोग करने वाले छात्र के प्रति शिक्षक को कैसा व्यवहार करना चाहिए?',
    'How should a teacher respond to a student using abusive language in class?',
    ['स्वयं संयमित रहते हुए व्यवहार की अस्वीकार्यता स्पष्ट करना और एकांत में कारण समझकर सुधार हेतु मार्गदर्शन करना', 'Stay calm, clearly state the behavior is unacceptable, and privately counsel the student on root causes'],
    [
      ['स्वयं भी उसी प्रकार की अपमानजनक भाषा में उत्तर देना', 'Respond using similar abusive language'],
      ['पूरे विद्यालय में छात्र का बहिष्कार घोषित करना', 'Publicly ostracize the student across the school'],
      ['तत्काल शारीरिक दंड देकर चुप कराना', 'Silence the student with corporal punishment'],
    ],
    'शिक्षक स्वयं के संयम से आदर्श प्रस्तुत करता है; आक्रामक भाषा का उत्तर आक्रामकता से देने के बजाय शांत सीमा-निर्धारण और परामर्श अधिक प्रभावी होता है।',
    'Modeling emotional restraint is vital; calm boundary-setting followed by private counseling corrects language habits far better than retaliation.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'अभिभावकों के प्रति शिक्षक के नैतिक दायित्व में निम्नलिखित में से क्या शामिल है?',
    'Which of the following is part of a teacher’s ethical obligation toward parents?',
    ['बालक की वास्तविक स्थिति से समय-समय पर अवगत कराना और अभिभावकों की आर्थिक-सामाजिक स्थिति का सम्मान करना', 'Keeping parents honestly informed about learner progress while respecting their socio-economic background'],
    [
      ['अनपढ़ या गरीब अभिभावकों से तिरस्कारपूर्ण व्यवहार करना', 'Treating illiterate or poor parents condescendingly'],
      ['अभिभावकों से व्यक्तिगत घरेलू कार्य कराना', 'Asking parents to do personal household chores'],
      ['केवल शुल्क वसूली के समय ही अभिभावकों को बुलाना', 'Calling parents solely for fee collection'],
    ],
    'NCTE संहिता के अनुसार शिक्षक प्रत्येक अभिभावक—चाहे उसकी आर्थिक या शैक्षिक स्थिति कुछ भी हो—का समान सम्मान करे और बच्चे के हित में साझेदारी निभाए।',
    'The NCTE Code obligates teachers to respect all parents regardless of socio-economic or educational status and partner with them in the child’s best interest.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“निष्पक्षता” (Fairness) और “समानता” (Sameness) में क्या अंतर है जिसे एक संवेदनशील शिक्षक समझता है?',
    'What distinction between "Fairness/Equity" and "Sameness" does a sensitive teacher recognize?',
    ['निष्पक्षता प्रत्येक छात्र को उसकी आवश्यकता के अनुरूप सहायता देती है, जबकि समानता बिना आवश्यकता देखे एक ही मानदंड थोपती है', 'Equity gives each learner support matched to need, whereas sameness treats everyone identically regardless of need'],
    [
      ['निष्पक्षता केवल मेधावी छात्रों के लिए होती है', 'Fairness applies only to gifted learners'],
      ['समानता का अर्थ सभी को 100 अंक देना है', 'Sameness means awarding 100 marks to all'],
      ['दोनों में कोई व्यावहारिक अंतर नहीं है', 'There is no practical difference between them'],
    ],
    'जैसे दृष्टिबाधित छात्र को बड़े अक्षरों वाली पुस्तक (Braille/Large Print) देना समान व्यवहार नहीं बल्कि समता/निष्पक्षता है, क्योंकि इससे उसे सीखने का समान अवसर मिलता है।',
    'Providing large-print books to a visually impaired learner is not "sameness" but equity/fairness, ensuring equal access to learning opportunities.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब किसी विद्यालय में नई शिक्षा तकनीकी या डिजिटल पोर्टल लागू किया जाता है, तो शिक्षक का व्यावसायिक दृष्टिकोण क्या होना चाहिए?',
    'When a new educational technology or digital portal is introduced in school, what should be a teacher’s professional attitude?',
    ['सकारात्मक ढंग से सीखकर उसे शिक्षण एवं अभिलेख प्रबंधन की गुणवत्ता बढ़ाने हेतु अपनाना', 'Willingly learn and adopt it to enhance instruction and record accuracy'],
    [
      ['बिना कारण नए परिवर्तन का विरोध कर पुराने कागजों पर अड़े रहना', 'Resist change without reason and cling to outdated habits'],
      ['अपना लॉगिन पासवर्ड छात्रों को दे देना ताकि वे काम करें', 'Share login credentials with students to offload work'],
      ['प्रणाली में जानबूझकर गलत डेटा दर्ज करना', 'Intentionally enter inaccurate data'],
    ],
    'परिवर्तनशीलता और तकनीकी अनुकूलनशीलता आधुनिक शिक्षक की अनिवार्य योग्यता और व्यावसायिक आचरण का भाग हैं।',
    'Openness to innovation and technological adaptability are essential professional competencies for modern educators.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“बौद्धिक विनम्रता” (Intellectual Humility) शिक्षक के व्यवहार में कैसे दिखती है?',
    'How does "Intellectual Humility" manifest in a teacher’s behavior?',
    ['अपनी भूल स्वीकार करने, छात्रों के रचनात्मक विचारों को महत्व देने और नए दृष्टिकोण सीखने के लिए तत्पर रहने में', 'In admitting mistakes, valuing students’ creative ideas, and staying open to learning new perspectives'],
    [
      ['स्वयं को प्रत्येक विषय का अंतिम विशेषज्ञ घोषित करने में', 'In declaring oneself the infallible authority on every topic'],
      ['अन्य शिक्षकों के विचारों को सदैव तुच्छ बताने में', 'In belittling peers’ ideas'],
      ['छात्रों द्वारा दिए गए वैकल्पिक सही उत्तर को काट देने में', 'In marking valid alternative student solutions wrong'],
    ],
    'बौद्धिक विनम्रता कक्षा में संवाद की संस्कृति पैदा करती है, जहाँ छात्र बिना भय के तर्क और नवाचार प्रस्तुत कर सकते हैं।',
    'Intellectual humility nurtures an open classroom dialogue where students feel safe proposing alternative ideas and reasoning.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'विद्यालय में “सतत आत्म-मूल्यांकन” (Self-Evaluation) शिक्षक के लिए क्यों उपयोगी है?',
    'Why is "Continuous Self-Evaluation" useful for a teacher?',
    ['यह शिक्षण की कमियों को पहचानकर व्यावसायिक गुणवत्ता में निरंतर सुधार लाता है', 'It helps identify instructional gaps and continuously improve professional effectiveness'],
    [
      ['यह दूसरों पर दोष मढ़ने का आसान तरीका है', 'It is an easy way to shift blame onto others'],
      ['इससे छात्रों की परीक्षा लेने की आवश्यकता समाप्त हो जाती है', 'It eliminates the need to assess students'],
      ['यह केवल पदोन्नति के लिए झूठा विवरण भरने का साधन है', 'It is merely a formality for inflating promotion dossiers'],
    ],
    'आत्म-मूल्यांकन (जैसे शिक्षण डायरी, पाठ-प्रतिबिंब) शिक्षक को बाहरी निरीक्षण से पहले ही स्वयं सुधार करने की प्रेरणा देता है।',
    'Self-evaluation tools like reflective journals empower teachers to detect instructional blind spots and improve proactively.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा कार्य शिक्षक के “व्यावसायिक आचरण” के अनुरूप है जब दो छात्रों के बीच झगड़ा हो जाए?',
    'When a conflict erupts between two students, which teacher action aligns with professional conduct?',
    ['दोनों पक्षों की बात निष्पक्षता से सुनकर शांत मध्यस्थता करना और सकारात्मक समाधान खोजना', 'Listening impartially to both sides, mediating calmly, and guiding toward a constructive resolution'],
    [
      ['बिना पूछे कमजोर छात्र को दोषी ठहरा देना', 'Blaming the less assertive student without inquiry'],
      ['दोनों छात्रों को मुर्गा बनाकर खड़ा कर देना', 'Administering humiliating physical punishment to both'],
      ['जाति या पारिवारिक स्थिति देखकर एक का पक्ष लेना', 'Taking sides based on social or family background'],
    ],
    'निष्पक्ष सुनवाई (Audi Alteram Partem) और अहिंसक संघर्ष-समाधान (Conflict Resolution) विद्यालय में न्याय की संस्कृति विकसित करते हैं।',
    'Hearing both sides impartially and guiding peaceful conflict resolution models fairness and democratic justice in school.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'शिक्षक द्वारा “व्यक्तिगत डायरी / शिक्षक डायरी” (Teacher’s Diary) नियमित रखने का मुख्य व्यावसायिक लाभ क्या है?',
    'What is the main professional benefit of maintaining a regular "Teacher’s Diary"?',
    ['पाठ-योजना, प्रगति, कठिनाइयों और आगामी सुधारों का व्यवस्थित अभिलेखन एवं चिंतन', 'Systematic planning, tracking progress, noting learning gaps, and reflecting on next steps'],
    [
      ['निरीक्षण अधिकारी को दिखाने हेतु काल्पनिक प्रविष्टियाँ बनाना', 'Creating fabricated entries solely for inspectors'],
      ['अन्य शिक्षकों की शिकायतें लिखकर रखना', 'Recording complaints against colleagues'],
      ['केवल अवकाश के दिनों की गिनती करना', 'Counting only upcoming holidays'],
    ],
    'शिक्षक डायरी दैनिक शिक्षण को उद्देश्यपूर्ण बनाती है और यह ट्रैक करने में मदद करती है कि किन छात्रों को अतिरिक्त सहायता की आवश्यकता है।',
    'A well-kept teacher’s diary keeps instruction purposeful and helps track lesson pacing and students needing targeted follow-up.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शैक्षणिक नैतिकता” में “वस्तुनिष्ठ बनाम व्यक्तिनिष्ठ” (Objective vs Subjective) निर्णय का उदाहरण क्या है?',
    'In educational ethics, what illustrates an "Objective" decision as opposed to a "Subjective" one?',
    ['अंक-योजना (Marking Scheme) के अनुसार अंक देना न कि व्यक्तिगत पसंद-नापसंद के आधार पर', 'Awarding marks strictly per the marking scheme rather than personal likes or dislikes'],
    [
      ['पसंदीदा छात्र की अशुद्धियों को अनदेखा कर देना', 'Overlooking errors of a favorite student'],
      ['आवाज ऊँची होने के कारण छात्र को कम अंक देना', 'Lowering marks because of a student’s loud voice'],
      ['अभिभावक के पद के आधार पर कक्षा मॉनिटर चुनना', 'Selecting a monitor based on parental status'],
    ],
    'वस्तुनिष्ठता में प्रमाण व मानक सर्वोपरि होते हैं; व्यक्तिनिष्ठ पूर्वाग्रहों को निर्णयों से दूर रखना व्यावसायिक आचरण की कसौटी है।',
    'Objectivity relies on verifiable evidence and pre-set criteria, eliminating personal biases and subjective preferences.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक प्राथमिक विद्यालय का शिक्षक प्रतिदिन कक्षा प्रारंभ होने से पूर्व 10 मिनट प्रार्थना सभा व नैतिक संवाद आयोजित करता है, जिसमें छात्र बारी-बारी से नेतृत्व करते हैं। यह किसका विकास करता है?',
    'A primary teacher holds a 10-minute morning assembly with rotating student leadership before classes. What does this cultivate?',
    ['आत्मविश्वास, सामूहिकता, समयपालन और लोकतांत्रिक मूल्य', 'Self-confidence, teamwork, punctuality, and democratic values'],
    [
      ['रटंत विद्या और परीक्षा का भय', 'Rote learning and exam anxiety'],
      ['व्यक्तिगत प्रतिस्पर्धा और ईर्ष्या', 'Selfish competition and jealousy'],
      ['केवल धार्मिक कट्टरता', 'Narrow sectarianism'],
    ],
    'सबको बारी-बारी से अवसर देने वाली प्रार्थना सभा व मॉर्निंग सर्कल टाइम बच्चों में अभिव्यक्ति, नेतृत्व और विद्यालय से जुड़ाव विकसित करती है।',
    'Rotating leadership in morning assembly builds voice, confidence, punctuality, and a shared sense of belonging.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि कोई शिक्षक समुदाय में फैले अंधविश्वास (जैसे किसी बीमारी के प्रति गलत धारणा) के विरुद्ध वैज्ञानिक दृष्टिकोण को सरल भाषा में स्पष्ट करता है, तो वह संविधान के किस मौलिक कर्तव्य को पुष्ट करता है?',
    'When a teacher gently counters local superstitions by fostering scientific temper among students and community, which Constitutional Fundamental Duty is upheld?',
    ['वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना का विकास (अनुच्छेद 51A-h)', 'Developing scientific temper, humanism, and spirit of inquiry and reform (Article 51A(h))'],
    [
      ['केवल कर भुगतान का कर्तव्य', 'Duty to pay taxes only'],
      ['युद्ध सेवा का कर्तव्य', 'Duty of military conscription'],
      ['संपत्ति संचय का अधिकार', 'Right to hoard property'],
    ],
    'संविधान का अनुच्छेद 51A(h) वैज्ञानिक दृष्टिकोण और सुधार की भावना विकसित करने पर बल देता है, और शिक्षक समाज में तार्किक चेतना का प्रमुख संवाहक होता है।',
    'Article 51A(h) calls on citizens to develop scientific temper, humanism, and the spirit of inquiry; educators play a crucial role in nurturing rational thinking.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'निम्नलिखित में से किस कार्य से शिक्षक की “सामाजिक विश्वसनीयता” (Social Credibility) को सर्वाधिक क्षति पहुँचती है?',
    'Which behavior most severely damages a teacher’s "Social Credibility"?',
    ['कथनी और करनी में अंतर होना—जैसे छात्रों को ईमानदारी सिखाकर स्वयं नकल कराना', 'Hypocrisy between words and deeds—such as preaching honesty while facilitating exam cheating'],
    [
      ['कठिन प्रश्नों को दो बार समझाना', 'Explaining difficult concepts twice'],
      ['अभिभावकों को बालक की वास्तविक कमी विनम्रता से बताना', 'Politely sharing genuine learning gaps with parents'],
      ['निर्धारित समय पर विद्यालय पहुँचना', 'Arriving at school on time'],
    ],
    'शिक्षक का नैतिक प्रभाव उसकी विश्वसनीयता (Walk the Talk) पर टिका होता है; दोहरा मापदंड छात्रों और समाज का विश्वास तोड़ देता है।',
    'An educator’s moral authority depends on consistency between words and actions; hypocrisy destroys trust among students and society.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“बाल-मित्रवत विद्यालय” (Child-Friendly School) की संकल्पना में शिक्षक का आचरण कैसा होता है?',
    'In a "Child-Friendly School," what characterizes a teacher’s conduct?',
    ['भयमुक्त, स्नेहपूर्ण, समावेशी एवं प्रत्येक बच्चे के विचार को सम्मान देने वाला', 'Fear-free, affectionate, inclusive, and respectful of every child’s voice'],
    [
      ['केवल अनुशासन के नाम पर मौन थोपने वाला', 'Enforcing rigid silence in the name of order'],
      ['केवल परीक्षा अंकों से बच्चे का मूल्य तय करने वाला', 'Measuring a child’s worth purely by test marks'],
      ['कठोर नियमों से बच्चों की खेलकूद रोकने वाला', 'Curbing play through strict prohibitions'],
    ],
    'यूनिसेफ व RTE की बाल-मित्रवत विद्यालय अवधारणा में शारीरिक व मानसिक सुरक्षा, आनंददायी अधिगम और बच्चे की गरिमा केंद्र में होती है।',
    'The Child-Friendly School framework centers on physical and emotional safety, joyful participation, inclusivity, and respect for child rights.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'कक्षा में किसी विद्यार्थी द्वारा अनजाने में महँगी प्रयोगशाला सामग्री टूट जाने पर शिक्षक की सबसे परिपक्व प्रतिक्रिया क्या होनी चाहिए?',
    'If a student accidentally breaks an expensive piece of lab equipment, what is the most mature teacher response?',
    ['छात्र की सुरक्षा सुनिश्चित कर कारण समझना, भविष्य की सावधानी सिखाना और दंडित करने से बचना', 'Ensure the student’s safety first, understand how it happened, reinforce care, and avoid harsh punishment'],
    [
      ['छात्र से तत्काल बाजार मूल्य वसूलने की धमकी देना', 'Threaten immediate cash recovery from the student'],
      ['पूरी कक्षा के सामने छात्र को अपमानित करना', 'Humiliate the student before the whole class'],
      ['प्रयोगशाला हमेशा के लिए बंद कर देना', 'Lock up the lab permanently'],
    ],
    'अनजाने में हुई दुर्घटना पर क्रोध या भय उत्पन्न करने से बच्चे प्रयोगात्मक गतिविधियों से डरने लगते हैं; सुरक्षा और सीखने पर ध्यान देना अधिक व्यावसायिक है।',
    'Punishing honest accidents discourages hands-on exploration; ensuring safety and turning the incident into a lesson on careful handling is more professional.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“सतत अधिगमकर्ता” (Lifelong Learner) बनने के लिए शिक्षक किस मंच का प्रभावी उपयोग कर सकता है?',
    'Which government digital platform can Indian school teachers effectively use for continuous professional learning?',
    ['दीक्षा (DIKSHA) पोर्टल', 'DIKSHA Portal'],
    [
      ['ई-कॉमर्स शॉपिंग साइट्स', 'E-commerce shopping sites'],
      ['केवल मनोरंजन स्ट्रीमिंग ऐप्स', 'Entertainment streaming apps only'],
      ['पासपोर्ट सेवा पोर्टल', 'Passport Seva Portal'],
    ],
    'दीक्षा (Digital Infrastructure for Knowledge Sharing) NCERT/शिक्षा मंत्रालय का राष्ट्रीय मंच है जिस पर शिक्षक ई-कंटेंट, प्रशिक्षण कोर्स (जैसे NISHTHA) और शिक्षण संसाधन प्राप्त करते हैं।',
    'DIKSHA is the national digital platform by NCERT/Ministry of Education offering teacher training modules (such as NISHTHA) and e-resources.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपने विद्यालय की कमियों की चर्चा चाय की दुकान पर लोगों के बीच उपहास के रूप में करता है, परंतु विद्यालय की बैठक में कभी सुधार का सुझाव नहीं देता। यह किसकी कमी है?',
    'A teacher mocks school shortcomings at local tea stalls instead of proposing constructive solutions in staff meetings. What is lacking?',
    ['संस्थागत निष्ठा एवं रचनात्मक व्यावसायिक संवाद', 'Institutional loyalty and constructive professional communication'],
    [
      ['व्यक्तिगत अभिव्यक्ति की स्वतंत्रता', 'Freedom of personal expression'],
      ['उच्च शैक्षणिक योग्यता', 'Higher academic degrees'],
      ['कंप्यूटर साक्षरता', 'Computer literacy'],
    ],
    'व्यावसायिक आचरण यह अपेक्षा करता है कि संस्था की समस्याओं को सार्वजनिक उपहास का विषय बनाने के बजाय आंतरिक मंचों पर रचनात्मक समाधान के साथ उठाया जाए।',
    'Professional ethics requires raising institutional concerns constructively through internal forums rather than gossiping or ridiculing the school publicly.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'किस परिस्थिति में शिक्षक को “सक्रिय श्रवण” (Active Listening) का अभ्यास विशेष रूप से करना चाहिए?',
    'In which situation must a teacher especially practice "Active Listening"?',
    ['जब कोई छात्र या अभिभावक अपनी शैक्षिक या भावनात्मक कठिनाई साझा कर रहा हो', 'When a student or parent is sharing an academic or emotional difficulty'],
    [
      ['जब शिक्षक स्वयं व्याख्यान दे रहा हो', 'While the teacher is delivering a monologue'],
      ['केवल जब उच्चाधिकारी आदेश दे रहे हों', 'Only when superior officers issue orders'],
      ['परीक्षा हॉल में पूर्ण मौन के दौरान', 'During silent exam invigilation'],
    ],
    'सक्रिय श्रवण में बिना बीच में टोके ध्यानपूर्वक सुनना, भाव-भंगिमा से समझ दर्शाना और मुख्य बिंदु की पुष्टि करना शामिल है, जिससे विश्वास बनता है।',
    'Active listening involves attentive, non-judgmental focus without interrupting, building trust when learners or parents voice concerns.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक आचरण एवं नैतिक संहिता” का अंतिम लक्ष्य क्या है?',
    'What is the ultimate goal of a Code of Professional Conduct and Ethics for teachers?',
    ['प्रत्येक शिक्षार्थी का समग्र कल्याण, गुणवत्तापूर्ण शिक्षा तथा समाज में शिक्षण पेशे की विश्वसनीयता', 'Holistic well-being of every learner, quality education, and public trust in the teaching profession'],
    [
      ['केवल शिक्षकों को प्रशासनिक दंड से बचाना', 'Merely shielding teachers from administrative scrutiny'],
      ['विद्यालय में केवल औपचारिक कागजी कार्यवाही बढ़ाना', 'Increasing bureaucratic paperwork in schools'],
      ['छात्रों और अभिभावकों के बीच दूरी बढ़ाना', 'Creating distance between students and parents'],
    ],
    'नैतिक संहिता कोई दंडात्मक जंजीर नहीं बल्कि मार्गदर्शक प्रकाश है, जिसका अंतिम उद्देश्य बच्चे का सर्वोत्तम हित (Best Interest of the Child) और शिक्षा की गरिमा है।',
    'An ethical code serves as a moral compass whose ultimate purpose is the best interest of every child, high-quality learning, and societal trust in educators.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'जब किसी छात्र को विशेष आवश्यकता (जैसे डिस्लेक्सिया) के कारण पढ़ने-लिखने में कठिनाई होती है, तो शिक्षक का नैतिक व्यवहार क्या होगा?',
    'When a student struggles with reading/writing due to a learning disability like dyslexia, what is the ethical teacher response?',
    ['सहानुभूति रखते हुए बहु-संवेदी शिक्षण, अतिरिक्त समय व मौखिक आकलन जैसे सहयोग देना', 'Offer empathy along with multisensory instruction, extra time, and oral assessment accommodations'],
    [
      ['उसे आलसी और कामचोर घोषित कर दंडित करना', 'Label the child lazy and punish them'],
      ['उसकी उत्तर-पुस्तिका की अशुद्धियाँ बोर्ड पर लिखकर हँसी उड़ाना', 'Display their spelling errors on the board for laughs'],
      ['अन्य छात्रों से तुलना कर हतोत्साहित करना', 'Discourage them by comparing them with peers'],
    ],
    'डिस्लेक्सिया एक तंत्रिका-विकासात्मक भिन्नता है, आलस्य नहीं; शिक्षक को निदान व अनुकूलन द्वारा छात्र की क्षमता को निखारना चाहिए।',
    'Dyslexia is a specific learning difference, not laziness; ethical teaching adapts instruction through multisensory methods and fair assessment accommodations.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'शिक्षण में “अधिगम-अंतराल” (Learning Gaps) को पाटने के लिए शिक्षक का कर्तव्य क्या है?',
    'What is a teacher’s professional duty in bridging "Learning Gaps"?',
    ['निदानात्मक परीक्षण (Diagnostic Testing) द्वारा कमियों की पहचान कर लक्षित उपचारात्मक शिक्षण देना', 'Identify specific gaps through diagnostic assessment and deliver targeted remedial teaching'],
    [
      ['पिछली कक्षा के शिक्षक को दोष देकर आगे बढ़ जाना', 'Blame the previous grade’s teacher and move on'],
      ['सभी छात्रों को एक ही कठिनाई स्तर का कार्य देना', 'Give identical difficulty tasks ignoring readiness levels'],
      ['कमजोर छात्रों को अगली कक्षा में रोकने की धमकी देना', 'Threaten weak learners with detention'],
    ],
    'दोषारोपण के बजाय निदानात्मक आकलन (Diagnostic Assessment) और उपचारात्मक शिक्षण (Remedial Teaching) व्यावसायिक दायित्व का सार्थक निर्वहन है।',
    'Rather than blaming prior grades, diagnosing specific misconceptions and offering targeted remediation exemplifies professional accountability.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी छात्र के माता-पिता शिक्षा के प्रति उदासीन हैं और बच्चे को घर पर पढ़ने का माहौल नहीं मिल रहा, तो शिक्षक को क्या करना चाहिए?',
    'If a student’s parents are indifferent to schooling and the home lacks a study environment, what should the teacher do?',
    ['विद्यालय में सहायक वातावरण बनाना, गृह-संपर्क कर अभिभावकों को सरल तरीकों से प्रेरित करना', 'Create a supportive school environment and reach out tactfully to motivate parents with simple ways to help'],
    [
      ['बच्चे पर भी ध्यान देना बंद कर देना', 'Stop paying attention to the child too'],
      ['अभिभावकों को अपमानित कर विद्यालय से नाम काटने की धमकी देना', 'Insult parents and threaten to strike off the child’s name'],
      ['बच्चे को अत्यधिक गृहकार्य का बोझ देना', 'Overburden the child with heavy homework'],
    ],
    'प्रथम पीढ़ी के शिक्षार्थियों के लिए शिक्षक और विद्यालय ही मुख्य संबल होते हैं; सम्मानजनक गृह-संपर्क (Home Visit / Outreach) सामुदायिक जुड़ाव मजबूत करता है।',
    'For first-generation learners, the teacher is the primary academic anchor; respectful outreach and school-based support compensate for home constraints.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“सतत व्यावसायिक विकास” (CPD) के अंतर्गत “पीयर ऑब्जर्वेशन” (Peer Observation) का क्या उद्देश्य होता है?',
    'Within Continuous Professional Development, what is the purpose of "Peer Observation"?',
    ['सहकर्मी शिक्षक के शिक्षण का रचनात्मक अवलोकन कर परस्पर सीखना और शिक्षण कला निखारना', 'Conducting constructive observation of a colleague’s class for mutual learning and pedagogical growth'],
    [
      ['सहकर्मी की कमियाँ ढूँढ़कर उच्चाधिकारियों को शिकायत करना', 'Hunting for faults to report the colleague to authorities'],
      ['कक्षा में बैठकर अपना निजी कार्य निपटाना', 'Completing personal work while sitting in someone’s class'],
      ['सहकर्मी के सामने छात्रों को भड़काना', 'Undermining the colleague before students'],
    ],
    'गैर-मूल्यांकनकारी सहकर्मी अवलोकन (Non-evaluative Peer Observation) शिक्षकों में खुला संवाद और श्रेष्ठ विधियों का आदान-प्रदान बढ़ाता है।',
    'Non-judgmental peer observation fosters collegial trust and mutual refinement of classroom strategies.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'शिक्षक की “सत्यनिष्ठा” (Integrity) को सबसे अधिक किस बात से परखा जाता है?',
    'How is a teacher’s "Integrity" most truly tested?',
    ['जब कोई देख न रहा हो (जैसे बिना निरीक्षण के दिन) तब भी पूर्ण निष्ठा और ईमानदारी से पढ़ाना', 'Teaching with full dedication and honesty even when nobody is watching (e.g., on non-inspection days)'],
    [
      ['केवल अधिकारी के आने पर आदर्श पाठ प्रस्तुत करना', 'Delivering a model lesson only during official inspections'],
      ['केवल वेतन के दिन समय पर पहुँचना', 'Arriving on time only on payday'],
      ['रजिस्टर को आकर्षक रंगों से सजाना', 'Decorating registers with colorful inks'],
    ],
    'सी.एस. लुईस के प्रसिद्ध कथन के अनुसार सत्यनिष्ठा वही है जो हम तब करते हैं जब कोई नहीं देख रहा होता—अर्थात् आंतरिक नैतिक अनुशासन से कर्तव्य पालन।',
    'True integrity is doing the right thing when no supervisor is watching—maintaining consistent instructional quality through internal moral commitment.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक छात्र कक्षा में प्रश्न पूछता है जो विषय से थोड़ा हटकर किंतु जिज्ञासापूर्ण है। शिक्षक का उचित आचरण क्या होगा?',
    'A student asks a curious question that is slightly tangential to the ongoing topic. What is the most appropriate teacher conduct?',
    ['जिज्ञासा की प्रशंसा करते हुए संक्षेप में उत्तर देना या कक्षा के अंत में उस पर चर्चा का समय देना', 'Praise the curiosity, give a brief response, or schedule a dedicated moment after the lesson to discuss it'],
    [
      ['बेकार के प्रश्न पूछने के लिए डांट देना', 'Scold the student for asking irrelevant questions'],
      ['प्रश्न को पूरी तरह अनसुना कर देना', 'Completely ignore the question'],
      ['छात्र को कक्षा से बाहर भेज देना', 'Send the student out of the room'],
    ],
    'जिज्ञासा सीखने का इंजन है; समय-प्रबंधन बनाए रखते हुए छात्र के प्रश्न को सम्मान देना उसके खोजी स्वभाव को जीवित रखता है।',
    'Curiosity drives deep learning; acknowledging the question respectfully while managing lesson pacing keeps inquiry alive.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शैक्षणिक ईमानदारी और मूल्यांकन” के संदर्भ में किस व्यवहार से बचना चाहिए?',
    'Regarding assessment ethics, which practice must a teacher strictly avoid?',
    ['विद्यालय का उत्तीर्ण प्रतिशत ऊँचा दिखाने हेतु परीक्षा में नकल को बढ़ावा देना या अनुचित अंक बढ़ाना', 'Encouraging exam malpractice or inflating marks merely to showcase high pass percentages'],
    [
      ['परीक्षा से पहले पाठ्यक्रम का पुनरीक्षण कराना', 'Conducting thorough revision before exams'],
      ['मॉडल प्रश्नपत्रों का अभ्यास कराना', 'Practicing with sample papers'],
      ['मूल्यांकन के बाद सामान्य त्रुटियों पर कक्षा में चर्चा करना', 'Discussing common errors in class after grading'],
    ],
    'कृत्रिम रूप से उत्तीर्ण प्रतिशत बढ़ाने के लिए नकल या ग्रेड मुद्रास्फीति (Grade Inflation) छात्रों के भविष्य और शिक्षा व्यवस्था की विश्वसनीयता के साथ धोखा है।',
    'Facilitating cheating or artificially inflating grades to boost pass statistics deceives learners and undermines educational credibility.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब कोई शिक्षक नई कक्षा का प्रभार लेता है, तो प्रथम दिन उसका नैतिक और शैक्षणिक लक्ष्य क्या होना चाहिए?',
    'When taking charge of a new class on day one, what should be a teacher’s primary ethical and pedagogical aim?',
    ['सौहार्दपूर्ण परिचय, भयमुक्त विश्वास का निर्माण और छात्रों की पूर्व-अधिगम स्थिति समझना', 'Warm rapport-building, creating psychological safety, and gauging learners’ prior readiness'],
    [
      ['प्रथम दिन ही कठिन परीक्षा लेकर छात्रों को डराना', 'Intimidating students with a tough surprise test on day one'],
      ['अपनी कठोरता की कहानियाँ सुनाना', 'Boasting about strict punishments'],
      ['पहले ही दिन से बिना परिचय पाठ रटवाना शुरू करना', 'Starting rote textbook drills without introductions'],
    ],
    'मनोवैज्ञानिक सुरक्षा (Psychological Safety) और सकारात्मक संबंध शिक्षण की नींव रखते हैं, जिससे छात्र सहज होकर सीखते हैं।',
    'Establishing psychological safety, mutual respect, and understanding learners’ baseline readiness lays the foundation for effective learning.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“व्यावसायिक संवेदनशीलता” के अंतर्गत भाषा के चयन में शिक्षक को क्या सावधानी रखनी चाहिए?',
    'Under professional sensitivity, what care should a teacher take in choosing words?',
    ['जाति, लिंग, शारीरिक बनावट या अक्षमता पर आधारित किसी भी अपमानजनक मुहावरे या लेबल का प्रयोग न करना', 'Avoid any derogatory idioms or labels tied to caste, gender, appearance, or disability'],
    [
      ['केवल कठिन संस्कृतनिष्ठ शब्दों का ही प्रयोग करना', 'Using only archaic complex vocabulary'],
      ['हँसी के लिए छात्रों के शारीरिक रूप पर टिप्पणी करना', 'Commenting on students’ physical appearance for humor'],
      ['किसी एक भाषा को छोड़कर अन्य भाषाओं को हीन बताना', 'Describing other languages as inferior'],
    ],
    'शिक्षक की भाषा बच्चों के आत्म-बोध को गढ़ती है; समावेशी और सम्मानजनक शब्दावली सकारात्मक पहचान का निर्माण करती है।',
    'A teacher’s language shapes learners’ self-concept; inclusive, non-stigmatizing phrasing fosters dignity and belonging.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किस शिक्षण अभ्यास से “स्व-नियंत्रित अधिगम” (Self-Regulated Learning) और छात्र की नैतिक स्वायत्तता विकसित होती है?',
    'Which classroom practice nurtures "Self-Regulated Learning" and student ethical autonomy?',
    ['छात्रों को स्व-आकलन (Self-assessment), लक्ष्य-निर्धारण और समय-योजना सिखाना', 'Teaching students self-assessment, goal setting, and planning skills'],
    [
      ['हर मिनट का कार्य शिक्षक द्वारा नियंत्रित करना', 'Micromanaging every minute of student activity'],
      ['नकल रोकथाम के लिए केवल रटे हुए उत्तर स्वीकार करना', 'Accepting only memorized textbook answers'],
      ['छात्रों को कोई भी निर्णय लेने से रोकना', 'Preventing students from making any choices'],
    ],
    'स्व-आकलन और लक्ष्य-निर्धारण छात्रों को अपने सीखने का स्वामी बनाते हैं तथा उनमें आत्म-अनुशासन व ईमानदारी विकसित करते हैं।',
    'Guiding students in self-assessment and goal-setting develops ownership, self-discipline, and honest reflection.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'विद्यालय में किसी छात्र को संक्रामक रोग (जैसे चेचक या नेत्रश्लेष्मलाशोथ) होने पर शिक्षक का उचित आचरण क्या है?',
    'If a student shows symptoms of a contagious illness (e.g., chickenpox or conjunctivitis), what is the teacher’s responsible step?',
    ['छात्र के प्रति संवेदनशील रहते हुए अभिभावक को सूचित कर चिकित्सीय विश्राम व सुरक्षा सुनिश्चित करना', 'Handle sensitively, inform parents for medical care/rest, and protect the health of the class without stigma'],
    [
      ['अन्य छात्रों से कहकर उसे कक्षा से धक्का देकर निकालना', 'Ask other students to push the child out'],
      ['रोग को छिपाकर उसी बेंच पर अन्य बच्चों के साथ बैठाए रखना', 'Ignore it and keep the child crowded with others'],
      ['छात्र को हमेशा के लिए विद्यालय से निकाल देना', 'Permanently expel the student'],
    ],
    'छात्र के स्वास्थ्य व गरिमा की रक्षा करते हुए अभिभावक से समन्वय करना और कक्षा के अन्य बच्चों का संक्रमण से बचाव करना जिम्मेदार आचरण है।',
    'Coordinating gently with parents for medical rest protects both the sick child’s recovery and peers’ health without shaming.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शैक्षणिक ईमानदारी” के तहत किसी परियोजना कार्य (Project Work) में यदि छात्र इंटरनेट से सीधे कॉपी-पेस्ट कर लाता है, तो शिक्षक को क्या करना चाहिए?',
    'If a student submits a project copied verbatim from the internet, what should an ethical teacher do?',
    ['छात्र को साहित्यिक चोरी (Plagiarism) का अर्थ समझाकर अपने शब्दों में पुनः लिखने व स्रोत लिखने का मार्गदर्शन देना', 'Explain plagiarism constructively and guide the student to rewrite in their own words with source citations'],
    [
      ['सजावट सुंदर होने के कारण पूरे अंक दे देना', 'Award full marks because the printout looks neat'],
      ['तुरंत शून्य अंक देकर छात्र पर आपराधिक मामला दर्ज कराना', 'Give zero and threaten criminal prosecution'],
      ['बिना पढ़े केवल हस्ताक्षर कर देना', 'Sign off without reading the project'],
    ],
    'स्कूली स्तर पर साहित्यिक चोरी दंड से अधिक शिक्षण का अवसर है; शिक्षक को उद्धरण (Citation) और मौलिक अभिव्यक्ति सिखानी चाहिए।',
    'At the school level, verbatim copying is a teachable moment to instill paraphrasing skills, citation habits, and academic honesty.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“व्यावसायिक आचरण” में “प्रतिक्रियात्मक” (Reactive) की तुलना में “सक्रिय/पूर्वोपायी” (Proactive) शिक्षक की पहचान क्या है?',
    'In professional conduct, how is a "Proactive" teacher distinguished from a merely "Reactive" teacher?',
    ['समस्या विकराल होने की प्रतीक्षा करने के बजाय संभावित अधिगम व अनुशासन बाधाओं का पूर्वानुमान लगाकर योजना बनाना', 'Anticipating potential learning or behavioral challenges and planning preventive strategies before crises arise'],
    [
      ['केवल शिकायत आने पर ही कार्यवाही करना', 'Acting only after formal complaints arrive'],
      ['कक्षा में हर छोटी बात पर तुरंत गुस्सा हो जाना', 'Reacting angrily to every minor classroom incident'],
      ['सत्र के अंतिम सप्ताह में पाठ्यक्रम पढ़ाना शुरू करना', 'Starting instruction only in the final week'],
    ],
    'प्रोएक्टिव शिक्षक पाठ की तैयारी, बैठने की व्यवस्था, स्पष्ट नियम और प्रारंभिक निदान से अधिकांश समस्याओं को उत्पन्न होने से पहले ही सुलझा लेता है।',
    'A proactive teacher prevents many classroom issues through thoughtful lesson design, clear routines, and early diagnostic support.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शिक्षक की नैतिक संहिता” के अनुसार शिक्षक को अपनी निजी मान्यताओं (धार्मिक/सांस्कृतिक) का कक्षा में क्या स्थान रखना चाहिए?',
    'According to teacher ethics, how should a teacher handle personal religious or cultural beliefs in a diverse classroom?',
    ['अपनी मान्यताओं का सम्मान रखते हुए सभी धर्मों व संस्कृतियों के प्रति समान तटस्थता और संवैधानिक पंथनिरपेक्षता बनाए रखना', 'Respect personal faith privately while maintaining equal neutrality and constitutional secularism toward all beliefs'],
    [
      ['कक्षा में केवल अपनी धार्मिक मान्यताओं का प्रचार करना', 'Preach personal religious beliefs in class'],
      ['अन्य संस्कृतियों के पर्वों का उपहास करना', 'Mock festivals of other cultures'],
      ['केवल अपने समुदाय के छात्रों को प्रमुख भूमिका देना', 'Assign lead roles only to students from one community'],
    ],
    'सार्वजनिक शिक्षा का स्वरूप पंथनिरपेक्ष और बहुलतावादी होता है; शिक्षक को किसी भी छात्र को उसकी आस्था के कारण पराया या हीन महसूस नहीं कराना चाहिए।',
    'Public education upholds constitutional secularism and pluralism; teachers must ensure every learner feels equally respected regardless of faith.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी विद्यालय में प्रधानाध्यापक और शिक्षक के बीच किसी शैक्षणिक नीति पर मतभेद हो, तो स्वस्थ व्यावसायिक आचरण क्या होगा?',
    'If a teacher disagrees with the principal on a pedagogical policy, what is healthy professional conduct?',
    ['तर्क, साक्ष्य और छात्रों के हित को आधार बनाकर स्टाफ बैठक में विनम्रता से अपना पक्ष रखना', 'Present evidence-based arguments respectfully in a staff meeting centered on student welfare'],
    [
      ['छात्रों को प्रधानाध्यापक के विरुद्ध हड़ताल पर उकसाना', 'Incite students to strike against the principal'],
      ['आदेशों की अनदेखी कर बिना बताए मनमानी करना', 'Secretly sabotage instructions without dialogue'],
      ['अभिभावकों के व्हाट्सएप ग्रुप में प्रधानाध्यापक की आलोचना करना', 'Criticize the principal in parent WhatsApp groups'],
    ],
    'रचनात्मक असहमति (Constructive Dissent) पेशेवर संवाद को समृद्ध करती है, बशर्ते वह छात्रों के हित में, प्रमाण-आधारित और मर्यादित मंच पर हो।',
    'Constructive, evidence-based dissent expressed respectfully in staff forums improves institutional decisions without disrupting school harmony.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किस शिक्षण स्थिति में “प्रशंसा बनाम प्रोत्साहन” (Praise vs Encouragement) का नैतिक और मनोवैज्ञानिक अंतर दिखता है?',
    'Which distinction captures the ethical and psychological difference between "Praise" and "Encouragement"?',
    ['प्रोत्साहन छात्र के प्रयास और प्रक्रिया की सराहना करता है, जबकि केवल व्यक्तित्व की अति-प्रशंसा तुलना व निर्भरता बढ़ाती है', 'Encouragement focuses on the student’s effort and process, whereas inflated person-praise can foster comparison and dependency'],
    [
      ['प्रोत्साहन केवल असफल छात्रों को दंड देने की विधि है', 'Encouragement is a method of punishing failing learners'],
      ['प्रशंसा सदैव लिखित होनी चाहिए और प्रोत्साहन मौखिक', 'Praise must be written and encouragement oral'],
      ['दोनों का उद्देश्य छात्रों को डराना है', 'Both aim to intimidate learners'],
    ],
    'कैरोल ड्वेक के ग्रोथ माइंडसेट सिद्धांत के अनुसार प्रयास व रणनीति की सराहना (Encouragement) छात्रों को चुनौती स्वीकार करने और आंतरिक अभिप्रेरणा बढ़ाने में मदद करती है।',
    'Consistent with Carol Dweck’s growth mindset research, process-focused encouragement builds resilience and intrinsic motivation better than empty person-praise.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक विद्यालय में उपलब्ध नवीन पुस्तकालय पुस्तकों को अलमारी में बंद रखता है ताकि वे “गंदी या फट न जाएं”। यह किस व्यावसायिक सिद्धांत के विरुद्ध है?',
    'A teacher keeps new library books locked away so they do not get "dirty or torn." Which educational principle does this violate?',
    ['संसाधनों की सुलभता एवं शिक्षार्थी के पढ़ने के अधिकार का सिद्धांत', 'Principle of resource accessibility and learners’ right to read'],
    [
      ['वित्तीय मितव्ययिता का सिद्धांत', 'Principle of financial austerity'],
      ['गोपनीयता का सिद्धांत', 'Principle of confidentiality'],
      ['समयपालन का सिद्धांत', 'Principle of punctuality'],
    ],
    'पुस्तकालय की पुस्तकें शोभा के लिए नहीं, बल्कि बच्चों के पढ़ने, पलटने और सीखने के लिए होती हैं; उपयोग न होने देने से शैक्षणिक संसाधन व्यर्थ हो जाता है।',
    'School library books exist to be read and explored by children; locking them away defeats their educational purpose.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“सामुदायिक सहभागिता” के अंतर्गत ग्राम शिक्षा समिति या विद्यालय प्रबंधन समिति (SMC) के प्रति शिक्षक का क्या दायित्व है?',
    'Under community engagement, what is a teacher’s responsibility toward the School Management Committee (SMC)?',
    ['विद्यालय विकास योजना (SDP) बनाने, नामांकन बढ़ाने और पारदर्शी जानकारी साझा करने में सहयोग करना', 'Collaborating on the School Development Plan (SDP), boosting enrollment, and sharing transparent updates'],
    [
      ['SMC सदस्यों को विद्यालय परिसर में आने से रोकना', 'Preventing SMC members from entering school premises'],
      ['केवल उनसे कोरे कागजों पर हस्ताक्षर लेना', 'Taking signatures on blank registers'],
      ['SMC बैठकों की सूचना जानबूझकर न देना', 'Deliberately withholding meeting notices'],
    ],
    'RTE की धारा 21 के तहत गठित SMC विद्यालय और समुदाय की साझेदारी का आधार है; शिक्षक व प्रधानाध्यापक का पारदर्शी सहयोग विद्यालय को सशक्त बनाता है।',
    'Constituted under RTE Section 21, the SMC anchors community ownership; transparent collaboration with teachers strengthens school governance and enrollment.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक छात्र बार-बार गृहकार्य अधूरा लाता है। व्यावसायिक आचरण की दृष्टि से पहला कदम क्या होना चाहिए?',
    'A student repeatedly brings incomplete homework. From a professional standpoint, what should be the first step?',
    ['गृहकार्य न कर पाने का कारण (जैसे समझ की कमी, घर पर काम या संसाधन अभाव) जानना और उचित सहायता देना', 'Investigate the underlying reason (lack of clarity, home chores, or resource gaps) and offer appropriate support'],
    [
      ['छात्र को कक्षा के बाहर धूप में खड़ा कर देना', 'Make the student stand outside in the sun'],
      ['एक दिन के काम के बदले दस बार लिखने की सजा देना', 'Punish by assigning tenfold repetitive writing'],
      ['बिना पूछे अभिभावक को अयोग्य घोषित करना', 'Dismiss the parents as irresponsible without checking'],
    ],
    'गृहकार्य की समस्या प्रायः अवधारणात्मक स्पष्टता की कमी या पारिवारिक बाधाओं का संकेत होती है; कारण जानकर सहायता करने से स्थायी सुधार होता है।',
    'Incomplete homework often signals conceptual confusion or home constraints; diagnosing the cause and supporting the learner resolves the issue constructively.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक विकास योजना” (Professional Development Plan) बनाते समय शिक्षक को किस पर ध्यान देना चाहिए?',
    'When drafting a personal Professional Development Plan, what should a teacher prioritize?',
    ['अपनी शिक्षण कमजोरियों, उभरती शिक्षाशास्त्र विधियों (जैसे IBL/ICT) और विषय अद्यतन पर', 'Addressing personal pedagogical gaps, emerging methods (like inquiry/ICT), and subject updates'],
    [
      ['केवल अवकाश लेने की रणनीति बनाने पर', 'Planning strategies for maximizing leave'],
      ['केवल ऐसे प्रमाणपत्र इकट्ठा करने पर जिनमें कुछ सीखना न पड़े', 'Collecting certificates that require no real effort'],
      ['छात्रों पर अधिक नियंत्रण थोपने की युक्तियों पर', 'Techniques for tightening authoritarian control'],
    ],
    'सार्थक व्यावसायिक विकास स्व-निदान (Self-Diagnosis) से प्रारंभ होता है ताकि शिक्षक कक्षा की वास्तविक आवश्यकताओं के अनुरूप नई दक्षताएँ अर्जित कर सके।',
    'Effective professional development starts with honest self-assessment to acquire competencies aligned with real classroom needs.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी विद्यालय में दिव्यांग छात्रों के लिए रैंप और शौचालय की सुविधा नहीं है, तो एक जागरूक शिक्षक का नैतिक प्रयास क्या होना चाहिए?',
    'If a school lacks ramps and accessible toilets for disabled learners, what should a conscientious teacher do?',
    ['विद्यालय प्रबंधन व SMC के माध्यम से सुगम्यता ढाँचे के निर्माण का प्रस्ताव रखना और वैकल्पिक सुगम कक्षा व्यवस्था करना', 'Advocate for accessible infrastructure through SMC/management while arranging accessible ground-floor seating'],
    [
      ['दिव्यांग छात्रों को प्रवेश न देने की सिफारिश करना', 'Recommend denying admission to disabled children'],
      ['यह मेरा विषय नहीं कहकर चुप रहना', 'Stay silent claiming infrastructure is not a teacher’s concern'],
      ['उन्हें केवल मौखिक सहानुभूति देकर छोड़ देना', 'Offer only verbal sympathy without action'],
    ],
    'समावेशी शिक्षा के लिए भौतिक और शैक्षणिक दोनों प्रकार की बाधाओं को दूर करने में शिक्षक की सक्रिय पहल (Advocacy) महत्वपूर्ण भूमिका निभाती है।',
    'Teachers act as advocates for inclusion by flagging accessibility barriers to management/SMC and making immediate ground-level accommodations.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शैक्षणिक ईमानदारी” के अंतर्गत किसी प्रश्नपत्र में यदि शिक्षक से ही कोई मुद्रण या तथ्यात्मक त्रुटि हो जाए, तो उचित कदम क्या है?',
    'If a teacher discovers a factual or printing error in their own question paper after an exam, what is the ethical action?',
    ['त्रुटि को खुले मन से स्वीकार कर सभी प्रभावित छात्रों को नियमानुसार समानुपातिक न्याय (Bonus/Adjustment) देना', 'Openly acknowledge the error and apply a uniform, fair adjustment for all affected students'],
    [
      ['त्रुटि छिपाने के लिए छात्रों को ही गलत ठहरा देना', 'Blame students to conceal the mistake'],
      ['केवल शिकायत करने वाले एक छात्र को बोनस अंक देना', 'Award bonus marks only to the one student who complained'],
      ['पूरी उत्तर पुस्तिकाएँ जाँचना बंद कर देना', 'Refuse to evaluate the rest of the paper'],
    ],
    'मूल्यांकन की निष्पक्षता के लिए आवश्यक है कि शिक्षक की त्रुटि का खामियाजा छात्रों को न भुगतना पड़े और सुधार सभी के लिए एकसमान हो।',
    'Fairness demands that students are never penalized for an examiner’s error and that any mark adjustment applies uniformly to all examinees.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण आचार संहिता” में शिक्षक से किस प्रकार की “संप्रेषण शैली” (Communication Style) की अपेक्षा की जाती है?',
    'What "Communication Style" is expected of a teacher under professional ethics?',
    ['दृढ़ किंतु विनम्र (Assertive), स्पष्ट, समावेशी और अहिंसक संवाद', 'Assertive (firm yet polite), clear, inclusive, and non-violent communication'],
    [
      ['आक्रामक एवं भय पैदा करने वाली (Aggressive)', 'Aggressive and intimidating'],
      ['निष्क्रिय एवं अस्पष्ट (Passive)', 'Passive and ambiguous'],
      ['व्यंग्यात्मक एवं उपहासपूर्ण (Sarcastic)', 'Sarcastic and mocking'],
    ],
    'आग्रहपूर्ण/संतुलित संवाद (Assertive Communication) शिक्षक को बिना आक्रामक हुए स्पष्टता व सम्मान के साथ बात रखने की क्षमता देता है।',
    'Assertive communication balances clarity and firmness with respect and warmth, avoiding both aggression and passive helplessness.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“विद्यालय में समय-निष्ठा” (Punctuality) शिक्षक के व्यावसायिक आचरण का महत्वपूर्ण अंग क्यों है?',
    'Why is "Punctuality" considered a vital element of a teacher’s professional conduct?',
    ['यह छात्रों में समय के मूल्य का प्रत्यक्ष अनुकरण पैदा करती है और शिक्षण-समय की हानि रोकती है', 'It models respect for time to students and prevents loss of instructional hours'],
    [
      ['यह केवल बायोमेट्रिक वेतन कटौती से बचने के लिए है', 'It exists solely to avoid biometric pay cuts'],
      ['इससे छात्रों को अधिक गृहकार्य देने का समय मिलता है', 'It allows assigning heavier homework'],
      ['इसका कक्षा की संस्कृति पर कोई प्रभाव नहीं पड़ता', 'It has no impact on school culture'],
    ],
    'बच्चे उपदेश से अधिक आचरण का अनुकरण करते हैं; समय पर आने वाला शिक्षक बिना कुछ कहे अनुशासन और कर्तव्यपरायणता सिखाता है।',
    'Children emulate behavior far more than lectures; a punctual teacher silently instills discipline and maximizes instructional time.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा उदाहरण “व्यावसायिक सीमा के उल्लंघन” (Boundary Violation) को दर्शाता है?',
    'Which of the following examples clearly represents a "Professional Boundary Violation"?',
    ['छात्र को अपने निजी घरेलू कार्य (जैसे बाजार से सामान लाना या बर्तन साफ करना) में लगाना', 'Using a student to perform the teacher’s personal domestic chores or errands'],
    [
      ['कक्षा की सफाई या बागवानी में छात्रों के साथ स्वयं भी भाग लेना', 'Participating alongside students in classroom cleanliness or gardening'],
      ['छात्रों को पुस्तकालय से किताबें व्यवस्थित करने का उत्तरदायित्व देना', 'Giving students responsibility for organizing class library books'],
      ['कठिन विषय पर अतिरिक्त उपचारात्मक कक्षा लेना', 'Holding an extra remedial session on a tough topic'],
    ],
    'विद्यालय से संबंधित सामूहिक गतिविधियों में छात्रों की भागीदारी जीवन-कौशल सिखाती है, किंतु शिक्षक के निजी/घरेलू कार्यों में छात्रों का उपयोग बाल-शोषण और पद का दुरुपयोग है।',
    'Shared school upkeep builds life skills, whereas using students for a teacher’s personal chores or errands is exploitation and a serious ethical breach.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“नैतिक साहस” (Moral Courage) एक शिक्षक के आचरण में कब दिखाई देता है?',
    'When is "Moral Courage" demonstrated in a teacher’s conduct?',
    ['जब वह प्रशासनिक दबाव या अलोकप्रियता की परवाह किए बिना छात्र हित और सत्य के पक्ष में खड़ा हो', 'When standing up for truth and student welfare despite administrative pressure or unpopularity'],
    [
      ['जब वह शक्तिशाली व्यक्ति के गलत निर्णय में भी हाँ में हाँ मिलाए', 'When flattering powerful individuals despite unethical directives'],
      ['जब वह कमजोर छात्रों पर अपनी शक्ति का प्रदर्शन करे', 'When exercising harshness over vulnerable learners'],
      ['जब वह विवाद से बचने हेतु अन्याय पर आँखें मूँद ले', 'When turning a blind eye to injustice to stay safe'],
    ],
    'नैतिक साहस का अर्थ भय या स्वार्थ से ऊपर उठकर सही, न्यायसंगत और बाल-हितैषी पक्ष लेना है।',
    'Moral courage means choosing what is right, fair, and in the child’s best interest even when doing so is uncomfortable or unpopular.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा कथन “शिक्षक-छात्र विश्वास” (Teacher-Student Trust) को सबसे मजबूत बनाता है?',
    'Which teacher practice most effectively strengthens "Teacher-Student Trust"?',
    ['किए गए वादे को निभाना, गोपनीयता का सम्मान करना तथा हर परिस्थिति में निष्पक्ष रहना', 'Keeping promises made to learners, respecting confidentiality, and remaining consistently fair'],
    [
      ['छात्रों के राज अन्य शिक्षकों को मनोरंजन के लिए सुनाना', 'Sharing student secrets in the staffroom for amusement'],
      ['बिना कारण अपने ही बनाए नियमों को बार-बार बदलना', 'Arbitrarily changing rules without notice'],
      ['अपनी गलती का ठीकरा कक्षा पर फोड़ना', 'Blaming the class for one’s own errors'],
    ],
    'निरंतरता, विश्वसनीयता और निष्पक्षता छात्रों के मन में यह विश्वास जगाती है कि शिक्षक उनका सच्चा हितैषी है।',
    'Consistency, keeping one’s word, protecting confidentiality, and fairness assure students that their teacher is a dependable ally.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब किसी छात्र की संस्कृति में कुछ स्थानीय ज्ञान व लोक-कथाएँ प्रचलित हैं, तो शिक्षक का सम्मानजनक आचरण क्या है?',
    'When learners bring local folk knowledge and cultural stories from their community, what is respectful pedagogical conduct?',
    ['स्थानीय ज्ञान को पाठ्यक्रम से जोड़कर कक्षा चर्चा में स्थान देना और उसकी उपयोगिता का सम्मान करना', 'Integrating local knowledge into classroom dialogue and respecting its cultural value alongside formal concepts'],
    [
      ['स्थानीय ज्ञान को पूरी तरह पिछड़ा और मूर्खतापूर्ण बताना', 'Dismissing local knowledge as backward and foolish'],
      ['केवल शहरी उदाहरणों को ही सही मानना', 'Treating only urban examples as valid'],
      ['लोक-भाषा बोलने पर आर्थिक दंड लगाना', 'Fining students for referencing local traditions'],
    ],
    'NCF 2005 और NEP 2020 सामुदायिक व स्वदेशी ज्ञान प्रणालियों को औपचारिक ज्ञान से जोड़ने पर बल देते हैं, जिससे बच्चा जुड़ाव महसूस करता है।',
    'NCF 2005 and NEP 2020 advocate bridging community knowledge with formal curriculum so learners feel culturally affirmed.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक कक्षा के कमजोर छात्रों को अलग कतार में बैठाकर उन पर ध्यान न देने की नीति अपनाता है ताकि “प्रतिभाशाली छात्रों का समय खराब न हो”। यह किस सिद्धांत का उल्लंघन है?',
    'A teacher seats struggling learners in a separate back row and ignores them so "bright students’ time is not wasted." What principle is violated?',
    ['समावेशी शिक्षा एवं समान शैक्षणिक अवसर का सिद्धांत', 'Principle of inclusive education and equal learning opportunity'],
    [
      ['पाठ्यक्रम त्वरित समाप्ति का सिद्धांत', 'Principle of rapid syllabus completion'],
      ['उत्कृष्टता संवर्धन का सिद्धांत', 'Principle of promoting merit'],
      ['कक्षा-कक्ष अंतरिक्ष प्रबंधन का सिद्धांत', 'Principle of classroom space management'],
    ],
    'समावेशी शिक्षा में प्रत्येक बच्चे को समान सम्मान व उपयुक्त सहायता (Differentiated Instruction) मिलनी चाहिए; पृथक्करण और उपेक्षा गंभीर अन्याय है।',
    'Inclusive pedagogy requires differentiated support for every learner; segregating and neglecting struggling students violates equity and child rights.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“सतत प्रतिबिंबन” (Reflection-in-action vs Reflection-on-action) की अवधारणा किसने दी जो शिक्षक की व्यावसायिक परिपक्वता बढ़ाती है?',
    'Who proposed the distinction between "Reflection-in-action" and "Reflection-on-action" that enhances a teacher’s professional maturity?',
    ['डोनाल्ड शॉन (Donald Schön)', 'Donald Schön'],
    [
      ['अल्बर्ट बंडूरा (Albert Bandura)', 'Albert Bandura'],
      ['एडवर्ड थार्नडाइक (Edward Thorndike)', 'Edward Thorndike'],
      ['क्लार्क हल (Clark Hull)', 'Clark Hull'],
    ],
    'डोनाल्ड शॉन (1983) के अनुसार पढ़ाते समय तत्काल समायोजन करना Reflection-in-action है और कक्षा के बाद पाठ का विश्लेषण करना Reflection-on-action है।',
    'Donald Schön (1983) distinguished adjusting pedagogy mid-lesson (reflection-in-action) from analyzing the lesson afterward (reflection-on-action).',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'विद्यालय में परीक्षा के दौरान एक निरीक्षक (Invigilator) के रूप में शिक्षक का नैतिक दायित्व क्या है?',
    'While serving as an exam invigilator, what is a teacher’s ethical obligation?',
    ['सतर्क रहकर निष्पक्ष वातावरण बनाए रखना, अनावश्यक भय पैदा न करना तथा समय व निर्देशों की स्पष्ट घोषणा करना', 'Remaining vigilant and fair without creating panic, while clearly announcing time and instructions'],
    [
      ['परीक्षा कक्ष में बैठकर मोबाइल फोन पर बात करना', 'Using a mobile phone for personal chats in the exam hall'],
      ['कुछ परिचित छात्रों को उत्तरों का संकेत देना', 'Hinting answers to familiar students'],
      ['परीक्षार्थियों से अनावश्यक कठोर स्वर में बात कर तनाव बढ़ाना', 'Speaking harshly and heightening student anxiety'],
    ],
    'निरीक्षक का कार्य नकल रोकना और साथ ही छात्रों को शांत, व्यवस्थित व निष्पक्ष परीक्षा वातावरण प्रदान करना है।',
    'Invigilation requires active vigilance and strict fairness paired with calm conduct that does not induce unnecessary panic.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“रोल मॉडल” (आदर्श प्रतिमान) के रूप में शिक्षक के किस आचरण का छात्रों पर सर्वाधिक गहरा प्रभाव पड़ता है?',
    'As a role model, which aspect of a teacher’s behavior leaves the deepest imprint on students?',
    ['मुश्किल परिस्थितियों में धैर्य, सत्यनिष्ठा, परोपकार और सीखने के प्रति उत्साह', 'Patience under pressure, integrity, kindness, and genuine enthusiasm for learning'],
    [
      ['केवल महँगे वाहन और वस्त्रों का प्रदर्शन', 'Displaying expensive vehicles and attire'],
      ['अधिकारियों पर रौब जमाने की प्रवृत्ति', 'Trying to dominate officials'],
      ['केवल तीव्र गति से ब्लैकबोर्ड भरना', 'Filling the blackboard rapidly'],
    ],
    'बंडूरा के सामाजिक अधिगम सिद्धांत के अनुसार बच्चे उन आदर्शों का अनुकरण करते हैं जिनका व्यवहार विश्वसनीय, सम्मानजनक और सार्थक होता है।',
    'Consistent with Bandura’s social learning theory, students internalize values modeled authentically through a teacher’s integrity, kindness, and curiosity.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी विद्यालयी योजना की छात्रवृत्ति या पोशाक राशि सीधे छात्र/अभिभावक के खाते में जानी है, तो शिक्षक की नैतिक भूमिका क्या है?',
    'When government scholarship or uniform funds are transferred via DBT to student/parent accounts, what is the teacher’s ethical role?',
    ['सही एवं अद्यतन विवरण सत्यापित कर समय पर अपलोड करना तथा किसी प्रकार की अवैध मांग न करना', 'Verify and upload accurate student details promptly without making any unlawful demands'],
    [
      ['अभिभावकों से सहायता करने के बदले कमीशन माँगना', 'Demanding a cut from parents for processing details'],
      ['नापसंद छात्रों के आवेदन जानबूझकर रोक देना', 'Deliberately withholding forms of disliked students'],
      ['बिना जांच के त्रुटिपूर्ण बैंक खाता विवरण भर देना', 'Entering unverified bank details carelessly'],
    ],
    'डीबीटी (DBT) जैसी कल्याणकारी योजनाओं में शिक्षक की सटीकता और निःस्वार्थ ईमानदारी यह सुनिश्चित करती है कि लाभ सही समय पर पात्र बच्चे तक पहुँचे।',
    'Accurate verification and zero tolerance for kickbacks ensure welfare benefits reach eligible learners promptly and transparently.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक संवेदनशीलता और गोपनीयता” की दृष्टि से कक्षा में दिव्यांग या विशेष आवश्यकता वाले छात्र के अभिलेखों का रखरखाव कैसे होना चाहिए?',
    'In terms of professional confidentiality, how should records of students with special needs or counseling histories be maintained?',
    ['सुरक्षित एवं सीमित पहुँच (Restricted Access) के साथ केवल अधिकृत शैक्षणिक/परामर्श उपयोग हेतु', 'Securely with restricted access strictly for authorized pedagogical or counseling support'],
    [
      ['कक्षा के सूचना पट्ट (Notice Board) पर चिपकाकर', 'Pinned openly on the classroom notice board'],
      ['सार्वजनिक वेबसाइट पर सभी के नाम सहित अपलोड करके', 'Uploaded publicly with full student names'],
      ['अन्य कक्षाओं के छात्रों को पढ़ने के लिए देकर', 'Handed out for other students to read'],
    ],
    'चिकित्सीय व मनोवैज्ञानिक अभिलेख संवेदनशील व्यक्तिगत डेटा होते हैं; उन्हें सुरक्षित रखना छात्र की निजता का अधिकार सुनिश्चित करता है।',
    'Medical and counseling records are sensitive data that must be stored securely with restricted access to safeguard learner privacy.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक सदैव कठिन अवधारणाओं के लिए एक ही विधि का उपयोग करता है और न समझ पाने पर छात्रों को दोषी ठहराता है। यह किस व्यावसायिक सिद्धांत के विपरीत है?',
    'A teacher always uses one rigid method for complex topics and blames students when they fail to grasp it. Which pedagogical principle is ignored?',
    ['वैयक्तिक भिन्नता एवं विभेदित शिक्षण (Individual Differences & Differentiated Instruction)', 'Individual differences and differentiated instruction'],
    [
      ['दंड एवं भय का सिद्धांत', 'Principle of punishment and fear'],
      ['केवल व्याख्यान विधि की श्रेष्ठता', 'Supremacy of lecture-only method'],
      ['मानकीकृत रटंत का सिद्धांत', 'Principle of standardized rote learning'],
    ],
    'प्रत्येक बच्चे की सीखने की शैली (दृश्य, श्रव्य, गत्यात्मक) भिन्न होती है; व्यावसायिक शिक्षक विधि बदलता है, बच्चे को दोष नहीं देता।',
    'Learners differ in styles and readiness; an ethical educator adapts instructional methods rather than blaming the child for non-comprehension.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“सेवाकालीन प्रशिक्षण” के दौरान एक शिक्षक की आदर्श भागीदारी कैसी होनी चाहिए?',
    'What reflects ideal participation by a teacher during an in-service training workshop?',
    ['सक्रिय प्रश्न पूछना, समूह गतिविधियों में भाग लेना तथा सीखी गई विधियों को अपनी कक्षा में आजमाना', 'Asking thoughtful questions, engaging in group tasks, and piloting learned strategies in class'],
    [
      ['केवल उपस्थिति रजिस्टर पर हस्ताक्षर कर समय से पूर्व निकल जाना', 'Merely signing the attendance sheet and leaving early'],
      ['पूरे सत्र मोबाइल फोन में व्यस्त रहना', 'Remaining engrossed in a phone throughout'],
      ['हर नई विधि को बिना परखे “असंभव” कहकर नकार देना', 'Dismissing every new method as impossible without trying'],
    ],
    'प्रशिक्षण का उद्देश्य केवल प्रमाणपत्र नहीं, बल्कि कक्षा के शिक्षण-अधिगम अनुभव को बेहतर बनाना है।',
    'Training succeeds only when teachers engage actively and translate workshop insights into real classroom improvements.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'यदि किसी छात्र को विद्यालय के रास्ते में या परिवार में बाल विवाह या बाल श्रम का खतरा हो, तो जागरूक शिक्षक की नैतिक भूमिका क्या है?',
    'If a student faces risk of child marriage or child labor, what is a conscientious teacher’s ethical role?',
    ['अभिभावकों से संवेदनशील संवाद करना तथा आवश्यकतानुसार प्रधानाध्यापक, SMC और बाल कल्याण समिति/हेल्पलाइन (1098) का सहयोग लेना', 'Engage parents sensitively and involve the principal, SMC, and Childline (1098) or child welfare authorities as needed'],
    [
      ['सामाजिक परंपरा मानकर मौन समर्थन देना', 'Silently accept it as a local custom'],
      ['बालक का नाम रजिस्टर से चुपचाप काट देना', 'Quietly strike the child’s name off the register'],
      ['इसे विद्यालय सीमा से बाहर का विषय बताकर टालना', 'Ignore it as occurring outside school gates'],
    ],
    'बाल अधिकार संरक्षण में शिक्षक समुदाय और प्रशासन के बीच सेतु है; शिक्षा निरंतर रखने के लिए परामर्श और चाइल्डलाइन/कल्याण तंत्र से समन्वय आवश्यक है।',
    'Teachers safeguard child rights by counseling families and coordinating with the SMC and Childline (1098)/welfare bodies to prevent dropout into labor or early marriage.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शैक्षणिक ईमानदारी और शोध” में किस सिद्धांत के अनुसार एक शिक्षक को अपने शिक्षण प्रयोगों के वास्तविक परिणाम ही प्रस्तुत करने चाहिए?',
    'In educational action research, which principle requires a teacher to report actual findings rather than altering data?',
    ['तथ्यनिष्ठा एवं वैज्ञानिक ईमानदारी (Objectivity & Scientific Honesty)', 'Objectivity and scientific honesty'],
    [
      ['प्रदर्शन अलंकरण (Window Dressing)', 'Window dressing'],
      ['चयनित प्रतिवेदन (Cherry-picking)', 'Cherry-picking'],
      ['पुष्टिकरण पूर्वाग्रह (Confirmation Bias)', 'Confirmation bias'],
    ],
    'क्रियात्मक अनुसंधान में नकारात्मक या आंशिक परिणाम भी मूल्यवान होते हैं क्योंकि वे बताते हैं कि किस रणनीति में संशोधन की आवश्यकता है; आंकड़ों में हेरफेर अनैतिक है।',
    'In action research, even partial or negative results are valuable for refining pedagogy; fabricating data violates scientific and professional honesty.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'कक्षा में किसी विद्यार्थी के जन्मदिन या उत्सव पर महँगे उपहारों के प्रदर्शन से शिक्षक को क्यों हतोत्साहित करना चाहिए?',
    'Why should a teacher discourage ostentatious display of expensive gifts or treats during classroom celebrations?',
    ['ताकि आर्थिक रूप से कमजोर वर्ग के छात्रों में हीन भावना या सामाजिक भेदभाव न पनपे', 'To prevent feelings of inferiority or socio-economic discrimination among less affluent students'],
    [
      ['ताकि छात्र कभी उत्सव न मनाएं', 'So that students never celebrate'],
      ['ताकि शिक्षक को अतिरिक्त कार्य न करना पड़े', 'So the teacher avoids extra coordination'],
      ['ताकि कक्षा में अनुशासन पूरी तरह समाप्त हो जाए', 'So classroom discipline disappears'],
    ],
    'सादगीपूर्ण और समावेशी उत्सव (जैसे पौधारोपण या समूह गीत) सभी बच्चों को समान खुशी देते हैं और आर्थिक विषमता को उजागर नहीं करते।',
    'Simple, inclusive celebrations (like planting a sapling or group songs) ensure every child feels equal without highlighting economic disparities.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“नैतिक उत्तरदायित्व” की दृष्टि से एक शिक्षक द्वारा मूल्यांकन में की गई देरी का सबसे बड़ा नुकसान क्या है?',
    'From an ethical accountability standpoint, what is the biggest harm caused by a teacher delaying assessment feedback?',
    ['छात्रों को अपनी त्रुटियों को समय रहते सुधारने का अवसर नहीं मिल पाता और प्रतिपुष्टि की सार्थकता घट जाती है', 'Learners miss timely opportunities to correct misconceptions, reducing the formative value of feedback'],
    [
      ['लाल स्याही की खपत बढ़ जाती है', 'Red ink consumption increases'],
      ['अभिभावकों को विद्यालय नहीं आना पड़ता', 'Parents do not have to visit school'],
      ['परीक्षा का पाठ्यक्रम छोटा हो जाता है', 'The syllabus automatically shrinks'],
    ],
    'तत्काल और समयबद्ध प्रतिपुष्टि (Timely Feedback) सीखने को सुदृढ़ करती है; महीनों बाद लौटाई गई कॉपी छात्रों के लिए अर्थहीन हो जाती है।',
    'Timely feedback enables immediate correction of misconceptions; delayed grading strips assessment of its diagnostic and motivational value.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से किस कार्य से विद्यालय में “सहकारी और नैतिक कार्यसंस्कृति” (Ethical Work Culture) का निर्माण होता है?',
    'Which practice builds an "Ethical and Collaborative Work Culture" in a school?',
    ['पारदर्शी निर्णय, परस्पर सम्मान, साझा शिक्षण संसाधन और छात्र-हित की प्राथमिकता', 'Transparent decisions, mutual respect, shared teaching resources, and putting student welfare first'],
    [
      ['गुटबाजी, अफवाहें और वरिष्ठता का दुरुपयोग', 'Cliques, gossip, and misuse of seniority'],
      ['दूसरों के अच्छे प्रयासों की अनदेखी करना', 'Ignoring colleagues’ positive initiatives'],
      ['अधिकारी के सामने एकजुट होने का दिखावा कर पीछे से अवरोध डालना', 'Feigning unity before supervisors while obstructing peers behind their backs'],
    ],
    'जब सभी शिक्षक एक साझा लक्ष्य (छात्रों का कल्याण) के लिए ईमानदारी से सहयोग करते हैं, तो संस्थागत वातावरण सकारात्मक और प्रेरक बनता है।',
    'Shared student-centered goals, transparency, mutual respect, and resource sharing cultivate an ethical and supportive school culture.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“गोपनीय परीक्षा कार्यों” (जैसे मूल्यांकन या प्रश्नपत्र निर्माण) में शिक्षक को किस बात से बचना चाहिए?',
    'In confidential examination duties (paper setting or evaluation), what must a teacher strictly avoid?',
    ['कार्य की जानकारी परिवारजनों, मित्रों या सोशल मीडिया पर साझा करना', 'Discussing task details with family, friends, or on social media'],
    [
      ['निर्धारित समय-सीमा में मूल्यांकन पूर्ण करना', 'Completing grading within the deadline'],
      ['प्रदत्त अंक-योजना का सख्ती से पालन करना', 'Strictly following the official marking scheme'],
      ['योग और अंक स्थानांतरण की दोहरी जांच करना', 'Double-checking totals and mark entries'],
    ],
    'परीक्षा संबंधी दायित्व उच्च गोपनीयता की मांग करते हैं; अनौपचारिक चर्चा भी परीक्षा की निष्पक्षता को खतरे में डाल सकती है।',
    'Confidential exam assignments forbid even casual disclosure to family or online networks to preserve absolute fairness.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक कक्षा में किसी छात्र की सांस्कृतिक वेशभूषा (जैसे पगड़ी या पारंपरिक परिधान) पर सहपाठियों की टिप्पणी रोककर सभी को सांस्कृतिक विविधता समझाता है। वह क्या स्थापित कर रहा है?',
    'A teacher stops peers from mocking a student’s traditional attire and explains cultural diversity. What is the teacher establishing?',
    ['समावेशी सम्मान एवं संवैधानिक बंधुत्व (Fraternity)', 'Inclusive respect and constitutional fraternity'],
    [
      ['धार्मिक रूढ़िवादिता', 'Religious orthodoxy'],
      ['एकसमानता थोपने की नीति', 'Forced uniformity'],
      ['शैक्षणिक उदासीनता', 'Academic indifference'],
    ],
    'भारतीय संविधान की प्रस्तावना में निहित बंधुत्व (Fraternity) और व्यक्ति की गरिमा का व्यावहारिक शिक्षण कक्षा में विविधता के सम्मान से ही संभव है।',
    'Defending cultural attire and teaching diversity actualizes the constitutional value of fraternity and human dignity in the classroom.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किस परिस्थिति में शिक्षक द्वारा दिया गया “सकारात्मक पुनर्बलन” अनैतिक या हानिकारक हो सकता है?',
    'In which situation can a teacher’s "reward or praise" become ethically counterproductive?',
    ['जब गलत या अनैतिक कार्य (जैसे दूसरे की कॉपी से नकल कर पूरे अंक लाना) की प्रशंसा कर दी जाए', 'When praising an unethical act, such as praising high marks obtained through copying'],
    [
      ['जब कठिन प्रयास की सच्ची सराहना की जाए', 'When genuine effort is acknowledged'],
      ['जब संकोची छात्र के छोटे सुधार पर प्रोत्साहन दिया जाए', 'When a shy learner’s small progress is encouraged'],
      ['जब टीम वर्क की सराहना की जाए', 'When collaborative teamwork is praised'],
    ],
    'गलत साधनों से प्राप्त सफलता की प्रशंसा करने से छात्रों में यह संदेश जाता है कि परिणाम के लिए अनैतिक रास्ता अपनाना भी स्वीकार्य है।',
    'Rewarding results achieved through dishonest means signals that cheating is acceptable as long as scores look good.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण पेशे की गरिमा” बनाए रखने के लिए शिक्षक को विद्यालय परिसर में किस पदार्थ के सेवन से पूर्णतः दूर रहना चाहिए?',
    'To uphold professional dignity and legal norms, what must a teacher strictly abstain from on school premises?',
    ['तम्बाकू, गुटखा, धूम्रपान एवं मद्यपान जैसे नशीले पदार्थ', 'Tobacco, gutkha, smoking, alcohol, and any intoxicants'],
    [
      ['स्वच्छ पेयजल', 'Clean drinking water'],
      ['संतुलित मध्याह्न भोजन', 'Balanced lunch'],
      ['सफेद चाक एवं डस्टर', 'Chalk and duster'],
    ],
    'COTPA अधिनियम के तहत शिक्षण संस्थानों का परिसर पूर्णतः तम्बाकू-मुक्त (Tobacco-free) क्षेत्र होता है, और शिक्षक द्वारा नशे का सेवन बच्चों पर अत्यंत बुरा प्रभाव डालता है।',
    'Under COTPA regulations and teacher ethics, school campuses are strictly tobacco- and intoxicant-free zones; modeling substance use harms students.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपनी कक्षा के छात्रों के लिए प्रत्येक माह एक “अभिभावक संदेश पुस्तिका” (Communication Diary) या समूह संवाद रखता है। इसका प्रमुख उद्देश्य क्या है?',
    'A teacher maintains a monthly parent communication diary or structured feedback loop. What is its main professional purpose?',
    ['विद्यालय और परिवार के बीच सतत एवं रचनात्मक सूचना आदान-प्रदान सुनिश्चित करना', 'Ensuring continuous and constructive two-way communication between school and home'],
    [
      ['केवल छात्रों की सजा का ब्योरा इकट्ठा करना', 'Collecting only a log of student punishments'],
      ['अभिभावकों पर निजी ट्यूशन लेने का दबाव डालना', 'Pressuring parents to hire private tutors'],
      ['शिक्षक की दैनिक व्यस्तता का दिखावा करना', 'Showing off how busy the teacher is'],
    ],
    'नियमित दो-तरफा संवाद समस्या को बड़ा होने से पहले ही सुलझाने और अभिभावकों को बच्चे की सीखने की यात्रा में भागीदार बनाने में सहायक होता है।',
    'Structured two-way home-school communication catches learning issues early and engages parents as active partners.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“व्यावसायिक नैतिकता” के संदर्भ में “दया” (Pity) और “सशक्तिकरण” (Empowerment) में शिक्षक को किसे चुनना चाहिए?',
    'In professional ethics, should a teacher approach disadvantaged or disabled learners with "Pity" or "Empowerment"?',
    ['सशक्तिकरण—उन्हें आत्मनिर्भर और सक्षम बनाने वाले अवसर व कौशल प्रदान करना', 'Empowerment—providing opportunities and skills that build independence and capability'],
    [
      ['दया—उनसे कोई शैक्षणिक अपेक्षा न रखकर बिना सिखाए पास कर देना', 'Pity—holding zero expectations and passing them without teaching'],
      ['दोनों का पूर्ण त्याग कर कठोर उपेक्षा करना', 'Abandoning both in favor of harsh neglect'],
      ['केवल आर्थिक भीख पर निर्भर बनाना', 'Making them dependent solely on charity'],
    ],
    'दया भाव व्यक्ति को कमजोर मानकर कम अपेक्षा रखता है (Soft Bigotry of Low Expectations), जबकि सशक्तिकरण उसकी अंतर्निहित क्षमता को विकसित कर आत्मनिर्भर बनाता है।',
    'Pity lowers expectations and breeds dependency, whereas empowerment provides scaffolding and equal opportunities to unlock real capability.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक जब विद्यालय समय के पश्चात स्वेच्छा से कमजोर छात्रों के लिए सप्ताह में दो दिन निःशुल्क उपचारात्मक सत्र चलाता है, तो यह क्या दर्शाता है?',
    'When a teacher voluntarily runs free remedial sessions twice a week for struggling students, what does this exemplify?',
    ['निःस्वार्थ सेवा-भाव एवं उच्च व्यावसायिक प्रतिबद्धता', 'Selfless service orientation and high professional commitment'],
    [
      ['निजी ट्यूशन कानून का उल्लंघन', 'Violation of private tuition laws'],
      ['शैक्षणिक संसाधनों की बर्बादी', 'Waste of school resources'],
      ['प्रशासनिक नियमों की अवहेलना', 'Defiance of administrative rules'],
    ],
    'बिना किसी आर्थिक शुल्क के विद्यालय हित में अतिरिक्त मार्गदर्शन देना सेवा-भावना का उत्कृष्ट उदाहरण है (यह निजी सशुल्क ट्यूशन से पूर्णतः भिन्न है)।',
    'Offering unpaid extra remedial support at school reflects exemplary dedication and service spirit, completely distinct from commercial private tuition.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण आचार संहिता” के अनुसार शिक्षक को सहकर्मियों की गोपनीय सूचना या पदोन्नति आकलन के प्रति कैसा दृष्टिकोण रखना चाहिए?',
    'Regarding colleagues’ confidential appraisals or personal records, what ethical stance should a teacher maintain?',
    ['ईमानदार, वस्तुनिष्ठ तथा द्वेषरहित दृष्टिकोण', 'Honest, objective, and free of malice'],
    [
      ['व्यक्तिगत रंजिश निकालने का अवसर समझना', 'Treating it as an opportunity to settle personal scores'],
      ['गुप्त बातें सार्वजनिक कर प्रतिष्ठा धूमिल करना', 'Leaking private details to tarnish reputation'],
      ['मित्रता के कारण असत्य प्रशंसा लिखना', 'Writing false praise out of personal friendship'],
    ],
    'सहकर्मियों के मूल्यांकन या संदर्भ में व्यक्तिगत द्वेष या अंधी पक्षधरता दोनों अनैतिक हैं; वस्तुनिष्ठ और गरिमापूर्ण आचरण ही संस्था को मजबूत बनाता है।',
    'Both malicious fault-finding and dishonest flattery breach collegial ethics; fairness and objectivity sustain institutional integrity.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब कक्षा में कोई छात्र गंभीर त्रुटि करता है और पूरा वर्ग उस पर हँसने लगता है, तो शिक्षक को सर्वप्रथम क्या करना चाहिए?',
    'When a student makes a mistake and the entire class bursts into laughter, what should the teacher do first?',
    ['हँसी को तुरंत रोककर यह समझाना कि गलतियाँ सीखने की स्वाभाविक सीढ़ी हैं, और छात्र का सम्मान बचाना', 'Immediately stop the laughter, affirm that mistakes are natural steps in learning, and protect the student’s dignity'],
    [
      ['स्वयं भी छात्रों के साथ हँसकर माहौल हल्का करना', 'Laugh along with the class to lighten the mood'],
      ['त्रुटि करने वाले छात्र को ही मूर्ख कहना', 'Call the student foolish for making the error'],
      ['पूरी कक्षा को बिना कारण 10 मिनट के लिए दंडित करना', 'Punish the entire class arbitrarily'],
    ],
    '“गलती-मित्रवत कक्षा” (Mistake-Friendly Classroom) में छात्र प्रश्न पूछने और प्रयास करने से नहीं डरते; उपहास को रोकना शिक्षक की प्राथमिक संवेदनशीलता है।',
    'Stopping peer ridicule protects psychological safety and reinforces a growth-oriented culture where mistakes are treated as learning opportunities.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“सस्टेनेबल डेवलपमेंट गोल 4” (SDG-4) के प्रति एक शिक्षक का दैनिक आचरण कैसे योगदान देता है?',
    'How does a teacher’s daily ethical conduct contribute to Sustainable Development Goal 4 (SDG-4)?',
    ['समावेशी, समतामूलक और गुणवत्तापूर्ण शिक्षा सुनिश्चित कर किसी भी बच्चे को पीछे न छूटने देने से', 'By ensuring inclusive, equitable, quality education so no learner is left behind'],
    [
      ['केवल अभिजात्य वर्ग के छात्रों को पढ़ाने से', 'By teaching only elite learners'],
      ['विद्यालय में पर्यावरण शिक्षा बंद करने से', 'By removing environmental awareness'],
      ['छात्रों की उपस्थिति कम करने से', 'By reducing student attendance'],
    ],
    'SDG-4 का लक्ष्य “सभी के लिए समावेशी एवं समतामूलक गुणवत्तापूर्ण शिक्षा और आजीवन सीखने के अवसर” सुनिश्चित करना है, जिसे कक्षा स्तर पर शिक्षक ही साकार करता है।',
    'SDG-4 aims for inclusive, equitable, quality education and lifelong learning opportunities for all—realized daily through teachers’ inclusive practices.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“अंध-विश्वास” या “रूढ़ियों” के विपरीत वैज्ञानिक एवं संवैधानिक मूल्यों के संवर्धन में शिक्षक को किस भाषा-व्यवहार से बचना चाहिए?',
    'To promote scientific and constitutional values over stereotypes, what classroom behavior should a teacher avoid?',
    ['यह कहना कि “लड़कियाँ गणित में कमजोर होती हैं” या “फलां वर्ग के बच्चे पढ़ नहीं सकते”', 'Making deterministic claims like "girls are weak in math" or "children from certain groups cannot learn"'],
    [
      ['सभी छात्रों से प्रयोग व तर्क द्वारा उत्तर खोजने को कहना', 'Asking all students to test ideas through reasoning and experiments'],
      ['विविध वैज्ञानिकों और समाज सुधारकों के उदाहरण देना', 'Citing diverse scientists and reformers'],
      ['अनुमान लगाने और जांचने की आदत डालना', 'Encouraging hypothesis-testing habits'],
    ],
    'स्टीरियोटाइप थ्रेट (Stereotype Threat) छात्रों के आत्मविश्वास को गंभीर नुकसान पहुँचाता है; शिक्षक के शब्द क्षमता के प्रति आशावादी होने चाहिए।',
    'Deterministic stereotypes create "stereotype threat" that depresses learner confidence and performance; teachers must affirm every learner’s potential.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक शिक्षण के साथ-साथ विद्यालय के स्वच्छता अभियान और वृक्षारोपण में स्वयं फावड़ा व झाड़ू उठाकर बच्चों के साथ कार्य करता है। इससे किस मूल्य की शिक्षा मिलती है?',
    'A teacher actively joins students with a broom and spade during school cleanliness and plantation drives. Which value does this teach?',
    ['श्रम की गरिमा (Dignity of Labour) और पर्यावरण-चेतना', 'Dignity of labour and environmental stewardship'],
    [
      ['केवल पुस्तकीय ज्ञान की श्रेष्ठता', 'Superiority of bookish knowledge alone'],
      ['सामाजिक वर्ग-विभाजन', 'Social class hierarchy'],
      ['कक्षा-शिक्षण की उपेक्षा', 'Neglect of academics'],
    ],
    'गांधीजी की बुनियादी शिक्षा (Nai Talim) के अनुरूप शिक्षक जब स्वयं शारीरिक श्रम में भागीदारी करता है, तो बच्चों में श्रम के प्रति सम्मान स्वतः जागृत होता है।',
    'Aligned with Gandhian Nai Talim, a teacher’s participation in manual upkeep instills respect for the dignity of labour and environmental care.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक आचार संहिता” के अनुसार शिक्षक और छात्र के बीच डिजिटल संवाद (जैसे व्हाट्सएप ग्रुप) का उपयोग किस सीमा में होना चाहिए?',
    'Under professional conduct, within what boundaries should teacher-student digital groups (e.g., WhatsApp) operate?',
    ['केवल शैक्षणिक सूचनाओं हेतु, निर्धारित मर्यादित समय में और अभिभावकों की जानकारी/पारदर्शिता के साथ', 'Strictly for academic notices, during appropriate hours, and with parental awareness/transparency'],
    [
      ['देर रात व्यक्तिगत वीडियो कॉल करने हेतु', 'For late-night personal video calls'],
      ['व्यक्तिगत राजनीतिक चुटकुले साझा करने हेतु', 'For forwarding personal political memes'],
      ['अभिभावकों से छिपाकर गुप्त समूह बनाने हेतु', 'In secret groups hidden from parents'],
    ],
    'अभिभावकों के नंबर या विद्यालय के आधिकारिक चैनल से मर्यादित समय में केवल पढ़ाई से जुड़ा संवाद बाल-सुरक्षा और व्यावसायिक सीमा की रक्षा करता है।',
    'Using official channels during reasonable hours for academic purposes—with parental transparency—upholds child safety and professional boundaries.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा गुण शिक्षक को एक “नैतिक अभिकर्ता” (Moral Agent) के रूप में स्थापित करता है?',
    'Which trait establishes a teacher as a true "Moral Agent" in society?',
    ['निजी स्वार्थ से ऊपर उठकर न्याय, सत्य, करुणा और ज्ञान के प्रकाश का प्रसार करना', 'Rising above self-interest to champion truth, justice, compassion, and enlightenment'],
    [
      ['केवल प्रशासनिक आदेशों का यांत्रिक अनुवाद करना', 'Mechanically repeating administrative memos'],
      ['समाज की समस्याओं से पूरी तरह आँखें मूँद लेना', 'Completely ignoring societal challenges'],
      ['शिक्षा को केवल डिग्री बेचने का माध्यम मानना', 'Viewing education merely as selling degrees'],
    ],
    'शिक्षक केवल कर्मचारी नहीं बल्कि भावी नागरिकों के चरित्र और संवेदनशील समाज का निर्माता (Moral Agent) होता है।',
    'Beyond an employee, an educator acts as a moral agent shaping ethical citizenship, compassion, and rational inquiry.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'यदि किसी छात्र की कॉपी जाँचते समय अंक जोड़ने में शिक्षक से गणितीय भूल हो जाए और छात्र विनम्रता से ध्यान दिलाए, तो क्या करना चाहिए?',
    'If a student politely points out an addition error in their graded answer script, what should the teacher do?',
    ['तुरंत पुनः जोड़कर छात्र को धन्यवाद देना और सही अंक सुधारकर दर्ज करना', 'Recalculate immediately, thank the student for vigilance, and update the correct total'],
    [
      ['छात्र को बदतमीज बताकर एक अतिरिक्त अंक काट लेना', 'Call the student disrespectful and deduct an extra mark'],
      ['“जो लिख दिया सो अंतिम है” कहकर मना कर देना', 'Refuse correction saying "what is written is final"'],
      ['कॉपियों को फाड़कर पुनः परीक्षा की धमकी देना', 'Threaten to tear scripts and re-test'],
    ],
    'अपनी लिपिकीय त्रुटि सहजता से सुधारना शिक्षक की निष्पक्षता और छात्र-विश्वास को बढ़ाता है, न कि प्रतिष्ठा को कम करता है।',
    'Promptly correcting an addition error with grace demonstrates fairness and strengthens student trust rather than diminishing authority.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण की नैतिकता” में “प्रकटीकरण की स्पष्टता” (Clarity of Expectations) क्यों आवश्यक है?',
    'Why is "Clarity of Expectations" ethically important in teaching and assessment?',
    ['ताकि प्रत्येक छात्र पहले से जाने कि उससे क्या सीखा जाना और किस मानदंड पर मूल्यांकन होना अपेक्षित है', 'So every learner knows upfront what learning outcomes and evaluation criteria apply'],
    [
      ['ताकि शिक्षक अंतिम समय पर प्रश्न बदल सके', 'So the teacher can spring surprise criteria'],
      ['ताकि केवल कुछ छात्रों को ही नियम पता रहें', 'So only select students know the rules'],
      ['ताकि पाठ्यक्रम अनावश्यक लंबा दिखे', 'To make the syllabus appear longer'],
    ],
    'अस्पष्ट मानदंडों से असुरक्षा और पक्षपात की भावना पनपती है; स्पष्ट उद्देश्य और रूब्रिक सभी को सफल होने का निष्पक्ष अवसर देते हैं।',
    'Transparent objectives and grading criteria remove ambiguity and ensure all learners have an equal, fair shot at success.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक अपने विषय की एक कठिन अवधारणा पढ़ाते समय देखता है कि आधे से अधिक छात्र भ्रमित हैं। व्यावसायिक आचरण क्या कहता है?',
    'While teaching a complex topic, a teacher notices over half the class looks confused. What does professional conduct dictate?',
    ['आगे बढ़ने के बजाय वहीं रुककर वैकल्पिक उदाहरणों, चित्रों या गतिविधि से पुनः स्पष्ट करना', 'Pause advancing, diagnose the confusion, and re-teach using alternative examples, visuals, or activities'],
    [
      ['“मेरा काम बोलना था, समझना तुम्हारी समस्या है” कहकर अगले पाठ पर बढ़ना', 'Move to the next chapter saying "my job is only to lecture"'],
      ['कक्षा को सजा देकर चुपचाप बैठने को कहना', 'Punish the class for not understanding'],
      ['तेजी से ब्लैकबोर्ड पर परिभाषा लिखकर नकल करवाना', 'Rapidly dictate definitions for rote copying'],
    ],
    'शिक्षण का प्रमाण केवल शिक्षक के बोलने से नहीं, बल्कि छात्रों के सीखने (Learning) से होता है; अतः अनुदेशनात्मक समायोजन अनिवार्य है।',
    'Teaching is validated by student comprehension, not mere syllabus coverage; pausing to adapt pedagogy is a core professional duty.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“बाल-केंद्रित नैतिकता” के अनुसार कक्षा में किस प्रश्न का उत्तर “नहीं” होना चाहिए?',
    'According to child-centered ethics, which practice should have NO place in a classroom?',
    ['परीक्षा में कम अंक आने पर छात्र की तुलना उसके सहपाठियों या भाई-बहनों से कर अपमानित करना', 'Humiliating a student for low marks by comparing them negatively to peers or siblings'],
    [
      ['छात्र की अपनी पिछली प्रगति से तुलना कर सुधार दिखाना', 'Comparing a student’s current progress against their own past baseline'],
      ['सीखने की कठिनाई पर व्यक्तिगत परामर्श देना', 'Offering individual guidance on learning gaps'],
      ['त्रुटि विश्लेषण के आधार पर अभ्यास पत्र देना', 'Providing practice tasks based on error analysis'],
    ],
    'छात्र की तुलना दूसरों से करने के बजाय उसकी अपनी पूर्व स्थिति (Ipsative Comparison) से करना आत्म-सम्मान की रक्षा करता है और स्वस्थ प्रगति प्रेरित करता है।',
    'Peer comparisons breed resentment and inferiority; ipsative comparison (tracking growth against a child’s own past baseline) nurtures healthy motivation.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“अंतर-वैयक्तिक सम्मान” (Interpersonal Respect) विद्यालय में किनके मध्य होना चाहिए?',
    'In a school ecosystem, among whom should "Interpersonal Respect" prevail?',
    ['प्रधानाध्यापक, शिक्षक, छात्र, अभिभावक तथा सहायक/सफाई कर्मचारियों सहित संपूर्ण विद्यालय परिवार में', 'Across the entire school community—principals, teachers, students, parents, and support staff alike'],
    [
      ['केवल प्रधानाध्यापक और वरिष्ठ शिक्षकों के बीच', 'Only between the principal and senior teachers'],
      ['केवल छात्रों द्वारा शिक्षकों के प्रति एकतरफा', 'Strictly one-way from students to teachers'],
      ['केवल निरीक्षण के समय अधिकारियों के समक्ष', 'Only before visiting inspectors'],
    ],
    'जब शिक्षक विद्यालय के चतुर्थ श्रेणी या सफाई कर्मी से सम्मान से बात करता है, तो छात्र भी वास्तविक लोकतांत्रिक और मानवीय सम्मान सीखते हैं।',
    'Respecting everyone—including support staff, parents, and children—models authentic human dignity and democratic values.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'किसी शिक्षक द्वारा अपने पद का उपयोग कर विद्यालय की समय-सारणी में जानबूझकर केवल सरल कार्य चुनना और कठिन कक्षाएँ कनिष्ठों पर थोपना क्या दर्शाता है?',
    'A senior teacher misuses seniority to grab only light tasks and dump all difficult classes on junior colleagues. What does this reflect?',
    ['सहकर्मी-नैतिकता और न्यायसंगत कार्य-विभाजन का अभाव', 'Lack of collegial ethics and equitable workload sharing'],
    [
      ['उत्कृष्ट नेतृत्व कौशल', 'Excellent leadership skill'],
      ['बाल-केंद्रित प्रबंधन', 'Child-centered management'],
      ['व्यावसायिक स्वायत्तता का सही उपयोग', 'Proper use of professional autonomy'],
    ],
    'वरिष्ठता का अर्थ मार्गदर्शन और अधिक उत्तरदायित्व होता है, न कि सहकर्मियों का शोषण कर आसान विकल्प चुनना।',
    'Seniority calls for mentorship and shared responsibility, not exploiting junior peers through unfair workload distribution.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक संवेदनशीलता” की दृष्टि से अनाथ, एकल-अभिभावक या प्रवासी मजदूरों के बच्चों के प्रति शिक्षक का आचरण कैसा होना चाहिए?',
    'With professional sensitivity, how should a teacher treat orphans, single-parent children, or migrant workers’ children?',
    ['बिना दया दिखाए या अलग-थलग किए स्थिर भावनात्मक संबल, लचीलापन और अतिरिक्त शैक्षणिक सहारा देना', 'Offer steady emotional support, flexibility, and academic scaffolding without pity or stigmatization'],
    [
      ['“माता-पिता दिवस” पर बार-बार उनके पारिवारिक अभाव की चर्चा करना', 'Repeatedly highlighting their family absence during events'],
      ['स्थानांतरण होने पर अभिलेख देने में अड़चन डालना', 'Delaying transfer documents when migrant families move'],
      ['उनसे कम सीखने की अपेक्षा रखकर अनदेखा करना', 'Neglecting them assuming low academic prospects'],
    ],
    'पारिवारिक संवेदनशीलता रखते हुए विद्यालयी प्रक्रियाओं (जैसे प्रवेश/स्थानांतरण और भावनात्मक सुरक्षा) को सुगम बनाना शिक्षक का नैतिक कर्तव्य है।',
    'Providing emotional stability, smooth administrative support, and high expectations without stigmatization safeguards vulnerable learners.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शैक्षणिक भ्रष्टाचार” का सबसे सूक्ष्म रूप इनमें से कौन-सा है जिसे शिक्षक को पहचानकर दूर रहना चाहिए?',
    'Which of the following is a subtle form of "Academic Corruption" that teachers must recognize and avoid?',
    ['अपनी ही कक्षा के छात्रों को अतिरिक्त ग्रेड का लालच देकर अपने निजी कोचिंग में बुलाना', 'Luring one’s own classroom students into paid coaching with hints of extra marks or exam tips'],
    [
      ['विद्यालय में निःशुल्क अतिरिक्त प्रश्न हल कराना', 'Solving extra practice problems free of charge at school'],
      ['अभिभावकों को सरकारी छात्रवृत्ति की जानकारी देना', 'Informing parents about government scholarships'],
      ['छात्रों को स्थानीय पुस्तकालय का सदस्य बनने को कहना', 'Encouraging students to join a public library'],
    ],
    'कक्षा में जानबूझकर अधूरा पढ़ाकर छात्रों को निजी ट्यूशन/कोचिंग के लिए बाध्य करना या अंकों का प्रलोभन देना गंभीर व्यावसायिक व नैतिक अपराध है।',
    'Deliberately under-teaching in class or dangling grade favors to funnel students into paid tutoring is a severe ethical violation.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“साक्ष्याधारित शिक्षण” (Evidence-Based Teaching) अपनाने वाला शिक्षक किस प्रकार का व्यावसायिक आचरण दिखाता है?',
    'A teacher practicing "Evidence-Based Teaching" demonstrates what kind of professional habit?',
    ['छात्रों के आकलन डेटा और शैक्षिक शोध के आधार पर शिक्षण रणनीतियों का चयन एवं सुधार करना', 'Selecting and refining instructional strategies based on student assessment data and educational research'],
    [
      ['केवल सुनी-सुनाई बातों और रूढ़ धारणाओं के आधार पर पढ़ाना', 'Teaching strictly by hearsay and unexamined habits'],
      ['किसी भी नवीन शोध को अस्वीकार करना', 'Rejecting all educational research'],
      ['बिना जाँच के छात्रों को उत्तीर्ण/अनुत्तीर्ण घोषित करना', 'Deciding pass/fail without data'],
    ],
    'अधिगम साक्ष्यों (जैसे त्रुटि पैटर्न, रचनात्मक आकलन) के आधार पर निर्णय लेना शिक्षक के कार्य को वैज्ञानिक और उत्तरदायी बनाता है।',
    'Using formative assessment evidence and validated pedagogical research makes classroom practice systematic, effective, and accountable.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“विद्यालय स्वच्छता एवं स्वास्थ्य” के संदर्भ में शिक्षक की दैनिक नैतिक भूमिका क्या है?',
    'What is a teacher’s daily ethical role regarding "School Hygiene and Health"?',
    ['हाथ धोने, स्वच्छ पेयजल और शौचालय उपयोग की अच्छी आदतों का अभ्यास कराना तथा स्वयं पालन करना', 'Instilling habits of handwashing, safe drinking water, and toilet hygiene while modeling them personally'],
    [
      ['यह केवल स्वास्थ्य विभाग का कार्य बताकर अनदेखा करना', 'Ignoring it as solely the health department’s job'],
      ['गंदे शौचालयों की समस्या कभी प्रबंधन को न बताना', 'Never reporting broken sanitation to management'],
      ['स्वच्छता के लिए केवल गरीब छात्रों से सफाई कराना', 'Making only underprivileged children clean'],
    ],
    'स्वच्छ भारत-स्वच्छ विद्यालय अभियान में शिक्षक बच्चों में स्वच्छता की जीवन-आदतें विकसित करने और सुरक्षित परिवेश सुनिश्चित करने का मुख्य सूत्रधार है।',
    'Promoting daily hygiene habits (WASH) and maintaining clean, safe facilities protects child health and attendance.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक जब विद्यालय की समय-सारणी और सहकर्मियों की सुविधा के बीच संतुलन बनाने हेतु आपसी सहमति से कार्य समायोजित करता है, तो यह क्या दर्शाता है?',
    'When a teacher cooperatively adjusts schedule slots by mutual consent to accommodate school needs and colleagues, what does it show?',
    ['व्यावसायिक लचीलापन एवं सहयोगात्मक आचरण', 'Professional flexibility and collaborative spirit'],
    [
      ['प्रशासनिक कमजोरी', 'Administrative weakness'],
      ['व्यक्तिगत स्वार्थ', 'Personal selfishness'],
      ['समय-सारणी का उल्लंघन', 'Breach of timetable rules'],
    ],
    'सौहार्दपूर्ण सहयोग विद्यालय प्रशासन को सुचारू बनाता है और सहकर्मियों के मध्य विश्वास को बढ़ाता है।',
    'Constructive flexibility and mutual adjustment among staff keep school operations smooth and collegial.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“नैतिक संहिता” केवल बाह्य नियमों का संग्रह न रहकर शिक्षक का स्वभाव कब बनती है?',
    'When does a Code of Ethics cease to be a mere external rulebook and become a teacher’s true character?',
    ['जब शिक्षक मूल्यों को अंतःकरण से आत्मसात (Internalize) कर स्वतः प्रेरित होकर आचरण करे', 'When the teacher internalizes ethical values and practices them from inner conviction'],
    [
      ['जब प्रत्येक कक्षा में निरीक्षण कैमरा लगा हो', 'Only when surveillance cameras are installed in every room'],
      ['जब वेतन वृद्धि केवल नैतिक निबंध लिखने पर हो', 'When increments depend on writing moral essays'],
      ['जब कठोर जुर्माने का निरंतर डर बना रहे', 'When driven solely by fear of heavy fines'],
    ],
    'बाहरी निगरानी के बिना भी आंतरिक प्रतिबद्धता से सही आचरण करना (Internalization of Values) नैतिक परिपक्वता का सर्वोच्च स्तर है।',
    'Ethical maturity occurs when moral standards are internalized and practiced authentically without needing external policing.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी छात्र के अभिभावक ने गुस्से में विद्यालय आकर ऊँची आवाज में शिकायत की। शिक्षक का व्यावसायिक आचरण कैसा होना चाहिए?',
    'An upset parent arrives at school complaining loudly. How should a teacher respond professionally?',
    ['शांत रहकर अभिभावक को बैठने का अनुरोध करना, उनकी पूरी बात सुनना और तथ्यों के साथ समाधान प्रस्तुत करना', 'Stay calm, invite the parent to sit, listen attentively, and address the issue respectfully with facts'],
    [
      ['अभिभावक से भी अधिक तेज आवाज में बहस करना', 'Argue back even louder than the parent'],
      ['तुरंत छात्र को बुलाकर अभिभावक के सामने पीटना', 'Summon and hit the student in front of the parent'],
      ['सुरक्षाकर्मी को बुलाकर बिना सुने बाहर निकलवा देना', 'Have them thrown out without hearing the concern'],
    ],
    'क्रोध का उत्तर शांति और सक्रिय श्रवण से देने पर तनाव तुरंत कम होता है तथा विद्यालय की परिपक्व छवि बनती है।',
    'Meeting anger with calm attentiveness and factual problem-solving de-escalates conflict and upholds institutional dignity.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से कौन-सा व्यवहार शिक्षक की “पेशेवर पहचान” (Professional Identity) को मजबूत करता है?',
    'Which practice strengthens a teacher’s "Professional Identity"?',
    ['शैक्षिक लेखन, नवाचारों का दस्तावेजीकरण, कार्यशाला सहभागिता और बाल-केंद्रित समर्पण', 'Reflective writing, documenting innovations, attending workshops, and child-centered dedication'],
    [
      ['शिक्षण कार्य को मजबूरी का अंतिम विकल्प बताना', 'Referring to teaching as a forced last resort'],
      ['अन्य सरकारी विभागों में स्थानांतरण हेतु कक्षा उपेक्षा करना', 'Neglecting class while lobbying for non-teaching posts'],
      ['छात्रों की क्षमता पर सदैव निराशा व्यक्त करना', 'Constantly expressing cynicism about student potential'],
    ],
    'जो शिक्षक अपने पेशे पर गर्व करता है और ज्ञान-सृजन से जुड़ता है, वह समाज में भी शिक्षक वर्ग का सम्मान बढ़ाता है।',
    'Educators who take pride in pedagogical inquiry, continuous learning, and student advocacy elevate the standing of the entire profession.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शैक्षणिक ईमानदारी” के संदर्भ में विद्यालय स्तर पर प्रमाणपत्र या चरित्र प्रमाणपत्र जारी करते समय शिक्षक/प्रधानाध्यापक का क्या कर्तव्य है?',
    'Regarding institutional integrity, what is the duty when issuing school records or character certificates?',
    ['केवल अभिलेखों के अनुरूप सत्य और निष्पक्ष प्रमाणन करना', 'Certifying truthfully and impartially based strictly on verified school records'],
    [
      ['किसी प्रभावशाली व्यक्ति के कहने पर गलत जन्मतिथि या उपस्थिति प्रमाणित करना', 'Altering birthdates or attendance figures on influential requests'],
      ['चरित्र प्रमाणपत्र के लिए अनौपचारिक शुल्क वसूलना', 'Charging unofficial fees for issuing certificates'],
      ['असहमति वाले मेधावी छात्र को जानबूझकर नकारात्मक चरित्र प्रमाणपत्र देना', 'Issuing an unfair negative remark to spite a bright student'],
    ],
    'शैक्षिक प्रमाणपत्र कानून और जीवन भर की साख से जुड़े होते हैं; उनमें कोई भी छेड़छाड़ या प्रतिशोध गंभीर कदाचार है।',
    'School certificates carry lifelong legal weight; altering facts under pressure or out of spite is grave misconduct.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“कल्याणकारी शिक्षक” की अवधारणा में शिक्षक केवल बौद्धिक विकास ही नहीं, बल्कि किस पर भी समान ध्यान देता है?',
    'In holistic education, a conscientious teacher attends equally to intellectual growth and what else?',
    ['छात्रों के संवेगात्मक, सामाजिक, शारीरिक और नैतिक कल्याण पर', 'Students’ emotional, social, physical, and ethical well-being'],
    [
      ['केवल परीक्षा शुल्क की वसूली पर', 'Only exam fee collection'],
      ['केवल रटने की गति मापने पर', 'Measuring only memorization speed'],
      ['केवल विद्यालय के रंग-रोगन पर', 'Only wall painting aesthetics'],
    ],
    'समग्र विकास (Holistic Development) में संज्ञानात्मक कौशल के साथ-साथ संवेगात्मक सुरक्षा, नैतिक मूल्य और स्वास्थ्य भी अभिन्न अंग हैं।',
    'Holistic education pairs cognitive growth with emotional safety, social skills, physical health, and moral development.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक कक्षा में किसी छात्र द्वारा पूछे गए संवेदनशील विषय (जैसे किशोरावस्था में शारीरिक/मानसिक परिवर्तन) पर हँसने के बजाय वैज्ञानिक व मर्यादित उत्तर देता है। यह क्या दर्शाता है?',
    'When a student asks about a sensitive topic like adolescent physical or emotional changes, a teacher gives a scientific, dignified answer instead of laughing or scolding. What does this reflect?',
    ['परिपक्व व्यावसायिकता एवं जीवन-कौशल आधारित मार्गदर्शन', 'Mature professionalism and life-skills-oriented guidance'],
    [
      ['अशिष्टता को बढ़ावा', 'Encouraging indecency'],
      ['पाठ्यक्रम का उल्लंघन', 'Violation of curriculum'],
      ['धार्मिक भावना का अनादर', 'Disrespect to traditions'],
    ],
    'किशोरावस्था शिक्षा कार्यक्रम (Adolescence Education Programme) के तहत वैज्ञानिक एवं संवेदनशील जानकारी देना छात्रों को भ्रामक स्रोतों और शोषण से बचाता है।',
    'Providing accurate, respectful guidance on adolescent development protects learners from misinformation and builds healthy life skills.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“सतत सुधार की संस्कृति” बनाने के लिए शिक्षक को अपनी असफल शिक्षण योजना के प्रति कैसा रुख रखना चाहिए?',
    'To foster a culture of continuous improvement, how should a teacher view an unsuccessful lesson plan?',
    ['उसका विश्लेषण कर कारण समझना और अगली बार बेहतर विधि से पुनः प्रयास करना', 'Analyze why it fell short and redesign it with improved strategies for the next attempt'],
    [
      ['असफलता के लिए छात्रों की बुद्धि को कोसना', 'Blame students’ intelligence for the lesson failure'],
      ['दोबारा कभी कोई नई गतिविधि न करने का प्रण लेना', 'Vow never to try new activities again'],
      ['झूठी रिपोर्ट लिख देना कि पाठ अत्यंत सफल रहा', 'Falsify logs claiming the lesson was a huge success'],
    ],
    'असफल पाठ एक निदानात्मक संकेत है जो शिक्षक को बताता है कि अवधारणा और छात्र के बीच कौन-सी कड़ी कमजोर रही; विश्लेषण से व्यावसायिक कौशल बढ़ता है।',
    'Treating a weak lesson as diagnostic data rather than a reason to blame learners drives authentic pedagogical refinement.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शिक्षक की नैतिक संहिता” का छात्र के मानवाधिकारों (UNCRC) से क्या सीधा संबंध है?',
    'How does a teacher’s Code of Ethics directly relate to the UN Convention on the Rights of the Child (UNCRC)?',
    ['दोनों बच्चे के सर्वोत्तम हित, भेदभाव-मुक्ति, सुरक्षा और अभिव्यक्ति के अधिकार की रक्षा करते हैं', 'Both uphold the child’s best interests, non-discrimination, protection from harm, and right to voice'],
    [
      ['दोनों केवल उच्च शिक्षा के लिए लागू होते हैं', 'Both apply solely to higher education'],
      ['UNCRC शिक्षकों को दंड देने की छूट देता है', 'UNCRC authorizes corporal punishment'],
      ['दोनों का प्राथमिक विद्यालय से कोई संबंध नहीं है', 'Neither applies to primary schools'],
    ],
    'संयुक्त राष्ट्र बाल अधिकार समझौता (UNCRC 1989) जिन चार स्तंभों (जीवित रहने, विकास, संरक्षण और सहभागिता) पर टिका है, शिक्षक की नैतिक संहिता उन्हीं को कक्षा में लागू करती है।',
    'Teacher ethics operationalize UNCRC principles—survival, development, protection from violence, and child participation—within everyday classrooms.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'जब विद्यालय में किसी विशेष समुदाय के बच्चे नियमित रूप से अनुपस्थित रहने लगें, तो एक जिम्मेदार शिक्षक का प्रथम प्रयास क्या होगा?',
    'When children from a specific marginalized community begin showing frequent absenteeism, what is a responsible teacher’s first step?',
    ['समुदाय/घर जाकर आत्मीय संवाद द्वारा कारण जानना (जैसे मौसमी पलायन या भाषा बाधा) और समाधान खोजना', 'Visit the community empathetically to identify barriers (like seasonal migration or language gaps) and find solutions'],
    [
      ['उनके नाम तुरंत पंजिका से काट देना', 'Strike their names off the roll immediately'],
      ['यह मानना कि वे पढ़ना ही नहीं चाहते', 'Assume they simply lack interest in education'],
      ['अन्य छात्रों के सामने उनका उपहास करना', 'Ridicule them in front of regular attendees'],
    ],
    'ड्रॉपआउट (Dropout) रोकने के लिए गृह-संपर्क, लचीली सहायता और सांस्कृतिक संवेदनशीलता सर्वाधिक प्रभावी उपाय हैं।',
    'Empathetic home visits and targeted bridges for seasonal or linguistic barriers are vital to preventing dropout among marginalized groups.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक नैतिकता” के संदर्भ में किसी भी नए शैक्षिक नवाचार का मूल्यांकन शिक्षक को किस कसौटी पर करना चाहिए?',
    'In professional ethics, on what criterion should a teacher judge any new pedagogical innovation?',
    ['क्या यह प्रत्येक छात्र की समझ, जिज्ञासा और कल्याण को वास्तविक रूप से बढ़ाता है?', 'Does it genuinely enhance understanding, curiosity, and well-being for every learner?'],
    [
      ['क्या यह केवल दिखावटी फोटो और प्रचार के लिए अच्छा दिखता है?', 'Does it merely look flashy for publicity photos?'],
      ['क्या इससे शिक्षक का कार्यभार शून्य हो जाता है?', 'Does it reduce teacher effort to zero?'],
      ['क्या यह सबसे महँगा तकनीकी उपकरण है?', 'Is it the most expensive gadget available?'],
    ],
    'सच्चा नवाचार प्रचार या दिखावे के लिए नहीं, बल्कि शिक्षार्थी के सीखने और सहभागिता को गहरा करने के लिए होता है।',
    'Authentic educational innovation is measured by real gains in learner comprehension, curiosity, and inclusion rather than cosmetic publicity.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक कक्षा में एक ही छात्र को बार-बार “मॉनिटर” बनाता है और अन्य छात्रों को नेतृत्व का अवसर नहीं देता। इसमें क्या सुधार अपेक्षित है?',
    'A teacher repeatedly appoints the same student as class monitor, denying others leadership experience. What correction is needed?',
    ['रोटेशन (बारी-बारी) प्रणाली अपनाकर प्रत्येक छात्र को नेतृत्व और जिम्मेदारी का अवसर देना', 'Adopt a rotational system giving every student opportunities for leadership and responsibility'],
    [
      ['मॉनिटर पद पर केवल सबसे धनी छात्र को रखना', 'Keep only the wealthiest student as monitor'],
      ['मॉनिटर से अन्य छात्रों की पिटाई कराना', 'Allow the monitor to punish peers'],
      ['कक्षा की सभी जिम्मेदारियाँ समाप्त कर देना', 'Abolish all student responsibilities'],
    ],
    'नेतृत्व जन्मजात एकाधिकार नहीं है; बारी-बारी से अवसर मिलने से संकोची व पिछड़े छात्रों में भी आत्मविश्वास व दायित्व-बोध विकसित होता है।',
    'Rotating monitor duties democratizes leadership, helping shy and diverse learners build confidence and responsibility.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“शिक्षण आचार संहिता” के अनुसार किसी अन्य शिक्षक की अनुपस्थिति में उसकी कक्षा के छात्रों द्वारा उस शिक्षक की शिकायत करने पर आपका व्यवहार क्या होना चाहिए?',
    'If students complain about an absent colleague during your class, what is the ethical response?',
    ['सार्वजनिक निंदा या उकसावे से बचते हुए छात्र की बात शांति से सुनकर उचित आंतरिक चैनल से समाधान कराना', 'Avoid public backbiting or incitement; listen calmly and channel genuine concerns appropriately'],
    [
      ['छात्रों के सामने उस सहकर्मी का मजाक उड़ाना', 'Mock the absent colleague before the students'],
      ['छात्रों को उस शिक्षक के विरुद्ध नारे लगाने को कहना', 'Urge students to protest against that teacher'],
      ['छात्रों को बिना कुछ सुने डांटकर चुप कराना', 'Silence students harshly without listening'],
    ],
    'सहकर्मी की गरिमा की रक्षा करते हुए भी छात्रों की वास्तविक समस्या को अनदेखा नहीं किया जाना चाहिए; संतुलित और गोपनीय समाधान ही पेशेवर रास्ता है।',
    'Upholding collegial dignity while ensuring genuine student grievances are channeled privately to appropriate authorities balances ethics on both sides.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“सतत शैक्षणिक जवाबदेही” का सही उदाहरण कौन-सा है?',
    'Which of the following is an accurate example of "Continuous Educational Accountability"?',
    ['आकलन परिणामों का विश्लेषण कर स्वयं की शिक्षण रणनीतियों में परिवर्तन लाना और अभिभावकों से साझा करना', 'Analyzing assessment results to refine one’s own teaching strategies and sharing progress with parents'],
    [
      ['केवल वर्ष में एक बार वार्षिक परीक्षा कराकर कर्तव्य पूरा मान लेना', 'Treating one annual exam as the sole accountability task'],
      ['निम्न परिणाम के लिए सदैव छात्रों की पारिवारिक पृष्ठभूमि को दोषी मानना', 'Always blaming family background for low learning levels'],
      ['बिना जाँचे अभ्यास पुस्तिकाओं पर “देखा” लिख देना', 'Writing "Seen" on notebooks without checking'],
    ],
    'जवाबदेही का अर्थ दूसरों को दोष देने के बजाय परिणामों के स्वामित्व के साथ निरंतर सुधारात्मक कार्यवाही करना है।',
    'True accountability means owning student outcomes, using data to adapt teaching, and maintaining transparent communication with families.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'किसी छात्र के लेखन या बोलने में तुतलाहट/हकलाने की समस्या होने पर शिक्षक और सहपाठियों का संवेदनशील आचरण क्या होना चाहिए?',
    'If a student stammers or has a speech impediment, what is the sensitive conduct expected of the teacher and peers?',
    ['बिना टोके या वाक्य पूरा किए धैर्यपूर्वक बोलने का पूरा समय देना और सहपाठियों में सम्मान विकसित करना', 'Give unhurried time to finish speaking without interrupting or finishing sentences, and foster peer respect'],
    [
      ['जल्दी बोलने के लिए दबाव डालना या वाक्य छीन लेना', 'Pressure the child to speak faster or finish sentences for them'],
      ['मौखिक गतिविधियों से छात्र को स्थायी रूप से अलग कर देना', 'Exclude the child permanently from oral activities'],
      ['नकल उतारने वाले सहपाठियों को अनदेखा करना', 'Ignore peers who mimic the stammer'],
    ],
    'धैर्यपूर्वक सुनना और हँसी पर रोक लगाना बोलने में कठिनाई वाले बच्चे का आत्मविश्वास बढ़ाता है और उसकी सामाजिक चिंता को कम करता है।',
    'Patient, unhurried listening without interruption or mockery reduces speech anxiety and affirms the learner’s right to expression.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“पेशेवर ईमानदारी” के तहत जब कोई शिक्षक विद्यालय निधि से शिक्षण सामग्री खरीदता है, तो उसे क्या सुनिश्चित करना चाहिए?',
    'Under professional integrity, when a teacher purchases TLM using school funds, what must be ensured?',
    ['गुणवत्तापूर्ण सामग्री की उचित दर पर खरीद, वास्तविक बिल/वाउचर और SMC/अभिलेख में पारदर्शी प्रविष्टि', 'Fair-price quality procurement, genuine bills/vouchers, and transparent entry in stock/SMC records'],
    [
      ['कम गुणवत्ता का सामान खरीदकर बचाई राशि स्वयं रख लेना', 'Buying inferior items and pocketing the difference'],
      ['बिना बिल के अनुमानित राशि दर्ज कर देना', 'Recording estimated expenses without receipts'],
      ['सामग्री विद्यालय में रखने के बजाय घर ले जाना', 'Taking school-funded supplies home'],
    ],
    'सार्वजनिक धन के उपयोग में वित्तीय शुचिता, गुणवत्ता और प्रलेखीय पारदर्शिता प्रत्येक लोक सेवक और शिक्षक का अनिवार्य कर्तव्य है।',
    'Financial integrity requires quality procurement at fair cost, authentic vouchers, and transparent stock-register documentation.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“डिजिटल शिक्षण सामग्री” साझा करते समय शिक्षक को किस सुरक्षा मानक का ध्यान रखना चाहिए?',
    'What safety standard should a teacher observe when recommending digital learning videos or links to students?',
    ['लिंक की पूर्व-समीक्षा (Pre-screening) कर आयु-उपयुक्त, तथ्यपरक और सुरक्षित सामग्री ही साझा करना', 'Pre-screening links to ensure content is age-appropriate, factually accurate, and safe'],
    [
      ['बिना देखे कोई भी वायरल वीडियो कक्षा ग्रुप में भेज देना', 'Forwarding unverified viral videos without previewing'],
      ['विज्ञापन और असुरक्षित वेबसाइटों के लिंक साझा करना', 'Sharing ad-heavy or unsafe third-party websites'],
      ['गैर-तथ्यात्मक अफवाहों को पाठ्यक्रम मान लेना', 'Treating unverified rumors as educational facts'],
    ],
    'ऑनलाइन वातावरण में बच्चों को गलत सूचना और अनुपयुक्त सामग्री से बचाना शिक्षक की डिजिटल सुरक्षा जिम्मेदारी (Digital Safeguarding) है।',
    'Pre-screening digital resources protects learners from misinformation, inappropriate ads, and unsafe online spaces.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'निम्नलिखित में से किस कार्य को शिक्षक के “सामाजिक एवं राष्ट्रीय कर्तव्य” के अंतर्गत रखा जाएगा?',
    'Which of the following falls under a teacher’s "Social and National Duty"?',
    ['संवैधानिक मूल्यों—समता, स्वतंत्रता, बंधुत्व और पर्यावरण संरक्षण—का छात्रों में व्यावहारिक विकास करना', 'Cultivating constitutional values—equality, liberty, fraternity, and environmental care—in daily student life'],
    [
      ['क्षेत्रवाद व भाषावाद को बढ़ावा देना', 'Promoting regionalism and linguistic hostility'],
      ['केवल उच्च अंकों के लिए यांत्रिक प्रशिक्षण देना', 'Mechanical drilling solely for marks'],
      ['स्थानीय समुदाय से संवाद पूरी तरह बंद करना', 'Severing all dialogue with the local community'],
    ],
    'शिक्षक भविष्य के नागरिकों को तैयार करता है; संवैधानिक नैतिकता (Constitutional Morality) का पोषण उसका सर्वोच्च सामाजिक दायित्व है।',
    'Nurturing constitutional morality—equality, justice, fraternity, and ecological stewardship—is an educator’s highest civic duty.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'जब किसी छात्र की अभ्यास पुस्तिका जाँचने के बाद शिक्षक उस पर “अच्छा प्रयास, पर इस चरण को पुनः देखो” लिखता है, तो यह किस प्रकार के व्यावसायिक कौशल को दर्शाता है?',
    'When a teacher writes "Good effort; review this step again" on a notebook, which professional skill does it show?',
    ['सकारात्मक एवं सुधारात्मक रचनात्मक प्रतिपुष्टि (Constructive Formative Feedback)', 'Positive and corrective formative feedback'],
    [
      ['व्यर्थ की औपचारिकता', 'Empty formality'],
      ['अस्पष्ट और हतोत्साहित करने वाली टिप्पणी', 'Vague and discouraging remark'],
      ['योगात्मक निर्णय (Summative Verdict)', 'Summative verdict'],
    ],
    'सैंडविच फीडबैक (सकारात्मक पहलू + स्पष्ट सुधार बिंदु) छात्र के मनोबल को बनाए रखते हुए उसे सही दिशा दिखाता है।',
    'Constructive feedback affirms effort while pinpointing the exact step needing revision, sustaining motivation and clarity.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शिक्षण आचार संहिता” के अनुसार शिक्षक को अपने छात्र के प्रति किस प्रकार का दृष्टिकोण त्यागना चाहिए?',
    'According to the Code of Professional Ethics, what attitude toward students must a teacher abandon?',
    ['“यह छात्र कभी नहीं सुधर सकता” जैसी स्थायी निराशावादी या नियतिवादी धारणा (Fixed Mindset)', 'Fatalistic labeling such as "this student can never improve" (fixed mindset)'],
    [
      ['प्रत्येक छात्र में सीखने की संभावना देखने का विश्वास', 'Belief in every student’s capacity to grow'],
      ['कठिन प्रयास और रणनीति पर जोर', 'Emphasis on effort and learning strategies'],
      ['निदानात्मक एवं उपचारात्मक सहयोग', 'Diagnostic and remedial support'],
    ],
    'प्रत्येक बच्चे की शिक्षणीयता (Educability) में विश्वास रखना शिक्षक होने की पहली नैतिक शर्त है; किसी बच्चे पर अयोग्यता की मुहर लगाना शिक्षण की हार है।',
    'Faith in every child’s educability is fundamental to teaching; fatalistic labeling violates professional hope and responsibility.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'यदि एक शिक्षक बिना कारण के कक्षा की परीक्षा की तिथि बार-बार टालता रहता है और तैयार सामग्री समय पर नहीं देता, तो छात्रों में क्या प्रभावित होता है?',
    'If a teacher repeatedly postpones scheduled tests without reason and delays study materials, what is harmed?',
    ['संस्थागत विश्वसनीयता, छात्रों की समय-प्रबंधन आदत और शैक्षणिक अनुशासन', 'Institutional reliability, students’ study planning, and academic discipline'],
    [
      ['छात्रों की रचनात्मकता अत्यधिक बढ़ती है', 'Student creativity skyrockets'],
      ['परीक्षा का तनाव हमेशा के लिए समाप्त हो जाता है', 'Exam anxiety vanishes permanently'],
      ['शिक्षक की लोकप्रियता दीर्घकाल तक बढ़ती है', 'Teacher’s long-term credibility improves'],
    ],
    'नियोजित समय-सारणी और समयबद्ध आकलन छात्रों को अनुशासित योजना बनाने में मदद करते हैं; अनियमितता से अराजकता और अविश्वास पैदा होता है।',
    'Predictable schedules and timely assessments help learners plan responsibly; erratic delays erode trust and academic discipline.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“लोकतांत्रिक नैतिकता” के अनुसार विद्यालय में छात्रों के सुझाव पेटिका (Suggestion Box) लगाने का क्या लाभ है?',
    'Under democratic school ethics, what is the benefit of installing a student Suggestion Box?',
    ['संकोची छात्रों को भी भयमुक्त होकर अपनी समस्याएँ व रचनात्मक सुझाव साझा करने का सुरक्षित माध्यम मिलता है', 'Even hesitant learners gain a safe, fear-free channel to voice concerns and constructive ideas'],
    [
      ['छात्र एक-दूसरे की झूठी शिकायतें लिखकर झगड़ते हैं', 'It only encourages false complaints'],
      ['शिक्षकों को कक्षा में पढ़ाना बंद करना पड़ता है', 'Teachers stop teaching'],
      ['प्रधानाध्यापक के अधिकार समाप्त हो जाते हैं', 'The principal loses authority'],
    ],
    'सुझाव पेटिका (जब उस पर गंभीरता से कार्यवाही हो) छात्र की आवाज (Student Voice) को सम्मान देती है और संभावित बुलीइंग या असुविधा को समय पर उजागर करती है।',
    'When acted upon sincerely, a suggestion box honors student voice and helps surface hidden issues like bullying or facility gaps early.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'निम्नलिखित में से कौन-सा कथन शिक्षक के “व्यावसायिक आचरण” को सबसे सटीक रूप से परिभाषित करता है?',
    'Which statement most accurately defines a teacher’s "Professional Conduct"?',
    ['ज्ञान, कौशल, संवेदनशीलता और नैतिक मूल्यों का वह समन्वित व्यवहार जो छात्र, समाज और पेशे के प्रति दायित्व पूरा करे', 'Integrated behavior combining knowledge, skill, empathy, and ethics to fulfill duties to learners, society, and the profession'],
    [
      ['केवल वेतन प्राप्त करने हेतु निर्धारित घंटे विद्यालय में बिताना', 'Merely spending fixed hours at school to earn a salary'],
      ['केवल पुस्तकों की भाषा का यांत्रिक दोहराव करना', 'Mechanically repeating textbook text'],
      ['प्रशासन के सामने सदैव मौन रहकर केवल रजिस्टर भरना', 'Silently filling registers without engaging learners'],
    ],
    'व्यावसायिक आचरण केवल तकनीकी दक्षता नहीं है, बल्कि यह मानवीय संवेदनशीलता, नैतिक निष्ठा और सामाजिक उद्देश्य का जीवंत संगम है।',
    'Professional conduct integrates pedagogical competence, ethical integrity, empathy, and social accountability into everyday practice.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“बाल-संरक्षण नीति” (Child Protection Policy) के अंतर्गत किसी बाहरी व्यक्ति द्वारा विद्यालय परिसर में छात्रों के साथ बिना अनुमति फोटोग्राफी करने पर शिक्षक को क्या करना चाहिए?',
    'Under child protection norms, if an outsider takes photos of students on campus without authorization, what should a teacher do?',
    ['तुरंत रोककर प्रधानाध्यापक को सूचित करना और बच्चों की निजता व सुरक्षा सुनिश्चित करना', 'Immediately intervene, inform the school head, and safeguard students’ privacy and safety'],
    [
      ['बच्चों को कैमरे के सामने मुस्कुराने के लिए कहना', 'Ask students to pose and smile for the outsider'],
      ['यह मानकर अनदेखा करना कि वह कोई पत्रकार होगा', 'Ignore it assuming the person is a journalist'],
      ['छात्रों के घर का पता भी बाहरी व्यक्ति को दे देना', 'Share students’ home addresses with the stranger'],
    ],
    'छात्रों की सुरक्षा और छवि की निजता (Privacy) विद्यालय की जिम्मेदारी है; बिना प्रधानाध्यापक और अभिभावक की सहमति के बाहरी फोटोग्राफी की अनुमति नहीं दी जा सकती।',
    'Protecting campus safety and student privacy prohibits unauthorized photography by outsiders without official and parental consent.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक कक्षा में प्रश्नों के उत्तर देने के लिए केवल आगे की कतार के छात्रों को ही बार-बार चुनता है। इसे किस नाम से जाना जाता है और इसका नैतिक समाधान क्या है?',
    'A teacher repeatedly calls only on front-row students to answer questions. What is this bias and its ethical remedy?',
    ['ध्यान-क्षेत्र पूर्वाग्रह (Action Zone Bias); समाधान: कक्ष में घूमकर और नाम-पर्चियों/रोटेशन से सभी को अवसर देना', 'Action Zone Bias; remedy: circulating around the room and using equitable turn-taking across all rows'],
    [
      ['हॉलो इफेक्ट; समाधान: केवल सबसे तेज छात्र से पूछना', 'Halo effect; remedy: asking only the fastest student'],
      ['प्रोजेक्शन; समाधान: कक्षा की परीक्षा रद्द करना', 'Projection; remedy: cancelling exams'],
      ['संवेदी स्मृति; समाधान: आगे की कतार हटा देना', 'Sensory memory; remedy: removing front desks'],
    ],
    'कक्षा का “टी-ज़ोन” (T-Zone / Action Zone) आगे और बीच की सीटें होती हैं; एक निष्पक्ष शिक्षक पीछे और कोनों में बैठे छात्रों को भी समान रूप से शामिल करता है।',
    'The "Action Zone" bias favors front-center seats; ethical teachers circulate and distribute participation equitably across every corner of the room.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“शैक्षणिक ईमानदारी” की रक्षा के लिए शिक्षक को समूह-परियोजना (Group Project) का मूल्यांकन कैसे करना चाहिए?',
    'To uphold fairness in Group Projects, how should a teacher assess student work?',
    ['सामूहिक उत्पाद के साथ-साथ प्रत्येक सदस्य की व्यक्तिगत भागीदारी और समझ का भी आकलन करना', 'Assessing both the shared group product and each member’s individual contribution and understanding'],
    [
      ['केवल समूह के सबसे मुखर छात्र की बात मानकर सभी को समान अंक देना', 'Giving identical marks based solely on the loudest member'],
      ['समूह कार्य का मूल्यांकन पूरी तरह बंद कर देना', 'Completely banning group projects'],
      ['केवल सजावट पर अंक देकर विषयवस्तु छोड़ देना', 'Grading only decoration while ignoring content'],
    ],
    'समूह परियोजना में “सोशल लोफिंग” (Social Loafing—कुछ छात्रों का काम न करना) रोकने के लिए व्यक्तिगत भूमिका और मौखिक जांच शामिल करना न्यायसंगत है।',
    'Evaluating both collaborative output and individual accountability prevents "social loafing" and ensures fair grading.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    'एक शिक्षक जब अपनी कक्षा में असफलताओं पर चिंतन करते समय “बाह्य आरोपण” (External Attribution) के बजाय “आंतरिक जिम्मेदारी” (Internal Responsibility) लेता है, तो वह क्या सोचता है?',
    'When a teacher takes "Internal Responsibility" rather than external blame for class struggles, what does that sound like?',
    ['“क्या मेरी व्याख्या या उदाहरण छात्रों के स्तर के अनुरूप थे? मैं इसे कैसे बेहतर समझा सकता हूँ?”', '"Were my explanations and examples matched to learners’ readiness? How can I teach this better?"'],
    [
      ['“ये बच्चे ही मंदबुद्धि हैं, इन्हें कोई नहीं पढ़ा सकता।”', '"These children are dull; nobody can teach them."'],
      ['“सरकार का पाठ्यक्रम ही बेकार है, पढ़ाने से क्या लाभ।”', '"The syllabus is useless; why bother teaching well."'],
      ['“अभिभावक अनपढ़ हैं इसलिए मैं कुछ नहीं कर सकता।”', '"Parents are illiterate so I am helpless."'],
    ],
    'शिक्षक प्रभावकारिता (Teacher Efficacy) उच्च होने पर शिक्षक स्वयं की रणनीति में सुधार की संभावना देखता है, न कि परिस्थितियों का रोना रोता है।',
    'High teacher efficacy focuses on controllable instructional adjustments rather than fatalistically blaming learners or families.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“अभिभावक सहभागिता” में शिक्षक को किस सामाजिक संवेदनशीलता का विशेष ध्यान रखना चाहिए जब माता-पिता दैनिक मजदूरी करते हों?',
    'When students’ parents are daily-wage earners, what social sensitivity should guide PTM scheduling?',
    ['अभिभावकों की कार्य-सुविधा के अनुसार लचीला समय रखना तथा उनकी उपस्थिति न हो पाने पर दंड या भेदभाव न करना', 'Keep flexible meeting windows respecting work hours and never penalize children if parents cannot attend'],
    [
      ['अनुपस्थित रहने वाले माता-पिता के बच्चे को कक्षा में खड़ा रखना', 'Punish the child in class if parents miss the meeting'],
      ['केवल दोपहर 12 बजे का सख्त समय रखकर मजदूरी का नुकसान कराना', 'Enforce rigid midday slots causing wage loss'],
      ['फोन पर भी बात करने से मना कर देना', 'Refuse even brief phone updates'],
    ],
    'मजदूर या कामकाजी माता-पिता के प्रति सहानुभूति रखते हुए लचीला समय या फोन संवाद अपनाना समावेशी विद्यालय की पहचान है।',
    'Accommodating working parents’ schedules and avoiding penalizing children for parent absence reflects true socio-economic empathy.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक आचरण” में “प्रायोगिक सत्यनिष्ठा” का अर्थ क्या है जब किसी विज्ञान प्रयोग का परिणाम पाठ्यपुस्तक से थोड़ा अलग आए?',
    'In science teaching, what does "Experimental Integrity" require if a classroom experiment yields unexpected results?',
    ['परिणाम को जबरदस्ती बदलने के बजाय त्रुटि के संभावित कारणों की वैज्ञानिक जांच कराना', 'Investigate possible sources of error scientifically with students rather than faking expected results'],
    [
      ['आंकड़ों को मिटाकर किताब वाले आंकड़े लिख देना', 'Erase observed readings and copy textbook figures'],
      ['विज्ञान की पुस्तक को ही गलत घोषित कर देना', 'Dismiss science altogether'],
      ['प्रयोग को बीच में छिपा देना', 'Hide the experiment from students'],
    ],
    'विज्ञान में अवलोकन के प्रति ईमानदारी सर्वोपरि है; अप्रत्याशित परिणामों की जांच करने से छात्रों में वास्तविक वैज्ञानिक पद्धति (Scientific Method) विकसित होती है।',
    'Honesty toward observed data teaches authentic scientific inquiry—analyzing experimental variables instead of falsifying results.',
    'HARD'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    'एक शिक्षक परीक्षा में कम समय बचा होने पर छात्रों को बताता है कि कौन-कौन से प्रश्न परीक्षा में आने वाले हैं ताकि सभी पास हो जाएं। यह क्या है?',
    'With little time left before exams, a teacher leaks exact test questions to students so everyone passes. What is this?',
    ['व्यावसायिक कदाचार जो वास्तविक अधिगम और मूल्यांकन की वैधता नष्ट करता है', 'Professional malpractice that destroys genuine learning and assessment validity'],
    [
      ['निदानात्मक शिक्षण की श्रेष्ठ विधि', 'Best form of diagnostic teaching'],
      ['छात्रों के प्रति सच्ची करुणा', 'True compassion for students'],
      ['रचनात्मक आकलन (Formative Assessment)', 'Formative assessment'],
    ],
    'पहले से प्रश्न लीक कर देने से आकलन की विश्वसनीयता समाप्त हो जाती है और छात्रों को अपनी वास्तविक कमजोरी का पता नहीं चल पाता।',
    'Leaking exact exam questions invalidates assessment and deprives learners of honest diagnostic insight.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“पर्यावरणीय नैतिकता” (Environmental Ethics) को विद्यालय में बढ़ावा देने वाला शिक्षक क्या करता है?',
    'What does a teacher do to model "Environmental Ethics" in school?',
    ['कागज के दोनों ओर उपयोग, बिजली-पानी की बचत, प्लास्टिक-मुक्त परिसर और पौधों की देखभाल का स्वयं अभ्यास कराना', 'Model double-sided paper use, water/energy conservation, plastic reduction, and plant care with students'],
    [
      ['कचरा विद्यालय की बाहरी दीवार के पास जलाना', 'Burn garbage outside the school wall'],
      ['कक्षा खाली रहने पर भी पंखे-लाइट चालू छोड़ देना', 'Leave lights and fans running in empty rooms'],
      ['पर्यावरण दिवस पर केवल एक निबंध लिखवाकर भूल जाना', 'Assign only one essay on Environment Day and ignore daily habits'],
    ],
    'पर्यावरणीय मूल्य दैनिक आदतों—संसाधनों के मितव्ययी उपयोग और प्रकृति के संरक्षण—से बनते हैं, न कि केवल एक दिन के भाषण से।',
    'Environmental ethics grows through everyday conservation habits modeled by the teacher rather than one-day lectures.',
    'EASY'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'शिक्षक की नैतिक संहिता',
    '“सांस्कृतिक संवेदनशीलता” (Cultural Competence) का अभाव किस शिक्षक आचरण में दिखाई देता है?',
    'In which teacher conduct is a lack of "Cultural Competence" evident?',
    ['आदिवासी या ग्रामीण छात्रों के नामों का उपहास करना या उन्हें बदलने का सुझाव देना', 'Mocking names of tribal or rural students or suggesting they change them'],
    [
      ['विविध भाषाओं के अभिवादन शब्द कक्षा में सीखना', 'Learning greetings from diverse student languages'],
      ['स्थानीय लोकगीतों को संगीत गतिविधि में शामिल करना', 'Including local folk songs in music activities'],
      ['सभी छात्रों के नामों का सही उच्चारण सीखने का प्रयास करना', 'Making an effort to pronounce every student’s name accurately'],
    ],
    'किसी छात्र का नाम उसकी सांस्कृतिक और व्यक्तिगत पहचान से जुड़ा होता है; सही उच्चारण सीखना और सम्मान करना सांस्कृतिक संवेदनशीलता का बुनियादी रूप है।',
    'A student’s name carries personal and cultural identity; mocking or altering it shows cultural insensitivity, while pronouncing it respectfully builds inclusion.',
    'MEDIUM'
  ),
  q(
    'व्यावसायिक आचरण एवं नैतिकता',
    'व्यावसायिक आचरण',
    '“व्यावसायिक आचरण एवं नैतिकता” का सबसे उपयुक्त सार क्या है जो एक नए शिक्षक को सदैव याद रखना चाहिए?',
    'What is the finest summary of Professional Ethics that a new teacher should always remember?',
    ['“प्रत्येक बच्चे की गरिमा की रक्षा, आजीवन सीखना, निष्पक्षता और सत्यनिष्ठा से शिक्षण करना।”', '"Safeguard every child’s dignity, remain a lifelong learner, and teach with fairness and integrity."'],
    [
      ['“केवल पाठ्यक्रम की पंक्तियाँ पूरी करना और उच्चाधिकारियों को प्रसन्न रखना।”', '"Only finish textbook lines and please superiors."'],
      ['“भय और कठोर दंड से कक्षा पर पूर्ण नियंत्रण रखना।”', '"Control the class strictly through fear and punishment."'],
      ['“निजी लाभ के अवसरों को शिक्षण से ऊपर रखना।”', '"Place personal gain above classroom duties."'],
    ],
    'बाल-गरिमा, निरंतर अध्ययन, निष्पक्षता और सत्यनिष्ठा—ये चारों गुण मिलकर एक साधारण अध्यापक को सच्चा गुरु और राष्ट्रनिर्माता बनाते हैं।',
    'Protecting child dignity, learning continuously, acting fairly, and teaching with integrity form the timeless core of ethical education.',
    'EASY'
  ),
];
