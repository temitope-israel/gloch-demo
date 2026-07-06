// components/sections/testimonials/Testimonials.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '@/constants/testimonials';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Testimonials() {
  // align: 'start' + a fractional basis (set via Tailwind below) is what
  // lets multiple cards show per view, rather than one full-width slide.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Keeps our own selectedIndex state in sync with Embla's internal
    // position — needed for highlighting the active dot indicator below.
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect(); // set initial state on mount
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <Section className="bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real experiences from people who trusted us with their investment."
            align="center"
            className="mx-auto"
          />
        </motion.div>
        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_60%] lg:flex-[0_0_33.3334%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls: arrows + dot indicators */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="border-border text-foreground hover:border-gold-accessible hover:text-gold-accessible dark:hover:border-gold dark:hover:text-gold flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={cn(
                    'h-2 w-2 rounded-full transition-all',
                    selectedIndex === index ? 'bg-gold w-6' : 'bg-warm-gray-300'
                  )}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
             className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold-accessible hover:text-gold-accessible dark:hover:border-gold dark:hover:text-gold">
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
