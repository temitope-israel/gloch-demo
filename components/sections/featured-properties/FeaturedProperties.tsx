'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from './PropertyCard';
import { buttonVariants } from '@/components/ui/button-variants';
import { featuredProperties } from '@/constants/properties';

export function FeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const extendedProperties = [...featuredProperties, ...featuredProperties, ...featuredProperties];
  const totalItems = featuredProperties.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideOffset, setSlideOffset] = useState(0);

  const updateOffset = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      // 0px gap on mobile; 8px (sm:gap-2) on tablet/desktop
      const gap = window.innerWidth < 640 ? 0 : 8;
      setSlideOffset(cardWidth + gap);
    }
  };

  useEffect(() => {
    updateOffset();

    // Double-check after paint in case card styles/fonts loaded late
    const timer = setTimeout(updateOffset, 100);
    window.addEventListener('resize', updateOffset);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex % totalItems);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems + (currentIndex % totalItems));
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isTransitioning]);

  const scroll = (direction: 'left' | 'right') => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => (direction === 'right' ? prev + 1 : prev - 1));
  };

  return (
    <Section
      id="properties"
      className="bg-background text-foreground relative overflow-x-hidden py-12 transition-colors duration-300 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Featured Projects"
          description="A curated selection of our current premium offerings across choice destinations."
          align="center"
        />
      </Container>

      {/* Track Outer Wrapper */}
      <div className="relative mt-8 w-full sm:mt-14">
        {/* Left Chevron (Desktop) */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute top-1/2 left-2 z-30 hidden -translate-y-1/2 cursor-pointer text-white/90 drop-shadow-md transition-transform hover:scale-110 active:scale-95 sm:left-4 sm:flex lg:left-[calc((100vw-min(100vw,1280px))/2+1rem)]"
        >
          <ChevronLeft className="h-12 w-12 stroke-[0.85]" />
        </button>

        {/* Right Chevron (Desktop) */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute top-1/2 right-2 z-30 hidden -translate-y-1/2 cursor-pointer text-white/90 drop-shadow-md transition-transform hover:scale-110 active:scale-95 sm:right-4 sm:flex md:right-6"
        >
          <ChevronRight className="h-12 w-12 stroke-[0.85]" />
        </button>

        {/* Outer Padding Box: Aligns cards on left with container margin on tablet/desktop */}
        <div className="pl-0 sm:pl-6 lg:pl-[calc((100vw-min(100vw,1280px))/2+2rem)]">
          <div className="w-full overflow-hidden sm:w-[calc(100%+50vw)]" ref={containerRef}>
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-0 sm:gap-2 ${
                isTransitioning
                  ? 'transition-transform duration-700 ease-[0.16,1,0.3,1]'
                  : 'transition-none'
              }`}
              style={{
                transform: `translateX(-${currentIndex * slideOffset}px)`,
              }}
            >
              {extendedProperties.map((property, idx) => (
                <div
                  key={`${property.id}-${idx}`}
                  ref={idx === 0 ? cardRef : null}
                  className="w-[100vw] min-w-[100vw] flex-shrink-0 sm:w-[340px] sm:min-w-[340px] md:w-[370px] md:min-w-[370px] lg:w-[370px] lg:min-w-[370px] xl:w-[370px] xl:min-w-[370px]"
                >
                  <PropertyCard
                    property={property}
                    onPrev={() => scroll('left')}
                    onNext={() => scroll('right')}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Indicator Rectangles / Slider Boxes */}
      <div className="mt-8 flex justify-center gap-1.5 sm:hidden">
        {featuredProperties.map((property, idx) => {
          const isActive = ((currentIndex % totalItems) + totalItems) % totalItems === idx;
          return (
            <button
              key={property.id}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to property ${idx + 1}`}
              className={`h-2 w-2 border transition-all duration-300 ${
                isActive
                  ? 'bg-gold border-gold scale-110'
                  : 'border-foreground/30 hover:border-foreground/60 bg-transparent'
              }`}
            />
          );
        })}
      </div>
    </Section>
  );
}

// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { PropertyCard } from './PropertyCard';
// import { buttonVariants } from '@/components/ui/button-variants';
// import { featuredProperties } from '@/constants/properties';

// export function FeaturedProperties() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const extendedProperties = [...featuredProperties, ...featuredProperties, ...featuredProperties];
//   const totalItems = featuredProperties.length;

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [slideOffset, setSlideOffset] = useState(0);

//   const updateOffset = () => {
//     if (cardRef.current) {
//       const cardWidth = cardRef.current.offsetWidth;
//       // 0px gap on mobile; 16px (gap-4) on tablet/desktop for clean spacing
//       const gap = window.innerWidth < 640 ? 0 : 8;
//       setSlideOffset(cardWidth + gap);
//     }
//   };

//   useEffect(() => {
//     updateOffset();

//     // Double-check after paint in case card styles/fonts loaded late
//     const timer = setTimeout(updateOffset, 100);
//     window.addEventListener('resize', updateOffset);
//     return () => {
//       clearTimeout(timer)
//       window.removeEventListener('resize', updateOffset);
//     }
//   }, []);

//   const handleTransitionEnd = () => {
//     if (currentIndex >= totalItems) {
//       setIsTransitioning(false);
//       setCurrentIndex(currentIndex % totalItems);
//     } else if (currentIndex < 0) {
//       setIsTransitioning(false);
//       setCurrentIndex(totalItems + (currentIndex % totalItems));
//     }
//   };

//   useEffect(() => {
//     if (!isTransitioning) {
//       const timer = requestAnimationFrame(() => {
//         setIsTransitioning(true);
//       });
//       return () => cancelAnimationFrame(timer);
//     }
//   }, [isTransitioning]);

//   const scroll = (direction: 'left' | 'right') => {
//     if (!isTransitioning) return;
//     setCurrentIndex((prev) => (direction === 'right' ? prev + 1 : prev - 1));
//   };

//   return (
//     <Section
//       id="properties"
//       className="bg-background text-foreground relative overflow-x-hidden py-12 transition-colors duration-300 sm:py-20"
//     >
//       <Container>
//         <SectionHeading
//           eyebrow="Curated Portfolio"
//           title="Featured Projects"
//           description="A curated selection of our current premium offerings across choice destinations."
//           align="center"
//         />
//       </Container>

//       {/* Track Outer Wrapper */}
//       <div className="relative mt-8 w-full sm:mt-14">
//         {/* Left Chevron (Desktop) */}
//         <button
//           onClick={() => scroll('left')}
//           aria-label="Scroll left"
//           className="absolute top-1/2 left-2 z-30 hidden -translate-y-1/2 cursor-pointer text-white/90 drop-shadow-md transition-transform hover:scale-110 active:scale-95 sm:left-4 sm:flex lg:left-[calc((100vw-min(100vw,1280px))/2+1rem)]"
//         >
//           <ChevronLeft className="h-12 w-12 stroke-[0.85]" />
//         </button>

//         {/* Right Chevron (Desktop) */}
//         <button
//           onClick={() => scroll('right')}
//           aria-label="Scroll right"
//           className="absolute top-1/2 right-2 z-30 hidden -translate-y-1/2 cursor-pointer text-white/90 drop-shadow-md transition-transform hover:scale-110 active:scale-95 sm:right-4 sm:flex md:right-6"
//         >
//           <ChevronRight className="h-12 w-12 stroke-[0.85]" />
//         </button>

//         {/* Outer Padding Box: Aligns cards on left with container margin on tablet/desktop */}
//         <div className="pl-0 sm:pl-6 lg:pl-[calc((100vw-min(100vw,1280px))/2+2rem)]">
//           <div className="w-full overflow-hidden sm:w-[calc(100%+50vw)]" ref={containerRef}>
//             <div
//               onTransitionEnd={handleTransitionEnd}
//               className={`flex gap-0 sm:gap-2 ${
//                 isTransitioning
//                   ? 'transition-transform duration-700 ease-[0.16,1,0.3,1]'
//                   : 'transition-none'
//               }`}
//               style={{
//                 transform: `translateX(-${currentIndex * slideOffset}px)`,
//               }}
//             >
//               {extendedProperties.map((property, idx) => (
//                 <div
//                   key={`${property.id}-${idx}`}
//                   ref={idx === 0 ? cardRef : null}
//                   className="w-[100vw] min-w-[100vw] flex-shrink-0 sm:w-[340px] sm:min-w-[340px] md:w-[380px] md:min-w-[380px] lg:w-[370px] lg:min-w-[370px] xl:w-[370px] xl:min-w-[370px]"
//                 >
//                   <PropertyCard
//                     property={property}
//                     onPrev={() => scroll('left')}
//                     onNext={() => scroll('right')}
//                   />
//                 </div>
//               ))}
//               {/* {extendedProperties.map((property, idx) => (
//                 <div
//                   key={`${property.id}-${idx}`}
//                   ref={idx === 0 ? cardRef : null}
//                   className="w-[100vw] min-w-[100vw] flex-shrink-0 sm:w-[340px] sm:min-w-[340px] lg:w-[370px] lg:min-w-[370px]"
//                 >
//                   <PropertyCard
//                     property={property}
//                     onPrev={() => scroll('left')}
//                     onNext={() => scroll('right')}
//                   />
//                 </div>
//               ))} */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Indicator Rectangles / Slider Boxes */}
//       <div className="mt-8 flex justify-center gap-1.5 sm:hidden">
//         {featuredProperties.map((property, idx) => {
//           const isActive = ((currentIndex % totalItems) + totalItems) % totalItems === idx;
//           return (
//             <button
//               key={property.id}
//               onClick={() => {
//                 setIsTransitioning(true);
//                 setCurrentIndex(idx);
//               }}
//               aria-label={`Go to property ${idx + 1}`}
//               className={`h-2 w-2 border transition-all duration-300 ${
//                 isActive
//                   ? 'bg-gold border-gold scale-110'
//                   : 'border-foreground/30 hover:border-foreground/60 bg-transparent'
//               }`}
//             />
//           );
//         })}
//       </div>

//       {/* Bottom CTA */}
//       {/* <Container>
//         <div className="mt-10 flex justify-center sm:mt-14">
//           <Link
//             href="/portfolio"
//             className={buttonVariants({ variant: 'primary', size: 'lg' })}
//             style={{ borderRadius: 'var(--radius-button)' }}
//           >
//             View All Properties
//           </Link>
//         </div>
//       </Container> */}
//     </Section>
//   );
// }
