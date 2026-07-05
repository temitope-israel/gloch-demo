// components/sections/services/ServiceRow.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button-variants'
import type { Service } from '@/constants/services'
import { cn } from '@/lib/utils'

interface ServiceRowProps {
  service: Service
  reversed?: boolean // controls whether image sits left or right
}

export function ServiceRow({ service, reversed = false }: ServiceRowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16',
        // On large screens, this flips which column the image occupies —
        // on mobile, order doesn't matter since it's a single column anyway,
        // so image always appears first there for a consistent scroll flow.
        reversed && 'lg:[&>*:first-child]:order-2'
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[--radius-card]"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-serif text-h2 text-foreground">{service.title}</h3>
        <p className="mt-4 text-body-lg leading-relaxed text-warm-gray-700 dark:text-warm-gray-300">
          {service.description}
        </p>

       <a   href={service.cta.href}
          className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'mt-8 inline-flex')}
        >
          {service.cta.label}
        </a>
      </motion.div>
    </div>
  )
}