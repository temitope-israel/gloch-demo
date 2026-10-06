// app/portfolio/quadrant-mall/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, quadrantMall } from '@/constants/portfolio';

export const metadata = {
  title: quadrantMall.name,
  description: quadrantMall.overviewTitle,
};

export default function QuadrantMallPage() {
  const others = allProperties.filter((p) => p.slug !== quadrantMall.slug).slice(0, 3);
  return <PropertyPageTemplate property={quadrantMall} otherProperties={others} />;
}
