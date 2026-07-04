// components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracks scroll position to add a subtle shadow/border once the user
  // scrolls — the navbar's background itself no longer changes, only
  // this small "lifted" cue does.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          boxShadow: isScrolled ? '0 4px 24px -4px rgb(0 0 0 / 0.35)' : 'none',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 w-full border-b bg-[rgba(10,10,10,0.85)] backdrop-blur-lg"
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo />

            <div className="hidden items-center gap-8 md:flex">
              <NavLinks />
              <ThemeToggle />
              <Button variant="primary" size="sm">
                Book Consultation
              </Button>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </Container>
      </motion.nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
