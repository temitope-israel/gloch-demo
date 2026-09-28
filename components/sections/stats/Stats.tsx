// components/sections/hero/StatCard.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

export function StatCard({ label, value, delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract numeric digits and symbol suffix (e.g., "250+" -> numeric: 250, suffix: "+")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 45,
    damping: 18,
    mass: 0.8,
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(targetNumber);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, targetNumber, motionValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group hover:border-gold/50 relative min-w-[210px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Subtle Top Accent Highlight */}
      <div className="via-gold/40 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Inner Glow Background Effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated Number Display */}
      <div className="text-gold flex items-baseline font-serif text-3xl font-light tracking-tight">
        <motion.span>{displayValue}</motion.span>
        {suffix && <span className="ml-0.5 text-2xl font-normal text-amber-400">{suffix}</span>}
      </div>

      {/* Label */}
      <p className="mt-1.5 font-sans text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors group-hover:text-zinc-200">
        {label}
      </p>
    </motion.div>
  );
}

// // components/sections/stats/Stats.tsx
// import { Container } from '@/components/ui/Container';
// import { StatCounter } from './StatCounter';
// import { stats } from '@/constants/stats';

// export function Stats() {
//   return (
//     // UPGRADE: Integrated system background color token and explicit section spacing variable
//     <section className="bg-ink border-y border-white/[0.04] py-16 lg:py-[--spacing-section-y]">
//       <Container>
//         {/* UPGRADE: Left-aligned for a modern, architectural magazine feel, split cleanly by faint dividers */}
//         <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-white/[0.06]">
//           {stats.map((stat, index) => (
//             <StatCounter
//               key={stat.id}
//               value={stat.value}
//               suffix={stat.suffix}
//               label={stat.label}
//               delay={index * 0.15} // Slightly broader stagger for a premium reveal pace
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// // components/sections/stats/Stats.tsx
// import { Container } from '@/components/ui/Container';
// import { StatCounter } from './StatCounter';
// import { stats } from '@/constants/stats';

// export function Stats() {
//   return (
//     <section className="bg-ink py-16 md:py-24">
//       <Container>
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
//           {stats.map((stat, index) => (
//             <StatCounter
//               key={stat.id}
//               value={stat.value}
//               suffix={stat.suffix}
//               label={stat.label}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
