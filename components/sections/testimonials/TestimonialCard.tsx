// components/sections/testimonials/TestimonialCard.tsx
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Testimonial } from '@/constants/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        {/* Star rating — built from the numeric rating, not hardcoded */}
        <div className="flex gap-1" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < testimonial.rating
                  ? 'fill-gold text-gold h-4 w-4'
                  : 'text-warm-gray-300 h-4 w-4 fill-transparent'
              }
              aria-hidden
            />
          ))}
        </div>

        <p className="text-body-lg text-foreground mt-5 leading-relaxed">“{testimonial.quote}”</p>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-foreground font-medium">{testimonial.name}</p>
          <p className="text-warm-gray-500 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </Card>
  );
}
