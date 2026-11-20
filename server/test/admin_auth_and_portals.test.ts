import { generateToken, requireRole, isAdminEmail, AuthUser } from '../src/middleware/auth';
import jwt from 'jsonwebtoken';

async function runTests() {
  console.log('=== Running Admin Authorization & Exam Portals Test Suite ===\n');
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string, detail?: string) {
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName} - ${detail || ''}`);
      failed++;
    }
  }

  // TEST 1: isAdminEmail verification
  assert(isAdminEmail('bm100695@gmail.com') === true, 'Default admin email bm100695@gmail.com is recognized as ADMIN');
  assert(isAdminEmail('BM100695@GMAIL.COM') === true, 'Admin email check is case-insensitive');
  assert(isAdminEmail('admin@examverse.ai') === true, 'Admin email admin@examverse.ai is recognized');
  assert(isAdminEmail('student123@gmail.com') === false, 'Regular student email is NOT recognized as admin');
  assert(isAdminEmail('') === false, 'Empty email is NOT recognized as admin');
  assert(isAdminEmail(undefined) === false, 'Undefined email is NOT recognized as admin');

  // TEST 2: Token generation & payload verification
  const adminUser: AuthUser = {
    id: 'user_admin_001',
    userId: 'user_admin_001',
    email: 'bm100695@gmail.com',
    name: 'Brijesh Maurya (Admin)',
    role: 'ADMIN',
  };
  const token = generateToken(adminUser);
  const secret = process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';
  const decoded = jwt.verify(token, secret) as any;
  assert(decoded.role === 'ADMIN', 'Generated token embeds role: ADMIN');
  assert(decoded.id === 'user_admin_001', 'Generated token embeds correct user id');
  assert(decoded.email === 'bm100695@gmail.com', 'Generated token embeds correct email');

  // TEST 3: requireRole middleware authorization check
  const adminMiddleware = requireRole(['ADMIN']);

  // Case 3a: Missing authentication -> 401
  let statusResult = 0;
  let jsonResult: any = null;
  const mockRes3a: any = {
    status: (s: number) => {
      statusResult = s;
      return mockRes3a;
    },
    json: (j: any) => {
      jsonResult = j;
    },
  };
  let nextCalled = false;
  adminMiddleware({} as any, mockRes3a, () => { nextCalled = true; });
  assert(statusResult === 401, 'Unauthenticated request receives HTTP 401');

  // Case 3b: Authenticated as STUDENT attempting to access ADMIN endpoint -> 403 Forbidden
  statusResult = 0;
  jsonResult = null;
  nextCalled = false;
  const mockReqStudent: any = {
    user: {
      id: 'student_001',
      email: 'student@example.com',
      name: 'Test Student',
      role: 'STUDENT',
    },
  };
  adminMiddleware(mockReqStudent, mockRes3a, () => { nextCalled = true; });
  assert(statusResult === 403, 'Student role request receives HTTP 403 Forbidden');
  assert(
    jsonResult?.error === 'Forbidden. Action requires one of: ADMIN. Current role: STUDENT',
    'Returns exact expected RBAC error message for student',
    jsonResult?.error
  );
  assert(nextCalled === false, 'next() is NOT called when authorization fails');

  // Case 3c: Authenticated as ADMIN -> Access Granted (next() called)
  statusResult = 0;
  jsonResult = null;
  nextCalled = false;
  const mockReqAdmin: any = {
    user: adminUser,
  };
  adminMiddleware(mockReqAdmin, mockRes3a, () => { nextCalled = true; });
  assert(nextCalled === true, 'next() IS called when user has ADMIN role');
  assert(statusResult === 0, 'No error status emitted for authorized ADMIN');

  // TEST 4: Portal Slug Generation & Sanitization
  function sanitizeSlug(raw: string): string {
    return String(raw).trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
  }
  assert(sanitizeSlug('UPSC Civil Services 2026') === 'upsc-civil-services-2026', 'Sanitizes spaces and casing to clean slug');
  assert(sanitizeSlug('CTET & UPTET Paper #1!') === 'ctet---uptet-paper--1-', 'Removes special characters from slug');

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} passed, ${failed} failed`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error('Test error:', e);
  process.exit(1);
});
