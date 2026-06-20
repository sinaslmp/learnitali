import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} دقیقه`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} ساعت ${m} دقیقه` : `${h} ساعت`;
}

export function getLevelLabel(xp: number): { label: string; labelFa: string; next: number } {
  if (xp < 100) return { label: 'Principiante', labelFa: 'مبتدی', next: 100 };
  if (xp < 300) return { label: 'Elementare', labelFa: 'ابتدایی', next: 300 };
  if (xp < 600) return { label: 'Pre-intermedio', labelFa: 'پیش‌میانی', next: 600 };
  if (xp < 1000) return { label: 'Intermedio', labelFa: 'میانی', next: 1000 };
  return { label: 'Avanzato', labelFa: 'پیشرفته', next: 9999 };
}

export function scoreColor(score: number): string {
  if (score >= 90) return 'text-green-500';
  if (score >= 70) return 'text-yellow-500';
  return 'text-red-500';
}

export function difficultyLabel(d: string): string {
  const map: Record<string, string> = {
    beginner: 'مبتدی',
    intermediate: 'متوسط',
    advanced: 'پیشرفته',
  };
  return map[d] ?? d;
}
