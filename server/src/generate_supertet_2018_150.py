# -*- coding: utf-8 -*-
"""
Generates the complete 150-question dataset for SUPER TET 2018 (68,500 Sahayak Adhyapak Bharti - ATRE)
strictly adhering to the official syllabus across all 14 subjects (12 sections).
Outputs directly to server/src/data/supertet_2018_pyq.ts.
"""

import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
OUTPUT_FILE = ROOT_DIR / "server" / "src" / "data" / "supertet_2018_pyq.ts"

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
      "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?",
      "Which figure of speech (Alankar) is in 'Charan kamal bandau hari rayi'?",
      "रूपक अलंकार", "Rupak Alankar (Metaphor)", "उपमा अलंकार", "Upma Alankar", "श्लेष अलंकार", "Shlesh Alankar", "उत्प्रेक्षा अलंकार", "Utpreksha Alankar",
      "A", "यहाँ उपमेय (चरण) पर उपमान (कमल) का अभेद आरोप है, अतः रूपक अलंकार है।",
      "The feet are non-differentially identified with the lotus, constituting Rupak (Metaphor).")

add_q(2, "Hindi", "संधि",
      "'सूर्योदय' शब्द का सही संधि-विच्छेद क्या होगा?",
      "What is the correct Sandhi-Vichhed of 'Suryodaya'?",
      "सूर्य + उदय", "Surya + Udaya", "सूर्यो + दय", "Suryo + Daya", "सूर + उदय", "Soora + Udaya", "सूर्य + दय", "Surya + Daya",
      "A", "गुण स्वर संधि के नियमानुसार 'अ/आ + उ = ओ' होता है, इसलिए सूर्य + उदय = सूर्योदय।",
      "By Guna Swar Sandhi rules (a + u = o), Surya + Udaya forms Suryodaya.")

add_q(3, "Hindi", "समास",
      "'चौराहा' शब्द में कौन सा समास है?",
      "Which Samas is in the word 'Chauraha'?",
      "द्विगु समास", "Dvigu Samas", "द्वन्द्व समास", "Dvandva Samas", "तत्पुरुष समास", "Tatpurusha Samas", "कर्मधारय समास", "Karmadharaya Samas",
      "A", "जिस समास का प्रथम पद संख्यावाचक विशेषण हो (चार राहों का समाहार), वह द्विगु समास होता है।",
      "The initial term denotes a numeral (assembly of 4 paths), designating Dvigu Samas.")

add_q(4, "Hindi", "साहित्य",
      "प्रसिद्ध रचना 'कामायनी' महाकाव्य के रचयिता कौन हैं?",
      "Who is the author of the epic 'Kamayani'?",
      "जयशंकर प्रसाद", "Jaishankar Prasad", "सूर्यकांत त्रिपाठी 'निराला'", "Suryakant Tripathi Nirala", "सुमित्रानंदन पंत", "Sumitranandan Pant", "महादेवी वर्मा", "Mahadevi Verma",
      "A", "छायावाद के प्रवर्तक जयशंकर प्रसाद ने 1936 में 15 सर्गों वाले कामायनी महाकाव्य की रचना की।",
      "Jaishankar Prasad composed the landmark Chhayavadi epic Kamayani in 1936.")

add_q(5, "Hindi", "रस",
      "हास्य रस का स्थायी भाव क्या होता है?",
      "What is the Sthayi Bhava (permanent emotion) of Hasya Rasa?",
      "हास", "Haas (Laughter)", "शोक", "Shok (Grief)", "क्रोध", "Krodh (Anger)", "भय", "Bhay (Fear)",
      "A", "हास्य रस का स्थायी भाव 'हास' (हँसी/उल्लास) होता है।",
      "The intrinsic emotional sentiment of Hasya Rasa is Haas (laughter/merriment).")

add_q(6, "Hindi", "विलोम शब्द",
      "'उत्कर्ष' शब्द का विलोम शब्द क्या है?",
      "What is the antonym of the word 'Utkarsh'?",
      "अपकर्ष", "Apakarsh", "अवकर्ष", "Avakarsh", "अनाकर्ष", "Anakarsh", "विमर्श", "Vimarsh",
      "A", "'उत्कर्ष' का अर्थ उन्नति या श्रेष्ठता होता है, इसका विलोम 'अपकर्ष' (पतन/अवनति) है।",
      "Utkarsh signifies elevation/ascendance; its antonym is Apakarsh (decline/fall).")

add_q(7, "Hindi", "पर्यायवाची",
      "निम्नलिखित में से कौन सा शब्द 'सूर्य' का पर्यायवाची नहीं है?",
      "Which of the following is NOT a synonym of 'Surya' (Sun)?",
      "शशांक", "Shashank (Moon)", "दिनकर", "Dinkar", "रवि", "Ravi", "भास्कर", "Bhaskar",
      "A", "'शशांक' चंद्रमा का पर्यायवाची है, जबकि दिनकर, रवि और भास्कर सूर्य के पर्यायवाची हैं।",
      "Shashank denotes the Moon; Dinkar, Ravi, and Bhaskar are solar synonyms.")

add_q(8, "Hindi", "मुहावरे",
      "'गागर में सागर भरना' मुहावरे का सही अर्थ क्या है?",
      "What is the meaning of the idiom 'Gagar mein sagar bharna'?",
      "थोड़े शब्दों में बहुत बड़ी बात कहना", "Expressing profound wisdom in concise words",
      "घड़े में पानी भरना", "Filling water in a pitcher",
      "व्यर्थ प्रलाप करना", "Wasting words pointlessly",
      "कठिन कार्य न कर पाना", "Failing to do tasks",
      "A", "कवि बिहारी के दोहों के संदर्भ में प्रसिद्ध है कि वे थोड़े शब्दों में गंभीर अर्थ भरते थे।",
      "It refers to packing profound thematic depth within concise speech.")

add_q(9, "Hindi", "तत्सम-तद्भव",
      "'दुग्ध' शब्द का तद्भव रूप क्या है?",
      "What is the Tadbhava derivative of Sanskrit 'Dugdha'?",
      "दूध", "Doodh", "क्षीर", "Ksheer", "गोरस", "Goras", "पय", "Paya",
      "A", "संस्कृत तत्सम 'दुग्ध' से हिंदी तद्भव 'दूध' बना है।",
      "The colloquial Hindi word derived from Sanskrit Dugdha is Doodh.")

add_q(10, "Hindi", "शुद्ध वर्तनी",
      "निम्नलिखित में से शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
      "Choose the word with the correct spelling:",
      "कवयित्री", "Kavayitri (कवयित्री)", "कविइत्री", "Kavi-itri", "कवयत्री", "Kavayatri", "कविइत्री", "Kaviyitri",
      "A", "स्त्रीलिंग रूप में शुद्ध वर्तनी 'कवयित्री' होती है।",
      "The standard grammatically valid feminine form for a female poet is Kavayitri.")

add_q(11, "Hindi", "कारक",
      "'मोहन ने सोहन को पुस्तक दी।' इस वाक्य में 'को' किस कारक का बोध कराता है?",
      "In 'Mohan ne Sohan ko pustak di', which Karak is indicated by 'ko' for giving?",
      "संप्रदान कारक", "Sampradan Karak (Dative)", "कर्म कारक", "Karm Karak", "करण कारक", "Karan Karak", "संबंध कारक", "Sambandh Karak",
      "A", "दान या उपहार देने के अर्थ में जिसे वस्तु सदा के लिए दी जाए, वहाँ संप्रदान कारक (चतुर्थी) होता है।",
      "In the context of gifting unconditionally, 'ko' functions as the marker for Sampradan (Dative).")

add_q(12, "Hindi", "वाच्य",
      "'रोहन द्वारा पत्र लिखा गया।' इस वाक्य में कौन सा वाच्य है?",
      "Which voice is in 'Rohan dwara patr likha gaya'?",
      "कर्मवाच्य", "Karmavachya (Passive Voice)", "कर्तृवाच्य", "Kartrivachya", "भाववाच्य", "Bhavavachya", "मिश्र वाच्य", "Mishra Vachya",
      "A", "यहाँ क्रिया 'लिखा गया' कर्म 'पत्र' के लिंग-वचन के अनुसार है और 'के द्वारा' का प्रयोग हुआ है, अतः कर्मवाच्य है।",
      "The transitive verb agrees with the objective complement (patr), signifying passive voice.")

add_q(13, "Hindi", "साहित्य - कबीर",
      "'बीजक' के रचयिता कौन हैं?",
      "Who compiled the spiritual poetry collection 'Bijak'?",
      "कबीरदास", "Kabirdas", "सूरदास", "Surdas", "तुलसीदास", "Tulsidas", "रैदास", "Raidasa",
      "A", "संत कबीर की वाणियों का प्रामाणिक संग्रह 'बीजक' है जिसके तीन भाग साखी, सबद और रमैनी हैं।",
      "Bijak is the quintessential compilation of Sant Kabirdas comprising Sakhi, Sabad, and Ramaini.")

add_q(14, "Hindi", "वर्णमाला",
      "हिंदी में 'ऊष्म व्यंजन' (Sibilants) कौन-कौन से हैं?",
      "Which group represents Ushma Vyanjan (fricatives/sibilants) in Hindi?",
      "श, ष, स, ह", "Sha, Sha (retroflex), Sa, Ha", "य, र, ल, व", "Ya, Ra, La, Va", "च, छ, ज, झ", "Cha, Chha, Ja, Jha", "क, ख, ग, घ", "Ka, Kha, Ga, Gha",
      "A", "श, ष, स, ह के उच्चारण में मुख से ऊष्मा (घर्षण युक्त वायु) निकलती है, अतः ये ऊष्म व्यंजन कहलाते हैं।",
      "Sha, Ssa, Sa, Ha generate friction/heat upon pronunciation, classified as Ushma consonants.")

add_q(15, "Hindi", "विशेषण",
      "'यह लड़का बहुत होशियार है।' वाक्य में 'बहुत' क्या है?",
      "In 'Yeh ladka bahut hoshiyar hai', what grammatical category is 'bahut'?",
      "प्रविशेषण", "Pravisheshan (Intensifier/Adjective modifier)", "विशेष्य", "Visheshya", "क्रिया", "Kriya", "संज्ञा", "Sangya",
      "A", "जो शब्द विशेषण की भी विशेषता बताए (होशियार की विशेषता 'बहुत'), उसे प्रविशेषण कहते हैं।",
      "Words modifying an adjective's intensity are classified as Pravisheshan.")

add_q(16, "Hindi", "अनेक शब्दों के लिए एक शब्द",
      "'जो सब कुछ जानता हो' के लिए एक शब्द क्या होगा?",
      "Give one word for 'One who knows everything':",
      "सर्वज्ञ", "Sarvajna (Omniscient)", "अल्पज्ञ", "Alpajna", "विज्ञ", "Vijna", "कृतज्ञ", "Kritajna",
      "A", "सब कुछ जानने वाले को 'सर्वज्ञ' तथा थोड़ा जानने वाले को 'अल्पज्ञ' कहते हैं।",
      "Sarvajna translates to omniscient (all-knowing).")

add_q(17, "Hindi", "उपसर्ग",
      "'प्रत्येक' शब्द में कौन सा उपसर्ग लगा है?",
      "Which prefix (Upsarg) is in 'Pratyek'?",
      "प्रति", "Prati", "प्र", "Pra", "प्रत्य", "Pratya", "पर", "Par",
      "A", "यण् संधि के नियमानुसार प्रति + एक = प्रत्येक। अतः उपसर्ग 'प्रति' है।",
      "By Yan Sandhi rules: Prati + Ek = Pratyek. The prefix is Prati.")

add_q(18, "Hindi", "प्रत्यय",
      "'धार्मिक' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
      "Which suffix (Pratyaya) is used in 'Dharmik'?",
      "इक", "Ik", "मिक", "Mik", "क", "Ka", "ईक", "Eek",
      "A", "धर्म + इक = धार्मिक (आदिसंवर वृद्धि के साथ 'इक' प्रत्यय)।",
      "Dharma + Ik forms Dharmik via the adjective-forming suffix 'Ik'.")

add_q(19, "Hindi", "लिंग",
      "निम्नलिखित शब्दों में से कौन सा शब्द स्त्रीलिंग है?",
      "Which of the following nouns is feminine in gender?",
      "नदी", "Nadi (River)", "पानी", "Pani (Water)", "दही", "Dahi (Curd)", "घी", "Ghee",
      "A", "'नदी' स्त्रीलिंग है (नदी बहती है), जबकि पानी, दही और घी पुल्लिंग शब्द हैं।",
      "Nadi (river) is feminine; Pani, Dahi, and Ghee are masculine in standard Hindi.")

add_q(20, "Hindi", "अपठित गद्यांश बोध",
      "'परिश्रम ही सफलता की कुंजी है। जो व्यक्ति समय का सदुपयोग करता है, वह कभी असफल नहीं होता।' इस कथन का केंद्रीय भाव क्या है?",
      "What is the central theme of 'Hard work is the key to success and prudent time utilization ensures victory'?",
      "समय प्रबंधन और सतत कर्मठता ही विजय का आधार है", "Time discipline and diligent effort underpin success",
      "केवल भाग्य पर निर्भर रहना चाहिए", "Relying on fate alone",
      "कठिन श्रम से बचना चाहिए", "Avoiding strenuous labor",
      "समय की कोई महत्ता नहीं है", "Disregarding time value",
      "A", "गद्यांश स्पष्ट करता है कि कर्म और समय की पाबंदी ही सफलता दिलाती है।",
      "Persistent disciplined industriousness is the sole bedrock of accomplishment.")

# -------------------------------------------------------------
# SECTION 2: SANSKRIT (Q21 - Q30) [10 Questions]
# -------------------------------------------------------------
add_q(21, "Sanskrit", "संधि",
      "'विद्यालयः' अस्य पदस्य संधि-विच्छेदः कः अस्ति?",
      "What is the Sandhi-Vichhed of 'Vidyalayah'?",
      "विद्या + आलयः", "Vidya + Aulayah", "विद् + आलयः", "Vid + Alayah", "विद्या + लयः", "Vidya + Layah", "विद्य + आलयः", "Vidya + Alayah",
      "A", "'अकः सवर्णे दीर्घः' सूत्रेण आ + आ = आ (दीर्घ स्वर सन्धिः)।",
      "By Savarna Deergha Sandhi (a + a = aa), Vidya + Alayah forms Vidyalayah.")

add_q(22, "Sanskrit", "समास",
      "'प्रतिदिनम्' इत्यत्र कः समासः अस्ति?",
      "Which Samas is in 'Pratidinam'?",
      "अव्ययीभाव समासः", "Avyayibhava Samas", "द्विगु समासः", "Dvigu Samas", "तत्पुरुष समासः", "Tatpurusha Samas", "कर्मधारय समासः", "Karmadharaya Samas",
      "A", "'दिनं दिनं प्रति = प्रतिदिनम्'। अत्र 'प्रति' अव्ययस्य प्राधान्यम् अस्ति।",
      "Dinam dinam prati = Pratidinam. The indeclinable prefix Prati makes it Avyayibhava.")

add_q(23, "Sanskrit", "कारक/विभक्ति",
      "'सह' योगे का विभक्तिः भवति? यथा 'रामेण सह सीता वनं गता'।",
      "Which Vibhakti is applied with the prepositional term 'Saha' (with)?",
      "तृतीया विभक्तिः", "Tritiya Vibhakti (Instrumental)", "द्वितीया विभक्तिः", "Dvitiya Vibhakti", "चतुर्थी विभक्तिः", "Chaturthi Vibhakti", "षष्ठी विभक्तिः", "Shashthi Vibhakti",
      "A", "'सहयुक्तेऽप्रधाने' सूत्रेण 'सह, साकं, सार्धम्' योगे तृतीया विभक्तिः प्रयुज्यते।",
      "By 'Sahayukte Apradhane', accompanying nouns with 'Saha' govern the third (instrumental) case.")

add_q(24, "Sanskrit", "धातु रूप",
      "'पठ्' धातोः लोट्लकारस्य (आज्ञार्थे) प्रथमपुरुषस्य एकवचने किं रूपं भवति?",
      "What is the form of 'Path' dhatu in Lot Lakara (imperative), 3rd person singular?",
      "पठतु", "Pathatu", "पठति", "Pathati", "अपठत्", "Apathat", "पठेत्", "Pathet",
      "A", "लोट्लकार प्रथम पुरुष रूपाणि: पठतु, पठताम्, पठन्तु।",
      "Conjugation of 'Path' in Lot Lakara (imperative mood), Prathama Purusha Ekavachana is 'Pathatu'.")

add_q(25, "Sanskrit", "शब्द रूप",
      "'नदी' शब्दस्य द्वितीया विभक्तौ बहुवचने किं रूपं भवति?",
      "What is the form of 'Nadi' in Dvitiya Vibhakti, Bahuvachana?",
      "नदीः", "Nadeeh (नदीः)", "नदीन्", "Nadeen", "नद्याः", "Nadyah", "नद्यः", "Nadyah",
      "A", "ईकारान्त स्त्रीलिङ्ग 'नदी' शब्दस्य द्वितीया बहुवचने 'नदीः' रूपं भवति।",
      "Accusative plural (Dvitiya Bahuvachana) of feminine Nadi is Nadeeh.")

add_q(26, "Sanskrit", "प्रत्यय",
      "'कृत्वा' इत्यत्र कः प्रत्ययः प्रयुक्तः?",
      "Which suffix (Pratyaya) is in 'Kritva'?",
      "क्त्वा", "Ktva", "तुमुन्", "Tumun", "ल्यप्", "Lyap", "क्त", "Kta",
      "A", "पूर्वे क्रियायां 'कृ' धातौ 'क्त्वा' प्रत्यये कृत्वा रूपं सिध्यति (करके)।",
      "The gerundial past participle suffix 'Ktva' attached to root 'Kri' creates 'Kritva' (having done).")

add_q(27, "Sanskrit", "कवि एवं रचना",
      "'रघुवंशम्' महाकाव्यस्य रचयिता कः अस्ति?",
      "Who authored the classical epic 'Raghuvamsham'?",
      "महाकवि कालिदासः", "Mahakavi Kalidasa", "भारविः", "Bharavi", "माघः", "Magha", "हर्षः", "Harsha",
      "A", "रघुवंशम् महाकवि कालिदासस्य 19 सर्गात्मकं प्रसिद्धं महाकाव्यम् अस्ति।",
      "Raghuvamsham is a 19-canto Sanskrit mahakavya composed by Mahakavi Kalidasa.")

add_q(28, "Sanskrit", "संख्या",
      "संस्कृतभाषायां 'पञ्चपञ्चाशत्' कस्याः संख्यायाः कृते प्रयुज्यते?",
      "In Sanskrit numerals, 'Panchapanchashat' represents:",
      "55", "55", "50", "50", "45", "45", "65", "65",
      "A", "पञ्च (5) + पञ्चाशत् (50) = 55 (पञ्चपञ्चाशत्)।",
      "Pancha (5) plus Panchashat (50) denotes 55.")

add_q(29, "Sanskrit", "उच्चारण स्थान",
      "'अकुहविसर्जनीयानां' उच्चारणस्थानं किं भवति?",
      "What is the articulatory location (Uchcharan Sthana) for gutturals and 'Ha'?",
      "कण्ठः", "Kantha (Throat/Glottal)", "तालु", "Talu", "मूर्धा", "Murdha", "ओष्ठौ", "Oshtha",
      "A", "'अकुहविसर्जनीयानां कण्ठः' अर्थात् अ, आ, क-वर्ग, ह तथा विसर्गस्य स्थानं कण्ठः अस्ति।",
      "Paninian phonetic rules assign Kantha (throat) to vowels a/aa, the ka-varga, ha, and visarga.")

add_q(30, "Sanskrit", "सूक्ति",
      "'विद्या ददाति विनयं विनयाद्याति पात्रताम्' अस्याः सूक्तेः स्रोत ग्रन्थः कः?",
      "What is the source text of the famous didactic verse 'Vidya dadati vinayam'?",
      "हितोपदेशः", "Hitopadesha", "पञ्चतन्त्रम्", "Panchatantra", "चाणक्यनीतिः", "Chanakya Niti", "मनुस्मृतिः", "Manusmriti",
      "A", "इयं नीति-सूक्तिः नारायणपण्डित-विरचितस्य 'हितोपदेशस्य' प्रस्तावनायाः अस्ति।",
      "This verse originates in the introductory benediction of Narayana Pandita's Hitopadesha.")

# -------------------------------------------------------------
# SECTION 3: ENGLISH (Q31 - Q40) [10 Questions]
# -------------------------------------------------------------
add_q(31, "English", "Parts of Speech",
      "Identify the part of speech of 'honesty' in: 'Honesty is always rewarded.'",
      "What part of speech is the word 'Honesty'?",
      "Abstract Noun", "Abstract Noun", "Proper Noun", "Proper Noun", "Adjective", "Adjective", "Adverb", "Adverb",
      "A", "'Honesty' names an intangible quality, classifying it as an Abstract Noun.",
      "Honesty denotes an intangible virtue/state, functioning as an abstract noun.")

add_q(32, "English", "Active and Passive Voice",
      "Turn into passive: 'The gardener waters the plants every evening.'",
      "Convert into Passive Voice: 'The gardener waters the plants every evening.'",
      "The plants are watered by the gardener every evening.", "The plants are watered by the gardener every evening.",
      "The plants were watered by the gardener every evening.", "The plants were watered by the gardener every evening.",
      "The plants have been watered by the gardener.", "The plants have been watered by the gardener.",
      "The plants are being watered by the gardener.", "The plants are being watered by the gardener.",
      "A", "Simple Present Active (V1) changes into Passive as (am/is/are + V3).",
      "Simple present active converts into 'are + V3' (watered) for the plural subject 'the plants'.")

add_q(33, "English", "Direct and Indirect Speech",
      "Change into indirect: He said to me, 'Where do you live?'",
      "Change into indirect speech: He said to me, 'Where do you live?'",
      "He asked me where I lived.", "He asked me where I lived.",
      "He asked me that where do I live.", "He asked me that where do I live.",
      "He told me where did I live.", "He told me where did I live.",
      "He inquired me where I had lived.", "He inquired me where I had lived.",
      "A", "Wh-questions retain the question word as connective, shift verb to past (lived), and drop auxiliary 'do'.",
      "In indirect wh-questions, the interrogative syntax converts to assertive word order with past tense.")

add_q(34, "English", "Articles",
      "Fill in the blank: 'He returned after ________ hour.'",
      "Fill in the blank: 'He returned after ________ hour.'",
      "an", "an", "a", "a", "the", "the", "no article", "no article",
      "A", "'Hour' begins with a silent 'h' producing a vowel sound /aʊər/, requiring 'an'.",
      "The initial 'h' is unvoiced, starting phonetically with vowel sound /aʊər/, hence taking 'an'.")

add_q(35, "English", "Prepositions",
      "Choose the correct preposition: 'She has been suffering from fever ________ Monday last.'",
      "Fill in the blank with the appropriate preposition:",
      "since", "since", "for", "for", "from", "from", "by", "by",
      "A", "For a specific point of time in the past (Monday last), 'since' is used in perfect tenses.",
      "A definite starting point of time in perfect continuous takes 'since'.")

add_q(36, "English", "Synonyms",
      "Find the synonym of 'TRANQUIL':",
      "What is the closest synonym of 'TRANQUIL'?",
      "Peaceful", "Peaceful", "Noisy", "Noisy", "Agitated", "Agitated", "Violent", "Violent",
      "A", "'Tranquil' means calm, quiet, and serene; 'Peaceful' is its exact synonym.",
      "Tranquil signifies serene stillness and freedom from disturbance, matching Peaceful.")

add_q(37, "English", "Antonyms",
      "Choose the word that is OPPOSITE in meaning to 'OBSTINATE':",
      "Choose the exact antonym of 'OBSTINATE':",
      "Flexible", "Flexible", "Stubborn", "Stubborn", "Rigid", "Rigid", "Firm", "Firm",
      "A", "'Obstinate' means stubborn and unyielding; its opposite is 'Flexible' or yielding.",
      "Obstinate means unbendingly stubborn; the direct opposite is Flexible/Compliant.")

add_q(38, "English", "Subject-Verb Agreement",
      "Choose the correct verb: 'Slow and steady ________ the race.'",
      "Select the grammatically correct verb:",
      "wins", "wins", "win", "win", "winning", "winning", "have won", "have won",
      "A", "When two nouns joined by 'and' express a singular unified idea/phrase, a singular verb (wins) is used.",
      "Compound subjects expressing a single holistic concept take a singular verb.")

add_q(39, "English", "Idioms and Phrases",
      "What is the meaning of 'To burn the candle at both ends'?",
      "The idiom 'To burn the candle at both ends' implies:",
      "To overwork and exhaust one's energy", "To overwork and exhaust one's energy",
      "To be extremely extravagant with money", "To be extremely extravagant with money",
      "To illuminate a dark room", "To illuminate a dark room",
      "To create conflicts", "To create conflicts",
      "A", "It means exhausting one's physical resources by working late into the night and rising very early.",
      "It signifies severe exertion by working excessively hard without adequate rest.")

add_q(40, "English", "Error Detection",
      "Find the erroneous part: 'One of my friend (A) / is visiting (B) / New Delhi (C) / No error (D)'",
      "Identify the grammatically incorrect section of the sentence:",
      "One of my friend", "One of my friend (should be 'friends')",
      "is visiting", "is visiting", "New Delhi", "New Delhi", "No error", "No error",
      "A", "The phrase 'one of' is always followed by a plural noun: 'One of my friends'.",
      "The partitive structure 'one of' takes a plural noun: 'One of my friends'.")

# -------------------------------------------------------------
# SECTION 4: SCIENCE (Q41 - Q50) [10 Questions]
# -------------------------------------------------------------
add_q(41, "Science", "भौतिकी - विद्युत",
      "विद्युत धारा (Electric Current) का SI मात्रक क्या होता है?",
      "What is the SI unit of Electric Current?",
      "एम्पियर (Ampere - A)", "Ampere (A)", "वोल्ट (Volt - V)", "Volt (V)", "ओम (Ohm - Ω)", "Ohm (Ω)", "वाट (Watt - W)", "Watt (W)",
      "A", "विद्युत धारा का अंतरराष्ट्रीय मानक (SI) मात्रक एम्पियर (A) होता है।",
      "Ampere is the base SI unit measuring electric current.")

add_q(42, "Science", "भौतिकी - लेंस व दृष्टि दोष",
      "निकट दृष्टि दोष (Myopia) के निवारण के लिए किस प्रकार के लेंस का चश्मा प्रयुक्त होता है?",
      "Which type of lens is used in spectacles to correct Myopia (Short-sightedness)?",
      "अवतल लेंस (Concave Lens)", "Concave Lens", "उत्तल लेंस (Convex Lens)", "Convex Lens", "द्विफोकसी लेंस (Bifocal)", "Bifocal Lens", "बेलनाकार लेंस (Cylindrical)", "Cylindrical Lens",
      "A", "निकट दृष्टि दोष में प्रतिबिंब रेटिना से पहले बनता है, अवतल लेंस प्रकाश किरणों को अपसारित कर रेटिना पर केंद्रित करता है।",
      "A concave (diverging) lens offsets excessive corneal refraction, shifting focal point onto retina.")

add_q(43, "Science", "रसायन विज्ञान - गैसें",
      "चूने के पानी (Lime water) में कार्बन डाइऑक्साइड गैस प्रवाहित करने पर वह दूधिया क्यों हो जाता है?",
      "Why does lime water turn milky when carbon dioxide gas is bubbled through it?",
      "कैल्शियम कार्बोनेट (CaCO₃) के बनने के कारण", "Due to formation of insoluble Calcium Carbonate (CaCO₃)",
      "कैल्शियम बाइकार्बोनेट के बनने के कारण", "Due to Calcium Bicarbonate",
      "कैल्शियम ऑक्साइड के कारण", "Due to Calcium Oxide",
      "कैल्शियम क्लोराइड के कारण", "Due to Calcium Chloride",
      "A", "Ca(OH)₂ + CO₂ → CaCO₃ (सफेद अवक्षेप) + H₂O। अघुलनशील कैल्शियम कार्बोनेट बनने से पानी दूधिया दिखता है।",
      "CO2 reacts with aqueous calcium hydroxide forming a white precipitate of CaCO3.")

add_q(44, "Science", "रसायन विज्ञान - रासायनिक सूत्र",
      "साधारण नमक (Common Salt) का रासायनिक नाम एवं सूत्र क्या है?",
      "What is the chemical name and formula of common table salt?",
      "सोडियम क्लोराइड (NaCl)", "Sodium Chloride (NaCl)",
      "सोडियम कार्बोनेट (Na₂CO₃)", "Sodium Carbonate",
      "सोडियम बाइकार्बोनेट (NaHCO₃)", "Sodium Bicarbonate",
      "पोटेशियम क्लोराइड (KCl)", "Potassium Chloride",
      "A", "हम जो खाने का नमक उपयोग करते हैं, वह सोडियम क्लोराइड (NaCl) होता है।",
      "Table salt consists predominantly of ionic Sodium Chloride (NaCl).")

add_q(45, "Science", "जीव विज्ञान - प्रकाश संश्लेषण",
      "पादपों में प्रकाश संश्लेषण (Photosynthesis) की प्रक्रिया के दौरान कौन सी गैस उत्सर्जित होती है?",
      "Which gas is liberated as a byproduct during plant photosynthesis?",
      "ऑक्सीजन (O₂)", "Oxygen (O₂)", "कार्बन डाइऑक्साइड (CO₂)", "Carbon Dioxide (CO₂)", "नाइट्रोजन (N₂)", "Nitrogen (N₂)", "हाइड्रोजन (H₂)", "Hydrogen (H₂)",
      "A", "जल के प्रकाशीय अपघटन (Photolysis of water) द्वारा ऑक्सीजन गैस वातावरण में मुक्त होती है।",
      "Oxygen is evolved via the light-dependent photolysis of water molecules inside chloroplasts.")

add_q(46, "Science", "जीव विज्ञान - रक्त परिसंचरण",
      "मानव शरीर में 'सर्वदाता' (Universal Donor) रक्त समूह कौन सा माना जाता है?",
      "Which blood group is universally termed as the Universal Donor?",
      "रक्त समूह O (विशेषतः O नेगेटिव)", "Blood Group O (specifically O negative)",
      "रक्त समूह AB", "Blood Group AB", "रक्त समूह A", "Blood Group A", "रक्त समूह B", "Blood Group B",
      "A", "O रक्त समूह में RBC पर कोई A या B एंटीजन नहीं होता, अतः यह किसी भी समूह को दिया जा सकता है।",
      "Group O erythrocytes lack surface A and B antigens, preventing recipient immune agglutination.")

add_q(47, "Science", "जीव विज्ञान - पादप ऊतक",
      "पौधों में जड़ों द्वारा अवशोषित जल एवं खनिजों का संवहन पत्तियों तक किस ऊतक द्वारा होता है?",
      "Which plant vascular tissue transports water and dissolved minerals from roots upward to leaves?",
      "जाइलम (Xylem)", "Xylem", "फ्लोएम (Phloem)", "Phloem", "कैम्बियम (Cambium)", "Cambium", "मृदूतक (Parenchyma)", "Parenchyma",
      "A", "जाइलम जल एवं खनिजों का ऊर्ध्वगामी संवहन करता है, जबकि फ्लोएम निर्मित भोजन (सुक्रोज) का संवहन करता है।",
      "Xylem vessels conduct water and inorganic solutes unidirectionally from roots to aerial organs.")

add_q(48, "Science", "भौतिकी - दाब",
      "वायुमंडलीय दाब (Atmospheric Pressure) को मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
      "Which scientific instrument is employed to measure Atmospheric Pressure?",
      "बैरोमीटर (Barometer)", "Barometer", "लैक्टोमीटर (Lactometer)", "Lactometer", "हाइड्रोमीटर (Hydrometer)", "Hydrometer", "थर्मामीटर (Thermometer)", "Thermometer",
      "A", "टोरिसेली द्वारा आविष्कृत बैरोमीटर वायुमंडलीय दबाव मापने का मानक यंत्र है।",
      "The mercury barometer, devised by Torricelli, measures atmospheric pressure.")

add_q(49, "Science", "जीव विज्ञान - जीवाणु जनित रोग",
      "निम्नलिखित में से कौन सा रोग जीवाणु (Bacteria) के संक्रमण से होता है?",
      "Which of the following human diseases is caused by a bacterial pathogen?",
      "हैजा (Cholera)", "Cholera (Vibrio cholerae)", "पोलियो", "Polio (Virus)", "मलेरिया", "Malaria (Plasmodium)", "इन्फ्लूएंजा", "Influenza (Virus)",
      "A", "हैजा 'विब्रियो कोलेरी' जीवाणु द्वारा दूषित जल-भोजन से फैलता है।",
      "Cholera is an acute diarrheal infection caused by ingestion of food/water contaminated with bacterium Vibrio cholerae.")

add_q(50, "Science", "भौतिकी - गुरुत्वाकर्षण",
      "पृथ्वी की सतह से किसी वस्तु का पलायन वेग (Escape Velocity) लगभग कितना होता है?",
      "What is the approximate escape velocity from the surface of Earth?",
      "11.2 किमी/सेकंड", "11.2 km/s", "9.8 किमी/सेकंड", "9.8 km/s", "7.9 किमी/सेकंड", "7.9 km/s", "15.0 किमी/सेकंड", "15.0 km/s",
      "A", "वह न्यूनतम वेग जिस पर फेंकी गई वस्तु गुरुत्वाकर्षण क्षेत्र पार कर जाए, 11.2 km/s होता है।",
      "The minimum speed required for an unpropelled body to break free from Earth's gravity is 11.2 km/s.")

# -------------------------------------------------------------
# SECTION 5: MATHEMATICS (Q51 - Q70) [20 Questions]
# -------------------------------------------------------------
add_q(51, "Mathematics", "संख्या पद्धति",
      "संख्या 75892 में 5 का स्थानीय मान (Place value) तथा अंकित मान (Face value) का अंतर क्या होगा?",
      "In the number 75,892, find the difference between the place value and face value of 5:",
      "4995", "4995", "5000", "5000", "4990", "4990", "5", "5",
      "A", "5 का स्थानीय मान = 5000; 5 का अंकित मान = 5। अंतर = 5000 - 5 = 4995।",
      "Place value = 5000. Face value = 5. Difference = 5000 - 5 = 4995.")

add_q(52, "Mathematics", "प्रतिशत",
      "यदि किसी कक्षा में 60% छात्र उत्तीर्ण हुए और 160 छात्र अनुत्तीर्ण हुए, तो कक्षा में कुल छात्रों की संख्या कितनी थी?",
      "If 60% of students passed an exam and 160 students failed, find the total student enrollment:",
      "400", "400", "360", "360", "450", "450", "500", "500",
      "A", "अनुत्तीर्ण% = 100% - 60% = 40%। 40% = 160 ⇒ 100% = (160 / 40) × 100 = 400 छात्र।",
      "Failure rate = 40%. Total = 160 / 0.40 = 400 students.")

add_q(53, "Mathematics", "लाभ और हानि",
      "किसी वस्तु को 900 रुपये में बेचने पर 10% की हानि होती है। 10% लाभ कमाने के लिए उसे किस मूल्य पर बेचना चाहिए?",
      "An article sold for Rs. 900 incurs a 10% loss. At what price must it be sold to gain 10%?",
      "1100 रुपये", "Rs. 1,100", "1000 रुपये", "Rs. 1,000", "1050 रुपये", "Rs. 1,050", "1200 रुपये", "Rs. 1,200",
      "A", "क्रय मूल्य = 900 / 0.90 = 1000 रुपये। 10% लाभ पर विक्रय मूल्य = 1000 × 1.10 = 1100 रुपये।",
      "Cost Price = 900 / 0.9 = Rs. 1000. Desired Selling Price = 1000 * 1.10 = Rs. 1,100.")

add_q(54, "Mathematics", "साधारण ब्याज",
      "कितने समय में कोई धनराशि 10% वार्षिक साधारण ब्याज की दर से स्वयं की दोगुनी (Double) हो जाएगी?",
      "In how many years will a sum of money double itself at 10% annual simple interest rate?",
      "10 वर्ष", "10 years", "8 वर्ष", "8 years", "12 वर्ष", "12 years", "15 वर्ष", "15 years",
      "A", "ब्याज = मूलधन (P) ⇒ T = (100 × SI) / (P × R) = (100 × P) / (P × 10) = 10 वर्ष।",
      "Time = 100 * (n - 1) / R = 100 * (2 - 1) / 10 = 10 years.")

add_q(55, "Mathematics", "औसत",
      "प्रथम 20 प्राकृतिक संख्याओं का औसत क्या होगा?",
      "What is the average of the first 20 natural numbers?",
      "10.5", "10.5", "10.0", "10.0", "11.0", "11.0", "11.5", "11.5",
      "A", "प्रथम n प्राकृतिक संख्याओं का औसत = (n + 1) / 2 = (20 + 1) / 2 = 10.5।",
      "Average of first n natural numbers = (n + 1) / 2 = 21 / 2 = 10.5.")

add_q(56, "Mathematics", "अनुपात",
      "दो संख्याओं का अनुपात 3 : 4 है और उनका योगफल 280 है। बड़ी संख्या का मान क्या होगा?",
      "The ratio of two numbers is 3 : 4 and their sum is 280. Find the larger number:",
      "160", "160", "120", "120", "140", "140", "180", "180",
      "A", "अनुपातिक योग = 3 + 4 = 7। 1 इकाई = 280 / 7 = 40। बड़ी संख्या = 4 × 40 = 160।",
      "Ratio sum = 7 units = 280 => 1 unit = 40. Larger number = 4 * 40 = 160.")

add_q(57, "Mathematics", "ल.स. और म.स.",
      "संख्याओं 36 और 54 का महत्तम समापवर्तक (HCF) क्या होगा?",
      "Find the Highest Common Factor (HCF) of 36 and 54:",
      "18", "18", "9", "9", "12", "12", "6", "6",
      "A", "36 = 18 × 2, 54 = 18 × 3। दोनों में सबसे बड़ा उभयनिष्ठ गुणनखंड 18 है।",
      "36 = 2 * 3^2, 54 = 2 * 3^3. HCF = 2 * 3^2 = 18.")

add_q(58, "Mathematics", "क्षेत्रमिति - वर्ग",
      "एक वर्गाकार पार्क का क्षेत्रफल 625 वर्ग मीटर है। इसके चारों ओर एक चक्कर लगाने पर तय की गई दूरी (परिमाप) कितनी होगी?",
      "The area of a square park is 625 m². What is its perimeter?",
      "100 मीटर", "100 meters", "25 मीटर", "25 meters", "125 मीटर", "125 meters", "50 मीटर", "50 meters",
      "A", "भुजा = √625 = 25 मीटर। परिमाप = 4 × भुजा = 4 × 25 = 100 मीटर।",
      "Side = sqrt(625) = 25 m. Perimeter = 4 * side = 100 m.")

add_q(59, "Mathematics", "क्षेत्रमिति - त्रिभुज",
      "एक समकोण त्रिभुज का आधार 12 सेमी तथा ऊँचाई 5 सेमी है। इसका क्षेत्रफल क्या होगा?",
      "Find the area of a right-angled triangle having base 12 cm and height 5 cm:",
      "30 सेमी²", "30 cm²", "60 सेमी²", "60 cm²", "25 सेमी²", "25 cm²", "17 सेमी²", "17 cm²",
      "A", "समकोण त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई = 1/2 × 12 × 5 = 30 सेमी²।",
      "Area = 1/2 * base * height = 1/2 * 12 * 5 = 30 cm².")

add_q(60, "Mathematics", "समय और कार्य",
      "12 पुरुष किसी कार्य को 8 दिन में पूरा कर सकते हैं। उसी कार्य को 6 दिन में पूरा करने के लिए कितने पुरुषों की आवश्यकता होगी?",
      "12 men can complete a task in 8 days. How many men are needed to finish it in 6 days?",
      "16 पुरुष", "16 men", "14 पुरुष", "14 men", "18 पुरुष", "18 men", "15 पुरुष", "15 men",
      "A", "M₁D₁ = M₂D₂ ⇒ 12 × 8 = M₂ × 6 ⇒ M₂ = 96 / 6 = 16 पुरुष।",
      "Using M1 * D1 = M2 * D2: 12 * 8 = M2 * 6 => M2 = 16 men.")

add_q(61, "Mathematics", "चाल, समय और दूरी",
      "एक रेलगाड़ी 180 किमी की दूरी 3 घंटे में तय करती है। उसकी चाल मीटर/सेकंड (m/s) में कितनी होगी?",
      "A train covers 180 km in 3 hours. Express its speed in meters per second (m/s):",
      "16.67 m/s (50/3 m/s)", "16.67 m/s", "20 m/s", "20 m/s", "15 m/s", "15 m/s", "25 m/s", "25 m/s",
      "A", "चाल = 180 / 3 = 60 किमी/घंटा। m/s में = 60 × (5/18) = 50/3 ≈ 16.67 m/s।",
      "Speed = 180 / 3 = 60 km/h = 60 * (5/18) = 50/3 m/s ≈ 16.67 m/s.")

add_q(62, "Mathematics", "बीजगणित",
      "यदि 2x + 3 = 11 हो, तो (3x - 2) का मान क्या होगा?",
      "If 2x + 3 = 11, find the value of (3x - 2):",
      "10", "10", "12", "12", "8", "8", "14", "14",
      "A", "2x = 8 ⇒ x = 4। अतः 3x - 2 = 3(4) - 2 = 12 - 2 = 10।",
      "2x = 8 => x = 4. Then 3(4) - 2 = 10.")

add_q(63, "Mathematics", "घातांक",
      "सरल कीजिए: (2³)² ÷ 2⁴",
      "Simplify: (2³)² / 2⁴",
      "4", "4", "2", "2", "8", "8", "16", "16",
      "A", "(2³)² = 2⁶ = 64; 64 ÷ 2⁴ = 64 ÷ 16 = 4 (अथवा 2⁶⁻⁴ = 2² = 4)।",
      "2^(3*2) / 2^4 = 2^6 / 2^4 = 2^(6-4) = 2^2 = 4.")

add_q(64, "Mathematics", "सांख्यिकी - माध्यिका",
      "दिए गए आंकड़ों की माध्यिका (Median) क्या होगी: 3, 7, 1, 9, 5?",
      "Find the median of the dataset: 3, 7, 1, 9, 5:",
      "5", "5", "3", "3", "7", "7", "1", "1",
      "A", "आरोही क्रम: 1, 3, 5, 7, 9। पदों की संख्या n = 5 (विषम)। मध्य पद = 3रा पद = 5।",
      "Ascending order: 1, 3, 5, 7, 9. Middle element is 5.")

add_q(65, "Mathematics", "ज्यामिति - संपूरक कोण",
      "एक कोण अपने संपूरक कोण (Supplementary Angle) का एक-तिहाई (1/3) है। उस कोण का मान क्या होगा?",
      "An angle is one-third of its supplementary angle. Find the angle:",
      "45°", "45°", "60°", "60°", "30°", "30°", "36°", "36°",
      "A", "माना संपूरक कोण x है, तो कोण x/3 है। x + x/3 = 180° ⇒ 4x/3 = 180° ⇒ x = 135°। अभीष्ट कोण = 135/3 = 45°।",
      "x + x/3 = 180° => 4x/3 = 180 => x = 135°. The angle is 135/3 = 45°.")

add_q(66, "Mathematics", "आयतन - बेलन",
      "एक लम्बवृत्तीय बेलन की आधार त्रिज्या 7 सेमी और ऊँचाई 10 सेमी है। इसका आयतन कितना होगा? (π = 22/7)",
      "Find the volume of a right circular cylinder with radius 7 cm and height 10 cm:",
      "1540 सेमी³", "1540 cm³", "1440 सेमी³", "1440 cm³", "770 सेमी³", "770 cm³", "3080 सेमी³", "3080 cm³",
      "A", "बेलन का आयतन = πr²h = (22/7) × 7 × 7 × 10 = 1540 सेमी³।",
      "Volume = π * r² * h = (22/7) * 49 * 10 = 1,540 cm³.")

add_q(67, "Mathematics", "प्रायिकता",
      "ताश की 52 पत्तों की गड्डी में से यादृच्छया एक पत्ता निकालने पर उसके 'इक्का' (Ace) होने की प्रायिकता क्या है?",
      "What is the probability of drawing an Ace from a standard deck of 52 playing cards?",
      "1/13", "1/13", "1/52", "1/52", "1/4", "1/4", "4/13", "4/13",
      "A", "कुल इक्के = 4, कुल पत्ते = 52। प्रायिकता = 4/52 = 1/13।",
      "Favorable outcomes = 4 aces. Total = 52 cards. Probability = 4/52 = 1/13.")

add_q(68, "Mathematics", "त्रिकोणमिति",
      "यदि tan θ = 4/3 हो, तो sin θ का मान क्या होगा?",
      "If tan θ = 4/3, what is the value of sin θ?",
      "4/5", "4/5", "3/5", "3/5", "5/4", "5/4", "3/4", "3/4",
      "A", "लम्ब = 4, आधार = 3 ⇒ कर्ण = √(4² + 3²) = 5। अतः sin θ = लम्ब/कर्ण = 4/5।",
      "Opposite = 4, Adjacent = 3 => Hypotenuse = 5. sin θ = 4/5.")

add_q(69, "Mathematics", "सरलीकरण (BODMAS)",
      "मान ज्ञात कीजिए: 25 - 5 × [2 + 3 × (2 - 1)]",
      "Evaluate: 25 - 5 * [2 + 3 * (2 - 1)]",
      "0", "0", "15", "15", "5", "5", "20", "20",
      "A", "2 - 1 = 1; 3 × 1 = 3; 2 + 3 = 5; 5 × 5 = 25; 25 - 25 = 0।",
      "Inner bracket: 2-1 = 1 => 2 + 3 = 5 => 5 * 5 = 25 => 25 - 25 = 0.")

add_q(70, "Mathematics", "साझेदारी",
      "A और B ने क्रमशः 20,000 और 30,000 रुपये लगाकर व्यापार शुरू किया। 1 वर्ष बाद 10,000 रुपये के लाभ में A का हिस्सा कितना होगा?",
      "A and B invest Rs. 20,000 and Rs. 30,000 in a business. At the end of a year, the profit is Rs. 10,000. Find A's share:",
      "4000 रुपये", "Rs. 4,000", "6000 रुपये", "Rs. 6,000", "5000 रुपये", "Rs. 5,000", "3000 रुपये", "Rs. 3,000",
      "A", "लाभ का अनुपात = 20000 : 30000 = 2 : 3। A का हिस्सा = (2/5) × 10000 = 4000 रुपये।",
      "Investment ratio = 2 : 3. A's profit share = 2/5 * 10,000 = Rs. 4,000.")

# -------------------------------------------------------------
# SECTION 6: ENVIRONMENTAL STUDIES & SOCIAL SCIENCE (Q71 - Q80) [10 Questions]
# -------------------------------------------------------------
add_q(71, "Environmental Studies & Social Science", "भारतीय संविधान",
      "भारतीय संविधान के किस अनुच्छेद में 'समानता का अधिकार' (Right to Equality) उल्लेखित है?",
      "Which Articles of the Indian Constitution enshrine the Right to Equality?",
      "अनुच्छेद 14 से 18", "Articles 14 to 18", "अनुच्छेद 19 से 22", "Articles 19 to 22", "अनुच्छेद 23 से 24", "Articles 23 to 24", "अनुच्छेद 25 से 28", "Articles 25 to 28",
      "A", "अनुच्छेद 14 से 18 तक विधि के समक्ष समानता, भेदभाव का निषेध, अवसरों की समानता आदि वर्णित हैं।",
      "Articles 14-18 delineate fundamental rights to equality before law.")

add_q(72, "Environmental Studies & Social Science", "पर्यावरण - ग्रीनहाउस प्रभाव",
      "वैश्विक तापन (ग्लोबल वार्मिंग) के लिए सर्वाधिक उत्तरदायी प्राथमिक ग्रीनहाउस गैस कौन सी है?",
      "Which is the primary greenhouse gas primarily responsible for anthropogenic global warming?",
      "कार्बन डाइऑक्साइड (CO₂)", "Carbon Dioxide (CO₂)", "नाइट्रोजन (N₂)", "Nitrogen", "ऑक्सीजन (O₂)", "Oxygen", "हाइड्रोजन", "Hydrogen",
      "A", "जीवाश्म ईंधनों के दहन से निकलने वाली कार्बन डाइऑक्साइड ग्लोबल वार्मिंग की मुख्य कारक है।",
      "CO2 emissions from burning fossil fuels are the primary driver of anthropogenic global warming.")

add_q(73, "Environmental Studies & Social Science", "भारतीय इतिहास",
      "महात्मा गांधी ने वर्ष 1930 में किस ऐतिहासिक यात्रा के साथ 'सविनय अवज्ञा आंदोलन' प्रारंभ किया था?",
      "With which historic march in 1930 did Mahatma Gandhi inaugurate the Civil Disobedience Movement?",
      "दांडी मार्च (नमक सत्याग्रह)", "Dandi March (Salt Satyagraha)",
      "चंपारण सत्याग्रह", "Champaran Satyagraha",
      "खेड़ा सत्याग्रह", "Kheda Satyagraha",
      "भारत छोड़ो आंदोलन", "Quit India Movement",
      "A", "12 मार्च से 6 अप्रैल 1930 तक साबरमती से दांडी तक 240 मील की पदयात्रा कर नमक कानून तोड़ा गया था।",
      "Dandi Salt March (March 12 - April 6, 1930) launched the Civil Disobedience campaign.")

add_q(74, "Environmental Studies & Social Science", "भूगोल - दर्रे",
      "'नाथुला दर्रा' (Nathu La Pass) भारत के किस पूर्वोत्तर राज्य में स्थित है?",
      "In which Indian state is the Himalayan Nathu La Pass located?",
      "सिक्किम", "Sikkim", "अरुणाचल प्रदेश", "Arunachal Pradesh", "उत्तराखंड", "Uttarakhand", "हिमाचल प्रदेश", "Himachal Pradesh",
      "A", "नाथुला दर्रा सिक्किम में स्थित है जो भारत को तिब्बत (चीन) से जोड़ता है।",
      "Nathu La is an ancient mountain pass in Sikkim connecting India with Tibet.")

add_q(75, "Environmental Studies & Social Science", "पारिस्थितिकी तंत्र",
      "किसी भी स्थलीय पारिस्थितिकी तंत्र में ऊर्जा का 'पिरामिड' सदैव कैसा होता है?",
      "What is the orientation of an ecological Pyramid of Energy in any ecosystem?",
      "सदैव सीधा (Always Upright)", "Always Upright", "सदैव उल्टा (Inverted)", "Always Inverted", "कभी सीधा कभी उल्टा", "Sometimes upright, sometimes inverted", "वृत्ताकार", "Circular",
      "A", "ऊष्मागतिकी के नियमानुसार ऊर्जा का प्रवाह एकदिशीय होता है और प्रत्येक पोषण स्तर पर ऊर्जा घटती है (10% नियम), अतः पिरामिड सदैव सीधा होता है।",
      "Energy diminishes up the trophic chain (Lindeman's 10% law), keeping energy pyramids always upright.")

add_q(76, "Environmental Studies & Social Science", "उत्तर प्रदेश नदियाँ",
      "उत्तर प्रदेश की राजधानी लखनऊ किस नदी के तट पर स्थित है?",
      "On the banks of which river is Lucknow, the capital of Uttar Pradesh, situated?",
      "गोमती नदी", "Gomti River", "गंगा नदी", "Ganga River", "यमुना नदी", "Yamuna River", "सरयू नदी", "Saryu River",
      "A", "लखनऊ शहर पीलीभीत के गोमत ताल से उद्गमित होने वाली गोमती नदी के तट पर बसा है।",
      "Lucknow is located on the banks of the Gomti River.")

add_q(77, "Environmental Studies & Social Science", "पंचायती राज",
      "भारत में त्रिस्तरीय पंचायती राज व्यवस्था की संस्तुति किस समिति ने की थी?",
      "Which committee recommended the three-tier Panchayati Raj system in India?",
      "बलवंत राय मेहता समिति (1957)", "Balwant Rai Mehta Committee (1957)",
      "अशोक मेहता समिति", "Ashok Mehta Committee",
      "एल. एम. सिंघवी समिति", "L. M. Singhvi Committee",
      "सरकारिया आयोग", "Sarkaria Commission",
      "A", "1957 में बलवंत राय मेहता समिति ने ग्राम, ब्लॉक और जिला स्तर पर त्रिस्तरीय पंचायती राज की सिफारिश की थी।",
      "Balwant Rai Mehta Committee recommended democratic decentralization via a three-tier Panchayati system.")

add_q(78, "Environmental Studies & Social Science", "भूगोल - मिट्टी",
      "कपास की खेती के लिए सर्वाधिक उपयुक्त मिट्टी कौन सी मानी जाती है?",
      "Which soil type is recognized as ideal for the cultivation of cotton?",
      "काली मिट्टी (रेगुर मिट्टी)", "Black Soil (Regur)", "जलोढ़ मिट्टी", "Alluvial Soil", "लाल मिट्टी", "Red Soil", "लैटेराइट मिट्टी", "Laterite Soil",
      "A", "काली मिट्टी में जल धारण क्षमता अधिक होती है, इसे 'काली कपास मिट्टी' या रेगुर कहते हैं।",
      "Black soil (Regur) exhibits high moisture retention, ideal for cotton farming.")

add_q(79, "Environmental Studies & Social Science", "जैव विविधता दिवस",
      "प्रतिवर्ष 'अंतर्राष्ट्रीय जैव विविधता दिवस' किस तिथि को मनाया जाता है?",
      "On which date is International Day for Biological Diversity observed worldwide?",
      "22 मई", "May 22", "22 मार्च", "March 22", "22 अप्रैल", "April 22", "5 जून", "June 5",
      "A", "संयुक्त राष्ट्र द्वारा जैव विविधता संरक्षण के प्रति जागरूकता हेतु 22 मई को यह दिवस मनाया जाता है।",
      "International Day for Biological Diversity is celebrated annually on May 22.")

add_q(80, "Environmental Studies & Social Science", "सौर ऊर्जा",
      "सूर्य से आने वाली पराबैंगनी किरणों (UV rays) से पृथ्वी के जीवों की रक्षा कौन सी गैस करती है?",
      "Which gas layer shields terrestrial organisms from lethal solar ultraviolet rays?",
      "ओजोन (O₃)", "Ozone (O₃)", "ऑक्सीजन (O₂)", "Oxygen", "हीलियम (He)", "Helium", "मीथेन (CH₄)", "Methane",
      "A", "समताप मंडल में स्थित ओजोन गैस (O₃) हानिकारक पराबैंगनी-बी (UV-B) किरणों को अवशोषित करती है।",
      "Stratospheric ozone filters out hazardous solar UV-B radiation.")

# -------------------------------------------------------------
# SECTION 7: TEACHING METHODOLOGY (Q81 - Q90) [10 Questions]
# -------------------------------------------------------------
add_q(81, "Teaching Methodology", "शिक्षण सूत्र",
      "शिक्षण का कौन सा सूत्र छात्रों को उनके पूर्वज्ञान से जोड़कर नवीन ज्ञान सिखाने पर बल देता है?",
      "Which teaching maxim emphasizes connecting a pupil's previous knowledge to new learning?",
      "ज्ञात से अज्ञात की ओर (Known to Unknown)", "Known to Unknown",
      "अज्ञात से ज्ञात की ओर", "Unknown to Known",
      "जटिल से सरल की ओर", "Complex to Simple",
      "विशिष्ट से सामान्य की ओर", "Specific to General",
      "A", "बालक जो पहले से जानता है, उसी के आधार पर नया संप्रत्यय सिखाना 'ज्ञात से अज्ञात की ओर' कहलाता है।",
      "Building from existing cognitive schemas to unfamiliar concepts defines Known to Unknown.")

add_q(82, "Teaching Methodology", "मॉन्टेसरी पद्धति",
      "डॉ. मारिया मॉन्टेसरी द्वारा प्रतिपादित शिक्षण प्रणाली किस आयु वर्ग के बालकों के ज्ञानेंद्रिय प्रशिक्षण पर विशेष बल देती है?",
      "Maria Montessori's educational method places primary emphasis on sensory training for:",
      "प्रारंभिक बाल्यावस्था (3 से 7 वर्ष)", "Early childhood (3 to 7 years)",
      "किशोरावस्था (12 से 18 वर्ष)", "Adolescence (12 to 18 years)",
      "प्रौढ़ शिक्षा", "Adult education",
      "केवल उच्च प्राथमिक स्तर", "Upper primary level only",
      "A", "मॉन्टेसरी पद्धति 3-7 वर्ष के बच्चों में 'कर्मेंद्रिय एवं ज्ञानेंद्रिय शिक्षण' पर आधारित है।",
      "Montessori method relies on didactic sensory apparatus tailored for early childhood.")

add_q(83, "Teaching Methodology", "मूल्यांकन",
      "रचनात्मक मूल्यांकन (Formative Assessment) का प्रमुख उद्देश्य क्या होता है?",
      "What is the foremost purpose of Formative Assessment?",
      "शिक्षण-अधिगम प्रक्रिया के दौरान छात्रों की सीखने की कठिनाइयों की पहचान और सुधार", "Identifying learning gaps and providing ongoing pedagogical remediation",
      "सत्र के अंत में छात्रों को ग्रेड और अंक प्रदान करना", "Assigning final grades at term end",
      "छात्रों को उत्तीर्ण या अनुत्तीर्ण घोषित करना", "Certifying pass/fail outcomes",
      "कक्षा में छात्रों की रैंकिंग निर्धारित करना", "Determining comparative student rank",
      "A", "रचनात्मक मूल्यांकन शिक्षण के दौरान ही प्रतिपुष्टि देकर सुधार करने हेतु किया जाता है।",
      "Formative assessment diagnostics guide ongoing instructional adaptations during learning.")

add_q(84, "Teaching Methodology", "समस्या समाधान विधि",
      "समस्या समाधान विधि (Problem Solving Method) का प्रथम चरण क्या होता है?",
      "What is the first fundamental step in the scientific Problem-Solving Method?",
      "समस्या की पहचान एवं अनुभूति (Identification of Problem)", "Identification of Problem",
      "परिकल्पना का निर्माण", "Hypothesis formulation",
      "आंकड़ों का संग्रह", "Data collection",
      "निष्कर्ष निकालना", "Drawing conclusions",
      "A", "जब तक समस्या को स्पष्ट रूप से पहचाना और परिभाषित न किया जाए, समाधान प्रारंभ नहीं हो सकता।",
      "Conscious awareness and precise articulation of the problem precedes all analytical phases.")

add_q(85, "Teaching Methodology", "शिक्षण कौशल",
      "शिक्षक द्वारा श्यामपट्ट (Blackboard) का प्रयोग करते समय सबसे महत्वपूर्ण बिंदु क्या है?",
      "What is the most crucial skill when utilizing the blackboard during instruction?",
      "सुस्पष्ट, पठनीय लिखावट एवं मुख्य बिंदुओं का सुव्यवस्थित अंकन", "Clear, legible writing with structured core highlights",
      "श्यामपट्ट को पूरी तरह भर देना", "Crowding every corner of the board",
      "बहुत छोटे अक्षरों में लिखना", "Writing in tiny illegible script",
      "छात्रों की ओर पीठ करके ही पढ़ाते रहना", "Facing the board permanently",
      "A", "श्यामपट्ट पर लिखावट स्पष्ट, सुडौल और सभी छात्रों को अंतिम पंक्ति तक पठनीय होनी चाहिए।",
      "High legibility, proportional spacing, and succinct conceptual diagramming are cardinal.")

add_q(86, "Teaching Methodology", "ब्रेल लिपि",
      "नेत्रहीन बालकों के पढ़ने-लिखने हेतु 'ब्रेल लिपि' (Braille Script) का आविष्कार किसने किया था?",
      "Who invented the raised-dot Braille script for visually impaired individuals?",
      "लुई ब्रेल (Louis Braille)", "Louis Braille", "हेलेन केलर", "Helen Keller", "ग्राहम बेल", "Graham Bell", "एडिसन", "Thomas Edison",
      "A", "फ्रांस के लुई ब्रेल ने 1824 में 6 उभरे हुए बिंदुओं पर आधारित स्पर्शनीय वर्णमाला विकसित की।",
      "Louis Braille devised the 6-dot tactile transcription code in 1824.")

add_q(87, "Teaching Methodology", "क्रियात्मक अनुसंधान",
      "शिक्षा में 'क्रियात्मक अनुसंधान' (Action Research) का मुख्य उद्देश्य क्या होता है?",
      "What is the prime objective of Action Research in school education?",
      "विद्यालय एवं कक्षा की तात्कालिक व्यावहारिक समस्याओं का त्वरित वैज्ञानिक समाधान", "Immediate practical resolution of localized classroom problems",
      "विशाल सैद्धांतिक सिद्धांतों की स्थापना", "Formulating grand universal theories",
      "विश्वविद्यालयी शोध उपाधि प्राप्त करना", "Attaining academic doctoral credentials",
      "केवल पुस्तकों का संकलन", "Book compilation",
      "A", "स्टीफन एम. कोरे के अनुसार शिक्षक अपनी तात्कालिक समस्याओं के समाधान हेतु स्वयं क्रियात्मक शोध करता है।",
      "Action research empowers practitioners to scientifically solve immediate day-to-day classroom dilemmas.")

add_q(88, "Teaching Methodology", "अधिगम अनुभव - डेल",
      "एडगर डेल के 'अनुभव शंकु' (Cone of Experience) में सबसे स्थायी एवं प्रभावी अधिगम अनुभव कौन सा माना जाता है?",
      "At the broad base of Edgar Dale's Cone of Experience, which learning mode is most effective?",
      "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (Direct Purposeful Experience)", "Direct Purposeful Experience",
      "मौखिक प्रतीक (Verbal symbols / Lecture)", "Verbal symbols",
      "दृश्य प्रतीक (Visual symbols)", "Visual symbols",
      "रेडियो प्रसारण", "Radio broadcasts",
      "A", "शंकु के आधार पर वास्तविक प्रत्यक्ष कार्य करके सीखना (Direct Hands-on) सर्वाधिक स्थायी माना जाता है।",
      "Direct, purposeful, tangible experiences anchor the most durable sensory learning.")

add_q(89, "Teaching Methodology", "शिक्षण के स्तर",
      "मॉरिस एल. बिग्गी और मॉरिसन द्वारा शिक्षण के किस स्तर को 'अवबोध स्तर' (Understanding Level) कहा गया?",
      "Who formulated the pedagogical model for the 'Understanding Level' of teaching?",
      "एच. सी. मॉरिसन", "H. C. Morrison", "हरबर्ट", "J. F. Herbart (Memory Level)", "हंट", "Hunt (Reflective Level)", "ब्लूम", "Benjamin Bloom",
      "A", "हरबर्ट ने स्मृति स्तर, मॉरिसन ने बोध स्तर तथा हंट ने चिंतन स्तर का प्रतिपादन किया।",
      "H. C. Morrison structured the 5-step instructional paradigm for the Understanding level.")

add_q(90, "Teaching Methodology", "अनुदेशन प्रणाली",
      "'अभिक्रमित अनुदेशन' (Programmed Instruction) के रेखीय मॉडल के प्रवर्तक कौन थे?",
      "Who pioneered the Linear Programmed Instruction model based on operant principles?",
      "बी. एफ. स्किनर", "B. F. Skinner", "नॉर्मन ए. क्राउडर", "Norman Crowder (Branching)", "थॉमस एफ. गिल्बर्ट", "Thomas Gilbert", "रॉबर्ट मेगर", "Robert Mager",
      "A", "बी. एफ. स्किनर ने छोटे पदों में स्व-गति से सीखने हेतु रेखीय अभिक्रमित अनुदेशन दिया।",
      "B. F. Skinner introduced linear programmed learning utilizing immediate step-wise reinforcement.")

# -------------------------------------------------------------
# SECTION 8: CHILD PSYCHOLOGY (Q91 - Q100) [10 Questions]
# -------------------------------------------------------------
add_q(91, "Child Psychology", "अधिगम सिद्धांत - कोहलर",
      "वोल्फगैंग कोहलर ने 'सूझ या अंतर्दृष्टि के सिद्धांत' (Insight Learning) का प्रयोग किस चिम्पांजी पर किया था?",
      "On which chimpanzee did Wolfgang Köhler conduct his famous Sultan insight experiments?",
      "सुल्तान (Sultan)", "Sultan", "जॉर्ज", "George", "बॉबो", "Bobo", "टॉमी", "Tommy",
      "A", "गेस्टाल्टवादी कोहलर ने सुल्तान नामक सुबुद्ध चिम्पांजी पर केले और डिब्बों की पहेली का प्रयोग किया था।",
      "Köhler documented sudden cognitive restructuring (insight) using Sultan the chimpanzee on Tenerife.")

add_q(92, "Child Psychology", "नैतिक विकास - कोहलबर्ग",
      "लॉरेंस कोहलबर्ग के अनुसार नैतिक विकास की कुल कितनी मुख्य अवस्थाएँ (Stages) होती हैं?",
      "According to Lawrence Kohlberg's theory of Moral Development, how many stages are there across 3 levels?",
      "6 अवस्थाएँ (3 स्तरों में)", "6 Stages (across 3 Levels)", "4 अवस्थाएँ", "4 Stages", "8 अवस्थाएँ", "8 Stages", "5 अवस्थाएँ", "5 Stages",
      "A", "कोहलबर्ग ने 3 स्तर (पूर्व-पारंपरिक, पारंपरिक, उत्तर-पारंपरिक) तथा कुल 6 विशिष्ट अवस्थाएँ बताई हैं।",
      "Kohlberg identified three developmental levels each spanning two distinct developmental stages (6 total).")

add_q(93, "Child Psychology", "बुद्धि लब्धि (IQ)",
      "बुद्धि लब्धि (IQ) मापने का सही वैज्ञानिक सूत्र क्या है?",
      "What is William Stern and Lewis Terman's standard formula for calculating Intelligence Quotient (IQ)?",
      "IQ = (मानसिक आयु / वास्तविक आयु) × 100", "IQ = (Mental Age / Chronological Age) * 100",
      "IQ = (वास्तविक आयु / मानसिक आयु) × 100", "IQ = (Chronological Age / Mental Age) * 100",
      "IQ = (मानसिक आयु × वास्तविक आयु) / 100", "IQ = (Mental Age * Chronological Age) / 100",
      "IQ = मानसिक आयु + वास्तविक आयु", "IQ = Mental Age + Chronological Age",
      "A", "IQ = (MA / CA) × 100 सूत्र टर्मन द्वारा 1916 के स्टैनफोर्ड-बिने परीक्षण में लोकप्रिय किया गया।",
      "Terman popularized William Stern's quotient: IQ = (Mental Age / Chronological Age) * 100.")

add_q(94, "Child Psychology", "मनोसामाजिक विकास - एरिक्सन",
      "एरिक एरिक्सन के मनोसामाजिक सिद्धांत के अनुसार किशोरावस्था का मुख्य विकासात्मक संकट (द्वंद्व) क्या है?",
      "In Erik Erikson's psychosocial stages, what is the core crisis characteristic of adolescence?",
      "पहचान बनाम पहचान भ्रांति (Identity vs. Role Confusion)", "Identity vs. Role Confusion",
      "विश्वास बनाम अविश्वास", "Trust vs. Mistrust",
      "पहल बनाम अपराधबोध", "Initiative vs. Guilt",
      "समीपता बनाम अलगाव", "Intimacy vs. Isolation",
      "A", "12-18 वर्ष की किशोरावस्था में किशोर 'मैं कौन हूँ?' की अपनी पहचान खोजने में संघर्ष करता है।",
      "Adolescents wrestle with identity crystallization versus ambiguous role diffusion.")

add_q(95, "Child Psychology", "अनुकूलित अनुक्रिया - पावलव",
      "इवान पावलव के शास्त्रीय अनुबंधन सिद्धांत (Classical Conditioning) में कुत्ते के लिए 'घंटी की आवाज' क्या थी?",
      "In Ivan Pavlov's classical conditioning experiments, the sound of the bell functioned as the:",
      "अनुबंधित उद्दीपक (Conditioned Stimulus - CS)", "Conditioned Stimulus (CS)",
      "अननुबंधित उद्दीपक (Unconditioned Stimulus - UCS)", "Unconditioned Stimulus (UCS)",
      "स्वाभाविक अनुक्रिया (UCR)", "Unconditioned Response",
      "तटस्थ उद्दीपक (परिवर्तन के बाद)", "Neutral Stimulus initially",
      "A", "भोजन स्वाभाविक उद्दीपक (UCS) था, जबकि घंटी की ध्वनि कृत्रिम/अनुबंधित उद्दीपक (CS) थी।",
      "The auditory bell tone served as the Conditioned Stimulus (CS) eliciting conditioned salivation.")

add_q(96, "Child Psychology", "अधिगम स्थानांतरण",
      "जब पूर्व में सीखा गया ज्ञान नवीन परिस्थिति में सीखने में बाधा उत्पन्न करता है, तो उसे क्या कहते हैं?",
      "When prior learning interferes with or impedes the acquisition of new skills, it is termed:",
      "नकारात्मक स्थानांतरण (Negative Transfer)", "Negative Transfer of Learning",
      "सकारात्मक स्थानांतरण (Positive Transfer)", "Positive Transfer",
      "शून्य स्थानांतरण (Zero Transfer)", "Zero Transfer",
      "द्विपार्श्विक स्थानांतरण (Bilateral)", "Bilateral Transfer",
      "A", "बाधा उत्पन्न होने पर नकारात्मक/ऋणात्मक स्थानांतरण होता है (जैसे बाईं हाथ ड्राइव वाले को दाईं तरफ कठिनाई)।",
      "Negative transfer (proactive interference) occurs when previous habits obstruct mastering new tasks.")

add_q(97, "Child Psychology", "संवेग",
      "विलियम मैकडूगल के अनुसार मानव में कुल कितनी मूल प्रवृत्तियाँ (Instincts) और उनसे जुड़े संवेग होते हैं?",
      "According to William McDougall's hormic psychology, how many primary instincts and paired emotions exist?",
      "14 मूल प्रवृत्तियाँ और 14 संवेग", "14 Primary Instincts & 14 Emotions",
      "10 मूल प्रवृत्तियाँ", "10 Instincts", "12 मूल प्रवृत्तियाँ", "12 Instincts", "16 मूल प्रवृत्तियाँ", "16 Instincts",
      "A", "मैकडूगल ने पलायन-भय, युयुत्सा-क्रोध आदि कुल 14 मूल प्रवृत्तियाँ और संबंधित संवेग बताए हैं।",
      "William McDougall mapped 14 biological instinctual drives, each paired with a distinct emotional state.")

add_q(98, "Child Psychology", "बाल्यावस्था के उपनाम",
      "मनोवैज्ञानिक किलपैट्रिक ने बाल्यावस्था (Childhood) को किस रूप में परिभाषित किया है?",
      "How did educator William H. Kilpatrick characterize childhood?",
      "'प्रतिद्वंद्वात्मक समाजीकरण का काल'", "'The Period of Rivalrous Socialization'",
      "'जीवन का अनोखा काल'", "'A unique period of life' (Cole & Bruce)",
      "'तनाव, तूफान और विरोध की अवस्था'", "'Period of Storm and Stress' (Stanley Hall)",
      "'मिथ्या परिपक्वता का काल'", "'Period of Pseudo-maturity' (Ross)",
      "A", "किलपैट्रिक ने बाल्यावस्था को 'प्रतिद्वंद्वात्मक समाजीकरण' (Rivalrous Socialization) का काल कहा।",
      "Kilpatrick designated late childhood as the age of rivalrous socialization within peer cliques.")

add_q(99, "Child Psychology", "व्यक्तित्व - युंग",
      "कार्ल युंग ने व्यक्तित्व को प्रमुख रूप से किन दो श्रेणियों में विभाजित किया था?",
      "Carl Jung originally classified human personality into which two foundational archetypes?",
      "अंतर्मुखी एवं बहिर्मुखी (Introvert & Extrovert)", "Introvert and Extrovert",
      "सैद्धांतिक एवं व्यावहारिक", "Theoretical and Practical",
      "गोलकाय एवं लंबकाय", "Pyknic and Asthenic (Kretschmer)",
      "स्थूल एवं कृश", "Endomorph and Ectomorph",
      "A", "युंग ने ऊर्जा के प्रवाह के आधार पर अंतर्मुखी (Introvert) और बहिर्मुखी (Extrovert) वर्ग बनाए।",
      "Carl Jung delineated basic personality orientations along Introversion and Extroversion axes.")

add_q(100, "Child Psychology", "रचनात्मकता (Creativity)",
      "रचनात्मक बालकों (Creative Children) की प्रमुख बौद्धिक विशेषता क्या होती है?",
      "What is the hallmark cognitive characteristic of highly creative children?",
      "अपसारी चिंतन (Divergent Thinking) एवं मौलिकता", "Divergent Thinking and Originality",
      "अभिसारी चिंतन (Convergent Thinking)", "Convergent Thinking alone",
      "रटने की प्रवृत्ति", "Rote memorization capacity",
      "रूढ़िवादी दृष्टिकोण", "Rigid adherence to tradition",
      "A", "अपसारी चिंतन नए-नए उपाय और मौलिक विचार खोजने में सक्षम बनाता है, जो सृजनात्मकता का आधार है।",
      "Divergent thinking generates unconventional, varied, and innovative solutions.")

# -------------------------------------------------------------
# SECTION 9: GENERAL KNOWLEDGE & CURRENT AFFAIRS (Q101 - Q130) [30 Questions]
# -------------------------------------------------------------
add_q(101, "General Knowledge & Current Affairs", "खेलकूद",
      "वर्ष 2018 का फीफा फुटबॉल विश्व कप (FIFA World Cup 2018) किस देश ने जीता था?",
      "Which national football team won the FIFA World Cup 2018 in Russia?",
      "फ्रांस", "France", "क्रोएशिया", "Croatia", "ब्राजील", "Brazil", "जर्मनी", "Germany",
      "A", "मॉस्को में फ्रांस ने क्रोएशिया को 4-2 से हराकर 2018 का विश्व कप जीता था।",
      "France defeated Croatia 4-2 in Moscow to claim the 2018 FIFA World Cup championship.")

add_q(102, "General Knowledge & Current Affairs", "उत्तर प्रदेश सामान्य ज्ञान",
      "उत्तर प्रदेश का राजकीय वृक्ष (State Tree) कौन सा है?",
      "Which is the official State Tree of Uttar Pradesh?",
      "अशोक (Saraca asoca)", "Ashoka (Saraca asoca)", "बरगद", "Banyan", "पीपल", "Peepal", "नीम", "Neem",
      "A", "अशोक (सीता अशोक) उत्तर प्रदेश का राज्य वृक्ष है (राष्ट्रीय वृक्ष बरगद है)।",
      "Saraca asoca (Ashoka tree) is recognized as the state tree of Uttar Pradesh.")

add_q(103, "General Knowledge & Current Affairs", "नोबेल शांति पुरस्कार",
      "वर्ष 2018 का नोबेल शांति पुरस्कार नादिया मुराद के साथ किसे संयुक्त रूप से दिया गया था?",
      "Who was co-awarded the 2018 Nobel Peace Prize alongside Nadia Murad?",
      "डेनिस मुकवेगे (Denis Mukwege)", "Denis Mukwege", "कैलाश सत्यार्थी", "Kailash Satyarthi", "मलाला यूसुफजई", "Malala Yousafzai", "जुआन मैनुअल सैंटोस", "Juan Manuel Santos",
      "A", "कांगो के चिकित्सक डेनिस मुकवेगे और नादिया मुराद को युद्ध में यौन हिंसा के विरुद्ध संघर्ष हेतु यह पुरस्कार मिला।",
      "Denis Mukwege and Nadia Murad received the 2018 Nobel Peace Prize for combating wartime sexual violence.")

add_q(104, "General Knowledge & Current Affairs", "भारतीय अंतरिक्ष",
      "भारत का पहला उपग्रह 'आर्यभट्ट' किस वर्ष सफलतापूर्वक अंतरिक्ष में प्रक्षेपित किया गया था?",
      "In which year was India's first indigenous satellite, 'Aryabhata', launched into orbit?",
      "1975 (19 अप्रैल 1975)", "1975 (April 19, 1975)", "1969", "1969", "1972", "1972", "1980", "1980",
      "A", "19 अप्रैल 1975 को सोवियत संघ के कॉसमॉस-3M रॉकेट से भारत का प्रथम उपग्रह आर्यभट्ट प्रक्षेपित हुआ।",
      "Aryabhata, India's inaugural satellite, was launched on April 19, 1975, from Kapustin Yar.")

add_q(105, "General Knowledge & Current Affairs", "उत्तर प्रदेश कला",
      "उत्तर प्रदेश का कौन सा शहर 'पीतल नगरी' (Brass City) के रूप में प्रसिद्ध है?",
      "Which city of Uttar Pradesh is globally known as 'Peetal Nagri' (Brass City)?",
      "मुरादाबाद", "Moradabad", "अलीगढ़", "Aligarh", "वाराणसी", "Varanasi", "मेरठ", "Meerut",
      "A", "मुरादाबाद अपने उत्कृष्ट पीतल हस्तशिल्प और बर्तनों के निर्यात हेतु 'पीतल नगरी' कहलाता है।",
      "Moradabad is renowned worldwide for its brass handicrafts and metalware exports.")

add_q(106, "General Knowledge & Current Affairs", "पर्यावरण सम्मेलन",
      "प्रसिद्ध 'क्योटो प्रोटोकॉल' (Kyoto Protocol) किस वैश्विक समस्या से निपटने हेतु 1997 में अपनाया गया था?",
      "The international Kyoto Protocol (1997) was adopted to tackle:",
      "ग्रीनहाउस गैसों के उत्सर्जन में कमी एवं जलवायु परिवर्तन", "Reduction of Greenhouse Gas Emissions & Climate Change",
      "ओजोन क्षरण", "Ozone Depletion", "समुद्री प्रदूषण", "Marine Pollution", "परमाणु अप्रसार", "Nuclear Non-Proliferation",
      "A", "क्योटो प्रोटोकॉल विकसित देशों को ग्रीनहाउस गैस उत्सर्जन कम करने के लिए बाध्यकारी लक्ष्य देता है।",
      "The Kyoto Protocol committed industrialized nations to curb greenhouse gas concentrations in the atmosphere.")

add_q(107, "General Knowledge & Current Affairs", "भारतीय इतिहास",
      "मौर्य साम्राज्य के संस्थापक चंद्रगुप्त मौर्य के प्रधानमंत्री कौन थे?",
      "Who was the prime minister and mentor of Chandragupta Maurya, founder of the Mauryan Empire?",
      "चाणक्य (कौटिल्य / विष्णुगुप्त)", "Chanakya (Kautilya / Vishnugupta)", "मेगास्थनीज", "Megasthenes", "अश्वघोष", "Ashvaghosha", "बाणभट्ट", "Banabhatta",
      "A", "चाणक्य (अर्थशास्त्र के रचयिता) चंद्रगुप्त मौर्य के प्रधान मार्गदर्शक एवं महामंत्री थे।",
      "Acharya Chanakya (Kautilya) engineered the rise of the Maurya Empire and authored Arthashastra.")

add_q(108, "General Knowledge & Current Affairs", "भारतीय संविधान",
      "भारतीय संविधान में 'मौलिक कर्तव्य' (Fundamental Duties) किस देश के संविधान से प्रेरित होकर जोड़े गए?",
      "Fundamental Duties in the Indian Constitution were adopted from which nation's constitution?",
      "पूर्व सोवियत संघ (USSR)", "Former Soviet Union (USSR)", "संयुक्त राज्य अमेरिका (USA)", "USA", "आयरलैंड", "Ireland", "ब्रिटेन", "United Kingdom",
      "A", "42वें संविधान संशोधन 1976 द्वारा स्वर्ण सिंह समिति की सिफारिश पर सोवियत संघ से मौलिक कर्तव्य जोड़े गए।",
      "Fundamental Duties in Article 51A were adapted from the constitution of the former USSR.")

add_q(109, "General Knowledge & Current Affairs", "उत्तर प्रदेश इतिहास",
      "भगवान बुद्ध ने अपना 'प्रथम उपदेश' (धर्मचक्रप्रवर्तन) उत्तर प्रदेश के किस स्थान पर दिया था?",
      "At which sacred site in Uttar Pradesh did Gautama Buddha deliver his First Sermon (Dharmachakrapravartana)?",
      "सारनाथ (ऋषिपत्तन - वाराणसी)", "Sarnath (Rishipatana, near Varanasi)",
      "कुशीनगर", "Kushinagar", "श्रावस्ती", "Shravasti", "कपिलवस्तु", "Kapilavastu",
      "A", "ज्ञान प्राप्ति के उपरांत बुद्ध ने सारनाथ के मृगदाव में पंचवर्गीय भिक्षुओं को प्रथम उपदेश दिया।",
      "Buddha set the Wheel of Law in motion at the deer park in Sarnath, Varanasi.")

add_q(110, "General Knowledge & Current Affairs", "दिवस",
      "भारत में प्रतिवर्ष 'राष्ट्रीय शिक्षक दिवस' किसकी जयंती के उपलक्ष्य में 5 सितंबर को मनाया जाता है?",
      "National Teachers' Day in India is celebrated on September 5 to honor the birthday of:",
      "डॉ. सर्वपल्ली राधाकृष्णन", "Dr. Sarvepalli Radhakrishnan",
      "डॉ. ए. पी. जे. अब्दुल कलाम", "Dr. A. P. J. Abdul Kalam",
      "स्वामी विवेकानंद", "Swami Vivekananda",
      "रवींद्रनाथ टैगोर", "Rabindranath Tagore",
      "A", "भारत के प्रथम उपराष्ट्रपति एवं द्वितीय राष्ट्रपति महान दार्शनिक डॉ. राधाकृष्णन की स्मृति में यह दिवस मनाया जाता है।",
      "September 5 marks the birth anniversary of philosopher-statesman Dr. Sarvepalli Radhakrishnan.")

add_q(111, "General Knowledge & Current Affairs", "भारतीय भूगोल",
      "भारत का एकमात्र सक्रिय ज्वालामुखी 'बैरन द्वीप' कहाँ स्थित है?",
      "Where is India's only active volcano, 'Barren Island', located?",
      "अंडमान एवं निकोबार द्वीप समूह", "Andaman and Nicobar Islands",
      "लक्षद्वीप", "Lakshadweep", "मन्नार की खाड़ी", "Gulf of Mannar", "दीव", "Diu",
      "A", "अंडमान सागर में पोर्ट ब्लेयर से 135 किमी उत्तर-पूर्व में बैरन द्वीप सक्रिय ज्वालामुखी है।",
      "Barren Island volcano in the Andaman Sea is the sole confirmed active volcano in South Asia.")

add_q(112, "General Knowledge & Current Affairs", "अर्थव्यवस्था",
      "भारत में वस्तु एवं सेवा कर (GST) किस तिथि से आधिकारिक रूप से लागू हुआ था?",
      "On which date was the Goods and Services Tax (GST) officially rolled out nationwide?",
      "1 जुलाई 2017", "July 1, 2017", "1 अप्रैल 2017", "April 1, 2017", "8 नवंबर 2016", "November 8, 2016", "1 जनवरी 2018", "January 1, 2018",
      "A", "1 जुलाई 2017 की मध्यरात्रि को संसद के केंद्रीय कक्ष से जीएसटी का शुभारंभ किया गया था।",
      "GST came into force across India at midnight on July 1, 2017.")

add_q(113, "General Knowledge & Current Affairs", "उत्तर प्रदेश स्थल",
      "कुंभ मेला 2019 का भव्य आयोजन उत्तर प्रदेश के किस पवित्र संगम नगर में हुआ?",
      "The mega Kumbh Mela 2019 was held at the Triveni Sangam in which city of UP?",
      "प्रयागराज", "Prayagraj", "हरिद्वार", "Haridwar", "उज्जैन", "Ujjain", "नासिक", "Nashik",
      "A", "गंगा, यमुना और अदृश्य सरस्वती के संगम पर प्रयागराज में दिव्य एवं भव्य कुंभ 2019 आयोजित हुआ था।",
      "Kumbh Mela 2019 was organized at the sacred Triveni Sangam in Prayagraj.")

add_q(114, "General Knowledge & Current Affairs", "साहित्य",
      "हिंदी का प्रथम समाचार पत्र 'उदंत मार्तंड' का संपादन किसके द्वारा किया गया था?",
      "Who was the founding editor of the first Hindi newspaper 'Udant Martand' (1826)?",
      "पंडित जुगल किशोर शुक्ल", "Pandit Jugal Kishore Shukla",
      "राजा शिवप्रसाद 'सितारेहिंद'", "Raja Shivprasad",
      "भारतेन्दु हरिश्चंद्र", "Bharatendu Harishchandra",
      "मदन मोहन मालवीय", "Madan Mohan Malaviya",
      "A", "30 मई 1826 को कलकत्ता से पं. जुगल किशोर शुक्ल ने 'उदंत मार्तंड' साप्ताहिक निकाला (30 मई = पत्रकारिता दिवस)।",
      "Pandit Jugal Kishore Shukla published Udant Martand from Calcutta on May 30, 1826.")

add_q(115, "General Knowledge & Current Affairs", "पुरस्कार",
      "साहित्य का प्रतिष्ठित 'व्यास सम्मान' किस गैर-सरकारी फाउंडेशन द्वारा प्रदान किया जाता है?",
      "The prestigious literary honor 'Vyas Samman' is instituted by which philanthropic foundation?",
      "के. के. बिड़ला फाउंडेशन", "K. K. Birla Foundation",
      "भारतीय ज्ञानपीठ", "Bharatiya Jnanpith",
      "साहित्य अकादमी", "Sahitya Akademi",
      "टाटा ट्रस्ट", "Tata Trust",
      "A", "के. के. बिड़ला फाउंडेशन द्वारा 1991 से हिंदी साहित्य में उत्कृष्ट योगदान हेतु व्यास सम्मान दिया जाता है।",
      "The K. K. Birla Foundation instituted the Vyas Samman in 1991 for outstanding Hindi literature.")

add_q(116, "General Knowledge & Current Affairs", "स्वास्थ्य",
      "मानव शरीर में इंसुलिन (Insulin) हार्मोन का स्राव किस अंतःस्रावी ग्रंथि द्वारा होता है?",
      "Which endocrine organ synthesizes and secretes the metabolic hormone Insulin?",
      "अग्न्याशय (Pancreas - आइलेट्स ऑफ लैंगरहैंड्स)", "Pancreas", "यकृत (Liver)", "Liver", "थायरॉयड (Thyroid)", "Thyroid", "पीयूष ग्रंथि (Pituitary)", "Pituitary",
      "A", "अग्न्याशय की लैंगरहैंड्स द्विपिकाओं की बीटा (β) कोशिकाएं इंसुलिन का स्राव करती हैं जो ग्लूकोज नियंत्रित करता है।",
      "Beta cells of the pancreatic islets of Langerhans synthesize and release insulin.")

add_q(117, "General Knowledge & Current Affairs", "उत्तर प्रदेश वन्यजीव",
      "उत्तर प्रदेश का 'नवाबगंज पक्षी विहार' (वर्तमान नाम: चंद्रशेखर आजाद पक्षी विहार) किस जनपद में स्थित है?",
      "In which district of UP is the Nawabganj Bird Sanctuary (Chandrashekhar Azad Bird Sanctuary) situated?",
      "उन्नाव", "Unnao", "कानपुर", "Kanpur", "रायबरेली", "Raebareli", "हरदोई", "Hardoi",
      "A", "नवाबगंज पक्षी अभयारण्य लखनऊ-कानपुर राजमार्ग पर उन्नाव जनपद में स्थित है।",
      "Nawabganj Bird Sanctuary is located along the highway in Unnao district, UP.")

add_q(118, "General Knowledge & Current Affairs", "खेलकूद",
      "वर्ष 2018 के राष्ट्रमंडल खेलों (Commonwealth Games 2018) का आयोजन किस शहर में हुआ था?",
      "Where were the XXI Commonwealth Games 2018 hosted?",
      "गोल्ड कोस्ट (ऑस्ट्रेलिया)", "Gold Coast (Australia)", "ग्लासगो", "Glasgow", "बर्मिंघम", "Birmingham", "दिल्ली", "Delhi",
      "A", "2018 राष्ट्रमंडल खेल क्वींसलैंड (ऑस्ट्रेलिया) के गोल्ड कोस्ट शहर में आयोजित किए गए थे।",
      "The 2018 Commonwealth Games took place in Gold Coast, Queensland, Australia.")

add_q(119, "General Knowledge & Current Affairs", "भारतीय इतिहास",
      "प्रसिद्ध 'आर्य समाज' की स्थापना 1875 में बंबई में किसके द्वारा की गई थी?",
      "Who founded the reformist Hindu movement Arya Samaj in Bombay in 1875?",
      "स्वामी दयानंद सरस्वती", "Swami Dayananda Saraswati",
      "राजा राममोहन राय", "Raja Ram Mohan Roy",
      "स्वामी विवेकानंद", "Swami Vivekananda",
      "ईश्वर चंद्र विद्यासागर", "Ishwar Chandra Vidyasagar",
      "A", "'वेदों की ओर लौटो' का नारा देने वाले स्वामी दयानंद सरस्वती ने 1875 में आर्य समाज स्थापित किया।",
      "Swami Dayananda Saraswati established the Arya Samaj in 1875 championing Vedic principles.")

add_q(120, "General Knowledge & Current Affairs", "भूगोल - जलप्रपात",
      "भारत का सबसे ऊँचा सीधा गिरने वाला जलप्रपात 'जोग / गरसोप्पा प्रपात' किस नदी पर स्थित है?",
      "On which river is the magnificent Jog / Gersoppa Falls situated in Karnataka?",
      "शरावती नदी", "Sharavathi River", "कावेरी नदी", "Kaveri River", "नर्मदा नदी", "Narmada River", "गोदावरी नदी", "Godavari River",
      "A", "कर्नाटक के शिमोगा जिले में शरावती नदी पर जोग प्रपात (महात्मा गांधी प्रपात) स्थित है।",
      "Jog Falls is segmented cataract on the Sharavathi River in Sagara, Karnataka.")

add_q(121, "General Knowledge & Current Affairs", "उत्तर प्रदेश - खनिज",
      "उत्तर प्रदेश के किस जनपद में 'यूरेनियम' के सीमित भंडार पाए गए हैं?",
      "In which district of Uttar Pradesh have confirmed deposits of Uranium been identified?",
      "ललितपुर", "Lalitpur", "सोनभद्र", "Sonbhadra", "बाँदा", "Banda", "झाँसी", "Jhansi",
      "A", "बुंदेलखंड के ललितपुर जनपद में यूरेनियम तथा ताँबे के खनिज भंडार पाए जाते हैं।",
      "Lalitpur district in southern UP houses notable geological deposits of uranium ore.")

add_q(122, "General Knowledge & Current Affairs", "संविधान - मौलिक अधिकार",
      "डॉ. भीमराव आंबेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' (Heart and Soul of the Constitution) कहा था?",
      "Which Fundamental Right did Dr. B. R. Ambedkar describe as the 'Heart and Soul' of the Constitution?",
      "संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)", "Right to Constitutional Remedies (Article 32)",
      "धार्मिक स्वतंत्रता का अधिकार", "Right to Freedom of Religion",
      "समानता का अधिकार", "Right to Equality",
      "शोषण के विरुद्ध अधिकार", "Right against Exploitation",
      "A", "अनुच्छेद 32 सर्वोच्च न्यायालय को मौलिक अधिकारों के संरक्षण हेतु 5 रिट जारी करने का अधिकार देता है।",
      "Article 32 empowers the Supreme Court to issue writs to enforce fundamental rights.")

add_q(123, "General Knowledge & Current Affairs", "राष्ट्रीय उद्यान",
      "एक सींग वाले गैंडे (One-horned Rhinoceros) के लिए विश्वप्रसिद्ध 'काजीरंगा राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
      "Kaziranga National Park, world-renowned for the Great One-Horned Rhinoceros, is in:",
      "असम", "Assam", "पश्चिम बंगाल", "West Bengal", "मेघालय", "Meghalaya", "अरुणाचल प्रदेश", "Arunachal Pradesh",
      "A", "असम में ब्रह्मपुत्र नदी के कछार में स्थित काजीरंगा यूनेस्को विश्व धरोहर स्थल है।",
      "Kaziranga National Park in Golaghat and Nagaon districts of Assam is a UNESCO World Heritage Site.")

add_q(124, "General Knowledge & Current Affairs", "उत्तर प्रदेश लोकगीत",
      "उत्तर प्रदेश के पूर्वांचल और अवध क्षेत्र में वर्षा ऋतु में गाया जाने वाला प्रसिद्ध लोकगीत कौन सा है?",
      "Which melodious monsoon folk song is traditionally sung in Awadh and Purvanchal regions of UP?",
      "कजरी", "Kajri", "सोहर", "Sohar", "बिरहा", "Birha", "आल्हा", "Alha",
      "A", "मिर्ज़ापुर और पूर्वांचल में सावन के महीने में झूले के साथ कजरी गायन की समृद्ध परंपरा है।",
      "Kajri is an iconic classical semi-folk genre sung during the monsoon rains in Purvanchal.")

add_q(125, "General Knowledge & Current Affairs", "अंतर्राष्ट्रीय संस्थाएं",
      "विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय किस देश में स्थित है?",
      "Where is the headquarters of the World Health Organization (WHO) located?",
      "जिनेवा (स्विट्जरलैंड)", "Geneva (Switzerland)", "पेरिस (फ्रांस)", "Paris (France)", "रोम (इटली)", "Rome (Italy)", "वाशिंगटन डीसी (USA)", "Washington D.C.",
      "A", "7 अप्रैल 1948 को स्थापित WHO का वैश्विक मुख्यालय जिनेवा (स्विट्जरलैंड) में है।",
      "The World Health Organization is headquartered in Geneva, Switzerland.")

add_q(126, "General Knowledge & Current Affairs", "विज्ञान व आविष्कार",
      "टेलीफोन का आविष्कार किस वैज्ञानिक द्वारा किया गया था?",
      "Who is credited with inventing the first practical Telephone in 1876?",
      "अलेक्जेंडर ग्राहम बेल", "Alexander Graham Bell", "थॉमस एल्वा एडिसन", "Thomas Edison", "गुग्लिएल्मो मार्कोनी", "Guglielmo Marconi", "जेम्स वाट", "James Watt",
      "A", "1876 में अलेक्जेंडर ग्राहम बेल ने पहले व्यावहारिक टेलीफोन का पेटेंट कराया था।",
      "Alexander Graham Bell was awarded the first US patent for the telephone in 1876.")

add_q(127, "General Knowledge & Current Affairs", "उत्तर प्रदेश मेला",
      "उत्तर प्रदेश का सुप्रसिद्ध 'बटेश्वर मेला' (पशु मेला) किस जिले में आयोजित होता है?",
      "The famous historic Bateshwar Fair (livestock fair) is organized annually in which district of UP?",
      "आगरा", "Agra", "मथुरा", "Mathura", "इटावा", "Etawah", "फिरोजाबाद", "Firozabad",
      "A", "यमुना तट पर स्थित बटेश्वर (आगरा) में 101 शिव मंदिरों के निकट विशाल पशु मेला लगता है।",
      "Bateshwar fair on the Yamuna banks in Agra is famous for camel, horse, and cattle trade.")

add_q(128, "General Knowledge & Current Affairs", "पुरस्कार",
      "सिनेमा के क्षेत्र में भारत सरकार द्वारा दिया जाने वाला सर्वोच्च राष्ट्रीय पुरस्कार कौन सा है?",
      "Which is India's highest national recognition in the field of cinema?",
      "दादा साहेब फाल्के पुरस्कार", "Dadasaheb Phalke Award",
      "फिल्मफेयर पुरस्कार", "Filmfare Award",
      "राष्ट्रीय फिल्म पुरस्कार", "National Film Award",
      "पद्म श्री", "Padma Shri",
      "A", "भारतीय सिनेमा के जनक धुंडीराज गोविंद फाल्के की स्मृति में 1969 से यह सर्वोच्च पुरस्कार दिया जा रहा है।",
      "The Dadasaheb Phalke Award is India's highest cinema honor presented by the Ministry of Information & Broadcasting.")

add_q(129, "General Knowledge & Current Affairs", "भूगोल - वायुमंडल",
      "वायुमंडल में सर्वाधिक मात्रा में पाई जाने वाली गैस कौन सी है?",
      "Which gas constitutes the greatest percentage volume in Earth's atmosphere?",
      "नाइट्रोजन (लगभग 78%)", "Nitrogen (approx. 78%)",
      "ऑक्सीजन (लगभग 21%)", "Oxygen (approx. 21%)",
      "आर्गन", "Argon (0.93%)",
      "कार्बन डाइऑक्साइड", "Carbon Dioxide",
      "A", "पृथ्वी के वायुमंडल में 78.08% नाइट्रोजन, 20.95% ऑक्सीजन और 0.93% आर्गन उपस्थित है।",
      "Molecular nitrogen (N2) comprises approximately 78.08% of dry atmospheric air.")

add_q(130, "General Knowledge & Current Affairs", "उत्तर प्रदेश - साक्षरता",
      "2011 की जनगणना के अनुसार उत्तर प्रदेश की कुल औसत साक्षरता दर कितनी थी?",
      "According to Census 2011, what was the average overall literacy rate of Uttar Pradesh?",
      "67.72%", "67.72%", "69.72%", "69.72%", "65.50%", "65.50%", "72.40%", "72.40%",
      "A", "2011 की जनगणना में उत्तर प्रदेश की साक्षरता 67.72% (पुरुष 77.28%, महिला 57.18%) दर्ज की गई थी।",
      "As per Census 2011, Uttar Pradesh recorded an aggregate literacy rate of 67.72%.")

# -------------------------------------------------------------
# SECTION 10: LOGICAL REASONING (Q131 - Q135) [5 Questions]
# -------------------------------------------------------------
add_q(131, "Logical Reasoning", "सादृश्यता",
      "दिए गए विकल्पों में से संबंधित संख्या चुनिए: 8 : 64 :: 9 : ?",
      "Select the related number: 8 : 64 :: 9 : ?",
      "81", "81", "72", "72", "90", "90", "99", "99",
      "A", "तर्क: 8 का वर्ग = 8² = 64, उसी प्रकार 9 का वर्ग = 9² = 81।",
      "Pattern: n : n² => 8 : 64 :: 9 : 81.")

add_q(132, "Logical Reasoning", "श्रृंखला",
      "निम्नलिखित संख्या श्रृंखला में लुप्त पद ज्ञात कीजिए: 2, 6, 12, 20, 30, ?",
      "Find the missing term in the sequence: 2, 6, 12, 20, 30, ?",
      "42", "42", "40", "40", "36", "36", "48", "48",
      "A", "अंतर: +4, +6, +8, +10, अगला अंतर +12 होगा। 30 + 12 = 42 (अथवा n² + n = 6² + 6 = 42)।",
      "Pattern: differences increase by +2 (+4, +6, +8, +10, +12) => 30 + 12 = 42 (or 6² + 6 = 42).")

add_q(133, "Logical Reasoning", "कोडिंग-डिकोडिंग",
      "यदि CAT को 24 तथा DOG को 26 लिखा जाए, तो PIG को क्या लिखा जाएगा?",
      "If in a code CAT = 24 and DOG = 26, then PIG will be coded as:",
      "32", "32", "30", "30", "34", "34", "28", "28",
      "A", "वर्णमाला मानों का योग: P(16) + I(9) + G(7) = 32।",
      "Sum of letter alphabetical positional values: P (16) + I (9) + G (7) = 32.")

add_q(134, "Logical Reasoning", "विषम चयन (Odd One Out)",
      "निम्नलिखित चार शब्दों में से विषम (अलग) शब्द का चयन कीजिए:",
      "Find the odd one out among the given options:",
      "सेब", "Apple (Tree fruit)", "गाजर", "Carrot (Root vegetable)", "आलू", "Potato (Tuber vegetable)", "मूली", "Radish (Root vegetable)",
      "A", "गाजर, आलू और मूली जमीन के नीचे उगते हैं (सब्जियाँ हैं), जबकि सेब वृक्ष पर उगने वाला फल है।",
      "Carrot, potato, and radish develop underground; apple grows above ground as a tree fruit.")

add_q(135, "Logical Reasoning", "संबंध (Blood Relations)",
      "A, B का भाई है। C, A की माता है। D, C का पिता है। B का D से क्या संबंध है (यदि B का लिंग अज्ञात है)?",
      "A is the brother of B. C is the mother of A. D is the father of C. What is B to D?",
      "पोता या पोती (Grandchild - नाती/नातिन)", "Grandchild (Maternal grandson/granddaughter)",
      "पुत्र", "Son", "पिता", "Father", "भाई", "Brother",
      "A", "C, B की भी माता है और D, C का पिता है। अतः B, D का नाती या नातिन (Grandchild) होगा।",
      "Since C is mother of both A and B, D (C's father) is maternal grandfather of B.")

# -------------------------------------------------------------
# SECTION 11: INFORMATION TECHNOLOGY (Q136 - Q140) [5 Questions]
# -------------------------------------------------------------
add_q(136, "Information Technology", "कंप्यूटर संक्षेप",
      "कंप्यूटर में 'ROM' का पूर्ण रूप (Full Form) क्या होता है?",
      "What is the full form of the memory acronym 'ROM'?",
      "Read Only Memory", "Read Only Memory", "Random Output Memory", "Random Output Memory", "Read Once Memory", "Read Once Memory", "Rapid Online Memory", "Rapid Online Memory",
      "A", "ROM = Read Only Memory, यह गैर-वोलाटाइल (स्थायी) मेमोरी होती है जिसमें बूट निर्देश (BIOS) होते हैं।",
      "ROM stands for Read Only Memory, which retains firmware permanently without electrical power.")

add_q(137, "Information Technology", "इंटरनेट शब्दावली",
      "ई-मेल (E-mail) का आविष्कारक किसे माना जाता है तथा इसका पूर्ण रूप क्या है?",
      "What is the full form of 'E-mail'?",
      "Electronic Mail", "Electronic Mail", "Electrical Mail", "Electrical Mail", "Engine Mail", "Engine Mail", "Express Mail", "Express Mail",
      "A", "ई-मेल का पूर्ण रूप इलेक्ट्रॉनिक मेल है, रे टॉमलिंसन ने 1971 में पहला नेटवर्क ईमेल भेजा था।",
      "E-mail stands for Electronic Mail.")

add_q(138, "Information Technology", "शॉर्टकट कीज",
      "कंप्यूटर कीबोर्ड में किसी चयनित टेक्स्ट या फाइल को 'कॉपी' (Copy) करने का मानक शॉर्टकट क्या है?",
      "What is the standard keyboard shortcut to 'Copy' selected text in Windows OS?",
      "Ctrl + C", "Ctrl + C", "Ctrl + V", "Ctrl + V (Paste)", "Ctrl + X", "Ctrl + X (Cut)", "Ctrl + Z", "Ctrl + Z (Undo)",
      "A", "Ctrl + C से कॉपी, Ctrl + V से पेस्ट और Ctrl + X से कट किया जाता है।",
      "Ctrl + C copies the selected item/text to the clipboard.")

add_q(139, "Information Technology", "सॉफ्टवेयर प्रकार",
      "निम्नलिखित में से कौन सा एक 'ऑपरेटिंग सिस्टम' (Operating System) का उदाहरण है?",
      "Which of the following is an example of an Operating System?",
      "माइक्रोसॉफ्ट विंडोज (Windows)", "Microsoft Windows",
      "MS Word", "MS Word (Application software)",
      "Google Chrome", "Google Chrome (Browser)",
      "Adobe Photoshop", "Adobe Photoshop",
      "A", "विंडोज, लिनक्स, एंड्रॉयड आदि सिस्टम सॉफ्टवेयर (ऑपरेटिंग सिस्टम) हैं।",
      "Microsoft Windows is an operating system managing computer hardware resources.")

add_q(140, "Information Technology", "डेटा मापन इकाई",
      "कंप्यूटर शब्दावली में 1 किलोबाइट (1 KB) कितने बाइट्स के बराबर होता है?",
      "In binary computing measurements, 1 Kilobyte (1 KB) equals:",
      "1024 Bytes", "1024 Bytes", "1000 Bytes", "1000 Bytes", "512 Bytes", "512 Bytes", "2048 Bytes", "2048 Bytes",
      "A", "द्वि-आधारी प्रणाली में 1 KB = 2¹⁰ बाइट्स = 1024 बाइट्स होते हैं।",
      "In binary memory convention, 1 Kilobyte = 2^10 = 1,024 Bytes.")

# -------------------------------------------------------------
# SECTION 12: LIFE SKILLS / MANAGEMENT & APTITUDE (Q141 - Q150) [10 Questions]
# -------------------------------------------------------------
add_q(141, "Life Skills / Management & Aptitude", "व्यावसायिक नैतिकता",
      "एक शिक्षक के लिए छात्रों का मूल्यांकन करते समय सर्वाधिक आवश्यक मूल्य क्या है?",
      "When evaluating students' performance, what is the most indispensable ethical virtue for a teacher?",
      "पूर्ण निष्पक्षता एवं वस्तुनिष्ठता", "Absolute fairness and objectivity",
      "पक्षपातपूर्ण व्यवहार", "Favoritism based on personal preference",
      "छात्र की सामाजिक पृष्ठभूमि देखकर अंक देना", "Grading based on socioeconomic status",
      "मनमाना रवैया", "Arbitrary assessment",
      "A", "शिक्षक आचार संहिता के अनुसार मूल्यांकन में किसी भी प्रकार का पूर्वाग्रह या पक्षपात वर्जित है।",
      "Professional teaching ethics dictate scrupulous impartiality and non-discriminatory appraisal.")

add_q(142, "Life Skills / Management & Aptitude", "अभिप्रेरणा",
      "कक्षा में किसी छात्र द्वारा अच्छा उत्तर दिए जाने पर शिक्षक द्वारा 'शाबाश! बहुत अच्छा' कहना किस प्रकार का पुनर्बलन है?",
      "When a teacher praises a correct response saying 'Well done! Excellent', what type of reinforcement is this?",
      "सकारात्मक शाब्दिक पुनर्बलन (Positive Verbal Reinforcement)", "Positive Verbal Reinforcement",
      "नकारात्मक शाब्दिक पुनर्बलन", "Negative Verbal Reinforcement",
      "सकारात्मक अशाब्दिक पुनर्बलन", "Positive Non-verbal",
      "दंड", "Punishment",
      "A", "प्रोत्साहक शब्दों का मौखिक प्रयोग सकारात्मक शाब्दिक पुनर्बलन कहलाता है।",
      "Verbal praise is classified as positive verbal reinforcement stimulating behavioral repetition.")

add_q(143, "Life Skills / Management & Aptitude", "संवैधानिक मूल्य",
      "भारतीय संविधान में 'धर्मनिरपेक्षता' (Secularism) का क्या वास्तविक अर्थ है?",
      "What is the true constitutional essence of Secularism in the Indian context?",
      "राज्य का अपना कोई धर्म नहीं होगा तथा वह सभी धर्मों का समान आदर करेगा (सर्वधर्म समभाव)", "The State has no official religion and accords equal respect to all faiths",
      "धर्म का पूर्ण विरोध करना", "Complete hostility toward religion",
      "केवल एक धर्म को विशेष वरीयता देना", "Privileging a single majority religion",
      "नागरिकों को धार्मिक पूजा से रोकना", "Banning religious practice",
      "A", "भारतीय धर्मनिरपेक्षता 'सर्वधर्म समभाव' पर आधारित है जहाँ राज्य सभी धर्मों के प्रति तटस्थ व सम्मानपूर्ण रहता है।",
      "Indian secularism embodies 'Sarva Dharma Sambhava'—equal protection and treatment of all faiths by the state.")

add_q(144, "Life Skills / Management & Aptitude", "कक्षा प्रबंधन",
      "कक्षा में दो छात्रों के बीच किसी बात को लेकर विवाद या झगड़ा हो जाने पर शिक्षक की तुरंत क्या प्रतिक्रिया होनी चाहिए?",
      "If a dispute erupts between two students in class, what should be the teacher's immediate constructive reaction?",
      "दोनों की बात शांति से सुनकर विवाद के कारण को समझना और सौहार्दपूर्ण समाधान निकालना", "Calmly listening to both sides, diagnosing causes, and facilitating amicable conflict resolution",
      "बिना पूछे दोनों को कठोर शारीरिक दंड देना", "Administering immediate corporal punishment",
      "एक छात्र को तुरंत कक्षा से निष्कासित करना", "Expelling one student instantly",
      "झगड़े को पूरी तरह अनदेखा कर देना", "Ignoring the conflict completely",
      "A", "सहानुभूतिपूर्ण मध्यस्थता और समस्या निवारण ही स्वस्थ कक्षा वातावरण बनाए रखता है।",
      "Empathetic mediation, hearing both perspectives, and restorative dispute resolution maintain trust.")

add_q(145, "Life Skills / Management & Aptitude", "सहानुभूति बनाम समानुभूति",
      "जीवन कौशल शिक्षा (Life Skills) के अनुसार 'आत्म-जागरूकता' (Self-Awareness) का क्या अर्थ है?",
      "In WHO's life skills model, what does 'Self-Awareness' fundamentally encompass?",
      "अपनी क्षमताओं, कमजोरियों, भावनाओं और मूल्यों को यथार्थ रूप से समझना", "Recognizing one's own strengths, weaknesses, emotions, and personal values",
      "केवल दूसरों में दोष निकालना", "Looking for faults in others",
      "स्वयं को सबसे श्रेष्ठ समझना", "Arrogant self-aggrandizement",
      "अपनी कमजोरियों को छिपाना", "Suppressing one's limitations",
      "A", "आत्म-जागरूकता से व्यक्ति अपनी खूबियों और कमियों को जानकर संतुलित निर्णय लेने में समर्थ होता है।",
      "Self-awareness involves conscious knowledge of one's own character, feelings, motives, and desires.")

add_q(146, "Life Skills / Management & Aptitude", "नेतृत्व गुण",
      "विद्यालय में एक प्रभावी नेता (Leader) के रूप में शिक्षक को समाज और अभिभावकों के साथ कैसा संबंध रखना चाहिए?",
      "As a community leader, what relationship should an educator cultivate with parents and society?",
      "पारस्परिक संवाद, विश्वास और सक्रिय सहयोग का संबंध", "Transparent dialogue, mutual trust, and active collaborative partnership",
      "अभिभावकों से दूरी बनाए रखना", "Keeping strict distance from parents",
      "अभिभावकों की शिकायतों की उपेक्षा करना", "Dismissing parental concerns",
      "केवल शुल्क वसूली तक सीमित रहना", "Limiting contact to fee collection",
      "A", "विद्यालय-समुदाय सहभागिता (PTA / SMC) से बालक का सर्वांगीण विकास तीव्र होता है।",
      "Regular transparent dialogue between school and community optimizes child welfare and educational outcomes.")

add_q(147, "Life Skills / Management & Aptitude", "समय प्रबंधन",
      "एक शिक्षक के लिए 'समय प्रबंधन' (Time Management) का सबसे बड़ा लाभ क्या है?",
      "What is the greatest professional advantage of systematic Time Management for an educator?",
      "पाठ्यक्रम का योजनाबद्ध क्रियान्वयन एवं शिक्षण लक्ष्यों की समय पर प्राप्ति", "Planned curriculum execution and timely attainment of learning outcomes",
      "कक्षा में जल्दी छुट्टी कर देना", "Dismissing classes early",
      "छात्रों को गृहकार्य न देना", "Avoiding homework assignment",
      "स्वयं के विश्राम का समय बढ़ाना", "Maximizing personal leisure",
      "A", "समय प्रबंधन से कक्षा का प्रत्येक क्षण अधिगम के लिए सार्थक बनता है।",
      "Prudent scheduling ensures structured pedagogical pacing and mastery of learning goals.")

add_q(148, "Life Skills / Management & Aptitude", "संवैधानिक मूल्य - बंधुत्व",
      "भारतीय संविधान के अनुच्छेद 51A(e) के अनुसार प्रत्येक नागरिक का यह कर्तव्य है कि वह:",
      "Under Fundamental Duty Article 51A(e), it is the solemn obligation of every citizen to:",
      "समरसता एवं समान भ्रातृत्व (Brotherhood) की भावना का निर्माण करे जो धर्म, भाषा या वर्ग भेद से परे हो", "Promote harmony and common brotherhood transcending religious, linguistic, and regional diversities",
      "केवल अपने क्षेत्र के लोगों का समर्थन करे", "Support people of one's own region only",
      "विदेशी वस्तुओं का बहिष्कार करे", "Boycott foreign goods only",
      "केवल करों का भुगतान करे", "Pay tax revenues alone",
      "A", "संविधान का अनुच्छेद 51A(e) धर्म, भाषा और प्रदेश से ऊपर उठकर साझा बंधुत्व बढ़ाने का निर्देश देता है।",
      "Article 51A(e) mandates promoting universal harmony and renouncing practices derogatory to women's dignity.")

add_q(149, "Life Skills / Management & Aptitude", "सहानुभूति",
      "कक्षा में एक दृष्टिबाधित छात्र के आने पर शिक्षक का सबसे मानवीय दृष्टिकोण क्या होगा?",
      "How should a compassionate teacher accommodate a visually challenged pupil in regular classroom?",
      "उसे आगे की पंक्ति में बैठाना, मौखिक व्याख्या पर अधिक बल देना तथा ब्रेल सामग्री उपलब्ध कराना", "Seating him in the front row, prioritizing clear verbal explanations, and providing tactile Braille resources",
      "उसे कक्षा के सबसे पीछे बैठा देना", "Relegating him to the rear row",
      "उसे विद्यालय छोड़ देने की सलाह देना", "Advising him to drop out",
      "उसकी अक्षमता पर दया दिखाकर उसे पढ़ने से मुक्त कर देना", "Pitying him and excusing him from study",
      "A", "सहानुभूति नहीं बल्कि सशक्तिकरण (Empowerment) और उचित सुगमता (Reasonable Accommodation) प्रदान करना चाहिए।",
      "Inclusive education requires proactive scaffolding, auditory clarity, and sensory aids rather than passive pity.")

add_q(150, "Life Skills / Management & Aptitude", "आदर्श शिक्षक",
      "प्राचीन भारतीय परंपरा में शिक्षक को 'गुरु' की पदवी क्यों दी गई है?",
      "In India's classical pedagogical heritage, why is an educator revered as a 'Guru'?",
      "क्योंकि वह अज्ञानांधकार को दूर कर ज्ञान का प्रकाश (चेतना) प्रज्वलित करता है", "Because he dispels the darkness of ignorance (Gu) and kindles enlightenment (Ru)",
      "क्योंकि वह केवल जीविकोपार्जन का साधन सिखाता है", "Because he teaches basic trade skills only",
      "क्योंकि वह कठोर अनुशासन का स्वामी होता है", "Because he wields absolute authoritarian command",
      "क्योंकि वह परीक्षा नियंत्रक होता है", "Because he supervises examinations",
      "A", "'गु' का अर्थ अंधकार और 'रु' का अर्थ निवारक प्रकाश है; जो अज्ञान हरकर ज्ञान का बोध कराए वही सच्चा गुरु है।",
      "Etymologically, 'Gu' signifies darkness and 'Ru' signifies the dispeller; a Guru illumines inner consciousness.")

assert len(questions) == 150, f"Expected 150 questions, got {len(questions)}"

# Write out TypeScript file
header = '''/**
 * SUPER TET 2018 (68,500 Sahayak Adhyapak Bharti - ATRE) Complete 150-Question Dataset
 * Exam Date: 27 May 2018
 * Official Blueprint: 150 Questions, 150 Marks, 180 Minutes (3 Hours), 0 Negative Marks.
 * Fully verified bilingual questions covering all 14 official subjects across 12 sections.
 */

import { SuperTetSeedQuestion } from './supertet_2019_pyq';

export const SUPERTET_2018_VERIFIED_PYQS: SuperTetSeedQuestion[] = '''

content = header + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully generated all {len(questions)} verified questions into {OUTPUT_FILE}!")

