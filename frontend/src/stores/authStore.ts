'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi, AuthUser, LoginPayload, RegisterPayload } from '@/lib/api.auth';

interface AuthStore {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<{ message: string }>;
  logout: () => Promise<void>;
  clearError: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      error: null,

      isAuthenticated: () => !!get().accessToken && !!get().user,

      login: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const data = await authApi.login(payload);
          localStorage.setItem('access_token', data.accessToken);
          localStorage.setItem('refresh_token', data.refreshToken);
          set({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            isLoading: false,
          });
        } catch (err: unknown) {
          const msg = extractErrorMessage(err);
          set({ error: msg, isLoading: false });
          throw new Error(msg);
        }
      },

      register: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const result = await authApi.register(payload);
          set({ isLoading: false });
          return result;
        } catch (err: unknown) {
          const msg = extractErrorMessage(err);
          set({ error: msg, isLoading: false });
          throw new Error(msg);
        }
      },

      logout: async () => {
        const { refreshToken } = get();
        set({ isLoading: true });
        try {
          if (refreshToken) await authApi.logout(refreshToken);
        } finally {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          set({ user: null, accessToken: null, refreshToken: null, isLoading: false });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'learnitali-auth',
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);

function extractErrorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'response' in err) {
    const axiosErr = err as { response?: { data?: { message?: string } } };
    return axiosErr.response?.data?.message ?? 'Something went wrong';
  }
  if (err instanceof Error) return err.message;
  return 'Something went wrong';
}
