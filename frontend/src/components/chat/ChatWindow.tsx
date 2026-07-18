'use client';

import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { Send, Mic, Square, Volume2, Loader2, Bot, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useAudioRecorder, playBase64Audio } from '@/lib/audio';
import {
  useConversation,
  useSendMessage,
  useSendVoiceMessage,
  useSynthesizeSpeech,
} from '@/hooks/useChat';
import type { ChatMessageData } from '@/lib/api.chat';

function extractErrorMessage(err: unknown): string {
  if (err instanceof AxiosError) {
    return err.response?.data?.message ?? 'ارتباط با سرور برقرار نشد';
  }
  return 'خطایی پیش اومد. دوباره امتحان کن';
}

interface ChatWindowProps {
  conversationId: string;
  className?: string;
}

export function ChatWindow({ conversationId, className }: ChatWindowProps) {
  const { data: conversation, isLoading } = useConversation(conversationId);
  const sendMessage = useSendMessage(conversationId);
  const sendVoiceMessage = useSendVoiceMessage(conversationId);
  const synthesizeSpeech = useSynthesizeSpeech(conversationId);
  const recorder = useAudioRecorder();

  const [input, setInput] = useState('');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const messages = conversation?.messages ?? [];
  const isSending = sendMessage.isPending || sendVoiceMessage.isPending;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length, isSending]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isSending) return;
    setSendError(null);
    sendMessage.mutate(text, {
      onSuccess: () => setInput(''),
      onError: (err) => setSendError(extractErrorMessage(err)),
    });
  };

  const handleMicClick = async () => {
    if (recorder.isRecording) {
      const blob = await recorder.stop();
      if (blob) {
        setSendError(null);
        sendVoiceMessage.mutate(blob, {
          onError: (err) => setSendError(extractErrorMessage(err)),
        });
      }
    } else {
      await recorder.start();
    }
  };

  const handlePlay = (message: ChatMessageData) => {
    if (playingId === message.id) return;
    setPlayingId(message.id);
    synthesizeSpeech.mutate(message.id, {
      onSuccess: ({ audioBase64, mimeType }) => {
        const audio = playBase64Audio(audioBase64, mimeType);
        audio.onended = () => setPlayingId((cur) => (cur === message.id ? null : cur));
      },
      onError: () => setPlayingId((cur) => (cur === message.id ? null : cur)),
    });
  };

  return (
    <div
      className={cn('flex flex-col bg-card border border-border rounded-2xl overflow-hidden', className)}
      dir="rtl"
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {isLoading ? (
          <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
            در حال بارگذاری...
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-2 text-center text-muted-foreground py-10">
            <Bot size={28} className="text-green-500" />
            <p className="text-sm">با مارکو، دستیار زبان ایتالیایی، گفتگو رو شروع کن — با نوشتن یا صدا</p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onPlay={() => handlePlay(message)}
              isPlaying={playingId === message.id && synthesizeSpeech.isPending}
            />
          ))
        )}
        {isSending && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl rounded-tr-sm px-4 py-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {(sendError || recorder.error) && (
        <p className="px-4 pb-1 text-xs text-red-500 text-center flex items-center justify-center gap-1.5">
          <AlertCircle size={13} className="shrink-0" />
          {sendError ?? recorder.error}
        </p>
      )}

      <div className="border-t border-border p-3 flex items-center gap-2">
        <button
          type="button"
          onClick={handleMicClick}
          disabled={isSending}
          aria-label={recorder.isRecording ? 'توقف ضبط' : 'ضبط پیام صوتی'}
          className={cn(
            'shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50',
            recorder.isRecording
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-muted hover:bg-accent text-muted-foreground hover:text-foreground'
          )}
        >
          {recorder.isRecording ? <Square size={16} /> : <Mic size={18} />}
        </button>

        <input
          type="text"
          dir="auto"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (sendError) setSendError(null);
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={recorder.isRecording}
          placeholder={recorder.isRecording ? 'در حال ضبط صدا...' : 'پیامت رو بنویس...'}
          className="flex-1 h-10 px-4 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
        />

        <Button
          size="icon"
          onClick={handleSend}
          disabled={!input.trim() || isSending || recorder.isRecording}
          aria-label="ارسال"
        >
          {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  onPlay,
  isPlaying,
}: {
  message: ChatMessageData;
  onPlay: () => void;
  isPlaying: boolean;
}) {
  const isUser = message.role === 'USER';
  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-7 whitespace-pre-wrap',
          isUser
            ? 'bg-green-500 text-white rounded-tl-sm'
            : 'bg-muted text-foreground rounded-tr-sm'
        )}
        dir="auto"
      >
        <p>{message.content}</p>
        <div className={cn('flex items-center gap-2 mt-1', isUser ? 'justify-start' : 'justify-end')}>
          {message.isVoiceInput && (
            <span className={cn('text-[10px]', isUser ? 'text-white/70' : 'text-muted-foreground')}>
              <Mic size={10} className="inline ml-0.5" />
              صوتی
            </span>
          )}
          {!isUser && (
            <button
              type="button"
              onClick={onPlay}
              disabled={isPlaying}
              aria-label="پخش صدا"
              className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
            >
              {isPlaying ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
