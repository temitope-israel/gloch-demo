// components/sections/why-choose-us/WhyChooseUs.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { whyChooseUsItems } from '@/constants/why-choose-us';
import { Button } from '@/components/ui/Button';
import { ConsultationModal } from './ConsultationModal';

export function WhyChooseUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section className="text-foreground relative border-t border-[--color-border] bg-white py-28 transition-colors duration-300">
      <Container>
        <div className="flex flex-col gap-16 lg:grid-cols-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
            <div className="flex w-full justify-center">
              <div className="bg-gold/90 inline-flex items-center gap-2 rounded-full border border-amber-500/30 px-3.5 py-1 text-center backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
                  WELCOME TO GLOCH STYLISTICS LIMITED
                </span>
              </div>
            </div>

            <h2 className="text-foreground mt-6 text-center font-serif text-4xl leading-[1.15] font-light tracking-tight antialiased sm:text-5xl">
              Built on Trust, Backed by Experience
            </h2>

            <p className="text-warm-gray-700 mt-6 text-center font-sans text-base leading-relaxed font-light tracking-wide dark:text-zinc-300">
              We combine deep market intelligence with uncompromising transparency, ensuring every
              property decision you make is clear, informed, and lasting, whether you are acquiring
              a flagship home, expanding an investment portfolio, or securing prime commercial
              space. Our dedicated team simplifies complex transactions into confident steps. With
              us, your vision is supported by strategy, clarity, and uncompromising excellence.
            </p>
          </div>

          {/* Right Stacked Minimal List */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
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
                  className="group bg-surface hover:border-gold/50 border-gold relative flex items-start gap-4 rounded-2xl border p-4 transition-all duration-500 hover:shadow-xl sm:gap-6 sm:p-6"
                >
                  <span className="text-gold/60 group-hover:text-gold font-mono text-xs font-semibold transition-colors duration-300 sm:text-sm">
                    {indexFormatted}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-foreground group-hover:text-gold font-serif text-lg font-light transition-colors duration-300 sm:text-2xl">
                        {item.title}
                      </h3>
                      <Icon className="text-gold h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                    </div>

                    <p className="text-warm-gray-700 mt-2 font-sans text-xs leading-relaxed font-light sm:mt-3 sm:text-sm dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call-to-action Action Link Element Box */}
          <div className="flex items-center justify-center gap-8 md:flex">
            <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
              Book Consultation
            </Button>
          </div>
        </div>
      </Container>

      {/* Modal overlay triggered on click */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        whatsappNumber="2349169855031"
        contactEmail="info@glochstylistic.com" // replace with your email
      />
    </Section>
  );
}

// // components/sections/why-choose-us/WhyChooseUs.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { whyChooseUsItems } from '@/constants/why-choose-us';
// // import { cta } from '@/constants/cta';
// // import {buttonVariants} from '@/components/ui/button-variants';
// import { Button } from '@/components/ui/Button';
// // import { NavLinks } from './NavLinks';

// import Link from 'next/link';

// export function WhyChooseUs() {
//   return (
//     <Section className="text-foreground relative border-t border-[--color-border] bg-white py-28 transition-colors duration-300">
//       <Container>
//         <div className="flex flex-col gap-16 lg:grid-cols-12">
//           {/* Left Sticky Editorial Column */}
//           <div className="lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
//             <div className="flex w-full justify-center">
//               <div className="bg-gold/90 inline-flex items-center gap-2 rounded-full border border-amber-500/30 px-3.5 py-1 text-center backdrop-blur-md">
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
//                 <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
//                   WELCOME TO GLOCH STYLISTICS LIMITED
//                 </span>
//               </div>
//             </div>

//             <h2 className="text-foreground mt-6 text-center font-serif text-4xl leading-[1.15] font-light tracking-tight antialiased sm:text-5xl">
//               Built on Trust, Backed by Experience
//             </h2>

//             <p className="text-warm-gray-700 mt-6 text-center font-sans text-base leading-relaxed font-light tracking-wide dark:text-zinc-300">
//               We combine deep market intelligence with uncompromising transparency, ensuring every
//               property decision you make is clear, informed, and lasting, whether you are acquiring
//               a flagship home, expanding an investment portfolio, or securing prime commercial
//               space. Our dedicated team simplifies complex transactions into confident steps. With
//               us, your vision is supported by strategy, clarity, and uncompromising excellence.
//             </p>
//           </div>

//           {/* Right Stacked Minimal List */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
//             {whyChooseUsItems.map((item, index) => {
//               const Icon = item.icon;
//               const indexFormatted = String(index + 1).padStart(2, '0');

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.7, delay: index * 0.1 }}
//                   className="group bg-surface hover:border-gold/50 border-gold relative flex items-start gap-4 rounded-2xl border p-4 transition-all duration-500 hover:shadow-xl sm:gap-6 sm:p-6"
//                 >
//                   <span className="text-gold/60 group-hover:text-gold font-mono text-xs font-semibold transition-colors duration-300 sm:text-sm">
//                     {indexFormatted}
//                   </span>

//                   <div className="flex-1">
//                     <div className="flex items-center justify-between gap-2">
//                       <h3 className="text-foreground group-hover:text-gold font-serif text-lg font-light transition-colors duration-300 sm:text-2xl">
//                         {item.title}
//                       </h3>
//                       <Icon className="text-gold h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
//                     </div>

//                     <p className="text-warm-gray-700 mt-2 font-sans text-xs leading-relaxed font-light sm:mt-3 sm:text-sm dark:text-zinc-300">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//           {/* Call-to-action Action Link Element Box */}
//           <div className="flex justify-center items-center gap-8 md:flex">
//             <Link href="/contact">
//               <Button variant="primary" size="sm">
//                 Book Consultation
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
