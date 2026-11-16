import React, { useState } from 'react';
import { User } from '../types';
import { ShieldAlert, ArrowLeft, LogIn, RefreshCw, CheckCircle2 } from 'lucide-react';
import { api } from '../api';

interface AdminRouteProps {
  currentUser: User | null;
  children: React.ReactNode;
  fallback: React.ReactNode;
  onRedirectToStudent?: () => void;
  onSwitchToAdmin?: () => void;
  onUserRefreshed?: (user: User) => void;
}

/**
 * Protected Admin Route Wrapper (RBAC)
 * Strictly verifies ADMIN / CONTENT_REVIEWER roles.
 * If user is a student, provides one-click options to re-verify permissions or switch accounts.
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({
  currentUser,
  children,
  fallback,
  onRedirectToStudent,
  onSwitchToAdmin,
  onUserRefreshed,
}) => {
  const [checkingRole, setCheckingRole] = useState(false);
  const [roleMessage, setRoleMessage] = useState<string | null>(null);

  // If no user is logged in, show the isolated Admin Login component
  if (!currentUser) {
    return <>{fallback}</>;
  }

  // Handle re-verifying role from database
  const handleCheckPermission = async () => {
    setCheckingRole(true);
    setRoleMessage(null);
    try {
      const res = await api.getCurrentUser();
      if (res.user && (res.user.role === 'ADMIN' || res.user.role === 'CONTENT_REVIEWER')) {
        setRoleMessage('Permissions verified! Access granted.');
        if (onUserRefreshed) {
          onUserRefreshed(res.user);
        }
      } else {
        setRoleMessage(`Your current role in database is still "${res.user?.role || 'STUDENT'}".`);
      }
    } catch (err: any) {
      setRoleMessage(err.message || 'Failed to re-verify permissions.');
    } finally {
      setCheckingRole(false);
    }
  };

  // If logged in as a normal STUDENT, display the interactive access denied screen
  if (currentUser.role !== 'ADMIN' && currentUser.role !== 'CONTENT_REVIEWER') {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200 shadow-xl p-6 sm:p-8 text-center space-y-5">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <ShieldAlert className="w-9 h-9" />
          </div>

          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-700 mb-2">
              403 • ACCESS DENIED
            </span>
            <h2 className="text-xl font-bold text-slate-900">Restricted Admin Area</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              You are currently signed in as a student (<strong>{currentUser.email}</strong>). This portal is strictly reserved for administrative personnel.
            </p>
          </div>

          {roleMessage && (
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{roleMessage}</span>
            </div>
          )}

          <div className="space-y-2 pt-1">
            {/* Primary Action: Re-check role (if account was recently promoted to ADMIN) */}
            <button
              onClick={handleCheckPermission}
              disabled={checkingRole}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition shadow-xs cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${checkingRole ? 'animate-spin' : ''}`} />
              <span>{checkingRole ? 'Checking Database...' : 'Re-verify My Admin Access'}</span>
            </button>

            {/* Secondary Action: Switch Account / Sign in as Admin */}
            <button
              onClick={() => {
                if (onSwitchToAdmin) {
                  onSwitchToAdmin();
                } else {
                  api.logout();
                  window.location.reload();
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition shadow-xs cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In with Admin Account</span>
            </button>

            {/* Exit Action: Return to Student Dashboard */}
            <button
              onClick={() => {
                if (onRedirectToStudent) {
                  onRedirectToStudent();
                } else {
                  window.location.hash = '/';
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-medium rounded-lg transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Student Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // User is verified Admin or Content Reviewer
  return <>{children}</>;
};

export default AdminRoute;
