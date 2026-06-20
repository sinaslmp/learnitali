'use client';

import { useState } from 'react';
import { Exercise } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, XCircle, ChevronLeft, Trophy, RotateCcw } from 'lucide-react';
import { cn, scoreColor } from '@/lib/utils';

interface QuizEngineProps {
  exercises: Exercise[];
  lessonId: number;
  title: string;
}

type QuizState = 'idle' | 'answering' | 'revealed' | 'done';

export function QuizEngine({ exercises, lessonId, title }: QuizEngineProps) {
  const [state, setState] = useState<QuizState>('idle');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ correct: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { setQuizScore } = useProgressStore();

  const ex = exercises[index];
  const total = exercises.length;
  const score = total > 0 ? Math.round((answers.filter((a) => a.correct).length / total) * 100) : 0;

  const getAnswer = () => {
    if (ex.type === 'fill_blank' || ex.type === 'translation') return inputValue.trim();
    return selected ?? '';
  };

  const isCorrect = (answer: string) => {
    const correct = ex.correctAnswer;
    if (Array.isArray(correct)) {
      return correct.some((c) => c.toLowerCase().trim() === answer.toLowerCase().trim());
    }
    return correct.toLowerCase().trim() === answer.toLowerCase().trim();
  };

  const reveal = () => {
    const answer = getAnswer();
    if (!answer) return;
    setState('revealed');
  };

  const next = () => {
    const answer = getAnswer();
    const correct = isCorrect(answer);
    const newAnswers = [...answers, { correct }];
    setAnswers(newAnswers);
    setSelected(null);
    setInputValue('');

    if (index + 1 >= total) {
      const finalScore = Math.round((newAnswers.filter((a) => a.correct).length / total) * 100);
      setQuizScore(lessonId, finalScore);
      setState('done');
    } else {
      setIndex(index + 1);
      setState('answering');
    }
  };

  const reset = () => {
    setState('idle');
    setIndex(0);
    setSelected(null);
    setInputValue('');
    setAnswers([]);
  };

  if (state === 'idle') {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="text-6xl">📝</div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground mt-2">{total} سوال آماده است</p>
        </div>
        <Button size="lg" onClick={() => setState('answering')}>
          شروع آزمون
        </Button>
      </div>
    );
  }

  if (state === 'done') {
    return (
      <div className="text-center py-12 space-y-6 max-w-md mx-auto">
        <div className="text-6xl">{score >= 70 ? '🏆' : '💪'}</div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">نتیجه آزمون</p>
          <p className={cn('text-6xl font-bold', scoreColor(score))}>{score}%</p>
          <p className="text-muted-foreground mt-2">
            {answers.filter((a) => a.correct).length} از {total} درست
          </p>
        </div>
        <div className="bg-muted/50 rounded-2xl p-4">
          {score >= 90 && <p className="text-green-500 font-semibold">عالی! Eccellente! 🎉</p>}
          {score >= 70 && score < 90 && <p className="text-yellow-500 font-semibold">خوب! Bravo/a!</p>}
          {score < 70 && <p className="text-red-500 font-semibold">تمرین بیشتری لازم داری. Riprova!</p>}
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={reset}>
            <RotateCcw size={16} />
            دوباره امتحان کن
          </Button>
        </div>
      </div>
    );
  }

  const currentAnswer = getAnswer();
  const correct = state === 'revealed' ? isCorrect(currentAnswer) : null;

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">سوال {index + 1} از {total}</span>
          <div className="flex gap-1">
            {exercises.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-6 h-1.5 rounded-full',
                  i < answers.length
                    ? answers[i].correct ? 'bg-green-500' : 'bg-red-500'
                    : i === index ? 'bg-blue-500' : 'bg-muted'
                )}
              />
            ))}
          </div>
        </div>
        <ProgressBar value={Math.round((index / total) * 100)} size="sm" />
      </div>

      {/* Question */}
      <div className="bg-card border border-border rounded-2xl p-6 text-right">
        <Badge variant="info" className="mb-3">
          {ex.type === 'multiple_choice' ? 'چهارگزینه‌ای' :
           ex.type === 'fill_blank' ? 'جای خالی' :
           ex.type === 'true_false' ? 'درست یا غلط' :
           ex.type === 'translation' ? 'ترجمه' : 'تطبیق'}
        </Badge>
        <p className="text-lg font-semibold text-foreground">{ex.questionFa ?? ex.question}</p>
        {ex.questionFa && ex.question !== ex.questionFa && (
          <p className="text-sm text-muted-foreground italic mt-1 text-left" dir="ltr">{ex.question}</p>
        )}
      </div>

      {/* Answer area */}
      {(ex.type === 'multiple_choice' || ex.type === 'true_false' || ex.type === 'matching') && ex.options && (
        <div className="grid gap-3">
          {ex.options.map((opt) => {
            const isSelected = selected === opt;
            const isCorrectOpt = opt === ex.correctAnswer || (Array.isArray(ex.correctAnswer) && ex.correctAnswer.includes(opt));
            let cls = 'border-border bg-card hover:border-green-500/50 hover:bg-accent';
            if (state === 'revealed') {
              if (isCorrectOpt) cls = 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-300';
              else if (isSelected && !isCorrectOpt) cls = 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-300';
            } else if (isSelected) {
              cls = 'border-blue-500 bg-blue-500/10';
            }
            return (
              <button
                key={opt}
                onClick={() => state === 'answering' && setSelected(opt)}
                disabled={state === 'revealed'}
                className={cn(
                  'w-full text-right p-4 rounded-xl border-2 transition-all duration-150 text-sm font-medium',
                  cls
                )}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {state === 'revealed' && isCorrectOpt && <CheckCircle size={16} className="text-green-500" />}
                    {state === 'revealed' && isSelected && !isCorrectOpt && <XCircle size={16} className="text-red-500" />}
                  </span>
                  <span>{opt}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {(ex.type === 'fill_blank' || ex.type === 'translation') && (
        <div className="space-y-2">
          <input
            value={inputValue}
            onChange={(e) => { if (state === 'answering') setState('answering'); setInputValue(e.target.value); }}
            onKeyDown={(e) => e.key === 'Enter' && state === 'answering' && reveal()}
            disabled={state === 'revealed'}
            placeholder="جواب خود را اینجا بنویسید..."
            className={cn(
              'w-full px-4 py-3 rounded-xl border-2 bg-card text-right text-sm transition-colors outline-none',
              state === 'revealed'
                ? correct ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'
                : 'border-border focus:border-blue-500'
            )}
            dir="auto"
          />
          {state === 'revealed' && !correct && (
            <p className="text-sm text-right">
              <span className="text-muted-foreground">جواب صحیح: </span>
              <span className="text-green-600 font-semibold">
                {Array.isArray(ex.correctAnswer) ? ex.correctAnswer.join(' / ') : ex.correctAnswer}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Explanation */}
      {state === 'revealed' && ex.explanationFa && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-right">
          <p className="text-sm text-blue-700 dark:text-blue-300">{ex.explanationFa}</p>
        </div>
      )}

      {/* Result feedback */}
      {state === 'revealed' && (
        <div className={cn(
          'flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-semibold',
          correct ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'
        )}>
          {correct ? <><CheckCircle size={18} /> آفرین! Corretto!</> : <><XCircle size={18} /> اشتباه! Sbagliato!</>}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {state === 'answering' && (
          <Button
            className="flex-1"
            disabled={!getAnswer()}
            onClick={reveal}
          >
            بررسی جواب
          </Button>
        )}
        {state === 'revealed' && (
          <Button className="flex-1" onClick={next}>
            {index + 1 < total ? (
              <><ChevronLeft size={16} /> سوال بعدی</>
            ) : (
              <><Trophy size={16} /> مشاهده نتیجه</>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
