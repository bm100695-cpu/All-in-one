import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Hindi');

export const HINDI_PASSAGES_PART1: RawBankQuestion[] = [
  // ================= पद्यांश 1: कबीरदास (विनम्रता व परोपकार) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागे अति दूर।।" \nप्रश्न: इस दोहे का मुख्य भाव क्या है?',
    'Verse: "What use is greatness like a date-palm tree; it gives no shade to travelers and its fruits hang too high." \nQuestion: What is the central theme of this couplet?',
    ['परोपकार के बिना बड़प्पन व्यर्थ है', 'Greatness without benevolence is meaningless'],
    [
      ['खजूर का पेड़ सबसे उपयोगी होता है', 'The date-palm tree is the most useful'],
      ['ऊँचाई प्राप्त करना ही जीवन का लक्ष्य है', 'Attaining height is the sole goal of life'],
      ['यात्रियों को वृक्षों के नीचे नहीं रुकना चाहिए', 'Travelers should not rest under trees'],
    ],
    'कबीर कहते हैं कि खजूर के पेड़ की तरह केवल ऊँचा या बड़ा होने से कोई लाभ नहीं, जब उससे किसी को छाया या सहज फल रूपी उपकार न मिले।',
    'Kabir states that mere stature like a date palm is useless if it neither offers shade nor accessible fruit to help others.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागे अति दूर।।" \nप्रश्न: दोहे में प्रयुक्त "पंथी" शब्द का सही अर्थ क्या है?',
    'Verse: "Bada hua to kya hua, jaise ped khajoor. Panthi ko chhaya nahin, phal laage ati door." \nQuestion: What is the correct meaning of the word "Panthi" in the couplet?',
    ['राहगीर या यात्री', 'Traveler or wayfarer'],
    [
      ['वृक्ष का माली', 'Gardener of the tree'],
      ['फल तोड़ने वाला पक्षी', 'Bird that plucks fruits'],
      ['रेगिस्तान का स्वामी', 'Master of the desert'],
    ],
    '"पंथी" शब्द "पंथ" (मार्ग) से बना है, जिसका अर्थ मार्ग पर चलने वाला अर्थात् यात्री या राहगीर होता है।',
    '"Panthi" is derived from "Panth" (path), meaning one who walks on a path, i.e., a traveler or wayfarer.',
    'MEDIUM',
    { grammarRuleHi: '"पंथ" मूल शब्द में "ई" प्रत्यय जुड़ने से "पंथी" (तद्धित प्रत्यय) शब्द बनता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागे अति दूर।।" \nप्रश्न: इस दोहे से समाज के समर्थ लोगों के विषय में क्या निष्कर्ष निकलता है?',
    'Verse: "What use is greatness like a date-palm tree; it gives no shade to travelers and its fruits hang too high." \nQuestion: What inference can be drawn about capable people in society from this couplet?',
    ['संपन्न व्यक्ति को सहज और उपयोगी होना चाहिए', 'Affluent people should be approachable and helpful'],
    [
      ['समर्थ लोगों को आम जन से दूर रहना चाहिए', 'Capable people should stay away from commoners'],
      ['ऊँचे पद पर पहुँचकर विनम्रता त्याग देनी चाहिए', 'One should give up humility upon reaching high office'],
      ['केवल धन संचय से ही सम्मान मिलता है', 'Respect comes solely from hoarding wealth'],
    ],
    'दोहे से यह निष्कर्ष निकलता है कि यदि किसी व्यक्ति की संपत्ति या पद दूसरों के काम न आए, तो उसका बड़ा होना निरर्थक है।',
    'The couplet implies that if a person’s wealth or status does not benefit others, their greatness holds no real value.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागे अति दूर।।" \nप्रश्न: "अति दूर" पद में प्रयुक्त "अति" क्या है?',
    'Verse: "Bada hua to kya hua, jaise ped khajoor. Panthi ko chhaya nahin, phal laage ati door." \nQuestion: In the phrase "ati door", what is "ati" grammatically?',
    ['प्रविशेषण / उपसर्ग के रूप में अधिकता बोधक अव्यय', 'Intensifier / adverbial prefix indicating excess'],
    [
      ['सकर्मक क्रिया', 'Transitive verb'],
      ['भाववाचक संज्ञा', 'Abstract noun'],
      ['निश्चयवाचक सर्वनाम', 'Demonstrative pronoun'],
    ],
    'यहाँ "अति" शब्द "दूर" की मात्रा या अधिकता (बहुत अधिक) को प्रकट कर रहा है, जो प्रविशेषण या अव्यय का कार्य करता है।',
    'Here "ati" intensifies the degree of "door" (far), functioning as an intensifier/indeclinable denoting excess.',
    'HARD',
    { grammarRuleHi: 'जो शब्द विशेषण या क्रियाविशेषण की विशेषता बताते हैं, वे प्रविशेषण कहलाते हैं; "अति" एक संस्कृत उपसर्ग व अव्यय भी है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागे अति दूर।।" \nप्रश्न: इस दोहे में मुख्यतः कौन-सा अलंकार प्रयुक्त हुआ है?',
    'Verse: "Bada hua to kya hua, jaise ped khajoor. Panthi ko chhaya nahin, phal laage ati door." \nQuestion: Which figure of speech is primarily used in this couplet?',
    ['उपमा एवं दृष्टांत अलंकार', 'Simile (Upama) and Exemplification (Drishtant)'],
    [
      ['यमक अलंकार', 'Yamaka (homonymic pun)'],
      ['अतिशयोक्ति अलंकार', 'Hyperbole (Atishayokti)'],
      ['श्लेष अलंकार', 'Pun (Shlesha)'],
    ],
    '"जैसे पेड़ खजूर" में वाचक शब्द "जैसे" के कारण उपमा तथा खजूर के उदाहरण से बात सिद्ध करने के कारण दृष्टांत भाव निहित है।',
    'Due to the comparative marker "jaise" (like), it exhibits Upama, while illustrating the moral through the palm tree exemplifies Drishtant.',
    'MEDIUM',
    { grammarRuleHi: 'जहाँ "सा, सी, से, सम, सरिस, जैसे" वाचक शब्दों द्वारा उपमेय की तुलना उपमान से की जाए, वहाँ उपमा अलंकार होता है।' }
  ),

  // ================= पद्यांश 2: कबीरदास (प्रेम का महत्व) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़ै सो पंडित होय।।" \nप्रश्न: कबीरदास के अनुसार सच्चा "पंडित" (ज्ञानी) कौन होता है?',
    'Verse: "Reading books endlessly the world died, yet none became truly wise; one who reads the two-and-a-half letters of love becomes truly wise." \nQuestion: According to Kabir, who is a true "Pandit" (wise person)?',
    ['जो प्रेम और करुणा के मर्म को समझता है', 'One who understands the essence of love and compassion'],
    [
      ['जो हजारों धर्मग्रंथ कंठस्थ कर लेता है', 'One who memorizes thousands of scriptures'],
      ['जो जीवन भर वाद-विवाद करता है', 'One who engages in debates lifelong'],
      ['जो संसार से विरक्त होकर मौन रहता है', 'One who stays silent away from the world'],
    ],
    'कबीर के अनुसार केवल किताबी ज्ञान से कोई ज्ञानी नहीं बनता; हृदय में प्रेम और मानवता का भाव रखने वाला ही सच्चा पंडित है।',
    'According to Kabir, mere bookish learning does not make one wise; true wisdom lies in embracing love and humanity.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़ै सो पंडित होय।।" \nप्रश्न: "मुआ" शब्द का प्रसंगानुकूल अर्थ क्या है?',
    'Verse: "Pothi padhi padhi jag mua, pandit bhaya na koy..." \nQuestion: What is the contextual meaning of the word "mua"?',
    ['मर गया / समाप्त हो गया', 'Died / perished'],
    [
      ['जाग उठा', 'Awoke'],
      ['प्रसन्न हुआ', 'Became happy'],
      ['भूल गया', 'Forgot'],
    ],
    'अवधी/सधुक्कड़ी परंपरा में "मुआ" का अर्थ "मर गया" या "व्यर्थ नष्ट हो गया" होता है।',
    'In the Sadhukkadi/Awadhi poetic idiom, "mua" means died or passed away in vain.',
    'MEDIUM',
    { grammarRuleHi: '"मुआ" तद्भव क्रियापद है जिसका संबंध संस्कृत की "मृ" धातु (मरना) से है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़ै सो पंडित होय।।" \nप्रश्न: कबीर ने "पोथी पढ़ने" की आलोचना किस आधार पर की है?',
    'Verse: "Reading books endlessly the world died, yet none became truly wise..." \nQuestion: On what basis does Kabir critique reading books here?',
    ['संवेदनहीन शुष्क पांडित्य की निरर्थकता के आधार पर', 'On the futility of dry, heartless scholarship'],
    [
      ['लेखन कला के विरोध के आधार पर', 'On opposing the art of writing'],
      ['शिक्षा और विद्यालयों को बंद करने के लिए', 'To advocate closing schools and education'],
      ['केवल मौखिक परंपरा के प्रचार के लिए', 'Solely to promote oral tradition'],
    ],
    'कबीर ज्ञान के विरोधी नहीं हैं, बल्कि उस शुष्क पांडित्य की आलोचना करते हैं जो मनुष्य में प्रेम और विनम्रता नहीं जगाता।',
    'Kabir does not oppose learning itself, but criticizes dry pedantry that fails to awaken love and humility.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़ै सो पंडित होय।।" \nप्रश्न: "आखर" शब्द का तत्सम रूप क्या होगा?',
    'Verse: "Pothi padhi padhi jag mua... Dhai aakhar prem ka..." \nQuestion: What is the Tatsama (Sanskrit origin) form of the word "Aakhar"?',
    ['अक्षर', 'Akshara'],
    [
      ['आकार', 'Aakaar'],
      ['आचार', 'Aachaar'],
      ['अवतार', 'Avataar'],
    ],
    '"आखर" तद्भव शब्द है, जिसका शुद्ध संस्कृत तत्सम रूप "अक्षर" होता है।',
    '"Aakhar" is a Tadbhava word whose pure Sanskrit Tatsama form is "Akshara".',
    'EASY',
    { grammarRuleHi: 'तत्सम शब्द का "क्ष" तद्भव रूप में प्रायः "ख" या "छ" में परिवर्तित हो जाता है (जैसे अक्षर → आखर)।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़ै सो पंडित होय।।" \nप्रश्न: "पढ़ि पढ़ि" में कौन-सा अलंकार तथा किस प्रकार का शब्द-प्रयोग है?',
    'Verse: "Pothi padhi padhi jag mua, pandit bhaya na koy..." \nQuestion: Which literary device and word usage appears in "padhi padhi"?',
    ['पुनरुक्ति प्रकाश अलंकार', 'Punarukti Prakasha (meaningful repetition for emphasis)'],
    [
      ['यमक अलंकार', 'Yamaka'],
      ['उपमा अलंकार', 'Upama'],
      ['संदेह अलंकार', 'Sandeha'],
    ],
    'जब एक ही शब्द की आवृत्ति समान अर्थ में भाव को गहरा करने के लिए हो, जैसे "पढ़ि पढ़ि" (बार-बार पढ़कर), तो वहाँ पुनरुक्ति प्रकाश अलंकार होता है।',
    'When a word is repeated with the same meaning to intensify the action ("reading again and again"), it is Punarukti Prakasha.',
    'HARD',
    { grammarRuleHi: 'पुनरुक्ति प्रकाश अलंकार में शब्द दोहराए जाते हैं पर अर्थ में भिन्नता नहीं होती, केवल कथन में बल आता है।' }
  ),

  // ================= पद्यांश 3: कबीरदास (समय का महत्व) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "काल्ह करै सो आज कर, आज करै सो अब। पल में परलै होएगी, बहुरि करैगो कब।।" \nप्रश्न: प्रस्तुत दोहे का केंद्रीय संदेश क्या है?',
    'Verse: "What you plan to do tomorrow, do today; what you plan for today, do now. Destruction may strike in a moment, when else will you act?" \nQuestion: What is the central message of this couplet?',
    ['आलस्य त्यागकर शुभ कार्य तत्काल करना चाहिए', 'One should abandon procrastination and act promptly'],
    [
      ['भविष्य की सभी योजनाएँ रद्द कर देनी चाहिए', 'All future plans should be cancelled'],
      ['प्रलय से डरकर घर में छिप जाना चाहिए', 'One should hide at home fearing doom'],
      ['कार्य को हमेशा कल पर टालना उचित है', 'Postponing work to tomorrow is always wise'],
    ],
    'कबीर समय की क्षणभंगुरता की ओर संकेत करते हुए शिक्षा देते हैं कि अच्छे कार्य को टालना नहीं चाहिए, बल्कि तुरंत करना चाहिए।',
    'Pointing out the fleeting nature of time, Kabir teaches that good deeds must not be delayed and should be done immediately.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "काल्ह करै सो आज कर, आज करै सो अब। पल में परलै होएगी, बहुरि करैगो कब।।" \nप्रश्न: दोहे में प्रयुक्त "बहुरि" शब्द का क्या अर्थ है?',
    'Verse: "Kaalh karai so aaj kar... pal mein parlai hoyegi, bahuri karaigo kab." \nQuestion: What does the word "bahuri" mean in this couplet?',
    ['फिर या दुबारा', 'Again / afterwards'],
    [
      ['अचानक', 'Suddenly'],
      ['धीमे से', 'Slowly'],
      ['क्रोध से', 'Angrily'],
    ],
    'ब्रज एवं अवधी काव्य में "बहुरि" का अर्थ "फिर", "पुनः" अथवा "उसके बाद" होता है।',
    'In Braj and Awadhi poetry, "bahuri" means "again", "then", or "afterwards".',
    'MEDIUM',
    { grammarRuleHi: '"बहुरि" एक कालवाचक/रीतिवाचक काव्य अव्यय है जिसका अर्थ "पुनः" होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "काल्ह करै सो आज कर, आज करै सो अब। पल में परलै होएगी, बहुरि करैगो कब।।" \nप्रश्न: "पल में परलै होएगी" कथन से जीवन की किस सच्चाई का बोध होता है?',
    'Verse: "...Destruction may strike in a moment, when else will you act?" \nQuestion: What truth of life is inferred from "pal mein parlai hoyegi"?',
    ['जीवन और समय अनिश्चित तथा क्षणभंगुर हैं', 'Life and time are uncertain and transient'],
    [
      ['प्रकृति केवल रात्रि में नष्ट होती है', 'Nature is destroyed only at night'],
      ['मनुष्य अमर होकर जन्मा है', 'Humans are born immortal'],
      ['अतीत को लौटाया जा सकता है', 'The past can be brought back'],
    ],
    'कवि का आशय है कि मृत्यु या संकट कब आ जाए इसका कोई निश्चित समय नहीं, इसलिए वर्तमान क्षण का सदुपयोग आवश्यक है।',
    'The poet implies that crisis or death has no fixed hour, making it vital to use the present moment wisely.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "काल्ह करै सो आज कर, आज करै सो अब। पल में परलै होएगी, बहुरि करैगो कब।।" \nप्रश्न: "परलै" शब्द का मानक हिंदी तत्सम रूप क्या है?',
    'Verse: "Kaalh karai so aaj kar... pal mein parlai hoyegi..." \nQuestion: What is the standard Sanskrit Tatsama form of "parlai"?',
    ['प्रलय', 'Pralaya'],
    [
      ['प्रणय', 'Pranaya'],
      ['प्रलाप', 'Pralap'],
      ['परिचय', 'Parichaya'],
    ],
    '"परलै" तद्भव/बोलीगत रूप है, जिसका शुद्ध तत्सम रूप "प्रलय" (विनाश/समाप्ति) होता है।',
    '"Parlai" is a colloquial/Tadbhava form of the pure Tatsama word "Pralaya" (dissolution/destruction).',
    'EASY',
    { grammarRuleHi: 'संयुक्त व्यंजन "प्र" लोकभाषा में स्वरभक्ति के कारण प्रायः "पर" हो जाता है (प्रलय → परलै)।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "काल्ह करै सो आज कर, आज करै सो अब। पल में परलै होएगी, बहुरि करैगो कब।।" \nप्रश्न: दोहे के प्रथम चरण में कौन-सा छंद और अलंकार स्पष्ट दिखता है?',
    'Verse: "Kaalh karai so aaj kar, aaj karai so ab..." \nQuestion: Which meter and figure of speech are clearly seen in this verse?',
    ['दोहा छंद तथा "पल में परलै" में अनुप्रास अलंकार', 'Doha meter and Alliteration (Anuprasa) in "pal mein parlai"'],
    [
      ['सोरठा छंद तथा रूपक अलंकार', 'Soratha meter and Metaphor'],
      ['चौपाई छंद तथा अतिशयोक्ति अलंकार', 'Chaupai meter and Hyperbole'],
      ['कवित्त छंद तथा श्लेष अलंकार', 'Kavitta meter and Shlesha'],
    ],
    'यह 13-11 मात्राओं वाला दोहा छंद है और "पल में परलै" में "प" वर्ण की आवृत्ति से अनुप्रास अलंकार है।',
    'It is a Doha meter (13-11 matras per half-line) and shows Anuprasa (alliteration) via the repetition of "p" in "pal mein parlai".',
    'HARD',
    { grammarRuleHi: 'दोहा अर्धसम मात्रिक छंद है जिसके विषम चरणों (1, 3) में 13 और सम चरणों (2, 4) में 11 मात्राएँ होती हैं।' }
  ),

  // ================= पद्यांश 4: कबीरदास (मधुर वाणी) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "ऐसी बानी बोलिए, मन का आपा खोय। औरन को शीतल करै, आपहुँ शीतल होय।।" \nप्रश्न: इस दोहे का प्रमुख संदेश क्या है?',
    'Verse: "Speak such words, shedding the ego of the mind, that cool and comfort others while calming yourself too." \nQuestion: What is the primary message of this couplet?',
    ['अहंकार रहित मधुर वाणी सबके लिए सुखदायी होती है', 'Ego-free sweet speech brings peace to all'],
    [
      ['कठोर वचन बोलने से सम्मान बढ़ता है', 'Speaking harshly increases respect'],
      ['मनुष्य को सदैव मौन व्रत रखना चाहिए', 'One should always observe a vow of silence'],
      ['अहंकार ही आत्मविश्वास का दूसरा नाम है', 'Ego is another name for self-confidence'],
    ],
    'कबीरदास कहते हैं कि अहंकार छोड़कर विनम्र एवं मधुर बोलने से सुनने वाले और बोलने वाले दोनों को शांति मिलती है।',
    'Kabir states that speaking gently without ego brings inner peace to both the listener and the speaker.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "ऐसी बानी बोलिए, मन का आपा खोय। औरन को शीतल करै, आपहुँ शीतल होय।।" \nप्रश्न: दोहे में "आपा" शब्द किस अर्थ में प्रयुक्त हुआ है?',
    'Verse: "Aisi baani boliye, man ka aapa khoy..." \nQuestion: In what sense is the word "aapa" used in this couplet?',
    ['अहंकार या घमंड', 'Ego or arrogance'],
    [
      ['परिवार का सदस्य', 'Family member'],
      ['बचपन की स्मृति', 'Childhood memory'],
      ['भोजन की सामग्री', 'Food material'],
    ],
    'यहाँ "मन का आपा खोय" का तात्पर्य मन के अहंकार या "मैं" के भाव को त्याग देने से है।',
    'Here "man ka aapa khoy" refers to relinquishing one’s ego or sense of arrogance.',
    'MEDIUM',
    { grammarRuleHi: '"आपा" पुल्लिंग संज्ञा है जो संदर्भानुसार निजता या अहंकार के अर्थ में प्रयुक्त होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "ऐसी बानी बोलिए, मन का आपा खोय। औरन को शीतल करै, आपहुँ शीतल होय।।" \nप्रश्न: मधुर वाणी को "शीतल" कहने के पीछे कवि का क्या अभिप्राय है?',
    'Verse: "...that cools others and makes oneself cool too." \nQuestion: What does the poet imply by calling gentle speech "sheetal" (cool)?',
    ['मधुर वाणी क्रोध और तनाव को शांत करती है', 'Gentle speech calms anger and emotional stress'],
    [
      ['बोलने से शरीर का तापमान गिर जाता है', 'Speaking lowers body temperature'],
      ['केवल शीत ऋतु में ही बोलना चाहिए', 'One should speak only in winter'],
      ['मधुर वाणी सुनकर लोग सो जाते हैं', 'People fall asleep hearing sweet words'],
    ],
    'कवि ने "शीतल" शब्द का लाक्षणिक प्रयोग किया है, जिसका अर्थ मानसिक शांति, सुकून और क्रोध का शमन है।',
    'The poet uses "sheetal" figuratively to denote mental calm, comfort, and the pacification of anger.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "ऐसी बानी बोलिए, मन का आपा खोय। औरन को शीतल करै, आपहुँ शीतल होय।।" \nप्रश्न: "शीतल" शब्द का सही विलोम शब्द क्या है?',
    'Verse: "...Auran ko sheetal karai, aapahu sheetal hoy." \nQuestion: What is the correct antonym of the word "sheetal" (cool)?',
    ['उष्ण', 'Ushna (hot/warm)'],
    [
      ['निर्मल', 'Nirmal'],
      ['कोमल', 'Komal'],
      ['शांत', 'Shant'],
    ],
    '"शीतल" (ठंडा) तत्सम विशेषण है, जिसका उपयुक्त तत्सम विलोम "उष्ण" (गर्म) होता है।',
    '"Sheetal" (cool) is a Tatsama adjective whose appropriate Tatsama antonym is "Ushna" (hot).',
    'EASY',
    { grammarRuleHi: 'विलोम शब्द सदैव सजातीय श्रेणी में चुने जाते हैं; तत्सम शब्द "शीतल" का विलोम तत्सम "उष्ण" होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "ऐसी बानी बोलिए, मन का आपा खोय। औरन को शीतल करै, आपहुँ शीतल होय।।" \nप्रश्न: इस दोहे में "बानी बोलिए" में कौन-सा अलंकार तथा किस प्रकार का संबंध है?',
    'Verse: "Aisi baani boliye, man ka aapa khoy..." \nQuestion: Which figure of speech appears in "baani boliye"?',
    ['छेकानुप्रास (अनुप्रास) अलंकार', 'Chekanuprasa (Alliteration)'],
    [
      ['संदेह अलंकार', 'Sandeha'],
      ['विरोधाभास अलंकार', 'Virodhabhasa'],
      ['मानवीकरण अलंकार', 'Personification'],
    ],
    '"बानी बोलिए" में "ब" वर्ण की स्वरूपतः एवं क्रमतः एक बार आवृत्ति होने से छेकानुप्रास अलंकार है।',
    'In "baani boliye", the consonant "b" repeats in sequence, exemplifying Chekanuprasa (a subtype of Anuprasa).',
    'HARD',
    { grammarRuleHi: 'जहाँ एक या अनेक व्यंजनों की आवृत्ति केवल एक बार हो (दो बार आए), वहाँ छेकानुप्रास अलंकार होता है।' }
  ),

  // ================= पद्यांश 5: कबीरदास (आत्मनिरीक्षण) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसा बुरा न कोय।।" \nप्रश्न: इस दोहे का मुख्य भाव क्या है?',
    'Verse: "I went out looking for the wicked, and found none; when I searched my own heart, I found none worse than myself." \nQuestion: What is the central theme of this couplet?',
    ['दूसरों में दोष ढूँढने के बजाय आत्मनिरीक्षण करना चाहिए', 'Instead of finding faults in others, one should introspect'],
    [
      ['संसार में कोई भी व्यक्ति गलती नहीं करता', 'No person in the world ever makes a mistake'],
      ['दूसरों की निंदा करना अत्यंत आवश्यक है', 'Criticizing others is absolutely necessary'],
      ['व्यक्ति को सदैव स्वयं से घृणा करनी चाहिए', 'A person should always hate themselves'],
    ],
    'कबीर स्पष्ट करते हैं कि जब व्यक्ति अपने भीतर झाँकता है, तो उसे अपनी कमियाँ दिखाई देती हैं और वह दूसरों की आलोचना से बचता है।',
    'Kabir clarifies that looking inward reveals one’s own flaws, restraining one from judging others.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसा बुरा न कोय।।" \nप्रश्न: "दिल खोजा आपना" वाक्यांश का लाक्षणिक अर्थ क्या है?',
    'Verse: "...Jo dil khoja aapna, mujhsa bura na koy." \nQuestion: What is the figurative meaning of the phrase "dil khoja aapna"?',
    ['आत्मविश्लेषण या अपने अंतर्मन की जाँच करना', 'Self-analysis or examining one’s inner conscience'],
    [
      ['चिकित्सक से हृदय की जाँच कराना', 'Getting a heart checkup from a doctor'],
      ['खोई हुई वस्तु ढूँढना', 'Searching for a lost object'],
      ['मित्रों के मन की बात जानना', 'Knowing what friends are thinking'],
    ],
    '"दिल खोजा आपना" का अर्थ अपने विचारों, कर्मों और अवगुणों का ईमानदारी से मूल्यांकन करना है।',
    '"Dil khoja aapna" means honestly evaluating one’s own thoughts, deeds, and shortcomings.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसा बुरा न कोय।।" \nप्रश्न: दोहे के अनुसार व्यक्ति को संसार में बुरा क्यों नहीं मिला?',
    'Verse: "I went out looking for the wicked, and found none..." \nQuestion: According to the couplet, why did the speaker find no wicked person in the world?',
    ['आत्मबोधी दृष्टि से अपनी ही त्रुटियाँ अधिक बड़ी प्रतीत होती हैं', 'Through self-awareness, one’s own flaws appear far greater'],
    [
      ['क्योंकि उसने आँखें बंद कर ली थीं', 'Because he had closed his eyes'],
      ['क्योंकि संसार में केवल संत ही रहते हैं', 'Because only saints live in the world'],
      ['क्योंकि वह किसी नगर में गया ही नहीं', 'Because he never visited any town'],
    ],
    'सच्चे साधक की दृष्टि दोष-दर्शन से हटकर आत्म-सुधार पर केंद्रित हो जाती है, इसलिए उसे बाहर कोई बुरा नहीं दिखता।',
    'A true seeker shifts focus from fault-finding to self-improvement, hence sees no evil outside.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसा बुरा न कोय।।" \nप्रश्न: "मुझसा" पद में कौन-सा सर्वनाम तथा कारक/तुलना बोधक तत्व है?',
    'Verse: "...Jo dil khoja aapna, mujhsa bura na koy." \nQuestion: In the word "mujhsa", what pronoun and comparative element are present?',
    ['उत्तम पुरुष सर्वनाम ("मैं") + सादृश्यवाचक "सा"', 'First-person pronoun ("I") + comparative particle "sa"'],
    [
      ['मध्यम पुरुष सर्वनाम + संबंध कारक', 'Second-person pronoun + genitive case'],
      ['निश्चयवाचक सर्वनाम + अधिकरण कारक', 'Demonstrative pronoun + locative case'],
      ['अनिश्चयवाचक सर्वनाम + कर्म कारक', 'Indefinite pronoun + accusative case'],
    ],
    '"मुझसा" में उत्तम पुरुष सर्वनाम "मैं" का तिर्यक रूप "मुझ" तथा तुलना/सादृश्य दिखाने वाला "सा" प्रत्यय/वाचक जुड़ा है।',
    '"Mujhsa" combines the oblique form "mujh" of the first-person pronoun "main" with the comparative marker "sa".',
    'HARD',
    { grammarRuleHi: '"सा, सी, से" का प्रयोग संज्ञा या सर्वनाम के साथ सादृश्य या तुलना दर्शाने के लिए किया जाता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसा बुरा न कोय।।" \nप्रश्न: इस दोहे के लिए सर्वाधिक उपयुक्त शीर्षक क्या होगा?',
    'Verse: "I went out looking for the wicked..." \nQuestion: What would be the most suitable title for this couplet?',
    ['आत्मनिरीक्षण का महत्व', 'Importance of Introspection'],
    [
      ['संसार की विचित्रता', 'Strangeness of the World'],
      ['परनिंदा की कला', 'Art of Criticizing Others'],
      ['हृदय का विज्ञान', 'Science of the Heart'],
    ],
    'दोहा दूसरों में दोष खोजने के स्थान पर स्वयं के दोष पहचानने की प्रेरणा देता है, अतः "आत्मनिरीक्षण का महत्व" उपयुक्त शीर्षक है।',
    'The couplet inspires looking at one’s own faults rather than others’, making "Importance of Introspection" the apt title.',
    'EASY'
  ),

  // ================= पद्यांश 6: तुलसीदास (मधुर वचन) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तुलसी मीठे बचन ते सुख उपजत चहुँ ओर। बसीकरन इक मंत्र है, परिहरू बचन कठोर।।" \nप्रश्न: तुलसीदास ने किसे "वशीकरण का एक मंत्र" बताया है?',
    'Verse: "Tulsidas says sweet words generate joy all around; it is a spell of attraction, so abandon harsh speech." \nQuestion: What has Tulsidas called a "spell of attraction" (vashikaran mantra)?',
    ['मीठे और विनम्र वचन को', 'Sweet and polite words'],
    [
      ['कठोर अनुशासन को', 'Strict discipline'],
      ['गुप्त तांत्रिक साधना को', 'Secret mystical ritual'],
      ['संपत्ति के प्रदर्शन को', 'Display of wealth'],
    ],
    'तुलसीदास के अनुसार मीठी वाणी से चारों ओर सुख उत्पन्न होता है और यही सबको अपना बनाने का सच्चा मंत्र है।',
    'According to Tulsidas, sweet speech spreads happiness all around and serves as the true charm that wins hearts.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तुलसी मीठे बचन ते सुख उपजत चहुँ ओर। बसीकरन इक मंत्र है, परिहरू बचन कठोर।।" \nप्रश्न: दोहे में प्रयुक्त "परिहरू" शब्द का सही अर्थ क्या है?',
    'Verse: "...Basikaran ik mantra hai, pariharu bachan kathor." \nQuestion: What is the correct meaning of the word "pariharu" in this couplet?',
    ['त्याग दो या छोड़ दो', 'Abandon or give up'],
    [
      ['स्वीकार करो', 'Accept'],
      ['बार-बार दोहराओ', 'Repeat again and again'],
      ['लिखकर रख लो', 'Write down and keep'],
    ],
    '"परिहरना" (संस्कृत "परिहृ") क्रिया का आज्ञार्थक रूप "परिहरू" है, जिसका अर्थ "त्याग दो" होता है।',
    '"Pariharu" is the imperative form of "pariharna" (from Sanskrit parihri), meaning "give up" or "abandon".',
    'MEDIUM',
    { grammarRuleHi: '"परि" उपसर्ग का अर्थ चारों ओर से या पूर्णतः होता है; "परिहर" का अर्थ पूर्णतः त्याग देना है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तुलसी मीठे बचन ते सुख उपजत चहुँ ओर। बसीकरन इक मंत्र है, परिहरू बचन कठोर।।" \nप्रश्न: इस दोहे से सामाजिक संबंधों के बारे में क्या निष्कर्ष निकलता है?',
    'Verse: "Sweet words generate joy all around..." \nQuestion: What can be inferred about social relationships from this couplet?',
    ['सौम्य संवाद से आपसी सद्भाव और सहयोग बढ़ता है', 'Gentle communication fosters mutual harmony and cooperation'],
    [
      ['कठोर वचन बोलकर ही काम कराया जा सकता है', 'Work can only be extracted through harsh words'],
      ['मनुष्य को किसी से बातचीत नहीं करनी चाहिए', 'One should not converse with anyone'],
      ['सच्चे सुख का वाणी से कोई संबंध नहीं है', 'True happiness has no connection with speech'],
    ],
    'मधुर वाणी लोगों के मन जीत लेती है और वातावरण में सौहार्द लाती है, जबकि कठोर वाणी संबंध बिगाड़ती है।',
    'Sweet words win hearts and foster harmony, whereas harsh words spoil social bonds.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तुलसी मीठे बचन ते सुख उपजत चहुँ ओर। बसीकरन इक मंत्र है, परिहरू बचन कठोर।।" \nप्रश्न: "चहुँ ओर" पद में प्रयुक्त "चहुँ" किस प्रकार का शब्द है?',
    'Verse: "Tulsi meethe bachan te sukh upjat chahun or..." \nQuestion: What kind of word is "chahun" in the phrase "chahun or"?',
    ['संख्यावाचक विशेषण (चार का काव्य रूप)', 'Numeral adjective (poetic form of four)'],
    [
      ['अनिश्चयवाचक सर्वनाम', 'Indefinite pronoun'],
      ['विस्मयादिबोधक अव्यय', 'Interjection'],
      ['भाववाचक संज्ञा', 'Abstract noun'],
    ],
    '"चहुँ ओर" का अर्थ "चारों ओर" है; यहाँ "चहुँ" चार संख्या का बोध कराने वाला संख्यावाचक विशेषण है।',
    '"Chahun or" means "in all four directions"; here "chahun" is a numeral adjective denoting four.',
    'HARD',
    { grammarRuleHi: 'जो विशेषण संज्ञा की निश्चित संख्या का बोध कराते हैं, वे निश्चित संख्यावाचक विशेषण कहलाते हैं।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तुलसी मीठे बचन ते सुख उपजत चहुँ ओर। बसीकरन इक मंत्र है, परिहरू बचन कठोर।।" \nप्रश्न: "बसीकरन इक मंत्र है" में मुख्यतः कौन-सा अलंकार दिखाई देता है?',
    'Verse: "...Basikaran ik mantra hai, pariharu bachan kathor." \nQuestion: Which figure of speech is evident in "Basikaran ik mantra hai"?',
    ['रूपक अलंकार', 'Metaphor (Rupaka)'],
    [
      ['श्लेष अलंकार', 'Shlesha'],
      ['भ्रांतिमान अलंकार', 'Bhrantiman'],
      ['उत्प्रेक्षा अलंकार', 'Utpreksha'],
    ],
    'मीठे वचन (उपमेय) पर वशीकरण मंत्र (उपमान) का सीधा अभेद आरोप किया गया है, अतः यहाँ रूपक अलंकार है।',
    'Sweet speech is directly equated with a mesmerizing spell without comparison words, making it a Metaphor (Rupaka).',
    'MEDIUM',
    { grammarRuleHi: 'जहाँ उपमेय और उपमान में अभिन्नता या अभेद आरोप दिखाया जाए, वहाँ रूपक अलंकार होता है।' }
  ),

  // ================= पद्यांश 7: तुलसीदास (दया और अभिमान) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "दया धर्म का मूल है, पाप मूल अभिमान। तुलसी दया न छाँड़िए, जब लग घट में प्रान।।" \nप्रश्न: इस दोहे के अनुसार धर्म और पाप की जड़ क्रमशः क्या हैं?',
    'Verse: "Compassion is the root of righteousness, and pride is the root of sin. Tulsi says, never abandon compassion as long as breath remains in the body." \nQuestion: According to this couplet, what are the roots of righteousness and sin respectively?',
    ['दया और अभिमान', 'Compassion and pride'],
    [
      ['धन और निर्धनता', 'Wealth and poverty'],
      ['ज्ञान और मौन', 'Knowledge and silence'],
      ['क्रोध और आलस्य', 'Anger and laziness'],
    ],
    'दोहे की पहली पंक्ति स्पष्ट कहती है कि दया धर्म का मूल (जड़) है और अभिमान पाप का मूल है।',
    'The opening line explicitly states that compassion is the root of dharma (righteousness) and pride is the root of sin.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "दया धर्म का मूल है, पाप मूल अभिमान। तुलसी दया न छाँड़िए, जब लग घट में प्रान।।" \nप्रश्न: "जब लग घट में प्रान" में "घट" शब्द का क्या आशय है?',
    'Verse: "...Tulsi daya na chhandiye, jab lag ghat mein pran." \nQuestion: What does the word "ghat" signify in "jab lag ghat mein pran"?',
    ['शरीर या हृदय रूपी घड़ा', 'The body or heart (likened to a vessel)'],
    [
      ['नदी का किनारा', 'Riverbank'],
      ['अंधकारमय जंगल', 'Dark forest'],
      ['पर्वत की चोटी', 'Mountain peak'],
    ],
    'भक्ति काव्य में "घट" का प्रयोग प्रायः शरीर रूपी मिट्टी के घड़े अथवा अंतःकरण के लिए किया जाता है।',
    'In Bhakti poetry, "ghat" (earthen pot) metaphorically refers to the human body or inner self.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "दया धर्म का मूल है, पाप मूल अभिमान। तुलसी दया न छाँड़िए, जब लग घट में प्रान।।" \nप्रश्न: कवि आजीवन दया बनाए रखने का आग्रह क्यों करता है?',
    'Verse: "...never abandon compassion as long as breath remains in the body." \nQuestion: Why does the poet urge maintaining compassion throughout life?',
    ['क्योंकि दया के बिना धार्मिक और नैतिक जीवन संभव नहीं', 'Because a righteous and ethical life is impossible without compassion'],
    [
      ['क्योंकि दया दिखाने से शत्रु भयभीत होते हैं', 'Because showing compassion frightens enemies'],
      ['क्योंकि दया केवल वृद्धावस्था का गुण है', 'Because compassion is a virtue only for old age'],
      ['क्योंकि अभिमान से शरीर बलवान होता है', 'Because pride makes the body physically strong'],
    ],
    'दया ही सभी सद्गुणों की आधारशिला है; इसके अभाव में मनुष्य अभिमान और अधर्म के मार्ग पर चला जाता है।',
    'Compassion is the foundation of all virtues; without it, humans fall into arrogance and unrighteousness.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "दया धर्म का मूल है, पाप मूल अभिमान। तुलसी दया न छाँड़िए, जब लग घट में प्रान।।" \nप्रश्न: "अभिमान" शब्द में प्रयुक्त उपसर्ग और मूल शब्द क्या हैं?',
    'Verse: "Daya dharm ka mool hai, paap mool abhimaan..." \nQuestion: What are the prefix and root word in "abhimaan"?',
    ['अभि + मान', 'Abhi + maan'],
    [
      ['अ + भिमान', 'A + bhimaan'],
      ['अभिमा + न', 'Abhima + n'],
      ['अभी + मान', 'Abhee + maan'],
    ],
    '"अभिमान" शब्द संस्कृत के "अभि" उपसर्ग और "मान" मूल शब्द के योग से बना है।',
    '"Abhimaan" is formed by combining the Sanskrit prefix "abhi" with the root word "maan".',
    'EASY',
    { grammarRuleHi: '"अभि" (अधिक/सामने) उपसर्ग जब "मान" शब्द से जुड़ता है, तो अहंकार के अर्थ में "अभिमान" शब्द बनता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "दया धर्म का मूल है, पाप मूल अभिमान। तुलसी दया न छाँड़िए, जब लग घट में प्रान।।" \nप्रश्न: "दया धर्म" और "घट में प्रान" पदों के आधार पर "दया" तथा "प्रान" के व्याकरणिक लिंग क्रमशः क्या हैं?',
    'Verse: "Daya dharm ka mool hai... jab lag ghat mein pran." \nQuestion: What are the grammatical genders of "daya" and "pran" in Hindi?',
    ['"दया" स्त्रीलिंग और "प्रान" (प्राण) पुल्लिंग बहुवचन', '"Daya" is feminine and "pran" is masculine plural'],
    [
      ['दोनों स्त्रीलिंग एकवचन', 'Both feminine singular'],
      ['"दया" पुल्लिंग और "प्रान" स्त्रीलिंग', '"Daya" masculine and "pran" feminine'],
      ['दोनों नपुंसकलिंग', 'Both neuter'],
    ],
    'हिंदी में "दया की जाती है" (स्त्रीलिंग) और "प्राण निकल गए" (नित्य बहुवचन पुल्लिंग) के रूप में प्रयोग होता है।',
    'In Hindi, "daya" is feminine, whereas "pran" is always used as a masculine plural noun.',
    'HARD',
    { grammarRuleHi: 'हिंदी में "प्राण, आँसू, दर्शन, हस्ताक्षर" आदि शब्द नित्य बहुवचन पुल्लिंग में प्रयुक्त होते हैं।' }
  ),

  // ================= पद्यांश 8: तुलसीदास (परोपकार) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "परहित सरिस धर्म नहिं भाई। पर पीड़ा सम नहिं अधमाई।।" \nप्रश्न: तुलसीदास ने इस चौपाई में सबसे बड़ा धर्म और सबसे बड़ा अधर्म किसे माना है?',
    'Verse: "There is no righteousness equal to helping others, brother; and no baseness equal to hurting others." \nQuestion: What does Tulsidas consider the highest virtue and the worst vice in this chaupai?',
    ['परोपकार को श्रेष्ठ धर्म और दूसरों को कष्ट देने को अधर्म', 'Helping others as the highest virtue and causing pain to others as the worst vice'],
    [
      ['तपस्या को धर्म और व्यापार को अधर्म', 'Penance as virtue and trade as vice'],
      ['तीर्थयात्रा को धर्म और निवास को अधर्म', 'Pilgrimage as virtue and staying home as vice'],
      ['युद्ध को धर्म और शांति को अधर्म', 'War as virtue and peace as vice'],
    ],
    'तुलसीदास स्पष्ट कहते हैं कि दूसरों की भलाई के समान कोई धर्म नहीं और दूसरों को पीड़ा पहुँचाने के समान कोई नीचता नहीं।',
    'Tulsidas clearly states that no duty equals benevolence and no sin equals inflicting pain on others.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "परहित सरिस धर्म नहिं भाई। पर पीड़ा सम नहिं अधमाई।।" \nप्रश्न: चौपाई में प्रयुक्त "सरिस" शब्द का क्या अर्थ है?',
    'Verse: "Parhit saris dharm nahin bhai..." \nQuestion: What does the word "saris" mean in this verse?',
    ['समान या जैसा', 'Equal to or similar to'],
    [
      ['विपरीत', 'Opposite to'],
      ['अधूरा', 'Incomplete'],
      ['कठिन', 'Difficult'],
    ],
    '"सरिस" अवधी/तद्भव शब्द है जो संस्कृत "सदृश" से विकसित हुआ है और इसका अर्थ "के समान" होता है।',
    '"Saris" is an Awadhi/Tadbhava word derived from Sanskrit "sadrisha", meaning "equal to" or "like".',
    'MEDIUM',
    { grammarRuleHi: '"सरिस" और "सम" उपमा अलंकार के प्रमुख वाचक शब्द हैं जिनका अर्थ "के समान" होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "परहित सरिस धर्म नहिं भाई। पर पीड़ा सम नहिं अधमाई।।" \nप्रश्न: इन पंक्तियों में मानवता के किस सार्वभौमिक सिद्धांत की पुष्टि होती है?',
    'Verse: "There is no righteousness equal to helping others..." \nQuestion: Which universal principle of humanity is affirmed by these lines?',
    ['नैतिकता की कसौटी कर्मकांड नहीं, लोककल्याण और अहिंसा है', 'The measure of ethics is public welfare and non-violence, not mere ritual'],
    [
      ['धर्म केवल मंदिरों तक सीमित है', 'Religion is confined only to temples'],
      ['स्वार्थ साधना ही प्रकृति का नियम है', 'Selfishness is the sole law of nature'],
      ['दुर्बल लोगों की उपेक्षा करनी चाहिए', 'The weak should be ignored'],
    ],
    'यह चौपाई धर्म को पूजा-पाठ से ऊपर उठाकर सेवा, सहानुभूति और अहिंसा के व्यावहारिक मानदंड पर स्थापित करती है।',
    'This chaupai elevates religion from mere rituals to the practical standards of service, empathy, and non-injury.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "परहित सरिस धर्म नहिं भाई। पर पीड़ा सम नहिं अधमाई।।" \nप्रश्न: "परहित" शब्द का सही समास-विग्रह और समास का नाम क्या है?',
    'Verse: "Parhit saris dharm nahin bhai..." \nQuestion: What is the correct compound analysis and name for the word "Parhit"?',
    ['पर (दूसरों) का हित — संबंध तत्पुरुष समास', 'Welfare of others — Sambandha Tatpurusha Samasa'],
    [
      ['पर और हित — द्वंद्व समास', 'Par and hit — Dvandva Samasa'],
      ['पर है जो हित — कर्मधारय समास', 'Karmadharaya Samasa'],
      ['परों का समूह — द्विगु समास', 'Dvigu Samasa'],
    ],
    '"परहित" का विग्रह "पर (दूसरों) का हित" होता है, जिसमें संबंध कारक चिह्न "का" का लोप है, अतः संबंध तत्पुरुष समास है।',
    '"Parhit" expands to "par ka hit" (welfare of others), eliding the genitive case marker "ka", making it Sambandha Tatpurusha.',
    'HARD',
    { grammarRuleHi: 'जिस समास में उत्तर पद प्रधान हो तथा "का, के, की" विभक्ति का लोप हो, वहाँ संबंध तत्पुरुष समास होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "परहित सरिस धर्म नहिं भाई। पर पीड़ा सम नहिं अधमाई।।" \nप्रश्न: इस काव्य पंक्ति का छंद क्या है और प्रत्येक चरण में कितनी मात्राएँ होती हैं?',
    'Verse: "Parhit saris dharm nahin bhai. Par peeda sam nahin adhamai." \nQuestion: What is the meter of these poetic lines and how many matras are in each quarter?',
    ['चौपाई छंद — प्रत्येक चरण में 16 मात्राएँ', 'Chaupai meter — 16 matras in each quarter'],
    [
      ['दोहा छंद — 13 एवं 11 मात्राएँ', 'Doha meter — 13 and 11 matras'],
      ['रोला छंद — प्रत्येक चरण में 24 मात्राएँ', 'Rola meter — 24 matras'],
      ['बरवै छंद — 12 एवं 7 मात्राएँ', 'Barvai meter — 12 and 7 matras'],
    ],
    'यह रामचरितमानस की प्रसिद्ध चौपाई है; चौपाई एक सम मात्रिक छंद है जिसके प्रत्येक चरण में 16 मात्राएँ होती हैं।',
    'This is a famous Chaupai from Ramcharitmanas; Chaupai is a symmetric meter with 16 matras in each line.',
    'MEDIUM',
    { grammarRuleHi: 'चौपाई सम मात्रिक छंद है जिसमें चार चरण होते हैं और प्रत्येक चरण में 16 मात्राएँ होती हैं।' }
  ),

  // ================= पद्यांश 9: तुलसीदास (अवसर का महत्व) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "का बरषा जब कृषि सुखाने। समय चुकि पुनि का पछिताने।।" \nप्रश्न: इन पंक्तियों का मुख्य भाव क्या है?',
    'Verse: "What use is rain once the crop has withered? What use is repenting after missing the right time?" \nQuestion: What is the central theme of these lines?',
    ['अवसर बीत जाने के बाद मिला सहयोग या पश्चाताप व्यर्थ होता है', 'Help or regret after the opportune moment passes is futile'],
    [
      ['वर्षा होने से सूखी फसल पुनः हरी हो जाती है', 'Rain revives completely withered crops'],
      ['कृषि कार्य बिना समय देखे करना चाहिए', 'Farming should be done regardless of season'],
      ['पश्चाताप करने से बीता समय लौट आता है', 'Repenting brings back lost time'],
    ],
    'तुलसीदास कहते हैं कि जिस प्रकार फसल सूखने के बाद वर्षा बेकार है, उसी प्रकार समय चूक जाने पर पछताना निरर्थक है।',
    'Tulsidas says just as rain after crops dry up is useless, regretting after missing an opportunity serves no purpose.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "का बरषा जब कृषि सुखाने। समय चुकि पुनि का पछिताने।।" \nप्रश्न: "पुनि" शब्द का अर्थ क्या है?',
    'Verse: "Ka barsha jab krishi sukhane. Samay chuki puni ka pachhitane." \nQuestion: What does the word "puni" mean?',
    ['फिर या तत्पश्चात्', 'Then / afterwards'],
    [
      ['सदैव', 'Always'],
      ['तुरंत', 'Immediately'],
      ['कभी नहीं', 'Never'],
    ],
    '"पुनि" शब्द संस्कृत के "पुनः" का तद्भव/अवधी रूप है, जिसका अर्थ "फिर" या "बाद में" होता है।',
    '"Puni" is the Awadhi/Tadbhava form of Sanskrit "punah", meaning "then" or "afterwards".',
    'MEDIUM',
    { grammarRuleHi: '"पुनः" अव्यय से विकसित "पुनि" का प्रयोग समय के बाद की स्थिति दिखाने हेतु होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "का बरषा जब कृषि सुखाने। समय चुकि पुनि का पछिताने।।" \nप्रश्न: विद्यार्थियों के जीवन में इस लोकोक्ति/चौपाई की क्या व्यावहारिक सीख है?',
    'Verse: "What use is rain once the crop has withered?" \nQuestion: What practical lesson does this verse offer to students?',
    ['परीक्षा या लक्ष्य के लिए समय रहते तैयारी करना', 'Preparing well in time for exams or goals'],
    [
      ['परीक्षा के बाद पाठ्यक्रम पढ़ना', 'Reading the syllabus after the exam'],
      ['केवल परिणाम आने पर परिश्रम करना', 'Working hard only when results arrive'],
      ['वर्षा ऋतु में ही अध्ययन करना', 'Studying only during the rainy season'],
    ],
    'विद्यार्थी यदि सही समय पर परिश्रम न करें, तो अवसर निकलने के बाद पछताने से सफलता नहीं मिल सकती।',
    'If students do not work hard at the right time, regretting after the opportunity passes cannot bring success.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "का बरषा जब कृषि सुखाने। समय चुकि पुनि का पछिताने।।" \nप्रश्न: "बरषा" शब्द का शुद्ध तत्सम रूप और "कृषि" में प्रयुक्त स्वर-मात्रा की पहचान क्या है?',
    'Verse: "Ka barsha jab krishi sukhane..." \nQuestion: What is the pure Tatsama form of "barsha", and which vowel sound appears in "krishi"?',
    ['तत्सम "वर्षा" तथा "कृषि" के "कृ" में "ऋ" स्वर', 'Tatsama "Varsha" and the vowel "Ri" in "kri" of "krishi"'],
    [
      ['तत्सम "वरस" तथा "र" व्यंजन', 'Tatsama "Varas" and consonant "ra"'],
      ['तत्सम "बर्ष" तथा "इ" स्वर', 'Tatsama "Barsh" and vowel "i"'],
      ['तत्सम "वृष" तथा "उ" स्वर', 'Tatsama "Vrish" and vowel "u"'],
    ],
    '"बरषा" का तत्सम रूप "वर्षा" है (व का ब में परिवर्तन) तथा "कृषि" के प्रथम अक्षर "कृ" में "क् + ऋ" स्वर निहित है।',
    'The Tatsama form of "barsha" is "varsha", and the first syllable "kri" in "krishi" contains the vowel "Ri".',
    'HARD',
    { grammarRuleHi: 'तत्सम शब्द का प्रारंभिक "व्" तद्भव/लोकभाषा में प्रायः "ब्" हो जाता है (वर्षा → बरषा); "कृ" में "ऋ" स्वर होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "का बरषा जब कृषि सुखाने। समय चुकि पुनि का पछिताने।।" \nप्रश्न: इस कथन में किस अलंकार के माध्यम से बात को प्रभावी बनाया गया है?',
    'Verse: "What use is rain once the crop has withered? What use is repenting after missing the time?" \nQuestion: Which literary device makes the statement effective here?',
    ['दृष्टांत अलंकार (तथा प्रश्नोत्तर शैली)', 'Drishtant Alankara (exemplification through parallel imagery)'],
    [
      ['श्लेष अलंकार', 'Shlesha'],
      ['असंगति अलंकार', 'Asangati'],
      ['मानवीकरण अलंकार', 'Personification'],
    ],
    'यहाँ "समय बीतने पर पछतावा व्यर्थ है" इस बात को पुष्ट करने के लिए "सूखी खेती पर वर्षा" का समानांतर दृष्टांत दिया गया है।',
    'To reinforce that late regret is futile, a parallel example of rain on withered crops is presented, forming Drishtant Alankara.',
    'HARD',
    { grammarRuleHi: 'जहाँ उपमेय वाक्य और उपमान वाक्य में बिंब-प्रतिबिंब भाव से समानता दिखाई जाए, वहाँ दृष्टांत अलंकार होता है।' }
  ),

  // ================= पद्यांश 10: सूरदास (बाल लीला) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "मैया मोहिं दाऊ बहुत खिजायौ। मोसों कहत मोल को लीन्हों, तू जसुमति कब जायौ।।" \nप्रश्न: इस पद में श्रीकृष्ण किससे और किसकी शिकायत कर रहे हैं?',
    'Verse: "Mother, Dau teases me a lot; he tells me I was bought for a price and asks when Yashoda ever gave birth to me." \nQuestion: To whom and about whom is Shri Krishna complaining in this verse?',
    ['माता यशोदा से बड़े भाई बलराम (दाऊ) की', 'To mother Yashoda about his elder brother Balaram (Dau)'],
    [
      ['राधा से ग्वाल-बालों की', 'To Radha about the cowherd boys'],
      ['नंद बाबा से कंस के दूतों की', 'To Nanda Baba about Kansa’s messengers'],
      ['बलराम से गोपियों की', 'To Balaram about the gopis'],
    ],
    'बालक कृष्ण अपनी माता यशोदा से शिकायत करते हैं कि दाऊ (बलराम) उन्हें चिढ़ाते हैं कि वे खरीदे हुए हैं।',
    'Young Krishna complains to mother Yashoda that elder brother Dau (Balaram) teases him as being bought.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "मैया मोहिं दाऊ बहुत खिजायौ। मोसों कहत मोल को लीन्हों, तू जसुमति कब जायौ।।" \nप्रश्न: पद में प्रयुक्त "जायौ" शब्द का सही अर्थ क्या है?',
    'Verse: "...tu Jasumati kab jayo." \nQuestion: What is the correct meaning of the word "jayo" in this verse?',
    ['जन्म दिया या उत्पन्न किया', 'Gave birth to'],
    [
      ['चले गए', 'Went away'],
      ['ले आए', 'Brought'],
      ['बुलाया', 'Called'],
    ],
    'ब्रजभाषा में "जायौ" का अर्थ "जन्म दिया" होता है (अर्थात् यशोदा ने तुम्हें कब जन्म दिया)।',
    'In Brajbhasha, "jayo" means "gave birth to".',
    'MEDIUM',
    { grammarRuleHi: '"जायौ" ब्रजभाषा का भूतकालिक कृदंत रूप है जो "जनना/जन्म देना" अर्थ से संबद्ध है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "मैया मोहिं दाऊ बहुत खिजायौ। मोसों कहत मोल को लीन्हों, तू जसुमति कब जायौ।।" \nप्रश्न: इस पद में बालक के किस स्वाभाविक मनोविज्ञान का सजीव चित्रण हुआ है?',
    'Verse: "Mother, Dau teases me a lot..." \nQuestion: Which natural child psychology is vividly portrayed in this verse?',
    ['बच्चों का रूठना, भाई-बहनों की नोकझोंक और माँ से शिकायत करना', 'Children sulking, sibling teasing, and complaining to their mother'],
    [
      ['बच्चों की व्यापारिक चतुरता', 'Commercial cleverness of children'],
      ['राजनीतिक सत्ता के प्रति आकर्षण', 'Attraction toward political power'],
      ['संसार से वैराग्य का भाव', 'Sense of worldly renunciation'],
    ],
    'सूरदास ने बाल-सुलभ भोलेपन, भाई की चिढ़ाने की आदत और माँ के प्रति बालक के विश्वास का अत्यंत स्वाभाविक वर्णन किया है।',
    'Surdas naturally depicts childlike innocence, sibling teasing, and a child’s trust in appealing to the mother.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "मैया मोहिं दाऊ बहुत खिजायौ। मोसों कहत मोल को लीन्हों, तू जसुमति कब जायौ।।" \nप्रश्न: "खिजायौ" क्रिया का मानक खड़ी बोली रूप और क्रिया-प्रकार क्या है?',
    'Verse: "Maiya mohin Dau bahut khijayo..." \nQuestion: What is the standard Khadi Boli form and verb type of "khijayo"?',
    ['चिढ़ाया / खिझाया — सकर्मक प्रेरणार्थक क्रिया', 'Teased — transitive verb'],
    [
      ['खोया — अकर्मक क्रिया', 'Lost — intransitive verb'],
      ['खाया — द्विकर्मक क्रिया', 'Ate — ditransitive verb'],
      ['खिलाया — नामधातु क्रिया', 'Fed — nominal verb'],
    ],
    '"खिजायौ" का खड़ी बोली रूप "खिझाया/चिढ़ाया" है; इसमें "मोहिं" (मुझको) कर्म विद्यमान होने से यह सकर्मक क्रिया है।',
    'The standard Hindi form of "khijayo" is "khijhaya" (teased); with "mohin" (me) as object, it is a transitive verb.',
    'HARD',
    { grammarRuleHi: 'जिस क्रिया का फल कर्म पर पड़े (जैसे "दाऊ ने मुझे खिझाया"), वह सकर्मक क्रिया होती है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "मैया मोहिं दाऊ बहुत खिजायौ। मोसों कहत मोल को लीन्हों, तू जसुमति कब जायौ।।" \nप्रश्न: इस पद में मुख्य रूप से कौन-सा रस विद्यमान है?',
    'Verse: "Maiya mohin Dau bahut khijayo..." \nQuestion: Which poetic sentiment (Rasa) primarily pervades this verse?',
    ['वात्सल्य रस', 'Vatsalya Rasa (parental affection)'],
    [
      ['रौद्र रस', 'Raudra Rasa (fury)'],
      ['वीर रस', 'Veera Rasa (heroism)'],
      ['वीभत्स रस', 'Vibhatsa Rasa (disgust)'],
    ],
    'माता यशोदा के प्रति बालकृष्ण की बाल-सुलभ शिकायत में माता-पुत्र के स्नेह अर्थात् वात्सल्य रस की सृष्टि हुई है।',
    'Young Krishna’s innocent complaint to mother Yashoda evokes Vatsalya Rasa (maternal affection).',
    'EASY',
    { grammarRuleHi: 'जहाँ माता-पिता और संतान के बीच स्नेह या बाल-लीलाओं का वर्णन हो, वहाँ वात्सल्य रस होता है।' }
  ),

  // ================= पद्यांश 11: सूरदास (भक्ति व कृपा) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "चरन कमल बंदौ हरि राई। जाकी कृपा पंगु गिरि लंघै, अंधे को सब कछु दरसाई।।" \nप्रश्न: इन पंक्तियों में सूरदास किसकी वंदना कर रहे हैं और उनकी कृपा का क्या प्रभाव बताया है?',
    'Verse: "I bow to the lotus feet of Lord Hari, by whose grace the lame cross mountains and the blind see everything." \nQuestion: Whom does Surdas worship here and what effect of His grace is described?',
    ['श्रीकृष्ण (हरि) की, जिनकी कृपा से असंभव भी संभव हो जाता है', 'Lord Hari (Krishna), by whose grace even the impossible becomes possible'],
    [
      ['पर्वतों की, जिनसे नदियाँ निकलती हैं', 'Mountains, from which rivers originate'],
      ['कमल के पुष्पों की, जो तालाब में खिलते हैं', 'Lotus flowers blooming in ponds'],
      ['चिकित्सकों की, जो रोग दूर करते हैं', 'Physicians who cure diseases'],
    ],
    'सूरदास प्रभु श्रीहरि के चरण-कमलों की वंदना करते हुए कहते हैं कि उनकी कृपा से लँगड़ा पर्वत लाँघ सकता है और अंधा सब कुछ देख सकता है।',
    'Bowing to Lord Hari’s lotus feet, Surdas states that His grace enables the lame to scale mountains and the blind to see.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "चरन कमल बंदौ हरि राई। जाकी कृपा पंगु गिरि लंघै, अंधे को सब कछु दरसाई।।" \nप्रश्न: "पंगु" और "गिरि" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Verse: "...Jaki kripa pangu giri langhai..." \nQuestion: What are the correct meanings of the words "pangu" and "giri" respectively?',
    ['लँगड़ा (पैर से अशक्त) तथा पर्वत', 'Lame (physically disabled) and mountain'],
    [
      ['पक्षी तथा वृक्ष', 'Bird and tree'],
      ['अंधा तथा समुद्र', 'Blind and ocean'],
      ['निर्धन तथा महल', 'Poor and palace'],
    ],
    'संस्कृत तत्सम शब्द "पंगु" का अर्थ लँगड़ा/पैर से चलने में असमर्थ तथा "गिरि" का अर्थ पहाड़ या पर्वत होता है।',
    'The Tatsama word "pangu" means lame/unable to walk and "giri" means mountain.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "चरन कमल बंदौ हरि राई। जाकी कृपा पंगु गिरि लंघै, अंधे को सब कछु दरसाई।।" \nप्रश्न: पद्यांश से भक्त के किस आंतरिक भाव का बोध होता है?',
    'Verse: "I bow to the lotus feet of Lord Hari..." \nQuestion: What inner sentiment of the devotee is inferred from the verse?',
    ['ईश्वर के प्रति अटूट श्रद्धा, विश्वास और समर्पण', 'Unwavering reverence, faith, and surrender to the Divine'],
    [
      ['अपने शारीरिक बल का अहंकार', 'Pride in one’s physical strength'],
      ['कठिन परिस्थितियों से पलायन', 'Escaping from difficult situations'],
      ['देवताओं के प्रति संदेह', 'Skepticism toward deities'],
    ],
    'भक्त मानता है कि मानवीय सीमाओं से परे ईश्वर की कृपा सबसे बड़ी शक्ति है, जो उसकी अटूट आस्था को दर्शाता है।',
    'The devotee believes divine grace transcends human limitations, reflecting unwavering faith and surrender.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "चरन कमल बंदौ हरि राई। जाकी कृपा पंगु गिरि लंघै, अंधे को सब कछु दरसाई।।" \nप्रश्न: "चरन कमल" में कौन-सा समास है?',
    'Verse: "Charan kamal bandau Hari rai..." \nQuestion: Which compound (Samasa) is present in "Charan kamal"?',
    ['कर्मधारय समास', 'Karmadharaya Samasa'],
    [
      ['द्विगु समास', 'Dvigu Samasa'],
      ['द्वंद्व समास', 'Dvandva Samasa'],
      ['अव्ययीभाव समास', 'Avyayibhava Samasa'],
    ],
    '"चरन कमल" का विग्रह "कमल के समान चरण" या "कमल रूपी चरण" होता है, जहाँ उपमेय-उपमान संबंध होने से कर्मधारय समास है।',
    '"Charan kamal" expands to "feet like a lotus", showing an upameya-upamana relationship, hence Karmadharaya Samasa.',
    'HARD',
    { grammarRuleHi: 'जिस समास के पूर्व व उत्तर पद में विशेषण-विशेष्य अथवा उपमेय-उपमान का संबंध हो, वह कर्मधारय समास होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "चरन कमल बंदौ हरि राई। जाकी कृपा पंगु गिरि लंघै, अंधे को सब कछु दरसाई।।" \nप्रश्न: "चरन कमल बंदौ हरि राई" में कौन-सा अलंकार प्रयुक्त हुआ है?',
    'Verse: "Charan kamal bandau Hari rai..." \nQuestion: Which figure of speech is used in "Charan kamal bandau Hari rai"?',
    ['रूपक अलंकार', 'Metaphor (Rupaka)'],
    [
      ['यमक अलंकार', 'Yamaka'],
      ['श्लेष अलंकार', 'Shlesha'],
      ['संदेह अलंकार', 'Sandeha'],
    ],
    'यहाँ "चरन" (उपमेय) पर "कमल" (उपमान) का सीधा अभेद आरोप किया गया है, इसलिए रूपक अलंकार है।',
    'Here "lotus" is directly superimposed onto "feet" without comparative markers, forming Rupaka (Metaphor).',
    'EASY',
    { grammarRuleHi: 'उपमेय में उपमान के निषेधरहित आरोप को रूपक अलंकार कहते हैं (जैसे चरन-कमल, मुख-चंद्र)।' }
  ),

  // ================= पद्यांश 12: रहीम (प्रेम और विश्वास) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना मिलै, मिलै गाँठ परि जाय।।" \nप्रश्न: इस दोहे का मुख्य संदेश क्या है?',
    'Verse: "Rahim says, do not snap the thread of love abruptly; once broken it does not rejoin, and if rejoined, a knot remains." \nQuestion: What is the central message of this couplet?',
    ['प्रेम और आपसी संबंधों को संभालकर रखना चाहिए', 'Love and interpersonal relationships must be nurtured carefully'],
    [
      ['धागे से बने वस्त्र पहनने चाहिए', 'One should wear clothes made of thread'],
      ['संबंध टूटने पर कभी बात नहीं करनी चाहिए', 'One should never speak after a fallout'],
      ['कपड़ों में गाँठ लगाना उपयोगी होता है', 'Tying knots in fabric is useful'],
    ],
    'रहीम समझाते हैं कि रिश्तों की डोर बहुत नाजुक होती है; एक बार विश्वास टूट जाए तो पहले जैसा सहज जुड़ाव नहीं रह पाता।',
    'Rahim explains that the bond of love is delicate; once trust breaks, it cannot return to its former seamless state.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना मिलै, मिलै गाँठ परि जाय।।" \nप्रश्न: "चटकाय" शब्द का प्रसंगानुकूल अर्थ क्या है?',
    'Verse: "Rahiman dhaga prem ka, mat todo chatkay..." \nQuestion: What is the contextual meaning of the word "chatkay"?',
    ['झटके से या शीघ्रता/लापरवाही से', 'With a jerk or abruptly'],
    [
      ['धीरे-धीरे', 'Slowly'],
      ['सजाकर', 'By decorating'],
      ['चमक के साथ', 'With brightness'],
    ],
    '"चटकाय" का अर्थ झटके के साथ या आवेश में आकर अचानक तोड़ देना है।',
    '"Chatkay" means breaking something abruptly with a sudden jerk or in impulse.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना मिलै, मिलै गाँठ परि जाय।।" \nप्रश्न: दोहे में "गाँठ परि जाय" किस मनोवैज्ञानिक स्थिति का प्रतीक है?',
    'Verse: "...and if rejoined, a knot remains." \nQuestion: What psychological state does "gaanth pari jay" (a knot remains) symbolize?',
    ['मनमुटाव, संदेह या पुरानी कटुता का अवशेष', 'Lingering resentment, suspicion, or trace of past bitterness'],
    [
      ['गहन मित्रता का आरंभ', 'Beginning of deep friendship'],
      ['स्मरण शक्ति का बढ़ना', 'Increase in memory power'],
      ['आर्थिक समृद्धि का संकेत', 'Sign of economic prosperity'],
    ],
    'जिस प्रकार टूटे धागे को जोड़ने पर गाँठ रह जाती है, उसी प्रकार टूटे रिश्तों के जुड़ने पर भी मन में कहीं संदेह या कसक बनी रहती है।',
    'Just as tying a broken thread leaves a knot, patched-up relationships often retain subtle mistrust or hurt.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना मिलै, मिलै गाँठ परि जाय।।" \nप्रश्न: "गाँठ" शब्द का तत्सम रूप और "मत तोड़ो" में "मत" का व्याकरणिक भेद क्या है?',
    'Verse: "Rahiman dhaga prem ka, mat todo chatkay... milai gaanth pari jay." \nQuestion: What is the Tatsama form of "gaanth" and the grammatical category of "mat" in "mat todo"?',
    ['तत्सम "ग्रंथि" तथा "मत" निषेधवाचक अव्यय (निपात)', 'Tatsama "Granthi" and "mat" as a prohibitive indeclinable'],
    [
      ['तत्सम "गंठ" तथा "मत" प्रश्नवाचक सर्वनाम', 'Tatsama "Ganth" and interrogative pronoun'],
      ['तत्सम "गुंफ" तथा "मत" भाववाचक संज्ञा', 'Tatsama "Gumph" and abstract noun'],
      ['तत्सम "ग्रंथ" तथा "मत" परिमाणवाचक विशेषण', 'Tatsama "Granth" and quantitative adjective'],
    ],
    '"गाँठ" का शुद्ध संस्कृत तत्सम रूप "ग्रंथि" है तथा "मत" किसी कार्य से रोकने वाला निषेधवाचक अव्यय है।',
    'The Tatsama form of "gaanth" is "granthi", and "mat" is a negative/prohibitive indeclinable particle.',
    'HARD',
    { grammarRuleHi: '"मत, न, नहीं" का प्रयोग निषेध प्रकट करने के लिए अव्यय/निपात के रूप में किया जाता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना मिलै, मिलै गाँठ परि जाय।।" \nप्रश्न: "धागा प्रेम का" वाक्यांश में कौन-सा अलंकार निहित है?',
    'Verse: "Rahiman dhaga prem ka..." \nQuestion: Which figure of speech is embedded in "dhaga prem ka" (thread of love)?',
    ['रूपक अलंकार', 'Metaphor (Rupaka)'],
    [
      ['यमक अलंकार', 'Yamaka'],
      ['भ्रांतिमान अलंकार', 'Bhrantiman'],
      ['अतिशयोक्ति अलंकार', 'Atishayokti'],
    ],
    'प्रेम पर धागे का आरोप ("प्रेम रूपी धागा") होने के कारण यहाँ रूपक अलंकार प्रयुक्त हुआ है।',
    'Love is directly identified as a thread ("thread of love"), constituting Rupaka (Metaphor).',
    'MEDIUM',
    { grammarRuleHi: 'जहाँ उपमेय (प्रेम) पर उपमान (धागा) का अभेद आरोप हो, वहाँ रूपक अलंकार होता है।' }
  ),

  // ================= पद्यांश 13: रहीम (पानी राखिए - श्लेष) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन पानी राखिए, बिनु पानी सब सून। पानी गए न ऊबरै, मोती, मानुष, चून।।" \nप्रश्न: इस दोहे में "मानुष" (मनुष्य) के संदर्भ में "पानी" का क्या अर्थ है?',
    'Verse: "Rahim says, preserve water/grace, without it all is desolate; once lost, pearl, human, and flour cannot thrive." \nQuestion: In this couplet, what does "pani" mean in the context of "manush" (human)?',
    ['सम्मान, विनम्रता और आत्मगौरव', 'Honor, humility, and self-respect'],
    [
      ['केवल पीने का जल', 'Only drinking water'],
      ['शारीरिक चमक', 'Physical luster'],
      ['अन्न और धन', 'Grain and wealth'],
    ],
    'मनुष्य के संदर्भ में "पानी" से तात्पर्य उसकी प्रतिष्ठा, लाज, विनम्रता और स्वाभिमान से है, जिसके बिना उसका जीवन व्यर्थ माना जाता है।',
    'In reference to a human being, "pani" signifies dignity, humility, and honor, without which life loses meaning.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन पानी राखिए, बिनु पानी सब सून। पानी गए न ऊबरै, मोती, मानुष, चून।।" \nप्रश्न: दोहे में "मोती" और "चून" (आटा/चूना) के लिए "पानी" शब्द के क्रमशः क्या अर्थ हैं?',
    'Verse: "...Pani gaye na ubarai, moti, manush, choon." \nQuestion: What do the meanings of "pani" signify for "moti" (pearl) and "choon" (flour/lime) respectively?',
    ['मोती के लिए "चमक" और चून के लिए "जल"', '"Luster" for pearl and "water" for flour/lime'],
    [
      ['मोती के लिए "जल" और चून के लिए "रंग"', '"Water" for pearl and "color" for flour'],
      ['दोनों के लिए केवल "सम्मान"', 'Only "honor" for both'],
      ['मोती के लिए "मूल्य" और चून के लिए "हवा"', '"Price" for pearl and "air" for flour'],
    ],
    'मोती में पानी का अर्थ कांति/चमक से है (चमक जाने पर मोती मूल्यहीन हो जाता है) और चून (आटे/चूने) में पानी का अर्थ साधारण जल से है।',
    'For a pearl, "pani" means luster (without shine it is worthless), while for flour/lime it means literal water.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन पानी राखिए, बिनु पानी सब सून। पानी गए न ऊबरै, मोती, मानुष, चून।।" \nप्रश्न: "पानी गए न ऊबरै" से रहीम जीवन के किस मूल्य की रक्षा पर बल देते हैं?',
    'Verse: "...without water/grace all is desolate; once lost, pearl, human, and flour cannot recover." \nQuestion: Which life value does Rahim emphasize protecting through "pani gaye na ubarai"?',
    ['अपनी मर्यादा और नैतिक प्रतिष्ठा की रक्षा, क्योंकि खोया सम्मान सहज वापस नहीं आता', 'Protecting dignity and moral honor, as lost honor cannot easily be restored'],
    [
      ['सदैव जल में स्नान करते रहने की', 'Constantly bathing in water'],
      ['कीमती रत्नों का संग्रह करने की', 'Collecting expensive gems'],
      ['अत्यधिक भोजन बनाने की', 'Cooking excessive food'],
    ],
    'रहीम चेतावनी देते हैं कि जिस तरह चमक खोकर मोती और जल बिना आटा अनुपयोगी हो जाता है, वैसे ही स्वाभिमान खोकर मनुष्य नहीं उबर सकता।',
    'Rahim warns that just as a lusterless pearl or dry flour cannot serve its purpose, a person who loses dignity cannot easily recover.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन पानी राखिए, बिनु पानी सब सून। पानी गए न ऊबरै, मोती, मानुष, चून।।" \nप्रश्न: "मोती", "मानुष" और "चून" शब्दों के तत्सम रूप क्रमशः क्या हैं?',
    'Verse: "...moti, manush, choon." \nQuestion: What are the Tatsama forms of "moti", "manush", and "choon" respectively?',
    ['मौक्तिक, मनुष्य, चूर्ण', 'Mauktika, Manushya, Churna'],
    [
      ['मुक्ता, मानवता, चूना', 'Mukta, Manavata, Choona'],
      ['मोतिक, मनुज, चूनर', 'Motik, Manuj, Chunar'],
      ['मणि, मानुषी, चरण', 'Mani, Manushi, Charan'],
    ],
    '"मोती" का तत्सम "मौक्तिक", "मानुष" का तत्सम "मनुष्य" तथा "चून" का तत्सम "चूर्ण" होता है।',
    'The Tatsama forms are "Mauktika" for moti, "Manushya" for manush, and "Churna" for choon.',
    'HARD',
    { grammarRuleHi: 'तत्सम से तद्भव परिवर्तन में "ण" ध्वनि प्रायः "न" में बदल जाती है (चूर्ण → चून)।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन पानी राखिए, बिनु पानी सब सून। पानी गए न ऊबरै, मोती, मानुष, चून।।" \nप्रश्न: इस दोहे की दूसरी पंक्ति ("पानी गए न ऊबरै...") में कौन-सा अलंकार है?',
    'Verse: "Pani gaye na ubarai, moti, manush, choon." \nQuestion: Which figure of speech is famously exemplified in the second line of this couplet?',
    ['श्लेष अलंकार', 'Shlesha (Pun)'],
    [
      ['यमक अलंकार', 'Yamaka'],
      ['उत्प्रेक्षा अलंकार', 'Utpreksha'],
      ['अतिशयोक्ति अलंकार', 'Atishayokti'],
    ],
    'यहाँ एक ही शब्द "पानी" के मोती, मानुष और चून के संदर्भ में तीन भिन्न अर्थ (चमक, सम्मान, जल) चिपके हुए हैं, अतः श्लेष अलंकार है।',
    'Here a single word "pani" carries three distinct meanings (luster, honor, water) across the three nouns, exemplifying Shlesha.',
    'EASY',
    { grammarRuleHi: 'जहाँ एक ही शब्द के एक से अधिक अर्थ निकलते हों (अर्थ चिपके हों), वहाँ श्लेष अलंकार होता है।' }
  ),

  // ================= पद्यांश 14: रहीम (परोपकार) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान।।" \nप्रश्न: इस दोहे का मुख्य संदेश क्या है?',
    'Verse: "Trees do not eat their own fruits, nor do ponds drink their own water; Rahim says, noble people accumulate wealth for the welfare of others." \nQuestion: What is the main message of this couplet?',
    ['सज्जन व्यक्ति अपनी संपत्ति का संचय दूसरों के कल्याण के लिए करते हैं', 'Noble people accumulate wealth for the benefit of others'],
    [
      ['वृक्षों और तालाबों को अपना उपयोग स्वयं करना चाहिए', 'Trees and ponds should consume their own resources'],
      ['धन केवल व्यक्तिगत भोग के लिए एकत्र किया जाता है', 'Wealth is gathered solely for personal indulgence'],
      ['सज्जन लोगों को कभी धन नहीं कमाना चाहिए', 'Noble people should never earn wealth'],
    ],
    'रहीम प्रकृति के उदाहरण से समझाते हैं कि जैसे वृक्ष और सरोवर दूसरों के काम आते हैं, वैसे ही सज्जनों की संपत्ति परहित में लगती है।',
    'Using nature’s examples, Rahim teaches that just as trees and ponds serve others, the wealth of noble souls serves public good.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान।।" \nप्रश्न: दोहे में "पान" तथा "सुजान" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Verse: "...saravar piyahi na paan. Kahi Rahim parkaj hit, sampati sanchahi sujan." \nQuestion: What are the correct meanings of "paan" and "sujan" in this couplet?',
    ['पान = जल (पीने का पानी); सुजान = सज्जन/सद्बुद्धि व्यक्ति', 'Paan = water; Sujan = noble/wise person'],
    [
      ['पान = पत्ता; सुजान = अनजान व्यक्ति', 'Paan = betel leaf; Sujan = ignorant person'],
      ['पान = भोजन; सुजान = व्यापारी', 'Paan = food; Sujan = merchant'],
      ['पान = रस; सुजान = स्वार्थी व्यक्ति', 'Paan = juice; Sujan = selfish person'],
    ],
    'यहाँ "पान" (संस्कृत "पानीय") का अर्थ जल है और "सुजान" (सु + जान) का अर्थ श्रेष्ठ या सज्जन व्यक्ति है।',
    'Here "paan" (from Sanskrit paniya) means water, and "sujan" means a noble, wise person.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान।।" \nप्रश्न: प्रकृति के माध्यम से रहीम समाज के समक्ष कौन-सा आदर्श प्रस्तुत करते हैं?',
    'Verse: "Trees do not eat their own fruits, nor do ponds drink their own water..." \nQuestion: Through nature’s example, what ideal does Rahim present before society?',
    ['निसर्ग की भाँति निःस्वार्थ सेवा और परोपकार का आदर्श', 'The ideal of selfless service and benevolence like nature'],
    [
      ['प्रकृति का अंधाधुंध दोहन करने का आदर्श', 'The ideal of reckless exploitation of nature'],
      ['केवल कृषि पर निर्भर रहने का आदर्श', 'The ideal of relying solely on farming'],
      ['एकाकी जीवन जीने का आदर्श', 'The ideal of living a solitary life'],
    ],
    'प्रकृति स्वयं उपभोग न कर सबको देती है; इसी प्रकार समर्थ नागरिकों को भी समाजोपयोगी दान और सेवा करनी चाहिए।',
    'Nature gives without consuming for itself; similarly, capable citizens should practice charity and social service.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान।।" \nप्रश्न: "तरुवर" और "सँचहि" शब्दों के संबंध में सही व्याकरणिक कथन कौन-सा है?',
    'Verse: "Taruvar phal nahin khat hai... sampati sanchahi sujan." \nQuestion: Which grammatical statement about "taruvar" and "sanchahi" is correct?',
    ['"तरुवर" में "वर" (श्रेष्ठ) प्रत्यय है तथा "सँचहि" का अर्थ "संचय करते हैं" क्रियापद है', '"Taruvar" has the suffix "var" (best) and "sanchahi" is a verb meaning "accumulate"'],
    [
      ['"तरुवर" स्त्रीलिंग है तथा "सँचहि" विशेषण है', '"Taruvar" is feminine and "sanchahi" is an adjective'],
      ['"तरुवर" अव्यय है तथा "सँचहि" संज्ञा है', '"Taruvar" is indeclinable and "sanchahi" is a noun'],
      ['"तरुवर" बहुवचन है तथा "सँचहि" सर्वनाम है', '"Taruvar" is plural and "sanchahi" is a pronoun'],
    ],
    '"तरु" (वृक्ष) में "वर" प्रत्यय लगकर "तरुवर" (श्रेष्ठ वृक्ष) बना है तथा "सँचहि" ब्रज/अवधी क्रिया है जिसका अर्थ "एकत्र करते हैं" है।',
    '"Taruvar" combines "taru" (tree) with "var" (noble/best), and "sanchahi" is a poetic verb meaning "they accumulate".',
    'HARD',
    { grammarRuleHi: '"वर" प्रत्यय श्रेष्ठता के अर्थ में प्रयुक्त होता है (जैसे तरुवर, नृपवर, प्राणवर)।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान।।" \nप्रश्न: इस दोहे में "संपति सँचहि सुजान" में तथा पूरे दोहे में क्रमशः कौन-से अलंकार हैं?',
    'Verse: "Taruvar phal nahin khat hai... sampati sanchahi sujan." \nQuestion: Which figures of speech appear in "sampati sanchahi sujan" and the couplet as a whole respectively?',
    ['अनुप्रास अलंकार तथा दृष्टांत अलंकार', 'Alliteration (Anuprasa) and Exemplification (Drishtant)'],
    [
      ['श्लेष तथा यमक अलंकार', 'Shlesha and Yamaka'],
      ['संदेह तथा भ्रांतिमान अलंकार', 'Sandeha and Bhrantiman'],
      ['विरोधाभास तथा अतिशयोक्ति', 'Virodhabhasa and Hyperbole'],
    ],
    '"संपति सँचहि सुजान" में "स" वर्ण की आवृत्ति से अनुप्रास है तथा वृक्ष-सरोवर के उदाहरण से सज्जन की बात सिद्ध करने में दृष्टांत अलंकार है।',
    'Repetition of "s" in "sampati sanchahi sujan" gives Anuprasa, while proving the noble trait via trees and ponds forms Drishtant.',
    'MEDIUM',
    { grammarRuleHi: 'प्रथम चरण के उदाहरण द्वारा द्वितीय चरण के कथन की पुष्टि होने पर दृष्टांत अलंकार होता है।' }
  ),

  // ================= पद्यांश 15: रहीम (छोटों का महत्व) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन देख बड़ेन को, लघु न दीजिये डारि। जहाँ काम आवै सुई, कहा करै तलवारि।।" \nप्रश्न: इस दोहे का मुख्य भाव क्या है?',
    'Verse: "Rahim says, seeing the mighty, do not discard the small; where a needle is needed, what can a sword do?" \nQuestion: What is the central theme of this couplet?',
    ['बड़ों की उपस्थिति में छोटों या साधारण वस्तुओं की उपेक्षा नहीं करनी चाहिए', 'One should not disregard small people or humble things in the presence of the mighty'],
    [
      ['तलवार सुई से अधिक उपयोगी हर जगह होती है', 'A sword is more useful than a needle everywhere'],
      ['केवल बड़े और शक्तिशाली लोगों का ही सम्मान करना चाहिए', 'Only big and powerful people deserve respect'],
      ['सुई से युद्ध भी लड़ा जा सकता है', 'Even a war can be fought with a needle'],
    ],
    'रहीम कहते हैं कि प्रत्येक वस्तु और व्यक्ति का अपना विशिष्ट स्थान व उपयोग होता है; सिलाई का काम सुई ही कर सकती है, तलवार नहीं।',
    'Rahim states that every person and object has its unique utility; only a needle can stitch, not a sword.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन देख बड़ेन को, लघु न दीजिये डारि। जहाँ काम आवै सुई, कहा करै तलवारि।।" \nप्रश्न: "लघु न दीजिये डारि" में "डारि" शब्द का क्या अर्थ है?',
    'Verse: "...laghu na dijiye daari." \nQuestion: What does the word "daari" mean in "laghu na dijiye daari"?',
    ['फेंक देना या त्याग देना', 'To discard or throw away'],
    [
      ['सँभालकर रखना', 'To preserve safely'],
      ['चमकाना', 'To polish'],
      ['जोड़ देना', 'To join'],
    ],
    '"डारि देना" ब्रज/अवधी का मुहावरेदार प्रयोग है, जिसका अर्थ "फेंक देना" या "उपेक्षा करके छोड़ देना" होता है।',
    '"Daari dena" is a poetic idiom meaning "to throw away" or "to cast aside".',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन देख बड़ेन को, लघु न दीजिये डारि। जहाँ काम आवै सुई, कहा करै तलवारि।।" \nप्रश्न: सुई और तलवार के उदाहरण से समाज और कार्यस्थल के लिए क्या निष्कर्ष निकलता है?',
    'Verse: "...where a needle is needed, what can a sword do?" \nQuestion: What inference can be drawn for society and workplaces from the needle and sword example?',
    ['हर छोटे-बड़े सहयोगी और कौशल की अपनी विशिष्ट उपयोगिता होती है', 'Every small and big contributor and skill has its distinct utility'],
    [
      ['तलवार बनाने वालों को सुई का प्रयोग बंद कर देना चाहिए', 'Swordmakers should stop using needles'],
      ['सैन्य शक्ति से सभी समस्याएँ सुलझ जाती हैं', 'Military power solves all problems'],
      ['छोटे कार्यों को महत्व नहीं देना चाहिए', 'Minor tasks should not be given importance'],
    ],
    'समाज और संगठन में उच्च पदों के साथ-साथ जमीनी स्तर के कार्यकर्ताओं का महत्व भी अपरिहार्य होता है।',
    'In society and organizations, grassroots workers are just as indispensable in their roles as high-ranking officials.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन देख बड़ेन को, लघु न दीजिये डारि। जहाँ काम आवै सुई, कहा करै तलवारि।।" \nप्रश्न: दोहे में प्रयुक्त "लघु" शब्द का सटीक विलोम तथा "सुई" का तत्सम रूप क्या है?',
    'Verse: "...laghu na dijiye daari. Jahan kaam aavai sui..." \nQuestion: What is the exact antonym of "laghu" and the Tatsama form of "sui"?',
    ['लघु का विलोम "गुरु/दीर्घ" तथा सुई का तत्सम "सूचिका/सूची"', 'Antonym of laghu is "guru/dirgha" and Tatsama of sui is "suchika/suchi"'],
    [
      ['लघु का विलोम "छोटा" तथा सुई का तत्सम "सुया"', 'Antonym "chhota" and Tatsama "suya"'],
      ['लघु का विलोम "न्यून" तथा सुई का तत्सम "सिलाई"', 'Antonym "nyun" and Tatsama "silai"'],
      ['लघु का विलोम "अल्प" तथा सुई का तत्सम "सूत्र"', 'Antonym "alpa" and Tatsama "sutra"'],
    ],
    '"लघु" (छोटा) का मानक तत्सम विलोम "गुरु" या "दीर्घ" होता है तथा "सुई" तद्भव शब्द का तत्सम रूप "सूचिका" (या सूची) है।',
    'The standard Tatsama antonym of "laghu" is "guru/dirgha", and the Tatsama of "sui" is "suchika/suchi".',
    'HARD',
    { grammarRuleHi: 'तत्सम शब्द "सूचिका/सूची" से तद्भव "सुई" विकसित हुआ है; "लघु" का विलोम "गुरु" या "दीर्घ" होता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "रहिमन देख बड़ेन को, लघु न दीजिये डारि। जहाँ काम आवै सुई, कहा करै तलवारि।।" \nप्रश्न: इस दोहे का मुख्य अलंकार कौन-सा है?',
    'Verse: "Rahiman dekh baden ko, laghu na dijiye daari. Jahan kaam aavai sui, kaha karai talwari." \nQuestion: What is the primary figure of speech in this couplet?',
    ['दृष्टांत अलंकार', 'Drishtant Alankara (Exemplification)'],
    [
      ['उपमा अलंकार', 'Upama'],
      ['यमक अलंकार', 'Yamaka'],
      ['उत्प्रेक्षा अलंकार', 'Utpreksha'],
    ],
    'प्रथम पंक्ति के नीति-कथन ("लघु की उपेक्षा न करें") को दूसरी पंक्ति में सुई और तलवार के उदाहरण से सिद्ध किया गया है, अतः दृष्टांत अलंकार है।',
    'The maxim in the first line is substantiated by the example of the needle and sword in the second line, making it Drishtant.',
    'MEDIUM',
    { grammarRuleHi: 'दृष्टांत अलंकार में एक सामान्य बात कहकर दूसरी पंक्ति में उदाहरण द्वारा उसकी पुष्टि की जाती है।' }
  ),

  // ================= पद्यांश 16: बिहारी (कनक कनक - यमक) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाए बौराय जग, या पाए बौराय।।" \nप्रश्न: बिहारी के अनुसार किसमें धतूरे से भी सौ गुना अधिक मादकता (नशा) होती है?',
    'Verse: "Gold is a hundred times more intoxicating than datura; eating the one makes the world mad, merely possessing the other drives it mad." \nQuestion: According to Bihari, what has a hundred times more intoxication than datura?',
    ['स्वर्ण या धन-संपत्ति (सोना) में', 'Gold or wealth'],
    [
      ['मधुर संगीत में', 'Sweet music'],
      ['वर्षा के जल में', 'Rainwater'],
      ['अध्ययन और ज्ञान में', 'Study and knowledge'],
    ],
    'कवि बिहारी कहते हैं कि धतूरा तो खाने पर नशा करता है, पर स्वर्ण (धन) तो केवल मिल जाने भर से मनुष्य को अहंकारी व मदहोश कर देता है।',
    'Bihari says datura intoxicates only when eaten, whereas gold (wealth) makes humans arrogant and intoxicated merely upon possession.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाए बौराय जग, या पाए बौराय।।" \nप्रश्न: दोहे में "बौराय" शब्द का अर्थ क्या है?',
    'Verse: "...va khaye bauray jag, ya paye bauray." \nQuestion: What does the word "bauray" mean in this couplet?',
    ['पागल या मदहोश हो जाना', 'Goes mad or loses senses'],
    [
      ['शांत हो जाना', 'Becomes calm'],
      ['सचेत हो जाना', 'Becomes alert'],
      ['निर्धन हो जाना', 'Becomes poor'],
    ],
    '"बौराना" का अर्थ बुद्धि भ्रमित होना, पागलपन आना या अहंकार में मदहोश हो जाना है।',
    '"Bauray" means losing one’s senses, becoming delirious, or turning arrogant.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाए बौराय जग, या पाए बौराय।।" \nप्रश्न: इस दोहे से धन-संपत्ति के प्रति किस मनोवैज्ञानिक सत्य का पता चलता है?',
    'Verse: "Gold is a hundred times more intoxicating than datura..." \nQuestion: What psychological truth about wealth does this couplet reveal?',
    ['संपत्ति का मोह और मद विवेकशीलता को नष्ट कर सकता है', 'Attachment to and pride in wealth can destroy sound judgment'],
    [
      ['सोना खाने योग्य औषधि है', 'Gold is an edible medicine'],
      ['धतूरा खाने से व्यक्ति बुद्धिमान बनता है', 'Eating datura makes a person wise'],
      ['निर्धन व्यक्ति कभी भी प्रसन्न नहीं रह सकता', 'A poor person can never be happy'],
    ],
    'कवि संकेत करते हैं कि भौतिक धन का नशा रासायनिक नशे से भी अधिक घातक है क्योंकि यह मनुष्य के विवेक को हर लेता है।',
    'The poet suggests that the intoxication of material wealth is deadlier than physical intoxicants because it clouds human wisdom.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाए बौराय जग, या पाए बौराय।।" \nप्रश्न: "मादकता" शब्द का व्याकरणिक भेद और मूल शब्द क्या हैं?',
    'Verse: "Kanak kanak te sau guni, madakta adhikay..." \nQuestion: What is the grammatical category and root word of "madakta"?',
    ['भाववाचक संज्ञा; मूल शब्द "मादक" + "ता" प्रत्यय', 'Abstract noun; root word "madak" + suffix "ta"'],
    [
      ['गुणवाचक विशेषण; मूल शब्द "मद" + "इक" प्रत्यय', 'Qualitative adjective; root "mad" + suffix "ik"'],
      ['सकर्मक क्रिया; मूल धातु "माद"', 'Transitive verb; root "mad"'],
      ['रीतिवाचक क्रियाविशेषण', 'Adverb of manner'],
    ],
    '"मादक" विशेषण में "ता" प्रत्यय जुड़ने से "मादकता" (नशीलापन) भाववाचक संज्ञा का निर्माण होता है।',
    'Adding the suffix "ta" to the adjective "madak" creates the abstract noun "madakta" (intoxicating quality).',
    'HARD',
    { grammarRuleHi: 'विशेषण शब्दों में "ता" या "त्व" प्रत्यय जोड़कर भाववाचक संज्ञाएँ बनाई जाती हैं (जैसे मादक + ता = मादकता)।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाए बौराय जग, या पाए बौराय।।" \nप्रश्न: इस दोहे में "कनक कनक" के कारण कौन-सा अलंकार अत्यंत प्रसिद्ध है?',
    'Verse: "Kanak kanak te sau guni..." \nQuestion: Which figure of speech is famously exemplified by "kanak kanak" in this couplet?',
    ['यमक अलंकार', 'Yamaka Alankara'],
    [
      ['श्लेष अलंकार', 'Shlesha Alankara'],
      ['उपमा अलंकार', 'Upama Alankara'],
      ['उत्प्रेक्षा अलंकार', 'Utpreksha Alankara'],
    ],
    'यहाँ "कनक" शब्द दो बार आया है और दोनों बार उसका भिन्न अर्थ है—एक "सोना (स्वर्ण)" और दूसरा "धतूरा", अतः यहाँ यमक अलंकार है।',
    'Here the word "kanak" occurs twice with two different meanings—gold and datura—forming the classic example of Yamaka.',
    'EASY',
    { grammarRuleHi: 'जहाँ एक ही शब्द की आवृत्ति एक से अधिक बार हो और प्रत्येक बार उसका अर्थ भिन्न हो, वहाँ यमक अलंकार होता है।' }
  ),

  // ================= पद्यांश 17: बिहारी (बतरस लालच) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बतरस लालच लाल की, मुरली धरी लुकाय। सौंह करै भौंहनि हँसै, दैन कहै नटि जाय।।" \nप्रश्न: इस दोहे में गोपियाँ श्रीकृष्ण की मुरली क्यों छिपा लेती हैं?',
    'Verse: "Tempted by the joy of talking to Shri Krishna, she hid his flute; she swears she doesn’t have it, smiles through her eyebrows, promises to return it and then refuses." \nQuestion: Why does the gopi hide Shri Krishna’s flute in this couplet?',
    ['श्रीकृष्ण से बातचीत करने का सुख (बतरस) पाने के लिए', 'To enjoy the pleasure of conversing with Shri Krishna'],
    [
      ['मुरली को नदी में फेंकने के लिए', 'To throw the flute into the river'],
      ['स्वयं संगीत सीखने के लिए', 'To learn music herself'],
      ['बलराम को उपहार देने के लिए', 'To gift it to Balaram'],
    ],
    'गोपी श्रीकृष्ण से बातें करने के आनंद ("बतरस") के लोभ में उनकी बांसुरी छिपा लेती है और मीठी छेड़छाड़ करती है।',
    'Out of eagerness for the sweet delight of conversing with Krishna ("bataras"), she hides his flute playfully.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बतरस लालच लाल की, मुरली धरी लुकाय। सौंह करै भौंहनि हँसै, दैन कहै नटि जाय।।" \nप्रश्न: दोहे में "सौंह करै" तथा "नटि जाय" वाक्यांशों के क्रमशः क्या अर्थ हैं?',
    'Verse: "...Saunh karai bhaunhani hansai, dain kahai nati jay." \nQuestion: What do the phrases "saunh karai" and "nati jay" mean respectively?',
    ['शपथ/कसम खाती है तथा देने से मुकर जाती (मना कर देती) है', 'Swears an oath and refuses/denies giving it'],
    [
      ['सो जाती है तथा नाचने लगती है', 'Falls asleep and starts dancing'],
      ['गीत गाती है तथा लौट जाती है', 'Sings a song and returns'],
      ['क्रोध करती है तथा रोने लगती है', 'Gets angry and starts crying'],
    ],
    '"सौंह" का अर्थ सौगंध या कसम है और "नटि जाना" का अर्थ मना कर देना या मुकर जाना होता है।',
    '"Saunh" means swearing an oath, and "nati jay" means backing out or playfully refusing.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बतरस लालच लाल की, मुरली धरी लुकाय। सौंह करै भौंहनि हँसै, दैन कहै नटि जाय।।" \nप्रश्न: "भौंहनि हँसै" से गोपी की किस चेष्टा का बोध होता है?',
    'Verse: "...bhaunhani hansai..." \nQuestion: What gesture is conveyed by "bhaunhani hansai"?',
    ['मुँह से मना करते हुए भी आँखों और भौंहों के संकेतों से मन का हँसना', 'Smiling subtly with eyebrows and eyes while verbally denying'],
    [
      ['भय से काँपने लगना', 'Trembling with fear'],
      ['किसी को जोर से डाँटना', 'Scolding someone loudly'],
      ['गहरी नींद में सो जाना', 'Sleeping deeply'],
    ],
    'यह सूक्ष्म हाव-भाव (अनुभाव) दर्शाता है कि वह ऊपर से कसम खाकर इनकार करती है, किंतु उसकी भौंहें और आँखें हँसी छिपा नहीं पातीं।',
    'This subtle gesture (anubhava) shows she denies solemnly with words while her eyebrows betray suppressed laughter.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बतरस लालच लाल की, मुरली धरी लुकाय। सौंह करै भौंहनि हँसै, दैन कहै नटि जाय।।" \nप्रश्न: "बतरस" शब्द का सही संधि-विच्छेद या समास-विग्रह क्या है?',
    'Verse: "Bataras lalach Lal ki..." \nQuestion: What is the correct compound analysis of the word "bataras"?',
    ['बातों का रस — संबंध तत्पुरुष समास', 'Delight of conversation — Sambandha Tatpurusha Samasa'],
    [
      ['बात और रस — द्वंद्व समास', 'Baat and ras — Dvandva Samasa'],
      ['बिना रस के — अव्ययीभाव समास', 'Without delight — Avyayibhava Samasa'],
      ['तीन रसों का समूह — द्विगु समास', 'Group of three flavors — Dvigu Samasa'],
    ],
    '"बतरस" का अर्थ "बातचीत का आनंद/रस" है; यहाँ "का" विभक्ति के लोप से संबंध तत्पुरुष समास बनता है।',
    '"Bataras" means the joy of conversation ("baaton ka ras"), forming Sambandha Tatpurusha Samasa.',
    'HARD',
    { grammarRuleHi: '"बात + रस" में "बात" का तद्भव संक्षिप्त रूप "बत" जुड़कर संबंध तत्पुरुष समास "बतरस" बनाता है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "बतरस लालच लाल की, मुरली धरी लुकाय। सौंह करै भौंहनि हँसै, दैन कहै नटि जाय।।" \nप्रश्न: इस दोहे में मुख्य रूप से कौन-सा रस और नायक-नायिका का कौन-सा भाव वर्णित है?',
    'Verse: "Bataras lalach Lal ki, murali dhari lukay..." \nQuestion: Which Rasa is primarily depicted in this couplet?',
    ['संयोग शृंगार रस', 'Samyoga Shringara Rasa (union/playful love)'],
    [
      ['करुण रस', 'Karuna Rasa (pathos)'],
      ['भयानक रस', 'Bhayanaka Rasa (terror)'],
      ['वीर रस', 'Veera Rasa (heroism)'],
    ],
    'कृष्ण और गोपी के बीच मुरली छिपाने की मधुर विनोदपूर्ण क्रीड़ा में संयोग शृंगार रस की उत्कृष्ट अभिव्यक्ति हुई है।',
    'The playful teasing between Krishna and the gopi over hiding the flute expresses Samyoga Shringara Rasa.',
    'EASY',
    { grammarRuleHi: 'जहाँ नायक-नायिका के मिलन, संवाद और मधुर चेष्टाओं का वर्णन हो, वहाँ संयोग शृंगार रस होता है।' }
  ),

  // ================= पद्यांश 18: बिहारी (आडंबर विरोध) =================
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "जपमाला छापैं तिलक, सरै न एकौ कामु। मन काँचै नाचै बृथा, साँचै राँचै रामु।।" \nप्रश्न: इस दोहे में बिहारी ने किस प्रवृत्ति का खंडन किया है?',
    'Verse: "Counting rosary beads and wearing religious marks accomplishes nothing; a fickle mind dances in vain, for God delights only in truth." \nQuestion: Which tendency does Bihari criticize in this couplet?',
    ['बाहरी धार्मिक आडंबर और दिखावे का', 'External religious ostentation and hypocrisy'],
    [
      ['सच्ची प्रार्थना और ईमानदारी का', 'True prayer and honesty'],
      ['शिक्षा और कला के प्रचार का', 'Promotion of education and art'],
      ['संगीत और नृत्य के प्रशिक्षण का', 'Training in music and dance'],
    ],
    'बिहारी कहते हैं कि केवल माला जपने या माथे पर तिलक लगाने से कोई कार्य सिद्ध नहीं होता, यदि मन में सच्चाई न हो।',
    'Bihari states that mere rosary beads and forehead marks achieve nothing if the heart lacks sincerity.',
    'EASY'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "जपमाला छापैं तिलक, सरै न एकौ कामु। मन काँचै नाचै बृथा, साँचै राँचै रामु।।" \nप्रश्न: "बृथा" और "राँचै" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Verse: "...man kanchai nachai britha, sanchai ranchai Ramu." \nQuestion: What are the correct meanings of "britha" and "ranchai" respectively?',
    ['बृथा = व्यर्थ/बेकार; राँचै = प्रसन्न होते/रीझते हैं', 'Britha = in vain; Ranchai = is pleased/delights in'],
    [
      ['बृथा = सत्य; राँचै = रूठते हैं', 'Britha = true; Ranchai = gets upset'],
      ['बृथा = कष्ट; राँचै = रचना करते हैं', 'Britha = pain; Ranchai = creates'],
      ['बृथा = बुद्धि; राँचै = नाचते हैं', 'Britha = intellect; Ranchai = dances'],
    ],
    '"बृथा" (तत्सम "वृथा") का अर्थ व्यर्थ है तथा "राँचै" का अर्थ रीझना, अनुरक्त होना या प्रसन्न होना है।',
    '"Britha" (from Sanskrit vritha) means in vain, and "ranchai" means to be pleased or captivated by.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "जपमाला छापैं तिलक, सरै न एकौ कामु। मन काँचै नाचै बृथा, साँचै राँचै रामु।।" \nप्रश्न: "मन काँचै नाचै बृथा" से कवि का क्या तात्पर्य है?',
    'Verse: "...a raw/fickle mind dances in vain..." \nQuestion: What does the poet mean by "man kanchai nachai britha"?',
    ['अपवित्र और चंचल मन वाला व्यक्ति दिखावटी साधना में भटकता रहता है', 'A person with an impure, fickle mind wanders in hollow rituals'],
    [
      ['कच्चे मिट्टी के बर्तन में नृत्य करना चाहिए', 'One should dance with raw clay pots'],
      ['सच्चे भक्तों को नृत्य बिल्कुल नहीं करना चाहिए', 'True devotees must never dance'],
      ['मन को बिना सोचे-समझे चंचल रखना अच्छा है', 'Keeping the mind fickle without thought is good'],
    ],
    '"कच्चा मन" अस्थिर, कपटपूर्ण और अपरिपक्व मन का प्रतीक है, जो बाहरी दिखावे में उलझकर व्यर्थ भटकता है।',
    'An "unripe/raw mind" symbolizes an unstable, insincere heart that wastes effort on outward show.',
    'MEDIUM'
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "जपमाला छापैं तिलक, सरै न एकौ कामु। मन काँचै नाचै बृथा, साँचै राँचै रामु।।" \nप्रश्न: "काँचै" और "साँचै" शब्दों के मानक तत्सम रूप क्या हैं?',
    'Verse: "Man kanchai nachai britha, sanchai ranchai Ramu." \nQuestion: What are the standard Tatsama forms of "kanchai" and "sanchai"?',
    ['कच्चा (तद्भव/प्राकृत "कच्च") और सत्य (साँच का तत्सम)', 'Raw/unripe and Satya (truth)'],
    [
      ['काँच और साँचा', 'Kaanch and Saancha'],
      ['कंचन और संचय', 'Kanchan and Sanchay'],
      ['काया और साया', 'Kaya and Saya'],
    ],
    '"साँच" तद्भव शब्द का शुद्ध संस्कृत तत्सम रूप "सत्य" है; "काँचै" (कच्चे) का अर्थ अपरिपक्व या असत्य से है।',
    'The pure Sanskrit Tatsama form of "saanch" is "satya" (truth); "kanchai" denotes raw/immature/insincere.',
    'HARD',
    { grammarRuleHi: '"सत्य" तत्सम शब्द से तद्भव "साँच/सच" विकसित हुआ है; अनुनासिक ध्वनि तद्भव शब्दों की पहचान मानी जाती है।' }
  ),
  q(
    'अपठित पद्यांश',
    'भक्ति एवं नीति पद्यांश',
    'पद्यांश: "जपमाला छापैं तिलक, सरै न एकौ कामु। मन काँचै नाचै बृथा, साँचै राँचै रामु।।" \nप्रश्न: "राँचै रामु" तथा इस पूरे दोहे में मुख्यतः कौन-से अलंकार एवं रस हैं?',
    'Verse: "Japmala chhapai tilak... sanchai ranchai Ramu." \nQuestion: Which figure of speech and Rasa appear in "ranchai Ramu" and the couplet respectively?',
    ['अनुप्रास अलंकार तथा शांत रस', 'Anuprasa (Alliteration) and Shanta Rasa'],
    [
      ['श्लेष अलंकार तथा रौद्र रस', 'Shlesha and Raudra Rasa'],
      ['यमक अलंकार तथा वीभत्स रस', 'Yamaka and Vibhatsa Rasa'],
      ['उपमा अलंकार तथा हास्य रस', 'Upama and Hasya Rasa'],
    ],
    '"राँचै रामु" में "र" वर्ण की आवृत्ति से अनुप्रास अलंकार है तथा आडंबर त्यागकर सत्य अपनाने के उपदेश में शांत/भक्ति रस है।',
    'Repetition of "r" in "ranchai Ramu" forms Anuprasa, while the call to abandon hypocrisy for truth evokes Shanta Rasa.',
    'MEDIUM',
    { grammarRuleHi: 'संसार की निस्सारता, बाह्याडंबर के त्याग और आत्मिक सत्य के उपदेश में शांत रस की प्रधानता होती है।' }
  ),

  // ================= गद्यांश 19: शिक्षा का वास्तविक उद्देश्य =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षा का वास्तविक उद्देश्य केवल डिग्रियाँ प्राप्त करना या परीक्षा उत्तीर्ण करना नहीं है, बल्कि मनुष्य में विवेक, संवेदनशीलता और चरित्र का निर्माण करना है। सच्ची शिक्षा व्यक्ति को स्वावलंबी बनाने के साथ-साथ समाज के प्रति उत्तरदायी भी बनाती है।" \nप्रश्न: गद्यांश के अनुसार शिक्षा का वास्तविक उद्देश्य क्या है?',
    'Passage: "The true aim of education is not merely obtaining degrees or passing exams, but building wisdom, sensitivity, and character in a human being..." \nQuestion: According to the passage, what is the true aim of education?',
    ['विवेक, संवेदनशीलता और चरित्र का निर्माण करना', 'Building wisdom, sensitivity, and character'],
    [
      ['केवल अधिक अंक प्राप्त करना', 'Merely scoring high marks'],
      ['अधिक से अधिक डिग्रियाँ एकत्र करना', 'Collecting as many degrees as possible'],
      ['केवल व्यक्तिगत लाभ के लिए पद पाना', 'Attaining status solely for personal gain'],
    ],
    'गद्यांश स्पष्ट कहता है कि शिक्षा केवल प्रमाणपत्र या परीक्षा पास करने तक सीमित नहीं, इसका मूल लक्ष्य विवेक और चरित्र का विकास है।',
    'The passage explicitly states that education is not limited to degrees or exams; its core goal is developing wisdom and character.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षा का वास्तविक उद्देश्य केवल डिग्रियाँ प्राप्त करना या परीक्षा उत्तीर्ण करना नहीं है, बल्कि मनुष्य में विवेक, संवेदनशीलता और चरित्र का निर्माण करना है। सच्ची शिक्षा व्यक्ति को स्वावलंबी बनाने के साथ-साथ समाज के प्रति उत्तरदायी भी बनाती है।" \nप्रश्न: गद्यांश में प्रयुक्त "स्वावलंबी" शब्द का सही अर्थ क्या है?',
    'Passage: "...True education makes a person self-reliant (swavalambi) as well as socially responsible." \nQuestion: What is the correct meaning of the word "swavalambi" in the passage?',
    ['अपने पैरों पर खड़ा होने वाला या आत्मनिर्भर', 'Self-reliant or independent'],
    [
      ['दूसरों पर पूरी तरह आश्रित', 'Completely dependent on others'],
      ['अत्यंत आलसी और निष्क्रिय', 'Extremely lazy and inactive'],
      ['समाज से अलग रहने वाला', 'Living isolated from society'],
    ],
    '"स्वावलंबी" (स्व + अवलंब + ई) का अर्थ स्वयं का सहारा लेने वाला अर्थात् आत्मनिर्भर होता है।',
    '"Swavalambi" (swa + avalamb + i) means relying on oneself, i.e., self-reliant.',
    'MEDIUM',
    { grammarRuleHi: '"स्व + अवलंबी" में दीर्घ स्वर संधि (अ + अ = आ) होकर "स्वावलंबी" शब्द बनता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षा का वास्तविक उद्देश्य केवल डिग्रियाँ प्राप्त करना या परीक्षा उत्तीर्ण करना नहीं है, बल्कि मनुष्य में विवेक, संवेदनशीलता और चरित्र का निर्माण करना है। सच्ची शिक्षा व्यक्ति को स्वावलंबी बनाने के साथ-साथ समाज के प्रति उत्तरदायी भी बनाती है।" \nप्रश्न: यदि कोई शिक्षित व्यक्ति समाज की समस्याओं के प्रति उदासीन है, तो गद्यांश के आधार पर क्या निष्कर्ष निकलेगा?',
    'Passage: "...True education makes a person self-reliant as well as responsible toward society." \nQuestion: If an educated person is indifferent to social problems, what can be inferred from the passage?',
    ['उसने सच्ची शिक्षा के सामाजिक उद्देश्य को आत्मसात नहीं किया है', 'They have not internalized the social purpose of true education'],
    [
      ['उसकी डिग्रियाँ नकली हैं', 'Their degrees are fake'],
      ['समाज के प्रति उत्तरदायित्व अशिक्षितों का काम है', 'Social responsibility is the job of the uneducated'],
      ['संवेदनशीलता केवल कवियों में होती है', 'Sensitivity exists only in poets'],
    ],
    'गद्यांश के अनुसार सच्ची शिक्षा सामाजिक उत्तरदायित्व सिखाती है; अतः उदासीनता दर्शाती है कि शिक्षा का वास्तविक मर्म अधूरा है।',
    'Since true education instills social responsibility, indifference implies its true essence has not been realized.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षा का वास्तविक उद्देश्य केवल डिग्रियाँ प्राप्त करना या परीक्षा उत्तीर्ण करना नहीं है, बल्कि मनुष्य में विवेक, संवेदनशीलता और चरित्र का निर्माण करना है। सच्ची शिक्षा व्यक्ति को स्वावलंबी बनाने के साथ-साथ समाज के प्रति उत्तरदायी भी बनाती है।" \nप्रश्न: "संवेदनशीलता" शब्द में कौन-से उपसर्ग और प्रत्यय प्रयुक्त हुए हैं?',
    'Passage: "...building wisdom, sensitivity (samvedansheelta) and character..." \nQuestion: Which prefix and suffix are used in the word "samvedansheelta"?',
    ['"सम्" उपसर्ग तथा "ता" प्रत्यय', '"Sam" prefix and "ta" suffix'],
    [
      ['"स" उपसर्ग तथा "ई" प्रत्यय', '"Sa" prefix and "i" suffix'],
      ['"सं" उपसर्ग तथा "शील" उपसर्ग', '"San" prefix and "sheel" prefix'],
      ['"वि" उपसर्ग तथा "त्व" प्रत्यय', '"Vi" prefix and "tva" suffix'],
    ],
    '"संवेदनशीलता" का विश्लेषण "सम् (उपसर्ग) + वेदन (मूल शब्द) + शील (प्रत्यय) + ता (भाववाचक प्रत्यय)" होता है।',
    '"Samvedansheelta" breaks down into "sam" (prefix) + "vedan" (root) + "sheel" + "ta" (abstract noun suffix).',
    'HARD',
    { grammarRuleHi: '"सम्" उपसर्ग के बाद "व" आने पर "म्" का अनुस्वार (ं) हो जाता है (सम् + वेदन = संवेदन)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षा का वास्तविक उद्देश्य केवल डिग्रियाँ प्राप्त करना या परीक्षा उत्तीर्ण करना नहीं है, बल्कि मनुष्य में विवेक, संवेदनशीलता और चरित्र का निर्माण करना है। सच्ची शिक्षा व्यक्ति को स्वावलंबी बनाने के साथ-साथ समाज के प्रति उत्तरदायी भी बनाती है।" \nप्रश्न: इस गद्यांश का सर्वाधिक उपयुक्त शीर्षक क्या होगा?',
    'Passage: "The true aim of education is not merely obtaining degrees..." \nQuestion: What would be the most suitable title for this passage?',
    ['सच्ची शिक्षा का स्वरूप और उद्देश्य', 'The Nature and Purpose of True Education'],
    [
      ['परीक्षा प्रणाली की कठिनाइयाँ', 'Difficulties of the Exam System'],
      ['डिग्रियों का व्यापारिक मूल्य', 'Commercial Value of Degrees'],
      ['स्वावलंबन का इतिहास', 'History of Self-Reliance'],
    ],
    'पूरा गद्यांश शिक्षा के वास्तविक अर्थ, चरित्र निर्माण और सामाजिक दायित्व पर केंद्रित है, अतः यही शीर्षक सर्वाधिक उपयुक्त है।',
    'The entire passage focuses on the true meaning, character building, and social duty of education.',
    'EASY'
  ),

  // ================= गद्यांश 20: मातृभाषा और प्रारंभिक शिक्षा =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "बालक अपनी प्रारंभिक अवस्था में घर के परिवेश और मातृभाषा के माध्यम से संसार को सबसे सहजता से समझता है। जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं और उनकी सृजनशीलता खिल उठती है।" \nप्रश्न: प्राथमिक शिक्षा मातृभाषा में देने का मुख्य लाभ क्या बताया गया है?',
    'Passage: "In early childhood, a child understands the world most naturally through the home environment and mother tongue. When primary education is imparted in the mother tongue, children express thoughts fearlessly and their creativity blossoms." \nQuestion: What is stated as the main benefit of imparting primary education in the mother tongue?',
    ['बच्चे निडर होकर अभिव्यक्ति करते हैं और उनकी सृजनशीलता विकसित होती है', 'Children express themselves fearlessly and their creativity develops'],
    [
      ['बच्चों को विद्यालय कम जाना पड़ता है', 'Children have to attend school less often'],
      ['बच्चे अन्य भाषाएँ कभी नहीं सीख पाते', 'Children can never learn other languages'],
      ['पाठ्यपुस्तकों की आवश्यकता समाप्त हो जाती है', 'Textbooks are no longer needed'],
    ],
    'गद्यांश के अनुसार मातृभाषा में सीखने से बालक का संकोच दूर होता है, अभिव्यक्ति सहज होती है और सृजनशीलता बढ़ती है।',
    'According to the passage, learning in the mother tongue removes hesitation, eases expression, and nurtures creativity.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "बालक अपनी प्रारंभिक अवस्था में घर के परिवेश और मातृभाषा के माध्यम से संसार को सबसे सहजता से समझता है। जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं और उनकी सृजनशीलता खिल उठती है।" \nप्रश्न: "परिवेश" शब्द का पर्यायवाची शब्द कौन-सा है?',
    'Passage: "...understands the world through home environment (parivesh) and mother tongue..." \nQuestion: Which word is a synonym of "parivesh"?',
    ['वातावरण या पर्यावरण', 'Surroundings or environment'],
    [
      ['परिणाम', 'Result'],
      ['परिधान', 'Attire'],
      ['पलायन', 'Migration'],
    ],
    '"परिवेश" का अर्थ चारों ओर का वातावरण, माहौल या परिवृत्त होता है।',
    '"Parivesh" means the surrounding environment or milieu.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "बालक अपनी प्रारंभिक अवस्था में घर के परिवेश और मातृभाषा के माध्यम से संसार को सबसे सहजता से समझता है। जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं और उनकी सृजनशीलता खिल उठती है।" \nप्रश्न: प्रारंभिक कक्षाओं में अपरिचित भाषा थोपने का संभावित दुष्परिणाम क्या हो सकता है?',
    'Passage: "...When primary education is imparted in the mother tongue, children express thoughts fearlessly..." \nQuestion: What could be the likely consequence of imposing an unfamiliar language in early grades?',
    ['बच्चों में संकोच, रटने की प्रवृत्ति और अभिव्यक्ति में बाधा उत्पन्न होना', 'Hesitation, rote memorization, and hindered expression among children'],
    [
      ['बच्चों की सृजनशीलता तुरंत दोगुनी हो जाना', 'Children’s creativity instantly doubling'],
      ['घर के परिवेश से जुड़ाव और बढ़ जाना', 'Stronger attachment to the home environment'],
      ['बच्चों का शारीरिक कद तेजी से बढ़ना', 'Rapid increase in children’s physical height'],
    ],
    'मातृभाषा सहज अभिव्यक्ति और समझ देती है; अतः इसके अभाव में बच्चे भय या संकोच अनुभव कर सकते हैं और उनकी मौलिकता दब सकती है।',
    'Since the mother tongue enables natural expression, imposing an unfamiliar tongue can cause fear, hesitation, and suppressed originality.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "बालक अपनी प्रारंभिक अवस्था में घर के परिवेश और मातृभाषा के माध्यम से संसार को सबसे सहजता से समझता है। जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं और उनकी सृजनशीलता खिल उठती है।" \nप्रश्न: "प्रारंभिक" शब्द में कौन-सा प्रत्यय जुड़ा है और "खिल उठती है" किस प्रकार की क्रिया है?',
    'Passage: "Balak apni prarambhik avastha mein... srijansheelta khil uthti hai." \nQuestion: Which suffix is attached in "prarambhik", and what type of verb is "khil uthti hai"?',
    ['"इक" प्रत्यय तथा "खिल उठती है" संयुक्त क्रिया', '"Ik" suffix and "khil uthti hai" is a compound verb'],
    [
      ['"ई" प्रत्यय तथा नामधातु क्रिया', '"I" suffix and nominal verb'],
      ['"अक" प्रत्यय तथा प्रेरणार्थक क्रिया', '"Ak" suffix and causative verb'],
      ['"ता" प्रत्यय तथा द्विकर्मक क्रिया', '"Ta" suffix and ditransitive verb'],
    ],
    '"प्रारंभ" में "इक" प्रत्यय जुड़कर "प्रारंभिक" विशेषण बना है, तथा "खिल" और "उठना" दो धातुओं के मेल से "खिल उठती है" संयुक्त क्रिया बनी है।',
    'Adding "-ik" to "prarambh" yields the adjective "prarambhik", and combining "khil" and "uthna" forms the compound verb "khil uthti hai".',
    'HARD',
    { grammarRuleHi: 'जब दो या अधिक क्रियाओं के संयोग से एक पूर्ण क्रिया बने (जैसे खिल + उठना), तो उसे संयुक्त क्रिया कहते हैं।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "बालक अपनी प्रारंभिक अवस्था में घर के परिवेश और मातृभाषा के माध्यम से संसार को सबसे सहजता से समझता है। जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं और उनकी सृजनशीलता खिल उठती है।" \nप्रश्न: "जब प्राथमिक शिक्षा मातृभाषा में दी जाती है, तो बच्चे बिना भय के अपने विचार व्यक्त करते हैं" — रचना के आधार पर यह किस प्रकार का वाक्य है?',
    'Passage: "When primary education is given in the mother tongue, children express their thoughts fearlessly." \nQuestion: Based on sentence structure, what type of sentence is this in Hindi?',
    ['मिश्र वाक्य', 'Complex sentence (Mishra Vakya)'],
    [
      ['सरल वाक्य', 'Simple sentence (Saral Vakya)'],
      ['संयुक्त वाक्य', 'Compound sentence (Sanyukta Vakya)'],
      ['विस्मयादिबोधक वाक्य', 'Exclamatory sentence'],
    ],
    '"जब... तो..." योजक के द्वारा एक प्रधान उपवाक्य और एक आश्रित क्रियाविशेषण उपवाक्य जुड़े हैं, अतः यह मिश्र वाक्य है।',
    'Connected by "jab... to..." ("when... then..."), it links a main clause and a subordinate clause, making it a complex sentence.',
    'MEDIUM',
    { grammarRuleHi: 'जिस वाक्य में एक मुख्य उपवाक्य और एक या अधिक आश्रित उपवाक्य हों (जैसे जब-तब, यदि-तो, जैसा-वैसा), वह मिश्र वाक्य होता है।' }
  ),

  // ================= गद्यांश 21: पर्यावरण संरक्षण और वृक्षारोपण =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "वन पृथ्वी के फेफड़े कहलाते हैं, क्योंकि वे कार्बन डाइऑक्साइड सोखकर हमें प्राणवायु ऑक्सीजन प्रदान करते हैं। अंधाधुंध कटाई से जलवायु संकट गहरा रहा है; अतः केवल पौधे लगाना ही पर्याप्त नहीं, बल्कि उनका पालन-पोषण कर वृक्ष बनाना भी हमारा कर्तव्य है।" \nप्रश्न: वनों को "पृथ्वी के फेफड़े" क्यों कहा गया है?',
    'Passage: "Forests are called the lungs of the Earth because they absorb carbon dioxide and provide life-giving oxygen..." \nQuestion: Why are forests called the "lungs of the Earth"?',
    ['वे कार्बन डाइऑक्साइड ग्रहण कर जीवनदायी ऑक्सीजन देते हैं', 'They absorb carbon dioxide and release life-giving oxygen'],
    [
      ['वे पृथ्वी की सतह को ठंडा पत्थर बना देते हैं', 'They turn the Earth’s surface into cold stone'],
      ['वे केवल लकड़ी और फर्नीचर उपलब्ध कराते हैं', 'They only provide timber and furniture'],
      ['वे समुद्र के जल को खारा बनाते हैं', 'They make ocean water salty'],
    ],
    'गद्यांश में बताया गया है कि फेफड़ों की भाँति वन वायु शुद्ध कर कार्बन डाइऑक्साइड सोखते हैं और ऑक्सीजन देते हैं।',
    'The passage states that like lungs, forests purify air by absorbing carbon dioxide and releasing oxygen.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "वन पृथ्वी के फेफड़े कहलाते हैं, क्योंकि वे कार्बन डाइऑक्साइड सोखकर हमें प्राणवायु ऑक्सीजन प्रदान करते हैं। अंधाधुंध कटाई से जलवायु संकट गहरा रहा है; अतः केवल पौधे लगाना ही पर्याप्त नहीं, बल्कि उनका पालन-पोषण कर वृक्ष बनाना भी हमारा कर्तव्य है।" \nप्रश्न: "अंधाधुंध" शब्द का प्रसंगानुकूल अर्थ क्या है?',
    'Passage: "...Indiscriminate (andhadhundh) felling is deepening the climate crisis..." \nQuestion: What is the contextual meaning of the word "andhadhundh"?',
    ['बिना सोचे-समझे और अत्यधिक मात्रा में', 'Recklessly and excessively without thought'],
    [
      ['नियंत्रित एवं वैज्ञानिक ढंग से', 'In a controlled and scientific manner'],
      ['केवल सूखे वृक्षों का चयन करके', 'By selecting only dry trees'],
      ['धार्मिक अनुष्ठान के साथ', 'With religious rituals'],
    ],
    '"अंधाधुंध" का अर्थ विवेकहीनता से, बिना परिणाम की चिंता किए बेतहाशा कार्य करना है।',
    '"Andhadhundh" means acting recklessly and excessively without considering consequences.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "वन पृथ्वी के फेफड़े कहलाते हैं, क्योंकि वे कार्बन डाइऑक्साइड सोखकर हमें प्राणवायु ऑक्सीजन प्रदान करते हैं। अंधाधुंध कटाई से जलवायु संकट गहरा रहा है; अतः केवल पौधे लगाना ही पर्याप्त नहीं, बल्कि उनका पालन-पोषण कर वृक्ष बनाना भी हमारा कर्तव्य है।" \nप्रश्न: गद्यांश के अंतिम वाक्य से पर्यावरण अभियानों की किस कमी की ओर संकेत मिलता है?',
    'Passage: "...Hence merely planting saplings is not enough; nurturing them into trees is also our duty." \nQuestion: What shortcoming of environmental drives does the final sentence point toward?',
    ['पौधारोपण के बाद पौधों की देखभाल और संरक्षण का अभाव', 'Lack of post-plantation care and protection of saplings'],
    [
      ['पौधे लगाने की तकनीक का न होना', 'Absence of planting techniques'],
      ['पौधों के बीजों का महंगा होना', 'High cost of plant seeds'],
      ['लोगों द्वारा वनों में निवास करना', 'People living inside forests'],
    ],
    'लेखक का संकेत है कि प्रायः लोग पौधा लगाकर फोटो खिंचवा लेते हैं, पर उसकी सिंचाई व सुरक्षा न करने से वह बड़ा वृक्ष नहीं बन पाता।',
    'The author hints that merely planting saplings without watering and protecting them fails to grow mature trees.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "वन पृथ्वी के फेफड़े कहलाते हैं, क्योंकि वे कार्बन डाइऑक्साइड सोखकर हमें प्राणवायु ऑक्सीजन प्रदान करते हैं। अंधाधुंध कटाई से जलवायु संकट गहरा रहा है; अतः केवल पौधे लगाना ही पर्याप्त नहीं, बल्कि उनका पालन-पोषण कर वृक्ष बनाना भी हमारा कर्तव्य है।" \nप्रश्न: "प्राणवायु" शब्द का समास-विग्रह तथा "पालन-पोषण" में प्रयुक्त समास क्रमशः क्या हैं?',
    'Passage: "...provide us life-breath (pranvayu) oxygen... their nurturing (palan-poshan)..." \nQuestion: What is the compound analysis of "pranvayu" and the Samasa in "palan-poshan" respectively?',
    ['"प्राण देने वाली वायु" (मध्यमपदलोपी कर्मधारय) तथा "पालन और पोषण" (द्वंद्व समास)', '"Air that gives life" (Karmadharaya) and "palan aur poshan" (Dvandva)'],
    [
      ['दोनों में द्विगु समास', 'Dvigu Samasa in both'],
      ['"प्राणों की वायु" (तत्पुरुष) तथा "पालन-पोषण" (अव्ययीभाव)', 'Tatpurusha and Avyayibhava'],
      ['दोनों में बहुव्रीहि समास', 'Bahuvrihi Samasa in both'],
    ],
    '"प्राणवायु" अर्थात् प्राण (जीवन) देने वाली वायु (कर्मधारय) तथा "पालन-पोषण" का विग्रह "पालन और पोषण" होने से द्वंद्व समास है।',
    '"Pranvayu" means life-giving air (Karmadharaya), and "palan-poshan" expands to "palan aur poshan" (Dvandva).',
    'HARD',
    { grammarRuleHi: 'जिस समास में दोनों पद प्रधान हों और विग्रह करने पर "और/एवं/या" लगे, वहाँ द्वंद्व समास होता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "वन पृथ्वी के फेफड़े कहलाते हैं, क्योंकि वे कार्बन डाइऑक्साइड सोखकर हमें प्राणवायु ऑक्सीजन प्रदान करते हैं। अंधाधुंध कटाई से जलवायु संकट गहरा रहा है; अतः केवल पौधे लगाना ही पर्याप्त नहीं, बल्कि उनका पालन-पोषण कर वृक्ष बनाना भी हमारा कर्तव्य है।" \nप्रश्न: "गहरा रहा है" में "गहरा" से बनी क्रिया किस प्रकार की है?',
    'Passage: "...jalvayu sankat gahara raha hai..." \nQuestion: What type of verb is formed from the adjective "gahara" in "gahara raha hai"?',
    ['नामधातु क्रिया', 'Nominal verb (Namadhatu Kriya)'],
    [
      ['सकर्मक क्रिया', 'Transitive verb'],
      ['प्रेरणार्थक क्रिया', 'Causative verb'],
      ['पूर्वकालिक क्रिया', 'Absolutive verb'],
    ],
    '"गहरा" विशेषण से "गहराना" क्रिया बनी है; संज्ञा, सर्वनाम या विशेषण से बनने वाली क्रियाएँ नामधातु क्रिया कहलाती हैं।',
    'The verb "gaharana" is formed from the adjective "gahara"; verbs derived from nouns, pronouns, or adjectives are Namadhatu verbs.',
    'HARD',
    { grammarRuleHi: 'संज्ञा, सर्वनाम या विशेषण शब्दों में प्रत्यय जोड़कर बनाई गई क्रिया को नामधातु क्रिया कहते हैं (जैसे हाथ→हथियाना, गहरा→गहराना)।' }
  ),

  // ================= गद्यांश 22: जल संरक्षण =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जल ही जीवन है, किंतु पृथ्वी पर उपलब्ध मीठे जल की मात्रा अत्यंत सीमित है। अनियंत्रित दोहन और नदियों के प्रदूषण ने कई क्षेत्रों में पेयजल संकट खड़ा कर दिया है। वर्षा जल संचयन और मितव्ययी उपयोग से ही हम भावी पीढ़ियों के लिए जल सुरक्षित रख सकते हैं।" \nप्रश्न: गद्यांश में पेयजल संकट के मुख्य कारण क्या बताए गए हैं?',
    'Passage: "Water is life, yet the amount of fresh water on Earth is very limited. Uncontrolled extraction and river pollution have created a drinking water crisis in many regions..." \nQuestion: What are the main causes of the drinking water crisis mentioned in the passage?',
    ['जल का अनियंत्रित दोहन और नदियों का प्रदूषण', 'Uncontrolled extraction of water and pollution of rivers'],
    [
      ['वर्षा का अत्यधिक होना', 'Excessive rainfall'],
      ['वृक्षारोपण का बढ़ना', 'Increase in tree plantation'],
      ['समुद्री जल का विस्तार', 'Expansion of seawater'],
    ],
    'गद्यांश के अनुसार जल के अनियंत्रित उपयोग (दोहन) और नदियों के प्रदूषित होने से पीने के पानी का संकट पैदा हुआ है।',
    'According to the passage, unchecked extraction and river pollution have caused the drinking water crisis.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जल ही जीवन है, किंतु पृथ्वी पर उपलब्ध मीठे जल की मात्रा अत्यंत सीमित है। अनियंत्रित दोहन और नदियों के प्रदूषण ने कई क्षेत्रों में पेयजल संकट खड़ा कर दिया है। वर्षा जल संचयन और मितव्ययी उपयोग से ही हम भावी पीढ़ियों के लिए जल सुरक्षित रख सकते हैं।" \nप्रश्न: "मितव्ययी" शब्द का सही अर्थ क्या है?',
    'Passage: "...Only through rainwater harvesting and frugal (mitvyayi) use can we secure water for future generations." \nQuestion: What is the correct meaning of the word "mitvyayi"?',
    ['आवश्यकतानुसार कम और सोच-समझकर खर्च करने वाला', 'Frugal / economical in usage'],
    [
      ['अत्यधिक अपव्यय करने वाला', 'Extravagant / wasteful'],
      ['बिलकुल उपयोग न करने वाला', 'Not using at all'],
      ['दूसरों से छीनकर उपयोग करने वाला', 'Snatching from others to use'],
    ],
    '"मित" (कम/नपा-तुला) और "व्ययी" (खर्च करने वाला) से बना "मितव्ययी" शब्द किफायती या सोच-समझकर उपयोग करने का बोध कराता है।',
    '"Mitvyayi" ("mit" = measured + "vyayi" = spender) means economical or sparing in consumption.',
    'MEDIUM',
    { grammarRuleHi: '"मितव्ययी" का विलोम शब्द "अपव्ययी" (फिजूलखर्च करने वाला) होता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जल ही जीवन है, किंतु पृथ्वी पर उपलब्ध मीठे जल की मात्रा अत्यंत सीमित है। अनियंत्रित दोहन और नदियों के प्रदूषण ने कई क्षेत्रों में पेयजल संकट खड़ा कर दिया है। वर्षा जल संचयन और मितव्ययी उपयोग से ही हम भावी पीढ़ियों के लिए जल सुरक्षित रख सकते हैं।" \nप्रश्न: गद्यांश के आधार पर जल सुरक्षा में आम नागरिक की क्या भूमिका होनी चाहिए?',
    'Passage: "...Only through rainwater harvesting and frugal use can we secure water for future generations." \nQuestion: Based on the passage, what should be the role of an ordinary citizen in water security?',
    ['वर्षा जल का संचयन करना और दैनिक जीवन में पानी की बर्बादी रोकना', 'Harvesting rainwater and preventing water wastage in daily life'],
    [
      ['केवल समुद्र के किनारे बस जाना', 'Settling only near oceans'],
      ['जल के सभी स्रोतों को बंद कर देना', 'Closing all water sources'],
      ['सरकार पर पूरी तरह निर्भर रहकर पानी बहाना', 'Wasting water while relying solely on the government'],
    ],
    'व्यक्तिगत स्तर पर जल का संयमित उपयोग और वर्षा जल संरक्षण ही भावी पीढ़ियों के लिए जल बचा सकता है।',
    'At the individual level, disciplined consumption and rainwater harvesting are essential to save water for future generations.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जल ही जीवन है, किंतु पृथ्वी पर उपलब्ध मीठे जल की मात्रा अत्यंत सीमित है। अनियंत्रित दोहन और नदियों के प्रदूषण ने कई क्षेत्रों में पेयजल संकट खड़ा कर दिया है। वर्षा जल संचयन और मितव्ययी उपयोग से ही हम भावी पीढ़ियों के लिए जल सुरक्षित रख सकते हैं।" \nप्रश्न: "पेयजल" में "पेय" शब्द का व्याकरणिक रूप और अर्थ क्या है?',
    'Passage: "...peyjala sankat khada kar diya hai..." \nQuestion: What is the grammatical form and meaning of "pey" in "peyjala"?',
    ['विशेषण — पीने योग्य ("पा" धातु + "यत्" प्रत्यय)', 'Adjective — potable / fit for drinking'],
    [
      ['संज्ञा — बहने वाला', 'Noun — flowing'],
      ['सर्वनाम — प्रत्येक', 'Pronoun — every'],
      ['क्रिया — पिया गया', 'Verb — drunk'],
    ],
    '"पेय" का अर्थ "पीने योग्य" है, जो "जल" संज्ञा की विशेषता बताकर विशेषण का कार्य करता है।',
    '"Pey" means "drinkable/potable" and acts as an adjective modifying the noun "jala" (water).',
    'HARD',
    { grammarRuleHi: 'संस्कृत "पा" (पीना) धातु में "यत्" प्रत्यय लगने से "पेय" (पीने योग्य) शब्द बनता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जल ही जीवन है, किंतु पृथ्वी पर उपलब्ध मीठे जल की मात्रा अत्यंत सीमित है। अनियंत्रित दोहन और नदियों के प्रदूषण ने कई क्षेत्रों में पेयजल संकट खड़ा कर दिया है। वर्षा जल संचयन और मितव्ययी उपयोग से ही हम भावी पीढ़ियों के लिए जल सुरक्षित रख सकते हैं।" \nप्रश्न: "जल ही जीवन है" में "ही" शब्द व्याकरण की दृष्टि से क्या है?',
    'Passage: "Jal hi jeevan hai..." \nQuestion: Grammatically, what is the word "hi" in "Jal hi jeevan hai"?',
    ['बलदायक निपात', 'Emphatic particle (Nipata)'],
    [
      ['विभक्ति चिह्न', 'Case marker'],
      ['समुच्चयबोधक अव्यय', 'Conjunction'],
      ['गुणवाचक विशेषण', 'Qualitative adjective'],
    ],
    'किसी शब्द के बाद लगकर उसके अर्थ पर विशेष बल देने वाले अव्यय निपात कहलाते हैं; यहाँ "ही" निपात है।',
    'Words added after a term to lend special emphasis are called Nipata; here "hi" is an emphatic particle.',
    'EASY',
    { grammarRuleHi: '"ही, भी, तो, तक, भर, मात्र" आदि बल प्रदान करने वाले शब्द हिंदी व्याकरण में निपात कहलाते हैं।' }
  ),

  // ================= गद्यांश 23: अनुशासन और विद्यार्थी जीवन =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "अनुशासन का अर्थ किसी बाहरी भय से नियम मानना नहीं, बल्कि स्वेच्छा से संयमित और व्यवस्थित आचरण करना है। विद्यार्थी जीवन में अपनाया गया अनुशासन व्यक्तित्व की नींव को सुदृढ़ करता है और कठिन लक्ष्यों को भी सुगम बना देता है।" \nप्रश्न: गद्यांश के अनुसार अनुशासन का वास्तविक अर्थ क्या है?',
    'Passage: "Discipline does not mean obeying rules out of external fear, rather practicing self-restrained and orderly conduct willingly..." \nQuestion: According to the passage, what is the true meaning of discipline?',
    ['स्वेच्छा से संयमित और व्यवस्थित आचरण करना', 'Practicing self-restrained and orderly conduct willingly'],
    [
      ['दंड के डर से चुपचाप बैठे रहना', 'Sitting silently out of fear of punishment'],
      ['कठोर नियमों को दूसरों पर थोपना', 'Imposing strict rules on others'],
      ['केवल विद्यालय के भीतर नियमों का पालन करना', 'Following rules only inside school'],
    ],
    'गद्यांश स्पष्ट करता है कि सच्चा अनुशासन भय से नहीं, बल्कि आत्म-नियंत्रण और स्वेच्छा से आता है।',
    'The passage clarifies that true discipline stems from self-control and willingness, not external fear.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "अनुशासन का अर्थ किसी बाहरी भय से नियम मानना नहीं, बल्कि स्वेच्छा से संयमित और व्यवस्थित आचरण करना है। विद्यार्थी जीवन में अपनाया गया अनुशासन व्यक्तित्व की नींव को सुदृढ़ करता है और कठिन लक्ष्यों को भी सुगम बना देता है।" \nप्रश्न: "सुगम" शब्द का सही विलोम शब्द क्या है?',
    'Passage: "...makes even difficult goals easy (sugam)." \nQuestion: What is the correct antonym of the word "sugam"?',
    ['दुर्गम', 'Durgam (difficult to access/achieve)'],
    [
      ['सरल', 'Saral'],
      ['सुलभ', 'Sulabh'],
      ['सुंदर', 'Sundar'],
    ],
    '"सुगम" (सु + गम = जहाँ सहज जाया जा सके/आसान) का सटीक विलोम "दुर्गम" (दुः + गम = कठिन) होता है।',
    'The exact antonym of "sugam" (easy/accessible) is "durgam" (difficult/inaccessible).',
    'MEDIUM',
    { grammarRuleHi: '"सु" (अच्छा/सहज) उपसर्ग के स्थान पर "दुर्" (कठिन) उपसर्ग लगाकर विलोम शब्द बनते हैं (सुगम ↔ दुर्गम, सुबोध ↔ दुर्बोध)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "अनुशासन का अर्थ किसी बाहरी भय से नियम मानना नहीं, बल्कि स्वेच्छा से संयमित और व्यवस्थित आचरण करना है। विद्यार्थी जीवन में अपनाया गया अनुशासन व्यक्तित्व की नींव को सुदृढ़ करता है और कठिन लक्ष्यों को भी सुगम बना देता है।" \nप्रश्न: विद्यार्थी जीवन को अनुशासन की "नींव" के लिए क्यों उपयुक्त माना गया है?',
    'Passage: "...Discipline adopted in student life strengthens the foundation of personality..." \nQuestion: Why is student life considered vital for building the foundation of discipline?',
    ['इस अवस्था की आदतें भविष्य के पूरे व्यक्तित्व और सफलता की दिशा तय करती हैं', 'Habits formed at this stage shape future personality and success'],
    [
      ['विद्यार्थियों के पास कोई अन्य कार्य नहीं होता', 'Students have no other work'],
      ['बड़े होने पर कोई नियम लागू नहीं होता', 'No rules apply in adulthood'],
      ['अनुशासन केवल पुस्तकों में पढ़ाया जाता है', 'Discipline is taught only in books'],
    ],
    'विद्यार्थी काल सीखने और चरित्र निर्माण की अवस्था है; इस समय बना संयम आजीवन सफलता का आधार बनता है।',
    'Student life is the formative stage of character; self-discipline built here supports lifelong achievement.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "अनुशासन का अर्थ किसी बाहरी भय से नियम मानना नहीं, बल्कि स्वेच्छा से संयमित और व्यवस्थित आचरण करना है। विद्यार्थी जीवन में अपनाया गया अनुशासन व्यक्तित्व की नींव को सुदृढ़ करता है और कठिन लक्ष्यों को भी सुगम बना देता है।" \nप्रश्न: "स्वेच्छा" तथा "व्यवस्थित" शब्दों के सही संधि-विच्छेद क्रमशः क्या हैं?',
    'Passage: "...swachchha se sanyamit aur vyavasthit aacharan..." \nQuestion: What are the correct sandhi splits of "swechchha" and "vyavasthit" respectively?',
    ['स्व + इच्छा (गुण संधि) तथा वि + अवस्थित (यण संधि)', 'Swa + ichchha (Guna Sandhi) and Vi + avasthit (Yan Sandhi)'],
    [
      ['सु + इच्छा तथा व्य + अवस्थित', 'Su + ichchha and Vya + avasthit'],
      ['स्वा + इच्छा तथा वि + आस्थित', 'Swaa + ichchha and Vi + aasthit'],
      ['स्व + अच्छा तथा व्य + स्थित', 'Swa + achchha and Vya + sthit'],
    ],
    '"स्व + इच्छा" में अ + इ = ए होकर गुण संधि से "स्वेच्छा" बनता है तथा "वि + अवस्थित" में इ + अ = य होकर यण संधि से "व्यवस्थित" बनता है।',
    '"Swa + ichchha" undergoes Guna Sandhi (a+i=e) to form "swechchha", while "vi + avasthit" undergoes Yan Sandhi (i+a=ya) to form "vyavasthit".',
    'HARD',
    { grammarRuleHi: 'गुण संधि: अ/आ + इ/ई = ए; यण संधि: इ/ई + असमान स्वर = य् + स्वर।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "अनुशासन का अर्थ किसी बाहरी भय से नियम मानना नहीं, बल्कि स्वेच्छा से संयमित और व्यवस्थित आचरण करना है। विद्यार्थी जीवन में अपनाया गया अनुशासन व्यक्तित्व की नींव को सुदृढ़ करता है और कठिन लक्ष्यों को भी सुगम बना देता है।" \nप्रश्न: "अनुशासन" शब्द का सही उपसर्ग और मूल शब्द क्या है?',
    'Passage: "Anushasan ka arth kisi bahari bhay se niyam manna nahin..." \nQuestion: What are the correct prefix and root word in "anushasan"?',
    ['अनु + शासन', 'Anu + shasan'],
    [
      ['अन् + उशासन', 'An + ushasan'],
      ['अ + नुशासन', 'A + nushasan'],
      ['अनुश + आसन', 'Anush + asan'],
    ],
    '"अनु" (पीछे/अनुसार) उपसर्ग जब "शासन" (नियम/व्यवस्था) से जुड़ता है, तो "अनुशासन" शब्द बनता है।',
    'Combining the prefix "anu" (following/according to) with "shasan" (rule/order) forms "anushasan".',
    'EASY',
    { grammarRuleHi: '"अनु" उपसर्ग का अर्थ "पीछे, समान या क्रमबद्ध" होता है (जैसे अनुशासन, अनुकरण, अनुकूल)।' }
  ),

  // ================= गद्यांश 24: स्वावलंबन और आत्मनिर्भरता =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "परावलंबन मनुष्य की कार्यक्षमता को कुंद कर देता है, जबकि स्वावलंबन उसमें आत्मविश्वास का संचार करता है। जो व्यक्ति अपना कार्य स्वयं करने में संकोच नहीं करता, वह विपरीत परिस्थितियों में भी अडिग रहता है।" \nप्रश्न: गद्यांश के अनुसार परावलंबन (दूसरों पर निर्भरता) का क्या नकारात्मक प्रभाव पड़ता है?',
    'Passage: "Dependence on others blunts a person’s capability, whereas self-reliance infuses confidence..." \nQuestion: According to the passage, what negative effect does dependence on others have?',
    ['यह मनुष्य की कार्यक्षमता को कमजोर या कुंद कर देता है', 'It weakens or blunts a person’s capability'],
    [
      ['यह मनुष्य को अत्यधिक लोकप्रिय बना देता है', 'It makes a person overly popular'],
      ['इससे आत्मविश्वास में वृद्धि होती है', 'It increases self-confidence'],
      ['इससे कठिन परिस्थितियाँ समाप्त हो जाती हैं', 'It eliminates difficult situations'],
    ],
    'गद्यांश की पहली पंक्ति में कहा गया है कि परावलंबन व्यक्ति की कार्यक्षमता को कुंद (क्षीण) कर देता है।',
    'The opening line states that dependence on others blunts human capability.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "परावलंबन मनुष्य की कार्यक्षमता को कुंद कर देता है, जबकि स्वावलंबन उसमें आत्मविश्वास का संचार करता है। जो व्यक्ति अपना कार्य स्वयं करने में संकोच नहीं करता, वह विपरीत परिस्थितियों में भी अडिग रहता है।" \nप्रश्न: "कुंद" और "अडिग" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Passage: "...blunts (kund) capability... remains steadfast (adig) even in adverse situations." \nQuestion: What are the correct meanings of "kund" and "adig" respectively?',
    ['कुंद = धारहीन/शिथिल; अडिग = स्थिर/अटल', 'Kund = blunt/dull; Adig = firm/unshaken'],
    [
      ['कुंद = तीव्र; अडिग = भयभीत', 'Kund = sharp; Adig = frightened'],
      ['कुंद = प्रसन्न; अडिग = चंचल', 'Kund = happy; Adig = fickle'],
      ['कुंद = विशाल; अडिग = गतिशील', 'Kund = huge; Adig = mobile'],
    ],
    '"कुंद" का अर्थ भोथरा, सुस्त या कमजोर पड़ जाना है और "अडिग" (अ + डिग) का अर्थ जो अपने स्थान या निश्चय से न डिगे (अटल) है।',
    '"Kund" means dull or blunted, and "adig" means steadfast or unshakeable.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "परावलंबन मनुष्य की कार्यक्षमता को कुंद कर देता है, जबकि स्वावलंबन उसमें आत्मविश्वास का संचार करता है। जो व्यक्ति अपना कार्य स्वयं करने में संकोच नहीं करता, वह विपरीत परिस्थितियों में भी अडिग रहता है।" \nप्रश्न: किसी भी कार्य को छोटा समझकर न करने वाले व्यक्ति में गद्यांश के अनुसार किस गुण का अभाव होगा?',
    'Passage: "...One who does not hesitate to do their own work remains steadfast even in adversity." \nQuestion: According to the passage, what quality will a person lack if they hesitate to do their own tasks?',
    ['आत्मविश्वास और संकटों का सामना करने की दृढ़ता का', 'Self-confidence and firmness to face adversities'],
    [
      ['अन्य लोगों से सहायता माँगने की कला का', 'The art of asking others for help'],
      ['विलासितापूर्ण जीवन जीने के साधन का', 'Means to live a luxurious life'],
      ['सामाजिक समारोहों में भाग लेने का', 'Participating in social functions'],
    ],
    'स्वयं कार्य करने से स्वावलंबन और आत्मविश्वास जन्म लेता है; इसके बिना व्यक्ति संकट में विचलित हो जाता है।',
    'Doing one’s own work fosters self-reliance and confidence; without it, one falters in tough times.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "परावलंबन मनुष्य की कार्यक्षमता को कुंद कर देता है, जबकि स्वावलंबन उसमें आत्मविश्वास का संचार करता है। जो व्यक्ति अपना कार्य स्वयं करने में संकोच नहीं करता, वह विपरीत परिस्थितियों में भी अडिग रहता है।" \nप्रश्न: "परावलंबन" का संधि-विच्छेद तथा "आत्मविश्वास" का समास क्या है?',
    'Passage: "Paravalamban manushya ki karyakshamta... aatmavishwas ka sanchar..." \nQuestion: What is the sandhi split of "paravalamban" and the Samasa in "aatmavishwas"?',
    ['पर + अवलंबन (दीर्घ संधि) तथा आत्म पर विश्वास (अधिकरण तत्पुरुष समास)', 'Par + avalamban (Dirgha Sandhi) and trust in oneself (Adhikarana Tatpurusha)'],
    [
      ['परा + अलंबन तथा द्वंद्व समास', 'Para + alamban and Dvandva'],
      ['पर + वलंबन तथा द्विगु समास', 'Par + valamban and Dvigu'],
      ['परि + अवलंबन तथा अव्ययीभाव समास', 'Pari + avalamban and Avyayibhava'],
    ],
    '"पर + अवलंबन" में अ + अ = आ होकर दीर्घ संधि से "परावलंबन" बनता है; "आत्मविश्वास" का विग्रह "आत्म (स्वयं) पर विश्वास" है, अतः अधिकरण तत्पुरुष है।',
    '"Par + avalamban" gives "paravalamban" via Dirgha Sandhi; "aatmavishwas" expands to "trust in the self" (Adhikarana Tatpurusha).',
    'HARD',
    { grammarRuleHi: 'जिस तत्पुरुष समास के विग्रह में "में" या "पर" अधिकरण कारक चिह्न आए, वह अधिकरण तत्पुरुष होता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "परावलंबन मनुष्य की कार्यक्षमता को कुंद कर देता है, जबकि स्वावलंबन उसमें आत्मविश्वास का संचार करता है। जो व्यक्ति अपना कार्य स्वयं करने में संकोच नहीं करता, वह विपरीत परिस्थितियों में भी अडिग रहता है।" \nप्रश्न: "विपरीत परिस्थितियों" पद में "विपरीत" और "परिस्थितियों" के बीच व्याकरणिक संबंध क्या है?',
    'Passage: "...vipareet paristhitiyon mein bhi adig rahta hai." \nQuestion: What is the grammatical relationship between "vipareet" and "paristhitiyon"?',
    ['विशेषण-विशेष्य संबंध', 'Adjective-noun (Visheshana-Visheshya) relationship'],
    [
      ['कर्ता-क्रिया संबंध', 'Subject-verb relationship'],
      ['सर्वनाम-अव्यय संबंध', 'Pronoun-indeclinable relationship'],
      ['कारक-प्रत्यय संबंध', 'Case-suffix relationship'],
    ],
    'यहाँ "विपरीत" गुणवाचक विशेषण है जो "परिस्थितियों" (विशेष्य संज्ञा) की विशेषता बता रहा है।',
    'Here "vipareet" (adverse) is a qualitative adjective modifying the noun "paristhitiyon" (situations).',
    'EASY',
    { grammarRuleHi: 'जिस संज्ञा या सर्वनाम की विशेषता बताई जाए वह विशेष्य तथा विशेषता बताने वाला शब्द विशेषण कहलाता है।' }
  ),

  // ================= गद्यांश 25: पुस्तकालय और पठन संस्कृति =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "पुस्तकालय ज्ञान के वे शांत मंदिर हैं, जहाँ विभिन्न युगों के मनीषियों के विचार संचित रहते हैं। डिजिटल उपकरणों के बढ़ते प्रभाव के बावजूद पुस्तकों के गहन पठन से जो एकाग्रता और चिंतन-शक्ति विकसित होती है, उसका कोई विकल्प नहीं है।" \nप्रश्न: गद्यांश में पुस्तकालय को किसकी संज्ञा दी गई है?',
    'Passage: "Libraries are those quiet temples of knowledge where thoughts of thinkers from various eras are preserved..." \nQuestion: What metaphor is used for libraries in the passage?',
    ['ज्ञान के शांत मंदिर की', 'Quiet temples of knowledge'],
    [
      ['मनोरंजन के कोलाहलपूर्ण बाजार की', 'Noisy markets of entertainment'],
      ['डिजिटल उपकरणों के कारखाने की', 'Factories of digital devices'],
      ['केवल प्राचीन कागजों के गोदाम की', 'Mere warehouses of old paper'],
    ],
    'लेखक ने पुस्तकालय को "ज्ञान के शांत मंदिर" कहकर उनके पवित्र और बौद्धिक महत्व को रेखांकित किया है।',
    'The author calls libraries "quiet temples of knowledge", highlighting their sacred intellectual value.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "पुस्तकालय ज्ञान के वे शांत मंदिर हैं, जहाँ विभिन्न युगों के मनीषियों के विचार संचित रहते हैं। डिजिटल उपकरणों के बढ़ते प्रभाव के बावजूद पुस्तकों के गहन पठन से जो एकाग्रता और चिंतन-शक्ति विकसित होती है, उसका कोई विकल्प नहीं है।" \nप्रश्न: गद्यांश में प्रयुक्त "मनीषियों" शब्द का अर्थ क्या है?',
    'Passage: "...where the thoughts of thinkers (manishiyon) of various eras are stored..." \nQuestion: What does the word "manishiyon" mean in the passage?',
    ['विद्वानों या बुद्धिमान चिंतकों', 'Scholars or wise thinkers'],
    [
      ['धनवान व्यापारियों', 'Wealthy merchants'],
      ['भवन निर्माताओं', 'Building constructors'],
      ['सैनिकों और सेनापतियों', 'Soldiers and commanders'],
    ],
    '"मनीषी" (मनस् + ईषिन्) का अर्थ विद्वान, ज्ञानी या गहन चिंतक होता है।',
    '"Manishi" refers to a learned scholar, sage, or deep thinker.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "पुस्तकालय ज्ञान के वे शांत मंदिर हैं, जहाँ विभिन्न युगों के मनीषियों के विचार संचित रहते हैं। डिजिटल उपकरणों के बढ़ते प्रभाव के बावजूद पुस्तकों के गहन पठन से जो एकाग्रता और चिंतन-शक्ति विकसित होती है, उसका कोई विकल्प नहीं है।" \nप्रश्न: लेखक के विचार से डिजिटल माध्यमों की तुलना में पुस्तकों का गहन पठन क्यों श्रेष्ठ है?',
    'Passage: "...Despite the growing influence of digital devices, there is no substitute for the concentration and thinking power developed by deep reading of books." \nQuestion: According to the author, why is deep reading of books superior to digital media?',
    ['यह गहन एकाग्रता और मौलिक चिंतन-शक्ति का विकास करता है', 'It develops deep concentration and independent thinking power'],
    [
      ['पुस्तकें बिना बिजली के प्रकाश देती हैं', 'Books emit light without electricity'],
      ['डिजिटल उपकरणों में कोई जानकारी नहीं होती', 'Digital devices contain no information'],
      ['पुस्तकालय केवल रात में खुलते हैं', 'Libraries open only at night'],
    ],
    'त्वरित सूचना देने वाले डिजिटल उपकरणों की तुलना में पुस्तक-पठन मस्तिष्क की एकाग्रता व विश्लेषणात्मक क्षमता को गहरा करता है।',
    'Compared to quick digital scrolling, deep book reading strengthens mental focus and analytical thinking.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "पुस्तकालय ज्ञान के वे शांत मंदिर हैं, जहाँ विभिन्न युगों के मनीषियों के विचार संचित रहते हैं। डिजिटल उपकरणों के बढ़ते प्रभाव के बावजूद पुस्तकों के गहन पठन से जो एकाग्रता और चिंतन-शक्ति विकसित होती है, उसका कोई विकल्प नहीं है।" \nप्रश्न: "पुस्तकालय" और "एकाग्रता" शब्दों के सही व्याकरणिक विश्लेषण क्या हैं?',
    'Passage: "Pustakalaya gyan ke ve shant mandir hain... ekagrata aur chintan-shakti..." \nQuestion: What are the correct grammatical analyses of "pustakalaya" and "ekagrata"?',
    ['पुस्तकालय: पुस्तक + आलय (दीर्घ संधि); एकाग्रता: एक + अग्र + ता (भाववाचक संज्ञा)', 'Pustakalaya: pustak + alaya (Dirgha Sandhi); Ekagrata: ek + agra + ta (abstract noun)'],
    [
      ['पुस्तकालय: पुस्त + आलय (गुण संधि); एकाग्रता: विशेषण', 'Pust + alaya; adjective'],
      ['पुस्तकालय: पुस्तका + लय (यण संधि); एकाग्रता: क्रिया', 'Pustaka + laya; verb'],
      ['पुस्तकालय: अव्ययीभाव; एकाग्रता: सर्वनाम', 'Avyayibhava; pronoun'],
    ],
    '"पुस्तक + आलय" में अ + आ = आ (दीर्घ संधि) से "पुस्तकालय" बनता है तथा "एक + अग्र" (एकाग्र) में "ता" प्रत्यय लगकर भाववाचक संज्ञा "एकाग्रता" बनती है।',
    '"Pustak + alaya" forms "pustakalaya" via Dirgha Sandhi, and "ekagra + ta" forms the abstract noun "ekagrata".',
    'HARD',
    { grammarRuleHi: '"आलय" (घर/स्थान) और "पुस्तक" की दीर्घ स्वर संधि से "पुस्तकालय" बनता है; "ता" प्रत्यय भाववाचक संज्ञा बनाता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "पुस्तकालय ज्ञान के वे शांत मंदिर हैं, जहाँ विभिन्न युगों के मनीषियों के विचार संचित रहते हैं। डिजिटल उपकरणों के बढ़ते प्रभाव के बावजूद पुस्तकों के गहन पठन से जो एकाग्रता और चिंतन-शक्ति विकसित होती है, उसका कोई विकल्प नहीं है।" \nप्रश्न: गद्यांश में "संचित" शब्द का उपयुक्त विलोम शब्द क्या होगा?',
    'Passage: "...jahan vibhinna yugon ke manishiyon ke vichar sanchit rahte hain." \nQuestion: What would be an appropriate antonym for the word "sanchit" (accumulated/stored)?',
    ['व्ययित या बिखरा हुआ', 'Expended or scattered'],
    [
      ['एकत्रित', 'Collected'],
      ['संग्रहीत', 'Archived'],
      ['सुरक्षित', 'Protected'],
    ],
    '"संचित" का अर्थ एकत्रित या जमा किया हुआ है, जिसका विलोम खर्च किया हुआ ("व्ययित") या बिखरा हुआ होता है।',
    '"Sanchit" means collected/stored, whose antonym is expended ("vyayit") or scattered.',
    'EASY'
  ),

  // ================= गद्यांश 26: परिश्रम ही सफलता की कुंजी =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "केवल भाग्य के भरोसे बैठे रहने वाले व्यक्ति अवसर आने पर भी सफल नहीं हो पाते। निरंतर परिश्रम और धैर्य ही किसी भी लक्ष्य की प्राप्ति के सच्चे साधन हैं। श्रम करने वाला व्यक्ति अपनी असफलताओं से सीखकर पुनः आगे बढ़ता है।" \nप्रश्न: गद्यांश के अनुसार लक्ष्य प्राप्ति के सच्चे साधन क्या हैं?',
    'Passage: "People relying solely on luck fail even when opportunities arrive. Continuous hard work and patience are the true means to achieve any goal..." \nQuestion: According to the passage, what are the true means of achieving a goal?',
    ['निरंतर परिश्रम और धैर्य', 'Continuous hard work and patience'],
    [
      ['केवल सौभाग्य की प्रतीक्षा करना', 'Merely waiting for good fortune'],
      ['पहली असफलता पर मार्ग बदल देना', 'Changing paths at the first failure'],
      ['बिना प्रयास के फल की कामना करना', 'Wishing for results without effort'],
    ],
    'लेखक ने स्पष्ट किया है कि भाग्य के बजाय निरंतर परिश्रम और धैर्य से ही लक्ष्य प्राप्त किया जा सकता है।',
    'The author states that continuous hard work and patience, rather than luck, lead to achieving goals.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "केवल भाग्य के भरोसे बैठे रहने वाले व्यक्ति अवसर आने पर भी सफल नहीं हो पाते। निरंतर परिश्रम और धैर्य ही किसी भी लक्ष्य की प्राप्ति के सच्चे साधन हैं। श्रम करने वाला व्यक्ति अपनी असफलताओं से सीखकर पुनः आगे बढ़ता है।" \nप्रश्न: "निरंतर" शब्द का सही अर्थ क्या है?',
    'Passage: "Nirantar parishram aur dhairya hi..." \nQuestion: What is the correct meaning of the word "nirantar"?',
    ['लगातार या बिना रुके', 'Continuously or without pause'],
    [
      ['कभी-कभार', 'Occasionally'],
      ['अंत में', 'At the end'],
      ['शीघ्रता से', 'Hastily'],
    ],
    '"निरंतर" (निः + अंतर) का अर्थ बिना किसी अंतराल या रुकावट के लगातार होना है।',
    '"Nirantar" (nih + antar) means without interval or interruption, i.e., continuously.',
    'MEDIUM',
    { grammarRuleHi: '"निः + अंतर" में विसर्ग के बाद स्वर आने से विसर्ग "र्" में बदलकर विसर्ग संधि से "निरंतर" शब्द बनता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "केवल भाग्य के भरोसे बैठे रहने वाले व्यक्ति अवसर आने पर भी सफल नहीं हो पाते। निरंतर परिश्रम और धैर्य ही किसी भी लक्ष्य की प्राप्ति के सच्चे साधन हैं। श्रम करने वाला व्यक्ति अपनी असफलताओं से सीखकर पुनः आगे बढ़ता है।" \nप्रश्न: परिश्रमी व्यक्ति और भाग्यवादी व्यक्ति के दृष्टिकोण में मुख्य अंतर क्या है?',
    'Passage: "...A hardworking person learns from failures and moves forward again." \nQuestion: What is the key difference in outlook between a hardworking person and a fatalist?',
    ['परिश्रमी व्यक्ति असफलता को सीख मानकर प्रयास जारी रखता है, जबकि भाग्यवादी निष्क्रिय रहता है', 'A hardworking person treats failure as a lesson and persists, while a fatalist stays passive'],
    [
      ['परिश्रमी व्यक्ति कभी असफल नहीं होता', 'A hardworking person never fails'],
      ['भाग्यवादी व्यक्ति अधिक श्रम करता है', 'A fatalist works harder'],
      ['दोनों के दृष्टिकोण में कोई अंतर नहीं है', 'There is no difference between their outlooks'],
    ],
    'परिश्रमी व्यक्ति अपनी त्रुटियों का विश्लेषण कर पुनः प्रयास करता है, जबकि केवल भाग्य पर निर्भर व्यक्ति अवसर खो देता है।',
    'A diligent person analyzes mistakes and tries again, whereas one relying solely on luck misses opportunities.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "केवल भाग्य के भरोसे बैठे रहने वाले व्यक्ति अवसर आने पर भी सफल नहीं हो पाते। निरंतर परिश्रम और धैर्य ही किसी भी लक्ष्य की प्राप्ति के सच्चे साधन हैं। श्रम करने वाला व्यक्ति अपनी असफलताओं से सीखकर पुनः आगे बढ़ता है।" \nप्रश्न: "सीखकर" तथा "असफलताओं" शब्दों के व्याकरणिक रूप क्रमशः क्या हैं?',
    'Passage: "...apni asafaltaon se seekhkar punah aage badhta hai." \nQuestion: What are the grammatical forms of "seekhkar" and "asafaltaon" respectively?',
    ['पूर्वकालिक क्रिया तथा भाववाचक संज्ञा (बहुवचन)', 'Absolutive/previous-action verb and abstract noun (plural)'],
    [
      ['सकर्मक वर्तमान क्रिया तथा विशेषण', 'Transitive present verb and adjective'],
      ['नामधातु क्रिया तथा सर्वनाम', 'Nominal verb and pronoun'],
      ['प्रेरणार्थक क्रिया तथा अव्यय', 'Causative verb and indeclinable'],
    ],
    'मूल धातु "सीख" में "कर" जुड़ने से "सीखकर" पूर्वकालिक क्रिया बनती है और "असफलता" (भाववाचक संज्ञा) का बहुवचन "असफलताओं" है।',
    'Adding "-kar" to "seekh" forms the absolutive verb "seekhkar" (having learned), while "asafaltaon" is the plural of the abstract noun "asafalta".',
    'HARD',
    { grammarRuleHi: 'जब कर्ता एक क्रिया समाप्त कर तुरंत दूसरी क्रिया करे, तो पहली क्रिया में "कर/के" जुड़कर पूर्वकालिक क्रिया बनती है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "केवल भाग्य के भरोसे बैठे रहने वाले व्यक्ति अवसर आने पर भी सफल नहीं हो पाते। निरंतर परिश्रम और धैर्य ही किसी भी लक्ष्य की प्राप्ति के सच्चे साधन हैं। श्रम करने वाला व्यक्ति अपनी असफलताओं से सीखकर पुनः आगे बढ़ता है।" \nप्रश्न: इस गद्यांश के लिए उपयुक्त मुहावरा या लोकोक्ति क्या होगी?',
    'Passage: "People relying solely on luck fail... Continuous hard work and patience are the true means..." \nQuestion: Which idiom or proverb best suits this passage?',
    ['परिश्रम ही सफलता की कुंजी है', 'Hard work is the key to success'],
    [
      ['का वर्षा जब कृषि सुखाने', 'What use is rain after crops dry'],
      ['बिन माँगे मोती मिले', 'Pearls received without asking'],
      ['अंधों में काना राजा', 'A one-eyed man among the blind'],
    ],
    'संपूर्ण गद्यांश कर्मठता, धैर्य और परिश्रम के बल पर सफलता प्राप्त करने की प्रेरणा देता है।',
    'The entire passage emphasizes achieving success through perseverance, patience, and hard work.',
    'EASY'
  ),

  // ================= गद्यांश 27: समय का सदुपयोग और नियोजन =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "समय एक ऐसी अमूल्य संपदा है, जो एक बार हाथ से निकल जाने पर किसी भी कीमत पर वापस नहीं आती। प्रत्येक व्यक्ति को प्रतिदिन समान चौबीस घंटे मिलते हैं, किंतु समय का सुनियोजित प्रबंधन ही साधारण व्यक्ति को असाधारण उपलब्धियाँ दिलाता है।" \nप्रश्न: गद्यांश के अनुसार किस गुण के कारण एक साधारण व्यक्ति भी असाधारण सफलता प्राप्त कर सकता है?',
    'Passage: "Time is such a priceless treasure that once lost, it never returns at any cost. Everyone gets the same twenty-four hours daily, yet well-planned time management brings extraordinary achievements..." \nQuestion: According to the passage, what quality enables an ordinary person to achieve extraordinary success?',
    ['समय का सुनियोजित प्रबंधन', 'Well-planned management of time'],
    [
      ['अत्यधिक धन का व्यय करना', 'Spending excessive money'],
      ['दिन में अधिक से अधिक सोना', 'Sleeping as much as possible'],
      ['बिना योजना के कार्य आरंभ करना', 'Starting tasks without any plan'],
    ],
    'गद्यांश में बताया गया है कि सबको समान समय मिलता है, पर उसका सुनियोजित प्रबंधन ही विशेष उपलब्धि दिलाता है।',
    'The passage states that while everyone gets equal hours, planned time management yields extraordinary success.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "समय एक ऐसी अमूल्य संपदा है, जो एक बार हाथ से निकल जाने पर किसी भी कीमत पर वापस नहीं आती। प्रत्येक व्यक्ति को प्रतिदिन समान चौबीस घंटे मिलते हैं, किंतु समय का सुनियोजित प्रबंधन ही साधारण व्यक्ति को असाधारण उपलब्धियाँ दिलाता है।" \nप्रश्न: "अमूल्य" शब्द का सही अर्थ क्या है?',
    'Passage: "Samay ek aisi amulya sampada hai..." \nQuestion: What is the correct meaning of the word "amulya"?',
    ['जिसका कोई मूल्य न आंका जा सके (अत्यधिक कीमती)', 'Priceless / beyond any monetary value'],
    [
      ['जो बिल्कुल सस्ता और व्यर्थ हो', 'Very cheap and worthless'],
      ['जो बाजार में आसानी से खरीदा जा सके', 'Easily purchasable in a market'],
      ['जिसकी कीमत घटती जा रही हो', 'Whose price is falling'],
    ],
    '"अमूल्य" (अ + मूल्य) का अर्थ है इतना मूल्यवान कि उसका कोई मोल या कीमत तय न की जा सके।',
    '"Amulya" means invaluable or priceless—too precious to be measured in money.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "समय एक ऐसी अमूल्य संपदा है, जो एक बार हाथ से निकल जाने पर किसी भी कीमत पर वापस नहीं आती। प्रत्येक व्यक्ति को प्रतिदिन समान चौबीस घंटे मिलते हैं, किंतु समय का सुनियोजित प्रबंधन ही साधारण व्यक्ति को असाधारण उपलब्धियाँ दिलाता है।" \nप्रश्न: धन और समय के बीच मूलभूत अंतर क्या निष्कर्षित होता है?',
    'Passage: "...once lost, it never returns at any cost..." \nQuestion: What fundamental difference between money and time can be inferred?',
    ['खोया हुआ धन पुनः कमाया जा सकता है, पर बीता हुआ समय कभी वापस नहीं आता', 'Lost money can be earned back, whereas lost time can never return'],
    [
      ['समय को तिजोरी में बंद रखा जा सकता है', 'Time can be locked in a vault'],
      ['धन से समय को खरीदा जा सकता है', 'Time can be bought with money'],
      ['सभी व्यक्तियों को अलग-अलग घंटे मिलते हैं', 'Different people get different hours in a day'],
    ],
    'समय की अपरिवर्तनीय और अपूरणीय प्रकृति इसे संसार की अन्य सभी भौतिक संपत्तियों से अधिक मूल्यवान बनाती है।',
    'The irreversible and irreplaceable nature of time makes it far more valuable than material wealth.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "समय एक ऐसी अमूल्य संपदा है, जो एक बार हाथ से निकल जाने पर किसी भी कीमत पर वापस नहीं आती। प्रत्येक व्यक्ति को प्रतिदिन समान चौबीस घंटे मिलते हैं, किंतु समय का सुनियोजित प्रबंधन ही साधारण व्यक्ति को असाधारण उपलब्धियाँ दिलाता है।" \nप्रश्न: "प्रत्येक" और "प्रतिदिन" शब्दों में संधि व समास क्रमशः क्या हैं?',
    'Passage: "Pratyek vyakti ko pratidin saman chaubis ghante milte hain..." \nQuestion: What are the Sandhi in "pratyek" and the Samasa in "pratidin" respectively?',
    ['प्रत्येक: प्रति + एक (यण संधि); प्रतिदिन: दिन-दिन (अव्ययीभाव समास)', 'Pratyek: prati + ek (Yan Sandhi); Pratidin: every day (Avyayibhava Samasa)'],
    [
      ['प्रत्येक: प्रत्य + एक (गुण संधि); प्रतिदिन: तत्पुरुष समास', 'Guna Sandhi; Tatpurusha Samasa'],
      ['प्रत्येक: प्रति + अक (दीर्घ संधि); प्रतिदिन: द्वंद्व समास', 'Dirgha Sandhi; Dvandva Samasa'],
      ['प्रत्येक: प्र + त्येक (वृद्धि संधि); प्रतिदिन: द्विगु समास', 'Vriddhi Sandhi; Dvigu Samasa'],
    ],
    '"प्रति + एक" में इ + ए = ये होकर यण संधि से "प्रत्येक" बनता है तथा "प्रतिदिन" में प्रथम पद "प्रति" अव्यय होने से अव्ययीभाव समास है।',
    '"Prati + ek" undergoes Yan Sandhi to form "pratyek", and "pratidin" begins with the indeclinable "prati", making it Avyayibhava Samasa.',
    'HARD',
    { grammarRuleHi: 'जिस समास का पहला पद अव्यय (प्रति, आ, यथा, हर, भर) हो, वह अव्ययीभाव समास कहलाता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "समय एक ऐसी अमूल्य संपदा है, जो एक बार हाथ से निकल जाने पर किसी भी कीमत पर वापस नहीं आती। प्रत्येक व्यक्ति को प्रतिदिन समान चौबीस घंटे मिलते हैं, किंतु समय का सुनियोजित प्रबंधन ही साधारण व्यक्ति को असाधारण उपलब्धियाँ दिलाता है।" \nप्रश्न: गद्यांश में प्रयुक्त "चौबीस घंटे" में "चौबीस" किस प्रकार का विशेषण है?',
    'Passage: "...saman chaubis ghante milte hain..." \nQuestion: What type of adjective is "chaubis" (twenty-four) in "chaubis ghante"?',
    ['निश्चित संख्यावाचक विशेषण', 'Definite numeral adjective'],
    [
      ['अनिश्चित परिमाणवाचक विशेषण', 'Indefinite quantitative adjective'],
      ['सार्वनामिक विशेषण', 'Pronominal adjective'],
      ['गुणवाचक विशेषण', 'Qualitative adjective'],
    ],
    '"चौबीस" घंटों की ठीक और निश्चित संख्या बता रहा है, अतः यह निश्चित संख्यावाचक विशेषण है।',
    '"Chaubis" specifies the exact countable number of hours, making it a definite numeral adjective.',
    'EASY',
    { grammarRuleHi: 'जिन शब्दों से संज्ञा की निश्चित गिनती का बोध हो, वे निश्चित संख्यावाचक विशेषण कहलाते हैं।' }
  ),

  // ================= गद्यांश 28: शिक्षक की भूमिका और समाज निर्माण =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षक केवल पाठ्यक्रम पूरा कराने वाला कर्मचारी नहीं, बल्कि भावी पीढ़ी के विचारों और मूल्यों का शिल्पकार होता है। एक संवेदनशील अध्यापक प्रत्येक छात्र की छिपी प्रतिभा को पहचानकर उसे उचित दिशा प्रदान करता है और राष्ट्र निर्माण की आधारशिला रखता है।" \nप्रश्न: गद्यांश में शिक्षक को किस रूप में चित्रित किया गया है?',
    'Passage: "A teacher is not merely an employee completing a syllabus, rather an architect of the thoughts and values of the future generation..." \nQuestion: How is a teacher portrayed in the passage?',
    ['भावी पीढ़ी के विचारों व मूल्यों के शिल्पकार के रूप में', 'As an architect of the thoughts and values of the coming generation'],
    [
      ['केवल वेतन भोगी लिपिक के रूप में', 'Merely as a salaried clerk'],
      ['छात्रों की परीक्षा कॉपियाँ जाँचने वाली मशीन के रूप में', 'As a machine checking exam papers'],
      ['राजनीतिक भाषण देने वाले वक्ता के रूप में', 'As a speaker delivering political speeches'],
    ],
    'लेखक ने शिक्षक को केवल पाठ्यक्रम समाप्त करने वाला नहीं, बल्कि मूल्यों का शिल्पकार और राष्ट्र निर्माता बताया है।',
    'The author portrays the teacher not merely as a syllabus finisher, but as an architect of values and nation-builder.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षक केवल पाठ्यक्रम पूरा कराने वाला कर्मचारी नहीं, बल्कि भावी पीढ़ी के विचारों और मूल्यों का शिल्पकार होता है। एक संवेदनशील अध्यापक प्रत्येक छात्र की छिपी प्रतिभा को पहचानकर उसे उचित दिशा प्रदान करता है और राष्ट्र निर्माण की आधारशिला रखता है।" \nप्रश्न: "शिल्पकार" शब्द का प्रसंगानुकूल अर्थ क्या है?',
    'Passage: "...bhavi peedhi ke vicharon aur mulyon ka shilpkar hota hai." \nQuestion: What is the contextual meaning of the word "shilpkar" here?',
    ['संवारने और गढ़ने वाला निर्माता', 'Creator / sculptor who shapes and refines'],
    [
      ['पत्थर तोड़ने वाला मजदूर', 'Laborer who breaks stones'],
      ['चित्र बेचने वाला व्यापारी', 'Merchant selling paintings'],
      ['भवन किराए पर देने वाला व्यक्ति', 'Person renting out buildings'],
    ],
    'जैसे शिल्पकार अनगढ़ पत्थर को तराशकर मूर्ति बनाता है, वैसे ही शिक्षक बालक के व्यक्तित्व को गढ़ता है।',
    'Just as a sculptor shapes raw stone into art, a teacher refines and shapes a student’s personality.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षक केवल पाठ्यक्रम पूरा कराने वाला कर्मचारी नहीं, बल्कि भावी पीढ़ी के विचारों और मूल्यों का शिल्पकार होता है। एक संवेदनशील अध्यापक प्रत्येक छात्र की छिपी प्रतिभा को पहचानकर उसे उचित दिशा प्रदान करता है और राष्ट्र निर्माण की आधारशिला रखता है।" \nप्रश्न: "प्रत्येक छात्र की छिपी प्रतिभा को पहचानना" शिक्षक के किस दृष्टिकोण को दर्शाता है?',
    'Passage: "...A sensitive teacher recognizes the hidden talent of each student and gives it the right direction..." \nQuestion: What pedagogical outlook is reflected in recognizing each student’s hidden talent?',
    ['छात्र-केंद्रित एवं वैयक्तिक भिन्नता का सम्मान करने वाला दृष्टिकोण', 'A child-centric approach respecting individual differences'],
    [
      ['सभी छात्रों को एक ही साँचे में ढालने की नीति', 'Policy of forcing all students into one mold'],
      ['केवल प्रथम आने वाले छात्र पर ध्यान देना', 'Focusing only on the top-ranking student'],
      ['पाठ्यक्रम से बाहर के विषयों की उपेक्षा करना', 'Ignoring topics outside the syllabus'],
    ],
    'हर बालक में अद्वितीय क्षमता होती है; संवेदनशील शिक्षक वैयक्तिक भिन्नता को समझते हुए हर बच्चे को आगे बढ़ने का अवसर देता है।',
    'Every child has unique potential; a sensitive teacher respects individual differences and nurtures each learner.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षक केवल पाठ्यक्रम पूरा कराने वाला कर्मचारी नहीं, बल्कि भावी पीढ़ी के विचारों और मूल्यों का शिल्पकार होता है। एक संवेदनशील अध्यापक प्रत्येक छात्र की छिपी प्रतिभा को पहचानकर उसे उचित दिशा प्रदान करता है और राष्ट्र निर्माण की आधारशिला रखता है।" \nप्रश्न: "आधारशिला" और "राष्ट्र निर्माण" शब्दों में कौन-से समास हैं?',
    'Passage: "...aur rashtra nirman ki adharshila rakhta hai." \nQuestion: Which Samasas (compounds) are present in "adharshila" and "rashtra nirman"?',
    ['आधारशिला: कर्मधारय/तत्पुरुष (आधार रूपी शिला); राष्ट्र निर्माण: संबंध तत्पुरुष (राष्ट्र का निर्माण)', 'Adharshila: Karmadharaya; Rashtra nirman: Sambandha Tatpurusha'],
    [
      ['दोनों में द्वंद्व समास', 'Dvandva Samasa in both'],
      ['दोनों में द्विगु समास', 'Dvigu Samasa in both'],
      ['आधारशिला: बहुव्रीहि; राष्ट्र निर्माण: अव्ययीभाव', 'Bahuvrihi and Avyayibhava'],
    ],
    '"आधार रूपी शिला" में उपमेय-उपमान या विशेषण संबंध होने से कर्मधारय तथा "राष्ट्र का निर्माण" में "का" विभक्ति के लोप से संबंध तत्पुरुष है।',
    '"Adharshila" (foundation-like stone) is Karmadharaya, and "rashtra nirman" (building of the nation) is Sambandha Tatpurusha.',
    'HARD',
    { grammarRuleHi: 'तत्पुरुष समास में उत्तर पद प्रधान होता है और दोनों पदों के बीच कारक चिह्न का लोप रहता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "शिक्षक केवल पाठ्यक्रम पूरा कराने वाला कर्मचारी नहीं, बल्कि भावी पीढ़ी के विचारों और मूल्यों का शिल्पकार होता है। एक संवेदनशील अध्यापक प्रत्येक छात्र की छिपी प्रतिभा को पहचानकर उसे उचित दिशा प्रदान करता है और राष्ट्र निर्माण की आधारशिला रखता है।" \nप्रश्न: "भावी" शब्द का उपयुक्त विलोम शब्द क्या होगा?',
    'Passage: "...bhavi peedhi ke vicharon aur mulyon ka shilpkar..." \nQuestion: What is the appropriate antonym of the word "bhavi" (future/upcoming)?',
    ['अतीत या भूत', 'Past (Ateet / Bhoot)'],
    [
      ['आगामी', 'Upcoming'],
      ['भविष्य', 'Future'],
      ['नवीन', 'New'],
    ],
    '"भावी" का अर्थ आने वाला (भविष्य) है, अतः इसका सटीक विलोम "अतीत" या "भूत" (बीता हुआ) होता है।',
    '"Bhavi" means future/upcoming, so its accurate antonym is "ateet" or "bhoot" (past).',
    'EASY'
  ),

  // ================= गद्यांश 29: बाल मनोविज्ञान और खेल-आधारित शिक्षा =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "खेल बच्चों के लिए केवल मनोरंजन का साधन नहीं, बल्कि उनके शारीरिक, मानसिक और सामाजिक विकास का सशक्त माध्यम है। खेल-खेल में सीखने की पद्धति से कठिन अवधारणाएँ भी रोचक बन जाती हैं और बच्चों में सहयोग तथा नियमबद्धता के गुण आते हैं।" \nप्रश्न: गद्यांश के अनुसार खेल बच्चों के लिए किस प्रकार उपयोगी हैं?',
    'Passage: "Play is not merely a means of entertainment for children, but a powerful medium for their physical, mental, and social development..." \nQuestion: According to the passage, how is play useful for children?',
    ['यह उनके शारीरिक, मानसिक और सामाजिक विकास में सहायक है', 'It aids their physical, mental, and social development'],
    [
      ['यह केवल समय व्यतीत करने का तरीका है', 'It is merely a way to pass time'],
      ['इससे बच्चे पढ़ाई से दूर हो जाते हैं', 'It distances children from studies'],
      ['इससे केवल मांसपेशियों को विश्राम मिलता है', 'It only rests the muscles'],
    ],
    'गद्यांश स्पष्ट बताता है कि खेल सर्वांगीण विकास (शारीरिक, मानसिक, सामाजिक) का माध्यम है।',
    'The passage clearly states that play is a medium for holistic (physical, mental, and social) development.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "खेल बच्चों के लिए केवल मनोरंजन का साधन नहीं, बल्कि उनके शारीरिक, मानसिक और सामाजिक विकास का सशक्त माध्यम है। खेल-खेल में सीखने की पद्धति से कठिन अवधारणाएँ भी रोचक बन जाती हैं और बच्चों में सहयोग तथा नियमबद्धता के गुण आते हैं।" \nप्रश्न: "अवधारणाएँ" शब्द का प्रसंगानुकूल अर्थ क्या है?',
    'Passage: "...even difficult concepts (avadharanayein) become interesting..." \nQuestion: What is the contextual meaning of "avadharanayein"?',
    ['संकल्पनाएँ या विषयगत विचार', 'Concepts or theoretical ideas'],
    [
      ['खिलौने', 'Toys'],
      ['शारीरिक चोटें', 'Physical injuries'],
      ['खेल के मैदान', 'Playgrounds'],
    ],
    '"अवधारणा" का अर्थ किसी विषय या सिद्धांत को लेकर बनने वाला स्पष्ट विचार या संकल्पना (Concept) होता है।',
    '"Avadharana" means a concept or foundational idea regarding a subject.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "खेल बच्चों के लिए केवल मनोरंजन का साधन नहीं, बल्कि उनके शारीरिक, मानसिक और सामाजिक विकास का सशक्त माध्यम है। खेल-खेल में सीखने की पद्धति से कठिन अवधारणाएँ भी रोचक बन जाती हैं और बच्चों में सहयोग तथा नियमबद्धता के गुण आते हैं।" \nप्रश्न: खेल-आधारित शिक्षा से बच्चों में किस जीवन-कौशल का विकास होता है?',
    'Passage: "...qualities of cooperation and rule-following develop in children." \nQuestion: Which life skill develops in children through play-based learning?',
    ['टीम भावना, सहभागिता और नियमों का पालन करने की आदत', 'Team spirit, cooperation, and respect for rules'],
    [
      ['स्वार्थ और एकल वर्चस्व की भावना', 'Selfishness and solo dominance'],
      ['नियम तोड़ने की चालाकी', 'Cleverness in breaking rules'],
      ['दूसरों से संवाद न करने की प्रवृत्ति', 'Tendency not to communicate'],
    ],
    'सामूहिक खेलों में बच्चा हार-जीत स्वीकार करना, साथी की मदद करना और नियमों के भीतर खेलना सीखता है।',
    'In group games, children learn teamwork, accepting wins and losses, and abiding by rules.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "खेल बच्चों के लिए केवल मनोरंजन का साधन नहीं, बल्कि उनके शारीरिक, मानसिक और सामाजिक विकास का सशक्त माध्यम है। खेल-खेल में सीखने की पद्धति से कठिन अवधारणाएँ भी रोचक बन जाती हैं और बच्चों में सहयोग तथा नियमबद्धता के गुण आते हैं।" \nप्रश्न: "शारीरिक, मानसिक और सामाजिक" शब्द मूल संज्ञाओं में किस प्रत्यय के जुड़ने से बने हैं?',
    'Passage: "...unkay sharirik, manasik aur samajik vikas ka sashakt madhyam hai." \nQuestion: Which suffix attaches to the base nouns to form "sharirik", "manasik", and "samajik"?',
    ['"इक" प्रत्यय', '"Ik" suffix'],
    [
      ['"ईय" प्रत्यय', '"Iya" suffix'],
      ['"त्व" प्रत्यय', '"Tva" suffix'],
      ['"आन" प्रत्यय', '"Aan" suffix'],
    ],
    '"शरीर + इक = शारीरिक", "मनस् + इक = मानसिक" और "समाज + इक = सामाजिक"; "इक" प्रत्यय जुड़ने पर आदि स्वर में वृद्धि होती है।',
    '"Sharir + ik = sharirik", "manas + ik = manasik", and "samaj + ik = samajik"; adding "-ik" lengthens the initial vowel.',
    'HARD',
    { grammarRuleHi: '"इक" प्रत्यय जोड़ने पर शब्द के प्रथम स्वर में वृद्धि (अ→आ, इ/ए→ऐ, उ/ओ→औ) हो जाती है (समाज + इक = सामाजिक)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "खेल बच्चों के लिए केवल मनोरंजन का साधन नहीं, बल्कि उनके शारीरिक, मानसिक और सामाजिक विकास का सशक्त माध्यम है। खेल-खेल में सीखने की पद्धति से कठिन अवधारणाएँ भी रोचक बन जाती हैं और बच्चों में सहयोग तथा नियमबद्धता के गुण आते हैं।" \nप्रश्न: "मनोरंजन" शब्द का सही संधि-विच्छेद और संधि भेद क्या है?',
    'Passage: "Khel bachchon ke liye keval manoranjan ka sadhan nahin..." \nQuestion: What is the correct sandhi split and type for "manoranjan"?',
    ['मनः + रंजन — विसर्ग संधि', 'Manah + ranjan — Visarga Sandhi'],
    [
      ['मन + ओरंजन — गुण संधि', 'Man + oranjan — Guna Sandhi'],
      ['मनो + रंजन — दीर्घ संधि', 'Mano + ranjan — Dirgha Sandhi'],
      ['मन् + रंजन — व्यंजन संधि', 'Man + ranjan — Vyanjana Sandhi'],
    ],
    '"मनः + रंजन" में विसर्ग के बाद "र" (सघोष व्यंजन) आने से "अः" का "ओ" हो जाता है और "मनोरंजन" बनता है।',
    'In "manah + ranjan", the visarga followed by a voiced consonant transforms into "o", forming "manoranjan" (Visarga Sandhi).',
    'MEDIUM',
    { grammarRuleHi: 'विसर्ग के पहले "अ" हो और बाद में वर्ग का 3, 4, 5वाँ वर्ण या य, र, ल, व, ह हो, तो विसर्ग "ओ" में बदल जाता है।' }
  ),

  // ================= गद्यांश 30: डिजिटल शिक्षा और संतुलन =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "इंटरनेट और डिजिटल तकनीक ने ज्ञान को सबकी पहुँच तक सरल बना दिया है, किंतु इसका अनियंत्रित उपयोग आँखों, नींद और एकाग्रता को प्रभावित कर सकता है। इसलिए तकनीक का प्रयोग एक सहायक उपकरण के रूप में होना चाहिए, न कि प्रत्यक्ष मानवीय संवाद के विकल्प के रूप में।" \nप्रश्न: गद्यांश में डिजिटल तकनीक के किस संभावित दुष्प्रभाव की चेतावनी दी गई है?',
    'Passage: "Internet and digital technology have made knowledge easily accessible to all, yet its uncontrolled use can affect eyesight, sleep, and concentration..." \nQuestion: What potential ill-effect of digital technology is warned against in the passage?',
    ['अनियंत्रित प्रयोग से आँखों, नींद और एकाग्रता पर बुरा असर पड़ सकता है', 'Uncontrolled usage can adversely affect eyesight, sleep, and concentration'],
    [
      ['तकनीक से ज्ञान प्राप्त करना असंभव हो गया है', 'Technology has made acquiring knowledge impossible'],
      ['इंटरनेट के उपयोग से पुस्तकें जल जाती हैं', 'Using the internet burns books'],
      ['तकनीक केवल वैज्ञानिकों के लिए उपयोगी है', 'Technology is useful only for scientists'],
    ],
    'लेखक चेतावनी देता है कि स्क्रीन का अत्यधिक और अनियंत्रित उपयोग शारीरिक व मानसिक स्वास्थ्य (आँख, नींद, ध्यान) को हानि पहुँचाता है।',
    'The author warns that excessive, unregulated screen time harms eyesight, sleep, and focus.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "इंटरनेट और डिजिटल तकनीक ने ज्ञान को सबकी पहुँच तक सरल बना दिया है, किंतु इसका अनियंत्रित उपयोग आँखों, नींद और एकाग्रता को प्रभावित कर सकता है। इसलिए तकनीक का प्रयोग एक सहायक उपकरण के रूप में होना चाहिए, न कि प्रत्यक्ष मानवीय संवाद के विकल्प के रूप में।" \nप्रश्न: "प्रत्यक्ष" शब्द का सही विलोम शब्द क्या है?',
    'Passage: "...na ki pratyaksha manaviya samvad ke vikalp ke roop mein." \nQuestion: What is the correct antonym of the word "pratyaksha" (direct)?',
    ['परोक्ष या अप्रत्यक्ष', 'Indirect (Paroksha / Apratyaksha)'],
    [
      ['समीप', 'Near'],
      ['साक्षात्', 'Before one’s eyes'],
      ['स्पष्ट', 'Clear'],
    ],
    '"प्रत्यक्ष" (प्रति + अक्ष = आँखों के सामने) का विलोम "परोक्ष" (पर + अक्ष = आँखों से परे) या "अप्रत्यक्ष" होता है।',
    'The antonym of "pratyaksha" (direct/before the eyes) is "paroksha" (behind the eyes/indirect) or "apratyaksha".',
    'MEDIUM',
    { grammarRuleHi: '"प्रति + अक्षि" से यण संधि द्वारा "प्रत्यक्ष" बनता है; इसका मानक विलोम "परोक्ष" है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "इंटरनेट और डिजिटल तकनीक ने ज्ञान को सबकी पहुँच तक सरल बना दिया है, किंतु इसका अनियंत्रित उपयोग आँखों, नींद और एकाग्रता को प्रभावित कर सकता है। इसलिए तकनीक का प्रयोग एक सहायक उपकरण के रूप में होना चाहिए, न कि प्रत्यक्ष मानवीय संवाद के विकल्प के रूप में।" \nप्रश्न: शिक्षा में तकनीक और शिक्षक के बीच कैसा संबंध होना चाहिए?',
    'Passage: "...Therefore technology should be used as an assistive tool, not as a substitute for direct human interaction." \nQuestion: What should be the relationship between technology and human interaction/teachers in education?',
    ['तकनीक शिक्षण की सहायक बने, शिक्षक और आमने-सामने संवाद की जगह न ले', 'Technology should assist teaching rather than replace teachers and face-to-face dialogue'],
    [
      ['शिक्षक को हटाकर केवल मोबाइल से पढ़ाई होनी चाहिए', 'Teachers should be replaced entirely by mobile phones'],
      ['कक्षाओं में तकनीक का पूर्ण बहिष्कार होना चाहिए', 'Technology should be completely banned in classrooms'],
      ['छात्रों को आपस में बात करना बंद कर देना चाहिए', 'Students should stop talking to each other'],
    ],
    'संतुलित दृष्टिकोण यही है कि डिजिटल साधन सीखने को समृद्ध करें, पर मानवीय संवेदना और प्रत्यक्ष मार्गदर्शन का स्थान न लें।',
    'A balanced view holds that digital tools should enrich learning without replacing human empathy and direct guidance.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "इंटरनेट और डिजिटल तकनीक ने ज्ञान को सबकी पहुँच तक सरल बना दिया है, किंतु इसका अनियंत्रित उपयोग आँखों, नींद और एकाग्रता को प्रभावित कर सकता है। इसलिए तकनीक का प्रयोग एक सहायक उपकरण के रूप में होना चाहिए, न कि प्रत्यक्ष मानवीय संवाद के विकल्प के रूप में।" \nप्रश्न: "उपकरण" और "संवाद" शब्दों में प्रयुक्त उपसर्ग क्रमशः क्या हैं?',
    'Passage: "...ek sahayak upakaran ke roop mein... manaviya samvad..." \nQuestion: What are the prefixes used in "upakaran" and "samvad" respectively?',
    ['"उप" तथा "सम्"', '"Up" and "Sam"'],
    [
      ['"उ" तथा "सं"', '"U" and "San"'],
      ['"उप" तथा "स"', '"Up" and "Sa"'],
      ['"अव" तथा "वि"', '"Av" and "Vi"'],
    ],
    '"उपकरण" में "उप" उपसर्ग (+ करण) तथा "संवाद" में "सम्" उपसर्ग (+ वाद) प्रयुक्त हुआ है।',
    '"Upakaran" uses the prefix "up" (+ karan), and "samvad" uses the prefix "sam" (+ vad).',
    'HARD',
    { grammarRuleHi: '"सम् + वाद" में व्यंजन संधि के नियम से "म्" का अनुस्वार होकर "संवाद" शब्द बनता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "इंटरनेट और डिजिटल तकनीक ने ज्ञान को सबकी पहुँच तक सरल बना दिया है, किंतु इसका अनियंत्रित उपयोग आँखों, नींद और एकाग्रता को प्रभावित कर सकता है। इसलिए तकनीक का प्रयोग एक सहायक उपकरण के रूप में होना चाहिए, न कि प्रत्यक्ष मानवीय संवाद के विकल्प के रूप में।" \nप्रश्न: इस गद्यांश का मुख्य भाव किस शीर्षक से सर्वाधिक सटीक व्यक्त होता है?',
    'Passage: "Internet and digital technology have made knowledge accessible... use as an assistive tool..." \nQuestion: Which title best expresses the central idea of this passage?',
    ['डिजिटल तकनीक का संतुलित उपयोग', 'Balanced Use of Digital Technology'],
    [
      ['इंटरनेट के विनाशकारी आविष्कार', 'Destructive Inventions of the Internet'],
      ['मानवीय संवाद का अंत', 'End of Human Communication'],
      ['निद्रा विज्ञान के नियम', 'Laws of Sleep Science'],
    ],
    'गद्यांश तकनीक के लाभ और उसकी सीमाएँ बताते हुए संतुलित उपयोग पर बल देता है।',
    'The passage outlines both benefits and limits of technology while advocating balanced use.',
    'EASY'
  ),

  // ================= गद्यांश 31: स्वच्छता और स्वस्थ समाज =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "स्वच्छता केवल बाहरी दिखावे की बात नहीं, बल्कि स्वस्थ जीवन और सभ्य समाज की पहली शर्त है। जहाँ परिवेश स्वच्छ होता है, वहाँ संक्रामक रोगों का प्रकोप कम होता है और नागरिकों की कार्य-ऊर्जा में वृद्धि होती है।" \nप्रश्न: गद्यांश के अनुसार स्वच्छ परिवेश से क्या प्रत्यक्ष लाभ होते हैं?',
    'Passage: "Cleanliness is not merely a matter of outward show, rather the first condition for healthy life and a civilized society. Where surroundings are clean, infectious diseases decline and citizens’ work energy rises." \nQuestion: According to the passage, what direct benefits arise from clean surroundings?',
    ['संक्रामक रोगों में कमी आती है और कार्य-ऊर्जा बढ़ती है', 'Infectious diseases decrease and work energy increases'],
    [
      ['केवल इमारतों की ऊँचाई बढ़ती है', 'Only the height of buildings increases'],
      ['चिकित्सालयों की संख्या बढ़ जाती है', 'Number of hospitals increases'],
      ['मौसम में वर्षा बंद हो जाती है', 'Rainfall stops in the season'],
    ],
    'गद्यांश में साफ-सुथरे वातावरण के दो प्रमुख लाभ बताए गए हैं: रोगों की रोकथाम और कार्यक्षमता में वृद्धि।',
    'The passage highlights two main benefits of clean surroundings: reduced infectious diseases and higher work energy.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "स्वच्छता केवल बाहरी दिखावे की बात नहीं, बल्कि स्वस्थ जीवन और सभ्य समाज की पहली शर्त है। जहाँ परिवेश स्वच्छ होता है, वहाँ संक्रामक रोगों का प्रकोप कम होता है और नागरिकों की कार्य-ऊर्जा में वृद्धि होती है।" \nप्रश्न: "संक्रामक रोग" से क्या अभिप्राय है?',
    'Passage: "...wahan sankramak rogon ka prakop kam hota hai..." \nQuestion: What is meant by "sankramak rog" (infectious diseases)?',
    ['वे रोग जो एक व्यक्ति से दूसरे व्यक्ति में संपर्क, वायु या जल से फैलते हैं', 'Diseases that spread from one person to another through contact, air, or water'],
    [
      ['वे रोग जो केवल जन्म से आनुवंशिक होते हैं', 'Diseases that are strictly genetic from birth'],
      ['वे रोग जिनका कोई अस्तित्व नहीं होता', 'Diseases that do not exist'],
      ['केवल हड्डी टूटने की चोटें', 'Only bone fracture injuries'],
    ],
    '"संक्रामक" (सम् + क्रम + अक) का अर्थ फैलने या एक से दूसरे तक पहुँचने वाला है; गंदगी से ऐसे रोग तेजी से फैलते हैं।',
    '"Sankramak" means spreading or contagious; unsanitary conditions accelerate such communicable diseases.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "स्वच्छता केवल बाहरी दिखावे की बात नहीं, बल्कि स्वस्थ जीवन और सभ्य समाज की पहली शर्त है। जहाँ परिवेश स्वच्छ होता है, वहाँ संक्रामक रोगों का प्रकोप कम होता है और नागरिकों की कार्य-ऊर्जा में वृद्धि होती है।" \nप्रश्न: "स्वच्छता केवल बाहरी दिखावे की बात नहीं" कहकर लेखक किस नागरिक आदत की ओर संकेत करता है?',
    'Passage: "Cleanliness is not merely a matter of outward show..." \nQuestion: By stating "cleanliness is not merely outward show", what civic habit does the author point toward?',
    ['अपना घर साफ रखकर कचरा सार्वजनिक स्थान पर न फेंकना और स्वच्छता को संस्कार बनाना', 'Not dumping household trash in public spaces and internalizing cleanliness as a habit'],
    [
      ['केवल महंगे वस्त्र पहनकर बाहर निकलना', 'Only going out in expensive clothes'],
      ['केवल अतिथियों के आने पर घर सजाना', 'Decorating the house only when guests arrive'],
      ['सार्वजनिक स्थानों की सफाई की उपेक्षा करना', 'Ignoring cleanliness of public spaces'],
    ],
    'सच्ची स्वच्छता का अर्थ व्यक्तिगत व सार्वजनिक दोनों स्थानों को स्वच्छ रखने की निरंतर आदत और नागरिक बोध है।',
    'True cleanliness means cultivating a consistent civic habit of keeping both private and public spaces clean.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "स्वच्छता केवल बाहरी दिखावे की बात नहीं, बल्कि स्वस्थ जीवन और सभ्य समाज की पहली शर्त है। जहाँ परिवेश स्वच्छ होता है, वहाँ संक्रामक रोगों का प्रकोप कम होता है और नागरिकों की कार्य-ऊर्जा में वृद्धि होती है।" \nप्रश्न: "स्वच्छ" और "स्वस्थ" शब्दों के सही संधि-विच्छेद क्रमशः क्या हैं?',
    'Passage: "Swachchhata... swasth jeevan aur sabhya samaj..." \nQuestion: What are the correct splits/derivations of "swachchh" and "swasth" respectively?',
    ['सु + अच्छ (यण संधि) तथा स्व + स्थ (स्वयं में स्थित)', 'Su + achchh (Yan Sandhi) and Swa + stha'],
    [
      ['स्व + अच्छ तथा सु + स्थ', 'Swa + achchh and Su + stha'],
      ['स्वच् + छ तथा स्वस + थ', 'Swach + chh and Swas + th'],
      ['स + वच्छ तथा स + वस्थ', 'Sa + vachchh and Sa + vasth'],
    ],
    '"सु + अच्छ" में उ + अ = व् होने से यण संधि द्वारा "स्वच्छ" बनता है, और "स्व + स्थ" (अपने में स्थिर/तंदुरुस्त) से "स्वस्थ" बनता है।',
    '"Su + achchh" undergoes Yan Sandhi (u+a=va) to form "swachchh", while "swa + stha" forms "swasth".',
    'HARD',
    { grammarRuleHi: 'यण संधि में "उ/ऊ" के बाद असमान स्वर आने पर "उ/ऊ" का "व्" हो जाता है (सु + अच्छ = स्वच्छ)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "स्वच्छता केवल बाहरी दिखावे की बात नहीं, बल्कि स्वस्थ जीवन और सभ्य समाज की पहली शर्त है। जहाँ परिवेश स्वच्छ होता है, वहाँ संक्रामक रोगों का प्रकोप कम होता है और नागरिकों की कार्य-ऊर्जा में वृद्धि होती है।" \nप्रश्न: "वृद्धि" शब्द का सटीक विलोम शब्द क्या है?',
    'Passage: "...nagrikon ki karya-urja mein vriddhi hoti hai." \nQuestion: What is the exact antonym of the word "vriddhi" (growth/increase)?',
    ['ह्रास', 'Hraas (decline/decrease)'],
    [
      ['विकास', 'Development'],
      ['उन्नति', 'Progress'],
      ['प्रसार', 'Expansion'],
    ],
    '"वृद्धि" (बढ़ोतरी) तत्सम संज्ञा है जिसका मानक तत्सम विलोम "ह्रास" (कमी/पतन) होता है।',
    '"Vriddhi" (increase) is a Tatsama noun whose standard Tatsama antonym is "hraas" (decline/reduction).',
    'EASY'
  ),

  // ================= गद्यांश 32: सहिष्णुता और सामाजिक समरसता =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "विविधताओं से भरे समाज में शांति तभी संभव है जब नागरिक परस्पर सहिष्णुता और सम्मान का भाव रखें। किसी भी मत या संस्कृति के प्रति असहिष्णुता संवाद के द्वार बंद कर देती है, जबकि सहिष्णुता हमें एक-दूसरे से सीखने का अवसर देती है।" \nप्रश्न: गद्यांश के अनुसार विविधतापूर्ण समाज में शांति की मुख्य शर्त क्या है?',
    'Passage: "In a society full of diversity, peace is possible only when citizens maintain mutual tolerance and respect..." \nQuestion: According to the passage, what is the main condition for peace in a diverse society?',
    ['नागरिकों में परस्पर सहिष्णुता और सम्मान का भाव होना', 'Mutual tolerance and respect among citizens'],
    [
      ['सभी विचारों को बलपूर्वक एक जैसा बना देना', 'Forcibly making all opinions identical'],
      ['विभिन्न संस्कृतियों के बीच संवाद बंद कर देना', 'Stopping dialogue among different cultures'],
      ['दूसरों के मतों का उपहास करना', 'Mocking the views of others'],
    ],
    'लेखक के अनुसार विविधताओं के बीच शांति बनाए रखने के लिए आपसी सहिष्णुता और सम्मान अनिवार्य है।',
    'According to the author, mutual tolerance and respect are essential for peace amidst diversity.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "विविधताओं से भरे समाज में शांति तभी संभव है जब नागरिक परस्पर सहिष्णुता और सम्मान का भाव रखें। किसी भी मत या संस्कृति के प्रति असहिष्णुता संवाद के द्वार बंद कर देती है, जबकि सहिष्णुता हमें एक-दूसरे से सीखने का अवसर देती है।" \nप्रश्न: "सहिष्णुता" शब्द का सही अर्थ क्या है?',
    'Passage: "...paraspar sahishnuta aur samman ka bhav rakhen..." \nQuestion: What is the correct meaning of the word "sahishnuta"?',
    ['भिन्न विचारों और परंपराओं को धैर्यपूर्वक स्वीकार करने व सहन करने का भाव', 'Tolerance — patiently respecting differing views and traditions'],
    [
      ['प्रत्येक बात पर क्रोध करने की आदत', 'Habit of getting angry at everything'],
      ['दूसरों के विचारों पर आक्रमण करना', 'Attacking others’ ideas'],
      ['समाज से पूर्णतः पलायन करना', 'Completely fleeing from society'],
    ],
    '"सहिष्णु" (सहने वाला) से बना "सहिष्णुता" शब्द उदारता, धैर्य और दूसरे के मत के प्रति सम्मान को दर्शाता है।',
    '"Sahishnuta" signifies broad-mindedness, patience, and respect toward differing viewpoints.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "विविधताओं से भरे समाज में शांति तभी संभव है जब नागरिक परस्पर सहिष्णुता और सम्मान का भाव रखें। किसी भी मत या संस्कृति के प्रति असहिष्णुता संवाद के द्वार बंद कर देती है, जबकि सहिष्णुता हमें एक-दूसरे से सीखने का अवसर देती है।" \nप्रश्न: "संवाद के द्वार बंद कर देती है" का आशय क्या है?',
    'Passage: "...Intolerance toward any belief or culture closes the doors of dialogue..." \nQuestion: What does "closes the doors of dialogue" imply?',
    ['विचार-विमर्श, समझ और सहयोग की संभावना समाप्त हो जाती है', 'Possibilities of discussion, understanding, and cooperation end'],
    [
      ['कमरे का दरवाजा बाहर से बंद कर दिया जाता है', 'The room door is locked from outside'],
      ['बोलने की शारीरिक क्षमता समाप्त हो जाती है', 'Physical ability to speak ends'],
      ['नई भाषाएँ स्वतः सीख ली जाती हैं', 'New languages are automatically learned'],
    ],
    'असहिष्णु व्यक्ति दूसरे का पक्ष सुनने को तैयार नहीं होता, जिससे मतभेद बढ़ने लगते हैं और आपसी बातचीत रुक जाती है।',
    'An intolerant attitude refuses to listen to another perspective, halting constructive communication.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "विविधताओं से भरे समाज में शांति तभी संभव है जब नागरिक परस्पर सहिष्णुता और सम्मान का भाव रखें। किसी भी मत या संस्कृति के प्रति असहिष्णुता संवाद के द्वार बंद कर देती है, जबकि सहिष्णुता हमें एक-दूसरे से सीखने का अवसर देती है।" \nप्रश्न: "असहिष्णुता" शब्द की संरचना में प्रयुक्त उपसर्ग और प्रत्यय क्या हैं?',
    'Passage: "...kisi bhi mat ya sanskriti ke prati asahishnuta..." \nQuestion: What prefix and suffix are used in the structure of "asahishnuta"?',
    ['"अ" उपसर्ग तथा "ता" प्रत्यय ("सहिष्णु" विशेषण के साथ)', '"A" prefix and "ta" suffix (with "sahishnu")'],
    [
      ['"अस" उपसर्ग तथा "इत" प्रत्यय', '"As" prefix and "it" suffix'],
      ['"अन" उपसर्ग तथा "त्व" प्रत्यय', '"An" prefix and "tva" suffix'],
      ['"अति" उपसर्ग तथा "ई" प्रत्यय', '"Ati" prefix and "i" suffix'],
    ],
    '"अ (उपसर्ग) + सहिष्णु (मूल विशेषण) + ता (भाववाचक प्रत्यय) = असहिष्णुता"।',
    '"A" (negative prefix) + "sahishnu" (root adjective) + "ta" (abstract noun suffix) = "asahishnuta".',
    'HARD',
    { grammarRuleHi: 'भाववाचक संज्ञाओं के आगे निषेधार्थक "अ" या "अन्" उपसर्ग लगाकर विलोम भाववाचक संज्ञाएँ बनती हैं।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "विविधताओं से भरे समाज में शांति तभी संभव है जब नागरिक परस्पर सहिष्णुता और सम्मान का भाव रखें। किसी भी मत या संस्कृति के प्रति असहिष्णुता संवाद के द्वार बंद कर देती है, जबकि सहिष्णुता हमें एक-दूसरे से सीखने का अवसर देती है।" \nप्रश्न: "एक-दूसरे" शब्द किस प्रकार का सर्वनाम या पद है?',
    'Passage: "...ek-doosre se seekhne ka avsar deti hai." \nQuestion: What grammatical form is "ek-doosre" in Hindi?',
    ['परस्परबोधक सर्वनाम / सर्वनामिक युग्म', 'Reciprocal pronoun pair'],
    [
      ['व्यक्तिवाचक संज्ञा', 'Proper noun'],
      ['परिमाणवाचक क्रियाविशेषण', 'Quantitative adverb'],
      ['विस्मयादिबोधक अव्यय', 'Interjection'],
    ],
    '"एक-दूसरे" या "आपस में" परस्पर संबंध या पारस्परिक क्रिया को व्यक्त करने वाले सर्वनाम रूप हैं।',
    '"Ek-doosre" (each other) functions as a reciprocal pronoun expressing mutual action.',
    'HARD',
    { grammarRuleHi: 'जब दो व्यक्तियों या पक्षों के बीच पारस्परिक संबंध दर्शाया जाए, तो "एक-दूसरे" या "आपस" का प्रयोग होता है।' }
  ),

  // ================= गद्यांश 33: प्लास्टिक प्रदूषण और विकल्प =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "एकल-उपयोग प्लास्टिक सैकड़ों वर्षों तक मिट्टी और जल में अपघटित नहीं होता, जिससे भूमि की उर्वरता घटती है तथा जलीय जीवों का जीवन संकट में पड़ता है। कपड़े या जूट के थैलों का उपयोग अपनाकर हम इस गंभीर संकट को काफी हद तक कम कर सकते हैं।" \nप्रश्न: एकल-उपयोग प्लास्टिक से पर्यावरण को क्या मुख्य हानि होती है?',
    'Passage: "Single-use plastic does not decompose in soil and water for hundreds of years, reducing soil fertility and endangering aquatic life..." \nQuestion: What is the major environmental harm caused by single-use plastic?',
    ['लंबे समय तक नष्ट न होने से मिट्टी की उर्वरता घटती है और जलीय जीव संकट में पड़ते हैं', 'It fails to decompose for centuries, reducing soil fertility and endangering aquatic life'],
    [
      ['यह कुछ ही घंटों में खाद में बदल जाता है', 'It turns into compost within a few hours'],
      ['यह जलीय जीवों का मुख्य पोषक आहार है', 'It is the main nutritious food for aquatic animals'],
      ['इससे मिट्टी की उपजाऊ शक्ति दोगुनी हो जाती है', 'It doubles soil fertility'],
    ],
    'गद्यांश बताता है कि प्लास्टिक के अपघटित न होने से मृदा और जल पारिस्थितिकी दोनों को गंभीर क्षति पहुँचती है।',
    'The passage states that non-biodegradable plastic severely damages both soil fertility and aquatic ecosystems.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "एकल-उपयोग प्लास्टिक सैकड़ों वर्षों तक मिट्टी और जल में अपघटित नहीं होता, जिससे भूमि की उर्वरता घटती है तथा जलीय जीवों का जीवन संकट में पड़ता है। कपड़े या जूट के थैलों का उपयोग अपनाकर हम इस गंभीर संकट को काफी हद तक कम कर सकते हैं।" \nप्रश्न: "अपघटित" और "उर्वरता" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Passage: "...mitti aur jal mein apghatit nahin hota, jisse bhumi ki urvarata ghatati hai..." \nQuestion: What are the correct meanings of "apghatit" and "urvarata" respectively?',
    ['अपघटित = सड़-गलकर विघटित होना; उर्वरता = उपजाऊपन', 'Apghatit = decomposed/broken down; Urvarata = fertility'],
    [
      ['अपघटित = मजबूत होना; उर्वरता = बंजरपन', 'Apghatit = strengthened; Urvarata = barrenness'],
      ['अपघटित = रंगीन होना; उर्वरता = कठोरता', 'Apghatit = colored; Urvarata = hardness'],
      ['अपघटित = उड़ जाना; उर्वरता = नमी', 'Apghatit = evaporated; Urvarata = moisture'],
    ],
    '"अपघटित" का अर्थ सूक्ष्मजीवों द्वारा टूटकर मिट्टी में मिल जाना और "उर्वरता" का अर्थ भूमि के उपजाऊ होने की शक्ति है।',
    '"Apghatit" means broken down/decomposed naturally, and "urvarata" means soil fertility.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "एकल-उपयोग प्लास्टिक सैकड़ों वर्षों तक मिट्टी और जल में अपघटित नहीं होता, जिससे भूमि की उर्वरता घटती है तथा जलीय जीवों का जीवन संकट में पड़ता है। कपड़े या जूट के थैलों का उपयोग अपनाकर हम इस गंभीर संकट को काफी हद तक कम कर सकते हैं।" \nप्रश्न: गद्यांश के अनुसार प्लास्टिक संकट से निपटने में उपभोक्ता की कौन-सी आदत कारगर हो सकती है?',
    'Passage: "...By adopting cloth or jute bags, we can significantly reduce this grave crisis." \nQuestion: According to the passage, which consumer habit can help curb the plastic crisis?',
    ['पॉलीथीन के स्थान पर पुनः उपयोग योग्य कपड़े या जूट के थैले लेकर चलना', 'Carrying reusable cloth or jute bags instead of polythene'],
    [
      ['हर खरीद पर नई प्लास्टिक की थैली माँगना', 'Demanding a new plastic bag on every purchase'],
      ['प्लास्टिक कचरे को नदियों में बहा देना', 'Dumping plastic waste into rivers'],
      ['बाजार से सामान खरीदना बंद कर देना', 'Stopping buying goods from the market'],
    ],
    'दैनिक खरीदारी में कपड़े व जूट के थैले अपनाकर एकल-उपयोग प्लास्टिक की माँग व कचरा दोनों घटाए जा सकते हैं।',
    'Using cloth or jute bags in daily shopping reduces demand for and waste from single-use plastics.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "एकल-उपयोग प्लास्टिक सैकड़ों वर्षों तक मिट्टी और जल में अपघटित नहीं होता, जिससे भूमि की उर्वरता घटती है तथा जलीय जीवों का जीवन संकट में पड़ता है। कपड़े या जूट के थैलों का उपयोग अपनाकर हम इस गंभीर संकट को काफी हद तक कम कर सकते हैं।" \nप्रश्न: "उर्वरता" शब्द का सटीक विलोम शब्द और "जलीय" शब्द का प्रत्यय क्या है?',
    'Passage: "...bhumi ki urvarata ghatati hai tatha jaliya jeevon ka jeevan..." \nQuestion: What is the exact antonym of "urvarata" and the suffix in "jaliya"?',
    ['उर्वरता का विलोम "ऊसरता/बंजरपन" तथा "जलीय" में "ईय" प्रत्यय', 'Antonym of urvarata is "usarta/banjarpan" and suffix in jaliya is "iya"'],
    [
      ['उर्वरता का विलोम "उपजाऊपन" तथा "जलीय" में "इय" प्रत्यय', 'Antonym "upajaupan" and suffix "iy"'],
      ['उर्वरता का विलोम "हरियाली" तथा "जलीय" में "य" प्रत्यय', 'Antonym "hariyali" and suffix "ya"'],
      ['उर्वरता का विलोम "सघनता" तथा "जलीय" में "आ" प्रत्यय', 'Antonym "saghanta" and suffix "aa"'],
    ],
    '"उर्वर" (उपजाऊ) का विलोम "ऊसर" या "बंजर" होता है तथा "जल + ईय = जलीय" में "ईय" तद्धित प्रत्यय जुड़ा है।',
    'The antonym of "urvar" (fertile) is "usar/banjar" (barren), and "jaliya" is formed by adding "-iya" to "jal".',
    'HARD',
    { grammarRuleHi: '"ईय" प्रत्यय के योग से संज्ञा शब्द विशेषण बन जाते हैं (जल + ईय = जलीय, भारत + ईय = भारतीय)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "एकल-उपयोग प्लास्टिक सैकड़ों वर्षों तक मिट्टी और जल में अपघटित नहीं होता, जिससे भूमि की उर्वरता घटती है तथा जलीय जीवों का जीवन संकट में पड़ता है। कपड़े या जूट के थैलों का उपयोग अपनाकर हम इस गंभीर संकट को काफी हद तक कम कर सकते हैं।" \nप्रश्न: "एकल-उपयोग" में "एकल" शब्द किस व्याकरणिक श्रेणी में आता है?',
    'Passage: "Ekal-upyog plastic saikadon varshon tak..." \nQuestion: Which grammatical category does the word "ekal" belong to in "ekal-upyog"?',
    ['विशेषण (संख्यात्मक/गुणवाचक)', 'Adjective (single/unitary)'],
    [
      ['सकर्मक क्रिया', 'Transitive verb'],
      ['समुच्चयबोधक अव्यय', 'Conjunction'],
      ['अनिश्चयवाचक सर्वनाम', 'Indefinite pronoun'],
    ],
    '"एकल" शब्द "उपयोग" की विशेषता (एक बार का) बता रहा है, अतः यह विशेषण है।',
    '"Ekal" (single) modifies "upyog" (use), functioning as an adjective.',
    'EASY'
  ),

  // ================= गद्यांश 34: ग्रामीण विकास और शिक्षा =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "भारत की आत्मा गाँवों में बसती है, इसलिए देश का समग्र विकास ग्रामीण अंचलों की प्रगति के बिना अधूरा है। जब गाँवों में गुणवत्तापूर्ण विद्यालय, स्वच्छ पेयजल और स्थानीय रोजगार के अवसर सुलभ होंगे, तभी शहरों की ओर होने वाला अनियंत्रित पलायन रुकेगा।" \nप्रश्न: गद्यांश के अनुसार शहरों की ओर होने वाला पलायन कब रुक सकता है?',
    'Passage: "India’s soul resides in its villages, so holistic national development is incomplete without rural progress. Only when quality schools, clean drinking water, and local jobs are accessible in villages will uncontrolled migration to cities stop." \nQuestion: According to the passage, when can uncontrolled migration to cities be halted?',
    ['जब गाँवों में अच्छी शिक्षा, स्वच्छ जल और स्थानीय रोजगार उपलब्ध होंगे', 'When quality education, clean water, and local employment are available in villages'],
    [
      ['जब शहरों में सभी कारखाने बंद कर दिए जाएँगे', 'When all factories in cities are shut down'],
      ['जब ग्रामीण विद्यालयों को बंद कर दिया जाएगा', 'When rural schools are closed'],
      ['जब गाँवों से सड़कें हटा दी जाएँगी', 'When roads are removed from villages'],
    ],
    'मूलभूत सुविधाओं और रोजगार के अभाव में लोग शहर जाते हैं; गाँवों में ये सुविधाएँ मिलने से पलायन स्वतः कम होगा।',
    'People migrate due to lack of basic amenities and jobs; providing them locally will naturally curb migration.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "भारत की आत्मा गाँवों में बसती है, इसलिए देश का समग्र विकास ग्रामीण अंचलों की प्रगति के बिना अधूरा है। जब गाँवों में गुणवत्तापूर्ण विद्यालय, स्वच्छ पेयजल और स्थानीय रोजगार के अवसर सुलभ होंगे, तभी शहरों की ओर होने वाला अनियंत्रित पलायन रुकेगा।" \nप्रश्न: "सुलभ" और "अंचलों" शब्दों के क्रमशः सही अर्थ क्या हैं?',
    'Passage: "...gramin anchalon ki pragati... sulabh honge..." \nQuestion: What are the correct meanings of "sulabh" and "anchalon" respectively?',
    ['सुलभ = आसानी से प्राप्त होने योग्य; अंचलों = क्षेत्रों/इलाकों', 'Sulabh = easily accessible; Anchal = regions/areas'],
    [
      ['सुलभ = कठिन; अंचलों = पहाड़ों', 'Sulabh = difficult; Anchal = mountains'],
      ['सुलभ = महंगा; अंचलों = नदियों', 'Sulabh = expensive; Anchal = rivers'],
      ['सुलभ = अदृश्य; अंचलों = इमारतों', 'Sulabh = invisible; Anchal = buildings'],
    ],
    '"सुलभ" (सु + लभ) का अर्थ सरलता से उपलब्ध है और "अंचल" का अर्थ क्षेत्र, प्रदेश या किनारा होता है।',
    '"Sulabh" means easily available, and "anchal" refers to regions or rural belts.',
    'MEDIUM',
    { grammarRuleHi: '"सुलभ" का मानक विलोम "दुर्लभ" (कठिनाई से मिलने वाला) होता है।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "भारत की आत्मा गाँवों में बसती है, इसलिए देश का समग्र विकास ग्रामीण अंचलों की प्रगति के बिना अधूरा है। जब गाँवों में गुणवत्तापूर्ण विद्यालय, स्वच्छ पेयजल और स्थानीय रोजगार के अवसर सुलभ होंगे, तभी शहरों की ओर होने वाला अनियंत्रित पलायन रुकेगा।" \nप्रश्न: "भारत की आत्मा गाँवों में बसती है" कथन से क्या निष्कर्ष निकलता है?',
    'Passage: "India’s soul resides in its villages, so holistic national development is incomplete without rural progress." \nQuestion: What can be inferred from the statement "India’s soul resides in its villages"?',
    ['भारत की सांस्कृतिक, सामाजिक और आर्थिक शक्ति का मुख्य आधार ग्रामीण भारत है', 'Rural India forms the primary foundation of the country’s cultural, social, and economic strength'],
    [
      ['शहरों का देश के विकास में कोई योगदान नहीं है', 'Cities make no contribution to national development'],
      ['गाँवों में आधुनिक तकनीक का प्रवेश वर्जित होना चाहिए', 'Modern technology should be banned in villages'],
      ['केवल कृषि को छोड़कर अन्य सभी व्यवसाय बंद कर देने चाहिए', 'All occupations except farming should cease'],
    ],
    'बड़ी ग्रामीण आबादी और लोक-संस्कृति के कारण गाँवों की खुशहाली के बिना राष्ट्र की समग्र उन्नति संभव नहीं।',
    'Because of India’s vast rural population and living traditions, holistic national progress requires rural prosperity.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "भारत की आत्मा गाँवों में बसती है, इसलिए देश का समग्र विकास ग्रामीण अंचलों की प्रगति के बिना अधूरा है। जब गाँवों में गुणवत्तापूर्ण विद्यालय, स्वच्छ पेयजल और स्थानीय रोजगार के अवसर सुलभ होंगे, तभी शहरों की ओर होने वाला अनियंत्रित पलायन रुकेगा।" \nप्रश्न: "ग्रामीण" शब्द में कौन-सा प्रत्यय जुड़ा है तथा "विद्यालय" का संधि-विच्छेद क्या है?',
    'Passage: "...gramin anchalon... gunvattapurna vidyalaya..." \nQuestion: Which suffix is used in "gramin" and what is the sandhi split of "vidyalaya"?',
    ['ग्रामीण: ग्राम + ईण (ईन); विद्यालय: विद्या + आलय (दीर्घ संधि)', 'Gramin: gram + in; Vidyalaya: vidya + alaya (Dirgha Sandhi)'],
    [
      ['ग्रामीण: ग्राम + ई; विद्यालय: विद्य + आलय (गुण संधि)', 'Gram + i; Vidya + alaya (Guna Sandhi)'],
      ['ग्रामीण: ग्रामी + ण; विद्यालय: विद् + आलय (यण संधि)', 'Grami + n; Vid + alaya (Yan Sandhi)'],
      ['ग्रामीण: ग्रा + मीण; विद्यालय: विद्या + लय (व्यंजन संधि)', 'Gra + min; Vidya + laya'],
    ],
    '"ग्राम" में "ईन" प्रत्यय जुड़ने पर "न" का "ण" हो जाता है ("ग्रामीण") तथा "विद्या + आलय" (आ + आ = आ) में दीर्घ संधि से "विद्यालय" बनता है।',
    'Adding "-in" to "gram" changes n to ṇ ("gramin"), while "vidya + alaya" forms "vidyalaya" via Dirgha Sandhi.',
    'HARD',
    { grammarRuleHi: 'शब्द में "र, ऋ, ष" होने पर "न" प्रायः "ण" में बदल जाता है (णत्व विधान: ग्राम + ईन = ग्रामीण)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "भारत की आत्मा गाँवों में बसती है, इसलिए देश का समग्र विकास ग्रामीण अंचलों की प्रगति के बिना अधूरा है। जब गाँवों में गुणवत्तापूर्ण विद्यालय, स्वच्छ पेयजल और स्थानीय रोजगार के अवसर सुलभ होंगे, तभी शहरों की ओर होने वाला अनियंत्रित पलायन रुकेगा।" \nप्रश्न: "अनियंत्रित पलायन" पद में "अनियंत्रित" किस प्रकार का शब्द है?',
    'Passage: "...shaharon ki or hone wala aniyantrit palayan rukega." \nQuestion: What part of speech is "aniyantrit" in "aniyantrit palayan"?',
    ['विशेषण', 'Adjective'],
    [
      ['भाववाचक संज्ञा', 'Abstract noun'],
      ['विस्मयादिबोधक अव्यय', 'Interjection'],
      ['निजवाचक सर्वनाम', 'Reflexive pronoun'],
    ],
    '"अनियंत्रित" शब्द "पलायन" संज्ञा की विशेषता बता रहा है, अतः यह विशेषण है।',
    '"Aniyantrit" (uncontrolled) modifies the noun "palayan" (migration), making it an adjective.',
    'EASY'
  ),

  // ================= गद्यांश 35: सकारात्मक सोच और मानसिक स्वास्थ्य =================
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जीवन में चुनौतियाँ आना स्वाभाविक है, परंतु उनके प्रति हमारा दृष्टिकोण ही हमारी मानसिक शांति तय करता है। सकारात्मक सोच का अर्थ समस्याओं से आँखें मूँद लेना नहीं, बल्कि शांत मन से समाधान के व्यावहारिक मार्ग खोजना है।" \nप्रश्न: गद्यांश में "सकारात्मक सोच" की सही परिभाषा क्या दी गई है?',
    'Passage: "Facing challenges in life is natural, yet our attitude toward them determines our mental peace. Positive thinking does not mean turning a blind eye to problems, rather calmly finding practical solutions..." \nQuestion: How is "positive thinking" defined in the passage?',
    ['शांत मन से समस्याओं के व्यावहारिक समाधान खोजना', 'Calmly searching for practical solutions to problems'],
    [
      ['समस्याओं के अस्तित्व से इनकार कर देना', 'Denying the existence of problems'],
      ['दूसरों के ऊपर अपनी चिंता डाल देना', 'Shifting one’s worries onto others'],
      ['बिना सोचे-समझे सदैव हँसते रहना', 'Laughing mindlessly at all times'],
    ],
    'लेखक स्पष्ट करता है कि सकारात्मकता वास्तविकता से भागना नहीं, बल्कि धैर्यपूर्वक हल खोजना है।',
    'The author clarifies that positivity is not escaping reality, but patiently seeking practical solutions.',
    'EASY'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जीवन में चुनौतियाँ आना स्वाभाविक है, परंतु उनके प्रति हमारा दृष्टिकोण ही हमारी मानसिक शांति तय करता है। सकारात्मक सोच का अर्थ समस्याओं से आँखें मूँद लेना नहीं, बल्कि शांत मन से समाधान के व्यावहारिक मार्ग खोजना है।" \nप्रश्न: गद्यांश में प्रयुक्त मुहावरे "आँखें मूँद लेना" का सही अर्थ क्या है?',
    'Passage: "...samasyaon se aankhen moond lena nahin..." \nQuestion: What is the correct meaning of the idiom "aankhen moond lena" used in the passage?',
    ['जानबूझकर अनदेखी या उपेक्षा करना', 'To deliberately ignore or turn a blind eye'],
    [
      ['धूप से आँखों को बचाना', 'Protecting eyes from sunlight'],
      ['गहन ध्यान में लीन होना', 'Being absorbed in deep meditation'],
      ['आँसू पोंछकर रोना बंद करना', 'Wiping tears and stopping crying'],
    ],
    '"आँखें मूँद लेना" एक प्रचलित मुहावरा है, जिसका अर्थ किसी वास्तविकता या समस्या से जानबूझकर मुँह मोड़ लेना होता है।',
    '"Aankhen moond lena" is an idiom meaning to deliberately ignore or overlook a reality or problem.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जीवन में चुनौतियाँ आना स्वाभाविक है, परंतु उनके प्रति हमारा दृष्टिकोण ही हमारी मानसिक शांति तय करता है। सकारात्मक सोच का अर्थ समस्याओं से आँखें मूँद लेना नहीं, बल्कि शांत मन से समाधान के व्यावहारिक मार्ग खोजना है।" \nप्रश्न: दो व्यक्तियों के सामने एक जैसी कठिनाई आने पर भी एक शांत और दूसरा व्याकुल क्यों रहता है?',
    'Passage: "...yet our attitude toward them determines our mental peace..." \nQuestion: Why does one person stay calm while another panics when facing the exact same difficulty?',
    ['क्योंकि परिस्थितियों को देखने का दोनों का दृष्टिकोण भिन्न होता है', 'Because their attitudes toward the circumstances differ'],
    [
      ['क्योंकि चुनौतियाँ केवल एक ही व्यक्ति को दिखती हैं', 'Because challenges are visible to only one person'],
      ['क्योंकि शांत व्यक्ति को कोई समस्या होती ही नहीं', 'Because a calm person never has problems'],
      ['क्योंकि व्यावहारिक मार्ग केवल पुस्तकों में लिखे हैं', 'Because practical paths exist only in books'],
    ],
    'बाहरी घटना से अधिक हमारा मानसिक दृष्टिकोण हमारी भावनात्मक प्रतिक्रिया और शांति को निर्धारित करता है।',
    'More than external events, our mental attitude governs our emotional response and inner peace.',
    'MEDIUM'
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जीवन में चुनौतियाँ आना स्वाभाविक है, परंतु उनके प्रति हमारा दृष्टिकोण ही हमारी मानसिक शांति तय करता है। सकारात्मक सोच का अर्थ समस्याओं से आँखें मूँद लेना नहीं, बल्कि शांत मन से समाधान के व्यावहारिक मार्ग खोजना है।" \nप्रश्न: "स्वाभाविक" और "व्यावहारिक" शब्दों में किस एक प्रत्यय के कारण आदि स्वर दीर्घ हुआ है?',
    'Passage: "Jeevan mein chunautiyan aana swabhavik hai... vyavaharik marg..." \nQuestion: Which single suffix causes the initial vowel lengthening in both "swabhavik" and "vyavaharik"?',
    ['"इक" प्रत्यय (स्वभाव + इक, व्यवहार + इक)', '"Ik" suffix (swabhav + ik, vyavahar + ik)'],
    [
      ['"ईक" प्रत्यय', '"Eek" suffix'],
      ['"क" प्रत्यय', '"Ka" suffix'],
      ['"आक" प्रत्यय', '"Aak" suffix'],
    ],
    '"स्वभाव + इक = स्वाभाविक" तथा "व्यवहार + इक = व्यावहारिक"; दोनों में "इक" प्रत्यय से मूल शब्द के प्रथम स्वर "अ" का "आ" हो गया है।',
    '"Swabhav + ik = swabhavik" and "vyavahar + ik = vyavaharik"; in both, "-ik" lengthens the initial vowel "a" to "aa".',
    'HARD',
    { grammarRuleHi: '"इक" प्रत्यय जुड़ने पर प्रथम अक्षर का "अ" दीर्घ होकर "आ" में बदल जाता है (व्यवहार + इक = व्यावहारिक)।' }
  ),
  q(
    'अपठित गद्यांश',
    'शिक्षा एवं पर्यावरण गद्यांश',
    'गद्यांश: "जीवन में चुनौतियाँ आना स्वाभाविक है, परंतु उनके प्रति हमारा दृष्टिकोण ही हमारी मानसिक शांति तय करता है। सकारात्मक सोच का अर्थ समस्याओं से आँखें मूँद लेना नहीं, बल्कि शांत मन से समाधान के व्यावहारिक मार्ग खोजना है।" \nप्रश्न: गद्यांश में प्रयुक्त "सकारात्मक" का सही विलोम शब्द क्या है?',
    'Passage: "Sakaratmak soch ka arth..." \nQuestion: What is the correct antonym of "sakaratmak" (positive)?',
    ['नकारात्मक', 'Nakaratmak (negative)'],
    [
      ['रचनात्मक', 'Constructive'],
      ['प्रेरणात्मक', 'Inspirational'],
      ['विचारात्मक', 'Thoughtful'],
    ],
    '"सकारात्मक" (सकारात्मक दृष्टिकोण) का सटीक विलोम "नकारात्मक" (निषेधात्मक दृष्टिकोण) होता है।',
    'The exact antonym of "sakaratmak" (positive) is "nakaratmak" (negative).',
    'EASY'
  ),
];
