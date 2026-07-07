// components/sections/testimonials/TestimonialCard.tsx
import { Star } from 'lucide-react';
import type { Testimonial } from '@/constants/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // Grab a clean initial for our luxury typography character badge
  const initialLetter = (testimonial.company || testimonial.name || 'G').charAt(0).toUpperCase();

  return (
    <div
      className="group bg-surface hover:shadow-soft relative flex h-full flex-col justify-between border border-[--color-border] p-8 transition-all duration-500 hover:-translate-y-1"
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      {/* Light gradient reflect over surface borders */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.01] to-transparent dark:from-white/[0.01]" />

      <div>
        {/* UPGRADE: Replaced the row of stars with a refined editorial numeric luxury badge */}
        <div
          className="flex items-center gap-1.5"
          aria-label={`Rated ${testimonial.rating} out of 5 stars`}
        >
          <span className="text-foreground font-mono text-xs font-semibold tracking-wider">
            {testimonial.rating.toFixed(1)}
          </span>
          <Star className="fill-gold text-gold h-3 w-3 stroke-[1.5]" aria-hidden />
          <span className="text-warm-gray-400 font-sans text-xs font-light">/ 5.0 Rating</span>
        </div>

        {/* Testimonial Quote: Serif typography with optimal line spacing */}
        <p className="text-body md:text-body-lg text-foreground mt-6 font-serif leading-relaxed font-light tracking-wide italic">
          “{testimonial.quote}”
        </p>
      </div>

      {/* Footer Meta: Completely rewritten without avatar graphics */}
      <div className="mt-10 flex items-center gap-4 border-t border-[--color-border] pt-6">
        {/* UPGRADE: Clean typographic monogram instead of an avatar image */}
        <div className="bg-background group-hover:border-gold flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[--color-border] transition-colors duration-500">
          <span className="text-small text-gold dark:text-gold-dark font-serif font-light tracking-widest">
            {initialLetter}
          </span>
        </div>

        <div className="overflow-hidden">
          <p className="text-foreground text-body truncate font-serif font-light tracking-tight">
            {testimonial.name}
          </p>
          <p className="text-warm-gray-500 dark:text-warm-gray-400 mt-0.5 truncate font-sans text-xs font-medium tracking-widest uppercase">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

// // components/sections/testimonials/TestimonialCard.tsx
// import Image from 'next/image';
// import { Star } from 'lucide-react';
// import { Card } from '@/components/ui/Card';
// import type { Testimonial } from '@/constants/testimonials';

// export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   return (
//     <Card className="flex h-full flex-col justify-between">
//       <div>
//         {/* Star rating — built from the numeric rating, not hardcoded */}
//         <div className="flex gap-1" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               className={
//                 i < testimonial.rating
//                   ? 'fill-gold text-gold h-4 w-4'
//                   : 'text-warm-gray-300 h-4 w-4 fill-transparent'
//               }
//               aria-hidden
//             />
//           ))}
//         </div>

//         <p className="text-body-lg text-foreground mt-5 leading-relaxed">“{testimonial.quote}”</p>
//       </div>

//       <div className="mt-8 flex items-center gap-3">
//         <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
//           <Image
//             src={testimonial.image}
//             alt={testimonial.name}
//             fill
//             className="object-cover"
//             sizes="48px"
//           />
//         </div>
//         <div>
//           <p className="text-foreground font-medium">{testimonial.name}</p>
//           <p className="text-warm-gray-500 text-sm">{testimonial.company}</p>
//         </div>
//       </div>
//     </Card>
//   );
// }
