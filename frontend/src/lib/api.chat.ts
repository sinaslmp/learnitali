import { apiClient, apiFetch } from './api';

export type ChatRole = 'USER' | 'ASSISTANT';

export interface ChatMessageData {
  id: string;
  conversationId: string;
  role: ChatRole;
  content: string;
  isVoiceInput: boolean;
  createdAt: string;
}

export interface ChatConversationData {
  id: string;
  userId: string;
  lessonId: string | null;
  lessonTitle: string | null;
  lessonContext: string | null;
  title: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: { messages: number };
}

export interface ChatConversationWithMessages extends ChatConversationData {
  messages: ChatMessageData[];
}

export interface CreateConversationPayload {
  lessonId?: string;
  lessonTitle?: string;
  lessonContext?: string;
  title?: string;
}

export interface SendMessageResult {
  userMessage: ChatMessageData;
  assistantMessage: ChatMessageData;
}

export interface SpeechResult {
  audioBase64: string;
  mimeType: string;
}

export const chatApi = {
  listConversations: (lessonId?: string) =>
    apiFetch<ChatConversationData[]>(apiClient.get('/chat/conversations', { params: { lessonId } })),

  createConversation: (payload: CreateConversationPayload) =>
    apiFetch<ChatConversationData>(apiClient.post('/chat/conversations', payload)),

  getConversation: (id: string) =>
    apiFetch<ChatConversationWithMessages>(apiClient.get(`/chat/conversations/${id}`)),

  deleteConversation: (id: string) =>
    apiFetch<{ success: boolean }>(apiClient.delete(`/chat/conversations/${id}`)),

  sendMessage: (conversationId: string, content: string) =>
    apiFetch<SendMessageResult>(apiClient.post(`/chat/conversations/${conversationId}/messages`, { content })),

  sendVoiceMessage: (conversationId: string, audioBlob: Blob) => {
    const form = new FormData();
    form.append('audio', audioBlob, 'voice-message.webm');
    return apiFetch<SendMessageResult>(
      apiClient.post(`/chat/conversations/${conversationId}/voice`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    );
  },

  synthesizeSpeech: (conversationId: string, messageId: string) =>
    apiFetch<SpeechResult>(
      apiClient.post(`/chat/conversations/${conversationId}/messages/${messageId}/speech`, {}),
    ),
};
