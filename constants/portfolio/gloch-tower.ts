// constants/properties/gloch-tower.ts
import type { Property } from './types'
import { glochTowerAssets } from './gloch-tower-assets'


export const glochTower: Property = {
  slug: 'gloch-tower',
  name: 'Gloch Tower',
  location: 'Banana Island, Ikoyi, Lagos',
  stats: {
    status: 'Finishing works ongoing',
    area: '1528sqm',
    type: 'Apartments and Maisonettes',
    apartments: '38',
    totalFloors: '17',
    flatSize: '140sqm \u2013 496sqm',
  },
  overviewTitle: 'Premium Living in the Heart of Victoria Island',
  description: [
    'Rising boldly over A.J. Marinho Drive, Gloch Tower is a 17-floor masterpiece crafted for today\u2019s ambitious urban professionals. From stylish 1-bedroom apartments to luxurious 3-bedroom apartments and exclusive 4-bedroom maisonette penthouses, every space is thoughtfully designed with elegance and comfort in mind.',
    'A striking modern fa\u00e7ade, sophisticated interiors, and impeccably finished shared spaces ensure Gloch Tower instantly stands out as a true showpiece in the skyline. With a multi-level car park spanning 3 floors, convenience meets class from the moment you arrive.',
    'Savor refreshing Atlantic Ocean views, enjoy high rental demand, and watch your investment grow in the heartbeat of Lagos\u2019 busiest commercial district. At Gloch Stylistic, we believe luxury shouldn\u2019t be out of reach \u2014 we focus on the features that truly matter, with exceptional design, premium finishes, and smart living spaces, while keeping pricing competitive and accessible.',
    'By securing your home at Gloch Tower early, you unlock flexible and extended payment plans, instant value growth from day one, and customization options that reflect your personal style. Live better. Invest wiser.',
  ],
  keyAdvantages: [
    'Prime location in Victoria Island, one of Lagos\u2019 most prestigious commercial and residential districts',
    'Elevated tower development with 17 floors, offering expansive city and Atlantic Ocean views',
    'Strong investment and rental potential due to high demand for premium apartments in Victoria Island',
    'Developed by Gloch Stylistic Limited, a trusted real estate and construction firm known for quality and reliability',
    'Close proximity to major business hubs, financial institutions, luxury hotels, restaurants and entertainment centers',
    'Designed to offer modern urban living within a secure and well-managed environment',
  ],
  features: [
    'Contemporary high-rise tower spanning 17 floors',
    'Well-designed 1-bedroom apartments',
    'Spacious 3-bedroom apartments with maid\u2019s room/boys\u2019 quarters',
    'Luxury 4-bedroom maisonettes with maid\u2019s room/boys\u2019 quarters',
    'Modern architectural design with premium finishing',
    'Expansive living spaces with large windows allowing natural light and Atlantic Ocean views',
    'Well-appointed kitchens and contemporary bathroom fittings',
    'Three levels of dedicated parking spaces for residents and visitors',
    'High-speed elevator access within the building',
  ],
  amenities: [
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'gym', label: 'Fully Equipped Gym' },
    { key: 'lounge', label: 'Lounge' },
    { key: 'concierge', label: 'Concierge Services' },
    { key: 'power', label: '24x7 Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'security', label: '24x7 Security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  heroImage: '/properties/gloch-property-main.png',
    address: '9 AJ Marinho Drive, Victoria Island, Lagos',
  ...glochTowerAssets,
  descriptionImage: '/portfolio/gloch-tower/interior/gloch23.jpg'
}