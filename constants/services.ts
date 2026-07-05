// constants/services.ts

export interface Service {
  id: string
  title: string
  description: string
  image: string
  cta: { label: string; href: string }
}

export const services: Service[] = [
  {
    id: 'property-management',
    title: 'Property Management',
    description:
      'From tenant screening to maintenance coordination, we handle the day-to-day so your investment stays protected and profitable — without demanding your time.',
    image: '/services/property-management.jpg',
    cta: { label: 'Learn More', href: '#contact' },
  },
  {
    id: 'property-development',
    title: 'Property Development',
    description:
      'We partner with landowners and investors to bring developments to life, managing every phase from planning and design through to completion.',
    image: '/services/property-development.jpg',
    cta: { label: 'Learn More', href: '#contact' },
  },
]