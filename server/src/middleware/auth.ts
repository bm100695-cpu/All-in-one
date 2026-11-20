import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';

const DEFAULT_ADMIN_EMAILS = ['bm100695@gmail.com', 'admin@examverse.ai'];

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const clean = email.toLowerCase().trim();
  const envAdmins = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  const allAdmins = [...DEFAULT_ADMIN_EMAILS, ...envAdmins];
  return allAdmins.includes(clean);
}

export interface AuthUser {
  userId?: string;
  id: string;
  email: string;
  name: string;
  role: 'STUDENT' | 'ADMIN' | 'CONTENT_REVIEWER' | 'INSTITUTION_ADMIN';
  studentId?: string;
  targetExamId?: string;
  examSelectedAt?: string;
  avatar?: string;
  referralCode?: string;
  referralCredits?: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    {
      userId: user.id || user.userId,
      id: user.id || user.userId,
      email: user.email,
      name: user.name,
      role: user.role,
      studentId: user.studentId,
      targetExamId: user.targetExamId,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required. Missing Bearer token.' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id || decoded.userId;

    if (!userId) {
      res.status(401).json({ error: 'Invalid token structure.' });
      return;
    }

    // Single source of truth: Verify role and user directly from DB
    try {
      const dbUser = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          studentId: true,
          targetExamId: true,
          avatar: true,
          referralCode: true,
          referralCredits: true,
        },
      });

      if (!dbUser) {
        res.status(401).json({ error: 'User account no longer exists.' });
        return;
      }

      let effectiveRole = dbUser.role as AuthUser['role'];

      // Auto-sync authorized admin email if role was previously set as STUDENT
      if (isAdminEmail(dbUser.email) && effectiveRole !== 'ADMIN') {
        await prisma.user.update({
          where: { id: dbUser.id },
          data: { role: 'ADMIN' },
        });
        effectiveRole = 'ADMIN';
      }

      req.user = {
        userId: dbUser.id,
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        role: effectiveRole,
        studentId: dbUser.studentId || undefined,
        targetExamId: dbUser.targetExamId || undefined,
        avatar: dbUser.avatar || undefined,
        referralCode: dbUser.referralCode || undefined,
        referralCredits: dbUser.referralCredits || 0,
      };

      next();
      return;
    } catch (dbErr: any) {
      // If DB is unreachable (e.g. offline testing), fallback to verified JWT payload
      console.warn('[Auth Middleware] DB lookup notice, falling back to verified JWT payload:', dbErr.message);
      req.user = {
        ...decoded,
        id: userId,
        userId,
      };
      next();
      return;
    }
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token.' });
    return;
  }
}

export function requireRole(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: 'Authentication required.' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        error: `Forbidden. Action requires one of: ${allowedRoles.join(', ')}. Current role: ${req.user.role}`,
      });
      return;
    }

    next();
  };
}
