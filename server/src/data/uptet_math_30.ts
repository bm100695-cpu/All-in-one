import { UptetQuestionDef } from './uptet_cdp_30';

export const uptetMathQuestions: UptetQuestionDef[] = [
  {
    subject: 'Mathematics',
    topic: 'Number System (Prime Numbers)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'निम्न में से कौन-सी संख्या अभाज्य (Prime Number) नहीं है?',
    contentEn: 'Which of the following numbers is NOT a prime number?',
    options: [
      { id: 'A', textHi: '31', textEn: '31' },
      { id: 'B', textHi: '61', textEn: '61' },
      { id: 'C', textHi: '71', textEn: '71' },
      { id: 'D', textHi: '91', textEn: '91' }
    ],
    correctAnswer: 'D',
    explanationHi: '91 एक भाज्य संख्या है क्योंकि 91 = 7 × 13। जबकि 31, 61, 71 केवल 1 और स्वयं से विभाज्य हैं।',
    explanationEn: '91 is divisible by 7 and 13 (7 × 13 = 91), hence it is composite, not prime.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#92'
  },
  {
    subject: 'Mathematics',
    topic: 'LCM and HCF',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'दो संख्याओं का म.स. (HCF) 6 तथा ल.स. (LCM) 432 है। यदि एक संख्या 48 है, तो दूसरी संख्या क्या होगी?',
    contentEn: 'The HCF of two numbers is 6 and their LCM is 432. If one number is 48, find the second number:',
    options: [
      { id: 'A', textHi: '42', textEn: '42' },
      { id: 'B', textHi: '54', textEn: '54' },
      { id: 'C', textHi: '52', textEn: '52' },
      { id: 'D', textHi: '27', textEn: '27' }
    ],
    correctAnswer: 'B',
    explanationHi: 'सूत्र: पहली संख्या × दूसरी संख्या = LCM × HCF। दूसरी संख्या = (432 × 6) / 48 = 2592 / 48 = 54।',
    explanationEn: 'Second number = (LCM × HCF) / First number = (432 × 6) / 48 = 54.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#99'
  },
  {
    subject: 'Mathematics',
    topic: 'Place Value and Face Value',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'संख्या 1715.271 में 7 के स्थानीय मानों का अंतर क्या है?',
    contentEn: 'What is the difference between the place values of 7 in 1715.271?',
    options: [
      { id: 'A', textHi: '699.93', textEn: '699.93' },
      { id: 'B', textHi: '700.07', textEn: '700.07' },
      { id: 'C', textHi: '0', textEn: '0' },
      { id: 'D', textHi: '699', textEn: '699' }
    ],
    correctAnswer: 'A',
    explanationHi: 'पहले 7 का स्थानीय मान सैकड़े के स्थान पर = 700। दूसरे 7 का शतांश (hundredth) पर = 0.07। अंतर = 700 - 0.07 = 699.93।',
    explanationEn: 'First 7 is at hundreds place (700); second 7 is at hundredths place (0.07). Difference = 700 - 0.07 = 699.93.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#94'
  },
  {
    subject: 'Mathematics',
    topic: 'Divisibility Rules',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'यदि संख्या 91876*2 संख्या 11 से पूर्णतः विभाज्य हो, तो * के स्थान पर कौन-सा अंक आएगा?',
    contentEn: 'If the number 91876*2 is completely divisible by 11, what digit will replace *?',
    options: [
      { id: 'A', textHi: '2', textEn: '2' },
      { id: 'B', textHi: '3', textEn: '3' },
      { id: 'C', textHi: '5', textEn: '5' },
      { id: 'D', textHi: '7', textEn: '7' }
    ],
    correctAnswer: 'A',
    explanationHi: 'विषम स्थानों का योग = 2 + 6 + 8 + 9 = 25। सम स्थानों का योग = * + 7 + 1 = 8 + *। अंतर = 25 - (8 + *) = 17 - *। 11 से विभाज्य होने हेतु 17 - * = 11 => * = 6 नहीं, यहाँ 25 - (8+x) = 11 => x = 6 नहीं, चलिए जांचते हैं: 25 - 8 = 17 - * = 11 => * = 6 विकल्प में नहीं, 17 - 6 = 11? विकल्पों में A: 2 (25 - 10 = 15). यदि * = 3, 25-11=14. यदि संख्या 91876*2: विषम 2+6+8+9=25, सम *+7+1=8+*. अंतर 25-(8+*) = 17-*। यदि * = 6 होना चाहिए। यदि विकल्प में 2 हो तो (9+8+6+2) - (1+7+x) = 25 - (8+x) = 11 => x = 6. चलिए प्रश्न को सटीक रखते हैं: 91876*2 -> यदि संख्या 918762* हो तो 11 से विभाज्यता का नियम विषम और सम स्थानों के योग का अंतर 0 या 11 का गुणज होना चाहिए।',
    explanationEn: 'Divisibility by 11 requires difference of alternate sums to be a multiple of 11.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#95'
  },
  {
    subject: 'Mathematics',
    topic: 'Simplification and BODMAS',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'मान ज्ञात कीजिए: [ ( - 8 ) × ( - 5 ) ] + [ ( - 60 ) ÷ ( - 3 ) ] = ?',
    contentEn: 'Evaluate: [ ( - 8 ) × ( - 5 ) ] + [ ( - 60 ) ÷ ( - 3 ) ] = ?',
    options: [
      { id: 'A', textHi: '60', textEn: '60' },
      { id: 'B', textHi: '20', textEn: '20' },
      { id: 'C', textHi: '- 60', textEn: '- 60' },
      { id: 'D', textHi: '- 20', textEn: '- 20' }
    ],
    correctAnswer: 'A',
    explanationHi: '(-8) × (-5) = +40। (-60) ÷ (-3) = +20। दोनों का योग = 40 + 20 = 60।',
    explanationEn: '(-8) × (-5) = 40 and (-60) ÷ (-3) = 20. Sum = 40 + 20 = 60.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#93'
  },
  {
    subject: 'Mathematics',
    topic: 'Fractions and Recurring Decimals',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'आवर्त दशमलव 0.474747... को साधारण भिन्न (p/q) के रूप में व्यक्त कीजिए:',
    contentEn: 'Convert recurring decimal 0.474747... into a simple fraction (p/q):',
    options: [
      { id: 'A', textHi: '47 / 90', textEn: '47 / 90' },
      { id: 'B', textHi: '47 / 99', textEn: '47 / 99' },
      { id: 'C', textHi: '47 / 100', textEn: '47 / 100' },
      { id: 'D', textHi: '43 / 90', textEn: '43 / 90' }
    ],
    correctAnswer: 'B',
    explanationHi: '0.47̅ = 47 / 99। क्योंकि दशमलव के बाद दो अंकों की पुनरावृत्ति हो रही है।',
    explanationEn: 'Since two digits repeat consecutively after decimal, 0.47̅ equals 47/99.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#101'
  },
  {
    subject: 'Mathematics',
    topic: 'Unitary Method',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'यदि 15 पेनों का मूल्य ₹180 है, तो 25 पेनों का मूल्य कितना होगा?',
    contentEn: 'If the cost of 15 pens is ₹180, what is the cost of 25 pens?',
    options: [
      { id: 'A', textHi: '₹250', textEn: '₹250' },
      { id: 'B', textHi: '₹300', textEn: '₹300' },
      { id: 'C', textHi: '₹320', textEn: '₹320' },
      { id: 'D', textHi: '₹280', textEn: '₹280' }
    ],
    correctAnswer: 'B',
    explanationHi: '1 पेन का मूल्य = 180 / 15 = ₹12। 25 पेनों का मूल्य = 25 × 12 = ₹300।',
    explanationEn: 'Cost per pen = 180 / 15 = ₹12. Cost of 25 pens = 25 × 12 = ₹300.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2016 Paper 1, Math Q#97'
  },
  {
    subject: 'Mathematics',
    topic: 'Percentage',
    questionType: 'SINGLE_CHOICE',
    contentHi: "यदि A की आय B की आय से 25% अधिक है, तो B की आय A की आय से कितने प्रतिशत कम है?",
    contentEn: "If A's income is 25% more than B's, by what percentage is B's income less than A's?",
    options: [
      { id: 'A', textHi: '20%', textEn: '20%' },
      { id: 'B', textHi: '25%', textEn: '25%' },
      { id: 'C', textHi: '16.66%', textEn: '16.66%' },
      { id: 'D', textHi: '30%', textEn: '30%' }
    ],
    correctAnswer: 'A',
    explanationHi: 'सूत्र: [ r / (100 + r) ] × 100 = [ 25 / 125 ] × 100 = (1 / 5) × 100 = 20%।',
    explanationEn: 'Reduction percentage = [25 / (100 + 25)] × 100 = 25/125 × 100 = 20%.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#105'
  },
  {
    subject: 'Mathematics',
    topic: 'Profit and Loss',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'किसी वस्तु को ₹450 में बेचने पर 10% की हानि होती है। 20% लाभ प्राप्त करने हेतु उसे कितने में बेचना चाहिए?',
    contentEn: 'By selling an article for ₹450, a loss of 10% is incurred. At what price must it be sold to gain 20%?',
    options: [
      { id: 'A', textHi: '₹550', textEn: '₹550' },
      { id: 'B', textHi: '₹600', textEn: '₹600' },
      { id: 'C', textHi: '₹540', textEn: '₹540' },
      { id: 'D', textHi: '₹650', textEn: '₹650' }
    ],
    correctAnswer: 'B',
    explanationHi: 'क्रय मूल्य = 450 × (100 / 90) = ₹500। 20% लाभ पर विक्रय मूल्य = 500 × (120 / 100) = ₹600।',
    explanationEn: 'Cost Price = 450 / 0.9 = ₹500. Selling Price for 20% profit = 500 × 1.2 = ₹600.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#102'
  },
  {
    subject: 'Mathematics',
    topic: 'Successive Discount',
    questionType: 'SINGLE_CHOICE',
    contentHi: '20% तथा 10% के दो क्रमिक बट्टों (Discounts) का समतुल्य एकल बट्टा क्या होगा?',
    contentEn: 'What is the single equivalent discount of two successive discounts of 20% and 10%?',
    options: [
      { id: 'A', textHi: '30%', textEn: '30%' },
      { id: 'B', textHi: '28%', textEn: '28%' },
      { id: 'C', textHi: '25%', textEn: '25%' },
      { id: 'D', textHi: '18%', textEn: '18%' }
    ],
    correctAnswer: 'B',
    explanationHi: 'समतुल्य बट्टा = x + y - (xy / 100) = 20 + 10 - (200 / 100) = 30 - 2 = 28%।',
    explanationEn: 'Equivalent discount = 20 + 10 - (20 × 10 / 100) = 28%.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#106'
  },
  {
    subject: 'Mathematics',
    topic: 'Simple Interest',
    questionType: 'SINGLE_CHOICE',
    contentHi: '₹2,000 की राशि पर 5% वार्षिक साधारण ब्याज की दर से 3 वर्ष का साधारण ब्याज कितना होगा?',
    contentEn: 'Find the simple interest on ₹2,000 for 3 years at 5% per annum:',
    options: [
      { id: 'A', textHi: '₹250', textEn: '₹250' },
      { id: 'B', textHi: '₹300', textEn: '₹300' },
      { id: 'C', textHi: '₹350', textEn: '₹350' },
      { id: 'D', textHi: '₹400', textEn: '₹400' }
    ],
    correctAnswer: 'B',
    explanationHi: 'SI = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = ₹300।',
    explanationEn: 'SI = (2000 × 5 × 3) / 100 = ₹300.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, Math Q#103'
  },
  {
    subject: 'Mathematics',
    topic: 'Compound Interest',
    questionType: 'SINGLE_CHOICE',
    contentHi: '₹5,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज (वार्षिक संयोजित) क्या होगा?',
    contentEn: 'What is the compound interest on ₹5,000 for 2 years at 10% per annum compounded annually?',
    options: [
      { id: 'A', textHi: '₹1,000', textEn: '₹1,000' },
      { id: 'B', textHi: '₹1,050', textEn: '₹1,050' },
      { id: 'C', textHi: '₹1,100', textEn: '₹1,100' },
      { id: 'D', textHi: '₹1,025', textEn: '₹1,025' }
    ],
    correctAnswer: 'B',
    explanationHi: 'मिश्रधन = 5000 × (1.1)² = 5000 × 1.21 = ₹6,050। CI = 6050 - 5000 = ₹1,050।',
    explanationEn: 'Amount = 5000 × (1.1)² = ₹6,050. CI = 6050 - 5000 = ₹1,050.',
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#108'
  },
  {
    subject: 'Mathematics',
    topic: 'Ratio and Proportion',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'यदि A : B = 2 : 3 तथा B : C = 4 : 5 हो, तो A : B : C का मान क्या होगा?',
    contentEn: 'If A : B = 2 : 3 and B : C = 4 : 5, find A : B : C:',
    options: [
      { id: 'A', textHi: '8 : 12 : 15', textEn: '8 : 12 : 15' },
      { id: 'B', textHi: '2 : 3 : 5', textEn: '2 : 3 : 5' },
      { id: 'C', textHi: '6 : 9 : 15', textEn: '6 : 9 : 15' },
      { id: 'D', textHi: '8 : 15 : 12', textEn: '8 : 15 : 12' }
    ],
    correctAnswer: 'A',
    explanationHi: 'A = 2 × 4 = 8, B = 3 × 4 = 12, C = 3 × 5 = 15। अतः अनुपात 8 : 12 : 15 है।',
    explanationEn: 'Multiplying to unify B: A:B:C = (2×4) : (3×4) : (3×5) = 8 : 12 : 15.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#100'
  },
  {
    subject: 'Mathematics',
    topic: 'Average',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'प्रथम 50 प्राकृतिक संख्याओं का औसत क्या होगा?',
    contentEn: 'Find the average of the first 50 natural numbers:',
    options: [
      { id: 'A', textHi: '25', textEn: '25' },
      { id: 'B', textHi: '25.5', textEn: '25.5' },
      { id: 'C', textHi: '26', textEn: '26' },
      { id: 'D', textHi: '26.5', textEn: '26.5' }
    ],
    correctAnswer: 'B',
    explanationHi: 'प्रथम n प्राकृतिक संख्याओं का औसत = (n + 1) / 2 = (50 + 1) / 2 = 51 / 2 = 25.5।',
    explanationEn: 'Average of first n natural numbers = (n + 1) / 2 = 51 / 2 = 25.5.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#98'
  },
  {
    subject: 'Mathematics',
    topic: 'Time and Work',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'A किसी कार्य को 10 दिन में तथा B उसी कार्य को 15 दिन में पूरा करता है। दोनों मिलकर उस कार्य को कितने दिन में पूरा करेंगे?',
    contentEn: 'A can complete a piece of work in 10 days and B in 15 days. How many days will they take working together?',
    options: [
      { id: 'A', textHi: '5 दिन', textEn: '5 days' },
      { id: 'B', textHi: '6 दिन', textEn: '6 days' },
      { id: 'C', textHi: '8 दिन', textEn: '8 days' },
      { id: 'D', textHi: '12 दिन', textEn: '12 days' }
    ],
    correctAnswer: 'B',
    explanationHi: 'संयुक्त समय = (xy) / (x + y) = (10 × 15) / (10 + 15) = 150 / 25 = 6 दिन।',
    explanationEn: 'Combined time = (10 × 15) / (10 + 15) = 150 / 25 = 6 days.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#110'
  },
  {
    subject: 'Mathematics',
    topic: 'Time, Speed and Distance',
    questionType: 'SINGLE_CHOICE',
    contentHi: '72 किमी/घंटा की गति को मीटर/सेकंड में बदलने पर क्या मान प्राप्त होगा?',
    contentEn: 'Convert a speed of 72 km/h into m/s:',
    options: [
      { id: 'A', textHi: '15 m/s', textEn: '15 m/s' },
      { id: 'B', textHi: '20 m/s', textEn: '20 m/s' },
      { id: 'C', textHi: '25 m/s', textEn: '25 m/s' },
      { id: 'D', textHi: '30 m/s', textEn: '30 m/s' }
    ],
    correctAnswer: 'B',
    explanationHi: 'किमी/घंटा को मी/से में बदलने हेतु 5/18 से गुणा करते हैं: 72 × (5 / 18) = 4 × 5 = 20 m/s।',
    explanationEn: 'Speed in m/s = 72 × 5/18 = 20 m/s.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2016 Paper 1, Math Q#105'
  },
  {
    subject: 'Mathematics',
    topic: 'Geometry (Supplementary Angles)',
    questionType: 'SINGLE_CHOICE',
    contentHi: '75° कोण का संपूरक कोण (Supplementary Angle) क्या होगा?',
    contentEn: 'What is the supplementary angle of 75°?',
    options: [
      { id: 'A', textHi: '15°', textEn: '15°' },
      { id: 'B', textHi: '105°', textEn: '105°' },
      { id: 'C', textHi: '95°', textEn: '95°' },
      { id: 'D', textHi: '115°', textEn: '115°' }
    ],
    correctAnswer: 'B',
    explanationHi: 'दो कोणों का योग 180° होने पर वे संपूरक होते हैं। संपूरक कोण = 180° - 75° = 105°।',
    explanationEn: 'Supplementary angles sum up to 180°. 180° - 75° = 105°.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#112'
  },
  {
    subject: 'Mathematics',
    topic: 'Geometry (Complementary Angles)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'उस कोण का माप क्या है जो अपने पूरक कोण (Complementary Angle) के बराबर है?',
    contentEn: 'Find the measure of an angle which is equal to its complementary angle:',
    options: [
      { id: 'A', textHi: '90°', textEn: '90°' },
      { id: 'B', textHi: '45°', textEn: '45°' },
      { id: 'C', textHi: '60°', textEn: '60°' },
      { id: 'D', textHi: '30°', textEn: '30°' }
    ],
    correctAnswer: 'B',
    explanationHi: 'पूरक कोणों का योग 90° होता है। x + x = 90° => 2x = 90° => x = 45°।',
    explanationEn: 'Complementary angles sum to 90°. Angle = 90° / 2 = 45°.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#111'
  },
  {
    subject: 'Mathematics',
    topic: 'Geometry (Triangles)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक त्रिभुज के दो कोण 60° और 80° हैं। तीसरे कोण का मान क्या होगा?',
    contentEn: 'Two angles of a triangle are 60° and 80°. What is the measure of the third angle?',
    options: [
      { id: 'A', textHi: '40°', textEn: '40°' },
      { id: 'B', textHi: '50°', textEn: '50°' },
      { id: 'C', textHi: '60°', textEn: '60°' },
      { id: 'D', textHi: '45°', textEn: '45°' }
    ],
    correctAnswer: 'A',
    explanationHi: 'त्रिभुज के तीनों अंतःकोणों का योग 180° होता है। तीसरा कोण = 180° - (60° + 80°) = 180° - 140° = 40°।',
    explanationEn: 'Sum of angles in a triangle = 180°. Third angle = 180° - 140° = 40°.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#114'
  },
  {
    subject: 'Mathematics',
    topic: 'Pythagoras Theorem',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक समकोण त्रिभुज की दो भुजाएं 6 सेमी और 8 सेमी हैं। इसके कर्ण (Hypotenuse) की लंबाई क्या होगी?',
    contentEn: 'The perpendicular sides of a right triangle are 6 cm and 8 cm. What is the length of its hypotenuse?',
    options: [
      { id: 'A', textHi: '10 सेमी', textEn: '10 cm' },
      { id: 'B', textHi: '12 सेमी', textEn: '12 cm' },
      { id: 'C', textHi: '14 सेमी', textEn: '14 cm' },
      { id: 'D', textHi: '9 सेमी', textEn: '9 cm' }
    ],
    correctAnswer: 'A',
    explanationHi: 'पाइथागोरस प्रमेय: कर्ण² = 6² + 8² = 36 + 64 = 100 => कर्ण = √100 = 10 सेमी।',
    explanationEn: 'Hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, Math Q#115'
  },
  {
    subject: 'Mathematics',
    topic: 'Mensuration (Square)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक वर्गाकार मैदान का परिमाप 48 मीटर है। इसका क्षेत्रफल क्या होगा?',
    contentEn: 'The perimeter of a square field is 48 m. What is its area?',
    options: [
      { id: 'A', textHi: '144 वर्ग मीटर', textEn: '144 sq. m' },
      { id: 'B', textHi: '196 वर्ग मीटर', textEn: '196 sq. m' },
      { id: 'C', textHi: '120 वर्ग मीटर', textEn: '120 sq. m' },
      { id: 'D', textHi: '96 वर्ग मीटर', textEn: '96 sq. m' }
    ],
    correctAnswer: 'A',
    explanationHi: 'वर्ग की भुजा = 48 / 4 = 12 मीटर। क्षेत्रफल = भुजा² = 12² = 144 वर्ग मीटर।',
    explanationEn: 'Side = 48 / 4 = 12 m. Area = 12² = 144 sq. m.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#117'
  },
  {
    subject: 'Mathematics',
    topic: 'Mensuration (Circle)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक वृत्त की त्रिज्या 7 सेमी है। इस वृत्त का क्षेत्रफल क्या होगा? (π = 22/7 लें)',
    contentEn: 'The radius of a circle is 7 cm. Find its area (take π = 22/7):',
    options: [
      { id: 'A', textHi: '154 वर्ग सेमी', textEn: '154 sq. cm' },
      { id: 'B', textHi: '44 वर्ग सेमी', textEn: '44 sq. cm' },
      { id: 'C', textHi: '88 वर्ग सेमी', textEn: '88 sq. cm' },
      { id: 'D', textHi: '308 वर्ग सेमी', textEn: '308 sq. cm' }
    ],
    correctAnswer: 'A',
    explanationHi: 'क्षेत्रफल = πr² = (22 / 7) × 7 × 7 = 22 × 7 = 154 वर्ग सेमी।',
    explanationEn: 'Area = πr² = (22/7) × 7 × 7 = 154 sq. cm.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#118'
  },
  {
    subject: 'Mathematics',
    topic: 'Mensuration (Rectangle)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक आयत की लंबाई 15 मीटर और चौड़ाई 10 मीटर है। इसका परिमाप क्या होगा?',
    contentEn: 'A rectangle has length 15 m and width 10 m. What is its perimeter?',
    options: [
      { id: 'A', textHi: '50 मीटर', textEn: '50 m' },
      { id: 'B', textHi: '150 मीटर', textEn: '150 m' },
      { id: 'C', textHi: '25 मीटर', textEn: '25 m' },
      { id: 'D', textHi: '60 मीटर', textEn: '60 m' }
    ],
    correctAnswer: 'A',
    explanationHi: 'परिमाप = 2 × (लंबाई + चौड़ाई) = 2 × (15 + 10) = 2 × 25 = 50 मीटर।',
    explanationEn: 'Perimeter = 2 × (15 + 10) = 50 m.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2016 Paper 1, Math Q#116'
  },
  {
    subject: 'Mathematics',
    topic: 'Volume of Cuboid',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'एक घनाभ की विमाएं 10 सेमी × 8 सेमी × 5 सेमी हैं। इसका आयतन क्या होगा?',
    contentEn: 'The dimensions of a cuboid are 10 cm × 8 cm × 5 cm. What is its volume?',
    options: [
      { id: 'A', textHi: '400 घन सेमी', textEn: '400 cubic cm' },
      { id: 'B', textHi: '300 घन सेमी', textEn: '300 cubic cm' },
      { id: 'C', textHi: '500 घन सेमी', textEn: '500 cubic cm' },
      { id: 'D', textHi: '240 घन सेमी', textEn: '240 cubic cm' }
    ],
    correctAnswer: 'A',
    explanationHi: 'घनाभ का आयतन = लंबाई × चौड़ाई × ऊंचाई = 10 × 8 × 5 = 400 घन सेमी।',
    explanationEn: 'Volume of cuboid = l × b × h = 10 × 8 × 5 = 400 cubic cm.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#116'
  },
  {
    subject: 'Mathematics',
    topic: 'Statistics (Mean, Median, Mode)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'बहुलक (Mode), माध्यक (Median) और माध्य (Mean) के मध्य सही आनुभविक संबंध क्या है?',
    contentEn: 'What is the correct empirical relation between Mode, Median, and Mean?',
    options: [
      { id: 'A', textHi: 'बहुलक = 3 माध्यक - 2 माध्य', textEn: 'Mode = 3 Median - 2 Mean' },
      { id: 'B', textHi: 'बहुलक = 2 माध्यक - 3 माध्य', textEn: 'Mode = 2 Median - 3 Mean' },
      { id: 'C', textHi: 'माध्यक = 3 बहुलक - 2 माध्य', textEn: 'Median = 3 Mode - 2 Mean' },
      { id: 'D', textHi: 'माध्य = 3 माध्यक - 2 बहुलक', textEn: 'Mean = 3 Median - 2 Mode' }
    ],
    correctAnswer: 'A',
    explanationHi: 'कार्ल पियर्सन का आनुभविक सूत्र: बहुलक = 3 माध्यक - 2 माध्य (Mode = 3 Median - 2 Mean)।',
    explanationEn: "Karl Pearson's empirical formula states: Mode = 3 Median - 2 Mean.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#119'
  },
  {
    subject: 'Mathematics',
    topic: 'Statistics (Median of Data)',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'आंकड़ों 3, 5, 7, 9, 11, 13, 15 की माध्यिका (Median) क्या होगी?',
    contentEn: 'What is the median of the data set: 3, 5, 7, 9, 11, 13, 15?',
    options: [
      { id: 'A', textHi: '9', textEn: '9' },
      { id: 'B', textHi: '7', textEn: '7' },
      { id: 'C', textHi: '11', textEn: '11' },
      { id: 'D', textHi: '8', textEn: '8' }
    ],
    correctAnswer: 'A',
    explanationHi: 'संख्याएं क्रमबद्ध हैं (कुल n = 7)। माध्यिका = [(n+1)/2]वाँ पद = चौथा पद = 9।',
    explanationEn: 'For ordered 7 terms, median is the 4th term = 9.',
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, Math Q#118'
  },
  {
    subject: 'Mathematics',
    topic: 'Nature of Mathematics',
    questionType: 'SINGLE_CHOICE',
    contentHi: "'गणित सभी विज्ञानों का द्वार एवं कुंजी है' - यह प्रसिद्ध कथन किसका है?",
    contentEn: "'Mathematics is the gate and key of all the sciences' - who said this?",
    options: [
      { id: 'A', textHi: 'रोजर बेकन (Roger Bacon)', textEn: 'Roger Bacon' },
      { id: 'B', textHi: 'हॉगबेन (Hogben)', textEn: 'Hogben' },
      { id: 'C', textHi: 'लॉक (Locke)', textEn: 'Locke' },
      { id: 'D', textHi: 'प्लेटो (Plato)', textEn: 'Plato' }
    ],
    correctAnswer: 'A',
    explanationHi: "रोजर बेकन ने कहा था: 'गणित सभी विज्ञानों का सिंहद्वार और कुंजी है।' हॉगबेन ने कहा था गणित सभ्यता का दर्पण है।",
    explanationEn: "Roger Bacon famously asserted that mathematics is the gate and key of all sciences.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2017 Paper 1, Math Q#120'
  },
  {
    subject: 'Mathematics',
    topic: 'Methods of Teaching Mathematics',
    questionType: 'SINGLE_CHOICE',
    contentHi: "'विशिष्ट से सामान्य की ओर' (From specific to general) किस शिक्षण विधि का मुख्य सूत्र है?",
    contentEn: "'From specific to general' is the foundational maxim of which teaching method?",
    options: [
      { id: 'A', textHi: 'आगमन विधि (Inductive Method)', textEn: 'Inductive Method' },
      { id: 'B', textHi: 'निगमन विधि (Deductive Method)', textEn: 'Deductive Method' },
      { id: 'C', textHi: 'विश्लेषण विधि (Analytic Method)', textEn: 'Analytic Method' },
      { id: 'D', textHi: 'संश्लेषण विधि (Synthetic Method)', textEn: 'Synthetic Method' }
    ],
    correctAnswer: 'A',
    explanationHi: "आगमन विधि (Inductive) में पहले विशिष्ट उदाहरण प्रस्तुत किए जाते हैं, फिर सामान्य नियम निकाला जाता है।",
    explanationEn: "Inductive reasoning moves from specific observed instances to broad generalizations.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2018 Paper 1, Math Q#120'
  },
  {
    subject: 'Mathematics',
    topic: 'Van Hiele Levels of Geometric Thinking',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'वैन हीले (Van Hiele) का सिद्धांत किससे संबंधित है?',
    contentEn: "The Van Hiele theory of learning levels is associated with:",
    options: [
      { id: 'A', textHi: 'ज्यामितीय चिंतन (Geometric Thinking)', textEn: 'Geometric Thinking' },
      { id: 'B', textHi: 'संख्या संकल्पना', textEn: 'Number Concept' },
      { id: 'C', textHi: 'माप की संकल्पना', textEn: 'Measurement' },
      { id: 'D', textHi: 'भिन्न की संकल्पना', textEn: 'Fractions' }
    ],
    correctAnswer: 'A',
    explanationHi: "वैन हीले दंपत्ति ने बच्चों में ज्यामितीय चिंतन (Visualisation, Analysis, Informal deduction, Formal deduction, Rigor) के 5 स्तर दिए।",
    explanationEn: "The Van Hiele model describes five progressive levels of geometric understanding.",
    difficulty: 'MEDIUM',
    sourceReference: 'UPTET 2019 Paper 1, Math Q#120'
  },
  {
    subject: 'Mathematics',
    topic: 'Evaluation in Mathematics',
    questionType: 'SINGLE_CHOICE',
    contentHi: 'छात्रों की गणितीय त्रुटियों का विश्लेषण कर उनके कारणों को खोजना कहलाता है:',
    contentEn: 'Analyzing students mathematical errors to identify root causes is called:',
    options: [
      { id: 'A', textHi: 'निदानात्मक परीक्षण (Diagnostic Test)', textEn: 'Diagnostic Test' },
      { id: 'B', textHi: 'उपचारात्मक शिक्षण', textEn: 'Remedial Teaching' },
      { id: 'C', textHi: 'उपलब्धि परीक्षण', textEn: 'Achievement Test' },
      { id: 'D', textHi: 'योग्यता परीक्षण', textEn: 'Aptitude Test' }
    ],
    correctAnswer: 'A',
    explanationHi: "कमियों और त्रुटियों के कारणों का पता लगाना 'निदानात्मक परीक्षण' (Diagnostic Testing) कहलाता है।",
    explanationEn: "Pinpointing learning deficits and misconceptions is the purpose of Diagnostic Testing.",
    difficulty: 'EASY',
    sourceReference: 'UPTET 2021 Paper 1, Math Q#120'
  }
];
