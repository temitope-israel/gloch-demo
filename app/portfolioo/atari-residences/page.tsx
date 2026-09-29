// app/portfolio/atari-residences/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, atariResidences } from '@/constants/portfolio';

export const metadata = {
  title: atariResidences.name,
  description: atariResidences.overviewTitle,
};

export default function AtariResidencesPage() {
  const others = allProperties.filter((p) => p.slug !== atariResidences.slug).slice(0, 3);
  return <PropertyPageTemplate property={atariResidences} otherProperties={others} />;
}
