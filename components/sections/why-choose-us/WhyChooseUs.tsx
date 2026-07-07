// components/sections/why-choose-us/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyChooseUsItems } from '@/constants/why-choose-us';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export function WhyChooseUs() {
  return (
    <Section className="bg-background text-foreground border-t border-[--color-border] transition-colors duration-300">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Gloch"
          title="Built on Trust, Backed by Experience"
          description="We combine market expertise with complete transparency, so every decision you make is an informed one."
          align="center"
          className="mx-auto"
        />

        {/* Rebuilt Layout: Elegant structural grid with responsive row behavior */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUsItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group bg-surface hover:shadow-soft relative flex flex-col justify-between border border-[--color-border] p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ borderRadius: 'var(--radius-card)' }}
              >
                {/* Subtle top light gradient reflect visible on custom surfaces */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.01] to-transparent dark:from-white/[0.01]" />

                <div>
                  {/* UPGRADE: Removed the circular background. The icon now floats beautifully as a pure architectural outline */}
                  <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      className="text-gold group-hover:text-gold-dark h-7 w-7 transition-colors duration-300"
                      aria-hidden
                    />
                  </div>

                  {/* Title: Standardized to system typography scales */}
                  <h3 className="text-h3 text-foreground mt-6 font-serif leading-snug font-light tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description: Enhanced editorial typography sizing and color-aware values */}
                  <p className="text-small text-warm-gray-700 dark:text-warm-gray-300 mt-3 font-sans leading-relaxed font-light tracking-wide">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Element: A thin luxury interactive line anchor at the bottom of the card on hover */}
                <div className="bg-gold mt-8 h-[2px] w-0 transition-all duration-300 group-hover:w-12" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}

// // components/sections/why-choose-us/WhyChooseUs.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { Card } from '@/components/ui/Card';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { whyChooseUsItems } from '@/constants/why-choose-us';

// export function WhyChooseUs() {
//   return (
//     // bg-background / text-foreground — THIS is the first section that
//     // actually responds to the theme toggle. Light mode: warm off-white.
//     // Dark mode: near-black. Watch this section specifically when toggling.
//     <Section className="bg-background">
//       <Container>
//         <SectionHeading
//           eyebrow="Why Choose Gloch"
//           title="Built on Trust, Backed by Experience"
//           description="We combine market expertise with complete transparency, so every decision you make is an informed one."
//           align="center"
//           className="mx-auto"
//         />

//         <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {whyChooseUsItems.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <Card className="h-full">
//                   <div className="bg-gold/10 flex h-12 w-12 items-center justify-center rounded-full">
//                     <Icon className="text-gold-accessible h-6 w-6" aria-hidden />
//                   </div>
//                   <h3 className="text-h3 text-foreground mt-5 font-serif">{item.title}</h3>
//                   <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-3 text-sm leading-relaxed">
//                     {item.description}
//                   </p>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </div>
//       </Container>
//     </Section>
//   );
// }
