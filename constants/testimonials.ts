// constants/testimonials.ts

export interface Testimonial {
  id: string
  name: string
  company: string
  rating: number // 1-5
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Chiamaka Nwosu',
    company: 'Nwosu Holdings',
    rating: 5,
    quote:
      'Gloch made what I expected to be a stressful investment feel completely manageable. Their transparency at every stage gave me real confidence.',
    image: '/testimonials/client-1.jpg',
  },
  {
    id: 't2',
    name: 'Emeka Uche',
    company: 'Uche & Partners',
    rating: 5,
    quote:
      'From property management to closing a major deal, the team\'s attention to detail was unmatched. I recommend them without hesitation.',
    image: '/testimonials/client-2.jpg',
  },
  {
    id: 't3',
    name: 'Folasade Bello',
    company: 'Bello Interiors',
    rating: 5,
    quote:
      'What stood out was how clearly they communicated. No jargon, no pressure — just honest guidance through a significant investment.',
    image: '/testimonials/client-3.jpg',
  },
  {
    id: 't4',
    name: 'Tunde Ajayi',
    company: 'Ajayi Logistics',
    rating: 4,
    quote:
      'A genuinely professional experience from start to finish. Gloch\'s market knowledge saved me from a couple of costly mistakes.',
    image: '/testimonials/client-4.jpg',
  },
]