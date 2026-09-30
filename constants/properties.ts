// constants/properties.ts

export interface Property {
  id: string
  title: string
  location: string
  price: string
  image: string
  beds: number
  baths: number
  area: string // e.g. "450 sqm"
}

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'The Lekki Waterfront Residence',
    location: 'Lekki Phase 1, Lagos',
    price: '₦450,000,000',
    image: '/properties/property-1.jpg',
    beds: 5,
    baths: 6,
    area: '620 sqm',
  },
  {
    id: 'prop-2',
    title: 'Ikoyi Skyline Penthouse',
    location: 'Ikoyi, Lagos',
    price: '₦680,000,000',
    image: '/properties/property-2.jpg',
    beds: 4,
    baths: 5,
    area: '480 sqm',
  },
  {
    id: 'prop-3',
    title: 'Banana Island Estate',
    location: 'Banana Island, Lagos',
    price: '₦1,200,000,000',
    image: '/properties/property-3.jpg',
    beds: 6,
    baths: 7,
    area: '900 sqm',
  },
  {
    id: 'prop-4',
    title: 'Victoria Island Modern Villa',
    location: 'Victoria Island, Lagos',
    price: '₦520,000,000',
    image: '/properties/property-4.jpg',
    beds: 5,
    baths: 5,
    area: '550 sqm',
  },
  {
    id: 'prop-5',
    title: 'Chevron Drive Family Home',
    location: 'Lekki, Lagos',
    price: '₦310,000,000',
    image: '/properties/property-5.jpg',
    beds: 4,
    baths: 4,
    area: '400 sqm',
  },
  {
    id: 'prop-6',
    title: 'Parkview Estate Townhouse',
    location: 'Ikoyi, Lagos',
    price: '₦395,000,000',
    image: '/properties/property-6.jpg',
    beds: 4,
    baths: 4,
    area: '380 sqm',
  },
]

// Homepage only shows a curated subset — the "View All Properties" button
// would eventually link to a full /properties listing page (out of scope
// for this demo, but the data structure already supports it).
export const featuredProperties = properties.slice(0, 4)