// components/sections/featured-properties/FeaturedProperties.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from './PropertyCard';
import { buttonVariants } from '@/components/ui/button-variants';
import { featuredProperties } from '@/constants/properties';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

export function FeaturedProperties() {
  return (
    <Section
      id="properties"
      className="bg-background text-foreground transition-colors duration-300"
    >
      <Container>
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Latest Projects"
          description="A curated selection of our current premium offerings across choice destinations."
          align="center"
          className="mx-auto"
        />

        {/* Properties presentation display grid matrix */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call-To-Action trigger button zone */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            style={{ borderRadius: 'var(--radius-button)' }}
          >
            View All Properties
          </a>
        </div>
      </Container>
    </Section>
  );
}
