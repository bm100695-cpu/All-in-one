import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';

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

      // The database is the sole authority for roles. A matching email address
      // or stale JWT must never promote a student into an administrator.
      const effectiveRole = dbUser.role as AuthUser['role'];

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
      // Fail closed. Falling back to an old JWT would preserve a role after it
      // has been revoked in the database, which is unsafe for admin routes.
      console.error('[Auth Middleware] Database role validation failed:', dbErr.message);
      res.status(503).json({ error: 'Authorization service is temporarily unavailable. Please try again.' });
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
