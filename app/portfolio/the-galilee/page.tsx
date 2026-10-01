// app/portfolio/the-galilee/page.tsx
import { PropertyPageTemplate } from '@/components/sections/portfolio/PropertyPageTemplate';
import { allProperties, galilee } from '@/constants/portfolio';

export const metadata = {
  title: galilee.name,
  description: galilee.overviewTitle,
};

export default function TheGalileePage() {
  const others = allProperties.filter((p) => p.slug !== galilee.slug).slice(0, 3);
  return <PropertyPageTemplate property={galilee} otherProperties={others} />;
}
