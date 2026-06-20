'use client';

import { AppShell } from '@/components/layout/AppShell';
import { useProgressStore } from '@/stores/progressStore';
import { Button } from '@/components/ui/Button';
import { Sun, Moon, Monitor, Type, Bell, Volume2, Eye, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const { settings, updateSettings, progress } = useProgressStore();

  const themeOptions = [
    { value: 'light', label: 'روشن', icon: Sun },
    { value: 'dark', label: 'تاریک', icon: Moon },
    { value: 'system', label: 'سیستم', icon: Monitor },
  ] as const;

  const fontOptions = [
    { value: 'sm', label: 'کوچک' },
    { value: 'md', label: 'متوسط' },
    { value: 'lg', label: 'بزرگ' },
  ] as const;

  return (
    <AppShell title="تنظیمات">
      <div className="space-y-6 max-w-2xl mx-auto" dir="rtl">
        <h1 className="text-2xl font-bold text-right">تنظیمات</h1>

        {/* Theme */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-right">ظاهر برنامه</h2>
          <div className="grid grid-cols-3 gap-3">
            {themeOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => updateSettings({ theme: value })}
                className={cn(
                  'flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all',
                  settings.theme === value
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-border hover:border-green-500/40'
                )}
              >
                <Icon size={22} className={settings.theme === value ? 'text-green-500' : 'text-muted-foreground'} />
                <span className={cn('text-sm font-medium', settings.theme === value ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground')}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font size */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-right">
            <Type size={18} />
            <h2 className="font-semibold">اندازه فونت</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {fontOptions.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => updateSettings({ fontSize: value })}
                className={cn(
                  'p-3 rounded-xl border-2 text-center transition-all',
                  settings.fontSize === value
                    ? 'border-green-500 bg-green-500/10 text-green-600 dark:text-green-400 font-semibold'
                    : 'border-border hover:border-green-500/40 text-muted-foreground'
                )}
              >
                <span className={value === 'sm' ? 'text-sm' : value === 'lg' ? 'text-lg' : 'text-base'}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-right">ترجیحات یادگیری</h2>
          {[
            { key: 'showTranslations', label: 'نمایش ترجمه', sub: 'ترجمه فارسی را در کنار متن نشان بده', icon: Eye },
            { key: 'autoPlayAudio', label: 'پخش خودکار صدا', sub: 'صدا را هنگام نمایش کارت یا لغت پخش کن', icon: Volume2 },
            { key: 'studyReminder', label: 'یادآوری مطالعه', sub: 'هر روز برای مطالعه یادآوری بفرست', icon: Bell },
          ].map(({ key, label, sub, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between py-2">
              <button
                onClick={() => updateSettings({ [key]: !settings[key as keyof typeof settings] } as never)}
                className={cn(
                  'relative w-12 h-6 rounded-full transition-colors',
                  settings[key as keyof typeof settings] ? 'bg-green-500' : 'bg-muted'
                )}
              >
                <span
                  className={cn(
                    'absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform',
                    settings[key as keyof typeof settings] ? 'right-1' : 'right-7'
                  )}
                />
              </button>
              <div className="text-right flex items-center gap-3">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
                <Icon size={18} className="text-muted-foreground shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Data */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-right">داده‌ها</h2>
          <div className="bg-muted/50 rounded-xl p-4 text-right space-y-1.5 text-sm text-muted-foreground">
            <p>امتیاز کل: {progress.totalXP} XP</p>
            <p>تعداد یادداشت: {progress.notes.length}</p>
            <p>لغت یاد گرفته: {progress.favoriteVocab.length} موردعلاقه</p>
          </div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              if (confirm('آیا مطمئن هستی؟ همه پیشرفت‌هایت پاک می‌شود.')) {
                localStorage.removeItem('learnitali-progress');
                window.location.reload();
              }
            }}
          >
            <Trash2 size={14} />
            پاک‌کردن همه پیشرفت‌ها
          </Button>
        </div>

        {/* About */}
        <div className="bg-card border border-border rounded-2xl p-6 text-right space-y-2">
          <h2 className="font-semibold">درباره Learnitali</h2>
          <p className="text-sm text-muted-foreground">پلتفرم یادگیری ایتالیایی برای فارسی‌زبانان</p>
          <p className="text-xs text-muted-foreground">نسخه ۱.۰ — Nuovo Espresso 1</p>
          <p className="text-xs text-muted-foreground">درس‌های ۱ تا ۱۰ — ۸۰ لغت — ۱۶ گرامر</p>
        </div>

      </div>
    </AppShell>
  );
}
