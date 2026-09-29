// app/portfolio/elyth-apartments/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, elythApartments } from '@/constants/portfolio';

export const metadata = { title: elythApartments.name, description: elythApartments.overviewTitle };

export default function ElythApartmentsPage() {
  const others = allProperties.filter((p) => p.slug !== elythApartments.slug).slice(0, 3);
  return <PropertyPageTemplate property={elythApartments} otherProperties={others} />;
}
