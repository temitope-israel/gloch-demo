// components/sections/hero/Hero.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { Container } from '@/components/ui/Container';
import { heroSlides } from '@/constants/hero';
import { stats } from '@/constants/stats';
import { StatCounter } from '@/components/sections/stats/StatCounter';
import { buttonVariants } from '@/components/ui/button-variants';

const fadeUpVariant = {
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
};

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialize Embla Carousel for slide progression
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, playOnInit: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const currentSlide = heroSlides[selectedIndex];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-zinc-950 py-24 lg:min-h-screen"
    >
      {/* 1. DIRECT BACKGROUND IMAGE RENDER (Smooth Cross-fade) */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-zinc-950">
        {/* Removing mode="wait" prevents the black flash by cross-fading images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={heroSlides[selectedIndex].id || selectedIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={heroSlides[selectedIndex].image}
              alt={heroSlides[selectedIndex].headline}
              fill
              priority
              sizes="100vw"
              className="pointer-events-none object-cover object-center select-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 z-10 bg-zinc-950/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-950/30 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
      </div>

      {/* Hidden Embla Carousel ref to drive timer state smoothly */}
      <div className="hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="min-w-full" />
          ))}
        </div>
      </div>

      {/* 2. DYNAMIC TEXT CONTENT */}
      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 items-center  gap-12 lg:grid-cols-12">
          <div className="max-w-3xl lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial="initial"
                animate="animate"
                exit="exit"
                /* Stagger increased by 20% (0.1 -> 0.12) */
                transition={{ staggerChildren: 0.12 }}
                className="flex flex-col items-start"
              >
                {/* Eyebrow */}
                <motion.div
                  variants={fadeUpVariant}
                  /* Duration increased by 20% (0.6 -> 0.72) */
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 backdrop-blur-md"
                >
                  <span className="bg-gold h-1.5 w-1.5 animate-pulse rounded-full" />
                  <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                    {currentSlide.eyebrow}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeUpVariant}
                  /* Duration increased by 20% (0.7 -> 0.84) */
                  transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl leading-[1.1] font-light tracking-tight text-white antialiased sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {currentSlide.headline}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={fadeUpVariant}
                  /* Duration increased by 20% (0.7 -> 0.84) */
                  transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 max-w-xl font-sans text-base leading-relaxed font-light tracking-wide text-zinc-300/90 md:text-lg"
                >
                  {currentSlide.subheading}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={fadeUpVariant}
                  /* Duration increased by 20% (0.7 -> 0.84) */
                  transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={currentSlide.primaryCta.href}
                    className={buttonVariants({
                      variant: 'primary',
                      size: 'lg',
                      className:
                        'bg-gold hover:bg-gold-dark shadow-gold/15 rounded-full px-8 py-4 font-sans font-medium tracking-wide text-zinc-950 shadow-lg transition-all duration-300 hover:scale-[1.02]',
                    })}
                  >
                    {currentSlide.primaryCta.label}
                  </a>

                  <a
                    href={currentSlide.secondaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-sans text-sm font-medium tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                  >
                    {currentSlide.secondaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3. NAVIGATION CONTROLS */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollTo(index)}
                className="group relative flex h-8 items-center focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    selectedIndex === index
                      ? 'bg-gold w-12'
                      : 'w-4 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
            <span className="ml-3 font-mono text-xs font-medium text-zinc-400">
              0{selectedIndex + 1} / 0{heroSlides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="hover:border-gold hover:text-gold flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900/40 text-white backdrop-blur-md transition-all"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="hover:border-gold hover:text-gold flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900/40 text-white backdrop-blur-md transition-all"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* 4. FLOATING STAT CARDS (Uses constants/stats.ts & StatCounter.tsx) */}
      <div className="absolute top-1/2 right-8 z-20 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {stats.map((stat, i) => (
          <StatCounter
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={0.4 + i * 0.12}
          />
        ))}
      </div>

      {/* 5. SCROLL INDICATOR */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="group flex cursor-pointer flex-col items-center gap-1"
        >
          <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-zinc-500 uppercase transition-colors group-hover:text-white">
            Scroll
          </span>
          <ChevronDown
            className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
