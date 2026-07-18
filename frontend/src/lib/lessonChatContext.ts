import { Lesson } from '@/types';

/** Compact text summary of a lesson's content, sent once when a per-lesson
 * chat conversation is created so the backend (which has no other access to
 * this static frontend lesson data) can ground the tutor's answers in it. */
export function buildLessonChatContext(lesson: Lesson): string {
  const objectives = lesson.objectivesFa.length
    ? `اهداف:\n${lesson.objectivesFa.map((o) => `- ${o}`).join('\n')}`
    : '';

  const vocabulary = lesson.vocabulary.length
    ? `لغات:\n${lesson.vocabulary
        .slice(0, 30)
        .map((v) => `- ${v.word} = ${v.translation}`)
        .join('\n')}`
    : '';

  const grammar = lesson.grammar.length
    ? `گرامر:\n${lesson.grammar
        .map((g) => `- ${g.titleFa} (${g.title}): ${g.explanationFa}`)
        .join('\n')}`
    : '';

  return [`مرور: ${lesson.overviewFa}`, objectives, vocabulary, grammar].filter(Boolean).join('\n\n');
}
