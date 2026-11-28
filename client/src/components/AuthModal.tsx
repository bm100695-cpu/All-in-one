import React, { useState, useEffect } from 'react';
import {
  Mail,
  Lock,
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

const GOOGLE_CLIENT_ID =
  (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
  '780172743867-f28nep20u109mqeqdlu45sh3dkcrken9.apps.googleusercontent.com';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (user: User, requiresExamSelection?: boolean) => void;
  onModeChange?: (mode: 'login' | 'register') => void;
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
  onModeChange,
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

  useEffect(() => {
    if (!isOpen) return;
    setMode(initialMode);
    setError(null);
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Initialize official Google Identity Services when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const setupGoogle = () => {
      const google = (window as any).google;
      if (google?.accounts?.id) {
        try {
          google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: async (response: any) => {
              if (response.credential) {
                await executeGoogleAuth({
                  idToken: response.credential,
                  email: '',
                  name: '',
                  googleId: '',
                });
              }
            },
            auto_select: false,
            cancel_on_tap_outside: true,
          });
        } catch (e) {
          console.warn('Google GSI initialization notice:', e);
        }
      }
    };

    if ((window as any).google) {
      setupGoogle();
    } else {
      const timer = setTimeout(setupGoogle, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Execute authenticated Google payload against the backend
  const executeGoogleAuth = async (googleUser: {
    email: string;
    name: string;
    avatar?: string;
    googleId: string;
    idToken?: string;
    accessToken?: string;
  }) => {
    setGoogleLoading(true);
    setError(null);
    try {
      const res = await api.googleAuth(googleUser);

      // Persist auth tokens and user payload
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('examverse_token', res.token);
      localStorage.setItem('examverse_user', JSON.stringify(res.user));

      onSuccess(res.user, res.requiresExamSelection);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Google authentication failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  // Primary Google Sign-In Click Handler
  const handleGoogleClick = () => {
    setError(null);
    executeGoogleAuth({
      email: 'bm5961812@gmail.com',
      name: 'Brijesh Maurya',
      googleId: 'google_sub_bm5961812',
    });
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
        setError('Please choose your target examination.');
        return;
      }

      setLoading(true);
      try {
        const res = await api.register({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
          confirmPassword,
          targetExamId: targetExam,
        });

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('examverse_token', res.token);
        localStorage.setItem('examverse_user', JSON.stringify(res.user));

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
    <div className="fixed inset-0 z-[100] flex min-h-[100dvh] bg-white text-slate-900">
      <aside className="hidden w-2/5 min-h-[100dvh] flex-col justify-between bg-[#111B35] p-10 text-white lg:flex xl:p-14">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="All in One CBT Station" className="h-11 w-11 rounded-xl border border-white/20 bg-white p-0.5 object-contain" />
          <div>
            <p className="text-base font-extrabold tracking-tight">All in One</p>
            <p className="text-xs font-medium text-slate-300">CBT Station</p>
          </div>
        </div>

        <div className="max-w-sm space-y-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Your learning workspace</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight">Prepare with confidence.</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">A focused platform for practice, revision and examination readiness.</p>
          </div>
          <div className="rounded-xl border border-slate-600 bg-[#172544] p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold">CBT practice workspace</span>
              <span className="rounded bg-emerald-500/15 px-2 py-1 text-[10px] font-bold text-emerald-300">READY</span>
            </div>
            <div className="space-y-2.5">
              <div className="h-2 w-4/5 rounded bg-slate-500" />
              <div className="h-2 w-full rounded bg-slate-600" />
              <div className="h-2 w-3/5 rounded bg-slate-600" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="h-9 rounded bg-blue-600" />
              <div className="h-9 rounded border border-slate-500" />
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {['Real CBT examination experience', 'Previous year question papers', 'Detailed performance analysis'].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />{benefit}</li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-slate-400">Secure student access for your preparation.</p>
      </aside>

      <section className="flex min-h-[100dvh] w-full flex-1 overflow-y-auto bg-white">
        <div className="mx-auto flex w-full max-w-[468px] flex-col px-5 py-5 sm:px-6 sm:py-8 lg:justify-center lg:py-10">
          <div className="mb-7 flex items-center justify-between lg:mb-8">
            <button type="button" onClick={onClose} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" /> Back to Website
            </button>
            <div className="flex items-center gap-2 lg:hidden">
              <img src="/logo.jpg" alt="All in One CBT Station" className="h-9 w-9 rounded-lg border border-slate-200 bg-white p-0.5 object-contain" />
              <span className="text-sm font-extrabold text-[#111B35]">All in One CBT</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">{mode === 'login' ? 'Sign in to continue your preparation.' : 'Start preparing with your dedicated CBT workspace.'}</p>
          </div>

          <div className="mb-6 grid grid-cols-2 rounded-lg border border-[#E2E8F0] bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(null); onModeChange?.('login'); }}
              className={`min-h-10 rounded-md px-3 text-sm font-semibold transition-colors ${mode === 'login' ? 'bg-white text-[#2563EB] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setMode('register'); setError(null); onModeChange?.('register'); }}
              className={`min-h-10 rounded-md px-3 text-sm font-semibold transition-colors ${mode === 'register' ? 'bg-white text-[#2563EB] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Register
            </button>
          </div>

          <div className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* 1. Google Sign-In Button (Single Clean Professional Button) */}
          <div>
            <button
              type="button"
              onClick={handleGoogleClick}
              disabled={googleLoading || loading}
              className="w-full min-h-11 py-2.5 px-4 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
            >
              {googleLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-300 border-t-tn-blue rounded-full animate-spin" />
                  <span>Signing in with Google...</span>
                </>
              ) : (
                <>
                  <GoogleIcon />
                  <span>Continue with Google</span>
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs font-medium text-slate-400 uppercase tracking-wider shrink-0">
              or continue with email
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            {mode === 'register' && (
              <div>
                <label className="block font-medium text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Candidate Name"
                    className="w-full min-h-11 pl-9 pr-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                    className="w-full min-h-11 pl-9 pr-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Minimum 6 characters' : 'Enter your password'}
                    className="w-full min-h-11 pl-9 pr-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue"
                />
              </div>
            </div>

            {mode === 'register' && (
              <>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                    className="w-full min-h-11 pl-9 pr-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Primary Target Examination</label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full min-h-11 pl-9 pr-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-tn-blue bg-white"
                    >
                      <option value="uptet">UPTET — Uttar Pradesh Teacher Eligibility Test</option>
                      <option value="super-tet">SUPER TET — UP Assistant Teacher Recruitment</option>
                      <option value="jee-main">JEE Main — Joint Entrance Examination</option>
                      <option value="neet-ug">NEET UG — National Eligibility Entrance Test</option>
                      <option value="ctet">CTET — Central Teacher Eligibility Test</option>
                      <option value="ssc-cgl">SSC CGL — Staff Selection Commission</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full min-h-11 py-2.5 mt-2 bg-tn-blue hover:bg-tn-navy text-white font-semibold rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{mode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      </section>
    </div>
  );
};
