'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { AuthGuard } from './AuthGuard';
import { useProgressStore } from '@/stores/progressStore';
import { useDashboardStats } from '@/hooks/useProgress';
import { useAuthStore } from '@/stores/authStore';

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
}

export function AppShell({ children, title }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { settings } = useProgressStore();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated());

  // Sync real API stats into the local progress store when authenticated
  const { data: apiStats } = useDashboardStats();
  const setApiStats = useProgressStore((s) => s.setApiStats);

  useEffect(() => {
    if (apiStats) setApiStats(apiStats);
  }, [apiStats, setApiStats]);

  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === 'dark') {
      root.classList.add('dark');
    } else if (settings.theme === 'light') {
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    }
  }, [settings.theme]);

  return (
    <AuthGuard>
      <div className="flex h-screen bg-background text-foreground overflow-hidden" dir="rtl">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar onMenuClick={() => setSidebarOpen(true)} title={title} />
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
