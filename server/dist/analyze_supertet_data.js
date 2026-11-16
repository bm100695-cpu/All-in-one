"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertet_2019_pyq_1 = require("./data/supertet_2019_pyq");
const supertet_2018_pyq_1 = require("./data/supertet_2018_pyq");
console.log('2019 count:', supertet_2019_pyq_1.SUPERTET_2019_VERIFIED_PYQS.length);
const subjCounts19 = {};
for (const q of supertet_2019_pyq_1.SUPERTET_2019_VERIFIED_PYQS) {
    if (!subjCounts19[q.subject])
        subjCounts19[q.subject] = [];
    subjCounts19[q.subject].push(q.questionNumber);
}
console.log('2019 by subject:');
for (const [s, nums] of Object.entries(subjCounts19)) {
    console.log(`  ${s}: ${nums.length} questions (nums: ${nums.join(', ')})`);
}
console.log('\n2018 count:', supertet_2018_pyq_1.SUPERTET_2018_VERIFIED_PYQS.length);
const subjCounts18 = {};
for (const q of supertet_2018_pyq_1.SUPERTET_2018_VERIFIED_PYQS) {
    if (!subjCounts18[q.subject])
        subjCounts18[q.subject] = [];
    subjCounts18[q.subject].push(q.questionNumber);
}
console.log('2018 by subject:');
for (const [s, nums] of Object.entries(subjCounts18)) {
    console.log(`  ${s}: ${nums.length} questions (nums: ${nums.join(', ')})`);
}
