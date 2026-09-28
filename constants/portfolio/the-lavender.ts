import type { Property } from './types'
import { lavenderAssets } from './the-lavender-assets'

export const lavender: Property = {
  slug: 'the-lavender',
  name: 'The Lavender',
  location: 'Victoria Island, Lagos',
  stats: {
    status: 'Piling works ongoing',
    area: '1007.74sqm',
    type: 'Apartments & Maisonettes',
    apartments: '19',
    totalFloors: '9 suspended floors (10 floors)',
    flatSize: '132sqm – 410sqm',
  },
  overviewTitle: 'The Lavender – Elevated Living on Idejo Street, Victoria Island',
  description: [
    'Perfectly positioned on Idejo Street, Lavender rises 10 floors into the skyline of Victoria Island — a prestigious residential address where Lagos’ finest experiences meet effortless accessibility. From renowned restaurants and luxury malls to top schools, hotels, embassies, and major corporate hubs, every essential lifestyle attraction is within minutes.',
    'From the upper floors, residents enjoy calming panoramic views — the ideal balance of vibrant city living and peaceful, elevated comfort. Lavender is thoughtfully designed for those who appreciate both sophistication and convenience.',
    'This is a prime, strategic location in one of Lagos’ highest-demand real estate corridors — a neighborhood that guarantees strong, enduring value for both homeowners and investors.',
  ],
  keyAdvantages: [
    'Strategically located in Victoria Island, Lagos’ vibrant commercial and lifestyle hub',
    'Ideal for professionals, young homeowners and investors',
    'Excellent rental yield potential due to strong residential demand in the area',
    'Developed by Gloch Stylistic Limited, known for quality and reliability',
    'Convenient access to major business districts, international schools, shopping destinations, leisure waterfronts and the international airport within a short drive',
    'Flexible payment structure for off-plan buyers',
  ],
  features: [
    'Modern studio apartments',
    'Well designed 1-bedroom apartments',
    'Spacious 2-bedroom apartments',
    'Elegant 4-bedroom maisonettes with Maid’s room/boys’ quarter',
    'Exclusive 4-bedroom maisonette penthouses with Maid’s room/boys’ quarter',
    'Contemporary architectural design with premium finishing',
    'Spacious living areas and elegantly appointed bedrooms',
    'High-quality kitchen fittings and modern bathroom fixtures',
    'Premium interior finishing',
  ],
  amenities: [
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'gym', label: 'Fully Equipped Gym' },
    { key: 'spa', label: 'Spa/Sauna' },
    { key: 'security', label: '24-Hour Security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'elevator', label: 'Elevator Access' },
    { key: 'parking', label: 'Ample Parking Spaces' },
    { key: 'power', label: '24-Hour Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'conference', label: 'Conference Office' },
    { key: 'lounge', label: 'Outdoor Lounge' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  heroImage: '/properties/lavender-property-main.webp',
  address: '9b Idejo Street, Victoria Island, Lagos 100001',
  ...lavenderAssets,
  descriptionImage: '/portfolio/the-lavender/exterior/lavender-residence3.jpg'
}