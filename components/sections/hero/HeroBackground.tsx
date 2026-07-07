// components/sections/hero/HeroBackground.tsx
'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { heroImages } from '@/constants/hero';

export function HeroBackground() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 40, // Pure numeric value for Embla's internal slide engine
      watchSlides: true,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ]
  );

  return (
    <div className="absolute inset-0 -z-10 bg-zinc-950">
      {/* Viewport wrapper container */}
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        {/* Inner flex container track */}
        <div className="flex h-full w-full">
          {heroImages.map((src, index) => (
            <div
              key={src}
              // Explicit basic layout parameters so it cannot collapse to 0px
              className="relative h-full w-full min-w-full shrink-0 grow-0"
            >
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                className="pointer-events-none object-cover select-none"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layered vignette overlay utilizing v4 colors */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-transparent to-black/50" />
    </div>
  );
}

// // components/sections/hero/HeroBackground.tsx
// 'use client';

// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Image from 'next/image';
// import { heroImages } from '@/constants/hero';

// export function HeroBackground() {
//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//       duration: 40, // Controls the smoothness/speed of the slide (higher = smoother)
//       watchSlides: true,
//     },
//     [
//       Autoplay({
//         delay: 5000, // Time spent viewing an image before sliding (5s)
//         stopOnInteraction: false,
//         playOnInit: true,
//       }),
//     ]
//   );

//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
//       {/* Viewport container */}
//       <div className="h-full w-full overflow-hidden" ref={emblaRef}>
//         {/* Embla's required inner container container — holds all slides in a row */}
//         <div className="flex h-full will-change-transform">
//           {heroImages.map((src, index) => (
//             <div
//               key={src}
//               // Each slide takes exactly 100% width, relative positioned, with no shrinking
//               className="relative h-full w-full min-w-0 flex-[0_0_100%]"
//             >
//               <Image
//                 src={src}
//                 alt=""
//                 fill
//                 priority={index === 0}
//                 className="pointer-events-none object-cover select-none"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dark overlay gradient sits on top to keep text perfectly legible */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
//     </div>
//   );
// }

// // components/sections/hero/HeroBackground.tsx
// 'use client';

// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Fade from 'embla-carousel-fade';
// import Image from 'next/image';
// import { heroImages } from '@/constants/hero';

// export function HeroBackground() {
//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//       duration: 45, // FIX: Placed duration here. Default is 25. Higher numbers make the fade transition slower & smoother.
//     },
//     [Fade(), Autoplay({ delay: 6000, stopOnInteraction: false })]
//   );

//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <div className="h-full overflow-hidden" ref={emblaRef}>
//         <div className="flex h-full">
//           {heroImages.map((src, index) => (
//             <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
//               <Image
//                 src={src}
//                 alt=""
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
//     </div>
//   );
// }

// // components/sections/hero/HeroBackground.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Image from 'next/image';
// import { heroImages } from '@/constants/hero';

// export function HeroBackground() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       watchSlides: false,
//     },
//     [Autoplay({ delay: 6000, stopOnInteraction: false })]
//   );

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     emblaApi.on('select', onSelect);
//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi]);

//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
//       <div className="h-full overflow-hidden" ref={emblaRef}>
//         <div className="relative h-full w-full">
//           {heroImages.map((src, index) => {
//             const isActive = index === selectedIndex;

//             return (
//               <div
//                 key={src}
//                 // CRITICAL FIX: We changed how opacity transitions are handled.
//                 // The incoming active slide now transitions into view over 1200ms.
//                 // The outgoing slide drops its opacity slower (duration-1000) so it
//                 // remains fully visible underneath while the new image overlays it.
//                 className={`absolute inset-0 h-full w-full transition-opacity ease-in-out ${
//                   isActive
//                     ? 'z-10 opacity-100 duration-[1200ms]'
//                     : 'z-0 opacity-0 delay-300 duration-[1000ms]'
//                 }`}
//               >
//                 <Image
//                   src={src}
//                   alt=""
//                   fill
//                   priority={index === 0}
//                   className="object-cover"
//                   sizes="100vw"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
//     </div>
//   );
// }

// // components/sections/hero/HeroBackground.tsx
// 'use client';

// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Fade from 'embla-carousel-fade';
// import Image from 'next/image';
// import { heroImages } from '@/constants/hero';

// export function HeroBackground() {
//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//       duration: 45, // FIX: Placed duration here. Default is 25. Higher numbers make the fade transition slower & smoother.
//     },
//     [Fade(), Autoplay({ delay: 6000, stopOnInteraction: false })]
//   );

//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <div className="h-full overflow-hidden" ref={emblaRef}>
//         <div className="flex h-full">
//           {heroImages.map((src, index) => (
//             <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
//               <Image
//                 src={src}
//                 alt=""
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
//     </div>
//   );
// }

// // components/sections/hero/HeroBackground.tsx
// 'use client';

// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Fade from 'embla-carousel-fade';
// import Image from 'next/image';
// import { heroImages } from '@/constants/hero';

// export function HeroBackground() {
//   // Embla manages its own internal DOM structure and transition logic —
//   // we don't need useState/useEffect/setInterval ourselves anymore.
//   // The library handles mounting, timing, and transitions internally,
//   // using techniques that are proven stable across browsers/GPUs at scale.
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     Fade(),
//     Autoplay({ delay: 6000, stopOnInteraction: false }),
//   ]);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* emblaRef attaches to the "viewport" — the visible window */}
//       <div className="h-full overflow-hidden" ref={emblaRef}>
//         {/* Embla's required inner "container" — holds all slides in a row */}
//         <div className="flex h-full">
//           {heroImages.map((src, index) => (
//             // Each "slide" — Embla's fade plugin handles the opacity
//             // transitions between these internally, we don't write any
//             // opacity/animation CSS ourselves at all.
//             <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
//               <Image
//                 src={src}
//                 alt=""
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
//     </div>
//   );
// }
