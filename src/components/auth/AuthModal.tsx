import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../context/arena-init';
import { X, Lock, Mail, User, ShieldCheck, RefreshCw, KeyRound } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'change_email';
}

const AVATAR_OPTIONS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const { user, login, signup, updateEmail, revertEmail, loginWithGoogle, sendPasswordReset, sendVerification } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup' | 'change_email' | 'forgot_password'>(initialMode);

  // Form states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);
  const [resetEmail, setResetEmail] = useState('');

  // Email change state
  const [newEmail, setNewEmail] = useState('');
  const [oldEmailPassword, setOldEmailPassword] = useState('');
  const [revertPassword, setRevertPassword] = useState('');

  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(email || username, password);
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setTimeout(onClose, 900);
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signup(username, email, password, selectedAvatar);
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setTimeout(onClose, 900);
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateEmail(newEmail, oldEmailPassword);
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setNewEmail('');
      setOldEmailPassword('');
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleRevertEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await revertEmail(revertPassword);
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setRevertPassword('');
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleGoogleSignIn = async () => {
    const res = await loginWithGoogle();
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setTimeout(onClose, 900);
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      setMessage({ text: 'Please enter your email.', type: 'error' });
      return;
    }
    const res = await sendPasswordReset(resetEmail);
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      setResetEmail('');
      setTimeout(() => setMode('login'), 2000);
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleResendVerification = async () => {
    const res = await sendVerification();
    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
        
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 pb-3 mb-6 gap-2">
          <button
            onClick={() => { setMode('login'); setMessage(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'login' || mode === 'forgot_password'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => { setMode('signup'); setMessage(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Signup
          </button>
          <button
            onClick={() => { setMode('change_email'); setMessage(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'change_email'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Email Settings
          </button>
        </div>

        {/* Notification Banner */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-xl text-xs font-semibold ${
              message.type === 'success'
                ? 'bg-emerald-950/70 border border-emerald-500/50 text-emerald-300'
                : 'bg-red-950/70 border border-red-500/50 text-red-300'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* LOGIN MODE */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Username or Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="arjuna@chaturanga.org or ArjunaWarrior"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30"
            >
              Sign In to Chaturanga
            </button>

            <div className="flex justify-between items-center text-xs text-blue-400 mt-2 px-1">
              <button
                type="button"
                onClick={() => { setMode('forgot_password'); setMessage(null); }}
                className="hover:underline hover:text-blue-300"
              >
                Forgot Password?
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#111827] px-2 text-slate-500 font-bold">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border border-slate-300 shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.3 3.28-7.81 3.28-12.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                />
              </svg>
              Sign in with Google
            </button>
          </form>
        )}

        {/* SIGNUP MODE */}
        {mode === 'signup' && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Warrior Name / Handle</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. RoyalGrandmaster"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="warrior@chaturanga.org"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Choose Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 4 characters"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Avatar Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Select Avatar</label>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {AVATAR_OPTIONS.map((av, idx) => (
                  <img
                    key={idx}
                    src={av}
                    alt={`Avatar ${idx}`}
                    onClick={() => setSelectedAvatar(av)}
                    className={`w-10 h-10 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                      selectedAvatar === av
                        ? 'border-blue-400 scale-110 shadow-md ring-2 ring-blue-400/40'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30"
            >
              Create Account & Enter Arena
            </button>
          </form>
        )}

        {/* EMAIL CHANGE & REVERSIBILITY MODE */}
        {mode === 'change_email' && (
          <div className="space-y-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 to-red-950/40 border border-blue-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-1">
                <ShieldCheck size={16} className="text-red-400" />
                <span>Secure Reversible Email Verification</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Current Registered Email: <strong className="text-white font-mono">{user?.email || 'arjuna@chaturanga.org'}</strong>
              </p>
              {user && !auth.currentUser?.emailVerified && (
                <div className="mt-2 flex items-center justify-between bg-amber-500/10 border border-amber-500/30 rounded-lg p-2">
                  <span className="text-[10px] text-amber-300 font-bold">Your email is unverified.</span>
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    className="text-[9px] font-black uppercase text-amber-400 hover:underline hover:text-amber-300"
                  >
                    Resend Verification
                  </button>
                </div>
              )}
            </div>

            {/* Change Email Form */}
            <form onSubmit={handleUpdateEmail} className="space-y-3.5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <KeyRound size={14} className="text-blue-400" />
                Change to New Email
              </h4>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">New Email Address</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="new.email@chaturanga.org"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">
                  Old Email Password <span className="text-red-400 font-normal">(Required to verify ownership)</span>
                </label>
                <input
                  type="password"
                  value={oldEmailPassword}
                  onChange={(e) => setOldEmailPassword(e.target.value)}
                  placeholder="Enter password of current email"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                Apply New Email with Old Password
              </button>
            </form>

            {/* Reversible Section */}
            {user?.previousEmail && (
              <form onSubmit={handleRevertEmail} className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                    <RefreshCw size={14} className="text-red-400" />
                    Revert to Previous Email
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {user.previousEmail}
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Current Password to Revert
                  </label>
                  <input
                    type="password"
                    value={revertPassword}
                    onChange={(e) => setRevertPassword(e.target.value)}
                    placeholder="Enter password to restore previous email"
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 font-bold text-xs border border-blue-500/30 transition-all"
                >
                  Restore Previous Email ({user.previousEmail})
                </button>
              </form>
            )}
          </div>
        )}

        {/* FORGOT PASSWORD MODE */}
        {mode === 'forgot_password' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Registered Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="warrior@chaturanga.org"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30"
            >
              Send Password Reset Link
            </button>

            <div className="text-center text-xs mt-4">
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-blue-400 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
