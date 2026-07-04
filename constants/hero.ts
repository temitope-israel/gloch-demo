// constants/hero.ts

export const heroImages = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
] as const

export const heroContent = {
  eyebrow: 'GLOCH STYLISTIC LIMITED',
  headline: 'Investing in Property, Built on Trust',
  subheading:
    'From luxury developments to trusted property management, we help you make real estate decisions with clarity and confidence.',
  primaryCta: { label: 'Book a Consultation', href: '#contact' },
  secondaryCta: { label: 'View Properties', href: '#properties' },
} as const

// Floating info cards overlaid on the hero image — reinforces credibility
// signals immediately, before the visitor even scrolls.
export const heroFloatingCards = [
  { label: 'Properties Sold', value: '250+' },
  { label: 'Years of Experience', value: '15+' },
] as const