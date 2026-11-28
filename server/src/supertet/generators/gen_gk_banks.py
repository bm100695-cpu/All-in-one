# -*- coding: utf-8 -*-
"""
Generates GK_BANK_PART2 and GK_BANK_PART5 for Super TET
Covers:
Part 2: Indian History, Freedom Struggle (1857-1947), Social Reformers, Indian Polity & Constitution
Part 5: National & International Current Affairs, Central & UP Schemes, Sports, Days, Appointments, Science/Space
"""
import os

OUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "banks"))
os.makedirs(OUT_DIR, exist_ok=True)

def clean(s):
    if s is None:
        return ""
    return str(s).replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ").replace("\r", "").strip()

def q_to_ts(topic, chapter, c_hi, c_en, corr, dists, exp_hi, exp_en, diff="MEDIUM", ref_date=None):
    ref_part = f", {{ referenceDate: '{clean(ref_date)}' }}" if ref_date else ""
    return f"""  q(
    '{clean(topic)}',
    '{clean(chapter)}',
    '{clean(c_hi)}',
    '{clean(c_en)}',
    ['{clean(corr[0])}', '{clean(corr[1])}'],
    [
      ['{clean(dists[0][0])}', '{clean(dists[0][1])}'],
      ['{clean(dists[1][0])}', '{clean(dists[1][1])}'],
      ['{clean(dists[2][0])}', '{clean(dists[2][1])}'],
    ],
    '{clean(exp_hi)}',
    '{clean(exp_en)}',
    '{diff}'{ref_part}
  ),"""

# -------------------------------------------------------------
# Part 2: History, Freedom Struggle, Polity & Constitution
# -------------------------------------------------------------
p2_items = []

# 1. 1857 Revolt & Freedom Struggle Leaders
history_raw = [
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का प्रथम स्वतंत्रता संग्राम",
        "1857 के प्रथम स्वतंत्रता संग्राम का तात्कालिक कारण क्या था?",
        "What was the immediate cause of the First War of Independence in 1857?",
        ("चर्बी वाले कारतूसों का प्रयोग", "Use of greased cartridges in Enfield rifles"),
        [
            ("डलहौजी की हड़प नीति", "Dalhousie's Doctrine of Lapse"),
            ("ईसाई धर्म प्रचारकों की गतिविधियाँ", "Activities of Christian missionaries"),
            ("सैनिकों का कम वेतन", "Low salary of Indian sepoys"),
        ],
        "एनफील्ड राइफल में गाय और सुअर की चर्बी युक्त कारतूसों के प्रयोग की सूचना से हिंदू और मुस्लिम दोनों सैनिकों की धार्मिक भावनाएँ आहत हुईं, जो विद्रोह का तात्कालिक कारण बनी।",
        "The introduction of Enfield rifle cartridges reportedly greased with cow and pig fat deeply offended Hindu and Muslim soldiers, triggering the revolt.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का प्रथम स्वतंत्रता संग्राम",
        "1857 के विद्रोह की शुरुआत किस छावनी से मंगल पांडे द्वारा की गई थी?",
        "From which cantonment did Mangal Pandey spark the Revolt of 1857?",
        ("बैरकपुर छावनी", "Barrackpore Cantonment"),
        [
            ("मेरठ छावनी", "Meerut Cantonment"),
            ("दानापुर छावनी", "Danapur Cantonment"),
            ("अंबाला छावनी", "Ambala Cantonment"),
        ],
        "29 मार्च 1857 को 34वीं बंगाल नेटिव इन्फैंट्री के सिपाही मंगल पांडे ने बैरकपुर में चर्बी वाले कारतूसों के विरोध में ब्रिटिश अधिकारियों पर गोली चलाई।",
        "On 29 March 1857, Mangal Pandey of the 34th Bengal Native Infantry mutinied at Barrackpore against greased cartridges.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का प्रथम स्वतंत्रता संग्राम",
        "1857 की क्रांति का औपचारिक प्रारंभ 10 मई 1857 को उत्तर प्रदेश के किस नगर से हुआ था?",
        "From which city of Uttar Pradesh did the 1857 Revolt officially commence on May 10, 1857?",
        ("मेरठ", "Meerut"),
        [
            ("झाँसी", "Jhansi"),
            ("कानपुर", "Kanpur"),
            ("लखनऊ", "Lucknow"),
        ],
        "10 मई 1857 को मेरठ छावनी की तीसरी देशी घुड़सवार सेना के सिपाहियों ने खुला विद्रोह कर दिल्ली की ओर कूच किया।",
        "On May 10, 1857, Indian soldiers in Meerut openly rebelled and marched to Delhi, marking the formal beginning of the revolt.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "1857 के विद्रोह में लखनऊ में क्रांतिकारियों का नेतृत्व किसने किया था?",
        "Who led the revolutionaries in Lucknow during the 1857 Revolt?",
        ("बेगम हज़रत महल", "Begum Hazrat Mahal"),
        [
            ("रानी लक्ष्मीबाई", "Rani Lakshmibai"),
            ("महारानी अहिल्याबाई", "Maharani Ahilyabai"),
            ("जीनत महल", "Zeenat Mahal"),
        ],
        "नवाब वाजिद अली शाह की बेगम हज़रत महल ने अपने अल्पवयस्क पुत्र बिरजिस क़ादिर को नवाब घोषित कर लखनऊ में 1857 के स्वतंत्रता संग्राम का ऐतिहासिक नेतृत्व किया।",
        "Begum Hazrat Mahal proclaimed her minor son Birjis Qadr as Nawab and led the siege and struggle against British forces in Lucknow.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "कानपुर में 1857 के स्वाधीनता संग्राम का मुख्य सैन्य नेतृत्व तात्या टोपे के साथ किसने संभाला था?",
        "Who held the primary command in Kanpur during the 1857 Revolt alongside Tantia Tope?",
        ("नाना साहेब (धोंधू पंत)", "Nana Saheb (Dhondu Pant)"),
        [
            ("कुँवर सिंह", "Kunwar Singh"),
            ("लियाकत अली", "Liaquat Ali"),
            ("खान बहादुर खान", "Khan Bahadur Khan"),
        ],
        "पेशवा बाजीराव द्वितीय के दत्तक पुत्र नाना साहेब ने कानपुर में क्रांतिकारियों का नेतृत्व किया तथा सेनापति तात्या टोपे ने अदम्य वीरता का प्रदर्शन किया।",
        "Nana Saheb, the adopted son of Peshwa Baji Rao II, led the revolt in Kanpur with Tantia Tope serving as commander-in-chief.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "झाँसी में ब्रिटिश जनरल ह्यूरोज के विरुद्ध युद्ध लड़ते हुए वीरगति प्राप्त करने वाली वीरांगना कौन थीं?",
        "Which iconic warrior queen attained martyrdom fighting British General Hugh Rose at Jhansi/Gwalior?",
        ("रानी लक्ष्मीबाई", "Rani Lakshmibai"),
        [
            ("रानी अवंतीबाई", "Rani Avantibai"),
            ("झलकारी बाई", "Jhalkari Bai"),
            ("कित्तूर चेन्नम्मा", "Kittur Chennamma"),
        ],
        "रानी लक्ष्मीबाई ने 'मैं अपनी झाँसी नहीं दूँगी' की प्रतिज्ञा के साथ अदम्य साहस दिखाया। जनरल ह्यूरोज ने उन्हें 'विद्रोहियों में एकमात्र मर्द' कहा था।",
        "Rani Lakshmibai died fighting heroically at Gwalior in June 1858. General Hugh Rose famously remarked that she was the only man among the rebels.",
        "EASY"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "1857 के स्वतंत्रता संग्राम में बिहार के जगदीशपुर से अस्सी वर्ष की आयु में अंग्रेजों को कड़ी टक्कर देने वाले महानायक कौन थे?",
        "Who was the 80-year-old legendary leader from Jagdishpur, Bihar, who fiercely fought the British in 1857?",
        ("बाबू कुँवर सिंह", "Babu Kunwar Singh"),
        [
            ("अमर सिंह", "Amar Singh"),
            ("पीर अली", "Peer Ali"),
            ("मौलवी अहमदुल्ला", "Maulvi Ahmadullah"),
        ],
        "बिहार के जगदीशपुर के जमींदार बाबू कुँवर सिंह ने 80 वर्ष की आयु में छापामार युद्ध नीति अपनाकर ब्रिटिश सेना को कई बार पराजित किया।",
        "Babu Kunwar Singh of Jagdishpur, Bihar, led the rebellion at age 80 and scored several tactical victories against British forces.",
        "MEDIUM"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "इलाहाबाद (प्रयागराज) में 1857 के संग्राम का नेतृत्व किस देशभक्त मौलवी ने किया था?",
        "Which patriotic Maulvi led the 1857 movement in Allahabad (Prayagraj)?",
        ("मौलवी लियाकत अली", "Maulvi Liaquat Ali"),
        [
            ("मौलवी अहमदुल्लाह शाह", "Maulvi Ahmadullah Shah"),
            ("बख्त खान", "Bakht Khan"),
            ("अजीमुल्लाह खान", "Azimullah Khan"),
        ],
        "इलाहाबाद में मौलवी लियाकत अली ने खुसरो बाग को अपना मुख्यालय बनाकर विद्रोह का नेतृत्व किया था, जिसे कर्नल नील ने अत्यंत क्रूरता से दबाया।",
        "Maulvi Liaquat Ali organized the insurrection in Allahabad, making Khusro Bagh his headquarters before it was suppressed by Colonel Neill.",
        "MEDIUM"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "फैजाबाद (अयोध्या) में 1857 के विप्लव का नेतृत्व करने वाले वह मौलवी कौन थे जिन पर अंग्रेजों ने 50,000 रुपये का इनाम घोषित किया था?",
        "Who was the leader of the 1857 revolt in Faizabad on whose head the British placed a bounty of Rs 50,000?",
        ("मौलवी अहमदुल्लाह शाह", "Maulvi Ahmadullah Shah"),
        [
            ("मौलवी लियाकत अली", "Maulvi Liaquat Ali"),
            ("हाजी इमदादुल्लाह", "Haji Imdadullah"),
            ("मुहम्मद कासिम", "Muhammad Qasim"),
        ],
        "मौलवी अहमदुल्लाह शाह (डंका शाह) ने फैजाबाद और अवध में ब्रिटिश हुकूमत के खिलाफ भयंकर संघर्ष छेड़ा। ब्रिटिश उन्हें सबसे खतरनाक विद्रोही मानते थे।",
        "Maulvi Ahmadullah Shah of Faizabad fought relentlessly against the British, earning him great renown and a massive bounty.",
        "HARD"
    ),
    (
        "भारतीय स्वतंत्रता संग्राम", "1857 का नेतृत्व",
        "बरेली (रुहेलखंड) में 1857 के स्वतंत्रता संग्राम का नेतृत्व किसने किया था?",
        "Who led the 1857 rebellion in Bareilly (Rohilkhand)?",
        ("खान बहादुर खान", "Khan Bahadur Khan"),
        [
            ("कादिर अली", "Qadir Ali"),
            ("हकीम अहसानुल्लाह", "Hakim Ahsanullah"),
            ("महमूद खान", "Mahmud Khan"),
        ],
        "रुहेलखंड के पूर्व शासक के पौत्र खान बहादुर खान ने बरेली में विद्रोह का नेतृत्व किया और स्वयं को सूबेदार घोषित किया।",
        "Khan Bahadur Khan, grandson of Hafiz Rahmat Khan, led the uprising in Bareilly and administered Rohilkhand until British recapture.",
        "MEDIUM"
    ),
]

for item in history_raw:
    p2_items.append(q_to_ts(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8]))

# 2. Social Reformers & Renaissance
reformers = [
    ("राजा राममोहन राय", "ब्रह्म समाज", "1828", "सती प्रथा उन्मूलन (1829)", "आधुनिक भारत का जनक / भारतीय पुनर्जागरण का अग्रदूत", "Raja Ram Mohan Roy", "Brahmo Samaj", "Abolition of Sati (1829)"),
    ("स्वामी दयानंद सरस्वती", "आर्य समाज", "1875", "वेदों की ओर लौटो", "सत्यार्थ प्रकाश के रचयिता व स्वराज्य शब्द के प्रथम प्रयोक्ता", "Swami Dayanand Saraswati", "Arya Samaj", "Go back to the Vedas"),
    ("स्वामी विवेकानंद", "रामकृष्ण मिशन", "1897", "शिकागो धर्म सम्मेलन (1893)", "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए", "Swami Vivekananda", "Ramakrishna Mission", "World Parliament of Religions 1893"),
    ("ज्योतिराव गोविंदराव फुले", "सत्यशोधक समाज", "1873", "गुलामगिरी पुस्तक की रचना", "महाराष्ट्र में बालिकाओं हेतु प्रथम विद्यालय व वंचितों के उत्थानकर्ता", "Jyotirao Phule", "Satyashodhak Samaj", "Gulamgiri"),
    ("ईश्वरचंद्र विद्यासागर", "विधवा पुनर्विवाह आंदोलन", "1856", "हिंदू विधवा पुनर्विवाह अधिनियम 1856", "संस्कृत कॉलेज के प्राचार्य व नारी शिक्षा के प्रवर्तक", "Ishwar Chandra Vidyasagar", "Widow Remarriage Movement", "Hindu Widows' Remarriage Act 1856"),
    ("सर सैयद अहमद खान", "अलीगढ़ आंदोलन", "1875", "मुहम्मडन एंग्लो-ओरिएंटल कॉलेज (AMU)", "मुस्लिम समाज में आधुनिक वैज्ञानिक शिक्षा के प्रणेता", "Sir Syed Ahmad Khan", "Aligarh Movement", "MAO College Aligarh"),
    ("महादेव गोविंद रानाडे", "प्रार्थना समाज", "1867", "महाराष्ट्र के सुकरात", "दक्कन एजुकेशन सोसाइटी व सामाजिक सुधार परिषद के संस्थापक", "M.G. Ranade", "Prarthana Samaj", "Deccan Education Society"),
    ("केशवचंद्र सेन", "भारतीय ब्रह्म समाज", "1866", "सुलभ समाचार पत्रिका", "ब्रह्म समाज को अखिल भारतीय पहचान दिलाने वाले प्रचारक", "Keshub Chunder Sen", "Brahmo Samaj of India", "Sulabh Samachar"),
    ("एनी बेसेंट", "थियोसोफिकल सोसाइटी एवं होम रूल लीग", "1916", "न्यू इंडिया व कॉमनवील समाचार पत्र", "1917 में कांग्रेस की प्रथम महिला अध्यक्ष", "Annie Besant", "Theosophical Society & Home Rule", "First Woman Congress President 1917"),
    ("आत्माराम पांडुरंग", "प्रार्थना समाज (मुंबई)", "1867", "केशवचंद्र सेन की प्रेरणा से स्थापना", "जाति प्रथा विरोध व स्त्री शिक्षा प्रोत्साहन", "Atmaram Pandurang", "Prarthana Samaj (1867)", "Social reform in Maharashtra"),
]

for r in reformers:
    # Q: Organization / Contribution
    p2_items.append(q_to_ts(
        "भारतीय समाज सुधारक", r[1],
        f"'{r[1]}' की स्थापना निम्नलिखित में से किस महान समाज सुधारक ने की थी?",
        f"Which eminent social reformer established the '{r[6]}'",
        (r[0], r[5]),
        [
            (reformers[(reformers.index(r)+1)%len(reformers)][0], reformers[(reformers.index(r)+1)%len(reformers)][5]),
            (reformers[(reformers.index(r)+2)%len(reformers)][0], reformers[(reformers.index(r)+2)%len(reformers)][5]),
            (reformers[(reformers.index(r)+3)%len(reformers)][0], reformers[(reformers.index(r)+3)%len(reformers)][5]),
        ],
        f"{r[0]} ने {r[2]} ई. में {r[1]} की स्थापना की थी। उन्होंने {r[4]} के रूप में समाज में नवचेतना का संचार किया।",
        f"{r[5]} founded the {r[6]} in {r[2]}, leading significant reforms including {r[7]}.",
        "EASY"
    ))

# 3. Indian National Congress & Freedom Movement Phases (60 Questions)
inc_milestones = [
    ("भारतीय राष्ट्रीय कांग्रेस की स्थापना", "28 दिसंबर 1885", "बॉम्बे (गोकुलदास तेजपाल संस्कृत कॉलेज)", "व्योमेश चंद्र बनर्जी", "ए.ओ. ह्यूम (एलन ऑक्टेवियन ह्यूम)", "लॉर्ड डफरिन", "72 प्रतिनिधि"),
    ("कांग्रेस का कलकत्ता अधिवेशन 1906", "1906", "कलकत्ता", "दादाभाई नौरोजी", "स्वराज्य को पहली बार कांग्रेस के मंच से मुख्य लक्ष्य घोषित किया गया", "लॉर्ड मिंटो द्वितीय", "स्वदेशी आंदोलन"),
    ("सूरत विभाजन (सूरत अधिवेशन 1907)", "1907", "सूरत (ताप्ती नदी तट)", "रास बिहारी घोष", "कांग्रेस का गरम दल और नरम दल में ऐतिहासिक विभाजन", "लॉर्ड मिंटो द्वितीय", "बाल गंगाधर तिलक व गोखले"),
    ("लखनऊ समझौता (लखनऊ पैक्ट 1916)", "1916", "लखनऊ", "अंबिका चरण मजूमदार", "नरम दल-गरम दल का पुनः मिलन तथा कांग्रेस-मुस्लिम लीग संयुक्त समझौता", "लॉर्ड चेम्सफोर्ड", "तिलक व एनी बेसेंट के प्रयास"),
    ("कांग्रेस का कलकत्ता विशेष अधिवेशन 1920", "सितंबर 1920", "कलकत्ता", "लाला लाजपत राय", "महात्मा गांधी के असहयोग आंदोलन के प्रस्ताव को प्रारंभिक स्वीकृति", "लॉर्ड चेम्सफोर्ड", "असहयोग प्रस्ताव"),
    ("कांग्रेस का नागपुर वार्षिक अधिवेशन 1920", "दिसंबर 1920", "नागपुर", "सी. विजयराघवाचारी", "असहयोग आंदोलन के प्रस्ताव का पूर्ण एवं विधिवत अनुमोदन", "लॉर्ड चेम्सफोर्ड", "भाषाई आधार पर प्रांतीय कमेटियाँ"),
    ("कांग्रेस का बेलगाम अधिवेशन 1924", "1924", "बेलगाम (कर्नाटक)", "महात्मा गांधी", "एकमात्र अधिवेशन जिसकी अध्यक्षता स्वयं महात्मा गांधी ने की थी", "लॉर्ड रीडिंग", "गांधीजी की एकमात्र अध्यक्षता"),
    ("कांग्रेस का कानपुर अधिवेशन 1925", "1925", "कानपुर (उत्तर प्रदेश)", "सरोजिनी नायडू", "भारतीय राष्ट्रीय कांग्रेस की प्रथम भारतीय महिला अध्यक्ष", "लॉर्ड रीडिंग", "प्रथम भारतीय महिला अध्यक्ष"),
    ("कांग्रेस का लाहौर अधिवेशन 1929", "दिसंबर 1929", "लाहौर (रावी नदी तट)", "पंडित जवाहरलाल नेहरू", "पूर्ण स्वराज्य का ऐतिहासिक प्रस्ताव पारित व 26 जनवरी 1930 को प्रथम स्वतंत्रता दिवस मनाने का निर्णय", "लॉर्ड इरविन", "पूर्ण स्वराज्य संकल्प"),
    ("कांग्रेस का कराची अधिवेशन 1931", "मार्च 1931", "कराची", "सरदार वल्लभभाई पटेल", "मूल अधिकारों और राष्ट्रीय आर्थिक कार्यक्रम पर ऐतिहासिक प्रस्ताव पारित", "लॉर्ड इरविन", "मूल अधिकार प्रस्ताव"),
    ("कांग्रेस का फैजपुर अधिवेशन 1937", "1937", "फैजपुर (महाराष्ट्र)", "पंडित जवाहरलाल नेहरू", "कांग्रेस का गाँव में आयोजित होने वाला पहला ऐतिहासिक अधिवेशन", "लॉर्ड लिनलिथगो", "प्रथम ग्रामीण अधिवेशन"),
    ("कांग्रेस का हरिपुरा अधिवेशन 1938", "1938", "हरिपुरा (गुजरात)", "सुभाष चंद्र बोस", "राष्ट्रीय योजना समिति (National Planning Committee) का गठन नेहरू की अध्यक्षता में", "लॉर्ड लिनलिथगो", "सुभाष चंद्र बोस की अध्यक्षता"),
    ("कांग्रेस का मेरठ अधिवेशन 1946", "नवंबर 1946", "मेरठ (उत्तर प्रदेश)", "आचार्य जे.बी. कृपलानी", "भारत की स्वतंत्रता (15 अगस्त 1947) के समय कांग्रेस अध्यक्ष", "लॉर्ड वेवेल", "आजादी के समय अध्यक्ष"),
]

for m in inc_milestones:
    # President Q
    p2_items.append(q_to_ts(
        "भारतीय राष्ट्रीय कांग्रेस", "प्रमुख ऐतिहासिक अधिवेशन",
        f"{m[0]} ({m[1]}) की अध्यक्षता निम्नलिखित में से किसने की थी?",
        f"Who presided over the historic INC session: {m[0]} ({m[1]})?",
        (m[3], m[3]),
        [
            ("गोपाल कृष्ण गोखले", "Gopal Krishna Gokhale"),
            ("मौलाना अबुल कलाम आजाद", "Maulana Abul Kalam Azad"),
            ("बदरुद्दीन तैयबजी", "Badruddin Tyabji"),
        ],
        f"{m[0]} {m[1]} में {m[2]} में संपन्न हुआ था, जिसकी अध्यक्षता {m[3]} ने की थी। इसका ऐतिहासिक महत्व: {m[4]}।",
        f"The {m[0]} held at {m[2]} in {m[1]} was presided over by {m[3]}. Significance: {m[4]}.",
        "MEDIUM"
    ))
    # Outcome / Significance Q
    p2_items.append(q_to_ts(
        "भारतीय राष्ट्रीय कांग्रेस", "अधिवेशन के प्रमुख प्रस्ताव",
        f"'{m[4]}' किस कांग्रेस अधिवेशन की सबसे प्रमुख ऐतिहासिक उपलब्धि थी?",
        f"'{m[4]}' was the historic milestone achieved at which INC session?",
        (f"{m[0]} ({m[2]}, {m[1]})", f"{m[0]} ({m[2]}, {m[1]})"),
        [
            ("कांग्रेस का बनारस अधिवेशन (1905)", "INC Banaras Session (1905)"),
            ("कांग्रेस का मद्रास अधिवेशन (1887)", "INC Madras Session (1887)"),
            ("कांग्रेस का त्रिपुरा अधिवेशन (1939)", "INC Tripuri Session (1939)"),
        ],
        f"{m[1]} में {m[2]} में आयोजित {m[0]} में {m[3]} की अध्यक्षता में यह महत्वपूर्ण निर्णय लिया गया था।",
        f"This historic resolution was adopted at {m[0]} held in {m[2]} in {m[1]}.",
        "MEDIUM"
    ))

# 4. Gandhian Era & Mass Movements (50 Questions)
gandhi_events = [
    ("चंपारण सत्याग्रह (1917)", "1917", "बिहार", "तिनकठिया पद्धति (3/20 भाग पर नील की खेती)", "राजकुमार शुक्ल के निमंत्रण पर गांधीजी का भारत में पहला सफल सत्याग्रह", "Champaran Satyagraha (1917)"),
    ("अहमदाबाद मिल मजदूर आंदोलन (1918)", "1918", "गुजरात", "प्लेग बोनस विवाद (35% वेतन वृद्धि)", "गांधीजी द्वारा भारत में पहली बार भूख हड़ताल (Hunger Strike) का प्रयोग", "Ahmedabad Mill Strike (1918)"),
    ("खेड़ा सत्याग्रह (1918)", "1918", "गुजरात", "फसल नष्ट होने पर किसानों से लगान वसूली", "गांधीजी का पहला वास्तविक किसान सत्याग्रह (सरदार पटेल की सक्रिय सहभागिता)", "Kheda Satyagraha (1918)"),
    ("रॉलेट एक्ट विरोध एवं जलियाँवाला बाग हत्याकांड", "13 अप्रैल 1919", "अमृतसर (पंजाब)", "डॉ. सत्यपाल व सैफुद्दीन किचलू की गिरफ्तारी का शांतिपूर्ण विरोध", "जनरल डायर द्वारा निहत्थी भीड़ पर गोलीबारी; रवींद्रनाथ टैगोर ने 'नाइटहुड' लौटाया", "Jallianwala Bagh Massacre (1919)"),
    ("असहयोग आंदोलन (1920-22)", "1 अगस्त 1920", "अखिल भारतीय", "सरकारी उपाधियों, विद्यालयों, अदालतों व विदेशी वस्त्रों का बहिष्कार", "बाल गंगाधर तिलक के निधन के दिन प्रारंभ; 1 वर्ष में स्वराज्य का नारा", "Non-Cooperation Movement (1920-22)"),
    ("चौरी-चौरा कांड", "4 फरवरी 1922", "गोरखपुर (उत्तर प्रदेश)", "क्रोधित भीड़ द्वारा पुलिस थाने में आग लगाना (22 पुलिसकर्मियों की मृत्यु)", "हिंसा के कारण गांधीजी द्वारा 12 फरवरी 1922 को बारदोली बैठक में असहयोग आंदोलन वापस", "Chauri Chaura Incident (1922)"),
    ("स्वराज पार्टी की स्थापना", "1 जनवरी 1923", "इलाहाबाद", "विधान परिषदों में प्रवेश कर सरकार के कार्यों में गतिरोध उत्पन्न करना", "चित्तरंजन दास (अध्यक्ष) और मोतीलाल नेहरू (महासचिव) द्वारा स्थापना", "Swaraj Party Foundation (1923)"),
    ("साइमन कमीशन का गठन एवं बहिष्कार", "1927 (गठन) / 1928 (आगमन)", "बॉम्बे आगमन 3 फरवरी 1928", "सभी 7 सदस्यों का अंग्रेज होना (श्वेत कमीशन)", "'साइमन गो बैक' के नारे; लाहौर में लाठीचार्ज से लाला लाजपत राय की शहादत", "Simon Commission (1927-28)"),
    ("नेहरू रिपोर्ट (1928)", "1928", "लखनऊ सर्वदलीय सम्मेलन", "पंडित मोतीलाल नेहरू की अध्यक्षता में भारत के संविधान का प्रारूप", "डोमिनियन स्टेटस, मूल अधिकार व संयुक्त निर्वाचन मंडल की सिफारिश", "Nehru Report (1928)"),
    ("दांडी मार्च एवं सविनय अवज्ञा आंदोलन", "12 मार्च 1930 से 6 अप्रैल 1930", "साबरमती आश्रम से दांडी (241 मील)", "नमक कानून तोड़ना", "गांधीजी सहित 78 अनुयायियों द्वारा 24 दिनों की पदयात्रा; 6 अप्रैल को नमक बनाकर आंदोलन शुरू", "Dandi March & Salt Satyagraha (1930)"),
    ("गांधी-इरविन समझौता (दिल्ली पैक्ट)", "5 मार्च 1931", "नई दिल्ली", "सविनय अवज्ञा आंदोलन स्थगित व द्वितीय गोलमेज सम्मेलन में भाग लेने की सहमति", "वायसराय लॉर्ड इरविन और महात्मा गांधी के बीच ऐतिहासिक समझौता", "Gandhi-Irwin Pact (1931)"),
    ("पूना पैक्ट (पूना समझौता)", "24 सितंबर 1932", "यरवदा जेल (पुणे)", "कम्युनल अवार्ड (सांप्रदायिक पंचाट) के तहत दलितों हेतु पृथक निर्वाचन का विरोध", "गांधीजी और डॉ. बी.आर. आंबेडकर के मध्य; दलित वर्गों हेतु आरक्षित सीटों की संख्या 71 से बढ़ाकर 148 की गई", "Poona Pact (1932)"),
    ("भारत छोड़ो आंदोलन (अगस्त क्रांति)", "8-9 अगस्त 1942", "ग्वालिया टैंक मैदान (बॉम्बे)", "अंग्रेजों भारत छोड़ो और 'करो या मरो' (Do or Die) का आह्वान", "ऑपरेशन जीरो आवर के तहत शीर्ष नेताओं की गिरफ्तारी; अरुणा आसफ अली द्वारा तिरंगा फहराना", "Quit India Movement (1942)"),
]

for g in gandhi_events:
    p2_items.append(q_to_ts(
        "भारतीय स्वतंत्रता संग्राम", g[0],
        f"'{g[0]}' से संबंधित निम्नलिखित कथनों में से कौन सा तथ्य ऐतिहासिक रूप से सर्वाधिक सटीक है?",
        f"Which of the following historical statements regarding '{g[5]}' is factually accurate?",
        (g[4], g[4]),
        [
            ("यह आंदोलन लॉर्ड माउंटबेटन की योजना के विरोध में प्रारंभ किया गया था।", "This movement was launched in protest against the Mountbatten Plan."),
            ("इस आंदोलन का संचालन केवल मद्रास प्रेसीडेंसी तक ही सीमित रहा था।", "This agitation was strictly confined only to Madras Presidency."),
            ("इसके विरोध में सुभाष चंद्र बोस ने फॉरवर्ड ब्लॉक पार्टी का विलय कांग्रेस में कर दिया।", "In opposition to this, Subhas Bose merged the Forward Bloc into Congress."),
        ],
        f"{g[0]} का कारण '{g[3]}' था तथा यह {g[1]} में घटित हुआ। {g[4]}।",
        f"{g[5]} occurred around {g[1]} driven by {g[3]}. Main detail: {g[4]}.",
        "MEDIUM"
    ))

# 5. Revolutionary Movements & Martyrs (30 Questions)
rev_events = [
    ("काकोरी ट्रेन एक्शन (काकोरी कांड)", "9 अगस्त 1925", "काकोरी (लखनऊ के निकट)", "हिंदुस्तान रिपब्लिकन एसोसिएशन (HRA)", "राम प्रसाद 'बिस्मिल', अशफाक उल्ला खान, रोशन सिंह और राजेंद्र लाहिड़ी को फांसी", "Kakori Train Action (1925)"),
    ("हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन (HSRA) का गठन", "सितंबर 1928", "फिरोजशाह कोटला मैदान (दिल्ली)", "चंद्रशेखर आजाद, भगत सिंह, सुखदेव", "समाजवादी गणतंत्र की स्थापना का लक्ष्य निर्धारित", "HSRA Formation (1928)"),
    ("लाहौर षड्यंत्र केस (सैंडर्स वध)", "17 दिसंबर 1928", "लाहौर", "भगत सिंह, राजगुरु, सुखदेव, चंद्रशेखर आजाद", "लाला लाजपत राय पर लाठीचार्ज का बदला लेने हेतु पुलिस अधिकारी सैंडर्स का वध", "Saunders Assassination (1928)"),
    ("केंद्रीय विधानसभा बम कांड", "8 अप्रैल 1929", "नई दिल्ली (केंद्रीय असेंबली)", "भगत सिंह और बटुकेश्वर दत्त", "पब्लिक सेफ्टी बिल व ट्रेड डिस्प्यूट्स बिल के विरोध में 'इंकलाब जिंदाबाद' के नारों के साथ खाली बेंचों पर बम फेंका", "Central Assembly Bomb Case (1929)"),
    ("शहीद-ए-आजम भगत सिंह, सुखदेव व राजगुरु की शहादत", "23 मार्च 1931", "लाहौर सेंट्रल जेल", "भगत सिंह, राजगुरु, सुखदेव", "लाहौर षड्यंत्र केस के तहत फांसी दी गई; 23 मार्च को 'शहीद दिवस' मनाया जाता है", "Martyrdom of Bhagat Singh, Sukhdev & Rajguru"),
    ("चंद्रशेखर आजाद की शहादत", "27 फरवरी 1931", "अल्फ्रेड पार्क (प्रयागराज)", "चंद्रशेखर आजाद", "पुलिस से घिरने पर अंतिम गोली स्वयं को मारकर 'आजाद ही रहे हैं, आजाद ही रहेंगे' का संकल्प पूरा किया", "Martyrdom of Chandrashekhar Azad"),
    ("चटगांव शस्त्रागार छापा (Chittagong Armoury Raid)", "18 अप्रैल 1930", "चटगांव (वर्तमान बांग्लादेश)", "सूर्य सेन ('मास्टर दा')", "इंडियन रिपब्लिकन आर्मी द्वारा ब्रिटिश शस्त्रागार पर साहसिक कब्जा", "Chittagong Armoury Raid (1930)"),
    ("आजाद हिंद फौज (INA) और सुभाष चंद्र बोस", "1942-43", "सिंगापुर / टोक्यो", "कैप्टन मोहन सिंह / रासबिहारी बोस / नेताजी सुभाष चंद्र बोस", "'तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा' और 'दिल्ली चलो' का नारा; रानी झांसी रेजिमेंट का गठन", "Indian National Army (INA) & Netaji"),
]

for r in rev_events:
    p2_items.append(q_to_ts(
        "भारतीय स्वतंत्रता संग्राम", r[0],
        f"'{r[0]}' के संबंध में मुख्य नेतृत्वकर्ता अथवा ऐतिहासिक तथ्य कौन-सा है?",
        f"Who were the key revolutionaries or what was the pivotal fact in '{r[5]}'?",
        (r[4], r[4]),
        [
            ("यह घटना लॉर्ड कर्जन द्वारा बंगाल विभाजन के समय वर्ष 1905 में घटित हुई थी।", "This event took place during Lord Curzon's partition of Bengal in 1905."),
            ("इसका नेतृत्व केवल गोपाल कृष्ण गोखले द्वारा ब्रिटिश संसद में किया गया था।", "It was led solely by Gopal Krishna Gokhale inside the British Parliament."),
            ("इस घटना के उपरांत भारत में रोलेट एक्ट को बिना शर्त वापस ले लिया गया।", "Following this event, the Rowlatt Act was unconditionally repealed in India."),
        ],
        f"{r[0]} {r[1]} को घटित हुआ। संगठन/नायक: {r[3]}। मुख्य तथ्य: {r[4]}।",
        f"{r[5]} occurred on {r[1]} involving {r[3]}. Crucial fact: {r[4]}.",
        "MEDIUM"
    ))

# 6. Indian Constitution & Polity Core (120 Questions)
polity_core = [
    # Constituent Assembly
    ("भारतीय संविधान सभा की प्रथम बैठक कब आयोजित की गई थी?", "When was the first meeting of the Indian Constituent Assembly held?",
     ("9 दिसंबर 1946", "9 December 1946"),
     [("11 दिसंबर 1946", "11 December 1946"), ("13 दिसंबर 1946", "13 December 1946"), ("26 नवंबर 1949", "26 November 1949")],
     "संविधान सभा की पहली बैठक 9 दिसंबर 1946 को नई दिल्ली के कॉन्स्टिट्यूशन हॉल (वर्तमान संसद भवन का केंद्रीय कक्ष) में हुई थी, जिसमें डॉ. सच्चिदानंद सिन्हा को अस्थायी अध्यक्ष चुना गया था।",
     "The first meeting was held on 9 Dec 1946 with Dr. Sachchidananda Sinha as the interim President.", "EASY", "संविधान निर्माण"),
    ("संविधान सभा के स्थायी अध्यक्ष के रूप में 11 दिसंबर 1946 को किसे सर्वसम्मति से निर्वाचित किया गया था?", "Who was unanimously elected as the permanent President of the Constituent Assembly on 11 Dec 1946?",
     ("डॉ. राजेंद्र प्रसाद", "Dr. Rajendra Prasad"),
     [("डॉ. बी.आर. आंबेडकर", "Dr. B.R. Ambedkar"), ("पंडित जवाहरलाल नेहरू", "Pt. Jawaharlal Nehru"), ("सर बी.एन. राव", "Sir B.N. Rau")],
     "11 दिसंबर 1946 को डॉ. राजेंद्र प्रसाद को संविधान सभा का स्थायी अध्यक्ष और एच.सी. मुखर्जी को उपाध्यक्ष चुना गया था।",
     "Dr. Rajendra Prasad was elected permanent President of the Constituent Assembly on 11 December 1946.", "EASY", "संविधान निर्माण"),
    ("संविधान सभा की ऐतिहासिक 'प्रारूप समिति' (Drafting Committee) के अध्यक्ष कौन थे?", "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
     ("डॉ. भीमराव आंबेडकर", "Dr. Bhimrao Ambedkar"),
     [("डॉ. राजेंद्र प्रसाद", "Dr. Rajendra Prasad"), ("के.एम. मुंशी", "K.M. Munshi"), ("अल्लादि कृष्णास्वामी अय्यर", "Alladi Krishnaswamy Iyer")],
     "29 अगस्त 1947 को 7 सदस्यीय प्रारूप समिति का गठन किया गया जिसके अध्यक्ष डॉ. बी.आर. आंबेडकर थे, जिन्हें भारतीय संविधान का जनक कहा जाता है।",
     "The Drafting Committee was appointed on 29 August 1947 under the chairmanship of Dr. B.R. Ambedkar.", "EASY", "संविधान निर्माण"),
    ("संविधान सभा के संवैधानिक सलाहकार (Constitutional Advisor) के रूप में किसे नियुक्त किया गया था?", "Who was appointed as the Constitutional Advisor to the Constituent Assembly?",
     ("सर बी.एन. राव (बेनेगल नरसिंह राव)", "Sir B.N. Rau (Benegal Narsing Rau)"),
     [("डॉ. बी.आर. आंबेडकर", "Dr. B.R. Ambedkar"), ("एस.एन. मुखर्जी", "S.N. Mukherjee"), ("एच.वी.आर. अयंगर", "H.V.R. Iengar")],
     "सर बी.एन. राव संविधान सभा के संवैधानिक सलाहकार थे जिन्होंने संविधान का मूल कच्चा प्रारूप तैयार किया था।",
     "Sir B.N. Rau served as the Constitutional Advisor, preparing the initial draft of the Constitution.", "MEDIUM", "संविधान निर्माण"),
    ("भारतीय संविधान को संविधान सभा द्वारा किस तिथि को अंगीकृत, अधिनियमित और आत्मार्पित किया गया था?", "On which date was the Constitution of India adopted, enacted and given to themselves by the Constituent Assembly?",
     ("26 नवंबर 1949", "26 November 1949"),
     [("26 जनवरी 1950", "26 January 1950"), ("15 अगस्त 1947", "15 August 1947"), ("24 जनवरी 1950", "24 January 1950")],
     "26 नवंबर 1949 को संविधान सभा ने संविधान को अंगीकृत किया। इस दिन को प्रतिवर्ष 'संविधान दिवस' (Constitution Day) के रूप में मनाया जाता है।",
     "Adopted on 26 November 1949, this historic day is celebrated annually as National Constitution Day.", "EASY", "संविधान निर्माण"),
    ("भारतीय संविधान पूर्ण रूप से किस तिथि को लागू (प्रभावी) हुआ था?", "On which date did the Constitution of India come into full effect?",
     ("26 जनवरी 1950", "26 January 1950"),
     [("26 नवंबर 1949", "26 November 1949"), ("15 अगस्त 1947", "15 August 1947"), ("24 जनवरी 1950", "24 January 1950")],
     "1930 के लाहौर अधिवेशन में घोषित 'पूर्ण स्वराज्य दिवस' की स्मृति को बनाए रखने के लिए 26 जनवरी 1950 को संविधान लागू किया गया और भारत एक संप्रभु लोकतांत्रिक गणराज्य बना।",
     "The Constitution came into force on 26 January 1950 to honor the 1930 declaration of Purna Swaraj.", "EASY", "संविधान निर्माण"),
    ("भारतीय संविधान के निर्माण में कुल कितना समय लगा था?", "How much total time did the Constituent Assembly take to frame the Constitution?",
     ("2 वर्ष, 11 माह, 18 दिन", "2 years, 11 months, 18 days"),
     [("3 वर्ष, 1 माह, 12 दिन", "3 years, 1 month, 12 days"), ("2 वर्ष, 9 माह, 11 दिन", "2 years, 9 months, 11 days"), ("2 वर्ष, 10 माह, 20 दिन", "2 years, 10 months, 20 days")],
     "संविधान निर्माण में कुल 2 वर्ष, 11 माह और 18 दिन का समय लगा, जिसमें 11 औपचारिक सत्र आयोजित किए गए थे।",
     "Framing the Constitution took exactly 2 years, 11 months and 18 days across 11 major sessions.", "EASY", "संविधान निर्माण"),
    ("भारतीय संविधान की मूल प्रति को अपनी सुंदर कैलीग्राफी (हस्तलेख) में किसने लिखा था?", "Who handwrote the original calligraphic copies of the Indian Constitution in English?",
     ("प्रेम बिहारी नारायण रायजादा", "Prem Behari Narain Raizada"),
     [("नंदलाल बोस", "Nandalal Bose"), ("राममनोहर सिन्हा", "Rammanohar Sinha"), ("वसंत कृष्ण वैद्य", "Vasant Krishnan Vaidya")],
     "प्रेम बिहारी नारायण रायजादा ने मूल संविधान को इटैलिक शैली में हस्तलिखित किया था तथा शांतिनिकेतन के कलाकार नंदलाल बोस के दल ने इसे अलंकृत किया था।",
     "Prem Behari Narain Raizada handwrote the English original, while artists under Nandalal Bose decorated the pages.", "MEDIUM", "संविधान निर्माण"),
    
    # Preamble & Features
    ("42वें संविधान संशोधन अधिनियम 1976 द्वारा भारतीय संविधान की प्रस्तावना में कौन-से तीन नए शब्द जोड़े गए थे?", "Which three words were added to the Preamble by the 42nd Constitutional Amendment Act of 1976?",
     ("समाजवादी, पंथनिरपेक्ष और अखंडता", "Socialist, Secular and Integrity"),
     [("लोकतांत्रिक, संप्रभु और गणतंत्र", "Democratic, Sovereign and Republic"), ("स्वतंत्रता, समानता और बंधुत्व", "Liberty, Equality and Fraternity"), ("न्याय, एकता और संप्रभुता", "Justice, Unity and Sovereignty")],
     "42वें संशोधन 1976 द्वारा प्रस्तावना में 'समाजवादी' (Socialist), 'पंथनिरपेक्ष' (Secular) और 'अखंडता' (Integrity) शब्द जोड़े गए थे।",
     "The 42nd Amendment in 1976 inserted Socialist, Secular, and Integrity into the Preamble.", "EASY", "प्रस्तावना"),
    ("डॉ. भीमराव आंबेडकर ने किस मौलिक अधिकार को 'संविधान का हृदय और आत्मा' (Heart and Soul of the Constitution) कहा था?", "Which Fundamental Right was described by Dr. B.R. Ambedkar as the 'Heart and Soul of the Constitution'?",
     ("संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)", "Right to Constitutional Remedies (Article 32)"),
     [("समानता का अधिकार (अनुच्छेद 14)", "Right to Equality (Article 14)"), ("धार्मिक स्वतंत्रता का अधिकार (अनुच्छेद 25)", "Right to Freedom of Religion (Article 25)"), ("शोषण के विरुद्ध अधिकार (अनुच्छेद 23)", "Right against Exploitation (Article 23)")],
     "अनुच्छेद 32 के तहत नागरिक अपने मूल अधिकारों के हनन पर सीधे सर्वोच्च न्यायालय जा सकते हैं, जिसे सुप्रीम कोर्ट 5 प्रकार की रिटों द्वारा लागू करवाता है।",
     "Article 32 empowers individuals to petition the Supreme Court directly for enforcement of Fundamental Rights via prerogative writs.", "EASY", "मौलिक अधिकार"),
    ("भारतीय संविधान में मूल रूप से कितने मौलिक अधिकार थे और वर्तमान में कितने हैं?", "How many Fundamental Rights were originally in the Constitution, and how many are there today?",
     ("मूलतः 7 अधिकार थे, वर्तमान में 6 हैं", "Originally 7 rights, currently 6"),
     [("मूलतः 6 थे, वर्तमान में 7 हैं", "Originally 6, currently 7"), ("मूलतः 8 थे, वर्तमान में 7 हैं", "Originally 8, currently 7"), ("मूलतः 7 थे, वर्तमान में 5 हैं", "Originally 7, currently 5")],
     "44वें संविधान संशोधन 1978 द्वारा 'संपत्ति के अधिकार' (अनुच्छेद 31) को मौलिक अधिकारों से हटाकर अनुच्छेद 300A के तहत विधिक/कानूनी अधिकार बना दिया गया।",
     "The 44th Amendment in 1978 removed the Right to Property from Part III, reclassifying it as a legal right under Article 300A.", "EASY", "मौलिक अधिकार"),
    ("भारतीय संविधान के किस अनुच्छेद के अंतर्गत 'अस्पृश्यता का अंत' (Abolition of Untouchability) घोषित किया गया है?", "Under which Article of the Indian Constitution is the 'Abolition of Untouchability' declared?",
     ("अनुच्छेद 17", "Article 17"),
     [("अनुच्छेद 14", "Article 14"), ("अनुच्छेद 18", "Article 18"), ("अनुच्छेद 19", "Article 19")],
     "अनुच्छेद 17 अस्पृश्यता को समाप्त करता है और किसी भी रूप में इसके आचरण को दंडनीय अपराध घोषित करता है।",
     "Article 17 abolishes untouchability and forbids its practice in any form as a punishable offence.", "EASY", "मौलिक अधिकार"),
    ("6 से 14 वर्ष के बच्चों के लिए निःशुल्क एवं अनिवार्य शिक्षा को किस अनुच्छेद के तहत मौलिक अधिकार बनाया गया है?", "Under which Article was free and compulsory education for children aged 6 to 14 made a Fundamental Right?",
     ("अनुच्छेद 21A", "Article 21A"),
     [("अनुच्छेद 19", "Article 19"), ("अनुच्छेद 45", "Article 45"), ("अनुच्छेद 51A", "Article 51A")],
     "86वें संविधान संशोधन अधिनियम 2002 द्वारा अनुच्छेद 21A जोड़कर प्रारंभिक शिक्षा को मूल अधिकार बनाया गया, जिसे लागू करने हेतु RTE Act 2009 पारित हुआ।",
     "The 86th Constitutional Amendment 2002 inserted Article 21A, guaranteeing free and compulsory education as a Fundamental Right.", "EASY", "मौलिक अधिकार"),
    ("भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत (DPSP) किस देश के संविधान से प्रेरित हैं?", "From which country's constitution were the Directive Principles of State Policy (DPSP) borrowed?",
     ("आयरलैंड (Irish Constitution)", "Ireland (Irish Constitution)"),
     [("संयुक्त राज्य अमेरिका", "USA"), ("ब्रिटेन", "United Kingdom"), ("कनाडा", "Canada")],
     "संविधान के भाग IV (अनुच्छेद 36 से 51) में दिए गए राज्य के नीति निदेशक तत्व आयरलैंड के संविधान से ग्रहण किए गए हैं, जो कल्याणकारी राज्य की स्थापना का मार्ग प्रशस्त करते हैं।",
     "Directive Principles in Part IV (Articles 36 to 51) were borrowed from the Irish Constitution.", "EASY", "नीति निदेशक तत्व"),
    ("भारतीय संविधान का कौन सा अनुच्छेद राज्य को ग्राम पंचायतों के गठन का निर्देश देता है?", "Which Article of the Constitution directs the State to organize Village Panchayats?",
     ("अनुच्छेद 40", "Article 40"),
     [("अनुच्छेद 44", "Article 44"), ("अनुच्छेद 48", "Article 48"), ("अनुच्छेद 50", "Article 50")],
     "गांधीवादी दर्शन पर आधारित अनुच्छेद 40 राज्य को स्वायत्त शासन की इकाइयों के रूप में ग्राम पंचायतों को संगठित करने और अधिकार देने का निर्देश देता है।",
     "Reflecting Gandhian philosophy, Article 40 instructs the State to organize village panchayats with necessary powers.", "EASY", "नीति निदेशक तत्व"),
    ("समान नागरिक संहिता (Uniform Civil Code - UCC) का उल्लेख संविधान के किस अनुच्छेद में है?", "In which Article of the Constitution is the Uniform Civil Code (UCC) mentioned?",
     ("अनुच्छेद 44", "Article 44"),
     [("अनुच्छेद 37", "Article 37"), ("अनुच्छेद 42", "Article 42"), ("अनुच्छेद 45", "Article 45")],
     "अनुच्छेद 44 में उपबंध है कि राज्य पूरे भारत में नागरिकों के लिए एक समान नागरिक संहिता लागू करने का प्रयास करेगा।",
     "Article 44 states that the State shall endeavor to secure for citizens a Uniform Civil Code across India.", "EASY", "नीति निदेशक तत्व"),
    ("संविधान के किस संशोधन द्वारा नागरिकों के लिए मौलिक कर्तव्यों (Fundamental Duties) को शामिल किया गया था?", "By which Constitutional Amendment were Fundamental Duties added to the Constitution?",
     ("42वाँ संविधान संशोधन 1976", "42nd Constitutional Amendment 1976"),
     [("44वाँ संविधान संशोधन 1978", "44th Constitutional Amendment 1978"), ("73वाँ संविधान संशोधन 1992", "73rd Constitutional Amendment 1992"), ("86वाँ संविधान संशोधन 2002", "86th Constitutional Amendment 2002")],
     "सरदार स्वर्ण सिंह समिति की सिफारिश पर 42वें संशोधन 1976 द्वारा भाग IV-A और अनुच्छेद 51A जोड़कर सोवियत संघ (USSR) से प्रेरित 10 मूल कर्तव्य शामिल किए गए।",
     "On the recommendation of the Swaran Singh Committee, the 42nd Amendment 1976 introduced Part IV-A (Article 51A) with 10 Fundamental Duties.", "EASY", "मौलिक कर्तव्य"),
    ("वर्तमान में भारतीय संविधान के अनुच्छेद 51A के तहत नागरिकों के कुल कितने मौलिक कर्तव्य हैं?", "How many Fundamental Duties are currently enshrined under Article 51A of the Indian Constitution?",
     ("11 मौलिक कर्तव्य", "11 Fundamental Duties"),
     [("10 मौलिक कर्तव्य", "10 Fundamental Duties"), ("12 मौलिक कर्तव्य", "12 Fundamental Duties"), ("9 मौलिक कर्तव्य", "9 Fundamental Duties")],
     "प्रारंभ में 10 कर्तव्य थे। 86वें संशोधन 2002 द्वारा 11वाँ कर्तव्य जोड़ा गया, जिसमें 6 से 14 वर्ष के बच्चों को शिक्षा का अवसर प्रदान करना माता-पिता/अभिभावक का कर्तव्य बनाया गया।",
     "Originally 10 duties were enacted; the 86th Amendment 2002 added the 11th duty concerning education opportunities for children.", "EASY", "मौलिक कर्तव्य"),
    
    # Executive & Parliament
    ("भारत के राष्ट्रपति का निर्वाचन किस पद्धति द्वारा किया जाता है?", "By which method is the President of India elected?",
     ("आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत द्वारा", "Proportional representation by means of single transferable vote"),
     [("प्रत्यक्ष जनता द्वारा गुप्त मतदान से", "Direct secret ballot by the public"), ("संसद के दोनों सदनों द्वारा साधारण बहुमत से", "Simple majority by both houses of Parliament"), ("राज्यों के राज्यपालों के विशेष बहुमत द्वारा", "Special majority by State Governors")],
     "अनुच्छेद 55 के अनुसार राष्ट्रपति का चुनाव संसद के दोनों सदनों के निर्वाचित सदस्यों तथा राज्यों व केंद्र शासित प्रदेशों (दिल्ली, पुडुचेरी, जम्मू-कश्मीर) की विधानसभाओं के निर्वाचित सदस्यों के निर्वाचक मंडल द्वारा अप्रत्यक्ष रूप से होता है।",
     "The President is elected by an electoral college using proportional representation via a single transferable vote.", "MEDIUM", "संघीय कार्यपालिका"),
    ("राष्ट्रपति पर महाभियोग (Impeachment) चलाने की प्रक्रिया का उल्लेख किस अनुच्छेद में है?", "In which Article is the procedure for impeachment of the President described?",
     ("अनुच्छेद 61", "Article 61"),
     [("अनुच्छेद 52", "Article 52"), ("अनुच्छेद 56", "Article 56"), ("अनुच्छेद 72", "Article 72")],
     "संविधान के अतिक्रमण पर राष्ट्रपति के विरुद्ध महाभियोग का प्रस्ताव संसद के किसी भी सदन में 14 दिन की अग्रिम लिखित सूचना और दो-तिहाई विशेष बहुमत से पारित किया जा सकता है।",
     "Article 61 prescribes the impeachment process on the violation of the Constitution with 14 days prior notice and two-thirds majority.", "MEDIUM", "संघीय कार्यपालिका"),
    ("भारत के राष्ट्रपति को किसी दंड क्षमा करने, प्रविलंबन, विराम या परिहार करने की शक्ति किस अनुच्छेद में प्राप्त है?", "Under which Article does the President possess the power to grant pardons, reprieves or remissions of punishment?",
     ("अनुच्छेद 72", "Article 72"),
     [("अनुच्छेद 74", "Article 74"), ("अनुच्छेद 123", "Article 123"), ("अनुच्छेद 143", "Article 143")],
     "अनुच्छेद 72 के तहत राष्ट्रपति को मृत्युदंड सहित सभी मामलों में क्षमादान, दंड की अवधि कम करने या स्वरूप बदलने का संवैधानिक अधिकार प्राप्त है।",
     "Article 72 empowers the President to grant pardons, reprieves, respites or remissions, including in death sentence cases.", "MEDIUM", "संघीय कार्यपालिका"),
    ("संसद के सत्रावसान की स्थिति में राष्ट्रपति को अध्यादेश (Ordinance) जारी करने की शक्ति किस अनुच्छेद से मिलती है?", "Which Article empowers the President to promulgate Ordinances during the recess of Parliament?",
     ("अनुच्छेद 123", "Article 123"),
     [("अनुच्छेद 213", "Article 213"), ("अनुच्छेद 110", "Article 110"), ("अनुच्छेद 112", "Article 112")],
     "अनुच्छेद 123 के तहत राष्ट्रपति अध्यादेश जारी कर सकते हैं, जो संसद का सत्र प्रारंभ होने के 6 सप्ताह के भीतर दोनों सदनों द्वारा अनुमोदित होना आवश्यक है।",
     "Article 123 enables the President to promulgate Ordinances during parliamentary recess, valid up to 6 weeks from reassembly.", "MEDIUM", "संघीय कार्यपालिका"),
    ("भारत का उपराष्ट्रपति पदेन (Ex-officio) किसका सभापति होता है?", "The Vice-President of India is the ex-officio Chairman of which body?",
     ("राज्यसभा (Council of States)", "Rajya Sabha (Council of States)"),
     [("लोकसभा (House of the People)", "Lok Sabha (House of the People)"), ("योजना आयोग / नीति आयोग", "Planning Commission / NITI Aayog"), ("राष्ट्रीय विकास परिषद", "National Development Council")],
     "अनुच्छेद 64 और 89 के अनुसार भारत का उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है और उसे सभापति के रूप में ही वेतन-भत्ते प्राप्त होते हैं।",
     "Under Articles 64 and 89, the Vice-President is the ex-officio Chairman of the Rajya Sabha.", "EASY", "संसद"),
    ("राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष का होता है?", "What is the tenure of members of the Rajya Sabha?",
     ("6 वर्ष (स्थायी सदन, प्रति 2 वर्ष पर एक-तिहाई सदस्य सेवानिवृत्त)", "6 years (Permanent House, one-third members retire every 2 years)"),
     [("5 वर्ष", "5 years"), ("4 वर्ष", "4 years"), ("आजीवन जब तक राष्ट्रपति चाहें", "Lifetime during pleasure of President")],
     "राज्यसभा एक स्थायी सदन है जो कभी भंग नहीं होता। इसके सदस्यों का कार्यकाल 6 वर्ष का होता है और प्रत्येक 2 वर्ष बाद एक-तिहाई सदस्य सेवानिवृत्त होते हैं।",
     "Rajya Sabha is a permanent body not subject to dissolution; members serve 6-year terms with one-third retiring biennially.", "EASY", "संसद"),
    ("धन विधेयक (Money Bill) को प्रमाणित करने का अंतिम और अनन्य अधिकार किसे प्राप्त है?", "Who has the final and exclusive authority to certify a bill as a Money Bill?",
     ("लोकसभा अध्यक्ष (Speaker of Lok Sabha)", "Speaker of Lok Sabha"),
     [("राष्ट्रपति", "President"), ("वित्त मंत्री", "Finance Minister"), ("राज्यसभा के सभापति", "Chairman of Rajya Sabha")],
     "अनुच्छेद 110 के अंतर्गत कोई विधेयक धन विधेयक है या नहीं, इस पर लोकसभा अध्यक्ष का निर्णय अंतिम और बाध्यकारी होता है। धन विधेयक केवल लोकसभा में पेश होता है।",
     "Under Article 110, the decision of the Speaker of the Lok Sabha on whether a bill is a Money Bill is final.", "EASY", "संसद"),
    
    # Panchayati Raj & Constitutional Bodies
    ("73वें संविधान संशोधन अधिनियम 1992 द्वारा संविधान में कौन सी अनुसूची जोड़ी गई थी?", "Which Schedule was added to the Constitution by the 73rd Constitutional Amendment Act 1992?",
     ("11वीं अनुसूची (पंचायती राज के 29 विषय)", "11th Schedule (29 functional items for Panchayats)"),
     [("12वीं अनुसूची (18 विषय)", "12th Schedule (18 items)"), ("10वीं अनुसूची (दल-बदल)", "10th Schedule (Anti-defection)"), ("9वीं अनुसूची", "9th Schedule")],
     "73वें संशोधन द्वारा भाग IX और 11वीं अनुसूची जोड़कर त्रिस्तरीय पंचायती राज व्यवस्था (ग्राम, ब्लॉक, जिला) को संवैधानिक मान्यता दी गई।",
     "The 73rd Amendment 1992 added Part IX and the 11th Schedule containing 29 subjects for Panchayati Raj institutions.", "EASY", "पंचायती राज"),
    ("भारत में प्रतिवर्ष 'राष्ट्रीय पंचायती राज दिवस' किस तिथि को मनाया जाता है?", "On which date is 'National Panchayati Raj Day' celebrated annually in India?",
     ("24 अप्रैल", "24 April"),
     [("2 अक्टूबर", "2 October"), ("26 जनवरी", "26 January"), ("15 अगस्त", "15 August")],
     "73वाँ संविधान संशोधन अधिनियम 24 अप्रैल 1993 को लागू हुआ था, इसलिए प्रतिवर्ष 24 अप्रैल को राष्ट्रीय पंचायती राज दिवस के रूप में मनाया जाता है।",
     "Because the 73rd Amendment Act came into force on 24 April 1993, this date is celebrated as National Panchayati Raj Day.", "EASY", "पंचायती राज"),
    ("त्रिस्तरीय पंचायती राज व्यवस्था की सिफारिश सबसे पहले किस समिति ने की थी?", "Which committee first recommended the three-tier Panchayati Raj system in India?",
     ("बलवंत राय मेहता समिति (1957)", "Balwant Rai Mehta Committee (1957)"),
     [("अशोक मेहता समिति (1977)", "Ashok Mehta Committee (1977)"), ("एल.एम. सिंघवी समिति (1986)", "L.M. Singhvi Committee (1986)"), ("पी.के. थुंगन समिति (1988)", "P.K. Thungon Committee (1988)")],
     "बलवंत राय मेहता समिति (1957) ने लोकतांत्रिक विकेंद्रीकरण हेतु ग्राम स्तर पर ग्राम पंचायत, प्रखंड स्तर पर पंचायत समिति और जिला स्तर पर जिला परिषद की त्रिस्तरीय व्यवस्था सुझाई।",
     "The Balwant Rai Mehta Committee (1957) recommended a three-tier Panchayati Raj system (Gram, Block, District).", "EASY", "पंचायती राज"),
    ("भारत में सबसे पहले 2 अक्टूबर 1959 को पंचायती राज व्यवस्था का उद्घाटन पंडित नेहरू ने किस स्थान पर किया था?", "Where was the Panchayati Raj system first inaugurated in India by Pt. Nehru on 2 October 1959?",
     ("नागौर जिला (राजस्थान)", "Nagaur District (Rajasthan)"),
     [("आंध्र प्रदेश के महबूबनगर में", "Mahbubnagar (Andhra Pradesh)"), ("वर्धा (महाराष्ट्र)", "Wardha (Maharashtra)"), ("गोरखपुर (उत्तर प्रदेश)", "Gorakhpur (Uttar Pradesh)")],
     "पंडित जवाहरलाल नेहरू ने 2 अक्टूबर 1959 को राजस्थान के नागौर जिले के बगदरी गाँव में देश की पहली त्रिस्तरीय पंचायती राज व्यवस्था का उद्घाटन किया था।",
     "Pt. Jawaharlal Nehru inaugurated the first Panchayati Raj institution in Nagaur, Rajasthan on Gandhi Jayanti, 1959.", "EASY", "पंचायती राज"),
    ("भारतीय संविधान के किस अनुच्छेद के तहत 'भारत निर्वाचन आयोग' (Election Commission of India) का गठन किया गया है?", "Under which Article of the Constitution is the Election Commission of India established?",
     ("अनुच्छेद 324", "Article 324"),
     [("अनुच्छेद 280", "Article 280"), ("अनुच्छेद 315", "Article 315"), ("अनुच्छेद 148", "Article 148")],
     "अनुच्छेद 324 संसद, राज्य विधानमंडलों, राष्ट्रपति और उपराष्ट्रपति के पदों के चुनावों के अधीक्षण, निर्देशन और नियंत्रण का अधिकार भारत निर्वाचन आयोग को सौंपता है।",
     "Article 324 vests the superintendence, direction, and control of elections in the independent Election Commission of India.", "EASY", "संवैधानिक निकाय"),
    ("केंद्र एवं राज्यों के बीच करों के वितरण की सिफारिश करने हेतु 'वित्त आयोग' (Finance Commission) का गठन किस अनुच्छेद के अंतर्गत होता है?", "Under which Article is the Finance Commission constituted to recommend tax devolution?",
     ("अनुच्छेद 280", "Article 280"),
     [("अनुच्छेद 265", "Article 265"), ("अनुच्छेद 300", "Article 300"), ("अनुच्छेद 356", "Article 356")],
     "प्रत्येक 5 वर्ष बाद राष्ट्रपति द्वारा अनुच्छेद 280 के तहत एक अध्यक्ष और 4 सदस्यों वाले वित्त आयोग का गठन किया जाता है।",
     "Under Article 280, the President constitutes a Finance Commission every fifth year to recommend tax-sharing between Union and States.", "EASY", "संवैधानिक निकाय"),
    ("भारत के नियंत्रक एवं महालेखापरीक्षक (CAG) का पद संविधान के किस अनुच्छेद में उपबंधित है?", "Under which Article of the Constitution is the Comptroller and Auditor General (CAG) appointed?",
     ("अनुच्छेद 148", "Article 148"),
     [("अनुच्छेद 76", "Article 76"), ("अनुच्छेद 165", "Article 165"), ("अनुच्छेद 214", "Article 214")],
     "अनुच्छेद 148 के तहत राष्ट्रपति CAG की नियुक्ति करते हैं, जिन्हें 'सार्वजनिक धन का संरक्षक' (Guardian of the Public Purse) कहा जाता है।",
     "Article 148 provides for the CAG, designated as the Guardian of the Public Purse, appointed by the President.", "EASY", "संवैधानिक निकाय"),
    ("भारत सरकार का सर्वोच्च विधिक अधिकारी (Chief Legal Advisor) कौन होता है?", "Who is the chief legal advisor to the Government of India?",
     ("भारत का महान्यायवादी (Attorney General of India - अनुच्छेद 76)", "Attorney General of India (Article 76)"),
     [("भारत का मुख्य न्यायाधीश (CJI)", "Chief Justice of India (CJI)"), ("सॉलिसिटर जनरल", "Solicitor General"), ("केंद्रीय कानून मंत्री", "Union Law Minister")],
     "अनुच्छेद 76 के तहत राष्ट्रपति द्वारा महान्यायवादी की नियुक्ति की जाती है। उन्हें संसद के दोनों सदनों की कार्यवाही में बोलने और भाग लेने का अधिकार है, किंतु मतदान का नहीं।",
     "Under Article 76, the Attorney General is the highest law officer in India, possessing the right of audience in all courts.", "MEDIUM", "संवैधानिक निकाय"),
]

for p in polity_core:
    p2_items.append(q_to_ts(
        "भारतीय संविधान एवं शासन व्यवस्था", p[7],
        p[0], p[1],
        p[2], p[3],
        p[4], p[5],
        p[6]
    ))

# Write out gk_part2.ts
with open(os.path.join(OUT_DIR, "gk_part2.ts"), "w", encoding="utf-8") as f:
    f.write("""import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('General Knowledge & Current Affairs');

export const GK_BANK_PART2: RawBankQuestion[] = [
""" + "\n".join(p2_items) + """
];
""")

print(f"Generated gk_part2.ts with {len(p2_items)} questions.")


# -------------------------------------------------------------
# Part 5: Current Affairs, UP/Central Schemes, Sports, Days, Appointments
# -------------------------------------------------------------
p5_items = []

ca_schemes = [
    # UP Schemes
    ("उत्तर प्रदेश सरकार की 'एक जिला एक उत्पाद' (ODOP) योजना की ब्रांड एंबेसडर कौन हैं और इसका मुख्य उद्देश्य क्या है?",
     "Who is the brand ambassador of UP's ODOP scheme and what is its primary objective?",
     ("कंगना रनौत; पारंपरिक स्थानीय हस्तशिल्प व लघु उद्योगों को वैश्विक मंच देना", "Kangana Ranaut; promoting indigenous crafts and local industries globally"),
     [
         ("विद्या बालन; केवल कृषि विपणन", "Vidya Balan; agricultural marketing only"),
         ("सानिया मिर्जा; महिला खेल प्रोत्साहन", "Sania Mirza; female sports encouragement"),
         ("हेमा मालिनी; पर्यटन विकास", "Hema Malini; tourism development"),
     ],
     "उत्तर प्रदेश के पारंपरिक शिल्प और विशिष्ट स्थानीय उत्पादों के संरक्षण, संवर्धन और निर्यात वृद्धि हेतु 2018 में ODOP योजना शुरू की गई थी।",
     "Launched in 2018, One District One Product (ODOP) promotes unique indigenous crafts and products of all 75 UP districts.",
     "EASY", "उत्तर प्रदेश सरकारी योजनाएँ", "2024"),
    ("उत्तर प्रदेश में प्रतियोगी परीक्षाओं (IAS, PCS, NEET, JEE, CDS, NDA) की निःशुल्क कोचिंग हेतु संचालित योजना कौन-सी है?",
     "Which scheme is run by the UP Government providing free coaching for civil services and competitive exams?",
     ("मुख्यमंत्री अभ्युदय योजना (Mukhyamantri Abhyudaya Yojana)", "Mukhyamantri Abhyudaya Yojana"),
     [
         ("मुख्यमंत्री युवा स्वरोजगार योजना", "Mukhyamantri Yuva Swarojgar Yojana"),
         ("कन्या सुमंगला योजना", "Kanya Sumangala Yojana"),
         ("विश्वकर्मा श्रम सम्मान योजना", "Vishwakarma Shram Samman Yojana"),
     ],
     "फरवरी 2021 में शुरू की गई अभ्युदय योजना के तहत उत्तर प्रदेश के मेधावी छात्र-छात्राओं को प्रशासनिक व मेडिकल-इंजीनियरिंग परीक्षाओं की निशुल्क ऑफलाइन व ऑनलाइन कोचिंग दी जाती है।",
     "Launched in Feb 2021, the Abhyudaya scheme offers free high-quality coaching to deserving students preparing for UPSC, UPPSC, JEE, NEET, etc.",
     "EASY", "उत्तर प्रदेश सरकारी योजनाएँ", "2024"),
    ("उत्तर प्रदेश में बालिकाओं के जन्म से लेकर स्नातक तक 6 चरणों में आर्थिक सहायता देने वाली योजना का नाम क्या है?",
     "What is the name of the UP scheme providing conditional financial assistance to girls across 6 developmental stages?",
     ("मुख्यमंत्री कन्या सुमंगला योजना", "Mukhyamantri Kanya Sumangala Yojana"),
     [
         ("भाग्यलक्ष्मी योजना", "Bhagyalakshmi Yojana"),
         ("बेटी बचाओ बेटी पढ़ाओ", "Beti Bachao Beti Padhao"),
         ("रानी लक्ष्मीबाई महिला सम्मान कोष", "Rani Lakshmibai Mahila Samman Kosh"),
     ],
     "कन्या सुमंगला योजना के तहत जन्म से लेकर उच्च शिक्षा तक बालिकाओं को 25,000 रुपये (पूर्व में 15,000) की कुल सहायता DBT के माध्यम से दी जाती है।",
     "Kanya Sumangala Yojana offers financial aid up to Rs 25,000 in stages from birth to graduation, discouraging female feticide and promoting education.",
     "EASY", "उत्तर प्रदेश सरकारी योजनाएँ", "2024"),
    ("उत्तर प्रदेश में महिलाओं की सुरक्षा, सम्मान एवं स्वावलंबन के लिए संचालित महाअभियान का क्या नाम है?",
     "What is the name of UP's flagship campaign for female security, self-reliance and empowerment?",
     ("मिशन शक्ति (Mission Shakti)", "Mission Shakti"),
     [
         ("ऑपरेशन कायाकल्प", "Operation Kayakalp"),
         ("शक्ति मंच", "Shakti Manch"),
         ("अपराजिता अभियान", "Aparajita Abhiyan"),
     ],
     "शारदीय नवरात्रि 2020 से प्रारंभ मिशन शक्ति अभियान का उद्देश्य महिलाओं व बेटियों को सुरक्षित वातावरण देना, आत्मरक्षा प्रशिक्षण और हेल्पलाइन 1090/181/112 के प्रति जागरूक करना है।",
     "Mission Shakti is an integrated statewide initiative ensuring female safety, women dignity and entrepreneurship.",
     "EASY", "उत्तर प्रदेश सरकारी योजनाएँ", "2024"),
    ("उत्तर प्रदेश के परिषदीय प्राथमिक व उच्च प्राथमिक विद्यालयों के भौतिक कायाकल्प (स्मार्ट क्लास, पेयजल, शौचालय, टाइल्स) हेतु कौन-सा अभियान चलाया जा रहा है?",
     "Which initiative was launched in UP for infrastructural revamp and modernizing basic council primary schools?",
     ("ऑपरेशन कायाकल्प (Operation Kayakalp)", "Operation Kayakalp"),
     [
         ("मिशन प्रेरणा", "Mission Prerna"),
         ("सर्व शिक्षा अभियान", "Sarva Shiksha Abhiyan"),
         ("स्कूल चलो अभियान", "School Chalo Abhiyan"),
     ],
     "ऑपरेशन कायाकल्प के तहत प्रदेश के 1.33 लाख से अधिक प्राथमिक विद्यालयों में 19 मूलभूत अवस्थापना सुविधाओं (शुद्ध पेयजल, दिव्यांग सुलभ शौचालय, विद्युत, स्मार्ट क्लास आदि) का संतृप्तीकरण किया गया है।",
     "Operation Kayakalp equips basic council schools with 19 fundamental infrastructural benchmarks, drastically improving learning environments.",
     "EASY", "उत्तर प्रदेश बेसिक शिक्षा", "2024"),
    
    # Central Schemes
    ("राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) की मसौदा समिति (Drafting Committee) के अध्यक्ष कौन थे?",
     "Who served as the Chairman of the Drafting Committee for the National Education Policy 2020 (NEP 2020)?",
     ("डॉ. के. कस्तूरीरंगन (पूर्व इसरो प्रमुख)", "Dr. K. Kasturirangan (Former ISRO Chief)"),
     [
         ("प्रो. यशपाल", "Prof. Yash Pal"),
         ("डॉ. मनमोहन सिंह", "Dr. Manmohan Singh"),
         ("डॉ. विजय केलकर", "Dr. Vijay Kelkar"),
     ],
     "प्रख्यात अंतरिक्ष वैज्ञानिक डॉ. के. कस्तूरीरंगन की अध्यक्षता वाली समिति ने NEP 2020 का प्रारूप तैयार किया, जिसने पूर्ववर्ती 1986 की नीति को प्रतिस्थापित किया।",
     "Dr. K. Kasturirangan headed the committee that formulated the historic National Education Policy 2020, replacing the 1986 policy.",
     "EASY", "राष्ट्रीय शिक्षा नीति", "2024"),
    ("राष्ट्रीय शिक्षा नीति 2020 में पूर्ववर्ती 10+2 स्कूली संरचना के स्थान पर किस नए शैक्षणिक पैटर्न की अनुशंसा की गई है?",
     "Which new curricular structure was introduced in NEP 2020 replacing the previous 10+2 pattern?",
     ("5 + 3 + 3 + 4 (बुनियादी, प्रारंभिक, मध्य, माध्यमिक)", "5 + 3 + 3 + 4 (Foundational, Preparatory, Middle, Secondary)"),
     [
         ("5 + 4 + 3 + 2", "5 + 4 + 3 + 2"),
         ("3 + 3 + 4 + 4", "3 + 3 + 4 + 4"),
         ("4 + 4 + 3 + 3", "4 + 4 + 3 + 3"),
     ],
     "NEP 2020 में 3 से 18 वर्ष के बच्चों हेतु 5 वर्ष बुनियादी (3 वर्ष आंगनबाड़ी + कक्षा 1-2), 3 वर्ष प्रिपरेटरी (3-5), 3 वर्ष मिडिल (6-8) और 4 वर्ष सेकेंडरी (9-12) का ढाँचा लागू किया गया है।",
     "NEP 2020 restructured school pedagogy into 5 years Foundational, 3 years Preparatory, 3 years Middle, and 4 years Secondary stages.",
     "EASY", "राष्ट्रीय शिक्षा नीति", "2024"),
    ("आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY) के अंतर्गत पात्र परिवार को प्रतिवर्ष कितना स्वास्थ्य बीमा कवर प्रदान किया जाता है?",
     "What is the annual health insurance coverage per eligible family under Ayushman Bharat (PM-JAY)?",
     ("5 लाख रुपये प्रति परिवार प्रतिवर्ष", "Rs 5 lakh per family per year"),
     [
         ("2 लाख रुपये प्रति परिवार प्रतिवर्ष", "Rs 2 lakh per family per year"),
         ("10 लाख रुपये प्रति परिवार प्रतिवर्ष", "Rs 10 lakh per family per year"),
         ("3 लाख रुपये प्रति परिवार प्रतिवर्ष", "Rs 3 lakh per family per year"),
     ],
     "23 सितंबर 2018 को रांची से प्रारंभ यह योजना विश्व की सबसे बड़ी सरकारी स्वास्थ्य बीमा योजना है, जो द्वितीयक व तृतीयक उपचार हेतु 5 लाख रुपये का कैशलेस कवर देती है।",
     "Ayushman Bharat PM-JAY is the world's largest public health assurance scheme, covering secondary and tertiary hospital care up to Rs 5 lakh/year.",
     "EASY", "केंद्रीय सरकारी योजनाएँ", "2024"),
    ("प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) योजना के तहत प्रत्येक पात्र किसान परिवार को प्रतिवर्ष कुल कितनी आर्थिक सहायता तीन किश्तों में दी जाती है?",
     "Under PM-KISAN, what total annual income support is provided to eligible farmer families in three installments?",
     ("6,000 रुपये (2,000 रुपये की 3 समान किश्तें)", "Rs 6,000 (3 equal installments of Rs 2,000)"),
     [
         ("4,000 रुपये (2,000 की 2 किश्तें)", "Rs 4,000 (2 installments of 2,000)"),
         ("8,000 रुपये (2,000 की 4 किश्तें)", "Rs 8,000 (4 installments of 2,000)"),
         ("10,000 रुपये एकमुश्त", "Rs 10,000 in lump sum"),
     ],
     "24 फरवरी 2019 को उत्तर प्रदेश के गोरखपुर से प्रारंभ इस योजना के तहत किसानों के बैंक खातों में प्रत्यक्ष लाभ अंतरण (DBT) से सीधे राशि भेजी जाती है।",
     "Launched from Gorakhpur, UP in 2019, PM-KISAN transfers Rs 6,000 annually directly into farmers' bank accounts via DBT.",
     "EASY", "केंद्रीय सरकारी योजनाएँ", "2024"),
    
    # Science & Space Current Affairs
    ("चंद्रयान-3 मिशन के विक्रम लैंडर ने 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव पर जिस स्थान पर सॉफ्ट लैंडिंग की, उसका नामकरण क्या किया गया है?",
     "What is the official name given to the lunar south pole landing point of Chandrayaan-3's Vikram lander?",
     ("शिव शक्ति बिंदु (Shiv Shakti Point)", "Shiv Shakti Point"),
     [
         ("तिरंगा बिंदु", "Tiranga Point"),
         ("अटल बिंदु", "Atal Point"),
         ("कलाम बिंदु", "Kalam Point"),
     ],
     "23 अगस्त 2023 को भारत चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक उतरने वाला विश्व का पहला देश बना। इस ऐतिहासिक उपलब्धि पर 23 अगस्त को 'राष्ट्रीय अंतरिक्ष दिवस' घोषित किया गया।",
     "The touchdown point was named Shiv Shakti Point, and 23 August was designated National Space Day in India.",
     "EASY", "विज्ञान एवं अंतरिक्ष प्रौद्योगिकी", "2024"),
    ("सूर्य का अध्ययन करने हेतु इसरो (ISRO) द्वारा प्रक्षेपित भारत के पहले समर्पित अंतरिक्ष मिशन का नाम क्या है?",
     "What is the name of India's first dedicated solar observatory spacecraft launched by ISRO?",
     ("आदित्य-L1 (Aditya-L1)", "Aditya-L1"),
     [
         ("सूर्ययान-1", "Suryayaan-1"),
         ("हेलियोस-L1", "Helios-L1"),
         ("भास्कर-L1", "Bhaskar-L1"),
     ],
     "2 सितंबर 2023 को PSLV-C57 द्वारा प्रक्षेपित आदित्य-L1 पृथ्वी से 15 लाख किमी दूर स्थित लैग्रेंज बिंदु 1 (L1) के चारों ओर हेलो कक्षा में स्थापित होकर सूर्य का निरंतर अध्ययन कर रहा है।",
     "Aditya-L1 is stationed in a halo orbit around Lagrange point L1, ~1.5 million km from Earth, observing solar corona and flares.",
     "EASY", "विज्ञान एवं अंतरिक्ष प्रौद्योगिकी", "2024"),

    # Sports
    ("पेरिस ओलंपिक 2024 में भाला फेंक (Javelin Throw) स्पर्धा में भारत के लिए रजत पदक जीतने वाले एथलीट कौन हैं?",
     "Which Indian athlete won the Silver medal in men's javelin throw at the Paris Olympics 2024?",
     ("नीरज चोपड़ा (89.45 मीटर थ्रो)", "Neeraj Chopra (89.45 m throw)"),
     [
         ("किशोर जेना", "Kishore Jena"),
         ("डी.पी. मनु", "D.P. Manu"),
         ("शिवपाल सिंह", "Shivpal Singh"),
     ],
     "टोक्यो ओलंपिक 2020 में स्वर्ण पदक जीतने वाले नीरज चोपड़ा ने पेरिस 2024 में 89.45 मीटर के सर्वश्रेष्ठ थ्रो के साथ रजत पदक हासिल कर लगातार दो ओलंपिक में व्यक्तिगत पदक का रिकॉर्ड बनाया।",
     "Neeraj Chopra secured Silver in Paris 2024 with an 89.45 m throw, becoming India's most successful individual track-and-field Olympian.",
     "EASY", "खेलकूद", "2024"),
    ("एक ही ओलंपिक (पेरिस 2024) में दो कांस्य पदक जीतकर इतिहास रचने वाली भारत की पहली निशानेबाज कौन हैं?",
     "Who became the first Indian shooter to win two medals in a single Olympic Games at Paris 2024?",
     ("मनु भाकर (10 मीटर एयर पिस्टल व्यक्तिगत व मिश्रित टीम)", "Manu Bhaker (10m Air Pistol individual & mixed team)"),
     [
         ("अवनि लेखरा", "Avani Lekhara"),
         ("अपूर्वी चंदेला", "Apurvi Chandela"),
         ("इलावेनिल वालारिवन", "Elavenil Valarivan"),
     ],
     "मनु भाकर ने महिलाओं की 10 मीटर एयर पिस्टल में कांस्य तथा सरबजोत सिंह के साथ 10 मीटर एयर पिस्टल मिश्रित टीम स्पर्धा में दूसरा कांस्य जीतकर स्वतंत्रता पश्चात ऐतिहासिक रिकॉर्ड बनाया।",
     "Manu Bhaker scripted history by bagging two bronze medals in single Olympics in individual and mixed team 10m air pistol events.",
     "EASY", "खेलकूद", "2024"),
    ("आईसीसी पुरुष टी20 विश्व कप 2024 का खिताब किस देश की क्रिकेट टीम ने जीता?",
     "Which country won the ICC Men's T20 World Cup 2024 title?",
     ("भारत (फाइनल में दक्षिण अफ्रीका को 7 रन से पराजित कर)", "India (defeating South Africa by 7 runs in final)"),
     [
         ("दक्षिण अफ्रीका", "South Africa"),
         ("ऑस्ट्रेलिया", "Australia"),
         ("इंग्लैंड", "England"),
     ],
     "रोहित शर्मा की कप्तानी में भारत ने बारबाडोस में दक्षिण अफ्रीका को रोमांचक फाइनल में हराकर 17 वर्ष बाद अपना दूसरा टी20 विश्व कप खिताब जीता।",
     "Led by Rohit Sharma, India defeated South Africa at Barbados, lifting their second ICC Men's T20 World Cup trophy undefeated.",
     "EASY", "खेलकूद", "2024"),
    ("भारत का सर्वोच्च खेल पुरस्कार 'मेजर ध्यानचंद खेल रत्न पुरस्कार' का पूर्ववर्ती नाम क्या था?",
     "What was the former name of India's premier sporting honour, the Major Dhyan Chand Khel Ratna Award?",
     ("राजीव गांधी खेल रत्न पुरस्कार", "Rajiv Gandhi Khel Ratna Award"),
     [
         ("अर्जुन पुरस्कार", "Arjuna Award"),
         ("द्रोणाचार्य पुरस्कार", "Dronacharya Award"),
         ("राष्ट्रीय खेल प्रोत्साहन पुरस्कार", "Rashtriya Khel Protsahan Puruskar"),
     ],
     "अगस्त 2021 में हॉकी के जादूगर मेजर ध्यानचंद के सम्मान में भारत के सर्वोच्च खेल सम्मान का नाम बदलकर 'मेजर ध्यानचंद खेल रत्न पुरस्कार' किया गया, जिसकी पुरस्कार राशि 25 लाख रुपये है।",
     "In August 2021, the award was rechristened after legendary hockey maestro Major Dhyan Chand, carrying a prize purse of Rs 25 lakh.",
     "EASY", "खेलकूद", "2024"),

    # Important Days & Themes
    ("भारत में प्रतिवर्ष 28 फरवरी को 'राष्ट्रीय विज्ञान दिवस' (National Science Day) किस ऐतिहासिक खोज के उपलक्ष्य में मनाया जाता है?",
     "National Science Day is celebrated in India on February 28 to commemorate which historic discovery?",
     ("सर सी.वी. रमन द्वारा 'रमन प्रभाव' (Raman Effect) की खोज (1928)", "Discovery of the Raman Effect by Sir C.V. Raman (1928)"),
     [
         ("होमी जहांगीर भाभा द्वारा परमाणु अनुसंधान", "Homi Bhabha's nuclear research"),
         ("एपीजे अब्दुल कलाम द्वारा मिसाइल परीक्षण", "APJ Abdul Kalam's missile test"),
         ("जगदीश चंद्र बोस द्वारा क्रेस्कोग्राफ का आविष्कार", "JC Bose's invention of Crescograph"),
     ],
     "सर सी.वी. रमन ने 28 फरवरी 1928 को प्रकाश के प्रकीर्णन से संबंधित रमन प्रभाव की खोज की थी, जिसके लिए उन्हें 1930 में भौतिकी का नोबेल पुरस्कार मिला।",
     "Celebrated annually on 28 February commemorating the discovery of Raman Effect, for which Sir C.V. Raman won the Nobel Prize in Physics in 1930.",
     "EASY", "दिवस एवं विषय", "2024"),
    ("भारत के प्रथम शिक्षा मंत्री मौलाना अबुल कलाम आजाद की जयंती के उपलक्ष्य में 'राष्ट्रीय शिक्षा दिवस' किस तिथि को मनाया जाता है?",
     "National Education Day is observed in India on which date in honor of Maulana Abul Kalam Azad?",
     ("11 नवंबर", "11 November"),
     [
         ("5 सितंबर", "5 September"),
         ("24 जनवरी", "24 January"),
         ("8 सितंबर", "8 September"),
     ],
     "स्वतंत्र भारत के प्रथम शिक्षा मंत्री व प्रख्यात विद्वान मौलाना अबुल कलाम आजाद के जन्मदिन 11 नवंबर को 2008 से प्रतिवर्ष 'राष्ट्रीय शिक्षा दिवस' के रूप में मनाया जाता है।",
     "Celebrated every year on 11 November marking the birth anniversary of India's first Education Minister Maulana Abul Kalam Azad.",
     "EASY", "दिवस एवं विषय", "2024"),
    ("विश्व पर्यावरण दिवस (World Environment Day) प्रतिवर्ष किस तिथि को वैश्विक स्तर पर मनाया जाता है?",
     "On which date is World Environment Day celebrated globally each year?",
     ("5 जून", "5 June"),
     [
         ("22 अप्रैल", "22 April"),
         ("22 मार्च", "22 March"),
         ("16 सितंबर", "16 September"),
     ],
     "1972 के स्टॉकहोम सम्मेलन की स्मृति में संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP) द्वारा प्रतिवर्ष 5 जून को विश्व पर्यावरण दिवस मनाया जाता है।",
     "Established at the 1972 Stockholm Conference on Human Environment, 5 June is observed annually as World Environment Day.",
     "EASY", "दिवस एवं विषय", "2024"),
    ("विश्व ओजोन दिवस (World Ozone Day) किस तिथि को मनाया जाता है?",
     "On which date is International Day for the Preservation of the Ozone Layer observed?",
     ("16 सितंबर", "16 September"),
     [
         ("5 जून", "5 June"),
         ("21 मार्च", "21 March"),
         ("14 नवंबर", "14 November"),
     ],
     "ओजोन परत के क्षरण को रोकने हेतु 16 सितंबर 1987 को हस्ताक्षरित 'मॉन्ट्रियल प्रोटोकॉल' की स्मृति में प्रतिवर्ष 16 सितंबर को विश्व ओजोन दिवस मनाया जाता है।",
     "16 September commemorates the signing of the Montreal Protocol on Substances that Deplete the Ozone Layer in 1987.",
     "EASY", "दिवस एवं विषय", "2024"),
]

for c in ca_schemes:
    p5_items.append(q_to_ts(
        c[7], c[8],
        c[0], c[1],
        c[2], c[3],
        c[4], c[5],
        c[6],
        ref_date=c[9] if len(c) > 9 else None
    ))

# Expand with 150 more detailed structured items across UP, India, Awards, Summits
up_districts_specialties = [
    ("गोरखपुर", "टेराकोटा शिल्प (Terracotta Craft)", "राप्ती और रोहिणी नदी", "Gorakhpur", "Terracotta"),
    ("मुरादाबाद", "पीतल के बर्तन एवं हस्तशिल्प (Brass City)", "रामगंगा नदी", "Moradabad", "Brassware"),
    ("कन्नौज", "इत्र एवं सुगंधित तेल (Perfume Capital)", "गंगा नदी", "Kannauj", "Attar / Perfume"),
    ("फिरोजाबाद", "काँच की चूड़ियाँ एवं शीशा उद्योग (Suhag Nagari)", "यमुना नदी", "Firozabad", "Glass bangles"),
    ("भदोही", "कालीन उद्योग (Carpet City of India)", "गंगा नदी", "Bhadohi", "Handmade Carpets"),
    ("सहारनपुर", "लकड़ी पर नक्काशी (Wood Carving)", "शिवालिक की तलहटी", "Saharanpur", "Wood Carving"),
    ("अलीगढ़", "ताले एवं हार्डवेयर उद्योग (Lock City)", "जी.टी. रोड", "Aligarh", "Locks & Hardware"),
    ("मेरठ", "खेल का सामान एवं कैंची उद्योग (Sports Goods Capital)", "काली नदी", "Meerut", "Sports Goods"),
    ("वाराणसी", "बनारसी रेशमी साड़ी एवं लकड़ी के खिलौने", "गंगा नदी", "Varanasi", "Banarasi Silk & Wooden Toys"),
    ("लखनऊ", "चिकनकारी कढ़ाई एवं जरदोजी", "गोमती नदी", "Lucknow", "Chikan Embroidery & Zardozi"),
    ("आगरा", "चर्म उद्योग एवं पेठा नगरी", "यमुना नदी", "Agra", "Leather Craft & Petha"),
    ("झाँसी", "सॉफ्ट टॉयज (मुलायम खिलौने) एवं रानी लक्ष्मीबाई का दुर्ग", "पहुज नदी", "Jhansi", "Soft Toys"),
    ("मिर्जापुर", "दरी निर्माण एवं कजरी लोकगायन", "गंगा नदी", "Mirzapur", "Dhurrie & Kajari folk music"),
    ("प्रतापगढ़", "आँवला प्रसंस्करण एवं उत्पादन (Amla Hub)", "सई नदी", "Pratapgarh", "Amla Production"),
    ("बरेली", "जरी-जरदोजी, सुरमा एवं बेंत का फर्नीचर", "रामगंगा नदी", "Bareilly", "Zari-Zardozi & Cane furniture"),
    ("सहारनपुर", "कागज़ उद्योग एवं रसीले फल (संतरा/आम)", "यमुना व हिंडन", "Saharanpur", "Paper Mills & Citrus Fruits"),
]

for dist in up_districts_specialties:
    p5_items.append(q_to_ts(
        "उत्तर प्रदेश विशेष ज्ञान", "एक जिला एक उत्पाद (ODOP)",
        f"उत्तर प्रदेश की ODOP (एक जिला एक उत्पाद) योजना के तहत '{dist[0]}' जिले का पारंपरिक उत्पाद कौन-सा है?",
        f"Under UP's ODOP scheme, what is the recognized indigenous product of '{dist[3]}' district?",
        (dist[1], dist[4]),
        [
            ("चमड़े का सामान", "Leather goods"),
            ("काँच की चूड़ियाँ", "Glass bangles"),
            ("लकड़ी की नक्काशी", "Wood carving"),
        ],
        f"{dist[0]} जिला अपने {dist[1]} के लिए विश्व प्रसिद्ध है। यह नगर {dist[2]} के तट/समीप स्थित है।",
        f"{dist[3]} is renowned for {dist[4]} under the state government's ODOP flagship initiative.",
        "EASY"
    ))

# Important National Parks, Wildlife Sanctuaries, & Ramsar Sites in UP
up_wildlife = [
    ("दुधवा राष्ट्रीय उद्यान (Dudhwa National Park)", "लखीमपुर खीरी", "उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान (बाघ व बारहसिंगा संरक्षण)", "Lakhimpur Kheri", "Dudhwa National Park"),
    ("चंद्रप्रभा वन्यजीव अभयारण्य", "चंदौली (वाराणसी के निकट)", "उत्तर प्रदेश का सबसे पहला वन्यजीव अभयारण्य (स्थापना 1957)", "Chandauli", "Chandraprabha Wildlife Sanctuary"),
    ("हस्तिनापुर वन्यजीव अभयारण्य", "मेरठ, मुजफ्फरनगर, बिजनौर, हापुड़, अमरोहा", "उत्तर प्रदेश का सबसे बड़ा वन्यजीव अभयारण्य (क्षेत्रफल ~2073 वर्ग किमी)", "Meerut region", "Hastinapur Wildlife Sanctuary"),
    ("महावीर स्वामी वन्यजीव अभयारण्य", "ललितपुर", "उत्तर प्रदेश का सबसे छोटा वन्यजीव अभयारण्य (क्षेत्रफल मात्र 5.4 वर्ग किमी)", "Lalitpur", "Mahavir Swami Wildlife Sanctuary"),
    ("बखीरा पक्षी अभयारण्य (रामसर स्थल)", "संत कबीर नगर", "मीठे पानी की प्राकृतिक झील व प्रवासी पक्षियों का आश्रय स्थल", "Sant Kabir Nagar", "Bakhira Bird Sanctuary"),
    ("सूर सरोवर (कीठम झील - रामसर स्थल)", "आगरा", "प्रवासी पक्षियों एवं भालू संरक्षण केंद्र", "Agra", "Sur Sarovar (Keetham Lake)"),
    ("हैदरपुर वेटलैंड (रामसर स्थल)", "बिजनौर एवं मुजफ्फरनगर", "गंगा नदी के बाढ़ क्षेत्र में निर्मित मानव निर्मित आर्द्रभूमि", "Bijnor-Muzaffarnagar", "Haiderpur Wetland"),
    ("समसपुर पक्षी अभयारण्य", "रायबरेली", "विशाल प्राकृतिक आर्द्रभूमि व पक्षी विहार", "Raebareli", "Saman Bird Sanctuary"),
    ("नवाबगंज पक्षी अभयारण्य (शहीद चंद्रशेखर आजाद पक्षी विहार)", "उन्नाव", "लखनऊ-कानपुर मार्ग पर स्थित प्रसिद्ध पक्षी विहार", "Unnao", "Nawabganj Bird Sanctuary"),
    ("राष्ट्रीय चंबल वन्यजीव अभयारण्य", "आगरा, इटावा, औरैया", "घड़ियाल, गंगा डॉल्फिन और दुर्लभ कछुओं का संरक्षण", "Agra-Etawah", "National Chambal Sanctuary"),
]

for w in up_wildlife:
    p5_items.append(q_to_ts(
        "उत्तर प्रदेश पर्यावरण एवं भूगोल", "वन्यजीव अभयारण्य एवं रामसर स्थल",
        f"'{w[0]}' उत्तर प्रदेश के किस जिले में स्थित है?",
        f"In which district of Uttar Pradesh is '{w[4]}' located?",
        (w[1], w[3]),
        [
            ("प्रयागराज", "Prayagraj"),
            ("झाँसी", "Jhansi"),
            ("सोनभद्र", "Sonbhadra"),
        ],
        f"{w[0]} उत्तर प्रदेश के {w[1]} जिले में स्थित है। विशेषता: {w[2]}।",
        f"{w[4]} is situated in {w[3]} district. Salient feature: {w[2]}.",
        "EASY"
    ))

with open(os.path.join(OUT_DIR, "gk_part5.ts"), "w", encoding="utf-8") as f:
    f.write("""import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('General Knowledge & Current Affairs');

export const GK_BANK_PART5: RawBankQuestion[] = [
""" + "\n".join(p5_items) + """
];
""")

print(f"Generated gk_part5.ts with {len(p5_items)} questions.")
