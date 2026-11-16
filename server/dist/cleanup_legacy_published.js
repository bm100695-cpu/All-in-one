"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./prisma");
async function main() {
    const legacyIds = [
        'cmvs6o3e5001ikvtipdv40thj',
        'cmw6p2vgv0001laism1za43ev',
        'cmw6p2vqt000rlaisms9bhpt2',
        'cmw6p2vwv0019laisljdwa7qv',
        'cmw6p2w2b001nlais27k8h3yh',
        'cmw6p2w850021laiseckyn6vr',
        'cmw6rniik0001m21r3sq5wa27',
        'cmw6rnlyi008fm21rsowo9wej',
        'cmw6rnpl700gtm21r7tbbhbcc',
        'cmw6rnuzg00qvm21rsrd9cmd1',
        'cmw6ro044010xm21rhhfbmjwj',
        'cmw6ro59v01azm21rmf0loscp',
        'cmw6roaaw01l1m21rqo2y9ppk',
        'cmw6rofv101v3m21r3cm28u1n',
        'cmw6roli40255m21rwacco5iv',
        'cmw6roqfr02f7m21r080o0n2i',
    ];
    const updated = await prisma_1.prisma.test.updateMany({
        where: { id: { in: legacyIds } },
        data: { isPublished: false },
    });
    console.log(`Unpublished ${updated.count} legacy partial tests. (Preserved in database for attempts)`);
    const activeCount = await prisma_1.prisma.test.count({
        where: { isPublished: true },
    });
    console.log(`Active published tests in TutorNove Library: ${activeCount}`);
}
main().catch(console.error).finally(() => prisma_1.prisma.$disconnect());
