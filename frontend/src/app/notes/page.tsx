'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { useProgressStore } from '@/stores/progressStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { lessons } from '@/data/lessons';
import { PenLine, Trash2, Plus, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotesPage() {
  const { progress, addNote, updateNote, deleteNote } = useProgressStore();
  const [newContent, setNewContent] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const notes = [...progress.notes].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const getLessonTitle = (id?: number) => {
    if (!id) return null;
    return lessons.find((l) => l.id === id)?.titleFa ?? `درس ${id}`;
  };

  return (
    <AppShell title="یادداشت‌ها">
      <div className="space-y-6 max-w-3xl mx-auto" dir="rtl">

        <div className="text-right">
          <h1 className="text-2xl font-bold">یادداشت‌های من</h1>
          <p className="text-muted-foreground text-sm mt-1">{notes.length} یادداشت</p>
        </div>

        {/* New note */}
        <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-right">
            <Plus size={16} className="text-green-500" />
            <h2 className="font-semibold">یادداشت جدید</h2>
          </div>
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="یادداشت‌ات را اینجا بنویس..."
            className="w-full h-28 p-4 rounded-xl border border-border bg-muted/30 text-sm resize-none focus:outline-none focus:border-green-500"
            dir="auto"
          />
          <Button
            size="sm"
            disabled={!newContent.trim()}
            onClick={() => {
              addNote(newContent.trim());
              setNewContent('');
            }}
          >
            <PenLine size={14} />
            ذخیره یادداشت
          </Button>
        </div>

        {/* Notes list */}
        {notes.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <FileText size={48} className="mx-auto mb-4 opacity-20" />
            <p>هنوز یادداشتی نداری</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-card border border-border rounded-2xl p-5 space-y-3"
              >
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                    <button
                      onClick={() => {
                        setEditId(note.id);
                        setEditContent(note.content);
                      }}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
                    >
                      <PenLine size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    {note.lessonId && (
                      <Badge variant="info" size="sm">{getLessonTitle(note.lessonId)}</Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {new Date(note.createdAt).toLocaleDateString('fa-IR')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                {editId === note.id ? (
                  <div className="space-y-2">
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-24 p-3 rounded-xl border border-green-500 bg-muted/30 text-sm resize-none focus:outline-none"
                      dir="auto"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => setEditId(null)}>لغو</Button>
                      <Button size="sm" onClick={() => {
                        updateNote(note.id, editContent.trim());
                        setEditId(null);
                      }}>ذخیره</Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap" dir="auto">{note.content}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
