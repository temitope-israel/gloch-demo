// components/sections/about/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { aboutContent } from '@/constants/about';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function About() {
  return (
    <Section
      id="about"
      className="bg-surface text-foreground border-t border-[--color-border] transition-colors duration-300"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left Block: CEO Image + Signature Cover Panel (Takes 5 Grid Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24 w-full lg:col-span-5"
          >
            {/* Image Stage wrapper container with an understated architectural depth shadow */}
            <div
              className="shadow-soft-lg relative aspect-[3/4] w-full overflow-hidden border border-black/[0.04] dark:border-white/[0.04]"
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              <Image
                src={aboutContent.ceo.image}
                alt={aboutContent.ceo.name}
                fill
                className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-102"
                sizes="(min-width: 1024px) 35vw, 90vw"
              />
            </div>

            {/* Founder Caption Context Card */}
            <div className="mt-8 px-2">
              <p className="text-h3 text-foreground font-serif font-light tracking-tight">
                {aboutContent.ceo.name}
              </p>
              <p className="text-small text-warm-gray-500 mt-1 font-sans font-medium tracking-widest uppercase">
                {aboutContent.ceo.role}
              </p>

              <div className="relative mt-5 border-t border-[--color-border] pt-5">
                {/* Custom system gold decorative bracket */}
                <span className="bg-gold absolute top-0 left-0 h-[2px] w-8" />
                <p className="text-gold text-body-lg font-serif leading-relaxed tracking-wide text-balance italic">
                  “{aboutContent.ceo.signatureQuote}”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Narrative Story, Mission, Vision Grid (Takes 7 Grid Columns) */}
          <motion.div
            variants={containerVariants}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7 lg:pt-4"
          >
            {/* System Token Eyebrow */}
            <span className="text-gold text-small mb-4 block font-sans font-semibold tracking-[0.3em] uppercase drop-shadow-sm">
              {aboutContent.eyebrow}
            </span>

            <h2 className="text-h1 text-foreground font-serif leading-[1.15] font-light tracking-tight">
              {aboutContent.title}
            </h2>

            {/* Editorial Story Layout Wrap */}
            <div className="mt-8 space-y-5">
              {aboutContent.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-body md:text-body-lg text-warm-gray-700 dark:text-warm-gray-300 font-sans leading-relaxed font-light tracking-wide"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Rebuilt Mission & Vision Display Grid Matrix */}
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[--color-border] pt-10 sm:grid-cols-2">
              {/* Mission Statement Block */}
              <div className="group relative">
                <div className="flex items-center gap-3">
                  <span className="bg-gold h-1.5 w-1.5 rounded-full" />
                  <h3 className="text-foreground text-h3 font-serif font-light tracking-tight">
                    Our Mission
                  </h3>
                </div>
                <p className="text-small text-warm-gray-700 dark:text-warm-gray-400 mt-3 font-sans leading-relaxed font-light tracking-wide">
                  {aboutContent.mission}
                </p>
              </div>

              {/* Vision Statement Block */}
              <div className="group relative">
                <div className="flex items-center gap-3">
                  <span className="bg-gold h-1.5 w-1.5 rounded-full" />
                  <h3 className="text-foreground text-h3 font-serif font-light tracking-tight">
                    Our Vision
                  </h3>
                </div>
                <p className="text-small text-warm-gray-700 dark:text-warm-gray-400 mt-3 font-sans leading-relaxed font-light tracking-wide">
                  {aboutContent.vision}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// // components/sections/about/About.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { aboutContent } from '@/constants/about';

// export function About() {
//   return (
//     <Section id="about" className="bg-surface">
//       <Container>
//         <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
//           {/* CEO Image + Signature */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[--radius-card]">
//               <Image
//                 src={aboutContent.ceo.image}
//                 alt={aboutContent.ceo.name}
//                 fill
//                 className="object-cover"
//                 sizes="(min-width: 1024px) 40vw, 80vw"
//               />
//             </div>

//             <div className="mt-6">
//               <p className="text-h3 text-foreground font-serif">{aboutContent.ceo.name}</p>
//               <p className="text-warm-gray-500 mt-1 text-sm">{aboutContent.ceo.role}</p>
//               <p className="text-gold-accessible mt-4 max-w-sm font-serif text-lg italic">
//                 “{aboutContent.ceo.signatureQuote}”
//               </p>
//             </div>
//           </motion.div>

//           {/* Story, Mission, Vision */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <span className="text-gold-accessible mb-3 block text-sm font-medium tracking-widest uppercase">
//               {aboutContent.eyebrow}
//             </span>
//             <h2 className="text-h1 text-foreground font-serif">{aboutContent.title}</h2>

//             <div className="mt-6 space-y-4">
//               {aboutContent.story.map((paragraph, i) => (
//                 <p
//                   key={i}
//                   className="text-body-lg text-warm-gray-700 dark:text-warm-gray-300 leading-relaxed"
//                 >
//                   {paragraph}
//                 </p>
//               ))}
//             </div>

//             <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
//               <div className="border-gold border-l-2 pl-4">
//                 <h3 className="text-foreground font-serif text-lg">Our Mission</h3>
//                 <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-2 text-sm leading-relaxed">
//                   {aboutContent.mission}
//                 </p>
//               </div>
//               <div className="border-gold border-l-2 pl-4">
//                 <h3 className="text-foreground font-serif text-lg">Our Vision</h3>
//                 <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-2 text-sm leading-relaxed">
//                   {aboutContent.vision}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
