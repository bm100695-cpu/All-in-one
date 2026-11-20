import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { AuthUser, generateToken, isAdminEmail } from '../middleware/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';

/**
 * Helper to generate a unique student ID if missing
 */
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

/**
 * Unified Login Controller for Students and Admins (RBAC)
 * Verifies email and password, generates JWT containing userId and role,
 * and returns user object with id, email, role, etc.
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required.' });
      return;
    }

    const cleanEmail = String(email).trim().toLowerCase();

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email: cleanEmail } });

    // Secure Auto-sync for authorized admin email
    if (isAdminEmail(cleanEmail)) {
      if (!user) {
        const passwordHash = await bcrypt.hash(password, 10);
        user = await prisma.user.create({
          data: {
            email: cleanEmail,
            name: cleanEmail.split('@')[0],
            role: 'ADMIN',
            passwordHash,
            authProvider: 'local',
          },
        });
      } else if (user.role !== 'ADMIN') {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { role: 'ADMIN' },
        });
      }
    }

    if (!user || !user.passwordHash) {
      res.status(401).json({ error: 'Invalid email or password.' });
      return;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ error: 'Invalid email or password.' });
      return;
    }

    // Ensure student has a studentId if not yet populated
    let sId = user.studentId;
    if (!sId && user.role === 'STUDENT') {
      sId = await generateUniqueStudentId();
      await prisma.user.update({
        where: { id: user.id },
        data: { studentId: sId },
      });
    }

    const authPayload: AuthUser = {
      userId: user.id,
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as AuthUser['role'],
      studentId: sId || undefined,
      targetExamId: user.targetExamId || undefined,
      referralCode: user.referralCode || undefined,
      referralCredits: user.referralCredits || 0,
      avatar: user.avatar || undefined,
    };

    // Sign JWT token containing userId and role
    const token = generateToken(authPayload);

    // Return token and user object containing { id, email, role, ... }
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        studentId: sId || undefined,
        targetExamId: user.targetExamId || undefined,
        referralCredits: user.referralCredits || 0,
        avatar: user.avatar || undefined,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed. Please check credentials.' });
  }
};

export default {
  login,
};
