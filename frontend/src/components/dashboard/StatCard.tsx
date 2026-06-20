import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  icon: LucideIcon;
  iconColor?: string;
  trend?: { value: number; label: string };
}

export function StatCard({ label, value, sublabel, icon: Icon, iconColor = 'text-green-500', trend }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
      <div className={cn('p-3 rounded-xl bg-muted', iconColor.replace('text-', 'bg-').replace('-500', '-500/10'))}>
        <Icon size={22} className={iconColor} />
      </div>
      <div className="flex-1 min-w-0 text-right">
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-sm font-medium text-foreground/80">{label}</p>
        {sublabel && <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>}
        {trend && (
          <p className={cn('text-xs mt-1 font-medium', trend.value >= 0 ? 'text-green-500' : 'text-red-500')}>
            {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)} {trend.label}
          </p>
        )}
      </div>
    </div>
  );
}
