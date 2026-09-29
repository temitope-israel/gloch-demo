// components/sections/hero/Hero.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { heroSlides } from '@/constants/hero';

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handleVideoEnded = () => {
    handleNext();
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-[#0A0A0A] pb-20"
    >
      {/* 1. PERSISTENT VIDEO STACK */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1200 ease-in-out ${
                isActive ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
              }`}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={slide.video}
                poster={slide.poster}
                autoPlay={index === 0}
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="h-full w-full object-cover object-center"
              />
            </div>
          );
        })}

        {/* Ambient Dark Gradients */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A]/35 via-transparent to-black/30" />
      </div>

      {/* 2. CENTERED BOTTOM SLIDER CONTROLS (3 SMALL SQUARES) */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2.5">
        {heroSlides.map((_, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 w-1.5 transition-all duration-500 focus:outline-none ${
                isActive
                  ? 'scale-110 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>

      {/* 3. MAIN CONTENT AREA + INTEGRATED GRADIENT LINES */}
      <Container className="relative z-30 mb-6 w-full">
        {/* Absolute Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-50 hidden grid-cols-3 md:grid">
          <div className="relative h-full">
            <div
              className="absolute right-0 bottom-0 h-full w-[1px]"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 0.45) 85%)',
              }}
            />
          </div>
          <div className="relative h-full">
            <div
              className="absolute right-0 bottom-0 h-full w-[1px]"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 0.45) 85%)',
              }}
            />
          </div>
          <div className="h-full" />
        </div>

        {/* 3-Column Interactive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {heroSlides.map((slide, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className="relative flex cursor-pointer flex-col justify-end px-4 sm:px-6"
              >
                {/* PERSISTENT COLUMN TAB TITLE */}
                <motion.div
                  layout
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="z-20"
                >
                  <span
                    className={`font-serif text-lg font-normal transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {slide.tabTitle}
                  </span>
                </motion.div>

                {/* SLIDING MAIN HEADLINE & CTA UNDERNEATH */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        height: 0,
                        transition: { duration: 0.4, ease: 'easeInOut' },
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="mt-3 flex flex-col items-start overflow-hidden"
                    >
                      {/* Eyebrow / Sub-headline */}
                      {slide.eyebrow && (
                        <span className="mb-2 font-sans text-xs font-medium tracking-wide text-white/90">
                          {slide.eyebrow}
                        </span>
                      )}

                      {/* Main Headline */}
                      <h1 className="font-serif text-3xl leading-tight font-normal tracking-tight text-[#FAFAF8] sm:text-4xl lg:text-5xl">
                        {slide.headline}
                      </h1>

                      {/* Bordered Button */}
                      <a
                        href={slide.cta.href}
                        className="mt-6 inline-block border border-white/80 bg-black/20 px-6 py-2.5 font-sans text-[11px] font-semibold tracking-widest text-[#FAFAF8] uppercase backdrop-blur-xs transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0A0A0A]"
                      >
                        {slide.cta.label}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
