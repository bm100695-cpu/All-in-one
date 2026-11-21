import React, { useState } from 'react';
import { Lock, Mail, AlertTriangle, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

interface AdminLoginProps {
  onSuccess: (user: User) => void;
  onExit: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onExit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    performLogin(email.trim(), password);
  };

  const performLogin = async (loginEmail: string, loginPass: string) => {
    setError(null);
    if (!loginEmail || !loginPass) {
      setError('Please enter administrative credentials.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.adminLogin(loginEmail, loginPass);
      onSuccess(res.user);
    } catch (err: any) {
      setError(err.message || 'Access Denied: Invalid credentials or insufficient permissions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-slate-900 select-none">
      <div className="max-w-[420px] w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2.5">
          <div className="flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="All in One Logo"
              className="h-11 w-auto rounded-lg object-contain bg-slate-100 p-1 border border-slate-200"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">Control Center</h1>
            <p className="text-xs text-slate-500 mt-0.5">Authorized staff sign in</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Role-protected access</span>
          </div>
          <p className="text-[11px] text-emerald-700 leading-relaxed">
            Use an account already assigned ADMIN or CONTENT_REVIEWER by an authorized administrator.
          </p>
        </div>

        {error && (
          <div className="p-2.5 rounded-md bg-red-50 border border-red-200 text-[11px] text-red-700 flex items-start gap-2">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-700 font-medium mb-1.5 text-[11px]">Admin Email</label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@yourdomain.com"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 text-xs transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-medium mb-1.5 text-[11px]">Password</label>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 text-xs transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Enter Control Center</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Exit back to student site */}
        <div className="pt-2 text-center border-t border-slate-100">
          <button
            type="button"
            onClick={onExit}
            className="text-[11px] text-slate-600 hover:text-slate-900 transition flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Return to Public Student Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
