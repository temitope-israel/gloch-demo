// components/sections/portfolio/PropertyGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles, MoveUpRight } from 'lucide-react';
import type { PropertyGallery as GalleryData } from '@/constants/portfolio/types';

const tabs = [
  { key: 'exterior', label: 'Exterior' },
  { key: 'interior', label: 'Interior' },
  { key: 'siteUpdate', label: 'Site Update' },
] as const;

export function PropertyGallery({
  gallery,
  name,
  onSelect,
}: {
  gallery: GalleryData;
  name: string;
  onSelect: (src: string) => void;
}) {
  const available = tabs.filter((t) => gallery[t.key].length > 0);
  const [active, setActive] = useState<(typeof tabs)[number]['key']>(
    available[0]?.key ?? 'exterior'
  );

  if (available.length === 0) return null;

  const activeLabel = tabs.find((t) => t.key === active)!.label;
  const images = gallery[active];

  return (
    <div className="space-y-12">
      {/* Editorial Floating Bar Navigation */}
      <div className="border-border/60 flex flex-col items-center justify-between gap-6 border-b pb-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="bg-gold/10 text-gold border-gold/20 flex h-10 w-10 items-center justify-center rounded-xl border">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gold font-mono text-[10px] font-medium tracking-[0.2em] uppercase">
              Portfolio Exhibit
            </p>
            <h3 className="text-foreground font-serif text-2xl font-medium tracking-tight">
              {name}
            </h3>
          </div>
        </div>

        {/* Minimalist Floating Pill Tabs */}
        <div
          role="tablist"
          aria-label={`${name} gallery`}
          className="bg-surface border-border shadow-soft flex items-center gap-1.5 rounded-full border p-1.5"
        >
          {available.map((t) => {
            const isActive = active === t.key;
            const count = gallery[t.key]?.length || 0;

            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  isActive ? 'text-ink font-semibold' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {/* Smooth Animated Tab Background */}
                {isActive && (
                  <motion.div
                    layoutId="pillTabActive"
                    className="bg-gold absolute inset-0 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
                <span
                  className={`relative z-10 text-[10px] ${
                    isActive ? 'text-ink/80' : 'text-foreground/40'
                  }`}
                >
                  [{count.toString().padStart(2, '0')}]
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interlocking Masonry Layout Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((src, i) => {
            // Give every third item a portrait vertical height for an asymmetrical gallery balance
            const isTall = i % 3 === 0;
            const photoNumber = (i + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onSelect(src)}
                className={`group bg-surface border-border/80 shadow-soft hover:shadow-soft-lg hover:border-gold/50 relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1.5 ${
                  isTall ? 'min-h-[420px] sm:row-span-2' : 'min-h-[280px]'
                }`}
              >
                {/* Background Image */}
                <Image
                  src={src}
                  alt={`${name} ${activeLabel.toLowerCase()} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Top Corner Index Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/40 px-3 py-1 text-white backdrop-blur-md">
                  <span className="text-gold font-mono text-[10px] font-semibold tracking-widest">
                    {photoNumber}
                  </span>
                  <span className="h-2 w-px bg-white/20" />
                  <span className="font-mono text-[9px] tracking-wider text-white/80 uppercase">
                    {activeLabel}
                  </span>
                </div>

                {/* Glassmorphic Corner Floating Action Trigger */}
                <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                  <MoveUpRight className="text-gold h-4 w-4" />
                </div>

                {/* Bottom Architectural Caption Bar */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 transition-opacity duration-300 group-hover:from-black/90">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base font-medium tracking-wide text-white">
                        {name}
                      </p>
                      <p className="text-gold-light/80 font-mono text-[10px] tracking-widest uppercase">
                        View Photo
                      </p>
                    </div>

                    <div className="bg-gold text-ink flex h-8 items-center gap-1.5 rounded-md px-3 font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <span>Expand</span>
                      <Maximize2 className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// // components/sections/portfolio/PropertyGallery.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
// import type { PropertyGallery as GalleryData } from '@/constants/portfolio/types';

// const tabs = [
//   { key: 'exterior', label: 'Exterior Views' },
//   { key: 'interior', label: 'Interior Spaces' },
//   { key: 'siteUpdate', label: 'Site Progress' },
// ] as const;

// export function PropertyGallery({
//   gallery,
//   name,
//   onSelect,
// }: {
//   gallery: GalleryData;
//   name: string;
//   onSelect: (src: string) => void;
// }) {
//   const available = tabs.filter((t) => gallery[t.key].length > 0);
//   const [active, setActive] = useState<(typeof tabs)[number]['key']>(
//     available[0]?.key ?? 'exterior'
//   );
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (available.length === 0) return null;

//   const activeTab = tabs.find((t) => t.key === active)!;
//   const images = gallery[active] || [];
//   const currentSrc = images[currentIndex] || images[0];

//   const handleTabChange = (key: (typeof tabs)[number]['key']) => {
//     setActive(key);
//     setCurrentIndex(0);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
//       {/* LEFT COLUMN: Editorial Index & Directory (Sticky on Desktop) */}
//       <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
//         <div>
//           <div className="mb-2 flex items-center gap-2">
//             <span className="bg-gold h-px w-6" aria-hidden="true" />
//             <span className="text-gold font-mono text-[11px] font-medium tracking-[0.2em] uppercase">
//               Architecture & Details
//             </span>
//           </div>
//           <h3 className="text-foreground font-serif text-3xl font-medium tracking-tight sm:text-4xl">
//             Exhibition Catalog
//           </h3>
//           <p className="text-foreground/60 mt-3 text-sm leading-relaxed">
//             Explore the spatial design and structural highlights of {name}.
//           </p>
//         </div>

//         {/* Tab Selection List */}
//         <div
//           role="tablist"
//           aria-label={`${name} gallery`}
//           className="border-border/80 space-y-2 border-t pt-6"
//         >
//           {available.map((t) => {
//             const isActive = active === t.key;
//             const count = gallery[t.key]?.length || 0;

//             return (
//               <button
//                 key={t.key}
//                 role="tab"
//                 aria-selected={isActive}
//                 onClick={() => handleTabChange(t.key)}
//                 className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 ${
//                   isActive
//                     ? 'bg-gold/10 text-foreground border-gold/40 border font-medium'
//                     : 'text-foreground/60 hover:text-foreground hover:bg-surface border border-transparent'
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <span
//                     className={`h-1.5 w-1.5 rounded-full transition-colors ${
//                       isActive ? 'bg-gold' : 'bg-foreground/20 group-hover:bg-foreground/40'
//                     }`}
//                   />
//                   <span className="font-mono text-xs tracking-wider uppercase">{t.label}</span>
//                 </div>

//                 <span
//                   className={`font-mono text-[11px] ${
//                     isActive ? 'text-gold font-bold' : 'text-foreground/40'
//                   }`}
//                 >
//                   {count.toString().padStart(2, '0')} Photos
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Pagination Controls & Progress Bar */}
//         <div className="border-border/80 space-y-4 border-t pt-6">
//           <div className="flex items-center justify-between">
//             <span className="text-foreground/60 font-mono text-xs tracking-widest uppercase">
//               Image Navigation
//             </span>
//             <span className="text-gold font-mono text-xs font-bold">
//               {(currentIndex + 1).toString().padStart(2, '0')} /{' '}
//               {images.length.toString().padStart(2, '0')}
//             </span>
//           </div>

//           {/* Progress bar line */}
//           <div className="bg-border h-1 w-full overflow-hidden rounded-full">
//             <motion.div
//               className="bg-gold h-full"
//               initial={false}
//               animate={{
//                 width: `${((currentIndex + 1) / images.length) * 100}%`,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>

//           <div className="flex gap-2 pt-2">
//             <button
//               onClick={handlePrev}
//               aria-label="Previous photo"
//               className="bg-surface border-border text-foreground hover:border-gold hover:text-gold flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 font-mono text-xs tracking-wider uppercase transition-colors"
//             >
//               <ChevronLeft className="h-4 w-4" />
//               <span>Previous</span>
//             </button>
//             <button
//               onClick={handleNext}
//               aria-label="Next photo"
//               className="bg-surface border-border text-foreground hover:border-gold hover:text-gold flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 font-mono text-xs tracking-wider uppercase transition-colors"
//             >
//               <span>Next</span>
//               <ChevronRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT COLUMN: Big Interactive Canvas & Thumbnail Grid */}
//       <div className="space-y-4 lg:col-span-8">
//         {/* Main Display Stage */}
//         <div className="group bg-surface border-border shadow-soft relative aspect-[4/3] w-full overflow-hidden rounded-2xl border sm:aspect-[16/10]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${active}-${currentIndex}`}
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               className="relative h-full w-full"
//             >
//               <Image
//                 src={currentSrc}
//                 alt={`${name} ${activeTab.label} view ${currentIndex + 1}`}
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 66vw"
//                 className="object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Floating Category Label */}
//           <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-white backdrop-blur-md">
//             <Layers className="text-gold h-3.5 w-3.5" />
//             <span className="font-mono text-[10px] tracking-widest uppercase">
//               {activeTab.label}
//             </span>
//           </div>

//           {/* Fullscreen Expand Action Button */}
//           <button
//             onClick={() => onSelect(currentSrc)}
//             aria-label="Enlarge photo"
//             className="bg-gold text-ink absolute right-4 bottom-4 z-10 flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-semibold tracking-wider uppercase shadow-lg transition-transform duration-300 hover:scale-105"
//           >
//             <span>Enlarge</span>
//             <Maximize2 className="h-3.5 w-3.5" />
//           </button>
//         </div>

//         {/* Thumbnail Selection Bar */}
//         <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
//           {images.map((src, i) => {
//             const isSelected = i === currentIndex;

//             return (
//               <button
//                 key={src}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`group relative aspect-[4/3] overflow-hidden rounded-lg border transition-all duration-300 ${
//                   isSelected
//                     ? 'border-gold ring-gold/40 opacity-100 ring-2'
//                     : 'border-border/60 hover:border-gold/50 opacity-50 hover:opacity-100'
//                 }`}
//               >
//                 <Image
//                   src={src}
//                   alt={`Thumbnail ${i + 1}`}
//                   fill
//                   sizes="120px"
//                   className="object-cover"
//                 />
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// // components/sections/portfolio/PropertyGallery.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2, Sparkles, ArrowUpRight } from 'lucide-react';
// import type { PropertyGallery as GalleryData } from '@/constants/portfolio/types';

// const tabs = [
//   { key: 'exterior', label: 'Exterior' },
//   { key: 'interior', label: 'Interior' },
//   { key: 'siteUpdate', label: 'Site Update' },
// ] as const;

// export function PropertyGallery({
//   gallery,
//   name,
//   onSelect,
// }: {
//   gallery: GalleryData;
//   name: string;
//   onSelect: (src: string) => void;
// }) {
//   // Only offer tabs that actually have photos
//   const available = tabs.filter((t) => gallery[t.key].length > 0);
//   const [active, setActive] = useState<(typeof tabs)[number]['key']>(
//     available[0]?.key ?? 'exterior'
//   );

//   if (available.length === 0) return null;

//   const activeLabel = tabs.find((t) => t.key === active)!.label;
//   const images = gallery[active];

//   const primaryImage = images[0];
//   const secondaryImages = images.slice(1);

//   return (
//     <div className="space-y-10">
//       {/* 1. Header & Minimalist Architectural Tabs */}
//       <div className="border-border/80 flex flex-col justify-between gap-6 border-b pb-5 sm:flex-row sm:items-end">
//         <div>
//           <div className="mb-1 flex items-center gap-2">
//             <span className="bg-gold h-2 w-2 animate-pulse rounded-full" />
//             <span className="text-gold font-mono text-[11px] font-medium tracking-[0.2em] uppercase">
//               Curated View
//             </span>
//           </div>
//           <h3 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
//             {activeLabel} Showcase
//           </h3>
//         </div>

//         {/* Tab Navigation with Animated Underline */}
//         <div
//           role="tablist"
//           aria-label={`${name} gallery`}
//           className="flex scrollbar-none items-center gap-6 overflow-x-auto pb-1 sm:gap-8"
//         >
//           {available.map((t) => {
//             const isActive = active === t.key;
//             const count = gallery[t.key]?.length || 0;

//             return (
//               <button
//                 key={t.key}
//                 role="tab"
//                 aria-selected={isActive}
//                 onClick={() => setActive(t.key)}
//                 className={`group relative pb-3 font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
//                   isActive
//                     ? 'text-foreground font-semibold'
//                     : 'text-foreground/50 hover:text-foreground/80'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <span>{t.label}</span>
//                   <span
//                     className={`text-[10px] ${
//                       isActive ? 'text-gold font-bold' : 'text-foreground/40'
//                     }`}
//                   >
//                     [{count.toString().padStart(2, '0')}]
//                   </span>
//                 </div>

//                 {/* Sliding Gold Line indicator */}
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTabLine"
//                     className="bg-gold absolute inset-x-0 bottom-0 h-[2px]"
//                     transition={{ type: 'spring', stiffness: 350, damping: 32 }}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* 2. Main Gallery Layout */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={active}
//           role="tabpanel"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-4"
//         >
//           {/* Main Stage: Large Featured Hero Canvas */}
//           {primaryImage && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.98 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               onClick={() => onSelect(primaryImage)}
//               className="group bg-surface border-border shadow-soft relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-2xl border sm:aspect-[21/9]"
//             >
//               <Image
//                 src={primaryImage}
//                 alt={`${name} ${activeLabel.toLowerCase()} primary view`}
//                 fill
//                 priority
//                 sizes="100vw"
//                 className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
//               />

//               {/* Architectural Frame Border Overlay */}
//               <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl border border-white/10" />

//               {/* Floating Top Tag */}
//               <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-white backdrop-blur-md">
//                 <Sparkles className="text-gold h-3.5 w-3.5" />
//                 <span className="font-mono text-[10px] tracking-widest uppercase">
//                   Main Exhibition • 01
//                 </span>
//               </div>

//               {/* Bottom Interactive Hover Bar */}
//               <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:p-8">
//                 <div>
//                   <p className="font-serif text-lg font-medium tracking-wide text-white sm:text-2xl">
//                     {name}
//                   </p>
//                   <p className="text-gold-light/90 mt-0.5 font-mono text-xs tracking-widest uppercase">
//                     {activeLabel} Perspective
//                   </p>
//                 </div>

//                 <div className="bg-gold text-ink flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-semibold tracking-wider uppercase shadow-md transition-transform duration-300 group-hover:scale-105">
//                   <span>Enlarge</span>
//                   <Maximize2 className="h-3.5 w-3.5" aria-hidden />
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Secondary Bento Strip */}
//           {secondaryImages.length > 0 && (
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//               {secondaryImages.map((src, idx) => {
//                 const photoNumber = (idx + 2).toString().padStart(2, '0');

//                 return (
//                   <motion.button
//                     key={src}
//                     onClick={() => onSelect(src)}
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.4,
//                       delay: idx * 0.05,
//                       ease: [0.16, 1, 0.3, 1],
//                     }}
//                     aria-label={`Enlarge ${name} ${activeLabel.toLowerCase()} photo ${idx + 2}`}
//                     className="group bg-surface border-border/70 focus:ring-gold relative aspect-[4/3] w-full overflow-hidden rounded-xl border focus:ring-2 focus:outline-none"
//                   >
//                     <Image
//                       src={src}
//                       alt={`${name} ${activeLabel.toLowerCase()} photo ${idx + 2}`}
//                       fill
//                       sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
//                     />

//                     {/* Corner Number Badge */}
//                     <div className="absolute top-2.5 left-2.5 z-10 rounded-md border border-white/10 bg-black/40 px-2 py-0.5 backdrop-blur-md">
//                       <span className="font-mono text-[9px] tracking-widest text-white/80 uppercase">
//                         {photoNumber}
//                       </span>
//                     </div>

//                     {/* Hover Overlay Icon */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       <div className="bg-gold text-ink flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
//                         <ArrowUpRight className="h-4 w-4" />
//                       </div>
//                     </div>
//                   </motion.button>
//                 );
//               })}
//             </div>
//           )}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// // components/sections/portfolio/PropertyGallery.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2 } from 'lucide-react';
// import type { PropertyGallery as GalleryData } from '@/constants/portfolio/types';

// const tabs = [
//   { key: 'exterior', label: 'Exterior' },
//   { key: 'interior', label: 'Interior' },
//   { key: 'siteUpdate', label: 'Site Update' },
// ] as const;

// export function PropertyGallery({
//   gallery,
//   name,
//   onSelect,
// }: {
//   gallery: GalleryData;
//   name: string;
//   onSelect: (src: string) => void;
// }) {
//   // Only offer tabs that actually have photos
//   const available = tabs.filter((t) => gallery[t.key].length > 0);
//   const [active, setActive] = useState<(typeof tabs)[number]['key']>(
//     available[0]?.key ?? 'exterior'
//   );

//   if (available.length === 0) return null;

//   const activeLabel = tabs.find((t) => t.key === active)!.label;
//   const images = gallery[active];

// return (
//   <div className="space-y-8">
//     {/* Luxury Segmented Tab Navigation */}
//     <div className="border-border/60 flex flex-wrap items-center gap-3 border-b pb-4">
//       <div
//         role="tablist"
//         aria-label={`${name} gallery`}
//         className="flex flex-wrap items-center gap-2"
//       >
//         {available.map((t) => {
//           const isActive = active === t.key;
//           const count = gallery[t.key]?.length || 0;

//           return (
//             <button
//               key={t.key}
//               role="tab"
//               aria-selected={isActive}
//               onClick={() => setActive(t.key)}
//               className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
//                 isActive ? 'text-ink font-semibold' : 'text-foreground/60 hover:text-foreground'
//               }`}
//             >
//               {/* Smooth sliding active background pill */}
//               {isActive && (
//                 <motion.div
//                   layoutId="activeTabBadge"
//                   className="bg-gold shadow-soft absolute inset-0 rounded-full"
//                   transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                 />
//               )}

//               <span className="relative z-10">{t.label}</span>
//               <span
//                 className={`relative z-10 text-[10px] opacity-70 ${
//                   isActive ? 'text-ink' : 'text-foreground/40 group-hover:text-foreground/70'
//                 }`}
//               >
//                 [{count.toString().padStart(2, '0')}]
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>

//     {/* Asymmetric Editorial Grid */}
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={active}
//         role="tabpanel"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//         className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
//       >
//         {images.map((src, i) => {
//           const isHero = i === 0;
//           const photoNumber = (i + 1).toString().padStart(2, '0');

//           return (
//             <motion.button
//               key={src}
//               onClick={() => onSelect(src)}
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 0.5,
//                 delay: i * 0.05,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               aria-label={`Enlarge ${name} ${activeLabel.toLowerCase()} photo ${i + 1}`}
//               className={`group rounded-card bg-surface border-border/80 focus:ring-gold relative overflow-hidden border focus:ring-2 focus:outline-none ${
//                 isHero
//                   ? 'min-h-[360px] sm:min-h-[420px] lg:col-span-2 lg:row-span-2'
//                   : 'aspect-[4/3] min-h-[200px]'
//               }`}
//             >
//               {/* Image Component */}
//               <Image
//                 src={src}
//                 alt={`${name} ${activeLabel.toLowerCase()} photo ${i + 1}`}
//                 fill
//                 sizes={
//                   isHero
//                     ? '(max-width: 1024px) 100vw, 50vw'
//                     : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
//                 }
//                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//               />

//               {/* Corner Architectural Number Tag */}
//               <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2.5 py-1 backdrop-blur-md">
//                 <span className="text-gold-light font-mono text-[10px] font-medium tracking-widest uppercase">
//                   {photoNumber}
//                 </span>
//                 {isHero && (
//                   <>
//                     <span className="bg-gold h-1 w-1 rounded-full" />
//                     <span className="font-mono text-[9px] tracking-wider text-white/80 uppercase">
//                       Featured
//                     </span>
//                   </>
//                 )}
//               </div>

//               {/* Subtle Luxury Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//               {/* Floating Glassmorphic Footer Bar */}
//               <div className="absolute inset-x-3 bottom-3 z-10 flex translate-y-2 items-center justify-between rounded-xl border border-white/15 bg-black/50 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                 <div className="flex flex-col text-left">
//                   <span className="font-serif text-sm font-medium tracking-wide text-white">
//                     {activeLabel}
//                   </span>
//                   <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
//                     {name}
//                   </span>
//                 </div>
//                 <div className="bg-gold text-ink flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
//                   <Maximize2 className="h-4 w-4" aria-hidden="true" />
//                 </div>
//               </div>
//             </motion.button>
//           );
//         })}
//       </motion.div>
//     </AnimatePresence>
//   </div>
// );
// }
