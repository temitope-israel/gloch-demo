// app/portfolio/the-lavender/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, lavender } from '@/constants/portfolio';

export const metadata = {
  title: lavender.name,
  description: lavender.overviewTitle,
};

export default function TheLavenderPage() {
  const others = allProperties.filter((p) => p.slug !== lavender.slug).slice(0, 3);
  return <PropertyPageTemplate property={lavender} otherProperties={others} />;
}
