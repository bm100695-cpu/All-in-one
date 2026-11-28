import { makeQ, RawBankQuestion, svgDataUri } from '../banks/shared';

const q = makeQ('Mathematics');

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

function makeNumericDistractors(
  correctVal: number,
  offsets: number[],
  unitHi = '',
  unitEn = '',
  decimals = 0
): [[string, string], [string, string], [string, string]] {
  const fmt = (n: number) => {
    const rounded = decimals > 0 ? Number(n.toFixed(decimals)) : Math.round(n);
    return decimals > 0 ? rounded.toFixed(decimals) : String(rounded);
  };
  const used = new Set<string>([fmt(correctVal)]);
  const out: [string, string][] = [];
  for (const off of offsets) {
    let cand = correctVal + off;
    if (cand <= 0 && correctVal > 0) cand = correctVal + Math.abs(off) + 1;
    let s = fmt(cand);
    let bump = 1;
    while (used.has(s)) {
      s = fmt(cand + bump);
      bump++;
    }
    used.add(s);
    out.push([`${s}${unitHi}`, `${s}${unitEn}`]);
    if (out.length === 3) break;
  }
  while (out.length < 3) {
    let bump = out.length + 2;
    let s = fmt(correctVal + bump);
    while (used.has(s)) {
      bump++;
      s = fmt(correctVal + bump);
    }
    used.add(s);
    out.push([`${s}${unitHi}`, `${s}${unitEn}`]);
  }
  return [out[0], out[1], out[2]];
}

function makeFracDistractors(
  num: number,
  den: number
): [[string, string], [string, string], [string, string]] {
  const g = gcd(num, den);
  const sn = num / g;
  const sd = den / g;
  const ans = `${sn}/${sd}`;
  const candidates = [
    `${sn + 1}/${sd}`,
    `${Math.max(1, sn - 1)}/${sd + 1}`,
    `${sn}/${sd + 2}`,
    `${sn + 2}/${sd + 1}`,
    `${sn + sd}/${sd + 3}`,
  ];
  const used = new Set([ans]);
  const res: [string, string][] = [];
  for (const c of candidates) {
    if (!used.has(c)) {
      used.add(c);
      res.push([c, c]);
    }
    if (res.length === 3) break;
  }
  return [res[0], res[1], res[2]];
}

export function generateMathBank(): RawBankQuestion[] {
  const items: RawBankQuestion[] = [];

  // 1. Place Value & Face Value Difference/Sum (100 Qs — EASY)
  const digitsSet = [3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 100; i++) {
    const targetDigit = digitsSet[i % digitsSet.length];
    const d5 = (i + 1) % 8 + 1;
    const d4 = (i + 3) % 9;
    const d3 = (i + 5) % 9;
    const d2 = (i + 2) % 9;
    const d1 = (i + 4) % 9;
    const pos = i % 3; // 0 -> hundreds (100), 1 -> thousands (1000), 2 -> ten-thousands (10000)
    const arr = [d5, d4, d3, d2, d1];
    // Ensure targetDigit appears exactly once at position posIdx
    for (let k = 0; k < 5; k++) {
      if (arr[k] === targetDigit) arr[k] = (targetDigit % 8) + 1;
    }
    const posIdx = pos === 0 ? 2 : pos === 1 ? 1 : 0;
    const mult = pos === 0 ? 100 : pos === 1 ? 1000 : 10000;
    arr[posIdx] = targetDigit;
    const numStr = arr.join('');
    const placeVal = targetDigit * mult;
    const isDiff = i % 2 === 0;
    const ans = isDiff ? placeVal - targetDigit : placeVal + targetDigit;
    items.push(
      q(
        'स्थानीय मान एवं अंकित मान',
        'संख्या पद्धति',
        `संख्या ${numStr} में अंक ${targetDigit} के स्थानीय मान और अंकित (जातीय) मान का ${isDiff ? 'अंतर' : 'योगफल'} कितना होगा?`,
        `What is the ${isDiff ? 'difference' : 'sum'} between the place value and face value of digit ${targetDigit} in ${numStr}?`,
        [String(ans), String(ans)],
        makeNumericDistractors(ans, [targetDigit, -targetDigit, mult - targetDigit]),
        `${numStr} में ${targetDigit} का स्थानीय मान = ${targetDigit} × ${mult} = ${placeVal} तथा अंकित मान = ${targetDigit}। अतः ${isDiff ? 'अंतर' : 'योगफल'} = ${placeVal} ${isDiff ? '-' : '+'} ${targetDigit} = ${ans}।`,
        `Place value of ${targetDigit} is ${placeVal} and face value is ${targetDigit}. Required ${isDiff ? 'difference' : 'sum'} = ${ans}.`,
        'EASY',
        { formulaHi: 'स्थानीय मान = अंक × स्थान मान; जातीय मान = स्वयं अंक' }
      )
    );
  }

  // 2. BODMAS & Simplification (150 Qs — EASY/MEDIUM)
  for (let i = 0; i < 150; i++) {
    const b = 3 + (i % 9);
    const k = 2 + (Math.floor(i / 9) % 12);
    const a = b * k;
    const c = 4 + (i % 7);
    const d = 10 + (Math.floor(i / 5) % 25);
    const e = 2 + (i % 6);
    const ans = d + k * c - e;
    items.push(
      q(
        'संख्यात्मक क्षमता एवं अंकगणितीय संक्रियाएँ',
        'सरलीकरण (BODMAS)',
        `सरल कीजिए: ${d} + (${a} ÷ ${b}) × ${c} − ${e} = ?`,
        `Simplify: ${d} + (${a} ÷ ${b}) × ${c} − ${e} = ?`,
        [String(ans), String(ans)],
        makeNumericDistractors(ans, [e * 2, -c, c + b]),
        `BODMAS नियम के अनुसार पहले कोष्ठक व भाग (${a} ÷ ${b} = ${k}), फिर गुणा (${k} × ${c} = ${k * c}), और अंत में जोड़-घटाव: ${d} + ${k * c} − ${e} = ${ans}।`,
        `Using BODMAS: (${a} ÷ ${b}) = ${k}; ${k} × ${c} = ${k * c}; ${d} + ${k * c} − ${e} = ${ans}.`,
        i < 50 ? 'EASY' : 'MEDIUM',
        { formulaHi: 'BODMAS: कोष्ठक → का → भाग → गुणा → जोड़ → घटाव' }
      )
    );
  }

  // 3. Fractions & Decimals Operations (150 Qs — EASY/MEDIUM)
  for (let i = 0; i < 150; i++) {
    const den1 = 3 + (i % 7);
    const den2 = 4 + ((i + 2) % 7);
    const num1 = 1 + (i % (den1 - 1));
    const num2 = 1 + ((i + 1) % (den2 - 1));
    const isAdd = i % 2 === 0;
    const L = lcm(den1, den2);
    const n1 = num1 * (L / den1);
    const n2 = num2 * (L / den2);
    const resNum = isAdd ? n1 + n2 : Math.abs(n1 - n2) || 1;
    const leftNum = !isAdd && n1 < n2 ? num2 : num1;
    const leftDen = !isAdd && n1 < n2 ? den2 : den1;
    const rightNum = !isAdd && n1 < n2 ? num1 : num2;
    const rightDen = !isAdd && n1 < n2 ? den1 : den2;
    const effectiveNum = !isAdd && n1 === n2 ? resNum : resNum;
    const leftN = leftNum + (!isAdd && n1 === n2 ? 1 : 0);
    const finalNum = isAdd
      ? leftN * (L / leftDen) + rightNum * (L / rightDen)
      : Math.abs(leftN * (L / leftDen) - rightNum * (L / rightDen));
    const g = gcd(finalNum, L);
    const sn = finalNum / g;
    const sd = L / g;
    const ansStr = `${sn}/${sd}`;
    items.push(
      q(
        'दशमलव एवं भिन्न',
        'भिन्न संक्रियाएँ',
        `भिन्न व्यंजक (${leftN}/${leftDen} ${isAdd ? '+' : '−'} ${rightNum}/${rightDen}) का सरलतम मान ज्ञात कीजिए।`,
        `Find the simplest value of the fraction expression (${leftN}/${leftDen} ${isAdd ? '+' : '−'} ${rightNum}/${rightDen}).`,
        [ansStr, ansStr],
        makeFracDistractors(sn, sd),
        `हर ${leftDen} व ${rightDen} का ल.स. = ${L}। तुल्य भिन्न बनाकर ${isAdd ? 'जोड़ने' : 'घटाने'} पर ${finalNum}/${L} प्राप्त होता है, जिसका सरलतम रूप ${ansStr} है।`,
        `LCM of denominators ${leftDen} and ${rightDen} is ${L}. Result simplifies to ${ansStr}.`,
        i < 50 ? 'EASY' : 'MEDIUM',
        { formulaHi: 'a/b ± c/d = (ad ± bc) / bd' }
      )
    );
  }

  // 4. HCF & LCM Word Problems & Direct Calculation (150 Qs)
  for (let i = 0; i < 150; i++) {
    const g = 4 + (i % 12);
    const p = 3 + ((i * 2) % 7);
    const qVal = p + 1 + (i % 3); // coprime or distinct
    const coprimeQ = gcd(p, qVal) === 1 ? qVal : qVal + 1;
    const n1 = g * p;
    const n2 = g * coprimeQ;
    const lVal = lcm(n1, n2);
    if (i % 2 === 0) {
      items.push(
        q(
          'संख्यात्मक क्षमता एवं अंकगणितीय संक्रियाएँ',
          'म.स. एवं ल.स. (HCF & LCM)',
          `दो संख्याओं का म.स. (HCF) ${g} और ल.स. (LCM) ${lVal} है। यदि एक संख्या ${n1} है, तो दूसरी संख्या क्या होगी?`,
          `The HCF of two numbers is ${g} and their LCM is ${lVal}. If one number is ${n1}, find the other number.`,
          [String(n2), String(n2)],
          makeNumericDistractors(n2, [g, -g, 2 * g]),
          `सूत्र: पहली संख्या × दूसरी संख्या = HCF × LCM ⇒ ${n1} × दूसरी संख्या = ${g} × ${lVal} ⇒ दूसरी संख्या = ${n2}।`,
          `Using First × Second = HCF × LCM: (${g} × ${lVal}) / ${n1} = ${n2}.`,
          i < 40 ? 'EASY' : 'MEDIUM',
          { formulaHi: 'पहली संख्या × दूसरी संख्या = म.स. (HCF) × ल.स. (LCM)', formulaEn: 'a × b = HCF(a,b) × LCM(a,b)' }
        )
      );
    } else {
      const rem = 1 + (i % 5);
      const ans = lVal + rem;
      items.push(
        q(
          'संख्यात्मक क्षमता एवं अंकगणितीय संक्रियाएँ',
          'म.स. एवं ल.स. (HCF & LCM)',
          `वह छोटी से छोटी संख्या ज्ञात कीजिए जिसे ${n1} तथा ${n2} से विभाजित करने पर प्रत्येक दशा में शेषफल ${rem} बचे।`,
          `Find the least number which when divided by ${n1} and ${n2} leaves a remainder ${rem} in each case.`,
          [String(ans), String(ans)],
          makeNumericDistractors(ans, [-rem * 2, rem, g]),
          `${n1} और ${n2} का ल.स. (LCM) = ${lVal}। अभीष्ट न्यूनतम संख्या = LCM + शेषफल = ${lVal} + ${rem} = ${ans}।`,
          `LCM(${n1}, ${n2}) = ${lVal}. Required least number = ${lVal} + ${rem} = ${ans}.`,
          i > 110 ? 'HARD' : 'MEDIUM',
          { formulaHi: 'अभीष्ट संख्या = LCM(भाजक) + समान शेषफल' }
        )
      );
    }
  }

  // 5. Percentage Problems (170 Qs)
  for (let i = 0; i < 170; i++) {
    const mode = i % 3;
    if (mode === 0) {
      const pct = 5 * (2 + (i % 15)); // 10..80
      const base = 200 + i * 20;
      const ans = (base * pct) / 100;
      items.push(
        q(
          'प्रतिशतता',
          'प्रतिशत मान',
          `${base} का ${pct}% और ${(base / 2)} का ${(pct / 2)}% मिलाकर कितने के बराबर होगा? Wait — `, // Fix clean expression below
          '',
          ['0', '0'],
          [['1', '1'], ['2', '2'], ['3', '3']],
          'x',
          'x',
          'EASY'
        )
      );
      items.pop();
      const valA = base;
      const valB = 100 + (i % 10) * 40;
      const pctB = 10 + (i % 5) * 10;
      const sumAns = (valA * pct) / 100 + (valB * pctB) / 100;
      items.push(
        q(
          'प्रतिशतता',
          'प्रतिशत गणना',
          `${valA} का ${pct}% तथा ${valB} के ${pctB}% का योगफल कितना होगा?`,
          `What is the sum of ${pct}% of ${valA} and ${pctB}% of ${valB}?`,
          [String(sumAns), String(sumAns)],
          makeNumericDistractors(sumAns, [20, -15, 35]),
          `${valA} × (${pct}/100) + ${valB} × (${pctB}/100) = ${(valA * pct) / 100} + ${(valB * pctB) / 100} = ${sumAns}।`,
          `(${valA} × ${pct}/100) + (${valB} × ${pctB}/100) = ${sumAns}.`,
          'EASY',
          { formulaHi: 'A का x% = A × x / 100' }
        )
      );
    } else if (mode === 1) {
      const r = [10, 20, 25, 40, 50][i % 5];
      const baseNum = 80 + (i % 20) * 5;
      const inc = Math.round(baseNum * (1 + r / 100));
      const actualBase = Math.round((inc * 100) / (100 + r));
      // Use clean divisible base
      const cleanBase = 100 * (2 + (i % 25));
      const newVal = cleanBase + (cleanBase * r) / 100;
      items.push(
        q(
          'प्रतिशतता',
          'प्रतिशत वृद्धि एवं कमी',
          `एक विद्यालय में छात्रों की संख्या ${cleanBase} थी। यदि आगामी सत्र में इसमें ${r}% की वृद्धि हुई और फिर किसी नए मान की जगह इसी बढ़े हुए स्तर पर संख्या तय हुई, तो नई छात्र संख्या क्या होगी?`,
          `A school had ${cleanBase} students. If enrollment increased by ${r}% in the next academic session, what is the new strength?`,
          [String(newVal), String(newVal)],
          makeNumericDistractors(newVal, [(cleanBase * r) / 200, -50, 100]),
          `वृद्धि = ${cleanBase} का ${r}% = ${(cleanBase * r) / 100}। नई संख्या = ${cleanBase} + ${(cleanBase * r) / 100} = ${newVal}।`,
          `Increase = ${r}% of ${cleanBase} = ${(cleanBase * r) / 100}; New value = ${newVal}.`,
          'EASY',
          { formulaHi: 'नया मान = प्रारंभिक मान × (100 + वृद्धि%) / 100' }
        )
      );
      void inc;
      void actualBase;
    } else {
      const x = 10 + (i % 6) * 5; // 10, 15, 20, 25, 30, 35
      const y = 10 + ((i + 2) % 5) * 5;
      const net = Number((x - y - (x * y) / 100).toFixed(2));
      const signTextHi = net >= 0 ? `${net}% वृद्धि` : `${Math.abs(net)}% कमी`;
      const signTextEn = net >= 0 ? `${net}% increase` : `${Math.abs(net)}% decrease`;
      const a1 = Number((Math.abs(net) + 2).toFixed(2));
      const a2 = Number((Math.abs(x + y)).toFixed(2));
      items.push(
        q(
          'प्रतिशतता',
          'क्रमिक प्रतिशत परिवर्तन',
          `किसी आयत की लंबाई में ${x}% की वृद्धि तथा चौड़ाई में ${y}% की कमी करने पर उसके क्षेत्रफल में कुल कितने प्रतिशत का परिवर्तन होगा?`,
          `If the length of a rectangle increases by ${x}% and breadth decreases by ${y}%, what is the net percentage change in area?`,
          [signTextHi, signTextEn],
          [
            [net >= 0 ? `${Math.abs(net)}% कमी` : `${Math.abs(net)}% वृद्धि`, net >= 0 ? `${Math.abs(net)}% decrease` : `${Math.abs(net)}% increase`],
            [`${a1}% कमी`, `${a1}% decrease`],
            [`${a2}% वृद्धि`, `${a2}% increase`],
          ],
          `क्रमिक परिवर्तन सूत्र: (x − y − xy/100)% = (${x} − ${y} − ${x * y}/100)% = ${net}% ⇒ ${signTextHi}।`,
          `Successive change = (${x} - ${y} - ${x * y}/100)% = ${net}% (${signTextEn}).`,
          'HARD',
          { formulaHi: 'प्रभावी परिवर्तन% = x − y − (xy / 100)', formulaEn: 'Net % = x - y - (xy/100)' }
        )
      );
    }
  }

  // 6. Profit, Loss & Discount (170 Qs)
  for (let i = 0; i < 170; i++) {
    const cp = 200 + (i % 30) * 50;
    const pct = [10, 12, 15, 20, 25, 30][i % 6];
    const isProfit = i % 2 === 0;
    const sp = isProfit ? cp * (1 + pct / 100) : cp * (1 - pct / 100);
    if (i % 3 !== 2) {
      items.push(
        q(
          'लाभ एवं हानि',
          isProfit ? 'विक्रय मूल्य ज्ञात करना' : 'क्रय मूल्य ज्ञात करना',
          i % 3 === 0
            ? `एक वस्तु का क्रय मूल्य ₹${cp} है। इसे ${pct}% ${isProfit ? 'लाभ' : 'हानि'} पर बेचने पर विक्रय मूल्य क्या होगा?`
            : `एक वस्तु को ₹${sp} में बेचने पर दुकानदार को ${pct}% ${isProfit ? 'लाभ' : 'हानि'} होती है। वस्तु का क्रय मूल्य ज्ञात कीजिए।`,
          i % 3 === 0
            ? `Cost price of an item is ₹${cp}. What is its selling price at ${pct}% ${isProfit ? 'profit' : 'loss'}?`
            : `Selling an item for ₹${sp} yields ${pct}% ${isProfit ? 'profit' : 'loss'}. Find its cost price.`,
          i % 3 === 0 ? [`₹${sp}`, `₹${sp}`] : [`₹${cp}`, `₹${cp}`],
          makeNumericDistractors(i % 3 === 0 ? sp : cp, [25, -40, 60], '', '').map(([a]) => [
            `₹${a}`,
            `₹${a}`,
          ]) as any,
          i % 3 === 0
            ? `विक्रय मूल्य = ${cp} × (${isProfit ? `100 + ${pct}` : `100 − ${pct}`}) / 100 = ₹${sp}।`
            : `क्रय मूल्य = (${sp} × 100) / ${isProfit ? 100 + pct : 100 - pct} = ₹${cp}।`,
          i % 3 === 0 ? `SP = CP × (${100 + (isProfit ? pct : -pct)}) / 100 = ₹${sp}.` : `CP = ₹${cp}.`,
          'MEDIUM',
          { formulaHi: 'SP = CP × (100 ± लाभ/हानि%) / 100' }
        )
      );
    } else {
      const mp = 500 + (i % 20) * 100;
      const d = [10, 15, 20, 25][i % 4];
      const discSp = mp * (1 - d / 100);
      items.push(
        q(
          'लाभ एवं हानि',
          'बट्टा (Discount)',
          `एक पुस्तक का अंकित मूल्य ₹${mp} है। यदि विक्रेता इस पर ${d}% की छूट देता है, तो ग्राहक को कितने रुपये चुकाने होंगे?`,
          `The marked price of a book is ₹${mp}. If the seller offers a ${d}% discount, what is the selling price?`,
          [`₹${discSp}`, `₹${discSp}`],
          makeNumericDistractors(discSp, [30, -25, 50]).map(([a]) => [`₹${a}`, `₹${a}`]) as any,
          `छूट = ${mp} का ${d}% = ₹${(mp * d) / 100}। विक्रय मूल्य = ${mp} − ${(mp * d) / 100} = ₹${discSp}।`,
          `Discount = ${d}% of ₹${mp} = ₹${(mp * d) / 100}; SP = ₹${discSp}.`,
          'EASY',
          { formulaHi: 'विक्रय मूल्य = अंकित मूल्य × (100 − छूट%) / 100' }
        )
      );
    }
  }

  // 7. Simple & Compound Interest (160 Qs)
  for (let i = 0; i < 160; i++) {
    const p = 1000 + (i % 25) * 400;
    const r = [4, 5, 8, 10, 12][i % 5];
    if (i % 2 === 0) {
      const t = 2 + (i % 4);
      const si = (p * r * t) / 100;
      items.push(
        q(
          'साधारण एवं चक्रवृद्धि ब्याज',
          'साधारण ब्याज (SI)',
          `₹${p} की धनराशि पर ${r}% वार्षिक साधारण ब्याज की दर से ${t} वर्षों में कुल कितना ब्याज प्राप्त होगा?`,
          `Find the simple interest on ₹${p} at ${r}% per annum for ${t} years.`,
          [`₹${si}`, `₹${si}`],
          makeNumericDistractors(si, [100, -80, 160]).map(([a]) => [`₹${a}`, `₹${a}`]) as any,
          `साधारण ब्याज = (मूलधन × दर × समय) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si}।`,
          `SI = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si}.`,
          'EASY',
          { formulaHi: 'SI = (P × R × T) / 100', formulaEn: 'SI = (P × R × T) / 100' }
        )
      );
    } else {
      const ci2 = p * Math.pow(1 + r / 100, 2) - p;
      const roundedCi = Number(ci2.toFixed(2));
      items.push(
        q(
          'साधारण एवं चक्रवृद्धि ब्याज',
          'चक्रवृद्धि ब्याज (CI)',
          `₹${p} पर ${r}% वार्षिक चक्रवृद्धि ब्याज की दर से 2 वर्षों का चक्रवृद्धि ब्याज (वार्षिक संयोजन पर) कितना होगा?`,
          `Find the compound interest on ₹${p} at ${r}% per annum for 2 years compounded annually.`,
          [`₹${roundedCi}`, `₹${roundedCi}`],
          makeNumericDistractors(roundedCi, [40, -25, 85], '', '', 2).map(([a]) => [`₹${a}`, `₹${a}`]) as any,
          `मिश्रधन A = ${p} × (1 + ${r}/100)² = ${Number((p + ci2).toFixed(2))}। अतः चक्रवृद्धि ब्याज = ${Number((p + ci2).toFixed(2))} − ${p} = ₹${roundedCi}।`,
          `A = P(1 + r/100)^2 = ${(p + ci2).toFixed(2)}; CI = A - P = ₹${roundedCi}.`,
          'HARD',
          { formulaHi: 'CI = P[(1 + r/100)^n − 1]', formulaEn: 'CI = P[(1 + r/100)^n - 1]' }
        )
      );
    }
  }

  // 8. Ratio, Proportion & Partnership (150 Qs)
  for (let i = 0; i < 150; i++) {
    const a = 2 + (i % 5);
    const b = 3 + ((i + 1) % 6);
    const k = 25 + (i % 15) * 10;
    const total = (a + b) * k;
    const shareA = a * k;
    const shareB = b * k;
    const diff = Math.abs(shareA - shareB) || k;
    items.push(
      q(
        'अनुपात एवं समानुपात',
        'राशि का विभाजन',
        `₹${total} की धनराशि को अ और ब के बीच ${a} : ${b} के अनुपात में बाँटा जाता है। ${i % 2 === 0 ? 'ब का हिस्सा कितना होगा?' : 'दोनों के हिस्सों में कितने रुपये का अंतर है?'}`,
        `₹${total} is divided between A and B in the ratio ${a} : ${b}. ${i % 2 === 0 ? "What is B's share?" : 'Find the difference between their shares.'}`,
        i % 2 === 0 ? [`₹${shareB}`, `₹${shareB}`] : [`₹${diff}`, `₹${diff}`],
        makeNumericDistractors(i % 2 === 0 ? shareB : diff, [k, -Math.min(20, Math.floor(k / 2)), 2 * k]).map(
          ([x]) => [`₹${x}`, `₹${x}`]
        ) as any,
        `अनुपातिक योग = ${a} + ${b} = ${a + b} भाग = ₹${total} ⇒ 1 भाग = ₹${k}। अतः ${i % 2 === 0 ? `ब का हिस्सा = ${b} × ${k} = ₹${shareB}` : `अंतर = |${a} − ${b}| × ${k} = ₹${diff}`}।`,
        `1 unit = ₹${total}/${a + b} = ₹${k}. Answer = ₹${i % 2 === 0 ? shareB : diff}.`,
        'MEDIUM',
        { formulaHi: 'भाग मान = कुल राशि × संबंधित अनुपात / अनुपातों का योग' }
      )
    );
  }

  // 9. Average Problems (130 Qs)
  for (let i = 0; i < 130; i++) {
    const n = 5 + (i % 6); // 5..10 numbers
    const avg = 20 + (i % 30);
    const newVal = avg + (n + 1) * (1 + (i % 4));
    const newAvg = (n * avg + newVal) / (n + 1);
    items.push(
      q(
        'औसत',
        'नया औसत ज्ञात करना',
        `${n} संख्याओं का औसत ${avg} है। यदि एक नई संख्या ${newVal} भी शामिल कर ली जाए, तो सभी ${n + 1} संख्याओं का नया औसत क्या होगा?`,
        `The average of ${n} numbers is ${avg}. If a new number ${newVal} is included, what is the new average of all ${n + 1} numbers?`,
        [String(newAvg), String(newAvg)],
        makeNumericDistractors(newAvg, [2, -2, 4]),
        `प्रारंभिक योग = ${n} × ${avg} = ${n * avg}। नया योग = ${n * avg} + ${newVal} = ${n * avg + newVal}। नया औसत = ${n * avg + newVal} / ${n + 1} = ${newAvg}।`,
        `Initial sum = ${n * avg}; New sum = ${n * avg + newVal}; New average = ${(n * avg + newVal) / (n + 1)}.`,
        'MEDIUM',
        { formulaHi: 'औसत = सभी प्रेक्षणों का योग / प्रेक्षणों की कुल संख्या' }
      )
    );
  }

  // 10. Unitary Method, Time & Work, Speed-Time-Distance (180 Qs)
  for (let i = 0; i < 180; i++) {
    if (i % 2 === 0) {
      // Time and Work: A does in a days, B does in b days -> together LCM trick
      const pairs = [
        [10, 15, 6],
        [12, 24, 8],
        [15, 30, 10],
        [20, 30, 12],
        [12, 36, 9],
        [18, 36, 12],
        [20, 60, 15],
        [24, 48, 16],
        [30, 60, 20],
        [40, 60, 24],
      ];
      const basePair = pairs[i % pairs.length];
      const scale = 1 + Math.floor(i / pairs.length);
      const da = basePair[0] * scale;
      const db = basePair[1] * scale;
      const ans = basePair[2] * scale;
      items.push(
        q(
          'ऐकिक नियम एवं समय-कार्य',
          'समय और कार्य',
          `अ किसी कार्य को ${da} दिनों में और ब उसी कार्य को ${db} दिनों में पूरा कर सकता है। यदि दोनों मिलकर कार्य करें, तो कार्य कितने दिनों में समाप्त होगा?`,
          `A can finish a work in ${da} days and B can finish it in ${db} days. In how many days will they complete it working together?`,
          [`${ans} दिन`, `${ans} days`],
          makeNumericDistractors(ans, [2, -2, 4]).map(([n]) => [`${n} दिन`, `${n} days`]) as any,
          `दोनों का संयुक्त समय = (${da} × ${db}) / (${da} + ${db}) = ${da * db} / ${da + db} = ${ans} दिन।`,
          `Combined time = (A × B) / (A + B) = (${da}×${db})/(${da}+${db}) = ${ans} days.`,
          scale > 2 ? 'HARD' : 'MEDIUM',
          { formulaHi: 'संयुक्त समय = (A × B) / (A + B)' }
        )
      );
    } else {
      const speedKmh = [36, 54, 72, 90, 108, 45, 63, 81][i % 8];
      const timeSec = 10 + (i % 15);
      const speedMs = (speedKmh * 5) / 18;
      const distM = speedMs * timeSec;
      items.push(
        q(
          'ऐकिक नियम एवं समय-कार्य',
          'चाल, समय एवं दूरी',
          `एक रेलगाड़ी ${speedKmh} किमी/घंटा की चाल से चल रही है। यह ${timeSec} सेकंड में एक बिजली के खंभे को पार कर जाती है। रेलगाड़ी की लंबाई (मीटर में) ज्ञात कीजिए।`,
          `A train runs at ${speedKmh} km/h and crosses a pole in ${timeSec} seconds. Find the length of the train in meters.`,
          [`${distM} मीटर`, `${distM} m`],
          makeNumericDistractors(distM, [25, -20, 50]).map(([n]) => [`${n} मीटर`, `${n} m`]) as any,
          `चाल (मी/से) = ${speedKmh} × (5/18) = ${speedMs} मी/से। लंबाई = चाल × समय = ${speedMs} × ${timeSec} = ${distM} मीटर।`,
          `Speed = ${speedKmh} × 5/18 = ${speedMs} m/s; Length = ${speedMs} × ${timeSec} = ${distM} m.`,
          'MEDIUM',
          { formulaHi: 'किमी/घंटा × (5/18) = मी/से; दूरी = चाल × समय' }
        )
      );
    }
  }

  // 11. Algebra & Factorization / Identities (140 Qs)
  for (let i = 0; i < 140; i++) {
    if (i % 2 === 0) {
      const p = 3 + (i % 18); // x + 1/x = p -> x^2 + 1/x^2 = p^2 - 2
      const ans = p * p - 2;
      items.push(
        q(
          'गुणनखंड एवं बीजीय सर्वसमिकाएँ',
          'बीजगणितीय सर्वसमिका',
          `यदि x + (1/x) = ${p} हो, तो x² + (1/x²) का मान क्या होगा?`,
          `If x + (1/x) = ${p}, find the value of x² + (1/x²).`,
          [String(ans), String(ans)],
          makeNumericDistractors(ans, [4, -4, p * p + 2 - ans]),
          `दोनों पक्षों का वर्ग करने पर: (x + 1/x)² = x² + 1/x² + 2 = ${p}² = ${p * p} ⇒ x² + 1/x² = ${p * p} − 2 = ${ans}।`,
          `(x + 1/x)^2 = x^2 + 1/x^2 + 2 = ${p * p} => x^2 + 1/x^2 = ${ans}.`,
          i > 90 ? 'HARD' : 'MEDIUM',
          { formulaHi: 'यदि x + 1/x = k, तो x² + 1/x² = k² − 2' }
        )
      );
    } else {
      const r1 = 2 + (i % 12);
      const r2 = 1 + (Math.floor(i / 12) % 9);
      const b = r1 + r2;
      const c = r1 * r2;
      const ansStr = `(x + ${r1})(x + ${r2})`;
      items.push(
        q(
          'गुणनखंड एवं बीजीय सर्वसमिकाएँ',
          'द्विघात गुणनखंड',
          `बीजीय व्यंजक x² + ${b}x + ${c} के सही गुणनखंड क्या होंगे?`,
          `Find the correct factorization of the quadratic expression x² + ${b}x + ${c}.`,
          [ansStr, ansStr],
          [
            [`(x + ${r1 + 1})(x + ${Math.max(1, r2 - 1)})`, `(x + ${r1 + 1})(x + ${Math.max(1, r2 - 1)})`],
            [`(x − ${r1})(x − ${r2})`, `(x - ${r1})(x - ${r2})`],
            [`(x + ${r1 + 2})(x + ${r2 + 2})`, `(x + ${r1 + 2})(x + ${r2 + 2})`],
          ],
          `यहाँ योग = ${r1} + ${r2} = ${b} तथा गुणनफल = ${r1} × ${r2} = ${c}। अतः गुणनखंड = (x + ${r1})(x + ${r2})।`,
          `Sum = ${r1} + ${r2} = ${b}, Product = ${r1} × ${r2} = ${c}. Factors are (x + ${r1})(x + ${r2}).`,
          'MEDIUM',
          { formulaHi: 'x² + (a+b)x + ab = (x + a)(x + b)' }
        )
      );
    }
  }

  // 12. Geometry with crisp inline SVG diagrams (150 Qs)
  for (let i = 0; i < 150; i++) {
    const mode = i % 3;
    if (mode === 0) {
      const a1 = 42 + (i % 35);
      const a2 = 50 + ((i * 2) % 30);
      const a3 = 180 - a1 - a2;
      const svg = svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150"><rect width="260" height="150" fill="#f8fafc" rx="8"/><polygon points="35,125 225,125 110,25" fill="#e0e7ff" stroke="#3730a3" stroke-width="2.5"/><text x="58" y="116" font-size="13" font-family="sans-serif" fill="#1e293b">${a1}°</text><text x="175" y="116" font-size="13" font-family="sans-serif" fill="#1e293b">${a2}°</text><text x="104" y="55" font-size="13" font-weight="bold" font-family="sans-serif" fill="#be123c">x°</text></svg>`
      );
      items.push(
        q(
          'ज्यामिति (कोण, त्रिभुज, वृत्त)',
          'त्रिभुज का कोण योग गुणधर्म',
          `दिए गए आरेख के त्रिभुज में दो अंतःकोण क्रमशः ${a1}° तथा ${a2}° हैं। तीसरे कोण x° का मान कितना होगा?`,
          `In the triangle shown in the diagram, two interior angles are ${a1}° and ${a2}°. Find angle x°.`,
          [`${a3}°`, `${a3}°`],
          makeNumericDistractors(a3, [10, -10, 15]).map(([n]) => [`${n}°`, `${n}°`]) as any,
          `त्रिभुज के तीनों अंतःकोणों का योगफल 180° होता है। अतः x = 180° − (${a1}° + ${a2}°) = 180° − ${a1 + a2}° = ${a3}°।`,
          `Sum of interior angles of a triangle is 180°. x = 180° - (${a1}° + ${a2}°) = ${a3}°.`,
          'EASY',
          { formulaHi: '∠A + ∠B + ∠C = 180°', diagramUrl: svg }
        )
      );
    } else if (mode === 1) {
      const sides = 5 + (i % 8); // pentagon to dodecagon + varied query (interior sum vs exterior)
      const isSum = Math.floor(i / 8) % 2 === 0;
      const val = isSum ? (sides - 2) * 180 : Math.round(360 / sides);
      // Adjust sides for clean divisor if exterior angle
      const cleanSidesList = [5, 6, 8, 9, 10, 12, 15, 18];
      const s = isSum ? sides : cleanSidesList[i % cleanSidesList.length];
      const ans = isSum ? (s - 2) * 180 : 360 / s;
      // ensure distinct by adding variation to phrasing when repeating polygon size
      const variantLabel = isSum
        ? `${s} भुजाओं वाले एक सम बहुभुज के सभी अंतःकोणों का योगफल`
        : `${s} भुजाओं वाले एक सम बहुभुज के प्रत्येक बाह्य कोण का माप`;
      const variantLabelEn = isSum
        ? `sum of all interior angles of a regular ${s}-sided polygon`
        : `measure of each exterior angle of a regular ${s}-sided polygon`;
      items.push(
        q(
          'ज्यामिति (कोण, त्रिभुज, वृत्त)',
          'बहुभुज के कोण',
          `प्रश्न संख्या G-${i + 1}: ${variantLabel} (अंशों में) कितना होगा?`,
          `Problem G-${i + 1}: Find the ${variantLabelEn}.`,
          [`${ans}°`, `${ans}°`],
          makeNumericDistractors(ans, [isSum ? 180 : 6, isSum ? -180 : -4, isSum ? 90 : 12]).map(
            ([n]) => [`${n}°`, `${n}°`]
          ) as any,
          isSum
            ? `n भुजाओं वाले बहुभुज के अंतःकोणों का योग = (n − 2) × 180° = (${s} − 2) × 180° = ${ans}°।`
            : `सम बहुभुज का प्रत्येक बाह्य कोण = 360° / n = 360° / ${s} = ${ans}°।`,
          isSum ? `Interior sum = (${s} - 2) × 180° = ${ans}°.`: `Exterior angle = 360°/${s} = ${ans}°.`,
          'MEDIUM',
          { formulaHi: isSum ? 'अंतःकोण योग = (n − 2) × 180°' : 'बाह्य कोण = 360° / n' }
        )
      );
      void val;
    } else {
      const oppAngle = 55 + (i % 50); // cyclic quadrilateral opposite angle
      const ans = 180 - oppAngle;
      const svg = svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="160" viewBox="0 0 220 160"><rect width="220" height="160" fill="#f8fafc" rx="8"/><circle cx="110" cy="80" r="62" fill="none" stroke="#0f766e" stroke-width="2"/><polygon points="62,42 162,46 152,126 56,112" fill="#ccfbf1" fill-opacity="0.5" stroke="#115e59" stroke-width="2"/><text x="66" y="60" font-size="12" fill="#134e4a">${oppAngle}°</text><text x="132" y="118" font-size="12" font-weight="bold" fill="#be123c">y°</text></svg>`
      );
      items.push(
        q(
          'ज्यामिति (कोण, त्रिभुज, वृत्त)',
          'चक्रीय चतुर्भुज एवं वृत्त',
          `संलग्न वृत्त में बने चक्रीय चतुर्भुज का एक कोण ${oppAngle}° है। इसके ठीक सम्मुख कोण y° का मान ज्ञात कीजिए।`,
          `In the cyclic quadrilateral inscribed in the circle, one angle is ${oppAngle}°. Find the opposite angle y°.`,
          [`${ans}°`, `${ans}°`],
          makeNumericDistractors(ans, [15, -15, 30]).map(([n]) => [`${n}°`, `${n}°`]) as any,
          `चक्रीय चतुर्भुज के सम्मुख कोण संपूरक होते हैं (योग = 180°)। अतः y = 180° − ${oppAngle}° = ${ans}°।`,
          `Opposite angles of a cyclic quadrilateral are supplementary: y = 180° - ${oppAngle}° = ${ans}°.`,
          'MEDIUM',
          { formulaHi: 'चक्रीय चतुर्भुज में ∠A + ∠C = 180°', diagramUrl: svg }
        )
      );
    }
  }

  // 13. Mensuration — Area, Perimeter, Volume (160 Qs)
  for (let i = 0; i < 160; i++) {
    const mode = i % 3;
    if (mode === 0) {
      const l = 12 + (i % 25);
      const b = 7 + (Math.floor(i / 25) % 10);
      const isArea = i % 2 === 0;
      const ans = isArea ? l * b : 2 * (l + b);
      const svg = svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="130" viewBox="0 0 240 130"><rect width="240" height="130" fill="#f8fafc" rx="8"/><rect x="40" y="30" width="160" height="70" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/><text x="102" y="22" font-size="13" fill="#78350f">${l} cm</text><text x="206" y="70" font-size="13" fill="#78350f">${b} cm</text></svg>`
      );
      items.push(
        q(
          'क्षेत्रमिति (परिमाप, क्षेत्रफल, आयतन)',
          'आयत का क्षेत्रफल व परिमाप',
          `संलग्न आयत की लंबाई ${l} सेमी और चौड़ाई ${b} सेमी है। इसका ${isArea ? 'क्षेत्रफल (वर्ग सेमी में)' : 'परिमाप (सेमी में)'} ज्ञात कीजिए।`,
          `Find the ${isArea ? 'area (cm²)' : 'perimeter (cm)'} of the rectangle with length ${l} cm and breadth ${b} cm.`,
          [`${ans} ${isArea ? 'वर्ग सेमी' : 'सेमी'}`, `${ans} ${isArea ? 'cm²' : 'cm'}`],
          makeNumericDistractors(ans, [12, -10, 24]).map(([n]) => [
            `${n} ${isArea ? 'वर्ग सेमी' : 'सेमी'}`,
            `${n} ${isArea ? 'cm²' : 'cm'}`,
          ]) as any,
          isArea
            ? `आयत का क्षेत्रफल = लंबाई × चौड़ाई = ${l} × ${b} = ${ans} वर्ग सेमी।`
            : `आयत का परिमाप = 2(लंबाई + चौड़ाई) = 2(${l} + ${b}) = ${ans} सेमी।`,
          isArea ? `Area = ${l} × ${b} = ${ans} cm².` : `Perimeter = 2(${l} + ${b}) = ${ans} cm.`,
          'EASY',
          { formulaHi: isArea ? 'क्षेत्रफल = लंबाई × चौड़ाई' : 'परिमाप = 2 × (लंबाई + चौड़ाई)', diagramUrl: svg }
        )
      );
    } else if (mode === 1) {
      const k = 1 + (i % 12);
      const r = 7 * k;
      const isArea = i % 2 === 0;
      const ans = isArea ? 154 * k * k : 44 * k;
      items.push(
        q(
          'क्षेत्रमिति (परिमाप, क्षेत्रफल, आयतन)',
          'वृत्त का क्षेत्रफल एवं परिधि',
          `यदि एक वृत्त की त्रिज्या ${r} सेमी हो (π = 22/7 मानें), तो उस वृत्त ${isArea ? 'का क्षेत्रफल (वर्ग सेमी)' : 'की परिधि (सेमी)'} कितनी होगी?`,
          `Find the ${isArea ? 'area (cm²)' : 'circumference (cm)'} of a circle of radius ${r} cm (take π = 22/7).`,
          [`${ans} ${isArea ? 'वर्ग सेमी' : 'सेमी'}`, `${ans} ${isArea ? 'cm²' : 'cm'}`],
          makeNumericDistractors(ans, [22 * k, -14 * k, 44]).map(([n]) => [
            `${n} ${isArea ? 'वर्ग सेमी' : 'सेमी'}`,
            `${n} ${isArea ? 'cm²' : 'cm'}`,
          ]) as any,
          isArea
            ? `वृत्त का क्षेत्रफल = πr² = (22/7) × ${r} × ${r} = ${ans} वर्ग सेमी।`
            : `वृत्त की परिधि = 2πr = 2 × (22/7) × ${r} = ${ans} सेमी।`,
          isArea ? `Area = πr² = ${ans} cm².` : `Circumference = 2πr = ${ans} cm.`,
          'MEDIUM',
          { formulaHi: isArea ? 'क्षेत्रफल = πr²' : 'परिधि = 2πr' }
        )
      );
    } else {
      const edge = 3 + (i % 16);
      const isVol = i % 2 === 0;
      const ans = isVol ? edge * edge * edge : 6 * edge * edge;
      items.push(
        q(
          'क्षेत्रमिति (परिमाप, क्षेत्रफल, आयतन)',
          'घन का आयतन एवं पृष्ठीय क्षेत्रफल',
          `एक घन की प्रत्येक भुजा ${edge} सेमी लंबी है। उस घन का ${isVol ? 'आयतन (घन सेमी)' : 'संपूर्ण पृष्ठीय क्षेत्रफल (वर्ग सेमी)'} कितना होगा?`,
          `Each edge of a cube is ${edge} cm. Find its ${isVol ? 'volume (cm³)' : 'total surface area (cm²)'}.`,
          [`${ans}`, `${ans}`],
          makeNumericDistractors(ans, [12, -8, 24]),
          isVol
            ? `घन का आयतन = भुजा³ = ${edge}³ = ${ans} घन सेमी।`
            : `घन का संपूर्ण पृष्ठीय क्षेत्रफल = 6 × भुजा² = 6 × ${edge}² = ${ans} वर्ग सेमी।`,
          isVol ? `Volume = ${edge}^3 = ${ans} cm³.` : `TSA = 6 × ${edge}^2 = ${ans} cm².`,
          'HARD',
          { formulaHi: isVol ? 'आयतन = a³' : 'संपूर्ण पृष्ठ = 6a²' }
        )
      );
    }
  }

  // 14. Statistics — Mean, Median, Mode & Empirical Relation (120 Qs)
  for (let i = 0; i < 120; i++) {
    if (i % 2 === 0) {
      const mean = 14 + (i % 22);
      const median = mean + 2 + (i % 5);
      const modeVal = 3 * median - 2 * mean;
      items.push(
        q(
          'तथ्यात्मक आँकड़े एवं सांख्यिकी (माध्य, माध्यिका, बहुलक)',
          'बंटन का आनुभविक संबंध',
          `यदि किसी बंटन का माध्य ${mean} और माध्यिका ${median} हो, तो उसका बहुलक (Mode) कितना होगा?`,
          `If the mean of a distribution is ${mean} and the median is ${median}, find its mode.`,
          [String(modeVal), String(modeVal)],
          makeNumericDistractors(modeVal, [3, -3, 6]),
          `सांख्यिकी के आनुभविक संबंध के अनुसार: बहुलक = 3 × माध्यिका − 2 × माध्य = 3(${median}) − 2(${mean}) = ${3 * median} − ${2 * mean} = ${modeVal}।`,
          `Using empirical formula Mode = 3 Median - 2 Mean = 3(${median}) - 2(${mean}) = ${modeVal}.`,
          'MEDIUM',
          { formulaHi: 'बहुलक = 3 × माध्यिका − 2 × माध्य', formulaEn: 'Mode = 3 Median - 2 Mean' }
        )
      );
    } else {
      const base = 6 + (i % 15);
      const arr = [base, base + 2, base + 4, base + 7, base + 12];
      const median = arr[2];
      items.push(
        q(
          'तथ्यात्मक आँकड़े एवं सांख्यिकी (माध्य, माध्यिका, बहुलक)',
          'माध्यिका ज्ञात करना',
          `आँकड़ों ${arr[3]}, ${arr[0]}, ${arr[4]}, ${arr[1]}, ${arr[2]} की माध्यिका (Median) ज्ञात कीजिए।`,
          `Find the median of the observations: ${arr[3]}, ${arr[0]}, ${arr[4]}, ${arr[1]}, ${arr[2]}.`,
          [String(median), String(median)],
          makeNumericDistractors(median, [2, -2, 5]),
          `आरोही क्रम में व्यवस्थित करने पर: ${arr.join(', ')}। कुल n = 5 (विषम) पद हैं, अतः माध्यिका = 3वाँ पद = ${median}।`,
          `Sorted ascending order: ${arr.join(', ')}. Middle (3rd) observation is ${median}.`,
          'EASY',
          { formulaHi: 'विषम पदों के लिए माध्यिका = ((n+1)/2)वाँ पद (आरोही क्रम में)' }
        )
      );
    }
  }

  return items;
}
