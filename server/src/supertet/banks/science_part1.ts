import { makeQ, RawBankQuestion } from './shared';

const q = makeQ('Science');

export const SCIENCE_BANK_PART1: RawBankQuestion[] = [
  // =========================================================================
  // 1. दैनिक जीवन में विज्ञान (वैज्ञानिक आविष्कार, यंत्र, SI मात्रक, मापन) — 80 Qs
  // =========================================================================
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'लंबाई का SI मूल मात्रक क्या है?',
    'What is the SI base unit of length?',
    ['मीटर', 'Metre'],
    [
      ['सेंटीमीटर', 'Centimetre'],
      ['किलोमीटर', 'Kilometre'],
      ['फुट', 'Foot'],
    ],
    'अंतर्राष्ट्रीय मात्रक प्रणाली (SI) में लंबाई का मूल मात्रक मीटर (m) है।',
    'In the International System of Units (SI), the base unit of length is the metre (m).',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'द्रव्यमान का SI मूल मात्रक कौन-सा है?',
    'Which is the SI base unit of mass?',
    ['किलोग्राम', 'Kilogram'],
    [
      ['ग्राम', 'Gram'],
      ['क्विंटल', 'Quintal'],
      ['पाउंड', 'Pound'],
    ],
    'SI प्रणाली में द्रव्यमान का मूल मात्रक किलोग्राम (kg) निर्धारित किया गया है।',
    'The SI base unit of mass is the kilogram (kg).',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'ज्योति तीव्रता (Luminous intensity) का SI मात्रक क्या है?',
    'What is the SI unit of luminous intensity?',
    ['कैंडेला', 'Candela'],
    [
      ['ल्यूमेन', 'Lumen'],
      ['लक्स', 'Lux'],
      ['मोल', 'Mole'],
    ],
    'सात SI मूल राशियों में ज्योति तीव्रता का मात्रक कैंडेला (cd) है, जबकि ल्यूमेन ज्योति फ्लक्स का मात्रक है।',
    'Among the seven SI base quantities, luminous intensity is measured in candela (cd), whereas lumen measures luminous flux.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'पदार्थ की मात्रा (Amount of substance) का SI मात्रक क्या होता है?',
    'What is the SI unit of amount of substance?',
    ['मोल', 'Mole'],
    [
      ['केल्विन', 'Kelvin'],
      ['किलोग्राम', 'Kilogram'],
      ['एम्पियर', 'Ampere'],
    ],
    'रसायन और भौतिकी में पदार्थ की मात्रा का SI मूल मात्रक मोल (mol) है। 1 मोल में 6.022 × 10²³ कण होते हैं।',
    'The SI base unit for amount of substance is the mole (mol). One mole contains 6.022 × 10²³ entities.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'समतल कोण (Plane angle) का SI पूरक मात्रक क्या है?',
    'What is the SI supplementary unit of plane angle?',
    ['रेडियन', 'Radian'],
    [
      ['स्टेरेडियन', 'Steradian'],
      ['डिग्री', 'Degree'],
      ['मिनट', 'Minute'],
    ],
    'समतल कोण का SI मात्रक रेडियन (rad) है, जबकि घन कोण (Solid angle) का मात्रक स्टेरेडियन (sr) है।',
    'The SI unit of plane angle is radian (rad), while solid angle is measured in steradian (sr).',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'घन कोण (Solid angle) को किस SI मात्रक में मापा जाता है?',
    'In which SI unit is a solid angle measured?',
    ['स्टेरेडियन', 'Steradian'],
    [
      ['रेडियन', 'Radian'],
      ['लक्स', 'Lux'],
      ['हर्ट्ज़', 'Hertz'],
    ],
    'त्रि-आयामी घन कोण का SI मात्रक स्टेरेडियन (sr) होता है।',
    'A three-dimensional solid angle has the SI unit steradian (sr).',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'प्रकाश वर्ष (Light year) किस भौतिक राशि का मात्रक है?',
    'Light year is a unit of which physical quantity?',
    ['दूरी', 'Distance'],
    [
      ['समय', 'Time'],
      ['प्रकाश की तीव्रता', 'Intensity of light'],
      ['चाल', 'Speed'],
    ],
    'निर्वात में प्रकाश द्वारा एक वर्ष में तय की गई दूरी को एक प्रकाश वर्ष कहते हैं; अतः यह दूरी का मात्रक है।',
    'A light year is the distance travelled by light in vacuum in one year; hence it is a unit of distance.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'खगोलीय दूरी मापने का सबसे बड़ा मात्रक कौन-सा है?',
    'Which is the largest unit for measuring astronomical distance?',
    ['पारसेक', 'Parsec'],
    [
      ['प्रकाश वर्ष', 'Light year'],
      ['खगोलीय इकाई', 'Astronomical unit'],
      ['नॉटिकल मील', 'Nautical mile'],
    ],
    'पारसेक दूरी का सबसे बड़ा व्यावहारिक मात्रक है। 1 पारसेक लगभग 3.26 प्रकाश वर्ष के बराबर होता है।',
    'Parsec is the largest practical unit of distance. 1 parsec equals approximately 3.26 light years.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    '1 नैनोमीटर (nm) कितने मीटर के बराबर होता है?',
    '1 nanometre (nm) is equal to how many metres?',
    ['10⁻⁹ मीटर', '10⁻⁹ m'],
    [
      ['10⁻⁶ मीटर', '10⁻⁶ m'],
      ['10⁻¹⁰ मीटर', '10⁻¹⁰ m'],
      ['10⁻¹² मीटर', '10⁻¹² m'],
    ],
    'SI उपसर्ग "नैनो" का मान 10⁻⁹ होता है, इसलिए 1 nm = 10⁻⁹ मीटर (या 10⁻⁷ सेमी) होता है।',
    'The SI prefix "nano" represents 10⁻⁹, so 1 nm = 10⁻⁹ metre.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'परमाणु त्रिज्या या प्रकाश की तरंगदैर्घ्य मापने के लिए प्रयुक्त "एंग्स्ट्रॉम" (Å) किसके बराबर होता है?',
    'One Angstrom (Å), used to measure atomic radii or wavelengths of light, is equal to:',
    ['10⁻¹⁰ मीटर', '10⁻¹⁰ m'],
    [
      ['10⁻⁸ मीटर', '10⁻⁸ m'],
      ['10⁻⁹ मीटर', '10⁻⁹ m'],
      ['10⁻¹⁵ मीटर', '10⁻¹⁵ m'],
    ],
    '1 एंग्स्ट्रॉम (1 Å) = 10⁻¹⁰ मीटर होता है, जो 0.1 नैनोमीटर के बराबर है।',
    '1 Angstrom (1 Å) = 10⁻¹⁰ metre, which equals 0.1 nanometre.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'नाभिक की त्रिज्या मापने के लिए किस मात्रक का उपयोग किया जाता है?',
    'Which unit is used to measure the radius of an atomic nucleus?',
    ['फर्मी (फेम्टोमीटर)', 'Fermi (femtometre)'],
    [
      ['एंग्स्ट्रॉम', 'Angstrom'],
      ['माइक्रॉन', 'Micron'],
      ['नैनोमीटर', 'Nanometre'],
    ],
    'नाभिकीय आकार अत्यंत सूक्ष्म होता है, जिसे फर्मी (1 fm = 10⁻¹⁵ मीटर) में मापा जाता है।',
    'Nuclear dimensions are extremely small and are measured in fermi (1 fm = 10⁻¹⁵ m).',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    '1 अश्वशक्ति (Horsepower) कितने वाट के बराबर होती है?',
    '1 Horsepower (HP) is equal to how many watts?',
    ['746 वाट', '746 W'],
    [
      ['740 वाट', '740 W'],
      ['756 वाट', '756 W'],
      ['1000 वाट', '1000 W'],
    ],
    'मोटर और इंजनों की शक्ति मापने की व्यावहारिक इकाई अश्वशक्ति है। 1 HP = 746 वाट होता है।',
    'Horsepower is a practical unit of power for motors and engines. 1 HP = 746 watts.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'ओज़ोन परत की मोटाई किस मात्रक में मापी जाती है?',
    'In which unit is the thickness of the ozone layer measured?',
    ['डॉब्सन इकाई', 'Dobson unit'],
    [
      ['डेसिबल', 'Decibel'],
      ['पास्कल', 'Pascal'],
      ['कैलोरी', 'Calorie'],
    ],
    'वायुमंडलीय ओज़ोन स्तंभ की मोटाई को डॉब्सन इकाई (DU) में व्यक्त किया जाता है।',
    'Atmospheric ozone column thickness is measured in Dobson Units (DU).',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'समुद्री जहाज़ों की गति मापने की इकाई "नॉट" (Knot) का अर्थ क्या है?',
    'What does the unit "Knot", used to measure the speed of ships, mean?',
    ['एक नॉटिकल मील प्रति घंटा', 'One nautical mile per hour'],
    [
      ['एक किलोमीटर प्रति घंटा', 'One kilometre per hour'],
      ['एक मील प्रति मिनट', 'One mile per minute'],
      ['एक फैदम प्रति सेकंड', 'One fathom per second'],
    ],
    'नौसंचालन में गति को नॉट में मापा जाता है। 1 नॉट = 1 नॉटिकल मील प्रति घंटा (लगभग 1.852 km/h) होता है।',
    'In navigation, speed is measured in knots. 1 knot = 1 nautical mile per hour (about 1.852 km/h).',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'समुद्र की गहराई मापने के लिए पारंपरिक रूप से किस मात्रक का प्रयोग होता है?',
    'Which traditional unit is used to measure the depth of the sea?',
    ['फैदम', 'Fathom'],
    [
      ['नॉट', 'Knot'],
      ['बैरल', 'Barrel'],
      ['क्यूसेक', 'Cusec'],
    ],
    'समुद्र की गहराई मापने की इकाई फैदम है (1 फैदम = 6 फुट या लगभग 1.828 मीटर) और यंत्र फैदोमीटर कहलाता है।',
    'Depth of sea is measured in fathoms (1 fathom = 6 feet or ~1.828 m) using a fathometer.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'नदियों या नहरों में जल के प्रवाह की दर को मापने का मात्रक क्या है?',
    'What is the unit used to measure the rate of flow of water in rivers or canals?',
    ['क्यूसेक', 'Cusec'],
    [
      ['पास्कल', 'Pascal'],
      ['बार', 'Bar'],
      ['जूल', 'Joule'],
    ],
    'क्यूसेक का अर्थ क्यूबिक फुट प्रति सेकंड (ft³/s) है, जो जल प्रवाह दर को दर्शाता है।',
    'Cusec stands for cubic feet per second (ft³/s), measuring water discharge rate.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'तेल के व्यापार में प्रयुक्त 1 बैरल लगभग कितने लीटर के बराबर होता है?',
    '1 barrel of crude oil used in trade is approximately equal to how many litres?',
    ['159 लीटर', '159 litres'],
    [
      ['100 लीटर', '100 litres'],
      ['120 लीटर', '120 litres'],
      ['210 लीटर', '210 litres'],
    ],
    'कच्चे तेल के अंतर्राष्ट्रीय व्यापार में 1 बैरल लगभग 158.987 लीटर (लगभग 159 लीटर) के बराबर होता है।',
    'In international crude oil trade, 1 barrel equals approximately 158.987 litres (about 159 litres).',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'निम्नलिखित में से कौन-सी एक अदिश राशि (Scalar quantity) है?',
    'Which of the following is a scalar quantity?',
    ['दाब', 'Pressure'],
    [
      ['वेग', 'Velocity'],
      ['बल', 'Force'],
      ['संवेग', 'Momentum'],
    ],
    'दाब में केवल परिमाण होता है, निश्चित दिशा नहीं होती (यह सभी दिशाओं में समान लगता है), इसलिए दाब अदिश राशि है; जबकि वेग, बल और संवेग सदिश राशियाँ हैं।',
    'Pressure has only magnitude and no fixed direction, making it a scalar quantity, whereas velocity, force, and momentum are vector quantities.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'निम्नलिखित में से कौन-सी एक सदिश राशि (Vector quantity) है?',
    'Which of the following is a vector quantity?',
    ['त्वरण', 'Acceleration'],
    [
      ['कार्य', 'Work'],
      ['ऊर्जा', 'Energy'],
      ['तापमान', 'Temperature'],
    ],
    'त्वरण में परिमाण और दिशा दोनों होते हैं और यह सदिश योग के नियम का पालन करता है, जबकि कार्य, ऊर्जा और तापमान अदिश राशियाँ हैं।',
    'Acceleration has both magnitude and direction and obeys vector addition, whereas work, energy, and temperature are scalar quantities.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'आवृत्ति (Frequency) का SI मात्रक क्या है?',
    'What is the SI unit of frequency?',
    ['हर्ट्ज़', 'Hertz'],
    [
      ['डेसिबल', 'Decibel'],
      ['वेबर', 'Weber'],
      ['टेस्ला', 'Tesla'],
    ],
    'प्रति सेकंड होने वाले दोलनों की संख्या को आवृत्ति कहते हैं और इसका SI मात्रक हर्ट्ज़ (Hz) या s⁻¹ है।',
    'Frequency is the number of oscillations per second, and its SI unit is Hertz (Hz) or s⁻¹.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'वैज्ञानिक यंत्र "एनीमोमीटर" (Anemometer) का उपयोग किसके मापन में किया जाता है?',
    'What does the scientific instrument "Anemometer" measure?',
    ['वायु की गति और बल', 'Speed and force of wind'],
    [
      ['वायुमंडलीय दाब', 'Atmospheric pressure'],
      ['आपेक्षिक आर्द्रता', 'Relative humidity'],
      ['वर्षा की मात्रा', 'Amount of rainfall'],
    ],
    'एनीमोमीटर द्वारा हवा की गति (पवन वेग) को मापा जाता है।',
    'An anemometer is used to measure the speed (velocity) of wind.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'वायुमंडलीय दाब मापने के लिए किस यंत्र का उपयोग किया जाता है?',
    'Which instrument is used to measure atmospheric pressure?',
    ['बैरोमीटर', 'Barometer'],
    [
      ['हाइग्रोमीटर', 'Hygrometer'],
      ['मैनोमीटर', 'Manometer'],
      ['अल्टीमीटर', 'Altimeter'],
    ],
    'बैरोमीटर का आविष्कार टॉरिसेली ने किया था और इससे वायुमंडलीय दाब मापा जाता है। इसके पारे का अचानक गिरना आँधी-तूफान का संकेत देता है।',
    'A barometer, invented by Torricelli, measures atmospheric pressure. A sudden drop in mercury level indicates an approaching storm.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'वायु की आपेक्षिक आर्द्रता (Relative humidity) किस यंत्र से मापी जाती है?',
    'Which instrument measures the relative humidity of air?',
    ['हाइग्रोमीटर', 'Hygrometer'],
    [
      ['हाइड्रोमीटर', 'Hydrometer'],
      ['बैरोमीटर', 'Barometer'],
      ['पायरोमीटर', 'Pyrometer'],
    ],
    'हाइग्रोमीटर वायुमंडल में उपस्थित जलवाष्प या आर्द्रता मापता है, जबकि हाइड्रोमीटर द्रवों का आपेक्षिक घनत्व मापता है।',
    'A hygrometer measures atmospheric humidity, whereas a hydrometer measures the specific gravity of liquids.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'दूध की शुद्धता (घनत्व) की जाँच करने के लिए किस यंत्र का प्रयोग किया जाता है?',
    'Which instrument is used to test the purity (density) of milk?',
    ['लैक्टोमीटर', 'Lactometer'],
    [
      ['सैक्रोमीटर', 'Saccharometer'],
      ['ऑडोमीटर', 'Odometer'],
      ['विस्कोमीटर', 'Viscometer'],
    ],
    'लैक्टोमीटर आर्किमिडीज के सिद्धांत पर कार्य करता है और दूध के घनत्व के आधार पर उसमें पानी की मिलावट की जाँच करता है।',
    'A lactometer works on Archimedes principle and tests milk purity by measuring its density.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'बहुत उच्च तापमान (जैसे भट्ठी या सूर्य का ताप) मापने के लिए किस यंत्र का उपयोग किया जाता है?',
    'Which instrument is used to measure very high temperatures (such as furnaces or the Sun)?',
    ['पायरोमीटर', 'Pyrometer'],
    [
      ['थर्मोस्टेट', 'Thermostat'],
      ['क्रायोमीटर', 'Cryometer'],
      ['कैलोरीमीटर', 'Calorimeter'],
    ],
    'पायरोमीटर (विकिरण तापमापी) बिना संपर्क के 800°C से अधिक के उच्च तापमान को तापीय विकिरण के आधार पर मापता है।',
    'A pyrometer (radiation thermometer) measures high temperatures above 800°C from a distance based on thermal radiation.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'हृदय गति और धड़कन सुनने के लिए डॉक्टर किस यंत्र का उपयोग करते हैं?',
    'Which instrument do doctors use to listen to heartbeat sounds?',
    ['स्टेथोस्कोप', 'Stethoscope'],
    [
      ['स्फिग्मोमैनोमीटर', 'Sphygmomanometer'],
      ['ईसीजी (ECG)', 'ECG'],
      ['एंडोस्कोप', 'Endoscope'],
    ],
    'स्टेथोस्कोप ध्वनि के बहु-परावर्तन (Multiple reflection) के सिद्धांत पर कार्य करता है और इसका आविष्कार रेने लेनेक ने किया था।',
    'A stethoscope works on the principle of multiple reflection of sound and was invented by Rene Laennec.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'मानव शरीर का रक्तचाप (Blood pressure) मापने वाला यंत्र कौन-सा है?',
    'Which instrument measures human blood pressure?',
    ['स्फिग्मोमैनोमीटर', 'Sphygmomanometer'],
    [
      ['स्टेथोस्कोप', 'Stethoscope'],
      ['हीमोसाइटोमीटर', 'Haemocytometer'],
      ['स्पाइरोमीटर', 'Spirometer'],
    ],
    'स्फिग्मोमैनोमीटर से रक्तचाप मापा जाता है। स्वस्थ वयस्क का सामान्य रक्तचाप 120/80 mmHg होता है।',
    'Blood pressure is measured with a sphygmomanometer. Normal adult blood pressure is 120/80 mmHg.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'पौधों की वृद्धि को सूक्ष्म रूप से मापने वाले यंत्र "क्रेस्कोग्राफ" (Crescograph) का आविष्कार किसने किया था?',
    'Who invented the "Crescograph", an instrument for measuring plant growth?',
    ['जगदीश चंद्र बोस', 'Jagadish Chandra Bose'],
    [
      ['सी.वी. रमन', 'C.V. Raman'],
      ['हरगोबिंद खुराना', 'Hargobind Khorana'],
      ['प्रफुल्ल चंद्र राय', 'Prafulla Chandra Ray'],
    ],
    'भारतीय वैज्ञानिक सर जगदीश चंद्र बोस ने क्रेस्कोग्राफ का आविष्कार किया और सिद्ध किया कि पौधों में भी संवेदनशीलता और जीवन होता है।',
    'Indian scientist Sir Jagadish Chandra Bose invented the crescograph and demonstrated that plants have life and sensitivity.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'भूकंप की तीव्रता और तरंगों को किस यंत्र पर रिकॉर्ड किया जाता है?',
    'On which instrument are earthquake waves and intensity recorded?',
    ['सीस्मोग्राफ', 'Seismograph'],
    [
      ['बैरोमीटर', 'Barometer'],
      ['गैल्वेनोमीटर', 'Galvanometer'],
      ['कार्डियोग्राफ', 'Cardiograph'],
    ],
    'सीस्मोग्राफ (भूकंपलेखी) भूकंपीय तरंगों को रिकॉर्ड करता है, जबकि तीव्रता के परिमाण को रिक्टर पैमाने पर दर्शाया जाता है।',
    'A seismograph records seismic waves, while earthquake magnitude is expressed on the Richter scale.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'समुद्र में डूबी हुई वस्तुओं का पता लगाने के लिए किस तकनीक का उपयोग किया जाता है?',
    'Which technology is used to detect objects submerged under the sea?',
    ['सोनार (SONAR)', 'SONAR'],
    [
      ['रडार (RADAR)', 'RADAR'],
      ['लेजर (LASER)', 'LASER'],
      ['मेसर (MASER)', 'MASER'],
    ],
    'सोनार (Sound Navigation and Ranging) में पराश्रव्य ध्वनि तरंगों (Ultrasonic waves) का उपयोग करके समुद्र की गहराई और डूबी वस्तुओं का पता लगाया जाता है।',
    'SONAR (Sound Navigation and Ranging) uses ultrasonic sound waves to measure sea depth and locate underwater objects.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'रडार (RADAR) में वस्तुओं की स्थिति और दूरी का पता लगाने के लिए किन तरंगों का उपयोग होता है?',
    'Which waves are used in RADAR to detect the position and distance of objects?',
    ['रेडियो एवं सूक्ष्म तरंगें', 'Radio and microwaves'],
    [
      ['पराश्रव्य तरंगें', 'Ultrasonic waves'],
      ['अवरक्त तरंगें', 'Infrared waves'],
      ['गामा किरणें', 'Gamma rays'],
    ],
    'RADAR (Radio Detection and Ranging) में वायुयान या अन्य वस्तुओं की दूरी और गति मापने हेतु रेडियो/सूक्ष्म तरंगें प्रयुक्त होती हैं।',
    'RADAR (Radio Detection and Ranging) uses radio/microwaves to determine the range and speed of aircraft or distant objects.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'पनडुब्बी के अंदर से पानी की सतह के ऊपर देखने के लिए किस प्रकाशीय यंत्र का उपयोग होता है?',
    'Which optical instrument is used inside a submarine to view objects above the water surface?',
    ['पेरिस्कोप', 'Periscope'],
    [
      ['कैलिडोस्कोप', 'Kaleidoscope'],
      ['टेलिस्कोप', 'Telescope'],
      ['एंडोस्कोप', 'Endoscope'],
    ],
    'पेरिस्कोप में दो समतल दर्पण 45° के कोण पर लगे होते हैं, जो प्रकाश के परावर्तन द्वारा छिपे स्थान से ऊपर का दृश्य दिखाते हैं।',
    'A periscope contains two plane mirrors placed at 45° angles to allow viewing above an obstacle via reflection.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'वाहनों द्वारा तय की गई कुल दूरी को मापने वाला यंत्र क्या कहलाता है?',
    'What is the instrument that measures the total distance travelled by a vehicle called?',
    ['ओडोमीटर', 'Odometer'],
    [
      ['स्पीडोमीटर', 'Speedometer'],
      ['टैकोमीटर', 'Tachometer'],
      ['अल्टीमीटर', 'Altimeter'],
    ],
    'ओडोमीटर वाहन द्वारा चली गई कुल दूरी को किलोमीटर में मापता है, जबकि स्पीडोमीटर तात्क्षणिक चाल (km/h) दर्शाता है।',
    'An odometer records the total distance travelled by a vehicle, whereas a speedometer indicates instantaneous speed.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'विमानों की ऊँचाई मापने के लिए किस यंत्र का उपयोग किया जाता है?',
    'Which instrument is used to measure the altitude of aircraft?',
    ['अल्टीमीटर', 'Altimeter'],
    [
      ['टैकोमीटर', 'Tachometer'],
      ['पायरोमीटर', 'Pyrometer'],
      ['फैदोमीटर', 'Fathometer'],
    ],
    'अल्टीमीटर वायुदाब में परिवर्तन के आधार पर समुद्र तल से विमान की ऊँचाई मापता है।',
    'An altimeter measures the altitude of an aircraft above sea level based on changes in atmospheric pressure.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'घूमते हुए पहिये या इंजन शाफ्ट की घूर्णन गति (RPM) किस यंत्र से मापी जाती है?',
    'Which instrument measures the rotational speed (RPM) of a rotating wheel or engine shaft?',
    ['टैकोमीटर', 'Tachometer'],
    [
      ['एमीटर', 'Ammeter'],
      ['ओडोमीटर', 'Odometer'],
      ['थर्मोमीटर', 'Thermometer'],
    ],
    'टैकोमीटर शाफ्ट या डिस्क की घूर्णन गति को चक्कर प्रति मिनट (RPM) में मापता है।',
    'A tachometer measures the rotational speed of a shaft or disk in revolutions per minute (RPM).',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'झूठ पकड़ने वाली मशीन (Lie detector) को किस नाम से जाना जाता है?',
    'By what name is a lie-detector machine known?',
    ['पॉलीग्राफ', 'Polygraph'],
    [
      ['सिस्मोग्राफ', 'Seismograph'],
      ['टेलीग्राफ', 'Telegraph'],
      ['इलेक्ट्रोकार्डियोग्राफ', 'Electrocardiograph'],
    ],
    'पॉलीग्राफ प्रश्न पूछते समय व्यक्ति के रक्तचाप, नाड़ी, श्वसन और पसीने में होने वाले परिवर्तनों को एक साथ रिकॉर्ड करता है।',
    'A polygraph simultaneously records changes in blood pressure, pulse, respiration, and skin conductivity during questioning.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'स्वचालित उपकरणों (जैसे रेफ्रिजरेटर या प्रेस) में तापमान को एक निश्चित स्तर पर स्थिर रखने वाला यंत्र क्या है?',
    'Which device maintains a constant temperature in automatic appliances like refrigerators or electric irons?',
    ['थर्मोस्टेट', 'Thermostat'],
    [
      ['पायरोमीटर', 'Pyrometer'],
      ['कैलोरीमीटर', 'Calorimeter'],
      ['बोलोमीटर', 'Bolometer'],
    ],
    'थर्मोस्टेट द्विधातु पट्टी (Bimetallic strip) की सहायता से तापमान निर्धारित सीमा से बढ़ने या घटने पर परिपथ को चालू/बंद करता है।',
    'A thermostat switches a heating or cooling circuit on/off using a bimetallic strip to maintain a set temperature.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'एक्स-रे (X-rays) की खोज किस वैज्ञानिक ने की थी?',
    'Which scientist discovered X-rays?',
    ['विल्हेल्म कॉनराड रॉन्टजन', 'Wilhelm Conrad Roentgen'],
    [
      ['मैरी क्यूरी', 'Marie Curie'],
      ['हेनरी बेक्वेरेल', 'Henri Becquerel'],
      ['जे.जे. थॉमसन', 'J.J. Thomson'],
    ],
    'जर्मन भौतिक विज्ञानी डब्ल्यू.सी. रॉन्टजन ने 1895 में एक्स-रे की खोज की, जिसके लिए उन्हें 1901 में पहला भौतिकी का नोबेल पुरस्कार मिला।',
    'German physicist W.C. Roentgen discovered X-rays in 1895, winning the first Nobel Prize in Physics in 1901.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'रेडियोधर्मिता (Radioactivity) की खोज किसने की थी?',
    'Who discovered radioactivity?',
    ['हेनरी बेक्वेरेल', 'Henri Becquerel'],
    [
      ['अर्नेस्ट रदरफोर्ड', 'Ernest Rutherford'],
      ['मैरी क्यूरी', 'Marie Curie'],
      ['ऑटो हान', 'Otto Hahn'],
    ],
    '1896 में फ्रांसीसी वैज्ञानिक हेनरी बेक्वेरेल ने यूरेनियम लवणों से स्वतः निकलने वाली किरणों के रूप में रेडियोधर्मिता की खोज की थी।',
    'French scientist Henri Becquerel discovered radioactivity in 1896 while studying uranium salts.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'डायनामाइट (Dynamite) का आविष्कार किसने किया था?',
    'Who invented dynamite?',
    ['अल्फ्रेड नोबेल', 'Alfred Nobel'],
    [
      ['थॉमस अल्वा एडिसन', 'Thomas Alva Edison'],
      ['माइकल फैराडे', 'Michael Faraday'],
      ['रॉबर्ट ओपेनहाइमर', 'Robert Oppenheimer'],
    ],
    'स्वीडिश रसायनज्ञ अल्फ्रेड नोबेल ने 1867 में नाइट्रोग्लिसरीन को सुरक्षित बनाकर डायनामाइट का आविष्कार किया। उन्हीं की स्मृति में नोबेल पुरस्कार दिए जाते हैं।',
    'Swedish chemist Alfred Nobel invented dynamite in 1867 by stabilizing nitroglycerin. The Nobel Prizes are named after him.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'टेलीफोन का आविष्कार किसने किया था?',
    'Who invented the telephone?',
    ['अलेक्जेंडर ग्राहम बेल', 'Alexander Graham Bell'],
    [
      ['गुग्लिएल्मो मार्कोनी', 'Guglielmo Marconi'],
      ['जॉन लॉगी बेयर्ड', 'John Logie Baird'],
      ['सैमुअल मोर्स', 'Samuel Morse'],
    ],
    '1876 में अलेक्जेंडर ग्राहम बेल ने टेलीफोन का पेटेंट प्राप्त किया था। मार्कोनी ने रेडियो और बेयर्ड ने टेलीविजन का आविष्कार किया।',
    'Alexander Graham Bell patented the telephone in 1876. Marconi pioneered radio and Baird pioneered television.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'भाप के इंजन (व्यावहारिक सुधारित रूप) के आविष्कार का श्रेय किसे दिया जाता है?',
    'Who is credited with inventing the practical improved steam engine?',
    ['जेम्स वाट', 'James Watt'],
    [
      ['जॉर्ज स्टीफेंसन', 'George Stephenson'],
      ['माइकल फैराडे', 'Michael Faraday'],
      ['ब्लेज़ पास्कल', 'Blaise Pascal'],
    ],
    'जेम्स वाट ने अलग संघनित्र (Separate condenser) जोड़कर भाप के इंजन को अत्यंत उपयोगी बनाया। शक्ति का मात्रक "वाट" उन्हीं के नाम पर है।',
    'James Watt made the steam engine commercially practical by adding a separate condenser. The SI unit of power is named after him.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'विद्युत बल्ब का आविष्कार किस वैज्ञानिक ने किया था?',
    'Which scientist invented the incandescent electric light bulb?',
    ['थॉमस अल्वा एडिसन', 'Thomas Alva Edison'],
    [
      ['निकोलस टेस्ला', 'Nikola Tesla'],
      ['एलेसांद्रो वोल्टा', 'Alessandro Volta'],
      ['बेंजामिन फ्रैंकलिन', 'Benjamin Franklin'],
    ],
    'थॉमस अल्वा एडिसन ने 1879 में लंबे समय तक चलने वाले तापदीप्त विद्युत बल्ब का सफल व्यावसायिक आविष्कार किया।',
    'Thomas Alva Edison developed the first commercially practical long-lasting incandescent electric bulb in 1879.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'प्रिंटिंग प्रेस (मूवेबल टाइप) का आविष्कार किसने किया था?',
    'Who invented the movable-type printing press?',
    ['जोहान्स गुटेनबर्ग', 'Johannes Gutenberg'],
    [
      ['विलियम हार्वे', 'William Harvey'],
      ['लियोनार्डो दा विंची', 'Leonardo da Vinci'],
      ['गैलीलियो गैलीली', 'Galileo Galilei'],
    ],
    'जर्मनी के जोहान्स गुटेनबर्ग ने 15वीं शताब्दी में धातु के मूवेबल टाइप वाली प्रिंटिंग प्रेस का आविष्कार किया।',
    'Johannes Gutenberg of Germany invented the mechanical movable-type printing press in the 15th century.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'तड़ित चालक (Lightning conductor) का आविष्कार किसने किया था?',
    'Who invented the lightning conductor?',
    ['बेंजामिन फ्रैंकलिन', 'Benjamin Franklin'],
    [
      ['थॉमस एडिसन', 'Thomas Edison'],
      ['जॉर्ज ओम', 'Georg Ohm'],
      ['माइकल फैराडे', 'Michael Faraday'],
    ],
    'बेंजामिन फ्रैंकलिन ने 1752 में पतंग प्रयोग द्वारा आकाशीय विद्युत को सिद्ध किया और ऊँची इमारतों की सुरक्षा के लिए तड़ित चालक का आविष्कार किया।',
    'Benjamin Franklin demonstrated atmospheric electricity and invented the lightning rod to protect tall buildings from lightning strikes.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'डायनेमो (विद्युत जनित्र) के सिद्धांत की खोज किसने की थी?',
    'Who discovered the principle behind the dynamo (electric generator)?',
    ['माइकल फैराडे', 'Michael Faraday'],
    [
      ['आंद्रे-मैरी एम्पियर', 'Andre-Marie Ampere'],
      ['हेनरिक हर्ट्ज़', 'Heinrich Hertz'],
      ['एलेसांद्रो वोल्टा', 'Alessandro Volta'],
    ],
    'माइकल फैराडे ने 1831 में विद्युत-चुंबकीय प्रेरण की खोज की, जो डायनेमो और ट्रांसफार्मर का आधार है।',
    'Michael Faraday discovered electromagnetic induction in 1831, which forms the working principle of dynamos and transformers.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'फाउंटेन पेन का आविष्कार किसने किया था?',
    'Who invented the fountain pen?',
    ['लेविस ई. वाटरमैन', 'Lewis E. Waterman'],
    [
      ['लास्ज़लो बिरो', 'Laszlo Biro'],
      ['जॉन जे. लाउड', 'John J. Loud'],
      ['रोलैंड हिल', 'Rowland Hill'],
    ],
    'लेविस एडसन वाटरमैन ने 1884 में केशिका क्रिया (Capillary action) पर आधारित व्यावहारिक फाउंटेन पेन का पेटेंट कराया; जबकि बॉलपॉइंट पेन के आविष्कारक लास्ज़लो बिरो थे।',
    'Lewis Edson Waterman patented a practical capillary-feed fountain pen in 1884, whereas Laszlo Biro invented the modern ballpoint pen.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'हवाई जहाज (राइट फ्लायर) का सफल आविष्कार किसने किया था?',
    'Who successfully invented the powered airplane?',
    ['राइट बंधु (ओरविल और विलबर राइट)', 'Wright Brothers (Orville & Wilbur Wright)'],
    [
      ['एंटोनी लावोज़िए', 'Antoine Lavoisier'],
      ['गैलीलियो गैलीली', 'Galileo Galilei'],
      ['जॉर्ज केले', 'George Cayley'],
    ],
    'राइट बंधुओं ने 17 दिसंबर 1903 को किटी हॉक (अमेरिका) में इंजन चालित नियंत्रित हवाई उड़ान का सफल प्रदर्शन किया।',
    'The Wright Brothers achieved the first controlled, sustained, powered heavier-than-air flight on 17 December 1903.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'टेलीविजन (यांत्रिक/व्यावहारिक टीवी प्रदर्शन) के प्रमुख आविष्कारक कौन माने जाते हैं?',
    'Who is widely credited as the pioneer inventor of practical television?',
    ['जॉन लॉगी बेयर्ड', 'John Logie Baird'],
    [
      ['जी. मार्कोनी', 'G. Marconi'],
      ['चार्ल्स बैबेज', 'Charles Babbage'],
      ['ग्राहम बेल', 'Graham Bell'],
    ],
    'स्कॉटिश इंजीनियर जॉन लॉगी बेयर्ड ने 1926 में लंदन में टेलीविजन चित्रों का पहला सार्वजनिक प्रदर्शन किया था।',
    'Scottish engineer John Logie Baird demonstrated the first working television system publicly in London in 1926.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'चेचक के टीके (Smallpox vaccine) की खोज किसने की थी?',
    'Who discovered the smallpox vaccine?',
    ['एडवर्ड जेनर', 'Edward Jenner'],
    [
      ['लुई पाश्चर', 'Louis Pasteur'],
      ['अलेक्जेंडर फ्लेमिंग', 'Alexander Fleming'],
      ['जोनास साल्क', 'Jonas Salk'],
    ],
    'अंग्रेज चिकित्सक एडवर्ड जेनर ने 1796 में गोशीतला (Cowpox) की सहायता से चेचक के पहले सफल टीके की खोज की। उन्हें प्रतिरक्षा विज्ञान का जनक भी कहा जाता है।',
    'British physician Edward Jenner developed the first successful smallpox vaccine in 1796 and is called the father of immunology.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'प्रथम प्रतिजैविक औषधि "पेनिसिलिन" की खोज किसने की थी?',
    'Who discovered the first antibiotic, penicillin?',
    ['अलेक्जेंडर फ्लेमिंग', 'Alexander Fleming'],
    [
      ['लुई पाश्चर', 'Louis Pasteur'],
      ['रॉबर्ट कोच', 'Robert Koch'],
      ['रॉनाल्ड रॉस', 'Ronald Ross'],
    ],
    'अलेक्जेंडर फ्लेमिंग ने 1928 में पेनिसिलियम नोटेटम नामक कवक (फफूँद) से पेनिसिलिन की खोज की थी।',
    'Alexander Fleming discovered penicillin in 1928 from the mould Penicillium notatum.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'रेबीज के टीके तथा पाश्चुरीकरण (Pasteurization) विधि की खोज किसने की?',
    'Who discovered the rabies vaccine and the process of pasteurization?',
    ['लुई पाश्चर', 'Louis Pasteur'],
    [
      ['एडवर्ड जेनर', 'Edward Jenner'],
      ['रॉबर्ट कोच', 'Robert Koch'],
      ['विलियम हार्वे', 'William Harvey'],
    ],
    'फ्रांसीसी सूक्ष्मजीव विज्ञानी लुई पाश्चर ने दूध को जीवाणु-रहित करने की पाश्चुरीकरण विधि तथा रेबीज व एंथ्रेक्स के टीकों का विकास किया।',
    'French microbiologist Louis Pasteur developed pasteurization for milk preservation and vaccines against rabies and anthrax.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'मलेरिया परजीवी के वाहक मच्छर (मादा एनोफिलीज़) की खोज किस भारतीय जन्मे वैज्ञानिक ने की थी?',
    'Which scientist discovered that mosquitoes transmit malaria?',
    ['रोनाल्ड रॉस', 'Ronald Ross'],
    [
      ['सी.वी. रमन', 'C.V. Raman'],
      ['एडवर्ड जेनर', 'Edward Jenner'],
      ['सलीम अली', 'Salim Ali'],
    ],
    'सर रोनाल्ड रॉस ने भारत (सिकंदराबाद) में शोध करते हुए 1897 में सिद्ध किया कि मलेरिया मादा एनोफिलीज़ मच्छर के काटने से फैलता है।',
    'Sir Ronald Ross discovered in 1897 while working in India that female Anopheles mosquitoes transmit malaria parasites.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    '1930 में "रमन प्रभाव" (प्रकाश का प्रकीर्णन) के लिए किस भारतीय वैज्ञानिक को नोबेल पुरस्कार मिला था?',
    'Which Indian scientist received the Nobel Prize in 1930 for the "Raman Effect"?',
    ['सर सी.वी. रमन', 'Sir C.V. Raman'],
    [
      ['सुब्रह्मण्यम चंद्रशेखर', 'Subrahmanyan Chandrasekhar'],
      ['सत्येंद्र नाथ बोस', 'Satyendra Nath Bose'],
      ['मेघनाद साहा', 'Meghnad Saha'],
    ],
    'सर चंद्रशेखर वेंकट रमन ने 28 फरवरी 1928 को रमन प्रभाव की खोज की थी। इसी दिन भारत में राष्ट्रीय विज्ञान दिवस मनाया जाता है।',
    'Sir C.V. Raman discovered the Raman Effect on 28 February 1928, celebrated in India as National Science Day.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'कपड़े धोने की मशीन (Washing machine) किस सिद्धांत पर कार्य करती है?',
    'On which principle does a washing machine work?',
    ['अपकेंद्रण (Centrifugation)', 'Centrifugation'],
    [
      ['अपोहन (Dialysis)', 'Dialysis'],
      ['परासरण (Osmosis)', 'Osmosis'],
      ['विसरण (Diffusion)', 'Diffusion'],
    ],
    'वाशिंग मशीन तथा दूध से मक्खन निकालने की मशीन अपकेंद्रीय बल (अपकेंद्रण) के सिद्धांत पर कार्य करती है।',
    'A washing machine (especially spin dryer) and cream separator work on the principle of centrifugation.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'सड़क पर मोड़ आते समय साइकिल सवार या रेल की पटरी को अंदर की ओर क्यों झुकाया जाता है?',
    'Why does a cyclist lean inward or why are railway tracks banked at a curve?',
    ['आवश्यक अभिकेंद्रीय बल प्राप्त करने के लिए', 'To obtain necessary centripetal force'],
    [
      ['घर्षण को शून्य करने के लिए', 'To reduce friction to zero'],
      ['जड़त्व समाप्त करने के लिए', 'To eliminate inertia'],
      ['गुरुत्वाकर्षण बढ़ाने के लिए', 'To increase gravity'],
    ],
    'वृत्ताकार पथ पर मुड़ने के लिए आवश्यक अभिकेंद्रीय बल प्रदान करने हेतु साइकिल सवार झुकता है और सड़कों/पटरियों को ढलान (Banking) दिया जाता है।',
    'To provide the required centripetal force for circular turning without skidding, cyclists lean inward and tracks are banked.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'दीये की बत्ती में तेल का ऊपर चढ़ना किस भौतिक घटना के कारण होता है?',
    'The rise of oil up the wick of a lamp is due to which physical phenomenon?',
    ['केशिकत्व (Capillarity)', 'Capillarity'],
    [
      ['श्यानता (Viscosity)', 'Viscosity'],
      ['उत्प्लावन (Buoyancy)', 'Buoyancy'],
      ['परासरण (Osmosis)', 'Osmosis'],
    ],
    'पृष्ठ तनाव के कारण पतली नलियों या रेशों के बीच द्रव के ऊपर चढ़ने या नीचे उतरने की घटना को केशिकत्व कहते हैं।',
    'Capillarity (capillary action), driven by surface tension and adhesion, causes oil to rise through the fine pores of a wick.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'वर्षा की बूँद का आकार गोलाकार क्यों होता है?',
    'Why is a falling raindrop spherical in shape?',
    ['पृष्ठ तनाव के कारण', 'Due to surface tension'],
    [
      ['वायुमंडलीय दाब के कारण', 'Due to atmospheric pressure'],
      ['श्यानता के कारण', 'Due to viscosity'],
      ['गुरुत्वाकर्षण के कारण', 'Due to gravity'],
    ],
    'पृष्ठ तनाव के कारण द्रव अपना पृष्ठीय क्षेत्रफल न्यूनतम रखने का प्रयास करता है, और दिए गए आयतन के लिए गोले का पृष्ठीय क्षेत्रफल न्यूनतम होता है।',
    'Surface tension causes a liquid to minimize its surface area; for a given volume, a sphere has the minimum surface area.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'साबुन मिलाने पर जल के पृष्ठ तनाव पर क्या प्रभाव पड़ता है?',
    'What happens to the surface tension of water when soap or detergent is dissolved in it?',
    ['पृष्ठ तनाव घट जाता है', 'Surface tension decreases'],
    [
      ['पृष्ठ तनाव बढ़ जाता है', 'Surface tension increases'],
      ['कोई परिवर्तन नहीं होता', 'Remains unchanged'],
      ['पहले बढ़ता है फिर शून्य हो जाता है', 'First increases then becomes zero'],
    ],
    'साबुन या डिटर्जेंट मिलाने से जल का पृष्ठ तनाव कम हो जाता है, जिससे पानी कपड़ों के सूक्ष्म छिद्रों में आसानी से प्रवेश कर मैल साफ कर देता है।',
    'Adding soap decreases the surface tension of water, enabling it to wet fabrics easily and penetrate fine pores to remove dirt.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'पानी की सतह पर मच्छरों के लार्वा को नष्ट करने के लिए मिट्टी का तेल (केरोसिन) क्यों छिड़का जाता है?',
    'Why is kerosene oil sprayed on stagnant water to control mosquito larvae?',
    ['जल का पृष्ठ तनाव कम हो जाता है और लार्वा डूब जाते हैं', 'Surface tension of water decreases and larvae drown'],
    [
      ['मिट्टी के तेल से जल का घनत्व बढ़ जाता है', 'Kerosene increases density of water'],
      ['जल का पृष्ठ तनाव बढ़ जाता है', 'Surface tension of water increases'],
      ['केरोसिन ऑक्सीजन उत्पन्न करता है', 'Kerosene produces oxygen'],
    ],
    'केरोसिन डालने से पानी का पृष्ठ तनाव घट जाता है, जिससे पानी की सतह पर तैरने वाले मच्छरों के लार्वा डूबकर मर जाते हैं।',
    'Kerosene lowers the surface tension of water, causing mosquito larvae resting at the surface to sink and suffocate.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'मच्छर का पानी की सतह पर बिना डूबे बैठ पाना किस गुण के कारण संभव होता है?',
    'Which property allows a mosquito to sit on the surface of water without sinking?',
    ['पृष्ठ तनाव', 'Surface tension'],
    [
      ['श्यानता', 'Viscosity'],
      ['केशिकत्व', 'Capillarity'],
      ['प्रत्यास्थता', 'Elasticity'],
    ],
    'पानी की ऊपरी सतह पृष्ठ तनाव के कारण एक खिंची हुई झिल्ली की तरह व्यवहार करती है, जो हल्के कीटों के भार को संभाल लेती है।',
    'Surface tension makes the water surface act like a stretched elastic membrane capable of supporting lightweight insects.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'सर्दियों में गर्म सूप ठंडे सूप की तुलना में अधिक स्वादिष्ट क्यों लगता है?',
    'Why does hot soup taste better than cold soup?',
    ['ताप बढ़ने से पृष्ठ तनाव कम होता है और सूप जीभ पर फैल जाता है', 'Higher temperature lowers surface tension, spreading soup over the tongue'],
    [
      ['गर्म सूप का घनत्व अधिक होता है', 'Hot soup has higher density'],
      ['ठंडे सूप में श्यानता शून्य होती है', 'Cold soup has zero viscosity'],
      ['ताप बढ़ने से पृष्ठ तनाव बढ़ता है', 'Surface tension increases with temperature'],
    ],
    'तापमान बढ़ने पर द्रव का पृष्ठ तनाव कम हो जाता है, जिससे गर्म सूप जीभ की सभी स्वाद कलिकाओं पर आसानी से फैल जाता है।',
    'Surface tension decreases as temperature rises, allowing hot soup to spread widely across the taste buds on the tongue.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'शहद की बूँद पानी की तुलना में धीरे क्यों बहती है?',
    'Why does honey flow much more slowly than water?',
    ['शहद की श्यानता (Viscosity) अधिक होती है', 'Honey has higher viscosity'],
    [
      ['शहद का पृष्ठ तनाव शून्य होता है', 'Honey has zero surface tension'],
      ['शहद का घनत्व पानी से कम होता है', 'Honey is less dense than water'],
      ['शहद में केशिकत्व नहीं होता', 'Honey lacks capillarity'],
    ],
    'किसी द्रव की परतों के बीच सापेक्ष गति का विरोध करने के गुण को श्यानता कहते हैं। शहद गाढ़ा होने के कारण अधिक श्यान है।',
    'Viscosity is the internal resistance of a fluid to flow. Honey has much higher viscosity than water, so it flows slowly.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'छोटी-छोटी वस्तुओं और सूक्ष्मजीवों को देखने के लिए किस यंत्र का प्रयोग किया जाता है?',
    'Which instrument is used to view tiny objects and microorganisms?',
    ['सूक्ष्मदर्शी (Microscope)', 'Microscope'],
    [
      ['दूरबीन (Telescope)', 'Telescope'],
      ['स्पेक्ट्रोमीटर', 'Spectrometer'],
      ['पेरिस्कोप', 'Periscope'],
    ],
    'सूक्ष्मदर्शी उत्तल लेंसों के संयोजन से सूक्ष्म वस्तुओं का अत्यंत बड़ा (आवर्धित) प्रतिबिंब बनाता है।',
    'A microscope uses convex lenses to produce a highly magnified image of microscopic objects.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'रक्त में हीमोग्लोबिन और लाल रक्त कणिकाओं (RBC) की संख्या किस यंत्र से गिनी जाती है?',
    'Which instrument is used to count red blood cells (RBCs) in blood?',
    ['हीमोसाइटोमीटर', 'Haemocytometer'],
    [
      ['ग्लूकोमीटर', 'Glucometer'],
      ['लैक्टोमीटर', 'Lactometer'],
      ['थर्मोमीटर', 'Thermometer'],
    ],
    'हीमोसाइटोमीटर एक विशेष काँच की स्लाइड वाला यंत्र है जिससे रक्त कोशिकाओं की सांद्रता गिनी जाती है।',
    'A haemocytometer is a specialized counting chamber device used to count blood cells.',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'मनुष्य के आंतरिक अंगों (जैसे आमाशय) की जाँच के लिए डॉक्टर किस प्रकाशीय यंत्र का उपयोग करते हैं?',
    'Which optical instrument do doctors use to examine internal body organs such as the stomach?',
    ['एंडोस्कोप', 'Endoscope'],
    [
      ['माइक्रोस्कोप', 'Microscope'],
      ['स्टेथोस्कोप', 'Stethoscope'],
      ['ओटोस्कोप', 'Otoscope'],
    ],
    'एंडोस्कोप प्रकाशिक तंतु (Optical fibre) के पूर्ण आंतरिक परावर्तन सिद्धांत पर कार्य करता है।',
    'An endoscope works on the principle of total internal reflection using optical fibres to view internal organs.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'वायुदाबमापी (बैरोमीटर) में पारे के तल का धीरे-धीरे ऊपर चढ़ना किस मौसम का संकेत देता है?',
    'A gradual rise in the mercury level of a barometer indicates what kind of weather?',
    ['साफ और शुष्क मौसम', 'Clear and dry weather'],
    [
      ['तेज आँधी और तूफान', 'Severe storm'],
      ['लगातार भारी वर्षा', 'Continuous heavy rain'],
      ['चक्रवात का आगमन', 'Arrival of a cyclone'],
    ],
    'बैरोमीटर में पारे का धीरे-धीरे चढ़ना उच्च दाब और साफ मौसम का संकेत है, धीरे-धीरे गिरना वर्षा का, तथा अचानक गिरना आँधी-तूफान का संकेत है।',
    'A gradual rise indicates clear weather, a gradual fall indicates rain, and a sudden drop signals a storm.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'सिरिंज (पिचकारी) में दवाई का ऊपर खिंचना तथा स्ट्रॉ से जूस पीना किस कारण संभव होता है?',
    'Drawing medicine into a syringe and drinking juice through a straw work due to:',
    ['वायुमंडलीय दाब', 'Atmospheric pressure'],
    [
      ['केशिका क्रिया', 'Capillary action'],
      ['पृष्ठ तनाव', 'Surface tension'],
      ['श्यानता', 'Viscosity'],
    ],
    'सिरिंज का पिस्टन खींचने या स्ट्रॉ से हवा चूसने पर अंदर दाब कम हो जाता है, जिससे बाहर का वायुमंडलीय दाब द्रव को ऊपर धकेल देता है।',
    'Pulling the plunger or sucking air lowers internal pressure, allowing external atmospheric pressure to push the liquid up.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'विद्युत परिपथ में बहुत सूक्ष्म विद्युत धारा की उपस्थिति तथा दिशा का पता लगाने वाला यंत्र कौन-सा है?',
    'Which instrument detects the presence and direction of very small electric currents in a circuit?',
    ['गैल्वेनोमीटर', 'Galvanometer'],
    [
      ['वोल्टमीटर', 'Voltmeter'],
      ['ओममीटर', 'Ohmmeter'],
      ['वाटमीटर', 'Wattmeter'],
    ],
    'गैल्वेनोमीटर परिपथ में अल्प धारा की उपस्थिति और उसकी दिशा बताता है। इसे शंट जोड़कर एमीटर में बदला जा सकता है।',
    'A galvanometer detects small currents and their direction. It can be converted into an ammeter by connecting a low-resistance shunt.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'द्रवों का आपेक्षिक घनत्व (Specific gravity) मापने वाला यंत्र क्या कहलाता है?',
    'What is the instrument used to measure the specific gravity (relative density) of liquids called?',
    ['हाइड्रोमीटर', 'Hydrometer'],
    [
      ['हाइग्रोमीटर', 'Hygrometer'],
      ['एनीमोमीटर', 'Anemometer'],
      ['बैरोमीटर', 'Barometer'],
    ],
    'हाइड्रोमीटर उत्प्लावन के सिद्धांत पर कार्य करते हुए किसी द्रव का घनत्व या आपेक्षिक घनत्व मापता है।',
    'A hydrometer measures the density or specific gravity of liquids based on the principle of buoyancy.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'खगोलीय इकाई (Astronomical Unit - AU) किसके बीच की औसत दूरी है?',
    'One Astronomical Unit (AU) is the average distance between:',
    ['पृथ्वी और सूर्य', 'Earth and the Sun'],
    [
      ['पृथ्वी और चंद्रमा', 'Earth and the Moon'],
      ['सूर्य और बुध', 'Sun and Mercury'],
      ['सूर्य और प्लूटो', 'Sun and Pluto'],
    ],
    'पृथ्वी और सूर्य के बीच की औसत दूरी (लगभग 1.496 × 10¹¹ मीटर) को एक खगोलीय इकाई (1 AU) कहते हैं।',
    'One Astronomical Unit (1 AU) is the mean distance between the Earth and the Sun (~1.496 × 10¹¹ m).',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'ध्वनि की प्रबलता (तीव्रता स्तर) को किस मात्रक में मापा जाता है?',
    'In which unit is the loudness (sound level) of sound measured?',
    ['डेसिबल', 'Decibel'],
    [
      ['हर्ट्ज़', 'Hertz'],
      ['कैंडेला', 'Candela'],
      ['पास्कल', 'Pascal'],
    ],
    'ध्वनि की प्रबलता (Sound intensity level) का मात्रक डेसिबल (dB) है। 80 dB से अधिक ध्वनि शोर प्रदूषण मानी जाती है।',
    'Sound loudness level is measured in decibels (dB). Sound above 80 dB is generally considered noise pollution.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'दाब (Pressure) का SI मात्रक क्या है?',
    'What is the SI unit of pressure?',
    ['पास्कल (न्यूटन/मीटर²)', 'Pascal (N/m²)'],
    [
      ['जूल', 'Joule'],
      ['वाट', 'Watt'],
      ['न्यूटन-मीटर', 'Newton-metre'],
    ],
    'एकांक क्षेत्रफल पर लगने वाले अभिलंबवत बल को दाब कहते हैं। इसका SI मात्रक न्यूटन/मीटर² या पास्कल (Pa) है।',
    'Pressure is normal force per unit area, and its SI unit is Newton per square metre (N/m²), called Pascal (Pa).',
    'EASY',
    { formulaHi: 'दाब (P) = बल (F) / क्षेत्रफल (A)', formulaEn: 'P = F / A' }
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'एक वायुमंडलीय दाब (1 atm) लगभग कितने पास्कल के बराबर होता है?',
    'One atmospheric pressure (1 atm) is approximately equal to how many pascals?',
    ['1.013 × 10⁵ पास्कल', '1.013 × 10⁵ Pa'],
    [
      ['1.013 × 10³ पास्कल', '1.013 × 10³ Pa'],
      ['1.013 × 10⁷ पास्कल', '1.013 × 10⁷ Pa'],
      ['760 पास्कल', '760 Pa'],
    ],
    'समुद्र तल पर सामान्य वायुमंडलीय दाब 760 mm पारे के स्तंभ के बराबर होता है, जिसका मान लगभग 1.013 × 10⁵ Pa (या 1.013 बार) है।',
    'Standard atmospheric pressure at sea level equals 760 mm of Hg, which is approximately 1.013 × 10⁵ Pa.',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'एक माइक्रॉन (Micron) कितने मीटर के बराबर होता है?',
    'One micron is equal to how many metres?',
    ['10⁻⁶ मीटर', '10⁻⁶ m'],
    [
      ['10⁻³ मीटर', '10⁻³ m'],
      ['10⁻⁹ मीटर', '10⁻⁹ m'],
      ['10⁻⁵ मीटर', '10⁻⁵ m'],
    ],
    '1 माइक्रॉन (1 माइक्रोमीटर) = 10⁻⁶ मीटर = 10⁻⁴ सेंटीमीटर होता है। इसका उपयोग जीवाणु या कोशिका के आकार मापने में होता है।',
    '1 micron (1 micrometre) = 10⁻⁶ metre. It is commonly used to express sizes of bacteria and cells.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'स्क्रू गेज (पेचमापी) और वर्नियर कैलिपर्स में अधिक यथार्थ (सूक्ष्म) मापन कौन करता है?',
    'Between a screw gauge and a vernier callipers, which gives finer precision?',
    ['स्क्रू गेज (0.01 मिमी अल्पतमांक)', 'Screw gauge (0.01 mm least count)'],
    [
      ['वर्नियर कैलिपर्स (0.1 मिमी अल्पतमांक)', 'Vernier callipers (0.1 mm least count)'],
      ['साधारण मीटर स्केल', 'Ordinary metre scale'],
      ['दोनों का अल्पतमांक समान है', 'Both have identical least count'],
    ],
    'सामान्य स्क्रू गेज का अल्पतमांक 0.01 mm (0.001 cm) होता है जबकि वर्नियर कैलिपर्स का 0.1 mm (0.01 cm) होता है; अतः स्क्रू गेज अधिक सूक्ष्म मापन करता है।',
    'A standard screw gauge has a least count of 0.01 mm compared to 0.1 mm for vernier callipers, making the screw gauge more precise.',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'कंप्यूटर मेमोरी में 1 किलोबाइट (KB) सामान्यतः कितने बाइट के बराबर माना जाता है?',
    'In binary computer memory, 1 Kilobyte (KB) equals how many bytes?',
    ['1024 बाइट', '1024 bytes'],
    [
      ['1000 बाइट', '1000 bytes'],
      ['512 बाइट', '512 bytes'],
      ['2048 बाइट', '2048 bytes'],
    ],
    'द्विआधारी प्रणाली (2¹⁰) के अनुसार कंप्यूटर मेमोरी में 1 KB = 1024 बाइट होते हैं (और 1 बाइट = 8 बिट)।',
    'In binary addressing (2¹⁰), 1 KB = 1024 bytes, where 1 byte consists of 8 bits.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'कंप्यूटर का जनक (Father of Computer) किसे कहा जाता है?',
    'Who is known as the "Father of the Computer"?',
    ['चार्ल्स बैबेज', 'Charles Babbage'],
    [
      ['एलन ट्यूरिंग', 'Alan Turing'],
      ['बिल गेट्स', 'Bill Gates'],
      ['टिम बर्नर्स-ली', 'Tim Berners-Lee'],
    ],
    'अंग्रेज गणितज्ञ चार्ल्स बैबेज ने डिफरेंस इंजन और एनालिटिकल इंजन की संकल्पना प्रस्तुत की थी, इसलिए उन्हें कंप्यूटर का जनक कहा जाता है।',
    'English mathematician Charles Babbage designed the Analytical Engine, earning the title "Father of the Computer".',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'वर्ल्ड वाइड वेब (WWW) का आविष्कार किसने किया था?',
    'Who invented the World Wide Web (WWW)?',
    ['टिम बर्नर्स-ली', 'Tim Berners-Lee'],
    [
      ['विंट सेर्फ', 'Vint Cerf'],
      ['स्टीव जॉब्स', 'Steve Jobs'],
      ['मार्क जुकरबर्ग', 'Mark Zuckerberg'],
    ],
    'ब्रिटिश वैज्ञानिक सर टिम बर्नर्स-ली ने 1989 में सर्न (CERN) में वर्ल्ड वाइड वेब (WWW) का आविष्कार किया।',
    'British computer scientist Sir Tim Berners-Lee invented the World Wide Web (WWW) in 1989 at CERN.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'इलेक्ट्रॉन सूक्ष्मदर्शी (Electron Microscope) का आविष्कार किसने किया था?',
    'Who invented the electron microscope?',
    ['अर्न्स्ट रुस्का और मैक्स नॉल', 'Ernst Ruska and Max Knoll'],
    [
      ['एंटनी वॉन ल्यूवेनहॉक', 'Antonie van Leeuwenhoek'],
      ['रॉबर्ट हुक', 'Robert Hook'],
      ['जैकियस जैनसेन', 'Zacharias Janssen'],
    ],
    '1931 में जर्मन वैज्ञानिक अर्न्स्ट रुस्का और मैक्स नॉल ने इलेक्ट्रॉन सूक्ष्मदर्शी का निर्माण किया, जिससे विषाणुओं (Viruses) तक को देखना संभव हुआ।',
    'Ernst Ruska and Max Knoll built the first electron microscope in 1931, enabling observation of sub-light-wavelength structures like viruses.',
    'HARD'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'प्रेशर कुकर में खाना जल्दी क्यों पक जाता है?',
    'Why does food cook faster in a pressure cooker?',
    ['अधिक दाब पर जल का क्वथनांक बढ़ जाता है', 'Increased pressure raises the boiling point of water'],
    [
      ['अधिक दाब पर जल का क्वथनांक घट जाता है', 'Increased pressure lowers the boiling point of water'],
      ['भाप अंदर बाहर निकलती रहती है', 'Steam continuously escapes'],
      ['कुकर धातु की ऊष्मा नष्ट करता है', 'Cooker metal destroys heat'],
    ],
    'प्रेशर कुकर में बंद भाप के कारण अंदर दाब बढ़ जाता है, जिससे पानी 100°C के बजाय लगभग 120°C पर उबलता है और भोजन शीघ्र पकता है।',
    'Trapped steam increases internal pressure, raising water’s boiling point above 100°C (to ~120°C), which cooks food faster.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'पहाड़ों पर मैदानी क्षेत्रों की अपेक्षा खाना पकाने में अधिक समय क्यों लगता है?',
    'Why does cooking take longer on high mountains compared to plains?',
    ['ऊँचाई पर वायुदाब कम होने से जल का क्वथनांक घट जाता है', 'Lower atmospheric pressure at altitude lowers the boiling point of water'],
    [
      ['ऊँचाई पर जल का क्वथनांक बढ़ जाता है', 'Boiling point of water increases at altitude'],
      ['पहाड़ों पर ऑक्सीजन अधिक होती है', 'Oxygen is higher on mountains'],
      ['गुरुत्वाकर्षण शून्य हो जाता है', 'Gravity becomes zero'],
    ],
    'ऊँचाई बढ़ने के साथ वायुमंडलीय दाब घटता है, जिससे पानी 100°C से कम ताप पर ही उबलने लगता है और भोजन पकने में देर लगती है।',
    'At higher altitudes, lower atmospheric pressure causes water to boil below 100°C, reducing cooking temperature and taking longer.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'नाभिकीय रिएक्टर (परमाणु भट्ठी) में मंदक (Moderator) के रूप में किसका उपयोग किया जाता है?',
    'What is used as a moderator in a nuclear reactor?',
    ['भारी जल (D₂O) या ग्रेफाइट', 'Heavy water (D₂O) or graphite'],
    [
      ['कैडमियम या बोरॉन की छड़ें', 'Cadmium or boron rods'],
      ['द्रव सोडियम', 'Liquid sodium'],
      ['यूरेनियम-238', 'Uranium-238'],
    ],
    'नाभिकीय रिएक्टर में तीव्र न्यूट्रॉनों की गति को धीमा करने के लिए भारी जल (D₂O) या ग्रेफाइट को मंदक के रूप में प्रयोग किया जाता है; जबकि कैडमियम/बोरॉन नियंत्रक छड़ें होती हैं।',
    'Heavy water (D₂O) or graphite slows down fast neutrons as a moderator, whereas cadmium/boron rods act as control rods.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'दैनिक जीवन में प्रयुक्त माइक्रोवेव ओवन भोजन को गर्म करने के लिए किसका उपयोग करता है?',
    'In daily life, a microwave oven heats food using:',
    ['सूक्ष्म तरंगों (Microwaves) द्वारा जल अणुओं में कंपन', 'Microwaves vibrating water molecules in food'],
    [
      ['पराश्रव्य ध्वनि तरंगें', 'Ultrasonic sound waves'],
      ['पराबैंगनी किरणें', 'Ultraviolet rays'],
      ['एक्स-किरणें', 'X-rays'],
    ],
    'माइक्रोवेव ओवन सूक्ष्म तरंगें उत्सर्जित करता है जिन्हें भोजन में उपस्थित जल, वसा और शर्करा के अणु अवशोषित करके ऊष्मा उत्पन्न करते हैं।',
    'Microwave ovens emit microwaves that are absorbed by water, fat, and sugar molecules, generating heat through molecular vibration.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'बर्फ में बुरादा या लकड़ी का छिलका क्यों लपेटा जाता है?',
    'Why is ice often packed in sawdust?',
    ['बुरादा ऊष्मा का कुचालक होने से बर्फ को पिघलने से बचाता है', 'Sawdust is a poor conductor of heat and prevents melting'],
    [
      ['बुरादा बर्फ का तापमान और कम कर देता है', 'Sawdust lowers the temperature of ice further'],
      ['बुरादा ऊष्मा का सुचालक है', 'Sawdust is a good conductor of heat'],
      ['बुरादा बर्फ में नमी बढ़ाता है', 'Sawdust adds moisture to ice'],
    ],
    'बुरादे और उसके रेशों के बीच फंसी हवा ऊष्मा की कुचालक होती है, जिससे बाहर की गर्मी बर्फ तक नहीं पहुँच पाती।',
    'Sawdust and the air trapped inside it act as thermal insulators, preventing external heat from reaching and melting the ice.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक सिद्धांत एवं उपकरण',
    'थर्मस फ्लास्क की दीवारों के बीच निर्वात (Vacuum) क्यों रखा जाता है?',
    'Why is a vacuum maintained between the double walls of a thermos flask?',
    ['चालन और संवहन द्वारा ऊष्मा की हानि रोकने के लिए', 'To prevent heat loss by conduction and convection'],
    [
      ['विकिरण द्वारा ऊष्मा बढ़ाने के लिए', 'To increase heat by radiation'],
      ['फ्लास्क को हल्का बनाने के लिए', 'Only to make the flask lighter'],
      ['वायुदाब बढ़ाने के लिए', 'To increase air pressure'],
    ],
    'चालन और संवहन के लिए माध्यम आवश्यक है। निर्वात होने से इन दोनों विधियों से ऊष्मा स्थानांतरण रुक जाता है, और चाँदी की पॉलिश विकिरण रोकती है।',
    'Conduction and convection require a material medium; vacuum prevents both, while silvered walls minimize heat loss by radiation.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'सोलर कुकर में सौर ऊर्जा को एकत्रित करने के लिए सामान्यतः किस दर्पण का प्रयोग किया जाता है?',
    'Which mirror is commonly used in a solar cooker to concentrate sunlight?',
    ['अवतल दर्पण', 'Concave mirror'],
    [
      ['उत्तल दर्पण', 'Convex mirror'],
      ['समतल दर्पण केवल', 'Plane mirror only'],
      ['उत्तल लेंस केवल', 'Convex lens only'],
    ],
    'अवतल दर्पण समानांतर सूर्य की किरणों को अपने फोकस पर केंद्रित (अभिसारित) करता है, जिससे कुकर में उच्च ताप प्राप्त होता है।',
    'A concave mirror converges parallel sun rays onto a focal point, producing intense heat for cooking.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'पृथ्वी के घूर्णन या समय के अत्यंत सटीक मापन के लिए किस घड़ी का उपयोग किया जाता है?',
    'Which clock is used for the most accurate measurement of time?',
    ['परमाणु घड़ी (Atomic clock)', 'Atomic clock'],
    [
      ['लोलक घड़ी', 'Pendulum clock'],
      ['क्वार्ट्ज़ घड़ी', 'Quartz clock'],
      ['सूर्य घड़ी', 'Sundial'],
    ],
    'सीज़ियम-133 परमाणु पर आधारित परमाणु घड़ियाँ विश्व में समय का सबसे सटीक मापन करती हैं।',
    'Atomic clocks based on Caesium-133 atomic transitions provide the most precise time measurement.',
    'MEDIUM'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'SI मात्रक एवं मापन',
    'क्विनटल (Quintal) और मीट्रिक टन में क्रमशः कितने किलोग्राम होते हैं?',
    'How many kilograms are in 1 quintal and 1 metric tonne respectively?',
    ['100 किग्रा और 1000 किग्रा', '100 kg and 1000 kg'],
    [
      ['10 किग्रा और 100 किग्रा', '10 kg and 100 kg'],
      ['100 किग्रा और 500 किग्रा', '100 kg and 500 kg'],
      ['50 किग्रा और 1000 किग्रा', '50 kg and 1000 kg'],
    ],
    '1 क्विंटल = 100 किलोग्राम तथा 1 मीट्रिक टन = 10 क्विंटल = 1000 किलोग्राम होता है।',
    '1 quintal equals 100 kg and 1 metric tonne equals 10 quintals or 1000 kg.',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'भारत में "हरित क्रांति" (Green Revolution) के जनक कौन माने जाते हैं?',
    'Who is regarded as the father of the Green Revolution in India?',
    ['डॉ. एम.एस. स्वामीनाथन', 'Dr. M.S. Swaminathan'],
    [
      ['डॉ. वर्गीज कुरियन', 'Dr. Verghese Kurien'],
      ['नॉर्मन बोरलॉग', 'Norman Borlaug'],
      ['सी. सुब्रमण्यम', 'C. Subramaniam'],
    ],
    'भारत में उच्च उपज वाली गेहूँ-धान की किस्मों द्वारा खाद्यान्न उत्पादन बढ़ाने का श्रेय डॉ. एम.एस. स्वामीनाथन को जाता है; जबकि विश्व स्तर पर नॉर्मन बोरलॉग जनक हैं।',
    'Dr. M.S. Swaminathan pioneered the Green Revolution in India (while Norman Borlaug is its father globally).',
    'EASY'
  ),
  q(
    'दैनिक जीवन में विज्ञान',
    'वैज्ञानिक आविष्कार एवं यंत्र',
    'भारत में "श्वेत क्रांति" (दुग्ध क्रांति / ऑपरेशन फ्लड) के जनक कौन थे?',
    'Who was the father of the White Revolution (Operation Flood) in India?',
    ['डॉ. वर्गीज कुरियन', 'Dr. Verghese Kurien'],
    [
      ['डॉ. एम.एस. स्वामीनाथन', 'Dr. M.S. Swaminathan'],
      ['सैम पित्रोदा', 'Sam Pitroda'],
      ['हीरालाल चौधरी', 'Hiralal Chaudhuri'],
    ],
    'डॉ. वर्गीज कुरियन को "मिल्कमैन ऑफ इंडिया" और श्वेत क्रांति का जनक कहा जाता है।',
    'Dr. Verghese Kurien, known as the Milkman of India, spearheaded the White Revolution (Operation Flood).',
    'EASY'
  ),

  // =========================================================================
  // 2. गति, बल, न्यूटन के नियम, घर्षण, दाब, उत्प्लावन, गुरुत्वाकर्षण — 80 Qs
  // =========================================================================
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी वस्तु के विस्थापन की समय दर को क्या कहते हैं?',
    'What is the time rate of change of displacement of an object called?',
    ['वेग (Velocity)', 'Velocity'],
    [
      ['चाल (Speed)', 'Speed'],
      ['त्वरण (Acceleration)', 'Acceleration'],
      ['संवेग (Momentum)', 'Momentum'],
    ],
    'निश्चित दिशा में इकाई समय में तय की गई दूरी अर्थात विस्थापन की दर को वेग कहते हैं। यह एक सदिश राशि है।',
    'Velocity is the rate of change of displacement with time and is a vector quantity.',
    'EASY',
    { formulaHi: 'वेग (v) = विस्थापन (s) / समय (t)', formulaEn: 'v = s / t' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'वेग परिवर्तन की दर को क्या कहा जाता है?',
    'What is the rate of change of velocity called?',
    ['त्वरण', 'Acceleration'],
    [
      ['मंदन', 'Retardation'],
      ['बल', 'Force'],
      ['आवेग', 'Impulse'],
    ],
    'किसी गतिशील वस्तु के वेग में प्रति सेकंड होने वाले परिवर्तन को त्वरण कहते हैं। इसका SI मात्रक m/s² है।',
    'Acceleration is the rate of change of velocity per unit time. Its SI unit is m/s².',
    'EASY',
    { formulaHi: 'त्वरण (a) = (v - u) / t', formulaEn: 'a = (v - u) / t' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एकसमान वृत्तीय गति (Uniform circular motion) में कौन-सी भौतिक राशि स्थिर रहती है?',
    'In uniform circular motion, which physical quantity remains constant?',
    ['चाल और गतिज ऊर्जा', 'Speed and kinetic energy'],
    [
      ['वेग', 'Velocity'],
      ['त्वरण', 'Acceleration'],
      ['संवेग', 'Momentum'],
    ],
    'एकसमान वृत्तीय गति में दिशा लगातार बदलने से वेग, त्वरण और संवेग बदलते रहते हैं, परंतु चाल और गतिज ऊर्जा अचर रहती हैं।',
    'In uniform circular motion, direction continuously changes so velocity, acceleration, and momentum change, while speed and kinetic energy remain constant.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'यदि कोई वस्तु 4 मीटर उत्तर दिशा में जाकर फिर 3 मीटर पूर्व दिशा में जाती है, तो उसका कुल विस्थापन कितना होगा?',
    'If an object moves 4 m north and then 3 m east, what is its net displacement?',
    ['5 मीटर', '5 m'],
    [
      ['7 मीटर', '7 m'],
      ['1 मीटर', '1 m'],
      ['6 मीटर', '6 m'],
    ],
    'उत्तर और पूर्व दिशाएँ परस्पर लंबवत हैं, अतः पाइथागोरस प्रमेय से विस्थापन = √(4² + 3²) = √25 = 5 मीटर होगा।',
    'North and east are perpendicular, so by Pythagoras theorem, displacement = √(4² + 3²) = 5 m.',
    'MEDIUM',
    { formulaHi: 'विस्थापन = √(x² + y²)', formulaEn: 'd = √(x² + y²)' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'वेग-समय (v-t) ग्राफ के नीचे का क्षेत्रफल किस भौतिक राशि को दर्शाता है?',
    'The area under a velocity-time (v-t) graph represents which physical quantity?',
    ['विस्थापन (या दूरी)', 'Displacement (or distance)'],
    [
      ['त्वरण', 'Acceleration'],
      ['बल', 'Force'],
      ['संवेग', 'Momentum'],
    ],
    'वेग-समय ग्राफ का ढाल (Slope) त्वरण बताता है, जबकि ग्राफ के नीचे घिरा क्षेत्रफल विस्थापन को व्यक्त करता है।',
    'The slope of a v-t graph gives acceleration, whereas the area under the v-t curve represents displacement.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक कार विराम अवस्था से 2 m/s² के एकसमान त्वरण से चलना प्रारंभ करती है। 5 सेकंड बाद उसका वेग क्या होगा?',
    'A car starts from rest with a uniform acceleration of 2 m/s². What will be its velocity after 5 seconds?',
    ['10 मीटर/सेकंड', '10 m/s'],
    [
      ['7 मीटर/सेकंड', '7 m/s'],
      ['25 मीटर/सेकंड', '25 m/s'],
      ['2.5 मीटर/सेकंड', '2.5 m/s'],
    ],
    'गति के प्रथम समीकरण v = u + at से, यहाँ u = 0, a = 2 m/s², t = 5 s; अतः v = 0 + 2 × 5 = 10 m/s।',
    'Using the first equation of motion v = u + at with u = 0, a = 2 m/s², t = 5 s gives v = 10 m/s.',
    'MEDIUM',
    { formulaHi: 'v = u + at', formulaEn: 'v = u + at' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'प्रक्षेप्य गति (Projectile motion) में अधिकतम क्षैतिज परास (Range) प्राप्त करने के लिए वस्तु को किस कोण पर फेंका जाना चाहिए?',
    'At what angle should a projectile be launched to achieve maximum horizontal range?',
    ['45°', '45°'],
    [
      ['30°', '30°'],
      ['60°', '60°'],
      ['90°', '90°'],
    ],
    'क्षैतिज परास R = (u² sin 2θ)/g होती है। sin 2θ का अधिकतम मान 1 होता है जब 2θ = 90°, अर्थात θ = 45° हो।',
    'Horizontal range R = (u² sin 2θ)/g is maximum when sin 2θ = 1, which occurs at θ = 45°.',
    'MEDIUM',
    { formulaHi: 'R = (u² sin 2θ) / g', formulaEn: 'R = (u² sin 2θ) / g' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'न्यूटन के गति के किस नियम को "जड़त्व का नियम" (Law of Inertia) भी कहा जाता है?',
    'Which of Newton’s laws of motion is also known as the "Law of Inertia"?',
    ['प्रथम नियम', 'First Law'],
    [
      ['द्वितीय नियम', 'Second Law'],
      ['तृतीय नियम', 'Third Law'],
      ['गुरुत्वाकर्षण नियम', 'Law of Gravitation'],
    ],
    'न्यूटन के प्रथम नियम के अनुसार, कोई वस्तु अपनी विराम या एकसमान गति की अवस्था में तब तक बनी रहती है जब तक उस पर कोई बाह्य असंतुलित बल न लगाया जाए।',
    'According to Newton’s First Law, an object continues in its state of rest or uniform motion unless acted upon by an external unbalanced force.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी वस्तु का जड़त्व (Inertia) किस भौतिक राशि पर निर्भर करता है?',
    'On which physical quantity does the inertia of an object depend?',
    ['द्रव्यमान', 'Mass'],
    [
      ['वेग', 'Velocity'],
      ['आयतन', 'Volume'],
      ['आकार', 'Shape'],
    ],
    'जड़त्व द्रव्यमान की माप है। किसी वस्तु का द्रव्यमान जितना अधिक होगा, उसका जड़त्व भी उतना ही अधिक होगा।',
    'Mass is the measure of inertia; the greater the mass of an object, the greater is its inertia.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'चलती हुई बस के अचानक रुकने पर यात्री आगे की ओर क्यों झुक जाते हैं?',
    'Why do passengers lean forward when a moving bus stops suddenly?',
    ['गति के जड़त्व के कारण', 'Due to inertia of motion'],
    [
      ['विराम के जड़त्व के कारण', 'Due to inertia of rest'],
      ['अभिकेंद्रीय बल के कारण', 'Due to centripetal force'],
      ['गुरुत्वाकर्षण के कारण', 'Due to gravity'],
    ],
    'बस के रुकने पर यात्री के पैर बस के साथ विराम में आ जाते हैं, किंतु शरीर का ऊपरी भाग गति के जड़त्व के कारण आगे चलता रहता है।',
    'When the bus stops, passengers’ feet stop with the bus while the upper body tends to keep moving forward due to inertia of motion.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'कंबल को डंडे से पीटने पर उसमें से धूल के कण क्यों झड़ जाते हैं?',
    'Why do dust particles fall out when a blanket or carpet is beaten with a stick?',
    ['विराम के जड़त्व के कारण', 'Due to inertia of rest'],
    [
      ['गति के जड़त्व के कारण', 'Due to inertia of motion'],
      ['घर्षण के कारण', 'Due to friction'],
      ['दाबांतर के कारण', 'Due to pressure difference'],
    ],
    'कंबल को पीटने पर कंबल गतिमान हो जाता है, परंतु धूल के कण विराम के जड़त्व के कारण अपने स्थान पर बने रहते हैं और नीचे गिर जाते हैं।',
    'Beating sets the blanket in motion while the dust particles remain at rest due to inertia of rest and fall off.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'न्यूटन के गति के किस नियम से बल का परिमाणात्मक व्यंजक (F = ma) प्राप्त होता है?',
    'Which of Newton’s laws provides the quantitative formula for force (F = ma)?',
    ['द्वितीय नियम', 'Second Law'],
    [
      ['प्रथम नियम', 'First Law'],
      ['तृतीय नियम', 'Third Law'],
      ['संवेग संरक्षण नियम', 'Law of conservation of momentum'],
    ],
    'न्यूटन के द्वितीय नियम के अनुसार किसी वस्तु पर लगने वाला बल उसके संवेग परिवर्तन की दर के अनुक्रमानुपाती होता है, जिससे F = ma प्राप्त होता है।',
    'Newton’s Second Law states that force equals the rate of change of momentum, yielding F = ma.',
    'EASY',
    { formulaHi: 'बल (F) = द्रव्यमान (m) × त्वरण (a)', formulaEn: 'F = ma' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'क्रिकेट के मैदान में कैच पकड़ते समय खिलाड़ी अपने हाथ पीछे की ओर क्यों खींचता है?',
    'Why does a cricket fielder pull his hands backward while catching a fast-moving ball?',
    ['आवेग का समय बढ़ाकर बल कम करने के लिए', 'To increase impact time and reduce the force'],
    [
      ['गेंद का संवेग बढ़ाने के लिए', 'To increase momentum of the ball'],
      ['गेंद की गति बढ़ाने के लिए', 'To increase speed of the ball'],
      ['जड़त्व समाप्त करने के लिए', 'To remove inertia'],
    ],
    'हाथ पीछे खींचने से गेंद को रोकने में लगने वाला समय (Δt) बढ़ जाता है, जिससे F = Δp/Δt के अनुसार हाथ पर लगने वाला आघात बल कम हो जाता है।',
    'Pulling hands back increases the time interval (Δt) over which momentum drops to zero, thereby reducing impact force F = Δp/Δt.',
    'MEDIUM',
    { formulaHi: 'F = Δp / Δt', formulaEn: 'F = Δp / Δt' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    '1 न्यूटन (SI मात्रक) कितने डाइन (CGS मात्रक) के बराबर होता है?',
    '1 Newton (SI unit of force) is equal to how many dynes (CGS unit)?',
    ['10⁵ डाइन', '10⁵ dyne'],
    [
      ['10³ डाइन', '10³ dyne'],
      ['10⁷ डाइन', '10⁷ dyne'],
      ['10⁻⁵ डाइन', '10⁻⁵ dyne'],
    ],
    '1 N = 1 kg × 1 m/s² = 1000 g × 100 cm/s² = 10⁵ g·cm/s² = 10⁵ डाइन।',
    '1 N = 1 kg·m/s² = 1000 g × 100 cm/s² = 10⁵ dynes.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'रॉकेट का ऊपर उड़ना न्यूटन के किस नियम और संरक्षण सिद्धांत पर आधारित है?',
    'The propulsion of a rocket works on which Newton’s law and conservation principle?',
    ['तृतीय नियम एवं संवेग संरक्षण', 'Third Law and conservation of momentum'],
    [
      ['प्रथम नियम एवं ऊर्जा संरक्षण', 'First Law and conservation of energy'],
      ['द्वितीय नियम एवं द्रव्यमान संरक्षण', 'Second Law and conservation of mass'],
      ['आर्किमिडीज सिद्धांत', 'Archimedes principle'],
    ],
    'रॉकेट से ईंधन की गैसें तीव्र वेग से नीचे निकलती हैं (क्रिया) और प्रतिक्रिया स्वरूप रॉकेट ऊपर की ओर गति करता है। यह रेखीय संवेग संरक्षण पर आधारित है।',
    'Exhaust gases ejected downward exert an equal upward reaction thrust on the rocket, obeying Newton’s Third Law and conservation of linear momentum.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'नाव से किनारे पर कूदते समय नाव का पीछे की ओर हट जाना न्यूटन के किस नियम का उदाहरण है?',
    'A boat moving backward when a person jumps forward onto the shore illustrates which law?',
    ['न्यूटन का तृतीय नियम', 'Newton’s Third Law'],
    [
      ['न्यूटन का प्रथम नियम', 'Newton’s First Law'],
      ['न्यूटन का द्वितीय नियम', 'Newton’s Second Law'],
      ['पास्कल का नियम', 'Pascal’s Law'],
    ],
    'प्रत्येक क्रिया के बराबर और विपरीत प्रतिक्रिया होती है। व्यक्ति आगे कूदने के लिए नाव को पैर से पीछे धकेलता है।',
    'To every action there is an equal and opposite reaction; pushing the boat backward propels the person forward.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'रेखीय संवेग (Linear Momentum) का SI मात्रक क्या होता है?',
    'What is the SI unit of linear momentum?',
    ['किग्रा·मीटर/सेकंड (kg·m/s)', 'kg·m/s'],
    [
      ['किग्रा·मीटर/सेकंड²', 'kg·m/s²'],
      ['न्यूटन/सेकंड', 'N/s'],
      ['जूल·सेकंड', 'J·s'],
    ],
    'द्रव्यमान और वेग के गुणनफल को संवेग (p = mv) कहते हैं, अतः इसका SI मात्रक kg·m/s (या N·s) होता है।',
    'Momentum is the product of mass and velocity (p = mv), so its SI unit is kg·m/s (equivalent to N·s).',
    'MEDIUM',
    { formulaHi: 'संवेग (p) = m × v', formulaEn: 'p = m × v' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    '2 किग्रा द्रव्यमान की वस्तु पर 10 न्यूटन का बल लगाने पर उत्पन्न त्वरण कितना होगा?',
    'What acceleration is produced when a force of 10 N acts on a body of mass 2 kg?',
    ['5 मीटर/सेकंड²', '5 m/s²'],
    [
      ['20 मीटर/सेकंड²', '20 m/s²'],
      ['0.2 मीटर/सेकंड²', '0.2 m/s²'],
      ['8 मीटर/सेकंड²', '8 m/s²'],
    ],
    'सूत्र F = ma से, त्वरण a = F / m = 10 N / 2 kg = 5 m/s² होगा।',
    'From F = ma, acceleration a = F / m = 10 / 2 = 5 m/s².',
    'EASY',
    { formulaHi: 'a = F / m', formulaEn: 'a = F / m' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'यदि किसी गतिशील वस्तु का वेग दोगुना कर दिया जाए, तो उसके संवेग पर क्या प्रभाव पड़ेगा?',
    'If the velocity of a moving body is doubled, what happens to its momentum?',
    ['संवेग दोगुना हो जाएगा', 'Momentum becomes double'],
    [
      ['संवेग चार गुना हो जाएगा', 'Momentum becomes four times'],
      ['संवेग आधा रह जाएगा', 'Momentum becomes half'],
      ['संवेग अपरिवर्तित रहेगा', 'Momentum remains unchanged'],
    ],
    'संवेग p = mv होता है, अर्थात द्रव्यमान स्थिर रहने पर संवेग वेग के समानुपाती होता है। अतः वेग दोगुना होने पर संवेग भी दोगुना होगा।',
    'Since p = mv, momentum is directly proportional to velocity for constant mass; doubling velocity doubles momentum.',
    'EASY',
    { formulaHi: 'p = mv', formulaEn: 'p = mv' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'घर्षण बल की दिशा सदैव किस ओर होती है?',
    'In which direction does the force of friction always act?',
    ['सापेक्ष गति की दिशा के विपरीत', 'Opposite to the direction of relative motion'],
    [
      ['सापेक्ष गति की दिशा में', 'In the direction of relative motion'],
      ['सदैव ऊर्ध्वाधर ऊपर की ओर', 'Always vertically upward'],
      ['गति के लंबवत', 'Perpendicular to motion'],
    ],
    'घर्षण एक संपर्क बल है जो दो सतहों के बीच होने वाली सापेक्ष गति या गति की प्रवृत्ति का विरोध करता है।',
    'Friction is a contact force that always opposes the relative motion or tendency of motion between two surfaces.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'स्थैतिक घर्षण (Static), सर्पी घर्षण (Sliding) और लोटनिक घर्षण (Rolling) का घटता हुआ सही क्रम क्या है?',
    'What is the correct decreasing order of static, sliding, and rolling friction?',
    ['स्थैतिक > सर्पी > लोटनिक', 'Static > Sliding > Rolling'],
    [
      ['लोटनिक > सर्पी > स्थैतिक', 'Rolling > Sliding > Static'],
      ['सर्पी > स्थैतिक > लोटनिक', 'Sliding > Static > Rolling'],
      ['स्थैतिक > लोटनिक > सर्पी', 'Static > Rolling > Sliding'],
    ],
    'वस्तु को विराम से चलाने के लिए सर्वाधिक घर्षण (स्थैतिक) पार करना पड़ता है, जबकि लुढ़कने में घर्षण (लोटनिक) सबसे कम होता है।',
    'Static friction is highest, sliding friction is intermediate, and rolling friction is the smallest among the three.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'मशीनों के गतिशील पुर्जों में घर्षण कम करने के लिए बॉल बेयरिंग (Ball bearings) का उपयोग क्यों किया जाता है?',
    'Why are ball bearings used in moving parts of machines to reduce friction?',
    ['सर्पी घर्षण को लोटनिक घर्षण में बदलने के लिए', 'To convert sliding friction into rolling friction'],
    [
      ['लोटनिक घर्षण को स्थैतिक में बदलने के लिए', 'To convert rolling friction into static friction'],
      ['पुर्जों का द्रव्यमान बढ़ाने के लिए', 'To increase mass of parts'],
      ['पृष्ठ क्षेत्रफल बढ़ाने के लिए', 'To increase contact area'],
    ],
    'लोटनिक घर्षण सर्पी घर्षण की तुलना में बहुत कम होता है, इसलिए बॉल बेयरिंग का प्रयोग कर ऊर्जा क्षय और घिसाव कम किया जाता है।',
    'Rolling friction is much smaller than sliding friction; ball bearings replace sliding with rolling to minimize wear and energy loss.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'ठोस सतहों के बीच लगने वाला घर्षण बल किस पर निर्भर नहीं करता है?',
    'On which factor does the force of limiting friction between two dry solid surfaces NOT depend?',
    ['संपर्क सतहों के क्षेत्रफल पर', 'Area of contact surfaces'],
    [
      ['सतहों की प्रकृति (खुरदरेपन) पर', 'Nature (roughness) of surfaces'],
      ['अभिलंब प्रतिक्रिया बल पर', 'Normal reaction force'],
      ['प्रयुक्त पदार्थों के प्रकार पर', 'Type of materials in contact'],
    ],
    'सीमांत घर्षण बल (f = μN) संपर्क सतहों की प्रकृति और अभिलंब प्रतिक्रिया बल पर निर्भर करता है, न कि संपर्क क्षेत्रफल के आकार पर।',
    'Limiting friction (f = μN) depends on the nature of surfaces and normal reaction, and is independent of the apparent area of contact.',
    'HARD',
    { formulaHi: 'f = μN', formulaEn: 'f = μN' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'कैरम बोर्ड पर खेलने से पहले पाउडर क्यों छिड़का जाता है?',
    'Why is fine powder sprinkled on a carrom board before playing?',
    ['घर्षण को कम करने के लिए', 'To reduce friction'],
    [
      ['घर्षण को बढ़ाने के लिए', 'To increase friction'],
      ['स्ट्राइकर का भार बढ़ाने के लिए', 'To increase weight of striker'],
      ['बोर्ड को चमकदार बनाने के लिए', 'To make the board shiny'],
    ],
    'महीन पाउडर बोर्ड और गोटियों की सतह के सूक्ष्म गड्ढों को भरकर उन्हें चिकना बना देता है, जिससे घर्षण कम हो जाता है।',
    'Fine powder fills microscopic irregularities on the board, making it smoother and reducing friction.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'स्कूल के बैग की पट्टियाँ (Straps) चौड़ी क्यों बनाई जाती हैं?',
    'Why are the shoulder straps of school bags made wide?',
    ['संपर्क क्षेत्रफल बढ़ाकर कंधों पर दाब कम करने के लिए', 'To increase area and reduce pressure on shoulders'],
    [
      ['संपर्क क्षेत्रफल घटाकर दाब बढ़ाने के लिए', 'To decrease area and increase pressure'],
      ['बैग का भार कम करने के लिए', 'To decrease weight of the bag'],
      ['घर्षण शून्य करने के लिए', 'To make friction zero'],
    ],
    'दाब = बल / क्षेत्रफल होता है। पट्टियाँ चौड़ी होने से क्षेत्रफल बढ़ जाता है और कंधों पर पड़ने वाला दाब कम हो जाता है।',
    'Since pressure = force / area, wider straps distribute the weight over a larger area, reducing pressure on the shoulders.',
    'EASY',
    { formulaHi: 'दाब (P) = F / A', formulaEn: 'P = F / A' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'दलदल में फँसे व्यक्ति को लेट जाने की सलाह क्यों दी जाती है?',
    'Why is a person stuck in a swamp or quicksand advised to lie down flat?',
    ['क्षेत्रफल बढ़ने से शरीर द्वारा लगाया गया दाब कम हो जाता है', 'Larger contact area reduces pressure exerted on the swamp'],
    [
      ['शरीर का भार कम हो जाता है', 'Body weight decreases'],
      ['गुरुत्वाकर्षण घट जाता है', 'Gravity decreases'],
      ['द्रव्यमान घट जाता है', 'Mass decreases'],
    ],
    'खड़े रहने की तुलना में लेटने पर संपर्क क्षेत्रफल बहुत बढ़ जाता है, जिससे दलदल पर दाब कम होता है और व्यक्ति अंदर नहीं धँसता।',
    'Lying flat increases the surface area in contact, drastically reducing pressure and preventing further sinking.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'हाइड्रोलिक ब्रेक और हाइड्रोलिक लिफ्ट किस वैज्ञानिक नियम पर कार्य करते हैं?',
    'On which scientific law do hydraulic brakes and hydraulic lifts work?',
    ['पास्कल का नियम', 'Pascal’s Law'],
    [
      ['बर्नौली का प्रमेय', 'Bernoulli’s theorem'],
      ['आर्किमिडीज का सिद्धांत', 'Archimedes’ principle'],
      ['बॉयल का नियम', 'Boyle’s law'],
    ],
    'पास्कल के नियम के अनुसार, किसी बंद द्रव के किसी एक भाग पर लगाया गया दाब बिना क्षय हुए सभी दिशाओं में समान रूप से संचरित होता है।',
    'According to Pascal’s law, pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and container walls.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'बांधों (Dams) की दीवारें ऊपर की तुलना में नीचे से अधिक मोटी क्यों बनाई जाती हैं?',
    'Why are the walls of a dam made much thicker at the bottom than at the top?',
    ['गहराई बढ़ने के साथ जल का दाब बढ़ता है', 'Water pressure increases with depth'],
    [
      ['नीचे जल का घनत्व कम होता है', 'Water density is lower at bottom'],
      ['सजावट और संतुलन के लिए', 'Only for decoration'],
      ['ऊपर दाब सर्वाधिक होता है', 'Pressure is highest at the top'],
    ],
    'द्रव का दाब P = hρg होता है, अर्थात गहराई (h) बढ़ने पर दाब बढ़ता है। नीचे के अत्यधिक दाब को सहने के लिए दीवारें मोटी बनाई जाती हैं।',
    'Fluid pressure P = hρg increases directly with depth (h), so the dam base must be thicker to withstand higher water pressure.',
    'EASY',
    { formulaHi: 'द्रव दाब (P) = hρg', formulaEn: 'P = hρg' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'तेज आँधी आने पर कमजोर घरों की टीन की छतें ऊपर की ओर क्यों उड़ जाती हैं?',
    'Why are tin roofs of weak houses blown upward during a strong storm?',
    ['छत के ऊपर तेज हवा से दाब कम हो जाता है (बर्नौली प्रमेय)', 'High wind speed above reduces pressure (Bernoulli’s principle)'],
    [
      ['छत के ऊपर वायुदाब बढ़ जाता है', 'Air pressure increases above the roof'],
      ['छत के नीचे दाब शून्य हो जाता है', 'Pressure below the roof becomes zero'],
      ['हवा गुरुत्वाकर्षण कम कर देती है', 'Wind reduces gravity'],
    ],
    'बर्नौली के सिद्धांत के अनुसार जहाँ वायु का वेग अधिक होता है वहाँ दाब कम हो जाता है। छत के ऊपर कम दाब और नीचे अधिक दाब होने से छत ऊपर उठ जाती है।',
    'By Bernoulli’s principle, high-speed wind above the roof lowers pressure compared to the still air below, lifting the roof.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'एक झील में तली से ऊपर उठते समय हवा के बुलबुले के आकार में क्या परिवर्तन होता है?',
    'What happens to the size of an air bubble as it rises from the bottom of a lake to the surface?',
    ['आकार बढ़ता जाता है', 'Its size increases'],
    [
      ['आकार घटता जाता है', 'Its size decreases'],
      ['आकार समान रहता है', 'Its size remains the same'],
      ['आकार पहले घटता है फिर स्थिर रहता है', 'First decreases then stays constant'],
    ],
    'तली से ऊपर आने पर जल की गहराई कम होने से बाहरी दाब घटता जाता है, जिससे बॉयल के नियम (PV = नियतांक) के अनुसार बुलबुले का आयतन बढ़ता है।',
    'As the bubble rises, depth and external water pressure decrease, so by Boyle’s law (PV = constant), its volume increases.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'जब किसी वस्तु को किसी द्रव में आंशिक या पूर्ण रूप से डुबोया जाता है, तो उसके भार में कमी किसके बराबर होती है?',
    'When a body is partially or wholly immersed in a fluid, the apparent loss in weight equals:',
    ['वस्तु द्वारा हटाए गए द्रव के भार के बराबर', 'The weight of the fluid displaced by the body'],
    [
      ['वस्तु के कुल द्रव्यमान के बराबर', 'Total mass of the body'],
      ['बर्तन में रखे कुल द्रव के भार के बराबर', 'Weight of total liquid in container'],
      ['द्रव के घनत्व के बराबर', 'Density of the liquid'],
    ],
    'आर्किमिडीज के सिद्धांत के अनुसार, किसी वस्तु पर ऊपर की ओर लगने वाला उत्प्लावन बल उसके द्वारा विस्थापित द्रव के भार के बराबर होता है।',
    'According to Archimedes’ principle, the upward buoyant force on an immersed body equals the weight of the fluid it displaces.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'लोहे की कील पानी में डूब जाती है, जबकि लोहे से बना विशाल जहाज पानी पर तैरता रहता है। इसका मुख्य कारण क्या है?',
    'An iron nail sinks in water whereas a large iron ship floats. Why?',
    ['जहाज का औसत घनत्व पानी से कम होता है और वह अधिक पानी हटाता है', 'The ship has lower average density than water and displaces more water'],
    [
      ['जहाज पर गुरुत्वाकर्षण कार्य नहीं करता', 'Gravity does not act on the ship'],
      ['कील पर उत्प्लावन बल नहीं लगता', 'No buoyant force acts on the nail'],
      ['जहाज का लोहा हल्का होता है', 'Iron of ship is lighter'],
    ],
    'जहाज को खोखला और विशिष्ट आकार का बनाया जाता है जिससे वह अपने भार के बराबर पानी विस्थापित कर सके और उसका औसत घनत्व जल से कम रहे।',
    'Because of its hollow structure, the ship’s average density is less than water, allowing it to displace water equal to its weight.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'जब कोई जहाज नदी (मीठे पानी) से समुद्र (खारे पानी) में प्रवेश करता है, तो वह थोड़ा ऊपर क्यों उठ जाता है?',
    'When a ship sails from a river into the sea, why does it rise slightly higher?',
    ['समुद्र के खारे पानी का घनत्व नदी के पानी से अधिक होता है', 'Sea water has higher density than river water'],
    [
      ['समुद्र के पानी का घनत्व कम होता है', 'Sea water has lower density'],
      ['समुद्र में गुरुत्वाकर्षण कम होता है', 'Gravity is less in the sea'],
      ['जहाज का भार कम हो जाता है', 'Weight of ship decreases'],
    ],
    'खारे पानी का घनत्व अधिक होने से समान उत्प्लावन बल पाने के लिए जहाज को कम आयतन पानी विस्थापित करना पड़ता है, अतः वह थोड़ा ऊपर उठ जाता है।',
    'Salt water is denser than fresh water, so less submerged volume is needed to displace water equal to the ship’s weight.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'एक बीकर में पानी पर बर्फ का टुकड़ा तैर रहा है। जब बर्फ पूरी तरह पिघल जाएगी, तो पानी के तल पर क्या प्रभाव पड़ेगा?',
    'A piece of ice is floating in a beaker of water. When the ice melts completely, what happens to the water level?',
    ['पानी का तल अपरिवर्तित रहेगा', 'The water level remains unchanged'],
    [
      ['पानी का तल ऊपर उठ जाएगा', 'The water level rises'],
      ['पानी का तल नीचे गिर जाएगा', 'The water level falls'],
      ['पहले बढ़ेगा फिर घटेगा', 'First rises then falls'],
    ],
    'तैरती हुई बर्फ अपने भार के बराबर पानी विस्थापित करती है। पिघलने पर बने पानी का आयतन ठीक उतना ही होता है जितना विस्थापित पानी का था, अतः तल नहीं बदलता।',
    'Floating ice displaces water equal to its own weight. Upon melting, it forms water of exact volume equal to the displaced water, so the level stays the same.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पारे (Mercury) से भरे बर्तन में लोहे का टुकड़ा क्यों तैरता रहता है?',
    'Why does a piece of iron float on mercury?',
    ['लोहे का घनत्व पारे के घनत्व से कम होता है', 'Density of iron is less than that of mercury'],
    [
      ['पारे का घनत्व लोहे से कम होता है', 'Density of mercury is less than iron'],
      ['पारे में पृष्ठ तनाव नहीं होता', 'Mercury has no surface tension'],
      ['लोहा पारे से रासायनिक अभिक्रिया करता है', 'Iron reacts chemically with mercury'],
    ],
    'लोहे का घनत्व लगभग 7.8 g/cm³ जबकि पारे का घनत्व 13.6 g/cm³ होता है। कम घनत्व वाली वस्तु अधिक घनत्व वाले द्रव में तैरती है।',
    'Iron has a density of ~7.8 g/cm³ while mercury is 13.6 g/cm³; since iron is less dense than mercury, it floats.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पदार्थ के घनत्व और जल के घनत्व के अनुपात को क्या कहते हैं?',
    'What is the ratio of the density of a substance to the density of water called?',
    ['आपेक्षिक घनत्व (Relative density)', 'Relative density'],
    [
      ['श्यानता गुणांक', 'Coefficient of viscosity'],
      ['विशिष्ट ऊष्मा', 'Specific heat'],
      ['पृष्ठ तनाव', 'Surface tension'],
    ],
    'आपेक्षिक घनत्व दो समान राशियों (घनत्वों) का अनुपात है, इसलिए इसका कोई मात्रक नहीं होता (यह एक विमाहीन संख्या है)।',
    'Relative density (specific gravity) is the ratio of a substance’s density to water’s density at 4°C, so it has no unit.',
    'EASY',
    { formulaHi: 'आपेक्षिक घनत्व = पदार्थ का घनत्व / जल का घनत्व', formulaEn: 'RD = ρ_substance / ρ_water' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'सार्वत्रिक गुरुत्वाकर्षण नियतांक (G) का मान और SI मात्रक क्या होता है?',
    'What is the value and SI unit of the universal gravitational constant (G)?',
    ['6.67 × 10⁻¹¹ N·m²/kg²', '6.67 × 10⁻¹¹ N·m²/kg²'],
    [
      ['9.8 m/s²', '9.8 m/s²'],
      ['6.67 × 10¹¹ N·m²/kg²', '6.67 × 10¹¹ N·m²/kg²'],
      ['6.022 × 10²³ N·m²/kg²', '6.022 × 10²³ N·m²/kg²'],
    ],
    'न्यूटन के गुरुत्वाकर्षण नियम F = Gm₁m₂/r² में G एक सार्वत्रिक नियतांक है जिसका मान पूरे ब्रह्मांड में 6.67 × 10⁻¹¹ N·m²/kg² स्थिर रहता है।',
    'In Newton’s law of gravitation F = Gm₁m₂/r², G is universal across space and equals 6.67 × 10⁻¹¹ N·m²/kg².',
    'MEDIUM',
    { formulaHi: 'F = G(m₁m₂)/r²', formulaEn: 'F = G(m₁m₂)/r²' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का औसत मान कितना होता है?',
    'What is the average value of acceleration due to gravity (g) on the Earth’s surface?',
    ['9.8 मीटर/सेकंड²', '9.8 m/s²'],
    [
      ['6.67 मीटर/सेकंड²', '6.67 m/s²'],
      ['1.63 मीटर/सेकंड²', '1.63 m/s²'],
      ['11.2 मीटर/सेकंड²', '11.2 m/s²'],
    ],
    'पृथ्वी की सतह पर g = GM/R² का मान लगभग 9.8 m/s² होता है।',
    'On Earth’s surface, acceleration due to gravity g = GM/R² is approximately 9.8 m/s².',
    'EASY',
    { formulaHi: 'g = GM / R²', formulaEn: 'g = GM / R²' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी पर गुरुत्वीय त्वरण (g) का मान सर्वाधिक और न्यूनतम क्रमशः कहाँ होता है?',
    'Where is the value of acceleration due to gravity (g) maximum and minimum on the Earth’s surface respectively?',
    ['ध्रुवों पर सर्वाधिक और विषुवत रेखा पर न्यूनतम', 'Maximum at the poles and minimum at the equator'],
    [
      ['विषुवत रेखा पर सर्वाधिक और ध्रुवों पर न्यूनतम', 'Maximum at the equator and minimum at the poles'],
      ['पृथ्वी के केंद्र पर सर्वाधिक', 'Maximum at the Earth’s centre'],
      ['सभी स्थानों पर बिल्कुल समान', 'Exactly equal everywhere'],
    ],
    'पृथ्वी ध्रुवों पर चपटी है (त्रिज्या कम) और घूर्णन का प्रभाव विषुवत रेखा पर अधिक होता है, इसलिए g ध्रुवों पर अधिकतम और विषुवत रेखा पर न्यूनतम होता है।',
    'Due to Earth’s equatorial bulge and rotation, g is maximum at the poles and minimum at the equator (and zero at Earth’s centre).',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी के ठीक केंद्र पर किसी वस्तु का भार कितना होगा?',
    'What will be the weight of a body at the exact centre of the Earth?',
    ['शून्य', 'Zero'],
    [
      ['सतह से दोगुना', 'Double its surface weight'],
      ['सतह के बराबर', 'Same as on the surface'],
      ['अनंत', 'Infinite'],
    ],
    'पृथ्वी के केंद्र पर गुरुत्वीय त्वरण g का मान शून्य हो जाता है, इसलिए भार W = mg भी शून्य होगा (यद्यपि द्रव्यमान अपरिवर्तित रहेगा)।',
    'At the centre of the Earth, acceleration due to gravity g is zero, so weight W = mg becomes zero, though mass remains unchanged.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'यदि किसी वस्तु का भार पृथ्वी पर 60 न्यूटन है, तो चंद्रमा की सतह पर उसका भार कितना होगा?',
    'If the weight of an object on Earth is 60 N, what will be its weight on the surface of the Moon?',
    ['10 न्यूटन', '10 N'],
    [
      ['60 न्यूटन', '60 N'],
      ['360 न्यूटन', '360 N'],
      ['6 न्यूटन', '6 N'],
    ],
    'चंद्रमा पर गुरुत्वीय त्वरण पृथ्वी के g का 1/6 भाग होता है, अतः चंद्रमा पर भार = 60 / 6 = 10 न्यूटन होगा।',
    'The Moon’s gravity is 1/6th of Earth’s gravity, so the weight on the Moon is 60 / 6 = 10 N.',
    'EASY',
    { formulaHi: 'W_moon = W_earth / 6', formulaEn: 'W_moon = W_earth / 6' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'किसी वस्तु को चंद्रमा पर ले जाने पर उसके द्रव्यमान (Mass) में क्या परिवर्तन होता है?',
    'What happens to the mass of an object when it is taken from Earth to the Moon?',
    ['द्रव्यमान अपरिवर्तित रहता है', 'Mass remains unchanged'],
    [
      ['द्रव्यमान 1/6 रह जाता है', 'Mass becomes 1/6th'],
      ['द्रव्यमान 6 गुना हो जाता है', 'Mass becomes 6 times'],
      ['द्रव्यमान शून्य हो जाता है', 'Mass becomes zero'],
    ],
    'द्रव्यमान वस्तु में निहित पदार्थ की मात्रा है जो स्थान बदलने पर भी स्थिर रहती है, जबकि भार (W = mg) गुरुत्व के अनुसार बदलता है।',
    'Mass is the quantity of matter in a body and stays constant everywhere, whereas weight changes with gravity.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी से किसी वस्तु को गुरुत्वाकर्षण क्षेत्र से बाहर अंतरिक्ष में भेजने के लिए आवश्यक पलायन वेग (Escape velocity) कितना होता है?',
    'What is the escape velocity required for an object to leave Earth’s gravitational field?',
    ['11.2 किमी/सेकंड', '11.2 km/s'],
    [
      ['7.9 किमी/सेकंड', '7.9 km/s'],
      ['9.8 किमी/सेकंड', '9.8 km/s'],
      ['2.4 किमी/सेकंड', '2.4 km/s'],
    ],
    'पृथ्वी का पलायन वेग v_e = √(2gR) लगभग 11.2 km/s है। चंद्रमा का पलायन वेग कम (2.38 km/s) होने के कारण वहाँ वायुमंडल नहीं रुक पाता।',
    'Earth’s escape velocity v_e = √(2gR) is approximately 11.2 km/s. The Moon’s low escape velocity (2.38 km/s) explains its lack of atmosphere.',
    'MEDIUM',
    { formulaHi: 'v_e = √(2gR)', formulaEn: 'v_e = √(2gR)' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'भू-स्थिर उपग्रह (Geostationary satellite) का परिक्रमण काल कितना होता है?',
    'What is the time period of revolution of a geostationary satellite?',
    ['24 घंटे', '24 hours'],
    [
      ['12 घंटे', '12 hours'],
      ['84.6 मिनट', '84.6 minutes'],
      ['365 दिन', '365 days'],
    ],
    'भू-स्थिर उपग्रह पृथ्वी से लगभग 36,000 किमी की ऊँचाई पर पश्चिम से पूर्व की ओर 24 घंटे में एक परिक्रमा पूरी करता है, जिससे वह पृथ्वी के सापेक्ष स्थिर प्रतीत होता है।',
    'A geostationary satellite orbits Earth at ~36,000 km altitude with a 24-hour period from west to east, appearing stationary relative to Earth.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'यदि निर्वात में एक भारी लोहे की गेंद और एक हल्के पंख को समान ऊँचाई से एक साथ गिराया जाए, तो जमीन पर कौन पहले पहुँचेगा?',
    'If a heavy iron ball and a light feather are dropped simultaneously from the same height in a vacuum, which will reach the ground first?',
    ['दोनों एक साथ पहुँचेंगे', 'Both will reach the ground together'],
    [
      ['लोहे की गेंद पहले पहुँचेगी', 'The iron ball will reach first'],
      ['पंख पहले पहुँचेगा', 'The feather will reach first'],
      ['दोनों हवा में लटके रहेंगे', 'Both will float in mid-air'],
    ],
    'गुरुत्वीय त्वरण g वस्तु के द्रव्यमान पर निर्भर नहीं करता। निर्वात में वायु प्रतिरोध न होने से दोनों समान त्वरण से गिरेंगे और एक साथ पहुँचेंगे।',
    'Acceleration due to gravity g is independent of the falling body’s mass. Without air resistance in a vacuum, both hit the ground together.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक सरल लोलक (Simple pendulum) का आवर्तकाल (T) किस पर निर्भर करता है?',
    'On what factor does the time period (T) of a simple pendulum depend?',
    ['लोलक की प्रभावी लंबाई और गुरुत्वीय त्वरण पर', 'Effective length of the pendulum and acceleration due to gravity'],
    [
      ['गोलक के द्रव्यमान पर', 'Mass of the bob'],
      ['गोलक के पदार्थ पर', 'Material of the bob'],
      ['केवल दोलन के आयाम पर', 'Only amplitude of oscillation'],
    ],
    'सरल लोलक का आवर्तकाल T = 2π√(L/g) होता है। यह गोलक के द्रव्यमान पर निर्भर नहीं करता।',
    'Time period T = 2π√(L/g) depends on length L and gravity g, and is independent of the bob’s mass.',
    'MEDIUM',
    { formulaHi: 'T = 2π√(L / g)', formulaEn: 'T = 2π√(L / g)' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'गर्मियों में लोलक घड़ियाँ सुस्त (धीमी) क्यों हो जाती हैं?',
    'Why do pendulum clocks tend to run slow in summer?',
    ['लोलक की लंबाई बढ़ने से आवर्तकाल बढ़ जाता है', 'Length of pendulum increases, increasing its time period'],
    [
      ['लोलक का द्रव्यमान बढ़ जाता है', 'Mass of pendulum increases'],
      ['लोलक की लंबाई घट जाती है', 'Length of pendulum decreases'],
      ['गर्मियों में g बढ़ जाता है', 'g increases in summer'],
    ],
    'गर्मी में ऊष्मीय प्रसार के कारण धातु के लोलक की लंबाई (L) बढ़ जाती है, जिससे आवर्तकाल T = 2π√(L/g) बढ़ता है और घड़ी सुस्त हो जाती है।',
    'Thermal expansion increases pendulum length L in summer, increasing the time period T = 2π√(L/g) and making the clock run slow.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'यदि झूले पर बैठी कोई लड़की खड़ी हो जाए, तो झूले के आवर्तकाल पर क्या प्रभाव पड़ेगा?',
    'If a girl sitting on a swing stands up, what happens to the time period of the swing?',
    ['आवर्तकाल घट जाएगा (झूला तेज चलेगा)', 'Time period decreases (swing moves faster)'],
    [
      ['आवर्तकाल बढ़ जाएगा', 'Time period increases'],
      ['कोई प्रभाव नहीं पड़ेगा', 'No effect'],
      ['झूला रुक जाएगा', 'Swing will stop'],
    ],
    'खड़े होने पर गुरुत्व केंद्र ऊपर उठ जाता है जिससे लोलक की प्रभावी लंबाई (L) कम हो जाती है और आवर्तकाल घट जाता है।',
    'Standing up raises the centre of gravity, shortening the effective length L and thus decreasing the time period.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'ग्रहों की गति से संबंधित तीन नियमों का प्रतिपादन किस वैज्ञानिक ने किया था?',
    'Which scientist formulated the three laws of planetary motion?',
    ['जोहान्स केप्लर', 'Johannes Kepler'],
    [
      ['गैलीलियो गैलीली', 'Galileo Galilei'],
      ['निकोलस कोपरनिकस', 'Nicolaus Copernicus'],
      ['आइजैक न्यूटन', 'Isaac Newton'],
    ],
    'जर्मन खगोलविद जोहान्स केप्लर ने ग्रहों की दीर्घवृत्ताकार कक्षाओं और कक्षीय गति के तीन नियम दिए थे।',
    'German astronomer Johannes Kepler formulated the three laws of planetary motion describing elliptical orbits around the Sun.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'लिफ्ट में ऊपर की ओर त्वरित गति होने पर व्यक्ति को अपना भार कैसा महसूस होता है?',
    'How does a person feel their weight when an elevator accelerates upward?',
    ['अधिक (बढ़ा हुआ)', 'Greater (heavier)'],
    [
      ['कम (घटा हुआ)', 'Less (lighter)'],
      ['शून्य', 'Zero'],
      ['बिल्कुल समान', 'Unchanged'],
    ],
    'लिफ्ट ऊपर की ओर त्वरण a से जाने पर आभासी भार R = m(g + a) हो जाता है, अतः व्यक्ति को अपना भार बढ़ा हुआ प्रतीत होता है।',
    'When accelerating upward at a, the apparent weight R = m(g + a), making the person feel heavier.',
    'MEDIUM',
    { formulaHi: 'R = m(g + a)', formulaEn: 'R = m(g + a)' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'यदि किसी लिफ्ट की रस्सी अचानक टूट जाए और वह मुक्त रूप से नीचे गिरे, तो अंदर खड़े व्यक्ति का आभासी भार कितना होगा?',
    'If the cable of a lift snaps and it falls freely under gravity, what will be the apparent weight of a person inside?',
    ['शून्य (भारहीनता)', 'Zero (weightlessness)'],
    [
      ['वास्तविक भार से दोगुना', 'Double the actual weight'],
      ['वास्तविक भार के बराबर', 'Equal to actual weight'],
      ['वास्तविक भार का आधा', 'Half the actual weight'],
    ],
    'मुक्त पतन में लिफ्ट का त्वरण a = g होता है, इसलिए आभासी भार R = m(g - g) = 0 हो जाता है और भारहीनता की स्थिति उत्पन्न होती है।',
    'During free fall, downward acceleration a = g, so apparent weight R = m(g - g) = 0 (weightlessness).',
    'MEDIUM',
    { formulaHi: 'R = m(g - a)', formulaEn: 'R = m(g - a)' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'सरल मशीनों में यांत्रिक लाभ (Mechanical Advantage) का सूत्र क्या है?',
    'What is the formula for Mechanical Advantage (MA) of a simple machine?',
    ['भार / आयास (Load / Effort)', 'Load / Effort'],
    [
      ['आयास / भार', 'Effort / Load'],
      ['भार × आयास', 'Load × Effort'],
      ['कार्य / समय', 'Work / Time'],
    ],
    'किसी मशीन द्वारा उठाए गए भार (Load) और लगाए गए बल या आयास (Effort) के अनुपात को यांत्रिक लाभ कहते हैं।',
    'Mechanical advantage is the ratio of the load overcome by a machine to the effort applied.',
    'MEDIUM',
    { formulaHi: 'यांत्रिक लाभ = भार / आयास', formulaEn: 'MA = Load / Effort' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'कैंची, पिलास और हैंडपंप का हत्था किस श्रेणी (Class) के उत्तोलक (Lever) के उदाहरण हैं?',
    'Scissors, pliers, and a hand-pump handle belong to which class of lever?',
    ['प्रथम श्रेणी के उत्तोलक', 'First-class lever'],
    [
      ['द्वितीय श्रेणी के उत्तोलक', 'Second-class lever'],
      ['तृतीय श्रेणी के उत्तोलक', 'Third-class lever'],
      ['आनत तल', 'Inclined plane'],
    ],
    'प्रथम श्रेणी के उत्तोलक में आलंब (Fulcrum) भार और आयास के बीच में स्थित होता है, जैसे कैंची, तराजू, पिलास।',
    'In a first-class lever, the fulcrum lies between the load and the effort, as in scissors, pliers, and a seesaw.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'सरौता (Nutcracker) और एक पहिये की कूड़ा गाड़ी (Wheelbarrow) किस श्रेणी के उत्तोलक हैं?',
    'A nutcracker and a wheelbarrow are examples of which class of lever?',
    ['द्वितीय श्रेणी के उत्तोलक', 'Second-class lever'],
    [
      ['प्रथम श्रेणी के उत्तोलक', 'First-class lever'],
      ['तृतीय श्रेणी के उत्तोलक', 'Third-class lever'],
      ['घिरनी', 'Pulley'],
    ],
    'द्वितीय श्रेणी के उत्तोलक में भार (Load) आलंब और आयास के बीच होता है और इसका यांत्रिक लाभ सदैव 1 से अधिक होता है।',
    'In a second-class lever, the load is between the fulcrum and the effort, giving a mechanical advantage always greater than 1.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'चिमटा (Tongs) और मनुष्य का हाथ किस श्रेणी के उत्तोलक के उदाहरण हैं?',
    'Forceps/tongs and the human forearm are examples of which class of lever?',
    ['तृतीय श्रेणी के उत्तोलक', 'Third-class lever'],
    [
      ['प्रथम श्रेणी के उत्तोलक', 'First-class lever'],
      ['द्वितीय श्रेणी के उत्तोलक', 'Second-class lever'],
      ['पेंच (Screw)', 'Screw'],
    ],
    'तृतीय श्रेणी के उत्तोलक में आयास (Effort) आलंब और भार के बीच लगता है, जैसे चिमटा, झाड़ू, और मनुष्य की कोहनी-बाँह।',
    'In a third-class lever, the effort is applied between the fulcrum and the load, as in tongs and the human forearm.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'जब कोई वस्तु किसी वृत्ताकार पथ पर घूमती है, तो केंद्र की ओर लगने वाला बल क्या कहलाता है?',
    'When an object moves along a circular path, the force acting towards the centre is called:',
    ['अभिकेंद्रीय बल (Centripetal force)', 'Centripetal force'],
    [
      ['अपकेंद्रीय बल (Centrifugal force)', 'Centrifugal force'],
      ['घर्षण बल', 'Frictional force'],
      ['उत्प्लावन बल', 'Buoyant force'],
    ],
    'वृत्तीय गति बनाए रखने के लिए केंद्र की ओर लगने वाला आवश्यक वास्तविक बल अभिकेंद्रीय बल (F = mv²/r) है।',
    'Centripetal force (F = mv²/r) is the real inward force required to keep a body moving in a circular path.',
    'EASY',
    { formulaHi: 'F = mv² / r', formulaEn: 'F = mv² / r' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'पृथ्वी के चारों ओर चंद्रमा की परिक्रमा के लिए आवश्यक अभिकेंद्रीय बल कहाँ से प्राप्त होता है?',
    'What provides the necessary centripetal force for the Moon to orbit the Earth?',
    ['पृथ्वी और चंद्रमा के बीच गुरुत्वाकर्षण बल', 'Gravitational force between Earth and Moon'],
    [
      ['सौर पवन दबाव', 'Solar wind pressure'],
      ['पृथ्वी का चुंबकीय क्षेत्र', 'Earth’s magnetic field'],
      ['वायुमंडलीय घर्षण', 'Atmospheric friction'],
    ],
    'पृथ्वी का गुरुत्वाकर्षण बल चंद्रमा को उसकी कक्षा में बांधे रखने हेतु आवश्यक अभिकेंद्रीय बल प्रदान करता है।',
    'Gravitational attraction between Earth and the Moon supplies the centripetal force keeping the Moon in orbit.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक व्यक्ति वृत्ताकार ट्रैक पर एक चक्कर पूरा करके वापस प्रारंभिक बिंदु पर आ जाता है। उसका कुल विस्थापन कितना होगा?',
    'A runner completes one full lap on a circular track and returns to the starting point. What is the net displacement?',
    ['शून्य', 'Zero'],
    [
      ['2πr', '2πr'],
      ['πr²', 'πr²'],
      ['2r', '2r'],
    ],
    'प्रारंभिक और अंतिम बिंदु एक ही होने पर विस्थापन शून्य होता है, यद्यपि तय की गई दूरी परिधि (2πr) के बराबर होती है।',
    'When initial and final positions coincide, net displacement is zero even though distance covered equals 2πr.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'आवेग (Impulse) का मान किसके बराबर होता है?',
    'Impulse is equal to which of the following?',
    ['संवेग में परिवर्तन', 'Change in momentum'],
    [
      ['बल / समय', 'Force / time'],
      ['कार्य × समय', 'Work × time'],
      ['गतिज ऊर्जा में परिवर्तन', 'Change in kinetic energy'],
    ],
    'बल और समयांतराल के गुणनफल को आवेग (J = F × Δt) कहते हैं, जो वस्तु के संवेग में हुए परिवर्तन (Δp) के बराबर होता है।',
    'Impulse (J = F × Δt) equals the total change in linear momentum (Δp) of the object.',
    'MEDIUM',
    { formulaHi: 'आवेग (J) = F × Δt = Δp', formulaEn: 'J = F × Δt = Δp' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'दो वस्तुओं के बीच प्रत्यास्थ टक्कर (Elastic collision) में क्या संरक्षित रहता है?',
    'In an elastic collision between two bodies, which quantities are conserved?',
    ['संवेग और गतिज ऊर्जा दोनों', 'Both momentum and kinetic energy'],
    [
      ['केवल संवेग, गतिज ऊर्जा नहीं', 'Only momentum, not kinetic energy'],
      ['केवल गतिज ऊर्जा, संवेग नहीं', 'Only kinetic energy, not momentum'],
      ['दोनों नष्ट हो जाते हैं', 'Both are lost'],
    ],
    'पूर्णतः प्रत्यास्थ टक्कर में रेखीय संवेग तथा गतिज ऊर्जा दोनों संरक्षित रहते हैं, जबकि अप्रत्यास्थ टक्कर में केवल संवेग संरक्षित रहता है।',
    'In an elastic collision, both linear momentum and kinetic energy are conserved; in inelastic collisions, only momentum is conserved.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'प्रकृति में पाए जाने वाले चारों मूलभूत बलों में सबसे क्षीण (सबसे कमजोर) बल कौन-सा है?',
    'Which of the four fundamental forces of nature is the weakest?',
    ['गुरुत्वाकर्षण बल', 'Gravitational force'],
    [
      ['विद्युत-चुंबकीय बल', 'Electromagnetic force'],
      ['प्रबल नाभिकीय बल', 'Strong nuclear force'],
      ['दुर्बल नाभिकीय बल', 'Weak nuclear force'],
    ],
    'प्रबल नाभिकीय बल सबसे शक्तिशाली है, जबकि गुरुत्वाकर्षण बल चारों मूलभूत बलों में सबसे क्षीण किंतु अनंत परास वाला बल है।',
    'Strong nuclear force is the strongest, whereas gravitational force is the weakest of the four fundamental forces despite its infinite range.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'स्प्रिंग को खींचने या संपीड़ित करने पर उत्पन्न प्रत्यानयन बल (Restoring force) से संबंधित नियम किसका है?',
    'Which law relates to the restoring force produced when a spring is stretched or compressed?',
    ['हुक का नियम', 'Hooke’s Law'],
    [
      ['पास्कल का नियम', 'Pascal’s Law'],
      ['स्टोक्स का नियम', 'Stokes’ Law'],
      ['फैराडे का नियम', 'Faraday’s Law'],
    ],
    'हुक के नियम के अनुसार प्रत्यास्थता की सीमा के भीतर प्रतिबल विकृति के समानुपाती होता है (F = -kx)।',
    'Hooke’s law states that within the elastic limit, stress is directly proportional to strain (F = -kx).',
    'MEDIUM',
    { formulaHi: 'F = -kx', formulaEn: 'F = -kx' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'रबर और स्टील में से कौन अधिक प्रत्यास्थ (More elastic) है?',
    'Between rubber and steel, which is more elastic?',
    ['स्टील', 'Steel'],
    [
      ['रबर', 'Rubber'],
      ['दोनों बराबर प्रत्यास्थ हैं', 'Both are equally elastic'],
      ['स्टील में प्रत्यास्थता नहीं होती', 'Steel has no elasticity'],
    ],
    'भौतिकी में प्रत्यास्थता का माप यंग मापांक (प्रतिबल/विकृति) है। समान बल से स्टील में विरूपण बहुत कम होता है, अतः स्टील रबर से अधिक प्रत्यास्थ है।',
    'In physics, elasticity is measured by Young’s modulus (stress/strain). Steel resists deformation much more strongly than rubber, making it more elastic.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक ट्रेन 72 किमी/घंटा की चाल से चल रही है। मीटर/सेकंड में उसकी चाल क्या होगी?',
    'A train is moving at 72 km/h. What is its speed in m/s?',
    ['20 मीटर/सेकंड', '20 m/s'],
    [
      ['15 मीटर/सेकंड', '15 m/s'],
      ['25 मीटर/सेकंड', '25 m/s'],
      ['36 मीटर/सेकंड', '36 m/s'],
    ],
    'km/h को m/s में बदलने के लिए 5/18 से गुणा करते हैं। अतः 72 × (5/18) = 4 × 5 = 20 m/s।',
    'To convert km/h to m/s, multiply by 5/18. Thus 72 × (5/18) = 20 m/s.',
    'EASY',
    { formulaHi: '1 km/h = 5/18 m/s', formulaEn: '1 km/h = 5/18 m/s' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक बंदूक से गोली चलाने पर बंदूक पीछे की ओर झटका (प्रतिक्षेप) क्यों मारती है?',
    'Why does a gun recoil backward when a bullet is fired?',
    ['रेखीय संवेग के संरक्षण (एवं न्यूटन के तृतीय नियम) के कारण', 'Due to conservation of linear momentum (and Newton’s Third Law)'],
    [
      ['केवल घर्षण बल के कारण', 'Only due to friction'],
      ['गोली के जड़त्व के कारण', 'Due to inertia of bullet only'],
      ['गुरुत्वाकर्षण के कारण', 'Due to gravity'],
    ],
    'गोली दागने से पहले कुल संवेग शून्य होता है; गोली आगे जाने पर संवेग को शून्य बनाए रखने के लिए बंदूक विपरीत दिशा में प्रतिक्षिप्त होती है।',
    'Before firing, total momentum is zero; to conserve linear momentum as the bullet moves forward, the gun recoils backward.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'दूध से क्रीम अलग होने के बाद बचे हुए स्किम्ड दूध का घनत्व मूल दूध की तुलना में कैसा होता है?',
    'After cream is separated from milk, how does the density of the remaining milk compare to original milk?',
    ['घनत्व बढ़ जाता है', 'Density increases'],
    [
      ['घनत्व घट जाता है', 'Density decreases'],
      ['घनत्व अपरिवर्तित रहता है', 'Density remains unchanged'],
      ['घनत्व शून्य हो जाता है', 'Density becomes zero'],
    ],
    'क्रीम (वसा) का घनत्व पानी और दूध के अन्य अवयवों से कम होता है, इसलिए हल्की क्रीम निकल जाने पर शेष दूध का घनत्व बढ़ जाता है।',
    'Cream (fat) is less dense than milk serum; removing the lighter cream increases the density of the remaining skimmed milk.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'जब किसी द्रव में कोई वस्तु डाली जाती है और वस्तु का घनत्व द्रव के घनत्व के ठीक बराबर हो, तो क्या होगा?',
    'When an object of density exactly equal to a liquid’s density is placed in that liquid, what happens?',
    ['वस्तु द्रव में पूरी तरह डूबकर किसी भी गहराई पर तैरती रहेगी', 'The object floats fully submerged at any depth'],
    [
      ['वस्तु तुरंत तली में बैठ जाएगी', 'It sinks immediately to the bottom'],
      ['वस्तु सतह के बाहर उछल जाएगी', 'It jumps out of the surface'],
      ['वस्तु आधी ऊपर और आधी अंदर रहेगी', 'Half stays above the surface'],
    ],
    'घनत्व बराबर होने पर वस्तु का भार और पूर्ण डूबने पर लगने वाला उत्प्लावन बल बराबर हो जाते हैं, जिससे वह पूरी डूबकर संतुलन में तैरती है।',
    'When densities are equal, the object’s weight equals the buoyant force when fully submerged, so it stays suspended at any depth.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'वाहनों के टायरों में खाँचे (Treads) क्यों बनाए जाते हैं?',
    'Why are treads made on the tyres of vehicles?',
    ['सड़क के साथ घर्षण बढ़ाने और फिसलन रोकने के लिए', 'To increase friction with the road and prevent skidding'],
    [
      ['घर्षण को न्यूनतम करने के लिए', 'To minimize friction'],
      ['टायरों का वजन कम करने के लिए', 'To reduce tyre weight'],
      ['हवा का दाब बढ़ाने के लिए', 'To increase air pressure'],
    ],
    'खाँचे सड़क पर अच्छी पकड़ (घर्षण) प्रदान करते हैं और गीली सड़क पर पानी को बाहर निकालकर फिसलन रोकते हैं।',
    'Treads provide better grip (friction) on the road and channel water away on wet surfaces to prevent skidding.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'समान त्वरण से गतिशील वस्तु के लिए दूरी-समय समीकरण (गति का द्वितीय समीकरण) कौन-सा है?',
    'Which is the second equation of motion for an object moving with uniform acceleration?',
    ['s = ut + ½at²', 's = ut + ½at²'],
    [
      ['v = u + at', 'v = u + at'],
      ['v² = u² + 2as', 'v² = u² + 2as'],
      ['s = vt', 's = vt'],
    ],
    'एकसमान त्वरण a से t समय में तय विस्थापन s का सूत्र s = ut + ½at² होता है, जहाँ u प्रारंभिक वेग है।',
    'For uniform acceleration a, the displacement s in time t from initial velocity u is given by s = ut + ½at².',
    'EASY',
    { formulaHi: 's = ut + ½at²', formulaEn: 's = ut + ½at²' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक गेंद को ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। उच्चतम बिंदु पर उसका वेग और त्वरण क्या होगा?',
    'A ball is thrown vertically upward. At the highest point, what are its velocity and acceleration?',
    ['वेग शून्य, किंतु त्वरण g (नीचे की ओर)', 'Velocity is zero, acceleration is g downward'],
    [
      ['वेग और त्वरण दोनों शून्य', 'Both velocity and acceleration are zero'],
      ['वेग अधिकतम और त्वरण शून्य', 'Velocity maximum and acceleration zero'],
      ['वेग शून्य और त्वरण ऊपर की ओर', 'Velocity zero and acceleration upward'],
    ],
    'उच्चतम बिंदु पर गेंद क्षण भर के लिए रुकती है (वेग = 0), परंतु पृथ्वी का गुरुत्वीय त्वरण g निरंतर नीचे की ओर कार्य करता रहता है।',
    'At the peak, instantaneous velocity becomes zero, but Earth’s gravitational acceleration g continues acting downward.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'कोई वस्तु एक वृत्ताकार पथ पर जिसकी त्रिज्या 7 मीटर है, एक चक्कर पूरा करती है। उसके द्वारा तय की गई दूरी क्या होगी?',
    'An object completes one full revolution on a circular path of radius 7 m. What is the distance travelled?',
    ['44 मीटर', '44 m'],
    [
      ['0 मीटर', '0 m'],
      ['22 मीटर', '22 m'],
      ['154 मीटर', '154 m'],
    ],
    'एक चक्कर में तय दूरी वृत्त की परिधि = 2πr = 2 × (22/7) × 7 = 44 मीटर होगी।',
    'Distance in one revolution equals circumference 2πr = 2 × (22/7) × 7 = 44 m.',
    'EASY',
    { formulaHi: 'परिधि = 2πr', formulaEn: 'Circumference = 2πr' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी की त्रिज्या को यदि आधा कर दिया जाए (द्रव्यमान समान रखते हुए), तो सतह पर गुरुत्वीय त्वरण g का मान कितना हो जाएगा?',
    'If the radius of the Earth were halved while keeping its mass constant, what would happen to g on the surface?',
    ['चार गुना हो जाएगा', 'It would become four times'],
    [
      ['दोगुना हो जाएगा', 'It would become double'],
      ['एक-चौथाई रह जाएगा', 'It would become one-fourth'],
      ['आधा रह जाएगा', 'It would become half'],
    ],
    'चूँकि g = GM/R², यदि R को R/2 कर दिया जाए तो g′ = GM/(R/2)² = 4GM/R² = 4g हो जाएगा।',
    'Since g = GM/R², halving R makes g′ = 4GM/R² = 4g.',
    'HARD',
    { formulaHi: 'g = GM / R²', formulaEn: 'g = GM / R²' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'अंतरिक्ष यान में अंतरिक्ष यात्री को भारहीनता (Weightlessness) का अनुभव क्यों होता है?',
    'Why do astronauts experience weightlessness inside an orbiting spacecraft?',
    ['अंतरिक्ष यान पृथ्वी के चारों ओर निरंतर मुक्त पतन की अवस्था में रहता है', 'The spacecraft is in continuous free fall around the Earth'],
    [
      ['अंतरिक्ष में पृथ्वी का गुरुत्व बिल्कुल शून्य होता है', 'Earth’s gravity is strictly zero in orbit'],
      ['अंतरिक्ष यान में वायु नहीं होती', 'There is no air in the spacecraft'],
      ['अंतरिक्ष यात्री का द्रव्यमान शून्य हो जाता है', 'Astronaut’s mass becomes zero'],
    ],
    'कक्षा में घूमता अंतरिक्ष यान पृथ्वी के गुरुत्व के अधीन निरंतर मुक्त पतन (Free fall) में रहता है, जिससे सतह से प्रतिक्रिया बल (N) शून्य हो जाता है।',
    'An orbiting spacecraft is in perpetual free fall around Earth, making the normal contact force zero and creating weightlessness.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'रक्तवाहिनियों में रक्त का दाब सामान्यतः किसके संदर्भ में मापा जाता है?',
    'In the human body, blood pressure is measured relative to:',
    ['पारे के स्तंभ की ऊँचाई (mmHg)', 'Height of mercury column (mmHg)'],
    [
      ['जल के स्तंभ की ऊँचाई', 'Height of water column'],
      ['वायु का आयतन', 'Volume of air'],
      ['डेसिबल पैमाना', 'Decibel scale'],
    ],
    'रक्तचाप को मिलीमीटर ऑफ मर्करी (mmHg) में मापा जाता है। सामान्य सिस्टोलिक/डायस्टोलिक दाब 120/80 mmHg होता है।',
    'Blood pressure is expressed in millimetres of mercury (mmHg), with 120/80 mmHg being normal.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'जब किसी द्रव की धारा संकीर्ण नली से होकर बहती है, तो उसका वेग और दाब क्रमशः कैसे परिवर्तित होते हैं?',
    'When a fluid flows through a narrower section of a pipe, how do its velocity and pressure change?',
    ['वेग बढ़ता है और दाब घटता है', 'Velocity increases and pressure decreases'],
    [
      ['वेग घटता है और दाब बढ़ता है', 'Velocity decreases and pressure increases'],
      ['वेग और दाब दोनों बढ़ते हैं', 'Both velocity and pressure increase'],
      ['वेग और दाब दोनों घटते हैं', 'Both velocity and pressure decrease'],
    ],
    'सांतत्य समीकरण (A₁v₁ = A₂v₂) से अनुप्रस्थ क्षेत्रफल घटने पर वेग बढ़ता है और बर्नौली प्रमेय से वेग बढ़ने पर दाब घटता है।',
    'By continuity (A₁v₁ = A₂v₂), narrower area increases velocity, and by Bernoulli’s theorem, higher velocity reduces pressure.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी गतिशील वस्तु का वेग-समय ग्राफ समय अक्ष के समानांतर एक सीधी रेखा है। इसका क्या अर्थ है?',
    'The velocity-time graph of a moving object is a straight line parallel to the time axis. What does it indicate?',
    ['वस्तु एकसमान वेग से चल रही है (त्वरण शून्य है)', 'Object moves with uniform velocity (zero acceleration)'],
    [
      ['वस्तु विराम अवस्था में है', 'Object is at rest'],
      ['वस्तु एकसमान त्वरण से चल रही है', 'Object moves with uniform acceleration'],
      ['वस्तु का वेग लगातार बढ़ रहा है', 'Velocity is continuously increasing'],
    ],
    'समय अक्ष के समानांतर रेखा दर्शाती है कि समय के साथ वेग नहीं बदल रहा है, अर्थात त्वरण शून्य है।',
    'A line parallel to the time axis on a v-t graph shows constant velocity, meaning zero acceleration.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी वस्तु के कोणीय वेग (Angular velocity) का SI मात्रक क्या है?',
    'What is the SI unit of angular velocity?',
    ['रेडियन/सेकंड', 'Radian/second'],
    [
      ['मीटर/सेकंड', 'Metre/second'],
      ['रेडियन/सेकंड²', 'Radian/second²'],
      ['चक्कर/घंटा', 'Revolutions/hour'],
    ],
    'कोणीय विस्थापन (रेडियन) की समय दर को कोणीय वेग (ω = θ/t) कहते हैं, जिसका SI मात्रक rad/s है।',
    'Angular velocity (ω = θ/t) is the rate of change of angular displacement and has the SI unit rad/s.',
    'MEDIUM',
    { formulaHi: 'ω = θ / t', formulaEn: 'ω = θ / t' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'चाकू की धार तेज करने पर वह सब्जियाँ आसानी से क्यों काटता है?',
    'Why does sharpening a knife make it cut vegetables more easily?',
    ['संपर्क क्षेत्रफल कम होने से दाब बढ़ जाता है', 'Decreasing contact area increases the pressure'],
    [
      ['संपर्क क्षेत्रफल बढ़ने से दाब घट जाता है', 'Increasing area decreases pressure'],
      ['चाकू का द्रव्यमान बढ़ जाता है', 'Mass of knife increases'],
      ['सब्जियों का घनत्व घट जाता है', 'Density of vegetables decreases'],
    ],
    'धार तेज करने से किनारा अत्यंत पतला (कम क्षेत्रफल वाला) हो जाता है, जिससे थोड़ा-सा बल लगाने पर भी बहुत अधिक दाब उत्पन्न होता है।',
    'Sharpening minimizes the cutting edge area, producing much greater pressure for the same applied force.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'पृथ्वी के ध्रुवों से विषुवत रेखा की ओर जाने पर गुरुत्वीय त्वरण g का मान:',
    'Moving from the poles of the Earth towards the equator, the value of g:',
    ['घटता है', 'Decreases'],
    [
      ['बढ़ता है', 'Increases'],
      ['समान रहता है', 'Remains the same'],
      ['शून्य हो जाता है', 'Becomes zero'],
    ],
    'ध्रुवों पर g अधिकतम (लगभग 9.83 m/s²) तथा विषुवत रेखा पर न्यूनतम (लगभग 9.78 m/s²) होता है। अतः ध्रुव से विषुवत रेखा की ओर जाने पर g घटता है।',
    'Since g is maximum at the poles (~9.83 m/s²) and minimum at the equator (~9.78 m/s²), it decreases towards the equator.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'द्रवों या गैसों द्वारा वस्तुओं पर लगाए जाने वाले घर्षण बल को किस नाम से जाना जाता है?',
    'What is the frictional force exerted by fluids (liquids and gases) on objects moving through them called?',
    ['कर्षण (Drag)', 'Drag'],
    [
      ['प्रणोद (Thrust)', 'Thrust'],
      ['उत्प्लावन (Buoyancy)', 'Buoyancy'],
      ['पृष्ठ तनाव (Surface tension)', 'Surface tension'],
    ],
    'तरल पदार्थ (द्रव एवं गैस) उनमें गति करने वाली वस्तुओं पर जो घर्षण बल लगाते हैं उसे कर्षण या तरल घर्षण कहते हैं; इसे कम करने हेतु हवाई जहाज और मछलियों का शरीर धारारेखित (Streamlined) होता है।',
    'Fluid friction exerted on moving objects is called drag. Streamlined shapes in planes and fish minimize drag.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'एक 1000 किग्रा की कार 10 m/s के वेग से चल रही है। ब्रेक लगाकर 5 सेकंड में इसे रोक दिया जाता है। ब्रेक द्वारा लगाया गया औसत मंदन बल कितना है?',
    'A 1000 kg car moving at 10 m/s is stopped in 5 seconds by brakes. What is the average retarding force?',
    ['2000 न्यूटन', '2000 N'],
    [
      ['5000 न्यूटन', '5000 N'],
      ['1000 न्यूटन', '1000 N'],
      ['200 न्यूटन', '200 N'],
    ],
    'मंदन a = (0 - 10)/5 = -2 m/s²। बल का परिमाण F = ma = 1000 × 2 = 2000 न्यूटन होगा।',
    'Retardation a = (0 - 10)/5 = -2 m/s². Magnitude of retarding force F = ma = 1000 × 2 = 2000 N.',
    'MEDIUM',
    { formulaHi: 'F = m(v - u) / t', formulaEn: 'F = m(v - u) / t' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'यदि पृथ्वी अपनी धुरी पर घूर्णन करना बंद कर दे, तो विषुवत रेखा पर गुरुत्वीय त्वरण (g) के मान पर क्या प्रभाव पड़ेगा?',
    'If the Earth stops rotating on its axis, what will happen to the value of g at the equator?',
    ['बढ़ जाएगा', 'It will increase'],
    [
      ['घट जाएगा', 'It will decrease'],
      ['शून्य हो जाएगा', 'It will become zero'],
      ['कोई परिवर्तन नहीं होगा', 'No change'],
    ],
    'पृथ्वी के घूर्णन के कारण विषुवत रेखा पर अपकेंद्रीय प्रभाव से g का मान कुछ कम रहता है (g′ = g - Rω²)। घूर्णन रुकने पर ω = 0 होने से g का मान बढ़ जाएगा।',
    'Earth’s rotation reduces effective g at the equator (g′ = g - Rω²). If rotation stops, ω = 0 and g at the equator increases.',
    'HARD',
    { formulaHi: 'g′ = g - Rω² cos²λ', formulaEn: 'g′ = g - Rω² cos²λ' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'ऊँचाई पर जाने पर कई बार नाक से खून क्यों आने लगता है?',
    'Why do nosebleeds sometimes occur at very high altitudes?',
    ['बाहरी वायुमंडलीय दाब शरीर के रक्तदाब से काफी कम हो जाता है', 'External atmospheric pressure becomes much lower than internal blood pressure'],
    [
      ['ऊँचाई पर वायुमंडलीय दाब बहुत बढ़ जाता है', 'Atmospheric pressure increases greatly'],
      ['रक्त का घनत्व शून्य हो जाता है', 'Density of blood becomes zero'],
      ['ऊँचाई पर गुरुत्वाकर्षण बढ़ जाता है', 'Gravity increases at altitude'],
    ],
    'ऊँचाई पर वायुमंडलीय दाब कम हो जाता है जबकि शरीर के अंदर रक्तचाप अधिक बना रहता है, जिससे नाक की पतली रक्त केशिकाएँ फट सकती हैं।',
    'At high altitudes, atmospheric pressure drops significantly while internal blood pressure remains higher, which can rupture delicate nasal capillaries.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'बल आघूर्ण (Torque) का SI मात्रक क्या है?',
    'What is the SI unit of torque (moment of force)?',
    ['न्यूटन·मीटर (N·m)', 'Newton-metre (N·m)'],
    [
      ['न्यूटन/मीटर', 'N/m'],
      ['पास्कल', 'Pascal'],
      ['वाट', 'Watt'],
    ],
    'बल और घूर्णन अक्ष से लंबवत दूरी का गुणनफल बल आघूर्ण (τ = r × F) कहलाता है, जिसका मात्रक न्यूटन·मीटर है। दरवाजे का हैंडल कब्जे से दूर इसीलिए लगाया जाता है ताकि कम बल से अधिक बल आघूर्ण मिले।',
    'Torque is force times perpendicular lever arm distance (τ = r × F), measured in N·m. Door handles are placed far from hinges to maximize torque.',
    'MEDIUM',
    { formulaHi: 'τ = r × F', formulaEn: 'τ = r × F' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'एक व्यक्ति पानी से भरी बाल्टी हाथ में उठाए हुए है। यदि वह पानी में पत्थर डाल दे और पत्थर तली में बैठ जाए, तो बाल्टी के कुल भार में क्या परिवर्तन होगा?',
    'A person holds a bucket of water. If a stone is dropped into it and sinks to the bottom, what happens to the total weight of the bucket?',
    ['कुल भार बढ़ जाएगा', 'Total weight will increase'],
    [
      ['कुल भार अपरिवर्तित रहेगा', 'Total weight remains unchanged'],
      ['कुल भार घट जाएगा', 'Total weight will decrease'],
      ['पानी के भार के बराबर कम होगा', 'Decreases by weight of water'],
    ],
    'पत्थर भी बाल्टी तंत्र का हिस्सा बन गया है, अतः बाल्टी, पानी और पत्थर का कुल भार मिलाकर पहले से अधिक होगा।',
    'The stone adds its own weight to the bucket-water system, so the total combined weight increases.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'केंद्रीय बलों के प्रभाव में घूमते हुए पिंड के लिए कौन-सी भौतिक राशि सदैव संरक्षित रहती है?',
    'For a body moving under a central force (like a planet around the Sun), which quantity is always conserved?',
    ['कोणीय संवेग', 'Angular momentum'],
    [
      ['रेखीय संवेग', 'Linear momentum'],
      ['चाल', 'Speed'],
      ['त्वरण', 'Acceleration'],
    ],
    'केंद्रीय बल के कारण बाह्य बल आघूर्ण (Torque) शून्य होता है, इसलिए कोणीय संवेग (L = Iω) सदैव संरक्षित रहता है। यही केप्लर के द्वितीय नियम का आधार है।',
    'Since a central force exerts zero torque about the centre, angular momentum (L = Iω) is conserved—the basis of Kepler’s second law.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'बर्फ पर चलना सूखी सड़क पर चलने की तुलना में कठिन क्यों होता है?',
    'Why is it more difficult to walk on ice than on a dry concrete road?',
    ['बर्फ और जूतों के बीच घर्षण बहुत कम होता है', 'Friction between ice and shoes is very low'],
    [
      ['बर्फ पर गुरुत्वाकर्षण कम होता है', 'Gravity is lower on ice'],
      ['बर्फ में घर्षण बहुत अधिक होता है', 'Friction on ice is too high'],
      ['बर्फ का घनत्व अधिक होता है', 'Density of ice is higher'],
    ],
    'चलने के लिए पैर से जमीन को पीछे धकेलने हेतु घर्षण आवश्यक है। चिकनी बर्फ पर घर्षण बल बहुत कम होने से पैर फिसल जाते हैं।',
    'Walking relies on friction pushing us forward; smooth ice offers very little friction, causing feet to slip.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'यदि पृथ्वी के चारों ओर घूम रहे उपग्रह से कोई सेब बाहर छोड़ दिया जाए, तो क्या होगा?',
    'If an apple is gently released outside an orbiting satellite, what will happen to it?',
    ['वह उपग्रह के साथ ही उसी कक्षा में चक्कर लगाता रहेगा', 'It will continue orbiting Earth alongside the satellite'],
    [
      ['वह सीधे पृथ्वी पर आ गिरेगा', 'It will fall straight down to Earth'],
      ['वह अनंत अंतरिक्ष में भाग जाएगा', 'It will fly away into deep space'],
      ['वह वहीं रुक जाएगा', 'It will stop motionless'],
    ],
    'सेब का भी वही कक्षीय वेग होगा जो उपग्रह का है, इसलिए वह उसी कक्षा में उपग्रह के साथ पृथ्वी की परिक्रमा करता रहेगा।',
    'The apple retains the orbital velocity of the satellite and therefore continues orbiting Earth in the same orbit alongside it.',
    'HARD'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी गतिशील पिंड के द्रव्यमान और त्वरण के गुणनफल को क्या कहते हैं?',
    'What is the product of mass and acceleration of a moving body called?',
    ['बल', 'Force'],
    [
      ['कार्य', 'Work'],
      ['संवेग', 'Momentum'],
      ['शक्ति', 'Power'],
    ],
    'न्यूटन के द्वितीय नियम से बल (F) = द्रव्यमान (m) × त्वरण (a) होता है।',
    'According to Newton’s Second Law, Force (F) = mass (m) × acceleration (a).',
    'EASY',
    { formulaHi: 'F = m × a', formulaEn: 'F = m × a' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'पानी के अंदर पनडुब्बी के ऊपर उठने या नीचे डूबने के लिए किस टैंक में हवा या पानी भरा जाता है?',
    'Which tanks in a submarine are filled with air or water to make it rise or dive?',
    ['बैलास्ट टैंक (Ballast tanks)', 'Ballast tanks'],
    [
      ['ईंधन टैंक', 'Fuel tanks'],
      ['ऑक्सीजन सिलेंडर', 'Oxygen cylinders'],
      ['संघनित्र टैंक', 'Condenser tanks'],
    ],
    'पनडुब्बी के बैलास्ट टैंकों में पानी भरने से औसत घनत्व बढ़ जाता है और वह डूबती है; संपीड़ित हवा से पानी बाहर निकालने पर वह ऊपर उठती है।',
    'Filling ballast tanks with water increases average density so the submarine dives; expelling water with compressed air makes it surface.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'किसी पिंड की विरामावस्था में दूरी-समय (s-t) ग्राफ कैसा होता है?',
    'What does the distance-time (s-t) graph look like for an object at rest?',
    ['समय अक्ष के समानांतर एक सीधी रेखा', 'A straight line parallel to the time axis'],
    [
      ['मूल बिंदु से जाती हुई तिरछी रेखा', 'A slanted line passing through origin'],
      ['परवलय (Parabola)', 'A parabola'],
      ['दूरी अक्ष के समानांतर रेखा', 'Line parallel to distance axis'],
    ],
    'वस्तु विराम में है तो समय बढ़ने पर भी उसकी स्थिति (दूरी) नहीं बदलती, अतः ग्राफ समय अक्ष के समानांतर क्षैतिज रेखा होती है।',
    'For an object at rest, position does not change with time, so the s-t graph is a horizontal straight line parallel to the time axis.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'समान समय अंतराल में समान दूरी तय करने वाली गति को क्या कहते हैं?',
    'Motion in which an object covers equal distances in equal intervals of time is called:',
    ['एकसमान गति (Uniform motion)', 'Uniform motion'],
    [
      ['असमान गति', 'Non-uniform motion'],
      ['त्वरित गति', 'Accelerated motion'],
      ['यादृच्छिक गति', 'Random motion'],
    ],
    'यदि कोई वस्तु सरल रेखा में समान समय अंतरालों में समान दूरियाँ तय करे, तो उसकी गति एकसमान गति कहलाती है।',
    'Covering equal distances in equal time intervals defines uniform motion.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'तैरने के नियम (Law of Floatation) के अनुसार कोई वस्तु द्रव में कब तैरती है?',
    'According to the law of floatation, when does a body float in a liquid?',
    ['जब वस्तु का भार उसके द्वारा हटाए गए द्रव के भार के बराबर या कम हो', 'When weight of the body is less than or equal to the weight of liquid it can displace'],
    [
      ['जब वस्तु का घनत्व द्रव से अधिक हो', 'When density of body is greater than liquid'],
      ['जब उत्प्लावन बल शून्य हो', 'When buoyant force is zero'],
      ['जब वस्तु का आयतन शून्य हो', 'When volume of body is zero'],
    ],
    'यदि किसी वस्तु द्वारा अपने पूर्ण आयतन से हटाए जा सकने वाले द्रव का भार वस्तु के भार से अधिक या बराबर हो, तो वह द्रव पर तैरती है।',
    'A body floats if the maximum buoyant force (weight of displaced liquid) equals or exceeds its weight (i.e., average density ≤ liquid density).',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'गैसों के दाब को मापने के लिए प्रयोगशाला में सामान्यतः किस यंत्र का उपयोग किया जाता है?',
    'Which instrument is commonly used in laboratories to measure the pressure of a gas in a container?',
    ['मैनोमीटर', 'Manometer'],
    [
      ['लैक्टोमीटर', 'Lactometer'],
      ['एमीटर', 'Ammeter'],
      ['हाइग्रोमीटर', 'Hygrometer'],
    ],
    'मैनोमीटर (U-नली दाबमापी) किसी बंद पात्र में गैस के दाब को वायुमंडलीय दाब के सापेक्ष मापता है।',
    'A manometer (typically U-tube) measures the gauge pressure of gas inside a closed vessel.',
    'MEDIUM'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'गति एवं न्यूटन के नियम',
    'कोलंबस या नाव चलाते समय चप्पू (Oar) से पानी को पीछे धकेलना किस सिद्धांत पर कार्य करता है?',
    'Pushing water backward with an oar to propel a boat forward works on:',
    ['न्यूटन का तृतीय गति नियम', 'Newton’s Third Law of motion'],
    [
      ['आर्किमिडीज सिद्धांत', 'Archimedes’ principle'],
      ['पास्कल का नियम', 'Pascal’s law'],
      ['न्यूटन का शीतलन नियम', 'Newton’s law of cooling'],
    ],
    'चप्पू से पानी को पीछे धकेलने (क्रिया) पर पानी नाव को उतने ही बल से आगे (प्रतिक्रिया) धकेलता है।',
    'Pushing water backward (action) results in an equal forward reaction force from the water on the oar/boat.',
    'EASY'
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'उत्प्लावन एवं गुरुत्वाकर्षण',
    'दो वस्तुओं के बीच की दूरी को दोगुना कर देने पर उनके बीच लगने वाला गुरुत्वाकर्षण बल कितना हो जाएगा?',
    'If the distance between two masses is doubled, what happens to the gravitational force between them?',
    ['एक-चौथाई (1/4) रह जाएगा', 'Becomes one-fourth (1/4)'],
    [
      ['आधा रह जाएगा', 'Becomes half'],
      ['दोगुना हो जाएगा', 'Becomes double'],
      ['चार गुना हो जाएगा', 'Becomes four times'],
    ],
    'गुरुत्वाकर्षण बल दूरी के वर्ग के व्युत्क्रमानुपाती (F ∝ 1/r²) होता है, इसलिए दूरी दोगुनी करने पर बल 1/2² = 1/4 रह जाता है।',
    'By Newton’s inverse-square law (F ∝ 1/r²), doubling the distance reduces gravitational force to 1/4th.',
    'MEDIUM',
    { formulaHi: 'F ∝ 1 / r²', formulaEn: 'F ∝ 1 / r²' }
  ),
  q(
    'गति, बल एवं गुरुत्वाकर्षण',
    'बल, घर्षण एवं दाब',
    'फाउंटेन पेन से अधिक ऊँचाई (हवाई जहाज) पर स्याही क्यों रिसने लगती है?',
    'Why does a fountain pen tend to leak ink at high altitudes in an aeroplane?',
    ['बाहरी वायुदाब कम होने से पेन के अंदर का अधिक दाब स्याही को बाहर धकेलता है', 'Lower outside air pressure lets higher air pressure inside push ink out'],
    [
      ['ऊँचाई पर स्याही का घनत्व बढ़ जाता है', 'Ink density increases at altitude'],
      ['बाहरी वायुदाब बहुत अधिक हो जाता है', 'Outside air pressure becomes very high'],
      ['हवाई जहाज में गुरुत्वाकर्षण अधिक होता है', 'Gravity is higher in planes'],
    ],
    'पेन के अंदर हवा सामान्य (जमीनी) दाब पर होती है; ऊँचाई पर बाहर का वायुदाब घटने से अंदर की हवा फैलकर स्याही को बाहर धकेल देती है।',
    'Air trapped inside the pen is at ground pressure; at high altitude, lower cabin/outside pressure lets internal air expand and push ink out.',
    'MEDIUM'
  ),

  // =========================================================================
  // 3. कार्य, ऊर्जा, शक्ति, ऊष्मा एवं तापमापन — 75 Qs
  // =========================================================================
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'भौतिकी में कार्य (Work) का SI मात्रक क्या होता है?',
    'What is the SI unit of work in physics?',
    ['जूल (न्यूटन·मीटर)', 'Joule (Newton-metre)'],
    [
      ['वाट', 'Watt'],
      ['न्यूटन', 'Newton'],
      ['पास्कल', 'Pascal'],
    ],
    'बल और बल की दिशा में विस्थापन के गुणनफल को कार्य (W = F·s cosθ) कहते हैं और इसका SI मात्रक जूल (J) है।',
    'Work is defined as W = F·s cosθ and its SI unit is the Joule (J), equal to 1 Newton-metre.',
    'EASY',
    { formulaHi: 'W = F · s cosθ', formulaEn: 'W = F · s cosθ' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'यदि एक कुली अपने सिर पर 20 किग्रा का बोझ रखकर समतल प्लेटफॉर्म पर 50 मीटर चलता है, तो गुरुत्व के विरुद्ध उसके द्वारा किया गया कार्य कितना होगा?',
    'A porter carries a 20 kg load on his head and walks 50 m on a level platform. How much work is done against gravity?',
    ['शून्य', 'Zero'],
    [
      ['1000 जूल', '1000 J'],
      ['9800 जूल', '9800 J'],
      ['500 जूल', '500 J'],
    ],
    'कुली द्वारा लगाया गया बल ऊर्ध्वाधर ऊपर की ओर और विस्थापन क्षैतिज दिशा में है (θ = 90°)। चूँकि cos 90° = 0, अतः किया गया कार्य शून्य होगा।',
    'The upward force supporting the load is perpendicular (θ = 90°) to the horizontal displacement. Since cos 90° = 0, work done is zero.',
    'MEDIUM',
    { formulaHi: 'W = F s cos 90° = 0', formulaEn: 'W = F s cos 90° = 0' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'किसी गतिशील वस्तु द्वारा उसकी गति के कारण संचित ऊर्जा क्या कहलाती है?',
    'The energy possessed by a body by virtue of its motion is called:',
    ['गतिज ऊर्जा (Kinetic energy)', 'Kinetic energy'],
    [
      ['स्थितिज ऊर्जा (Potential energy)', 'Potential energy'],
      ['तापीय ऊर्जा', 'Thermal energy'],
      ['रासायनिक ऊर्जा', 'Chemical energy'],
    ],
    'किसी m द्रव्यमान और v वेग से गतिमान वस्तु की गतिज ऊर्जा KE = ½mv² होती है।',
    'Kinetic energy of a body of mass m moving with velocity v is KE = ½mv².',
    'EASY',
    { formulaHi: 'KE = ½mv²', formulaEn: 'KE = ½mv²' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'यदि किसी गतिशील पिंड का वेग दोगुना कर दिया जाए, तो उसकी गतिज ऊर्जा कितनी हो जाएगी?',
    'If the velocity of a moving object is doubled, what happens to its kinetic energy?',
    ['चार गुना हो जाएगी', 'Becomes four times'],
    [
      ['दोगुनी हो जाएगी', 'Becomes double'],
      ['आधी रह जाएगी', 'Becomes half'],
      ['अपरिवर्तित रहेगी', 'Remains unchanged'],
    ],
    'गतिज ऊर्जा वेग के वर्ग के समानुपाती (KE ∝ v²) होती है। अतः वेग दोगुना करने पर गतिज ऊर्जा 2² = 4 गुना हो जाती है।',
    'Kinetic energy is proportional to the square of velocity (KE ∝ v²); doubling velocity increases KE by 2² = 4 times.',
    'MEDIUM',
    { formulaHi: 'KE = ½mv²', formulaEn: 'KE = ½mv²' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'चाबी भरी हुई घड़ी की स्प्रिंग और तने हुए धनुष में कौन-सी ऊर्जा संचित होती है?',
    'Which form of energy is stored in a wound watch spring and a stretched bow?',
    ['प्रत्यास्थ स्थितिज ऊर्जा', 'Elastic potential energy'],
    [
      ['गतिज ऊर्जा', 'Kinetic energy'],
      ['विद्युत ऊर्जा', 'Electrical energy'],
      ['नाभिकीय ऊर्जा', 'Nuclear energy'],
    ],
    'किसी वस्तु के आकार या विन्यास में परिवर्तन के कारण उसमें संचित ऊर्जा स्थितिज ऊर्जा कहलाती है।',
    'Energy stored due to deformation or configuration of a spring or bow is elastic potential energy.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    '4 किग्रा द्रव्यमान की एक वस्तु को जमीन से 5 मीटर की ऊँचाई तक उठाया जाता है। यदि g = 10 m/s² हो, तो उसकी गुरुत्वीय स्थितिज ऊर्जा कितनी होगी?',
    'A 4 kg object is raised to a height of 5 m above the ground. Taking g = 10 m/s², what is its gravitational potential energy?',
    ['200 जूल', '200 J'],
    [
      ['20 जूल', '20 J'],
      ['100 जूल', '100 J'],
      ['400 जूल', '400 J'],
    ],
    'गुरुत्वीय स्थितिज ऊर्जा PE = mgh = 4 × 10 × 5 = 200 जूल होगी।',
    'Gravitational potential energy PE = mgh = 4 × 10 × 5 = 200 J.',
    'EASY',
    { formulaHi: 'PE = mgh', formulaEn: 'PE = mgh' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'ऊर्जा संरक्षण के नियम के अनुसार:',
    'According to the Law of Conservation of Energy:',
    ['ऊर्जा न तो उत्पन्न की जा सकती है और न ही नष्ट, केवल रूप परिवर्तित होता है', 'Energy can neither be created nor destroyed, only transformed from one form to another'],
    [
      ['ऊर्जा केवल गतिज से स्थितिज में बदलती है', 'Energy only converts from kinetic to potential'],
      ['ऊर्जा समय के साथ स्वतः नष्ट हो जाती है', 'Energy decays spontaneously with time'],
      ['यांत्रिक कार्य में ऊर्जा बढ़ती है', 'Energy increases during mechanical work'],
    ],
    'ऊर्जा संरक्षण का नियम कहता है कि ब्रह्मांड की कुल ऊर्जा सदैव नियत रहती है, इसका केवल एक रूप से दूसरे रूप में रूपांतरण होता है।',
    'The total energy of an isolated system remains constant; energy only changes from one form to another.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'लाउडस्पीकर ऊर्जा के किस रूप को किस रूप में रूपांतरित करता है?',
    'A loudspeaker converts which form of energy into which other form?',
    ['विद्युत ऊर्जा को ध्वनि ऊर्जा में', 'Electrical energy into sound energy'],
    [
      ['ध्वनि ऊर्जा को विद्युत ऊर्जा में', 'Sound energy into electrical energy'],
      ['यांत्रिक ऊर्जा को विद्युत ऊर्जा में', 'Mechanical energy into electrical energy'],
      ['रासायनिक ऊर्जा को प्रकाश ऊर्जा में', 'Chemical energy into light energy'],
    ],
    'लाउडस्पीकर विद्युत संकेतों को कंपन द्वारा ध्वनि तरंगों में बदलता है, जबकि माइक्रोफोन ध्वनि ऊर्जा को विद्युत ऊर्जा में बदलता है।',
    'A loudspeaker converts electrical energy into sound energy, whereas a microphone converts sound into electrical energy.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'विद्युत सेल (बैटरी) डिस्चार्ज होते समय किस ऊर्जा को किस ऊर्जा में परिवर्तित करता है?',
    'During discharge, an electric cell (battery) converts which energy into electrical energy?',
    ['रासायनिक ऊर्जा को विद्युत ऊर्जा में', 'Chemical energy into electrical energy'],
    [
      ['यांत्रिक ऊर्जा को विद्युत ऊर्जा में', 'Mechanical energy into electrical energy'],
      ['तापीय ऊर्जा को विद्युत ऊर्जा में', 'Thermal energy into electrical energy'],
      ['नाभिकीय ऊर्जा को विद्युत ऊर्जा में', 'Nuclear energy into electrical energy'],
    ],
    'विद्युत सेल में होने वाली रासायनिक अभिक्रियाओं से संचित रासायनिक ऊर्जा विद्युत ऊर्जा में बदलती है।',
    'Electrochemical reactions inside a cell convert stored chemical energy into electrical energy.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'पौधों में प्रकाश संश्लेषण (Photosynthesis) की क्रिया में ऊर्जा का कौन-सा रूपांतरण होता है?',
    'Which energy transformation takes place during photosynthesis in green plants?',
    ['सौर (प्रकाश) ऊर्जा का रासायनिक ऊर्जा में', 'Solar (light) energy into chemical energy'],
    [
      ['रासायनिक ऊर्जा का ऊष्मा ऊर्जा में', 'Chemical energy into heat energy'],
      ['विद्युत ऊर्जा का रासायनिक ऊर्जा में', 'Electrical energy into chemical energy'],
      ['यांत्रिक ऊर्जा का प्रकाश ऊर्जा में', 'Mechanical energy into light energy'],
    ],
    'क्लोरोफिल की उपस्थिति में पौधे सूर्य की प्रकाश ऊर्जा का उपयोग करके ग्लूकोज के रूप में रासायनिक ऊर्जा का संचय करते हैं।',
    'Plants capture sunlight using chlorophyll and convert solar energy into chemical energy stored in glucose.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'विद्युत मोटर (Electric Motor) किस ऊर्जा रूपांतरण पर आधारित उपकरण है?',
    'An electric motor is a device based on which energy conversion?',
    ['विद्युत ऊर्जा से यांत्रिक ऊर्जा', 'Electrical energy to mechanical energy'],
    [
      ['यांत्रिक ऊर्जा से विद्युत ऊर्जा', 'Mechanical energy to electrical energy'],
      ['विद्युत ऊर्जा से रासायनिक ऊर्जा', 'Electrical energy to chemical energy'],
      ['ऊष्मा ऊर्जा से यांत्रिक ऊर्जा', 'Heat energy to mechanical energy'],
    ],
    'विद्युत मोटर विद्युत धारा के चुंबकीय प्रभाव से विद्युत ऊर्जा को यांत्रिक (घूर्णन) ऊर्जा में बदलती है, जबकि जनित्र यांत्रिक को विद्युत ऊर्जा में बदलता है।',
    'An electric motor converts electrical energy into mechanical energy, whereas a generator/dynamo does the reverse.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'कार्य करने की समय दर को क्या कहते हैं और इसका SI मात्रक क्या है?',
    'What is the time rate of doing work called, and what is its SI unit?',
    ['शक्ति; वाट (J/s)', 'Power; Watt (J/s)'],
    [
      ['ऊर्जा; जूल', 'Energy; Joule'],
      ['बल; न्यूटन', 'Force; Newton'],
      ['संवेग; kg·m/s', 'Momentum; kg·m/s'],
    ],
    'एकांक समय में किए गए कार्य को शक्ति (P = W/t) कहते हैं। इसका SI मात्रक वाट (1 W = 1 J/s) है।',
    'Power is the rate of doing work (P = W/t), and its SI unit is the Watt (1 W = 1 J/s).',
    'EASY',
    { formulaHi: 'शक्ति (P) = कार्य (W) / समय (t)', formulaEn: 'P = W / t' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'घरेलू बिजली के बिल में प्रयुक्त "1 यूनिट" (1 किलोवाट-घंटा / kWh) किस भौतिक राशि का मात्रक है और कितने जूल के बराबर होता है?',
    '1 commercial unit of electricity (1 kWh) is a unit of which quantity and equals how many joules?',
    ['विद्युत ऊर्जा; 3.6 × 10⁶ जूल', 'Electrical energy; 3.6 × 10⁶ J'],
    [
      ['विद्युत शक्ति; 3.6 × 10⁶ वाट', 'Electrical power; 3.6 × 10⁶ W'],
      ['विद्युत धारा; 3.6 × 10³ जूल', 'Electric current; 3.6 × 10³ J'],
      ['विद्युत ऊर्जा; 1000 जूल', 'Electrical energy; 1000 J'],
    ],
    '1 kWh = 1000 वाट × 3600 सेकंड = 3.6 × 10⁶ जूल। यह विद्युत ऊर्जा का व्यावसायिक मात्रक है, शक्ति का नहीं।',
    '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. It is a commercial unit of electrical energy, not power.',
    'MEDIUM',
    { formulaHi: '1 kWh = 3.6 × 10⁶ J', formulaEn: '1 kWh = 3.6 × 10⁶ J' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'यदि एक हल्की और एक भारी वस्तु की गतिज ऊर्जा समान हो, तो किसका संवेग अधिक होगा?',
    'If a light body and a heavy body have the same kinetic energy, which one has greater momentum?',
    ['भारी वस्तु का', 'The heavier body'],
    [
      ['हल्की वस्तु का', 'The lighter body'],
      ['दोनों का संवेग समान होगा', 'Both have equal momentum'],
      ['वेग ज्ञात किए बिना नहीं बताया जा सकता', 'Cannot be determined without velocity'],
    ],
    'संवेग और गतिज ऊर्जा में संबंध p = √(2m·KE) होता है। समान KE के लिए p ∝ √m, अतः भारी वस्तु (अधिक m) का संवेग अधिक होगा।',
    'Momentum and kinetic energy relate as p = √(2m·KE). For equal KE, p ∝ √m, so the heavier body has larger momentum.',
    'HARD',
    { formulaHi: 'p = √(2m × KE)', formulaEn: 'p = √(2m × KE)' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'आइंस्टीन का प्रसिद्ध द्रव्यमान-ऊर्जा समतुल्यता समीकरण कौन-सा है?',
    'Which is Einstein’s famous mass-energy equivalence equation?',
    ['E = mc²', 'E = mc²'],
    [
      ['E = ½mc²', 'E = ½mc²'],
      ['E = mc', 'E = mc'],
      ['E = hν', 'E = hν'],
    ],
    'अल्बर्ट आइंस्टीन के सापेक्षता सिद्धांत से प्राप्त E = mc² के अनुसार द्रव्यमान और ऊर्जा परस्पर परिवर्तनीय हैं, जहाँ c निर्वात में प्रकाश की चाल है।',
    'Einstein’s E = mc² relates mass (m) and energy (E), where c is the speed of light in vacuum.',
    'EASY',
    { formulaHi: 'E = mc²', formulaEn: 'E = mc²' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    '1000 वाट का एक इलेक्ट्रिक हीटर प्रतिदिन 2 घंटे चलता है। 30 दिनों में कितनी यूनिट बिजली खर्च होगी?',
    'A 1000 W electric heater runs for 2 hours daily. How many units (kWh) of electricity will it consume in 30 days?',
    ['60 यूनिट', '60 units'],
    [
      ['30 यूनिट', '30 units'],
      ['120 यूनिट', '120 units'],
      ['6 यूनिट', '6 units'],
    ],
    '1000 W = 1 kW। कुल ऊर्जा = (1 kW × 2 h) × 30 दिन = 60 kWh (यूनिट)।',
    '1000 W = 1 kW. Total energy = 1 kW × 2 h/day × 30 days = 60 kWh (units).',
    'MEDIUM',
    { formulaHi: 'यूनिट = (वाट × घंटे × दिन) / 1000', formulaEn: 'Units = (W × h × days) / 1000' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'जेट इंजन में किस प्रकार की ऊर्जा का उपयोग करके प्रणोद प्राप्त किया जाता है?',
    'What type of fuel energy transformation drives a jet engine?',
    ['ईंधन की रासायनिक ऊर्जा का तापीय एवं यांत्रिक ऊर्जा में', 'Chemical energy of fuel into thermal and mechanical energy'],
    [
      ['सौर ऊर्जा का विद्युत ऊर्जा में', 'Solar energy into electrical energy'],
      ['नाभिकीय ऊर्जा का गतिज ऊर्जा में', 'Nuclear energy into kinetic energy'],
      ['स्थितिज ऊर्जा का ध्वनि ऊर्जा में', 'Potential energy into sound energy'],
    ],
    'जेट इंजन विमान ईंधन (ATF) के दहन से प्राप्त ऊष्मा द्वारा गैसों को तीव्र वेग से पीछे छोड़कर संवेग संरक्षण से आगे बढ़ता है।',
    'A jet engine burns fuel (chemical energy) to produce high-temperature expanding exhaust gases (thermal to mechanical/kinetic thrust).',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'किसी मशीन की दक्षता (Efficiency) क्या होती है?',
    'How is the efficiency of a machine defined?',
    ['निर्गत कार्य (उपयोगी ऊर्जा) / निवेशित ऊर्जा × 100%', '(Useful work output / Total energy input) × 100%'],
    [
      ['निवेशित ऊर्जा / निर्गत कार्य × 100%', '(Energy input / Work output) × 100%'],
      ['भार / आयास', 'Load / Effort'],
      ['शक्ति × समय', 'Power × Time'],
    ],
    'किसी वास्तविक मशीन में घर्षण आदि से ऊर्जा हानि होने के कारण दक्षता सदैव 100% से कम होती है।',
    'Efficiency is the percentage ratio of useful output work to total energy input; it is always less than 100% for real machines.',
    'MEDIUM',
    { formulaHi: 'दक्षता (η) = (W_out / E_in) × 100%', formulaEn: 'η = (W_out / E_in) × 100%' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ऊष्मा (Heat) और तापमान (Temperature) का SI मात्रक क्रमशः क्या है?',
    'What are the SI units of heat and temperature respectively?',
    ['जूल और केल्विन', 'Joule and Kelvin'],
    [
      ['कैलोरी और डिग्री सेल्सियस', 'Calorie and Degree Celsius'],
      ['वाट और केल्विन', 'Watt and Kelvin'],
      ['जूल और फारेनहाइट', 'Joule and Fahrenheit'],
    ],
    'ऊष्मा ऊर्जा का एक रूप है अतः इसका SI मात्रक जूल (J) है, जबकि तापमान का SI मात्रक केल्विन (K) है।',
    'Heat is a form of energy so its SI unit is Joule (J), while the SI base unit of temperature is Kelvin (K).',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    '1 कैलोरी ऊष्मा कितने जूल के बराबर होती है?',
    '1 calorie of heat is equal to how many joules?',
    ['4.186 जूल (लगभग 4.2 J)', '4.186 J (approx. 4.2 J)'],
    [
      ['1.486 जूल', '1.486 J'],
      ['9.8 जूल', '9.8 J'],
      ['1000 जूल', '1000 J'],
    ],
    '1 ग्राम शुद्ध जल का ताप 1°C (14.5°C से 15.5°C) बढ़ाने के लिए आवश्यक ऊष्मा को 1 कैलोरी कहते हैं, जो 4.186 जूल के समतुल्य है।',
    '1 calorie is the heat needed to raise the temperature of 1 g of water by 1°C, equal to 4.186 Joules.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'मानव शरीर का सामान्य तापमान सेल्सियस और फारेनहाइट पैमाने पर लगभग कितना होता है?',
    'What is the normal human body temperature on Celsius and Fahrenheit scales approximately?',
    ['37°C या 98.6°F', '37°C or 98.6°F'],
    [
      ['35°C या 96.8°F', '35°C or 96.8°F'],
      ['40°C या 104°F', '40°C or 104°F'],
      ['36°C या 99.6°F', '36°C or 99.6°F'],
    ],
    'स्वस्थ मानव शरीर का औसत ताप 37°C (अर्थात 98.6°F या 310.15 K) होता है।',
    'Normal human body temperature is approximately 37°C, which converts to 98.6°F (or 310.15 K).',
    'EASY',
    { formulaHi: 'F = (9/5)C + 32', formulaEn: 'F = (9/5)C + 32' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'किस तापमान पर सेल्सियस और फारेनहाइट पैमाने दोनों समान पाठ्यांक दिखाते हैं?',
    'At which temperature do the Celsius and Fahrenheit scales show the exact same reading?',
    ['-40°', '-40°'],
    [
      ['0°', '0°'],
      ['-273°', '-273°'],
      ['32°', '32°'],
    ],
    'संबंध C/5 = (F - 32)/9 में C = F = x रखने पर x/5 = (x - 32)/9 ⇒ 9x = 5x - 160 ⇒ 4x = -160 ⇒ x = -40° प्राप्त होता है।',
    'Setting C = F = x in C/5 = (F - 32)/9 gives 9x = 5x - 160, so x = -40°. Thus -40°C = -40°F.',
    'MEDIUM',
    { formulaHi: 'C / 5 = (F - 32) / 9', formulaEn: 'C / 5 = (F - 32) / 9' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'परम शून्य तापमान (Absolute Zero) का मान सेल्सियस पैमाने पर कितना होता है?',
    'What is the value of Absolute Zero temperature on the Celsius scale?',
    ['-273.15°C', '-273.15°C'],
    [
      ['0°C', '0°C'],
      ['-100°C', '-100°C'],
      ['-40°C', '-40°C'],
    ],
    'केल्विन पैमाने का 0 K (-273.15°C) परम शून्य ताप कहलाता है, जिस पर सैद्धांतिक रूप से अणुओं की ऊष्मीय गति न्यूनतम हो जाती है। इससे कम तापमान संभव नहीं है।',
    'Absolute zero (0 K) equals -273.15°C, the theoretical lowest temperature where thermal motion of particles is minimum.',
    'MEDIUM',
    { formulaHi: 'K = °C + 273.15', formulaEn: 'K = °C + 273.15' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'डॉक्टरी थर्मामीटर (Clinical thermometer) में मापन की सीमा सामान्यतः कितनी होती है?',
    'What is the usual temperature range of a mercury clinical thermometer?',
    ['35°C से 42°C तक', '35°C to 42°C'],
    [
      ['0°C से 100°C तक', '0°C to 100°C'],
      ['-10°C से 110°C तक', '-10°C to 110°C'],
      ['30°C से 50°C तक', '30°C to 50°C'],
    ],
    'मानव शरीर का तापमान 35°C से नीचे और 42°C से ऊपर नहीं जाता, इसलिए डॉक्टरी थर्मामीटर की रेंज 35°C–42°C (94°F–108°F) होती है और इसमें किंक (विभंग) होता है।',
    'Human body temperature stays within 35°C to 42°C (94°F to 108°F), so clinical thermometers cover this range and have a kink to prevent mercury falling back.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'अत्यंत ठंडे क्षेत्रों (-40°C से नीचे) में तापमान मापने के लिए पारे के बजाय अल्कोहल थर्मामीटर का उपयोग क्यों किया जाता है?',
    'Why is an alcohol thermometer preferred over a mercury thermometer in extremely cold regions?',
    ['अल्कोहल का हिमांक (-115°C) पारे (-39°C) से बहुत कम होता है', 'Alcohol has a much lower freezing point (-115°C) than mercury (-39°C)'],
    [
      ['अल्कोहल का क्वथनांक बहुत अधिक होता है', 'Alcohol has a very high boiling point'],
      ['पारा काँच से चिपक जाता है', 'Mercury sticks to glass'],
      ['अल्कोहल ऊष्मा का उत्तम सुचालक है', 'Alcohol is a better conductor than mercury'],
    ],
    'पारा -39°C पर ही जम जाता है, जबकि एथिल अल्कोहल -115°C तक द्रव अवस्था में रहता है। इसलिए ध्रुवीय प्रदेशों में अल्कोहल थर्मामीटर प्रयुक्त होता है।',
    'Mercury freezes at -39°C, whereas alcohol remains liquid down to -115°C, making it suitable for polar/very cold climates.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'अवस्था परिवर्तन के समय (जैसे 0°C की बर्फ के 0°C के जल में बदलते समय) दी गई ऊष्मा को क्या कहते हैं और तापमान में क्या होता है?',
    'What is the heat absorbed during a change of state (e.g., ice at 0°C melting to water at 0°C) called, and what happens to temperature?',
    ['गुप्त ऊष्मा; तापमान स्थिर रहता है', 'Latent heat; temperature remains constant'],
    [
      ['विशिष्ट ऊष्मा; तापमान बढ़ता है', 'Specific heat; temperature increases'],
      ['गुप्त ऊष्मा; तापमान बढ़ता है', 'Latent heat; temperature increases'],
      ['ऊष्मा धारिता; तापमान घटता है', 'Heat capacity; temperature decreases'],
    ],
    'अवस्था परिवर्तन में दी गई ऊष्मा अणुओं के आकर्षण बंध तोड़ने में व्यय होती है, जिससे ताप नहीं बढ़ता। इसे गुप्त ऊष्मा (Q = mL) कहते हैं।',
    'During phase change, absorbed heat breaks intermolecular bonds without raising temperature; this is latent heat (Q = mL).',
    'EASY',
    { formulaHi: 'Q = mL', formulaEn: 'Q = mL' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'बर्फ के गलन की गुप्त ऊष्मा (Latent heat of fusion of ice) कितनी होती है?',
    'What is the latent heat of fusion of ice?',
    ['80 कैलोरी/ग्राम (या 3.34 × 10⁵ J/kg)', '80 cal/g (or 3.34 × 10⁵ J/kg)'],
    [
      ['540 कैलोरी/ग्राम', '540 cal/g'],
      ['100 कैलोरी/ग्राम', '100 cal/g'],
      ['4.2 कैलोरी/ग्राम', '4.2 cal/g'],
    ],
    '0°C पर 1 ग्राम बर्फ को 0°C के जल में बदलने के लिए 80 कैलोरी ऊष्मा चाहिए, जबकि 100°C पर भाप की गुप्त ऊष्मा 540 cal/g होती है।',
    '1 g of ice at 0°C requires 80 calories to melt into water at 0°C (while latent heat of vaporization of water is 540 cal/g).',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'उबलते पानी की अपेक्षा 100°C की भाप से हाथ अधिक गंभीर रूप से क्यों जलता है?',
    'Why does steam at 100°C cause more severe burns than boiling water at 100°C?',
    ['भाप में वाष्पन की अतिरिक्त गुप्त ऊष्मा (540 cal/g) संचित होती है', 'Steam possesses extra latent heat of vaporization (540 cal/g)'],
    [
      ['भाप का तापमान 100°C से अधिक होता है', 'Steam is at a temperature higher than 100°C'],
      ['भाप त्वचा के अंदर नहीं जाती', 'Steam does not touch skin'],
      ['उबलते पानी की विशिष्ट ऊष्मा शून्य होती है', 'Boiling water has zero specific heat'],
    ],
    '100°C की भाप संघनित होकर 100°C के पानी में बदलते समय प्रति ग्राम 540 कैलोरी अतिरिक्त गुप्त ऊष्मा त्वचा को देती है।',
    'When 100°C steam condenses on skin to 100°C water, it releases an extra 540 cal/g of latent heat of vaporization.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'सभी सामान्य पदार्थों में किस पदार्थ की विशिष्ट ऊष्मा धारिता (Specific heat capacity) सर्वाधिक होती है?',
    'Which common substance has the highest specific heat capacity?',
    ['जल (पानी)', 'Water'],
    [
      ['ताँबा', 'Copper'],
      ['पारा', 'Mercury'],
      ['रेत', 'Sand'],
    ],
    'जल की विशिष्ट ऊष्मा 4186 J/(kg·K) या 1 cal/(g·°C) होती है जो बहुत अधिक है। इसलिए पानी देर से गर्म व देर से ठंडा होता है और कार रेडिएटर व सिकाई बोतल में काम आता है।',
    'Water has a remarkably high specific heat capacity (4186 J/kg·K or 1 cal/g·°C), making it ideal as a coolant in car radiators and hot water bags.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'जल को 0°C से 10°C तक गर्म करने पर उसके आयतन और घनत्व में क्या परिवर्तन होता है?',
    'When water is heated from 0°C to 10°C, how do its volume and density change?',
    ['0°C से 4°C तक आयतन घटता (घनत्व बढ़ता) है, फिर 4°C से 10°C तक आयतन बढ़ता है', 'From 0°C to 4°C volume decreases (density increases), then from 4°C to 10°C volume increases'],
    [
      ['0°C से 10°C तक आयतन लगातार बढ़ता है', 'Volume increases continuously from 0°C to 10°C'],
      ['0°C से 10°C तक आयतन लगातार घटता है', 'Volume decreases continuously from 0°C to 10°C'],
      ['4°C पर घनत्व न्यूनतम होता है', 'Density is minimum at 4°C'],
    ],
    'जल का असंगत प्रसार (Anomalous expansion) 0°C से 4°C के बीच होता है; अतः 4°C पर जल का घनत्व सर्वाधिक और आयतन न्यूनतम होता है।',
    'Water exhibits anomalous expansion between 0°C and 4°C; its density is maximum and volume minimum at 4°C.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'अत्यधिक ठंडे देशों में झील की ऊपरी सतह पर बर्फ जम जाने के बाद भी नीचे मछलियाँ जीवित कैसे रहती हैं?',
    'In freezing winter regions, how do fish survive below the frozen ice surface of a lake?',
    ['बर्फ कुचालक है और तली में 4°C पर जल द्रव रूप में बना रहता है', 'Ice acts as an insulator and water at the bottom remains liquid at 4°C'],
    [
      ['मछलियाँ बर्फ के भीतर जम जाती हैं', 'Fish freeze inside the ice'],
      ['झील के नीचे बर्फ का घनत्व अधिक होता है', 'Ice is denser at the bottom'],
      ['मछलियाँ जल के बिना जीवित रहती हैं', 'Fish survive without water'],
    ],
    '4°C का पानी अधिकतम घनत्व के कारण तली में रहता है और ऊपर जमी बर्फ (कम घनत्व) ऊष्मा कुचालक की तरह काम कर नीचे की ऊष्मा को बाहर नहीं जाने देती।',
    'Water at 4°C is densest and sinks to the bottom, while the floating ice sheet insulates the water below from freezing.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ठोस धातु की छड़ में ऊष्मा का संचरण मुख्यतः किस विधि द्वारा होता है?',
    'By which mode does heat transfer primarily take place through a solid metal rod?',
    ['चालन (Conduction)', 'Conduction'],
    [
      ['संवहन (Convection)', 'Convection'],
      ['विकिरण (Radiation)', 'Radiation'],
      ['वाष्पीकरण (Evaporation)', 'Evaporation'],
    ],
    'ठोसों में कण अपना स्थान छोड़े बिना कंपन के द्वारा पड़ोसी कणों को ऊष्मा स्थानांतरित करते हैं; इस विधि को चालन कहते हैं।',
    'In solids, heat is transferred from particle to particle by vibration without actual movement of matter—this is conduction.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'सूर्य से ऊष्मा पृथ्वी तक किस विधि द्वारा पहुँचती है?',
    'By which mode does heat from the Sun reach the Earth?',
    ['विकिरण (Radiation)', 'Radiation'],
    [
      ['चालन (Conduction)', 'Conduction'],
      ['संवहन (Convection)', 'Convection'],
      ['संघनन (Condensation)', 'Condensation'],
    ],
    'सूर्य और पृथ्वी के बीच अंतरिक्ष में निर्वात है। चालन और संवहन के लिए माध्यम आवश्यक है, जबकि विकिरण बिना माध्यम के विद्युत-चुंबकीय तरंगों से होता है।',
    'Space between the Sun and Earth is mostly vacuum; radiation transfers heat as electromagnetic waves without needing a medium.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'समुद्री समीर (Sea breeze) और थल समीर (Land breeze) का बहना ऊष्मा संचरण की किस विधि का परिणाम है?',
    'Sea breeze and land breeze are natural phenomena resulting from which mode of heat transfer?',
    ['संवहन (Convection)', 'Convection'],
    [
      ['चालन (Conduction)', 'Conduction'],
      ['विकिरण (Radiation)', 'Radiation'],
      ['अभिवहन (Advection) केवल', 'Advection only'],
    ],
    'दिन में थल जल्दी गर्म होकर हवा को ऊपर उठाता है और समुद्र से ठंडी हवा आती है (समुद्री समीर)। यह संवहन धाराओं के कारण होता है।',
    'Differential heating of land and sea sets up convection currents in air, creating sea breezes by day and land breezes by night.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'गर्मियों में सफेद या हल्के रंग के कपड़े पहनना अधिक आरामदायक क्यों होता है?',
    'Why is it more comfortable to wear white or light-coloured clothes in summer?',
    ['सफेद रंग अधिकांश ऊष्मीय विकिरण को परावर्तित कर देता है', 'White colour reflects most of the incident thermal radiation'],
    [
      ['सफेद रंग ऊष्मा का उत्तम अवशोषक है', 'White is the best absorber of heat'],
      ['सफेद रंग पसीना उत्पन्न करता है', 'White generates sweat'],
      ['सफेद रंग चालन को बढ़ाता है', 'White increases conduction'],
    ],
    'हल्के और सफेद रंग सूर्य के प्रकाश एवं ऊष्मीय विकिरण के अच्छे परावर्तक और बुरे अवशोषक होते हैं, जबकि काले कपड़े ऊष्मा अवशोषित कर लेते हैं।',
    'White and light surfaces reflect most radiant heat and absorb very little, keeping the body cooler than dark clothes.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'किरचॉफ का विकिरण नियम क्या बताता है?',
    'What does Kirchhoff’s law of thermal radiation state?',
    ['अच्छे अवशोषक ही अच्छे उत्सर्जक होते हैं', 'Good absorbers are also good emitters of heat'],
    [
      ['अच्छे परावर्तक अच्छे अवशोषक होते हैं', 'Good reflectors are good absorbers'],
      ['सभी रंग समान ऊष्मा अवशोषित करते हैं', 'All colours absorb equal heat'],
      ['ऊष्मा सदैव ठंडे से गर्म पिंड में जाती है', 'Heat flows from cold to hot body'],
    ],
    'समान ताप पर कोई वस्तु जिन तरंगदैर्घ्य के विकिरण को अच्छी तरह अवशोषित करती है, उन्हीं को अच्छी तरह उत्सर्जित भी करती है (जैसे काली सतह)।',
    'At a given temperature, a body that is a good absorber of radiation is equally a good emitter (e.g., a black body).',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'शीतकाल में एक मोटा कंबल ओढ़ने की बजाय दो पतले कंबल एक साथ ओढ़ना अधिक गर्म क्यों लगता है?',
    'Why do two thin blankets provide more warmth in winter than a single thick blanket?',
    ['दोनों कंबलों के बीच फंसी हवा की परत ऊष्मा की कुचालक होती है', 'The layer of air trapped between the two blankets acts as a thermal insulator'],
    [
      ['दो पतले कंबलों का द्रव्यमान अधिक होता है', 'Two thin blankets have more mass'],
      ['हवा ऊष्मा की सुचालक होती है', 'Air is a good conductor of heat'],
      ['दोनों कंबलों के बीच विकिरण बढ़ता है', 'Radiation increases between them'],
    ],
    'स्थिर वायु ऊष्मा की अत्यंत कुचालक होती है; दो कंबलों के बीच की वायु परत शरीर की ऊष्मा को बाहर जाने से रोकती है।',
    'Trapped still air between the two blankets is an excellent insulator that prevents body heat from escaping.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'रेलों की पटरियों के जोड़ों के बीच थोड़ी खाली जगह (Gap) क्यों छोड़ी जाती है?',
    'Why is a small gap left between consecutive railway track rails?',
    ['गर्मियों में तापीय प्रसार के कारण पटरियों को मुड़ने से बचाने के लिए', 'To allow thermal expansion in summer and prevent buckling'],
    [
      ['सर्दियों में पटरियों के सिकुड़ने के लिए', 'To allow contraction in winter'],
      ['पहियों की गति कम करने के लिए', 'To slow down train wheels'],
      ['वर्षा का पानी निकालने के लिए', 'To drain rainwater'],
    ],
    'गर्मियों में तापमान बढ़ने पर लोहे की पटरियों का रेखीय प्रसार (ΔL = LαΔT) होता है; खाली स्थान न होने पर वे टेढ़ी हो सकती हैं।',
    'Iron rails expand in length during hot weather (ΔL = LαΔT); gaps accommodate this expansion so tracks do not buckle.',
    'EASY',
    { formulaHi: 'ΔL = L α ΔT', formulaEn: 'ΔL = L α ΔT' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'गीले कपड़ों के जल्दी सूखने के लिए कौन-सी परिस्थिति सर्वाधिक अनुकूल होती है?',
    'Which condition is most favourable for fast evaporation (drying of wet clothes)?',
    ['उच्च तापमान, कम आर्द्रता, तेज हवा और बड़ा पृष्ठीय क्षेत्रफल', 'High temperature, low humidity, high wind speed, and large surface area'],
    [
      ['कम तापमान, उच्च आर्द्रता और बंद कमरा', 'Low temperature, high humidity, closed room'],
      ['उच्च तापमान और 100% आर्द्रता', 'High temperature and 100% humidity'],
      ['कपड़ों को मोड़कर रखना', 'Folding the clothes tightly'],
    ],
    'वाष्पीकरण की दर तापमान, हवा की गति और खुले क्षेत्रफल के बढ़ने पर बढ़ती है तथा वायु की आर्द्रता कम होने पर तेज होती है।',
    'Rate of evaporation increases with higher temperature, larger exposed surface area, stronger wind, and lower relative humidity.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'गर्मियों में मिट्टी के घड़े (मटके) का पानी ठंडा क्यों हो जाता है?',
    'Why does water kept in an earthen pot (matka) become cool during summer?',
    ['मटके के सूक्ष्म छिद्रों से जल के वाष्पीकरण द्वारा गुप्त ऊष्मा अवशोषित होने से', 'Evaporation of water through fine pores absorbs latent heat from remaining water'],
    [
      ['मिट्टी ऊष्मा की उत्तम सुचालक है', 'Clay is a good conductor of heat'],
      ['मटके के अंदर हिमीकरण होता है', 'Freezing happens inside the pot'],
      ['बाहरी हवा घड़े के अंदर घनीभूत होती है', 'Outside air condenses inside'],
    ],
    'वाष्पीकरण एक शीतलन प्रक्रिया है। घड़े के छिद्रों से रिसकर भाप बनने वाला जल अंदर के पानी से वाष्पन की गुप्त ऊष्मा ले लेता है, जिससे पानी ठंडा होता है।',
    'Water seeping through tiny pores evaporates by absorbing latent heat from the pot and the water inside, cooling it.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'बर्फ में नमक मिलाने पर उसके गलनांक (Melting point) पर क्या प्रभाव पड़ता है?',
    'What happens to the melting point of ice when common salt is added to it?',
    ['गलनांक घट जाता है (0°C से नीचे चला जाता है)', 'Melting point decreases (drops below 0°C)'],
    [
      ['गलनांक बढ़ जाता है', 'Melting point increases'],
      ['गलनांक स्थिर रहता है', 'Melting point remains constant'],
      ['बर्फ तुरंत उबलने लगती है', 'Ice immediately boils'],
    ],
    'अशुद्धि (नमक) मिलाने पर बर्फ का गलनांक घटकर लगभग -21°C तक गिर सकता है; इसी हिमकारी मिश्रण का उपयोग कुल्फी जमाने में होता है।',
    'Adding salt lowers the freezing/melting point of ice below 0°C (down to ~-21°C), forming a freezing mixture used for making kulfi.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'न्यूटन के शीतलन नियम (Newton’s Law of Cooling) के अनुसार किसी गर्म वस्तु के ठंडे होने की दर किसके समानुपाती होती है?',
    'According to Newton’s Law of Cooling, the rate of cooling of a hot body is proportional to:',
    ['वस्तु और परिवेश के तापमान के अंतर के', 'Temperature difference between the body and its surroundings'],
    [
      ['केवल वस्तु के द्रव्यमान के', 'Only mass of the body'],
      ['परिवेश के तापमान के वर्ग के', 'Square of surrounding temperature'],
      ['वस्तु के आयतन के', 'Volume of the body'],
    ],
    'तापांतर कम होने पर वस्तु धीरे ठंडी होती है और तापांतर अधिक होने पर तेजी से ठंडी होती है। इसी कारण चाय शुरू में जल्दी और बाद में धीरे ठंडी होती है।',
    'Rate of heat loss is directly proportional to the excess temperature of the body over the surroundings (for small temperature differences).',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'निम्नलिखित में से किस धातु की ऊष्मीय चालकता सर्वाधिक होती है?',
    'Which of the following metals has the highest thermal conductivity?',
    ['चाँदी (Silver)', 'Silver'],
    [
      ['लोहा', 'Iron'],
      ['सीसा (लेड)', 'Lead'],
      ['पारा', 'Mercury'],
    ],
    'चाँदी ऊष्मा और विद्युत दोनों की सर्वोत्तम सुचालक है; इसके बाद ताँबा और एल्युमिनियम आते हैं। सीसा (Lead) धातुओं में अपेक्षाकृत खराब चालक है।',
    'Silver is the best conductor of both heat and electricity among metals, followed by copper and aluminium.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ठोस से बिना द्रव अवस्था में बदले सीधे गैस अवस्था में परिवर्तित होने की प्रक्रिया क्या कहलाती है?',
    'The process by which a solid changes directly into a gas without passing through the liquid state is called:',
    ['ऊर्ध्वपातन (Sublimation)', 'Sublimation'],
    [
      ['वाष्पीकरण (Evaporation)', 'Evaporation'],
      ['संघनन (Condensation)', 'Condensation'],
      ['गलन (Melting)', 'Melting'],
    ],
    'कपूर, नेफ़्थलीन की गोलियाँ, अमोनियम क्लोराइड (नौसादर), आयोडीन और शुष्क बर्फ (ठोस CO₂) ऊर्ध्वपातन के प्रमुख उदाहरण हैं।',
    'Camphor, naphthalene, ammonium chloride, iodine, and dry ice (solid CO₂) undergo sublimation directly from solid to vapour.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'थर्मोकपल (तापांतर-युग्म) तापमापी किस वैज्ञानिक प्रभाव पर कार्य करता है?',
    'On which effect does a thermocouple thermometer work?',
    ['सीबेक प्रभाव (Seebeck effect)', 'Seebeck effect'],
    [
      ['डॉपलर प्रभाव', 'Doppler effect'],
      ['जूल प्रभाव', 'Joule effect'],
      ['प्रकाश-विद्युत प्रभाव', 'Photoelectric effect'],
    ],
    'जब दो असमान धातुओं के तारों की दो संधियों को भिन्न-भिन्न ताप पर रखा जाता है तो परिपथ में विद्युत वाहक बल उत्पन्न होता है—यही सीबेक प्रभाव है।',
    'A thermocouple works on the Seebeck effect, generating a temperature-dependent voltage across junctions of two dissimilar metals.',
    'HARD'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'किस प्रकार के तापमापी के रूप में प्लेटिनम प्रतिरोध थर्मामीटर काम करता है?',
    'A platinum resistance thermometer measures temperature based on change in:',
    ['ताप के साथ धातु के विद्युत प्रतिरोध में परिवर्तन', 'Variation of electrical resistance with temperature'],
    [
      ['पारे के आयतन में प्रसार', 'Volume expansion of mercury'],
      ['गैस के दाब में परिवर्तन', 'Pressure change of a gas'],
      ['तापीय विकिरण की तरंगदैर्घ्य', 'Wavelength of thermal radiation'],
    ],
    'धातुओं का विद्युत प्रतिरोध तापमान बढ़ने पर बढ़ता है; प्लेटिनम तार के प्रतिरोध मापन से -200°C से 1200°C तक सटीक ताप मापा जा सकता है।',
    'Resistance of platinum varies predictably with temperature, enabling accurate measurement from roughly -200°C to 1200°C.',
    'HARD'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'एक बंदूक की गोली का द्रव्यमान 10 ग्राम है और वह 200 m/s के वेग से चल रही है। उसकी गतिज ऊर्जा कितनी होगी?',
    'A bullet of mass 10 g is moving at a speed of 200 m/s. What is its kinetic energy?',
    ['200 जूल', '200 J'],
    [
      ['2000 जूल', '2000 J'],
      ['400 जूल', '400 J'],
      ['20 जूल', '20 J'],
    ],
    'm = 10 g = 0.01 kg। KE = ½mv² = ½ × 0.01 × (200)² = 0.005 × 40000 = 200 जूल।',
    'm = 10 g = 0.01 kg. KE = ½ × 0.01 × 200² = 0.005 × 40000 = 200 J.',
    'MEDIUM',
    { formulaHi: 'KE = ½mv²', formulaEn: 'KE = ½mv²' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'सौर पैनल (Solar Cell) किस ऊर्जा को सीधे किस ऊर्जा में परिवर्तित करता है?',
    'A solar cell directly converts which form of energy into electricity?',
    ['सौर (प्रकाश) ऊर्जा को विद्युत ऊर्जा में', 'Solar (light) energy into electrical energy'],
    [
      ['तापीय ऊर्जा को यांत्रिक ऊर्जा में', 'Thermal energy into mechanical energy'],
      ['रासायनिक ऊर्जा को प्रकाश ऊर्जा में', 'Chemical energy into light energy'],
      ['विद्युत ऊर्जा को सौर ऊर्जा में', 'Electrical energy into solar energy'],
    ],
    'सोलर सेल अर्धचालक (प्रायः सिलिकॉन) से बने होते हैं जो फोटोवोल्टाइक प्रभाव द्वारा सूर्य के प्रकाश को सीधे दिष्ट विद्युत धारा (DC) में बदलते हैं।',
    'Solar cells (usually silicon semiconductors) use the photovoltaic effect to convert sunlight directly into direct-current electrical energy.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    '25°C तापमान को केल्विन पैमाने में बदलने पर मान कितना होगा?',
    'What is 25°C on the Kelvin scale?',
    ['298.15 K (लगभग 298 K)', '298.15 K (approx. 298 K)'],
    [
      ['248 K', '248 K'],
      ['373 K', '373 K'],
      ['273 K', '273 K'],
    ],
    'K = °C + 273.15 = 25 + 273.15 = 298.15 K (प्रायः गणना में 298 K लिखा जाता है)।',
    'K = °C + 273.15 = 25 + 273.15 = 298.15 K (commonly taken as 298 K).',
    'EASY',
    { formulaHi: 'T(K) = t(°C) + 273.15', formulaEn: 'T(K) = t(°C) + 273.15' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ऊष्मागतिकी का प्रथम नियम वास्तव में किस संरक्षण नियम का रूप है?',
    'The First Law of Thermodynamics is essentially a statement of conservation of:',
    ['ऊर्जा संरक्षण का नियम', 'Conservation of energy'],
    [
      ['संवेग संरक्षण का नियम', 'Conservation of momentum'],
      ['आवेश संरक्षण का नियम', 'Conservation of charge'],
      ['द्रव्यमान संरक्षण का नियम', 'Conservation of mass'],
    ],
    'ऊष्मागतिकी के प्रथम नियम (ΔQ = ΔU + ΔW) के अनुसार किसी निकाय को दी गई ऊष्मा उसकी आंतरिक ऊर्जा बढ़ाने और बाह्य कार्य करने में व्यय होती है।',
    'The First Law of Thermodynamics (ΔQ = ΔU + ΔW) states that heat supplied equals the increase in internal energy plus external work done.',
    'MEDIUM',
    { formulaHi: 'ΔQ = ΔU + ΔW', formulaEn: 'ΔQ = ΔU + ΔW' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'आकाश में बादलों के छाए रहने वाली रातें साफ आकाश वाली रातों की तुलना में अधिक गर्म क्यों होती हैं?',
    'Why are cloudy nights warmer than clear nights?',
    ['बादल पृथ्वी से निकलने वाले अवरक्त तापीय विकिरण को वापस परावर्तित कर देते हैं', 'Clouds reflect back the infrared heat radiation emitted by the Earth'],
    [
      ['बादल स्वयं अत्यधिक ऊष्मा उत्पन्न करते हैं', 'Clouds generate huge amounts of heat'],
      ['बादल चालन द्वारा पृथ्वी को गर्म करते हैं', 'Clouds heat Earth by conduction'],
      ['बादल सूर्य की किरणों को रात में रोकते हैं', 'Clouds trap sunlight at night'],
    ],
    'रात में पृथ्वी की सतह पार्थिव विकिरण द्वारा ठंडी होती है; बादल इन अवरक्त किरणों को अवशोषित कर वापस पृथ्वी की ओर उत्सर्जित/परावर्तित कर देते हैं।',
    'Clouds absorb and re-radiate/reflect terrestrial infrared radiation back towards the surface, preventing rapid nocturnal cooling.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'एक 50 किग्रा का व्यक्ति 10 सेकंड में 4 मीटर ऊँची सीढ़ी चढ़ता है। यदि g = 10 m/s² हो, तो उसकी औसत शक्ति क्या होगी?',
    'A 50 kg person climbs a 4 m high staircase in 10 seconds. Taking g = 10 m/s², what is his average power?',
    ['200 वाट', '200 W'],
    [
      ['2000 वाट', '2000 W'],
      ['500 वाट', '500 W'],
      ['400 वाट', '400 W'],
    ],
    'किया गया कार्य W = mgh = 50 × 10 × 4 = 2000 जूल। शक्ति P = W / t = 2000 / 10 = 200 वाट।',
    'Work done W = mgh = 50 × 10 × 4 = 2000 J. Power P = W / t = 2000 / 10 = 200 W.',
    'MEDIUM',
    { formulaHi: 'P = mgh / t', formulaEn: 'P = mgh / t' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'जब बर्फ का एक बड़ा टुकड़ा पिघलता है और बाद में पानी वाष्प में बदलता है, तो 0°C से 100°C के बीच किस प्रक्रिया में सबसे अधिक ऊष्मा अवशोषित होती है?',
    'Among melting ice at 0°C, heating water from 0°C to 100°C, and vaporizing water at 100°C, which absorbs the most heat per gram?',
    ['100°C पर पानी का भाप में बदलना (540 cal/g)', 'Vaporizing water into steam at 100°C (540 cal/g)'],
    [
      ['0°C पर बर्फ का पिघलना (80 cal/g)', 'Melting ice at 0°C (80 cal/g)'],
      ['जल को 0°C से 100°C तक गर्म करना (100 cal/g)', 'Heating water from 0°C to 100°C (100 cal/g)'],
      ['सभी में बराबर ऊष्मा लगती है', 'All absorb equal heat'],
    ],
    '1 ग्राम बर्फ पिघलने में 80 cal, 0°C से 100°C तक पानी गर्म होने में 100 cal, तथा 100°C पर भाप बनने में सर्वाधिक 540 cal ऊष्मा लगती है।',
    'Per gram: melting uses 80 cal, heating 0°C→100°C uses 100 cal, while vaporization at 100°C absorbs 540 cal—the largest.',
    'HARD'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'रेफ्रिजरेटर में कूलिंग कॉइल (फ्रीजर) को सबसे ऊपर क्यों लगाया जाता है?',
    'Why is the freezer/cooling coil placed at the top inside a refrigerator?',
    ['ठंडी हवा सघन होकर नीचे उतरती है और संवहन धारा से पूरा फ्रिज ठंडा होता है', 'Cold air is denser, sinks down, and cools the entire interior by convection'],
    [
      ['ठंडी हवा हल्की होकर ऊपर ही रहती है', 'Cold air stays only at the top'],
      ['ताकि फ्रिज भारी न हो', 'To balance the weight'],
      ['विकिरण को रोकने के लिए', 'To stop radiation'],
    ],
    'ऊपर की ठंडी हवा भारी होने के कारण नीचे आती है और नीचे की गर्म हवा ऊपर जाकर ठंडी होती है; इस संवहन चक्र से फ्रिज एकसमान ठंडा होता है।',
    'Cool dense air sinks from the top while warmer air rises to be cooled, establishing convection currents throughout the fridge.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'द्रव से वाष्प में बदलने की क्रिया जो क्वथनांक से कम किसी भी तापमान पर द्रव की केवल सतह से होती है, क्या कहलाती है?',
    'The change of a liquid into vapour from its surface at any temperature below its boiling point is called:',
    ['वाष्पीकरण (Evaporation)', 'Evaporation'],
    [
      ['क्वथन (Boiling)', 'Boiling'],
      ['संघनन (Condensation)', 'Condensation'],
      ['हिमीकरण (Freezing)', 'Freezing'],
    ],
    'वाष्पीकरण एक सतही परिघटना है जो किसी भी ताप पर होती है और इससे ठंडक उत्पन्न होती है, जबकि क्वथन संपूर्ण द्रव में एक निश्चित ताप पर होता है।',
    'Evaporation is a surface phenomenon occurring at all temperatures below the boiling point, causing cooling.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'जलविद्युत संयंत्र (Hydroelectric power plant) में ऊर्जा रूपांतरण का सही क्रम क्या है?',
    'What is the correct sequence of energy conversion in a hydroelectric power plant?',
    ['स्थितिज ऊर्जा → गतिज ऊर्जा → यांत्रिक ऊर्जा → विद्युत ऊर्जा', 'Potential energy → Kinetic energy → Mechanical energy → Electrical energy'],
    [
      ['गतिज ऊर्जा → रासायनिक ऊर्जा → विद्युत ऊर्जा', 'Kinetic → Chemical → Electrical'],
      ['तापीय ऊर्जा → स्थितिज ऊर्जा → विद्युत ऊर्जा', 'Thermal → Potential → Electrical'],
      ['नाभिकीय ऊर्जा → यांत्रिक ऊर्जा → विद्युत ऊर्जा', 'Nuclear → Mechanical → Electrical'],
    ],
    'बांध में संचित पानी की स्थितिज ऊर्जा गिरने पर गतिज ऊर्जा में बदलती है, जो टरबाइन को घुमाकर (यांत्रिक) जनरेटर द्वारा विद्युत बनाती है।',
    'Stored water’s potential energy converts to kinetic energy when falling, spinning turbines (mechanical) to drive electrical generators.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'तांबे की एक मोटी प्लेट के बीच में एक गोलाकार छेद है। यदि प्लेट को गर्म किया जाए, तो छेद का आकार कैसा होगा?',
    'A thick copper plate has a circular hole in its centre. When the plate is heated, what happens to the size of the hole?',
    ['छेद का आकार बढ़ जाएगा', 'The hole will increase in size'],
    [
      ['छेद का आकार घट जाएगा', 'The hole will shrink'],
      ['छेद का आकार वही रहेगा', 'The hole remains unchanged'],
      ['छेद अंडाकार हो जाएगा', 'The hole turns elliptical'],
    ],
    'तापीय प्रसार किसी प्लेट के सभी रेखीय आयामों को एकसमान बढ़ाता है (मानो छेद भी धातु से भरा हो), अतः गर्म करने पर छेद का व्यास भी बढ़ता है।',
    'Thermal expansion scales every linear dimension outward uniformly, so the diameter of the hole expands just as the solid metal around it does.',
    'HARD'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'सामान्य दाब पर शुद्ध जल का हिमांक और क्वथनांक क्रमशः कितने केल्विन (K) होते हैं?',
    'What are the freezing point and boiling point of pure water at normal pressure on the Kelvin scale?',
    ['273.15 K और 373.15 K', '273.15 K and 373.15 K'],
    [
      ['0 K और 100 K', '0 K and 100 K'],
      ['273 K और 212 K', '273 K and 212 K'],
      ['32 K और 212 K', '32 K and 212 K'],
    ],
    '0°C = 273.15 K (हिमांक) तथा 100°C = 373.15 K (क्वथनांक) होता है।',
    'On the Kelvin scale (K = °C + 273.15), water freezes at 273.15 K and boils at 373.15 K.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'एक स्प्रिंग जिसका बल नियतांक k = 200 N/m है, को 0.1 मीटर खींचा जाता है। उसमें संचित प्रत्यास्थ स्थितिज ऊर्जा कितनी होगी?',
    'A spring with force constant k = 200 N/m is stretched by 0.1 m. What is the elastic potential energy stored in it?',
    ['1 जूल', '1 J'],
    [
      ['10 जूल', '10 J'],
      ['2 जूल', '2 J'],
      ['0.5 जूल', '0.5 J'],
    ],
    'संचित ऊर्जा U = ½kx² = ½ × 200 × (0.1)² = 100 × 0.01 = 1 जूल।',
    'Stored elastic potential energy U = ½kx² = ½ × 200 × (0.1)² = 1 J.',
    'HARD',
    { formulaHi: 'U = ½kx²', formulaEn: 'U = ½kx²' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'गर्म वस्तुओं से निकलने वाला तापीय विकिरण विद्युत-चुंबकीय स्पेक्ट्रम के किस भाग में मुख्यतः होता है?',
    'Thermal radiation emitted by hot terrestrial objects mainly lies in which region of the electromagnetic spectrum?',
    ['अवरक्त (Infrared) क्षेत्र में', 'Infrared region'],
    [
      ['पराबैंगनी (Ultraviolet) क्षेत्र में', 'Ultraviolet region'],
      ['गामा किरण क्षेत्र में', 'Gamma ray region'],
      ['रेडियो तरंग क्षेत्र में', 'Radio wave region'],
    ],
    'सामान्य और मध्यम गर्म वस्तुएँ मुख्य रूप से अवरक्त (Infrared) विकिरण उत्सर्जित करती हैं, जिन्हें हम गर्मी के रूप में महसूस करते हैं।',
    'Warm objects primarily emit electromagnetic radiation in the infrared (IR) region, which produces the sensation of heat.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'विंडमिल (पवन चक्की) में किस प्रकार की ऊर्जा को विद्युत ऊर्जा में परिवर्तित किया जाता है?',
    'In a wind turbine (windmill), which energy of wind is converted into electrical energy?',
    ['पवन की गतिज ऊर्जा', 'Kinetic energy of wind'],
    [
      ['पवन की रासायनिक ऊर्जा', 'Chemical energy of wind'],
      ['पवन की नाभिकीय ऊर्जा', 'Nuclear energy of wind'],
      ['पवन की तापीय ऊर्जा', 'Thermal energy of wind'],
    ],
    'बहती हुई हवा की गतिज ऊर्जा पवन चक्की के ब्लेडों को घुमाकर टरबाइन/जनरेटर से बिजली बनाती है।',
    'Moving air possesses kinetic energy, which rotates the blades of a wind turbine to generate electricity.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ऊष्मा का यांत्रिक तुल्यांक (J) किस वैज्ञानिक ने प्रयोग द्वारा ज्ञात किया था?',
    'Which scientist experimentally determined the mechanical equivalent of heat?',
    ['जेम्स प्रेस्कॉट जूल', 'James Prescott Joule'],
    [
      ['लॉर्ड केल्विन', 'Lord Kelvin'],
      ['सादिकार्नो', 'Sadi Carnot'],
      ['एंडरस सेल्सियस', 'Anders Celsius'],
    ],
    'जेम्स जूल ने पैडल-व्हील प्रयोग से सिद्ध किया कि किया गया यांत्रिक कार्य (W) उत्पन्न ऊष्मा (Q) के अनुक्रमानुपाती होता है (W = JQ)।',
    'James Prescott Joule used a paddle-wheel experiment to show that mechanical work W is directly proportional to heat Q produced.',
    'MEDIUM',
    { formulaHi: 'W = JQ', formulaEn: 'W = JQ' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'जब किसी वस्तु पर बल लगाने से वस्तु बल की विपरीत दिशा में विस्थापित होती है, तो किया गया कार्य कैसा होता है?',
    'When the displacement of a body is opposite to the direction of the applied force, the work done by that force is:',
    ['ऋणात्मक (Negative)', 'Negative'],
    [
      ['धनात्मक (Positive)', 'Positive'],
      ['शून्य (Zero)', 'Zero'],
      ['अनंत (Infinite)', 'Infinite'],
    ],
    'बल और विस्थापन के बीच कोण θ = 180° होने पर cos 180° = -1 होता है, अतः कार्य W = -Fs (ऋणात्मक) होता है, जैसे घर्षण द्वारा किया गया कार्य।',
    'When θ = 180°, cos 180° = -1, making work W = -Fs negative—for example, work done by friction.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'शीतल पेय या आइसक्रीम की तुलना में 0°C की बर्फ मुँह में रखने पर अधिक ठंडक क्यों देती है?',
    'Why does ice at 0°C feel cooler in the mouth than water at 0°C?',
    ['बर्फ पिघलने के लिए मुँह से अतिरिक्त गुप्त ऊष्मा (80 cal/g) अवशोषित करती है', 'Ice absorbs extra latent heat of fusion (80 cal/g) from the mouth to melt'],
    [
      ['बर्फ का तापमान 0°C से कम होता है', 'Ice is at a temperature lower than 0°C'],
      ['0°C के पानी की विशिष्ट ऊष्मा अधिक है', 'Water at 0°C has higher specific heat'],
      ['बर्फ में नमक मिला होता है', 'Ice contains salt'],
    ],
    '0°C की बर्फ को 0°C के पानी में बदलने के लिए प्रति ग्राम 80 कैलोरी गुप्त ऊष्मा मुँह से अवशोषित होती है, जिससे अधिक ठंडक लगती है।',
    'Melting 1 g of ice at 0°C into water at 0°C absorbs 80 calories of latent heat from the mouth, producing a greater cooling sensation.',
    'MEDIUM'
  ),

  // =========================================================================
  // 4. प्रकाश (परावर्तन, अपवर्तन, दर्पण, लेंस, मानव नेत्र, प्रिज्म) एवं ध्वनि — 80 Qs
  // =========================================================================
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'निर्वात (Vacuum) में प्रकाश की चाल लगभग कितनी होती है?',
    'What is the approximate speed of light in a vacuum?',
    ['3 × 10⁸ मीटर/सेकंड', '3 × 10⁸ m/s'],
    [
      ['3 × 10⁶ मीटर/सेकंड', '3 × 10⁶ m/s'],
      ['3 × 10¹⁰ मीटर/सेकंड', '3 × 10¹⁰ m/s'],
      ['332 मीटर/सेकंड', '332 m/s'],
    ],
    'निर्वात में प्रकाश की चाल सर्वाधिक 299,792,458 m/s (लगभग 3 × 10⁸ m/s या 3 लाख किमी/सेकंड) होती है।',
    'Light travels fastest in vacuum at approximately 3 × 10⁸ m/s (300,000 km/s).',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'सूर्य का प्रकाश पृथ्वी तक पहुँचने में लगभग कितना समय लेता है?',
    'Approximately how much time does sunlight take to reach the Earth?',
    ['लगभग 8 मिनट 20 सेकंड (500 सेकंड)', 'About 8 minutes 20 seconds (500 s)'],
    [
      ['लगभग 1.3 सेकंड', 'About 1.3 seconds'],
      ['लगभग 15 मिनट', 'About 15 minutes'],
      ['लगभग 2 मिनट 10 सेकंड', 'About 2 minutes 10 seconds'],
    ],
    'सूर्य से पृथ्वी की औसत दूरी 1.496 × 10¹¹ m को प्रकाश की चाल 3 × 10⁸ m/s से भाग देने पर लगभग 499 सेकंड (8 मिनट 19–20 सेकंड) प्राप्त होते हैं।',
    'Dividing 1 AU (1.496 × 10¹¹ m) by speed of light (3 × 10⁸ m/s) gives ~499 seconds, or about 8 minutes 20 seconds.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'प्रकाश के परावर्तन के नियम के अनुसार आपतन कोण (i) और परावर्तन कोण (r) में क्या संबंध होता है?',
    'According to the law of reflection of light, what is the relation between angle of incidence (i) and angle of reflection (r)?',
    ['आपतन कोण सदैव परावर्तन कोण के बराबर होता है (∠i = ∠r)', 'Angle of incidence is always equal to angle of reflection (∠i = ∠r)'],
    [
      ['∠i सदैव ∠r से बड़ा होता है', '∠i is always greater than ∠r'],
      ['∠i + ∠r = 90°', '∠i + ∠r = 90°'],
      ['∠i और ∠r का अनुपात स्थिर होता है', 'Ratio of ∠i to ∠r is constant'],
    ],
    'परावर्तन के पहले नियम के अनुसार ∠i = ∠r होता है, और दूसरे नियम से आपतित किरण, परावर्तित किरण व अभिलंब एक ही तल में होते हैं।',
    'First law of reflection states ∠i = ∠r, and second law states incident ray, reflected ray, and normal all lie in the same plane.',
    'EASY',
    { formulaHi: '∠i = ∠r', formulaEn: '∠i = ∠r' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'समतल दर्पण (Plane mirror) द्वारा किसी वस्तु का बनने वाला प्रतिबिंब कैसा होता है?',
    'What is the nature of the image formed by a plane mirror?',
    ['आभासी, सीधा, वस्तु के बराबर आकार का और पार्श्व परिवर्तित', 'Virtual, erect, same size as object, and laterally inverted'],
    [
      ['वास्तविक, उल्टा और छोटा', 'Real, inverted, and diminished'],
      ['आभासी, उल्टा और बड़ा', 'Virtual, inverted, and magnified'],
      ['वास्तविक, सीधा और बराबर', 'Real, erect, and same size'],
    ],
    'समतल दर्पण सदैव आभासी (Virtual), सीधा, समान आकार का और पार्श्व परिवर्तित (बायाँ-दायाँ उल्टा) प्रतिबिंब उतनी ही दूरी पर पीछे बनाता है।',
    'A plane mirror always forms a virtual, upright, same-sized, laterally inverted image at the same distance behind the mirror.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'यदि एक व्यक्ति अपना पूरा प्रतिबिंब समतल दर्पण में देखना चाहता है, तो दर्पण की न्यूनतम ऊँचाई कितनी होनी चाहिए?',
    'If a person wants to see their full-length image in a plane mirror, what should be the minimum height of the mirror?',
    ['व्यक्ति की ऊँचाई का आधा (h/2)', 'Half the height of the person (h/2)'],
    [
      ['व्यक्ति की पूरी ऊँचाई के बराबर (h)', 'Equal to person’s height (h)'],
      ['व्यक्ति की ऊँचाई का एक-चौथाई (h/4)', 'One-fourth of person’s height (h/4)'],
      ['व्यक्ति की ऊँचाई का दोगुना (2h)', 'Double the person’s height (2h)'],
    ],
    'पूर्ण प्रतिबिंब देखने के लिए समतल दर्पण की न्यूनतम ऊँचाई प्रेक्षक की ऊँचाई की कम से कम आधी (h/2) होनी चाहिए।',
    'To see the full body image, the minimum vertical height of a plane mirror must be half the person’s height (h/2).',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'यदि दो समतल दर्पण परस्पर 90° के कोण पर रखे हों और उनके बीच एक मोमबत्ती रखी हो, तो कुल कितने प्रतिबिंब दिखाई देंगे?',
    'If two plane mirrors are placed at 90° to each other with a candle between them, how many images will be formed?',
    ['3 प्रतिबिंब', '3 images'],
    [
      ['2 प्रतिबिंब', '2 images'],
      ['4 प्रतिबिंब', '4 images'],
      ['अनंत प्रतिबिंब', 'Infinite images'],
    ],
    'θ कोण पर झुके दो समतल दर्पणों से बने प्रतिबिंबों की संख्या n = (360°/θ) - 1 (जब 360/θ सम हो)। यहाँ 360/90 - 1 = 4 - 1 = 3 प्रतिबिंब बनेंगे।',
    'Number of images n = (360°/θ) - 1 when 360°/θ is even. For θ = 90°, n = (360/90) - 1 = 3 images.',
    'MEDIUM',
    { formulaHi: 'n = (360° / θ) - 1', formulaEn: 'n = (360° / θ) - 1' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'दाढ़ी बनाने (Shaving mirror) तथा दंत चिकित्सकों द्वारा दाँतों का बड़ा प्रतिबिंब देखने के लिए किस दर्पण का प्रयोग किया जाता है?',
    'Which mirror is used as a shaving mirror and by dentists to view an enlarged image of teeth?',
    ['अवतल दर्पण (Concave mirror)', 'Concave mirror'],
    [
      ['उत्तल दर्पण (Convex mirror)', 'Convex mirror'],
      ['समतल दर्पण (Plane mirror)', 'Plane mirror'],
      ['बेलनाकार दर्पण', 'Cylindrical mirror'],
    ],
    'जब वस्तु अवतल दर्पण के ध्रुव (P) और फोकस (F) के बीच रखी जाती है, तो उसका आभासी, सीधा और आवर्धित (बड़ा) प्रतिबिंब बनता है।',
    'When an object is placed between the pole and focus of a concave mirror, it forms a virtual, erect, and magnified image.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'मोटर वाहनों में पीछे का यातायात देखने के लिए ड्राइवर की बगल में (Rear-view mirror) किस दर्पण का उपयोग होता है?',
    'Which mirror is used as a rear-view (side) mirror in vehicles to see traffic behind?',
    ['उत्तल दर्पण (Convex mirror)', 'Convex mirror'],
    [
      ['अवतल दर्पण (Concave mirror)', 'Concave mirror'],
      ['समतल दर्पण', 'Plane mirror'],
      ['परवलयाकार दर्पण', 'Parabolic mirror'],
    ],
    'उत्तल दर्पण सदैव वस्तु का सीधा और छोटा प्रतिबिंब बनाता है तथा इसका दृष्टि क्षेत्र (Field of view) बहुत विस्तृत होता है।',
    'A convex mirror always forms an erect, diminished image and provides a much wider field of view of rear traffic.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'कार की हेडलाइट, टॉर्च और सर्चलाइट में परावर्तक (Reflector) के रूप में किस दर्पण का उपयोग होता है?',
    'Which type of mirror is used as a reflector in car headlights, torches, and searchlights?',
    ['अवतल दर्पण', 'Concave mirror'],
    [
      ['उत्तल दर्पण', 'Convex mirror'],
      ['समतल दर्पण', 'Plane mirror'],
      ['अवतल लेंस', 'Concave lens'],
    ],
    'अवतल दर्पण के मुख्य फोकस पर बल्ब रखने से परावर्तन के बाद प्रकाश की शक्तिशाली समानांतर किरण पुंज प्राप्त होती है।',
    'Placing the bulb at the focus of a concave mirror produces a powerful parallel beam of light after reflection.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'किसी गोलीय दर्पण की वक्रता त्रिज्या (R) 20 सेमी है। उसकी फोकस दूरी (f) क्या होगी?',
    'The radius of curvature (R) of a spherical mirror is 20 cm. What is its focal length (f)?',
    ['10 सेमी', '10 cm'],
    [
      ['40 सेमी', '40 cm'],
      ['20 सेमी', '20 cm'],
      ['5 सेमी', '5 cm'],
    ],
    'गोलीय दर्पण के लिए फोकस दूरी वक्रता त्रिज्या की आधी (f = R/2) होती है। अतः f = 20 / 2 = 10 सेमी।',
    'For a spherical mirror, focal length f = R / 2. Thus f = 20 / 2 = 10 cm.',
    'EASY',
    { formulaHi: 'f = R / 2', formulaEn: 'f = R / 2' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'गोलीय दर्पण का सही सूत्र (Mirror formula) क्या है?',
    'Which is the correct spherical mirror formula?',
    ['1/f = 1/v + 1/u', '1/f = 1/v + 1/u'],
    [
      ['1/f = 1/v - 1/u', '1/f = 1/v - 1/u'],
      ['f = u + v', 'f = u + v'],
      ['1/f = u + v', '1/f = u + v'],
    ],
    'दर्पण सूत्र 1/f = 1/v + 1/u होता है (जहाँ f फोकस दूरी, v प्रतिबिंब दूरी, u वस्तु दूरी है); जबकि लेंस सूत्र 1/f = 1/v - 1/u है।',
    'The mirror formula is 1/f = 1/v + 1/u (whereas the thin lens formula is 1/f = 1/v - 1/u).',
    'MEDIUM',
    { formulaHi: '1/f = 1/v + 1/u', formulaEn: '1/f = 1/v + 1/u' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जब प्रकाश की किरण एक माध्यम से दूसरे माध्यम में प्रवेश करती है, तो उसकी कौन-सी विशेषता अपरिवर्तित रहती है?',
    'When light travels from one medium to another, which property remains unchanged?',
    ['आवृत्ति (Frequency)', 'Frequency'],
    [
      ['चाल (Speed)', 'Speed'],
      ['तरंगदैर्घ्य (Wavelength)', 'Wavelength'],
      ['दिशा (Direction)', 'Direction'],
    ],
    'अपवर्तन के दौरान प्रकाश की चाल और तरंगदैर्घ्य बदल जाते हैं, किंतु प्रकाश की आवृत्ति स्रोत पर निर्भर होने के कारण अपरिवर्तित रहती है।',
    'During refraction, speed and wavelength change according to the medium, whereas frequency (determined by the source) stays constant.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जब प्रकाश की किरण विरल माध्यम (जैसे हवा) से सघन माध्यम (जैसे काँच) में प्रवेश करती है, तो वह किस ओर मुड़ती है?',
    'When a ray of light passes from a rarer medium (air) into a denser medium (glass), how does it bend?',
    ['अभिलंब (Normal) की ओर झुकती है', 'It bends towards the normal'],
    [
      ['अभिलंब से दूर हटती है', 'It bends away from the normal'],
      ['सीधी बिना मुड़े निकल जाती है', 'Passes straight without bending'],
      ['वापस उसी माध्यम में लौट आती है', 'Reflects back into the same medium'],
    ],
    'सघन माध्यम में प्रकाश की चाल कम हो जाती है, इसलिए किरण अभिलंब की ओर झुक जाती है (∠r < ∠i)।',
    'Light slows down in a denser medium, causing the ray to bend towards the normal (angle of refraction < angle of incidence).',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'पानी से भरे गिलास में आंशिक रूप से डूबी हुई पेंसिल का मुड़ी हुई दिखाई देना तथा पानी की तली का ऊपर उठा हुआ दिखना किस घटना के कारण होता है?',
    'A pencil partly immersed in water appears bent and the bottom of a pool appears raised due to:',
    ['प्रकाश का अपवर्तन (Refraction)', 'Refraction of light'],
    [
      ['प्रकाश का परावर्तन', 'Reflection of light'],
      ['प्रकाश का विवर्तन', 'Diffraction of light'],
      ['प्रकाश का ध्रुवण', 'Polarization of light'],
    ],
    'पानी से हवा (सघन से विरल माध्यम) में जाते समय प्रकाश किरणें अभिलंब से दूर हटती हैं, जिससे वस्तु की आभासी गहराई वास्तविक गहराई से कम प्रतीत होती है।',
    'Light rays travelling from water to air bend away from the normal (refraction), making the apparent depth look shallower.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'रात में तारों का टिमटिमाना (Twinkling of stars) किस प्रकाशीय घटना का उदाहरण है?',
    'The twinkling of stars at night is caused by:',
    ['वायुमंडलीय अपवर्तन', 'Atmospheric refraction'],
    [
      ['प्रकाश का प्रकीर्णन', 'Scattering of light'],
      ['पूर्ण आंतरिक परावर्तन', 'Total internal reflection'],
      ['प्रकाश का व्यतिकरण', 'Interference of light'],
    ],
    'पृथ्वी के वायुमंडल की परतों का घनत्व लगातार बदलता रहता है, जिससे तारों से आने वाला प्रकाश बार-बार अपवर्तित होकर आँख तक कम-ज्यादा पहुँचता है।',
    'Fluctuating air densities in Earth’s atmosphere cause continuous atmospheric refraction of starlight, making stars appear to twinkle.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'सूर्योदय से लगभग 2 मिनट पहले तथा सूर्यास्त के लगभग 2 मिनट बाद तक सूर्य का दिखाई देना किस कारण होता है?',
    'Why is the Sun visible about 2 minutes before actual sunrise and 2 minutes after actual sunset?',
    ['वायुमंडलीय अपवर्तन के कारण', 'Due to atmospheric refraction'],
    [
      ['प्रकाश के परावर्तन के कारण', 'Due to reflection'],
      ['प्रकाश के वर्ण विक्षेपण के कारण', 'Due to dispersion'],
      ['ध्रुवण के कारण', 'Due to polarization'],
    ],
    'क्षितिज के ठीक नीचे स्थित सूर्य से आने वाली किरणें वायुमंडल में अपवर्तित होकर आँख तक पहुँचती हैं, जिससे सूर्य वास्तविक स्थिति से थोड़ा ऊपर दिखता है।',
    'Atmospheric refraction bends sunlight from slightly below the horizon towards the observer, creating an apparent sunrise ~2 minutes early.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'रेगिस्तान में मरीचिका (Mirage) बनना, हीरे का अत्यधिक चमकना तथा ऑप्टिकल फाइबर का कार्य करना किस सिद्धांत पर आधारित है?',
    'Mirage formation in deserts, brilliance of diamonds, and working of optical fibres are based on:',
    ['पूर्ण आंतरिक परावर्तन (Total Internal Reflection)', 'Total Internal Reflection (TIR)'],
    [
      ['केवल सामान्य परावर्तन', 'Ordinary reflection only'],
      ['प्रकाश का विवर्तन', 'Diffraction of light'],
      ['प्रकाश का प्रकीर्णन', 'Scattering of light'],
    ],
    'जब प्रकाश सघन से विरल माध्यम में क्रांतिक कोण (Critical angle) से अधिक कोण पर आपतित होता है, तो वह पूरी तरह उसी माध्यम में परावर्तित हो जाता है (TIR)।',
    'When light goes from a denser to a rarer medium at an angle greater than the critical angle, it undergoes Total Internal Reflection.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'हीरे का अपवर्तनांक लगभग 2.42 है। इसके लिए क्रांतिक कोण लगभग कितना होता है जिससे वह अत्यंत चमकदार दिखता है?',
    'Diamond has a refractive index of ~2.42. What is its approximate critical angle that causes intense sparkling?',
    ['लगभग 24.4°', 'About 24.4°'],
    [
      ['लगभग 42°', 'About 42°'],
      ['लगभग 48.7°', 'About 48.7°'],
      ['लगभग 60°', 'About 60°'],
    ],
    'क्रांतिक कोण sin i_c = 1/μ से, μ = 2.42 के लिए i_c ≈ 24.4° आता है। इतना छोटा क्रांतिक कोण होने से अंदर गया प्रकाश बार-बार पूर्ण आंतरिक परावर्तित होता है।',
    'Using sin i_c = 1/μ, for μ = 2.42 we get i_c ≈ 24.4°. This small critical angle traps light inside via multiple TIRs.',
    'HARD',
    { formulaHi: 'sin i_c = 1 / μ', formulaEn: 'sin i_c = 1 / μ' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'आवर्धक काँच (Magnifying glass) के रूप में किस लेंस का उपयोग किया जाता है?',
    'Which type of lens is used as a simple magnifying glass?',
    ['कम फोकस दूरी का उत्तल लेंस', 'Convex lens of short focal length'],
    [
      ['अवतल लेंस', 'Concave lens'],
      ['बेलनाकार लेंस', 'Cylindrical lens'],
      ['समतल काँच की प्लेट', 'Plane glass plate'],
    ],
    'उत्तल लेंस के प्रकाशिक केंद्र और फोकस के बीच छोटे अक्षर या वस्तु रखने पर उसका सीधा और आवर्धित (बड़ा) आभासी प्रतिबिंब दिखता है।',
    'When an object lies within the focal length of a convex lens, a magnified, upright, virtual image is seen.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'लेंस की क्षमता (Power of a lens) का SI मात्रक क्या होता है?',
    'What is the SI unit of power of a lens?',
    ['डायोप्टर (m⁻¹)', 'Dioptre (m⁻¹)'],
    [
      ['मीटर', 'Metre'],
      ['डेसिबल', 'Decibel'],
      ['कैंडेला', 'Candela'],
    ],
    'लेंस की क्षमता P = 1 / f (मीटर में) होती है और इसका SI मात्रक डायोप्टर (D) है। उत्तल लेंस की क्षमता धनात्मक (+) और अवतल की ऋणात्मक (-) होती है।',
    'Power of a lens P = 1 / f(in metres), measured in dioptres (D). Convex lenses have positive power and concave lenses negative.',
    'EASY',
    { formulaHi: 'P = 1 / f (मीटर में)', formulaEn: 'P = 1 / f (in metres)' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'एक चश्मे के लेंस की क्षमता +2.0 डायोप्टर (+2.0 D) है। यह कौन-सा लेंस है और इसकी फोकस दूरी कितनी है?',
    'A spectacle lens has a power of +2.0 D. What type of lens is it and what is its focal length?',
    ['उत्तल लेंस, फोकस दूरी +50 सेमी', 'Convex lens, focal length +50 cm'],
    [
      ['अवतल लेंस, फोकस दूरी -50 सेमी', 'Concave lens, focal length -50 cm'],
      ['उत्तल लेंस, फोकस दूरी +200 सेमी', 'Convex lens, focal length +200 cm'],
      ['अवतल लेंस, फोकस दूरी -20 सेमी', 'Concave lens, focal length -20 cm'],
    ],
    'धनात्मक (+) क्षमता उत्तल लेंस को दर्शाती है। f = 1/P = 1/2 मीटर = 0.5 मीटर = +50 सेमी।',
    'Positive power indicates a convex lens. Focal length f = 1/P = 1/2 m = 0.5 m = +50 cm.',
    'MEDIUM',
    { formulaHi: 'f = 1 / P', formulaEn: 'f = 1 / P' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जब श्वेत प्रकाश (White light) काँच के प्रिज्म से गुजरता है, तो वह सात रंगों में विभक्त हो जाता है। इस घटना को क्या कहते हैं?',
    'When white light passes through a glass prism, it splits into seven constituent colours. What is this phenomenon called?',
    ['वर्ण विक्षेपण (Dispersion of light)', 'Dispersion of light'],
    [
      ['प्रकाश का प्रकीर्णन', 'Scattering of light'],
      ['प्रकाश का ध्रुवण', 'Polarization of light'],
      ['प्रकाश का विवर्तन', 'Diffraction of light'],
    ],
    'प्रिज्म में विभिन्न रंगों की तरंगदैर्घ्य भिन्न होने के कारण उनके अपवर्तन कोण अलग-अलग होते हैं, जिससे श्वेत प्रकाश VIBGYOR के सात रंगों में बंट जाता है।',
    'Different wavelengths refract by different amounts in glass, splitting white light into the seven-colour spectrum (VIBGYOR)—called dispersion.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'प्रिज्म द्वारा श्वेत प्रकाश के विक्षेपण में किस रंग का विचलन सबसे अधिक और किस रंग का सबसे कम होता है?',
    'In dispersion of white light by a prism, which colour deviates the most and which deviates the least?',
    ['बैंगनी का विचलन सर्वाधिक और लाल का सबसे कम', 'Violet deviates the most and red deviates the least'],
    [
      ['लाल का सर्वाधिक और बैंगनी का सबसे कम', 'Red deviates the most and violet the least'],
      ['हरा सर्वाधिक और पीला सबसे कम', 'Green most and yellow least'],
      ['नीला सर्वाधिक और नारंगी सबसे कम', 'Blue most and orange least'],
    ],
    'लाल रंग की तरंगदैर्घ्य सर्वाधिक (~700 nm) होने से काँच में उसकी चाल अधिकतम और विचलन न्यूनतम होता है; जबकि बैंगनी की तरंगदैर्घ्य न्यूनतम (~400 nm) होने से विचलन सर्वाधिक होता है।',
    'Red light has the longest wavelength (~700 nm) so it travels fastest in glass and bends least; violet has the shortest wavelength and bends most.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'स्वच्छ आकाश का रंग नीला तथा सूर्योदय व सूर्यास्त के समय सूर्य का लाल दिखाई देना किस घटना के कारण होता है?',
    'The blue colour of the clear sky and the reddish appearance of the Sun at sunrise and sunset are due to:',
    ['प्रकाश का प्रकीर्णन (Scattering of light)', 'Scattering of light'],
    [
      ['प्रकाश का व्यतिकरण', 'Interference of light'],
      ['प्रकाश का विवर्तन', 'Diffraction of light'],
      ['प्रकाश का ध्रुवण', 'Polarization of light'],
    ],
    'रैले के प्रकीर्णन नियम (तीव्रता ∝ 1/λ⁴) के अनुसार कम तरंगदैर्घ्य वाले नीले/बैंगनी प्रकाश का प्रकीर्णन सर्वाधिक होता है (आकाश नीला), जबकि लाल रंग बिना प्रकीर्णित हुए लंबी दूरी तय करता है।',
    'By Rayleigh scattering (intensity ∝ 1/λ⁴), short-wavelength blue light scatters strongly across the sky, while long-wavelength red passes through at sunset.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'खतरे के सिग्नल (Danger signals) हमेशा लाल रंग के ही क्यों बनाए जाते हैं?',
    'Why are danger signals always made red in colour?',
    ['लाल रंग का प्रकीर्णन सबसे कम होता है जिससे वह कोहरे व धुएँ में भी दूर से दिखता है', 'Red light is scattered the least and remains visible from afar even in fog'],
    [
      ['लाल रंग की आवृत्ति सर्वाधिक होती है', 'Red light has the highest frequency'],
      ['लाल रंग का अपवर्तनांक सर्वाधिक होता है', 'Red has highest refractive index'],
      ['मानव आँख केवल लाल रंग देख सकती है', 'Human eye sees red only'],
    ],
    'लाल रंग की तरंगदैर्घ्य दृश्य प्रकाश में सर्वाधिक होने से वायु कणों द्वारा इसका प्रकीर्णन न्यूनतम होता है और यह दूर तक स्पष्ट दिखाई देता है।',
    'Having the longest visible wavelength, red light undergoes minimum scattering by fog/smoke particles and travels furthest clearly.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'अंतरिक्ष से देखने पर अंतरिक्ष यात्रियों को आकाश का रंग कैसा दिखाई देता है?',
    'How does the sky appear to an astronaut looking out from space?',
    ['काला (Black)', 'Black'],
    [
      ['गहरा नीला', 'Deep blue'],
      ['बैंगनी', 'Violet'],
      ['चमकीला सफेद', 'Bright white'],
    ],
    'अंतरिक्ष में वायुमंडल नहीं होने के कारण सूर्य के प्रकाश का प्रकीर्णन नहीं हो पाता, इसलिए आकाश काला दिखाई देता है।',
    'There is no atmosphere in space to scatter sunlight, so the sky appears completely black to astronauts.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'इंद्रधनुष (Rainbow) के निर्माण में कौन-कौन सी प्रकाशीय घटनाएँ सम्मिलित होती हैं?',
    'Which optical phenomena are involved in the formation of a rainbow?',
    ['अपवर्तन, वर्ण विक्षेपण और आंतरिक परावर्तन', 'Refraction, dispersion, and internal reflection'],
    [
      ['केवल परावर्तन और विवर्तन', 'Only reflection and diffraction'],
      ['केवल प्रकीर्णन और ध्रुवण', 'Only scattering and polarization'],
      ['व्यतिकरण और प्रकाश-विद्युत प्रभाव', 'Interference and photoelectric effect'],
    ],
    'वर्षा की बूँदों में सूर्य की किरणें प्रवेश कर अपवर्तित व विक्षेपित होती हैं, फिर बूँद की भीतरी सतह से परावर्तित होकर पुनः अपवर्तित हो बाहर निकलती हैं।',
    'Sunlight undergoes refraction and dispersion upon entering raindrops, internal reflection inside the droplet, and refraction upon exiting.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जल पर फैली तेल की पतली परत और साबुन के बुलबुले सूर्य के प्रकाश में रंगीन क्यों दिखाई देते हैं?',
    'Why do thin oil films on water and soap bubbles appear brightly coloured in sunlight?',
    ['प्रकाश का व्यतिकरण (Interference of light)', 'Interference of light'],
    [
      ['प्रकाश का प्रकीर्णन', 'Scattering of light'],
      ['प्रकाश का ध्रुवण', 'Polarization of light'],
      ['वर्ण विक्षेपण', 'Dispersion of light'],
    ],
    'पतली फिल्म की ऊपरी और निचली सतहों से परावर्तित प्रकाश तरंगों के अध्यारोपण (व्यतिकरण) के कारण विभिन्न रंग दिखाई देते हैं।',
    'Light waves reflected from the top and bottom surfaces of the thin film interfere constructively/destructively for different wavelengths.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'रंगीन टेलीविजन और कंप्यूटर मॉनिटर में प्रयुक्त तीन प्राथमिक (मूल) रंग कौन-से हैं?',
    'Which are the three primary colours of light used in colour televisions and monitors?',
    ['लाल, हरा और नीला (RGB)', 'Red, Green, and Blue (RGB)'],
    [
      ['लाल, पीला और नीला', 'Red, Yellow, and Blue'],
      ['हरा, पीला और बैंगनी', 'Green, Yellow, and Violet'],
      ['सियान, मैजेंटा और पीला', 'Cyan, Magenta, and Yellow'],
    ],
    'प्रकाश के योगात्मक प्राथमिक रंग लाल, हरा और नीला (RGB) हैं, जिन्हें उचित अनुपात में मिलाकर कोई भी रंग और श्वेत प्रकाश प्राप्त किया जा सकता है।',
    'Red, Green, and Blue (RGB) are the additive primary colours of light used in displays to produce all other colours including white.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'मानव नेत्र के किस भाग पर वस्तु का वास्तविक और उल्टा प्रतिबिंब बनता है?',
    'On which part of the human eye is the real and inverted image of an object formed?',
    ['रेटिना (दृष्टिपटल)', 'Retina'],
    [
      ['कॉर्निया (स्वच्छ मंडल)', 'Cornea'],
      ['आइरिस (परितारिका)', 'Iris'],
      ['पुतली (Pupil)', 'Pupil'],
    ],
    'नेत्र का उत्तल क्रिस्टलीय लेंस वस्तु का वास्तविक एवं उल्टा प्रतिबिंब प्रकाश-संवेदी रेटिना पर बनाता है, जिसे मस्तिष्क सीधा करके समझता है।',
    'The eye lens focuses a real, inverted image onto the light-sensitive retina, which the brain interprets upright.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'नेत्र दान (Eye donation) में दाता की आँख का कौन-सा भाग प्रत्यारोपित किया जाता है?',
    'Which part of the donor’s eye is transplanted during eye donation?',
    ['कॉर्निया (Cornea)', 'Cornea'],
    [
      ['रेटिना (Retina)', 'Retina'],
      ['क्रिस्टलीय लेंस (Lens)', 'Eye lens'],
      ['पूरी नेत्र गोलक', 'Entire eyeball'],
    ],
    'नेत्र दान में केवल कॉर्निया (स्वच्छ मंडल) का प्रत्यारोपण किया जाता है क्योंकि इसमें रक्त वाहिकाएँ नहीं होतीं और अस्वीकृति की संभावना कम रहती है।',
    'Only the cornea is transplanted in corneal eye donation, as it lacks blood vessels and has minimal rejection risk.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'एक सामान्य स्वस्थ मानव नेत्र के लिए स्पष्ट दृष्टि की न्यूनतम दूरी (निकट बिंदु) और दूर बिंदु क्रमशः कितने होते हैं?',
    'What are the least distance of distinct vision (near point) and far point for a normal healthy human eye?',
    ['25 सेमी और अनंत', '25 cm and Infinity'],
    [
      ['25 मीटर और 100 मीटर', '25 m and 100 m'],
      ['10 सेमी और 50 सेमी', '10 cm and 50 cm'],
      ['25 सेमी और 25 मीटर', '25 cm and 25 m'],
    ],
    'स्वस्थ आँख बिना तनाव के न्यूनतम 25 सेमी दूरी तक स्पष्ट देख सकती है और अधिकतम अनंत तक की वस्तुओं को देख सकती है।',
    'A normal eye has a near point at 25 cm and a far point at infinity.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'आँख में प्रवेश करने वाले प्रकाश की मात्रा को कौन-सा भाग नियंत्रित करता है?',
    'Which part of the eye controls the amount of light entering the eye?',
    ['आइरिस (परितारिका) पुतली के आकार को बदलकर', 'Iris (by adjusting the size of the pupil)'],
    [
      ['रेटिना', 'Retina'],
      ['दृक् तंत्रिका', 'Optic nerve'],
      ['कॉर्निया', 'Cornea'],
    ],
    'आइरिस (जिससे आँखों का रंग तय होता है) तेज रोशनी में पुतली को सिकोड़कर तथा कम रोशनी में फैलाकर प्रकाश की मात्रा को नियंत्रित करती है।',
    'The iris regulates the size of the pupil—contracting in bright light and dilating in dim light—to control light entry.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'निकट दृष्टि दोष (Myopia) से पीड़ित व्यक्ति को दूर की वस्तुएँ धुंधली क्यों दिखाई देती हैं और इसके निवारण के लिए किस लेंस का उपयोग किया जाता है?',
    'In Myopia (nearsightedness), distant objects appear blurred. Which lens is used to correct it?',
    ['अवतल लेंस (Concave lens)', 'Concave lens'],
    [
      ['उत्तल लेंस (Convex lens)', 'Convex lens'],
      ['बेलनाकार लेंस (Cylindrical lens)', 'Cylindrical lens'],
      ['द्विफोकसी लेंस (Bifocal lens)', 'Bifocal lens'],
    ],
    'मायोपिया में दूर से आने वाली किरणें रेटिना के आगे ही फोकस हो जाती हैं; अपसारी (अवतल) लेंस किरणों को फैलाकर प्रतिबिंब को वापस रेटिना पर लाता है।',
    'In myopia, images of distant objects form in front of the retina; a diverging (concave) lens shifts the focus back onto the retina.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'दूर दृष्टि दोष (Hypermetropia) के निवारण के लिए चश्मे में किस लेंस का प्रयोग किया जाता है?',
    'Which lens is used to correct Hypermetropia (farsightedness)?',
    ['उत्तल लेंस (Convex lens)', 'Convex lens'],
    [
      ['अवतल लेंस (Concave lens)', 'Concave lens'],
      ['बेलनाकार लेंस', 'Cylindrical lens'],
      ['प्रिज्म लेंस', 'Prism lens'],
    ],
    'दूर दृष्टि दोष में व्यक्ति को पास की वस्तुएँ स्पष्ट नहीं दिखतीं क्योंकि प्रतिबिंब रेटिना के पीछे बनता है; अभिसारी (उत्तल) लेंस इसे रेटिना पर फोकस करता है।',
    'In hypermetropia, near objects focus behind the retina; a converging (convex) lens brings the focus forward onto the retina.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'वृद्धावस्था में पक्ष्माभी पेशियों (Ciliary muscles) के कमजोर होने से उत्पन्न जरा-दूरदृष्टिता (Presbyopia) को ठीक करने के लिए किस लेंस का उपयोग होता है?',
    'Which lens is typically prescribed to correct Presbyopia caused by weakening ciliary muscles in old age?',
    ['द्विफोकसी लेंस (Bifocal lens)', 'Bifocal lens'],
    [
      ['केवल अवतल लेंस', 'Only concave lens'],
      ['केवल बेलनाकार लेंस', 'Only cylindrical lens'],
      ['समतल काँच', 'Plane glass'],
    ],
    'जरा-दूरदृष्टिता में पास और दूर दोनों को देखने में कठिनाई होती है; द्विफोकसी लेंस में ऊपरी भाग अवतल (दूर हेतु) और निचला भाग उत्तल (पास हेतु) होता है।',
    'Presbyopia impairs near and sometimes far accommodation; bifocal lenses combine concave (upper) and convex (lower) segments.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'दृष्टि वैषम्य (Astigmatism) दोष, जिसमें व्यक्ति ऊर्ध्वाधर और क्षैतिज रेखाओं को एक साथ स्पष्ट नहीं देख पाता, किस लेंस से ठीक किया जाता है?',
    'Astigmatism, in which vertical and horizontal lines cannot be focused simultaneously, is corrected using a:',
    ['बेलनाकार लेंस (Cylindrical lens)', 'Cylindrical lens'],
    [
      ['अवतल लेंस', 'Concave lens'],
      ['उत्तल लेंस', 'Convex lens'],
      ['द्विफोकसी लेंस', 'Bifocal lens'],
    ],
    'कॉर्निया की वक्रता अनियमित होने से दृष्टि वैषम्य होता है, जिसे उपयुक्त अक्ष वाले बेलनाकार लेंस द्वारा सुधारा जाता है।',
    'Uneven curvature of the cornea causes astigmatism, which is corrected using a cylindrical lens of appropriate orientation.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'मानव आँख में "शंकु कोशिकाएँ" (Cones) और "शलाका कोशिकाएँ" (Rods) क्रमशः किसके लिए उत्तरदायी हैं?',
    'In the human retina, what are "cone cells" and "rod cells" responsible for respectively?',
    ['शंकु: रंगों की पहचान; शलाका: मंद प्रकाश में देखने के लिए', 'Cones: colour vision; Rods: vision in dim light'],
    [
      ['शंकु: मंद प्रकाश; शलाका: रंगों की पहचान', 'Cones: dim light; Rods: colour vision'],
      ['दोनों केवल प्रकाश की तीव्रता मापती हैं', 'Both detect light intensity only'],
      ['दोनों आँसू बनाती हैं', 'Both produce tears'],
    ],
    'रेटिना की शंकु (Cone) कोशिकाएँ तीव्र प्रकाश और रंगों का बोध कराती हैं, जबकि शलाका (Rod) कोशिकाएँ कम प्रकाश (रात्रि दृष्टि) के लिए संवेदनशील होती हैं।',
    'Cone cells enable bright-light colour vision, whereas rod cells are highly sensitive to dim light for night/twilight vision.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'मोतियाबिंद (Cataract) रोग में आँख का कौन-सा भाग धुंधला या अपारदर्शी हो जाता है?',
    'In cataract, which part of the human eye becomes cloudy or opaque?',
    ['नेत्र लेंस (क्रिस्टलीय लेंस)', 'Crystalline eye lens'],
    [
      ['रेटिना', 'Retina'],
      ['पुतली', 'Pupil'],
      ['दृक् तंत्रिका', 'Optic nerve'],
    ],
    'मोतियाबिंद में प्रोटीन के जमने से आँख का प्राकृतिक लेंस दूधिया/धुंधला हो जाता है, जिसे शल्य चिकित्सा द्वारा कृत्रिम IOL लेंस लगाकर ठीक किया जाता है।',
    'In cataract, the crystalline eye lens becomes cloudy/opaque, treated surgically by replacing it with an artificial intraocular lens.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'प्रकाश के कण प्रकृति (फोटॉन) को दर्शाने वाली प्रमुख घटना कौन-सी है जिसके लिए आइंस्टीन को नोबेल पुरस्कार मिला था?',
    'Which phenomenon demonstrates the particle (photon) nature of light, earning Einstein the Nobel Prize?',
    ['प्रकाश-विद्युत प्रभाव (Photoelectric effect)', 'Photoelectric effect'],
    [
      ['व्यतिकरण (Interference)', 'Interference'],
      ['विवर्तन (Diffraction)', 'Diffraction'],
      ['ध्रुवण (Polarization)', 'Polarization'],
    ],
    'आइंस्टीन को 1921 का भौतिकी नोबेल पुरस्कार सापेक्षता के लिए नहीं बल्कि प्रकाश-विद्युत प्रभाव की क्वांटम व्याख्या के लिए मिला था।',
    'Einstein won the 1921 Nobel Prize in Physics for explaining the photoelectric effect using light quanta (photons).',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'निम्नलिखित में से कौन-सी घटना यह सिद्ध करती है कि प्रकाश एक अनुप्रस्थ (Transverse) तरंग है?',
    'Which optical phenomenon proves that light waves are transverse in nature?',
    ['ध्रुवण (Polarization)', 'Polarization'],
    [
      ['परावर्तन (Reflection)', 'Reflection'],
      ['अपवर्तन (Refraction)', 'Refraction'],
      ['व्यतिकरण (Interference)', 'Interference'],
    ],
    'केवल अनुप्रस्थ तरंगों का ही ध्रुवण किया जा सकता है; ध्वनि जैसी अनुदैर्ध्य तरंगों का ध्रुवण नहीं होता।',
    'Only transverse waves can be polarized; longitudinal waves like sound in air cannot undergo polarization.',
    'HARD'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'वायु में ध्वनि तरंगें किस प्रकार की तरंगें होती हैं?',
    'What type of waves are sound waves in air?',
    ['अनुदैर्ध्य यांत्रिक तरंगें', 'Longitudinal mechanical waves'],
    [
      ['अनुप्रस्थ विद्युत-चुंबकीय तरंगें', 'Transverse electromagnetic waves'],
      ['केवल अनुप्रस्थ तरंगें', 'Transverse mechanical waves only'],
      ['अप्रगामी प्रकाश तरंगें', 'Stationary light waves'],
    ],
    'वायु में ध्वनि तरंगें संपीडन (Compression) और विरलन (Rarefaction) के रूप में माध्यम के कणों के समानांतर कंपन द्वारा चलती हैं, अतः ये अनुदैर्ध्य यांत्रिक तरंगें हैं।',
    'Sound travels in air via compressions and rarefactions with particles vibrating parallel to wave propagation, making it a longitudinal mechanical wave.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'ध्वनि तरंगें निम्नलिखित में से किस माध्यम में संचरण नहीं कर सकतीं?',
    'Through which of the following can sound waves NOT travel?',
    ['निर्वात (Vacuum)', 'Vacuum'],
    [
      ['ठोस इस्पात', 'Solid steel'],
      ['द्रव जल', 'Liquid water'],
      ['हाइड्रोजन गैस', 'Hydrogen gas'],
    ],
    'ध्वनि एक यांत्रिक तरंग है जिसे चलने के लिए ठोस, द्रव या गैस जैसा द्रव्यात्मक माध्यम आवश्यक है। चंद्रमा पर वायुमंडल न होने से दो यात्री सीधे बात नहीं कर सकते।',
    'Sound is a mechanical wave requiring a material medium; it cannot propagate through a vacuum (e.g., on the Moon).',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'ठोस, द्रव और गैस में से ध्वनि की चाल का घटता हुआ सही क्रम क्या है?',
    'What is the correct decreasing order of the speed of sound in solids, liquids, and gases?',
    ['ठोस > द्रव > गैस', 'Solid > Liquid > Gas'],
    [
      ['गैस > द्रव > ठोस', 'Gas > Liquid > Solid'],
      ['द्रव > ठोस > गैस', 'Liquid > Solid > Gas'],
      ['तीनों में बराबर', 'Equal in all three'],
    ],
    'ठोसों की प्रत्यास्थता सर्वाधिक होने से उनमें ध्वनि सबसे तेज (जैसे इस्पात में ~5960 m/s), जल में ~1500 m/s, और वायु में सबसे धीमी (~343 m/s) चलती है।',
    'Because solids have the highest elasticity, sound travels fastest in solids, slower in liquids, and slowest in gases.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    '0°C पर शुष्क वायु में ध्वनि की चाल लगभग कितनी होती है?',
    'What is the approximate speed of sound in dry air at 0°C?',
    ['331–332 मीटर/सेकंड', '331–332 m/s'],
    [
      ['1500 मीटर/सेकंड', '1500 m/s'],
      ['220 मीटर/सेकंड', '220 m/s'],
      ['3 × 10⁸ मीटर/सेकंड', '3 × 10⁸ m/s'],
    ],
    '0°C पर वायु में ध्वनि का वेग लगभग 331–332 m/s तथा 20°C कमरे के ताप पर लगभग 343 m/s होता है।',
    'Speed of sound in dry air at 0°C is ~331–332 m/s, increasing to ~343 m/s at 20°C.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'वायु में ध्वनि की चाल पर निम्नलिखित में से किसका प्रभाव नहीं पड़ता है?',
    'Which of the following does NOT affect the speed of sound in an ideal gas (air) at constant temperature?',
    ['वायु दाब में परिवर्तन', 'Change in air pressure'],
    [
      ['तापमान में वृद्धि', 'Increase in temperature'],
      ['वायु की आर्द्रता (नमी)', 'Humidity of air'],
      ['गैस की प्रकृति व अणुभार', 'Nature and molar mass of gas'],
    ],
    'स्थिर ताप पर दाब बदलने से घनत्व भी उसी अनुपात में बदलता है (P/ρ नियत रहता है), अतः दाब का ध्वनि वेग पर कोई प्रभाव नहीं पड़ता। ताप और नमी बढ़ने पर चाल बढ़ती है।',
    'At constant temperature, P/ρ remains constant, so pressure changes do not alter sound speed in air, whereas higher temperature and humidity increase it.',
    'HARD'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'मानव कान के लिए श्रव्य ध्वनि (Audible sound) की आवृत्ति सीमा कितनी होती है?',
    'What is the audible frequency range for a normal human ear?',
    ['20 हर्ट्ज़ से 20,000 हर्ट्ज़ (20 kHz)', '20 Hz to 20,000 Hz (20 kHz)'],
    [
      ['0 से 20 हर्ट्ज़', '0 to 20 Hz'],
      ['20,000 हर्ट्ज़ से अधिक', 'Above 20,000 Hz'],
      ['100 हर्ट्ज़ से 10,000 हर्ट्ज़', '100 Hz to 10,000 Hz'],
    ],
    '20 Hz से कम की तरंगें अवश्रव्य (Infrasonic) और 20,000 Hz से अधिक की तरंगें पराश्रव्य (Ultrasonic) कहलाती हैं।',
    'Humans can hear frequencies between 20 Hz and 20,000 Hz; below 20 Hz is infrasonic and above 20 kHz is ultrasonic.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'चमगादड़ अंधेरे में उड़ते समय बाधाओं से बचने और शिकार पकड़ने के लिए किन तरंगों का उपयोग करते हैं?',
    'Which waves do bats emit to navigate and catch prey in the dark?',
    ['पराश्रव्य ध्वनि तरंगें (Ultrasonic waves)', 'Ultrasonic sound waves'],
    [
      ['अवश्रव्य तरंगें (Infrasonic waves)', 'Infrasonic waves'],
      ['एक्स-किरणें', 'X-rays'],
      ['रेडियो तरंगें', 'Radio waves'],
    ],
    'चमगादड़ 20 kHz से अधिक आवृत्ति वाली पराश्रव्य तरंगें उत्सर्जित करते हैं और उनकी प्रतिध्वनि (Echolocation) से दूरी का अनुमान लगाते हैं।',
    'Bats emit high-frequency ultrasonic waves (>20 kHz) and detect echoes (echolocation) to navigate and locate prey.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'चिकित्सा क्षेत्र में अल्ट्रासाउंड (सोनोग्राफी) तथा गुर्दे की पथरी तोड़ने में किन तरंगों का प्रयोग होता है?',
    'Which waves are used in medical ultrasonography and breaking kidney stones?',
    ['पराश्रव्य तरंगें (Ultrasonic waves)', 'Ultrasonic waves'],
    [
      ['अवश्रव्य तरंगें', 'Infrasonic waves'],
      ['गामा किरणें', 'Gamma rays'],
      ['अवरक्त तरंगें', 'Infrared waves'],
    ],
    'पराश्रव्य तरंगों की आवृत्ति बहुत अधिक व तरंगदैर्घ्य छोटी होने से ये सीधी रेखा में बिना विवर्तित हुए गहराई तक जाकर प्रतिबिंब बनाती हैं।',
    'Ultrasonic waves have high frequency and short wavelength, allowing focused imaging of internal organs and lithotripsy.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'एक स्पष्ट प्रतिध्वनि (Echo) सुनने के लिए श्रोता और परावर्तक सतह के बीच कम से कम कितनी दूरी होनी चाहिए (जब वायु में ध्वनि वेग 344 m/s हो)?',
    'What is the minimum distance required between a listener and a reflecting surface to hear a distinct echo (at sound speed 344 m/s)?',
    ['लगभग 17.2 मीटर (या 17 मीटर)', 'About 17.2 m (or 17 m)'],
    [
      ['34.4 मीटर', '34.4 m'],
      ['8.6 मीटर', '8.6 m'],
      ['50 मीटर', '50 m'],
    ],
    'मस्तिष्क में ध्वनि संवेदना 0.1 सेकंड तक रहती है। इस दौरान ध्वनि 344 × 0.1 = 34.4 मीटर (जाने और आने की कुल दूरी) चलेगी, अतः एक तरफ की दूरी 34.4 / 2 = 17.2 मीटर होगी।',
    'Persistence of hearing is 0.1 s. Total path = 344 × 0.1 = 34.4 m, so minimum one-way distance to the reflector is 34.4 / 2 = 17.2 m.',
    'MEDIUM',
    { formulaHi: 'न्यूनतम दूरी = (v × 0.1) / 2', formulaEn: 'd_min = (v × 0.1) / 2' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'बड़े सभागारों या सिनेमा हॉल की छतों और दीवारों को ध्वनि अवशोषक पदार्थों से क्यों ढका जाता है?',
    'Why are ceilings and walls of auditoriums and cinema halls covered with sound-absorbing materials?',
    ['अत्यधिक अनुरणन (Reverberation / गूँज) को कम करने के लिए', 'To reduce excessive reverberation'],
    [
      ['ध्वनि की आवृत्ति बढ़ाने के लिए', 'To increase frequency of sound'],
      ['ध्वनि की चाल बढ़ाने के लिए', 'To increase speed of sound'],
      ['प्रतिध्वनि उत्पन्न करने के लिए', 'To deliberately create echoes'],
    ],
    'बड़े हॉल में ध्वनि के बार-बार परावर्तन से ध्वनि का कुछ देर तक गूँजते रहना अनुरणन कहलाता है; ध्वनि स्पष्ट सुनने हेतु इसे अवशोषक पैनलों से घटाया जाता है।',
    'Repeated reflections cause persistence of sound called reverberation; sound-absorbing materials prevent acoustic blurring.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किसी ध्वनि का तारत्व (Pitch)—जिससे आवाज का मोटा या पतला (तीक्ष्ण) होना तय होता है—मुख्यतः किस पर निर्भर करता है?',
    'The pitch of a sound—which distinguishes a shrill voice from a grave voice—depends primarily on:',
    ['आवृत्ति (Frequency)', 'Frequency'],
    [
      ['आयाम (Amplitude)', 'Amplitude'],
      ['ध्वनि की चाल', 'Speed of sound'],
      ['तरंग के माध्यम', 'Medium of wave'],
    ],
    'आवृत्ति जितनी अधिक होगी तारत्व उतना ही अधिक (आवाज तीक्ष्ण/पतली) होगा; जबकि ध्वनि की प्रबलता (Loudness) आयाम के वर्ग पर निर्भर करती है।',
    'Pitch depends directly on frequency (higher frequency = higher pitch), whereas loudness depends on the square of amplitude.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'एक मच्छर की भिनभिनाहट और शेर की दहाड़ में किसका तारत्व (Pitch) और किसकी प्रबलता (Loudness) अधिक होती है?',
    'Comparing a mosquito’s buzz and a lion’s roar, which has higher pitch and which has higher loudness?',
    ['मच्छर की भिनभिनाहट का तारत्व अधिक; शेर की दहाड़ की प्रबलता अधिक', 'Mosquito’s buzz has higher pitch; lion’s roar has higher loudness'],
    [
      ['शेर की दहाड़ का तारत्व और प्रबलता दोनों अधिक', 'Lion has both higher pitch and loudness'],
      ['मच्छर की भिनभिनाहट की प्रबलता अधिक', 'Mosquito buzz has higher loudness'],
      ['दोनों का तारत्व समान होता है', 'Both have equal pitch'],
    ],
    'मच्छर के पंख बहुत तेजी से कंपन करते हैं (उच्च आवृत्ति → उच्च तारत्व), जबकि शेर की दहाड़ का आयाम बहुत बड़ा होता है (उच्च प्रबलता)।',
    'Rapid wing vibrations give the mosquito buzz high frequency (high pitch), while the lion’s roar has large amplitude (high loudness).',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'हम अपने परिचित व्यक्ति की आवाज बिना उसे देखे भी उसके किस गुण के आधार पर पहचान लेते हैं?',
    'We can recognize a familiar person’s voice without seeing them based on which characteristic of sound?',
    ['गुणता (Quality / Timbre)', 'Quality (Timbre)'],
    [
      ['केवल प्रबलता', 'Loudness only'],
      ['केवल ध्वनि का वेग', 'Speed of sound only'],
      ['केवल तरंगदैर्घ्य', 'Wavelength only'],
    ],
    'समान प्रबलता और समान तारत्व की दो ध्वनियों (जैसे अलग-अलग वाद्ययंत्रों या व्यक्तियों) में अंतर गुणता (Timbre) के कारण होता है, जो अधिस्वरों (Harmonics) से तय होती है।',
    'Timbre (quality) distinguishes sounds of the same pitch and loudness due to differences in waveform/overtones.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'आवृत्ति (ν), तरंगदैर्घ्य (λ) और तरंग के वेग (v) में सही संबंध कौन-सा है?',
    'Which is the correct relation between wave velocity (v), frequency (ν), and wavelength (λ)?',
    ['v = ν × λ', 'v = ν × λ'],
    [
      ['v = ν / λ', 'v = ν / λ'],
      ['ν = v × λ', 'ν = v × λ'],
      ['λ = v × ν', 'λ = v × ν'],
    ],
    'एक सेकंड में तय की गई दूरी (वेग v) = एक सेकंड में कंपनों की संख्या (ν) × एक तरंग की लंबाई (λ)।',
    'Wave speed equals frequency multiplied by wavelength: v = νλ.',
    'EASY',
    { formulaHi: 'v = νλ', formulaEn: 'v = νλ' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'जब कोई ध्वनि स्रोत किसी स्थिर श्रोता की ओर तेजी से आता है, तो श्रोता को ध्वनि की आवृत्ति बढ़ी हुई सुनाई देती है। यह घटना क्या कहलाती है?',
    'When a sound source (like a siren) approaches a stationary listener, the apparent frequency increases. What is this effect called?',
    ['डॉपलर प्रभाव (Doppler effect)', 'Doppler effect'],
    [
      ['रमन प्रभाव', 'Raman effect'],
      ['टिंडल प्रभाव', 'Tyndall effect'],
      ['अनुनाद (Resonance)', 'Resonance'],
    ],
    'स्रोत और श्रोता के बीच सापेक्ष गति के कारण आभासी आवृत्ति में होने वाले परिवर्तन को डॉपलर प्रभाव कहते हैं।',
    'The apparent shift in frequency of a wave due to relative motion between source and observer is called the Doppler effect.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'सैनिकों को पुल पार करते समय कदम से कदम मिलाकर न चलने (कदम तोड़ने) की सलाह क्यों दी जाती है?',
    'Why are soldiers instructed to break step while marching across a suspension bridge?',
    ['अनुनाद (Resonance) के कारण पुल टूटने से बचाने के लिए', 'To avoid structural collapse due to resonance'],
    [
      ['पुल पर घर्षण कम करने के लिए', 'To reduce friction on the bridge'],
      ['आवेग बढ़ाने के लिए', 'To increase impulse'],
      ['डॉपलर प्रभाव रोकने के लिए', 'To stop Doppler effect'],
    ],
    'यदि सैनिकों के कदमों की आवृत्ति पुल की स्वाभाविक आवृत्ति से मेल खा जाए तो अनुनाद के कारण अत्यधिक आयाम के कंपन उत्पन्न होकर पुल को क्षति पहुँचा सकते हैं।',
    'If marching frequency matches the bridge’s natural frequency, resonance causes dangerously large oscillations that could damage the bridge.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'मैक संख्या (Mach number) 1 से अधिक गति से चलने वाले विमान की चाल क्या कहलाती है?',
    'What is the speed of an aircraft travelling faster than Mach 1 (speed of sound) called?',
    ['पराध्वनिक चाल (Supersonic speed)', 'Supersonic speed'],
    [
      ['अवध्वनिक चाल (Subsonic speed)', 'Subsonic speed'],
      ['अवश्रव्य चाल', 'Infrasonic speed'],
      ['विद्युत-चुंबकीय चाल', 'Electromagnetic speed'],
    ],
    'जब किसी पिंड की चाल उस माध्यम में ध्वनि की चाल से अधिक (Mach > 1) हो तो उसे पराध्वनिक (Supersonic) कहते हैं, जिससे प्रघाती तरंगें (Sonic boom) बनती हैं।',
    'Speed exceeding the speed of sound (Mach > 1) is supersonic speed, generating shock waves heard as a sonic boom.',
    'MEDIUM',
    { formulaHi: 'मैक संख्या = वस्तु की चाल / ध्वनि की चाल', formulaEn: 'Mach = v_object / v_sound' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'यदि अवतल दर्पण के सामने किसी वस्तु को उसके वक्रता केंद्र (C) पर रखा जाए, तो प्रतिबिंब कहाँ और कैसा बनेगा?',
    'If an object is placed at the centre of curvature (C) of a concave mirror, where and how is the image formed?',
    ['C पर ही, वास्तविक, उल्टा और वस्तु के समान आकार का', 'At C, real, inverted, and of the same size as the object'],
    [
      ['फोकस पर, अत्यंत छोटा', 'At F, highly diminished'],
      ['अनंत पर, अत्यंत बड़ा', 'At infinity, highly magnified'],
      ['दर्पण के पीछे, आभासी और सीधा', 'Behind mirror, virtual and erect'],
    ],
    'अवतल दर्पण के वक्रता केंद्र C पर रखी वस्तु का प्रतिबिंब ठीक C पर, वास्तविक, उल्टा और वस्तु के ठीक बराबर आकार का बनता है।',
    'An object at the centre of curvature C of a concave mirror produces a real, inverted, same-sized image at C itself.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'यदि काँच के लेंस को ऐसे द्रव में डुबोया जाए जिसका अपवर्तनांक लेंस के काँच के अपवर्तनांक के ठीक बराबर हो, तो लेंस कैसा व्यवहार करेगा?',
    'If a glass lens is immersed in a liquid having the exact same refractive index as the glass, how does the lens behave?',
    ['एक समतल काँच की पारदर्शी प्लेट की तरह (अदृश्य जैसा, शक्ति शून्य)', 'Like a plane glass plate (becomes invisible with zero power)'],
    [
      ['उसकी क्षमता दोगुनी हो जाएगी', 'Its power doubles'],
      ['वह दर्पण की तरह व्यवहार करेगा', 'It acts like a mirror'],
      ['उसकी फोकस दूरी शून्य हो जाएगी', 'Its focal length becomes zero'],
    ],
    'लेंस मेकर सूत्र से जब μ_lens = μ_medium होता है तो 1/f = 0 (फोकस दूरी अनंत और क्षमता शून्य) हो जाती है और प्रकाश बिना मुड़े सीधे निकल जाता है।',
    'When medium and lens refractive indices match, no refraction occurs at the boundary: focal length becomes infinite (power = 0) and the lens disappears visually.',
    'HARD'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'स्नेल का अपवर्तन नियम (Snell’s Law) क्या है?',
    'What is Snell’s Law of refraction?',
    ['sin i / sin r = नियतांक (अपवर्तनांक)', 'sin i / sin r = constant (refractive index)'],
    [
      ['i / r = नियतांक', 'i / r = constant'],
      ['sin i × sin r = नियतांक', 'sin i × sin r = constant'],
      ['cos i / cos r = नियतांक', 'cos i / cos r = constant'],
    ],
    'आपतन कोण की ज्या (sin i) और अपवर्तन कोण की ज्या (sin r) का अनुपात किन्हीं दो माध्यमों के युग्म के लिए एक नियतांक (₁μ₂) होता है।',
    'Snell’s law states that the ratio of sin i to sin r is a constant for a given pair of media and light wavelength.',
    'MEDIUM',
    { formulaHi: 'sin i / sin r = n₂₁', formulaEn: 'sin i / sin r = n₂₁' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किसी तरंग का आवर्तकाल (T) 0.02 सेकंड है। उसकी आवृत्ति (ν) क्या होगी?',
    'The time period (T) of a wave is 0.02 seconds. What is its frequency?',
    ['50 हर्ट्ज़', '50 Hz'],
    [
      ['20 हर्ट्ज़', '20 Hz'],
      ['0.02 हर्ट्ज़', '0.02 Hz'],
      ['500 हर्ट्ज़', '500 Hz'],
    ],
    'आवृत्ति आवर्तकाल का व्युत्क्रम होती है: ν = 1/T = 1 / 0.02 = 50 Hz।',
    'Frequency is the reciprocal of time period: ν = 1/T = 1/0.02 = 50 Hz.',
    'EASY',
    { formulaHi: 'ν = 1 / T', formulaEn: 'ν = 1 / T' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'समतल दर्पण की फोकस दूरी और क्षमता कितनी होती है?',
    'What are the focal length and optical power of a plane mirror?',
    ['फोकस दूरी अनंत (∞) और क्षमता शून्य (0)', 'Focal length is infinite (∞) and power is zero (0)'],
    [
      ['फोकस दूरी शून्य और क्षमता अनंत', 'Focal length zero and power infinite'],
      ['फोकस दूरी 1 मीटर और क्षमता 1 D', 'Focal length 1 m and power 1 D'],
      ['फोकस दूरी 25 सेमी', 'Focal length 25 cm'],
    ],
    'समतल दर्पण को अनंत वक्रता त्रिज्या वाला गोलीय दर्पण माना जाता है, अतः f = ∞ और क्षमता P = 1/f = 0 होती है।',
    'A plane mirror has infinite radius of curvature, hence infinite focal length and zero optical power.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'यदि आप एक समतल दर्पण की ओर v चाल से दौड़ रहे हैं, तो आपको अपना प्रतिबिंब अपनी ओर किस सापेक्ष चाल से आता प्रतीत होगा?',
    'If you run towards a plane mirror at speed v, at what speed does your image appear to approach you?',
    ['2v', '2v'],
    [
      ['v', 'v'],
      ['v/2', 'v/2'],
      ['4v', '4v'],
    ],
    'दर्पण के सापेक्ष आपका वेग v और प्रतिबिंब का वेग -v होता है, अतः आपके सापेक्ष प्रतिबिंब के आने की चाल v - (-v) = 2v प्रतीत होगी।',
    'With respect to the mirror, you move at v and your image moves towards the mirror at v; hence your relative speed of approach is 2v.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'वस्तुओं के पीछे मुड़कर प्रकाश का किनारों पर फैल जाने की घटना (जिसके कारण छोटी बाधाओं की छाया तीक्ष्ण नहीं बनती) क्या कहलाती है?',
    'The bending of light around the sharp corners of tiny obstacles or apertures is called:',
    ['प्रकाश का विवर्तन (Diffraction)', 'Diffraction of light'],
    [
      ['प्रकाश का ध्रुवण', 'Polarization of light'],
      ['प्रकाश का अपवर्तन', 'Refraction of light'],
      ['पूर्ण आंतरिक परावर्तन', 'Total internal reflection'],
    ],
    'जब अवरोध का आकार प्रकाश की तरंगदैर्घ्य की कोटि का होता है, तो प्रकाश किनारों से मुड़कर ज्यामितीय छाया क्षेत्र में प्रवेश कर जाता है—इसे विवर्तन कहते हैं।',
    'Bending of waves around corners of obstacles/apertures comparable in size to their wavelength is called diffraction.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'समुद्र में एक जहाज से भेजी गई सोनार तरंग समुद्र तल से टकराकर 4 सेकंड बाद लौटती है। यदि जल में ध्वनि की चाल 1500 m/s हो, तो समुद्र की गहराई क्या होगी?',
    'A SONAR ping sent from a ship returns from the seabed after 4 seconds. If speed of sound in water is 1500 m/s, what is the depth of the sea?',
    ['3000 मीटर', '3000 m'],
    [
      ['6000 मीटर', '6000 m'],
      ['1500 मीटर', '1500 m'],
      ['750 मीटर', '750 m'],
    ],
    'ध्वनि ने जाने और आने में कुल 2d दूरी 4 सेकंड में तय की। अतः d = (v × t)/2 = (1500 × 4)/2 = 3000 मीटर।',
    'Sound travels 2d in 4 s. Depth d = (v × t)/2 = (1500 × 4)/2 = 3000 m.',
    'MEDIUM',
    { formulaHi: 'd = (v × t) / 2', formulaEn: 'd = (v × t) / 2' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'कोलॉइडी विलयन या धूल भरे कमरे में प्रकाश के मार्ग का चमकता हुआ दिखाई देना क्या कहलाता है?',
    'The visibility of a beam of light passing through a colloidal solution or dusty room due to scattering is called:',
    ['टिंडल प्रभाव (Tyndall effect)', 'Tyndall effect'],
    [
      ['डॉपलर प्रभाव', 'Doppler effect'],
      ['फैराडे प्रभाव', 'Faraday effect'],
      ['जूल प्रभाव', 'Joule effect'],
    ],
    'कोलॉइडी कणों द्वारा प्रकाश का प्रकीर्णन टिंडल प्रभाव कहलाता है, जैसे घने जंगल की छतरी से सूर्य की किरणों का चमकना।',
    'Scattering of light by colloidal particles making the light beam visible is called the Tyndall effect.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'निम्नलिखित में से किस माध्यम में प्रकाश की चाल सबसे कम होगी (किसका अपवर्तनांक सर्वाधिक है)?',
    'In which of the following media is the speed of light the slowest (highest refractive index)?',
    ['हीरा (Diamond, n = 2.42)', 'Diamond (n = 2.42)'],
    [
      ['क्राउन काँच (n = 1.52)', 'Crown glass (n = 1.52)'],
      ['जल (n = 1.33)', 'Water (n = 1.33)'],
      ['वायु (n = 1.0003)', 'Air (n = 1.0003)'],
    ],
    'माध्यम में प्रकाश की चाल v = c / n होती है। हीरे का अपवर्तनांक सर्वाधिक (2.42) होने से उसमें प्रकाश की चाल सबसे कम (~1.24 × 10⁸ m/s) होती है।',
    'Since v = c / n, diamond having the highest refractive index (2.42) slows light down the most (~1.24 × 10⁸ m/s).',
    'EASY',
    { formulaHi: 'n = c / v', formulaEn: 'n = c / v' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'वर्णांधता (Colour blindness) एक आनुवंशिक नेत्र विकार है जिसमें व्यक्ति मुख्यतः किन रंगों में भेद नहीं कर पाता?',
    'Colour blindness is a genetic eye disorder in which a person mainly fails to distinguish between:',
    ['लाल और हरा रंग', 'Red and green colours'],
    [
      ['काला और सफेद रंग', 'Black and white'],
      ['पीला और नारंगी रंग', 'Yellow and orange'],
      ['नीला और सफेद रंग', 'Blue and white'],
    ],
    'लाल-हरी वर्णांधता X-गुणसूत्र से संबंधित आनुवंशिक रोग है, जो शंकु कोशिकाओं में दोष के कारण होता है और इसे चश्मे से ठीक नहीं किया जा सकता।',
    'Red-green colour blindness is an X-linked genetic condition caused by defective retinal cone pigments and cannot be corrected with spectacles.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'यदि हवा में किसी ध्वनि तरंग की आवृत्ति 1000 Hz और तरंगदैर्घ्य 0.34 मीटर है, तो ध्वनि की चाल कितनी होगी?',
    'If a sound wave in air has a frequency of 1000 Hz and wavelength of 0.34 m, what is its speed?',
    ['340 मीटर/सेकंड', '340 m/s'],
    [
      ['34 मीटर/सेकंड', '34 m/s'],
      ['3400 मीटर/सेकंड', '3400 m/s'],
      ['0.34 मीटर/सेकंड', '0.34 m/s'],
    ],
    'सूत्र v = νλ से, v = 1000 × 0.34 = 340 m/s।',
    'Using v = νλ, v = 1000 × 0.34 = 340 m/s.',
    'EASY',
    { formulaHi: 'v = νλ', formulaEn: 'v = νλ' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'हाथों से ताली बजाने की तुलना में किसी बंद कमरे में बोलने पर आवाज अधिक स्पष्ट या गूँजती हुई सुनाई देने का कारण सामान्यतः क्या है?',
    'In an empty unfurnished room, speech sounds echoey primarily because:',
    ['कठोर दीवारों से ध्वनि का बार-बार परावर्तन होता है (अनुरणन)', 'Sound undergoes multiple reflections from bare hard walls (reverberation)'],
    [
      ['हवा कमरे में ध्वनि को सोख लेती है', 'Air absorbs all sound'],
      ['ध्वनि का वेग कमरे में शून्य हो जाता है', 'Speed of sound drops to zero'],
      ['दीवारें ध्वनि को अवश्रव्य बना देती हैं', 'Walls make sound infrasonic'],
    ],
    'खाली कमरे में पर्दे, कालीन या फर्नीचर जैसे ध्वनि अवशोषक न होने के कारण दीवारों से बारंबार परावर्तन होता है।',
    'Without curtains, carpets, or furniture to absorb sound, hard walls reflect waves repeatedly, producing noticeable reverberation.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'अवतल लेंस (Concave lens) द्वारा किसी वास्तविक वस्तु का बनने वाला प्रतिबिंब सदैव कैसा होता है?',
    'What is the nature of the image of a real object formed by a concave lens?',
    ['सदैव आभासी, सीधा और वस्तु से छोटा', 'Always virtual, erect, and diminished'],
    [
      ['सदैव वास्तविक, उल्टा और बड़ा', 'Always real, inverted, and magnified'],
      ['वास्तविक या आभासी कुछ भी', 'Either real or virtual'],
      ['सदैव वस्तु से बड़ा और सीधा', 'Always magnified and erect'],
    ],
    'अपसारी (अवतल) लेंस किरणों को फैलाता है, इसलिए वास्तविक वस्तु की किसी भी स्थिति के लिए यह सदैव आभासी, सीधा और छोटा प्रतिबिंब बनाता है।',
    'A diverging (concave) lens always forms a virtual, upright, and diminished image regardless of the real object’s position.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जब किसी उत्तल लेंस के फोकस (F₁) पर कोई वस्तु रखी जाती है, तो उसका प्रतिबिंब कहाँ बनता है?',
    'When an object is placed at the principal focus (F₁) of a convex lens, where is the image formed?',
    ['अनंत पर (अत्यंत आवर्धित, वास्तविक एवं उल्टा)', 'At infinity (highly magnified, real and inverted)'],
    [
      ['2F₂ पर, समान आकार का', 'At 2F₂, same size'],
      ['F₂ पर, बिंदु आकार का', 'At F₂, point-sized'],
      ['लेंस के उसी ओर, आभासी', 'On same side, virtual'],
    ],
    'उत्तल लेंस के फोकस से निकलने वाली किरणें अपवर्तन के बाद परस्पर समानांतर हो जाती हैं, अतः प्रतिबिंब अनंत पर बनता है।',
    'Rays coming from the principal focus of a convex lens emerge parallel after refraction, forming a real, inverted image at infinity.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'बिजली चमकने (Lightning) की रोशनी पहले दिखाई देती है और बादल की गड़गड़ाहट कुछ सेकंड बाद सुनाई देती है। ऐसा क्यों होता है?',
    'Flash of lightning is seen earlier than the sound of thunder is heard. Why?',
    ['प्रकाश की चाल ध्वनि की चाल से बहुत अधिक होती है', 'Speed of light is vastly greater than the speed of sound'],
    [
      ['बादल पहले प्रकाश और बाद में ध्वनि बनाते हैं', 'Clouds produce light before sound'],
      ['ध्वनि पृथ्वी की ओर पहले मुड़ जाती है', 'Sound bends away first'],
      ['आँख की संवेदनशीलता कान से धीमी है', 'Eye reacts slower than ear'],
    ],
    'वायु में प्रकाश की चाल ~3 × 10⁸ m/s है जबकि ध्वनि की चाल केवल ~343 m/s है, अतः प्रकाश लगभग तुरंत पहुँच जाता है।',
    'Light travels at ~3 × 10⁸ m/s while sound travels at only ~343 m/s in air, so the flash reaches us almost instantaneously.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'अधिकतम दूर की वस्तुओं को देखने के लिए खगोलीय दूरदर्शी (Astronomical telescope) के अभिदृश्यक (Objective) के रूप में क्या प्रयुक्त होता है?',
    'In an astronomical refracting telescope, what type of lens is used as the objective?',
    ['बड़ी फोकस दूरी और बड़े द्वारक का उत्तल लेंस', 'Convex lens of large focal length and large aperture'],
    [
      ['छोटी फोकस दूरी का अवतल लेंस', 'Concave lens of short focal length'],
      ['छोटी फोकस दूरी का उत्तल लेंस', 'Convex lens of short focal length'],
      ['बड़ी फोकस दूरी का अवतल लेंस', 'Concave lens of large focal length'],
    ],
    'दूर से अधिक प्रकाश एकत्र करने और उच्च आवर्धन (M = f_o / f_e) प्राप्त करने के लिए अभिदृश्यक बड़े द्वारक व बड़ी फोकस दूरी का उत्तल लेंस होता है।',
    'A large-aperture, long-focal-length convex objective gathers more light from distant stars and yields high magnification (M = f_o / f_e).',
    'HARD',
    { formulaHi: 'M = f_o / f_e', formulaEn: 'M = f_o / f_e' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'वाद्ययंत्र सितार या गिटार के खिंचे हुए तार में उत्पन्न तरंगें कैसी होती हैं?',
    'What type of mechanical waves are produced in the stretched string of a sitar or guitar?',
    ['अप्रगामी अनुप्रस्थ तरंगें (Stationary transverse waves)', 'Stationary transverse waves'],
    [
      ['अप्रगामी अनुदैर्ध्य तरंगें', 'Stationary longitudinal waves'],
      ['केवल प्रगामी अनुदैर्ध्य तरंगें', 'Progressive longitudinal waves only'],
      ['विद्युत-चुंबकीय तरंगें', 'Electromagnetic waves'],
    ],
    'दोनों सिरों पर बंधे तार को झंकृत करने पर उसमें अनुप्रस्थ अप्रगामी तरंगें बनती हैं, जो आसपास की हवा में अनुदैर्ध्य ध्वनि तरंगें उत्पन्न करती हैं।',
    'Plucking a string fixed at both ends sets up stationary transverse waves in the string, which then radiate longitudinal sound waves in air.',
    'HARD'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'एक समतल दर्पण की ओर 15° के आपतन कोण पर प्रकाश की किरण आपतित होती है। आपतित किरण और परावर्तित किरण के बीच कुल कोण कितना होगा?',
    'A light ray strikes a plane mirror at an angle of incidence of 15°. What is the total angle between the incident ray and the reflected ray?',
    ['30°', '30°'],
    [
      ['15°', '15°'],
      ['75°', '75°'],
      ['60°', '60°'],
    ],
    'परावर्तन नियम से ∠r = ∠i = 15°। अतः आपतित और परावर्तित किरण के बीच का कुल कोण ∠i + ∠r = 15° + 15° = 30° होगा।',
    'By the law of reflection, ∠r = ∠i = 15°. Total angle between incident and reflected rays = ∠i + ∠r = 30°.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'इंद्रधनुष सदैव आकाश में किस दिशा में दिखाई देता है?',
    'In which direction in the sky is a rainbow always formed?',
    ['सूर्य के ठीक विपरीत दिशा में', 'Always in the direction opposite to the Sun'],
    [
      ['सूर्य की ही दिशा में', 'In the same direction as the Sun'],
      ['सदैव उत्तर दिशा में', 'Always in the north'],
      ['दोपहर 12 बजे ठीक सिर के ऊपर', 'Directly overhead at noon'],
    ],
    'यदि सूर्य पूर्व में है तो प्रातःकाल इंद्रधनुष पश्चिम में दिखेगा, और शाम को सूर्य पश्चिम में होने पर इंद्रधनुष पूर्व में बनेगा।',
    'A rainbow always appears opposite the Sun—in the west during morning and in the east during late afternoon.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'सिनेमा के पर्दे पर चित्रों की निरंतर चलती हुई गति किस जैविक/प्रकाशीय घटना के कारण प्रतीत होती है?',
    'The illusion of continuous motion on a cinema screen is due to which phenomenon of the eye?',
    ['दृष्टि निर्बंध (Persistence of vision)', 'Persistence of vision'],
    [
      ['पूर्ण आंतरिक परावर्तन', 'Total internal reflection'],
      ['समंजन क्षमता', 'Power of accommodation'],
      ['जरा-दूरदृष्टिता', 'Presbyopia'],
    ],
    'किसी वस्तु का प्रतिबिंब हटने के बाद भी रेटिना पर उसका प्रभाव लगभग 1/16 सेकंड तक बना रहता है; इसे दृष्टि निर्बंध कहते हैं।',
    'An image impression persists on the human retina for about 1/16th of a second after the object disappears, enabling motion pictures.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'पास और दूर की वस्तुओं को स्पष्ट देखने के लिए नेत्र लेंस द्वारा अपनी फोकस दूरी को स्वतः समायोजित करने की क्षमता क्या कहलाती है?',
    'The ability of the eye lens to adjust its focal length to see both near and far objects clearly is called:',
    ['समंजन क्षमता (Power of accommodation)', 'Power of accommodation'],
    [
      ['दृष्टि परास', 'Range of vision'],
      ['दृष्टि वैषम्य', 'Astigmatism'],
      ['प्रकीर्णन क्षमता', 'Scattering power'],
    ],
    'पक्ष्माभी पेशियाँ (Ciliary muscles) सिकुड़कर या शिथिल होकर नेत्र लेंस की मोटाई और फोकस दूरी बदलती हैं, जिसे नेत्र की समंजन क्षमता कहते हैं।',
    'Ciliary muscles alter the curvature and focal length of the eye lens; this ability is called power of accommodation.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'भूकंप आने से ठीक पहले कुछ जानवर (जैसे कुत्ते, हाथी) बेचैन क्यों हो जाते हैं?',
    'Why do certain animals (like dogs and elephants) often become restless shortly before an earthquake?',
    ['वे मुख्य झटकों से पहले आने वाली अवश्रव्य (Infrasonic, <20 Hz) तरंगों को सुन लेते हैं', 'They can hear low-frequency infrasonic waves (<20 Hz) produced before the main shock'],
    [
      ['वे गामा किरणें देख लेते हैं', 'They see gamma rays'],
      ['वे पराश्रव्य प्रकाश तरंगें सुनते हैं', 'They hear ultrasonic light waves'],
      ['उनके कान केवल 50 kHz से ऊपर सुनते हैं', 'Their ears only detect above 50 kHz'],
    ],
    'भूकंप की मुख्य प्रघाती तरंगों से पूर्व निम्न आवृत्ति (<20 Hz) की अवश्रव्य तरंगें उत्पन्न होती हैं जिन्हें कई जंतु महसूस कर लेते हैं।',
    'Earthquakes generate low-frequency infrasonic waves (<20 Hz) ahead of the main tremor, which sensitive animals can detect.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'प्रकाशिक तंतु (Optical Fibre) किस उद्देश्य से आधुनिक दूरसंचार में उपयोग किया जाता है?',
    'For what purpose are optical fibres widely used in modern telecommunications?',
    ['पूर्ण आंतरिक परावर्तन द्वारा तीव्र गति से डेटा/प्रकाश संकेतों के संचरण हेतु', 'Transmitting high-speed light/data signals via total internal reflection'],
    [
      ['ध्वनि को यांत्रिक कंपन के रूप में भेजने हेतु', 'Sending sound as mechanical vibrations'],
      ['विद्युत धारा को प्रतिरोध सहित भेजने हेतु', 'Conducting heavy electric currents'],
      ['एक्स-किरणें उत्पन्न करने हेतु', 'Generating X-rays'],
    ],
    'ऑप्टिकल फाइबर काँच या प्लास्टिक का अत्यंत पतला तंतु है जिसमें उच्च आवृत्ति के प्रकाश संकेत बिना ऊर्जा हानि के पूर्ण आंतरिक परावर्तन द्वारा भेजे जाते हैं।',
    'Optical fibres guide modulated light pulses over long distances with minimal loss using total internal reflection.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'काँच के आयताकार स्लैब से प्रकाश के गुजरने पर आपतित किरण और निर्गत किरण के बीच क्या संबंध होता है?',
    'When a light ray passes through a rectangular glass slab with parallel faces, how are the incident ray and emergent ray related?',
    ['निर्गत किरण आपतित किरण के समानांतर (केवल पार्श्व विस्थापन सहित) होती है', 'The emergent ray is parallel to the incident ray (laterally displaced)'],
    [
      ['दोनों एक-दूसरे के लंबवत होती हैं', 'They are perpendicular to each other'],
      ['दोनों प्रिज्म की तरह 7 रंगों में टूट जाती हैं', 'It splits into 7 colours like a prism'],
      ['निर्गत किरण वापस लौट आती है', 'Emergent ray reflects back'],
    ],
    'आयताकार स्लैब के दोनों फलक समानांतर होने से पहले पृष्ठ पर हुआ झुकाव दूसरे पृष्ठ पर विपरीत दिशा में निरस्त हो जाता है, अतः किरण समानांतर निकलती है।',
    'Because opposite faces of a rectangular slab are parallel, bending at entry is cancelled at exit, leaving the emergent ray parallel to the incident ray.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'सामान्य बातचीत (Normal conversation) में ध्वनि की तीव्रता लगभग कितने डेसिबल (dB) होती है?',
    'What is the approximate sound level in decibels (dB) during a normal conversation?',
    ['50 से 60 डेसिबल', '50 to 60 dB'],
    [
      ['10 से 15 डेसिबल', '10 to 15 dB'],
      ['110 से 120 डेसिबल', '110 to 120 dB'],
      ['150 से 180 डेसिबल', '150 to 180 dB'],
    ],
    'फुसफुसाहट ~20–30 dB, सामान्य बातचीत ~60 dB, व्यस्त यातायात ~70–80 dB और जेट इंजन ~130–140 dB होता है।',
    'Whispering is ~20–30 dB, normal conversation is ~50–60 dB, busy traffic is ~70–80 dB, and jet takeoff is ~130–140 dB.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'किस प्रकार का दर्पण एक विस्तृत क्षेत्र की वस्तुओं का छोटा प्रतिबिंब बना सकता है (जैसे एटीएम मशीनों या दुकानों में सुरक्षा हेतु)?',
    'Which mirror can form diminished images of objects spread over a large area (used for security surveillance in shops or ATMs)?',
    ['उत्तल दर्पण', 'Convex mirror'],
    [
      ['अवतल दर्पण', 'Concave mirror'],
      ['समतल दर्पण', 'Plane mirror'],
      ['बेलनाकार दर्पण', 'Cylindrical mirror'],
    ],
    'बाहर की ओर उभरे परावर्तक तल के कारण उत्तल दर्पण का दृष्टि क्षेत्र बहुत बड़ा होता है, जिससे बड़े क्षेत्र की निगरानी संभव होती है।',
    'Due to its outward-curved surface, a convex mirror has a very wide field of view, ideal for security mirrors at blind turns and shops.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'यदि दो पतले लेंस जिनकी क्षमता +3.5 D और -1.5 D है, को संपर्क में रखा जाए, तो संयुक्त लेंस की क्षमता और प्रकृति क्या होगी?',
    'If two thin lenses of powers +3.5 D and -1.5 D are placed in contact, what is the power and nature of the combination?',
    ['+2.0 D (उत्तल लेंस की भाँति)', '+2.0 D (behaves as a convex lens)'],
    [
      ['-2.0 D (अवतल लेंस की भाँति)', '-2.0 D (concave)'],
      ['+5.0 D (उत्तल लेंस की भाँति)', '+5.0 D (convex)'],
      ['+1.5 D (अवतल लेंस की भाँति)', '+1.5 D (concave)'],
    ],
    'संपर्क में रखे लेंसों की कुल क्षमता P = P₁ + P₂ = +3.5 + (-1.5) = +2.0 D। धनात्मक मान उत्तल प्रकृति दर्शाता है।',
    'Net power of lenses in contact P = P₁ + P₂ = +3.5 - 1.5 = +2.0 D; positive power indicates converging (convex) behaviour.',
    'MEDIUM',
    { formulaHi: 'P = P₁ + P₂', formulaEn: 'P = P₁ + P₂' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'समुद्र में हिमशैल या पनडुब्बी की स्थिति पता लगाने और धातु की चादरों में आंतरिक दरारों का पता लगाने में किस तरंग का उपयोग होता है?',
    'Which waves are used to detect cracks and flaws inside metal blocks as well as underwater icebergs?',
    ['पराश्रव्य तरंगें (Ultrasound)', 'Ultrasonic waves'],
    [
      ['अवश्रव्य तरंगें', 'Infrasonic waves'],
      ['सूक्ष्म तरंगें', 'Microwaves'],
      ['दृश्य प्रकाश', 'Visible light'],
    ],
    'पराश्रव्य तरंगें धातु के भीतर दरार या खाली जगह से टकराकर वापस परावर्तित हो जाती हैं, जिससे बिना तोड़े (Non-destructive testing) दोष का पता चलता है।',
    'Ultrasonic waves reflect back from internal cracks or voids in metal blocks, enabling non-destructive flaw detection.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'मायोपिया (निकट दृष्टि दोष) का मुख्य शारीरिक कारण क्या है?',
    'What is the main anatomical cause of Myopia (nearsightedness)?',
    ['नेत्र गोलक का लंबा हो जाना या नेत्र लेंस की वक्रता का अत्यधिक बढ़ जाना', 'Elongation of the eyeball or excessive curvature of the eye lens'],
    [
      ['नेत्र गोलक का छोटा हो जाना', 'Shortening of the eyeball'],
      ['नेत्र लेंस की फोकस दूरी का अत्यधिक बढ़ जाना', 'Excessive increase in focal length of eye lens'],
      ['कॉर्निया का पूरी तरह अपारदर्शी होना', 'Complete opacity of cornea'],
    ],
    'नेत्र गोलक के लंबा होने या लेंस की फोकस दूरी कम हो जाने से दूर की वस्तु का प्रतिबिंब रेटिना से पहले ही बन जाता है।',
    'Either excessive curvature of the eye lens (short focal length) or elongation of the eyeball focuses distant light in front of the retina.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'पेरिस्कोप में दो समतल दर्पण एक-दूसरे के किस कोण पर व्यवस्थित होते हैं?',
    'How are the two plane mirrors arranged inside a simple periscope?',
    ['परस्पर समानांतर और ट्यूब की अक्ष से 45° के कोण पर', 'Parallel to each other and inclined at 45° to the tube axis'],
    [
      ['परस्पर 90° पर', 'Perpendicular to each other'],
      ['परस्पर 60° पर', 'At 60° to each other'],
      ['परस्पर 30° पर', 'At 30° to each other'],
    ],
    'दोनों समतल दर्पण एक-दूसरे के समानांतर (ऊर्ध्वाधर से 45° पर) लगे होते हैं, जिससे प्रकाश कुल 90° + 90° मुड़कर समानांतर आँख में प्रवेश करता है।',
    'The two plane mirrors are parallel to each other, each tilted at 45° to the tube axis, reflecting light twice by 90°.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'निम्नलिखित में से किस पदार्थ में ध्वनि की चाल सर्वाधिक होती है?',
    'In which of the following materials is the speed of sound the highest?',
    ['एल्युमिनियम / इस्पात (ठोस धातु)', 'Aluminium / Steel (solid metal)'],
    [
      ['आसुत जल', 'Distilled water'],
      ['समुद्री जल', 'Sea water'],
      ['हाइड्रोजन गैस', 'Hydrogen gas'],
    ],
    'एल्युमिनियम में ध्वनि की चाल लगभग 6420 m/s और इस्पात में ~5960 m/s होती है, जो द्रवों और गैसों से कहीं अधिक है।',
    'Sound travels at ~6420 m/s in aluminium and ~5960 m/s in steel, much faster than in liquids or gases.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'श्वेत प्रकाश जब पानी के एक पतले साबुन के बुलबुले या काँच के प्रिज्म से गुजरता है, तो प्रिज्म से निकलने के बाद भी वर्णक्रम के 7 रंगों को पुनः श्वेत प्रकाश में बदलने के लिए न्यूटन ने क्या किया था?',
    'How did Isaac Newton recombine the seven spectrum colours emerging from a prism back into white light?',
    ['पहले प्रिज्म के सामने एक दूसरा समान प्रिज्म उल्टा रखकर', 'By placing a second identical prism in an inverted position'],
    [
      ['पहले प्रिज्म पर काला पेंट करके', 'By painting the first prism black'],
      ['एक अवतल दर्पण रखकर', 'By placing a concave mirror'],
      ['प्रकाश की तीव्रता बढ़ाकर', 'By increasing light intensity'],
    ],
    'उल्टा रखा गया दूसरा समान प्रिज्म पहले प्रिज्म द्वारा किए गए विक्षेपण को ठीक विपरीत दिशा में मोड़कर पुनः श्वेत प्रकाश बना देता है।',
    'An identical inverted second prism reverses the dispersion of the first prism and recombines the seven colours into white light.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किसी ध्वनि तरंग में दो क्रमागत संपीडनों (Compressions) या दो क्रमागत विरलनों (Rarefactions) के बीच की दूरी क्या कहलाती है?',
    'What is the distance between two consecutive compressions or two consecutive rarefactions in a sound wave called?',
    ['तरंगदैर्घ्य (Wavelength, λ)', 'Wavelength (λ)'],
    [
      ['आयाम (Amplitude)', 'Amplitude'],
      ['आवर्तकाल (Time period)', 'Time period'],
      ['आवृत्ति (Frequency)', 'Frequency'],
    ],
    'दो क्रमागत संपीडनों या विरलनों के बीच की दूरी एक पूर्ण तरंग की लंबाई अर्थात तरंगदैर्घ्य (λ) कहलाती है; इसका मात्रक मीटर है।',
    'The distance between two successive compressions or rarefactions is the wavelength (λ), measured in metres.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'सूर्य या किसी तारे से आने वाले प्रकाश में डॉपलर विस्थापन (Red shift) क्या दर्शाता है?',
    'What does the "Red shift" observed in light coming from distant galaxies indicate?',
    ['गैलेक्सियाँ पृथ्वी से दूर जा रही हैं (ब्रह्मांड का विस्तार)', 'Galaxies are receding away from Earth (expanding universe)'],
    [
      ['गैलेक्सियाँ पृथ्वी के पास आ रही हैं', 'Galaxies are approaching Earth'],
      ['तारे का तापमान बढ़ रहा है', 'Star temperature is rising'],
      ['प्रकाश की चाल बढ़ रही है', 'Speed of light is increasing'],
    ],
    'स्रोत दूर जाने पर आभासी तरंगदैर्घ्य बढ़ती है (लाल सिरे की ओर विस्थापन — Red shift), जिससे एडविन हबल ने ब्रह्मांड के विस्तार को सिद्ध किया।',
    'Red shift means an increase in observed wavelength as light sources move away, proving the expansion of the universe.',
    'HARD'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'जल और काँच के निरपेक्ष अपवर्तनांक क्रमशः 4/3 और 3/2 हैं। जल और काँच में प्रकाश की चाल का अनुपात क्या होगा?',
    'The absolute refractive indices of water and glass are 4/3 and 3/2 respectively. What is the ratio of the speed of light in water to that in glass?',
    ['9 : 8', '9 : 8'],
    [
      ['8 : 9', '8 : 9'],
      ['4 : 3', '4 : 3'],
      ['3 : 2', '3 : 2'],
    ],
    'v ∝ 1/n, अतः v_water / v_glass = n_glass / n_water = (3/2) / (4/3) = 9 / 8।',
    'Since v = c/n, v_water / v_glass = n_glass / n_water = (3/2)/(4/3) = 9 : 8.',
    'HARD',
    { formulaHi: 'v₁ / v₂ = n₂ / n₁', formulaEn: 'v₁ / v₂ = n₂ / n₁' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'ध्वनि तरंग की ऊर्जा किस भौतिक राशि के वर्ग के अनुक्रमानुपाती होती है?',
    'The energy/intensity carried by a sound wave is proportional to the square of its:',
    ['आयाम (Amplitude)', 'Amplitude'],
    [
      ['तरंगदैर्घ्य (Wavelength)', 'Wavelength'],
      ['आवर्तकाल (Time period)', 'Time period'],
      ['माध्यम का तापमान', 'Temperature of medium'],
    ],
    'ध्वनि की तीव्रता और प्रबलता तरंग के आयाम के वर्ग (I ∝ A²) के अनुक्रमानुपाती होती है।',
    'Sound intensity is directly proportional to the square of its amplitude (I ∝ A²).',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'जब किसी उत्तल दर्पण के सामने वस्तु को कहीं भी रखा जाए (अनंत और ध्रुव के बीच), तो प्रतिबिंब कहाँ बनता है?',
    'When an object is placed anywhere in front of a convex mirror (between infinity and pole), where is the image formed?',
    ['दर्पण के पीछे, ध्रुव (P) और मुख्य फोकस (F) के बीच', 'Behind the mirror, between the pole (P) and focus (F)'],
    [
      ['दर्पण के सामने फोकस पर', 'In front of mirror at focus'],
      ['वक्रता केंद्र C पर', 'At centre of curvature C'],
      ['दर्पण के पीछे अनंत पर', 'Behind mirror at infinity'],
    ],
    'उत्तल दर्पण में वास्तविक वस्तु का प्रतिबिंब सदैव दर्पण के पीछे P और F के बीच, आभासी, सीधा और छोटा बनता है।',
    'A convex mirror always forms a virtual, erect, diminished image behind the mirror between P and F.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'सिनेमा प्रोजेक्टर और स्लाइड प्रोजेक्टर में पर्दे पर बड़ा और वास्तविक चित्र बनाने के लिए किस लेंस का उपयोग किया जाता है?',
    'Which lens is used in a slide or film projector to cast a large real image onto a screen?',
    ['उत्तल लेंस (Convex lens)', 'Convex lens'],
    [
      ['अवतल लेंस (Concave lens)', 'Concave lens'],
      ['समतल लेंस', 'Plano lens'],
      ['उत्तल दर्पण', 'Convex mirror'],
    ],
    'जब स्लाइड को उत्तल लेंस के F और 2F के बीच रखा जाता है, तो पर्दे पर 2F से परे वास्तविक, बड़ा और उल्टा (स्लाइड उल्टी लगाकर सीधा दिखाते हैं) प्रतिबिंब बनता है।',
    'Placing an illuminated slide between F and 2F of a convex lens projects a real, magnified image onto a distant screen.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किसी कंपन करती हुई वस्तु के माध्य स्थिति से अधिकतम विस्थापन को क्या कहते हैं?',
    'What is the maximum displacement of a vibrating particle from its mean (equilibrium) position called?',
    ['आयाम (Amplitude)', 'Amplitude'],
    [
      ['आवृत्ति (Frequency)', 'Frequency'],
      ['आवर्तकाल (Time period)', 'Time period'],
      ['तरंगदैर्घ्य (Wavelength)', 'Wavelength'],
    ],
    'दोलन या तरंग गति में साम्यावस्था के दोनों ओर कण का अधिकतम विस्थापन आयाम कहलाता है।',
    'Maximum displacement on either side of the equilibrium position during oscillation is called amplitude.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'एक अवतल दर्पण की फोकस दूरी 15 सेमी है। उसके सामने 30 सेमी की दूरी पर एक मोमबत्ती रखी है। प्रतिबिंब दर्पण से कितनी दूरी पर बनेगा?',
    'A concave mirror has a focal length of 15 cm. A candle is placed 30 cm in front of it. At what distance from the mirror will the image form?',
    ['दर्पण के सामने 30 सेमी पर', '30 cm in front of the mirror'],
    [
      ['दर्पण के सामने 15 सेमी पर', '15 cm in front of the mirror'],
      ['दर्पण के पीछे 30 सेमी पर', '30 cm behind the mirror'],
      ['अनंत पर', 'At infinity'],
    ],
    'यहाँ वस्तु u = -30 cm = -2f (अर्थात वक्रता केंद्र C पर) रखी है। दर्पण सूत्र 1/(-15) = 1/v + 1/(-30) से v = -30 cm प्राप्त होता है।',
    'Since u = -30 cm = -2f (object at C), the mirror formula gives 1/v = -1/15 + 1/30 = -1/30, so v = -30 cm (30 cm in front).',
    'MEDIUM',
    { formulaHi: '1/f = 1/v + 1/u', formulaEn: '1/f = 1/v + 1/u' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'दिन की तुलना में रात में तारे या कम रोशनी की वस्तुओं को देखने के लिए जब हम अंधेरे कमरे में प्रवेश करते हैं, तो कुछ सेकंड बाद वस्तुएँ दिखने क्यों लगती हैं?',
    'When entering a dimly lit room from bright sunlight, why do objects gradually become visible after a few seconds?',
    ['आइरिस पुतली को फैलाता है और शलाका कोशिकाएँ अनुकूलित होती हैं', 'Iris dilates the pupil and rod cells adapt to dim light'],
    [
      ['नेत्र लेंस उत्तल से अवतल हो जाता है', 'Eye lens turns from convex to concave'],
      ['कॉर्निया प्रकाश उत्पन्न करता है', 'Cornea generates light'],
      ['रेटिना आगे खिसक आता है', 'Retina shifts forward'],
    ],
    'अंधेरे में पुतली का आकार बड़ा होकर अधिक प्रकाश अंदर जाने देता है तथा रेटिना में रोडोप्सिन (रोड कोशिकाओं का वर्णक) पुनः संश्लेषित होता है।',
    'The iris enlarges the pupil to admit more light and rhodopsin regenerates in rod cells (dark adaptation).',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'मानव ध्वनि उत्पादक अंग "स्वरयंत्र" (Larynx / Voice box) में ध्वनि कैसे उत्पन्न होती है?',
    'How is sound produced in the human voice box (larynx)?',
    ['फेफड़ों से निकली हवा द्वारा वाक्-तंतुओं (Vocal cords) में कंपन से', 'Vibration of vocal cords caused by air expelled from the lungs'],
    [
      ['जीभ और दाँतों के घर्षण से', 'Friction between tongue and teeth'],
      ['हृदय की धड़कन के प्रतिध्वनि से', 'Echo of heartbeat'],
      ['नाक की हड्डी के दोलन से', 'Oscillation of nasal bone'],
    ],
    'श्वसन नली के ऊपरी सिरे पर स्थित स्वरयंत्र में दो तने हुए वाक्-तंतु होते हैं, जिनके बीच हवा गुजरने पर कंपन से ध्वनि निकलती है।',
    'Air forced from the lungs passes through the slit between two stretched vocal cords in the larynx, causing them to vibrate.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'दोपहर में चमकता सूर्य सफेद दिखता है जबकि सूर्योदय/सूर्यास्त पर लाल दिखता है। दोपहर में सूर्य सफेद दिखने का क्या कारण है?',
    'Why does the Sun appear nearly white at noon whereas it looks reddish at sunrise and sunset?',
    ['दोपहर में प्रकाश को वायुमंडल में सबसे कम दूरी तय करनी पड़ती है, जिससे सभी रंग लगभग बिना प्रकीर्णित हुए पहुँचते हैं', 'At noon, sunlight travels the shortest path through the atmosphere with minimal scattering of any colour'],
    [
      ['दोपहर में सूर्य पृथ्वी के सबसे करीब होता है', 'Sun is closest to Earth at noon'],
      ['दोपहर में लाल प्रकाश नष्ट हो जाता है', 'Red light disappears at noon'],
      ['दोपहर में वायुमंडल गायब हो जाता है', 'Atmosphere vanishes at noon'],
    ],
    'सिर के ठीक ऊपर होने पर सूर्य का प्रकाश वायुमंडल की पतली परत से गुजरता है, इसलिए नीले सहित बहुत कम प्रकाश प्रकीर्णित होता है और मिश्रित श्वेत प्रकाश आँखों तक आता है।',
    'With the Sun overhead, light traverses the thinnest atmospheric path, so very little blue light is scattered out and all colours reach us evenly.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किस तरंग के माध्यम से पराबैंगनी (UV) और एक्स-किरणें संचरित होती हैं?',
    'Through what kind of waves do ultraviolet (UV) and X-rays propagate?',
    ['अनुप्रस्थ विद्युत-चुंबकीय तरंगें', 'Transverse electromagnetic waves'],
    [
      ['अनुदैर्ध्य यांत्रिक तरंगें', 'Longitudinal mechanical waves'],
      ['प्रत्यास्थ ध्वनि तरंगें', 'Elastic sound waves'],
      ['पराश्रव्य तरंगें', 'Ultrasonic waves'],
    ],
    'रेडियो, सूक्ष्म, अवरक्त, दृश्य, पराबैंगनी, एक्स और गामा किरणें सभी विद्युत-चुंबकीय (अनुप्रस्थ) तरंगें हैं जो निर्वात में भी 3 × 10⁸ m/s से चलती हैं।',
    'All electromagnetic radiation (radio through gamma rays, including UV and X-rays) consists of transverse waves travelling at c in vacuum.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'कलाई घड़ी के अत्यंत छोटे पुर्जों की मरम्मत करने वाले घड़ीसाज किस उपकरण का उपयोग करते हैं?',
    'Which optical tool does a watchmaker use to inspect tiny watch parts?',
    ['कम फोकस दूरी का एक उत्तल लेंस (आवर्धक)', 'A convex lens of short focal length (magnifying glass)'],
    [
      ['अवतल लेंस', 'Concave lens'],
      ['उत्तल दर्पण', 'Convex mirror'],
      ['प्रिज्म', 'Prism'],
    ],
    'छोटे पुर्जों को उत्तल लेंस के फोकस के भीतर रखकर घड़ीसाज उनका बड़ा और सीधा प्रतिबिंब देख पाता है।',
    'A watchmaker uses a short-focal-length convex lens as a simple magnifier to obtain an enlarged, upright virtual image.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'प्रकाश: परावर्तन एवं दर्पण',
    'केलाइडोस्कोप (बहुमूर्तिदर्शी) में तीन आयताकार दर्पण किस कोण पर जुड़े होते हैं?',
    'At what angle are the three rectangular plane mirror strips inclined inside a kaleidoscope?',
    ['60° (समबाहु त्रिभुज के रूप में)', '60° (forming an equilateral triangular prism)'],
    [
      ['90°', '90°'],
      ['45°', '45°'],
      ['120°', '120°'],
    ],
    'केलाइडोस्कोप में तीन दर्पण 60° के कोण पर प्रिज्म जैसा त्रिकोण बनाते हैं, जिससे बहु-परावर्तन द्वारा सुंदर सममित पैटर्न दिखाई देते हैं।',
    'Three plane mirror strips joined at 60° angles produce symmetric, ever-changing patterns via multiple reflections.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'किसी ध्वनि तरंग की आवृत्ति 500 Hz है। एक सेकंड में यह कितने दोलन पूरे करेगी और इसका आवर्तकाल कितना होगा?',
    'A sound wave has a frequency of 500 Hz. How many vibrations does it complete in 1 second, and what is its time period?',
    ['500 दोलन; आवर्तकाल 0.002 सेकंड', '500 vibrations; time period 0.002 s'],
    [
      ['500 दोलन; आवर्तकाल 0.02 सेकंड', '500 vibrations; 0.02 s'],
      ['250 दोलन; आवर्तकाल 0.004 सेकंड', '250 vibrations; 0.004 s'],
      ['500 दोलन; आवर्तकाल 2 सेकंड', '500 vibrations; 2 s'],
    ],
    'आवृत्ति 500 Hz का अर्थ प्रति सेकंड 500 दोलन है, तथा आवर्तकाल T = 1/ν = 1/500 = 0.002 सेकंड होगा।',
    '500 Hz means 500 oscillations per second, and time period T = 1/500 = 0.002 s.',
    'EASY',
    { formulaHi: 'T = 1 / ν', formulaEn: 'T = 1 / ν' }
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'मानव नेत्र एवं दृष्टि दोष',
    'रात्रि में वाहन चलाते समय सामने से आने वाले वाहन की तेज हेडलाइट की चकाचौंध से बचने के लिए किस प्रकार के चश्मे का उपयोग किया जाता है?',
    'Which type of glasses are used to reduce glare from oncoming car headlights at night or sunlight reflections?',
    ['पोलरॉइड (ध्रुवित) चश्मे', 'Polaroid (polarized) glasses'],
    [
      ['अवतल लेंस चश्मे', 'Concave lens glasses'],
      ['द्विफोकसी चश्मे', 'Bifocal glasses'],
      ['प्रिज्म चश्मे', 'Prism glasses'],
    ],
    'पोलरॉइड चश्मे परावर्तित होकर आने वाली अवांछित क्षैतिज ध्रुवित प्रकाश तरंगों (चकाचौंध) को रोक लेते हैं।',
    'Polaroid lenses block horizontally polarized glare reflected off roads, water, or glass surfaces.',
    'MEDIUM'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'अपवर्तन, लेंस एवं प्रिज्म',
    'दो प्रकाशिक माध्यमों के बीच अपवर्तन के समय यदि प्रकाश किरण अभिलंब के ठीक अनुदिश (आपतन कोण 0° पर) आपतित हो, तो अपवर्तन कोण कितना होगा?',
    'If a ray of light strikes the boundary between two transparent media normally (angle of incidence = 0°), what is the angle of refraction?',
    ['0° (किरण बिना मुड़े सीधी निकल जाएगी)', '0° (the ray passes straight without bending)'],
    [
      ['90°', '90°'],
      ['45°', '45°'],
      ['क्रांतिक कोण के बराबर', 'Equal to critical angle'],
    ],
    'स्नेल के नियम n₁ sin 0° = n₂ sin r से sin r = 0, अतः r = 0° प्राप्त होता है। चाल बदलती है किंतु दिशा नहीं मुड़ती।',
    'By Snell’s law, i = 0° gives sin r = 0, so r = 0°; speed changes but direction remains undeviated.',
    'EASY'
  ),
  q(
    'प्रकाश एवं ध्वनि',
    'ध्वनि एवं तरंग',
    'निम्नलिखित में से किस आवृत्ति की तरंग को "अवश्रव्य" (Infrasonic) कहा जाता है?',
    'Which of the following wave frequencies falls in the "infrasonic" range?',
    ['10 हर्ट्ज़', '10 Hz'],
    [
      ['250 हर्ट्ज़', '250 Hz'],
      ['2,000 हर्ट्ज़', '2,000 Hz'],
      ['25,000 हर्ट्ज़', '25,000 Hz'],
    ],
    '20 Hz से कम आवृत्ति वाली यांत्रिक तरंगें अवश्रव्य (Infrasonic) कहलाती हैं; गैंडे, हाथी और व्हेल इन तरंगों से संवाद कर सकते हैं।',
    'Mechanical waves below 20 Hz are infrasonic; animals like elephants, whales, and rhinoceroses communicate using infrasound.',
    'EASY'
  ),

  // =========================================================================
  // 3B. कार्य, ऊर्जा, शक्ति एवं ऊष्मा (अतिरिक्त प्रश्न) — 8 Qs
  // =========================================================================
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'बोलोमीटर (Bolometer) यंत्र का उपयोग किस भौतिक राशि के मापन के लिए किया जाता है?',
    'A bolometer is used to measure which physical quantity?',
    ['ऊष्मीय विकिरण (विद्युत-चुंबकीय विकिरण की ऊर्जा)', 'Thermal radiation (incident electromagnetic radiation power)'],
    [
      ['ध्वनि की प्रबलता', 'Sound loudness'],
      ['विद्युत आवेश', 'Electric charge'],
      ['द्रव की श्यानता', 'Viscosity of liquid'],
    ],
    'बोलोमीटर तापीय संवेदनशील प्रतिरोध पर आधारित यंत्र है जो अवरक्त और ऊष्मीय विकिरण की अत्यंत सूक्ष्म ऊर्जा को मापता है।',
    'A bolometer measures the power of incident thermal or electromagnetic radiation via temperature-dependent electrical resistance.',
    'HARD'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'यदि एक वृत्ताकार कक्षा में पृथ्वी के चारों ओर घूम रहे उपग्रह पर गुरुत्वाकर्षण बल लग रहा है, तो एक चक्कर में गुरुत्व द्वारा किया गया कार्य कितना होगा?',
    'When a satellite revolves around the Earth in a circular orbit under gravity, what is the work done by gravity in one revolution?',
    ['शून्य', 'Zero'],
    [
      ['धनात्मक और अधिकतम', 'Positive and maximum'],
      ['ऋणात्मक', 'Negative'],
      ['उपग्रह की गतिज ऊर्जा के बराबर', 'Equal to kinetic energy'],
    ],
    'वृत्ताकार गति में अभिकेंद्रीय गुरुत्वाकर्षण बल सदैव तात्क्षणिक विस्थापन (स्पर्शरेखीय दिशा) के लंबवत (90°) होता है; अतः W = F·s cos 90° = 0।',
    'In circular orbit, gravitational force is always perpendicular (90°) to instantaneous displacement, so work done W = Fs cos 90° = 0.',
    'MEDIUM',
    { formulaHi: 'W = F s cos 90° = 0', formulaEn: 'W = F s cos 90° = 0' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'कैलोरीमीटर प्रायः तांबे (Copper) का ही क्यों बनाया जाता है?',
    'Why is a calorimeter usually made of copper?',
    ['ताँबे की विशिष्ट ऊष्मा कम और ऊष्मा चालकता बहुत अधिक होती है', 'Copper has low specific heat capacity and very high thermal conductivity'],
    [
      ['ताँबा ऊष्मा का कुचालक है', 'Copper is a thermal insulator'],
      ['ताँबे का गलनांक बहुत कम होता है', 'Copper has very low melting point'],
      ['ताँबा किसी अम्ल से अभिक्रिया नहीं करता', 'Copper never reacts with acids'],
    ],
    'ताँबे की विशिष्ट ऊष्मा कम (~0.09 cal/g°C) होने से वह मिश्रण से बहुत कम ऊष्मा लेता है और शीघ्र ही तापीय संतुलन में आ जाता है।',
    'Copper’s low specific heat means it absorbs negligible heat itself, while its high thermal conductivity ensures quick thermal equilibrium.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'मुक्त रूप से नीचे गिरती हुई किसी वस्तु की कुल यांत्रिक ऊर्जा (गतिज ऊर्जा + स्थितिज ऊर्जा) में क्या परिवर्तन होता है?',
    'What happens to the total mechanical energy (kinetic + potential) of a freely falling body (ignoring air resistance)?',
    ['सदैव स्थिर (संरक्षित) रहती है', 'Remains constant (conserved) throughout the fall'],
    [
      ['लगातार बढ़ती जाती है', 'Continuously increases'],
      ['लगातार घटती जाती है', 'Continuously decreases'],
      ['पृथ्वी से टकराने से ठीक पहले शून्य हो जाती है', 'Becomes zero just before impact'],
    ],
    'नीचे गिरते समय स्थितिज ऊर्जा (mgh) घटती जाती है और ठीक उतनी ही गतिज ऊर्जा (½mv²) बढ़ती जाती है, जिससे दोनों का योग नियत रहता है।',
    'During free fall, gravitational potential energy converts into kinetic energy such that KE + PE remains constant.',
    'EASY',
    { formulaHi: 'E = KE + PE = नियतांक', formulaEn: 'E = KE + PE = constant' }
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'धातु की दो परतों से बनी द्विधातु पट्टी (Bimetallic strip) को गर्म करने पर वह क्यों मुड़ जाती है?',
    'Why does a bimetallic strip bend when heated?',
    ['दोनों धातुओं के रेखीय तापीय प्रसार गुणांक भिन्न-भिन्न होते हैं', 'The two metals have different coefficients of linear thermal expansion'],
    [
      ['एक धातु पिघल जाती है', 'One metal melts'],
      ['दोनों धातुओं का द्रव्यमान अलग है', 'Their masses differ'],
      ['ऊष्मा केवल एक सिरे पर रहती है', 'Heat stays at one end'],
    ],
    'ताँबे और लोहे जैसी दो अलग धातुओं को जोड़ने पर समान ताप वृद्धि में ताँबा अधिक फैलता है, जिससे पट्टी लोहे की ओर मुड़ जाती है। इसका उपयोग थर्मोस्टेट में होता है।',
    'Because the two bonded metals expand by different amounts for the same temperature rise, the strip curves toward the less-expanding metal.',
    'MEDIUM'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'कार्य, ऊर्जा एवं शक्ति',
    'जल और पवन जैसे नवीकरणीय ऊर्जा स्रोतों की तुलना में कोयला और पेट्रोलियम किस प्रकार के ऊर्जा स्रोत हैं?',
    'Compared to renewable sources like solar and wind, coal and petroleum are:',
    ['अनवीकरणीय जीवाश्म ईंधन', 'Non-renewable fossil fuels'],
    [
      ['नवीकरणीय जैव ईंधन', 'Renewable biofuels'],
      ['अक्षय भू-तापीय ऊर्जा स्रोत', 'Inexhaustible geothermal sources'],
      ['नाभिकीय संलयन ईंधन', 'Nuclear fusion fuels'],
    ],
    'कोयला, पेट्रोलियम और प्राकृतिक गैस लाखों वर्षों में बने सीमित भंडार हैं जिन्हें शीघ्र पुनः प्राप्त नहीं किया जा सकता, अतः ये अनवीकरणीय ऊर्जा स्रोत हैं।',
    'Coal, petroleum, and natural gas formed over millions of years and are finite, hence classified as non-renewable fossil fuels.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ऊनी कपड़े हमारे शरीर को सर्दियों में गर्म क्यों रखते हैं?',
    'Why do woollen clothes keep our body warm in winter?',
    ['ऊन और उसके रेशों के बीच भरी हवा ऊष्मा की कुचालक होती है और शरीर की ऊष्मा बाहर नहीं जाने देती', 'Wool and air trapped in its pores are poor conductors of heat, preventing body heat loss'],
    [
      ['ऊनी कपड़े स्वयं ऊष्मा उत्पन्न करते हैं', 'Woollen clothes generate heat on their own'],
      ['ऊन बाहरी ठंड को सोखकर ऊष्मा बनाता है', 'Wool converts cold into heat'],
      ['ऊन सूर्य की सभी किरणों को परावर्तित करता है', 'Wool reflects all sunlight'],
    ],
    'ऊनी रेशे फुले हुए होते हैं जिनमें हवा फँसी रहती है; ऊन व हवा दोनों ऊष्मा के कुचालक होने से शरीर की गर्मी अंदर ही सुरक्षित रहती है।',
    'Wool fibres trap pockets of air; both wool and air are thermal insulators, preventing body heat from escaping to the cold surroundings.',
    'EASY'
  ),
  q(
    'कार्य, ऊर्जा, शक्ति एवं ऊष्मा',
    'ऊष्मा एवं तापमापन',
    'ठंड के दिनों में लोहे की बेंच उसी कमरे में रखी लकड़ी की बेंच से अधिक ठंडी क्यों महसूस होती है?',
    'On a cold morning, why does an iron bench feel much colder to touch than a wooden bench at the same temperature?',
    ['लोहा ऊष्मा का सुचालक है और हाथ से तेजी से ऊष्मा खींच लेता है', 'Iron is a good conductor of heat and draws heat rapidly from our hand'],
    [
      ['लोहे का तापमान लकड़ी से कम होता है', 'Iron is actually at a lower temperature than wood'],
      ['लकड़ी ऊष्मा की उत्तम सुचालक है', 'Wood is a better conductor of heat'],
      ['लोहे की विशिष्ट ऊष्मा अनंत होती है', 'Iron has infinite specific heat'],
    ],
    'दोनों समान कमरे के ताप पर हैं, किंतु लोहा सुचालक होने से स्पर्श करते ही हाथ की ऊष्मा को शीघ्र बाहर प्रवाहित कर देता है।',
    'Both are at the same temperature, but iron conducts heat away from the hand much faster than insulating wood, feeling colder.',
    'EASY'
  ),

  // =========================================================================
  // 5. विद्युत, धारा, प्रतिरोध, चुंबकत्व — 65 Qs
  // =========================================================================
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विद्युत आवेश (Electric Charge) का SI मात्रक क्या होता है?',
    'What is the SI unit of electric charge?',
    ['कूलॉम (Coulomb, C)', 'Coulomb (C)'],
    [
      ['एम्पियर (Ampere)', 'Ampere'],
      ['वोल्ट (Volt)', 'Volt'],
      ['ओम (Ohm)', 'Ohm'],
    ],
    'आवेश प्रवाह की मात्रा को कूलॉम (C) में मापा जाता है। 1 कूलॉम में लगभग 6.25 × 10¹⁸ इलेक्ट्रॉन का आवेश होता है।',
    'Electric charge is measured in Coulombs (C). One Coulomb equals the charge of approximately 6.25 × 10¹⁸ electrons.',
    'EASY',
    { formulaHi: 'Q = ne', formulaEn: 'Q = ne' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'किसी चालक में विद्युत आवेश के प्रवाह की दर को क्या कहते हैं और इसका SI मात्रक क्या है?',
    'What is the rate of flow of electric charge through a conductor called, and what is its SI unit?',
    ['विद्युत धारा; एम्पियर (A)', 'Electric current; Ampere (A)'],
    [
      ['विभवांतर; वोल्ट', 'Potential difference; Volt'],
      ['प्रतिरोध; ओम', 'Resistance; Ohm'],
      ['विद्युत शक्ति; वाट', 'Electric power; Watt'],
    ],
    'विद्युत धारा I = Q / t होती है और इसका SI मूल मात्रक एम्पियर (1 A = 1 C/s) है।',
    'Electric current I = Q / t is the rate of flow of charge, measured in Amperes (1 A = 1 C/s).',
    'EASY',
    { formulaHi: 'I = Q / t', formulaEn: 'I = Q / t' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विद्युत धारा मापने वाले यंत्र "एमीटर" (Ammeter) को विद्युत परिपथ में किस क्रम में जोड़ा जाता है?',
    'How is an ammeter connected in an electric circuit to measure current?',
    ['श्रेणीक्रम (Series) में, और इसका प्रतिरोध अत्यंत कम होता है', 'In series, with very low internal resistance'],
    [
      ['समानांतर क्रम (Parallel) में, उच्च प्रतिरोध सहित', 'In parallel, with high resistance'],
      ['श्रेणीक्रम में, अनंत प्रतिरोध सहित', 'In series, with infinite resistance'],
      ['समानांतर क्रम में, शून्य प्रतिरोध सहित', 'In parallel, with zero resistance'],
    ],
    'संपूर्ण धारा एमीटर से गुजरे इसके लिए इसे श्रेणीक्रम में जोड़ा जाता है तथा धारा में रुकावट न हो इसलिए आदर्श एमीटर का प्रतिरोध शून्य (बहुत कम) होता है।',
    'An ammeter is connected in series so the full circuit current passes through it, and its resistance must be very low (ideally zero).',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विभवांतर (Potential difference) मापने के लिए "वोल्टमीटर" को परिपथ में किस क्रम में जोड़ा जाता है?',
    'How is a voltmeter connected across two points in a circuit to measure potential difference?',
    ['समानांतर क्रम (Parallel) में, उच्च प्रतिरोध सहित', 'In parallel, with very high internal resistance'],
    [
      ['श्रेणीक्रम (Series) में, निम्न प्रतिरोध सहित', 'In series, with low resistance'],
      ['श्रेणीक्रम में, उच्च प्रतिरोध सहित', 'In series, with high resistance'],
      ['समानांतर क्रम में, शून्य प्रतिरोध सहित', 'In parallel, with zero resistance'],
    ],
    'दो बिंदुओं के बीच विभवांतर मापने हेतु वोल्टमीटर समानांतर (पार्श्व) क्रम में जोड़ा जाता है; यह मुख्य धारा न खींचे इसलिए आदर्श वोल्टमीटर का प्रतिरोध अनंत (बहुत उच्च) होता है।',
    'A voltmeter is connected in parallel across the component and has very high resistance (ideally infinite) so it draws negligible current.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'ओम के नियम (Ohm’s Law) के अनुसार नियत ताप पर किसी धात्विक चालक में प्रवाहित धारा और सिरों के बीच विभवांतर में क्या संबंध होता है?',
    'According to Ohm’s Law, at constant temperature, how are potential difference (V) and current (I) in a metallic conductor related?',
    ['V = I × R (विभवांतर धारा के समानुपाती होता है)', 'V = I × R (V is directly proportional to I)'],
    [
      ['V = I / R', 'V = I / R'],
      ['I = V × R', 'I = V × R'],
      ['V और I व्युत्क्रमानुपाती होते हैं', 'V and I are inversely proportional'],
    ],
    'जॉर्ज साइमन ओम के नियम से भौतिक परिस्थितियाँ (जैसे ताप) स्थिर रहने पर V ∝ I अर्थात V = IR होता है, जहाँ R चालक का प्रतिरोध (ओम में) है।',
    'Ohm’s law states that at constant temperature and physical conditions, V ∝ I, giving V = IR where R is resistance in Ohms (Ω).',
    'EASY',
    { formulaHi: 'V = I R', formulaEn: 'V = I R' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'किसी चालक तार का प्रतिरोध (R) निम्नलिखित में से किस पर निर्भर करता है?',
    'On which factors does the electrical resistance (R) of a uniform metallic wire depend?',
    ['तार की लंबाई, अनुप्रस्थ काट के क्षेत्रफल, पदार्थ की प्रकृति और तापमान पर', 'Length, cross-sectional area, nature of material, and temperature'],
    [
      ['केवल तार में प्रवाहित धारा पर', 'Only on the current flowing through it'],
      ['केवल वोल्टेज पर', 'Only on applied voltage'],
      ['केवल तार के रंग पर', 'Only on the colour of insulation'],
    ],
    'प्रतिरोध R = ρ(L/A) होता है, अर्थात लंबाई के समानुपाती, क्षेत्रफल के व्युत्क्रमानुपाती तथा पदार्थ की प्रतिरोधकता (ρ) व तापमान पर निर्भर करता है।',
    'Resistance R = ρ(L/A) depends directly on length L, inversely on cross-sectional area A, and on the material’s resistivity ρ and temperature.',
    'EASY',
    { formulaHi: 'R = ρ (L / A)', formulaEn: 'R = ρ (L / A)' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि एक ताँबे के तार को खींचकर उसकी लंबाई दोगुनी कर दी जाए (आयतन समान रखते हुए), तो उसका नया प्रतिरोध कितना हो जाएगा?',
    'If a copper wire is stretched to double its original length (keeping volume constant), what happens to its resistance?',
    ['चार गुना हो जाएगा', 'It becomes four times'],
    [
      ['दोगुना हो जाएगा', 'It becomes double'],
      ['आधा रह जाएगा', 'It becomes half'],
      ['अपरिवर्तित रहेगा', 'Remains unchanged'],
    ],
    'आयतन (A×L) स्थिर रहने पर लंबाई 2L होने से अनुप्रस्थ क्षेत्रफल A/2 हो जाएगा। अतः नया प्रतिरोध R′ = ρ(2L)/(A/2) = 4ρ(L/A) = 4R।',
    'With constant volume, doubling length halves the cross-sectional area: R′ = ρ(2L)/(A/2) = 4R.',
    'HARD',
    { formulaHi: 'R′ = n² R', formulaEn: 'R′ = n² R' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विशिष्ट प्रतिरोध या प्रतिरोधकता (Resistivity, ρ) का SI मात्रक क्या होता है?',
    'What is the SI unit of electrical resistivity (ρ)?',
    ['ओम·मीटर (Ω·m)', 'Ohm-metre (Ω·m)'],
    [
      ['ओम (Ω)', 'Ohm (Ω)'],
      ['ओम/मीटर (Ω/m)', 'Ohm/metre (Ω/m)'],
      ['सीमेंस (S)', 'Siemens (S)'],
    ],
    'सूत्र ρ = R·A/L से मात्रक = Ω × m² / m = Ω·m होता है। प्रतिरोधकता केवल पदार्थ की प्रकृति और ताप पर निर्भर करती है, लंबाई या मोटाई पर नहीं।',
    'From ρ = R·A/L, the SI unit is Ω·m. Resistivity is an intrinsic property depending only on material and temperature.',
    'MEDIUM',
    { formulaHi: 'ρ = R A / L', formulaEn: 'ρ = R A / L' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'तापमान बढ़ाने पर धात्विक चालकों (जैसे ताँबा) और अर्धचालकों (जैसे सिलिकॉन) के प्रतिरोध में क्रमशः क्या परिवर्तन होता है?',
    'With an increase in temperature, how does the resistance of metallic conductors and semiconductors change respectively?',
    ['धातुओं का प्रतिरोध बढ़ता है, जबकि अर्धचालकों का घटता है', 'Resistance of metals increases, while that of semiconductors decreases'],
    [
      ['दोनों का प्रतिरोध बढ़ता है', 'Both increase'],
      ['दोनों का प्रतिरोध घटता है', 'Both decrease'],
      ['धातुओं का घटता है और अर्धचालकों का बढ़ता है', 'Metals decrease and semiconductors increase'],
    ],
    'धातुओं में ताप बढ़ने से इलेक्ट्रॉनों का संघट्ट बढ़ता है अतः प्रतिरोध बढ़ता है; जबकि सिलिकॉन/जर्मेनियम जैसे अर्धचालकों में मुक्त आवेश वाहक बढ़ने से प्रतिरोध घटता है।',
    'In metals, higher thermal vibrations increase scattering so resistance rises; in semiconductors, more charge carriers are released so resistance drops.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि 4 Ω और 6 Ω के दो प्रतिरोधों को श्रेणीक्रम (Series) में जोड़ा जाए, तो तुल्य प्रतिरोध कितना होगा?',
    'If two resistors of 4 Ω and 6 Ω are connected in series, what is their equivalent resistance?',
    ['10 Ω', '10 Ω'],
    [
      ['2.4 Ω', '2.4 Ω'],
      ['5 Ω', '5 Ω'],
      ['24 Ω', '24 Ω'],
    ],
    'श्रेणीक्रम में तुल्य प्रतिरोध R_eq = R₁ + R₂ = 4 + 6 = 10 Ω होता है।',
    'In series combination, equivalent resistance R_eq = R₁ + R₂ = 4 + 6 = 10 Ω.',
    'EASY',
    { formulaHi: 'R_eq = R₁ + R₂', formulaEn: 'R_eq = R₁ + R₂' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि 6 Ω और 3 Ω के दो प्रतिरोधों को समानांतर क्रम (Parallel) में जोड़ा जाए, तो तुल्य प्रतिरोध कितना होगा?',
    'If two resistors of 6 Ω and 3 Ω are connected in parallel, what is their equivalent resistance?',
    ['2 Ω', '2 Ω'],
    [
      ['9 Ω', '9 Ω'],
      ['4.5 Ω', '4.5 Ω'],
      ['18 Ω', '18 Ω'],
    ],
    'समानांतर क्रम में 1/R_eq = 1/6 + 1/3 = 3/6 = 1/2, अतः R_eq = 2 Ω।',
    'In parallel combination, 1/R_eq = 1/6 + 1/3 = 1/2, so R_eq = 2 Ω.',
    'MEDIUM',
    { formulaHi: '1/R_eq = 1/R₁ + 1/R₂', formulaEn: '1/R_eq = 1/R₁ + 1/R₂' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'घरेलू विद्युत वायरिंग में सभी उपकरण (बल्ब, पंखे, फ्रिज आदि) किस क्रम में जोड़े जाते हैं?',
    'In domestic household wiring, how are electrical appliances (bulbs, fans, sockets) connected?',
    ['समानांतर (पार्श्व) क्रम में', 'In parallel'],
    [
      ['श्रेणीक्रम में', 'In series'],
      ['मिश्रित श्रेणीक्रम में', 'In series-only loop'],
      ['केवल भूसंपर्कन तार से', 'Only to earth wire'],
    ],
    'समानांतर क्रम में प्रत्येक उपकरण को पूरा 220 V विभवांतर मिलता है, प्रत्येक को स्वतंत्र स्विच से चलाया जा सकता है, और एक खराब होने पर बाकी चलते रहते हैं।',
    'Parallel wiring supplies full 220 V to every appliance independently, allowing separate switches and uninterrupted operation if one fails.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'भारत में घरेलू प्रत्यावर्ती धारा (AC) की आपूर्ति की मानक वोल्टता और आवृत्ति कितनी होती है?',
    'What are the standard voltage and frequency of domestic AC power supply in India?',
    ['220 वोल्ट और 50 हर्ट्ज़', '220 V and 50 Hz'],
    [
      ['110 वोल्ट और 60 हर्ट्ज़', '110 V and 60 Hz'],
      ['220 वोल्ट और 60 हर्ट्ज़', '220 V and 60 Hz'],
      ['440 वोल्ट और 50 हर्ट्ज़', '440 V and 50 Hz'],
    ],
    'भारत में घरेलू सिंगल-फेज विद्युत आपूर्ति 220–230 V और 50 Hz आवृत्ति पर होती है (जबकि अमेरिका में 110–120 V व 60 Hz है)।',
    'Domestic single-phase mains electricity in India is supplied at ~220–230 V with a frequency of 50 Hz.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत बल्ब का तंतु (Filament) किस धातु का बनाया जाता है और क्यों?',
    'Which metal is used to make the filament of an incandescent electric bulb, and why?',
    ['टंगस्टन, क्योंकि इसका गलनांक (~3380°C) बहुत उच्च होता है', 'Tungsten, because of its very high melting point (~3380°C)'],
    [
      ['नाइक्रोम, क्योंकि इसका गलनांक बहुत कम है', 'Nichrome, due to low melting point'],
      ['ताँबा, क्योंकि यह सस्ता है', 'Copper, because it is cheap'],
      ['एल्युमिनियम, क्योंकि यह हल्का है', 'Aluminium, because it is light'],
    ],
    'टंगस्टन (प्रतीक W) का गलनांक ~3380°C बहुत उच्च होने से यह श्वेत-तप्त होकर प्रकाश देने पर भी पिघलता नहीं है। बल्ब में ऑक्सीकरण रोकने हेतु नाइट्रोजन/आर्गन गैस भरी जाती है।',
    'Tungsten (symbol W) has a very high melting point (~3380°C), allowing it to glow white-hot without melting; inert argon/nitrogen prevents oxidation.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत हीटर, प्रेस (आयरन) और टोस्टर का तापन अवयव (Heating element) किस मिश्रधातु का बना होता है?',
    'The heating element of an electric heater, electric iron, or toaster is made of which alloy?',
    ['नाइक्रोम (निकल + क्रोमियम + मैंगनीज + आयरन)', 'Nichrome (Nickel + Chromium alloy)'],
    [
      ['टंगस्टन', 'Tungsten'],
      ['सोल्डर (सीसा + टिन)', 'Solder (Lead + Tin)'],
      ['पीतल', 'Brass'],
    ],
    'नाइक्रोम की प्रतिरोधकता उच्च होती है और उच्च तापमान पर भी इसका शीघ्र ऑक्सीकरण (दहन) नहीं होता, अतः यह तापन उपकरणों के लिए श्रेष्ठ है।',
    'Nichrome has high resistivity and does not oxidize easily even when red-hot, making it ideal for heating coils.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत परिपथों को लघुपथन (Short-circuit) व अतिभारण (Overloading) से बचाने वाला सुरक्षा फ्यूज तार किस गुण वाला होता है और किससे जुड़ा होता है?',
    'An electric fuse wire protecting circuits from overloading has which properties and how is it connected?',
    ['कम गलनांक व उच्च प्रतिरोध; सदैव विद्युतमय (Live) तार के श्रेणीक्रम में', 'Low melting point and high resistance; always in series with the live wire'],
    [
      ['उच्च गलनांक व कम प्रतिरोध; उदासीन तार के समानांतर', 'High melting point and low resistance; parallel to neutral'],
      ['उच्च गलनांक; अर्थिंग तार में', 'High melting point; in earth wire'],
      ['कम गलनांक; समानांतर क्रम में', 'Low melting point; in parallel'],
    ],
    'फ्यूज तार प्रायः टिन और सीसे की मिश्रधातु से बनता है जिसका गलनांक कम होता है। अधिक धारा आने पर यह पिघलकर लाइव तार का परिपथ तोड़ देता है।',
    'Fuse wire (typically tin-lead alloy) has low melting point and high resistance; placed in series on the live wire, it melts to break excessive current.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'जूल के तापन नियम (Joule’s Law of Heating) के अनुसार किसी प्रतिरोधक R में t समय तक I धारा प्रवाहित करने पर उत्पन्न ऊष्मा H का सूत्र क्या है?',
    'According to Joule’s law of heating, what is the heat (H) produced in a resistor R carrying current I for time t?',
    ['H = I²Rt', 'H = I²Rt'],
    [
      ['H = IRt', 'H = IRt'],
      ['H = I²R / t', 'H = I²R / t'],
      ['H = V I / t', 'H = V I / t'],
    ],
    'जूल के नियम से उत्पन्न ऊष्मा H = I²Rt = VIt = (V²/R)t होती है।',
    'By Joule’s heating law, heat dissipated is H = I²Rt (also equal to VIt or V²t/R).',
    'EASY',
    { formulaHi: 'H = I² R t', formulaEn: 'H = I² R t' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'एक 100 वाट का बल्ब 220 वोल्ट के स्रोत से जुड़ा है। यदि इसे 110 वोल्ट के स्रोत से जोड़ दिया जाए, तो यह कितनी शक्ति (Power) उपभोग करेगा?',
    'An electric bulb rated 100 W at 220 V is operated at 110 V. How much power will it consume?',
    ['25 वाट', '25 W'],
    [
      ['50 वाट', '50 W'],
      ['100 वाट', '100 W'],
      ['200 वाट', '200 W'],
    ],
    'बल्ब का प्रतिरोध R = V²/P = 220²/100 स्थिर है। वोल्टेज आधा (110 V) होने पर नई शक्ति P′ = V′²/R = (V/2)²/R = P/4 = 100/4 = 25 वाट होगी।',
    'Resistance R = V²/P stays constant. Since P ∝ V², halving voltage reduces power to (1/2)² = 1/4th, i.e., 100/4 = 25 W.',
    'HARD',
    { formulaHi: 'P = V² / R', formulaEn: 'P = V² / R' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत परिपथ में तीन रंगों के रोधित तारों में लाल/भूरा, काला/नीला और हरा तार क्रमशः किसे दर्शाते हैं?',
    'In standard domestic wiring colour code, what do red/brown, black/blue, and green wires represent respectively?',
    ['विद्युतमय (Live), उदासीन (Neutral) और भूसंपर्क (Earth) तार', 'Live, Neutral, and Earth wires'],
    [
      ['उदासीन, विद्युतमय और भूसंपर्क तार', 'Neutral, Live, and Earth wires'],
      ['भूसंपर्क, लाइव और न्यूट्रल तार', 'Earth, Live, and Neutral wires'],
      ['तीनों केवल फेज तार', 'All three phase wires'],
    ],
    'परंपरागत भारतीय कोड के अनुसार लाल (या नया भूरा) लाइव/फेज तार, काला (या नीला) न्यूट्रल तार और हरा (या हरा-पीला) अर्थिंग तार होता है।',
    'In domestic wiring, red/brown denotes Live, black/blue denotes Neutral, and green/green-yellow denotes the Earth safety wire.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'भारी उपकरणों (जैसे फ्रिज, गीज़र, प्रेस) में भूसंपर्कन (Earthing) तार क्यों लगाया जाता है?',
    'Why is an earth wire connected to the metallic body of heavy electrical appliances like refrigerators and irons?',
    ['लीकेज धारा को सीधे धरती में भेजकर उपयोगकर्ता को बिजली के झटके से बचाने के लिए', 'To provide a low-resistance path for leakage current to ground, preventing electric shock'],
    [
      ['उपकरण की गति बढ़ाने के लिए', 'To increase appliance speed'],
      ['बिजली बिल कम करने के लिए', 'To cut electricity bills'],
      ['वोल्टेज को दोगुना करने के लिए', 'To double the voltage'],
    ],
    'यदि लाइव तार का संपर्क धातु के आवरण से हो जाए तो अर्थिंग तार निम्न प्रतिरोध मार्ग प्रदान कर धारा को भूमि में ले जाता है और झटका लगने से बचाता है।',
    'Earthing keeps the metallic casing at ground potential and safely routes fault currents to earth, blowing the fuse and preventing shock.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'ट्रांसफार्मर (Transformer) किस प्रकार की धारा पर कार्य करता है और इसका मुख्य कार्य क्या है?',
    'On which type of current does a transformer work, and what is its primary function?',
    ['केवल प्रत्यावर्ती धारा (AC) पर; वोल्टता को कम या अधिक करना', 'Only Alternating Current (AC); to step up or step down voltage'],
    [
      ['केवल दिष्ट धारा (DC) पर; वोल्टता बदलना', 'Only Direct Current (DC); to change voltage'],
      ['AC को DC में बदलना', 'To convert AC to DC'],
      ['यांत्रिक ऊर्जा को विद्युत में बदलना', 'To convert mechanical energy to electricity'],
    ],
    'ट्रांसफार्मर अन्योन्य प्रेरण (Mutual induction) के सिद्धांत पर केवल AC पर कार्य करता है। AC को DC में बदलने का कार्य दिष्टकारी (Rectifier) करता है।',
    'A transformer works on mutual induction, requiring changing magnetic flux (only AC), to step voltages up or down. Rectifiers convert AC to DC.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'इनवर्टर (Inverter) का मुख्य कार्य क्या होता है?',
    'What is the main function of a home electrical inverter?',
    ['बैटरी की दिष्ट धारा (DC) को प्रत्यावर्ती धारा (AC) में बदलना', 'To convert Direct Current (DC) from batteries into Alternating Current (AC)'],
    [
      ['AC को DC में बदलना', 'To convert AC to DC'],
      ['विद्युत आवेश उत्पन्न करना', 'To generate charge from air'],
      ['आवृत्ति को 50 Hz से 0 Hz करना', 'To drop frequency to zero'],
    ],
    'बिजली जाने पर इनवर्टर बैटरी में संचित 12V/24V DC ऊर्जा को 220V, 50 Hz AC में परिवर्तित कर घरेलू उपकरण चलाता है।',
    'An inverter converts stored DC from batteries into 220V AC to run household appliances during power cuts.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'शुष्क सेल (Dry cell) में धनात्मक इलेक्ट्रोड (कैथोड) और ऋणात्मक इलेक्ट्रोड (एनोड) क्रमशः किसके बने होते हैं?',
    'In a standard dry cell (zinc-carbon battery), what are the positive and negative electrodes made of respectively?',
    ['ग्रेफाइट (कार्बन) छड़ और जस्ता (जिंक) पात्र', 'Graphite (carbon) rod and Zinc container'],
    [
      ['ताँबा और लोहा', 'Copper and iron'],
      ['जस्ता और ग्रेफाइट छड़', 'Zinc rod and graphite container'],
      ['सीसा और टिन', 'Lead and tin'],
    ],
    'साधारण शुष्क सेल में जस्ते का खोल ऋणात्मक सिरे तथा बीच में स्थित कार्बन (ग्रेफाइट) की छड़ धनात्मक सिरे का कार्य करती है, जिसमें अमोनियम क्लोराइड की लेई होती है।',
    'In a dry cell, the zinc casing acts as the negative terminal and the central carbon rod surrounded by MnO₂ acts as the positive terminal.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'कार और इनवर्टर में प्रयुक्त होने वाली रिचार्जेबल लेड-एसिड बैटरी में कौन-सा अम्ल विद्युत अपघट्य (Electrolyte) के रूप में उपयोग होता है?',
    'Which acid is used as the electrolyte in rechargeable lead-acid batteries?',
    ['सल्फ्यूरिक अम्ल (H₂SO₄)', 'Sulphuric acid (H₂SO₄)'],
    [
      ['हाइड्रोक्लोरिक अम्ल (HCl)', 'Hydrochloric acid (HCl)'],
      ['नाइट्रिक अम्ल (HNO₃)', 'Nitric acid (HNO₃)'],
      ['एसिटिक अम्ल (CH₃COOH)', 'Acetic acid'],
    ],
    'सीसा-संचायक सेल (Lead-acid storage battery) में तनु सल्फ्यूरिक अम्ल (लगभग 35–38% H₂SO₄) विद्युत अपघट्य के रूप में प्रयुक्त होता है।',
    'Dilute sulphuric acid (H₂SO₄) serves as the electrolyte between lead and lead dioxide plates in lead-acid storage batteries.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत धारा के रासायनिक प्रभाव के उपयोग द्वारा एक धातु पर दूसरी वांछित धातु की परत चढ़ाने की प्रक्रिया क्या कहलाती है?',
    'The process of depositing a thin layer of a desired metal onto another material by passing an electric current is called:',
    ['विद्युत लेपन (Electroplating)', 'Electroplating'],
    [
      ['यशदलेपन (Galvanization) केवल गर्म करके', 'Hot-dip galvanization'],
      ['विद्युत अपघटन भंजन', 'Thermal cracking'],
      ['निस्तापन (Calcination)', 'Calcination'],
    ],
    'साइकिल के हैंडल, नलों और आभूषणों पर जंग रोकने व चमक लाने हेतु क्रोमियम, निकल या सोने की परत विद्युत लेपन द्वारा चढ़ाई जाती है।',
    'Electroplating uses electrolysis to coat metals like iron or brass with chromium, nickel, silver, or gold for shine and corrosion resistance.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विद्युत चालकता के आधार पर निम्नलिखित में से कौन-सा पदार्थ सबसे अच्छा सुचालक है?',
    'Which of the following is the best electrical conductor at room temperature?',
    ['चाँदी (Silver)', 'Silver'],
    [
      ['सोना (Gold)', 'Gold'],
      ['ताँबा (Copper)', 'Copper'],
      ['एल्युमिनियम (Aluminium)', 'Aluminium'],
    ],
    'चाँदी की प्रतिरोधकता न्यूनतम (1.60 × 10⁻⁸ Ω·m) होने से यह विद्युत की सर्वोत्तम सुचालक है; सस्ता होने से तारों में ताँबे व एल्युमिनियम का प्रयोग अधिक होता है।',
    'Silver has the lowest electrical resistivity and is the best conductor, followed by copper, gold, and aluminium.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'निम्नलिखित में से कौन-सा पदार्थ अर्धचालक (Semiconductor) का उदाहरण है जिसका उपयोग कंप्यूटर चिप्स और सोलर सेल में होता है?',
    'Which of the following is a semiconductor used in making computer microchips and solar cells?',
    ['सिलिकॉन (और जर्मेनियम)', 'Silicon (and Germanium)'],
    [
      ['ताँबा', 'Copper'],
      ['अभ्रक (Mica)', 'Mica'],
      ['एबोनाइट', 'Ebonite'],
    ],
    'सिलिकॉन (Si) और जर्मेनियम (Ge) प्रमुख अर्धचालक तत्व हैं जिनकी चालकता चालकों और कुचालकों के बीच होती है।',
    'Silicon (Si) and Germanium (Ge) are classic semiconductors used extensively in integrated circuits, diodes, and solar cells.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'आसुत जल (Distilled water) विद्युत का कुचालक होता है, जबकि नल का पानी सुचालक क्यों होता है?',
    'Why is distilled water a poor conductor of electricity whereas tap water conducts electricity?',
    ['नल के पानी में घुले खनिज लवण (आयन) उपस्थित होते हैं', 'Tap water contains dissolved mineral salts providing free ions'],
    [
      ['नल के पानी में मुक्त इलेक्ट्रॉन होते हैं', 'Tap water has free metallic electrons'],
      ['आसुत जल में ऑक्सीजन नहीं होती', 'Distilled water lacks oxygen'],
      ['नल का पानी सदैव गर्म होता है', 'Tap water is always hot'],
    ],
    'शुद्ध आसुत जल में स्वतंत्र आयन नगण्य होते हैं, जबकि नल या नदी के पानी में घुले लवण Na⁺, Cl⁻ आदि आयन प्रदान कर चालकता बढ़ाते हैं।',
    'Pure distilled water lacks free ions, while tap water contains dissolved salts that dissociate into ions and conduct electric current.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'बिजली के चमकने या आकाशीय तड़ित (Lightning) का मुख्य कारण क्या है?',
    'What is the primary cause of natural lightning during a thunderstorm?',
    ['बादलों और पृथ्वी (या विभिन्न बादलों) के बीच अत्यधिक स्थैतिक विद्युत आवेश का विसर्जन', 'Rapid electric discharge of huge accumulated static charges between clouds or cloud and Earth'],
    [
      ['बादलों के बीच चुंबकीय ध्रुवों का टकराना', 'Collision of magnetic poles'],
      ['सूर्य की पराबैंगनी किरणों का जलना', 'Burning of UV rays'],
      ['हवा में हाइड्रोजन गैस का विस्फोट', 'Hydrogen explosion in clouds'],
    ],
    'तूफानी बादलों में जल की बूँदों व बर्फ कणों के घर्षण से भारी धनात्मक व ऋणात्मक आवेश एकत्र होते हैं, जिनके विद्युत विसर्जन से बिजली चमकती है।',
    'Friction inside thunderclouds separates huge static charges; sudden breakdown of air insulation creates a massive electric discharge (lightning).',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'जब काँच की छड़ को रेशम के कपड़े से रगड़ा जाता है, तो काँच की छड़ पर कौन-सा आवेश आता है?',
    'When a glass rod is rubbed with a silk cloth, what charge does the glass rod acquire?',
    ['धनात्मक आवेश (इलेक्ट्रॉन रेशम पर जाने से)', 'Positive charge (as electrons transfer to silk)'],
    [
      ['ऋणात्मक आवेश', 'Negative charge'],
      ['कोई आवेश नहीं', 'No charge'],
      ['पहले ऋण फिर धन आवेश', 'Negative then positive'],
    ],
    'रगड़ने पर काँच से कुछ इलेक्ट्रॉन रेशम पर चले जाते हैं, जिससे काँच धनावेशित और रेशम ऋणावेशित हो जाता है।',
    'Electrons transfer from glass to silk upon rubbing, leaving the glass rod positively charged and the silk negatively charged.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत धारा के चुंबकीय प्रभाव (Magnetic effect of electric current) की सर्वप्रथम खोज किसने की थी?',
    'Who first discovered the magnetic effect of electric current?',
    ['हैंस क्रिश्चियन ऑर्स्टेड', 'Hans Christian Oersted'],
    [
      ['माइकल फैराडे', 'Michael Faraday'],
      ['जेम्स क्लर्क मैक्सवेल', 'James Clerk Maxwell'],
      ['जॉर्ज ओम', 'Georg Ohm'],
    ],
    '1820 में ऑर्स्टेड ने देखा कि किसी तार में विद्युत धारा प्रवाहित करने पर पास रखी चुंबकीय सुई विक्षेपित हो जाती है।',
    'In 1820, Hans Christian Oersted observed that an electric current flowing through a wire deflects a nearby magnetic compass needle.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'एक छड़ चुंबक (Bar magnet) को स्वतंत्रतापूर्वक लटकाने पर वह सदैव किस दिशा में ठहरती है?',
    'When a bar magnet is suspended freely, in which direction does it always align itself?',
    ['भौगोलिक उत्तर–दक्षिण दिशा में', 'Geographical North–South direction'],
    [
      ['भौगोलिक पूर्व–पश्चिम दिशा में', 'Geographical East–West direction'],
      ['उत्तर-पूर्व दिशा में', 'North-East direction'],
      ['किसी भी अनियमित दिशा में', 'Any random direction'],
    ],
    'पृथ्वी स्वयं एक विशाल चुंबक की तरह व्यवहार करती है, इसलिए मुक्त रूप से लटका चुंबक भौगोलिक उत्तर-दक्षिण दिशा में संरेखित होता है।',
    'Because Earth acts like a giant magnet, a freely suspended bar magnet aligns along the geographical North–South axis.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'चुंबक के किस भाग में आकर्षण बल (चुंबकीय क्षमता) सबसे अधिक और किस भाग में सबसे कम होता है?',
    'At which part of a bar magnet is the magnetic attraction strongest, and where is it weakest?',
    ['दोनों ध्रुवों (सिरों) पर सर्वाधिक, और मध्य बिंदु पर लगभग शून्य', 'Strongest at the two poles (ends), and almost zero at the centre'],
    [
      ['मध्य बिंदु पर सर्वाधिक, ध्रुवों पर शून्य', 'Strongest at the centre, zero at poles'],
      ['केवल उत्तरी ध्रुव पर सर्वाधिक', 'Strongest only at the north pole'],
      ['संपूर्ण चुंबक में सर्वत्र समान', 'Uniform everywhere'],
    ],
    'लोहे का बुरादा छड़ चुंबक के दोनों किनारों (ध्रुवों) पर सबसे अधिक चिपकता है और ठीक बीच में नगण्य रहता है।',
    'Iron filings cling densely near the two poles at the ends and scarcely at the neutral centre of a bar magnet.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'यदि एक छड़ चुंबक को बीच से तोड़कर दो टुकड़ों में बाँट दिया जाए, तो क्या होगा?',
    'If a bar magnet is broken into two halves from the middle, what happens?',
    ['प्रत्येक टुकड़ा स्वतंत्र उत्तरी और दक्षिणी ध्रुव वाला एक पूर्ण चुंबक बन जाता है', 'Each half becomes a complete magnet with both North and South poles'],
    [
      ['एक टुकड़े में केवल उत्तरी ध्रुव और दूसरे में केवल दक्षिणी ध्रुव होगा', 'One piece has only N-pole and the other only S-pole'],
      ['दोनों टुकड़े अपना चुंबकत्व खो देंगे', 'Both lose magnetism'],
      ['मध्य भाग नया दक्षिणी ध्रुव नहीं बना सकता', 'The middle cannot form poles'],
    ],
    'प्रकृति में एकल चुंबकीय ध्रुव (Monopole) का अस्तित्व नहीं होता; चुंबक को कितना भी छोटा काटें, हमेशा ध्रुव युग्म (N और S) ही मिलते हैं।',
    'Magnetic monopoles do not exist; every cut piece automatically develops both a North and a South pole.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'चुंबकीय क्षेत्र (Magnetic field) और चुंबकीय फ्लक्स (Magnetic flux) के SI मात्रक क्रमशः क्या हैं?',
    'What are the SI units of magnetic field (flux density) and magnetic flux respectively?',
    ['टेस्ला (Tesla) और वेबर (Weber)', 'Tesla and Weber'],
    [
      ['वेबर और टेस्ला', 'Weber and Tesla'],
      ['हेनरी और फैराड', 'Henry and Farad'],
      ['गॉस और एम्पियर', 'Gauss and Ampere'],
    ],
    'चुंबकीय क्षेत्र तीव्रता (B) का SI मात्रक टेस्ला (Wb/m²) है, जबकि चुंबकीय फ्लक्स (Φ) का SI मात्रक वेबर (Wb) है। (CGS मात्रक गॉस व मैक्सवेल हैं)।',
    'Magnetic field strength B has SI unit Tesla (T), while magnetic flux Φ has SI unit Weber (Wb).',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'विद्युत चुंबक (Electromagnet) का क्रोड बनाने के लिए किस पदार्थ का उपयोग किया जाता है और क्यों?',
    'Which material is used to make the core of an electromagnet, and why?',
    ['नर्म लोहा (Soft iron), क्योंकि यह शीघ्र चुंबकित और विचुंबकित हो जाता है', 'Soft iron, because it magnetizes and demagnetizes easily (low retentivity)'],
    [
      ['इस्पात (Steel), क्योंकि यह स्थायी चुंबक रहता है', 'Steel, because it retains magnetism permanently'],
      ['ताँबा, क्योंकि यह प्रतिचुंबकीय है', 'Copper, because it is diamagnetic'],
      ['एल्युमिनियम, क्योंकि यह हल्का है', 'Aluminium, because it is light'],
    ],
    'नर्म लोहे की चुंबकशीलता उच्च और धारणशीलता (Retentivity) कम होती है, इसलिए धारा बंद करते ही इसका चुंबकत्व समाप्त हो जाता है; जबकि स्थायी चुंबक इस्पात/एल्निको से बनते हैं।',
    'Soft iron has high permeability and low retentivity, losing magnetism immediately when current stops; permanent magnets use steel or Alnico.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'निम्नलिखित में से कौन-से पदार्थ लौहचुंबकीय (Ferromagnetic) हैं जो चुंबक द्वारा प्रबलता से आकर्षित होते हैं?',
    'Which set of elements consists entirely of ferromagnetic substances strongly attracted by a magnet?',
    ['लोहा, कोबाल्ट और निकल', 'Iron, Cobalt, and Nickel'],
    [
      ['ताँबा, चाँदी और सोना', 'Copper, Silver, and Gold'],
      ['एल्युमिनियम, सोडियम और ऑक्सीजन', 'Aluminium, Sodium, and Oxygen'],
      ['बिस्मथ, सीसा और जस्ता', 'Bismuth, Lead, and Zinc'],
    ],
    'लोहा (Fe), कोबाल्ट (Co) और निकल (Ni) प्रमुख लौहचुंबकीय पदार्थ हैं। सोने, चाँदी, ताँबे व जल जैसे पदार्थ प्रतिचुंबकीय (Diamagnetic) हैं।',
    'Iron, Cobalt, and Nickel are classic ferromagnetic materials; copper, gold, silver, and water are diamagnetic.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'जिस तापमान से ऊपर गर्म करने पर कोई लौहचुंबकीय पदार्थ अपना लौहचुंबकत्व खोकर अनुचुंबकीय (Paramagnetic) बन जाता है, उसे क्या कहते हैं?',
    'The temperature above which a ferromagnetic substance loses its ferromagnetism and becomes paramagnetic is called:',
    ['क्यूरी ताप (Curie temperature)', 'Curie temperature'],
    [
      ['क्रांतिक ताप (Critical temperature)', 'Critical temperature'],
      ['त्रिक बिंदु (Triple point)', 'Triple point'],
      ['परम शून्य ताप', 'Absolute zero'],
    ],
    'किसी चुंबक को अत्यधिक गर्म करने या हथौड़े से पीटने पर उसका चुंबकत्व नष्ट हो जाता है। लोहे का क्यूरी ताप लगभग 770°C (1043 K) है।',
    'Above the Curie temperature (e.g., ~770°C for iron), thermal agitation disrupts magnetic domains, turning the material paramagnetic.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'चुंबकीय क्षेत्र रेखाओं (Magnetic field lines) के संबंध में कौन-सा कथन सत्य है?',
    'Which statement regarding magnetic field lines is TRUE?',
    ['ये चुंबक के बाहर उत्तरी ध्रुव से निकलकर दक्षिणी ध्रुव में प्रवेश करती हैं और बंद वक्र बनाती हैं', 'Outside a magnet they emerge from the North pole and enter the South pole, forming closed loops'],
    [
      ['दो चुंबकीय क्षेत्र रेखाएँ एक-दूसरे को समकोण पर काटती हैं', 'Two magnetic field lines intersect at right angles'],
      ['ये केवल खुले सिरे वाली रेखाएँ होती हैं', 'They are open lines that end at poles'],
      ['ध्रुवों के पास ये सबसे दूर-दूर होती हैं', 'They are widest apart near the poles'],
    ],
    'चुंबकीय बल रेखाएँ चुंबक के बाहर N से S तथा चुंबक के भीतर S से N की ओर जाकर बंद पाश बनाती हैं, और कभी एक-दूसरे को नहीं काटतीं।',
    'Magnetic field lines run from N to S outside and S to N inside to form closed continuous loops, and never intersect each other.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'फ्लेमिंग के दाएँ हाथ का नियम (Fleming’s Right-Hand Rule) किसकी दिशा ज्ञात करने के लिए उपयोग किया जाता है?',
    'Fleming’s Right-Hand Rule is used to determine the direction of:',
    ['विद्युत जनित्र में प्रेरित धारा (Induced current) की दिशा', 'Induced current in an electric generator'],
    [
      ['विद्युत मोटर में चालक पर लगने वाले बल की दिशा', 'Force on a conductor in an electric motor'],
      ['चुंबक के ध्रुवों की दिशा', 'Magnetic poles'],
      ['स्थैतिक आवेश के प्रवाह की दिशा', 'Static charge'],
    ],
    'फ्लेमिंग का दाएँ हाथ का नियम जनित्र (Generator) में प्रेरित धारा की दिशा बताता है, जबकि बाएँ हाथ का नियम मोटर में चालक पर लगने वाले बल की दिशा बताता है।',
    'Fleming’s Right-Hand Rule gives the direction of induced current (generators), while the Left-Hand Rule gives the force on a current-carrying conductor (motors).',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'फ्लेमिंग के बाएँ हाथ के नियम में अंगूठा, तर्जनी (पहली उँगली) और मध्यमा क्रमशः किसे दर्शाते हैं?',
    'In Fleming’s Left-Hand Rule, what do the thumb, forefinger, and middle finger represent respectively?',
    ['बल (गति), चुंबकीय क्षेत्र और विद्युत धारा', 'Force (motion), Magnetic field, and Electric current'],
    [
      ['विद्युत धारा, बल और चुंबकीय क्षेत्र', 'Current, Force, and Magnetic field'],
      ['चुंबकीय क्षेत्र, विद्युत धारा और बल', 'Magnetic field, Current, and Force'],
      ['वोल्टेज, प्रतिरोध और धारा', 'Voltage, Resistance, and Current'],
    ],
    'तीनों उँगलियों को परस्पर लंबवत फैलाने पर: Father (Thumb = Force), Mother (Forefinger = Magnetic field), Child (Middle = Current)।',
    'When held mutually perpendicular: Thumb = Force/Motion, Forefinger = Magnetic Field, Middle finger = Current.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'परिनालिका (Solenoid) के भीतर धारा प्रवाहित करने पर उत्पन्न चुंबकीय क्षेत्र कैसा होता है?',
    'What is the nature of the magnetic field inside a long current-carrying solenoid?',
    ['सभी बिंदुओं पर लगभग एकसमान (Uniform) और अक्ष के समानांतर', 'Nearly uniform at all points inside and parallel to the axis'],
    [
      ['केंद्र पर शून्य और किनारों पर अनंत', 'Zero at centre and infinite at ends'],
      ['सदैव वृत्ताकार व परिवर्ती', 'Always concentric circles inside'],
      ['बाहरी क्षेत्र से बहुत कमजोर', 'Much weaker than outside'],
    ],
    'लंबी धारावाही परिनालिका के भीतर चुंबकीय क्षेत्र रेखाएँ समानांतर सीधी रेखाएँ होती हैं, जो एकसमान चुंबकीय क्षेत्र दर्शाती हैं।',
    'Inside a long current-carrying solenoid, field lines are parallel and equally spaced, indicating a uniform magnetic field.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'प्रत्यावर्ती धारा (AC) और दिष्ट धारा (DC) में प्रमुख अंतर क्या है?',
    'What is the main difference between Alternating Current (AC) and Direct Current (DC)?',
    ['AC की दिशा आवर्ती रूप से बदलती रहती है, जबकि DC एक ही दिशा में बहती है', 'AC reverses its direction periodically, whereas DC flows in only one direction'],
    [
      ['DC केवल उच्च वोल्टता पर मिलती है', 'DC exists only at high voltage'],
      ['AC में इलेक्ट्रॉन गति नहीं करते', 'Electrons do not move in AC'],
      ['DC का उपयोग बैटरियों में नहीं होता', 'DC is never used in batteries'],
    ],
    'भारत में AC प्रति सेकंड 50 चक्र (100 बार दिशा परिवर्तन) करती है, जबकि सेल या बैटरी से मिलने वाली DC सदैव एकदिशीय होती है।',
    'AC periodically reverses direction (50 cycles/s in India), whereas DC from cells/batteries flows unidirectionally.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'संधारित्र (Capacitor / Condenser) का मुख्य कार्य क्या है और इसकी धारिता (Capacitance) का SI मात्रक क्या है?',
    'What is the function of a capacitor, and what is the SI unit of capacitance?',
    ['विद्युत आवेश/ऊर्जा संचित करना; मात्रक फैराड (Farad)', 'To store electric charge/energy; SI unit is Farad (F)'],
    [
      ['धारा को रोकना; मात्रक हेनरी', 'To block current; Henry'],
      ['वोल्टेज बढ़ाना; मात्रक वेबर', 'To step up voltage; Weber'],
      ['AC बनाना; मात्रक ओम', 'To generate AC; Ohm'],
    ],
    'संधारित्र दो चालक प्लेटों के बीच परावैद्युत रखकर विद्युत क्षेत्र में ऊर्जा संचित करता है। धारिता C = Q/V का SI मात्रक फैराड (F) है।',
    'A capacitor stores electrostatic energy/charge between two plates; capacitance C = Q/V has the SI unit Farad (F).',
    'MEDIUM',
    { formulaHi: 'C = Q / V', formulaEn: 'C = Q / V' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत घंटी (Electric bell) किस सिद्धांत पर कार्य करती है?',
    'On which effect of electric current does an electric bell work?',
    ['विद्युत धारा का चुंबकीय प्रभाव (विद्युत चुंबक)', 'Magnetic effect of electric current (electromagnet)'],
    [
      ['विद्युत धारा का तापीय प्रभाव', 'Heating effect of current'],
      ['विद्युत धारा का रासायनिक प्रभाव', 'Chemical effect of current'],
      ['प्रकाश-विद्युत प्रभाव', 'Photoelectric effect'],
    ],
    'स्विच दबाने पर विद्युत चुंबक आर्मेचर को खींचकर घंटी से टकराता है और संपर्क टूटने पर वह वापस लौटता है, जिससे निरंतर घंटी बजती है।',
    'An electromagnet pulls a spring-loaded striker against the gong, breaking the circuit temporarily to create a continuous ringing cycle.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि एक विद्युत हीटर 220 V पर 5 A की धारा लेता है, तो हीटर के तंतु का प्रतिरोध और शक्ति क्या होगी?',
    'If an electric heater draws 5 A current at 220 V, what are its resistance and power?',
    ['प्रतिरोध 44 Ω और शक्ति 1100 वाट', 'Resistance 44 Ω and Power 1100 W'],
    [
      ['प्रतिरोध 1100 Ω और शक्ति 44 वाट', 'Resistance 1100 Ω and Power 44 W'],
      ['प्रतिरोध 44 Ω और शक्ति 220 वाट', 'Resistance 44 Ω and Power 220 W'],
      ['प्रतिरोध 22 Ω और शक्ति 550 वाट', 'Resistance 22 Ω and Power 550 W'],
    ],
    'ओम के नियम से R = V/I = 220/5 = 44 Ω, और शक्ति P = V × I = 220 × 5 = 1100 वाट।',
    'By Ohm’s law, R = V/I = 220/5 = 44 Ω, and power P = VI = 220 × 5 = 1100 W.',
    'MEDIUM',
    { formulaHi: 'R = V / I; P = V I', formulaEn: 'R = V / I; P = V I' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'अतिचालकता (Superconductivity) की अवस्था में किसी पदार्थ का विद्युत प्रतिरोध कितना हो जाता है?',
    'In the state of superconductivity (at extremely low critical temperatures), the electrical resistance of a material becomes:',
    ['ठीक शून्य (Zero)', 'Exactly zero'],
    [
      ['अनंत (Infinite)', 'Infinite'],
      ['बहुत अधिक', 'Very high'],
      ['1 ओम', '1 Ohm'],
    ],
    'एक निश्चित निम्न क्रांतिक ताप से नीचे पारा या विशेष मिश्रधातुएँ शून्य प्रतिरोध दर्शाती हैं; इस घटना को अतिचालकता कहते हैं (खोज: कामरलिंग ओनेस, 1911)।',
    'Below a critical low temperature, certain materials lose all electrical resistance completely (zero resistance)—discovered by Kamerlingh Onnes.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'लेंज का नियम (Lenz’s Law) किस भौतिक संरक्षण नियम के अनुरूप है?',
    'Lenz’s law in electromagnetic induction is a direct consequence of the law of conservation of:',
    ['ऊर्जा संरक्षण', 'Conservation of energy'],
    [
      ['आवेश संरक्षण', 'Conservation of charge'],
      ['द्रव्यमान संरक्षण', 'Conservation of mass'],
      ['कोणीय संवेग संरक्षण', 'Conservation of angular momentum'],
    ],
    'लेंज के नियम के अनुसार प्रेरित धारा सदैव उस कारण का विरोध करती है जिससे वह उत्पन्न होती है; इस विरोध के विरुद्ध किया गया यांत्रिक कार्य ही विद्युत ऊर्जा में बदलता है।',
    'Lenz’s law states that induced current opposes the change producing it; mechanical work done against this opposition converts into electrical energy.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'पृथ्वी के चुंबकीय क्षेत्र से संबंधित "दिकपात कोण" (Magnetic declination) किसे कहते हैं?',
    'What is "magnetic declination" in relation to Earth’s magnetism?',
    ['भौगोलिक याम्योत्तर और चुंबकीय याम्योत्तर के बीच का कोण', 'The angle between geographic meridian and magnetic meridian'],
    [
      ['चुंबकीय सुई का ऊर्ध्वाधर से झुकाव', 'Vertical tilt of compass needle'],
      ['ध्रुवों और विषुवत रेखा के बीच की दूरी', 'Distance between poles and equator'],
      ['सूर्य और पृथ्वी के बीच का कोण', 'Angle between Sun and Earth'],
    ],
    'पृथ्वी का चुंबकीय अक्ष भौगोलिक अक्ष से थोड़ा झुका है, अतः किसी स्थान पर भौगोलिक उत्तर व चुंबकीय उत्तर के बीच का क्षैतिज कोण दिकपात कोण कहलाता है।',
    'Magnetic declination is the horizontal angle between true geographical north and magnetic north at a given place.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'पृथ्वी के चुंबकीय ध्रुवों (Magnetic poles) पर नति कोण (Angle of dip) का मान कितना होता है?',
    'What is the value of the angle of dip (magnetic inclination) at the Earth’s magnetic poles?',
    ['90°', '90°'],
    [
      ['0°', '0°'],
      ['45°', '45°'],
      ['60°', '60°'],
    ],
    'चुंबकीय ध्रुवों पर चुंबकीय क्षेत्र रेखाएँ पृथ्वी की सतह के लंबवत प्रवेश/निकास करती हैं, अतः नति सुई ऊर्ध्वाधर (90°) हो जाती है; विषुवत रेखा पर नति कोण 0° होता है।',
    'At the magnetic poles, Earth’s field is vertical so the angle of dip is 90°; at the magnetic equator, it is 0°.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    '2 कूलॉम आवेश को 12 वोल्ट विभवांतर वाले दो बिंदुओं के बीच ले जाने में कितना कार्य करना होगा?',
    'How much work is done in moving a charge of 2 C across two points having a potential difference of 12 V?',
    ['24 जूल', '24 J'],
    [
      ['6 जूल', '6 J'],
      ['14 जूल', '14 J'],
      ['10 जूल', '10 J'],
    ],
    'विभवांतर V = W/Q से, कार्य W = V × Q = 12 V × 2 C = 24 जूल।',
    'Since potential difference V = W/Q, work done W = V × Q = 12 × 2 = 24 J.',
    'EASY',
    { formulaHi: 'W = V × Q', formulaEn: 'W = V × Q' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'प्रत्यावर्ती धारा (AC) को लंबी दूरी तक उच्च वोल्टेज पर क्यों भेजा जाता है?',
    'Why is electrical power transmitted over long distances at very high AC voltages?',
    ['तारों में धारा कम करके I²R ऊष्मा हानि (ऊर्जा क्षय) को न्यूनतम करने के लिए', 'To reduce current and minimize I²R resistive heat loss in transmission cables'],
    [
      ['ताकि तारों में धारा का मान बहुत बढ़ जाए', 'To maximize current in the cables'],
      ['ताकि पक्षियों को अधिक ऊर्जा मिले', 'To supply energy to birds'],
      ['DC में बदलने के लिए', 'To convert into DC'],
    ],
    'समान शक्ति P = VI के लिए वोल्टेज V बढ़ाने पर धारा I घटती है, जिससे ऊष्मा क्षय H = I²Rt बहुत कम हो जाता है।',
    'For a given power P = VI, stepping up voltage lowers current I, drastically reducing I²R heat losses along transmission lines.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'दो सजातीय विद्युत आवेश (जैसे + और +) एक-दूसरे को क्या करते हैं?',
    'What do two like electric charges (such as + and +) do to each other?',
    ['प्रतिकर्षित (Repel) करते हैं', 'Repel each other'],
    [
      ['आकर्षित (Attract) करते हैं', 'Attract each other'],
      ['कोई बल नहीं लगाते', 'Exert no force'],
      ['एक-दूसरे को उदासीन करते हैं', 'Cancel each other'],
    ],
    'स्थिरवैद्युतिकी का मूल नियम है: समान आवेश परस्पर प्रतिकर्षित करते हैं और विपरीत आवेश (+ और -) आकर्षित करते हैं।',
    'Like charges repel each other, while unlike (opposite) charges attract each other.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत आवेशों के बीच लगने वाले आकर्षण या प्रतिकर्षण बल का नियम (F = k q₁q₂ / r²) किसने दिया था?',
    'Who formulated the law (F = k q₁q₂ / r²) giving the electrostatic force between two point charges?',
    ['चार्ल्स ऑगस्टिन डी कूलॉम', 'Charles-Augustin de Coulomb'],
    [
      ['आंद्रे एम्पियर', 'Andre Ampere'],
      ['माइकल फैराडे', 'Michael Faraday'],
      ['एलेसांद्रो वोल्टा', 'Alessandro Volta'],
    ],
    'कूलॉम के नियम के अनुसार दो बिंदु आवेशों के बीच बल उनके परिमाणों के गुणनफल के समानुपाती और बीच की दूरी के वर्ग के व्युत्क्रमानुपाती होता है।',
    'Coulomb’s law states that electrostatic force between two point charges is proportional to the product of charges and inversely proportional to the square of distance.',
    'MEDIUM',
    { formulaHi: 'F = k (q₁ q₂) / r²', formulaEn: 'F = k (q₁ q₂) / r²' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'चिकित्सा क्षेत्र में MRI (Magnetic Resonance Imaging) मशीन शरीर के आंतरिक अंगों का चित्र लेने के लिए किसका उपयोग करती है?',
    'What does an MRI (Magnetic Resonance Imaging) machine use to image internal body organs?',
    ['शक्तिशाली चुंबकीय क्षेत्र और रेडियो तरंगें', 'Strong magnetic fields and radio waves'],
    [
      ['एक्स-किरणें और गामा किरणें', 'X-rays and gamma rays'],
      ['पराश्रव्य ध्वनि तरंगें', 'Ultrasonic sound waves'],
      ['पराबैंगनी विकिरण', 'Ultraviolet radiation'],
    ],
    'MRI में एक्स-रे जैसा आयनकारी विकिरण नहीं होता, बल्कि प्रबल चुंबकीय क्षेत्र व रेडियो तरंगों से शरीर के हाइड्रोजन प्रोटॉनों की छवि बनाई जाती है।',
    'MRI uses strong magnetic fields and radio waves (non-ionizing radiation) to produce detailed images of soft internal tissues.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'लेड (LED - Light Emitting Diode) साधारण तापदीप्त बल्ब की तुलना में बेहतर क्यों माना जाता है?',
    'Why are LED bulbs preferred over traditional incandescent bulbs?',
    ['ये बहुत कम बिजली खाकर अधिक प्रकाश देते हैं, ऊष्मा हानि कम करते हैं और आयु लंबी होती है', 'They consume far less electricity, waste minimal heat, and have a much longer lifespan'],
    [
      ['इनमें टंगस्टन तंतु अत्यंत गर्म होता है', 'They use a hotter tungsten filament'],
      ['इनमें पारे की भारी मात्रा होती है', 'They contain large amounts of mercury'],
      ['ये केवल 1000 V पर चलते हैं', 'They only work at 1000 V'],
    ],
    'LED अर्धचालक प्रकाश उत्सर्जक है जिसमें लगभग 80–90% कम ऊर्जा खर्च होती है और CFL की तरह जहरीला पारा भी नहीं होता।',
    'LEDs are energy-efficient solid-state devices that convert electricity directly into light with minimal heat and contain no toxic mercury.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'किरचॉफ का धारा नियम (KCL - संधि पर आने वाली धाराओं का योग = जाने वाली धाराओं का योग) किस संरक्षण पर आधारित है?',
    'Kirchhoff’s Current Law (sum of currents entering a junction equals sum leaving it) is based on conservation of:',
    ['विद्युत आवेश संरक्षण', 'Conservation of electric charge'],
    [
      ['ऊर्जा संरक्षण', 'Conservation of energy'],
      ['संवेग संरक्षण', 'Conservation of momentum'],
      ['चुंबकीय फ्लक्स संरक्षण', 'Conservation of magnetic flux'],
    ],
    'किसी संधि बिंदु पर आवेश एकत्रित नहीं हो सकता, अतः आने वाला आवेश जाने वाले आवेश के बराबर होता है (KCL = आवेश संरक्षण; KVL = ऊर्जा संरक्षण)।',
    'Since charge cannot accumulate at a junction, total incoming current equals outgoing current (conservation of charge; KVL reflects conservation of energy).',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'विद्युत प्रतिरोध का व्युत्क्रम क्या कहलाता है और इसका मात्रक क्या है?',
    'What is the reciprocal of electrical resistance called, and what is its SI unit?',
    ['विद्युत चालकता (Conductance); मात्रक सीमेंस (S) या म्हो (℧)', 'Electrical conductance; Siemens (S) or mho'],
    [
      ['प्रतिरोधकता; ओम·मीटर', 'Resistivity; Ohm-metre'],
      ['विभव; वोल्ट', 'Potential; Volt'],
      ['धारिता; फैराड', 'Capacitance; Farad'],
    ],
    'चालकता G = 1 / R होती है। इसका SI मात्रक सीमेंस (Siemens, Ω⁻¹) है जिसे पहले म्हो (mho) भी कहा जाता था।',
    'Conductance G = 1 / R measures ease of current flow, with SI unit Siemens (S = Ω⁻¹), formerly called mho.',
    'MEDIUM',
    { formulaHi: 'G = 1 / R', formulaEn: 'G = 1 / R' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'आधुनिक घरों में सुरक्षा फ्यूज के स्थान पर किस स्वचालित स्विच का उपयोग बढ़ रहा है जो अतिभारण पर तुरंत ट्रिप हो जाता है?',
    'Which automatic safety switch is widely used in modern homes instead of traditional fuse wires to trip instantly during overloads?',
    ['MCB (मिनिएचर सर्किट ब्रेकर)', 'MCB (Miniature Circuit Breaker)'],
    [
      ['LED', 'LED'],
      ['UPS', 'UPS'],
      ['LDR', 'LDR'],
    ],
    'MCB (Miniature Circuit Breaker) एक स्वतः कार्य करने वाला स्विच है जो लघु पथन या सीमा से अधिक धारा आने पर परिपथ को तुरंत काट देता है और इसे पुनः ऑन किया जा सकता है।',
    'An MCB automatically trips open when current exceeds a safe limit and can be reset manually without replacing any wire.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'क्रेडिट कार्ड, एटीएम कार्ड या पुराने कैसेट टेप की पट्टी पर सूचना किस रूप में संग्रहित की जाती है?',
    'In what form is data stored on the dark stripe of traditional credit/debit cards or audio cassettes?',
    ['चुंबकीय कणों के चुंबकत्व द्वारा (चुंबकीय पट्टी)', 'Magnetic domains on a magnetic stripe'],
    [
      ['प्रकाशीय प्रिज्म द्वारा', 'Optical prisms'],
      ['द्रव क्रिस्टल द्वारा', 'Liquid crystals'],
      ['रासायनिक विस्फोट द्वारा', 'Chemical reactions'],
    ],
    'एटीएम/क्रेडिट कार्ड के पीछे की काली चुंबकीय पट्टी (Magnetic stripe) आयरन ऑक्साइड के सूक्ष्म चुंबकीय कणों से बनी होती है।',
    'The magnetic stripe consists of tiny iron-based magnetic particles whose magnetization patterns encode binary data.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि किसी परिपथ में 10 सेकंड में 50 कूलॉम आवेश प्रवाहित होता है, तो प्रवाहित विद्युत धारा का मान कितना होगा?',
    'If 50 Coulombs of charge flow through a wire in 10 seconds, what is the electric current?',
    ['5 एम्पियर', '5 A'],
    [
      ['500 एम्पियर', '500 A'],
      ['0.2 एम्पियर', '0.2 A'],
      ['40 एम्पियर', '40 A'],
    ],
    'धारा I = Q / t = 50 C / 10 s = 5 एम्पियर।',
    'Current I = Q / t = 50 / 10 = 5 A.',
    'EASY',
    { formulaHi: 'I = Q / t', formulaEn: 'I = Q / t' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'किसी सीधे धारावाही चालक के चारों ओर उत्पन्न चुंबकीय बल रेखाओं की आकृति कैसी होती है?',
    'What is the shape of magnetic field lines around a straight current-carrying conductor?',
    ['चालक के चारों ओर संकेंद्री वृत्त (Concentric circles)', 'Concentric circles centred on the wire'],
    [
      ['चालक के समानांतर सीधी रेखाएँ', 'Straight lines parallel to wire'],
      ['परवलय (Parabola)', 'Parabolas'],
      ['केवल ध्रुव से निकलने वाली किरणें', 'Radial rays outward'],
    ],
    'मैक्सवेल के दाएँ हाथ के अंगूठे के नियम से सीधे तार के चारों ओर चुंबकीय क्षेत्र रेखाएँ संकेंद्री वृत्तों के रूप में होती हैं।',
    'By the right-hand thumb rule, magnetic field lines around a straight wire form concentric circles in planes perpendicular to the wire.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत जनित्र (Generator) और विद्युत मोटर में कौन-सा एक मूलभूत अंतर है?',
    'What is a fundamental difference between an electric AC generator and a DC generator?',
    ['AC जनित्र में सर्पी वलय (Slip rings) होते हैं, जबकि DC जनित्र में दिक्-परिवर्तक (Split-ring commutator) होता है', 'An AC generator uses slip rings, while a DC generator uses a split-ring commutator'],
    [
      ['AC जनित्र में चुंबक नहीं होता', 'AC generator has no magnet'],
      ['DC जनित्र में कुंडली नहीं घूमती', 'Coil does not rotate in DC generator'],
      ['AC जनित्र केवल बैटरी से चलता है', 'AC generator runs on battery'],
    ],
    'सर्पी वलय हर आधे चक्कर में बाह्य परिपथ में धारा की दिशा बदलने देते हैं (AC), जबकि विभक्त वलय दिक्-परिवर्तक बाह्य परिपथ में धारा को एक ही दिशा में बनाए रखता है (DC)।',
    'Slip rings allow current to alternate every half turn (AC), whereas a split-ring commutator reverses connections every half turn to maintain unidirectional current (DC).',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि समान प्रतिरोध R के 3 प्रतिरोधकों को समानांतर क्रम में जोड़ा जाए, तो उनका तुल्य प्रतिरोध कितना होगा?',
    'If 3 identical resistors each of resistance R are connected in parallel, what is their equivalent resistance?',
    ['R / 3', 'R / 3'],
    [
      ['3 R', '3 R'],
      ['R', 'R'],
      ['2 R / 3', '2 R / 3'],
    ],
    '1/R_eq = 1/R + 1/R + 1/R = 3/R, अतः R_eq = R/3। समानांतर क्रम में तुल्य प्रतिरोध सबसे छोटे प्रतिरोध से भी कम आता है।',
    '1/R_eq = 3/R, so R_eq = R/3. Parallel combination always yields a net resistance smaller than the smallest individual resistor.',
    'MEDIUM',
    { formulaHi: 'R_eq = R / n', formulaEn: 'R_eq = R / n' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'एक छड़ चुंबक के पास कम्पास सुई रखने पर कम्पास की सुई क्यों विक्षेपित होती है?',
    'Why does a magnetic compass needle get deflected when brought near a bar magnet?',
    ['क्योंकि कम्पास सुई स्वयं एक छोटा चुंबक है जिस पर चुंबकीय बल आघूर्ण लगता है', 'Because the compass needle is itself a tiny magnet experiencing magnetic torque'],
    [
      ['कम्पास सुई में विद्युत धारा बहती है', 'Current flows in the compass needle'],
      ['गुरुत्वाकर्षण सुई को घुमाता है', 'Gravity rotates the needle'],
      ['वायु दाब बदल जाता है', 'Air pressure changes'],
    ],
    'कम्पास की सुई एक छोटा स्थायी चुंबक होती है; सजातीय ध्रुव प्रतिकर्षित और विजातीय ध्रुव आकर्षित होने से वह चुंबकीय क्षेत्र रेखा की दिशा में मुड़ जाती है।',
    'The compass needle is a small pivoted magnet that experiences attraction/repulsion from the bar magnet’s magnetic field.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत वाहक बल (EMF - Electromotive force) वास्तव में बल है या कुछ और? इसका मात्रक क्या है?',
    'What physical quantity is Electromotive Force (EMF) actually, and what is its SI unit?',
    ['प्रति इकाई आवेश पर सेल द्वारा दी गई ऊर्जा (विभव); मात्रक वोल्ट (V)', 'Energy supplied by a source per unit charge (potential); unit Volt (V)'],
    [
      ['यह एक यांत्रिक बल है; मात्रक न्यूटन', 'It is a mechanical force; Newton'],
      ['यह विद्युत शक्ति है; मात्रक वाट', 'It is electric power; Watt'],
      ['यह विद्युत धारा है; मात्रक एम्पियर', 'It is current; Ampere'],
    ],
    'नाम में "बल" होने के बावजूद EMF कोई बल नहीं, बल्कि खुले परिपथ में सेल के सिरों के बीच अधिकतम विभवांतर (कार्य/आवेश) है, जिसका मात्रक वोल्ट (J/C) है।',
    'Despite its historical name, EMF is not a mechanical force—it is the potential difference (work per unit charge) across open source terminals, measured in Volts.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'बिजली के झटके से बचने के लिए बिजली मिस्त्री रबर के दस्ताने और रबर के जूते क्यों पहनते हैं?',
    'Why do electricians wear rubber gloves and rubber-soled shoes while repairing live circuits?',
    ['रबर विद्युत का उत्तम कुचालक (Insulator) है और शरीर से धरती तक धारा के मार्ग को रोकता है', 'Rubber is an electrical insulator that prevents current from completing a path through the body to earth'],
    [
      ['रबर धारा की गति बढ़ा देता है', 'Rubber speeds up electric current'],
      ['रबर विद्युत का अर्धचालक है', 'Rubber is a semiconductor'],
      ['रबर चुंबकीय क्षेत्र बढ़ाता है', 'Rubber increases magnetic field'],
    ],
    'रबर में मुक्त इलेक्ट्रॉन न होने से इसका प्रतिरोध अत्यंत उच्च होता है; यह शरीर को पृथ्वी से पृथक (Insulate) रखकर विद्युत आघात रोकता है।',
    'Rubber lacks free electrons and has extremely high resistance, isolating the body from earth and preventing current flow through the person.',
    'EASY'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'स्थिरवैद्युत अवक्षेपित्र (Electrostatic Precipitator) का उपयोग उद्योगों में किस लिए किया जाता है?',
    'For what purpose is an electrostatic precipitator used in thermal power plants and factories?',
    ['चिमनी से निकलने वाले धुएँ से राख व सूक्ष्म कणिकीय प्रदूषकों को अलग करने के लिए', 'To remove fly ash and fine particulate pollutants from industrial exhaust smoke'],
    [
      ['पानी को शुद्ध करके पीने योग्य बनाने के लिए', 'To purify drinking water'],
      ['बिजली के वोल्टेज को बढ़ाने के लिए', 'To step up voltage'],
      ['कार्बन डाइऑक्साइड को ऑक्सीजन में बदलने के लिए', 'To convert CO₂ into O₂'],
    ],
    'उच्च वोल्टेज इलेक्ट्रोड धुएँ के कणों को आवेशित कर देते हैं, जिन्हें विपरीत आवेशित प्लेटें आकर्षित करके चिमनी से बाहर जाने से रोक लेती हैं।',
    'High-voltage electrodes charge soot/ash particles in flue gas, which then stick to oppositely charged collector plates instead of polluting the air.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत धारा एवं प्रतिरोध',
    'यदि तीन प्रतिरोधकों 2 Ω, 3 Ω और 5 Ω को श्रेणीक्रम में 20 V की बैटरी से जोड़ा जाए, तो परिपथ में कितनी धारा बहेगी?',
    'If three resistors 2 Ω, 3 Ω, and 5 Ω are connected in series across a 20 V battery, what current flows in the circuit?',
    ['2 एम्पियर', '2 A'],
    [
      ['10 एम्पियर', '10 A'],
      ['0.5 एम्पियर', '0.5 A'],
      ['4 एम्पियर', '4 A'],
    ],
    'कुल प्रतिरोध R = 2 + 3 + 5 = 10 Ω। ओम के नियम से धारा I = V / R = 20 / 10 = 2 A।',
    'Total series resistance R = 2 + 3 + 5 = 10 Ω. Current I = V / R = 20 / 10 = 2 A.',
    'EASY',
    { formulaHi: 'I = V / (R₁ + R₂ + R₃)', formulaEn: 'I = V / (R₁ + R₂ + R₃)' }
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'चुंबकत्व',
    'मैगलेव (Maglev) ट्रेन बिना पटरियों को छुए हवा में तैरते हुए अत्यंत तेज गति से कैसे चलती है?',
    'How does a Maglev (Magnetic Levitation) train float above the track and move at ultra-high speeds?',
    ['समान चुंबकीय ध्रुवों के बीच प्रबल प्रतिकर्षण से ट्रेन ऊपर उठती है जिससे घर्षण समाप्त हो जाता है', 'Strong magnetic repulsion levitates the train above the guideway, eliminating rolling friction'],
    [
      ['विशाल जेट पंखों द्वारा नीचे हवा फेंककर', 'By downward jet air thrust'],
      ['बॉल बेयरिंग के प्रयोग से', 'Using steel ball bearings'],
      ['सड़क के पृष्ठ तनाव से', 'Using surface tension'],
    ],
    'अतिचालक विद्युत-चुंबकों द्वारा उत्पन्न चुंबकीय उत्तोलन से ट्रेन पटरी से कुछ सेमी ऊपर तैरती है, जिससे यांत्रिक घर्षण शून्य हो जाता है।',
    'Superconducting electromagnets levitate and propel the train via magnetic repulsion/attraction, eliminating mechanical track friction.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'दिष्ट धारा (DC) का उपयोग निम्नलिखित में से किस कार्य में अनिवार्य रूप से किया जाता है?',
    'In which of the following applications is Direct Current (DC) specifically required?',
    ['विद्युत अपघटन (Electrolysis), विद्युत लेपन और बैटरी चार्जिंग में', 'Electrolysis, electroplating, and battery charging'],
    [
      ['केवल ट्रांसफार्मर चलाने में', 'Running transformers'],
      ['लंबी दूरी के उच्च-वोल्टेज एसी ग्रिड में', 'High-voltage AC transmission grids'],
      ['सिंगल-फेज इंडक्शन मोटर में', 'Single-phase AC induction fans'],
    ],
    'इलेक्ट्रोप्लेटिंग और बैटरी चार्जिंग में ध्रुवता (धनात्मक/ऋणात्मक टर्मिनल) स्थिर रहना आवश्यक है, जो केवल DC में संभव है।',
    'Electrolysis, electroplating, and battery charging require fixed anode/cathode polarity, which only DC provides.',
    'MEDIUM'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'तड़ित झंझावात (बिजली कड़कने) के समय किसी खुली जगह पर छाता लेकर खड़े होने की बजाय कार के अंदर खिड़कियाँ बंद करके बैठना अधिक सुरक्षित क्यों होता है?',
    'Why is it safer to sit inside a closed metal car than stand under a tree or hold an umbrella during a lightning storm?',
    ['कार की धातु की बॉडी "फैराडे पिंजरे" की तरह आवेश को बाहरी सतह से धरती में भेजकर अंदर क्षेत्र शून्य रखती है', 'The metal car body acts as a Faraday cage (electrostatic shielding), keeping the interior electric field zero'],
    [
      ['कार के अंदर हवा नहीं होती', 'There is no air inside a car'],
      ['कार बिजली को आकर्षित ही नहीं करती', 'Cars cannot be struck by lightning'],
      ['कार की सीटें बिजली बनाती हैं', 'Car seats generate counter-electricity'],
    ],
    'खोखले चालक के भीतर विद्युत क्षेत्र सदैव शून्य होता है (स्थिरवैद्युत परिरक्षण / Electrostatic shielding); अतः आकाशीय बिजली कार की बाहरी धातु से टायर/जमीन की ओर निकल जाती है।',
    'Inside a hollow conductor (Faraday cage), the electric field is zero; lightning travels along the outer metal shell to the ground without harming occupants.',
    'HARD'
  ),
  q(
    'विद्युत एवं चुंबकत्व',
    'विद्युत उपकरण एवं प्रभाव',
    'विद्युत परिपथ में "लघुपथन" (Short-circuit) कब होता है?',
    'When does a "short circuit" occur in a domestic electric circuit?',
    ['जब रोधन (Insulation) क्षतिग्रस्त होने से लाइव तार और न्यूट्रल तार सीधे संपर्क में आ जाते हैं', 'When damaged insulation allows the live wire and neutral wire to touch directly'],
    [
      ['जब प्रतिरोध अनंत हो जाता है', 'When resistance becomes infinite'],
      ['जब स्विच ऑफ कर दिया जाता है', 'When the main switch is turned off'],
      ['जब वोल्टेज शून्य हो जाता है', 'When supply voltage becomes zero'],
    ],
    'लाइव और न्यूट्रल तारों के सीधे मिलने पर परिपथ का प्रतिरोध लगभग शून्य हो जाता है और अचानक अत्यंत भारी धारा बहने से आग लगने का खतरा हो जाता है।',
    'Direct contact between live and neutral wires drops circuit resistance nearly to zero, causing a massive surge of current and fire risk.',
    'EASY'
  ),

  // =========================================================================
  // 6. पदार्थ एवं अवस्थाएँ, परमाणु संरचना, समस्थानिक/समभारिक, रासायनिक अभिक्रियाएँ — 72 Qs
  // =========================================================================
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'पदार्थ की चौथी और पाँचवीं अवस्थाएँ क्रमशः कौन-सी मानी जाती हैं?',
    'Which are considered the fourth and fifth states of matter respectively?',
    ['प्लाज्मा (Plasma) और बोस-आइंस्टीन कंडनसेट (BEC)', 'Plasma and Bose-Einstein Condensate (BEC)'],
    [
      ['द्रव और गैस', 'Liquid and Gas'],
      ['कोलॉइड और जेल', 'Colloid and Gel'],
      ['अतिचालक और अतिद्रव', 'Superconductor and Superfluid'],
    ],
    'ठोस, द्रव और गैस के अलावा अत्यधिक उच्च ताप पर आयनित गैस "प्लाज्मा" (चौथी अवस्था) तथा परम शून्य के निकट अति-शीतलित बोसॉन कणों का "BEC" (पाँचवीं अवस्था) है।',
    'Beyond solid, liquid, and gas, ionized gas at high temperature is Plasma (4th), and ultra-cold boson gas near absolute zero is BEC (5th).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'सूर्य और तारों के भीतर पदार्थ मुख्यतः किस अवस्था में पाया जाता है?',
    'In which state of matter does matter primarily exist inside the Sun and stars?',
    ['प्लाज्मा अवस्था', 'Plasma state'],
    [
      ['ठोस अवस्था', 'Solid state'],
      ['द्रव अवस्था', 'Liquid state'],
      ['बोस-आइंस्टीन कंडनसेट', 'Bose-Einstein Condensate'],
    ],
    'तारों के अत्यधिक उच्च तापमान के कारण परमाणु इलेक्ट्रॉन खोकर आयनित गैसीय मिश्रण (प्लाज्मा) के रूप में रहते हैं। फ्लोरोसेंट ट्यूब और नियॉन साइन बल्ब में भी प्लाज्मा बनता है।',
    'Extreme temperatures in stars ionize atoms into a mixture of free electrons and ions—the plasma state.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    '"शुष्क बर्फ" (Dry Ice) रासायनिक रूप से क्या होती है?',
    'What is "Dry Ice" chemically?',
    ['ठोस कार्बन डाइऑक्साइड (Solid CO₂)', 'Solid Carbon Dioxide (Solid CO₂)'],
    [
      ['अत्यंत ठंडा ठोस जल (H₂O)', 'Extremely cold water ice'],
      ['ठोस नाइट्रोजन', 'Solid nitrogen'],
      ['ठोस अमोनिया', 'Solid ammonia'],
    ],
    'उच्च दाब पर CO₂ को ठंडा कर ठोस CO₂ (शुष्क बर्फ) बनाया जाता है। 1 atm दाब पर यह बिना पिघले सीधे गैस में ऊर्ध्वपातित (Sublimate) हो जाती है।',
    'Dry ice is solid CO₂; at atmospheric pressure it sublimes directly from solid to gas at -78.5°C without forming liquid.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'निम्नलिखित में से कौन-सा एक भौतिक परिवर्तन (Physical change) है, रासायनिक परिवर्तन नहीं?',
    'Which of the following is a physical change and NOT a chemical change?',
    ['जल में नमक या शक्कर का घुलना (या मोम का पिघलना)', 'Dissolving salt or sugar in water (or melting of wax)'],
    [
      ['लोहे में जंग लगना', 'Rusting of iron'],
      ['दूध से दही बनना', 'Curdling of milk'],
      ['कागज या मोमबत्ती की बत्ती का जलना', 'Burning of paper'],
    ],
    'भौतिक परिवर्तन में कोई नया रासायनिक पदार्थ नहीं बनता और यह प्रायः उत्क्रमणीय होता है; वाष्पीकरण द्वारा नमक पुनः प्राप्त किया जा सकता है।',
    'A physical change alters physical state or appearance without forming a new chemical substance and is usually reversible.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'मोमबत्ती का जलना किस प्रकार का परिवर्तन माना जाता है?',
    'Burning of a candle involves which type of change(s)?',
    ['भौतिक और रासायनिक दोनों परिवर्तन', 'Both physical and chemical changes'],
    [
      ['केवल भौतिक परिवर्तन', 'Only physical change'],
      ['केवल रासायनिक परिवर्तन', 'Only chemical change'],
      ['न भौतिक न रासायनिक परिवर्तन', 'Neither physical nor chemical'],
    ],
    'मोमबत्ती जलते समय मोम का पिघलना भौतिक परिवर्तन है, जबकि मोम की वाष्प व बत्ती का जलकर CO₂ व जलवाष्प बनाना रासायनिक परिवर्तन है।',
    'Melting of wax is a physical change, while combustion of wax vapours and the wick into CO₂ and water vapour is a chemical change.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'नमक और कपूर (या अमोनियम क्लोराइड) के मिश्रण को अलग करने के लिए किस पृथक्करण विधि का उपयोग किया जाता है?',
    'Which separation technique is used to separate a mixture of common salt and camphor (or ammonium chloride)?',
    ['ऊर्ध्वपातन (Sublimation)', 'Sublimation'],
    [
      ['आसवन (Distillation)', 'Distillation'],
      ['निस्पंदन (Filtration)', 'Filtration'],
      ['अपकेंद्रण (Centrifugation)', 'Centrifugation'],
    ],
    'कपूर या नौसादर गर्म करने पर बिना पिघले वाष्प में बदल जाते हैं और ठंडा होकर शुद्ध ठोस रूप में जमा हो जाते हैं, जबकि नमक शेष रह जाता है।',
    'Camphor sublimes on heating and solidifies on cooling, leaving the non-sublimable common salt behind.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'स्याही में उपस्थित विभिन्न रंगों (रंजकों) को पृथक करने तथा खिलाड़ियों के रक्त में प्रतिबंधित दवाओं की जाँच में किस विधि का उपयोग किया जाता है?',
    'Which technique is used to separate different dyes in ink or detect drugs in blood?',
    ['वर्णलेखन (Chromatography)', 'Chromatography'],
    [
      ['ऊर्ध्वपातन (Sublimation)', 'Sublimation'],
      ['प्रभाजी आसवन', 'Fractional distillation'],
      ['क्रिस्टलीकरण', 'Crystallization'],
    ],
    'क्रोमैटोग्राफी एक ही विलायक में घुलनशील विभिन्न घटकों की अधिशोषण व विलेयता दर में अंतर के आधार पर उन्हें अलग करती है।',
    'Chromatography separates solutes dissolved in the same solvent based on differences in their adsorption/partitioning rates.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'दो अमिश्रणीय द्रवों (जैसे तेल और जल) के मिश्रण को किस उपकरण की सहायता से अलग किया जाता है?',
    'Which apparatus is used to separate a mixture of two immiscible liquids like oil and water?',
    ['पृथक्कारी कीप (Separating funnel)', 'Separating funnel'],
    [
      ['प्रभाजी स्तंभ', 'Fractionating column'],
      ['अपकेंद्रित्र', 'Centrifuge'],
      ['बुन्सन बर्नर', 'Bunsen burner'],
    ],
    'अमिश्रणीय द्रव घनत्व के अनुसार अलग-अलग परतें बना लेते हैं; पृथक्कारी कीप की स्टॉप-कॉक खोलकर नीचे की भारी परत को अलग कर लिया जाता है।',
    'Immiscible liquids form distinct layers by density; opening the stopcock of a separating funnel drains the denser bottom layer cleanly.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'कच्चे पेट्रोलियम से पेट्रोल, डीजल, केरोसिन आदि घटकों को किस विधि द्वारा पृथक किया जाता है?',
    'By which process are petrol, diesel, and kerosene separated from crude petroleum?',
    ['प्रभाजी आसवन (Fractional distillation)', 'Fractional distillation'],
    [
      ['साधारण आसवन', 'Simple distillation'],
      ['ऊर्ध्वपातन', 'Sublimation'],
      ['अवसादन', 'Sedimentation'],
    ],
    'जिन मिश्रणीय द्रवों के क्वथनांकों में अंतर 25 K से कम होता है, उन्हें प्रभाजी स्तंभ की सहायता से प्रभाजी आसवन द्वारा अलग किया जाता है।',
    'Miscible liquids with close boiling points (difference < 25 K), such as petroleum fractions, are separated by fractional distillation.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'निम्नलिखित में से कौन-सा एक यौगिक (Compound) है, मिश्रण (Mixture) नहीं?',
    'Which of the following is a pure chemical compound and NOT a mixture?',
    ['जल (H₂O) / साधारण नमक (NaCl)', 'Water (H₂O) / Common salt (NaCl)'],
    [
      ['वायु (Air)', 'Air'],
      ['दूध (Milk)', 'Milk'],
      ['पीतल (Brass)', 'Brass'],
    ],
    'यौगिक में तत्व एक निश्चित द्रव्यमान अनुपात में रासायनिक बंध से जुड़े होते हैं (जैसे H₂O में H:O = 1:8), जबकि वायु, दूध और पीतल मिश्रण हैं।',
    'A compound has elements chemically combined in a fixed mass ratio (e.g., H₂O), whereas air, milk, and brass are mixtures.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'कोलॉइडी विलयन (Colloid) के प्रमुख उदाहरणों में दूध, धुंध और कोहरा किस श्रेणी में आते हैं?',
    'In colloidal chemistry, what type of colloids are milk and fog respectively?',
    ['दूध: पायस (Emulsion); कोहरा: एरोसॉल (Aerosol)', 'Milk: Emulsion; Fog: Aerosol'],
    [
      ['दूध: सॉल; कोहरा: जेल', 'Milk: Sol; Fog: Gel'],
      ['दूध: फोम; कोहरा: ठोस सॉल', 'Milk: Foam; Fog: Solid sol'],
      ['दोनों वास्तविक विलयन हैं', 'Both are true solutions'],
    ],
    'दूध द्रव-में-द्रव (पायस/Emulsion) कोलॉइड है, जबकि कोहरा गैस में द्रव बूँदों का परिक्षेपण (एरोसॉल/Aerosol) है।',
    'Milk is liquid dispersed in liquid (emulsion), whereas fog is liquid droplets dispersed in gas (aerosol).',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'डाल्टन के परमाणु सिद्धांत के अनुसार पदार्थ का सबसे छोटा अविभाज्य कण परमाणु माना गया था, परंतु आधुनिक विज्ञान के अनुसार परमाणु के तीन प्रमुख अवपरमाण्विक कण कौन-से हैं?',
    'Which three are the fundamental subatomic particles constituting an atom?',
    ['इलेक्ट्रॉन, प्रोटॉन और न्यूट्रॉन', 'Electron, Proton, and Neutron'],
    [
      ['फोटॉन, मेसॉन और ग्लूऑन', 'Photon, Meson, and Gluon'],
      ['अल्फा, बीटा और गामा कण', 'Alpha, Beta, and Gamma particles'],
      ['धनायन, ऋणायन और अणु', 'Cation, Anion, and Molecule'],
    ],
    'प्रोटॉन (+) और न्यूट्रॉन (उदासीन) परमाणु के नाभिक में रहते हैं, जबकि इलेक्ट्रॉन (-) नाभिक के चारों ओर कक्षों में घूमते हैं।',
    'Protons (+) and neutrons (neutral) reside in the central nucleus, while negatively charged electrons orbit outside.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'इलेक्ट्रॉन, प्रोटॉन और न्यूट्रॉन की खोज का श्रेय क्रमशः किन वैज्ञानिकों को दिया जाता है?',
    'Who are credited with discovering the electron, proton, and neutron respectively?',
    ['जे.जे. थॉमसन, रदरफोर्ड (एवं गोल्डस्टीन), जेम्स चैडविक', 'J.J. Thomson, Rutherford (and Goldstein), James Chadwick'],
    [
      ['जेम्स चैडविक, थॉमसन, रदरफोर्ड', 'Chadwick, Thomson, Rutherford'],
      ['नील्स बोर, डाल्टन, चैडविक', 'Niels Bohr, Dalton, Chadwick'],
      ['रदरफोर्ड, मैक्सवेल, थॉमसन', 'Rutherford, Maxwell, Thomson'],
    ],
    'इलेक्ट्रॉन की खोज जे.जे. थॉमसन (1897), कैनाल किरण/प्रोटॉन से संबंधित खोज गोल्डस्टीन व नाभिक/प्रोटॉन पहचान रदरफोर्ड, तथा न्यूट्रॉन की खोज जेम्स चैडविक (1932) ने की।',
    'Electron: J.J. Thomson (1897); Proton/anode rays: Goldstein & Rutherford; Neutron: James Chadwick (1932).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'अर्नेस्ट रदरफोर्ड के स्वर्ण-पन्नी (Gold foil) अल्फा-कण प्रकीर्णन प्रयोग से परमाणु के किस भाग की खोज हुई?',
    'Ernest Rutherford’s alpha-particle scattering experiment with thin gold foil led to the discovery of:',
    ['परमाणु का धनावेशित और सघन नाभिक (Nucleus)', 'The positively charged, dense atomic nucleus'],
    [
      ['इलेक्ट्रॉन के ऊर्जा स्तर', 'Energy shells of electrons'],
      ['न्यूट्रॉन कण', 'Neutron particles'],
      ['समस्थानिकों का अस्तित्व', 'Existence of isotopes'],
    ],
    'अधिकांश अल्फा कण सीधे निकल गए और बहुत कम कण 180° पर वापस लौटे, जिससे सिद्ध हुआ कि परमाणु का अधिकांश भाग खाली है और समस्त धनावेश व द्रव्यमान केंद्र (नाभिक) में केंद्रित है।',
    'Most alpha particles passed undeflected while very few bounced back, proving atoms are mostly empty space with a tiny, dense, positive nucleus.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'किसी उदासीन परमाणु की परमाणु संख्या (Atomic number, Z) किसके बराबर होती है?',
    'What does the atomic number (Z) of a neutral atom equal?',
    ['नाभिक में उपस्थित प्रोटॉनों की संख्या (जो इलेक्ट्रॉनों की संख्या के बराबर होती है)', 'Number of protons in the nucleus (equal to number of electrons in a neutral atom)'],
    [
      ['नाभिक में न्यूट्रॉनों की संख्या', 'Number of neutrons in the nucleus'],
      ['प्रोटॉन और न्यूट्रॉन का योग', 'Sum of protons and neutrons'],
      ['केवल संयोजी इलेक्ट्रॉन', 'Only valence electrons'],
    ],
    'किसी तत्व की पहचान उसके प्रोटॉनों की संख्या अर्थात परमाणु क्रमांक Z से होती है। आयन बनने पर इलेक्ट्रॉन बदलते हैं, पर Z नहीं बदलता।',
    'Atomic number Z is uniquely defined by the number of protons in the nucleus (and equals electrons in a neutral atom).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'एक तत्व के परमाणु की द्रव्यमान संख्या (Mass number, A) 23 है और परमाणु क्रमांक (Z) 11 है। इसमें कितने न्यूट्रॉन, प्रोटॉन और इलेक्ट्रॉन होंगे?',
    'An atom of an element has mass number (A) = 23 and atomic number (Z) = 11. How many neutrons, protons, and electrons does it contain?',
    ['12 न्यूट्रॉन, 11 प्रोटॉन, 11 इलेक्ट्रॉन', '12 neutrons, 11 protons, 11 electrons'],
    [
      ['11 न्यूट्रॉन, 12 प्रोटॉन, 11 इलेक्ट्रॉन', '11 neutrons, 12 protons, 11 electrons'],
      ['23 न्यूट्रॉन, 11 प्रोटॉन, 11 इलेक्ट्रॉन', '23 neutrons, 11 protons, 11 electrons'],
      ['12 न्यूट्रॉन, 11 प्रोटॉन, 12 इलेक्ट्रॉन', '12 neutrons, 11 protons, 12 electrons'],
    ],
    'प्रोटॉन = Z = 11, उदासीन परमाणु में इलेक्ट्रॉन = 11, तथा न्यूट्रॉन = A - Z = 23 - 11 = 12 (सोडियम ₁₁Na²³)।',
    'Protons = Z = 11; Electrons = 11; Neutrons = A - Z = 23 - 11 = 12 (Sodium atom).',
    'EASY',
    { formulaHi: 'न्यूट्रॉन (n) = A - Z', formulaEn: 'n = A - Z' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'नील्स बोर के परमाणु मॉडल के अनुसार किसी कोश (Shell / ऊर्जा स्तर, n = 1, 2, 3...) में अधिकतम कितने इलेक्ट्रॉन समा सकते हैं?',
    'According to Bohr–Bury scheme, what is the maximum number of electrons that can be accommodated in a shell with principal quantum number n?',
    ['2n²', '2n²'],
    [
      ['n²', 'n²'],
      ['2n', '2n'],
      ['4n - 2', '4n - 2'],
    ],
    'K (n=1) में 2, L (n=2) में 8, M (n=3) में 18, और N (n=4) कोश में अधिकतम 32 इलेक्ट्रॉन रह सकते हैं; परंतु सबसे बाहरी कोश में अष्टक नियम से अधिकतम 8 इलेक्ट्रॉन रह सकते हैं।',
    'Maximum capacity is 2n² (K=2, L=8, M=18, N=32), though the outermost valence shell cannot hold more than 8 electrons.',
    'EASY',
    { formulaHi: 'अधिकतम इलेक्ट्रॉन = 2n²', formulaEn: 'Max electrons = 2n²' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'मैग्नीशियम (परमाणु क्रमांक 12) का इलेक्ट्रॉनिक विन्यास और संयोजकता (Valency) क्रमशः क्या होगी?',
    'What are the electronic configuration and valency of Magnesium (atomic number 12) respectively?',
    ['(2, 8, 2) और संयोजकता 2', '(2, 8, 2) and valency 2'],
    [
      ['(2, 8, 2) और संयोजकता 6', '(2, 8, 2) and valency 6'],
      ['(2, 6, 4) और संयोजकता 4', '(2, 6, 4) and valency 4'],
      ['(2, 8, 1, 1) और संयोजकता 1', '(2, 8, 1, 1) and valency 1'],
    ],
    'Z = 12 होने से इलेक्ट्रॉन K=2, L=8, M=2 में बँटते हैं। बाह्यतम कोश में 2 इलेक्ट्रॉन त्यागकर अष्टक पूरा करने के कारण इसकी संयोजकता +2 है।',
    'For Z = 12, distribution is 2, 8, 2. Losing the 2 outer electrons achieves a stable octet, giving a valency of 2.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'समस्थानिक (Isotopes) किसे कहते हैं?',
    'What are Isotopes?',
    ['एक ही तत्व के वे परमाणु जिनकी परमाणु संख्या समान किंतु द्रव्यमान संख्या भिन्न हो', 'Atoms of the same element having the same atomic number but different mass numbers'],
    [
      ['विभिन्न तत्वों के परमाणु जिनकी द्रव्यमान संख्या समान हो', 'Atoms of different elements with same mass number'],
      ['वे परमाणु जिनमें न्यूट्रॉनों की संख्या समान हो', 'Atoms having equal number of neutrons'],
      ['वे अणु जिनके रासायनिक सूत्र समान हों', 'Molecules with same chemical formula'],
    ],
    'समस्थानिकों में प्रोटॉनों की संख्या (Z) समान होती है, इसलिए इनके रासायनिक गुण समान होते हैं, किंतु न्यूट्रॉनों की संख्या भिन्न होने से द्रव्यमान संख्या (A) अलग होती है।',
    'Isotopes have identical atomic number Z (and identical chemical properties) but differ in neutron count and mass number A.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'हाइड्रोजन के तीन प्राकृतिक समस्थानिक कौन-कौन से हैं?',
    'Which are the three natural isotopes of Hydrogen?',
    ['प्रोटियम (₁H¹), ड्यूटीरियम (₁H²) और ट्राइटियम (₁H³)', 'Protium (¹H), Deuterium (²H), and Tritium (³H)'],
    [
      ['हाइड्रोजन, हीलियम और लिथियम', 'Hydrogen, Helium, and Lithium'],
      ['प्रोटॉन, न्यूट्रॉन और पॉजिट्रॉन', 'Proton, Neutron, and Positron'],
      ['C-12, C-13 और C-14', 'C-12, C-13, and C-14'],
    ],
    'प्रोटियम में 0 न्यूट्रॉन, ड्यूटीरियम (D) में 1 न्यूट्रॉन, और रेडियोधर्मी ट्राइटियम (T) में 2 न्यूट्रॉन होते हैं।',
    'Protium has 0 neutrons, Deuterium (heavy hydrogen) has 1 neutron, and radioactive Tritium has 2 neutrons.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'प्राचीन जीवाश्मों और पुरातात्विक अवशेषों की आयु ज्ञात करने (रेडियोकार्बन डेटिंग) में किस समस्थानिक का उपयोग किया जाता है?',
    'Which isotope is used in radiocarbon dating to determine the age of ancient fossils and organic artefacts?',
    ['कार्बन-14 (C-14)', 'Carbon-14 (C-14)'],
    [
      ['कार्बन-12 (C-12)', 'Carbon-12 (C-12)'],
      ['यूरेनियम-235', 'Uranium-235'],
      ['आयोडीन-131', 'Iodine-131'],
    ],
    'कार्बन-14 रेडियोधर्मी समस्थानिक है जिसकी अर्ध-आयु लगभग 5730 वर्ष होती है; मृत जीवों में इसकी शेष मात्रा से उनकी आयु निकाली जाती है।',
    'Radioactive Carbon-14 (half-life ~5730 years) decays steadily after an organism dies, allowing age estimation of organic remains.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'कैंसर के उपचार में तथा घेंघा (Goitre / थायरॉइड) रोग के इलाज में क्रमशः किन रेडियोधर्मी समस्थानिकों का उपयोग किया जाता है?',
    'Which radioisotopes are used in the treatment of cancer and goitre (thyroid disorder) respectively?',
    ['कोबाल्ट-60 और आयोडीन-131', 'Cobalt-60 and Iodine-131'],
    [
      ['कार्बन-14 और सोडियम-24', 'Carbon-14 and Sodium-24'],
      ['आयोडीन-131 और कोबाल्ट-60', 'Iodine-131 and Cobalt-60'],
      ['यूरेनियम-235 और फॉस्फोरस-32', 'Uranium-235 and Phosphorus-32'],
    ],
    'कोबाल्ट-60 से निकलने वाली गामा किरणें कैंसर कोशिकाओं को नष्ट करती हैं, जबकि आयोडीन-131 थायरॉइड ग्रंथि के उपचार में प्रयुक्त होता है।',
    'Cobalt-60 emits gamma rays for cancer radiotherapy, while Iodine-131 selectively targets thyroid tissue to treat goitre/thyroid cancer.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'आर्गन (₁₈Ar⁴⁰) और कैल्शियम (₂₀Ca⁴⁰) किसके उदाहरण हैं?',
    'Argon (₁₈Ar⁴⁰) and Calcium (₂₀Ca⁴⁰) are examples of:',
    ['समभारिक (Isobars)', 'Isobars'],
    [
      ['समस्थानिक (Isotopes)', 'Isotopes'],
      ['समन्यूट्रॉनिक (Isotones)', 'Isotones'],
      ['समावयवी (Isomers)', 'Isomers'],
    ],
    'विभिन्न तत्वों के ऐसे परमाणु जिनकी परमाणु संख्या (Z) भिन्न, किंतु द्रव्यमान संख्या (A = 40) समान हो, समभारिक (Isobars) कहलाते हैं।',
    'Atoms of different elements having different atomic numbers (18 and 20) but the same mass number (40) are called isobars.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'ऐसे नाभिक जिनमें न्यूट्रॉनों की संख्या (A - Z) समान होती है, जैसे ₆C¹⁴ और ₈O¹⁶ (प्रत्येक में 8 न्यूट्रॉन), क्या कहलाते हैं?',
    'Nuclides of different elements having the same number of neutrons (e.g., ₆C¹⁴ and ₈O¹⁶, both with 8 neutrons) are called:',
    ['समन्यूट्रॉनिक (Isotones)', 'Isotones'],
    [
      ['समस्थानिक (Isotopes)', 'Isotopes'],
      ['समभारिक (Isobars)', 'Isobars'],
      ['अपररूप (Allotropes)', 'Allotropes'],
    ],
    'समान न्यूट्रॉन संख्या वाले विभिन्न तत्वों के परमाणुओं को समन्यूट्रॉनिक या आइसोटोन कहते हैं।',
    'Species with different Z and A but the exact same neutron count (N = A - Z) are called isotones.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    '1 मोल किसी भी पदार्थ (जैसे 12 ग्राम कार्बन-12 या 18 ग्राम जल) में कणों की संख्या (आवोगाद्रो संख्या N_A) कितनी होती है?',
    'How many particles are present in 1 mole of any substance (Avogadro’s number N_A)?',
    ['6.022 × 10²³', '6.022 × 10²³'],
    [
      ['6.022 × 10²²', '6.022 × 10²²'],
      ['6.022 × 10⁻²³', '6.022 × 10⁻²³'],
      ['1.602 × 10⁻¹⁹', '1.602 × 10⁻¹⁹'],
    ],
    'किसी पदार्थ के 1 मोल में ठीक 6.022 × 10²³ परमाणु, अणु या आयन होते हैं, जिसे आवोगाद्रो स्थिरांक कहते हैं।',
    'Avogadro’s constant N_A = 6.022 × 10²³ entities per mole.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    '36 ग्राम शुद्ध जल (H₂O) में मोलों की संख्या कितनी होगी? (H = 1, O = 16)',
    'How many moles are present in 36 g of pure water (H₂O)? (Atomic masses: H = 1, O = 16)',
    ['2 मोल', '2 moles'],
    [
      ['1 मोल', '1 mole'],
      ['0.5 मोल', '0.5 mole'],
      ['3 मोल', '3 moles'],
    ],
    'जल का मोलर द्रव्यमान = (2×1) + 16 = 18 g/mol। मोलों की संख्या = दिया गया द्रव्यमान / मोलर द्रव्यमान = 36 / 18 = 2 मोल।',
    'Molar mass of H₂O = 18 g/mol. Number of moles = 36 / 18 = 2 moles.',
    'MEDIUM',
    { formulaHi: 'मोल (n) = द्रव्यमान (m) / मोलर द्रव्यमान (M)', formulaEn: 'n = m / M' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'मानक ताप एवं दाब (STP) पर 1 मोल किसी भी आदर्श गैस का आयतन लगभग कितना होता है?',
    'What is the approximate molar volume of any ideal gas at STP?',
    ['22.4 लीटर (या 22.7 L आधुनिक मानक पर)', '22.4 litres'],
    [
      ['11.2 लीटर', '11.2 litres'],
      ['44.8 लीटर', '44.8 litres'],
      ['1 लीटर', '1 litre'],
    ],
    '0°C (273.15 K) और 1 atm दाब पर 1 मोल गैस का आयतन 22.4 लीटर होता है।',
    'At 0°C and 1 atm pressure, 1 mole of any ideal gas occupies 22.4 litres.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'नाभिकीय विखंडन (Nuclear fission) और नाभिकीय संलयन (Nuclear fusion) में क्या अंतर है?',
    'What is the difference between nuclear fission and nuclear fusion?',
    ['विखंडन में भारी नाभिक हल्के नाभिकों में टूटता है, जबकि संलयन में हल्के नाभिक जुड़कर भारी नाभिक बनाते हैं', 'Fission splits a heavy nucleus into lighter nuclei, whereas fusion combines light nuclei into a heavier nucleus'],
    [
      ['विखंडन में हल्के नाभिक जुड़ते हैं', 'Fission combines light nuclei'],
      ['संलयन केवल परमाणु बम में होता है', 'Fusion occurs only in fission bombs'],
      ['दोनों में कोई ऊर्जा नहीं निकलती', 'Neither releases energy'],
    ],
    'परमाणु रिएक्टर और परमाणु बम विखंडन (जैसे U-235) पर आधारित हैं, जबकि सूर्य की ऊर्जा और हाइड्रोजन बम नाभिकीय संलयन पर आधारित हैं।',
    'Nuclear reactors and fission bombs split heavy nuclei (like U-235), while the Sun’s energy and H-bombs fuse light hydrogen nuclei into helium.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'आधुनिक आवर्त सारणी (Modern Periodic Table) किस वैज्ञानिक द्वारा दी गई और यह तत्वों के किस गुण पर आधारित है?',
    'Who proposed the Modern Periodic Law, and on which fundamental atomic property is the modern periodic table based?',
    ['हेनरी मोज़ले; परमाणु क्रमांक (Atomic number)', 'Henry Moseley; Atomic number'],
    [
      ['मेंडलीफ; परमाणु द्रव्यमान', 'Mendeleev; Atomic mass'],
      ['न्यूलैंड्स; अष्टक नियम', 'Newlands; Law of octaves'],
      ['डोबेराइनर; त्रिक नियम', 'Dobereiner; Triads'],
    ],
    '1913 में हेनरी मोज़ले ने सिद्ध किया कि तत्वों के गुण उनके परमाणु क्रमांक (Z) के आवर्ती फलन होते हैं, न कि परमाणु भार के।',
    'Henry Moseley (1913) established that chemical and physical properties of elements are periodic functions of their atomic numbers.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'आधुनिक आवर्त सारणी के समूह-18 (शून्य वर्ग) में स्थित तत्व—हीलियम, नियॉन, आर्गन आदि—रासायनिक रूप से अक्रिय (Inert) क्यों होते हैं?',
    'Why are Group 18 (Noble gas) elements like Helium, Neon, and Argon chemically inert?',
    ['इनका बाह्यतम इलेक्ट्रॉन कोश (द्विक/अष्टक) पूर्णतः भरा होता है', 'Their outermost valence electron shells (duplet/octet) are completely filled'],
    [
      ['इनमें कोई प्रोटॉन नहीं होता', 'They have no protons'],
      ['ये सदैव ठोस अवस्था में होते हैं', 'They are always solids'],
      ['इनका परमाणु आकार सबसे बड़ा होता है', 'They have largest atomic size'],
    ],
    'हीलियम में 2 तथा शेष अक्रिय गैसों के संयोजी कोश में 8 इलेक्ट्रॉन पूरे होने से ये न इलेक्ट्रॉन लेती हैं न देती हैं, अतः इनकी संयोजकता शून्य होती है।',
    'Noble gases have completely filled valence shells (2 for He, 8 for others), giving them zero valency and high chemical stability.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'रासायनिक समीकरणों को संतुलित करना किस वैज्ञानिक नियम का पालन करने के लिए आवश्यक होता है?',
    'Balancing a chemical equation is necessary to satisfy which fundamental law?',
    ['द्रव्यमान संरक्षण का नियम (Law of Conservation of Mass)', 'Law of Conservation of Mass'],
    [
      ['गैसीय आयतन का नियम', 'Law of gaseous volumes'],
      ['गुणित अनुपात का नियम', 'Law of multiple proportions'],
      ['अवगाद्रो का नियम', 'Avogadro’s law'],
    ],
    'एंटोनी लावोज़िए के द्रव्यमान संरक्षण नियम के अनुसार अभिक्रिया में कुल द्रव्यमान और प्रत्येक तत्व के परमाणुओं की संख्या उत्पाद व अभिकारक में बराबर रहती है।',
    'According to Lavoisier’s Law of Conservation of Mass, total mass and number of atoms of each element remain equal before and after a reaction.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'बिना बुझे चूने (CaO) में जल मिलाने पर बुझा हुआ चूना Ca(OH)₂ बनता है और बर्तन बहुत गर्म हो जाता है। यह किस प्रकार की अभिक्रिया है?',
    'Adding water to quicklime (CaO) forms slaked lime Ca(OH)₂ and releases large amounts of heat. What type of reaction is this?',
    ['संयोजन एवं ऊष्माक्षेपी अभिक्रिया', 'Combination and Exothermic reaction'],
    [
      ['वियोजन एवं ऊष्माशोषी अभिक्रिया', 'Decomposition and Endothermic reaction'],
      ['द्विविस्थापन अभिक्रिया', 'Double displacement reaction'],
      ['अवक्षेपण अभिक्रिया', 'Precipitation reaction'],
    ],
    'CaO + H₂O → Ca(OH)₂ + ऊष्मा। दो पदार्थ मिलकर एकल उत्पाद बनाते हैं (संयोजन) और ऊष्मा निकलती है (ऊष्माक्षेपी)।',
    'Two reactants combine to form a single product (combination) while releasing heat (exothermic).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'श्याम-श्वेत (Black & White) फोटोग्राफी में प्रयुक्त होने वाली प्रकाश-रासायनिक वियोजन अभिक्रिया में कौन-सा यौगिक उपयोग होता है?',
    'Which silver compound undergoes photolytic decomposition in traditional black-and-white photography?',
    ['सिल्वर ब्रोमाइड (AgBr) या सिल्वर क्लोराइड (AgCl)', 'Silver bromide (AgBr) or Silver chloride (AgCl)'],
    [
      ['सिल्वर नाइट्रेट केवल', 'Only silver nitrate'],
      ['फेरस सल्फेट', 'Ferrous sulphate'],
      ['कैल्शियम कार्बोनेट', 'Calcium carbonate'],
    ],
    'सूर्य के प्रकाश में 2AgBr → 2Ag + Br₂ वियोजन अभिक्रिया होती है; इसी कारण सिल्वर हैलाइड को रंगीन बोतलों में रखा जाता है।',
    'Sunlight decomposes AgBr (2AgBr → 2Ag + Br₂) and AgCl; hence these compounds are stored in dark-coloured bottles.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'जब लोहे की कील को कॉपर सल्फेट (CuSO₄) के नीले विलयन में डाला जाता है, तो विलयन का रंग हरा (FeSO₄) क्यों हो जाता है?',
    'When an iron nail is dipped into blue copper sulphate (CuSO₄) solution, why does the solution turn pale green?',
    ['लोहा ताँबे से अधिक अभिक्रियाशील होने के कारण उसे विस्थापित कर देता है (विस्थापन अभिक्रिया)', 'Iron is more reactive than copper and displaces it from CuSO₄ (displacement reaction)'],
    [
      ['ताँबा लोहे को विस्थापित कर देता है', 'Copper displaces iron'],
      ['लोहा ऑक्सीजन से संयोजन करता है', 'Iron combines with oxygen'],
      ['ताँबा सल्फेट का वियोजन हो जाता है', 'Thermal decomposition occurs'],
    ],
    'Fe + CuSO₄ → FeSO₄ + Cu। सक्रियता श्रेणी में लोहा कॉपर से ऊपर है, अतः यह कॉपर को हटाकर हरा फेरस सल्फेट बनाता है और कील पर भूरा ताँबा जम जाता है।',
    'Iron is higher than copper in the reactivity series, displacing Cu to form green FeSO₄ and depositing brownish copper on the nail.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'सोडियम सल्फेट (Na₂SO₄) और बेरियम क्लोराइड (BaCl₂) के जलीय विलयनों को मिलाने पर बेरियम सल्फेट (BaSO₄) का सफेद अवक्षेप बनता है। यह किस प्रकार की अभिक्रिया है?',
    'Mixing aqueous Na₂SO₄ and BaCl₂ produces a white precipitate of BaSO₄. Which type of reaction is this?',
    ['द्विविस्थापन एवं अवक्षेपण अभिक्रिया', 'Double displacement and Precipitation reaction'],
    [
      ['संयोजन अभिक्रिया', 'Combination reaction'],
      ['उष्मीय वियोजन अभिक्रिया', 'Thermal decomposition'],
      ['अपचयन अभिक्रिया केवल', 'Reduction only'],
    ],
    'Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl। यहाँ दोनों यौगिकों के आयनों (SO₄²⁻ व Cl⁻) का परस्पर आदान-प्रदान हुआ है।',
    'Ions exchange between the two reactants to form an insoluble white precipitate (BaSO₄), classifying it as double displacement and precipitation.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'ऑक्सीकरण (उपचयन / Oxidation) और अपचयन (Reduction) को इलेक्ट्रॉन सिद्धांत के आधार पर कैसे परिभाषित किया जाता है?',
    'In terms of electron transfer, how are oxidation and reduction defined?',
    ['ऑक्सीकरण: इलेक्ट्रॉन का त्याग; अपचयन: इलेक्ट्रॉन का ग्रहण', 'Oxidation: loss of electrons; Reduction: gain of electrons'],
    [
      ['ऑक्सीकरण: इलेक्ट्रॉन का ग्रहण; अपचयन: इलेक्ट्रॉन का त्याग', 'Oxidation: gain of electrons; Reduction: loss of electrons'],
      ['दोनों में प्रोटॉन का त्याग होता है', 'Both involve loss of protons'],
      ['दोनों में न्यूट्रॉन का आदान-प्रदान होता है', 'Both exchange neutrons'],
    ],
    'OIL RIG स्मरण सूत्र: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)। ऑक्सीजन का जुड़ना या हाइड्रोजन का हटना भी ऑक्सीकरण है।',
    'Remember OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons (also gain of oxygen or loss of hydrogen is oxidation).',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'अभिक्रिया CuO + H₂ → Cu + H₂O में किस पदार्थ का उपचयन (ऑक्सीकरण) और किसका अपचयन हो रहा है?',
    'In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidized and which is reduced?',
    ['H₂ का उपचयन (ऑक्सीकरण) और CuO का अपचयन', 'H₂ is oxidized and CuO is reduced'],
    [
      ['CuO का उपचयन और H₂ का अपचयन', 'CuO is oxidized and H₂ is reduced'],
      ['दोनों का उपचयन', 'Both are oxidized'],
      ['दोनों का अपचयन', 'Both are reduced'],
    ],
    'CuO से ऑक्सीजन हटकर Cu बना है (अपचयन), जबकि H₂ में ऑक्सीजन जुड़कर H₂O बना है (उपचयन)। एक साथ होने से यह रेडॉक्स (Redox) अभिक्रिया है।',
    'CuO loses oxygen to form Cu (reduced), while H₂ gains oxygen to form H₂O (oxidized)—a classic redox reaction.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'चिप्स या तले हुए खाद्य पदार्थों की थैलियों में विकृतगंधिता (Rancidity) रोकने के लिए कौन-सी गैस भरी जाती है?',
    'Which gas is flushed into bags of potato chips to prevent rancidity (oxidation of fats/oils)?',
    ['नाइट्रोजन गैस (N₂)', 'Nitrogen gas (N₂)'],
    [
      ['ऑक्सीजन गैस (O₂)', 'Oxygen gas (O₂)'],
      ['हाइड्रोजन गैस (H₂)', 'Hydrogen gas (H₂)'],
      ['क्लोरीन गैस (Cl₂)', 'Chlorine gas (Cl₂)'],
    ],
    'नाइट्रोजन कमरे के ताप पर कम अभिक्रियाशील (प्रतिऑक्सीकारक परिवेश देने वाली) गैस है, जो वसा/तेल के ऑक्सीकरण को रोककर चिप्स को कुरकुरा व ताजा रखती है।',
    'Unreactive nitrogen displaces oxygen inside chip packets, preventing oxidation of oils/fats that causes rancidity.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'लोहे पर जंग लगने (Rusting) के लिए कौन-से दो कारक अनिवार्य रूप से आवश्यक हैं, और जंग का रासायनिक सूत्र क्या है?',
    'Which two conditions are essential for rusting of iron, and what is the chemical formula of rust?',
    ['ऑक्सीजन (वायु) और नमी (जल); जलयोजित फेरिक ऑक्साइड (Fe₂O₃·xH₂O)', 'Oxygen (air) and moisture (water); hydrated ferric oxide (Fe₂O₃·xH₂O)'],
    [
      ['केवल नाइट्रोजन और शुष्क हवा; FeO', 'Nitrogen and dry air; FeO'],
      ['केवल कार्बन डाइऑक्साइड; FeCO₃', 'Only CO₂; FeCO₃'],
      ['हाइड्रोजन और तेल; Fe(OH)₂', 'Hydrogen and oil; Fe(OH)₂'],
    ],
    'जंग लगना एक मंद ऑक्सीकरण अभिक्रिया है जिसके लिए वायु (O₂) और जलवाष्प दोनों की उपस्थिति अनिवार्य है। खारा जल जंग लगने की दर को तेज कर देता है।',
    'Both oxygen and water are required for rusting, forming reddish-brown hydrated iron(III) oxide (Fe₂O₃·xH₂O).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'लोहे की वस्तुओं को जंग से बचाने के लिए उन पर जस्ते (Zinc) की पतली परत चढ़ाने की प्रक्रिया क्या कहलाती है?',
    'The process of coating iron objects with a protective thin layer of zinc to prevent rusting is called:',
    ['यशदलेपन (Galvanization)', 'Galvanization'],
    [
      ['वल्कनीकरण (Vulcanization)', 'Vulcanization'],
      ['भर्जन (Roasting)', 'Roasting'],
      ['प्रगलन (Smelting)', 'Smelting'],
    ],
    'जिंक लोहे से अधिक अभिक्रियाशील है; परत में खरोंच लगने पर भी जिंक स्वयं ऑक्सीकृत होकर लोहे की रक्षा (Sacrificial protection) करता है।',
    'Galvanization coats iron with zinc, which also provides sacrificial cathodic protection even if the coating gets scratched.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'चाँदी की वस्तुएँ कुछ समय बाद वायु में काली क्यों पड़ जाती हैं और ताँबे के बर्तनों पर हरी परत क्यों जम जाती है?',
    'Why do silver articles turn black and copper vessels develop a green coating on prolonged exposure to air?',
    ['चाँदी पर सिल्वर सल्फाइड (Ag₂S) तथा ताँबे पर क्षारीय कॉपर कार्बोनेट [CuCO₃·Cu(OH)₂] बनने से', 'Formation of black silver sulphide (Ag₂S) on silver and green basic copper carbonate on copper'],
    [
      ['दोनों पर लोहे का ऑक्साइड जमने से', 'Iron oxide forms on both'],
      ['चाँदी के वाष्पीकरण से', 'Evaporation of silver'],
      ['ताँबे में क्लोरीन मिलने से', 'Chlorine reacting with copper'],
    ],
    'चाँदी वायु की H₂S गैस से क्रिया कर काला Ag₂S बनाती है, तथा ताँबा नम वायु की CO₂, O₂ व जल से क्रिया कर हरा क्षारीय कॉपर कार्बोनेट बनाता है।',
    'Silver reacts with atmospheric H₂S to form black Ag₂S; copper reacts with moist CO₂ and O₂ to form green basic copper carbonate.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'उत्प्रेरक (Catalyst) किसी रासायनिक अभिक्रिया को किस प्रकार प्रभावित करता है?',
    'How does a positive catalyst affect a chemical reaction?',
    ['सक्रियण ऊर्जा को कम करके अभिक्रिया की दर बढ़ाता है और स्वयं अपरिवर्तित रहता है', 'It lowers activation energy to speed up the reaction while remaining chemically unchanged'],
    [
      ['अभिक्रिया में स्वयं पूरी तरह खप जाता है', 'It gets completely consumed in the reaction'],
      ['उत्पाद की अंतिम मात्रा बदल देता है', 'It alters the final equilibrium yield'],
      ['अभिक्रिया को सदैव रोक देता है', 'It always halts the reaction'],
    ],
    'उत्प्रेरक वैकल्पिक कम सक्रियण ऊर्जा वाला मार्ग प्रदान कर अभिक्रिया का वेग बदलता है, परंतु अभिक्रिया के अंत में रासायनिक रूप से ज्यों का त्यों बचा रहता है।',
    'A catalyst provides an alternative pathway with lower activation energy, accelerating rate without being consumed.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'मानव शरीर में ग्लूकोज का ऑक्सीजन से ऑक्सीकरण (श्वसन) तथा वनस्पतियों का सड़कर खाद (कंपोस्ट) बनना किस प्रकार की अभिक्रियाएँ हैं?',
    'Cellular respiration (oxidation of glucose) and decomposition of vegetable matter into compost are examples of:',
    ['ऊष्माक्षेपी अभिक्रियाएँ (Exothermic reactions)', 'Exothermic reactions'],
    [
      ['ऊष्माशोषी अभिक्रियाएँ (Endothermic reactions)', 'Endothermic reactions'],
      ['प्रकाश-वियोजन अभिक्रियाएँ', 'Photolytic reactions'],
      ['अवक्षेपण अभिक्रियाएँ', 'Precipitation reactions'],
    ],
    'श्वसन में C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ऊर्जा (ATP/ऊष्मा) मुक्त होती है; इसी तरह अपघटन से कंपोस्ट बनने में भी ऊष्मा निकलती है।',
    'Both processes release thermal/chemical energy into the surroundings and are therefore exothermic.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'अमोनिया गैस के निर्माण की हैबर विधि (N₂ + 3H₂ ⇌ 2NH₃) में किस उत्प्रेरक का उपयोग किया जाता है?',
    'Which catalyst is used in the Haber process for manufacturing ammonia (N₂ + 3H₂ ⇌ 2NH₃)?',
    ['लोहा (सूक्ष्म विभाजित आयरन, मोलिब्डेनम वर्धक सहित)', 'Finely divided Iron (with Molybdenum promoter)'],
    [
      ['प्लैटिनम', 'Platinum'],
      ['निकल', 'Nickel'],
      ['वैनेडियम पेंटॉक्साइड', 'Vanadium pentoxide'],
    ],
    'हैबर प्रक्रम में Fe उत्प्रेरक और Mo वर्धक प्रयुक्त होता है; वनस्पति तेलों के हाइड्रोजनीकरण में निकल (Ni) तथा सल्फ्यूरिक अम्ल की संपर्क विधि में V₂O₅ प्रयुक्त होता है।',
    'Haber process uses finely divided Iron (promoted by Mo), hydrogenation uses Nickel, and the Contact process for H₂SO₄ uses V₂O₅.',
    'HARD'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'गैसों के विसरण (Diffusion) की दर ठोसों और द्रवों की तुलना में सबसे अधिक क्यों होती है?',
    'Why is the rate of diffusion highest in gases compared to liquids and solids?',
    ['गैस के कणों के बीच अत्यधिक रिक्त स्थान और कणों की उच्च गतिज ऊर्जा के कारण', 'Due to large intermolecular spaces and very high kinetic energy/speed of gas molecules'],
    [
      ['गैस के अणुओं का द्रव्यमान सर्वाधिक होने से', 'Because gas molecules are heaviest'],
      ['गैसों में आकर्षण बल सर्वाधिक होने से', 'Because intermolecular attraction is strongest in gases'],
      ['गैसों का आकार निश्चित होने से', 'Because gases have fixed shape'],
    ],
    'गैस के अणुओं में अंतराआण्विक बल नगण्य और गति बहुत तेज होती है, जिससे अगरबत्ती या गर्म खाने की खुशबू कमरे में तुरंत फैल जाती है।',
    'Weak intermolecular forces and fast random molecular motion allow gas particles to intermix rapidly.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'कक्षकों (Orbitals) में इलेक्ट्रॉनों के भरने का बढ़ता ऊर्जा क्रम किस नियम से तय होता है?',
    'Which principle states that electrons fill atomic orbitals in order of increasing energy?',
    ['ऑफबाऊ सिद्धांत (Aufbau principle)', 'Aufbau principle'],
    [
      ['डाल्टन का नियम', 'Dalton’s law'],
      ['ग्राह्म का विसरण नियम', 'Graham’s law'],
      ['हेनरी का नियम', 'Henry’s law'],
    ],
    'जर्मन शब्द "Aufbau" का अर्थ निर्माण करना है; इसके अनुसार इलेक्ट्रॉन पहले निम्न ऊर्जा स्तर (1s, 2s, 2p, 3s, 3p, 4s...) में भरते हैं।',
    'The Aufbau principle ("building up") dictates filling orbitals from lowest energy upward (1s → 2s → 2p → 3s → 3p → 4s...).',
    'HARD'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'परमाणु के भीतर दो इलेक्ट्रॉनों की चारों क्वांटम संख्याएँ समान नहीं हो सकतीं—यह किसका नियम है?',
    'No two electrons in the same atom can have identical values for all four quantum numbers—this is:',
    ['पाउली का अपवर्जन सिद्धांत (Pauli Exclusion Principle)', 'Pauli Exclusion Principle'],
    [
      ['हुंड का नियम', 'Hund’s rule'],
      ['हाइजेनबर्ग का अनिश्चितता सिद्धांत', 'Heisenberg uncertainty principle'],
      ['बोर का नियम', 'Bohr’s postulate'],
    ],
    'पाउली के अपवर्जन सिद्धांत से ही एक कक्षक (Orbital) में विपरीत चक्रण वाले अधिकतम 2 इलेक्ट्रॉन ही आ सकते हैं।',
    'Pauli’s exclusion principle limits any single atomic orbital to at most two electrons with opposite spins.',
    'HARD'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'एल्युमिनियम पाउडर द्वारा आयरन (III) ऑक्साइड का अपचयन (Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + ऊष्मा) रेल की पटरियों की वेल्डिंग में उपयोग होता है। इस अभिक्रिया को क्या कहते हैं?',
    'Reduction of iron(III) oxide by aluminium powder (Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + heat), used to join railway tracks, is called:',
    ['थर्मिट अभिक्रिया (Thermite reaction)', 'Thermite reaction'],
    [
      ['साबुनीकरण अभिक्रिया', 'Saponification'],
      ['एस्टरीकरण अभिक्रिया', 'Esterification'],
      ['निस्तापन अभिक्रिया', 'Calcination'],
    ],
    'थर्मिट अभिक्रिया अत्यधिक ऊष्माक्षेपी होती है जिससे प्राप्त पिघला हुआ लोहा टूटी पटरियों या मशीन के पुर्जों को जोड़ने (वेल्डिंग) में काम आता है।',
    'The highly exothermic thermite reaction yields molten iron directly in place to weld cracked railway tracks or heavy machinery.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'अल्फा (α), बीटा (β) और गामा (γ) किरणों में से किसकी भेदन क्षमता (Penetrating power) सर्वाधिक और किसकी आयनन क्षमता सर्वाधिक होती है?',
    'Among Alpha (α), Beta (β), and Gamma (γ) radiations, which has the highest penetrating power and which has the highest ionizing power respectively?',
    ['गामा की भेदन क्षमता सर्वाधिक; अल्फा की आयनन क्षमता सर्वाधिक', 'Gamma has highest penetrating power; Alpha has highest ionizing power'],
    [
      ['अल्फा की भेदन क्षमता सर्वाधिक; गामा की आयनन क्षमता सर्वाधिक', 'Alpha highest penetrating; Gamma highest ionizing'],
      ['बीटा की दोनों क्षमताएँ सर्वाधिक', 'Beta highest in both'],
      ['तीनों की भेदन क्षमता बराबर', 'All have equal penetrating power'],
    ],
    'गामा किरणें उच्च ऊर्जा फोटॉन (विद्युत-चुंबकीय) होने से मोटी सीसे की चादर छोड़कर सबसे गहरे भेदती हैं, जबकि भारी धनावेशित अल्फा कण सर्वाधिक आयनन करते हैं।',
    'Uncharged high-energy gamma photons penetrate deepest (stopped by thick lead), while massive +2e alpha particles cause maximum ionization.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'नियत ताप पर किसी गैस का आयतन उसके दाब के व्युत्क्रमानुपाती होता है (PV = नियतांक)—यह किसका नियम है?',
    'At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (PV = constant). This is:',
    ['बॉयल का नियम (Boyle’s Law)', 'Boyle’s Law'],
    [
      ['चार्ल्स का नियम (Charles’s Law)', 'Charles’s Law'],
      ['गै-लुसैक का नियम', 'Gay-Lussac’s Law'],
      ['डाल्टन का आंशिक दाब नियम', 'Dalton’s Law'],
    ],
    'बॉयल का नियम: स्थिर T पर P ∝ 1/V; जबकि चार्ल्स का नियम: स्थिर P पर V ∝ T (केल्विन ताप)।',
    'Boyle’s law states P ∝ 1/V at constant temperature, whereas Charles’s law states V ∝ T at constant pressure.',
    'MEDIUM',
    { formulaHi: 'P₁V₁ = P₂V₂ (नियत T पर)', formulaEn: 'P₁V₁ = P₂V₂ (at constant T)' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'ब्राउनियन गति (Brownian motion)—द्रव या गैस में निलंबित सूक्ष्म कणों की अनियमित टेढ़ी-मेढ़ी गति—क्या प्रमाणित करती है?',
    'What does Brownian motion (zig-zag motion of suspended pollen or dust particles in a fluid) demonstrate?',
    ['पदार्थ के अणु अत्यंत सूक्ष्म हैं और वे निरंतर यादृच्छिक गति कर रहे हैं', 'Molecules of the fluid are very tiny and are in continuous random thermal motion'],
    [
      ['कण जीवित होते हैं', 'Suspended particles are alive'],
      ['गुरुत्वाकर्षण विपरीत दिशा में लगता है', 'Gravity acts sideways'],
      ['पदार्थ स्थिर और अणुहीन है', 'Matter is static and continuous'],
    ],
    'रॉबर्ट ब्राउन (1827) द्वारा खोजी गई ब्राउनियन गति जल या वायु के अदृश्य अणुओं द्वारा निलंबित कणों पर अनियमित टक्करों के कारण होती है।',
    'Discovered by Robert Brown, Brownian movement results from constant random collisions of unseen moving fluid molecules with suspended particles.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'क्लोरोफिल की उपस्थिति में सूर्य के प्रकाश से होने वाली प्रकाश-संश्लेषण (Photosynthesis) की क्रिया ऊर्जा के आधार पर कैसी अभिक्रिया है?',
    'In terms of energy absorption or release, what kind of reaction is photosynthesis?',
    ['ऊष्माशोषी (Endothermic) अभिक्रिया', 'Endothermic reaction'],
    [
      ['ऊष्माक्षेपी (Exothermic) अभिक्रिया', 'Exothermic reaction'],
      ['उदासीनीकरण अभिक्रिया', 'Neutralization reaction'],
      ['स्वतः वियोजन अभिक्रिया', 'Spontaneous combustion'],
    ],
    'प्रकाश-संश्लेषण में CO₂ और जल से ग्लूकोज बनाने के लिए सौर प्रकाश ऊर्जा का अवशोषण होता है, अतः यह एक ऊष्माशोषी प्रक्रिया है।',
    'Photosynthesis absorbs solar light energy to synthesize glucose from CO₂ and water, classifying it as endothermic.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'क्लोरीन के दो प्राकृतिक समस्थानिक ³⁵Cl (75%) और ³⁷Cl (25%) हैं। क्लोरीन का औसत परमाणु द्रव्यमान कितना होगा?',
    'Chlorine has two natural isotopes ³⁵Cl (75%) and ³⁷Cl (25%). What is the average atomic mass of chlorine?',
    ['35.5 u', '35.5 u'],
    [
      ['36.0 u', '36.0 u'],
      ['35.0 u', '35.0 u'],
      ['36.5 u', '36.5 u'],
    ],
    'औसत द्रव्यमान = (35 × 75/100) + (37 × 25/100) = 26.25 + 9.25 = 35.5 u।',
    'Average atomic mass = (35 × 0.75) + (37 × 0.25) = 26.25 + 9.25 = 35.5 u.',
    'MEDIUM',
    { formulaHi: 'औसत परमाणु द्रव्यमान = Σ(m_i × %_i) / 100', formulaEn: 'Avg Mass = Σ(m_i × %_i) / 100' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'रासायनिक सूत्र लिखते समय कैल्शियम क्लोराइड (Ca²⁺ और Cl⁻ से निर्मित) का सही सूत्र क्या होगा?',
    'What is the correct chemical formula of Calcium Chloride formed from Ca²⁺ and Cl⁻ ions?',
    ['CaCl₂', 'CaCl₂'],
    [
      ['CaCl', 'CaCl'],
      ['Ca₂Cl', 'Ca₂Cl'],
      ['Ca₂Cl₃', 'Ca₂Cl₃'],
    ],
    'कैल्शियम की संयोजकता +2 और क्लोरीन की -1 है; संयोजकता के क्रिस-क्रॉस नियम से 1 Ca के साथ 2 Cl जुड़कर CaCl₂ बनता है।',
    'Calcium has valency 2 and chlorine has valency 1; criss-crossing valencies gives CaCl₂.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'एक निश्चित तापमान पर यदि 100 ग्राम जल में अधिकतम 36 ग्राम NaCl घुल सकता है और ठीक इतना ही घुला हो, तो उस विलयन को क्या कहते हैं?',
    'If a solution contains the maximum amount of solute (e.g., 36 g NaCl in 100 g water) that can dissolve at a given temperature, it is called:',
    ['संतृप्त विलयन (Saturated solution)', 'Saturated solution'],
    [
      ['असंतृप्त विलयन', 'Unsaturated solution'],
      ['निलंबन (Suspension)', 'Suspension'],
      ['कोलॉइड (Colloid)', 'Colloid'],
    ],
    'किसी निश्चित ताप पर जिस विलयन में और अधिक विलेय न घोला जा सके, उसे संतृप्त विलयन कहते हैं। ताप बढ़ाने पर प्रायः ठोस की विलेयता बढ़ती है।',
    'A solution in which no more solute can dissolve at a given temperature is called a saturated solution.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'निम्नलिखित में से किसने "अनिश्चितता सिद्धांत" (Uncertainty Principle) दिया, जिसके अनुसार एक सूक्ष्म इलेक्ट्रॉन की स्थिति और संवेग को एक साथ पूर्ण यथार्थता से नहीं मापा जा सकता?',
    'Who proposed the Uncertainty Principle stating that position and momentum of an electron cannot be simultaneously determined with exact precision?',
    ['वर्नर हाइजेनबर्ग', 'Werner Heisenberg'],
    [
      ['इरविन श्रोडिंगर', 'Erwin Schrodinger'],
      ['लुई दे ब्रोग्ली', 'Louis de Broglie'],
      ['मैक्स प्लैंक', 'Max Planck'],
    ],
    '1927 में हाइजेनबर्ग ने अनिश्चितता सिद्धांत (Δx · Δp ≥ h/4π) प्रस्तुत किया, जो क्वांटम यांत्रिकी का आधार स्तंभ है।',
    'Werner Heisenberg formulated the Uncertainty Principle (Δx · Δp ≥ h/4π) in 1927.',
    'HARD',
    { formulaHi: 'Δx · Δp ≥ h / 4π', formulaEn: 'Δx · Δp ≥ h / 4π' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'जब लेड नाइट्रेट [Pb(NO₃)₂] को गर्म किया जाता है, तो भूरी धुएँ वाली कौन-सी गैस निकलती है?',
    'When lead nitrate [Pb(NO₃)₂] crystals are strongly heated, brown fumes of which gas are evolved?',
    ['नाइट्रोजन डाइऑक्साइड (NO₂)', 'Nitrogen dioxide (NO₂)'],
    [
      ['नाइट्रोजन गैस (N₂)', 'Nitrogen gas (N₂)'],
      ['सल्फर डाइऑक्साइड (SO₂)', 'Sulphur dioxide (SO₂)'],
      ['कार्बन मोनोऑक्साइड (CO)', 'Carbon monoxide (CO)'],
    ],
    '2Pb(NO₃)₂ → 2PbO + 4NO₂↑ (भूरा धुआँ) + O₂↑। यह उष्मीय वियोजन अभिक्रिया का प्रसिद्ध उदाहरण है।',
    'Thermal decomposition: 2Pb(NO₃)₂ → 2PbO + 4NO₂ (brown fumes) + O₂.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'पनीर, मक्खन और जेली किस प्रकार के कोलॉइडी तंत्र के उदाहरण हैं?',
    'Cheese, butter, and jellies belong to which category of colloids?',
    ['जेल (Gel — ठोस में द्रव)', 'Gel (liquid dispersed in solid)'],
    [
      ['एरोसॉल (Aerosol)', 'Aerosol'],
      ['फोम (Foam)', 'Foam'],
      ['पायस (Emulsion)', 'Emulsion'],
    ],
    'जब द्रव परिक्षिप्त प्रावस्था के रूप में ठोस परिक्षेपण माध्यम में फँसा हो, तो वह जेल कहलाता है (जैसे पनीर, मक्खन, जैम)।',
    'A gel has liquid as the dispersed phase trapped inside a solid dispersion medium, as in cheese, butter, and jelly.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'खाना पकाने वाली गैस या मोमबत्ती में कार्बन के अपूर्ण दहन से कौन-सी जहरीली गैस बनती है?',
    'Which poisonous gas is formed due to incomplete combustion of carbon-based fuels?',
    ['कार्बन मोनोऑक्साइड (CO)', 'Carbon monoxide (CO)'],
    [
      ['कार्बन डाइऑक्साइड (CO₂)', 'Carbon dioxide (CO₂)'],
      ['नाइट्रस ऑक्साइड (N₂O)', 'Nitrous oxide (N₂O)'],
      ['मीथेन (CH₄)', 'Methane (CH₄)'],
    ],
    'अपर्याप्त ऑक्सीजन में कार्बन जलने पर CO बनती है, जो रक्त के हीमोग्लोबिन से जुड़कर कार्बॉक्सीहीमोग्लोबिन बनाती है और ऑक्सीजन परिवहन रोक देती है।',
    'Incomplete combustion produces CO, which binds tightly to haemoglobin (forming carboxyhaemoglobin), blocking oxygen transport.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'सोडियम धनायन (Na⁺) में इलेक्ट्रॉनों की कुल संख्या कितनी होती है? (Na का परमाणु क्रमांक = 11)',
    'How many total electrons are present in a sodium ion (Na⁺)? (Atomic number of Na = 11)',
    ['10 इलेक्ट्रॉन', '10 electrons'],
    [
      ['11 इलेक्ट्रॉन', '11 electrons'],
      ['12 इलेक्ट्रॉन', '12 electrons'],
      ['23 इलेक्ट्रॉन', '23 electrons'],
    ],
    'उदासीन Na (Z=11) में 11 इलेक्ट्रॉन होते हैं; 1 इलेक्ट्रॉन त्यागकर Na⁺ बनने पर इसमें 11 - 1 = 10 इलेक्ट्रॉन बचते हैं (अक्रिय गैस नियॉन के समान)।',
    'Neutral Na has 11 electrons; losing 1 electron forms Na⁺ with 10 electrons (isoelectronic with Neon).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'द्रव्यमान संरक्षण का नियम और स्थिर अनुपात का नियम क्रमशः किन वैज्ञानिकों ने दिया था?',
    'Who formulated the Law of Conservation of Mass and the Law of Definite Proportions respectively?',
    ['लावोज़िए और जोसेफ प्राउस्ट', 'Antoine Lavoisier and Joseph Proust'],
    [
      ['जॉन डाल्टन और आवोगाद्रो', 'John Dalton and Avogadro'],
      ['नील्स बोर और रदरफोर्ड', 'Niels Bohr and Rutherford'],
      ['मेंडलीफ और मोज़ले', 'Mendeleev and Moseley'],
    ],
    'लावोज़िए (आधुनिक रसायन के जनक) ने द्रव्यमान संरक्षण का नियम और प्राउस्ट ने स्थिर (निश्चित) अनुपात का नियम दिया।',
    'Lavoisier (Father of Modern Chemistry) established Conservation of Mass, and Joseph Proust stated Definite Proportions.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'ऑक्सीजन का अणु (O₂) और ओज़ोन (O₃) एक-दूसरे के क्या कहलाते हैं?',
    'Oxygen gas (O₂) and Ozone (O₃) are related to each other as:',
    ['अपररूप (Allotropes)', 'Allotropes'],
    [
      ['समस्थानिक (Isotopes)', 'Isotopes'],
      ['समभारिक (Isobars)', 'Isobars'],
      ['समइलेक्ट्रॉनिक (Isoelectronic)', 'Isoelectronic'],
    ],
    'जब एक ही तत्व प्रकृति में भिन्न-भिन्न आण्विक या क्रिस्टलीय संरचनाओं में पाया जाए तो उन्हें अपररूप कहते हैं (जैसे कार्बन के हीरा/ग्रेफाइट, तथा ऑक्सीजन के O₂/O₃)।',
    'Different structural forms of the same element in the same physical state are called allotropes (e.g., O₂ & O₃; diamond & graphite).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'सोडियम (Na) और पोटैशियम (K) जैसी अत्यंत अभिक्रियाशील धातुओं को प्रयोगशाला में किसमें डुबोकर सुरक्षित रखा जाता है?',
    'Why are highly reactive metals like Sodium (Na) and Potassium (K) stored immersed in kerosene oil?',
    ['मिट्टी के तेल (केरोसिन) में, ताकि वायु और नमी से संपर्क न हो', 'In kerosene oil, to prevent violent reaction with atmospheric oxygen and moisture'],
    [
      ['शुद्ध जल में, ताकि वे ठंडी रहें', 'In pure water to keep them cool'],
      ['सल्फ्यूरिक अम्ल में', 'In sulphuric acid'],
      ['खुली हवा में काँच की प्लेट पर', 'On open glass plate'],
    ],
    'सोडियम व पोटैशियम वायु की ऑक्सीजन व पानी से तुरंत आग पकड़ लेते हैं, इसलिए उन्हें केरोसिन में रखा जाता है; जबकि सफेद फॉस्फोरस को पानी में रखा जाता है।',
    'Na and K react explosively with air and moisture, so they are kept under kerosene (whereas white phosphorus is stored under water).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'आयनिक बंध (Ionic bond) और सहसंयोजक बंध (Covalent bond) बनने का मुख्य आधार क्या होता है?',
    'What is the fundamental difference in how an ionic bond and a covalent bond are formed?',
    ['आयनिक बंध में इलेक्ट्रॉनों का पूर्ण स्थानांतरण होता है; सहसंयोजक बंध में इलेक्ट्रॉनों की साझेदारी होती है', 'Ionic bond involves complete transfer of electrons; covalent bond involves sharing of electrons'],
    [
      ['आयनिक बंध दो अधातुओं के बीच बनता है', 'Ionic bond forms between two non-metals'],
      ['सहसंयोजक बंध केवल धातुओं में होता है', 'Covalent bond occurs only in metals'],
      ['दोनों में प्रोटॉनों का स्थानांतरण होता है', 'Both transfer protons'],
    ],
    'धातु इलेक्ट्रॉन त्यागकर धनायन व अधातु ग्रहण कर ऋणायन बनाते हैं (जैसे NaCl: आयनिक); दो अधातु इलेक्ट्रॉन साझा करके अणु बनाते हैं (जैसे CH₄, H₂O: सहसंयोजक)।',
    'Ionic bonds arise from electron transfer between metals and non-metals (e.g., NaCl); covalent bonds form via electron sharing (e.g., CH₄).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'आयनिक यौगिकों (जैसे NaCl) के गलनांक और क्वथनांक सहसंयोजक यौगिकों की तुलना में बहुत उच्च क्यों होते हैं?',
    'Why do ionic compounds (like NaCl) have much higher melting and boiling points than covalent compounds?',
    ['विपरीत आवेशित आयनों के बीच प्रबल स्थिरवैद्युत आकर्षण बल तोड़ने के लिए अधिक ऊर्जा लगती है', 'Strong electrostatic attraction between oppositely charged ions requires a lot of energy to break'],
    [
      ['क्योंकि आयनिक यौगिक सदैव गैस होते हैं', 'Because ionic compounds are gases'],
      ['क्योंकि उनके अणुभार बहुत कम होते हैं', 'Because their molar mass is tiny'],
      ['क्योंकि उनमें इलेक्ट्रॉन नहीं होते', 'Because they lack electrons'],
    ],
    'क्रिस्टल जालक में Na⁺ और Cl⁻ आयन प्रबल कूलॉम आकर्षण से बंधे रहते हैं, जबकि सहसंयोजक अणुओं के बीच दुर्बल अंतराआण्विक बल होता है।',
    'Strong electrostatic forces hold cations and anions together in ionic crystal lattices, unlike weak intermolecular forces in covalent molecules.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'किसी विलयन की द्रव्यमान प्रतिशत सांद्रता (w/w %) ज्ञात करने का सही सूत्र क्या है, यदि 40 ग्राम नमक को 320 ग्राम जल में घोला गया हो?',
    'If 40 g of common salt is dissolved in 320 g of water, what is the concentration in terms of mass-by-mass percentage (w/w %)?',
    ['11.1%', '11.1%'],
    [
      ['12.5%', '12.5%'],
      ['8.0%', '8.0%'],
      ['40.0%', '40.0%'],
    ],
    'विलेय (नमक) = 40 g, विलायक (जल) = 320 g; अतः कुल विलयन का द्रव्यमान = 40 + 320 = 360 g। सांद्रता = (40 / 360) × 100 = 11.11%।',
    'Mass of solution = 40 + 320 = 360 g. Mass % = (40 / 360) × 100 = 11.1%.',
    'MEDIUM',
    { formulaHi: 'द्रव्यमान % = (विलेय का द्रव्यमान / विलयन का कुल द्रव्यमान) × 100', formulaEn: 'Mass % = (Mass of solute / Mass of solution) × 100' }
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'अक्रिय तत्व हीलियम (₂He⁴) की बाहरी कक्षा में कितने इलेक्ट्रॉन होते हैं, और क्या इसकी संयोजकता 2 है या 0?',
    'How many electrons are in the valence shell of Helium (₂He⁴), and what is its valency?',
    ['2 इलेक्ट्रॉन; संयोजकता 0', '2 electrons; valency 0'],
    [
      ['2 इलेक्ट्रॉन; संयोजकता 2', '2 electrons; valency 2'],
      ['8 इलेक्ट्रॉन; संयोजकता 0', '8 electrons; valency 0'],
      ['4 इलेक्ट्रॉन; संयोजकता 4', '4 electrons; valency 4'],
    ],
    'हीलियम का केवल पहला K कोश होता है जिसकी अधिकतम क्षमता 2 इलेक्ट्रॉन है; पूर्ण द्विक (Duplet) होने से यह कोई बंध नहीं बनाता, अतः संयोजकता 0 है।',
    'Helium’s sole K shell holds a maximum of 2 electrons; being completely filled (duplet), its combining capacity (valency) is 0.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'चूना पत्थर (CaCO₃) को भट्ठी में तेज गर्म करने पर बिना बुझा चूना (CaO) और CO₂ गैस बनती है। यह किस प्रकार की अभिक्रिया है?',
    'Heating limestone (CaCO₃) strongly in a kiln yields quicklime (CaO) and CO₂ gas. What type of reaction is this?',
    ['उष्मीय वियोजन (अपघटन) अभिक्रिया', 'Thermal decomposition reaction'],
    [
      ['संयोजन अभिक्रिया', 'Combination reaction'],
      ['विस्थापन अभिक्रिया', 'Displacement reaction'],
      ['उदासीनीकरण अभिक्रिया', 'Neutralization reaction'],
    ],
    'CaCO₃(s) + ऊष्मा → CaO(s) + CO₂(g)। जब एकल अभिकारक ऊष्मा पाकर दो या अधिक सरल उत्पादों में टूटता है तो उसे उष्मीय वियोजन कहते हैं।',
    'A single reactant breaks down into simpler products upon heating: CaCO₃ → CaO + CO₂ (thermal decomposition).',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'निम्नलिखित में से किस कण का द्रव्यमान लगभग शून्य (इलेक्ट्रॉन के बराबर) और आवेश +1 होता है, जिसे इलेक्ट्रॉन का प्रतिकण (Antiparticle) कहते हैं?',
    'Which particle has mass equal to an electron but a +1 positive charge, and is called the antiparticle of the electron?',
    ['पॉज़िट्रॉन (Positron)', 'Positron'],
    [
      ['प्रोटॉन', 'Proton'],
      ['न्यूट्रिनो', 'Neutrino'],
      ['अल्फा कण', 'Alpha particle'],
    ],
    'कार्ल एंडरसन ने 1932 में पॉज़िट्रॉन (e⁺) की खोज की, जो इलेक्ट्रॉन (e⁻) का धनावेशित प्रतिकण है।',
    'Discovered by Carl Anderson in 1932, the positron (e⁺) is the positively charged antiparticle of the electron.',
    'HARD'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'टेलिस्कोप या ठंडे पानी की बोतल की बाहरी सतह पर गर्म दिनों में पानी की बूँदें क्यों जमा हो जाती हैं?',
    'Why do water droplets form on the outer surface of an ice-cold water bottle in summer?',
    ['वायु में उपस्थित जलवाष्प ठंडी सतह से टकराकर संघनित (Condense) हो जाती है', 'Water vapour in air cools on contact with the cold bottle and condenses into liquid'],
    [
      ['बोतल के अंदर का पानी रिसकर बाहर आ जाता है', 'Water seeps through glass'],
      ['वायु की ऑक्सीजन जल में बदल जाती है', 'Oxygen turns into water'],
      ['काँच पिघलकर जल बनाता है', 'Glass melts into water'],
    ],
    'ठंडी सतह के संपर्क में आने पर आसपास की हवा का ताप ओसांक (Dew point) से नीचे गिर जाता है, जिससे जलवाष्प द्रव बूँदों में संघनित हो जाती है।',
    'Moist air touching the cold surface cools below its dew point, causing water vapour to condense into droplets.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'दूध में थोड़ा दही (जामन) मिलाने पर कुछ घंटों में पूरा दूध दही में कैसे परिवर्तित हो जाता है?',
    'How does adding a small spoon of curd convert warm milk into curd overnight?',
    ['लैक्टोबैसिलस जीवाणु द्वारा लैक्टोज शर्करा का लैक्टिक अम्ल में किण्वन (रासायनिक परिवर्तन)', 'Lactobacillus bacteria ferment lactose into lactic acid (chemical change)'],
    [
      ['केवल दूध के ठंडा होने से (भौतिक परिवर्तन)', 'Simple cooling (physical change)'],
      ['पानी के वाष्पीकरण से', 'Evaporation of water'],
      ['कैल्शियम के जमने से', 'Freezing of calcium'],
    ],
    'लैक्टोबैसिलस बैक्टीरिया लैक्टोज को लैक्टिक अम्ल में बदलते हैं, जिससे अम्लीय माध्यम में दूध की केसीन प्रोटीन स्कंदित (जम) होकर दही बनाती है।',
    'Lactobacillus bacteria convert milk sugar (lactose) into lactic acid, coagulating milk proteins into curd—an irreversible chemical change.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'परमाणु द्रव्यमान इकाई (1 u या 1 amu) को अंतर्राष्ट्रीय स्तर पर किस परमाणु के द्रव्यमान के सापेक्ष परिभाषित किया गया है?',
    'One atomic mass unit (1 u) is defined relative to the mass of which reference atom?',
    ['कार्बन-12 (C-12) परमाणु के द्रव्यमान का 1/12वाँ भाग', '1/12th the mass of one Carbon-12 (C-12) atom'],
    [
      ['हाइड्रोजन-1 परमाणु का द्रव्यमान', 'Mass of one H-1 atom'],
      ['ऑक्सीजन-16 परमाणु का 1/16वाँ भाग', '1/16th of O-16 atom'],
      ['नाइट्रोजन-14 परमाणु का 1/14वाँ भाग', '1/14th of N-14 atom'],
    ],
    '1961 से IUPAC ने C-12 समस्थानिक के एक परमाणु के द्रव्यमान के 1/12 भाग को मानक 1 u (यूनिफाइड मास) निर्धारित किया है।',
    'IUPAC defines 1 unified atomic mass unit (1 u) as exactly 1/12th the mass of an unbound Carbon-12 atom.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'पदार्थ एवं अवस्थाएँ',
    'समुद्र के जल से साधारण नमक प्राप्त करने तथा अशुद्ध कॉपर सल्फेट से शुद्ध क्रिस्टल प्राप्त करने की सर्वोत्तम विधि क्रमशः कौन-सी है?',
    'Which methods are best used to obtain salt from seawater and pure crystals from impure copper sulphate respectively?',
    ['वाष्पीकरण (Evaporation) और क्रिस्टलीकरण (Crystallization)', 'Evaporation and Crystallization'],
    [
      ['निस्पंदन और ऊर्ध्वपातन', 'Filtration and Sublimation'],
      ['क्रोमैटोग्राफी और अपकेंद्रण', 'Chromatography and Centrifugation'],
      ['प्रभाजी आसवन और विसरण', 'Fractional distillation and Diffusion'],
    ],
    'समुद्री पानी से वाष्पीकरण द्वारा कच्चा नमक मिलता है, जबकि घुलनशील अशुद्धियाँ हटाकर शुद्ध ठोस प्राप्त करने हेतु क्रिस्टलीकरण श्रेष्ठ विधि है।',
    'Evaporation recovers crude salt from seawater, while crystallization yields pure solids free of soluble impurities.',
    'MEDIUM'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'ताजे बुझे हुए चूने [Ca(OH)₂] के साफ विलयन (चूने का पानी) में फूँक मारने (CO₂ प्रवाहित करने) पर वह दूधिया क्यों हो जाता है?',
    'Why does clear lime water [Ca(OH)₂] turn milky when carbon dioxide (CO₂) is blown through it?',
    ['अघुलनशील कैल्शियम कार्बोनेट (CaCO₃) का सफेद अवक्षेप बनने के कारण', 'Due to formation of insoluble white precipitate of Calcium Carbonate (CaCO₃)'],
    [
      ['कैल्शियम ऑक्साइड बनने के कारण', 'Formation of CaO'],
      ['कैल्शियम बाइकार्बोनेट बनने से', 'Formation of Ca(HCO₃)₂'],
      ['हाइड्रोजन गैस निकलने से', 'Evolution of H₂ gas'],
    ],
    'Ca(OH)₂ + CO₂ → CaCO₃↓ (सफेद दूधिया) + H₂O। अत्यधिक CO₂ प्रवाहित करने पर घुलनशील Ca(HCO₃)₂ बनने से दूधियापन गायब हो जाता है।',
    'CO₂ reacts with Ca(OH)₂ to form insoluble CaCO₃ (milky suspension); excess CO₂ forms soluble Ca(HCO₃)₂ and clears it again.',
    'EASY'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'परमाणु संरचना, समस्थानिक एवं समभारिक',
    'परमाणु के नाभिक का आकार (व्यास) लगभग किस कोटि का होता है, जबकि पूरे परमाणु का आकार किस कोटि का होता है?',
    'What is the approximate order of size of an atomic nucleus compared to the entire atom?',
    ['नाभिक ~10⁻¹⁵ मीटर; परमाणु ~10⁻¹⁰ मीटर', 'Nucleus ~10⁻¹⁵ m; Atom ~10⁻¹⁰ m'],
    [
      ['नाभिक ~10⁻¹⁰ मीटर; परमाणु ~10⁻¹⁵ मीटर', 'Nucleus ~10⁻¹⁰ m; Atom ~10⁻¹⁵ m'],
      ['दोनों ~10⁻¹⁰ मीटर', 'Both ~10⁻¹⁰ m'],
      ['नाभिक ~10⁻⁶ मीटर; परमाणु ~10⁻³ मीटर', 'Nucleus ~10⁻⁶ m; Atom ~10⁻³ m'],
    ],
    'परमाणु की त्रिज्या लगभग 10⁻¹⁰ m (1 Å) होती है, जबकि नाभिक की त्रिज्या लगभग 10⁻¹⁵ m (1 फर्मी) होती है—अर्थात नाभिक परमाणु से लगभग 1 लाख गुना छोटा है।',
    'An atom is ~10⁻¹⁰ m across while its nucleus is ~10⁻¹⁵ m across—about 10⁵ times smaller than the atom.',
    'HARD'
  ),
  q(
    'पदार्थ, परमाणु एवं रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाएँ एवं समीकरण',
    'सफेद सिल्वर क्लोराइड (AgCl) को धूप में रखने पर उसका रंग कैसा हो जाता है?',
    'What colour change occurs when white Silver Chloride (AgCl) is exposed to sunlight?',
    ['धूसर/स्लेटी (Grey) हो जाता है', 'It turns grey'],
    [
      ['नीला हो जाता है', 'It turns blue'],
      ['हरा हो जाता है', 'It turns green'],
      ['चमकीला लाल हो जाता है', 'It turns bright red'],
    ],
    'सूर्य के प्रकाश में 2AgCl → 2Ag (धूसर चाँदी) + Cl₂↑ प्रकाश-वियोजन अभिक्रिया के कारण सफेद पाउडर धूसर रंग का हो जाता है।',
    'Sunlight decomposes white AgCl into grey metallic silver (2Ag) and chlorine gas.',
    'MEDIUM'
  ),

  // =========================================================================
  // 7. अम्ल, क्षार, लवण (pH पैमाना, प्राकृतिक अम्ल), धातु, अधातु, मिश्रधातु, कार्बन एवं ईंधन — 82 Qs
  // =========================================================================
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'नीला लिटमस पत्र अम्लीय विलयन में डालने पर किस रंग का हो जाता है?',
    'What colour does blue litmus paper turn when dipped into an acidic solution?',
    ['लाल (Red)', 'Red'],
    [
      ['हरा (Green)', 'Green'],
      ['पीला (Yellow)', 'Yellow'],
      ['रंगहीन (Colourless)', 'Colourless'],
    ],
    'अम्ल नीले लिटमस को लाल करते हैं, जबकि क्षारक (Base) लाल लिटमस को नीला कर देते हैं। (स्मरण: अ-नी-ला → अम्ल नीले को लाल करता है)।',
    'Acids turn blue litmus red, whereas bases turn red litmus blue.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'लिटमस (Litmus) प्राकृतिक रूप से किस पौधे/जीव समूह से प्राप्त किया जाने वाला सूचक है?',
    'Litmus is a natural acid-base indicator extracted from which group of organisms?',
    ['लाइकेन (थैलोफाइटा समूह)', 'Lichen (Thallophyta division)'],
    [
      ['ब्रायोफाइटा (मॉस)', 'Bryophyta (Moss)'],
      ['टेरिडोफाइटा (फर्न)', 'Pteridophyta (Fern)'],
      ['शैवाल केवल', 'Algae only'],
    ],
    'लिटमस विलयन बैंगनी रंग का रंजक होता है जिसे लाइकेन (शैवाल और कवक के सहजीवी) से निकाला जाता है।',
    'Litmus is a purple dye extracted from lichens (symbiotic association of algae and fungi).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'फिनॉल्फथेलिन (Phenolphthalein) सूचक क्षारीय विलयन में कैसा रंग देता है?',
    'What colour does the synthetic indicator phenolphthalein turn in a basic (alkaline) solution?',
    ['गुलाबी (Pink)', 'Pink'],
    [
      ['रंगहीन (Colourless)', 'Colourless'],
      ['नीला (Blue)', 'Blue'],
      ['लाल (Red)', 'Red'],
    ],
    'फिनॉल्फथेलिन अम्लीय व उदासीन विलयन में रंगहीन रहता है, जबकि क्षारीय विलयन में गहरा गुलाबी रंग देता है।',
    'Phenolphthalein remains colourless in acidic and neutral solutions, and turns pink in basic solutions.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'हल्दी (Turmeric) का दाग लगे सफेद कपड़े पर साबुन लगाने से दाग लाल-भूरा क्यों हो जाता है?',
    'Why does a turmeric stain on white cloth turn reddish-brown when rubbed with soap?',
    ['साबुन की प्रकृति क्षारीय होती है और हल्दी क्षार के साथ लाल-भूरा रंग देती है', 'Soap is basic in nature, and turmeric indicator turns reddish-brown in bases'],
    [
      ['साबुन में हाइड्रोक्लोरिक अम्ल होता है', 'Soap contains HCl'],
      ['हल्दी केवल पानी से लाल होती है', 'Turmeric turns red in pure water'],
      ['साबुन का रंग स्वयं लाल होता है', 'Soap dye itself is red'],
    ],
    'हल्दी एक प्राकृतिक सूचक है जो अम्लीय व उदासीन माध्यम में पीली रहती है और क्षारीय माध्यम (साबुन) में लाल-भूरे रंग की हो जाती है।',
    'Turmeric is a natural pH indicator that remains yellow in acid/neutral media and turns reddish-brown in alkaline soap solution.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'pH पैमाने (0 से 14) की अवधारणा किस वैज्ञानिक ने प्रस्तुत की थी?',
    'Which scientist introduced the pH scale (0 to 14)?',
    ['एस.पी.एल. सोरेनसन (S.P.L. Sorensen)', 'S.P.L. Sorensen'],
    [
      ['आर्हेनियस', 'Arrhenius'],
      ['ब्रॉन्स्टेड और लॉरी', 'Bronsted and Lowry'],
      ['गिल्बर्ट लुईस', 'Gilbert Lewis'],
    ],
    '1909 में डेनिश रसायनज्ञ सोरेनसन ने हाइड्रोजन आयन सांद्रता [H⁺] दर्शाने हेतु pH = -log₁₀[H⁺] पैमाना दिया।',
    'Danish chemist S.P.L. Sorensen proposed the pH scale in 1909 where pH = -log₁₀[H⁺].',
    'MEDIUM',
    { formulaHi: 'pH = -log₁₀[H⁺]', formulaEn: 'pH = -log₁₀[H⁺]' }
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    '25°C पर शुद्ध उदासीन जल का pH मान कितना होता है?',
    'What is the pH value of pure neutral water at 25°C?',
    ['7', '7'],
    [
      ['0', '0'],
      ['14', '14'],
      ['5.5', '5.5'],
    ],
    'pH < 7 अम्लीय, pH = 7 उदासीन तथा pH > 7 क्षारीय विलयन को दर्शाता है।',
    'pH < 7 is acidic, pH = 7 is neutral, and pH > 7 is basic/alkaline.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'मानव रक्त (Human blood) का सामान्य pH मान कितना होता है?',
    'What is the normal pH range of human blood?',
    ['7.35 से 7.45 (हल्का क्षारीय)', '7.35 to 7.45 (slightly alkaline)'],
    [
      ['6.2 से 6.4 (अम्लीय)', '6.2 to 6.4 (acidic)'],
      ['7.0 (बिल्कुल उदासीन)', '7.0 (strictly neutral)'],
      ['8.5 से 9.0', '8.5 to 9.0'],
    ],
    'स्वस्थ मानव रक्त का pH 7.35–7.45 के बीच (लगभग 7.4) नियंत्रित रहता है। हमारा शरीर सामान्यतः 7.0 से 7.8 pH के बीच कार्य करता है।',
    'Human blood is slightly basic, tightly buffered between pH 7.35 and 7.45 (around 7.4).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'अम्लीय वर्षा (Acid rain) तब मानी जाती है जब वर्षा के जल का pH मान:',
    'Rain is classified as "acid rain" when its pH falls below:',
    ['5.6 से कम हो जाए', 'Less than 5.6'],
    [
      ['7.0 से कम हो जाए', 'Less than 7.0'],
      ['8.0 से अधिक हो जाए', 'More than 8.0'],
      ['1.0 से कम हो जाए', 'Less than 1.0'],
    ],
    'वायुमंडल की SO₂ और NO₂ गैसें वर्षा के जल से क्रिया कर H₂SO₄ व HNO₃ बनाती हैं, जिससे जल का pH 5.6 से नीचे गिर जाता है।',
    'Atmospheric SO₂ and NO₂ dissolve in rainwater to form H₂SO₄ and HNO₃, lowering pH below 5.6.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'मनुष्य के मुँह का pH कितने से कम होने पर दाँतों का क्षय (Tooth decay) प्रारंभ हो जाता है?',
    'Tooth decay begins when the pH of the mouth drops below:',
    ['5.5', '5.5'],
    [
      ['7.0', '7.0'],
      ['8.5', '8.5'],
      ['6.8', '6.8'],
    ],
    'दाँतों का इनेमल कैल्शियम हाइड्रॉक्सीएपेटाइट से बना है; मुँह में जीवाणु शर्करा को अम्ल में बदलते हैं जिससे pH < 5.5 होने पर इनेमल संक्षारित होने लगता है।',
    'Bacteria break down residual sugars into acids; below pH 5.5, tooth enamel (calcium hydroxyapatite) starts corroding.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'हमारे आमाशय (पेट) में भोजन के पाचन तथा हानिकारक जीवाणुओं को नष्ट करने के लिए कौन-सा अम्ल उत्पन्न होता है?',
    'Which acid is produced in the human stomach to aid digestion and kill harmful bacteria?',
    ['हाइड्रोक्लोरिक अम्ल (HCl)', 'Hydrochloric acid (HCl)'],
    [
      ['सल्फ्यूरिक अम्ल (H₂SO₄)', 'Sulphuric acid (H₂SO₄)'],
      ['नाइट्रिक अम्ल (HNO₃)', 'Nitric acid (HNO₃)'],
      ['सिट्रिक अम्ल', 'Citric acid'],
    ],
    'आमाशय की भित्ति की ऑक्सिन्टिक कोशिकाएँ तनु HCl (~pH 1.5–2.0) स्रावित करती हैं, जो पेप्सिन एंजाइम को सक्रिय करता है।',
    'Gastric glands secrete dilute HCl (pH ~1.5–2.0), which kills microbes and activates pepsinogen into pepsin.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'अपच या पेट में अत्यधिक अम्लता (Acidity) को दूर करने के लिए प्रति-अम्ल (Antacid) के रूप में किस दुर्बल क्षारक ("मिल्क ऑफ मैग्नीशिया") का उपयोग होता है?',
    'Which mild base ("Milk of Magnesia") is used as an antacid to neutralize excess stomach acid?',
    ['मैग्नीशियम हाइड्रॉक्साइड [Mg(OH)₂]', 'Magnesium hydroxide [Mg(OH)₂]'],
    [
      ['सोडियम हाइड्रॉक्साइड (NaOH)', 'Sodium hydroxide (NaOH)'],
      ['पोटैशियम हाइड्रॉक्साइड (KOH)', 'Potassium hydroxide (KOH)'],
      ['अमोनियम क्लोराइड', 'Ammonium chloride'],
    ],
    'NaOH या KOH बहुत प्रबल और संक्षारक क्षार हैं; पेट की अम्लता शांत करने हेतु दुर्बल क्षार Mg(OH)₂ या बेकिंग सोडा (NaHCO₃) दिया जाता है।',
    'Strong alkalis like NaOH are corrosive; mild Mg(OH)₂ safely neutralizes excess HCl in the stomach.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'सिरका (Vinegar), नींबू/संतरा और इमली में क्रमशः कौन-से प्राकृतिक कार्बनिक अम्ल पाए जाते हैं?',
    'Which natural organic acids are found in vinegar, lemon/orange, and tamarind respectively?',
    ['एसिटिक अम्ल, सिट्रिक अम्ल और टार्टरिक अम्ल', 'Acetic acid, Citric acid, and Tartaric acid'],
    [
      ['फॉर्मिक, लैक्टिक और ऑक्सैलिक अम्ल', 'Formic, Lactic, and Oxalic acid'],
      ['सिट्रिक, एसिटिक और मैलिक अम्ल', 'Citric, Acetic, and Malic acid'],
      ['टार्टरिक, सिट्रिक और एसिटिक अम्ल', 'Tartaric, Citric, and Acetic acid'],
    ],
    'सिरका = एसिटिक अम्ल (CH₃COOH), खट्टे नींबू-संतरे = सिट्रिक अम्ल, इमली व अंगूर = टार्टरिक अम्ल।',
    'Vinegar contains acetic acid, citrus fruits contain citric acid, and tamarind/grapes contain tartaric acid.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'चींटी या मधुमक्खी के डंक तथा बिच्छू बूटी (नेटल पादप) के पत्तों में कौन-सा अम्ल होता है जो जलन पैदा करता है?',
    'Which acid present in ant stings and nettle leaf hair causes sharp pain and irritation?',
    ['मेथेनोइक अम्ल (फॉर्मिक अम्ल, HCOOH)', 'Methanoic acid (Formic acid, HCOOH)'],
    [
      ['ऑक्सैलिक अम्ल', 'Oxalic acid'],
      ['लैक्टिक अम्ल', 'Lactic acid'],
      ['ब्यूटिरिक अम्ल', 'Butyric acid'],
    ],
    'चींटी के डंक में फॉर्मिक/मेथेनोइक अम्ल होता है; इसे शांत करने के लिए बेकिंग सोडा (NaHCO₃) या कैलामाइन (ZnCO₃) जैसे दुर्बल क्षार रगड़े जाते हैं।',
    'Formic (methanoic) acid causes the sting; rubbing mild bases like baking soda or calamine neutralizes it.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'टमाटर, पालक और सेब में मुख्यतः कौन-से प्राकृतिक अम्ल पाए जाते हैं?',
    'Which natural acids are predominantly found in tomatoes/spinach and apples respectively?',
    ['टमाटर/पालक में ऑक्सैलिक अम्ल; सेब में मैलिक अम्ल', 'Oxalic acid in tomato/spinach; Malic acid in apple'],
    [
      ['लैक्टिक अम्ल और सिट्रिक अम्ल', 'Lactic acid and Citric acid'],
      ['एसिटिक अम्ल और टार्टरिक अम्ल', 'Acetic acid and Tartaric acid'],
      ['फॉर्मिक अम्ल और बेंजोइक अम्ल', 'Formic acid and Benzoic acid'],
    ],
    'टमाटर और पालक में ऑक्सैलिक अम्ल (जो जंग के दाग हटाने में भी उपयोगी है) तथा सेब में मैलिक अम्ल पाया जाता है।',
    'Tomatoes and spinach contain oxalic acid, while apples contain malic acid.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'दही (खट्टा दूध) में कौन-सा अम्ल पाया जाता है, जो अत्यधिक व्यायाम के दौरान पेशियों में भी संचित होकर ऐंठन पैदा करता है?',
    'Which acid is present in curd (sour milk) and also accumulates in muscles during strenuous exercise causing cramps?',
    ['लैक्टिक अम्ल', 'Lactic acid'],
    [
      ['सिट्रिक अम्ल', 'Citric acid'],
      ['ऑक्सैलिक अम्ल', 'Oxalic acid'],
      ['यूरिक अम्ल', 'Uric acid'],
    ],
    'लैक्टिक अम्ल दूध के किण्वन से दही में बनता है तथा ऑक्सीजन की कमी में अवायवीय श्वसन के दौरान पेशियों में भी बनता है।',
    'Lactic acid gives curd its sourness and builds up in muscles during anaerobic respiration under oxygen deficit.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'अम्लराज (Aqua Regia), जो सोने और प्लैटिनम जैसी उत्कृष्ट धातुओं को भी घोल देता है, किन अम्लों का मिश्रण होता है?',
    'Aqua Regia, capable of dissolving noble metals like gold and platinum, is a freshly prepared mixture of:',
    ['3 भाग सांद्र HCl और 1 भाग सांद्र HNO₃', '3 parts concentrated HCl and 1 part concentrated HNO₃'],
    [
      ['3 भाग सांद्र HNO₃ और 1 भाग सांद्र HCl', '3 parts conc. HNO₃ and 1 part conc. HCl'],
      ['1 भाग H₂SO₄ और 1 भाग HCl', '1 part H₂SO₄ and 1 part HCl'],
      ['3 भाग H₂SO₄ और 1 भाग HNO₃', '3 parts H₂SO₄ and 1 part HNO₃'],
    ],
    'सांद्र हाइड्रोक्लोरिक अम्ल और सांद्र नाइट्रिक अम्ल का 3 : 1 आयतन अनुपात का मिश्रण एक्वा रेजिया (रॉयल वाटर) कहलाता है।',
    'Aqua regia ("royal water") is a 3:1 molar/volume mixture of concentrated HCl and concentrated HNO₃.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    '"रसायनों का राजा" (King of Chemicals) किस अम्ल को कहा जाता है जिसका उपयोग कार की बैटरियों, उर्वरकों और उद्योगों में सर्वाधिक होता है?',
    'Which acid is known as the "King of Chemicals" due to its vast industrial use in batteries and fertilizers?',
    ['सल्फ्यूरिक अम्ल (H₂SO₄)', 'Sulphuric acid (H₂SO₄)'],
    [
      ['नाइट्रिक अम्ल (HNO₃)', 'Nitric acid (HNO₃)'],
      ['हाइड्रोक्लोरिक अम्ल (HCl)', 'Hydrochloric acid (HCl)'],
      ['कार्बोनिक अम्ल (H₂CO₃)', 'Carbonic acid (H₂CO₃)'],
    ],
    'सल्फ्यूरिक अम्ल (H₂SO₄, जिसे पहले ऑयल ऑफ विट्रियॉल भी कहते थे) किसी देश के औद्योगिक विकास का सूचक माना जाता है।',
    'Sulphuric acid (H₂SO₄, traditionally Oil of Vitriol) is called the King of Chemicals because of its widespread industrial applications.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'जब कोई सक्रिय धातु (जैसे जिंक) किसी तनु अम्ल (जैसे H₂SO₄ या HCl) से अभिक्रिया करती है, तो कौन-सी गैस निकलती है जो जलती तीली के पास "पॉप" ध्वनि से जलती है?',
    'Which gas is evolved when an active metal like zinc reacts with dilute HCl or H₂SO₄, burning with a "pop" sound?',
    ['हाइड्रोजन गैस (H₂)', 'Hydrogen gas (H₂)'],
    [
      ['ऑक्सीजन गैस (O₂)', 'Oxygen gas (O₂)'],
      ['कार्बन डाइऑक्साइड (CO₂)', 'Carbon dioxide (CO₂)'],
      ['सल्फर डाइऑक्साइड (SO₂)', 'Sulphur dioxide (SO₂)'],
    ],
    'Zn + 2HCl → ZnCl₂ + H₂↑। जलती हुई माचिस की तीली पास लाने पर H₂ गैस पॉप की आवाज के साथ जलती है।',
    'Active metals displace hydrogen from dilute acids (Zn + 2HCl → ZnCl₂ + H₂↑), which burns with a characteristic pop sound.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'सांद्र अम्ल को तनु (Dilute) बनाते समय हमेशा क्या सावधानी बरतनी चाहिए?',
    'What safety precaution must always be followed while diluting a concentrated mineral acid?',
    ['सदैव जल में धीरे-धीरे हिलाते हुए अम्ल मिलाना चाहिए, न कि अम्ल में जल', 'Always add acid slowly to water with constant stirring, never water to acid'],
    [
      ['सदैव अम्ल में तेजी से ठंडा जल डालना चाहिए', 'Always pour water rapidly into acid'],
      ['दोनों को एक साथ उबलते हुए मिलाना चाहिए', 'Mix both while boiling'],
      ['कोई सावधानी आवश्यक नहीं है', 'No precaution is required'],
    ],
    'जल में अम्ल घुलना अत्यधिक ऊष्माक्षेपी प्रक्रिया है; अम्ल में पानी डालने पर अचानक अधिक ऊष्मा से मिश्रण उछलकर बाहर आ सकता है और काँच टूट सकता है।',
    'Diluting concentrated acid is highly exothermic; adding water to acid can cause violent splashing and acid burns.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'खाने का सोडा (बेकिंग सोडा) और धोने का सोडा (वाशिंग सोडा) के रासायनिक नाम एवं सूत्र क्रमशः क्या हैं?',
    'What are the chemical names and formulas of Baking Soda and Washing Soda respectively?',
    ['सोडियम बाइकार्बोनेट (NaHCO₃) और सोडियम कार्बोनेट डेकाहाइड्रेट (Na₂CO₃·10H₂O)', 'Sodium hydrogen carbonate (NaHCO₃) and Sodium carbonate decahydrate (Na₂CO₃·10H₂O)'],
    [
      ['Na₂CO₃·10H₂O और NaHCO₃', 'Na₂CO₃·10H₂O and NaHCO₃'],
      ['NaOH और CaOCl₂', 'NaOH and CaOCl₂'],
      ['CaSO₄·½H₂O और NaCl', 'CaSO₄·½H₂O and NaCl'],
    ],
    'बेकिंग सोडा (NaHCO₃) केक/पकोड़े फुलाने और सोडा-एसिड अग्निशामक में काम आता है; वाशिंग सोडा (Na₂CO₃·10H₂O) जल की स्थायी कठोरता दूर करने में काम आता है।',
    'Baking soda is NaHCO₃ (used in cooking and fire extinguishers), and washing soda is Na₂CO₃·10H₂O (used to soften hard water).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'विरंजक चूर्ण (Bleaching Powder) का रासायनिक सूत्र क्या है और इसे कैसे बनाया जाता है?',
    'What is the chemical formula of Bleaching Powder and how is it manufactured?',
    ['CaOCl₂ (कैल्शियम ऑक्सीक्लोराइड); शुष्क बुझे चूने पर क्लोरीन गैस प्रवाहित करके', 'CaOCl₂ (Calcium oxychloride); by passing chlorine gas over dry slaked lime'],
    [
      ['CaCl₂; बिना बुझे चूने और HCl से', 'CaCl₂; from quicklime and HCl'],
      ['NaOCl; नमक और सल्फ्यूरिक अम्ल से', 'NaOCl; from salt and H₂SO₄'],
      ['CaCO₃; चूना पत्थर को गर्म करके', 'CaCO₃; by heating limestone'],
    ],
    'Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O। इसका उपयोग पेयजल को कीटाणुरहित (रोगाणुनाशी) बनाने और वस्त्र/कागज उद्योग में विरंजन के लिए होता है।',
    'Dry slaked lime reacts with chlorine: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O. It is widely used for disinfecting water and bleaching textiles.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'प्लास्टर ऑफ पेरिस (POP) का रासायनिक सूत्र क्या है और इसे किस तापमान पर जिप्सम को गर्म करके प्राप्त किया जाता है?',
    'What is the chemical formula of Plaster of Paris (POP), and by heating gypsum at what temperature is it prepared?',
    ['CaSO₄·½H₂O; जिप्सम (CaSO₄·2H₂O) को 373 K (100°C) पर गर्म करके', 'CaSO₄·½H₂O; by heating gypsum (CaSO₄·2H₂O) at 373 K (100°C)'],
    [
      ['CaSO₄·2H₂O; 500°C पर गर्म करके', 'CaSO₄·2H₂O; heated at 500°C'],
      ['CaCO₃·½H₂O; 100°C पर', 'CaCO₃·½H₂O; at 100°C'],
      ['CuSO₄·5H₂O; 200°C पर', 'CuSO₄·5H₂O; at 200°C'],
    ],
    'जिप्सम को 373 K पर नियंत्रित रूप से गर्म करने पर जल का तीन-चौथाई भाग निकलकर कैल्शियम सल्फेट हेमीहाइड्रेट (POP) बनता है, जो टूटी हड्डियों पर प्लास्टर चढ़ाने के काम आता है।',
    'Heating gypsum at 373 K gives calcium sulphate hemihydrate (CaSO₄·½H₂O), which sets into hard gypsum when mixed with water.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'बेकिंग पाउडर (Baking powder) किन दो प्रमुख घटकों का मिश्रण होता है?',
    'Baking powder is a mixture of which two main components?',
    ['बेकिंग सोडा (NaHCO₃) और एक हल्का खाद्य अम्ल (जैसे टार्टरिक अम्ल)', 'Baking soda (NaHCO₃) and a mild edible acid (such as tartaric acid)'],
    [
      ['वाशिंग सोडा और सिरका', 'Washing soda and vinegar'],
      ['कास्टिक सोडा और नींबू का रस', 'Caustic soda and lemon juice'],
      ['नमक और चीनी', 'Common salt and sugar'],
    ],
    'गर्म करने पर NaHCO₃ से बनने वाले कड़वे Na₂CO₃ को बेअसर करने हेतु टार्टरिक अम्ल मिलाया जाता है; मुक्त CO₂ गैस केक को स्पंजी व मुलायम बनाती है।',
    'Tartaric acid neutralizes bitter sodium carbonate formed during baking, while released CO₂ makes cakes soft and spongy.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'क्लोर-क्षार प्रक्रिया (Chlor-alkali process) में सोडियम क्लोराइड के जलीय विलयन (ब्राइन) के विद्युत अपघटन से कौन-से तीन उपयोगी उत्पाद प्राप्त होते हैं?',
    'In the chlor-alkali process, electrolysis of aqueous sodium chloride (brine) yields which three products?',
    ['सोडियम हाइड्रॉक्साइड (NaOH), क्लोरीन गैस (Cl₂) और हाइड्रोजन गैस (H₂)', 'Sodium hydroxide (NaOH), Chlorine gas (Cl₂), and Hydrogen gas (H₂)'],
    [
      ['सोडियम धातु, ऑक्सीजन और HCl', 'Sodium metal, Oxygen, and HCl'],
      ['वाशिंग सोडा, CO₂ और जल', 'Washing soda, CO₂, and water'],
      ['केवल NaCl और H₂O', 'Only NaCl and H₂O'],
    ],
    '2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [एनोड पर] + H₂(g) [कैथोड पर]।',
    'Electrolysis of brine forms Cl₂ at the anode, H₂ at the cathode, and NaOH solution near the cathode.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'यदि किसी विलयन का pH मान 3 से बदलकर 5 हो जाता है, तो उसकी हाइड्रोजन आयन सांद्रता [H⁺] में क्या परिवर्तन हुआ है?',
    'If the pH of a solution increases from 3 to 5, how does its hydrogen ion concentration [H⁺] change?',
    ['100 गुना घट गई है', 'Decreases by 100 times'],
    [
      ['100 गुना बढ़ गई है', 'Increases by 100 times'],
      ['2 गुना घट गई है', 'Decreases by 2 times'],
      ['10 गुना बढ़ गई है', 'Increases by 10 times'],
    ],
    'pH पैमाना लघुगणकीय (Logarithmic) है। प्रत्येक 1 इकाई pH बढ़ने पर [H⁺] 10 गुना घटती है; अतः 2 इकाई वृद्धि (3→5) पर [H⁺] 10² = 100 गुना कम होगी।',
    'Because the pH scale is logarithmic, an increase of 2 pH units corresponds to a 10² = 100-fold decrease in [H⁺] concentration.',
    'HARD',
    { formulaHi: '[H⁺] = 10⁻ᵖᴴ', formulaEn: '[H⁺] = 10⁻ᵖᴴ' }
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'अमोनियम क्लोराइड (NH₄Cl) के जलीय विलयन की प्रकृति कैसी होती है और इसका pH लगभग कितना होगा?',
    'What is the nature of an aqueous solution of Ammonium Chloride (NH₄Cl), and its approximate pH?',
    ['अम्लीय प्रकृति; pH 7 से कम', 'Acidic; pH less than 7'],
    [
      ['क्षारीय प्रकृति; pH 7 से अधिक', 'Basic; pH greater than 7'],
      ['बिल्कुल उदासीन; pH = 7', 'Strictly neutral; pH = 7'],
      ['क्षारीय प्रकृति; pH = 14', 'Strongly basic; pH = 14'],
    ],
    'NH₄Cl एक प्रबल अम्ल (HCl) और दुर्बल क्षार (NH₄OH) से बना लवण है, अतः इसका जलीय विलयन अम्लीय (pH < 7) होता है।',
    'NH₄Cl is a salt of a strong acid (HCl) and a weak base (NH₄OH), making its aqueous solution acidic (pH < 7).',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'नीला थोथा (Blue vitriol) और हरा कसीस (Green vitriol) के रासायनिक सूत्र क्रमशः क्या हैं?',
    'What are the chemical formulas of Blue Vitriol and Green Vitriol respectively?',
    ['CuSO₄·5H₂O और FeSO₄·7H₂O', 'CuSO₄·5H₂O and FeSO₄·7H₂O'],
    [
      ['FeSO₄·7H₂O और CuSO₄·5H₂O', 'FeSO₄·7H₂O and CuSO₄·5H₂O'],
      ['ZnSO₄·7H₂O और MgSO₄·7H₂O', 'ZnSO₄·7H₂O and MgSO₄·7H₂O'],
      ['Na₂SO₄·10H₂O और CaSO₄·2H₂O', 'Na₂SO₄·10H₂O and CaSO₄·2H₂O'],
    ],
    'क्रिस्टलन जल युक्त कॉपर सल्फेट (CuSO₄·5H₂O) नीला थोथा, फेरस सल्फेट (FeSO₄·7H₂O) हरा कसीस, तथा जिंक सल्फेट (ZnSO₄·7H₂O) सफेद थोथा कहलाता है।',
    'Blue vitriol is hydrated copper(II) sulphate (CuSO₄·5H₂O) and green vitriol is hydrated iron(II) sulphate (FeSO₄·7H₂O).',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'कौन-सी एकमात्र धातु कमरे के तापमान पर द्रव अवस्था में पाई जाती है?',
    'Which is the only metal that exists in a liquid state at room temperature?',
    ['पारा (मर्करी, Hg)', 'Mercury (Hg)'],
    [
      ['ब्रोमीन (Br)', 'Bromine (Br)'],
      ['गैलियम (Ga)', 'Gallium (Ga)'],
      ['सोडियम (Na)', 'Sodium (Na)'],
    ],
    'पारा (Hg) सामान्य कमरे के ताप (~25°C) पर द्रव धातु है; गैलियम व सीज़ियम हथेली पर (~30°C) पिघलते हैं, जबकि ब्रोमीन एकमात्र द्रव अधातु है।',
    'Mercury (Hg) is liquid at room temperature (~25°C), while Bromine is the only liquid non-metal at room temperature.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'कमरे के तापमान पर द्रव अवस्था में पाई जाने वाली एकमात्र अधातु (Non-metal) कौन-सी है?',
    'Which is the only non-metal that is liquid at room temperature?',
    ['ब्रोमीन (Br₂)', 'Bromine (Br₂)'],
    [
      ['आयोडीन (I₂)', 'Iodine (I₂)'],
      ['पारा (Hg)', 'Mercury (Hg)'],
      ['क्लोरीन (Cl₂)', 'Chlorine (Cl₂)'],
    ],
    'हैलोजन समूह की ब्रोमीन (परमाणु क्रमांक 35) कमरे के ताप पर गहरे लाल-भूरे रंग की द्रव अधातु है।',
    'Bromine (atomic number 35) is a dark reddish-brown liquid non-metal at room temperature.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'निम्नलिखित में से कौन-सी अधातु होते हुए भी धात्विक चमक (Lustre) रखती है?',
    'Which non-metal possesses a shiny metallic lustre?',
    ['आयोडीन (और ग्रेफाइट)', 'Iodine (and Graphite)'],
    [
      ['सल्फर (गंधक)', 'Sulphur'],
      ['फॉस्फोरस', 'Phosphorus'],
      ['नाइट्रोजन', 'Nitrogen'],
    ],
    'सामान्यतः अधातुएँ चमकहीन होती हैं, परंतु आयोडीन (बैंगनी-काला क्रिस्टल) और कार्बन का अपररूप ग्रेफाइट अपवादस्वरूप चमकदार होते हैं।',
    'Although non-metals are generally dull, iodine crystals and graphite show distinct lustre.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'कौन-सी दो धातुएँ इतनी मुलायम होती हैं कि उन्हें चाकू से आसानी से काटा जा सकता है?',
    'Which metals are soft enough to be easily cut with a kitchen knife?',
    ['सोडियम, पोटैशियम और लिथियम (क्षार धातुएँ)', 'Sodium, Potassium, and Lithium (alkali metals)'],
    [
      ['लोहा और ताँबा', 'Iron and Copper'],
      ['जस्ता और एल्युमिनियम', 'Zinc and Aluminium'],
      ['चाँदी और प्लैटिनम', 'Silver and Platinum'],
    ],
    'लिथियम, सोडियम और पोटैशियम का घनत्व कम और धात्विक बंध दुर्बल होने के कारण ये अत्यंत मुलायम होती हैं।',
    'Alkali metals like Li, Na, and K have weak metallic bonding and low density, making them soft enough to slice with a knife.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'सर्वाधिक आघातवर्ध्य (Malleable) और सर्वाधिक तन्य (Ductile) धातु कौन-सी है?',
    'Which metal is the most malleable and most ductile?',
    ['सोना (Gold, Au)', 'Gold (Au)'],
    [
      ['लोहा (Fe)', 'Iron (Fe)'],
      ['एल्युमिनियम (Al)', 'Aluminium (Al)'],
      ['जस्ता (Zn)', 'Zinc (Zn)'],
    ],
    '1 ग्राम सोने से लगभग 2 किलोमीटर लंबा तार खींचा जा सकता है और इसे पीटकर अत्यंत पतली पन्नी (वर्क) बनाई जा सकती है; इसके बाद चाँदी का स्थान है।',
    'Gold is the most malleable and ductile metal—1 gram can be drawn into a wire ~2 km long.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'भू-पर्पटी (Earth’s crust) में भार के अनुसार सर्वाधिक मात्रा में पाई जाने वाली धातु कौन-सी है?',
    'Which is the most abundant metal by mass in the Earth’s crust?',
    ['एल्युमिनियम (Al)', 'Aluminium (Al)'],
    [
      ['लोहा (Fe)', 'Iron (Fe)'],
      ['कैल्शियम (Ca)', 'Calcium (Ca)'],
      ['सोना (Au)', 'Gold (Au)'],
    ],
    'भू-पर्पटी में सर्वाधिक तत्व ऑक्सीजन (~46.6%), दूसरा सिलिकॉन (~27.7%), और सर्वाधिक पाई जाने वाली धातु एल्युमिनियम (~8.1%) है (चौथे स्थान पर लोहा ~5%)।',
    'Oxygen (~46.6%) and silicon (~27.7%) top all elements in Earth’s crust, while Aluminium (~8.1%) is the most abundant metal, followed by Iron.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'बॉक्साइट (Bauxite) और हेमेटाइट (Haematite) क्रमशः किन धातुओं के प्रमुख अयस्क हैं?',
    'Bauxite and Haematite are the chief ores of which metals respectively?',
    ['एल्युमिनियम और लोहा', 'Aluminium and Iron'],
    [
      ['लोहा और एल्युमिनियम', 'Iron and Aluminium'],
      ['ताँबा और जस्ता', 'Copper and Zinc'],
      ['पारा और सीसा', 'Mercury and Lead'],
    ],
    'बॉक्साइट (Al₂O₃·2H₂O) एल्युमिनियम का मुख्य अयस्क है, तथा हेमेटाइट (Fe₂O₃) व मैग्नेटाइट (Fe₃O₄) लोहे के प्रमुख अयस्क हैं।',
    'Bauxite (Al₂O₃·2H₂O) is the principal ore of aluminium, and haematite (Fe₂O₃) is the primary ore of iron.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'सिनेबार (Cinnabar, HgS) और गैलेना (Galena, PbS) क्रमशः किन धातुओं के अयस्क हैं?',
    'Cinnabar (HgS) and Galena (PbS) are ores of which metals respectively?',
    ['पारा (Mercury) और सीसा (Lead)', 'Mercury and Lead'],
    [
      ['जस्ता और ताँबा', 'Zinc and Copper'],
      ['चाँदी और सोना', 'Silver and Gold'],
      ['टिन और मैग्नीशियम', 'Tin and Magnesium'],
    ],
    'सिनेबार (HgS) पारे का तथा गैलेना (PbS) सीसे (लेड) का प्रमुख सल्फाइड अयस्क है।',
    'Cinnabar (HgS) is the main ore of mercury, and galena (PbS) is the principal ore of lead.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'निम्नलिखित धातुओं में से कौन-सी दो धातुएँ उभयधर्मी ऑक्साइड (Amphoteric oxides — जो अम्ल और क्षार दोनों से अभिक्रिया करते हैं) बनाती हैं?',
    'Which metals form amphoteric oxides (oxides reacting with both acids and bases)?',
    ['एल्युमिनियम और जिंक (Al₂O₃, ZnO)', 'Aluminium and Zinc (Al₂O₃, ZnO)'],
    [
      ['सोडियम और पोटैशियम', 'Sodium and Potassium'],
      ['कैल्शियम और मैग्नीशियम', 'Calcium and Magnesium'],
      ['कार्बन और सल्फर', 'Carbon and Sulphur'],
    ],
    'सामान्यतः धातु ऑक्साइड क्षारीय होते हैं, किंतु Al₂O₃ और ZnO उभयधर्मी होते हैं जो अम्ल व क्षार दोनों से क्रिया कर लवण व जल बनाते हैं।',
    'While most metal oxides are basic, Al₂O₃ and ZnO are amphoteric, reacting with both acids and alkalis to form salt and water.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'धातुओं की सक्रियता श्रेणी (Reactivity series) के अनुसार निम्नलिखित का घटता हुआ सही क्रम कौन-सा है?',
    'According to the metal reactivity series, which is the correct decreasing order of reactivity?',
    ['K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au', 'K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au'],
    [
      ['Na > K > Fe > Zn > Cu > Au', 'Na > K > Fe > Zn > Cu > Au'],
      ['Au > Ag > Cu > Fe > Zn > Na', 'Au > Ag > Cu > Fe > Zn > Na'],
      ['Fe > Al > Mg > Zn > Ca > K', 'Fe > Al > Mg > Zn > Ca > K'],
    ],
    'पोटैशियम और सोडियम सर्वाधिक सक्रिय हैं, जबकि ताँबा, चाँदी, सोना और प्लैटिनम हाइड्रोजन से नीचे स्थित सबसे कम सक्रिय (उत्कृष्ट) धातुएँ हैं।',
    'Potassium and sodium sit at the top as most reactive, whereas copper, silver, and gold lie below hydrogen as least reactive.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'ताँबा और जस्ता (Cu + Zn) के मिश्रण से कौन-सी मिश्रधातु बनती है, जबकि ताँबा और टिन (Cu + Sn) से कौन-सी बनती है?',
    'Which alloys are formed from Copper + Zinc and Copper + Tin respectively?',
    ['पीतल (Brass) और काँसा (Bronze)', 'Brass and Bronze'],
    [
      ['काँसा (Bronze) और पीतल (Brass)', 'Bronze and Brass'],
      ['जर्मन सिल्वर और सोल्डर', 'German Silver and Solder'],
      ['स्टेनलेस स्टील और ड्यूरालुमिन', 'Stainless Steel and Duralumin'],
    ],
    'स्मरण सूत्र: "पी-ता-जी" (पीतल = ताँबा + जिंक) तथा "काँ-ता-टी" (काँसा = ताँबा + टिन)।',
    'Brass is an alloy of Copper and Zinc (~70% Cu, ~30% Zn); Bronze is an alloy of Copper and Tin.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'जंग-रोधी इस्पात (Stainless Steel) बनाने के लिए लोहे (Fe) और कार्बन के साथ मुख्यतः कौन-सी धातुएँ मिलाई जाती हैं?',
    'Which metals are chiefly alloyed with iron (and trace carbon) to manufacture stainless steel?',
    ['क्रोमियम (Cr) और निकल (Ni)', 'Chromium (Cr) and Nickel (Ni)'],
    [
      ['ताँबा और जस्ता', 'Copper and Zinc'],
      ['सीसा और टिन', 'Lead and Tin'],
      ['पारा और चाँदी', 'Mercury and Silver'],
    ],
    'स्टेनलेस स्टील (Fe + Cr + Ni + कम C) में क्रोमियम संक्षारण रोकता है और निकल कठोरता व चमक बढ़ाता है; इसमें जंग नहीं लगता।',
    'Stainless steel combines iron with chromium (which resists rusting) and nickel (for strength and lustre).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'बिजली के तारों को जोड़ने वाला टांका (Solder) किन दो धातुओं की मिश्रधातु है और इसका गलनांक कैसा होता है?',
    'Solder, used for joining electrical wires, is an alloy of which two metals, and how is its melting point?',
    ['सीसा (Pb) और टिन (Sn); कम गलनांक', 'Lead (Pb) and Tin (Sn); low melting point'],
    [
      ['ताँबा और टिन; उच्च गलनांक', 'Copper and Tin; high melting point'],
      ['लोहा और क्रोमियम; उच्च गलनांक', 'Iron and Chromium; high melting point'],
      ['एल्युमिनियम और मैग्नीशियम; उच्च गलनांक', 'Aluminium and Magnesium; high melting point'],
    ],
    'सीसा और टिन की मिश्रधातु (सोल्डर) का गलनांक शुद्ध सीसे और टिन दोनों से कम होता है, जिससे इलेक्ट्रॉनिक पुर्जों पर आसानी से टांका लग जाता है।',
    'Solder (Pb + Sn) has a low melting point, making it ideal for welding electrical wires and circuit joints.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    '"जर्मन सिल्वर" नामक मिश्रधातु में चाँदी (Silver) का प्रतिशत कितना होता है?',
    'What is the percentage of actual Silver (Ag) in the alloy known as "German Silver"?',
    ['0% (चाँदी बिल्कुल नहीं होती)', '0% (it contains no silver at all)'],
    [
      ['50% चाँदी', '50% silver'],
      ['25% चाँदी', '25% silver'],
      ['80% चाँदी', '80% silver'],
    ],
    'जर्मन सिल्वर ताँबा (Cu ~60%), जस्ता (Zn ~20%) और निकल (Ni ~20%) की मिश्रधातु है; चाँदी जैसी चमक के कारण इसे जर्मन सिल्वर कहते हैं पर इसमें Ag 0% होता है।',
    'German Silver (nickel silver) is an alloy of Copper, Zinc, and Nickel—despite its name and silvery look, it contains 0% silver.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'शुद्ध सोना 24 कैरेट का होता है। आभूषण बनाने में प्रयुक्त 22 कैरेट सोने में शुद्ध सोने के साथ ताँबा या चाँदी क्यों मिलाई जाती है?',
    'Pure 24-carat gold is very soft. Why is copper or silver alloyed to make 22-carat jewellery gold?',
    ['शुद्ध सोना बहुत नरम होता है; मिश्रधातु बनाने से कठोरता व टिकाऊपन बढ़ता है', 'Pure gold is too soft; alloying increases hardness and durability'],
    [
      ['ताकि सोने का रंग काला हो जाए', 'To turn gold black'],
      ['ताकि सोना पानी में तैर सके', 'To make gold float on water'],
      ['ताकि सोने में जंग लग सके', 'To make gold rust'],
    ],
    '22 कैरेट सोने में 22 भाग शुद्ध सोना (~91.6%) और 2 भाग ताँबा या चाँदी होती है, जिससे आभूषण मजबूत बनते हैं और आकार नहीं बिगड़ता।',
    '22-carat gold contains 22 parts pure gold (~91.6%) and 2 parts Cu/Ag, adding strength so ornaments hold their shape.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'अमलगम (Amalgam) किसे कहते हैं?',
    'What is an "Amalgam"?',
    ['ऐसी मिश्रधातु जिसमें एक घटक सदैव पारा (Mercury) हो', 'An alloy in which one of the constituent metals is Mercury (Hg)'],
    [
      ['लोहे और कार्बन की मिश्रधातु', 'Alloy of iron and carbon'],
      ['सोने और चाँदी का शुद्ध रूप', 'Pure mixture of gold and silver'],
      ['दो अधातुओं का मिश्रण', 'Mixture of two non-metals'],
    ],
    'पारे के साथ किसी अन्य धातु (जैसे चाँदी-टिन दंत अमलगम, सोडियम अमलगम) के मिश्रण को अमलगम कहते हैं। लोहा पारे के साथ अमलगम नहीं बनाता।',
    'Any alloy containing mercury as one component is called an amalgam (e.g., dental amalgam). Iron does not form an amalgam with mercury.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'हवाई जहाज के ढाँचे और हल्के मजबूत पुर्जे बनाने के लिए प्रयुक्त "ड्यूरालुमिन" (Duralumin) मुख्यतः किस धातु पर आधारित मिश्रधातु है?',
    'Duralumin, used for making aircraft frames due to its lightness and strength, is mainly an alloy of:',
    ['एल्युमिनियम (Al + Cu + Mg + Mn)', 'Aluminium (Al with Cu, Mg, Mn)'],
    [
      ['लोहा', 'Iron'],
      ['सीसा', 'Lead'],
      ['पारा', 'Mercury'],
    ],
    'ड्यूरालुमिन (~95% Al, ~4% Cu, 0.5% Mg, 0.5% Mn) हल्का होने के साथ-साथ अत्यंत मजबूत और संक्षारणरोधी है।',
    'Duralumin is a lightweight, high-strength aluminium alloy containing copper, magnesium, and manganese.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'माचिस की तीली के सिरे पर तथा माचिस की डिब्बी की रगड़ने वाली सतह पर क्रमशः किन तत्वों के यौगिक होते हैं?',
    'Which phosphorus forms/compounds are used on the matchstick head and the striking surface of a safety matchbox respectively?',
    ['तीली पर एंटीमनी ट्राइसल्फाइड व पोटैशियम क्लोरेट; डिब्बी की सतह पर लाल फॉस्फोरस', 'Match head: Sb₂S₃ & KClO₃; Striking surface: Red phosphorus'],
    [
      ['तीली पर सफेद फॉस्फोरस; डिब्बी पर सल्फर', 'Match head: White phosphorus; Box: Sulphur'],
      ['तीली पर सोडियम; डिब्बी पर ग्रेफाइट', 'Match head: Sodium; Box: Graphite'],
      ['दोनों पर केवल सफेद फॉस्फोरस', 'White phosphorus on both'],
    ],
    'सुरक्षित माचिस में विषैले सफेद फॉस्फोरस की जगह लाल फॉस्फोरस डिब्बी पर लगाया जाता है, जो रगड़ने पर तीली के KClO₃ के साथ जल उठता है।',
    'Safety matchboxes use non-toxic red phosphorus on the striking strip, while the match head holds KClO₃ and Sb₂S₃.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'सल्फाइड अयस्कों को वायु की उपस्थिति में गर्म करके ऑक्साइड में बदलने की प्रक्रिया क्या कहलाती है, जबकि कार्बोनेट अयस्कों को सीमित वायु में गर्म करना क्या कहलाता है?',
    'Heating sulphide ores in excess air and heating carbonate ores in limited/absent air are called respectively:',
    ['भर्जन (Roasting) और निस्तापन (Calcination)', 'Roasting and Calcination'],
    [
      ['निस्तापन और भर्जन', 'Calcination and Roasting'],
      ['प्रगलन और शोधन', 'Smelting and Refining'],
      ['अपचयन और संक्षारण', 'Reduction and Corrosion'],
    ],
    'सल्फाइड अयस्क + अधिक O₂ → भर्जन (SO₂ निकलती है); कार्बोनेट अयस्क + सीमित/अनुपस्थित वायु → निस्तापन (CO₂ निकलती है)।',
    'Roasting heats sulphide ores in excess air; Calcination heats carbonate ores strongly in limited air.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'एनोडीकरण (Anodizing) प्रक्रिया द्वारा किस धातु पर ऑक्साइड की मोटी संरक्षक परत चढ़ाई जाती है?',
    'By the process of anodizing, a thick protective oxide layer is formed on which metal?',
    ['एल्युमिनियम (Al₂O₃ की परत)', 'Aluminium (Al₂O₃ layer)'],
    [
      ['लोहा', 'Iron'],
      ['सोना', 'Gold'],
      ['पारा', 'Mercury'],
    ],
    'एल्युमिनियम के बर्तनों व खिड़की के फ्रेम पर तनु सल्फ्यूरिक अम्ल में विद्युत अपघटन द्वारा एल्युमिनियम ऑक्साइड की मोटी परत बनाई जाती है जो संक्षारण रोकती है और रँगी भी जा सकती है।',
    'Anodizing thickens the natural Al₂O₃ coating on aluminium via electrolysis, preventing corrosion and allowing attractive dyeing.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'कार्बन में सर्वाधिक संख्या में यौगिक बनाने की अद्वितीय क्षमता किन दो प्रमुख गुणों के कारण होती है?',
    'Carbon forms millions of compounds primarily due to which two unique properties?',
    ['श्रृंखलन (Catenation) और चतुःसंयोजकता (Tetravalency)', 'Catenation and Tetravalency'],
    [
      ['आयनिक बंध और उच्च घनत्व', 'Ionic bonding and high density'],
      ['धात्विक चमक और तन्यता', 'Metallic lustre and ductility'],
      ['रेडियोधर्मिता और शून्यता', 'Radioactivity and zero valency'],
    ],
    'कार्बन परमाणु (संयोजकता 4) अन्य कार्बन परमाणुओं से एकल, द्वि या त्रि-बंध द्वारा लंबी खुली व बंद श्रृंखलाएँ बना सकते हैं (श्रृंखलन)।',
    'Carbon has valency 4 (tetravalency) and strongly bonds with other carbon atoms into chains and rings (catenation).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'हीरा और ग्रेफाइट दोनों शुद्ध कार्बन के क्रिस्टलीय अपररूप हैं, फिर भी हीरा कठोर व विद्युत का कुचालक तथा ग्रेफाइट मुलायम व विद्युत का सुचालक क्यों होता है?',
    'Both diamond and graphite are pure carbon allotropes, yet diamond is hard and non-conducting while graphite is soft and conducts electricity. Why?',
    ['हीरे में प्रत्येक कार्बन 4 अन्य से त्रिविमीय जुड़ा है (कोई मुक्त इलेक्ट्रॉन नहीं), जबकि ग्रेफाइट में परतदार षट्कोणीय संरचना में प्रत्येक कार्बन पर 1 मुक्त इलेक्ट्रॉन होता है', 'In diamond each C bonds tetrahedrally to 4 others (no free electrons); in graphite each C bonds to 3 others in sliding layers leaving 1 delocalized electron'],
    [
      ['ग्रेफाइट में धातु मिलाई जाती है', 'Graphite contains mixed metals'],
      ['हीरे में प्रोटॉन अधिक होते हैं', 'Diamond has more protons'],
      ['ग्रेफाइट का परमाणु क्रमांक अलग है', 'Graphite has a different atomic number'],
    ],
    'ग्रेफाइट की षट्कोणीय परतें कमजोर वान डर वाल्स बलों से जुड़ी होकर फिसलती हैं (अतः स्नेहक व पेंसिल लेड में उपयोगी) और विस्थानीकृत इलेक्ट्रॉन चालकता देते हैं।',
    'Diamond’s rigid 3D tetrahedral network lacks free electrons; graphite’s 2D layers slide easily and carry delocalized π-electrons.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'फुलरीन (Fullerene, C₆₀ — बकमिंस्टरफुलरीन) की संरचना किसके समान होती है?',
    'The molecular structure of Buckminsterfullerene (C₆₀) resembles which familiar object?',
    ['फुटबॉल (जियोडेसिक गुंबद, 20 षट्कोण और 12 पंचकोण)', 'A soccer ball / geodesic dome (20 hexagons and 12 pentagons)'],
    [
      ['सीधी बेलनाकार छड़', 'A straight cylindrical rod'],
      ['सपाट आयताकार चादर', 'A flat rectangular sheet'],
      ['एकल पिरामिड', 'A single pyramid'],
    ],
    'कार्बन का तीसरा क्रिस्टलीय अपररूप C₆₀ अमेरिकी वास्तुकार बकमिंस्टर फुलर के जियोडेसिक गुंबद जैसा फुटबॉल आकार रखता है।',
    'C₆₀ Buckminsterfullerene forms a hollow spherical cage of 20 hexagons and 12 pentagons resembling a football.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'संतृप्त हाइड्रोकार्बन (एल्केन), एल्कीन और एल्काइन के सामान्य रासायनिक सूत्र क्रमशः क्या हैं?',
    'What are the general formulas of Alkanes, Alkenes, and Alkynes respectively?',
    ['CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂'],
    [
      ['CₙH₂ₙ, CₙH₂ₙ₊₂, CₙH₂ₙ₋₂', 'CₙH₂ₙ, CₙH₂ₙ₊₂, CₙH₂ₙ₋₂'],
      ['CₙH₂ₙ₋₂, CₙH₂ₙ, CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂, CₙH₂ₙ, CₙH₂ₙ₊₂'],
      ['CₙHₙ, CₙH₂ₙ, CₙH₃ₙ', 'CₙHₙ, CₙH₂ₙ, CₙH₃ₙ'],
    ],
    'एल्केन में सभी एकल बंध (CₙH₂ₙ₊₂, जैसे मीथेन CH₄), एल्कीन में द्वि-बंध (CₙH₂ₙ, जैसे एथीन C₂H₄), और एल्काइन में त्रि-बंध (CₙH₂ₙ₋₂, जैसे एथाइन C₂H₂) होते हैं।',
    'Alkanes (single bonds): CₙH₂ₙ₊₂; Alkenes (double bond): CₙH₂ₙ; Alkynes (triple bond): CₙH₂ₙ₋₂.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'सजातीय श्रेणी (Homologous series) के दो क्रमागत सदस्यों के बीच अणुसूत्र और अणुभार में क्रमशः कितना अंतर होता है?',
    'What is the difference in molecular formula and molecular mass between two consecutive members of a homologous series?',
    ['-CH₂- समूह और 14 u', '-CH₂- group and 14 u'],
    [
      ['-CH₃ समूह और 15 u', '-CH₃ group and 15 u'],
      ['-CH₂- समूह और 12 u', '-CH₂- group and 12 u'],
      ['-C₂H₄- समूह और 28 u', '-C₂H₄- group and 28 u'],
    ],
    'जैसे CH₄ (16 u) और C₂H₆ (30 u) में अंतर CH₂ (12 + 2×1 = 14 u) का है। एक ही सजातीय श्रेणी के सदस्यों के रासायनिक गुण समान होते हैं।',
    'Consecutive homologues differ by a -CH₂- unit, which corresponds to 12 + 2(1) = 14 atomic mass units.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'प्रयोगशाला में संश्लेषित होने वाला प्रथम कार्बनिक यौगिक कौन-सा था और इसे 1828 में किसने बनाया था?',
    'Which was the first organic compound synthesized artificially in a laboratory (1828), and by whom?',
    ['यूरिया (NH₂CONH₂); फ्रेडरिक व्होलर द्वारा', 'Urea (NH₂CONH₂); by Friedrich Wohler'],
    [
      ['मीथेन; बर्जीलियस द्वारा', 'Methane; by Berzelius'],
      ['एसिटिक अम्ल; कोल्बे द्वारा', 'Acetic acid; by Kolbe'],
      ['एथेनॉल; पाश्चर द्वारा', 'Ethanol; by Pasteur'],
    ],
    'फ्रेडरिक व्होलर ने 1828 में अकार्बनिक यौगिक अमोनियम साइनेट (NH₄CNO) को गर्म करके यूरिया बनाया और जैव-शक्ति सिद्धांत (Vital force theory) का खंडन किया।',
    'Friedrich Wohler synthesized urea from inorganic ammonium cyanate in 1828, disproving the Vital Force Theory.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'फलों को कृत्रिम रूप से पकाने तथा ऑक्सी-एसिटिलीन गैस वेल्डिंग में किस असंतृप्त हाइड्रोकार्बन का उपयोग किया जाता है?',
    'Which unsaturated hydrocarbon is used in oxy-acetylene welding and artificial ripening (from calcium carbide)?',
    ['एसिटिलीन / एथाइन (C₂H₂) एवं एथिलीन (C₂H₄)', 'Acetylene / Ethyne (C₂H₂) for welding (and Ethylene for ripening)'],
    [
      ['मीथेन (CH₄)', 'Methane (CH₄)'],
      ['प्रोपेन (C₃H₈)', 'Propane (C₃H₈)'],
      ['बेंजीन (C₆H₆)', 'Benzene (C₆H₆)'],
    ],
    'ऑक्सी-एसिटिलीन वेल्डिंग में एथाइन (C₂H₂) से अत्यंत उच्च ताप मिलता है; प्राकृतिक व मानक फल पकाने वाला हार्मोन गैस एथिलीन (C₂H₄) है (कैल्शियम कार्बाइड नमी से C₂H₂ बनाता है)।',
    'Ethyne (acetylene, C₂H₂) burns with oxygen for high-temperature welding, while ethylene (C₂H₄) is the primary ripening hormone.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'साबुन (Soap) और अपमार्जक (Detergent) में मुख्य अंतर क्या है—विशेषकर कठोर जल (Hard water) के साथ?',
    'What is a major advantage of synthetic detergents over soaps when used in hard water?',
    ['साबुन कठोर जल के Ca²⁺/Mg²⁺ आयनों से सफेद मैल (Scum) बनाता है, जबकि अपमार्जक कठोर जल में भी अच्छा झाग देते हैं', 'Soaps form insoluble scum with Ca²⁺/Mg²⁺ in hard water, whereas detergents remain effective without forming scum'],
    [
      ['अपमार्जक केवल गर्म पानी में काम करते हैं', 'Detergents only work in boiling water'],
      ['साबुन कठोर जल में अधिक झाग देता है', 'Soaps lather better in hard water'],
      ['अपमार्जक वनस्पति तेल के सोडियम लवण हैं', 'Detergents are sodium salts of fatty acids'],
    ],
    'साबुन लंबी श्रृंखला वाले वसा अम्लों के सोडियम/पोटैशियम लवण होते हैं जो कठोर जल में अघुलनशील अवक्षेप बनाते हैं; अपमार्जक सल्फोनिक अम्लों के सोडियम लवण होते हैं।',
    'Soaps are sodium/potassium salts of fatty acids that precipitate with Ca²⁺/Mg²⁺; detergents are sulphonate salts that stay soluble in hard water.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'जल की अस्थायी कठोरता (Temporary hardness) और स्थायी कठोरता (Permanent hardness) किन लवणों के कारण होती है?',
    'Temporary hardness and permanent hardness of water are caused by dissolved salts of Calcium and Magnesium in the form of:',
    ['अस्थायी: बाइकार्बोनेट; स्थायी: क्लोराइड और सल्फेट', 'Temporary: Bicarbonates; Permanent: Chlorides and Sulphates'],
    [
      ['अस्थायी: क्लोराइड; स्थायी: बाइकार्बोनेट', 'Temporary: Chlorides; Permanent: Bicarbonates'],
      ['दोनों केवल सोडियम क्लोराइड से', 'Both by Sodium chloride only'],
      ['दोनों केवल पोटैशियम नाइट्रेट से', 'Both by Potassium nitrate'],
    ],
    'अस्थायी कठोरता Ca(HCO₃)₂ व Mg(HCO₃)₂ के कारण होती है जिसे उबालकर दूर किया जा सकता है; स्थायी कठोरता क्लोराइड/सल्फेट से होती है जिसे वाशिंग सोडा से हटाते हैं।',
    'Temporary hardness is due to bicarbonates (removed by boiling); permanent hardness is due to chlorides/sulphates (removed using washing soda).',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'एलपीजी (LPG — द्रवित पेट्रोलियम गैस) सिलेंडर में मुख्य रूप से कौन-सी गैसें होती हैं और रिसाव का पता लगाने के लिए उसमें कौन-सा गंधयुक्त पदार्थ मिलाया जाता है?',
    'Which hydrocarbons form the main components of LPG, and which foul-smelling agent is added to detect leaks?',
    ['ब्यूटेन और प्रोपेन; एथिल मरकैप्टन (इथेनथियोल)', 'Butane and Propane; Ethyl mercaptan (ethanethiol)'],
    [
      ['मीथेन और एथेन; अमोनिया', 'Methane and Ethane; Ammonia'],
      ['हाइड्रोजन और CO; क्लोरीन', 'Hydrogen and CO; Chlorine'],
      ['एसिटिलीन और बेंजीन; सल्फर', 'Acetylene and Benzene; Sulphur'],
    ],
    'LPG गंधहीन होती है (मुख्य घटक ब्यूटेन + प्रोपेन), अतः रिसाव पहचानने हेतु तीक्ष्ण गंध वाला सल्फर यौगिक एथिल मरकैप्टन (C₂H₅SH) मिलाया जाता है।',
    'LPG consists chiefly of butane and propane (odourless), so pungent ethyl mercaptan is added for leak detection.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'सीएनजी (CNG — संपीड़ित प्राकृतिक गैस) तथा बायोगैस (गोबर गैस) दोनों का मुख्य दहनशील घटक कौन-सी गैस है?',
    'Which gas is the principal combustible component of both CNG (Compressed Natural Gas) and Biogas (Gobar gas)?',
    ['मीथेन (CH₄)', 'Methane (CH₄)'],
    [
      ['ब्यूटेन (C₄H₁₀)', 'Butane (C₄H₁₀)'],
      ['कार्बन मोनोऑक्साइड (CO)', 'Carbon monoxide (CO)'],
      ['हाइड्रोजन सल्फाइड (H₂S)', 'Hydrogen sulphide (H₂S)'],
    ],
    'CNG में लगभग 80–90% मीथेन और बायोगैस में लगभग 55–75% मीथेन होती है; इसे मार्श गैस (दलदली गैस) भी कहते हैं।',
    'Methane (CH₄), also called marsh gas, makes up ~80–90% of CNG and ~55–75% of biogas.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'कोयले की चार किस्मों में किसमें कार्बन की प्रतिशत मात्रा सर्वाधिक (85–95%) होती है और सबसे कम धुआँ निकलता है?',
    'Among the four varieties of coal, which has the highest carbon content (85–95%) and burns cleanest?',
    ['एन्थ्रेसाइट (Anthracite)', 'Anthracite'],
    [
      ['बिटुमिनस (Bituminous)', 'Bituminous'],
      ['लिग्नाइट (Lignite)', 'Lignite'],
      ['पीट (Peat)', 'Peat'],
    ],
    'कार्बन की बढ़ती मात्रा का क्रम: पीट (<50%) < लिग्नाइट (~60%) < बिटुमिनस (~75–85%) < एन्थ्रेसाइट (85–95%, सर्वोत्तम कोयला)।',
    'Increasing rank and carbon content: Peat < Lignite (brown coal) < Bituminous < Anthracite (highest grade, 85–95% carbon).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'निम्नलिखित में से किस ईंधन का ऊष्मीय मान (Calorific value) सर्वाधिक (~1,50,000 kJ/kg) है और इसे "भविष्य का ईंधन" कहा जाता है?',
    'Which fuel has the highest calorific value (~150,000 kJ/kg) and is often called the "Fuel of the Future"?',
    ['हाइड्रोजन (H₂)', 'Hydrogen (H₂)'],
    [
      ['पेट्रोल', 'Petrol'],
      ['एलपीजी (LPG)', 'LPG'],
      ['मीथेन (CNG)', 'Methane (CNG)'],
    ],
    'हाइड्रोजन का ऊष्मीय मान 150,000 kJ/kg सर्वाधिक है और दहन पर केवल जलवाष्प बनाती है (शून्य कार्बन उत्सर्जन), अतः यह रॉकेट व ईंधन सेल में प्रयुक्त होती है।',
    'Hydrogen has the highest calorific value (~150,000 kJ/kg) and produces only water vapour upon combustion.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'अग्निशामक यंत्र (सोडा-एसिड Fire extinguisher) में आग बुझाने के लिए कौन-सी गैस निकलती है?',
    'Which gas is released in a soda-acid fire extinguisher to put out fires?',
    ['कार्बन डाइऑक्साइड (CO₂)', 'Carbon dioxide (CO₂)'],
    [
      ['ऑक्सीजन (O₂)', 'Oxygen (O₂)'],
      ['नाइट्रोजन (N₂)', 'Nitrogen (N₂)'],
      ['हाइड्रोजन (H₂)', 'Hydrogen (H₂)'],
    ],
    'NaHCO₃ और H₂SO₄ की क्रिया से बनी भारी CO₂ गैस जलती हुई वस्तु पर कंबल की तरह फैलकर ऑक्सीजन की आपूर्ति काट देती है और आग बुझा देती है।',
    'Reaction of NaHCO₃ and H₂SO₄ produces dense CO₂ gas, which blankets the fire and cuts off oxygen supply.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'प्राकृतिक रबर (आइसोप्रीन बहुलक) को अधिक मजबूत, प्रत्यास्थ और ऊष्मा-रोधी बनाने के लिए किस तत्व के साथ गर्म किया जाता है (वल्कनीकरण / Vulcanization)?',
    'Natural rubber is heated with which element in the process of vulcanization to improve its strength and elasticity?',
    ['सल्फर (गंधक)', 'Sulphur'],
    [
      ['फॉस्फोरस', 'Phosphorus'],
      ['क्लोरीन', 'Chlorine'],
      ['सिलिकॉन', 'Silicon'],
    ],
    'चार्ल्स गुडइयर द्वारा खोजी गई वल्कनीकरण प्रक्रिया में कच्चे रबर को ~5% सल्फर के साथ गर्म करने से सल्फर क्रॉस-लिंक बनते हैं, जिससे टायर बनाने योग्य मजबूत रबर मिलता है।',
    'Vulcanization heats natural rubber with sulphur to create cross-links between polymer chains, increasing strength and heat resistance.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'वनस्पति तेलों (असंतृप्त वसा) से वनस्पति घी (संतृप्त वसा) बनाने की हाइड्रोजनीकरण अभिक्रिया में किस उत्प्रेरक का उपयोग होता है?',
    'Which catalyst is used in the hydrogenation of vegetable oils to manufacture vanaspati ghee?',
    ['निकल (Nickel, या पैलेडियम)', 'Nickel (or Palladium)'],
    [
      ['लोहा', 'Iron'],
      ['ताँबा', 'Copper'],
      ['जस्ता', 'Zinc'],
    ],
    'असंतृप्त तेलों में निकल उत्प्रेरक की उपस्थिति में 473 K पर H₂ गैस जोड़ने से संतृप्त ठोस वसा (वनस्पति घी) बनती है।',
    'Addition of H₂ to unsaturated vegetable oils in the presence of a Nickel catalyst converts double bonds into single bonds (saturated fat).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'एथेनॉल (C₂H₅OH) की सल्फ्यूरिक अम्ल (उत्प्रेरक) की उपस्थिति में एसिटिक अम्ल (CH₃COOH) के साथ अभिक्रिया करने पर मीठी फलों जैसी गंध वाला कौन-सा यौगिक बनता है?',
    'Ethanol reacts with ethanoic (acetic) acid in the presence of an acid catalyst to form a sweet-smelling compound called:',
    ['एस्टर (एथिल एथेनोएट)', 'An ester (Ethyl ethanoate)'],
    [
      ['साबुन', 'Soap'],
      ['एल्डिहाइड', 'Aldehyde'],
      ['कीटोन', 'Ketone'],
    ],
    'यह एस्टरीकरण (Esterification) अभिक्रिया है; फलों जैसी सुगंध वाले एस्टर का उपयोग इत्र (Perfumes) व खाद्य स्वाद (Flavouring agents) बनाने में होता है।',
    'Esterification forms a fruity-smelling ester (CH₃COOC₂H₅), widely used in perfumes and artificial flavourings.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'वाटर गैस (भाप अंगार गैस) और प्रोड्यूसर गैस (वायु अंगार गैस) के रासायनिक संघटन क्रमशः क्या हैं?',
    'What are the chemical compositions of Water Gas and Producer Gas respectively?',
    ['वाटर गैस: CO + H₂; प्रोड्यूसर गैस: CO + N₂', 'Water gas: CO + H₂; Producer gas: CO + N₂'],
    [
      ['वाटर गैस: CO + N₂; प्रोड्यूसर गैस: CO + H₂', 'Water gas: CO + N₂; Producer gas: CO + H₂'],
      ['दोनों में केवल CH₄ + CO₂', 'Both are CH₄ + CO₂'],
      ['वाटर गैस: H₂ + O₂; प्रोड्यूसर गैस: N₂ + O₂', 'Water gas: H₂ + O₂; Producer gas: N₂ + O₂'],
    ],
    'लाल-तप्त कोक पर भाप प्रवाहित करने से वाटर गैस (CO + H₂, जिसे सिन-गैस भी कहते हैं) तथा वायु प्रवाहित करने से प्रोड्यूसर गैस (CO + N₂) बनती है।',
    'Passing steam over red-hot coke yields Water Gas (CO + H₂), while passing air yields Producer Gas (CO + N₂).',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'मोटर वाहनों के पेट्रोल इंजन में अपस्फोटन (Knocking) कम करने हेतु ईंधन की गुणवत्ता किस संख्या से मापी जाती है?',
    'The anti-knock quality of petrol (gasoline) for spark-ignition engines is rated by its:',
    ['ऑक्टेन संख्या (Octane number)', 'Octane number'],
    [
      ['सीटेन संख्या (Cetane number)', 'Cetane number'],
      ['मैक संख्या (Mach number)', 'Mach number'],
      ['डॉब्सन संख्या', 'Dobson number'],
    ],
    'पेट्रोल की गुणवत्ता ऑक्टेन संख्या (आइसो-ऑक्टेन = 100) से और डीजल की गुणवत्ता सीटेन संख्या से मापी जाती है।',
    'Petrol quality is rated by Octane number, while diesel ignition quality is rated by Cetane number.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'खाना पकाने के नॉन-स्टिक बर्तनों (Non-stick cookware) पर किस बहुलक (प्लास्टिक) की ऊष्मा-रोधी परत चढ़ाई जाती है?',
    'Which heat-resistant polymer is coated on non-stick cooking utensils?',
    ['टेफ्लॉन (पॉलीटेट्राफ्लुओरोएथिलीन — PTFE)', 'Teflon (Polytetrafluoroethylene — PTFE)'],
    [
      ['पॉलीविनाइल क्लोराइड (PVC)', 'PVC'],
      ['बैकेलाइट', 'Bakelite'],
      ['पॉलीस्टायरीन', 'Polystyrene'],
    ],
    'टेफ्लॉन (PTFE) पर तेल या पानी चिपकता नहीं है और यह उच्च ताप व रसायनों के प्रति निष्क्रिय रहता है।',
    'Teflon (PTFE) has an extremely low friction, chemically inert surface resistant to high cooking temperatures.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'बिजली के स्विच और कुकर के हैंडल किस थर्मोसेटिंग प्लास्टिक से बनाए जाते हैं जो ऊष्मा व विद्युत का कुचालक है और गर्म करने पर पिघलता नहीं?',
    'Which thermosetting plastic is used to make electrical switches and handles of pressure cookers because it does not soften on heating?',
    ['बैकेलाइट (Bakelite)', 'Bakelite'],
    [
      ['पॉलीथीन', 'Polythene'],
      ['PVC', 'PVC'],
      ['नायलॉन', 'Nylon'],
    ],
    'बैकेलाइट (फिनॉल-फॉर्मेल्डिहाइड रेजिन) एक थर्मोसेटिंग प्लास्टिक है जिसे एक बार ढालने के बाद पुनः पिघलाया नहीं जा सकता; मेलामाइन अग्निरोधक थर्मोसेटिंग है।',
    'Bakelite is a cross-linked thermosetting polymer that is a poor conductor of heat and electricity and retains rigidity when heated.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'दैनिक जीवन में मिट्टी की अम्लता (अधिक अम्लीय मृदा) को सुधारने के लिए किसान खेतों में क्या मिलाते हैं?',
    'To neutralize excessive acidity of agricultural soil, what do farmers commonly add to the fields?',
    ['बिना बुझा चूना (CaO), बुझा चूना [Ca(OH)₂] या चॉक (CaCO₃)', 'Quicklime (CaO), slaked lime [Ca(OH)₂], or powdered chalk (CaCO₃)'],
    [
      ['सल्फ्यूरिक अम्ल', 'Sulphuric acid'],
      ['साधारण नमक', 'Common salt'],
      ['अमोनियम सल्फेट अम्लीय उर्वरक', 'Acidic ammonium sulphate'],
    ],
    'पौधों की अच्छी वृद्धि के लिए मिट्टी का pH लगभग 6.5–7.5 होना चाहिए; अम्लीय मिट्टी को उदासीन करने हेतु क्षारीय चूना मिलाया जाता है।',
    'Acidic soils are treated with basic calcium compounds (lime or chalk) to bring soil pH closer to neutral.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'जब धातु कार्बोनेट (जैसे Na₂CO₃) या धातु बाइकार्बोनेट (NaHCO₃) अम्ल से अभिक्रिया करते हैं, तो कौन-सी गैस निकलती है?',
    'Which gas is evolved when metal carbonates or metal bicarbonates react with acids?',
    ['कार्बन डाइऑक्साइड (CO₂)', 'Carbon dioxide (CO₂)'],
    [
      ['हाइड्रोजन (H₂)', 'Hydrogen (H₂)'],
      ['नाइट्रोजन (N₂)', 'Nitrogen (N₂)'],
      ['क्लोरीन (Cl₂)', 'Chlorine (Cl₂)'],
    ],
    'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑। सभी धातु कार्बोनेट व बाइकार्बोनेट अम्लों से क्रिया कर लवण, जल और CO₂ देते हैं।',
    'Acids react with metal carbonates/hydrogencarbonates to produce salt, water, and brisk effervescence of CO₂ gas.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'शुष्क HCl गैस (बिना नमी के) सूखे नीले लिटमस पत्र का रंग क्यों नहीं बदलती है?',
    'Why does dry HCl gas NOT change the colour of dry blue litmus paper?',
    ['जल की अनुपस्थिति में HCl अणु H⁺ (या H₃O⁺) आयन उत्पन्न नहीं कर पाते', 'In the absence of water, dry HCl cannot dissociate to produce H⁺ (or H₃O⁺) ions'],
    [
      ['HCl गैस अम्लीय नहीं होती', 'HCl gas is not acidic'],
      ['लिटमस केवल ठोस से क्रिया करता है', 'Litmus only reacts with solids'],
      ['सूखा HCl क्षारीय होता है', 'Dry HCl is basic'],
    ],
    'अम्लीय गुण केवल जलीय माध्यम में H⁺/H₃O⁺ आयनों के निर्माण से प्रकट होता है; अतः नम लिटमस पत्र के साथ HCl गैस तुरंत लाल रंग देती है।',
    'Acidic behaviour requires ionization into H⁺/H₃O⁺ ions in water; dry HCl molecules do not ionize without moisture.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'जल के शोधन में प्रयुक्त क्लोरीन और पटाखों में हरा एवं लाल रंग देने वाले तत्व क्रमशः कौन-से हैं?',
    'Which elements produce bright green and crimson-red colours respectively in fireworks?',
    ['बेरियम (हरा) और स्ट्रॉन्शियम (लाल)', 'Barium (green) and Strontium (red)'],
    [
      ['स्ट्रॉन्शियम (हरा) और बेरियम (लाल)', 'Strontium (green) and Barium (red)'],
      ['सोडियम (हरा) और पोटैशियम (लाल)', 'Sodium (green) and Potassium (red)'],
      ['ताँबा (लाल) और लोहा (हरा)', 'Copper (red) and Iron (green)'],
    ],
    'आतिशबाजी में बेरियम के लवण हरा रंग, स्ट्रॉन्शियम व लिथियम लाल रंग, तथा सोडियम सुनहरा-पीला रंग उत्पन्न करते हैं।',
    'In fireworks, barium salts produce green flames, strontium salts produce crimson red, and sodium gives bright yellow.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'अधातुओं के ऑक्साइड (जैसे CO₂, SO₂, NO₂) सामान्यतः किस प्रकृति के होते हैं?',
    'What is the general chemical nature of non-metallic oxides (like CO₂, SO₂, NO₂)?',
    ['अम्लीय (Acidic) प्रकृति के', 'Acidic in nature'],
    [
      ['क्षारीय (Basic) प्रकृति के', 'Basic in nature'],
      ['सदैव उदासीन', 'Always neutral'],
      ['सदैव उभयधर्मी', 'Always amphoteric'],
    ],
    'अधातु ऑक्साइड जल में घुलकर अम्ल बनाते हैं (जैसे CO₂ + H₂O → H₂CO₃, SO₂ + H₂O → H₂SO₃); यद्यपि CO, N₂O और NO कुछ उदासीन ऑक्साइड अपवाद हैं।',
    'Most non-metallic oxides dissolve in water to form acids (e.g., H₂CO₃, H₂SO₃), though CO, NO, and N₂O are neutral exceptions.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'मोमबत्ती या गैस स्टोव की लौ का कौन-सा भाग पूर्ण दहन के कारण नीला और सबसे अधिक गर्म होता है?',
    'Which zone of a candle flame is blue and the hottest due to complete combustion?',
    ['सबसे बाहरी अदीप्त क्षेत्र (Outer non-luminous zone)', 'Outer non-luminous zone'],
    [
      ['मध्यम दीप्त पीला क्षेत्र', 'Middle luminous yellow zone'],
      ['सबसे भीतरी काला क्षेत्र', 'Innermost dark zone'],
      ['बत्ती के ठीक नीचे का भाग', 'Area below the wick'],
    ],
    'सबसे बाहरी भाग में पर्याप्त ऑक्सीजन मिलने से पूर्ण दहन होता है, जिससे यह हल्के नीले रंग का और सर्वाधिक गर्म (सुनार धातु पिघलाने हेतु फूँकनी से यही क्षेत्र उपयोग करते हैं) होता है।',
    'Complete combustion occurs in the outermost zone with ample oxygen, making it blue and the hottest part of the flame.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'घरेलू गैस बर्नर के बर्तन की तली जब काली पड़ने लगती है, तो यह किस बात का संकेत है?',
    'If the bottom of a cooking vessel becomes blackened by soot on a gas stove, what does it indicate?',
    ['बर्नर के वायु छिद्र बंद हैं और ईंधन का अपूर्ण दहन हो रहा है', 'Air holes are blocked and the fuel is undergoing incomplete combustion'],
    [
      ['ईंधन का पूर्ण दहन हो रहा है', 'Fuel is burning completely'],
      ['एलपीजी में पानी मिल गया है', 'LPG contains water'],
      ['बर्तन का धातु जल रहा है', 'The metal vessel is burning'],
    ],
    'पर्याप्त ऑक्सीजन न मिलने से अपूर्ण दहन होता है जिससे पीली कज्जल (कालिख/कार्बन कण) वाली लौ बनती है जो बर्तन काला कर देती है और ईंधन बर्बाद होता है।',
    'Blocked air inlets starve the flame of oxygen, causing incomplete combustion with a yellow sooty flame that deposits carbon.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'मेथेनॉल (CH₃OH) और एथेनॉल (C₂H₅OH) में से कौन-सा जहरीला अल्कोहल है जिसे पीने से अंधापन और मृत्यु हो सकती है?',
    'Between methanol (CH₃OH) and ethanol (C₂H₅OH), which toxic alcohol can cause blindness and death if consumed?',
    ['मेथेनॉल (वुड स्पिरिट)', 'Methanol (wood spirit)'],
    [
      ['एथेनॉल (शुद्ध रूप में)', 'Ethanol'],
      ['ग्लिसरॉल', 'Glycerol'],
      ['प्रोपेनॉल-2 केवल', 'Propan-2-ol only'],
    ],
    'यकृत में मेथेनॉल ऑक्सीकृत होकर विषैले मेथेनैल (फॉर्मेल्डिहाइड) में बदल जाता है जो कोशिकाओं को जमा देता है और दृक् तंत्रिका नष्ट कर अंधा कर देता है।',
    'Methanol is oxidized in the liver to toxic methanal (formaldehyde), coagulating cell protoplasm and damaging the optic nerve.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'एथेनॉल (C₂H₅OH) को सांद्र H₂SO₄ के साथ 443 K (170°C) पर गर्म करने से निर्जलीकरण होकर कौन-सी गैस बनती है?',
    'Heating ethanol with excess concentrated H₂SO₄ at 443 K causes dehydration to produce which gas?',
    ['एथीन (C₂H₄)', 'Ethene (C₂H₄)'],
    [
      ['मीथेन (CH₄)', 'Methane (CH₄)'],
      ['एथेन (C₂H₆)', 'Ethane (C₂H₆)'],
      ['कार्बन मोनोऑक्साइड', 'Carbon monoxide'],
    ],
    'यहाँ सांद्र H₂SO₄ निर्जलीकारक (Dehydrating agent) के रूप में काम कर जल का अणु निकालता है: C₂H₅OH → C₂H₄ + H₂O।',
    'Concentrated H₂SO₄ acts as a dehydrating agent, removing H₂O from ethanol to yield unsaturated ethene (C₂H₄).',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'लिटमस विलयन जब न तो अम्लीय हो और न ही क्षारीय (उदासीन हो), तो उसका मूल रंग कैसा होता है?',
    'What is the original colour of a litmus solution when it is neutral (neither acidic nor basic)?',
    ['बैंगनी (Purple)', 'Purple'],
    [
      ['नीला', 'Blue'],
      ['लाल', 'Red'],
      ['हरा', 'Green'],
    ],
    'प्राकृतिक लिटमस अर्क मूल रूप से बैंगनी रंग का होता है; प्रयोगशाला में इसे लाल या नीले लिटमस पेपर स्ट्रिप में तैयार किया जाता है।',
    'Pure litmus extract is naturally purple in neutral state before being dyed blue or red for test strips.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'विद्युत हीटिंग उपकरणों या उच्च ताप वाले तारों के बजाय घरेलू तारों में ताँबा और एल्युमिनियम उपयोग करने का मुख्य कारण क्या है?',
    'Why are copper and aluminium primarily used for electrical transmission and house wiring?',
    ['इनकी विद्युत प्रतिरोधकता बहुत कम (उच्च चालकता) और तन्यता अच्छी होती है', 'They have very low electrical resistivity (high conductivity) and good ductility'],
    [
      ['इनका प्रतिरोध सर्वाधिक होता है', 'They have maximum resistance'],
      ['ये अधातु हैं', 'They are non-metals'],
      ['इनका घनत्व पारे से अधिक है', 'They are denser than mercury'],
    ],
    'चाँदी के बाद ताँबा व एल्युमिनियम श्रेष्ठ विद्युत चालक हैं, टिकाऊ व तन्य हैं तथा चाँदी से कहीं अधिक किफायती हैं।',
    'After silver, copper and aluminium offer the lowest resistivity along with high ductility and affordability.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'मैग्नीशियम के रिबन को हवा में जलाने से पहले रेगमाल (Sandpaper) से साफ क्यों किया जाता है?',
    'Why is a magnesium ribbon cleaned by rubbing with sandpaper before burning it in air?',
    ['सतह पर जमी मैग्नीशियम ऑक्साइड/कार्बोनेट की सुरक्षात्मक परत हटाने के लिए', 'To remove the protective coating of basic magnesium oxide/carbonate formed on its surface'],
    [
      ['रिबन का वजन बढ़ाने के लिए', 'To increase ribbon weight'],
      ['उसे ठंडा करने के लिए', 'To cool it down'],
      ['उस पर तेल लगाने के लिए', 'To coat it with oil'],
    ],
    'हवा में रखने से मैग्नीशियम पर MgO की निष्क्रिय परत बन जाती है; रेगमाल से रगड़कर हटाने पर वह चमकदार सफेद लौ के साथ जलती है।',
    'Removing the dull surface oxide/carbonate layer exposes pure magnesium so it ignites cleanly with a dazzling white flame.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'विद्युत अपघटनी परिष्करण (Electrolytic refining) द्वारा अशुद्ध ताँबे से शुद्ध ताँबा प्राप्त करते समय अशुद्ध ताँबे को किस इलेक्ट्रोड पर रखा जाता है?',
    'During electrolytic refining of impure copper, what is made the anode and what is made the cathode?',
    ['अशुद्ध ताँबे की मोटी प्लेट एनोड (+) और शुद्ध ताँबे की पतली पट्टी कैथोड (-)', 'Thick block of impure copper as anode (+) and thin strip of pure copper as cathode (-)'],
    [
      ['शुद्ध ताँबा एनोड और अशुद्ध ताँबा कैथोड', 'Pure copper as anode and impure as cathode'],
      ['दोनों ग्रेफाइट की छड़ें', 'Both graphite rods'],
      ['अशुद्ध ताँबा केवल विलयन में घुलित', 'Impure copper only dissolved'],
    ],
    'विद्युत धारा प्रवाहित करने पर अशुद्ध एनोड से शुद्ध Cu²⁺ आयन विलयन से होकर कैथोड पर जमा हो जाते हैं और अघुलनशील अशुद्धियाँ एनोड पंक (Anode mud) में बैठ जाती हैं।',
    'Pure copper dissolves from the impure anode into the CuSO₄ electrolyte and deposits onto the pure cathode, leaving impurities as anode mud.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'कोलतार (Coal tar) से प्राप्त किस पदार्थ का उपयोग कपड़ों में कीड़े (मॉथ) भगाने वाली सफेद गोलियाँ बनाने में किया जाता है?',
    'Which substance obtained from coal tar is used to manufacture mothballs to repel insects?',
    ['नेफ़्थलीन (Naphthalene)', 'Naphthalene'],
    [
      ['बिटुमेन', 'Bitumen'],
      ['कोक', 'Coke'],
      ['पेराफिन मोम', 'Paraffin wax'],
    ],
    'नेफ़्थलीन एक सुगंधित हाइड्रोकार्बन है जो कमरे के तापमान पर धीरे-धीरे ऊर्ध्वपातित होकर कीड़ों को दूर रखती है।',
    'Naphthalene is obtained from coal tar and sublimes slowly at room temperature, repelling moths and insects.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'आजकल पक्की सड़कों के निर्माण में कोलतार के स्थान पर किस पेट्रोलियम उत्पाद का प्रयोग अधिक किया जाता है?',
    'Which petroleum product is increasingly used instead of coal tar for metalling road surfaces?',
    ['बिटुमेन (Bitumen)', 'Bitumen'],
    [
      ['केरोसिन', 'Kerosene'],
      ['स्नेहक तेल', 'Lubricating oil'],
      ['पैराफिन मोम', 'Paraffin wax'],
    ],
    'कच्चे पेट्रोलियम के प्रभाजी आसवन का सबसे भारी अवशेष बिटुमेन है, जिसका उपयोग सड़क निर्माण व छत की जलरोधी परत में होता है।',
    'Bitumen, a heavy residual fraction of petroleum refining, has largely replaced coal tar in road surfacing.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'ग्लोबल वार्मिंग (वैश्विक ऊष्मण) के लिए मुख्यतः उत्तरदायी प्रमुख ग्रीनहाउस गैस कौन-सी है जो जीवाश्म ईंधनों के दहन से निकलती है?',
    'Which primary greenhouse gas released by burning fossil fuels is chiefly responsible for global warming?',
    ['कार्बन डाइऑक्साइड (CO₂)', 'Carbon dioxide (CO₂)'],
    [
      ['नाइट्रोजन (N₂)', 'Nitrogen (N₂)'],
      ['ऑक्सीजन (O₂)', 'Oxygen (O₂)'],
      ['आर्गन (Ar)', 'Argon (Ar)'],
    ],
    'CO₂, मीथेन (CH₄), नाइट्रस ऑक्साइड (N₂O) व जलवाष्प पृथ्वी से लौटने वाले अवरक्त विकिरण को रोककर ग्रीनहाउस प्रभाव बढ़ाती हैं, जिसमें CO₂ का सर्वाधिक योगदान है।',
    'CO₂ traps outgoing infrared radiation in the atmosphere, driving the enhanced greenhouse effect and global warming.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'अम्ल और क्षार की परस्पर अभिक्रिया से लवण और जल बनने की प्रक्रिया क्या कहलाती है?',
    'The reaction in which an acid reacts with a base to form a salt and water is known as:',
    ['उदासीनीकरण अभिक्रिया (Neutralization reaction)', 'Neutralization reaction'],
    [
      ['साबुनीकरण अभिक्रिया', 'Saponification reaction'],
      ['ऑक्सीकरण अभिक्रिया', 'Oxidation reaction'],
      ['किण्वन अभिक्रिया', 'Fermentation reaction'],
    ],
    'जैसे HCl + NaOH → NaCl + H₂O + ऊष्मा। इसमें अम्ल का H⁺ और क्षार का OH⁻ मिलकर जल बनाते हैं।',
    'Acid + Base → Salt + Water (e.g., HCl + NaOH → NaCl + H₂O) is a neutralization reaction.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'धातु के बर्तनों में दही या अचार जैसे खट्टे पदार्थ क्यों नहीं रखने चाहिए?',
    'Why should sour food items like curd and pickles not be stored in brass or copper vessels?',
    ['खट्टे पदार्थों के अम्ल धातु से क्रिया कर विषैले लवण बना देते हैं', 'Acids in sour foods react with copper/brass to form toxic metallic salts'],
    [
      ['दही जम नहीं पाता', 'Curd stops fermenting'],
      ['बर्तन तुरंत पिघल जाते हैं', 'Vessels melt immediately'],
      ['भोजन बहुत मीठा हो जाता है', 'Food becomes too sweet'],
    ],
    'लैक्टिक/एसिटिक अम्ल ताँबे और जस्ते से अभिक्रिया कर हानिकारक कॉपर व जिंक लवण बनाते हैं जो स्वास्थ्य के लिए विषाक्त होते हैं।',
    'Organic acids react with copper and zinc in brass to produce poisonous salts that spoil food and cause food poisoning.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'खाद्य पदार्थों (जैसे सैंडविच या चॉकलेट) को लपेटने के लिए किस धातु की पतली पन्नी (Foil) बनाई जाती है?',
    'Which metal is beaten into thin foils for wrapping food items and medicines?',
    ['एल्युमिनियम (Aluminium)', 'Aluminium'],
    [
      ['सोडियम', 'Sodium'],
      ['जस्ता', 'Zinc'],
      ['सीसा', 'Lead'],
    ],
    'एल्युमिनियम आघातवर्ध्य, हल्का, सस्ता, विषरहित तथा वायु की पतली निष्क्रिय Al₂O₃ परत के कारण भोजन से प्रतिक्रिया नहीं करता।',
    'Aluminium is malleable, lightweight, non-toxic, and protected by a thin passive oxide film, making it ideal for food foil.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'लोहे के अलावा किस धातु का उपयोग थर्मामीटर में किया जाता है क्योंकि यह काँच से नहीं चिपकती और इसका तापीय प्रसार एकसमान होता है?',
    'Which metal is used in traditional clinical and laboratory thermometers because it expands uniformly and does not wet glass?',
    ['पारा (Mercury)', 'Mercury'],
    [
      ['सीसा', 'Lead'],
      ['टिन', 'Tin'],
      ['मैग्नीशियम', 'Magnesium'],
    ],
    'पारा चमकीला, अपारदर्शी, -39°C से 357°C तक द्रव रहने वाला और काँच को न भिगोने वाला उत्कृष्ट तापमापी द्रव है।',
    'Mercury is opaque, shiny, liquid over a wide range (-39°C to 357°C), expands uniformly, and does not stick to glass.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'जीवाश्म ईंधन जैसे कोयला और पेट्रोलियम में सल्फर और नाइट्रोजन के अशुद्ध अंश के दहन से मुख्यतः कौन-सी पर्यावरणीय समस्या उत्पन्न होती है?',
    'Combustion of sulphur and nitrogen impurities in fossil fuels like coal and petroleum primarily causes:',
    ['अम्लीय वर्षा (SO₂ व NOₓ गैसों के कारण)', 'Acid rain (due to SO₂ and NOₓ emissions)'],
    [
      ['ओज़ोन परत की मोटाई में वृद्धि', 'Thickening of ozone layer'],
      ['पृथ्वी का हिमयुग', 'Global cooling/ice age'],
      ['ऑक्सीजन का स्तर बढ़ना', 'Rise in atmospheric oxygen'],
    ],
    'सल्फर व नाइट्रोजन के ऑक्साइड वर्षा में घुलकर अम्लीय वर्षा बनाते हैं, जो फसलों, जलीय जीवन और संगमरमर स्मारकों (जैसे ताजमहल — संगमरमर कैंसर) को नुकसान पहुँचाते हैं।',
    'SO₂ and NO₂ form acid rain, harming aquatic ecosystems, soil fertility, and marble monuments (e.g., Taj Mahal marble corrosion).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'संपीडित प्राकृतिक गैस (CNG) को पेट्रोल व डीजल की तुलना में एक "स्वच्छ ईंधन" (Cleaner fuel) क्यों माना जाता है?',
    'Why is Compressed Natural Gas (CNG) regarded as a cleaner fuel than petrol and diesel?',
    ['यह लगभग पूर्ण दहन करती है और बहुत कम कालिख, सल्फर व कणिकीय प्रदूषण फैलाती है', 'It undergoes nearly complete combustion, emitting negligible soot, sulphur, and particulate matter'],
    [
      ['इसमें 100% ऑक्सीजन भरी होती है', 'It consists of 100% oxygen'],
      ['इसके जलने पर CO₂ बिल्कुल नहीं बनती', 'It emits zero CO₂'],
      ['यह एक ठोस ईंधन है', 'It is a solid fuel'],
    ],
    'मीथेन (सबसे सरल हाइड्रोकार्बन) में कार्बन प्रतिशत कम होने से इसका दहन स्वच्छ होता है, तथा इसमें सल्फर या सीसा जैसी अशुद्धियाँ नहीं होतीं।',
    'Methane burns cleanly with minimal unburnt carbon particles, zero lead, and virtually no sulphur dioxide emissions.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'अपूर्ण दहन से निकलने वाली गैस और पूर्ण दहन से निकलने वाली गैस में अंतर बताइए; यदि 1 किग्रा ईंधन के पूर्ण दहन से उत्पन्न ऊष्मा को मापा जाए तो उसे क्या कहते हैं?',
    'What is the amount of heat energy produced on complete combustion of 1 kg of a fuel called, and in what unit is it expressed?',
    ['ऊष्मीय मान (Calorific value); kJ/kg (किलोजूल प्रति किग्रा)', 'Calorific value; measured in kJ/kg'],
    [
      ['ज्वलन ताप; डिग्री सेल्सियस', 'Ignition temperature; °C'],
      ['गलन की गुप्त ऊष्मा; J/mol', 'Latent heat; J/mol'],
      ['विशिष्ट ऊष्मा; J/K', 'Specific heat; J/K'],
    ],
    '1 किलोग्राम ईंधन के पूर्ण दहन से प्राप्त कुल ऊष्मा ऊर्जा को उसका ऊष्मीय मान (Calorific value) कहते हैं, जिसका मात्रक kJ/kg है।',
    'Calorific value is the heat liberated when 1 kg of fuel undergoes complete combustion, expressed in kilojoules per kilogram (kJ/kg).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'किसी पदार्थ को जलाना शुरू करने के लिए जिस न्यूनतम तापमान की आवश्यकता होती है, उसे क्या कहते हैं?',
    'What is the lowest temperature at which a combustible substance catches fire called?',
    ['ज्वलन ताप (Ignition temperature)', 'Ignition temperature'],
    [
      ['क्वथनांक (Boiling point)', 'Boiling point'],
      ['हिमांक (Freezing point)', 'Freezing point'],
      ['ऊष्मीय मान', 'Calorific value'],
    ],
    'सफेद फॉस्फोरस का ज्वलन ताप बहुत कम (~35°C) होने से यह कमरे के ताप पर भी आग पकड़ सकता है, जबकि कोयले और लकड़ी का ज्वलन ताप उच्च होता है।',
    'The minimum temperature required for combustion to begin is ignition temperature (very low ~35°C for white phosphorus).',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'कागज की एक खाली प्याली में पानी भरकर मोमबत्ती की लौ के ऊपर गर्म करने पर कागज जले बिना पानी उबलने लगता है। ऐसा क्यों होता है?',
    'Water boiled in a paper cup over a candle flame heats up without the paper catching fire. Why?',
    ['कागज को मिली ऊष्मा चालन द्वारा पानी में चली जाती है जिससे कागज अपने ज्वलन ताप तक नहीं पहुँच पाता', 'Heat supplied to the paper transfers to water by conduction, preventing the paper from reaching its ignition temperature'],
    [
      ['कागज पानी के कारण धातु बन जाता है', 'Paper turns metallic'],
      ['मोमबत्ती की लौ का तापमान 50°C से कम होता है', 'Candle flame is below 50°C'],
      ['पानी कागज को हवा से अलग कर देता है', 'Water removes air completely'],
    ],
    'जल के कारण कागज का तापमान लगभग 100°C पर ही स्थिर रहता है, जो कागज के ज्वलन ताप (~230°C) से कम है।',
    'Conduction into water keeps the paper near 100°C, well below paper’s ignition temperature (~230°C).',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'गुड़हल (China rose / हिबिस्कस) के फूलों का अर्क अम्लीय और क्षारीय विलयनों में क्रमशः कैसा रंग देता है?',
    'What colours does China rose (Hibiscus) natural indicator give in acidic and basic solutions respectively?',
    ['अम्ल में गहरा गुलाबी (मैजेंटा) और क्षार में हरा', 'Dark pink (magenta) in acid and green in base'],
    [
      ['अम्ल में हरा और क्षार में गुलाबी', 'Green in acid and pink in base'],
      ['अम्ल में नीला और क्षार में पीला', 'Blue in acid and yellow in base'],
      ['दोनों में रंगहीन', 'Colourless in both'],
    ],
    'NCERT कक्षा 7 विज्ञान के अनुसार गुड़हल की पंखुड़ियों का सूचक अम्लीय विलयनों को गहरा गुलाबी (मैजेंटा) और क्षारकीय विलयनों को हरा कर देता है।',
    'China rose indicator turns acidic solutions dark pink (magenta) and basic solutions green.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'इलेक्ट्रिक वायरिंग में ताँबे के ऊपर PVC की परत क्यों चढ़ाई जाती है, और धातु के बर्तन के हैंडल बैकेलाइट के क्यों होते हैं?',
    'Why are copper electrical wires coated with PVC and metal pan handles fitted with Bakelite?',
    ['PVC विद्युत का कुचालक है और बैकेलाइट ऊष्मा का कुचालक (सुरक्षा हेतु)', 'PVC is an electrical insulator and Bakelite is a thermal insulator for safe handling'],
    [
      ['दोनों चालकता बढ़ाने के लिए', 'Both increase conductivity'],
      ['ताँबे को जंग से बचाने हेतु केवल', 'Only to stop copper rusting'],
      ['वजन बढ़ाने के लिए', 'To add weight'],
    ],
    'PVC (पॉलीविनाइल क्लोराइड) करंट से बचाता है और बैकेलाइट गर्म बर्तन पकड़ते समय हाथ को जलने से बचाता है।',
    'PVC insulates against electric shock, while Bakelite insulates against heat so hot cookware can be held safely.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'बेंजीन (Benzene, C₆H₆) किस प्रकार का हाइड्रोकार्बन है और इसकी संरचना में कितने कार्बन-कार्बन द्वि-बंध होते हैं?',
    'What class of hydrocarbon is Benzene (C₆H₆), and how many alternating C=C double bonds are depicted in its Kekule ring?',
    ['एरोमैटिक चक्रीय हाइड्रोकार्बन; 3 एकांतर द्वि-बंध', 'Aromatic cyclic hydrocarbon; 3 alternating double bonds'],
    [
      ['संतृप्त एलिफैटिक; 0 द्वि-बंध', 'Saturated aliphatic; 0 double bonds'],
      ['खुली श्रृंखला एल्काइन; 2 त्रि-बंध', 'Open-chain alkyne; 2 triple bonds'],
      ['चक्रीय एल्केन; 6 द्वि-बंध', 'Cycloalkane; 6 double bonds'],
    ],
    'बेंजीन 6 कार्बन परमाणुओं की षट्कोणीय एरोमैटिक वलय है जिसमें 3 एकांतर द्वि-बंध (कुल 9 एकल व 3 द्वि-सहसंयोजक बंध) होते हैं।',
    'Benzene (C₆H₆) is the simplest aromatic hydrocarbon featuring a hexagonal ring with 3 conjugated/alternating double bonds.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'सूर्य या तारों की रोशनी की भाँति रासायनिक ईंधन के बिना किस तत्व को कोयले के भंजक आसवन से प्राप्त किया जाता है जो धातुकर्म में उत्कृष्ट अपचायक है?',
    'Which almost pure form of carbon, obtained by destructive distillation of coal, is used as a reducing agent in steel/metal extraction?',
    ['कोक (Coke)', 'Coke'],
    [
      ['कोलतार', 'Coal tar'],
      ['कोल गैस', 'Coal gas'],
      ['लिग्नाइट', 'Lignite'],
    ],
    'वायु की अनुपस्थिति में कोयले को गर्म करने पर कोक (ठोस, सरंध्र और लगभग शुद्ध कार्बन), कोलतार और कोल गैस प्राप्त होते हैं।',
    'Coke is a tough, porous, nearly pure form of carbon produced by heating coal without air, widely used to reduce iron ore in blast furnaces.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'ब्रेड, केक और समोसे के आटे को फुलाने के लिए खमीर (Yeast) के अतिरिक्त किस रासायनिक लवण का उपयोग किया जाता है?',
    'Which salt is added to dough/batter to make bread, dhokla, or pakoras soft and fluffy on heating?',
    ['सोडियम बाइकार्बोनेट / बेकिंग सोडा (NaHCO₃)', 'Sodium bicarbonate / Baking soda (NaHCO₃)'],
    [
      ['सोडियम क्लोराइड (NaCl)', 'Sodium chloride (NaCl)'],
      ['कैल्शियम सल्फेट', 'Calcium sulphate'],
      ['पोटैशियम परमैंगनेट', 'Potassium permanganate'],
    ],
    '2NaHCO₃ + ऊष्मा → Na₂CO₃ + H₂O + CO₂↑। निकलने वाली कार्बन डाइऑक्साइड गैस आटे में बुलबुले बनाकर उसे हल्का और छिद्रयुक्त बनाती है।',
    'Heating NaHCO₃ releases CO₂ gas bubbles trapped in the dough, making baked and fried items light and spongy.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'प्राकृतिक रूप से भूपर्पटी में पाई जाने वाली "मुक्तावस्था" (Free / Native state) की प्रमुख धातुएँ कौन-सी हैं?',
    'Which metals are commonly found in the free (native) metallic state in the Earth’s crust?',
    ['सोना (Au), प्लैटिनम (Pt) और कभी-कभी चाँदी/ताँबा', 'Gold (Au), Platinum (Pt), and sometimes Silver/Copper'],
    [
      ['सोडियम और पोटैशियम', 'Sodium and Potassium'],
      ['कैल्शियम और मैग्नीशियम', 'Calcium and Magnesium'],
      ['एल्युमिनियम और जिंक', 'Aluminium and Zinc'],
    ],
    'सक्रियता श्रेणी में सबसे नीचे स्थित धातुएँ (Au, Pt) हवा, नमी या अम्लों से अभिक्रिया नहीं करतीं, इसलिए ये प्रकृति में स्वतंत्र अवस्था में मिलती हैं।',
    'Unreactive noble metals at the bottom of the reactivity series (gold, platinum) resist oxidation and occur free in nature.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'मिथाइल ऑरेंज (Methyl orange) सूचक अम्लीय और क्षारीय विलयनों में क्रमशः कौन-सा रंग प्रदर्शित करता है?',
    'What colours does methyl orange indicator show in acidic and basic solutions respectively?',
    ['अम्ल में लाल (गुलाबी) और क्षार में पीला', 'Red in acidic and yellow in basic solution'],
    [
      ['अम्ल में पीला और क्षार में लाल', 'Yellow in acid and red in base'],
      ['अम्ल में रंगहीन और क्षार में गुलाबी', 'Colourless in acid and pink in base'],
      ['अम्ल में नीला और क्षार में हरा', 'Blue in acid and green in base'],
    ],
    'मिथाइल ऑरेंज उदासीन विलयन में नारंगी, pH < 3.1 (अम्लीय) में लाल तथा pH > 4.4 (क्षारीय) में पीला रंग देता है।',
    'Methyl orange turns red in strongly acidic solutions and yellow in neutral-to-basic solutions.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'घंटियाँ और मंदिर के घंटे (Bells) और वाद्ययंत्र (मंजीरा आदि) धातुओं की किस विशेषता के कारण धातु से बनाए जाते हैं?',
    'Which characteristic property of metals makes them suitable for making temple bells and musical cymbals?',
    ['ध्वानिकता (Sonority — टकराने पर मधुर गूँज उत्पन्न करना)', 'Sonority (producing a ringing sound when struck)'],
    [
      ['तन्यता (Ductility)', 'Ductility'],
      ['विद्युत चालकता', 'Electrical conductivity'],
      ['कम घनत्व', 'Low density'],
    ],
    'कठोर सतह से टकराने पर निनाद ध्वनि उत्पन्न करने का गुण ध्वानिकता (Sonorous) कहलाता है; काँसा व पीतल इसके लिए विशेष उपयोगी हैं।',
    'Metals are sonorous—they produce a resonant ringing sound when struck, making alloys like bronze and brass ideal for bells.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'एल्डिहाइड (-CHO), कीटोन (>C=O), अल्कोहल (-OH) और कार्बोक्सिलिक अम्ल (-COOH) में से सिरके (CH₃COOH) में कौन-सा प्रकार्यात्मक समूह (Functional group) उपस्थित होता है?',
    'Which functional group is present in acetic acid (CH₃COOH), the main acid in vinegar?',
    ['कार्बोक्सिलिक अम्ल समूह (-COOH)', 'Carboxylic acid group (-COOH)'],
    [
      ['अल्कोहल समूह (-OH)', 'Alcohol group (-OH)'],
      ['एल्डिहाइड समूह (-CHO)', 'Aldehyde group (-CHO)'],
      ['कीटोन समूह (>C=O)', 'Ketone group (>C=O)'],
    ],
    'CH₃COOH (एथेनोइक अम्ल) में -COOH कार्बोक्सिलिक अम्ल प्रकार्यात्मक समूह है; यह नीले लिटमस को लाल करता है और 5–8% जलीय विलयन सिरका कहलाता है।',
    'Ethanoic acid (CH₃COOH) contains the carboxylic acid (-COOH) group; its 5–8% aqueous solution is vinegar.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'क्लोरीन की जल के साथ या सोडियम हाइड्रॉक्साइड की जिंक धातु के साथ अभिक्रिया—निम्नलिखित में से जब जिंक (Zn) गर्म सोडियम हाइड्रॉक्साइड (NaOH) से क्रिया करता है तो कौन-सा लवण व गैस बनती है?',
    'When zinc granules are warmed with aqueous sodium hydroxide (NaOH) solution, which salt and gas are formed?',
    ['सोडियम जिंकेट (Na₂ZnO₂) और हाइड्रोजन गैस (H₂)', 'Sodium zincate (Na₂ZnO₂) and Hydrogen gas (H₂)'],
    [
      ['जिंक ऑक्साइड और ऑक्सीजन गैस', 'Zinc oxide and Oxygen gas'],
      ['जिंक हाइड्रॉक्साइड और क्लोरीन गैस', 'Zinc hydroxide and Chlorine'],
      ['कोई अभिक्रिया नहीं होती', 'No reaction takes place'],
    ],
    'Zn + 2NaOH → Na₂ZnO₂ + H₂↑। जिंक उभयधर्मी प्रकृति होने से अम्ल के साथ-साथ प्रबल क्षार से भी H₂ गैस मुक्त करता है।',
    'Zinc reacts with hot NaOH to form sodium zincate and hydrogen gas: Zn + 2NaOH → Na₂ZnO₂ + H₂↑.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'लोहे के स्तंभ (जैसे दिल्ली के महरौली स्थित प्राचीन लौह स्तंभ) में सदियों बाद भी जंग क्यों नहीं लगा?',
    'Why has the ancient Iron Pillar near Qutub Minar (Mehrauli, Delhi) resisted rusting for over 1600 years?',
    ['उच्च फॉस्फोरस युक्त पिटवाँ लोहे और सतह पर बनी निष्क्रिय आयरन-हाइड्रोजन-फॉस्फेट की पतली संरक्षक परत के कारण', 'Due to high-phosphorus wrought iron forming a protective passive iron-hydrogen-phosphate film on its surface'],
    [
      ['क्योंकि इसे प्लास्टिक से ढका गया है', 'Because it is coated with plastic'],
      ['क्योंकि दिल्ली में कभी बारिश नहीं होती', 'Because it never rains in Delhi'],
      ['क्योंकि यह शुद्ध सोने का बना है', 'Because it is made of gold'],
    ],
    'प्राचीन भारतीय धातुकर्मियों द्वारा निर्मित इस स्तंभ में फॉस्फोरस की अधिक मात्रा व सल्फर/मैंगनीज की कमी से सतह पर एक जटिल संरक्षक परत बन गई जो संक्षारण रोकती है।',
    'Crafted from high-phosphorus wrought iron, its surface developed a passive protective crystalline iron-hydrogen-phosphate layer.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'मिसेल (Micelle) का निर्माण कब होता है?',
    'When are "micelles" formed during the cleansing action of soap?',
    ['साबुन के अणुओं का जल-रागी सिरा पानी की ओर और जल-विरागी पूँछ अंदर तेल/मैल की बूँद के चारों ओर एकत्र होने पर', 'When hydrophobic tails of soap molecules surround an oil/dirt droplet inward while hydrophilic heads face water outward'],
    [
      ['जब साबुन हवा में उड़ता है', 'When soap evaporates in air'],
      ['जब पानी में केवल नमक मिलाया जाए', 'When only salt is added to water'],
      ['जब तेल पानी में पूर्णतः घुल जाए', 'When oil dissolves in pure water'],
    ],
    'साबुन अणु (जैसे सोडियम स्टीयरेट) की लंबी हाइड्रोकार्बन पूँछ तैलीय मैल में घुलती है और आयनिक सिरा (-COO⁻Na⁺) जल से जुड़कर गोलाकार मिसेल बनाता है, जो मैल को बाहर खींच लाता है।',
    'Soap molecules self-assemble into spherical micelles trapping grease inside hydrophobic tails while ionic heads dissolve in water, lifting dirt away.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'कृत्रिम मिठास, इत्र और दवाओं के अलावा कोयले की खदानों में विस्फोट का मुख्य कारण बनने वाली "फायरडैम्प" गैस कौन-सी होती है?',
    'Which gas, known as "firedamp", is responsible for explosions in underground coal mines?',
    ['मीथेन (CH₄)', 'Methane (CH₄)'],
    [
      ['नाइट्रोजन (N₂)', 'Nitrogen (N₂)'],
      ['आर्गन (Ar)', 'Argon (Ar)'],
      ['हीलियम (He)', 'Helium (He)'],
    ],
    'कोयले की परतों में फंसी मीथेन गैस हवा के साथ मिलकर विस्फोटक मिश्रण बनाती है; इसके खतरे से बचाव हेतु हम्फ्री डेवी ने सुरक्षा लैंप (Davy safety lamp) बनाया था।',
    'Methane trapped in coal seams mixes with air to form explosive firedamp; Humphry Davy invented the safety lamp to prevent such explosions.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'निम्नलिखित में से किस यौगिक में क्रिस्टलन का जल (Water of crystallization) उपस्थित नहीं होता है?',
    'Which of the following compounds does NOT contain water of crystallization?',
    ['बेकिंग सोडा (NaHCO₃)', 'Baking soda (NaHCO₃)'],
    [
      ['धोने का सोडा (Na₂CO₃·10H₂O)', 'Washing soda (Na₂CO₃·10H₂O)'],
      ['जिप्सम (CaSO₄·2H₂O)', 'Gypsum (CaSO₄·2H₂O)'],
      ['नीला थोथा (CuSO₄·5H₂O)', 'Blue vitriol (CuSO₄·5H₂O)'],
    ],
    'नीला थोथा (5H₂O), जिप्सम (2H₂O), वाशिंग सोडा (10H₂O) और POP (½H₂O) में क्रिस्टलन जल होता है, जबकि बेकिंग सोडा (NaHCO₃) निर्जल क्रिस्टल है।',
    'Blue vitriol, gypsum, and washing soda contain fixed water molecules in their crystal lattice, whereas baking soda (NaHCO₃) is anhydrous.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'ग्लैडस्टोन या विद्युत उपकरणों में टंगस्टन के अलावा फ्यूज तार और गन मेटल बनाने में कौन-सी धातुएँ प्रमुख रूप से उपयोग होती हैं—विशेषतः गन मेटल (Gun metal) का संघटन क्या है?',
    'What is the composition of Gun Metal, an alloy used for gears, bearings, and valves?',
    ['ताँबा (Cu), टिन (Sn) और जस्ता (Zn)', 'Copper (Cu), Tin (Sn), and Zinc (Zn)'],
    [
      ['ताँबा, निकल और क्रोमियम', 'Copper, Nickel, and Chromium'],
      ['लोहा, मैंगनीज और कार्बन', 'Iron, Manganese, and Carbon'],
      ['एल्युमिनियम, सीसा और पारा', 'Aluminium, Lead, and Mercury'],
    ],
    'गन मेटल (लगभग 88% Cu, 10% Sn, 2% Zn) काँसे का एक मजबूत रूप है जो भाप व खारे जल से संक्षारित नहीं होता।',
    'Gun metal (red brass) is an alloy of roughly 88% Copper, 10% Tin, and 2% Zinc, prized for corrosion resistance.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'शर्करा (जैसे गन्ने के रस या अंगूर) से किण्वन (Fermentation) द्वारा एथेनॉल निर्माण में कौन-सा सूक्ष्मजीव और एंजाइम मुख्य भूमिका निभाते हैं?',
    'Which microorganism and enzyme system convert sugar into ethanol during fermentation?',
    ['यीस्ट (खमीर) और ज़ाइमेज (Zymase) एंजाइम', 'Yeast and Zymase enzyme'],
    [
      ['लैक्टोबैसिलस और पेप्सिन', 'Lactobacillus and Pepsin'],
      ['राइजोबियम और एमाइलेज', 'Rhizobium and Amylase'],
      ['अमीबा और ट्रिप्सिन', 'Amoeba and Trypsin'],
    ],
    'यीस्ट (Saccharomyces cerevisiae) के इन्वर्टेज व ज़ाइमेज एंजाइम अवायवीय परिस्थिति में शर्करा को C₂H₅OH और CO₂ में बदल देते हैं।',
    'Yeast secretes invertase and zymase enzymes to ferment sugars anaerobically into ethanol and carbon dioxide.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'काँच पर लिखने या नक्काशी (Etching of glass) करने के लिए किस विशिष्ट अम्ल का प्रयोग किया जाता है?',
    'Which specific acid is used for etching designs on glass because it reacts with silica (SiO₂)?',
    ['हाइड्रोफ्लोरिक अम्ल (HF)', 'Hydrofluoric acid (HF)'],
    [
      ['सल्फ्यूरिक अम्ल (H₂SO₄)', 'Sulphuric acid (H₂SO₄)'],
      ['एसिटिक अम्ल (CH₃COOH)', 'Acetic acid'],
      ['नाइट्रिक अम्ल (HNO₃)', 'Nitric acid'],
    ],
    'अन्य अम्ल काँच से क्रिया नहीं करते, किंतु हाइड्रोफ्लोरिक अम्ल (HF) काँच के सिलिका (SiO₂) से क्रिया कर SiF₄ बनाता है, इसलिए HF को प्लास्टिक की बोतलों में रखा जाता है।',
    'Hydrofluoric acid reacts with silica in glass (SiO₂ + 4HF → SiF₄ + 2H₂O), making it useful for glass etching and requiring plastic storage.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'आवर्त सारणी में सर्वाधिक विद्युतऋणात्मक (Electronegative) तत्व कौन-सा है?',
    'Which element in the periodic table is the most electronegative?',
    ['फ्लुओरीन (F)', 'Fluorine (F)'],
    [
      ['क्लोरीन (Cl)', 'Chlorine (Cl)'],
      ['ऑक्सीजन (O)', 'Oxygen (O)'],
      ['नाइट्रोजन (N)', 'Nitrogen (N)'],
    ],
    'फ्लुओरीन (परमाणु क्रमांक 9, पॉलिंग मान ~3.98) सबसे अधिक विद्युतऋणात्मक तत्व है, जबकि क्लोरीन की इलेक्ट्रॉन बंधुता (Electron affinity) सर्वाधिक होती है।',
    'Fluorine (atomic number 9, Pauling electronegativity ~3.98) is the most electronegative element, while chlorine has the highest electron affinity.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'एल्कीन या एल्काइन जैसे असंतृप्त हाइड्रोकार्बन और एल्केन जैसे संतृप्त हाइड्रोकार्बन में भेद करने के लिए किस अभिकर्मक का रंग उड़ जाना परीक्षण के रूप में प्रयुक्त होता है?',
    'Decolourization of which reagent is used as a chemical test to distinguish unsaturated hydrocarbons (alkenes/alkynes) from saturated alkanes?',
    ['ब्रोमीन जल (लाल-भूरा रंग रंगहीन हो जाता है)', 'Bromine water (reddish-brown colour turns colourless)'],
    [
      ['नीला लिटमस विलयन', 'Blue litmus solution'],
      ['चूने का पानी', 'Lime water'],
      ['कॉपर सल्फेट विलयन', 'Copper sulphate solution'],
    ],
    'असंतृप्त यौगिक संकलन अभिक्रिया (Addition reaction) द्वारा ब्रोमीन को जोड़कर ब्रोमीन जल का भूरा रंग गायब कर देते हैं, जबकि संतृप्त यौगिक ऐसा नहीं करते।',
    'Unsaturated hydrocarbons undergo addition with bromine water, decolourizing it from reddish-brown to colourless; alkanes do not.',
    'HARD'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'मानव शरीर की हड्डियों और दाँतों में कैल्शियम के साथ प्रमुख रूप से कौन-सा अधात्विक तत्व पाया जाता है?',
    'Along with calcium, which non-metallic element is a major structural constituent of human bones and teeth?',
    ['फॉस्फोरस (P)', 'Phosphorus (P)'],
    [
      ['सल्फर (S)', 'Sulphur (S)'],
      ['आयोडीन (I)', 'Iodine (I)'],
      ['क्लोरीन (Cl)', 'Chlorine (Cl)'],
    ],
    'हड्डियाँ और दाँत मुख्य रूप से कैल्शियम फॉस्फेट [Ca₃(PO₄)₂] व हाइड्रॉक्सीएपेटाइट से बने होते हैं।',
    'Bones and teeth are primarily composed of calcium phosphate minerals containing calcium and phosphorus.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'प्रबल अम्ल (जैसे HCl) और दुर्बल अम्ल (जैसे CH₃COOH) में मूलभूत अंतर क्या है?',
    'What is the fundamental difference between a strong acid (like HCl) and a weak acid (like CH₃COOH)?',
    ['प्रबल अम्ल जल में लगभग पूर्णतः आयनित होकर अधिक H⁺ देते हैं, जबकि दुर्बल अम्ल आंशिक रूप से आयनित होते हैं', 'Strong acids ionize almost completely in water producing more H⁺ ions, whereas weak acids ionize only partially'],
    [
      ['प्रबल अम्ल में जल की मात्रा कम होती है', 'Strong acid simply has less water'],
      ['दुर्बल अम्ल लिटमस का रंग नहीं बदलता', 'Weak acid never changes litmus'],
      ['प्रबल अम्ल केवल कार्बनिक होते हैं', 'Strong acids are strictly organic'],
    ],
    'आयनन की मात्रा (Degree of ionization) अम्ल की प्रबलता तय करती है, जबकि सांद्रता (Concentrated/Dilute) जल में अम्ल की मात्रा बताती है।',
    'Strength depends on the degree of dissociation into H⁺ ions in water, independent of whether the solution is concentrated or dilute.',
    'MEDIUM'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'बहुलक (Polymers) के रूप में नायलॉन-6,6 और पॉलीथीन क्रमशः किन उपयोगों के लिए प्रसिद्ध हैं?',
    'What are Nylon-6,6 and Polythene widely used for as synthetic polymers?',
    ['नायलॉन: रस्सी, पैराशूट, ब्रश के रेशे; पॉलीथीन: थैलियाँ, पैकेजिंग व बोतलें', 'Nylon: ropes, parachutes, bristles; Polythene: carry bags, packaging, and bottles'],
    [
      ['नायलॉन: कुकर हैंडल; पॉलीथीन: नॉन-स्टिक तवा', 'Nylon: cooker handles; Polythene: non-stick pans'],
      ['दोनों केवल बिजली के स्विच बनाने में', 'Both only for electric switches'],
      ['नायलॉन: काँच; पॉलीथीन: सीमेंट', 'Nylon: glass; Polythene: cement'],
    ],
    'नायलॉन प्रथम पूर्णतः संश्लेषित रेशा था जो इस्पात के तार से भी अधिक मजबूत तनन सामर्थ्य रखता है; पॉलीथीन एथीन का बहुलक है।',
    'Nylon was the first fully synthetic high-tensile fibre (ropes, parachutes), while polythene is polymerized ethene used in films and containers.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'थायरॉइड ग्रंथि के सुचारु कार्य तथा घेंघा (Goitre) रोग से बचाव हेतु सामान्य नमक में किस अधातु के यौगिक मिलाए जाते हैं?',
    'Compounds of which non-metal are added to common table salt to support thyroid function and prevent goitre?',
    ['आयोडीन (I)', 'Iodine (I)'],
    [
      ['ब्रोमीन (Br)', 'Bromine (Br)'],
      ['सल्फर (S)', 'Sulphur (S)'],
      ['फॉस्फोरस (P)', 'Phosphorus (P)'],
    ],
    'थायरॉक्सिन हार्मोन के संश्लेषण के लिए आयोडीन आवश्यक है; इसलिए आयोडीन युक्त नमक में अल्प मात्रा में पोटैशियम आयोडेट (KIO₃) या आयोडाइड मिलाया जाता है।',
    'Iodine is essential for thyroxine synthesis; iodized salt contains trace potassium iodate/iodide to prevent goitre.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'कार्बन, यौगिक एवं ईंधन',
    'गोबर गैस / बायोगैस संयंत्र के बचे हुए गाढ़े अवशेष (Slurry) का सर्वोत्तम उपयोग किस रूप में होता है?',
    'What is the best use of the spent slurry left behind in a biogas plant?',
    ['नाइट्रोजन व फॉस्फोरस से भरपूर उत्कृष्ट जैविक खाद के रूप में', 'As an excellent organic manure rich in nitrogen and phosphorus'],
    [
      ['कपड़े धोने के साबुन के रूप में', 'As laundry detergent'],
      ['पेट्रोल के विकल्प के रूप में', 'As petrol substitute'],
      ['भवन निर्माण सीमेंट के रूप में', 'As building cement'],
    ],
    'अवायवीय पाचन से मीथेन गैस निकलने के बाद बची स्लरी में पौधों के पोषक तत्व सुरक्षित रहते हैं, अतः यह उत्तम जैव उर्वरक है।',
    'Spent biogas slurry retains valuable plant nutrients like nitrogen and phosphorus, serving as rich organic fertilizer.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'अम्ल, क्षार, लवण एवं pH',
    'ताजे दूध का pH मान लगभग 6 होता है। दही बन जाने पर इसके pH मान में क्या परिवर्तन होगा?',
    'Fresh milk has a pH of about 6. How will its pH change as it turns into curd?',
    ['pH मान 6 से घटकर और कम (लगभग 4.5) हो जाएगा', 'The pH will decrease below 6 (to around 4.5)'],
    [
      ['pH मान बढ़कर 8 हो जाएगा', 'pH will rise to 8'],
      ['pH मान ठीक 7 हो जाएगा', 'pH will become exactly 7'],
      ['pH मान अपरिवर्तित रहेगा', 'pH will remain unchanged'],
    ],
    'दही बनने पर लैक्टिक अम्ल उत्पन्न होता है जिससे अम्लता बढ़ती है और H⁺ सांद्रता बढ़ने से pH घट जाता है।',
    'Formation of lactic acid increases acidity, lowering the pH below 6.',
    'EASY'
  ),
  q(
    'अम्ल, क्षार, लवण, धातु एवं कार्बन',
    'धातु, अधातु एवं मिश्रधातु',
    'निम्नलिखित में से कौन-सी धातु ठंडे जल से तो अभिक्रिया नहीं करती, परंतु भाप (Steam) के साथ क्रिया करके धातु ऑक्साइड और हाइड्रोजन गैस बनाती है?',
    'Which metal does NOT react with cold or hot water, yet reacts with steam to form a metal oxide and hydrogen gas?',
    ['लोहा (और एल्युमिनियम / जिंक)', 'Iron (and Aluminium / Zinc)'],
    [
      ['सोडियम और पोटैशियम', 'Sodium and Potassium'],
      ['चाँदी और सोना', 'Silver and Gold'],
      ['कैल्शियम', 'Calcium'],
    ],
    'Na व K ठंडे जल से, Mg गर्म जल से, Al, Zn व Fe केवल भाप से (3Fe + 4H₂O → Fe₃O₄ + 4H₂), तथा Cu, Ag व Au भाप से भी क्रिया नहीं करते।',
    'Na/K react with cold water, Mg with hot water, while Al, Zn, and Fe react only with steam; Cu, Ag, and Au do not react even with steam.',
    'MEDIUM'
  ),
];
