// components/layout/MobileMenu.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { navItems, isGroup } from '@/constants/nav';

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

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

              const isExpanded = openGroup === entry.label;

              return (
                <motion.div
                  key={entry.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="w-full max-w-xs py-3"
                >
                  {/* Split Header: Click title to go to page; Click chevron to expand dropdown */}
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={entry.href || '#'}
                      onClick={handleClose}
                      className="text-h3 hover:text-gold font-serif text-white transition-colors"
                    >
                      {entry.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() => setOpenGroup(isExpanded ? null : entry.label)}
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${entry.label} submenu`}
                      className="hover:text-gold p-1 text-white/70 transition-colors"
                    >
                      <ChevronDown
                        className={`h-6 w-6 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-amber-400' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
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
              <Link href="/contact" onClick={handleClose}>
                <Button variant="primary" size="lg">
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
