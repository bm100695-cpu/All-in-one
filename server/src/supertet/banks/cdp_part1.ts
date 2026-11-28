import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Child Psychology');

export const CDP_BANK_PART1: RawBankQuestion[] = [
  // =========================================================================
  // 1. वैयक्तिक भिन्नता (Individual Differences) — 75 Questions
  // =========================================================================
  q(
    'Individual Differences',
    'Concept & History',
    'वैयक्तिक भिन्नता (Individual Differences) का सर्वप्रथम वैज्ञानिक अध्ययन किस मनोवैज्ञानिक ने किया था?',
    'Which psychologist conducted the first scientific study of Individual Differences?',
    ['फ्रांसिस गाल्टन', 'Francis Galton'],
    [
      ['विलियम वुंट', 'Wilhelm Wundt'],
      ['अल्फ्रेड बिने', 'Alfred Binet'],
      ['बी. एफ. स्किनर', 'B. F. Skinner'],
    ],
    'सर फ्रांसिस गाल्टन ने 1869 में अपनी पुस्तक "Hereditary Genius" के माध्यम से वैयक्तिक भिन्नताओं का सर्वप्रथम क्रमबद्ध और वैज्ञानिक अध्ययन किया था।',
    'Sir Francis Galton conducted the first systematic scientific study of individual differences in his 1869 book "Hereditary Genius".',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    '"मानसिक परीक्षण" (Mental Test) शब्द का सर्वप्रथम प्रयोग 1890 में किसने किया?',
    'Who first coined and used the term "Mental Test" in 1890?',
    ['जेम्स मैक्कीन कैटेल', 'James McKeen Cattell'],
    [
      ['अल्फ्रेड बिने', 'Alfred Binet'],
      ['लुईस टर्मन', 'Lewis Terman'],
      ['चार्ल्स स्पीयरमैन', 'Charles Spearman'],
    ],
    'अमेरिकी मनोवैज्ञानिक जेम्स मैक्कीन कैटेल ने 1890 में "Mental Tests and Measurements" नामक लेख में सर्वप्रथम मानसिक परीक्षण शब्द का प्रयोग किया।',
    'American psychologist James McKeen Cattell first used the term "Mental Test" in his 1890 paper "Mental Tests and Measurements".',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Definitions',
    '"व्यक्तित्व का कोई भी ऐसा पहलू जिसका मापन किया जा सके, वैयक्तिक भिन्नता के अंतर्गत आता है"—यह कथन किसका है?',
    '"Any measurable aspect of the total personality falls under individual differences"—whose statement is this?',
    ['बी. एफ. स्किनर', 'B. F. Skinner'],
    [
      ['लियोना टायलर', 'Leona Tyler'],
      ['जेम्स ड्रेवर', 'James Drever'],
      ['क्रो एवं क्रो', 'Crow and Crow'],
    ],
    'स्किनर ने वैयक्तिक भिन्नता को व्यापक रूप से परिभाषित करते हुए कहा कि इसमें संपूर्ण व्यक्तित्व का हर वह पहलू शामिल है जिसे मापा जा सकता है।',
    'B. F. Skinner broadly defined individual differences as including any measurable aspect of the total personality.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Definitions',
    '"शरीर के रूप-रंग, आकार, कार्य, गति, बुद्धि, ज्ञान, उपलब्धि, रुचि आदि में पाई जाने वाली भिन्नता को वैयक्तिक भिन्नता कहते हैं।" यह परिभाषा किसने दी?',
    '"Differences found in physical appearance, size, function, speed, intelligence, knowledge, achievement, and interest are called individual differences." Who gave this definition?',
    ['लियोना टायलर', 'Leona Tyler'],
    [
      ['ई. एल. थॉर्नडाइक', 'E. L. Thorndike'],
      ['कार्टर वी. गुड', 'Carter V. Good'],
      ['विलियम मैकडूगल', 'William McDougall'],
    ],
    'लियोना टायलर ने वैयक्तिक भिन्नता को शारीरिक, मानसिक और व्यावहारिक गुणों में मापने योग्य अंतर के रूप में परिभाषित किया और इसे एक सार्वभौमिक तथ्य बताया।',
    'Leona Tyler defined individual differences as measurable variations in physical, mental, and behavioral traits, calling it a universal phenomenon.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    'फ्रांसिस गाल्टन द्वारा 1883 में प्रतिपादित "सुजननिकी" (Eugenics) शब्द का मुख्य उद्देश्य क्या था?',
    'What was the primary aim of the term "Eugenics" coined by Francis Galton in 1883?',
    ['उत्तम आनुवंशिक गुणों वाली पीढ़ी को प्रोत्साहन देना', 'Encouraging generations with superior hereditary traits'],
    [
      ['केवल पर्यावरण में सुधार करना', 'Improving only the environment'],
      ['अधिगम अक्षमताओं का उपचार करना', 'Treating learning disabilities'],
      ['सामाजिक वर्गों को समाप्त करना', 'Abolishing social classes'],
    ],
    'गाल्टन का मानना था कि बुद्धि और प्रतिभा मुख्यतः आनुवंशिक होती हैं; सुजननिकी का अर्थ आनुवंशिक चयन द्वारा मानव नस्ल के गुणों में सुधार करना था।',
    'Galton believed intelligence and talent are largely hereditary; eugenics aimed to improve human hereditary qualities through selective encouragement.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Types of Differences',
    'जब एक ही बालक गणित में अत्यंत प्रखर किंतु भाषा लेखन में औसत प्रदर्शन करता है, तो यह किस प्रकार की वैयक्तिक भिन्नता का उदाहरण है?',
    'When a single child excels in mathematics but performs averagely in language writing, what type of individual difference is this?',
    ['अन्तः-वैयक्तिक भिन्नता', 'Intra-individual difference'],
    [
      ['अंतर-वैयक्तिक भिन्नता', 'Inter-individual difference'],
      ['प्रजातीय भिन्नता', 'Racial difference'],
      ['कालिक भिन्नता', 'Temporal difference'],
    ],
    'एक ही व्यक्ति के भीतर विभिन्न योग्यताओं या गुणों में पाया जाने वाला अंतर अन्तः-वैयक्तिक भिन्नता (Intra-individual difference) कहलाता है।',
    'Variations among different abilities or traits within the same individual are known as intra-individual differences.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Types of Differences',
    'दो विद्यार्थियों—रोहन और सोहन—की बुद्धि लब्धि और कार्य करने की गति में पाया जाने वाला अंतर क्या कहलाता है?',
    'What is the difference found in intelligence quotient and working speed between two students, Rohan and Sohan, called?',
    ['अंतर-वैयक्तिक भिन्नता', 'Inter-individual difference'],
    [
      ['अन्तः-वैयक्तिक भिन्नता', 'Intra-individual difference'],
      ['आत्मनिष्ठ भिन्नता', 'Subjective difference'],
      ['समानुपातिक भिन्नता', 'Proportional difference'],
    ],
    'दो या दो से अधिक अलग-अलग व्यक्तियों के बीच पाए जाने वाले शारीरिक, मानसिक या संवेगात्मक अंतर को अंतर-वैयक्तिक भिन्नता कहते हैं।',
    'Differences in physical, mental, or emotional traits between two or more distinct individuals are termed inter-individual differences.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Types of Differences',
    'निम्नलिखित में से कौन-सी वैयक्तिक भिन्नता जन्मजात न होकर मुख्यतः अर्जित मानी जाती है?',
    'Which of the following individual differences is primarily considered acquired rather than innate?',
    ['अभिवृत्ति एवं मूल्य', 'Attitude and values'],
    [
      ['आँखों का रंग', 'Eye color'],
      ['रक्त समूह', 'Blood group'],
      ['शारीरिक कद की आनुवंशिक सीमा', 'Genetic limit of height'],
    ],
    'आँखों का रंग व रक्त समूह जन्मजात हैं, जबकि अभिवृत्ति (Attitude) और सामाजिक-नैतिक मूल्य वातावरण, अनुभव और समाजीकरण द्वारा अर्जित होते हैं।',
    'Eye color and blood group are innate, whereas attitudes and values are largely acquired through environment, experience, and socialization.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Styles',
    'एक विद्यार्थी मानचित्र, चार्ट और रंगीन आरेखों को देखकर अवधारणाएँ शीघ्र समझ लेता है। उसकी अधिगम शैली कौन-सी है?',
    'A student grasps concepts quickly by looking at maps, charts, and colored diagrams. What is their learning style?',
    ['दृश्य अधिगम शैली (Visual)', 'Visual learning style'],
    [
      ['श्रव्य अधिगम शैली (Auditory)', 'Auditory learning style'],
      ['गतिज अधिगम शैली (Kinesthetic)', 'Kinesthetic learning style'],
      ['शाब्दिक-केवल शैली (Verbal-only)', 'Verbal-only learning style'],
    ],
    'VARK मॉडल के अनुसार जो शिक्षार्थी चित्रों, चार्ट और दृश्य संकेतों से सर्वोत्तम सीखते हैं, वे दृश्य (Visual) अधिगमकर्ता कहलाते हैं।',
    'According to the VARK model, learners who grasp information best through pictures, charts, and spatial representations are visual learners.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Styles',
    'नील फ्लेमिंग द्वारा प्रतिपादित VARK अधिगम शैली मॉडल में चार प्रमुख प्रकार कौन-से हैं?',
    'What are the four major modalities in the VARK learning style model proposed by Neil Fleming?',
    ['दृश्य, श्रव्य, पठन/लेखन एवं गतिज', 'Visual, Auditory, Read/Write, and Kinesthetic'],
    [
      ['तार्किक, संगीतमय, स्थानिक एवं अंतर्वैयक्तिक', 'Logical, Musical, Spatial, and Interpersonal'],
      ['अपसारी, अभिसारी, आत्मसात्कारी एवं समंजक', 'Diverging, Converging, Assimilating, and Accommodating'],
      ['मूर्त, अमूर्त, प्रतीकात्मक एवं क्रियात्मक', 'Concrete, Abstract, Symbolic, and Enactive'],
    ],
    'नील फ्लेमिंग के VARK मॉडल में V=Visual (दृश्य), A=Aural/Auditory (श्रव्य), R=Read/Write (पठन-लेखन) और K=Kinesthetic (गतिज/क्रियात्मक) शामिल हैं।',
    'Neil Fleming’s VARK model comprises Visual, Aural (Auditory), Read/Write, and Kinesthetic sensory modalities.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Cognitive Styles',
    'विटकिन (Witkin) के अनुसार "क्षेत्र-स्वतंत्र" (Field-Independent) संज्ञानात्मक शैली वाले शिक्षार्थी की मुख्य विशेषता क्या होती है?',
    'According to Witkin, what is the key characteristic of learners with a "Field-Independent" cognitive style?',
    ['वे किसी जटिल पृष्ठभूमि से आवश्यक तत्वों को अलग कर स्वतंत्र रूप से विश्लेषण करते हैं', 'They isolate essential elements from a complex background and analyze independently'],
    [
      ['वे सदैव समूह में दूसरों के मार्गदर्शन पर निर्भर रहते हैं', 'They always depend on others’ guidance in groups'],
      ['वे अमूर्त समस्या समाधान में कठिनाई अनुभव करते हैं', 'They struggle with abstract problem solving'],
      ['वे केवल सामाजिक संकेतों के आधार पर निर्णय लेते हैं', 'They make decisions solely based on social cues'],
    ],
    'हर्मन विटकिन के अनुसार क्षेत्र-स्वतंत्र शिक्षार्थी विश्लेषणात्मक होते हैं और बाहरी संदर्भ या भीड़ के प्रभाव से हटकर विवरणों को पहचान सकते हैं।',
    'According to Herman Witkin, field-independent learners are analytical and can extract relevant details independently of the surrounding context.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Cognitive Styles',
    'जेरोम कागन (Jerome Kagan) ने वैयक्तिक संज्ञानात्मक शैली के किस आयाम का अध्ययन किया?',
    'Which dimension of individual cognitive style was studied by Jerome Kagan?',
    ['चिंतनशीलता बनाम आवेगशीलता', 'Reflectivity versus Impulsivity'],
    [
      ['अंतर्मुखता बनाम बहिर्मुखता', 'Introversion versus Extraversion'],
      ['क्षेत्र-निर्भरता बनाम क्षेत्र-स्वतंत्रता', 'Field-dependence versus Field-independence'],
      ['समतलता बनाम तीक्ष्णता', 'Leveling versus Sharpening'],
    ],
    'जेरोम कागन ने "Matching Familiar Figures Test" के माध्यम से बालकों में चिंतनशील (सोच-समझकर उत्तर देने वाले) बनाम आवेगी (तुरंत बिना सोचे उत्तर देने वाले) शैली की पहचान की।',
    'Jerome Kagan identified the Reflective versus Impulsive cognitive tempo in children using the Matching Familiar Figures Test.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    '"डाल्टन योजना" (Dalton Plan), जो वैयक्तिक भिन्नताओं के अनुसार स्व-गति से सीखने पर बल देती है, की प्रवर्तक कौन थीं?',
    'Who pioneered the "Dalton Plan", which emphasizes self-paced learning tailored to individual differences?',
    ['हेलेन पार्कहर्स्ट', 'Helen Parkhurst'],
    [
      ['मारिया मॉन्टेसरी', 'Maria Montessori'],
      ['कार्लटन वाशबर्न', 'Carleton Washburne'],
      ['मादाम रोसा अगाज़ी', 'Rosa Agazzi'],
    ],
    'हेलेन पार्कहर्स्ट ने 1920 में अमेरिका के डाल्टन शहर में डाल्टन योजना आरंभ की, जिसमें समय-सारणी की कठोरता हटाकर छात्र को अपनी गति से कार्य करने की स्वतंत्रता दी गई।',
    'Helen Parkhurst introduced the Dalton Plan in 1920 in Dalton, Massachusetts, allowing students to work on monthly contracts at their own pace.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'वैयक्तिक भिन्नताओं को संबोधित करने वाली "विनेटका योजना" (Winnetka Plan) किस शिक्षाविद् द्वारा प्रारंभ की गई थी?',
    'Which educationist initiated the "Winnetka Plan" to address individual differences in learning?',
    ['कार्लटन वाशबर्न', 'Carleton Washburne'],
    [
      ['विलियम किलपैट्रिक', 'William Kilpatrick'],
      ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
      ['हेनरी आर्मस्ट्रांग', 'Henry Armstrong'],
    ],
    'कार्लटन वाशबर्न ने 1919 में इलिनॉय के विनेटका में यह योजना प्रारंभ की, जिसमें पाठ्यक्रम को व्यक्तिगत कार्य इकाइयों और सामूहिक सामाजिक गतिविधियों में बाँटा गया।',
    'Carleton Washburne initiated the Winnetka Plan in 1919 in Illinois, dividing instruction into individualized self-paced units and group social activities.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'प्रायोजना विधि (Project Method), जो छात्रों की रुचियों व क्षमताओं की भिन्नता को सम्मान देती है, के प्रतिपादक कौन हैं?',
    'Who propounded the Project Method, which respects differences in students’ interests and abilities?',
    ['विलियम हर्ड किलपैट्रिक', 'William Heard Kilpatrick'],
    [
      ['जॉन एडम्स', 'John Adams'],
      ['जे. एफ. हरबर्ट', 'J. F. Herbart'],
      ['रॉस', 'Ross'],
    ],
    'किलपैट्रिक ने जॉन ड्यूवी के प्रयोजनवाद (Pragmatism) से प्रेरित होकर 1918 में प्रायोजना विधि का प्रतिपादन किया, जिसमें छात्र रुचि के अनुसार सृजनात्मक कार्य करते हैं।',
    'Inspired by John Dewey’s pragmatism, W. H. Kilpatrick propounded the Project Method in 1918, enabling purposeful, interest-driven student projects.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'कक्षा में वैयक्तिक भिन्नताओं को ध्यान में रखते हुए शिक्षण करने की सर्वोत्तम रणनीति क्या है?',
    'What is the best teaching strategy to address individual differences in a classroom?',
    ['विभेदित अनुदेशन एवं विविध शिक्षण विधियों का प्रयोग', 'Using differentiated instruction and varied teaching methods'],
    [
      ['सभी छात्रों से एक ही गति और एक ही विधि से अपेक्षा करना', 'Expecting the same pace and method from all students'],
      ['केवल प्रतिभाशाली छात्रों पर ध्यान केंद्रित करना', 'Focusing exclusively on gifted students'],
      ['कमजोर छात्रों को अलग कमरों में स्थायी रूप से बैठाना', 'Permanently segregating slow learners into separate rooms'],
    ],
    'विभेदित अनुदेशन (Differentiated Instruction) के अंतर्गत शिक्षक विषयवस्तु, प्रक्रिया और मूल्यांकन को विद्यार्थियों की आवश्यकताओं व स्तरों के अनुरूप ढालता है।',
    'Differentiated instruction adapts content, process, and assessment to meet varied readiness levels, interests, and learning profiles.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'सामान्य संभाव्यता वक्र (Normal Probability Curve - NPC) के अनुसार जनसंख्या में अधिकांश व्यक्तियों की बुद्धि लब्धि या गुण किस सीमा में पाए जाते हैं?',
    'According to the Normal Probability Curve (NPC), where do the intelligence or traits of the majority of the population lie?',
    ['माध्य के दोनों ओर ±1 मानक विचलन (68.26%) के भीतर', 'Within ±1 standard deviation of the mean (68.26%)'],
    [
      ['केवल वक्र के अत्यंत दाएँ छोर पर', 'Only at the extreme right tail of the curve'],
      ['केवल वक्र के अत्यंत बाएँ छोर पर', 'Only at the extreme left tail of the curve'],
      ['माध्य से ±3 मानक विचलन के बाहर', 'Outside ±3 standard deviations from the mean'],
    ],
    'सामान्य संभाव्यता वक्र घंटाकार और सममित होता है; इसके माध्य से ±1 SD के बीच लगभग 68.26% व्यक्ति औसत श्रेणी में आते हैं।',
    'The Normal Probability Curve is bell-shaped and symmetrical; approximately 68.26% of individuals fall within ±1 SD around the mean.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'एक आदर्श सामान्य संभाव्यता वक्र (NPC) में माध्य (Mean), माध्यिका (Median) और बहुलक (Mode) के बीच क्या संबंध होता है?',
    'In an ideal Normal Probability Curve (NPC), what is the relationship among Mean, Median, and Mode?',
    ['तीनों एक ही बिंदु पर बराबर होते हैं', 'All three are equal at the same central point'],
    [
      ['माध्य सबसे बड़ा और बहुलक सबसे छोटा होता है', 'Mean is the largest and Mode is the smallest'],
      ['माध्यिका सदैव माध्य से दोगुनी होती है', 'Median is always double the Mean'],
      ['तीनों वक्र के बाएँ सिरे पर स्थित होते हैं', 'All three lie at the left end of the curve'],
    ],
    'पूर्णतः सममित सामान्य वक्र में केंद्रीय प्रवृत्ति के तीनों माप—माध्य, माध्यिका और बहुलक—वक्र के मध्य बिंदु पर संपाती (बराबर) होते हैं।',
    'In a perfectly symmetrical normal curve, Mean, Median, and Mode coincide at the exact center of the distribution.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Aptitude & Interest',
    '"अभिक्षमता" (Aptitude) और "उपलब्धि" (Achievement) के बीच मुख्य अंतर क्या है?',
    'What is the key difference between "Aptitude" and "Achievement"?',
    ['अभिक्षमता भावी सीखने की संभावना बताती है, जबकि उपलब्धि वर्तमान अर्जित ज्ञान को दर्शाती है', 'Aptitude indicates future potential to learn, whereas achievement measures currently acquired knowledge'],
    [
      ['अभिक्षमता केवल शारीरिक होती है और उपलब्धि केवल मानसिक', 'Aptitude is purely physical and achievement is purely mental'],
      ['उपलब्धि जन्मजात होती है जबकि अभिक्षमता पूर्णतः विद्यालयी परीक्षा है', 'Achievement is innate whereas aptitude is purely a school exam'],
      ['दोनों एक ही शब्द के पर्यायवाची हैं और इनमें कोई अंतर नहीं है', 'Both are synonyms with no conceptual difference'],
    ],
    'अभिक्षमता किसी विशेष क्षेत्र में प्रशिक्षण के बाद सफल होने की जन्मजात या भावी क्षमता का संकेत देती है, जबकि उपलब्धि परीक्षण पूर्व-अधिगम को मापते हैं।',
    'Aptitude predicts future capacity to acquire a skill given training, whereas achievement tests measure what has already been learned.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Aptitude & Interest',
    'व्यावसायिक और शैक्षिक अभिरुचि (Interest) मापने के लिए सर्वाधिक प्रसिद्ध "स्ट्रॉन्ग वोकेशनल इंटरेस्ट ब्लैंक" किसने विकसित किया?',
    'Who developed the renowned "Strong Vocational Interest Blank" to measure vocational and educational interests?',
    ['ई. के. स्ट्रॉन्ग जूनियर', 'E. K. Strong Jr.'],
    [
      ['डेविड वेक्स्लर', 'David Wechsler'],
      ['रेमंड कैटेल', 'Raymond Cattell'],
      ['फ्रेडरिक कूडर', 'Frederic Kuder'],
    ],
    'एडवर्ड के. स्ट्रॉन्ग जूनियर ने 1927 में व्यवसाय चयन हेतु व्यक्तियों की रुचियों की भिन्नता मापने के लिए यह मानकीकृत सूची विकसित की।',
    'Edward K. Strong Jr. developed the Strong Vocational Interest Blank in 1927 to assess individual differences in career interests.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    'कक्षा में "वैयक्तिक भिन्नता" के ज्ञान का एक शिक्षक के लिए सर्वाधिक महत्वपूर्ण लाभ क्या है?',
    'What is the most important benefit of understanding individual differences for a classroom teacher?',
    ['प्रत्येक छात्र की क्षमता और आवश्यकता के अनुरूप शिक्षण-योजना बनाना', 'Designing instructional plans suited to each student’s capability and needs'],
    [
      ['छात्रों को स्थायी रूप से श्रेष्ठ और हीन वर्गों में बाँटना', 'Permanently labeling students into superior and inferior groups'],
      ['सभी छात्रों को एक जैसा गृहकार्य और दंड देना', 'Assigning identical homework and punishments to all'],
      ['कमजोर छात्रों को विद्यालय से बाहर निकालना', 'Expelling weak learners from school'],
    ],
    'वैयक्तिक भिन्नताओं की समझ शिक्षक को बाल-केंद्रित शिक्षण, उपचारात्मक सहायता और समृद्धिकरण गतिविधियाँ नियोजित करने में सक्षम बनाती है।',
    'Understanding individual differences enables teachers to plan child-centered instruction, remedial support, and enrichment activities.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'व्यक्तिगत शिक्षण को बढ़ावा देने वाली "खोज विधि" (Heuristic Method) के प्रतिपादक कौन हैं?',
    'Who propounded the "Heuristic Method" that promotes individualized discovery learning?',
    ['प्रो. हेनरी एडवर्ड आर्मस्ट्रांग', 'Prof. Henry Edward Armstrong'],
    [
      ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
      ['जॉन लॉक', 'John Locke'],
      ['रूसो', 'Rousseau'],
    ],
    'प्रो. आर्मस्ट्रांग ने विज्ञान शिक्षण में ह्यूरिस्टिक (स्व-खोज) विधि प्रतिपादित की, जिसमें छात्र निष्क्रिय श्रोता न रहकर स्वयं अन्वेषक की भूमिका निभाता है।',
    'Prof. H. E. Armstrong developed the Heuristic Method, positioning students as active discoverers rather than passive listeners.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Causes of Differences',
    'वैयक्तिक भिन्नताओं के उत्पन्न होने के दो प्रमुख आधारभूत कारण कौन-से हैं?',
    'What are the two primary foundational causes of individual differences?',
    ['आनुवंशिकता एवं वातावरण की अंतःक्रिया', 'Interaction of heredity and environment'],
    [
      ['केवल विद्यालय का भवन एवं पाठ्यक्रम', 'Only school building and syllabus'],
      ['केवल आर्थिक आय एवं व्यवसाय', 'Only economic income and occupation'],
      ['केवल जन्म का महीना एवं राशि', 'Only birth month and zodiac sign'],
    ],
    'प्रत्येक व्यक्ति में दिखने वाली भिन्नता उसके आनुवंशिक गुणों (प्रकृति) और पर्यावरणीय अनुभवों (पोषण) की निरंतर अंतःक्रिया का परिणाम होती है।',
    'Individual differences emerge from the continuous dynamic interaction between a person’s hereditary endowment and environmental experiences.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'समावेशी कक्षा में विविध सीखने की गति वाले विद्यार्थियों के लिए शिक्षक को कैसा आकलन अपनाना चाहिए?',
    'In an inclusive classroom with students of varied learning paces, what kind of assessment should a teacher adopt?',
    ['लचीला, सतत एवं बहु-विध आकलन', 'Flexible, continuous, and multi-modal assessment'],
    [
      ['केवल वर्ष के अंत में एक कठोर लिखित परीक्षा', 'Only one rigid written exam at the end of the year'],
      ['केवल मौखिक स्मरण आधारित प्रश्नोत्तरी', 'Only oral rote-recall quizzes'],
      ['सभी के लिए बिना किसी अनुकूलन के मानकीकृत समय-सीमा', 'Uniform standardized time limits without accommodation'],
    ],
    'सतत एवं व्यापक मूल्यांकन (CCE) तथा बहु-विध आकलन (परियोजना, पोर्टफोलियो, अवलोकन) वैयक्तिक भिन्नताओं का सम्मान करते हुए वास्तविक प्रगति मापते हैं।',
    'Flexible, continuous, and multi-modal assessment (portfolios, projects, observations) respects learner diversity and captures authentic progress.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'बुद्धि लब्धि (IQ) के सामान्य वितरण में कितने प्रतिशत व्यक्तियों का IQ 85 से 115 (±1 SD, जहाँ माध्य=100, SD=15) के मध्य होता है?',
    'In a normal IQ distribution (Mean=100, SD=15), approximately what percentage of people have an IQ between 85 and 115 (±1 SD)?',
    ['लगभग 68%', 'Approximately 68%'],
    [
      ['लगभग 25%', 'Approximately 25%'],
      ['लगभग 95%', 'Approximately 95%'],
      ['लगभग 15%', 'Approximately 15%'],
    ],
    'वेक्स्लर पैमाने में माध्य 100 और मानक विचलन 15 होता है; अतः 85 से 115 (±1 SD) के बीच लगभग 68.26% जनसंख्या आती है।',
    'On the Wechsler scale (Mean=100, SD=15), an IQ range of 85–115 represents ±1 SD, encompassing roughly 68.26% of the population.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Types of Differences',
    'बर्ट (Burt) एवं जेन्सन (Jensen) जैसे मनोवैज्ञानिकों के अनुसार बालकों में लिंग (Gender) के आधार पर किस क्षेत्र में अंतर प्रायः वातावरण व समाजीकरण से प्रभावित दिखते हैं?',
    'According to psychologists, gender-based differences among children in interests and roles are largely shaped by what factor?',
    ['सामाजिक भूमिका अपेक्षाएँ एवं सांस्कृतिक समाजीकरण', 'Social role expectations and cultural socialization'],
    [
      ['केवल मस्तिष्क के भार में अंतर', 'Solely difference in brain weight'],
      ['रक्तचाप में अंतर', 'Difference in blood pressure'],
      ['पाचन तंत्र की कार्यप्रणाली', 'Functioning of the digestive system'],
    ],
    'सामान्य बौद्धिक क्षमता में लड़के और लड़कियों में कोई मूलभूत श्रेष्ठता नहीं होती; रुचियों व व्यवहार के अधिकांश अंतर सामाजिक-सांस्कृतिक अपेक्षाओं से उपजते हैं।',
    'There is no inherent intellectual superiority between genders; most observed differences in interests and behavior stem from cultural socialization.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'प्रतिभाशाली (Gifted) और मंद गति से सीखने वाले (Slow Learner) बालकों के बीच वैयक्तिक भिन्नता को समायोजित करने का "संवर्धन कार्यक्रम" (Enrichment Program) किसके लिए होता है?',
    'An "Enrichment Program" for accommodating individual differences is primarily designed for which group of learners?',
    ['प्रतिभाशाली एवं उच्च क्षमता वाले विद्यार्थी', 'Gifted and high-ability students'],
    [
      ['केवल श्रवण बाधित विद्यार्थी', 'Only hearing-impaired students'],
      ['गंभीर बौद्धिक अक्षमता वाले विद्यार्थी', 'Students with severe intellectual disability'],
      ['केवल अनुपस्थित रहने वाले विद्यार्थी', 'Only chronically absent students'],
    ],
    'संवर्धन (Enrichment) में प्रतिभाशाली छात्रों को नियमित कक्षा में रहते हुए ही अधिक गहन, चुनौतीपूर्ण और सृजनात्मक कार्य दिए जाते हैं।',
    'Enrichment keeps gifted learners with their age peers while providing deeper, more challenging, and creative learning experiences.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    '"त्वरण" (Acceleration) विधि का प्रयोग सामान्यतः किस प्रकार के विद्यार्थियों की वैयक्तिक आवश्यकता पूरी करने हेतु किया जाता है?',
    'The "Acceleration" strategy is generally used to meet the individual needs of which category of students?',
    ['तीव्र बुद्धि और प्रतिभाशाली विद्यार्थी (जैसे कक्षा प्रोन्नति)', 'Gifted and advanced learners (e.g., grade skipping)'],
    [
      ['अधिगम अक्षम विद्यार्थी', 'Learning-disabled students'],
      ['दृष्टिबाधित विद्यार्थी', 'Visually impaired students'],
      ['भाषा-वंचित विद्यार्थी', 'Language-deprived students'],
    ],
    'त्वरण (Acceleration) के अंतर्गत प्रतिभाशाली छात्रों को उनकी तीव्र सीखने की गति के अनुसार अगली कक्षा में प्रोन्नति या शीघ्र पाठ्यक्रम पूरा करने का अवसर दिया जाता है।',
    'Acceleration allows gifted students to progress through curriculum or grade levels faster than usual to match their rapid learning pace.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'कार्ल युंग (Carl Jung) ने वैयक्तिक भिन्नताओं के आधार पर व्यक्तित्व को मुख्यतः किन दो प्रकारों में वर्गीकृत किया?',
    'Carl Jung primarily classified personality types based on individual differences into which two categories?',
    ['अंतर्मुखी एवं बहिर्मुखी', 'Introvert and Extrovert'],
    [
      ['अंतःमूर्ती एवं बाह्यमूर्ती', 'Endomorph and Ectomorph'],
      ['सैद्धांतिक एवं आर्थिक', 'Theoretical and Economic'],
      ['कफ एवं पित्त प्रकृति', 'Phlegmatic and Choleric'],
    ],
    'स्विट्जरलैंड के मनोविश्लेषक कार्ल युंग ने मानसिक ऊर्जा के प्रवाह की दिशा के आधार पर अंतर्मुखी (Introvert) और बहिर्मुखी (Extrovert) प्रकार बताए; बाद में उभयमुखी (Ambivert) जुड़ा।',
    'Carl Jung classified personality into Introvert and Extrovert based on direction of psychic energy (later expanded to include Ambivert).',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'आइजेंक (Eysenck) के अनुसार वैयक्तिक व्यक्तित्व भिन्नताओं के तीन प्रमुख आयाम कौन-से हैं?',
    'According to Hans Eysenck, what are the three superfactors/dimensions of individual personality differences?',
    ['बहिर्मुखता, तंत्रिकातापिता एवं मनोविक्षुब्धता', 'Extraversion, Neuroticism, and Psychoticism'],
    [
      ['इदम्, अहम् एवं पराहम्', 'Id, Ego, and Superego'],
      ['खुलापन, कर्तव्यनिष्ठा एवं सहमतता', 'Openness, Conscientiousness, and Agreeableness'],
      ['आत्मसात, समंजन एवं संतुलन', 'Assimilation, Accommodation, and Equilibration'],
    ],
    'हैंस आइजेंक ने कारक विश्लेषण के आधार पर तीन जैविक-आधारित आयाम दिए: E (Extraversion), N (Neuroticism), और P (Psychoticism)।',
    'Hans Eysenck proposed the PEN model of personality traits: Extraversion (E), Neuroticism (N), and Psychoticism (P).',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Learning Styles',
    'डेविड कोल्ब (David Kolb) के अनुभवात्मक अधिगम मॉडल के अनुसार चार अधिगम शैलियाँ कौन-सी हैं?',
    'According to David Kolb’s Experiential Learning Model, what are the four learning styles?',
    ['अपसारी, आत्मसात्कारी, अभिसारी एवं समंजक', 'Diverging, Assimilating, Converging, and Accommodating'],
    [
      ['दृश्य, श्रव्य, स्पर्शनीय एवं घ्राण', 'Visual, Auditory, Tactile, and Olfactory'],
      ['संवेदी, पूर्व-संक्रियात्मक, मूर्त एवं अमूर्त', 'Sensory, Pre-operational, Concrete, and Formal'],
      ['प्रतिक्षिप्त, सक्रिय, स्थिर एवं आवेगी', 'Reflexive, Active, Static, and Impulsive'],
    ],
    'डेविड कोल्ब ने अनुभव-ग्रहण और प्रसंस्करण के दो अक्षों के आधार पर Diverging, Assimilating, Converging और Accommodating शैलियाँ बताईं।',
    'David Kolb identified four learning styles—Diverging, Assimilating, Converging, and Accommodating—from his experiential learning cycle.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Multiple Intelligences',
    'हावर्ड गार्डनर का "बहु-बुद्धि सिद्धांत" (1983) वैयक्तिक भिन्नता को किस प्रकार स्पष्ट करता है?',
    'How does Howard Gardner’s "Theory of Multiple Intelligences" (1983) explain individual differences?',
    ['प्रत्येक व्यक्ति में विभिन्न स्वतंत्र बुद्धियों का एक अनूठा संयोजन होता है', 'Every individual possesses a unique profile of distinct, relatively independent intelligences'],
    [
      ['बुद्धि केवल एक ही सामान्य कारक (g) से बनी होती है', 'Intelligence consists solely of a single general factor (g)'],
      ['सभी छात्रों में केवल तार्किक-गणितीय बुद्धि विकसित की जा सकती है', 'Only logical-mathematical intelligence can be developed in students'],
      ['बुद्धि को मापा या पहचाना नहीं जा सकता', 'Intelligence cannot be observed or identified'],
    ],
    'गार्डनर ने प्रारंभ में 7 (बाद में 8 व 9) स्वतंत्र बुद्धियाँ बताईं, जिससे स्पष्ट होता है कि कोई छात्र संगीत में, कोई स्थानिक कला में तो कोई अंतर्वैयक्तिक कौशल में विशिष्ट हो सकता है।',
    'Gardner proposed distinct intelligences (linguistic, logical, spatial, musical, kinesthetic, interpersonal, intrapersonal, naturalistic), explaining diverse human strengths.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Multiple Intelligences',
    'एक छात्र दूसरों के मनोभावों, अभिप्रायों और व्यवहार को शीघ्र समझ लेता है तथा समूह का प्रभावी नेतृत्व करता है। गार्डनर के अनुसार उसमें कौन-सी बुद्धि प्रमुख है?',
    'A student quickly understands others’ moods, intentions, and behavior and leads groups effectively. Which intelligence is dominant according to Gardner?',
    ['अंतर्वैयक्तिक बुद्धि (Interpersonal)', 'Interpersonal intelligence'],
    [
      ['अन्तःवैयक्तिक बुद्धि (Intrapersonal)', 'Intrapersonal intelligence'],
      ['प्रकृतिवादी बुद्धि (Naturalistic)', 'Naturalistic intelligence'],
      ['स्थानिक बुद्धि (Spatial)', 'Spatial intelligence'],
    ],
    'अन्य व्यक्तियों की भावनाओं, प्रेरणाओं और व्यवहार को समझने की क्षमता अंतर्वैयक्तिक (Interpersonal) बुद्धि कहलाती है; स्वयं को समझना अन्तःवैयक्तिक (Intrapersonal) है।',
    'The ability to understand and interact effectively with others’ emotions and motives is Interpersonal intelligence (whereas self-understanding is Intrapersonal).',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    '"योग्यता समूहीकरण" (Ability Grouping) की आलोचना मुख्य रूप से किस आधार पर की जाती है?',
    'On what primary ground is "Ability Grouping" (tracking) criticized in education?',
    ['इससे कम क्षमता वाले छात्रों में हीनता की भावना और सामाजिक पृथक्करण पनप सकता है', 'It can foster feelings of inferiority and social segregation among lower-tracked students'],
    [
      ['इससे पाठ्यक्रम बहुत जल्दी समाप्त हो जाता है', 'It finishes the syllabus too quickly'],
      ['इससे शिक्षक को बहुत कम पढ़ाना पड़ता है', 'It requires the teacher to teach too little'],
      ['इससे छात्रों की स्मरण शक्ति नष्ट हो जाती है', 'It destroys students’ memory capacity'],
    ],
    'कठोर योग्यता समूहीकरण या ट्रैकिंग से कमजोर वर्ग के छात्रों में आत्म-सम्मान घटता है, अपेक्षाएँ कम हो जाती हैं और समावेशी सहपाठी-अधिगम बाधित होता है।',
    'Rigid ability grouping or tracking can lower expectations, damage self-esteem among lower groups, and hinder inclusive peer learning.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    '"उपचारात्मक शिक्षण" (Remedial Teaching) की आवश्यकता कब पड़ती है?',
    'When is "Remedial Teaching" required in a classroom?',
    ['निदानात्मक परीक्षण द्वारा अधिगम कठिनाइयों की पहचान करने के बाद', 'After identifying learning gaps and difficulties through diagnostic testing'],
    [
      ['केवल वार्षिक परीक्षा का परिणाम घोषित होने के बाद', 'Only after declaring annual final exam results'],
      ['सत्र के पहले दिन बिना किसी मूल्यांकन के', 'On the very first day of session without evaluation'],
      ['केवल अनुशासनहीन छात्रों को दंड देने के लिए', 'Solely to punish indisciplined students'],
    ],
    'पहले निदानात्मक परीक्षण (Diagnostic Test) से छात्र की विशिष्ट त्रुटियों और कारणों का पता लगाया जाता है, तत्पश्चात् उपचारात्मक शिक्षण द्वारा उनका निवारण किया जाता है।',
    'Diagnostic testing first pinpoints specific learning gaps and their causes, followed by targeted remedial teaching to bridge them.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Causes of Differences',
    'किसी कक्षा में एक ही शिक्षक द्वारा समान विधि से पढ़ाने पर भी छात्रों की उपलब्धि भिन्न-भिन्न होती है। इसका सर्वाधिक सटीक कारण क्या है?',
    'Even when taught by the same teacher with the same method, students achieve differently. What is the most accurate reason?',
    ['विद्यार्थियों की पूर्व-अर्जित क्षमता, अभिप्रेरणा, रुचि और संज्ञानात्मक स्तर की भिन्नता', 'Differences in students’ prior knowledge, motivation, interest, and cognitive readiness'],
    [
      ['शिक्षक के बोलने की गति का समय के साथ बदलना', 'Changes in the teacher’s speaking speed over time'],
      ['ब्लैकबोर्ड के रंग का छात्रों पर प्रभाव', 'Effect of blackboard color on students'],
      ['कक्षा की खिड़कियों की दिशा', 'Orientation of classroom windows'],
    ],
    'अधिगम केवल शिक्षण पर निर्भर नहीं करता, बल्कि शिक्षार्थी की तत्परता, पूर्व ज्ञान, अभिप्रेरणा, संवेग और व्यक्तिगत योग्यताओं से निर्धारित होता है।',
    'Learning outcomes depend heavily on each learner’s readiness, prior knowledge, motivation, interests, and individual cognitive profile.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'जॉन ड्यूवी एवं शिक्षाशास्त्रियों के अनुसार "बाल-केंद्रित शिक्षा" (Child-Centered Education) का मूल आधार क्या है?',
    'According to John Dewey and progressive educators, what is the foundational principle of "Child-Centered Education"?',
    ['बालक की वैयक्तिक रुचियों, आवश्यकताओं और विकासात्मक स्तर को केंद्र में रखना', 'Placing the child’s individual interests, needs, and developmental stage at the center'],
    [
      ['कठोर पाठ्यक्रम और शिक्षक के एकाधिकार को सर्वोच्च मानना', 'Treating rigid syllabus and teacher authority as supreme'],
      ['रटने और दंड के माध्यम से अनुशासन स्थापित करना', 'Establishing discipline through rote memorization and punishment'],
      ['सभी बच्चों के लिए एकसमान यांत्रिक अभ्यास कराना', 'Conducting uniform mechanical drills for every child'],
    ],
    'बाल-केंद्रित शिक्षा वैयक्तिक भिन्नताओं को स्वीकार करती है और मानती है कि शिक्षण पद्धति बालक की प्रकृति व क्षमता के अनुसार ढाली जानी चाहिए।',
    'Child-centered education honors individual differences by adapting pedagogy and activities to the child’s natural curiosity, needs, and stage.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Disabilities',
    'पठन कौशल में गंभीर कठिनाई—जैसे अक्षरों को उल्टा पढ़ना (b को d) या शब्दों की पहचान न कर पाना—किस विशिष्ट अधिगम अक्षमता को दर्शाता है?',
    'Severe difficulty in reading skills—such as reversing letters (b as d) or failing to decode words—indicates which specific learning disability?',
    ['डिस्लेक्सिया (Dyslexia)', 'Dyslexia'],
    [
      ['डिस्कैलकुलिया (Dyscalculia)', 'Dyscalculia'],
      ['डिस्ग्राफिया (Dysgraphia)', 'Dysgraphia'],
      ['डिस्प्रेक्सिया (Dyspraxia)', 'Dyspraxia'],
    ],
    'डिस्लेक्सिया एक तंत्रिका-विकासात्मक पठन विकार है जिसमें ध्वनि-प्रतीक संबंध जोड़ने और शब्दों को पढ़ने में कठिनाई होती है।',
    'Dyslexia is a neurodevelopmental reading disorder affecting phonological processing, decoding, and fluent word recognition.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Disabilities',
    'हस्तलेखन, वर्तनी और कागज पर विचारों को सुसंगत रूप से लिखने में होने वाली विशिष्ट कठिनाई क्या कहलाती है?',
    'What is the specific difficulty in handwriting, spelling, and organizing thoughts coherently on paper called?',
    ['डिस्ग्राफिया (Dysgraphia)', 'Dysgraphia'],
    [
      ['डिस्लेक्सिया (Dyslexia)', 'Dyslexia'],
      ['अफेजिया (Aphasia)', 'Aphasia'],
      ['डिस्थीमिया (Dysthymia)', 'Dysthymia'],
    ],
    'डिस्ग्राफिया लेखन से संबंधित अधिगम अक्षमता है; डिस्कैलकुलिया गणित से, डिस्लेक्सिया पठन से और अफेजिया भाषा/वाक् बोध से संबंधित है।',
    'Dysgraphia is a specific writing disability; dyscalculia involves math, dyslexia involves reading, and aphasia affects language comprehension/production.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Disabilities',
    'संख्यात्मक संक्रियाओं को समझने, स्थानीय मान पहचानने और गणितीय गणना करने में स्थायी कठिनाई किस अक्षमता से संबंधित है?',
    'Persistent difficulty in understanding numerical operations, place value, and mathematical calculations is associated with which disability?',
    ['डिस्कैलकुलिया (Dyscalculia)', 'Dyscalculia'],
    [
      ['डिस्प्रैक्सिया (Dyspraxia)', 'Dyspraxia'],
      ['डिस्मॉर्फिया (Dysmorphia)', 'Dysmorphia'],
      ['डिस्ग्राफिया (Dysgraphia)', 'Dysgraphia'],
    ],
    'डिस्कैलकुलिया गणितीय तर्क, संख्या बोध और अंकगणितीय गणनाओं से जुड़ी विशिष्ट अधिगम अक्षमता है।',
    'Dyscalculia is a specific learning disability impairing number sense, arithmetic facts, and mathematical reasoning.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Learning Disabilities',
    'सूक्ष्म गामक कौशल (Fine Motor Skills) और हाथ-आँख समन्वय में बाधा उत्पन्न करने वाली विकासात्मक समन्वय अक्षमता कौन-सी है?',
    'Which developmental coordination disorder impairs fine motor skills and hand-eye coordination?',
    ['डिस्प्रैक्सिया (Dyspraxia)', 'Dyspraxia'],
    [
      ['डिस्लेक्सिया (Dyslexia)', 'Dyslexia'],
      ['ऑटिज्म (Autism)', 'Autism'],
      ['डिस्कैलकुलिया (Dyscalculia)', 'Dyscalculia'],
    ],
    'डिस्प्रैक्सिया (Developmental Coordination Disorder) में बालक को जूते के फीते बाँधने, कैंची चलाने, संतुलन बनाने या पेन पकड़ने में कठिनाई होती है।',
    'Dyspraxia affects motor planning and coordination, making tasks like tying shoelaces, cutting, balance, or holding a pencil difficult.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    'तोरेंस (E. Paul Torrance) तथा गिलफोर्ड के अनुसार "सृजनात्मक बालक" (Creative Child) की प्रमुख पहचान क्या है?',
    'According to E. Paul Torrance and J. P. Guilford, what is the hallmark of a "Creative Child"?',
    ['अपसारी चिंतन (Divergent Thinking) एवं मौलिक विचारों की बहुलता', 'Divergent thinking and fluency of original ideas'],
    [
      ['केवल एक ही सही उत्तर खोजने वाला अभिसारी चिंतन', 'Convergent thinking focused on a single correct answer'],
      ['पाठ्यपुस्तक को शब्दशः कंठस्थ करने की क्षमता', 'Ability to memorize textbooks verbatim'],
      ['पूर्णतः आज्ञाकारी और प्रश्न न पूछने वाला व्यवहार', 'Unquestioning obedience without asking doubts'],
    ],
    'गिलफोर्ड ने अभिसारी और अपसारी चिंतन का अंतर बताया; सृजनात्मकता में धाराप्रवाहता, लचीलापन, मौलिकता और विस्तारण शामिल होते हैं।',
    'Guilford distinguished convergent from divergent thinking; creativity is marked by fluency, flexibility, originality, and elaboration.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    'रेंज़ुली (Joseph Renzulli) के "थ्री-रिंग मॉडल" के अनुसार प्रतिभाशालिता (Giftedness) किन तीन तत्वों के संगम से बनती है?',
    'According to Joseph Renzulli’s "Three-Ring Conception", giftedness results from the interaction of which three clusters?',
    ['औसत से उच्च क्षमता, कार्य-प्रतिबद्धता (अभिप्रेरणा) एवं सृजनात्मकता', 'Above-average ability, task commitment (motivation), and creativity'],
    [
      ['उच्च आयु, शारीरिक बल एवं धन', 'High age, physical strength, and wealth'],
      ['केवल IQ, स्मृति एवं सुंदर लिखावट', 'Only IQ, rote memory, and neat handwriting'],
      ['आज्ञाकारिता, मौन एवं प्रतिस्पर्धा', 'Obedience, silence, and competition'],
    ],
    'जोसेफ रेंज़ुली के त्रि-वलय मॉडल में प्रतिभाशालिता केवल उच्च IQ नहीं, बल्कि औसत से अधिक क्षमता + उच्च कार्य-प्रतिबद्धता + सृजनात्मकता का अंतःसंबंध है।',
    'Renzulli’s Three-Ring model defines giftedness as the intersection of above-average ability, task commitment, and creativity.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    'टर्मन (Terman) के वर्गीकरण के अनुसार "प्रतिभाशाली" (Genius / Gifted) बालकों की बुद्धि लब्धि (IQ) सामान्यतः किस सीमा से ऊपर मानी जाती है?',
    'According to Terman’s classification, "Gifted / Genius" children generally have an IQ above what threshold?',
    ['140 या उससे अधिक', '140 or above'],
    [
      ['90 से 110 के बीच', 'Between 90 and 110'],
      ['70 से 80 के बीच', 'Between 70 and 80'],
      ['110 से 119 के बीच', 'Between 110 and 119'],
    ],
    'लुईस टर्मन के 1916 स्टैनफोर्ड-बिने वर्गीकरण में 90–109 औसत, 120–139 अति श्रेष्ठ तथा 140+ को प्रतिभाशाली (Genius) श्रेणी में रखा गया है (आधुनिक मानकों में 130+ भी प्रयुक्त होता है)।',
    'In Terman’s Stanford-Binet classification, 90–109 is average, 120–139 is very superior, and 140+ denotes genius/gifted (modern programs also use 130+).',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'एक शिक्षक विद्यार्थियों की सृजनात्मकता मापने के लिए पूछता है—"ईंट के 10 असामान्य उपयोग लिखिए।" यह किस प्रकार का परीक्षण है?',
    'To assess creativity, a teacher asks students to list "10 unusual uses of a brick." What type of assessment is this?',
    ['अपसारी चिंतन परीक्षण', 'Divergent thinking test'],
    [
      ['अभिसारी चिंतन परीक्षण', 'Convergent thinking test'],
      ['निष्पादन बुद्धि परीक्षण', 'Performance IQ test'],
      ['अभिक्षमता परीक्षण', 'Mechanical aptitude test'],
    ],
    '"असामान्य उपयोग परीक्षण" (Alternative Uses Test - गिलफोर्ड) अपसारी चिंतन की धाराप्रवाहता, मौलिकता और लचीलेपन को मापता है।',
    'Guilford’s Alternative Uses Test assesses divergent thinking dimensions such as fluency, flexibility, and originality.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'स्प्रैंगर (Eduard Spranger) ने मूल्यों के आधार पर व्यक्तित्व की भिन्नताओं को कितने प्रकारों में बाँटा है?',
    'Into how many types did Eduard Spranger classify individual personalities based on values?',
    ['6 प्रकार (सैद्धांतिक, आर्थिक, सौंदर्यात्मक, सामाजिक, राजनीतिक, धार्मिक)', '6 types (Theoretical, Economic, Aesthetic, Social, Political, Religious)'],
    [
      ['3 प्रकार (अंतर्मुखी, बहिर्मुखी, उभयमुखी)', '3 types (Introvert, Extrovert, Ambivert)'],
      ['4 प्रकार (वात, पित्त, कफ, रक्त)', '4 types (Choleric, Melancholic, Phlegmatic, Sanguine)'],
      ['2 प्रकार (प्रकार-A एवं प्रकार-B)', '2 types (Type-A and Type-B)'],
    ],
    'एडुआर्ड स्प्रैंगर ने अपनी पुस्तक "Types of Men" में जीवन मूल्यों के आधार पर 6 व्यक्तित्व प्रकार प्रस्तुत किए।',
    'In his book "Types of Men", Eduard Spranger classified individuals into 6 value-based personality types.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'शेल्डन (W. H. Sheldon) के शारीरिक गठन सिद्धांत के अनुसार "मेसोमॉर्फिक" (Mesomorphic) व्यक्ति की मुख्य विशेषता क्या होती है?',
    'According to W. H. Sheldon’s somatotype theory, what is the main characteristic of a "Mesomorphic" individual?',
    ['सुडौल मांसपेशीय शरीर एवं साहसी-ऊर्जावान स्वभाव', 'Muscular, athletic build with an energetic and assertive temperament'],
    [
      ['गोल-मटोल शरीर एवं अत्यंत शांत-आरामप्रिय स्वभाव', 'Round, soft physique with a relaxed, comfort-loving temperament'],
      ['दुबला-पतला शरीर एवं अत्यधिक एकांतप्रिय स्वभाव', 'Thin, fragile physique with a shy, solitary temperament'],
      ['केवल बौद्धिक क्षमता और शून्य शारीरिक सक्रियता', 'Purely intellectual ability with zero physical activity'],
    ],
    'शेल्डन ने शरीर रचना के तीन प्रकार दिए: एंडोमॉर्फ (गोल व मिलनसार), मेसोमॉर्फ (सुडौल व साहसी/सक्रिय), और एक्टोमॉर्फ (दुबला व संवेदनशील/एकांतप्रिय)।',
    'Sheldon described three somatotypes: Endomorph (round, sociable), Mesomorph (muscular, assertive/energetic), and Ectomorph (thin, restrained).',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'क्रेचमर (Kretschmer) द्वारा दिए गए व्यक्तित्व के वर्गीकरण में निम्नलिखित में से कौन-सा प्रकार शामिल नहीं है?',
    'Which of the following is NOT included in Ernst Kretschmer’s constitutional classification of personality?',
    ['प्रकार-A (Type-A)', 'Type-A'],
    [
      ['पिकनिक (Pyknic)', 'Pyknic'],
      ['एथलेटिक (Athletic)', 'Athletic'],
      ['एस्थेनिक / लेप्टोसोम (Asthenic)', 'Asthenic / Leptosome'],
    ],
    'क्रेचमर ने शरीर रचना के 4 प्रकार बताए: पिकनिक, एथलेटिक, एस्थेनिक और डिस्प्लास्टिक। टाइप-A व टाइप-B का वर्गीकरण फ्रीडमैन और रोज़नमैन ने दिया था।',
    'Kretschmer proposed Pyknic, Athletic, Asthenic, and Dysplastic types; Type-A and Type-B personalities were proposed by Friedman and Rosenman.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'कक्षा में "धीमी गति से सीखने वाले" (Slow Learners) बालक की मुख्य विशेषता क्या होती है?',
    'What is the key characteristic of a "Slow Learner" in the classroom?',
    ['उनकी बुद्धि लब्धि सीमांत (लगभग 75–89) होती है और वे सामान्य से धीमी गति से सीखते हैं', 'They typically have borderline IQ (around 75–89) and require more time and repetition'],
    [
      ['उनका IQ सदैव 130 से ऊपर होता है', 'Their IQ is always above 130'],
      ['वे जन्म से ही पूर्णतः पठन-अक्षम होते हैं', 'They are completely incapable of learning to read'],
      ['उन्हें सामान्य विद्यालय में कभी प्रवेश नहीं मिल सकता', 'They can never be admitted to regular schools'],
    ],
    'धीमी गति से सीखने वाले बालक बौद्धिक रूप से विकलांग नहीं होते, बल्कि औसत से थोड़ा कम गति से सीखते हैं; इन्हें अतिरिक्त समय, मूर्त उदाहरण और पुनरावृत्ति की आवश्यकता होती है।',
    'Slow learners are not intellectually disabled; they simply need extra time, concrete examples, and structured repetition to master concepts.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'प्रायोगिक शिक्षा के अंतर्गत "किंडरगार्टन प्रणाली" (बालोद्यान) की शुरुआत किसने की थी?',
    'Who founded the "Kindergarten" (children’s garden) system of early childhood education?',
    ['फ्रेडरिक फ्रोबेल', 'Friedrich Froebel'],
    [
      ['जॉन पेस्टालॉजी', 'Johann Pestalozzi'],
      ['जीन जैक्स रूसो', 'Jean-Jacques Rousseau'],
      ['हर्बर्ट स्पेंसर', 'Herbert Spencer'],
    ],
    'जर्मन शिक्षाशास्त्री फ्रेडरिक फ्रोबेल ने 1837/1840 में किंडरगार्टन की स्थापना की, जिसमें खेल, गीत और उपहारों (Gifts) के माध्यम से बालकों की स्वाभाविक प्रवृत्तियों का विकास किया जाता है।',
    'German pedagogue Friedrich Froebel founded Kindergarten, emphasizing play, songs, and educational "gifts" aligned with children’s natural growth.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'मारिया मॉन्टेसरी की शिक्षण प्रणाली मुख्यतः किस उम्र और सिद्धांत पर केंद्रित है?',
    'Maria Montessori’s educational method primarily focuses on which principle and developmental aspect?',
    ['इंद्रिय प्रशिक्षण एवं स्व-निर्देशित व्यावहारिक गतिविधि', 'Sensory training and self-directed hands-on activity'],
    [
      ['कठोर व्याख्यान एवं सामूहिक दंड', 'Strict lectures and collective punishment'],
      ['केवल अमूर्त व्याकरण का रटंत अभ्यास', 'Only rote memorization of abstract grammar'],
      ['प्रतिस्पर्धात्मक ग्रेडिंग एवं रैंकिंग', 'Competitive grading and ranking'],
    ],
    'डॉ. मारिया मॉन्टेसरी ने "तैयार वातावरण" (Prepared Environment) में ज्ञानेंद्रियों व कर्मेंद्रियों के प्रशिक्षण और स्व-सुधारक उपकरणों के उपयोग पर बल दिया।',
    'Dr. Maria Montessori emphasized a prepared environment, sensory and motor training, and self-correcting didactic materials.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Causes of Differences',
    'शहरी व ग्रामीण परिवेश या भिन्न सामाजिक-आर्थिक पृष्ठभूमि से आने वाले बच्चों की शब्दावली व अनुभवों में अंतर किस कारण की ओर संकेत करता है?',
    'Differences in vocabulary and experiences among children from urban versus rural or varied socioeconomic backgrounds point to which cause?',
    ['पर्यावरणीय एवं सांस्कृतिक अवसरों की भिन्नता', 'Differences in environmental and cultural exposure'],
    [
      ['रक्तचाप की आनुवंशिक भिन्नता', 'Genetic variation in blood pressure'],
      ['मस्तिष्क के आकार में प्रजातीय दोष', 'Racial defect in brain size'],
      ['केवल शारीरिक ऊँचाई का अंतर', 'Solely difference in physical height'],
    ],
    'परिवार की भाषा समृद्धि, संसाधन, सांस्कृतिक अनुभव और परिवेश बच्चों की शब्दावली और संज्ञानात्मक अनुभवों में स्पष्ट वैयक्तिक भिन्नता उत्पन्न करते हैं।',
    'Variations in home literacy, cultural exposure, and resources create distinct differences in children’s vocabulary and experiential background.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'एक शिक्षक पाठ पढ़ाते समय कहानी सुनाता है, चार्ट दिखाता है और बच्चों से मॉडल बनवाता है। वह कक्षा में किस सिद्धांत का पालन कर रहा है?',
    'While teaching a lesson, a teacher tells a story, displays charts, and has students build models. Which principle is the teacher applying?',
    ['बहु-संवेदी एवं वैयक्तिक भिन्नता अनुकूलित शिक्षण', 'Multi-sensory teaching tailored to individual differences'],
    [
      ['एकल-माध्यम व्याख्यान सिद्धांत', 'Single-mode lecture principle'],
      ['यांत्रिक अनुबंधन सिद्धांत', 'Mechanical conditioning principle'],
      ['कठोर समरूपीकरण सिद्धांत', 'Rigid homogenization principle'],
    ],
    'कहानी (श्रव्य), चार्ट (दृश्य) और मॉडल निर्माण (गतिज) तीनों का समावेश सभी प्रकार की अधिगम शैलियों वाले विद्यार्थियों को जोड़ता है।',
    'Combining storytelling (auditory), charts (visual), and model-building (kinesthetic) engages students across diverse learning styles.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'व्यक्तित्व में वैयक्तिक भिन्नताओं को गहराई से जानने हेतु प्रयुक्त "रोर्शा स्याही धब्बा परीक्षण" (Rorschach Inkblot Test) में कुल कितने कार्ड होते हैं?',
    'How many cards are used in the "Rorschach Inkblot Test" to assess individual differences in personality?',
    ['10 कार्ड (5 काले-सफेद, 2 काले-लाल, 3 बहुरंगी)', '10 cards (5 black-and-white, 2 black-red-white, 3 multicolored)'],
    [
      ['20 कार्ड (सभी काले और सफेद)', '20 cards (all black and white)'],
      ['31 कार्ड (30 चित्र व 1 सादा)', '31 cards (30 pictures and 1 blank)'],
      ['16 कार्ड (सभी रंगीन)', '16 cards (all colored)'],
    ],
    'हर्मन रोर्शा (1921) के प्रक्षेपी परीक्षण में 10 स्याही धब्बा कार्ड होते हैं: 5 श्वेत-श्याम, 2 काले-सफेद-लाल तथा 3 पूर्णतः बहुरंगी। (31 कार्ड TAT में होते हैं)।',
    'Hermann Rorschach’s 1921 projective test consists of 10 inkblot cards: 5 achromatic, 2 black-red-white, and 3 multicolored (31 cards belong to TAT).',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'प्रासंगिक अंतर्बोध परीक्षण (Thematic Apperception Test - TAT), जो व्यक्तिगत आवश्यकताओं व अभिप्रेरणाओं को मापता है, का निर्माण किसने किया?',
    'Who developed the Thematic Apperception Test (TAT) to assess individual needs and motives?',
    ['हेनरी मरे एवं क्रिस्टीना मॉर्गन', 'Henry Murray and Christina Morgan'],
    [
      ['हर्मन रोर्शा एवं कार्ल युंग', 'Hermann Rorschach and Carl Jung'],
      ['रेमंड कैटेल एवं आलपोर्ट', 'Raymond Cattell and Gordon Allport'],
      ['थर्स्टन एवं लिकर्ट', 'Thurstone and Likert'],
    ],
    'मॉर्गन एवं मरे (1935) ने TAT का निर्माण किया जिसमें 30 चित्र कार्ड व 1 सादा कार्ड (कुल 31) होते हैं; किसी व्यक्ति को एक बार में अधिकतम 20 कार्ड दिखाए जाते हैं।',
    'Morgan and Murray (1935) developed the TAT comprising 30 picture cards and 1 blank card (31 total), administering up to 20 cards per subject.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    'वैयक्तिक भिन्नता के अध्ययन में "बायोग्राफिकल मेथड" (जीवनी विधि) द्वारा सर्वप्रथम अपने ही पुत्र डोड के विकास का विवरण किसने लिखा?',
    'Who famously used the biographical method in studying child differences by recording the development of his own son Doddy?',
    ['चार्ल्स डार्विन', 'Charles Darwin'],
    [
      ['जॉन लॉक', 'John Locke'],
      ['इवान पावलोव', 'Ivan Pavlov'],
      ['ई. एल. थॉर्नडाइक', 'E. L. Thorndike'],
    ],
    'चार्ल्स डार्विन ने अपने पुत्र विलियम इरास्मस (डोड) के जन्म से विकास का सूक्ष्म अवलोकन कर 1877 में "A Biographical Sketch of an Infant" प्रकाशित किया।',
    'Charles Darwin meticulously recorded observations of his infant son William Erasmus ("Doddy") and published "A Biographical Sketch of an Infant" in 1877.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'अधिगम में वैयक्तिक भिन्नताओं को ध्यान में रखते हुए "अभिक्रमित अनुदेशन" (Programmed Instruction) किसने विकसित किया?',
    'Who developed "Programmed Instruction" enabling self-paced individualized learning?',
    ['बी. एफ. स्किनर', 'B. F. Skinner'],
    [
      ['जीन पियाजे', 'Jean Piaget'],
      ['कोहलर', 'Wolfgang Kohler'],
      ['बंडूरा', 'Albert Bandura'],
    ],
    'बी. एफ. स्किनर ने क्रिया-प्रसूत अनुबंधन के सिद्धांत पर 1954 में रेखीय अभिक्रमित अनुदेशन (Linear Programmed Instruction) विकसित किया, जिसमें छात्र छोटे-छोटे पदों पर अपनी गति से सीखता है।',
    'B. F. Skinner developed Linear Programmed Instruction in 1954 based on operant conditioning, letting learners progress through small frames at their own pace.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'शाखीय अभिक्रमित अनुदेशन (Branching Programmed Instruction), जो छात्र के गलत उत्तर पर उपचारात्मक शाखा देता है, के जनक कौन हैं?',
    'Who is the originator of Branching Programmed Instruction, which provides remedial branches upon incorrect responses?',
    ['नॉर्मन ए. क्राउडर', 'Norman A. Crowder'],
    [
      ['बी. एफ. स्किनर', 'B. F. Skinner'],
      ['थॉमस एफ. गिल्बर्ट', 'Thomas F. Gilbert'],
      ['सिडनी प्रेसी', 'Sidney Pressey'],
    ],
    'नॉर्मन क्राउडर ने 1954/1960 के दशक में शाखीय अभिक्रमित अनुदेशन विकसित किया, जो वैयक्तिक त्रुटियों के अनुसार अलग-अलग सुधारात्मक पृष्ठों की ओर ले जाता है।',
    'Norman A. Crowder developed Branching Programmed Instruction, adapting the instructional path dynamically based on the learner’s specific errors.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'ग्लैसर (Robert Glaser) द्वारा 1962 में प्रतिपादित "बुनियादी शिक्षण प्रतिमान" (Basic Teaching Model) में प्रवेश व्यवहार (Entering Behavior) का क्या अर्थ है?',
    'In Robert Glaser’s 1962 Basic Teaching Model, what does "Entering Behavior" refer to?',
    ['शिक्षण आरंभ होने से पूर्व छात्र का वर्तमान ज्ञान, तत्परता एवं मानसिक स्तर', 'The student’s existing knowledge, readiness, and mental level prior to instruction'],
    [
      ['छात्र का विद्यालय के द्वार में प्रवेश करने का समय', 'The time the student enters the school gate'],
      ['वार्षिक परीक्षा के बाद प्राप्त अंतिम अंक', 'Final marks obtained after the annual exam'],
      ['केवल शिक्षक की शैक्षणिक योग्यता', 'Only the teacher’s academic qualification'],
    ],
    'प्रत्येक छात्र का प्रवेश व्यवहार भिन्न होता है; ग्लैसर के अनुसार शिक्षक को अनुदेशात्मक उद्देश्य तय करने के बाद छात्रों के प्रवेश व्यवहार का आकलन कर रणनीति तय करनी चाहिए।',
    'Each student brings different entering behavior (prior knowledge and readiness), which Glaser stresses must be assessed before selecting instructional procedures.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Causes of Differences',
    'आयु एवं परिपक्वता (Maturity) के बढ़ने के साथ बालकों में वैयक्तिक भिन्नता पर क्या प्रभाव देखा जाता है?',
    'What pattern is generally observed in individual differences as age and maturity increase?',
    ['अनुभवों और रुचियों के विस्तार के कारण भिन्नताएँ अधिक स्पष्ट व विविध हो जाती हैं', 'Differences become more pronounced and diverse as experiences and interests expand'],
    [
      ['सभी बच्चे वयस्क होने पर बिल्कुल एक जैसे हो जाते हैं', 'All children become completely identical in adulthood'],
      ['किशोरावस्था में वैयक्तिक भिन्नता समाप्त हो जाती है', 'Individual differences disappear during adolescence'],
      ['केवल शारीरिक भिन्नता बढ़ती है, मानसिक नहीं', 'Only physical differences increase, not mental ones'],
    ],
    'जैसे-जैसे आयु बढ़ती है, आनुवंशिक संभावनाओं के प्रकटीकरण और विभिन्न पर्यावरणीय अवसरों के कारण व्यक्तियों की रुचियाँ, कौशल और व्यक्तित्व अधिक विशिष्ट होते जाते हैं।',
    'With age, the unfolding of genetic predispositions and cumulative varied experiences makes individual interests, skills, and traits more distinct.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'रेमंड कैटेल (Raymond Cattell) ने वैयक्तिक व्यक्तित्व गुणों के मापन हेतु 16PF प्रश्नावली में कितने "स्रोत शीलगुण" (Source Traits) बताए हैं?',
    'How many "Source Traits" did Raymond Cattell identify in his 16PF questionnaire to measure individual personality differences?',
    ['16 प्रमुख स्रोत शीलगुण', '16 primary source traits'],
    [
      ['5 बड़े शीलगुण', '5 big traits'],
      ['3 मूल शीलगुण', '3 core traits'],
      ['12 सतही शीलगुण', '12 surface traits'],
    ],
    'आर. बी. कैटेल ने कारक विश्लेषण द्वारा व्यक्तित्व की गहराई में विद्यमान 16 मूलभूत स्रोत शीलगुणों (Source Traits) की पहचान की और 16PF प्रश्नावली बनाई।',
    'R. B. Cattell used factor analysis to identify 16 foundational source traits underlying personality, forming the 16PF inventory.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Personality & Temperament',
    'गॉर्डन आलपोर्ट (Gordon Allport) ने किसी व्यक्ति के पूरे जीवन को परिभाषित करने वाले अत्यंत दुर्लभ और सर्वव्यापी शीलगुण को क्या नाम दिया?',
    'What term did Gordon Allport give to a rare, pervasive trait that dominates and defines a person’s entire life?',
    ['प्रधान शीलगुण (Cardinal Trait)', 'Cardinal Trait'],
    [
      ['केंद्रीय शीलगुण (Central Trait)', 'Central Trait'],
      ['गौण शीलगुण (Secondary Trait)', 'Secondary Trait'],
      ['सतही शीलगुण (Surface Trait)', 'Surface Trait'],
    ],
    'आलपोर्ट ने व्यक्तिगत शीलगुणों के तीन स्तर बताए: प्रधान (Cardinal—जैसे गांधीजी की अहिंसा), केंद्रीय (Central—5 से 10 प्रमुख गुण) तथा गौण (Secondary—परिस्थितिजन्य आदतें)।',
    'Allport categorized personal dispositions into Cardinal (all-pervasive), Central (5–10 core traits), and Secondary (situational preferences).',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    'एक कक्षा में "अतिसक्रियता एवं ध्यान अभाव विकार" (ADHD) से ग्रस्त बालक की सहायता करने का सबसे प्रभावी उपाय क्या है?',
    'What is the most effective classroom strategy to support a child with Attention-Deficit/Hyperactivity Disorder (ADHD)?',
    ['कार्यों को छोटे-छोटे खंडों में बाँटना, स्पष्ट निर्देश देना और सकारात्मक पुनर्बलन', 'Breaking tasks into small chunks, giving clear cues, and positive reinforcement'],
    [
      ['लंबे समय तक बिना हिले-डुले बैठने पर कठोर दंड देना', 'Strictly punishing the child for failing to sit still for long hours'],
      ['अत्यधिक शोरगुल वाले कोने में बैठाना', 'Seating the child in a noisy, distracting corner'],
      ['बिना किसी विराम के दो घंटे का लिखित कार्य देना', 'Assigning two hours of uninterrupted written work'],
    ],
    'ADHD वाले बच्चों का ध्यान अल्पकालिक होता है; छोटे कार्य-खंड, न्यूनतम विकर्षण वाली सीट और तुरंत सकारात्मक प्रतिपुष्टि अत्यंत सहायक होते हैं।',
    'Children with ADHD benefit from chunked assignments, low-distraction seating, structured routines, and immediate positive feedback.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    '"स्वलीनता" (Autism Spectrum Disorder - ASD) से प्रभावित बालक में मुख्य रूप से किस क्षेत्र में कठिनाई देखी जाती है?',
    'A child on the Autism Spectrum (ASD) primarily exhibits difficulties in which area?',
    ['सामाजिक अंतःक्रिया, संप्रेषण एवं दोहराव वाले व्यवहार', 'Social interaction, communication, and repetitive behaviors'],
    [
      ['केवल गणित के पहाड़े याद करने में', 'Only memorizing multiplication tables'],
      ['केवल दौड़ने और कूदने में', 'Only running and jumping'],
      ['रंगों को पहचानने में पूर्ण असमर्थता', 'Complete inability to see colors'],
    ],
    'ऑटिज्म एक तंत्रिका-विकासात्मक अवस्था है जिसमें आँख से संपर्क बनाने, सामाजिक संकेतों को समझने, संवाद करने में कठिनाई और सीमित-दोहराव वाली रुचियाँ दिखती हैं।',
    'Autism Spectrum Disorder is a neurodevelopmental condition characterized by challenges in social communication, eye contact, and restricted/repetitive behaviors.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'ब्लूम के "मास्टरी लर्निंग" (Mastery Learning) मॉडल की मूल मान्यता क्या है जो वैयक्तिक भिन्नताओं का सम्मान करती है?',
    'What is the core premise of Benjamin Bloom’s "Mastery Learning" model that respects individual differences?',
    ['यदि प्रत्येक छात्र को उसकी आवश्यकता के अनुसार समय और उपयुक्त सहायता मिले, तो लगभग सभी छात्र दक्षता प्राप्त कर सकते हैं', 'Given appropriate time and tailored support, almost all students can achieve mastery'],
    [
      ['केवल 10% छात्र ही किसी विषय में दक्ष हो सकते हैं', 'Only 10% of students can ever master any subject'],
      ['सभी छात्रों को बिना प्रतिपुष्टि के समान समय ही दिया जाना चाहिए', 'All students must get identical time with no corrective feedback'],
      ['अधिगम की गति को कभी सुधारा नहीं जा सकता', 'Learning pace can never be supported'],
    ],
    'बेंजामिन ब्लूम (1968) और जॉन कैरोल के अनुसार योग्यता केवल सीखने की गति तय करती है; समय और उपचारात्मक सहायता की व्यवस्था करके अधिकांश बच्चों को निपुण बनाया जा सकता है।',
    'Benjamin Bloom argued that aptitude determines learning rate, not ultimate capability; with formative feedback and time, nearly all learners can reach mastery.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'जब किसी परीक्षण का लक्ष्य छात्र की क्षमता के आधार पर कक्षा में उसका स्थान बताना नहीं, बल्कि यह जाँचना हो कि उसने निर्धारित मानक या कौशल कितना सीखा है, तो उसे क्या कहते हैं?',
    'When a test aims to measure how much of a defined standard or skill a student has mastered rather than ranking them against peers, what is it called?',
    ['निकष-संदर्भित परीक्षण (Criterion-Referenced Test)', 'Criterion-Referenced Test'],
    [
      ['मानक-संदर्भित परीक्षण (Norm-Referenced Test)', 'Norm-Referenced Test'],
      ['प्रक्षेपी परीक्षण (Projective Test)', 'Projective Test'],
      ['समाजमितीय परीक्षण (Sociometric Test)', 'Sociometric Test'],
    ],
    'निकष-संदर्भित परीक्षण छात्र के प्रदर्शन की तुलना एक पूर्व-निर्धारित दक्षता मानदंड से करता है, जबकि मानक-संदर्भित परीक्षण अन्य छात्रों के समूह से तुलना करता है।',
    'A criterion-referenced test evaluates mastery against a fixed learning standard, whereas a norm-referenced test compares performance against a peer group.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    'कक्षा में "वैयक्तिक भिन्नता" के प्रति संवेदनशील शिक्षक को विद्यार्थियों की त्रुटियों को किस रूप में देखना चाहिए?',
    'How should a teacher sensitive to individual differences view students’ errors?',
    ['छात्रों की चिंतन प्रक्रिया और अधिगम की अवस्था को समझने के मूल्यवान अवसर के रूप में', 'As valuable windows into students’ thinking processes and learning stage'],
    [
      ['शिक्षक की प्रतिष्ठा को ठेस पहुँचाने वाले अपराध के रूप में', 'As offenses that undermine the teacher’s prestige'],
      ['केवल आलस्य और मंदबुद्धिता के प्रमाण के रूप में', 'Merely as proof of laziness and low intelligence'],
      ['शारीरिक दंड देने के उचित कारण के रूप में', 'As valid grounds for corporal punishment'],
    ],
    'संरचनावादी दृष्टिकोण के अनुसार बच्चों की गलतियाँ यह दर्शाती हैं कि वे किस प्रकार सोच रहे हैं और किस अवधारणात्मक चरण पर उन्हें मार्गदर्शन चाहिए।',
    'From a constructivist perspective, errors reveal how learners are constructing meaning and pinpoint where scaffolding is needed.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Emotional & Social Differences',
    'डैनियल गोलमैन (Daniel Goleman) के अनुसार जीवन की सफलता में बौद्धिक लब्धि (IQ) के अतिरिक्त किस भिन्नता की भूमिका अत्यंत महत्वपूर्ण होती है?',
    'According to Daniel Goleman, besides IQ, which individual difference plays a crucial role in life success?',
    ['संवेगात्मक बुद्धि (Emotional Intelligence - EQ)', 'Emotional Intelligence (EQ)'],
    [
      ['केवल शारीरिक बल', 'Purely physical strength'],
      ['रटकर याद करने की गति', 'Speed of rote memorization'],
      ['पैतृक संपत्ति', 'Inherited wealth'],
    ],
    'गोलमैन (1995) ने बताया कि आत्म-जागरूकता, आत्म-नियंत्रण, अभिप्रेरणा, समानुभूति और सामाजिक कौशल (EQ) जीवन व कार्यक्षेत्र में सफलता के प्रमुख निर्धारक हैं।',
    'Goleman (1995) highlighted self-awareness, self-regulation, motivation, empathy, and social skills (EQ) as vital determinants of success.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Emotional & Social Differences',
    '"संवेगात्मक बुद्धि" (Emotional Intelligence) शब्द का सर्वप्रथम वैज्ञानिक प्रयोग 1990 में किन दो मनोवैज्ञानिकों ने किया?',
    'Which two psychologists first formally introduced the term "Emotional Intelligence" in scientific literature in 1990?',
    ['पीटर सलोवे एवं जॉन मेयर', 'Peter Salovey and John Mayer'],
    [
      ['डैनियल गोलमैन एवं हावर्ड गार्डनर', 'Daniel Goleman and Howard Gardner'],
      ['अल्फ्रेड बिने एवं थियोडोर साइमन', 'Alfred Binet and Theodore Simon'],
      ['रॉबर्ट स्टर्नबर्ग एवं स्पीयरमैन', 'Robert Sternberg and Charles Spearman'],
    ],
    'पीटर सलोवे और जॉन मेयर ने 1990 में सर्वप्रथम संवेगात्मक बुद्धि की अवधारणा प्रस्तुत की; डैनियल गोलमैन ने 1995 में अपनी पुस्तक से इसे विश्वव्यापी लोकप्रिय बनाया।',
    'Peter Salovey and John Mayer coined and defined "Emotional Intelligence" in 1990, while Daniel Goleman popularized it in 1995.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'किसी कक्षा में छात्रों के बीच सामाजिक संबंधों, लोकप्रियता तथा अलग-थलग पड़े विद्यार्थियों की पहचान के लिए जे. एल. मोरेनो द्वारा विकसित विधि कौन-सी है?',
    'Which method developed by J. L. Moreno identifies social relationships, popularity, and isolated students in a classroom?',
    ['समाजमिति विधि (Sociometry)', 'Sociometry'],
    [
      ['मनोदैहिक विधि (Psychophysics)', 'Psychophysics'],
      ['अंतर्दर्शन विधि (Introspection)', 'Introspection'],
      ['प्रयोगात्मक विधि (Experimental Method)', 'Experimental Method'],
    ],
    'जैकब एल. मोरेनो ने समाजमिति (Sociometry) विकसित की, जिसमें समाजआलेख (Sociogram) द्वारा समूह में "स्टार" (लोकप्रिय) और "आइसोलेट" (एकाकी) छात्रों की पहचान होती है।',
    'Jacob L. Moreno developed Sociometry, using sociograms to map peer acceptance, stars, cliques, and social isolates in a group.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'वैयक्तिक भिन्नताओं को संबोधित करते समय "पियर ट्यूटरिंग" (Peer Tutoring / सहपाठी शिक्षण) क्यों प्रभावी माना जाता है?',
    'Why is "Peer Tutoring" considered effective in addressing individual differences?',
    ['क्योंकि समान आयु वर्ग के साथी सहज भाषा और भयमुक्त वातावरण में शंका समाधान कर सकते हैं', 'Because same-age peers can clarify doubts in relatable language in a low-anxiety setting'],
    [
      ['क्योंकि इससे शिक्षक को कक्षा में आने की आवश्यकता नहीं रहती', 'Because it eliminates the need for a teacher in class'],
      ['क्योंकि इससे कमजोर छात्रों को दंड देने में आसानी होती है', 'Because it makes punishing weak students easier'],
      ['क्योंकि इसमें किसी पाठ्यक्रम की आवश्यकता नहीं होती', 'Because it requires no curriculum'],
    ],
    'सहपाठी शिक्षण में पढ़ाने वाले और सीखने वाले दोनों छात्रों की अवधारणात्मक समझ सुदृढ़ होती है तथा सहयोगी व संकोच-रहित वातावरण बनता है।',
    'Peer tutoring reinforces understanding for both tutor and tutee while creating a supportive, non-threatening learning climate.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Causes of Differences',
    'थॉमस और चेस (Thomas & Chess) के प्रसिद्ध न्यूयॉर्क अनुदैर्ध्य अध्ययन के अनुसार शिशुओं में जन्मजात "स्वभाव" (Temperament) की मुख्य तीन श्रेणियाँ कौन-सी हैं?',
    'According to Thomas and Chess’s New York Longitudinal Study, what are the three primary infant temperament categories?',
    ['सरल (Easy), कठिन (Difficult) एवं धीमी गति से घुलने-मिलने वाले (Slow-to-warm-up)', 'Easy, Difficult, and Slow-to-warm-up'],
    [
      ['अंतर्मुखी, बहिर्मुखी एवं तार्किक', 'Introvert, Extrovert, and Logical'],
      ['सुरक्षित, असुरक्षित एवं विघटित', 'Secure, Insecure, and Disorganized'],
      ['स्थिर, अस्थिर एवं आक्रामक', 'Stable, Unstable, and Aggressive'],
    ],
    'एलेक्जेंडर थॉमस और स्टेला चेस ने जन्म से ही बच्चों में वैयक्तिक भिन्नता दर्शाने वाली तीन स्वभाव श्रेणियाँ बताईं: Easy (~40%), Difficult (~10%), और Slow-to-warm-up (~15%)।',
    'Thomas and Chess identified three foundational temperament clusters visible from infancy: Easy, Difficult, and Slow-to-warm-up.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    'व्यक्तित्व में वैयक्तिक भिन्नताओं के मापन में "बिग फाइव" (Big Five / OCEAN) मॉडल के पाँच कारक कौन-से हैं?',
    'What are the five factors in the "Big Five" (OCEAN) model of individual personality differences?',
    ['खुलापन, कर्तव्यनिष्ठा, बहिर्मुखता, सहमतता एवं तंत्रिकातापिता', 'Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism'],
    [
      ['बुद्धि, स्मृति, ध्यान, चिंतन एवं संवेग', 'Intelligence, Memory, Attention, Thinking, and Emotion'],
      ['सत्य, अहिंसा, अस्तेय, ब्रह्मचर्य एवं अपरिग्रह', 'Truth, Non-violence, Non-stealing, Celibacy, and Non-possession'],
      ['अवसर, क्षमता, रुचि, मूल्य एवं आदत', 'Opportunity, Ability, Interest, Value, and Habit'],
    ],
    'कोस्टा और मैक्रे के OCEAN मॉडल में O=Openness to experience, C=Conscientiousness, E=Extraversion, A=Agreeableness, N=Neuroticism शामिल हैं।',
    'Costa and McCrae’s OCEAN model comprises Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    '"यूनिवर्सल डिज़ाइन फॉर लर्निंग" (UDL) कक्षा में वैयक्तिक भिन्नताओं को किस प्रकार संबोधित करता है?',
    'How does "Universal Design for Learning" (UDL) address individual differences in the classroom?',
    ['प्रतिनिधित्व, अभिव्यक्ति और जुड़ाव के बहु-विकल्प पहले से ही पाठ्यक्रम में शामिल करके', 'By proactively building multiple means of representation, expression, and engagement into curriculum'],
    [
      ['प्रत्येक छात्र के लिए पूरी तरह अलग विद्यालय बनाकर', 'By building completely separate schools for each student'],
      ['केवल परीक्षा के दिन अतिरिक्त समय देकर', 'Only by offering extra time on exam day'],
      ['सारी शिक्षण सामग्री केवल ऑडियो रूप में रखकर', 'By keeping all learning material strictly in audio format'],
    ],
    'UDL के तीन सिद्धांत हैं: Multiple Means of Representation (जानकारी देने के विविध रूप), Action & Expression (अभिव्यक्ति के विविध तरीके) और Engagement (रुचि जगाने के विविध उपाय)।',
    'UDL proactively supports learner variability through Multiple Means of Representation, Action & Expression, and Engagement.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Cognitive Abilities',
    'रॉबर्ट स्टर्नबर्ग के त्रितंत्रीय सिद्धांत (Triarchic Theory) के अनुसार बुद्धि में कौन-से तीन प्रकार की व्यक्तिगत क्षमताएँ भिन्न हो सकती हैं?',
    'According to Robert Sternberg’s Triarchic Theory, which three types of individual intellectual abilities can vary?',
    ['विश्लेषणात्मक, सृजनात्मक एवं व्यावहारिक बुद्धि', 'Analytical, Creative, and Practical intelligence'],
    [
      ['मौखिक, संख्यात्मक एवं यांत्रिक बुद्धि', 'Verbal, Numerical, and Mechanical intelligence'],
      ['तरल, ठोस एवं सामाजिक बुद्धि', 'Fluid, Crystallized, and Social intelligence'],
      ['मूर्त, अमूर्त एवं संवेगात्मक बुद्धि', 'Concrete, Abstract, and Emotional intelligence'],
    ],
    'स्टर्नबर्ग (1985) के त्रितंत्रीय सिद्धांत के तीन घटक हैं: विश्लेषणात्मक (घटकीय), सृजनात्मक (आनुभविक) और व्यावहारिक (संदर्भात्मक या street-smart)।',
    'Sternberg’s Triarchic Theory identifies Analytical (componential), Creative (experiential), and Practical (contextual) intelligence.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Cognitive Abilities',
    'रेमंड कैटेल द्वारा प्रतिपादित "तरल बुद्धि" (Fluid Intelligence) और "ठोस बुद्धि" (Crystallized Intelligence) में से किस पर आयु व शिक्षा के साथ वृद्धि देखी जाती है?',
    'Between Raymond Cattell’s "Fluid Intelligence" and "Crystallized Intelligence", which continues to grow with age, culture, and education?',
    ['ठोस बुद्धि (Crystallized Intelligence)', 'Crystallized Intelligence'],
    [
      ['तरल बुद्धि (Fluid Intelligence)', 'Fluid Intelligence'],
      ['दोनों जन्म के तुरंत बाद घटने लगती हैं', 'Both decline immediately after birth'],
      ['दोनों केवल 5 वर्ष की आयु तक सीमित रहती हैं', 'Both are limited only up to age 5'],
    ],
    'तरल बुद्धि (नए तर्क व गति) जैविक होती है और युवावस्था के बाद धीरे-धीरे कम हो सकती है, जबकि ठोस बुद्धि (अर्जित ज्ञान, शब्दावली, अनुभव) जीवन भर बढ़ती रहती है।',
    'Fluid intelligence (abstract novel reasoning) peaks in early adulthood, whereas Crystallized intelligence (accumulated knowledge and skills) grows throughout life.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'कंप्यूटर-सहायक अनुदेशन (CAI) वैयक्तिक भिन्नताओं वाले शिक्षार्थियों की किस प्रकार मदद करता है?',
    'How does Computer-Assisted Instruction (CAI) help learners with individual differences?',
    ['तत्काल प्रतिपुष्टि, स्व-गति अभ्यास और इंटरैक्टिव मल्टीमीडिया प्रदान करके', 'By providing immediate feedback, self-paced practice, and interactive multimedia'],
    [
      ['शिक्षक और छात्र के बीच मानवीय संवाद पूरी तरह बंद करके', 'By eliminating all human interaction between teacher and student'],
      ['सभी छात्रों को एक साथ एक ही गति से चलाने के लिए बाध्य करके', 'By forcing all students to move at the exact same speed'],
      ['केवल टाइपिंग की गति बढ़ाने पर केंद्रित रहकर', 'By focusing solely on increasing typing speed'],
    ],
    'CAI में प्रत्येक विद्यार्थी अपनी आवश्यकतानुसार पाठ दोहरा सकता है, तुरंत सही/गलत की जानकारी पा सकता है और दृश्य-श्रव्य माध्यम से सीख सकता है।',
    'CAI allows learners to repeat modules, move at their own pace, receive instant feedback, and engage with multimodal content.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    '"वैयक्तिक भिन्नताओं को पूर्ण रूप से समाप्त करना शिक्षा का उद्देश्य नहीं है, बल्कि प्रत्येक बालक की अधिकतम संभावनाओं को विकसित करना है।" यह दृष्टिकोण किस दर्शन से मेल खाता है?',
    '"Education does not aim to eliminate individual differences, but to develop each child’s fullest potential." Which educational philosophy aligns with this view?',
    ['प्रगतिशील एवं लोकतांत्रिक शिक्षा दर्शन', 'Progressive and democratic philosophy of education'],
    [
      ['अधिनायकवादी एवं यांत्रिक शिक्षा दर्शन', 'Authoritarian and mechanistic philosophy'],
      ['कठोर मानकीकरण दर्शन', 'Rigid standardization philosophy'],
      ['अभिजात्यवादी बहिष्करण दर्शन', 'Elitist exclusionary philosophy'],
    ],
    'लोकतांत्रिक व प्रगतिशील शिक्षा मानती है कि समान अवसर का अर्थ एक जैसा ढाँचा थोपना नहीं, बल्कि हर विद्यार्थी को उसकी विशिष्ट प्रतिभा निखारने का अवसर देना है।',
    'Progressive democratic education holds that equality of opportunity means nurturing each learner’s distinct potential rather than imposing uniformity.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'किसी कक्षा में बहुभाषी पृष्ठभूमि वाले बच्चों की भाषाई भिन्नता को शिक्षक को किस रूप में देखना चाहिए?',
    'How should a teacher view linguistic diversity among children from multilingual backgrounds in a classroom?',
    ['एक समृद्ध संसाधन और संज्ञानात्मक संपत्ति के रूप में', 'As a rich pedagogical resource and cognitive asset'],
    [
      ['अधिगम के मार्ग की एक गंभीर बाधा के रूप में', 'As a severe obstacle to learning'],
      ['अनुशासनहीनता के कारण के रूप में', 'As a cause of indiscipline'],
      ['तुरंत समाप्त किए जाने वाले दोष के रूप में', 'As a defect to be eradicated immediately'],
    ],
    'एनसीएफ-2005 और एनईपी-2020 के अनुसार बहुभाषिकता संज्ञानात्मक लचीलापन बढ़ाती है और इसे कक्षा में संसाधन के रूप में उपयोग किया जाना चाहिए।',
    'NCF-2005 and NEP-2020 emphasize that multilingualism enhances cognitive flexibility and should be leveraged as a classroom resource.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'एक शिक्षक विद्यार्थियों के बीच वैयक्तिक भिन्नताओं का पता लगाने के लिए किन साधनों का उपयोग कर सकता है?',
    'Which tools can a teacher use to systematically identify individual differences among students?',
    ['बुद्धि परीक्षण, उपलब्धि परीक्षण, संचयी अभिलेख एवं सतत अवलोकन', 'Intelligence tests, achievement tests, cumulative records, and continuous observation'],
    [
      ['केवल छात्रों के माता-पिता की आय का प्रमाणपत्र', 'Only parents’ income certificates'],
      ['केवल एक दिन की मौखिक हाजिरी', 'Only a single day’s oral attendance'],
      ['छात्रों के जूते का नाप और जन्म कुंडली', 'Students’ shoe size and horoscope'],
    ],
    'मनोवैज्ञानिक परीक्षणों, पोर्टफोलियो, संचयी अभिलेख (Cumulative Record) और व्यवस्थित अवलोकन से शिक्षक छात्रों की रुचियों, क्षमताओं व कठिनाइयों को जान सकता है।',
    'Teachers identify learner differences accurately using psychological/achievement tests, portfolios, cumulative records, and systematic observation.',
    'EASY'
  ),
  q(
    'Individual Differences',
    'Special Learners',
    'विशिष्ट आवश्यकताओं वाले बच्चों (CWSN) के लिए तैयार की जाने वाली "व्यक्तिगत शिक्षा योजना" (IEP - Individualized Education Program) किस सिद्धांत पर आधारित है?',
    'An "Individualized Education Program" (IEP) prepared for Children With Special Needs (CWSN) is based on which principle?',
    ['प्रत्येक बालक की अद्वितीय शक्तियों और आवश्यकताओं के अनुरूप लक्षित योजना', 'Tailored goal-setting matched to each child’s unique strengths and needs'],
    [
      ['पूरे जिले के लिए एक ही लक्ष्य निर्धारित करना', 'Setting one identical target for the entire district'],
      ['बच्चे को केवल चिकित्सा उपचार तक सीमित रखना', 'Limiting the child solely to medical treatment'],
      ['अभिभावकों को निर्णय प्रक्रिया से बाहर रखना', 'Excluding parents from the decision-making process'],
    ],
    'IEP एक लिखित, बहु-विषयक योजना है जिसमें माता-पिता और शिक्षकों के सहयोग से विशिष्ट बालक के लिए यथार्थवादी अल्पकालिक व दीर्घकालिक लक्ष्य तय किए जाते हैं।',
    'An IEP is a customized, collaborative written plan created with teachers, specialists, and parents to set measurable goals for a child’s unique needs.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Concept & History',
    'अल्फ्रेड बिने और थियोडोर साइमन ने 1905 में प्रथम व्यावहारिक बुद्धि परीक्षण क्यों निर्मित किया था?',
    'Why did Alfred Binet and Theodore Simon create the first practical intelligence test in 1905?',
    ['पेरिस के विद्यालयों में उन बालकों की पहचान करने हेतु जिन्हें विशेष शैक्षिक सहायता की आवश्यकता थी', 'To identify children in Paris schools who needed special educational assistance'],
    [
      ['सेना में अधिकारियों की भर्ती करने हेतु', 'To recruit officers in the military'],
      ['प्रतिभाशाली खिलाड़ियों का चयन करने हेतु', 'To select talented athletes'],
      ['वयस्कों के व्यक्तित्व विकार जानने हेतु', 'To diagnose adult personality disorders'],
    ],
    'फ्रांस के शिक्षा मंत्रालय के अनुरोध पर बिने और साइमन ने 1905 में पहला बुद्धि पैमाना बनाया ताकि सीखने में कठिनाई वाले बच्चों की पहचान कर उन्हें विशेष सहायता मिल सके।',
    'At the request of the French Ministry of Education, Binet and Simon created their 1905 scale to identify students needing remedial schooling.',
    'MEDIUM'
  ),
  q(
    'Individual Differences',
    'Measurement & Statistics',
    '"मानसिक आयु" (Mental Age) का संप्रत्यय 1908 में किसने प्रस्तुत किया और "बुद्धि लब्धि" (IQ) का सूत्र सर्वप्रथम किसने सुझाया?',
    'Who introduced the concept of "Mental Age" in 1908, and who first proposed the ratio concept of "IQ"?',
    ['क्रमशः अल्फ्रेड बिने एवं विलियम स्टर्न', 'Alfred Binet and William Stern, respectively'],
    [
      ['क्रमशः टर्मन एवं कैटेल', 'Terman and Cattell, respectively'],
      ['क्रमशः गाल्टन एवं स्पीयरमैन', 'Galton and Spearman, respectively'],
      ['क्रमशः वेक्स्लर एवं थॉर्नडाइक', 'Wechsler and Thorndike, respectively'],
    ],
    '1908 में अल्फ्रेड बिने ने मानसिक आयु (MA) की अवधारणा दी; 1912 में जर्मन मनोवैज्ञानिक विलियम स्टर्न ने MA/CA का विचार दिया और 1916 में टर्मन ने ×100 जोड़ा।',
    'Alfred Binet introduced Mental Age (1908); William Stern proposed the MA/CA ratio (1912), and Lewis Terman multiplied it by 100 in 1916.',
    'HARD'
  ),
  q(
    'Individual Differences',
    'Educational Implications',
    'यदि एक छात्र का शारीरिक, संवेगात्मक और बौद्धिक विकास उसकी कक्षा के औसत से भिन्न है, तो "समावेशी शिक्षा" (Inclusive Education) क्या अनुशंसा करती है?',
    'If a student’s physical, emotional, or intellectual profile differs from the class average, what does "Inclusive Education" recommend?',
    ['विद्यालय प्रणाली और शिक्षण विधियों को बच्चे की आवश्यकता के अनुरूप बदलना', 'Adapting the school system and teaching methods to fit the child’s needs'],
    [
      ['बच्चे को तब तक अयोग्य मानना जब तक वह प्रणाली के अनुरूप न हो जाए', 'Deeming the child unfit until they conform to the rigid system'],
      ['उसे केवल विशेष आवासीय संस्थान में भेजना', 'Sending the child exclusively to a segregated residential center'],
      ['उसे मूल्यांकन प्रक्रिया से पूरी तरह हटा देना', 'Removing the child entirely from any assessment'],
    ],
    'समावेशी शिक्षा (एकीकृत शिक्षा से आगे बढ़कर) मानती है कि व्यवस्था में परिवर्तन किया जाए—न कि बच्चे में—ताकि विविधता वाले सभी बच्चे साथ सीख सकें।',
    'Inclusive education shifts the focus from changing the child to transforming curricula, environments, and pedagogy so all learners thrive together.',
    'EASY'
  ),

  // =========================================================================
  // 2. बाल विकास की अवस्थाएँ व सिद्धांत (Stages & Principles of Development) — 105 Questions (Part A: 76-140)
  // =========================================================================
  q(
    'Stages of Child Development',
    'Growth vs Development',
    '"वृद्धि" (Growth) और "विकास" (Development) के बीच सबसे प्रमुख अंतर क्या है?',
    'What is the most fundamental distinction between "Growth" and "Development"?',
    ['वृद्धि मुख्यतः मात्रात्मक और परिमाणात्मक होती है, जबकि विकास गुणात्मक और मात्रात्मक दोनों है', 'Growth is primarily quantitative and measurable, whereas development is both qualitative and quantitative'],
    [
      ['वृद्धि जीवन भर चलती है जबकि विकास 18 वर्ष पर रुक जाता है', 'Growth continues lifelong while development stops at 18'],
      ['वृद्धि का मापन संभव नहीं है जबकि विकास का इंच व किलो में मापन होता है', 'Growth cannot be measured whereas development is measured in inches and kilograms'],
      ['वृद्धि केवल मानसिक होती है और विकास केवल शारीरिक', 'Growth is purely mental and development is purely physical'],
    ],
    'वृद्धि कोशिकीय व संरचनात्मक परिवर्तन (लंबाई, भार) तक सीमित है और परिपक्वता पर रुक जाती है; विकास जन्म से मृत्यु तक चलने वाली व्यापक, गुणात्मक व कार्यात्मक प्रक्रिया है।',
    'Growth refers to structural/quantitative increases (height, weight) that plateau at maturity, whereas development encompasses lifelong qualitative and functional changes.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Growth vs Development',
    '"विकास अभिवृद्धि तक सीमित नहीं है। इसके बजाय इसमें परिपक्वता के लक्ष्य की ओर परिवर्तनों का प्रगतिशील क्रम निहित रहता है।" यह प्रसिद्ध कथन किसका है?',
    '"Development is not limited to growing larger. Instead, it consists of a progressive series of changes toward the goal of maturity." Whose statement is this?',
    ['एलिजाबेथ हरलॉक', 'Elizabeth Hurlock'],
    [
      ['जे. एस. रॉस', 'J. S. Ross'],
      ['विलियम वुडवर्थ', 'Robert Woodworth'],
      ['जेम्स ड्रेवर', 'James Drever'],
    ],
    'एलिजाबेथ हरलॉक ने अपनी प्रसिद्ध पुस्तक "Developmental Psychology" में विकास को परिपक्वता की ओर बढ़ने वाले व्यवस्थित, प्रगतिशील परिवर्तनों की श्रृंखला बताया।',
    'Elizabeth Hurlock defined development as a progressive series of orderly, coherent changes leading toward the goal of maturity.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Growth vs Development',
    'फ्रैंक (Frank) के अनुसार "कोशिकीय गुणात्मक वृद्धि" मुख्यतः किस पद को व्यक्त करती है?',
    'According to Frank, "cellular multiplication" primarily refers to which concept?',
    ['अभिवृद्धि (Growth)', 'Growth'],
    [
      ['समाजीकरण (Socialization)', 'Socialization'],
      ['अनुकूलन (Adaptation)', 'Adaptation'],
      ['संरक्षण (Conservation)', 'Conservation'],
    ],
    'फ्रैंक ने कोशिकाओं के आकार और संख्या में होने वाले परिवर्तन को अभिवृद्धि (Growth) कहा, जो मुख्यतः जैविक व मात्रात्मक होता है।',
    'Frank described growth as the multiplication and enlargement of cells, reflecting a primarily biological and quantitative process.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'एक शिशु पहले अपने सिर और गर्दन पर नियंत्रण प्राप्त करता है, फिर धड़ पर और अंत में पैरों के सहारे चलना सीखता है। यह किस विकासात्मक सिद्धांत को दर्शाता है?',
    'An infant gains control over the head and neck first, then the trunk, and finally the legs to walk. Which developmental principle does this illustrate?',
    ['शीर्षगामी विकास सिद्धांत (Cephalocaudal Principle)', 'Cephalocaudal Principle'],
    [
      ['समीप-दूराभिमुख सिद्धांत (Proximodistal Principle)', 'Proximodistal Principle'],
      ['परस्पर संबंध का सिद्धांत (Principle of Interrelation)', 'Principle of Interrelation'],
      ['प्रत्यावर्तन का सिद्धांत (Principle of Regression)', 'Principle of Regression'],
    ],
    'शीर्षगामी (Cephalocaudal) सिद्धांत के अनुसार शारीरिक व गामक विकास सिर से पैर (ऊपर से नीचे) की दिशा में होता है।',
    'The cephalocaudal principle states that physical and motor development proceeds from the head downward toward the feet.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'बालक पहले पूरे हाथ से किसी वस्तु को पकड़ने का प्रयास करता है और बाद में उंगलियों तथा अंगूठे से पेंसिल पकड़ना सीखता है। यह किन दो सिद्धांतों का उदाहरण है?',
    'A child first grabs an object using the whole arm/palm and later learns to hold a pencil using thumb and fingers. Which principles does this exemplify?',
    ['समीप-दूराभिमुख तथा सामान्य से विशिष्ट की ओर विकास', 'Proximodistal and General-to-Specific development'],
    [
      ['विशिष्ट से सामान्य की ओर विकास', 'Specific-to-General development'],
      ['पैर से सिर की ओर विकास', 'Feet-to-head development'],
      ['केवल आनुवंशिक उत्परिवर्तन', 'Purely genetic mutation'],
    ],
    'केंद्र (रीढ़/भुजा) से परिधि (उंगलियों) की ओर बढ़ना समीप-दूराभिमुख (Proximodistal) और स्थूल से सूक्ष्म कौशल की ओर बढ़ना सामान्य से विशिष्ट की ओर का सिद्धांत है।',
    'Control moving from the center of the body outward (arm to fingers) illustrates the proximodistal and general-to-specific principles.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'विकास की गति के संदर्भ में "विकास वर्तुलाकार होता है, न कि रेखीय" (Spiral, not Linear) का क्या अर्थ है?',
    'Regarding the pace of development, what does "Development is spiral, not linear" mean?',
    ['विकास एक समान सीधा न चलकर कभी तीव्र होता है और कभी ठहरकर मजबूती ग्रहण करता है', 'Development does not proceed at a uniform straight pace; it alternates between rapid spurts and consolidation plateaus'],
    [
      ['बालक केवल गोल-गोल घूमकर चलना सीखता है', 'A child learns to walk only in circles'],
      ['विकास वृद्धावस्था में पुनः शिशु अवस्था में लौट आता है', 'Development literally reverses back to infancy in old age'],
      ['प्रत्येक वर्ष ऊँचाई ठीक बराबर इंच बढ़ती है', 'Height increases by the exact same inches every year'],
    ],
    'विकास सीधी रेखा में एक ही गति से आगे नहीं बढ़ता, बल्कि कुछ समय तीव्र वृद्धि के बाद थोड़ा ठहराव लेकर अर्जित क्षमताओं को सुदृढ़ (Consolidate) करता है।',
    'Development does not advance at a constant straight rate; periods of rapid progression alternate with consolidation phases.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'यदि किसी बालक का शारीरिक स्वास्थ्य बहुत कमजोर हो, तो उसका संवेगात्मक और संज्ञानात्मक विकास भी प्रभावित हो सकता है। यह किस सिद्धांत की पुष्टि करता है?',
    'If a child’s physical health is poor, their emotional and cognitive development may also suffer. Which developmental principle does this confirm?',
    ['विकास के विभिन्न पक्षों के परस्पर संबंध का सिद्धांत', 'Principle of Interrelation among developmental domains'],
    [
      ['विकास की अनियमितता का सिद्धांत', 'Principle of irregularity'],
      ['स्वतंत्र विकास सिद्धांत', 'Principle of complete domain independence'],
      ['असतत चरण सिद्धांत', 'Principle of discontinuous isolation'],
    ],
    'शारीरिक, मानसिक, सामाजिक और संवेगात्मक विकास एक-दूसरे से जुड़े हुए हैं; एक क्षेत्र में सकारात्मक या नकारात्मक परिवर्तन अन्य क्षेत्रों को भी प्रभावित करता है।',
    'Physical, cognitive, social, and emotional domains are interconnected; progress or setback in one domain influences the others.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'विकास के "एकीकरण का सिद्धांत" (Principle of Integration) से क्या तात्पर्य है?',
    'What is meant by the "Principle of Integration" in child development?',
    ['बालक पहले अलग-अलग अंगों का प्रयोग सीखता है और फिर उन्हें समन्वित करके एक साथ उपयोग करता है', 'The child first learns to control separate parts and then integrates them into coordinated whole actions'],
    [
      ['सभी छात्रों को एक ही परीक्षा में बैठाना', 'Putting all students into one exam'],
      ['केवल भाषा और गणित को एक साथ पढ़ाना', 'Teaching only language and math together'],
      ['शारीरिक अंगों का आपस में जुड़ जाना', 'Physical fusion of limbs'],
    ],
    'उदाहरण के लिए साइकिल चलाने या लिखने में बालक आँख, हाथ, उंगलियों और संतुलन की अलग-अलग क्रियाओं को एकीकृत कर एक कुशल व्यवहार में बदलता है।',
    'Integration occurs when separate sub-skills (e.g., eye focus, finger grip, wrist movement) combine into a unified, coordinated skill like writing.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    '"विकास की भविष्यवाणी की जा सकती है" (Development is Predictable) सिद्धांत का क्या आधार है?',
    'What is the basis of the principle that "Development is Predictable"?',
    ['मानव विकास एक निश्चित क्रम और पैटर्न का अनुसरण करता है', 'Human development follows an orderly sequence and universal pattern'],
    [
      ['ज्योतिषीय गणना द्वारा बालक का भविष्य पता चलता है', 'Astrological charts predict a child’s future'],
      ['हर बालक एक ही तारीख को बोलना शुरू करता है', 'Every child begins speaking on the exact same date'],
      ['विकास में वातावरण का कोई योगदान नहीं होता', 'Environment plays no role in development'],
    ],
    'जैसे हर सामान्य शिशु पहले बैठना, फिर घुटनों के बल चलना, फिर खड़ा होना और तब चलना सीखता है; कलाई की हड्डियों के एक्स-रे से वयस्क ऊँचाई का अनुमान भी लगाया जा सकता है।',
    'Because developmental milestones follow a regular sequence across humans, patterns (like motor progression or skeletal maturity) can be reasonably predicted.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'निम्नलिखित में से कौन-सा कथन बाल विकास के सिद्धांतों के संदर्भ में असत्य है?',
    'Which of the following statements is INCORRECT regarding the principles of child development?',
    ['सभी बालकों में विकास की दर जन्म से मृत्यु तक बिल्कुल एक समान होती है', 'The rate of development is strictly identical across all children from birth to death'],
    [
      ['विकास निरंतर चलने वाली प्रक्रिया है', 'Development is a continuous process'],
      ['विकास आनुवंशिकता और वातावरण का गुणनफल है', 'Development is a product of heredity and environment'],
      ['विकास में वैयक्तिक भिन्नताएँ पाई जाती हैं', 'Individual differences exist in development'],
    ],
    'यद्यपि विकास का क्रम सभी में समान होता है, परंतु विकास की गति (दर) प्रत्येक बालक में भिन्न-भिन्न होती है और विभिन्न अवस्थाओं में भी बदलती रहती है।',
    'While the sequence of development is largely universal, the rate of development varies significantly across individuals and across stages.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Prenatal Stage',
    'गर्भकालीन विकास (Prenatal Development) की तीन प्रमुख अवस्थाओं का सही कालानुक्रमिक क्रम क्या है?',
    'What is the correct chronological sequence of the three major stages of Prenatal Development?',
    ['बीजावस्था (Germinal) → भ्रूणावस्था (Embryonic) → गर्भस्थ शिशु अवस्था (Fetal)', 'Germinal → Embryonic → Fetal'],
    [
      ['भ्रूणावस्था → बीजावस्था → गर्भस्थ शिशु अवस्था', 'Embryonic → Germinal → Fetal'],
      ['गर्भस्थ शिशु अवस्था → बीजावस्था → भ्रूणावस्था', 'Fetal → Germinal → Embryonic'],
      ['बीजावस्था → गर्भस्थ शिशु अवस्था → भ्रूणावस्था', 'Germinal → Fetal → Embryonic'],
    ],
    'गर्भधारण से 2 सप्ताह तक बीजावस्था (Zygote/Germinal), 2 से 8 सप्ताह तक भ्रूणावस्था (Embryonic—मुख्य अंगों का निर्माण) तथा 9वें सप्ताह से जन्म तक गर्भस्थ शिशु (Fetal) अवस्था होती है।',
    'Prenatal development progresses from Germinal (0–2 weeks), to Embryonic (2–8 weeks, major organogenesis), to Fetal (9 weeks to birth).',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Prenatal Stage',
    'गर्भकालीन विकास की किस अवस्था में टेराटोजेन्स (Teratogens—जैसे नशीली दवाएँ, संक्रमण, विकिरण) का सर्वाधिक विनाशकारी प्रभाव अंग-निर्माण पर पड़ता है?',
    'During which prenatal stage do teratogens (drugs, infections, radiation) cause the greatest structural damage to organogenesis?',
    ['भ्रूणावस्था (2 से 8 सप्ताह)', 'Embryonic stage (2 to 8 weeks)'],
    [
      ['गर्भस्थ शिशु अवस्था के अंतिम सप्ताह', 'Final weeks of the fetal stage'],
      ['निषेचन के पहले दिन', 'First day of fertilization only'],
      ['जन्म के 6 माह पश्चात्', '6 months after birth'],
    ],
    'भ्रूणावस्था (2–8 सप्ताह) में हृदय, मस्तिष्क, आँख और अंगों की आधारशिला (Organogenesis) बनती है, अतः यह काल बाहरी हानिकारक तत्वों के प्रति सर्वाधिक संवेदनशील होता है।',
    'Major organs form rapidly during the embryonic period (weeks 2–8), making it the most vulnerable window for structural birth defects from teratogens.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Prenatal Stage',
    'मानव शरीर के आधारभूत विकास के दौरान गर्भाधान से जन्म तक की सामान्य अवधि लगभग कितनी मानी जाती है?',
    'What is the normal duration of human prenatal development from conception to birth?',
    ['लगभग 280 दिन (40 सप्ताह या 9 माह 10 दिन)', 'Approximately 280 days (40 weeks or ~9 months)'],
    [
      ['लगभग 180 दिन (6 माह)', 'Approximately 180 days (6 months)'],
      ['लगभग 365 दिन (12 माह)', 'Approximately 365 days (12 months)'],
      ['लगभग 120 दिन (4 माह)', 'Approximately 120 days (4 months)'],
    ],
    'मनुष्य में सामान्य गर्भावधि निषेचन से जन्म तक लगभग 266–280 दिन (लगभग 38–40 सप्ताह) मानी जाती है।',
    'Normal human gestation lasts approximately 280 days (40 weeks from last menstrual period, ~266 days from conception).',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'वैलेंटाइन (Valentine) ने विकास की किस अवस्था को "सीखने का आदर्श काल" (Ideal Period of Learning) कहा है?',
    'Which stage of development did Valentine describe as the "Ideal Period of Learning"?',
    ['शैशवावस्था (Infancy)', 'Infancy'],
    [
      ['किशोरावस्था (Adolescence)', 'Adolescence'],
      ['उत्तर बाल्यावस्था (Late Childhood)', 'Late Childhood'],
      ['प्रौढ़ावस्था (Adulthood)', 'Adulthood'],
    ],
    'सी. डब्ल्यू. वैलेंटाइन ने शैशवावस्था (0–5/6 वर्ष) में शिशु की अत्यधिक जिज्ञासा और तीव्र ग्रहणशीलता को देखते हुए इसे "सीखने का आदर्श काल" कहा।',
    'C. W. Valentine termed infancy (early childhood up to 5–6 years) the "ideal period of learning" due to rapid brain growth and curiosity.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    '"मनुष्य को जो कुछ बनना होता है, प्रारंभ के चार-पाँच वर्षों में ही बन जाता है"—यह प्रसिद्ध कथन किस मनोवैज्ञानिक का है?',
    '"Whatever a human being is to become is largely formed in the first four to five years of life"—who made this famous statement?',
    ['सिगमंड फ्रायड', 'Sigmund Freud'],
    [
      ['जीन पियाजे', 'Jean Piaget'],
      ['एरिक एरिकसन', 'Erik Erikson'],
      ['स्टेनले हॉल', 'G. Stanley Hall'],
    ],
    'सिगमंड फ्रायड का मानना था कि प्रारंभिक 4–5 वर्षों के अनुभव और पारिवारिक संबंध व्यक्ति के भावी व्यक्तित्व की नींव रख देते हैं।',
    'Sigmund Freud emphasized that foundational personality structures are largely shaped during the first four to five years of life.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'जन्म के समय नवजात शिशु के गाल को हल्के से छूने पर वह अपना सिर उसी ओर घुमाकर मुँह खोलता है। यह कौन-सी सहज क्रिया (Reflex) है?',
    'When a newborn’s cheek is gently stroked, the baby turns its head toward that side and opens its mouth. Which reflex is this?',
    ['रूटिंग प्रतिक्षेप (Rooting Reflex)', 'Rooting Reflex'],
    [
      ['मोरो प्रतिक्षेप (Moro Reflex)', 'Moro Reflex'],
      ['बाबिन्स्की प्रतिक्षेप (Babinski Reflex)', 'Babinski Reflex'],
      ['टॉनिक नेक प्रतिक्षेप (Tonic Neck Reflex)', 'Tonic Neck Reflex'],
    ],
    'रूटिंग रिफ्लेक्स नवजात को स्तन या बोतल ढूँढने में मदद करता है और लगभग 4 माह की आयु तक स्वतः समाप्त हो जाता है।',
    'The rooting reflex helps the newborn locate the nipple for feeding and typically disappears around 4 months of age.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'अचानक तेज आवाज होने या सहारा छूटने पर नवजात शिशु अपने दोनों हाथ बाहर की ओर फैलाता है और फिर भीतर समेट लेता है। इसे क्या कहते हैं?',
    'Upon a sudden loud sound or loss of support, a newborn flings its arms outward and then pulls them back in. What is this reflex called?',
    ['मोरो प्रतिक्षेप (Moro / Startle Reflex)', 'Moro Reflex'],
    [
      ['पामर ग्रास्प प्रतिक्षेप (Palmar Grasp Reflex)', 'Palmar Grasp Reflex'],
      ['रूटिंग प्रतिक्षेप (Rooting Reflex)', 'Rooting Reflex'],
      ['स्टेपिंग प्रतिक्षेप (Stepping Reflex)', 'Stepping Reflex'],
    ],
    'मोरो रिफ्लेक्स (Startle Reflex) शिशु की सुरक्षात्मक प्रतिक्रिया है, जो लगभग 4 से 6 माह की उम्र तक समाप्त हो जाती है।',
    'The Moro (startle) reflex is an innate protective response in newborns that normally integrates and disappears around 4–6 months.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'नवजात शिशु के पैर के तलवे को एड़ी से अंगूठे की ओर सहलाने पर पैर की उंगलियाँ पंखे की तरह फैल जाती हैं। यह कौन-सा प्रतिक्षेप है?',
    'When the sole of a newborn’s foot is stroked from heel toward toes, the toes fan outward. Which reflex is this?',
    ['बाबिन्स्की प्रतिक्षेप (Babinski Reflex)', 'Babinski Reflex'],
    [
      ['रूटिंग प्रतिक्षेप (Rooting Reflex)', 'Rooting Reflex'],
      ['मोरो प्रतिक्षेप (Moro Reflex)', 'Moro Reflex'],
      ['सकिंग प्रतिक्षेप (Sucking Reflex)', 'Sucking Reflex'],
    ],
    'शिशुओं में बाबिन्स्की प्रतिक्षेप सामान्य माना जाता है और 1 से 2 वर्ष की आयु के बीच समाप्त हो जाता है (वयस्कों में इसका होना तंत्रिका क्षति का संकेत होता है)।',
    'The Babinski reflex is normal in infants and typically disappears by 12–24 months; persistence in adults indicates neurological pathology.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'कैथरीन ब्रिजेस (Katharine Bridges) के अनुसार जन्म के समय शिशु में कौन-सा एकमात्र मूल संवेग विद्यमान होता है?',
    'According to Katharine Bridges, which single generalized emotion is present in an infant at birth?',
    ['सामान्य उत्तेजना (General Excitement)', 'General Excitement'],
    [
      ['ईर्ष्या एवं ग्लानि', 'Jealousy and Guilt'],
      ['गौरव एवं लज्जा', 'Pride and Shame'],
      ['तर्कसंगत क्रोध एवं देशभक्ति', 'Rational Anger and Patriotism'],
    ],
    'ब्रिजेस (1932) के अनुसार जन्म के समय शिशु में केवल अस्पष्ट "उत्तेजना" होती है, जिससे 3 माह में कष्ट व आनंद तथा 2 वर्ष तक भय, क्रोध, ईर्ष्या आदि संवेग विभेदित होते हैं।',
    'Bridges (1932) found that newborns show only undifferentiated excitement, which differentiates into distress/delight by 3 months and distinct emotions by age 2.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'जे. बी. वाटसन ने शिशुओं में जन्म से ही पाए जाने वाले किन तीन मूल संवेगों की पहचान की थी?',
    'Which three basic innate emotions did J. B. Watson identify in infants?',
    ['भय, क्रोध एवं प्रेम (Fear, Anger, Love)', 'Fear, Anger, and Love'],
    [
      ['ईर्ष्या, घृणा एवं शर्म', 'Jealousy, Disgust, and Shame'],
      ['आश्चर्य, उदासी एवं अपराधबोध', 'Surprise, Sadness, and Guilt'],
      ['गर्व, निराशा एवं सहानुभूति', 'Pride, Despair, and Sympathy'],
    ],
    'व्यवहारवाद के जनक जे. बी. वाटसन ने "लिटिल अल्बर्ट" जैसे प्रयोगों व शिशु अवलोकन के आधार पर भय, क्रोध और प्रेम (स्नेह) को तीन मूल जन्मजात संवेग बताया।',
    'Behaviorist J. B. Watson identified Fear, Anger, and Love as the three unlearned emotional reactions present from early infancy.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'हरलॉक के अनुसार जन्म के पहले दो सप्ताह तक की अवधि, जिसमें शिशु नए बाह्य वातावरण से समायोजन करता है, क्या कहलाती है?',
    'According to Hurlock, what is the period from birth to the first two weeks when the neonate adjusts to the external environment called?',
    ['नवजात अवस्था / शैशवावस्था (Infancy / Partunate & Neonate)', 'Infancy (Neonatal period)'],
    [
      ['बचपना अवस्था (Babyhood)', 'Babyhood'],
      ['पूर्व बाल्यावस्था (Early Childhood)', 'Early Childhood'],
      ['वयःसंधि काल (Puberty)', 'Puberty'],
    ],
    'हरलॉक ने जन्म से 2 सप्ताह को Infancy (अर्थात् नवजात समायोजन काल) तथा 2 सप्ताह से 2 वर्ष तक की अवधि को Babyhood (बचपना) कहा है।',
    'Hurlock distinguishes Infancy (birth to 2 weeks, adjustment to postnatal life) from Babyhood (2 weeks to 2 years).',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'सामान्यतः जन्म के समय एक स्वस्थ भारतीय नवजात शिशु का औसत भार कितना होता है?',
    'What is the average birth weight of a healthy newborn infant?',
    ['लगभग 2.5 से 3.5 किलोग्राम (6 से 8 पाउंड)', 'Approximately 2.5 to 3.5 kg (6 to 8 pounds)'],
    [
      ['लगभग 0.5 से 1 किलोग्राम', 'Approximately 0.5 to 1 kg'],
      ['लगभग 6 से 8 किलोग्राम', 'Approximately 6 to 8 kg'],
      ['लगभग 10 से 12 किलोग्राम', 'Approximately 10 to 12 kg'],
    ],
    'स्वस्थ नवजात शिशु का औसत वजन लगभग 2.8 से 3.2 किग्रा होता है (2.5 किग्रा से कम होने पर Low Birth Weight माना जाता है); 5–6 माह में यह दोगुना और 1 वर्ष में तिगुना हो जाता है।',
    'A healthy full-term newborn weighs around 2.5–3.5 kg (under 2.5 kg is low birth weight); weight typically doubles by 5–6 months and triples by 1 year.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'एक सामान्य शिशु में अस्थायी "दूध के दाँत" (Milk Teeth) निकलना किस आयु के आसपास प्रारंभ होता है और इनकी कुल संख्या कितनी होती है?',
    'Around what age do temporary "milk teeth" begin erupting in a normal infant, and what is their total count?',
    ['लगभग 6 माह की आयु में, कुल 20 दाँत', 'Around 6 months of age, totaling 20 teeth'],
    [
      ['जन्म के समय ही, कुल 32 दाँत', 'At birth, totaling 32 teeth'],
      ['लगभग 3 वर्ष की आयु में, कुल 12 दाँत', 'Around 3 years of age, totaling 12 teeth'],
      ['लगभग 2 वर्ष की आयु में, कुल 28 दाँत', 'Around 2 years of age, totaling 28 teeth'],
    ],
    'शिशु में लगभग 6 माह में निचले कृंतक दाँत निकलने शुरू होते हैं और ढाई से तीन वर्ष तक सभी 20 दूध के दाँत निकल आते हैं।',
    'Primary (milk) teeth usually begin erupting around 6 months, reaching a complete set of 20 teeth by age 2.5 to 3 years.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'शिशु के मानसिक विकास के संदर्भ में "नवजात से 2 वर्ष की आयु तक मस्तिष्क का वजन वयस्क मस्तिष्क के लगभग कितने प्रतिशत हो जाता है"?',
    'Regarding brain growth in infancy, by age 2 a child’s brain reaches approximately what percentage of its adult weight?',
    ['लगभग 75% से 80%', 'Approximately 75% to 80%'],
    [
      ['लगभग 10% से 15%', 'Approximately 10% to 15%'],
      ['लगभग 25% से 30%', 'Approximately 25% to 30%'],
      ['पूर्णतः 100%', 'Exactly 100%'],
    ],
    'जन्म के समय मस्तिष्क वयस्क भार का लगभग 25% (~350 ग्राम) होता है, जो 2 वर्ष की आयु तक तेजी से बढ़कर वयस्क मस्तिष्क के लगभग 75–80% तक पहुँच जाता है।',
    'At birth the brain is about 25% of adult weight, surging to roughly 75–80% of adult weight by age 2.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'शिशु की किस प्रवृत्ति के कारण शैशवावस्था में अनुकरण (Imitation) और पुनरावृत्ति द्वारा सीखना सबसे अधिक प्रभावी होता है?',
    'Why is learning through imitation and repetition most effective during infancy?',
    ['शिशु में स्व-प्रेम (नार्सिसिज्म), तीव्र जिज्ञासा तथा दूसरों के व्यवहार के अनुकरण की प्रबल मूल प्रवृत्ति होती है', 'Infants have intense curiosity and a strong innate tendency to imitate adults and repeat actions'],
    [
      ['शिशु में अमूर्त तर्क शक्ति पूर्णतः विकसित होती है', 'Infants possess fully developed abstract logical reasoning'],
      ['शिशु केवल लिखित पुस्तकों से ही सीखता है', 'Infants learn strictly from printed books'],
      ['शिशु में सामाजिक प्रतिस्पर्धा की भावना चरम पर होती है', 'Social competition is at its peak in infancy'],
    ],
    'शैशवावस्था में भाषा और सामाजिक कौशल अनुकरण (Imitation) से ही अर्जित होते हैं; शिशु बार-बार एक ही क्रिया और शब्द को दोहराकर आनंद व दक्षता प्राप्त करता है।',
    'Infants acquire language and motor habits primarily by imitating caregivers and repeating behaviors until mastered.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'जॉन बोल्बी (John Bowlby) और मैरी एन्सवर्थ के अनुसार शिशु और देखभालकर्ता के बीच प्रथम 6 से 12 महीनों में निर्मित होने वाला भावनात्मक बंधन क्या कहलाता है?',
    'According to John Bowlby and Mary Ainsworth, what is the enduring emotional bond formed between an infant and primary caregiver during the first year called?',
    ['लगाव / आसक्ति (Attachment)', 'Attachment'],
    [
      ['अहमकेंद्रिता (Egocentrism)', 'Egocentrism'],
      ['संरक्षण (Conservation)', 'Conservation'],
      ['पलायन (Regression)', 'Regression'],
    ],
    'बोल्बी के आसक्ति सिद्धांत के अनुसार सुरक्षित लगाव (Secure Attachment) शिशु में विश्वास, सुरक्षा भावना और भावी सामाजिक संबंधों की नींव रखता है।',
    'Bowlby’s Attachment Theory holds that secure attachment in infancy fosters emotional security and healthy future social relationships.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'लगभग 7 से 9 माह के शिशु में अनजान चेहरे देखकर रोना या माता-पिता से चिपक जाना किस सामान्य विकासात्मक मील के पत्थर को दर्शाता है?',
    'When a 7- to 9-month-old infant cries upon seeing unfamiliar faces and clings to parents, which normal developmental milestone does this represent?',
    ['अजनबी चिंता (Stranger Anxiety) एवं संलग्नता का विकास', 'Stranger anxiety and growing attachment discrimination'],
    [
      ['असामान्य मानसिक रोग', 'Abnormal psychiatric disorder'],
      ['आत्म-पहचान संकट', 'Identity crisis'],
      ['नैतिक दुविधा', 'Moral dilemma'],
    ],
    'अजनबी चिंता (Stranger Anxiety) इस बात का सकारात्मक संकेत है कि शिशु परिचित और अपरिचित चेहरों में अंतर करने लगा है और उसका प्राथमिक देखभालकर्ता से गहरा लगाव बन गया है।',
    'Stranger anxiety around 7–9 months is a healthy cognitive-emotional milestone showing the infant differentiates familiar caregivers from strangers.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'शैशवावस्था के दौरान भाषा विकास का सही क्रम क्या है?',
    'What is the correct sequence of early language development during infancy?',
    ['रोदन → कूइंग (Cooing) → बबलाना (Babbling) → एक-शब्दीय उच्चारण (Holophrase)', 'Crying → Cooing → Babbling → Holophrastic single words'],
    [
      ['बबलाना → रोदन → वाक्य निर्माण → कूइंग', 'Babbling → Crying → Full sentences → Cooing'],
      ['एक-शब्दीय उच्चारण → कूइंग → रोदन → बबलाना', 'Holophrase → Cooing → Crying → Babbling'],
      ['कूइंग → व्याकरणिक वाक्य → बबलाना → रोदन', 'Cooing → Grammatical sentences → Babbling → Crying'],
    ],
    'जन्म पर रोदन, ~2 माह पर स्वर-ध्वनियाँ (Cooing: ऊ-आ), ~6 माह पर व्यंजन-स्वर संयोजन (Babbling: बा-बा, मा-मा), और ~12 माह पर पहला अर्थपूर्ण शब्द (Holophrase) आता है।',
    'Infants progress from crying (birth) to vowel-like cooing (~2 months), consonant-vowel babbling (~6 months), and first meaningful single words (~12 months).',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    'पूर्व बाल्यावस्था (2 से 6 वर्ष) को प्रायः किन नामों से संबोधित किया जाता है?',
    'By which terms is Early Childhood (ages 2 to 6 years) commonly characterized in developmental psychology?',
    ['खिलौनों की आयु, पूर्व-विद्यालयी आयु एवं जिज्ञासा की अवस्था', 'Toy age, pre-school age, and questioning age'],
    [
      ['गैंग आयु एवं छद्म परिपक्वता काल', 'Gang age and pseudo-maturity stage'],
      ['तूफान और तनाव की अवस्था', 'Period of storm and stress'],
      ['पूर्ण तार्किक अमूर्त चिंतन काल', 'Period of abstract logical thinking'],
    ],
    '2–6 वर्ष के बीच बच्चा खिलौनों से खेलता है, औपचारिक स्कूल से पूर्व की अवस्था में होता है और लगातार "क्या, क्यों, कैसे" प्रश्न पूछता है; जबकि "गैंग आयु" उत्तर बाल्यावस्था (6–12 वर्ष) है।',
    'Early childhood (2–6 yrs) is called the toy age, pre-school age, and questioning age; "gang age" refers to late childhood (6–12 yrs).',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    '2 से 6 वर्ष की अवस्था में होने वाले "समानांतर खेल" (Parallel Play) की विशेषता क्या है?',
    'What characterizes "Parallel Play" during early childhood (ages 2 to 6)?',
    ['बच्चे एक-दूसरे के पास बैठकर समान खिलौनों से खेलते हैं, पर आपस में सहयोगात्मक अंतःक्रिया नहीं करते', 'Children play alongside each other with similar toys without actively cooperating or interacting'],
    [
      ['बच्चे नियमों वाले टीम खेल जैसे क्रिकेट खेलते हैं', 'Children play rule-bound team sports like cricket'],
      ['बच्चा कमरे में अकेला रहकर केवल किताब पढ़ता है', 'The child sits alone in a room reading books'],
      ['बच्चे भूमिकाएँ बाँटकर नाटक करते हैं', 'Children assign roles and enact coordinated dramas'],
    ],
    'मिल्ड्रेड पार्टन (Mildred Parten) के खेल चरणों के अनुसार 2–3 वर्ष में बच्चा अन्य बच्चों के बगल में बैठकर अपना अलग खेल खेलता है (Parallel Play); बाद में Associative व Cooperative Play आता है।',
    'In Mildred Parten’s stages of play, parallel play involves children playing near each other with similar materials independently, preceding associative and cooperative play.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    'पूर्व बाल्यावस्था में भाषा के क्षेत्र में "ओवर-रेगुलराइजेशन" (Overregularization) त्रुटि का क्या उदाहरण है?',
    'What is an example of an "Overregularization" error in early childhood language development?',
    ['व्याकरण के सामान्य नियम को अनियमित शब्दों पर भी लागू कर देना (जैसे "goed" या "जाया")', 'Applying regular grammatical rules to irregular words (e.g., saying "goed" instead of "went")'],
    [
      ['किसी भी शब्द का उच्चारण न कर पाना', 'Inability to pronounce any word'],
      ['केवल सांकेतिक भाषा का प्रयोग करना', 'Using only sign language'],
      ['दूसरे की बात को तोते की तरह दोहराना (Echolalia)', 'Echoing others’ words verbatim (echolalia)'],
    ],
    'जब बच्चा "go" का भूतकाल "went" के बजाय "goed" या "मैंने खाया" के समान "मैंने जाया" कहता है, तो यह दर्शाता है कि वह व्याकरण के नियम स्वयं सीख रहा है।',
    'Saying "goed" or "foots" shows that the child has internalized regular grammatical rules and overapplies them to irregular exceptions.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'बाल्यावस्था (6 से 12 वर्ष) को "जीवन का अनोखा काल" (Unique Period of Life) किस मनोवैज्ञानिक ने कहा है?',
    'Which psychologists famously described Childhood (6–12 years) as the "Unique Period of Life"?',
    ['कोल एवं ब्रूस', 'Cole and Bruce'],
    [
      ['स्टेनले हॉल', 'G. Stanley Hall'],
      ['वैलेंटाइन', 'C. W. Valentine'],
      ['सिगमंड फ्रायड', 'Sigmund Freud'],
    ],
    'कोल एवं ब्रूस ने बाल्यावस्था को "अनोखा काल" कहा क्योंकि इस अवस्था में माता-पिता के लिए बालक के व्यवहार को समझना कठिन प्रतीत होता है और तीव्र परिवर्तन होते हैं।',
    'Cole and Bruce called childhood the "unique period of life" because of the distinct shift in interests, peer focus, and behavior during these years.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'बाल्यावस्था को "मिथ्या परिपक्वता" (Pseudo-maturity) का काल किसने कहा है?',
    'Who described Childhood as the stage of "Pseudo-maturity"?',
    ['जे. एस. रॉस', 'J. S. Ross'],
    [
      ['किलपैट्रिक', 'W. H. Kilpatrick'],
      ['क्रो एवं क्रो', 'Crow and Crow'],
      ['एरिक एरिकसन', 'Erik Erikson'],
    ],
    'रॉस ने बाल्यावस्था को "मिथ्या या छद्म परिपक्वता" का काल कहा क्योंकि इस अवस्था में बालक बड़ों जैसा आत्मनिर्भर और परिपक्व होने का आभास कराता है जबकि वह वास्तव में परिपक्व नहीं होता।',
    'J. S. Ross termed childhood "pseudo-maturity" because children act grown-up and independent while still lacking true emotional and cognitive maturity.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'विलियम किलपैट्रिक ने बाल्यावस्था को किस विशिष्ट नाम से परिभाषित किया है?',
    'How did William Kilpatrick characterize the stage of Childhood?',
    ['प्रतिद्वंद्वात्मक समाजीकरण का काल', 'Period of competitive socialization'],
    [
      ['सीखने का आदर्श काल', 'Ideal period of learning'],
      ['बड़े संघर्ष और तूफान की अवस्था', 'Period of great storm and strife'],
      ['अभिजात सौंदर्य की अवस्था', 'Period of aesthetic perfection'],
    ],
    'किलपैट्रिक ने देखा कि 6–12 वर्ष में बच्चे समूहों (टोली) में खेलते हुए एक-दूसरे से प्रतिस्पर्धा और सहयोग दोनों सीखते हैं, अतः इसे प्रतिद्वंद्वात्मक समाजीकरण का काल कहा।',
    'Kilpatrick called childhood the period of competitive socialization because children learn teamwork alongside rivalry in peer groups.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    '6 से 12 वर्ष की उत्तर बाल्यावस्था को "गैंग आयु" (Gang Age / टोली की आयु) क्यों कहा जाता है?',
    'Why is Late Childhood (6 to 12 years) referred to as the "Gang Age"?',
    ['इस अवस्था में बालक समलिंगी मित्र-मंडली (टोली) बनाकर खेलना व समूह के नियमों का पालन करना पसंद करते हैं', 'During this stage children form same-sex peer groups/clubs and strongly adhere to group norms'],
    [
      ['इस अवस्था में सभी बच्चे आपराधिक गिरोह में शामिल हो जाते हैं', 'All children join criminal gangs at this age'],
      ['बच्चे केवल माता-पिता के साथ घर में बंद रहना चाहते हैं', 'Children prefer staying isolated at home with parents'],
      ['बच्चे किसी भी नियम या खेल में भाग नहीं लेते', 'Children refuse to participate in any rule-based games'],
    ],
    'यहाँ "गैंग" का अर्थ नकारात्मक गिरोह नहीं, बल्कि बच्चों की अपनी मित्र-मंडली या टोली (Peer Group) है, जहाँ वे निष्ठा, नेतृत्व और सामाजिक नियम सीखते हैं।',
    'Here "gang" means a close-knit peer group or club (usually same-gender) where children develop loyalty, cooperation, and rule-following.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'उत्तर बाल्यावस्था में "संग्रहण की प्रवृत्ति" (Acquisitiveness / Collecting Instinct) बहुत प्रबल होती है। इसका शैक्षिक उपयोग शिक्षक कैसे कर सकता है?',
    'The collecting instinct is strong during late childhood. How can a teacher channel this educationally?',
    ['छात्रों से पत्तियों, टिकटों, चट्टानों या शैक्षिक चित्रों का एल्बम व वर्गीकरण तैयार करवाकर', 'By encouraging students to collect and classify leaves, stamps, rocks, or educational picture albums'],
    [
      ['बच्चों की सभी संग्रहित वस्तुएँ छीनकर फेंकने से', 'By confiscating and discarding everything children collect'],
      ['केवल मौखिक व्याख्यान देने से', 'By sticking solely to oral lectures'],
      ['संग्रह करने पर नकारात्मक अंक देने से', 'By penalizing collecting behavior'],
    ],
    'बाल्यावस्था की संग्रहण प्रवृत्ति को विज्ञान व भूगोल परियोजनाओं (जैसे हर्बेरियम, सिक्के, डाक टिकट संग्रह) से जोड़कर वर्गीकरण व अवलोकन कौशल बढ़ाया जा सकता है।',
    'Teachers can harness the collecting urge through science/geography projects like herbariums, stamp/coin collections, and classification albums.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'निम्नलिखित में से कौन-सी उत्तर बाल्यावस्था (6–12 वर्ष) की प्रमुख विशेषता नहीं है?',
    'Which of the following is NOT a typical characteristic of Late Childhood (6–12 years)?',
    ['तीव्र विषमलिंगी आकर्षण एवं अमूर्त पहचान संकट', 'Strong heterosexual attraction and abstract identity crisis'],
    [
      ['शारीरिक और मानसिक विकास में अपेक्षाकृत स्थिरता', 'Relative stability in physical and mental growth'],
      ['जिज्ञासा, रचनात्मक कार्यों और सामूहिक खेलों में रुचि', 'Interest in curiosity, constructive tasks, and group games'],
      ['यथार्थवादी दृष्टिकोण और मूर्त तार्किक चिंतन का आरंभ', 'Realistic outlook and onset of concrete logical thinking'],
    ],
    'तीव्र विषमलिंगी आकर्षण और पहचान का संकट (Identity Crisis) किशोरावस्था (Adolescence) की विशेषताएँ हैं, न कि उत्तर बाल्यावस्था की।',
    'Strong heterosexual attraction and identity crisis are hallmarks of adolescence, whereas late childhood shows steady growth and same-sex peer play.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'हरलॉक के अनुसार उत्तर बाल्यावस्था (6–12 वर्ष) के अन्य प्रचलित नाम क्या हैं?',
    'According to Hurlock, what are the other common names associated with Late Childhood (6–12 years)?',
    ['प्राथमिक विद्यालय आयु, स्लॉपी एज (अव्यवस्थित आयु) एवं झगड़ालू आयु', 'Elementary school age, sloppy age, and quarrelsome age'],
    [
      ['शैशवकाल एवं संवेदीकाल', 'Neonatal age and sensory age'],
      ['संस्कृति-विहीन आयु', 'Culture-free age'],
      ['प्रौढ़ावस्था एवं वृद्धावस्था', 'Adulthood and senescence'],
    ],
    'हरलॉक ने बताया कि माता-पिता इसे स्लॉपी एज (कपड़ों/स्वच्छता पर कम ध्यान) व झगड़ालू आयु कहते हैं, जबकि शिक्षक इसे प्राथमिक विद्यालय आयु व मनोवैज्ञानिक इसे गैंग एज कहते हैं।',
    'Hurlock noted parents often view late childhood as the "sloppy/quarrelsome age," educators as "elementary school age," and psychologists as "gang age."',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'किस मनोवैज्ञानिक ने कहा है कि "बाल्यावस्था वह समय है जब व्यक्ति के आधारभूत दृष्टिकोणों, मूल्यों और आदर्शों का बहुत बड़ी सीमा तक निर्माण होता है"?',
    'Which psychologist stated that "Childhood is the time when a person’s basic attitudes, values, and ideals are shaped to a very great extent"?',
    ['ब्लेयर, जोन्स एवं सिम्पसन', 'Blair, Jones, and Simpson'],
    [
      ['फ्रांसिस गाल्टन', 'Francis Galton'],
      ['ई. एल. थॉर्नडाइक', 'E. L. Thorndike'],
      ['चार्ल्स डार्विन', 'Charles Darwin'],
    ],
    'ब्लेयर, जोन्स एवं सिम्पसन ने शैक्षिक मनोविज्ञान में रेखांकित किया कि बाल्यावस्था में विद्यालय और सहपाठियों के बीच बने मूल्य व दृष्टिकोण जीवन भर टिकते हैं।',
    'Blair, Jones, and Simpson emphasized that foundational attitudes, social values, and ideals solidify substantially during childhood.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    '"किशोरावस्था बड़े संघर्ष, तनाव, तूफान तथा विरोध की अवस्था है"—यह सर्वाधिक प्रसिद्ध कथन किसका है?',
    '"Adolescence is a period of great stress and strain, storm and strife"—who made this classic statement?',
    ['जी. स्टेनले हॉल', 'G. Stanley Hall'],
    [
      ['मार्गेट मीड', 'Margaret Mead'],
      ['रॉस', 'J. S. Ross'],
      ['वैलेंटाइन', 'C. W. Valentine'],
    ],
    'किशोर मनोविज्ञान के जनक माने जाने वाले जी. स्टेनले हॉल ने अपनी 1904 की प्रसिद्ध पुस्तक "Adolescence" में यह कथन दिया।',
    'G. Stanley Hall, considered the father of adolescent psychology, wrote this in his landmark 1904 book "Adolescence".',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'मानवविज्ञानी मार्गरेट मीड (Margaret Mead) ने समोआ द्वीप समूह पर अध्ययन करके स्टेनले हॉल के "तूफान और तनाव" सिद्धांत की किस आधार पर आलोचना की?',
    'On what basis did anthropologist Margaret Mead critique Stanley Hall’s universal "storm and stress" view of adolescence after studying Samoa?',
    ['किशोरों का तनाव जैविक रूप से सार्वभौमिक नहीं है, बल्कि सांस्कृतिक और सामाजिक अपेक्षाओं से उत्पन्न होता है', 'Adolescent turmoil is not biologically universal but shaped largely by cultural norms and expectations'],
    [
      ['समोआ में कोई किशोर ही नहीं थे', 'There were no adolescents in Samoa'],
      ['समोआ के किशोरों में शारीरिक परिवर्तन नहीं होते थे', 'Samoan youth did not undergo puberty'],
      ['तनाव केवल आहार में विटामिन की कमी से होता है', 'Turmoil is caused solely by vitamin deficiency'],
    ],
    'मार्गेट मीड ("Coming of Age in Samoa", 1928) ने दिखाया कि जिन संस्कृतियों में वयस्क भूमिकाओं का संक्रमण सहज होता है, वहाँ किशोरावस्था अपेक्षाकृत शांत होती है।',
    'In "Coming of Age in Samoa" (1928), Margaret Mead argued that smooth cultural transitions make adolescence far less turbulent in some societies.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरावस्था में "वयःसंधि" (Puberty) का मुख्य जैविक संकेतक क्या है?',
    'What is the primary biological hallmark of "Puberty" at the onset of adolescence?',
    ['यौन परिपक्वता एवं प्रजनन क्षमता का विकास (प्राइमरी व सेकेंडरी सेक्स लक्षण)', 'Sexual maturation and attainment of reproductive capability (primary & secondary sex characteristics)'],
    [
      ['दूध के दाँतों का निकलना', 'Eruption of milk teeth'],
      ['सीधे खड़े होकर चलना सीखना', 'Learning to stand upright and walk'],
      ['मस्तिष्क के भार का आधा हो जाना', 'Brain weight shrinking to half'],
    ],
    'पीयूष ग्रंथि (Pituitary) के हार्मोनल संकेतों से जनन ग्रंथियाँ सक्रिय होती हैं, जिससे तीव्र शारीरिक वृद्धि (Growth Spurt) और लैंगिक परिपक्वता आती है।',
    'Puberty is triggered by pituitary and gonadal hormones, producing the adolescent growth spurt and primary/secondary sexual maturation.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'सामान्यतः लड़कियों में यौवनारंभ (Puberty) लड़कों की तुलना में कितने समय पहले प्रारंभ होता है?',
    'On average, how much earlier does puberty begin in girls compared to boys?',
    ['लगभग 1.5 से 2 वर्ष पहले', 'Approximately 1.5 to 2 years earlier'],
    [
      ['लगभग 5 से 6 वर्ष बाद', 'Approximately 5 to 6 years later'],
      ['दोनों में ठीक एक ही महीने शुरू होता है', 'Begins in the exact same month for both'],
      ['लड़कों में लड़कियों से 4 वर्ष पहले', '4 years earlier in boys than girls'],
    ],
    'लड़कियों में यौवनारंभ व विकास उछाल लगभग 10–12 वर्ष में और लड़कों में लगभग 12–14 वर्ष की आयु में प्रारंभ होता है।',
    'Girls typically enter puberty and their growth spurt around ages 10–12, roughly 1.5 to 2 years earlier than boys (12–14).',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'डेविड एल्किंड (David Elkind) द्वारा वर्णित किशोर अहंकेंद्रितता (Adolescent Egocentrism) के दो प्रमुख घटक कौन-से हैं?',
    'What are the two key components of Adolescent Egocentrism described by David Elkind?',
    ['काल्पनिक दर्शक (Imaginary Audience) एवं व्यक्तिगत दंतकथा (Personal Fable)', 'Imaginary Audience and Personal Fable'],
    [
      ['जीववाद एवं अपलटावीपन', 'Animism and Irreversibility'],
      ['आत्मसात एवं संरक्षण', 'Assimilation and Conservation'],
      ['पहचान भ्रम एवं निराशा', 'Role Confusion and Despair'],
    ],
    'एल्किंड के अनुसार किशोर सोचते हैं कि हर कोई उन्हीं को देख/आँक रहा है (Imaginary Audience) और वे बिल्कुल अद्वितीय व अजेय हैं, उन्हें कुछ नहीं हो सकता (Personal Fable)।',
    'Elkind identified the Imaginary Audience (believing everyone is watching/judging you) and Personal Fable (believing oneself is unique and invulnerable).',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'एक किशोर बिना हेलमेट तेज बाइक चलाते हुए सोचता है—"दूसरों की दुर्घटना हो सकती है, मुझे कुछ नहीं होगा।" एल्किंड के अनुसार यह किसका उदाहरण है?',
    'An adolescent rides a bike recklessly without a helmet thinking, "Accidents happen to others, not to me." According to Elkind, what does this illustrate?',
    ['व्यक्तिगत दंतकथा (Personal Fable)', 'Personal Fable'],
    [
      ['काल्पनिक दर्शक (Imaginary Audience)', 'Imaginary Audience'],
      ['वस्तु स्थायित्व (Object Permanence)', 'Object Permanence'],
      ['तार्किक संरक्षण (Logical Conservation)', 'Logical Conservation'],
    ],
    'व्यक्तिगत दंतकथा (Personal Fable) किशोर में यह भ्रम पैदा करती है कि उसके अनुभव अद्वितीय हैं और वह किसी भी खतरे से अजेय है।',
    'The Personal Fable fosters a sense of uniqueness and invulnerability, often contributing to adolescent risk-taking.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    '"वीर पूजा" (Hero Worship) और दिवास्वप्न (Daydreaming) की प्रवृत्ति विकास की किस अवस्था में सर्वाधिक पाई जाती है?',
    'In which developmental stage are "Hero Worship" and "Daydreaming" most prominent?',
    ['किशोरावस्था (Adolescence)', 'Adolescence'],
    [
      ['शैशवावस्था (Infancy)', 'Infancy'],
      ['पूर्व बाल्यावस्था (Early Childhood)', 'Early Childhood'],
      ['गर्भावस्था (Prenatal Stage)', 'Prenatal Stage'],
    ],
    'किशोरावस्था में आदर्श निर्माण की प्रबल इच्छा होती है, जिससे किशोर किसी नायक, शिक्षक, खिलाड़ी या नेता को अपना आदर्श (Hero) मानकर अनुसरण करता है और भविष्य के दिवास्वप्न देखता है।',
    'Adolescents actively seek ideals and role models (hero worship) while engaging in elaborate daydreaming about their future identity.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'रॉस (J. S. Ross) ने किशोरावस्था को किस अवस्था की पुनरावृत्ति (Recapitulation) माना है?',
    'J. S. Ross considered Adolescence to be a recapitulation of which earlier stage?',
    ['शैशवावस्था की पुनरावृत्ति', 'Recapitulation of Infancy'],
    [
      ['प्रौढ़ावस्था की पुनरावृत्ति', 'Recapitulation of Adulthood'],
      ['वृद्धावस्था की पुनरावृत्ति', 'Recapitulation of Old Age'],
      ['गर्भावस्था की पुनरावृत्ति', 'Recapitulation of Prenatal life'],
    ],
    'रॉस के अनुसार जिस प्रकार शैशवावस्था में तीव्र शारीरिक परिवर्तन, संवेगात्मक अस्थिरता और कल्पनाशीलता होती है, वही सब नए स्तर पर किशोरावस्था में दोहराया जाता है।',
    'Ross viewed adolescence as a recapitulation of infancy because rapid physical shifts, emotional volatility, and intense imagination reappear at a higher level.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किलपैट्रिक ने किस अवस्था को "जीवन का सबसे कठिन काल" (Hardest Period of Life) कहा है?',
    'Which stage did W. H. Kilpatrick describe as the "Hardest Period of Life"?',
    ['किशोरावस्था (Adolescence)', 'Adolescence'],
    [
      ['शैशवावस्था (Infancy)', 'Infancy'],
      ['उत्तर बाल्यावस्था (Late Childhood)', 'Late Childhood'],
      ['मध्य बाल्यावस्था (Middle Childhood)', 'Middle Childhood'],
    ],
    'शारीरिक बदलावों, करियर चयन, स्वतंत्रता बनाम निर्भरता के द्वंद्व और सामाजिक अपेक्षाओं के कारण किलपैट्रिक ने किशोरावस्था को जीवन का सबसे कठिन काल कहा।',
    'Kilpatrick called adolescence the hardest period of life due to rapid bodily changes, career anxieties, and autonomy-versus-dependence conflicts.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरावस्था में निर्देशन एवं परामर्श (Guidance and Counseling) की आवश्यकता मुख्यतः किन कारणों से होती है?',
    'Why are Guidance and Counseling particularly essential during Adolescence?',
    ['संवेगात्मक समायोजन, शैक्षिक-व्यावसायिक चयन और आत्म-पहचान के निर्माण में सहायता हेतु', 'To support emotional adjustment, educational-vocational choices, and identity formation'],
    [
      ['किशोरों पर पूर्ण प्रतिबंध लगाने और दंडित करने हेतु', 'To impose strict restrictions and punish adolescents'],
      ['उन्हें विद्यालयी शिक्षा से हटाने हेतु', 'To remove them from formal schooling'],
      ['केवल उनकी ऊँचाई और वजन नापने हेतु', 'Solely to measure their height and weight'],
    ],
    'किशोर एक संक्रमण काल (Transition Period) से गुजरता है; सही व्यावसायिक, शैक्षिक और व्यक्तिगत परामर्श उसे तनाव से बचाकर सही दिशा देता है।',
    'Adolescents navigate major transitions; timely educational, career, and personal counseling fosters healthy adjustment and informed decision-making.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'होलिंगवर्थ (Leta Hollingworth) के अनुसार किशोरावस्था का प्रमुख कार्य क्या है?',
    'According to Leta Hollingworth, what is a central developmental task of Adolescence?',
    ['परिवार से संवेगात्मक मुक्ति (Psychological weaning) और आत्मनिर्भरता प्राप्त करना', 'Achieving emotional independence (psychological weaning) from parents'],
    [
      ['माता-पिता पर पूर्णतः शिशुवत निर्भर रहना', 'Remaining totally dependent on parents like an infant'],
      ['केवल खिलौनों से खेलना', 'Playing exclusively with toddler toys'],
      ['औपचारिक चिंतन को त्यागना', 'Abandoning formal reasoning'],
    ],
    'लेटा होलिंगवर्थ ने "मनोवैज्ञानिक मुक्ति" (Psychological Weaning) की अवधारणा दी, जिसका अर्थ माता-पिता की अंधी निर्भरता से निकलकर स्वतंत्र निर्णय क्षमता विकसित करना है।',
    'Leta Hollingworth emphasized "psychological weaning"—moving from childhood emotional dependence on parents toward mature self-reliance.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    '"किशोरावस्था वर्तमान की शक्ति और भावी आशा को प्रस्तुत करती है"—यह किसका प्रसिद्ध कथन है?',
    '"Youth/Adolescence represents the power of the present and the hope of the future"—whose statement is this?',
    ['क्रो एवं क्रो', 'Crow and Crow'],
    [
      ['स्टेनले हॉल', 'G. Stanley Hall'],
      ['बिग एवं हंट', 'Bigge and Hunt'],
      ['हेडो कमेटी', 'Hadow Committee'],
    ],
    'क्रो एवं क्रो ने किशोरावस्था की ऊर्जा, आदर्शवाद और संभावनाओं को रेखांकित करते हुए इसे वर्तमान की शक्ति और भविष्य की आशा कहा।',
    'Crow and Crow characterized youth/adolescence as embodying the energy of the present and the promise of the future.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरों के साथ कार्य करते समय एक शिक्षक का दृष्टिकोण कैसा होना चाहिए?',
    'What attitude should a teacher adopt while working with adolescent learners?',
    ['सहानुभूतिपूर्ण, लोकतांत्रिक, मित्रवत एवं विचारों का सम्मान करने वाला', 'Empathetic, democratic, friendly, and respectful of their viewpoints'],
    [
      ['कठोर तानाशाही एवं व्यंग्यात्मक', 'Rigidly authoritarian and sarcastic'],
      ['पूर्णतः उदासीन एवं उपेक्षापूर्ण', 'Completely indifferent and neglectful'],
      ['बच्चों जैसा मानकर हर बात पर टोकना', 'Treating them like toddlers and nagging constantly'],
    ],
    'किशोरों में आत्म-सम्मान और स्वतंत्रता की प्रबल भावना होती है; लोकतांत्रिक व सम्मानजनक संवाद उन्हें सकारात्मक दिशा में प्रेरित करता है।',
    'Adolescents have a heightened sense of self-respect and autonomy; a democratic, respectful, and supportive teacher fosters trust and engagement.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'रॉबर्ट हैविंगहर्स्ट (Robert Havighurst) द्वारा दिए गए "विकासात्मक कार्य" (Developmental Tasks) सिद्धांत का मुख्य आशय क्या है?',
    'What is the core idea of Robert Havighurst’s "Developmental Tasks" theory?',
    ['जीवन की प्रत्येक अवस्था में कुछ विशिष्ट कौशल व उत्तरदायित्व सीखना आवश्यक होता है, जिनकी सफलता भावी सुख का आधार बनती है', 'Each life stage has specific skills and responsibilities to master, whose success lays the foundation for later tasks'],
    [
      ['केवल कारखानों में शारीरिक श्रम करना विकासात्मक कार्य है', 'Only manual factory labor constitutes developmental tasks'],
      ['प्रत्येक कार्य किसी भी उम्र में बिना तैयारी के किया जा सकता है', 'Every task can be learned at any age without readiness'],
      ['केवल विद्यालयी परीक्षा उत्तीर्ण करना ही जीवन का कार्य है', 'Passing school exams is the sole developmental task'],
    ],
    'हैविंगहर्स्ट के अनुसार जैसे शैशवावस्था में चलना-बोलना, बाल्यावस्था में पढ़ना-लिखना व सहपाठी संबंध, और किशोरावस्था में पहचान, शारीरिक स्वीकृति व करियर तैयारी प्रमुख विकासात्मक कार्य हैं।',
    'Havighurst proposed that each stage brings age-specific biological, psychological, and cultural tasks; mastering them builds readiness and satisfaction for future stages.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'वैलेंटाइन के अनुसार "किशोरावस्था अपराध प्रवृत्ति के विकास का नाजुक समय है।" इस प्रवृत्ति को रोकने का श्रेष्ठ शैक्षिक उपाय क्या है?',
    'Valentine noted adolescence is a vulnerable period for delinquency tendencies. What is the best educational measure to prevent this?',
    ['सकारात्मक खेल, कला, स्काउटिंग, एनएसएस और रचनात्मक पाठ्येतर गतिविधियों से जोड़ना', 'Channeling energy into sports, arts, scouting, NSS, and constructive co-curricular activities'],
    [
      ['किशोरों को घर के कमरे में बंद कर देना', 'Locking adolescents inside rooms at home'],
      ['सार्वजनिक रूप से अपमानित करना', 'Humiliating them publicly'],
      ['समस्त खेल-कूद बंद करवा देना', 'Banning all sports and games'],
    ],
    'अतिरिक्त ऊर्जा का "उदात्तीकरण" (Sublimation) खेल, साहित्य, संगीत, समाजसेवा और रचनात्मक क्लबों के माध्यम से करने पर किशोर नकारात्मक मार्ग से बचते हैं।',
    'Sublimating adolescent energy into athletics, arts, community service, and constructive peer clubs effectively prevents delinquency.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरावस्था में लड़कों की आवाज भारी होना तथा दाढ़ी-मूँछ आना किन हार्मोनल परिवर्तनों का परिणाम है?',
    'In adolescent boys, deepening of the voice and growth of facial hair result from which hormonal change?',
    ['टेस्टोस्टेरोन (Testosterone / एंड्रोजन) का स्राव बढ़ना', 'Increased secretion of Testosterone (androgens)'],
    [
      ['प्रोजेस्टेरोन की अधिकता', 'Excess of Progesterone'],
      ['थायरॉक्सिन की पूर्ण समाप्ति', 'Complete cessation of Thyroxine'],
      ['इंसुलिन का अत्यधिक उत्पादन', 'Overproduction of Insulin'],
    ],
    'वृषण (Testes) से स्रावित टेस्टोस्टेरोन लड़कों में द्वितीयक लैंगिक लक्षणों (आवाज भारी होना, मांसपेशी विकास, दाढ़ी-मूँछ) के लिए उत्तरदायी होता है; लड़कियों में एस्ट्रोजन प्रमुख होता है।',
    'Testosterone secreted by the testes drives male secondary sex characteristics, whereas estrogen drives female secondary sex characteristics.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'रजोदर्शन (Menarche) से क्या तात्पर्य है और यह किशोरावस्था में किसकी ओर संकेत करता है?',
    'What does "Menarche" refer to, and what does it signify during adolescence?',
    ['लड़कियों में प्रथम मासिक धर्म का प्रारंभ, जो लैंगिक परिपक्वता का संकेतक है', 'The first occurrence of menstruation in girls, signaling reproductive maturation'],
    [
      ['मासिक धर्म का स्थायी रूप से बंद होना (Menopause)', 'Permanent cessation of menstruation (Menopause)'],
      ['बाल्यावस्था में प्रथम दूध का दाँत टूटना', 'Shedding of the first milk tooth in childhood'],
      ['लड़कों में स्वरयंत्र का बड़ा होना', 'Enlargement of the larynx in boys'],
    ],
    'रजोदर्शन (Menarche) प्रायः 11 से 14 वर्ष की आयु के बीच होता है; यह किशोरावस्था की एक प्रमुख शारीरिक घटना है जिसके लिए उचित स्वास्थ्य व संवेगात्मक शिक्षा आवश्यक है।',
    'Menarche is a girl’s first menstrual period (typically ages 11–14), marking a key milestone of puberty requiring supportive health education.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Stage Divisions',
    'शैक्षिक मनोविज्ञान में सर्वाधिक प्रचलित (रॉस / भारतीय पाठयक्रम के अनुसार) बाल विकास की तीन प्रमुख अवस्थाओं की आयु सीमा क्या है?',
    'What are the standard age brackets for the three major stages of child development commonly cited in UP TET/Super TET textbooks (Ross)?',
    ['शैशवावस्था (0–5/6 वर्ष), बाल्यावस्था (6–12 वर्ष), किशोरावस्था (12–18 वर्ष)', 'Infancy (0–5/6 yrs), Childhood (6–12 yrs), Adolescence (12–18 yrs)'],
    [
      ['शैशवावस्था (0–10 वर्ष), बाल्यावस्था (10–20 वर्ष), किशोरावस्था (20–30 वर्ष)', 'Infancy (0–10 yrs), Childhood (10–20 yrs), Adolescence (20–30 yrs)'],
      ['शैशवावस्था (0–1 वर्ष), बाल्यावस्था (1–4 वर्ष), किशोरावस्था (4–10 वर्ष)', 'Infancy (0–1 yr), Childhood (1–4 yrs), Adolescence (4–10 yrs)'],
      ['शैशवावस्था (6–12 वर्ष), बाल्यावस्था (0–6 वर्ष), किशोरावस्था (18–25 वर्ष)', 'Infancy (6–12 yrs), Childhood (0–6 yrs), Adolescence (18–25 yrs)'],
    ],
    'भारतीय शैक्षिक मनोविज्ञान (रॉस, अर्नेस्ट जोन्स आदि) में मुख्यतः 0–6 वर्ष शैशवावस्था, 6–12 वर्ष बाल्यावस्था और 12–18 वर्ष किशोरावस्था मानी जाती है।',
    'Standard Indian educational psychology texts (following Ross/Jones) classify Infancy as 0–5/6 yrs, Childhood as 6–12 yrs, and Adolescence as 12–18 yrs.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Stage Divisions',
    'शैलेश / कोलसनिक (Kolesnik) या हरलॉक के अनुसार "गंगावस्था" नहीं, बल्कि जीवन की किस अवस्था में शारीरिक वृद्धि की गति सर्वाधिक तीव्र होती है?',
    'During which postnatal stages is the rate of physical growth the fastest?',
    ['शैशवावस्था (प्रथम 2 वर्ष) एवं किशोरावस्था का पूर्वार्द्ध', 'Infancy (first 2 years) and early Adolescence (pubertal spurt)'],
    [
      ['केवल मध्य बाल्यावस्था (8–10 वर्ष)', 'Only middle childhood (8–10 years)'],
      ['केवल प्रौढ़ावस्था (30–40 वर्ष)', 'Only middle adulthood (30–40 years)'],
      ['केवल वृद्धावस्था (60+ वर्ष)', 'Only old age (60+ years)'],
    ],
    'जन्म के बाद प्रथम 2 वर्षों (शैशव) में वृद्धि सबसे तेज होती है; बाल्यावस्था में धीमी/स्थिर रहती है; और पुनः किशोरावस्था (Growth Spurt) में तीव्र हो जाती है।',
    'Postnatal physical growth surges fastest in the first two years of infancy, steadies during childhood, and surges again during the adolescent growth spurt.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    '"बिग एवं हंट" (Bigge & Hunt) ने किशोरावस्था की सबसे प्रमुख विशेषता बताने के लिए किस शब्द का प्रयोग किया है?',
    'Which single word did Bigge and Hunt emphasize to capture the defining characteristic of Adolescence?',
    ['परिवर्तन (Change)', 'Change'],
    [
      ['स्थिरता (Stability)', 'Stability'],
      ['पलायन (Escape)', 'Escape'],
      ['जड़ता (Stagnation)', 'Stagnation'],
    ],
    'बिग एवं हंट ने लिखा: "किशोरावस्था की विशेषताओं को सर्वोत्तम रूप से व्यक्त करने वाला एक शब्द है—परिवर्तन। यह परिवर्तन शारीरिक, सामाजिक और मनोवैज्ञानिक होता है।"',
    'Bigge and Hunt stated that the one word best characterizing adolescence is "Change"—encompassing physical, social, and psychological transformations.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'विकास के "निरंतरता के सिद्धांत" (Principle of Continuity) का क्या आशय है?',
    'What is meant by the "Principle of Continuity" in human development?',
    ['विकास गर्भाधान से प्रारंभ होकर मृत्यु पर्यंत बिना रुके निरंतर चलता रहता है', 'Development begins at conception and continues uninterrupted until death'],
    [
      ['विकास केवल विद्यालय खुलने के दिनों में होता है', 'Development occurs only on school days'],
      ['10 वर्ष की आयु के बाद विकास पूर्णतः समाप्त हो जाता है', 'Development completely ends after age 10'],
      ['विकास में अचानक जादुई छलांगें लगती हैं जिनका पिछले चरण से कोई संबंध नहीं होता', 'Development consists of sudden magical leaps unrelated to earlier stages'],
    ],
    'यद्यपि विकास की गति कभी धीमी और कभी तेज हो सकती है, किंतु यह गर्भाधान से लेकर मृत्यु तक (Womb to Tomb) निरंतर चलने वाली प्रक्रिया है।',
    'Though its pace fluctuates, development is an ongoing process from conception to death ("womb to tomb"), where every stage builds on prior ones.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    '"वैयक्तिक विभिन्नता का विकास सिद्धांत" कक्षा में शिक्षकों को क्या निर्देश देता है?',
    'What does the developmental "Principle of Individuality" imply for classroom teachers?',
    ['प्रत्येक बालक के विकास की गति अद्वितीय होती है, अतः तुलना के बजाय व्यक्तिगत प्रगति पर ध्यान दें', 'Each child develops at a unique pace, so focus on individual growth rather than uniform comparisons'],
    [
      ['सभी छात्रों को एक ही आयु में ठीक एक जैसी लंबाई प्राप्त करनी चाहिए', 'All students must attain the exact same height at a given age'],
      ['जो छात्र देर से समझे उसे कक्षा से निष्कासित कर दें', 'Expel students who grasp concepts slower'],
      ['केवल प्रथम आने वाले छात्र को ही शिक्षित करें', 'Educate only the rank-first student'],
    ],
    'प्रत्येक बालक का जैविक समय-चक्र (Biological Clock) और अनुभव भिन्न होते हैं; अतः अनावश्यक तुलना के बिना व्यक्तिगत प्रगति को प्रोत्साहित किया जाना चाहिए।',
    'Every child follows their own developmental timetable; teachers should support personal progress rather than forcing rigid peer comparisons.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'नवजात शिशु में "सामाजिक मुस्कान" (Social Smile) सामान्यतः किस आयु के आसपास प्रकट होती है?',
    'Around what age does a true "Social Smile" typically appear in a baby?',
    ['लगभग 6 से 8 सप्ताह (1.5 से 2 माह)', 'Around 6 to 8 weeks (1.5 to 2 months)'],
    [
      ['जन्म के पहले ही घंटे में', 'Within the very first hour of birth'],
      ['लगभग 18 माह की आयु में', 'Around 18 months of age'],
      ['लगभग 4 वर्ष की आयु में', 'Around 4 years of age'],
    ],
    'जन्म के पहले माह की मुस्कान स्वतः (Endogenous/Reflexive) होती है, जबकि 6–8 सप्ताह पर शिशु माँ या देखभालकर्ता का चेहरा व आवाज पहचानकर सचेत सामाजिक मुस्कान देता है।',
    'Early neonatal smiles are reflexive; by 6–8 weeks, infants produce responsive social smiles directed at caregivers’ faces and voices.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'शिशु में स्थूल गामक कौशल (Gross Motor Skills) के विकास का सही क्रम क्या है?',
    'What is the accurate developmental sequence of gross motor milestones in infancy?',
    ['सिर सँभालना → पलटना → बिना सहारे बैठना → घुटनों के बल चलना → खड़ा होना → चलना', 'Head control → Rolling over → Sitting unsupported → Crawling → Standing → Walking'],
    [
      ['चलना → खड़ा होना → बैठना → सिर सँभालना', 'Walking → Standing → Sitting → Head control'],
      ['घुटनों के बल चलना → पलटना → सिर सँभालना → चलना', 'Crawling → Rolling → Head control → Walking'],
      ['खड़ा होना → घुटनों के बल चलना → बैठना → पलटना', 'Standing → Crawling → Sitting → Rolling'],
    ],
    'शीर्षगामी नियम के अनुरूप शिशु ~2–3 माह में सिर सँभालता है, ~4–5 माह में पलटता है, ~6–7 माह में बैठता है, ~8–9 माह में घुटनों के बल चलता है और ~12 माह में चलने लगता है।',
    'Following the cephalocaudal trend, infants lift their head (~2–3m), roll (~4–5m), sit (~6–7m), crawl (~8–9m), stand, and walk (~12m).',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'विकास में "संवेदनशील अवधि" (Sensitive Period) की अवधारणा का क्या अर्थ है?',
    'What does the concept of a "Sensitive Period" in development mean?',
    ['वह विशिष्ट समय-सीमा जब मस्तिष्क किसी विशेष कौशल (जैसे भाषा) को सीखने के लिए सर्वाधिक ग्रहणशील होता है', 'A specific developmental window when the brain is maximally receptive to acquiring certain skills like language'],
    [
      ['वह अवस्था जब बच्चा अत्यंत आक्रामक हो जाता है', 'A period when a child becomes intensely aggressive'],
      ['वह अवधि जिसमें कोई नया कौशल सीखा ही नहीं जा सकता', 'A period during which no new skill can be learned'],
      ['केवल परीक्षा के दिनों का तनावपूर्ण समय', 'Only the stressful period during school exams'],
    ],
    'जैसे प्रारंभिक बाल्यावस्था (0–6 वर्ष) भाषा अर्जन के लिए संवेदनशील अवधि है; इस अवधि के बाद सीखना असंभव तो नहीं होता, पर अपेक्षाकृत अधिक कठिन हो जाता है।',
    'A sensitive period (e.g., early childhood for first-language acquisition) is an optimal window when environmental input has the strongest impact.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'कोनराड लॉरेंज (Konrad Lorenz) ने पक्षियों के अध्ययन द्वारा किस अवधारणा को सिद्ध किया, जो प्रारंभिक "क्रिटिकल पीरियड" (Critical Period) से जुड़ी है?',
    'Through his study of goslings, Konrad Lorenz demonstrated which phenomenon linked to early "Critical Periods"?',
    ['इम्प्रिंटिंग / मुद्रण (Imprinting)', 'Imprinting'],
    [
      ['तटस्थ अनुकूलन (Neutral Conditioning)', 'Neutral Conditioning'],
      ['संरक्षण (Conservation)', 'Conservation'],
      ['प्रतिक्षिप्त क्रिया (Reflex Arc)', 'Reflex Arc'],
    ],
    'लॉरेंज ने देखा कि अंडे से निकलने के कुछ घंटों के भीतर बत्तख/हंस के बच्चे जो पहली चलती वस्तु (चाहे वह स्वयं लॉरेंज ही हों) देखते हैं, उसी के पीछे चलने लगते हैं—इसे Imprinting कहते हैं।',
    'Konrad Lorenz showed that newly hatched goslings bond rapidly to the first moving object they see during a brief critical window—a process called imprinting.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    'मादाम मॉन्टेसरी ने 3 से 6 वर्ष की अवस्था में बालकों के किस गुण को "अवशोषी मन" (Absorbent Mind) कहा है?',
    'What quality of children aged 0–6 years did Maria Montessori term the "Absorbent Mind"?',
    ['बिना किसी सचेत प्रयास के अपने परिवेश से भाषा, आदतें और संस्कृति को स्पंज की तरह स्वतः ग्रहण कर लेना', 'Effortlessly soaking up language, habits, and culture from the environment like a sponge'],
    [
      ['पढ़ी हुई बातों को तुरंत भूल जाने की प्रवृत्ति', 'The tendency to immediately forget everything taught'],
      ['केवल अमूर्त गणितीय समीकरण हल करने की शक्ति', 'The power to solve only abstract calculus'],
      ['दूसरों की बातों का जानबूझकर विरोध करना', 'Deliberately opposing everything adults say'],
    ],
    'मॉन्टेसरी के अनुसार जन्म से 6 वर्ष तक बालक का मस्तिष्क अनौपचारिक रूप से पूरे परिवेश को अवशोषित करता है; 0–3 वर्ष अचेतन और 3–6 वर्ष सचेतन अवशोषी मन होता है।',
    'Montessori used "Absorbent Mind" to describe how young children (0–6) effortlessly internalize language and culture directly from their surroundings.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'उत्तर बाल्यावस्था (6–12 वर्ष) में स्थायी दाँतों (Permanent Teeth) के निकलने के कारण इसे किस नाम से भी जाना जाता है?',
    'Because permanent teeth replace milk teeth during Late Childhood (6–12 years), what else is it sometimes called?',
    ['स्थायी दाँत निकलने की अवस्था (जबकि 28 दाँत 12–13 वर्ष तक निकल आते हैं)', 'Period of permanent dentition (about 28 permanent teeth erupt by age 12–13)'],
    [
      ['दंतविहीन अवस्था', 'Toothless stage'],
      ['केवल अक्ल दाढ़ आने की अवस्था', 'Wisdom-tooth-only stage'],
      ['अस्थायी दूध दाँतों के प्रारंभ होने की अवस्था', 'Onset of milk teeth stage'],
    ],
    'लगभग 6 वर्ष की आयु से दूध के दाँत गिरने लगते हैं और स्थायी दाँत निकलते हैं; किशोरावस्था के अंत तक 4 अक्ल दाढ़ (Wisdom teeth) मिलाकर कुल 32 दाँत होते हैं।',
    'Around age 6, milk teeth shed and permanent teeth emerge, reaching 28 by ~12–13 years (with 4 wisdom teeth appearing later in late adolescence/adulthood).',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    '"अमूर्त चिंतन, तार्किक तर्क-वितर्क, सामाजिक न्याय की चिंता और आदर्शवाद" किस अवस्था की बौद्धिक पहचान हैं?',
    '"Abstract thinking, logical debate, concern for social justice, and idealism" are intellectual hallmarks of which stage?',
    ['किशोरावस्था (Adolescence)', 'Adolescence'],
    [
      ['शैशवावस्था (Infancy)', 'Infancy'],
      ['पूर्व बाल्यावस्था (Early Childhood)', 'Early Childhood'],
      ['गर्भावस्था (Prenatal Stage)', 'Prenatal Stage'],
    ],
    'किशोरावस्था में मस्तिष्क का प्रीफ्रंटल कॉर्टेक्स और औपचारिक संक्रियात्मक चिंतन विकसित होने से किशोर परिकल्पना, नैतिक आदर्शों और वैचारिक बहस में गहन रुचि लेने लगता है।',
    'Maturing formal operations enable adolescents to reason abstractly, debate ideological issues, and embrace strong social idealism.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'रॉस, जोन्स, क्रो एवं क्रो जैसे विद्वानों ने शारीरिक विकास में "सेकुलर ट्रेंड" (Secular Trend) को किस रूप में देखा है?',
    'In physical development, what does the "Secular Trend" refer to?',
    ['पिछली कुछ पीढ़ियों में बेहतर पोषण और स्वास्थ्य के कारण बच्चों की औसत ऊँचाई व शीघ्र यौवनारंभ में वृद्धि', 'Earlier puberty and taller average height across recent generations due to improved nutrition and healthcare'],
    [
      ['धर्मनिरपेक्ष शिक्षा का पाठ्यक्रम', 'Secular curriculum in schools'],
      ['प्रत्येक पीढ़ी में ऊँचाई का लगातार घटते जाना', 'Continuous decrease in height across generations'],
      ['केवल भाषा के शब्दों में बदलाव', 'Changes solely in spoken vocabulary'],
    ],
    'आधुनिक समय में बेहतर पोषण, टीकाकरण और चिकित्सा सुविधाओं के कारण पिछली शताब्दी की तुलना में आज के बच्चे अपेक्षाकृत अधिक लंबे व शीघ्र वयःसंधि पर पहुँचते हैं—इसे सेकुलर ट्रेंड कहते हैं।',
    'The secular trend reflects generational shifts toward greater average stature and earlier onset of puberty driven by better nutrition and public health.',
    'HARD'
  ),
];

  // =========================================================================
  // 2. बाल विकास की अवस्थाएँ व सिद्धांत — Part B (45 more items)
  // =========================================================================
  q(
    'Stages of Child Development',
    'Maturation Theory',
    'अर्नोल्ड गेसेल (Arnold Gesell) के "परिपक्वता सिद्धांत" (Maturation Theory) का मुख्य निष्कर्ष क्या है?',
    'What is the central conclusion of Arnold Gesell’s "Maturation Theory" of child development?',
    ['विकास मुख्यतः आंतरिक जैविक घड़ी व तंत्रिका-पेशीय परिपक्वता से संचालित होता है; परिपक्वता से पूर्व प्रशिक्षण का लाभ सीमित होता है', 'Development is driven primarily by an internal biological clock; training before maturation yields limited gains'],
    [
      ['कोई भी बच्चा जन्म के एक सप्ताह बाद ही साइकिल चलाना सीख सकता है', 'Any baby can learn to ride a bicycle one week after birth'],
      ['जैविक परिपक्वता का सीखने से कोई संबंध नहीं होता', 'Biological maturation has no connection to learning'],
      ['केवल बाहरी पुरस्कार ही शारीरिक विकास करते हैं', 'Only external rewards drive physical growth'],
    ],
    'गेसेल ने जुड़वाँ बच्चों (Co-twin control study) पर सीढ़ी चढ़ने का प्रयोग करके सिद्ध किया कि जैविक परिपक्वता के बिना समय-पूर्व अभ्यास से स्थायी लाभ नहीं मिलता।',
    'Gesell’s co-twin stair-climbing study showed that early intensive training before neural/muscular maturation yields minimal advantage over natural readiness.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Ecological Systems Theory',
    'यूरी ब्रॉन्फेनब्रेनर (Urie Bronfenbrenner) के पारिस्थितिक तंत्र सिद्धांत में बच्चे का परिवार, विद्यालय और पास-पड़ोस किस स्तर के अंतर्गत आते हैं?',
    'In Urie Bronfenbrenner’s Ecological Systems Theory, which system comprises the child’s immediate family, school, and peer neighborhood?',
    ['लघुमंडल (Microsystem)', 'Microsystem'],
    [
      ['मध्यमंडल (Mesosystem)', 'Mesosystem'],
      ['बाह्यमंडल (Exosystem)', 'Exosystem'],
      ['बृहतमंडल (Macrosystem)', 'Macrosystem'],
    ],
    'ब्रॉन्फेनब्रेनर के अनुसार लघुमंडल (Microsystem) वह निकटतम परिवेश है जिसमें बालक प्रत्यक्ष रूप से अंतःक्रिया करता है (माता-पिता, शिक्षक, मित्र)।',
    'In Bronfenbrenner’s model, the Microsystem is the innermost layer involving face-to-face interactions with family, teachers, and peers.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Ecological Systems Theory',
    'ब्रॉन्फेनब्रेनर के मॉडल के अनुसार माता-पिता और विद्यालय के शिक्षकों के बीच होने वाली पेरेंट-टीचर मीटिंग (PTM) किस तंत्र का उदाहरण है?',
    'According to Bronfenbrenner’s model, a Parent-Teacher Meeting (PTM) connecting home and school is an example of which system?',
    ['मध्यमंडल (Mesosystem)', 'Mesosystem'],
    [
      ['लघुमंडल (Microsystem)', 'Microsystem'],
      ['बृहतमंडल (Macrosystem)', 'Macrosystem'],
      ['कालमंडल (Chronosystem)', 'Chronosystem'],
    ],
    'मध्यमंडल (Mesosystem) दो या दो से अधिक लघुमंडलों (जैसे घर और स्कूल) के आपसी संबंधों और अंतःक्रियाओं को दर्शाता है।',
    'The Mesosystem represents the linkages and interactions between two or more microsystems, such as home and school.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Ecological Systems Theory',
    'यदि किसी बच्चे के माता-पिता के कार्यस्थल पर काम के घंटे अचानक बढ़ा दिए जाएँ और इसका अप्रत्यक्ष प्रभाव बच्चे की देखभाल पर पड़े, तो यह ब्रॉन्फेनब्रेनर के किस तंत्र में आएगा?',
    'If a parent’s workplace unexpectedly increases working hours and indirectly affects the child’s home care, which Bronfenbrenner system does the workplace belong to?',
    ['बाह्यमंडल (Exosystem)', 'Exosystem'],
    [
      ['लघुमंडल (Microsystem)', 'Microsystem'],
      ['मध्यमंडल (Mesosystem)', 'Mesosystem'],
      ['बृहतमंडल (Macrosystem)', 'Macrosystem'],
    ],
    'बाह्यमंडल (Exosystem) में वे संस्थाएँ आती हैं जिनमें बच्चा स्वयं सक्रिय भागीदार नहीं होता, पर वहाँ के निर्णय बच्चे के विकास को अप्रत्यक्ष रूप से प्रभावित करते हैं।',
    'The Exosystem includes settings in which the child does not actively participate (like a parent’s workplace or local school board) that still affect the child indirectly.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Ecological Systems Theory',
    'ब्रॉन्फेनब्रेनर के सिद्धांत में किसी समाज की सांस्कृतिक मान्यताएँ, कानून, रीति-रिवाज और आर्थिक विचारधारा किस तंत्र का निर्माण करते हैं?',
    'In Bronfenbrenner’s theory, a society’s cultural values, laws, customs, and economic ideology form which layer?',
    ['बृहतमंडल (Macrosystem)', 'Macrosystem'],
    [
      ['लघुमंडल (Microsystem)', 'Microsystem'],
      ['मध्यमंडल (Mesosystem)', 'Mesosystem'],
      ['बाह्यमंडल (Exosystem)', 'Exosystem'],
    ],
    'बृहतमंडल (Macrosystem) सबसे बाहरी सांस्कृतिक आवरण है जिसमें समाज के मूल्य, कानून, परंपराएँ और विचारधाराएँ शामिल होती हैं।',
    'The Macrosystem is the overarching cultural blueprint containing societal values, customs, laws, and beliefs.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Ecological Systems Theory',
    'बालक के जीवन में समय के साथ होने वाले ऐतिहासिक व जीवन-घटना परिवर्तनों (जैसे कोविड-19 महामारी या माता-पिता का तलाक) को ब्रॉन्फेनब्रेनर ने क्या नाम दिया?',
    'What did Bronfenbrenner name the dimension representing historical shifts and life transitions over time (such as a pandemic or parental divorce)?',
    ['कालमंडल / घटक समय तंत्र (Chronosystem)', 'Chronosystem'],
    [
      ['मध्यमंडल (Mesosystem)', 'Mesosystem'],
      ['लघुमंडल (Microsystem)', 'Microsystem'],
      ['बाह्यमंडल (Exosystem)', 'Exosystem'],
    ],
    'कालमंडल (Chronosystem) समय के आयाम और ऐतिहासिक या व्यक्तिगत जीवन की बड़ी घटनाओं के विकास पर प्रभाव को दर्शाता है।',
    'The Chronosystem captures the dimension of time, including socio-historical conditions and major life transitions across development.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Attachment & Parenting',
    'मैरी एन्सवर्थ के "अजनबी स्थिति प्रयोग" (Strange Situation) में "सुरक्षित लगाव" (Secure Attachment) वाले शिशु की क्या पहचान होती है?',
    'In Mary Ainsworth’s "Strange Situation" experiment, how does a "Securely Attached" infant behave?',
    ['माँ के जाने पर थोड़ा व्याकुल होता है, पर लौटने पर तुरंत शांत होकर फिर से खेलने लगता है', 'Shows mild distress when the mother leaves, seeks comfort on her return, and resumes exploring'],
    [
      ['माँ के लौटने पर उसकी पूरी तरह उपेक्षा करता है और मुँह फेर लेता है', 'Completely ignores and turns away from the mother upon return'],
      ['माँ के लौटने पर भी शांत नहीं होता और गुस्से से दूर धकेलता है', 'Remains inconsolable and angrily pushes the mother away'],
      ['माँ को देखकर भय से जड़वत (Freeze) हो जाता है', 'Freezes in fear upon seeing the mother'],
    ],
    'सुरक्षित लगाव वाला शिशु देखभालकर्ता को एक "सुरक्षित आधार" (Secure Base) मानता है; पुनर्मिलन पर शीघ्र शांत होकर पुनः वातावरण का अन्वेषण करता है।',
    'Securely attached infants use the caregiver as a secure base, greet their return warmly, settle quickly, and resume exploration.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Attachment & Parenting',
    'डायना बॉमरिंड (Diana Baumrind) के अनुसार किस पालन-पोषण शैली (Parenting Style) से बालकों में सर्वाधिक आत्मविश्वास, आत्म-नियंत्रण और सामाजिक दक्षता विकसित होती है?',
    'According to Diana Baumrind, which parenting style fosters the highest self-confidence, self-control, and social competence in children?',
    ['आधिकारिक / लोकतांत्रिक शैली (Authoritative)', 'Authoritative parenting'],
    [
      ['सत्तावादी / निरंकुश शैली (Authoritarian)', 'Authoritarian parenting'],
      ['अति-अनुमोदक शैली (Permissive / Indulgent)', 'Permissive / Indulgent parenting'],
      ['उपेक्षापूर्ण शैली (Uninvolved / Neglectful)', 'Uninvolved / Neglectful parenting'],
    ],
    'आधिकारिक (Authoritative) माता-पिता उच्च स्नेह/समर्थन के साथ-साथ तर्कसंगत व स्पष्ट नियम रखते हैं और बच्चे के विचारों को भी सुनते हैं; जबकि Authoritarian में स्नेह कम व कठोर नियंत्रण अधिक होता है।',
    'Authoritative parents combine high warmth and responsiveness with reasonable, clearly explained expectations, yielding optimal psychosocial outcomes.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Attachment & Parenting',
    'सत्तावादी (Authoritarian) पालन-पोषण शैली और आधिकारिक (Authoritative) शैली के बीच मुख्य अंतर क्या है?',
    'What is the key difference between Authoritarian and Authoritative parenting styles?',
    ['सत्तावादी शैली में बिना तर्क दिए अंधी आज्ञाकारिता व दंड पर जोर होता है, जबकि आधिकारिक शैली में स्नेह व तार्किक संवाद होता है', 'Authoritarian parenting demands unquestioning obedience with low warmth, whereas authoritative combines warmth with reasoned guidance'],
    [
      ['सत्तावादी माता-पिता कोई नियम नहीं बनाते', 'Authoritarian parents set no rules at all'],
      ['आधिकारिक माता-पिता बच्चों से कोई बात नहीं करते', 'Authoritative parents never communicate with children'],
      ['दोनों शैलियाँ बिल्कुल एक ही हैं', 'Both styles are completely identical'],
    ],
    'सत्तावादी (Authoritarian) शैली में "क्योंकि मैंने कहा" जैसा कठोर रवैया होता है जिससे बच्चों में संकोच या विद्रोह पनप सकता है, जबकि आधिकारिक (Authoritative) शैली संवाद और स्नेह से अनुशासन सिखाती है।',
    'Authoritarian parenting enforces strict obedience ("because I said so") with low warmth, whereas authoritative parenting explains rules democratically.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Emotional Development',
    'शिशु एवं बालक के संवेगात्मक विकास में "संवेगात्मक विनियमन" (Emotional Regulation) से क्या तात्पर्य है?',
    'What is meant by "Emotional Regulation" in child development?',
    ['अपनी भावनाओं की तीव्रता और अभिव्यक्ति को परिस्थिति के अनुसार नियंत्रित व प्रबंधित करने की क्षमता', 'The ability to monitor, manage, and modulate the intensity and expression of one’s emotions appropriately'],
    [
      ['सभी भावनाओं को पूरी तरह दबाकर कभी न रोना', 'Suppressing all feelings completely and never crying'],
      ['जब भी गुस्सा आए तो चीजों को तोड़ देना', 'Breaking objects whenever angry'],
      ['दूसरों के संवेगों का मजाक उड़ाना', 'Mocking others’ emotions'],
    ],
    'उम्र बढ़ने और वयस्कों के सह-विनियमन (Co-regulation) से बालक गुस्से, निराशा या डर को शब्दों में व्यक्त करना व स्वयं को शांत करना सीखता है।',
    'With caregiver modeling and brain maturation, children shift from impulsive outbursts to managing emotional arousal and expressing feelings constructively.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Play & Socialization',
    'मिल्ड्रेड पार्टन (Mildred Parten) के अनुसार 4 से 5 वर्ष के बीच विकसित होने वाला सबसे परिपक्व सामाजिक खेल कौन-सा है?',
    'According to Mildred Parten, what is the most socially mature form of play emerging around ages 4 to 5?',
    ['सहयोगात्मक खेल (Cooperative Play)', 'Cooperative Play'],
    [
      ['अवलोकन खेल (Onlooker Play)', 'Onlooker Play'],
      ['एकाकी खेल (Solitary Play)', 'Solitary Play'],
      ['असंलग्न व्यवहार (Unoccupied Behavior)', 'Unoccupied Behavior'],
    ],
    'पार्टन के 6 चरणों (Unoccupied → Solitary → Onlooker → Parallel → Associative → Cooperative) में सहयोगात्मक खेल सर्वोच्च है, जहाँ बच्चे साझा लक्ष्य व भूमिकाओं के साथ मिलकर खेलते हैं।',
    'In Parten’s sequence, Cooperative Play is the highest social stage, where children organize roles and collaborate toward a shared play goal.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Play & Socialization',
    'कहा जाता है कि "खेल बालक की जन्मजात स्वाभाविक प्रवृत्ति है।" मैकडूगल (McDougall) के 14 मूल प्रवृत्ति सिद्धांत में खेल किस प्रकार का व्यवहार माना गया है?',
    'How does play support cognitive and social development in early and middle childhood?',
    ['यह कल्पना, समस्या समाधान, नियम पालन और सामाजिक भूमिका निर्वाह का अभ्यास कराता है', 'It exercises imagination, problem-solving, rule adherence, and social role-taking'],
    [
      ['यह केवल समय बर्बाद करने का माध्यम है', 'It is merely a waste of academic time'],
      ['यह शारीरिक विकास को अवरुद्ध करता है', 'It stunts physical growth'],
      ['यह केवल वयस्कों के लिए उपयोगी है', 'It is useful only for adults'],
    ],
    'खेल के माध्यम से बालक वास्तविक दुनिया की भूमिकाओं का अभ्यास करता है, सहानुभूति व बारी-बारी इंतजार करना सीखता है और मानसिक तनाव से मुक्त होता है।',
    'Play fosters symbolic imagination, perspective-taking, self-regulation, turn-taking, and motor coordination.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Language Development',
    'लगभग 18 से 24 माह के बच्चे द्वारा बोले जाने वाले दो-शब्दों के संक्षिप्त वाक्य—जैसे "माँ पानी" या "बाबा जा"—को मनोविज्ञान में क्या कहते हैं?',
    'What are concise two-word utterances like "Mommy water" or "Daddy go" produced by 18–24 month toddlers called?',
    ['तार-प्रेषण वाक् (Telegraphic Speech)', 'Telegraphic Speech'],
    [
      ['अहंकेंद्रित वाक् (Egocentric Speech)', 'Egocentric Speech'],
      ['आंतरिक वाक् (Inner Speech)', 'Inner Speech'],
      ['कूइंग (Cooing)', 'Cooing'],
    ],
    'टेलीग्राफिक स्पीच में बच्चा सहायक क्रियाओं और कारक चिह्नों को छोड़कर केवल मुख्य अर्थवाही शब्द (संज्ञा, क्रिया) सही क्रम में बोलता है, जैसे टेलीग्राम में शब्द कम रखे जाते थे।',
    'Telegraphic speech omits minor function words and inflections while preserving essential content words in correct word order.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Language Development',
    'किसी बालक के लगभग 1 वर्ष की आयु में एक ही शब्द (जैसे "पानी" कहकर "मुझे पानी दो") द्वारा पूरा भाव व्यक्त करने को क्या कहा जाता है?',
    'When a ~1-year-old uses a single word (such as saying "Milk!" to mean "Give me milk") to express a whole idea, what is it called?',
    ['होलोफ्रेज़ / एक-शब्दीय वाक्य (Holophrase)', 'Holophrase'],
    [
      ['सिंटैक्स (Syntax)', 'Syntax'],
      ['मॉर्फेम (Morpheme)', 'Morpheme'],
      ['फोनोलॉजिकल लूप (Phonological Loop)', 'Phonological Loop'],
    ],
    'एक शब्द से पूरे वाक्य का आशय व्यक्त करना Holophrase (होलोफ्रेस्टिक अवस्था) कहलाता है, जो लगभग 12 से 18 माह की उम्र में दिखता है।',
    'A holophrase is a single word used by a toddler (~12–18 months) to convey the meaning of an entire sentence or request.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Language Development',
    'नॉम चॉम्स्की (Noam Chomsky) के अनुसार शिशुओं में तीव्र गति से भाषा सीखने के लिए जन्मजात रूप से कौन-सा तंत्र विद्यमान होता है?',
    'According to Noam Chomsky, what innate biological mechanism enables infants to acquire language rapidly?',
    ['भाषा अर्जन यंत्र (Language Acquisition Device - LAD)', 'Language Acquisition Device (LAD)'],
    [
      ['समीपस्थ विकास क्षेत्र (ZPD)', 'Zone of Proximal Development (ZPD)'],
      ['आनुबंधन प्रतिक्षेप (Conditioned Reflex)', 'Conditioned Reflex'],
      ['संरक्षण स्कीमा (Conservation Schema)', 'Conservation Schema'],
    ],
    'चॉम्स्की का मानना है कि मानव मस्तिष्क में जन्म से सार्वभौमिक व्याकरण (Universal Grammar) ग्रहण करने हेतु LAD होता है, जिसके कारण बच्चे सीमित इनपुट से भी नियम बना लेते हैं।',
    'Chomsky proposed that humans are born with an innate Language Acquisition Device (LAD) containing Universal Grammar.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Socialization',
    'बालक के समाजीकरण (Socialization) की दो प्रमुख "प्राथमिक एवं द्वितीयक" संस्थाएँ क्रमशः कौन-सी हैं?',
    'Which are the primary and secondary major agencies of a child’s socialization, respectively?',
    ['प्राथमिक: परिवार; द्वितीयक: विद्यालय एवं जनसंचार माध्यम', 'Primary: Family; Secondary: School and Mass Media'],
    [
      ['प्राथमिक: विद्यालय; द्वितीयक: परिवार', 'Primary: School; Secondary: Family'],
      ['प्राथमिक: समाचार पत्र; द्वितीयक: माता-पिता', 'Primary: Newspapers; Secondary: Parents'],
      ['प्राथमिक: पुलिस; द्वितीयक: सहोदर भाई-बहन', 'Primary: Police; Secondary: Siblings'],
    ],
    'परिवार बालक की प्रथम पाठशाला और समाजीकरण की प्राथमिक संस्था है; तत्पश्चात् विद्यालय, मित्र-समूह और मीडिया द्वितीयक (गौण) संस्थाओं की भूमिका निभाते हैं।',
    'Family is the primary agency of socialization from infancy, while schools, peer groups, and media act as key secondary agencies.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Socialization',
    '"समाजीकरण" की प्रक्रिया किस अवस्था में प्रारंभ होती है और कब तक चलती है?',
    'When does the process of "Socialization" begin and how long does it continue?',
    ['शैशवावस्था से प्रारंभ होकर जीवन भर निरंतर चलती है', 'Begins in infancy and continues continuously throughout life'],
    [
      ['केवल विद्यालय में प्रवेश लेने पर शुरू होती है और 18 वर्ष पर समाप्त होती है', 'Starts at school admission and ends at age 18'],
      ['केवल किशोरावस्था में प्रारंभ होती है', 'Begins only in adolescence'],
      ['जन्म से 5 वर्ष तक सीमित रहती है', 'Restricted strictly to birth to age 5'],
    ],
    'समाजीकरण जीवनपर्यंत (Lifelong) प्रक्रिया है: प्राथमिक समाजीकरण परिवार में, द्वितीयक स्कूल-साथियों में और वयस्क भूमिकाओं का पुनःसमाजीकरण आगे भी चलता रहता है।',
    'Socialization is a lifelong process starting in infancy with caregivers and evolving through schooling, peer cultures, adulthood, and career roles.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Motor Development',
    'पूर्व बाल्यावस्था (3–5 वर्ष) के दौरान "सूक्ष्म गामक कौशल" (Fine Motor Skills) का सही उदाहरण कौन-सा है?',
    'Which of the following is an accurate example of a "Fine Motor Skill" during early childhood (3–5 years)?',
    ['क्रेयॉन से कागज पर गोल आकृति बनाना या शर्ट के बटन लगाना', 'Drawing shapes with a crayon or buttoning a shirt'],
    [
      ['मैदान में तेज दौड़ लगाना', 'Sprinting fast across a field'],
      ['सीढ़ियों पर दोनों पैरों से कूदना', 'Jumping down stairs with both feet'],
      ['साइकिल के पैडल मारना', 'Pedaling a tricycle'],
    ],
    'सूक्ष्म गामक कौशल में हाथ, कलाई और उंगलियों की छोटी मांसपेशियों व आँख-हाथ के समन्वय का उपयोग होता है; दौड़ना-कूदना स्थूल गामक (Gross Motor) कौशल हैं।',
    'Fine motor skills involve precise small-muscle coordination of fingers, hands, and eyes (drawing, buttoning, cutting), unlike large-muscle gross motor skills.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'मध्य एवं उत्तर बाल्यावस्था में बालक की "मेटाकॉग्निशन" (Metacognition / परासंज्ञान) क्षमता विकसित होने लगती है। इसका क्या अर्थ है?',
    'During middle and late childhood, "Metacognition" begins to develop. What does metacognition mean?',
    ['स्वयं की चिंतन एवं स्मरण प्रक्रियाओं के बारे में सोचना और उनकी निगरानी करना ("चिंतन के बारे में चिंतन")', 'Thinking about and monitoring one’s own thinking and learning processes'],
    [
      ['केवल शारीरिक शक्ति का प्रदर्शन करना', 'Displaying sheer physical strength'],
      ['बिना समझे शब्दों को दोहराना', 'Repeating words mindlessly'],
      ['दूसरों के चेहरे के भाव न पढ़ पाना', 'Inability to read facial expressions'],
    ],
    'मेटाकॉग्निशन का अर्थ है यह जानना कि मुझे क्या आता है, क्या कठिन लग रहा है और याद करने या समस्या सुलझाने के लिए कौन-सी रणनीति अपनानी चाहिए।',
    'Metacognition ("thinking about thinking") is awareness and self-regulation of one’s own comprehension, memory strategies, and problem-solving.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    '4 वर्ष के बच्चों में "मन का सिद्धांत" (Theory of Mind) विकसित होने का सबसे प्रमुख प्रमाण क्या है?',
    'What is the classic evidence that "Theory of Mind" emerges around age 4 in children?',
    ['वे यह समझ लेते हैं कि दूसरे व्यक्ति के पास वास्तविकता से भिन्न या गलत विश्वास (False Belief) हो सकता है', 'They understand that another person can hold a belief different from reality (False-Belief task)'],
    [
      ['वे गणित के द्विघात समीकरण हल कर लेते हैं', 'They can solve quadratic equations'],
      ['वे स्वयं को दर्पण में नहीं पहचान पाते', 'They fail to recognize themselves in a mirror'],
      ['वे केवल अपने ही दृष्टिकोण को सच मानते हैं', 'They assume everyone knows exactly what they know'],
    ],
    'सैली-ऐन कार्य (Sally-Anne False-Belief Task) दिखाता है कि ~4 वर्ष की आयु में बच्चा समझने लगता है कि दूसरों के विचार, ज्ञान और इरादे उसके अपने मन से अलग हो सकते हैं।',
    'Passing False-Belief tasks (like the Sally-Anne test) around age 4 proves children grasp that others have separate mental states and beliefs.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'नवजात शिशु की स्थिति का जन्म के 1 और 5 मिनट बाद त्वरित आकलन करने हेतु प्रयुक्त "अपगर स्कोर" (APGAR Score) के 5 घटक कौन-से हैं?',
    'What are the five components assessed in the "APGAR Score" to evaluate newborn health at 1 and 5 minutes after birth?',
    ['त्वचा का रंग (Appearance), नाड़ी (Pulse), प्रतिक्षेप (Grimace), मांसपेशी तान (Activity) एवं श्वसन (Respiration)', 'Appearance, Pulse, Grimace, Activity, and Respiration'],
    [
      ['आयु, भार, ऊँचाई, सिर का घेरा एवं दाँत', 'Age, Weight, Height, Head circumference, and Teeth'],
      ['ध्यान, स्मृति, भाषा, तर्क एवं संवेग', 'Attention, Memory, Language, Logic, and Emotion'],
      ['भूख, प्यास, नींद, रोना एवं मुस्कान', 'Hunger, Thirst, Sleep, Crying, and Smiling'],
    ],
    'डॉ. वर्जीनिया अपगर (1952) द्वारा निर्मित APGAR पैमाना 0–10 अंक देता है; 7 से 10 अंक सामान्य स्वस्थ नवजात को दर्शाते हैं।',
    'Devised by Dr. Virginia Apgar (1952), the APGAR scale scores Appearance, Pulse, Grimace, Activity, and Respiration from 0–10 (7–10 is normal).',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'मातृत्व एवं शिशु स्वास्थ्य के अनुसार "कंगारू मदर केयर" (Kangaroo Mother Care) किस शिशु वर्ग के लिए सर्वाधिक लाभकारी मानी जाती है?',
    'For which group of newborns is "Kangaroo Mother Care" (skin-to-skin contact) most strongly recommended?',
    ['समय-पूर्व जन्मे (Preterm) एवं कम वजन वाले (Low Birth Weight) नवजात शिशु', 'Preterm and Low Birth Weight (LBW) newborns'],
    [
      ['5 वर्ष से बड़े विद्यालयी बालक', 'School-going children older than 5 years'],
      ['केवल किशोर खिलाड़ी', 'Only adolescent athletes'],
      ['अधिक वजन वाले 2 वर्षीय बच्चे', 'Overweight 2-year-olds'],
    ],
    'माँ या पिता की छाती से त्वचा-से-त्वचा संपर्क (KMC) कम वजन वाले नवजात के शरीर का तापमान स्थिर रखता है, स्तनपान बढ़ाता है और संवेगात्मक सुरक्षा देता है।',
    'Skin-to-skin Kangaroo Mother Care stabilizes temperature, heart rate, breastfeeding, and bonding in preterm and low-birth-weight infants.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'शारीरिक विकास के संदर्भ में बाल्यावस्था में प्रति वर्ष औसत ऊँचाई और भार में वृद्धि शैशव व किशोरावस्था की तुलना में कैसी होती है?',
    'How does the annual rate of height and weight gain during middle/late childhood compare to infancy and puberty?',
    ['धीमी और अपेक्षाकृत स्थिर दर से वृद्धि होती है', 'Slower and relatively steady growth rate'],
    [
      ['शैशव से भी दोगुनी तेज गति से वृद्धि होती है', 'Twice as fast as infancy'],
      ['ऊँचाई बिल्कुल नहीं बढ़ती और कम होने लगती है', 'Height completely stops or shrinks'],
      ['भार प्रति माह दोगुना होता है', 'Weight doubles every month'],
    ],
    '6 से 11 वर्ष के बीच बच्चा प्रति वर्ष लगभग 2–3 इंच ऊँचाई और 2–3 किग्रा वजन प्राप्त करता है, जो शैशव और किशोरावस्था के उछाल की तुलना में शांत व स्थिर चरण है।',
    'Between ages 6 and 11, growth proceeds at a slow, steady pace (~5–7 cm and ~2–3 kg per year) between the rapid surges of infancy and puberty.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरावस्था में "लौंगिट्यूडिनल बनाम क्रॉस-सेक्शनल" विकासात्मक शोध विधियों में मुख्य अंतर क्या है?',
    'In studying developmental stages, what is the primary difference between Longitudinal and Cross-Sectional research designs?',
    ['अनुदैर्ध्य (Longitudinal) एक ही समूह का वर्षों तक अध्ययन करता है, जबकि अनुप्रस्थ (Cross-sectional) एक ही समय विभिन्न आयु समूहों की तुलना करता है', 'Longitudinal studies follow the same cohort over time, whereas cross-sectional studies compare different age groups simultaneously'],
    [
      ['अनुदैर्ध्य केवल 1 दिन में पूरा होता है', 'Longitudinal studies finish in a single day'],
      ['अनुप्रस्थ केवल एक व्यक्ति का अध्ययन करता है', 'Cross-sectional studies examine only one individual'],
      ['दोनों में आयु का कोई उपयोग नहीं होता', 'Neither design considers age'],
    ],
    'अनुदैर्ध्य अध्ययन वास्तविक विकासात्मक परिवर्तन दिखाता है पर खर्चीला व समय-साध्य है; अनुप्रस्थ त्वरित है पर कोहोर्ट प्रभाव (Cohort Effect) से प्रभावित हो सकता है।',
    'Longitudinal designs track the same participants across ages (revealing individual change), while cross-sectional designs sample different age groups at one time point.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'प्रायः किशोरों में रात्रि में देर से सोने और सुबह देर तक जागने की प्रवृत्ति देखी जाती है। इसका एक प्रमुख जैविक कारण क्या है?',
    'Adolescents frequently tend to stay up late and wake late. What is a primary biological reason for this shift?',
    ['किशोरावस्था में मेलाटोनिन (Melatonin) हार्मोन के स्राव का समय प्राकृतिक रूप से लगभग 2 घंटे पीछे खिसक जाना', 'A natural circadian phase delay in melatonin secretion during puberty'],
    [
      ['किशोरों में नींद की आवश्यकता समाप्त हो जाना', 'Complete elimination of sleep need in adolescence'],
      ['थायरॉक्सिन हार्मोन का बंद हो जाना', 'Cessation of thyroxine secretion'],
      ['किशोरों को बिल्कुल आलस्य न आना', 'Total absence of fatigue'],
    ],
    'प्यूबर्टी के दौरान जैविक घड़ी (Circadian Rhythm) में बदलाव से नींद लाने वाला हार्मोन मेलाटोनिन रात में देर से स्रावित होता है, जबकि किशोरों को 8–10 घंटे की नींद चाहिए।',
    'During puberty, the circadian rhythm shifts later, delaying evening melatonin release even though adolescents still require 8–10 hours of sleep.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किरण, एक 15 वर्षीय छात्रा, अपने शरीर की बनावट को लेकर अत्यधिक चिंतित रहती है और बहुत कम भोजन करने लगी है। वह किस संभावित विकार के जोखिम में हो सकती है?',
    'Kiran, a 15-year-old student, is intensely preoccupied with body weight and severely restricts food intake. Which adolescent disorder is she at risk for?',
    ['एनोरेक्सिया नर्वोसा (Anorexia Nervosa)', 'Anorexia Nervosa'],
    [
      ['डिस्कैलकुलिया (Dyscalculia)', 'Dyscalculia'],
      ['नार्कोलेप्सी (Narcolepsy)', 'Narcolepsy'],
      ['ऑटिज्म (Autism)', 'Autism'],
    ],
    'एनोरेक्सिया नर्वोसा और बुलिमिया नर्वोसा किशोरावस्था में शरीर-छवि (Body Image) असंतोष से जुड़े प्रमुख भोजन विकार (Eating Disorders) हैं।',
    'Anorexia nervosa (severe food restriction driven by distorted body image and fear of weight gain) is a serious eating disorder peaking in adolescence.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोर मस्तिष्क विकास के संदर्भ में "अग्रमस्तिष्क के प्रीफ्रंटल कॉर्टेक्स की तुलना में लिम्बिक सिस्टम का पहले परिपक्व होना" किस व्यवहार को स्पष्ट करता है?',
    'In adolescent neuroscience, the earlier maturation of the Limbic System relative to the Prefrontal Cortex helps explain which adolescent tendency?',
    ['उच्च आवेगशीलता, संवेगात्मक प्रतिक्रियाशीलता और साथियों की उपस्थिति में जोखिम लेना', 'Heightened emotional reactivity, impulsivity, and reward/risk-taking especially around peers'],
    [
      ['पूर्णतः भावना-शून्य और रोबोट जैसा व्यवहार', 'Completely emotionless, robotic behavior'],
      ['बचपन की तुलना में धीमा शारीरिक विकास', 'Slower bodily growth than childhood'],
      ['भाषा बोलने की क्षमता का लोप', 'Loss of spoken language ability'],
    ],
    'पुरस्कार व संवेग से जुड़ा लिम्बिक सिस्टम (Amygdala/Striatum) किशोरावस्था में अत्यंत सक्रिय हो जाता है, जबकि आवेग नियंत्रण व योजना बनाने वाला प्रीफ्रंटल कॉर्टेक्स लगभग 25 वर्ष तक परिपक्व होता है।',
    'Because the socio-emotional limbic system matures faster than the impulse-regulating prefrontal cortex, adolescents are more sensitive to peer rewards and emotions.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    '"विकास परिपक्वता और अधिगम दोनों की अंतःक्रिया का परिणाम है"—यह कथन किस रूप में सत्य है?',
    'How is the statement "Development is the product of both maturation and learning" true?',
    ['परिपक्वता जैविक सीमा और तत्परता देती है, जबकि अधिगम अनुभवों के माध्यम से उस क्षमता को कौशल में बदलता है', 'Maturation provides biological readiness and limits, while learning transforms that potential into functional skills'],
    [
      ['अधिगम केवल 30 वर्ष के बाद शुरू होता है', 'Learning starts only after age 30'],
      ['परिपक्वता पूरी तरह विद्यालय की किताबों से आती है', 'Maturation comes entirely from textbooks'],
      ['परिपक्वता और अधिगम एक-दूसरे के विरोधी हैं', 'Maturation and learning oppose each other'],
    ],
    'उदाहरणार्थ, बच्चे का स्वरयंत्र और मस्तिष्क परिपक्व हुए बिना वह बोल नहीं सकता (परिपक्वता), पर बिना परिवेश से शब्द सुने-सीखे वह भाषा नहीं बोल पाएगा (अधिगम)।',
    'Biological maturation provides neural and muscular readiness, while environmental learning and practice turn readiness into actual competencies.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Moral & Prosocial Growth',
    'बच्चों में "समानुभूति" (Empathy) और "सहानुभूति" (Sympathy) के बीच प्रमुख अंतर क्या है?',
    'What is the key distinction between "Empathy" and "Sympathy" in social-emotional development?',
    ['समानुभूति का अर्थ दूसरे की भावना को उसी के दृष्टिकोण से अनुभव करना है, जबकि सहानुभूति दूसरे के दुख पर दया या करुणा प्रकट करना है', 'Empathy means feeling with another person from their perspective, whereas sympathy means feeling concern or pity for them'],
    [
      ['समानुभूति केवल जानवरों के प्रति होती है', 'Empathy applies only to animals'],
      ['सहानुभूति में हम दूसरे पर हँसते हैं', 'Sympathy means laughing at others'],
      ['दोनों का अर्थ एक-दूसरे से ईर्ष्या करना है', 'Both mean envying others'],
    ],
    'समानुभूति ("दूसरों के जूते में पैर रखकर महसूस करना") परोपकारिता (Prosocial Behavior) और सकारात्मक सहपाठी संबंधों को बढ़ावा देती है।',
    'Empathy involves resonating with and understanding another’s emotional state from their perspective, strongly motivating prosocial helping behavior.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Early Childhood (पूर्व बाल्यावस्था)',
    'माता-पिता की अपेक्षाओं से मेल न खाने पर 2 से 3 वर्ष का बच्चा जमीन पर लेटकर चिल्लाने लगता है (Temper Tantrum)। इस उम्र में इसका मुख्य कारण क्या होता है?',
    'When 2- to 3-year-olds throw "temper tantrums" upon frustration, what is the primary developmental cause?',
    ['तीव्र इच्छा व स्वायत्तता की चाह के साथ अपर्याप्त भाषा कौशल और संवेगात्मक नियंत्रण की कमी', 'Strong urge for autonomy combined with limited expressive language and immature emotional regulation'],
    [
      ['गंभीर आपराधिक मानसिकता', 'Severe criminal intent'],
      ['औपचारिक तर्क का अत्यधिक विकास', 'Excessive formal logical reasoning'],
      ['स्मरण शक्ति का पूर्ण अभाव', 'Total absence of memory'],
    ],
    'टॉडलर अवस्था में बच्चा स्वयं कार्य करना चाहता है, पर अपनी निराशा को शब्दों में व्यक्त करने और भावनाओं को नियंत्रित करने की क्षमता अभी विकसित हो रही होती है।',
    'Toddlers seek independence while still lacking the verbal fluency and prefrontal self-regulation needed to manage intense frustration.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'जन्म के समय शिशु का कौन-सा संवेदी तंत्र सबसे कम विकसित होता है और लगभग 6 से 8 माह में वयस्क स्तर के निकट पहुँचता है?',
    'Which sensory system is least mature at birth and approaches near-adult acuity around 6 to 8 months of age?',
    ['दृष्टि (Vision)', 'Vision'],
    [
      ['श्रवण (Hearing)', 'Hearing'],
      ['स्पर्श (Touch)', 'Touch'],
      ['गंध व स्वाद (Smell and Taste)', 'Smell and Taste'],
    ],
    'गर्भ में ही शिशु ध्वनियाँ सुन सकता है और जन्म पर स्पर्श, गंध व स्वाद काफी विकसित होते हैं; परंतु नवजात की दृष्टि (~8–12 इंच तक स्पष्ट, 20/400) सबसे कम विकसित होती है।',
    'Hearing, touch, smell, and taste function well before/at birth, whereas visual acuity is initially blurry (~20/400) and sharpens by 6–8 months.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'उत्तर बाल्यावस्था (6–12 वर्ष) के दौरान बालक के आत्म-संप्रत्यय (Self-Concept) में क्या महत्वपूर्ण बदलाव आता है?',
    'What major shift occurs in a child’s "Self-Concept" during Middle/Late Childhood (6–12 years)?',
    ['आत्म-वर्णन बाहरी शारीरिक गुणों से हटकर मनोवैज्ञानिक गुणों, सामाजिक तुलना और क्षमताओं पर आधारित होने लगता है', 'Self-descriptions shift from physical traits to psychological traits, social comparison, and competencies'],
    [
      ['बच्चा स्वयं को पहचानना पूरी तरह भूल जाता है', 'The child completely forgets their own identity'],
      ['केवल अपने खिलौनों के नाम को ही अपना परिचय मानता है', 'Defines self solely by listing owned toys'],
      ['दूसरों से अपनी तुलना करना बंद कर देता है', 'Stops comparing themselves with peers'],
    ],
    'पूर्व बाल्यावस्था में बच्चा कहता है "मेरे पास लाल साइकिल है, मैं तेज दौड़ता हूँ", जबकि उत्तर बाल्यावस्था में वह कहता है "मैं गणित में अच्छा हूँ पर कभी-कभी शर्मीला हो जाता हूँ।"',
    'While preschoolers describe concrete physical features, school-age children describe internal traits, balanced strengths/weaknesses, and peer comparisons.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Adolescence (किशोरावस्था)',
    'किशोरावस्था में "मित्र-समूह के दबाव" (Peer Pressure) का सर्वाधिक सकारात्मक उपयोग कैसे हो सकता है?',
    'How can "Peer Pressure" exert a positive influence during Adolescence?',
    ['खेल, अध्ययन, समाजसेवा और अनुशासित जीवनशैली अपनाने के लिए प्रेरित करके', 'By encouraging academic effort, sports participation, volunteering, and healthy habits'],
    [
      ['माता-पिता से संवाद पूरी तरह तोड़कर', 'By cutting off all communication with parents'],
      ['केवल नशे और जोखिम भरे व्यवहार को बढ़ावा देकर', 'Only by promoting substance abuse and recklessness'],
      ['सभी विद्यालयी नियमों की अवहेलना करके', 'By defying all school norms'],
    ],
    'सहपाठी दबाव सदैव नकारात्मक नहीं होता; सकारात्मक मित्र-समूह किशोर को बेहतर ग्रेड लाने, प्रतियोगिताओं में भाग लेने और सामाजिक कार्यों के लिए प्रेरित करता है।',
    'Peer influence is not always negative; prosocial peer groups motivate higher academic engagement, sports, and community involvement.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'गर्भावस्था में माता द्वारा अत्यधिक तनाव लेने पर कॉर्टिसोल जैसे तनाव हार्मोन भ्रूण तक पहुँच सकते हैं। यह किस बात का प्रमाण है?',
    'During pregnancy, severe maternal stress releases cortisol that can cross the placenta and affect the fetus. What does this prove?',
    ['पर्यावरणीय प्रभाव जन्म से पूर्व ही गर्भस्थ विकास को प्रभावित करना शुरू कर देते हैं', 'Environmental factors begin shaping development even before birth during the prenatal period'],
    [
      ['गर्भ के भीतर बच्चा बाहरी वातावरण से पूरी तरह सुरक्षित व अछूता रहता है', 'The fetus is totally insulated from all environmental conditions'],
      ['तनाव केवल जन्म के 10 वर्ष बाद असर करता है', 'Stress affects children only 10 years after birth'],
      ['जन्म से पूर्व कोई विकास ही नहीं होता', 'No development occurs before birth'],
    ],
    'गर्भकालीन परिवेश भी एक प्रकार का वातावरण है; माँ का पोषण, स्वास्थ्य, दवाएँ और संवेगात्मक तनाव भ्रूण के तंत्रिका तंत्र व जन्म भार को प्रभावित करते हैं।',
    'The womb itself is an environment; maternal nutrition, toxins, and chronic stress hormones influence fetal brain development and birth outcomes.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Childhood (बाल्यावस्था)',
    'स्टर्न एवं डब्ल्यू. सी. बैगले के अनुसार प्रारंभिक विद्यालयी वर्षों में रचनात्मक लेखन, चित्रकला और शिल्प कार्यों का महत्व क्यों अधिक है?',
    'Why are creative drawing, crafts, and hands-on projects particularly valuable during the elementary school years?',
    ['ये बालक की रचनात्मक प्रवृत्ति, सूक्ष्म पेशीय समन्वय और मूर्त चिंतन को अभिव्यक्ति देते हैं', 'They channel constructive urges, refine fine motor coordination, and support concrete thinking'],
    [
      ['ये बच्चों को थकाकर सुलाने के काम आते हैं', 'They merely tire children out so they sleep'],
      ['इनसे परीक्षा के अंक अपने आप बढ़ जाते हैं', 'They automatically inflate exam marks'],
      ['ये केवल समय बिताने की बिना उद्देश्य गतिविधि हैं', 'They are purposeless time-fillers'],
    ],
    'बाल्यावस्था में "निर्माण एवं सृजन" की प्रवृत्ति प्रबल होती है; हस्तशिल्प, मॉडल व चित्रकला से सीखने में रुचि, आत्मविश्वास और व्यावहारिक कौशल विकसित होते हैं।',
    'Elementary children thrive on constructive, hands-on activity that links tactile motor control with concrete conceptual understanding.',
    'EASY'
  ),
  q(
    'Stages of Child Development',
    'Stage Divisions',
    'किस शिक्षाशास्त्री या मनोवैज्ञानिक ने मानव विकास की अवस्थाओं को "शैशवावस्था (जन्म–5), बाल्यावस्था (5–12), किशोरावस्था (12–18), प्रौढ़ावस्था (18+)" के रूप में बाँटा?',
    'Which psychologist’s four-stage classification (Infancy 0–5, Childhood 5–12, Adolescence 12–18, Adulthood 18+) is widely taught in Indian Teacher Education?',
    ['जे. एस. रॉस (J. S. Ross)', 'J. S. Ross'],
    [
      ['जीन पियाजे', 'Jean Piaget'],
      ['सिगमंड फ्रायड', 'Sigmund Freud'],
      ['जे. बी. वाटसन', 'J. B. Watson'],
    ],
    'जे. एस. रॉस का वर्गीकरण (शैशवावस्था 1–5 वर्ष, पूर्व बाल्यावस्था 5–12 वर्ष या 6–12, किशोरावस्था 12–18, प्रौढ़ावस्था 18+) भारतीय शिक्षक पात्रता परीक्षाओं में मानक रूप से पढ़ाया जाता है।',
    'J. S. Ross’s four-stage age division (Infancy 0–5, Childhood 5–12, Adolescence 12–18, Adulthood 18+) is a staple reference in Indian teacher education.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Infancy (शैशवावस्था)',
    'अर्नेस्ट जोन्स (Ernest Jones) ने किस आयु सीमा को शैशवावस्था माना है?',
    'What age range did Ernest Jones designate for Infancy?',
    ['जन्म से 5 वर्ष (या 6 वर्ष) तक', 'Birth to 5 (or 6) years'],
    [
      ['जन्म से 2 सप्ताह तक', 'Birth to 2 weeks'],
      ['6 वर्ष से 12 वर्ष तक', '6 to 12 years'],
      ['12 वर्ष से 18 वर्ष तक', '12 to 18 years'],
    ],
    'अर्नेस्ट जोन्स ने विकास को चार भागों में बाँटा: शैशवावस्था (0–5/6 वर्ष), बाल्यावस्था (6–12 वर्ष), किशोरावस्था (12–18 वर्ष) तथा प्रौढ़ावस्था (18 वर्ष के बाद)।',
    'Ernest Jones classified Infancy as 0–5/6 years, Childhood as 6–12 years, Adolescence as 12–18 years, and Adulthood beyond 18.',
    'MEDIUM'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    'सिनेप्स निर्माण (Synaptogenesis) और सिनेप्टिक प्रूनिंग (Synaptic Pruning) मस्तिष्क विकास की किस विशेषता को दर्शाते हैं?',
    'What aspect of early brain development do "Synaptogenesis" and "Synaptic Pruning" represent?',
    ['प्रारंभिक वर्षों में अत्यधिक तंत्रिका संपर्क बनते हैं और फिर उपयोग न होने वाले संपर्क छँटकर दक्ष नेटवर्क बनाते हैं', 'Rapid proliferation of neural connections early on, followed by elimination of unused synapses to enhance efficiency'],
    [
      ['किशोरावस्था के बाद मस्तिष्क में कोई नया जुड़ाव नहीं बनता', 'No new neural pathways ever form after infancy'],
      ['केवल मस्तिष्क की कोशिकाओं का आकार घटता जाता है', 'Brain cells simply shrink continuously'],
      ['मस्तिष्क के दोनों गोलार्द्ध अलग होकर कार्य करना बंद कर देते हैं', 'The two brain hemispheres stop communicating'],
    ],
    '"Use it or lose it" सिद्धांत के अनुसार शैशवावस्था में अरबों अतिरिक्त सिनेप्स बनते हैं और अनुभव के आधार पर प्रयुक्त मार्ग मजबूत व अप्रयुक्त मार्ग छँट (Prune) जाते हैं।',
    'Following "use it or lose it," early childhood sees explosive synaptogenesis, and synaptic pruning refines neural circuits based on actual experience.',
    'HARD'
  ),
  q(
    'Stages of Child Development',
    'Principles of Development',
    '"माइलिनेशन" (Myelination) की प्रक्रिया बालक के तंत्रिका तंत्र और व्यवहार को कैसे प्रभावित करती है?',
    'How does the process of "Myelination" affect a child’s nervous system and behavior?',
    ['तंत्रिका तंतुओं पर वसा की परत चढ़ने से तंत्रिका आवेगों का संचरण तेज, सटीक व समन्वित हो जाता है', 'Insulating nerve axons with myelin speeds up neural transmission, improving coordination and processing speed'],
    [
      ['यह स्मृति को धीमा कर देता है', 'It slows down memory recall'],
      ['यह केवल हड्डियों की लंबाई बढ़ाता है', 'It solely lengthens leg bones'],
      ['यह बालक की सुनने की क्षमता नष्ट कर देता है', 'It destroys auditory sensitivity'],
    ],
    'एक्सॉन पर माइलिन आवरण बनने से संकेत तीव्र गति से प्रवाहित होते हैं, जिससे शैशव से किशोरावस्था तक गामक नियंत्रण, ध्यान और प्रसंस्करण गति में सुधार होता है।',
    'Myelin sheaths insulate axons, dramatically accelerating neural impulse speed and supporting smoother motor control and faster cognitive processing.',
    'HARD'
  ),

  // =========================================================================
  // 3. विकास को प्रभावित करने वाले कारक (Factors Affecting Development) — 80 Questions
  // =========================================================================
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"विकास आनुवंशिकता और वातावरण का योग नहीं, बल्कि गुणनफल है"—यह प्रसिद्ध समीकरण किसने दिया?',
    '"Development is not the sum, but the product of heredity and environment"—who proposed this famous formula?',
    ['आर. एस. वुडवर्थ एवं मार्क्विस', 'R. S. Woodworth and Marquis'],
    [
      ['फ्रांसिस गाल्टन', 'Francis Galton'],
      ['ग्रेगर मेंडल', 'Gregor Mendel'],
      ['जीन पियाजे', 'Jean Piaget'],
    ],
    'वुडवर्थ के अनुसार D = H × E (विकास = आनुवंशिकता × वातावरण); अर्थात् यदि दोनों में से कोई भी शून्य हो, तो विकास संभव नहीं है, दोनों एक-दूसरे के पूरक हैं।',
    'Woodworth formulated Development = Heredity × Environment, emphasizing their multiplicative interdependence rather than simple addition.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"वंशानुक्रम माता-पिता से संतान को प्राप्त होने वाले गुणों का नाम है"—यह परिभाषा किस मनोवैज्ञानिक ने दी?',
    '"Heredity is the sum total of traits transmitted from parents to offspring"—who gave this definition?',
    ['रूथ बेनेडिक्ट', 'Ruth Benedict'],
    [
      ['जेम्स ड्रेवर', 'James Drever'],
      ['एच. ए. पीटरसन', 'H. A. Peterson'],
      ['बी. एन. झा', 'B. N. Jha'],
    ],
    'मानवविज्ञानी रूथ बेनेडिक्ट ने आनुवंशिकता को माता-पिता से संतान को हस्तांतरित होने वाले जैविक गुणों के रूप में परिभाषित किया।',
    'Ruth Benedict defined heredity as the transmission of biological traits from parents to their offspring.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"मुझे एक दर्जन स्वस्थ शिशु दे दीजिए, मैं उन्हें डॉक्टर, वकील, कलाकार, यहाँ तक कि भिखारी या चोर भी बना सकता हूँ, चाहे उनके पूर्वजों की प्रतिभा कुछ भी रही हो।" यह अतिवादी पर्यावरणीय कथन किसका है?',
    '"Give me a dozen healthy infants... and I’ll guarantee to train any one to become a doctor, lawyer, artist, beggar-man and thief, regardless of his ancestors." Who made this statement?',
    ['जे. बी. वाटसन', 'John B. Watson'],
    [
      ['फ्रांसिस गाल्टन', 'Francis Galton'],
      ['चार्ल्स डार्विन', 'Charles Darwin'],
      ['हेनरी गोडार्ड', 'Henry Goddard'],
    ],
    'व्यवहारवाद के प्रवर्तक जे. बी. वाटसन ने आनुवंशिकता की तुलना में वातावरण और अनुबंधन (Conditioning) की भूमिका को अत्यधिक निर्णायक माना।',
    'Behaviorist founder John B. Watson championed extreme environmentalism ("nurture"), asserting conditioning shapes human destiny regardless of ancestry.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'रॉस, बोरिंग और लैंगफील्ड के अनुसार "वातावरण वह प्रत्येक वस्तु है जो व्यक्ति के जींस (Genes) के अतिरिक्त उसे प्रभावित करती है।" यह कथन किसका है?',
    '"Environment is everything that affects the individual except his genes"—whose definition is this?',
    ['बोरिंग, लैंगफील्ड एवं वेल्ड', 'Boring, Langfeld, and Weld'],
    [
      ['विलियम मैकडूगल', 'William McDougall'],
      ['पी. जिसबर्ट', 'P. Gisbert'],
      ['डगलस एवं हॉलैंड', 'Douglas and Holland'],
    ],
    'बोरिंग, लैंगफील्ड व वेल्ड ने स्पष्ट किया कि गर्भाधान के समय प्राप्त जींस के अलावा समस्त बाह्य व आंतरिक परिस्थितियाँ (गर्भ से लेकर समाज तक) वातावरण में आती हैं।',
    'Boring, Langfeld, and Weld defined environment broadly as every force affecting the individual apart from their genetic makeup.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'गर्भधारण से पूर्व तथा बाद में माता-पिता के गुणसूत्रों के माध्यम से संतान में जाने वाले "बीजकोष की निरंतरता का सिद्धांत" (Continuity of Germplasm) किसने दिया?',
    'Who proposed the "Theory of Continuity of Germplasm", stating that germ cells pass unchanged across generations regardless of somatic changes?',
    ['अगस्त वीज़मैन (August Weismann)', 'August Weismann'],
    [
      ['जीन बैप्टिस्ट लैमार्क', 'Jean-Baptiste Lamarck'],
      ['ग्रेगर मेंडल', 'Gregor Mendel'],
      ['फ्रांसिस गाल्टन', 'Francis Galton'],
    ],
    'अगस्त वीज़मैन ने चूहों की 21 पीढ़ियों तक पूँछ काटने के प्रयोग से लैमार्क के अर्जित गुणों की वंशागति का खंडन किया और बताया कि केवल जनन-द्रव्य (Germplasm) अगली पीढ़ी में जाता है।',
    'August Weismann cut mice tails for generations to refute Lamarck, proving somatic modifications are not inherited and only germplasm transmits traits.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"अर्जित गुणों के संचरण का सिद्धांत" (Inheritance of Acquired Characteristics), जिसका उदाहरण जिराफ की लंबी गर्दन है, किस वैज्ञानिक ने दिया था?',
    'Which scientist proposed the "Inheritance of Acquired Characteristics", famously illustrated by the giraffe’s elongated neck?',
    ['जीन बैप्टिस्ट लैमार्क', 'Jean-Baptiste Lamarck'],
    [
      ['चार्ल्स डार्विन', 'Charles Darwin'],
      ['अगस्त वीज़मैन', 'August Weismann'],
      ['ह्यूगो डी व्रीज़', 'Hugo de Vries'],
    ],
    'लैमार्क ने कहा था कि जीवनकाल में अर्जित शारीरिक परिवर्तन संतानों में स्थानांतरित होते हैं, किंतु आधुनिक आनुवंशिकी ने इसे अमान्य सिद्ध किया।',
    'Lamarck proposed that traits acquired during an organism’s lifetime pass to offspring—a view later disproven by Weismann and modern genetics.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'वंशानुक्रम के किस नियम के अनुसार अत्यंत प्रतिभाशाली माता-पिता की संतानें प्रायः उनसे कम प्रतिभाशाली (औसत के निकट) तथा अत्यंत मंद माता-पिता की संतानें उनसे अपेक्षाकृत अधिक बुद्धिमान हो सकती हैं?',
    'According to which law of heredity do offspring of extreme parents (very gifted or very dull) tend to move back toward the population average?',
    ['प्रत्यागमन का नियम (Law of Regression)', 'Law of Regression'],
    [
      ['समानता का नियम (Law of Similarity)', 'Law of Similarity'],
      ['विभिन्नता का नियम (Law of Variation)', 'Law of Variation'],
      ['प्रभाविता का नियम (Law of Dominance)', 'Law of Dominance'],
    ],
    'फ्रांसिस गाल्टन द्वारा वर्णित "प्रत्यागमन के नियम" (Regression toward the mean) के अनुसार संतानों में चरम गुणों से औसत की ओर लौटने की स्वाभाविक प्रवृत्ति पाई जाती है।',
    'Described by Francis Galton, the Law of Regression (toward the mean) explains why extreme parental traits tend to moderate toward the average in offspring.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'एक ही माता-पिता की दो संतानों के स्वभाव, बुद्धि या रंग-रूप में कुछ न कुछ अंतर अवश्य देखा जाता है। यह वंशानुक्रम के किस नियम को दर्शाता है?',
    'Two siblings born to the same parents almost always exhibit noticeable differences in appearance, temperament, or intelligence. Which principle does this reflect?',
    ['विभिन्नता का नियम (Law of Variation)', 'Law of Variation'],
    [
      ['प्रत्यागमन का नियम (Law of Regression)', 'Law of Regression'],
      ['समानता का नियम (Law of Like Begets Like)', 'Law of Similarity'],
      ['संरक्षण का नियम (Law of Conservation)', 'Law of Conservation'],
    ],
    'अर्धसूत्री विभाजन (Meiosis) में क्रॉसिंग-ओवर और जीन के स्वतंत्र संयोग के कारण एक ही माता-पिता की संतानों में भी भिन्नता उत्पन्न होती है।',
    'Due to genetic recombination during meiosis, children of the same parents inherit unique gene combinations, illustrating the Law of Variation.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'मनुष्य की एक सामान्य कायिक कोशिका (Somatic Cell) में गुणसूत्रों (Chromosomes) की कुल संख्या कितनी होती है?',
    'How many total chromosomes are present in a normal human somatic (body) cell?',
    ['46 गुणसूत्र (23 जोड़े)', '46 chromosomes (23 pairs)'],
    [
      ['23 गुणसूत्र', '23 chromosomes'],
      ['48 गुणसूत्र (24 जोड़े)', '48 chromosomes (24 pairs)'],
      ['44 गुणसूत्र (22 जोड़े)', '44 chromosomes (22 pairs)'],
    ],
    'मानव कोशिका में 23 जोड़े (46) गुणसूत्र होते हैं: इनमें 22 जोड़े दैहिक (Autosomes) तथा 23वाँ जोड़ा लिंग गुणसूत्र (Sex Chromosomes: XX या XY) होता है।',
    'Humans have 46 chromosomes (23 pairs) per somatic cell: 22 pairs of autosomes and 1 pair of sex chromosomes (XX or XY).',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'जन्म लेने वाले शिशु का जैविक लिंग (पुत्र या पुत्री) मुख्यतः किसके गुणसूत्र द्वारा निर्धारित होता है?',
    'The biological sex of a human child is primarily determined by the sex chromosome contributed by whom?',
    ['पिता के शुक्राणु (X या Y गुणसूत्र) द्वारा', 'The father’s sperm (carrying either an X or a Y chromosome)'],
    [
      ['माता के अंडाणु (X या Y गुणसूत्र) द्वारा', 'The mother’s ovum (carrying X or Y)'],
      ['गर्भावस्था के दौरान लिए गए भोजन द्वारा', 'Maternal diet during pregnancy'],
      ['जन्म के समय के मौसम द्वारा', 'Season at the time of birth'],
    ],
    'माता के सभी अंडाणुओं में केवल X गुणसूत्र होता है, जबकि पिता के शुक्राणु में X या Y होता है। X+X=पुत्री और X+Y=पुत्र; अतः लिंग निर्धारण पिता के गुणसूत्र से होता है।',
    'Mothers always contribute an X chromosome, whereas fathers contribute either X (producing XX female) or Y (producing XY male).',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'आनुवंशिकता के जनक ग्रेगर जॉन मेंडल ने अपने प्रसिद्ध प्रयोग किस पौधे पर किए थे?',
    'On which plant did Gregor Johann Mendel, the father of genetics, conduct his classic heredity experiments?',
    ['उद्यान मटर (Pisum sativum)', 'Garden pea (Pisum sativum)'],
    [
      ['मीठी मटर (Lathyrus odoratus)', 'Sweet pea'],
      ['गेहूँ (Triticum aestivum)', 'Wheat'],
      ['मक्का (Zea mays)', 'Maize'],
    ],
    'मेंडल ने 1856 से 1863 के बीच मठ के बगीचे में उद्यान मटर (*Pisum sativum*) के 7 विपरीत लक्षणों का अध्ययन कर आनुवंशिकता के तीन नियम प्रतिपादित किए।',
    'Between 1856 and 1863, Mendel studied seven contrasting traits in the garden pea (*Pisum sativum*) to formulate the laws of inheritance.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मेंडल के "प्रभाविता के नियम" (Law of Dominance) के अनुसार जब दो शुद्ध विपरीत लक्षणों (जैसे लंबा TT और बौना tt) का संकरण कराया जाता है, तो प्रथम पीढ़ी (F1) में क्या प्रकट होता है?',
    'According to Mendel’s "Law of Dominance", when pure contrasting traits (tall TT and dwarf tt) are crossed, what appears in the F1 generation?',
    ['सभी संतानें प्रभावी लक्षण (लंबा - Tt) प्रदर्शित करती हैं', 'All offspring express only the dominant trait (Tall - Tt)'],
    [
      ['सभी संतानें अप्रभावी लक्षण (बौना) दिखाती हैं', 'All offspring express the recessive trait (Dwarf)'],
      ['आधी लंबी और आधी बौनी संतानें होती हैं', 'Half are tall and half are dwarf'],
      ['दोनों लक्षण बिल्कुल लुप्त हो जाते हैं', 'Both traits vanish completely'],
    ],
    'F1 पीढ़ी के विषमयुग्मजी (Heterozygous - Tt) पौधों में केवल प्रभावी एलील (T) स्वयं को व्यक्त करता है और अप्रभावी एलील (t) छिपा रहता है।',
    'In heterozygous F1 offspring (Tt), the dominant allele masks the recessive allele, so all F1 individuals display the dominant phenotype.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मेंडल के "पृथक्करण के नियम" (Law of Segregation) को किस अन्य नाम से भी जाना जाता है?',
    'By what other name is Mendel’s "Law of Segregation" also known?',
    ['युग्मकों की शुद्धता का नियम (Law of Purity of Gametes)', 'Law of Purity of Gametes'],
    [
      ['स्वतंत्र अपव्यूहन का नियम', 'Law of Independent Assortment'],
      ['अर्जित गुणों का नियम', 'Law of Acquired Traits'],
      ['सह-प्रभाविता का नियम', 'Law of Co-dominance'],
    ],
    'युग्मक निर्माण के समय प्रत्येक जीन जोड़े के दोनों एलील एक-दूसरे से पूर्णतः अलग हो जाते हैं (बिना मिश्रित हुए), जिससे प्रत्येक युग्मक में एक शुद्ध एलील जाता है।',
    'During gamete formation, the two alleles for a trait separate cleanly without blending, ensuring each gamete carries only one pure allele.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मेंडल के एकसंकर क्रॉस (Monohybrid Cross) की F2 पीढ़ी में फीनोटाइप (लक्षणप्ररूप) और जीनोटाइप (जीनप्ररूप) का अनुपात क्रमशः क्या होता है?',
    'In the F2 generation of Mendel’s Monohybrid Cross, what are the Phenotypic and Genotypic ratios, respectively?',
    ['फीनोटाइप 3:1 तथा जीनोटाइप 1:2:1', 'Phenotypic ratio 3:1 and Genotypic ratio 1:2:1'],
    [
      ['फीनोटाइप 9:3:3:1 तथा जीनोटाइप 3:1', 'Phenotypic 9:3:3:1 and Genotypic 3:1'],
      ['फीनोटाइप 1:2:1 तथा जीनोटाइप 3:1', 'Phenotypic 1:2:1 and Genotypic 3:1'],
      ['दोनों 1:1', 'Both 1:1'],
    ],
    'Tt × Tt से F2 में TT (1 लंबा), Tt (2 लंबे) और tt (1 बौना) बनते हैं; अतः बाह्य रूप (फीनोटाइप) 3:1 और आनुवंशिक संरचना (जीनोटाइप) 1:2:1 होती है।',
    'Crossing Tt × Tt yields 1 TT : 2 Tt : 1 tt—giving a 3:1 visible phenotypic ratio and a 1:2:1 genotypic ratio.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मेंडल का तीसरा नियम—"स्वतंत्र अपव्यूहन का नियम" (Law of Independent Assortment)—किस प्रकार के संकरण से प्राप्त होता है और इसका F2 फीनोटाइप अनुपात क्या है?',
    'Mendel’s third law—"Law of Independent Assortment"—is derived from which cross, and what is its F2 phenotypic ratio?',
    ['द्विसंकर क्रॉस (Dihybrid Cross), अनुपात 9:3:3:1', 'Dihybrid Cross, ratio 9:3:3:1'],
    [
      ['एकसंकर क्रॉस (Monohybrid Cross), अनुपात 3:1', 'Monohybrid Cross, ratio 3:1'],
      ['परीक्षार्थ क्रॉस (Test Cross), अनुपात 1:1', 'Test Cross, ratio 1:1'],
      ['द्विसंकर क्रॉस, अनुपात 1:2:1', 'Dihybrid Cross, ratio 1:2:1'],
    ],
    'दो जोड़ी लक्षणों (जैसे पीला-गोल और हरा-झुर्रीदार बीज) के द्विसंकर क्रॉस में विभिन्न लक्षणों के जीन एक-दूसरे से स्वतंत्र रूप से अगली पीढ़ी में वितरित होते हैं और F2 में 9:3:3:1 अनुपात देते हैं।',
    'In a dihybrid cross, alleles of different genes assort independently into gametes, yielding a classic 9:3:3:1 phenotypic ratio in F2.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Genetic Disorders',
    'जब किसी बालक की कोशिकाओं में 21वें गुणसूत्र की दो के बजाय तीन प्रतियाँ (Trisomy 21, कुल 47 गुणसूत्र) होती हैं, तो कौन-सा विकार उत्पन्न होता है?',
    'Which chromosomal condition results when a child has three copies of chromosome 21 instead of two (Trisomy 21, 47 chromosomes total)?',
    ['डाउन सिंड्रोम (Down Syndrome)', 'Down Syndrome'],
    [
      ['टर्नर सिंड्रोम (Turner Syndrome)', 'Turner Syndrome'],
      ['क्लाइनफेल्टर सिंड्रोम (Klinefelter Syndrome)', 'Klinefelter Syndrome'],
      ['फिनाइलकीटोन्यूरिया (PKU)', 'Phenylketonuria (PKU)'],
    ],
    'डाउन सिंड्रोम (ट्राइसोमी 21) एक आनुवंशिक गुणसूत्रीय विकार है जिसमें चपटा चेहरा, मंद बौद्धिक विकास और विशिष्ट शारीरिक लक्षण दिखाई देते हैं।',
    'Down Syndrome is caused by Trisomy 21 (47 chromosomes), resulting in characteristic facial features and mild-to-moderate intellectual disability.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Genetic Disorders',
    'केवल महिलाओं में होने वाला "टर्नर सिंड्रोम" (Turner Syndrome) किस गुणसूत्रीय असामान्यता के कारण होता है?',
    'Which chromosomal abnormality causes "Turner Syndrome", occurring exclusively in females?',
    ['एक X गुणसूत्र की कमी (45, XO अवस्था)', 'Absence of one X chromosome (45, XO karyotype)'],
    [
      ['एक अतिरिक्त X गुणसूत्र (47, XXY)', 'An extra X chromosome (47, XXY)'],
      ['21वें गुणसूत्र की त्रिसूत्रता (Trisomy 21)', 'Trisomy of chromosome 21'],
      ['एक अतिरिक्त Y गुणसूत्र (47, XYY)', 'An extra Y chromosome (47, XYY)'],
    ],
    'टर्नर सिंड्रोम में 46 के बजाय 45 गुणसूत्र (XO) होते हैं, जिससे कद छोटा रहना और अंडाशय का अविकसित होना जैसे लक्षण दिखते हैं। (47, XXY क्लाइनफेल्टर सिंड्रोम है)।',
    'Turner Syndrome involves monosomy X (45, XO) in females, causing short stature and gonadal dysgenesis; 47, XXY is Klinefelter Syndrome in males.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Genetic Disorders',
    'फिनाइलकीटोन्यूरिया (PKU) आनुवंशिकता और वातावरण की अंतःक्रिया का एक उत्कृष्ट उदाहरण क्यों माना जाता है?',
    'Why is Phenylketonuria (PKU) considered a textbook example of heredity-environment interaction?',
    ['यह एक आनुवंशिक अप्रभावी विकार है, परंतु जन्म के तुरंत बाद विशेष कम-फिनाइलएलानिन आहार (वातावरण) देकर बौद्धिक अक्षमता को रोका जा सकता है', 'Although caused by a recessive gene defect, early dietary modification (environment) completely prevents intellectual disability'],
    [
      ['यह केवल दूषित पानी पीने से होता है', 'It is caused solely by drinking polluted water'],
      ['इस पर आहार का कोई प्रभाव नहीं पड़ता', 'Diet has zero effect on its outcome'],
      ['यह केवल 50 वर्ष की उम्र में प्रकट होता है', 'It manifests only at age 50'],
    ],
    'PKU में फिनाइलएलानिन अमीनो अम्ल को तोड़ने वाला एंजाइम नहीं बनता; यदि शैशवावस्था से ही विशेष आहार दिया जाए तो मस्तिष्क क्षति से बचा जा सकता है।',
    'PKU stems from an inherited enzyme deficiency, yet screening at birth and providing a low-phenylalanine diet prevents brain damage—proving genes are not rigid destiny.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Twin & Adoption Studies',
    'समरूप जुड़वाँ (Identical / Monozygotic Twins) बच्चों में आनुवंशिक समानता कितने प्रतिशत होती है?',
    'What percentage of genes do Identical (Monozygotic) twins share with each other?',
    ['100% समान जींस', '100% identical genes'],
    [
      ['लगभग 50% समान जींस', 'Approximately 50% shared genes'],
      ['लगभग 25% समान जींस', 'Approximately 25% shared genes'],
      ['0% समान जींस', '0% shared genes'],
    ],
    'समरूप जुड़वाँ एक ही निषेचित अंडाणु (Zygote) के विभाजन से बनते हैं, अतः उनका आनुवंशिक ढाँचा 100% समान होता है और वे सदैव एक ही लिंग के होते हैं; भ्रातृ जुड़वाँ (Dizygotic) में लगभग 50% समानता होती है।',
    'Monozygotic twins develop from a single fertilized zygote that splits, sharing 100% of their genes (whereas dizygotic twins share ~50% like ordinary siblings).',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Twin & Adoption Studies',
    'अलग-अलग घरों (भिन्न वातावरण) में पाले गए समरूप जुड़वाँ (Identical Twins Reared Apart) के बीच यदि बुद्धि लब्धि या स्वभाव में कोई अंतर पाया जाए, तो वह किस कारण से होता है?',
    'If Identical Twins reared apart in different homes show differences in IQ or personality, what must account for those differences?',
    ['भिन्न वातावरण और अनुभवों का प्रभाव (Nurture)', 'Differences in environment and life experiences (Nurture)'],
    [
      ['केवल उनके जींस में पूर्ण भिन्नता', 'Complete difference in their genes'],
      ['उनके रक्त समूह का अंतर', 'Difference in their blood groups'],
      ['गुणसूत्रों की संख्या में अंतर', 'Difference in chromosome count'],
    ],
    'चूँकि समरूप जुड़वाँ के जींस 100% समान होते हैं, इसलिए उनमें दिखने वाला कोई भी अंतर पर्यावरणीय कारकों (पोषण, शिक्षा, पालन-पोषण) की भूमिका सिद्ध करता है।',
    'Because monozygotic twins are genetically identical, any divergence between twins raised apart demonstrates environmental influence.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Twin & Adoption Studies',
    'सैंड्रा स्कार और कैथलीन मैककार्टनी के अनुसार "निच-पिकिंग" (Niche-Picking / Active Gene-Environment Correlation) का क्या उदाहरण है?',
    'According to Sandra Scarr and Kathleen McCartney, what is an example of "Active Gene-Environment Correlation" (Niche-Picking)?',
    ['एक स्वाभाविक रूप से संगीत-प्रवीण किशोर स्वयं स्कूल का संगीत क्लब चुनता है और उसमें अधिक समय बिताता है', 'A naturally musical adolescent actively seeks out and joins the school orchestra and music clubs'],
    [
      ['माता-पिता बिना बच्चे की रुचि जाने घर में किताबें भर देते हैं', 'Parents fill the home with books regardless of the infant’s interests'],
      ['शिक्षक बच्चे के शांत स्वभाव को देखकर उसे चुप बैठा देते हैं', 'A teacher seats a quiet child alone based on their demeanor'],
      ['सभी छात्रों को अनिवार्य रूप से एक ही खेल खिलाना', 'Forcing all students to play the exact same sport'],
    ],
    'स्कार एवं मैककार्टनी ने तीन संबंध बताए: Passive (माता-पिता द्वारा निर्मित परिवेश), Evocative (बच्चे के स्वभाव से दूसरों की प्रतिक्रिया), और Active/Niche-picking (बच्चे द्वारा स्वयं अपनी रुचि/प्रतिभा के अनुकूल परिवेश चुनना)।',
    'Scarr and McCartney described Passive, Evocative, and Active (niche-picking) correlations; niche-picking occurs when individuals actively select environments matching their genetic predispositions.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Twin & Adoption Studies',
    'गोटेसमैन (Irving Gottesman) की "प्रतिक्रिया सीमा" (Reaction Range) अवधारणा क्या स्पष्ट करती है?',
    'What does Irving Gottesman’s concept of "Reaction Range" explain?',
    ['आनुवंशिकता विकास की संभावित ऊपरी व निचली सीमा तय करती है, और वातावरण यह तय करता है कि बच्चा उस सीमा में कहाँ पहुँचेगा', 'Heredity sets upper and lower potential boundaries, while environment determines where within that range the child develops'],
    [
      ['वातावरण केवल जींस को बदल देता है', 'Environment physically rewrites chromosomes'],
      ['आनुवंशिकता का कोई प्रभाव नहीं होता', 'Heredity plays zero role in capacity'],
      ['विकास में कोई संभावित सीमा नहीं होती', 'There are no biological limits to traits'],
    ],
    'जैसे किसी बच्चे की आनुवंशिक IQ सीमा 95–125 हो सकती है; समृद्ध शैक्षिक परिवेश उसे 125 के पास ले जा सकता है जबकि वंचित परिवेश 95 के निकट रख सकता है।',
    'Reaction Range explains that genotype establishes a range of possible developmental outcomes, and environmental quality decides the actual realized level.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'हेनरी गोडार्ड (Henry Goddard) ने किस परिवार (काल्पनिक उपनाम) के वंश का अध्ययन करके आनुवंशिकता के प्रभाव को दर्शाने का प्रयास किया था?',
    'Which family lineage did Henry Goddard study (under a pseudonym) to argue for the hereditary transmission of intelligence/traits?',
    ['कल्लिकक परिवार (Kallikak Family)', 'The Kallikak Family'],
    [
      ['जुक्स परिवार (Jukes Family)', 'The Jukes Family'],
      ['एडवर्ड्स परिवार (Edwards Family)', 'The Edwards Family'],
      ['डार्विन परिवार (Darwin Family)', 'The Darwin Family'],
    ],
    'एच. गोडार्ड ने 1912 में मार्टिन कल्लिकक की दो वंश-शाखाओं का अध्ययन प्रकाशित किया (यद्यपि आधुनिक विज्ञान इसे पद्धतिगत रूप से दोषपूर्ण मानता है, पर परीक्षाओं में डगडेल-जुक्स व गोडार्ड-कल्लिकक का नाम पूछा जाता है)।',
    'Henry Goddard published "The Kallikak Family" (1912) comparing two lineages from Martin Kallikak (while Richard Dugdale studied the Jukes family).',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'फ्रीमैन (Freeman), होल्ज़िंगर एवं मिचेल (1928) के दत्तक-ग्रहण (Adoption) और शिकागो जुड़वाँ अध्ययनों से क्या प्रमुख निष्कर्ष निकला?',
    'What major finding emerged from Freeman, Holzinger, and Mitchell’s (1928) adoption studies?',
    ['बेहतर और शैक्षिक रूप से समृद्ध दत्तक घरों में पले बच्चों की बुद्धि लब्धि (IQ) में उल्लेखनीय सुधार हुआ', 'Children adopted into enriched, supportive homes showed significant gains in IQ scores'],
    [
      ['दत्तक बच्चों का IQ हमेशा घट गया', 'Adopted children’s IQ invariably dropped'],
      ['घर के वातावरण का IQ पर बिल्कुल असर नहीं पड़ा', 'Home environment had zero impact on IQ'],
      ['सभी बच्चे बोलने की क्षमता खो बैठे', 'All adopted children lost language skills'],
    ],
    'यह अध्ययन सिद्ध करता है कि आनुवंशिक आधार के साथ-साथ पोषक, प्रेरक और शैक्षिक वातावरण बच्चे के संज्ञानात्मक विकास को ऊपर उठाने में अत्यंत महत्वपूर्ण है।',
    'Adoption studies showed that moving children from deprived settings into cognitively stimulating homes significantly boosts IQ, underscoring nurture’s power.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'मानव शरीर की किस अंतःस्रावी ग्रंथि को "मास्टर ग्रंथि" (Master Gland) कहा जाता है, जो वृद्धि हार्मोन का स्राव करती है?',
    'Which endocrine gland is known as the "Master Gland" and secretes Growth Hormone (GH)?',
    ['पीयूष ग्रंथि (Pituitary Gland)', 'Pituitary Gland'],
    [
      ['थायरॉइड ग्रंथि (Thyroid Gland)', 'Thyroid Gland'],
      ['एड्रिनल ग्रंथि (Adrenal Gland)', 'Adrenal Gland'],
      ['अग्न्याशय (Pancreas)', 'Pancreas'],
    ],
    'मस्तिष्क के आधार पर स्थित पीयूष ग्रंथि (Pituitary) वृद्धि हार्मोन (STH) सहित अन्य कई ग्रंथियों को नियंत्रित करने वाले हार्मोन स्रावित करती है।',
    'Located at the base of the brain, the pituitary gland secretes growth hormone and regulates other endocrine glands.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'बाल्यावस्था में पीयूष ग्रंथि से वृद्धि हार्मोन (GH) के अत्यधिक स्राव तथा अल्प स्राव से क्रमशः कौन-सी स्थितियाँ उत्पन्न होती हैं?',
    'In childhood, hypersecretion and hyposecretion of Growth Hormone (GH) from the pituitary gland cause which conditions, respectively?',
    ['अति स्राव से भीमकायता (Gigantism) एवं अल्प स्राव से बौनापन (Dwarfism)', 'Gigantism from excess and Dwarfism from deficiency'],
    [
      ['अति स्राव से बौनापन एवं अल्प स्राव से भीमकायता', 'Dwarfism from excess and Gigantism from deficiency'],
      ['अति स्राव से मधुमेह एवं अल्प स्राव से रतौंधी', 'Diabetes from excess and Night blindness from deficiency'],
      ['अति स्राव से घेंघा एवं अल्प स्राव से स्कर्वी', 'Goiter from excess and Scurvy from deficiency'],
    ],
    'बचपन में GH की कमी से शारीरिक कद छोटा (Dwarfism) रह जाता है, जबकि अधिकता से असामान्य लंबा कद (Gigantism) हो जाता है।',
    'Too little GH in childhood causes pituitary dwarfism, while excessive GH before growth plates close leads to gigantism.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'बच्चों में आयोडीन की कमी से थायरॉइड ग्रंथि द्वारा थायरॉक्सिन हार्मोन कम बनने पर कौन-सा गंभीर विकास विकार होता है जिससे शारीरिक व मानसिक दोनों विकास अवरुद्ध होते हैं?',
    'Severe thyroid hormone (thyroxine) deficiency during infancy/childhood causes which condition marked by stunted physical and intellectual growth?',
    ['जड़वामनता (Cretinism)', 'Cretinism'],
    [
      ['एक्रोमेगाली (Acromegaly)', 'Acromegaly'],
      ['स्कैबीज (Scabies)', 'Scabies'],
      ['रिकेट्स (Rickets)', 'Rickets'],
    ],
    'थायरॉक्सिन मस्तिष्क व शरीर की चयापचय दर को नियंत्रित करता है; इसकी बचपन में भारी कमी से क्रेटिनिज्म (बौनापन व बौद्धिक अक्षमता) होता है।',
    'Congenital or early thyroxine deficiency causes cretinism, impairing both skeletal growth and brain maturation.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'भय, क्रोध या संकट की स्थिति में व्यक्ति के शरीर को त्वरित प्रतिक्रिया के लिए तैयार करने वाला "लड़ो या उड़ो" (Fight or Flight) हार्मोन कौन-सा है?',
    'Which hormone prepares the body for rapid action during fear, anger, or emergencies ("Fight or Flight" hormone)?',
    ['एड्रेनालिन / एपिनेफ्रिन (Adrenaline)', 'Adrenaline (Epinephrine)'],
    [
      ['इंसुलिन (Insulin)', 'Insulin'],
      ['मेलाटोनिन (Melatonin)', 'Melatonin'],
      ['प्रोलैक्टिन (Prolactin)', 'Prolactin'],
    ],
    'अधिवृक्क (Adrenal) ग्रंथि से स्रावित एड्रेनालिन हृदय गति, रक्तचाप और ऊर्जा बढ़ाकर संकटकालीन संवेगात्मक प्रतिक्रिया में सहायता करता है।',
    'Secreted by the adrenal medulla, adrenaline accelerates heart rate, respiration, and glucose availability during stress or danger.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'प्रारंभिक बाल्यावस्था में भोजन में केवल प्रोटीन की गंभीर कमी से होने वाला रोग, जिसमें बच्चे का पेट फूल जाता है और हाथ-पैरों में सूजन (Edema) आ जाती है, क्या कहलाता है?',
    'Which severe early-childhood malnutrition disorder is caused primarily by protein deficiency, resulting in edema and a swollen abdomen?',
    ['क्वाशिओरकोर (Kwashiorkor)', 'Kwashiorkor'],
    [
      ['मरास्मस (Marasmus)', 'Marasmus'],
      ['स्कर्वी (Scurvy)', 'Scurvy'],
      ['बेरी-बेरी (Beriberi)', 'Beriberi'],
    ],
    'क्वाशिओरकोर मुख्यतः प्रोटीन की कमी से होता है (Edema प्रमुख लक्षण है), जबकि मरास्मस प्रोटीन और कुल कैलोरी दोनों की भारी कमी से होता है जिसमें बच्चा अत्यंत दुबला हो जाता है।',
    'Kwashiorkor results chiefly from severe protein deficiency (causing fluid retention/edema), whereas marasmus stems from overall protein-calorie starvation.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'विद्यालय जाने वाले बच्चों में आयरन (लौह तत्व) की कमी से होने वाली एनीमिया (रक्ताल्पता) उनके अधिगम को किस प्रकार प्रभावित करती है?',
    'How does iron-deficiency anemia affect school-aged children’s classroom learning?',
    ['थकान, एकाग्रता में कमी और संज्ञानात्मक प्रसंस्करण धीमा होने से शैक्षिक प्रदर्शन गिरता है', 'It causes fatigue, poor attention span, and reduced cognitive processing efficiency'],
    [
      ['इससे बच्चों की स्मरण शक्ति दोगुनी हो जाती है', 'It doubles memory retention'],
      ['इससे केवल बालों का रंग सुनहरा होता है', 'It merely turns hair golden'],
      ['इसका मस्तिष्क और थकान से कोई संबंध नहीं है', 'It has no link to brain function or fatigue'],
    ],
    'आयरन हीमोग्लोबिन द्वारा मस्तिष्क तक ऑक्सीजन पहुँचाने के लिए आवश्यक है; इसकी कमी से थकावट, चिड़चिड़ापन और ध्यान केंद्रित करने में कठिनाई होती है।',
    'Iron is essential for oxygen transport to the brain and neurotransmitter synthesis; deficiency leads to lethargy, poor concentration, and lower achievement.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'हड्डियों के स्वस्थ विकास एवं "रिकेट्स" (सूखा रोग) से बचाव के लिए बच्चों में कौन-सा विटामिन व खनिज आवश्यक है?',
    'Which vitamin and mineral pair is essential for healthy bone development and preventing Rickets in children?',
    ['विटामिन D एवं कैल्शियम', 'Vitamin D and Calcium'],
    [
      ['विटामिन C एवं सोडियम', 'Vitamin C and Sodium'],
      ['विटामिन A एवं आयोडीन', 'Vitamin A and Iodine'],
      ['विटामिन K एवं पोटैशियम', 'Vitamin K and Potassium'],
    ],
    'विटामिन D (जिसका प्रमुख प्राकृतिक स्रोत सूर्य का प्रकाश है) शरीर में कैल्शियम और फॉस्फोरस के अवशोषण में मदद करता है, जिससे हड्डियाँ मजबूत रहती हैं।',
    'Vitamin D facilitates calcium absorption for bone mineralization; its deficiency in childhood causes rickets (soft, bowed bones).',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'माँ के दूध में पाया जाने वाला प्रारंभिक पीला गाढ़ा द्रव (Colostrum) नवजात के विकास के लिए क्यों अत्यंत महत्वपूर्ण है?',
    'Why is "Colostrum" (the first thick yellowish breast milk) vital for newborn development?',
    ['यह एंटीबॉडीज (विशेषतः IgA) और पोषक तत्वों से भरपूर होकर शिशु को प्रारंभिक रोग-प्रतिरोधक क्षमता देता है', 'It is rich in antibodies (especially IgA) and nutrients that provide crucial passive immunity'],
    [
      ['यह केवल शिशु का वजन कम करने के लिए होता है', 'It is meant solely to reduce infant weight'],
      ['इसमें केवल सादा पानी होता है', 'It consists only of plain water'],
      ['यह शिशु के दाँत तुरंत निकाल देता है', 'It causes teeth to erupt immediately'],
    ],
    'जन्म के शुरुआती 2–3 दिनों में निकलने वाला कोलोस्ट्रम नवजात की रोग-प्रतिरोधक शक्ति और पाचन तंत्र की सुरक्षा के लिए "प्रथम टीका" माना जाता है।',
    'Colostrum delivers concentrated immunoglobulins, white blood cells, and growth factors, acting as the newborn’s first natural immunization.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Family & Socioeconomic Factors',
    'निम्न सामाजिक-आर्थिक स्थिति (Low SES) और गरीबी बच्चे के संज्ञानात्मक एवं भाषाई विकास को अप्रत्यक्ष रूप से कैसे बाधित कर सकती है?',
    'How can chronic poverty and low socioeconomic status (SES) indirectly hinder a child’s cognitive and language development?',
    ['पोषण की कमी, पुस्तकों/खेल सामग्री का अभाव, और माता-पिता पर अत्यधिक तनाव होने से', 'Through inadequate nutrition, scarce books/learning materials, and elevated parental stress'],
    [
      ['गरीब परिवार के बच्चों में मस्तिष्क की संरचना जन्म से अनुपस्थित होती है', 'Children from poor families are born lacking brain structures'],
      ['केवल स्कूल की वर्दी का रंग अलग होने से', 'Solely because of a different school uniform color'],
      ['गरीबी का स्वास्थ्य व शिक्षा से कोई संबंध नहीं होता', 'Poverty has zero impact on health or education'],
    ],
    'हार्ट एवं रिस्ले (Hart & Risley) के शोध से लेकर आधुनिक विकासात्मक विज्ञान तक यह सिद्ध है कि संसाधन अभाव व दीर्घकालिक पारिवारिक तनाव भाषा-प्रवाह और ध्यान क्षमता को प्रभावित करते हैं—जिन्हें विद्यालयी सहयोग से सुधारा जा सकता है।',
    'Chronic economic hardship limits nutrition, cognitive stimulation, and caregiver availability while increasing toxic stress—all remediable through supportive early education.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Family & Socioeconomic Factors',
    'जायोंक (Zajonc) के "संयोजन मॉडल" (Confluence Model) के अनुसार परिवार का आकार (Family Size) और जन्म-क्रम (Birth Order) बच्चे के बौद्धिक विकास को कैसे प्रभावित कर सकते हैं?',
    'According to Zajonc’s "Confluence Model", how can family size and birth order influence intellectual development?',
    ['बड़े परिवार में माता-पिता का व्यक्तिगत ध्यान और संसाधन कई बच्चों में बँट जाते हैं, जबकि छोटे परिवार में वयस्क-संपर्क अधिक मिलता है', 'In larger families, parental attention and intellectual stimulation are diluted among more children compared to smaller families'],
    [
      ['प्रथम संतान सदैव अनपढ़ रहती है', 'The firstborn child always remains illiterate'],
      ['छोटे परिवार के बच्चों में भाषा विकास बिल्कुल नहीं होता', 'Children in small families never develop language'],
      ['केवल जुड़वाँ बच्चों की बुद्धि सबसे अधिक होती है', 'Only twins ever achieve high intelligence'],
    ],
    'रॉबर्ट जायोंक के अनुसार घर का औसत बौद्धिक वातावरण (Adult vs Child ratio) बच्चों की संख्या बढ़ने से पतला हो सकता है, यद्यपि छोटे भाई-बहनों को सिखाने (Tutor Effect) से बड़े बच्चे लाभान्वित भी होते हैं।',
    'Zajonc proposed that each additional closely spaced child lowers the average intellectual climate (dilution of adult attention), though older siblings gain from tutoring younger ones.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'School & Peer Factors',
    'शिक्षक की अपेक्षाएँ (Teacher Expectations) विद्यार्थियों की उपलब्धि को प्रभावित करती हैं—इसे मनोविज्ञान में क्या कहा जाता है?',
    'Teacher expectations influencing actual student achievement is known in psychology as what phenomenon?',
    ['पिग्मैलियन प्रभाव / रोसेंथल प्रभाव (Pygmalion / Rosenthal Effect)', 'Pygmalion Effect (Rosenthal Effect)'],
    [
      ['हॉथोर्न प्रभाव (Hawthorne Effect)', 'Hawthorne Effect'],
      ['प्लेसीबो प्रभाव (Placebo Effect)', 'Placebo Effect'],
      ['मैट्यू प्रभाव (Matthew Effect)', 'Matthew Effect'],
    ],
    'रॉबर्ट रोसेंथल और लेनोर जैकबसन (1968) ने सिद्ध किया कि जब शिक्षक कुछ छात्रों से उच्च प्रदर्शन की सकारात्मक अपेक्षा रखते हैं, तो वे छात्र वास्तव में बेहतर प्रदर्शन करते हैं (Self-fulfilling prophecy)।',
    'Rosenthal and Jacobson (1968) demonstrated the Pygmalion Effect: high teacher expectations act as a self-fulfilling prophecy boosting student performance.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Culture & Media',
    'छोटे बच्चों द्वारा अत्यधिक हिंसक वीडियो गेम या हिंसक टेलीविजन कार्यक्रम देखने से आक्रामक व्यवहार बढ़ने को किस मनोवैज्ञानिक ने अपने प्रयोगों से सिद्ध किया?',
    'Which psychologist’s experiments demonstrated that observing violent models in media increases aggressive behavior in children?',
    ['अल्बर्ट बंडूरा (Albert Bandura)', 'Albert Bandura'],
    [
      ['बी. एफ. स्किनर', 'B. F. Skinner'],
      ['एरिक एरिकसन', 'Erik Erikson'],
      ['इवान पावलोव', 'Ivan Pavlov'],
    ],
    'बंडूरा के प्रसिद्ध "बोबो डॉल प्रयोग" (Bobo Doll Experiment) ने दिखाया कि बच्चे फिल्म या वास्तविक व्यक्ति के आक्रामक व्यवहार को देखकर (Observational Learning) उसका अनुकरण करते हैं।',
    'Albert Bandura’s Bobo Doll studies proved that children learn and imitate aggressive behaviors simply by observing live or filmed models.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"विशिष्ट आनुवंशिक गुण एक बीज की तरह हैं, जबकि वातावरण उस मिट्टी, जल और सूर्य के प्रकाश की तरह है जो उस बीज के फलने-फूलने को निर्धारित करता है।" यह उपमा क्या स्पष्ट करती है?',
    '"Heredity is like a seed, whereas environment is the soil, water, and sunlight determining how well it flourishes." What does this analogy convey?',
    ['सर्वोत्तम आनुवंशिक क्षमता भी अनुकूल वातावरण के बिना पूर्ण रूप से विकसित नहीं हो सकती', 'Even optimal genetic potential cannot fully unfold without a supportive, nurturing environment'],
    [
      ['केवल मिट्टी से ही बिना बीज के पौधा उग सकता है', 'Soil alone can grow a plant without any seed'],
      ['केवल बीज ही रेगिस्तान में बिना पानी के बड़ा पेड़ बन सकता है', 'A seed can grow into a tree in a desert without water'],
      ['वातावरण और बीज दोनों का कोई महत्व नहीं है', 'Neither seed nor environment matters'],
    ],
    'यह उपमा आनुवंशिकता और वातावरण की परस्पर पूरकता दर्शाती है; दोनों विकास के लिए अनिवार्य सह-निर्धारक हैं।',
    'This classic analogy illustrates that innate genetic potential requires a nourishing environment to reach fruition—neither works in isolation.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'जॉन लॉक (John Locke) ने नवजात शिशु के मन को "तबुला रासा" (Tabula Rasa) कहा था। इसका क्या अर्थ है?',
    'John Locke famously described the infant’s mind as a "Tabula Rasa". What does this phrase mean?',
    ['कोरी स्लेट (Blank Slate), जिस पर अनुभव और वातावरण ज्ञान लिखते हैं', 'A Blank Slate upon which experience and environment write knowledge'],
    [
      ['जन्म से ही भरा हुआ ज्ञानकोश', 'A pre-filled encyclopedia at birth'],
      ['केवल आनुवंशिक रूप से पूर्व-निर्धारित ढाँचा', 'A purely genetically fixed blueprint'],
      ['कभी न सीखने वाला मस्तिष्क', 'An unlearnable brain'],
    ],
    'अनुभववादी दार्शनिक जॉन लॉक के अनुसार जन्म के समय बालक का मन कोरी पटिया (Tabula Rasa) होता है और इंद्रियों से प्राप्त अनुभव ही उस पर अंकित होते हैं।',
    'Empiricist philosopher John Locke used "Tabula Rasa" (blank slate) to argue that knowledge comes primarily from sensory experience and environment rather than innate ideas.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'रूसो (Jean-Jacques Rousseau) ने अपनी पुस्तक "एमील" (Emile) में बाल विकास के किस कारक को सर्वोच्च महत्व दिया?',
    'In his book "Emile", which factor in child development did Jean-Jacques Rousseau emphasize above artificial societal constraints?',
    ['बालक की अंतर्निहित प्रकृति (Nature) और स्वाभाविक स्व-विकास', 'The child’s innate Nature and spontaneous natural unfolding'],
    [
      ['कठोर परीक्षा प्रणाली एवं दंड', 'Strict exam drills and punishment'],
      ['केवल लैटिन व्याकरण का रटंत', 'Rote memorization of Latin grammar'],
      ['समाज की कृत्रिम परंपराओं का अंधानुकरण', 'Blind imitation of artificial adult conventions'],
    ],
    'प्रकृतिवादी (Naturalist) दार्शनिक रूसो ने कहा कि बालक जन्म से अच्छा होता है और उसे प्रकृति के सानिध्य में अपनी स्वाभाविक अवस्थाओं के अनुसार विकसित होने देना चाहिए।',
    'Naturalist philosopher Rousseau argued in "Emile" that children are inherently good and thrive when allowed to unfold naturally with minimal artificial interference.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Prenatal & Teratogens',
    'गर्भावस्था में माता द्वारा अत्यधिक मद्यपान (Alcohol) करने से शिशु में कौन-सा स्थायी विकासात्मक विकार हो सकता है?',
    'Heavy maternal alcohol consumption during pregnancy can cause which permanent developmental condition in the child?',
    ['फीटल अल्कोहल सिंड्रोम (Fetal Alcohol Syndrome - FAS)', 'Fetal Alcohol Syndrome (FAS)'],
    [
      ['डाउन सिंड्रोम (Down Syndrome)', 'Down Syndrome'],
      ['हेमोफीलिया (Hemophilia)', 'Hemophilia'],
      ['वर्णांधता (Color Blindness)', 'Color Blindness'],
    ],
    'अल्कोहल एक प्रमुख टेराटोजेन है जो प्लेसेंटा को पार कर भ्रूण के मस्तिष्क विकास को क्षति पहुँचाता है, जिससे छोटा सिर, चेहरे की विकृति और संज्ञानात्मक अक्षमता (FAS) हो सकती है।',
    'Alcohol acts as a potent teratogen crossing the placenta, causing Fetal Alcohol Syndrome marked by growth deficits, facial anomalies, and brain impairment.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Prenatal & Teratogens',
    'गर्भावस्था के प्रारंभिक माह में माँ को फोलिक एसिड (Folic Acid / विटामिन B9) की पर्याप्त आपूर्ति किस गंभीर जन्मजात दोष से बचाव के लिए दी जाती है?',
    'Adequate maternal Folic Acid (Vitamin B9) intake early in pregnancy prevents which serious congenital defect in the developing fetus?',
    ['न्यूरल ट्यूब दोष (Neural Tube Defects जैसे Spina Bifida)', 'Neural Tube Defects (such as Spina Bifida)'],
    [
      ['जन्मजात मोतियाबिंद', 'Congenital cataracts'],
      ['केवल त्वचा पर दाने', 'Minor skin rashes'],
      ['दूध के दाँतों का न निकलना', 'Failure of milk teeth to erupt'],
    ],
    'फोलिक एसिड गर्भावस्था के पहले 28 दिनों में तंत्रिका नलिका (Neural Tube) के सही रूप से बंद होने के लिए अनिवार्य है, जिससे मस्तिष्क व मेरुरज्जु के दोष टलते हैं।',
    'Folic acid is critical during the first month of gestation for proper closure of the neural tube, preventing spina bifida and anencephaly.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'एपिजेनेटिक्स (Epigenetics) का आधुनिक विज्ञान "प्रकृति बनाम पोषण" विवाद को किस प्रकार सुलझाता है?',
    'How does modern "Epigenetics" reshape the classic Nature-versus-Nurture debate?',
    ['पर्यावरणीय कारक (पोषण, तनाव, स्नेह) डीएनए के अनुक्रम को बदले बिना जींस की सक्रियता (Gene Expression) को चालू या बंद कर सकते हैं', 'Environmental experiences (diet, stress, care) can switch gene expression on or off without altering the underlying DNA sequence'],
    [
      ['वातावरण सभी जींस को पूरी तरह नष्ट कर देता है', 'Environment destroys all DNA sequences'],
      ['जींस जन्म के बाद कभी सक्रिय या निष्क्रिय नहीं होते', 'Genes never change activity after conception'],
      ['केवल वातावरण ही डीएनए का आविष्कार करता है', 'Environment invents brand-new chromosomes'],
    ],
    'एपिजेनेटिक्स बताता है कि जींस और वातावरण के बीच दोतरफा संवाद चलता है—मातृ स्नेह, पोषण या विषाक्त तनाव रासायनिक चिह्नों (Methylation) द्वारा जीन अभिव्यक्ति को प्रभावित करते हैं।',
    'Epigenetics demonstrates bidirectional interplay: environmental conditions chemically tag DNA to regulate gene expression without changing genetic code.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'विकास पर आनुवंशिकता के प्रभाव की जाँच करने वाले किस अध्ययन ने दिखाया कि शिशु में "अंधकार से भय" के बजाय कुछ मूल प्रवृत्तियाँ और शारीरिक संरचनाएँ वंशानुगत होती हैं?',
    'Which traits in human development show the highest heritability (strongest genetic influence) compared to specific cultural habits?',
    ['ऊँचाई, आँखों का रंग, सामान्य बुद्धि संभावना और कुछ स्वभावगत प्रवृत्तियाँ', 'Height, eye color, general intellectual potential, and core temperament traits'],
    [
      ['मातृभाषा की शब्दावली और बोलने का लहजा', 'Native language vocabulary and regional accent'],
      ['धार्मिक त्योहार मनाने की विधि', 'Methods of celebrating religious festivals'],
      ['पसंदीदा क्रिकेट खिलाड़ी का नाम', 'Favorite cricket player'],
    ],
    'शारीरिक रचना, ऊँचाई, आँखों का रंग, रक्त समूह तथा सामान्य संज्ञानात्मक क्षमता व मूल स्वभाव आनुवंशिकता से गहराई से जुड़े हैं, जबकि भाषा, धर्म और रीति-रिवाज वातावरण से सीखे जाते हैं।',
    'Physical traits, blood type, temperament baselines, and intellectual potential show strong heritability, whereas language, religion, and customs are culturally learned.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मानव आनुवंशिकता में "हीमोफीलिया" (रक्त का थक्का न जमना) और "लाल-हरा वर्णांधता" (Color Blindness) किस प्रकार के रोग हैं?',
    'In human genetics, what type of inherited disorders are Hemophilia and Red-Green Color Blindness?',
    ['X-सहलग्न अप्रभावी आनुवंशिक विकार (X-linked Recessive Disorders)', 'X-linked recessive genetic disorders'],
    [
      ['जीवाणु संक्रमण से होने वाले संक्रामक रोग', 'Bacterial infectious diseases'],
      ['केवल विटामिन A की कमी से होने वाले रोग', 'Diseases caused solely by Vitamin A deficiency'],
      ['Y-गुणसूत्र द्वारा महिलाओं में होने वाले रोग', 'Y-linked disorders occurring only in women'],
    ],
    'हीमोफीलिया और वर्णांधता X-गुणसूत्र पर स्थित अप्रभावी जीन के कारण होते हैं; चूँकि पुरुषों में केवल एक X (XY) होता है, इसलिए ये विकार पुरुषों में अधिक प्रकट होते हैं जबकि महिलाएँ प्रायः वाहक (Carrier) होती हैं।',
    'Both are X-linked recessive disorders; because males have only one X chromosome (XY), they express these traits much more frequently than females (XX).',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'यदि एक बच्चे का रक्त समूह "O" है और माता का रक्त समूह "A" तथा पिता का रक्त समूह "B" है, तो क्या यह आनुवंशिक रूप से संभव है?',
    'If a mother has blood type A and a father has blood type B, is it genetically possible for their biological child to have blood type O?',
    ['हाँ, यदि माता-पिता दोनों विषमयुग्मजी (Iᴬi और Iᴮi) हों', 'Yes, if both parents are heterozygous (Iᴬi and Iᴮi)'],
    [
      ['नहीं, यह जैविक रूप से असंभव है', 'No, it is biologically impossible'],
      ['केवल तभी जब पिता का रक्त समूह AB हो', 'Only if the father has blood type AB'],
      ['केवल तब जब बच्चा गोद लिया गया हो', 'Only if the child is adopted'],
    ],
    'ABO रक्त समूह में Iᴬ और Iᴮ सह-प्रभावी (Co-dominant) हैं तथा i (O) अप्रभावी है। जब Iᴬi × Iᴮi का संयोग होता है, तो 25% संभावना ii (O रक्त समूह) संतान की होती है।',
    'Yes: Iᴬ and Iᴮ are co-dominant over recessive i. Crossing heterozygous Iᴬi × Iᴮi yields a 25% probability of an ii (Type O) child.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'स्कूल जाने वाले बच्चों के संज्ञानात्मक कार्य और स्मृति के लिए "सुबह का पौष्टिक नाश्ता" क्यों अत्यंत महत्वपूर्ण माना जाता है?',
    'Why is a nutritious morning breakfast considered crucial for school-aged children’s cognitive performance?',
    ['रात्रि भर के उपवास के बाद मस्तिष्क को आवश्यक ग्लूकोज ऊर्जा मिलती है, जिससे ध्यान और कार्यशील स्मृति सुधरती है', 'It replenishes brain glucose after overnight fasting, improving attention and working memory'],
    [
      ['इससे बच्चों को कक्षा में तुरंत नींद आने लगती है', 'It makes children fall asleep immediately in class'],
      ['मस्तिष्क को ग्लूकोज की कोई आवश्यकता नहीं होती', 'The brain requires no glucose'],
      ['नाश्ता केवल शारीरिक लंबाई कम करने के लिए होता है', 'Breakfast only reduces physical height'],
    ],
    'बच्चों का मस्तिष्क शरीर की कुल ऊर्जा का बड़ा हिस्सा ग्लूकोज के रूप में उपयोग करता है; भूखे पेट स्कूल आने से ध्यान भटकता है और समस्या-समाधान धीमा पड़ता है। (मध्याह्न भोजन योजना भी इसी पोषण आधार पर सहायक है)।',
    'Children’s brains rely heavily on steady glucose supply; eating breakfast enhances classroom concentration, memory recall, and mood.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Health & Diseases',
    'अत्यधिक रव/शोर और वायु प्रदूषण (जैसे सीसा/लेड विषाक्तता) बाल विकास को किस प्रकार प्रभावित करते हैं?',
    'How do chronic environmental pollutants like Lead (Pb) exposure and excessive noise affect child development?',
    ['सीसा तंत्रिका तंत्र को क्षति पहुँचाकर IQ घटाता है, तथा दीर्घकालिक शोर पठन कौशल व ध्यान को बाधित करता है', 'Lead damages neurodevelopment and lowers IQ, while chronic noise impairs reading comprehension and attention'],
    [
      ['सीसा और शोर से बच्चों की श्रवण शक्ति तेज हो जाती है', 'Lead and noise sharpen auditory memory'],
      ['पर्यावरणीय प्रदूषण का बच्चों के मस्तिष्क पर कोई असर नहीं होता', 'Environmental toxins have zero effect on young brains'],
      ['यह केवल वयस्कों के नाखूनों को प्रभावित करता है', 'They affect only adult fingernails'],
    ],
    'पेंट, पानी या औद्योगिक धुएँ से मिलने वाला सीसा (Lead) बच्चों के विकासशील मस्तिष्क में ध्यान, आवेग-नियंत्रण और बुद्धि पर गंभीर दुष्प्रभाव डालता है।',
    'Early lead exposure is neurotoxic, causing lower IQ and attention deficits; chronic noise elevates stress hormones and disrupts language/reading acquisition.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'जे. एम. सोरेन्सन एवं अन्य शिक्षा मनोवैज्ञानिकों के अनुसार कक्षा में शिक्षक किस कारक को नियंत्रित व समृद्ध कर सकता है—आनुवंशिकता या वातावरण?',
    'Between Heredity and Environment, which factor can a classroom teacher actively modify and enrich to foster child development?',
    ['वातावरण (शैक्षिक, सामाजिक एवं संवेगात्मक परिवेश)', 'Environment (instructional, social, and emotional climate)'],
    [
      ['छात्र के माता-पिता से मिले गुणसूत्र', 'Chromosomes inherited from parents'],
      ['छात्र का जन्मजात रक्त समूह', 'The student’s innate blood group'],
      ['छात्र की जन्म तिथि', 'The student’s date of birth'],
    ],
    'शिक्षक बालक की आनुवंशिक संरचना नहीं बदल सकता, लेकिन वह समृद्ध शिक्षण सामग्री, स्नेही व्यवहार, प्रेरक गतिविधियाँ और सुरक्षित कक्षा वातावरण देकर अधिकतम विकास सुनिश्चित कर सकता है।',
    'While heredity is fixed at conception, teachers can profoundly shape the learning, emotional, and social environment to help every child flourish.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Cultural Factors',
    'एक भारतीय ग्रामीण पृष्ठभूमि के बच्चे को शहरी पहेलियों के बजाय खेती, मेले और लोककथाओं से जुड़े उदाहरणों से गणित पढ़ाने पर वह शीघ्र समझ लेता है। यह विकास को प्रभावित करने वाले किस कारक को दर्शाता है?',
    'A rural child grasps math quickly when taught via farming, local fairs, and folk contexts rather than unfamiliar urban examples. Which developmental factor does this highlight?',
    ['सांस्कृतिक संदर्भ एवं पूर्व-अनुभवों का प्रभाव', 'Influence of cultural context and prior lived experiences'],
    [
      ['शारीरिक ऊँचाई का प्रभाव', 'Effect of physical height'],
      ['रक्तचाप का प्रभाव', 'Effect of blood pressure'],
      ['जन्म के वजन का प्रभाव', 'Effect of birth weight'],
    ],
    'सीखना और संज्ञानात्मक विकास सदैव बच्चे की संस्कृति और दैनिक अनुभवों से जुड़ा होता है; परिचित सांस्कृतिक संदर्भ जोड़ने से अर्थ-निर्माण सहज होता है।',
    'Cognitive engagement is deeply embedded in cultural context; connecting school concepts to familiar lived experiences bridges understanding.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Psychological Factors',
    '"सीखा हुआ असहायपन" (Learned Helplessness—मार्टिन सेलिगमैन) किसी बालक के शैक्षिक विकास को कैसे बाधित करता है?',
    'How does "Learned Helplessness" (Martin Seligman) impede a child’s academic development?',
    ['बार-बार की असफलता के बाद बच्चा मान लेता है कि उसके प्रयासों से कोई फर्क नहीं पड़ेगा और वह कोशिश करना छोड़ देता है', 'After repeated uncontrollable failures, the child believes effort makes no difference and gives up trying'],
    [
      ['बच्चा कठिन प्रश्नों को हल करने के लिए अधिक उत्साहित हो जाता है', 'The child becomes increasingly excited to tackle hard tasks'],
      ['बच्चा दूसरों की मदद करने के लिए दौड़ पड़ता है', 'The child rushes to help others'],
      ['बच्चे की बुद्धि लब्धि अचानक 150 हो जाती है', 'The child’s IQ suddenly jumps to 150'],
    ],
    'यदि किसी छात्र को लगातार कठोर आलोचना मिले और सफलता का कोई अनुभव न हो, तो उसमें असहायता की भावना घर कर जाती है; छोटे प्राप्त करने योग्य लक्ष्यों से इसे दूर किया जा सकता है।',
    'When students repeatedly fail despite effort or face constant negative feedback, they stop trying; structured mastery experiences reverse learned helplessness.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Factors Overview',
    'निम्नलिखित में से कौन-सा कारक बालक के विकास पर "आंतरिक" (Internal) कारक के रूप में प्रभाव डालता है?',
    'Which of the following acts primarily as an "Internal" factor influencing child development?',
    ['आनुवंशिकता, शारीरिक स्वास्थ्य, बुद्धि एवं संवेगात्मक प्रकृति', 'Heredity, physical health, intelligence, and emotional temperament'],
    [
      ['विद्यालय का पुस्तकालय एवं खेल मैदान', 'School library and playground'],
      ['माता-पिता की मासिक आय', 'Parents’ monthly income'],
      ['पड़ोस का सांस्कृतिक वातावरण', 'Neighborhood cultural climate'],
    ],
    'विकास को प्रभावित करने वाले कारक दो प्रकार के होते हैं: आंतरिक (वंशानुक्रम, शारीरिक व मानसिक स्वास्थ्य, बुद्धि, अंतःस्रावी ग्रंथियाँ) और बाह्य (परिवार, स्कूल, पोषण, समाज, संस्कृति)।',
    'Internal factors originate within the child (genetics, temperament, health, endocrine balance, intelligence), whereas family, school, and culture are external.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Factors Overview',
    'बालक के विकास में "एक्टिव इंगेजमेंट" (सक्रिय जुड़ाव) बनाम "निष्क्रिय स्क्रीन टाइम" का क्या प्रभाव देखा गया है?',
    'What impact does excessive passive screen time (especially before age 2) have on early development compared to active human interaction?',
    ['यह आमने-सामने के संवाद, भाषा अर्जन, नींद और ध्यान अवधि को कम कर सकता है', 'It can reduce face-to-face communication, delay language gains, disrupt sleep, and shorten attention'],
    [
      ['यह बिना किसी मानवीय संवाद के बच्चे को तुरंत बहुभाषी बना देता है', 'It instantly makes toddlers multilingual without human interaction'],
      ['यह शिशु की दृष्टि और शारीरिक फिटनेस को सर्वोत्तम बनाता है', 'It optimizes infant vision and physical fitness'],
      ['इसका शिशु के विकास से कोई संबंध नहीं है', 'It has zero impact on development'],
    ],
    'WHO और IAP दिशानिर्देशों के अनुसार 2 वर्ष से छोटे बच्चों के लिए स्क्रीन टाइम से बचते हुए प्रत्यक्ष मानवीय संवाद, कहानी सुनना और शारीरिक खेल को प्राथमिकता देनी चाहिए।',
    'Excessive passive screen exposure replaces responsive caregiver talk and active play, risking delayed language, disrupted sleep, and shorter attention.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'जब लाल और सफेद फूलों वाले पौधों (Mirabilis jalapa / स्नैपड्रैगन) के संकरण से F1 पीढ़ी में गुलाबी फूल प्राप्त होते हैं, तो यह मेंडल के प्रभाविता नियम का कौन-सा अपवाद कहलाता है?',
    'When crossing red and white four-o’clock (Mirabilis jalapa) plants produces pink flowers in F1, what genetic phenomenon is shown?',
    ['अपूर्ण प्रभाविता (Incomplete Dominance)', 'Incomplete Dominance'],
    [
      ['पूर्ण प्रभाविता (Complete Dominance)', 'Complete Dominance'],
      ['स्वतंत्र अपव्यूहन (Independent Assortment)', 'Independent Assortment'],
      ['प्रत्यागमन (Regression)', 'Regression'],
    ],
    'अपूर्ण प्रभाविता में प्रभावी एलील अप्रभावी को पूरी तरह दबा नहीं पाता, जिससे F1 में दोनों के मध्य का मिश्रित लक्षण (गुलाबी रंग) प्रकट होता है।',
    'In Incomplete Dominance, neither allele completely masks the other, producing an intermediate blended phenotype (pink) in heterozygotes.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'बाल विकास में "प्रकृति-पोषण विवाद" (Nature vs. Nurture Debate) पर आधुनिक मनोविज्ञान की सर्वमान्य सहमति क्या है?',
    'What is the modern scientific consensus on the "Nature versus Nurture" debate in child development?',
    ['दोनों जटिल एवं सतत अंतःक्रिया में साथ कार्य करते हैं; एक के बिना दूसरे का प्रभाव आंका नहीं जा सकता', 'Both operate in continuous, complex interaction; development cannot be attributed solely to either alone'],
    [
      ['विकास 100% केवल आनुवंशिकता से तय होता है', 'Development is 100% determined by heredity alone'],
      ['विकास 100% केवल वातावरण से तय होता है', 'Development is 100% determined by environment alone'],
      ['न जींस का महत्व है न वातावरण का', 'Neither genes nor environment matter'],
    ],
    'आधुनिक विकासात्मक विज्ञान "Nature via Nurture" मानता है—अर्थात् जींस वातावरण के प्रति संवेदनशील होते हैं और वातावरण जींस की अभिव्यक्ति को आकार देता है।',
    'Contemporary developmental science embraces "Nature via Nurture," recognizing dynamic gene-environment interplay across the entire lifespan.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'लैमार्कवाद और डार्विनवाद के संदर्भ में चार्ल्स डार्विन का विकासवादी सिद्धांत किस मुख्य प्रक्रिया पर आधारित था?',
    'In contrast to Lamarckism, Charles Darwin’s theory of evolution rested on which central mechanism?',
    ['प्राकृतिक वरण (Natural Selection) एवं योग्यतम की उत्तरजीविता', 'Natural Selection and differential survival of adaptive variations'],
    [
      ['अंगों के उपयोग-अनुपयोग द्वारा अर्जित गुणों की वंशागति', 'Inheritance of acquired traits via use and disuse'],
      ['अकस्मात् दैवीय परिवर्तन', 'Sudden supernatural transformation'],
      ['सीमित समय के लिए प्रयोगशाला अनुबंधन', 'Short-term laboratory conditioning'],
    ],
    'डार्विन ने बताया कि जीवों में प्राकृतिक रूप से आनुवंशिक विविधताएँ होती हैं और जो गुण पर्यावरण के अनुकूल होते हैं, वे जीवित रहकर अगली पीढ़ी तक पहुँचते हैं।',
    'Darwin proposed Natural Selection: heritable variations that enhance survival and reproduction in a given environment become more common over generations.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'जन्म के बाद पहले 6 माह तक शिशु के लिए "अनन्य स्तनपान" (Exclusive Breastfeeding) की अनुशंसा क्यों की जाती है?',
    'Why is "Exclusive Breastfeeding" recommended for the first 6 months of life?',
    ['माँ के दूध में शिशु की संपूर्ण पोषण व जल आवश्यकताएँ और रोगों से बचाने वाली प्रतिरक्षा दोनों मौजूद होती हैं', 'Breast milk supplies complete nutrition, hydration, and protective antibodies tailored to the infant'],
    [
      ['क्योंकि 6 माह तक शिशु को कोई पोषण नहीं चाहिए', 'Because infants need no nutrition until 6 months'],
      ['क्योंकि माँ का दूध बच्चे के दाँत तुरंत तोड़ देता है', 'Because breast milk prevents teeth forever'],
      ['ताकि शिशु को ठोस भोजन की आदत कभी न पड़े', 'So the infant never eats solid food later'],
    ],
    'WHO व यूनिसेफ के अनुसार 0–6 माह तक केवल माँ का दूध (यहाँ तक कि ऊपर से पानी भी नहीं) शिशु को दस्त, निमोनिया व कुपोषण से बचाकर स्वस्थ विकास देता है।',
    'WHO recommends exclusive breastfeeding for 6 months because it provides optimal nutrients, easy digestibility, and critical protection against infections.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Health & Diseases',
    'टीकाकरण (Immunization—जैसे BCG, पोलियो, खसरा, DPT) बाल विकास को किस प्रकार सुरक्षित रखता है?',
    'How does childhood immunization (e.g., BCG, Polio, DPT, Measles) safeguard child development?',
    ['यह जानलेवा व विकलांगता लाने वाले संक्रामक रोगों से बचाकर निर्बाध शारीरिक व तंत्रिका विकास सुनिश्चित करता है', 'It prevents life-threatening and disabling infectious diseases, protecting uninterrupted physical and neural growth'],
    [
      ['यह सीधे बच्चे की बुद्धि लब्धि को 200 कर देता है', 'It directly raises IQ to 200'],
      ['यह बच्चे को भोजन की आवश्यकता से मुक्त कर देता है', 'It eliminates the need for food'],
      ['यह केवल वयस्क व्यक्तियों को दिया जाता है', 'It is administered only to elderly adults'],
    ],
    'पोलियो से अंग-विकृति, खसरे से मस्तिष्क शोथ/दृष्टि हानि और टिटनेस से मृत्यु हो सकती है; समय पर टीकाकरण स्वस्थ बाल विकास की आधारशिला है।',
    'Vaccines prevent severe infections (like polio paralysis or measles encephalitis) that otherwise cause mortality, sensory loss, or developmental delays.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Factors Overview',
    'अत्यधिक भावनात्मक तनाव और असुरक्षा (जैसे घरेलू हिंसा या उपेक्षा) के बीच पलने वाले बच्चों में प्रायः शारीरिक कद छोटा क्यों रह सकता है?',
    'Why can severe chronic emotional stress and neglect stunt physical growth in children (psychosocial dwarfism)?',
    ['दीर्घकालिक तनाव हार्मोन (कॉर्टिसोल) पीयूष ग्रंथि से वृद्धि हार्मोन (GH) के स्राव को बाधित करते हैं', 'Chronic stress hormones suppress growth hormone (GH) secretion from the pituitary gland'],
    [
      ['तनाव सीधे हड्डियों को गला देता है', 'Stress literally dissolves leg bones'],
      ['बच्चे जानबूझकर अपनी लंबाई रोक लेते हैं', 'Children consciously decide to stop growing'],
      ['भावनाओं का हार्मोन से कोई संबंध नहीं होता', 'Emotions have no connection to hormones'],
    ],
    'मनोवैज्ञानिक वंचन (Psychosocial Dwarfism) दर्शाता है कि भावनात्मक सुरक्षा और स्नेह केवल मन ही नहीं, बल्कि शरीर के अंतःस्रावी तंत्र और शारीरिक वृद्धि के लिए भी आवश्यक हैं।',
    'In psychosocial dwarfism, severe emotional deprivation disrupts hypothalamic-pituitary signaling, lowering GH output—growth often rebounds once safety and warmth are restored.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Factors Overview',
    'जन्म क्रम (Birth Order) पर अल्फ्रेड एडलर (Alfred Adler) के विचार के अनुसार "सबसे छोटे बच्चे" (Youngest Child) में प्रायः किस प्रवृत्ति का जोखिम या गुण देखा जा सकता है?',
    'According to Alfred Adler’s Birth Order theory, what tendency is often associated with the "Youngest Child" in a family?',
    ['अत्यधिक लाड़-प्यार के कारण निर्भरता की प्रवृत्ति या फिर बड़े भाई-बहनों से आगे निकलने की तीव्र महत्वाकांक्षा', 'Risk of dependency if overly pampered, or strong ambition to outpace older siblings'],
    [
      ['सदैव परिवार के मुखिया की तरह कठोर जिम्मेदारी निभाना', 'Always acting as the strict family authority'],
      ['कभी भी भाषा न सीख पाना', 'Total inability to learn speech'],
      ['केवल अकेले कमरे में बंद रहना', 'Always remaining locked in a room'],
    ],
    'व्यक्तिगत मनोविज्ञान के जनक एडलर ने बताया कि प्रथम संतान प्रायः जिम्मेदार व सत्ता-उन्मुख, मध्य संतान प्रतिस्पर्धी व कूटनीतिक, तथा अंतिम संतान लाड़ली या अत्यंत महत्वाकांक्षी हो सकती है।',
    'Adler noted that youngest children may become dependent if overindulged by everyone, or strongly driven to prove themselves against older siblings.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'निम्नलिखित में से किस जोड़े में दोनों ही विकास के "पर्यावरणीय" (Environmental) कारक हैं?',
    'In which pair are BOTH items strictly "Environmental" factors affecting development?',
    ['मातृ पोषण एवं विद्यालय का शिक्षण वातावरण', 'Maternal nutrition and school learning climate'],
    [
      ['गुणसूत्र संरचना एवं विद्यालय का पुस्तकालय', 'Chromosomal makeup and school library'],
      ['रक्त समूह एवं पारिवारिक आय', 'Blood group and family income'],
      ['आँखों का रंग एवं सहपाठी समूह', 'Eye color and peer group'],
    ],
    'गुणसूत्र, रक्त समूह और आँखों का रंग जैविक/आनुवंशिक हैं, जबकि पोषण और विद्यालय का परिवेश वातावरणीय कारक हैं।',
    'Chromosomes, blood type, and eye color are hereditary, whereas nutrition and school climate are purely environmental.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Mendel’s Laws',
    'मेंडल के अनुसार किसी जीव के बाह्य दिखाई देने वाले लक्षण (जैसे लंबा होना) और उसके आंतरिक आनुवंशिक संघटन (जैसे TT या Tt) को क्रमशः क्या कहा जाता है?',
    'In Mendelian genetics, what are an organism’s observable traits (e.g., tallness) and its underlying genetic makeup (e.g., TT or Tt) called, respectively?',
    ['फीनोटाइप (लक्षणप्ररूप) एवं जीनोटाइप (जीनप्ररूप)', 'Phenotype and Genotype'],
    [
      ['जीनोटाइप एवं फीनोटाइप', 'Genotype and Phenotype'],
      ['एलील एवं क्रोमोसोम', 'Allele and Chromosome'],
      ['ऑटोसोम एवं गेमेट', 'Autosome and Gamete'],
    ],
    'फीनोटाइप व्यक्ति के प्रकट शारीरिक व व्यावहारिक लक्षणों को दर्शाता है (जो जीनोटाइप + वातावरण से बनता है), जबकि जीनोटाइप उसकी आंतरिक जीन संरचना है।',
    'Phenotype is the observable expression (shaped by genotype + environment), whereas Genotype is the underlying genetic constitution.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'गाल्टन के "वंशानुक्रम जीवसांख्यिकी सिद्धांत" (Biometric Law of Ancestral Heredity) के अनुसार संतान को अपने गुणों का कितना भाग क्रमशः माता-पिता तथा दादा-दादी/नाना-नानी से प्राप्त होता है?',
    'According to Francis Galton’s Law of Ancestral Heredity, what fraction of traits was estimated to come from parents and grandparents, respectively?',
    ['माता-पिता से 1/2 (50%), दादा-दादी व नाना-नानी से 1/4 (25%)', '1/2 (50%) from parents and 1/4 (25%) from grandparents'],
    [
      ['माता-पिता से 100% और पूर्वजों से 0%', '100% from parents and 0% from ancestors'],
      ['माता-पिता से 1/4 और दादा-दादी से 1/2', '1/4 from parents and 1/2 from grandparents'],
      ['माता-पिता से केवल 1/8 भाग', 'Only 1/8 from parents'],
    ],
    'गाल्टन (1897) के सांख्यिकीय नियम के अनुसार संतान में 1/2 गुण माता-पिता से, 1/4 दादा-दादी/नाना-नानी से, 1/8 परदादा-परनाना से (क्रमशः घटती ज्यामितीय श्रेणी में) आते हैं।',
    'Galton’s Law of Ancestral Heredity modeled ancestral contributions as a geometric series: 1/2 from parents, 1/4 from grandparents, 1/8 from great-grandparents, etc.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'बी. एस. मोल (B. S. Munn) या कैंडोल (Candolle) / गाल्टन के अध्ययनों के विपरीत, किस कारक को सुधारकर भारत जैसे विकासशील देशों में "फ्लिन प्रभाव" (Flynn Effect) देखा गया है?',
    'What is the "Flynn Effect" observed in IQ scores across generations worldwide, highlighting environmental impact?',
    ['बेहतर पोषण, शिक्षा के प्रसार और संज्ञानात्मक जटिलता के कारण पीढ़ी-दर-पीढ़ी औसत IQ अंकों में क्रमिक वृद्धि', 'Steady generational rise in average IQ scores driven by better nutrition, schooling, and cognitive complexity'],
    [
      ['आनुवंशिक उत्परिवर्तन से हर पीढ़ी में IQ का आधा हो जाना', 'IQ halving every generation due to mutations'],
      ['मोबाइल फोन के कारण सभी बच्चों की बुद्धि शून्य हो जाना', 'Intelligence dropping to zero because of mobile phones'],
      ['मानव मस्तिष्क का आकार कम होते जाना', 'Human brain size shrinking steadily'],
    ],
    'जेम्स फ्लिन ने दिखाया कि 20वीं सदी में औसत IQ अंक दशकों में तेजी से बढ़े—इतनी तेजी आनुवंशिक परिवर्तन से संभव नहीं, अतः यह बेहतर शिक्षा, स्वास्थ्य और पोषण (वातावरण) का प्रमाण है।',
    'James Flynn documented steady rises in population IQ scores over decades—too rapid for genetic evolution, proving the power of schooling, health, and nutrition.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'पैराथायरॉइड ग्रंथि (Parathyroid Gland) से स्रावित पैराथॉर्मोन रक्त में किस तत्व के संतुलन को नियंत्रित कर हड्डियों व तंत्रिका विकास को प्रभावित करता है?',
    'Parathormone secreted by the parathyroid glands regulates the blood balance of which mineral vital for bones and nerve function?',
    ['कैल्शियम एवं फॉस्फेट', 'Calcium and Phosphate'],
    [
      ['आयोडीन एवं फ्लोरीन', 'Iodine and Fluorine'],
      ['लौह एवं ताँबा', 'Iron and Copper'],
      ['सोडियम एवं क्लोरीन', 'Sodium and Chlorine'],
    ],
    'पैराथायरॉइड ग्रंथि रक्त में कैल्शियम के स्तर को बनाए रखती है; इसका असंतुलन मांसपेशियों में ऐंठन (Tetany) और हड्डियों की कमजोरी ला सकता है।',
    'Parathyroid hormone regulates blood calcium and phosphate homeostasis, essential for bone mineralization, muscle contraction, and nerve conduction.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Nutrition & Health',
    'विटामिन A की कमी से बच्चों में कौन-सी समस्या उत्पन्न होती है जो उनके विद्यालयी पठन-पाठन को प्रभावित कर सकती है?',
    'Vitamin A deficiency in children primarily causes which sensory condition that can impair learning?',
    ['रतौंधी (Night Blindness) एवं गंभीर स्थिति में ज़ेरोफ्थैल्मिया (दृष्टि हानि)', 'Night blindness and, in severe cases, xerophthalmia (vision loss)'],
    [
      ['बहरापन (Deafness)', 'Deafness'],
      ['हकलाना (Stammering)', 'Stammering'],
      ['स्कर्वी (मसूड़ों से खून आना)', 'Scurvy (bleeding gums)'],
    ],
    'विटामिन A रेटिना के रोडोप्सिन निर्माण और नेत्र स्वास्थ्य के लिए आवश्यक है; इसकी कमी से कम रोशनी में दिखाई न देना (रतौंधी) और कॉर्निया को क्षति हो सकती है।',
    'Vitamin A is vital for retinal function and epithelial eye health; deficiency leads to night blindness and potentially irreversible corneal damage.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    '"एक व्यक्ति के विकास में आनुवंशिकता और वातावरण दोनों की भूमिका 50%-50% नहीं होती, बल्कि ठीक उसी प्रकार अविभाज्य है जैसे आयत का क्षेत्रफल लंबाई और चौड़ाई से बनता है।" यह कथन किसका है?',
    '"Heredity and environment do not contribute separate percentages; they are as inseparable as length and width in the area of a rectangle." Whose view does this reflect?',
    ['डोनाल्ड हेब (Donald Hebb) एवं आधुनिक अंतःक्रियावादी दृष्टिकोण', 'Donald Hebb and the modern interactionist view'],
    [
      ['फ्रांसिस गाल्टन का शुद्ध आनुवंशिकतावाद', 'Galton’s pure hereditarianism'],
      ['वाटसन का शुद्ध व्यवहारवाद', 'Watson’s radical behaviorism'],
      ['रूसो का प्रकृतिवाद', 'Rousseau’s naturalism'],
    ],
    'मनोवैज्ञानिक डोनाल्ड हेब ने आयत के क्षेत्रफल (Area = L × W) का उदाहरण देकर समझाया कि यह पूछना व्यर्थ है कि क्षेत्रफल में लंबाई अधिक महत्वपूर्ण है या चौड़ाई—दोनों अनिवार्य हैं।',
    'Donald Hebb used the rectangle analogy (asking whether length or width contributes more to area is meaningless) to show heredity and environment are inseparable.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'School & Peer Factors',
    'विद्यालय में सकारात्मक "मनो-सामाजिक वातावरण" (Psychosocial Climate) बनाने का कौन-सा उपाय बाल विकास के लिए सर्वाधिक हितकर है?',
    'Which measure best fosters a positive psychosocial climate in school for healthy child development?',
    ['भयमुक्त, सहानुभूतिपूर्ण संवाद, सहयोगात्मक अधिगम और शून्य बुलिंग (Zero Bullying) नीति', 'Fear-free, empathetic communication, cooperative learning, and a zero-bullying policy'],
    [
      ['छात्रों के बीच कड़ा श्रेणीकरण और शारीरिक दंड', 'Strict ranking and corporal punishment'],
      ['कमजोर छात्रों का कक्षा में उपहास करना', 'Ridiculing struggling learners in front of peers'],
      ['खेल व कला की सभी कक्षाएँ बंद करना', 'Canceling all art and sports periods'],
    ],
    'शारीरिक व मानसिक भय से मुक्त और अपनत्वपूर्ण विद्यालयी परिवेश छात्रों में आत्म-सम्मान, जिज्ञासा और संवेगात्मक सुरक्षा को बढ़ावा देता है।',
    'A safe, supportive, anti-bullying school environment reduces anxiety and nurtures curiosity, belonging, and emotional resilience.',
    'EASY'
  ),
  q(
    'Factors Affecting Development',
    'Family & Socioeconomic Factors',
    'एकल-अभिभावक या संघर्षपूर्ण वैवाहिक वातावरण में रहने वाले बच्चों के संवेगात्मक विकास पर पड़ने वाले नकारात्मक प्रभाव को कैसे कम किया जा सकता है?',
    'How can negative developmental impacts on children facing family conflict or separation be effectively buffered?',
    ['कम से कम एक विश्वसनीय वयस्क (अभिभावक या शिक्षक) का स्नेही, स्थिर और संवेदनशील सहारा प्रदान करके', 'Through steady, warm, responsive support from at least one reliable adult (parent or teacher)'],
    [
      ['बच्चे को घर की सारी आर्थिक व कानूनी समस्याओं का दोषी ठहराकर', 'By blaming the child for household problems'],
      ['बच्चे का विद्यालय जाना बंद करके', 'By withdrawing the child from school'],
      ['बच्चे के साथ पूरी तरह संवाद बंद करके', 'By cutting off communication with the child'],
    ],
    'लचीलापन (Resilience) अनुसंधान सिद्ध करता है कि कठिन पारिवारिक परिस्थितियों में भी एक संवेदनशील वयस्क का स्थिर स्नेह और विद्यालयी जुड़ाव बच्चे को उबार सकता है।',
    'Resilience research consistently shows that one stable, caring, responsive adult relationship strongly buffers children against family adversity.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'निम्नलिखित में से कौन-सा उदाहरण दर्शाता है कि "परिवार की संरचना और प्रथाएँ" बालक के शारीरिक विकास को भी प्रभावित कर सकती हैं?',
    'Which example shows how cultural/family practices can directly affect a child’s physical development?',
    ['लड़कों को अधिक पोषक आहार देना और लड़कियों के पोषण व स्वास्थ्य की उपेक्षा करना', 'Providing nutrient-rich diets preferentially to boys while neglecting girls’ nutrition and healthcare'],
    [
      ['जुड़वाँ बच्चों का एक ही दिन जन्म लेना', 'Twins being born on the same day'],
      ['बच्चे की आँखों की पुतली का काला होना', 'Having dark brown irises'],
      ['बच्चे के रक्त समूह का AB होना', 'Having AB blood group'],
    ],
    'लैंगिक भेदभाव जैसी सामाजिक-सांस्कृतिक प्रथाएँ भोजन, टीकाकरण और चिकित्सा देखभाल की उपलब्धता बदलकर सीधे शारीरिक वृद्धि और स्वास्थ्य को प्रभावित करती हैं।',
    'Gender bias in food allocation and healthcare access is a socio-cultural factor that directly affects physical growth and morbidity.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Endocrine Glands',
    'किशोरावस्था में जनन ग्रंथियों (Gonads) को सक्रिय करने वाला संकेत किस ग्रंथि से प्रारंभ होता है?',
    'The hormonal cascade activating the gonads (testes/ovaries) at puberty is initiated by which brain-endocrine axis?',
    ['हाइपोथैलेमस एवं पीयूष ग्रंथि (Hypothalamus-Pituitary Axis)', 'The Hypothalamus and Pituitary gland'],
    [
      ['अग्न्याशय एवं प्लीहा', 'Pancreas and Spleen'],
      ['लार ग्रंथियाँ', 'Salivary glands'],
      ['थाइमस ग्रंथि', 'Thymus gland'],
    ],
    'हाइपोथैलेमस GnRH हार्मोन छोड़ता है जो पीयूष ग्रंथि को FSH और LH स्रावित करने को प्रेरित करता है, और वे वृषण व अंडाशय को सक्रिय करते हैं।',
    'The hypothalamus releases GnRH, prompting the anterior pituitary to secrete LH and FSH, which stimulate the testes and ovaries.',
    'HARD'
  ),
  q(
    'Factors Affecting Development',
    'Prenatal & Birth Factors',
    'जन्म के समय ऑक्सीजन की कमी (Anoxia / Perinatal Hypoxia) होने से नवजात के विकास पर क्या संभावित दुष्प्रभाव पड़ सकता है?',
    'What serious developmental risk does oxygen deprivation around birth (Perinatal Anoxia/Hypoxia) pose to a newborn?',
    ['मस्तिष्क कोशिकाओं को क्षति पहुँचने से सेरेब्रल पाल्सी या संज्ञानात्मक विलंब हो सकता है', 'Brain cell damage potentially leading to cerebral palsy or cognitive delays'],
    [
      ['बालक की दौड़ने की गति तुरंत बढ़ जाती है', 'It immediately accelerates running speed'],
      ['यह केवल बालों के झड़ने का कारण बनता है', 'It merely causes temporary hair loss'],
      ['इससे बुद्धि लब्धि में वृद्धि होती है', 'It boosts intelligence quotient'],
    ],
    'मस्तिष्क न्यूरॉन्स ऑक्सीजन की कमी के प्रति अत्यंत संवेदनशील होते हैं; प्रसव के समय सुरक्षित चिकित्सा देखभाल एनॉक्सिया से बचाकर तंत्रिका विकास की रक्षा करती है।',
    'Neurons are highly vulnerable to oxygen deprivation; prolonged birth anoxia can cause permanent motor impairment (cerebral palsy) or intellectual disability.',
    'MEDIUM'
  ),
  q(
    'Factors Affecting Development',
    'Heredity & Environment',
    'रॉस, थॉर्नडाइक और गाल्टन जैसे प्रारंभिक मनोवैज्ञानिकों की तुलना में आधुनिक शिक्षाशास्त्र वातावरण को इतना महत्वपूर्ण क्यों मानता है?',
    'Why does modern educational psychology place immense emphasis on enriching the child’s environment?',
    ['क्योंकि न्यूरोप्लास्टिसिटी के कारण समृद्ध वातावरण मस्तिष्क के कनेक्शनों और सीखने की क्षमता को कई गुना बढ़ा सकता है', 'Because neuroplasticity allows enriched environments to strengthen neural connections and maximize learning potential'],
    [
      ['क्योंकि आधुनिक समय में आनुवंशिकता ने काम करना बंद कर दिया है', 'Because heredity has stopped functioning in modern times'],
      ['क्योंकि वातावरण सस्ता और आसानी से खरीदा जा सकता है', 'Because environment can be bought cheaply'],
      ['क्योंकि शिक्षक आनुवंशिकता पर केवल भाषण दे सकते हैं', 'Because teachers prefer lecturing about environment'],
    ],
    'मस्तिष्क की सुघट्यता (Neuroplasticity) प्रमाणित करती है कि प्रारंभिक समृद्ध अनुभव, भाषा संवाद और गुणवत्तापूर्ण शिक्षा मस्तिष्क के नेटवर्क को जीवन भर संवारती है।',
    'Neuroplasticity demonstrates that stimulating early experiences, responsive care, and quality schooling physically strengthen neural networks.',
    'MEDIUM'
  )
];
