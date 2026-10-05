'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  position?: 'hero' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const galleryImages: GalleryImage[] = [
  {
    id: 'hero',
    src: '/images/gallery/living.jpg',
    alt: 'Inspiring the best of living',
    caption: 'Inspiring the best of living',
  },
  {
    id: 'top-left',
    src: '/images/gallery/lifestyle-1.jpg',
    alt: "Celebrate life's special moments",
    caption: "Celebrate life's special moments",
  },
  {
    id: 'top-right',
    src: '/images/gallery/lifestyle-4.jpg',
    alt: 'Active cycling lifestyle',
  },
  {
    id: 'bottom-left',
    src: '/images/gallery/lifestyle-3.jpg',
    alt: 'Family walking outdoors',
  },
  {
    id: 'bottom-right',
    src: '/images/gallery/lifestyle-2.jpg',
    alt: 'Curated experiences just for you',
    caption: 'Curated experiences just for you',
  },
];

export function LifestyleGallery() {
  return (
    <Section className="bg-background text-foreground py-16 sm:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-foreground font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
            A Gloch Way Of Life
          </h2>
        </div>

        {/* Seamless Grid with gap-0 */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-12">
          {/* Main Large Hero Image (Left Column) */}
          <div className="group relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-[3/4] lg:col-span-6 lg:aspect-square">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {galleryImages[0].caption && (
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10 max-w-md pr-6">
                  <h3 className="font-serif text-2xl font-light text-white sm:text-3xl lg:text-4xl">
                    {galleryImages[0].caption}
                  </h3>
                </div>
              </>
            )}
          </div>

          {/* Right Column: 2x2 Image Grid with gap-0 */}
          <div className="grid grid-cols-1 gap-0 sm:col-span-2 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-2">
            {/* Top-Left Image */}
            <div className="group relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              {galleryImages[1].caption && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 z-10">
                    <p className="font-sans text-sm font-medium text-white sm:text-base">
                      {galleryImages[1].caption}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Top-Right Image */}
            <div className="group relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            {/* Bottom-Left Image */}
            <div className="group relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            {/* Bottom-Right Image */}
            <div className="group relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              {galleryImages[4].caption && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 z-10">
                    <p className="font-sans text-sm font-medium text-white sm:text-base">
                      {galleryImages[4].caption}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
