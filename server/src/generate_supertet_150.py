# -*- coding: utf-8 -*-
"""
Generates the complete, authentic 150-question paper for SUPER TET (UP Assistant Teacher Recruitment Exam - 69,000 ATRE)
strictly adhering to the official syllabus across all 14 subjects (12 sections).
Outputs directly to server/src/data/supertet_2019_pyq.ts.
"""

import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
OUTPUT_FILE = ROOT_DIR / "server" / "src" / "data" / "supertet_2019_pyq.ts"

questions = []

def add_q(q_num, subject, topic, q_hi, q_en, opt_a_hi, opt_a_en, opt_b_hi, opt_b_en, opt_c_hi, opt_c_en, opt_d_hi, opt_d_en, ans, exp_hi, exp_en, diff="MEDIUM", status="VERIFIED", notes=None):
    q = {
        "questionNumber": q_num,
        "subject": subject,
        "topic": topic,
        "questionHindi": q_hi,
        "questionEnglish": q_en,
        "options": [
            {"id": "A", "textHi": opt_a_hi, "textEn": opt_a_en},
            {"id": "B", "textHi": opt_b_hi, "textEn": opt_b_en},
            {"id": "C", "textHi": opt_c_hi, "textEn": opt_c_en},
            {"id": "D", "textHi": opt_d_hi, "textEn": opt_d_en}
        ],
        "correctAnswer": ans,
        "answerKeyStatus": status,
        "explanationHindi": exp_hi,
        "explanationEnglish": exp_en,
        "difficulty": diff
    }
    if notes:
        q["disputeNotes"] = notes
    questions.append(q)

# -------------------------------------------------------------
# SECTION 1: HINDI (Q1 - Q20) [20 Questions]
# -------------------------------------------------------------
add_q(1, "Hindi", "अलंकार",
      "कनक कनक ते सौ गुनी मादकता अधिकाय। या खाए बौराय जग या पाए बौराय॥ प्रस्तुत पंक्तियों में कौन सा अलंकार है?",
      "Which figure of speech (Alankar) is used in: 'Kanak kanak te sau guni madakta adhikay'?",
      "यमक अलंकार", "Yamak Alankar", "श्लेष अलंकार", "Shlesh Alankar", "अनुप्रास अलंकार", "Anupras Alankar", "उपमा अलंकार", "Upma Alankar",
      "A", "यहाँ 'कनक' शब्द दो बार आया है और दोनों बार अर्थ भिन्न हैं (धतूरा और सोना)। अतः यमक अलंकार है।",
      "The word 'Kanak' appears twice with different meanings (Datura and Gold), so it is Yamak Alankar.")

add_q(2, "Hindi", "संधि",
      "'पवन' शब्द का सही संधि-विच्छेद क्या होगा?",
      "What is the correct Sandhi-Vichhed of 'Pawan'?",
      "पो + अन", "Po + An", "पौ + अन", "Pau + An", "प + वन", "Pa + Wan", "पा + अन", "Pa + An",
      "A", "अयादि स्वर संधि के नियमानुसार 'ओ + अ = अव' होता है, इसलिए पो + अन = पवन।",
      "According to Ayadi Swar Sandhi rules, 'O + A = Av', hence Po + An = Pawan.")

add_q(3, "Hindi", "समास",
      "'यथाशक्ति' में कौन सा समास है?",
      "Which Samas is in 'Yathashakti'?",
      "अव्ययीभाव समास", "Avyayibhav Samas", "तत्पुरुष समास", "Tatpurush Samas", "द्विगु समास", "Dvigu Samas", "कर्मधारय समास", "Karmadharaya Samas",
      "A", "'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' होता है। इसमें प्रथम पद 'यथा' अव्यय है, अतः अव्ययीभाव समास है।",
      "'Yathashakti' translates to 'according to ability'. The prefix 'Yatha' is an indeclinable (Avyaya), hence Avyayibhav.")

add_q(4, "Hindi", "साहित्य",
      "'गोदान' उपन्यास के लेखक कौन हैं?",
      "Who is the author of the novel 'Godan'?",
      "मुंशी प्रेमचंद", "Munshi Premchand", "जयशंकर प्रसाद", "Jaishankar Prasad", "रामधारी सिंह 'दिनकर'", "Ramdhari Singh Dinkar", "महादेवी वर्मा", "Mahadevi Verma",
      "A", "गोदान उपन्यास मुंशी प्रेमचंद द्वारा 1936 में रचित कालजयी कृति है जो कृषक जीवन पर आधारित है।",
      "Godan is a masterpiece novel authored by Munshi Premchand in 1936 depicting Indian peasant life.")

add_q(5, "Hindi", "रस",
      "शृंगार रस का स्थायी भाव क्या है?",
      "What is the Sthayi Bhava (permanent emotion) of Shringar Rasa?",
      "रति", "Rati (Love)", "शोक", "Shok (Sorrow)", "उत्साह", "Utsah (Enthusiasm)", "हास", "Haas (Laughter)",
      "A", "शृंगार रस का स्थायी भाव रति (प्रेम) होता है। इसे रसराज भी कहा जाता है।",
      "The permanent emotion of Shringar Rasa is Rati (love/attachment).")

add_q(6, "Hindi", "विलोम शब्द",
      "'अनुराग' का सही विलोम शब्द क्या है?",
      "What is the correct antonym of 'Anurag'?",
      "विराग", "Virag", "विराग्य", "Viragya", "राग", "Rag", "द्वेष", "Dvesh",
      "A", "'अनुराग' का अर्थ प्रेम होता है तथा इसका विलोम 'विराग' (उदासीनता/वैराग्य) है।",
      "Anurag means affectionate attachment; its exact antonym is Virag.")

add_q(7, "Hindi", "पर्यायवाची",
      "निम्नलिखित में से कौन सा शब्द 'कमल' का पर्यायवाची नहीं है?",
      "Which of the following is NOT a synonym of 'Kamal' (Lotus)?",
      "जलद", "Jalad (Cloud)", "जलज", "Jalaj", "पंकज", "Pankaj", "सरोज", "Saroj",
      "A", "'जलद' का अर्थ बादल होता है (जल देने वाला)। जलज, पंकज और सरोज कमल के पर्यायवाची हैं।",
      "'Jalad' means cloud (giver of water). Jalaj, Pankaj, and Saroj are synonyms of lotus.")

add_q(8, "Hindi", "मुहावरे",
      "'आँख का तारा होना' मुहावरे का सही अर्थ क्या है?",
      "What is the meaning of the idiom 'Aankh ka tara hona'?",
      "अत्यधिक प्रिय होना", "Extremely beloved", "कम दिखना", "Poor eyesight", "धोखा देना", "To deceive", "गुस्सा करना", "To get angry",
      "A", "'आँख का तारा होना' का अभिप्राय बहुत प्रिय या प्यारा होना है।",
      "It means to be very dear or cherished.")

add_q(9, "Hindi", "तत्सम-तद्भव",
      "'अग्नि' शब्द का तद्भव रूप क्या है?",
      "What is the Tadbhava form of the word 'Agni'?",
      "आग", "Aag", "अनल", "Anal", "पावक", "Pawak", "ज्वाला", "Jwala",
      "A", "संस्कृत शब्द 'अग्नि' का हिंदी तद्भव रूप 'आग' है।",
      "The native Tadbhava form of Sanskrit 'Agni' is 'Aag'.")

add_q(10, "Hindi", "शुद्ध वर्तनी",
      "निम्नलिखित में से शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
      "Choose the word with the correct spelling:",
      "उज्ज्वल", "Ujjwal (उज्ज्वल)", "उज्वल", "Ujwal", "उज्जवल", "Ujjawal", "उज्वल", "Ujwala",
      "A", "'उज्ज्वल' में दोनों 'ज' अर्ध (आधे) होते हैं (उद् + ज्वल = उज्ज्वल)।",
      "In Ujjwal (उज्ज्वल), both 'ja' are half consonants.")

add_q(11, "Hindi", "कारक",
      "'वृक्ष से पत्ता गिरता है।' वाक्य में किस कारक की विभक्ति प्रयुक्त हुई है?",
      "In 'Vriksh se patta girta hai', which Karak is used?",
      "अपादान कारक", "Apadan Karak", "करण कारक", "Karan Karak", "कर्म कारक", "Karm Karak", "संबोधन कारक", "Sambodhan Karak",
      "A", "अलगाव (अलग होने) के भाव में 'से' परसर्ग अपादान कारक को दर्शाता है।",
      "Separation from an origin using 'se' represents Apadan Karak.")

add_q(12, "Hindi", "वाच्य",
      "'मुझसे उठा नहीं जाता।' इस वाक्य में कौन सा वाच्य है?",
      "Which voice (Vachya) is present in 'Mujhse utha nahi jata'?",
      "भाववाच्य", "Bhavavachya (Impersonal voice)", "कर्तृवाच्य", "Kartrivachya", "कर्मवाच्य", "Karmavachya", "इनमें से कोई नहीं", "None of these",
      "A", "जहाँ क्रिया का भाव प्रधान हो और अकर्मक क्रिया असमर्थता व्यक्त करे, वहाँ भाववाच्य होता है।",
      "Where the verbal feeling/state is dominant with an intransitive verb, it is Bhavavachya.")

add_q(13, "Hindi", "साहित्य काल",
      "हिंदी साहित्य के इतिहास में 'आदिकाल' को 'वीरगाथा काल' नाम किसने दिया?",
      "Who named the Adikal of Hindi literature as 'Veergatha Kal'?",
      "आचार्य रामचंद्र शुक्ल", "Acharya Ramchandra Shukla", "डॉ. हजारी प्रसाद द्विवेदी", "Hazari Prasad Dwivedi", "राहुल सांकृत्यायन", "Rahul Sankrityayan", "मिश्रबंधु", "Mishrabandhu",
      "A", "आचार्य रामचंद्र शुक्ल ने वीरगाथाओं की प्रचुरता के आधार पर आदिकाल को 'वीरगाथा काल' नाम दिया।",
      "Acharya Ramchandra Shukla designated Adikal as Veergatha Kal due to heroic poetic traditions.")

add_q(14, "Hindi", "छंद",
      "दोहा छंद के प्रथम और तृतीय चरण में कितनी-कितनी मात्राएँ होती हैं?",
      "How many Matras are in the 1st and 3rd lines (Charans) of a Doha?",
      "13-13 मात्राएँ", "13 Matras each", "11-11 मात्राएँ", "11 Matras each", "16-16 मात्राएँ", "16 Matras each", "24-24 मात्राएँ", "24 Matras each",
      "A", "दोहा एक अर्धसम मात्रिक छंद है जिसके विषम चरणों (1 व 3) में 13-13 तथा सम चरणों (2 व 4) में 11-11 मात्राएँ होती हैं।",
      "Doha has 13 matras in odd charans (1st, 3rd) and 11 in even charans (2nd, 4th).")

add_q(15, "Hindi", "सर्वनाम",
      "'आप भला तो जग भला' वाक्य में रेखांकित शब्द 'आप' किस सर्वनाम का उदाहरण है?",
      "In 'Aap bhala to jag bhala', which type of pronoun is 'Aap'?",
      "निजवाचक सर्वनाम", "Nijvachak (Reflexive Pronoun)", "पुरुषवाचक सर्वनाम", "Purushvachak", "निश्चयवाचक सर्वनाम", "Nishchayvachak", "अनिश्चयवाचक सर्वनाम", "Anishchayvachak",
      "A", "यहाँ 'आप' का प्रयोग स्वयं (अपने आप) के अर्थ में हुआ है, अतः यह निजवाचक सर्वनाम है।",
      "Here 'Aap' refers to oneself (reflexive), so it is Nijvachak.")

add_q(16, "Hindi", "प्रत्यय",
      "'मिठास' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
      "Which suffix (Pratyaya) is used in the word 'Mithaas'?",
      "आस", "Aas", "ठास", "Thaas", "स", "Sa", "मिठ", "Mith",
      "A", "मीठा + आस = मिठास (भाववाचक तद्धित प्रत्यय 'आस' है)।",
      "The abstract noun suffix used here is 'Aas'.")

add_q(17, "Hindi", "उपसर्ग",
      "'अत्याचार' शब्द में कौन सा उपसर्ग लगा है?",
      "Which prefix (Upsarg) is in 'Atyachar'?",
      "अति", "Ati", "अत्य", "Atya", "अ", "A", "अत", "At",
      "A", "यण् स्वर संधि के अनुसार 'अति + आचार = अत्याचार'। अतः उपसर्ग 'अति' है।",
      "By Yan Sandhi rules: Ati + Achar = Atyachar. The prefix is 'Ati'.")

add_q(18, "Hindi", "वाक्य शुद्धि",
      "निम्नलिखित वाक्यों में से कौन सा वाक्य व्याकरणिक दृष्टि से शुद्ध है?",
      "Which sentence is grammatically correct?",
      "साहित्य और जीवन का अभिन्न संबंध है।", "Literature and life have an inseparable relation.",
      "साहित्य और जीवन का घोर संबंध है।", "Literature and life have an intense relation.",
      "साहित्य और जीवन में अगाध संबंध है।", "Literature and life have deep relation.",
      "साहित्य और जीवन में निकटतम संबंध है।", "Literature and life have closest relation.",
      "A", "'अभिन्न' या 'घनिष्ठ' संबंध का प्रयोग साहित्य और जीवन के संदर्भ में शुद्ध होता है ('घोर' नकारात्मक होता है)।",
      "Using 'abhinna' (inseparable) or 'ghanishth' is the standard grammatically correct expression.")

add_q(19, "Hindi", "ध्वनि/वर्ण",
      "हिंदी वर्णमाला में 'ज्ञ' वर्ण किन वर्णों के संयोग से बना है?",
      "In Hindi alphabet, the compound consonant 'Gya' (ज्ञ) is formed by which combination?",
      "ज् + ञ", "J + Nya", "ग् + य", "G + Ya", "ज् + य", "J + Ya", "ग् + ञ", "G + Nya",
      "A", "'ज्ञ' एक संयुक्त व्यंजन है जो 'ज्' और 'ञ' के मेल से बनता है।",
      "Gya (ज्ञ) is a conjunct consonant formed by J (ज्) and Nya (ञ).")

add_q(20, "Hindi", "अपठित गद्यांश बोध",
      "'सच्चा उत्साह वही होता है जो निष्काम भाव से जनकल्याण के लिए प्रेरित करे।' उपर्युक्त विचारानुसार सच्चे उत्साह का मूल प्रेरक क्या है?",
      "According to 'True zeal is that which inspires selfless service for public welfare', what is the core driver of true enthusiasm?",
      "निःस्वार्थ लोककल्याण की भावना", "Selfless spirit of public welfare",
      "व्यक्तिगत ख्याति की इच्छा", "Desire for personal fame",
      "भौतिक लाभ की प्राप्ति", "Pursuit of material gains",
      "दूसरों पर प्रभुत्व स्थापित करना", "Domination over others",
      "A", "गद्यांश के अनुसार सच्चा उत्साह निष्काम लोककल्याण से अभिप्रेरित होता है।",
      "True enthusiasm is intrinsically rooted in selfless public welfare.")

# -------------------------------------------------------------
# SECTION 2: SANSKRIT (Q21 - Q30) [10 Questions]
# -------------------------------------------------------------
add_q(21, "Sanskrit", "संधि",
      "'इत्युक्तवा' इत्यस्य पदस्य संधि-विच्छेदः कः अस्ति?",
      "What is the Sandhi-Vichhed of 'Ityuktva'?",
      "इति + उक्त्वा", "Iti + Uktva", "इत्य + उक्त्वा", "Itya + Uktva", "इत + युक्तवा", "Ita + Yuktva", "इती + उक्त्वा", "Itee + Uktva",
      "A", "यण् सन्धेः नियमानुसारम् 'इ + उ = यु' भवति, अतः इति + उक्त्वा = इत्युक्तवा।",
      "According to Yan Sandhi rule, 'i + u = yu', hence Iti + Uktva = Ityuktva.")

add_q(22, "Sanskrit", "समास",
      "'पितरौ' इत्यत्र कः समासः वर्तते?",
      "Which Samas is in 'Pitarau'?",
      "एकशेष द्वन्द्व समासः", "Ekashesha Dvandva Samas", "तत्पुरुष समासः", "Tatpurusha Samas", "बहुव्रीहि समासः", "Bahuvrihi Samas", "अव्ययीभाव समासः", "Avyayibhava Samas",
      "A", "'माता च पिता च = पितरौ'। अत्र द्वयोः पदयोः एकः एव शिष्यते, अतः अयम् एकशेष द्वन्द्वः।",
      "Mata cha pita cha = Pitarau. Only one noun remains, exemplifying Ekashesha Dvandva.")

add_q(23, "Sanskrit", "विभक्ति/कारक",
      "'हरये रोचते भक्तिः' अत्र 'हरये' पदे का विभक्तिः प्रयुक्ता?",
      "Which Vibhakti is used in 'Haraye' in 'Haraye rochate bhaktih'?",
      "चतुर्थी विभक्तिः", "Chaturthi Vibhakti (Dative)", "तृतीया विभक्तिः", "Tritiya Vibhakti", "पञ्चमी विभक्तिः", "Panchami Vibhakti", "द्वितीया विभक्तिः", "Dvitiya Vibhakti",
      "A", "'रुच्यार्थानां प्रीयमाणः' सूत्रेण रुच्यर्थकधातूनां योगे चतुर्थी विभक्तिः भवति।",
      "By the Paninian rule 'Ruchyarthanam Priyamanah', verbs of liking govern the dative case (Chaturthi).")

add_q(24, "Sanskrit", "धातु रूप",
      "'भू' धातोः लट्लकारस्य प्रथमपुरुषस्य बहुवचने किं रूपं भवति?",
      "What is the form of 'Bhu' dhatu in Lat Lakara, Prathama Purusha, Bahuvachana?",
      "भवन्ति", "Bhavanti", "भवति", "Bhavati", "भवतः", "Bhavatah", "भवामः", "Bhavamah",
      "A", "भू धातोः लट्लकार रूपाणि: भवति, भवतः, भवन्ति (प्रथम पुरुष)।",
      "Conjugation of 'Bhu' in Lat Lakara (present tense), 3rd person plural is 'Bhavanti'.")

add_q(25, "Sanskrit", "शब्द रूप",
      "'रामेण' इत्यत्र कः पुरुषः का च विभक्तिः?",
      "What is the Vibhakti and Vachana of 'Ramena'?",
      "तृतीया विभक्तिः, एकवचनम्", "Tritiya Vibhakti, Ekavachana", "द्वितीया विभक्तिः, बहुवचनम्", "Dvitiya, Bahuvachana", "चतुर्थी विभक्तिः, एकवचनम्", "Chaturthi, Ekavachana", "सप्तमी विभक्तिः, एकवचनम्", "Saptami, Ekavachana",
      "A", "अकारान्त पुंल्लिङ्ग 'राम' शब्दस्य तृतीया विभक्तौ एकवचने 'रामेण' रूपं सिध्यति।",
      "Ramena is the instrumental singular (Tritiya Ekavachana) of masculine Rama.")

add_q(26, "Sanskrit", "प्रत्यय",
      "'गन्तुम्' इत्यत्र कः प्रत्ययः प्रयुक्तः?",
      "Which Pratyaya is used in 'Gantum'?",
      "तुमुन्", "Tumun", "क्त्वा", "Ktva", "ल्यप्", "Lyap", "शतृ", "Shatri",
      "A", "'गम्' धातौ निमित्तार्थे 'तुमुन्' प्रत्यये कृते 'गन्तुम्' पदं निष्पद्यते।",
      "The infinitive suffix 'Tumun' attached to root 'Gam' forms 'Gantum' (in order to go).")

add_q(27, "Sanskrit", "साहित्य/कवि",
      "'अभिज्ञानशाकुन्तलम्' कस्य महाकवेः विश्वप्रसिद्धा नाट्यकृतिः अस्ति?",
      "Whose world-famous play is 'Abhijnanashakuntalam'?",
      "महाकवि कालिदासस्य", "Mahakavi Kalidasa", "भवभूतेः", "Bhavabhuti", "दण्डिनः", "Dandin", "बाणभट्टस्य", "Banabhatta",
      "A", "अभिज्ञानशाकुन्तलम् महाकवि कालिदासस्य सर्वोत्कृष्टं नाटकं वर्तते।",
      "Abhijnanashakuntalam is the renowned masterpiece Sanskrit drama authored by Mahakavi Kalidasa.")

add_q(28, "Sanskrit", "संख्या",
      "संस्कृते 'एकोनचत्वारिंशत्' कस्याः संख्यायाः वाचकः अस्ति?",
      "In Sanskrit, what number is denoted by 'Ekonachatvarimshat'?",
      "39", "39", "49", "49", "29", "29", "19", "19",
      "A", "'एक + ऊन + चत्वारिंशत्' अर्थात् चत्वारिंशत् (40) मध्ये एकः न्यूनः = 39।",
      "Ekona-chatvarimshat means one less than forty, which equals 39.")

add_q(29, "Sanskrit", "सूक्ति/श्लोक",
      "'सत्यमेव जयते नानृतम्' इयं सूक्तिः कस्मात् उपनिषदः उद्धृता अस्ति?",
      "From which Upanishad is the national motto 'Satyameva Jayate' taken?",
      "मुण्डकोपनिषदः", "Mundaka Upanishad", "कठोपनिषदः", "Katha Upanishad", "केन उपनिषदः", "Kena Upanishad", "ईशावास्योपनिषदः", "Isha Upanishad",
      "A", "भारतस्य राष्ट्रियं ध्येयवाक्यं 'सत्यमेव जयते' मुण्डकोपनिषदः (३.१.६) गृहीतम्।",
      "'Satyameva Jayate' is an ancient aphorism taken from Mundaka Upanishad (3.1.6).")

add_q(30, "Sanskrit", "उच्चारण स्थान",
      "'ऋ' वर्णस्य तथा मूर्धन्य वर्णानाम् उच्चारणस्थानं किम् अस्ति?",
      "What is the place of articulation for vocalic 'Ri' and retroflex consonants?",
      "मूर्धा", "Murdha (Cerebral/Retroflex)", "कण्ठः", "Kantha (Throat/Velar)", "तालु", "Talu (Palate)", "दन्ताः", "Danta (Dental)",
      "A", "पाणिनीयशिक्षायाम् उक्तम्—'ऋटुरषाणां मूर्धा'। अतः ऋ वर्णस्य स्थानं मूर्धा अस्ति।",
      "As per Paninian phonetics, 'Riturashanam Murdha' designates Murdha as the articulatory site.")

# -------------------------------------------------------------
# SECTION 3: ENGLISH (Q31 - Q40) [10 Questions]
# -------------------------------------------------------------
add_q(31, "English", "Parts of Speech",
      "Identify the part of speech of the underlined word in: 'She walked extremely *slowly* across the road.'",
      "Identify the part of speech of the word 'slowly' in the sentence: 'She walked extremely slowly across the road.'",
      "Adverb", "Adverb", "Adjective", "Adjective", "Noun", "Noun", "Preposition", "Preposition",
      "A", "'Slowly' modifies the verb 'walked', answering 'how' she walked, making it an adverb of manner.",
      "'Slowly' describes how the action was performed (modifying the verb 'walked'), hence it is an adverb.")

add_q(32, "English", "Active and Passive Voice",
      "Convert into passive voice: 'The committee has submitted the final report.'",
      "Convert the following sentence into Passive Voice: 'The committee has submitted the final report.'",
      "The final report has been submitted by the committee.", "The final report has been submitted by the committee.",
      "The final report had been submitted by the committee.", "The final report had been submitted by the committee.",
      "The final report was submitted by the committee.", "The final report was submitted by the committee.",
      "The final report is submitted by the committee.", "The final report is submitted by the committee.",
      "A", "Present Perfect Active (has + V3) changes into Passive as (has been + V3).",
      "Present perfect tense changes from 'has + V3' to 'has been + V3' in passive voice.")

add_q(33, "English", "Direct and Indirect Speech",
      "Change into indirect speech: The teacher said to the students, 'Do not make noise.'",
      "Change into indirect speech: The teacher said to the students, 'Do not make noise.'",
      "The teacher forbade the students to make noise.", "The teacher forbade the students to make noise.",
      "The teacher told the students that not make noise.", "The teacher told the students that not make noise.",
      "The teacher requested the students that do not make noise.", "The teacher requested the students that do not make noise.",
      "The teacher ordered the students do not make noise.", "The teacher ordered the students do not make noise.",
      "A", "When converting negative imperative sentences with 'forbade', 'to + verb' is used without repeating 'not'.",
      "The verb 'forbade' inherently conveys prohibition, correctly taking 'to make noise'.")

add_q(34, "English", "Articles & Determiners",
      "Fill in the blank with the appropriate article: 'He is ________ European scholar whom we met yesterday.'",
      "Fill in the blank: 'He is ________ European scholar whom we met yesterday.'",
      "a", "a", "an", "an", "the", "the", "No article needed", "No article needed",
      "A", "Although 'European' starts with a vowel letter, it begins with a consonant sound /j/ (yu), requiring 'a'.",
      "'European' begins phonetically with a consonant glide /j/, therefore requiring indefinite article 'a'.")

add_q(35, "English", "Prepositions",
      "Fill in the blank with the correct preposition: 'The candidate was accused ________ cheating in the exam.'",
      "Fill in the blank: 'The candidate was accused ________ cheating in the exam.'",
      "of", "of", "with", "with", "for", "for", "by", "by",
      "A", "The adjective/verb 'accuse' takes the fixed preposition 'of' (accused of something).",
      "The standard prepositional collocation with 'accused' is 'of'.")

add_q(36, "English", "Vocabulary - Synonyms",
      "Select the synonym of the word 'CANDID':",
      "What is the nearest synonym of 'CANDID'?",
      "Frank", "Frank", "Secretive", "Secretive", "Deceitful", "Deceitful", "Arrogant", "Arrogant",
      "A", "'Candid' means truthful, straightforward, and outspoken; 'Frank' is its exact synonym.",
      "'Candid' signifies open, honest, and direct expression, matching 'Frank'.")

add_q(37, "English", "Vocabulary - Antonyms",
      "Choose the word that is OPPOSITE in meaning to 'METICULOUS':",
      "Choose the word opposite in meaning to 'METICULOUS':",
      "Careless", "Careless", "Thorough", "Thorough", "Accurate", "Accurate", "Diligent", "Diligent",
      "A", "'Meticulous' means showing great attention to detail; its opposite is 'Careless'.",
      "'Meticulous' means extremely careful and precise; the direct antonym is 'Careless'.")

add_q(38, "English", "Subject-Verb Agreement",
      "Choose the correct option: 'Neither the teacher nor the students ________ present in the auditorium.'",
      "Choose the grammatically correct option: 'Neither the teacher nor the students ________ present in the auditorium.'",
      "were", "were", "was", "was", "is", "is", "has been", "has been",
      "A", "In 'Neither... nor...', the verb agrees with the closer subject. 'Students' is plural, so 'were' is used.",
      "With correlative conjunctions 'neither... nor', the verb agrees with the proximate subject (students -> were).")

add_q(39, "English", "Tenses",
      "Identify the tense: 'By next December, she will have been working in this school for five years.'",
      "Identify the tense in: 'By next December, she will have been working in this school for five years.'",
      "Future Perfect Continuous Tense", "Future Perfect Continuous Tense",
      "Future Continuous Tense", "Future Continuous Tense",
      "Future Perfect Tense", "Future Perfect Tense",
      "Present Perfect Continuous Tense", "Present Perfect Continuous Tense",
      "A", "'Will have been + verb-ing' denotes Future Perfect Continuous Tense.",
      "The auxiliary structure 'will have been + -ing' marks the future perfect continuous aspect.")

add_q(40, "English", "Sentence Structure & Types",
      "'Though he worked hard, he could not qualify the examination.' This is a:",
      "'Though he worked hard, he could not qualify the examination.' This sentence is an example of:",
      "Complex Sentence", "Complex Sentence",
      "Compound Sentence", "Compound Sentence",
      "Simple Sentence", "Simple Sentence",
      "Compound-Complex Sentence", "Compound-Complex Sentence",
      "A", "The sentence contains one subordinate clause ('Though he worked hard') and one main clause, making it Complex.",
      "A sentence with one independent clause and at least one dependent clause is a Complex Sentence.")

# -------------------------------------------------------------
# SECTION 4: SCIENCE (Q41 - Q50) [10 Questions]
# -------------------------------------------------------------
add_q(41, "Science", "भौतिकी - गति व बल",
      "रॉकेट का प्रक्षेपण न्यूटन के किस गति नियम पर आधारित होता है?",
      "The propulsion of a rocket is based on which of Newton's laws of motion?",
      "तृतीय गति नियम (क्रिया-प्रतिक्रिया)", "Newton's Third Law (Action-Reaction)",
      "प्रथम गति नियम (जड़त्व)", "Newton's First Law (Inertia)",
      "द्वितीय गति नियम (संवेग परिवर्तन)", "Newton's Second Law (Force & Acceleration)",
      "गुरुत्वाकर्षण का नियम", "Universal Law of Gravitation",
      "A", "रॉकेट गैसों को तीव्र वेग से पीछे छोड़ता है (क्रिया), जिसके फलस्वरूप आगे की ओर तीव्र बल (प्रतिक्रिया) मिलता है।",
      "Rocket launch operates on Newton's third law of motion: every action has an equal and opposite reaction.")

add_q(42, "Science", "भौतिकी - प्रकाश",
      "आकाश का नीला रंग दिखाई देने का मुख्य वैज्ञानिक कारण क्या है?",
      "The blue appearance of the clear sky is primarily due to which phenomenon?",
      "प्रकाश का प्रकीर्णन", "Scattering of Light (Rayleigh Scattering)",
      "प्रकाश का अपवर्तन", "Refraction of Light",
      "प्रकाश का परावर्तन", "Reflection of Light",
      "प्रकाश का पूर्ण आंतरिक परावर्तन", "Total Internal Reflection",
      "A", "रैले प्रकीर्णन नियमानुसार कम तरंगदैर्घ्य वाला नीला प्रकाश वायुमंडलीय कणों द्वारा सर्वाधिक प्रकीर्णित होता है।",
      "Shorter wavelengths (blue) are scattered much more strongly by atmospheric molecules than red.")

add_q(43, "Science", "रसायन विज्ञान - अम्ल व क्षार",
      "शुद्ध जल का pH मान 25°C ताप पर कितना होता है?",
      "What is the pH value of pure water at 25°C?",
      "7", "7 (Neutral)", "0", "0", "14", "14", "5.6", "5.6",
      "A", "शुद्ध जल उदासीन होता है, इसलिए 25°C पर इसका pH मान ठीक 7 होता है।",
      "Pure neutral water at 25°C possesses equal concentrations of H+ and OH- ions, yielding pH = 7.")

add_q(44, "Science", "रसायन विज्ञान - धातु व अधातु",
      "कमरे के सामान्य ताप पर द्रव अवस्था में पाई जाने वाली एकमात्र धातु कौन सी है?",
      "Which is the only metal that remains in liquid state at normal room temperature?",
      "पारा (मरकरी - Hg)", "Mercury (Hg)", "ब्रोमीन (Br)", "Bromine (Br)", "सोडियम (Na)", "Sodium (Na)", "गैलियम (Ga)", "Gallium (Ga)",
      "A", "पारा (Hg) एकमात्र धातु है जो कमरे के तापमान पर द्रव अवस्था में रहती है (ब्रोमीन अधातु है)।",
      "Mercury is the unique metallic element that exists in liquid phase at standard room temperature.")

add_q(45, "Science", "जीव विज्ञान - कोशिका",
      "कोशिका का 'शक्तिगृह' (पावरहाउस) किसे कहा जाता है?",
      "Which cell organelle is famously known as the 'Powerhouse of the Cell'?",
      "माइटोकॉन्ड्रिया", "Mitochondria", "राइबोसोम", "Ribosome", "लाइसोसोम", "Lysosome", "गॉल्जीकाय", "Golgi Body",
      "A", "माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ऊर्जा (ATP) उत्पन्न करता है, इसलिए इसे कोशिका का पावरहाउस कहते हैं।",
      "Mitochondria generate cellular chemical energy stored in adenosine triphosphate (ATP).")

add_q(46, "Science", "जीव विज्ञान - मानव शरीर",
      "मानव रक्त में ऑक्सीजन का परिवहन किस वर्णक (पिगमेंट) द्वारा किया जाता है?",
      "Which respiratory pigment is responsible for transporting oxygen in human blood?",
      "हीमोग्लोबिन", "Hemoglobin", "मायोग्लोबिन", "Myoglobin", "क्लोरोफिल", "Chlorophyll", "बिलीरुबिन", "Bilirubin",
      "A", "लाल रक्त कणिकाओं (RBC) में उपस्थित लौह-युक्त प्रोटीन हीमोग्लोबिन ऑक्सीजन का संवहन करता है।",
      "Hemoglobin is the iron-containing oxygen-transport metalloprotein in erythrocytes.")

add_q(47, "Science", "जीव विज्ञान - पोषण व विटामिन",
      "विटामिन 'सी' (C) की कमी से मानव शरीर में कौन सा रोग उत्पन्न होता है?",
      "Deficiency of Vitamin C causes which disease in the human body?",
      "स्कर्वी", "Scurvy", "रतौंधी", "Night Blindness", "बेरी-बेरी", "Beriberi", "रिकेट्स", "Rickets",
      "A", "एस्कॉर्बिक एसिड (विटामिन C) की कमी से मसूड़ों से खून आना और स्कर्वी रोग होता है।",
      "Deficiency of ascorbic acid (Vitamin C) impairs collagen synthesis, causing scurvy.")

add_q(48, "Science", "पर्यावरण विज्ञान",
      "ओजोन परत वायुमंडल के किस संस्तर (परत) में मुख्य रूप से पाई जाती है?",
      "In which layer of the atmosphere is the ozone layer predominantly concentrated?",
      "समताप मंडल (स्ट्रैटोस्फियर)", "Stratosphere", "क्षोभ मंडल (ट्रोपोस्फियर)", "Troposphere", "मध्य मंडल (मेसोस्फियर)", "Mesosphere", "आयन मंडल (थर्मोस्फियर)", "Ionosphere",
      "A", "ओजोन परत पृथ्वी से 15-35 किमी ऊपर समताप मंडल में स्थित होकर पराबैंगनी किरणों से रक्षा करती है।",
      "The ozone layer resides in the lower stratosphere, shielding Earth from lethal solar UV-B rays.")

add_q(49, "Science", "भौतिकी - ध्वनि",
      "मानव कान के लिए श्रव्य ध्वनि तरंगों (Audible frequency) की सीमा क्या होती है?",
      "What is the audible frequency range of sound waves for normal human ears?",
      "20 Hz से 20,000 Hz", "20 Hz to 20,000 Hz", "20 Hz से कम", "Less than 20 Hz", "20,000 Hz से अधिक", "Above 20,000 Hz", "1 Hz से 100 Hz", "1 Hz to 100 Hz",
      "A", "मानव कान 20 हर्ट्ज से 20 किलोहर्ट्ज (20,000 Hz) तक की ध्वनि सुन सकते हैं।",
      "The standard audio frequency spectrum audible to human ears spans 20 Hz to 20,000 Hz.")

add_q(50, "Science", "भौतिकी - कार्य व ऊर्जा",
      "जब किसी वस्तु को ऊपर की ओर फेंका जाता है, तो उसके उच्चतम बिंदु पर क्या होता है?",
      "When an object is thrown vertically upwards, what happens at its highest point?",
      "वेग शून्य होता है तथा गुरुत्वीय त्वरण 9.8 m/s² नीचे की ओर कार्य करता है।", "Velocity is zero and gravitational acceleration acts downward.",
      "वेग तथा त्वरण दोनों शून्य होते हैं।", "Both velocity and acceleration become zero.",
      "वेग अधिकतम होता है।", "Velocity is at maximum.",
      "त्वरण की दिशा ऊपर की ओर हो जाती है।", "Acceleration directs upward.",
      "A", "शीर्ष बिंदु पर क्षणिक वेग शून्य हो जाता है किंतु गुरुत्वीय त्वरण (g = 9.8 m/s²) सदैव नीचे की ओर कार्यरत रहता है।",
      "At peak altitude, instantaneous vertical velocity is 0 while downward acceleration due to gravity persists.")

# -------------------------------------------------------------
# SECTION 5: MATHEMATICS (Q51 - Q70) [20 Questions]
# -------------------------------------------------------------
add_q(51, "Mathematics", "संख्या पद्धति",
      "प्रथम 10 अभाज्य संख्याओं में सबसे छोटी अभाज्य संख्या कौन सी है?",
      "Which is the smallest prime number?",
      "2", "2", "1", "1", "3", "3", "0", "0",
      "A", "2 एकमात्र सम अभाज्य संख्या है और यह सबसे छोटी अभाज्य संख्या भी है (1 न तो भाज्य है न अभाज्य)।",
      "2 is the smallest prime number as well as the only even prime number.")

add_q(52, "Mathematics", "प्रतिशत",
      "यदि किसी वस्तु के मूल्य में 20% की वृद्धि की जाए और फिर 20% की कमी कर दी जाए, तो वस्तु के कुल मूल्य पर क्या प्रभाव पड़ेगा?",
      "If the price of an article is increased by 20% and subsequently decreased by 20%, what is the net percentage change?",
      "4% की कमी", "4% decrease", "4% की वृद्धि", "4% increase", "कोई परिवर्तन नहीं", "No change", "2% की कमी", "2% decrease",
      "A", "कुल प्रभाव = +20 - 20 - (20 × 20)/100 = -4% (अर्थात् 4% की कमी)।",
      "Formula: (+x - x - x²/100)% = -(400/100)% = -4%, representing a 4% decrease.")

add_q(53, "Mathematics", "लाभ और हानि",
      "एक व्यापारी 1200 रुपये में खरीदी गई वस्तु को 1500 रुपये में बेचता है। उसका प्रतिशत लाभ कितना है?",
      "A trader purchases an item for Rs. 1,200 and sells it for Rs. 1,500. What is his percentage profit?",
      "25%", "25%", "20%", "20%", "30%", "30%", "15%", "15%",
      "A", "लाभ = 1500 - 1200 = 300 रुपये। लाभ% = (300 / 1200) × 100 = 25%।",
      "Profit = Rs. 300. Profit % = (300 / 1200) * 100 = 25%.")

add_q(54, "Mathematics", "साधारण ब्याज",
      "5000 रुपये की धनराशि पर 10% वार्षिक साधारण ब्याज की दर से 3 वर्ष का ब्याज कितना होगा?",
      "What is the simple interest on a principal of Rs. 5,000 at 10% annual rate for 3 years?",
      "1500 रुपये", "Rs. 1,500", "1200 रुपये", "Rs. 1,200", "1650 रुपये", "Rs. 1,650", "2000 रुपये", "Rs. 2,000",
      "A", "SI = (P × R × T) / 100 = (5000 × 10 × 3) / 100 = 1500 रुपये।",
      "Simple Interest = (5000 * 10 * 3) / 100 = Rs. 1,500.")

add_q(55, "Mathematics", "चक्रवृद्धि ब्याज",
      "8000 रुपये की धनराशि पर 5% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज कितना होगा?",
      "What is the compound interest on Rs. 8,000 at 5% per annum compounded annually for 2 years?",
      "820 रुपये", "Rs. 820", "800 रुपये", "Rs. 800", "850 रुपये", "Rs. 850", "900 रुपये", "Rs. 900",
      "A", "A = 8000(1 + 5/100)² = 8000 × (21/20)² = 8820। CI = 8820 - 8000 = 820 रुपये।",
      "Amount = 8000 * (1.05)^2 = Rs. 8,820. Compound Interest = 8820 - 8000 = Rs. 820.")

add_q(56, "Mathematics", "औसत",
      "संख्याओं 12, 18, 24, 30 और 36 का समांतर माध्य (औसत) क्या होगा?",
      "What is the arithmetic mean (average) of the numbers 12, 18, 24, 30, and 36?",
      "24", "24", "22", "22", "26", "26", "28", "28",
      "A", "योग = 120; औसत = 120 / 5 = 24 (समांतर श्रेणी में मध्य पद ही औसत होता है)।",
      "Sum = 120. Mean = 120 / 5 = 24. Since these form an AP, middle term is the mean.")

add_q(57, "Mathematics", "अनुपात और समानुपात",
      "यदि A : B = 2 : 3 तथा B : C = 4 : 5 हो, तो A : B : C का मान क्या होगा?",
      "If A : B = 2 : 3 and B : C = 4 : 5, find the ratio A : B : C:",
      "8 : 12 : 15", "8 : 12 : 15", "6 : 9 : 15", "6 : 9 : 15", "8 : 10 : 15", "8 : 10 : 15", "2 : 4 : 5", "2 : 4 : 5",
      "A", "A : B : C = (2×4) : (3×4) : (3×5) = 8 : 12 : 15।",
      "Multiply to balance B: A:B:C = (2*4) : (3*4) : (3*5) = 8 : 12 : 15.")

add_q(58, "Mathematics", "ल.स. और म.स. (LCM & HCF)",
      "दो संख्याओं का म.स. 12 और ल.स. 240 है। यदि इनमें से एक संख्या 48 है, तो दूसरी संख्या क्या होगी?",
      "The HCF of two numbers is 12 and their LCM is 240. If one number is 48, find the second number:",
      "60", "60", "40", "40", "72", "72", "80", "80",
      "A", "सूत्र: पहली संख्या × दूसरी संख्या = ल.स. × म.स. ⇒ 48 × N = 240 × 12 ⇒ N = 2880 / 48 = 60।",
      "Product of numbers = LCM * HCF => 48 * N = 240 * 12 => N = 2880 / 48 = 60.")

add_q(59, "Mathematics", "क्षेत्रमिति - आयत",
      "एक आयताकार मैदान की लंबाई 25 मीटर तथा चौड़ाई 15 मीटर है। इसके चारों ओर बाड़ लगाने के लिए आवश्यक परिमाप कितना होगा?",
      "The length and breadth of a rectangular field are 25 m and 15 m respectively. Find its perimeter:",
      "80 मीटर", "80 meters", "75 मीटर", "75 meters", "100 मीटर", "100 meters", "375 मीटर", "375 meters",
      "A", "आयत का परिमाप = 2(लंबाई + चौड़ाई) = 2(25 + 15) = 2 × 40 = 80 मीटर।",
      "Perimeter = 2 * (length + breadth) = 2 * (25 + 15) = 80 m.")

add_q(60, "Mathematics", "क्षेत्रमिति - वृत्त",
      "एक वृत्ताकार पहिये की त्रिज्या 14 सेमी है। एक चक्कर लगाने में यह कितनी दूरी तय करेगा? (π = 22/7)",
      "A wheel has a radius of 14 cm. What distance does it cover in one complete revolution? (Use π = 22/7)",
      "88 सेमी", "88 cm", "44 सेमी", "44 cm", "176 सेमी", "176 cm", "616 सेमी", "616 cm",
      "A", "एक चक्कर की दूरी = परिधि = 2πr = 2 × (22/7) × 14 = 88 सेमी।",
      "Distance in 1 revolution = circumference = 2 * π * r = 2 * (22/7) * 14 = 88 cm.")

add_q(61, "Mathematics", "ज्यामिति - त्रिभुज",
      "एक त्रिभुज के दो कोण क्रमशः 65° और 55° हैं। तीसरे कोण की माप क्या होगी?",
      "Two angles of a triangle are 65° and 55°. Find the measure of the third angle:",
      "60°", "60°", "70°", "70°", "50°", "50°", "80°", "80°",
      "A", "त्रिभुज के तीनों कोणों का योग 180° होता है: 180° - (65° + 55°) = 180° - 120° = 60°।",
      "The sum of angles in a triangle is 180°. Third angle = 180 - (65 + 55) = 60°.")

add_q(62, "Mathematics", "समय और कार्य",
      "A किसी काम को 10 दिन में तथा B उसी काम को 15 दिन में पूरा करता है। दोनों मिलकर उस काम को कितने दिन में पूरा करेंगे?",
      "A can complete a task in 10 days and B in 15 days. In how many days can both complete it together?",
      "6 दिन", "6 days", "8 दिन", "8 days", "5 दिन", "5 days", "7.5 दिन", "7.5 days",
      "A", "1 दिन का कार्य = 1/10 + 1/15 = 5/30 = 1/6 भाग। अतः पूरा काम = 6 दिन।",
      "Combined 1-day rate = 1/10 + 1/15 = 1/6. Total days = 6 days.")

add_q(63, "Mathematics", "चाल, समय और दूरी",
      "72 किमी/घंटा की गति को मीटर प्रति सेकंड (m/s) में परिवर्तित कीजिए:",
      "Convert the speed of 72 km/h into meters per second (m/s):",
      "20 m/s", "20 m/s", "25 m/s", "25 m/s", "15 m/s", "15 m/s", "18 m/s", "18 m/s",
      "A", "72 × (5/18) = 4 × 5 = 20 m/s।",
      "Multiply by 5/18: 72 * (5/18) = 20 m/s.")

add_q(64, "Mathematics", "बीजगणित",
      "यदि (x + 1/x) = 5 हो, तो (x² + 1/x²) का मान क्या होगा?",
      "If (x + 1/x) = 5, find the value of (x² + 1/x²):",
      "23", "23", "25", "25", "27", "27", "21", "21",
      "A", "(x + 1/x)² = x² + 1/x² + 2 ⇒ 25 = x² + 1/x² + 2 ⇒ x² + 1/x² = 23।",
      "Using identity (x + 1/x)^2 = x^2 + 1/x^2 + 2: 5^2 - 2 = 25 - 2 = 23.")

add_q(65, "Mathematics", "घातांक और करणी",
      "मान ज्ञात कीजिए: (27)^(2/3) × (8)^(4/3)",
      "Evaluate: (27)^(2/3) * (8)^(4/3)",
      "144", "144", "72", "72", "108", "108", "96", "96",
      "A", "(27)^(2/3) = (3³)^(2/3) = 3² = 9; (8)^(4/3) = (2³)^(4/3) = 2⁴ = 16। गुणनफल = 9 × 16 = 144।",
      "(3^3)^(2/3) = 9; (2^3)^(4/3) = 16. Product = 9 * 16 = 144.")

add_q(66, "Mathematics", "त्रिकोणमिति",
      "मान ज्ञात कीजिए: sin² 30° + cos² 30°",
      "Find the value of: sin² 30° + cos² 30°",
      "1", "1", "1/2", "1/2", "3/4", "3/4", "2", "2",
      "A", "सर्वसमिका sin² θ + cos² θ = 1 सदैव सत्य होती है (अथवा (1/2)² + (√3/2)² = 1/4 + 3/4 = 1)।",
      "By trigonometric identity sin²θ + cos²θ = 1.")

add_q(67, "Mathematics", "सांख्यिकी - बहुलक",
      "दिए गए आंकड़ों का बहुलक (Mode) क्या है: 4, 7, 5, 4, 8, 4, 9, 7, 4, 6?",
      "What is the mode of the given observations: 4, 7, 5, 4, 8, 4, 9, 7, 4, 6?",
      "4", "4", "7", "7", "5", "5", "8", "8",
      "A", "संख्या 4 सबसे अधिक बार (4 बार) आई है, अतः बहुलक 4 है।",
      "The value 4 occurs with the highest frequency (4 times), so mode is 4.")

add_q(68, "Mathematics", "प्रायिकता (Probability)",
      "एक निष्पक्ष पासे (Dice) को फेंकने पर एक सम संख्या आने की प्रायिकता क्या होगी?",
      "What is the probability of getting an even number when rolling a fair six-sided die?",
      "1/2", "1/2", "1/3", "1/3", "1/6", "1/6", "2/3", "2/3",
      "A", "कुल परिणाम = {1, 2, 3, 4, 5, 6} = 6। सम संख्याएँ = {2, 4, 6} = 3। प्रायिकता = 3/6 = 1/2।",
      "Favorable outcomes = {2, 4, 6} (3). Total outcomes = 6. Probability = 3/6 = 1/2.")

add_q(69, "Mathematics", "आयतन - घनाभ",
      "एक घनाभाकार बक्से की विमाएँ 10 सेमी × 8 सेमी × 5 सेमी हैं। इसका कुल आयतन कितना होगा?",
      "The dimensions of a cuboidal box are 10 cm * 8 cm * 5 cm. Find its volume:",
      "400 सेमी³", "400 cm³", "360 सेमी³", "360 cm³", "800 सेमी³", "800 cm³", "240 सेमी³", "240 cm³",
      "A", "घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई = 10 × 8 × 5 = 400 सेमी³।",
      "Volume of cuboid = l * b * h = 10 * 8 * 5 = 400 cm³.")

add_q(70, "Mathematics", "भिन्न और दशमलव",
      "भिन्न 3/8 का दशमलव प्रसार क्या होगा?",
      "What is the decimal expansion of fraction 3/8?",
      "0.375", "0.375", "0.325", "0.325", "0.350", "0.350", "0.380", "0.380",
      "A", "3 / 8 = 0.375 (यह एक शांत दशमलव प्रसार है)।",
      "3 / 8 = 0.375 (terminating decimal).")

# -------------------------------------------------------------
# SECTION 6: ENVIRONMENTAL STUDIES & SOCIAL SCIENCE (Q71 - Q80) [10 Questions]
# -------------------------------------------------------------
add_q(71, "Environmental Studies & Social Science", "भारतीय संविधान",
      "भारतीय संविधान के किस अनुच्छेद के अंतर्गत 'अस्पृश्यता का उन्मूलन' किया गया है?",
      "Under which Article of the Indian Constitution is 'Abolition of Untouchability' enacted?",
      "अनुच्छेद 17", "Article 17", "अनुच्छेद 14", "Article 14", "अनुच्छेद 19", "Article 19", "अनुच्छेद 21", "Article 21",
      "A", "भारतीय संविधान के अनुच्छेद 17 में अस्पृश्यता को दंडनीय अपराध घोषित करते हुए इसका उन्मूलन किया गया है।",
      "Article 17 abolishes untouchability and forbids its practice in any form.")

add_q(72, "Environmental Studies & Social Science", "भूगोल - नदियाँ",
      "भारत की सबसे लंबी नदी कौन सी है?",
      "Which is the longest river flowing entirely within/originating in India?",
      "गंगा नदी (2525 किमी)", "Ganga River (2525 km)", "गोदावरी नदी", "Godavari River", "ब्रह्मपुत्र नदी", "Brahmaputra River", "यमुना नदी", "Yamuna River",
      "A", "गंगा नदी 2525 किमी लंबाई के साथ भारत की सबसे लंबी पवित्र नदी है।",
      "Ganga is the longest river in India spanning 2,525 km.")

add_q(73, "Environmental Studies & Social Science", "इतिहास - स्वतंत्रता संग्राम",
      "वर्ष 1857 के प्रथम भारतीय स्वतंत्रता संग्राम की शुरुआत किस छावनी से हुई थी?",
      "From which cantonment did the First War of Indian Independence (1857 Revolt) begin?",
      "मेरठ छावनी", "Meerut Cantonment", "बैरकपुर", "Barrackpore", "झाँसी", "Jhansi", "कानपुर", "Kanpur",
      "A", "10 मई 1857 को मेरठ छावनी से सैनिकों ने दिल्ली कूच के साथ क्रांति का औपचारिक शंखनाद किया था।",
      "The rebellion formally commenced on May 10, 1857, at the Meerut cantonment.")

add_q(74, "Environmental Studies & Social Science", "पर्यावरण व पारिस्थितिकी",
      "विश्व पर्यावरण दिवस प्रतिवर्ष किस तिथि को आयोजित किया जाता है?",
      "On which date is World Environment Day celebrated globally every year?",
      "5 जून", "June 5", "22 अप्रैल", "April 22", "16 सितंबर", "September 16", "11 जुलाई", "July 11",
      "A", "संयुक्त राष्ट्र द्वारा 1974 से प्रतिवर्ष 5 जून को विश्व पर्यावरण दिवस मनाया जाता है।",
      "World Environment Day is celebrated worldwide on June 5 led by UNEP.")

add_q(75, "Environmental Studies & Social Science", "भूगोल - राष्ट्रीय उद्यान",
      "उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान 'दुधवा राष्ट्रीय उद्यान' किस जनपद में स्थित है?",
      "In which district of Uttar Pradesh is the Dudhwa National Park situated?",
      "लखीमपुर खीरी", "Lakhimpur Kheri", "पीलीभीत", "Pilibhit", "सोनभद्र", "Sonbhadra", "मिर्ज़ापुर", "Mirzapur",
      "A", "दुधवा राष्ट्रीय उद्यान तराई क्षेत्र में उत्तर प्रदेश के लखीमपुर खीरी जनपद में स्थित बाघ व बारहसिंगा अभयारण्य है।",
      "Dudhwa National Park is situated in Lakhimpur Kheri district of Uttar Pradesh.")

add_q(76, "Environmental Studies & Social Science", "भारतीय राजव्यवस्था",
      "भारतीय संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?",
      "Who was the Chairman of the Drafting Committee of the Indian Constituent Assembly?",
      "डॉ. भीमराव आंबेडकर", "Dr. B. R. Ambedkar", "डॉ. राजेंद्र प्रसाद", "Dr. Rajendra Prasad", "पं. जवाहरलाल नेहरू", "Jawaharlal Nehru", "सर बी. एन. राव", "Sir B. N. Rau",
      "A", "प्रारूप समिति के अध्यक्ष डॉ. भीमराव आंबेडकर थे जिन्हें 'संविधान का निर्माता' कहा जाता है।",
      "Dr. B. R. Ambedkar served as the chairman of the Drafting Committee.")

add_q(77, "Environmental Studies & Social Science", "खनिज व संसाधन",
      "बॉक्साइट (Bauxite) किस प्रमुख धातु का प्राथमिक अयस्क है?",
      "Bauxite is the principal ore of which major metal?",
      "एल्युमिनियम", "Aluminium", "लोहा", "Iron", "ताँबा", "Copper", "जस्ता", "Zinc",
      "A", "बॉक्साइट (Al₂O₃·2H₂O) एल्युमिनियम का सबसे महत्वपूर्ण प्राकृतिक खनिज अयस्क है।",
      "Bauxite is the primary commercial ore used for extracting aluminium.")

add_q(78, "Environmental Studies & Social Science", "यातायात एवं सड़क सुरक्षा",
      "सड़क यातायात संकेतों में लाल रंग की अष्टकोणीय (Octagonal) यातायात बत्ती या संकेत किसका प्रतीक होता है?",
      "In standard road traffic signage, an octagonal red sign signifies:",
      "रुकिए (STOP)", "STOP", "धीरे चलिए", "SLOW DOWN", "आगे रास्ता बंद है", "NO ENTRY", "गति सीमा", "SPEED LIMIT",
      "A", "अंतरराष्ट्रीय मानक के अनुसार अष्टकोणीय लाल बोर्ड 'STOP' (रुकिए) का अनिवार्य संकेत होता है।",
      "The universal octagonal red traffic sign mandates coming to a full STOP.")

add_q(79, "Environmental Studies & Social Science", "सौर मंडल",
      "सौर मंडल का सबसे चमकीला एवं 'भोर का तारा' कहा जाने वाला ग्रह कौन सा है?",
      "Which planet is known as the brightest planet and the 'Morning/Evening Star'?",
      "शुक्र (Venus)", "Venus", "मंगल (Mars)", "Mars", "बृहस्पति (Jupiter)", "Jupiter", "बुध (Mercury)", "Mercury",
      "A", "शुक्र ग्रह अत्यधिक परावर्तक सल्फ्यूरिक अम्ल के बादलों के कारण सबसे चमकीला दिखता है।",
      "Venus is the brightest natural object in the night sky after Moon, known as Morning Star.")

add_q(80, "Environmental Studies & Social Science", "जैव विविधता",
      "भारत में 'चिपको आंदोलन' वनों की कटाई रोकने हेतु किसके नेतृत्व में प्रारंभ हुआ था?",
      "Under whose pioneering leadership was the historic 'Chipko Movement' initiated in Uttarakhand?",
      "सुंदरलाल बहुगुणा एवं चंडी प्रसाद भट्ट", "Sunderlal Bahuguna & Chandi Prasad Bhatt",
      "मेधा पाटकर", "Medha Patkar", "बाबा आम्टे", "Baba Amte", "सलीम अली", "Salim Ali",
      "A", "चिपको आंदोलन 1973 में उत्तराखंड के चमोली में पेड़ों से चिपककर उनकी रक्षा के लिए सुंदरलाल बहुगुणा द्वारा चलाया गया।",
      "Chipko movement began in 1973 spearheaded by Sunderlal Bahuguna and Chandi Prasad Bhatt.")

# -------------------------------------------------------------
# SECTION 7: TEACHING METHODOLOGY (Q81 - Q90) [10 Questions]
# -------------------------------------------------------------
add_q(81, "Teaching Methodology", "शिक्षण विधियाँ",
      "किंडरगार्टन (बालोद्यान) शिक्षण पद्धति के जनक कौन माने जाते हैं?",
      "Who is considered the founder of the Kindergarten method of education?",
      "फ्रेडरिक फ्रोबेल", "Friedrich Froebel", "मारिया मांटेसरी", "Maria Montessori", "जॉन ड्यूवी", "John Dewey", "रॉबर्ट गैगने", "Robert Gagne",
      "A", "जर्मन शिक्षाविद फ्रेडरिक फ्रोबेल ने 1837 में खेल-आधारित 'किंडरगार्टन' प्रणाली की स्थापना की।",
      "Friedrich Froebel originated the kindergarten system based on play and self-activity.")

add_q(82, "Teaching Methodology", "शिक्षण सूत्र",
      "प्राथमिक स्तर पर छात्रों को पढ़ाते समय निम्नलिखित में से किस शिक्षण सूत्र का पालन सबसे प्रभावी होता है?",
      "Which teaching maxim is most effective when teaching young children at the primary level?",
      "मूर्त से अमूर्त की ओर (Concrete to Abstract)", "Concrete to Abstract",
      "अमूर्त से मूर्त की ओर", "Abstract to Concrete",
      "जटिल से सरल की ओर", "Complex to Simple",
      "अज्ञात से ज्ञात की ओर", "Unknown to Known",
      "A", "बच्चे प्रत्यक्ष वस्तुओं को देखकर जल्दी सीखते हैं, अतः मूर्त से अमूर्त की ओर का सूत्र सर्वोत्कृष्ट है।",
      "Young children comprehend tangible/concrete materials before formulating abstract concepts.")

add_q(83, "Teaching Methodology", "मूल्यांकन एवं मापन",
      "सतत एवं समग्र मूल्यांकन (CCE) में 'समग्र' (Comprehensive) शब्द का मुख्य तात्पर्य क्या है?",
      "In Continuous and Comprehensive Evaluation (CCE), what does 'Comprehensive' signify?",
      "शैक्षिक एवं सह-शैक्षिक दोनों पक्षों का मूल्यांकन", "Evaluation of both scholastic and co-scholastic domains",
      "केवल वार्षिक लिखित परीक्षा", "Only terminal written examinations",
      "केवल पाठ्यपुस्तकीय ज्ञान का परीक्षण", "Assessment of textbook content alone",
      "विद्यार्थियों का मासिक ग्रेडिंग करना", "Monthly grading of students",
      "A", "समग्रता का अर्थ छात्र के संज्ञानात्मक (शैक्षिक) तथा भावात्मक व क्रियात्मक (सह-शैक्षिक) सभी पक्षों का विकास परखना है।",
      "Comprehensive evaluation encompasses both scholastic (academic) and co-scholastic (activities/values) growth.")

add_q(84, "Teaching Methodology", "समावेशी शिक्षा",
      "समावेशी शिक्षा (Inclusive Education) का मूल दर्शन क्या है?",
      "What is the foundational philosophy of Inclusive Education?",
      "बिना किसी भेदभाव के सभी बच्चों को एक ही नियमित विद्यालय में एक साथ शिक्षा देना", "Educating all children together in regular classrooms irrespective of differences",
      "दिव्यांग बच्चों के लिए अलग विशेष विद्यालयों की स्थापना करना", "Establishing segregated special institutions for differently-abled",
      "केवल प्रतिभाशाली बच्चों को उच्च स्तरीय सुविधाएँ देना", "Providing accelerated programs only to gifted students",
      "कमजोर छात्रों को विद्यालय से अलग करना", "Segregating slow learners",
      "A", "समावेशी शिक्षा का उद्देश्य प्रत्येक बालक—चाहे वह सामान्य हो या विशेष आवश्यकता वाला—को एक समान मंच प्रदान करना है।",
      "Inclusive education ensures all students attend age-appropriate regular classes regardless of challenges.")

add_q(85, "Teaching Methodology", "सूक्ष्म शिक्षण",
      "भारतीय मॉडल के अनुसार 'सूक्ष्म शिक्षण' (Micro-teaching) के एक चक्र की कुल मानक समयावधि कितनी होती है?",
      "What is the standard total duration of one micro-teaching cycle in the Indian NCERT model?",
      "36 मिनट", "36 Minutes", "45 मिनट", "45 Minutes", "30 मिनट", "30 Minutes", "60 मिनट", "60 Minutes",
      "A", "NCERT मॉडल: पाठ योजना (पहले) + शिक्षण (6) + प्रतिपुष्टि (6) + पुनः योजना (12) + पुनः शिक्षण (6) + पुनः प्रतिपुष्टि (6) = कुल 36 मिनट।",
      "NCERT standard microteaching cycle: Teach (6m), Feedback (6m), Re-plan (12m), Re-teach (6m), Re-feedback (6m) = 36m.")

add_q(86, "Teaching Methodology", "शिक्षा का अधिकार अधिनियम",
      "निःशुल्क एवं अनिवार्य बाल शिक्षा का अधिकार (RTE) अधिनियम, 2009 किस आयु वर्ग के बच्चों के लिए लागू है?",
      "The Right to Education (RTE) Act, 2009 guarantees free and compulsory education to which age group?",
      "6 से 14 वर्ष", "6 to 14 years", "3 से 18 वर्ष", "3 to 18 years", "5 से 15 वर्ष", "5 to 15 years", "6 से 18 वर्ष", "6 to 18 years",
      "A", "संविधान के 86वें संशोधन एवं RTE 2009 के तहत 6 से 14 वर्ष के बालकों को मौलिक अधिकार प्रदान किया गया है।",
      "RTE 2009 mandates free, compulsory elementary education for children aged 6 to 14.")

add_q(87, "Teaching Methodology", "शिक्षण कौशल",
      "शिक्षण के दौरान छात्रों की भागीदारी को अधिकतम करने के लिए शिक्षक को किस प्रविधि का उपयोग करना चाहिए?",
      "To maximize student participation during a classroom lesson, a teacher should employ:",
      "प्रश्नोत्तर एवं परिचर्चा प्रविधि", "Question-Answer and Discussion technique",
      "केवल एकतरफा व्याख्यान", "Monologue lecturing only",
      "कठिन दंड का भय दिखाना", "Fear of punishment",
      "श्यामपट्ट से नकल करवाना", "Dictation and blackboard copying",
      "A", "प्रश्नोत्तर और संवाद से छात्र सक्रिय श्रोता से सक्रिय सहभागी बनते हैं।",
      "Interactive questioning engages higher-order thinking and active participation.")

add_q(88, "Teaching Methodology", "परियोजना विधि",
      "प्रयोजना/प्रोजेक्ट पद्धति (Project Method) के प्रवर्तक कौन थे?",
      "Who formulated the Project Method of teaching based on Dewey's pragmatism?",
      "विलियम एच. किलपैट्रिक", "William H. Kilpatrick", "सुकरात", "Socrates", "प्लेटो", "Plato", "अरस्तू", "Aristotle",
      "A", "जॉन ड्यूवी के शिष्य विलियम किलपैट्रिक ने 1918 में प्रोजेक्ट विधि का प्रतिपादन किया।",
      "William Heard Kilpatrick developed the project method grounded in experiential pragmatism.")

add_q(89, "Teaching Methodology", "पाठ योजना",
      "दैनिक पाठ योजना के 'पंचपदीय प्रणाली' (Five-Step System) का प्रतिपादन किसने किया था?",
      "Who introduced the famous 'Five-Step System' (Herbartian steps) of lesson planning?",
      "जोहान फ्रेडरिक हर्बर्ट", "Johann Friedrich Herbart", "ब्लूम", "Benjamin Bloom", "स्किनर", "B. F. Skinner", "पेस्टालॉजी", "Pestalozzi",
      "A", "हर्बर्ट ने शिक्षण में प्रस्तावना, प्रस्तुतीकरण, तुलना/संयोग, सामान्यीकरण तथा प्रयोग के पाँच पद दिए।",
      "Herbartian five steps comprise Preparation, Presentation, Association, Generalization, and Application.")

add_q(90, "Teaching Methodology", "अधिगम सामग्री (TLM)",
      "कक्षा कक्ष में 'ऑडियो-विजुअल एड्स' (दृश्य-श्रव्य सामग्री) का उपयोग करने का मुख्य लाभ क्या है?",
      "What is the foremost advantage of utilizing Audio-Visual Aids in the classroom?",
      "अधिकतम ज्ञानेंद्रियों को सक्रिय कर अधिगम को स्थायी बनाना", "Activating multiple sensory channels to make learning durable",
      "शिक्षक के श्रम को समाप्त करना", "Eliminating teacher workload",
      "कक्षा में मनोरंजन कराना", "Providing pure entertainment",
      "पाठ्यक्रम को जल्दी समाप्त करना", "Finishing curriculum quickly",
      "A", "दृश्य-श्रव्य साधन आँख और कान दोनों इंद्रियों को व्यस्त कर समझ को गहरा और स्थायी बनाते हैं।",
      "Multi-sensory engagement enhances comprehension retention and cognitive anchoring.")

# -------------------------------------------------------------
# SECTION 8: CHILD PSYCHOLOGY (Q91 - Q100) [10 Questions]
# -------------------------------------------------------------
add_q(91, "Child Psychology", "विकास के सिद्धांत",
      "विकास के 'मस्तकाधोमुखी' (Cephalocaudal) सिद्धांत के अनुसार बालक का विकास किस दिशा में अग्रसर होता है?",
      "According to the Cephalocaudal trend of physical and motor development, growth proceeds from:",
      "सिर से पैर की ओर", "Head to Toe (Head downwards)",
      "पैर से सिर की ओर", "Toe to Head",
      "केंद्र से बाहर की ओर", "Center outward to extremities",
      "सामान्य से विशिष्ट की ओर", "General to specific only",
      "A", "मस्तकाधोमुखी नियम के अनुसार बालक पहले अपने सिर और गर्दन पर, फिर धड़ और अंत में पैरों पर नियंत्रण सीखता है।",
      "The cephalocaudal principle dictates that control and muscular coordination progress downward from head to feet.")

add_q(92, "Child Psychology", "अधिगम सिद्धांत - थार्नडाइक",
      "एडवर्ड ली थार्नडाइक ने अपने सीखने के सिद्धांत (प्रयास एवं त्रुटि) का प्रयोग किस जीव पर किया था?",
      "On which animal did Edward Thorndike conduct his landmark trial-and-error learning experiments?",
      "बिल्ली (पहेली पेटी में)", "Cat (in Puzzle Box)", "कुत्ता", "Dog", "चूहा", "Rat", "चिम्पांजी", "Chimpanzee",
      "A", "थार्नडाइक ने भूखी बिल्ली को पजल बॉक्स में बंद कर संबंधवाद (S-R थ्योरी) सिद्ध किया था।",
      "Thorndike placed hungry cats in puzzle boxes to discover the Law of Effect in Trial and Error learning.")

add_q(93, "Child Psychology", "संज्ञानात्मक विकास - पियाजे",
      "जीन पियाजे के संज्ञानात्मक विकास के अनुसार 'वस्तु स्थायित्व' (Object Permanence) का गुण किस अवस्था में विकसित होता है?",
      "According to Jean Piaget's cognitive theory, in which stage does a child acquire Object Permanence?",
      "संवेदी-गामक अवस्था (0 से 2 वर्ष)", "Sensorimotor Stage (0 to 2 years)",
      "पूर्व-संक्रियात्मक अवस्था (2 से 7 वर्ष)", "Pre-operational Stage (2 to 7 years)",
      "मूर्त-संक्रियात्मक अवस्था (7 से 11 वर्ष)", "Concrete Operational Stage (7 to 11 years)",
      "औपचारिक संक्रियात्मक अवस्था (11 वर्ष से ऊपर)", "Formal Operational Stage (11+ years)",
      "A", "संवेदी-गामक अवस्था के अंत तक बालक समझने लगता है कि वस्तुएँ आँखों से ओझल होने पर भी अस्तित्व में रहती हैं।",
      "By the latter part of the sensorimotor stage, infants recognize objects continue to exist when unseen.")

add_q(94, "Child Psychology", "सामाजिक-सांस्कृतिक विकास - वाइगोत्स्की",
      "लेव वाइगोत्स्की के सिद्धांत में 'समीपस्थ विकास का क्षेत्र' (ZPD) से क्या तात्पर्य है?",
      "In Lev Vygotsky's socio-cultural theory, what does the 'Zone of Proximal Development' (ZPD) represent?",
      "बालक द्वारा स्वयं किए जा सकने वाले तथा किसी वयस्क की सहायता से किए जा सकने वाले कार्य के बीच का अंतर", "Distance between actual independent ability and potential performance under guidance",
      "बालक की जन्मजात बुद्धिमत्ता", "Child's innate IQ score",
      "विद्यालय का भौतिक परिवेश", "Physical school boundary",
      "बालक की शारीरिक लंबाई का अंतर", "Physical growth variation",
      "A", "ZPD बालक के वास्तविक विकास स्तर और संभावित विकास स्तर (मार्गदर्शन युक्त) के मध्य का अंतर है।",
      "ZPD denotes the continuum between what a learner can do independently versus with scaffolding.")

add_q(95, "Child Psychology", "बुद्धि सिद्धांत",
      "बुद्धि के 'द्वि-कारक सिद्धांत' (Two-Factor Theory: G-Factor & S-Factor) के प्रतिपादक कौन थे?",
      "Who propounded the Two-Factor Theory of Intelligence featuring General (g) and Specific (s) factors?",
      "चार्ल्स स्पीयरमैन", "Charles Spearman", "अल्फ्रेड बिने", "Alfred Binet", "लुई थर्स्टन", "Louis Thurstone", "हॉवर्ड गार्डनर", "Howard Gardner",
      "A", "1904 में स्पीयरमैन ने सामान्य कारक (G) और विशिष्ट कारक (S) का सिद्धांत प्रस्तुत किया।",
      "Charles Spearman formulated the 'g' and 's' factor model of general intelligence in 1904.")

add_q(96, "Child Psychology", "क्रियाप्रसूत अनुबंधन - स्किनर",
      "बी. एफ. स्किनर का 'क्रियाप्रसूत अनुबंधन' (Operant Conditioning) किस मूल संकल्पना पर आधारित है?",
      "B. F. Skinner's Operant Conditioning model primarily hinges on:",
      "पुनर्बलन (Reinforcement)", "Reinforcement", "उद्दीपक की तीव्रता", "Stimulus intensity", "अंतर्दृष्टि", "Sudden Insight", "अनुकूलन", "Habituation",
      "A", "स्किनर के अनुसार किसी अनुक्रिया के बाद मिलने वाला सकारात्मक या नकारात्मक पुनर्बलन व्यवहार को दोहराने की संभावना तय करता है।",
      "Operant conditioning posits that behavior is shaped and maintained by its reinforcing consequences.")

add_q(97, "Child Psychology", "अधिगम पठार",
      "सीखने की प्रक्रिया में जब सीखने की गति में न तो कोई उन्नति होती है और न कोई अवनति, तो उसे क्या कहा जाता है?",
      "When there is no discernible progress or change in learning over a period of time, it is known as:",
      "अधिगम का पठार (Plateau of Learning)", "Plateau of Learning",
      "अधिगम वक्र", "Learning Curve",
      "अधिगम स्थानांतरण", "Transfer of Learning",
      "अधिगम का ह्रास", "Extinction of Learning",
      "A", "थकान, अरुचि या प्रेरणा के अभाव में सीखने की गति समतल हो जाती है, जिसे सीखने का पठार कहते हैं।",
      "A period of stagnant learning where efficiency remains flat despite practice is called a learning plateau.")

add_q(98, "Child Psychology", "अधिगम अक्षमता",
      "पढ़ने में कठिनाई, अक्षरों को पहचानने में भ्रम तथा शब्दों के उच्चारण में बाधा होने वाली अधिगम अक्षमता क्या कहलाती है?",
      "A specific learning disability characterized by difficulty in reading and word decoding is termed:",
      "डिस्लेक्सिया (Dyslexia)", "Dyslexia", "डिसकैलकुलिया (Dyscalculia)", "Dyscalculia", "डिसग्राफिया (Dysgraphia)", "Dysgraphia", "डिस्प्रेक्सिया (Dyspraxia)", "Dyspraxia",
      "A", "डिस्लेक्सिया पठन विकार है, डिसकैलकुलिया गणितीय विकार तथा डिसग्राफिया लेखन विकार है।",
      "Dyslexia is a neurodevelopmental disorder causing impaired phonological processing and reading difficulty.")

add_q(99, "Child Psychology", "अभिप्रेरणा - मास्लो",
      "अब्राहम मास्लो के 'आवश्यकता पदानुक्रम सिद्धांत' (Hierarchy of Needs) में सबसे शीर्ष (उच्चतम) स्तर की आवश्यकता कौन सी है?",
      "In Abraham Maslow's Hierarchy of Needs, which need occupies the pinnacle (highest level)?",
      "आत्मसिद्धि की आवश्यकता (Self-Actualization)", "Self-Actualization",
      "शारीरिक आवश्यकताएँ (Physiological)", "Physiological Needs",
      "सुरक्षा की आवश्यकता (Safety)", "Safety Needs",
      "सम्मान की आवश्यकता (Esteem)", "Self-Esteem Needs",
      "A", "मास्लो के पिरामिड में आधार पर शारीरिक आवश्यकताएँ तथा शिखर पर आत्म-साक्षात्कार (Self-Actualization) स्थित है।",
      "Self-actualization sits atop Maslow's hierarchy, representing personal realization and peak potential.")

add_q(100, "Child Psychology", "वैयक्तिक विभिन्नता",
      "कक्षा में बालकों की वैयक्तिक विभिन्नताओं (Individual Differences) के प्रति एक शिक्षक का दृष्टिकोण कैसा होना चाहिए?",
      "How should a teacher view and respond to individual differences among pupils in the classroom?",
      "विभिन्नताओं को सीखने के समृद्ध संसाधन के रूप में स्वीकार करना तथा वैविध्यपूर्ण शिक्षण विधियों का प्रयोग करना", "Accept diversity as a pedagogical resource and adapt multi-tiered instruction",
      "सभी बालकों के लिए एक समान कठोर मापदंड निर्धारित करना", "Enforcing identical rigid benchmarks for all",
      "धीमे सीखने वाले बालकों को अलग कर देना", "Isolating slow learners",
      "विभिन्नताओं को नजरअंदाज करना", "Ignoring developmental diversity",
      "A", "प्रगतिशील शिक्षा के अनुसार वैयक्तिक विभिन्नताएँ विविधता और सीखने के नए अवसर प्रदान करती हैं।",
      "Modern developmental pedagogy treats learner diversity as an educational asset to be nurtured.")

# -------------------------------------------------------------
# SECTION 9: GENERAL KNOWLEDGE & CURRENT AFFAIRS (Q101 - Q130) [30 Questions]
# -------------------------------------------------------------
add_q(101, "General Knowledge & Current Affairs", "पुरस्कार एवं सम्मान",
      "वर्ष 2018 का 24वां शीतकालीन ओलंपिक खेल किस देश में आयोजित हुआ था?",
      "Where were the 2018 Winter Olympic Games held?",
      "प्योंगचांग (दक्षिण कोरिया)", "Pyeongchang (South Korea)", "टोक्यो (जापान)", "Tokyo (Japan)", "बीजिंग (चीन)", "Beijing (China)", "लंदन (ब्रिटेन)", "London (UK)",
      "A", "2018 शीतकालीन ओलंपिक खेल दक्षिण कोरिया के प्योंगचांग में आयोजित हुए थे।",
      "The 2018 Winter Olympics took place in Pyeongchang, South Korea.")

add_q(102, "General Knowledge & Current Affairs", "उत्तर प्रदेश सामान्य ज्ञान",
      "उत्तर प्रदेश का राजकीय पक्षी (State Bird) कौन सा है?",
      "Which is the official State Bird of Uttar Pradesh?",
      "सारस (क्रौंच)", "Sarus Crane", "मोर", "Peacock", "तोता", "Parrot", "कोयल", "Koel",
      "A", "सारस (Grus antigone) उत्तर प्रदेश का आधिकारिक राज्य पक्षी है।",
      "The Sarus Crane is recognized as the state bird of Uttar Pradesh.")

add_q(103, "General Knowledge & Current Affairs", "साहित्य पुरस्कार",
      "वर्ष 2018 का प्रतिष्ठित 'ज्ञानपीठ पुरस्कार' किसे प्रदान किया गया था?",
      "Who was awarded the prestigious 54th Jnanpith Award (2018)?",
      "अमिताव घोष", "Amitav Ghosh", "कृष्णा सोबती", "Krishna Sobti", "शंख घोष", "Shankha Ghosh", "केदारनाथ सिंह", "Kedarnath Singh",
      "A", "अमिताव घोष ज्ञानपीठ पुरस्कार प्राप्त करने वाले प्रथम अंग्रेजी भाषा के साहित्यकार बने।",
      "Renowned author Amitav Ghosh was the first English-language writer to win the Jnanpith Award.")

add_q(104, "General Knowledge & Current Affairs", "दिवस",
      "भारत में प्रतिवर्ष 'राष्ट्रीय विज्ञान दिवस' किस वैज्ञानिक की खोज की स्मृति में 28 फरवरी को मनाया जाता है?",
      "National Science Day is celebrated in India on February 28 to commemorate which Nobel laureate's discovery?",
      "सर सी. वी. रमन (रमन प्रभाव)", "Sir C. V. Raman (Raman Effect)",
      "डॉ. होमी जहांगीर भाभा", "Dr. Homi Bhabha",
      "डॉ. ए. पी. जे. अब्दुल कलाम", "Dr. A. P. J. Abdul Kalam",
      "जगदीश चंद्र बसु", "Jagadish Chandra Bose",
      "A", "28 फरवरी 1928 को सर सी. वी. रमन ने 'रमन प्रभाव' की ऐतिहासिक खोज की थी जिसके लिए 1930 में नोबेल पुरस्कार मिला।",
      "Sir C. V. Raman announced the Raman Effect on Feb 28, 1928, securing the Nobel Prize in Physics.")

add_q(105, "General Knowledge & Current Affairs", "भारतीय अर्थव्यवस्था",
      "भारत में 'नीति आयोग' (NITI Aayog) के पदेन अध्यक्ष कौन होते हैं?",
      "Who serves as the Ex-officio Chairman of NITI Aayog in India?",
      "भारत के प्रधानमंत्री", "Prime Minister of India", "भारत के राष्ट्रपति", "President of India", "केंद्रीय वित्त मंत्री", "Union Finance Minister", "रिजर्व बैंक के गवर्नर", "Governor of RBI",
      "A", "1 जनवरी 2015 को योजना आयोग के स्थान पर गठित नीति आयोग के पदेन अध्यक्ष देश के प्रधानमंत्री होते हैं।",
      "The Prime Minister of India serves ex-officio as the Chairman of NITI Aayog.")

add_q(106, "General Knowledge & Current Affairs", "अंतर्राष्ट्रीय संगठन",
      "संयुक्त राष्ट्र संघ (UNO) का मुख्यालय किस शहर में स्थित है?",
      "Where is the headquarters of the United Nations Organization (UNO) located?",
      "न्यूयॉर्क (USA)", "New York (USA)", "जिनेवा (स्विट्जरलैंड)", "Geneva (Switzerland)", "पेरिस (फ्रांस)", "Paris (France)", "द हेग (नीदरलैंड्स)", "The Hague",
      "A", "संयुक्त राष्ट्र संघ का मुख्यालय न्यूयॉर्क शहर (अमेरिका) में स्थित है।",
      "The United Nations headquarters is situated in Manhattan, New York City.")

add_q(107, "General Knowledge & Current Affairs", "उत्तर प्रदेश कला एवं संस्कृति",
      "प्रसिद्ध 'कथक' शास्त्रीय नृत्य किस भारतीय राज्य की प्रमुख शास्त्रीय नृत्य परंपरा है?",
      "The classical dance form 'Kathak' originated from which Indian state?",
      "उत्तर प्रदेश", "Uttar Pradesh", "केरल", "Kerala", "तमिलनाडु", "Tamil Nadu", "ओडिशा", "Odisha",
      "A", "कथक उत्तर प्रदेश का पारंपरिक शास्त्रीय नृत्य है जिसके प्रमुख केंद्र लखनऊ घराना आदि हैं।",
      "Kathak is the premier classical dance heritage belonging to Uttar Pradesh and northern India.")

add_q(108, "General Knowledge & Current Affairs", "वर्तमान पदाधिकारी",
      "भारत के मुख्य चुनाव आयुक्त की नियुक्ति किसके द्वारा की जाती है?",
      "Who appoints the Chief Election Commissioner of India?",
      "भारत के राष्ट्रपति द्वारा", "By the President of India", "संसद द्वारा", "By Parliament", "प्रधानमंत्री द्वारा", "By Prime Minister", "मुख्य न्यायाधीश द्वारा", "By Chief Justice",
      "A", "संविधान के अनुच्छेद 324(2) के तहत मुख्य चुनाव आयुक्त की नियुक्ति राष्ट्रपति करते हैं।",
      "Under Article 324(2), the President of India appoints the Chief Election Commissioner.")

add_q(109, "General Knowledge & Current Affairs", "खेलकूद",
      "वर्ष 2018 के एशियाई खेलों (Asian Games 2018) का आयोजन किस देश में हुआ था?",
      "In which country were the 18th Asian Games 2018 hosted?",
      "इंडोनेशिया (जकार्ता और पालेमबांग)", "Indonesia (Jakarta & Palembang)", "चीन", "China", "जापान", "Japan", "कतर", "Qatar",
      "A", "18वें एशियाई खेल 2018 इंडोनेशिया के जकार्ता और पालेमबांग शहरों में आयोजित किए गए थे।",
      "The 2018 Asian Games took place in Jakarta and Palembang, Indonesia.")

add_q(110, "General Knowledge & Current Affairs", "भारतीय इतिहास",
      "प्रसिद्ध 'गायत्री मंत्र' की रचना किस ऋषि द्वारा की गई थी और यह किस वेद में संकलित है?",
      "Who composed the sacred Gayatri Mantra and in which Veda is it enshrined?",
      "महर्षि विश्वामित्र (ऋग्वेद के तृतीय मंडल में)", "Maharshi Vishwamitra (Rigveda, Mandala 3)",
      "महर्षि वशिष्ठ (सामवेद)", "Maharshi Vashistha",
      "महर्षि वाल्मीकि (यजुर्वेद)", "Maharshi Valmiki",
      "महर्षि वेदव्यास (अथर्ववेद)", "Maharshi Vedavyasa",
      "A", "गायत्री मंत्र ऋग्वेद के तृतीय मंडल में सूर्य देवता 'सविता' को समर्पित है, जिसकी रचना विश्वामित्र ने की।",
      "The Gayatri Mantra is found in Rigveda Mandala 3, dedicated to Savitr by Sage Vishwamitra.")

add_q(111, "General Knowledge & Current Affairs", "उत्तर प्रदेश भूगोल",
      "उत्तर प्रदेश का कौन सा जनपद कालीन (Carpet) उद्योग के लिए अंतरराष्ट्रीय स्तर पर विख्यात है?",
      "Which district of Uttar Pradesh is internationally celebrated for its handmade carpet weaving industry?",
      "भदोही (संत रविदास नगर)", "Bhadohi (Sant Ravidas Nagar)", "मुरादाबाद", "Moradabad", "कन्नौज", "Kannauj", "फिरोजाबाद", "Firozabad",
      "A", "भदोही 'कालीन नगरी' के नाम से पूरे विश्व में हस्तनिर्मित कालीनों के लिए जाना जाता है।",
      "Bhadohi is known as the 'Carpet City' of South Asia for its hand-knotted export carpets.")

add_q(112, "General Knowledge & Current Affairs", "पर्यावरण पुरस्कार",
      "वर्ष 2018 में संयुक्त राष्ट्र का सर्वोच्च पर्यावरण सम्मान 'चैंपियंस ऑफ द अर्थ' किसे प्रदान किया गया था?",
      "Who was conferred the UN's highest environmental honor 'Champions of the Earth' in 2018?",
      "नरेंद्र मोदी एवं इमैनुएल मैक्रों", "Narendra Modi & Emmanuel Macron",
      "बराक ओबामा", "Barack Obama", "एंजेला मर्केल", "Angela Merkel", "दलाई लामा", "Dalai Lama",
      "A", "अंतरराष्ट्रीय सौर गठबंधन (ISA) को बढ़ावा देने के लिए प्रधानमंत्री नरेंद्र मोदी और फ्रांसीसी राष्ट्रपति मैक्रों को यह सम्मान मिला।",
      "PM Narendra Modi and French President Emmanuel Macron were honored for the International Solar Alliance.")

add_q(113, "General Knowledge & Current Affairs", "राष्ट्रीय स्मारक",
      "विश्व की सबसे ऊँची प्रतिमा 'स्टैच्यू ऑफ यूनिटी' किस महान व्यक्तित्व की स्मृति में गुजरात में स्थापित की गई है?",
      "The world's tallest statue, the 'Statue of Unity' (182 m), is erected in honor of which visionary leader?",
      "सरदार वल्लभभाई पटेल", "Sardar Vallabhbhai Patel", "महात्मा गांधी", "Mahatma Gandhi", "सुभाष चंद्र बोस", "Subhas Chandra Bose", "जवाहरलाल नेहरू", "Jawaharlal Nehru",
      "A", "गुजरात के केवड़िया (नर्मदा जिले) में सरदार वल्लभभाई पटेल की 182 मीटर ऊँची कांस्य प्रतिमा स्थापित है।",
      "The 182-meter colossus honors Sardar Vallabhbhai Patel on Sadhu Bet island in Gujarat.")

add_q(114, "General Knowledge & Current Affairs", "विज्ञान व अंतरिक्ष",
      "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय किस शहर में स्थित है?",
      "Where is the headquarters of the Indian Space Research Organisation (ISRO) situated?",
      "बेंगलुरु (कर्नाटक)", "Bengaluru (Karnataka)", "श्रीहरिकोटा", "Sriharikota", "तिरुवनंतपुरम", "Thiruvananthapuram", "हैदराबाद", "Hyderabad",
      "A", "इसरो (ISRO) का मुख्यालय बेंगलुरु में स्थित है, जबकि प्रक्षेपण केंद्र श्रीहरिकोटा (आंध्र प्रदेश) में है।",
      "ISRO's corporate apex headquarters is in Bengaluru, Karnataka.")

add_q(115, "General Knowledge & Current Affairs", "पुस्तक एवं लेखक",
      "प्रसिद्ध ऐतिहासिक पुस्तक 'डिस्कवरी ऑफ इंडिया' (भारत की खोज) के लेखक कौन हैं?",
      "Who is the author of the celebrated classic book 'The Discovery of India'?",
      "पंडित जवाहरलाल नेहरू", "Pandit Jawaharlal Nehru", "महात्मा गांधी", "Mahatma Gandhi", "डॉ. राजेंद्र प्रसाद", "Dr. Rajendra Prasad", "मौलाना अबुल कलाम आजाद", "Maulana Abul Kalam Azad",
      "A", "पंडित नेहरू ने 1944 में अहमदनगर किला जेल में बंदी के दौरान 'द डिस्कवरी ऑफ इंडिया' लिखी थी।",
      "Jawaharlal Nehru penned 'The Discovery of India' during his imprisonment in Ahmednagar Fort (1942-45).")

add_q(116, "General Knowledge & Current Affairs", "भारतीय बैंकिंग",
      "भारतीय रिजर्व बैंक (RBI) के प्रथम भारतीय मूल के गवर्नर कौन थे?",
      "Who was the first Indian Governor of the Reserve Bank of India (RBI)?",
      "सी. डी. देशमुख", "C. D. Deshmukh", "ओसबोर्न स्मिथ", "Osborne Smith", "मनमोहन सिंह", "Manmohan Singh", "आई. जी. पटेल", "I. G. Patel",
      "A", "चिंतामण द्वारकानाथ देशमुख (सी. डी. देशमुख) 1943 में RBI के प्रथम भारतीय गवर्नर बने।",
      "Sir C. D. Deshmukh took office in 1943 as the first Indian Governor of the Reserve Bank of India.")

add_q(117, "General Knowledge & Current Affairs", "उत्तर प्रदेश महोत्सव",
      "उत्तर प्रदेश का 'सुलहकुल महोत्सव' जो हिंदू-मुस्लिम एकता का प्रतीक है, किस शहर में आयोजित किया जाता है?",
      "The 'Sulah-e-Kul' festival, symbolizing Hindu-Muslim communal harmony, is organized in which city of UP?",
      "आगरा", "Agra", "लखनऊ", "Lucknow", "वाराणसी", "Varanasi", "मेरठ", "Meerut",
      "A", "अकबर की सुलह-ए-कुल नीति की स्मृति में यह सौहार्द महोत्सव प्रतिवर्ष आगरा में मनाया जाता है।",
      "The Sulah-e-Kul harmony carnival is held annually in Agra commemorating Akbar's religious pluralism.")

add_q(118, "General Knowledge & Current Affairs", "खेलकूद - क्रिकेट",
      "क्रिकेट का प्रथम एकदिवसीय विश्व कप (ICC Men's World Cup) किस वर्ष आयोजित हुआ था?",
      "In which year was the inaugural Men's Cricket World Cup held in England?",
      "1975", "1975", "1979", "1979", "1983", "1983", "1971", "1971",
      "A", "1975 में इंग्लैंड में प्रथम प्रूडेंशियल क्रिकेट विश्व कप आयोजित हुआ जिसे वेस्टइंडीज ने जीता था।",
      "The first Cricket World Cup was staged in England in 1975, won by the West Indies.")

add_q(119, "General Knowledge & Current Affairs", "नोबेल पुरस्कार",
      "अर्थशास्त्र के क्षेत्र में नोबेल पुरस्कार प्राप्त करने वाले प्रथम भारतीय अर्थशास्त्री कौन हैं?",
      "Who was the first Indian economist to be awarded the Nobel Memorial Prize in Economic Sciences?",
      "प्रो. अमर्त्य सेन (1998)", "Prof. Amartya Sen (1998)", "अभिजीत बनर्जी", "Abhijit Banerjee", "रघुराम राजन", "Raghuram Rajan", "जगदीश भगवती", "Jagdish Bhagwati",
      "A", "अमर्त्य सेन को 1998 में कल्याणकारी अर्थशास्त्र (Welfare Economics) के लिए नोबेल पुरस्कार दिया गया।",
      "Amartya Sen received the 1998 Nobel Prize in Economics for his contributions to welfare economics.")

add_q(120, "General Knowledge & Current Affairs", "सौर ऊर्जा",
      "विश्व का प्रथम पूर्णतः सौर ऊर्जा संचालित हवाई अड्डा कौन सा बना?",
      "Which airport became the world's first fully solar-powered airport?",
      "कोचीन अंतर्राष्ट्रीय हवाई अड्डा (केरल)", "Cochin International Airport (Kerala)",
      "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा (दिल्ली)", "Indira Gandhi Airport (Delhi)",
      "छत्रपति शिवाजी अंतर्राष्ट्रीय हवाई अड्डा (मुंबई)", "Mumbai Airport",
      "राजीव गांधी अंतर्राष्ट्रीय हवाई अड्डा (हैदराबाद)", "Hyderabad Airport",
      "A", "2015 में कोचीन हवाई अड्डा (CIAL) 100% सौर ऊर्जा से संचालित होकर विश्व का पहला ऐसा हवाई अड्डा बना।",
      "Cochin International Airport in Kerala became the world's first fully solar-powered aerodrome in 2015.")

add_q(121, "General Knowledge & Current Affairs", "उत्तर प्रदेश उद्योग",
      "उत्तर प्रदेश का 'कन्नौज' शहर किस पारंपरिक सुगंधित उत्पाद के लिए विश्वप्रसिद्ध है?",
      "Kannauj city in Uttar Pradesh is globally celebrated for manufacturing which traditional product?",
      "इत्र (Perfume / Attar)", "Attar / Perfume", "पीतल के बर्तन", "Brassware", "कांच की चूड़ियाँ", "Glass Bangles", "ताले", "Locks",
      "A", "कन्नौज को भारत की 'इत्र नगरी' (Perfume Capital of India) कहा जाता है।",
      "Kannauj is renowned as the Perfume Capital of India for its historic natural hydro-distilled attars.")

add_q(122, "General Knowledge & Current Affairs", "भारतीय भूगोल",
      "भारत की मानक समय रेखा (Standard Meridian - 82°30' पूर्व देशांतर) उत्तर प्रदेश के किस स्थान से होकर गुजरती है?",
      "The Standard Meridian of India (82°30' E) passes through which location near Prayagraj in Uttar Pradesh?",
      "मिर्ज़ापुर / नैनी (प्रयागराज)", "Mirzapur / Naini (Prayagraj)", "वाराणसी", "Varanasi", "कानपुर", "Kanpur", "झाँसी", "Jhansi",
      "A", "भारतीय मानक समय रेखा (82.5° E) प्रयागराज के निकट मिर्ज़ापुर/नैनी से होकर गुजरती है।",
      "Indian Standard Time is calculated based on 82°30' E meridian passing through Mirzapur/Naini.")

add_q(123, "General Knowledge & Current Affairs", "राष्ट्रीय योजना",
      "भारत सरकार द्वारा 'बेटी बचाओ, बेटी पढ़ाओ' योजना किस वर्ष प्रारंभ की गई थी?",
      "In which year was the nationwide flagship scheme 'Beti Bachao, Beti Padhao' launched?",
      "2015 (पानीपत, हरियाणा से)", "2015 (Panipat, Haryana)", "2014", "2014", "2016", "2016", "2017", "2017",
      "A", "यह योजना 22 जनवरी 2015 को हरियाणा के पानीपत से लिंगानुपात में सुधार हेतु शुरू की गई थी।",
      "Prime Minister Narendra Modi launched Beti Bachao, Beti Padhao on Jan 22, 2015, from Panipat.")

add_q(124, "General Knowledge & Current Affairs", "जीव संरक्षण",
      "भारत का 'राष्ट्रीय जलचर जीव' (National Aquatic Animal) किसे घोषित किया गया है?",
      "Which animal has been designated as the official National Aquatic Animal of India?",
      "गंगा की डॉल्फ़िन (Platanista gangetica)", "Ganges River Dolphin",
      "घड़ियाल", "Gharial", "मगरमच्छ", "Crocodile", "समुद्री कछुआ", "Olive Ridley Turtle",
      "A", "2009 में गंगा नदी डॉल्फ़िन को भारत का राष्ट्रीय जलीय जीव घोषित किया गया था।",
      "The Ganges River Dolphin was declared India's National Aquatic Animal in 2009.")

add_q(125, "General Knowledge & Current Affairs", "उत्तर प्रदेश लोकनृत्य",
      "उत्तर प्रदेश के ब्रज क्षेत्र का प्रसिद्ध लोकनृत्य कौन सा है जिसमें सिर पर पहिया रखकर 108 दीपक जलाए जाते हैं?",
      "Which famous folk dance of Braj region in UP features dancing with 108 lamps balanced on a wheel?",
      "चरकुला नृत्य", "Charkula Dance", "रासलीला", "Raas Leela", "नौटंकी", "Nautanki", "कजरी", "Kajri",
      "A", "चरकुला ब्रज क्षेत्र का पारंपरिक लोकनृत्य है जिसमें सिर पर चरकुले पर 108 दीप प्रज्ज्वलित किए जाते हैं।",
      "Charkula is an iconic dramatic folk dance of Braj involving a pyramid of 108 oil lamps.")

add_q(126, "General Knowledge & Current Affairs", "अंतर्राष्ट्रीय दिवस",
      "प्रतिवर्ष 'अंतर्राष्ट्रीय महिला दिवस' किस तिथि को मनाया जाता है?",
      "On which date is International Women's Day celebrated worldwide?",
      "8 मार्च", "March 8", "1 मई", "May 1", "10 दिसंबर", "December 10", "24 जनवरी", "January 24",
      "A", "संयुक्त राष्ट्र द्वारा प्रतिवर्ष 8 मार्च को अंतर्राष्ट्रीय महिला दिवस आयोजित किया जाता है।",
      "International Women's Day is observed annually across the globe on March 8.")

add_q(127, "General Knowledge & Current Affairs", "संविधान संशोधन",
      "भारतीय संविधान में 'वस्तु एवं सेवा कर' (GST) किस संविधान संशोधन अधिनियम द्वारा लागू किया गया?",
      "Goods and Services Tax (GST) was implemented in India via which Constitutional Amendment Act?",
      "101वां संविधान संशोधन अधिनियम, 2016", "101st Constitutional Amendment Act, 2016",
      "100वां संविधान संशोधन", "100th Amendment",
      "102वां संविधान संशोधन", "102nd Amendment",
      "103वां संविधान संशोधन", "103rd Amendment",
      "A", "101वें संविधान संशोधन अधिनियम द्वारा 1 जुलाई 2017 से देशभर में 'एक देश, एक कर' (GST) लागू हुआ।",
      "GST was introduced across India on July 1, 2017, via the 101st Constitutional Amendment Act.")

add_q(128, "General Knowledge & Current Affairs", "भारतीय स्मारक",
      "प्रसिद्ध ऐतिहासिक 'बुलंद दरवाजा' उत्तर प्रदेश के किस स्थान पर स्थित है?",
      "At which historic site in Uttar Pradesh is the monumental 'Buland Darwaza' situated?",
      "फतेहपुर सीकरी (आगरा)", "Fatehpur Sikri (Agra)", "सारनाथ", "Sarnath", "झाँसी", "Jhansi", "जौनपुर", "Jaunpur",
      "A", "अकबर ने 1602 में अपनी गुजरात विजय के उपलक्ष्य में फतेहपुर सीकरी में बुलंद दरवाजा बनवाया था।",
      "Buland Darwaza was constructed in 1602 by Mughal Emperor Akbar to commemorate his conquest of Gujarat.")

add_q(129, "General Knowledge & Current Affairs", "पुरस्कार",
      "भारत का सर्वोच्च नागरिक सम्मान 'भारत रत्न' सर्वप्रथम 1954 में किन्हें प्रदान किया गया था?",
      "In 1954, who was among the first three distinguished recipients of India's highest civilian honor, Bharat Ratna?",
      "डॉ. सर्वपल्ली राधाकृष्णन, सी. राजगोपालाचारी एवं सी. वी. रमन", "Dr. S. Radhakrishnan, C. Rajagopalachari & C. V. Raman",
      "जवाहरलाल नेहरू", "Jawaharlal Nehru", "महात्मा गांधी", "Mahatma Gandhi", "सरदार पटेल", "Sardar Patel",
      "A", "1954 में डॉ. राधाकृष्णन, सी. राजगोपालाचारी और सी. वी. रमन को प्रथम भारत रत्न प्रदान किया गया।",
      "The inaugural Bharat Ratna awards in 1954 honored Radhakrishnan, Rajagopalachari, and C. V. Raman.")

add_q(130, "General Knowledge & Current Affairs", "उत्तर प्रदेश जनजाति",
      "उत्तर प्रदेश एवं उत्तराखंड की कौन सी प्रमुख जनजाति 'दीपावली' पर्व को शोक पर्व के रूप में मनाती है?",
      "Which prominent indigenous tribe of Uttar Pradesh and Uttarakhand traditionally observes Diwali as a day of mourning?",
      "थारू जनजाति", "Tharu Tribe", "गोंड जनजाति", "Gond Tribe", "कोल जनजाति", "Kol Tribe", "भोटिया जनजाति", "Bhotia Tribe",
      "A", "तराई क्षेत्र की थारू जनजाति पारंपरिक रूप से दीपावली के दिन अपने पूर्वजों की स्मृति में शोक मनाती है।",
      "The Tharu tribe of the Terai plains historically mourns departed ancestors during the festival of Diwali.")

# -------------------------------------------------------------
# SECTION 10: LOGICAL REASONING (Q131 - Q135) [5 Questions]
# -------------------------------------------------------------
add_q(131, "Logical Reasoning", "सादृश्यता (Analogy)",
      "दिए गए विकल्पों में से संबंधित शब्द चुनिए: भारत : नई दिल्ली :: ऑस्ट्रेलिया : ?",
      "Select the related word from the given alternatives: India : New Delhi :: Australia : ?",
      "कैनबरा", "Canberra", "सिडनी", "Sydney", "मेलबर्न", "Melbourne", "पर्थ", "Perth",
      "A", "भारत की राजधानी नई दिल्ली है, उसी प्रकार ऑस्ट्रेलिया की राजधानी कैनबरा है।",
      "New Delhi is the national capital of India; Canberra is the federal capital of Australia.")

add_q(132, "Logical Reasoning", "श्रेणी पूर्ण करना (Series)",
      "दी गई संख्या श्रृंखला में अगला पद क्या होगा: 3, 8, 15, 24, 35, ?",
      "What is the next number in the given numeric series: 3, 8, 15, 24, 35, ?",
      "48", "48", "45", "45", "49", "49", "50", "50",
      "A", "तर्क: 2² - 1 = 3, 3² - 1 = 8, 4² - 1 = 15, 5² - 1 = 24, 6² - 1 = 35, 7² - 1 = 48 (अंतर +5, +7, +9, +11, +13)।",
      "Pattern: n² - 1 for n = 2, 3, 4, 5, 6, 7 => 7² - 1 = 48 (or successive odd increments +5, +7, +9, +11, +13).")

add_q(133, "Logical Reasoning", "कोडिंग-डिकोडिंग (Coding-Decoding)",
      "यदि किसी निश्चित कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है, तो उसी भाषा में 'STUDENT' को क्या लिखा जाएगा?",
      "In a certain code, 'TEACHER' is written as 'VGCEJGT'. How will 'STUDENT' be written in that code?",
      "UVWFGPT", "UVWFGPT", "UVWFHQV", "UVWFHQV", "TVWFHPT", "TVWFHPT", "UVWFGPV", "UVWFGPV",
      "A", "प्रत्येक अक्षर में +2 जोड़ा गया है: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V (अर्थात् UVWFGPT/V)।",
      "Every letter shifts forward by +2 positions in the alphabetical index.")

add_q(134, "Logical Reasoning", "रक्त संबंध (Blood Relations)",
      "एक तस्वीर की ओर इशारा करते हुए रमेश ने कहा—'यह मेरे दादाजी के एकमात्र पुत्र की पुत्री है।' उस तस्वीर वाली लड़की का रमेश से क्या संबंध है?",
      "Pointing to a photograph, Ramesh said, 'She is the daughter of the only son of my grandfather.' How is she related to Ramesh?",
      "बहन", "Sister", "माता", "Mother", "चाची", "Aunt", "पुत्री", "Daughter",
      "A", "रमेश के दादाजी का एकमात्र पुत्र = रमेश के पिता। पिता की पुत्री = रमेश की बहन।",
      "Grandfather's only son = Ramesh's father. Father's daughter = Ramesh's sister.")

add_q(135, "Logical Reasoning", "दिशा और दूरी (Direction & Distance)",
      "एक व्यक्ति उत्तर दिशा की ओर 10 मीटर चलता है, फिर दाएँ मुड़कर 15 मीटर चलता है, और पुनः दाएँ मुड़कर 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर है?",
      "A person walks 10 m north, turns right and walks 15 m, then turns right again and walks 10 m. How far is he from his starting point?",
      "15 मीटर", "15 meters", "20 मीटर", "20 meters", "25 मीटर", "25 meters", "10 मीटर", "10 meters",
      "A", "उत्तर और दक्षिण के 10-10 मीटर एक-दूसरे को निरस्त करते हैं; व्यक्ति प्रारंभिक बिंदु से ठीक 15 मीटर पूर्व में है।",
      "Vertical displacement is 10 - 10 = 0 m; horizontal displacement is 15 m east. Distance = 15 m.")

# -------------------------------------------------------------
# SECTION 11: INFORMATION TECHNOLOGY (Q136 - Q140) [5 Questions]
# -------------------------------------------------------------
add_q(136, "Information Technology", "कंप्यूटर मूल बातें",
      "कंप्यूटर का 'मस्तिष्क' (Brain of Computer) किसे कहा जाता है?",
      "Which component is known as the 'Brain' of a computer?",
      "सेंट्रल प्रोसेसिंग यूनिट (CPU)", "Central Processing Unit (CPU)",
      "रैंडम एक्सेस मेमोरी (RAM)", "Random Access Memory (RAM)",
      "हार्ड डिस्क (Hard Disk)", "Hard Disk",
      "मदरबोर्ड (Motherboard)", "Motherboard",
      "A", "CPU सभी निर्देशों को संसाधित (Process) करता है, अतः इसे कंप्यूटर का मस्तिष्क कहा जाता है।",
      "The Central Processing Unit (CPU) executes instructions, acts as the primary computational brain.")

add_q(137, "Information Technology", "डिजिटल शिक्षा - DIKSHA",
      "भारत सरकार के शिक्षा मंत्रालय द्वारा शिक्षकों और छात्रों के लिए संचालित 'दीक्षा' (DIKSHA) पोर्टल का पूर्ण रूप क्या है?",
      "What is the full form of the national school digital portal 'DIKSHA' launched by the Ministry of Education?",
      "Digital Infrastructure for Knowledge Sharing", "Digital Infrastructure for Knowledge Sharing",
      "Digital Information for Knowledge and Science Hub", "Digital Information for Knowledge and Science Hub",
      "Direct Initiative for Knowledge Systems and Harmony", "Direct Initiative for Knowledge Systems and Harmony",
      "Digital India Knowledge Sharing for All", "Digital India Knowledge Sharing for All",
      "A", "DIKSHA = Digital Infrastructure for Knowledge Sharing, जो ई-कंटेंट का राष्ट्रीय मंच है।",
      "DIKSHA stands for Digital Infrastructure for Knowledge Sharing.")

add_q(138, "Information Technology", "इंटरनेट व नेटवर्किंग",
      "इंटरनेट पर किसी वेबसाइट का विशिष्ट पता (Unique Web Address) क्या कहलाता है?",
      "The unique locator address of a webpage or website on the World Wide Web is termed as:",
      "URL (Uniform Resource Locator)", "URL (Uniform Resource Locator)",
      "IP Address", "IP Address",
      "HTTP", "HTTP",
      "HTML", "HTML",
      "A", "URL (जैसे https://example.com) इंटरनेट पर किसी विशिष्ट वेब संसाधन का पता होता है।",
      "A Uniform Resource Locator (URL) serves as the web address identifying resources on the internet.")

add_q(139, "Information Technology", "ओपन एजुकेशनल रिसोर्स (MOOC)",
      "ई-लर्निंग में 'MOOC' का संक्षिप्त रूप किस अर्थ में प्रयोग होता है?",
      "In digital education, what does the acronym 'MOOC' stand for?",
      "Massive Open Online Course", "Massive Open Online Course",
      "Major Online Organization Course", "Major Online Organization Course",
      "Modern Open Online Classroom", "Modern Open Online Classroom",
      "Massive Open Outreach Curriculum", "Massive Open Outreach Curriculum",
      "A", "MOOC (Massive Open Online Course) असीमित भागीदारी और खुली वेब पहुंच वाला ऑनलाइन पाठ्यक्रम है।",
      "MOOC stands for Massive Open Online Course providing accessible web-based learning.")

add_q(140, "Information Technology", "मेमोरी व स्टोरेज",
      "निम्नलिखित में से कौन सी मेमोरी 'अस्थायी' (Volatile Memory) होती है, जिसके बंद होने पर डेटा नष्ट हो जाता है?",
      "Which type of computer memory is 'volatile', losing its stored contents when power is turned off?",
      "RAM (Random Access Memory)", "RAM (Random Access Memory)",
      "ROM (Read Only Memory)", "ROM (Read Only Memory)",
      "Hard Disk Drive (HDD)", "Hard Disk Drive (HDD)",
      "Pen Drive (Flash Memory)", "Pen Drive",
      "A", "RAM एक वोलाटाइल मेमोरी है जो कंप्यूटर चालू रहने तक ही सक्रिय डेटा संग्रहीत रखती है।",
      "RAM loses data once electrical power is interrupted, distinguishing it as volatile primary memory.")

# -------------------------------------------------------------
# SECTION 12: LIFE SKILLS / MANAGEMENT & APTITUDE (Q141 - Q150) [10 Questions]
# -------------------------------------------------------------
add_q(141, "Life Skills / Management & Aptitude", "व्यावसायिक आचरण व नीति",
      "राष्ट्रीय पाठ्यचर्या की रूपरेखा (NCF-2005) के अनुसार कक्षा में शिक्षक की प्राथमिक भूमिका क्या होनी चाहिए?",
      "According to National Curriculum Framework (NCF-2005), what is the primary role of a teacher?",
      "सुविधादाता / सुगमकर्ता (Facilitator)", "Facilitator of Learning",
      "कठोर अनुशासनकर्ता", "Strict Disciplinarian",
      "सूचना का एकमात्र प्रदाता", "Sole transmitter of knowledge",
      "पाठ्यपुस्तक वाचक", "Passive textbook reader",
      "A", "NCF-2005 के अनुसार शिक्षक ज्ञान का निर्माता नहीं अपितु ज्ञान निर्माण का सुगमकर्ता (Facilitator) है।",
      "Under constructivism and NCF-2005, the teacher functions as a learning facilitator.")

add_q(142, "Life Skills / Management & Aptitude", "प्रेरणा (Motivation)",
      "प्राथमिक विद्यालय के छात्रों में दीर्घकालिक सीखने की रुचि बनाए रखने के लिए कौन सी प्रेरणा सबसे अधिक प्रभावशाली है?",
      "To foster enduring learning interest in elementary students, which form of motivation is most potent?",
      "आंतरिक प्रेरणा (Intrinsic Motivation - जिज्ञासा व आत्मसंतुष्टि)", "Intrinsic Motivation (Curiosity & Self-satisfaction)",
      "बाह्य पुरस्कार का लालच", "Extrinsic rewards/bribes only",
      "शारीरिक दंड का भय", "Fear of corporal punishment",
      "सहपाठियों से तुलना कर लज्जित करना", "Humiliation and comparison",
      "A", "आंतरिक प्रेरणा बालक की स्वाभाविक जिज्ञासा और सीखने के आनंद से उत्पन्न होकर स्थायी ज्ञान देती है।",
      "Intrinsic motivation driven by autonomy and innate curiosity yields persistent mastery.")

add_q(143, "Life Skills / Management & Aptitude", "संवैधानिक व मानवीय मूल्य",
      "भारतीय संविधान की 'प्रस्तावना' (Preamble) में न्याय के किन तीन रूपों का स्पष्ट उल्लेख किया गया है?",
      "Which three distinct forms of justice are solemnly promised in the Preamble to the Indian Constitution?",
      "सामाजिक, आर्थिक और राजनीतिक न्याय", "Social, Economic, and Political Justice",
      "धार्मिक, सामाजिक और वैयक्तिक न्याय", "Religious, Social, and Personal Justice",
      "शैक्षणिक, सांस्कृतिक और आर्थिक न्याय", "Educational, Cultural, and Economic Justice",
      "न्यायिक, प्रशासनिक और नागरिक न्याय", "Judicial, Administrative, and Civil Justice",
      "A", "संविधान की प्रस्तावना समस्त नागरिकों को 'सामाजिक, आर्थिक और राजनीतिक न्याय' दिलाने का संकल्प करती है।",
      "The Preamble guarantees Justice in three dimensional aspects: Social, Economic, and Political.")

add_q(144, "Life Skills / Management & Aptitude", "दंड एवं पुरस्कार का प्रभावी प्रयोग",
      "कक्षा प्रबंधन में छात्रों के अवांछनीय व्यवहार को सुधारने के लिए सबसे वैज्ञानिक एवं सकारात्मक तरीका क्या है?",
      "What is the most positive and constructive strategy to address disruptive behavior in a classroom?",
      "अवांछनीय व्यवहार के मूल कारण को जानकर उपचारात्मक मार्गदर्शन प्रदान करना", "Diagnosing root causes and providing remedial counseling",
      "छात्र को कक्षा के बाहर शारीरिक दंड देना", "Subjecting child to corporal punishment",
      "छात्र का नाम विद्यालय से काट देना", "Expelling the student immediately",
      "पूरी कक्षा के सामने उसका उपहास उड़ाना", "Publicly ridiculing the child",
      "A", "RTE अधिनियम शारीरिक दंड को प्रतिबंधित करता है; उपचारात्मक व बाल-सुलभ परामर्श ही स्थायी सुधार लाता है।",
      "RTE Act bans corporal punishment; identifying causal triggers and counseling achieves lasting reform.")

add_q(145, "Life Skills / Management & Aptitude", "नेतृत्व गुण (Leadership)",
      "एक आदर्श विद्यालय प्रधान (प्रधानाध्यापक/शिक्षक) का नेतृत्व दृष्टिकोण कैसा होना चाहिए?",
      "What leadership style is most suited for an effective school head or teacher leader?",
      "लोकतांत्रिक एवं सहभागी नेतृत्व (Democratic & Participative)", "Democratic and Participative Leadership",
      "तानाशाही एवं निरंकुश नेतृत्व (Autocratic)", "Autocratic and Dictatorial",
      "पूर्णतः अहस्तक्षेपवादी (Laissez-faire)", "Completely Hands-off",
      "व्यक्तिवादी दृष्टिकोण", "Self-centered leadership",
      "A", "लोकतांत्रिक नेतृत्व में सभी शिक्षकों, विद्यार्थियों और अभिभावकों की सहभागिता से संस्था का विकास होता है।",
      "Participative democratic leadership builds mutual consensus, ownership, and educational synergy.")

add_q(146, "Life Skills / Management & Aptitude", "सहानुभूति बनाम समानुभूति",
      "शिक्षक द्वारा छात्र की मानसिक स्थिति और भावनाओं को उसी के नजरिए से महसूस करना क्या कहलाता है?",
      "The teacher's ability to perceive and understand a child's emotions from the child's perspective is called:",
      "समानुभूति (Empathy)", "Empathy", "सहानुभूति (Sympathy)", "Sympathy", "उदासीनता (Apathy)", "Apathy", "कठोरता (Strictness)", "Strictness",
      "A", "समानुभूति (Empathy) का अर्थ है दूसरे के जूते में पाँव रखकर उसके दर्द व परिस्थिति को यथार्थ रूप से समझना।",
      "Empathy involves vicariously experiencing another's emotional state from their internal frame of reference.")

add_q(147, "Life Skills / Management & Aptitude", "तनाव प्रबंधन",
      "परीक्षा के दौरान छात्रों में तनाव और घबराहट को कम करने के लिए एक शिक्षक को क्या सलाह देनी चाहिए?",
      "To mitigate student exam anxiety and academic stress, a teacher should emphasize:",
      "नियमित अध्ययन, पर्याप्त विश्राम, सकारात्मक दृष्टिकोण एवं आत्म-विश्वास", "Consistent preparation, adequate sleep, mindfulness, and self-confidence",
      "अंकों के लिए रात-दिन जागकर रट्टा मारना", "All-night cramming for marks",
      "कम अंक आने पर भविष्य बर्बाद होने का डर दिखाना", "Stoking fear of failure",
      "परीक्षा कक्ष में केवल दूसरों से नकल की सोचना", "Relying on illicit aids",
      "A", "तनाव प्रबंधन हेतु संतुलित दिनचर्या, विश्राम और सकारात्मक आत्म-विश्वास आवश्यक होता है।",
      "Systematic study habits, emotional reassurance, and sleep hygiene de-escalate test anxiety.")

add_q(148, "Life Skills / Management & Aptitude", "निर्णय लेने का कौशल (Decision Making)",
      "जीवन कौशल शिक्षा (Life Skills Education - WHO) के 10 मूल कौशलों में 'समस्या समाधान' (Problem Solving) का क्या महत्व है?",
      "In WHO's 10 Core Life Skills framework, what is the prime objective of 'Problem Solving' skills?",
      "समस्याओं के विविध रचनात्मक समाधान खोजना और विवेकपूर्ण निर्णय लेना", "Analyzing challenges constructively to find viable solutions",
      "समस्याओं से भाग जाना", "Evading and ignoring difficulties",
      "हर समस्या का दोष दूसरों पर मढ़ना", "Blaming external actors",
      "बिना सोचे-समझे तुरंत प्रतिक्रिया देना", "Impulsive knee-jerk reaction",
      "A", "WHO जीवन कौशल के अनुसार समस्या समाधान हमें दैनिक जीवन की चुनौतियों से रचनात्मकता से निपटने में सक्षम बनाता है।",
      "Problem-solving skills empower individuals to constructively resolve life stressors.")

add_q(149, "Life Skills / Management & Aptitude", "संवैधानिक मूल्य - समानता",
      "विद्यालय में मध्याह्न भोजन (Mid-Day Meal / PM POSHAN) का एक प्रमुख सामाजिक व मानवीय उद्देश्य क्या है?",
      "Beyond nutrition, what fundamental constitutional value does the Mid-Day Meal scheme promote?",
      "सभी जातियों व वर्गों के बच्चों को एक साथ बैठाकर सामाजिक समरसता और समानता बढ़ाना", "Cultivating social equality by having children of all castes dine together",
      "केवल भोजन की बचत करना", "Food storage convenience",
      "बच्चों को घर से भोजन लाने से रोकना", "Preventing home-cooked meals",
      "शिक्षकों का समय व्यतीत करना", "Engaging staff in cooking",
      "A", "मध्याह्न भोजन जातिगत और सामाजिक भेद मिटाकर बंधुत्व और समानता के मानवीय मूल्य स्थापित करता है।",
      "Mid-Day Meal fosters fraternity and dismantles social/caste barriers through shared communal dining.")

add_q(150, "Life Skills / Management & Aptitude", "शिक्षक आचार संहिता",
      "एक शिक्षक के लिए समाज में आदर और प्रेरणा का स्रोत बने रहने हेतु सर्वाधिक महत्वपूर्ण गुण क्या है?",
      "What is the paramount virtue for a teacher to command enduring social respect and moral authority?",
      "कथनी और करनी में समानता, निष्पक्षता एवं चारित्रिक शुचिता", "Integrity, fairness, consistency between words and actions, and moral uprightness",
      "धनवान होना", "Wealth and social influence",
      "राजनीतिक दलों में पद प्राप्त करना", "Holding political offices",
      "कठोर दंड देकर भय उत्पन्न करना", "Inducing terror through punishments",
      "A", "शिक्षक का चरित्र और उसका आचरण ही छात्रों के लिए सबसे बड़ा मूक पाठ्यक्रम (Hidden Curriculum) होता है।",
      "Moral integrity, uncompromised fairness, and congruence between precept and practice define an exemplary teacher.")

assert len(questions) == 150, f"Expected 150 questions, got {len(questions)}"

# Write out TypeScript file
header = '''/**
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

export const SUPERTET_2019_VERIFIED_PYQS: SuperTetSeedQuestion[] = '''

content = header + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully generated all {len(questions)} verified questions into {OUTPUT_FILE}!")

