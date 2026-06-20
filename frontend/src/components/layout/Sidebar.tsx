'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useProgressStore } from '@/stores/progressStore';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  BookOpen, LayoutDashboard, Globe, Brain, FileText,
  Settings, Flame, Star, Trophy, X, TrendingUp
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'داشبورد', labelIt: 'Dashboard', icon: LayoutDashboard },
  { href: '/lessons', label: 'درس‌ها', labelIt: 'Lezioni', icon: BookOpen },
  { href: '/vocabulary', label: 'لغات', labelIt: 'Vocabolario', icon: Globe },
  { href: '/grammar', label: 'گرامر', labelIt: 'Grammatica', icon: Brain },
  { href: '/flashcards', label: 'فلش‌کارت', labelIt: 'Flashcard', icon: Star },
  { href: '/quizzes', label: 'آزمون‌ها', labelIt: 'Quiz', icon: Trophy },
  { href: '/progress', label: 'پیشرفت', labelIt: 'Progresso', icon: TrendingUp },
  { href: '/notes', label: 'یادداشت‌ها', labelIt: 'Note', icon: FileText },
  { href: '/settings', label: 'تنظیمات', labelIt: 'Impostazioni', icon: Settings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { progress, getOverallProgress } = useProgressStore();
  const overall = getOverallProgress();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-72 bg-card border-l border-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              L
            </div>
            <div>
              <p className="font-bold text-foreground">Learnitali</p>
              <p className="text-xs text-muted-foreground">ایتالیایی بیاموز</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg hover:bg-accent">
            <X size={18} />
          </button>
        </div>

        {/* XP & Streak */}
        <div className="p-4 m-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400">
              <Flame size={16} className="text-orange-500" />
              <span>{progress.streak} روز</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
              <Star size={16} className="fill-current" />
              <span>{progress.totalXP} XP</span>
            </div>
          </div>
          <ProgressBar value={overall} size="sm" showLabel />
          <p className="text-xs text-muted-foreground mt-1 text-right">{overall}% پیشرفت کلی</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, labelIt, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group',
                  active
                    ? 'bg-green-500 text-white shadow-md shadow-green-500/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                <Icon size={18} className={cn(active ? 'text-white' : 'text-muted-foreground group-hover:text-foreground')} />
                <span className="flex-1 text-right">{label}</span>
                <span className={cn('text-xs', active ? 'text-green-100' : 'text-muted-foreground/60')}>{labelIt}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              ش
            </div>
            <div className="flex-1 min-w-0 text-right">
              <p className="text-sm font-medium truncate">دانشجو</p>
              <p className="text-xs text-muted-foreground">Nuovo Espresso 1</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
