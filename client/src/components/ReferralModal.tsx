import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Gift,
  Share2,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { ReferralStats, User } from '../types';
import { api } from '../api';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onRedeemSuccess?: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onRedeemSuccess,
}) => {
  const [stats, setStats] = useState<ReferralStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadStats();
    }
  }, [isOpen]);

  const loadStats = async () => {
    setLoading(true);
    try {
      const data = await api.getReferralStats();
      setStats(data);
    } catch (err) {
      console.error('Error loading referral stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const referralCode = stats?.referralCode || currentUser?.referralCode || 'TN-ARJUN-8492';
  const referralLink = stats?.referralLink || `https://allinone.edu/?ref=${referralCode}`;
  const credits = stats?.referralCredits ?? currentUser?.referralCredits ?? 1;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(
    `Practice authentic JEE Main past papers (2021-2025) on All in One CBT simulator! Sign up using my referral link to get a free test credit: ${referralLink}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-modal border border-tn-border overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-tn-navy text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold">
              <Gift className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base font-bold">Refer Friends & Earn Free Tests</h2>
              <p className="text-[11px] text-slate-300">Invite fellow JEE aspirants to unlock premium shift papers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Credit Balance Card */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block">
                Your Available Test Credits
              </span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-3xl font-extrabold text-amber-950">{credits}</span>
                <span className="text-xs font-medium text-amber-800">Free Paper Unlock{credits !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                1 Credit = 1 Shift Paper
              </span>
            </div>
          </div>

          {/* Unique Referral Link & Code Box */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-tn-navy">Your Unique Referral Link</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700 select-all focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="space-y-2">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Share Instantly On
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                WhatsApp
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent('Practice authentic JEE Main past papers on All in One!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-sky-200 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                Telegram
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* How It Works List */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
            <p className="font-bold text-tn-navy">How All in One Referral Works:</p>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600 leading-relaxed text-[11px]">
              <li>Send your link or referral code <strong>({referralCode})</strong> to batchmates.</li>
              <li>When they register, they get <strong>1 welcome test credit</strong> automatically.</li>
              <li>You instantly receive <strong>+1 free test credit</strong> in your account.</li>
              <li>Credits can be redeemed to unlock any premium past paper without paying.</li>
            </ol>
          </div>

          {/* Referrals History */}
          {stats?.referrals && stats.referrals.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-tn-navy">Successful Invites ({stats.referrals.length})</span>
                <span className="text-[11px] text-emerald-700 font-medium">All verified</span>
              </div>
              <div className="max-h-28 overflow-y-auto space-y-1 divide-y divide-slate-100 text-xs text-slate-600">
                {stats.referrals.map((r) => (
                  <div key={r.id} className="pt-1 flex items-center justify-between">
                    <span>{r.referredUser.name}</span>
                    <span className="text-[10px] text-emerald-700 font-bold">+1 Credit</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
