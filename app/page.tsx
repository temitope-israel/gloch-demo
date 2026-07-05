// app/page.tsx
import { Hero } from '@/components/sections/hero/Hero';
import { Stats } from '@/components/sections/stats/Stats';
import { WhyChooseUs } from '@/components/sections/why-choose-us/WhyChooseUs';
import { Services } from '@/components/sections/services/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      {/* Featured Properties, About, etc. — coming next */}
    </main>
  );
}
