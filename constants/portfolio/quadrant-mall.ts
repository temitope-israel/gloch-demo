import type { Property } from './types'
import { quadrantMallAssets } from './quadrant-mall-assets'

export const quadrantMall: Property = {
  slug: 'quadrant-mall',
  name: 'Quadrant Mall',
  location: 'Lekki Phase 1, Lagos',
  stats: {
    status: 'Fourth floor slab work completed',
    area: '1292sqm',
    type: 'Commercial & Retail Spaces',
    apartments: 'N/A',
    totalFloors: '6 floors',
    flatSize: 'Retail & Office Spaces',
  },
  overviewTitle: 'The Quadrant Mall: A Premier Commercial Hub in Lekki Phase 1',
  description: [
    'Strategically located on Admiralty Way, Lekki Phase 1, The Quadrant Mall is a modern commercial development designed to elevate businesses and enhance investment portfolios, featuring a blend of contemporary architecture and functional retail spaces.',
    'Whether you’re a business owner seeking a prime retail location or an investor looking for high-value opportunities, The Quadrant Mall is the perfect destination for growth and success.',
  ],
  keyAdvantages: [
    'Prime location on Admiralty Way, Lekki Phase 1, one of the most vibrant commercial corridors in Lagos',
    'Excellent visibility and accessibility within a high-traffic business and lifestyle district',
    'Ideal for retail stores, corporate offices, and service businesses',
    'Strategically positioned within close proximity to residential estates, restaurants, and financial institutions',
    'Developed by Gloch Stylistics Limited, known for quality and reliability',
    'Designed to provide a modern commercial environment that supports business growth and customer engagement',
  ],
  features: [
    'Contemporary six-floor commercial development',
    'Well-designed retail shops and office spaces suitable for various business types',
    'Rooftop lounge on the sixth floor offering a relaxing social and leisure environment',
    'Modern architectural design with quality finishing',
    'Elevator access across all floors',
    'Dedicated parking areas',
    'Secure and well-managed commercial environment',
  ],
  amenities: [
    { key: 'elevator', label: 'Elevator Access' },
    { key: 'parking', label: 'Ample Parking Spaces' },
    { key: 'security', label: '24-Hour Security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'power', label: '24-Hour Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'lounge', label: 'Rooftop Lounge' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  heroImage: '/properties/quadrant-property-main.jpeg',
  address: '5A Admiralty Way, Lekki Phase 1, Lagos',
  ...quadrantMallAssets,
  descriptionImage: '/portfolio/quadrant-mall/exterior/quadrant-mall-1.jpg',
}