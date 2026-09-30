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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll position to show/hide arrows & update active index indicator
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    // Show left arrow only if user has scrolled away from the start
    setCanScrollLeft(scrollLeft > 10);

    // Show right arrow only if user hasn't reached the end
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Determine current active card index for pagination indicators
    const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, featuredProperties.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    handleScroll(); // Initial check
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;

    const scrollAmount = clientWidth * 0.8;
    const targetScroll =
      direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  const scrollToProperty = (index: number) => {
    if (!scrollContainerRef.current) return;
    const card = scrollContainerRef.current.children[index] as HTMLElement;
    if (card) {
      scrollContainerRef.current.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section
      id="properties"
      className="bg-background text-foreground relative overflow-x-hidden py-20 transition-colors duration-300"
    >
      {/* Title & Description strictly inside Container bounds */}
      <Container>
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Featured Projects"
          description="A curated selection of our current premium offerings across choice destinations."
          align="center"
          className="mx-auto"
        />
      </Container>

      {/* Full-Width Track Container with Floating Arrows */}
      <div className="relative mt-12 w-full">
        {/* Floating Arrow Left - Hidden until user scrolls on mobile/desktop */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="hover:text-gold absolute top-1/2 left-2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/90 sm:left-4 md:left-8 lg:left-[calc((100vw-min(100vw,1280px))/2+1.5rem)]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Floating Arrow Right - Hidden when reached end */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="hover:text-gold absolute top-1/2 right-2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/90 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Asymmetric Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="ml-auto flex w-full snap-x snap-mandatory [scrollbar-width:none] gap-2.5 overflow-x-auto scroll-smooth pr-0 pl-0 sm:w-[90vw] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="w-[100vw] min-w-[100vw] flex-shrink-0 snap-start sm:w-[40vw] sm:min-w-[40vw] md:w-[28vw] md:min-w-[28vw] lg:w-[18vw] lg:min-w-[18vw] xl:w-[25vw] xl:min-w-[25vw]"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Interactive Indicator Boxes */}
      <div className="mt-6 flex justify-center gap-2 sm:hidden">
        {featuredProperties.map((property, idx) => (
          <button
            key={property.id}
            onClick={() => scrollToProperty(idx)}
            aria-label={`Go to property ${idx + 1}`}
            className={`h-2 cursor-pointer transition-all duration-300 ${
              activeIndex === idx ? 'bg-gold w-2' : 'w-2 bg-gold/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom CTA Button */}
      <Container>
        <div className="mt-10 flex justify-center sm:mt-14">
          <Link
            href="/properties"
            className={buttonVariants({ variant: 'primary', size: 'lg' })}
            style={{ borderRadius: 'var(--radius-button)' }}
          >
            View All Properties
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// 'use client';

// import { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { Container } from '@/components/ui/Container';
// import { Section } from '@/components/ui/Section';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { PropertyCard } from './PropertyCard';
// import { buttonVariants } from '@/components/ui/button-variants';
// import { featuredProperties } from '@/constants/properties';

// export function FeaturedProperties() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (!scrollContainerRef.current) return;
//     const { scrollLeft, clientWidth } = scrollContainerRef.current;

//     const scrollAmount = clientWidth * 0.4;
//     const targetScroll =
//       direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

//     scrollContainerRef.current.scrollTo({
//       left: targetScroll,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <Section
//       id="properties"
//       className="bg-background text-foreground relative overflow-x-hidden py-20 transition-colors duration-300"
//     >
//       {/* Title & Description strictly inside Container bounds */}
//       <Container>
//         <SectionHeading
//           eyebrow="Curated Portfolio"
//           title="Featured Projects"
//           description="A curated selection of our current premium offerings across choice destinations."
//           align="center"
//           className="mx-auto"
//         />
//       </Container>

//       {/*
//         Full-Width Track Container with Floating Arrows
//       */}
//       <div className="relative mt-12 w-full">
//         {/* Floating Arrow Left - Pinned near left container margin */}
//         <button
//           onClick={() => scroll('left')}
//           aria-label="Scroll left"
//           className="hover:text-gold absolute top-1/2 left-4 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/90 sm:left-8 md:left-12 lg:left-[calc((100vw-min(100vw,1280px))/2+1.5rem)]"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>

//         {/* Floating Arrow Right - Pinned to the right viewport edge */}
//         <button
//           onClick={() => scroll('right')}
//           aria-label="Scroll right"
//           className="hover:text-gold absolute top-1/2 right-4 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/90"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/*
//           Asymmetric Scroll Track:
//           - Left padding dynamically aligns the 1st card with the <Container> grid
//           - Right side has 0 padding (pr-0) so cards bleed edge-to-edge off the right viewport
//           - [scrollbar-width:none] & [&::-webkit-scrollbar]:hidden eliminate the horizontal scrollbar
//         */}
//         <div
//           ref={scrollContainerRef}
//           className="ml-auto flex w-[90vw] snap-x snap-mandatory [scrollbar-width:none] gap-2.5 overflow-x-auto scroll-smooth pr-0 pl-0 [&::-webkit-scrollbar]:hidden"
//         >
//           {featuredProperties.map((property) => (
//             <div
//               key={property.id}
//               className="w-[65vw] min-w-[65vw] flex-shrink-0 snap-start sm:w-[40vw] sm:min-w-[40vw] md:w-[28vw] md:min-w-[28vw] lg:w-[18vw] lg:min-w-[18vw] xl:w-[25vw] xl:min-w-[25vw]"
//             >
//               <PropertyCard property={property} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom CTA Button */}
//       <Container>
//         <div className="mt-14 flex justify-center">
//           <Link
//             href="/properties"
//             className={buttonVariants({ variant: 'primary', size: 'lg' })}
//             style={{ borderRadius: 'var(--radius-button)' }}
//           >
//             View All Properties
//           </Link>
//         </div>
//       </Container>
//     </Section>
//   );
// }
