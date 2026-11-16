import { prisma } from './prisma';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('--- FAST BATCH SYNCING SEQUENTIAL CROPS TO DATABASE ---');
  const dir = path.resolve(__dirname, '../../tutornove-pyq/output/repaired_papers');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
  console.log(`Found ${files.length} repaired paper JSONs.`);

  let totalUpdated = 0;
  let testCount = 0;

  for (let idx = 0; idx < files.length; idx++) {
    const file = files[idx];
    const paperKey = file.replace('.json', '');
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const test = await prisma.test.findFirst({
      where: {
        OR: [
          { pyqReference: paperKey },
          { title: { contains: paperKey.replace(/_/g, ' ') } },
        ],
      },
      include: {
        testQuestions: true,
      },
    });

    if (!test) {
      console.warn(`[${idx + 1}/${files.length}] No test found for ${paperKey}`);
      continue;
    }

    testCount++;
    const tqMap = new Map(test.testQuestions.map((tq) => [tq.questionNumber, tq.questionId]));

    const updates = [];
    for (const q of data.questions) {
      const qNum = q.questionNumber;
      const questionId = tqMap.get(qNum);
      if (!questionId) continue;

      const seqDiagramUrl = `/pyq-crops/${paperKey}/q_seq_${qNum}.webp`;

      updates.push(
        prisma.question.update({
          where: { id: questionId },
          data: { diagramUrl: seqDiagramUrl },
        })
      );
    }

    if (updates.length > 0) {
      await prisma.$transaction(updates);
      totalUpdated += updates.length;
    }

    console.log(`[${idx + 1}/${files.length}] Synced ${paperKey} (${updates.length} Qs, running total: ${totalUpdated})`);
  }

  console.log(`\nCOMPLETED: Updated ${totalUpdated} questions across ${testCount} tests.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
