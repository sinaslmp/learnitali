'use client';

import { useState } from 'react';
import { MessageCirclePlus, Trash2, MessageCircle } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { cn } from '@/lib/utils';
import {
  useConversations,
  useCreateConversation,
  useDeleteConversation,
} from '@/hooks/useChat';

export default function ChatPage() {
  const { data: conversations, isLoading } = useConversations();
  const createConversation = useCreateConversation();
  const deleteConversation = useDeleteConversation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const generalConversations = (conversations ?? []).filter((c) => !c.lessonId);
  // Default to the most recent conversation until the student explicitly
  // picks or creates one — derived directly from the query result instead of
  // synced into state, so there's no effect racing the data load.
  const activeId = selectedId ?? generalConversations[0]?.id ?? null;

  const handleNewConversation = () => {
    createConversation.mutate(
      {},
      {
        onSuccess: (conversation) => setSelectedId(conversation.id),
      },
    );
  };

  const handleDelete = (id: string) => {
    deleteConversation.mutate(id, {
      onSuccess: () => {
        if (activeId === id) setSelectedId(null);
      },
    });
  };

  return (
    <AppShell title="گفتگو با هوش مصنوعی">
      <div className="max-w-5xl mx-auto space-y-4" dir="rtl">
        <div className="flex items-center justify-between">
          <div className="text-right">
            <h1 className="text-xl font-bold">گفتگو با مارکو</h1>
            <p className="text-sm text-muted-foreground">دستیار هوش مصنوعی برای تمرین مکالمه ایتالیایی</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4">
          {/* Conversation list */}
          <div className="bg-card border border-border rounded-2xl p-3 flex flex-col gap-2 md:h-[600px]">
            <button
              type="button"
              onClick={handleNewConversation}
              disabled={createConversation.isPending}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              <MessageCirclePlus size={16} />
              گفتگوی جدید
            </button>

            <div className="flex-1 overflow-y-auto space-y-1 mt-1">
              {isLoading ? (
                <p className="text-xs text-muted-foreground text-center py-4">در حال بارگذاری...</p>
              ) : generalConversations.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-4">هنوز گفتگویی نداری</p>
              ) : (
                generalConversations.map((c) => (
                  <div
                    key={c.id}
                    className={cn(
                      'group flex items-center gap-2 px-3 py-2 rounded-xl text-sm cursor-pointer transition-colors',
                      activeId === c.id
                        ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30'
                        : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                    )}
                    onClick={() => setSelectedId(c.id)}
                  >
                    <MessageCircle size={14} className="shrink-0" />
                    <span className="flex-1 truncate text-right">{c.title ?? 'گفتگوی عمومی'}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(c.id);
                      }}
                      aria-label="حذف گفتگو"
                      className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-red-500 transition-opacity shrink-0"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Active conversation */}
          {activeId ? (
            <ChatWindow key={activeId} conversationId={activeId} className="md:h-[600px]" />
          ) : (
            <div className="bg-card border border-dashed border-border rounded-2xl flex items-center justify-center md:h-[600px] text-sm text-muted-foreground">
              یک گفتگو رو انتخاب کن یا گفتگوی جدید بساز
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
