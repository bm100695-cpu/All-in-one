import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Child Psychology');

export const CDP_BANK_PART2: RawBankQuestion[] = [
  // =========================================================================
  // 1. सीखने के सिद्धांत - भाग 1 (थॉर्नडाइक, पावलॉव, स्किनर एवं अधिगम आधार)
  // =========================================================================
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“व्यवहार के कारण व्यवहार में आया कोई भी परिवर्तन अधिगम है” — यह प्रसिद्ध परिभाषा किस मनोवैज्ञानिक ने दी है?',
    '“Any change in behavior resulting from behavior is learning” — which psychologist gave this famous definition?',
    ['जे.पी. गिलफोर्ड', 'J.P. Guilford'],
    [
      ['बी.एफ. स्किनर', 'B.F. Skinner'],
      ['क्रो एवं क्रो', 'Crow and Crow'],
      ['ई.एल. थॉर्नडाइक', 'E.L. Thorndike'],
    ],
    'जे.पी. गिलफोर्ड के अनुसार व्यवहार के परिणामस्वरूप व्यवहार में होने वाला कोई भी स्थायी या अपेक्षाकृत स्थायी परिवर्तन अधिगम कहलाता है।',
    'According to J.P. Guilford, any change in behavior resulting from prior behavior or experience is termed learning.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“सीखना आदतों, ज्ञान और अभिवृत्तियों का अर्जन है” — यह कथन किससे संबंधित है?',
    '“Learning is the acquisition of habits, knowledge and attitudes” — to whom is this statement attributed?',
    ['क्रो एवं क्रो', 'Crow and Crow'],
    [
      ['वुडवर्थ', 'Woodworth'],
      ['गेट्स एवं अन्य', 'Gates and others'],
      ['मर्फी', 'Murphy'],
    ],
    'क्रो एवं क्रो ने सीखने को आदतों, ज्ञान तथा अभिवृत्तियों के अर्जन की प्रक्रिया के रूप में परिभाषित किया है।',
    'Crow and Crow defined learning as the acquisition of habits, knowledge, and attitudes.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“अभ्यास और अनुभूति के द्वारा व्यवहार में होने वाला अपेक्षाकृत स्थायी परिवर्तन ही अधिगम है” — इसमें किस प्रकार के परिवर्तन को अधिगम नहीं माना जाता?',
    '“Learning is a relatively permanent change in behavior through practice and experience” — which type of change is NOT considered learning?',
    ['थकान, रोग या मादक पदार्थों के कारण आया अस्थायी परिवर्तन', 'Temporary change caused by fatigue, illness, or drugs'],
    [
      ['निरंतर अभ्यास से कौशल में आया सुधार', 'Skill improvement through continuous practice'],
      ['अनुभव से दृष्टिकोण में आया परिवर्तन', 'Change in attitude through experience'],
      ['प्रशिक्षण के बाद समस्या-समाधान क्षमता में वृद्धि', 'Increase in problem-solving ability after training'],
    ],
    'थकान, बीमारी, दवा या परिपक्वता के कारण होने वाले अस्थायी या जैविक परिवर्तन अधिगम की श्रेणी में नहीं आते।',
    'Temporary or purely biological changes caused by fatigue, illness, drugs, or maturation are not classified as learning.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“सीखना विकास की प्रक्रिया है” — यह संक्षिप्त परिभाषा किस मनोवैज्ञानिक द्वारा दी गई थी?',
    '“Learning is a process of development” — which psychologist gave this concise definition?',
    ['आर.एस. वुडवर्थ', 'R.S. Woodworth'],
    [
      ['थॉर्नडाइक', 'Thorndike'],
      ['पावलॉव', 'Pavlov'],
      ['कोहलर', 'Kohler'],
    ],
    'आर.एस. वुडवर्थ ने अधिगम को नवीन ज्ञान और नवीन प्रतिक्रियाओं को अर्जित करने की तथा विकास की प्रक्रिया बताया है।',
    'R.S. Woodworth described learning as the process of development and acquiring new knowledge and responses.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“अनुभव एवं प्रशिक्षण द्वारा व्यवहार में संशोधन ही अधिगम है” — यह परिभाषा किसने प्रस्तुत की?',
    '“Learning is the modification of behavior through experience and training” — who presented this definition?',
    ['गेट्स एवं अन्य', 'Gates and others'],
    [
      ['हिलगार्ड', 'Hilgard'],
      ['बंडूरा', 'Bandura'],
      ['टोलमैन', 'Tolman'],
    ],
    'गेट्स एवं अन्य के अनुसार अनुभव तथा प्रशिक्षण के माध्यम से व्यवहार में होने वाला परिमार्जन ही अधिगम है।',
    'According to Gates and others, learning is the modification of behavior through experience and training.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“सीखना व्यवहार में उत्तरोत्तर सामंजस्य की प्रक्रिया है” — यह परिभाषा किसकी है?',
    '“Learning is a process of progressive adaptation in behavior” — whose definition is this?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['जीन पियाजे', 'Jean Piaget'],
      ['वाइगोत्स्की', 'Vygotsky'],
      ['रॉबर्ट गने', 'Robert Gagne'],
    ],
    'बी.एफ. स्किनर ने अधिगम को व्यवहार में उत्तरोत्तर सामंजस्य या अनुकूलन की प्रक्रिया के रूप में परिभाषित किया है।',
    'B.F. Skinner defined learning as a process of progressive behavior adaptation.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम बनाम परिपक्वता',
    'परिपक्वता और अधिगम के मध्य प्रमुख अंतर क्या है?',
    'What is the key difference between maturation and learning?',
    ['परिपक्वता आनुवंशिक एवं स्वचालित जैविक प्रक्रिया है, जबकि अधिगम अभ्यास व अनुभव आधारित है', 'Maturation is a genetic and automatic biological process, whereas learning depends on practice and experience'],
    [
      ['परिपक्वता केवल विद्यालय में होती है, जबकि अधिगम केवल घर में होता है', 'Maturation occurs only at school, whereas learning occurs only at home'],
      ['परिपक्वता में प्रशिक्षण अनिवार्य है, जबकि अधिगम बिना अनुभव के होता है', 'Training is mandatory in maturation, whereas learning happens without experience'],
      ['परिपक्वता जीवन भर अनियंत्रित बढ़ती है, जबकि अधिगम जन्म के साथ समाप्त हो जाता है', 'Maturation grows uncontrollably throughout life, whereas learning ends at birth'],
    ],
    'परिपक्वता वंशानुक्रम से नियंत्रित स्वाभाविक जैविक विकास है जिसके लिए विशेष अभ्यास की आवश्यकता नहीं होती, जबकि अधिगम वातावरण, अनुभव व अभ्यास से होता है।',
    'Maturation is natural biological unfolding governed by heredity without formal practice, while learning requires experience and practice.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    'अधिगम की विशेषताओं के संदर्भ में निम्नलिखित में से कौन-सा कथन सर्वाधिक उपयुक्त है?',
    'Which of the following statements is most appropriate regarding the characteristics of learning?',
    ['अधिगम उद्देश्यपूर्ण, सक्रिय एवं आजीवन चलने वाली प्रक्रिया है', 'Learning is a purposeful, active, and lifelong process'],
    [
      ['अधिगम केवल औपचारिक कक्षा-कक्ष तक सीमित होता है', 'Learning is confined strictly to formal classrooms'],
      ['अधिगम केवल रटकर याद करने की यांत्रिक क्रिया है', 'Learning is merely a mechanical act of rote memorization'],
      ['अधिगम केवल बाल्यावस्था में होता है और वयस्कता में रुक जाता है', 'Learning occurs only in childhood and stops in adulthood'],
    ],
    'अधिगम जन्म से मृत्यु तक चलने वाली सक्रिय, उद्देश्यपूर्ण और समायोजनकारी प्रक्रिया है जो औपचारिक व अनौपचारिक दोनों परिस्थितियों में होती है।',
    'Learning is an active, purposeful, lifelong adaptive process occurring in both formal and informal settings.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    'एक शिशु का कुछ महीनों बाद बिना किसी विशेष प्रशिक्षण के बैठना और खड़े होना सीख लेना मुख्यतः किसका परिणाम है?',
    'An infant learning to sit and stand after a few months without special training is primarily the result of:',
    ['परिपक्वता (Maturation)', 'Maturation'],
    [
      ['शास्त्रीय अनुबंधन', 'Classical conditioning'],
      ['प्रयास एवं त्रुटि अधिगम', 'Trial and error learning'],
      ['अभिक्रमित अनुदेशन', 'Programmed instruction'],
    ],
    'बैठना, रेंगना और खड़ा होना जैसी प्रारंभिक गतिक क्रियाएँ मुख्यतः तंत्रिका-पेशीय परिपक्वता के कारण स्वाभाविक रूप से प्रकट होती हैं।',
    'Early motor milestones like sitting and standing emerge naturally primarily due to neuromuscular maturation.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    'निम्नलिखित में से किस कथन को “संज्ञानात्मक अधिगम” की मूल भावना माना जाता है?',
    'Which statement reflects the core essence of “cognitive learning”?',
    ['अधिगम केवल बाहरी उद्दीपन-अनुक्रिया जुड़ाव नहीं, बल्कि मानसिक संरचनाओं के पुनर्गठन की प्रक्रिया है', 'Learning is not merely external S-R bonding, but a process of reorganizing mental structures'],
    [
      ['अधिगम बिना किसी मानसिक प्रयास के केवल दंड के भय से होता है', 'Learning happens solely out of fear of punishment without mental effort'],
      ['अधिगम केवल मांसपेशीय प्रतिवर्त क्रियाओं का संचय है', 'Learning is merely an accumulation of muscular reflexes'],
      ['अधिगम में शिक्षार्थी की पूर्व-ज्ञान संरचना की कोई भूमिका नहीं होती', 'The learner’s prior knowledge structure has no role in learning'],
    ],
    'संज्ञानात्मक दृष्टिकोण सीखने को चिंतन, स्मृति, प्रत्यक्षीकरण और मानसिक स्कीमा के पुनर्गठन की सक्रिय प्रक्रिया मानता है।',
    'The cognitive perspective views learning as an active process involving thinking, memory, perception, and reorganization of mental schemas.',
    'MEDIUM'
  ),

  // --- थॉर्नडाइक का प्रयास एवं त्रुटि सिद्धांत ---
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'एडवर्ड ली थॉर्नडाइक द्वारा प्रतिपादित अधिगम सिद्धांत को किस नाम से जाना जाता है?',
    'By which name is the learning theory propounded by Edward Lee Thorndike known?',
    ['प्रयास एवं त्रुटि / संबंधवाद सिद्धांत', 'Trial and Error / Connectionism Theory'],
    [
      ['सूझ एवं अंतर्दृष्टि सिद्धांत', 'Insight Learning Theory'],
      ['शास्त्रीय अनुबंधन सिद्धांत', 'Classical Conditioning Theory'],
      ['क्षेत्र अधिगम सिद्धांत', 'Field Theory of Learning'],
    ],
    'थॉर्नडाइक ने सीखने का संबंधवाद (Connectionism) या उद्दीपन-अनुक्रिया (S-R Bond) तथा प्रयास एवं त्रुटि का सिद्धांत प्रतिपादित किया।',
    'Thorndike propounded Connectionism (S-R Bond Theory), popularly known as Trial and Error Theory of learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी प्रसिद्ध पुस्तक “Animal Intelligence” किस वर्ष प्रकाशित की थी जिसमें सीखने के नियमों की आधारशिला रखी गई?',
    'In which year did Thorndike publish his famous work “Animal Intelligence”, laying the foundation for his laws of learning?',
    ['1911 (शोध-पत्र 1898)', '1911 (Monograph 1898)'],
    [
      ['1925', '1925'],
      ['1938', '1938'],
      ['1879', '1879'],
    ],
    'थॉर्नडाइक ने अपना डॉक्टरेट शोध “Animal Intelligence” 1898 में प्रस्तुत किया और 1911 में इसे पुस्तक के रूप में प्रकाशित किया।',
    'Thorndike presented his doctoral thesis “Animal Intelligence” in 1898 and published it as a book in 1911.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने पहेली बॉक्स (Puzzle Box) प्रयोग में किस भूखे प्राणी का उपयोग किया था?',
    'Which hungry animal did Thorndike use in his Puzzle Box experiment?',
    ['भूखी बिल्ली', 'Hungry cat'],
    [
      ['चिंपांजी', 'Chimpanzee'],
      ['सफेद कबूतर', 'White pigeon'],
      ['पावलॉव का कुत्ता', 'Dog'],
    ],
    'थॉर्नडाइक ने भूखी बिल्ली को पहेली बॉक्स में बंद करके बाहर मछली का टुकड़ा रखा, जिससे बिल्ली ने बार-बार प्रयास और त्रुटि के बाद चिटकनी दबाना सीख लिया।',
    'Thorndike placed a hungry cat inside a puzzle box with fish outside; through repeated trials and errors, the cat learned to press the latch.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के बिल्ली वाले प्रयोग में “उद्दीपन (Stimulus)” की भूमिका किसने निभाई?',
    'In Thorndike’s cat experiment, what served as the “Stimulus”?',
    ['बॉक्स के बाहर रखी मछली (भोजन)', 'Fish (food) placed outside the box'],
    [
      ['बिल्ली द्वारा पंजा मारना', 'Cat pawing at the bars'],
      ['पहेली बॉक्स का दरवाज़ा खुलना', 'Opening of the puzzle box door'],
      ['कमरे का तापमान', 'Room temperature'],
    ],
    'भूखी बिल्ली को प्रेरित करने वाला बाहरी लक्ष्य अर्थात बाहर रखी मछली उद्दीपन (S) थी, और लीवर दबाने की क्रिया अनुक्रिया (R) थी।',
    'The fish placed outside motivated the hungry cat and acted as the Stimulus (S), while pressing the latch was the Response (R).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक द्वारा प्रतिपादित सीखने के तीन “मुख्य नियम” कौन-से हैं?',
    'Which are the three “Primary Laws” of learning propounded by Thorndike?',
    ['तत्परता का नियम, अभ्यास का नियम, प्रभाव का नियम', 'Law of Readiness, Law of Exercise, Law of Effect'],
    [
      ['समानता, सामीप्य और समापन का नियम', 'Laws of Similarity, Proximity, and Closure'],
      ['अवधान, धारण और पुनर्बलन का नियम', 'Laws of Attention, Retention, and Reinforcement'],
      ['विलोपन, सामान्यीकरण और विभेदन का नियम', 'Laws of Extinction, Generalization, and Discrimination'],
    ],
    'थॉर्नडाइक ने तीन मुख्य नियम दिए: तत्परता का नियम (Readiness), अभ्यास का नियम (Exercise) तथा प्रभाव या संतोष-असंतोष का नियम (Effect)।',
    'Thorndike formulated three primary laws: Law of Readiness, Law of Exercise, and Law of Effect.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    '“आप घोड़े को पानी के पास ले जा सकते हैं, लेकिन उसे पानी पीने के लिए बाध्य नहीं कर सकते” — यह कहावत थॉर्नडाइक के किस नियम को दर्शाती है?',
    '“You can lead a horse to water, but you cannot make it drink” — this proverb illustrates which law of Thorndike?',
    ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
    [
      ['अभ्यास का नियम (Law of Exercise)', 'Law of Exercise'],
      ['प्रभाव का नियम (Law of Effect)', 'Law of Effect'],
      ['सादृश्यता का नियम (Law of Analogy)', 'Law of Analogy'],
    ],
    'तत्परता का नियम बताता है कि जब तक शिक्षार्थी मानसिक व शारीरिक रूप से सीखने को तैयार न हो, तब तक प्रभावी अधिगम संभव नहीं होता।',
    'The Law of Readiness states that learning is effective only when the learner is physically and mentally ready to act.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के “अभ्यास के नियम” (Law of Exercise) के दो उप-नियम कौन-से हैं?',
    'What are the two sub-laws of Thorndike’s “Law of Exercise”?',
    ['उपयोग का नियम एवं अनुपयोग का नियम', 'Law of Use and Law of Disuse'],
    [
      ['संतोष का नियम एवं असंतोष का नियम', 'Law of Satisfaction and Law of Annoyance'],
      ['प्रेरणा का नियम एवं दंड का नियम', 'Law of Motivation and Law of Punishment'],
      ['चयन का नियम एवं स्थानांतरण का नियम', 'Law of Selection and Law of Transfer'],
    ],
    'अभ्यास का नियम कहता है कि किसी क्रिया की पुनरावृत्ति से बंधन मजबूत होता है (उपयोग का नियम) और अभ्यास छोड़ देने से बंधन कमजोर पड़ता है (अनुपयोग का नियम)।',
    'The Law of Exercise includes the Law of Use (repetition strengthens S-R bonds) and the Law of Disuse (lack of practice weakens bonds).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के किस मुख्य नियम को बाद में बी.एफ. स्किनर के पुनर्बलन सिद्धांत का पूर्वगामी माना जाता है?',
    'Which primary law of Thorndike is considered the precursor to B.F. Skinner’s reinforcement theory?',
    ['प्रभाव का नियम (Law of Effect)', 'Law of Effect'],
    [
      ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
      ['बहु-प्रतिक्रिया का नियम (Law of Multiple Response)', 'Law of Multiple Response'],
      ['आंशिक क्रिया का नियम (Law of Prepotency of Elements)', 'Law of Prepotency of Elements'],
    ],
    'प्रभाव का नियम कहता है कि जिन अनुक्रियाओं के परिणाम सुखद या संतोषजनक होते हैं वे दृढ़ होती हैं और दुःखद परिणाम वाली अनुक्रियाएँ क्षीण होती हैं; यही आगे चलकर स्किनर के पुनर्बलन का आधार बना।',
    'The Law of Effect states that responses followed by satisfying outcomes are strengthened while annoying ones weaken, forming the foundation for Skinner’s reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    '1930 के बाद थॉर्नडाइक ने अपने “अभ्यास के नियम” और “प्रभाव के नियम” में क्या प्रमुख संशोधन किया?',
    'What major revision did Thorndike make to his “Law of Exercise” and “Law of Effect” after 1930?',
    ['केवल यांत्रिक अभ्यास पर्याप्त नहीं है तथा दंड पुरस्कार जितना प्रभावी नहीं होता', 'Mere mechanical repetition is insufficient, and punishment is not as effective as reward in weakening bonds'],
    [
      ['तत्परता के नियम को पूरी तरह अस्वीकार कर दिया गया', 'The Law of Readiness was completely discarded'],
      ['दंड को पुरस्कार से अधिक शक्तिशाली घोषित किया गया', 'Punishment was declared stronger than reward'],
      ['सीखने में उद्दीपन की भूमिका समाप्त मान ली गई', 'The role of stimulus in learning was eliminated'],
    ],
    'संशोधित सिद्धांत (Truncated Law of Effect) में थॉर्नडाइक ने माना कि बिना प्रतिपुष्टि के मात्र दोहराव से सीखना नहीं होता और दंड (असंतोष) हमेशा गलत बंधन को स्थायी रूप से नष्ट नहीं करता।',
    'In his post-1930 revision (Truncated Law of Effect), Thorndike noted that mere blind repetition without feedback is ineffective and punishment does not reliably stamp out S-R bonds.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक द्वारा बताए गए सीखने के कुल “गौण नियम” (Secondary Laws) कितने हैं?',
    'How many “Secondary Laws” of learning were proposed by Thorndike?',
    ['पाँच (5)', 'Five (5)'],
    [
      ['तीन (3)', 'Three (3)'],
      ['आठ (8)', 'Eight (8)'],
      ['दो (2)', 'Two (2)'],
    ],
    'थॉर्नडाइक ने 3 मुख्य नियमों के साथ 5 गौण नियम दिए: बहु-प्रतिक्रिया, मनोवृत्ति/अभिवृत्ति, आंशिक क्रिया, सादृश्यता द्वारा अनुक्रिया तथा साहचर्यात्मक स्थानांतरण।',
    'Along with 3 primary laws, Thorndike proposed 5 secondary laws: Multiple Response, Attitude/Set, Prepotency of Elements, Response by Analogy, and Associative Shifting.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'निम्नलिखित में से कौन-सा नियम थॉर्नडाइक के गौण नियमों में शामिल नहीं है?',
    'Which of the following is NOT included among Thorndike’s secondary laws of learning?',
    ['तत्परता का नियम', 'Law of Readiness'],
    [
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['आंशिक क्रिया का नियम', 'Law of Prepotency of Elements'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
    ],
    'तत्परता का नियम थॉर्नडाइक के तीन मुख्य नियमों (Primary Laws) में से एक है, न कि गौण नियमों में।',
    'The Law of Readiness is one of Thorndike’s three Primary Laws, not a secondary law.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'जब कोई विद्यार्थी किसी नई गणितीय समस्या को हल करने के लिए पूर्व में सीखी गई समान समस्या की विधि का प्रयोग करता है, तो यह थॉर्नडाइक के किस गौण नियम को दर्शाता है?',
    'When a student applies the method learned from a previously solved similar problem to a new math problem, which secondary law of Thorndike does it illustrate?',
    ['सादृश्यता का नियम (Law of Analogy)', 'Law of Analogy (Assimilation)'],
    [
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['विलोपन का नियम', 'Law of Extinction'],
    ],
    'सादृश्यता या आत्मीकरण का नियम बताता है कि व्यक्ति नई परिस्थिति में पूर्व अनुभव की समानताओं के आधार पर अनुक्रिया करता है।',
    'The Law of Analogy (Assimilation) states that a learner responds to a novel situation based on similarities with past experiences.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'एक शिक्षक जटिल पाठ को छोटे-छोटे सरल अंशों में बाँटकर पढ़ाता है ताकि छात्र मुख्य तत्वों पर ध्यान केंद्रित कर सकें। यह थॉर्नडाइक के किस गौण नियम पर आधारित है?',
    'A teacher divides a complex lesson into smaller simple parts so students can focus on key elements. Which secondary law of Thorndike supports this?',
    ['आंशिक क्रिया / तत्व-प्रबलता का नियम (Law of Prepotency of Elements)', 'Law of Prepotency of Elements (Partial Activity)'],
    [
      ['मनोवृत्ति का नियम', 'Law of Attitude'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
    ],
    'आंशिक क्रिया का नियम यह स्पष्ट करता है कि शिक्षार्थी समस्या के संपूर्ण रूप के बजाय उसके प्रासंगिक और मुख्य अंशों के प्रति अनुक्रिया कर समस्या को सरल बनाता है।',
    'The Law of Prepotency of Elements (Partial Activity) states that learners respond selectively to the essential elements of a complex situation rather than irrelevant details.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक का कौन-सा गौण नियम बताता है कि यदि छात्र की सीखने के प्रति मानसिक अभिवृत्ति सकारात्मक न हो, तो शिक्षण निष्फल रहता है?',
    'Which secondary law of Thorndike states that if a student lacks a positive mental attitude toward learning, instruction remains ineffective?',
    ['मनोवृत्ति / अभिवृत्ति का नियम (Law of Attitude / Set)', 'Law of Attitude or Mental Set'],
    [
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['सादृश्यता का नियम', 'Law of Analogy'],
      ['उपयोग का नियम', 'Law of Use'],
    ],
    'मनोवृत्ति या विन्यास का नियम दर्शाता है कि व्यक्ति किसी कार्य को अपनी पूर्ववर्ती मानसिक स्थिति, रुचि और दृष्टिकोण के अनुसार सीखता है।',
    'The Law of Attitude (Set) indicates that how a person learns depends heavily on their preexisting mental disposition and attitude.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक के किस गौण नियम को पावलॉव के शास्त्रीय अनुबंधन के निकटतम माना जाता है?',
    'Which secondary law of Thorndike is considered closest to Pavlov’s classical conditioning?',
    ['साहचर्यात्मक स्थानांतरण का नियम (Law of Associative Shifting)', 'Law of Associative Shifting'],
    [
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['आंशिक क्रिया का नियम', 'Law of Partial Activity'],
      ['अनुपयोग का नियम', 'Law of Disuse'],
    ],
    'साहचर्यात्मक स्थानांतरण के नियम के अनुसार किसी एक उद्दीपन के प्रति होने वाली अनुक्रिया को क्रमिक साहचर्य द्वारा दूसरे नए उद्दीपन से जोड़ा जा सकता है।',
    'According to the Law of Associative Shifting, any response connected with one situation can gradually be shifted to a new stimulus through association.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    'थॉर्नडाइक के प्रयास एवं त्रुटि सिद्धांत का प्राथमिक कक्षा के शिक्षण में सर्वाधिक उपयुक्त अनुप्रयोग कौन-सा है?',
    'Which is the most appropriate classroom application of Thorndike’s Trial and Error theory in primary classes?',
    ['गलतियों से सीखने के अवसर देना, नियमित अभ्यास और सही उत्तर पर तुरंत प्रशंसा करना', 'Providing opportunities to learn from mistakes, regular practice, and immediate praise for correct responses'],
    [
      ['पहली ही गलती पर कठोर शारीरिक दंड देना', 'Giving harsh physical punishment on the very first mistake'],
      ['बिना अभ्यास कराए केवल अमूर्त व्याख्यान देना', 'Delivering purely abstract lectures without practice'],
      ['छात्रों की तत्परता की अनदेखी कर पाठ्यक्रम थोपना', 'Forcing syllabus coverage while ignoring student readiness'],
    ],
    'थॉर्नडाइक का सिद्धांत त्रुटियों को सीखने का स्वाभाविक हिस्सा मानता है तथा तत्परता, सार्थक अभ्यास और सकारात्मक प्रतिपुष्टि पर बल देता है।',
    'Thorndike’s theory treats errors as a natural step in learning and emphasizes readiness, meaningful drill, and positive feedback.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    '“शिक्षा मनोविज्ञान का जनक” (Father of Educational Psychology) किसे माना जाता है?',
    'Who is regarded as the “Father of Educational Psychology”?',
    ['ई.एल. थॉर्नडाइक', 'E.L. Thorndike'],
    [
      ['विलियम जेम्स', 'William James'],
      ['सिगमंड फ्रायड', 'Sigmund Freud'],
      ['जॉन डीवी', 'John Dewey'],
    ],
    'एडवर्ड ली थॉर्नडाइक को सीखने के नियमों, बुद्धि परीक्षण और शैक्षिक मापन में ऐतिहासिक योगदान के कारण शिक्षा मनोविज्ञान का जनक कहा जाता है।',
    'Edward Lee Thorndike is called the Father of Educational Psychology for his pioneering work on laws of learning and educational measurement.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के अनुसार सीखने की प्रक्रिया की प्रकृति कैसी होती है?',
    'According to Thorndike, what is the nature of the learning process?',
    ['क्रमिक एवं यांत्रिक (धीमे-धीमे त्रुटियों में कमी आना)', 'Gradual and incremental (errors decrease step-by-step)'],
    [
      ['अचानक सूझ द्वारा एक क्षण में पूर्ण होने वाली', 'Sudden and completed instantaneously via insight'],
      ['पूरी तरह जन्मजात और अपरिवर्तनीय', 'Completely innate and unchangeable'],
      ['केवल दूसरों की नकल से बिना प्रयास के होने वाली', 'Occurring solely via effortless imitation'],
    ],
    'थॉर्नडाइक ने अपने पहेली बॉक्स वक्र से सिद्ध किया कि अधिगम अचानक नहीं बल्कि क्रमिक रूप से त्रुटियों के घटने से होता है।',
    'Thorndike demonstrated via puzzle-box learning curves that learning is gradual and incremental rather than sudden.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'जब कोई बच्चा साइकिल चलाना सीखते समय पहले संतुलन खोता है, हैंडल मोड़ता है, पैडल गलत चलाता है और कई अलग-अलग कोशिशों के बाद सही तरीका खोज लेता है, तो यह कौन-सा गौण नियम है?',
    'When a child learning to ride a bicycle tries various movements—losing balance, turning handles wrongly—before finding the right coordination, which secondary law is shown?',
    ['बहु-प्रतिक्रिया का नियम (Law of Multiple Response)', 'Law of Multiple Response'],
    [
      ['सादृश्यता का नियम', 'Law of Analogy'],
      ['मनोवृत्ति का नियम', 'Law of Attitude'],
      ['अनुपयोग का नियम', 'Law of Disuse'],
    ],
    'समस्या सामने आने पर प्राणी तब तक विविध प्रकार की प्रतिक्रियाएँ करता रहता है जब तक सही अनुक्रिया न मिल जाए; इसे बहु-प्रतिक्रिया का नियम कहते हैं।',
    'Facing a problem, the organism tries varied responses until the successful one occurs; this is the Law of Multiple Response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक का सिद्धांत निम्नलिखित में से किस मनोवैज्ञानिक संप्रदाय के अंतर्गत आता है?',
    'Thorndike’s theory falls under which psychological school of thought?',
    ['व्यवहारवाद / संबंधवाद (Behaviorism / Connectionism)', 'Behaviorism / Connectionism'],
    [
      ['गेस्टाल्ट मनोविज्ञान', 'Gestalt Psychology'],
      ['मनोविश्लेषणवाद', 'Psychoanalysis'],
      ['मानवतावाद', 'Humanism'],
    ],
    'थॉर्नडाइक का उद्दीपन-अनुक्रिया संबंधवाद व्यवहारवादी परंपरा का प्रमुख स्तंभ है, जो बाह्य प्रेक्षणीय व्यवहार और उसके परिणामों पर केंद्रित है।',
    'Thorndike’s S-R connectionism is a cornerstone of the behaviorist tradition focusing on observable stimulus-response links.',
    'EASY'
  ),

  // --- पावलॉव का शास्त्रीय अनुबंधन सिद्धांत ---
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'शास्त्रीय अनुबंधन (Classical Conditioning) के प्रतिपादक रूसी शरीर-क्रिया वैज्ञानिक कौन थे?',
    'Who was the Russian physiologist who propounded Classical Conditioning?',
    ['इवान पेत्रोविच पावलॉव', 'Ivan Petrovich Pavlov'],
    [
      ['व्लादिमीर बेखतेरेव', 'Vladimir Bekhterev'],
      ['लेव वाइगोत्स्की', 'Lev Vygotsky'],
      ['एलेक्जेंडर लूरिया', 'Alexander Luria'],
    ],
    'इवान पावलॉव ने पाचन क्रिया पर शोध करते हुए कुत्ते की लार ग्रंथि पर प्रयोग द्वारा शास्त्रीय अनुबंधन सिद्धांत की खोज की, जिसके लिए उन्हें 1904 में नोबेल पुरस्कार मिला।',
    'Ivan Pavlov discovered classical conditioning while researching canine digestion, earning the 1904 Nobel Prize in Physiology or Medicine.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव को किस वर्ष चिकित्सा एवं शरीर-क्रिया विज्ञान के क्षेत्र में नोबेल पुरस्कार प्राप्त हुआ था?',
    'In which year did Pavlov receive the Nobel Prize in Physiology or Medicine?',
    ['1904', '1904'],
    [
      ['1912', '1912'],
      ['1895', '1895'],
      ['1921', '1921'],
    ],
    'इवान पावलॉव को पाचन तंत्र के शरीर-क्रिया विज्ञान पर उनके उत्कृष्ट कार्य के लिए वर्ष 1904 में नोबेल पुरस्कार मिला था।',
    'Ivan Pavlov was awarded the Nobel Prize in 1904 for his work on the physiology of digestion.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में “भोजन” (मांस का चूर्ण) किस प्रकार का उद्दीपन था?',
    'In Pavlov’s experiment, what kind of stimulus was the “food” (meat powder)?',
    ['स्वाभाविक उद्दीपन (Unconditioned Stimulus - UCS)', 'Unconditioned Stimulus (UCS)'],
    [
      ['अनुबंधित उद्दीपन (Conditioned Stimulus - CS)', 'Conditioned Stimulus (CS)'],
      ['तटस्थ उद्दीपन (Neutral Stimulus - NS)', 'Neutral Stimulus (NS)'],
      ['गौण पुनर्बलक (Secondary Reinforcer)', 'Secondary Reinforcer'],
    ],
    'भोजन बिना किसी पूर्व प्रशिक्षण के स्वाभाविक रूप से लार उत्पन्न करता है, अतः यह स्वाभाविक या अननुबंधित उद्दीपन (UCS) है।',
    'Food naturally triggers salivation without any prior learning, so it is the Unconditioned Stimulus (UCS).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में अनुबंधन स्थापित हो जाने के बाद घंटी की आवाज़ (CS) सुनकर कुत्ते के मुँह में लार आना क्या कहलाता है?',
    'In Pavlov’s experiment, after conditioning is established, salivation upon hearing the bell (CS) is called:',
    ['अनुबंधित अनुक्रिया (Conditioned Response - CR)', 'Conditioned Response (CR)'],
    [
      ['स्वाभाविक अनुक्रिया (Unconditioned Response - UCR)', 'Unconditioned Response (UCR)'],
      ['तटस्थ अनुक्रिया (Neutral Response)', 'Neutral Response'],
      ['नैमित्तिक अनुक्रिया (Instrumental Response)', 'Instrumental Response'],
    ],
    'अनुबंधन से पूर्व घंटी तटस्थ उद्दीपन थी, परंतु भोजन के साथ बार-बार जुड़ने के बाद घंटी अनुबंधित उद्दीपन (CS) बन गई और उस पर आने वाली लार अनुबंधित अनुक्रिया (CR) कहलाई।',
    'After repeated pairing with food, the bell becomes the Conditioned Stimulus (CS) and the salivation to the bell alone is the Conditioned Response (CR).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'यदि पावलॉव के प्रयोग में घंटी बजाने (CS) के बाद बार-बार भोजन (UCS) देना बंद कर दिया जाए और धीरे-धीरे लार आना समाप्त हो जाए, तो इस प्रक्रिया को क्या कहते हैं?',
    'If food (UCS) is repeatedly withheld after ringing the bell (CS) and salivation gradually stops, what is this process called?',
    ['विलोपन (Extinction)', 'Extinction'],
    [
      ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
      ['उच्च-स्तरीय अनुबंधन (Higher-Order Conditioning)', 'Higher-Order Conditioning'],
    ],
    'अनुबंधित उद्दीपन के साथ स्वाभाविक उद्दीपन न देने पर अनुबंधित अनुक्रिया का धीरे-धीरे लुप्त हो जाना विलोपन (Extinction) कहलाता है।',
    'The gradual weakening and disappearance of a conditioned response when the CS is repeatedly presented without the UCS is called Extinction.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'विलोपन (Extinction) होने के कुछ समय के विश्राम अंतराल के बाद जब अचानक फिर से घंटी बजाई जाती है और कुत्ते में थोड़ी लार पुनः आ जाती है, तो इसे क्या कहा जाता है?',
    'After extinction and a rest period, when the bell is sounded again and salivation briefly reappears, what is this phenomenon called?',
    ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
    [
      ['पुनर्बलन (Reinforcement)', 'Reinforcement'],
      ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
      ['विलंबित अनुबंधन (Delayed Conditioning)', 'Delayed Conditioning'],
    ],
    'विलोपन के बाद बिना किसी नए प्रशिक्षण के विश्राम अवधि के पश्चात अनुबंधित अनुक्रिया का आंशिक रूप से स्वतः लौट आना “स्वतः पुनःप्राप्ति” कहलाता है।',
    'The reappearance of an extinguished conditioned response after a rest interval without further pairing is termed Spontaneous Recovery.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'एक बच्चा सफेद खरगोश से डरने के बाद सफेद दाढ़ी, सफेद कोट और रुई जैसी सभी सफेद व रोएँदार वस्तुओं से डरने लगता है। यह किस मनोवैज्ञानिक घटना का उदाहरण है?',
    'After developing fear of a white rabbit, a child begins fearing all white, furry objects like white beards, white coats, and cotton. This illustrates:',
    ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
    [
      ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
      ['विलोपन (Extinction)', 'Extinction'],
      ['अनुदेशात्मक आकारण (Shaping)', 'Shaping'],
    ],
    'जब प्राणी मूल अनुबंधित उद्दीपन से मिलते-जुलते अन्य उद्दीपनों के प्रति भी वैसी ही अनुक्रिया करने लगे, तो उसे उद्दीपन सामान्यीकरण कहते हैं (वाटसन का लिटिल अल्बर्ट प्रयोग)।',
    'Responding similarly to stimuli resembling the original conditioned stimulus is Stimulus Generalization (as seen in Watson’s Little Albert study).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'जब कुत्ता केवल 500 हर्ट्ज़ की घंटी पर लार टपकाए, किंतु 300 हर्ट्ज़ की घंटी पर लार न टपकाए, तो यह क्षमता क्या कहलाती है?',
    'When a dog salivates only to a 500 Hz tone and not to a 300 Hz tone, what is this ability called?',
    ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
    [
      ['उद्दीपन सामान्यीकरण', 'Stimulus Generalization'],
      ['पश्चगामी अनुबंधन', 'Backward Conditioning'],
      ['द्वितीय कोटि अनुबंधन', 'Second-Order Conditioning'],
    ],
    'मिलते-जुलते उद्दीपनों में अंतर पहचानकर केवल विशिष्ट अनुबंधित उद्दीपन के प्रति अनुक्रिया करना उद्दीपन विभेदन कहलाता है।',
    'Distinguishing between similar stimuli and responding only to the specific reinforced CS is Stimulus Discrimination.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन के प्रकार',
    'शास्त्रीय अनुबंधन की कौन-सी कालिक व्यवस्था (Temporal Arrangement) अधिगम के लिए सर्वाधिक प्रभावी मानी जाती है?',
    'Which temporal arrangement in classical conditioning is considered most effective for learning?',
    ['विलंबित अनुबंधन (Delayed Conditioning - CS पहले शुरू हो और UCS आने तक जारी रहे)', 'Delayed Conditioning (CS begins before UCS and overlaps until UCS starts)'],
    [
      ['पश्चगामी अनुबंधन (Backward Conditioning - UCS पहले और CS बाद में)', 'Backward Conditioning (UCS precedes CS)'],
      ['सहकालिक अनुबंधन (Simultaneous Conditioning - दोनों एक साथ शुरू व बंद हों)', 'Simultaneous Conditioning (CS and UCS start and end together)'],
      ['यादृच्छिक अनियमित अनुबंधन', 'Random unpaired presentation'],
    ],
    'विलंबित अनुबंधन (Delayed Conditioning), जहाँ अनुबंधित उद्दीपन (CS) पहले प्रारंभ होकर स्वाभाविक उद्दीपन (UCS) के आने तक बना रहता है, सबसे मजबूत अनुबंधन बनाता है।',
    'Delayed conditioning, in which the CS precedes and overlaps slightly with the onset of the UCS, yields the strongest conditioning.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन के प्रकार',
    'जब अनुबंधित उद्दीपन (CS) प्रस्तुत कर बंद कर दिया जाए और कुछ क्षण के खाली अंतराल के बाद स्वाभाविक उद्दीपन (UCS) दिया जाए, तो उसे क्या कहते हैं?',
    'When the CS is presented and terminated, followed by a brief empty gap before the UCS is presented, it is called:',
    ['अवशेष / चिह्न अनुबंधन (Trace Conditioning)', 'Trace Conditioning'],
    [
      ['विलंबित अनुबंधन (Delayed Conditioning)', 'Delayed Conditioning'],
      ['सहकालिक अनुबंधन (Simultaneous Conditioning)', 'Simultaneous Conditioning'],
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
    ],
    'अवशेष या ट्रेस अनुबंधन में CS समाप्त होने के बाद प्राणी के मस्तिष्क में बचे उसके स्मृति-चिह्न (Memory Trace) के साथ UCS का जुड़ाव होता है।',
    'In Trace Conditioning, there is a temporal gap between the offset of the CS and the onset of the UCS, relying on the memory trace of the CS.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'पावलॉव के शास्त्रीय अनुबंधन को किस अन्य नाम से भी जाना जाता है?',
    'By what other name is Pavlov’s Classical Conditioning also known?',
    ['S-प्रकार अनुबंधन / प्रतिवादी अनुबंधन (Respondent Conditioning)', 'S-Type Conditioning / Respondent Conditioning'],
    [
      ['R-प्रकार अनुबंधन', 'R-Type Conditioning'],
      ['नैमित्तिक अनुबंधन', 'Instrumental Conditioning'],
      ['अन्वेषण अधिगम', 'Discovery Learning'],
    ],
    'पावलॉव का सिद्धांत उद्दीपन (Stimulus) से प्रारंभ होता है और अनैच्छिक प्रतिवादी व्यवहार से जुड़ा होता है, इसलिए इसे S-type या प्रतिवादी अनुबंधन कहते हैं।',
    'Because it starts with a stimulus eliciting an involuntary reflex, Pavlov’s conditioning is called S-type or Respondent Conditioning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'छोटे बच्चों में अच्छी आदतें डालने, अक्षर-चित्र सहसंबंध सिखाने तथा विद्यालयी भय (Phobia) दूर करने के लिए किस सिद्धांत का उपयोग किया जाता है?',
    'Which theory is applied to develop good habits in young children, teach letter-picture associations, and overcome school phobia?',
    ['शास्त्रीय अनुबंधन सिद्धांत (पावलॉव)', 'Classical Conditioning Theory (Pavlov)'],
    [
      ['कर्ट लेविन का क्षेत्र सिद्धांत', 'Kurt Lewin’s Field Theory'],
      ['टोलमैन का अव्यक्त अधिगम', 'Tolman’s Latent Learning'],
      ['थर्स्टन का समूह-कारक सिद्धांत', 'Thurstone’s Group Factor Theory'],
    ],
    'शास्त्रीय अनुबंधन के द्वारा “अ से अनार” जैसे दृश्य-ध्वनि साहचर्य बनाए जाते हैं तथा क्रमबद्ध विसंवेदन (Systematic Desensitization) से भय दूर किया जाता है।',
    'Classical conditioning helps build visual-auditory associations (e.g., letter-picture pairing) and treats fears via systematic desensitization.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'यदि पहले से अनुबंधित उद्दीपन (जैसे घंटी) को आधार बनाकर किसी नए तटस्थ उद्दीपन (जैसे नीली रोशनी) को भी उससे जोड़कर अनुक्रिया उत्पन्न की जाए, तो यह क्या कहलाता है?',
    'When an already conditioned stimulus (e.g., a bell) is used to condition a new neutral stimulus (e.g., a blue light) without food, it is called:',
    ['उच्च-स्तरीय / द्वितीय कोटि अनुबंधन (Higher-Order Conditioning)', 'Higher-Order (Second-Order) Conditioning'],
    [
      ['सहकालिक अनुबंधन', 'Simultaneous Conditioning'],
      ['विलोपन', 'Extinction'],
      ['स्वतः पुनःप्राप्ति', 'Spontaneous Recovery'],
    ],
    'जब पहले से स्थापित CS को UCS की तरह प्रयोग कर दूसरे तटस्थ उद्दीपन का अनुबंधन किया जाता है, तो उसे द्वितीय-कोटि या उच्च-स्तरीय अनुबंधन कहते हैं।',
    'Using a previously established CS to condition a second neutral stimulus is called Higher-Order (or Second-Order) Conditioning.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'जॉन बी. वाटसन द्वारा “लिटिल अल्बर्ट” (11 माह के शिशु) पर किया गया प्रयोग किसका प्रमाण था?',
    'John B. Watson’s “Little Albert” experiment on an 11-month-old infant demonstrated that:',
    ['मानव में भय जैसी संवेगात्मक अनुक्रियाएँ भी शास्त्रीय अनुबंधन से सीखी जा सकती हैं', 'Human emotional responses like fear can be learned through classical conditioning'],
    [
      ['संवेग पूर्णतः आनुवंशिक होते हैं और बदले नहीं जा सकते', 'Emotions are purely genetic and cannot be modified'],
      ['शिशु केवल क्रिया-प्रसूत पुनर्बलन से सीखते हैं', 'Infants learn solely through operant reinforcement'],
      ['सफेद चूहे से डरना मानव की जन्मजात प्रवृत्ति है', 'Fear of white rats is an innate human instinct'],
    ],
    'वाटसन और रेनर ने सफेद चूहे को तेज भयावह ध्वनि के साथ जोड़कर दिखाया कि संवेगात्मक भय भी अनुबंधित किया जा सकता है।',
    'Watson and Rayner paired a white rat with a loud frightening noise, proving emotional fears can be classically conditioned.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'मनोचिकित्सा में अवांछित भय (Phobia) को समाप्त करने हेतु “प्रति-अनुबंधन” (Counter-Conditioning) पर आधारित कौन-सी विधि प्रयोग की जाती है?',
    'Which method based on counter-conditioning is used in therapy to eliminate phobias?',
    ['क्रमबद्ध विसंवेदन (Systematic Desensitization - जोसेफ वोल्पे)', 'Systematic Desensitization (Joseph Wolpe)'],
    [
      ['ब्रेनस्टॉर्मिंग (Brainstorming)', 'Brainstorming'],
      ['रेखीय अभिक्रमित अनुदेशन', 'Linear Programmed Instruction'],
      ['पहेली बॉक्स प्रशिक्षण', 'Puzzle Box Training'],
    ],
    'जोसेफ वोल्पे द्वारा विकसित क्रमबद्ध विसंवेदन विधि में विश्राम की अवस्था के साथ भय उत्पन्न करने वाले उद्दीपन को क्रमशः जोड़कर भय समाप्त किया जाता है।',
    'Developed by Joseph Wolpe, Systematic Desensitization pairs relaxation with a graded hierarchy of fear stimuli to extinguish phobias.',
    'HARD'
  ),

  // --- स्किनर का क्रिया-प्रसूत अनुबंधन सिद्धांत ---
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'बी.एफ. स्किनर द्वारा प्रतिपादित सीखने के सिद्धांत का प्रमुख नाम क्या है?',
    'What is the primary name of the learning theory propounded by B.F. Skinner?',
    ['क्रिया-प्रसूत अनुबंधन सिद्धांत (Operant Conditioning Theory)', 'Operant Conditioning Theory'],
    [
      ['प्रयास एवं त्रुटि सिद्धांत', 'Trial and Error Theory'],
      ['सामाजिक संज्ञानात्मक सिद्धांत', 'Social Cognitive Theory'],
      ['अंतर्दृष्टि सिद्धांत', 'Insight Theory'],
    ],
    'बी.एफ. स्किनर ने क्रिया-प्रसूत या नैमित्तिक अनुबंधन (Operant / Instrumental Conditioning) सिद्धांत दिया, जिसमें प्राणी सक्रिय होकर पर्यावरण पर क्रिया करता है।',
    'B.F. Skinner propounded Operant Conditioning, where the organism actively operates on the environment to produce consequences.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपने प्रयोगों में मुख्यतः किन दो प्राणियों और किस उपकरण का उपयोग किया?',
    'Which two animals and which apparatus did Skinner mainly use in his experiments?',
    ['सफेद चूहा एवं कबूतर; स्किनर बॉक्स (Skinner Box)', 'White rat and pigeon; Skinner Box'],
    [
      ['बिल्ली एवं कुत्ता; पहेली बॉक्स', 'Cat and dog; Puzzle Box'],
      ['चिंपांजी एवं बंदर; भूलभुलैया', 'Chimpanzee and monkey; Maze'],
      ['खरगोश एवं बत्तख; टी-मेज़', 'Rabbit and duck; T-Maze'],
    ],
    'स्किनर ने 1938 के आसपास चूहे (लीवर दबाना) और कबूतर (कुंजी पर चोंच मारना) पर अपने प्रसिद्ध स्किनर बॉक्स में प्रयोग किए।',
    'Skinner conducted experiments on white rats (lever pressing) and pigeons (key pecking) inside the operant chamber known as the Skinner Box.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर के अनुबंधन को “R-प्रकार का अनुबंधन” (R-Type Conditioning) क्यों कहा जाता है?',
    'Why is Skinner’s conditioning referred to as “R-Type Conditioning”?',
    ['क्योंकि इसमें पुनर्बलन प्राणी की स्वैच्छिक अनुक्रिया (Response) पर निर्भर करता है', 'Because reinforcement is contingent upon the organism’s voluntary Response (R)'],
    [
      ['क्योंकि इसमें प्राणी केवल निष्क्रिय रूप से उद्दीपन की प्रतीक्षा करता है', 'Because the organism passively waits for a stimulus'],
      ['क्योंकि यह केवल अनैच्छिक प्रतिवर्त क्रियाओं पर लागू होता है', 'Because it applies only to involuntary reflexes'],
      ['क्योंकि इसमें किसी पुनर्बलन की आवश्यकता नहीं होती', 'Because no reinforcement is required in it'],
    ],
    'पावलॉव के S-प्रकार के विपरीत, स्किनर के सिद्धांत में अनुक्रिया (Response) पहले घटती है और उसके बाद पुनर्बलक (Reinforcer) दिया जाता है, इसलिए इसे R-type कहते हैं।',
    'Unlike Pavlov’s S-type, in Skinner’s conditioning the voluntary Response occurs first and determines whether reinforcement follows; hence it is R-type.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'नकारात्मक पुनर्बलन (Negative Reinforcement) और दंड (Punishment) के बीच सही अंतर क्या है?',
    'What is the accurate distinction between Negative Reinforcement and Punishment?',
    ['नकारात्मक पुनर्बलन अप्रिय उद्दीपन को हटाकर वांछित व्यवहार बढ़ाता है, जबकि दंड व्यवहार को घटाता है', 'Negative reinforcement removes an aversive stimulus to increase desired behavior, whereas punishment decreases a behavior'],
    [
      ['नकारात्मक पुनर्बलन और दंड दोनों एक ही अवधारणा के पर्याय हैं', 'Negative reinforcement and punishment are identical synonyms'],
      ['नकारात्मक पुनर्बलन व्यवहार को हमेशा कम करता है और दंड व्यवहार को बढ़ाता है', 'Negative reinforcement always reduces behavior while punishment increases it'],
      ['नकारात्मक पुनर्बलन केवल शारीरिक पिटाई को कहते हैं', 'Negative reinforcement refers strictly to physical beating'],
    ],
    'कोई भी पुनर्बलन (चाहे सकारात्मक हो या नकारात्मक) व्यवहार की आवृत्ति को बढ़ाता है। नकारात्मक पुनर्बलन में कष्टदायक स्थिति को हटाकर सही व्यवहार मजबूत किया जाता है (जैसे सीटबेल्ट लगाने पर अलार्म बंद होना)।',
    'Every reinforcer strengthens behavior: negative reinforcement removes an unpleasant stimulus to increase a response (e.g., buckling a seatbelt stops the beep), whereas punishment weakens behavior.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'एक शिक्षक होमवर्क पूरा करने वाले विद्यार्थियों का अतिरिक्त अभ्यास कार्य माफ कर देता है ताकि वे नियमित होमवर्क करें। यह किसका उदाहरण है?',
    'A teacher exempts students from extra drill work when they finish homework on time so they continue doing homework regularly. This exemplifies:',
    ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
    [
      ['सकारात्मक दंड (Positive Punishment)', 'Positive Punishment'],
      ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
      ['विलोपन (Extinction)', 'Extinction'],
    ],
    'यहाँ अतिरिक्त गृहकार्य रूपी अप्रिय भार को हटाकर समय पर होमवर्क करने के वांछित व्यवहार को बढ़ाया जा रहा है, अतः यह नकारात्मक पुनर्बलन है।',
    'Removing an aversive obligation (extra drill) to strengthen the desired behavior (timely homework) is Negative Reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'कक्षा में शोर मचाने पर किसी छात्र का पसंदीदा खेल का पीरियड रद्द कर देना स्किनर के अनुसार क्या कहलाएगा?',
    'Cancelling a student’s favorite games period for making noise in class is termed according to Skinner as:',
    ['नकारात्मक दंड (Negative Punishment / Response Cost)', 'Negative Punishment (Removal Punishment)'],
    [
      ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
      ['सकारात्मक पुनर्बलन (Positive Reinforcement)', 'Positive Reinforcement'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
    ],
    'किसी अवांछित व्यवहार को कम करने के लिए कोई प्रिय वस्तु या अवसर छीन लेना नकारात्मक दंड (Negative Punishment) कहलाता है।',
    'Taking away a desirable privilege to reduce an undesirable behavior is Negative Punishment.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'स्किनर की किस पुनर्बलन अनुसूची (Schedule of Reinforcement) में विलोपन के प्रति सर्वाधिक प्रतिरोध (अधिकतम स्थायी व्यवहार) पाया जाता है?',
    'Which schedule of reinforcement according to Skinner produces the highest resistance to extinction?',
    ['परिवर्ती अनुपात अनुसूची (Variable Ratio Schedule)', 'Variable Ratio Schedule'],
    [
      ['सतत पुनर्बलन अनुसूची (Continuous Reinforcement)', 'Continuous Reinforcement'],
      ['निश्चित अंतराल अनुसूची (Fixed Interval Schedule)', 'Fixed Interval Schedule'],
      ['निश्चित अनुपात अनुसूची (Fixed Ratio Schedule)', 'Fixed Ratio Schedule'],
    ],
    'परिवर्ती अनुपात (VR) अनुसूची में प्राणी को पता नहीं होता कि कितनी अनुक्रियाओं के बाद पुरस्कार मिलेगा, इसलिए व्यवहार सबसे अधिक दर से और लंबे समय तक बना रहता है।',
    'In a Variable Ratio (VR) schedule, reinforcement follows an unpredictable number of responses, yielding high response rates and maximum resistance to extinction.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'मासिक वेतन मिलना या प्रत्येक शुक्रवार को साप्ताहिक परीक्षा होना किस पुनर्बलन अनुसूची का उदाहरण है?',
    'Receiving a monthly salary or having a weekly test every Friday exemplifies which reinforcement schedule?',
    ['निश्चित अंतराल अनुसूची (Fixed Interval Schedule)', 'Fixed Interval Schedule'],
    [
      ['निश्चित अनुपात अनुसूची (Fixed Ratio Schedule)', 'Fixed Ratio Schedule'],
      ['परिवर्ती अनुपात अनुसूची (Variable Ratio Schedule)', 'Variable Ratio Schedule'],
      ['परिवर्ती अंतराल अनुसूची (Variable Interval Schedule)', 'Variable Interval Schedule'],
    ],
    'जब एक निश्चित समय अवधि बीतने के बाद पहली सही अनुक्रिया पर पुनर्बलन मिले, तो उसे निश्चित अंतराल अनुसूची (FI) कहते हैं।',
    'When reinforcement is delivered after a fixed period of time elapses, it is a Fixed Interval (FI) schedule.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'एक कारीगर को प्रत्येक 10 खिलौने बनाने पर निश्चित बोनस दिया जाता है। यह किस पुनर्बलन अनुसूची को दर्शाता है?',
    'A craftsman receives a fixed bonus for every 10 toys produced. Which reinforcement schedule does this represent?',
    ['निश्चित अनुपात अनुसूची (Fixed Ratio Schedule)', 'Fixed Ratio Schedule'],
    [
      ['परिवर्ती अंतराल अनुसूची (Variable Interval Schedule)', 'Variable Interval Schedule'],
      ['निश्चित अंतराल अनुसूची (Fixed Interval Schedule)', 'Fixed Interval Schedule'],
      ['सतत पुनर्बलन अनुसूची (Continuous Reinforcement)', 'Continuous Reinforcement'],
    ],
    'जब एक निश्चित संख्या में अनुक्रियाएँ (यहाँ 10 खिलौने) पूरी करने पर पुनर्बलन दिया जाए, तो वह निश्चित अनुपात अनुसूची (FR) होती है।',
    'When reinforcement is provided after a fixed number of responses, it is a Fixed Ratio (FR) schedule.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'किसी नए और कठिन कौशल को प्रारंभ में सिखाते समय कौन-सी पुनर्बलन अनुसूची सर्वाधिक उपयोगी होती है?',
    'Which reinforcement schedule is most effective when initially teaching a brand-new or difficult skill?',
    ['सतत पुनर्बलन अनुसूची (Continuous Reinforcement - CRF)', 'Continuous Reinforcement (CRF)'],
    [
      ['परिवर्ती अनुपात अनुसूची', 'Variable Ratio Schedule'],
      ['निश्चित अंतराल अनुसूची', 'Fixed Interval Schedule'],
      ['बिना पुनर्बलन की अनुसूची', 'Non-contingent extinction schedule'],
    ],
    'नया व्यवहार प्रारंभ में स्थापित करने के लिए हर सही अनुक्रिया पर तुरंत पुनर्बलन (सतत पुनर्बलन) देना सर्वोत्तम होता है; बाद में इसे आंशिक किया जाता है।',
    'Continuous Reinforcement (reinforcing every correct response) is best during initial acquisition of a new behavior before shifting to partial reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'आकारण एवं शृंखलन',
    'लक्ष्य व्यवहार की ओर बढ़ने वाले प्रत्येक क्रमिक छोटे चरण (Successive Approximations) को पुनर्बलित कर जटिल व्यवहार सिखाने की तकनीक क्या कहलाती है?',
    'The technique of teaching a complex behavior by reinforcing successive approximations closer to the target behavior is called:',
    ['आकारण (Shaping)', 'Shaping'],
    [
      ['विलोपन (Extinction)', 'Extinction'],
      ['सामान्यीकरण (Generalization)', 'Generalization'],
      ['सहकालिक अनुबंधन (Simultaneous Conditioning)', 'Simultaneous Conditioning'],
    ],
    'आकारण (Shaping) में अंतिम जटिल व्यवहार की प्रतीक्षा करने के बजाय उसके निकट पहुँचने वाले प्रत्येक छोटे कदम को पुरस्कार देकर व्यवहार गढ़ा जाता है।',
    'Shaping builds complex behaviors by reinforcing closer and closer successive approximations toward the final target behavior.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    '“अभिक्रमित अनुदेशन” (Programmed Instruction) और शिक्षण मशीन (Teaching Machine) के जनक कौन माने जाते हैं?',
    'Who is regarded as the pioneer of “Programmed Instruction” and Teaching Machines?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['जेरोम ब्रूनर', 'Jerome Bruner'],
      ['डेविड आसुबेल', 'David Ausubel'],
      ['कर्ट लेविन', 'Kurt Lewin'],
    ],
    'बी.एफ. स्किनर ने क्रिया-प्रसूत अनुबंधन के सिद्धांत पर आधारित रेखीय अभिक्रमित अनुदेशन (Linear Programmed Instruction) और शिक्षण मशीन का विकास किया।',
    'B.F. Skinner developed Linear Programmed Instruction and teaching machines grounded in operant conditioning principles.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'स्किनर के रेखीय अभिक्रमित अनुदेशन (Linear Programming) और नॉर्मन क्राउडर के शाखीय अनुदेशन (Branching Programming) में मुख्य अंतर क्या है?',
    'What is the main difference between Skinner’s Linear Programming and Norman Crowder’s Branching Programming?',
    ['रेखीय में सभी छात्र एक ही क्रम में छोटे पद पढ़ते हैं, जबकि शाखीय में त्रुटि होने पर उपचारात्मक शाखा पर भेजा जाता है', 'In linear programming all learners follow the same sequence of small frames, whereas branching routes errors to remedial frames'],
    [
      ['रेखीय केवल महाविद्यालय के लिए है और शाखीय केवल नर्सरी के लिए', 'Linear is strictly for colleges and branching is strictly for nursery'],
      ['रेखीय में तुरंत प्रतिपुष्टि नहीं मिलती, जबकि शाखीय में परीक्षण नहीं होता', 'Linear gives no immediate feedback while branching has no testing'],
      ['रेखीय गेस्टाल्ट सिद्धांत पर और शाखीय पावलॉव पर आधारित है', 'Linear is based on Gestalt and branching on Pavlov'],
    ],
    'स्किनर का रेखीय अभिक्रम छोटे पदों, सक्रिय अनुक्रिया व न्यूनतम त्रुटि पर बल देता है, जबकि क्राउडर का शाखीय अभिक्रम बहुविकल्पीय उत्तर के आधार पर उपचारात्मक मार्ग देता है।',
    'Skinner’s linear style moves every learner through identical small frames avoiding errors, while Crowder’s branching style uses multiple-choice errors to direct learners to remedial branches.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    'निम्नलिखित में से कौन-सा “प्राथमिक पुनर्बलक” (Primary Reinforcer) का उदाहरण है?',
    'Which of the following is an example of a “Primary Reinforcer”?',
    ['भूखे प्राणी के लिए भोजन एवं प्यासे के लिए जल', 'Food for a hungry organism and water for a thirsty one'],
    [
      ['परीक्षा में मिले अंक या ग्रेड', 'Marks or grades obtained in an exam'],
      ['टोकन या स्टार स्टिकर', 'Tokens or star stickers'],
      ['धनराशि या प्रमाण-पत्र', 'Money or certificates'],
    ],
    'प्राथमिक पुनर्बलक जैविक आवश्यकताओं (भोजन, जल, नींद, सुरक्षा) को सीधे संतुष्ट करते हैं और इन्हें सीखने की आवश्यकता नहीं होती, जबकि अंक, धन व टोकन द्वितीयक पुनर्बलक हैं।',
    'Primary reinforcers satisfy innate biological needs directly (food, water), whereas marks, tokens, and money are secondary (conditioned) reinforcers.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    '“प्रीमेक सिद्धांत” (Premack Principle / दादी का नियम) के अनुसार किसी कम पसंदीदा कार्य को कराने का सर्वोत्तम तरीका क्या है?',
    'According to the “Premack Principle” (Grandma’s Rule), what is the best way to motivate a less-preferred activity?',
    ['कम पसंदीदा कार्य पूरा करने के बाद अधिक पसंदीदा कार्य करने का अवसर देना', 'Making a high-probability preferred activity contingent on completing the low-probability activity'],
    [
      ['अधिक पसंदीदा कार्य पहले कराकर कम पसंदीदा कार्य छोड़ देना', 'Allowing the preferred task first and skipping the less-preferred one'],
      ['दोनों कार्यों के लिए शारीरिक दंड निर्धारित करना', 'Assigning physical punishment for both tasks'],
      ['छात्र को किसी भी कार्य से पूर्णतः मुक्त कर देना', 'Completely exempting the student from all tasks'],
    ],
    'डेविड प्रीमेक के सिद्धांत के अनुसार उच्च-प्रायिकता वाला पसंदीदा व्यवहार (जैसे खेलना) निम्न-प्रायिकता वाले व्यवहार (जैसे गणित अभ्यास) के लिए पुनर्बलक का काम करता है।',
    'Premack’s principle states that a preferred high-frequency behavior (e.g., playing) can reinforce a less-preferred behavior (e.g., doing math homework).',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    'कक्षा में विद्यार्थियों को अच्छे व्यवहार पर प्लास्टिक टोकन या स्टार देना और बाद में उन्हें पसंदीदा पुस्तक या गतिविधि से बदलने देना किस व्यवस्था का उदाहरण है?',
    'Giving students tokens or stars for good behavior that can later be exchanged for preferred books or privileges is an example of:',
    ['टोकन इकॉनमी (Token Economy)', 'Token Economy'],
    [
      ['शास्त्रीय विलोपन (Classical Extinction)', 'Classical Extinction'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
      ['विभेदात्मक अनुबंधन (Differential Conditioning)', 'Differential Conditioning'],
    ],
    'टोकन इकॉनमी क्रिया-प्रसूत अनुबंधन पर आधारित व्यवहार परिमार्जन तकनीक है जिसमें द्वितीयक पुनर्बलक (टोकन) जमा करके बैकअप पुनर्बलक प्राप्त किए जाते हैं।',
    'A Token Economy is an operant behavior-modification system where secondary reinforcers (tokens) are accumulated and exchanged for backup reinforcers.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“The Behavior of Organisms” (1938) नामक प्रसिद्ध पुस्तक के लेखक कौन हैं?',
    'Who is the author of the famous book “The Behavior of Organisms” (1938)?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['ई.एल. थॉर्नडाइक', 'E.L. Thorndike'],
      ['इवान पावलॉव', 'Ivan Pavlov'],
      ['क्लार्क एल. हल', 'Clark L. Hull'],
    ],
    '1938 में प्रकाशित “The Behavior of Organisms” में बी.एफ. स्किनर ने क्रिया-प्रसूत अनुबंधन के सिद्धांत को व्यवस्थित रूप से प्रस्तुत किया।',
    'In “The Behavior of Organisms” (1938), B.F. Skinner systematically laid out the principles of operant conditioning.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने भाषा विकास की व्याख्या अपनी पुस्तक “Verbal Behavior” (1957) में किस आधार पर की, जिसकी बाद में नोम चोम्स्की ने आलोचना की?',
    'In “Verbal Behavior” (1957), how did Skinner explain language acquisition, which Noam Chomsky later criticized?',
    ['अनुकरण, साहचर्य और अभिभावकों द्वारा दिए जाने वाले पुनर्बलन से भाषा सीखी जाती है', 'Language is acquired through imitation, association, and reinforcement from caregivers'],
    [
      ['भाषा मस्तिष्क में स्थित जन्मजात भाषा अर्जन तंत्र (LAD) से स्वतः विकसित होती है', 'Language develops innately from a Language Acquisition Device (LAD)'],
      ['भाषा केवल संज्ञानात्मक सूझ से एक ही दिन में आती है', 'Language emerges instantaneously from cognitive insight'],
      ['भाषा अधिगम का वातावरण से कोई संबंध नहीं है', 'Language learning has no relation to the environment'],
    ],
    'स्किनर ने भाषा को भी अन्य क्रिया-प्रसूत व्यवहारों की भाँति पुनर्बलन और अनुकरण से सीखा हुआ माना, जबकि चोम्स्की ने जन्मजात सार्वभौमिक व्याकरण (LAD) का तर्क दिया।',
    'Skinner argued language is learned like any operant via imitation and reinforcement, whereas Chomsky posited an innate Language Acquisition Device.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'एक शिक्षक कक्षा में कभी 3 दिन बाद, कभी 7 दिन बाद और कभी 2 दिन बाद आकस्मिक निरीक्षण (Surprise Check) कर सही नोटबुक पर पुरस्कार देता है। यह कौन-सी अनुसूची है?',
    'A teacher conducts surprise notebook checks after 3 days, then 7 days, then 2 days, rewarding neat work. Which reinforcement schedule is this?',
    ['परिवर्ती अंतराल अनुसूची (Variable Interval Schedule)', 'Variable Interval Schedule'],
    [
      ['निश्चित अंतराल अनुसूची', 'Fixed Interval Schedule'],
      ['निश्चित अनुपात अनुसूची', 'Fixed Ratio Schedule'],
      ['सतत पुनर्बलन अनुसूची', 'Continuous Reinforcement Schedule'],
    ],
    'जब पुनर्बलन मिलने का समय अंतराल अनिश्चित और बदलता रहता है (परंतु औसत समय के इर्द-गिर्द रहता है), तो वह परिवर्ती अंतराल (VI) अनुसूची कहलाती है, जिससे छात्र निरंतर तैयारी बनाए रखते हैं।',
    'When reinforcement follows varying, unpredictable periods of time, it is a Variable Interval (VI) schedule, promoting steady consistent effort.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'स्किनर के अनुसार व्यवहार में वांछित परिवर्तन लाने के लिए “दंड” की तुलना में “सकारात्मक पुनर्बलन” को क्यों प्राथमिकता दी जानी चाहिए?',
    'According to Skinner, why should “positive reinforcement” be preferred over “punishment” for modifying behavior?',
    ['दंड केवल अस्थायी रूप से व्यवहार दबाता है और भय व आक्रामकता उत्पन्न कर सकता है, जबकि पुनर्बलन स्थायी वांछित व्यवहार सिखाता है', 'Punishment only suppresses behavior temporarily and can trigger fear/aggression, while reinforcement teaches lasting desired behavior'],
    [
      ['दंड देने में बहुत अधिक समय लगता है और पुरस्कार मुफ्त होता है', 'Punishment takes too much time while rewards are free'],
      ['दंड से व्यवहार हमेशा दोगुनी गति से स्थायी हो जाता है', 'Punishment permanently doubles the speed of learning'],
      ['स्किनर बॉक्स में दंड का कोई प्रयोग कभी नहीं किया गया', 'Punishment was never tested in a Skinner Box'],
    ],
    'स्किनर ने स्पष्ट किया कि दंड यह नहीं सिखाता कि “क्या करना है”, बल्कि केवल भय पैदा कर व्यवहार को क्षणिक रूप से दबाता है; जबकि पुनर्बलन सही दिशा में व्यवहार का निर्माण करता है।',
    'Skinner emphasized that punishment merely suppresses behavior temporarily and induces negative emotions without teaching the appropriate replacement behavior.',
    'MEDIUM'
  ),

  // --- अतिरिक्त तुलनात्मक एवं गहन प्रश्न (थॉर्नडाइक - पावलॉव - स्किनर) ---
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'पावलॉव के शास्त्रीय अनुबंधन और स्किनर के क्रिया-प्रसूत अनुबंधन में सर्वाधिक मूलभूत अंतर क्या है?',
    'What is the most fundamental difference between Pavlov’s Classical Conditioning and Skinner’s Operant Conditioning?',
    ['शास्त्रीय अनुबंधन अनैच्छिक प्रतिवादी व्यवहार से जुड़ा है, जबकि क्रिया-प्रसूत स्वैच्छिक व्यवहार एवं उसके परिणामों से', 'Classical conditioning involves involuntary respondent behaviors, whereas operant conditioning involves voluntary behaviors shaped by consequences'],
    [
      ['शास्त्रीय अनुबंधन केवल मनुष्यों पर और क्रिया-प्रसूत केवल पक्षियों पर लागू होता है', 'Classical applies only to humans and operant only to birds'],
      ['शास्त्रीय अनुबंधन में उद्दीपन नहीं होता और क्रिया-प्रसूत में अनुक्रिया नहीं होती', 'Classical has no stimulus and operant has no response'],
      ['दोनों में प्राणी पूरी तरह निष्क्रिय रहता है', 'The organism remains completely passive in both'],
    ],
    'शास्त्रीय अनुबंधन में प्राणी उद्दीपन के प्रति अनैच्छिक प्रतिक्रिया (जैसे लार आना) करता है, जबकि क्रिया-प्रसूत अनुबंधन में प्राणी अपनी इच्छा से पर्यावरण पर क्रिया (जैसे लीवर दबाना) करता है।',
    'Classical conditioning pairs stimuli to elicit involuntary reflexes, whereas operant conditioning strengthens or weakens voluntary actions through their consequences.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'थॉर्नडाइक के “प्रभाव के नियम” और स्किनर के “पुनर्बलन सिद्धांत” के बीच क्या संबंध है?',
    'What is the relationship between Thorndike’s “Law of Effect” and Skinner’s “Reinforcement Theory”?',
    ['स्किनर ने थॉर्नडाइक के प्रभाव के नियम को ही परिष्कृत और वैज्ञानिक रूप देकर क्रिया-प्रसूत पुनर्बलन सिद्धांत बनाया', 'Skinner refined and systematized Thorndike’s Law of Effect into operant reinforcement theory'],
    [
      ['स्किनर ने थॉर्नडाइक के प्रभाव के नियम को पूरी तरह गलत सिद्ध कर दिया', 'Skinner completely disproved Thorndike’s Law of Effect'],
      ['दोनों के बीच कोई ऐतिहासिक या सैद्धांतिक संबंध नहीं है', 'There is no historical or theoretical connection between the two'],
      ['थॉर्नडाइक ने स्किनर के सिद्धांत की नकल की थी', 'Thorndike copied Skinner’s later theory'],
    ],
    'थॉर्नडाइक (1898-1911) ने संतोष-असंतोष के रूप में प्रभाव का नियम दिया; स्किनर (1938) ने “संतोष” जैसे मानसिक शब्द हटाकर प्रेक्षणीय “पुनर्बलन” के रूप में उसे विकसित किया।',
    'Thorndike introduced the Law of Effect using subjective terms like satisfaction; Skinner operationalized it as observable Reinforcement in operant conditioning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'एक छात्र बार-बार पहाड़ा (Multiplication Tables) बोलकर और लिखकर दोहराता है जिससे वह उन्हें बिना भूले सुना पाता है। यह थॉर्नडाइक के किस नियम की पुष्टि करता है?',
    'A student repeatedly recites and writes multiplication tables so he can recall them accurately. This confirms which law of Thorndike?',
    ['अभ्यास का नियम — उपयोग का नियम', 'Law of Exercise — Law of Use'],
    [
      ['अभ्यास का नियम — अनुपयोग का नियम', 'Law of Exercise — Law of Disuse'],
      ['तत्परता का नियम', 'Law of Readiness'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
    ],
    'सार्थक पुनरावृत्ति और अभ्यास द्वारा उद्दीपन-अनुक्रिया बंधन का मजबूत होना अभ्यास के नियम के अंतर्गत “उपयोग का नियम” है।',
    'Strengthening an S-R connection through meaningful repetition exemplifies the Law of Use under Thorndike’s Law of Exercise.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'यदि कोई व्यक्ति वर्षों तक टाइपिंग या किसी विदेशी भाषा का अभ्यास न करे तो उसकी गति और स्मरण शक्ति कम हो जाती है। यह थॉर्नडाइक का कौन-सा नियम है?',
    'If a person stops practicing typing or a foreign language for years, speed and recall decline. Which law of Thorndike explains this?',
    ['अनुपयोग का नियम (Law of Disuse)', 'Law of Disuse'],
    [
      ['प्रभाव का नियम (Law of Effect)', 'Law of Effect'],
      ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
      ['बहु-प्रतिक्रिया का नियम (Law of Multiple Response)', 'Law of Multiple Response'],
    ],
    'थॉर्नडाइक के अनुपयोग के नियम के अनुसार जब किसी उद्दीपन और अनुक्रिया के मध्य लंबे समय तक अभ्यास नहीं होता, तो उनका बंधन कमजोर पड़ जाता है।',
    'According to the Law of Disuse, when an S-R connection is not exercised over a period of time, its strength weakens.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'तत्परता का नियम',
    'थॉर्नडाइक ने “तत्परता के नियम” के अंतर्गत संतोष और असंतोष की तीन स्थितियाँ बताई हैं। जब कोई छात्र सीखने के लिए तैयार है और उसे सीखने का अवसर मिलता है, तो क्या होता है?',
    'Thorndike described three conditions under the Law of Readiness. When a student is ready to act and is allowed to act, what happens?',
    ['छात्र को संतोष (Satisfaction) का अनुभव होता है', 'The student experiences satisfaction'],
    [
      ['छात्र को खीझ (Annoyance) होती है', 'The student experiences annoyance'],
      ['अधिगम तुरंत रुक जाता है', 'Learning stops immediately'],
      ['छात्र में विलोपन प्रारंभ हो जाता है', 'Extinction begins in the student'],
    ],
    'तत्परता के नियम के अनुसार: (1) तैयार होने पर कार्य करने देना संतोष देता है, (2) तैयार होने पर कार्य न करने देना खीझ देता है, (3) तैयार न होने पर कार्य के लिए बाध्य करना भी खीझ देता है।',
    'Under the Law of Readiness: acting when ready brings satisfaction; being prevented when ready or forced when unready causes annoyance.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'तत्परता का नियम',
    'थॉर्नडाइक के तत्परता के नियम के अनुसार कक्षा में नया पाठ शुरू करने से पहले शिक्षक को क्या करना चाहिए?',
    'According to Thorndike’s Law of Readiness, what should a teacher do before starting a new lesson?',
    ['प्रस्तावना प्रश्नों व रोचक गतिविधि से छात्रों में जिज्ञासा व मानसिक तैयारी जागृत करनी चाहिए', 'Awaken curiosity and mental readiness through introductory questions and engaging activities'],
    [
      ['बिना भूमिका के सीधे कठिन प्रश्न हल कराने चाहिए', 'Immediately start solving tough problems without introduction'],
      ['छात्रों की रुचि जाने बिना केवल नोट्स लिखवाने चाहिए', 'Dictate notes without assessing student interest'],
      ['सभी छात्रों को एक ही गति से रटने का आदेश देना चाहिए', 'Order all students to memorize at an identical pace'],
    ],
    'अभिप्रेरणा, पूर्व-ज्ञान जाँच और प्रस्तावना द्वारा बच्चों को मानसिक रूप से तैयार करना तत्परता के नियम का प्रत्यक्ष शैक्षिक उपयोग है।',
    'Motivating learners, checking prior knowledge, and arousing curiosity before instruction directly applies the Law of Readiness.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'अधिगम वक्र में पावलॉव के प्रयोग के दौरान जब घंटी और भोजन बार-बार साथ दिए जाते हैं, तो उस चरण को क्या कहा जाता है?',
    'During Pavlov’s experiment, the phase in which the bell and food are repeatedly paired together is called:',
    ['अर्जन चरण (Acquisition Phase)', 'Acquisition Phase'],
    [
      ['विलोपन चरण (Extinction Phase)', 'Extinction Phase'],
      ['विभेदन चरण (Discrimination Phase)', 'Discrimination Phase'],
      ['ऊष्मायन चरण (Incubation Phase)', 'Incubation Phase'],
    ],
    'अर्जन (Acquisition) वह प्रारंभिक अवस्था है जिसमें तटस्थ उद्दीपन (CS) और स्वाभाविक उद्दीपन (UCS) के बार-बार युग्मन से अनुबंधित अनुक्रिया विकसित होती है।',
    'Acquisition is the initial learning stage in which repeated CS-UCS pairings establish the conditioned response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के अनुसार यदि स्वाभाविक उद्दीपन (भोजन) पहले दिया जाए और घंटी (CS) बाद में बजाई जाए (पश्चगामी अनुबंधन), तो उसका परिणाम क्या होता है?',
    'According to Pavlov, if the UCS (food) is presented first and the CS (bell) is sounded afterwards (Backward Conditioning), what is the result?',
    ['अनुबंधन अत्यंत दुर्बल होता है या बिल्कुल नहीं बनता', 'Conditioning is extremely weak or fails to occur'],
    [
      ['अनुबंधन सबसे अधिक स्थायी और तीव्र होता है', 'Conditioning becomes the strongest and fastest'],
      ['कुत्ता तुरंत उच्च-स्तरीय अनुबंधन सीख लेता है', 'The dog immediately learns higher-order conditioning'],
      ['विलोपन कभी संभव नहीं होता', 'Extinction becomes impossible'],
    ],
    'अनुबंधित उद्दीपन को स्वाभाविक उद्दीपन के आने का पूर्व-संकेत (Predictor) होना चाहिए; पश्चगामी अनुबंधन में यह संकेत क्षमता न होने से अनुबंधन लगभग असफल रहता है।',
    'Because the CS must serve as a predictive signal for the UCS, presenting the UCS before the CS (Backward Conditioning) yields little or no conditioning.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी पुस्तक “Walden Two” (1948) में किस विचार की कल्पना प्रस्तुत की थी?',
    'In his 1948 book “Walden Two”, what concept did B.F. Skinner envision?',
    ['व्यवहारवादी सिद्धांतों और सकारात्मक पुनर्बलन पर आधारित एक आदर्श समुदाय का निर्माण', 'A utopian community designed using behavioral engineering and positive reinforcement'],
    [
      ['केवल आनुवंशिक चयन पर आधारित विद्यालय प्रणाली', 'A school system based purely on genetic selection'],
      ['दंड और कारावास द्वारा समाज सुधार', 'Social reform through punishment and imprisonment'],
      ['प्रौद्योगिकी से पूर्णतः मुक्त आदिम जीवन', 'A primitive society completely devoid of technology'],
    ],
    '“Walden Two” स्किनर का प्रसिद्ध उपन्यास है जिसमें उन्होंने दिखाया कि सकारात्मक पुनर्बलन और व्यवहार विज्ञान के उपयोग से एक शांतिपूर्ण, सहयोगी समाज बनाया जा सकता है।',
    '“Walden Two” is Skinner’s utopian novel depicting a cooperative society engineered through positive reinforcement and behavioral science.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'स्कूल में यदि किसी बच्चे के हर सही उच्चारण पर शिक्षक “बहुत बढ़िया” कहे और एक सप्ताह बाद केवल हर तीसरे या पाँचवें सही उत्तर पर शाबाशी दे, तो यह बदलाव क्या दर्शाता है?',
    'If a teacher praises every correct pronunciation initially, and after a week praises only every third or fifth correct answer, what shift does this represent?',
    ['सतत पुनर्बलन से आंशिक (परिवर्ती अनुपात) पुनर्बलन की ओर संक्रमण', 'Shifting from Continuous Reinforcement to Partial (Variable Ratio) Reinforcement'],
    [
      ['आंशिक पुनर्बलन से विलोपन की ओर संक्रमण', 'Shifting from partial reinforcement to extinction'],
      ['सकारात्मक पुनर्बलन से शारीरिक दंड की ओर संक्रमण', 'Shifting from positive reinforcement to corporal punishment'],
      ['प्राथमिक पुनर्बलन से पश्चगामी अनुबंधन की ओर संक्रमण', 'Shifting from primary reinforcement to backward conditioning'],
    ],
    'प्रारंभ में व्यवहार सिखाने के लिए सतत पुनर्बलन और फिर उसे स्थायी बनाए रखने के लिए आंशिक (विशेषतः परिवर्ती) पुनर्बलन देना स्किनर का सर्वोत्तम शैक्षिक क्रम है।',
    'Starting with continuous reinforcement to build a skill and transitioning to partial (variable ratio) reinforcement to maintain it is optimal operant practice.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'निम्नलिखित में से किस विद्वान ने थॉर्नडाइक के सिद्धांत को “S-R सिद्धांत बिना पुनर्बलन” के बजाय “प्रभाव आधारित संबंधवाद” कहा?',
    'Which describes Thorndike’s theory most accurately in educational psychology?',
    ['यह उद्दीपन-अनुक्रिया (S-R) बंधन पर आधारित सिद्धांत है जिसमें परिणाम (प्रभाव) बंधन को दृढ़ या क्षीण करते हैं', 'It is an S-R connectionist theory where consequences (effect) strengthen or weaken the bond'],
    [
      ['यह बिना किसी अनुक्रिया के केवल मानसिक चिंतन का सिद्धांत है', 'It is a purely mentalistic theory without responses'],
      ['यह केवल पावलॉव के प्रतिवर्त चाप का दोहराव है', 'It is merely a repetition of Pavlov’s reflex arc'],
      ['यह केवल अचेतन मन के दमन पर आधारित है', 'It is based solely on repression in the unconscious mind'],
    ],
    'थॉर्नडाइक का संबंधवाद इस बात पर टिका है कि परिस्थितियों (उद्दीपन) और क्रियाओं (अनुक्रिया) के बीच स्नायविक बंधन अभ्यास और सुखद प्रभाव से बनते हैं।',
    'Thorndike’s Connectionism posits that neural bonds between stimuli and responses are forged through practice and satisfying effects.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    '“सीखने में त्रुटियाँ अवांछनीय नहीं हैं, बल्कि वे सुधार की सीढ़ी हैं” — यह दृष्टिकोण मुख्यतः किस सिद्धांत से मेल खाता है?',
    '“Errors in learning are not undesirable; rather they are stepping stones to improvement” — this view aligns closely with:',
    ['थॉर्नडाइक का प्रयास एवं त्रुटि सिद्धांत', 'Thorndike’s Trial and Error Theory'],
    [
      ['केवल रटंत स्मृति सिद्धांत', 'Rote memorization theory'],
      ['निष्क्रिय अवशोषण सिद्धांत', 'Passive absorption model'],
      ['दैवीय प्रेरणा सिद्धांत', 'Divine inspiration theory'],
    ],
    'थॉर्नडाइक के अनुसार प्रारंभिक प्रयासों में त्रुटियाँ होना स्वाभाविक है; बार-बार प्रयास करने पर असफल अनुक्रियाएँ घटती हैं और सही अनुक्रिया का चयन होता है।',
    'According to Thorndike, initial errors are natural; through repeated attempts, unsuccessful responses drop out and correct ones are selected.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'ब्रेड बेकरी के पास से गुज़रते ही उसकी सुगंध से मुँह में पानी आ जाना और बाद में बेकरी का केवल साइनबोर्ड देखकर भी लार आ जाना किसका उदाहरण है?',
    'Mouth watering upon smelling fresh bread near a bakery, and later salivating merely at the sight of the bakery signboard, is an example of:',
    ['शास्त्रीय अनुबंधन (Classical Conditioning)', 'Classical Conditioning'],
    [
      ['अंतर्दृष्टि अधिगम (Insight Learning)', 'Insight Learning'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
      ['क्षेत्र सिद्धांत (Field Theory)', 'Field Theory'],
    ],
    'यहाँ ब्रेड की सुगंध या स्वाद स्वाभाविक उद्दीपन था और बेकरी का साइनबोर्ड उसके साथ जुड़कर अनुबंधित उद्दीपन बन गया, जिससे अनुबंधित लार अनुक्रिया होने लगी।',
    'Here the bakery sign became a conditioned stimulus paired with the smell/taste of bread, triggering a conditioned salivation response.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'यदि किसी छात्र को गणित के कठिन प्रश्न के कारण शिक्षक से डाँट पड़ती है और कुछ दिनों बाद वह गणित की पुस्तक देखते ही घबराहट महसूस करने लगता है, तो गणित की पुस्तक यहाँ क्या है?',
    'If a student is scolded over tough math problems and soon feels anxious merely seeing the math textbook, what is the math textbook here?',
    ['अनुबंधित उद्दीपन (Conditioned Stimulus - CS)', 'Conditioned Stimulus (CS)'],
    [
      ['स्वाभाविक उद्दीपन (Unconditioned Stimulus - UCS)', 'Unconditioned Stimulus (UCS)'],
      ['स्वाभाविक अनुक्रिया (Unconditioned Response - UCR)', 'Unconditioned Response (UCR)'],
      ['सकारात्मक पुनर्बलक (Positive Reinforcer)', 'Positive Reinforcer'],
    ],
    'डाँट (UCS) से घबराहट (UCR) स्वाभाविक थी; गणित की पुस्तक डाँट के साथ जुड़कर अनुबंधित उद्दीपन (CS) बन गई, जिसे देखकर अब घबराहट (CR) उत्पन्न होती है।',
    'Scolding (UCS) naturally evoked anxiety (UCR); paired with scolding, the math textbook became the Conditioned Stimulus (CS) eliciting anxiety (CR).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने व्यवहार को नियंत्रित करने वाले किन दो मुख्य घटकों पर बल दिया?',
    'Which two main behavior-controlling mechanisms did Skinner emphasize?',
    ['पुनर्बलन (Reinforcement) और अनुसूचियाँ (Schedules)', 'Reinforcement and Schedules of Reinforcement'],
    [
      ['जन्मजात मूल प्रवृत्ति और अचेतन दमन', 'Innate instincts and unconscious repression'],
      ['केवल परिपक्वता और आयु', 'Only maturation and chronological age'],
      ['अंतर्दृष्टि और संज्ञानात्मक मानचित्र', 'Insight and cognitive maps'],
    ],
    'स्किनर के अनुसार प्राणी का व्यवहार उसके परिणामों—विशेषकर सकारात्मक/नकारात्मक पुनर्बलन तथा उनके वितरण की अनुसूचियों—से आकारित होता है।',
    'Skinner emphasized that behavior is shaped and maintained by its consequences—specifically reinforcement and schedules of reinforcement.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'अभिक्रमित अनुदेशन (Programmed Instruction) के पाँच प्रमुख सिद्धांतों में निम्नलिखित में से कौन-सा शामिल है?',
    'Which of the following is included among the five core principles of Programmed Instruction?',
    ['लघु पदों का सिद्धांत, सक्रिय अनुक्रिया, तत्काल प्रतिपुष्टि, स्व-गति और स्व-परीक्षण', 'Small steps, active responding, immediate feedback, self-pacing, and student testing'],
    [
      ['बड़े व्याख्यान, निष्क्रिय श्रवण और वार्षिक परीक्षा', 'Large lectures, passive listening, and annual testing'],
      ['केवल समूह चर्चा और अनियंत्रित गति', 'Group discussion only and uncontrolled pacing'],
      ['शिक्षक-केंद्रित दंड और विलंबित परिणाम', 'Teacher-centered punishment and delayed results'],
    ],
    'अभिक्रमित अनुदेशन के पाँच आधारभूत सिद्धांत हैं: लघु पद (Small Steps), सक्रिय अनुक्रिया (Active Responding), तत्काल पुष्टि (Immediate Confirmation), स्व-गति (Self-pacing) तथा छात्र मूल्यांकन।',
    'The five principles of Programmed Instruction are small steps, active responding, immediate feedback, self-pacing, and learner verification.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    'स्किनर के अनुसार “पुनर्बलन” की सही परिभाषा क्या है?',
    'What is the accurate definition of “Reinforcement” according to Skinner?',
    ['कोई भी उद्दीपन या घटना जो अपने पूर्ववर्ती व्यवहार के भविष्य में दोहराए जाने की संभावना को बढ़ा दे', 'Any stimulus or event that increases the probability of the preceding behavior recurring in the future'],
    [
      ['केवल मिठाई या धन के रूप में दिया जाने वाला पुरस्कार', 'Only rewards given in the form of sweets or money'],
      ['ऐसी घटना जो हमेशा व्यवहार को समाप्त कर दे', 'An event that always eliminates a behavior'],
      ['केवल शिक्षक द्वारा दी जाने वाली मौखिक चेतावनी', 'Only a verbal warning issued by the teacher'],
    ],
    'स्किनर के अनुसार पुनर्बलन की पहचान उसके नाम से नहीं बल्कि उसके प्रभाव से होती है—जो अनुक्रिया की प्रायिकता (Probability) बढ़ा दे, वही पुनर्बलन है।',
    'For Skinner, reinforcement is defined functionally: any consequence that increases the future frequency or probability of the preceding response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी किस रचना में मानव बुद्धि और शैक्षिक मापन के साथ-साथ सीखने के नियमों की विस्तृत व्याख्या की?',
    'In which major work did Thorndike elaborate the laws of learning alongside educational psychology?',
    ['Educational Psychology (तीन खंड, 1913–1914)', 'Educational Psychology (3 volumes, 1913–1914)'],
    [
      ['Principles of Gestalt Psychology (1935)', 'Principles of Gestalt Psychology (1935)'],
      ['Social Learning Theory (1977)', 'Social Learning Theory (1977)'],
      ['Conditioned Reflexes (1927)', 'Conditioned Reflexes (1927)'],
    ],
    'थॉर्नडाइक ने 1913–1914 में तीन खंडों में “Educational Psychology” प्रकाशित की, जिसमें मूल प्रवृत्तियों, अधिगम के नियमों तथा व्यक्तिगत विभिन्नताओं का विस्तृत विवेचन है।',
    'Thorndike published his three-volume “Educational Psychology” in 1913–1914, detailing the laws of learning and individual differences.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव द्वारा 1927 में प्रकाशित कौन-सी पुस्तक अनुबंधित प्रतिवर्त (Conditioned Reflexes) पर उनके व्याख्यानों का संकलन है?',
    'Which 1927 book by Pavlov is a compilation of his lectures on conditioned reflexes?',
    ['Conditioned Reflexes', 'Conditioned Reflexes'],
    [
      ['The Mentality of Apes', 'The Mentality of Apes'],
      ['Beyond Freedom and Dignity', 'Beyond Freedom and Dignity'],
      ['Field Theory in Social Science', 'Field Theory in Social Science'],
    ],
    '“Conditioned Reflexes” (1927) पावलॉव की प्रमुख कृति है जिसमें शास्त्रीय अनुबंधन के प्रायोगिक निष्कर्ष संकलित हैं।',
    '“Conditioned Reflexes” (1927) compiles Ivan Pavlov’s experimental lectures on classical conditioning.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'आकारण एवं शृंखलन',
    'कई अलग-अलग सरल क्रियाओं को एक निश्चित क्रम में जोड़कर एक जटिल गतिविधि (जैसे जूते के फीते बाँधना या कार चलाने के क्रमिक चरण) सिखाने की प्रक्रिया को स्किनर की शब्दावली में क्या कहते हैं?',
    'Linking a sequence of distinct simple actions in a fixed order to teach a complex routine (like tying shoelaces) is called:',
    ['शृंखलन (Chaining)', 'Chaining'],
    [
      ['विलोपन (Extinction)', 'Extinction'],
      ['उद्दीपन विभेदन (Discrimination)', 'Discrimination'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
    ],
    'शृंखलन (Chaining) में एक क्रिया का परिणाम अगली क्रिया के लिए संकेत (Discriminative Stimulus) का कार्य करता है जिससे पूरा क्रम जुड़ जाता है।',
    'In Chaining, individual responses are linked together in sequence where each step cues the next until the entire routine is completed.',
    'HARD'
  ),

  // --- अतिरिक्त प्रश्न: सीखने के सिद्धांत (भाग 1) - अभ्यास एवं अनुप्रयोग ---
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के सोपान',
    'सीखने की सामान्य प्रक्रिया में निम्नलिखित में से कौन-सा क्रम मनोवैज्ञानिक दृष्टि से सर्वाधिक तार्किक है?',
    'Which sequence in the general learning process is most logical from a psychological standpoint?',
    ['आवश्यकता/अभिप्रेरणा → लक्ष्य → बाधा → विविध अनुक्रियाएँ → सही अनुक्रिया का चयन → स्थायीकरण', 'Need/Motivation → Goal → Barrier → Varied Responses → Selection of Correct Response → Stabilization'],
    [
      ['बाधा → बिना लक्ष्य के अनुक्रिया → आवश्यकता → विस्मरण', 'Barrier → Aimless Response → Need → Forgetting'],
      ['स्थायीकरण → बाधा → लक्ष्य → अभिप्रेरणा', 'Stabilization → Barrier → Goal → Motivation'],
      ['दंड → लक्ष्य समाप्त → निष्क्रियता', 'Punishment → Goal Elimination → Passivity'],
    ],
    'प्रभावी अधिगम किसी आवश्यकता या अभिप्रेरणा से शुरू होता है, लक्ष्य की ओर बढ़ने पर बाधा आती है, जिसके समाधान हेतु विविध प्रयासों में से सफल अनुक्रिया स्थायी हो जाती है।',
    'Learning typically begins with a need/motive toward a goal, encounters a barrier, prompts varied attempts, and stabilizes the successful response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'एक अध्यापक कक्षा में किसी कठिन गणित के प्रश्न को हल करने पर छात्रों को तुरंत शाबाशी और अतिरिक्त अंक देता है, जिससे छात्रों में प्रश्न हल करने की रुचि बढ़ जाती है। यह किस नियम का अनुप्रयोग है?',
    'A teacher immediately praises and awards bonus marks when students solve tough math problems, boosting their interest. Which law is applied here?',
    ['प्रभाव का नियम (Law of Effect)', 'Law of Effect'],
    [
      ['अनुपयोग का नियम (Law of Disuse)', 'Law of Disuse'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['विलोपन का नियम', 'Law of Extinction'],
    ],
    'सही अनुक्रिया के बाद सुखद व संतोषजनक परिणाम (शाबाशी/अंक) मिलने से उस अनुक्रिया की शक्ति बढ़ना थॉर्नडाइक के प्रभाव के नियम का सीधा उदाहरण है।',
    'Strengthening a response by following it with a satisfying consequence (praise/bonus marks) directly applies Thorndike’s Law of Effect.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के अनुसार पशु और मानव दोनों में सीखने का मूल आधार क्या है?',
    'According to Thorndike, what is the fundamental basis of learning in both animals and humans?',
    ['उद्दीपन और अनुक्रिया (S-R) के बीच संबंध बनना', 'Formation of connections between Stimulus and Response (S-R bonds)'],
    [
      ['केवल अमूर्त तर्क द्वारा सूझ उत्पन्न होना', 'Emergence of insight solely through abstract reasoning'],
      ['केवल भाषायी व्याख्यान सुनना', 'Merely listening to verbal lectures'],
      ['सामूहिक अवचेतन की जागृति', 'Awakening of the collective unconscious'],
    ],
    'थॉर्नडाइक के अनुसार मनुष्य और पशु दोनों की सीखने की प्रक्रिया मूलतः उद्दीपन और अनुक्रिया के बीच साहचर्य स्थापित होने पर निर्भर करती है, यद्यपि मनुष्य में विचार की जटिलता अधिक होती है।',
    'Thorndike maintained that both animal and human learning rest fundamentally on forming S-R connections, though human connections are far more complex.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में घंटी बजते ही कुत्ते की लार टपकने की प्रक्रिया को “अनुबंधित प्रतिवर्त” (Conditioned Reflex) क्यों कहा गया?',
    'Why was the dog’s salivation to the bell in Pavlov’s experiment called a “Conditioned Reflex”?',
    ['क्योंकि घंटी के प्रति लार आना जन्मजात नहीं था बल्कि प्रशिक्षण व साहचर्य से अर्जित प्रतिवर्त था', 'Because salivating to the bell was not innate, but an acquired reflex formed through training and pairing'],
    [
      ['क्योंकि कुत्ते को शल्य-चिकित्सा से नली लगाई गई थी', 'Because a surgical tube was attached to the dog'],
      ['क्योंकि घंटी स्वाभाविक रूप से खाद्य पदार्थ थी', 'Because the bell was naturally edible'],
      ['क्योंकि कुत्ता जन्म से ही घंटी से डरता था', 'Because the dog was innately afraid of bells'],
    ],
    'भोजन पर लार आना जन्मजात/स्वाभाविक प्रतिवर्त है, जबकि घंटी जैसी कृत्रिम ध्वनि पर लार आना विशेष परिस्थिति (Condition) से जुड़ा अर्जित प्रतिवर्त है।',
    'Salivating to food is an unconditioned innate reflex, whereas salivating to a bell is an acquired reflex dependent on paired conditioning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'एक विद्यालय में लंच की घंटी बजते ही बच्चे उत्साहित होकर अपने टिफिन बॉक्स निकालने लगते हैं। लंच की घंटी यहाँ किसका उदाहरण है?',
    'At school, as soon as the lunch bell rings, children excitedly take out their lunchboxes. Here the lunch bell is an example of:',
    ['अनुबंधित उद्दीपन (CS)', 'Conditioned Stimulus (CS)'],
    [
      ['स्वाभाविक उद्दीपन (UCS)', 'Unconditioned Stimulus (UCS)'],
      ['प्राथमिक पुनर्बलक', 'Primary Reinforcer'],
      ['गौण दंड', 'Secondary Punishment'],
    ],
    'भोजन से जुड़कर विद्यालय की लंच घंटी अनुबंधित उद्दीपन (CS) बन गई है जो स्वतः भोजन की प्रत्याशा और उत्साह जगाती है।',
    'Through repeated pairing with eating lunch, the school lunch bell becomes a Conditioned Stimulus (CS) triggering anticipation.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'शास्त्रीय अनुबंधन में “अवरोध” या “बाह्य अवरोध” (External Inhibition) कब घटित होता है?',
    'When does “External Inhibition” occur in classical conditioning?',
    ['जब अनुबंधित उद्दीपन के साथ कोई नया, अप्रत्याशित बाहरी उद्दीपन (जैसे तेज शोर) आ जाए और CR कमजोर हो जाए', 'When a novel, unexpected external stimulus (like a loud noise) occurs alongside the CS, weakening the CR'],
    [
      ['जब भोजन की मात्रा दोगुनी कर दी जाए', 'When the amount of food is doubled'],
      ['जब विश्राम के बाद लार पुनः आ जाए', 'When salivation recovers after rest'],
      ['जब कुत्ता घंटी और सीटी में अंतर कर ले', 'When the dog differentiates between a bell and a whistle'],
    ],
    'पावलॉव ने देखा कि अनुबंधन के दौरान कोई अनजाना बाहरी व्यवधान (जैसे कमरे में अचानक चमक या शोर) आने पर अनुबंधित अनुक्रिया अस्थायी रूप से घट जाती है; इसे बाह्य अवरोध कहते हैं।',
    'Pavlov observed that introducing a novel distracting stimulus alongside the CS temporarily disrupts and reduces the CR; he called this External Inhibition.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'स्लॉट मशीन या लॉटरी में व्यक्ति बार-बार प्रयास करता रहता है क्योंकि कभी-कभी अप्रत्याशित संख्या में प्रयासों के बाद जीत मिल जाती है। यह किस अनुसूची का सटीक उदाहरण है?',
    'A person keeps playing a slot machine because winning occurs unpredictably after varying numbers of plays. Which schedule does this precisely illustrate?',
    ['परिवर्ती अनुपात अनुसूची (Variable Ratio Schedule)', 'Variable Ratio Schedule'],
    [
      ['निश्चित अंतराल अनुसूची (Fixed Interval)', 'Fixed Interval Schedule'],
      ['परिवर्ती अंतराल अनुसूची (Variable Interval)', 'Variable Interval Schedule'],
      ['सतत अनुसूची (Continuous Schedule)', 'Continuous Schedule'],
    ],
    'अनिश्चित संख्या में अनुक्रियाओं के बाद पुनर्बलन मिलने के कारण परिवर्ती अनुपात अनुसूची में व्यवहार अत्यंत दृढ़ व लगातार बना रहता है।',
    'Because payoff occurs after an unpredictable number of responses, gambling machines operate on a Variable Ratio schedule.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने व्यवहार के दो प्रमुख वर्ग कौन-से बताए हैं?',
    'Which two major classes of behavior did Skinner distinguish?',
    ['प्रतिवादी व्यवहार (Respondent) एवं क्रिया-प्रसूत व्यवहार (Operant)', 'Respondent Behavior and Operant Behavior'],
    [
      ['सचेत व्यवहार एवं अचेतन व्यवहार', 'Conscious behavior and unconscious behavior'],
      ['मूर्त व्यवहार एवं अमूर्त व्यवहार', 'Concrete behavior and abstract behavior'],
      ['अन्वेषी व्यवहार एवं अनुकरण व्यवहार', 'Exploratory behavior and imitative behavior'],
    ],
    'स्किनर के अनुसार ज्ञात उद्दीपन से स्वतः उत्पन्न अनैच्छिक क्रियाएँ प्रतिवादी व्यवहार (Respondent) हैं, जबकि प्राणी द्वारा स्वेच्छा से उत्सर्जित क्रियाएँ क्रिया-प्रसूत व्यवहार (Operant) हैं।',
    'Skinner distinguished Respondent behavior (elicited automatically by known stimuli) from Operant behavior (emitted voluntarily and controlled by consequences).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'स्किनर के अनुसार शिक्षण प्रक्रिया को प्रभावी बनाने के लिए किस बात पर सर्वाधिक ध्यान देना चाहिए?',
    'According to Skinner, what deserves utmost attention to make teaching effective?',
    ['स्पष्ट व्यावहारिक उद्देश्य, छोटे चरण, तत्काल प्रतिपुष्टि और सकारात्मक पुनर्बलन', 'Clear behavioral objectives, small steps, immediate feedback, and positive reinforcement'],
    [
      ['केवल एक वर्ष बाद होने वाली अंतिम परीक्षा', 'Only the final exam held after one year'],
      ['अत्यधिक गृहकार्य और कड़ा अनुशासन', 'Excessive homework and strict corporal discipline'],
      ['बिना जाँचे-परखे पूरे अध्याय को एक साथ पढ़ाना', 'Teaching the whole chapter at once without checks'],
    ],
    'स्किनर ने सिखाया कि बड़ी सामग्री को छोटे क्रमिक फ्रेम में बाँटकर, छात्र को सक्रिय रखकर और सही उत्तर पर तुरंत सकारात्मक पुनर्बलन देकर सर्वोत्तम अधिगम कराया जा सकता है।',
    'Skinner advocated breaking material into small steps, keeping learners active, and delivering immediate positive reinforcement.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'निम्नलिखित में से कौन-सा युग्म थॉर्नडाइक के नियमों और उनके अर्थ के संदर्भ में सही सुमेलित नहीं है?',
    'Which pair is NOT correctly matched regarding Thorndike’s laws and their meanings?',
    ['आंशिक क्रिया का नियम — अभ्यास के बिना सब कुछ भूल जाना', 'Law of Partial Activity — forgetting everything without practice'],
    [
      ['तत्परता का नियम — सीखने के लिए मानसिक एवं शारीरिक तैयारी', 'Law of Readiness — mental and physical preparedness to learn'],
      ['प्रभाव का नियम — सुखद परिणाम से अनुक्रिया का सुदृढ़ होना', 'Law of Effect — strengthening of response by satisfying results'],
      ['बहु-प्रतिक्रिया का नियम — सही हल मिलने तक विविध प्रयास करना', 'Law of Multiple Response — trying varied responses until success'],
    ],
    'अभ्यास के बिना भूल जाने की व्याख्या “अनुपयोग का नियम” करता है, न कि आंशिक क्रिया का नियम। आंशिक क्रिया का नियम महत्वपूर्ण तत्वों को चुनकर अनुक्रिया करने से संबंधित है।',
    'Forgetting due to lack of practice is explained by the Law of Disuse, not the Law of Partial Activity (which deals with responding to key elements).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'पावलॉव, थॉर्नडाइक और स्किनर—तीनों के सिद्धांतों में कौन-सी समानता प्रमुख रूप से पाई जाती है?',
    'What major commonality exists across the theories of Pavlov, Thorndike, and Skinner?',
    ['तीनों व्यवहारवादी परंपरा से जुड़े हैं और प्रेक्षणीय व्यवहार तथा पर्यावरणीय उद्दीपन/परिणाम पर बल देते हैं', 'All three belong to the behaviorist tradition emphasizing observable behavior and environmental stimuli/consequences'],
    [
      ['तीनों ने मानव अधिगम को पूरी तरह जन्मजात व अचेतन माना है', 'All three viewed human learning as purely innate and unconscious'],
      ['तीनों ने गेस्टाल्ट के समग्रता नियम का समर्थन किया है', 'All three endorsed the Gestalt law of wholeness'],
      ['तीनों ने प्रयोग केवल मानव वयस्कों पर किए थे', 'All three experimented exclusively on human adults'],
    ],
    'तीनों मनोवैज्ञानिक वस्तुनिष्ठ प्रेक्षणीय व्यवहार, पशु-प्रयोगों और उद्दीपन-अनुक्रिया-पुनर्बलन तंत्र के अध्ययन के कारण व्यवहारवादी धारा के प्रमुख स्तंभ हैं।',
    'All three belong to behaviorism, focusing on objective observable behavior, animal experiments, and stimulus-response-consequence mechanisms.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'सड़क पर तेज़ गति से वाहन चलाने पर भारी चालान कट जाना किस प्रकार के व्यवहार नियंत्रण का उदाहरण है?',
    'Receiving a heavy traffic fine for overspeeding is an example of which behavioral control mechanism?',
    ['सकारात्मक दंड (Positive Punishment — अप्रिय परिणाम जोड़कर अवांछित व्यवहार कम करना)', 'Positive Punishment (adding an aversive consequence to reduce unwanted behavior)'],
    [
      ['सकारात्मक पुनर्बलन (Positive Reinforcement)', 'Positive Reinforcement'],
      ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
    ],
    'यहाँ “सकारात्मक” का अर्थ कुछ जोड़ना (जुर्माना/कष्ट जोड़ना) है जिससे भविष्य में तेज़ वाहन चलाने का व्यवहार घटे, अतः यह सकारात्मक दंड है।',
    'Here “positive” means adding an aversive stimulus (a fine) to decrease overspeeding, making it Positive Punishment.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने कबूतरों को अंधविश्वासी व्यवहार (Superstitious Behavior) दिखाते हुए क्यों पाया?',
    'Why did Skinner observe “Superstitious Behavior” in pigeons?',
    ['क्योंकि कबूतर की किसी विशेष क्रिया से संबंध न होने पर भी निश्चित समय पर अनियमित (Non-contingent) भोजन मिल रहा था', 'Because food was delivered on a fixed time interval regardless of what the pigeon happened to be doing'],
    [
      ['क्योंकि कबूतर अन्य पक्षियों की नकल कर रहे थे', 'Because pigeons were imitating other birds'],
      ['क्योंकि कबूतरों में जन्मजात धार्मिक प्रवृत्ति होती है', 'Because pigeons have an innate religious instinct'],
      ['क्योंकि उन्हें बिजली का झटका दिया गया था', 'Because they were given electric shocks'],
    ],
    '1948 के प्रसिद्ध प्रयोग में स्किनर ने हर 15 सेकंड पर कबूतर को भोजन दिया; भोजन मिलने से ठीक पहले कबूतर जो भी अनियमित हरकत (जैसे पंख फड़फड़ाना या घूमना) कर रहा था, वह उसे दोहराने लगा।',
    'In his 1948 study, Skinner delivered food every 15 seconds non-contingently; pigeons repeated whatever random movement immediately preceded the food.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'यदि पावलॉव के प्रयोग में घंटी के साथ कभी-कभी ही भोजन दिया जाए और कई बार बिना भोजन के केवल घंटी बजाई जाए, तो अनुबंधन पर क्या प्रभाव पड़ेगा?',
    'In Pavlov’s experiment, if food is paired with the bell only occasionally while the bell rings alone many times, what happens to conditioning?',
    ['अनुबंधन बहुत धीरे और कमजोर रूप से बनेगा या विलोपन की ओर जाएगा', 'Conditioning will form very weakly/slowly or move toward extinction'],
    [
      ['अनुबंधन तुरंत दोगुनी ताकत से स्थायी हो जाएगा', 'Conditioning will immediately become twice as strong'],
      ['भोजन स्वाभाविक उद्दीपन नहीं रह जाएगा', 'Food will cease to be an unconditioned stimulus'],
      ['कुत्ता स्वतः बोलने लगेगा', 'The dog will spontaneously begin vocalizing'],
    ],
    'शास्त्रीय अनुबंधन में CS और UCS के बीच विश्वसनीय आकस्मिकता (Contingency) आवश्यक होती है; अनियमित जुड़ाव से अनुबंधित अनुक्रिया दुर्बल पड़ती है।',
    'Classical conditioning requires reliable CS-UCS contingency; intermittent unpaired CS presentations weaken conditioning strength.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'गौण नियमों में से कौन-सा नियम यह स्पष्ट करता है कि यदि कोई बिल्ली “खड़े हो जाओ” कहने पर मछली के लिए कूदती थी, तो धीरे-धीरे मछली हटाकर केवल “खड़े हो जाओ” बोलने पर भी कूदने लगती है?',
    'Which secondary law explains how a cat jumping for fish on hearing “Stand up” eventually jumps to “Stand up” alone after food is faded?',
    ['साहचर्यात्मक स्थानांतरण का नियम (Law of Associative Shifting)', 'Law of Associative Shifting'],
    [
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['तत्परता का नियम', 'Law of Readiness'],
      ['आंशिक क्रिया का नियम', 'Law of Partial Activity'],
    ],
    'थॉर्नडाइक ने बिल्ली को “Stand up” पर खड़ा होने का उदाहरण देकर स्वयं साहचर्यात्मक स्थानांतरण के नियम को समझाया था।',
    'Thorndike himself used the example of training a cat to stand up on the cue “Stand up” to illustrate the Law of Associative Shifting.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के प्रकार',
    'डेविड आसुबेल ने अधिगम को किन दो मुख्य आयामों के आधार पर चार प्रकारों में विभाजित किया?',
    'On which two primary dimensions did David Ausubel classify learning into four types?',
    ['रटंत बनाम अर्थपूर्ण अधिगम तथा अभिग्रहण बनाम अन्वेषण अधिगम', 'Rote vs. Meaningful learning and Reception vs. Discovery learning'],
    [
      ['शास्त्रीय बनाम क्रिया-प्रसूत तथा मूर्त बनाम अमूर्त अधिगम', 'Classical vs. Operant and Concrete vs. Abstract learning'],
      ['मौखिक बनाम लिखित तथा व्यक्तिगत बनाम सामूहिक अधिगम', 'Oral vs. Written and Individual vs. Group learning'],
      ['सचेत बनाम अचेतन तथा तीव्र बनाम मंद अधिगम', 'Conscious vs. Unconscious and Fast vs. Slow learning'],
    ],
    'आसुबेल के अनुसार अधिगम या तो अभिग्रहण (Reception) या अन्वेषण (Discovery) विधि से होता है और इनमें से प्रत्येक रटंत (Rote) या अर्थपूर्ण (Meaningful) हो सकता है।',
    'Ausubel classified learning along two dimensions: Reception vs. Discovery (how knowledge is presented) and Rote vs. Meaningful (how it is integrated).',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'निम्नलिखित में से कौन-सा थॉर्नडाइक के अधिगम सिद्धांत का एक अन्य प्रचलित नाम नहीं है?',
    'Which of the following is NOT another common name for Thorndike’s learning theory?',
    ['समग्रता सिद्धांत (Wholistic / Gestalt Theory)', 'Gestalt / Wholistic Theory'],
    [
      ['उद्दीपन-अनुक्रिया सिद्धांत (S-R Theory)', 'Stimulus-Response (S-R) Theory'],
      ['संबंधवाद (Connectionism)', 'Connectionism'],
      ['चयन एवं संबंध का सिद्धांत (Theory of Selection and Connection)', 'Theory of Selection and Connection'],
    ],
    'थॉर्नडाइक के सिद्धांत को प्रयास एवं त्रुटि, संबंधवाद, S-R बंधन तथा चयन एवं संबंध सिद्धांत कहा जाता है; समग्रता या गेस्टाल्ट सिद्धांत कोहलर, वर्दीमर और कोफ्का से जुड़ा है।',
    'Thorndike’s theory is called Trial & Error, Connectionism, S-R Theory, and Selection & Connection; Gestalt/Wholistic theory belongs to Wertheimer, Koffka, and Kohler.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के सिद्धांत को “अनुकूलित अनुक्रिया सिद्धांत” (Conditioned Response Theory) क्यों कहा जाता है?',
    'Why is Pavlov’s theory also termed “Conditioned Response Theory”?',
    ['क्योंकि इसमें स्वाभाविक अनुक्रिया को एक कृत्रिम उद्दीपन के साथ अनुकूलित/अनुबंधित कर दिया जाता है', 'Because a natural response is conditioned to occur in response to an artificial stimulus'],
    [
      ['क्योंकि इसमें केवल वातानुकूलित कमरे में प्रयोग किए जाते हैं', 'Because experiments are conducted only in air-conditioned rooms'],
      ['क्योंकि इसमें सीखने की कोई शर्त नहीं होती', 'Because there are no conditions involved in learning'],
      ['क्योंकि यह केवल सूझ पर निर्भर करता है', 'Because it depends purely on sudden insight'],
    ],
    'जब किसी अस्वाभाविक/तटस्थ उद्दीपन को स्वाभाविक उद्दीपन के साथ जोड़कर उस पर स्वाभाविक जैसी अनुक्रिया प्राप्त कर ली जाए, तो वह अनुकूलित या अनुबंधित अनुक्रिया कहलाती है।',
    'When a natural reflex response becomes attached to a previously neutral artificial stimulus through pairing, it is called a Conditioned Response.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'यदि एक छात्र कक्षा में प्रश्नों के उत्तर देता है और शिक्षक मुस्कुराकर सिर हिलाते हैं, तो छात्र आगे भी उत्तर देने के लिए प्रेरित होता है। शिक्षक की मुस्कान यहाँ क्या है?',
    'If a student answers questions in class and the teacher smiles and nods, motivating the student to answer more, what is the teacher’s smile here?',
    ['सामाजिक सकारात्मक पुनर्बलक (Social Positive Reinforcer)', 'Social Positive Reinforcer'],
    [
      ['प्राथमिक पुनर्बलक', 'Primary Reinforcer'],
      ['अवरोधक उद्दीपन', 'Inhibitory Stimulus'],
      ['नकारात्मक दंड', 'Negative Punishment'],
    ],
    'प्रशंसा, मुस्कान, सिर हिलाना और ध्यान देना सामाजिक सकारात्मक पुनर्बलक (Social Positive Reinforcers) हैं जो कक्षा में भागीदारी बढ़ाते हैं।',
    'Praise, smiles, nods, and attention function as powerful Social Positive Reinforcers that increase classroom participation.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    'निम्नलिखित में से कौन-सा उदाहरण अधिगम की श्रेणी में आएगा?',
    'Which of the following examples qualifies as learning?',
    ['अभ्यास से किसी बालक द्वारा सुंदर हस्तलेख लिखना सीख लेना', 'A child acquiring neat handwriting through practice'],
    [
      ['तेज रोशनी पड़ने पर आँख की पुतली का स्वतः सिकुड़ना', 'Pupil constricting automatically in bright light'],
      ['तेज बुखार के कारण बच्चे का बेहोश होकर बोलना', 'A child talking incoherently due to high fever'],
      ['गरम बर्तन छूते ही हाथ का तुरंत पीछे हटना (प्रतिवर्त क्रिया)', 'Immediately pulling the hand back from a hot vessel (reflex)'],
    ],
    'पुतली सिकुड़ना और गरम वस्तु से हाथ हटना जन्मजात प्रतिवर्त क्रियाएँ हैं तथा बुखार की स्थिति अस्थायी शारीरिक विकार है; केवल अभ्यास से प्राप्त कौशल ही अधिगम है।',
    'Pupil constriction and hand withdrawal are innate reflexes, and fever effects are temporary physiological states; acquiring neat handwriting through practice is learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    '“एक अध्यापक को पहले से पढ़ाए गए पाठ से नए पाठ को जोड़कर पढ़ाना चाहिए” — यह शिक्षण सूत्र थॉर्नडाइक के किस गौण नियम से सर्वाधिक निकट है?',
    '“A teacher should link a new lesson with previously taught lessons” — this teaching maxim is closest to which secondary law of Thorndike?',
    ['सादृश्यता / आत्मीकरण का नियम (Law of Analogy)', 'Law of Analogy / Assimilation'],
    [
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['तत्परता का नियम', 'Law of Readiness'],
      ['प्रभाव का नियम', 'Law of Effect'],
    ],
    'सादृश्यता का नियम बताता है कि ज्ञात और नवीन अनुभवों के बीच समानता दिखाने से विद्यार्थी नए ज्ञान को शीघ्र आत्मसात कर लेता है।',
    'The Law of Analogy explains that highlighting similarities between prior knowledge and new material helps learners assimilate new concepts.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    '“बच्चे के रोने पर माता-पिता द्वारा उसे तुरंत गोद में उठाकर चुप कराना” — इसमें बच्चे के रोने को क्या मिल रहा है और माता-पिता को क्या मिल रहा है?',
    '“Parents immediately pick up a crying child to soothe him” — what is reinforcing the child’s crying and what is reinforcing the parents’ picking up?',
    ['बच्चे के रोने को सकारात्मक पुनर्बलन (गोद/ध्यान) और माता-पिता को नकारात्मक पुनर्बलन (शोर रुकना)', 'The child receives positive reinforcement (attention/holding) while parents receive negative reinforcement (crying stops)'],
    [
      ['दोनों को केवल सकारात्मक दंड मिल रहा है', 'Both receive only positive punishment'],
      ['बच्चे को विलोपन और माता-पिता को प्राथमिक पुनर्बलन मिल रहा है', 'Child gets extinction and parents get primary reinforcement'],
      ['दोनों के व्यवहार में कोई पुनर्बलन नहीं है', 'Neither behavior involves reinforcement'],
    ],
    'यह क्रिया-प्रसूत विश्लेषण का उत्कृष्ट उदाहरण है: बच्चे को रोने पर ध्यान (सकारात्मक पुनर्बलन) मिलता है जिससे वह फिर रोता है, और माता-पिता को रोने की अप्रिय ध्वनि बंद होने से राहत (नकारात्मक पुनर्बलन) मिलती है।',
    'This classic operant loop shows the child’s crying is positively reinforced by attention, while parents’ picking up is negatively reinforced when the crying stops.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के अनुसार यदि किसी स्वाभाविक उद्दीपन को प्रस्तुत किए बिना अनुबंधित उद्दीपन को बहुत अधिक बार प्रस्तुत किया जाए, तो उत्पन्न होने वाली आंतरिक प्रक्रिया को क्या कहते हैं?',
    'According to Pavlov, what internal process occurs when the CS is repeatedly presented without the UCS, leading to cessation of the CR?',
    ['आंतरिक अवरोध (Internal Inhibition)', 'Internal Inhibition'],
    [
      ['बाह्य अवरोध (External Inhibition)', 'External Inhibition'],
      ['उच्च-स्तरीय अनुबंधन (Higher-Order Conditioning)', 'Higher-Order Conditioning'],
      ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
    ],
    'पावलॉव ने माना कि विलोपन के दौरान अनुक्रिया केवल मिटती नहीं, बल्कि मस्तिष्क में “आंतरिक अवरोध” विकसित होकर उसे दबा देता है—इसी कारण स्वतः पुनःप्राप्ति संभव होती है।',
    'Pavlov proposed that extinction does not erase learning; instead, Internal Inhibition builds up to suppress the CR, explaining why spontaneous recovery occurs later.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के प्रयोग में बिल्ली को बार-बार पहेली बॉक्स में रखने पर लगने वाला समय धीरे-धीरे कम क्यों होता गया?',
    'In Thorndike’s experiment, why did the time taken by the cat to escape the puzzle box gradually decrease over trials?',
    ['निरर्थक त्रुटिपूर्ण अनुक्रियाएँ घटती गईं और लीवर दबाने की सही अनुक्रिया का बंधन मजबूत होता गया', 'Useless erroneous responses dropped out while the correct latch-pressing S-R bond strengthened'],
    [
      ['बिल्ली को दूसरे कक्ष से दूसरी बिल्ली ने संकेत दिया था', 'Another cat signaled it from an adjacent chamber'],
      ['पहेली बॉक्स का आकार हर प्रयास में बड़ा कर दिया जाता था', 'The puzzle box was enlarged on every trial'],
      ['बिल्ली का वजन लगातार बढ़ता जा रहा था', 'The cat’s body weight was steadily increasing'],
    ],
    'असफल प्रयासों के निष्कासन और सफल अनुक्रिया के बाद भोजन रूपी संतोष (प्रभाव का नियम) मिलने से सही अनुक्रिया का समय तेजी से घटता गया।',
    'Eliminating unsuccessful movements and stamping in the latch press via food satisfaction (Law of Effect) steadily reduced escape latency.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी किस तकनीकी खोज के माध्यम से चूहे की प्रत्येक लीवर-प्रेस अनुक्रिया का समय के साथ संचयी ग्राफ स्वतः दर्ज किया?',
    'Through which device did Skinner automatically record a cumulative graph of every lever press over time?',
    ['संचयी अभिलेखक (Cumulative Recorder)', 'Cumulative Recorder'],
    [
      ['गैल्वेनोमीटर (Galvanometer)', 'Galvanometer'],
      ['टैचिस्टोस्कोप (Tachistoscope)', 'Tachistoscope'],
      ['स्मृति ड्रम (Memory Drum)', 'Memory Drum'],
    ],
    'स्किनर बॉक्स से जुड़ा संचयी अभिलेखक (Cumulative Recorder) कागज़ के रोल पर अनुक्रिया की दर (Response Rate) का सटीक वक्र बनाता था।',
    'Attached to the Skinner Box, the Cumulative Recorder automatically plotted response rates over time on a moving paper roll.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'शिक्षण में “श्रव्य-दृश्य सामग्री” (Audio-Visual Aids) का उपयोग करके शब्द को चित्र के साथ जोड़कर सिखाना किस सिद्धांत की पुष्टि करता है?',
    'Using audio-visual aids in teaching to pair words with pictures aligns with which learning principle?',
    ['पावलॉव का शास्त्रीय अनुबंधन (साहचर्य निर्माण)', 'Pavlov’s Classical Conditioning (association building)'],
    [
      ['कैटेल का तरल बुद्धि सिद्धांत', 'Cattell’s Fluid Intelligence Theory'],
      ['स्पीयरमैन का द्वि-कारक सिद्धांत', 'Spearman’s Two-Factor Theory'],
      ['बिने का एक-कारक सिद्धांत', 'Binet’s Unifactor Theory'],
    ],
    'चित्र व शब्द या वस्तु व नाम को बार-बार साथ प्रस्तुत करने से मस्तिष्क में उनके बीच अनुबंधित साहचर्य स्थापित हो जाता है।',
    'Repeatedly pairing a picture or concrete object with a spoken/written word builds conditioned associations.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'स्किनर के अनुसार कक्षा में “कंप्यूटर-सहायक अनुदेशन” (Computer-Assisted Instruction - CAI) की प्रभावशीलता का प्रमुख कारण क्या है?',
    'According to Skinner, what is the chief reason for the effectiveness of Computer-Assisted Instruction (CAI)?',
    ['तत्काल प्रतिपुष्टि, व्यक्तिगत गति और सक्रिय सहभागिता', 'Immediate feedback, individualized pacing, and active participation'],
    [
      ['शिक्षक की पूर्ण अनुपस्थिति और केवल खेल खेलना', 'Total absence of teachers and playing games only'],
      ['बिना जाँच के आगे बढ़ने की स्वतंत्रता', 'Freedom to advance without any assessment'],
      ['सभी छात्रों को एक ही कठोर समय सीमा में बाँधना', 'Binding all learners to a single rigid time limit'],
    ],
    'CAI स्किनर के अभिक्रमित अनुदेशन का आधुनिक रूप है जो प्रत्येक विद्यार्थी को उसकी गति से छोटे चरणों में सीखने और तुरंत पुष्टि पाने का अवसर देता है।',
    'CAI extends Skinner’s programmed instruction by offering small steps, active input, self-pacing, and instant feedback.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के घटक',
    'निम्नलिखित में से किसे “अधिगम का सबसे महत्वपूर्ण प्रेरक या हृदय” (Heart of Learning) कहा जाता है?',
    'Which of the following is often called the “Heart of Learning”?',
    ['अभिप्रेरणा (Motivation)', 'Motivation'],
    [
      ['दंड (Punishment)', 'Punishment'],
      ['थकान (Fatigue)', 'Fatigue'],
      ['प्रतिद्वंद्विता (Rivalry)', 'Rivalry'],
    ],
    'स्किनर ने अभिप्रेरणा को अधिगम का सर्वोत्तम राजमार्ग (Superhighway to Learning) और कई शिक्षाशास्त्रियों ने इसे अधिगम का हृदय कहा है, क्योंकि बिना प्रेरणा सीखना प्रभावी नहीं होता।',
    'Skinner called motivation the superhighway to learning, and educators call it the heart of learning because learning falters without drive.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी किस धारणा के आधार पर “विशिष्ट प्रशिक्षण” और “समान तत्वों” के महत्व को रेखांकित किया?',
    'Based on which concept did Thorndike emphasize specific training and identical elements?',
    ['सीखना विशिष्ट S-R बंधनों का निर्माण है, न कि सामान्य मानसिक शक्तियों का अस्पष्ट विकास', 'Learning is the formation of specific S-R bonds rather than vague strengthening of general faculties'],
    [
      ['मस्तिष्क एक मांसपेशी है जो लैटिन व्याकरण से हर विषय में तेज हो जाती है', 'The mind is a muscle sharpened for all subjects by Latin grammar'],
      ['अभ्यास का किसी भी कौशल पर कोई प्रभाव नहीं पड़ता', 'Practice has no effect on any skill'],
      ['मनुष्य केवल अंतर्दृष्टि से बिना अभ्यास सीखता है', 'Humans learn solely by insight without practice'],
    ],
    'थॉर्नडाइक ने मानसिक अनुशासन (औपचारिक अनुशासन) के प्राचीन सिद्धांत का खंडन कर कहा कि सीखना विशिष्ट S-R बंधनों के निर्माण से होता है।',
    'Thorndike refuted formal mental discipline, arguing that learning builds specific S-R bonds rather than training general mental faculties.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में “लार का टपकना” जब भोजन को देखकर होता है, तो वह क्या कहलाता है?',
    'In Pavlov’s experiment, when salivation occurs upon seeing or tasting food, what is it called?',
    ['स्वाभाविक / अननुबंधित अनुक्रिया (UCR)', 'Unconditioned Response (UCR)'],
    [
      ['अनुबंधित अनुक्रिया (CR)', 'Conditioned Response (CR)'],
      ['अनुबंधित उद्दीपन (CS)', 'Conditioned Stimulus (CS)'],
      ['पुनर्बलित अनुक्रिया', 'Operant Reinforced Response'],
    ],
    'भोजन (UCS) को देखकर बिना किसी प्रशिक्षण के होने वाला लार स्राव स्वाभाविक या अननुबंधित अनुक्रिया (UCR) है।',
    'Salivation occurring naturally in response to food (UCS) without conditioning is the Unconditioned Response (UCR).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'अंतराल (Interval) और अनुपात (Ratio) पुनर्बलन अनुसूचियों में मूल अंतर किस पर आधारित है?',
    'What is the fundamental distinction between Interval and Ratio schedules of reinforcement?',
    ['अंतराल अनुसूची समय (Time) पर आधारित होती है, जबकि अनुपात अनुसूची अनुक्रियाओं की संख्या (Number of Responses) पर', 'Interval schedules are based on elapsed time, whereas Ratio schedules are based on number of responses'],
    [
      ['अंतराल में केवल दंड और अनुपात में केवल पुरस्कार दिया जाता है', 'Interval uses only punishment and Ratio uses only reward'],
      ['अंतराल केवल पशुओं और अनुपात केवल मनुष्यों के लिए है', 'Interval applies only to animals and Ratio only to humans'],
      ['दोनों में केवल समय का ही उपयोग होता है', 'Both depend exclusively on time'],
    ],
    'Interval = समय (निश्चित या परिवर्ती समय के बाद); Ratio = अनुक्रिया संख्या (निश्चित या परिवर्ती संख्या में सही अनुक्रियाओं के बाद)।',
    'Interval schedules depend on the passage of time, whereas Ratio schedules depend on the count of responses emitted.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'निम्नलिखित में से किस कार्य के लिए “विभेदक उद्दीपन” (Discriminative Stimulus - S^D) का उदाहरण सर्वाधिक उपयुक्त है?',
    'Which example best illustrates a “Discriminative Stimulus” (S^D) in operant conditioning?',
    ['स्किनर बॉक्स में हरी बत्ती जलने पर लीवर दबाने से भोजन मिलना, लाल बत्ती पर नहीं', 'Pressing the lever yields food when the green light is on, but not when the red light is on'],
    [
      ['बिना किसी संकेत के हर बार लार आना', 'Salivating without any cue'],
      ['नींद में चलने की अचेतन क्रिया', 'Unconscious sleepwalking'],
      ['भूख लगने पर पेट में दर्द होना', 'Stomach ache when hungry'],
    ],
    'विभेदक उद्दीपन (S^D) वह संकेत है जो प्राणी को बताता है कि इस परिस्थिति में अमुक अनुक्रिया करने पर पुनर्बलन प्राप्त होगा (जैसे चौराहे पर हरी बत्ती देखकर चलना)।',
    'A discriminative stimulus signals when a particular operant response will be reinforced (e.g., green light signaling food availability).',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपने प्रयोगों में किस बात पर बल दिया कि “सफलता से सीखना होता है, असफलता से नहीं”?',
    'Which statement reflects Thorndike’s view that “nothing succeeds like success” in learning?',
    ['संतोषजनक परिणाम (सफलता) S-R बंधन को मजबूत करता है', 'A satisfying consequence (success) stamps in and strengthens the S-R bond'],
    [
      ['असफलता हमेशा नई सूझ को तुरंत जन्म देती है', 'Failure always instantaneously generates new insight'],
      ['केवल दंड देने से ही छात्र विषय को पसंद करने लगता है', 'Punishment alone makes a student love the subject'],
      ['प्रयास किए बिना भी बंधन मजबूत हो जाता है', 'Bonds strengthen even without attempting'],
    ],
    'प्रभाव के नियम के अनुसार सफलता से मिलने वाला संतोष सही मार्ग को पक्का करता है और शिक्षार्थी का आत्मविश्वास बढ़ाता है।',
    'By the Law of Effect, success produces satisfaction that strengthens the correct S-R connection and builds confidence.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    '“विज्ञापनों में किसी उत्पाद को लोकप्रिय खिलाड़ी या सुखद संगीत के साथ बार-बार दिखाना” किस मनोवैज्ञानिक सिद्धांत का व्यावसायिक प्रयोग है?',
    '“Repeatedly pairing a commercial product with a beloved celebrity or pleasant music in advertisements” applies which psychological principle?',
    ['शास्त्रीय अनुबंधन (Classical Conditioning)', 'Classical Conditioning'],
    [
      ['प्रयास एवं त्रुटि (Trial and Error)', 'Trial and Error'],
      ['गने का समस्या-समाधान सोपान', 'Gagne’s Problem-Solving Hierarchy'],
      ['थर्स्टन का समूह-कारक सिद्धांत', 'Thurstone’s Group Factor Theory'],
    ],
    'प्रिय संगीत या सेलिब्रिटी (UCS) से उत्पन्न सकारात्मक भावना को उत्पाद (CS) के साथ बार-बार जोड़कर उपभोक्ता में उत्पाद के प्रति सकारात्मक अनुबंधित अनुक्रिया (CR) बनाई जाती है।',
    'Pairing a neutral brand (CS) with pleasant music or an admired celebrity (UCS) creates a positive conditioned attitude (CR) toward the product.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    '“फीडबैक” या “तत्काल प्रतिपुष्टि” स्किनर के किस सिद्धांत का व्यावहारिक रूप है?',
    '“Immediate feedback” in classroom quizzes is a practical form of which Skinnerian principle?',
    ['त्वरित पुनर्बलन (Immediate Reinforcement)', 'Immediate Reinforcement'],
    [
      ['विलंबित दंड (Delayed Punishment)', 'Delayed Punishment'],
      ['बाह्य अवरोध (External Inhibition)', 'External Inhibition'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
    ],
    'स्किनर ने सिद्ध किया कि अनुक्रिया और पुनर्बलन के बीच समय अंतराल जितना कम होगा, अधिगम उतना ही तीव्र और सटीक होगा।',
    'Skinner showed that the shorter the delay between a response and its feedback/reinforcement, the faster and stronger the learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक के किस नियम के कारण एक बच्चा पूर्व में सीखे गए जोड़ के नियमों का प्रयोग करके दो अंकों वाले नए जोड़ के सवाल हल कर लेता है?',
    'Which law of Thorndike explains how a child solves new two-digit addition problems using previously learned single-digit addition rules?',
    ['सादृश्यता द्वारा अनुक्रिया का नियम', 'Law of Response by Analogy'],
    [
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['प्रतिक्रिया विलोपन नियम', 'Law of Response Extinction'],
      ['विलंबित अनुबंधन नियम', 'Law of Delayed Conditioning'],
    ],
    'पूर्व ज्ञान व नई समस्या के बीच समान तत्वों को पहचानकर अनुक्रिया करना सादृश्यता (Analogy) का नियम है।',
    'Recognizing shared elements between prior learning and a novel problem to transfer the response illustrates the Law of Analogy.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'एक बच्चा पहले किसी भी लाल रंग की गोली से डरता था, किंतु जब उसे समझाया गया कि केवल कड़वी दवाई वाली लाल गोली कड़वी है और स्ट्रॉबेरी टॉफी मीठी है, तो उसने दोनों में अंतर करना सीख लिया। यह क्या है?',
    'A child once feared all red pills, but learned to fear only bitter medicine while enjoying sweet red strawberry candy. This demonstrates:',
    ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
    [
      ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
      ['उच्च-स्तरीय अनुबंधन (Higher-Order Conditioning)', 'Higher-Order Conditioning'],
    ],
    'समान रंग वाले दो उद्दीपनों (दवाई बनाम टॉफी) के बीच अंतर समझकर भिन्न अनुक्रिया करना उद्दीपन विभेदन कहलाता है।',
    'Distinguishing between two visually similar stimuli (bitter red pill vs. sweet red candy) and responding differently is Stimulus Discrimination.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'निम्नलिखित में से किस स्थिति में “अधिगम” सबसे तेजी से कमजोर (विलोपित) होता है?',
    'Under which condition does an operant behavior extinguish most rapidly when reinforcement stops?',
    ['जब वह व्यवहार पहले सतत पुनर्बलन (Continuous Reinforcement) से सीखा गया हो', 'When the behavior was previously maintained on Continuous Reinforcement'],
    [
      ['जब वह व्यवहार परिवर्ती अनुपात (VR) अनुसूची से सीखा गया हो', 'When maintained on a Variable Ratio schedule'],
      ['जब वह व्यवहार परिवर्ती अंतराल (VI) अनुसूची से सीखा गया हो', 'When maintained on a Variable Interval schedule'],
      ['जब पुनर्बलन आंशिक रूप से मिलता रहा हो', 'When maintained on partial reinforcement'],
    ],
    'आंशिक पुनर्बलन प्रभाव (Partial Reinforcement Effect - PRE) के कारण सतत पुनर्बलन वाला व्यवहार बिना पुरस्कार के तुरंत पहचान में आ जाता है और शीघ्र विलोपित होता है, जबकि आंशिक पुनर्बलन वाला व्यवहार देर तक टिकता है।',
    'Due to the Partial Reinforcement Effect (PRE), behaviors learned under continuous reinforcement extinguish much faster when reinforcement stops than partially reinforced ones.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के डोमेन',
    'बेंजामिन ब्लूम (1956) के अनुसार सीखने के उद्देश्यों के तीन प्रमुख पक्ष (Domains) कौन-से हैं?',
    'According to Benjamin Bloom (1956), what are the three primary domains of learning objectives?',
    ['संज्ञानात्मक (Cognitive), भावात्मक (Affective) एवं मनोगत्यात्मक (Psychomotor)', 'Cognitive, Affective, and Psychomotor'],
    [
      ['तार्किक, काल्पनिक एवं आध्यात्मिक', 'Logical, Imaginative, and Spiritual'],
      ['प्राथमिक, द्वितीयक एवं तृतीयक', 'Primary, Secondary, and Tertiary'],
      ['सचेत, अवचेतन एवं अचेतन', 'Conscious, Subconscious, and Unconscious'],
    ],
    'ब्लूम की टैक्सोनॉमी में अधिगम के तीन पक्ष—सिर/ज्ञान (Cognitive), हृदय/भाव (Affective) और हाथ/कौशल (Psychomotor)—माने गए हैं।',
    'Bloom’s Taxonomy organizes learning objectives into three domains: Cognitive (head/knowledge), Affective (heart/attitudes), and Psychomotor (hand/skills).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के अधिगम वक्र में X-अक्ष और Y-अक्ष पर क्रमशः क्या दर्शाया जाता था?',
    'In Thorndike’s puzzle-box learning curve, what was plotted on the X-axis and Y-axis respectively?',
    ['X-अक्ष पर प्रयासों की संख्या तथा Y-अक्ष पर बॉक्स से बाहर निकलने में लगा समय या त्रुटियाँ', 'Number of trials on the X-axis and time taken to escape (or errors) on the Y-axis'],
    [
      ['X-अक्ष पर बिल्ली का भार और Y-अक्ष पर मछली की मात्रा', 'Weight of the cat on X-axis and amount of fish on Y-axis'],
      ['X-अक्ष पर तापमान और Y-अक्ष पर लार की बूँदें', 'Temperature on X-axis and drops of saliva on Y-axis'],
      ['X-अक्ष पर आयु और Y-अक्ष पर बुद्धि लब्धि', 'Age on X-axis and IQ on Y-axis'],
    ],
    'थॉर्नडाइक ने प्रयास संख्या (Trials) बढ़ने के साथ पहेली बॉक्स से बाहर निकलने के समय (Time in seconds) में क्रमिक गिरावट को वक्र द्वारा प्रदर्शित किया।',
    'Thorndike plotted trial number on the horizontal axis against escape time (in seconds) on the vertical axis, showing a downward-sloping learning curve.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'आकारण एवं शृंखलन',
    'स्किनर ने द्वितीय विश्व युद्ध के दौरान कबूतरों को किस असामान्य कार्य के लिए आकारण (Shaping) द्वारा प्रशिक्षित किया था (प्रोजेक्ट पिजन)?',
    'During World War II (Project Pigeon), what unusual task did Skinner train pigeons to perform using shaping?',
    ['मिसाइल के अगले सिरे पर लगी स्क्रीन पर लक्ष्य के चित्र पर चोंच मारकर मिसाइल का मार्गदर्शन करना', 'Guiding missiles by pecking at target images projected on a screen in the nose cone'],
    [
      ['शत्रु की पनडुब्बियों का सोनार द्वारा पता लगाना', 'Detecting enemy submarines using sonar'],
      ['सैनिकों के लिए गुप्त संदेश लिखना', 'Writing coded messages for soldiers'],
      ['रडार उपकरणों की मरम्मत करना', 'Repairing radar equipment'],
    ],
    'प्रोजेक्ट पिजन (बाद में प्रोजेक्ट ओरकॉन) में स्किनर ने आकारण द्वारा कबूतरों को लक्ष्य पर सटीक चोंच मारने के लिए प्रशिक्षित कर व्यवहार तकनीक की शक्ति सिद्ध की।',
    'In Project Pigeon, Skinner used shaping to train pigeons to peck accurately at target silhouettes on a missile screen to steer it.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'एक चिकित्सक द्वारा सफेद कोट पहनकर बच्चे को कड़वा इंजेक्शन लगाने के बाद बच्चा बिना इंजेक्शन वाले किसी भी सफेद कोटधारी व्यक्ति को देखकर रोने लगता है। यहाँ सफेद कोट क्या है?',
    'After a doctor in a white coat gives a painful injection, a child cries upon seeing anyone in a white coat. Here the white coat is:',
    ['अनुबंधित उद्दीपन (Conditioned Stimulus)', 'Conditioned Stimulus'],
    [
      ['स्वाभाविक उद्दीपन (Unconditioned Stimulus)', 'Unconditioned Stimulus'],
      ['स्वाभाविक अनुक्रिया (Unconditioned Response)', 'Unconditioned Response'],
      ['नकारात्मक पुनर्बलक (Negative Reinforcer)', 'Negative Reinforcer'],
    ],
    'दर्दनाक इंजेक्शन (UCS) से रोना (UCR) स्वाभाविक था; सफेद कोट उसके साथ जुड़कर अनुबंधित उद्दीपन (CS) बन गया।',
    'Pain from the injection (UCS) naturally caused crying (UCR); paired with it, the white coat became the Conditioned Stimulus (CS).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के प्रभाव के नियम के संबंध में किस मनोवैज्ञानिक ने “प्रतिस्थापन सिद्धांत” या “सामीप्य सिद्धांत” देकर प्रभाव के नियम को अस्वीकार किया?',
    'Which psychologist rejected Thorndike’s Law of Effect by proposing that mere contiguity (pairing) without reward is enough for learning?',
    ['एडविन गुथरी (Edwin Guthrie)', 'Edwin Guthrie'],
    [
      ['बी.एफ. स्किनर (B.F. Skinner)', 'B.F. Skinner'],
      ['क्लार्क एल. हल (Clark L. Hull)', 'Clark L. Hull'],
      ['अल्बर्ट बंडूरा (Albert Bandura)', 'Albert Bandura'],
    ],
    'एडविन गुथरी ने सामीप्य सिद्धांत (Contiguity Theory) दिया और माना कि एक ही प्रयास में उद्दीपन व अनुक्रिया का साथ घटित होना ही सीखने के लिए पर्याप्त है, पुरस्कार की आवश्यकता नहीं।',
    'Edwin Guthrie’s Contiguity Theory argued that a single pairing of stimulus and response in time and space suffices for learning without reward.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'यदि किसी अवांछित व्यवहार (जैसे कक्षा में ध्यान आकर्षित करने के लिए शोर करना) को सुधारने के लिए शिक्षक उसकी ओर पूरी तरह ध्यान देना बंद कर दे (कोई प्रतिक्रिया न दे), तो यह किस तकनीक का उपयोग है?',
    'To stop a student from shouting merely to seek attention, a teacher completely ignores the shouting (withholding attention). Which operant technique is this?',
    ['विलोपन (Extinction)', 'Extinction'],
    [
      ['आकारण (Shaping)', 'Shaping'],
      ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
      ['शृंखलन (Chaining)', 'Chaining'],
    ],
    'ध्यान-आकर्षण व्यवहार को बनाए रखने वाले पुनर्बलक (शिक्षक/सहपाठी का ध्यान) को पूरी तरह रोक देना क्रिया-प्रसूत विलोपन (Operant Extinction) कहलाता है।',
    'Withholding the reinforcer (teacher attention) that was maintaining an attention-seeking behavior is called Operant Extinction.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'निम्नलिखित सिद्धांतों और उनके प्रवर्तकों में से सही युग्म का चयन कीजिए:',
    'Select the correctly matched pair of learning theory and its propounder:',
    ['क्रिया-प्रसूत अनुबंधन — बी.एफ. स्किनर', 'Operant Conditioning — B.F. Skinner'],
    [
      ['प्रयास एवं त्रुटि सिद्धांत — इवान पावलॉव', 'Trial and Error Theory — Ivan Pavlov'],
      ['शास्त्रीय अनुबंधन — ई.एल. थॉर्नडाइक', 'Classical Conditioning — E.L. Thorndike'],
      ['अभिक्रमित अनुदेशन — सिगमंड फ्रायड', 'Programmed Instruction — Sigmund Freud'],
    ],
    'प्रयास एवं त्रुटि थॉर्नडाइक ने, शास्त्रीय अनुबंधन पावलॉव ने और क्रिया-प्रसूत अनुबंधन व अभिक्रमित अनुदेशन स्किनर ने दिए।',
    'Trial and Error belongs to Thorndike, Classical Conditioning to Pavlov, and Operant Conditioning & Programmed Instruction to Skinner.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    '“मनुष्य के सीखने पर उसकी तत्काल मानसिक स्थिति, रुचि और पूर्वाग्रह का गहरा प्रभाव पड़ता है” — यह विचार थॉर्नडाइक के किस नियम में निहित है?',
    '“A person’s immediate mental state, interest, and predisposition deeply influence how they learn” — this idea is embedded in Thorndike’s:',
    ['मनोवृत्ति / विन्यास का नियम (Law of Attitude / Set)', 'Law of Attitude / Mental Set'],
    [
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['आंशिक क्रिया का नियम', 'Law of Partial Activity'],
    ],
    'मनोवृत्ति या विन्यास का नियम बताता है कि व्यक्ति के भीतर की अभिवृत्ति ही तय करती है कि कौन-सी स्थिति उसे संतोष देगी और वह क्या सीखेगा।',
    'The Law of Attitude/Set states that a learner’s preexisting mental disposition determines what satisfies them and how they respond.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन के प्रकार',
    'पावलॉव के अनुसार जब अनुबंधित उद्दीपन (घंटी) और स्वाभाविक उद्दीपन (भोजन) दोनों ठीक एक ही समय पर शुरू और समाप्त हों, तो उसे क्या कहते हैं?',
    'According to Pavlov, when the CS (bell) and UCS (food) begin and end at the exact same moment, it is called:',
    ['सहकालिक अनुबंधन (Simultaneous Conditioning)', 'Simultaneous Conditioning'],
    [
      ['विलंबित अनुबंधन (Delayed Conditioning)', 'Delayed Conditioning'],
      ['अवशेष अनुबंधन (Trace Conditioning)', 'Trace Conditioning'],
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
    ],
    'सहकालिक अनुबंधन में CS और UCS एक साथ प्रस्तुत होते हैं; यद्यपि यह पश्चगामी से बेहतर है, फिर भी विलंबित अनुबंधन जितना प्रभावी नहीं होता क्योंकि CS पूर्व-संकेत नहीं दे पाता।',
    'In Simultaneous Conditioning, CS and UCS overlap completely from start to finish; it is weaker than delayed conditioning because the CS loses predictive signal value.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    '“सतत बनाम आंशिक पुनर्बलन” के संदर्भ में कक्षा प्रबंधन के लिए कौन-सी रणनीति सर्वोत्तम है?',
    'In classroom management, which strategy is optimal regarding “continuous vs. partial reinforcement”?',
    ['नया व्यवहार सिखाने में सतत पुनर्बलन, फिर उसे बनाए रखने के लिए आंशिक (परिवर्ती) पुनर्बलन', 'Continuous reinforcement to establish a new behavior, then partial (variable) reinforcement to maintain it'],
    [
      ['जीवन भर केवल सतत पुनर्बलन ही देते रहना', 'Giving continuous reinforcement permanently forever'],
      ['पहले दिन से ही कोई पुनर्बलन न देना', 'Giving zero reinforcement from day one'],
      ['केवल दंड अनुसूचियों का प्रयोग करना', 'Using only punishment schedules'],
    ],
    'सतत पुनर्बलन से व्यवहार जल्दी सीखा जाता है, परंतु आंशिक (विशेषतः परिवर्ती) पुनर्बलन से व्यवहार में स्थायित्व और विलोपन के प्रति प्रतिरोध आता है।',
    'Continuous reinforcement accelerates initial acquisition, while switching to partial (especially variable) reinforcement builds durable maintenance.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“अधिगम व्यक्ति में एक परिवर्तन है जो उसके वातावरण के परिवर्तनों के अनुसरण में होता है” — यह किसका कथन है?',
    '“Learning is a change in the individual, following upon changes in the environment” — whose statement is this?',
    ['ई.ए. पील (E.A. Peel)', 'E.A. Peel'],
    [
      ['जे.पी. गिलफोर्ड', 'J.P. Guilford'],
      ['बी.एफ. स्किनर', 'B.F. Skinner'],
      ['ई.एल. थॉर्नडाइक', 'E.L. Thorndike'],
    ],
    'प्रसिद्ध शिक्षा मनोवैज्ञानिक ई.ए. पील ने अधिगम को वातावरण के परिवर्तनों के प्रत्युत्तर में व्यक्ति के भीतर होने वाला परिवर्तन बताया है।',
    'Educational psychologist E.A. Peel defined learning as a change in the individual occurring in response to changes in the environment.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के सिद्धांत के संदर्भ में “S-R बॉन्ड” में ‘S’ और ‘R’ क्रमशः किसके प्रतीक हैं?',
    'In Thorndike’s “S-R Bond”, what do ‘S’ and ‘R’ stand for respectively?',
    ['Stimulus (उद्दीपन) और Response (अनुक्रिया)', 'Stimulus and Response'],
    [
      ['Success (सफलता) और Reward (पुरस्कार)', 'Success and Reward'],
      ['Skill (कौशल) और Retention (धारण)', 'Skill and Retention'],
      ['Situation (परिस्थिति) और Reinforcement (पुनर्बलन)', 'Situation and Reinforcement'],
    ],
    'S-R बंधन में S का अर्थ उद्दीपन (Stimulus) तथा R का अर्थ अनुक्रिया (Response) है।',
    'In the S-R bond, S stands for Stimulus and R stands for Response.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'एक निश्चित समय (जैसे प्रतिदिन ठीक 1:00 बजे) भोजन मिलने पर कुत्ते में बिना किसी बाहरी घंटी के ही ठीक 1:00 बजे लार आने लगती है। पावलॉव ने इसे क्या कहा?',
    'When fed at a fixed time daily (e.g., 1:00 PM), a dog begins salivating at 1:00 PM even without a bell. What did Pavlov call this?',
    ['कालिक अनुबंधन (Temporal Conditioning)', 'Temporal Conditioning'],
    [
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
      ['बाह्य अवरोध (External Inhibition)', 'External Inhibition'],
      ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
    ],
    'कालिक अनुबंधन में बाहरी वस्तु के बजाय समय का निश्चित अंतराल ही अनुबंधित उद्दीपन (CS) का कार्य करने लगता है।',
    'In Temporal Conditioning, the fixed passage of time itself functions as the Conditioned Stimulus (CS).',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'स्किनर ने “Time-out” (कक्षा में किसी विघ्नकारी छात्र को कुछ मिनट के लिए समूह गतिविधि से अलग शांत कोने में बैठाना) को किस श्रेणी में रखा?',
    'How is “Time-out” (temporarily removing a disruptive student from an enjoyable group activity) classified in operant terms?',
    ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
    [
      ['सकारात्मक पुनर्बलन (Positive Reinforcement)', 'Positive Reinforcement'],
      ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
      ['प्राथमिक पुनर्बलन (Primary Reinforcement)', 'Primary Reinforcement'],
    ],
    'टाइम-आउट में छात्र को कुछ समय के लिए सकारात्मक पुनर्बलन देने वाले वातावरण (सहपाठियों व गतिविधि) से हटाया जाता है ताकि अवांछित व्यवहार घटे; अतः यह नकारात्मक दंड है।',
    'Time-out temporarily removes access to a reinforcing environment to decrease disruptive behavior, making it a form of Negative Punishment.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    'थॉर्नडाइक के सिद्धांत की एक प्रमुख सीमा या आलोचना क्या है?',
    'What is a major limitation or criticism of Thorndike’s Trial and Error theory?',
    ['यह उच्च-स्तरीय चिंतन, समस्या-समाधान और अचानक सूझ द्वारा सीखने की उपेक्षा कर सीखने को यांत्रिक बना देता है', 'It makes learning mechanical and neglects higher-order thinking, reasoning, and sudden insight'],
    [
      ['यह केवल अंतर्दृष्टि और सृजनात्मकता पर अत्यधिक बल देता है', 'It overemphasizes insight and creativity'],
      ['यह अभ्यास के महत्व को पूरी तरह नकारता है', 'It completely denies the importance of practice'],
      ['यह बच्चों की तत्परता पर कोई ध्यान नहीं देता', 'It ignores learner readiness'],
    ],
    'गेस्टाल्टवादियों और संज्ञानवादियों ने आलोचना की कि थॉर्नडाइक का सिद्धांत सीखने को अंधे प्रयासों की यांत्रिक प्रक्रिया मानता है और समझ/चिंतन को कम महत्व देता है।',
    'Gestalt and cognitive theorists criticized Thorndike for reducing learning to blind mechanical trial-and-error while underplaying comprehension and insight.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शैक्षिक निहितार्थ',
    'निम्नलिखित में से किस प्रकार के व्यवहार को शास्त्रीय अनुबंधन द्वारा सबसे सरलता से समझाया जा सकता है?',
    'Which type of behavior is most easily explained by Classical Conditioning?',
    ['अनैच्छिक संवेगात्मक प्रतिक्रियाएँ, भय, रुचि-अरुचि तथा प्रतिवर्त आदतें', 'Involuntary emotional responses, phobias, likes/dislikes, and reflexive habits'],
    [
      ['जटिल बीजगणितीय प्रमेय सिद्ध करना', 'Proving complex algebraic theorems'],
      ['कविता की मौलिक रचना करना', 'Composing original poetry'],
      ['वैज्ञानिक परिकल्पना का निर्माण करना', 'Formulating scientific hypotheses'],
    ],
    'शास्त्रीय अनुबंधन स्वैच्छिक तर्कपूर्ण समस्या-समाधान के बजाय स्वचालित, संवेगात्मक और स्वायत्त तंत्रिका तंत्र से जुड़ी प्रतिक्रियाओं (जैसे भय, घृणा, पसंद) की सटीक व्याख्या करता है।',
    'Classical conditioning best explains automatic, autonomic, and emotional responses (like phobias, aversions, and preferences) rather than complex reasoning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने मानव व्यवहार के किस पहलू पर सर्वाधिक शोध किया जिसे उन्होंने “व्यवहार का प्रयोगात्मक विश्लेषण” (Experimental Analysis of Behavior) कहा?',
    'Which aspect did Skinner focus on in what he termed the “Experimental Analysis of Behavior”?',
    ['वातावरणीय परिणामों और अनुक्रिया-दर (Response Rate) के बीच कार्यात्मक संबंध का अध्ययन', 'Studying the functional relationship between environmental consequences and response rate'],
    [
      ['मस्तिष्क की आंतरिक अचेतन ग्रंथियों का स्वप्न विश्लेषण', 'Dream analysis of unconscious mental complexes'],
      ['कपाल की हड्डियों के आकार से बुद्धि का अनुमान', 'Estimating intelligence from skull measurements'],
      ['व्यक्ति की जन्मकुंडली और स्वभाव का संबंध', 'Relating birth charts to temperament'],
    ],
    'स्किनर ने आंतरिक अटकलों के बजाय उद्दीपन, अनुक्रिया दर और पुनर्बलन की शर्तों (Three-term Contingency: A-B-C) के वस्तुनिष्ठ अध्ययन पर बल दिया।',
    'Skinner focused on objective functional relations among antecedents, response rates, and consequences (the three-term contingency).',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के प्रकार',
    'ग्लूक व मर्फी के अनुसार या सामान्य मनोविज्ञान में “सहज क्रिया” (Reflex) और “अधिगम” (Learning) में क्या अंतर है?',
    'In general psychology, how does a “Reflex” differ from “Learning”?',
    ['सहज क्रिया जन्मजात व अनैच्छिक होती है, जबकि अधिगम अनुभव-जनित व अर्जित होता है', 'A reflex is innate and involuntary, whereas learning is acquired through experience'],
    [
      ['सहज क्रिया केवल बड़े बच्चों में होती है और अधिगम केवल वृद्धों में', 'Reflexes occur only in older children and learning only in elders'],
      ['सहज क्रिया अभ्यास से सीखी जाती है और अधिगम जन्मजात है', 'Reflexes are learned by practice while learning is innate'],
      ['दोनों में कोई अंतर नहीं होता', 'There is no difference between them'],
    ],
    'आँख झपकना या घुटने का झटका जैसी सहज क्रियाएँ जन्मजात जैविक सुरक्षा तंत्र हैं, जबकि साइकिल चलाना या पढ़ना अनुभव द्वारा अर्जित अधिगम है।',
    'Reflexes (like blinking or knee-jerk) are innate biological mechanisms, whereas learning involves experience-driven acquired behavior.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी किस धारणा में कहा कि “प्रत्येक कौशल छोटे-छोटे बंधनों से मिलकर बनता है, अतः अभ्यास और ड्रिल आवश्यक हैं”?',
    'Which learning approach of Thorndike supports breaking arithmetic into specific sub-skills for drill and practice?',
    ['परमाणुवादी / बंधन सिद्धांत (Atomistic Connectionism)', 'Atomistic Connectionism'],
    [
      ['समग्रतावादी गेस्टाल्ट सिद्धांत', 'Holistic Gestalt Theory'],
      ['अव्यक्त संज्ञानात्मक मानचित्र सिद्धांत', 'Latent Cognitive Map Theory'],
      ['सामाजिक प्रतिरूपण सिद्धांत', 'Social Modeling Theory'],
    ],
    'थॉर्नडाइक का संबंधवाद सीखने को छोटे-छोटे S-R बंधनों के योग के रूप में देखता है, इसलिए उन्होंने गणित व भाषा शिक्षण में क्रमिक उप-कौशलों के अभ्यास का समर्थन किया।',
    'Thorndike’s atomistic connectionism views skills as bundles of specific S-R bonds, supporting structured drill on sequential sub-skills.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में “तटस्थ उद्दीपन” (Neutral Stimulus) कौन-सा था जो बाद में अनुबंधित उद्दीपन बना?',
    'In Pavlov’s experiment, which was initially the “Neutral Stimulus” that later became the Conditioned Stimulus?',
    ['घंटी की ध्वनि (या मेट्रोनोम की आवाज़)', 'Sound of the bell (or metronome)'],
    [
      ['मांस का चूर्ण (भोजन)', 'Meat powder (food)'],
      ['कुत्ते की लार', 'Dog’s saliva'],
      ['कुत्ते की भूख', 'Dog’s hunger'],
    ],
    'प्रयोग के प्रारंभ में घंटी की ध्वनि से कुत्ते में लार नहीं आती थी, इसलिए वह तटस्थ उद्दीपन थी; भोजन से जुड़ने पर वह अनुबंधित उद्दीपन (CS) बन गई।',
    'Initially, the bell/metronome elicited no salivation and was a Neutral Stimulus; after pairing with food, it became the Conditioned Stimulus (CS).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'कक्षा में एक छात्र लगातार अच्छा प्रदर्शन कर रहा है। उसकी स्व-प्रेरणा (Intrinsic Motivation) को नुकसान पहुँचाए बिना पुनर्बलन देने का सर्वोत्तम तरीका क्या है?',
    'A student consistently performs well. What is the best way to reinforce the student without undermining intrinsic motivation?',
    ['प्रशंसा में छात्र के प्रयास और रणनीति की विशिष्ट व सूचनात्मक प्रतिपुष्टि देना', 'Providing specific, informative praise focusing on effort and strategy'],
    [
      ['प्रत्येक साधारण कार्य पर केवल महँगे भौतिक उपहार देना', 'Giving expensive material gifts for every trivial task'],
      ['सार्वजनिक रूप से दूसरे छात्रों को नीचा दिखाना', 'Publicly humiliating other students'],
      ['बिना जाँचे केवल 100% अंक दे देना', 'Awarding 100% marks without checking work'],
    ],
    'अनावश्यक बाह्य भौतिक पुरस्कार आंतरिक रुचि को घटा सकते हैं (Overjustification Effect), जबकि प्रयास व प्रगति पर केंद्रित सूचनात्मक प्रतिपुष्टि आंतरिक प्रेरणा और स्व-प्रभावकारिता को बढ़ाती है।',
    'Unnecessary tangible rewards can undermine intrinsic interest (Overjustification Effect), whereas informative feedback on effort and strategy strengthens intrinsic motivation.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    '“जिस कार्य को करने में सुख मिलता है उसे हम दोहराते हैं और जिससे कष्ट मिलता है उसे छोड़ देते हैं” — यह कथन किसका सार है?',
    '“We repeat actions that bring pleasure and avoid those that bring discomfort” — this summarizes which law?',
    ['थॉर्नडाइक का प्रभाव का नियम (सुखवादी सिद्धांत)', 'Thorndike’s Law of Effect (Hedonic principle)'],
    [
      ['पावलॉव का विलोपन नियम', 'Pavlov’s Law of Extinction'],
      ['गने का संकेत अधिगम', 'Gagne’s Signal Learning'],
      ['कोहलर का समग्रता नियम', 'Kohler’s Law of Wholeness'],
    ],
    'थॉर्नडाइक का प्रभाव का नियम सुखद परिणामों से बंधन के दृढ़ होने और दुःखद परिणामों से बंधन के क्षीण होने की व्याख्या करता है।',
    'Thorndike’s Law of Effect states that satisfying consequences strengthen bonds while annoying consequences weaken them.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी किस धारणा में स्पष्ट किया कि पर्यावरण की आकस्मिकताएँ (Contingencies of Reinforcement) ही व्यक्ति के व्यवहार को नियंत्रित करती हैं, न कि स्वतंत्र काल्पनिक इच्छाशक्ति?',
    'In which concept did Skinner argue that environmental contingencies—rather than an autonomous inner will—govern human behavior?',
    ['पुनर्बलन की आकस्मिकताएँ (Contingencies of Reinforcement)', 'Contingencies of Reinforcement'],
    [
      ['अहं एवं पराहं का द्वंद्व', 'Conflict of Ego and Superego'],
      ['सामूहिक अचेतन के आद्यप्ररूप', 'Archetypes of the Collective Unconscious'],
      ['अंतर्निहित नैतिक परिपक्वता', 'Innate moral maturation'],
    ],
    'कट्टर व्यवहारवादी (Radical Behaviorist) के रूप में स्किनर ने माना कि पूर्ववर्ती संकेत, व्यवहार और उसके पुनर्बलक परिणाम (Contingencies) ही व्यवहार को संचालित करते हैं।',
    'As a radical behaviorist, Skinner maintained that observable contingencies of reinforcement—antecedents, behaviors, and consequences—govern conduct.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'अधिगम सिद्धांतों के कालानुक्रमिक विकास (Chronological Order) के अनुसार सही क्रम कौन-सा है?',
    'Which is the correct chronological order of the development of these learning theories?',
    ['थॉर्नडाइक (1898) → पावलॉव (1904/1927) → स्किनर (1938)', 'Thorndike (1898) → Pavlov (1904/1927) → Skinner (1938)'],
    [
      ['स्किनर → पावलॉव → थॉर्नडाइक', 'Skinner → Pavlov → Thorndike'],
      ['पावलॉव → स्किनर → थॉर्नडाइक', 'Pavlov → Skinner → Thorndike'],
      ['स्किनर → थॉर्नडाइक → पावलॉव', 'Skinner → Thorndike → Pavlov'],
    ],
    'थॉर्नडाइक ने 1898 में पहेली बॉक्स शोध प्रस्तुत किया, पावलॉव ने 1900 के दशक के प्रारंभ (1904 नोबेल) में अनुबंधन खोजा और स्किनर ने 1938 में क्रिया-प्रसूत अनुबंधन व्यवस्थित किया।',
    'Thorndike published his puzzle-box research in 1898, Pavlov gained fame for conditioning around 1904, and Skinner formalized operant conditioning in 1938.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'पहेली बॉक्स के प्रयोग में बिल्ली किस मुख्य अभिप्रेरक (Drive) के कारण बार-बार प्रयास कर रही थी?',
    'In Thorndike’s puzzle-box experiment, which primary drive motivated the cat to keep trying?',
    ['भूख (Hunger)', 'Hunger'],
    [
      ['जिज्ञासा (Curiosity)', 'Curiosity'],
      ['नींद (Sleep)', 'Sleep'],
      ['सामाजिक स्वीकृति (Social Approval)', 'Social Approval'],
    ],
    'थॉर्नडाइक ने बिल्ली को प्रयोग से पहले भूखा रखा था ताकि बाहर रखी मछली के लिए वह सक्रिय होकर प्रयास करे।',
    'Thorndike deprived the cat of food beforehand so hunger drove its active attempts to reach the fish outside.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव ने प्रायोगिक तंत्रिकाताप (Experimental Neurosis) की स्थिति कुत्ते में कैसे उत्पन्न की?',
    'How did Pavlov induce “Experimental Neurosis” in a dog?',
    ['वृत्त और अंडाकार (Ellipse) आकृतियों के बीच भेद करना अत्यंत कठिन बना देने पर कुत्ता उत्तेजित व भ्रमित हो गया', 'By making discrimination between a circle and a nearly circular ellipse too difficult, causing agitation and breakdown'],
    [
      ['कुत्ते को लगातार 10 दिनों तक सोने न देकर', 'By depriving the dog of sleep for 10 days'],
      ['केवल मीठा भोजन खिलाकर', 'By feeding only sweet food'],
      ['घंटी की आवाज़ हमेशा एक समान रखकर', 'By keeping the bell sound constant'],
    ],
    'पावलॉव ने वृत्त पर भोजन और अंडाकार पर भोजन नहीं दिया; जब अंडाकार का अनुपात 9:8 करके लगभग वृत्त जैसा बना दिया गया, तो विभेदन न कर पाने से कुत्ते में तंत्रिकाताप जैसे लक्षण दिखे।',
    'When Pavlov made an ellipse (8:9 ratio) nearly indistinguishable from a circle in a discrimination task, the dog showed severe agitation termed experimental neurosis.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“मनुष्य वैसा ही बन जाता है जैसा उसका पर्यावरण और पुनर्बलन उसे बनाते हैं” — यह किसकी विचारधारा का सार है?',
    '“A person becomes what their environment and reinforcement contingencies shape them to be” — this summarizes whose philosophy?',
    ['बी.एफ. स्किनर (कट्टर व्यवहारवाद)', 'B.F. Skinner (Radical Behaviorism)'],
    [
      ['रूसो (प्रकृतिवाद)', 'Rousseau (Naturalism)'],
      ['प्लेटो (आदर्शवाद)', 'Plato (Idealism)'],
      ['कार्ल रोजर्स (मानवतावाद)', 'Carl Rogers (Humanism)'],
    ],
    'स्किनर का मानना था कि व्यवहार और व्यक्तित्व पर्यावरणीय पुनर्बलन इतिहास का परिणाम हैं और सही वातावरण रचकर किसी भी व्यवहार का निर्माण संभव है।',
    'Skinner held that personality and behavior are shaped by reinforcement histories in the environment.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के सिद्धांत',
    'मनोविज्ञान में अधिगम सिद्धांतों को मुख्यतः किन दो बड़े वर्गों में बाँटा जाता है?',
    'In psychology, learning theories are broadly divided into which two major camps?',
    ['व्यवहारवादी (S-R सहचर्य सिद्धांत) एवं संज्ञानात्मक/गेस्टाल्ट क्षेत्र सिद्धांत', 'Behaviorist (S-R Association Theories) and Cognitive/Gestalt Field Theories'],
    [
      ['जैविक सिद्धांत एवं खगोलीय सिद्धांत', 'Biological theories and Astronomical theories'],
      ['शारीरिक सिद्धांत एवं रासायनिक सिद्धांत', 'Physical theories and Chemical theories'],
      ['केवल प्राचीन सिद्धांत एवं मध्यकालीन सिद्धांत', 'Only Ancient theories and Medieval theories'],
    ],
    'एक वर्ग व्यवहारवाद (थॉर्नडाइक, पावलॉव, स्किनर, हल) है जो S-R और पुनर्बलन पर बल देता है; दूसरा वर्ग संज्ञानात्मक/क्षेत्र सिद्धांत (कोहलर, टोलमैन, लेविन, बंडूरा, ब्रूनर) है जो सूझ व मानसिक प्रक्रियाओं पर बल देता है।',
    'Learning theories broadly split into Behaviorist S-R connection theories (Thorndike, Pavlov, Skinner) and Cognitive/Field theories (Kohler, Tolman, Lewin, Bandura).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक ने किन परिस्थितियों में कहा कि “सीखना तब सबसे अच्छा होता है जब स्नायु तंत्र में चालन इकाई (Conduction Unit) सक्रिय होने को तैयार हो”?',
    'Under which law did Thorndike state that “learning occurs best when a conduction unit in the nervous system is ready to conduct”?',
    ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
    [
      ['अनुपयोग का नियम (Law of Disuse)', 'Law of Disuse'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
    ],
    'थॉर्नडाइक ने तत्परता के नियम को तंत्रिकीय चालन इकाई (Conduction Unit) की तैयारी के रूप में समझाया था।',
    'Thorndike explained the Law of Readiness neurophysiologically in terms of a conduction unit being ready to conduct.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में यदि भोजन की मात्रा बहुत अधिक बढ़ा दी जाए, तो अनुबंधन की गति पर क्या प्रभाव पड़ता है?',
    'In Pavlov’s experiment, how does increasing the magnitude or intensity of the UCS (food) affect conditioning?',
    ['अनुबंधन अपेक्षाकृत अधिक तीव्र और मजबूत होता है', 'Conditioning becomes relatively faster and stronger'],
    [
      ['अनुबंधन पूरी तरह समाप्त हो जाता है', 'Conditioning completely disappears'],
      ['भोजन तटस्थ उद्दीपन बन जाता है', 'Food turns into a neutral stimulus'],
      ['कुत्ते में कोई लार नहीं बनती', 'The dog produces no saliva at all'],
    ],
    'स्वाभाविक उद्दीपन (UCS) की तीव्रता और आकर्षण जितना अधिक होता है, अनुबंधित अनुक्रिया का अर्जन उतनी ही शीघ्रता और दृढ़ता से होता है।',
    'Higher intensity or salience of the UCS strengthens motivation and leads to faster, stronger acquisition of the CR.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'निश्चित अनुपात (FR) अनुसूची में बहुत बड़ा अनुपात (जैसे प्रत्येक 500 अनुक्रिया पर 1 पुरस्कार) रख देने पर प्राणी में थोड़ी देर के लिए कार्य रुकने की प्रवृत्ति दिखती है; इसे क्या कहते हैं?',
    'In a Fixed Ratio schedule, after reinforcement is delivered on a very high ratio, the organism briefly stops responding before starting again; this is called:',
    ['पुनर्बलन-पश्चात विराम (Post-Reinforcement Pause)', 'Post-Reinforcement Pause'],
    [
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
      ['अनुपात तनाव (Ratio Strain / Extinction)', 'Ratio Strain only without pause'],
    ],
    'निश्चित अनुपात (FR) व निश्चित अंतराल (FI) दोनों में पुरस्कार मिलने के ठीक बाद कुछ समय का विराम आता है जिसे Post-Reinforcement Pause कहते हैं।',
    'Both Fixed Ratio and Fixed Interval schedules show a brief lull right after reinforcement delivery known as a Post-Reinforcement Pause.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    'प्राथमिक विद्यालय में पहाड़े, वर्तनी (Spelling) और हस्तलेखन के कौशल विकसित करने में थॉर्नडाइक का कौन-सा नियम सर्वाधिक उपयोगी है?',
    'Which law of Thorndike is most useful in developing multiplication tables, spelling, and handwriting skills in primary school?',
    ['अभ्यास का नियम (Law of Exercise)', 'Law of Exercise'],
    [
      ['तत्परता का केवल जैविक नियम', 'Purely biological maturation'],
      ['पश्चगामी अनुबंधन का नियम', 'Law of Backward Conditioning'],
      ['दंड का अनियंत्रित नियम', 'Uncontrolled Punishment'],
    ],
    'पहाड़े, वर्तनी और सुलेख जैसे यांत्रिक व गतिक कौशल सार्थक और नियमित अभ्यास (Law of Exercise) से ही स्थायी होते हैं।',
    'Skill mastery in tables, spelling, and handwriting depends heavily on structured, meaningful practice (Law of Exercise).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    '“लिटिल अल्बर्ट” प्रयोग में वाटसन ने अल्बर्ट में भय उत्पन्न करने के बाद उसे समाप्त करने का तरीका नहीं अपनाया, किंतु बाद में किस महिला मनोवैज्ञानिक ने “लिटिल पीटर” पर प्रति-अनुबंधन द्वारा खरगोश का डर दूर किया?',
    'After Watson conditioned fear in Little Albert, which psychologist demonstrated counter-conditioning by eliminating a rabbit phobia in “Little Peter”?',
    ['मैरी कवर जोन्स (Mary Cover Jones)', 'Mary Cover Jones'],
    [
      ['मारिया मॉन्टेसरी (Maria Montessori)', 'Maria Montessori'],
      ['एलिजाबेथ हरलॉक (Elizabeth Hurlock)', 'Elizabeth Hurlock'],
      ['एना फ्रायड (Anna Freud)', 'Anna Freud'],
    ],
    'मैरी कवर जोन्स (1924) ने तीन वर्षीय पीटर को उसका पसंदीदा भोजन खिलाते समय धीरे-धीरे खरगोश को पास लाकर उसका डर समाप्त किया; उन्हें व्यवहार चिकित्सा की जननी भी कहा जाता है।',
    'Mary Cover Jones (1924) eliminated Little Peter’s fear of rabbits by pairing pleasant food with gradual exposure to the rabbit, pioneering behavior therapy.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'अभिक्रमित अनुदेशन सामग्री में छात्र की सक्रिय भागीदारी सुनिश्चित करने के लिए प्रत्येक फ्रेम के अंत में क्या रखा जाता है?',
    'What is placed at the end of each frame in Programmed Instruction to ensure active learner participation?',
    ['एक प्रश्न या रिक्त स्थान जिसका उत्तर छात्र स्वयं लिखता है और तुरंत सही उत्तर से मिलान करता है', 'A question or blank for the learner to answer actively and immediately verify against the correct key'],
    [
      ['केवल 20 पृष्ठों का लंबा निबंध पढ़ने का निर्देश', 'An instruction to read a 20-page essay passively'],
      ['अगले महीने होने वाली परीक्षा की तिथि', 'The date of next month’s exam'],
      ['माता-पिता के हस्ताक्षर का कॉलम', 'A column for parent signatures'],
    ],
    'रेखीय अभिक्रमित अनुदेशन में प्रत्येक छोटे फ्रेम में जानकारी के साथ एक रिक्त स्थान/प्रश्न होता है ताकि छात्र निष्क्रिय न रहे और तुरंत अपनी पुष्टि कर सके।',
    'Each small frame includes a prompt or blank requiring an active written response followed by immediate confirmation.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'जब कक्षा में शिक्षक किसी नए संप्रत्यय को पढ़ाते समय उससे मिलती-जुलती परिचित घटना का उदाहरण देता है, तो वह थॉर्नडाइक के किस नियम का उपयोग करता है?',
    'When a teacher uses a familiar analogous example while introducing a new concept, which law of Thorndike is applied?',
    ['सादृश्यता का नियम (Law of Analogy)', 'Law of Analogy'],
    [
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['विलोपन का नियम', 'Law of Extinction'],
    ],
    'परिचित और नवीन स्थितियों के बीच सादृश्यता दिखाने से विद्यार्थी पूर्व-अर्जित अनुक्रियाओं को नई परिस्थिति में आसानी से लागू कर पाता है।',
    'Using familiar analogies lets learners transfer existing responses to new situations via the Law of Analogy.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'निम्नलिखित में से कौन-सा एक “सकारात्मक पुनर्बलन” का सबसे सटीक उदाहरण है?',
    'Which of the following is the most accurate example of “Positive Reinforcement”?',
    ['स्वच्छ लेख लिखने पर छात्र की कॉपी में “उत्कृष्ट” लिखकर स्टार देना, जिससे वह आगे भी साफ लिखे', 'Writing “Excellent” and giving a star for neat handwriting, leading to continued neat writing'],
    [
      ['देर से आने पर छात्र को मैदान के चक्कर लगवाना', 'Making a late student run laps around the field'],
      ['अधिक शोर करने पर खेल का समय घटा देना', 'Reducing playtime for making too much noise'],
      ['छात्र द्वारा होमवर्क करने पर उसकी सुबह की सजा माफ कर देना', 'Canceling morning detention when a student completes homework'],
    ],
    'स्टार और प्रशंसा (सुखद उद्दीपन) जोड़कर वांछित व्यवहार को बढ़ाना सकारात्मक पुनर्बलन है; सजा माफ करना नकारात्मक पुनर्बलन है, और चक्कर लगवाना/खेल घटाना दंड हैं।',
    'Adding a pleasant stimulus (star/praise) to increase neat writing is Positive Reinforcement; canceling detention is Negative Reinforcement; laps/lost play are punishments.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'पावलॉव के प्रयोग में “उद्दीपन सामान्यीकरण” (Stimulus Generalization) किस बात को दर्शाता है?',
    'What does “Stimulus Generalization” indicate in Pavlov’s experiment?',
    ['मूल अनुबंधित घंटी से मिलती-जुलती अन्य घंटियों की ध्वनि पर भी कुत्ते द्वारा लार टपकाना', 'The dog salivating to tones similar in pitch to the original conditioned bell'],
    [
      ['कुत्ते का केवल भोजन देखकर ही लार टपकाना', 'The dog salivating only when seeing food'],
      ['घंटी की आवाज़ से कुत्ते का डरकर भाग जाना', 'The dog running away in fear of the bell'],
      ['सभी प्रकार की ध्वनियों पर लार आना पूरी तरह बंद हो जाना', 'Complete cessation of salivation to all sounds'],
    ],
    'समान विशेषताओं वाले उद्दीपनों के प्रति मूल अनुबंधित अनुक्रिया का फैल जाना उद्दीपन सामान्यीकरण कहलाता है।',
    'The spread of the conditioned response to stimuli similar to the original CS is Stimulus Generalization.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम और शिक्षण',
    '“सीखना अनुभव के परिणामस्वरूप व्यवहार में परिवर्तन है” — यह विचार किस दृष्टिकोण को पुष्ट करता है?',
    '“Learning is a change in behavior as a result of experience” — this idea reinforces which viewpoint?',
    ['अधिगम एक अर्जित प्रक्रिया है जो जन्मजात मूल प्रवृत्तियों से भिन्न है', 'Learning is an acquired process distinct from innate instincts'],
    [
      ['अधिगम केवल आनुवंशिक गुणसूत्रों से स्वतः हो जाता है', 'Learning happens automatically via genetic chromosomes'],
      ['अधिगम केवल शारीरिक वृद्धि का दूसरा नाम है', 'Learning is merely another term for physical growth'],
      ['अधिगम में वातावरण की कोई भूमिका नहीं होती', 'Environment plays no role in learning'],
    ],
    'अनुभव, अभ्यास और प्रशिक्षण अधिगम को जैविक परिपक्वता तथा जन्मजात सहज क्रियाओं से अलग पहचान देते हैं।',
    'Experience and practice distinguish acquired learning from innate instincts and biological maturation.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी किस अवधारणा में बताया कि बार-बार प्रयास करने पर गलतियों की संख्या कम होती जाती है और अधिगम वक्र नीचे की ओर (या सफलता में ऊपर की ओर) बढ़ता है?',
    'Which concept of Thorndike explains why errors decrease across trials and success rises gradually?',
    ['त्रुटिपूर्ण अनुक्रियाओं का विलोपन एवं सही बंधनों का संचयन (Stamping out & Stamping in)', 'Stamping out erroneous responses and stamping in correct S-R bonds'],
    [
      ['अचानक सूझ द्वारा समस्या का एकबारगी हल', 'One-shot problem solution via sudden insight'],
      ['दूसरे की नकल से बिना त्रुटि सीखना', 'Errorless learning via imitation'],
      ['दमन द्वारा अचेतन में स्मृति का संग्रह', 'Storing memories in the unconscious via repression'],
    ],
    'थॉर्नडाइक ने दो शब्द प्रयुक्त किए: “Stamping in” (सुखद परिणाम से सही बंधन पक्का होना) और “Stamping out” (असफल/कष्टदायक प्रयासों का हटना)।',
    'Thorndike used the terms “stamping in” (strengthening satisfying bonds) and “stamping out” (weakening unsuccessful responses).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“अंधविश्वास (Superstition)” के विषय में स्किनर का प्रयोग हमें कक्षा में किस त्रुटि से बचने की सीख देता है?',
    'What classroom mistake does Skinner’s “superstitious pigeon” study warn teachers to avoid?',
    ['छात्र के वांछित व्यवहार से बिना जोड़े अनियमित रूप से पुरस्कार या प्रशंसा न दें', 'Avoid giving rewards or praise arbitrarily without linking them directly to desired behavior'],
    [
      ['छात्रों को कभी किसी प्रकार का पुरस्कार न दें', 'Never give any reward to students'],
      ['कक्षा में कबूतरों के चित्र न लगाएँ', 'Avoid hanging pictures of pigeons in class'],
      ['हर 15 सेकंड में घंटी अवश्य बजाएँ', 'Ring a bell every 15 seconds'],
    ],
    'यदि शिक्षक बिना किसी विशिष्ट सही प्रयास के यों ही अनियमित पुरस्कार दे दे, तो छात्र गलत आदतों को भी सफलता का कारण मान सकता है।',
    'Arbitrary, non-contingent rewards can accidentally reinforce irrelevant or undesirable behaviors instead of target skills.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'अत्यधिक कठिन शब्द सुनते ही एक बच्चे को परीक्षा के भय से पसीना आने लगता है। इस प्रतिक्रिया को नियंत्रित करने के लिए शिक्षक को क्या करना चाहिए?',
    'A child sweats with exam anxiety upon hearing difficult words. How should a teacher help overcome this conditioned fear?',
    ['सुरक्षित, सहयोगी वातावरण में सरल से कठिन शब्दों का क्रमिक अभ्यास कराकर प्रति-अनुबंधन करना', 'Use gradual exposure from simple to difficult words in a supportive setting (counter-conditioning)'],
    [
      ['बच्चे को तुरंत कठिन शब्दों की परीक्षा से बाहर निकाल देना', 'Immediately expel the child from vocabulary tests'],
      ['गलती करने पर सबके सामने डाँटकर भय और बढ़ा देना', 'Scold the child publicly to increase fear'],
      ['बच्चे को लिखना-पढ़ना पूरी तरह बंद करा देना', 'Stop the child from reading and writing altogether'],
    ],
    'भय जैसे अनुबंधित संवेग को दूर करने के लिए पावलॉव के विलोपन एवं प्रति-अनुबंधन (सकारात्मक सुखद अनुभव जोड़ने) का प्रयोग सर्वाधिक प्रभावी है।',
    'Extinguishing conditioned anxiety via safe, supportive, graded exposure pairs positive feelings with the feared task (counter-conditioning).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'निम्नलिखित में से किस पुनर्बलन अनुसूची में “अनुक्रिया की गति और समय के बीच Scalloped (लहरदार/सीप जैसा) वक्र” देखने को मिलता है, जहाँ पुरस्कार मिलने के ठीक पहले प्रयास अचानक बहुत तेज हो जाते हैं?',
    'Which reinforcement schedule produces a characteristic “scalloped” cumulative response curve, where effort surges sharply just before reinforcement is due?',
    ['निश्चित अंतराल अनुसूची (Fixed Interval - FI)', 'Fixed Interval (FI) Schedule'],
    [
      ['परिवर्ती अनुपात अनुसूची (Variable Ratio - VR)', 'Variable Ratio (VR) Schedule'],
      ['परिवर्ती अंतराल अनुसूची (Variable Interval - VI)', 'Variable Interval (VI) Schedule'],
      ['निश्चित अनुपात अनुसूची (Fixed Ratio - FR)', 'Fixed Ratio (FR) Schedule'],
    ],
    'निश्चित अंतराल (जैसे वार्षिक या मासिक परीक्षा की तय तिथि) में शुरू में शिथिलता रहती है और तिथि नजदीक आते ही प्रयास तेजी से बढ़ते हैं—इसे FI Scallop कहते हैं।',
    'In a Fixed Interval schedule (like fixed monthly/annual exam dates), effort lulls right after reward and accelerates sharply just before the interval ends (FI scallop).',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'एक शिक्षक विद्यार्थियों को कहता है, “जो छात्र आज का विज्ञान प्रयोग ध्यान से पूरा करेंगे, उन्हें प्रयोगशाला में नया सूक्ष्मदर्शी देखने को मिलेगा।” यहाँ शिक्षक किसका प्रयोग कर रहा है?',
    'A teacher tells students, “Those who carefully complete today’s science experiment will get to look through the new microscope.” What is the teacher using?',
    ['प्रभाव के नियम और सकारात्मक पुनर्बलन की प्रत्याशा', 'Law of Effect and expectation of positive reinforcement'],
    [
      ['विलोपन नियम', 'Law of Extinction'],
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['बाह्य अवरोध', 'External Inhibition'],
    ],
    'वांछित कार्य के पूर्ण होने पर संतोषजनक व रोचक गतिविधि का पुरस्कार थॉर्नडाइक के प्रभाव के नियम और स्किनर के सकारात्मक पुनर्बलन को दर्शाता है।',
    'Contingent access to an exciting privilege upon task completion applies Thorndike’s Law of Effect and positive reinforcement.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    '“बिल्ली का पहेली बॉक्स”, “कुत्ते की लार ग्रंथि” और “चूहे का लीवर बॉक्स” — ये तीनों प्रसिद्ध प्रयोग क्रमशः किन मनोवैज्ञानिकों से जुड़े हैं?',
    '“Cat in a Puzzle Box”, “Dog’s Salivary Gland”, and “Rat in a Lever Box” — these three experiments belong respectively to:',
    ['थॉर्नडाइक, पावलॉव, स्किनर', 'Thorndike, Pavlov, Skinner'],
    [
      ['पावलॉव, थॉर्नडाइक, कोहलर', 'Pavlov, Thorndike, Kohler'],
      ['स्किनर, बंडूरा, थॉर्नडाइक', 'Skinner, Bandura, Thorndike'],
      ['कोहलर, स्किनर, पावलॉव', 'Kohler, Skinner, Pavlov'],
    ],
    'थॉर्नडाइक ने बिल्ली पर, पावलॉव ने कुत्ते पर तथा स्किनर ने चूहे व कबूतर पर अपने आधारभूत अधिगम प्रयोग किए।',
    'Thorndike experimented with cats in puzzle boxes, Pavlov with dogs, and Skinner with rats and pigeons in operant chambers.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    '“अनुबंधन” (Conditioning) शब्द का सबसे सटीक मनोवैज्ञानिक अर्थ क्या है?',
    'What is the most accurate psychological meaning of the term “Conditioning”?',
    ['दो घटनाओं या उद्दीपनों अथवा व्यवहार व उसके परिणाम के बीच नियमित साहचर्य स्थापित होना', 'Establishing a systematic association between stimuli or between a behavior and its consequences'],
    [
      ['किसी विषय को बिना समझे जोर-जोर से चिल्लाकर पढ़ना', 'Reading a subject loudly without understanding'],
      ['केवल शारीरिक व्यायाम करके मांसपेशियाँ बढ़ाना', 'Building muscles through physical exercise'],
      ['बालक की जन्मजात बुद्धि का बिना अभ्यास बढ़ जाना', 'Automatic increase in innate IQ without practice'],
    ],
    'मनोविज्ञान में अनुबंधन का अर्थ साहचर्य द्वारा किसी विशेष परिस्थिति या परिणाम के प्रति सुनिश्चित अनुक्रिया का अर्जन करना है।',
    'In psychology, conditioning refers to learning an association between environmental events (classical) or between actions and consequences (operant).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी किस प्रसिद्ध कृति में “स्वतंत्रता और गरिमा” जैसे पारंपरिक विचारों के स्थान पर वैज्ञानिक व्यवहार अभियांत्रिकी (Behavioral Engineering) का पक्ष लिया?',
    'In which famous book did Skinner argue for scientific behavioral engineering over traditional notions of autonomous freedom?',
    ['Beyond Freedom and Dignity (1971)', 'Beyond Freedom and Dignity (1971)'],
    [
      ['Animal Intelligence (1911)', 'Animal Intelligence (1911)'],
      ['The Mentality of Apes (1925)', 'The Mentality of Apes (1925)'],
      ['Frames of Mind (1983)', 'Frames of Mind (1983)'],
    ],
    '1971 में प्रकाशित “Beyond Freedom and Dignity” में स्किनर ने तर्क दिया कि मानव समाज की समस्याएँ हल करने के लिए पर्यावरणीय पुनर्बलन का वैज्ञानिक डिजाइन आवश्यक है।',
    'In “Beyond Freedom and Dignity” (1971), Skinner advocated designing positive cultural contingencies through behavioral technology.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'जब कक्षा में किसी छात्र का मन पारिवारिक तनाव के कारण पढ़ाई में नहीं लग रहा हो, तो शिक्षक को पहले उससे सहज बातचीत कर उसकी मानसिक स्थिति ठीक करनी चाहिए। यह किस नियम के अनुरूप है?',
    'When a student cannot focus due to family stress, a teacher should first talk empathetically to stabilize the student’s mindset. Which law does this reflect?',
    ['तत्परता एवं मनोवृत्ति का नियम', 'Law of Readiness and Law of Attitude'],
    [
      ['अनुपयोग का नियम', 'Law of Disuse'],
      ['पश्चगामी अनुबंधन का नियम', 'Law of Backward Conditioning'],
      ['प्रोजेक्ट पिजन का सिद्धांत', 'Project Pigeon principle'],
    ],
    'जब तक शिक्षार्थी मानसिक रूप से शांत और तत्पर (Attitude/Readiness) न हो, तब तक शिक्षण प्रभावी नहीं हो सकता।',
    'Until a learner’s mental state and attitude are calm and receptive, effective learning cannot occur (Readiness & Attitude).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    '“बच्चे द्वारा सिरदर्द होने पर दवा की गोली खा लेना और दर्द से आराम मिल जाना” — भविष्य में सिरदर्द होने पर दवा खाने का व्यवहार किससे मजबूत होता है?',
    '“Taking a painkiller during a headache and getting relief from pain” — future pill-taking during headaches is strengthened by:',
    ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
    [
      ['सकारात्मक दंड (Positive Punishment)', 'Positive Punishment'],
      ['शास्त्रीय विलोपन (Classical Extinction)', 'Classical Extinction'],
      ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
    ],
    'दवा लेने से सिरदर्द रूपी कष्टदायक उद्दीपन समाप्त हो जाता है, जिससे भविष्य में दवा लेने की प्रवृत्ति बढ़ती है—यह पलायन/मुक्ति आधारित नकारात्मक पुनर्बलन है।',
    'Taking the pill removes the aversive headache, increasing the likelihood of taking it again—a classic example of Negative Reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'अधिगम में “अवरोध एवं विलोपन” के संदर्भ में कौन-सा कथन सत्य है?',
    'Which statement is true regarding “extinction” in classical conditioning?',
    ['विलोपन से पूर्व सीखा गया संबंध पूरी तरह नष्ट नहीं होता, बल्कि दब जाता है; यही कारण है कि स्वतः पुनःप्राप्ति होती है', 'Extinction does not completely erase prior learning but suppresses it, which is why spontaneous recovery occurs'],
    [
      ['विलोपन होते ही मस्तिष्क से स्मृति सदा के लिए मिट जाती है', 'Extinction permanently erases the memory trace from the brain'],
      ['विलोपन केवल दंड देने से ही हो सकता है', 'Extinction can occur only via punishment'],
      ['विलोपन के बाद प्राणी पुनः कभी वही अनुक्रिया नहीं कर सकता', 'After extinction, the organism can never make that response again'],
    ],
    'पावलॉव ने सिद्ध किया कि विलोपन अवरोधक प्रक्रिया (Inhibitory learning) है, न कि विस्मरण; इसलिए थोड़ी विश्राम अवधि या पुनः युग्मन (Reacquisition) से अनुक्रिया शीघ्र लौट आती है।',
    'Pavlov demonstrated that extinction involves inhibitory suppression rather than erasure, as evidenced by spontaneous recovery and rapid reacquisition.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'निम्नलिखित में से किस कार्य को सीखने में “प्रयास एवं त्रुटि” विधि की सर्वाधिक भूमिका होती है?',
    'In learning which of the following tasks does the “Trial and Error” method play the largest role?',
    ['तैराकी, साइकिल चलाना और टाइपिंग जैसे गतिक कौशल सीखना', 'Acquiring motor skills like swimming, cycling, and typing'],
    [
      ['केवल किसी कविता को सुनकर भावुक होना', 'Feeling emotional on hearing a poem'],
      ['जन्मजात पलक झपकाना', 'Innate blinking of eyes'],
      ['बिना प्रयास के नींद आ जाना', 'Falling asleep effortlessly'],
    ],
    'तैराकी, साइकिल चलाना, टाइपिंग और संगीत वाद्य बजाने जैसे गतिक कौशलों में प्रारंभिक गलतियों और निरंतर अभ्यास के माध्यम से ही दक्षता आती है।',
    'Motor skills like cycling, swimming, and typing heavily rely on repeated practice and correcting initial errors.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'स्किनर ने कक्षा शिक्षण की किस पारंपरिक कमी को दूर करने के लिए शिक्षण मशीन का प्रस्ताव रखा था?',
    'Which traditional flaw in classroom teaching did Skinner aim to fix by proposing teaching machines?',
    ['एक ही समय में 40 छात्रों को पढ़ाने से मिलने वाली विलंबित प्रतिपुष्टि और व्यक्तिगत गति का अभाव', 'Delayed feedback and lack of individualized pacing in large classes'],
    [
      ['विद्यालयों में पुस्तकों की अत्यधिक सुंदर छपाई', 'Excessively attractive printing of textbooks'],
      ['छात्रों द्वारा बहुत अधिक प्रश्न पूछने की आदत', 'Students asking too many questions'],
      ['कक्षा में खेलकूद का अधिक होना', 'Too much sports in school'],
    ],
    'स्किनर ने देखा कि शिक्षक एक साथ पूरी कक्षा की कॉपियाँ तुरंत नहीं जाँच सकते जिससे पुनर्बलन में देरी होती है; शिक्षण मशीन हर उत्तर पर तुरंत प्रतिपुष्टि देती थी।',
    'Skinner noted teachers cannot reinforce 40 students instantly; teaching machines solved this by providing immediate individual feedback.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम वक्र एवं प्रकृति',
    '“अधिगम केवल ज्ञान का निष्क्रिय संग्रह नहीं, बल्कि अनुभवों का सक्रिय पुनर्निर्माण है” — यह कथन आधुनिक शिक्षाशास्त्र में किसके अनुरूप है?',
    '“Learning is not passive storage of facts, but active reconstruction of experiences” — this aligns with which modern pedagogical view?',
    ['रचनावाद एवं बाल-केंद्रित अधिगम (Constructivism & Child-Centered Learning)', 'Constructivism and Child-Centered Learning'],
    [
      ['कठोर यांत्रिक रटंतवाद', 'Rigid mechanical rote learning'],
      ['केवल दंड आधारित अनुशासनवाद', 'Punishment-based disciplinarianism'],
      ['निष्क्रिय व्याख्यान प्रणाली', 'Passive lecture-only system'],
    ],
    'रचनावादी (Constructivist) दृष्टिकोण मानता है कि विद्यार्थी पूर्व ज्ञान और नए अनुभवों के बीच सक्रिय अंतःक्रिया द्वारा स्वयं ज्ञान की रचना करते हैं।',
    'Constructivism holds that learners actively construct knowledge by integrating new experiences with prior mental schemas.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'यदि किसी छात्र को कोई समस्या हल करने के अनेक मार्गों में से सही मार्ग नहीं सूझ रहा, तो थॉर्नडाइक के किस नियम के अनुसार वह पहले एक सूत्र, फिर दूसरा सूत्र और फिर आरेख बनाकर प्रयास करेगा?',
    'If a student cannot solve a problem initially and tries one formula, then another, and then a diagram, which Thorndike law does this illustrate?',
    ['बहु-प्रतिक्रिया का नियम (Law of Multiple Response)', 'Law of Multiple Response'],
    [
      ['अनुपयोग का नियम (Law of Disuse)', 'Law of Disuse'],
      ['साहचर्यात्मक स्थानांतरण (Associative Shifting)', 'Law of Associative Shifting'],
      ['मनोवृत्ति का नियम (Law of Attitude)', 'Law of Attitude'],
    ],
    'सही समाधान न मिलने तक अलग-अलग संभावित अनुक्रियाओं को आज़माना ही बहु-प्रतिक्रिया का नियम है।',
    'Trying varied strategies until the effective solution is discovered exemplifies the Law of Multiple Response.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में यदि कुत्ते का ऑपरेशन कर उसकी लार नली को मापने वाले यंत्र से न जोड़ा गया होता, तो किस चीज़ का सटीक मापन संभव नहीं होता?',
    'In Pavlov’s experiment, without surgically redirecting the salivary duct to a measuring apparatus, what could not have been precisely measured?',
    ['लार स्राव की मात्रा (बूँदों की संख्या) और अनुक्रिया का विलंब काल (Latency)', 'Quantity of saliva (drops) and response latency'],
    [
      ['कुत्ते द्वारा लीवर दबाने की संख्या', 'Number of lever presses by the dog'],
      ['कुत्ते के दौड़ने की गति', 'Running speed of the dog'],
      ['कुत्ते की सूझ का समय', 'Time taken for sudden insight'],
    ],
    'पावलॉव ने वस्तुनिष्ठ वैज्ञानिक मापन के लिए फिस्टुला (Fistula) द्वारा लार की बूँदों और सेकंड में प्रतिक्रिया समय को सटीकता से मापा था।',
    'Pavlov used a salivary fistula to objectively count saliva drops and response latency in seconds.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'निम्नलिखित में से किस तकनीक को “बैकवर्ड चेनिंग” (Backward Chaining) कहा जाता है, जो विशेष आवश्यकता वाले बच्चों को कौशल सिखाने में बहुत उपयोगी है?',
    'Which technique, highly effective for teaching self-help skills to children with special needs, is called “Backward Chaining”?',
    ['पूरे कार्य के अंतिम चरण को बच्चे से स्वयं पूरा कराकर तुरंत पुरस्कार देना और फिर क्रमशः पिछले चरण जोड़ना', 'Having the learner complete the very last step first for immediate reward, then adding earlier steps backward'],
    [
      ['कार्य को उलटे हाथ से कराने का अभ्यास करना', 'Practicing the task with the non-dominant hand'],
      ['किसी गलती पर पूरा कार्य रद्द कर देना', 'Canceling the entire task on any mistake'],
      ['केवल मौखिक व्याख्यान देकर अभ्यास न कराना', 'Giving verbal lectures without practice'],
    ],
    'बैकवर्ड चेनिंग (जैसे शर्ट के बटन लगाने में आखिरी बटन खुद लगवाना) में बच्चे को हर प्रयास के अंत में तुरंत पूर्णता और सफलता का सुखद अनुभव मिलता है।',
    'In Backward Chaining, the instructor performs initial steps and lets the learner finish the final step for immediate success and reinforcement, gradually fading prompts backward.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    '“बिना रुचि और बिना तैयारी के किसी बालक को पढ़ाना समय और ऊर्जा की बर्बादी है” — यह कथन थॉर्नडाइक के किस नियम को पुष्ट करता है?',
    '“Teaching a child without interest or preparedness is a waste of time and energy” — this supports which law of Thorndike?',
    ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
    [
      ['उपयोग का नियम (Law of Use)', 'Law of Use'],
      ['साहचर्यात्मक स्थानांतरण का नियम', 'Law of Associative Shifting'],
      ['आंशिक क्रिया का नियम', 'Law of Partial Activity'],
    ],
    'तत्परता का नियम स्पष्ट करता है कि शिक्षार्थी की आंतरिक तैयारी के अभाव में बाह्य शिक्षण अप्रभावी व खीझ उत्पन्न करने वाला होता है।',
    'The Law of Readiness emphasizes that instruction without internal readiness produces annoyance and poor learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के सिद्धांत को “संबंध-प्रत्यावर्तन सिद्धांत” या “प्रतिस्थापन अनुबंधन” क्यों कहा जाता है?',
    'Why is Pavlov’s theory sometimes called “Substitution Conditioning” or “Conditioned Reflex Theory”?',
    ['क्योंकि इसमें स्वाभाविक उद्दीपन (भोजन) के स्थान पर एक नया कृत्रिम उद्दीपन (घंटी) प्रतिस्थापित होकर वही अनुक्रिया कराता है', 'Because an artificial stimulus (bell) substitutes for the natural stimulus (food) to elicit the reflex'],
    [
      ['क्योंकि इसमें छात्र की जगह शिक्षक परीक्षा देता है', 'Because the teacher takes the exam in place of the student'],
      ['क्योंकि इसमें एक विषय के स्थान पर दूसरा विषय पढ़ाया जाता है', 'Because one subject is taught in place of another'],
      ['क्योंकि इसमें दंड के स्थान पर केवल विलोपन होता है', 'Because extinction replaces punishment'],
    ],
    'स्वाभाविक उद्दीपन का स्थान घंटी जैसा अनुबंधित उद्दीपन ले लेता है (उद्दीपन प्रतिस्थापन), इसलिए इसे संबंध-प्रत्यावर्तन या प्रतिस्थापन अनुबंधन भी कहते हैं।',
    'In Pavlovian conditioning, a conditioned stimulus effectively substitutes for the unconditioned stimulus to trigger the response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“अधिगम का राजमार्ग अभिप्रेरणा है” — यह प्रसिद्ध उक्ति किस मनोवैज्ञानिक की है?',
    '“Motivation is the superhighway to learning” — which psychologist made this famous remark?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['इवान पावलॉव', 'Ivan Pavlov'],
      ['वुल्फगैंग कोहलर', 'Wolfgang Kohler'],
      ['चार्ल्स स्पीयरमैन', 'Charles Spearman'],
    ],
    'बी.एफ. स्किनर ने अभिप्रेरणा को सीखने का सर्वोत्तम राजमार्ग (National Highway / Superhighway to learning) कहा है क्योंकि प्रेरित प्राणी शीघ्र क्रिया-प्रसूत अनुक्रियाएँ करता है।',
    'B.F. Skinner famously called motivation the superhighway to learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक द्वारा प्रतिपादित “प्रभाव के नियम” का नकारात्मक पक्ष क्या कहलाता है?',
    'What is the negative side of Thorndike’s “Law of Effect”?',
    ['दुःखद या असंतोषजनक परिणाम से उद्दीपन-अनुक्रिया बंधन का कमजोर पड़ना', 'Weakening of an S-R bond when followed by an annoying or unsatisfying consequence'],
    [
      ['अधिक अभ्यास से कौशल में निखार आना', 'Skill refinement from extra practice'],
      ['समान तत्वों से स्थानांतरण बढ़ना', 'Increased transfer via identical elements'],
      ['तत्परता से आनंद की प्राप्ति होना', 'Pleasure derived from readiness'],
    ],
    'प्रभाव के नियम के दो पक्ष हैं: संतोषजनक परिणाम से बंधन दृढ़ होना और असंतोषजनक परिणाम से बंधन क्षीण होना (जिसे बाद में थॉर्नडाइक ने सीमित माना)।',
    'The negative side of the Law of Effect states that annoying consequences weaken S-R connections (later modified by Thorndike in 1930).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'यदि किसी बच्चे का कमरे की सफाई करने पर माता-पिता की लगातार डाँट (जो पहले गंदगी के कारण पड़ती थी) बंद हो जाए, तो बच्चे द्वारा कमरे की सफाई करना किस पुनर्बलन से बढ़ेगा?',
    'If a child cleans his room and his parents’ constant nagging stops, the child’s future room-cleaning is strengthened by:',
    ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
    [
      ['सकारात्मक दंड (Positive Punishment)', 'Positive Punishment'],
      ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
      ['शास्त्रीय सामान्यीकरण (Classical Generalization)', 'Classical Generalization'],
    ],
    'डाँट या किचकिच (Nagging) एक अप्रिय उद्दीपन है; सफाई करने पर इसका हट जाना नकारात्मक पुनर्बलन बनकर सफाई के व्यवहार को बढ़ाता है।',
    'Stopping parental nagging (an aversive stimulus) contingent on cleaning the room strengthens room-cleaning through Negative Reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'किसी छात्र को पहले एक कड़क अध्यापक के कारण गणित से डर लगता था, किंतु नए स्नेही अध्यापक के आने पर कुछ समय बाद उसे गणित में रुचि होने लगी। पुराना डर कम होना क्या दर्शाता है?',
    'A student feared math due to a harsh teacher, but under a warm new teacher the fear faded and interest grew. The fading of fear illustrates:',
    ['विलोपन एवं प्रति-अनुबंधन (Extinction and Counter-Conditioning)', 'Extinction and Counter-Conditioning'],
    [
      ['उद्दीपन सामान्यीकरण', 'Stimulus Generalization'],
      ['पश्चगामी अनुबंधन', 'Backward Conditioning'],
      ['आकारण (Shaping)', 'Shaping'],
    ],
    'डाँट (UCS) बंद होने से पुराने भय का विलोपन हुआ और स्नेहपूर्ण शिक्षण (नए सुखद UCS) से गणित के प्रति सकारात्मक भावना का प्रति-अनुबंधन हुआ।',
    'Removing harsh scolding extinguished the conditioned fear, while warm instruction counter-conditioned positive interest in math.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“शैक्षिक उद्देश्यों को प्रेक्षणीय एवं मापनीय व्यवहार के पदों (Behavioral Terms) में लिखने” की परंपरा किस मनोवैज्ञानिक विचारधारा की देन है?',
    'The practice of writing instructional objectives in observable, measurable behavioral terms stems from which psychological school?',
    ['व्यवहारवाद (विशेषतः स्किनर एवं मेगर)', 'Behaviorism (especially Skinner and Mager)'],
    [
      ['मनोविश्लेषणवाद (फ्रायड)', 'Psychoanalysis (Freud)'],
      ['गेस्टाल्ट अंतर्दृष्टिवाद (कोहलर)', 'Gestalt Insight (Kohler)'],
      ['अस्तित्ववाद', 'Existentialism'],
    ],
    'स्किनर के क्रिया-प्रसूत सिद्धांत और रॉबर्ट मेगर के प्रभाव से शिक्षण उद्देश्यों को “छात्र परिभाषित कर सकेगा / हल कर सकेगा” जैसे प्रेक्षणीय पदों में लिखा जाने लगा।',
    'Influenced by Skinner’s behaviorism and Robert Mager, educational objectives are framed as observable, measurable student behaviors.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के बिल्ली वाले प्रयोग में बिल्ली के पहेली बॉक्स से बाहर निकलने के बाद भी बार-बार उसी प्रक्रिया को दोहराने पर “आकस्मिक सफलता” किसमें बदल गई?',
    'In Thorndike’s puzzle box, what did “accidental success” gradually transform into over repeated trials?',
    ['सुनिश्चित एवं त्रुटिहीन अर्जित कौशल में', 'Consistent, error-free learned skill'],
    [
      ['जन्मजात प्रतिवर्त में', 'An innate reflex'],
      ['पूर्ण विलोपन में', 'Complete extinction'],
      ['अव्यक्त मानचित्र में', 'A latent map'],
    ],
    'पहले प्रयास में बिल्ली का पंजा संयोगवश (Accidental) लीवर पर पड़ा, किंतु प्रभाव और अभ्यास के नियमों से वही आकस्मिक क्रिया सटीक सीखे हुए कौशल में बदल गई।',
    'What began as an accidental latch press transformed through the Laws of Effect and Exercise into a swift, reliable learned skill.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'निम्नलिखित में से किस युग्म में “सिद्धांत” और “प्रमुख शब्दावली” सही सुमेलित हैं?',
    'In which pair are the “Theory” and its “Key Term” correctly matched?',
    ['स्किनर का क्रिया-प्रसूत सिद्धांत — आकारण एवं पुनर्बलन अनुसूची', 'Skinner’s Operant Conditioning — Shaping & Reinforcement Schedule'],
    [
      ['पावलॉव का अनुबंधन — पहेली बॉक्स एवं तत्परता नियम', 'Pavlov’s Conditioning — Puzzle Box & Law of Readiness'],
      ['थॉर्नडाइक का संबंधवाद — टोकन इकॉनमी एवं शिक्षण मशीन', 'Thorndike’s Connectionism — Token Economy & Teaching Machine'],
      ['स्किनर का सिद्धांत — स्वाभाविक उद्दीपन से लार स्राव', 'Skinner’s Theory — Salivation to UCS'],
    ],
    'आकारण (Shaping) और पुनर्बलन अनुसूचियाँ स्किनर की प्रमुख शब्दावली हैं; पहेली बॉक्स व तत्परता थॉर्नडाइक के हैं तथा लार स्राव पावलॉव का प्रयोग है।',
    'Shaping and reinforcement schedules belong to Skinner; puzzle box and readiness belong to Thorndike; salivation belongs to Pavlov.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'यदि घंटी की आवाज़ के 30 मिनट बाद कुत्ते को भोजन दिया जाए, तो क्या घंटी और भोजन के बीच प्रभावी शास्त्रीय अनुबंधन स्थापित होगा?',
    'If food is given 30 minutes after the bell stops ringing, will effective classical conditioning be established?',
    ['नहीं, क्योंकि CS और UCS के बीच बहुत लंबा समय अंतराल होने से साहचर्य नहीं बन पाता', 'No, because too long a temporal gap prevents forming an association between CS and UCS'],
    [
      ['हाँ, यह दुनिया का सबसे शक्तिशाली अनुबंधन होगा', 'Yes, it will be the strongest conditioning possible'],
      ['हाँ, इसे सहकालिक अनुबंधन कहा जाएगा', 'Yes, this is called simultaneous conditioning'],
      ['कुत्ता बिना भोजन के ही हमेशा के लिए तृप्त हो जाएगा', 'The dog will remain satisfied forever without food'],
    ],
    'प्रभावी शास्त्रीय अनुबंधन के लिए CS और UCS के बीच अत्यंत कम समय अंतराल (प्रायः कुछ मिलीसेकंड से कुछ सेकंड) की समय-सामीप्य (Temporal Contiguity) अनिवार्य होती है।',
    'Effective classical conditioning requires close temporal contiguity (typically fractions of a second to a few seconds) between CS and UCS.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    '“बच्चे द्वारा गाली देने पर उसकी पसंदीदा वीडियो गेम तीन दिन के लिए बंद कर देना” — यह क्या है?',
    '“Banning a child’s favorite video game for three days because he used abusive language” — what is this?',
    ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
    [
      ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
      ['सकारात्मक पुनर्बलन (Positive Reinforcement)', 'Positive Reinforcement'],
      ['प्राथमिक पुनर्बलन (Primary Reinforcement)', 'Primary Reinforcement'],
    ],
    'यहाँ अवांछित व्यवहार (गाली देना) घटाने के लिए एक प्रिय चीज़ (वीडियो गेम) छीनी गई है, अतः यह नकारात्मक दंड है।',
    'Removing a valued privilege (video game) to reduce an undesirable behavior (abusive language) is Negative Punishment.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने सीखने में “मानसिक अनुशासन के सिद्धांत” (Doctrine of Formal Discipline) का विरोध करते हुए कौन-सा सिद्धांत प्रस्तुत किया?',
    'Refuting the “Doctrine of Formal Discipline”, which principle did Thorndike propose regarding how learning transfers?',
    ['समान तत्वों का सिद्धांत (Theory of Identical Elements)', 'Theory of Identical Elements'],
    [
      ['सामान्यीकरण का सिद्धांत (Theory of Generalization)', 'Theory of Generalization'],
      ['द्वि-कारक सिद्धांत (Two-Factor Theory)', 'Two-Factor Theory'],
      ['जीवन-स्थान सिद्धांत (Life Space Theory)', 'Life Space Theory'],
    ],
    'थॉर्नडाइक ने सिद्ध किया कि कठिन विषय पढ़ने से मस्तिष्क की हर शक्ति स्वतः तेज नहीं होती, बल्कि एक क्षेत्र का ज्ञान दूसरे में तभी काम आता है जब दोनों में समान तत्व (Identical Elements) हों।',
    'Thorndike showed that studying hard subjects does not train a general mental muscle; transfer occurs only via Identical Elements shared between tasks.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'अभिप्रेरणा और पुनर्बलन के संदर्भ में “डिप्रिवेशन” (वंचन / भूखा रखना) का स्किनर के प्रयोग में क्या कार्य था?',
    'In Skinner’s experiments, what was the function of “deprivation” (e.g., maintaining rats slightly below normal weight)?',
    ['भोजन रूपी पुनर्बलक की प्रभावशीलता (प्रेरणात्मक मूल्य) को बढ़ाना', 'To increase the motivational effectiveness of food as a reinforcer'],
    [
      ['चूहे को सुलाने की व्यवस्था करना', 'To make the rat fall asleep'],
      ['विलोपन की प्रक्रिया को रोकना', 'To prevent extinction'],
      ['चूहे में रंग-विभेदन पैदा करना', 'To induce color discrimination in the rat'],
    ],
    'यदि प्राणी का पेट पहले से पूरी तरह भरा हो (Satiation), तो भोजन पुनर्बलक का कार्य नहीं करेगा; अतः सीमित वंचन (Deprivation) पुनर्बलक को प्रभावी बनाता है।',
    'If an organism is satiated, food loses reinforcing power; controlled deprivation serves as an establishing operation enhancing reinforcer effectiveness.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    '“पुनर्बलित अनुबंधित अनुक्रिया को बनाए रखने के लिए बीच-बीच में स्वाभाविक उद्दीपन (भोजन) प्रस्तुत करना आवश्यक होता है” — इस कथन का क्या तात्पर्य है?',
    '“Periodic presentation of the UCS (food) is necessary to maintain an established conditioned response” — what does this imply?',
    ['नियमित पुनर्बलन/युग्मन के अभाव में अनुबंधित अनुक्रिया का विलोपन होने लगता है', 'Without occasional UCS pairing, the conditioned response begins to extinguish'],
    [
      ['एक बार अनुबंधन हो जाने पर वह बिना भोजन के अनंत काल तक उसी शक्ति से चलता है', 'Once conditioned, the response stays at full strength forever without food'],
      ['भोजन देने से अनुबंधित अनुक्रिया तुरंत नष्ट हो जाती है', 'Presenting food immediately destroys the conditioned response'],
      ['केवल घंटी बजाते रहने से कुत्ते का पेट भर जाता है', 'Ringing the bell alone satisfies the dog’s hunger'],
    ],
    'अच्छी आदतें या सीखे हुए साहचर्य तब तक ही जीवंत रहते हैं जब तक समय-समय पर उन्हें वास्तविक अर्थ या स्वाभाविक पुष्टि मिलती रहे।',
    'Acquired conditioned responses weaken over time if never again paired with the unconditioned stimulus.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम व परिपक्वता',
    'गेसेल के “जुड़वाँ नियंत्रण प्रयोग” (Co-twin Control Experiment — सीढ़ी चढ़ने का प्रशिक्षण) से अधिगम और परिपक्वता के बारे में क्या प्रमुख निष्कर्ष निकला?',
    'What major conclusion about learning and maturation emerged from Gesell’s co-twin control experiment (stair-climbing)?',
    ['आवश्यक परिपक्वता आ जाने के बाद दिया गया अल्प प्रशिक्षण भी अपरिपक्व अवस्था में दिए गए लंबे प्रशिक्षण से अधिक प्रभावी होता है', 'Brief training given after sufficient maturation is more effective than prolonged training given before maturation'],
    [
      ['जन्म के पहले ही दिन से कठोर प्रशिक्षण देने पर शिशु तुरंत दौड़ने लगता है', 'Intensive training from day one makes an infant run immediately'],
      ['परिपक्वता का सीखने की गति पर कोई प्रभाव नहीं पड़ता', 'Maturation has no impact on learning speed'],
      ['दोनों जुड़वाँ बच्चों में कोई समानता नहीं पाई गई', 'No similarities were found between the twins'],
    ],
    'गेसेल और थॉम्पसन के प्रयोग में जिस जुड़वाँ शिशु को 53वें सप्ताह में (परिपक्व होने पर) केवल 2 सप्ताह प्रशिक्षण मिला, उसने उस शिशु की बराबरी तुरंत कर ली जिसे 46वें सप्ताह से 6 सप्ताह प्रशिक्षण मिला था।',
    'Gesell & Thompson showed that the twin trained for 2 weeks starting at week 53 quickly matched the twin trained for 6 weeks starting earlier at week 46.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के प्रभाव के नियम के अनुसार शिक्षक को कक्षा में छात्रों के सही उत्तर पर कैसा व्यवहार करना चाहिए?',
    'According to Thorndike’s Law of Effect, how should a teacher respond to students’ correct answers in class?',
    ['तत्काल स्वीकृति, प्रशंसा और प्रोत्साहन देना चाहिए', 'Provide immediate acknowledgment, praise, and encouragement'],
    [
      ['पूरी तरह चुप रहकर अनदेखा कर देना चाहिए', 'Remain completely silent and ignore it'],
      ['सही उत्तर देने पर भी और कठिन दंड देना चाहिए', 'Punish them even for correct answers'],
      ['माह के अंत तक कोई प्रतिक्रिया नहीं देनी चाहिए', 'Wait until the end of the month to respond'],
    ],
    'सही प्रयास पर तत्काल सकारात्मक प्रतिक्रिया मिलने से छात्र को संतोष प्राप्त होता है और सीखा गया ज्ञान स्थायी होता है।',
    'Immediate praise and recognition create satisfaction, stamping in the correct learning bond.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    '“बच्चे को कड़वी दवाई पिलाने से बचने के लिए माता-पिता द्वारा उसे तुरंत फल का जूस पिला देना” किस सिद्धांत के तहत रोगी बच्चे में दवाई लेने का सहयोग बढ़ा सकता है?',
    'Offering a child sweet fruit juice immediately after taking bitter medicine increases cooperation through:',
    ['सकारात्मक पुनर्बलन (दवा पीने की अनुक्रिया के बाद सुखद पुरस्कार)', 'Positive Reinforcement (following medicine-taking with a pleasant reward)'],
    [
      ['नकारात्मक दंड', 'Negative Punishment'],
      ['विलोपन', 'Extinction'],
      ['उद्दीपन विभेदन', 'Stimulus Discrimination'],
    ],
    'दवाई पीने के ठीक बाद मीठा जूस (सुखद उद्दीपन) मिलना सकारात्मक पुनर्बलन का कार्य करता है जिससे अगली बार बच्चा दवा लेने में कम आनाकानी करता है।',
    'Providing a pleasant taste immediately after swallowing bitter medicine acts as Positive Reinforcement for taking medicine.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में “CS” का पूर्ण अंग्रेजी और हिंदी रूप क्या है?',
    'In Pavlov’s experiment, what are the full English and Hindi forms of “CS”?',
    ['Conditioned Stimulus — अनुबंधित / अनुकूलित उद्दीपन', 'Conditioned Stimulus'],
    [
      ['Conditioned Strength — अनुबंधित शक्ति', 'Conditioned Strength'],
      ['Control System — नियंत्रण तंत्र', 'Control System'],
      ['Cognitive Schema — संज्ञानात्मक स्कीमा', 'Cognitive Schema'],
    ],
    'शास्त्रीय अनुबंधन की मानक शब्दावली में UCS = Unconditioned Stimulus, UCR = Unconditioned Response, CS = Conditioned Stimulus तथा CR = Conditioned Response होता है।',
    'In standard classical conditioning notation, CS stands for Conditioned Stimulus.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'एक शिक्षक किसी अत्यंत शर्मीले बच्चे को कक्षा के सामने बोलने के लिए तैयार करना चाहता है। पहले वह उसे अपनी सीट से एक शब्द बोलने पर शाबाशी देता है, फिर एक वाक्य, फिर सामने खड़े होकर बोलने पर। यह कौन-सी विधि है?',
    'A teacher wants a very shy child to speak in front of the class: first praising a single word from his seat, then a sentence, then speaking at the front. Which method is this?',
    ['आकारण (Shaping / क्रमिक सन्निकटन)', 'Shaping (Successive Approximations)'],
    [
      ['विलोपन (Extinction)', 'Extinction'],
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
      ['अवशेष अनुबंधन (Trace Conditioning)', 'Trace Conditioning'],
    ],
    'अंतिम जटिल व्यवहार (मंच पर बोलना) तक पहुँचने के लिए प्रारंभिक छोटे-छोटे प्रयासों को क्रमिक रूप से पुरस्कृत करना आकारण (Shaping) है।',
    'Reinforcing successive approximations—from one word at the desk to speaking in front—is Shaping.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के किस नियम को “प्रयोजनवाद / परिणाम नियम” भी कहा जा सकता है क्योंकि यह क्रिया के परिणाम पर आधारित है?',
    'Which law of Thorndike focuses directly on the outcome or consequence of an action?',
    ['प्रभाव का नियम (Law of Effect)', 'Law of Effect'],
    [
      ['तत्परता का नियम (Law of Readiness)', 'Law of Readiness'],
      ['अनुपयोग का नियम (Law of Disuse)', 'Law of Disuse'],
      ['बहु-प्रतिक्रिया का नियम (Law of Multiple Response)', 'Law of Multiple Response'],
    ],
    'प्रभाव का नियम बताता है कि किसी अनुक्रिया का भविष्य उसके परिणाम (प्रभाव) पर निर्भर करता है।',
    'The Law of Effect explicitly bases the future strength of a response on its resulting outcome.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'एक कुत्ते को नीली रोशनी पर भोजन दिया जाता है और पीली रोशनी पर नहीं। कुछ दिनों बाद कुत्ता केवल नीली रोशनी पर ही लार टपकाता है। यह प्रयोग किसकी पुष्टि करता है?',
    'A dog receives food with a blue light but never with a yellow light, eventually salivating only to the blue light. This confirms:',
    ['उद्दीपन विभेदन (Stimulus Discrimination)', 'Stimulus Discrimination'],
    [
      ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
    ],
    'विभेदक पुनर्बलन (एक संकेत के साथ UCS और दूसरे के साथ UCS का न होना) द्वारा प्राणी दो उद्दीपनों में अंतर करना सीख लेता है, जिसे उद्दीपन विभेदन कहते हैं।',
    'Differential pairing (reinforcing one CS and extinguishing the other) establishes Stimulus Discrimination.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'निम्नलिखित में से किस विद्वान ने “संज्ञानात्मक मनोविज्ञान” से पहले अमेरिका में व्यवहारवाद को चरम पर पहुँचाते हुए स्किनर बॉक्स और अभिक्रमित अनुदेशन को लोकप्रिय बनाया?',
    'Which psychologist brought behaviorism to its peak in the US and popularized the operant chamber and programmed instruction?',
    ['बुरहस फ्रेडरिक स्किनर (B.F. Skinner)', 'Burrhus Frederic Skinner'],
    [
      ['एडवर्ड टोलमैन', 'Edward Tolman'],
      ['वुल्फगैंग कोहलर', 'Wolfgang Kohler'],
      ['मैक्स वर्दीमर', 'Max Wertheimer'],
    ],
    'बुरहस फ्रेडरिक स्किनर (1904–1990) 20वीं सदी के सबसे प्रभावशाली व्यवहारवादी मनोवैज्ञानिक थे जिन्होंने क्रिया-प्रसूत अनुबंधन व अभिक्रमित अनुदेशन दिया।',
    'Burrhus Frederic Skinner (1904–1990) was the leading 20th-century behaviorist behind operant conditioning and programmed instruction.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    'निम्नलिखित में से कौन-सा कथन अधिगम के संबंध में गलत है?',
    'Which of the following statements about learning is INCORRECT?',
    ['अधिगम केवल औपचारिक विद्यालयों में ही घटित होता है और घर पर नहीं होता', 'Learning occurs only in formal schools and never at home'],
    [
      ['अधिगम एक सतत व आजीवन चलने वाली प्रक्रिया है', 'Learning is a continuous, lifelong process'],
      ['अधिगम व्यवहार में अपेक्षाकृत स्थायी परिवर्तन लाता है', 'Learning brings relatively permanent behavioral change'],
      ['अधिगम समायोजन करने में सहायता करता है', 'Learning aids in adjustment'],
    ],
    'अधिगम एक सार्वभौमिक प्रक्रिया है जो घर, परिवार, खेल के मैदान, समाज और विद्यालय—हर जगह निरंतर चलती रहती है।',
    'Learning is universal and continuous, taking place at home, in play, in society, and in formal schools alike.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के सिद्धांत के अनुसार, यदि कोई छात्र गणित की किसी त्रुटि को बिना सुधारे बार-बार दोहराता है, तो क्या खतरा उत्पन्न होता है?',
    'According to Thorndike’s theory, what risk arises if a student repeatedly practices an incorrect math procedure without correction?',
    ['अभ्यास के नियम के कारण गलत अनुक्रिया का बंधन ही स्थायी और मजबूत हो जाएगा', 'Due to the Law of Exercise, the incorrect response bond itself becomes strengthened and habitual'],
    [
      ['गलत अभ्यास से अपने आप सही उत्तर प्राप्त हो जाएगा', 'Incorrect practice will automatically yield the right answer'],
      ['तत्परता का नियम तुरंत समस्या हल कर देगा', 'The Law of Readiness will instantly fix the mistake'],
      ['छात्र में बिना किसी संकेत के सूझ आ जाएगी', 'Insight will automatically occur without cues'],
    ],
    'इसी कारण थॉर्नडाइक ने 1930 के बाद कहा कि केवल अंधा अभ्यास (Blind Practice) हानिकारक हो सकता है; ज्ञान के परिणाम (Knowledge of Results / Feedback) के साथ किया गया अभ्यास ही लाभकारी होता है।',
    'As Thorndike noted post-1930, blind repetition without Knowledge of Results (feedback) only reinforces errors.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में घंटी के साथ भोजन देने के कुछ प्रयासों के बाद यदि भोजन देना बंद कर दिया जाए, तो लार की बूँदों की संख्या का क्रम कैसा होगा?',
    'In Pavlov’s experiment, if food is withheld after conditioning is established, how will the number of saliva drops change over subsequent bell-only trials?',
    ['शुरुआत में अधिक, फिर क्रमिक रूप से घटते हुए शून्य तक पहुँच जाएगी (विलोपन)', 'High initially, then gradually decreasing down to zero (extinction)'],
    [
      ['हर प्रयास के साथ अनंत तक बढ़ती जाएगी', 'Increases endlessly on every trial'],
      ['पहले शून्य होकर अचानक दोगुनी हो जाएगी', 'Drops to zero first and suddenly doubles'],
      ['हमेशा बिल्कुल स्थिर बनी रहेगी', 'Remains permanently constant'],
    ],
    'पुनर्बलन (UCS) के अभाव में अनुबंधित अनुक्रिया की तीव्रता धीरे-धीरे घटते हुए शून्य पर आ जाती है; यही विलोपन वक्र है।',
    'Without UCS reinforcement, the magnitude of the CR declines progressively until reaching zero during extinction.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'निम्नलिखित में से कौन-सी अनुसूची “मछली पकड़ने” (Fishing—जहाँ मछली फँसने का समय अनिश्चित हो, चाहे काँटा कितनी ही देर पानी में रहे) से सबसे अधिक मेल खाती है?',
    'Which reinforcement schedule best matches fishing, where the time until a fish bites is unpredictable regardless of effort?',
    ['परिवर्ती अंतराल अनुसूची (Variable Interval Schedule)', 'Variable Interval Schedule'],
    [
      ['निश्चित अनुपात अनुसूची (Fixed Ratio Schedule)', 'Fixed Ratio Schedule'],
      ['सतत पुनर्बलन (Continuous Reinforcement)', 'Continuous Reinforcement'],
      ['निश्चित अंतराल अनुसूची (Fixed Interval Schedule)', 'Fixed Interval Schedule'],
    ],
    'मछली पकड़ने में समय के अनिश्चित अंतरालों के बाद सफलता मिलती है, जो परिवर्ती अंतराल (VI) अनुसूची का उत्कृष्ट उदाहरण है।',
    'Catching a fish occurs after unpredictable lengths of time, making fishing a classic Variable Interval (VI) schedule.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'एक शिक्षक कठिन विषय पढ़ाते समय छात्रों की छोटी-छोटी सफलताओं पर तुरंत सकारात्मक टिप्पणी करता है और त्रुटि पर डाँटने के बजाय सही संकेत (Prompt) देता है। यह किसके सिद्धांत पर आधारित है?',
    'While teaching a tough topic, a teacher praises small successes immediately and provides supportive prompts on errors instead of scolding. This relies on:',
    ['बी.एफ. स्किनर का क्रिया-प्रसूत अनुबंधन एवं आकारण सिद्धांत', 'B.F. Skinner’s Operant Conditioning and Shaping'],
    [
      ['सिगमंड फ्रायड का रक्षा-तंत्र सिद्धांत', 'Sigmund Freud’s Defense Mechanisms'],
      ['चार्ल्स स्पीयरमैन का g-कारक सिद्धांत', 'Charles Spearman’s g-factor theory'],
      ['टर्मन का बुद्धि-लब्धि सूत्र', 'Terman’s IQ formula'],
    ],
    'संकेत (Prompts), छोटे चरणों की सफलता, तत्काल सकारात्मक पुनर्बलन और दंड से बचाव स्किनर के क्रिया-प्रसूत शिक्षण मॉडल के प्रमुख स्तंभ हैं।',
    'Using prompts, reinforcing small steps, giving immediate feedback, and avoiding punishment are hallmarks of Skinnerian instruction.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक के गौण नियमों में “तत्व-प्रबलता का नियम” (Law of Prepotency of Elements) शिक्षण में किस सिद्धांत को समर्थन देता है?',
    'In teaching, which pedagogical approach is supported by Thorndike’s “Law of Prepotency of Elements”?',
    ['पाठ के मुख्य बिंदुओं को रेखांकित या हाइलाइट कर असंगत विवरणों से अलग करना', 'Highlighting core concepts and separating essential elements from irrelevant details'],
    [
      ['पूरे पाठ को बिना किसी क्रम के याद करना', 'Memorizing the whole text in random order'],
      ['केवल चित्रों को हटाकर पाठ्यपुस्तक बनाना', 'Removing all diagrams from textbooks'],
      ['छात्रों को एक साथ पाँच विषय पढ़ाना', 'Teaching five subjects simultaneously'],
    ],
    'तत्व-प्रबलता का नियम कहता है कि प्राणी स्थिति के सभी पहलुओं पर नहीं, बल्कि प्रमुख और प्रासंगिक संकेतों पर अनुक्रिया करता है; अतः मुख्य बिंदुओं को स्पष्ट करना सीखने को तीव्र करता है।',
    'The Law of Prepotency of Elements states learners react selectively to prominent relevant cues, supporting highlighting and structured summaries.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    '“शास्त्रीय अनुबंधन में दो उद्दीपनों का युग्मन होता है, जबकि क्रिया-प्रसूत अनुबंधन में अनुक्रिया और उसके परिणाम का युग्मन होता है।” यह कथन किस रूप में सही है?',
    '“Classical conditioning pairs two stimuli, whereas operant conditioning pairs a response with its consequence.” How accurate is this statement?',
    ['पूर्णतः सही (CS–UCS युग्मन बनाम R–Reinforcer युग्मन)', 'Completely accurate (CS–UCS pairing vs. R–Consequence pairing)'],
    [
      ['पूर्णतः गलत, दोनों में केवल उद्दीपनों का युग्मन होता है', 'Completely false; both pair only stimuli'],
      ['आंशिक गलत, क्रिया-प्रसूत में कोई परिणाम नहीं होता', 'Partially false; operant has no consequences'],
      ['केवल पशुओं पर लागू होता है, मनुष्यों पर नहीं', 'True only for animals, not humans'],
    ],
    'यही दोनों अनुबंधनों की सबसे स्पष्ट कसौटी है: पावलॉव = उद्दीपन-उद्दीपन (S-S) साहचर्य; स्किनर = अनुक्रिया-परिणाम (R-S) आकस्मिकता।',
    'This precisely captures the core distinction: Pavlovian conditioning involves S-S pairing (CS-UCS), while operant conditioning involves R-C contingency.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी किस विचारधारा में “काली पेटी उपागम” (Black Box Approach) अपनाया?',
    'Why is Skinner’s approach sometimes described as a “Black Box Approach”?',
    ['क्योंकि उन्होंने मस्तिष्क के अंदर की अप्रत्यक्ष मानसिक प्रक्रियाओं के बजाय केवल बाहरी प्रेक्षणीय आगत (उद्दीपन/पुनर्बलन) व निर्गत (व्यवहार) के अध्ययन पर ध्यान दिया', 'Because he focused on observable inputs (stimuli/reinforcers) and outputs (behavior) rather than unobservable internal mental states'],
    [
      ['क्योंकि उनका स्किनर बॉक्स बाहर से काले रंग का होता था', 'Because the Skinner Box was painted pitch black outside'],
      ['क्योंकि वे केवल अंधेरे कमरे में प्रयोग करते थे', 'Because he experimented exclusively in dark rooms'],
      ['क्योंकि उन्होंने केवल अचेतन स्वप्नों का अध्ययन किया', 'Because he studied only unconscious dreams'],
    ],
    'स्किनर का मानना था कि वैज्ञानिक मनोविज्ञान को बाहरी प्रेक्षणीय व्यवहार और उसके पर्यावरणीय कारणों का मापन करना चाहिए, न कि काल्पनिक आंतरिक मानसिक अवस्थाओं का अनुमान लगाना।',
    'Skinner treated internal unobservable cognition as a “black box,” focusing strictly on measurable environmental variables and observable behavior.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“सीखना अनुभव के माध्यम से व्यवहार में प्रगतिशील परिवर्तन है” — इस संदर्भ में निम्नलिखित में से कौन-सा कारक अधिगम को प्रत्यक्ष रूप से प्रभावित नहीं करता?',
    '“Learning is a progressive change in behavior through experience” — which factor does NOT directly facilitate learning?',
    ['कठोर भय एवं अत्यधिक मानसिक तनाव', 'Severe fear and excessive psychological stress'],
    [
      ['सीखने की तत्परता एवं परिपक्वता', 'Readiness and maturation'],
      ['उचित अभिप्रेरणा एवं रुचि', 'Proper motivation and interest'],
      ['सकारात्मक प्रतिपुष्टि एवं अभ्यास', 'Positive feedback and practice'],
    ],
    'मध्यम जिज्ञासा सीखने में सहायक होती है, किंतु अत्यधिक भय और मानसिक तनाव मस्तिष्क के संज्ञानात्मक प्रसंस्करण को बाधित कर अधिगम को अवरुद्ध करते हैं।',
    'While readiness, motivation, and feedback promote learning, severe fear and chronic stress impair cognitive processing and hinder learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के प्रयोग में पहेली बॉक्स का दरवाज़ा कब खुलता था?',
    'In Thorndike’s experiment, when did the door of the puzzle box open?',
    ['जब बिल्ली अंदर लगे सही लीवर, कुंडी या रस्सी को दबाती या खींचती थी', 'When the cat pressed or pulled the specific latch, lever, or loop inside'],
    [
      ['जब हर 10 सेकंड में घंटी बजती थी', 'Whenever a bell rang every 10 seconds'],
      ['जब बिल्ली एक कोने में चुपचाप सो जाती थी', 'When the cat slept quietly in a corner'],
      ['जब बाहर से कोई दूसरा जानवर बॉक्स को धक्का देता था', 'When another animal pushed the box from outside'],
    ],
    'पहेली बॉक्स में एक विशिष्ट यांत्रिक युक्ति (जैसे लीवर या लूप) लगी थी जिसे दबाने पर ही दरवाज़ा खुलता था और बिल्ली मछली खा पाती थी।',
    'The puzzle box door opened only when the cat operated the specific release mechanism (lever/latch/loop) inside.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'स्किनर के 2×2 मैट्रिक्स के अनुसार “सकारात्मक” और “नकारात्मक” शब्दों का वास्तविक अर्थ क्या है?',
    'In Skinner’s 2×2 operant matrix, what do the terms “Positive” and “Negative” actually mean?',
    ['सकारात्मक = परिस्थिति में कोई उद्दीपन जोड़ना; नकारात्मक = परिस्थिति से कोई उद्दीपन हटाना', 'Positive = adding a stimulus to the situation; Negative = removing a stimulus from the situation'],
    [
      ['सकारात्मक = अच्छा कार्य; नकारात्मक = बुरा कार्य', 'Positive = good deed; Negative = bad deed'],
      ['सकारात्मक = पुरस्कार; नकारात्मक = हमेशा पिटाई', 'Positive = reward; Negative = always physical beating'],
      ['सकारात्मक = मनुष्य के लिए; नकारात्मक = पशुओं के लिए', 'Positive = for humans; Negative = for animals'],
    ],
    'स्किनर की शब्दावली में Positive (+) का अर्थ “जोड़ना/प्रस्तुत करना” और Negative (-) का अर्थ “हटाना/मुक्त करना” है; वहीं Reinforcement व्यवहार बढ़ाता है और Punishment व्यवहार घटाता है।',
    'In Skinner’s terminology, Positive (+) means adding a stimulus and Negative (−) means removing a stimulus; Reinforcement increases behavior while Punishment decreases it.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'यदि एक छोटे बच्चे को किसी तेज गरजने वाले तूफ़ान से डर लगा और बाद में वह केवल काले बादल देखकर ही रोने लगे, तो काले बादल यहाँ किस रूप में कार्य कर रहे हैं?',
    'If a young child is frightened by loud thunder and later cries merely upon seeing dark clouds, what role do the dark clouds play?',
    ['अनुबंधित उद्दीपन (Conditioned Stimulus - CS)', 'Conditioned Stimulus (CS)'],
    [
      ['स्वाभाविक उद्दीपन (Unconditioned Stimulus - UCS)', 'Unconditioned Stimulus (UCS)'],
      ['क्रिया-प्रसूत पुनर्बलक (Operant Reinforcer)', 'Operant Reinforcer'],
      ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
    ],
    'तेज गरज (UCS) से डरना (UCR) स्वाभाविक था; काले बादल गरज के पूर्व-संकेत बनकर अनुबंधित उद्दीपन (CS) बन गए।',
    'Loud thunder (UCS) naturally caused fear (UCR); preceding it, dark clouds became the Conditioned Stimulus (CS) triggering fear (CR).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    '“एक अध्यापक को चाहिए कि वह विद्यार्थियों को उनकी क्षमता और रुचि के अनुरूप कार्य दे ताकि उन्हें सफलता से संतोष मिले।” यह कथन थॉर्नडाइक के किन नियमों का समन्वय है?',
    '“A teacher should assign tasks matching students’ ability and interest so they feel satisfaction from success.” This combines which laws of Thorndike?',
    ['तत्परता का नियम एवं प्रभाव का नियम', 'Law of Readiness and Law of Effect'],
    [
      ['अनुपयोग का नियम एवं विलोपन का नियम', 'Law of Disuse and Law of Extinction'],
      ['पश्चगामी अनुबंधन एवं आंशिक क्रिया', 'Backward Conditioning and Partial Activity'],
      ['सहकालिक अनुबंधन एवं विभेदन', 'Simultaneous Conditioning and Discrimination'],
    ],
    'क्षमता व रुचि के अनुसार कार्य देना तत्परता के नियम से और सफलता से मिलने वाला संतोष प्रभाव के नियम से संबंधित है।',
    'Matching ability and interest aligns with the Law of Readiness, while gaining satisfaction from success aligns with the Law of Effect.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'प्रारंभिक कक्षाओं में “अभिक्रमित अनुदेशन” का एक प्रमुख लाभ क्या है?',
    'What is a major advantage of “Programmed Instruction” in school learning?',
    ['यह व्यक्तिगत विभिन्नताओं का सम्मान करते हुए प्रत्येक विद्यार्थी को अपनी गति (Self-Pacing) से सीखने का अवसर देता है', 'It respects individual differences by allowing each learner to progress at their own pace'],
    [
      ['यह सभी विद्यार्थियों को एक ही समय पर बोलने के लिए बाध्य करता है', 'It forces all learners to recite at the exact same speed'],
      ['इसमें मूल्यांकन की कोई व्यवस्था नहीं होती', 'It contains no evaluation mechanism'],
      ['यह केवल दृष्टिबाधित छात्रों के लिए ही बना है', 'It is meant exclusively for visually impaired learners'],
    ],
    'मंद गति से सीखने वाले और तीव्र बुद्धि वाले—दोनों छात्र बिना किसी दबाव या प्रतीक्षा के अपनी-अपनी गति से फ्रेम पूरे कर सकते हैं।',
    'Both slower and faster learners can proceed through frames comfortably at their own pace without pressure or boredom.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'पावलॉव के प्रयोग में “पुनः अर्जन” (Reacquisition) की विशेषता क्या होती है?',
    'What characterizes “Reacquisition” after extinction in Pavlovian conditioning?',
    ['विलोपन के बाद जब CS और UCS को पुनः जोड़ा जाता है, तो पहली बार की तुलना में अनुक्रिया बहुत तेजी से वापस आ जाती है', 'When CS and UCS are paired again after extinction, the CR is relearned much faster than during original acquisition'],
    [
      ['विलोपन के बाद अनुबंधन दोबारा कभी बन ही नहीं सकता', 'Conditioning can never be re-established after extinction'],
      ['दोबारा सीखने में पहली बार से दस गुना अधिक समय लगता है', 'Relearning takes ten times longer than original learning'],
      ['कुत्ता भोजन खाने से मना कर देता है', 'The dog refuses to eat food'],
    ],
    'पुनः अर्जन की तीव्र गति (Savings) यह सिद्ध करती है कि विलोपन ने मूल स्मृति को पूरी तरह नष्ट नहीं किया था।',
    'Rapid reacquisition demonstrates savings, proving that extinction suppressed rather than erased the original conditioned association.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक द्वारा प्रतिपादित “सीखने के नियम” किस सिद्धांत के प्रमुख स्तंभ हैं?',
    'The “Laws of Learning” formulated by Thorndike are the core pillars of which theory?',
    ['संबंधवाद / प्रयास एवं त्रुटि सिद्धांत', 'Connectionism / Trial and Error Theory'],
    [
      ['अंतर्दृष्टि सिद्धांत', 'Insight Theory'],
      ['क्षेत्र सिद्धांत', 'Field Theory'],
      ['सामाजिक अधिगम सिद्धांत', 'Social Learning Theory'],
    ],
    'थॉर्नडाइक के 3 मुख्य नियम और 5 गौण नियम उनके संबंधवाद (Connectionism) सिद्धांत के केंद्र में हैं।',
    'Thorndike’s 3 primary and 5 secondary laws form the core framework of his Connectionism theory.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'यदि एक कॉल सेंटर कर्मचारी को प्रत्येक 15 सफल बिक्री कॉल पूरी करने के बाद बोनस मिलता है, तो यह अनुसूची कौन-सी है?',
    'If a sales representative receives a bonus after completing every 15 successful calls, which reinforcement schedule is this?',
    ['निश्चित अनुपात अनुसूची (Fixed Ratio - FR 15)', 'Fixed Ratio (FR-15) Schedule'],
    [
      ['निश्चित अंतराल अनुसूची (Fixed Interval)', 'Fixed Interval Schedule'],
      ['परिवर्ती अंतराल अनुसूची (Variable Interval)', 'Variable Interval Schedule'],
      ['सतत पुनर्बलन (Continuous Reinforcement)', 'Continuous Reinforcement'],
    ],
    'यहाँ समय नहीं बल्कि अनुक्रियाओं की निश्चित संख्या (15 बिक्री) निर्धारित है, अतः यह निश्चित अनुपात (FR-15) अनुसूची है।',
    'Because reward depends on a fixed count of 15 responses rather than time, it is a Fixed Ratio (FR-15) schedule.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'निम्नलिखित में से किस मनोवैज्ञानिक ने अधिगम में “प्रबलन (Reinforcement)” के साथ-साथ “अंतर्नोद न्यूनीकरण” (Drive Reduction) को भी केंद्रीय माना?',
    'Which behaviorist theorist proposed “Drive Reduction” as the central mechanism of reinforcement in learning?',
    ['क्लार्क एल. हल (Clark L. Hull)', 'Clark L. Hull'],
    [
      ['इवान पावलॉव', 'Ivan Pavlov'],
      ['वुल्फगैंग कोहलर', 'Wolfgang Kohler'],
      ['मैक्स वर्दीमर', 'Max Wertheimer'],
    ],
    'क्लार्क एल. हल (Principles of Behavior, 1943) ने गणितीय निगमनात्मक सिद्धांत देते हुए कहा कि जैविक अंतर्नोद (जैसे भूख, प्यास) में कमी आना ही अधिगम को प्रबलित करता है।',
    'Clark L. Hull (1943) proposed Drive-Reduction Theory, arguing that reducing biological drives (like hunger or thirst) reinforces S-R habits.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'कक्षा में अनुशासनहीनता कम करने के लिए स्किनर के सिद्धांत के अनुरूप कौन-सी रणनीति सबसे अधिक कारगर होगी?',
    'Which classroom strategy aligns best with Skinner’s principles to reduce indiscipline?',
    ['नियमों का स्पष्ट निर्धारण करना और नियमों का पालन करने वाले छात्रों को तुरंत सकारात्मक पुनर्बलन देना', 'Setting clear rules and immediately positively reinforcing rule-following behaviors'],
    [
      ['बिना चेतावनी के पूरे वर्ग को शारीरिक दंड देना', 'Administering corporal punishment to the whole class without warning'],
      ['गलत व्यवहार करने वाले छात्र को सबसे आगे बैठाकर केवल उपदेश देना', 'Lecturing the misbehaving student endlessly'],
      ['कक्षा में कोई नियम ही न बनाना', 'Having no classroom rules at all'],
    ],
    'स्किनर के अनुसार अवांछित व्यवहार पर ध्यान केंद्रित करने के बजाय वांछित वैकल्पिक व्यवहार को पुनर्बलित करना (Differential Reinforcement of Other/Incompatible Behavior) दीर्घकालिक सुधार लाता है।',
    'Reinforcing positive alternative behaviors clearly and immediately works far better than punitive reprimands in Skinnerian management.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    '“मनुष्य जितना अभ्यास करता है उतना ही सीखता है, परंतु केवल जब वह अभ्यास परिणाम के ज्ञान से जुड़ा हो” — यह विचार थॉर्नडाइक के किन दो नियमों का संगम है?',
    '“People learn through practice, provided practice is paired with knowledge of results” — this unites which two laws of Thorndike?',
    ['अभ्यास का नियम एवं प्रभाव का नियम', 'Law of Exercise and Law of Effect'],
    [
      ['अनुपयोग का नियम एवं विलोपन का नियम', 'Law of Disuse and Law of Extinction'],
      ['तत्परता का नियम एवं सामान्यीकरण', 'Law of Readiness and Generalization'],
      ['आंशिक क्रिया एवं पश्चगामी अनुबंधन', 'Partial Activity and Backward Conditioning'],
    ],
    'अभ्यास के नियम (पुनरावृत्ति) को जब प्रभाव के नियम (परिणाम की जानकारी व संतोष) का साथ मिलता है, तभी कौशल में वास्तविक सुधार होता है।',
    'Combining repetition (Law of Exercise) with feedback on outcomes (Law of Effect) yields true skill mastery.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'शास्त्रीय अनुबंधन में “द्वितीय-स्तरीय अनुबंधन” (Second-Order Conditioning) अपेक्षाकृत कमजोर क्यों होता है?',
    'Why is “Second-Order Conditioning” relatively weaker and more prone to extinction than First-Order Conditioning?',
    ['क्योंकि नए उद्दीपन को सीधे स्वाभाविक उद्दीपन (भोजन) से नहीं, बल्कि एक पूर्व-अनुबंधित उद्दीपन से जोड़ा जाता है', 'Because the new CS is paired only with a previously conditioned stimulus rather than directly with the UCS'],
    [
      ['क्योंकि इसमें प्राणी को भोजन बहुत अधिक दिया जाता है', 'Because the organism is fed too much'],
      ['क्योंकि इसमें कुत्ते की जगह बिल्ली का प्रयोग होता है', 'Because a cat is used instead of a dog'],
      ['क्योंकि यह केवल जन्म के पहले ही घटित होता है', 'Because it occurs only before birth'],
    ],
    'चूँकि दूसरे चरण में वास्तविक UCS (भोजन) अनुपस्थित रहता है, अतः यदि पहले CS का पुनः युग्मन न हो तो नया अनुबंधित उद्दीपन शीघ्र विलोपित हो सकता है।',
    'Because the primary UCS is absent during second-order pairing, the secondary CS has weaker associative strength and extinguishes more easily.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन एवं दंड',
    'निम्नलिखित में से किस कार्य से “नकारात्मक पुनर्बलन” (Negative Reinforcement) का सही प्रदर्शन होता है?',
    'Which action accurately demonstrates “Negative Reinforcement”?',
    ['तेज धूप से आँखों की चुभन से बचने के लिए धूप का चश्मा पहन लेना', 'Putting on sunglasses to stop the glare of bright sunlight hurting the eyes'],
    [
      ['चोरी करने पर जेल में बंद कर दिया जाना', 'Being imprisoned for stealing'],
      ['परीक्षा में प्रथम आने पर स्वर्ण पदक प्राप्त करना', 'Receiving a gold medal for topping an exam'],
      ['कक्षा में बात करने पर अतिरिक्त गृहकार्य मिलना', 'Receiving extra homework for talking in class'],
    ],
    'आँखों की चुभन (अप्रिय उद्दीपन) से बचने के लिए चश्मा पहनना और आराम पाना नकारात्मक पुनर्बलन है, जिससे धूप में चश्मा पहनने की आदत पक्की होती है।',
    'Wearing sunglasses removes the aversive glare, reinforcing future sunglass use via Negative Reinforcement.',
    'EASY'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    'निम्नलिखित में से कौन-सा कारक “अधिगम की व्यक्तिगत बाधा” (Personal Barrier to Learning) के अंतर्गत आएगा?',
    'Which of the following falls under a “Personal Barrier to Learning”?',
    ['शारीरिक अस्वस्थता, थकान एवं आत्मविश्वास की कमी', 'Physical illness, fatigue, and lack of self-confidence'],
    [
      ['विद्यालय में स्वच्छ पेयजल की उपलब्धता', 'Availability of clean drinking water at school'],
      ['कक्षा में पर्याप्त प्रकाश व्यवस्था', 'Adequate lighting in the classroom'],
      ['शिक्षक का सहानुभूतिपूर्ण व्यवहार', 'Teacher’s empathetic behavior'],
    ],
    'शारीरिक बीमारी, थकान, कम प्रेरणा, भय और हीन-भावना विद्यार्थी से जुड़े व्यक्तिगत बाधक कारक हैं।',
    'Illness, fatigue, low self-confidence, and anxiety are internal personal barriers that impede learning.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपनी किस पुस्तक में बुद्धि, व्यक्तिगत विभिन्नताओं और शैक्षिक मनोविज्ञान के मापन संबंधी सिद्धांत प्रस्तुत किए तथा कहा कि “जो कुछ भी अस्तित्व में है, वह किसी न किसी मात्रा में अस्तित्व में है”?',
    'Which psychologist famously stated, “Whatever exists at all exists in some amount,” laying the groundwork for educational measurement alongside his learning laws?',
    ['ई.एल. थॉर्नडाइक (1918)', 'E.L. Thorndike (1918)'],
    [
      ['इवान पावलॉव', 'Ivan Pavlov'],
      ['जीन पियाजे', 'Jean Piaget'],
      ['कार्ल जुंग', 'Carl Jung'],
    ],
    'ई.एल. थॉर्नडाइक ने 1918 में यह प्रसिद्ध कथन दिया कि “जो कुछ भी अस्तित्व में है, वह किसी न किसी मात्रा में है, और उसे मापा जा सकता है” (जिसे बाद में मैकॉल ने आगे बढ़ाया)।',
    'E.L. Thorndike (1918) famously asserted, “Whatever exists at all exists in some amount,” pioneering quantitative educational measurement.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“व्यवहार को वांछित दिशा में मोड़ने के लिए दंड के बजाय पुरस्कार की योजना बनाना” किस मनोवैज्ञानिक के शैक्षिक दर्शन का केंद्र है?',
    '“Designing reward systems rather than punishment to guide behavior” lies at the heart of whose educational philosophy?',
    ['बी.एफ. स्किनर', 'B.F. Skinner'],
    [
      ['अनातोली लूनाचार्स्की', 'Anatoly Lunacharsky'],
      ['थॉमस हॉब्स', 'Thomas Hobbes'],
      ['विलियम मैकडूगल', 'William McDougall'],
    ],
    'स्किनर ने आजीवन सकारात्मक पुनर्बलन और दंड-मुक्त, व्यवस्थित शिक्षण वातावरण का समर्थन किया।',
    'Skinner consistently advocated positive reinforcement and non-punitive, structured instructional environments.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'यदि किसी छात्र को विद्यालय के प्रधानाचार्य के कक्ष में हमेशा पुरस्कार और प्रोत्साहन मिलता हो, तो प्रधानाचार्य का कक्ष देखकर उसमें प्रसन्नता का भाव जागना किस प्रक्रिया का उदाहरण है?',
    'If a student always receives encouragement and rewards in the principal’s office, feeling happy just seeing the office illustrates:',
    ['सकारात्मक संवेगात्मक अनुबंधन (Positive Emotional Conditioning)', 'Positive Classical Emotional Conditioning'],
    [
      ['प्रायोगिक तंत्रिकाताप (Experimental Neurosis)', 'Experimental Neurosis'],
      ['पश्चगामी विलोपन (Backward Extinction)', 'Backward Extinction'],
      ['अन्वेषण अधिगम (Discovery Learning)', 'Discovery Learning'],
    ],
    'सकारात्मक संवेगात्मक अनुभवों के साथ जुड़कर स्थान या व्यक्ति भी सुखद अनुबंधित उद्दीपन बन जाता है।',
    'Pairing a place with warmth and encouragement makes that place a conditioned stimulus evoking positive feelings.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के गौण नियम',
    'थॉर्नडाइक के गौण नियमों में “आत्मीकरण का नियम” (Law of Assimilation) किस दूसरे नाम से जाना जाता है?',
    'By what other name is Thorndike’s “Law of Assimilation” known among his secondary laws?',
    ['सादृश्यता द्वारा अनुक्रिया का नियम (Law of Response by Analogy)', 'Law of Response by Analogy'],
    [
      ['बहु-प्रतिक्रिया का नियम', 'Law of Multiple Response'],
      ['तत्परता का नियम', 'Law of Readiness'],
      ['अनुपयोग का नियम', 'Law of Disuse'],
    ],
    'थॉर्नडाइक के साहित्य में सादृश्यता के नियम को ही आत्मीकरण (Assimilation) का नियम भी कहा गया है, जिसमें व्यक्ति नई परिस्थिति को पुराने अनुभवों के समान समझकर व्यवहार करता है।',
    'Thorndike’s Law of Response by Analogy is also termed the Law of Assimilation.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'जब किसी छात्र को हर बार सही काम करने पर नहीं, बल्कि औसतन हर 4 सही उत्तरों (कभी 2, कभी 5, कभी 3, कभी 6) के बाद अंक या टोकन मिले, तो यह कौन-सी अनुसूची होगी?',
    'When a student earns a token after an average of every 4 correct answers (sometimes after 2, 5, 3, or 6), which schedule is this?',
    ['परिवर्ती अनुपात अनुसूची (VR-4)', 'Variable Ratio (VR-4) Schedule'],
    [
      ['निश्चित अनुपात अनुसूची (FR-4)', 'Fixed Ratio (FR-4) Schedule'],
      ['निश्चित अंतराल अनुसूची (FI-4)', 'Fixed Interval (FI-4) Schedule'],
      ['सतत पुनर्बलन (CRF)', 'Continuous Reinforcement'],
    ],
    'अनुक्रियाओं की संख्या निश्चित न होकर एक औसत (यहाँ 4) के इर्द-गिर्द बदलती रहे, तो वह परिवर्ती अनुपात (VR) अनुसूची कहलाती है।',
    'When reinforcement follows an unpredictable number of responses averaging around 4, it is a Variable Ratio (VR-4) schedule.',
    'MEDIUM'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    '“अधिगम आदत निर्माण की प्रक्रिया है” — व्यवहारवादियों के इस कथन के संदर्भ में आदत (Habit) की सबसे बड़ी विशेषता क्या होती है?',
    'Regarding the behaviorist view that “learning is habit formation”, what is the key characteristic of a habit?',
    ['यह अभ्यास से अर्जित होती है और बाद में न्यूनतम सचेत प्रयास से स्वचालित रूप से संचालित होती है', 'It is acquired through practice and eventually operates automatically with minimal conscious effort'],
    [
      ['यह केवल जन्म के समय से ही बिना अभ्यास के उपस्थित रहती है', 'It is present from birth without any practice'],
      ['आदत में कोई भी परिवर्तन कभी संभव नहीं होता', 'A habit can never be modified'],
      ['आदत हमेशा अवांछनीय ही होती है', 'A habit is always undesirable'],
    ],
    'निरंतर अभ्यास व पुनर्बलन से जब कोई कार्य स्वचालित व सहज रूप ले लेता है (जैसे दाँत साफ करना या सही अक्षर बनाना), तो वह आदत बन जाता है।',
    'Once acquired through practice and reinforcement, habits run smoothly and automatically with minimal conscious effort.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'एक शिक्षक कक्षा में शांत वातावरण बनाने के लिए हर बार एक खास ताली बजाता है और फिर कहानी सुनाता है। कुछ सप्ताह बाद वह विशेष ताली सुनते ही बच्चे शांत होकर ध्यान देने लगते हैं। यह क्या है?',
    'A teacher claps a distinct rhythm before starting an engaging story. After a few weeks, the children immediately quiet down and pay attention upon hearing that clap. This is:',
    ['शास्त्रीय अनुबंधन (संकेत-साहचर्य द्वारा ध्यान आकर्षण)', 'Classical Conditioning (attention cued by paired signal)'],
    [
      ['थॉर्नडाइक का पहेली बॉक्स अधिगम', 'Thorndike’s Puzzle Box learning'],
      ['टोलमैन का संज्ञानात्मक मानचित्र', 'Tolman’s Cognitive Map'],
      ['कोहलर की अचानक सूझ', 'Kohler’s Sudden Insight'],
    ],
    'ताली की विशिष्ट लय (CS) रोचक कहानी (UCS) से जुड़कर बच्चों में स्वतः शांत होने और ध्यान केंद्रित करने की अनुबंधित अनुक्रिया उत्पन्न करती है।',
    'Paired repeatedly with an engaging story, the distinct clap becomes a CS eliciting calm attention.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी किस विचारधारा के तहत कहा कि “शिक्षा वह है जो कुछ सीखा गया है उसे भूल जाने के बाद भी शेष बचती है”?',
    'Who famously wrote, “Education is what survives when what has been learned has been forgotten”?',
    ['बी.एफ. स्किनर (1964)', 'B.F. Skinner (1964)'],
    [
      ['रवींद्रनाथ टैगोर', 'Rabindranath Tagore'],
      ['जॉन लॉक', 'John Locke'],
      ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
    ],
    'बी.एफ. स्किनर ने 1964 में “New Scientist” में प्रकाशित अपने लेख “Education in 1984” में यह प्रसिद्ध कथन लिखा था।',
    'B.F. Skinner wrote this famous aphorism in his 1964 essay “Education in 1984” in New Scientist.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के प्रयोग में “त्रुटियों की संख्या में क्रमिक गिरावट” क्या सिद्ध करती है?',
    'What does the “gradual decline in errors” across trials in Thorndike’s experiment prove?',
    ['सीखना आकस्मिक चमक के बजाय क्रमिक चयन व संचयन से होता है', 'Learning proceeds through gradual selection and reinforcement rather than a sudden flash'],
    [
      ['बिल्ली पहले से ही बॉक्स खोलना जानती थी', 'The cat already knew how to open the box'],
      ['अभ्यास का सीखने पर शून्य प्रभाव पड़ता है', 'Practice has zero effect on learning'],
      ['बिल्ली केवल दूसरी बिल्ली की नकल कर रही थी', 'The cat was merely imitating another cat'],
    ],
    'त्रुटियों का धीरे-धीरे घटना (न कि एक झटके में शून्य होना) थॉर्नडाइक के क्रमिक संबंधवाद को गेस्टाल्ट के अचानक सूझ सिद्धांत से अलग करता है।',
    'A smooth, gradual drop in errors rather than an abrupt single-trial drop distinguishes Thorndike’s incremental learning from Gestalt insight.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'पावलॉव के प्रयोग में यदि घंटी की ध्वनि 100 डेसिबल के बजाय बहुत ही धीमी (मुश्किल से सुनाई देने वाली) कर दी जाए, तो अनुबंधन की गति पर क्या प्रभाव पड़ेगा?',
    'In Pavlov’s experiment, if the bell sound is made extremely faint instead of clearly audible, how will it affect conditioning?',
    ['अनुबंधन धीमा व दुर्बल होगा क्योंकि CS की तीव्रता (Salience) कम है', 'Conditioning will be slower and weaker because the CS salience is low'],
    [
      ['अनुबंधन तुरंत पूरा हो जाएगा', 'Conditioning will complete instantly'],
      ['कुत्ता बिना घंटी सुने ही लार टपकाएगा', 'The dog will salivate without hearing the bell'],
      ['आंतरिक अवरोध हमेशा के लिए समाप्त हो जाएगा', 'Internal inhibition will permanently disappear'],
    ],
    'स्पष्ट और संवेदी रूप से सुस्पष्ट (Salient) अनुबंधित उद्दीपन प्राणी का ध्यान शीघ्र आकर्षित करता है जिससे मजबूत अनुबंधन बनता है।',
    'A clear, salient CS draws attention readily and conditions faster than a barely perceptible CS.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन के प्रकार',
    'निम्नलिखित में से कौन-सा विकल्प “द्वितीयक पुनर्बलक” (Secondary Reinforcer) का समूह है?',
    'Which set consists exclusively of “Secondary (Conditioned) Reinforcers”?',
    ['प्रशंसा, ग्रेड, स्वर्ण पदक एवं धनराशि', 'Praise, grades, gold medals, and money'],
    [
      ['भोजन, जल, नींद एवं ऑक्सीजन', 'Food, water, sleep, and oxygen'],
      ['प्यास बुझाना, भूख शांत करना एवं ठंड से बचाव', 'Quenching thirst, satisfying hunger, and warmth'],
      ['माँस का चूर्ण एवं ग्लूकोज़ का घोल', 'Meat powder and glucose solution'],
    ],
    'द्वितीयक पुनर्बलक वे हैं जिनका मूल्य हम अनुभव और समाज में प्राथमिक पुनर्बलकों से जुड़ने के कारण सीखते हैं—जैसे धन, अंक, मेडल और प्रशंसा।',
    'Secondary reinforcers acquire value through association with primary reinforcers and social learning—such as money, grades, medals, and praise.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    'निम्नलिखित में से किस मनोवैज्ञानिक ने “नैमित्तिक अनुबंधन” (Instrumental Conditioning) शब्द का सर्वप्रथम व्यापक प्रयोग किया जो स्किनर के क्रिया-प्रसूत अनुबंधन के समानार्थी के रूप में प्रयुक्त होता है?',
    'Which psychologist’s work (building on Thorndike) is most associated with the term “Instrumental Conditioning”, often paired with Skinner’s operant conditioning?',
    ['ई.एल. थॉर्नडाइक (हिलगार्ड एवं मार्क्विस द्वारा नामित)', 'E.L. Thorndike (systematized under this label by Hilgard & Marquis)'],
    [
      ['अल्बर्ट बंडूरा', 'Albert Bandura'],
      ['कर्ट लेविन', 'Kurt Lewin'],
      ['रॉबर्ट गने', 'Robert Gagne'],
    ],
    'थॉर्नडाइक के प्रयोगों में प्राणी की क्रिया लक्ष्य तक पहुँचने का माध्यम (Instrument) होती थी; हिलगार्ड व मार्क्विस ने इसे Instrumental Conditioning कहा, जिसे स्किनर ने Operant Conditioning नाम से विस्तृत किया।',
    'Because the learner’s action is instrumental in achieving an outcome, Thorndike’s paradigm was termed Instrumental Conditioning by Hilgard & Marquis, closely related to Skinner’s Operant Conditioning.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    '“अधिगम सदैव सकारात्मक ही नहीं होता; कभी-कभी बालक बुरी आदतें और पूर्वाग्रह भी सीख लेता है।” यह कथन किस बात की ओर संकेत करता है?',
    '“Learning is not always positive; children can also acquire bad habits and prejudices.” What does this indicate?',
    ['अधिगम मूल्य-तटस्थ (Value-neutral) प्रक्रिया है, जो अच्छे और बुरे दोनों प्रकार के व्यवहार निर्माण में सक्रिय रहती है', 'Learning is value-neutral and operates in acquiring both desirable and undesirable behaviors'],
    [
      ['बुरी आदतें केवल आनुवंशिक होती हैं, सीखी नहीं जातीं', 'Bad habits are purely genetic and never learned'],
      ['अधिगम केवल नैतिक शिक्षा की पुस्तकों से होता है', 'Learning occurs only from moral education textbooks'],
      ['विद्यालय में केवल नकारात्मक बातें ही सिखाई जाती हैं', 'Schools teach only negative things'],
    ],
    'मनोवैज्ञानिक दृष्टि से सीखना केवल वांछित गुणों तक सीमित नहीं; वातावरण व संगति से अवांछित आदतें, भय और रूढ़ियाँ भी उसी नियम से सीखी जाती हैं।',
    'Psychologically, learning principles govern the acquisition of both desirable skills and undesirable habits, fears, or prejudices.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    'एक शिक्षक कक्षा में अभ्यास कार्य (Practice Sheets) देते समय प्रश्नों को सरल से जटिल क्रम में सजाता है ताकि प्रारंभिक सफलता से छात्रों को संतोष मिले। यहाँ किन सिद्धांतों का पालन हो रहा है?',
    'A teacher sequences practice worksheets from simple to complex so early success builds student satisfaction. Which principles are applied?',
    ['थॉर्नडाइक के तत्परता, अभ्यास एवं प्रभाव के नियम', 'Thorndike’s Laws of Readiness, Exercise, and Effect'],
    [
      ['पावलॉव का पश्चगामी अनुबंधन', 'Pavlov’s Backward Conditioning'],
      ['कैटेल का ठोस बुद्धि सिद्धांत', 'Cattell’s Crystallized Intelligence'],
      ['टोलमैन का अव्यक्त मानचित्र', 'Tolman’s Latent Map'],
    ],
    'सरल से कठिन क्रम मानसिक तैयारी (तत्परता) बनाता है, वर्कशीट अभ्यास कराती है और प्रारंभिक सफलता से मिलने वाला संतोष प्रभाव के नियम को संतुष्ट करता है।',
    'Simple-to-complex sequencing respects readiness, worksheets provide exercise, and early success satisfies the Law of Effect.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    '“प्रत्येक सही उत्तर के तुरंत बाद बच्चे को अगले स्तर पर जाने का अवसर देना” किस प्रकार के पुनर्बलन का उदाहरण है?',
    '“Immediately unlocking the next level in an educational game after each correct answer” exemplifies:',
    ['सतत सकारात्मक पुनर्बलन (Continuous Positive Reinforcement)', 'Continuous Positive Reinforcement'],
    [
      ['निश्चित अंतराल दंड (Fixed Interval Punishment)', 'Fixed Interval Punishment'],
      ['शास्त्रीय विलोपन (Classical Extinction)', 'Classical Extinction'],
      ['बाह्य अवरोध (External Inhibition)', 'External Inhibition'],
    ],
    'हर सही उत्तर पर तुरंत अगला स्तर खुलना (सफलता/प्रगति मिलना) सतत सकारात्मक पुनर्बलन है, जो शैक्षिक गेम्स को अत्यधिक आकर्षक बनाता है।',
    'Unlocking the next level right after every correct response is Continuous Positive Reinforcement, explaining why educational games engage learners.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'मनोवैज्ञानिकों ने पाया कि कीमोथेरेपी लेने वाले कई रोगियों को अस्पताल का कमरा देखते ही मितली (Nausea) आने लगती है। इसमें “अस्पताल का कमरा” क्या है?',
    'Many chemotherapy patients feel nausea merely upon entering the hospital treatment room. Here, what is the “hospital treatment room”?',
    ['अनुबंधित उद्दीपन (Conditioned Stimulus - CS)', 'Conditioned Stimulus (CS)'],
    [
      ['स्वाभाविक उद्दीपन (Unconditioned Stimulus - UCS)', 'Unconditioned Stimulus (UCS)'],
      ['प्राथमिक पुनर्बलक (Primary Reinforcer)', 'Primary Reinforcer'],
      ['विभेदक दंड (Discriminative Punishment)', 'Discriminative Punishment'],
    ],
    'कीमोथेरेपी की दवा (UCS) से मितली (UCR) आती है; बार-बार उपचार कक्ष में जाने से कक्ष स्वयं अनुबंधित उद्दीपन (CS) बन जाता है जो पूर्वानुमानित मितली (CR) जगाता है।',
    'Chemotherapy drugs (UCS) cause nausea (UCR); paired with treatment, the room becomes a Conditioned Stimulus (CS) triggering anticipatory nausea (CR).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक ने अपने प्रयोगों से यह निष्कर्ष निकाला कि बुद्धिमान प्राणी और कम बुद्धि वाले प्राणी के सीखने में अंतर किस कारण होता है?',
    'From his experiments, Thorndike concluded that differences in learning capacity among organisms arise from:',
    ['विविध S-R बंधन बनाने की संख्या और गति की क्षमता में अंतर', 'Differences in the number and speed of S-R connections an organism can form'],
    [
      ['केवल कानों के आकार में अंतर', 'Differences solely in ear size'],
      ['केवल भूख लगने के समय में अंतर', 'Differences solely in hunger intervals'],
      ['केवल जन्म के महीने में अंतर', 'Differences solely in birth month'],
    ],
    'थॉर्नडाइक का मानना था कि उच्च बुद्धि वाले प्राणियों में मस्तिष्क की अधिक जटिल व असंख्य S-R संबंध बनाने की क्षमता होती है (क्वांटिटेटिव व्यू ऑफ इंटेलिजेंस)।',
    'Thorndike proposed a quantitative view where higher intelligence reflects greater capacity to form numerous and complex S-R connections.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'शैक्षिक अनुप्रयोग',
    'कक्षा में किसी विद्यार्थी की खराब आदत (जैसे पेंसिल चबाना) को बदलने के लिए उससे विपरीत कोई संगत अच्छी आदत (जैसे दोनों हाथ मेज पर रखकर लिखने के दौरान स्टार पाना) सिखाना क्या कहलाता है?',
    'Replacing a student’s bad habit (pencil chewing) by reinforcing a mutually incompatible good behavior (keeping hands on desk/writing) is called:',
    ['असंगत व्यवहार का विभेदक पुनर्बलन (DRI - Differential Reinforcement of Incompatible Behavior)', 'Differential Reinforcement of Incompatible Behavior (DRI)'],
    [
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
      ['प्रायोगिक तंत्रिकाताप (Experimental Neurosis)', 'Experimental Neurosis'],
      ['अव्यक्त अधिगम (Latent Learning)', 'Latent Learning'],
    ],
    'DRI में अवांछित आदत से शारीरिक रूप से असंभव/विपरीत वांछित व्यवहार को पुरस्कृत किया जाता है ताकि दोनों एक साथ न चल सकें और अच्छी आदत पुरानी आदत की जगह ले ले।',
    'DRI reinforces a desirable behavior that is physically incompatible with the problem habit, smoothly replacing it without punishment.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम के नियम',
    'निम्नलिखित में से किस शिक्षाशास्त्री ने “करके सीखना” (Learning by Doing) को अधिगम का सर्वाधिक प्रभावी सिद्धांत बताया है?',
    'Which educational philosopher championed “Learning by Doing” as the most effective principle of learning?',
    ['जॉन डीवी (John Dewey)', 'John Dewey'],
    [
      ['इवान पावलॉव (Ivan Pavlov)', 'Ivan Pavlov'],
      ['अल्फ्रेड बिने (Alfred Binet)', 'Alfred Binet'],
      ['चार्ल्स स्पीयरमैन (Charles Spearman)', 'Charles Spearman'],
    ],
    'प्रयोजनवादी शिक्षाशास्त्री जॉन डीवी ने “करके सीखना” और अनुभव-आधारित सक्रिय शिक्षा पर सर्वाधिक बल दिया, जिसे थॉर्नडाइक व आधुनिक रचनावाद भी स्वीकार करते हैं।',
    'Pragmatist philosopher John Dewey championed “Learning by Doing” and active experiential education.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'जब किसी छात्र को एक विषय में लगातार असफलता मिलती है तो वह धीरे-धीरे उस विषय के प्रति “सीखी हुई निस्सहायता” (Learned Helplessness) का शिकार हो सकता है। इस अवधारणा के प्रमुख प्रवर्तक कौन हैं?',
    'Repeated uncontrollable failure can lead a student to “Learned Helplessness”. Who pioneered this concept?',
    ['मार्टिन सेलिगमैन (Martin Seligman)', 'Martin Seligman'],
    [
      ['वुल्फगैंग कोहलर (Wolfgang Kohler)', 'Wolfgang Kohler'],
      ['रॉबर्ट स्टर्नबर्ग (Robert Sternberg)', 'Robert Sternberg'],
      ['लुई थर्स्टन (Louis Thurstone)', 'Louis Thurstone'],
    ],
    'मार्टिन सेलिगमैन ने कुत्तों पर अपरिहार्य आघात के प्रयोगों से “सीखी हुई निस्सहायता” (Learned Helplessness) की खोज की, जो बताती है कि नियंत्रणहीन असफलता अभिप्रेरणा को तोड़ देती है।',
    'Martin Seligman discovered Learned Helplessness, showing that repeated uncontrollable failure destroys motivation to try even when escape becomes possible.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    '“थॉर्नडाइक का संबंधवाद” सीखने की प्रक्रिया में निम्नलिखित में से किसे सबसे कम महत्व देता है?',
    'Which factor receives the LEAST emphasis in Thorndike’s Connectionism?',
    ['अचेतन स्वप्न व्याख्या एवं जन्मजात प्रतीकात्मकता', 'Unconscious dream interpretation and innate symbolism'],
    [
      ['उद्दीपन-अनुक्रिया युग्मन', 'Stimulus-response pairing'],
      ['तत्परता एवं अभिप्रेरणा', 'Readiness and motivation'],
      ['परिणाम की सुखद या दुःखद प्रकृति', 'Satisfying or annoying consequences'],
    ],
    'थॉर्नडाइक का सिद्धांत व्यवहारवादी और आनुभविक है; अचेतन स्वप्नों का विश्लेषण फ्रायड के मनोविश्लेषणवाद से जुड़ा है।',
    'Thorndike’s empirical S-R framework relies on readiness, practice, and effect—not unconscious dream symbolism (which belongs to Freud).',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर ने अपनी पुस्तक “The Technology of Teaching” (1968) में मुख्य रूप से किस विषय की वकालत की थी?',
    'What did Skinner primarily advocate in his book “The Technology of Teaching” (1968)?',
    ['अधिगम विज्ञान पर आधारित व्यवस्थित शिक्षण विधियाँ, स्पष्ट पुनर्बलन व शिक्षण मशीनों का उपयोग', 'Systematic teaching methods grounded in the science of learning, clear reinforcement, and teaching machines'],
    [
      ['विद्यालयों को पूरी तरह बंद कर केवल घर पर रहने की सलाह', 'Closing all schools completely'],
      ['केवल कठोर दंड प्रणाली को कानूनी बनाना', 'Legalizing harsh corporal punishment'],
      ['शिक्षक की जगह केवल टेलीविजन भाषण चलाना', 'Replacing teachers solely with passive TV broadcasts'],
    ],
    '“The Technology of Teaching” में स्किनर ने स्पष्ट किया कि शिक्षण एक कला मात्र नहीं बल्कि अधिगम के वैज्ञानिक नियमों पर आधारित तकनीक होनी चाहिए।',
    'In “The Technology of Teaching” (1968), Skinner argued for designing instruction scientifically using behavioral principles and programmed systems.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'अनुबंधन की प्रक्रियाएँ',
    'निम्नलिखित में से किस परिस्थिति में “उद्दीपन सामान्यीकरण” (Stimulus Generalization) घटित होने की संभावना सर्वाधिक होती है?',
    'In which situation is “Stimulus Generalization” most likely to occur?',
    ['जब नया उद्दीपन मूल अनुबंधित उद्दीपन से आकार, रंग या ध्वनि में बहुत मिलता-जुलता हो', 'When a new stimulus closely resembles the original conditioned stimulus in shape, color, or pitch'],
    [
      ['जब नया उद्दीपन मूल उद्दीपन से बिल्कुल विपरीत हो', 'When the new stimulus is completely opposite to the original CS'],
      ['जब प्राणी को कभी कोई अनुबंधन कराया ही न गया हो', 'When the organism has never been conditioned'],
      ['जब विलोपन पूरी तरह से स्थायी हो चुका हो', 'When conditioning was never acquired'],
    ],
    'नया उद्दीपन मूल CS के जितना अधिक समान होगा, सामान्यीकरण की तीव्रता (Generalization Gradient) उतनी ही अधिक होगी।',
    'The closer a novel stimulus resembles the original CS along sensory dimensions, the stronger the generalized conditioned response.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'सीखने के मुख्य नियम',
    'थॉर्नडाइक के किस नियम को “संशोधित प्रभाव का नियम” (Truncated Law of Effect) कहा जाता है?',
    'What is Thorndike’s post-1930 “Truncated Law of Effect”?',
    ['पुरस्कार (संतोष) S-R बंधन को निश्चित रूप से मजबूत करता है, किंतु दंड (असंतोष) उसे उतनी निश्चितता से मिटाता नहीं', 'Reward reliably strengthens S-R bonds, whereas punishment does not reliably weaken or erase them'],
    [
      ['पुरस्कार और दंड दोनों को पूरी तरह निरर्थक मान लेना', 'Declaring both reward and punishment completely useless'],
      ['दंड को पुरस्कार से दस गुना अधिक प्रभावी मानना', 'Declaring punishment ten times stronger than reward'],
      ['केवल तत्परता को ही सीखने का एकमात्र नियम मानना', 'Treating readiness as the sole law of learning'],
    ],
    '1930 के बाद के प्रयोगों से थॉर्नडाइक ने अपना प्रभाव का नियम आधा (Truncated) कर दिया—पुरस्कार की शक्ति तो बनी रही, पर दंड को अविश्वसनीय माना गया।',
    'After 1930 experiments, Thorndike truncated the Law of Effect, retaining the strengthening effect of reward while dropping the symmetric weakening claim for punishment.',
    'HARD'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'पुनर्बलन अनुसूचियाँ',
    'पुनर्बलन की चारों आंशिक अनुसूचियों (FR, VR, FI, VI) में से कौन-सी अनुसूची “उच्च और अत्यंत स्थिर (Steady) अनुक्रिया दर” उत्पन्न करती है जिसमें विराम लगभग नहीं होता?',
    'Among the four partial schedules (FR, VR, FI, VI), which produces a “high and remarkably steady” response rate with virtually no pauses?',
    ['परिवर्ती अनुपात अनुसूची (Variable Ratio - VR)', 'Variable Ratio (VR) Schedule'],
    [
      ['निश्चित अंतराल अनुसूची (Fixed Interval - FI)', 'Fixed Interval (FI) Schedule'],
      ['निश्चित अनुपात अनुसूची (Fixed Ratio - FR)', 'Fixed Ratio (FR) Schedule'],
      ['कोई भी अनुसूची स्थिर दर नहीं देती', 'None of the schedules produce steady rates'],
    ],
    'VR अनुसूची में हर अगली अनुक्रिया पुरस्कार दिला सकती है, इसलिए प्राणी बिना रुके लगातार उच्च गति से कार्य करता रहता है (जैसे कमीशन-आधारित विक्रेता)।',
    'In a VR schedule, any next response might pay off, eliminating post-reinforcement pauses and sustaining a high, steady response rate.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की अवधारणा',
    'अधिगम के संदर्भ में “अभिप्रेरणा” और “पुनर्बलन” की पारस्परिक भूमिका क्या है?',
    'What is the complementary role of “Motivation” and “Reinforcement” in learning?',
    ['अभिप्रेरणा सीखने की क्रिया को प्रारंभ और निर्देशित करती है, जबकि पुनर्बलन सही अनुक्रिया को सुदृढ़ व स्थायी बनाता है', 'Motivation initiates and directs learning activity, while reinforcement strengthens and stabilizes the correct response'],
    [
      ['अभिप्रेरणा सीखने को रोकती है और पुनर्बलन उसे मिटाता है', 'Motivation blocks learning while reinforcement erases it'],
      ['दोनों केवल जन्म के प्रथम सप्ताह में काम करते हैं', 'Both operate only during the first week after birth'],
      ['पुनर्बलन पहले आता है और अभिप्रेरणा की कोई जरूरत नहीं होती', 'Reinforcement precedes everything and motivation is unnecessary'],
    ],
    'अभिप्रेरणा छात्र को सीखने के लिए तत्पर व सक्रिय करती है, और सही प्रयास के बाद मिलने वाला पुनर्बलन उस अधिगम को दीर्घकालिक आदत या कौशल बनाता है।',
    'Motivation energizes and directs the learner to act, while reinforcement cements successful actions into lasting learning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'पावलॉव के प्रयोग में यदि घंटी बजाने के 0.5 सेकंड बाद भोजन दिया जाए, तो यह किस प्रकार के अनुबंधन का उदाहरण होगा?',
    'In Pavlov’s experiment, if food is presented 0.5 seconds after the bell begins (with the bell staying on until food arrives), which conditioning is this?',
    ['विलंबित अनुबंधन (Delayed Conditioning)', 'Delayed Conditioning'],
    [
      ['पश्चगामी अनुबंधन (Backward Conditioning)', 'Backward Conditioning'],
      ['सहकालिक अनुबंधन (Simultaneous Conditioning)', 'Simultaneous Conditioning'],
      ['कालिक अनुबंधन (Temporal Conditioning)', 'Temporal Conditioning'],
    ],
    'घंटी का भोजन से लगभग 0.5 सेकंड पहले प्रारंभ होना और भोजन आने तक बने रहना आदर्श विलंबित अनुबंधन है जो सर्वाधिक तीव्र अनुबंधन उत्पन्न करता है।',
    'Starting the CS roughly 0.5 seconds before the UCS and overlapping is optimal Delayed Conditioning.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'कक्षा में एक अध्यापक छात्रों से कहता है, “यदि सभी विद्यार्थी 20 मिनट तक शांतिपूर्वक अपना पाठ पूरा कर लें, तो आज का अंतिम 10 मिनट का गृहकार्य नहीं दिया जाएगा।” यह उदाहरण है:',
    'A teacher says, “If everyone finishes their reading quietly in 20 minutes, today’s extra homework will be cancelled.” This is an example of:',
    ['नकारात्मक पुनर्बलन (Negative Reinforcement)', 'Negative Reinforcement'],
    [
      ['सकारात्मक दंड (Positive Punishment)', 'Positive Punishment'],
      ['नकारात्मक दंड (Negative Punishment)', 'Negative Punishment'],
      ['शास्त्रीय विलोपन (Classical Extinction)', 'Classical Extinction'],
    ],
    'अतिरिक्त गृहकार्य रूपी अप्रिय कार्य को हटाकर शांतिपूर्वक पढ़ाई के वांछित व्यवहार को बढ़ाना नकारात्मक पुनर्बलन है।',
    'Removing an aversive burden (extra homework) contingent on quiet study strengthens quiet study via Negative Reinforcement.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'शैक्षिक निहितार्थ',
    'प्राथमिक स्तर पर भाषा में नए शब्दों के शुद्ध उच्चारण और वर्तनी के अभ्यास के लिए शिक्षक बार-बार श्रुतलेख (Dictation) और सुधार कराता है। यह मुख्यतः किस नियम पर आधारित है?',
    'At the primary level, a teacher conducts regular dictation with immediate correction to master spelling and pronunciation. This mainly relies on:',
    ['थॉर्नडाइक का अभ्यास एवं प्रभाव का नियम', 'Thorndike’s Law of Exercise and Law of Effect'],
    [
      ['पावलॉव का बाह्य अवरोध', 'Pavlov’s External Inhibition'],
      ['कोहलर का अहा अनुभव', 'Kohler’s Aha Experience'],
      ['कैटेल का तरल बुद्धि कारक', 'Cattell’s Fluid Intelligence'],
    ],
    'नियमित श्रुतलेख अभ्यास के नियम (उपयोग) को और तुरंत सुधार व प्रशंसा प्रभाव के नियम को लागू करते हैं।',
    'Regular dictation applies the Law of Exercise, while immediate correction and praise apply the Law of Effect.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'आकारण एवं शृंखलन',
    'जब कोई छात्र जटिल प्रयोगशाला उपकरण को चरण-दर-चरण जोड़ना सीखता है (पहले बीकर रखना, फिर फनल लगाना, फिर फिल्टर पेपर मोड़ना, फिर घोल डालना), तो यह किस क्रिया-प्रसूत प्रक्रिया का उदाहरण है?',
    'When a student learns a multi-step lab setup in exact order (place beaker, set funnel, fold filter paper, pour solution), which operant process is demonstrated?',
    ['व्यवहार शृंखलन (Behavior Chaining)', 'Behavior Chaining'],
    [
      ['उद्दीपन सामान्यीकरण (Stimulus Generalization)', 'Stimulus Generalization'],
      ['स्वतः पुनःप्राप्ति (Spontaneous Recovery)', 'Spontaneous Recovery'],
      ['प्रायोगिक तंत्रिकाताप (Experimental Neurosis)', 'Experimental Neurosis'],
    ],
    'क्रमिक क्रियाओं को एक निश्चित शृंखला (Chain) में बाँधकर अंतिम परिणाम तक पहुँचना शृंखलन (Chaining) कहलाता है।',
    'Connecting discrete sequential steps into an integrated multi-step performance is Behavior Chaining.',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: तुलनात्मक विश्लेषण',
    'व्यवहारवादी सिद्धांत',
    '“S-O-R” (Stimulus – Organism – Response) मॉडल, जिसमें उद्दीपन और अनुक्रिया के बीच जीव (Organism) के संज्ञानात्मक व अभिप्रेरणात्मक कारकों को भी स्थान दिया गया, किसने लोकप्रिय बनाया?',
    'Who popularized the “S-O-R” (Stimulus–Organism–Response) model, inserting the Organism’s internal factors between S and R?',
    ['आर.एस. वुडवर्थ (R.S. Woodworth)', 'R.S. Woodworth'],
    [
      ['जॉन बी. वाटसन (John B. Watson)', 'John B. Watson'],
      ['इवान पावलॉव (Ivan Pavlov)', 'Ivan Pavlov'],
      ['बी.एफ. स्किनर (B.F. Skinner)', 'B.F. Skinner'],
    ],
    'आर.एस. वुडवर्थ ने शुद्ध S-R व्यवहारवाद का विस्तार कर S-O-R सूत्र दिया, जिसमें ‘O’ जीव की आंतरिक अवस्था, आवश्यकता, पूर्व-ज्ञान व मानसिक विन्यास को दर्शाता है।',
    'R.S. Woodworth expanded simple S-R behaviorism into the S-O-R formula, where “O” represents the organism’s internal drives, sets, and cognition.',
    'HARD'
  ),
  q(
    'अधिगम की प्रकृति एवं परिभाषा',
    'अधिगम की विशेषताएँ',
    '“अधिगम समायोजन की प्रक्रिया है” — इसका व्यावहारिक अर्थ क्या है?',
    '“Learning is a process of adjustment” — what does this mean practically?',
    ['सीखने से व्यक्ति बदलती हुई भौतिक और सामाजिक परिस्थितियों के साथ तालमेल बैठाने में सक्षम होता है', 'Learning enables an individual to adapt effectively to changing physical and social environments'],
    [
      ['सीखने से व्यक्ति समाज से पूरी तरह कटकर अलग हो जाता है', 'Learning isolates an individual completely from society'],
      ['सीखना केवल परीक्षा में 100 अंक लाने तक सीमित है', 'Learning is limited solely to scoring 100 marks in exams'],
      ['सीखने से व्यक्ति हमेशा दूसरों की अंधी नकल करता है', 'Learning makes a person blindly imitate everyone'],
    ],
    'नए कौशल, भाषा, नियम और समस्या-समाधान सीखकर ही मनुष्य अपने पर्यावरण के साथ सफल सामंजस्य (Adjustment) स्थापित करता है।',
    'Acquiring new skills, norms, and problem-solving strategies equips individuals to adapt harmoniously to environmental demands.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: थॉर्नडाइक',
    'प्रयास एवं त्रुटि सिद्धांत',
    'थॉर्नडाइक के प्रयोग में बिल्ली ने अंततः चिटकनी दबाना कैसे सीखा?',
    'How did the cat ultimately learn to unlatch the door in Thorndike’s puzzle box?',
    ['अनेक यादृच्छिक प्रयासों के दौरान संयोग से चिटकनी दबी, मछली से संतोष मिला और बार-बार दोहराव से वह क्रिया पक्की हो गई', 'During varied random movements it accidentally hit the latch, got the fish, and repetition stamped in the successful act'],
    [
      ['कोहलर के चिंपांजी की तरह बॉक्स में बैठकर सोचने के बाद अचानक सूझ से', 'Through sudden insight after sitting and contemplating like Kohler’s ape'],
      ['थॉर्नडाइक द्वारा बिल्ली का हाथ पकड़कर सिखाने से', 'Because Thorndike guided the cat’s paw physically'],
      ['दूसरी बिल्ली को बॉक्स खोलते हुए देखकर', 'By observing another cat open the box'],
    ],
    'थॉर्नडाइक के अनुसार बिल्ली ने पहले बहु-प्रतिक्रिया की, फिर संयोगवश सफलता मिली, और प्रभाव व अभ्यास के नियमों से सही अनुक्रिया स्थायी हुई।',
    'Through multiple responses, accidental success followed by food satisfaction stamped in the correct latch-pressing response over repeated trials.',
    'EASY'
  ),
  q(
    'सीखने के सिद्धांत: पावलॉव',
    'शास्त्रीय अनुबंधन सिद्धांत',
    'निम्नलिखित में से कौन-सा एक “स्वाभाविक अनुक्रिया” (UCR) का उदाहरण है, न कि अनुबंधित अनुक्रिया (CR) का?',
    'Which of the following is an example of an “Unconditioned Response” (UCR) rather than a Conditioned Response (CR)?',
    ['आँख में धूल का कण गिरने पर तुरंत आँसू आना और पलक झपकना', 'Tearing up and blinking immediately when dust enters the eye'],
    [
      ['स्कूल की घंटी बजते ही बस्ता बंद करने लगना', 'Packing the schoolbag immediately when the dismissal bell rings'],
      ['इमली का नाम सुनते ही मुँह में पानी आ जाना', 'Salivating merely upon hearing the word “tamarind”'],
      ['पुलिस सायरन सुनकर हृदय की धड़कन तेज हो जाना', 'Heart racing upon hearing a police siren'],
    ],
    'आँख में धूल जाने पर आँसू आना जन्मजात जैविक प्रतिवर्त (UCR) है, जबकि घंटी, शब्द या सायरन पर होने वाली प्रतिक्रियाएँ अनुभव से अर्जित अनुबंधित अनुक्रियाएँ (CR) हैं।',
    'Blinking and tearing from dust is an innate biological reflex (UCR), whereas reacting to bells, spoken words, or sirens is conditioned (CR).',
    'MEDIUM'
  ),
  q(
    'सीखने के सिद्धांत: स्किनर',
    'क्रिया-प्रसूत अनुबंधन',
    'स्किनर के अनुसार “गौण/सामान्यीकृत पुनर्बलक” (Generalized Reinforcer) किसे कहा जाता है, जैसे धन या प्रशंसा?',
    'In Skinnerian terms, why are money or social praise called “Generalized Reinforcers”?',
    ['क्योंकि ये किसी एक विशेष आवश्यकता से नहीं, बल्कि अनेक प्रकार के प्राथमिक व द्वितीयक पुनर्बलकों से जुड़े होते हैं', 'Because they are paired with many different primary and secondary reinforcers rather than a single need'],
    [
      ['क्योंकि इन्हें केवल सामान्य बुद्धि वाले लोग ही प्राप्त कर सकते हैं', 'Because only people with average IQ can earn them'],
      ['क्योंकि इनका प्रयोग केवल शास्त्रीय अनुबंधन में होता है', 'Because they are used solely in classical conditioning'],
      ['क्योंकि ये हमेशा नकारात्मक प्रभाव डालते हैं', 'Because they always produce negative effects'],
    ],
    'धन, टोकन और सामाजिक स्वीकृति अनेक प्राथमिक आवश्यकताओं (भोजन, वस्त्र, सुरक्षा, मनोरंजन) को पूरा करने में सक्षम होते हैं, इसलिए वे सामान्यीकृत पुनर्बलक कहलाते हैं।',
    'Generalized conditioned reinforcers (money, praise, tokens) retain potency across motivational states because they can be exchanged for or paired with numerous primary reinforcers.',
    'HARD'
  ),
];
