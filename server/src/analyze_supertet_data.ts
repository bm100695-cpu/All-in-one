import { SUPERTET_2019_VERIFIED_PYQS } from './data/supertet_2019_pyq';
import { SUPERTET_2018_VERIFIED_PYQS } from './data/supertet_2018_pyq';

console.log('2019 count:', SUPERTET_2019_VERIFIED_PYQS.length);
const subjCounts19: Record<string, number[]> = {};
for (const q of SUPERTET_2019_VERIFIED_PYQS) {
  if (!subjCounts19[q.subject]) subjCounts19[q.subject] = [];
  subjCounts19[q.subject].push(q.questionNumber);
}
console.log('2019 by subject:');
for (const [s, nums] of Object.entries(subjCounts19)) {
  console.log(`  ${s}: ${nums.length} questions (nums: ${nums.join(', ')})`);
}

console.log('\n2018 count:', SUPERTET_2018_VERIFIED_PYQS.length);
const subjCounts18: Record<string, number[]> = {};
for (const q of SUPERTET_2018_VERIFIED_PYQS) {
  if (!subjCounts18[q.subject]) subjCounts18[q.subject] = [];
  subjCounts18[q.subject].push(q.questionNumber);
}
console.log('2018 by subject:');
for (const [s, nums] of Object.entries(subjCounts18)) {
  console.log(`  ${s}: ${nums.length} questions (nums: ${nums.join(', ')})`);
}

