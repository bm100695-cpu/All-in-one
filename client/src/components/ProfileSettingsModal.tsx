import React, { useState, useEffect } from 'react';
import {
  X,
  User as UserIcon,
  Settings,
  Shield,
  Check,
  Save,
  LogOut,
  Hash,
  Mail,
  GraduationCap,
  Monitor,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { User } from '../types';

interface ProfileSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLogout: () => void;
  onUserUpdated?: (user: User) => void;
  defaultTab?: 'profile' | 'settings';
}

export const ProfileSettingsModal: React.FC<ProfileSettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogout,
  onUserUpdated,
  defaultTab = 'profile',
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings'>(defaultTab);

  // Profile Form State
  const [candidateName, setCandidateName] = useState(currentUser?.name || 'Registered Candidate');
  const [rollNumber, setRollNumber] = useState(currentUser?.studentId || 'AIO-STU-UNASSIGNED');
  const [targetExam, setTargetExam] = useState(currentUser?.targetExamId || 'jee-main');
  const [savingTarget, setSavingTarget] = useState(false);
  const [targetError, setTargetError] = useState<string | null>(null);

  // CBT Settings State
  const [useVirtualKeypad, setUseVirtualKeypad] = useState(true);
  const [confirmBeforeSubmit, setConfirmBeforeSubmit] = useState(true);
  const [autoHeartbeatEnabled, setAutoHeartbeatEnabled] = useState(true);
  const [defaultExamLang, setDefaultExamLang] = useState<'en' | 'hi'>('en');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (currentUser?.name) {
      setCandidateName(currentUser.name);
    }
    if (currentUser?.studentId) {
      setRollNumber(currentUser.studentId);
    }
    if (currentUser?.targetExamId) {
      setTargetExam(currentUser.targetExamId);
    }
  }, [currentUser]);

  useEffect(() => {
    // Load persisted preferences
    const savedKeypad = localStorage.getItem('tutornove_pref_keypad');
    if (savedKeypad !== null) setUseVirtualKeypad(savedKeypad === 'true');

    const savedConfirm = localStorage.getItem('tutornove_pref_confirm');
    if (savedConfirm !== null) setConfirmBeforeSubmit(savedConfirm === 'true');

    const savedLang = localStorage.getItem('tutornove_pref_lang');
    if (savedLang === 'en' || savedLang === 'hi') setDefaultExamLang(savedLang);
  }, []);

  if (!isOpen) return null;

  const handleSavePreferences = async () => {
    localStorage.setItem('tutornove_pref_keypad', String(useVirtualKeypad));
    localStorage.setItem('tutornove_pref_confirm', String(confirmBeforeSubmit));
    localStorage.setItem('tutornove_pref_auto_heartbeat', String(autoHeartbeatEnabled));
    localStorage.setItem('tutornove_pref_lang', defaultExamLang);
    localStorage.setItem('tutornove_candidate_name', candidateName);

    // If target exam changed and user is logged in, sync with backend
    if (currentUser && targetExam !== currentUser.targetExamId) {
      setSavingTarget(true);
      setTargetError(null);
      try {
        const res = await import('../api').then(m => m.api.updateTargetExam(targetExam));
        if (onUserUpdated) onUserUpdated(res.user);
      } catch (err: any) {
        setTargetError(err.message || 'Failed to update target examination');
      } finally {
        setSavingTarget(false);
      }
    }

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-xl max-w-lg w-full shadow-modal border border-tn-border overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-tn-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-tn-navy text-white flex items-center justify-center font-bold text-xs">
              <UserIcon className="w-4 h-4 text-tn-blue" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-tn-navy">Account & Examination Preferences</h2>
              <p className="text-[11px] text-tn-muted">Manage candidate details and CBT simulator controls</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-tn-border bg-slate-50/50 px-6 pt-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'profile'
                ? 'border-tn-blue text-tn-blue'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <UserIcon className="w-3.5 h-3.5" />
            <span>Candidate Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'settings'
                ? 'border-tn-blue text-tn-blue'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>CBT Simulator Settings</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs text-emerald-800 font-medium animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Preferences successfully saved and synced.</span>
            </div>
          )}

          {activeTab === 'profile' ? (
            <div className="space-y-4">
              {/* Profile Card Header */}
              <div className="flex items-center gap-3.5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-tn-navy text-white flex items-center justify-center font-bold text-lg">
                  {candidateName.charAt(0) || 'A'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-tn-navy">{candidateName}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-tn-blue border border-blue-200">
                      {currentUser?.role || 'STUDENT'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {currentUser?.email || 'Not signed in'}
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-medium text-tn-text mb-1">Full Candidate Name</label>
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full px-3 py-2 border border-tn-border rounded-lg focus:outline-none focus:ring-1 focus:ring-tn-blue"
                  />
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    This name will appear on the CBT Notice Board and verified Scorecard.
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-tn-text mb-1">Official Student ID</label>
                  <input
                    type="text"
                    disabled
                    value={currentUser?.studentId || rollNumber}
                    className="w-full px-3 py-2 border border-slate-200 bg-slate-100 rounded-lg font-mono text-slate-700 cursor-not-allowed"
                  />
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Permanent Unique Student Identifier assigned upon registration.
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-tn-text mb-1 flex items-center justify-between">
                    <span>Target Examination</span>
                    <span className="text-[10px] text-tn-blue font-semibold">Controls Portal Dashboard</span>
                  </label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full px-3 py-2 border border-tn-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-tn-blue font-medium"
                  >
                    <option value="jee-main">JEE Main (Paper 1 - B.E./B.Tech)</option>
                    <option value="neet-ug">NEET UG (Medical Entrance)</option>
                    <option value="uptet">UPTET (UP Teacher Eligibility Test)</option>
                    <option value="super-tet">SUPER TET (UP Assistant Teacher Recruitment 2012–2025)</option>
                    <option value="upsc-prelims">UPSC Civil Services Prelims</option>
                    <option value="ssc-cgl-tier1">SSC CGL (Tier 1)</option>
                    <option value="gate-cs">GATE CS (Computer Science)</option>
                  </select>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Changing your target exam will immediately switch your portal, dashboard, and mock tests to the selected exam.
                  </p>
                  {targetError && <p className="text-[11px] text-red-600 mt-1">{targetError}</p>}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div className="space-y-3">
                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useVirtualKeypad}
                    onChange={(e) => setUseVirtualKeypad(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-tn-blue rounded border-slate-300 focus:ring-tn-blue"
                  />
                  <div>
                    <span className="font-semibold text-tn-text block">
                      Enable On-Screen Virtual Numeric Keypad
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Displays the official 0-9 on-screen numeric keypad for Section B numerical questions to match actual test centers.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmBeforeSubmit}
                    onChange={(e) => setConfirmBeforeSubmit(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-tn-blue rounded border-slate-300 focus:ring-tn-blue"
                  />
                  <div>
                    <span className="font-semibold text-tn-text block">
                      Confirmation Dialog Before Final Test Submission
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Shows a full breakdown modal summarizing answered, unanswered, and marked-for-review counts before final locking.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoHeartbeatEnabled}
                    onChange={(e) => setAutoHeartbeatEnabled(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-tn-blue rounded border-slate-300 focus:ring-tn-blue"
                  />
                  <div>
                    <span className="font-semibold text-tn-text block">
                      Continuous Heartbeat Autosave (25s cadence)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Automatically syncs responses to the server in the background so work is preserved even on power or browser disruption.
                    </span>
                  </div>
                </label>

                <div>
                  <label className="block font-medium text-tn-text mb-1">
                    Default Exam Question Language
                  </label>
                  <select
                    value={defaultExamLang}
                    onChange={(e) => setDefaultExamLang(e.target.value as 'en' | 'hi')}
                    className="w-full px-3 py-2 border border-tn-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-tn-blue"
                  >
                    <option value="en">English (Default)</option>
                    <option value="hi">हिंदी (Hindi)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-tn-border flex items-center justify-between">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

