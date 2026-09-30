// app/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/hero/Hero';
// import { Stats } from '@/components/sections/stats/Stats';
import { WhyChooseUs } from '@/components/sections/why-choose-us/WhyChooseUs';
import { Services } from '@/components/sections/services/Services';
import { FeaturedProperties } from '@/components/sections/featured-properties/FeaturedProperties';
import { About } from '@/components/sections/about/About';
import { CTA } from '@/components/sections/cta/CTA';

// Testimonials uses Embla + Autoplay — a meaningful chunk of JS that
// doesn't need to be in the initial bundle, since it's far below the fold.
// `ssr: false` is fine here since this section has no SEO-critical content
// that needs to be server-rendered (the testimonial text itself would be
// nice to have indexed, but for a demo this trade-off is acceptable —
// worth revisiting if SEO on testimonial content specifically matters later).
const Testimonials = dynamic(
  () => import('@/components/sections/testimonials/Testimonials').then((mod) => mod.Testimonials),
  {
    loading: () => <div className="h-[600px]" />, // placeholder to prevent layout shift while it loads
  }
);

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Stats /> */}
      <WhyChooseUs />
      <Services />
      <CTA
        id="consultation"
        eyebrow="Exclusive Consultation"
        headline="Ready to Find Your Next Investment?"
        supportingText="Schedule a private viewing with our luxury portfolio advisors."
        cta={{ label: 'Book a Viewing', href: '/contact' }}
      />
      <FeaturedProperties />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}
