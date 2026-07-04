// container/ui/Card.tsx
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-border bg-surface rounded-[--radius-card] border p-6',
        'shadow-[--shadow-soft] transition-shadow duration-300 hover:shadow-[--shadow-soft-lg]',
        className
      )}
      {...props}
    />
  );
}
