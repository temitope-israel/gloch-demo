// app/portfolio/gloch-tower/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, glochTower } from '@/constants/portfolio';

export const metadata = {
  title: glochTower.name,
  description: glochTower.overviewTitle,
};

export default function GlochTowerPage() {
  const others = allProperties.filter((p) => p.slug !== glochTower.slug).slice(0, 3);
  return <PropertyPageTemplate property={glochTower} otherProperties={others} />;
}
