// app/portfolio/the-sirius/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, sirius } from '@/constants/portfolio';

export const metadata = { title: sirius.name, description: sirius.overviewTitle };

export default function TheSiriusPage() {
  const others = allProperties.filter((p) => p.slug !== sirius.slug).slice(0, 3);
  return <PropertyPageTemplate property={sirius} otherProperties={others} />;
}
