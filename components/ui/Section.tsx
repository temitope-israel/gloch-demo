// components/ui/Section.tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string; // used for nav anchor links, e.g. #services
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-32', className)}>
      {children}
    </section>
  );
}
