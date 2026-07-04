// components/layout/ThemeToggle.tsx
'use client'; // uses useTheme hook (React Context) + browser state, must be client-side

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // See explanation below for why this exists
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render an invisible placeholder of the same size to prevent layout shift
    // once the real button appears — keeps the navbar height/alignment stable.
    return <div className="h-9 w-9" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="hover:bg-warm-gray-100 dark:hover:bg-warm-gray-900 relative flex h-9 w-9 items-center justify-center rounded-full transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          {isDark ? <Moon className="text-gold h-5 w-5" /> : <Sun className="text-gold h-5 w-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
