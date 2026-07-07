// components/sections/services/ServiceRow.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/constants/services';

interface ServiceRowProps {
  service: Service;
  reversed?: boolean;
}

export function ServiceRow({ service, reversed = false }: ServiceRowProps) {
  return (
    <div className="group grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Image Block with Luxury Ken Burns Over-Scale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        // UPGRADE: Uses explicit order classes based on the reversed state, removing buggy child selectors
        className={`shadow-soft relative aspect-[4/3] w-full overflow-hidden ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
        style={{ borderRadius: 'var(--radius-card)' }}
      >
        {/* Soft layout outline reflect */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[--radius-card] border border-black/[0.04] dark:border-white/[0.04]" />

        <Image
          src={service.image}
          alt={service.title}
          fill
          // UPGRADE: Dynamic transition scale inside the crop bounds when hover occurs anywhere on the block
          className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </motion.div>

      {/* Copywriting Content Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={reversed ? 'lg:order-1' : 'lg:order-2'}
      >
        <h3 className="text-h2 text-foreground font-serif leading-tight font-light tracking-tight">
          {service.title}
        </h3>

        <p className="text-body lg:text-body-lg text-warm-gray-700 dark:text-warm-gray-300 mt-4 font-sans leading-relaxed font-light tracking-wide">
          {service.description}
        </p>

        {/* UPGRADE: Replaced heavy block buttons with an elegant editorial text anchor link */}
        <div className="mt-8">
          <a
            href={service.cta.href}
            className="group/link text-small text-foreground hover:text-gold inline-flex items-center gap-2 font-sans font-medium tracking-wider transition-colors duration-300"
          >
            <span className="relative py-1">
              {service.cta.label}
              {/* Animated baseline underline */}
              <span className="bg-gold absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-50 transition-transform duration-300 group-hover/link:scale-x-100" />
            </span>
            <ArrowRight className="text-gold h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// // components/sections/services/ServiceRow.tsx
// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { buttonVariants } from '@/components/ui/button-variants'
// import type { Service } from '@/constants/services'
// import { cn } from '@/lib/utils'

// interface ServiceRowProps {
//   service: Service
//   reversed?: boolean // controls whether image sits left or right
// }

// export function ServiceRow({ service, reversed = false }: ServiceRowProps) {
//   return (
//     <div
//       className={cn(
//         'grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16',
//         // On large screens, this flips which column the image occupies —
//         // on mobile, order doesn't matter since it's a single column anyway,
//         // so image always appears first there for a consistent scroll flow.
//         reversed && 'lg:[&>*:first-child]:order-2'
//       )}
//     >
//       <motion.div
//         initial={{ opacity: 0, x: reversed ? 40 : -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//         className="relative aspect-[4/3] w-full overflow-hidden rounded-[--radius-card]"
//       >
//         <Image
//           src={service.image}
//           alt={service.title}
//           fill
//           className="object-cover"
//           sizes="(min-width: 1024px) 50vw, 100vw"
//         />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: reversed ? -40 : 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//       >
//         <h3 className="font-serif text-h2 text-foreground">{service.title}</h3>
//         <p className="mt-4 text-body-lg leading-relaxed text-warm-gray-700 dark:text-warm-gray-300">
//           {service.description}
//         </p>

//        <a   href={service.cta.href}
//           className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'mt-8 inline-flex')}
//         >
//           {service.cta.label}
//         </a>
//       </motion.div>
//     </div>
//   )
// }
