import React from 'react';
import { User } from '../types';

interface AdminRouteProps {
  currentUser: User | null;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onRedirectToStudent?: () => void;
  onRedirectToLogin?: () => void;
  onSwitchToAdmin?: () => void;
  onUserRefreshed?: (user: User) => void;
}

/**
 * Protected Admin Route Wrapper (RBAC)
 * Strictly verifies ADMIN role.
 * - If not authenticated: Redirects to /login
 * - If logged in as STUDENT: Silently bounces them to /dashboard (Admin portal is 100% invisible)
 * - If ADMIN: Renders protected children
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({
  currentUser,
  children,
  fallback,
  onRedirectToStudent,
  onRedirectToLogin,
}) => {
  // 1. Not authenticated -> Redirect to /login
  if (!currentUser) {
    if (fallback) {
      return <>{fallback}</>;
    }
    if (onRedirectToLogin) {
      onRedirectToLogin();
    } else {
      window.location.hash = '/login';
    }
    return null;
  }

  // 2. Authenticated as STUDENT -> Silently redirect to Student Dashboard
  if (currentUser.role !== 'ADMIN') {
    if (onRedirectToStudent) {
      onRedirectToStudent();
    } else {
      window.location.hash = '/dashboard';
    }
    return null;
  }

  // 3. Authenticated as ADMIN -> Access Granted
  return <>{children}</>;
};

export default AdminRoute;
