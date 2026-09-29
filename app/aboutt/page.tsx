'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Building2,
  Ruler,
  Compass,
  Hammer,
  HardHat,
  DraftingCompass,
  KeyRound,
  Layers,
  Wrench,
  PenTool,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { aboutHub } from '@/constants/about-hub';

// Background ambient floating tool icons configuration
const FLOATING_TOOLS = [
  { Icon: DraftingCompass, className: 'top-20 left-[8%] h-12 w-12 text-gold/20 rotate-12' },
  { Icon: Ruler, className: 'top-1/3 right-[10%] h-16 w-16 text-warm-gray-400/20 -rotate-45' },
  { Icon: Building2, className: 'top-1/2 left-[5%] h-20 w-20 text-gold-light/15 rotate-6' },
  { Icon: KeyRound, className: 'bottom-1/3 right-[6%] h-14 w-14 text-warm-gray-400/20 rotate-12' },
  { Icon: Hammer, className: 'bottom-20 left-[12%] h-10 w-10 text-gold/20 -rotate-12' },
  { Icon: HardHat, className: 'top-28 right-[20%] h-12 w-12 text-gold-light/15 rotate-12' },
  { Icon: Layers, className: 'bottom-10 right-[18%] h-14 w-14 text-warm-gray-400/20 -rotate-6' },
  { Icon: Wrench, className: 'top-[45%] right-[2%] h-10 w-10 text-gold/15 rotate-45' },
];

// Architectural Card Technical Specifications
const CARD_SPECS = [
  { icon: Building2, code: 'REF // ARCH-01', note: 'FOUNDATION & VISION' },
  { icon: DraftingCompass, code: 'REF // STRUCT-02', note: 'CRAFT & PRECISION' },
  { icon: Compass, code: 'REF // VALUE-03', note: 'ETHOS & DYNAMICS' },
];

function BlueprintCard({ card, index }: { card: (typeof aboutHub.cards)[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spec = CARD_SPECS[index % CARD_SPECS.length];
  const CardIcon = spec.icon;
  const isCentered = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={isCentered ? 'md:mt-12' : ''}
    >
      <Link href={card.href} className="group relative block h-full">
        {/* Interactive Ambient Hover Glow */}
        <div className="from-gold/30 via-gold-light/10 absolute -inset-1 rounded-3xl bg-gradient-to-br to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        <div
          onMouseMove={handleMouseMove}
          className="border-warm-gray-200/80 bg-surface hover:border-gold relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
        >
          {/* Mouse Tracking Spotlight */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(212, 175, 55, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Architectural Blueprint Cross-Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-35">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:16px_16px]" />
          </div>

          {/* Technical Blueprint Corner Crosshair Marks */}
          <div className="text-gold-accessible/40 group-hover:text-gold pointer-events-none absolute top-3 left-3 font-mono text-[10px] font-bold transition-colors">
            +
          </div>
          <div className="text-gold-accessible/40 group-hover:text-gold pointer-events-none absolute top-3 right-3 font-mono text-[10px] font-bold transition-colors">
            +
          </div>
          <div className="text-gold-accessible/40 group-hover:text-gold pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] font-bold transition-colors">
            +
          </div>
          <div className="text-gold-accessible/40 group-hover:text-gold pointer-events-none absolute right-3 bottom-3 font-mono text-[10px] font-bold transition-colors">
            +
          </div>

          {/* Background Typography Watermark & Architectural Tool Watermark */}
          <span className="text-warm-gray-100/90 group-hover:text-gold-light/20 pointer-events-none absolute -right-3 -bottom-8 font-serif text-[140px] leading-none font-bold transition-all duration-700 select-none group-hover:translate-x-2">
            0{index + 1}
          </span>
          <CardIcon className="text-warm-gray-200/30 group-hover:text-gold/10 pointer-events-none absolute -top-4 -right-4 h-40 w-40 transition-transform duration-700 group-hover:rotate-12" />

          {/* Card Header & Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              {/* Technical Spec Badge */}
              <div className="border-warm-gray-200 bg-warm-gray-50/90 text-gold-accessible inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                <CardIcon className="text-gold h-3.5 w-3.5" />
                <span>{spec.code}</span>
              </div>

              {/* Action Button */}
              <div className="border-warm-gray-200 bg-warm-gray-50 text-ink group-hover:border-gold group-hover:bg-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-ink group-hover:text-gold-accessible mt-8 font-serif text-3xl transition-colors duration-300 sm:text-4xl">
              {card.label}
            </h2>

            {/* Description */}
            <p className="text-warm-gray-700 group-hover:text-ink mt-4 text-xs leading-relaxed font-light transition-colors duration-300">
              {card.teaser}
            </p>
          </div>

          {/* Card Footer Technical Blueprint Bar */}
          <div className="border-warm-gray-200/80 relative z-10 mt-10 flex items-center justify-between border-t pt-5">
            <div className="flex flex-col gap-0.5">
              <span className="text-warm-gray-400 font-mono text-[9px] tracking-widest uppercase">
                SPECIFICATION
              </span>
              <span className="text-warm-gray-800 group-hover:text-gold-accessible font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors">
                {spec.note}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-warm-gray-300 group-hover:bg-gold h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125" />
              <span className="bg-gold/40 h-2 w-2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function AboutHubPage() {
  return (
    <main className="bg-paper text-ink selection:bg-gold-light selection:text-ink relative min-h-screen overflow-hidden">
      {/* 1. Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 opacity-60 sm:px-8 lg:px-12">
        <div className="via-warm-gray-200 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
        <div className="via-warm-gray-200 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <div className="via-warm-gray-200 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent lg:block" />
        <div className="via-warm-gray-200 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
      </div>

      {/* 2. Floating Building & Architectural Tools */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {FLOATING_TOOLS.map(({ Icon, className }, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${className}`}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 6 + idx * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* 3. Radial Glow Backdrop */}
      <div className="bg-gold-light/10 pointer-events-none absolute top-1/4 left-1/2 z-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />
      <div className="bg-warm-gray-200/60 pointer-events-none absolute right-10 bottom-1/4 z-0 h-[500px] w-[500px] rounded-full blur-[120px]" />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="border-warm-gray-200/80 relative border-b pt-36 pb-16 md:pt-48 md:pb-24">
          <Container>
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold-accessible mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] uppercase"
              >
                <Sparkles className="text-gold-accessible h-3.5 w-3.5" />
                {aboutHub.eyebrow}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-ink font-serif text-5xl tracking-tight sm:text-7xl lg:text-8xl"
              >
                {aboutHub.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-warm-gray-700 mt-6 max-w-xl text-sm leading-relaxed font-light md:text-base"
              >
                {aboutHub.intro}
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Asymmetrical Blueprint Cards Section */}
        <Section className="py-20 md:py-32">
          <Container>
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
              {aboutHub.cards.map((card, i) => (
                <BlueprintCard key={card.href} card={card} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </main>
  );
}

// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Sparkles } from 'lucide-react';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { aboutHub } from '@/constants/about-hub';

// export default function AboutHubPage() {
//   return (
//     <main className="bg-paper text-ink selection:bg-gold-light selection:text-ink relative min-h-screen overflow-hidden">
//       {/* 1. Architectural Grid Background */}
//       <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 opacity-60 sm:px-8 lg:px-12">
//         <div className="via-warm-gray-100 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
//         <div className="via-warm-gray-100 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
//         <div className="via-warm-gray-100 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent lg:block" />
//         <div className="via-warm-gray-100 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
//       </div>

//       {/* 2. Soft Radial Glow Backdrops */}
//       <div className="bg-gold-light/10 pointer-events-none absolute top-1/4 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />
//       <div className="bg-warm-gray-100/80 pointer-events-none absolute right-10 bottom-1/4 z-0 h-[500px] w-[500px] rounded-full blur-[120px]" />

//       {/* Main Content Layer */}
//       <div className="relative z-10">
//         {/* Editorial Header */}
//         <section className="border-warm-gray-100/80 relative border-b pt-36 pb-16 md:pt-48 md:pb-24">
//           <Container>
//             <div className="max-w-3xl">
//               <motion.span
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-gold-accessible mb-4 block inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] uppercase"
//               >
//                 <Sparkles className="text-gold-accessible h-3.5 w-3.5" />
//                 {aboutHub.eyebrow}
//               </motion.span>

//               <motion.h1
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-ink font-serif text-5xl tracking-tight sm:text-7xl lg:text-8xl"
//               >
//                 {aboutHub.title}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-warm-gray-700 mt-6 max-w-xl text-sm leading-relaxed font-light"
//               >
//                 {aboutHub.intro}
//               </motion.p>
//             </div>
//           </Container>
//         </section>

//         {/* Asymmetrical Creative Cards Section */}
//         <Section className="py-20 md:py-32">
//           <Container>
//             <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
//               {aboutHub.cards.map((card, i) => {
//                 // Apply asymmetrical offset to center card on medium/desktop screens
//                 const isCentered = i === 1;

//                 return (
//                   <motion.div
//                     key={card.href}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{
//                       duration: 0.7,
//                       delay: i * 0.15,
//                       ease: [0.16, 1, 0.3, 1],
//                     }}
//                     className={isCentered ? 'md:mt-12' : ''}
//                   >
//                     <Link href={card.href} className="group relative block h-full">
//                       {/* Interactive Hover Ambient Spotlight */}
//                       <div className="from-gold-light/20 absolute -inset-1 rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

//                       <div className="border-warm-gray-100 bg-surface hover:border-gold/50 relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10">
//                         {/* Background Typography Watermark */}
//                         <span className="text-warm-gray-50/90 group-hover:text-gold-light/20 pointer-events-none absolute -right-2 -bottom-6 font-serif text-[120px] leading-none font-bold transition-colors duration-500 select-none">
//                           0{i + 1}
//                         </span>

//                         {/* Card Header & Content */}
//                         <div className="relative z-10">
//                           <div className="flex items-center justify-between">
//                             <span className="border-warm-gray-100 bg-warm-gray-50/80 text-gold-accessible rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase">
//                               Section // 0{i + 1}
//                             </span>

//                             {/* Animated Action Icon */}
//                             <div className="border-warm-gray-100 bg-warm-gray-50 text-ink group-hover:border-gold group-hover:bg-gold flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white">
//                               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                             </div>
//                           </div>

//                           <h2 className="text-ink group-hover:text-gold-accessible mt-8 font-serif text-3xl transition-colors duration-300 sm:text-4xl">
//                             {card.label}
//                           </h2>

//                           <p className="text-warm-gray-700 mt-4 text-xs leading-relaxed font-light">
//                             {card.teaser}
//                           </p>
//                         </div>

//                         {/* Card Footer Divider & Callout */}
//                         <div className="border-warm-gray-100/80 relative z-10 mt-12 flex items-center justify-between border-t pt-6">
//                           <span className="text-warm-gray-500 group-hover:text-ink font-mono text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300">
//                             Explore Chapter
//                           </span>
//                           <span className="bg-warm-gray-300 group-hover:bg-gold h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150" />
//                         </div>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </Container>
//         </Section>
//       </div>
//     </main>
//   );
// }
