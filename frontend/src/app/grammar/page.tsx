'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { lessons } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Volume2, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const allGrammar = lessons.flatMap((l) => l.grammar.map((g) => ({ ...g, lessonTitle: l.titleFa, lessonId: l.id })));

export default function GrammarPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { progress, markGrammarComplete } = useProgressStore();

  return (
    <AppShell title="گرامر">
      <div className="space-y-6 max-w-4xl mx-auto" dir="rtl">

        <div className="text-right">
          <h1 className="text-2xl font-bold">مرجع گرامر</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {allGrammar.length} موضوع گرامری از ۱۰ درس
          </p>
        </div>

        {/* Grammar by lesson */}
        {lessons.map((lesson) => (
          <div key={lesson.id} className="space-y-3">
            {lesson.grammar.length > 0 && (
              <>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-2">
                    <span>{lesson.icon}</span>
                    <span className="text-sm font-semibold text-muted-foreground">درس {lesson.id}: {lesson.titleFa}</span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {lesson.grammar.map((g) => {
                  const lp = progress.lessons[lesson.id];
                  const isComp = lp?.grammarCompleted.includes(g.id);
                  const isOpen = expanded === g.id;

                  return (
                    <div
                      key={g.id}
                      className={cn(
                        'border rounded-2xl overflow-hidden transition-all',
                        isComp ? 'border-green-500/30 bg-green-500/5' : 'border-border bg-card'
                      )}
                    >
                      <button
                        onClick={() => setExpanded(isOpen ? null : g.id)}
                        className="w-full flex items-center justify-between p-5 text-right hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {isComp
                            ? <CheckCircle size={18} className="text-green-500 shrink-0" />
                            : <div className="w-4.5 h-4.5 rounded-full border-2 border-muted-foreground shrink-0" />
                          }
                          {isOpen ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                        </div>
                        <div className="text-right flex-1 mr-3">
                          <p className="font-semibold">{g.titleFa}</p>
                          <p className="text-xs text-muted-foreground italic" dir="ltr">{g.title}</p>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 space-y-4 border-t border-border">
                          <div className="mt-4 bg-muted/50 rounded-xl p-4">
                            <p className="text-sm leading-relaxed">{g.explanationFa}</p>
                            <p className="text-xs text-muted-foreground italic mt-2" dir="ltr">{g.explanation}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-3">مثال‌ها</h4>
                            <div className="space-y-2">
                              {g.examples.map((ex, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
                                  <button className="p-1 rounded hover:bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                                    <Volume2 size={14} />
                                  </button>
                                  <div className="flex-1 text-right">
                                    <p className="text-sm font-medium">{ex.persian}</p>
                                    <p className="text-xs text-muted-foreground italic mt-0.5" dir="ltr">{ex.italian}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {g.commonMistakes.length > 0 && (
                            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4">
                              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">⚠️ اشتباهات رایج</p>
                              <ul className="space-y-1.5">
                                {g.commonMistakes.map((m, i) => (
                                  <li key={i} className="text-xs text-muted-foreground" dir="ltr">• {m}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {!isComp && (
                            <Button
                              size="sm"
                              onClick={() => markGrammarComplete(lesson.id, g.id)}
                            >
                              <CheckCircle size={14} />
                              یاد گرفتم
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
