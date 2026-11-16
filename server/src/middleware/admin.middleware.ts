import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthUser } from './auth';

const JWT_SECRET = process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';

/**
 * Admin Verification Middleware (RBAC)
 * Ensures that the requesting user is authenticated and possesses the ADMIN (or CONTENT_REVIEWER) role.
 * If unauthorized, returns HTTP 403 Forbidden to prevent student access.
 */
export const verifyAdmin = (req: Request, res: Response, next: NextFunction): void => {
  try {
    let user = (req as any).user;
    if (!user) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        user = jwt.verify(token, JWT_SECRET) as AuthUser;
        (req as any).user = user;
      }
    }

    if (user && (user.role === 'ADMIN' || user.role === 'CONTENT_REVIEWER')) {
      next();
    } else {
      res.status(403).json({ error: 'Access denied. Admin only.' });
    }
  } catch (error) {
    res.status(403).json({ error: 'Access denied. Admin only.' });
  }
};

export default verifyAdmin;
