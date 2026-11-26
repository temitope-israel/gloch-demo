// app/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/hero/Hero';
// import { Stats } from '@/components/sections/stats/Stats';
import { WhyChooseUs } from '@/components/sections/why-choose-us/WhyChooseUs';
import { Services } from '@/components/sections/services/Services';
import { FeaturedProperties } from '@/components/sections/featured-properties/FeaturedProperties';
import { About } from '@/components/sections/about/About';
import { CTA } from '@/components/sections/cta/CTA';
import { MissionVision } from '@/components/sections/why-choose-us/MissionVision';
// import { LifestyleGallery } from '@/components/sections/lifestyle-gallery/LiftestyleGallery';

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
      <MissionVision
        mission="We develop premium yet affordable homes through innovative construction, disciplined cost management, and ethical business practices — ensuring our clients enjoy superior living, long-term value, and peace of mind."

        vision="To become Nigeria's most trusted and forward-thinking real estate developer — transforming urban living through sustainable design, exceptional quality, and thoughtfully priced homes that build lasting generational wealth for families."
        variant="light" // or "dark"
      />{' '}
      {/* <LifestyleGallery /> */}
      <Services />
      <CTA
        id="consultation"
        eyebrow="Exclusive Consultation"
        headline="Ready to Find Your Next Address?"
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
