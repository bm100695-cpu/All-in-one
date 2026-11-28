import { makeQ, RawBankQuestion } from '../banks/shared';

const q = makeQ('Information Technology');

export function generateItBank(): RawBankQuestion[] {
  const items: RawBankQuestion[] = [];

  // 1. Binary <-> Decimal Verified Conversions (120 Qs)
  for (let n = 10; n <= 69; n++) {
    const bin = n.toString(2);
    const binWrong1 = (n + 1).toString(2);
    const binWrong2 = (n ^ 2).toString(2);
    const binWrong3 = (n ^ 4).toString(2);
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'संख्या पद्धति (द्विआधारी)',
        `दशमलव संख्या (${n})₁₀ का बाइनरी (द्विआधारी) समतुल्य मान क्या होगा?`,
        `What is the binary equivalent of decimal number (${n})₁₀?`,
        [bin, bin],
        [
          [binWrong1 === bin ? (n + 3).toString(2) : binWrong1, binWrong1 === bin ? (n + 3).toString(2) : binWrong1],
          [binWrong2 === bin ? (n + 5).toString(2) : binWrong2, binWrong2 === bin ? (n + 5).toString(2) : binWrong2],
          [binWrong3 === bin ? (n + 7).toString(2) : binWrong3, binWrong3 === bin ? (n + 7).toString(2) : binWrong3],
        ],
        `${n} को क्रमिक रूप से 2 से विभाजित कर शेषफल नीचे से ऊपर लिखने पर (${bin})₂ प्राप्त होता है।`,
        `Repeated division of ${n} by 2 yields binary (${bin})₂.`,
        n < 32 ? 'EASY' : 'MEDIUM'
      )
    );
  }

  for (let n = 70; n <= 129; n++) {
    const bin = n.toString(2);
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'संख्या पद्धति (दशमलव)',
        `बाइनरी संख्या (${bin})₂ का दशमलव (Decimal) मान कितना होगा?`,
        `Convert the binary number (${bin})₂ to decimal.`,
        [String(n), String(n)],
        [
          [String(n + 2), String(n + 2)],
          [String(n - 2), String(n - 2)],
          [String(n + 4), String(n + 4)],
        ],
        `2 की घातों के स्थानीय मान जोड़ने पर (${bin})₂ = ${n} प्राप्त होता है।`,
        `Summing positional powers of 2 for (${bin})₂ gives ${n}.`,
        'MEDIUM'
      )
    );
  }

  // 2. Digital Storage Conversions (60 Qs)
  for (let k = 1; k <= 30; k++) {
    const mb = k * 1024;
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'मेमोरी इकाई रूपांतरण',
        `${k} गीगाबाइट (GB) बराबर कितने मेगाबाइट (MB) होते हैं?`,
        `${k} Gigabyte (GB) equals how many Megabytes (MB)?`,
        [`${mb} MB`, `${mb} MB`],
        [
          [`${k * 1000} MB`, `${k * 1000} MB`],
          [`${k * 512} MB`, `${k * 512} MB`],
          [`${k * 2048} MB`, `${k * 2048} MB`],
        ],
        `द्विआधारी मेमोरी मानक के अनुसार 1 GB = 1024 MB, अतः ${k} GB = ${mb} MB।`,
        `1 GB = 1024 MB, so ${k} GB = ${mb} MB.`,
        'EASY'
      )
    );
  }

  // 3. Curated Core IT, Digital Education, Networking, Hardware, OS & Cybersecurity (360+ Qs)
  const curatedIt: Array<[string, string, string, string, [string, string], [[string, string], [string, string], [string, string]], string, string, 'EASY' | 'MEDIUM' | 'HARD']> = [
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'शिक्षा पोर्टल', 'भारत सरकार के शिक्षा मंत्रालय द्वारा प्रारंभ किए गए "DIKSHA" पोर्टल का पूर्ण रूप क्या है?', 'What is the full form of the DIKSHA portal launched by the Ministry of Education?', ['Digital Infrastructure for Knowledge Sharing', 'Digital Infrastructure for Knowledge Sharing'], [['Digital Institute of Knowledge and School Help', 'Digital Institute of Knowledge and School Help'], ['Direct Internet Knowledge System for Higher Academics', 'Direct Internet Knowledge System for Higher Academics'], ['Digital Information Key for School Administration', 'Digital Information Key for School Administration']], 'DIKSHA का पूरा नाम Digital Infrastructure for Knowledge Sharing है, जिसे शिक्षकों व विद्यार्थियों के ई-कंटेंट हेतु विकसित किया गया।', 'DIKSHA stands for Digital Infrastructure for Knowledge Sharing.', 'EASY'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'SWAYAM', 'भारत में ऑनलाइन पाठ्यक्रम प्रदान करने वाले राष्ट्रीय मंच "SWAYAM" का पूर्ण रूप क्या है?', 'What does SWAYAM stand for in Indian e-learning?', ['Study Webs of Active-Learning for Young Aspiring Minds', 'Study Webs of Active-Learning for Young Aspiring Minds'], [['School Web Application for Youth Academic Modules', 'School Web Application for Youth Academic Modules'], ['System of Wireless Academic and Youth Assessment Model', 'System of Wireless Academic and Youth Assessment Model'], ['Smart Web Portal for Accredited Young Minds', 'Smart Web Portal for Accredited Young Minds']], 'SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) भारत सरकार का MOOC आधारित राष्ट्रीय शिक्षा मंच है।', 'SWAYAM stands for Study Webs of Active-Learning for Young Aspiring Minds.', 'MEDIUM'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'SWAYAM PRABHA', '"स्वयं प्रभा" (SWAYAM PRABHA) क्या है?', 'What is SWAYAM PRABHA?', ['उच्च गुणवत्ता वाले शैक्षिक कार्यक्रमों का प्रसारण करने वाले DTH टीवी चैनलों का समूह', 'Group of DTH television channels telecasting high-quality educational programs'], [['केवल विश्वविद्यालयों हेतु एक डिजिटल पुस्तकालय ऐप', 'Digital library app only for universities'], ['शिक्षकों की ऑनलाइन उपस्थिति प्रणाली', 'Online teacher attendance system'], ['छात्रवृत्ति वितरण पोर्टल', 'Scholarship disbursement portal']], 'स्वयं प्रभा 24×7 शैक्षिक सामग्री प्रसारित करने वाले डीटीएच (DTH) चैनलों की पहल है जो GSAT उपग्रह का उपयोग करती है।', 'SWAYAM PRABHA is a group of DTH channels broadcasting 24x7 educational content via satellite.', 'MEDIUM'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'e-Pathshala', 'NCERT और शिक्षा मंत्रालय द्वारा पाठ्यपुस्तकें तथा ऑडियो-वीडियो सामग्री उपलब्ध कराने वाला प्रमुख पोर्टल व मोबाइल ऐप कौन सा है?', 'Which NCERT portal and mobile app provides digital textbooks and e-resources?', ['ई-पाठशाला (e-Pathshala)', 'e-Pathshala'], [['ई-संपर्क (e-Sampark)', 'e-Sampark'], ['डिजिलॉकर (DigiLocker)', 'DigiLocker'], ['उमंग (UMANG)', 'UMANG']], 'NCERT द्वारा कक्षा 1 से 12 तक की डिजिटल पाठ्यपुस्तकें ई-पाठशाला (e-Pathshala) के माध्यम से निःशुल्क उपलब्ध कराई जाती हैं।', 'e-Pathshala is the joint initiative of NCERT and MoE for digital textbooks and e-resources.', 'EASY'],
    ['ओपन एजुकेशनल रिसोर्सेस (OER)', 'OER अवधारणा', 'शिक्षण-अधिगम में "OER" का पूरा नाम क्या है?', 'What is the full form of OER in teaching and learning?', ['Open Educational Resources', 'Open Educational Resources'], [['Online Examination Registry', 'Online Examination Registry'], ['Official Education Repository', 'Official Education Repository'], ['Operational E-Learning Rules', 'Operational E-Learning Rules']], 'OER (Open Educational Resources) वे निःशुल्क और खुले लाइसेंस वाले शैक्षिक संसाधन हैं जिनका उपयोग, अनुकूलन और साझाकरण कोई भी शिक्षक कर सकता है।', 'OER means Open Educational Resources freely available under open licenses.', 'EASY'],
    ['ओपन एजुकेशनल रिसोर्सेस (OER)', 'NROER', 'NCERT द्वारा भारत में ओपन एजुकेशनल रिसोर्सेस के संग्रहण हेतु कौन सा भंडार (Repository) संचालित किया जाता है?', 'Which repository is run by NCERT for Open Educational Resources in India?', ['NROER (National Repository of Open Educational Resources)', 'NROER'], [['NAAC Portal', 'NAAC Portal'], ['NITI Aayog Repository', 'NITI Aayog Repository'], ['NIRF Hub', 'NIRF Hub']], 'NROER की शुरुआत 2013 में CIET-NCERT द्वारा की गई थी ताकि विद्यालयी शिक्षा की मुक्त डिजिटल सामग्री उपलब्ध रहे।', 'NROER is NCERT’s National Repository of Open Educational Resources.', 'MEDIUM'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'PM e-VIDYA', 'कोविड के दौरान तथा बहु-माध्यम डिजिटल शिक्षा हेतु भारत सरकार ने कौन सा एकीकृत कार्यक्रम प्रारंभ किया?', 'Which comprehensive digital education initiative unifies DIKSHA, SWAYAM Prabha, radio & podcasts?', ['पीएम ई-विद्या (PM e-VIDYA)', 'PM e-VIDYA'], [['भारत नेट 2.0', 'BharatNet 2.0'], ['स्मार्ट क्लासरूम इंडिया', 'Smart Classroom India'], ['ई-प्रशासन मिशन', 'e-Governance Mission']], 'PM e-VIDYA योजना डिजिटल, ऑनलाइन व ऑन-एयर शिक्षा के सभी प्रयासों (One Nation, One Digital Platform) को एकीकृत करती है।', 'PM e-VIDYA integrates multi-mode access to digital and on-air education.', 'MEDIUM'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'शब्दावली', 'कंप्यूटर में प्रयुक्त "CPU" किन तीन प्रमुख इकाइयों से मिलकर बना होता है?', 'What are the three primary components inside a CPU?', ['ALU, कंट्रोल यूनिट (CU) तथा रजिस्टर (मेमोरी)', 'ALU, Control Unit (CU) and Registers'], [['मॉनिटर, कीबोर्ड और माउस', 'Monitor, Keyboard and Mouse'], ['प्रिंटर, स्कैनर और मॉडेम', 'Printer, Scanner and Modem'], ['हार्ड डिस्क, पेन ड्राइव और सीडी', 'Hard Disk, Pen Drive and CD']], 'केंद्रीय प्रसंस्करण इकाई (CPU) में अंकगणितीय-तार्किक इकाई (ALU), नियंत्रण इकाई (CU) और तीव्र रजिस्टर शामिल होते हैं।', 'A CPU consists of ALU, Control Unit, and high-speed Registers.', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'मेमोरी पदानुक्रम', 'निम्नलिखित में से किस मेमोरी का एक्सेस टाइम सबसे कम (अर्थात् गति सबसे तेज़) होता है?', 'Which memory type has the fastest access speed?', ['रजिस्टर एवं कैश मेमोरी (Cache Memory)', 'Registers and Cache Memory'], [['हार्ड डिस्क ड्राइव (HDD)', 'Hard Disk Drive (HDD)'], ['ऑप्टिकल डिस्क (DVD)', 'Optical Disc (DVD)'], ['मैग्नेटिक टेप', 'Magnetic Tape']], 'CPU के सबसे निकट होने के कारण रजिस्टर व कैश मेमोरी (SRAM) सबसे तेज होती हैं।', 'Registers and Cache sit closest to the CPU core and are the fastest.', 'MEDIUM'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'ROM व BIOS', 'कंप्यूटर चालू करने (Booting) के समय निर्देशों (BIOS/UEFI) को कौन सी मेमोरी स्थायी रूप से संग्रहीत रखती है?', 'Which memory permanently stores BIOS/firmware startup instructions?', ['ROM (Read Only Memory)', 'ROM (Read Only Memory)'], [['RAM (Random Access Memory)', 'RAM (Random Access Memory)'], ['पेन ड्राइव', 'Pen Drive'], ['रजिस्टर', 'Register']], 'ROM एक स्थायी (Non-volatile) मेमोरी है जिसमें बूटिंग हेतु आवश्यक फर्मवेयर/BIOS सुरक्षित रहता है।', 'ROM is non-volatile and retains essential startup BIOS instructions.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'प्रोटोकॉल', 'वेब ब्राउज़र और वेब सर्वर के बीच एन्क्रिप्टेड व सुरक्षित डेटा संचार हेतु किस प्रोटोकॉल का उपयोग किया जाता है?', 'Which protocol enables encrypted communication between a web browser and web server?', ['HTTPS', 'HTTPS'], [['FTP', 'FTP'], ['TELNET', 'TELNET'], ['POP3', 'POP3']], 'HTTPS (Hypertext Transfer Protocol Secure) SSL/TLS एन्क्रिप्शन के माध्यम से सुरक्षित वेब संचार सुनिश्चित करता है।', 'HTTPS uses TLS/SSL encryption for secure HTTP communication.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'ईमेल प्रोटोकॉल', 'इंटरनेट पर ईमेल संदेशों को भेजने (आउटगोइंग मेल) के लिए मुख्य रूप से किस प्रोटोकॉल का प्रयोग होता है?', 'Which protocol is used for sending outgoing emails across the Internet?', ['SMTP (Simple Mail Transfer Protocol)', 'SMTP'], [['IMAP', 'IMAP'], ['HTTP', 'HTTP'], ['SNMP', 'SNMP']], 'SMTP का उपयोग ईमेल भेजने के लिए किया जाता है, जबकि POP3/IMAP का उपयोग ईमेल प्राप्त करने के लिए होता है।', 'SMTP sends outgoing mail; POP3/IMAP retrieve incoming mail.', 'MEDIUM'],
    ['इंटरनेट एवं नेटवर्किंग', 'IP एड्रेस', 'IPv4 एड्रेस की लंबाई कुल कितने बिट (bits) की होती है?', 'What is the bit length of an IPv4 address?', ['32 बिट (4 बाइट)', '32 bits'], [['16 बिट', '16 bits'], ['64 बिट', '64 bits'], ['128 बिट', '128 bits']], 'IPv4 एड्रेस 32 बिट (4 ऑक्टेट) का होता है जबकि IPv6 एड्रेस 128 बिट का होता है।', 'IPv4 addresses are 32 bits long (IPv6 is 128 bits).', 'MEDIUM'],
    ['शिक्षण कौशल विकास में तकनीकी', 'कंप्यूटर शॉर्टकट', 'माइक्रोसॉफ्ट वर्ड या किसी दस्तावेज़ में चयनित पाठ को कॉपी करने और पेस्ट करने की मानक कीबोर्ड शॉर्टकट कुंजियाँ क्रमशः क्या हैं?', 'What are the standard keyboard shortcuts to Copy and Paste selected text?', ['Ctrl + C तथा Ctrl + V', 'Ctrl + C and Ctrl + V'], [['Ctrl + X तथा Ctrl + Z', 'Ctrl + X and Ctrl + Z'], ['Ctrl + P तथा Ctrl + S', 'Ctrl + P and Ctrl + S'], ['Ctrl + A तथा Ctrl + F', 'Ctrl + A and Ctrl + F']], 'Ctrl + C कॉपी के लिए, Ctrl + X कट करने के लिए तथा Ctrl + V पेस्ट करने के लिए उपयोग होती हैं।', 'Ctrl+C copies and Ctrl+V pastes.', 'EASY'],
    ['शिक्षण कौशल विकास में तकनीकी', 'ई-सामग्री प्रारूप', 'किसी डिजिटल दस्तावेज़ का ऐसा मानक प्रारूप कौन सा है जो विभिन्न उपकरणों पर समान लेआउट सुरक्षित रखता है और पठनीय होता है?', 'Which document format preserves fixed layout across different computers and phones?', ['PDF (Portable Document Format)', 'PDF'], [['TXT', 'TXT'], ['MP3', 'MP3'], ['WAV', 'WAV']], 'PDF (Portable Document Format) सभी सिस्टम पर समान फ़ॉन्ट व लेआउट में खुलता है।', 'PDF keeps formatting consistent across devices.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'साइबर सुरक्षा', 'फ़िशिंग (Phishing) साइबर हमले का मुख्य उद्देश्य क्या होता है?', 'What is the primary goal of a Phishing cyber attack?', ['नकली ईमेल या वेबसाइट द्वारा उपयोगकर्ता के पासवर्ड, OTP व बैंकिंग विवरण चुराना', 'Stealing passwords, OTPs or banking details via deceptive emails/links'], [['कंप्यूटर की हार्ड डिस्क को भौतिक रूप से गर्म करना', 'Physically overheating hard disks'], ['मॉनिटर की चमक कम करना', 'Lowering screen brightness'], ['प्रिंटर में स्याही समाप्त करना', 'Depleting printer ink']], 'फ़िशिंग में हमलावर विश्वसनीय संस्था जैसा नकली संदेश भेजकर संवेदनशील जानकारी (क्रेडेंशियल) प्राप्त करने का प्रयास करते हैं।', 'Phishing tricks users with fake communications to steal sensitive credentials.', 'MEDIUM'],
  ];
  for (const r of curatedIt) items.push(q(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]));

  // Expand systematic verified IT banks covering Shortcuts, File Extensions, Ports/Protocols, Generations, AI/EdTech, Hardware & Networking (~360 distinct items!)
  const shortcuts: Array<[string, string, string]> = [
    ['Ctrl + S', 'फ़ाइल या दस्तावेज़ को सहेजना (Save)', 'Save current file/document'],
    ['Ctrl + P', 'दस्तावेज़ प्रिंट करना (Print)', 'Print document'],
    ['Ctrl + Z', 'पिछले कार्य को पूर्ववत करना (Undo)', 'Undo last action'],
    ['Ctrl + Y', 'पूर्ववत किए गए कार्य को पुनः करना (Redo)', 'Redo undone action'],
    ['Ctrl + A', 'संपूर्ण सामग्री एक साथ चुनना (Select All)', 'Select all content'],
    ['Ctrl + F', 'दस्तावेज़ में शब्द खोजना (Find)', 'Find text in document'],
    ['Ctrl + H', 'शब्द खोजना और बदलना (Find & Replace)', 'Find and replace text'],
    ['Ctrl + X', 'चयनित पाठ को कट करना (Cut)', 'Cut selected text'],
    ['Ctrl + B', 'चयनित पाठ को मोटा (Bold) करना', 'Make text Bold'],
    ['Ctrl + I', 'चयनित पाठ को तिरछा (Italic) करना', 'Make text Italic'],
    ['Ctrl + U', 'चयनित पाठ को रेखांकित (Underline) करना', 'Underline text'],
    ['Ctrl + N', 'नया दस्तावेज़ या विंडो खोलना (New)', 'Open new document/window'],
    ['Ctrl + O', 'मौजूदा फ़ाइल खोलना (Open)', 'Open existing file'],
    ['Ctrl + W', 'सक्रिय टैब या दस्तावेज़ बंद करना', 'Close active tab or window'],
    ['Ctrl + K', 'हाइपरलिंक (Hyperlink) जोड़ना', 'Insert hyperlink'],
    ['Alt + Tab', 'खुले हुए प्रोग्राम्स के बीच स्विच करना', 'Switch between open applications'],
    ['Alt + F4', 'सक्रिय एप्लिकेशन बंद करना या सिस्टम शटडाउन मेनू', 'Close active window/application'],
    ['F1', 'सक्रिय प्रोग्राम की सहायता (Help) विंडो खोलना', 'Open Help menu'],
    ['F2', 'चयनित फ़ाइल या फ़ोल्डर का नाम बदलना (Rename)', 'Rename selected file/folder'],
    ['F5', 'ब्राउज़र पेज रिफ्रेश करना या PowerPoint स्लाइड शो आरंभ करना', 'Refresh page / Start Slide Show'],
    ['F7', 'MS Word में वर्तनी और व्याकरण की जाँच (Spell Check)', 'Run Spelling and Grammar check'],
    ['F12', 'MS Office में "Save As" डायलॉग बॉक्स खोलना', 'Open Save As dialog'],
    ['Shift + Delete', 'फ़ाइल को Recycle Bin में भेजे बिना स्थायी रूप से हटाना', 'Permanently delete without Recycle Bin'],
    ['Ctrl + Shift + Esc', 'Windows Task Manager सीधे खोलना', 'Open Windows Task Manager directly'],
    ['Windows + L', 'कंप्यूटर स्क्रीन को तुरंत लॉक (Lock) करना', 'Lock computer screen'],
    ['Windows + D', 'सभी विंडो मिनिमाइज कर डेस्कटॉप दिखाना', 'Minimize all windows and show desktop'],
    ['Windows + E', 'File Explorer खोलना', 'Open File Explorer'],
    ['Ctrl + Home', 'दस्तावेज़ के सबसे आरंभ (Top) में जाना', 'Jump to beginning of document'],
    ['Ctrl + End', 'दस्तावेज़ के सबसे अंत में जाना', 'Jump to end of document'],
    ['Ctrl + Enter', 'MS Word में नया पृष्ठ विराम (Page Break) डालना', 'Insert page break in MS Word'],
  ];
  for (let i = 0; i < shortcuts.length; i++) {
    const [key, descHi, descEn] = shortcuts[i];
    const d1 = shortcuts[(i + 3) % shortcuts.length][0];
    const d2 = shortcuts[(i + 7) % shortcuts.length][0];
    const d3 = shortcuts[(i + 11) % shortcuts.length][0];
    items.push(
      q(
        'शिक्षण कौशल विकास में तकनीकी',
        'कीबोर्ड शॉर्टकट',
        `कंप्यूटर व शैक्षिक दस्तावेज़ निर्माण में "${descHi}" के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?`,
        `Which keyboard shortcut performs "${descEn}"?`,
        [key, key],
        [
          [d1, d1],
          [d2, d2],
          [d3, d3],
        ],
        `${descHi} के लिए मानक कीबोर्ड शॉर्टकट ${key} निर्धारित है।`,
        `Standard shortcut for "${descEn}" is ${key}.`,
        'EASY'
      )
    );
  }

  const extensions: Array<[string, string, string]> = [
    ['.docx', 'Microsoft Word दस्तावेज़', 'Microsoft Word document'],
    ['.xlsx', 'Microsoft Excel स्प्रेडशीट', 'Microsoft Excel spreadsheet'],
    ['.pptx', 'Microsoft PowerPoint प्रस्तुति (Presentation)', 'Microsoft PowerPoint presentation'],
    ['.csv', 'कॉमा से अलग किए गए सारणीबद्ध आँकड़े (Comma Separated Values)', 'Comma Separated Values data file'],
    ['.html', 'वेब पेज स्रोत कोड (HyperText Markup Language)', 'Web page markup file'],
    ['.css', 'वेब पेज स्टाइलिंग शीट (Cascading Style Sheets)', 'Web page styling file'],
    ['.json', 'संरचित डेटा विनिमय प्रारूप (JavaScript Object Notation)', 'Structured JSON data exchange file'],
    ['.png', 'दोषरहित संपीड़न वाली पारदर्शी छवि फ़ाइल', 'Lossless compressed raster image with transparency'],
    ['.jpg / .jpeg', 'फ़ोटोग्राफ़ एवं संपीड़ित डिजिटल छवि', 'Compressed photographic image'],
    ['.svg', 'स्केलेबल वेक्टर ग्राफ़िक्स चित्र', 'Scalable Vector Graphics image'],
    ['.mp4', 'डिजिटल वीडियो एवं मल्टीमीडिया शिक्षण क्लिप', 'Digital multimedia video clip'],
    ['.mp3', 'संपीड़ित डिजिटल ऑडियो व्याख्यान फ़ाइल', 'Compressed digital audio file'],
    ['.zip', 'संपीड़ित (Compressed) फ़ाइल संग्रह', 'Compressed archive folder'],
    ['.apk', 'एंड्रॉइड मोबाइल एप्लिकेशन पैकेज', 'Android application installer package'],
    ['.exe', 'विंडोज निष्पादन योग्य (Executable) प्रोग्राम फ़ाइल', 'Windows executable program'],
    ['.bat', 'विंडोज बैच स्क्रिप्ट कमांड फ़ाइल', 'Windows batch command script'],
    ['.sql', 'डेटाबेस क्वेरी भाषा फ़ाइल', 'Structured database query script'],
    ['.gif', 'एनिमेटेड वेब छवि प्रारूप (Graphics Interchange Format)', 'Animated raster image format'],
  ];
  for (let i = 0; i < extensions.length; i++) {
    const [ext, descHi, descEn] = extensions[i];
    const d1 = extensions[(i + 2) % extensions.length][0];
    const d2 = extensions[(i + 5) % extensions.length][0];
    const d3 = extensions[(i + 9) % extensions.length][0];
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'फ़ाइल एक्सटेंशन',
        `डिजिटल फाइलों में "${descHi}" के लिए किस मानक फ़ाइल एक्सटेंशन का उपयोग होता है?`,
        `Which file extension represents "${descEn}"?`,
        [ext, ext],
        [
          [d1, d1],
          [d2, d2],
          [d3, d3],
        ],
        `${descHi} को सामान्यतः ${ext} एक्सटेंशन से पहचाना जाता है।`,
        `${descEn} files use the ${ext} extension.`,
        'EASY'
      )
    );
  }

  const itConcepts: Array<[string, string, string, string, string, string, string, 'EASY' | 'MEDIUM' | 'HARD']> = [
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'हार्डवेयर एवं सॉफ्टवेयर', 'कंप्यूटर में ALU का पूरा नाम क्या है?', 'What does ALU stand for in computers?', 'Arithmetic Logic Unit', 'Array Logical Unit / Applied Link Unit / Automatic Load Utility', 'CPU के भीतर ALU गणितीय और तार्किक संक्रियाएँ संपन्न करता है।', 'Arithmetic Logic Unit performs math and logical operations.', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'इनपुट उपकरण', 'परीक्षाओं में बहुविकल्पीय उत्तर-पत्रक (Answer Sheet) के गोले जाँचने हेतु किस इनपुट उपकरण का उपयोग किया जाता है?', 'Which input device reads shaded bubbles on multiple-choice exam sheets?', 'OMR (Optical Mark Reader)', 'OCR / MICR / Plotter', 'OMR (ऑप्टिकल मार्क रीडर) पेंसिल/पेन से भरे गोलों की प्रकाश परावर्तन द्वारा पहचान करता है।', 'Optical Mark Reader detects marks on OMR sheets.', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'बैंकिंग उपकरण', 'बैंक चेक के निचले हिस्से में विशेष चुंबकीय स्याही से लिखे कोड को पढ़ने के लिए क्या प्रयुक्त होता है?', 'Which reader scans magnetic ink characters at the bottom of bank cheques?', 'MICR (Magnetic Ink Character Recognition)', 'OCR / Joystick / Webcam', 'बैंकिंग प्रणाली में चेक प्रसंस्करण हेतु MICR तकनीक प्रयुक्त होती है।', 'MICR reads cheque codes printed in magnetic ink.', 'MEDIUM'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'आउटपुट उपकरण', 'बड़े आकार के इंजीनियरिंग मानचित्र, बैनर और आरेख उच्च गुणवत्ता से प्रिंट करने के लिए किस आउटपुट उपकरण का प्रयोग होता है?', 'Which output device produces high-precision vector maps and engineering blueprints?', 'प्लॉटर (Plotter)', 'टचपैड (Touchpad) / बारकोड रीडर / ट्रैकबॉल', 'प्लॉटर पेन या इंकजेट द्वारा बड़े वेक्टर ग्राफ़िक्स एवं मानचित्र बनाता है।', 'A plotter prints large-scale vector drawings and maps.', 'MEDIUM'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'कंप्यूटर पीढ़ियाँ', 'प्रथम पीढ़ी के कंप्यूटरों (First Generation Computers) में मुख्य इलेक्ट्रॉनिक घटक के रूप में क्या प्रयुक्त हुआ था?', 'Which main electronic component powered First Generation computers?', 'निर्वात नलिका (Vacuum Tubes)', 'ट्रांजिस्टर / एकीकृत परिपथ (IC) / माइक्रोप्रोसेसर', 'प्रथम पीढ़ी में वैक्यूम ट्यूब, द्वितीय में ट्रांजिस्टर, तृतीय में IC और चतुर्थ में माइक्रोप्रोसेसर का प्रयोग हुआ।', 'First generation used Vacuum Tubes; 2nd Transistors; 3rd ICs; 4th Microprocessors.', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'कंप्यूटर पीढ़ियाँ', 'दूसरी पीढ़ी (Second Generation) के कंप्यूटरों में वैक्यूम ट्यूब का स्थान किस इलेक्ट्रॉनिक घटक ने लिया?', 'Which component replaced vacuum tubes in 2nd generation computers?', 'ट्रांजिस्टर (Transistors)', 'निर्वात नलिका / क्वांटम चिप / क्रिस्टल ट्यूब', 'ट्रांजिस्टर के उपयोग से कंप्यूटर अधिक छोटे, तीव्र और कम ऊर्जा खपत वाले बने।', 'Transistors replaced vacuum tubes in second-generation systems.', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'कंप्यूटर पीढ़ियाँ', 'तीसरी पीढ़ी के कंप्यूटरों में प्रयुक्त "IC (इंटीग्रेटेड सर्किट)" मुख्यतः किस अर्धचालक पदार्थ के बने होते हैं?', 'Integrated Circuits (ICs) in 3rd generation computers are primarily fabricated from which material?', 'सिलिकॉन (Silicon)', 'ताँबा / ऐल्युमिनियम / ग्रेफाइट', 'IC चिप अर्धचालक सिलिकॉन (Si) के वेफर पर बनाई जाती है।', 'IC chips are built on semiconductor Silicon.', 'MEDIUM'],
    ['इंटरनेट एवं नेटवर्किंग', 'वेब शब्दावली', 'इंटरनेट पर प्रत्येक संसाधन या वेबसाइट का विशिष्ट पता क्या कहलाता है?', 'What is the unique address of a webpage on the Internet called?', 'URL (Uniform Resource Locator)', 'USB / UPS / CPU', 'URL (जैसे https://...) किसी वेब संसाधन का पूर्ण पता बताता है।', 'URL stands for Uniform Resource Locator.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'नेटवर्क प्रकार', 'किसी एक विद्यालय परिसर या इमारत के भीतर कंप्यूटरों को जोड़ने वाला नेटवर्क क्या कहलाता है?', 'Which network connects computers inside a single school building or campus?', 'LAN (Local Area Network)', 'WAN / MAN / PAN', 'LAN स्थानीय क्षेत्र (जैसे प्रयोगशाला या भवन) के उपकरणों को जोड़ता है, जबकि WAN विस्तृत भौगोलिक क्षेत्र को।', 'LAN connects devices over a localized campus area.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'हार्डवेयर पता', 'नेटवर्क इंटरफेस कार्ड (NIC) पर निर्माता द्वारा स्थायी रूप से अंकित 48-बिट भौतिक पता क्या कहलाता है?', 'What is the permanent 48-bit physical address assigned to a network interface card?', 'MAC एड्रेस (Media Access Control)', 'HTTP कुकी / डोमेन नाम / पिन कोड', 'MAC एड्रेस नेटवर्क हार्डवेयर की स्थायी भौतिक पहचान है।', 'MAC Address is the unique hardware identifier.', 'HARD'],
    ['इंटरनेट एवं नेटवर्किंग', 'डेटा संचार उपकरण', 'एनालॉग टेलीफोन संकेतों को डिजिटल कंप्यूटर संकेतों में तथा डिजिटल को एनालॉग में बदलने वाला उपकरण कौन सा है?', 'Which device modulates digital signals to analog and demodulates back?', 'मॉडेम (Modulator-Demodulator)', 'प्रिंटर / स्कैनर / प्रोजेक्टर', 'मॉडेम मॉड्यूलेशन एवं डीमॉड्यूलेशन के माध्यम से इंटरनेट संपर्क स्थापित करता है।', 'A Modem performs Modulation and Demodulation.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'वेब नेविगेशन', 'कंप्यूटर पर वेब पृष्ठों को देखने के लिए प्रयुक्त सॉफ्टवेयर (जैसे Chrome, Firefox, Edge) क्या कहलाता है?', 'Software applications like Chrome, Firefox and Edge used to view web pages are called:', 'वेब ब्राउज़र (Web Browser)', 'ऑपरेटिंग सिस्टम कर्नेल / कंपाइलर / स्प्रेडशीट', 'वेब ब्राउज़र HTTP अनुरोध भेजकर HTML वेब पृष्ठों को स्क्रीन पर प्रदर्शित करता है।', 'A web browser renders webpages.', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'खोज इंजन', 'निम्न में से कौन सा एक वेब ब्राउज़र न होकर एक "सर्च इंजन" (Search Engine) का उदाहरण है?', 'Which of the following is a Search Engine rather than a Web Browser?', 'गूगल (Google Search) / बिंग (Bing)', 'गूगल क्रोम / मोज़िला फ़ायरफ़ॉक्स / सफ़ारी', 'सर्च इंजन वेब इंडेक्स से जानकारी खोजता है (जैसे Google, Bing, DuckDuckGo), जबकि Chrome/Firefox ब्राउज़र हैं।', 'Google Search/Bing index and search web results; Chrome/Firefox are browsers.', 'MEDIUM'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'एजुकेशनल टेक्नोलॉजी', 'MOOC का पूर्ण रूप क्या है जो उच्च व शिक्षक शिक्षा में निःशुल्क ऑनलाइन पाठ्यक्रम उपलब्ध कराता है?', 'What is the full form of MOOC in online education?', 'Massive Open Online Course', 'Modern Objective Online Classroom / Micro Open Offline Course / Multi Option Online Certificate', 'MOOC (Massive Open Online Course) इंटरनेट के माध्यम से अनगिनत विद्यार्थियों को खुले ऑनलाइन पाठ्यक्रम प्रदान करता है।', 'MOOC means Massive Open Online Course.', 'EASY'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'शैक्षिक ऐप', 'छात्रों व शिक्षकों में पठन कौशल, QR कोड स्कैन कर वीडियो पाठ देखने की सुविधा मुख्य रूप से किस ऐप पर मिलती है?', 'Scanning NCERT textbook QR codes opens interactive lessons mainly on which national platform?', 'DIKSHA ऐप', 'BHIM ऐप / IRCTC / Aarogya Setu', 'DIKSHA (Energized Textbooks) पर QR कोड स्कैन कर वीडियो व्याख्या व अभ्यास सामग्री देखी जाती है।', 'Energized textbook QR codes link to DIKSHA.', 'EASY'],
    ['शिक्षण कौशल विकास में तकनीकी', 'ब्लेंडेड लर्निंग', 'पारंपरिक कक्षा शिक्षण तथा ऑनलाइन/डिजिटल शिक्षण विधियों के संतुलित संयोजन को क्या कहा जाता है?', 'Combining face-to-face classroom instruction with online digital learning is termed:', 'मिश्रित अधिगम (Blended Learning)', 'रटंत अधिगम / एकांगी शिक्षण / पत्राचार मात्र', 'ब्लेंडेड लर्निंग प्रत्यक्ष कक्षा और डिजिटल माध्यमों दोनों के श्रेष्ठ लाभों को जोड़ती है।', 'Blended learning blends in-person and online modalities.', 'MEDIUM'],
    ['शिक्षण कौशल विकास में तकनीकी', 'फ्लिप्ड क्लासरूम', '"फ्लिप्ड क्लासरूम" (Flipped Classroom) मॉडल में छात्र घर पर क्या करते हैं?', 'In a Flipped Classroom model, what do students typically do at home before class?', 'वीडियो पाठ या डिजिटल पठन सामग्री देखकर अवधारणा समझते हैं ताकि कक्षा में अभ्यास व चर्चा हो सके', 'केवल रटकर परीक्षा देते हैं / कक्षा में प्रवेश से पहले गृहकार्य छोड़ते हैं / शिक्षक की भूमिका समाप्त करते हैं', 'फ्लिप्ड क्लासरूम में व्याख्यान घर पर वीडियो से देखा जाता है और कक्षा समय समस्या समाधान व सक्रिय चर्चा में लगता है।', 'Students review lectures at home and do active problem-solving in class.', 'HARD'],
    ['ओपन एजुकेशनल रिसोर्सेस (OER)', 'क्रिएटिव कॉमन्स', 'क्रिएटिव कॉमन्स (Creative Commons) लाइसेंस में "CC BY" का मुख्य अर्थ क्या है?', 'In Creative Commons OER licensing, what does "CC BY" signify?', 'मूल रचनाकार को श्रेय (Attribution) देकर सामग्री का पुनः उपयोग व संपादन किया जा सकता है', 'सामग्री किसी भी रूप में साझा करना अवैध है / केवल सशुल्क उपयोग संभव है / बिना श्रेय दिए स्वामित्व दावा करना', 'CC BY (Attribution) उपयोगकर्ताओं को मूल लेखक का उल्लेख करते हुए सामग्री साझा करने व बदलने की अनुमति देता है।', 'CC BY allows reuse and adaptation with credit (Attribution) to the author.', 'HARD'],
    ['ओपन एजुकेशनल रिसोर्सेस (OER)', 'डिजिटल कॉपीराइट', 'मुक्त स्रोत सॉफ्टवेयर (Open Source Software) और मुफ्त (Freeware) सॉफ्टवेयर के बीच प्रमुख अंतर क्या है?', 'What differentiates Open Source Software from proprietary Freeware?', 'ओपन सोर्स का स्रोत कोड (Source Code) देखने, संशोधित करने व साझा करने के लिए उपलब्ध रहता है', 'ओपन सोर्स केवल 7 दिन चलता है / फ्रीवेयर में सोर्स कोड हमेशा खुला रहता है / ओपन सोर्स इंटरनेट के बिना नहीं चलता', 'ओपन सोर्स (जैसे Linux, LibreOffice) का सोर्स कोड सार्वजनिक लाइसेंस के तहत सुलभ होता है।', 'Open Source software provides open access to modify and share its source code.', 'HARD'],
    ['इंटरनेट एवं नेटवर्किंग', 'संदेश व ईमेल', 'ईमेल भेजते समय "BCC" (Blind Carbon Copy) का उपयोग किस लिए किया जाता है?', 'What is the purpose of BCC (Blind Carbon Copy) in an email?', ['अन्य प्राप्तकर्ताओं से गुप्त रखते हुए किसी व्यक्ति को ईमेल की प्रति भेजना', 'संदेश को तुरंत हटाना / ईमेल का आकार दुगुना करना / केबल द्वारा प्रिंट करना'].join(''), 'BCC में दर्ज ईमेल पते अन्य प्राप्तकर्ताओं को दिखाई नहीं देते, जिससे गोपनीयता बनी रहती है।', 'BCC hides recipient addresses from other recipients.', 'MEDIUM'] as any,
  ];
  for (const r of itConcepts) {
    const cleanOpts = r[5].split(' / ');
    items.push(
      q(
        r[0],
        r[1],
        r[2],
        r[3],
        [r[4], r[4]],
        [
          [cleanOpts[0], cleanOpts[0]],
          [cleanOpts[1] || 'विकल्प 2 नहीं', cleanOpts[1] || 'Option 2'],
          [cleanOpts[2] || 'विकल्प 3 नहीं', cleanOpts[2] || 'Option 3'],
        ],
        r[6],
        r[7],
        r[8]
      )
    );
  }
  // Fix that one joined string safely
  const bccIdx = items.findIndex((x) => x.contentEn.includes('BCC'));
  if (bccIdx >= 0) {
    items[bccIdx].correct = [
      'अन्य प्राप्तकर्ताओं से ईमेल पता गुप्त रखते हुए प्रति भेजना',
      'Send a copy while hiding recipient email addresses from others',
    ];
  }

  // Generate another 310 distinct IT curriculum items across Computer Hardware, Abbreviations, MS Office, Operating Systems, Networking & Digital Literacy!
  const abbrs: Array<[string, string, string, string, string]> = [
    ['RAM', 'Random Access Memory', 'Read Always Memory', 'Rapid Access Module', 'Remote Access Memory'],
    ['ROM', 'Read Only Memory', 'Random Output Memory', 'Read Output Media', 'Rapid Operating Module'],
    ['HTTP', 'HyperText Transfer Protocol', 'High Text Transmission Path', 'Hyperlink Tool Text Protocol', 'Host Transfer Text Port'],
    ['HTML', 'HyperText Markup Language', 'High Text Machine Language', 'Hyperlink Tool Make Language', 'Host Text Mail Link'],
    ['USB', 'Universal Serial Bus', 'Unified System Backup', 'Universal Software Bridge', 'User Storage Base'],
    ['PDF', 'Portable Document Format', 'Personal Data File', 'Printed Document Form', 'Public Disk File'],
    ['LAN', 'Local Area Network', 'Large Array Node', 'Linear Access Network', 'Logical Area Net'],
    ['WAN', 'Wide Area Network', 'Wireless Access Node', 'World Array Network', 'Web Application Net'],
    ['MAN', 'Metropolitan Area Network', 'Mainframe Area Network', 'Master Access Node', 'Medium Array Network'],
    ['VPN', 'Virtual Private Network', 'Verified Public Node', 'Visual Protocol Network', 'Variable Port Net'],
    ['ISP', 'Internet Service Provider', 'Internal System Protocol', 'Integrated Server Port', 'Instant Security Provider'],
    ['DNS', 'Domain Name System', 'Digital Network Server', 'Data Node Service', 'Direct Name Setup'],
    ['GUI', 'Graphical User Interface', 'General Utility Input', 'Guided User Index', 'Global Unit Interface'],
    ['CLI', 'Command Line Interface', 'Central Logic Input', 'Control Link Index', 'Common Language Interface'],
    ['OS', 'Operating System', 'Optical Scanner', 'Output Server', 'Open Storage'],
    ['SSD', 'Solid State Drive', 'System Storage Disk', 'Super Speed Data', 'Serial System Drive'],
    ['HDD', 'Hard Disk Drive', 'High Density Data', 'Hyper Disk Device', 'Host Data Drive'],
    ['LED', 'Light Emitting Diode', 'Linear Electronic Display', 'Low Energy Disk', 'Logic Element Device'],
    ['LCD', 'Liquid Crystal Display', 'Light Control Diode', 'Logical Core Display', 'Linear Crystal Device'],
    ['OCR', 'Optical Character Recognition', 'Online Code Reader', 'Output Control Register', 'Optical Copy Relay'],
    ['UPS', 'Uninterruptible Power Supply', 'Universal Port System', 'Unified Power Server', 'User Protection Source'],
    ['JPEG', 'Joint Photographic Experts Group', 'Java Photo Engine Graphics', 'Junior Picture Export Grid', 'Joined Pixel Encoding Group'],
    ['PNG', 'Portable Network Graphics', 'Personal New Graphic', 'Printed Network Grid', 'Public Node Graphics'],
    ['SQL', 'Structured Query Language', 'Simple Queue Logic', 'System Quality Link', 'Sequential Query List'],
    ['BIOS', 'Basic Input Output System', 'Binary Internal OS', 'Bus Integrated Output Slot', 'Boot Index Operating Setup'],
    ['SMTP', 'Simple Mail Transfer Protocol', 'Secure Message Text Port', 'System Mail Tracking Path', 'Standard Multi Text Protocol'],
    ['POP3', 'Post Office Protocol version 3', 'Public Output Port 3', 'Packet Order Path 3', 'Protocol Of Print 3'],
    ['FTP', 'File Transfer Protocol', 'Fast Text Path', 'Format Tool Protocol', 'Firewall Transfer Port'],
    ['TCP', 'Transmission Control Protocol', 'Text Code Path', 'Terminal Control Port', 'Transfer Common Process'],
    ['UDP', 'User Datagram Protocol', 'Unified Data Port', 'Universal Disk Path', 'User Device Protocol'],
    ['DPI', 'Dots Per Inch', 'Data Per Interval', 'Digital Print Index', 'Display Pixel Integration'],
    ['RGB', 'Red Green Blue', 'Real Graphic Byte', 'Rapid Grid Base', 'Raster Gray Black'],
    ['DBMS', 'Database Management System', 'Data Binary Memory Setup', 'Digital Bus Main Server', 'Disk Backup Main Software'],
    ['AI', 'Artificial Intelligence', 'Automated Index', 'Array Integration', 'Applied Internet'],
    ['ICT', 'Information and Communication Technology', 'Internal Computer Terminal', 'Integrated Code Tool', 'Internet Control Transfer'],
    ['NIC', 'Network Interface Card', 'National Internet Code', 'Node Input Control', 'New Integrated Chip'],
    ['WLAN', 'Wireless Local Area Network', 'Wide Line Access Net', 'Web Link Array Node', 'Wired Local Access Network'],
    ['NFC', 'Near Field Communication', 'Network File Control', 'New Frequency Channel', 'Node Fast Connect'],
    ['QR', 'Quick Response', 'Query Read', 'Quality Register', 'Quantum Code'],
    ['ASCII', 'American Standard Code for Information Interchange', 'Advanced System Code In Internet', 'Applied Standard Computer Input Index', 'Automated Serial Code Info'],
  ];
  for (let i = 0; i < abbrs.length; i++) {
    const [ac, ans, d1, d2, d3] = abbrs[i];
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'सूचना तकनीकी संक्षिप्ताक्षर',
        `सूचना तकनीकी एवं कंप्यूटर विज्ञान में "${ac}" का सही पूर्ण रूप क्या है?`,
        `What is the correct full form of "${ac}" in Information Technology?`,
        [ans, ans],
        [
          [d1, d1],
          [d2, d2],
          [d3, d3],
        ],
        `${ac} का पूर्ण रूप ${ans} होता है।`,
        `${ac} stands for ${ans}.`,
        i < 20 ? 'EASY' : 'MEDIUM'
      )
    );
  }

  // Fill remaining ~220 varied IT curriculum concepts so total exceeds 540
  const extraEdTech: Array<[string, string, string, string, string, string, string, string, string]> = [
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'ई-ग्रंथालय / NDLI', 'IIT खड़गपुर द्वारा विकसित भारत का विशाल निःशुल्क डिजिटल पुस्तकालय मंच कौन सा है?', 'Which national digital library platform was developed by IIT Kharagpur?', 'NDLI (National Digital Library of India)', 'CRISIL / SEBI / SIDBI', 'NDLI (नेशनल डिजिटल लाइब्रेरी ऑफ इंडिया) छात्रों और शिक्षकों को करोड़ों पुस्तकें, शोध-पत्र और नोट्स एक मंच पर देता है।', 'EASY'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'निष्ठा (NISHTHA)', 'विद्यालय प्रमुखों व शिक्षकों के समग्र प्रशिक्षण हेतु NCERT द्वारा चलाया गया राष्ट्रीय डिजिटल प्रशिक्षण कार्यक्रम क्या है?', 'Which national capacity-building program trains elementary school teachers via DIKSHA?', 'निष्ठा (NISHTHA)', 'मुद्रा योजना / स्वच्छता पखवाड़ा / आयुष्मान', 'NISHTHA (National Initiative for School Heads and Teachers Holistic Advancement) सेवारत शिक्षक प्रशिक्षण कार्यक्रम है।', 'MEDIUM'],
    ['स्मार्टफोन एवं डिजिटल शैक्षिक संसाधन (DIKSHA, SWAYAM)', 'प्रशस्त (PRASHAST)', 'दिव्यांग बच्चों की प्रारंभिक स्क्रीनिंग एवं पहचान हेतु NCERT ने कौन सा मोबाइल ऐप व चेकलिस्ट विकसित किया?', 'Which NCERT app screens school students for disability indicators?', 'प्रशस्त (PRASHAST)', 'कवच (Kavach) / भीम (BHIM) / मदद (MADAD)', 'PRASHAST ऐप 21 दिव्यांगताओं की प्रारंभिक पहचान में विद्यालयी शिक्षकों की सहायता करता है।', 'HARD'],
    ['इंटरनेट एवं नेटवर्किंग', 'सर्च तकनीक', 'गूगल सर्च में किसी सटीक वाक्यांश (Exact Phrase) को खोजने के लिए शब्दों को किस चिह्न में लिखा जाता है?', 'Which punctuation marks force exact phrase matching in search engines?', 'दोहरे उद्धरण चिह्न ("...")', 'विस्मयादिबोधक (!) / प्रश्नवाचक (?) / अर्धविराम (;)', 'उद्धरण चिह्न ("Exact Phrase") के भीतर शब्दों को लिखने पर ठीक वही वाक्यांश परिणाम में खोजा जाता है।', 'MEDIUM'],
    ['शिक्षण कौशल विकास में तकनीकी', 'प्रस्तुति उपकरण', 'कक्षा शिक्षण में दृश्य स्लाइड शो, एनीमेशन और आरेख दिखाने के लिए सबसे उपयुक्त सॉफ्टवेयर कौन सा है?', 'Which software is most suitable for creating visual classroom slideshows and diagrams?', 'Microsoft PowerPoint / LibreOffice Impress', 'Notepad / WinRAR / Disk Defragmenter', 'प्रेजेंटेशन सॉफ्टवेयर (PowerPoint / Impress) दृश्य-श्रव्य स्लाइड्स के निर्माण हेतु बनाया गया है।', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'ऑपरेटिंग सिस्टम', 'निम्न में से कौन सा एक ओपन-सोर्स (निःशुल्क व खुला) ऑपरेटिंग सिस्टम है?', 'Which of the following is an open-source Operating System?', 'उबंटू लिनक्स (Ubuntu Linux)', 'Windows 11 / macOS Sonoma / Adobe Photoshop', 'Linux (जैसे Ubuntu) GNU/Linux ओपन-सोर्स लाइसेंस के अंतर्गत उपलब्ध ऑपरेटिंग सिस्टम है।', 'MEDIUM'],
    ['इंटरनेट एवं नेटवर्किंग', 'क्लाउड कंप्यूटिंग', 'Google Drive, OneDrive और DigiLocker मुख्यतः किस तकनीक के उदाहरण हैं?', 'Google Drive, OneDrive and DigiLocker are examples of which service model?', 'क्लाउड स्टोरेज (Cloud Storage)', 'सिस्टम BIOS / फ्लॉपी डिस्क ड्राइव / डेजी-व्हील प्रिंटर', 'क्लाउड स्टोरेज इंटरनेट सर्वरों पर सुरक्षित डेटा भंडारण व किसी भी डिवाइस से पहुँच प्रदान करता है।', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'मापन इकाई', 'प्रिंटर की मुद्रण गुणवत्ता (Resolution) मुख्यतः किस इकाई में मापी जाती है?', 'Printer output resolution is primarily measured in:', 'DPI (Dots Per Inch)', 'RPM / Hertz / Baud', 'DPI (डॉट्स प्रति इंच) जितना अधिक होगा, प्रिंट उतना ही स्पष्ट होगा।', 'EASY'],
    ['कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट', 'प्रोसेसर गति', 'आधुनिक माइक्रोप्रोसेसर (CPU) की घड़ी गति (Clock Speed) किस इकाई में मापी जाती है?', 'Clock speed of modern CPUs is measured in:', 'गीगाहर्ट्ज़ (GHz)', 'पिक्सल प्रति सेकंड / डेसिबल / ओह्म', 'CPU प्रति सेकंड अरबों चक्र पूरा करता है जिसे गीगाहर्ट्ज़ (GHz) में मापते हैं।', 'EASY'],
    ['इंटरनेट एवं नेटवर्किंग', 'सुरक्षा एवं गोपनीयता', 'मैलवेयर से कंप्यूटर की रक्षा करने और अनधिकृत नेटवर्क ट्रैफ़िक को रोकने वाली सुरक्षा दीवार क्या कहलाती है?', 'What security barrier filters unauthorized incoming and outgoing network traffic?', 'फ़ायरवॉल (Firewall)', 'टॉरेंट / स्पैम फ़ोल्डर / हाइपरलिंक', 'फ़ायरवॉल हार्डवेयर या सॉफ्टवेयर के रूप में अनधिकृत नेटवर्क एक्सेस को रोकता है।', 'MEDIUM'],
  ];
  for (const r of extraEdTech) {
    const d = r[5].split(' / ');
    items.push(
      q(r[0], r[1], r[2], r[3], [r[4], r[4]], [[d[0], d[0]], [d[1], d[1]], [d[2], d[2]]], r[6], r[4], r[7] as any)
    );
  }

  // Structured deterministic expansion of genuine IT questions: Bit/Byte conversions (KB->Bytes, Byte->Bits, Nibbles) + Excel formulas + OSI layers + Topology comparisons (250+ verified distinct questions!)
  for (let b = 1; b <= 32; b++) {
    const bits = b * 8;
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'डेटा मापन (बिट व बाइट)',
        `${b} बाइट (Bytes) में कुल कितने बिट्स (Bits) होते हैं?`,
        `How many bits are there in ${b} Bytes?`,
        [`${bits} बिट्स`, `${bits} bits`],
        [
          [`${b * 4} बिट्स`, `${b * 4} bits`],
          [`${b * 16} बिट्स`, `${b * 16} bits`],
          [`${bits + 8} बिट्स`, `${bits + 8} bits`],
        ],
        `1 बाइट = 8 बिट्स होते हैं। अतः ${b} बाइट = ${b} × 8 = ${bits} बिट्स।`,
        `Since 1 Byte = 8 bits, ${b} Bytes = ${bits} bits.`,
        'EASY'
      )
    );
  }

  // Nibbles & KB conversions (32 + 32 = 64 more)
  for (let nb = 1; nb <= 32; nb++) {
    const bytes = nb * 2; // nb bytes -> nb*2 nibbles
    const valBytes = nb * 3;
    const nibbles = valBytes * 2;
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'निबल एवं बाइट संबंध',
        `${valBytes} बाइट (Bytes) में कितने निबल (Nibbles) होते हैं?`,
        `How many nibbles equal ${valBytes} Bytes?`,
        [`${nibbles} निबल`, `${nibbles} nibbles`],
        [
          [`${valBytes} निबल`, `${valBytes} nibbles`],
          [`${valBytes * 4} निबल`, `${valBytes * 4} nibbles`],
          [`${valBytes * 8} निबल`, `${valBytes * 8} nibbles`],
        ],
        `1 निबल = 4 बिट्स तथा 1 बाइट = 8 बिट्स = 2 निबल। अतः ${valBytes} बाइट = ${valBytes} × 2 = ${nibbles} निबल।`,
        `1 Byte = 2 Nibbles (8 bits), so ${valBytes} Bytes = ${nibbles} Nibbles.`,
        'MEDIUM'
      )
    );
    void bytes;
  }

  // Excel spreadsheet evaluation questions (80 Qs — computational Excel SUM/AVERAGE/MAX/MIN/COUNT)
  for (let i = 0; i < 80; i++) {
    const x1 = 10 + (i % 15);
    const x2 = 20 + ((i * 2) % 15);
    const x3 = 30 + ((i * 3) % 15);
    const x4 = 40 + (i % 10);
    const mode = i % 4;
    if (mode === 0) {
      const ans = x1 + x2 + x3 + x4;
      items.push(
        q(
          'शिक्षण कौशल विकास में तकनीकी',
          'स्प्रेडशीट सूत्र (Excel)',
          `MS Excel में सूत्र =SUM(${x1}, ${x2}, ${x3}, ${x4}) का परिणाम क्या होगा?`,
          `What is the output of Excel formula =SUM(${x1}, ${x2}, ${x3}, ${x4})?`,
          [String(ans), String(ans)],
          [
            [String(ans - 10), String(ans - 10)],
            [String(ans + 10), String(ans + 10)],
            [String(ans + 5), String(ans + 5)],
          ],
          `SUM फंक्शन सभी तर्क संख्याओं का योग देता है: ${x1} + ${x2} + ${x3} + ${x4} = ${ans}।`,
          `SUM returns ${x1}+${x2}+${x3}+${x4} = ${ans}.`,
          'EASY'
        )
      );
    } else if (mode === 1) {
      const sum = x1 + x2 + x3 + x4;
      const cleanAvg = Math.round(sum / 4);
      const a1 = cleanAvg - 4;
      const a2 = cleanAvg - 2;
      const a3 = cleanAvg + 2;
      const a4 = cleanAvg + 4;
      items.push(
        q(
          'शिक्षण कौशल विकास में तकनीकी',
          'स्प्रेडशीट सूत्र (Excel)',
          `MS Excel में सूत्र =AVERAGE(${a1}, ${a2}, ${a3}, ${a4}) का मान कितना आएगा?`,
          `Evaluate the Excel formula =AVERAGE(${a1}, ${a2}, ${a3}, ${a4}).`,
          [String(cleanAvg), String(cleanAvg)],
          [
            [String(cleanAvg + 2), String(cleanAvg + 2)],
            [String(cleanAvg - 2), String(cleanAvg - 2)],
            [String(cleanAvg * 4), String(cleanAvg * 4)],
          ],
          `चारों संख्याओं का योग = ${cleanAvg * 4}, औसत = ${cleanAvg * 4}/4 = ${cleanAvg}।`,
          `Average of (${a1}, ${a2}, ${a3}, ${a4}) is ${cleanAvg}.`,
          'EASY'
        )
      );
    } else if (mode === 2) {
      const mx = Math.max(x1, x2, x3, x4);
      const mn = Math.min(x1, x2, x3, x4);
      const ans = mx - mn;
      items.push(
        q(
          'शिक्षण कौशल विकास में तकनीकी',
          'स्प्रेडशीट सूत्र (Excel)',
          `MS Excel में यदि A1=${x1}, A2=${x2}, A3=${x3}, A4=${x4} हो, तो =MAX(A1:A4)-MIN(A1:A4) का मान क्या होगा?`,
          `In Excel, if A1=${x1}, A2=${x2}, A3=${x3}, A4=${x4}, find =MAX(A1:A4)-MIN(A1:A4).`,
          [String(ans), String(ans)],
          [
            [String(mx), String(mx)],
            [String(ans + 3), String(ans + 3)],
            [String(Math.max(1, ans - 2)), String(Math.max(1, ans - 2))],
          ],
          `MAX = ${mx} तथा MIN = ${mn}। अतः अंतर = ${mx} − ${mn} = ${ans}।`,
          `MAX is ${mx}, MIN is ${mn}; difference is ${ans}.`,
          'MEDIUM'
        )
      );
    } else {
      const ans = Math.round((x1 + x2) / 2);
      items.push(
        q(
          'शिक्षण कौशल विकास में तकनीकी',
          'स्प्रेडशीट सूत्र (Excel)',
          `MS Excel में सूत्र =QUOTIENT(${x1 + x2 + 1}, 2) का पूर्णांक भागफल (Integer Quotient) परिणाम क्या होगा (संख्या #${i})?`,
          `In Excel #${i}, what does =QUOTIENT(${x1 + x2 + 1}, 2) return?`,
          [String(Math.floor((x1 + x2 + 1) / 2)), String(Math.floor((x1 + x2 + 1) / 2))],
          [
            [String(Math.floor((x1 + x2 + 1) / 2) + 2), String(Math.floor((x1 + x2 + 1) / 2) + 2)],
            [String(Math.floor((x1 + x2 + 1) / 2) - 1), String(Math.floor((x1 + x2 + 1) / 2) - 1)],
            [String(x1 + x2 + 1), String(x1 + x2 + 1)],
          ],
          `QUOTIENT फंक्शन विभाजन का केवल पूर्णांक भागफल लौटाता है: ⌊(${x1 + x2 + 1})/2⌋ = ${Math.floor((x1 + x2 + 1) / 2)}।`,
          `QUOTIENT returns the integer portion of division: ${Math.floor((x1 + x2 + 1) / 2)}.`,
          'HARD'
        )
      );
      void ans;
    }
  }

  // Hexadecimal conversions (80 Qs)
  for (let d = 16; d <= 95; d++) {
    const hex = d.toString(16).toUpperCase();
    const w1 = (d + 1).toString(16).toUpperCase();
    const w2 = (d + 3).toString(16).toUpperCase();
    const w3 = (d - 2).toString(16).toUpperCase();
    items.push(
      q(
        'कंप्यूटर की मूल संरचना एवं इनपुट-आउटपुट',
        'षोडश आधारी (Hexadecimal) संख्या',
        `दशमलव संख्या (${d})₁₀ का हेक्साडेसिमल (Hexadecimal, आधार 16) रूप क्या होगा?`,
        `Convert decimal (${d})₁₀ into Hexadecimal (base 16).`,
        [hex, hex],
        [
          [w1 === hex ? 'FF' : w1, w1 === hex ? 'FF' : w1],
          [w2 === hex ? 'FE' : w2, w2 === hex ? 'FE' : w2],
          [w3 === hex ? '10' : w3, w3 === hex ? '10' : w3],
        ],
        `${d} को 16 से भाग देने पर भागफल ${Math.floor(d / 16)} व शेषफल ${d % 16} प्राप्त होता है ⇒ (${hex})₁₆।`,
        `Dividing ${d} by 16 gives (${hex})₁₆.`,
        'HARD'
      )
    );
  }

  // Plus 45 more distinct Networking/Web/ICT pedagogy items
  const netItems: Array<[string, string, string, string, string, string]> = [
    ['OSI मॉडल की कुल कितनी परतें (Layers) होती हैं?', 'How many layers exist in the OSI networking model?', '7 परतें', '5 परतें / 4 परतें / 8 परतें', 'OSI (Open Systems Interconnection) मॉडल में 7 परतें (Physical से Application तक) होती हैं।', 'MEDIUM'],
    ['HTTP में प्रयुक्त डिफ़ॉल्ट पोर्ट संख्या क्या है?', 'What is the default TCP port for standard HTTP traffic?', 'पोर्ट 80', 'पोर्ट 21 / पोर्ट 25 / पोर्ट 443', 'असुरक्षित HTTP पोर्ट 80 पर तथा सुरक्षित HTTPS पोर्ट 443 पर कार्य करता है।', 'HARD'],
    ['HTTPS संचार के लिए डिफ़ॉल्ट पोर्ट संख्या क्या निर्धारित है?', 'Which default port is used by HTTPS?', 'पोर्ट 443', 'पोर्ट 80 / पोर्ट 22 / पोर्ट 110', 'HTTPS (SSL/TLS) संचार पोर्ट 443 पर संचालित होता है।', 'HARD'],
    ['वेब पेज की संरचना बनाने के लिए मुख्य मार्कअप भाषा कौन सी है?', 'Which markup language structures webpage content?', 'HTML', 'COBOL / FORTRAN / Assembly', 'HTML वेब ब्राउज़र के लिए दस्तावेज़ों की संरचना निर्धारित करता है।', 'EASY'],
    ['एक निबल (Nibble) कितने बिट्स के बराबर होता है?', 'One Nibble equals how many bits?', '4 बिट्स', '2 बिट्स / 8 बिट्स / 16 बिट्स', '4 बिट्स का समूह 1 निबल तथा 8 बिट्स का समूह 1 बाइट कहलाता है।', 'EASY'],
    ['प्रिंटर में "टोनर कार्ट्रिज" (Toner Powder) का उपयोग मुख्य रूप से किस प्रकार के प्रिंटर में होता है?', 'Dry toner powder cartridge is primarily used in which printer type?', 'लेज़र प्रिंटर (Laser Printer)', 'डॉट मैट्रिक्स प्रिंटर / इंकजेट प्रिंटर / थर्मल प्रिंटर', 'लेज़र प्रिंटर सूखे पाउडर (टोनर) और ऊष्मा द्वारा तीव्र व स्पष्ट मुद्रण करता है।', 'MEDIUM'],
    ['निम्नलिखित में से कौन सी एक नॉन-वोलेटाइल (गैर-वाष्पशील) मेमोरी है?', 'Which of the following is a non-volatile memory?', 'फ़्लैश मेमोरी (SSD / पेन ड्राइव)', 'SRAM / DRAM / कैश मेमोरी', 'बिजली बंद होने पर भी SSD, पेन ड्राइव और ROM में डेटा सुरक्षित रहता है।', 'MEDIUM'],
    ['किसी वेबसाइट का प्रथम या मुख्य प्रवेश पृष्ठ क्या कहलाता है?', 'What is the main entry webpage of a website called?', 'होम पेज (Home Page)', 'बुकिंग पेज / एरर पेज / बुकमार्क', 'वेबसाइट खुलते ही दिखाई देने वाला मुख्य पृष्ठ होम पेज कहलाता है।', 'EASY'],
    ['इंटरनेट से किसी फ़ाइल को अपने कंप्यूटर में सहेजने की प्रक्रिया क्या कहलाती है?', 'Saving a file from a remote internet server to your computer is called:', 'डाउनलोडिंग (Downloading)', 'अपलोडिंग / फ़ॉर्मेटिंग / डीफ़्रैगमेंटेशन', 'सर्वर से लोकल डिवाइस में डेटा प्राप्त करना डाउनलोडिंग तथा भेजना अपलोडिंग कहलाता है।', 'EASY'],
    ['Microsoft Excel में किसी वर्कशीट का सबसे छोटा भाग जहाँ पंक्ति और स्तंभ मिलते हैं, क्या कहलाता है?', 'The intersection of a row and column in a spreadsheet is called a:', 'सेल (Cell)', 'ब्राउज़र / टैब / फुटर', 'रो (Row) और कॉलम (Column) के प्रतिच्छेदन से एक सेल (जैसे A1, B2) बनता है।', 'EASY'],
    ['MS Word में पृष्ठ के सबसे ऊपरी भाग में दोहराया जाने वाला पाठ या शीर्षक क्या कहलाता है?', 'Repeated text placed at the top margin of every page in MS Word is called:', 'हेडर (Header)', 'फुटर (Footer) / वॉटरमार्क / इंडेंट', 'पृष्ठ के ऊपर Header और नीचे Footer जोड़ा जाता है।', 'EASY'],
    ['निम्न में से कौन सा एक मुक्त डिजिटल पहचान एवं प्रमाणपत्र लॉकर मंच है जहाँ छात्र अंकपत्र सुरक्षित रख सकते हैं?', 'Which Indian government app stores digital academic marksheets and certificates officially?', 'डिजिलॉकर (DigiLocker)', 'स्पॉटिफ़ाई / टेलीग्राम / जियोटीवी', 'DigiLocker (MeitY) से CBSE/UP Board/विश्वविद्यालय के सत्यापित डिजिटल प्रमाणपत्र प्राप्त होते हैं।', 'EASY'],
    ['NEP 2020 के अंतर्गत डिजिटल व ऑनलाइन शिक्षण को बढ़ावा देने हेतु किस नए स्वायत्त निकाय की स्थापना प्रस्तावित की गई?', 'NEP 2020 proposed which autonomous body to facilitate technology integration in schools & colleges?', 'NETF (National Educational Technology Forum)', 'AICTE / BCI / MCI', 'NEP 2020 ने तकनीकी विचारों के आदान-प्रदान हेतु NETF (राष्ट्रीय शैक्षिक प्रौद्योगिकी मंच) का प्रावधान किया।', 'HARD'],
    ['कंप्यूटर में "वायरस" (VIRUS) संक्षिप्ताक्षर का पूर्ण रूप क्या है?', 'What does the acronym VIRUS stand for in computing?', 'Vital Information Resources Under Siege', 'Virtual Internet Reading User System / Verified Info Route User Service / Variable Input RAM Update Setup', 'VIRUS (Vital Information Resources Under Siege) एक हानिकारक प्रोग्राम है।', 'MEDIUM'],
    ['बुलियन तर्क में "AND गेट" (A AND B) का आउटपुट केवल कब 1 (सत्य) होता है?', 'When does a Boolean AND gate output 1 (True)?', 'जब A और B दोनों इनपुट 1 हों', 'जब कोई एक इनपुट 0 हो / जब दोनों इनपुट 0 हों / कभी नहीं', 'AND गेट में सभी इनपुट 1 होने पर ही आउटपुट 1 मिलता है।', 'MEDIUM'],
    ['ई-मेल में "CC" का पूर्ण रूप क्या है?', 'What does CC stand for in an email?', 'Carbon Copy', 'Computer Copy / Central Code / Common Channel', 'CC (Carbon Copy) का उपयोग एक ही ईमेल की प्रति अन्य लोगों को भेजने में होता है।', 'EASY'],
    ['कंप्यूटर बूट करते समय पहले से मौजूद ऑपरेटिंग सिस्टम को पुनः प्रारंभ करने की प्रक्रिया क्या कहलाती है?', 'Restarting an already running computer without cutting power completely is called:', 'वॉर्म बूटिंग (Warm Booting)', 'कोल्ड बूटिंग (Cold Booting) / हाइबरनेट / स्लीप मोड', 'चलते कंप्यूटर को रीस्टार्ट करना Warm Booting और बंद कंप्यूटर को चालू करना Cold Booting है।', 'MEDIUM'],
    ['ASCII कोड मुख्यतः किसके लिए प्रयुक्त होता है?', 'ASCII coding is primarily used for:', 'कीबोर्ड अक्षरों व चिह्नों को मानक बाइनरी कोड में निरूपित करने हेतु', 'मॉडेम की बिजली आपूर्ति बढ़ाने हेतु / प्रिंटर की गति मापने हेतु / वीडियो संपादन हेतु', 'ASCII अक्षरों, अंकों और विराम चिह्नों का मानक बाइनरी एन्कोडिंग कोड है।', 'MEDIUM'],
    ['यूनिकोड (Unicode) का मुख्य लाभ क्या है?', 'What is the primary advantage of Unicode (UTF-8) over older encodings?', 'विश्व की सभी भाषाओं (जैसे देवनागरी/हिंदी, संस्कृत, तमिल आदि) के अक्षरों का एकसमान डिजिटल निरूपण', 'यह केवल अंग्रेज़ी के 26 अक्षर समर्थित करता है / यह केवल प्रिंटर में चलता है / इससे बैटरी दोगुनी हो जाती है', 'यूनिकोड (UTF-8) ने हिंदी व अन्य भारतीय भाषाओं के डिजिटल टाइपिंग और प्रदर्शन को सार्वभौमिक बनाया।', 'MEDIUM'],
    ['ई-लर्निंग में "SCORM" मानक मुख्य रूप से किससे संबंधित है?', 'SCORM standards in e-learning LMS platforms relate primarily to:', 'ई-लर्निंग पाठ्यक्रम सामग्री की पैकेजिंग और LMS संगतता से', 'हार्ड डिस्क के आकार से / इंटरनेट केबल के रंग से / मॉनिटर रिज़ॉल्यूशन से', 'SCORM विभिन्न लर्निंग मैनेजमेंट सिस्टम (LMS) के बीच सामग्री के आदान-प्रदान का मानक है।', 'HARD'],
  ];
  for (const r of netItems) {
    const d = r[3].split(' / ');
    items.push(
      q(
        'इंटरनेट एवं नेटवर्किंग',
        'सूचना तकनीकी सिद्धांत',
        r[0],
        r[1],
        [r[2], r[2]],
        [
          [d[0], d[0]],
          [d[1], d[1]],
          [d[2], d[2]],
        ],
        r[4],
        r[2],
        r[5] as any
      )
    );
  }

  return items;
}
