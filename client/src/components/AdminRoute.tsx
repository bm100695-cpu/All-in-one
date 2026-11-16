import React from 'react';
import { User } from '../types';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

interface AdminRouteProps {
  currentUser: User | null;
  children: React.ReactNode;
  fallback: React.ReactNode;
  onRedirectToStudent?: () => void;
}

/**
 * Protected Admin Route Wrapper
 * Ensures only authenticated users with ADMIN (or CONTENT_REVIEWER) role
 * can access the Admin Control Center.
 * If a regular student navigates here, access is blocked with a 403 screen.
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({
  currentUser,
  children,
  fallback,
  onRedirectToStudent,
}) => {
  // If not logged in at all, show the isolated Admin Login component
  if (!currentUser) {
    return <>{fallback}</>;
  }

  // If logged in as a normal STUDENT, strictly block access
  if (currentUser.role !== 'ADMIN' && currentUser.role !== 'CONTENT_REVIEWER') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200 shadow-xl p-6 sm:p-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <ShieldAlert className="w-9 h-9" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-700 mb-2">
              403 • Access Denied
            </span>
            <h2 className="text-xl font-bold text-slate-900">Restricted Admin Area</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              You are currently signed in as a student (<strong>{currentUser.email}</strong>). This portal is strictly reserved for administrative personnel.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                if (onRedirectToStudent) {
                  onRedirectToStudent();
                } else {
                  window.location.hash = '/';
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
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
