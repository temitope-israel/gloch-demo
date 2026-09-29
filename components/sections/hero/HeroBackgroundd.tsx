// components/sections/hero/HeroBackground.tsx
'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/constants/hero';
import { cn } from '@/lib/utils'; // Optional utility

interface HeroBackgroundProps {
  selectedIndex: number;
}

export function HeroBackground({ selectedIndex }: HeroBackgroundProps) {
  // Extract just the images from the main slides data
  const currentImageUrl = heroSlides[selectedIndex].image;
  const currentAltText = heroSlides[selectedIndex].headline;

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-zinc-950">
      {/* ---------------- BACKGROUND IMAGE (Cross-fade) ---------------- */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={selectedIndex} // Unique key ensures a new animation triggers on change
          initial={{ opacity: 0, scale: 1.1 }} // Start slightly zoomed in and faded
          animate={{ opacity: 1, scale: 1.05 }} // Fade in and zoom slightly
          exit={{ opacity: 0, scale: 1.05 }} // Fade out
          transition={{
            duration: 1.5, // Smooth, slow cross-fade
            ease: [0.33, 1, 0.68, 1], // Custom sophisticated ease-out
          }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={currentImageUrl}
            alt={currentAltText}
            fill
            priority // Treat as high-priority, crucial for LCP performance
            sizes="100vw" // Responsive image size
            className={cn(
              'pointer-events-none object-cover select-none',
              'transition-transform duration-[12000ms] ease-out' // Slow "Ken Burns" subtle zoom while active
            )}
            style={
              {
                // The `scale: 1.05` is handled by motion, but we can add a persistent slow zoom
                // If you want the slow continuous zoom, use `scale: isActive ? 1.05 : 1.00` logic instead of motion scale.
                // This basic motion approach is often smoother.
              }
            }
          />
        </motion.div>
      </AnimatePresence>

      {/* ---------------- Sophisticated Layered Vignette ---------------- */}

      {/* 1. Base Darkening Layer (uniform darken) */}
      <div className="absolute inset-0 z-10 bg-zinc-950/0" />

      {/* 2. Side Vignette (gradual darkening from right to left, helps readability on right side) */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-l from-zinc-950/0 via-transparent to-transparent" /> */}

      {/* 3. Main Text-Readability Gradient (darkens from top-left, where text usually lives) */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-br from-zinc-950 via-zinc-950/0 to-transparent" /> */}

      {/* 4. Bottom Vignette (gradual darkening towards the bottom, aids page transition) */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" /> */}

      {/* Optional: Radial Vignette (darkens corners) */}
      {/* <div className="absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" /> */}
    </div>
  );
}


