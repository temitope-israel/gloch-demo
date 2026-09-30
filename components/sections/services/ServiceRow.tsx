// components/sections/services/ServiceRow.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/constants/services';

interface ServiceRowProps {
  service: Service & { features?: string[] };
  reversed?: boolean;
  index: number;
}

export function ServiceRow({ service, reversed = false, index }: ServiceRowProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const indexFormatted = String(index + 1).padStart(2, '0');

  return (
    <div className="group grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Image Block with Luxury Frame & Interactive Glow */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        className={`bg-surface hover:border-gold/40 relative aspect-[4/3] w-full overflow-hidden border border-[--color-border] p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 lg:col-span-7 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
        style={{ borderRadius: 'var(--radius-card, 1rem)' }}
      >
        {/* Mouse Follow Spotlight on Image Card */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                500px circle at ${mouseX}px ${mouseY}px,
                rgba(212, 175, 55, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-card,1rem)-6px)]">
          {/* Subtle Dark Overlay Fade */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />

          {/* Floating Number Badge inside Image Container */}
          <div className="text-gold absolute top-4 left-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 font-mono text-xs font-semibold backdrop-blur-md">
            {indexFormatted}
          </div>
        </div>
      </motion.div>

      {/* Copywriting Content Block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-col justify-center lg:col-span-5 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <span className="text-gold font-mono text-xs font-semibold tracking-[0.25em] uppercase">
          0{index + 1} — Service Discipline
        </span>

        <h3 className="text-foreground mt-3 font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
          {service.title}
        </h3>

        <p className="text-warm-gray-700 mt-4 font-sans text-base leading-relaxed font-light tracking-wide dark:text-zinc-300">
          {service.description}
        </p>

        {/* Feature List / Highlights */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="bg-surface/80 text-foreground/80 inline-flex items-center gap-1.5 rounded-full border border-[--color-border] px-3.5 py-1.5 font-sans text-xs font-light backdrop-blur-sm"
              >
                <Check className="text-gold h-3.5 w-3.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Anchor Link */}
        <div className="mt-8">
          <Link
            href={service.cta.href}
            className="group/link text-foreground hover:text-gold inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wider transition-colors duration-300"
          >
            <span className="relative py-0.5">
              {service.cta.label}
              <span className="bg-gold absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-30 transition-transform duration-300 group-hover/link:scale-x-100" />
            </span>
            <div className="group-hover/link:border-gold group-hover/link:bg-gold flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] transition-colors duration-300 group-hover/link:text-black">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

