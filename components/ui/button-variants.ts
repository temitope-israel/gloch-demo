// components/ui/button-variants.ts
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-white hover:bg-gold-dark rounded-lg hover:cursor-pointer',
  secondary: 'border border-foreground/20 text-foreground hover:border-foreground/40',
  ghost: 'text-foreground hover:text-gold',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

// A plain function that RETURNS a className string, rather than a component.
// This means it works identically on a <button>, an <a>, or even a Next.js
// <Link> — no special "asChild" plumbing needed, because we're not trying
// to make one component render as different elements. We're just sharing
// the same visual styling wherever it's needed.
export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(
    'inline-flex items-center justify-center rounded-[--radius-button] font-medium transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  )
}