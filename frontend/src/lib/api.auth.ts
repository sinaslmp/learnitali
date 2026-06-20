import { apiClient, apiFetch } from './api';

export interface AuthUser {
  id: string;
  email: string;
  role: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const authApi = {
  register: (payload: RegisterPayload) =>
    apiFetch<{ message: string; userId: string }>(
      apiClient.post('/auth/register', payload),
    ),

  login: (payload: LoginPayload) =>
    apiFetch<AuthTokens>(apiClient.post('/auth/login', payload)),

  logout: (refreshToken?: string) =>
    apiFetch<{ message: string }>(
      apiClient.post('/auth/logout', { refreshToken }),
    ),

  forgotPassword: (email: string) =>
    apiFetch<{ message: string }>(
      apiClient.post('/auth/forgot-password', { email }),
    ),

  resetPassword: (token: string, password: string) =>
    apiFetch<{ message: string }>(
      apiClient.post('/auth/reset-password', { token, password }),
    ),

  verifyEmail: (token: string) =>
    apiFetch<{ message: string }>(
      apiClient.post('/auth/verify-email', { token }),
    ),

  changePassword: (currentPassword: string, newPassword: string) =>
    apiFetch<{ message: string }>(
      apiClient.post('/auth/change-password', { currentPassword, newPassword }),
    ),
};
