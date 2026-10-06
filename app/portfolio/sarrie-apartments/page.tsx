// app/portfolio/sarrie-apartments/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, sarrieApartments } from '@/constants/portfolio';

export const metadata = {
  title: sarrieApartments.name,
  description: sarrieApartments.overviewTitle,
};

export default function SarrieApartmentsPage() {
  const others = allProperties.filter((p) => p.slug !== sarrieApartments.slug).slice(0, 3);
  return <PropertyPageTemplate property={sarrieApartments} otherProperties={others} />;
}
