// constants/properties/galilee.ts
import type { Property } from './types'
import { galileeAssets } from './galilee-assets'

export const galilee: Property = {
  slug: 'the-galilee',
  name: 'The Galilee',
  location: 'Banana Island, Ikoyi, Lagos',
  stats: {
    status: 'Seventh floor slab works ongoing',
    area: '2000sqm',
    type: 'Luxury Apartments',
    apartments: '38',
    totalFloors: '18',
    flatSize: '256sqm \u2013 507sqm',
  },
  overviewTitle: 'The Galilee \u2014 Banana Island Living with Waterview Elegance',
  description: [
    'Discover The Galilee \u2014 where luxury, serenity, and prestige come together. Located on Kwara Street in Banana Island, Lagos, a location reserved for those who value privacy, status, and enduring excellence. This is not just a residence; it is a mark of distinction.',
    'Designed with architectural precision and built to exceptional standards, with every detail carefully considered. The Galilee reflects a seamless blend of elegance and functionality. Each residence features spacious layouts, premium finishes from globally trusted brands, and modern amenities such as smart-home readiness, energy-efficient systems, and high-performance materials, all tailored for lasting comfort and value.',
    'Life in Banana Island is defined by order, discretion, and security. With strictly controlled access, pristine infrastructure, and a well-managed environment, residents enjoy a rare sense of calm within the heart of Lagos\u2019 most dynamic district.',
    'The Galilee offers captivating water views alongside the iconic skyline of Ikoyi and Victoria Island, a daily reminder of its prime positioning at the center of influence and affluence. With land in Banana Island becoming increasingly scarce, ownership here transcends lifestyle; it is a strategic acquisition that preserves wealth and secures long-term capital appreciation.',
  ],
  keyAdvantages: [
    'Prime Banana Island address \u2014 Nigeria\u2019s most prestigious enclave',
    'Prominent waterview vistas from upper levels',
    'Secure and strictly gated community with unmatched infrastructure',
    'Spacious luxury residences designed for comfort and long-term living',
    'Premium finishes + smart technology integration',
    'Strong investment potential in a low-density, supply-restricted market',
  ],
  features: [
    'Spacious 3-bedroom apartments with maid room/boys\u2019 quarter',
    'Elegant 4-bedroom maisonettes with two maid rooms/boys\u2019 quarters',
    'Exclusive 4-bedroom triplex penthouse with two maid rooms/boys\u2019 quarters',
    'Private elevator dedicated to the penthouse residence, plus elevators for other residences',
    'Modern architectural design with premium finishing',
    'Spacious living areas and well-appointed bedrooms',
    'High-quality kitchen fittings and contemporary bathroom designs',
    'Floor-to-ceiling windows for natural light and ventilation',
    'All bedrooms en-suite',
  ],
  amenities: [
    { key: 'power', label: '24/7 Power Supply' },
    { key: 'security', label: '24x7 Security' },
    { key: 'spa', label: 'Spa/Sauna' },
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'elevator', label: 'Elevator Access' },
    { key: 'concierge', label: 'Concierge Services' },
    { key: 'parking', label: 'Ample Parking Spaces' },
    { key: 'gym', label: 'Fully Fitted Gym' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'lounge', label: 'Lounge' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  // Placeholder \u2014 real exterior/interior photography pending from Gloch,
  // same as the Our Team photos. Reusing an existing property image for now.
  heroImage: '/properties/galilee-property-main.webp',

  // constants/portfolio/galilee.ts
videoUrl: 'https://www.youtube.com/embed/uWnijCItQlQ?feature=oembed?playlist=uWnijCItQlQ&mute=0&autoplay=0&loop=no&controls=0&start=0&end=',
videoTitle: 'The Galilee: Site Tour',

address: 'Kwara Street, Banana Island, Lagos',
  ...galileeAssets,

  descriptionImage: '/portfolio/the-galilee/interior/galilee-stairs-scaled.webp'
}