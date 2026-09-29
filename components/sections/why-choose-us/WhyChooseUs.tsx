// components/sections/why-choose-us/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { whyChooseUsItems } from '@/constants/why-choose-us';

export function WhyChooseUs() {
  return (
    <Section className="bg-background text-foreground relative border-t border-[--color-border] py-28 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 backdrop-blur-md">
              <span className="bg-gold h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                Why Choose Gloch
              </span>
            </div>

            <h2 className="text-foreground mt-6 font-serif text-4xl leading-[1.15] font-light tracking-tight antialiased sm:text-5xl">
              Built on Trust, Backed by Experience
            </h2>

            <p className="text-warm-gray-700 mt-6 font-sans text-base leading-relaxed font-light tracking-wide dark:text-zinc-300">
              We combine deep market intelligence with uncompromising transparency, ensuring every
              property decision you make is clear, informed, and lasting.
            </p>
          </div>

          {/* Right Stacked Minimal List */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-7">
            {whyChooseUsItems.map((item, index) => {
              const Icon = item.icon;
              const indexFormatted = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group bg-surface hover:border-gold/50 relative flex items-start gap-6 rounded-2xl border border-gold p-6 transition-all duration-500 hover:shadow-xl"
                >
                  <span className="text-gold/60 group-hover:text-gold font-mono text-sm font-semibold transition-colors duration-300">
                    {indexFormatted}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-foreground group-hover:text-gold font-serif text-2xl font-light transition-colors duration-300">
                        {item.title}
                      </h3>
                      <Icon className="text-gold h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <p className="text-warm-gray-700 mt-3 font-sans text-sm leading-relaxed font-light dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// // components/sections/why-choose-us/WhyChooseUs.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { whyChooseUsItems } from '@/constants/why-choose-us';

// const containerVariants = {
//   animate: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
//   animate: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//   },
// } as const;

// export function WhyChooseUs() {
//   return (
//     <Section className="bg-background text-foreground relative overflow-hidden border-t border-[--color-border] py-24 transition-colors duration-300">
//       {/* Background Subtle Ambient Glow */}
//       <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

//       <Container>
//         <SectionHeading
//           eyebrow="Why Choose Gloch"
//           title="Built on Trust, Backed by Experience"
//           description="We combine market expertise with complete transparency, so every decision you make is an informed one."
//           align="center"
//           className="mx-auto"
//         />

//         {/* Grid Layout with Elevated Glass Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {whyChooseUsItems.map((item, index) => {
//             const Icon = item.icon;
//             const indexFormatted = String(index + 1).padStart(2, '0');

//             return (
//               <motion.div
//                 key={item.title}
//                 variants={cardVariants}
//                 className="group bg-surface hover:border-gold/40 relative flex flex-col justify-between overflow-hidden border border-[--color-border] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/5"
//                 style={{ borderRadius: 'var(--radius-card, 1rem)' }}
//               >
//                 {/* Top Subtle Gold Accent Sheen on Hover */}
//                 <div className="via-gold/50 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                 {/* Subtle Ambient Background Highlight */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                 <div>
//                   {/* Top Bar: Architectural Index Number & Floating Outline Icon */}
//                   <div className="flex items-center justify-between">
//                     <span className="text-gold/60 group-hover:text-gold font-mono text-xs font-semibold tracking-widest transition-colors duration-300">
//                       {indexFormatted}
//                     </span>
//                     <div className="flex h-10 w-10 items-center justify-center transition-transform duration-500 group-hover:scale-110">
//                       <Icon
//                         className="text-gold h-7 w-7 transition-colors duration-300 group-hover:text-amber-400"
//                         aria-hidden
//                       />
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-foreground group-hover:text-gold mt-8 font-serif text-2xl leading-snug font-light tracking-tight transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-warm-gray-700 mt-3 font-sans text-sm leading-relaxed font-light tracking-wide dark:text-zinc-300">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Animated Gold Bottom Border Expansion */}
//                 <div className="mt-8 flex items-center gap-2">
//                   <div className="bg-gold h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-12" />
//                   <div className="bg-gold h-1 w-1 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </Container>
//     </Section>
//   );
// }
