// components/sections/hero/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';
import { heroContent, heroFloatingCards } from '@/constants/hero';
import { buttonVariants } from '@/components/ui/button-variants';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    // CRITICAL FIX: Changed 'bg-zinc-950' to 'bg-transparent'
    // This stops the section wrapper from masking the images underneath it.
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent py-20"
    >
      <HeroBackground />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold text-small mb-5 block font-sans font-semibold tracking-[0.3em] uppercase drop-shadow-sm"
          >
            {heroContent.eyebrow}
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:text-display font-serif text-4xl leading-[1.1] font-light tracking-tight text-white antialiased md:text-6xl"
          >
            {heroContent.headline}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-body md:text-body-lg mt-6 max-w-xl font-sans leading-relaxed font-light tracking-wide text-zinc-300/90"
          >
            {heroContent.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <a
              href={heroContent.primaryCta.href}
              className={buttonVariants({
                variant: 'primary',
                size: 'lg',
                className:
                  'bg-gold hover:bg-gold-dark rounded-button font-sans font-medium tracking-wide text-zinc-950 shadow-lg transition-all duration-300',
              })}
            >
              {heroContent.primaryCta.label}
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className="group text-small hover:text-gold inline-flex items-center gap-2 px-4 py-3 font-sans font-medium tracking-wider text-white transition-all duration-300"
            >
              {heroContent.secondaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Floating Info Cards */}
      <div className="absolute right-6 bottom-24 z-10 hidden gap-6 md:right-12 lg:flex">
        {heroFloatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shadow-soft-lg relative min-w-[170px] overflow-hidden border border-white/[0.08] bg-zinc-900/40 px-8 py-5 backdrop-blur-xl"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />

            <p className="text-gold text-h2 font-serif font-light tracking-tight">{card.value}</p>
            <p className="text-small mt-1.5 font-sans font-medium tracking-widest text-zinc-400 uppercase">
              {card.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="group flex cursor-pointer flex-col items-center gap-1"
        >
          <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-zinc-500 uppercase transition-colors group-hover:text-white">
            Scroll
          </span>
          <ChevronDown
            className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// // components/sections/hero/Hero.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';
// import { Container } from '@/components/ui/Container';
// import { HeroBackground } from './HeroBackground';
// import { heroContent, heroFloatingCards } from '@/constants/hero';
// import { buttonVariants } from '@/components/ui/button-variants';

// const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0 },
// };

// export function Hero() {
//   return (
//     <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
//       <HeroBackground />

//       <Container className="relative z-10">
//         <div className="max-w-3xl">
//           <span className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase">
//             {heroContent.eyebrow}
//           </span>
//           <h1 className="lg:text-display font-serif text-4xl leading-[1.1] text-white md:text-6xl">
//             {heroContent.headline}
//           </h1>
//           {/* <motion.span
//             {...fadeUp}
//             transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase"
//           >
//             {heroContent.eyebrow}
//           </motion.span>

//           <motion.h1
//             {...fadeUp}
//             transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:text-display font-serif text-4xl leading-[1.1] text-white md:text-6xl"
//           >
//             {heroContent.headline}
//           </motion.h1> */}
//           <motion.p
//             {...fadeUp}
//             transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-6 max-w-xl text-lg text-white/80"
//           >
//             {heroContent.subheading}
//           </motion.p>
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-10 flex flex-col gap-4 sm:flex-row"
//           >
//             <a
//               href={heroContent.primaryCta.href}
//               className={buttonVariants({ variant: 'primary', size: 'lg' })}
//             >
//               {heroContent.primaryCta.label}
//             </a>

//             <a
//               href={heroContent.secondaryCta.href}
//               className={buttonVariants({
//                 variant: 'secondary',
//                 size: 'lg',
//                 className: 'border-white/30 text-white hover:border-white',
//               })}
//             >
//               {heroContent.secondaryCta.label}
//             </a>
//           </motion.div>
//         </div>
//       </Container>

//       <div className="absolute right-6 bottom-28 z-10 hidden gap-4 md:right-12 lg:flex">
//         {heroFloatingCards.map((card, i) => (
//           <motion.div
//             key={card.label}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
//             className="rounded-[--radius-card] border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md"
//           >
//             <p className="font-serif text-3xl text-white">{card.value}</p>
//             <p className="mt-1 text-sm text-white/70">{card.label}</p>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 1.3 }}
//         className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <ChevronDown className="h-6 w-6 text-white/60" aria-hidden />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
