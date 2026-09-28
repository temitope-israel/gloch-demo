// constants/hero.ts

export interface HeroSlide {
  id: number;
  image: string;
  eyebrow: string;
  headline: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/hero/hero-1.jpg',
    eyebrow: 'GLOCH STYLISTIC LIMITED',
    headline: 'Investing in Property, Built on Trust',
    subheading:
      'From luxury developments to trusted property management, we help you make real estate decisions with clarity and confidence.',
    primaryCta: { label: 'Book a Consultation', href: '/contact' },
    secondaryCta: { label: 'View Properties', href: '#properties' },
  },
  {
    id: 2,
    image: '/hero/hero-2.jpg',
    eyebrow: 'EXCLUSIVE PORTFOLIO',
    headline: 'Architectural Excellence & Prime Locations',
    subheading:
      'Explore handpicked luxury estates engineered for long-term capital appreciation and refined living.',
    primaryCta: { label: 'Explore Portfolio', href: '#properties' },
    secondaryCta: { label: 'Our Services', href: '#services' },
  },
  {
    id: 3,
    image: '/hero/hero-3.jpg',
    eyebrow: 'TAILORED MANAGEMENT',
    headline: 'Seamless Asset Growth & Advisory',
    subheading:
      'Maximized rental yields and hands-off property management backed by deep market intelligence.',
    primaryCta: { label: 'Partner With Us', href: '/contact' },
    secondaryCta: { label: 'About Gloch', href: '#about' },
  },
];

export const heroFloatingCards = [
  { label: 'Properties Sold', value: '250+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Client Satisfaction', value: '99%' },
] as const;