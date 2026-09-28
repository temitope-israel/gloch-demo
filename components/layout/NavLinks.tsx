'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, isGroup } from '@/constants/nav';

export function NavLinks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-8" onMouseLeave={() => setOpenIndex(null)}>
      {navItems.map((entry, index) => {
        if (!isGroup(entry)) {
          return (
            <Link
              key={entry.href}
              href={entry.href}
              className="nav-link hover:text-gold text-sm font-medium text-white/85 transition-colors duration-200"
            >
              {entry.label}
            </Link>
          );
        }

        const isOpen = openIndex === index;

        return (
          <div key={entry.label} className="relative" onMouseEnter={() => setOpenIndex(index)}>
            <div className="group flex items-center gap-1">
              {/* Direct Page Link */}
              <Link
                href={entry.href || '#'}
                className={`nav-link hover:text-gold text-sm font-medium transition-colors duration-200 ${
                  isOpen ? 'text-gold' : 'text-white/85'
                }`}
                onClick={() => setOpenIndex(null)}
              >
                {entry.label}
              </Link>

              {/* Chevron Toggle Button for Manual Click/Touch Expansion */}
              <button
                type="button"
                className="hover:text-gold p-1 text-white/60 focus:outline-none"
                aria-expanded={isOpen}
                aria-label={`Toggle ${entry.label} dropdown`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(isOpen ? null : index);
                }}
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isOpen ? 'text-gold rotate-180' : 'group-hover:text-gold'
                  }`}
                  aria-hidden
                />
              </button>
            </div>

            <AnimatePresence>
              {isOpen && (
                <div
                  /* HOVER GAP BRIDGE */
                  className="absolute top-full left-0 z-50 pt-3 before:absolute before:-top-3 before:h-3 before:w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-ink/95 w-60 overflow-hidden rounded-xl border border-white/10 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/5 backdrop-blur-xl"
                  >
                    <div className="flex flex-col space-y-0.5">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="hover:text-gold group/sub flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm text-white/80 transition-all duration-150 hover:bg-white/[0.06]"
                          onClick={() => setOpenIndex(null)}
                        >
                          <span className="font-medium">{item.label}</span>
                          <span className="bg-gold/0 group-hover/sub:bg-gold/20 h-1.5 w-1.5 rounded-full transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

