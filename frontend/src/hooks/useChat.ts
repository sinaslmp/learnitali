'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { chatApi, CreateConversationPayload } from '@/lib/api.chat';
import { useAuthStore } from '@/stores/authStore';

// ─── Query keys ──────────────────────────────────────────────────────────────
export const chatKeys = {
  conversations: (lessonId?: string) => ['chat', 'conversations', lessonId ?? 'all'] as const,
  conversation: (id: string) => ['chat', 'conversation', id] as const,
};

// ─── Conversations ────────────────────────────────────────────────────────────
export function useConversations(lessonId?: string) {
  const isAuth = useAuthStore((s) => s.isAuthenticated());
  return useQuery({
    queryKey: chatKeys.conversations(lessonId),
    queryFn: () => chatApi.listConversations(lessonId),
    enabled: isAuth,
  });
}

export function useConversation(id: string | null) {
  const isAuth = useAuthStore((s) => s.isAuthenticated());
  return useQuery({
    queryKey: chatKeys.conversation(id ?? ''),
    queryFn: () => chatApi.getConversation(id as string),
    enabled: isAuth && !!id,
  });
}

export function useCreateConversation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateConversationPayload) => chatApi.createConversation(payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['chat', 'conversations'] });
    },
  });
}

export function useDeleteConversation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => chatApi.deleteConversation(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['chat', 'conversations'] });
    },
  });
}

// ─── Messages ─────────────────────────────────────────────────────────────────
export function useSendMessage(conversationId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (content: string) => chatApi.sendMessage(conversationId, content),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: chatKeys.conversation(conversationId) });
      qc.invalidateQueries({ queryKey: ['chat', 'conversations'] });
    },
  });
}

export function useSendVoiceMessage(conversationId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (audioBlob: Blob) => chatApi.sendVoiceMessage(conversationId, audioBlob),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: chatKeys.conversation(conversationId) });
      qc.invalidateQueries({ queryKey: ['chat', 'conversations'] });
    },
  });
}

export function useSynthesizeSpeech(conversationId: string) {
  return useMutation({
    mutationFn: (messageId: string) => chatApi.synthesizeSpeech(conversationId, messageId),
  });
}
