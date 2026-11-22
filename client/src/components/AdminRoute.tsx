import React from 'react';
import { User } from '../types';
import { AdminLogin } from './AdminLogin';

interface AdminRouteProps {
  currentUser: User | null;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onRedirectToStudent?: () => void;
  onRedirectToLogin?: () => void;
  onUserRefreshed?: (user: User) => void;
}

/**
 * Protected Admin Route Wrapper (RBAC)
 * Verifies the two roles that are authorised by the corresponding backend
 * routes. Reviewer-only users still see only reviewer-safe navigation.
 * - If not authenticated: Renders AdminLogin portal
 * - If logged in as STUDENT: Displays clear Access Gate with option to switch to Admin account
 * - If ADMIN: Renders protected children
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({
  currentUser,
  children,
  fallback,
  onRedirectToStudent,
  onUserRefreshed,
}) => {
  const handleAdminSuccess = (adminUser: User) => {
    if (onUserRefreshed) {
      onUserRefreshed(adminUser);
    }
  };

  const handleExit = () => {
    if (onRedirectToStudent) {
      onRedirectToStudent();
    } else {
      window.location.hash = '/dashboard';
    }
  };

  // 1. Not authenticated -> Render AdminLogin directly
  if (!currentUser) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return <AdminLogin onSuccess={handleAdminSuccess} onExit={handleExit} />;
  }

  // 2. A student (or another unprivileged role) is sent directly to the
  // staff-login flow.  This avoids rendering an admin workspace that will
  // immediately fail its protected API calls, while backend RBAC remains the
  // authority and the student session is never promoted client-side.
  if (currentUser.role !== 'ADMIN' && currentUser.role !== 'CONTENT_REVIEWER') {
    return <AdminLogin onSuccess={handleAdminSuccess} onExit={handleExit} />;
  }

  // 3. Authenticated as ADMIN or CONTENT_REVIEWER -> Access Granted.
  return <>{children}</>;
};

export default AdminRoute;
