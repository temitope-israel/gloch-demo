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
                className="border-warm-gray-200/80 bg-background relative aspect-[4/5] w-full overflow-hidden rounded-3xl border p-2 shadow-xl"
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
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-amber-600">

                </span>
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
              className="border-warm-gray-200/80 bg-background/60 relative rounded-2xl border p-6 shadow-sm backdrop-blur-sm sm:p-8"
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
              className="border-warm-gray-200/80 grid grid-cols-3 gap-4 border-y py-6"
            >
              <div className="flex flex-col">
                <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                  15+
                </span>
                <span className="text-warm-gray-500 mt-1 font-mono text-[11px] font-medium tracking-wider uppercase">
                  Years Active
                </span>
              </div>
              <div className="border-warm-gray-200/80 flex flex-col border-l pl-4">
                <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                  100%
                </span>
                <span className="text-warm-gray-500 mt-1 font-mono text-[11px] font-medium tracking-wider uppercase">
                  Compliance Rate
                </span>
              </div>
              <div className="border-warm-gray-200/80 flex flex-col border-l pl-4">
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
                href={readMoreHref || '/about'}
                className="group bg-ink inline-flex items-center gap-3 rounded-xl px-6 py-3.5 font-mono text-xs font-semibold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-[0.98]"
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

// // components/sections/about/About.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { aboutPage } from '@/constants/about';

// const containerVariants = {
//   animate: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// export function About() {
//   const { whoWeAre, ceo } = aboutPage;

//   return (
//     <Section
//       id="about"
//       className="bg-surface text-foreground border-t border-[--color-border] transition-colors duration-300"
//     >
//       <Container>
//         <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
//           {/* Left Block: CEO Image + Signature Cover Panel (Takes 5 Grid Columns) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="sticky top-24 w-full lg:col-span-5"
//           >
//             <div
//               className="shadow-soft-lg relative aspect-[3/4] w-full overflow-hidden border border-black/[0.04]"
//               style={{ borderRadius: 'var(--radius-card)' }}
//             >
//               <Image
//                 src={ceo.image}
//                 alt={ceo.name}
//                 fill
//                 className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-102"
//                 sizes="(min-width: 1024px) 35vw, 90vw"
//               />
//             </div>

//             <div className="mt-8 px-2">
//               <p className="text-h3 text-foreground font-serif font-light tracking-tight">
//                 {ceo.name}
//               </p>
//               <p className="text-small text-warm-gray-500 mt-1 font-sans font-medium tracking-widest uppercase">
//                 {ceo.role}
//               </p>

//               <div className="relative mt-5 border-t border-[--color-border] pt-5">
//                 <span className="bg-gold absolute top-0 left-0 h-[2px] w-8" />
//                 <p className="text-gold-accessible text-body-lg font-serif leading-relaxed tracking-wide text-balance italic">
//                   “{ceo.quote}”
//                 </p>
//               </div>

//                 <a href="/about"
//                 className="group mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wider text-foreground transition-colors hover:text-gold-accessible"
//               >
//                 Read Our Full Story
//                 <span className="transition-transform group-hover:translate-x-1">→</span>
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Block: Narrative Story, Mission, Vision Grid (Takes 7 Grid Columns) */}
//           <motion.div
//             variants={containerVariants}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="flex flex-col justify-center lg:col-span-7 lg:pt-4"
//           >
//             <span className="text-gold text-small mb-4 block font-sans font-semibold tracking-[0.3em] uppercase drop-shadow-sm">
//               {whoWeAre.eyebrow}
//             </span>

//             <h2 className="text-h1 text-foreground font-serif leading-[1.15] font-light tracking-tight">
//               {whoWeAre.title}
//             </h2>

//             {/* Teaser intro only — the three pillars, closing line, and CEO's
//                 full welcome message live on the dedicated /about page, so
//                 this stays a genuine teaser rather than duplicating everything. */}
//             <div className="mt-8">
//               <p className="text-body md:text-body-lg text-warm-gray-700 font-sans leading-relaxed font-light tracking-wide">
//                 {whoWeAre.intro}
//               </p>
//             </div>

//             <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[--color-border] pt-10 sm:grid-cols-2">
//               <div className="group relative">
//                 <div className="flex items-center gap-3">
//                   <span className="bg-gold h-1.5 w-1.5 rounded-full" />
//                   <h3 className="text-foreground text-h3 font-serif font-light tracking-tight">
//                     Our Mission
//                   </h3>
//                 </div>
//                 <p className="text-small text-warm-gray-700 mt-3 font-sans leading-relaxed font-light tracking-wide">
//                   {whoWeAre.mission}
//                 </p>
//               </div>

//               <div className="group relative">
//                 <div className="flex items-center gap-3">
//                   <span className="bg-gold h-1.5 w-1.5 rounded-full" />
//                   <h3 className="text-foreground text-h3 font-serif font-light tracking-tight">
//                     Our Vision
//                   </h3>
//                 </div>
//                 <p className="text-small text-warm-gray-700 mt-3 font-sans leading-relaxed font-light tracking-wide">
//                   {whoWeAre.vision}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
