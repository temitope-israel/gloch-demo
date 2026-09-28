// components/sections/stats/StatCounter.tsx
'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

export function StatCounter({ value, suffix, label, delay = 0 }: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group hover:border-gold/50 relative min-w-[210px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-zinc-900/80 hover:shadow-amber-500/10"
    >
      {/* Top Accent Highlight */}
      <div className="via-gold/40 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated Number Display */}
      <div className="text-gold flex items-baseline font-serif text-3xl font-light tracking-tight antialiased">
        <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce suffix={suffix} />
      </div>

      {/* Label */}
      <p className="mt-1.5 font-sans text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors group-hover:text-zinc-200">
        {label}
      </p>
    </motion.div>
  );
}

// // components/sections/stats/StatCounter.tsx
// 'use client';

// import CountUp from 'react-countup';
// import { motion } from 'framer-motion';

// interface StatCounterProps {
//   value: number;
//   suffix: string;
//   label: string;
//   delay?: number;
// }

// export function StatCounter({ value, suffix, label, delay = 0 }: StatCounterProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
//       // UPGRADE: Changed from centered text to left-aligned (with desktop padding adjustments) for an upscale, structured gallery look
//       className="text-left first:pl-0 last:pr-0 md:px-8"
//     >
//       {/* UPGRADE: Standardized font-serif, utilizing a clean, warm luxury gold tone accent */}
//       <div className="text-h1 lg:text-display text-gold font-serif leading-none font-light tracking-tight">
//         <CountUp
//           end={value}
//           duration={2.5} // Slowed down slightly to allow users to appreciate the fluid numeric count
//           enableScrollSpy
//           scrollSpyOnce
//           suffix={suffix}
//         />
//       </div>

//       {/* UPGRADE: Tied subtitle precisely to system font-sans, text-small scale, and elegant warm-gray neutrals */}
//       <p className="text-small text-warm-gray-300 mt-3 font-sans font-medium tracking-widest uppercase">
//         {label}
//       </p>
//     </motion.div>
//   );
// }
