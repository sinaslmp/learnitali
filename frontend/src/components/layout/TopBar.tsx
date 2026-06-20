'use client';

import { useState } from 'react';
import { Menu, Sun, Moon, Monitor, Bell, LogOut, User } from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

interface TopBarProps {
  onMenuClick: () => void;
  title?: string;
}

export function TopBar({ onMenuClick, title }: TopBarProps) {
  const { settings, updateSettings } = useProgressStore();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const cycleTheme = () => {
    const order: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(settings.theme) + 1) % 3];
    updateSettings({ theme: next });
  };

  const ThemeIcon = settings.theme === 'light' ? Sun : settings.theme === 'dark' ? Moon : Monitor;

  // Avatar initials from user name or email
  const initials = user?.email?.[0]?.toUpperCase() ?? 'U';

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center gap-4 px-4 lg:px-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-xl hover:bg-accent transition-colors"
      >
        <Menu size={20} />
      </button>

      {title && (
        <h1 className="text-lg font-semibold text-foreground hidden sm:block">{title}</h1>
      )}

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <button
          onClick={cycleTheme}
          className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          title="تغییر تم"
        >
          <ThemeIcon size={18} />
        </button>

        <button className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground hover:text-foreground relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
        </button>

        {/* User avatar + dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            {initials}
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-20 overflow-hidden">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-xs text-muted-foreground">وارد شده به عنوان</p>
                  <p className="text-sm font-medium truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => { setMenuOpen(false); logout(); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut size={15} />
                  خروج از حساب
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
