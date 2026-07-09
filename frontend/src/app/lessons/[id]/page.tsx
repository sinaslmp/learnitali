'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { VocabCard } from '@/components/vocabulary/VocabCard';
import { FlashcardDeck } from '@/components/flashcards/FlashcardDeck';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useProgressStore } from '@/stores/progressStore';
import { getLessonById, getAdjacentLessons } from '@/data/lessons';
import { LessonSection } from '@/types';
import { cn } from '@/lib/utils';
import { resolveBookAsset } from '@/lib/assets';
import {
  BookOpen, Brain, Headphones, Mic, PenLine, Dumbbell,
  Trophy, FileText, ChevronRight, ChevronLeft, CheckCircle, Volume2, Star,
  Clock, Target, Download, BookText
} from 'lucide-react';

const SECTIONS: { id: LessonSection; label: string; icon: React.ElementType }[] = [
  { id: 'overview',    label: 'مرور',        icon: BookOpen   },
  { id: 'vocabulary',  label: 'لغات',        icon: Star       },
  { id: 'grammar',     label: 'گرامر',       icon: Brain      },
  { id: 'reading',     label: 'خواندن',      icon: BookOpen   },
  { id: 'listening',   label: 'شنیداری',     icon: Headphones },
  { id: 'speaking',    label: 'گفتاری',      icon: Mic        },
  { id: 'writing',     label: 'نوشتاری',     icon: PenLine    },
  { id: 'exercises',   label: 'تمرینات',     icon: Dumbbell   },
  { id: 'quiz',        label: 'آزمون',       icon: Trophy     },
  { id: 'notes',       label: 'یادداشت',     icon: FileText   },
];

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const lesson = getLessonById(Number(id));
  if (!lesson) notFound();
  const { prev, next } = getAdjacentLessons(lesson.id);

  const [activeSection, setActiveSection] = useState<LessonSection>('overview');
  const { getLessonProgress, markSectionComplete, addNote } = useProgressStore();
  const lp = getLessonProgress(lesson.id);
  const [noteContent, setNoteContent] = useState('');

  const pct = Math.round((lp.completedSections.length / (SECTIONS.length - 1)) * 100);

  const complete = (section: LessonSection) => {
    markSectionComplete(lesson.id, section);
  };

  const isCompleted = (section: LessonSection) => lp.completedSections.includes(section);

  return (
    <AppShell title={lesson.titleFa}>
      <div className="max-w-5xl mx-auto space-y-6" dir="rtl">

        {/* Lesson header */}
        <div className={cn('rounded-3xl bg-gradient-to-br p-6 lg:p-8 text-white relative overflow-hidden shadow-xl', lesson.color)}>
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{lesson.icon}</span>
              <div className="flex-1 text-right">
                <Badge className="bg-white/20 text-white border-white/30 mb-2">درس {lesson.number}</Badge>
                <h1 className="text-2xl lg:text-3xl font-bold">{lesson.titleFa}</h1>
                <p className="text-white/80 italic mt-1">{lesson.title}</p>
                <p className="text-white/70 text-sm mt-1">{lesson.subtitleFa}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between text-sm text-white/80 mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Clock size={14} />{lesson.estimatedMinutes} دقیقه</span>
                  <span className="flex items-center gap-1"><Target size={14} />{lesson.objectives.length} هدف</span>
                </div>
                <span>{pct}% تکمیل</span>
              </div>
              <ProgressBar value={pct} barClassName="bg-white/80" />
            </div>
          </div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/10" />
        </div>

        {/* Section tabs */}
        <div className="flex items-center gap-2">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SECTIONS.map(({ id: sid, label, icon: Icon }) => (
              <button
                key={sid}
                onClick={() => setActiveSection(sid)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shrink-0 transition-all',
                  activeSection === sid
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-green-500/30'
                )}
              >
                {isCompleted(sid) && <CheckCircle size={13} className={activeSection === sid ? 'text-white' : 'text-green-500'} />}
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
          {lesson.pdfUrl && (
            <a
              href={`/lessons/${lesson.id}/pages/${lesson.startPage}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shrink-0 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:border-indigo-500/50 transition-colors"
            >
              <BookText size={14} />
              صفحه به صفحه
            </a>
          )}
        </div>

        {/* Section content */}
        <div className="bg-card border border-border rounded-2xl p-6">

          {/* OVERVIEW */}
          {activeSection === 'overview' && (
            <div className="space-y-6 text-right">
              <h2 className="text-xl font-bold">مرور درس</h2>
              <p className="text-muted-foreground leading-relaxed">{lesson.overviewFa}</p>
              <p className="text-sm text-muted-foreground italic" dir="ltr">{lesson.overview}</p>

              <div>
                <h3 className="font-semibold mb-3">اهداف یادگیری</h3>
                <div className="grid gap-2">
                  {lesson.objectivesFa.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
                      <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{lesson.vocabulary.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">لغت</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{lesson.grammar.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">گرامر</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{lesson.exercises.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">تمرین</p>
                </div>
              </div>

              <Button onClick={() => { complete('overview'); setActiveSection('vocabulary'); }}>
                شروع یادگیری ←
              </Button>
            </div>
          )}

          {/* VOCABULARY */}
          {activeSection === 'vocabulary' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('vocabulary'); setActiveSection('grammar'); }}>
                  بعدی: گرامر
                </Button>
                <h2 className="text-xl font-bold">لغات درس {lesson.id}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.vocabulary.map((v) => (
                  <VocabCard key={v.id} item={v} />
                ))}
              </div>
            </div>
          )}

          {/* GRAMMAR */}
          {activeSection === 'grammar' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('grammar'); setActiveSection('reading'); }}>
                  بعدی: خواندن
                </Button>
                <h2 className="text-xl font-bold">گرامر</h2>
              </div>
              {lesson.grammar.map((g) => (
                <div key={g.id} className="border border-border rounded-2xl p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold">{g.titleFa}</h3>
                    <p className="text-sm text-muted-foreground italic" dir="ltr">{g.title}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-sm leading-relaxed">{g.explanationFa}</p>
                    <p className="text-xs text-muted-foreground italic mt-2" dir="ltr">{g.explanation}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">مثال‌ها</h4>
                    <div className="space-y-2">
                      {g.examples.map((ex, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
                          <div className="flex-1 text-right">
                            <p className="text-sm font-medium">{ex.persian}</p>
                            <p className="text-xs text-muted-foreground italic mt-0.5" dir="ltr">{ex.italian}</p>
                          </div>
                          <button className="p-1.5 rounded-lg hover:bg-blue-500/10 text-blue-500 transition-colors shrink-0">
                            <Volume2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {g.commonMistakes.length > 0 && (
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">⚠️ اشتباهات رایج</h4>
                      <ul className="space-y-1">
                        {g.commonMistakes.map((m, i) => (
                          <li key={i} className="text-xs text-muted-foreground" dir="ltr">• {m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* READING */}
          {activeSection === 'reading' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('reading'); setActiveSection('listening'); }}>
                  بعدی: شنیداری
                </Button>
                <h2 className="text-xl font-bold">متن خواندنی</h2>
              </div>
              {lesson.reading.map((r) => (
                <div key={r.id} className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">{r.titleFa}</h3>
                    <p className="text-sm italic text-muted-foreground" dir="ltr">{r.title}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <button className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600">
                          <Volume2 size={14} /> گوش بده
                        </button>
                        <Badge variant="info" size="sm">ایتالیایی</Badge>
                      </div>
                      <p className="text-sm leading-8 whitespace-pre-line" dir="ltr">{r.content}</p>
                    </div>
                    <div className="bg-muted/50 border border-border rounded-xl p-5">
                      <div className="flex items-center justify-end mb-3">
                        <Badge variant="outline" size="sm">ترجمه فارسی</Badge>
                      </div>
                      <p className="text-sm leading-8 whitespace-pre-line">{r.translation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LISTENING */}
          {activeSection === 'listening' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('listening'); setActiveSection('speaking'); }}>
                  بعدی: گفتاری
                </Button>
                <h2 className="text-xl font-bold">تمرین شنیداری</h2>
              </div>
              {lesson.listening.map((track) => (
                <div key={track.id} className="border border-border rounded-2xl p-5 space-y-5">
                  <div className="flex items-start justify-between">
                    <Badge variant="info">{track.duration}ث</Badge>
                    <div className="text-right">
                      <h3 className="font-bold">{track.titleFa}</h3>
                      <p className="text-sm text-muted-foreground italic" dir="ltr">{track.title}</p>
                    </div>
                  </div>

                  {/* Real audio player */}
                  {track.audioUrl ? (
                    <audio
                      controls
                      className="w-full rounded-xl"
                      src={track.audioUrl}
                    />
                  ) : (
                    <div className="bg-muted/50 rounded-xl p-4 text-center text-xs text-muted-foreground">
                      فایل صوتی موجود نیست
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Badge variant="outline" size="sm">متن ایتالیایی</Badge>
                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                        <p className="text-sm leading-7 whitespace-pre-line" dir="ltr">{track.transcript}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" size="sm">ترجمه</Badge>
                      <div className="bg-muted/50 border border-border rounded-xl p-4">
                        <p className="text-sm leading-7 whitespace-pre-line">{track.translation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SPEAKING */}
          {activeSection === 'speaking' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('speaking'); setActiveSection('writing'); }}>
                  بعدی: نوشتاری
                </Button>
                <h2 className="text-xl font-bold">تمرین گفتاری</h2>
              </div>
              {lesson.speaking.map((sp) => (
                <div key={sp.id} className="border border-border rounded-2xl p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant={sp.type === 'roleplay' ? 'info' : sp.type === 'pronunciation' ? 'warning' : 'default'}>
                      {sp.type === 'roleplay' ? 'نقش‌آفرینی' :
                       sp.type === 'conversation' ? 'مکالمه' :
                       sp.type === 'pronunciation' ? 'تلفظ' : 'چالش'}
                    </Badge>
                    <div className="text-right">
                      <h3 className="font-bold">{sp.titleFa}</h3>
                      <p className="text-sm text-muted-foreground italic" dir="ltr">{sp.title}</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-4 text-right">
                    <p className="text-sm text-muted-foreground">{sp.scenarioFa}</p>
                    <p className="text-xs italic text-muted-foreground/70 mt-1" dir="ltr">{sp.scenario}</p>
                  </div>

                  <div className="space-y-2">
                    {sp.lines.map((line, i) => (
                      <div
                        key={i}
                        className={cn(
                          'flex gap-3 items-start p-3 rounded-xl',
                          i % 2 === 0 ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-green-500/5 border border-green-500/20'
                        )}
                      >
                        <span className={cn(
                          'text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5',
                          i % 2 === 0 ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'bg-green-500/20 text-green-600 dark:text-green-400'
                        )}>
                          {line.speaker}
                        </span>
                        <div className="flex-1 text-right">
                          <p className="text-sm font-medium">{line.translation}</p>
                          <p className="text-xs text-muted-foreground italic mt-0.5" dir="ltr">{line.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {sp.tips.length > 0 && (
                    <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">💡 نکات</p>
                      <ul className="space-y-1">
                        {sp.tips.map((tip, i) => <li key={i} className="text-xs text-muted-foreground" dir="ltr">• {tip}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* WRITING */}
          {activeSection === 'writing' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('writing'); setActiveSection('exercises'); }}>
                  بعدی: تمرینات
                </Button>
                <h2 className="text-xl font-bold">تمرین نوشتاری</h2>
              </div>
              <div className="space-y-4">
                <div className="border border-border rounded-2xl p-5">
                  <h3 className="font-bold mb-2">تکلیف نوشتاری</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    یه پاراگراف کوتاه بنویس و از لغات و گرامر این درس استفاده کن:
                  </p>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mb-4">
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-300">موضوع: {lesson.titleFa}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      از اهداف این درس برای نوشتن استفاده کن: {lesson.objectivesFa[0]}
                    </p>
                  </div>
                  <textarea
                    className="w-full h-40 p-4 rounded-xl border border-border bg-muted/30 text-sm resize-none focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="اینجا بنویس..."
                    dir="auto"
                  />
                  <div className="flex gap-3 mt-3">
                    <Button size="sm" variant="outline">ذخیره پیش‌نویس</Button>
                    <Button size="sm">ارسال</Button>
                  </div>
                </div>

                <div className="border border-border rounded-2xl p-5">
                  <h3 className="font-bold mb-3">تمرین‌های نوشتاری</h3>
                  <div className="space-y-3">
                    {lesson.objectivesFa.map((obj, i) => (
                      <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border">
                        <p className="text-sm font-medium mb-2">تمرین {i + 1}: {obj}</p>
                        <textarea
                          className="w-full h-20 p-3 rounded-lg border border-border bg-background text-sm resize-none focus:outline-none focus:border-green-500"
                          placeholder="جواب خود را بنویس..."
                          dir="auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXERCISES */}
          {activeSection === 'exercises' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" onClick={() => { complete('exercises'); setActiveSection('quiz'); }}>
                  بعدی: آزمون
                </Button>
                <h2 className="text-xl font-bold">تمرینات</h2>
              </div>
              <QuizEngine
                exercises={lesson.exercises}
                lessonId={lesson.id}
                title={`تمرین درس ${lesson.id}`}
              />
            </div>
          )}

          {/* QUIZ */}
          {activeSection === 'quiz' && (
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-between">
                <Button size="sm" variant="outline" onClick={() => { complete('quiz'); setActiveSection('notes'); }}>
                  بعدی: یادداشت
                </Button>
                <h2 className="text-xl font-bold">آزمون درس {lesson.id}</h2>
              </div>
              {lp.quizScore !== undefined && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-green-500 font-bold text-lg">{lp.quizScore}%</span>
                  <span className="text-sm text-muted-foreground">
                    بهترین نمره — {lp.quizAttempts} بار تلاش
                  </span>
                </div>
              )}
              <QuizEngine
                exercises={[...lesson.exercises, ...lesson.grammar.flatMap((g) => g.exercises)]}
                lessonId={lesson.id}
                title={`آزمون درس ${lesson.id}: ${lesson.titleFa}`}
              />
            </div>
          )}

          {/* FLASHCARDS (part of notes tab) */}
          {activeSection === 'notes' && (
            <div className="space-y-6 text-right">
              <h2 className="text-xl font-bold">فلش‌کارت و یادداشت</h2>

              {/* Flashcards mini-mode */}
              <div>
                <h3 className="font-semibold mb-4">فلش‌کارت‌های این درس</h3>
                <FlashcardDeck
                  cards={lesson.flashcards}
                  title={`فلش‌کارت درس ${lesson.id}`}
                />
              </div>

              {/* Notes */}
              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">یادداشت شخصی</h3>
                <textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  className="w-full h-32 p-4 rounded-xl border border-border bg-muted/30 text-sm resize-none focus:outline-none focus:border-green-500"
                  placeholder="یادداشت‌هایت را اینجا بنویس..."
                />
                <div className="flex gap-3 mt-3">
                  <Button
                    size="sm"
                    disabled={!noteContent.trim()}
                    onClick={() => {
                      addNote(noteContent, lesson.id, 'notes');
                      setNoteContent('');
                      complete('notes');
                    }}
                  >
                    ذخیره یادداشت
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Page-by-page study mode */}
        {lesson.pdfUrl && (
          <a
            href={`/lessons/${lesson.id}/pages/${lesson.startPage}`}
            className="flex items-center gap-3 rounded-2xl p-5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors group"
          >
            <span className="text-3xl">📖</span>
            <div className="text-right flex-1">
              <p className="font-semibold">مطالعه صفحه به صفحه</p>
              <p className="text-xs text-muted-foreground">
                صفحه {lesson.startPage} تا {lesson.endPage} کتاب — با تصویر و توضیح کامل
              </p>
            </div>
            <ChevronLeft size={18} className="text-indigo-500 group-hover:translate-x-[-2px] transition-transform" />
          </a>
        )}

        {/* PDF + navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* PDF download */}
          {lesson.pdfUrl ? (
            <a
              href={resolveBookAsset(lesson.pdfUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3 border border-border rounded-2xl p-5 hover:border-green-500/40 transition-colors group"
            >
              <span className="text-3xl">📄</span>
              <div className="text-right flex-1">
                <p className="font-semibold">PDF کتاب</p>
                <p className="text-xs text-muted-foreground">{lesson.bookSlug}</p>
              </div>
              <Download size={18} className="text-muted-foreground group-hover:text-green-500 transition-colors" />
            </a>
          ) : (
            <div className="flex-1 border border-dashed border-border rounded-2xl p-5 text-center text-xs text-muted-foreground">
              PDF موجود نیست
            </div>
          )}

          {/* Prev / Next lesson */}
          <div className="flex gap-3">
            {prev ? (
              <a
                href={`/lessons/${prev.id}`}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-border hover:border-green-500/40 transition-colors text-sm"
              >
                <ChevronRight size={16} />
                <span className="text-muted-foreground">قبلی</span>
              </a>
            ) : null}
            {next ? (
              <a
                href={`/lessons/${next.id}`}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-border hover:border-green-500/40 transition-colors text-sm"
              >
                <span className="text-muted-foreground">بعدی</span>
                <ChevronLeft size={16} />
              </a>
            ) : null}
          </div>
        </div>

      </div>
    </AppShell>
  );
}
