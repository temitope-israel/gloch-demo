// app/portfolio/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { buttonVariants } from '@/components/ui/button-variants';
import { portfolioListing } from '@/constants/portfolio/listing';
import { allProperties } from '@/constants/portfolio';

export default function PortfolioPage() {
  return (
    <main>
      {/* Full-viewport hero — same structural pattern as the homepage Hero:
          full height, background image, dark overlay, centered text.
          Static here (one image), since this is a supporting page, not
          the homepage, so a crossfade carousel would be unnecessary weight. */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero/hero-1.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/25 to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold mb-4 block text-sm font-medium tracking-widest uppercase"
            >
              {portfolioListing.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:text-display font-serif text-4xl leading-[1.1] text-white md:text-6xl"
            >
              {portfolioListing.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg text-white/80"
            >
              {portfolioListing.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <Link
                href={portfolioListing.cta.href}
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                {portfolioListing.cta.label}
              </Link>
            </motion.div>
          </div>
        </Container>

        {/* Scroll indicator — same pattern as the homepage Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-6 w-6 text-white/60" aria-hidden />
          </motion.div>
        </motion.div>
      </section>
      {/* Property grid */}

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {allProperties.map((property, i) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/portfolio/${property.slug}`} className="group block h-full">
                  <div className="border-border bg-surface hover:border-gold/40 flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-soft-lg)]">
                    {/* Tall Image Frame */}
                    <div className="bg-warm-gray-50 dark:bg-warm-gray-900 relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={property.heroImage}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>

                    {/* Text Card Content */}
                    <div className="bg-surface flex flex-1 flex-col justify-between p-6">
                      <div>
                        {/* Location label with brand gold dot */}
                        <div className="flex items-center gap-2">
                          <span className="bg-gold h-1.5 w-1.5 rounded-full" />
                          <p className="text-warm-gray-500 text-xs font-semibold tracking-widest uppercase">
                            {property.location}
                          </p>
                        </div>

                        <h3 className="text-foreground group-hover:text-gold-accessible dark:group-hover:text-gold-light mt-2 font-serif font-medium text-[var(--text-h3)] transition-colors">
                          {property.name}
                        </h3>
                      </div>

                      {/* Footer Link Indicator */}
                      <div className="border-border/60 text-warm-gray-700 dark:text-warm-gray-300 group-hover:text-foreground mt-6 flex items-center justify-between border-t pt-4 text-xs font-semibold tracking-wider uppercase">
                        <span>View Details</span>
                        <span className="text-gold transition-transform duration-300 group-hover:translate-x-1.5">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      {/* <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProperties.map((property, i) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/portfolio/${property.slug}`}>
                  <Card className="group h-full overflow-hidden p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={property.heroImage}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-foreground font-serif text-lg">{property.name}</p>
                      <p className="text-warm-gray-500 mt-1 text-sm">{property.location}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section> */}
    </main>
  );
}
