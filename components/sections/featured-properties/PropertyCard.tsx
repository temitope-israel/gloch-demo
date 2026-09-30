import Image from 'next/image';
import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react';
import type { Property } from '@/constants/properties';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div
      className="group bg-ink hover:shadow-gold/10 relative flex aspect-[3/4] min-h-[520px] w-full flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{ borderRadius: 'var(--radius-card, 0.75rem)' }}
    >
      {/* Full-bleed background image */}
      <Image
        src={property.image}
        alt={property.title}
        fill
        className="object-cover transition-transform duration-[2500ms] ease-[0.16,1,0.3,1] group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />

      {/* Gradient Overlays for High-Contrast Text Legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 transition-opacity duration-500 group-hover:opacity-90" />

      {/* TOP: Brand Logo / Location Tag */}
      <div className="relative z-10 p-6">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-xs font-light text-white/90 backdrop-blur-md">
          <MapPin className="text-gold h-3.5 w-3.5" aria-hidden />
          <span>{property.location}</span>
        </div>
      </div>

      {/* BOTTOM: Title, Price & Key Details Floating Over Image */}
      <div className="relative z-10 flex flex-col gap-4 p-6 text-white">
        <div>
          {/* Centered/Serif Styling Similar to Luxury Development Badging */}
          <h3 className="group-hover:text-gold font-serif text-2xl font-light tracking-wide text-white transition-colors duration-300 sm:text-3xl">
            {property.title}
          </h3>

          <p className="text-gold mt-1 font-serif text-lg font-light tracking-wide">
            {property.price}
          </p>
        </div>

        {/* Minimalist Glassmorphic Amenities Bar */}
        <div className="flex items-center justify-between border-t border-white/15 pt-4 text-xs font-light text-white/80">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-white/70" aria-hidden />
            <span>
              {property.beds} <span className="text-white/50">Beds</span>
            </span>
          </span>

          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-white/70" aria-hidden />
            <span>
              {property.baths} <span className="text-white/50">Baths</span>
            </span>
          </span>

          <span className="text-gold flex items-center gap-1.5 font-mono">
            <Ruler className="h-3.5 w-3.5" aria-hidden />
            <span>{property.area}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// // components/sections/featured-properties/PropertyCard.tsx
// import Image from 'next/image';
// import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react';
// import type { Property } from '@/constants/properties';

// export function PropertyCard({ property }: { property: Property }) {
//   return (
//     <div
//       className="group relative flex flex-col justify-between overflow-hidden bg-surface border border-gold transition-all duration-500 hover:shadow-soft hover:-translate-y-1"
//       style={{ borderRadius: 'var(--radius-card)' }}
//     >
//       {/* Container holding the image asset */}
//       {/* UPGRADE: Widened to 16/10 for a wider cinematic field of view */}
//       <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/10">
//         <Image
//           src={property.image}
//           alt={property.title}
//           fill
//           // UPGRADE: Transition duration expanded significantly for an ultra-premium, slow-motion hover expansion
//           className="object-cover transition-transform duration-[2500ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
//           sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//         />

//         {/* Subtle vignette gradient reflecting over the bottom image edge */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

//         {/* UPGRADE: Floating minimalist price accent pinned elegantly directly to the visual frame */}
//         <div className="absolute bottom-4 left-4 z-10 bg-ink/70 backdrop-blur-md px-3 py-1.5 border border-white/[0.08] rounded-sm">
//           <p className="font-serif text-body text-gold font-light tracking-wide">
//             {property.price}
//           </p>
//         </div>
//       </div>

//       {/* Meta Content Details Area */}
//       <div className="p-6 flex-1 flex flex-col justify-between">
//         <div>
//           {/* Location details styled cleanly under system font rules */}
//           <div className="text-warm-gray-500 dark:text-warm-gray-400 flex items-center gap-1.5 text-small font-sans font-light tracking-wide">
//             <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
//             <span>{property.location}</span>
//           </div>

//           {/* Title: Transitioning beautifully to a subtle gold focus state upon layout wrapper context hovers */}
//           <h3 className="text-h3 text-foreground mt-2.5 font-serif font-light tracking-tight leading-snug transition-colors duration-300 group-hover:text-gold">
//             {property.title}
//           </h3>
//         </div>

//         {/* Amenities Bar Area */}
//         {/* UPGRADE: Border color matched precisely to standard structural layout tokens */}
//         <div className="border-t border-[--color-border] text-warm-gray-600 dark:text-warm-gray-400 mt-6 flex items-center gap-5 pt-4 text-small font-sans font-light tracking-wide">
//           <span className="flex items-center gap-1.5">
//             <BedDouble className="h-4 w-4 stroke-[1.5] text-warm-gray-400" aria-hidden />
//             <span>{property.beds} <span className="text-xs text-warm-gray-400">Beds</span></span>
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Bath className="h-4 w-4 stroke-[1.5] text-warm-gray-400" aria-hidden />
//             <span>{property.baths} <span className="text-xs text-warm-gray-400">Baths</span></span>
//           </span>
//           <span className="flex items-center gap-1.5 ml-auto">
//             <Ruler className="h-3.5 w-3.5 stroke-[1.5] text-gold" aria-hidden />
//             <span className="font-mono text-xs">{property.area}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
