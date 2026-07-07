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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      // UPGRADE: Changed from centered text to left-aligned (with desktop padding adjustments) for an upscale, structured gallery look
      className="text-left first:pl-0 last:pr-0 md:px-8"
    >
      {/* UPGRADE: Standardized font-serif, utilizing a clean, warm luxury gold tone accent */}
      <div className="text-h1 lg:text-display text-gold font-serif leading-none font-light tracking-tight">
        <CountUp
          end={value}
          duration={2.5} // Slowed down slightly to allow users to appreciate the fluid numeric count
          enableScrollSpy
          scrollSpyOnce
          suffix={suffix}
        />
      </div>

      {/* UPGRADE: Tied subtitle precisely to system font-sans, text-small scale, and elegant warm-gray neutrals */}
      <p className="text-small text-warm-gray-300 mt-3 font-sans font-medium tracking-widest uppercase">
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
//       viewport={{ once: true, amount: 0.5 }}
//       transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
//       className="text-center"
//     >
//       <div className="font-serif text-4xl text-white md:text-5xl">
//         <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce suffix={suffix} />
//       </div>
//       <p className="mt-2 text-sm tracking-wide text-white/70 md:text-base">{label}</p>
//     </motion.div>
//   );
// }
