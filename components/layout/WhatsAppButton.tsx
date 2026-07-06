// components/layout/WhatsAppButton.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { X, ArrowRight } from 'lucide-react';
import { whatsappContacts } from '@/constants/whatsapp';

function buildWhatsAppUrl(phoneNumber: string) {
  const message = encodeURIComponent(
    "Hi Gloch Stylistic, I'd like to know more about your properties."
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-40 md:right-8 md:bottom-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ink absolute right-0 bottom-20 w-80 overflow-hidden rounded-[--radius-card] border border-white/10 shadow-[0_20px_60px_-12px_rgb(0_0_0_/_0.5)]"
          >
            {/* Header — dark ink + gold accent, matching Navbar/Footer identity,
                rather than plain WhatsApp green, so this feels like GLOCH's
                panel that happens to use WhatsApp, not a generic WhatsApp widget */}
            <div className="bg-ink relative overflow-hidden px-6 py-5">
              <div className="bg-gold/10 absolute -top-6 -right-6 h-24 w-24 rounded-full" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="font-serif text-lg text-white">Let&apos;s Talk</p>
                  <p className="mt-1 text-sm text-white/60">Choose who you&apos;d like to reach</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat options"
                  className="text-white/50 transition-colors hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-1 p-3">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.id}
                  href={buildWhatsAppUrl(contact.phoneNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
                      <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-white">{contact.label}</p>
                      <p className="text-xs text-white/50">{contact.role}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className="group-hover:text-gold h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat options' : 'Chat with us on WhatsApp'}
        aria-expanded={isOpen}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[--shadow-soft-lg]"
      >
        {!isOpen && (
          <span className="animate-ping-slow absolute inset-0 rounded-full bg-[#25D366] opacity-75" />
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'chat'}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" aria-hidden />
            ) : (
              <FaWhatsapp className="h-7 w-7 text-white" aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
