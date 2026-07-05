// components/sections/featured-properties/PropertyCard.tsx
import Image from 'next/image';
import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Property } from '@/constants/properties';

export function PropertyCard({ property }: { property: Property }) {
  return (
    // p-0 overrides Card's default padding — we want the image to sit
    // flush against the card edges, with padding only on the text content
    // below it, rather than the whole card having uniform inner spacing.
    <Card className="group overflow-hidden p-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="p-6">
        <div className="text-warm-gray-500 flex items-center gap-1.5 text-sm">
          <MapPin className="h-4 w-4" aria-hidden />
          <span>{property.location}</span>
        </div>

        <h3 className="text-h3 text-foreground mt-2 font-serif">{property.title}</h3>

        <p className="text-gold mt-3 font-serif text-xl">{property.price}</p>

        <div className="border-border text-warm-gray-700 dark:text-warm-gray-300 mt-4 flex items-center gap-4 border-t pt-4 text-sm">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" aria-hidden />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" aria-hidden />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" aria-hidden />
            {property.area}
          </span>
        </div>
      </div>
    </Card>
  );
}
