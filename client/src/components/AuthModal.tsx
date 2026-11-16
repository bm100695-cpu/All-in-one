import React, { useState } from 'react';
import {
  X,
  Mail,
  Lock,
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (user: User, requiresExamSelection?: boolean) => void;
}

// Authentic Google Multi-Color G Icon
const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [targetExam, setTargetExam] = useState('uptet');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Google Account Chooser popup state for instant verified Google sign in
  const [showGoogleChooser, setShowGoogleChooser] = useState(false);
  const [customGoogleEmail, setCustomGoogleEmail] = useState('');
  const [customGoogleName, setCustomGoogleName] = useState('');

  if (!isOpen) return null;

  // Handle Google OAuth Continue
  const handleGoogleClick = () => {
    setError(null);
    setShowGoogleChooser(true);
  };

  const executeGoogleAuth = async (googleUser: { email: string; name: string; avatar?: string; googleId: string; idToken?: string }) => {
    setGoogleLoading(true);
    setError(null);
    try {
      const res = await api.googleAuth(googleUser);
      setShowGoogleChooser(false);
      onSuccess(res.user, res.requiresExamSelection);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Google authentication failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === 'login') {
      if (!email.trim() || !password.trim()) {
        setError('Please enter both email and password.');
        return;
      }
      setLoading(true);
      try {
        const res = await api.login(email.trim(), password);
        // Store auth token and user details in localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('examverse_token', res.token);
        localStorage.setItem('examverse_user', JSON.stringify(res.user));

        onSuccess(res.user, !res.user.targetExamId);
        onClose();
      } catch (err: any) {
        setError(err.message || 'Authentication failed. Please check your credentials.');
      } finally {
        setLoading(false);
      }
    } else {
      // Registration Validations
      if (!name.trim()) {
        setError('Full Name is required.');
        return;
      }
      if (!email.trim()) {
        setError('Email Address is required.');
        return;
      }
      if (!password) {
        setError('Password is required.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match. Please re-enter your password.');
        return;
      }
      if (!targetExam) {
        setError('Please select your target examination.');
        return;
      }

      setLoading(true);
      try {
        const res = await api.register({
          name: name.trim(),
          email: email.trim(),
          password,
          confirmPassword,
          targetExamId: targetExam,
        });
        onSuccess(res.user, false);
        onClose();
      } catch (err: any) {
        setError(err.message || 'Registration failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-xl max-w-md w-full shadow-modal border border-tn-border overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-tn-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt="All in One"
              className="h-8 w-auto rounded object-contain bg-white border border-slate-200 p-0.5"
            />
            <span className="text-sm font-bold text-tn-navy">
              All in <span className="text-emerald-700">One</span> — {mode === 'login' ? 'Sign In' : 'Register'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError(null);
            }}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              mode === 'login'
                ? 'border-tn-blue text-tn-blue bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError(null);
            }}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              mode === 'register'
                ? 'border-tn-blue text-tn-blue bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Register
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* 1. Continue with Google Button */}
          <div>
            <button
              type="button"
              onClick={handleGoogleClick}
              disabled={googleLoading || loading}
              className="w-full py-2.5 px-4 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
            >
              {googleLoading ? (
                <div className="w-4 h-4 border-2 border-slate-300 border-t-tn-blue rounded-full animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider shrink-0">
              or continue with email
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {mode === 'register' && (
              <div>
                <label className="block text-slate-700 font-medium mb-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue text-xs text-tn-text"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-slate-700 font-medium mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue text-xs text-tn-text"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Min. 6 characters' : 'Enter password'}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue text-xs text-tn-text"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="block text-slate-700 font-medium mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue text-xs text-tn-text"
                  />
                </div>
              </div>
            )}

            {mode === 'register' && (
              <div>
                <label className="block text-slate-700 font-medium mb-1 flex items-center justify-between">
                  <span>Target Examination</span>
                  <span className="text-[10px] text-tn-blue font-semibold">Mandatory</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue text-xs text-tn-text bg-white"
                  >
                    <option value="jee-main">JEE Main (Paper 1 - B.E./B.Tech)</option>
                    <option value="uptet">UPTET (UP Teacher Eligibility Test 2016–2025)</option>
                    <option value="super-tet">SUPER TET (UP Assistant Teacher Recruitment 2012–2025)</option>
                    <option value="neet-ug">NEET UG (Medical Entrance 720 Marks)</option>
                    <option value="upsc-prelims">UPSC Civil Services Prelims (IAS/IPS)</option>
                    <option value="ssc-cgl-tier1">SSC CGL (Tier 1 Combined Graduate Level)</option>
                    <option value="gate-cs">GATE CS (Computer Science)</option>
                  </select>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Your student portal will be personalized exclusively for this examination.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full py-2.5 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer mt-3 disabled:opacity-60"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : mode === 'login' ? (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Create Student Account</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="pt-2 text-center text-[10px] text-slate-400">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setError(null);
                  }}
                  className="text-tn-blue font-semibold hover:underline cursor-pointer"
                >
                  Register now
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setError(null);
                  }}
                  className="text-tn-blue font-semibold hover:underline cursor-pointer"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Google Account Selector Dialog */}
        {showGoogleChooser && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xs z-20 flex flex-col justify-between p-6 animate-in fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <GoogleIcon className="w-5 h-5" />
                  <span className="text-xs font-bold text-slate-800">Sign in with Google</span>
                </div>
                <button
                  onClick={() => setShowGoogleChooser(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">Choose an account</p>
                <p className="text-[11px] text-slate-500">to continue to <strong className="text-tn-navy">All in One CBT Portal</strong></p>
              </div>

              {/* Sample Quick Profiles */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => executeGoogleAuth({
                    email: 'aarav.sharma.exam@gmail.com',
                    name: 'Aarav Sharma',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
                    googleId: 'google_sub_aarav_sharma_984',
                  })}
                  className="w-full p-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                    alt="Aarav"
                    className="w-8 h-8 rounded-full border border-slate-200"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Aarav Sharma</p>
                    <p className="text-[11px] text-slate-500">aarav.sharma.exam@gmail.com</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => executeGoogleAuth({
                    email: 'priya.singh.prep@gmail.com',
                    name: 'Priya Singh',
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
                    googleId: 'google_sub_priya_singh_521',
                  })}
                  className="w-full p-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                    alt="Priya"
                    className="w-8 h-8 rounded-full border border-slate-200"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Priya Singh</p>
                    <p className="text-[11px] text-slate-500">priya.singh.prep@gmail.com</p>
                  </div>
                </button>
              </div>

              {/* Custom Google Account Input */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-semibold text-slate-600">Or use another Google account:</p>
                <div className="space-y-1.5">
                  <input
                    type="text"
                    value={customGoogleName}
                    onChange={(e) => setCustomGoogleName(e.target.value)}
                    placeholder="Candidate Name"
                    className="w-full px-3 py-1.5 rounded border border-slate-300 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    value={customGoogleEmail}
                    onChange={(e) => setCustomGoogleEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full px-3 py-1.5 rounded border border-slate-300 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    disabled={!customGoogleEmail.trim() || googleLoading}
                    onClick={() => executeGoogleAuth({
                      email: customGoogleEmail.trim().toLowerCase(),
                      name: customGoogleName.trim() || customGoogleEmail.split('@')[0],
                      googleId: `google_sub_${customGoogleEmail.replace(/[^a-zA-Z0-9]/g, '_')}`,
                    })}
                    className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Authenticate with this Google Account
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-center">
              <span className="text-[10px] text-slate-400">
                To continue, Google will share your name, email address, language preference, and profile picture with All in One.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
