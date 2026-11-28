import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Science');

export const SCIENCE_BANK_PART2: RawBankQuestion[] = [
  // =========================================================================
  // SECTION 1: जीवों का वर्गीकरण, कोशिका एवं ऊतक (95 Qs)
  // =========================================================================
  q(
    'जीवों का वर्गीकरण',
    'द्विनाम पद्धति एवं पाँच जगत वर्गीकरण',
    'जीवों के वर्गीकरण की द्विनाम पद्धति (Binomial Nomenclature) के जनक कौन हैं?',
    'Who is known as the father of Binomial Nomenclature in biological classification?',
    ['कैरोलस लीनियस', 'Carolus Linnaeus'],
    [
      ['अरस्तू', 'Aristotle'],
      ['चार्ल्स डार्विन', 'Charles Darwin'],
      ['रॉबर्ट व्हिटेकर', 'Robert Whittaker'],
    ],
    'कैरोलस लीनियस ने अपनी पुस्तक "सिस्टेमा नेचुरी" (Systema Naturae) में प्रत्येक जीव को दो नामों (वंश और जाति) से दर्शाने की द्विनाम पद्धति प्रतिपादित की।',
    'Carolus Linnaeus proposed Binomial Nomenclature in his book "Systema Naturae", naming each organism with two Latin words: genus and species.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'पाँच जगत वर्गीकरण',
    'पाँच जगत वर्गीकरण (Five Kingdom Classification) किस वैज्ञानिक द्वारा वर्ष 1969 में प्रस्तुत किया गया?',
    'Which scientist proposed the Five Kingdom Classification in the year 1969?',
    ['आर. एच. व्हिटेकर', 'R. H. Whittaker'],
    [
      ['अर्न्स्ट हेकल', 'Ernst Haeckel'],
      ['कोपलैंड', 'Copeland'],
      ['कैरोलस लीनियस', 'Carolus Linnaeus'],
    ],
    'आर. एच. व्हिटेकर (1969) ने जीवों को पाँच जगतों—मोनेरा, प्रोटिस्टा, कवक (फंजाई), पादप (प्लांटी) और जंतु (एनिमेलिया)—में विभाजित किया।',
    'R. H. Whittaker (1969) classified living organisms into five kingdoms: Monera, Protista, Fungi, Plantae, and Animalia.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'मोनेरा जगत',
    'व्हिटेकर के पाँच जगत वर्गीकरण में सभी प्रोकैरियोटिक जीव किस जगत के अंतर्गत रखे गए हैं?',
    'In Whittaker’s Five Kingdom Classification, all prokaryotic organisms are placed under which kingdom?',
    ['मोनेरा', 'Monera'],
    [
      ['प्रोटिस्टा', 'Protista'],
      ['कवक', 'Fungi'],
      ['पादप', 'Plantae'],
    ],
    'जगत मोनेरा में एककोशिकीय प्रोकैरियोटिक जीव आते हैं जिनमें सुस्पष्ट केंद्रक का अभाव होता है, जैसे—जीवाणु, सायनोबैक्टीरिया और माइकोप्लाज्मा।',
    'Kingdom Monera comprises unicellular prokaryotic organisms lacking a well-defined nucleus, such as bacteria, cyanobacteria, and Mycoplasma.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'प्रोटिस्टा जगत',
    'अमीबा, पैरामीशियम तथा यूग्लीना किस जगत के अंतर्गत आते हैं?',
    'Amoeba, Paramecium, and Euglena belong to which kingdom?',
    ['प्रोटिस्टा', 'Protista'],
    [
      ['मोनेरा', 'Monera'],
      ['एनिमेलिया', 'Animalia'],
      ['कवक', 'Fungi'],
    ],
    'अमीबा, पैरामीशियम और यूग्लीना एककोशिकीय यूकैरियोटिक जीव हैं, इसलिए इन्हें प्रोटिस्टा जगत में रखा जाता है।',
    'Amoeba, Paramecium, and Euglena are unicellular eukaryotic organisms, hence placed in Kingdom Protista.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'कवक जगत',
    'कवक (Fungi) की कोशिका भित्ति मुख्य रूप से किस जटिल पॉलीसैकेराइड की बनी होती है?',
    'The cell wall of Fungi is primarily composed of which complex polysaccharide?',
    ['काइटिन', 'Chitin'],
    [
      ['सेल्यूलोज', 'Cellulose'],
      ['पेप्टिडोग्लाइकन', 'Peptidoglycan'],
      ['लिग्निन', 'Lignin'],
    ],
    'कवक विषमपोषी यूकैरियोटिक जीव हैं जिनकी कोशिका भित्ति काइटिन (Chitin) नामक नाइट्रोजन युक्त पॉलीसैकेराइड से बनी होती है।',
    'Fungi are heterotrophic eukaryotes whose cell wall is made of a nitrogen-containing polysaccharide called chitin.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'जीवाणु एवं माइकोप्लाज्मा',
    'पृथ्वी पर स्वतंत्र रूप से जीवित रहने वाली सबसे छोटी ज्ञात कोशिका कौन-सी है जिसमें कोशिका भित्ति नहीं होती?',
    'Which is the smallest known free-living cell on Earth that lacks a cell wall?',
    ['माइकोप्लाज्मा', 'Mycoplasma'],
    [
      ['ई. कोलाई', 'E. coli'],
      ['नॉस्टॉक', 'Nostoc'],
      ['पैरामीशियम', 'Paramecium'],
    ],
    'माइकोप्लाज्मा (PPLO) सबसे छोटी जीवित कोशिका है। इसमें कोशिका भित्ति नहीं होती और यह ऑक्सीजन के बिना भी जीवित रह सकता है।',
    'Mycoplasma (PPLO) is the smallest known living cell. It completely lacks a cell wall and can survive without oxygen.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'शैवाल एवं कवक सहजीवन',
    'लाइकेन (Lichen) किन दो जीवों के बीच का सहजीवी संबंध है?',
    'Lichen represents a symbiotic association between which two organisms?',
    ['शैवाल और कवक', 'Algae and Fungi'],
    [
      ['जीवाणु और विषाणु', 'Bacteria and Virus'],
      ['कवक और ब्रायोफायटा', 'Fungi and Bryophyta'],
      ['शैवाल और जीवाणु', 'Algae and Bacteria'],
    ],
    'लाइकेन में शैवाल (फाइकोबायोंट) प्रकाश संश्लेषण द्वारा भोजन बनाता है और कवक (माइकोबायोंट) जल एवं खनिज अवशोषित कर आश्रय देता है।',
    'In lichens, the algal component (phycobiont) prepares food by photosynthesis while the fungal component (mycobiont) provides shelter and absorbs water and minerals.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'पादप जगत के प्रभाग',
    'पादप जगत के किस वर्ग को "पादप जगत का उभयचर" (Amphibians of Plant Kingdom) कहा जाता है?',
    'Which division of the plant kingdom is called the "Amphibians of the Plant Kingdom"?',
    ['ब्रायोफायटा', 'Bryophyta'],
    [
      ['थैलोफायटा', 'Thallophyta'],
      ['टेरिडोफायटा', 'Pteridophyta'],
      ['जिम्नोस्पर्म', 'Gymnosperm'],
    ],
    'ब्रायोफायटा (जैसे मॉस व लिवरवर्ट) भूमि पर उगते हैं, परंतु लैंगिक जनन के समय निषेचन के लिए इन्हें जल की आवश्यकता होती है, इसलिए इन्हें पादप उभयचर कहते हैं।',
    'Bryophytes (such as mosses and liverworts) live in soil but depend on water for sexual reproduction/fertilization, hence they are called amphibians of the plant kingdom.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'संवहनी पादप',
    'निम्नलिखित में से किस पादप समूह में सर्वप्रथम संवहन ऊतक (जाइलम एवं फ्लोएम) विकसित हुए?',
    'In which plant group did vascular tissues (xylem and phloem) evolve for the first time?',
    ['टेरिडोफायटा', 'Pteridophyta'],
    [
      ['ब्रायोफायटा', 'Bryophyta'],
      ['थैलोफायटा', 'Thallophyta'],
      ['शैवाल', 'Algae'],
    ],
    'टेरिडोफायटा (जैसे फर्न) पहले स्थलीय पादप हैं जिनमें वास्तविक जड़, तना, पत्ती तथा संवहन ऊतक (जाइलम व फ्लोएम) पाए जाते हैं।',
    'Pteridophytes (such as ferns) are the first terrestrial plants to possess true roots, stems, leaves, and vascular tissues (xylem and phloem).',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'जिम्नोस्पर्म एवं एंजियोस्पर्म',
    'अनावृतबीजी (Gymnosperms) पौधों की मुख्य विशेषता क्या है?',
    'What is the characteristic feature of Gymnosperm plants?',
    ['नग्न बीज जिनका अंडाशय भित्ति से आवरण नहीं होता', 'Naked seeds not enclosed within an ovary wall'],
    [
      ['फल के अंदर बंद बीज', 'Seeds enclosed inside a fruit'],
      ['बीजाणुओं द्वारा जनन तथा बीजों का अभाव', 'Reproduction by spores and absence of seeds'],
      ['संवहन ऊतकों का पूर्ण अभाव', 'Complete absence of vascular tissues'],
    ],
    'अनावृतबीजी पौधों (जैसे पाइनस, साइकस) में अंडाशय नहीं होता, इसलिए निषेचन के बाद बनने वाले बीज नग्न रहते हैं और फल नहीं बनता।',
    'In gymnosperms (like Pinus and Cycas), ovaries are absent, so the seeds formed after fertilization remain naked without any fruit covering.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'जंतु संघ',
    'पोरिफेरा (Porifera) संघ के जंतुओं में जल संवहन के लिए शरीर में पाया जाने वाला विशेष तंत्र क्या कहलाता है?',
    'What is the specialized water transport system found in the body of phylum Porifera animals called?',
    ['नाल तंत्र', 'Canal system'],
    [
      ['जल संवहन तंत्र', 'Water vascular system'],
      ['रक्त परिसंचरण तंत्र', 'Blood vascular system'],
      ['ज्वाला कोशिका तंत्र', 'Flame cell system'],
    ],
    'पोरिफेरा (स्पंज) के शरीर में सूक्ष्म छिद्र (ऑस्टिया) होते हैं जिनसे जल नाल तंत्र (Canal system) में प्रवेश करता है और ऑस्कुलम से बाहर निकलता है।',
    'Poriferans (sponges) have minute pores (ostia) through which water enters the canal system and exits via the osculum, aiding nutrition and respiration.',
    'HARD'
  ),
  q(
    'जीवों का वर्गीकरण',
    'सीलेन्टरेटा',
    'हाइड्रा, जेलीफिश और प्रवाल (Coral) जंतु जगत के किस संघ के अंतर्गत आते हैं?',
    'Hydra, Jellyfish, and Corals belong to which phylum of the animal kingdom?',
    ['सीलेन्टरेटा (नाइडेरिया)', 'Coelenterata (Cnidaria)'],
    [
      ['पोरिफेरा', 'Porifera'],
      ['प्लैटीहेल्मिंथीज', 'Platyhelminthes'],
      ['मोलस्का', 'Mollusca'],
    ],
    'हाइड्रा, ऑरेलिया (जेलीफिश) और प्रवाल सीलेन्टरेटा संघ के सदस्य हैं, जिनमें दंश कोशिकाएँ (Cnidoblasts) पाई जाती हैं।',
    'Hydra, Aurelia (jellyfish), and corals belong to Phylum Coelenterata (Cnidaria), characterized by stinging cells called cnidoblasts.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'प्लैटीहेल्मिंथीज',
    'चपटे कृमियों (Platyhelminthes) में उत्सर्जन का कार्य किस विशिष्ट कोशिका द्वारा होता है?',
    'Excretion in flatworms (Platyhelminthes) is carried out by which specialized cells?',
    ['ज्वाला कोशिकाएँ', 'Flame cells'],
    [
      ['नेफ्रिडिया', 'Nephridia'],
      ['मैलपीघी नलिकाएँ', 'Malpighian tubules'],
      ['हरित ग्रंथियाँ', 'Green glands'],
    ],
    'फीताकृमि और प्लेनेरिया जैसे प्लैटीहेल्मिंथीज जंतुओं में परासरण नियमन तथा उत्सर्जन ज्वाला कोशिकाओं (Flame cells / Solenocytes) द्वारा होता है।',
    'In Platyhelminthes like tapeworm and Planaria, osmoregulation and excretion are performed by flame cells (solenocytes).',
    'HARD'
  ),
  q(
    'जीवों का वर्गीकरण',
    'एनेलिडा संघ',
    'केंचुआ और जोंक किस जंतु संघ के अंतर्गत आते हैं जिनमें वास्तविक खंडीय विखंडन (Metameric segmentation) पाया जाता है?',
    'Earthworms and leeches belong to which phylum exhibiting true metameric segmentation?',
    ['एनेलिडा', 'Annelida'],
    [
      ['एस्केल्मिंथीज', 'Aschelminthes'],
      ['आर्थ्रोपोडा', 'Arthropoda'],
      ['मोलस्का', 'Mollusca'],
    ],
    'एनेलिडा संघ के जंतुओं (केंचुआ, नेरीस, जोंक) का शरीर वलय के रूप में खंडों में बँटा होता है और इनमें नेफ्रिडिया द्वारा उत्सर्जन होता है।',
    'Animals of Phylum Annelida (earthworm, Nereis, leech) have metamerically segmented ring-like bodies and excrete via nephridia.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'आर्थ्रोपोडा संघ',
    'जंतु जगत का सबसे बड़ा संघ कौन-सा है जिसमें संधिपाद (Jointed appendages) पाए जाते हैं?',
    'Which is the largest phylum in the animal kingdom characterized by jointed appendages?',
    ['आर्थ्रोपोडा', 'Arthropoda'],
    [
      ['मोलस्का', 'Mollusca'],
      ['कॉर्डेटा', 'Chordata'],
      ['एनेलिडा', 'Annelida'],
    ],
    'आर्थ्रोपोडा जंतु जगत का सबसे बड़ा संघ है जिसमें सभी कीट, मकड़ियाँ, झींगा और केकड़े आते हैं। इनकी देह काइटिन के बाह्यकंकाल से ढकी होती है।',
    'Arthropoda is the largest phylum in the animal kingdom, including insects, spiders, prawns, and crabs, covered by a chitinous exoskeleton.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'मोलस्का संघ',
    'ऑक्टोपस, घोंघा (Pila) और सीप जंतु जगत के किस संघ से संबंधित हैं?',
    'Octopus, snail (Pila), and pearl oyster belong to which phylum of the animal kingdom?',
    ['मोलस्का', 'Mollusca'],
    [
      ['इकाइनोडर्मेटा', 'Echinodermata'],
      ['आर्थ्रोपोडा', 'Arthropoda'],
      ['एनेलिडा', 'Annelida'],
    ],
    'मोलस्का जंतु जगत का दूसरा सबसे बड़ा संघ है। इनका शरीर कोमल होता है जो प्रायः कैल्शियम कार्बोनेट के कवच और मेंटल (Mantle) से घिरा होता है।',
    'Mollusca is the second-largest animal phylum. They have soft unsegmented bodies usually enclosed by a mantle and calcareous shell.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'इकाइनोडर्मेटा संघ',
    'तारा मछली (Starfish) वास्तव में किस संघ का समुद्री जंतु है?',
    'Starfish actually belongs to which marine invertebrate phylum?',
    ['इकाइनोडर्मेटा', 'Echinodermata'],
    [
      ['मत्स्य (पिसीज)', 'Pisces'],
      ['मोलस्का', 'Mollusca'],
      ['सीलेन्टरेटा', 'Coelenterata'],
    ],
    'तारा मछली वास्तविक मछली नहीं है, बल्कि यह इकाइनोडर्मेटा संघ का कंटकी-त्वचा वाला जंतु है जिसमें जल संवहन तंत्र (Water vascular system) होता है।',
    'Starfish is not a true fish; it is a spiny-skinned marine animal of Phylum Echinodermata possessing a unique water vascular system.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'कॉर्डेटा एवं कशेरुकी',
    'निम्नलिखित में से कौन-सी एक वास्तविक मछली (True Fish) है?',
    'Which of the following is a true fish?',
    ['समुद्री घोड़ा (हिप्पोकैम्पस)', 'Sea horse (Hippocampus)'],
    [
      ['जेलीफिश', 'Jellyfish'],
      ['सिल्वरफिश', 'Silverfish'],
      ['कटलफिश', 'Cuttlefish'],
    ],
    'समुद्री घोड़ा (हिप्पोकैम्पस) वर्ग ऑस्टिक्थीज़ की वास्तविक अस्थिल मछली है, जबकि जेलीफिश (सीलेन्टरेटा), सिल्वरफिश (आर्थ्रोपोडा) और कटलफिश (मोलस्का) मछलियाँ नहीं हैं।',
    'Sea horse (Hippocampus) is a true bony fish (Osteichthyes), whereas jellyfish (Cnidaria), silverfish (Arthropoda), and cuttlefish (Mollusca) are not fishes.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'हृदय के कक्ष',
    'उभयचर (Amphibia) तथा अधिकांश सरीसृपों (Reptilia) के हृदय में कितने कक्ष होते हैं?',
    'How many chambers are present in the heart of amphibians and most reptiles?',
    ['तीन कक्ष', 'Three chambers'],
    [
      ['दो कक्ष', 'Two chambers'],
      ['चार कक्ष', 'Four chambers'],
      ['एक कक्ष', 'One chamber'],
    ],
    'मछलियों में 2 कक्षीय, उभयचर व सरीसृपों में 3 कक्षीय (मगरमच्छ अपवाद है जिसमें 4 कक्ष होते हैं), तथा पक्षियों व स्तनधारियों में 4 कक्षीय हृदय होता है।',
    'Fishes have a 2-chambered heart, amphibians and most reptiles have a 3-chambered heart (crocodile is an exception with 4), and birds/mammals have 4 chambers.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'स्तनधारी वर्ग',
    'अंडे देने वाले स्तनधारी (Oviparous Mammal) का सही उदाहरण कौन-सा है?',
    'Which of the following is a correct example of an egg-laying mammal?',
    ['डक-बिल्ड प्लैटिपस', 'Duck-billed Platypus'],
    [
      ['कंगारू', 'Kangaroo'],
      ['चमगादड़', 'Bat'],
      ['व्हेल', 'Whale'],
    ],
    'प्लैटिपस (Ornithorhynchus) और एकिडना प्रोटोथीरिया वर्ग के आदिम स्तनधारी हैं जो अंडे देते हैं और बच्चों को दुग्धपान कराते हैं।',
    'Platypus (Ornithorhynchus) and Echidna are primitive egg-laying mammals (monotremes) that also possess mammary glands.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'उड़ने वाला स्तनधारी',
    'चमगादड़ किस वर्ग का जंतु है जो पराश्रव्य तरंगों (Ultrasonic waves) द्वारा रात्रि में मार्ग खोजता है?',
    'Bat belongs to which class of animals and navigates at night using ultrasonic waves?',
    ['स्तनधारी (मैमेलिया)', 'Mammalia'],
    [
      ['पक्षी (एवीज)', 'Aves'],
      ['सरीसृप (रेप्टीलिया)', 'Reptilia'],
      ['उभयचर (एम्फीबिया)', 'Amphibia'],
    ],
    'चमगादड़ एक उड़ने वाला स्तनधारी है जिसके शरीर पर बाल और बाह्य कर्ण होते हैं तथा यह प्रतिध्वनि निर्धारण (Echolocation) से मार्ग खोजता है।',
    'Bat is a flying mammal possessing body hair, external pinnae, and mammary glands, navigating via echolocation using ultrasonic waves.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'सरीसृप वर्ग',
    'किस सरीसृप के हृदय में अपवादस्वरूप चार पूर्ण कक्ष पाए जाते हैं?',
    'Which reptile exceptionally possesses a completely four-chambered heart?',
    ['मगरमच्छ', 'Crocodile'],
    [
      ['कछुआ', 'Turtle'],
      ['गिरगिट', 'Chameleon'],
      ['कोबरा', 'Cobra'],
    ],
    'अधिकांश सरीसृपों में तीन कक्षीय हृदय होता है, परंतु मगरमच्छ और घड़ियाल में चार कक्षीय हृदय पाया जाता है।',
    'Unlike most reptiles that have a three-chambered heart, crocodiles and alligators possess a completely four-chambered heart.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'पक्षी वर्ग',
    'पक्षियों की हड्डियों की मुख्य विशेषता क्या है जो उन्हें उड़ने में सहायता करती है?',
    'What is the key feature of birds’ bones that aids them in flight?',
    ['हल्की एवं खोखली (वातिल) अस्थियाँ', 'Light and hollow (pneumatic) bones'],
    [
      ['अस्थि मज्जा से भरी ठोस अस्थियाँ', 'Solid bones filled with dense marrow'],
      ['पूर्णतः उपास्थि से बनी अस्थियाँ', 'Bones made entirely of cartilage'],
      ['काइटिन से बनी बाह्य अस्थियाँ', 'External bones made of chitin'],
    ],
    'पक्षियों की अस्थियाँ खोखली व वायु से भरी (Pneumatic) होती हैं जिससे शरीर का भार कम रहता है और उड़ने में आसानी होती है।',
    'Birds have pneumatic (hollow, air-filled) bones that significantly reduce body weight and facilitate flight.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'विषाणु (Virus)',
    'विषाणु (Virus) को सजीव और निर्जीव के बीच की कड़ी क्यों माना जाता है?',
    'Why is a virus considered a connecting link between living and non-living things?',
    ['क्योंकि यह पोषी कोशिका के बाहर निष्क्रिय क्रिस्टल जैसा रहता है तथा अंदर गुणन करता है', 'Because it remains inert outside a host cell like a crystal and multiplies inside a host'],
    [
      ['क्योंकि इसमें कोशिका भित्ति और माइटोकॉन्ड्रिया दोनों होते हैं', 'Because it has both a cell wall and mitochondria'],
      ['क्योंकि यह केवल प्रकाश संश्लेषण द्वारा भोजन बनाता है', 'Because it makes food solely by photosynthesis'],
      ['क्योंकि इसमें राइबोसोम 80S प्रकार के होते हैं', 'Because it contains 80S type ribosomes'],
    ],
    'विषाणु अकोशिकीय होते हैं। पोषी के बाहर ये निर्जीव क्रिस्टल की तरह रहते हैं, पर सजीव कोशिका में प्रवेश करते ही उसकी मशीनरी का उपयोग कर गुणन करने लगते हैं।',
    'Viruses are acellular. Outside a living host they remain inert like crystals, but upon entering a host cell they hijack its machinery to replicate.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'साइनोबैक्टीरिया',
    'नील-हरित शैवाल (Cyanobacteria) मुख्य रूप से किस जगत से संबंधित हैं?',
    'Blue-green algae (Cyanobacteria) belong primarily to which kingdom?',
    ['मोनेरा', 'Monera'],
    [
      ['पादप (प्लांटी)', 'Plantae'],
      ['प्रोटिस्टा', 'Protista'],
      ['कवक', 'Fungi'],
    ],
    'नील-हरित शैवाल (जैसे नॉस्टॉक, एनाबीना) प्रोकैरियोटिक प्रकाश-संश्लेषी जीवाणु हैं, अतः ये मोनेरा जगत के अंतर्गत आते हैं।',
    'Blue-green algae (such as Nostoc and Anabaena) are prokaryotic photosynthetic bacteria, hence classified under Kingdom Monera.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'वैज्ञानिक नाम',
    'मनुष्य और आम के क्रमशः सही वैज्ञानिक नाम कौन-से हैं?',
    'Which are the correct scientific names of Human and Mango respectively?',
    ['होमो सेपियन्स और मैंगीफेरा इंडिका', 'Homo sapiens and Mangifera indica'],
    [
      ['राना टिग्रिना और ओराइजा सटाइवा', 'Rana tigrina and Oryza sativa'],
      ['पैंथेरा लियो और ट्रिटिकम एस्टिवम', 'Panthera leo and Triticum aestivum'],
      ['होमो इरेक्टस और पाइसम सटाइवम', 'Homo erectus and Pisum sativum'],
    ],
    'मनुष्य का वैज्ञानिक नाम Homo sapiens तथा आम का Mangifera indica है। राना टिग्रिना मेंढक का और ओराइजा सटाइवा धान का वैज्ञानिक नाम है।',
    'The scientific name of human is Homo sapiens and mango is Mangifera indica. Rana tigrina is frog and Oryza sativa is rice.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'कवक एवं पादप',
    'ईस्ट (खमीर) किस प्रकार का जीव है जिसका उपयोग बेकरी और किण्वन उद्योग में होता है?',
    'Yeast, used in baking and fermentation industries, is what type of organism?',
    ['एककोशिकीय कवक', 'Unicellular fungus'],
    [
      ['एककोशिकीय शैवाल', 'Unicellular alga'],
      ['प्रोकैरियोटिक जीवाणु', 'Prokaryotic bacterium'],
      ['एककोशिकीय प्रोटोजोआ', 'Unicellular protozoan'],
    ],
    'ईस्ट (Saccharomyces cerevisiae) एक अपवादस्वरूप एककोशिकीय कवक है जो अवायवीय श्वसन द्वारा शर्करा को एथेनॉल और कार्बन डाइऑक्साइड में बदलता है।',
    'Yeast (Saccharomyces cerevisiae) is an exceptional unicellular fungus that converts sugar into ethanol and carbon dioxide through fermentation.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'आर्कियोप्टेरिक्स',
    'जीवाश्म पक्षी "आर्कियोप्टेरिक्स" किन दो कशेरुकी वर्गों के बीच की संयोजक कड़ी माना जाता है?',
    'The fossil "Archaeopteryx" is regarded as a connecting link between which two vertebrate classes?',
    ['सरीसृप और पक्षी', 'Reptiles and Birds'],
    [
      ['मत्स्य और उभयचर', 'Fishes and Amphibians'],
      ['उभयचर और सरीसृप', 'Amphibians and Reptiles'],
      ['पक्षी और स्तनधारी', 'Birds and Mammals'],
    ],
    'आर्कियोप्टेरिक्स में सरीसृपों की भाँति जबड़े में दाँत व लंबी पूँछ थी तथा पक्षियों की भाँति पंख और चोंच थी, अतः यह दोनों के बीच की कड़ी है।',
    'Archaeopteryx possessed reptilian features like teeth and a long tail along with avian features like feathers and beak, linking reptiles and birds.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'टैक्सोनॉमी के पद',
    'वर्गीकरण (Taxonomy) की आधारभूत और सबसे छोटी इकाई क्या है?',
    'What is the basic and smallest unit of biological classification (Taxonomy)?',
    ['जाति (Species)', 'Species'],
    [
      ['वंश (Genus)', 'Genus'],
      ['कुल (Family)', 'Family'],
      ['गण (Order)', 'Order'],
    ],
    'वर्गीकरण का पदानुक्रम जगत से प्रारंभ होकर जाति (Species) पर समाप्त होता है। समान लक्षणों वाले जीवों का समूह जो आपस में प्रजनन कर सके, जाति कहलाता है।',
    'The taxonomic hierarchy starts at Kingdom and ends at Species. Species is the basic unit comprising organisms capable of interbreeding.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'ब्रायोफायटा उदाहरण',
    'निम्नलिखित में से किस ब्रायोफायटा का उपयोग इसके उच्च जल-अवशोषण गुण के कारण जीवित पौधों के परिवहन में पैकिंग सामग्री के रूप में किया जाता है?',
    'Which bryophyte is used as packing material for transporting living plants due to its high water-holding capacity?',
    ['स्फैग्नम (पीट मॉस)', 'Sphagnum (Peat moss)'],
    [
      ['रक्सिया', 'Riccia'],
      ['मार्केन्शिया', 'Marchantia'],
      ['फ्यूनेरिया', 'Funaria'],
    ],
    'स्फैग्नम (पीठ मॉस) अपने भार से कई गुना अधिक जल अवशोषित कर सकता है, इसलिए नर्सरी और पौधों के परिवहन में इसका उपयोग होता है।',
    'Sphagnum (peat moss) can hold water many times its own weight, making it ideal as a packing material for trans-shipment of living plants.',
    'HARD'
  ),
  q(
    'जीवों का वर्गीकरण',
    'केंचुआ और इकोसिस्टम',
    'केंचुआ को "किसान का मित्र" कहा जाता है; इसमें किस प्रकार का श्वसन होता है?',
    'Earthworm is called the "farmer’s friend"; how does respiration occur in it?',
    ['नम त्वचा द्वारा', 'Through moist skin'],
    [
      ['गलफड़ों द्वारा', 'Through gills'],
      ['फेफड़ों द्वारा', 'Through lungs'],
      ['श्वासनलियों (ट्रैकिया) द्वारा', 'Through tracheae'],
    ],
    'केंचुए में विशिष्ट श्वसन अंग नहीं होते; यह अपनी नम और पतली उपचर्म (त्वचा) द्वारा गैसों का विनिमय करता है।',
    'Earthworms lack specialized respiratory organs and exchange gases directly through their moist cuticle/skin (cutaneous respiration).',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'आर्थ्रोपोडा श्वसन',
    'कीटों (जैसे तिलचट्टा, टिड्डा) में श्वसन किस अंग द्वारा होता है?',
    'Respiration in insects (such as cockroaches and grasshoppers) takes place through which organ?',
    ['श्वासनली तंत्र (ट्रैकिया)', 'Tracheal system'],
    [
      ['बुक लंग्स', 'Book lungs'],
      ['क्लोम (गलफड़े)', 'Gills'],
      ['फेफड़े', 'Lungs'],
    ],
    'कीटों में शरीर के पार्श्व में स्थित श्वास रंध्रों (Spiracles) से जुड़ी श्वासनलियों (Tracheae) के जाल द्वारा सीधे ऊतकों तक ऑक्सीजन पहुँचती है।',
    'Insects respire via a network of air tubes called the tracheal system that opens externally through spiracles.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'द्विबीजपत्री व एकबीजपत्री',
    'एकबीजपत्री (Monocot) पौधों की पत्तियों में किस प्रकार का शिरा-विन्यास (Venation) पाया जाता है?',
    'What type of venation is typically found in the leaves of monocotyledonous plants?',
    ['समानांतर शिरा-विन्यास', 'Parallel venation'],
    [
      ['जालिकावत शिरा-विन्यास', 'Reticulate venation'],
      ['कंटकीय विन्यास', 'Spinous venation'],
      ['वलयाकार विन्यास', 'Circular venation'],
    ],
    'एकबीजपत्री पौधों (जैसे गेहूँ, धान, मक्का, केला) की पत्तियों में समानांतर शिरा-विन्यास तथा रेशेदार (झकड़ा) जड़ें पाई जाती हैं।',
    'Monocot plants (like wheat, rice, maize, banana) typically exhibit parallel leaf venation and fibrous root systems.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'द्विबीजपत्री पादप',
    'निम्नलिखित में से कौन-सा पौधा एक द्विबीजपत्री (Dicot) पौधे का उदाहरण है?',
    'Which of the following plants is an example of a Dicotyledon (Dicot)?',
    ['चना', 'Gram (Chickpea)'],
    [
      ['गेहूँ', 'Wheat'],
      ['मक्का', 'Maize'],
      ['बाँस', 'Bamboo'],
    ],
    'चना, मटर, आम और सरसों द्विबीजपत्री पौधे हैं जिनके बीज में दो बीजपत्र और जड़ों में मूसला जड़ तंत्र होता है; गेहूँ, मक्का व बाँस एकबीजपत्री हैं।',
    'Gram, pea, mango, and mustard are dicots having two cotyledons and a taproot system, whereas wheat, maize, and bamboo are monocots.',
    'EASY'
  ),
  q(
    'जीवों का वर्गीकरण',
    'जीवाणु के आकार',
    'दही जमाने वाला "लैक्टोबैसिलस" जीवाणु आकार के आधार पर किस श्रेणी में आता है?',
    'Based on shape, the curd-forming bacterium "Lactobacillus" belongs to which category?',
    ['छड़ाकार (बैसिलस)', 'Rod-shaped (Bacillus)'],
    [
      ['गोलाकार (कोकस)', 'Spherical (Coccus)'],
      ['सर्पिलाकार (स्पाइरिलम)', 'Spiral (Spirillum)'],
      ['कॉमा आकार (विब्रियो)', 'Comma-shaped (Vibrio)'],
    ],
    'बैसिलस आकार के जीवाणु छड़ के समान होते हैं, जैसे लैक्टोबैसिलस। कोकस गोलाकार, विब्रियो कॉमा आकार तथा स्पाइरिलम सर्पिलाकार होते हैं।',
    'Bacillus bacteria are rod-shaped (e.g., Lactobacillus). Coccus are spherical, Vibrio are comma-shaped, and Spirillum are spiral.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका की खोज',
    'वर्ष 1665 में कॉर्क के पतले टुकड़े में मृत कोशिकाओं की सर्वप्रथम खोज किसने की थी?',
    'Who first discovered dead cells in a thin slice of cork in the year 1665?',
    ['रॉबर्ट हुक', 'Robert Hooke'],
    [
      ['एंटनी वॉन ल्यूवेनहॉक', 'Antonie van Leeuwenhoek'],
      ['रॉबर्ट ब्राउन', 'Robert Brown'],
      ['श्लाइडेन एवं श्वान', 'Schleiden and Schwann'],
    ],
    'रॉबर्ट हुक ने 1665 में स्वनिर्मित सूक्ष्मदर्शी से कॉर्क की मृत कोष्ठिकाओं को देखा और इन्हें "सेल" (Cell) नाम दिया; इसका वर्णन उन्होंने "माइक्रोग्राफिया" पुस्तक में किया।',
    'Robert Hooke observed dead cork compartments under his microscope in 1665, named them "cells", and published his findings in "Micrographia".',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'जीवित कोशिका की खोज',
    'सर्वप्रथम जीवित कोशिका (जीवाणु व प्रोटोजोआ) को देखने वाले वैज्ञानिक कौन थे?',
    'Who was the first scientist to observe a living cell (bacteria and protozoa)?',
    ['एंटनी वॉन ल्यूवेनहॉक', 'Antonie van Leeuwenhoek'],
    [
      ['रॉबर्ट हुक', 'Robert Hooke'],
      ['रुडोल्फ विर्चो', 'Rudolf Virchow'],
      ['पुरकिंजे', 'Purkinje'],
    ],
    'एंटनी वॉन ल्यूवेनहॉक ने 1674 में उन्नत सूक्ष्मदर्शी की सहायता से तालाब के जल में पहली बार जीवित कोशिकाओं का अवलोकन किया।',
    'Antonie van Leeuwenhoek first observed living cells in pond water in 1674 using an improved microscope.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका सिद्धांत',
    '"ओम्निस सेलुला-ए-सेलुला" (सभी नई कोशिकाएँ पूर्ववर्ती कोशिकाओं से बनती हैं) कथन किसने दिया था?',
    'Who gave the statement "Omnis cellula-e-cellula" (all new cells arise from pre-existing cells)?',
    ['रुडोल्फ विर्चो', 'Rudolf Virchow'],
    [
      ['थियोडोर श्वान', 'Theodor Schwann'],
      ['मैथियास श्लाइडेन', 'Matthias Schleiden'],
      ['रॉबर्ट ब्राउन', 'Robert Brown'],
    ],
    'रुडोल्फ विर्चो ने 1855 में श्लाइडेन और श्वान के कोशिका सिद्धांत को संशोधित करते हुए स्पष्ट किया कि नई कोशिकाओं का निर्माण पूर्व-स्थित कोशिकाओं के विभाजन से होता है।',
    'In 1855, Rudolf Virchow modified Schleiden and Schwann’s cell theory by stating that new cells arise from the division of pre-existing cells.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'केंद्रक की खोज',
    'कोशिका में केंद्रक (Nucleus) की खोज वर्ष 1831 में किसने की थी?',
    'Who discovered the nucleus inside the cell in 1831?',
    ['रॉबर्ट ब्राउन', 'Robert Brown'],
    [
      ['रॉबर्ट हुक', 'Robert Hooke'],
      ['फ्लेमिंग', 'Flemming'],
      ['कैमिलो गॉल्जी', 'Camillo Golgi'],
    ],
    'रॉबर्ट ब्राउन ने 1831 में आर्किड की जड़ की कोशिकाओं में केंद्रक की खोज की थी। केंद्रक को कोशिका का नियंत्रण कक्ष कहा जाता है।',
    'Robert Brown discovered the nucleus in orchid root cells in 1831. The nucleus serves as the control center of the cell.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'जीवद्रव्य',
    'कोशिका के अंदर उपस्थित संपूर्ण जीवित पदार्थ को "जीवद्रव्य (Protoplasm)" नाम किसने दिया?',
    'Who coined the term "Protoplasm" for the living substance inside a cell?',
    ['जे. ई. पुरकिंजे', 'J. E. Purkinje'],
    [
      ['हक्सले', 'Huxley'],
      ['डुजार्डिन', 'Dujardin'],
      ['श्लाइडेन', 'Schleiden'],
    ],
    'जे. ई. पुरकिंजे ने 1839 में कोशिका के तरल जीवित पदार्थ को "प्रोटोप्लाज्म" (जीवद्रव्य) नाम दिया, जिसे हक्सले ने "जीवन का भौतिक आधार" कहा।',
    'J. E. Purkinje coined the term "Protoplasm" in 1839, which T. H. Huxley later described as the "physical basis of life".',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका का आकार',
    'निम्नलिखित में से मानव शरीर की सबसे लंबी कोशिका कौन-सी है?',
    'Which of the following is the longest cell in the human body?',
    ['तंत्रिका कोशिका (न्यूरॉन)', 'Nerve cell (Neuron)'],
    [
      ['लाल रक्त कोशिका (RBC)', 'Red blood cell (RBC)'],
      ['अस्थि कोशिका', 'Osteocyte'],
      ['यकृत कोशिका', 'Hepatocyte'],
    ],
    'मानव शरीर की सबसे लंबी कोशिका तंत्रिका कोशिका (न्यूरॉन) है जिसकी लंबाई 1 मीटर तक हो सकती है। सबसे बड़ी एकल कोशिका शुतुरमुर्ग का अंडा है।',
    'The nerve cell (neuron) is the longest cell in the human body (up to 1 meter). The ostrich egg is the largest known single cell.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'प्रोकैरियोटिक व यूकैरियोटिक',
    'प्रोकैरियोटिक और यूकैरियोटिक कोशिकाओं के बीच मुख्य अंतर क्या है?',
    'What is the primary difference between prokaryotic and eukaryotic cells?',
    ['प्रोकैरियोटिक कोशिकाओं में झिल्ली-बद्ध केंद्रक और कोशिकांगों का अभाव होता है', 'Prokaryotic cells lack a membrane-bound nucleus and membrane-bound organelles'],
    [
      ['प्रोकैरियोटिक कोशिकाओं में डीएनए नहीं होता', 'Prokaryotic cells do not contain DNA'],
      ['यूकैरियोटिक कोशिकाओं में राइबोसोम नहीं होते', 'Eukaryotic cells lack ribosomes'],
      ['प्रोकैरियोटिक कोशिकाएँ सदैव बहुकोशिकीय होती हैं', 'Prokaryotic cells are always multicellular'],
    ],
    'प्रोकैरियोटिक कोशिकाओं (जैसे जीवाणु) में केंद्रक झिल्ली व झिल्लीयुक्त कोशिकांग (माइटोकॉन्ड्रिया, गॉल्जीकाय आदि) नहीं होते, केवल 70S राइबोसोम और न्यूक्लिऑइड होता है।',
    'Prokaryotic cells (e.g., bacteria) lack a nuclear membrane and membrane-bound organelles like mitochondria, having only a nucleoid and 70S ribosomes.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका झिल्ली',
    'प्लाज्मा झिल्ली (कोशिका झिल्ली) का सर्वमान्य "तरल मोज़ेक मॉडल" (Fluid Mosaic Model) किसने प्रस्तुत किया था?',
    'Who proposed the widely accepted "Fluid Mosaic Model" of the plasma membrane?',
    ['सिंगर एवं निकोलसन', 'Singer and Nicolson'],
    [
      ['रॉबर्टसन', 'Robertson'],
      ['डेनिएली एवं डेवसन', 'Danielli and Davson'],
      ['वाटसन एवं क्रिक', 'Watson and Crick'],
    ],
    'सिंगर और निकोलसन (1972) के अनुसार कोशिका झिल्ली फॉस्फोलिपिड की द्वि-परत (Bilayer) की बनी होती है जिसमें प्रोटीन मोज़ेक के रूप में धँसे रहते हैं।',
    'According to Singer and Nicolson (1972), the plasma membrane consists of a phospholipid bilayer with proteins embedded in a fluid mosaic arrangement.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका भित्ति',
    'पादप कोशिका भित्ति मुख्य रूप से किस पदार्थ की बनी होती है?',
    'The plant cell wall is primarily made of which substance?',
    ['सेल्यूलोज', 'Cellulose'],
    [
      ['काइटिन', 'Chitin'],
      ['ग्लाइकोजन', 'Glycogen'],
      ['कोलेजन', 'Collagen'],
    ],
    'पादप कोशिका भित्ति सेल्यूलोज की बनी एक दृढ़ और पारगम्य परत होती है जो पादप कोशिका को निश्चित आकार और यांत्रिक सुरक्षा प्रदान करती है।',
    'The plant cell wall is a rigid, permeable layer made mainly of cellulose that provides definite shape and mechanical protection.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'माइटोकॉन्ड्रिया',
    'किस कोशिकांग को "कोशिका का ऊर्जा गृह" (Powerhouse of the cell) कहा जाता है?',
    'Which cell organelle is known as the "Powerhouse of the cell"?',
    ['माइटोकॉन्ड्रिया', 'Mitochondria'],
    [
      ['गॉल्जीकाय', 'Golgi apparatus'],
      ['लाइसोसोम', 'Lysosome'],
      ['अंतःप्रद्रव्यी जालिका', 'Endoplasmic reticulum'],
    ],
    'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ऊर्जा का उत्पादन ATP (एडीनोसिन ट्राइफॉस्फेट) के रूप में होता है, इसलिए इसे कोशिका का ऊर्जा गृह कहते हैं।',
    'Mitochondria generate cellular energy in the form of ATP (Adenosine Triphosphate) through aerobic respiration, hence called the powerhouse of the cell.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'माइटोकॉन्ड्रिया की संरचना',
    'माइटोकॉन्ड्रिया की आंतरिक झिल्ली के अंगुलीनुमा वलन (Infoldings) क्या कहलाते हैं?',
    'What are the finger-like infoldings of the inner membrane of mitochondria called?',
    ['क्रिस्टी (Cristae)', 'Cristae'],
    [
      ['सिस्टर्नी (Cisternae)', 'Cisternae'],
      ['थायलाकोइड (Thylakoid)', 'Thylakoid'],
      ['ग्राना (Grana)', 'Grana'],
    ],
    'माइटोकॉन्ड्रिया की आंतरिक झिल्ली में क्रिस्टी नामक वलन होते हैं जो ATP संश्लेषण के लिए सतह क्षेत्र को बढ़ाते हैं।',
    'The inner membrane of mitochondria forms infoldings called cristae, which increase the surface area for ATP-generating reactions.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'अर्ध-स्वायत्त कोशिकांग',
    'केंद्रक के अतिरिक्त किन दो कोशिकांगों में अपना स्वयं का डीएनए (DNA) और राइबोसोम पाया जाता है?',
    'Apart from the nucleus, which two organelles possess their own DNA and ribosomes?',
    ['माइटोकॉन्ड्रिया और हरितलवक (क्लोरोप्लास्ट)', 'Mitochondria and Chloroplast'],
    [
      ['गॉल्जीकाय और लाइसोसोम', 'Golgi body and Lysosome'],
      ['राइबोसोम और तारककाय', 'Ribosome and Centrosome'],
      ['अंतःप्रद्रव्यी जालिका और रसधानी', 'Endoplasmic reticulum and Vacuole'],
    ],
    'माइटोकॉन्ड्रिया और क्लोरोप्लास्ट अर्ध-स्वायत्त कोशिकांग हैं क्योंकि इनमें अपना वृत्ताकार डीएनए और 70S राइबोसोम होता है।',
    'Mitochondria and chloroplasts are semi-autonomous organelles because they contain their own circular DNA and 70S ribosomes.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'लाइसोसोम',
    'लाइसोसोम को "कोशिका की आत्मघाती थैली" (Suicidal bag of the cell) क्यों कहा जाता है?',
    'Why are lysosomes called the "Suicidal bags of the cell"?',
    ['क्योंकि कोशिका क्षतिग्रस्त होने पर इसके जल-अपघटनी एंजाइम स्वयं की कोशिका को पचा लेते हैं', 'Because when a cell is damaged, its hydrolytic enzymes digest the cell itself'],
    [
      ['क्योंकि यह प्रोटीन का संश्लेषण बंद कर देता है', 'Because it stops protein synthesis'],
      ['क्योंकि यह कोशिका विभाजन को रोकता है', 'Because it halts cell division'],
      ['क्योंकि यह ATP का निर्माण नष्ट कर देता है', 'Because it destroys ATP production'],
    ],
    'डी दुवे द्वारा खोजे गए लाइसोसोम में शक्तिशाली हाइड्रोलाइटिक (जल-अपघटनी) एंजाइम होते हैं, जो कोशिका के क्षतिग्रस्त होने पर फटकर उसे नष्ट कर देते हैं।',
    'Discovered by Christian de Duve, lysosomes contain potent hydrolytic enzymes that burst and digest the damaged cell itself.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'राइबोसोम',
    'राइबोसोम को "कोशिका की प्रोटीन फैक्ट्री" कहा जाता है; यूकैरियोटिक कोशिकाद्रव्य में किस प्रकार का राइबोसोम पाया जाता है?',
    'Ribosomes are called "protein factories of the cell"; which type is found in the eukaryotic cytoplasm?',
    ['80S राइबोसोम', '80S ribosome'],
    [
      ['70S राइबोसोम', '70S ribosome'],
      ['50S राइबोसोम', '50S ribosome'],
      ['30S राइबोसोम', '30S ribosome'],
    ],
    'यूकैरियोटिक कोशिका के कोशिकाद्रव्य में 80S (60S + 40S उपइकाई) राइबोसोम होते हैं, जबकि प्रोकैरियोट्स, माइटोकॉन्ड्रिया व क्लोरोप्लास्ट में 70S राइबोसोम होते हैं।',
    'Eukaryotic cytoplasm contains 80S ribosomes (60S + 40S subunits), whereas prokaryotes, mitochondria, and chloroplasts have 70S ribosomes.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'अंतःप्रद्रव्यी जालिका',
    'चिकनी अंतःप्रद्रव्यी जालिका (SER) का मुख्य कार्य क्या है?',
    'What is the primary function of the Smooth Endoplasmic Reticulum (SER)?',
    ['लिपिड (वसा) संश्लेषण तथा विषहरण (Detoxification)', 'Lipid synthesis and detoxification'],
    [
      ['राइबोसोम द्वारा प्रोटीन संश्लेषण', 'Protein synthesis via attached ribosomes'],
      ['प्रकाश संश्लेषण द्वारा ग्लूकोज निर्माण', 'Glucose production via photosynthesis'],
      ['जल-अपघटनी एंजाइमों का स्राव', 'Secretion of hydrolytic enzymes'],
    ],
    'खुरदुरी अंतःप्रद्रव्यी जालिका (RER) पर राइबोसोम होने से वह प्रोटीन बनाती है, जबकि चिकनी (SER) लिपिड/स्टेरॉयड संश्लेषण व यकृत में विषहरण करती है।',
    'Rough ER (with ribosomes) synthesizes proteins, while Smooth ER synthesizes lipids/steroids and performs detoxification in liver cells.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'गॉल्जीकाय',
    'कोशिका में पदार्थों की पैकेजिंग, रूपांतरण तथा लाइसोसोम के निर्माण में कौन-सा कोशिकांग मुख्य भूमिका निभाता है?',
    'Which organelle plays the major role in packaging, modification of materials, and formation of lysosomes?',
    ['गॉल्जीकाय (Golgi apparatus)', 'Golgi apparatus'],
    [
      ['तारककाय (Centrosome)', 'Centrosome'],
      ['परऑक्सीसोम', 'Peroxisome'],
      ['केंद्रिका (Nucleolus)', 'Nucleolus'],
    ],
    'कैमिलो गॉल्जी द्वारा खोजा गया गॉल्जीकाय "कोशिका का यातायात प्रबंधक" कहलाता है; यह प्रोटीन की पैकेजिंग, स्राव और लाइसोसोम निर्माण करता है।',
    'Discovered by Camillo Golgi, the Golgi apparatus packages and modifies cellular products and gives rise to lysosomes.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'लवक (Plastids)',
    'टमाटर के पकने पर उसका हरा रंग लाल किस परिवर्तन के कारण हो जाता है?',
    'When a tomato ripens, its green colour turns red due to which conversion?',
    ['हरितलवक (क्लोरोप्लास्ट) का वर्णीलवक (क्रोमोप्लास्ट) में रूपांतरण', 'Conversion of chloroplast into chromoplast'],
    [
      ['अवर्णीलवक का हरितलवक में रूपांतरण', 'Conversion of leucoplast into chloroplast'],
      ['लाइसोसोम का विघटन', 'Disintegration of lysosomes'],
      ['राइबोसोम का संश्लेषण', 'Synthesis of ribosomes'],
    ],
    'कच्चे टमाटर में हरितलवक (क्लोरोफिल) होता है, जो पकने पर लाइकोपीन वर्णक युक्त वर्णीलवक (क्रोमोप्लास्ट) में बदल जाता है।',
    'Unripe green tomatoes contain chloroplasts, which transform into chromoplasts rich in lycopene pigment upon ripening.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'अवर्णीलवक',
    'पौधों की जड़ों और भूमिगत तनों में भोजन (स्टार्च, वसा, प्रोटीन) के संग्रहण के लिए कौन-सा लवक पाया जाता है?',
    'Which plastid is found in plant roots and underground stems for storing food (starch, oils, proteins)?',
    ['अवर्णीलवक (ल्यूकोप्लास्ट)', 'Leucoplast'],
    [
      ['हरितलवक (क्लोरोप्लास्ट)', 'Chloroplast'],
      ['वर्णीलवक (क्रोमोप्लास्ट)', 'Chromoplast'],
      ['गॉल्जीकाय', 'Golgi body'],
    ],
    'ल्यूकोप्लास्ट रंगहीन लवक हैं जो एमाइलोप्लास्ट (स्टार्च), एल्यूरोप्लास्ट (प्रोटीन) तथा इलायोप्लास्ट (वसा) के रूप में भोजन संचय करते हैं।',
    'Leucoplasts are colourless plastids specialized for storage: amyloplasts (starch), aleuroplasts (proteins), and elaioplasts (oils/fats).',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'पादप व जंतु कोशिका अंतर',
    'निम्नलिखित में से कौन-सा कोशिकांग सामान्यतः जंतु कोशिकाओं में पाया जाता है, परंतु उच्च पादप कोशिकाओं में अनुपस्थित होता है?',
    'Which organelle is normally present in animal cells but absent in higher plant cells?',
    ['तारककाय (सेंट्रोसोम)', 'Centrosome'],
    [
      ['माइटोकॉन्ड्रिया', 'Mitochondria'],
      ['गॉल्जीकाय', 'Golgi apparatus'],
      ['राइबोसोम', 'Ribosome'],
    ],
    'तारककाय (सेंट्रोसोम व सेंट्रिओल्स) जंतु कोशिका में कोशिका विभाजन के समय तर्कु तंतु (Spindle fibres) बनाता है; उच्च पादपों में यह अनुपस्थित होता है।',
    'The centrosome (with centrioles) forms spindle fibres during cell division in animal cells and is absent in higher plant cells.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'रसधानी',
    'परिपक्व पादप कोशिका का लगभग 50–90% आयतन किस कोशिकांग द्वारा घेरा जाता है?',
    'About 50–90% of the volume of a mature plant cell is occupied by which organelle?',
    ['रसधानी (रिक्तिका / Vacuole)', 'Vacuole'],
    [
      ['केंद्रक', 'Nucleus'],
      ['माइटोकॉन्ड्रिया', 'Mitochondria'],
      ['हरितलवक', 'Chloroplast'],
    ],
    'पादप कोशिका में एक बड़ी केंद्रीय रसधानी होती है जो टोनोप्लास्ट झिल्ली से घिरी रहती है और कोशिका को स्फीति (Turgidity) तथा दृढ़ता प्रदान करती है।',
    'A mature plant cell has a large central vacuole bounded by a tonoplast membrane, providing turgidity and rigidity to the cell.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'केंद्रिका',
    'केंद्रक के अंदर स्थित "केंद्रिका (Nucleolus)" का मुख्य कार्य क्या है?',
    'What is the main function of the "Nucleolus" located inside the nucleus?',
    ['राइबोसोमल आरएनए (rRNA) तथा राइबोसोम का संश्लेषण', 'Synthesis of ribosomal RNA (rRNA) and ribosomes'],
    [
      ['लिपिड का ऑक्सीकरण', 'Oxidation of lipids'],
      ['तर्कु तंतुओं को नष्ट करना', 'Destruction of spindle fibres'],
      ['ग्लूकोज का ग्लाइकोजन में परिवर्तन', 'Conversion of glucose to glycogen'],
    ],
    'फोंटाना द्वारा खोजी गई केंद्रिका झिल्ली-रहित संरचना है जो सक्रिय रूप से rRNA संश्लेषित कर राइबोसोम निर्माण में सहायता करती है।',
    'Discovered by Fontana, the nucleolus is a non-membranous nuclear structure that actively synthesizes rRNA for ribosome assembly.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'गुणसूत्र एवं डीएनए',
    'मानव की सामान्य दैहिक (कायिक) कोशिका में कितने जोड़े गुणसूत्र पाए जाते हैं?',
    'How many pairs of chromosomes are present in a normal human somatic (body) cell?',
    ['23 जोड़े (46 गुणसूत्र)', '23 pairs (46 chromosomes)'],
    [
      ['22 जोड़े (44 गुणसूत्र)', '22 pairs (44 chromosomes)'],
      ['24 जोड़े (48 गुणसूत्र)', '24 pairs (48 chromosomes)'],
      ['21 जोड़े (42 गुणसूत्र)', '21 pairs (42 chromosomes)'],
    ],
    'मनुष्य की द्विगुणित दैहिक कोशिका में 23 जोड़े (कुल 46) गुणसूत्र होते हैं, जिनमें 22 जोड़े अलिंग गुणसूत्र (Autosomes) और 1 जोड़ा लिंग गुणसूत्र होता है।',
    'A diploid human somatic cell contains 23 pairs (46) of chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes (XX or XY).',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'डीएनए संरचना',
    'डीएनए की द्विकुंडलिनी (Double Helix) संरचना का मॉडल वर्ष 1953 में किसने प्रस्तुत किया?',
    'Who proposed the Double Helix model of DNA structure in 1953?',
    ['जेम्स वाटसन और फ्रांसिस क्रिक', 'James Watson and Francis Crick'],
    [
      ['ग्रेगर जॉन मेंडल', 'Gregor Johann Mendel'],
      ['हरगोविंद खुराना', 'Hargobind Khorana'],
      ['फ्रेडरिक मिशर', 'Friedrich Miescher'],
    ],
    'रोजालिंड फ्रैंकलिन के एक्स-रे विवर्तन आँकड़ों के आधार पर जेम्स वाटसन और फ्रांसिस क्रिक ने 1953 में डीएनए का द्विकुंडलिनी मॉडल प्रस्तुत किया।',
    'Based on Rosalind Franklin’s X-ray diffraction data, James Watson and Francis Crick proposed the DNA double-helix model in 1953.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'डीएनए क्षारक',
    'डीएनए के नाइट्रोजनी क्षारकों में एडिनीन (A) सदैव किसके साथ दो हाइड्रोजन बंधों द्वारा जुड़ता है?',
    'In DNA nitrogenous bases, Adenine (A) always pairs with which base via two hydrogen bonds?',
    ['थायमीन (T)', 'Thymine (T)'],
    [
      ['साइटोसीन (C)', 'Cytosine (C)'],
      ['गुआनीन (G)', 'Guanine (G)'],
      ['यूरेसिल (U)', 'Uracil (U)'],
    ],
    'चारगाफ के नियम के अनुसार डीएनए में एडिनीन (A) थायमीन (T) से दो हाइड्रोजन बंधों द्वारा तथा गुआनीन (G) साइटोसीन (C) से तीन बंधों द्वारा जुड़ता है। RNA में T के स्थान पर यूरेसिल (U) होता है।',
    'According to base-pairing rules, Adenine (A) pairs with Thymine (T) via two hydrogen bonds, and Guanine (G) pairs with Cytosine (C) via three. RNA has Uracil instead of Thymine.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका विभाजन',
    'अर्धसूत्री विभाजन (Meiosis) जीवों की किस प्रकार की कोशिकाओं में होता है?',
    'Meiosis takes place in which type of cells of an organism?',
    ['जनन कोशिकाओं (युग्मक निर्माण के समय)', 'Reproductive/germ cells (during gamete formation)'],
    [
      ['केवल त्वचा की कोशिकाओं में', 'Only in skin cells'],
      ['केवल लाल रक्त कोशिकाओं में', 'Only in red blood cells'],
      ['जीवाणु कोशिकाओं में', 'In bacterial cells'],
    ],
    'अर्धसूत्री विभाजन जनन कोशिकाओं में होता है जिससे गुणसूत्रों की संख्या आधी (अगुणित) रह जाती है और युग्मक (शुक्राणु व अंडाणु) बनते हैं।',
    'Meiosis occurs in germ cells to halve the chromosome number (haploid) for gamete formation, maintaining chromosome constancy across generations.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'जीन विनिमय',
    'अर्धसूत्री विभाजन की किस अवस्था में गुणसूत्रों के बीच "जीन विनिमय (Crossing Over)" होता है जिससे आनुवंशिक विविधता आती है?',
    'During which stage of meiosis does "Crossing Over" occur between homologous chromosomes, generating genetic variation?',
    ['प्रोफेज-I की पैकीटीन अवस्था', 'Pachytene stage of Prophase-I'],
    [
      ['मेटाफेज-I', 'Metaphase-I'],
      ['एनाफेज-II', 'Anaphase-II'],
      ['टीलोफेज-I', 'Telophase-I'],
    ],
    'अर्धसूत्री विभाजन के प्रोफेज-I की पैकीटीन उप-अवस्था में समजात गुणसूत्रों के नॉन-सिस्टर क्रोमैटिड्स के बीच खंडों का आदान-प्रदान (जीन विनिमय) होता है।',
    'Crossing over, the exchange of genetic segments between non-sister chromatids of homologous chromosomes, occurs during the pachytene substage of Prophase-I.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'समसूत्री विभाजन',
    'समसूत्री विभाजन (Mitosis) की किस अवस्था में गुणसूत्र कोशिका की विषुवतीय प्लेट (Equatorial Plate) पर पंक्तिबद्ध हो जाते हैं?',
    'In which phase of mitosis do chromosomes align at the equatorial plate of the cell?',
    ['मेटाफेज (मध्यावस्था)', 'Metaphase'],
    [
      ['प्रोफेज (पूर्वावस्था)', 'Prophase'],
      ['एनाफेज (पश्चावस्था)', 'Anaphase'],
      ['टीलोफेज (अंत्यावस्था)', 'Telophase'],
    ],
    'मेटाफेज अवस्था में गुणसूत्र सर्वाधिक संघनित होकर तर्कु तंतुओं द्वारा कोशिका के मध्य (विषुवतीय प्लेट) में व्यवस्थित हो जाते हैं; गुणसूत्रों के अध्ययन के लिए यही सर्वश्रेष्ठ अवस्था है।',
    'During metaphase, maximally condensed chromosomes align along the equatorial plate attached to spindle fibres; this is the best stage to study chromosome morphology.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'परासरण',
    'यदि किसी पादप या जंतु कोशिका को अतिपरासरी विलयन (Hypertonic solution) में रखा जाए, तो क्या होगा?',
    'What happens if a plant or animal cell is placed in a hypertonic solution?',
    ['कोशिका से जल बाहर निकल जाएगा और वह सिकुड़ जाएगी', 'Water moves out of the cell and it shrinks'],
    [
      ['कोशिका में जल प्रवेश करेगा और वह फूल जाएगी', 'Water enters the cell and it swells'],
      ['जल के प्रवाह में कोई शुद्ध परिवर्तन नहीं होगा', 'There will be no net movement of water'],
      ['कोशिका तुरंत समसूत्री विभाजन शुरू कर देगी', 'The cell immediately starts mitosis'],
    ],
    'अतिपरासरी विलयन में बाहर विलेय की सांद्रता अधिक और जल की कम होती है, अतः बहिःपरासरण (Exosmosis) से जल कोशिका से बाहर निकलता है और कोशिका सिकुड़ (Plasmolysis) जाती है।',
    'In a hypertonic solution, external water concentration is lower, so water exits the cell via exosmosis, causing shrinkage (plasmolysis in plant cells).',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'सेंट्रल डोग्मा',
    'आणविक जीव विज्ञान के "सेंट्रल डोग्मा" (Central Dogma) के अनुसार आनुवंशिक सूचना का प्रवाह किस क्रम में होता है?',
    'According to the Central Dogma of molecular biology, what is the direction of flow of genetic information?',
    ['DNA → RNA → प्रोटीन', 'DNA → RNA → Protein'],
    [
      ['RNA → प्रोटीन → DNA', 'RNA → Protein → DNA'],
      ['प्रोटीन → RNA → DNA', 'Protein → RNA → DNA'],
      ['DNA → प्रोटीन → RNA', 'DNA → Protein → RNA'],
    ],
    'फ्रांसिस क्रिक द्वारा दिए गए सेंट्रल डोग्मा के अनुसार DNA से अनुलेखन (Transcription) द्वारा mRNA बनता है और mRNA से अनुवाद (Translation) द्वारा प्रोटीन बनता है।',
    'Proposed by Francis Crick, the Central Dogma states that genetic information flows from DNA to RNA (transcription) and from RNA to Protein (translation).',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'रिवर्स ट्रांसक्रिप्शन',
    'रिट्रोवायरस (जैसे HIV) में RNA से DNA बनने की प्रक्रिया किस एंजाइम द्वारा होती है?',
    'In retroviruses (like HIV), the synthesis of DNA from RNA is catalyzed by which enzyme?',
    ['रिवर्स ट्रांसक्रिप्टेज', 'Reverse transcriptase'],
    [
      ['डीएनए लाइगेज', 'DNA ligase'],
      ['रेस्ट्रिक्शन एंडोन्यूक्लिएज', 'Restriction endonuclease'],
      ['टैक पॉलीमरेज', 'Taq polymerase'],
    ],
    'रिवर्स ट्रांसक्रिप्टेज एंजाइम वायरल RNA टेम्पलेट से पूरक DNA (cDNA) का निर्माण करता है; इसकी खोज टेमिन और बाल्टीमोर ने की थी।',
    'Reverse transcriptase synthesizes complementary DNA (cDNA) from an RNA template, a process discovered by Temin and Baltimore.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'आनुवंशिक कूट',
    'प्रोटीन संश्लेषण को प्रारंभ करने वाला "प्रारंभन कोडॉन" (Start Codon) कौन-सा है जो मेथिओनीन अमीनो अम्ल को कोड करता है?',
    'Which is the "Start Codon" that initiates protein synthesis and codes for the amino acid methionine?',
    ['AUG', 'AUG'],
    [
      ['UAA', 'UAA'],
      ['UAG', 'UAG'],
      ['UGA', 'UGA'],
    ],
    'mRNA में AUG प्रारंभन कोडॉन है जो मेथिओनीन को कोड करता है, जबकि UAA, UAG और UGA तीन समापन कोडॉन (Stop codons) हैं।',
    'On mRNA, AUG acts as the start codon coding for methionine, while UAA, UAG, and UGA are the three stop (termination) codons.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'पॉलीथीन व कोशिका भित्ति रहित',
    'जीवाणुओं की कोशिका भित्ति मुख्य रूप से किस पदार्थ की बनी होती है?',
    'The cell wall of bacteria is primarily composed of which substance?',
    ['पेप्टिडोग्लाइकन (म्यूरीन)', 'Peptidoglycan (Murein)'],
    [
      ['सेल्यूलोज', 'Cellulose'],
      ['काइटिन', 'Chitin'],
      ['पेक्टिन', 'Pectin'],
    ],
    'जीवाणुओं की कोशिका भित्ति पेप्टिडोग्लाइकन की बनी होती है; पेनिसिलिन जैसी एंटीबायोटिक इसी पेप्टिडोग्लाइकन संश्लेषण को रोकती हैं।',
    'Bacterial cell walls are made of peptidoglycan (murein); antibiotics like penicillin act by inhibiting peptidoglycan cross-linking.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'परऑक्सीसोम',
    'कोशिका में हाइड्रोजन परऑक्साइड (H2O2) जैसे विषैले उपोत्पाद को जल व ऑक्सीजन में विघटित करने वाला कोशिकांग कौन-सा है?',
    'Which cell organelle breaks down toxic hydrogen peroxide (H2O2) into water and oxygen?',
    ['परऑक्सीसोम (Peroxisome)', 'Peroxisome'],
    [
      ['सेंट्रोसोम', 'Centrosome'],
      ['राइबोसोम', 'Ribosome'],
      ['ल्यूकोप्लास्ट', 'Leucoplast'],
    ],
    'परऑक्सीसोम में कैटेलेज एंजाइम होता है जो हानिकारक H2O2 को जल व ऑक्सीजन में तोड़ता है तथा पादपों में प्रकाश-श्वसन में भी भाग लेता है।',
    'Peroxisomes contain the enzyme catalase, which decomposes toxic hydrogen peroxide into water and oxygen, and also participate in photorespiration in plants.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'प्लाज्मोडेस्मेटा',
    'दो आसन्न पादप कोशिकाओं के कोशिकाद्रव्य को आपस में जोड़ने वाले सूक्ष्म कोशिकाद्रव्यीय सेतु क्या कहलाते हैं?',
    'What are the microscopic cytoplasmic bridges connecting the cytoplasm of two adjacent plant cells called?',
    ['प्लाज्मोडेस्मेटा (जीवद्रव्य तंतु)', 'Plasmodesmata'],
    [
      ['डेस्मोसोम', 'Desmosomes'],
      ['टोनोप्लास्ट', 'Tonoplast'],
      ['क्रिस्टी', 'Cristae'],
    ],
    'प्लाज्मोडेस्मेटा पादप कोशिका भित्ति से होकर गुजरने वाले सूक्ष्म चैनल हैं जो आसन्न कोशिकाओं के बीच जल, आयन और अणुओं के परिवहन में सहायक होते हैं।',
    'Plasmodesmata are microscopic channels traversing plant cell walls that allow transport and communication between adjacent cells.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'मेंडल एवं आनुवंशिकी',
    'आनुवंशिकी के जनक ग्रेगर जॉन मेंडल ने अपने वंशागति के प्रयोग किस पौधे पर किए थे?',
    'Gregor Johann Mendel, the father of genetics, conducted his inheritance experiments on which plant?',
    ['उद्यान मटर (पाइसम सटाइवम)', 'Garden pea (Pisum sativum)'],
    [
      ['मीठी मटर (लैथाइरस ओडोरेटस)', 'Sweet pea (Lathyrus odoratus)'],
      ['सरसों (ब्रैसिका)', 'Mustard (Brassica)'],
      ['मक्का (जिया मेज)', 'Maize (Zea mays)'],
    ],
    'ग्रेगर जॉन मेंडल ने उद्यान मटर (Pisum sativum) के 7 जोड़ी विपर्यासी लक्षणों पर 1856 से 1863 तक संकरण प्रयोग किए और वंशागति के नियम प्रतिपादित किए।',
    'Gregor Johann Mendel studied 7 pairs of contrasting traits in garden pea (Pisum sativum) from 1856 to 1863 to formulate the laws of inheritance.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'मेंडल के नियम',
    'मेंडल के द्विसंकर संकरण (Dihybrid Cross) की F2 पीढ़ी में फीनोटाइप (लक्षणप्रारूप) अनुपात क्या प्राप्त होता है?',
    'What is the F2 phenotypic ratio obtained in Mendel’s Dihybrid Cross?',
    ['9 : 3 : 3 : 1', '9 : 3 : 3 : 1'],
    [
      ['3 : 1', '3 : 1'],
      ['1 : 2 : 1', '1 : 2 : 1'],
      ['1 : 1 : 1 : 1', '1 : 1 : 1 : 1'],
    ],
    'दो जोड़ी लक्षणों वाले द्विसंकर क्रॉस की F2 पीढ़ी में स्वतंत्र अपव्यूहन के नियम के कारण 9 : 3 : 3 : 1 का फीनोटाइप अनुपात प्राप्त होता है।',
    'Due to the Law of Independent Assortment, the F2 generation of a dihybrid cross yields a phenotypic ratio of 9 : 3 : 3 : 1.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'मनुष्य में लिंग निर्धारण',
    'मनुष्य में संतान का लिंग निर्धारण मुख्य रूप से किस पर निर्भर करता है?',
    'Sex determination of a human offspring depends primarily on which factor?',
    ['पिता से प्राप्त शुक्राणु के लिंग गुणसूत्र (X या Y) पर', 'The sex chromosome (X or Y) of the father’s sperm'],
    [
      ['माता के अंडाणु के लिंग गुणसूत्र पर', 'The sex chromosome of the mother’s ovum'],
      ['गर्भावस्था के दौरान माता के आहार पर', 'Mother’s diet during pregnancy'],
      ['माइटोकॉन्ड्रियल डीएनए की संख्या पर', 'Number of mitochondrial DNA copies'],
    ],
    'माता के सभी अंडाणुओं में X गुणसूत्र होता है, जबकि पिता के शुक्राणु में X या Y गुणसूत्र होता है। XY युग्मनज से पुत्र तथा XX से पुत्री उत्पन्न होती है।',
    'All maternal ova carry an X chromosome, while paternal sperm carry either X or Y. Thus, the father’s sperm determines whether the zygote is XX (female) or XY (male).',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'ATP का पूरा नाम',
    'कोशिकीय ऊर्जा मुद्रा "ATP" का पूर्ण रूप क्या है?',
    'What is the full form of the cellular energy currency "ATP"?',
    ['एडीनोसिन ट्राइफॉस्फेट', 'Adenosine Triphosphate'],
    [
      ['एडीनोसिन टेट्राफॉस्फेट', 'Adenosine Tetraphosphate'],
      ['एमीनो ट्राइफॉस्फेट', 'Amino Triphosphate'],
      ['एडीनिन थर्मल फॉस्फेट', 'Adenine Thermal Phosphate'],
    ],
    'ATP (Adenosine Triphosphate) एक न्यूक्लियोटाइड अणु है जिसके टर्मिनल फॉस्फेट बंधों के टूटने पर कोशिकीय कार्यों के लिए ऊर्जा मुक्त होती है।',
    'ATP (Adenosine Triphosphate) is a high-energy nucleotide molecule whose phosphate bond hydrolysis supplies energy for cellular work.',
    'EASY'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'आरएनए के प्रकार',
    'कोशिका में अमीनो अम्लों को राइबोसोम तक पहुँचाने का कार्य किस प्रकार का आरएनए (RNA) करता है?',
    'Which type of RNA carries amino acids to the ribosome during protein synthesis?',
    ['tRNA (स्थानांतरण आरएनए)', 'tRNA (Transfer RNA)'],
    [
      ['mRNA (संदेशवाहक आरएनए)', 'mRNA (Messenger RNA)'],
      ['rRNA (राइबोसोमल आरएनए)', 'rRNA (Ribosomal RNA)'],
      ['snRNA (लघु नाभिकीय आरएनए)', 'snRNA (Small nuclear RNA)'],
    ],
    'tRNA (Transfer RNA) को एडेप्टर अणु कहा जाता है; यह अपने एंटीकोडॉन द्वारा mRNA के कोडॉन को पढ़कर विशिष्ट अमीनो अम्ल राइबोसोम पर लाता है।',
    'tRNA (Transfer RNA) acts as an adapter molecule that reads mRNA codons via its anticodon loop and delivers specific amino acids to the ribosome.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'हरितलवक में झिल्लियाँ',
    'हरितलवक (Chloroplast) के भीतर सिक्कों के ढेर जैसी रचना क्या कहलाती है जहाँ प्रकाश-अभिक्रिया संपन्न होती है?',
    'What are the coin-stack-like structures inside a chloroplast where light reactions occur called?',
    ['ग्राना (Grana)', 'Grana'],
    [
      ['स्ट्रोमा (Stroma)', 'Stroma'],
      ['क्रिस्टी (Cristae)', 'Cristae'],
      ['मैट्रिक्स (Matrix)', 'Matrix'],
    ],
    'हरितलवक में थायलाकोइड झिल्लियाँ सिक्कों के ढेर बनाती हैं जिन्हें ग्राना कहते हैं। ग्राना में क्लोरोफिल होता है जहाँ प्रकाश-निर्भर अभिक्रिया होती है।',
    'Inside chloroplasts, stacked thylakoid membranes form grana containing chlorophyll, where the light-dependent reactions of photosynthesis occur.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'डीएनए फिंगरप्रिंटिंग',
    'भारत में "डीएनए फिंगरप्रिंटिंग" (DNA Fingerprinting) के जनक किसे माना जाता है?',
    'Who is regarded as the father of "DNA Fingerprinting" in India?',
    ['डॉ. लालजी सिंह', 'Dr. Lalji Singh'],
    [
      ['डॉ. हरगोविंद खुराना', 'Dr. Hargobind Khorana'],
      ['डॉ. एम. एस. स्वामीनाथन', 'Dr. M. S. Swaminathan'],
      ['डॉ. ए. पी. जे. अब्दुल कलाम', 'Dr. A. P. J. Abdul Kalam'],
    ],
    'डॉ. लालजी सिंह ने भारत में डीएनए फिंगरप्रिंटिंग तकनीक की स्थापना की और हैदराबाद में सेंटर फॉर डीएनए फिंगरप्रिंटिंग एंड डायग्नोस्टिक्स (CDFD) स्थापित किया। विश्व स्तर पर इसके जनक एलेक जेफ्रीज हैं।',
    'Dr. Lalji Singh pioneered DNA fingerprinting in India and helped establish CDFD Hyderabad; globally, Sir Alec Jeffreys invented the technique.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'जीवाणु में गुणसूत्र',
    'जीवाणुओं में मुख्य गुणसूत्रीय डीएनए के अतिरिक्त पाए जाने वाले छोटे वृत्ताकार अतिरिक्त-गुणसूत्रीय डीएनए क्या कहलाते हैं?',
    'What are the small, circular extra-chromosomal DNA molecules found in bacteria besides main chromosomal DNA called?',
    ['प्लाज्मिड (Plasmid)', 'Plasmid'],
    [
      ['कैप्सिड (Capsid)', 'Capsid'],
      ['मिसोसोम (Mesosome)', 'Mesosome'],
      ['हिस्टोन (Histone)', 'Histone'],
    ],
    'प्लाज्मिड जीवाणुओं में स्वतः प्रतिकृति करने वाला छोटा वृत्ताकार डीएनए है, जिसका उपयोग जैव प्रौद्योगिकी में क्लोनिंग वाहक (Vector) के रूप में होता है।',
    'Plasmids are small, self-replicating circular DNA molecules in bacteria widely used as cloning vectors in genetic engineering.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'जैव प्रौद्योगिकी एंजाइम',
    'डीएनए को विशिष्ट स्थलों पर काटने के कारण किस एंजाइम को "आणविक कैंची" (Molecular Scissors) कहा जाता है?',
    'Which enzyme is known as "Molecular Scissors" because it cuts DNA at specific recognition sequences?',
    ['रेस्ट्रिक्शन एंडोन्यूक्लिएज', 'Restriction endonuclease'],
    [
      ['डीएनए लाइगेज', 'DNA ligase'],
      ['आरएनए पॉलीमरेज', 'RNA polymerase'],
      ['हेलिकेज', 'Helicase'],
    ],
    'रेस्ट्रिक्शन एंडोन्यूक्लिएज विशिष्ट पैलिंड्रोमिक अनुक्रमों पर डीएनए को काटते हैं, जबकि डीएनए लाइगेज को "आणविक गोंद" कहा जाता है क्योंकि यह खंडों को जोड़ता है।',
    'Restriction endonucleases cleave DNA at specific palindromic sites, whereas DNA ligase acts as "molecular glue" to join DNA fragments.',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'उत्परिवर्तन',
    'डीएनए अनुक्रम में होने वाला आकस्मिक व वंशागत परिवर्तन "उत्परिवर्तन (Mutation)" का सिद्धांत किसने दिया?',
    'Who proposed the "Mutation Theory" explaining sudden heritable changes in DNA sequences?',
    ['ह्यूगो डी व्रीज', 'Hugo de Vries'],
    [
      ['चार्ल्स डार्विन', 'Charles Darwin'],
      ['लैमार्क', 'Lamarck'],
      ['टी. एच. मॉर्गन', 'T. H. Morgan'],
    ],
    'ह्यूगो डी व्रीज ने ईवनिंग प्रिमरोज (Oenothera lamarckiana) पर अध्ययन करके 1901 में उत्परिवर्तन सिद्धांत प्रतिपादित किया।',
    'Hugo de Vries proposed the Mutation Theory in 1901 based on his observations on the evening primrose (Oenothera lamarckiana).',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'स्तनधारी RBC',
    'परिपक्व मानव लाल रक्त कोशिका (RBC) की एक प्रमुख कोशिकीय विशेषता क्या है?',
    'What is a prominent cellular characteristic of a mature human Red Blood Cell (RBC)?',
    ['इसमें केंद्रक और माइटोकॉन्ड्रिया नहीं होते', 'It lacks a nucleus and mitochondria'],
    [
      ['इसमें दो केंद्रक और बड़े क्लोरोप्लास्ट होते हैं', 'It contains two nuclei and large chloroplasts'],
      ['इसमें कोशिका भित्ति सेल्यूलोज की बनी होती है', 'It has a cellulose cell wall'],
      ['यह तीव्र समसूत्री विभाजन करती है', 'It undergoes rapid mitotic division'],
    ],
    'परिपक्व स्तनधारी RBC में केंद्रक व माइटोकॉन्ड्रिया न होने से हीमोग्लोबिन के लिए अधिकतम स्थान मिलता है और ऑक्सीजन का स्वयं उपभोग नहीं होता। (ऊँट और लामा अपवाद हैं)।',
    'Mature mammalian RBCs lack a nucleus and mitochondria to maximize space for haemoglobin and avoid consuming the oxygen they transport (camel and llama are exceptions).',
    'MEDIUM'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'मिसोसोम',
    'प्रोकैरियोटिक (जीवाणु) कोशिका में प्लाज्मा झिल्ली के अंतर्वलन से बनी संरचना क्या कहलाती है जो श्वसन और कोशिका विभाजन में मदद करती है?',
    'What is the infolding of the plasma membrane in prokaryotic (bacterial) cells that aids respiration and cell division called?',
    ['मिसोसोम (Mesosome)', 'Mesosome'],
    [
      ['लाइसोसोम', 'Lysosome'],
      ['परऑक्सीसोम', 'Peroxisome'],
      ['सेंट्रोसोम', 'Centrosome'],
    ],
    'जीवाणुओं में माइटोकॉन्ड्रिया के अभाव में प्लाज्मा झिल्ली के अंतर्वलन से मिसोसोम बनते हैं जो श्वसनी एंजाइम, डीएनए प्रतिकृति व भित्ति निर्माण में मदद करते हैं।',
    'In prokaryotes lacking mitochondria, plasma membrane infoldings called mesosomes assist in respiration, DNA replication, and cell wall formation.',
    'HARD'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'ऊतक की परिभाषा',
    'समान उत्पत्ति तथा समान कार्य करने वाली कोशिकाओं के समूह को क्या कहते हैं, और इसके अध्ययन को क्या कहा जाता है?',
    'What is a group of cells with similar origin and function called, and what is its study known as?',
    ['ऊतक; ऊतकी (हिस्टोलॉजी)', 'Tissue; Histology'],
    [
      ['अंग; आकारिकी (मॉर्फोलॉजी)', 'Organ; Morphology'],
      ['कोशिका; कोशिका विज्ञान (साइटोलॉजी)', 'Cell; Cytology'],
      ['तंत्र; शरीर क्रिया विज्ञान', 'System; Physiology'],
    ],
    'समान रचना, उत्पत्ति व कार्य वाली कोशिकाओं का समूह ऊतक (Tissue) कहलाता है। ऊतकों के सूक्ष्म अध्ययन को ऊतकी (Histology) कहते हैं।',
    'A group of cells sharing common origin, structure, and function is a tissue, and its microscopic study is called histology.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'पादप विभज्योतक',
    'पौधों की जड़ और तने के शीर्ष (Tip) पर पाया जाने वाला कौन-सा ऊतक लंबाई में वृद्धि के लिए उत्तरदायी है?',
    'Which plant tissue found at the tips of roots and stems is responsible for increase in length?',
    ['शीर्षस्थ विभज्योतक (Apical Meristem)', 'Apical Meristem'],
    [
      ['पार्श्व विभज्योतक (Lateral Meristem)', 'Lateral Meristem'],
      ['दृढ़ोतक (Sclerenchyma)', 'Sclerenchyma'],
      ['मृदूतक (Parenchyma)', 'Parenchyma'],
    ],
    'शीर्षस्थ विभज्योतक की कोशिकाएँ लगातार विभाजित होकर जड़ व प्ररोह की लंबाई (प्राथमिक वृद्धि) बढ़ाती हैं, जबकि पार्श्व विभज्योतक (कैम्बियम) मोटाई बढ़ाता है।',
    'Cells of the apical meristem divide continuously to increase root and stem length (primary growth), whereas lateral meristem (cambium) increases girth.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'अंतर्वेशी विभज्योतक',
    'घास और बाँस जैसे एकबीजपत्री पौधों की पत्तियों के आधार या पर्वसंधियों (Nodes) के पास पाया जाने वाला कौन-सा ऊतक घास चरने के बाद भी उसे पुनः उगने में मदद करता है?',
    'Which meristem located at leaf bases or nodes of grasses helps them regenerate after grazing?',
    ['अंतर्वेशी विभज्योतक (Intercalary Meristem)', 'Intercalary Meristem'],
    [
      ['पार्श्व विभज्योतक', 'Lateral Meristem'],
      ['कॉक कैम्बियम', 'Cork Cambium'],
      ['कोलेनकाइमा', 'Collenchyma'],
    ],
    'अंतर्वेशी विभज्योतक पर्वों (Internodes) की लंबाई बढ़ाता है और शाकाहारियों द्वारा खाए गए भागों को शीघ्र पुनः उत्पन्न करने में सहायक होता है।',
    'Intercalary meristem elongates internodes and allows rapid regeneration of parts removed by grazing herbivores in grasses.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'सरल स्थायी ऊतक',
    'जलीय पौधों (जैसे जलकुंभी) को तैरने के लिए उत्प्लावन बल (Buoyancy) किस विशेष मृदूतक (Parenchyma) ऊतक से प्राप्त होता है?',
    'Which specialized parenchyma tissue provides buoyancy to aquatic plants (like water hyacinth) to help them float?',
    ['वायूतक (एरेनकाइमा)', 'Aerenchyma'],
    [
      ['हरित ऊतक (क्लोरेनकाइमा)', 'Chlorenchyma'],
      ['स्थूलकोण ऊतक (कोलेनकाइमा)', 'Collenchyma'],
      ['दृढ़ोतक (स्क्लेरेनकाइमा)', 'Sclerenchyma'],
    ],
    'जलीय पौधों के मृदूतक में बड़े वायु-कोष्ठ होते हैं जिन्हें एरेनकाइमा कहते हैं; यह हवा भरकर पौधे को तैरने में मदद करता है।',
    'Aquatic plants have large air cavities in their parenchyma called aerenchyma, which trap air and provide buoyancy.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'कोलेनकाइमा',
    'पौधों के कोमल तनों और पत्तियों को बिना टूटे मुड़ने की क्षमता (लचीलापन) किस जीवित स्थायी ऊतक के कारण मिलती है?',
    'Flexibility in soft plant stems and leaves allowing them to bend without breaking is due to which living permanent tissue?',
    ['स्थूलकोण ऊतक (कोलेनकाइमा)', 'Collenchyma'],
    [
      ['दृढ़ोतक (स्क्लेरेनकाइमा)', 'Sclerenchyma'],
      ['जाइलम', 'Xylem'],
      ['एपिडर्मिस', 'Epidermis'],
    ],
    'कोलेनकाइमा एक जीवित यांत्रिक ऊतक है जिसकी कोशिका भित्ति के कोनों पर सेल्यूलोज व पेक्टिन का स्थूलन होता है, जिससे पौधे में लचीलापन आता है।',
    'Collenchyma is a living mechanical tissue with cellulose and pectin thickenings at cell corners, providing tensile strength and flexibility.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'स्क्लेरेनकाइमा',
    'नारियल का रेशेदार छिलका (Husk) किस मृत स्थायी पादप ऊतक से बना होता है?',
    'The fibrous husk of a coconut is composed of which dead permanent plant tissue?',
    ['दृढ़ोतक (स्क्लेरेनकाइमा)', 'Sclerenchyma'],
    [
      ['मृदूतक (पैरेनकाइमा)', 'Parenchyma'],
      ['स्थूलकोण ऊतक (कोलेनकाइमा)', 'Collenchyma'],
      ['फ्लोएम पैरेनकाइमा', 'Phloem parenchyma'],
    ],
    'स्क्लेरेनकाइमा की कोशिकाएँ मृत होती हैं और इनकी भित्ति पर लिग्निन का मोटा जमाव होता है। नारियल का रेशा व नाशपाती का किरकिरापन (स्टोन सेल्स) इसी के उदाहरण हैं।',
    'Sclerenchyma consists of dead cells with thick lignified walls, forming coconut husk fibres and gritty stone cells (sclereids) in pears.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'जाइलम के घटक',
    'जाइलम (दारु) ऊतक के निम्नलिखित चार घटकों में से कौन-सा एकमात्र जीवित घटक है?',
    'Among the four components of xylem tissue, which one is the only living component?',
    ['जाइलम मृदूतक (Xylem Parenchyma)', 'Xylem Parenchyma'],
    [
      ['वाहिनिकाएँ (Tracheids)', 'Tracheids'],
      ['वाहिकाएँ (Vessels)', 'Vessels'],
      ['जाइलम तंतु (Xylem Fibres)', 'Xylem Fibres'],
    ],
    'जाइलम के चार घटकों में से वाहिनिकाएँ, वाहिकाएँ और जाइलम तंतु परिपक्वता पर मृत होते हैं; केवल जाइलम पैरेनकाइमा जीवित होता है जो भोजन संचय करता है।',
    'Out of the four xylem elements (tracheids, vessels, xylem fibres, xylem parenchyma), only xylem parenchyma is living at maturity.',
    'HARD'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'फ्लोएम के घटक',
    'फ्लोएम (पोषवाह) में भोज्य पदार्थों के परिवहन के लिए मुख्य जीवित नलिकाकार घटक कौन-सा है जिसमें परिपक्वता पर केंद्रक नहीं होता?',
    'Which is the main living tubular component of phloem responsible for food transport that lacks a nucleus at maturity?',
    ['चालनी नलिका (Sieve tube)', 'Sieve tube'],
    [
      ['सहचर कोशिका (Companion cell)', 'Companion cell'],
      ['फ्लोएम तंतु (Phloem fibre)', 'Phloem fibre'],
      ['वाहिका (Vessel)', 'Vessel'],
    ],
    'चालनी नलिकाएँ केंद्रक-रहित जीवित कोशिकाएँ हैं जो पत्तियों से बने भोजन का परिवहन करती हैं; इनका नियंत्रण पास स्थित केंद्रकयुक्त सहचर कोशिका द्वारा होता है।',
    'Sieve tube elements are living cells without nuclei that translocate food; their metabolic activities are regulated by adjacent nucleated companion cells.',
    'HARD'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'जाइलम व फ्लोएम का कार्य',
    'पौधों में जड़ों से जल एवं खनिज लवणों का ऊर्ध्वमुखी संवहन किस ऊतक द्वारा होता है?',
    'Upward conduction of water and dissolved minerals from roots in plants occurs through which tissue?',
    ['जाइलम (Xylem)', 'Xylem'],
    [
      ['फ्लोएम (Phloem)', 'Phloem'],
      ['कैम्बियम (Cambium)', 'Cambium'],
      ['मृदूतक (Parenchyma)', 'Parenchyma'],
    ],
    'जाइलम जड़ों से जल व खनिज लवणों को एकदिशीय (ऊपर की ओर) रूप से पत्तियों तक ले जाता है, जबकि फ्लोएम भोजन का द्विदिशीय संवहन करता है।',
    'Xylem conducts water and minerals unidirectionally upwards from roots to leaves, while phloem translocates food bidirectionally.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'रंध्र एवं रक्षक कोशिकाएँ',
    'पत्ती की बाह्यत्वचा (Epidermis) में पाए जाने वाले रंध्र (Stomata) किन दो सेम के आकार की कोशिकाओं से घिरे होते हैं?',
    'Stomata in the leaf epidermis are surrounded by which pair of kidney-shaped cells?',
    ['रक्षक कोशिकाएँ (Guard cells)', 'Guard cells'],
    [
      ['सहचर कोशिकाएँ (Companion cells)', 'Companion cells'],
      ['बुलिफॉर्म कोशिकाएँ', 'Bulliform cells'],
      ['मज्जा कोशिकाएँ', 'Pith cells'],
    ],
    'प्रत्येक रंध्र दो रक्षक कोशिकाओं से घिरा होता है जो स्फीति (Turgidity) में परिवर्तन के द्वारा रंध्र के खुलने व बंद होने को नियंत्रित करती हैं।',
    'Each stoma is bordered by two guard cells whose changes in turgidity regulate the opening and closing of the stomatal pore.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'कॉर्क और सुबेरिन',
    'वृक्षों की छाल में पाई जाने वाली कॉर्क कोशिकाएँ किस रासायनिक पदार्थ के जमाव के कारण जल और गैसों के लिए अभेद्य होती हैं?',
    'Cork cells in tree bark become impervious to water and gases due to the deposition of which chemical substance?',
    ['सुबेरिन (Suberin)', 'Suberin'],
    [
      ['क्यूटिन (Cutin)', 'Cutin'],
      ['पैक्टिन (Pectin)', 'Pectin'],
      ['काइटिन (Chitin)', 'Chitin'],
    ],
    'कॉर्क (फेलम) मृत कोशिकाओं का स्तर है जिसकी भित्ति में सुबेरिन का जमाव होने से यह जल व गैसों के लिए अपारगम्य होकर पौधे की रक्षा करता है।',
    'Cork (phellem) consists of dead cells with suberin deposited in their walls, making the bark waterproof and impervious to gases.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'वार्षिक वलय',
    'किसी वृक्ष की आयु का आकलन उसके तने के अनुप्रस्थ काट में उपस्थित किस रचना को गिनकर किया जाता है?',
    'The age of a tree can be estimated by counting which structures in the cross-section of its trunk?',
    ['वार्षिक वृद्धि वलय (Annual rings)', 'Annual growth rings'],
    [
      ['वात-रंध्र (Lenticels)', 'Lenticels'],
      ['बाह्यत्वचीय रोम', 'Epidermal trichomes'],
      ['मज्जा रश्मियाँ', 'Medullary rays'],
    ],
    'द्वितीयक वृद्धि के दौरान वसंत काष्ठ और शरद काष्ठ से मिलकर प्रतिवर्ष एक वार्षिक वलय बनता है। वार्षिक वलयों के अध्ययन से आयु ज्ञात करने को डेंड्रोक्रोनोलॉजी कहते हैं।',
    'Each year, secondary growth forms one annual ring composed of spring wood and autumn wood. Determining tree age via rings is called dendrochronology.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'जंतु उपकला ऊतक',
    'मानव श्वासनली (Trachea) और अंडवाहिनी में श्लेष्मा या अंडाणु को आगे बढ़ाने के लिए किस प्रकार का उपकला ऊतक पाया जाता है?',
    'Which type of epithelial tissue is found in the human trachea and fallopian tubes to move mucus or ova forward?',
    ['पक्ष्माभी स्तंभाकार उपकला (Ciliated Columnar Epithelium)', 'Ciliated Columnar Epithelium'],
    [
      ['सरल शल्की उपकला', 'Simple Squamous Epithelium'],
      ['घनाकार उपकला', 'Cuboidal Epithelium'],
      ['संयुक्त स्तरित उपकला', 'Stratified Epithelium'],
    ],
    'पक्ष्माभी उपकला की मुक्त सतह पर रोम सदृश पक्ष्माभ (Cilia) होते हैं जो लयबद्ध गति द्वारा धूल-युक्त श्लेष्मा या अंडाणु को एक निश्चित दिशा में धकेलते हैं।',
    'Ciliated columnar epithelium has hair-like cilia on its apical surface that beat rhythmically to propel mucus in the trachea or ova in the oviduct.',
    'HARD'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'संयोजी ऊतक',
    'रक्त (Blood) जंतु ऊतकों की किस श्रेणी में आता है?',
    'Blood belongs to which category of animal tissues?',
    ['तरल संयोजी ऊतक', 'Fluid connective tissue'],
    [
      ['उपकला ऊतक', 'Epithelial tissue'],
      ['पेशीय ऊतक', 'Muscular tissue'],
      ['तंत्रिका ऊतक', 'Nervous tissue'],
    ],
    'रक्त और लसीका तरल संयोजी ऊतक हैं क्योंकि इनका तरल आधात्री (प्लाज्मा) शरीर के विभिन्न अंगों को आपस में जोड़ता और पदार्थों का परिवहन करता है।',
    'Blood and lymph are fluid connective tissues whose liquid matrix (plasma) connects body organs by transporting nutrients, gases, and wastes.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'स्नायु व कंडरा',
    'अस्थि को अस्थि (Bone to Bone) से जोड़ने वाला लचीला संयोजी ऊतक क्या कहलाता है?',
    'What is the elastic connective tissue that joins a bone to another bone called?',
    ['स्नायु (लिगामेंट / Ligament)', 'Ligament'],
    [
      ['कंडरा (टेंडन / Tendon)', 'Tendon'],
      ['उपास्थि (कार्टिलेज)', 'Cartilage'],
      ['एरियोलर ऊतक', 'Areolar tissue'],
    ],
    'लिगामेंट (स्नायु) एक अस्थि को दूसरी अस्थि से जोड़ता है और काफी लचीला होता है, जबकि टेंडन (कंडरा) पेशी को अस्थि से जोड़ता है।',
    'A ligament connects bone to bone with considerable elasticity, whereas a tendon attaches skeletal muscle to bone.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'उपास्थि',
    'बाह्य कर्ण (Pinna) और नाक के अग्र भाग को लचीला सहारा देने वाला संयोजी ऊतक कौन-सा है?',
    'Which connective tissue provides flexible support to the external ear (pinna) and the tip of the nose?',
    ['उपास्थि (Cartilage)', 'Cartilage'],
    [
      ['सघन अस्थि (Bone)', 'Compact Bone'],
      ['वसीय ऊतक (Adipose tissue)', 'Adipose tissue'],
      ['रक्त', 'Blood'],
    ],
    'उपास्थि की कॉन्ड्रिन आधात्री लचीली होती है जिसमें कॉन्ड्रोसाइट कोशिकाएँ होती हैं; यह नाक की नोक, कान के पल्ले व श्वासनली के छल्लों में पाई जाती है।',
    'Cartilage has a pliable chondrin matrix containing chondrocytes; it supports the nose tip, ear pinna, and tracheal rings.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'वसीय ऊतक',
    'त्वचा के नीचे और आंतरिक अंगों के चारों ओर वसा का संचय कर ऊष्मारोधी का कार्य कौन-सा ऊतक करता है?',
    'Which tissue stores fat beneath the skin and around internal organs, acting as a thermal insulator?',
    ['वसीय ऊतक (एडिपोज ऊतक)', 'Adipose tissue'],
    [
      ['कंडरा (टेंडन)', 'Tendon'],
      ['अरेखित पेशी', 'Smooth muscle'],
      ['श्वेत तंतुमय ऊतक', 'White fibrous tissue'],
    ],
    'वसीय ऊतक (Adipose tissue) एक विशेष ढीला संयोजी ऊतक है जिसकी एडिपोसाइट कोशिकाएँ वसा गोलिकाओं से भरी रहती हैं और शरीर की ऊष्मा को बाहर जाने से रोकती हैं।',
    'Adipose tissue is a loose connective tissue whose adipocytes store fat globules, providing energy reserves, cushioning, and thermal insulation.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'पेशीय ऊतक',
    'मानव हृदय में पाई जाने वाली "हृदयक पेशी" (Cardiac Muscle) की मुख्य विशेषता क्या है?',
    'What is the key characteristic of "Cardiac Muscle" found in the human heart?',
    ['शाखित, रेखित, एककेंद्रकीय एवं जीवनभर लयबद्ध संकुचन करने वाली अनैच्छिक पेशी', 'Branched, striated, uninucleate, involuntary muscle contracting rhythmically throughout life'],
    [
      ['अशाखित, बहुकेंद्रकीय एवं ऐच्छिक पेशी', 'Unbranched, multinucleated, voluntary muscle'],
      ['तर्कुरूपी एवं अरेखित पेशी', 'Spindle-shaped and non-striated muscle'],
      ['केवल कंकाल से जुड़ी थकने वाली पेशी', 'Fatigable muscle attached only to bones'],
    ],
    'हृदयक पेशियाँ अनैच्छिक होती हैं, इनमें अंतर्विष्ट डिस्क (Intercalated discs) पाई जाती हैं और ये बिना थके जीवनभर लयबद्ध ढंग से संकुचन करती हैं।',
    'Cardiac muscles are involuntary, branched, striated, and uninucleate with intercalated discs, contracting rhythmically without fatigue.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'ऐच्छिक व अनैच्छिक पेशियाँ',
    'आहार नाल की दीवारों और रक्त वाहिकाओं में किस प्रकार का पेशीय ऊतक पाया जाता है?',
    'Which type of muscular tissue is found in the walls of the alimentary canal and blood vessels?',
    ['चिकनी (अरेखित) अनैच्छिक पेशी', 'Smooth (unstriated) involuntary muscle'],
    [
      ['कंकाल (रेखित) ऐच्छिक पेशी', 'Skeletal (striated) voluntary muscle'],
      ['हृदयक पेशी', 'Cardiac muscle'],
      ['एरियोलर ऊतक', 'Areolar tissue'],
    ],
    'चिकनी या अरेखित पेशियाँ तर्कुरूपी (Spindle-shaped) और एककेंद्रकीय होती हैं। ये अनैच्छिक हैं और आहार नाल में क्रमाकुंचन (Peristalsis) कराती हैं।',
    'Smooth (non-striated) muscles are spindle-shaped, uninucleate, and involuntary, driving processes like peristalsis in the gut and blood vessel constriction.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'रक्त एवं लसीका अंतर',
    'रक्त और लसीका (Lymph) के बीच मुख्य संरचनात्मक अंतर क्या है?',
    'What is the main structural difference between blood and lymph?',
    ['लसीका में लाल रक्त कणिकाएँ (RBC) तथा प्लेटलेट्स नहीं होते', 'Lymph lacks red blood cells (RBCs) and platelets'],
    [
      ['लसीका में श्वेत रक्त कणिकाएँ (WBC) बिल्कुल नहीं होतीं', 'Lymph contains no white blood cells (WBCs)'],
      ['लसीका का रंग हीमोग्लोबिन के कारण लाल होता है', 'Lymph is red due to haemoglobin'],
      ['लसीका हृदय में उच्च दाब से पंप होती है', 'Lymph is pumped by the heart at high pressure'],
    ],
    'लसीका एक रंगहीन या हल्का पीला तरल संयोजी ऊतक है जो केशिकाओं से छनकर बनता है; इसमें RBC नहीं होतीं, परंतु लिम्फोसाइट्स (WBC) प्रचुर मात्रा में होती हैं।',
    'Lymph is a colourless fluid connective tissue filtered from capillaries; it lacks RBCs and large plasma proteins but is rich in lymphocytes.',
    'MEDIUM'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'न्यूरॉन के भाग',
    'तंत्रिका कोशिका (न्यूरॉन) का वह कौन-सा लंबा प्रवर्ध है जो आवेग को कोशिकाकाय (Cyton) से दूर अन्य कोशिकाओं तक ले जाता है?',
    'Which long projection of a neuron conducts nerve impulses away from the cell body (cyton)?',
    ['तंत्रिकाक्ष (Axon)', 'Axon'],
    [
      ['द्रुमाश्म (Dendrite)', 'Dendrite'],
      ['निसल कणिकाएँ (Nissl granules)', 'Nissl granules'],
      ['सिनेप्टिक दरार', 'Synaptic cleft'],
    ],
    'डेंड्राइट आवेग को ग्रहण कर कोशिकाकाय की ओर लाते हैं, जबकि एकल लंबा एक्सॉन (तंत्रिकाक्ष) आवेग को कोशिकाकाय से दूर सिनेप्स की ओर ले जाता है।',
    'Dendrites receive impulses toward the cell body, whereas the single long axon transmits nerve impulses away from the cyton toward synapses.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'कशेरुकी अस्थि संरचना',
    'स्तनधारियों की अस्थियों (Bones) की सघन आधात्री में पाई जाने वाली विशेष नलिकाएँ क्या कहलाती हैं जिनमें रक्त वाहिकाएँ व तंत्रिकाएँ होती हैं?',
    'What are the specialized canals found in the compact bone matrix of mammals that house blood vessels and nerves called?',
    ['हैवर्सियन नलिकाएँ (Haversian canals)', 'Haversian canals'],
    [
      ['मैलपीघी नलिकाएँ', 'Malpighian tubules'],
      ['यूस्टेशियन नलिका', 'Eustachian tube'],
      ['नेफ्रॉन नलिका', 'Renal tubule'],
    ],
    'स्तनधारियों की कठोर अस्थियों में हैवर्सियन तंत्र पाया जाता है जिसके केंद्र में हैवर्सियन नलिकाएँ और चारों ओर ऑस्टियोसाइट कोशिकाएँ होती हैं।',
    'Mammalian compact bones feature Haversian systems (osteons) with central Haversian canals carrying blood vessels and nerves surrounded by osteocytes.',
    'HARD'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'मनुष्य की त्वचा',
    'मनुष्य की त्वचा का सबसे बाहरी रक्षात्मक स्तर (Epidermis) किस प्रकार के ऊतक से बना होता है?',
    'The outermost protective layer of human skin (Epidermis) is composed of which tissue?',
    ['स्तरित शल्की उपकला (Stratified Squamous Epithelium)', 'Stratified Squamous Epithelium'],
    [
      ['स्तंभाकार उपकला', 'Columnar Epithelium'],
      ['वसीय संयोजी ऊतक', 'Adipose Connective Tissue'],
      ['अरेखित पेशीय ऊतक', 'Smooth Muscular Tissue'],
    ],
    'त्वचा की बाह्य परत में कोशिकाओं की अनेक परतें (स्तरित शल्की उपकला) होती हैं जिनमें केराटिन प्रोटीन जमा रहता है, जो घर्षण व संक्रमण से बचाता है।',
    'Human epidermis consists of stratified squamous keratinized epithelium arranged in multiple layers to prevent wear, tear, and water loss.',
    'MEDIUM'
  ),
];
  // Completing Section 1 to 95 Qs (6 more Qs)
  q(
    'कोशिका एवं कोशिकांग',
    'कोशिका चक्र',
    'कोशिका चक्र की किस अवस्था में डीएनए का द्विगुणन (DNA Replication) होता है?',
    'During which phase of the cell cycle does DNA replication take place?',
    ['S-अवस्था (संश्लेषण अवस्था)', 'S-phase (Synthesis phase)'],
    [
      ['G1-अवस्था', 'G1-phase'],
      ['G2-अवस्था', 'G2-phase'],
      ['M-अवस्था', 'M-phase'],
    ],
    'अंतरावस्था (Interphase) की S-अवस्था में डीएनए की मात्रा दोगुनी हो जाती है, यद्यपि गुणसूत्रों की संख्या समान रहती है।',
    'During the S-phase (synthesis phase) of interphase, DNA content doubles via replication while the chromosome number remains unchanged.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'शैवालों का आर्थिक महत्व',
    'आइसक्रीम और जेली बनाने तथा सूक्ष्मजीव संवर्धन माध्यम के रूप में प्रयुक्त "एगार-एगार" किससे प्राप्त होता है?',
    '"Agar-agar", used in ice-creams, jellies, and microbial culture media, is obtained from which organism?',
    ['लाल शैवाल (जेलिडियम व ग्रेसिलेरिया)', 'Red algae (Gelidium and Gracilaria)'],
    [
      ['भूरे शैवाल (लैमिनेरिया)', 'Brown algae (Laminaria)'],
      ['हरे शैवाल (स्पाइरोगाइरा)', 'Green algae (Spirogyra)'],
      ['नील-हरित शैवाल (नॉस्टॉक)', 'Blue-green algae (Nostoc)'],
    ],
    'एगार-एगार एक जिलेटिनस पदार्थ है जो लाल शैवाल (रोडोफायसी) जैसे जेलिडियम और ग्रेसिलेरिया से प्राप्त किया जाता है।',
    'Agar-agar is a hydrocolloid obtained from red algae (Rhodophyceae) such as Gelidium and Gracilaria.',
    'HARD'
  ),
  q(
    'जीवों का वर्गीकरण',
    'कवक एवं एंटीबायोटिक',
    'प्रथम प्रतिजैविक औषधि "पेनिसिलिन" की खोज अलेक्जेंडर फ्लेमिंग ने किस कवक से की थी?',
    'Alexander Fleming discovered the first antibiotic "Penicillin" from which fungus?',
    ['पेनिसिलियम नोटेटम', 'Penicillium notatum'],
    [
      ['एस्परजिलस नाइजर', 'Aspergillus niger'],
      ['राइजोपस स्टोलोनिफर', 'Rhizopus stolonifer'],
      ['म्यूकर म्यूसिडो', 'Mucor mucedo'],
    ],
    '1928 में अलेक्जेंडर फ्लेमिंग ने पेनिसिलियम नोटेटम नामक कवक (फफूँद) से विश्व की पहली एंटीबायोटिक पेनिसिलिन की खोज की थी।',
    'In 1928, Alexander Fleming discovered the world’s first antibiotic, penicillin, from the mould Penicillium notatum.',
    'EASY'
  ),
  q(
    'पादप एवं जंतु ऊतक',
    'जंतु ऊतक - न्यूरोग्लिया',
    'तंत्रिका ऊतक में न्यूरॉनों को सहारा, पोषण और सुरक्षा प्रदान करने वाली गैर-चालक कोशिकाएँ क्या कहलाती हैं?',
    'What are the non-conducting cells in nervous tissue that support, nourish, and protect neurons called?',
    ['न्यूरोग्लिया (ग्लियल कोशिकाएँ)', 'Neuroglia (Glial cells)'],
    [
      ['ऑस्टियोक्लास्ट', 'Osteoclasts'],
      ['फाइब्रोब्लास्ट', 'Fibroblasts'],
      ['मास्ट कोशिकाएँ', 'Mast cells'],
    ],
    'न्यूरोग्लियल कोशिकाएँ (जैसे एस्ट्रोसाइट्स, ओलिगोडेंड्रोसाइट्स, श्वान कोशिकाएँ) तंत्रिका तंत्र के आधे से अधिक भाग का निर्माण कर न्यूरॉन की सहायता करती हैं।',
    'Neuroglial cells (e.g., astrocytes, oligodendrocytes, Schwann cells) make up over half the volume of neural tissue and support neurons.',
    'HARD'
  ),
  q(
    'कोशिका एवं कोशिकांग',
    'लाइसोसोम की बहुलता',
    'निम्नलिखित में से किस मानव कोशिका में लाइसोसोम सर्वाधिक सक्रिय व प्रचुर मात्रा में पाए जाते हैं?',
    'In which of the following human cells are lysosomes most abundant and active?',
    ['श्वेत रक्त कोशिकाएँ (भक्षकाणु / मैक्रोफेज)', 'White blood cells (Phagocytes / Macrophages)'],
    [
      ['परिपक्व लाल रक्त कोशिकाएँ', 'Mature red blood cells'],
      ['तंत्रिकाक्ष', 'Axon'],
      ['त्वचा की मृत बाह्य परत', 'Dead outer skin layer'],
    ],
    'न्यूट्रोफिल और मैक्रोफेज जैसी भक्षकाणु श्वेत रक्त कोशिकाएँ जीवाणुओं का भक्षण कर उन्हें लाइसोसोम के एंजाइमों से पचाती हैं।',
    'Phagocytic WBCs like neutrophils and macrophages engulf pathogens and destroy them using abundant lysosomal hydrolytic enzymes.',
    'MEDIUM'
  ),
  q(
    'जीवों का वर्गीकरण',
    'द्विबीजपत्री व एकबीजपत्री तना',
    'एकबीजपत्री तने (जैसे मक्का) और द्विबीजपत्री तने (जैसे सूरजमुखी) के संवहन बंडलों में क्या मुख्य अंतर होता है?',
    'What is the key difference in vascular bundles between a monocot stem (maize) and a dicot stem (sunflower)?',
    ['द्विबीजपत्री तने में संवहन बंडल वलय में और कैम्बियम युक्त (खुले) होते हैं, जबकि एकबीजपत्री में बिखरे व बंद होते हैं', 'Dicot stems have open vascular bundles with cambium arranged in a ring, whereas monocot stems have scattered closed bundles'],
    [
      ['एकबीजपत्री तने में द्वितीयक वृद्धि हेतु मोटा कैम्बियम होता है', 'Monocot stems have thick cambium for secondary growth'],
      ['द्विबीजपत्री तने में जाइलम अनुपस्थित होता है', 'Dicot stems lack xylem'],
      ['एकबीजपत्री तने में संवहन बंडल केवल मज्जा में होते हैं', 'Monocot bundles occur only in pith'],
    ],
    'द्विबीजपत्री तनों में जाइलम व फ्लोएम के बीच कैम्बियम (एधा) होता है जिससे द्वितीयक वृद्धि होती है, जबकि एकबीजपत्री तने में कैम्बियम नहीं होता।',
    'Dicot stems have open vascular bundles (with cambium enabling secondary growth) arranged in a ring, while monocot stems have scattered closed bundles without cambium.',
    'HARD'
  ),

  // =========================================================================
  // SECTION 2: मानव शरीर तंत्र (140 Qs — Part A: 70 Qs)
  // =========================================================================
  q(
    'पाचन तंत्र',
    'मानव दंत सूत्र',
    'एक सामान्य वयस्क मनुष्य का दंत सूत्र (Dental Formula) क्या होता है?',
    'What is the dental formula of a normal adult human being?',
    ['2123 / 2123', '2123 / 2123'],
    [
      ['2102 / 2102', '2102 / 2102'],
      ['2122 / 2122', '2122 / 2122'],
      ['3123 / 3123', '3123 / 3123'],
    ],
    'वयस्क मनुष्य के प्रत्येक अर्ध-जबड़े में 2 कृंतक (I), 1 रदनक (C), 2 अग्रचर्वणक (PM) और 3 चर्वणक (M) होते हैं, जिससे कुल 32 दाँत बनते हैं। बच्चों का दूध दंत सूत्र 2102/2102 (20 दाँत) होता है।',
    'Each quadrant of an adult human jaw has 2 incisors, 1 canine, 2 premolars, and 3 molars (2123/2123 × 2 = 32 teeth). Milk teeth formula is 2102/2102 (20 teeth).',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'दाँत का सबसे कठोर भाग',
    'मानव शरीर का सबसे कठोर पदार्थ कौन-सा है जो दाँतों के शिखर (Crown) को ढकता है?',
    'Which is the hardest substance in the human body that covers the crown of teeth?',
    ['इनेमल (दंतवल्क)', 'Enamel'],
    [
      ['डेंटीन (दंतधातु)', 'Dentine'],
      ['सीमेंटम', 'Cementum'],
      ['पल्प गुहा', 'Pulp cavity'],
    ],
    'दाँतों के ऊपर चढ़ी इनेमल की परत कैल्शियम फॉस्फेट व कैल्शियम कार्बोनेट से बनी होती है और यह मानव शरीर का सबसे कठोर ऊतक/पदार्थ है।',
    'Tooth enamel, composed mainly of hydroxyapatite (calcium phosphate), is the hardest mineralized substance in the human body.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'लार एवं पाचन',
    'मनुष्य के मुखगुहा में लार में उपस्थित कौन-सा एंजाइम स्टार्च (मंड) को माल्टोज शर्करा में परिवर्तित करता है?',
    'Which enzyme present in human saliva converts starch into maltose sugar in the buccal cavity?',
    ['टायलिन (लार एमाइलेज)', 'Ptyalin (Salivary amylase)'],
    [
      ['पेप्सिन', 'Pepsin'],
      ['ट्रिप्सिन', 'Trypsin'],
      ['लाइपेज', 'Lipase'],
    ],
    'लार ग्रंथियों से स्रावित टायलिन (Salivary amylase) लगभग 6.8 pH पर लगभग 30% स्टार्च का जल-अपघटन कर उसे माल्टोज में बदल देता है। लार में लाइसोजाइम जीवाणुरोधी कार्य करता है।',
    'Salivary amylase (ptyalin) hydrolyzes about 30% of dietary starch into maltose at pH 6.8; saliva also contains antibacterial lysozyme.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'आमाशय एवं जठर रस',
    'आमाशय की ऑक्सिन्टिक (पार्श्वीय) कोशिकाओं द्वारा स्रावित हाइड्रोक्लोरिक अम्ल (HCl) का मुख्य कार्य क्या है?',
    'What is the main function of Hydrochloric Acid (HCl) secreted by oxyntic (parietal) cells of the stomach?',
    ['भोजन के जीवाणुओं को नष्ट करना तथा निष्क्रिय पेप्सिनोजन को सक्रिय पेप्सिन में बदलना', 'To kill ingested bacteria and activate inactive pepsinogen into active pepsin'],
    [
      ['वसा का पायसीकरण करना', 'To emulsify dietary fats'],
      ['स्टार्च को ग्लूकोज में बदलना', 'To convert starch directly into glucose'],
      ['अग्न्याशय में इंसुलिन का स्राव बढ़ाना', 'To stimulate insulin secretion in pancreas'],
    ],
    'आमाशय का HCl माध्यम को अम्लीय (pH ~1.8) बनाता है जिससे सूक्ष्मजीव मर जाते हैं और पेप्सिनोजन सक्रिय पेप्सिन में बदलकर प्रोटीन का पाचन आरंभ करता है।',
    'Gastric HCl creates an acidic medium (pH ~1.8) that kills microbes and converts inactive pepsinogen into active pepsin for protein digestion.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'दुग्ध प्रोटीन पाचन',
    'शिशुओं के आमाशय में दूध के कैसीन प्रोटीन को पचाने वाला प्रमुख एंजाइम कौन-सा है?',
    'Which enzyme present in the gastric juice of infants helps digest milk casein protein?',
    ['रेनिन (Rennin)', 'Rennin'],
    [
      ['इरेप्सिन (Erepsin)', 'Erepsin'],
      ['माल्टेज (Maltase)', 'Maltase'],
      ['न्यूक्लिएज (Nuclease)', 'Nuclease'],
    ],
    'रेनिन (काइमोसिन) नवजात स्तनधारियों के जठर रस में पाया जाता है जो घुलनशील दूध प्रोटीन कैसीन को अघुलनशील कैल्शियम पैराकैसीनेट (दही जैसे रूप) में बदलता है।',
    'Rennin (chymosin) in infants’ gastric juice curdles milk by converting soluble casein into insoluble calcium paracaseinate for easier digestion by pepsin.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'यकृत एवं पित्त रस',
    'मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है, और इसके द्वारा स्रावित पित्त रस (Bile) में कौन-सा पाचक एंजाइम होता है?',
    'Which is the largest gland in the human body, and which digestive enzyme is present in the bile it secretes?',
    ['यकृत (लिवर); पित्त रस में कोई पाचक एंजाइम नहीं होता', 'Liver; bile contains no digestive enzymes'],
    [
      ['अग्न्याशय; पेप्सिन एंजाइम', 'Pancreas; pepsin enzyme'],
      ['यकृत; एमाइलेज एंजाइम', 'Liver; amylase enzyme'],
      ['लार ग्रंथि; ट्रिप्सिन एंजाइम', 'Salivary gland; trypsin enzyme'],
    ],
    'यकृत मानव शरीर की सबसे बड़ी ग्रंथि है। यह पित्त रस बनाता है जो पित्ताशय में संचित होता है। पित्त में कोई एंजाइम नहीं होता, परंतु इसके पित्त लवण वसा का पायसीकरण (Emulsification) करते हैं।',
    'The liver is the largest gland in the human body. Bile secreted by the liver contains no enzymes, but bile salts emulsify fats into tiny droplets.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'अग्न्याशय रस',
    'अग्न्याशय (Pancreas) को "मिश्रित ग्रंथि" (Mixed Gland) क्यों कहा जाता है?',
    'Why is the Pancreas called a "Mixed Gland" (Heterocrine gland)?',
    ['क्योंकि यह बहिःस्रावी भाग से पाचक एंजाइम तथा अंतःस्रावी भाग से हार्मोन दोनों स्रावित करती है', 'Because it secretes both digestive enzymes (exocrine) and hormones (endocrine)'],
    [
      ['क्योंकि यह केवल वसा और प्रोटीन दोनों का पाचन करती है', 'Because it digests only fats and proteins'],
      ['क्योंकि यह आमाशय और यकृत दोनों से जुड़ी होती है', 'Because it is connected to both stomach and liver'],
      ['क्योंकि इसमें लाल और श्वेत दोनों रक्त कणिकाएँ बनती हैं', 'Because it produces both RBCs and WBCs'],
    ],
    'अग्न्याशय का बहिःस्रावी भाग पूर्ण पाचक रस (ट्रिप्सिन, एमाइलेज, लाइपेज) नलिका द्वारा ग्रहणी में छोड़ता है, जबकि अंतःस्रावी भाग (लैंगरहैन्स द्वीपिकाएँ) रक्त में इंसुलिन व ग्लूकागन छोड़ता है।',
    'The exocrine acini of the pancreas secrete digestive enzymes (trypsin, amylase, lipase), while its endocrine Islets of Langerhans secrete insulin and glucagon.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'भोजन का पूर्ण पाचन',
    'मनुष्य की आहार नाल के किस भाग में भोजन का पाचन और अवशोषण मुख्य रूप से पूर्ण होता है?',
    'In which part of the human alimentary canal is digestion and absorption of food primarily completed?',
    ['छोटी आंत (क्षुद्रांत्र / Small Intestine)', 'Small intestine'],
    [
      ['आमाशय (Stomach)', 'Stomach'],
      ['बड़ी आंत (Large Intestine)', 'Large intestine'],
      ['ग्रासनली (Oesophagus)', 'Oesophagus'],
    ],
    'छोटी आंत (ग्रहणी, मध्यांत्र व शेषांत्र) में कार्बोहाइड्रेट, प्रोटीन और वसा का पूर्ण पाचन होता है तथा इसकी आंतरिक भित्ति में स्थित रसांकुर (Villi) पचे पोषक तत्वों का अवशोषण करते हैं।',
    'Complete digestion of carbohydrates, proteins, and fats occurs in the small intestine, where finger-like villi greatly increase surface area for absorption.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'बड़ी आंत का कार्य',
    'मनुष्य की बड़ी आंत (वृहदांत्र) का मुख्य कार्य क्या है?',
    'What is the primary function of the human large intestine?',
    ['अतिरिक्त जल, खनिज लवणों तथा कुछ औषधियों का अवशोषण करना', 'Absorption of remaining water, minerals, and certain drugs'],
    [
      ['प्रोटीन का अमीनो अम्ल में पूर्ण पाचन करना', 'Complete digestion of proteins into amino acids'],
      ['पित्त रस का संश्लेषण करना', 'Synthesis of bile juice'],
      ['इंसुलिन हार्मोन का स्राव करना', 'Secretion of insulin hormone'],
    ],
    'बड़ी आंत में कोई महत्वपूर्ण पाचन क्रिया नहीं होती; यह अपचित अवशेषों से जल व विद्युत-अपघट्यों का अवशोषण करती है और सहजीवी जीवाणु (E. coli) यहाँ विटामिन K व B12 बनाते हैं।',
    'No significant digestion occurs in the large intestine; it absorbs water and electrolytes and forms faeces, while symbiotic bacteria synthesize vitamin K and B12.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'रसांकुर एवं लैक्टियल',
    'छोटी आंत के रसांकुरों (Villi) में वसा अम्ल और ग्लिसरॉल का अवशोषण मुख्यतः किस वाहिका द्वारा होता है?',
    'In the villi of the small intestine, fatty acids and glycerol are primarily absorbed into which vessel?',
    ['लैक्टियल (लसीका वाहिका)', 'Lacteal (Lymph vessel)'],
    [
      ['यकृत निवाहिका शिरा', 'Hepatic portal vein'],
      ['फुफ्फुसीय धमनी', 'Pulmonary artery'],
      ['वृक्क शिरा', 'Renal vein'],
    ],
    'अमीनो अम्ल और मोनोसैकेराइड रक्त केशिकाओं में अवशोषित होते हैं, जबकि वसा अम्ल व ग्लिसरॉल काइलोमाइक्रोन के रूप में लसीका वाहिका "लैक्टियल" में जाते हैं।',
    'Glucose and amino acids enter blood capillaries, whereas fatty acids and glycerol are absorbed as chylomicrons into lymph vessels called lacteals.',
    'HARD'
  ),
  q(
    'पाचन तंत्र',
    'अवशोषण के अंतिम उत्पाद',
    'प्रोटीन, कार्बोहाइड्रेट और वसा के पूर्ण पाचन से प्राप्त अंतिम अवशोष्य उत्पाद क्रमशः क्या हैं?',
    'What are the final absorbable end products of complete digestion of proteins, carbohydrates, and fats respectively?',
    ['अमीनो अम्ल, मोनोसैकेराइड (ग्लूकोज), तथा वसा अम्ल व ग्लिसरॉल', 'Amino acids, monosaccharides (glucose), and fatty acids + glycerol'],
    [
      ['पेप्टोन, माल्टोज और कोलेस्ट्रॉल', 'Peptones, maltose, and cholesterol'],
      ['पॉलीपेप्टाइड, स्टार्च और ट्राइग्लिसराइड', 'Polypeptides, starch, and triglycerides'],
      ['यूरिया, सुक्रोज और फॉस्फोलिपिड', 'Urea, sucrose, and phospholipids'],
    ],
    'पाचन के उपरांत प्रोटीन अमीनो अम्लों में, जटिल कार्बोहाइड्रेट ग्लूकोज जैसे मोनोसैकेराइड्स में तथा वसा वसा अम्ल और ग्लिसरॉल में टूट जाते हैं।',
    'Upon complete digestion, proteins break into amino acids, carbohydrates into simple monosaccharides like glucose, and fats into fatty acids and glycerol.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'ग्रासनली एवं क्रमाकुंचन',
    'ग्रासनली (Oesophagus) में भोजन को नीचे आमाशय की ओर धकेलने वाली तरंगवत पेशीय गति क्या कहलाती है?',
    'What is the wave-like muscular movement that pushes food down the oesophagus toward the stomach called?',
    ['क्रमाकुंचन (Peristalsis)', 'Peristalsis'],
    [
      ['विलयन (Dissolution)', 'Dissolution'],
      ['इमल्सीकरण (Emulsification)', 'Emulsification'],
      ['निस्पंदन (Filtration)', 'Filtration'],
    ],
    'आहार नाल की भित्ति में होने वाले लयबद्ध संकुचन एवं शिथिलन को क्रमाकुंचन (Peristalsis) कहते हैं, जिससे भोजन बिना गुरुत्व के भी आगे बढ़ता है।',
    'Rhythmic waves of contraction and relaxation of smooth muscles in the alimentary canal wall are called peristalsis, propelling food forward.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'यकृत के कार्य',
    'मानव शरीर में अतिरिक्त ग्लूकोज को ग्लाइकोजन के रूप में संचित करने वाला प्रमुख अंग कौन-सा है?',
    'Which major organ stores excess glucose in the form of glycogen in the human body?',
    ['यकृत (तथा कंकाल पेशियाँ)', 'Liver (and skeletal muscles)'],
    [
      ['अग्न्याशय', 'Pancreas'],
      ['प्लीहा', 'Spleen'],
      ['वृक्क', 'Kidney'],
    ],
    'इंसुलिन के प्रभाव से यकृत ग्लाइकोजेनेसिस द्वारा अतिरिक्त ग्लूकोज को ग्लाइकोजन में बदलकर संचित करता है और आवश्यकता पड़ने पर ग्लूकागन की सहायता से पुनः ग्लूकोज देता है।',
    'Under the action of insulin, the liver converts excess blood glucose into glycogen (glycogenesis) and stores it alongside skeletal muscles.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'सक्कस एंटेरिकस',
    'आंत्र रस (Succus entericus) में उपस्थित कौन-सा एंजाइम अग्न्याशय रस के निष्क्रिय ट्रिप्सिनोजन को सक्रिय ट्रिप्सिन में बदलता है?',
    'Which enzyme of intestinal juice (succus entericus) activates inactive trypsinogen of pancreatic juice into active trypsin?',
    ['एंटरोकाइनेज (Enterokinase)', 'Enterokinase'],
    [
      ['पेप्सिन (Pepsin)', 'Pepsin'],
      ['लाइपेज (Lipase)', 'Lipase'],
      ['लैक्टेज (Lactase)', 'Lactase'],
    ],
    'छोटी आंत की श्लेष्मिका द्वारा स्रावित एंटरोकाइनेज ट्रिप्सिनोजन को सक्रिय ट्रिप्सिन में बदलता है, जो आगे अन्य अग्न्याशयी प्रोटिएज एंजाइमों को सक्रिय करता है।',
    'Enterokinase, secreted by the intestinal mucosa, converts trypsinogen into active trypsin, which in turn activates other pancreatic zymogens.',
    'HARD'
  ),
  q(
    'पाचन तंत्र',
    'एपिग्लॉटिस',
    'भोजन निगलते समय श्वासनली (Trachea) के प्रवेश द्वार (Glottis) को ढकने वाला उपास्थिमय फ्लैप क्या कहलाता है?',
    'What is the cartilaginous flap that covers the glottis during swallowing to prevent food from entering the windpipe?',
    ['एपिग्लॉटिस (घाँटी ढक्कन)', 'Epiglottis'],
    [
      ['यूवुला (Uvula)', 'Uvula'],
      ['लैरिंक्स (Larynx)', 'Larynx'],
      ['फैरिंक्स (Pharynx)', 'Pharynx'],
    ],
    'एपिग्लॉटिस एक पत्ती जैसा उपास्थिमय ढक्कन है जो भोजन निगलते समय श्वासनली को बंद कर देता है ताकि भोजन केवल ग्रासनली में जाए।',
    'The epiglottis is an elastic cartilaginous flap that closes over the glottis when swallowing, preventing aspiration of food into the trachea.',
    'EASY'
  ),
  q(
    'पाचन तंत्र',
    'अवशेषी अंग',
    'मनुष्य की बड़ी आंत के सीकम (Caecum) भाग से जुड़ी अँगुली जैसी अवशेषी रचना क्या कहलाती है?',
    'What is the finger-like vestigial projection arising from the caecum of the human large intestine called?',
    ['कृमिरूप परिशेषिका (वर्मीफॉर्म अपेंडिक्स)', 'Vermiform appendix'],
    [
      ['इलियो-सीकल कपाट', 'Ileocaecal valve'],
      ['पाइलोरिक अवरोधिनी', 'Pyloric sphincter'],
      ['जेजुनम', 'Jejunum'],
    ],
    'वर्मीफॉर्म अपेंडिक्स शाकाहारी पूर्वजों में सेल्यूलोज पाचन से जुड़ा था, परंतु मनुष्य में यह एक अवशेषी अंग है; इसमें संक्रमण होने पर अपेंडिसाइटिस होता है।',
    'The vermiform appendix arises from the caecum and is a vestigial organ in humans; its inflammation causes appendicitis.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'शाकाहारी बनाम मांसाहारी आंत',
    'शाकाहारी जंतुओं (जैसे गाय, हिरण) की छोटी आंत मांसाहारी जंतुओं (जैसे शेर) की तुलना में अधिक लंबी क्यों होती है?',
    'Why is the small intestine of herbivores (like cows and deer) longer than that of carnivores (like lions)?',
    ['क्योंकि पादप कोशिकाओं के सेल्यूलोज को पचाने में अधिक समय लगता है', 'Because cellulose in plant matter takes longer to digest'],
    [
      ['क्योंकि शाकाहारी जंतु अधिक पानी पीते हैं', 'Because herbivores drink more water'],
      ['क्योंकि मांस में कोई प्रोटीन नहीं होता', 'Because meat contains no protein'],
      ['क्योंकि शाकाहारियों में आमाशय नहीं होता', 'Because herbivores lack a stomach'],
    ],
    'सेल्यूलोज एक जटिल कार्बोहाइड्रेट है जिसके धीमे पाचन व किण्वन के लिए अधिक सतह क्षेत्र और समय की आवश्यकता होती है; मांस अपेक्षाकृत शीघ्र पच जाता है।',
    'Cellulose is a complex plant polysaccharide requiring slower microbial/enzymatic breakdown and greater surface area, whereas meat is digested relatively rapidly.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'पित्त वर्णक',
    'पित्त रस का पीला-हरा रंग हीमोग्लोबिन के विघटन से बने किन दो पित्त वर्णकों के कारण होता है?',
    'The yellowish-green colour of bile is due to which two bile pigments formed by haemoglobin breakdown?',
    ['बिलिरुबिन और बिलिवर्डिन', 'Bilirubin and Biliverdin'],
    [
      ['मेलानिन और कैरोटीन', 'Melanin and Carotene'],
      ['यूरोक्रोम और मायोग्लोबिन', 'Urochrome and Myoglobin'],
      ['हीमोसायनिन और रोडोप्सिन', 'Haemocyanin and Rhodopsin'],
    ],
    'पुरानी लाल रक्त कणिकाओं के नष्ट होने पर हीमोग्लोबिन के हीम भाग से बिलिरुबिन (पीला) और बिलिवर्डिन (हरा) वर्णक बनते हैं। रक्त में बिलिरुबिन बढ़ने से पीलिया (Jaundice) होता है।',
    'Breakdown of haemoglobin from worn-out RBCs yields bilirubin (yellow) and biliverdin (green). Excess bilirubin in blood causes jaundice.',
    'HARD'
  ),
  q(
    'पाचन तंत्र',
    'पाचन तंत्र ग्रंथियाँ',
    'मानव में सबसे बड़ी लार ग्रंथि कौन-सी है जो कान के नीचे स्थित होती है और गलसुआ (Mumps) रोग में सूज जाती है?',
    'Which is the largest salivary gland in humans, located near the ear and swollen during Mumps?',
    ['कर्णपूर्व ग्रंथि (पैरोटिड ग्रंथि)', 'Parotid gland'],
    [
      ['अधोजिह्वा ग्रंथि (Sublingual)', 'Sublingual gland'],
      ['अधोहनु ग्रंथि (Submandibular)', 'Submandibular gland'],
      ['लैक्रिमल ग्रंथि', 'Lacrimal gland'],
    ],
    'मनुष्य में तीन जोड़ी लार ग्रंथियाँ होती हैं—पैरोटिड (सबसे बड़ी), सबमैंडिबुलर और सबलिंगुअल। मम्प्स विषाणु पैरोटिड ग्रंथि को संक्रमित करता है।',
    'Humans have three pairs of salivary glands: parotid (largest), submandibular, and sublingual. Mumps virus causes painful swelling of the parotid glands.',
    'MEDIUM'
  ),
  q(
    'पाचन तंत्र',
    'कार्बोहाइड्रेट पाचन',
    'निम्नलिखित में से कौन-सा एंजाइम दूध की शर्करा "लैक्टोज" को ग्लूकोज तथा गैलेक्टोज में तोड़ता है?',
    'Which enzyme breaks down milk sugar "Lactose" into glucose and galactose?',
    ['लैक्टेज (Lactase)', 'Lactase'],
    [
      ['सुक्रेज (Sucrase)', 'Sucrase'],
      ['माल्टेज (Maltase)', 'Maltase'],
      ['पेप्सिन (Pepsin)', 'Pepsin'],
    ],
    'छोटी आंत के आंत्र रस में स्थित लैक्टेज एंजाइम लैक्टोज को ग्लूकोज + गैलेक्टोज में तोड़ता है। इसकी कमी से लैक्टोज असहिष्णुता (Lactose intolerance) होती है।',
    'Intestinal lactase hydrolyzes lactose into glucose and galactose; lactase deficiency leads to lactose intolerance.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'मनुष्य की श्वसन दर',
    'एक स्वस्थ वयस्क मनुष्य में विश्राम अवस्था के दौरान सामान्य श्वसन दर (प्रति मिनट साँसें) कितनी होती है?',
    'What is the normal breathing rate (breaths per minute) of a healthy adult human at rest?',
    ['12 से 16 बार प्रति मिनट', '12 to 16 times per minute'],
    [
      ['40 से 50 बार प्रति मिनट', '40 to 50 times per minute'],
      ['70 से 75 बार प्रति मिनट', '70 to 75 times per minute'],
      ['4 से 6 बार प्रति मिनट', '4 to 6 times per minute'],
    ],
    'एक स्वस्थ वयस्क विश्राम की स्थिति में प्रति मिनट 12–16 बार श्वास लेता है। प्रति मिनट हृदय स्पंदन दर (लगभग 72) इससे भिन्न होती है।',
    'A healthy adult breathes 12–16 times per minute at rest (distinct from the heart rate of ~72 beats per minute).',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'गैसों का विनिमय',
    'मानव फेफड़ों की कौन-सी संरचनात्मक एवं क्रियात्मक इकाई रक्त और वायु के बीच गैसों (O2 व CO2) का वास्तविक विनिमय करती है?',
    'Which structural and functional unit of human lungs performs the actual exchange of O2 and CO2 with blood?',
    ['कूपिकाएँ (Alveoli)', 'Alveoli'],
    [
      ['श्वसनी (Bronchi)', 'Bronchi'],
      ['श्वासनली (Trachea)', 'Trachea'],
      ['स्वरयंत्र (Larynx)', 'Larynx'],
    ],
    'फेफड़ों में लाखों सूक्ष्म गुब्बारे जैसी कूपिकाएँ (Alveoli) होती हैं जिनकी अत्यंत पतली भित्ति और केशिका जाल के कारण विसरण द्वारा गैसों का आदान-प्रदान होता है।',
    'Lungs contain millions of tiny thin-walled air sacs called alveoli surrounded by blood capillaries, providing huge surface area for gas diffusion.',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'ऑक्सीजन परिवहन',
    'मानव रक्त में ऑक्सीजन का लगभग 97% परिवहन किस रूप में होता है?',
    'Approximately 97% of oxygen in human blood is transported in which form?',
    ['हीमोग्लोबिन से जुड़कर ऑक्सीहीमोग्लोबिन के रूप में', 'Bound to haemoglobin as oxyhaemoglobin'],
    [
      ['प्लाज्मा में बाइकार्बोनेट के रूप में', 'As bicarbonate in plasma'],
      ['प्लाज्मा में सीधे घुली हुई अवस्था में', 'Simply dissolved in plasma'],
      ['कार्बामिनो-हीमोग्लोबिन के रूप में', 'As carbaminohaemoglobin'],
    ],
    'लगभग 97% O2 लाल रक्त कोशिकाओं के हीमोग्लोबिन से जुड़कर ऑक्सीहीमोग्लोबिन बनाती है और 3% प्लाज्मा में घुलकर जाती है। एक हीमोग्लोबिन अणु अधिकतम 4 O2 अणु ले जाता है।',
    'Around 97% of O2 binds reversibly to haemoglobin to form oxyhaemoglobin (each Hb binds up to 4 O2 molecules), while 3% travels dissolved in plasma.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'कार्बन डाइऑक्साइड परिवहन',
    'मानव रक्त में कार्बन डाइऑक्साइड (CO2) का सर्वाधिक (लगभग 70%) परिवहन किस रूप में होता है?',
    'The largest proportion (about 70%) of carbon dioxide (CO2) in human blood is transported in which form?',
    ['बाइकार्बोनेट आयनों (HCO3⁻) के रूप में', 'As bicarbonate ions (HCO3⁻)'],
    [
      ['ऑक्सीहीमोग्लोबिन के रूप में', 'As oxyhaemoglobin'],
      ['केवल प्लाज्मा में घुलकर', 'Only dissolved in plasma'],
      ['कार्बोनेट चट्टानों के रूप में', 'As solid carbonate'],
    ],
    'लगभग 70% CO2 कार्बोनिक एनहाइड्रेज एंजाइम की सहायता से बाइकार्बोनेट (HCO3⁻) के रूप में, 20–25% कार्बामिनो-हीमोग्लोबिन के रूप में और 7% प्लाज्मा में घुलकर जाती है।',
    'About 70% of CO2 is transported as bicarbonate ions (catalyzed by carbonic anhydrase), 20–25% as carbaminohaemoglobin, and 7% dissolved in plasma.',
    'HARD'
  ),
  q(
    'श्वसन तंत्र',
    'डायाफ्राम की भूमिका',
    'अंतःश्वसन (Inspiration / साँस अंदर खींचते समय) के दौरान वक्ष गुहा का आयतन कैसे बढ़ता है?',
    'During inspiration (inhalation), how does the volume of the thoracic cavity increase?',
    ['डायाफ्राम संकुचित होकर चपटा (नीचे) हो जाता है और पसलियाँ ऊपर व बाहर उठती हैं', 'The diaphragm contracts and flattens downward while ribs lift upward and outward'],
    [
      ['डायाफ्राम शिथिल होकर ऊपर गुंबद जैसा हो जाता है', 'The diaphragm relaxes into an upward dome'],
      ['बाह्य अंतरापर्शुक पेशियाँ शिथिल हो जाती हैं', 'External intercostal muscles relax'],
      ['फेफड़ों के अंदर दाब वायुमंडलीय दाब से अधिक हो जाता है', 'Intrapulmonary pressure rises above atmospheric pressure'],
    ],
    'अंतःश्वसन एक सक्रिय प्रक्रिया है जिसमें डायाफ्राम नीचे व बाह्य अंतरापर्शुक पेशियाँ पसलियों को बाहर खींचती हैं, जिससे वक्ष आयतन बढ़ता है और दाब कम होने से हवा अंदर आती है।',
    'During inhalation, contraction of the diaphragm (flattening it) and external intercostal muscles expands the thorax, lowering intrapulmonary pressure below atmospheric pressure.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'ग्लाइकोलिसिस',
    'कोशिकीय श्वसन का प्रथम चरण "ग्लाइकोलिसिस" कोशिका के किस भाग में संपन्न होता है और इसमें ऑक्सीजन की क्या भूमिका होती है?',
    'Where does "Glycolysis", the first stage of cellular respiration, take place, and what is the role of oxygen in it?',
    ['कोशिकाद्रव्य (Cytoplasm) में; इसमें ऑक्सीजन की आवश्यकता नहीं होती', 'In the cytoplasm; it does not require oxygen'],
    [
      ['माइटोकॉन्ड्रिया के मैट्रिक्स में; ऑक्सीजन आवश्यक है', 'In mitochondrial matrix; oxygen is mandatory'],
      ['हरितलवक के स्ट्रोमा में; केवल प्रकाश में होता है', 'In chloroplast stroma; occurs only in light'],
      ['केंद्रक में; यह अवायवीय नहीं हो सकता', 'In nucleus; cannot occur anaerobically'],
    ],
    'ग्लाइकोलिसिस (EMP पथ) कोशिकाद्रव्य में होता है, जिसमें 1 ग्लूकोज अणु (6C) बिना ऑक्सीजन की उपस्थिति के पाइरूवेट (3C) के 2 अणुओं में टूटता है।',
    'Glycolysis (EMP pathway) occurs in the cytoplasm of all living cells without requiring oxygen, breaking one 6-carbon glucose into two 3-carbon pyruvate molecules.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'क्रेब्स चक्र',
    'वायवीय श्वसन के दौरान पाइरूवेट का पूर्ण ऑक्सीकरण करने वाला "क्रेब्स चक्र" (सिट्रिक अम्ल चक्र) कहाँ संपन्न होता है?',
    'Where does the "Krebs Cycle" (Citric Acid Cycle) for complete oxidation of pyruvate occur during aerobic respiration?',
    ['माइटोकॉन्ड्रिया के मैट्रिक्स में', 'In the mitochondrial matrix'],
    [
      ['कोशिकाद्रव्य में', 'In the cytoplasm'],
      ['गॉल्जीकाय की सिस्टर्नी में', 'In Golgi cisternae'],
      ['राइबोसोम की सतह पर', 'On the surface of ribosomes'],
    ],
    'हैंस क्रेब्स द्वारा खोजा गया सिट्रिक अम्ल चक्र यूकैरियोट्स के माइटोकॉन्ड्रिया के मैट्रिक्स में होता है तथा इसमें NADH और FADH2 बनते हैं।',
    'The Krebs (citric acid) cycle occurs in the mitochondrial matrix in eukaryotes, generating NADH, FADH2, and GTP/ATP while releasing CO2.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'वायवीय व अवायवीय श्वसन',
    'ग्लूकोज के एक अणु के पूर्ण वायवीय ऑक्सीकरण से लगभग कितने ATP अणुओं की शुद्ध ऊर्जा प्राप्त होती है?',
    'Approximately how many net ATP molecules are yielded by the complete aerobic oxidation of one molecule of glucose?',
    ['36 से 38 ATP', '36 to 38 ATP'],
    [
      ['2 ATP', '2 ATP'],
      ['8 ATP', '8 ATP'],
      ['100 ATP', '100 ATP'],
    ],
    'वायवीय श्वसन (ग्लाइकोलिसिस + क्रेब्स चक्र + इलेक्ट्रॉन परिवहन तंत्र) से प्रति ग्लूकोज 36–38 ATP प्राप्त होते हैं, जबकि अवायवीय श्वसन/किण्वन से केवल 2 ATP मिलते हैं।',
    'Complete aerobic respiration yields 36–38 ATP per glucose molecule, whereas anaerobic respiration/fermentation yields only 2 ATP.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'पेशी थकान',
    'अत्यधिक व्यायाम के समय ऑक्सीजन की कमी के कारण मानव पेशियों में किस अम्ल के जमाव से ऐंठन व थकान होती है?',
    'During vigorous exercise, oxygen deficit causes the accumulation of which acid in human muscles, leading to cramps and fatigue?',
    ['लैक्टिक अम्ल (Lactic acid)', 'Lactic acid'],
    [
      ['एसिटिक अम्ल (Acetic acid)', 'Acetic acid'],
      ['यूरिक अम्ल (Uric acid)', 'Uric acid'],
      ['ऑक्सैलिक अम्ल (Oxalic acid)', 'Oxalic acid'],
    ],
    'तीव्र व्यायाम में पेशियों को पर्याप्त O2 न मिलने पर पाइरूवेट अवायवीय रूप से लैक्टिक अम्ल में बदल जाता है, जिससे मांसपेशियों में दर्द व थकान होती है।',
    'Under oxygen deficit during intense exercise, muscle cells convert pyruvate into lactic acid anaerobically, resulting in muscle fatigue and cramps.',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'श्वासनली की संरचना',
    'मानव श्वासनली (Trachea) को हवा न होने पर भी पिचकने से रोकने के लिए इसमें क्या पाया जाता है?',
    'What prevents the human trachea (windpipe) from collapsing even when there is little air in it?',
    ['C-आकार के उपास्थि वलय (Cartilaginous rings)', 'C-shaped cartilaginous rings'],
    [
      ['अस्थियों के पूर्ण ठोस वलय', 'Complete solid bony rings'],
      ['काइटिन की मोटी परत', 'Thick chitin layer'],
      ['केवल लसीका द्रव का दाब', 'Lymph fluid pressure alone'],
    ],
    'श्वासनली में हायलिन उपास्थि के अपूर्ण (C-आकार के) छल्ले होते हैं जो इसे सदैव खुला रखते हैं और भोजन नली को फैलने का स्थान भी देते हैं।',
    'Incomplete C-shaped hyaline cartilage rings support the trachea so it never collapses during inhalation, while allowing the adjacent oesophagus to expand.',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'ज्वारीय आयतन',
    'सामान्य श्वसन क्रिया के समय प्रति श्वास अंदर ली जाने वाली या बाहर निकाली जाने वाली वायु का आयतन (Tidal Volume) एक स्वस्थ वयस्क में लगभग कितना होता है?',
    'What is the approximate Tidal Volume (air inspired or expired during normal quiet breathing) in a healthy adult human?',
    ['500 मिलीलीटर', '500 mL'],
    [
      ['1500 मिलीलीटर', '1500 mL'],
      ['3000 मिलीलीटर', '3000 mL'],
      ['50 मिलीलीटर', '50 mL'],
    ],
    'सामान्य अवस्था में प्रति श्वास लगभग 500 mL वायु अंदर ली या बाहर छोड़ी जाती है (ज्वारीय आयतन), जो 12–16 बार प्रति मिनट के हिसाब से 6000–8000 mL/मिनट होती है।',
    'Tidal volume (TV) during normal breathing is roughly 500 mL per breath, totalling about 6000–8000 mL of air per minute.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'श्वसन नियंत्रण केंद्र',
    'मानव मस्तिष्क का कौन-सा भाग श्वसन दर (Respiratory Rhythm) को नियंत्रित करने का प्रमुख केंद्र है?',
    'Which part of the human brain serves as the primary respiratory rhythm centre?',
    ['मेडुला ऑब्लांगेटा (तथा पॉन्स)', 'Medulla oblongata (and Pons)'],
    [
      ['अनुमस्तिष्क (सेरेबेलम)', 'Cerebellum'],
      ['घ्राण पिंड', 'Olfactory lobe'],
      ['पीयूष ग्रंथि', 'Pituitary gland'],
    ],
    'मस्तिष्क के मेडुला ऑब्लांगेटा में श्वसन लय केंद्र होता है जो रक्त में CO2 व H⁺ आयन की सांद्रता के अनुसार श्वसन दर को नियंत्रित करता है; पॉन्स में न्यूमोटैक्सिक केंद्र इसकी अवधि संतुलित करता है।',
    'The respiratory rhythm centre in the medulla oblongata regulates breathing primarily in response to blood CO2 and H+ levels, fine-tuned by the pneumotaxic centre in the pons.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'कार्बन मोनोऑक्साइड विषाक्तता',
    'बंद कमरे में कोयले की अंगीठी जलाकर सोने से मृत्यु क्यों हो सकती है?',
    'Why can sleeping in a closed room with a burning coal brazier be fatal?',
    ['क्योंकि कार्बन मोनोऑक्साइड (CO) हीमोग्लोबिन से ऑक्सीजन की तुलना में 200–300 गुना अधिक तेजी से जुड़कर कार्बोक्सीहीमोग्लोबिन बनाती है', 'Because Carbon Monoxide (CO) binds haemoglobin 200–300 times more strongly than O2, forming carboxyhaemoglobin'],
    [
      ['क्योंकि कार्बन डाइऑक्साइड फेफड़ों को जमा देती है', 'Because CO2 freezes the alveoli'],
      ['क्योंकि नाइट्रोजन गैस रक्त को थक्का बना देती है', 'Because nitrogen clots the blood'],
      ['क्योंकि मीथेन गैस लाल रक्त कणिकाओं को फोड़ देती है', 'Because methane ruptures RBCs'],
    ],
    'अपूर्ण दहन से उत्पन्न CO हीमोग्लोबिन के साथ स्थायी कार्बोक्सीहीमोग्लोबिन बना लेती है जिससे ऊतकों को ऑक्सीजन नहीं मिल पाती और दम घुटने से मृत्यु हो जाती है।',
    'Incomplete combustion emits CO, which has ~200–300 times higher affinity for haemoglobin than O2, forming stable carboxyhaemoglobin and causing tissue hypoxia.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'फुफ्फुसावरण (Pleura)',
    'मानव फेफड़ों को घेरने वाली द्वि-स्तरीय सुरक्षात्मक झिल्ली क्या कहलाती है?',
    'What is the double-layered protective membrane surrounding the human lungs called?',
    ['प्लूरा (फुफ्फुसावरण)', 'Pleura'],
    [
      ['पेरिकार्डियम (हृदयावरण)', 'Pericardium'],
      ['मेनिन्जेस (मस्तिष्कावरण)', 'Meninges'],
      ['पेरिटोनियम', 'Peritoneum'],
    ],
    'फेफड़े दोहरी झिल्ली "प्लूरा" से ढके रहते हैं जिनके बीच प्लूरल द्रव होता है जो श्वसन के समय घर्षण कम करता है। हृदय को पेरिकार्डियम तथा मस्तिष्क को मेनिन्जेस घेरते हैं।',
    'The lungs are enclosed by a double-layered pleura containing pleural fluid to reduce friction during breathing. Heart has pericardium and brain has meninges.',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'पर्वतारोहियों में श्वसन',
    'अधिक ऊँचाई (पहाड़ों) पर जाने पर मनुष्य में श्वसन दर और लाल रक्त कणिकाओं (RBC) की संख्या क्यों बढ़ जाती है?',
    'Why do breathing rate and RBC count increase when a person stays at high altitudes?',
    ['वायुमंडलीय दाब व ऑक्सीजन के आंशिक दाब की कमी की भरपाई करने के लिए', 'To compensate for lower atmospheric pressure and reduced partial pressure of oxygen'],
    [
      ['ऊँचाई पर वायु में ऑक्सीजन की प्रतिशत मात्रा 5% हो जाने के कारण', 'Because oxygen percentage drops to 5% at altitude'],
      ['ठंड के कारण हृदय के सिकुड़ जाने से', 'Because the heart shrinks in cold weather'],
      ['ऊँचाई पर गुरुत्वाकर्षण शून्य हो जाने से', 'Because gravity becomes zero at high altitude'],
    ],
    'ऊँचाई पर हवा विरल होने से O2 का आंशिक दाब कम हो जाता है। इसकी पूर्ति के लिए शरीर श्वसन दर तथा एरिथ्रोपोइटिन द्वारा RBC उत्पादन बढ़ा देता है।',
    'At high altitudes, lower barometric pressure reduces O2 partial pressure; the body acclimatizes by increasing ventilation and stimulating RBC production.',
    'HARD'
  ),
  q(
    'श्वसन तंत्र',
    'स्वरयंत्र (Larynx)',
    'पुरुषों में यौवनारंभ के समय गले के सामने उभरा हुआ स्वरयंत्र (Larynx) का भाग सामान्यतः क्या कहलाता है?',
    'What is the prominent protruding part of the larynx visible in the neck of adult males commonly called?',
    ['एडम्स एप्पल (कंठमणि)', 'Adam’s apple'],
    [
      ['एपिग्लॉटिस', 'Epiglottis'],
      ['यूवुला', 'Uvula'],
      ['टॉन्सिल', 'Tonsil'],
    ],
    'थायरॉइड उपास्थि के आगे की ओर उभार को एडम्स एप्पल कहते हैं; पुरुषों में टेस्टोस्टेरोन के प्रभाव से स्वरयंत्र बड़ा होकर आवाज भारी कर देता है।',
    'The outward protrusion of the thyroid cartilage of the larynx is called Adam’s apple, more prominent in males due to testosterone-induced growth at puberty.',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'श्वसन मापी यंत्र',
    'फेफड़ों की वायु धारण क्षमता (ज्वारीय आयतन, जैव क्षमता आदि) मापने के लिए किस यंत्र का प्रयोग किया जाता है?',
    'Which instrument is used to measure lung volumes and capacities (such as tidal volume and vital capacity)?',
    ['स्पाइरोमीटर (Spirometer)', 'Spirometer'],
    [
      ['स्फिग्मोमैनोमीटर (Sphygmomanometer)', 'Sphygmomanometer'],
      ['हीमोसाइटोमीटर (Haemocytometer)', 'Haemocytometer'],
      ['इलेक्ट्रोकार्डियोग्राफ (ECG)', 'Electrocardiograph'],
    ],
    'स्पाइरोमीटर द्वारा श्वास की गति और फेफड़ों की विभिन्न आयतन क्षमताओं (अवशिष्ट आयतन को छोड़कर) का मापन किया जाता है।',
    'A spirometer measures pulmonary ventilation and lung volumes/capacities (except residual volume, which cannot be exhaled).',
    'MEDIUM'
  ),
  q(
    'श्वसन तंत्र',
    'श्वसन गुणांक (RQ)',
    'कोशिकीय श्वसन में कार्बोहाइड्रेट (ग्लूकोज) का श्वसन गुणांक (Respiratory Quotient - RQ) कितना होता है?',
    'What is the Respiratory Quotient (RQ) of carbohydrates (glucose) during aerobic respiration?',
    ['1.0 (एक)', '1.0 (Unity)'],
    [
      ['0.7', '0.7'],
      ['0.9', '0.9'],
      ['असीमित (∞)', 'Infinity (∞)'],
    ],
    'RQ = मुक्त CO2 का आयतन / प्रयुक्त O2 का आयतन। ग्लूकोज में 6 CO2 मुक्त और 6 O2 प्रयुक्त होती है, अतः RQ = 6/6 = 1.0। वसा का RQ ~0.7 तथा प्रोटीन का ~0.9 होता है।',
    'RQ = Volume of CO2 evolved / Volume of O2 consumed. For glucose, 6 CO2 / 6 O2 = 1.0. For fats it is ~0.7 and for proteins ~0.9.',
    'HARD',
    {
      formulaHi: 'RQ = मुक्त CO₂ का आयतन / अवशोषित O₂ का आयतन',
      formulaEn: 'RQ = Volume of CO₂ evolved / Volume of O₂ consumed',
    }
  ),
  q(
    'श्वसन तंत्र',
    'जलीय जीवों में श्वसन',
    'मछलियों में स्थलीय जंतुओं की अपेक्षा श्वसन दर बहुत तेज क्यों होती है?',
    'Why is the rate of breathing in fishes much faster than in terrestrial organisms?',
    ['क्योंकि जल में घुली हुई ऑक्सीजन की मात्रा वायु की तुलना में बहुत कम होती है', 'Because the amount of dissolved oxygen in water is fairly low compared to air'],
    [
      ['क्योंकि मछलियों में हीमोग्लोबिन नहीं होता', 'Because fishes lack haemoglobin'],
      ['क्योंकि जल का तापमान सदैव 40°C से अधिक होता है', 'Because water temperature always exceeds 40°C'],
      ['क्योंकि मछलियाँ अवायवीय श्वसन करती हैं', 'Because fishes perform anaerobic respiration'],
    ],
    'वायु में लगभग 21% ऑक्सीजन होती है, जबकि जल में घुली ऑक्सीजन की सांद्रता अत्यंत कम (कुछ mg/L) होती है, इसलिए मछलियाँ तेजी से मुख द्वारा जल लेकर गलफड़ों से गुजारती हैं।',
    'Since dissolved O2 concentration in water is very low compared to ~21% O2 in air, aquatic organisms must pump water across gills much more rapidly.',
    'EASY'
  ),
  q(
    'श्वसन तंत्र',
    'अवशिष्ट आयतन',
    'बलपूर्वक अधिकतम निःश्वसन (Forceful expiration) के बाद भी फेफड़ों में शेष रह जाने वाली वायु की मात्रा क्या कहलाती है?',
    'What is the volume of air remaining in the lungs even after a forcible expiration called?',
    ['अवशिष्ट आयतन (Residual Volume)', 'Residual Volume'],
    [
      ['ज्वारीय आयतन (Tidal Volume)', 'Tidal Volume'],
      ['जैव क्षमता (Vital Capacity)', 'Vital Capacity'],
      ['अंतःश्वसन सुरक्षित आयतन', 'Inspiratory Reserve Volume'],
    ],
    'अधिकतम साँस बाहर छोड़ने के बाद भी फेफड़ों में लगभग 1100–1200 mL वायु बची रहती है (Residual Volume) ताकि फेफड़े चिपक न जाएँ और गैसीय विनिमय जारी रहे।',
    'About 1100–1200 mL of air always remains in the lungs after forceful exhalation (Residual Volume) to keep alveoli open and maintain continuous gas exchange.',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त परिसंचरण की खोज',
    'मनुष्य में दोहरे रक्त परिसंचरण तंत्र की खोज किस वैज्ञानिक ने की थी?',
    'Which scientist discovered the blood circulation system in humans?',
    ['विलियम हार्वे', 'William Harvey'],
    [
      ['कार्ल लैंडस्टीनर', 'Karl Landsteiner'],
      ['एंटनी वॉन ल्यूवेनहॉक', 'Antonie van Leeuwenhoek'],
      ['लुई पाश्चर', 'Louis Pasteur'],
    ],
    'विलियम हार्वे (1628) ने सिद्ध किया कि हृदय एक पंप की भाँति कार्य करता है और रक्त शरीर में बंद वाहिकाओं के माध्यम से निरंतर परिसंचरण करता है।',
    'William Harvey (1628) demonstrated that the heart acts as a muscular pump driving continuous closed circulation of blood in the body.',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त के घटक',
    'मानव रक्त के कुल आयतन में प्लाज्मा (Plasma) का प्रतिशत लगभग कितना होता है?',
    'What is the approximate percentage of plasma in total human blood volume?',
    ['लगभग 55%', 'About 55%'],
    [
      ['लगभग 25%', 'About 25%'],
      ['लगभग 45%', 'About 45%'],
      ['लगभग 85%', 'About 85%'],
    ],
    'रक्त का लगभग 55% भाग हल्का पीला तरल प्लाज्मा होता है (जिसमें 90–92% जल और 6–8% प्रोटीन होते हैं) तथा शेष 45% संगठित पदार्थ (RBC, WBC, प्लेटलेट्स) होते हैं।',
    'Blood consists of ~55% straw-coloured liquid plasma (90–92% water, 6–8% proteins) and ~45% formed elements (RBCs, WBCs, platelets).',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'RBC जीवनकाल एवं कब्रिस्तान',
    'मानव की लाल रक्त कणिकाओं (RBC) का औसत जीवनकाल कितना होता है और इन्हें कहाँ नष्ट किया जाता है (RBC का कब्रिस्तान)?',
    'What is the average lifespan of human RBCs, and which organ is called the "graveyard of RBCs"?',
    ['120 दिन; प्लीहा (Spleen)', '120 days; Spleen'],
    [
      ['10 दिन; अग्न्याशय', '10 days; Pancreas'],
      ['30 दिन; वृक्क', '30 days; Kidney'],
      ['365 दिन; आमाशय', '365 days; Stomach'],
    ],
    'लाल रक्त कणिकाओं का निर्माण वयस्कों में लाल अस्थि मज्जा में होता है और लगभग 120 दिनों बाद प्लीहा (तिल्ली) में ये नष्ट होती हैं, इसलिए प्लीहा को RBC का कब्रिस्तान कहते हैं।',
    'Human RBCs are formed in red bone marrow, live for ~120 days, and are destroyed in the spleen ("graveyard of RBCs").',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'WBC के कार्य',
    'रक्त की कौन-सी कणिकाएँ शरीर की प्रतिरक्षा प्रणाली का हिस्सा होकर रोगाणुओं से लड़ती हैं ("शरीर के सैनिक")?',
    'Which blood corpuscles act as "soldiers of the body" by fighting infections as part of the immune system?',
    ['श्वेत रक्त कणिकाएँ (ल्यूकोसाइट्स / WBC)', 'White blood cells (Leucocytes / WBCs)'],
    [
      ['लाल रक्त कणिकाएँ (एरिथ्रोसाइट्स)', 'Red blood cells (Erythrocytes)'],
      ['प्लेटलेट्स (थ्रॉम्बोसाइट्स)', 'Platelets (Thrombocytes)'],
      ['सीरम एल्ब्यूमिन', 'Serum albumin'],
    ],
    'WBC (ल्यूकोसाइट्स) केंद्रकयुक्त कणिकाएँ हैं जो भक्षकाणु क्रिया व प्रतिरक्षी निर्माण द्वारा संक्रमण से रक्षा करती हैं। न्यूट्रोफिल संख्या में सर्वाधिक होती हैं।',
    'WBCs (leucocytes) are nucleated cells defending the body against pathogens via phagocytosis and antibodies; neutrophils are the most abundant WBCs.',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'प्लेटलेट्स एवं रक्त स्कंदन',
    'चोट लगने पर रक्त का थक्का जमाने में मुख्य रूप से कौन-सी रक्त कणिकाएँ और कौन-सा प्लाज्मा प्रोटीन सहायक होते हैं?',
    'Which blood cells and plasma protein play a key role in blood clotting at an injury site?',
    ['प्लेटलेट्स (बिंबाणु) और फाइब्रिनोजेन', 'Platelets and Fibrinogen'],
    [
      ['RBC और एल्ब्यूमिन', 'RBCs and Albumin'],
      ['इओसिनोफिल और मायोग्लोबिन', 'Eosinophils and Myoglobin'],
      ['लिम्फोसाइट्स और हिपैरिन', 'Lymphocytes and Heparin'],
    ],
    'प्लेटलेट्स थ्रॉम्बोप्लास्टिन मुक्त करती हैं जो Ca²⁺ और विटामिन K की सहायता से प्रोथ्रॉम्बिन को थ्रॉम्बिन में बदलता है; थ्रॉम्बिन घुलनशील फाइब्रिनोजेन को अघुलनशील फाइब्रिन जाल में बदलता है।',
    'Platelets release factors that, with Ca²⁺ and vitamin K, convert prothrombin to thrombin, which converts soluble fibrinogen into insoluble fibrin threads forming a clot.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त वाहिकाओं में थक्का न जमना',
    'रक्त वाहिकाओं के भीतर बहते हुए रक्त को जमने से रोकने वाला प्राकृतिक प्रतिस्कंदक (Anticoagulant) कौन-सा है?',
    'Which natural anticoagulant prevents blood from clotting inside normal blood vessels?',
    ['हिपैरिन (Heparin)', 'Heparin'],
    [
      ['थ्रॉम्बिन (Thrombin)', 'Thrombin'],
      ['फाइब्रिन (Fibrin)', 'Fibrin'],
      ['एग्ग्लूटिनिन (Agglutinin)', 'Agglutinin'],
    ],
    'यकृत और बेसोफिल्स/मास्ट कोशिकाओं द्वारा उत्पादित हिपैरिन एक प्राकृतिक प्रतिस्कंदक है जो रक्त को शरीर के अंदर धमनियों व शिराओं में जमने से रोकता है।',
    'Heparin, produced by basophils/mast cells and liver, is a natural anticoagulant that prevents intravascular blood clotting.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त समूह खोज',
    'मनुष्य में ABO रक्त समूह प्रणाली की खोज वर्ष 1900 में किस वैज्ञानिक ने की थी?',
    'Which scientist discovered the ABO blood group system in humans in 1900?',
    ['कार्ल लैंडस्टीनर', 'Karl Landsteiner'],
    [
      ['रॉबर्ट कोच', 'Robert Koch'],
      ['एडवर्ड जेनर', 'Edward Jenner'],
      ['जोनस सॉल्क', 'Jonas Salk'],
    ],
    'कार्ल लैंडस्टीनर ने RBC की सतह पर प्रतिजन (A और B) तथा प्लाज्मा में प्रतिरक्षी के आधार पर A, B और O रक्त समूहों की खोज की (AB की खोज डी-कास्टेलो व स्टर्ली ने की)।',
    'Karl Landsteiner discovered A, B, and O blood groups based on RBC surface antigens (A, B) and plasma antibodies (group AB was added by Decastello and Sturli).',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'सर्वदाता व सर्वग्राही',
    'Rh कारक सहित किस रक्त समूह को "सार्वत्रिक दाता" (Universal Donor) और किसे "सार्वत्रिक ग्राही" (Universal Recipient) कहा जाता है?',
    'Including the Rh factor, which blood group is the "Universal Donor" and which is the "Universal Recipient"?',
    ['O⁻ (O नेगेटिव) सर्वदाता तथा AB⁺ (AB पॉजिटिव) सर्वग्राही', 'O⁻ is Universal Donor and AB⁺ is Universal Recipient'],
    [
      ['O⁺ सर्वदाता तथा AB⁻ सर्वग्राही', 'O⁺ is Universal Donor and AB⁻ is Universal Recipient'],
      ['AB⁺ सर्वदाता तथा O⁻ सर्वग्राही', 'AB⁺ is Universal Donor and O⁻ is Universal Recipient'],
      ['A⁺ सर्वदाता तथा B⁻ सर्वग्राही', 'A⁺ is Universal Donor and B⁻ is Universal Recipient'],
    ],
    'O⁻ RBC की सतह पर न तो A/B प्रतिजन होता है और न Rh प्रतिजन, अतः यह सर्वदाता है। AB⁺ के प्लाज्मा में कोई एंटीबॉडी (anti-A, anti-B या anti-Rh) नहीं होती, अतः यह सर्वग्राही है।',
    'O⁻ RBCs lack A, B, and Rh antigens (Universal Donor), whereas AB⁺ blood lacks anti-A, anti-B, and anti-Rh antibodies (Universal Recipient).',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'एरिथ्रोब्लास्टोसिस फीटैलिस',
    'एरिथ्रोब्लास्टोसिस फीटैलिस (Rh असंगति) की स्थिति कब उत्पन्न हो सकती है?',
    'When can the condition Erythroblastosis foetalis (Rh incompatibility) occur?',
    ['जब Rh⁻ माता के गर्भ में दूसरा Rh⁺ शिशु हो', 'When an Rh⁻ mother carries a second Rh⁺ foetus'],
    [
      ['जब Rh⁺ माता के गर्भ में Rh⁻ शिशु हो', 'When an Rh⁺ mother carries an Rh⁻ foetus'],
      ['जब माता और पिता दोनों Rh⁻ हों', 'When both mother and father are Rh⁻'],
      ['जब माता AB⁺ और पिता O⁺ हों', 'When mother is AB⁺ and father is O⁺'],
    ],
    'प्रथम Rh⁺ शिशु के जन्म के समय Rh⁻ माता में Rh प्रतिजन के विरुद्ध प्रतिरक्षी बन जाते हैं, जो दूसरे Rh⁺ गर्भ की RBC को नष्ट कर सकते हैं। इससे बचाव के लिए प्रसव के तुरंत बाद माता को Anti-Rh (RhoGAM) दिया जाता है।',
    'During delivery of a first Rh⁺ baby, an Rh⁻ mother may develop anti-Rh antibodies that cross the placenta in a subsequent Rh⁺ pregnancy, destroying foetal RBCs unless treated with anti-Rh antibodies.',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'हृदय के कपाट',
    'मानव हृदय में बाएँ अलिंद और बाएँ निलय के बीच कौन-सा कपाट (Valve) स्थित होता है जो रक्त को विपरीत दिशा में जाने से रोकता है?',
    'Which valve is located between the left atrium and left ventricle of the human heart to prevent backflow of blood?',
    ['द्विवलनी कपाट (बाइकस्पिड / माइट्रल वाल्व)', 'Bicuspid (Mitral) valve'],
    [
      ['त्रिवलनी कपाट (ट्राइकस्पिड वाल्व)', 'Tricuspid valve'],
      ['अर्धचंद्राकार कपाट (सेमील्यूनर वाल्व)', 'Semilunar valve'],
      ['थेबेसियन कपाट', 'Thebesian valve'],
    ],
    'बाएँ अलिंद व बाएँ निलय के बीच द्विवलनी (माइट्रल) कपाट और दाएँ अलिंद व दाएँ निलय के बीच त्रिवलनी (ट्राइकस्पिड) कपाट होता है।',
    'The bicuspid (mitral) valve guards the opening between the left atrium and left ventricle, while the tricuspid valve is on the right side.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'हृदय का पेसमेकर',
    'हृदय की धड़कन की स्वतः उत्पत्ति के कारण किसे "हृदय का प्राकृतिक पेसमेकर" कहा जाता है?',
    'Which structure is called the "natural pacemaker of the heart" because it initiates the rhythmic heartbeat?',
    ['SA नोड (शिरा-अलिंद पर्व)', 'SA Node (Sino-atrial node)'],
    [
      ['AV नोड (अलिंद-निलय पर्व)', 'AV Node (Atrio-ventricular node)'],
      ['पुरकिंजे तंतु', 'Purkinje fibres'],
      ['हिस का बंडल', 'Bundle of His'],
    ],
    'दाएँ अलिंद के ऊपरी दाएँ कोने पर स्थित SA नोड प्रति मिनट 70–75 बार क्रिया विभव उत्पन्न करता है जिससे हृदय की लयबद्ध धड़कन प्रारंभ होती है।',
    'Located in the upper right wall of the right atrium, the SA node generates action potentials (70–75/min) that initiate and maintain heart rhythm.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'हृदय ध्वनियाँ',
    'स्टेथोस्कोप से सुनाई देने वाली हृदय की दो ध्वनियाँ "लप" (Lub) और "डप" (Dub) क्रमशः किन कपाटों के बंद होने से उत्पन्न होती हैं?',
    'The two heart sounds "Lub" and "Dub" heard through a stethoscope are produced by the closure of which valves respectively?',
    ['लप: अलिंद-निलय कपाट (त्रिवलनी व द्विवलनी); डप: अर्धचंद्राकार कपाट', 'Lub: AV valves (tricuspid & bicuspid); Dub: Semilunar valves'],
    [
      ['लप: अर्धचंद्राकार कपाट; डप: त्रिवलनी कपाट', 'Lub: Semilunar valves; Dub: Tricuspid valve'],
      ['लप: धमनियों के खुलने से; डप: शिराओं के खुलने से', 'Lub: Opening of arteries; Dub: Opening of veins'],
      ['लप: SA नोड; डप: AV नोड', 'Lub: SA node; Dub: AV node'],
    ],
    'प्रथम ध्वनि "लप" निलय प्रकुंचन के आरंभ में AV कपाटों के बंद होने से और द्वितीय ध्वनि "डप" निलय अनुशिथिलन में अर्धचंद्राकार कपाटों के बंद होने से आती है।',
    'The first sound "Lub" results from closure of AV valves at ventricular systole onset, and "Dub" from closure of semilunar valves at ventricular diastole onset.',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्तदाब (Blood Pressure)',
    'एक स्वस्थ युवा वयस्क का सामान्य प्रकुंचन और अनुशिथिलन रक्तदाब (Blood Pressure) कितना होता है, तथा इसे किस यंत्र से मापा जाता है?',
    'What is the normal systolic/diastolic blood pressure of a healthy young adult, and which device measures it?',
    ['120/80 mmHg; स्फिग्मोमैनोमीटर', '120/80 mmHg; Sphygmomanometer'],
    [
      ['80/120 mmHg; स्पाइरोमीटर', '80/120 mmHg; Spirometer'],
      ['140/90 mmHg; इलेक्ट्रोकार्डियोग्राफ', '140/90 mmHg; Electrocardiograph'],
      ['100/60 mmHg; स्टेथोस्कोप', '100/60 mmHg; Stethoscope'],
    ],
    'सामान्य सिस्टोलिक (प्रकुंचन) दाब 120 mmHg और डायस्टोलिक (अनुशिथिलन) दाब 80 mmHg होता है। रक्तदाब 140/90 या अधिक होने को उच्च रक्तचाप (हाइपरटेंशन) कहते हैं।',
    'Normal BP is 120 mmHg (systolic) / 80 mmHg (diastolic), measured by a sphygmomanometer. Readings ≥140/90 mmHg indicate hypertension.',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'धमनी और शिरा में अंतर',
    'निम्नलिखित में से कौन-सी धमनी अपवादस्वरूप अशुद्ध (विऑक्सीजनित) रक्त का वहन करती है?',
    'Which artery exceptionally carries deoxygenated (impure) blood?',
    ['फुफ्फुसीय धमनी (Pulmonary artery)', 'Pulmonary artery'],
    [
      ['महाधमनी (Aorta)', 'Aorta'],
      ['कोरोनरी धमनी (हृद् धमनी)', 'Coronary artery'],
      ['वृक्क धमनी (Renal artery)', 'Renal artery'],
    ],
    'सामान्यतः धमनियाँ हृदय से शुद्ध (ऑक्सीजनित) रक्त ले जाती हैं, पर फुफ्फुसीय धमनी दाएँ निलय से अशुद्ध रक्त फेफड़ों तक ले जाती है। इसी प्रकार फुफ्फुसीय शिरा शुद्ध रक्त लाती है।',
    'While arteries generally carry oxygenated blood away from the heart, the pulmonary artery carries deoxygenated blood to the lungs (and pulmonary veins carry oxygenated blood back).',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'ECG (इलेक्ट्रोकार्डियोग्राम)',
    'मानक इलेक्ट्रोकार्डियोग्राम (ECG) में "QRS सम्मिश्र" (QRS Complex) हृदय की किस विद्युतीय घटना को दर्शाता है?',
    'In a standard Electrocardiogram (ECG), what electrical event does the "QRS complex" represent?',
    ['निलयों का विध्रुवण (निलय संकुचन की शुरुआत)', 'Depolarization of the ventricles (initiating ventricular contraction)'],
    [
      ['अलिंदों का विध्रुवण', 'Depolarization of the atria'],
      ['निलयों का पुनःध्रुवण (शिथिलन)', 'Repolarization of the ventricles'],
      ['हृदय की पूर्ण विश्राम अवस्था', 'Complete resting state of the heart'],
    ],
    'ECG में P तरंग अलिंदों के विध्रुवण को, QRS सम्मिश्र निलयों के विध्रुवण को तथा T तरंग निलयों के पुनःध्रुवण (शिथिलन) को दर्शाती है।',
    'In an ECG, the P-wave represents atrial depolarization, the QRS complex represents ventricular depolarization, and the T-wave represents ventricular repolarization.',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'हृद् निकास (Cardiac Output)',
    'यदि स्ट्रोक आयतन (प्रति धड़कन पंप रक्त) लगभग 70 mL और हृदय दर 72 धड़कन/मिनट है, तो एक स्वस्थ व्यक्ति का हृद् निकास (Cardiac Output) लगभग कितना होगा?',
    'If stroke volume is ~70 mL and heart rate is 72 beats/minute, what is the approximate Cardiac Output of a healthy adult?',
    ['लगभग 5 लीटर प्रति मिनट (5040 mL)', 'Approximately 5 litres per minute (5040 mL)'],
    [
      ['लगभग 1 लीटर प्रति मिनट', 'Approximately 1 litre per minute'],
      ['लगभग 12 लीटर प्रति मिनट', 'Approximately 12 litres per minute'],
      ['लगभग 500 मिलीलीटर प्रति मिनट', 'Approximately 500 mL per minute'],
    ],
    'हृद् निकास = स्ट्रोक आयतन × हृदय दर = 70 mL × 72 = 5040 mL या लगभग 5 लीटर प्रति मिनट, जो शरीर के कुल रक्त आयतन के लगभग बराबर होता है।',
    'Cardiac output = Stroke volume × Heart rate = 70 mL × 72 ≈ 5040 mL (approx. 5 litres/minute).',
    'MEDIUM',
    {
      formulaHi: 'हृद् निकास = स्ट्रोक आयतन × हृदय स्पंदन दर',
      formulaEn: 'Cardiac Output = Stroke Volume × Heart Rate',
    }
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'कोलेस्ट्रॉल व धमनियों के रोग',
    'कोरोनरी धमनियों के भीतर कैल्शियम, वसा व कोलेस्ट्रॉल के जमने से रक्त प्रवाह बाधित होने का रोग क्या कहलाता है?',
    'What is the condition in which deposition of calcium, fat, and cholesterol narrows the lumen of coronary arteries called?',
    ['एथेरोस्क्लेरोसिस (धमनीकाठिन्य)', 'Atherosclerosis'],
    [
      ['आर्थ्राइटिस (गठिया)', 'Arthritis'],
      ['ऑस्टियोपोरोसिस', 'Osteoporosis'],
      ['ल्यूकीमिया', 'Leukaemia'],
    ],
    'कोरोनरी धमनी रोग (CAD) जिसे एथेरोस्क्लेरोसिस कहते हैं, में धमनियों की भीतरी परत पर प्लाक जम जाने से हृदय की मांसपेशियों को रक्त आपूर्ति कम हो जाती है।',
    'Atherosclerosis (Coronary Artery Disease) involves plaque buildup of fats, cholesterol, and calcium inside arterial walls, restricting blood flow to heart muscle.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'हीमोग्लोबिन धातु',
    'मानव हीमोग्लोबिन अणु के केंद्र में कौन-सा धातु आयन उपस्थित होता है जो ऑक्सीजन के साथ उत्क्रमणीय बंध बनाता है?',
    'Which metal ion is present at the centre of the human haemoglobin molecule to bind oxygen reversibly?',
    ['लौह (आयरन / Fe²⁺)', 'Iron (Fe²⁺)'],
    [
      ['मैग्नीशियम (Mg²⁺)', 'Magnesium (Mg²⁺)'],
      ['ताँबा (Cu²⁺)', 'Copper (Cu²⁺)'],
      ['कोबाल्ट (Co²⁺)', 'Cobalt (Co²⁺)'],
    ],
    'प्रत्येक हीमोग्लोबिन में चार हीम समूह होते हैं जिनमें लौह (Fe²⁺) आयन होता है। क्लोरोफिल में मैग्नीशियम तथा ऑक्टोपस/मोलस्का के हीमोसायनिन में ताँबा होता है।',
    'Haemoglobin contains four haem groups each with a ferrous iron (Fe²⁺) ion. Chlorophyll contains magnesium, and molluscan haemocyanin contains copper.',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'प्लाज्मा प्रोटीन',
    'रक्त प्लाज्मा में पाया जाने वाला कौन-सा प्रोटीन मुख्य रूप से परासरणी संतुलन (Osmotic Balance) बनाए रखने के लिए उत्तरदायी है?',
    'Which blood plasma protein is primarily responsible for maintaining osmotic balance?',
    ['एल्ब्यूमिन (Albumin)', 'Albumin'],
    [
      ['फाइब्रिनोजेन', 'Fibrinogen'],
      ['ग्लोब्युलिन', 'Globulin'],
      ['केराटिन', 'Keratin'],
    ],
    'प्लाज्मा के तीन मुख्य प्रोटीन हैं: एल्ब्यूमिन (परासरण संतुलन), ग्लोब्युलिन (प्रतिरक्षा में सहायक) और फाइब्रिनोजेन (रक्त का थक्का जमाना)।',
    'Plasma has three major proteins: albumin (osmotic balance), globulins (immune defence), and fibrinogen (blood clotting).',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'द्वि-परिसंचरण',
    'मनुष्य में दोहरे परिसंचरण (Double Circulation) में कौन-से दो पथ सम्मिलित होते हैं?',
    'Which two pathways constitute Double Circulation in humans?',
    ['फुफ्फुसीय परिसंचरण और दैहिक (सिस्टेमिक) परिसंचरण', 'Pulmonary circulation and Systemic circulation'],
    [
      ['केवल यकृत निवाहिका और वृक्क परिसंचरण', 'Only hepatic portal and renal circulation'],
      ['लसीका और जठर परिसंचरण', 'Lymphatic and gastric circulation'],
      ['धमनी और कोरोनरी परिसंचरण', 'Arterial and coronary circulation'],
    ],
    'रक्त एक पूरे चक्र में हृदय से दो बार गुजरता है—दाएँ निलय से फेफड़ों तक (फुफ्फुसीय) तथा बाएँ निलय से पूरे शरीर तक (दैहिक), जिससे शुद्ध व अशुद्ध रक्त अलग रहते हैं।',
    'Blood passes through the heart twice per complete cycle: pulmonary circulation (heart–lungs–heart) and systemic circulation (heart–body–heart), preventing mixing of blood.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'यकृत निवाहिका तंत्र',
    'पाचन नाल से अवशोषित पोषक तत्वों से भरपूर रक्त को सामान्य परिसंचरण में जाने से पहले सीधे यकृत तक पहुँचाने वाली शिरा कौन-सी है?',
    'Which vein carries nutrient-rich blood from the digestive tract directly to the liver before it enters general systemic circulation?',
    ['यकृत निवाहिका शिरा (Hepatic Portal Vein)', 'Hepatic Portal Vein'],
    [
      ['ऊर्ध्व महाशिरा', 'Superior Vena Cava'],
      ['अधो महाशिरा', 'Inferior Vena Cava'],
      ['फुफ्फुसीय शिरा', 'Pulmonary Vein'],
    ],
    'यकृत निवाहिका शिरा आंतों से ग्लूकोज व अमीनो अम्ल युक्त रक्त को यकृत में लाती है ताकि यकृत पोषकों का नियमन व विषैले पदार्थों का विषहरण कर सके।',
    'The hepatic portal vein delivers absorbed nutrients and toxins from the gut to the liver first for metabolic processing and detoxification.',
    'HARD'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त pH मान',
    'स्वस्थ मानव रक्त का सामान्य pH मान कितना होता है?',
    'What is the normal pH value of healthy human blood?',
    ['7.35 से 7.45 (हल्का क्षारीय)', '7.35 to 7.45 (slightly alkaline)'],
    [
      ['6.2 से 6.5 (हल्का अम्लीय)', '6.2 to 6.5 (slightly acidic)'],
      ['7.0 (पूर्णतः उदासीन)', '7.0 (strictly neutral)'],
      ['8.5 से 9.0 (तीव्र क्षारीय)', '8.5 to 9.0 (strongly alkaline)'],
    ],
    'मानव रक्त हल्का क्षारीय होता है जिसका pH 7.35–7.45 (औसत 7.4) के संकीर्ण दायरे में बफर तंत्र द्वारा स्थिर रखा जाता है।',
    'Human blood is slightly alkaline, tightly regulated by buffer systems within a pH range of 7.35–7.45 (average 7.4).',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'लसीका व टॉन्सिल',
    'गले के पिछले भाग में स्थित कौन-से लसीका अंग श्वसन व भोजन मार्ग से प्रवेश करने वाले रोगाणुओं से सुरक्षा करते हैं?',
    'Which lymphoid organs located at the back of the throat help trap pathogens entering via inhaled air or food?',
    ['टॉन्सिल (गलतुंडिका)', 'Tonsils'],
    [
      ['पिट्यूटरी ग्रंथि', 'Pituitary gland'],
      ['थायरॉइड ग्रंथि', 'Thyroid gland'],
      ['अधिवृक्क ग्रंथि', 'Adrenal gland'],
    ],
    'टॉन्सिल द्वितीयक लसीका अंग हैं जिनमें लिम्फोसाइट्स होते हैं और ये मुख व नासा मार्ग से आने वाले जीवाणुओं के विरुद्ध प्रथम रक्षा पंक्ति बनाते हैं।',
    'Tonsils are secondary lymphoid tissues in the pharynx containing lymphocytes that defend against inhaled or ingested pathogens.',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'सीरम',
    'रक्त प्लाज्मा और रक्त सीरम (Serum) के बीच मुख्य अंतर क्या है?',
    'What is the primary difference between blood plasma and blood serum?',
    ['सीरम = प्लाज्मा जिसमें से थक्का जमाने वाले कारक (फाइब्रिनोजेन) हटा दिए गए हों', 'Serum = Plasma minus blood clotting factors (such as fibrinogen)'],
    [
      ['सीरम में लाल रक्त कणिकाएँ होती हैं', 'Serum contains red blood cells'],
      ['प्लाज्मा में जल नहीं होता', 'Plasma contains no water'],
      ['सीरम केवल श्वेत रक्त कणिकाओं का मिश्रण है', 'Serum is only a suspension of WBCs'],
    ],
    'रक्त का थक्का जमने के बाद शेष बचा स्पष्ट पीला द्रव सीरम कहलाता है, जिसमें फाइब्रिनोजेन और थक्का कारक अनुपस्थित होते हैं।',
    'Serum is the clear fluid remaining after blood clots; it equals plasma minus fibrinogen and other clotting factors.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'कोरोनरी परिसंचरण',
    'हृदय की अपनी पेशियों (मायोकार्डियम) को ऑक्सीजन युक्त रक्त की आपूर्ति कौन-सी रक्त वाहिका करती है?',
    'Which blood vessel supplies oxygenated blood to the heart muscle (myocardium) itself?',
    ['कोरोनरी धमनी (हृद् धमनी)', 'Coronary artery'],
    [
      ['कैरोटिड धमनी', 'Carotid artery'],
      ['सबक्लेवियन धमनी', 'Subclavian artery'],
      ['मिसेंटेरिक धमनी', 'Mesenteric artery'],
    ],
    'महाधमनी के आधार से निकलने वाली कोरोनरी धमनियाँ हृदय की पेशियों को ऑक्सीजन व पोषण देती हैं; इनमें अवरोध आने पर हृदयाघात (Heart attack) होता है।',
    'Coronary arteries branch off the base of the aorta to nourish the myocardium; blockage in them leads to myocardial infarction (heart attack).',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'नब्ज (Pulse)',
    'कलाई की रेडियल धमनी पर महसूस होने वाली "नाड़ी दर" (Pulse Rate) वास्तव में किसके बराबर होती है?',
    'The "Pulse Rate" felt at the radial artery of the wrist actually equals what?',
    ['प्रति मिनट हृदय के निलयों के संकुचन (हृदय धड़कन) की दर', 'The rate of ventricular contractions (heartbeats) per minute'],
    [
      ['प्रति मिनट श्वसन दर', 'The breathing rate per minute'],
      ['प्रति मिनट वृक्क निस्यंदन दर', 'The glomerular filtration rate'],
      ['प्रति मिनट आंत्र क्रमाकुंचन दर', 'The intestinal peristalsis rate'],
    ],
    'प्रत्येक हृदय स्पंदन के साथ महाधमनी व धमनियों में रक्त दाब की तरंग दौड़ती है जिसे कलाई या गर्दन पर नाड़ी के रूप में महसूस किया जाता है (~72/मिनट)।',
    'Each heartbeat sends a pressure wave along the arterial walls felt as a pulse at superficial arteries like the radial artery (~72 beats/min).',
    'EASY'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'ल्यूकीमिया (रक्त कैंसर)',
    'रक्त में अपरिपक्व श्वेत रक्त कणिकाओं (WBC) की अनियंत्रित व अत्यधिक वृद्धि हो जाना किस रोग का लक्षण है?',
    'Uncontrolled, excessive proliferation of abnormal immature white blood cells (WBCs) in blood characterizes which disease?',
    ['ल्यूकीमिया (रक्त कैंसर)', 'Leukaemia (Blood cancer)'],
    [
      ['एनीमिया (रक्ताल्पता)', 'Anaemia'],
      ['पॉलीसाइथीमिया', 'Polycythaemia'],
      ['थैलेसीमिया', 'Thalassaemia'],
    ],
    'ल्यूकीमिया अस्थि मज्जा का कैंसर है जिसमें WBC की संख्या असामान्य रूप से बहुत बढ़ जाती है (ल्यूकोसाइटोसिस), जबकि RBC व प्लेटलेट्स घट जाते हैं।',
    'Leukaemia is a malignancy of blood-forming tissues marked by uncontrolled overproduction of abnormal WBCs, crowding out healthy RBCs and platelets.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'लिम्फोसाइट्स',
    'प्रतिरक्षा तंत्र की B-लिम्फोसाइट्स और T-लिम्फोसाइट्स कोशिकाएँ किस रक्त कणिका के प्रकार हैं?',
    'B-lymphocytes and T-lymphocytes of the immune system are subtypes of which blood cells?',
    ['श्वेत रक्त कणिकाएँ (WBC)', 'White blood cells (WBCs)'],
    [
      ['लाल रक्त कणिकाएँ (RBC)', 'Red blood cells (RBCs)'],
      ['प्लेटलेट्स', 'Platelets'],
      ['मेगाकैरियोसाइट्स', 'Megakaryocytes'],
    ],
    'लिम्फोसाइट्स कणिका-रहित (Agranulocyte) WBC हैं। B-लिम्फोसाइट्स प्रतिरक्षी (Antibodies) बनाती हैं (तरल प्रतिरक्षा) और T-लिम्फोसाइट्स कोशिका-माध्यित प्रतिरक्षा देती हैं।',
    'Lymphocytes are agranular WBCs: B-cells produce antibodies (humoral immunity) while T-cells mediate cell-mediated immunity.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त वाहिका संरचना',
    'धमनियों (Arteries) की भित्ति शिराओं (Veins) की तुलना में अधिक मोटी और लचीली क्यों होती है, और कपाट किसमें पाए जाते हैं?',
    'Why are arterial walls thicker and more elastic than venous walls, and which one possesses valves?',
    ['धमनियों में रक्त उच्च दाब से बहता है इसलिए वे मोटी होती हैं; कपाट शिराओं में पाए जाते हैं', 'Arteries carry blood under high pressure so they have thick walls; valves are present in veins'],
    [
      ['शिराओं में रक्त उच्च दाब से बहता है; कपाट धमनियों में होते हैं', 'Veins carry high-pressure blood; valves are in arteries'],
      ['धमनियाँ केवल ऊतक द्रव ले जाती हैं; दोनों में कपाट नहीं होते', 'Arteries carry only tissue fluid; neither has valves'],
      ['शिराएँ संकुचित नहीं हो सकतीं; कपाट केवल केशिकाओं में होते हैं', 'Veins cannot constrict; valves occur only in capillaries'],
    ],
    'धमनियों में हृदय द्वारा पंप किए जाने से उच्च दाब रहता है, अतः उनकी पेशीय भित्ति मोटी होती है। शिराओं में दाब कम होने के कारण रक्त को वापस लौटने से रोकने हेतु कपाट होते हैं।',
    'Arteries withstand high pumping pressure from the heart with thick elastic walls, whereas veins have lower pressure and possess pocket valves to prevent backflow.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'मायोकार्डियम मोटाई',
    'मानव हृदय के चारों कक्षों में से किस कक्ष की पेशीय भित्ति सर्वाधिक मोटी होती है?',
    'Among the four chambers of the human heart, which chamber has the thickest muscular wall?',
    ['बायाँ निलय (Left Ventricle)', 'Left ventricle'],
    [
      ['दायाँ अलिंद (Right Atrium)', 'Right atrium'],
      ['बायाँ अलिंद (Left Atrium)', 'Left atrium'],
      ['दायाँ निलय (Right Ventricle)', 'Right ventricle'],
    ],
    'बाएँ निलय को महाधमनी के माध्यम से पूरे शरीर (सिर से पैर तक) में उच्च दाब से रक्त पंप करना होता है, इसलिए इसकी भित्ति दाएँ निलय से लगभग तीन गुना मोटी होती है।',
    'The left ventricle pumps oxygenated blood through the aorta to the entire body against high systemic resistance, hence its wall is thickest.',
    'MEDIUM'
  ),,
  // Section 2 Part B: Remaining Circulatory (2), Excretory (18), Nervous & Skeletal (27), Endocrine (25) = 72 Qs
  q(
    'रक्त परिसंचरण तंत्र',
    'मायोग्लोबिन',
    'कंकाल पेशियों को लाल रंग देने वाला ऑक्सीजन-संग्राहक वर्णक कौन-सा है?',
    'Which oxygen-storing pigment gives skeletal muscles their red colour?',
    ['मायोग्लोबिन (Myoglobin)', 'Myoglobin'],
    [
      ['हीमोसायनिन', 'Haemocyanin'],
      ['फाइकोसाइनिन', 'Phycocyanin'],
      ['मेलानिन', 'Melanin'],
    ],
    'मायोग्लोबिन एक लौह-युक्त प्रोटीन है जो पेशीय कोशिकाओं में ऑक्सीजन का संचय करता है और सक्रिय पेशियों को लाल रंग देता है।',
    'Myoglobin is an iron-containing haem protein that stores oxygen inside muscle fibres and imparts a red colour to red muscle fibres.',
    'MEDIUM'
  ),
  q(
    'रक्त परिसंचरण तंत्र',
    'रक्त केशिकाएँ',
    'रक्त और ऊतक कोशिकाओं के बीच पोषक तत्वों, गैसों और अपशिष्टों का विनिमय किस प्रकार की रक्त वाहिकाओं की एक-कोशिकीय पतली भित्ति से होता है?',
    'Exchange of nutrients, gases, and wastes between blood and tissue cells occurs across the single-cell-thick wall of which blood vessels?',
    ['केशिकाएँ (Capillaries)', 'Capillaries'],
    [
      ['महाधमनी (Aorta)', 'Aorta'],
      ['महाशिरा (Vena Cava)', 'Vena Cava'],
      ['धमनिकाएँ (Arterioles)', 'Arterioles'],
    ],
    'केशिकाएँ अत्यंत सूक्ष्म वाहिकाएँ हैं जिनकी भित्ति केवल एक-कोशिकीय मोटाई की एंडोथीलियम से बनी होती है, जिससे विसरण सहजता से होता है।',
    'Capillaries have walls only one endothelial cell thick, enabling rapid diffusion and exchange of substances between blood and interstitial fluid.',
    'EASY'
  ),
  q(
    'उत्सर्जन तंत्र',
    'वृक्क की कार्यात्मक इकाई',
    'मानव वृक्क (Kidney) की संरचनात्मक एवं क्रियात्मक इकाई क्या कहलाती है?',
    'What is the structural and functional unit of the human kidney called?',
    ['नेफ्रॉन (वृक्काणु)', 'Nephron'],
    [
      ['न्यूरॉन (तंत्रिका कोशिका)', 'Neuron'],
      ['एल्वियोलाई (कूपिका)', 'Alveoli'],
      ['हेपेटोसाइट', 'Hepatocyte'],
    ],
    'प्रत्येक मानव वृक्क में लगभग 10 लाख (1 मिलियन) नेफ्रॉन होते हैं जो रक्त को छानकर मूत्र का निर्माण करते हैं।',
    'Each human kidney contains about 1 million nephrons that filter blood, reabsorb essential substances, and form urine.',
    'EASY'
  ),
  q(
    'उत्सर्जन तंत्र',
    'यूरिया संश्लेषण',
    'मानव शरीर में विषैले अमोनिया को अपेक्षाकृत कम विषैले यूरिया में परिवर्तित करने वाला "ऑर्निथीन चक्र (यूरिया चक्र)" किस अंग में संपन्न होता है?',
    'In the human body, the "Ornithine Cycle (Urea Cycle)" converting toxic ammonia into urea takes place in which organ?',
    ['यकृत (लिवर)', 'Liver'],
    [
      ['वृक्क (किडनी)', 'Kidney'],
      ['प्लीहा (तिल्ली)', 'Spleen'],
      ['मूत्राशय (यूरिनरी ब्लैडर)', 'Urinary bladder'],
    ],
    'अमोनिया से यूरिया का निर्माण यकृत में ऑर्निथीन चक्र (क्रेब्स-हेंसलीट चक्र) द्वारा होता है; इसके बाद रक्त यूरिया को छानने के लिए वृक्क में लाता है।',
    'Ammonia from amino acid deamination is converted into urea in the liver via the Ornithine (Krebs–Henseleit) cycle, and kidneys subsequently excrete it.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'उत्सर्जी पदार्थ के प्रकार',
    'स्थलीय कीट, पक्षी और अधिकांश सरीसृप जल के संरक्षण हेतु मुख्य रूप से किस नाइट्रोजनी अपशिष्ट का उत्सर्जन करते हैं?',
    'To conserve water, terrestrial insects, birds, and most reptiles primarily excrete which nitrogenous waste?',
    ['यूरिक अम्ल (Uric acid)', 'Uric acid'],
    [
      ['अमोनिया (Ammonia)', 'Ammonia'],
      ['यूरिया (Urea)', 'Urea'],
      ['क्रिएटिनिन (Creatinine)', 'Creatinine'],
    ],
    'यूरिक अम्ल सबसे कम विषैला और जल में लगभग अघुलनशील होता है, अतः पक्षी, सरीसृप और कीट (यूरिकोटेलिक जीव) इसे अर्ध-ठोस पेस्ट के रूप में त्यागकर जल बचाते हैं।',
    'Uric acid is least toxic and nearly insoluble in water; uricotelic animals (birds, reptiles, insects) excrete it as pellets/paste to minimize water loss.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'अमोनोटेलिक जंतु',
    'निम्नलिखित में से कौन-से जीव मुख्य रूप से "अमोनोटेलिक" (अमोनिया उत्सर्जी) होते हैं क्योंकि उन्हें उत्सर्जन हेतु अत्यधिक जल उपलब्ध होता है?',
    'Which organisms are primarily "Ammonotelic" (ammonia-excreting) because they have abundant water available?',
    ['अस्थिल मछलियाँ एवं जलीय उभयचर', 'Bony fishes and aquatic amphibians'],
    [
      ['स्तनधारी एवं वयस्क मेंढक', 'Mammals and adult frogs'],
      ['पक्षी एवं छिपकलियाँ', 'Birds and lizards'],
      ['मरुस्थलीय साँप एवं बिच्छू', 'Desert snakes and scorpions'],
    ],
    'अमोनिया अत्यधिक विषैली और जल में अत्यंत घुलनशील होती है; इसके उत्सर्जन के लिए बहुत अधिक जल चाहिए, अतः अस्थिल मछलियाँ व टैडपोल अमोनोटेलिक होते हैं।',
    'Ammonia is highly toxic and readily water-soluble, requiring large amounts of water for elimination; thus bony fishes and aquatic amphibians are ammonotelic.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'परा-निस्पंदन (Ultrafiltration)',
    'नेफ्रॉन के किस भाग में उच्च दाब के कारण रक्त से जल, ग्लूकोज, यूरिया व लवण छनकर बोमेन संपुट में जाते हैं?',
    'In which part of the nephron does high-pressure ultrafiltration force water, glucose, urea, and salts from blood into Bowman’s capsule?',
    ['केशिकागुच्छ (Glomerulus)', 'Glomerulus'],
    [
      ['हेनले का लूप (Loop of Henle)', 'Loop of Henle'],
      ['संग्रहण वाहिनी (Collecting duct)', 'Collecting duct'],
      ['दूरस्थ कुंडलित नलिका (DCT)', 'Distal convoluted tubule (DCT)'],
    ],
    'अभिवाही धमनिका का व्यास अपवाही धमनिका से अधिक होने के कारण ग्लोमेरुलस में उच्च द्रवस्थैतिक दाब बनता है जिससे परा-निस्पंदन होता है (GFR ≈ 125 mL/मिनट)।',
    'Because the afferent arteriole is wider than the efferent arteriole, high hydrostatic pressure in the glomerulus drives ultrafiltration (GFR ~125 mL/min).',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'मूत्र का रंग',
    'मानव मूत्र का हल्का पीला रंग किस वर्णक की उपस्थिति के कारण होता है?',
    'The pale yellow colour of normal human urine is due to the presence of which pigment?',
    ['यूरोक्रोम (Urochrome)', 'Urochrome'],
    [
      ['बिलिवर्डिन', 'Biliverdin'],
      ['मेलानिन', 'Melanin'],
      ['रोडोप्सिन', 'Rhodopsin'],
    ],
    'यूरोक्रोम (यूरोबिलिन) हीमोग्लोबिन के विघटन से बनने वाला पीला वर्णक है जो मूत्र को सामान्य हल्का पीला रंग प्रदान करता है।',
    'Urochrome (urobilin), a yellow pigment derived from haemoglobin breakdown, gives normal human urine its characteristic pale yellow tint.',
    'EASY'
  ),
  q(
    'उत्सर्जन तंत्र',
    'हेनले का लूप',
    'नेफ्रॉन में "हेनले का लूप" (Loop of Henle) मुख्य रूप से किस कार्य में महत्वपूर्ण भूमिका निभाता है?',
    'The "Loop of Henle" in a nephron plays a crucial role primarily in which process?',
    ['मूत्र को सांद्रित करना तथा वृक्क मध्यांश (Medulla) में उच्च परासरणी प्रवणता बनाए रखना', 'Concentrating urine and maintaining high osmolarity in the renal medulla'],
    [
      ['रक्त प्लाज्मा प्रोटीनों का छानना', 'Filtering blood plasma proteins'],
      ['यूरिया का संश्लेषण करना', 'Synthesizing urea'],
      ['इंसुलिन का पुनरावशोषण करना', 'Reabsorbing insulin'],
    ],
    'हेनले के लूप में प्रतिधारा क्रियाविधि (Counter-current mechanism) द्वारा जल और NaCl का पुनरावशोषण होता है जिससे स्तनधारियों में अतिपरासरी (सांद्र) मूत्र बनता है।',
    'Through the counter-current multiplier mechanism, the Loop of Henle establishes medullary hyperosmolarity, enabling mammals to produce concentrated urine.',
    'HARD'
  ),
  q(
    'उत्सर्जन तंत्र',
    'ग्लूकोज पुनरावशोषण',
    'स्वस्थ व्यक्ति के मूत्र में सामान्यतः ग्लूकोज क्यों नहीं पाया जाता?',
    'Why is glucose normally absent in the urine of a healthy person?',
    ['क्योंकि ग्लोमेरुलर निस्यंद का लगभग 100% ग्लूकोज समीपस्थ कुंडलित नलिका (PCT) में पुनः अवशोषित हो जाता है', 'Because nearly 100% of filtered glucose is reabsorbed in the Proximal Convoluted Tubule (PCT)'],
    [
      ['क्योंकि ग्लूकोज ग्लोमेरुलस से छन ही नहीं पाता', 'Because glucose cannot pass through the glomerulus'],
      ['क्योंकि मूत्राशय में ग्लूकोज टूट जाता है', 'Because glucose is broken down in the urinary bladder'],
      ['क्योंकि यकृत सारा ग्लूकोज पित्त में भेज देता है', 'Because the liver diverts all glucose into bile'],
    ],
    'ग्लोमेरुलस में ग्लूकोज छनता है, परंतु PCT की कोशिकाएँ सक्रिय परिवहन द्वारा इसका पूर्ण पुनरावशोषण कर लेती हैं। मधुमेह (Diabetes mellitus) में रक्त शर्करा सीमा से अधिक होने पर मूत्र में ग्लूकोज आने लगता है (ग्लाइकोसूरिया)।',
    'Glucose is freely filtered at the glomerulus but completely reabsorbed via active transport in the PCT; only in uncontrolled diabetes does it spill into urine (glycosuria).',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'डायलिसिस (अपोहन)',
    'वृक्क के विफल हो जाने पर रक्त से यूरिया जैसे नाइट्रोजनी अपशिष्टों को कृत्रिम रूप से निकालने की प्रक्रिया क्या कहलाती है?',
    'What is the medical procedure for artificially removing nitrogenous wastes like urea from the blood during kidney failure called?',
    ['हीमोडायलिसिस (रक्त अपोहन)', 'Haemodialysis'],
    [
      ['एंजियोप्लास्टी', 'Angioplasty'],
      ['बायोप्सी', 'Biopsy'],
      ['कीमोथेरेपी', 'Chemotherapy'],
    ],
    'हीमोडायलिसिस (कृत्रिम वृक्क) में अर्धपारगम्य सेलोफेन झिल्ली के माध्यम से विसरण द्वारा रक्त से यूरिया को डायलाइजिंग द्रव में निकालकर शुद्ध रक्त शरीर में लौटाया जाता है।',
    'Haemodialysis passes blood through cellophane tubes immersed in dialyzing fluid, removing urea by diffusion across a semipermeable membrane.',
    'EASY'
  ),
  q(
    'उत्सर्जन तंत्र',
    'वृक्क की पथरी',
    'मानव वृक्क में बनने वाली अधिकांश पथरी (Kidney Stones / Renal Calculi) मुख्य रूप से किस रासायनिक यौगिक की बनी होती हैं?',
    'Most kidney stones (renal calculi) formed in humans are chemically composed primarily of which compound?',
    ['कैल्शियम ऑक्सैलेट', 'Calcium oxalate'],
    [
      ['सोडियम क्लोराइड', 'Sodium chloride'],
      ['पोटैशियम नाइट्रेट', 'Potassium nitrate'],
      ['मैग्नीशियम सल्फेट', 'Magnesium sulphate'],
    ],
    'मूत्र में अघुलनशील लवणों विशेषकर कैल्शियम ऑक्सैलेट के क्रिस्टलीकरण से वृक्क में पथरी (नेफ्रोलिथियासिस) बन जाती है।',
    'Crystallization of insoluble salts inside the kidney, most commonly calcium oxalate, leads to kidney stones (nephrolithiasis).',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'ADH (वैसोप्रेसिन) हार्मोन',
    'नेफ्रॉन की संग्रहण वाहिनी में जल के पुनरावशोषण को बढ़ाकर मूत्र की मात्रा को कम करने वाला हार्मोन कौन-सा है?',
    'Which hormone increases water reabsorption from the collecting ducts of the nephron to reduce urine volume?',
    ['ADH (एंटीडाययूरेटिक हार्मोन / वैसोप्रेसिन)', 'ADH (Antidiuretic hormone / Vasopressin)'],
    [
      ['इंसुलिन', 'Insulin'],
      ['थायरॉक्सिन', 'Thyroxine'],
      ['कैल्सीटोनिन', 'Calcitonin'],
    ],
    'हाइपोथैलेमस में निर्मित और पश्च पीयूष ग्रंथि से स्रावित ADH जल पुनरावशोषण बढ़ाता है। इसकी कमी से "डायबिटीज इन्सिपिडस" (उदकमेह) रोग होता है।',
    'ADH (vasopressin), synthesized by the hypothalamus and released by the posterior pituitary, promotes water reabsorption; its deficiency causes diabetes insipidus.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'मूत्र का pH एवं संगठन',
    'एक सामान्य स्वस्थ व्यक्ति के मूत्र का औसत pH मान तथा प्रतिदिन उत्सर्जित मूत्र की मात्रा लगभग कितनी होती है?',
    'What is the approximate average pH and daily urine output of a normal healthy human adult?',
    ['pH ~6.0 (हल्का अम्लीय); 1 से 1.5 लीटर प्रतिदिन', 'pH ~6.0 (slightly acidic); 1 to 1.5 litres per day'],
    [
      ['pH ~8.5 (क्षारीय); 5 लीटर प्रतिदिन', 'pH ~8.5 (alkaline); 5 litres per day'],
      ['pH ~2.0 (तीव्र अम्लीय); 200 mL प्रतिदिन', 'pH ~2.0 (strongly acidic); 200 mL per day'],
      ['pH ~7.4; 10 लीटर प्रतिदिन', 'pH ~7.4; 10 litres per day'],
    ],
    'एक वयस्क प्रतिदिन लगभग 1–1.5 लीटर हल्का अम्लीय (pH ~6.0) मूत्र त्यागता है, जिसमें लगभग 95% जल, 2% यूरिया तथा अन्य लवण होते हैं।',
    'A healthy adult excretes ~1–1.5 litres of slightly acidic urine (average pH 6.0) daily, comprising ~95% water, ~2% urea, and salts.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'पोडोसाइट्स',
    'बोमेन संपुट की भीतरी भित्ति में पाई जाने वाली विशिष्ट उपकला कोशिकाएँ जो निस्पंदन दरारें बनाती हैं, क्या कहलाती हैं?',
    'What are the specialized epithelial cells of the inner wall of Bowman’s capsule that form filtration slits called?',
    ['पोडोसाइट्स (Podocytes)', 'Podocytes'],
    [
      ['ऑस्टियोसाइट्स', 'Osteocytes'],
      ['कॉन्ड्रोसाइट्स', 'Chondrocytes'],
      ['मेलानोसाइट्स', 'Melanocytes'],
    ],
    'बोमेन संपुट की अंतरंग परत पोडोसाइट्स से बनी होती है जिनके पाद-प्रवर्धों के बीच सूक्ष्म निस्पंदन छिद्र (Slit pores) रहते हैं।',
    'The visceral layer of Bowman’s capsule is lined by podocytes arranged intricately to leave tiny filtration slits for plasma ultrafiltration.',
    'HARD'
  ),
  q(
    'उत्सर्जन तंत्र',
    'त्वचा व अन्य उत्सर्जी अंग',
    'वृक्क के अतिरिक्त मानव शरीर के कौन-से अन्य अंग उत्सर्जन (कार्बन डाइऑक्साइड, पसीना, पित्त वर्णक आदि) में योगदान देते हैं?',
    'Besides the kidneys, which other human organs contribute to excretion of wastes (CO2, sweat, bile pigments)?',
    ['फेफड़े, त्वचा की स्वेद व तैल ग्रंथियाँ तथा यकृत', 'Lungs, sweat and sebaceous glands of skin, and liver'],
    [
      ['केवल आमाशय और प्लीहा', 'Only stomach and spleen'],
      ['केवल हृदय और अग्न्याशय', 'Only heart and pancreas'],
      ['थायरॉइड और पीयूष ग्रंथि', 'Thyroid and pituitary glands'],
    ],
    'फेफड़े CO2 व जलवाष्प निकालते हैं, त्वचा पसीने से जल/NaCl/थोड़ा यूरिया व सीबम से स्टेरॉल निकालती है, तथा यकृत पित्त के माध्यम से बिलिरुबिन व कोलेस्ट्रॉल का उत्सर्जन करता है।',
    'Lungs eliminate CO2 and water vapour, skin glands excrete sweat (water, NaCl, traces of urea) and sebum, and the liver excretes bilirubin and cholesterol via bile.',
    'EASY'
  ),
  q(
    'उत्सर्जन तंत्र',
    'जक्स्टाग्लोमेरुलर उपकरण (JGA)',
    'वृक्क में GFR (ग्लोमेरुलर निस्यंदन दर) या रक्त दाब कम होने पर जक्स्टाग्लोमेरुलर कोशिकाएँ कौन-सा एंजाइम/हार्मोन स्रावित करती हैं?',
    'When GFR or blood pressure drops in the kidney, which enzyme/hormone is released by the juxtaglomerular (JG) cells?',
    ['रेनिन (Renin)', 'Renin'],
    [
      ['रेनिन (Rennin - आमाशय वाला)', 'Rennin (gastric)'],
      ['ग्लूकागन', 'Glucagon'],
      ['मेलाटोनिन', 'Melatonin'],
    ],
    'वृक्क की JG कोशिकाएँ Renin (एक N वाला) स्रावित करती हैं जो RAAS प्रणाली को सक्रिय कर रक्तदाब व GFR को सामान्य करती है। (Rennin दो N वाला शिशुओं के आमाशय में होता है)।',
    'JG cells secrete Renin (single "n") to activate the Renin-Angiotensin-Aldosterone System (RAAS), restoring BP and GFR. (Rennin with double "n" is gastric).',
    'HARD'
  ),
  q(
    'उत्सर्जन तंत्र',
    'गाउट (Gout)',
    'रक्त में किस उत्सर्जी पदार्थ की अधिकता होकर जोड़ों में क्रिस्टल के रूप में जम जाने से "गाउट (गठिया)" रोग होता है?',
    'Accumulation of crystals of which waste substance in joints causes the painful condition "Gout"?',
    ['यूरिक अम्ल (Uric acid)', 'Uric acid'],
    [
      ['लैक्टिक अम्ल', 'Lactic acid'],
      ['यूरिया', 'Urea'],
      ['ऑक्सैलिक अम्ल', 'Oxalic acid'],
    ],
    'प्यूरीन उपापचय में गड़बड़ी या वृक्क द्वारा कम उत्सर्जन से रक्त में यूरिक अम्ल बढ़ जाता है और इसके मोनोसोडियम यूरेट क्रिस्टल जोड़ों में जमकर दर्द पैदा करते हैं।',
    'Elevated blood uric acid forms monosodium urate crystals in joints (commonly the big toe), causing acute inflammation known as gout.',
    'MEDIUM'
  ),
  q(
    'उत्सर्जन तंत्र',
    'गैसों का उत्सर्जन व यूरेमिया',
    'वृक्क के कार्य न करने पर रक्त में यूरिया का असामान्य रूप से अत्यधिक संचय हो जाना क्या कहलाता है?',
    'Abnormal accumulation of high levels of urea in the blood due to kidney malfunction is called what?',
    ['यूरेमिया (Uremia)', 'Uremia'],
    [
      ['ल्यूकीमिया', 'Leukaemia'],
      ['हीमोफीलिया', 'Haemophilia'],
      ['हाइपोग्लाइसीमिया', 'Hypoglycaemia'],
    ],
    'यूरेमिया एक गंभीर स्थिति है जिसमें वृक्क की खराबी से रक्त में यूरिया अत्यधिक बढ़ जाता है और तुरंत हीमोडायलिसिस की आवश्यकता होती है।',
    'Uremia is a toxic condition resulting from kidney failure where urea accumulates in the blood, often requiring haemodialysis.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मानव मस्तिष्क के भाग',
    'मानव मस्तिष्क का सबसे बड़ा भाग कौन-सा है जो बुद्धि, स्मृति, चिंतन और ऐच्छिक क्रियाओं का केंद्र है?',
    'Which is the largest part of the human brain, serving as the seat of intelligence, memory, thinking, and voluntary actions?',
    ['प्रमस्तिष्क (सेरेब्रम / Cerebrum)', 'Cerebrum'],
    [
      ['अनुमस्तिष्क (सेरेबेलम / Cerebellum)', 'Cerebellum'],
      ['मेडुला ऑब्लांगेटा', 'Medulla oblongata'],
      ['पॉन्स वैरोली', 'Pons Varolii'],
    ],
    'अग्रमस्तिष्क का प्रमस्तिष्क (सेरेब्रम) मानव मस्तिष्क का लगभग दो-तिहाई भाग बनाता है और संवेदी विश्लेषण, स्मृति, तर्क तथा ऐच्छिक गति को नियंत्रित करता है।',
    'The cerebrum (forebrain) accounts for about two-thirds of human brain mass and governs consciousness, memory, reasoning, sensory perception, and voluntary movement.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'अनुमस्तिष्क (Cerebellum)',
    'शरीर के संतुलन, मुद्रा (Posture) और पेशीय समन्वय को बनाए रखने के लिए मस्तिष्क का कौन-सा भाग उत्तरदायी है?',
    'Which part of the brain is responsible for maintaining body balance, posture, and coordination of muscular movements?',
    ['अनुमस्तिष्क (सेरेबेलम / Cerebellum)', 'Cerebellum'],
    [
      ['हाइपोथैलेमस', 'Hypothalamus'],
      ['मेडुला ऑब्लांगेटा', 'Medulla oblongata'],
      ['थैलेमस', 'Thalamus'],
    ],
    'पश्च मस्तिष्क में स्थित अनुमस्तिष्क चलना, साइकिल चलाना, लिखना और शारीरिक संतुलन बनाए रखता है; अल्कोहल के सेवन से यही भाग सर्वाधिक प्रभावित होता है।',
    'The cerebellum (hindbrain) coordinates precision of voluntary movements, posture, and equilibrium; it is strongly impaired by alcohol.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'हाइपोथैलेमस',
    'मानव शरीर के तापमान नियंत्रण (थर्मोरेगुलेशन), भूख, प्यास और भावनाओं का नियमन मस्तिष्क के किस भाग द्वारा होता है?',
    'Which part of the brain regulates body temperature (thermoregulation), hunger, thirst, and emotional drives?',
    ['हाइपोथैलेमस (Hypothalamus)', 'Hypothalamus'],
    [
      ['सेरेबेलम', 'Cerebellum'],
      ['मेडुला ऑब्लांगेटा', 'Medulla oblongata'],
      ['कॉपर्स कैलोसम', 'Corpus callosum'],
    ],
    'अग्रमस्तिष्क के डाइएनसेफेलॉन में स्थित हाइपोथैलेमस शरीर का थर्मोस्टेट कहलाता है तथा यह पीयूष ग्रंथि के स्रावों को नियंत्रित कर तंत्रिका व अंतःस्रावी तंत्र को जोड़ता है।',
    'Located in the forebrain diencephalon, the hypothalamus acts as the body’s thermostat, controls hunger/thirst, and regulates the pituitary gland.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मेडुला ऑब्लांगेटा',
    'हृदय स्पंदन, श्वसन, रक्तदाब, निगलने तथा खाँसी-छींक जैसी अनैच्छिक क्रियाओं का नियंत्रण मस्तिष्क के किस भाग से होता है?',
    'Involuntary functions such as heartbeat, respiration, blood pressure, swallowing, and coughing are controlled by which part of the brain?',
    ['मेडुला ऑब्लांगेटा', 'Medulla oblongata'],
    [
      ['प्रमस्तिष्क (Cerebrum)', 'Cerebrum'],
      ['थैलेमस (Thalamus)', 'Thalamus'],
      ['पीनियल काय (Pineal body)', 'Pineal body'],
    ],
    'मस्तिष्क स्तंभ (Brain stem) का सबसे निचला भाग मेडुला ऑब्लांगेटा जीवनदायी अनैच्छिक क्रियाओं (श्वसन, परिसंचरण, पाचन प्रतिवर्त) को नियंत्रित करता है।',
    'The medulla oblongata, the lowest part of the brainstem, houses vital autonomic centres for respiration, cardiovascular control, and gastric/cough reflexes.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'प्रतिवर्ती क्रिया (Reflex Action)',
    'गर्म वस्तु को छूते ही हाथ का तुरंत पीछे हट जाना किस प्रकार की क्रिया है, और इसका मुख्य नियंत्रण केंद्र कहाँ होता है?',
    'Pulling the hand away instantly upon touching a hot object is what kind of action, and where is its primary control centre?',
    ['प्रतिवर्ती क्रिया (Reflex Action); मेरुरज्जु (Spinal Cord)', 'Reflex Action; Spinal Cord'],
    [
      ['ऐच्छिक क्रिया; प्रमस्तिष्क', 'Voluntary action; Cerebrum'],
      ['हार्मोनल क्रिया; पीयूष ग्रंथि', 'Hormonal action; Pituitary gland'],
      ['संतुलन क्रिया; अनुमस्तिष्क', 'Balancing action; Cerebellum'],
    ],
    'उद्दीपन के प्रति स्वतः, तीव्र और अनैच्छिक अनुक्रिया को प्रतिवर्ती क्रिया (Reflex action) कहते हैं, जिसका प्रतिवर्ती चाप मुख्यतः मेरुरज्जु (Spinal cord) द्वारा संचालित होता है।',
    'A reflex action is a rapid, automatic, involuntary response to a stimulus, primarily integrated at the spinal cord level via a reflex arc.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'कपालीय व मेरु तंत्रिकाएँ',
    'मनुष्य में कपालीय तंत्रिकाओं (Cranial nerves) और मेरु तंत्रिकाओं (Spinal nerves) की संख्या क्रमशः कितनी जोड़ी होती है?',
    'How many pairs of cranial nerves and spinal nerves are present in humans respectively?',
    ['12 जोड़ी कपालीय और 31 जोड़ी मेरु तंत्रिकाएँ', '12 pairs of cranial nerves and 31 pairs of spinal nerves'],
    [
      ['31 जोड़ी कपालीय और 12 जोड़ी मेरु तंत्रिकाएँ', '31 pairs of cranial nerves and 12 pairs of spinal nerves'],
      ['10 जोड़ी कपालीय और 21 जोड़ी मेरु तंत्रिकाएँ', '10 pairs of cranial nerves and 21 pairs of spinal nerves'],
      ['12 जोड़ी कपालीय और 24 जोड़ी मेरु तंत्रिकाएँ', '12 pairs of cranial nerves and 24 pairs of spinal nerves'],
    ],
    'परिधीय तंत्रिका तंत्र में मस्तिष्क से निकलने वाली 12 जोड़ी कपालीय तंत्रिकाएँ तथा मेरुरज्जु से निकलने वाली 31 जोड़ी मेरु तंत्रिकाएँ होती हैं।',
    'The human peripheral nervous system comprises 12 pairs of cranial nerves arising from the brain and 31 pairs of spinal nerves arising from the spinal cord.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'सिनेप्स एवं न्यूरोट्रांसमीटर',
    'दो न्यूरॉनों के बीच का वह सूक्ष्म संधि स्थल जहाँ एक न्यूरॉन से दूसरे न्यूरॉन में तंत्रिका आवेग रासायनिक संदेशवाहक द्वारा संचरित होता है, क्या कहलाता है?',
    'What is the microscopic junction between two neurons across which nerve impulses pass via chemical neurotransmitters called?',
    ['सिनेप्स (Synapse)', 'Synapse'],
    [
      ['रैनवियर का नोड (Node of Ranvier)', 'Node of Ranvier'],
      ['माइलिन आच्छद (Myelin sheath)', 'Myelin sheath'],
      ['सिस्टर्नी (Cisternae)', 'Cisternae'],
    ],
    'सिनेप्स पर पूर्व-सिनेप्टिक न्यूरॉन से एसिटिलकोलीन या नॉर-एड्रीनलीन जैसे न्यूरोट्रांसमीटर मुक्त होते हैं जो अगले न्यूरॉन के डेंड्राइट पर आवेग उत्पन्न करते हैं।',
    'At a chemical synapse, neurotransmitters (like acetylcholine) are released across the synaptic cleft from the axon terminal to stimulate the next neuron.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'आँख की संरचना',
    'मानव नेत्र का वह भाग कौन-सा है जहाँ वस्तु का वास्तविक तथा उल्टा प्रतिबिंब बनता है और जिसमें शलाका (Rods) व शंकु (Cones) कोशिकाएँ होती हैं?',
    'Which part of the human eye forms a real, inverted image of objects and contains photoreceptor rod and cone cells?',
    ['दृष्टिपटल (रेटिना / Retina)', 'Retina'],
    [
      ['कॉर्निया (स्वच्छ मंडल)', 'Cornea'],
      ['परितारिका (आइरिस)', 'Iris'],
      ['लेंस', 'Lens'],
    ],
    'रेटिना प्रकाश-संवेदी आंतरिक परत है। इसमें स्थित शलाका कोशिकाएँ कम प्रकाश (श्वेत-श्याम दृष्टि) हेतु तथा शंकु कोशिकाएँ तीव्र प्रकाश व रंगों की पहचान हेतु होती हैं।',
    'The retina is the innermost light-sensitive layer where real inverted images form. Rods mediate dim-light vision, while cones mediate bright-light and colour vision.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'नेत्र दान व आइरिस',
    'नेत्रदान में दानकर्ता की आँख का कौन-सा भाग प्रत्यारोपित किया जाता है, तथा आँख का रंग किस भाग के वर्णक से निर्धारित होता है?',
    'Which part of a donor’s eye is transplanted during eye donation, and which part determines a person’s eye colour?',
    ['प्रत्यारोपण: कॉर्निया; आँख का रंग: परितारिका (आइरिस)', 'Transplanted: Cornea; Eye colour: Iris'],
    [
      ['प्रत्यारोपण: रेटिना; आँख का रंग: पुतली', 'Transplanted: Retina; Eye colour: Pupil'],
      ['प्रत्यारोपण: लेंस; आँख का रंग: कॉर्निया', 'Transplanted: Lens; Eye colour: Cornea'],
      ['प्रत्यारोपण: आइरिस; आँख का रंग: श्वेतपटल', 'Transplanted: Iris; Eye colour: Sclera'],
    ],
    'नेत्र प्रत्यारोपण में केवल कॉर्निया का उपयोग होता है क्योंकि इसमें रक्त वाहिकाएँ न होने से अस्वीकृति का खतरा कम रहता है। आइरिस (परितारिका) पुतली का आकार और आँख का रंग तय करती है।',
    'Only the cornea is transplanted (keratoplasty) as it is avascular, minimizing graft rejection. The iris controls pupil size and imparts eye colour.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'नेत्र दोष',
    'निकट दृष्टि दोष (Myopia) से पीड़ित व्यक्ति को दूर की वस्तुएँ धुँधली दिखाई देती हैं; इसके सुधार के लिए किस लेंस का प्रयोग किया जाता है?',
    'A person suffering from myopia (near-sightedness) cannot see distant objects clearly; which lens is used to correct it?',
    ['अवतल लेंस (Concave lens)', 'Concave lens'],
    [
      ['उत्तल लेंस (Convex lens)', 'Convex lens'],
      ['बेलनाकार लेंस (Cylindrical lens)', 'Cylindrical lens'],
      ['समतल काँच (Plane glass)', 'Plane glass'],
    ],
    'निकट दृष्टि दोष में प्रतिबिंब रेटिना के आगे बन जाता है, जिसे अपसारी (अवतल) लेंस लगाकर ठीक रेटिना पर फोकस किया जाता है। दूर दृष्टि दोष में उत्तल लेंस प्रयुक्त होता है।',
    'In myopia, distant objects focus in front of the retina; a diverging (concave) lens corrects this. Hypermetropia (far-sightedness) is corrected with a convex lens.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मानव कर्ण',
    'मानव कान में सुनने की वास्तविक क्रिया (ध्वनि तरंगों को तंत्रिका आवेग में बदलना) किस भाग में स्थित "ऑर्गन ऑफ कॉर्टी" द्वारा होती है?',
    'In the human ear, conversion of sound vibrations into nerve impulses by the "Organ of Corti" occurs in which part?',
    ['कर्णावर्त (कॉक्लिया / Cochlea)', 'Cochlea'],
    [
      ['कर्णपटह (Eardrum)', 'Eardrum (Tympanum)'],
      ['अर्धवृत्ताकार नलिकाएँ', 'Semicircular canals'],
      ['यूस्टेशियन नलिका', 'Eustachian tube'],
    ],
    'आंतरिक कर्ण में स्थित कॉक्लिया सुनने का अंग है, जबकि अर्धवृत्ताकार नलिकाएँ और वेस्टिब्यूलर तंत्र शरीर के संतुलन का कार्य करते हैं।',
    'The cochlea of the inner ear houses the Organ of Corti for hearing, whereas the semicircular canals and vestibule maintain body balance.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मानव कंकाल में अस्थियाँ',
    'एक सामान्य वयस्क मनुष्य में कुल कितनी अस्थियाँ होती हैं, और एक नवजात शिशु में लगभग कितनी अस्थियाँ होती हैं?',
    'How many bones are present in a normal adult human skeleton, and approximately how many in a newborn infant?',
    ['वयस्क में 206; नवजात शिशु में लगभग 300', '206 in adults; approximately 300 in newborns'],
    [
      ['वयस्क में 300; नवजात में 206', '300 in adults; 206 in newborns'],
      ['वयस्क में 212; नवजात में 206', '212 in adults; 206 in newborns'],
      ['वयस्क में 180; नवजात में 250', '180 in adults; 250 in newborns'],
    ],
    'नवजात शिशु में लगभग 300 अस्थियाँ/उपास्थि खंड होते हैं, जो विकास के साथ आपस में जुड़कर (Ossification) वयस्क अवस्था में 206 रह जाते हैं।',
    'Newborns have ~300 bones/cartilaginous elements, many of which fuse during growth to leave 206 bones in an adult skeleton.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'अक्षीय व उपांगीय कंकाल',
    'मानव कंकाल की 206 अस्थियों में से अक्षीय कंकाल (Axial Skeleton) और उपांगीय कंकाल (Appendicular Skeleton) में क्रमशः कितनी अस्थियाँ होती हैं?',
    'Out of 206 bones in the human body, how many belong to the Axial skeleton and Appendicular skeleton respectively?',
    ['अक्षीय: 80; उपांगीय: 126', 'Axial: 80; Appendicular: 126'],
    [
      ['अक्षीय: 126; उपांगीय: 80', 'Axial: 126; Appendicular: 80'],
      ['अक्षीय: 100; उपांगीय: 106', 'Axial: 100; Appendicular: 106'],
      ['अक्षीय: 60; उपांगीय: 146', 'Axial: 60; Appendicular: 146'],
    ],
    'अक्षीय कंकाल (80 अस्थियाँ) में खोपड़ी, मेरुदंड, उरोस्थि (Sternum) व पसलियाँ आती हैं। उपांगीय कंकाल (126 अस्थियाँ) में चारों पाद (Limbs) तथा अंस व श्रोणि मेखलाएँ आती हैं।',
    'The axial skeleton (80 bones) includes skull, vertebral column, sternum, and ribs; the appendicular skeleton (126 bones) includes limbs and girdles.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'सबसे लंबी व छोटी अस्थि',
    'मानव शरीर की सबसे लंबी व मजबूत अस्थि तथा सबसे छोटी अस्थि क्रमशः कौन-सी हैं?',
    'Which are the longest/strongest bone and the smallest bone in the human body respectively?',
    ['फीमर (जाँघ की अस्थि) तथा स्टेपीज (मध्य कर्ण की अस्थि)', 'Femur (thigh bone) and Stapes (middle ear bone)'],
    [
      ['ह्यूमरस तथा मेलियस', 'Humerus and Malleus'],
      ['टिबिया तथा इनकस', 'Tibia and Incus'],
      ['स्टर्नम तथा हायॉइड', 'Sternum and Hyoid'],
    ],
    'फीमर शरीर की सबसे लंबी व मजबूत अस्थि है। मध्य कर्ण में तीन अस्थियाँ होती हैं—मेलियस, इनकस व स्टेपीज, जिनमें स्टेपीज सबसे छोटी अस्थि है।',
    'The femur (thigh bone) is the longest and strongest bone, while the stapes (stirrup) in the middle ear is the smallest bone in the human body.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मनुष्य की पसलियाँ',
    'मनुष्य में पसलियों (Ribs) के कितने जोड़े होते हैं, और इनमें से कौन-सी पसलियाँ "तैरती पसलियाँ" (Floating Ribs) कहलाती हैं?',
    'How many pairs of ribs are present in humans, and which pairs are known as "Floating Ribs"?',
    ['12 जोड़ी; अंतिम 2 जोड़ी (11वीं व 12वीं)', '12 pairs; the last 2 pairs (11th and 12th)'],
    [
      ['10 जोड़ी; 8वीं व 9वीं जोड़ी', '10 pairs; 8th and 9th pairs'],
      ['12 जोड़ी; पहली 2 जोड़ी', '12 pairs; first 2 pairs'],
      ['14 जोड़ी; 13वीं व 14वीं जोड़ी', '14 pairs; 13th and 14th pairs'],
    ],
    '12 जोड़ी पसलियों में 1–7 वास्तविक पसलियाँ (सीधे स्टर्नम से जुड़ी), 8–10 कूट पसलियाँ (7वीं से जुड़ी), तथा 11वीं व 12वीं तैरती पसलियाँ (आगे स्टर्नम से नहीं जुड़तीं) कहलाती हैं।',
    'Humans have 12 pairs of ribs: pairs 1–7 are true ribs, 8–10 are false ribs, and pairs 11–12 are floating ribs as their anterior ends do not attach to the sternum.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'अस्थि संधियाँ (Joints)',
    'कंधे और कूल्हे में पाया जाने वाला जोड़, जो चारों दिशाओं में सर्वाधिक गति संभव बनाता है, किस प्रकार की संधि का उदाहरण है?',
    'The joint present at the shoulder and hip, allowing maximum movement in all directions, is an example of which joint?',
    ['कंदुक-खल्लिका संधि (Ball and Socket Joint)', 'Ball and Socket Joint'],
    [
      ['कब्जा संधि (Hinge Joint)', 'Hinge Joint'],
      ['धुराग्र संधि (Pivot Joint)', 'Pivot Joint'],
      ['अचल संधि (Fibrous/Fixed Joint)', 'Fixed Joint'],
    ],
    'कंदुक-खल्लिका संधि (सायनोवियल संधि) में एक अस्थि का गोल सिरा दूसरी के प्यालेनुमा गड्ढे में फिट रहता है, जैसे ह्यूमरस व अंस मेखला (कंधा) तथा फीमर व श्रोणि मेखला (कूल्हा)।',
    'In a ball-and-socket synovial joint (shoulder and hip), a spherical head fits into a cup-like cavity, permitting multi-axial rotational movement.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'कब्जा संधि व धुराग्र संधि',
    'कोहनी और घुटने के जोड़ किस प्रकार की अस्थि संधि के उदाहरण हैं?',
    'Elbow and knee joints are examples of which type of skeletal joint?',
    ['कब्जा संधि (Hinge Joint)', 'Hinge Joint'],
    [
      ['कंदुक-खल्लिका संधि (Ball and Socket Joint)', 'Ball and Socket Joint'],
      ['सैडल संधि (Saddle Joint)', 'Saddle Joint'],
      ['विसर्पी संधि (Gliding Joint)', 'Gliding Joint'],
    ],
    'कब्जा संधि दरवाजे के कब्जे की तरह केवल एक ही तल में मुड़ने की अनुमति देती है (जैसे कोहनी, घुटना, उँगलियों के पोर)। एटलस व एक्सिस कशेरुका के बीच धुराग्र संधि होती है।',
    'Hinge joints (elbow, knee, phalanges) allow movement primarily in one plane like a door hinge. Atlas and axis vertebrae form a pivot joint.',
    'EASY'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'कपाल की अस्थियाँ',
    'मानव खोपड़ी (Cranium / मस्तिष्क पेटी) और चेहरे में क्रमशः कितनी अस्थियाँ होती हैं, तथा चेहरे की एकमात्र गतिशील अस्थि कौन-सी है?',
    'How many bones make up the human cranium and face respectively, and which is the only movable bone of the skull?',
    ['कपाल: 8; चेहरा: 14; गतिशील अस्थि: निचला जबड़ा (मैंडिबल)', 'Cranium: 8; Face: 14; Movable bone: Mandible (lower jaw)'],
    [
      ['कपाल: 14; चेहरा: 8; गतिशील अस्थि: मैक्सिला', 'Cranium: 14; Face: 8; Movable bone: Maxilla'],
      ['कपाल: 12; चेहरा: 10; गतिशील अस्थि: नासा अस्थि', 'Cranium: 12; Face: 10; Movable bone: Nasal bone'],
      ['कपाल: 6; चेहरा: 16; गतिशील अस्थि: जाइगोमैटिक', 'Cranium: 6; Face: 16; Movable bone: Zygomatic'],
    ],
    'मानव खोपड़ी की 22 मुख्य अस्थियों में 8 कपालीय (मस्तिष्क की रक्षा हेतु अचल सिवनी द्वारा जुड़ी) और 14 चेहरे की अस्थियाँ होती हैं; मैंडिबल एकमात्र गतिशील अस्थि है।',
    'The skull comprises 8 cranial bones fused by immovable sutures and 14 facial bones; the mandible (lower jaw) is the sole freely movable skull bone.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'मेरुदंड कशेरुकाएँ',
    'मानव गर्दन में कितनी ग्रीवा कशेरुकाएँ (Cervical Vertebrae) पाई जाती हैं?',
    'How many cervical vertebrae are present in the human neck?',
    ['7 ग्रीवा कशेरुकाएँ', '7 cervical vertebrae'],
    [
      ['5 ग्रीवा कशेरुकाएँ', '5 cervical vertebrae'],
      ['12 ग्रीवा कशेरुकाएँ', '12 cervical vertebrae'],
      ['9 ग्रीवा कशेरुकाएँ', '9 cervical vertebrae'],
    ],
    'जिराफ सहित लगभग सभी स्तनधारियों की गर्दन में 7 ग्रीवा कशेरुकाएँ होती हैं। मनुष्य के मेरुदंड में कुल 26 अस्थियाँ (वयस्क में 33 प्रारंभिक खंडों के जुड़ने से) होती हैं।',
    'Almost all mammals (from humans to giraffes) possess 7 cervical vertebrae. An adult human vertebral column consists of 26 bones (7 cervical, 12 thoracic, 5 lumbar, sacrum, coccyx).',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'सैडल संधि व सायनोवियल द्रव',
    'हाथ के अंगूठे के मेटाकार्पल और कार्पल के बीच कौन-सी विशिष्ट संधि पाई जाती है जो अंगूठे को अन्य उँगलियों के सामने लाने (Opposable thumb) में मदद करती है?',
    'Which specialized joint between the carpal and metacarpal of the thumb enables the opposable thumb movement in humans?',
    ['सैडल संधि (Saddle Joint)', 'Saddle Joint'],
    [
      ['धुराग्र संधि (Pivot Joint)', 'Pivot Joint'],
      ['कब्जा संधि (Hinge Joint)', 'Hinge Joint'],
      ['तंतुमय अचल संधि (Fibrous Joint)', 'Fibrous Joint'],
    ],
    'अंगूठे के आधार पर स्थित सैडल संधि द्वि-अक्षीय गति देती है, जिससे मनुष्य वस्तुओं को मजबूती से पकड़ सकता है। सायनोवियल संधियों में सायनोवियल द्रव घर्षण कम करता है।',
    'The saddle joint at the base of the thumb (trapezium and 1st metacarpal) allows biaxial opposition. Synovial fluid lubricates freely movable joints.',
    'HARD'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'माइलिन आच्छद',
    'परिधीय तंत्रिका तंत्र में न्यूरॉन के एक्सॉन पर माइलिन आच्छद (Myelin Sheath) का निर्माण किन कोशिकाओं द्वारा होता है?',
    'In the peripheral nervous system, which cells form the myelin sheath around the axon of a neuron?',
    ['श्वान कोशिकाएँ (Schwann cells)', 'Schwann cells'],
    [
      ['पार्श्वीय कोशिकाएँ (Parietal cells)', 'Parietal cells'],
      ['पोडोसाइट कोशिकाएँ', 'Podocytes'],
      ['कुपफर कोशिकाएँ', 'Kupffer cells'],
    ],
    'श्वान कोशिकाएँ एक्सॉन के चारों ओर वसीय माइलिन आच्छद बनाती हैं; आच्छद के बीच छूटे रिक्त स्थान "रैनवियर के नोड" कहलाते हैं, जिससे आवेग का चालन तीव्र (Saltatory conduction) होता है।',
    'Schwann cells wrap around peripheral axons to produce the insulating myelin sheath; gaps between segments are Nodes of Ranvier, speeding up impulse conduction.',
    'HARD'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'ऑस्टियोपोरोसिस',
    'वृद्धावस्था में (विशेषकर रजोनिवृत्ति के बाद महिलाओं में एस्ट्रोजन की कमी से) अस्थि द्रव्यमान घटने और अस्थियों के भंगुर होकर टूटने की संभावना बढ़ने का रोग क्या कहलाता है?',
    'Age-related loss of bone mineral density making bones porous and prone to fractures (often due to decreased oestrogen after menopause) is called what?',
    ['ऑस्टियोपोरोसिस (अस्थि-सुषिरता)', 'Osteoporosis'],
    [
      ['ऑस्टियोमलेशिया', 'Osteomalacia'],
      ['मायस्थीनिया ग्रेविस', 'Myasthenia gravis'],
      ['टिटेनी', 'Tetany'],
    ],
    'ऑस्टियोपोरोसिस में अस्थियों से कैल्शियम व खनिज कम हो जाते हैं जिससे वे छिद्रपूर्ण व कमजोर हो जाती हैं।',
    'Osteoporosis is an age-related skeletal disorder characterized by decreased bone mass and fragile bones, commonly linked to reduced oestrogen levels.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'पेशी संकुचन प्रोटीन',
    'कंकाल पेशियों के संकुचन (Muscle Contraction) में मुख्य रूप से कौन-से दो संकुचनशील प्रोटीन तथा कौन-सा धातु आयन भाग लेते हैं?',
    'Which two contractile proteins and which metal ion are primarily involved in skeletal muscle contraction?',
    ['एक्टिन व मायोसिन प्रोटीन; कैल्शियम आयन (Ca²⁺)', 'Actin and Myosin proteins; Calcium ions (Ca²⁺)'],
    [
      ['कोलेजन व इलास्टिन; सोडियम आयन (Na⁺)', 'Collagen and Elastin; Sodium ions (Na⁺)'],
      ['केराटिन व ग्लोब्युलिन; लौह आयन (Fe²⁺)', 'Keratin and Globulin; Iron ions (Fe²⁺)'],
      ['फाइब्रिन व थ्रॉम्बिन; पोटैशियम आयन (K⁺)', 'Fibrin and Thrombin; Potassium ions (K⁺)'],
    ],
    'सार्कोमियर में पतले एक्टिन तंतु मोटे मायोसिन तंतुओं पर सरकते हैं (Sliding filament theory), जिसे कैल्शियम आयन (Ca²⁺) और ATP ऊर्जा की उपस्थिति में नियंत्रित किया जाता है।',
    'According to the sliding filament theory, thin actin filaments slide over thick myosin filaments in the presence of Ca²⁺ ions and ATP.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'पॉलीथीन नहीं—सीएसएफ (CSF)',
    'मस्तिष्क और मेरुरज्जु के चारों ओर मेनिन्जेस झिल्लियों के बीच भरा तरल पदार्थ जो उन्हें बाह्य आघातों से बचाता है, क्या कहलाता है?',
    'What is the protective shock-absorbing fluid circulating between the meninges around the brain and spinal cord called?',
    ['प्रमस्तिष्कमेरु द्रव (Cerebrospinal Fluid - CSF)', 'Cerebrospinal Fluid (CSF)'],
    [
      ['सायनोवियल द्रव (Synovial fluid)', 'Synovial fluid'],
      ['प्लीरल द्रव (Pleural fluid)', 'Pleural fluid'],
      ['पेरिकार्डियल द्रव (Pericardial fluid)', 'Pericardial fluid'],
    ],
    'मस्तिष्क तीन झिल्लियों (ड्यूरा मेटर, अरैक्नॉइड, पाया मेटर) से घिरा रहता है; सब-अरैक्नॉइड स्थान में भरा CSF मस्तिष्क को उत्प्लावन व आघात से सुरक्षा देता है।',
    'CSF circulates in the subarachnoid space of the three meninges (dura mater, arachnoid, pia mater), cushioning the CNS against mechanical shock.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'कॉलर बोन एवं नी कैप',
    'मनुष्य में "कॉलर बोन" (हँसुली) तथा "नी-कैप" (घुटने की कटोरी) को शारीरिक रचना विज्ञान में क्रमशः क्या कहा जाता है?',
    'In human anatomy, the "collar bone" and "kneecap" are known respectively as what?',
    ['क्लैविकल (Clavicle) और पटेला (Patella)', 'Clavicle and Patella'],
    [
      ['स्कैपुला (Scapula) और फिबुला (Fibula)', 'Scapula and Fibula'],
      ['स्टर्नम (Sternum) और रेडियस (Radius)', 'Sternum and Radius'],
      ['ह्यूमरस (Humerus) और अल्ना (Ulna)', 'Humerus and Ulna'],
    ],
    'क्लैविकल (कॉलर बोन) को सौंदर्य अस्थि (Beauty bone) भी कहते हैं, जबकि पटेला घुटने के जोड़ के सामने स्थित एक त्रिकोणीय सेसामॉइड अस्थि है।',
    'The clavicle is the collar bone (part of the pectoral girdle), and the patella is the triangular sesamoid bone forming the kneecap.',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'स्वायत्त तंत्रिका तंत्र',
    'खतरे या आपातकाल ("लड़ो या भागो" स्थिति) में हृदय गति और श्वसन दर बढ़ाने के लिए स्वायत्त तंत्रिका तंत्र का कौन-सा भाग सक्रिय होता है?',
    'During danger or emergency ("fight-or-flight"), which division of the autonomic nervous system accelerates heart rate and breathing?',
    ['अनुकंपी तंत्रिका तंत्र (Sympathetic Nervous System)', 'Sympathetic Nervous System'],
    [
      ['परानुकंपी तंत्रिका तंत्र (Parasympathetic Nervous System)', 'Parasympathetic Nervous System'],
      ['कायिक तंत्रिका तंत्र', 'Somatic Nervous System'],
      ['संवेदी तंत्रिका पथ', 'Sensory Neural Pathway'],
    ],
    'अनुकंपी तंत्रिका तंत्र आपात स्थिति में शरीर को तैयार करता है (हृदय गति व पुतली फैलाना), जबकि परानुकंपी तंत्र विश्राम व पाचन के समय शरीर को सामान्य शांत स्थिति में लाता है।',
    'The sympathetic nervous system triggers "fight-or-flight" responses (elevated heart rate, dilated pupils), whereas the parasympathetic system promotes "rest-and-digest".',
    'MEDIUM'
  ),
  q(
    'तंत्रिका एवं कंकाल तंत्र',
    'जीभ की स्वाद कलिकाएँ',
    'मानव जीभ पर मुख्य रूप से खट्टे (Sour) और नमकीन (Salty) स्वाद की पहचान जीभ के किस भाग की स्वाद कलिकाओं से सर्वाधिक होती है?',
    'Which region of the human tongue is most sensitive to sour and salty tastes (classically mapped)?',
    ['जीभ के पार्श्व किनारे (Lateral sides)', 'Lateral edges/sides of the tongue'],
    [
      ['जीभ का सबसे पिछला आधार भाग', 'Posterior base of the tongue'],
      ['केवल जीभ की सबसे आगे की नोक', 'Strictly the tip of the tongue only'],
      ['जीभ का निचला भाग (अधोजिह्वा)', 'Undersurface of the tongue'],
    ],
    'यद्यपि संपूर्ण जीभ में स्वाद कलिकाएँ होती हैं, पारंपरिक स्वाद मानचित्र में नोक पर मीठा, पार्श्व किनारों पर नमकीन व खट्टा, तथा पिछले भाग में कड़वा स्वाद अधिक संवेदी होता है।',
    'While taste buds detect all tastes across the tongue, sensitivity for sour and salty tastes is prominent along the lateral sides, sweet near the tip, and bitter at the back.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'मास्टर ग्रंथि',
    'मानव शरीर की किस अंतःस्रावी ग्रंथि को अन्य अंतःस्रावी ग्रंथियों के नियंत्रण के कारण "मास्टर ग्रंथि" कहा जाता है?',
    'Which endocrine gland is called the "Master Gland" because it regulates several other endocrine glands?',
    ['पीयूष ग्रंथि (पिट्यूटरी ग्रंथि)', 'Pituitary gland'],
    [
      ['अवटु ग्रंथि (थायरॉइड)', 'Thyroid gland'],
      ['अधिवृक्क ग्रंथि (एड्रीनल)', 'Adrenal gland'],
      ['पीनियल ग्रंथि', 'Pineal gland'],
    ],
    'मस्तिष्क के आधार पर सेला टर्सिका गुहा में स्थित पीयूष ग्रंथि TSH, ACTH, FSH, LH आदि स्रावित कर अन्य ग्रंथियों को नियंत्रित करती है। (स्वयं पीयूष को हाइपोथैलेमस नियंत्रित करता है, अतः हाइपोथैलेमस को "मास्टर ऑफ मास्टर" कहते हैं)।',
    'The pituitary gland, situated in the sella turcica, secretes tropic hormones regulating the thyroid, adrenals, and gonads, while itself being regulated by the hypothalamus.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'वृद्धि हार्मोन (GH)',
    'बाल्यावस्था में पीयूष ग्रंथि से वृद्धि हार्मोन (Growth Hormone) के अत्यधिक स्राव तथा अल्प स्राव से क्रमशः कौन-से रोग होते हैं?',
    'Hypersecretion and hyposecretion of Growth Hormone (GH) from the pituitary during childhood cause which conditions respectively?',
    ['भीमकायता (Gigantism) तथा बौनापन (Dwarfism)', 'Gigantism and Dwarfism'],
    [
      ['एक्रोमेगैली तथा गलगंड', 'Acromegaly and Goitre'],
      ['क्रेटिनिज्म तथा मिक्सीडीमा', 'Cretinism and Myxoedema'],
      ['कुशिंग रोग तथा एडिसन रोग', 'Cushing’s disease and Addison’s disease'],
    ],
    'बचपन में GH की अधिकता से शरीर असामान्य रूप से लंबा (भीमकायता) तथा कमी से बौना (पिट्यूटरी ड्वार्फिज्म) हो जाता है। वयस्कों में GH की अधिकता से एक्रोमेगैली होती है।',
    'Excess GH in childhood causes gigantism and deficiency causes pituitary dwarfism; excess GH in adults causes acromegaly.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'ऑक्सीटोसिन हार्मोन',
    'प्रसव के समय गर्भाशय की चिकनी पेशियों में संकुचन उत्पन्न करने तथा दुग्ध स्राव (Milk ejection) में सहायक हार्मोन कौन-सा है?',
    'Which hormone induces uterine contractions during childbirth and stimulates milk ejection from mammary glands?',
    ['ऑक्सीटोसिन (Oxytocin)', 'Oxytocin'],
    [
      ['प्रोलैक्टिन (Prolactin)', 'Prolactin'],
      ['थायरॉक्सिन (Thyroxine)', 'Thyroxine'],
      ['एल्डोस्टेरोन (Aldosterone)', 'Aldosterone'],
    ],
    'ऑक्सीटोसिन ("बर्थ हार्मोन" / "लव हार्मोन") पश्च पीयूष ग्रंथि से मुक्त होता है, जबकि प्रोलैक्टिन (अग्र पीयूष से) स्तन ग्रंथियों में दुग्ध के निर्माण को प्रेरित करता है।',
    'Oxytocin (from posterior pituitary) triggers labour contractions and milk let-down reflex, whereas prolactin (from anterior pituitary) stimulates milk synthesis.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'थायरॉइड ग्रंथि',
    'मानव शरीर की सबसे बड़ी पूर्णतः अंतःस्रावी ग्रंथि कौन-सी है, और इसके हार्मोन थायरॉक्सिन के संश्लेषण के लिए कौन-सा तत्व अनिवार्य है?',
    'Which is the largest purely endocrine gland in the human body, and which element is essential for synthesizing its hormone thyroxine?',
    ['अवटु ग्रंथि (थायरॉइड); आयोडीन', 'Thyroid gland; Iodine'],
    [
      ['अग्न्याशय; जिंक', 'Pancreas; Zinc'],
      ['पिट्यूटरी; कैल्शियम', 'Pituitary; Calcium'],
      ['एड्रीनल; लोहा', 'Adrenal; Iron'],
    ],
    'गले में श्वासनली के दोनों ओर स्थित थायरॉइड सबसे बड़ी शुद्ध अंतःस्रावी ग्रंथि है। आयोडीन की कमी से थायरॉक्सिन न बनने पर थायरॉइड फूल जाती है जिसे सरल घेंघा (Goitre) कहते हैं।',
    'The bilobed thyroid gland in the neck is the largest pure endocrine gland; iodine deficiency impairs thyroxine synthesis and causes simple goitre.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'थायरॉक्सिन विकार',
    'गर्भावस्था में माता या शैशवावस्था में शिशु में थायरॉक्सिन की कमी से शारीरिक व मानसिक विकास रुक जाना किस रोग को जन्म देता है?',
    'Hypothyroidism during pregnancy or infancy causing stunted physical and mental growth results in which disorder?',
    ['क्रेटिनिज्म (वामनता / जड़वामनता)', 'Cretinism'],
    [
      ['एक्सऑफ्थैल्मिक गॉइटर (ग्रेव्स रोग)', 'Exophthalmic goitre (Graves’ disease)'],
      ['डायबिटीज मेलिटस', 'Diabetes mellitus'],
      ['एक्रिमिगैली', 'Acromegaly'],
    ],
    'बचपन में थायरॉक्सिन की कमी से क्रेटिनिज्म (बौना व मंदबुद्धि होना) तथा वयस्कों में कमी से मिक्सीडीमा होता है। थायरॉक्सिन की अधिकता से ग्रेव्स रोग होता है।',
    'Thyroid hormone deficiency in infants causes cretinism (stunted growth and intellectual disability), while in adults it causes myxoedema; hyperthyroidism causes Graves’ disease.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'परावटु (Parathyroid) ग्रंथि',
    'रक्त में कैल्शियम और फॉस्फेट आयनों के स्तर को बढ़ाने वाला हार्मोन कौन-सा है?',
    'Which hormone increases blood calcium levels by stimulating bone resorption and calcium reabsorption in kidneys?',
    ['पैराथॉर्मोन (PTH)', 'Parathormone (PTH)'],
    [
      ['थायरोकैल्सीटोनिन (TCT)', 'Thyrocalcitonin (TCT)'],
      ['इंसुलिन', 'Insulin'],
      ['मेलाटोनिन', 'Melatonin'],
    ],
    'परावटु (पैराथायरॉइड) ग्रंथि से स्रावित PTH रक्त में Ca²⁺ स्तर बढ़ाता है (हाइपरकैल्सीमिक), जबकि थायरॉइड का कैल्सीटोनिन रक्त में Ca²⁺ स्तर घटाता है।',
    'Parathyroid hormone (PTH) is hypercalcaemic (raises blood Ca²⁺), acting antagonistically to thyroid calcitonin which lowers blood Ca²⁺.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'अधिवृक्क ग्रंथि (Adrenal)',
    'किस हार्मोन को "लड़ो या उड़ो हार्मोन" (Fight or Flight Hormone) / आपातकालीन हार्मोन कहा जाता है?',
    'Which hormone is known as the "Fight or Flight" or emergency hormone?',
    ['एड्रीनलीन (एपिनेफ्रीन)', 'Adrenaline (Epinephrine)'],
    [
      ['इंसुलिन', 'Insulin'],
      ['थायरॉक्सिन', 'Thyroxine'],
      ['प्रोजेस्टेरोन', 'Progesterone'],
    ],
    'अधिवृक्क ग्रंथि के मेडुला भाग से स्रावित एड्रीनलीन व नॉर-एड्रीनलीन संकट के समय हृदय गति, रक्तदाब, श्वसन दर व रक्त शर्करा बढ़ाकर शरीर को तुरंत प्रतिक्रिया हेतु तैयार करते हैं।',
    'Secreted by the adrenal medulla during stress, adrenaline (epinephrine) rapidly elevates heart rate, BP, alertness, and blood glucose.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'अग्न्याशय के हार्मोन',
    'अग्न्याशय की लैंगरहैन्स की द्वीपिकाओं की किन कोशिकाओं से "इंसुलिन" हार्मोन स्रावित होता है?',
    'Which cells of the Islets of Langerhans in the pancreas secrete the hormone "Insulin"?',
    ['बीटा (β) कोशिकाएँ', 'Beta (β) cells'],
    [
      ['अल्फा (α) कोशिकाएँ', 'Alpha (α) cells'],
      ['डेल्टा (δ) कोशिकाएँ', 'Delta (δ) cells'],
      ['एसीनार कोशिकाएँ', 'Acinar cells'],
    ],
    'लैंगरहैन्स की द्वीपिकाओं में अल्फा कोशिकाएँ ग्लूकागन (रक्त शर्करा बढ़ाती हैं) और बीटा कोशिकाएँ इंसुलिन (रक्त शर्करा घटाती हैं) स्रावित करती हैं।',
    'In the Islets of Langerhans, beta cells secrete insulin (hypoglycaemic) while alpha cells secrete glucagon (hyperglycaemic).',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'इंसुलिन एवं मधुमेह',
    'इंसुलिन हार्मोन के निर्माण में कौन-सा सूक्ष्म खनिज तत्व आवश्यक होता है, और इंसुलिन की कमी से कौन-सा रोग होता है?',
    'Which trace mineral is required in the insulin complex, and which disease results from insulin deficiency?',
    ['जस्ता (जिंक / Zn); डायबिटीज मेलिटस (मधुमेह)', 'Zinc (Zn); Diabetes mellitus'],
    [
      ['ताँबा (Cu); डायबिटीज इन्सिपिडस', 'Copper (Cu); Diabetes insipidus'],
      ['आयोडीन (I); घेंघा', 'Iodine (I); Goitre'],
      ['कोबाल्ट (Co); स्कर्वी', 'Cobalt (Co); Scurvy'],
    ],
    'इंसुलिन के क्रिस्टलीकरण व भंडारण में जिंक (Zn) भाग लेता है। इंसुलिन की कमी या प्रतिरोध से रक्त में ग्लूकोज अत्यधिक बढ़ जाता है जिसे डायबिटीज मेलिटस कहते हैं।',
    'Zinc (Zn) stabilizes insulin hexamers in pancreatic beta cells; insulin deficiency or resistance causes elevated blood glucose (Diabetes mellitus).',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'पीनियल ग्रंथि',
    'मस्तिष्क की कौन-सी छोटी ग्रंथि "मेलाटोनिन" हार्मोन स्रावित करके शरीर की दैनिक जैविक घड़ी (निद्रा-जागरण चक्र / Circadian Rhythm) को नियंत्रित करती है?',
    'Which tiny gland in the brain secretes "Melatonin" to regulate the body’s circadian rhythm (sleep-wake cycle)?',
    ['पीनियल ग्रंथि (Pineal gland)', 'Pineal gland'],
    [
      ['थाइमस ग्रंथि (Thymus gland)', 'Thymus gland'],
      ['थायरॉइड ग्रंथि (Thyroid gland)', 'Thyroid gland'],
      ['पिट्यूटरी ग्रंथि (Pituitary gland)', 'Pituitary gland'],
    ],
    'अग्रमस्तिष्क के पृष्ठीय भाग में स्थित पीनियल ग्रंथि अंधकार में मेलाटोनिन का स्राव बढ़ाकर नींद व 24 घंटे की जैविक लय को नियंत्रित करती है।',
    'The pineal gland secretes melatonin in response to darkness, regulating the 24-hour diurnal sleep–wake cycle (circadian rhythm).',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'थाइमस ग्रंथि',
    'निम्नलिखित में से कौन-सी ग्रंथि शिशुओं व बच्चों में बड़ी होती है, परंतु वयस्क होने पर आकार में घटती जाती है तथा T-लिम्फोसाइट्स के परिपक्वन में मुख्य भूमिका निभाती है?',
    'Which gland is large in children, gradually degenerates with age, and plays a crucial role in T-lymphocyte maturation?',
    ['थाइमस ग्रंथि (Thymus gland)', 'Thymus gland'],
    [
      ['एड्रीनल ग्रंथि', 'Adrenal gland'],
      ['पीयूष ग्रंथि', 'Pituitary gland'],
      ['परावटु ग्रंथि', 'Parathyroid gland'],
    ],
    'हृदय व महाधमनी के ऊपर स्थित थाइमस ग्रंथि थायमोसिन हार्मोन स्रावित करती है जो T-लिम्फोसाइट्स को परिपक्व कर प्रतिरक्षा प्रदान करती है। वृद्धावस्था में इसके ह्रास से प्रतिरक्षा कमजोर होती है।',
    'The thymus gland secretes thymosins essential for T-cell differentiation and immunity; its progressive atrophy in old age contributes to weaker immunity.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'लिंग हार्मोन',
    'वृषण की लेडिग कोशिकाओं द्वारा स्रावित मुख्य नर लिंग हार्मोन कौन-सा है जो द्वितीयक लैंगिक लक्षणों को नियंत्रित करता है?',
    'Which primary male sex hormone secreted by Leydig cells of the testes regulates secondary sexual characteristics?',
    ['टेस्टोस्टेरोन (Testosterone)', 'Testosterone'],
    [
      ['एस्ट्रोजन (Oestrogen)', 'Oestrogen'],
      ['प्रोजेस्टेरोन (Progesterone)', 'Progesterone'],
      ['ऑक्सीटोसिन (Oxytocin)', 'Oxytocin'],
    ],
    'वृषण के अंतराली कोशिकाओं (लेडिग कोशिकाओं) से स्रावित एंड्रोजन (मुख्यतः टेस्टोस्टेरोन) शुक्राणुजनन, आवाज के भारीपन व दाढ़ी-मूँछ के विकास को नियंत्रित करता है।',
    'Leydig (interstitial) cells of the testes secrete androgens, mainly testosterone, regulating spermatogenesis and male secondary sexual traits.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'प्रोजेस्टेरोन (गर्भ हार्मोन)',
    'अंडाशय के कॉर्पस ल्यूटियम द्वारा स्रावित कौन-सा हार्मोन गर्भावस्था को बनाए रखने में सहायता करता है ("प्रेग्नेंसी हार्मोन")?',
    'Which hormone secreted by the corpus luteum of the ovary supports pregnancy ("pregnancy hormone")?',
    ['प्रोजेस्टेरोन (Progesterone)', 'Progesterone'],
    [
      ['रिलैक्सिन (Relaxin)', 'Relaxin'],
      ['टेस्टोस्टेरोन', 'Testosterone'],
      ['ग्लूकागन', 'Glucagon'],
    ],
    'अंडोत्सर्ग के बाद बने कॉर्पस ल्यूटियम से प्रोजेस्टेरोन स्रावित होता है जो गर्भाशय की एंडोमेट्रियम परत को भ्रूण रोपण व गर्भ धारण के लिए तैयार व स्थिर रखता है।',
    'Progesterone secreted by the corpus luteum maintains the uterine endometrium necessary for implantation and sustenance of pregnancy.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'अंतःस्रावी व बहिःस्रावी अंतर',
    'अंतःस्रावी ग्रंथियों (Endocrine Glands) को "नलिकाविहीन ग्रंथियाँ" (Ductless Glands) क्यों कहा जाता है?',
    'Why are endocrine glands called "Ductless Glands"?',
    ['क्योंकि इनमें नलिकाएँ नहीं होतीं और ये अपने हार्मोन सीधे रक्त में स्रावित करती हैं', 'Because they lack ducts and release their hormones directly into the bloodstream'],
    [
      ['क्योंकि ये केवल त्वचा के ऊपर पसीना छोड़ती हैं', 'Because they release sweat onto the skin surface'],
      ['क्योंकि इनमें कोई कोशिकाएँ नहीं होतीं', 'Because they contain no secretory cells'],
      ['क्योंकि ये केवल पाचक एंजाइम बनाती हैं', 'Because they produce only digestive enzymes'],
    ],
    'बहिःस्रावी ग्रंथियाँ (लार, स्वेद, यकृत) नलिकाओं द्वारा अपना स्राव छोड़ती हैं, जबकि अंतःस्रावी ग्रंथियों में नलिकाएँ नहीं होतीं और हार्मोन सीधे रक्त द्वारा लक्ष्य अंगों तक पहुँचते हैं।',
    'Unlike exocrine glands that secrete via ducts, endocrine glands lack ducts and secrete hormones directly into surrounding capillaries/blood.',
    'EASY'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'ग्लूकागन का कार्य',
    'रक्त में ग्लूकोज का स्तर सामान्य से कम (Hypoglycaemia) होने पर कौन-सा हार्मोन यकृत में ग्लाइकोजन को तोड़कर रक्त शर्करा बढ़ाता है?',
    'When blood glucose drops below normal, which hormone stimulates glycogenolysis in the liver to raise blood sugar?',
    ['ग्लूकागन (Glucagon)', 'Glucagon'],
    [
      ['इंसुलिन (Insulin)', 'Insulin'],
      ['कैल्सीटोनिन (Calcitonin)', 'Calcitonin'],
      ['थाइमोसिन (Thymosin)', 'Thymosin'],
    ],
    'अग्न्याशय की अल्फा कोशिकाओं से स्रावित ग्लूकागन यकृत कोशिकाओं में ग्लाइकोजन को ग्लूकोज में बदलकर रक्त शर्करा को सामान्य स्तर तक बढ़ाता है।',
    'Glucagon from pancreatic alpha cells stimulates liver glycogenolysis and gluconeogenesis to elevate blood glucose levels.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'एल्डोस्टेरोन (मिनरलोकॉर्टिकॉइड)',
    'अधिवृक्क वल्कुट (Adrenal Cortex) से स्रावित मुख्य मिनरलोकॉर्टिकॉइड हार्मोन कौन-सा है जो शरीर में Na⁺ और जल का संतुलन बनाए रखता है?',
    'Which main mineralocorticoid secreted by the adrenal cortex regulates Na⁺ and water balance in the body?',
    ['एल्डोस्टेरोन (Aldosterone)', 'Aldosterone'],
    [
      ['कॉर्टिसोल (Cortisol)', 'Cortisol'],
      ['एड्रीनलीन (Adrenaline)', 'Adrenaline'],
      ['सोमैटोस्टैटिन', 'Somatostatin'],
    ],
    'एल्डोस्टेरोन वृक्क नलिकाओं पर कार्य कर Na⁺ और जल के पुनरावशोषण तथा K⁺ के उत्सर्जन को प्रेरित कर रक्त आयतन व दाब संतुलित रखता है।',
    'Aldosterone acts on renal tubules to promote Na⁺ and water reabsorption and K⁺ excretion, maintaining electrolyte balance and blood pressure.',
    'HARD'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'एडिसन रोग व कुशिंग सिंड्रोम',
    'अधिवृक्क वल्कुट (Adrenal Cortex) से कॉर्टिकॉइड हार्मोनों के अल्पस्राव से कौन-सा रोग होता है जिसमें त्वचा का रंग कांस्य जैसा व अत्यधिक कमजोरी हो जाती है?',
    'Hyposecretion of adrenal cortex hormones causing bronze skin pigmentation and severe weakness leads to which disorder?',
    ['एडिसन रोग (Addison’s disease)', 'Addison’s disease'],
    [
      ['क्रेटिनिज्म', 'Cretinism'],
      ['ग्रेव्स रोग', 'Graves’ disease'],
      ['डायबिटीज इन्सिपिडस', 'Diabetes insipidus'],
    ],
    'एड्रीनल कॉर्टेक्स के क्षतिग्रस्त होने से कॉर्टिसोल व एल्डोस्टेरोन की कमी होने पर एडिसन रोग होता है, जबकि कॉर्टिसोल की अधिकता से कुशिंग सिंड्रोम होता है।',
    'Underproduction of adrenal cortical hormones (cortisol and aldosterone) causes Addison’s disease, whereas cortisol excess causes Cushing’s syndrome.',
    'HARD'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'फीडबैक तंत्र',
    'मानव शरीर में अधिकांश अंतःस्रावी हार्मोनों का स्राव किस नियंत्रण क्रियाविधि द्वारा संतुलित रहता है?',
    'The secretion of most endocrine hormones in the human body is regulated by which control mechanism?',
    ['नकारात्मक पुनर्निवेशन तंत्र (Negative Feedback Mechanism)', 'Negative Feedback Mechanism'],
    [
      ['सकारात्मक परासरण तंत्र', 'Positive Osmosis Mechanism'],
      ['यांत्रिक निस्पंदन तंत्र', 'Mechanical Filtration Mechanism'],
      ['केवल ऐच्छिक तंत्रिका आदेश', 'Purely Voluntary Neural Command'],
    ],
    'नकारात्मक फीडबैक में जब किसी हार्मोन (जैसे थायरॉक्सिन) का स्तर पर्याप्त हो जाता है, तो वह स्वयं हाइपोथैलेमस व पीयूष ग्रंथि को संदेश भेजकर अपना स्राव कम करा देता है।',
    'In negative feedback, rising levels of a target hormone or physiological effect inhibit further release of stimulating hormones from the hypothalamus/pituitary.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'ANF (एट्रियल नैट्रियूरेटिक कारक)',
    'जब रक्त दाब बढ़ जाता है, तो हृदय की अलिंद भित्ति से कौन-सा पेप्टाइड हार्मोन स्रावित होता है जो रक्त वाहिकाओं को फैलाकर रक्त दाब कम करता है?',
    'When blood pressure rises, which peptide hormone is secreted by the atrial wall of the heart to dilate blood vessels and lower BP?',
    ['ANF (एट्रियल नैट्रियूरेटिक कारक)', 'ANF (Atrial Natriuretic Factor)'],
    [
      ['एंजियोटेंसिन-II', 'Angiotensin-II'],
      ['वैसोप्रेसिन (ADH)', 'Vasopressin (ADH)'],
      ['गैस्ट्रिन', 'Gastrin'],
    ],
    'हृदय के अलिंद से स्रावित ANF रेनिन-एंजियोटेंसिन तंत्र (RAAS) के विपरीत कार्य कर वाहिका-विस्फारण (Vasodilation) द्वारा रक्त दाब को कम करता है।',
    'Atrial Natriuretic Factor (ANF) secreted by cardiac atria opposes the RAAS mechanism, promoting vasodilation and Na⁺ excretion to decrease blood pressure.',
    'HARD'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'गैस्ट्रो-इंटेस्टाइनल हार्मोन',
    'ग्रहणी (Duodenum) की श्लेष्मिका द्वारा स्रावित कौन-सा हार्मोन अग्न्याशय को बाइकार्बोनेट युक्त जल व पित्ताशय को पित्त छोड़ने हेतु प्रेरित करता है?',
    'Which hormones secreted by the duodenal mucosa stimulate pancreatic bicarbonate/water release and gallbladder contraction respectively?',
    ['सीक्रेटिन और कोलेसिस्टोकाइनिन (CCK)', 'Secretin and Cholecystokinin (CCK)'],
    [
      ['इंसुलिन और ग्लूकागन', 'Insulin and Glucagon'],
      ['रेनिन और एल्डोस्टेरोन', 'Renin and Aldosterone'],
      ['मेलाटोनिन और थायमोसिन', 'Melatonin and Thymosin'],
    ],
    'सीक्रेटिन (खोजा गया पहला हार्मोन) अग्न्याशय से क्षारीय बाइकार्बोनेट स्राव बढ़ाता है, जबकि CCK अग्न्याशय एंजाइम व पित्ताशय संकुचन को प्रेरित करता है।',
    'Secretin (the first hormone discovered) stimulates pancreatic bicarbonate secretion, while Cholecystokinin (CCK) stimulates pancreatic enzyme secretion and gallbladder contraction.',
    'HARD'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'हार्मोन की रासायनिक प्रकृति',
    'निम्नलिखित में से कौन-सा हार्मोन रासायनिक रूप से स्टेरॉयड (Steroid) प्रकृति का है?',
    'Which of the following hormones is chemically a steroid hormone?',
    ['कॉर्टिसोल / टेस्टोस्टेरोन / एस्ट्रोजन', 'Cortisol / Testosterone / Oestrogen'],
    [
      ['इंसुलिन', 'Insulin'],
      ['ऑक्सीटोसिन', 'Oxytocin'],
      ['वृद्धि हार्मोन (GH)', 'Growth Hormone (GH)'],
    ],
    'एड्रीनल कॉर्टेक्स के हार्मोन (कॉर्टिसोल, एल्डोस्टेरोन) और जनन ग्रंथियों के हार्मोन (टेस्टोस्टेरोन, एस्ट्रोजन, प्रोजेस्टेरोन) कोलेस्ट्रॉल से व्युत्पन्न स्टेरॉयड हार्मोन हैं, जबकि इंसुलिन व GH पेप्टाइड/प्रोटीन हैं।',
    'Adrenocortical hormones (cortisol, aldosterone) and sex hormones (testosterone, oestrogen, progesterone) are cholesterol-derived steroids, whereas insulin and GH are peptides.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'रिलैक्सिन हार्मोन',
    'प्रसव से ठीक पहले श्रोणि मेखला के स्नायुबंधन और प्यूबिक सिम्फाइसिस को ढीला कर प्रसव को सुगम बनाने वाला हार्मोन कौन-सा है?',
    'Which hormone softens the pubic symphysis and pelvic ligaments shortly before childbirth to facilitate delivery?',
    ['रिलैक्सिन (Relaxin)', 'Relaxin'],
    [
      ['प्रोलैक्टिन', 'Prolactin'],
      ['ल्यूटिनाइजिंग हार्मोन (LH)', 'Luteinizing Hormone (LH)'],
      ['सोमैटोस्टैटिन', 'Somatostatin'],
    ],
    'गर्भावस्था के अंतिम चरण में अंडाशय और प्लेसेंटा से स्रावित रिलैक्सिन हार्मोन गर्भाशय ग्रीवा को चौड़ा व श्रोणि संधियों को लचीला बनाता है।',
    'Secreted by the ovary and placenta near the end of pregnancy, relaxin dilates the cervix and relaxes pelvic ligaments to ease childbirth.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'अंतःस्रावी विज्ञान के जनक',
    'अंतःस्रावी विज्ञान (Endocrinology) के जनक किसे माना जाता है तथा "हार्मोन" शब्द सर्वप्रथम किसने दिया?',
    'Who is regarded as the father of Endocrinology, and who coined the term "Hormone"?',
    ['थॉमस एडिसन (जनक); अर्नेस्ट स्टार्लिंग (हार्मोन शब्द)', 'Thomas Addison (Father); Ernest Starling (coined Hormone)'],
    [
      ['विलियम हार्वे; कार्ल लैंडस्टीनर', 'William Harvey; Karl Landsteiner'],
      ['ग्रेगर मेंडल; ह्यूगो डी व्रीज', 'Gregor Mendel; Hugo de Vries'],
      ['इवान पावलोव; कैमिलो गॉल्जी', 'Ivan Pavlov; Camillo Golgi'],
    ],
    'थॉमस एडिसन को अंतःस्रावी विज्ञान का जनक कहा जाता है और 1905 में अर्नेस्ट स्टार्लिंग (बेलिस के साथ सीक्रेटिन की खोज के बाद) ने "हार्मोन" शब्द दिया।',
    'Thomas Addison is credited as the father of endocrinology, and Ernest Starling coined the word "hormone" in 1905 after co-discovering secretin with William Bayliss.',
    'HARD'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'FSH व LH (गोनाडोट्रोपिन)',
    'अग्र पीयूष ग्रंथि से स्रावित किन दो हार्मोनों को सम्मिलित रूप से "गोनाडोट्रोपिन" (जनन ग्रंथि प्रेरक) कहा जाता है?',
    'Which two anterior pituitary hormones are collectively termed "Gonadotropins"?',
    ['पुटिका-उद्दीपक हार्मोन (FSH) और ल्यूटिनाइजिंग हार्मोन (LH)', 'Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH)'],
    [
      ['TSH और ACTH', 'TSH and ACTH'],
      ['ऑक्सीटोसिन और ADH', 'Oxytocin and ADH'],
      ['इंसुलिन और ग्लूकागन', 'Insulin and Glucagon'],
    ],
    'FSH और LH जनन ग्रंथियों (वृषण और अंडाशय) की क्रियाशीलता को नियंत्रित करते हैं; महिलाओं में LH का तीव्र उभार (LH surge) अंडोत्सर्ग कराता है।',
    'FSH and LH regulate gonadal activity in both sexes; in females, the mid-cycle LH surge triggers ovulation.',
    'MEDIUM'
  ),
  q(
    'अंतःस्रावी ग्रंथियाँ व हार्मोन',
    'कॉर्टिसोल (तनाव हार्मोन)',
    'लंबे समय के तनाव के दौरान ग्लूकोनियोजेनेसिस को प्रेरित कर रक्त ग्लूकोज बढ़ाने और सूजन कम करने वाला प्रमुख ग्लूकोकॉर्टिकॉइड हार्मोन कौन-सा है?',
    'Which primary glucocorticoid hormone raises blood glucose via gluconeogenesis during prolonged stress and exerts anti-inflammatory effects?',
    ['कॉर्टिसोल (Cortisol)', 'Cortisol'],
    [
      ['एल्डोस्टेरोन', 'Aldosterone'],
      ['मेलाटोनिन', 'Melatonin'],
      ['थायरॉक्सिन', 'Thyroxine'],
    ],
    'अधिवृक्क वल्कुट से स्रावित कॉर्टिसोल प्रमुख ग्लूकोकॉर्टिकॉइड है जो कार्बोहाइड्रेट उपापचय, प्रतिरक्षा दमन तथा सूजन-रोधी अभिक्रियाओं में भाग लेता है।',
    'Cortisol, the primary glucocorticoid from the adrenal cortex, promotes gluconeogenesis, modulates stress responses, and suppresses inflammation.',
    'MEDIUM'
  ),,
  // SECTION 3: स्वास्थ्य, पोषण, विटामिन एवं रोग (110 Qs — Part A: 55 Qs)
  // =========================================================================
  q(
    'पोषण एवं संतुलित आहार',
    'कार्बोहाइड्रेट के प्रकार',
    'त्वरित ऊर्जा प्रदान करने वाले एकल शर्करा (मोनोसैकेराइड) का सही उदाहरण निम्नलिखित में से कौन-सा है?',
    'Which of the following is a correct example of a monosaccharide providing instant energy?',
    ['ग्लूकोज एवं फ्रक्टोज', 'Glucose and Fructose'],
    [
      ['सुक्रोज एवं माल्टोज', 'Sucrose and Maltose'],
      ['स्टार्च एवं सेल्यूलोज', 'Starch and Cellulose'],
      ['ग्लाइकोजन एवं काइटिन', 'Glycogen and Chitin'],
    ],
    'ग्लूकोज, फ्रक्टोज (फल शर्करा) और गैलेक्टोज मोनोसैकेराइड हैं। सुक्रोज, माल्टोज व लैक्टोज डाइसैकेराइड हैं तथा स्टार्च, सेल्यूलोज व ग्लाइकोजन पॉलीसैकेराइड हैं।',
    'Glucose, fructose (fruit sugar), and galactose are monosaccharides; sucrose, maltose, and lactose are disaccharides; starch, cellulose, and glycogen are polysaccharides.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'सबसे मीठी प्राकृतिक शर्करा',
    'फलों और शहद में पाई जाने वाली सबसे मीठी प्राकृतिक शर्करा कौन-सी है?',
    'Which is the sweetest naturally occurring sugar found in fruits and honey?',
    ['फ्रक्टोज (Fructose)', 'Fructose'],
    [
      ['ग्लूकोज (Glucose)', 'Glucose'],
      ['लैक्टोज (Lactose)', 'Lactose'],
      ['स्टार्च (Starch)', 'Starch'],
    ],
    'फ्रक्टोज (फल शर्करा) सभी प्राकृतिक कार्बोहाइड्रेट शर्कराओं में सबसे अधिक मीठी होती है और यह मुख्यतः पके फलों व शहद में पाई जाती है।',
    'Fructose (fruit sugar / laevulose) is the sweetest among natural sugars and occurs abundantly in ripe fruits and honey.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'स्टार्च का आयोडीन परीक्षण',
    'किसी खाद्य पदार्थ (जैसे उबला आलू या चावल) में स्टार्च (मंड) की उपस्थिति की जाँच के लिए आयोडीन विलयन डालने पर कैसा रंग प्राप्त होता है?',
    'What colour is observed when iodine solution is added to a food item (such as boiled potato or rice) to test for the presence of starch?',
    ['नीला-काला (Blue-Black)', 'Blue-Black'],
    [
      ['ईंट जैसा लाल (Brick Red)', 'Brick Red'],
      ['गहरा बैंगनी (Deep Violet)', 'Deep Violet'],
      ['चमकीला पीला (Bright Yellow)', 'Bright Yellow'],
    ],
    'आयोडीन विलयन स्टार्च के एमाइलोज अणुओं से क्रिया करके गहरा नीला-काला रंग देता है। प्रोटीन जाँच (बाययूरेट/कॉपर सल्फेट + कास्टिक सोडा) में बैंगनी रंग आता है।',
    'Iodine forms a blue-black complex with amylose helices in starch. (Protein testing with CuSO4 + NaOH yields a violet colour).',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'प्रोटीन की इकाई',
    'प्रोटीन जैविक रूप से किन इकाइयों के बहुलक (Polymers) होते हैं जो पेप्टाइड बंधों द्वारा जुड़े रहते हैं?',
    'Proteins are biological polymers composed of which monomer units linked by peptide bonds?',
    ['अमीनो अम्ल (Amino acids)', 'Amino acids'],
    [
      ['वसा अम्ल (Fatty acids)', 'Fatty acids'],
      ['मोनोसैकेराइड (Monosaccharides)', 'Monosaccharides'],
      ['न्यूक्लियोटाइड (Nucleotides)', 'Nucleotides'],
    ],
    'प्रोटीन 20 प्रकार के α-अमीनो अम्लों से बने होते हैं जो पेप्टाइड बंध द्वारा जुड़कर पॉलीपेप्टाइड श्रृंखला बनाते हैं। शरीर में ऊतक निर्माण व मरम्मत हेतु प्रोटीन अनिवार्य है।',
    'Proteins are polymers of 20 α-amino acids joined by peptide bonds, essential for body building, tissue repair, and enzyme synthesis.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'ऊर्जा मान (Caloric Value)',
    '1 ग्राम कार्बोहाइड्रेट, 1 ग्राम प्रोटीन और 1 ग्राम वसा के पूर्ण ऑक्सीकरण से शरीर को क्रमशः लगभग कितनी शारीरिक ऊर्जा (kcal) प्राप्त होती है?',
    'Approximately how much physiological energy (kcal) does the body obtain from 1 gram each of carbohydrate, protein, and fat respectively?',
    ['4 kcal, 4 kcal और 9 kcal', '4 kcal, 4 kcal, and 9 kcal'],
    [
      ['9 kcal, 4 kcal और 4 kcal', '9 kcal, 4 kcal, and 4 kcal'],
      ['4 kcal, 9 kcal और 9 kcal', '4 kcal, 9 kcal, and 9 kcal'],
      ['2 kcal, 4 kcal और 6 kcal', '2 kcal, 4 kcal, and 6 kcal'],
    ],
    'वसा ऊर्जा का सबसे सघन स्रोत है जो प्रति ग्राम ~9 kcal (किलोकैलोरी) देती है, जबकि कार्बोहाइड्रेट और प्रोटीन प्रति ग्राम ~4 kcal ऊर्जा देते हैं।',
    'Fat is the most concentrated energy source (~9 kcal/g), whereas both carbohydrates and proteins provide ~4 kcal/g physiologically.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'क्वाशियोरकोर रोग',
    'छोटे बच्चों (1–5 वर्ष) में केवल प्रोटीन की गंभीर कमी (परंतु पर्याप्त कैलोरी) के कारण होने वाला रोग जिसमें पेट फूला व हाथ-पैर सूजे दिखते हैं, कौन-सा है?',
    'Which deficiency disorder in young children (1–5 years) is caused specifically by severe protein deficiency (with near-adequate calories), showing oedema and a pot belly?',
    ['क्वाशियोरकोर (Kwashiorkor)', 'Kwashiorkor'],
    [
      ['मरास्मस (Marasmus)', 'Marasmus'],
      ['पेलाग्रा (Pellagra)', 'Pellagra'],
      ['रिकेट्स (Rickets)', 'Rickets'],
    ],
    'क्वाशियोरकोर केवल प्रोटीन की कमी से होता है जिसमें शरीर में सूजन (Oedema), पेट बाहर निकलना व बालों का रंग बदलना दिखता है। मरास्मस प्रोटीन और कुल कैलोरी दोनों की कमी से होता है।',
    'Kwashiorkor arises from severe protein deficiency (with oedema and pot belly), whereas marasmus results from simultaneous deficiency of both protein and total calories.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'मरास्मस (सूखा रोग)',
    'एक वर्ष से कम उम्र के शिशुओं में प्रोटीन और कार्बोहाइड्रेट/कैलोरी दोनों की गंभीर कमी से शरीर अत्यंत दुबला-पतला व झुर्रीदार हो जाना किस रोग का लक्षण है?',
    'Severe wasting, wrinkled skin, and extreme thinness in infants under 1 year caused by deficiency of both protein and total calories characterize which condition?',
    ['मरास्मस (Marasmus)', 'Marasmus'],
    [
      ['क्वाशियोरकोर', 'Kwashiorkor'],
      ['बेरी-बेरी', 'Beriberi'],
      ['स्कर्वी', 'Scurvy'],
    ],
    'मरास्मस में वसा व मांसपेशियों का अत्यधिक क्षय होता है (सूजन नहीं होती) और पसलियाँ स्पष्ट दिखाई देती हैं; यह माता के दूध के स्थान पर कम पोषक आहार मिलने से होता है।',
    'Marasmus occurs mainly in infants under 1 year due to combined protein-energy malnutrition, showing severe muscle wasting without oedema.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'आवश्यक अमीनो अम्ल',
    'शरीर के लिए "आवश्यक अमीनो अम्ल" (Essential Amino Acids) किसे कहते हैं?',
    'What are "Essential Amino Acids" for the human body?',
    ['वे अमीनो अम्ल जिन्हें हमारा शरीर स्वयं संश्लेषित नहीं कर सकता और जिन्हें भोजन से लेना अनिवार्य है', 'Amino acids that cannot be synthesized by the human body and must be obtained from the diet'],
    [
      ['वे अमीनो अम्ल जो केवल यकृत में बनते हैं', 'Amino acids synthesized solely by the liver'],
      ['वे अमीनो अम्ल जो केवल वसा में घुलनशील होते हैं', 'Amino acids soluble only in fats'],
      ['वे अमीनो अम्ल जो ऊर्जा के बजाय हड्डी बनाते हैं', 'Amino acids forming bone mineral instead of protein'],
    ],
    '20 मानक अमीनो अम्लों में से 9 आवश्यक अमीनो अम्ल (जैसे लाइसिन, ल्यूसीन, ट्रिप्टोफैन, मेथिओनीन आदि) शरीर नहीं बना पाता, इसलिए इन्हें आहार से प्राप्त करना जरूरी है।',
    'Out of 20 standard amino acids, 9 cannot be synthesized de novo by humans (e.g., lysine, leucine, tryptophan, methionine) and must come from dietary protein.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'आहारीय रेशे (Roughage)',
    'संतुलित आहार में पादप स्रोतों से प्राप्त आहारीय रेशों (रूक्षांश / Roughage) का मुख्य कार्य क्या है?',
    'What is the main function of dietary fibre (roughage) from plant foods in a balanced diet?',
    ['मल को आयतन प्रदान कर आंत्र गति को सुगम बनाना और कब्ज से बचाना', 'Adding bulk to faeces, aiding bowel peristalsis, and preventing constipation'],
    [
      ['शरीर को प्रति ग्राम 9 kcal ऊर्जा देना', 'Providing 9 kcal of energy per gram'],
      ['अस्थियों में कैल्शियम जमा करना', 'Depositing calcium in bones'],
      ['रक्त में हीमोग्लोबिन का निर्माण करना', 'Synthesizing haemoglobin in blood'],
    ],
    'रूक्षांश (सेल्यूलोज आदि) मनुष्य के पाचन तंत्र में पचता नहीं है, परंतु यह जल सोखकर अपचित भोजन को आंतों से सुगमतापूर्वक बाहर निकालने में मदद करता है।',
    'Dietary fibre (like cellulose) is indigestible by human enzymes, yet it absorbs water and adds bulk to stool, promoting healthy bowel movement.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'संतृप्त एवं असंतृप्त वसा',
    'वनस्पति तेलों (असंतृप्त वसा) को निकल (Ni) उत्प्रेरक की उपस्थिति में हाइड्रोजनीकरण द्वारा किस प्रकार की वसा में बदला जाता है?',
    'Liquid vegetable oils (unsaturated fats) are converted into semi-solid vanaspati ghee by hydrogenation in the presence of nickel catalyst, forming what type of fat?',
    ['संतृप्त वसा (तथा ट्रांस-वसा)', 'Saturated fat (and trans-fat)'],
    [
      ['मोनोसैकेराइड', 'Monosaccharide'],
      ['पॉलीपेप्टाइड', 'Polypeptide'],
      ['फॉस्फोलिपिड', 'Phospholipid'],
    ],
    'हाइड्रोजनीकरण से असंतृप्त तेलों के द्वि-बंध संतृप्त हो जाते हैं और आंशिक हाइड्रोजनीकरण से ट्रांस-फैट बनती है जो हृदय रोगों का जोखिम बढ़ाती है।',
    'Hydrogenation saturates double bonds in vegetable oils using a nickel catalyst; partial hydrogenation creates harmful trans-fats linked to heart disease.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'डाइसैकेराइड के घटक',
    'सामान्य घरेलू चीनी (सुक्रोज / Sucrose) के जल-अपघटन से कौन-सी दो शर्कराएँ प्राप्त होती हैं?',
    'Hydrolysis of common table sugar (Sucrose) yields which two monosaccharides?',
    ['ग्लूकोज और फ्रक्टोज', 'Glucose and Fructose'],
    [
      ['ग्लूकोज और ग्लूकोज', 'Glucose and Glucose'],
      ['ग्लूकोज और गैलेक्टोज', 'Glucose and Galactose'],
      ['फ्रक्टोज और गैलेक्टोज', 'Fructose and Galactose'],
    ],
    'सुक्रोज = ग्लूकोज + फ्रक्टोज; माल्टोज = ग्लूकोज + ग्लूकोज; तथा लैक्टोज (दुग्ध शर्करा) = ग्लूकोज + गैलेक्टोज।',
    'Sucrose hydrolyzes to Glucose + Fructose; Maltose yields Glucose + Glucose; and Lactose yields Glucose + Galactose.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'जंतु स्टार्च (ग्लाइकोजन)',
    'जंतुओं में अतिरिक्त कार्बोहाइड्रेट किस रूप में संचित होता है जिसे "जंतु स्टार्च" (Animal Starch) भी कहा जाता है?',
    'In what form is excess carbohydrate stored in animals, also referred to as "Animal Starch"?',
    ['ग्लाइकोजन (Glycogen)', 'Glycogen'],
    [
      ['सेल्यूलोज (Cellulose)', 'Cellulose'],
      ['इनुलिन (Inulin)', 'Inulin'],
      ['काइटिन (Chitin)', 'Chitin'],
    ],
    'पादपों में भोजन स्टार्च के रूप में संचित होता है, जबकि जंतुओं व कवकों में यह ग्लाइकोजन के रूप में यकृत और पेशियों में संचित होता है।',
    'Plants store glucose as starch, whereas animals and fungi store reserve carbohydrate as glycogen in the liver and skeletal muscles.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'जल का महत्व',
    'एक सामान्य वयस्क मानव शरीर के कुल भार का लगभग कितना प्रतिशत भाग जल होता है?',
    'Approximately what percentage of an adult human body weight is composed of water?',
    ['लगभग 60% से 70%', 'Approximately 60% to 70%'],
    [
      ['लगभग 15% से 20%', 'Approximately 15% to 20%'],
      ['लगभग 30% से 35%', 'Approximately 30% to 35%'],
      ['लगभग 90% से 95%', 'Approximately 90% to 95%'],
    ],
    'मानव शरीर का लगभग 60–70% भाग जल है। जल सार्वत्रिक विलायक के रूप में पोषकों के परिवहन, उपापचय और पसीने द्वारा ताप नियमन में अनिवार्य है।',
    'Water makes up ~60–70% of adult body weight, acting as a solvent for biochemical reactions, transport medium, and temperature regulator.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'सोयाबीन व दालें',
    'शाकाहारी आहार में प्रोटीन का सर्वाधिक समृद्ध स्रोत निम्नलिखित में से कौन-सा माना जाता है (लगभग 40–42% प्रोटीन)?',
    'Which of the following is considered the richest vegetarian source of protein (approx. 40–42% protein)?',
    ['सोयाबीन', 'Soybean'],
    [
      ['चावल', 'Rice'],
      ['आलू', 'Potato'],
      ['सेब', 'Apple'],
    ],
    'सोयाबीन में लगभग 40–42% उच्च गुणवत्ता वाला प्रोटीन होता है, जो सभी सामान्य दालों और अनाजों की तुलना में सर्वाधिक है।',
    'Soybean contains roughly 40–42% high-quality protein, making it the richest common plant-based protein source.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'दूध का संघटन',
    'गाय के दूध का हल्का पीला रंग किसकी उपस्थिति के कारण होता है, जबकि दूध का सफेद रंग किस प्रोटीन के कारण होता है?',
    'The slight yellow tint of cow’s milk is due to which pigment, while its white colour is due to which protein?',
    ['पीला रंग: कैरोटीन (बीटा-कैरोटीन); सफेद रंग: कैसीन प्रोटीन', 'Yellow tint: Carotene (beta-carotene); White colour: Casein protein'],
    [
      ['पीला रंग: बिलिरुबिन; सफेद रंग: एल्ब्यूमिन', 'Yellow tint: Bilirubin; White colour: Albumin'],
      ['पीला रंग: यूरोक्रोम; सफेद रंग: ग्लोब्युलिन', 'Yellow tint: Urochrome; White colour: Globulin'],
      ['पीला रंग: जैंथोफिल; सफेद रंग: केराटिन', 'Yellow tint: Xanthophyll; White colour: Keratin'],
    ],
    'गाय के दूध में बीटा-कैरोटीन की उपस्थिति से हल्का पीलापन होता है और कैसीन फॉस्फोप्रोटीन के मिसेल्स प्रकाश को प्रकीर्णित कर दूध को सफेद बनाते हैं।',
    'Beta-carotene gives cow milk its creamy yellow tint, whereas calcium-caseinate micelles scatter light to give milk its white appearance.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'BMI (बॉडी मास इंडेक्स)',
    'मनुष्य में मोटापे और पोषण स्तर का आकलन करने वाला बॉडी मास इंडेक्स (BMI) किस सूत्र द्वारा ज्ञात किया जाता है?',
    'Body Mass Index (BMI) used to assess nutritional status and obesity is calculated by which formula?',
    ['भार (किग्रा) / [ऊँचाई (मीटर)]²', 'Weight (kg) / [Height (m)]²'],
    [
      ['ऊँचाई (सेमी) / भार (किग्रा)', 'Height (cm) / Weight (kg)'],
      ['भार (किग्रा) × ऊँचाई (मीटर)', 'Weight (kg) × Height (m)'],
      ['भार (ग्राम) / [ऊँचाई (सेमी)]²', 'Weight (g) / [Height (cm)]²'],
    ],
    'BMI = किलोग्राम में भार / (मीटर में ऊँचाई)²। सामान्य BMI 18.5–24.9 kg/m² माना जाता है (WHO एशियाई मानक में 18.5–22.9)।',
    'BMI equals weight in kilograms divided by the square of height in metres (kg/m²); standard WHO normal range is 18.5–24.9.',
    'MEDIUM',
    {
      formulaHi: 'BMI = शरीर का भार (kg) / [ऊँचाई (m)]²',
      formulaEn: 'BMI = Weight (kg) / [Height (m)]²',
    }
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'वसा की जाँच',
    'किसी खाद्य पदार्थ में वसा की उपस्थिति का सरल स्कूल-स्तरीय परीक्षण क्या है?',
    'What is the simple school-level test to detect the presence of fats in a food item?',
    ['कागज पर खाद्य पदार्थ रगड़ने से पारभासी तैलीय धब्बा बनना', 'Crushing the food on paper produces a translucent greasy patch'],
    [
      ['नींबू का रस डालने पर बुलबुले निकलना', 'Effervescence upon adding lemon juice'],
      ['आयोडीन डालने पर नीला-काला रंग आना', 'Blue-black colour with iodine'],
      ['जल में घोलने पर लाल अवक्षेप बनना', 'Red precipitate on dissolving in water'],
    ],
    'वसा या तेल कागज के रेशों को भरकर उसे पारभासी (Translucent) बना देता है जिसमें से धुँधला प्रकाश आर-पार जा सकता है।',
    'Oils or fats coat paper fibres and create a translucent grease spot through which light passes diffusely.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'कोलेस्ट्रॉल के प्रकार',
    'रक्त में किस प्रकार के कोलेस्ट्रॉल को "अच्छा कोलेस्ट्रॉल" (Good Cholesterol) कहा जाता है क्योंकि यह धमनियों से अतिरिक्त कोलेस्ट्रॉल को यकृत में वापस लाता है?',
    'Which lipoprotein is termed "Good Cholesterol" because it transports excess cholesterol from arteries back to the liver?',
    ['HDL (उच्च घनत्व लिपोप्रोटीन)', 'HDL (High-Density Lipoprotein)'],
    [
      ['LDL (निम्न घनत्व लिपोप्रोटीन)', 'LDL (Low-Density Lipoprotein)'],
      ['VLDL (अति-निम्न घनत्व लिपोप्रोटीन)', 'VLDL (Very-Low-Density Lipoprotein)'],
      ['काइलोमाइक्रोन', 'Chylomicron'],
    ],
    'HDL अतिरिक्त कोलेस्ट्रॉल को ऊतकों से हटाकर यकृत तक लाता है (रिवर्स कोलेस्ट्रॉल ट्रांसपोर्ट), जबकि LDL ("खराब कोलेस्ट्रॉल") धमनियों की दीवारों में जमाव बढ़ाता है।',
    'HDL clears excess cholesterol from blood vessels back to the liver, whereas elevated LDL ("bad cholesterol") promotes arterial plaque buildup.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'ओमेगा-3 वसीय अम्ल',
    'हृदय व मस्तिष्क स्वास्थ्य के लिए लाभकारी "ओमेगा-3" आवश्यक वसीय अम्लों के प्रमुख प्राकृतिक स्रोत कौन-से हैं?',
    'Which are major natural dietary sources of heart- and brain-healthy Omega-3 essential fatty acids?',
    ['अलसी के बीज (Flaxseeds), अखरोट तथा वसायुक्त मछलियाँ (सैल्मन आदि)', 'Flaxseeds, walnuts, and fatty fishes (such as salmon)'],
    [
      ['रिफाइंड चीनी और मैदा', 'Refined sugar and white flour'],
      ['वनस्पति घी और मक्खन', 'Hydrogenated vanaspati and butter'],
      ['नमक और बेकिंग सोडा', 'Common salt and baking soda'],
    ],
    'ओमेगा-3 (ALA, EPA, DHA) बहु-असंतृप्त आवश्यक वसीय अम्ल हैं जो अलसी, चिया बीज, अखरोट और समुद्री मछलियों में प्रचुर होते हैं।',
    'Omega-3 fatty acids (ALA, EPA, DHA) are essential polyunsaturated fats abundant in flaxseeds, walnuts, chia seeds, and fatty fish.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'मध्याह्न भोजन / पोषण आवश्यकता',
    'एक सामान्य मध्यम कार्य करने वाले वयस्क पुरुष और गर्भवती महिला में से किसे प्रतिदिन अधिक प्रोटीन व कैलोरी की आवश्यकता होती है?',
    'Between a sedentary/moderate adult woman and a pregnant/lactating woman, who requires higher daily protein, iron, and calcium?',
    ['गर्भवती एवं स्तनपान कराने वाली महिला को', 'Pregnant and lactating women'],
    [
      ['सामान्य विश्राम करने वाले पुरुष को', 'Sedentary adult male'],
      ['दोनों को बिल्कुल समान मात्रा चाहिए', 'Both require identical amounts'],
      ['गर्भवती महिला को कम प्रोटीन चाहिए', 'Pregnant women need less protein'],
    ],
    'गर्भ में भ्रूण के ऊतकों, रक्त और अस्थियों के तीव्र निर्माण के कारण गर्भवती व धात्री महिलाओं को अतिरिक्त प्रोटीन, आयरन, फोलिक अम्ल और कैल्शियम की आवश्यकता होती है।',
    'Due to rapid foetal tissue, blood, and bone development, pregnant and lactating women require substantially higher protein, iron, folate, and calcium.',
    'EASY'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'एंटीऑक्सीडेंट एवं फाइटोकेमिकल्स',
    'कोशिकाओं को मुक्त मूलकों (Free Radicals) से होने वाली क्षति से बचाने वाले प्रमुख खाद्य एंटीऑक्सीडेंट कौन-से हैं?',
    'Which nutrients serve as major dietary antioxidants protecting cells from free radical damage?',
    ['विटामिन C, विटामिन E तथा बीटा-कैरोटीन', 'Vitamin C, Vitamin E, and Beta-carotene'],
    [
      ['सैकरिन और सोडियम बेंजोएट', 'Saccharin and Sodium benzoate'],
      ['ट्रांस-फैट और कोलेस्ट्रॉल', 'Trans-fats and Cholesterol'],
      ['यूरिया और अमोनिया', 'Urea and Ammonia'],
    ],
    'विटामिन C, विटामिन E, सेलेनियम और कैरोटीनॉयड्स शरीर में ऑक्सीडेटिव तनाव उत्पन्न करने वाले मुक्त मूलकों को निष्क्रिय कर कोशिकाओं की रक्षा करते हैं।',
    'Vitamin C, Vitamin E, selenium, and beta-carotene neutralize harmful free radicals, protecting cell membranes and DNA from oxidative stress.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'कोलेजन प्रोटीन',
    'मानव सहित संपूर्ण जंतु जगत में सर्वाधिक प्रचुर मात्रा में पाया जाने वाला संरचनात्मक प्रोटीन कौन-सा है?',
    'Which is the most abundant structural protein in the human body and the animal kingdom?',
    ['कोलेजन (Collagen)', 'Collagen'],
    [
      ['रुबिस्को (RuBisCO)', 'RuBisCO'],
      ['हीमोग्लोबिन', 'Haemoglobin'],
      ['इंसुलिन', 'Insulin'],
    ],
    'कोलेजन जंतु जगत में सर्वाधिक पाया जाने वाला प्रोटीन है (अस्थि, उपास्थि, कंडरा व त्वचा में)। संपूर्ण जीवमंडल में सर्वाधिक पाया जाने वाला प्रोटीन पादपों का रुबिस्को (RuBisCO) है।',
    'Collagen is the most abundant protein in animals (skin, tendons, bone, cartilage), whereas RuBisCO is the most abundant protein in the entire biosphere.',
    'HARD'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'लैथाइरिज्म रोग',
    'खेसारी दाल (Lathyrus sativus) के अत्यधिक सेवन से पैरों में लकवा मार जाने वाला रोग "लैथाइरिज्म" किस विषैले तत्व के कारण होता है?',
    'Excessive consumption of Kesari dal (Lathyrus sativus) causes "Lathyrism" (lower-limb paralysis) due to which neurotoxin?',
    ['BOAA (बीटा-ऑक्सैलिल-अमीनो-एलानिन)', 'BOAA (β-N-oxalylamino-L-alanine)'],
    [
      ['अर्गीमोन (सैंगुइनारिन)', 'Argemone (Sanguinarine)'],
      ['एフラटॉक्सिन (Aflatoxin)', 'Aflatoxin'],
      ['सोलनिन (Solanine)', 'Solanine'],
    ],
    'खेसारी दाल में BOAA (ODAP) नामक न्यूरोटॉक्सिन होता है जिससे निचले अंगों में पक्षाघात होता है। सरसों के तेल में सत्यानाशी (Argemone) के बीज मिलाने से "ड्रॉप्सी" रोग होता है।',
    'Kesari dal contains the neurotoxin BOAA (ODAP) causing lathyrism. Adulteration of mustard oil with Argemone seeds causes epidemic dropsy.',
    'HARD'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'पादप भोजन संचय व सेल्यूलोज',
    'मनुष्य सेल्यूलोज को क्यों नहीं पचा सकता जबकि गाय और बकरी जैसे जुगाली करने वाले पशु इसे आसानी से पचा लेते हैं?',
    'Why can humans not digest cellulose while ruminants like cows and goats digest it easily?',
    ['क्योंकि मनुष्य में सेल्यूलोज पचाने वाला सेल्यूलेज एंजाइम नहीं होता, जबकि जुगाली करने वाले पशुओं के रूमेन में सहजीवी जीवाणु यह एंजाइम बनाते हैं', 'Because humans lack cellulase enzyme, whereas ruminants have symbiotic bacteria in their rumen producing cellulase'],
    [
      ['क्योंकि गाय के दाँत सेल्यूलोज को पीसकर ग्लूकोज बना देते हैं', 'Because cow teeth chemically convert cellulose to glucose'],
      ['क्योंकि मनुष्य के आमाशय में HCl नहीं होता', 'Because human stomach lacks HCl'],
      ['क्योंकि सेल्यूलोज केवल पौधों में घुलता है', 'Because cellulose dissolves only in plants'],
    ],
    'सेल्यूलोज β-1,4 ग्लाइकोसिडिक बंधों से बना होता है जिसे तोड़ने के लिए सेल्यूलेज एंजाइम चाहिए; यह एंजाइम जुगाली करने वाले पशुओं के रूमेन के सहजीवी सूक्ष्मजीवों द्वारा बनता है।',
    'Cellulose has β-1,4 glycosidic linkages requiring cellulase; humans lack this enzyme, whereas ruminants host cellulase-producing microbes in their rumen.',
    'MEDIUM'
  ),
  q(
    'पोषण एवं संतुलित आहार',
    'BMR (आधारीय उपापचय दर)',
    'पूर्ण शारीरिक व मानसिक विश्राम की अवस्था में जीवन की अनिवार्य क्रियाओं (हृदय धड़कन, श्वसन, ताप नियमन) को चलाने के लिए आवश्यक न्यूनतम ऊर्जा दर क्या कहलाती है?',
    'What is the minimum rate of energy expenditure required to sustain vital functions (heartbeat, breathing, temperature) at complete rest called?',
    ['आधारीय उपापचय दर (Basal Metabolic Rate - BMR)', 'Basal Metabolic Rate (BMR)'],
    [
      ['श्वसन गुणांक (RQ)', 'Respiratory Quotient (RQ)'],
      ['बॉडी मास इंडेक्स (BMI)', 'Body Mass Index (BMI)'],
      ['ग्लैइसीमिक इंडेक्स (GI)', 'Glycaemic Index (GI)'],
    ],
    'BMR व्यक्ति के आयु, लिंग, शरीर के सतही क्षेत्रफल और थायरॉक्सिन हार्मोन के स्तर पर निर्भर करता है।',
    'BMR reflects the basal energy cost of vital organs at rest and is strongly influenced by thyroid hormones, age, sex, and lean body mass.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन की खोज व वर्गीकरण',
    '"विटामिन" शब्द का प्रतिपादन किसने किया था, और कौन-से विटामिन वसा में घुलनशील (Fat-soluble) होते हैं?',
    'Who coined the term "Vitamin", and which vitamins are fat-soluble?',
    ['कासिमिर फंक; विटामिन A, D, E और K', 'Casimir Funk; Vitamins A, D, E, and K'],
    [
      ['लुई पाश्चर; विटामिन B और C', 'Louis Pasteur; Vitamins B and C'],
      ['हॉपकिन्स; विटामिन A, B और C', 'Hopkins; Vitamins A, B, and C'],
      ['लेवॉजियर; विटामिन C, D और K', 'Lavoisier; Vitamins C, D, and K'],
    ],
    'कासिमिर फंक (1911–1912) ने "विटामिन" (Vital amine) शब्द दिया। विटामिन A, D, E, K वसा में घुलनशील हैं तथा विटामिन B-कॉम्प्लेक्स व C जल में घुलनशील हैं।',
    'Casimir Funk coined the term "vitamin". Vitamins A, D, E, and K are fat-soluble (stored in liver/adipose), while B-complex and C are water-soluble.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन A (रेटिनॉल)',
    'विटामिन A का रासायनिक नाम क्या है, और इसकी कमी से होने वाले प्रमुख नेत्र रोग कौन-से हैं?',
    'What is the chemical name of Vitamin A, and which major eye disorders result from its deficiency?',
    ['रेटिनॉल; रतौंधी (Night Blindness) और जीरोफ्थैल्मिया', 'Retinol; Night blindness (Nyctalopia) and Xerophthalmia'],
    [
      ['कैल्सीफेरॉल; रिकेट्स', 'Calciferol; Rickets'],
      ['थायमीन; बेरी-बेरी', 'Thiamine; Beriberi'],
      ['एस्कॉर्बिक अम्ल; स्कर्वी', 'Ascorbic acid; Scurvy'],
    ],
    'विटामिन A (रेटिनॉल) रेटिना की शलाका कोशिकाओं में रोडोप्सिन वर्णक बनाता है। गाजर, पपीता, आम, पालक और कॉड लिवर ऑयल इसके समृद्ध स्रोत हैं।',
    'Vitamin A (retinol) forms rhodopsin in retinal rods; its deficiency causes night blindness and xerophthalmia (dry cornea). Carrots, papaya, and green leafy vegetables are rich sources.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'सुनहरा चावल (Golden Rice)',
    'आनुवंशिक रूप से रूपांतरित "गोल्डन राइस" (सुनहरा चावल) को किस पोषक तत्व की कमी को दूर करने के लिए विकसित किया गया है?',
    'Genetically modified "Golden Rice" was developed to combat the deficiency of which micronutrient?',
    ['विटामिन A (बीटा-कैरोटीन पूर्ववर्ती)', 'Vitamin A (beta-carotene precursor)'],
    [
      ['विटामिन C', 'Vitamin C'],
      ['विटामिन D', 'Vitamin D'],
      ['विटामिन B12', 'Vitamin B12'],
    ],
    'इंगो पोट्रिकस व पीटर बेयर द्वारा विकसित गोल्डन राइस के भ्रूणपोष में बीटा-कैरोटीन (प्रो-विटामिन A) का संश्लेषण होता है, जिससे विकासशील देशों में रतौंधी रोकी जा सके।',
    'Golden Rice is biofortified with beta-carotene (provitamin A) in the endosperm to prevent Vitamin A deficiency and childhood blindness.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B1 (थायमीन)',
    'चावल की अत्यधिक पॉलिश करने पर उसका ऊपरी चोकर नष्ट होने से किस विटामिन की कमी हो जाती है जिससे "बेरी-बेरी" रोग होता है?',
    'Excessive polishing of rice removes the outer bran containing which vitamin, leading to "Beriberi"?',
    ['विटामिन B1 (थायमीन)', 'Vitamin B1 (Thiamine)'],
    [
      ['विटामिन B2 (राइबोफ्लेविन)', 'Vitamin B2 (Riboflavin)'],
      ['विटामिन B3 (नियासिन)', 'Vitamin B3 (Niacin)'],
      ['विटामिन B6 (पायरिडॉक्सिन)', 'Vitamin B6 (Pyridoxine)'],
    ],
    'अनाजों की ऊपरी परत में विटामिन B1 (थायमीन) होता है; पॉलिश चावल अधिक खाने वालों में इसकी कमी से तंत्रिका और हृदय तंत्र प्रभावित होकर बेरी-बेरी रोग होता है।',
    'Vitamin B1 (thiamine) resides in cereal bran; eating exclusively polished rice causes thiamine deficiency resulting in beriberi.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B2 (राइबोफ्लेविन)',
    'किस विटामिन की कमी से होंठों के कोनों का फटना (कीलोसिस), जीभ में सूजन (ग्लोसाइटिस) और आँखों में जलन होती है?',
    'Deficiency of which vitamin causes cracking at the corners of the mouth (cheilosis), sore tongue (glossitis), and eye irritation?',
    ['विटामिन B2 (राइबोफ्लेविन)', 'Vitamin B2 (Riboflavin)'],
    [
      ['विटामिन B1 (थायमीन)', 'Vitamin B1 (Thiamine)'],
      ['विटामिन B12 (सायनोकोबालामीन)', 'Vitamin B12 (Cyanocobalamin)'],
      ['विटामिन K (फिलोक्विनोन)', 'Vitamin K (Phylloquinone)'],
    ],
    'राइबोफ्लेविन (B2) FAD व FMN सह-एंजाइमों का घटक है; इसकी कमी से कीलोसिस (मुख के कोनों में दरार) होता है।',
    'Riboflavin (Vitamin B2) forms FAD/FMN coenzymes; deficiency leads to cheilosis, angular stomatitis, and glossitis.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B3 (नियासिन)',
    'विटामिन B3 (नियासिन) की कमी से होने वाला "पेलाग्रा" (4D सिंड्रोम) मुख्य रूप से किन लक्षणों द्वारा पहचाना जाता है?',
    '"Pellagra" (4D syndrome), caused by deficiency of Vitamin B3 (Niacin), is characterized by which symptoms?',
    ['डर्मेटाइटिस (त्वचा शोथ), डायरिया (अतिसार), डिमेंशिया (मनोभ्रंश) और मृत्यु', 'Dermatitis, Diarrhoea, Dementia, and Death'],
    [
      ['मसूड़ों से खून आना व दाँत हिलना', 'Bleeding gums and loose teeth'],
      ['हड्डियों का मुड़ जाना व धनुषाकार पैर', 'Bending of bones and bow legs'],
      ['रक्त का थक्का न जमना', 'Failure of blood clotting'],
    ],
    'मक्का आधारित एकरस आहार में ट्रिप्टोफैन/नियासिन की कमी से पेलाग्रा होता है, जिसे 3D/4D सिंड्रोम (Dermatitis, Diarrhoea, Dementia, Death) कहते हैं।',
    'Pellagra caused by niacin (Vitamin B3) deficiency presents classically as the 4 Ds: Dermatitis, Diarrhoea, Dementia, and Death if untreated.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B5, B6 व B7',
    'निम्नलिखित में से किस विटामिन को "विटामिन H" या "बायोटिन" भी कहा जाता है, जिसकी कमी से बाल झड़ना व त्वचा रोग होते हैं?',
    'Which B-complex vitamin is also known as "Vitamin H" or "Biotin", whose deficiency causes hair loss and dermatitis?',
    ['विटामिन B7', 'Vitamin B7'],
    [
      ['विटामिन B5 (पैंटोथेनिक अम्ल)', 'Vitamin B5 (Pantothenic acid)'],
      ['विटामिन B6 (पायरिडॉक्सिन)', 'Vitamin B6 (Pyridoxine)'],
      ['विटामिन B9 (फोलिक अम्ल)', 'Vitamin B9 (Folic acid)'],
    ],
    'बायोटिन (विटामिन B7 / H) वसा व कार्बोहाइड्रेट उपापचय में कार्बोक्सिलेज एंजाइमों का सहकारक है; कच्चे अंडे की सफेदी में स्थित "एविडिन" इसके अवशोषण को रोकता है।',
    'Biotin (Vitamin B7 / Vitamin H) is a coenzyme for carboxylases; raw egg white contains avidin which binds biotin and prevents its absorption.',
    'HARD'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B9 (फोलिक अम्ल)',
    'गर्भावस्था के दौरान भ्रूण में न्यूरल ट्यूब दोष (जैसे स्पाइना बाइफिडा) से बचाव तथा मेगालोब्लास्टिक एनीमिया रोकने के लिए कौन-सा विटामिन दिया जाता है?',
    'Which vitamin is prescribed during pregnancy to prevent foetal neural tube defects (e.g., spina bifida) and megaloblastic anaemia?',
    ['विटामिन B9 (फोलिक अम्ल / फोलेट)', 'Vitamin B9 (Folic acid / Folate)'],
    [
      ['विटामिन E (टोकोफेरॉल)', 'Vitamin E (Tocopherol)'],
      ['विटामिन D (कैल्सीफेरॉल)', 'Vitamin D (Calciferol)'],
      ['विटामिन B1 (थायमीन)', 'Vitamin B1 (Thiamine)'],
    ],
    'फोलिक अम्ल (B9) डीएनए संश्लेषण और कोशिका विभाजन के लिए अनिवार्य है, इसलिए गर्भवती महिलाओं को आयरन के साथ फोलिक एसिड की गोलियाँ दी जाती हैं।',
    'Folic acid (Vitamin B9) is vital for DNA synthesis and cell division, making supplementation critical before and during early pregnancy.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B12 (सायनोकोबालामीन)',
    'किस विटामिन में "कोबाल्ट" धातु पाई जाती है, और इसकी कमी से कौन-सा गंभीर रक्ताल्पता (Anaemia) रोग होता है?',
    'Which vitamin contains the metal "Cobalt", and which severe anaemia results from its deficiency?',
    ['विटामिन B12 (सायनोकोबालामीन); पर्निशियस एनीमिया (प्राणाशी रक्ताल्पता)', 'Vitamin B12 (Cyanocobalamin); Pernicious anaemia'],
    [
      ['विटामिन B6; माइक्रोसाइटिक एनीमिया', 'Vitamin B6; Microcytic anaemia'],
      ['विटामिन C; स्कर्वी', 'Vitamin C; Scurvy'],
      ['विटामिन K; हीमोफीलिया', 'Vitamin K; Haemophilia'],
    ],
    'विटामिन B12 में कोबाल्ट परमाणु होता है। यह सामान्यतः पादप भोजन में नहीं पाया जाता (मुख्यतः प्राणिज उत्पादों व जीवाणुओं द्वारा निर्मित); इसकी कमी से पर्निशियस एनीमिया होता है।',
    'Vitamin B12 (cyanocobalamin) uniquely contains cobalt; it is absent in most plant foods and its deficiency (or lack of Castle’s intrinsic factor) causes pernicious anaemia.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन C (एस्कॉर्बिक अम्ल)',
    'विटामिन C (एस्कॉर्बिक अम्ल) के संबंध में निम्नलिखित में से कौन-सा कथन सत्य है?',
    'Which of the following statements regarding Vitamin C (Ascorbic acid) is correct?',
    ['यह तापन/पकाने पर आसानी से नष्ट हो जाता है और इसकी कमी से स्कर्वी (मसूड़ों से रक्तस्राव) होता है', 'It is easily destroyed by heat/cooking and its deficiency causes scurvy (bleeding gums)'],
    [
      ['यह एक वसा-घुलनशील विटामिन है जो यकृत में वर्षों तक संचित रहता है', 'It is a fat-soluble vitamin stored for years in the liver'],
      ['यह मुख्य रूप से दूध और अंडे की जर्दी में प्रचुर होता है', 'It is abundant mainly in milk and egg yolk'],
      ['यह शरीर में कैल्शियम के अवशोषण को रोकता है', 'It inhibits calcium absorption in the body'],
    ],
    'विटामिन C जल-घुलनशील और ऊष्मा-संवेदी विटामिन है; यह आंवला, नींबू, संतरा, अमरूद जैसे खट्टे फलों में प्रचुर होता है और घाव भरने व लौह अवशोषण में सहायक है।',
    'Vitamin C is water-soluble and heat-labile; rich in amla and citrus fruits, it aids collagen synthesis, wound healing, and iron absorption. Deficiency causes scurvy.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन D (सनशाइन विटामिन)',
    'किस विटामिन को "हार्मोन" और "सनशाइन विटामिन" भी कहा जाता है, जिसकी कमी से बच्चों में रिकेट्स और वयस्कों में ऑस्टियोमलेशिया होता है?',
    'Which vitamin is also regarded as a hormone ("Sunshine Vitamin"), whose deficiency causes rickets in children and osteomalacia in adults?',
    ['विटामिन D (कैल्सीफेरॉल)', 'Vitamin D (Calciferol)'],
    [
      ['विटामिन A (रेटिनॉल)', 'Vitamin A (Retinol)'],
      ['विटामिन E (टोकोफेरॉल)', 'Vitamin E (Tocopherol)'],
      ['विटामिन K (नेफ्थोक्विनोन)', 'Vitamin K (Naphthoquinone)'],
    ],
    'सूर्य के पराबैंगनी (UV-B) प्रकाश की उपस्थिति में त्वचा में 7-डीहाइड्रोकोलेस्ट्रॉल से विटामिन D3 (कोलेकैल्सीफेरॉल) बनता है, जो आंत से कैल्शियम व फॉस्फेट अवशोषण बढ़ाता है।',
    'UV-B sunlight converts 7-dehydrocholesterol in skin into Vitamin D3 (cholecalciferol), essential for intestinal Ca²⁺/phosphate absorption and bone mineralization.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन E (टोकोफेरॉल)',
    'किस विटामिन को "सौंदर्य विटामिन" (Beauty Vitamin) या "बंध्यतारोधी विटामिन" कहा जाता है?',
    'Which vitamin is referred to as the "Beauty Vitamin" or "Anti-sterility Vitamin"?',
    ['विटामिन E (टोकोफेरॉल)', 'Vitamin E (Tocopherol)'],
    [
      ['विटामिन K', 'Vitamin K'],
      ['विटामिन B12', 'Vitamin B12'],
      ['विटामिन B3', 'Vitamin B3'],
    ],
    'विटामिन E (टोकोफेरॉल) एक शक्तिशाली वसा-घुलनशील एंटीऑक्सीडेंट है जो कोशिका झिल्लियों की रक्षा, त्वचा स्वास्थ्य और प्रजनन क्षमता के लिए आवश्यक है। अंकुरित गेहूँ, बादाम व वनस्पति तेल इसके मुख्य स्रोत हैं।',
    'Vitamin E (tocopherol) is a fat-soluble antioxidant protecting cell membranes and reproductive health; wheat germ oil, nuts, and vegetable oils are rich sources.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन K (फिलोक्विनोन)',
    'नवजात शिशुओं को जन्म के तुरंत बाद रक्तस्राव से बचाने के लिए कौन-सा विटामिन दिया जाता है जो यकृत में थक्का जमाने वाले कारकों के संश्लेषण के लिए आवश्यक है?',
    'Which vitamin is administered to newborns shortly after birth to prevent haemorrhagic bleeding, as it is needed for synthesizing clotting factors?',
    ['विटामिन K (फिलोक्विनोन)', 'Vitamin K (Phylloquinone)'],
    [
      ['विटामिन C', 'Vitamin C'],
      ['विटामिन A', 'Vitamin A'],
      ['विटामिन B2', 'Vitamin B2'],
    ],
    'विटामिन K यकृत में प्रोथ्रॉम्बिन और अन्य थक्का कारकों (II, VII, IX, X) के निर्माण हेतु अनिवार्य है। वयस्कों में आंत के जीवाणु भी इसका कुछ निर्माण करते हैं।',
    'Vitamin K is essential for hepatic synthesis of prothrombin and clotting factors II, VII, IX, and X; its deficiency causes delayed blood clotting.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'जल-घुलनशील विटामिनों का उत्सर्जन',
    'यदि कोई व्यक्ति अत्यधिक मात्रा में विटामिन B-कॉम्प्लेक्स या विटामिन C की गोलियाँ ले ले, तो अतिरिक्त मात्रा का शरीर में क्या होता है?',
    'What happens to excess amounts of water-soluble vitamins (B-complex or Vitamin C) consumed in the diet?',
    ['अतिरिक्त मात्रा वृक्क द्वारा मूत्र के माध्यम से शरीर से बाहर उत्सर्जित हो जाती है', 'The excess is excreted out of the body in urine via the kidneys'],
    [
      ['यह त्वचा के नीचे वसा ऊतक में स्थायी रूप से जम जाती है', 'It gets permanently deposited in subcutaneous adipose tissue'],
      ['यह अस्थि मज्जा में क्रिस्टल बना देती है', 'It forms crystals in the bone marrow'],
      ['यह तुरंत ग्लूकोज में बदल जाती है', 'It immediately converts into glucose'],
    ],
    'जल में घुलनशील होने के कारण विटामिन B (B12 को छोड़कर जो यकृत में संचित होता है) और विटामिन C शरीर में संचित नहीं होते और मूत्र द्वारा बाहर निकल जाते हैं, इसलिए इनकी नियमित दैनिक आपूर्ति जरूरी है।',
    'Because they are water-soluble, excess Vitamin C and B vitamins (except B12 stored in liver) are excreted in urine rather than stored, requiring regular daily intake.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'लौह तत्व (Iron)',
    'गर्भवती महिलाओं और किशोरियों में हीमोग्लोबिन की कमी से होने वाले "एनीमिया" (रक्ताल्पता) से बचने के लिए किस खनिज से भरपूर आहार (गुड़, पालक, आंवला, चना) आवश्यक है?',
    'To prevent anaemia due to low haemoglobin in pregnant women and adolescent girls, foods rich in which mineral (jaggery, spinach, amla) are essential?',
    ['लौह (आयरन / Fe)', 'Iron (Fe)'],
    [
      ['सोडियम (Na)', 'Sodium (Na)'],
      ['फ्लोरीन (F)', 'Fluorine (F)'],
      ['आयोडीन (I)', 'Iodine (I)'],
    ],
    'आयरन हीमोग्लोबिन और मायोग्लोबिन का मुख्य घटक है; भारत में राष्ट्रीय आयरन प्लस पहल और "एनीमिया मुक्त भारत" अभियान के तहत आयरन-फोलिक एसिड गोलियाँ दी जाती हैं।',
    'Iron is the core component of haemoglobin; iron deficiency causes microcytic hypochromic anaemia. Vitamin C aids dietary non-haem iron absorption.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'आयोडीन की कमी',
    'समुद्री भोजन और आयोडीन युक्त नमक के अभाव में कौन-सा रोग हो जाता है जिसमें गर्दन के सामने की ग्रंथि सूज जाती है?',
    'Deficiency of iodine in diet causes enlargement of a neck gland, a condition known as what?',
    ['गलगंड या घेंघा (Goitre)', 'Goitre'],
    [
      ['स्कर्वी (Scurvy)', 'Scurvy'],
      ['रिकेट्स (Rickets)', 'Rickets'],
      ['फ्लोरोसिस (Fluorosis)', 'Fluorosis'],
    ],
    'पहाड़ी क्षेत्रों की मिट्टी व जल में आयोडीन कम होने से वहाँ घेंघा रोग अधिक देखा जाता है; आयोडीन युक्त नमक में पोटैशियम आयोडेट (KIO3) मिलाया जाता है।',
    'Iodine deficiency prevents thyroxine synthesis, causing compensatory enlargement of the thyroid gland (goitre). Iodized salt is fortified with potassium iodate.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'कैल्शियम और फॉस्फोरस',
    'दाँतों और अस्थियों की मजबूती के साथ-साथ रक्त स्कंदन एवं पेशी संकुचन में कौन-सा खनिज प्रमुख भूमिका निभाता है?',
    'Which mineral is crucial for strong bones and teeth as well as blood clotting and muscle contraction?',
    ['कैल्शियम (Calcium)', 'Calcium'],
    [
      ['क्लोरीन (Chlorine)', 'Chlorine'],
      ['सल्फर (Sulphur)', 'Sulphur'],
      ['कोबाल्ट (Cobalt)', 'Cobalt'],
    ],
    'कैल्शियम शरीर में सर्वाधिक मात्रा में पाया जाने वाला खनिज है; यह हाइड्रॉक्सीएपेटाइट के रूप में हड्डियों व दाँतों का निर्माण करता है और तंत्रिका आवेग, पेशी संकुचन व रक्त थक्का बनाने में अनिवार्य है।',
    'Calcium is the most abundant mineral in the human body, forming bone/tooth hydroxyapatite and mediating blood clotting, nerve transmission, and muscle contraction.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'फ्लोरीन और फ्लोरोसिस',
    'पीने के पानी में फ्लोराइड की अत्यधिक मात्रा (>1.5 mg/L) होने से दाँतों पर पीले-भूरे धब्बे पड़ना और हड्डियों का मुड़ जाना किस रोग को दर्शाता है?',
    'Excess fluoride (>1.5 mg/L) in drinking water causing mottled teeth and skeletal deformities results in which condition?',
    ['फ्लोरोसिस (दंत व अस्थि फ्लोरोसिस)', 'Fluorosis (Dental and Skeletal Fluorosis)'],
    [
      ['ऑस्टियोमलेशिया', 'Osteomalacia'],
      ['ब्लू बेबी सिंड्रोम', 'Blue Baby Syndrome'],
      ['इटाई-इटाई रोग', 'Itai-Itai disease'],
    ],
    'फ्लोरीन की अति-सूक्ष्म मात्रा (~0.5–1.0 ppm) दाँतों को क्षरण से बचाती है, परंतु अधिकता से फ्लोरोसिस होता है। नाइट्रेट की अधिकता से ब्लू बेबी सिंड्रोम (मेथेमोग्लोबिनेमिया) होता है।',
    'While trace fluoride prevents dental caries, excess fluoride (>1.5 ppm) in groundwater causes dental mottling and skeletal fluorosis.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'सोडियम व पोटैशियम',
    'तंत्रिका आवेगों के संचरण (Na⁺/K⁺ पंप) और शरीर में द्रव-विद्युत अपघट्य संतुलन को बनाए रखने के लिए कौन-से दो खनिज आयन मुख्य हैं?',
    'Which two mineral ions are central to maintaining fluid-electrolyte balance and generating nerve impulses via the Na⁺/K⁺ pump?',
    ['सोडियम (Na⁺) और पोटैशियम (K⁺)', 'Sodium (Na⁺) and Potassium (K⁺)'],
    [
      ['लौह (Fe²⁺) और तांबा (Cu²⁺)', 'Iron (Fe²⁺) and Copper (Cu²⁺)'],
      ['आयोडीन (I⁻) और फ्लोरीन (F⁻)', 'Iodine (I⁻) and Fluorine (F⁻)'],
      ['जिंक (Zn²⁺) और मैंगनीज (Mn²⁺)', 'Zinc (Zn²⁺) and Manganese (Mn²⁺)'],
    ],
    'सोडियम प्रमुख बाह्यकोशिकीय धनायन है और पोटैशियम प्रमुख अंतःकोशिकीय धनायन है; Na⁺/K⁺ ATPase पंप कोशिका झिल्ली विभव और जल संतुलन बनाए रखता है।',
    'Sodium (principal extracellular cation) and Potassium (principal intracellular cation) maintain membrane potentials, nerve conduction, and osmotic fluid balance.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'जिंक (जस्ता) खनिज',
    'घाव भरने, प्रतिरक्षा तंत्र की मजबूती, स्वाद बोध तथा बच्चों में दस्त (Diarrhoea) के उपचार में ORS के साथ किस सूक्ष्म खनिज की गोलियाँ दी जाती हैं?',
    'Supplements of which trace mineral are administered alongside ORS to treat childhood diarrhoea and aid wound healing and immunity?',
    ['जिंक (जस्ता / Zinc)', 'Zinc'],
    [
      ['ताँबा (Copper)', 'Copper'],
      ['मैंगनीज (Manganese)', 'Manganese'],
      ['क्रोमियम (Chromium)', 'Chromium'],
    ],
    'जिंक 300 से अधिक एंजाइमों (जैसे कार्बोनिक एनहाइड्रेज) का सहकारक है; WHO/भारत सरकार के दस्त नियंत्रण कार्यक्रम में ORS के साथ 14 दिन जिंक की खुराक दी जाती है।',
    'Zinc is a cofactor for >300 enzymes, vital for immunity, taste perception, and epithelial repair; WHO recommends zinc with ORS for childhood diarrhoea.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B6 (पायरिडॉक्सिन)',
    'प्रोटीन व अमीनो अम्ल के उपापचय (ट्रांसएमिनेशन) तथा हीमोग्लोबिन संश्लेषण में सहायक कौन-सा विटामिन है?',
    'Which vitamin acts as a key coenzyme in amino acid metabolism (transamination) and haemoglobin synthesis?',
    ['विटामिन B6 (पायरिडॉक्सिन)', 'Vitamin B6 (Pyridoxine)'],
    [
      ['विटामिन D (कैल्सीफेरॉल)', 'Vitamin D (Calciferol)'],
      ['विटामिन K (फिलोक्विनोन)', 'Vitamin K (Phylloquinone)'],
      ['विटामिन A (रेटिनॉल)', 'Vitamin A (Retinol)'],
    ],
    'पायरिडॉक्सल फॉस्फेट (PLP), विटामिन B6 का सक्रिय रूप है जो अमीनो अम्ल रूपांतरण, न्यूरोट्रांसमीटर निर्माण और हीम संश्लेषण में भाग लेता है।',
    'Pyridoxal phosphate (active Vitamin B6) is an essential coenzyme for amino acid transamination, neurotransmitter synthesis, and haem formation.',
    'HARD'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिनों का आंत्र संश्लेषण',
    'मानव की बड़ी आंत में रहने वाले सहजीवी जीवाणु (जैसे E. coli) सामान्यतः किन विटामिनों का कुछ मात्रा में संश्लेषण करते हैं?',
    'Symbiotic gut bacteria (such as E. coli) residing in the human large intestine synthesize appreciable amounts of which vitamins?',
    ['विटामिन K और विटामिन B12 (तथा बायोटिन)', 'Vitamin K and Vitamin B12 (and Biotin)'],
    [
      ['विटामिन C और विटामिन A', 'Vitamin C and Vitamin A'],
      ['विटामिन D और विटामिन E', 'Vitamin D and Vitamin E'],
      ['केवल विटामिन C', 'Vitamin C only'],
    ],
    'बड़ी आंत के उपयोगी माइक्रोबायोम विटामिन K2, बायोटिन, फोलिक अम्ल और B12 का संश्लेषण करते हैं, अतः लंबे समय तक एंटीबायोटिक लेने से विटामिन K की कमी हो सकती है।',
    'Colonic microflora synthesize Vitamin K, biotin, and B12; prolonged broad-spectrum antibiotic therapy can deplete Vitamin K.',
    'HARD'
  ),
  q(
    'विटामिन एवं खनिज',
    'खनिजों के स्रोत',
    'निम्नलिखित में से किस खाद्य समूह में मुख्यतः विटामिन C और रेशे प्रचुर होते हैं, जबकि दूध में किस विटामिन व खनिज का लगभग अभाव होता है?',
    'Milk is considered a near-complete food, yet it is notably deficient in which vitamin and which mineral?',
    ['विटामिन C और लौह (आयरन)', 'Vitamin C and Iron'],
    [
      ['विटामिन A और कैल्शियम', 'Vitamin A and Calcium'],
      ['विटामिन B2 और फॉस्फोरस', 'Vitamin B2 and Phosphorus'],
      ['विटामिन D और पोटैशियम', 'Vitamin D and Potassium'],
    ],
    'दूध में कैल्शियम, फॉस्फोरस, प्रोटीन, लैक्टोज व विटामिन A, B2 आदि प्रचुर होते हैं, परंतु इसमें विटामिन C और आयरन (लौह) नगण्य होते हैं।',
    'Though milk is rich in calcium, phosphorus, protein, and several vitamins, it is poor in Vitamin C and Iron.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'अतिविटामिनता (Hypervitaminosis)',
    'किस वसा-घुलनशील विटामिन की अत्यधिक खुराक लंबे समय तक लेने से यकृत विषाक्तता (Liver toxicity), सिरदर्द और अस्थि दर्द हो सकता है?',
    'Chronic excessive intake of which fat-soluble vitamin can accumulate in the liver causing hepatotoxicity, headache, and bone pain?',
    ['विटामिन A (तथा विटामिन D)', 'Vitamin A (and Vitamin D)'],
    [
      ['विटामिन B1', 'Vitamin B1'],
      ['विटामिन B2', 'Vitamin B2'],
      ['विटामिन C', 'Vitamin C'],
    ],
    'वसा-घुलनशील विटामिन A और D शरीर से मूत्र द्वारा नहीं निकलते बल्कि यकृत में जमा होते हैं; ध्रुवीय भालू के यकृत में अत्यधिक विटामिन A होने से वह मानवों हेतु विषैला होता है।',
    'Fat-soluble vitamins A and D accumulate in liver/adipose tissues if over-supplemented, causing hypervitaminosis (polar bear liver is toxic due to extreme Vitamin A).',
    'HARD'
  ),
  q(
    'विटामिन एवं खनिज',
    'सेलेनियम व मैग्नीशियम',
    'पौधों के हरितलवक (क्लोरोफिल) में केंद्रीय धातु तथा मानव शरीर में सैकड़ों ATP-आधारित एंजाइमों का आवश्यक सहकारक खनिज कौन-सा है?',
    'Which mineral forms the central atom of plant chlorophyll and acts as an essential cofactor for hundreds of ATP-dependent enzymes in humans?',
    ['मैग्नीशियम (Mg)', 'Magnesium (Mg)'],
    [
      ['कैडमियम (Cd)', 'Cadmium (Cd)'],
      ['पारा (Hg)', 'Mercury (Hg)'],
      ['सीसा (Pb)', 'Lead (Pb)'],
    ],
    'मैग्नीशियम क्लोरोफिल रिंग के केंद्र में होता है तथा मानव में DNA/RNA संश्लेषण, ग्लाइकोलिसिस व पेशी शिथिलन के लिए अनिवार्य सहकारक है।',
    'Magnesium sits at the centre of chlorophyll’s porphyrin ring and serves as an essential cofactor for ATP-utilizing kinases in human metabolism.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन B5 (पैंटोथेनिक अम्ल)',
    'कोएंजाइम-A (Coenzyme A) के संश्लेषण में किस विटामिन की प्रमुख भूमिका होती है, जिसकी कमी से पैरों में जलन (Burning feet syndrome) हो सकती है?',
    'Which vitamin is an essential precursor of Coenzyme A, whose deficiency can cause burning feet syndrome?',
    ['विटामिन B5 (पैंटोथेनिक अम्ल)', 'Vitamin B5 (Pantothenic acid)'],
    [
      ['विटामिन B1 (थायमीन)', 'Vitamin B1 (Thiamine)'],
      ['विटामिन B9 (फोलिक अम्ल)', 'Vitamin B9 (Folic acid)'],
      ['विटामिन E (टोकोफेरॉल)', 'Vitamin E (Tocopherol)'],
    ],
    'पैंटोथेनिक अम्ल (B5) लगभग सभी खाद्य पदार्थों में पाया जाता है और यह ऊर्जा उपापचय में केंद्रीय अणु CoA का हिस्सा होता है।',
    'Pantothenic acid (Vitamin B5) is ubiquitous in foods and forms part of Coenzyme A (CoA), central to fatty acid and Krebs cycle metabolism.',
    'HARD'
  ),
  q(
    'विटामिन एवं खनिज',
    'विटामिन और फल',
    'निम्नलिखित में से विटामिन C का सबसे समृद्ध प्राकृतिक स्रोत कौन-सा माना जाता है?',
    'Which of the following is considered one of the richest natural sources of Vitamin C?',
    ['आंवला (Indian Gooseberry)', 'Amla (Indian Gooseberry)'],
    [
      ['केला (Banana)', 'Banana'],
      ['सेब (Apple)', 'Apple'],
      ['अंगूर (Grapes)', 'Grapes'],
    ],
    'आंवला में प्रति 100 ग्राम लगभग 600 mg तक विटामिन C होता है, जो संतरा या नींबू की तुलना में कई गुना अधिक है।',
    'Amla (Emblica officinalis) contains roughly 500–600 mg of Vitamin C per 100 g, far exceeding oranges and lemons.',
    'EASY'
  ),
  q(
    'विटामिन एवं खनिज',
    'हड्डी खनिजीकरण',
    'मानव अस्थियों और दाँतों में मुख्य अकार्बनिक खनिज यौगिक कौन-सा होता है?',
    'What is the chief inorganic mineral compound forming human bones and teeth?',
    ['कैल्शियम फॉस्फेट (हाइड्रॉक्सीएपेटाइट)', 'Calcium phosphate (Hydroxyapatite)'],
    [
      ['मैग्नीशियम क्लोराइड', 'Magnesium chloride'],
      ['फेरस सल्फेट', 'Ferrous sulphate'],
      ['पोटैशियम कार्बोनेट', 'Potassium carbonate'],
    ],
    'अस्थि मैट्रिक्स का लगभग दो-तिहाई अकार्बनिक भाग कैल्शियम फॉस्फेट (Ca10(PO4)6(OH)2) तथा शेष कोलेजन तंतुओं से बना होता है जो कठोरता व लचीलापन देते हैं।',
    'Roughly two-thirds of bone mass is mineralized calcium phosphate (hydroxyapatite) combined with collagen fibres for tensile and compressive strength.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'कुपोषण व खाद्य दृढ़ीकरण',
    'चावल, गेहूँ के आटे, तेल और नमक जैसे मुख्य खाद्य पदार्थों में आयरन, आयोडीन, फोलिक अम्ल तथा विटामिन A/D मिलाने की प्रक्रिया क्या कहलाती है?',
    'What is the process of deliberately adding micronutrients like iron, iodine, folic acid, or vitamins A/D to staple foods (salt, rice, flour, oil) called?',
    ['खाद्य दृढ़ीकरण (Food Fortification)', 'Food Fortification'],
    [
      ['पाश्चुरीकरण (Pasteurization)', 'Pasteurization'],
      ['किण्वन (Fermentation)', 'Fermentation'],
      ['खाद्य अपमिश्रण (Food Adulteration)', 'Food Adulteration'],
    ],
    'FSSAI के "+F" मानक के अंतर्गत फूड फोर्टिफिकेशन द्वारा "छिपी हुई भूख" (Hidden Hunger / सूक्ष्म पोषक तत्वों की कमी) को कम किया जाता है।',
    'Food fortification (marked by FSSAI’s "+F" logo in India) enriches staple foods with essential micronutrients to combat "hidden hunger" across populations.',
    'MEDIUM'
  ),
  q(
    'विटामिन एवं खनिज',
    'मेलाटोनिन व ट्रिप्टोफैन vs निकोटिनामाइड',
    'कौन-सा अमीनो अम्ल शरीर में विटामिन B3 (नियासिन) के संश्लेषण के लिए पूर्ववर्ती (Precursor) का कार्य कर सकता है?',
    'Which essential amino acid can serve as a precursor for endogenous synthesis of Vitamin B3 (Niacin) in humans?',
    ['ट्रिप्टोफैन (Tryptophan)', 'Tryptophan'],
    [
      ['ग्लाइसीन (Glycine)', 'Glycine'],
      ['प्रोलीन (Proline)', 'Proline'],
      ['सिस्टीन (Cysteine)', 'Cysteine'],
    ],
    'यकृत में लगभग 60 mg ट्रिप्टोफैन से 1 mg नियासिन बन सकता है; मक्का में ट्रिप्टोफैन कम होने से केवल मक्का खाने वालों में पेलाग्रा होता था।',
    'Roughly 60 mg of dietary tryptophan can be converted into 1 mg of niacin in the liver; low tryptophan in maize contributed to historical pellagra outbreaks.',
    'HARD'
  ),,
  // Section 3 Part B: Hygiene & Human Diseases, Vaccines (55 Qs)
  q(
    'मानव रोग एवं टीके',
    'जीवाणुजनित रोग - क्षय रोग (TB)',
    'क्षय रोग (तपेदिक / TB) किस जीवाणु के कारण होता है, और नवजात शिशु को इससे बचाव के लिए कौन-सा टीका लगाया जाता है?',
    'Tuberculosis (TB) is caused by which bacterium, and which vaccine is administered to newborns for protection against it?',
    ['माइकोबैक्टीरियम ट्यूबरकुलोसिस; BCG टीका', 'Mycobacterium tuberculosis; BCG vaccine'],
    [
      ['विब्रियो कॉलेरी; OPV टीका', 'Vibrio cholerae; OPV vaccine'],
      ['साल्मोनेला टाइफी; DPT टीका', 'Salmonella typhi; DPT vaccine'],
      ['क्लॉस्ट्रिडियम टिटैनी; MMR टीका', 'Clostridium tetani; MMR vaccine'],
    ],
    'रॉबर्ट कोच द्वारा खोजे गए माइकोबैक्टीरियम ट्यूबरकुलोसिस से TB होता है। जन्म के समय BCG (Bacillus Calmette-Guérin) टीका लगाया जाता है तथा उपचार में DOTS प्रणाली प्रयुक्त होती है।',
    'Tuberculosis is caused by Mycobacterium tuberculosis (discovered by Robert Koch). BCG vaccine provides protection in infancy, and DOTS is the standard treatment regimen.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'टाइफाइड (मियादी बुखार)',
    'दूषित जल व भोजन से फैलने वाले "टाइफाइड" (आंत्र ज्वर) रोग का रोगजनक जीवाणु कौन-सा है और इसकी पुष्टि के लिए कौन-सा परीक्षण किया जाता है?',
    'Which bacterium causes Typhoid fever (spread via contaminated food and water), and which test confirms it?',
    ['साल्मोनेला टाइफी; विडाल परीक्षण (Widal Test)', 'Salmonella typhi; Widal Test'],
    [
      ['साल्मोनेला टाइफी; मंटौक्स परीक्षण', 'Salmonella typhi; Mantoux Test'],
      ['विब्रियो कॉलेरी; एलिसा (ELISA) परीक्षण', 'Vibrio cholerae; ELISA Test'],
      ['ट्रेपोनेमा पैलिडम; VDRL परीक्षण', 'Treponema pallidum; VDRL Test'],
    ],
    'साल्मोनेला टाइफी छोटी आंत में प्रवेश कर रक्त में पहुँचता है जिससे उच्च ज्वर व आंत में छेद हो सकता है; इसके निदान में विडाल टेस्ट किया जाता है ("टाइफाइड मैरी" प्रसिद्ध वाहक थीं)।',
    'Salmonella typhi enters the small intestine via contaminated food/water; Typhoid is diagnosed via the Widal test (Mary Mallon was famously known as "Typhoid Mary").',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'DPT (ट्रिपल एंटीजन) टीका',
    'शिशुओं को लगाया जाने वाला DPT टीका किन तीन जीवाणुजनित रोगों से सुरक्षा प्रदान करता है?',
    'The DPT (triple antigen) vaccine protects infants against which three bacterial diseases?',
    ['डिफ्थीरिया (गलघोंटू), पर्टुसिस (काली खाँसी) और टिटनेस (धनुस्तंभ)', 'Diphtheria, Pertussis (Whooping cough), and Tetanus'],
    [
      ['डेंगू, पोलियो और तपेदिक', 'Dengue, Polio, and Tuberculosis'],
      ['डिफ्थीरिया, प्लेग और टाइफाइड', 'Diphtheria, Plague, and Typhoid'],
      ['डायरिया, निमोनिया और खसरा', 'Diarrhoea, Pneumonia, and Measles'],
    ],
    'DPT का अर्थ Diphtheria (कोरिनेबैक्टीरियम डिफ्थेरी), Pertussis (बोर्डेटेला पर्टुसिस) और Tetanus (क्लॉस्ट्रिडियम टिटैनी) है; आधुनिक पेंटावैलेंट टीके में इसके साथ हेपेटाइटिस-B व Hib भी शामिल हैं।',
    'DPT immunizes against Diphtheria, Pertussis (whooping cough), and Tetanus; the Pentavalent vaccine adds Hepatitis B and Haemophilus influenzae type b (Hib).',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'हैजा (Cholera)',
    'दूषित जल और मक्खियों द्वारा फैलने वाला तीव्र दस्त व निर्जलीकरण का रोग "हैजा" किस जीवाणु द्वारा होता है?',
    'Cholera, an acute diarrhoeal disease causing severe dehydration via contaminated water and houseflies, is caused by which bacterium?',
    ['विब्रियो कॉलेरी (Vibrio cholerae)', 'Vibrio cholerae'],
    [
      ['क्लॉस्ट्रिडियम बोटुलिनम', 'Clostridium botulinum'],
      ['बेसिलस एन्थ्रेसिस', 'Bacillus anthracis'],
      ['माइकोबैक्टीरियम लेप्री', 'Mycobacterium leprae'],
    ],
    'कॉमा के आकार का जीवाणु विब्रियो कॉलेरी छोटी आंत में विष (टॉक्सिन) छोड़कर "चावल के माँड़ जैसे" दस्त और निर्जलीकरण करता है, जिसमें ORS (जीवन रक्षक घोल) प्राणरक्षक होता है।',
    'Comma-shaped Vibrio cholerae releases enterotoxin causing profuse watery ("rice-water") stools and rapid dehydration; Oral Rehydration Solution (ORS) is critical.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'टिटनेस (लॉकजॉ)',
    'जंग लगे लोहे या मिट्टी के संपर्क में आए गहरे घाव से होने वाला "टिटनेस" (धनुस्तंभ / Lockjaw) रोग किसके कारण होता है?',
    'Tetanus ("Lockjaw"), contracted from deep wounds contaminated with soil or rusted metal, is caused by which pathogen?',
    ['क्लॉस्ट्रिडियम टिटैनी (जीवाणु)', 'Clostridium tetani (Bacterium)'],
    [
      ['रेब्डोवायरस (विषाणु)', 'Rhabdovirus (Virus)'],
      ['प्लाज्मोडियम (प्रोटोजोआ)', 'Plasmodium (Protozoan)'],
      ['ट्राइकोफायटॉन (कवक)', 'Trichophyton (Fungus)'],
    ],
    'अवायवीय जीवाणु क्लॉस्ट्रिडियम टिटैनी घाव में टिटैनोस्पाज्मिन तंत्रिका-विष बनाता है जिससे जबड़े व शरीर की पेशियों में कठोर ऐंठन (लॉकजॉ) होती है।',
    'Anaerobic Clostridium tetani produces tetanospasmin neurotoxin in deep wounds, causing painful sustained spasms of jaw and skeletal muscles.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'प्लेग (काली मौत)',
    'इतिहास में "ब्लैक डेथ" (काली मौत) के नाम से प्रसिद्ध प्लेग रोग किस जीवाणु से होता है और सामान्यतः किसके द्वारा फैलता है?',
    'Plague, historically known as the "Black Death", is caused by which bacterium and classically transmitted by which vector?',
    ['यर्सिनिया पेस्टिस; चूहों पर पाए जाने वाले पिसू (Rat flea)', 'Yersinia pestis; Rat flea (Xenopsylla)'],
    [
      ['लिस्टीरिया; एडीज मच्छर', 'Listeria; Aedes mosquito'],
      ['ब्रुसेला; सैंडफ्लाई (बालू मक्खी)', 'Brucella; Sandfly'],
      ['रिकेट्सिया; सी-सी मक्खी', 'Rickettsia; Tsetse fly'],
    ],
    'यर्सिनिया पेस्टिस (पाश्चुरेला पेस्टिस) नामक जीवाणु से होने वाला ब्यूबोनिक प्लेग संक्रमित चूहों के पिसू (Xenopsylla cheopis) के काटने से मनुष्य में फैलता है।',
    'Bubonic plague is caused by Yersinia pestis and transmitted to humans from infected rodents via bites of infected rat fleas (Xenopsylla cheopis).',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'कुष्ठ रोग (Leprosy)',
    'कुष्ठ रोग (कोढ़ / Hansen’s disease) किस जीवाणु द्वारा होता है, और इसके उपचार हेतु कौन-सी बहु-औषधि चिकित्सा अपनाई जाती है?',
    'Leprosy (Hansen’s disease) is caused by which bacterium, and what is the standard treatment regimen?',
    ['माइकोबैक्टीरियम लेप्री; MDT (Multi-Drug Therapy)', 'Mycobacterium leprae; MDT (Multi-Drug Therapy)'],
    [
      ['स्ट्रेप्टोकोकस न्यूमोनी; ORS', 'Streptococcus pneumoniae; ORS'],
      ['साल्मोनेला; क्लोरोक्वीन', 'Salmonella; Chloroquine'],
      ['विब्रियो; एसाइक्लोविर', 'Vibrio; Acyclovir'],
    ],
    'आर्मॉएर हन्सेन द्वारा खोजे गए माइकोबैक्टीरियम लेप्री से कुष्ठ रोग होता है जिसमें त्वचा व परिधीय तंत्रिकाएँ प्रभावित होकर सुन्नपन आता है; इसका पूर्ण उपचार MDT द्वारा संभव है।',
    'Discovered by G.H.A. Hansen, Mycobacterium leprae damages skin and peripheral nerves causing sensory loss; it is curable with WHO-recommended Multi-Drug Therapy (MDT).',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'निमोनिया',
    'फेफड़ों की कूपिकाओं (Alveoli) में द्रव भर जाने से साँस लेने में कठिनाई उत्पन्न करने वाला निमोनिया सामान्यतः किस जीवाणु से होता है?',
    'Pneumonia, which fills lung alveoli with fluid causing breathing difficulty, is commonly caused by which bacterium?',
    ['स्ट्रेप्टोकोकस न्यूमोनी (एवं हीमोफिलस इन्फ्लुएंजी)', 'Streptococcus pneumoniae (and Haemophilus influenzae)'],
    [
      ['राइनोवायरस', 'Rhinovirus'],
      ['एंटअमीबा हिस्टोलिटिका', 'Entamoeba histolytica'],
      ['वुचेरेरिया बैनक्रॉफ्टी', 'Wuchereria bancrofti'],
    ],
    'स्ट्रेप्टोकोकस न्यूमोनी के संक्रमण से फेफड़ों की कूपिकाएँ शोथयुक्त होकर तरल से भर जाती हैं जिससे ऑक्सीजन विनिमय बाधित होता है और होंठ व नाखून नीले पड़ सकते हैं।',
    'Streptococcus pneumoniae infects lung alveoli causing fluid/pus accumulation, fever, chills, and cyanosis of lips/nails in severe cases.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'चेचक का टीका (Smallpox)',
    'विश्व के पहले टीके (चेचक / Smallpox का टीका) की खोज वर्ष 1796 में किस वैज्ञानिक ने की थी?',
    'Who discovered the world’s first vaccine (against Smallpox) in 1796?',
    ['एडवर्ड जेनर', 'Edward Jenner'],
    [
      ['लुई पाश्चर', 'Louis Pasteur'],
      ['अलेक्जेंडर फ्लेमिंग', 'Alexander Fleming'],
      ['रोनॉल्ड रॉस', 'Ronald Ross'],
    ],
    'एडवर्ड जेनर ("प्रतिरक्षा विज्ञान के जनक") ने देखा कि गो-शीतला (Cowpox) से संक्रमित ग्वालिनों को चेचक (Smallpox / Variola virus) नहीं होता, जिससे उन्होंने पहला टीका विकसित किया।',
    'Edward Jenner ("Father of Immunology") observed that milkmaids exposed to mild cowpox were immune to deadly smallpox, leading to the first successful vaccination in 1796.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'रेबीज (जलभीति)',
    'पागल कुत्ते, बंदर या चमगादड़ के काटने से होने वाले "रेबीज" (हाइड्रोफोबिया) रोग का कारण और इसके टीके के खोजकर्ता कौन हैं?',
    'What is the causative agent of Rabies (Hydrophobia) transmitted by rabid dog/animal bites, and who developed its vaccine?',
    ['लिसावायरस (रेब्डोवायरस); लुई पाश्चर', 'Lyssavirus (Rhabdovirus); Louis Pasteur'],
    [
      ['पैरामिक्सोवायरस; एडवर्ड जेनर', 'Paramyxovirus; Edward Jenner'],
      ['एंटेरोवायरस; जोनस सॉल्क', 'Enterovirus; Jonas Salk'],
      ['रेट्रोवायरस; रॉबर्ट गैलो', 'Retrovirus; Robert Gallo'],
    ],
    'रेबीज एक घातक विषाणुजनित रोग है जो केंद्रीय तंत्रिका तंत्र पर हमला कर जल से भय (हाइड्रोफोबिया) उत्पन्न करता है; लुई पाश्चर ने 1885 में इसका टीका खोजा।',
    'Rabies is caused by neurotropic Lyssavirus (Rhabdoviridae) affecting the CNS and causing hydrophobia; Louis Pasteur developed the rabies vaccine in 1885.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'पोलियो के टीके',
    'पोलियो रोग से बचाव के लिए इंजेक्शन वाला निष्क्रिय टीका (IPV) तथा मुँह से दी जाने वाली ओरल पोलियो ड्रॉप्स (OPV) क्रमशः किन वैज्ञानिकों ने विकसित की?',
    'Who developed the inactivated injectable polio vaccine (IPV) and the oral polio vaccine (OPV) drops respectively?',
    ['जोनस सॉल्क (IPV) और अल्बर्ट सेबिन (OPV)', 'Jonas Salk (IPV) and Albert Sabin (OPV)'],
    [
      ['अल्बर्ट सेबिन (IPV) और जोनस सॉल्क (OPV)', 'Albert Sabin (IPV) and Jonas Salk (OPV)'],
      ['एडवर्ड जेनर और लुई पाश्चर', 'Edward Jenner and Louis Pasteur'],
      ['पॉल एर्लिख और एमिल वॉन बेहरिंग', 'Paul Ehrlich and Emil von Behring'],
    ],
    'पोलियोमायलाइटिस एंटेरोवायरस से होता है जो मेरुरज्जु की प्रेरक तंत्रिकाओं को नष्ट कर लकवा करता है। जोनस सॉल्क ने मृत विषाणु टीका (IPV) तथा अल्बर्ट सेबिन ने जीवित-क्षीणित ओरल टीका (OPV) बनाया।',
    'Poliovirus damages spinal motor neurons causing paralysis. Jonas Salk developed the injectable killed vaccine (IPV), and Albert Sabin developed oral drops (OPV).',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'भारत पोलियो उन्मूलन',
    'विश्व स्वास्थ्य संगठन (WHO) द्वारा भारत को आधिकारिक रूप से किस वर्ष "पोलियो-मुक्त" (Polio-free) प्रमाणित किया गया था?',
    'In which year was India officially certified "Polio-free" by the World Health Organization (WHO)?',
    ['मार्च 2014', 'March 2014'],
    [
      ['जनवरी 2005', 'January 2005'],
      ['अगस्त 2019', 'August 2019'],
      ['दिसंबर 2009', 'December 2009'],
    ],
    'भारत में वाइल्ड पोलियो वायरस का अंतिम मामला जनवरी 2011 (हावड़ा, पश्चिम बंगाल) में मिला था और तीन वर्ष शून्य मामलों के बाद 27 मार्च 2014 को WHO ने भारत को पोलियो-मुक्त घोषित किया।',
    'India’s last wild polio case occurred in January 2011; after three years of zero wild cases, WHO officially certified India (and the SEAR region) polio-free on 27 March 2014.',
    'MEDIUM',
    { referenceDate: '2014' }
  ),
  q(
    'मानव रोग एवं टीके',
    'एड्स (AIDS) एवं HIV',
    'एड्स (AIDS) उत्पन्न करने वाला HIV विषाणु मुख्य रूप से प्रतिरक्षा तंत्र की किस कोशिका को नष्ट करता है?',
    'HIV, which causes AIDS, primarily targets and destroys which cells of the human immune system?',
    ['सहायक T-लिम्फोसाइट्स (CD4⁺ T-कोशिकाएँ)', 'Helper T-lymphocytes (CD4⁺ T-cells)'],
    [
      ['लाल रक्त कणिकाएँ (RBC)', 'Red blood cells (RBCs)'],
      ['प्लेटलेट्स', 'Platelets'],
      ['न्यूरॉन कोशिकाएँ', 'Neuron cells'],
    ],
    'HIV (ह्यूमन इम्यूनोडेफिशिएंसी वायरस) एक रेट्रोवायरस है जो सहायक T-लिम्फोसाइट्स (CD4⁺) में प्रवेश कर उनकी संख्या घटा देता है, जिससे अवसरवादी संक्रमणों से लड़ने की क्षमता समाप्त हो जाती है।',
    'HIV is a retrovirus that infects and depletes Helper T-lymphocytes (CD4⁺ cells), severely crippling cell-mediated immunity and leading to opportunistic infections.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'एड्स जाँच व दिवस',
    'HIV संक्रमण की प्रारंभिक स्क्रीनिंग तथा पुष्टिकरण के लिए सामान्यतः कौन-से दो परीक्षण उपयोग किए जाते हैं, और विश्व एड्स दिवस कब मनाया जाता है?',
    'Which tests are commonly used for HIV screening and confirmation, and when is World AIDS Day observed?',
    ['ELISA (स्क्रीनिंग) व वेस्टर्न ब्लॉट/PCR; 1 दिसंबर', 'ELISA (screening) & Western Blot/PCR; 1 December'],
    [
      ['विडाल टेस्ट व मंटौक्स टेस्ट; 24 मार्च', 'Widal test & Mantoux test; 24 March'],
      ['डॉप्लर टेस्ट व ECG; 7 अप्रैल', 'Doppler test & ECG; 7 April'],
      ['स्पाइरोमेट्री व बायोप्सी; 14 नवंबर', 'Spirometry & Biopsy; 14 November'],
    ],
    'HIV की जाँच के लिए ELISA (Enzyme-Linked Immunosorbent Assay) मुख्य स्क्रीनिंग टेस्ट है तथा वेस्टर्न ब्लॉट/RT-PCR पुष्टिकरण टेस्ट हैं। प्रतिवर्ष 1 दिसंबर को विश्व एड्स दिवस मनाया जाता है।',
    'ELISA is the standard HIV screening test (confirmed by Western Blot or NAT/PCR), and World AIDS Day is observed globally on 1 December.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'डेंगू एवं चिकनगुनिया',
    'डेंगू (हड्डी तोड़ बुखार) और चिकनगुनिया दोनों विषाणुजनित रोग किस मच्छर के काटने से फैलते हैं?',
    'Both Dengue ("breakbone fever") and Chikungunya viral diseases are transmitted by the bite of which mosquito?',
    ['मादा एडीज एजिप्टी मच्छर', 'Female Aedes aegypti mosquito'],
    [
      ['मादा एनोफिलीज मच्छर', 'Female Anopheles mosquito'],
      ['मादा क्यूलेक्स मच्छर', 'Female Culex mosquito'],
      ['नर एनोफिलीज मच्छर', 'Male Anopheles mosquito'],
    ],
    'एडीज एजिप्टी (टाइगर मच्छर) दिन के समय काटती है और साफ ठहरे हुए पानी में प्रजनन करती है। डेंगू में रक्त प्लेटलेट्स की संख्या तेजी से गिर जाती है।',
    'Female Aedes aegypti (day-biting tiger mosquito breeding in clean stagnant water) transmits dengue, chikungunya, Zika, and yellow fever; dengue causes sharp platelet drop.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'हेपेटाइटिस (पीलिया)',
    'मानव शरीर के किस अंग को हेपेटाइटिस (A, B, C, D, E) विषाणु मुख्य रूप से प्रभावित करते हैं, तथा इनमें से कौन-सा संचरण की दृष्टि से दूषित जल से फैलता है?',
    'Which human organ is primarily inflamed by Hepatitis viruses (A–E), and which types spread primarily via contaminated food and water?',
    ['यकृत (लिवर); हेपेटाइटिस A और E', 'Liver; Hepatitis A and E'],
    [
      ['वृक्क; हेपेटाइटिस B और C', 'Kidney; Hepatitis B and C'],
      ['फेफड़े; हेपेटाइटिस B और D', 'Lungs; Hepatitis B and D'],
      ['हृदय; हेपेटाइटिस A और C', 'Heart; Hepatitis A and C'],
    ],
    'हेपेटाइटिस का अर्थ यकृत की सूजन है। हेपेटाइटिस A और E फेकल-ओरल मार्ग (दूषित जल/भोजन) से फैलते हैं, जबकि B, C और D रक्त, असुरक्षित यौन संपर्क व सुइयों से फैलते हैं।',
    'Hepatitis causes liver inflammation. Hepatitis A and E spread via contaminated food/water (faecal-oral route), while B, C, and D spread via blood and body fluids.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'MMR टीका',
    'बच्चों को लगाया जाने वाला MMR टीका किन तीन विषाणुजनित रोगों से सुरक्षा प्रदान करता है?',
    'The MMR vaccine given to children protects against which three viral diseases?',
    ['खसरा (Measles), गलसुआ (Mumps) और रूबेला (Rubella)', 'Measles, Mumps, and Rubella'],
    [
      ['मलेरिया, मेनिन्जाइटिस और रेबीज', 'Malaria, Meningitis, and Rabies'],
      ['डिफ्थीरिया, खसरा और पोलियो', 'Diphtheria, Measles, and Polio'],
      ['चेचक, छोटी माता और डेंगू', 'Smallpox, Chickenpox, and Dengue'],
    ],
    'MMR संयुक्त जीवित-क्षीणित विषाणु टीका है जो खसरा, मम्प्स (पैरोटिड ग्रंथि सूजन) और रूबेला (जर्मन मीसल्स) से बचाव करता है।',
    'MMR is a live-attenuated combined vaccine conferring immunity against Measles, Mumps, and Rubella.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'छोटी माता व सामान्य जुकाम',
    'छोटी माता (Chickenpox) और सामान्य जुकाम (Common Cold) क्रमशः किन विषाणुओं के कारण होते हैं?',
    'Chickenpox and the Common Cold are caused respectively by which viruses?',
    ['वैरिसेला-जोस्टर वायरस तथा राइनोवायरस', 'Varicella-zoster virus and Rhinovirus'],
    [
      ['वैरियोला वायरस तथा कोरोनावायरस', 'Variola virus and Coronavirus'],
      ['रूबियोला वायरस तथा रेट्रोवायरस', 'Rubeola virus and Retrovirus'],
      ['फ्लेवीवायरस तथा एडेनोवायरस', 'Flavivirus and Adenovirus'],
    ],
    'छोटी माता (Chickenpox) वैरिसेला-जोस्टर वायरस से होता है जबकि चेचक (Smallpox) वैरियोला वायरस से होता था। सामान्य जुकाम मुख्यतः राइनोवायरस से होता है जो नाक व ऊपरी श्वसन मार्ग को प्रभावित करता है।',
    'Chickenpox is caused by Varicella-zoster virus (Smallpox was Variola), while the common cold is most frequently caused by Rhinoviruses infecting the upper respiratory tract.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'मलेरिया परजीवी व वाहक',
    'मलेरिया रोग का कारक जीव क्या है और इसे एक मनुष्य से दूसरे मनुष्य तक पहुँचाने का कार्य कौन करता है?',
    'What is the causative organism of Malaria, and what is its vector?',
    ['प्लाज्मोडियम (प्रोटोजोआ); मादा एनोफिलीज मच्छर', 'Plasmodium (Protozoan); Female Anopheles mosquito'],
    [
      ['एंटअमीबा (प्रोटोजोआ); घरेलू मक्खी', 'Entamoeba (Protozoan); Housefly'],
      ['लीशमैनिया (प्रोटोजोआ); बालू मक्खी', 'Leishmania (Protozoan); Sandfly'],
      ['प्लाज्मोडियम (जीवाणु); क्यूलेक्स मच्छर', 'Plasmodium (Bacterium); Culex mosquito'],
    ],
    'मलेरिया प्लाज्मोडियम (P. vivax, P. falciparum आदि) प्रोटोजोआ से होता है; रोनॉल्ड रॉस ने सिद्ध किया कि मादा एनोफिलीज मच्छर इसकी वाहक है।',
    'Malaria is caused by the protozoan Plasmodium (e.g., P. vivax, P. falciparum) and transmitted by female Anopheles mosquitoes (discovered by Ronald Ross).',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'मलेरिया चक्र व औषधि',
    'मलेरिया के उपचार में प्रयुक्त पारंपरिक औषधि "कुनैन" (Quinine) किस वृक्ष की छाल से प्राप्त की जाती है, और मलेरिया में कंपकंपी के साथ तेज बुखार किस विषैले पदार्थ के मुक्त होने से आता है?',
    'From which tree’s bark is the antimalarial drug "Quinine" obtained, and which toxin released during RBC rupture causes malarial chills and high fever?',
    ['सिनकोना वृक्ष की छाल; हीमोजोइन (Haemozoin)', 'Bark of Cinchona tree; Haemozoin'],
    [
      ['नीम की छाल; हिस्टामाइन', 'Bark of Neem; Histamine'],
      ['अर्जुन की छाल; बिलिरुबिन', 'Bark of Arjuna; Bilirubin'],
      ['यूकेलिप्टस की छाल; इंटरफेरॉन', 'Bark of Eucalyptus; Interferon'],
    ],
    'सिनकोना की छाल से कुनैन मिलती है। जब प्लाज्मोडियम के मीरोजोइट्स RBC को तोड़ते हैं, तो विषैला "हीमोजोइन" मुक्त होता है जिससे हर 48–72 घंटे में कंपकंपी व बुखार आता है।',
    'Quinine comes from Cinchona bark. Rupture of infected RBCs releases the toxic pigment haemozoin, triggering recurring episodes of chills and high fever.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'कालाजार (Kala-azar)',
    'कालाजार (विसरल लीशमैनियासिस) रोग किस प्रोटोजोआ से होता है और इसकी वाहक मक्खी कौन-सी है?',
    'Kala-azar (Visceral Leishmaniasis) is caused by which protozoan and transmitted by which vector?',
    ['लीशमैनिया डोनोवानी; बालू मक्खी (Sandfly / फ्लेबोटोमस)', 'Leishmania donovani; Sandfly (Phlebotomus)'],
    [
      ['ट्रिपेनोसोमा गैम्बिएन्स; सी-सी मक्खी', 'Trypanosoma gambiense; Tsetse fly'],
      ['एंटअमीबा हिस्टोलिटिका; तिलचट्टा', 'Entamoeba histolytica; Cockroach'],
      ['जिआर्डिया; क्यूलेक्स मच्छर', 'Giardia; Culex mosquito'],
    ],
    'कालाजार प्रोटोजोआ लीशमैनिया डोनोवानी से होता है जो बालू मक्खी (Sandfly) द्वारा फैलता है; इसमें यकृत व प्लीहा बढ़ जाते हैं और त्वचा का रंग काला पड़ने लगता है।',
    'Leishmania donovani causes Kala-azar and is transmitted by the sandfly (Phlebotomus argentipes), leading to splenomegaly, prolonged fever, and skin darkening.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'निद्रा रोग व अमीबी पेचिश',
    'अफ्रीकी निद्रा रोग (Sleeping Sickness) तथा अमीबी पेचिश (Amoebiasis) के कारक प्रोटोजोआ क्रमशः कौन-से हैं?',
    'Which protozoans cause African Sleeping Sickness and Amoebic Dysentery (Amoebiasis) respectively?',
    ['ट्रिपेनोसोमा (सी-सी मक्खी द्वारा) तथा एंटअमीबा हिस्टोलिटिका', 'Trypanosoma (via Tsetse fly) and Entamoeba histolytica'],
    [
      ['प्लाज्मोडियम तथा लीशमैनिया', 'Plasmodium and Leishmania'],
      ['पैरामीशियम तथा यूग्लीना', 'Paramecium and Euglena'],
      ['वुचेरेरिया तथा एस्केरिस', 'Wuchereria and Ascaris'],
    ],
    'सी-सी मक्खी (Glossina) द्वारा फैलने वाला ट्रिपेनोसोमा निद्रा रोग करता है, जबकि दूषित जल/भोजन से बड़ी आंत में पहुँचने वाला एंटअमीबा हिस्टोलिटिका अमीबी पेचिश करता है।',
    'Trypanosoma brucei (transmitted by the tsetse fly) causes sleeping sickness, while Entamoeba histolytica infects the large intestine causing amoebiasis.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'कवकजनित रोग',
    'दाद (Ringworm) तथा एथलीट फुट (Athlete’s foot) मनुष्य में किस वर्ग के सूक्ष्मजीवों द्वारा होने वाले संक्रामक रोग हैं?',
    'Ringworm and Athlete’s foot in humans are infectious diseases caused by which group of microbes?',
    ['कवक (Fungi - जैसे ट्राइकोफायटॉन, माइक्रोस्पोरम)', 'Fungi (such as Trichophyton, Microsporum)'],
    [
      ['विषाणु (Viruses)', 'Viruses'],
      ['प्रोटोजोआ (Protozoa)', 'Protozoa'],
      ['गोलकृमि (Helminths)', 'Helminths'],
    ],
    'ट्राइकोफायटॉन, माइक्रोस्पोरम और एपिडर्मोफायटॉन जैसे डर्मेटोफाइट कवक त्वचा, नाखून और पैरों की उँगलियों के बीच नमी वाले स्थानों में दाद व एथलीट फुट पैदा करते हैं।',
    'Dermatophyte fungi (Trichophyton, Microsporum, Epidermophyton) infect keratinized skin, nails, and moist toe webs causing ringworm and athlete’s foot.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'कृमिजनित रोग - फाइलेरिया',
    'फाइलेरिया (हाथीपाँव / Elephantiasis) किस कृमि से होता है और इसका वाहक कौन-सा मच्छर है?',
    'Filariasis (Elephantiasis) is caused by which helminth worm and transmitted by which mosquito?',
    ['वुचेरेरिया बैनक्रॉफ्टी (गोलकृमि); मादा क्यूलेक्स मच्छर', 'Wuchereria bancrofti (filarial worm); Female Culex mosquito'],
    [
      ['एस्केरिस लुम्ब्रिकॉयड्स; मादा एनोफिलीज मच्छर', 'Ascaris lumbricoides; Female Anopheles mosquito'],
      ['टीनिया सोलियम; एडीज मच्छर', 'Taenia solium; Aedes mosquito'],
      ['एनसाइलोस्टोमा; घरेलू मक्खी', 'Ancylostoma; Housefly'],
    ],
    'फाइलैरियल कृमि वुचेरेरिया बैनक्रॉफ्टी मादा क्यूलेक्स मच्छर के काटने से लसीका वाहिकाओं में पहुँचकर उन्हें अवरुद्ध कर देता है जिससे निचले अंगों में भारी सूजन (हाथीपाँव) आती है।',
    'Wuchereria bancrofti, transmitted by female Culex mosquitoes, causes chronic inflammation and blockage of lower-limb lymphatic vessels, leading to elephantiasis.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'एस्केरिएसिस एवं फीताकृमि',
    'बच्चों की आंतों में पाया जाने वाला सामान्य गोलकृमि "एस्केरिस" मुख्य रूप से किस प्रकार फैलता है?',
    'How does the common intestinal roundworm "Ascaris" (causing Ascariasis) primarily spread in humans?',
    ['कृमि के अंडों से संदूषित मिट्टी, कच्ची सब्जियों, फल और जल के सेवन से', 'Through ingestion of water, raw vegetables, fruits, or soil contaminated with parasite eggs'],
    [
      ['संक्रमित मच्छर के काटने से', 'Through bite of an infected mosquito'],
      ['हवा में छींकने की बूंदों से', 'Through respiratory droplets in air'],
      ['केवल रक्त आधान से', 'Solely via blood transfusion'],
    ],
    'संक्रमित व्यक्ति के मल के साथ एस्केरिस के अंडे मिट्टी व जल को दूषित करते हैं; बिना धोए फल-सब्जी खाने या गंदे हाथों से ये मुख द्वारा आंत में पहुँचते हैं।',
    'Eggs passed in infected faeces contaminate soil, water, and produce; ingestion via unwashed hands or raw food leads to ascariasis.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'अर्जित प्रतिरक्षा के प्रकार',
    'नवजात शिशु को माता के प्रथम पीले गाढ़े दूध "कोलस्ट्रम" से IgA प्रतिरक्षी प्राप्त होना किस प्रकार की प्रतिरक्षा का उदाहरण है?',
    'The transfer of IgA antibodies from a mother to her newborn via colostrum (first milk) is an example of what type of immunity?',
    ['प्राकृतिक निष्क्रिय प्रतिरक्षा (Natural Passive Immunity)', 'Natural Passive Immunity'],
    [
      ['प्राकृतिक सक्रिय प्रतिरक्षा', 'Natural Active Immunity'],
      ['कृत्रिम सक्रिय प्रतिरक्षा', 'Artificial Active Immunity'],
      ['कृत्रिम निष्क्रिय प्रतिरक्षा', 'Artificial Passive Immunity'],
    ],
    'जब शरीर को स्वयं एंटीबॉडी न बनाकर माता से तैयार प्रतिरक्षी (प्लेसेंटा द्वारा IgG या कोलस्ट्रम द्वारा IgA) प्राप्त होते हैं, तो यह प्राकृतिक निष्क्रिय प्रतिरक्षा कहलाती है। टीकाकरण कृत्रिम सक्रिय प्रतिरक्षा है।',
    'Receiving ready-made antibodies from the mother (IgG across placenta or IgA in colostrum) is natural passive immunity; vaccination represents artificial active immunity.',
    'HARD'
  ),
  q(
    'मानव रोग एवं टीके',
    'एंटीबॉडी (प्रतिरक्षी) के प्रकार',
    'मानव शरीर में एलर्जी (अतिसंवेदनशीलता) प्रतिक्रियाओं के दौरान कौन-सा इम्यूनोग्लोबुलिन (प्रतिरक्षी) मुख्य रूप से बढ़ जाता है?',
    'Which immunoglobulin (antibody) class primarily mediates allergic (hypersensitivity) reactions in humans?',
    ['IgE', 'IgE'],
    [
      ['IgG', 'IgG'],
      ['IgM', 'IgM'],
      ['IgA', 'IgA'],
    ],
    'IgE प्रतिरक्षी मास्ट कोशिकाओं से जुड़कर हिस्टामाइन व सिरोटोनिन मुक्त कराते हैं जिससे छींक, खुजली व दमा जैसी एलर्जी होती है। IgG रक्त में सर्वाधिक मात्रा में तथा प्लेसेंटा पार करने वाली एकमात्र एंटीबॉडी है।',
    'IgE binds mast cells and basophils to trigger histamine release during allergies. IgG is the most abundant serum antibody and the only one crossing the placenta.',
    'HARD'
  ),
  q(
    'मानव रोग एवं टीके',
    'आनुवंशिक रोग - हीमोफीलिया',
    'हीमोफीलिया ("रॉयल डिजीज") किस प्रकार का आनुवंशिक विकार है जिसमें चोट लगने पर रक्त का थक्का नहीं जमता?',
    'Haemophilia ("Royal Disease"), in which blood fails to clot properly after an injury, is what type of genetic disorder?',
    ['X-सहलग्न अप्रभावी रोग (X-linked recessive disorder)', 'X-linked recessive disorder'],
    [
      ['Y-सहलग्न रोग', 'Y-linked disorder'],
      ['ऑटोसोमल प्रभावी रोग', 'Autosomal dominant disorder'],
      ['जीवाणुजनित संक्रामक रोग', 'Bacterial infectious disease'],
    ],
    'हीमोफीलिया और वर्णांधता (Colour blindness) X-गुणसूत्र पर स्थित अप्रभावी जीन के कारण होते हैं। इनमें स्त्रियाँ प्रायः वाहक होती हैं और पुरुष अधिक प्रभावित होते हैं।',
    'Haemophilia and red-green colour blindness are X-linked recessive traits; females are usually carriers while males express the disorder with a single mutant X.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'वर्णांधता (Colour Blindness)',
    'लाल-हरे रंग की वर्णांधता से पीड़ित व्यक्ति को सामान्यतः किन दो रंगों में भेद करने में कठिनाई होती है?',
    'A person suffering from common red-green colour blindness has difficulty distinguishing between which two colours?',
    ['लाल और हरा', 'Red and Green'],
    [
      ['काला और सफेद', 'Black and White'],
      ['पीला और नीला', 'Yellow and Blue'],
      ['नारंगी और बैंगनी', 'Orange and Violet'],
    ],
    'X-सहलग्न अप्रभावी जीन में दोष के कारण रेटिना की लाल या हरी शंकु कोशिकाएँ ठीक से कार्य नहीं करतीं, जिससे रोगी लाल व हरे रंग में अंतर नहीं कर पाता।',
    'Faulty cone photopigments encoded on the X chromosome prevent proper discrimination between red and green wavelengths.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'डाउन सिंड्रोम',
    'मनुष्य में 21वें गुणसूत्र की एक अतिरिक्त प्रति (Trisomy of chromosome 21) के कारण होने वाला गुणसूत्रीय विकार कौन-सा है?',
    'Which chromosomal disorder in humans is caused by the presence of an extra copy of chromosome 21 (Trisomy 21)?',
    ['डाउन सिंड्रोम (मंगोलिज्म)', 'Down Syndrome'],
    [
      ['टर्नर सिंड्रोम', 'Turner Syndrome'],
      ['क्लाइनफेल्टर सिंड्रोम', 'Klinefelter Syndrome'],
      ['सिकल सेल एनीमिया', 'Sickle cell anaemia'],
    ],
    'डाउन सिंड्रोम में कुल 47 गुणसूत्र (21वें जोड़े में 3 गुणसूत्र) होते हैं। इसमें गोल चेहरा, चौड़ी चपटी जीभ, हथेली में एकल क्रीज तथा शारीरिक-बौद्धिक विकास में विलंब देखा जाता है।',
    'Down syndrome (47 chromosomes, Trisomy 21) manifests with a flat broad face, furrowed tongue, single palmar crease, and varying intellectual/physical developmental delay.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'टर्नर व क्लाइनफेल्टर सिंड्रोम',
    '45 गुणसूत्रों (44 + XO) वाली स्त्री तथा 47 गुणसूत्रों (44 + XXY) वाले पुरुष क्रमशः किन आनुवंशिक सिंड्रोम से ग्रसित होते हैं?',
    'A female with 45 chromosomes (44 + XO) and a male with 47 chromosomes (44 + XXY) exhibit which syndromes respectively?',
    ['टर्नर सिंड्रोम और क्लाइनफेल्टर सिंड्रोम', 'Turner Syndrome and Klinefelter Syndrome'],
    [
      ['क्लाइनफेल्टर सिंड्रोम और टर्नर सिंड्रोम', 'Klinefelter Syndrome and Turner Syndrome'],
      ['डाउन सिंड्रोम और एडवर्ड सिंड्रोम', 'Down Syndrome and Edwards Syndrome'],
      ['पटाऊ सिंड्रोम और हीमोफीलिया', 'Patau Syndrome and Haemophilia'],
    ],
    'टर्नर सिंड्रोम (XO, 45) में एक X गुणसूत्र की कमी से स्त्रियाँ बंध्य व अविकसित अंडाशय वाली होती हैं। क्लाइनफेल्टर सिंड्रोम (XXY, 47) में एक अतिरिक्त X से पुरुष में गायनेकोमैस्टिया व बंध्यता होती है।',
    'Turner syndrome (45, XO) results in sterile females with rudimentary ovaries, whereas Klinefelter syndrome (47, XXY) results in sterile males with gynaecomastia.',
    'HARD'
  ),
  q(
    'मानव रोग एवं टीके',
    'सिकल सेल एनीमिया',
    'सिकल सेल एनीमिया (दात्र कोशिका अरक्तता) में लाल रक्त कणिकाओं (RBC) का आकार द्वि-अवतल से बदलकर हँसिए जैसा किस परिवर्तन के कारण हो जाता है?',
    'In Sickle-cell anaemia, RBCs change from biconcave discs into sickle shapes due to which molecular substitution in the haemoglobin beta-globin chain?',
    ['छठे स्थान पर ग्लूटामिक अम्ल के स्थान पर वैलीन अमीनो अम्ल का आ जाना', 'Substitution of Glutamic acid by Valine at the 6th position of the beta-globin chain'],
    [
      ['पहली स्थिति पर लाइसिन के स्थान पर प्रोलीन आना', 'Substitution of Lysine by Proline at position 1'],
      ['हीमोग्लोबिन में लौह के स्थान पर कोबाल्ट आना', 'Replacement of Iron by Cobalt in haemoglobin'],
      ['RBC में अतिरिक्त केंद्रक बन जाना', 'Appearance of an extra nucleus in RBCs'],
    ],
    'यह एक ऑटोसोमल अप्रभावी बिंदु उत्परिवर्तन (Point Mutation) है जिसमें GAG कोडॉन GUG में बदलने से β-ग्लोबिन श्रृंखला के छठे स्थान पर ग्लूटामिक अम्ल की जगह वैलीन आ जाता है।',
    'An autosomal recessive point mutation changes GAG to GUG, substituting valine for glutamic acid at position 6 of the β-globin chain, causing RBC sickling under low O2.',
    'HARD'
  ),
  q(
    'मानव रोग एवं टीके',
    'भारत का सिकल सेल मिशन',
    'भारत सरकार ने किस वर्ष तक देश से सिकल सेल एनीमिया के उन्मूलन के लक्ष्य के साथ "राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन" (2023) प्रारंभ किया?',
    'With the launch of the National Sickle Cell Anaemia Elimination Mission (2023), by which year does India target eliminating sickle cell disease as a public health problem?',
    ['वर्ष 2047 तक', 'By 2047'],
    [
      ['वर्ष 2030 तक', 'By 2030'],
      ['वर्ष 2025 तक', 'By 2025'],
      ['वर्ष 2035 तक', 'By 2035'],
    ],
    '1 जुलाई 2023 को शहडोल (मध्य प्रदेश) से प्रारंभ राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन का लक्ष्य 2047 तक सिकल सेल रोग का उन्मूलन करना है।',
    'Launched on 1 July 2023 from Shahdol (MP), India’s National Sickle Cell Anaemia Elimination Mission aims to eliminate sickle cell disease by 2047.',
    'MEDIUM',
    { referenceDate: '2023' }
  ),
  q(
    'मानव रोग एवं टीके',
    'कैंसर के प्रकार व कारण',
    'सामान्य कोशिकाओं को कैंसर कोशिकाओं में बदलने वाले भौतिक, रासायनिक या जैविक कारक क्या कहलाते हैं, और कैंसर का एक अंग से दूसरे अंग में फैलना क्या कहलाता है?',
    'What are cancer-causing agents called, and what is the spread of cancerous cells from a primary tumour to distant sites called?',
    ['कार्सिनोजन (कैंसरजन); मेटास्टेसिस (Metastasis)', 'Carcinogens; Metastasis'],
    [
      ['एंटीजन; एपोप्टोसिस', 'Antigens; Apoptosis'],
      ['पैथोजन; म्यूटेशन', 'Pathogens; Mutation'],
      ['ऑन्कोजीन; पैलियेशन', 'Oncogenes; Palliation'],
    ],
    'कैंसर कोशिकाओं में "संपर्क संदमन" (Contact Inhibition) का गुण समाप्त हो जाता है। दुर्दम (Malignant) ट्यूमर रक्त/लसीका से अन्य अंगों में फैलकर नए ट्यूमर बनाते हैं जिसे मेटास्टेसिस कहते हैं।',
    'Cancer cells lose contact inhibition. Agents inducing cancer are carcinogens, and spreading of malignant cells to distant organs to form secondary tumours is metastasis.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'कैंसर की जाँच',
    'स्तन कैंसर की प्रारंभिक जाँच के लिए तथा ऊतक का टुकड़ा लेकर कैंसर की पुष्टि करने के लिए क्रमशः कौन-सी जाँचें की जाती हैं?',
    'Which diagnostic methods are used for breast cancer screening and definitive tissue confirmation of cancer respectively?',
    ['मैमोग्राफी (Mammography) और बायोप्सी (Biopsy)', 'Mammography and Biopsy'],
    [
      ['एंडोस्कोपी और विडाल टेस्ट', 'Endoscopy and Widal test'],
      ['इलेक्ट्रोएन्सेफलोग्राफी और ELISA', 'EEG and ELISA'],
      ['अल्ट्रासाउंड और स्पाइरोमेट्री', 'Ultrasound and Spirometry'],
    ],
    'मैमोग्राफी कम-खुराक एक्स-रे द्वारा स्तन ऊतक की जाँच करती है, जबकि बायोप्सी (जीवऊति जाँच) में संदिग्ध ऊतक के सूक्ष्मदर्शी परीक्षण (हिस्टोपैथोलॉजी) से कैंसर की पुष्टि होती है।',
    'Mammography screens breast tissue using low-dose X-rays, whereas biopsy involves histopathological examination of a tissue sample to confirm malignancy.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'मिशन इंद्रधनुष',
    'भारत सरकार द्वारा वर्ष 2014 में प्रारंभ "मिशन इंद्रधनुष" का मुख्य उद्देश्य क्या है?',
    'What is the primary objective of "Mission Indradhanush" launched by the Government of India in 2014?',
    ['गर्भवती महिलाओं व 2 वर्ष तक के बच्चों का शत-प्रतिशत पूर्ण टीकाकरण सुनिश्चित करना', 'To achieve full immunization coverage for all children under 2 years and pregnant women against vaccine-preventable diseases'],
    [
      ['देश में नेत्रदान को बढ़ावा देना', 'To promote eye donation across India'],
      ['सभी गाँवों में सौर ऊर्जा पंप लगाना', 'To install solar pumps in all villages'],
      ['केवल वृद्धों को मधुमेह की दवा बाँटना', 'To distribute diabetes medicines only to elderly citizens'],
    ],
    'दिसंबर 2014 में प्रारंभ मिशन इंद्रधनुष के अंतर्गत वंचित व आंशिक टीकाकरण वाले बच्चों एवं गर्भवती महिलाओं को टीबी, पोलियो, डिफ्थीरिया, काली खाँसी, टिटनेस, हेपेटाइटिस-B, खसरा आदि के टीके लगाए जाते हैं।',
    'Launched in December 2014, Mission Indradhanush targets unvaccinated and partially vaccinated children (<2 years) and pregnant women under the Universal Immunization Programme.',
    'EASY',
    { referenceDate: '2014' }
  ),
  q(
    'मानव रोग एवं टीके',
    'इंटरफेरॉन (Interferon)',
    'विषाणु से संक्रमित कोशिकाएँ आस-पास की स्वस्थ कोशिकाओं को विषाणु संक्रमण से बचाने के लिए कौन-सा प्रतिरक्षी प्रोटीन स्रावित करती हैं?',
    'Virus-infected cells secrete which protective cytokine proteins to shield neighbouring healthy cells from viral infection?',
    ['इंटरफेरॉन (Interferons)', 'Interferons'],
    [
      ['हिपैरिन (Heparin)', 'Heparin'],
      ['इंसुलिन (Insulin)', 'Insulin'],
      ['फाइब्रिनोजेन (Fibrinogen)', 'Fibrinogen'],
    ],
    'इंटरफेरॉन सहज प्रतिरक्षा के साइटोकाइन रोध (Cytokine barrier) हैं जो पड़ोसी कोशिकाओं में एंटी-वायरल एंजाइम सक्रिय कर विषाणु गुणन रोकते हैं।',
    'Interferons are cytokine barriers of innate immunity secreted by virus-infected cells that induce an antiviral state in neighbouring uninfected cells.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'कोविड-19 टीकाकरण विज्ञान',
    'भारत में निर्मित विश्व का पहला स्वदेशी डीएनए (DNA)-आधारित कोविड-19 टीका कौन-सा था?',
    'Which was the world’s first indigenously developed plasmid DNA-based COVID-19 vaccine produced in India?',
    ['ज़ायकोव-डी (ZyCoV-D)', 'ZyCoV-D'],
    [
      ['कोवैक्सीन (Covaxin)', 'Covaxin'],
      ['कोविशील्ड (Covishield)', 'Covishield'],
      ['स्पुतनिक-V (Sputnik V)', 'Sputnik V'],
    ],
    'जायडस कैडिला द्वारा विकसित ZyCoV-D विश्व का पहला प्लाज्मिड DNA टीका है जिसे सुई-रहित एप्लीकेटर से दिया जाता है (कोवैक्सीन निष्क्रिय विषाणु टीका व कोविशील्ड वायरल वेक्टर टीका है)।',
    'Developed by Zydus Cadila, ZyCoV-D was the world’s first plasmid DNA vaccine approved for COVID-19; Covaxin is an inactivated virus vaccine and Covishield is a viral vector vaccine.',
    'HARD',
    { referenceDate: '2021' }
  ),
  q(
    'मानव रोग एवं टीके',
    'जापानी एन्सेफलाइटिस (दिमागी बुखार)',
    'पूर्वी उत्तर प्रदेश (गोरखपुर क्षेत्र) व तराई में बच्चों को प्रभावित करने वाला "जापानी एन्सेफलाइटिस" किस रोगाणु से होता है और इसका प्रमुख वाहक कौन है?',
    'Japanese Encephalitis, historically affecting children in eastern Uttar Pradesh/Terai regions, is caused by which pathogen and spread by which mosquito?',
    ['फ्लेवीवायरस (विषाणु); क्यूलेक्स मच्छर (Culex tritaeniorhynchus)', 'Flavivirus (Virus); Culex mosquito'],
    [
      ['जीवाणु; एडीज मच्छर', 'Bacterium; Aedes mosquito'],
      ['प्रोटोजोआ; एनोफिलीज मच्छर', 'Protozoan; Anopheles mosquito'],
      ['कवक; बालू मक्खी', 'Fungus; Sandfly'],
    ],
    'जापानी एन्सेफलाइटिस (JE) एक विषाणुजनित मस्तिष्क ज्वर है जो सूअरों व जलपक्षियों से क्यूलेक्स मच्छरों द्वारा मनुष्य में फैलता है। इसके बचाव के लिए JE टीका (SA 14-14-2) लगाया जाता है।',
    'Japanese Encephalitis is caused by a flavivirus transmitted by Culex mosquitoes (amplified in pigs and wading birds); vaccination is part of India’s UIP in endemic districts.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'प्रतिजैविक (Antibiotics) बनाम विषाणु',
    'सामान्य वायरल जुकाम या फ्लू में एंटीबायोटिक (प्रतिजैविक) दवाएँ प्रभावी क्यों नहीं होतीं?',
    'Why are antibiotics ineffective against viral infections like the common cold or influenza?',
    ['क्योंकि एंटीबायोटिक जीवाणुओं की कोशिका भित्ति या जैव-रासायनिक मार्गों को अवरुद्ध करती हैं, जबकि विषाणुओं में ऐसे मार्ग व कोशिका भित्ति नहीं होते', 'Because antibiotics block bacterial cell wall synthesis or metabolic pathways, which viruses lack'],
    [
      ['क्योंकि विषाणु आकार में जीवाणुओं से बहुत बड़े होते हैं', 'Because viruses are much larger than bacteria'],
      ['क्योंकि एंटीबायोटिक केवल कवक द्वारा खा ली जाती हैं', 'Because antibiotics are consumed by fungi'],
      ['क्योंकि विषाणुओं में सेल्यूलोज की भित्ति होती है', 'Because viruses possess a cellulose cell wall'],
    ],
    'पेनिसिलिन जैसी एंटीबायोटिक जीवाणु की पेप्टिडोग्लाइकन भित्ति या 70S राइबोसोम को लक्ष्य बनाती हैं। विषाणु अकोशिकीय होते हैं और पोषी कोशिका की मशीनरी का उपयोग करते हैं, इसलिए एंटीबायोटिक उन पर बेअसर रहती हैं।',
    'Antibiotics target bacterial cell wall synthesis or 70S ribosomes; viruses are acellular and replicate using host cell machinery, making antibiotics ineffective against them.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'स्वच्छता एवं जल शुद्धिकरण',
    'पेयजल के क्लोरीनीकरण (Chlorination) का मुख्य उद्देश्य क्या होता है, और इसके लिए सामान्यतः कौन-सा रसायन प्रयुक्त होता है?',
    'What is the main purpose of chlorinating drinking water, and which chemical is commonly used at household/municipal levels?',
    ['रोगजनक सूक्ष्मजीवों का नाश (विसंक्रमण); ब्लीचिंग पाउडर (CaOCl2) या क्लोरीन गैस', 'Disinfection by killing pathogenic microbes; Bleaching powder (CaOCl2) or Chlorine gas'],
    [
      ['जल की कठोरता बढ़ाना; सोडियम क्लोराइड', 'Increasing water hardness; Sodium chloride'],
      ['जल में ऑक्सीजन बढ़ाना; कार्बन डाइऑक्साइड', 'Increasing dissolved oxygen; Carbon dioxide'],
      ['जल का रंग नीला करना; कॉपर सल्फेट', 'Turning water blue; Copper sulphate'],
    ],
    'ब्लीचिंग पाउडर (कैल्शियम हाइपोक्लोराइट) या क्लोरीन जल में हाइपोक्लोरस अम्ल (HOCl) बनाता है जो हैजा, टाइफाइड और पेचिश के रोगाणुओं को नष्ट कर जल को सुरक्षित बनाता है।',
    'Chlorine or bleaching powder forms hypochlorous acid (HOCl) in water, effectively destroying waterborne bacterial and viral pathogens.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'खाद्य विषाक्तता (Food Poisoning)',
    'डिब्बाबंद या बासी भोजन में अत्यधिक घातक तंत्रिका-विष उत्पन्न कर "बोटुलिज्म" (खाद्य विषाक्तता) पैदा करने वाला जीवाणु कौन-सा है?',
    'Which bacterium produces a lethal neurotoxin in improperly canned or stale food, causing severe food poisoning ("Botulism")?',
    ['क्लॉस्ट्रिडियम बोटुलिनम', 'Clostridium botulinum'],
    [
      ['लैक्टोबैसिलस एसिडोफिलस', 'Lactobacillus acidophilus'],
      ['राइजोबियम लेग्यूमिनोसेरम', 'Rhizobium leguminosarum'],
      ['एजोटोबैक्टर', 'Azotobacter'],
    ],
    'अवायवीय जीवाणु क्लॉस्ट्रिडियम बोटुलिनम बोटुलिनम टॉक्सिन बनाता है जो तंत्रिका-पेशी संधि पर एसिटिलकोलीन का स्राव रोककर लकवा कर सकता है।',
    'Anaerobic Clostridium botulinum produces botulinum toxin in sealed/improperly preserved foods, blocking acetylcholine release and causing flaccid paralysis.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'रोटावायरस एवं दस्त',
    '5 वर्ष से कम आयु के बच्चों में गंभीर दस्त (Diarrhoea) का सबसे प्रमुख विषाणुजनित कारण कौन-सा है, जिसके लिए भारत में स्वदेशी टीका विकसित किया गया है?',
    'Which is the leading viral cause of severe diarrhoea in children under 5 years, against which India developed an indigenous oral vaccine?',
    ['रोटावायरस (Rotavirus); रोटावैक टीका', 'Rotavirus; Rotavac vaccine'],
    [
      ['रेब्डोवायरस; कोवैक्सीन', 'Rhabdovirus; Covaxin'],
      ['वैरियोला वायरस; BCG', 'Variola virus; BCG'],
      ['पैरामिक्सोवायरस; DPT', 'Paramyxovirus; DPT'],
    ],
    'रोटावायरस शिशुओं में तीव्र जल-अतिसार करता है। भारत में निर्मित "रोटावैक" (Rotavac) ओरल वैक्सीन को सार्वभौमिक टीकाकरण कार्यक्रम (UIP) में शामिल किया गया है।',
    'Rotavirus is the foremost viral cause of severe dehydrating gastroenteritis in young children; India’s indigenous oral vaccine Rotavac is part of UIP.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'अस्थमा व एलर्जी',
    'धूल, परागकण या ठंडी हवा से श्वसनिकाओं (Bronchioles) की चिकनी पेशियों में संकुचन और सूजन होकर घरघराहट (Wheezing) आना किस रोग का लक्षण है?',
    'Spasm and inflammation of bronchioles triggered by allergens (dust, pollen) causing wheezing and breathlessness characterize which condition?',
    ['दमा (अस्थमा / Asthma)', 'Asthma'],
    [
      ['तपेदिक (TB)', 'Tuberculosis'],
      ['गठिया (Arthritis)', 'Arthritis'],
      ['पीलिया (Jaundice)', 'Jaundice'],
    ],
    'अस्थमा एक असंक्रामक एलर्जिक श्वसन विकार है जिसमें श्वासनलिकाओं में अत्यधिक श्लेष्मा और संकुचन से साँस छोड़ने में कठिनाई होती है; ब्रॉन्कोडायलेटर इनहेलर से इसमें राहत मिलती है।',
    'Asthma is a non-communicable chronic inflammatory airway disease marked by bronchospasm, mucus hypersecretion, and wheezing, relieved by bronchodilators.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'मोतियाबिंद (Cataract)',
    'वृद्धावस्था में आँख के प्राकृतिक लेंस का अपारदर्शी या धुँधला हो जाना, जिससे दृष्टि कम हो जाती है, क्या कहलाता है?',
    'The clouding or opacity of the eye’s natural crystalline lens with advancing age, impairing vision, is called what?',
    ['मोतियाबिंद (Cataract)', 'Cataract'],
    [
      ['ग्लूकोमा (काला मोतिया)', 'Glaucoma'],
      ['निकट दृष्टि दोष (Myopia)', 'Myopia'],
      ['अबिंदुकता (Astigmatism)', 'Astigmatism'],
    ],
    'मोतियाबिंद में क्रिस्टलीय लेंस के प्रोटीन धुँधले हो जाते हैं; शल्य चिकित्सा द्वारा इसे निकालकर कृत्रिम इंट्राऑक्यूलर लेंस (IOL) लगाया जाता है। (ग्लूकोमा नेत्र दाब बढ़ने से होता है)।',
    'Cataract occurs when lens proteins denature and become cloudy, corrected surgically via intraocular lens (IOL) implantation (Glaucoma involves elevated intraocular pressure).',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'स्वच्छ भारत एवं खुले में शौच मुक्त',
    'स्वच्छ शौचालयों के उपयोग और सुरक्षित मल-निकासी से किन संक्रामक रोगों की श्रृंखला को प्रभावी ढंग से तोड़ा जा सकता है?',
    'Proper sanitation, safe excreta disposal, and handwashing with soap effectively break the transmission chain of which diseases?',
    ['हैजा, टाइफाइड, पोलियो, हेपेटाइटिस A और कृमि संक्रमण', 'Cholera, Typhoid, Polio, Hepatitis A, and Worm infestations'],
    [
      ['मलेरिया, डेंगू और फाइलेरिया', 'Malaria, Dengue, and Filariasis'],
      ['हीमोफीलिया, वर्णांधता और डाउन सिंड्रोम', 'Haemophilia, Colour blindness, and Down syndrome'],
      ['मधुमेह, उच्च रक्तचाप और मोतियाबिंद', 'Diabetes, Hypertension, and Cataract'],
    ],
    'फेकल-ओरल मार्ग से फैलने वाले सभी जलजनित और आंत्र रोग (हैजा, टाइफाइड, पोलियो, हेपेटाइटिस A/E, एस्केरिएसिस) स्वच्छ शौचालय और हाथ धोने से रोके जा सकते हैं।',
    'Faecal-oral diseases such as cholera, typhoid, polio, hepatitis A/E, and intestinal helminths are drastically reduced through safe sanitation and hand hygiene.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'प्राथमिक चिकित्सा (First Aid)',
    'किसी व्यक्ति के हाथ में हल्का जल जाने (Minor Burn) पर तुरंत किया जाने वाला सबसे सही प्राथमिक उपचार क्या है?',
    'What is the most appropriate immediate first aid for a minor thermal burn on the hand?',
    ['जले हुए स्थान पर 15–20 मिनट तक ठंडा/सामान्य बहता पानी डालना', 'Cooling the burnt area under cool/running tap water for 15–20 minutes'],
    [
      ['जले हुए भाग पर तुरंत बर्फ रगड़ना या टूथपेस्ट लगाना', 'Rubbing ice or applying toothpaste immediately'],
      ['बने हुए फफोले को सुई से फोड़ देना', 'Puncturing any blister with a needle'],
      ['जले भाग पर गरम सरसों का तेल या घी लगाना', 'Applying hot mustard oil or ghee'],
    ],
    'बहता ठंडा (न कि बर्फ जैसा जमा हुआ) पानी त्वचा की ऊष्मा कम कर ऊतक क्षति को रोकता है; टूथपेस्ट, स्याही, तेल या फफोले फोड़ने से संक्रमण बढ़ता है।',
    'Cool (not ice-cold) running water dissipates heat and limits tissue damage; toothpaste, oils, ice, or popping blisters increase infection risk.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'ORS घोल का संघटन',
    'निर्जलीकरण (दस्त व उल्टी) के उपचार में प्रयुक्त WHO मानक कम-परासरणी ORS घोल में मुख्य अवयव क्या होते हैं?',
    'What are the key ingredients of the WHO low-osmolarity Oral Rehydration Solution (ORS) used to treat dehydration from diarrhoea?',
    ['सोडियम क्लोराइड, ग्लूकोज, पोटैशियम क्लोराइड और ट्राइसोडियम सिट्रेट (स्वच्छ जल में)', 'Sodium chloride, Glucose, Potassium chloride, and Trisodium citrate in clean water'],
    [
      ['केवल कैल्शियम कार्बोनेट और स्टार्च', 'Only calcium carbonate and starch'],
      ['मैग्नीशियम हाइड्रॉक्साइड और यूरिया', 'Magnesium hydroxide and urea'],
      ['केवल नींबू का रस और ब्लीचिंग पाउडर', 'Only lemon juice and bleaching powder'],
    ],
    'ORS में ग्लूकोज और सोडियम का अनुपात आंत में सोडियम-ग्लूकोज सह-परिवहन (SGLT1) को सक्रिय करता है जिससे शरीर में जल का तीव्र अवशोषण होता है। डॉ. दिलीप महालनाबिस ने ORS के उपयोग को विश्वभर में लोकप्रिय बनाया।',
    'Glucose facilitates Na⁺ and water absorption in the small intestine via SGLT1 co-transport; Dr. Dilip Mahalanabis famously demonstrated ORS’s life-saving impact.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'विश्व स्वास्थ्य दिवस व अन्य दिवस',
    'विश्व स्वास्थ्य दिवस (World Health Day) और विश्व तपेदिक दिवस (World TB Day) प्रतिवर्ष किन तिथियों को मनाए जाते हैं?',
    'On which dates are World Health Day and World Tuberculosis (TB) Day observed annually?',
    ['7 अप्रैल (स्वास्थ्य दिवस) तथा 24 मार्च (TB दिवस)', '7 April (Health Day) and 24 March (TB Day)'],
    [
      ['1 दिसंबर (स्वास्थ्य दिवस) तथा 5 जून (TB दिवस)', '1 December and 5 June'],
      ['14 नवंबर (स्वास्थ्य दिवस) तथा 8 मार्च (TB दिवस)', '14 November and 8 March'],
      ['22 अप्रैल (स्वास्थ्य दिवस) तथा 16 सितंबर (TB दिवस)', '22 April and 16 September'],
    ],
    '7 अप्रैल 1948 को WHO की स्थापना के उपलक्ष्य में 7 अप्रैल को विश्व स्वास्थ्य दिवस और 24 मार्च 1882 को रॉबर्ट कोच द्वारा TB जीवाणु की खोज की स्मृति में 24 मार्च को विश्व TB दिवस मनाया जाता है।',
    'World Health Day marks WHO’s founding on 7 April 1948, while World TB Day commemorates Robert Koch’s discovery of M. tuberculosis on 24 March 1882.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'स्वाईन फ्लू व बर्ड फ्लू',
    'स्वाईन फ्लू (Swine Flu) तथा बर्ड फ्लू (Avian Influenza) किन इन्फ्लुएंजा-A उपप्रकार के विषाणुओं से होते हैं?',
    'Swine Flu and Bird Flu (Avian Influenza) are caused by which Influenza-A virus subtypes respectively?',
    ['H1N1 (स्वाईन फ्लू) तथा H5N1 (बर्ड फ्लू)', 'H1N1 (Swine Flu) and H5N1 (Bird Flu)'],
    [
      ['H5N1 (स्वाईन फ्लू) तथा H1N1 (बर्ड फ्लू)', 'H5N1 (Swine Flu) and H1N1 (Bird Flu)'],
      ['H2N2 तथा HIV-1', 'H2N2 and HIV-1'],
      ['SARS-CoV-1 तथा Zika', 'SARS-CoV-1 and Zika'],
    ],
    'इन्फ्लुएंजा-A विषाणु की सतह पर हीमएग्लूटिनिन (H) और न्यूरामिनिडेज (N) प्रोटीन होते हैं; H1N1 से स्वाईन फ्लू तथा H5N1 से बर्ड फ्लू होता है (उपचार में ओसेल्टामिविर/टैमीफ्लू प्रयुक्त होती है)।',
    'Influenza-A subtypes are named by Haemagglutinin (H) and Neuraminidase (N) proteins: H1N1 causes swine flu and H5N1 causes bird flu.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'एलिसा व पीसीआर',
    'रोग निदान में प्रयुक्त ELISA (Enzyme-Linked Immunosorbent Assay) परीक्षण मुख्य रूप से किस जैविक सिद्धांत पर आधारित है?',
    'The diagnostic test ELISA (Enzyme-Linked Immunosorbent Assay) is based primarily on which biological principle?',
    ['प्रतिजन-प्रतिरक्षी (Antigen-Antibody) की विशिष्ट पारस्परिक क्रिया', 'Specific Antigen–Antibody interaction'],
    [
      ['रक्त कणिकाओं का अपकेंद्रण', 'Centrifugation of RBCs'],
      ['यूरिया का जल-अपघटन', 'Hydrolysis of urea'],
      ['कोशिका भित्ति का विघटन', 'Lysis of cell wall'],
    ],
    'ELISA में विशिष्ट प्रतिजन और प्रतिरक्षी के बीच बंधन का पता एंजाइम से जुड़े रंग परिवर्तन द्वारा लगाया जाता है, जबकि PCR में रोगजनक के DNA/RNA की करोड़ों प्रतियाँ बनाई जाती हैं।',
    'ELISA detects specific antigen–antibody binding via an enzyme-linked colorimetric reaction, whereas PCR amplifies target pathogen DNA/RNA.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'पाश्चुरीकरण (Pasteurization)',
    'दूध को खराब होने से बचाने और उसके रोगजनक जीवाणुओं को नष्ट करने की "पाश्चुरीकरण" प्रक्रिया में क्या किया जाता है?',
    'What is done in the "Pasteurization" process (invented by Louis Pasteur) to make milk safe from pathogens and extend shelf life?',
    ['दूध को लगभग 72°C पर 15 सेकंड (या 63°C पर 30 मिनट) गर्म कर तुरंत ठंडा करना', 'Heating milk to ~72°C for 15 seconds (HTST) or 63°C for 30 minutes (LTLT), then rapidly cooling'],
    [
      ['दूध को 150°C पर 2 घंटे उबालकर भाप में बदलना', 'Boiling milk at 150°C for 2 hours'],
      ['दूध में ब्लीचिंग पाउडर और नमक मिलाना', 'Adding bleaching powder and salt to milk'],
      ['दूध को -20°C पर जमाकर पीसना', 'Freezing milk at -20°C and grinding'],
    ],
    'लुई पाश्चर द्वारा विकसित पाश्चुरीकरण में नियंत्रित तापमान पर गर्म कर शीघ्र ठंडा किया जाता है, जिससे TB, ब्रुसेला आदि के रोगाणु मर जाते हैं और दूध के पोषक तत्व सुरक्षित रहते हैं।',
    'Pasteurization heats milk to a specific temperature (72°C for 15 s in HTST) followed by rapid cooling, killing pathogens while preserving milk flavour and nutrients.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'भारत का कालाजार लक्ष्य',
    'भारत में राष्ट्रीय वेक्टर जनित रोग नियंत्रण कार्यक्रम के अंतर्गत मुख्य रूप से किन चार राज्यों (बिहार, झारखंड, प. बंगाल, उत्तर प्रदेश) में कालाजार उन्मूलन अभियान चलाया गया और कब 10,000 की आबादी पर 1 से कम मामले का लक्ष्य प्राप्त हुआ?',
    'Under India’s vector-borne disease control efforts, Kala-azar elimination (<1 case per 10,000 population at block level) primarily focused on four endemic states; which are they?',
    ['बिहार, झारखंड, पश्चिम बंगाल और उत्तर प्रदेश', 'Bihar, Jharkhand, West Bengal, and Uttar Pradesh'],
    [
      ['केरल, तमिलनाडु, कर्नाटक और गोवा', 'Kerala, Tamil Nadu, Karnataka, and Goa'],
      ['राजस्थान, गुजरात, पंजाब और हरियाणा', 'Rajasthan, Gujarat, Punjab, and Haryana'],
      ['असम, मेघालय, नागालैंड और मिजोरम', 'Assam, Meghalaya, Nagaland, and Mizoram'],
    ],
    'भारत के बिहार, झारखंड, पश्चिम बंगाल और पूर्वी उत्तर प्रदेश में कालाजार स्थानिक रहा है; हालिया 2023–2024 के आँकड़ों के अनुसार भारत के सभी 633 स्थानिक ब्लॉकों ने उन्मूलन सीमा (<1 मामला प्रति 10,000) हासिल की है।',
    'Kala-azar in India has been endemic across 54 districts in Bihar, Jharkhand, West Bengal, and Uttar Pradesh; by late 2023–2024, all 633 endemic blocks achieved the elimination threshold (<1 case/10,000).',
    'HARD',
    { referenceDate: '2024' }
  ),
  q(
    'मानव रोग एवं टीके',
    'पल्स पोलियो व विटामिन A पूरकता',
    'यूनिवर्सल इम्यूनाइजेशन प्रोग्राम (UIP) के अंतर्गत बच्चों को खसरा (Measles) के टीके के साथ किस विटामिन की खुराक दी जाती है जिससे मृत्यु दर व अंधता कम हो?',
    'Under India’s Universal Immunization Programme (UIP), which vitamin supplement is co-administered with the Measles vaccine to reduce child blindness and mortality?',
    ['विटामिन A का घोल', 'Vitamin A solution'],
    [
      ['विटामिन E कैप्सूल', 'Vitamin E capsules'],
      ['विटामिन B12 इंजेक्शन', 'Vitamin B12 injection'],
      ['विटामिन K ड्रॉप्स', 'Vitamin K drops'],
    ],
    '9 माह पर खसरा-रूबेला (MR) के पहले टीके के साथ विटामिन A की प्रथम खुराक (1 लाख IU) और 5 वर्ष तक हर 6 माह पर (2 लाख IU) दी जाती है।',
    'The first dose of Vitamin A (100,000 IU) is given at 9 months with the first MR vaccine dose, followed by biannual doses (200,000 IU) up to 5 years of age.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'एंटीजन और एंटीबॉडी',
    'मानव शरीर की प्रतिरक्षा प्रणाली में जब कोई बाह्य रोगाणु या प्रोटीन (Antigen) प्रवेश करता है, तो शरीर किस प्रकार की कोशिकाओं की सहायता से उससे लड़ने के लिए एंटीबॉडी बनाता है?',
    'When a foreign antigen enters the human body, which immune cells produce specific antibodies (immunoglobulins) to neutralize it?',
    ['B-लिम्फोसाइट्स (प्लाज्मा कोशिकाओं में विभेदित होकर)', 'B-lymphocytes (differentiating into plasma cells)'],
    [
      ['लाल रक्त कणिकाएँ (RBC)', 'Red blood cells (RBCs)'],
      ['थ्रॉम्बोसाइट्स (प्लेटलेट्स)', 'Thrombocytes (Platelets)'],
      ['ऑस्टियोक्लास्ट', 'Osteoclasts'],
    ],
    'B-लिम्फोसाइट्स सक्रिय होकर प्लाज्मा कोशिकाओं की सेना बनाती हैं जो Y-आकार के प्रोटीन (एंटीबॉडी / Ig) बनाती हैं; स्मृति B-कोशिकाएँ भविष्य के संक्रमण में त्वरित प्रतिक्रिया देती हैं।',
    'Activated B-lymphocytes differentiate into antibody-secreting plasma cells producing Y-shaped immunoglobulins, and also form memory B-cells for rapid secondary responses.',
    'MEDIUM'
  ),
  q(
    'मानव रोग एवं टीके',
    'हृदयाघात व स्ट्रोक में अंतर',
    'हृदयाघात (Heart Attack) और मस्तिष्क आघात (Brain Stroke) के बीच मुख्य कारणगत अंतर क्या है?',
    'What is the key difference in organ blood supply interruption between a Heart Attack and a Brain Stroke?',
    ['हृदयाघात में हृदय की कोरोनरी धमनी में रक्त प्रवाह रुकता है, जबकि स्ट्रोक में मस्तिष्क की रक्त वाहिका में अवरोध या फटना होता है', 'Heart attack involves blocked blood flow in a coronary artery to the heart muscle, whereas stroke involves blocked or ruptured blood vessels in the brain'],
    [
      ['हृदयाघात केवल फेफड़ों में होता है और स्ट्रोक वृक्क में', 'Heart attack occurs in lungs and stroke in kidneys'],
      ['हृदयाघात जीवाणु से होता है और स्ट्रोक विषाणु से', 'Heart attack is bacterial and stroke is viral'],
      ['दोनों केवल यकृत की शिरा के बंद होने से होते हैं', 'Both occur due to hepatic vein blockage'],
    ],
    'कोरोनरी धमनी में थक्का जमने से हृदय पेशी को ऑक्सीजन न मिलना मायोकार्डियल इन्फार्क्शन (हार्ट अटैक) है, जबकि मस्तिष्क में इस्केमिक या हेमरेजिक अवरोध से स्ट्रोक होता है।',
    'Myocardial infarction (heart attack) results from blocked coronary blood flow to heart tissue, whereas stroke results from interrupted or ruptured cerebral blood supply.',
    'EASY'
  ),
  q(
    'मानव रोग एवं टीके',
    'अधिग्रहित और जन्मजात रोग',
    'निम्नलिखित में से कौन-सा एक "असंक्रामक जीवनशैली रोग" (Non-Communicable Lifestyle Disease) है जो एक व्यक्ति से दूसरे व्यक्ति में नहीं फैलता?',
    'Which of the following is a Non-Communicable Lifestyle Disease that does not spread from person to person?',
    ['टाइप-2 मधुमेह (Diabetes Mellitus Type-2) एवं उच्च रक्तचाप', 'Type-2 Diabetes Mellitus and Hypertension'],
    [
      ['क्षय रोग (Tuberculosis)', 'Tuberculosis'],
      ['खसरा (Measles)', 'Measles'],
      ['हैजा (Cholera)', 'Cholera'],
    ],
    'टाइप-2 मधुमेह, उच्च रक्तचाप, मोटापा व हृदय रोग असंतुलित आहार, शारीरिक निष्क्रियता, तनाव व आनुवंशिकता से जुड़े असंक्रामक रोग (NCDs) हैं।',
    'Type-2 diabetes, hypertension, and cardiovascular disorders are non-communicable lifestyle diseases linked to diet, sedentary habits, stress, and genetics.',
    'EASY'
  ),
];
