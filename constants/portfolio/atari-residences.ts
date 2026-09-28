import type { Property } from './types'
import { atariResidencesAssets } from './atari-residences-assets'

export const atariResidences: Property = {
  slug: 'atari-residences',
  name: 'Atari Residences',
  location: 'South-West Ikoyi, Lagos',
  stats: {
    status: 'Basement and ground floor construction ongoing',
    area: '1,417.12sqm',
    type: 'Apartments and Maisonettes',
    apartments: '28',
    totalFloors: '12',
    flatSize: '145sqm – 770sqm',
  },
  overviewTitle: 'Atari Residences – Ikoyi Waterfront Luxury. Family Comfort. Enduring Value.',
  description: [
    'Perfectly positioned in the serene heart of South-West Ikoyi, just off Awolowo Road, Atari Residences redefines premium waterfront living.',
    'Rising elegantly over 12 floors, this exclusive development offers breathtaking views of the city skyline and the calming expanse of water; a true escape within prestigious Ikoyi.',
    'Each home is thoughtfully crafted to deliver exceptional comfort and timeless sophistication. Choose from exquisite 2-bedroom apartments, luxurious 3-bedroom apartments, exclusive 4-bedroom maisonettes and opulent 5-bedroom maisonette penthouses, all with maid’s rooms/boys’ quarters.',
    'Designed for those who appreciate privacy and refined living, Atari Residences features world-class amenities including a stunning infinity pool, beautifully landscaped green spaces, modern fitness and relaxation facilities, and secure underground parking.',
    'A rare waterfront opportunity, Atari Residences offers mid-density private living in Ikoyi’s most coveted district, architectural design perfectly suited for executives and growing families, exclusive amenities ensuring complete comfort and serenity, and strong long-term value backed by the scarcity of waterfront land.',
    'Owning a home here isn’t just a lifestyle upgrade; it’s a smart investment in generational wealth.',
    'Atari Residences: Where luxury meets tranquility, and every day feels extraordinary.',
  ],
  keyAdvantages: [
    'Prime waterfront location in South-West Ikoyi, offering exclusivity and stunning lagoon views',
    'Situated within one of Lagos’ most prestigious and high-value residential neighborhoods',
    'Strong capital appreciation and rental potential, making it attractive for both homeowners and investors',
    'Developed by Gloch Stylistic Limited, a reputable real estate and construction firm with a proven track record',
    'Luxury high-rise development spanning 12 floors, designed to deliver privacy, comfort, and panoramic views',
    'Easy access to major business districts, leisure destinations and key parts of Lagos Island',
    'Secure and serene environment ideal for premium urban living',
  ],
  features: [
    'Elegant 2-bedroom apartments with Maid’s room/boys’ quarter',
    'Spacious 3-bedroom apartments with Maid’s room/boys’ quarter',
    'Luxury 4-bedroom maisonettes with Maid’s room/boys’ quarter',
    'Exclusive 5-bedroom maisonette penthouse with Maid’s room/boys’ quarter',
    'Contemporary architectural design with premium finishing',
    'Expansive living and dining areas designed for comfort and sophistication',
    'Large windows providing natural lighting and waterfront views',
    'Modern kitchen fittings and well-appointed bathrooms',
    'Dedicated basement parking for residents',
  ],
  amenities: [
    { key: 'pool', label: 'Infinity Swimming Pool' },
    { key: 'gym', label: 'Fully Equipped Gym' },
    { key: 'lounge', label: 'Lounge' },
    { key: 'concierge', label: 'Concierge Services' },
    { key: 'power', label: '24x7 Power Supply' },
    { key: 'water', label: '24x7 Water Supply' },
    { key: 'security', label: '24x7 Security' },
    { key: 'cctv', label: 'CCTV Surveillance' },
    { key: 'elevator', label: 'Elevators' },
    { key: 'facility', label: 'Facility Management Services' },
  ],
  heroImage: '/properties/atari-property-main.jpeg',
  address: '9 Maduike Street, off Raymond Njokwu Street, S.W. Ikoyi',
  ...atariResidencesAssets,

    descriptionImage: '/portfolio/atari-residences/exterior/AT-03.png'
}