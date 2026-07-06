// components/sections/cta/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { buttonVariants } from '@/components/ui/button-variants';
import { ctaContent } from '@/constants/cta';

export function CTA() {
  return (
    <section
      id="contact"
      className="relative isolate flex items-center overflow-hidden py-32 md:py-44"
    >
      {/* Background image + dark overlay — same technique as Hero,
          but simpler here: one static image, no crossfade needed,
          since this section's job is a single, focused emotional beat,
          not an ongoing visual showcase. */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={ctaContent.backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase"
          >
            {ctaContent.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 md:text-display font-serif leading-tight text-white"
          >
            {ctaContent.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg mt-6 text-white/80"
          >
            {ctaContent.supportingText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <a
              href={ctaContent.cta.href}
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              {ctaContent.cta.label}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
