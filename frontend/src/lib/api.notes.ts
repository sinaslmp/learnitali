import { apiClient, apiFetch } from './api';

export interface NoteData {
  id: string;
  content: string;
  title?: string;
  lessonId?: string;
  tags: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNotePayload {
  content: string;
  title?: string;
  lessonId?: string;
  section?: string;
  tags?: string[];
  isPinned?: boolean;
}

export const notesApi = {
  list: (lessonId?: string, page = 1, limit = 20) =>
    apiFetch<{ data: NoteData[]; total: number }>(
      apiClient.get('/notes', { params: { lessonId, page, limit } }),
    ),

  create: (payload: CreateNotePayload) =>
    apiFetch<NoteData>(apiClient.post('/notes', payload)),

  update: (id: string, payload: Partial<CreateNotePayload>) =>
    apiFetch<NoteData>(apiClient.patch(`/notes/${id}`, payload)),

  delete: (id: string) =>
    apiFetch<{ message: string }>(apiClient.delete(`/notes/${id}`)),
};
