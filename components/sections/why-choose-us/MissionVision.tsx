// components/sections/MissionVision.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface MissionVisionProps {
  mission: string;
  vision: string;
  eyebrow?: string;
  title?: string;
  variant?: 'light' | 'dark';
}

export function MissionVision({
  mission,
  vision,
  eyebrow = 'OUR PURPOSE',
  title = 'Driven by Purpose, Built for Legacy',
  variant = 'light',
}: MissionVisionProps) {
  const isDark = variant === 'dark';

  return (
    <Section
      className={`relative z-20 py-20 md:py-28 ${
        isDark ? 'bg-ink text-white' : 'bg-surface border-warm-gray-200/80 border-t'
      }`}
    >
      <Container>
        {/* Section Heading */}
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          >
            {eyebrow && (
              <span className="text-gold font-mono text-xs font-semibold tracking-[0.25em] uppercase">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-3 font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl ${
                  isDark ? 'text-white' : 'text-ink'
                }`}
              >
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {/* Mission & Vision Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
              isDark
                ? 'hover:border-gold/40 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08]'
                : 'border-warm-gray-200 hover:border-gold bg-white shadow-xs hover:shadow-xl'
            }`}
          >
            <div className="flex items-center gap-3">
              <Target className="text-gold h-6 w-6 transition-transform group-hover:rotate-12" />
              <h3
                className={`font-serif text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-ink'}`}
              >
                Our Mission
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed font-light ${
                isDark ? 'text-warm-gray-300' : 'text-warm-gray-700'
              }`}
            >
              {mission}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
              isDark
                ? 'hover:border-gold/40 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08]'
                : 'border-warm-gray-200 hover:border-gold bg-white shadow-xs hover:shadow-xl'
            }`}
          >
            <div className="flex items-center gap-3">
              <Eye className="text-gold h-6 w-6 transition-transform group-hover:scale-110" />
              <h3
                className={`font-serif text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-ink'}`}
              >
                Our Vision
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed font-light ${
                isDark ? 'text-warm-gray-300' : 'text-warm-gray-700'
              }`}
            >
              {vision}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// // components/sections/MissionVision.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Target, Eye } from 'lucide-react';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';

// interface MissionVisionProps {
//   mission: string;
//   vision: string;
//   variant?: 'light' | 'dark';
// }

// export function MissionVision({ mission, vision, variant = 'light' }: MissionVisionProps) {
//   const isDark = variant === 'dark';

//   return (
//     <Section
//       className={`relative z-20 py-20 md:py-28 ${
//         isDark ? 'bg-ink text-white' : 'bg-surface border-warm-gray-200/80 border-t'
//       }`}
//     >
//       <Container>
//         <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
//           {/* Mission Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 24, scale: 0.98 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
//               isDark
//                 ? 'hover:border-gold/40 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08]'
//                 : 'border-warm-gray-200 hover:border-gold bg-white shadow-xs hover:shadow-xl'
//             }`}
//           >
//             <div className="flex items-center gap-3">
//               <Target className="text-gold h-6 w-6 transition-transform group-hover:rotate-12" />
//               <h3
//                 className={`font-serif text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-ink'}`}
//               >
//                 Our Mission
//               </h3>
//             </div>
//             <p
//               className={`mt-4 text-sm leading-relaxed font-light ${
//                 isDark ? 'text-warm-gray-300' : 'text-warm-gray-700'
//               }`}
//             >
//               {mission}
//             </p>
//           </motion.div>

//           {/* Vision Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 24, scale: 0.98 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
//             className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
//               isDark
//                 ? 'hover:border-gold/40 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08]'
//                 : 'border-warm-gray-200 hover:border-gold bg-white shadow-xs hover:shadow-xl'
//             }`}
//           >
//             <div className="flex items-center gap-3">
//               <Eye className="text-gold h-6 w-6 transition-transform group-hover:scale-110" />
//               <h3
//                 className={`font-serif text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-ink'}`}
//               >
//                 Our Vision
//               </h3>
//             </div>
//             <p
//               className={`mt-4 text-sm leading-relaxed font-light ${
//                 isDark ? 'text-warm-gray-300' : 'text-warm-gray-700'
//               }`}
//             >
//               {vision}
//             </p>
//           </motion.div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
