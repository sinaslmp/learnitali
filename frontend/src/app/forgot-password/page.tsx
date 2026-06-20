'use client';

import { useState } from 'react';
import Link from 'next/link';
import { authApi } from '@/lib/api.auth';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await authApi.forgotPassword(email);
      setSuccess(true);
    } catch {
      setError('مشکلی پیش اومد. دوباره امتحان کن.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg mx-auto">L</div>
          <h1 className="text-2xl font-bold mt-4">فراموشی رمز عبور</h1>
          <p className="text-muted-foreground text-sm mt-1">ایمیلت را وارد کن، لینک بازیابی می‌فرستیم.</p>
        </div>

        {success ? (
          <div className="text-center space-y-4 py-4">
            <CheckCircle size={48} className="text-green-500 mx-auto" />
            <p className="text-sm text-muted-foreground">اگر این ایمیل در سیستم باشد، لینک بازیابی فرستادیم.</p>
            <Link href="/login" className="text-green-500 text-sm hover:underline">بازگشت به ورود</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                <AlertCircle size={16} /><span>{error}</span>
              </div>
            )}
            <div className="relative">
              <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                required placeholder="email@example.com"
                className="w-full pr-9 pl-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
                dir="ltr"
              />
            </div>
            <Button type="submit" className="w-full" loading={isLoading}>ارسال لینک بازیابی</Button>
            <div className="text-center">
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">← بازگشت به ورود</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
