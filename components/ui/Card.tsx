// components / ui / Card.tsx;
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-border bg-surface rounded-[--radius-card] border p-6',
        'shadow-[0_4px_24px_-4px_rgb(0_0_0_/_0.08)]',
        'transition-[box-shadow,transform] duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-[0_12px_48px_-8px_rgb(0_0_0_/_0.12)]',
        className
      )}
      {...props}
    />
  );
}
