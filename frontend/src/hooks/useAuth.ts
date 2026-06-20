'use client';

import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useAuth() {
  const store = useAuthStore();
  const router = useRouter();

  const logout = useCallback(async () => {
    await store.logout();
    router.push('/login');
  }, [store, router]);

  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated(),
    isLoading: store.isLoading,
    error: store.error,
    login: store.login,
    register: store.register,
    logout,
    clearError: store.clearError,
  };
}
