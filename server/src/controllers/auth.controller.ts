import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { AuthUser, generateToken } from '../middleware/auth';

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

    // Auto-bootstrap Admin user for bm100695@gmail.com
    if (cleanEmail === 'bm100695@gmail.com' && password === 'brijesh@1234') {
      const passwordHash = await bcrypt.hash('brijesh@1234', 10);
      const existingAdmin = await prisma.user.findUnique({ where: { email: cleanEmail } });
      if (!existingAdmin) {
        await prisma.user.create({
          data: {
            email: cleanEmail,
            name: 'Brijesh Maurya (Admin)',
            role: 'ADMIN',
            passwordHash,
            authProvider: 'local',
          },
        });
      } else if (existingAdmin.role !== 'ADMIN' || !existingAdmin.passwordHash) {
        await prisma.user.update({
          where: { id: existingAdmin.id },
          data: {
            role: 'ADMIN',
            passwordHash,
            name: 'Brijesh Maurya (Admin)',
          },
        });
      }
    }

    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });

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
