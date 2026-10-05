'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { buttonVariants } from '@/components/ui/button-variants';
import { ctaContent } from '@/constants/cta';

export interface CTAProps {
  id?: string;
  eyebrow?: string;
  headline?: string;
  supportingText?: string;
  cta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export function CTA({
  id = 'contact',
  eyebrow = ctaContent.eyebrow,
  headline = ctaContent.headline,
  supportingText = ctaContent.supportingText,
  cta = ctaContent.cta,
  backgroundImage = ctaContent.backgroundImage,
}: CTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section
      id={id}
      ref={containerRef}
      className="bg-ink relative isolate flex items-center overflow-hidden py-36 text-white md:py-48"
    >
      {/* Background Frame Layer Canvas */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-x-0 -top-[15%] -bottom-[15%] -z-10 h-[130%] w-full will-change-transform"
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="scale-105 object-cover object-center"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.85)_100%)]" />
      </motion.div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Flag */}
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold text-small mb-5 block font-sans font-semibold tracking-[0.3em] uppercase drop-shadow-md"
            >
              {eyebrow}
            </motion.span>
          )}

          {/* Headline Display Text */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 md:text-display font-serif leading-[1.15] font-light tracking-tight text-balance text-white"
          >
            {headline}
          </motion.h2>

          {/* Supporting Copy description paragraph */}
          {supportingText && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-body md:text-body-lg mx-auto mt-6 max-w-xl font-sans leading-relaxed font-light tracking-wide text-balance text-white/80"
            >
              {supportingText}
            </motion.p>
          )}

          {/* Call-to-action Action Link Element Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a
              href={cta.href}
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
              style={{ borderRadius: 'var(--radius-button)' }}
            >
              {cta.label}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
