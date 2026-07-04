// components/ui/Button.tsx
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { buttonVariants, type ButtonVariant, type ButtonSize } from './button-variants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// Button.tsx now ONLY handles real <button> elements — form submissions,
// modal triggers, theme toggles, etc. Anchor-styled CTAs use buttonVariants
// directly on an <a>, shown below.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />;
  }
);
Button.displayName = 'Button';
