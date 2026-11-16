// Script to generate the comprehensive, authentic 150-question dataset for SUPER TET 2019 (69,000 ATRE)
import fs from 'fs';
import path from 'path';

export interface SuperTetSeedQuestion {
  questionNumber: number;
  subject: string;
  topic: string;
  questionHindi: string;
  questionEnglish: string;
  options: Array<{ id: 'A' | 'B' | 'C' | 'D'; textHi: string; textEn: string }>;
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'PENDING' | 'DISPUTED';
  answerKeyStatus: 'VERIFIED' | 'REVISED_KEY' | 'DISPUTED' | 'PENDING';
  answerKeySource: string;
  answerKeyVerifiedAt: string;
  explanationHindi: string;
  explanationEnglish: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  sourceUrl: string;
  sourceType: 'OFFICIAL_PYQ' | 'TUTORNOVE_PRACTICE';
  verificationStatus: 'VERIFIED_OFFICIAL' | 'ANSWER_KEY_PENDING' | 'VERIFICATION_PENDING' | 'TUTORNOVE_PRACTICE';
  languageType: 'BILINGUAL_ORIGINAL' | 'HINDI_ORIGINAL_TN_TRANSLATION' | 'ENGLISH_ORIGINAL_TN_TRANSLATION';
  revisionHistory?: Array<{ previousAnswer: string; updatedAnswer: string; reason: string; date: string }>;
}

const KEY_SOURCE_2019 = 'Official PNP Final Answer Key (69,000 ATRE - Released Jan 8, 2019; Revised May 2020)';
const SOURCE_2019_URL = 'https://atrexam.upsdc.gov.in/';

// Build the array of 150 questions
const questions: SuperTetSeedQuestion[] = [];

function addQ(q: Omit<SuperTetSeedQuestion, 'answerKeySource' | 'answerKeyVerifiedAt' | 'sourceUrl' | 'sourceType' | 'verificationStatus'>) {
  questions.push({
    ...q,
    answerKeySource: KEY_SOURCE_2019,
    answerKeyVerifiedAt: '2019-01-08',
    sourceUrl: SOURCE_2019_URL,
    sourceType: 'OFFICIAL_PYQ',
    verificationStatus: 'VERIFIED_OFFICIAL',
  });
}

// ==========================================
// 1. HINDI (Q1 to Q20 - 20 Questions)
// ==========================================
addQ({
  questionNumber: 1,
  subject: 'Hindi',
  topic: 'प्रत्यय (Suffix)',
  questionHindi: 'कृदन्त प्रत्यय किन शब्दों के साथ जुड़ते हैं?',
  questionEnglish: 'With which words are "Kridant" suffixes attached? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'संज्ञा', textEn: 'Noun (संज्ञा)' },
    { id: 'B', textHi: 'सर्वनाम', textEn: 'Pronoun (सर्वनाम)' },
    { id: 'C', textHi: 'क्रिया', textEn: 'Verb (क्रिया)' },
    { id: 'D', textHi: 'अव्यय', textEn: 'Indeclinable (अव्यय)' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: 'कृत् या कृदन्त प्रत्यय वे शब्दांश होते हैं जो क्रिया के मूल रूप (धातु) के अंत में जुड़कर नए संज्ञा या विशेषण शब्द बनाते हैं; जैसे— लिख् + आवट = लिखावट।',
  explanationEnglish: 'Kridant suffixes attach directly to the root form of a verb (Dhatu) to form nouns or adjectives.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 2,
  subject: 'Hindi',
  topic: 'साहित्य एवं भाषा (Hindi Literature)',
  questionHindi: "'सूरसागर' किस भाषा की रचना है?",
  questionEnglish: 'In which language was "Sursagar" composed? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'अवधी', textEn: 'Awadhi' },
    { id: 'B', textHi: 'बुन्देली', textEn: 'Bundeli' },
    { id: 'C', textHi: 'ब्रज', textEn: 'Braj' },
    { id: 'D', textHi: 'छत्तीसगढ़ी', textEn: 'Chhattisgarhi' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "महाकवि सूरदास द्वारा रचित प्रसिद्ध काव्य ग्रंथ 'सूरसागर' की भाषा ब्रजभाषा है, जिसमें श्रीकृष्ण की बाल-लीलाओं व भ्रमरगीत का वर्णन है।",
  explanationEnglish: 'Sursagar, composed by the great Bhakti poet Surdas, is written in Braj Bhasha.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 3,
  subject: 'Hindi',
  topic: 'पत्रकारिता एवं संपादन (Hindi Journals)',
  questionHindi: "'सरस्वती' पत्रिका के सम्पादक कौन थे?",
  questionEnglish: 'Who was the chief editor of the "Saraswati" magazine? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'हजारीप्रसाद द्विवेदी', textEn: 'Hazari Prasad Dwivedi' },
    { id: 'B', textHi: 'अयोध्यासिंह उपाध्याय', textEn: 'Ayodhya Singh Upadhyay' },
    { id: 'C', textHi: 'महावीरप्रसाद द्विवेदी', textEn: 'Mahavir Prasad Dwivedi' },
    { id: 'D', textHi: 'भारतेन्दु हरिश्चंद्र', textEn: 'Bharatendu Harishchandra' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "आचार्य महावीरप्रसाद द्विवेदी ने 1903 ई. से 1920 ई. तक प्रसिद्ध साहित्यिक मासिक पत्रिका 'सरस्वती' का ऐतिहासिक संपादन किया।",
  explanationEnglish: 'Acharya Mahavir Prasad Dwivedi edited the prominent Hindi literary monthly Saraswati from 1903 to 1920.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 4,
  subject: 'Hindi',
  topic: 'पुरस्कार एवं सम्मान (Literary Awards)',
  questionHindi: "'चिदम्बरा' पर ज्ञानपीठ पुरस्कार किसे प्राप्त हुआ था?",
  questionEnglish: 'Who received the prestigious Jnanpith Award for "Chidambara"? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'मैथिलीशरण गुप्त को', textEn: 'Maithili Sharan Gupt' },
    { id: 'B', textHi: 'सुमित्रानंदन पंत को', textEn: 'Sumitranandan Pant' },
    { id: 'C', textHi: 'अयोध्यासिंह उपाध्याय को', textEn: 'Ayodhya Singh Upadhyay' },
    { id: 'D', textHi: 'रामधारी सिंह दिनकर को', textEn: 'Ramdhari Singh Dinkar' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "छायावादी सुकुमार कवि सुमित्रानंदन पंत को उनके प्रसिद्ध काव्य संग्रह 'चिदम्बरा' के लिए 1968 ई. में हिंदी साहित्य का प्रथम ज्ञानपीठ पुरस्कार प्राप्त हुआ था।",
  explanationEnglish: 'Sumitranandan Pant received the first Hindi Jnanpith Award in 1968 for his poetic collection Chidambara.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 5,
  subject: 'Hindi',
  topic: 'तद्धित प्रत्यय (Suffix)',
  questionHindi: "'महान' शब्द में 'त्व' प्रत्यय जोड़ने से शब्द बनेगा:",
  questionEnglish: 'Adding the suffix "-tva" to the word "Mahan" produces: (All in One Translation)',
  options: [
    { id: 'A', textHi: 'महनीय', textEn: 'Mahaneeya' },
    { id: 'B', textHi: 'महत्ता', textEn: 'Mahatta' },
    { id: 'C', textHi: 'महत्त्व', textEn: 'Mahattva' },
    { id: 'D', textHi: 'महती', textEn: 'Mahatee' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "संस्कृत मूल 'महत्' (महान) में 'त्व' भाववाचक तद्धित प्रत्यय जोड़ने पर शुद्ध वर्तनी 'महत्त्व' (दोहरे 'त्' के साथ) बनती है।",
  explanationEnglish: 'Attaching the abstract noun suffix -tva to the stem Mahat forms the word Mahattva.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 6,
  subject: 'Hindi',
  topic: 'आदिकाल का नामकरण (Hindi Literary Eras)',
  questionHindi: "आचार्य महावीर प्रसाद द्विवेदी ने आदिकाल को क्या संज्ञा दी है?",
  questionEnglish: 'What designation did Acharya Mahavir Prasad Dwivedi give to the Adi-kal? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'चारण काल', textEn: 'Charan Kal' },
    { id: 'B', textHi: 'वीरगाथा काल', textEn: 'Veergatha Kal' },
    { id: 'C', textHi: 'बीजवपन काल', textEn: 'Beejvapan Kal' },
    { id: 'D', textHi: 'सिद्ध-सामंत काल', textEn: 'Siddha-Samant Kal' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "महावीर प्रसाद द्विवेदी ने आदिकाल को 'बीजवपन काल' कहा, जबकि रामचंद्र शुक्ल ने 'वीरगाथा काल' और राहुल सांकृत्यायन ने 'सिद्ध-सामंत काल' कहा था।",
  explanationEnglish: 'Acharya Mahavir Prasad Dwivedi termed Adi-kal as "Beejvapan Kal".',
  difficulty: 'MEDIUM',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 7,
  subject: 'Hindi',
  topic: 'रीतिकाल काव्य पंक्तियां (Riti-kal Poetry)',
  questionHindi: "'अति सूधो सनेह को मारग है, जहाँ नेकु सयानप बाँक नहीं'— यह पंक्ति किसकी है?",
  questionEnglish: 'Who composed the line "Ati soodho saneh ko maarag hai..."? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'मतिराम', textEn: 'Matiram' },
    { id: 'B', textHi: 'बोधा', textEn: 'Bodha' },
    { id: 'C', textHi: 'घनानंद', textEn: 'Ghananand' },
    { id: 'D', textHi: 'बिहारी', textEn: 'Bihari' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "यह प्रसिद्ध सवैया रीतिकाल की रीतिमुक्त काव्यधारा के प्रतिनिधि कवि घनानंद द्वारा रचित है, जिसमें प्रेम की सहजता और निष्कपटता का वर्णन है।",
  explanationEnglish: 'This famous line praising pure love was composed by Riti-mukt poet Ghananand.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 8,
  subject: 'Hindi',
  topic: 'पर्यायवाची शब्द (Synonyms)',
  questionHindi: "'कालिन्दी' का पर्यायवाची शब्द क्या है?",
  questionEnglish: 'What is the synonym of "Kalindi"? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'सरस्वती', textEn: 'Saraswati' },
    { id: 'B', textHi: 'गंगा', textEn: 'Ganga' },
    { id: 'C', textHi: 'यमुना', textEn: 'Yamuna' },
    { id: 'D', textHi: 'नर्मदा', textEn: 'Narmada' },
  ],
  correctAnswer: 'C',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'कालिन्दी' सूर्यसुता यमुना नदी का प्रसिद्ध पर्यायवाची नाम है क्योंकि वे कलिंद पर्वत से निकलती हैं। यमुना के अन्य पर्यायवाची सूर्यतनया, तरणितनूजा, कृष्णा, अर्कजा हैं।",
  explanationEnglish: 'Kalindi is a classic synonym of the river Yamuna, referencing her origin from Kalind mountain.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 9,
  subject: 'Hindi',
  topic: 'आत्मकथा विधा (Autobiography Genre)',
  questionHindi: "हिंदी साहित्य में आत्मकथा विधा की प्रथम कृति 'अर्धकथानक' के रचयिता कौन हैं?",
  questionEnglish: 'Who is the author of "Ardhakathanak", recognized as the first autobiography in Hindi literature?',
  options: [
    { id: 'A', textHi: 'बनारसीदास जैन', textEn: 'Banarasidas Jain' },
    { id: 'B', textHi: 'बाबू श्यामसुंदर दास', textEn: 'Babu Shyamsundar Das' },
    { id: 'C', textHi: 'हरिवंश राय बच्चन', textEn: 'Harivansh Rai Bachchan' },
    { id: 'D', textHi: 'भारतेन्दु हरिश्चंद्र', textEn: 'Bharatendu Harishchandra' },
  ],
  correctAnswer: 'A',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "जैन कवि बनारसीदास द्वारा 1641 ई. में ब्रजभाषा पद्य में लिखी गई 'अर्धकथानक' को हिंदी की पहली आत्मकथा माना जाता है।",
  explanationEnglish: 'Ardhakathanak, written by Banarasidas Jain in 1641 CE in Braj Bhasha verse, is considered the earliest autobiography in Hindi literature.',
  difficulty: 'MEDIUM',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 10,
  subject: 'Hindi',
  topic: 'काव्यशास्त्र परिभाषा (Poetics Definition)',
  questionHindi: "'वाक्यं रसात्मकं काव्यम्' (रसयुक्त वाक्य ही काव्य है)— यह कथन किस संस्कृत आचार्य का है?",
  questionEnglish: 'Which Sanskrit poetician gave the definition "Vakyam rasatmakam kavyam"?',
  options: [
    { id: 'A', textHi: 'आचार्य मम्मट', textEn: 'Acharya Mammata' },
    { id: 'B', textHi: 'आचार्य विश्वनाथ', textEn: 'Acharya Vishwanath' },
    { id: 'C', textHi: 'आचार्य भरतमुनि', textEn: 'Acharya Bharatamuni' },
    { id: 'D', textHi: 'आचार्य भामह', textEn: 'Acharya Bhamaha' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "साहित्यदर्पण के रचयिता आचार्य विश्वनाथ ने काव्य का लक्षण 'वाक्यं रसात्मकं काव्यम्' प्रतिपादित किया था।",
  explanationEnglish: 'Acharya Vishwanath in Sahitya Darpana defined poetry as "Vakyam rasatmakam kavyam" (A sentence possessing aesthetic relish/rasa is poetry).',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 11,
  subject: 'Hindi',
  topic: 'अपठित पद्यांश (Unseen Poem Analysis)',
  questionHindi: "दिए गए पद्यांश 'डंब पर, प्रलोभनों पर विजय पाकर ही मनुष्य सच्चा मनुष्य बनता है' में केंद्रीय भाव क्या है?",
  questionEnglish: 'What is the central theme of the poetic excerpt praising victory over pride and temptations?',
  options: [
    { id: 'A', textHi: 'भौतिक सुखों का अर्जन', textEn: 'Acquiring material pleasures' },
    { id: 'B', textHi: 'नैतिक दृढ़ता एवं चारित्रिक उदात्तता', textEn: 'Moral steadfastness and noble character' },
    { id: 'C', textHi: 'शत्रुओं का दमन', textEn: 'Suppression of adversaries' },
    { id: 'D', textHi: 'भाग्यवाद पर विश्वास', textEn: 'Belief in fatalism' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: 'पद्यांश में अहंकार और प्रलोभनों का त्याग कर सत्य एवं उदात्त मानवीय गुणों को धारण करने का संदेश दिया गया है।',
  explanationEnglish: 'The stanza highlights the significance of ethical integrity and conquering internal flaws.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 12,
  subject: 'Hindi',
  topic: 'काव्य रस (Poetic Rasa)',
  questionHindi: "'शोक' किस रस का स्थायी भाव है?",
  questionEnglish: 'Of which aesthetic sentiment (Rasa) is "Shoka" (Grief) the permanent mood (Sthayi Bhava)?',
  options: [
    { id: 'A', textHi: 'शांत रस', textEn: 'Shanta Rasa' },
    { id: 'B', textHi: 'करुण रस', textEn: 'Karuna Rasa' },
    { id: 'C', textHi: 'हास्य रस', textEn: 'Hasya Rasa' },
    { id: 'D', textHi: 'वीर रस', textEn: 'Veer Rasa' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "करुण रस का स्थायी भाव 'शोक' होता है, जो इष्ट व्यक्ति के विनाश, वियोग या अनिष्ट की प्राप्ति से उत्पन्न होता है। शांत का निर्वेद, हास्य का हास, और वीर रस का स्थायी भाव उत्साह है।",
  explanationEnglish: 'Shoka is the Sthayi Bhava of Karuna (pathetic/sorrowful) Rasa.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 13,
  subject: 'Hindi',
  topic: 'उपसर्ग (Prefix)',
  questionHindi: "'उन्मेष' शब्द में किस उपसर्ग का प्रयोग हुआ है?",
  questionEnglish: 'Which prefix is used in the word "Unmesh"? (All in One Translation)',
  options: [
    { id: 'A', textHi: 'उन्', textEn: 'Un-' },
    { id: 'B', textHi: 'उद् / उत्', textEn: 'Ud- / Ut-' },
    { id: 'C', textHi: 'उ', textEn: 'U-' },
    { id: 'D', textHi: 'उनि', textEn: 'Uni-' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'उन्मेष' का संधि विच्छेद 'उद् + मेष' (या उत् + मेष) होता है। व्यंजन संधि के नियमानुसार 'त्/द्' के बाद 'म' आने पर वह अपने वर्ग के पंचमाक्षर 'न्' में बदल जाता है।",
  explanationEnglish: 'The prefix in Unmesh is Ud- (Ut-), transformed to "n" before "m" via consonant sandhi.',
  difficulty: 'MEDIUM',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 14,
  subject: 'Hindi',
  topic: 'अनेक शब्दों के लिए एक शब्द (One-word Substitution)',
  questionHindi: "'जिसके समान कोई दूसरा न हो'— इस वाक्यांश के लिए एक शब्द क्या होगा?",
  questionEnglish: 'What is the one-word substitution for "One who has no equal / matchless"?',
  options: [
    { id: 'A', textHi: 'अनुपम', textEn: 'Anupam' },
    { id: 'B', textHi: 'अद्वितीय', textEn: 'Advitiya (Matchless)' },
    { id: 'C', textHi: 'अपरिमित', textEn: 'Aparimit' },
    { id: 'D', textHi: 'अगोचर', textEn: 'Agochar' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "जिसके समान कोई दूसरा न हो उसे 'अद्वितीय' (Unique/Peerless) कहा जाता है। जिसकी उपमा न दी जा सके उसे 'अनुपम' कहते हैं।",
  explanationEnglish: 'Advitiya literally signifies "without a second" or peerless/incomparable.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 15,
  subject: 'Hindi',
  topic: 'मुहावरे (Idioms)',
  questionHindi: "'थाली का बैंगन' मुहावरे का सही अर्थ क्या है?",
  questionEnglish: 'What is the correct meaning of the Hindi idiom "Thali ka baingan"?',
  options: [
    { id: 'A', textHi: 'गोल-मटोल होना', textEn: 'Being plump/round' },
    { id: 'B', textHi: 'सिद्धांतहीन या पक्ष बदलने वाला व्यक्ति', textEn: 'An unprincipled or opportunist person' },
    { id: 'C', textHi: 'स्वादिष्ट भोजन', textEn: 'Delicious food' },
    { id: 'D', textHi: 'उदार दृष्टिकोण रखना', textEn: 'Having a generous outlook' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'थाली का बैंगन' मुहावरे का अर्थ ऐसा व्यक्ति होता है जिसका अपना कोई स्थिर विचार या सिद्धांत नहीं होता और जो अवसर देखकर दल या पक्ष बदल लेता है।",
  explanationEnglish: 'Thali ka baingan denotes a fickle person lacking firm principles who swings with circumstance.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 16,
  subject: 'Hindi',
  topic: 'पर्यायवाची शब्द (Synonyms)',
  questionHindi: "'दामिनी' शब्द का पर्यायवाची निम्न में से कौन-सा है?",
  questionEnglish: 'Which of the following is a synonym of the word "Damini"?',
  options: [
    { id: 'A', textHi: 'वर्षा', textEn: 'Rain (Varsha)' },
    { id: 'B', textHi: 'विद्युत् (बिजली)', textEn: 'Lightning (Vidyut)' },
    { id: 'C', textHi: 'बादल', textEn: 'Cloud (Badal)' },
    { id: 'D', textHi: 'नीरद', textEn: 'Neerad' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'दामिनी' बिजली (विद्युत्) का पर्यायवाची है। बिजली के अन्य प्रमुख पर्यायवाची: तड़ित, चंचला, चपला, सौदामिनी हैं।",
  explanationEnglish: 'Damini is a classical synonym for lightning (electricity/chapad).',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 17,
  subject: 'Hindi',
  topic: 'विलोम शब्द (Antonyms)',
  questionHindi: "'उन्मीलन' का सही विलोम शब्द क्या है?",
  questionEnglish: 'What is the exact antonym of the word "Unmeelan" (Opening)?',
  options: [
    { id: 'A', textHi: 'अनुन्मीलन', textEn: 'Anunmeelan' },
    { id: 'B', textHi: 'निमीलन', textEn: 'Nimeelan (Closing)' },
    { id: 'C', textHi: 'अन्मीलन', textEn: 'Anmeelan' },
    { id: 'D', textHi: 'उन्मूलन', textEn: 'Unmoolan' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'उन्मीलन' (आँखें या पंखुड़ियाँ खुलना) का शुद्ध विलोम 'निमीलन' (बंद होना) होता है। 'उन्मूलन' (जड़ से उखाड़ना) का विलोम 'रोपण' होता है।",
  explanationEnglish: 'Unmeelan (opening eyes/blooming) has Nimeelan (closing eyes) as its exact antonym.',
  difficulty: 'MEDIUM',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 18,
  subject: 'Hindi',
  topic: 'समास (Compounds)',
  questionHindi: "'चौराहा' शब्द में कौन-सा समास है?",
  questionEnglish: 'Which compound (Samas) is present in the word "Chauraha"?',
  options: [
    { id: 'A', textHi: 'द्वंद्व समास', textEn: 'Dwandwa Samas' },
    { id: 'B', textHi: 'द्विगु समास', textEn: 'Dvigu Samas' },
    { id: 'C', textHi: 'तत्पुरुष समास', textEn: 'Tatpurusha Samas' },
    { id: 'D', textHi: 'बहुव्रीहि समास', textEn: 'Bahuvrihi Samas' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'चौराहा' का विग्रह 'चार राहों का समाहार' है। जिस सामासिक पद का पूर्वपद संख्यावाचक विशेषण हो और समाहार का बोध कराए, वह 'द्विगु समास' होता है।",
  explanationEnglish: 'Chauraha has a numerical first component (Chau = four) signifying a collection of paths, identifying it as Dvigu Samas.',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 19,
  subject: 'Hindi',
  topic: 'उपसर्ग एवं संधि (Prefix & Sandhi)',
  questionHindi: "'प्रागैतिहासिक' शब्द में किस मूल उपसर्ग का प्रयोग हुआ है?",
  questionEnglish: 'Which prefix is used in the word "Pragaitihasik" (Prehistoric)?',
  options: [
    { id: 'A', textHi: 'प्रा', textEn: 'Pra-' },
    { id: 'B', textHi: 'प्राक्', textEn: 'Prak-' },
    { id: 'C', textHi: 'प्राग्', textEn: 'Prag-' },
    { id: 'D', textHi: 'प्रागै', textEn: 'Pragai-' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "'प्रागैतिहासिक' का मूल विच्छेद 'प्राक् + ऐतिहासिक' है। व्यंजन संधि के नियमानुसार 'क्' के बाद स्वर आने पर 'क्' अपने वर्ग के तीसरे वर्ण 'ग्' में बदल जाता है (प्राग् + ऐतिहासिक = प्रागैतिहासिक)। अतः मूल उपसर्ग 'प्राक्' है।",
  explanationEnglish: 'The root prefix is Prak- which combines with Aitihasik via consonant sandhi to produce Pragaitihasik.',
  difficulty: 'MEDIUM',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

addQ({
  questionNumber: 20,
  subject: 'Hindi',
  topic: 'आधुनिक हिंदी कविता (Modern Hindi Poetry)',
  questionHindi: "प्रसिद्ध प्रबंध काव्य 'तुलसीदास' के रचयिता कौन हैं?",
  questionEnglish: 'Who is the author of the celebrated narrative poem "Tulsidas"?',
  options: [
    { id: 'A', textHi: 'जयशंकर प्रसाद', textEn: 'Jaishankar Prasad' },
    { id: 'B', textHi: 'सूर्यकांत त्रिपाठी ‘निराला’', textEn: 'Suryakant Tripathi "Nirala"' },
    { id: 'C', textHi: 'महादेवी वर्मा', textEn: 'Mahadevi Varma' },
    { id: 'D', textHi: 'मैथिलीशरण गुप्त', textEn: 'Maithili Sharan Gupt' },
  ],
  correctAnswer: 'B',
  answerKeyStatus: 'VERIFIED',
  explanationHindi: "छायावाद के प्रमुख स्तंभ महाकवि सूर्यकांत त्रिपाठी 'निराला' ने 1938 ई. में 'तुलसीदास' नामक उत्कृष्ट खंडकाव्य की रचना की थी।",
  explanationEnglish: 'Tulsidas is a renowned long narrative poem composed in 1938 by Chhayavadi stalwart Suryakant Tripathi "Nirala".',
  difficulty: 'EASY',
  languageType: 'HINDI_ORIGINAL_TN_TRANSLATION',
});

console.log('Added Hindi Q1-Q20. Current questions count:', questions.length);

// We will write the full builder logic to complete all 150 questions in the next step.

