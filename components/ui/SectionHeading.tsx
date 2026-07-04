// components/ui/SectionHeading.tsx
import { cn } from '@/lib/utils';
import { div } from 'framer-motion/client';

interface SectionHeadingProps {
  eyebrow?: string; // small label above the heading, e.g. "OUR SERVICES"
  title: string;
  description: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="text-gold mb-3 block text-sm font-medium tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 text-foreground md:text-h1 font-serif">{title}</h2>
      {description && (
        <p className="text-body-lg text-warm-gray-700 dark:text-warm-gray-300 mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
