// components/sections/hero/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';
import { heroContent, heroFloatingCards } from '@/constants/hero';
import { buttonVariants } from '@/components/ui/button-variants';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase">
            {heroContent.eyebrow}
          </span>
          <h1 className="lg:text-display font-serif text-4xl leading-[1.1] text-white md:text-6xl">
            {heroContent.headline}
          </h1>
          {/* <motion.span
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase"
          >
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:text-display font-serif text-4xl leading-[1.1] text-white md:text-6xl"
          >
            {heroContent.headline}
          </motion.h1> */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg text-white/80"
          >
            {heroContent.subheading}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={heroContent.primaryCta.href}
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              {heroContent.primaryCta.label}
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'border-white/30 text-white hover:border-white',
              })}
            >
              {heroContent.secondaryCta.label}
            </a>
          </motion.div>
        </div>
      </Container>

      <div className="absolute right-6 bottom-28 z-10 hidden gap-4 md:right-12 lg:flex">
        {heroFloatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[--radius-card] border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md"
          >
            <p className="font-serif text-3xl text-white">{card.value}</p>
            <p className="mt-1 text-sm text-white/70">{card.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  );
}
