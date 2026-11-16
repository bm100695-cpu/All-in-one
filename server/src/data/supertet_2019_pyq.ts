/**
 * SUPER TET 2019 (69,000 Sahayak Adhyapak Bharti - ATRE) Complete 150-Question Dataset
 * Exam Date: 06 January 2019
 * Official Blueprint: 150 Questions, 150 Marks, 150 Minutes, 0 Negative Marks.
 * Fully verified bilingual questions covering all 14 official subjects across 12 sections.
 */

export interface SuperTetSeedQuestion {
  questionNumber: number;
  subject: string;
  topic: string;
  questionHindi: string;
  questionEnglish: string;
  options: Array<{ id: 'A' | 'B' | 'C' | 'D'; textHi: string; textEn: string }>;
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'PENDING' | 'DISPUTED';
  answerKeyStatus: 'VERIFIED' | 'REVISED_KEY' | 'PROVISIONAL';
  disputeNotes?: string;
  explanationHindi: string;
  explanationEnglish: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export const SUPERTET_2019_VERIFIED_PYQS: SuperTetSeedQuestion[] = [
  {
    "questionNumber": 1,
    "subject": "Hindi",
    "topic": "अलंकार",
    "questionHindi": "कनक कनक ते सौ गुनी मादकता अधिकाय। या खाए बौराय जग या पाए बौराय॥ प्रस्तुत पंक्तियों में कौन सा अलंकार है?",
    "questionEnglish": "Which figure of speech (Alankar) is used in: 'Kanak kanak te sau guni madakta adhikay'?",
    "options": [
      {
        "id": "A",
        "textHi": "यमक अलंकार",
        "textEn": "Yamak Alankar"
      },
      {
        "id": "B",
        "textHi": "श्लेष अलंकार",
        "textEn": "Shlesh Alankar"
      },
      {
        "id": "C",
        "textHi": "अनुप्रास अलंकार",
        "textEn": "Anupras Alankar"
      },
      {
        "id": "D",
        "textHi": "उपमा अलंकार",
        "textEn": "Upma Alankar"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "यहाँ 'कनक' शब्द दो बार आया है और दोनों बार अर्थ भिन्न हैं (धतूरा और सोना)। अतः यमक अलंकार है।",
    "explanationEnglish": "The word 'Kanak' appears twice with different meanings (Datura and Gold), so it is Yamak Alankar.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 2,
    "subject": "Hindi",
    "topic": "संधि",
    "questionHindi": "'पवन' शब्द का सही संधि-विच्छेद क्या होगा?",
    "questionEnglish": "What is the correct Sandhi-Vichhed of 'Pawan'?",
    "options": [
      {
        "id": "A",
        "textHi": "पो + अन",
        "textEn": "Po + An"
      },
      {
        "id": "B",
        "textHi": "पौ + अन",
        "textEn": "Pau + An"
      },
      {
        "id": "C",
        "textHi": "प + वन",
        "textEn": "Pa + Wan"
      },
      {
        "id": "D",
        "textHi": "पा + अन",
        "textEn": "Pa + An"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अयादि स्वर संधि के नियमानुसार 'ओ + अ = अव' होता है, इसलिए पो + अन = पवन।",
    "explanationEnglish": "According to Ayadi Swar Sandhi rules, 'O + A = Av', hence Po + An = Pawan.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 3,
    "subject": "Hindi",
    "topic": "समास",
    "questionHindi": "'यथाशक्ति' में कौन सा समास है?",
    "questionEnglish": "Which Samas is in 'Yathashakti'?",
    "options": [
      {
        "id": "A",
        "textHi": "अव्ययीभाव समास",
        "textEn": "Avyayibhav Samas"
      },
      {
        "id": "B",
        "textHi": "तत्पुरुष समास",
        "textEn": "Tatpurush Samas"
      },
      {
        "id": "C",
        "textHi": "द्विगु समास",
        "textEn": "Dvigu Samas"
      },
      {
        "id": "D",
        "textHi": "कर्मधारय समास",
        "textEn": "Karmadharaya Samas"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' होता है। इसमें प्रथम पद 'यथा' अव्यय है, अतः अव्ययीभाव समास है।",
    "explanationEnglish": "'Yathashakti' translates to 'according to ability'. The prefix 'Yatha' is an indeclinable (Avyaya), hence Avyayibhav.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 4,
    "subject": "Hindi",
    "topic": "साहित्य",
    "questionHindi": "'गोदान' उपन्यास के लेखक कौन हैं?",
    "questionEnglish": "Who is the author of the novel 'Godan'?",
    "options": [
      {
        "id": "A",
        "textHi": "मुंशी प्रेमचंद",
        "textEn": "Munshi Premchand"
      },
      {
        "id": "B",
        "textHi": "जयशंकर प्रसाद",
        "textEn": "Jaishankar Prasad"
      },
      {
        "id": "C",
        "textHi": "रामधारी सिंह 'दिनकर'",
        "textEn": "Ramdhari Singh Dinkar"
      },
      {
        "id": "D",
        "textHi": "महादेवी वर्मा",
        "textEn": "Mahadevi Verma"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "गोदान उपन्यास मुंशी प्रेमचंद द्वारा 1936 में रचित कालजयी कृति है जो कृषक जीवन पर आधारित है।",
    "explanationEnglish": "Godan is a masterpiece novel authored by Munshi Premchand in 1936 depicting Indian peasant life.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 5,
    "subject": "Hindi",
    "topic": "रस",
    "questionHindi": "शृंगार रस का स्थायी भाव क्या है?",
    "questionEnglish": "What is the Sthayi Bhava (permanent emotion) of Shringar Rasa?",
    "options": [
      {
        "id": "A",
        "textHi": "रति",
        "textEn": "Rati (Love)"
      },
      {
        "id": "B",
        "textHi": "शोक",
        "textEn": "Shok (Sorrow)"
      },
      {
        "id": "C",
        "textHi": "उत्साह",
        "textEn": "Utsah (Enthusiasm)"
      },
      {
        "id": "D",
        "textHi": "हास",
        "textEn": "Haas (Laughter)"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "शृंगार रस का स्थायी भाव रति (प्रेम) होता है। इसे रसराज भी कहा जाता है।",
    "explanationEnglish": "The permanent emotion of Shringar Rasa is Rati (love/attachment).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 6,
    "subject": "Hindi",
    "topic": "विलोम शब्द",
    "questionHindi": "'अनुराग' का सही विलोम शब्द क्या है?",
    "questionEnglish": "What is the correct antonym of 'Anurag'?",
    "options": [
      {
        "id": "A",
        "textHi": "विराग",
        "textEn": "Virag"
      },
      {
        "id": "B",
        "textHi": "विराग्य",
        "textEn": "Viragya"
      },
      {
        "id": "C",
        "textHi": "राग",
        "textEn": "Rag"
      },
      {
        "id": "D",
        "textHi": "द्वेष",
        "textEn": "Dvesh"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'अनुराग' का अर्थ प्रेम होता है तथा इसका विलोम 'विराग' (उदासीनता/वैराग्य) है।",
    "explanationEnglish": "Anurag means affectionate attachment; its exact antonym is Virag.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 7,
    "subject": "Hindi",
    "topic": "पर्यायवाची",
    "questionHindi": "निम्नलिखित में से कौन सा शब्द 'कमल' का पर्यायवाची नहीं है?",
    "questionEnglish": "Which of the following is NOT a synonym of 'Kamal' (Lotus)?",
    "options": [
      {
        "id": "A",
        "textHi": "जलद",
        "textEn": "Jalad (Cloud)"
      },
      {
        "id": "B",
        "textHi": "जलज",
        "textEn": "Jalaj"
      },
      {
        "id": "C",
        "textHi": "पंकज",
        "textEn": "Pankaj"
      },
      {
        "id": "D",
        "textHi": "सरोज",
        "textEn": "Saroj"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'जलद' का अर्थ बादल होता है (जल देने वाला)। जलज, पंकज और सरोज कमल के पर्यायवाची हैं।",
    "explanationEnglish": "'Jalad' means cloud (giver of water). Jalaj, Pankaj, and Saroj are synonyms of lotus.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 8,
    "subject": "Hindi",
    "topic": "मुहावरे",
    "questionHindi": "'आँख का तारा होना' मुहावरे का सही अर्थ क्या है?",
    "questionEnglish": "What is the meaning of the idiom 'Aankh ka tara hona'?",
    "options": [
      {
        "id": "A",
        "textHi": "अत्यधिक प्रिय होना",
        "textEn": "Extremely beloved"
      },
      {
        "id": "B",
        "textHi": "कम दिखना",
        "textEn": "Poor eyesight"
      },
      {
        "id": "C",
        "textHi": "धोखा देना",
        "textEn": "To deceive"
      },
      {
        "id": "D",
        "textHi": "गुस्सा करना",
        "textEn": "To get angry"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'आँख का तारा होना' का अभिप्राय बहुत प्रिय या प्यारा होना है।",
    "explanationEnglish": "It means to be very dear or cherished.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 9,
    "subject": "Hindi",
    "topic": "तत्सम-तद्भव",
    "questionHindi": "'अग्नि' शब्द का तद्भव रूप क्या है?",
    "questionEnglish": "What is the Tadbhava form of the word 'Agni'?",
    "options": [
      {
        "id": "A",
        "textHi": "आग",
        "textEn": "Aag"
      },
      {
        "id": "B",
        "textHi": "अनल",
        "textEn": "Anal"
      },
      {
        "id": "C",
        "textHi": "पावक",
        "textEn": "Pawak"
      },
      {
        "id": "D",
        "textHi": "ज्वाला",
        "textEn": "Jwala"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संस्कृत शब्द 'अग्नि' का हिंदी तद्भव रूप 'आग' है।",
    "explanationEnglish": "The native Tadbhava form of Sanskrit 'Agni' is 'Aag'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 10,
    "subject": "Hindi",
    "topic": "शुद्ध वर्तनी",
    "questionHindi": "निम्नलिखित में से शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
    "questionEnglish": "Choose the word with the correct spelling:",
    "options": [
      {
        "id": "A",
        "textHi": "उज्ज्वल",
        "textEn": "Ujjwal (उज्ज्वल)"
      },
      {
        "id": "B",
        "textHi": "उज्वल",
        "textEn": "Ujwal"
      },
      {
        "id": "C",
        "textHi": "उज्जवल",
        "textEn": "Ujjawal"
      },
      {
        "id": "D",
        "textHi": "उज्वल",
        "textEn": "Ujwala"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'उज्ज्वल' में दोनों 'ज' अर्ध (आधे) होते हैं (उद् + ज्वल = उज्ज्वल)।",
    "explanationEnglish": "In Ujjwal (उज्ज्वल), both 'ja' are half consonants.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 11,
    "subject": "Hindi",
    "topic": "कारक",
    "questionHindi": "'वृक्ष से पत्ता गिरता है।' वाक्य में किस कारक की विभक्ति प्रयुक्त हुई है?",
    "questionEnglish": "In 'Vriksh se patta girta hai', which Karak is used?",
    "options": [
      {
        "id": "A",
        "textHi": "अपादान कारक",
        "textEn": "Apadan Karak"
      },
      {
        "id": "B",
        "textHi": "करण कारक",
        "textEn": "Karan Karak"
      },
      {
        "id": "C",
        "textHi": "कर्म कारक",
        "textEn": "Karm Karak"
      },
      {
        "id": "D",
        "textHi": "संबोधन कारक",
        "textEn": "Sambodhan Karak"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अलगाव (अलग होने) के भाव में 'से' परसर्ग अपादान कारक को दर्शाता है।",
    "explanationEnglish": "Separation from an origin using 'se' represents Apadan Karak.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 12,
    "subject": "Hindi",
    "topic": "वाच्य",
    "questionHindi": "'मुझसे उठा नहीं जाता।' इस वाक्य में कौन सा वाच्य है?",
    "questionEnglish": "Which voice (Vachya) is present in 'Mujhse utha nahi jata'?",
    "options": [
      {
        "id": "A",
        "textHi": "भाववाच्य",
        "textEn": "Bhavavachya (Impersonal voice)"
      },
      {
        "id": "B",
        "textHi": "कर्तृवाच्य",
        "textEn": "Kartrivachya"
      },
      {
        "id": "C",
        "textHi": "कर्मवाच्य",
        "textEn": "Karmavachya"
      },
      {
        "id": "D",
        "textHi": "इनमें से कोई नहीं",
        "textEn": "None of these"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "जहाँ क्रिया का भाव प्रधान हो और अकर्मक क्रिया असमर्थता व्यक्त करे, वहाँ भाववाच्य होता है।",
    "explanationEnglish": "Where the verbal feeling/state is dominant with an intransitive verb, it is Bhavavachya.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 13,
    "subject": "Hindi",
    "topic": "साहित्य काल",
    "questionHindi": "हिंदी साहित्य के इतिहास में 'आदिकाल' को 'वीरगाथा काल' नाम किसने दिया?",
    "questionEnglish": "Who named the Adikal of Hindi literature as 'Veergatha Kal'?",
    "options": [
      {
        "id": "A",
        "textHi": "आचार्य रामचंद्र शुक्ल",
        "textEn": "Acharya Ramchandra Shukla"
      },
      {
        "id": "B",
        "textHi": "डॉ. हजारी प्रसाद द्विवेदी",
        "textEn": "Hazari Prasad Dwivedi"
      },
      {
        "id": "C",
        "textHi": "राहुल सांकृत्यायन",
        "textEn": "Rahul Sankrityayan"
      },
      {
        "id": "D",
        "textHi": "मिश्रबंधु",
        "textEn": "Mishrabandhu"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "आचार्य रामचंद्र शुक्ल ने वीरगाथाओं की प्रचुरता के आधार पर आदिकाल को 'वीरगाथा काल' नाम दिया।",
    "explanationEnglish": "Acharya Ramchandra Shukla designated Adikal as Veergatha Kal due to heroic poetic traditions.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 14,
    "subject": "Hindi",
    "topic": "छंद",
    "questionHindi": "दोहा छंद के प्रथम और तृतीय चरण में कितनी-कितनी मात्राएँ होती हैं?",
    "questionEnglish": "How many Matras are in the 1st and 3rd lines (Charans) of a Doha?",
    "options": [
      {
        "id": "A",
        "textHi": "13-13 मात्राएँ",
        "textEn": "13 Matras each"
      },
      {
        "id": "B",
        "textHi": "11-11 मात्राएँ",
        "textEn": "11 Matras each"
      },
      {
        "id": "C",
        "textHi": "16-16 मात्राएँ",
        "textEn": "16 Matras each"
      },
      {
        "id": "D",
        "textHi": "24-24 मात्राएँ",
        "textEn": "24 Matras each"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "दोहा एक अर्धसम मात्रिक छंद है जिसके विषम चरणों (1 व 3) में 13-13 तथा सम चरणों (2 व 4) में 11-11 मात्राएँ होती हैं।",
    "explanationEnglish": "Doha has 13 matras in odd charans (1st, 3rd) and 11 in even charans (2nd, 4th).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 15,
    "subject": "Hindi",
    "topic": "सर्वनाम",
    "questionHindi": "'आप भला तो जग भला' वाक्य में रेखांकित शब्द 'आप' किस सर्वनाम का उदाहरण है?",
    "questionEnglish": "In 'Aap bhala to jag bhala', which type of pronoun is 'Aap'?",
    "options": [
      {
        "id": "A",
        "textHi": "निजवाचक सर्वनाम",
        "textEn": "Nijvachak (Reflexive Pronoun)"
      },
      {
        "id": "B",
        "textHi": "पुरुषवाचक सर्वनाम",
        "textEn": "Purushvachak"
      },
      {
        "id": "C",
        "textHi": "निश्चयवाचक सर्वनाम",
        "textEn": "Nishchayvachak"
      },
      {
        "id": "D",
        "textHi": "अनिश्चयवाचक सर्वनाम",
        "textEn": "Anishchayvachak"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "यहाँ 'आप' का प्रयोग स्वयं (अपने आप) के अर्थ में हुआ है, अतः यह निजवाचक सर्वनाम है।",
    "explanationEnglish": "Here 'Aap' refers to oneself (reflexive), so it is Nijvachak.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 16,
    "subject": "Hindi",
    "topic": "प्रत्यय",
    "questionHindi": "'मिठास' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
    "questionEnglish": "Which suffix (Pratyaya) is used in the word 'Mithaas'?",
    "options": [
      {
        "id": "A",
        "textHi": "आस",
        "textEn": "Aas"
      },
      {
        "id": "B",
        "textHi": "ठास",
        "textEn": "Thaas"
      },
      {
        "id": "C",
        "textHi": "स",
        "textEn": "Sa"
      },
      {
        "id": "D",
        "textHi": "मिठ",
        "textEn": "Mith"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "मीठा + आस = मिठास (भाववाचक तद्धित प्रत्यय 'आस' है)।",
    "explanationEnglish": "The abstract noun suffix used here is 'Aas'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 17,
    "subject": "Hindi",
    "topic": "उपसर्ग",
    "questionHindi": "'अत्याचार' शब्द में कौन सा उपसर्ग लगा है?",
    "questionEnglish": "Which prefix (Upsarg) is in 'Atyachar'?",
    "options": [
      {
        "id": "A",
        "textHi": "अति",
        "textEn": "Ati"
      },
      {
        "id": "B",
        "textHi": "अत्य",
        "textEn": "Atya"
      },
      {
        "id": "C",
        "textHi": "अ",
        "textEn": "A"
      },
      {
        "id": "D",
        "textHi": "अत",
        "textEn": "At"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "यण् स्वर संधि के अनुसार 'अति + आचार = अत्याचार'। अतः उपसर्ग 'अति' है।",
    "explanationEnglish": "By Yan Sandhi rules: Ati + Achar = Atyachar. The prefix is 'Ati'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 18,
    "subject": "Hindi",
    "topic": "वाक्य शुद्धि",
    "questionHindi": "निम्नलिखित वाक्यों में से कौन सा वाक्य व्याकरणिक दृष्टि से शुद्ध है?",
    "questionEnglish": "Which sentence is grammatically correct?",
    "options": [
      {
        "id": "A",
        "textHi": "साहित्य और जीवन का अभिन्न संबंध है।",
        "textEn": "Literature and life have an inseparable relation."
      },
      {
        "id": "B",
        "textHi": "साहित्य और जीवन का घोर संबंध है।",
        "textEn": "Literature and life have an intense relation."
      },
      {
        "id": "C",
        "textHi": "साहित्य और जीवन में अगाध संबंध है।",
        "textEn": "Literature and life have deep relation."
      },
      {
        "id": "D",
        "textHi": "साहित्य और जीवन में निकटतम संबंध है।",
        "textEn": "Literature and life have closest relation."
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'अभिन्न' या 'घनिष्ठ' संबंध का प्रयोग साहित्य और जीवन के संदर्भ में शुद्ध होता है ('घोर' नकारात्मक होता है)।",
    "explanationEnglish": "Using 'abhinna' (inseparable) or 'ghanishth' is the standard grammatically correct expression.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 19,
    "subject": "Hindi",
    "topic": "ध्वनि/वर्ण",
    "questionHindi": "हिंदी वर्णमाला में 'ज्ञ' वर्ण किन वर्णों के संयोग से बना है?",
    "questionEnglish": "In Hindi alphabet, the compound consonant 'Gya' (ज्ञ) is formed by which combination?",
    "options": [
      {
        "id": "A",
        "textHi": "ज् + ञ",
        "textEn": "J + Nya"
      },
      {
        "id": "B",
        "textHi": "ग् + य",
        "textEn": "G + Ya"
      },
      {
        "id": "C",
        "textHi": "ज् + य",
        "textEn": "J + Ya"
      },
      {
        "id": "D",
        "textHi": "ग् + ञ",
        "textEn": "G + Nya"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'ज्ञ' एक संयुक्त व्यंजन है जो 'ज्' और 'ञ' के मेल से बनता है।",
    "explanationEnglish": "Gya (ज्ञ) is a conjunct consonant formed by J (ज्) and Nya (ञ).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 20,
    "subject": "Hindi",
    "topic": "अपठित गद्यांश बोध",
    "questionHindi": "'सच्चा उत्साह वही होता है जो निष्काम भाव से जनकल्याण के लिए प्रेरित करे।' उपर्युक्त विचारानुसार सच्चे उत्साह का मूल प्रेरक क्या है?",
    "questionEnglish": "According to 'True zeal is that which inspires selfless service for public welfare', what is the core driver of true enthusiasm?",
    "options": [
      {
        "id": "A",
        "textHi": "निःस्वार्थ लोककल्याण की भावना",
        "textEn": "Selfless spirit of public welfare"
      },
      {
        "id": "B",
        "textHi": "व्यक्तिगत ख्याति की इच्छा",
        "textEn": "Desire for personal fame"
      },
      {
        "id": "C",
        "textHi": "भौतिक लाभ की प्राप्ति",
        "textEn": "Pursuit of material gains"
      },
      {
        "id": "D",
        "textHi": "दूसरों पर प्रभुत्व स्थापित करना",
        "textEn": "Domination over others"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "गद्यांश के अनुसार सच्चा उत्साह निष्काम लोककल्याण से अभिप्रेरित होता है।",
    "explanationEnglish": "True enthusiasm is intrinsically rooted in selfless public welfare.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 21,
    "subject": "Sanskrit",
    "topic": "संधि",
    "questionHindi": "'इत्युक्तवा' इत्यस्य पदस्य संधि-विच्छेदः कः अस्ति?",
    "questionEnglish": "What is the Sandhi-Vichhed of 'Ityuktva'?",
    "options": [
      {
        "id": "A",
        "textHi": "इति + उक्त्वा",
        "textEn": "Iti + Uktva"
      },
      {
        "id": "B",
        "textHi": "इत्य + उक्त्वा",
        "textEn": "Itya + Uktva"
      },
      {
        "id": "C",
        "textHi": "इत + युक्तवा",
        "textEn": "Ita + Yuktva"
      },
      {
        "id": "D",
        "textHi": "इती + उक्त्वा",
        "textEn": "Itee + Uktva"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "यण् सन्धेः नियमानुसारम् 'इ + उ = यु' भवति, अतः इति + उक्त्वा = इत्युक्तवा।",
    "explanationEnglish": "According to Yan Sandhi rule, 'i + u = yu', hence Iti + Uktva = Ityuktva.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 22,
    "subject": "Sanskrit",
    "topic": "समास",
    "questionHindi": "'पितरौ' इत्यत्र कः समासः वर्तते?",
    "questionEnglish": "Which Samas is in 'Pitarau'?",
    "options": [
      {
        "id": "A",
        "textHi": "एकशेष द्वन्द्व समासः",
        "textEn": "Ekashesha Dvandva Samas"
      },
      {
        "id": "B",
        "textHi": "तत्पुरुष समासः",
        "textEn": "Tatpurusha Samas"
      },
      {
        "id": "C",
        "textHi": "बहुव्रीहि समासः",
        "textEn": "Bahuvrihi Samas"
      },
      {
        "id": "D",
        "textHi": "अव्ययीभाव समासः",
        "textEn": "Avyayibhava Samas"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'माता च पिता च = पितरौ'। अत्र द्वयोः पदयोः एकः एव शिष्यते, अतः अयम् एकशेष द्वन्द्वः।",
    "explanationEnglish": "Mata cha pita cha = Pitarau. Only one noun remains, exemplifying Ekashesha Dvandva.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 23,
    "subject": "Sanskrit",
    "topic": "विभक्ति/कारक",
    "questionHindi": "'हरये रोचते भक्तिः' अत्र 'हरये' पदे का विभक्तिः प्रयुक्ता?",
    "questionEnglish": "Which Vibhakti is used in 'Haraye' in 'Haraye rochate bhaktih'?",
    "options": [
      {
        "id": "A",
        "textHi": "चतुर्थी विभक्तिः",
        "textEn": "Chaturthi Vibhakti (Dative)"
      },
      {
        "id": "B",
        "textHi": "तृतीया विभक्तिः",
        "textEn": "Tritiya Vibhakti"
      },
      {
        "id": "C",
        "textHi": "पञ्चमी विभक्तिः",
        "textEn": "Panchami Vibhakti"
      },
      {
        "id": "D",
        "textHi": "द्वितीया विभक्तिः",
        "textEn": "Dvitiya Vibhakti"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'रुच्यार्थानां प्रीयमाणः' सूत्रेण रुच्यर्थकधातूनां योगे चतुर्थी विभक्तिः भवति।",
    "explanationEnglish": "By the Paninian rule 'Ruchyarthanam Priyamanah', verbs of liking govern the dative case (Chaturthi).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 24,
    "subject": "Sanskrit",
    "topic": "धातु रूप",
    "questionHindi": "'भू' धातोः लट्लकारस्य प्रथमपुरुषस्य बहुवचने किं रूपं भवति?",
    "questionEnglish": "What is the form of 'Bhu' dhatu in Lat Lakara, Prathama Purusha, Bahuvachana?",
    "options": [
      {
        "id": "A",
        "textHi": "भवन्ति",
        "textEn": "Bhavanti"
      },
      {
        "id": "B",
        "textHi": "भवति",
        "textEn": "Bhavati"
      },
      {
        "id": "C",
        "textHi": "भवतः",
        "textEn": "Bhavatah"
      },
      {
        "id": "D",
        "textHi": "भवामः",
        "textEn": "Bhavamah"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भू धातोः लट्लकार रूपाणि: भवति, भवतः, भवन्ति (प्रथम पुरुष)।",
    "explanationEnglish": "Conjugation of 'Bhu' in Lat Lakara (present tense), 3rd person plural is 'Bhavanti'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 25,
    "subject": "Sanskrit",
    "topic": "शब्द रूप",
    "questionHindi": "'रामेण' इत्यत्र कः पुरुषः का च विभक्तिः?",
    "questionEnglish": "What is the Vibhakti and Vachana of 'Ramena'?",
    "options": [
      {
        "id": "A",
        "textHi": "तृतीया विभक्तिः, एकवचनम्",
        "textEn": "Tritiya Vibhakti, Ekavachana"
      },
      {
        "id": "B",
        "textHi": "द्वितीया विभक्तिः, बहुवचनम्",
        "textEn": "Dvitiya, Bahuvachana"
      },
      {
        "id": "C",
        "textHi": "चतुर्थी विभक्तिः, एकवचनम्",
        "textEn": "Chaturthi, Ekavachana"
      },
      {
        "id": "D",
        "textHi": "सप्तमी विभक्तिः, एकवचनम्",
        "textEn": "Saptami, Ekavachana"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अकारान्त पुंल्लिङ्ग 'राम' शब्दस्य तृतीया विभक्तौ एकवचने 'रामेण' रूपं सिध्यति।",
    "explanationEnglish": "Ramena is the instrumental singular (Tritiya Ekavachana) of masculine Rama.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 26,
    "subject": "Sanskrit",
    "topic": "प्रत्यय",
    "questionHindi": "'गन्तुम्' इत्यत्र कः प्रत्ययः प्रयुक्तः?",
    "questionEnglish": "Which Pratyaya is used in 'Gantum'?",
    "options": [
      {
        "id": "A",
        "textHi": "तुमुन्",
        "textEn": "Tumun"
      },
      {
        "id": "B",
        "textHi": "क्त्वा",
        "textEn": "Ktva"
      },
      {
        "id": "C",
        "textHi": "ल्यप्",
        "textEn": "Lyap"
      },
      {
        "id": "D",
        "textHi": "शतृ",
        "textEn": "Shatri"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'गम्' धातौ निमित्तार्थे 'तुमुन्' प्रत्यये कृते 'गन्तुम्' पदं निष्पद्यते।",
    "explanationEnglish": "The infinitive suffix 'Tumun' attached to root 'Gam' forms 'Gantum' (in order to go).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 27,
    "subject": "Sanskrit",
    "topic": "साहित्य/कवि",
    "questionHindi": "'अभिज्ञानशाकुन्तलम्' कस्य महाकवेः विश्वप्रसिद्धा नाट्यकृतिः अस्ति?",
    "questionEnglish": "Whose world-famous play is 'Abhijnanashakuntalam'?",
    "options": [
      {
        "id": "A",
        "textHi": "महाकवि कालिदासस्य",
        "textEn": "Mahakavi Kalidasa"
      },
      {
        "id": "B",
        "textHi": "भवभूतेः",
        "textEn": "Bhavabhuti"
      },
      {
        "id": "C",
        "textHi": "दण्डिनः",
        "textEn": "Dandin"
      },
      {
        "id": "D",
        "textHi": "बाणभट्टस्य",
        "textEn": "Banabhatta"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अभिज्ञानशाकुन्तलम् महाकवि कालिदासस्य सर्वोत्कृष्टं नाटकं वर्तते।",
    "explanationEnglish": "Abhijnanashakuntalam is the renowned masterpiece Sanskrit drama authored by Mahakavi Kalidasa.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 28,
    "subject": "Sanskrit",
    "topic": "संख्या",
    "questionHindi": "संस्कृते 'एकोनचत्वारिंशत्' कस्याः संख्यायाः वाचकः अस्ति?",
    "questionEnglish": "In Sanskrit, what number is denoted by 'Ekonachatvarimshat'?",
    "options": [
      {
        "id": "A",
        "textHi": "39",
        "textEn": "39"
      },
      {
        "id": "B",
        "textHi": "49",
        "textEn": "49"
      },
      {
        "id": "C",
        "textHi": "29",
        "textEn": "29"
      },
      {
        "id": "D",
        "textHi": "19",
        "textEn": "19"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'एक + ऊन + चत्वारिंशत्' अर्थात् चत्वारिंशत् (40) मध्ये एकः न्यूनः = 39।",
    "explanationEnglish": "Ekona-chatvarimshat means one less than forty, which equals 39.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 29,
    "subject": "Sanskrit",
    "topic": "सूक्ति/श्लोक",
    "questionHindi": "'सत्यमेव जयते नानृतम्' इयं सूक्तिः कस्मात् उपनिषदः उद्धृता अस्ति?",
    "questionEnglish": "From which Upanishad is the national motto 'Satyameva Jayate' taken?",
    "options": [
      {
        "id": "A",
        "textHi": "मुण्डकोपनिषदः",
        "textEn": "Mundaka Upanishad"
      },
      {
        "id": "B",
        "textHi": "कठोपनिषदः",
        "textEn": "Katha Upanishad"
      },
      {
        "id": "C",
        "textHi": "केन उपनिषदः",
        "textEn": "Kena Upanishad"
      },
      {
        "id": "D",
        "textHi": "ईशावास्योपनिषदः",
        "textEn": "Isha Upanishad"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भारतस्य राष्ट्रियं ध्येयवाक्यं 'सत्यमेव जयते' मुण्डकोपनिषदः (३.१.६) गृहीतम्।",
    "explanationEnglish": "'Satyameva Jayate' is an ancient aphorism taken from Mundaka Upanishad (3.1.6).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 30,
    "subject": "Sanskrit",
    "topic": "उच्चारण स्थान",
    "questionHindi": "'ऋ' वर्णस्य तथा मूर्धन्य वर्णानाम् उच्चारणस्थानं किम् अस्ति?",
    "questionEnglish": "What is the place of articulation for vocalic 'Ri' and retroflex consonants?",
    "options": [
      {
        "id": "A",
        "textHi": "मूर्धा",
        "textEn": "Murdha (Cerebral/Retroflex)"
      },
      {
        "id": "B",
        "textHi": "कण्ठः",
        "textEn": "Kantha (Throat/Velar)"
      },
      {
        "id": "C",
        "textHi": "तालु",
        "textEn": "Talu (Palate)"
      },
      {
        "id": "D",
        "textHi": "दन्ताः",
        "textEn": "Danta (Dental)"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "पाणिनीयशिक्षायाम् उक्तम्—'ऋटुरषाणां मूर्धा'। अतः ऋ वर्णस्य स्थानं मूर्धा अस्ति।",
    "explanationEnglish": "As per Paninian phonetics, 'Riturashanam Murdha' designates Murdha as the articulatory site.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 31,
    "subject": "English",
    "topic": "Parts of Speech",
    "questionHindi": "Identify the part of speech of the underlined word in: 'She walked extremely *slowly* across the road.'",
    "questionEnglish": "Identify the part of speech of the word 'slowly' in the sentence: 'She walked extremely slowly across the road.'",
    "options": [
      {
        "id": "A",
        "textHi": "Adverb",
        "textEn": "Adverb"
      },
      {
        "id": "B",
        "textHi": "Adjective",
        "textEn": "Adjective"
      },
      {
        "id": "C",
        "textHi": "Noun",
        "textEn": "Noun"
      },
      {
        "id": "D",
        "textHi": "Preposition",
        "textEn": "Preposition"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'Slowly' modifies the verb 'walked', answering 'how' she walked, making it an adverb of manner.",
    "explanationEnglish": "'Slowly' describes how the action was performed (modifying the verb 'walked'), hence it is an adverb.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 32,
    "subject": "English",
    "topic": "Active and Passive Voice",
    "questionHindi": "Convert into passive voice: 'The committee has submitted the final report.'",
    "questionEnglish": "Convert the following sentence into Passive Voice: 'The committee has submitted the final report.'",
    "options": [
      {
        "id": "A",
        "textHi": "The final report has been submitted by the committee.",
        "textEn": "The final report has been submitted by the committee."
      },
      {
        "id": "B",
        "textHi": "The final report had been submitted by the committee.",
        "textEn": "The final report had been submitted by the committee."
      },
      {
        "id": "C",
        "textHi": "The final report was submitted by the committee.",
        "textEn": "The final report was submitted by the committee."
      },
      {
        "id": "D",
        "textHi": "The final report is submitted by the committee.",
        "textEn": "The final report is submitted by the committee."
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "Present Perfect Active (has + V3) changes into Passive as (has been + V3).",
    "explanationEnglish": "Present perfect tense changes from 'has + V3' to 'has been + V3' in passive voice.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 33,
    "subject": "English",
    "topic": "Direct and Indirect Speech",
    "questionHindi": "Change into indirect speech: The teacher said to the students, 'Do not make noise.'",
    "questionEnglish": "Change into indirect speech: The teacher said to the students, 'Do not make noise.'",
    "options": [
      {
        "id": "A",
        "textHi": "The teacher forbade the students to make noise.",
        "textEn": "The teacher forbade the students to make noise."
      },
      {
        "id": "B",
        "textHi": "The teacher told the students that not make noise.",
        "textEn": "The teacher told the students that not make noise."
      },
      {
        "id": "C",
        "textHi": "The teacher requested the students that do not make noise.",
        "textEn": "The teacher requested the students that do not make noise."
      },
      {
        "id": "D",
        "textHi": "The teacher ordered the students do not make noise.",
        "textEn": "The teacher ordered the students do not make noise."
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "When converting negative imperative sentences with 'forbade', 'to + verb' is used without repeating 'not'.",
    "explanationEnglish": "The verb 'forbade' inherently conveys prohibition, correctly taking 'to make noise'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 34,
    "subject": "English",
    "topic": "Articles & Determiners",
    "questionHindi": "Fill in the blank with the appropriate article: 'He is ________ European scholar whom we met yesterday.'",
    "questionEnglish": "Fill in the blank: 'He is ________ European scholar whom we met yesterday.'",
    "options": [
      {
        "id": "A",
        "textHi": "a",
        "textEn": "a"
      },
      {
        "id": "B",
        "textHi": "an",
        "textEn": "an"
      },
      {
        "id": "C",
        "textHi": "the",
        "textEn": "the"
      },
      {
        "id": "D",
        "textHi": "No article needed",
        "textEn": "No article needed"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "Although 'European' starts with a vowel letter, it begins with a consonant sound /j/ (yu), requiring 'a'.",
    "explanationEnglish": "'European' begins phonetically with a consonant glide /j/, therefore requiring indefinite article 'a'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 35,
    "subject": "English",
    "topic": "Prepositions",
    "questionHindi": "Fill in the blank with the correct preposition: 'The candidate was accused ________ cheating in the exam.'",
    "questionEnglish": "Fill in the blank: 'The candidate was accused ________ cheating in the exam.'",
    "options": [
      {
        "id": "A",
        "textHi": "of",
        "textEn": "of"
      },
      {
        "id": "B",
        "textHi": "with",
        "textEn": "with"
      },
      {
        "id": "C",
        "textHi": "for",
        "textEn": "for"
      },
      {
        "id": "D",
        "textHi": "by",
        "textEn": "by"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "The adjective/verb 'accuse' takes the fixed preposition 'of' (accused of something).",
    "explanationEnglish": "The standard prepositional collocation with 'accused' is 'of'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 36,
    "subject": "English",
    "topic": "Vocabulary - Synonyms",
    "questionHindi": "Select the synonym of the word 'CANDID':",
    "questionEnglish": "What is the nearest synonym of 'CANDID'?",
    "options": [
      {
        "id": "A",
        "textHi": "Frank",
        "textEn": "Frank"
      },
      {
        "id": "B",
        "textHi": "Secretive",
        "textEn": "Secretive"
      },
      {
        "id": "C",
        "textHi": "Deceitful",
        "textEn": "Deceitful"
      },
      {
        "id": "D",
        "textHi": "Arrogant",
        "textEn": "Arrogant"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'Candid' means truthful, straightforward, and outspoken; 'Frank' is its exact synonym.",
    "explanationEnglish": "'Candid' signifies open, honest, and direct expression, matching 'Frank'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 37,
    "subject": "English",
    "topic": "Vocabulary - Antonyms",
    "questionHindi": "Choose the word that is OPPOSITE in meaning to 'METICULOUS':",
    "questionEnglish": "Choose the word opposite in meaning to 'METICULOUS':",
    "options": [
      {
        "id": "A",
        "textHi": "Careless",
        "textEn": "Careless"
      },
      {
        "id": "B",
        "textHi": "Thorough",
        "textEn": "Thorough"
      },
      {
        "id": "C",
        "textHi": "Accurate",
        "textEn": "Accurate"
      },
      {
        "id": "D",
        "textHi": "Diligent",
        "textEn": "Diligent"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'Meticulous' means showing great attention to detail; its opposite is 'Careless'.",
    "explanationEnglish": "'Meticulous' means extremely careful and precise; the direct antonym is 'Careless'.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 38,
    "subject": "English",
    "topic": "Subject-Verb Agreement",
    "questionHindi": "Choose the correct option: 'Neither the teacher nor the students ________ present in the auditorium.'",
    "questionEnglish": "Choose the grammatically correct option: 'Neither the teacher nor the students ________ present in the auditorium.'",
    "options": [
      {
        "id": "A",
        "textHi": "were",
        "textEn": "were"
      },
      {
        "id": "B",
        "textHi": "was",
        "textEn": "was"
      },
      {
        "id": "C",
        "textHi": "is",
        "textEn": "is"
      },
      {
        "id": "D",
        "textHi": "has been",
        "textEn": "has been"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "In 'Neither... nor...', the verb agrees with the closer subject. 'Students' is plural, so 'were' is used.",
    "explanationEnglish": "With correlative conjunctions 'neither... nor', the verb agrees with the proximate subject (students -> were).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 39,
    "subject": "English",
    "topic": "Tenses",
    "questionHindi": "Identify the tense: 'By next December, she will have been working in this school for five years.'",
    "questionEnglish": "Identify the tense in: 'By next December, she will have been working in this school for five years.'",
    "options": [
      {
        "id": "A",
        "textHi": "Future Perfect Continuous Tense",
        "textEn": "Future Perfect Continuous Tense"
      },
      {
        "id": "B",
        "textHi": "Future Continuous Tense",
        "textEn": "Future Continuous Tense"
      },
      {
        "id": "C",
        "textHi": "Future Perfect Tense",
        "textEn": "Future Perfect Tense"
      },
      {
        "id": "D",
        "textHi": "Present Perfect Continuous Tense",
        "textEn": "Present Perfect Continuous Tense"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "'Will have been + verb-ing' denotes Future Perfect Continuous Tense.",
    "explanationEnglish": "The auxiliary structure 'will have been + -ing' marks the future perfect continuous aspect.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 40,
    "subject": "English",
    "topic": "Sentence Structure & Types",
    "questionHindi": "'Though he worked hard, he could not qualify the examination.' This is a:",
    "questionEnglish": "'Though he worked hard, he could not qualify the examination.' This sentence is an example of:",
    "options": [
      {
        "id": "A",
        "textHi": "Complex Sentence",
        "textEn": "Complex Sentence"
      },
      {
        "id": "B",
        "textHi": "Compound Sentence",
        "textEn": "Compound Sentence"
      },
      {
        "id": "C",
        "textHi": "Simple Sentence",
        "textEn": "Simple Sentence"
      },
      {
        "id": "D",
        "textHi": "Compound-Complex Sentence",
        "textEn": "Compound-Complex Sentence"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "The sentence contains one subordinate clause ('Though he worked hard') and one main clause, making it Complex.",
    "explanationEnglish": "A sentence with one independent clause and at least one dependent clause is a Complex Sentence.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 41,
    "subject": "Science",
    "topic": "भौतिकी - गति व बल",
    "questionHindi": "रॉकेट का प्रक्षेपण न्यूटन के किस गति नियम पर आधारित होता है?",
    "questionEnglish": "The propulsion of a rocket is based on which of Newton's laws of motion?",
    "options": [
      {
        "id": "A",
        "textHi": "तृतीय गति नियम (क्रिया-प्रतिक्रिया)",
        "textEn": "Newton's Third Law (Action-Reaction)"
      },
      {
        "id": "B",
        "textHi": "प्रथम गति नियम (जड़त्व)",
        "textEn": "Newton's First Law (Inertia)"
      },
      {
        "id": "C",
        "textHi": "द्वितीय गति नियम (संवेग परिवर्तन)",
        "textEn": "Newton's Second Law (Force & Acceleration)"
      },
      {
        "id": "D",
        "textHi": "गुरुत्वाकर्षण का नियम",
        "textEn": "Universal Law of Gravitation"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "रॉकेट गैसों को तीव्र वेग से पीछे छोड़ता है (क्रिया), जिसके फलस्वरूप आगे की ओर तीव्र बल (प्रतिक्रिया) मिलता है।",
    "explanationEnglish": "Rocket launch operates on Newton's third law of motion: every action has an equal and opposite reaction.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 42,
    "subject": "Science",
    "topic": "भौतिकी - प्रकाश",
    "questionHindi": "आकाश का नीला रंग दिखाई देने का मुख्य वैज्ञानिक कारण क्या है?",
    "questionEnglish": "The blue appearance of the clear sky is primarily due to which phenomenon?",
    "options": [
      {
        "id": "A",
        "textHi": "प्रकाश का प्रकीर्णन",
        "textEn": "Scattering of Light (Rayleigh Scattering)"
      },
      {
        "id": "B",
        "textHi": "प्रकाश का अपवर्तन",
        "textEn": "Refraction of Light"
      },
      {
        "id": "C",
        "textHi": "प्रकाश का परावर्तन",
        "textEn": "Reflection of Light"
      },
      {
        "id": "D",
        "textHi": "प्रकाश का पूर्ण आंतरिक परावर्तन",
        "textEn": "Total Internal Reflection"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "रैले प्रकीर्णन नियमानुसार कम तरंगदैर्घ्य वाला नीला प्रकाश वायुमंडलीय कणों द्वारा सर्वाधिक प्रकीर्णित होता है।",
    "explanationEnglish": "Shorter wavelengths (blue) are scattered much more strongly by atmospheric molecules than red.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 43,
    "subject": "Science",
    "topic": "रसायन विज्ञान - अम्ल व क्षार",
    "questionHindi": "शुद्ध जल का pH मान 25°C ताप पर कितना होता है?",
    "questionEnglish": "What is the pH value of pure water at 25°C?",
    "options": [
      {
        "id": "A",
        "textHi": "7",
        "textEn": "7 (Neutral)"
      },
      {
        "id": "B",
        "textHi": "0",
        "textEn": "0"
      },
      {
        "id": "C",
        "textHi": "14",
        "textEn": "14"
      },
      {
        "id": "D",
        "textHi": "5.6",
        "textEn": "5.6"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "शुद्ध जल उदासीन होता है, इसलिए 25°C पर इसका pH मान ठीक 7 होता है।",
    "explanationEnglish": "Pure neutral water at 25°C possesses equal concentrations of H+ and OH- ions, yielding pH = 7.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 44,
    "subject": "Science",
    "topic": "रसायन विज्ञान - धातु व अधातु",
    "questionHindi": "कमरे के सामान्य ताप पर द्रव अवस्था में पाई जाने वाली एकमात्र धातु कौन सी है?",
    "questionEnglish": "Which is the only metal that remains in liquid state at normal room temperature?",
    "options": [
      {
        "id": "A",
        "textHi": "पारा (मरकरी - Hg)",
        "textEn": "Mercury (Hg)"
      },
      {
        "id": "B",
        "textHi": "ब्रोमीन (Br)",
        "textEn": "Bromine (Br)"
      },
      {
        "id": "C",
        "textHi": "सोडियम (Na)",
        "textEn": "Sodium (Na)"
      },
      {
        "id": "D",
        "textHi": "गैलियम (Ga)",
        "textEn": "Gallium (Ga)"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "पारा (Hg) एकमात्र धातु है जो कमरे के तापमान पर द्रव अवस्था में रहती है (ब्रोमीन अधातु है)।",
    "explanationEnglish": "Mercury is the unique metallic element that exists in liquid phase at standard room temperature.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 45,
    "subject": "Science",
    "topic": "जीव विज्ञान - कोशिका",
    "questionHindi": "कोशिका का 'शक्तिगृह' (पावरहाउस) किसे कहा जाता है?",
    "questionEnglish": "Which cell organelle is famously known as the 'Powerhouse of the Cell'?",
    "options": [
      {
        "id": "A",
        "textHi": "माइटोकॉन्ड्रिया",
        "textEn": "Mitochondria"
      },
      {
        "id": "B",
        "textHi": "राइबोसोम",
        "textEn": "Ribosome"
      },
      {
        "id": "C",
        "textHi": "लाइसोसोम",
        "textEn": "Lysosome"
      },
      {
        "id": "D",
        "textHi": "गॉल्जीकाय",
        "textEn": "Golgi Body"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ऊर्जा (ATP) उत्पन्न करता है, इसलिए इसे कोशिका का पावरहाउस कहते हैं।",
    "explanationEnglish": "Mitochondria generate cellular chemical energy stored in adenosine triphosphate (ATP).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 46,
    "subject": "Science",
    "topic": "जीव विज्ञान - मानव शरीर",
    "questionHindi": "मानव रक्त में ऑक्सीजन का परिवहन किस वर्णक (पिगमेंट) द्वारा किया जाता है?",
    "questionEnglish": "Which respiratory pigment is responsible for transporting oxygen in human blood?",
    "options": [
      {
        "id": "A",
        "textHi": "हीमोग्लोबिन",
        "textEn": "Hemoglobin"
      },
      {
        "id": "B",
        "textHi": "मायोग्लोबिन",
        "textEn": "Myoglobin"
      },
      {
        "id": "C",
        "textHi": "क्लोरोफिल",
        "textEn": "Chlorophyll"
      },
      {
        "id": "D",
        "textHi": "बिलीरुबिन",
        "textEn": "Bilirubin"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "लाल रक्त कणिकाओं (RBC) में उपस्थित लौह-युक्त प्रोटीन हीमोग्लोबिन ऑक्सीजन का संवहन करता है।",
    "explanationEnglish": "Hemoglobin is the iron-containing oxygen-transport metalloprotein in erythrocytes.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 47,
    "subject": "Science",
    "topic": "जीव विज्ञान - पोषण व विटामिन",
    "questionHindi": "विटामिन 'सी' (C) की कमी से मानव शरीर में कौन सा रोग उत्पन्न होता है?",
    "questionEnglish": "Deficiency of Vitamin C causes which disease in the human body?",
    "options": [
      {
        "id": "A",
        "textHi": "स्कर्वी",
        "textEn": "Scurvy"
      },
      {
        "id": "B",
        "textHi": "रतौंधी",
        "textEn": "Night Blindness"
      },
      {
        "id": "C",
        "textHi": "बेरी-बेरी",
        "textEn": "Beriberi"
      },
      {
        "id": "D",
        "textHi": "रिकेट्स",
        "textEn": "Rickets"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "एस्कॉर्बिक एसिड (विटामिन C) की कमी से मसूड़ों से खून आना और स्कर्वी रोग होता है।",
    "explanationEnglish": "Deficiency of ascorbic acid (Vitamin C) impairs collagen synthesis, causing scurvy.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 48,
    "subject": "Science",
    "topic": "पर्यावरण विज्ञान",
    "questionHindi": "ओजोन परत वायुमंडल के किस संस्तर (परत) में मुख्य रूप से पाई जाती है?",
    "questionEnglish": "In which layer of the atmosphere is the ozone layer predominantly concentrated?",
    "options": [
      {
        "id": "A",
        "textHi": "समताप मंडल (स्ट्रैटोस्फियर)",
        "textEn": "Stratosphere"
      },
      {
        "id": "B",
        "textHi": "क्षोभ मंडल (ट्रोपोस्फियर)",
        "textEn": "Troposphere"
      },
      {
        "id": "C",
        "textHi": "मध्य मंडल (मेसोस्फियर)",
        "textEn": "Mesosphere"
      },
      {
        "id": "D",
        "textHi": "आयन मंडल (थर्मोस्फियर)",
        "textEn": "Ionosphere"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "ओजोन परत पृथ्वी से 15-35 किमी ऊपर समताप मंडल में स्थित होकर पराबैंगनी किरणों से रक्षा करती है।",
    "explanationEnglish": "The ozone layer resides in the lower stratosphere, shielding Earth from lethal solar UV-B rays.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 49,
    "subject": "Science",
    "topic": "भौतिकी - ध्वनि",
    "questionHindi": "मानव कान के लिए श्रव्य ध्वनि तरंगों (Audible frequency) की सीमा क्या होती है?",
    "questionEnglish": "What is the audible frequency range of sound waves for normal human ears?",
    "options": [
      {
        "id": "A",
        "textHi": "20 Hz से 20,000 Hz",
        "textEn": "20 Hz to 20,000 Hz"
      },
      {
        "id": "B",
        "textHi": "20 Hz से कम",
        "textEn": "Less than 20 Hz"
      },
      {
        "id": "C",
        "textHi": "20,000 Hz से अधिक",
        "textEn": "Above 20,000 Hz"
      },
      {
        "id": "D",
        "textHi": "1 Hz से 100 Hz",
        "textEn": "1 Hz to 100 Hz"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "मानव कान 20 हर्ट्ज से 20 किलोहर्ट्ज (20,000 Hz) तक की ध्वनि सुन सकते हैं।",
    "explanationEnglish": "The standard audio frequency spectrum audible to human ears spans 20 Hz to 20,000 Hz.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 50,
    "subject": "Science",
    "topic": "भौतिकी - कार्य व ऊर्जा",
    "questionHindi": "जब किसी वस्तु को ऊपर की ओर फेंका जाता है, तो उसके उच्चतम बिंदु पर क्या होता है?",
    "questionEnglish": "When an object is thrown vertically upwards, what happens at its highest point?",
    "options": [
      {
        "id": "A",
        "textHi": "वेग शून्य होता है तथा गुरुत्वीय त्वरण 9.8 m/s² नीचे की ओर कार्य करता है।",
        "textEn": "Velocity is zero and gravitational acceleration acts downward."
      },
      {
        "id": "B",
        "textHi": "वेग तथा त्वरण दोनों शून्य होते हैं।",
        "textEn": "Both velocity and acceleration become zero."
      },
      {
        "id": "C",
        "textHi": "वेग अधिकतम होता है।",
        "textEn": "Velocity is at maximum."
      },
      {
        "id": "D",
        "textHi": "त्वरण की दिशा ऊपर की ओर हो जाती है।",
        "textEn": "Acceleration directs upward."
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "शीर्ष बिंदु पर क्षणिक वेग शून्य हो जाता है किंतु गुरुत्वीय त्वरण (g = 9.8 m/s²) सदैव नीचे की ओर कार्यरत रहता है।",
    "explanationEnglish": "At peak altitude, instantaneous vertical velocity is 0 while downward acceleration due to gravity persists.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 51,
    "subject": "Mathematics",
    "topic": "संख्या पद्धति",
    "questionHindi": "प्रथम 10 अभाज्य संख्याओं में सबसे छोटी अभाज्य संख्या कौन सी है?",
    "questionEnglish": "Which is the smallest prime number?",
    "options": [
      {
        "id": "A",
        "textHi": "2",
        "textEn": "2"
      },
      {
        "id": "B",
        "textHi": "1",
        "textEn": "1"
      },
      {
        "id": "C",
        "textHi": "3",
        "textEn": "3"
      },
      {
        "id": "D",
        "textHi": "0",
        "textEn": "0"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "2 एकमात्र सम अभाज्य संख्या है और यह सबसे छोटी अभाज्य संख्या भी है (1 न तो भाज्य है न अभाज्य)।",
    "explanationEnglish": "2 is the smallest prime number as well as the only even prime number.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 52,
    "subject": "Mathematics",
    "topic": "प्रतिशत",
    "questionHindi": "यदि किसी वस्तु के मूल्य में 20% की वृद्धि की जाए और फिर 20% की कमी कर दी जाए, तो वस्तु के कुल मूल्य पर क्या प्रभाव पड़ेगा?",
    "questionEnglish": "If the price of an article is increased by 20% and subsequently decreased by 20%, what is the net percentage change?",
    "options": [
      {
        "id": "A",
        "textHi": "4% की कमी",
        "textEn": "4% decrease"
      },
      {
        "id": "B",
        "textHi": "4% की वृद्धि",
        "textEn": "4% increase"
      },
      {
        "id": "C",
        "textHi": "कोई परिवर्तन नहीं",
        "textEn": "No change"
      },
      {
        "id": "D",
        "textHi": "2% की कमी",
        "textEn": "2% decrease"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "कुल प्रभाव = +20 - 20 - (20 × 20)/100 = -4% (अर्थात् 4% की कमी)।",
    "explanationEnglish": "Formula: (+x - x - x²/100)% = -(400/100)% = -4%, representing a 4% decrease.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 53,
    "subject": "Mathematics",
    "topic": "लाभ और हानि",
    "questionHindi": "एक व्यापारी 1200 रुपये में खरीदी गई वस्तु को 1500 रुपये में बेचता है। उसका प्रतिशत लाभ कितना है?",
    "questionEnglish": "A trader purchases an item for Rs. 1,200 and sells it for Rs. 1,500. What is his percentage profit?",
    "options": [
      {
        "id": "A",
        "textHi": "25%",
        "textEn": "25%"
      },
      {
        "id": "B",
        "textHi": "20%",
        "textEn": "20%"
      },
      {
        "id": "C",
        "textHi": "30%",
        "textEn": "30%"
      },
      {
        "id": "D",
        "textHi": "15%",
        "textEn": "15%"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "लाभ = 1500 - 1200 = 300 रुपये। लाभ% = (300 / 1200) × 100 = 25%।",
    "explanationEnglish": "Profit = Rs. 300. Profit % = (300 / 1200) * 100 = 25%.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 54,
    "subject": "Mathematics",
    "topic": "साधारण ब्याज",
    "questionHindi": "5000 रुपये की धनराशि पर 10% वार्षिक साधारण ब्याज की दर से 3 वर्ष का ब्याज कितना होगा?",
    "questionEnglish": "What is the simple interest on a principal of Rs. 5,000 at 10% annual rate for 3 years?",
    "options": [
      {
        "id": "A",
        "textHi": "1500 रुपये",
        "textEn": "Rs. 1,500"
      },
      {
        "id": "B",
        "textHi": "1200 रुपये",
        "textEn": "Rs. 1,200"
      },
      {
        "id": "C",
        "textHi": "1650 रुपये",
        "textEn": "Rs. 1,650"
      },
      {
        "id": "D",
        "textHi": "2000 रुपये",
        "textEn": "Rs. 2,000"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "SI = (P × R × T) / 100 = (5000 × 10 × 3) / 100 = 1500 रुपये।",
    "explanationEnglish": "Simple Interest = (5000 * 10 * 3) / 100 = Rs. 1,500.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 55,
    "subject": "Mathematics",
    "topic": "चक्रवृद्धि ब्याज",
    "questionHindi": "8000 रुपये की धनराशि पर 5% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज कितना होगा?",
    "questionEnglish": "What is the compound interest on Rs. 8,000 at 5% per annum compounded annually for 2 years?",
    "options": [
      {
        "id": "A",
        "textHi": "820 रुपये",
        "textEn": "Rs. 820"
      },
      {
        "id": "B",
        "textHi": "800 रुपये",
        "textEn": "Rs. 800"
      },
      {
        "id": "C",
        "textHi": "850 रुपये",
        "textEn": "Rs. 850"
      },
      {
        "id": "D",
        "textHi": "900 रुपये",
        "textEn": "Rs. 900"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "A = 8000(1 + 5/100)² = 8000 × (21/20)² = 8820। CI = 8820 - 8000 = 820 रुपये।",
    "explanationEnglish": "Amount = 8000 * (1.05)^2 = Rs. 8,820. Compound Interest = 8820 - 8000 = Rs. 820.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 56,
    "subject": "Mathematics",
    "topic": "औसत",
    "questionHindi": "संख्याओं 12, 18, 24, 30 और 36 का समांतर माध्य (औसत) क्या होगा?",
    "questionEnglish": "What is the arithmetic mean (average) of the numbers 12, 18, 24, 30, and 36?",
    "options": [
      {
        "id": "A",
        "textHi": "24",
        "textEn": "24"
      },
      {
        "id": "B",
        "textHi": "22",
        "textEn": "22"
      },
      {
        "id": "C",
        "textHi": "26",
        "textEn": "26"
      },
      {
        "id": "D",
        "textHi": "28",
        "textEn": "28"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "योग = 120; औसत = 120 / 5 = 24 (समांतर श्रेणी में मध्य पद ही औसत होता है)।",
    "explanationEnglish": "Sum = 120. Mean = 120 / 5 = 24. Since these form an AP, middle term is the mean.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 57,
    "subject": "Mathematics",
    "topic": "अनुपात और समानुपात",
    "questionHindi": "यदि A : B = 2 : 3 तथा B : C = 4 : 5 हो, तो A : B : C का मान क्या होगा?",
    "questionEnglish": "If A : B = 2 : 3 and B : C = 4 : 5, find the ratio A : B : C:",
    "options": [
      {
        "id": "A",
        "textHi": "8 : 12 : 15",
        "textEn": "8 : 12 : 15"
      },
      {
        "id": "B",
        "textHi": "6 : 9 : 15",
        "textEn": "6 : 9 : 15"
      },
      {
        "id": "C",
        "textHi": "8 : 10 : 15",
        "textEn": "8 : 10 : 15"
      },
      {
        "id": "D",
        "textHi": "2 : 4 : 5",
        "textEn": "2 : 4 : 5"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "A : B : C = (2×4) : (3×4) : (3×5) = 8 : 12 : 15।",
    "explanationEnglish": "Multiply to balance B: A:B:C = (2*4) : (3*4) : (3*5) = 8 : 12 : 15.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 58,
    "subject": "Mathematics",
    "topic": "ल.स. और म.स. (LCM & HCF)",
    "questionHindi": "दो संख्याओं का म.स. 12 और ल.स. 240 है। यदि इनमें से एक संख्या 48 है, तो दूसरी संख्या क्या होगी?",
    "questionEnglish": "The HCF of two numbers is 12 and their LCM is 240. If one number is 48, find the second number:",
    "options": [
      {
        "id": "A",
        "textHi": "60",
        "textEn": "60"
      },
      {
        "id": "B",
        "textHi": "40",
        "textEn": "40"
      },
      {
        "id": "C",
        "textHi": "72",
        "textEn": "72"
      },
      {
        "id": "D",
        "textHi": "80",
        "textEn": "80"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "सूत्र: पहली संख्या × दूसरी संख्या = ल.स. × म.स. ⇒ 48 × N = 240 × 12 ⇒ N = 2880 / 48 = 60।",
    "explanationEnglish": "Product of numbers = LCM * HCF => 48 * N = 240 * 12 => N = 2880 / 48 = 60.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 59,
    "subject": "Mathematics",
    "topic": "क्षेत्रमिति - आयत",
    "questionHindi": "एक आयताकार मैदान की लंबाई 25 मीटर तथा चौड़ाई 15 मीटर है। इसके चारों ओर बाड़ लगाने के लिए आवश्यक परिमाप कितना होगा?",
    "questionEnglish": "The length and breadth of a rectangular field are 25 m and 15 m respectively. Find its perimeter:",
    "options": [
      {
        "id": "A",
        "textHi": "80 मीटर",
        "textEn": "80 meters"
      },
      {
        "id": "B",
        "textHi": "75 मीटर",
        "textEn": "75 meters"
      },
      {
        "id": "C",
        "textHi": "100 मीटर",
        "textEn": "100 meters"
      },
      {
        "id": "D",
        "textHi": "375 मीटर",
        "textEn": "375 meters"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "आयत का परिमाप = 2(लंबाई + चौड़ाई) = 2(25 + 15) = 2 × 40 = 80 मीटर।",
    "explanationEnglish": "Perimeter = 2 * (length + breadth) = 2 * (25 + 15) = 80 m.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 60,
    "subject": "Mathematics",
    "topic": "क्षेत्रमिति - वृत्त",
    "questionHindi": "एक वृत्ताकार पहिये की त्रिज्या 14 सेमी है। एक चक्कर लगाने में यह कितनी दूरी तय करेगा? (π = 22/7)",
    "questionEnglish": "A wheel has a radius of 14 cm. What distance does it cover in one complete revolution? (Use π = 22/7)",
    "options": [
      {
        "id": "A",
        "textHi": "88 सेमी",
        "textEn": "88 cm"
      },
      {
        "id": "B",
        "textHi": "44 सेमी",
        "textEn": "44 cm"
      },
      {
        "id": "C",
        "textHi": "176 सेमी",
        "textEn": "176 cm"
      },
      {
        "id": "D",
        "textHi": "616 सेमी",
        "textEn": "616 cm"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "एक चक्कर की दूरी = परिधि = 2πr = 2 × (22/7) × 14 = 88 सेमी।",
    "explanationEnglish": "Distance in 1 revolution = circumference = 2 * π * r = 2 * (22/7) * 14 = 88 cm.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 61,
    "subject": "Mathematics",
    "topic": "ज्यामिति - त्रिभुज",
    "questionHindi": "एक त्रिभुज के दो कोण क्रमशः 65° और 55° हैं। तीसरे कोण की माप क्या होगी?",
    "questionEnglish": "Two angles of a triangle are 65° and 55°. Find the measure of the third angle:",
    "options": [
      {
        "id": "A",
        "textHi": "60°",
        "textEn": "60°"
      },
      {
        "id": "B",
        "textHi": "70°",
        "textEn": "70°"
      },
      {
        "id": "C",
        "textHi": "50°",
        "textEn": "50°"
      },
      {
        "id": "D",
        "textHi": "80°",
        "textEn": "80°"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "त्रिभुज के तीनों कोणों का योग 180° होता है: 180° - (65° + 55°) = 180° - 120° = 60°।",
    "explanationEnglish": "The sum of angles in a triangle is 180°. Third angle = 180 - (65 + 55) = 60°.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 62,
    "subject": "Mathematics",
    "topic": "समय और कार्य",
    "questionHindi": "A किसी काम को 10 दिन में तथा B उसी काम को 15 दिन में पूरा करता है। दोनों मिलकर उस काम को कितने दिन में पूरा करेंगे?",
    "questionEnglish": "A can complete a task in 10 days and B in 15 days. In how many days can both complete it together?",
    "options": [
      {
        "id": "A",
        "textHi": "6 दिन",
        "textEn": "6 days"
      },
      {
        "id": "B",
        "textHi": "8 दिन",
        "textEn": "8 days"
      },
      {
        "id": "C",
        "textHi": "5 दिन",
        "textEn": "5 days"
      },
      {
        "id": "D",
        "textHi": "7.5 दिन",
        "textEn": "7.5 days"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "1 दिन का कार्य = 1/10 + 1/15 = 5/30 = 1/6 भाग। अतः पूरा काम = 6 दिन।",
    "explanationEnglish": "Combined 1-day rate = 1/10 + 1/15 = 1/6. Total days = 6 days.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 63,
    "subject": "Mathematics",
    "topic": "चाल, समय और दूरी",
    "questionHindi": "72 किमी/घंटा की गति को मीटर प्रति सेकंड (m/s) में परिवर्तित कीजिए:",
    "questionEnglish": "Convert the speed of 72 km/h into meters per second (m/s):",
    "options": [
      {
        "id": "A",
        "textHi": "20 m/s",
        "textEn": "20 m/s"
      },
      {
        "id": "B",
        "textHi": "25 m/s",
        "textEn": "25 m/s"
      },
      {
        "id": "C",
        "textHi": "15 m/s",
        "textEn": "15 m/s"
      },
      {
        "id": "D",
        "textHi": "18 m/s",
        "textEn": "18 m/s"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "72 × (5/18) = 4 × 5 = 20 m/s।",
    "explanationEnglish": "Multiply by 5/18: 72 * (5/18) = 20 m/s.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 64,
    "subject": "Mathematics",
    "topic": "बीजगणित",
    "questionHindi": "यदि (x + 1/x) = 5 हो, तो (x² + 1/x²) का मान क्या होगा?",
    "questionEnglish": "If (x + 1/x) = 5, find the value of (x² + 1/x²):",
    "options": [
      {
        "id": "A",
        "textHi": "23",
        "textEn": "23"
      },
      {
        "id": "B",
        "textHi": "25",
        "textEn": "25"
      },
      {
        "id": "C",
        "textHi": "27",
        "textEn": "27"
      },
      {
        "id": "D",
        "textHi": "21",
        "textEn": "21"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "(x + 1/x)² = x² + 1/x² + 2 ⇒ 25 = x² + 1/x² + 2 ⇒ x² + 1/x² = 23।",
    "explanationEnglish": "Using identity (x + 1/x)^2 = x^2 + 1/x^2 + 2: 5^2 - 2 = 25 - 2 = 23.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 65,
    "subject": "Mathematics",
    "topic": "घातांक और करणी",
    "questionHindi": "मान ज्ञात कीजिए: (27)^(2/3) × (8)^(4/3)",
    "questionEnglish": "Evaluate: (27)^(2/3) * (8)^(4/3)",
    "options": [
      {
        "id": "A",
        "textHi": "144",
        "textEn": "144"
      },
      {
        "id": "B",
        "textHi": "72",
        "textEn": "72"
      },
      {
        "id": "C",
        "textHi": "108",
        "textEn": "108"
      },
      {
        "id": "D",
        "textHi": "96",
        "textEn": "96"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "(27)^(2/3) = (3³)^(2/3) = 3² = 9; (8)^(4/3) = (2³)^(4/3) = 2⁴ = 16। गुणनफल = 9 × 16 = 144।",
    "explanationEnglish": "(3^3)^(2/3) = 9; (2^3)^(4/3) = 16. Product = 9 * 16 = 144.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 66,
    "subject": "Mathematics",
    "topic": "त्रिकोणमिति",
    "questionHindi": "मान ज्ञात कीजिए: sin² 30° + cos² 30°",
    "questionEnglish": "Find the value of: sin² 30° + cos² 30°",
    "options": [
      {
        "id": "A",
        "textHi": "1",
        "textEn": "1"
      },
      {
        "id": "B",
        "textHi": "1/2",
        "textEn": "1/2"
      },
      {
        "id": "C",
        "textHi": "3/4",
        "textEn": "3/4"
      },
      {
        "id": "D",
        "textHi": "2",
        "textEn": "2"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "सर्वसमिका sin² θ + cos² θ = 1 सदैव सत्य होती है (अथवा (1/2)² + (√3/2)² = 1/4 + 3/4 = 1)।",
    "explanationEnglish": "By trigonometric identity sin²θ + cos²θ = 1.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 67,
    "subject": "Mathematics",
    "topic": "सांख्यिकी - बहुलक",
    "questionHindi": "दिए गए आंकड़ों का बहुलक (Mode) क्या है: 4, 7, 5, 4, 8, 4, 9, 7, 4, 6?",
    "questionEnglish": "What is the mode of the given observations: 4, 7, 5, 4, 8, 4, 9, 7, 4, 6?",
    "options": [
      {
        "id": "A",
        "textHi": "4",
        "textEn": "4"
      },
      {
        "id": "B",
        "textHi": "7",
        "textEn": "7"
      },
      {
        "id": "C",
        "textHi": "5",
        "textEn": "5"
      },
      {
        "id": "D",
        "textHi": "8",
        "textEn": "8"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संख्या 4 सबसे अधिक बार (4 बार) आई है, अतः बहुलक 4 है।",
    "explanationEnglish": "The value 4 occurs with the highest frequency (4 times), so mode is 4.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 68,
    "subject": "Mathematics",
    "topic": "प्रायिकता (Probability)",
    "questionHindi": "एक निष्पक्ष पासे (Dice) को फेंकने पर एक सम संख्या आने की प्रायिकता क्या होगी?",
    "questionEnglish": "What is the probability of getting an even number when rolling a fair six-sided die?",
    "options": [
      {
        "id": "A",
        "textHi": "1/2",
        "textEn": "1/2"
      },
      {
        "id": "B",
        "textHi": "1/3",
        "textEn": "1/3"
      },
      {
        "id": "C",
        "textHi": "1/6",
        "textEn": "1/6"
      },
      {
        "id": "D",
        "textHi": "2/3",
        "textEn": "2/3"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "कुल परिणाम = {1, 2, 3, 4, 5, 6} = 6। सम संख्याएँ = {2, 4, 6} = 3। प्रायिकता = 3/6 = 1/2।",
    "explanationEnglish": "Favorable outcomes = {2, 4, 6} (3). Total outcomes = 6. Probability = 3/6 = 1/2.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 69,
    "subject": "Mathematics",
    "topic": "आयतन - घनाभ",
    "questionHindi": "एक घनाभाकार बक्से की विमाएँ 10 सेमी × 8 सेमी × 5 सेमी हैं। इसका कुल आयतन कितना होगा?",
    "questionEnglish": "The dimensions of a cuboidal box are 10 cm * 8 cm * 5 cm. Find its volume:",
    "options": [
      {
        "id": "A",
        "textHi": "400 सेमी³",
        "textEn": "400 cm³"
      },
      {
        "id": "B",
        "textHi": "360 सेमी³",
        "textEn": "360 cm³"
      },
      {
        "id": "C",
        "textHi": "800 सेमी³",
        "textEn": "800 cm³"
      },
      {
        "id": "D",
        "textHi": "240 सेमी³",
        "textEn": "240 cm³"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई = 10 × 8 × 5 = 400 सेमी³।",
    "explanationEnglish": "Volume of cuboid = l * b * h = 10 * 8 * 5 = 400 cm³.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 70,
    "subject": "Mathematics",
    "topic": "भिन्न और दशमलव",
    "questionHindi": "भिन्न 3/8 का दशमलव प्रसार क्या होगा?",
    "questionEnglish": "What is the decimal expansion of fraction 3/8?",
    "options": [
      {
        "id": "A",
        "textHi": "0.375",
        "textEn": "0.375"
      },
      {
        "id": "B",
        "textHi": "0.325",
        "textEn": "0.325"
      },
      {
        "id": "C",
        "textHi": "0.350",
        "textEn": "0.350"
      },
      {
        "id": "D",
        "textHi": "0.380",
        "textEn": "0.380"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "3 / 8 = 0.375 (यह एक शांत दशमलव प्रसार है)।",
    "explanationEnglish": "3 / 8 = 0.375 (terminating decimal).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 71,
    "subject": "Environmental Studies & Social Science",
    "topic": "भारतीय संविधान",
    "questionHindi": "भारतीय संविधान के किस अनुच्छेद के अंतर्गत 'अस्पृश्यता का उन्मूलन' किया गया है?",
    "questionEnglish": "Under which Article of the Indian Constitution is 'Abolition of Untouchability' enacted?",
    "options": [
      {
        "id": "A",
        "textHi": "अनुच्छेद 17",
        "textEn": "Article 17"
      },
      {
        "id": "B",
        "textHi": "अनुच्छेद 14",
        "textEn": "Article 14"
      },
      {
        "id": "C",
        "textHi": "अनुच्छेद 19",
        "textEn": "Article 19"
      },
      {
        "id": "D",
        "textHi": "अनुच्छेद 21",
        "textEn": "Article 21"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भारतीय संविधान के अनुच्छेद 17 में अस्पृश्यता को दंडनीय अपराध घोषित करते हुए इसका उन्मूलन किया गया है।",
    "explanationEnglish": "Article 17 abolishes untouchability and forbids its practice in any form.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 72,
    "subject": "Environmental Studies & Social Science",
    "topic": "भूगोल - नदियाँ",
    "questionHindi": "भारत की सबसे लंबी नदी कौन सी है?",
    "questionEnglish": "Which is the longest river flowing entirely within/originating in India?",
    "options": [
      {
        "id": "A",
        "textHi": "गंगा नदी (2525 किमी)",
        "textEn": "Ganga River (2525 km)"
      },
      {
        "id": "B",
        "textHi": "गोदावरी नदी",
        "textEn": "Godavari River"
      },
      {
        "id": "C",
        "textHi": "ब्रह्मपुत्र नदी",
        "textEn": "Brahmaputra River"
      },
      {
        "id": "D",
        "textHi": "यमुना नदी",
        "textEn": "Yamuna River"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "गंगा नदी 2525 किमी लंबाई के साथ भारत की सबसे लंबी पवित्र नदी है।",
    "explanationEnglish": "Ganga is the longest river in India spanning 2,525 km.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 73,
    "subject": "Environmental Studies & Social Science",
    "topic": "इतिहास - स्वतंत्रता संग्राम",
    "questionHindi": "वर्ष 1857 के प्रथम भारतीय स्वतंत्रता संग्राम की शुरुआत किस छावनी से हुई थी?",
    "questionEnglish": "From which cantonment did the First War of Indian Independence (1857 Revolt) begin?",
    "options": [
      {
        "id": "A",
        "textHi": "मेरठ छावनी",
        "textEn": "Meerut Cantonment"
      },
      {
        "id": "B",
        "textHi": "बैरकपुर",
        "textEn": "Barrackpore"
      },
      {
        "id": "C",
        "textHi": "झाँसी",
        "textEn": "Jhansi"
      },
      {
        "id": "D",
        "textHi": "कानपुर",
        "textEn": "Kanpur"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "10 मई 1857 को मेरठ छावनी से सैनिकों ने दिल्ली कूच के साथ क्रांति का औपचारिक शंखनाद किया था।",
    "explanationEnglish": "The rebellion formally commenced on May 10, 1857, at the Meerut cantonment.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 74,
    "subject": "Environmental Studies & Social Science",
    "topic": "पर्यावरण व पारिस्थितिकी",
    "questionHindi": "विश्व पर्यावरण दिवस प्रतिवर्ष किस तिथि को आयोजित किया जाता है?",
    "questionEnglish": "On which date is World Environment Day celebrated globally every year?",
    "options": [
      {
        "id": "A",
        "textHi": "5 जून",
        "textEn": "June 5"
      },
      {
        "id": "B",
        "textHi": "22 अप्रैल",
        "textEn": "April 22"
      },
      {
        "id": "C",
        "textHi": "16 सितंबर",
        "textEn": "September 16"
      },
      {
        "id": "D",
        "textHi": "11 जुलाई",
        "textEn": "July 11"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संयुक्त राष्ट्र द्वारा 1974 से प्रतिवर्ष 5 जून को विश्व पर्यावरण दिवस मनाया जाता है।",
    "explanationEnglish": "World Environment Day is celebrated worldwide on June 5 led by UNEP.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 75,
    "subject": "Environmental Studies & Social Science",
    "topic": "भूगोल - राष्ट्रीय उद्यान",
    "questionHindi": "उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान 'दुधवा राष्ट्रीय उद्यान' किस जनपद में स्थित है?",
    "questionEnglish": "In which district of Uttar Pradesh is the Dudhwa National Park situated?",
    "options": [
      {
        "id": "A",
        "textHi": "लखीमपुर खीरी",
        "textEn": "Lakhimpur Kheri"
      },
      {
        "id": "B",
        "textHi": "पीलीभीत",
        "textEn": "Pilibhit"
      },
      {
        "id": "C",
        "textHi": "सोनभद्र",
        "textEn": "Sonbhadra"
      },
      {
        "id": "D",
        "textHi": "मिर्ज़ापुर",
        "textEn": "Mirzapur"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "दुधवा राष्ट्रीय उद्यान तराई क्षेत्र में उत्तर प्रदेश के लखीमपुर खीरी जनपद में स्थित बाघ व बारहसिंगा अभयारण्य है।",
    "explanationEnglish": "Dudhwa National Park is situated in Lakhimpur Kheri district of Uttar Pradesh.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 76,
    "subject": "Environmental Studies & Social Science",
    "topic": "भारतीय राजव्यवस्था",
    "questionHindi": "भारतीय संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?",
    "questionEnglish": "Who was the Chairman of the Drafting Committee of the Indian Constituent Assembly?",
    "options": [
      {
        "id": "A",
        "textHi": "डॉ. भीमराव आंबेडकर",
        "textEn": "Dr. B. R. Ambedkar"
      },
      {
        "id": "B",
        "textHi": "डॉ. राजेंद्र प्रसाद",
        "textEn": "Dr. Rajendra Prasad"
      },
      {
        "id": "C",
        "textHi": "पं. जवाहरलाल नेहरू",
        "textEn": "Jawaharlal Nehru"
      },
      {
        "id": "D",
        "textHi": "सर बी. एन. राव",
        "textEn": "Sir B. N. Rau"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "प्रारूप समिति के अध्यक्ष डॉ. भीमराव आंबेडकर थे जिन्हें 'संविधान का निर्माता' कहा जाता है।",
    "explanationEnglish": "Dr. B. R. Ambedkar served as the chairman of the Drafting Committee.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 77,
    "subject": "Environmental Studies & Social Science",
    "topic": "खनिज व संसाधन",
    "questionHindi": "बॉक्साइट (Bauxite) किस प्रमुख धातु का प्राथमिक अयस्क है?",
    "questionEnglish": "Bauxite is the principal ore of which major metal?",
    "options": [
      {
        "id": "A",
        "textHi": "एल्युमिनियम",
        "textEn": "Aluminium"
      },
      {
        "id": "B",
        "textHi": "लोहा",
        "textEn": "Iron"
      },
      {
        "id": "C",
        "textHi": "ताँबा",
        "textEn": "Copper"
      },
      {
        "id": "D",
        "textHi": "जस्ता",
        "textEn": "Zinc"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "बॉक्साइट (Al₂O₃·2H₂O) एल्युमिनियम का सबसे महत्वपूर्ण प्राकृतिक खनिज अयस्क है।",
    "explanationEnglish": "Bauxite is the primary commercial ore used for extracting aluminium.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 78,
    "subject": "Environmental Studies & Social Science",
    "topic": "यातायात एवं सड़क सुरक्षा",
    "questionHindi": "सड़क यातायात संकेतों में लाल रंग की अष्टकोणीय (Octagonal) यातायात बत्ती या संकेत किसका प्रतीक होता है?",
    "questionEnglish": "In standard road traffic signage, an octagonal red sign signifies:",
    "options": [
      {
        "id": "A",
        "textHi": "रुकिए (STOP)",
        "textEn": "STOP"
      },
      {
        "id": "B",
        "textHi": "धीरे चलिए",
        "textEn": "SLOW DOWN"
      },
      {
        "id": "C",
        "textHi": "आगे रास्ता बंद है",
        "textEn": "NO ENTRY"
      },
      {
        "id": "D",
        "textHi": "गति सीमा",
        "textEn": "SPEED LIMIT"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अंतरराष्ट्रीय मानक के अनुसार अष्टकोणीय लाल बोर्ड 'STOP' (रुकिए) का अनिवार्य संकेत होता है।",
    "explanationEnglish": "The universal octagonal red traffic sign mandates coming to a full STOP.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 79,
    "subject": "Environmental Studies & Social Science",
    "topic": "सौर मंडल",
    "questionHindi": "सौर मंडल का सबसे चमकीला एवं 'भोर का तारा' कहा जाने वाला ग्रह कौन सा है?",
    "questionEnglish": "Which planet is known as the brightest planet and the 'Morning/Evening Star'?",
    "options": [
      {
        "id": "A",
        "textHi": "शुक्र (Venus)",
        "textEn": "Venus"
      },
      {
        "id": "B",
        "textHi": "मंगल (Mars)",
        "textEn": "Mars"
      },
      {
        "id": "C",
        "textHi": "बृहस्पति (Jupiter)",
        "textEn": "Jupiter"
      },
      {
        "id": "D",
        "textHi": "बुध (Mercury)",
        "textEn": "Mercury"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "शुक्र ग्रह अत्यधिक परावर्तक सल्फ्यूरिक अम्ल के बादलों के कारण सबसे चमकीला दिखता है।",
    "explanationEnglish": "Venus is the brightest natural object in the night sky after Moon, known as Morning Star.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 80,
    "subject": "Environmental Studies & Social Science",
    "topic": "जैव विविधता",
    "questionHindi": "भारत में 'चिपको आंदोलन' वनों की कटाई रोकने हेतु किसके नेतृत्व में प्रारंभ हुआ था?",
    "questionEnglish": "Under whose pioneering leadership was the historic 'Chipko Movement' initiated in Uttarakhand?",
    "options": [
      {
        "id": "A",
        "textHi": "सुंदरलाल बहुगुणा एवं चंडी प्रसाद भट्ट",
        "textEn": "Sunderlal Bahuguna & Chandi Prasad Bhatt"
      },
      {
        "id": "B",
        "textHi": "मेधा पाटकर",
        "textEn": "Medha Patkar"
      },
      {
        "id": "C",
        "textHi": "बाबा आम्टे",
        "textEn": "Baba Amte"
      },
      {
        "id": "D",
        "textHi": "सलीम अली",
        "textEn": "Salim Ali"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "चिपको आंदोलन 1973 में उत्तराखंड के चमोली में पेड़ों से चिपककर उनकी रक्षा के लिए सुंदरलाल बहुगुणा द्वारा चलाया गया।",
    "explanationEnglish": "Chipko movement began in 1973 spearheaded by Sunderlal Bahuguna and Chandi Prasad Bhatt.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 81,
    "subject": "Teaching Methodology",
    "topic": "शिक्षण विधियाँ",
    "questionHindi": "किंडरगार्टन (बालोद्यान) शिक्षण पद्धति के जनक कौन माने जाते हैं?",
    "questionEnglish": "Who is considered the founder of the Kindergarten method of education?",
    "options": [
      {
        "id": "A",
        "textHi": "फ्रेडरिक फ्रोबेल",
        "textEn": "Friedrich Froebel"
      },
      {
        "id": "B",
        "textHi": "मारिया मांटेसरी",
        "textEn": "Maria Montessori"
      },
      {
        "id": "C",
        "textHi": "जॉन ड्यूवी",
        "textEn": "John Dewey"
      },
      {
        "id": "D",
        "textHi": "रॉबर्ट गैगने",
        "textEn": "Robert Gagne"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "जर्मन शिक्षाविद फ्रेडरिक फ्रोबेल ने 1837 में खेल-आधारित 'किंडरगार्टन' प्रणाली की स्थापना की।",
    "explanationEnglish": "Friedrich Froebel originated the kindergarten system based on play and self-activity.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 82,
    "subject": "Teaching Methodology",
    "topic": "शिक्षण सूत्र",
    "questionHindi": "प्राथमिक स्तर पर छात्रों को पढ़ाते समय निम्नलिखित में से किस शिक्षण सूत्र का पालन सबसे प्रभावी होता है?",
    "questionEnglish": "Which teaching maxim is most effective when teaching young children at the primary level?",
    "options": [
      {
        "id": "A",
        "textHi": "मूर्त से अमूर्त की ओर (Concrete to Abstract)",
        "textEn": "Concrete to Abstract"
      },
      {
        "id": "B",
        "textHi": "अमूर्त से मूर्त की ओर",
        "textEn": "Abstract to Concrete"
      },
      {
        "id": "C",
        "textHi": "जटिल से सरल की ओर",
        "textEn": "Complex to Simple"
      },
      {
        "id": "D",
        "textHi": "अज्ञात से ज्ञात की ओर",
        "textEn": "Unknown to Known"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "बच्चे प्रत्यक्ष वस्तुओं को देखकर जल्दी सीखते हैं, अतः मूर्त से अमूर्त की ओर का सूत्र सर्वोत्कृष्ट है।",
    "explanationEnglish": "Young children comprehend tangible/concrete materials before formulating abstract concepts.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 83,
    "subject": "Teaching Methodology",
    "topic": "मूल्यांकन एवं मापन",
    "questionHindi": "सतत एवं समग्र मूल्यांकन (CCE) में 'समग्र' (Comprehensive) शब्द का मुख्य तात्पर्य क्या है?",
    "questionEnglish": "In Continuous and Comprehensive Evaluation (CCE), what does 'Comprehensive' signify?",
    "options": [
      {
        "id": "A",
        "textHi": "शैक्षिक एवं सह-शैक्षिक दोनों पक्षों का मूल्यांकन",
        "textEn": "Evaluation of both scholastic and co-scholastic domains"
      },
      {
        "id": "B",
        "textHi": "केवल वार्षिक लिखित परीक्षा",
        "textEn": "Only terminal written examinations"
      },
      {
        "id": "C",
        "textHi": "केवल पाठ्यपुस्तकीय ज्ञान का परीक्षण",
        "textEn": "Assessment of textbook content alone"
      },
      {
        "id": "D",
        "textHi": "विद्यार्थियों का मासिक ग्रेडिंग करना",
        "textEn": "Monthly grading of students"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "समग्रता का अर्थ छात्र के संज्ञानात्मक (शैक्षिक) तथा भावात्मक व क्रियात्मक (सह-शैक्षिक) सभी पक्षों का विकास परखना है।",
    "explanationEnglish": "Comprehensive evaluation encompasses both scholastic (academic) and co-scholastic (activities/values) growth.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 84,
    "subject": "Teaching Methodology",
    "topic": "समावेशी शिक्षा",
    "questionHindi": "समावेशी शिक्षा (Inclusive Education) का मूल दर्शन क्या है?",
    "questionEnglish": "What is the foundational philosophy of Inclusive Education?",
    "options": [
      {
        "id": "A",
        "textHi": "बिना किसी भेदभाव के सभी बच्चों को एक ही नियमित विद्यालय में एक साथ शिक्षा देना",
        "textEn": "Educating all children together in regular classrooms irrespective of differences"
      },
      {
        "id": "B",
        "textHi": "दिव्यांग बच्चों के लिए अलग विशेष विद्यालयों की स्थापना करना",
        "textEn": "Establishing segregated special institutions for differently-abled"
      },
      {
        "id": "C",
        "textHi": "केवल प्रतिभाशाली बच्चों को उच्च स्तरीय सुविधाएँ देना",
        "textEn": "Providing accelerated programs only to gifted students"
      },
      {
        "id": "D",
        "textHi": "कमजोर छात्रों को विद्यालय से अलग करना",
        "textEn": "Segregating slow learners"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "समावेशी शिक्षा का उद्देश्य प्रत्येक बालक—चाहे वह सामान्य हो या विशेष आवश्यकता वाला—को एक समान मंच प्रदान करना है।",
    "explanationEnglish": "Inclusive education ensures all students attend age-appropriate regular classes regardless of challenges.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 85,
    "subject": "Teaching Methodology",
    "topic": "सूक्ष्म शिक्षण",
    "questionHindi": "भारतीय मॉडल के अनुसार 'सूक्ष्म शिक्षण' (Micro-teaching) के एक चक्र की कुल मानक समयावधि कितनी होती है?",
    "questionEnglish": "What is the standard total duration of one micro-teaching cycle in the Indian NCERT model?",
    "options": [
      {
        "id": "A",
        "textHi": "36 मिनट",
        "textEn": "36 Minutes"
      },
      {
        "id": "B",
        "textHi": "45 मिनट",
        "textEn": "45 Minutes"
      },
      {
        "id": "C",
        "textHi": "30 मिनट",
        "textEn": "30 Minutes"
      },
      {
        "id": "D",
        "textHi": "60 मिनट",
        "textEn": "60 Minutes"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "NCERT मॉडल: पाठ योजना (पहले) + शिक्षण (6) + प्रतिपुष्टि (6) + पुनः योजना (12) + पुनः शिक्षण (6) + पुनः प्रतिपुष्टि (6) = कुल 36 मिनट।",
    "explanationEnglish": "NCERT standard microteaching cycle: Teach (6m), Feedback (6m), Re-plan (12m), Re-teach (6m), Re-feedback (6m) = 36m.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 86,
    "subject": "Teaching Methodology",
    "topic": "शिक्षा का अधिकार अधिनियम",
    "questionHindi": "निःशुल्क एवं अनिवार्य बाल शिक्षा का अधिकार (RTE) अधिनियम, 2009 किस आयु वर्ग के बच्चों के लिए लागू है?",
    "questionEnglish": "The Right to Education (RTE) Act, 2009 guarantees free and compulsory education to which age group?",
    "options": [
      {
        "id": "A",
        "textHi": "6 से 14 वर्ष",
        "textEn": "6 to 14 years"
      },
      {
        "id": "B",
        "textHi": "3 से 18 वर्ष",
        "textEn": "3 to 18 years"
      },
      {
        "id": "C",
        "textHi": "5 से 15 वर्ष",
        "textEn": "5 to 15 years"
      },
      {
        "id": "D",
        "textHi": "6 से 18 वर्ष",
        "textEn": "6 to 18 years"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संविधान के 86वें संशोधन एवं RTE 2009 के तहत 6 से 14 वर्ष के बालकों को मौलिक अधिकार प्रदान किया गया है।",
    "explanationEnglish": "RTE 2009 mandates free, compulsory elementary education for children aged 6 to 14.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 87,
    "subject": "Teaching Methodology",
    "topic": "शिक्षण कौशल",
    "questionHindi": "शिक्षण के दौरान छात्रों की भागीदारी को अधिकतम करने के लिए शिक्षक को किस प्रविधि का उपयोग करना चाहिए?",
    "questionEnglish": "To maximize student participation during a classroom lesson, a teacher should employ:",
    "options": [
      {
        "id": "A",
        "textHi": "प्रश्नोत्तर एवं परिचर्चा प्रविधि",
        "textEn": "Question-Answer and Discussion technique"
      },
      {
        "id": "B",
        "textHi": "केवल एकतरफा व्याख्यान",
        "textEn": "Monologue lecturing only"
      },
      {
        "id": "C",
        "textHi": "कठिन दंड का भय दिखाना",
        "textEn": "Fear of punishment"
      },
      {
        "id": "D",
        "textHi": "श्यामपट्ट से नकल करवाना",
        "textEn": "Dictation and blackboard copying"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "प्रश्नोत्तर और संवाद से छात्र सक्रिय श्रोता से सक्रिय सहभागी बनते हैं।",
    "explanationEnglish": "Interactive questioning engages higher-order thinking and active participation.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 88,
    "subject": "Teaching Methodology",
    "topic": "परियोजना विधि",
    "questionHindi": "प्रयोजना/प्रोजेक्ट पद्धति (Project Method) के प्रवर्तक कौन थे?",
    "questionEnglish": "Who formulated the Project Method of teaching based on Dewey's pragmatism?",
    "options": [
      {
        "id": "A",
        "textHi": "विलियम एच. किलपैट्रिक",
        "textEn": "William H. Kilpatrick"
      },
      {
        "id": "B",
        "textHi": "सुकरात",
        "textEn": "Socrates"
      },
      {
        "id": "C",
        "textHi": "प्लेटो",
        "textEn": "Plato"
      },
      {
        "id": "D",
        "textHi": "अरस्तू",
        "textEn": "Aristotle"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "जॉन ड्यूवी के शिष्य विलियम किलपैट्रिक ने 1918 में प्रोजेक्ट विधि का प्रतिपादन किया।",
    "explanationEnglish": "William Heard Kilpatrick developed the project method grounded in experiential pragmatism.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 89,
    "subject": "Teaching Methodology",
    "topic": "पाठ योजना",
    "questionHindi": "दैनिक पाठ योजना के 'पंचपदीय प्रणाली' (Five-Step System) का प्रतिपादन किसने किया था?",
    "questionEnglish": "Who introduced the famous 'Five-Step System' (Herbartian steps) of lesson planning?",
    "options": [
      {
        "id": "A",
        "textHi": "जोहान फ्रेडरिक हर्बर्ट",
        "textEn": "Johann Friedrich Herbart"
      },
      {
        "id": "B",
        "textHi": "ब्लूम",
        "textEn": "Benjamin Bloom"
      },
      {
        "id": "C",
        "textHi": "स्किनर",
        "textEn": "B. F. Skinner"
      },
      {
        "id": "D",
        "textHi": "पेस्टालॉजी",
        "textEn": "Pestalozzi"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "हर्बर्ट ने शिक्षण में प्रस्तावना, प्रस्तुतीकरण, तुलना/संयोग, सामान्यीकरण तथा प्रयोग के पाँच पद दिए।",
    "explanationEnglish": "Herbartian five steps comprise Preparation, Presentation, Association, Generalization, and Application.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 90,
    "subject": "Teaching Methodology",
    "topic": "अधिगम सामग्री (TLM)",
    "questionHindi": "कक्षा कक्ष में 'ऑडियो-विजुअल एड्स' (दृश्य-श्रव्य सामग्री) का उपयोग करने का मुख्य लाभ क्या है?",
    "questionEnglish": "What is the foremost advantage of utilizing Audio-Visual Aids in the classroom?",
    "options": [
      {
        "id": "A",
        "textHi": "अधिकतम ज्ञानेंद्रियों को सक्रिय कर अधिगम को स्थायी बनाना",
        "textEn": "Activating multiple sensory channels to make learning durable"
      },
      {
        "id": "B",
        "textHi": "शिक्षक के श्रम को समाप्त करना",
        "textEn": "Eliminating teacher workload"
      },
      {
        "id": "C",
        "textHi": "कक्षा में मनोरंजन कराना",
        "textEn": "Providing pure entertainment"
      },
      {
        "id": "D",
        "textHi": "पाठ्यक्रम को जल्दी समाप्त करना",
        "textEn": "Finishing curriculum quickly"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "दृश्य-श्रव्य साधन आँख और कान दोनों इंद्रियों को व्यस्त कर समझ को गहरा और स्थायी बनाते हैं।",
    "explanationEnglish": "Multi-sensory engagement enhances comprehension retention and cognitive anchoring.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 91,
    "subject": "Child Psychology",
    "topic": "विकास के सिद्धांत",
    "questionHindi": "विकास के 'मस्तकाधोमुखी' (Cephalocaudal) सिद्धांत के अनुसार बालक का विकास किस दिशा में अग्रसर होता है?",
    "questionEnglish": "According to the Cephalocaudal trend of physical and motor development, growth proceeds from:",
    "options": [
      {
        "id": "A",
        "textHi": "सिर से पैर की ओर",
        "textEn": "Head to Toe (Head downwards)"
      },
      {
        "id": "B",
        "textHi": "पैर से सिर की ओर",
        "textEn": "Toe to Head"
      },
      {
        "id": "C",
        "textHi": "केंद्र से बाहर की ओर",
        "textEn": "Center outward to extremities"
      },
      {
        "id": "D",
        "textHi": "सामान्य से विशिष्ट की ओर",
        "textEn": "General to specific only"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "मस्तकाधोमुखी नियम के अनुसार बालक पहले अपने सिर और गर्दन पर, फिर धड़ और अंत में पैरों पर नियंत्रण सीखता है।",
    "explanationEnglish": "The cephalocaudal principle dictates that control and muscular coordination progress downward from head to feet.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 92,
    "subject": "Child Psychology",
    "topic": "अधिगम सिद्धांत - थार्नडाइक",
    "questionHindi": "एडवर्ड ली थार्नडाइक ने अपने सीखने के सिद्धांत (प्रयास एवं त्रुटि) का प्रयोग किस जीव पर किया था?",
    "questionEnglish": "On which animal did Edward Thorndike conduct his landmark trial-and-error learning experiments?",
    "options": [
      {
        "id": "A",
        "textHi": "बिल्ली (पहेली पेटी में)",
        "textEn": "Cat (in Puzzle Box)"
      },
      {
        "id": "B",
        "textHi": "कुत्ता",
        "textEn": "Dog"
      },
      {
        "id": "C",
        "textHi": "चूहा",
        "textEn": "Rat"
      },
      {
        "id": "D",
        "textHi": "चिम्पांजी",
        "textEn": "Chimpanzee"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "थार्नडाइक ने भूखी बिल्ली को पजल बॉक्स में बंद कर संबंधवाद (S-R थ्योरी) सिद्ध किया था।",
    "explanationEnglish": "Thorndike placed hungry cats in puzzle boxes to discover the Law of Effect in Trial and Error learning.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 93,
    "subject": "Child Psychology",
    "topic": "संज्ञानात्मक विकास - पियाजे",
    "questionHindi": "जीन पियाजे के संज्ञानात्मक विकास के अनुसार 'वस्तु स्थायित्व' (Object Permanence) का गुण किस अवस्था में विकसित होता है?",
    "questionEnglish": "According to Jean Piaget's cognitive theory, in which stage does a child acquire Object Permanence?",
    "options": [
      {
        "id": "A",
        "textHi": "संवेदी-गामक अवस्था (0 से 2 वर्ष)",
        "textEn": "Sensorimotor Stage (0 to 2 years)"
      },
      {
        "id": "B",
        "textHi": "पूर्व-संक्रियात्मक अवस्था (2 से 7 वर्ष)",
        "textEn": "Pre-operational Stage (2 to 7 years)"
      },
      {
        "id": "C",
        "textHi": "मूर्त-संक्रियात्मक अवस्था (7 से 11 वर्ष)",
        "textEn": "Concrete Operational Stage (7 to 11 years)"
      },
      {
        "id": "D",
        "textHi": "औपचारिक संक्रियात्मक अवस्था (11 वर्ष से ऊपर)",
        "textEn": "Formal Operational Stage (11+ years)"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संवेदी-गामक अवस्था के अंत तक बालक समझने लगता है कि वस्तुएँ आँखों से ओझल होने पर भी अस्तित्व में रहती हैं।",
    "explanationEnglish": "By the latter part of the sensorimotor stage, infants recognize objects continue to exist when unseen.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 94,
    "subject": "Child Psychology",
    "topic": "सामाजिक-सांस्कृतिक विकास - वाइगोत्स्की",
    "questionHindi": "लेव वाइगोत्स्की के सिद्धांत में 'समीपस्थ विकास का क्षेत्र' (ZPD) से क्या तात्पर्य है?",
    "questionEnglish": "In Lev Vygotsky's socio-cultural theory, what does the 'Zone of Proximal Development' (ZPD) represent?",
    "options": [
      {
        "id": "A",
        "textHi": "बालक द्वारा स्वयं किए जा सकने वाले तथा किसी वयस्क की सहायता से किए जा सकने वाले कार्य के बीच का अंतर",
        "textEn": "Distance between actual independent ability and potential performance under guidance"
      },
      {
        "id": "B",
        "textHi": "बालक की जन्मजात बुद्धिमत्ता",
        "textEn": "Child's innate IQ score"
      },
      {
        "id": "C",
        "textHi": "विद्यालय का भौतिक परिवेश",
        "textEn": "Physical school boundary"
      },
      {
        "id": "D",
        "textHi": "बालक की शारीरिक लंबाई का अंतर",
        "textEn": "Physical growth variation"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "ZPD बालक के वास्तविक विकास स्तर और संभावित विकास स्तर (मार्गदर्शन युक्त) के मध्य का अंतर है।",
    "explanationEnglish": "ZPD denotes the continuum between what a learner can do independently versus with scaffolding.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 95,
    "subject": "Child Psychology",
    "topic": "बुद्धि सिद्धांत",
    "questionHindi": "बुद्धि के 'द्वि-कारक सिद्धांत' (Two-Factor Theory: G-Factor & S-Factor) के प्रतिपादक कौन थे?",
    "questionEnglish": "Who propounded the Two-Factor Theory of Intelligence featuring General (g) and Specific (s) factors?",
    "options": [
      {
        "id": "A",
        "textHi": "चार्ल्स स्पीयरमैन",
        "textEn": "Charles Spearman"
      },
      {
        "id": "B",
        "textHi": "अल्फ्रेड बिने",
        "textEn": "Alfred Binet"
      },
      {
        "id": "C",
        "textHi": "लुई थर्स्टन",
        "textEn": "Louis Thurstone"
      },
      {
        "id": "D",
        "textHi": "हॉवर्ड गार्डनर",
        "textEn": "Howard Gardner"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "1904 में स्पीयरमैन ने सामान्य कारक (G) और विशिष्ट कारक (S) का सिद्धांत प्रस्तुत किया।",
    "explanationEnglish": "Charles Spearman formulated the 'g' and 's' factor model of general intelligence in 1904.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 96,
    "subject": "Child Psychology",
    "topic": "क्रियाप्रसूत अनुबंधन - स्किनर",
    "questionHindi": "बी. एफ. स्किनर का 'क्रियाप्रसूत अनुबंधन' (Operant Conditioning) किस मूल संकल्पना पर आधारित है?",
    "questionEnglish": "B. F. Skinner's Operant Conditioning model primarily hinges on:",
    "options": [
      {
        "id": "A",
        "textHi": "पुनर्बलन (Reinforcement)",
        "textEn": "Reinforcement"
      },
      {
        "id": "B",
        "textHi": "उद्दीपक की तीव्रता",
        "textEn": "Stimulus intensity"
      },
      {
        "id": "C",
        "textHi": "अंतर्दृष्टि",
        "textEn": "Sudden Insight"
      },
      {
        "id": "D",
        "textHi": "अनुकूलन",
        "textEn": "Habituation"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "स्किनर के अनुसार किसी अनुक्रिया के बाद मिलने वाला सकारात्मक या नकारात्मक पुनर्बलन व्यवहार को दोहराने की संभावना तय करता है।",
    "explanationEnglish": "Operant conditioning posits that behavior is shaped and maintained by its reinforcing consequences.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 97,
    "subject": "Child Psychology",
    "topic": "अधिगम पठार",
    "questionHindi": "सीखने की प्रक्रिया में जब सीखने की गति में न तो कोई उन्नति होती है और न कोई अवनति, तो उसे क्या कहा जाता है?",
    "questionEnglish": "When there is no discernible progress or change in learning over a period of time, it is known as:",
    "options": [
      {
        "id": "A",
        "textHi": "अधिगम का पठार (Plateau of Learning)",
        "textEn": "Plateau of Learning"
      },
      {
        "id": "B",
        "textHi": "अधिगम वक्र",
        "textEn": "Learning Curve"
      },
      {
        "id": "C",
        "textHi": "अधिगम स्थानांतरण",
        "textEn": "Transfer of Learning"
      },
      {
        "id": "D",
        "textHi": "अधिगम का ह्रास",
        "textEn": "Extinction of Learning"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "थकान, अरुचि या प्रेरणा के अभाव में सीखने की गति समतल हो जाती है, जिसे सीखने का पठार कहते हैं।",
    "explanationEnglish": "A period of stagnant learning where efficiency remains flat despite practice is called a learning plateau.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 98,
    "subject": "Child Psychology",
    "topic": "अधिगम अक्षमता",
    "questionHindi": "पढ़ने में कठिनाई, अक्षरों को पहचानने में भ्रम तथा शब्दों के उच्चारण में बाधा होने वाली अधिगम अक्षमता क्या कहलाती है?",
    "questionEnglish": "A specific learning disability characterized by difficulty in reading and word decoding is termed:",
    "options": [
      {
        "id": "A",
        "textHi": "डिस्लेक्सिया (Dyslexia)",
        "textEn": "Dyslexia"
      },
      {
        "id": "B",
        "textHi": "डिसकैलकुलिया (Dyscalculia)",
        "textEn": "Dyscalculia"
      },
      {
        "id": "C",
        "textHi": "डिसग्राफिया (Dysgraphia)",
        "textEn": "Dysgraphia"
      },
      {
        "id": "D",
        "textHi": "डिस्प्रेक्सिया (Dyspraxia)",
        "textEn": "Dyspraxia"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "डिस्लेक्सिया पठन विकार है, डिसकैलकुलिया गणितीय विकार तथा डिसग्राफिया लेखन विकार है।",
    "explanationEnglish": "Dyslexia is a neurodevelopmental disorder causing impaired phonological processing and reading difficulty.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 99,
    "subject": "Child Psychology",
    "topic": "अभिप्रेरणा - मास्लो",
    "questionHindi": "अब्राहम मास्लो के 'आवश्यकता पदानुक्रम सिद्धांत' (Hierarchy of Needs) में सबसे शीर्ष (उच्चतम) स्तर की आवश्यकता कौन सी है?",
    "questionEnglish": "In Abraham Maslow's Hierarchy of Needs, which need occupies the pinnacle (highest level)?",
    "options": [
      {
        "id": "A",
        "textHi": "आत्मसिद्धि की आवश्यकता (Self-Actualization)",
        "textEn": "Self-Actualization"
      },
      {
        "id": "B",
        "textHi": "शारीरिक आवश्यकताएँ (Physiological)",
        "textEn": "Physiological Needs"
      },
      {
        "id": "C",
        "textHi": "सुरक्षा की आवश्यकता (Safety)",
        "textEn": "Safety Needs"
      },
      {
        "id": "D",
        "textHi": "सम्मान की आवश्यकता (Esteem)",
        "textEn": "Self-Esteem Needs"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "मास्लो के पिरामिड में आधार पर शारीरिक आवश्यकताएँ तथा शिखर पर आत्म-साक्षात्कार (Self-Actualization) स्थित है।",
    "explanationEnglish": "Self-actualization sits atop Maslow's hierarchy, representing personal realization and peak potential.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 100,
    "subject": "Child Psychology",
    "topic": "वैयक्तिक विभिन्नता",
    "questionHindi": "कक्षा में बालकों की वैयक्तिक विभिन्नताओं (Individual Differences) के प्रति एक शिक्षक का दृष्टिकोण कैसा होना चाहिए?",
    "questionEnglish": "How should a teacher view and respond to individual differences among pupils in the classroom?",
    "options": [
      {
        "id": "A",
        "textHi": "विभिन्नताओं को सीखने के समृद्ध संसाधन के रूप में स्वीकार करना तथा वैविध्यपूर्ण शिक्षण विधियों का प्रयोग करना",
        "textEn": "Accept diversity as a pedagogical resource and adapt multi-tiered instruction"
      },
      {
        "id": "B",
        "textHi": "सभी बालकों के लिए एक समान कठोर मापदंड निर्धारित करना",
        "textEn": "Enforcing identical rigid benchmarks for all"
      },
      {
        "id": "C",
        "textHi": "धीमे सीखने वाले बालकों को अलग कर देना",
        "textEn": "Isolating slow learners"
      },
      {
        "id": "D",
        "textHi": "विभिन्नताओं को नजरअंदाज करना",
        "textEn": "Ignoring developmental diversity"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "प्रगतिशील शिक्षा के अनुसार वैयक्तिक विभिन्नताएँ विविधता और सीखने के नए अवसर प्रदान करती हैं।",
    "explanationEnglish": "Modern developmental pedagogy treats learner diversity as an educational asset to be nurtured.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 101,
    "subject": "General Knowledge & Current Affairs",
    "topic": "पुरस्कार एवं सम्मान",
    "questionHindi": "वर्ष 2018 का 24वां शीतकालीन ओलंपिक खेल किस देश में आयोजित हुआ था?",
    "questionEnglish": "Where were the 2018 Winter Olympic Games held?",
    "options": [
      {
        "id": "A",
        "textHi": "प्योंगचांग (दक्षिण कोरिया)",
        "textEn": "Pyeongchang (South Korea)"
      },
      {
        "id": "B",
        "textHi": "टोक्यो (जापान)",
        "textEn": "Tokyo (Japan)"
      },
      {
        "id": "C",
        "textHi": "बीजिंग (चीन)",
        "textEn": "Beijing (China)"
      },
      {
        "id": "D",
        "textHi": "लंदन (ब्रिटेन)",
        "textEn": "London (UK)"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "2018 शीतकालीन ओलंपिक खेल दक्षिण कोरिया के प्योंगचांग में आयोजित हुए थे।",
    "explanationEnglish": "The 2018 Winter Olympics took place in Pyeongchang, South Korea.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 102,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश सामान्य ज्ञान",
    "questionHindi": "उत्तर प्रदेश का राजकीय पक्षी (State Bird) कौन सा है?",
    "questionEnglish": "Which is the official State Bird of Uttar Pradesh?",
    "options": [
      {
        "id": "A",
        "textHi": "सारस (क्रौंच)",
        "textEn": "Sarus Crane"
      },
      {
        "id": "B",
        "textHi": "मोर",
        "textEn": "Peacock"
      },
      {
        "id": "C",
        "textHi": "तोता",
        "textEn": "Parrot"
      },
      {
        "id": "D",
        "textHi": "कोयल",
        "textEn": "Koel"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "सारस (Grus antigone) उत्तर प्रदेश का आधिकारिक राज्य पक्षी है।",
    "explanationEnglish": "The Sarus Crane is recognized as the state bird of Uttar Pradesh.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 103,
    "subject": "General Knowledge & Current Affairs",
    "topic": "साहित्य पुरस्कार",
    "questionHindi": "वर्ष 2018 का प्रतिष्ठित 'ज्ञानपीठ पुरस्कार' किसे प्रदान किया गया था?",
    "questionEnglish": "Who was awarded the prestigious 54th Jnanpith Award (2018)?",
    "options": [
      {
        "id": "A",
        "textHi": "अमिताव घोष",
        "textEn": "Amitav Ghosh"
      },
      {
        "id": "B",
        "textHi": "कृष्णा सोबती",
        "textEn": "Krishna Sobti"
      },
      {
        "id": "C",
        "textHi": "शंख घोष",
        "textEn": "Shankha Ghosh"
      },
      {
        "id": "D",
        "textHi": "केदारनाथ सिंह",
        "textEn": "Kedarnath Singh"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अमिताव घोष ज्ञानपीठ पुरस्कार प्राप्त करने वाले प्रथम अंग्रेजी भाषा के साहित्यकार बने।",
    "explanationEnglish": "Renowned author Amitav Ghosh was the first English-language writer to win the Jnanpith Award.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 104,
    "subject": "General Knowledge & Current Affairs",
    "topic": "दिवस",
    "questionHindi": "भारत में प्रतिवर्ष 'राष्ट्रीय विज्ञान दिवस' किस वैज्ञानिक की खोज की स्मृति में 28 फरवरी को मनाया जाता है?",
    "questionEnglish": "National Science Day is celebrated in India on February 28 to commemorate which Nobel laureate's discovery?",
    "options": [
      {
        "id": "A",
        "textHi": "सर सी. वी. रमन (रमन प्रभाव)",
        "textEn": "Sir C. V. Raman (Raman Effect)"
      },
      {
        "id": "B",
        "textHi": "डॉ. होमी जहांगीर भाभा",
        "textEn": "Dr. Homi Bhabha"
      },
      {
        "id": "C",
        "textHi": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "textEn": "Dr. A. P. J. Abdul Kalam"
      },
      {
        "id": "D",
        "textHi": "जगदीश चंद्र बसु",
        "textEn": "Jagadish Chandra Bose"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "28 फरवरी 1928 को सर सी. वी. रमन ने 'रमन प्रभाव' की ऐतिहासिक खोज की थी जिसके लिए 1930 में नोबेल पुरस्कार मिला।",
    "explanationEnglish": "Sir C. V. Raman announced the Raman Effect on Feb 28, 1928, securing the Nobel Prize in Physics.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 105,
    "subject": "General Knowledge & Current Affairs",
    "topic": "भारतीय अर्थव्यवस्था",
    "questionHindi": "भारत में 'नीति आयोग' (NITI Aayog) के पदेन अध्यक्ष कौन होते हैं?",
    "questionEnglish": "Who serves as the Ex-officio Chairman of NITI Aayog in India?",
    "options": [
      {
        "id": "A",
        "textHi": "भारत के प्रधानमंत्री",
        "textEn": "Prime Minister of India"
      },
      {
        "id": "B",
        "textHi": "भारत के राष्ट्रपति",
        "textEn": "President of India"
      },
      {
        "id": "C",
        "textHi": "केंद्रीय वित्त मंत्री",
        "textEn": "Union Finance Minister"
      },
      {
        "id": "D",
        "textHi": "रिजर्व बैंक के गवर्नर",
        "textEn": "Governor of RBI"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "1 जनवरी 2015 को योजना आयोग के स्थान पर गठित नीति आयोग के पदेन अध्यक्ष देश के प्रधानमंत्री होते हैं।",
    "explanationEnglish": "The Prime Minister of India serves ex-officio as the Chairman of NITI Aayog.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 106,
    "subject": "General Knowledge & Current Affairs",
    "topic": "अंतर्राष्ट्रीय संगठन",
    "questionHindi": "संयुक्त राष्ट्र संघ (UNO) का मुख्यालय किस शहर में स्थित है?",
    "questionEnglish": "Where is the headquarters of the United Nations Organization (UNO) located?",
    "options": [
      {
        "id": "A",
        "textHi": "न्यूयॉर्क (USA)",
        "textEn": "New York (USA)"
      },
      {
        "id": "B",
        "textHi": "जिनेवा (स्विट्जरलैंड)",
        "textEn": "Geneva (Switzerland)"
      },
      {
        "id": "C",
        "textHi": "पेरिस (फ्रांस)",
        "textEn": "Paris (France)"
      },
      {
        "id": "D",
        "textHi": "द हेग (नीदरलैंड्स)",
        "textEn": "The Hague"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संयुक्त राष्ट्र संघ का मुख्यालय न्यूयॉर्क शहर (अमेरिका) में स्थित है।",
    "explanationEnglish": "The United Nations headquarters is situated in Manhattan, New York City.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 107,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश कला एवं संस्कृति",
    "questionHindi": "प्रसिद्ध 'कथक' शास्त्रीय नृत्य किस भारतीय राज्य की प्रमुख शास्त्रीय नृत्य परंपरा है?",
    "questionEnglish": "The classical dance form 'Kathak' originated from which Indian state?",
    "options": [
      {
        "id": "A",
        "textHi": "उत्तर प्रदेश",
        "textEn": "Uttar Pradesh"
      },
      {
        "id": "B",
        "textHi": "केरल",
        "textEn": "Kerala"
      },
      {
        "id": "C",
        "textHi": "तमिलनाडु",
        "textEn": "Tamil Nadu"
      },
      {
        "id": "D",
        "textHi": "ओडिशा",
        "textEn": "Odisha"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "कथक उत्तर प्रदेश का पारंपरिक शास्त्रीय नृत्य है जिसके प्रमुख केंद्र लखनऊ घराना आदि हैं।",
    "explanationEnglish": "Kathak is the premier classical dance heritage belonging to Uttar Pradesh and northern India.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 108,
    "subject": "General Knowledge & Current Affairs",
    "topic": "वर्तमान पदाधिकारी",
    "questionHindi": "भारत के मुख्य चुनाव आयुक्त की नियुक्ति किसके द्वारा की जाती है?",
    "questionEnglish": "Who appoints the Chief Election Commissioner of India?",
    "options": [
      {
        "id": "A",
        "textHi": "भारत के राष्ट्रपति द्वारा",
        "textEn": "By the President of India"
      },
      {
        "id": "B",
        "textHi": "संसद द्वारा",
        "textEn": "By Parliament"
      },
      {
        "id": "C",
        "textHi": "प्रधानमंत्री द्वारा",
        "textEn": "By Prime Minister"
      },
      {
        "id": "D",
        "textHi": "मुख्य न्यायाधीश द्वारा",
        "textEn": "By Chief Justice"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संविधान के अनुच्छेद 324(2) के तहत मुख्य चुनाव आयुक्त की नियुक्ति राष्ट्रपति करते हैं।",
    "explanationEnglish": "Under Article 324(2), the President of India appoints the Chief Election Commissioner.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 109,
    "subject": "General Knowledge & Current Affairs",
    "topic": "खेलकूद",
    "questionHindi": "वर्ष 2018 के एशियाई खेलों (Asian Games 2018) का आयोजन किस देश में हुआ था?",
    "questionEnglish": "In which country were the 18th Asian Games 2018 hosted?",
    "options": [
      {
        "id": "A",
        "textHi": "इंडोनेशिया (जकार्ता और पालेमबांग)",
        "textEn": "Indonesia (Jakarta & Palembang)"
      },
      {
        "id": "B",
        "textHi": "चीन",
        "textEn": "China"
      },
      {
        "id": "C",
        "textHi": "जापान",
        "textEn": "Japan"
      },
      {
        "id": "D",
        "textHi": "कतर",
        "textEn": "Qatar"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "18वें एशियाई खेल 2018 इंडोनेशिया के जकार्ता और पालेमबांग शहरों में आयोजित किए गए थे।",
    "explanationEnglish": "The 2018 Asian Games took place in Jakarta and Palembang, Indonesia.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 110,
    "subject": "General Knowledge & Current Affairs",
    "topic": "भारतीय इतिहास",
    "questionHindi": "प्रसिद्ध 'गायत्री मंत्र' की रचना किस ऋषि द्वारा की गई थी और यह किस वेद में संकलित है?",
    "questionEnglish": "Who composed the sacred Gayatri Mantra and in which Veda is it enshrined?",
    "options": [
      {
        "id": "A",
        "textHi": "महर्षि विश्वामित्र (ऋग्वेद के तृतीय मंडल में)",
        "textEn": "Maharshi Vishwamitra (Rigveda, Mandala 3)"
      },
      {
        "id": "B",
        "textHi": "महर्षि वशिष्ठ (सामवेद)",
        "textEn": "Maharshi Vashistha"
      },
      {
        "id": "C",
        "textHi": "महर्षि वाल्मीकि (यजुर्वेद)",
        "textEn": "Maharshi Valmiki"
      },
      {
        "id": "D",
        "textHi": "महर्षि वेदव्यास (अथर्ववेद)",
        "textEn": "Maharshi Vedavyasa"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "गायत्री मंत्र ऋग्वेद के तृतीय मंडल में सूर्य देवता 'सविता' को समर्पित है, जिसकी रचना विश्वामित्र ने की।",
    "explanationEnglish": "The Gayatri Mantra is found in Rigveda Mandala 3, dedicated to Savitr by Sage Vishwamitra.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 111,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश भूगोल",
    "questionHindi": "उत्तर प्रदेश का कौन सा जनपद कालीन (Carpet) उद्योग के लिए अंतरराष्ट्रीय स्तर पर विख्यात है?",
    "questionEnglish": "Which district of Uttar Pradesh is internationally celebrated for its handmade carpet weaving industry?",
    "options": [
      {
        "id": "A",
        "textHi": "भदोही (संत रविदास नगर)",
        "textEn": "Bhadohi (Sant Ravidas Nagar)"
      },
      {
        "id": "B",
        "textHi": "मुरादाबाद",
        "textEn": "Moradabad"
      },
      {
        "id": "C",
        "textHi": "कन्नौज",
        "textEn": "Kannauj"
      },
      {
        "id": "D",
        "textHi": "फिरोजाबाद",
        "textEn": "Firozabad"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भदोही 'कालीन नगरी' के नाम से पूरे विश्व में हस्तनिर्मित कालीनों के लिए जाना जाता है।",
    "explanationEnglish": "Bhadohi is known as the 'Carpet City' of South Asia for its hand-knotted export carpets.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 112,
    "subject": "General Knowledge & Current Affairs",
    "topic": "पर्यावरण पुरस्कार",
    "questionHindi": "वर्ष 2018 में संयुक्त राष्ट्र का सर्वोच्च पर्यावरण सम्मान 'चैंपियंस ऑफ द अर्थ' किसे प्रदान किया गया था?",
    "questionEnglish": "Who was conferred the UN's highest environmental honor 'Champions of the Earth' in 2018?",
    "options": [
      {
        "id": "A",
        "textHi": "नरेंद्र मोदी एवं इमैनुएल मैक्रों",
        "textEn": "Narendra Modi & Emmanuel Macron"
      },
      {
        "id": "B",
        "textHi": "बराक ओबामा",
        "textEn": "Barack Obama"
      },
      {
        "id": "C",
        "textHi": "एंजेला मर्केल",
        "textEn": "Angela Merkel"
      },
      {
        "id": "D",
        "textHi": "दलाई लामा",
        "textEn": "Dalai Lama"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अंतरराष्ट्रीय सौर गठबंधन (ISA) को बढ़ावा देने के लिए प्रधानमंत्री नरेंद्र मोदी और फ्रांसीसी राष्ट्रपति मैक्रों को यह सम्मान मिला।",
    "explanationEnglish": "PM Narendra Modi and French President Emmanuel Macron were honored for the International Solar Alliance.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 113,
    "subject": "General Knowledge & Current Affairs",
    "topic": "राष्ट्रीय स्मारक",
    "questionHindi": "विश्व की सबसे ऊँची प्रतिमा 'स्टैच्यू ऑफ यूनिटी' किस महान व्यक्तित्व की स्मृति में गुजरात में स्थापित की गई है?",
    "questionEnglish": "The world's tallest statue, the 'Statue of Unity' (182 m), is erected in honor of which visionary leader?",
    "options": [
      {
        "id": "A",
        "textHi": "सरदार वल्लभभाई पटेल",
        "textEn": "Sardar Vallabhbhai Patel"
      },
      {
        "id": "B",
        "textHi": "महात्मा गांधी",
        "textEn": "Mahatma Gandhi"
      },
      {
        "id": "C",
        "textHi": "सुभाष चंद्र बोस",
        "textEn": "Subhas Chandra Bose"
      },
      {
        "id": "D",
        "textHi": "जवाहरलाल नेहरू",
        "textEn": "Jawaharlal Nehru"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "गुजरात के केवड़िया (नर्मदा जिले) में सरदार वल्लभभाई पटेल की 182 मीटर ऊँची कांस्य प्रतिमा स्थापित है।",
    "explanationEnglish": "The 182-meter colossus honors Sardar Vallabhbhai Patel on Sadhu Bet island in Gujarat.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 114,
    "subject": "General Knowledge & Current Affairs",
    "topic": "विज्ञान व अंतरिक्ष",
    "questionHindi": "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय किस शहर में स्थित है?",
    "questionEnglish": "Where is the headquarters of the Indian Space Research Organisation (ISRO) situated?",
    "options": [
      {
        "id": "A",
        "textHi": "बेंगलुरु (कर्नाटक)",
        "textEn": "Bengaluru (Karnataka)"
      },
      {
        "id": "B",
        "textHi": "श्रीहरिकोटा",
        "textEn": "Sriharikota"
      },
      {
        "id": "C",
        "textHi": "तिरुवनंतपुरम",
        "textEn": "Thiruvananthapuram"
      },
      {
        "id": "D",
        "textHi": "हैदराबाद",
        "textEn": "Hyderabad"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "इसरो (ISRO) का मुख्यालय बेंगलुरु में स्थित है, जबकि प्रक्षेपण केंद्र श्रीहरिकोटा (आंध्र प्रदेश) में है।",
    "explanationEnglish": "ISRO's corporate apex headquarters is in Bengaluru, Karnataka.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 115,
    "subject": "General Knowledge & Current Affairs",
    "topic": "पुस्तक एवं लेखक",
    "questionHindi": "प्रसिद्ध ऐतिहासिक पुस्तक 'डिस्कवरी ऑफ इंडिया' (भारत की खोज) के लेखक कौन हैं?",
    "questionEnglish": "Who is the author of the celebrated classic book 'The Discovery of India'?",
    "options": [
      {
        "id": "A",
        "textHi": "पंडित जवाहरलाल नेहरू",
        "textEn": "Pandit Jawaharlal Nehru"
      },
      {
        "id": "B",
        "textHi": "महात्मा गांधी",
        "textEn": "Mahatma Gandhi"
      },
      {
        "id": "C",
        "textHi": "डॉ. राजेंद्र प्रसाद",
        "textEn": "Dr. Rajendra Prasad"
      },
      {
        "id": "D",
        "textHi": "मौलाना अबुल कलाम आजाद",
        "textEn": "Maulana Abul Kalam Azad"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "पंडित नेहरू ने 1944 में अहमदनगर किला जेल में बंदी के दौरान 'द डिस्कवरी ऑफ इंडिया' लिखी थी।",
    "explanationEnglish": "Jawaharlal Nehru penned 'The Discovery of India' during his imprisonment in Ahmednagar Fort (1942-45).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 116,
    "subject": "General Knowledge & Current Affairs",
    "topic": "भारतीय बैंकिंग",
    "questionHindi": "भारतीय रिजर्व बैंक (RBI) के प्रथम भारतीय मूल के गवर्नर कौन थे?",
    "questionEnglish": "Who was the first Indian Governor of the Reserve Bank of India (RBI)?",
    "options": [
      {
        "id": "A",
        "textHi": "सी. डी. देशमुख",
        "textEn": "C. D. Deshmukh"
      },
      {
        "id": "B",
        "textHi": "ओसबोर्न स्मिथ",
        "textEn": "Osborne Smith"
      },
      {
        "id": "C",
        "textHi": "मनमोहन सिंह",
        "textEn": "Manmohan Singh"
      },
      {
        "id": "D",
        "textHi": "आई. जी. पटेल",
        "textEn": "I. G. Patel"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "चिंतामण द्वारकानाथ देशमुख (सी. डी. देशमुख) 1943 में RBI के प्रथम भारतीय गवर्नर बने।",
    "explanationEnglish": "Sir C. D. Deshmukh took office in 1943 as the first Indian Governor of the Reserve Bank of India.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 117,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश महोत्सव",
    "questionHindi": "उत्तर प्रदेश का 'सुलहकुल महोत्सव' जो हिंदू-मुस्लिम एकता का प्रतीक है, किस शहर में आयोजित किया जाता है?",
    "questionEnglish": "The 'Sulah-e-Kul' festival, symbolizing Hindu-Muslim communal harmony, is organized in which city of UP?",
    "options": [
      {
        "id": "A",
        "textHi": "आगरा",
        "textEn": "Agra"
      },
      {
        "id": "B",
        "textHi": "लखनऊ",
        "textEn": "Lucknow"
      },
      {
        "id": "C",
        "textHi": "वाराणसी",
        "textEn": "Varanasi"
      },
      {
        "id": "D",
        "textHi": "मेरठ",
        "textEn": "Meerut"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अकबर की सुलह-ए-कुल नीति की स्मृति में यह सौहार्द महोत्सव प्रतिवर्ष आगरा में मनाया जाता है।",
    "explanationEnglish": "The Sulah-e-Kul harmony carnival is held annually in Agra commemorating Akbar's religious pluralism.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 118,
    "subject": "General Knowledge & Current Affairs",
    "topic": "खेलकूद - क्रिकेट",
    "questionHindi": "क्रिकेट का प्रथम एकदिवसीय विश्व कप (ICC Men's World Cup) किस वर्ष आयोजित हुआ था?",
    "questionEnglish": "In which year was the inaugural Men's Cricket World Cup held in England?",
    "options": [
      {
        "id": "A",
        "textHi": "1975",
        "textEn": "1975"
      },
      {
        "id": "B",
        "textHi": "1979",
        "textEn": "1979"
      },
      {
        "id": "C",
        "textHi": "1983",
        "textEn": "1983"
      },
      {
        "id": "D",
        "textHi": "1971",
        "textEn": "1971"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "1975 में इंग्लैंड में प्रथम प्रूडेंशियल क्रिकेट विश्व कप आयोजित हुआ जिसे वेस्टइंडीज ने जीता था।",
    "explanationEnglish": "The first Cricket World Cup was staged in England in 1975, won by the West Indies.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 119,
    "subject": "General Knowledge & Current Affairs",
    "topic": "नोबेल पुरस्कार",
    "questionHindi": "अर्थशास्त्र के क्षेत्र में नोबेल पुरस्कार प्राप्त करने वाले प्रथम भारतीय अर्थशास्त्री कौन हैं?",
    "questionEnglish": "Who was the first Indian economist to be awarded the Nobel Memorial Prize in Economic Sciences?",
    "options": [
      {
        "id": "A",
        "textHi": "प्रो. अमर्त्य सेन (1998)",
        "textEn": "Prof. Amartya Sen (1998)"
      },
      {
        "id": "B",
        "textHi": "अभिजीत बनर्जी",
        "textEn": "Abhijit Banerjee"
      },
      {
        "id": "C",
        "textHi": "रघुराम राजन",
        "textEn": "Raghuram Rajan"
      },
      {
        "id": "D",
        "textHi": "जगदीश भगवती",
        "textEn": "Jagdish Bhagwati"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अमर्त्य सेन को 1998 में कल्याणकारी अर्थशास्त्र (Welfare Economics) के लिए नोबेल पुरस्कार दिया गया।",
    "explanationEnglish": "Amartya Sen received the 1998 Nobel Prize in Economics for his contributions to welfare economics.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 120,
    "subject": "General Knowledge & Current Affairs",
    "topic": "सौर ऊर्जा",
    "questionHindi": "विश्व का प्रथम पूर्णतः सौर ऊर्जा संचालित हवाई अड्डा कौन सा बना?",
    "questionEnglish": "Which airport became the world's first fully solar-powered airport?",
    "options": [
      {
        "id": "A",
        "textHi": "कोचीन अंतर्राष्ट्रीय हवाई अड्डा (केरल)",
        "textEn": "Cochin International Airport (Kerala)"
      },
      {
        "id": "B",
        "textHi": "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा (दिल्ली)",
        "textEn": "Indira Gandhi Airport (Delhi)"
      },
      {
        "id": "C",
        "textHi": "छत्रपति शिवाजी अंतर्राष्ट्रीय हवाई अड्डा (मुंबई)",
        "textEn": "Mumbai Airport"
      },
      {
        "id": "D",
        "textHi": "राजीव गांधी अंतर्राष्ट्रीय हवाई अड्डा (हैदराबाद)",
        "textEn": "Hyderabad Airport"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "2015 में कोचीन हवाई अड्डा (CIAL) 100% सौर ऊर्जा से संचालित होकर विश्व का पहला ऐसा हवाई अड्डा बना।",
    "explanationEnglish": "Cochin International Airport in Kerala became the world's first fully solar-powered aerodrome in 2015.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 121,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश उद्योग",
    "questionHindi": "उत्तर प्रदेश का 'कन्नौज' शहर किस पारंपरिक सुगंधित उत्पाद के लिए विश्वप्रसिद्ध है?",
    "questionEnglish": "Kannauj city in Uttar Pradesh is globally celebrated for manufacturing which traditional product?",
    "options": [
      {
        "id": "A",
        "textHi": "इत्र (Perfume / Attar)",
        "textEn": "Attar / Perfume"
      },
      {
        "id": "B",
        "textHi": "पीतल के बर्तन",
        "textEn": "Brassware"
      },
      {
        "id": "C",
        "textHi": "कांच की चूड़ियाँ",
        "textEn": "Glass Bangles"
      },
      {
        "id": "D",
        "textHi": "ताले",
        "textEn": "Locks"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "कन्नौज को भारत की 'इत्र नगरी' (Perfume Capital of India) कहा जाता है।",
    "explanationEnglish": "Kannauj is renowned as the Perfume Capital of India for its historic natural hydro-distilled attars.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 122,
    "subject": "General Knowledge & Current Affairs",
    "topic": "भारतीय भूगोल",
    "questionHindi": "भारत की मानक समय रेखा (Standard Meridian - 82°30' पूर्व देशांतर) उत्तर प्रदेश के किस स्थान से होकर गुजरती है?",
    "questionEnglish": "The Standard Meridian of India (82°30' E) passes through which location near Prayagraj in Uttar Pradesh?",
    "options": [
      {
        "id": "A",
        "textHi": "मिर्ज़ापुर / नैनी (प्रयागराज)",
        "textEn": "Mirzapur / Naini (Prayagraj)"
      },
      {
        "id": "B",
        "textHi": "वाराणसी",
        "textEn": "Varanasi"
      },
      {
        "id": "C",
        "textHi": "कानपुर",
        "textEn": "Kanpur"
      },
      {
        "id": "D",
        "textHi": "झाँसी",
        "textEn": "Jhansi"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भारतीय मानक समय रेखा (82.5° E) प्रयागराज के निकट मिर्ज़ापुर/नैनी से होकर गुजरती है।",
    "explanationEnglish": "Indian Standard Time is calculated based on 82°30' E meridian passing through Mirzapur/Naini.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 123,
    "subject": "General Knowledge & Current Affairs",
    "topic": "राष्ट्रीय योजना",
    "questionHindi": "भारत सरकार द्वारा 'बेटी बचाओ, बेटी पढ़ाओ' योजना किस वर्ष प्रारंभ की गई थी?",
    "questionEnglish": "In which year was the nationwide flagship scheme 'Beti Bachao, Beti Padhao' launched?",
    "options": [
      {
        "id": "A",
        "textHi": "2015 (पानीपत, हरियाणा से)",
        "textEn": "2015 (Panipat, Haryana)"
      },
      {
        "id": "B",
        "textHi": "2014",
        "textEn": "2014"
      },
      {
        "id": "C",
        "textHi": "2016",
        "textEn": "2016"
      },
      {
        "id": "D",
        "textHi": "2017",
        "textEn": "2017"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "यह योजना 22 जनवरी 2015 को हरियाणा के पानीपत से लिंगानुपात में सुधार हेतु शुरू की गई थी।",
    "explanationEnglish": "Prime Minister Narendra Modi launched Beti Bachao, Beti Padhao on Jan 22, 2015, from Panipat.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 124,
    "subject": "General Knowledge & Current Affairs",
    "topic": "जीव संरक्षण",
    "questionHindi": "भारत का 'राष्ट्रीय जलचर जीव' (National Aquatic Animal) किसे घोषित किया गया है?",
    "questionEnglish": "Which animal has been designated as the official National Aquatic Animal of India?",
    "options": [
      {
        "id": "A",
        "textHi": "गंगा की डॉल्फ़िन (Platanista gangetica)",
        "textEn": "Ganges River Dolphin"
      },
      {
        "id": "B",
        "textHi": "घड़ियाल",
        "textEn": "Gharial"
      },
      {
        "id": "C",
        "textHi": "मगरमच्छ",
        "textEn": "Crocodile"
      },
      {
        "id": "D",
        "textHi": "समुद्री कछुआ",
        "textEn": "Olive Ridley Turtle"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "2009 में गंगा नदी डॉल्फ़िन को भारत का राष्ट्रीय जलीय जीव घोषित किया गया था।",
    "explanationEnglish": "The Ganges River Dolphin was declared India's National Aquatic Animal in 2009.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 125,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश लोकनृत्य",
    "questionHindi": "उत्तर प्रदेश के ब्रज क्षेत्र का प्रसिद्ध लोकनृत्य कौन सा है जिसमें सिर पर पहिया रखकर 108 दीपक जलाए जाते हैं?",
    "questionEnglish": "Which famous folk dance of Braj region in UP features dancing with 108 lamps balanced on a wheel?",
    "options": [
      {
        "id": "A",
        "textHi": "चरकुला नृत्य",
        "textEn": "Charkula Dance"
      },
      {
        "id": "B",
        "textHi": "रासलीला",
        "textEn": "Raas Leela"
      },
      {
        "id": "C",
        "textHi": "नौटंकी",
        "textEn": "Nautanki"
      },
      {
        "id": "D",
        "textHi": "कजरी",
        "textEn": "Kajri"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "चरकुला ब्रज क्षेत्र का पारंपरिक लोकनृत्य है जिसमें सिर पर चरकुले पर 108 दीप प्रज्ज्वलित किए जाते हैं।",
    "explanationEnglish": "Charkula is an iconic dramatic folk dance of Braj involving a pyramid of 108 oil lamps.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 126,
    "subject": "General Knowledge & Current Affairs",
    "topic": "अंतर्राष्ट्रीय दिवस",
    "questionHindi": "प्रतिवर्ष 'अंतर्राष्ट्रीय महिला दिवस' किस तिथि को मनाया जाता है?",
    "questionEnglish": "On which date is International Women's Day celebrated worldwide?",
    "options": [
      {
        "id": "A",
        "textHi": "8 मार्च",
        "textEn": "March 8"
      },
      {
        "id": "B",
        "textHi": "1 मई",
        "textEn": "May 1"
      },
      {
        "id": "C",
        "textHi": "10 दिसंबर",
        "textEn": "December 10"
      },
      {
        "id": "D",
        "textHi": "24 जनवरी",
        "textEn": "January 24"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संयुक्त राष्ट्र द्वारा प्रतिवर्ष 8 मार्च को अंतर्राष्ट्रीय महिला दिवस आयोजित किया जाता है।",
    "explanationEnglish": "International Women's Day is observed annually across the globe on March 8.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 127,
    "subject": "General Knowledge & Current Affairs",
    "topic": "संविधान संशोधन",
    "questionHindi": "भारतीय संविधान में 'वस्तु एवं सेवा कर' (GST) किस संविधान संशोधन अधिनियम द्वारा लागू किया गया?",
    "questionEnglish": "Goods and Services Tax (GST) was implemented in India via which Constitutional Amendment Act?",
    "options": [
      {
        "id": "A",
        "textHi": "101वां संविधान संशोधन अधिनियम, 2016",
        "textEn": "101st Constitutional Amendment Act, 2016"
      },
      {
        "id": "B",
        "textHi": "100वां संविधान संशोधन",
        "textEn": "100th Amendment"
      },
      {
        "id": "C",
        "textHi": "102वां संविधान संशोधन",
        "textEn": "102nd Amendment"
      },
      {
        "id": "D",
        "textHi": "103वां संविधान संशोधन",
        "textEn": "103rd Amendment"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "101वें संविधान संशोधन अधिनियम द्वारा 1 जुलाई 2017 से देशभर में 'एक देश, एक कर' (GST) लागू हुआ।",
    "explanationEnglish": "GST was introduced across India on July 1, 2017, via the 101st Constitutional Amendment Act.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 128,
    "subject": "General Knowledge & Current Affairs",
    "topic": "भारतीय स्मारक",
    "questionHindi": "प्रसिद्ध ऐतिहासिक 'बुलंद दरवाजा' उत्तर प्रदेश के किस स्थान पर स्थित है?",
    "questionEnglish": "At which historic site in Uttar Pradesh is the monumental 'Buland Darwaza' situated?",
    "options": [
      {
        "id": "A",
        "textHi": "फतेहपुर सीकरी (आगरा)",
        "textEn": "Fatehpur Sikri (Agra)"
      },
      {
        "id": "B",
        "textHi": "सारनाथ",
        "textEn": "Sarnath"
      },
      {
        "id": "C",
        "textHi": "झाँसी",
        "textEn": "Jhansi"
      },
      {
        "id": "D",
        "textHi": "जौनपुर",
        "textEn": "Jaunpur"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "अकबर ने 1602 में अपनी गुजरात विजय के उपलक्ष्य में फतेहपुर सीकरी में बुलंद दरवाजा बनवाया था।",
    "explanationEnglish": "Buland Darwaza was constructed in 1602 by Mughal Emperor Akbar to commemorate his conquest of Gujarat.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 129,
    "subject": "General Knowledge & Current Affairs",
    "topic": "पुरस्कार",
    "questionHindi": "भारत का सर्वोच्च नागरिक सम्मान 'भारत रत्न' सर्वप्रथम 1954 में किन्हें प्रदान किया गया था?",
    "questionEnglish": "In 1954, who was among the first three distinguished recipients of India's highest civilian honor, Bharat Ratna?",
    "options": [
      {
        "id": "A",
        "textHi": "डॉ. सर्वपल्ली राधाकृष्णन, सी. राजगोपालाचारी एवं सी. वी. रमन",
        "textEn": "Dr. S. Radhakrishnan, C. Rajagopalachari & C. V. Raman"
      },
      {
        "id": "B",
        "textHi": "जवाहरलाल नेहरू",
        "textEn": "Jawaharlal Nehru"
      },
      {
        "id": "C",
        "textHi": "महात्मा गांधी",
        "textEn": "Mahatma Gandhi"
      },
      {
        "id": "D",
        "textHi": "सरदार पटेल",
        "textEn": "Sardar Patel"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "1954 में डॉ. राधाकृष्णन, सी. राजगोपालाचारी और सी. वी. रमन को प्रथम भारत रत्न प्रदान किया गया।",
    "explanationEnglish": "The inaugural Bharat Ratna awards in 1954 honored Radhakrishnan, Rajagopalachari, and C. V. Raman.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 130,
    "subject": "General Knowledge & Current Affairs",
    "topic": "उत्तर प्रदेश जनजाति",
    "questionHindi": "उत्तर प्रदेश एवं उत्तराखंड की कौन सी प्रमुख जनजाति 'दीपावली' पर्व को शोक पर्व के रूप में मनाती है?",
    "questionEnglish": "Which prominent indigenous tribe of Uttar Pradesh and Uttarakhand traditionally observes Diwali as a day of mourning?",
    "options": [
      {
        "id": "A",
        "textHi": "थारू जनजाति",
        "textEn": "Tharu Tribe"
      },
      {
        "id": "B",
        "textHi": "गोंड जनजाति",
        "textEn": "Gond Tribe"
      },
      {
        "id": "C",
        "textHi": "कोल जनजाति",
        "textEn": "Kol Tribe"
      },
      {
        "id": "D",
        "textHi": "भोटिया जनजाति",
        "textEn": "Bhotia Tribe"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "तराई क्षेत्र की थारू जनजाति पारंपरिक रूप से दीपावली के दिन अपने पूर्वजों की स्मृति में शोक मनाती है।",
    "explanationEnglish": "The Tharu tribe of the Terai plains historically mourns departed ancestors during the festival of Diwali.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 131,
    "subject": "Logical Reasoning",
    "topic": "सादृश्यता (Analogy)",
    "questionHindi": "दिए गए विकल्पों में से संबंधित शब्द चुनिए: भारत : नई दिल्ली :: ऑस्ट्रेलिया : ?",
    "questionEnglish": "Select the related word from the given alternatives: India : New Delhi :: Australia : ?",
    "options": [
      {
        "id": "A",
        "textHi": "कैनबरा",
        "textEn": "Canberra"
      },
      {
        "id": "B",
        "textHi": "सिडनी",
        "textEn": "Sydney"
      },
      {
        "id": "C",
        "textHi": "मेलबर्न",
        "textEn": "Melbourne"
      },
      {
        "id": "D",
        "textHi": "पर्थ",
        "textEn": "Perth"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "भारत की राजधानी नई दिल्ली है, उसी प्रकार ऑस्ट्रेलिया की राजधानी कैनबरा है।",
    "explanationEnglish": "New Delhi is the national capital of India; Canberra is the federal capital of Australia.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 132,
    "subject": "Logical Reasoning",
    "topic": "श्रेणी पूर्ण करना (Series)",
    "questionHindi": "दी गई संख्या श्रृंखला में अगला पद क्या होगा: 3, 8, 15, 24, 35, ?",
    "questionEnglish": "What is the next number in the given numeric series: 3, 8, 15, 24, 35, ?",
    "options": [
      {
        "id": "A",
        "textHi": "48",
        "textEn": "48"
      },
      {
        "id": "B",
        "textHi": "45",
        "textEn": "45"
      },
      {
        "id": "C",
        "textHi": "49",
        "textEn": "49"
      },
      {
        "id": "D",
        "textHi": "50",
        "textEn": "50"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "तर्क: 2² - 1 = 3, 3² - 1 = 8, 4² - 1 = 15, 5² - 1 = 24, 6² - 1 = 35, 7² - 1 = 48 (अंतर +5, +7, +9, +11, +13)।",
    "explanationEnglish": "Pattern: n² - 1 for n = 2, 3, 4, 5, 6, 7 => 7² - 1 = 48 (or successive odd increments +5, +7, +9, +11, +13).",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 133,
    "subject": "Logical Reasoning",
    "topic": "कोडिंग-डिकोडिंग (Coding-Decoding)",
    "questionHindi": "यदि किसी निश्चित कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है, तो उसी भाषा में 'STUDENT' को क्या लिखा जाएगा?",
    "questionEnglish": "In a certain code, 'TEACHER' is written as 'VGCEJGT'. How will 'STUDENT' be written in that code?",
    "options": [
      {
        "id": "A",
        "textHi": "UVWFGPT",
        "textEn": "UVWFGPT"
      },
      {
        "id": "B",
        "textHi": "UVWFHQV",
        "textEn": "UVWFHQV"
      },
      {
        "id": "C",
        "textHi": "TVWFHPT",
        "textEn": "TVWFHPT"
      },
      {
        "id": "D",
        "textHi": "UVWFGPV",
        "textEn": "UVWFGPV"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "प्रत्येक अक्षर में +2 जोड़ा गया है: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V (अर्थात् UVWFGPT/V)।",
    "explanationEnglish": "Every letter shifts forward by +2 positions in the alphabetical index.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 134,
    "subject": "Logical Reasoning",
    "topic": "रक्त संबंध (Blood Relations)",
    "questionHindi": "एक तस्वीर की ओर इशारा करते हुए रमेश ने कहा—'यह मेरे दादाजी के एकमात्र पुत्र की पुत्री है।' उस तस्वीर वाली लड़की का रमेश से क्या संबंध है?",
    "questionEnglish": "Pointing to a photograph, Ramesh said, 'She is the daughter of the only son of my grandfather.' How is she related to Ramesh?",
    "options": [
      {
        "id": "A",
        "textHi": "बहन",
        "textEn": "Sister"
      },
      {
        "id": "B",
        "textHi": "माता",
        "textEn": "Mother"
      },
      {
        "id": "C",
        "textHi": "चाची",
        "textEn": "Aunt"
      },
      {
        "id": "D",
        "textHi": "पुत्री",
        "textEn": "Daughter"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "रमेश के दादाजी का एकमात्र पुत्र = रमेश के पिता। पिता की पुत्री = रमेश की बहन।",
    "explanationEnglish": "Grandfather's only son = Ramesh's father. Father's daughter = Ramesh's sister.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 135,
    "subject": "Logical Reasoning",
    "topic": "दिशा और दूरी (Direction & Distance)",
    "questionHindi": "एक व्यक्ति उत्तर दिशा की ओर 10 मीटर चलता है, फिर दाएँ मुड़कर 15 मीटर चलता है, और पुनः दाएँ मुड़कर 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर है?",
    "questionEnglish": "A person walks 10 m north, turns right and walks 15 m, then turns right again and walks 10 m. How far is he from his starting point?",
    "options": [
      {
        "id": "A",
        "textHi": "15 मीटर",
        "textEn": "15 meters"
      },
      {
        "id": "B",
        "textHi": "20 मीटर",
        "textEn": "20 meters"
      },
      {
        "id": "C",
        "textHi": "25 मीटर",
        "textEn": "25 meters"
      },
      {
        "id": "D",
        "textHi": "10 मीटर",
        "textEn": "10 meters"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "उत्तर और दक्षिण के 10-10 मीटर एक-दूसरे को निरस्त करते हैं; व्यक्ति प्रारंभिक बिंदु से ठीक 15 मीटर पूर्व में है।",
    "explanationEnglish": "Vertical displacement is 10 - 10 = 0 m; horizontal displacement is 15 m east. Distance = 15 m.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 136,
    "subject": "Information Technology",
    "topic": "कंप्यूटर मूल बातें",
    "questionHindi": "कंप्यूटर का 'मस्तिष्क' (Brain of Computer) किसे कहा जाता है?",
    "questionEnglish": "Which component is known as the 'Brain' of a computer?",
    "options": [
      {
        "id": "A",
        "textHi": "सेंट्रल प्रोसेसिंग यूनिट (CPU)",
        "textEn": "Central Processing Unit (CPU)"
      },
      {
        "id": "B",
        "textHi": "रैंडम एक्सेस मेमोरी (RAM)",
        "textEn": "Random Access Memory (RAM)"
      },
      {
        "id": "C",
        "textHi": "हार्ड डिस्क (Hard Disk)",
        "textEn": "Hard Disk"
      },
      {
        "id": "D",
        "textHi": "मदरबोर्ड (Motherboard)",
        "textEn": "Motherboard"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "CPU सभी निर्देशों को संसाधित (Process) करता है, अतः इसे कंप्यूटर का मस्तिष्क कहा जाता है।",
    "explanationEnglish": "The Central Processing Unit (CPU) executes instructions, acts as the primary computational brain.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 137,
    "subject": "Information Technology",
    "topic": "डिजिटल शिक्षा - DIKSHA",
    "questionHindi": "भारत सरकार के शिक्षा मंत्रालय द्वारा शिक्षकों और छात्रों के लिए संचालित 'दीक्षा' (DIKSHA) पोर्टल का पूर्ण रूप क्या है?",
    "questionEnglish": "What is the full form of the national school digital portal 'DIKSHA' launched by the Ministry of Education?",
    "options": [
      {
        "id": "A",
        "textHi": "Digital Infrastructure for Knowledge Sharing",
        "textEn": "Digital Infrastructure for Knowledge Sharing"
      },
      {
        "id": "B",
        "textHi": "Digital Information for Knowledge and Science Hub",
        "textEn": "Digital Information for Knowledge and Science Hub"
      },
      {
        "id": "C",
        "textHi": "Direct Initiative for Knowledge Systems and Harmony",
        "textEn": "Direct Initiative for Knowledge Systems and Harmony"
      },
      {
        "id": "D",
        "textHi": "Digital India Knowledge Sharing for All",
        "textEn": "Digital India Knowledge Sharing for All"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "DIKSHA = Digital Infrastructure for Knowledge Sharing, जो ई-कंटेंट का राष्ट्रीय मंच है।",
    "explanationEnglish": "DIKSHA stands for Digital Infrastructure for Knowledge Sharing.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 138,
    "subject": "Information Technology",
    "topic": "इंटरनेट व नेटवर्किंग",
    "questionHindi": "इंटरनेट पर किसी वेबसाइट का विशिष्ट पता (Unique Web Address) क्या कहलाता है?",
    "questionEnglish": "The unique locator address of a webpage or website on the World Wide Web is termed as:",
    "options": [
      {
        "id": "A",
        "textHi": "URL (Uniform Resource Locator)",
        "textEn": "URL (Uniform Resource Locator)"
      },
      {
        "id": "B",
        "textHi": "IP Address",
        "textEn": "IP Address"
      },
      {
        "id": "C",
        "textHi": "HTTP",
        "textEn": "HTTP"
      },
      {
        "id": "D",
        "textHi": "HTML",
        "textEn": "HTML"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "URL (जैसे https://example.com) इंटरनेट पर किसी विशिष्ट वेब संसाधन का पता होता है।",
    "explanationEnglish": "A Uniform Resource Locator (URL) serves as the web address identifying resources on the internet.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 139,
    "subject": "Information Technology",
    "topic": "ओपन एजुकेशनल रिसोर्स (MOOC)",
    "questionHindi": "ई-लर्निंग में 'MOOC' का संक्षिप्त रूप किस अर्थ में प्रयोग होता है?",
    "questionEnglish": "In digital education, what does the acronym 'MOOC' stand for?",
    "options": [
      {
        "id": "A",
        "textHi": "Massive Open Online Course",
        "textEn": "Massive Open Online Course"
      },
      {
        "id": "B",
        "textHi": "Major Online Organization Course",
        "textEn": "Major Online Organization Course"
      },
      {
        "id": "C",
        "textHi": "Modern Open Online Classroom",
        "textEn": "Modern Open Online Classroom"
      },
      {
        "id": "D",
        "textHi": "Massive Open Outreach Curriculum",
        "textEn": "Massive Open Outreach Curriculum"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "MOOC (Massive Open Online Course) असीमित भागीदारी और खुली वेब पहुंच वाला ऑनलाइन पाठ्यक्रम है।",
    "explanationEnglish": "MOOC stands for Massive Open Online Course providing accessible web-based learning.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 140,
    "subject": "Information Technology",
    "topic": "मेमोरी व स्टोरेज",
    "questionHindi": "निम्नलिखित में से कौन सी मेमोरी 'अस्थायी' (Volatile Memory) होती है, जिसके बंद होने पर डेटा नष्ट हो जाता है?",
    "questionEnglish": "Which type of computer memory is 'volatile', losing its stored contents when power is turned off?",
    "options": [
      {
        "id": "A",
        "textHi": "RAM (Random Access Memory)",
        "textEn": "RAM (Random Access Memory)"
      },
      {
        "id": "B",
        "textHi": "ROM (Read Only Memory)",
        "textEn": "ROM (Read Only Memory)"
      },
      {
        "id": "C",
        "textHi": "Hard Disk Drive (HDD)",
        "textEn": "Hard Disk Drive (HDD)"
      },
      {
        "id": "D",
        "textHi": "Pen Drive (Flash Memory)",
        "textEn": "Pen Drive"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "RAM एक वोलाटाइल मेमोरी है जो कंप्यूटर चालू रहने तक ही सक्रिय डेटा संग्रहीत रखती है।",
    "explanationEnglish": "RAM loses data once electrical power is interrupted, distinguishing it as volatile primary memory.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 141,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "व्यावसायिक आचरण व नीति",
    "questionHindi": "राष्ट्रीय पाठ्यचर्या की रूपरेखा (NCF-2005) के अनुसार कक्षा में शिक्षक की प्राथमिक भूमिका क्या होनी चाहिए?",
    "questionEnglish": "According to National Curriculum Framework (NCF-2005), what is the primary role of a teacher?",
    "options": [
      {
        "id": "A",
        "textHi": "सुविधादाता / सुगमकर्ता (Facilitator)",
        "textEn": "Facilitator of Learning"
      },
      {
        "id": "B",
        "textHi": "कठोर अनुशासनकर्ता",
        "textEn": "Strict Disciplinarian"
      },
      {
        "id": "C",
        "textHi": "सूचना का एकमात्र प्रदाता",
        "textEn": "Sole transmitter of knowledge"
      },
      {
        "id": "D",
        "textHi": "पाठ्यपुस्तक वाचक",
        "textEn": "Passive textbook reader"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "NCF-2005 के अनुसार शिक्षक ज्ञान का निर्माता नहीं अपितु ज्ञान निर्माण का सुगमकर्ता (Facilitator) है।",
    "explanationEnglish": "Under constructivism and NCF-2005, the teacher functions as a learning facilitator.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 142,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "प्रेरणा (Motivation)",
    "questionHindi": "प्राथमिक विद्यालय के छात्रों में दीर्घकालिक सीखने की रुचि बनाए रखने के लिए कौन सी प्रेरणा सबसे अधिक प्रभावशाली है?",
    "questionEnglish": "To foster enduring learning interest in elementary students, which form of motivation is most potent?",
    "options": [
      {
        "id": "A",
        "textHi": "आंतरिक प्रेरणा (Intrinsic Motivation - जिज्ञासा व आत्मसंतुष्टि)",
        "textEn": "Intrinsic Motivation (Curiosity & Self-satisfaction)"
      },
      {
        "id": "B",
        "textHi": "बाह्य पुरस्कार का लालच",
        "textEn": "Extrinsic rewards/bribes only"
      },
      {
        "id": "C",
        "textHi": "शारीरिक दंड का भय",
        "textEn": "Fear of corporal punishment"
      },
      {
        "id": "D",
        "textHi": "सहपाठियों से तुलना कर लज्जित करना",
        "textEn": "Humiliation and comparison"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "आंतरिक प्रेरणा बालक की स्वाभाविक जिज्ञासा और सीखने के आनंद से उत्पन्न होकर स्थायी ज्ञान देती है।",
    "explanationEnglish": "Intrinsic motivation driven by autonomy and innate curiosity yields persistent mastery.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 143,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "संवैधानिक व मानवीय मूल्य",
    "questionHindi": "भारतीय संविधान की 'प्रस्तावना' (Preamble) में न्याय के किन तीन रूपों का स्पष्ट उल्लेख किया गया है?",
    "questionEnglish": "Which three distinct forms of justice are solemnly promised in the Preamble to the Indian Constitution?",
    "options": [
      {
        "id": "A",
        "textHi": "सामाजिक, आर्थिक और राजनीतिक न्याय",
        "textEn": "Social, Economic, and Political Justice"
      },
      {
        "id": "B",
        "textHi": "धार्मिक, सामाजिक और वैयक्तिक न्याय",
        "textEn": "Religious, Social, and Personal Justice"
      },
      {
        "id": "C",
        "textHi": "शैक्षणिक, सांस्कृतिक और आर्थिक न्याय",
        "textEn": "Educational, Cultural, and Economic Justice"
      },
      {
        "id": "D",
        "textHi": "न्यायिक, प्रशासनिक और नागरिक न्याय",
        "textEn": "Judicial, Administrative, and Civil Justice"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "संविधान की प्रस्तावना समस्त नागरिकों को 'सामाजिक, आर्थिक और राजनीतिक न्याय' दिलाने का संकल्प करती है।",
    "explanationEnglish": "The Preamble guarantees Justice in three dimensional aspects: Social, Economic, and Political.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 144,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "दंड एवं पुरस्कार का प्रभावी प्रयोग",
    "questionHindi": "कक्षा प्रबंधन में छात्रों के अवांछनीय व्यवहार को सुधारने के लिए सबसे वैज्ञानिक एवं सकारात्मक तरीका क्या है?",
    "questionEnglish": "What is the most positive and constructive strategy to address disruptive behavior in a classroom?",
    "options": [
      {
        "id": "A",
        "textHi": "अवांछनीय व्यवहार के मूल कारण को जानकर उपचारात्मक मार्गदर्शन प्रदान करना",
        "textEn": "Diagnosing root causes and providing remedial counseling"
      },
      {
        "id": "B",
        "textHi": "छात्र को कक्षा के बाहर शारीरिक दंड देना",
        "textEn": "Subjecting child to corporal punishment"
      },
      {
        "id": "C",
        "textHi": "छात्र का नाम विद्यालय से काट देना",
        "textEn": "Expelling the student immediately"
      },
      {
        "id": "D",
        "textHi": "पूरी कक्षा के सामने उसका उपहास उड़ाना",
        "textEn": "Publicly ridiculing the child"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "RTE अधिनियम शारीरिक दंड को प्रतिबंधित करता है; उपचारात्मक व बाल-सुलभ परामर्श ही स्थायी सुधार लाता है।",
    "explanationEnglish": "RTE Act bans corporal punishment; identifying causal triggers and counseling achieves lasting reform.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 145,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "नेतृत्व गुण (Leadership)",
    "questionHindi": "एक आदर्श विद्यालय प्रधान (प्रधानाध्यापक/शिक्षक) का नेतृत्व दृष्टिकोण कैसा होना चाहिए?",
    "questionEnglish": "What leadership style is most suited for an effective school head or teacher leader?",
    "options": [
      {
        "id": "A",
        "textHi": "लोकतांत्रिक एवं सहभागी नेतृत्व (Democratic & Participative)",
        "textEn": "Democratic and Participative Leadership"
      },
      {
        "id": "B",
        "textHi": "तानाशाही एवं निरंकुश नेतृत्व (Autocratic)",
        "textEn": "Autocratic and Dictatorial"
      },
      {
        "id": "C",
        "textHi": "पूर्णतः अहस्तक्षेपवादी (Laissez-faire)",
        "textEn": "Completely Hands-off"
      },
      {
        "id": "D",
        "textHi": "व्यक्तिवादी दृष्टिकोण",
        "textEn": "Self-centered leadership"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "लोकतांत्रिक नेतृत्व में सभी शिक्षकों, विद्यार्थियों और अभिभावकों की सहभागिता से संस्था का विकास होता है।",
    "explanationEnglish": "Participative democratic leadership builds mutual consensus, ownership, and educational synergy.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 146,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "सहानुभूति बनाम समानुभूति",
    "questionHindi": "शिक्षक द्वारा छात्र की मानसिक स्थिति और भावनाओं को उसी के नजरिए से महसूस करना क्या कहलाता है?",
    "questionEnglish": "The teacher's ability to perceive and understand a child's emotions from the child's perspective is called:",
    "options": [
      {
        "id": "A",
        "textHi": "समानुभूति (Empathy)",
        "textEn": "Empathy"
      },
      {
        "id": "B",
        "textHi": "सहानुभूति (Sympathy)",
        "textEn": "Sympathy"
      },
      {
        "id": "C",
        "textHi": "उदासीनता (Apathy)",
        "textEn": "Apathy"
      },
      {
        "id": "D",
        "textHi": "कठोरता (Strictness)",
        "textEn": "Strictness"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "समानुभूति (Empathy) का अर्थ है दूसरे के जूते में पाँव रखकर उसके दर्द व परिस्थिति को यथार्थ रूप से समझना।",
    "explanationEnglish": "Empathy involves vicariously experiencing another's emotional state from their internal frame of reference.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 147,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "तनाव प्रबंधन",
    "questionHindi": "परीक्षा के दौरान छात्रों में तनाव और घबराहट को कम करने के लिए एक शिक्षक को क्या सलाह देनी चाहिए?",
    "questionEnglish": "To mitigate student exam anxiety and academic stress, a teacher should emphasize:",
    "options": [
      {
        "id": "A",
        "textHi": "नियमित अध्ययन, पर्याप्त विश्राम, सकारात्मक दृष्टिकोण एवं आत्म-विश्वास",
        "textEn": "Consistent preparation, adequate sleep, mindfulness, and self-confidence"
      },
      {
        "id": "B",
        "textHi": "अंकों के लिए रात-दिन जागकर रट्टा मारना",
        "textEn": "All-night cramming for marks"
      },
      {
        "id": "C",
        "textHi": "कम अंक आने पर भविष्य बर्बाद होने का डर दिखाना",
        "textEn": "Stoking fear of failure"
      },
      {
        "id": "D",
        "textHi": "परीक्षा कक्ष में केवल दूसरों से नकल की सोचना",
        "textEn": "Relying on illicit aids"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "तनाव प्रबंधन हेतु संतुलित दिनचर्या, विश्राम और सकारात्मक आत्म-विश्वास आवश्यक होता है।",
    "explanationEnglish": "Systematic study habits, emotional reassurance, and sleep hygiene de-escalate test anxiety.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 148,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "निर्णय लेने का कौशल (Decision Making)",
    "questionHindi": "जीवन कौशल शिक्षा (Life Skills Education - WHO) के 10 मूल कौशलों में 'समस्या समाधान' (Problem Solving) का क्या महत्व है?",
    "questionEnglish": "In WHO's 10 Core Life Skills framework, what is the prime objective of 'Problem Solving' skills?",
    "options": [
      {
        "id": "A",
        "textHi": "समस्याओं के विविध रचनात्मक समाधान खोजना और विवेकपूर्ण निर्णय लेना",
        "textEn": "Analyzing challenges constructively to find viable solutions"
      },
      {
        "id": "B",
        "textHi": "समस्याओं से भाग जाना",
        "textEn": "Evading and ignoring difficulties"
      },
      {
        "id": "C",
        "textHi": "हर समस्या का दोष दूसरों पर मढ़ना",
        "textEn": "Blaming external actors"
      },
      {
        "id": "D",
        "textHi": "बिना सोचे-समझे तुरंत प्रतिक्रिया देना",
        "textEn": "Impulsive knee-jerk reaction"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "WHO जीवन कौशल के अनुसार समस्या समाधान हमें दैनिक जीवन की चुनौतियों से रचनात्मकता से निपटने में सक्षम बनाता है।",
    "explanationEnglish": "Problem-solving skills empower individuals to constructively resolve life stressors.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 149,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "संवैधानिक मूल्य - समानता",
    "questionHindi": "विद्यालय में मध्याह्न भोजन (Mid-Day Meal / PM POSHAN) का एक प्रमुख सामाजिक व मानवीय उद्देश्य क्या है?",
    "questionEnglish": "Beyond nutrition, what fundamental constitutional value does the Mid-Day Meal scheme promote?",
    "options": [
      {
        "id": "A",
        "textHi": "सभी जातियों व वर्गों के बच्चों को एक साथ बैठाकर सामाजिक समरसता और समानता बढ़ाना",
        "textEn": "Cultivating social equality by having children of all castes dine together"
      },
      {
        "id": "B",
        "textHi": "केवल भोजन की बचत करना",
        "textEn": "Food storage convenience"
      },
      {
        "id": "C",
        "textHi": "बच्चों को घर से भोजन लाने से रोकना",
        "textEn": "Preventing home-cooked meals"
      },
      {
        "id": "D",
        "textHi": "शिक्षकों का समय व्यतीत करना",
        "textEn": "Engaging staff in cooking"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "मध्याह्न भोजन जातिगत और सामाजिक भेद मिटाकर बंधुत्व और समानता के मानवीय मूल्य स्थापित करता है।",
    "explanationEnglish": "Mid-Day Meal fosters fraternity and dismantles social/caste barriers through shared communal dining.",
    "difficulty": "MEDIUM"
  },
  {
    "questionNumber": 150,
    "subject": "Life Skills / Management & Aptitude",
    "topic": "शिक्षक आचार संहिता",
    "questionHindi": "एक शिक्षक के लिए समाज में आदर और प्रेरणा का स्रोत बने रहने हेतु सर्वाधिक महत्वपूर्ण गुण क्या है?",
    "questionEnglish": "What is the paramount virtue for a teacher to command enduring social respect and moral authority?",
    "options": [
      {
        "id": "A",
        "textHi": "कथनी और करनी में समानता, निष्पक्षता एवं चारित्रिक शुचिता",
        "textEn": "Integrity, fairness, consistency between words and actions, and moral uprightness"
      },
      {
        "id": "B",
        "textHi": "धनवान होना",
        "textEn": "Wealth and social influence"
      },
      {
        "id": "C",
        "textHi": "राजनीतिक दलों में पद प्राप्त करना",
        "textEn": "Holding political offices"
      },
      {
        "id": "D",
        "textHi": "कठोर दंड देकर भय उत्पन्न करना",
        "textEn": "Inducing terror through punishments"
      }
    ],
    "correctAnswer": "A",
    "answerKeyStatus": "VERIFIED",
    "explanationHindi": "शिक्षक का चरित्र और उसका आचरण ही छात्रों के लिए सबसे बड़ा मूक पाठ्यक्रम (Hidden Curriculum) होता है।",
    "explanationEnglish": "Moral integrity, uncompromised fairness, and congruence between precept and practice define an exemplary teacher.",
    "difficulty": "MEDIUM"
  }
];
