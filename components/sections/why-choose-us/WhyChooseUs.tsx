// components/sections/why-choose-us/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyChooseUsItems } from '@/constants/why-choose-us';

export function WhyChooseUs() {
  return (
    // bg-background / text-foreground — THIS is the first section that
    // actually responds to the theme toggle. Light mode: warm off-white.
    // Dark mode: near-black. Watch this section specifically when toggling.
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Gloch"
          title="Built on Trust, Backed by Experience"
          description="We combine market expertise with complete transparency, so every decision you make is an informed one."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full">
                  <div className="bg-gold/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="text-gold h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-h3 text-foreground mt-5 font-serif">{item.title}</h3>
                  <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
