'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { useConversations, useCreateConversation } from '@/hooks/useChat';
import { buildLessonChatContext } from '@/lib/lessonChatContext';
import type { Lesson } from '@/types';

interface LessonChatPanelProps {
  lesson: Lesson;
}

/** Finds the existing chat conversation for this lesson, or creates one the
 * first time the student opens the chat panel. */
export function LessonChatPanel({ lesson }: LessonChatPanelProps) {
  const lessonId = String(lesson.id);
  const { data: conversations, isLoading } = useConversations(lessonId);
  const createConversation = useCreateConversation();
  const [createdId, setCreatedId] = useState<string | null>(null);
  const hasRequestedCreate = useRef(false);

  // Derived directly from the query result — no effect needed to "sync" it,
  // only the create side effect below needs one.
  const conversationId = createdId ?? conversations?.[0]?.id ?? null;

  useEffect(() => {
    if (isLoading || conversationId || hasRequestedCreate.current || createConversation.isPending) return;
    hasRequestedCreate.current = true;
    createConversation.mutate(
      {
        lessonId,
        lessonTitle: lesson.titleFa,
        lessonContext: buildLessonChatContext(lesson),
      },
      {
        onSuccess: (conversation) => setCreatedId(conversation.id),
        onError: () => {
          hasRequestedCreate.current = false;
        },
      },
    );
  }, [isLoading, conversationId, createConversation, lesson, lessonId]);

  if (!conversationId) {
    return (
      <div className="bg-card border border-border rounded-2xl h-[500px] flex items-center justify-center text-sm text-muted-foreground gap-2">
        <Loader2 size={16} className="animate-spin" />
        در حال آماده‌سازی گفتگو...
      </div>
    );
  }

  return <ChatWindow conversationId={conversationId} className="h-[500px]" />;
}
