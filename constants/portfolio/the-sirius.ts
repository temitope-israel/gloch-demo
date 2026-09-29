import type { Property } from './types'
import { siriusAssets } from './the-sirius-assets'

export const sirius: Property = {
  slug: 'the-sirius',
  name: 'The Sirius',
  location: 'South-West Ikoyi, Lagos',
  stats: {
    status: 'Piling works ongoing',
    area: '1,242.82sqm',
    type: 'Apartments and Maisonettes',
    apartments: '22',
    totalFloors: '11',
    flatSize: '158sqm – 420sqm',
  },
  overviewTitle: 'The Sirius — Refined Living in South-West Ikoyi',
  description: [
    'Experience sophistication and comfort at The Sirius, a premier residential development offering breathtaking views of the Lagos Lagoon and Atlantic Ocean. Designed for modern living, it features Two-Bedroom Apartments (stylish and spacious for contemporary living), Three-Bedroom Maisonettes with BQ (elegance meets functionality), and Four-Bedroom Penthouse Maisonettes with BQ (the pinnacle of luxury with panoramic views).',
    'Crafted by Kingslinkup Pro-Edifice Limited and Gloch Stylistic Limited, The Sirius boasts expansive lobbies, state-of-the-art kitchens, en-suite bedrooms, and impeccable finishing. Nestled in Ikoyi’s prime district, it offers proximity to top businesses, luxury shopping, fine dining, and vibrant social venues.',
  ],
  keyAdvantages: [
    'Prime location off Awolowo Road in South-West Ikoyi, one of Lagos’ most prestigious residential areas',
    'Low density development with only 12 units, offering exclusivity and privacy for residents',
    'Located within a serene and secure neighborhood while still providing convenient access to key commercial and lifestyle destinations',
    'Strong capital appreciation and rental potential due to Ikoyi’s high real estate demand',
    'Developed by Gloch Stylistic Limited, a reputable real estate and construction firm known for quality and reliability',
    'Ideal for both homeowners and investors seeking premium residences in Ikoyi',
  ],
  features: [
    'Elegant 2-bedroom apartments',
    'Spacious 3-bedroom apartments with Maid’s room/boys’ quarter',
    'Exclusive 4-bedroom maisonette penthouse with Maid’s room/boys’ quarter',
    'Six-floor residential development designed for privacy and comfort',
    'Contemporary architectural design with premium finishing',
    'Well-appointed living and dining areas',
    'Modern kitchen fittings and stylish bathroom fixtures',
    'Ground-floor parking for residents and visitors',
  ],
  amenities: [
    { key: 'concierge', label: 'Concierge Service' },
    { key: 'power', label: '24-hour Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'security', label: '24-hour Security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'facility', label: 'Facility Management' },
    { key: 'elevator', label: 'Elevator Access' },
  ],
  heroImage: '/properties/sirius-property-main.jpg',
  address: '7 Manuwa Street, off Awolowo Way, South-West Ikoyi, Lagos',
  videoUrl: 'https://www.youtube.com/embed/3mprWoojxO0?feature=oembed?playlist=3mprWoojxO0&mute=0&autoplay=0&loop=no&controls=0&start=0&end=',
  videoTitle: 'The Sirius: Site Tour',
  ...siriusAssets,

  descriptionImage: '/portfolio/the-sirius/interior/the-Sirius-02.jpg'
}