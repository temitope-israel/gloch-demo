// components/sections/about/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { aboutContent } from '@/constants/about';

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* CEO Image + Signature */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[--radius-card]">
              <Image
                src={aboutContent.ceo.image}
                alt={aboutContent.ceo.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>

            <div className="mt-6">
              <p className="text-h3 text-foreground font-serif">{aboutContent.ceo.name}</p>
              <p className="text-warm-gray-500 mt-1 text-sm">{aboutContent.ceo.role}</p>
              <p className="text-gold-accessible mt-4 max-w-sm font-serif text-lg italic">
                “{aboutContent.ceo.signatureQuote}”
              </p>
            </div>
          </motion.div>

          {/* Story, Mission, Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold-accessible mb-3 block text-sm font-medium tracking-widest uppercase">
              {aboutContent.eyebrow}
            </span>
            <h2 className="text-h1 text-foreground font-serif">{aboutContent.title}</h2>

            <div className="mt-6 space-y-4">
              {aboutContent.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-body-lg text-warm-gray-700 dark:text-warm-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border-gold border-l-2 pl-4">
                <h3 className="text-foreground font-serif text-lg">Our Mission</h3>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-2 text-sm leading-relaxed">
                  {aboutContent.mission}
                </p>
              </div>
              <div className="border-gold border-l-2 pl-4">
                <h3 className="text-foreground font-serif text-lg">Our Vision</h3>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 mt-2 text-sm leading-relaxed">
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
