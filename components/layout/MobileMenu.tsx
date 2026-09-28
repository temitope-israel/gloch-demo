// components/layout/MobileMenu.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { navItems, isGroup } from '@/constants/nav';

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Tracks which group (Portfolio / About Us) is expanded — only one open
  // at a time keeps the overlay from getting overwhelming on a small screen.
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Reset the accordion state whenever the menu closes, so it doesn't
  // reopen already-expanded next time for no reason.
  function handleClose() {
    setOpenGroup(null);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ink fixed inset-0 z-[60] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end p-6">
            <button onClick={handleClose} aria-label="Close menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          {/* overflow-y-auto so the Portfolio group's 8 items don't push
              the CTA button off-screen on shorter phones */}
          <nav className="flex flex-1 flex-col items-center overflow-y-auto px-8 py-4">
            {navItems.map((entry, i) => {
              if (!isGroup(entry)) {
                return (
                  <motion.div
                    key={entry.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    className="w-full max-w-xs py-3 text-center"
                  >
                    <Link
                      href={entry.href}
                      onClick={handleClose}
                      className="text-h3 hover:text-gold font-serif text-white transition-colors"
                    >
                      {entry.label}
                    </Link>
                  </motion.div>
                );
              }

              const isOpen = openGroup === entry.label;

              return (
                <motion.div
                  key={entry.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="w-full max-w-xs py-3"
                >
                  <button
                    onClick={() => setOpenGroup(isOpen ? null : entry.label)}
                    aria-expanded={isOpen}
                    className="text-h3 hover:text-gold flex w-full items-center justify-center gap-2 font-serif text-white transition-colors"
                  >
                    {entry.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col items-center gap-1 pt-3 pb-1">
                          {entry.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={handleClose}
                              className="hover:text-gold w-full py-2 text-center text-sm text-white/70 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.06, duration: 0.4 }}
              className="mt-6"
            >
              <Button variant="primary" size="lg">
                Book Consultation
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
