'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const { register, isLoading, error, clearError } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await register(form);
      setSuccess(true);
    } catch {
      // error in store
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h2 className="text-xl font-bold">ثبت‌نام موفق!</h2>
          <p className="text-muted-foreground text-sm">
            یه ایمیل تأیید برات فرستادیم. ایمیلت را چک کن و حساب را تأیید کن.
          </p>
          <Button onClick={() => router.push('/login')}>رفتن به صفحه ورود</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-sm space-y-6">

        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg mx-auto">L</div>
          <h1 className="text-2xl font-bold text-foreground mt-4">ثبت‌نام در Learnitali</h1>
          <p className="text-muted-foreground text-sm mt-1">ایتالیایی یاد بگیر!</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">نام</label>
              <input
                value={form.firstName}
                onChange={set('firstName')}
                placeholder="نام"
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">نام خانوادگی</label>
              <input
                value={form.lastName}
                onChange={set('lastName')}
                placeholder="نام خانوادگی"
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">ایمیل</label>
            <div className="relative">
              <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                required
                placeholder="email@example.com"
                className="w-full pr-9 pl-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">رمز عبور</label>
            <div className="relative">
              <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPass ? 'text' : 'password'}
                value={form.password}
                onChange={set('password')}
                required
                minLength={8}
                placeholder="حداقل ۸ کاراکتر"
                className="w-full pr-9 pl-10 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
                dir="ltr"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">رمز باید حداقل ۸ کاراکتر، یک حرف بزرگ و یک عدد داشته باشد.</p>
          </div>

          <Button type="submit" className="w-full" size="lg" loading={isLoading}>
            ثبت‌نام
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          قبلاً ثبت‌نام کردی؟{' '}
          <Link href="/login" className="text-green-500 font-medium hover:underline">
            وارد شو
          </Link>
        </p>
      </div>
    </div>
  );
}
