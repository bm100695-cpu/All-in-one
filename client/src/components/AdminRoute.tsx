import React, { useState } from 'react';
import { ShieldAlert, ArrowLeft, LogOut, Lock } from 'lucide-react';
import { User } from '../types';
import { AdminLogin } from './AdminLogin';
import { api } from '../api';

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
  onSwitchToAdmin,
  onUserRefreshed,
}) => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminSuccess = (adminUser: User) => {
    setShowAdminLogin(false);
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

  // If user clicked "Switch to Administrator Account"
  if (showAdminLogin) {
    return (
      <AdminLogin
        onSuccess={handleAdminSuccess}
        onExit={() => setShowAdminLogin(false)}
      />
    );
  }

  // 2. A student (or another unprivileged role) gets an explicit access gate.
  // Never turn this into a client-side role bypass: API authorization remains
  // enforced by requireRole on every protected route.
  if (currentUser.role !== 'ADMIN' && currentUser.role !== 'CONTENT_REVIEWER') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto shadow-2xs">
            <ShieldAlert className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Administrative Access Required
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              You are currently authenticated as{' '}
              <span className="font-semibold text-slate-800">{currentUser.email}</span> with role{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">{currentUser.role}</span>
              .
            </p>
            <p className="text-[11px] text-slate-500">
              The Academic Governance & Multi-Exam Control Center is strictly restricted to verified administrators.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                api.logout();
                if (onSwitchToAdmin) {
                  onSwitchToAdmin();
                } else {
                  setShowAdminLogin(true);
                }
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Sign In with Administrator Account</span>
            </button>

            <button
              onClick={handleExit}
              className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Student Portal</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated as ADMIN or CONTENT_REVIEWER -> Access Granted.
  return <>{children}</>;
};

export default AdminRoute;
