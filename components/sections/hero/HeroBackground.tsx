// components/sections/hero/HeroBackground.tsx
'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { heroImages } from '@/constants/hero';

export function HeroBackground() {
  // Embla manages its own internal DOM structure and transition logic —
  // we don't need useState/useEffect/setInterval ourselves anymore.
  // The library handles mounting, timing, and transitions internally,
  // using techniques that are proven stable across browsers/GPUs at scale.
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* emblaRef attaches to the "viewport" — the visible window */}
      <div className="h-full overflow-hidden" ref={emblaRef}>
        {/* Embla's required inner "container" — holds all slides in a row */}
        <div className="flex h-full">
          {heroImages.map((src, index) => (
            // Each "slide" — Embla's fade plugin handles the opacity
            // transitions between these internally, we don't write any
            // opacity/animation CSS ourselves at all.
            <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
    </div>
  );
}
