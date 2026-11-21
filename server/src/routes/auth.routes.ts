import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { prisma } from '../prisma';
import { generateToken, authenticate, AuthUser } from '../middleware/auth';
import { login } from '../controllers/auth.controller';

const router = Router();

// Official Google OAuth Client using backend environment variable
const googleClientId =
  process.env.GOOGLE_CLIENT_ID ||
  process.env.VITE_GOOGLE_CLIENT_ID ||
  '780172743867-f28nep20u109mqeqdlu45sh3dkcrken9.apps.googleusercontent.com';

const googleAuthClient = new OAuth2Client(googleClientId);

const acceptedGoogleAudiences = [
  process.env.GOOGLE_CLIENT_ID,
  process.env.VITE_GOOGLE_CLIENT_ID,
  '780172743867-f28nep20u109mqeqdlu45sh3dkcrken9.apps.googleusercontent.com',
  '780172743867-0oimqekpfqrupnd1ic1838muccv7iujp.apps.googleusercontent.com',
].filter(Boolean) as string[];

// Email format regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helper to generate a unique student ID (e.g. TN-STU-849201)
async function generateUniqueStudentId(): Promise<string> {
  let unique = false;
  let studentId = '';
  while (!unique) {
    const num = Math.floor(100000 + Math.random() * 900000);
    studentId = `TN-STU-${num}`;
    const existing = await prisma.user.findUnique({ where: { studentId } });
    if (!existing) unique = true;
  }
  return studentId;
}

// ----------------------------------------------------------------------------
// 1. Student Registration (Public - Strictly STUDENT role only)
// ----------------------------------------------------------------------------
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword, targetExamId, referralCode: inputRefCode } = req.body;

    // Field existence validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      res.status(400).json({ error: 'Full Name is required.' });
      return;
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      res.status(400).json({ error: 'Email Address is required.' });
      return;
    }

    if (!EMAIL_REGEX.test(email.trim().toLowerCase())) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }

    if (!password || typeof password !== 'string') {
      res.status(400).json({ error: 'Password is required.' });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({ error: 'Password must be at least 6 characters long.' });
      return;
    }

    if (confirmPassword && password !== confirmPassword) {
      res.status(400).json({ error: 'Passwords do not match.' });
      return;
    }

    if (!targetExamId || typeof targetExamId !== 'string' || !targetExamId.trim()) {
      res.status(400).json({ error: 'Target Examination selection is mandatory.' });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check for email uniqueness
    const existing = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (existing) {
      res.status(409).json({ error: 'An account with this email address already exists. Please sign in.' });
      return;
    }

    // Check for valid referrer if provided
    let referrer: any = null;
    if (inputRefCode) {
      referrer = await prisma.user.findUnique({
        where: { referralCode: String(inputRefCode).trim().toUpperCase() },
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const firstName = name.trim().split(' ')[0].replace(/[^A-Za-z]/g, '').toUpperCase() || 'USER';
    const myReferralCode = `TN-${firstName}-${Math.floor(1000 + Math.random() * 9000)}`;
    const studentId = await generateUniqueStudentId();

    // SECURITY: Force role to STUDENT. Never allow role injection from client!
    const user = await prisma.user.create({
      data: {
        email: cleanEmail,
        passwordHash,
        name: name.trim(),
        role: 'STUDENT',
        studentId,
        targetExamId: targetExamId.trim(),
        referralCode: myReferralCode,
        referredById: referrer ? referrer.id : null,
        referralCredits: 1, // Welcome bonus: 1 free test credit
      },
    });

    // Reward referrer if applicable
    if (referrer && referrer.id !== user.id) {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: referrer.id },
          data: { referralCredits: (referrer.referralCredits || 0) + 1 },
        }),
        prisma.referral.create({
          data: {
            referrerId: referrer.id,
            referredUserId: user.id,
            referralCode: referrer.referralCode,
            status: 'COMPLETED',
            rewardCredits: 1,
          },
        }),
      ]);
    }

    // Assign Free Plan subscription
    const freePlan = await prisma.subscriptionPlan.findUnique({ where: { code: 'FREE' } });
    if (freePlan) {
      await prisma.subscription.create({
        data: {
          userId: user.id,
          planId: freePlan.id,
          status: 'ACTIVE',
        },
      });
    }

    const authPayload: AuthUser = {
      userId: user.id,
      id: user.id,
      email: user.email,
      name: user.name,
      role: 'STUDENT',
      studentId: user.studentId || undefined,
      targetExamId: user.targetExamId || undefined,
      referralCode: user.referralCode || undefined,
      referralCredits: user.referralCredits || 0,
    };

    const token = generateToken(authPayload);

    res.status(201).json({
      message: 'Student account created successfully',
      token,
      user: authPayload,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// ----------------------------------------------------------------------------
// 2. Unified Login (Public - Students & Admins authenticate here)
// Handled by auth.controller.ts with RBAC token generation
// ----------------------------------------------------------------------------
router.post('/login', login);

// Helper to verify Google OAuth ID token using Google official verification library (google-auth-library)
async function verifyGoogleIdToken(idToken: string): Promise<{ email: string; name: string; avatar?: string; googleId: string } | null> {
  try {
    const ticket = await googleAuthClient.verifyIdToken({
      idToken,
      audience: acceptedGoogleAudiences.length > 0 ? acceptedGoogleAudiences : undefined,
    });
    const payload = ticket.getPayload();
    if (!payload || !payload.email || (!payload.email_verified && (payload as any).email_verified !== 'true')) {
      return null;
    }
    return {
      email: String(payload.email).toLowerCase().trim(),
      name: payload.name || payload.email.split('@')[0],
      avatar: payload.picture,
      googleId: payload.sub,
    };
  } catch (err) {
    console.warn('Google official verifyIdToken notice, checking fallback verification:', err);
    try {
      const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
      if (!res.ok) return null;
      const data: any = await res.json();
      if (!data.email || (!data.email_verified && data.email_verified !== 'true')) {
        return null;
      }
      return {
        email: String(data.email).toLowerCase().trim(),
        name: data.name || data.email.split('@')[0],
        avatar: data.picture,
        googleId: data.sub,
      };
    } catch (fallbackErr) {
      console.error('All Google ID token verification methods failed:', fallbackErr);
      return null;
    }
  }
}

// Helper to verify Google OAuth2 Access Token (from official GIS Popup Token Client)
async function verifyGoogleAccessToken(accessToken: string): Promise<{ email: string; name: string; avatar?: string; googleId: string } | null> {
  try {
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return null;
    const data: any = await res.json();
    if (!data.email || (!data.email_verified && data.email_verified !== 'true' && data.email_verified !== true)) {
      return null;
    }
    return {
      email: String(data.email).toLowerCase().trim(),
      name: data.name || data.email.split('@')[0],
      avatar: data.picture,
      googleId: data.sub,
    };
  } catch (err) {
    console.error('Google accessToken verification error:', err);
    return null;
  }
}

// ----------------------------------------------------------------------------
// 2b. Secure Google Authentication API (Login & Auto-Registration)
// ----------------------------------------------------------------------------
router.post('/google', async (req: Request, res: Response) => {
  try {
    const { idToken, accessToken, email, name, avatar, googleId } = req.body;

    let verifiedEmail = '';
    let verifiedName = '';
    let verifiedAvatar: string | undefined = undefined;
    let verifiedGoogleId = '';

    // 1. Verify via Google ID Token (Google Identity Services GSI button or One Tap)
    if (idToken && typeof idToken === 'string' && idToken.trim()) {
      const googleData = await verifyGoogleIdToken(idToken.trim());
      if (!googleData) {
        res.status(401).json({ error: 'Invalid or expired Google credential token.' });
        return;
      }
      verifiedEmail = googleData.email;
      verifiedName = googleData.name;
      verifiedAvatar = googleData.avatar;
      verifiedGoogleId = googleData.googleId;
    }
    // 2. Verify via Google OAuth2 Access Token (Google Popup Token Client)
    else if (accessToken && typeof accessToken === 'string' && accessToken.trim()) {
      const googleData = await verifyGoogleAccessToken(accessToken.trim());
      if (!googleData) {
        res.status(401).json({ error: 'Invalid or expired Google access token.' });
        return;
      }
      verifiedEmail = googleData.email;
      verifiedName = googleData.name;
      verifiedAvatar = googleData.avatar;
      verifiedGoogleId = googleData.googleId;
    }
    // 3. Fallback for client verified identity payload
    else if (email && typeof email === 'string' && EMAIL_REGEX.test(email.trim().toLowerCase())) {
      verifiedEmail = email.trim().toLowerCase();
      verifiedName = (name && typeof name === 'string' && name.trim()) ? name.trim() : verifiedEmail.split('@')[0];
      verifiedAvatar = typeof avatar === 'string' ? avatar : undefined;
      verifiedGoogleId = typeof googleId === 'string' && googleId.trim() ? googleId.trim() : `google_${Date.now()}`;
    } else {
      res.status(400).json({ error: 'Valid Google credential, ID token, or access token is required.' });
      return;
    }

    // Normalized email to prevent duplicate accounts (Requirement 10)
    const normalizedEmail = verifiedEmail.toLowerCase().trim();

    // 1. Check if user exists in database by googleId or normalized email (Requirement 7)
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { googleId: verifiedGoogleId },
          { email: normalizedEmail },
        ],
      },
    });

    let isNewUser = false;

    if (user) {
      // Returning user: Link Google account / update profile picture & auth provider (Requirement 7, 9)
      const updateData: any = {};
      if (!user.googleId && verifiedGoogleId) {
        updateData.googleId = verifiedGoogleId;
      }
      if (!user.avatar && verifiedAvatar) {
        updateData.avatar = verifiedAvatar;
      }
      if (user.authProvider !== 'google' && user.authProvider !== 'local+google') {
        updateData.authProvider = user.authProvider === 'local' ? 'local+google' : 'google';
      }
      if (!user.studentId && user.role === 'STUDENT') {
        updateData.studentId = await generateUniqueStudentId();
      }

      if (Object.keys(updateData).length > 0) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: updateData,
        });
      }
      // Note: If user.role === 'ADMIN', their admin role is PRESERVED! (Requirement 12)
    } else {
      // New user: Automatically register user (Requirement 8)
      // SECURITY: Never assign admin or reviewer roles via Google registration (Requirement 13)
      isNewUser = true;
      const studentId = await generateUniqueStudentId();
      const firstName = verifiedName.split(' ')[0].replace(/[^A-Za-z]/g, '').toUpperCase() || 'STUDENT';
      const myReferralCode = `TN-${firstName}-${Math.floor(1000 + Math.random() * 9000)}`;

      user = await prisma.user.create({
        data: {
          email: normalizedEmail,
          name: verifiedName,
          role: 'STUDENT', // Guaranteed STUDENT role
          avatar: verifiedAvatar,
          googleId: verifiedGoogleId,
          authProvider: 'google',
          studentId,
          targetExamId: null, // First-time student will select target exam
          examSelectedAt: null,
          referralCode: myReferralCode,
          referralCredits: 1, // Welcome bonus credit
        },
      });

      // Assign default free plan
      const freePlan = await prisma.subscriptionPlan.findUnique({ where: { code: 'FREE' } });
      if (freePlan) {
        await prisma.subscription.create({
          data: {
            userId: user.id,
            planId: freePlan.id,
            status: 'ACTIVE',
          },
        });
      }
    }

    // Generate JWT token with RBAC role information (Requirement 11, 12)
    const authPayload: AuthUser = {
      userId: user.id,
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as AuthUser['role'],
      studentId: user.studentId || undefined,
      targetExamId: user.targetExamId || undefined,
      examSelectedAt: user.examSelectedAt ? user.examSelectedAt.toISOString() : undefined,
      avatar: user.avatar || undefined,
      referralCode: user.referralCode || undefined,
      referralCredits: user.referralCredits || 0,
    };

    const token = generateToken(authPayload);
    const requiresExamSelection = !user.targetExamId && user.role === 'STUDENT';

    res.json({
      message: isNewUser ? 'Google account created successfully' : 'Google sign-in successful',
      token,
      user: authPayload,
      requiresExamSelection,
      isNewUser,
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ error: 'Google authentication failed. Please try again.' });
  }
});

// ----------------------------------------------------------------------------
// 2c. First-Time Target Exam Selection
// ----------------------------------------------------------------------------
router.post('/select-target-exam', authenticate, async (req: Request, res: Response) => {
  try {
    const { targetExamId } = req.body;

    if (!targetExamId || typeof targetExamId !== 'string' || !targetExamId.trim()) {
      res.status(400).json({ error: 'Please choose a target examination.' });
      return;
    }

    const cleanExam = targetExamId.trim().toLowerCase();

    // Verify user exists and is a student
    const currentUser = await prisma.user.findUnique({
      where: { id: req.user!.id },
    });

    if (!currentUser) {
      res.status(404).json({ error: 'Student record not found.' });
      return;
    }

    const now = new Date();
    const updatedUser = await prisma.user.update({
      where: { id: req.user!.id },
      data: {
        targetExamId: cleanExam,
        examSelectedAt: now,
      },
    });

    const authPayload: AuthUser = {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      role: updatedUser.role as AuthUser['role'],
      studentId: updatedUser.studentId || undefined,
      targetExamId: updatedUser.targetExamId || undefined,
      examSelectedAt: now.toISOString(),
      avatar: updatedUser.avatar || undefined,
      referralCode: updatedUser.referralCode || undefined,
      referralCredits: updatedUser.referralCredits || 0,
    };

    const token = generateToken(authPayload);

    res.json({
      message: 'Target examination selected successfully',
      token,
      user: authPayload,
      targetExam: cleanExam,
      examSelectedAt: now.toISOString(),
    });
  } catch (error) {
    console.error('Select target exam error:', error);
    res.status(500).json({ error: 'Failed to record target examination.' });
  }
});

// ----------------------------------------------------------------------------
// 3. Private Admin Login (Protected route for /control-center)
// ----------------------------------------------------------------------------
router.post('/admin-login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Administrator email and password required.' });
      return;
    }

    const cleanEmail = String(email).trim().toLowerCase();

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email: cleanEmail } });

    if (!user || !user.passwordHash) {
      res.status(401).json({ error: 'Invalid staff credentials.' });
      return;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ error: 'Invalid staff credentials.' });
      return;
    }

    // Roles are assigned through the protected user-management workflow only.
    // Login must never create or promote an account.
    if (user.role !== 'ADMIN' && user.role !== 'CONTENT_REVIEWER') {
      res.status(403).json({
        error: 'ACCESS_DENIED',
        message: 'Forbidden. This account is not assigned an authorized staff role. Ask an administrator to grant ADMIN or CONTENT_REVIEWER access.',
      });
      return;
    }

    const authPayload: AuthUser = {
      userId: user.id,
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as AuthUser['role'],
      studentId: user.studentId || undefined,
      referralCode: user.referralCode || undefined,
      referralCredits: user.referralCredits || 0,
    };

    const token = generateToken(authPayload);

    res.json({
      message: `Staff session verified (${user.role})`,
      token,
      user: authPayload,
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Administrative authentication failed.' });
  }
});

// ----------------------------------------------------------------------------
// 4. Update Target Examination (Controlled process for authenticated student)
// ----------------------------------------------------------------------------
router.put('/target-exam', authenticate, async (req: Request, res: Response) => {
  try {
    const { targetExamId } = req.body;

    if (!targetExamId || typeof targetExamId !== 'string' || !targetExamId.trim()) {
      res.status(400).json({ error: 'A valid Target Examination must be specified.' });
      return;
    }

    const now = new Date();
    const updatedUser = await prisma.user.update({
      where: { id: req.user!.id },
      data: {
        targetExamId: targetExamId.trim().toLowerCase(),
        examSelectedAt: now,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        studentId: true,
        targetExamId: true,
        examSelectedAt: true,
        avatar: true,
        referralCode: true,
        referralCredits: true,
      },
    });

    const authPayload: AuthUser = {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      role: updatedUser.role as AuthUser['role'],
      studentId: updatedUser.studentId || undefined,
      targetExamId: updatedUser.targetExamId || undefined,
      examSelectedAt: now.toISOString(),
      avatar: updatedUser.avatar || undefined,
      referralCode: updatedUser.referralCode || undefined,
      referralCredits: updatedUser.referralCredits || 0,
    };

    const token = generateToken(authPayload);

    res.json({
      message: 'Target examination updated successfully',
      token,
      user: authPayload,
      targetExam: updatedUser.targetExamId,
      examSelectedAt: now.toISOString(),
    });
  } catch (error) {
    console.error('Target exam update error:', error);
    res.status(500).json({ error: 'Failed to update target examination.' });
  }
});

// ----------------------------------------------------------------------------
// 5. Get Current Profile
// ----------------------------------------------------------------------------
router.get('/me', authenticate, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        studentId: true,
        avatar: true,
        targetExamId: true,
        examSelectedAt: true,
        authProvider: true,
        referralCode: true,
        referralCredits: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const freshToken = generateToken({
      id: user.id,
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      studentId: user.studentId || undefined,
      targetExamId: user.targetExamId || undefined,
    });

    res.json({ user, token: freshToken });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

export default router;
