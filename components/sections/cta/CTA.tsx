// components/sections/cta/CTA.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { buttonVariants } from '@/components/ui/button-variants';
import { ctaContent } from '@/constants/cta';

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into viewport scroll progress specifically across this section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // UPGRADE: Subtle premium structural parallax layout shift (moves background slower than text)
  const yBackground = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="bg-ink relative isolate flex items-center overflow-hidden py-36 text-white md:py-48"
    >
      {/* Background Frame Layer Canvas */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-x-0 -top-[15%] -bottom-[15%] -z-10 h-[130%] w-full will-change-transform"
      >
        <Image
          src={ctaContent.backgroundImage}
          alt=""
          fill
          className="scale-105 object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* UPGRADE: Layered Luxury Overlays instead of flat single color opacities */}
        {/* Layer 1: Rich tint mask */}
        <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply" />
        {/* Layer 2: Deep theatrical radial overlay to lock user focus down the viewport center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.85)_100%)]" />
      </motion.div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Flag */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold text-small mb-5 block font-sans font-semibold tracking-[0.3em] uppercase drop-shadow-md"
          >
            {ctaContent.eyebrow}
          </motion.span>

          {/* Headline Display Text */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 md:text-display font-serif leading-[1.15] font-light tracking-tight text-balance text-white"
          >
            {ctaContent.headline}
          </motion.h2>

          {/* Supporting Copy description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body md:text-body-lg mx-auto mt-6 max-w-xl font-sans leading-relaxed font-light tracking-wide text-balance text-white/80"
          >
            {ctaContent.supportingText}
          </motion.p>

          {/* Call-to-action Action Link Element Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a
              href={ctaContent.cta.href}
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
              style={{ borderRadius: 'var(--radius-button)' }}
            >
              {ctaContent.cta.label}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// // components/sections/cta/CTA.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Container } from '@/components/ui/Container';
// import { buttonVariants } from '@/components/ui/button-variants';
// import { ctaContent } from '@/constants/cta';

// export function CTA() {
//   return (
//     <section
//       id="contact"
//       className="relative isolate flex items-center overflow-hidden py-32 md:py-44"
//     >
//       {/* Background image + dark overlay — same technique as Hero,
//           but simpler here: one static image, no crossfade needed,
//           since this section's job is a single, focused emotional beat,
//           not an ongoing visual showcase. */}
//       <div className="absolute inset-0 -z-10 h-full w-full">
//         <Image
//           src={ctaContent.backgroundImage}
//           alt=""
//           fill
//           className="object-cover"
//           sizes="100vw"
//         />
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       <Container>
//         <div className="mx-auto max-w-2xl text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase"
//           >
//             {ctaContent.eyebrow}
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-h1 md:text-display font-serif leading-tight text-white"
//           >
//             {ctaContent.headline}
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-body-lg mt-6 text-white/80"
//           >
//             {ctaContent.supportingText}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-10"
//           >
//             <a
//               href={ctaContent.cta.href}
//               className={buttonVariants({ variant: 'primary', size: 'lg' })}
//             >
//               {ctaContent.cta.label}
//             </a>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }
