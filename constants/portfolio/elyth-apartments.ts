import type { Property } from './types'
import { elythApartmentsAssets } from './elyth-apartments-assets'

export const elythApartments: Property = {
  slug: 'elyth-apartments',
  name: 'Elyth Apartments',
  location: 'Lekki Phase 1, Lagos',
  stats: {
    status: 'Roofing works ongoing',
    area: '1,320sqm',
    type: 'Apartments',
    apartments: '24',
    totalFloors: '8',
    flatSize: '110sqm – 285sqm',
  },
  overviewTitle: 'Elyth Apartments — Contemporary Living in Lekki Phase 1',
  description: [
    'ELYTH APARTMENTS',
    'combines the functionality of a well-defined space with the beauty of simple aesthetics that will stand the test of time.',
    'This 4-storey building is strategically located off Freedom Way in a serene residential area of Lekki Phase 1. It is also well-connected to essential services in the area. We have carefully designed the 2-Bedroom Luxury Apartments with a BQ to meet the rising demands of this concept in the Real Estate industry, as it gives a wider range of options available with affordability being key, and in turn increases the clientele for the industry.',
    'Download ELYTH APARTMENTS Brochure',
  ],
  keyAdvantages: [
    'Strategically located off Freedom Way in Lekki, one of Lagos’ fastest growing residential and commercial corridors',
    'Low density development with only 16 units, offering exclusivity and a peaceful residential environment',
    'Close proximity to major lifestyle destinations, business hubs, restaurants and shopping centers within the Lekki axis',
    'Ideal for both homeowners and investors seeking strong rental demand in the Lekki market',
    'Developed by Gloch Stylistic Limited, a reputable real estate and construction firm known for quality and reliability',
    'Thoughtfully designed to provide modern urban living in a secure and well connected neighborhood',
  ],
  features: [
    'Well designed 2-bedroom apartments with Maid’s room/boys’ quarter',
    'Contemporary four floor residential development',
    'Low density layout with only 16 units for enhanced privacy and comfort',
    'Modern architectural design with premium finishing',
    'Spacious living areas and well appointed bedrooms',
    'Contemporary kitchen fittings and modern bathroom fixtures',
    'Two elevators positioned on both sides of the building for convenient access to all apartments',
    'Ground floor parking dedicated to residents and visitors',
  ],
  amenities: [
    { key: 'lounge', label: 'Rooftop Open Lounge' },
    { key: 'gym', label: 'Fully Equipped Gym' },
    { key: 'elevator', label: 'Elevator Access' },
    { key: 'power', label: '24-Hour Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'security', label: '24-Hour security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  heroImage: '/properties/elyth-property-main.jpeg',
  address: '4 Prince Sanmi Harrison Avenue, off Freedom Way, Lekki Phase 1, Lagos',
  ...elythApartmentsAssets,

  descriptionImage: '/portfolio/elyth-apartments/interior/Elyth01.jpg'
}