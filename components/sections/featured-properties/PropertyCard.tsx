import Image from 'next/image';
import Link from 'next/link';
import { Building, Ruler, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Property } from '@/constants/properties';

interface PropertyCardProps {
  property: Property;
  onPrev?: () => void;
  onNext?: () => void;
}

export function PropertyCard({ property, onPrev, onNext }: PropertyCardProps) {
  return (
    <div className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* MOBILE VIEW (Edge-to-edge layout)                             */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-background text-foreground flex w-full flex-col sm:hidden">
        {/* Mobile Top Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-sans text-xs text-white backdrop-blur-md">
              <MapPin className="text-gold h-3.5 w-3.5" aria-hidden />
              <span>{property.location}</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev?.();
            }}
            aria-label="Previous property"
            className="absolute top-1/2 left-3 z-20 -translate-y-1/2 text-white/90 drop-shadow-md transition-transform active:scale-95"
          >
            <ChevronLeft className="h-12 w-12 stroke-[1.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            aria-label="Next property"
            className="absolute top-1/2 right-3 z-20 -translate-y-1/2 text-white/90 drop-shadow-md transition-transform active:scale-95"
          >
            <ChevronRight className="h-12 w-12 stroke-[1.5]" />
          </button>
        </div>

        {/* Mobile Description & Info */}
        <div className="flex flex-col gap-4 px-6 pt-6 pb-2 text-center">
          <h3 className="text-foreground font-serif text-xl font-medium tracking-wide">
            {property.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 font-sans text-sm leading-relaxed">
            {property.description}
          </p>

          <div className="pt-2">
            <Link
              href={`/portfolio/${property.slug}`}
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background inline-flex w-full items-center justify-center gap-2 border bg-transparent px-6 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              <span>Discover More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP & TABLET VIEW (Responsive structured card)            */}
      {/* ------------------------------------------------------------- */}
      <div className="group bg-ink hover:shadow-gold/10 relative hidden aspect-[3/4] h-[520px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:flex lg:h-[580px] xl:h-[620px]">
        {/* Background Image */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-[2500ms] ease-[0.16,1,0.3,1] group-hover:scale-110"
          sizes="(min-width: 1280px) 460px, (min-width: 1024px) 420px, (min-width: 768px) 380px, 340px"
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Top: Location Tag */}
        <div className="relative z-10 p-6 transition-opacity duration-300 group-hover:opacity-0">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 font-sans text-xs font-light text-white/90 backdrop-blur-md">
            <MapPin className="text-gold h-3.5 w-3.5" aria-hidden />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Bottom: Title & Details */}
        <div className="relative z-10 flex flex-col gap-4 p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
          <div>
            <h3 className="font-serif text-2xl font-light tracking-wide text-white lg:text-3xl">
              {property.title}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-4 text-xs font-light text-white/80">
            <span className="flex items-center gap-1.5">
              <Building className="h-4 w-4 text-white/70" aria-hidden />
              <span>{property.floors}</span>
            </span>

            <span className="text-gold flex items-center gap-1.5 font-mono">
              <Ruler className="h-3.5 w-3.5" aria-hidden />
              <span>{property.area}</span>
            </span>
          </div>
        </div>

        {/* SLIDING GOLD OVERLAY (On Hover) */}
        <div className="bg-gold/95 absolute inset-0 z-20 flex translate-y-full flex-col justify-between p-8 text-white backdrop-blur-md transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-y-0">
          <div className="mt-2 -translate-y-4 transform transition-transform delay-100 duration-500 ease-out group-hover:translate-y-0">
            <h1 className="text-center font-serif text-2xl leading-tight font-normal text-white lg:text-3xl">
              {property.title}
            </h1>
          </div>

          <div className="translate-y-6 transform pt-6 opacity-0 transition-all delay-200 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <p className="line-clamp-4 text-center font-sans text-sm leading-relaxed text-white">
              {property.description}
            </p>
          </div>

          <div className="translate-y-6 transform pt-6 opacity-0 transition-all delay-300 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={`/portfolio/${property.slug}`}
              className="group/btn bg-white border-ink/20 inline-flex w-full items-center justify-between border px-6 py-3.5 font-sans text-xs font-medium tracking-widest text-gold uppercase transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <span>Discover More</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// import Image from 'next/image';
// import Link from 'next/link';
// import { Building, Ruler, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import type { Property } from '@/constants/properties';

// interface PropertyCardProps {
//   property: Property;
//   onPrev?: () => void;
//   onNext?: () => void;
// }

// export function PropertyCard({ property, onPrev, onNext }: PropertyCardProps) {
//   return (
//     <div className="w-full">
//       {/* ------------------------------------------------------------- */}
//       {/* MOBILE VIEW (Full-bleed image + details + outlined CTA below) */}
//       {/* ------------------------------------------------------------- */}
//       <div className="bg-background text-foreground flex w-full flex-col sm:hidden">
//         {/* Mobile Top Image Container with Chevrons & Location Badge */}
//         <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
//           <Image
//             src={property.image}
//             alt={property.title}
//             fill
//             className="object-cover"
//             sizes="100vw"
//             priority
//           />

//           {/* Location Badge */}
//           <div className="absolute top-4 left-4 z-10">
//             <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-sans text-xs text-white backdrop-blur-md">
//               <MapPin className="text-gold h-3.5 w-3.5" aria-hidden />
//               <span>{property.location}</span>
//             </div>
//           </div>

//           {/* Image Navigation Arrows */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onPrev?.();
//             }}
//             aria-label="Previous property"
//             className="absolute top-1/2 left-3 z-20 -translate-y-1/2 text-white/90 drop-shadow-md transition-transform active:scale-95"
//           >
//             <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
//           </button>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onNext?.();
//             }}
//             aria-label="Next property"
//             className="absolute top-1/2 right-3 z-20 -translate-y-1/2 text-white/90 drop-shadow-md transition-transform active:scale-95"
//           >
//             <ChevronRight className="h-8 w-8 stroke-[1.5]" />
//           </button>
//         </div>

//         {/* Mobile Description & Info */}
//         <div className="flex flex-col gap-4 px-6 pt-6 pb-2 text-center">
//           <h3 className="text-foreground font-serif text-xl font-medium tracking-wide">
//             {property.title}
//           </h3>

//           <p className="text-muted-foreground line-clamp-3 font-sans text-sm leading-relaxed">
//             {property.description}
//           </p>

//           {/* Outlined DISCOVER MORE Button */}
//           <div className="pt-2">
//             <Link
//               href={`/portfolio/${property.slug}`}
//               className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background inline-flex w-full items-center justify-center gap-2 border bg-transparent px-6 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase transition-colors"
//             >
//               <span>Discover More</span>
//               <ArrowUpRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------------------------------------- */}
//       {/* DESKTOP & TABLET VIEW (Existing overlay card design)          */}
//       {/* ------------------------------------------------------------- */}
//       <div className="group bg-ink hover:shadow-gold/10 relative hidden aspect-[3/4] min-h-[50vh] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-none transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:flex sm:min-h-[90vh]">
//         {/* Full-bleed background image */}
//         <Image
//           src={property.image}
//           alt={property.title}
//           fill
//           className="object-cover transition-transform duration-[2500ms] ease-[0.16,1,0.3,1] group-hover:scale-110"
//           sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//         />

//         {/* Gradient Overlay */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 transition-opacity duration-500 group-hover:opacity-40" />

//         {/* Top: Location Tag */}
//         <div className="relative z-10 p-6 transition-opacity duration-300 group-hover:opacity-0">
//           <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-sans text-xs font-light text-white/90 backdrop-blur-md">
//             <MapPin className="text-gold h-3.5 w-3.5" aria-hidden />
//             <span>{property.location}</span>
//           </div>
//         </div>

//         {/* Bottom: Title & Details */}
//         <div className="relative z-10 flex flex-col gap-4 p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
//           <div>
//             <h3 className="font-serif text-2xl font-light tracking-wide text-white sm:text-3xl">
//               {property.title}
//             </h3>
//           </div>

//           <div className="flex items-center justify-between border-t border-white/15 pt-4 text-xs font-light text-white/80">
//             <span className="flex items-center gap-1.5">
//               <Building className="h-4 w-4 text-white/70" aria-hidden />
//               <span>{property.floors}</span>
//             </span>

//             <span className="text-gold flex items-center gap-1.5 font-mono">
//               <Ruler className="h-3.5 w-3.5" aria-hidden />
//               <span>{property.area}</span>
//             </span>
//           </div>
//         </div>

//         {/* SLIDING GOLD OVERLAY (On Hover) */}
//         <div className="bg-gold/95 absolute inset-0 z-20 flex translate-y-full flex-col justify-between p-8 text-white backdrop-blur-md transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-y-0">
//           <div className="mt-2 -translate-y-4 transform transition-transform delay-100 duration-500 ease-out group-hover:translate-y-0">
//             <h1 className="text-center font-serif text-3xl leading-tight font-normal text-white">
//               {property.title}
//             </h1>
//           </div>

//           <div className="translate-y-6 transform pt-10 opacity-0 transition-all delay-200 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
//             <p className="line-clamp-4 text-center font-sans text-sm leading-relaxed text-white">
//               {property.description}
//             </p>
//           </div>

//           <div className="translate-y-6 transform pt-6 opacity-0 transition-all delay-300 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
//             <Link
//               href={`/portfolio/${property.slug}`}
//               className="group/btn bg-ink border-ink/20 inline-flex w-full items-center justify-between border px-6 py-3.5 font-sans text-xs font-medium tracking-widest text-white uppercase transition-all duration-300 hover:bg-black hover:shadow-xl"
//             >
//               <span>Discover More</span>
//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
