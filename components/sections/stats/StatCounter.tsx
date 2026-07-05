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
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="font-serif text-4xl text-white md:text-5xl">
        <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce suffix={suffix} />
      </div>
      <p className="mt-2 text-sm tracking-wide text-white/70 md:text-base">{label}</p>
    </motion.div>
  );
}
