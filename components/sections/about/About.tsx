// components/sections/about/About.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles, ArrowUpRight, Award, ShieldCheck, Briefcase } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { aboutTeaser } from '@/constants/about';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
} as any;

export function About() {
  const { eyebrow, ceo, readMoreHref } = aboutTeaser;

  return (
    <Section
      id="about"
      className="bg-surface text-foreground border-warm-gray-200/80 relative overflow-hidden border-t py-24 md:py-32"
    >
      {/* Background Subtle Radial Lighting Accent */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ========================================================= */}
          {/* LEFT COLUMN: EXECUTIVE PROFILE CARD WITH LAYERED FRAME    */}
          {/* ========================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            custom={0}
            className="flex flex-col items-center lg:col-span-5 lg:items-start"
          >
            <div className="relative w-full max-w-sm">
              {/* Back Decorative Gold Glow Frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-transparent opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100" />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border-gold bg-background relative aspect-[4/5] w-full overflow-hidden rounded-3xl border p-2 shadow-xl"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Name Tag Overlay at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-serif text-xl font-medium tracking-wide drop-shadow-sm">
                      {ceo.name}
                    </p>
                    <p className="mt-0.5 font-mono text-xs font-semibold tracking-wider text-amber-400 uppercase">
                      {ceo.role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Corner Badge Accent */}
              <div className="border-warm-gray-200 bg-background text-foreground absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl border px-3.5 py-2 font-mono text-xs font-semibold tracking-wider shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>LEADERSHIP</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: EDITORIAL STATEMENT & METRICS               */}
          {/* ========================================================= */}
          <div className="flex flex-col space-y-8 lg:col-span-7">
            {/* Header & Eyebrow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <div className="text-gold-accessible mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-amber-600"></span>
                <span>{eyebrow}</span>
              </div>

              <h2 className="text-foreground font-serif text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Pioneering Excellence & Architectural Integrity
              </h2>
            </motion.div>

            {/* Featured Quote Box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              custom={2}
              className="border-gold bg-background/60 relative rounded-2xl border p-6 shadow-sm backdrop-blur-sm sm:p-8"
            >
              <Quote className="pointer-events-none absolute top-4 right-4 h-16 w-16 text-amber-500/15" />
              <blockquote className="text-foreground relative z-10 font-serif text-lg leading-relaxed italic sm:text-xl">
                &ldquo;{ceo.quote}&rdquo;
              </blockquote>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              custom={3}
              className="border-gold grid grid-cols-3 gap-4 border-y py-6"
            >
              <div className="flex flex-col">
                <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                  15+
                </span>
                <span className="text-warm-gray-500 mt-1 font-mono text-[11px] font-medium tracking-wider uppercase">
                  Years Active
                </span>
              </div>
              <div className="border-gold flex flex-col border-l pl-4">
                <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                  100%
                </span>
                <span className="text-warm-gray-500 mt-1 font-mono text-[11px] font-medium tracking-wider uppercase">
                  Compliance Rate
                </span>
              </div>
              <div className="border-gold flex flex-col border-l pl-4">
                <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                  250+
                </span>
                <span className="text-warm-gray-500 mt-1 font-mono text-[11px] font-medium tracking-wider uppercase">
                  Projects Delivered
                </span>
              </div>
            </motion.div>

            {/* CTA Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUpVariants}
              custom={4}
              className="pt-2"
            >
              <Link
                // href={readMoreHref || '/'}
                href={'/'}
                className="group bg-gold/80 inline-flex items-center gap-3 rounded-xl px-6 py-3.5 font-mono text-xs font-semibold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:bg-gold hover:shadow-lg active:scale-[0.98]"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
