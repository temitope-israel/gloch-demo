// constants/properties.ts

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds?: number;
  baths?: number;
  area: string;
  type: string;
  floors: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 'prop-1',
    slug: 'the-galilee',
    title: 'The Galilee',
    location: 'Banana Island, Ikoyi, Lagos',
    price: 'Price on Request',
    image: '/properties/property-1.jpg',
    area: '256sqm – 507sqm',
    type: 'Luxury Apartments & Penthouses',
    floors: '18 Floors',
    description:
      'Located on Kwara Street in Banana Island, offering high-rise luxury residences, triplex penthouses, and captivating water views over Ikoyi.',
  },
  {
    id: 'prop-2',
    slug: 'gloch-tower',
    title: 'Gloch Tower',
    location: 'Victoria Island, Lagos',
    price: 'Price on Request',
    image: '/properties/property-2.jpg',
    area: '140sqm – 496sqm',
    type: 'Apartments & Maisonettes',
    floors: '17 Floors',
    description:
      'A 17-floor high-rise over A.J. Marinho Drive featuring Atlantic Ocean views, modern architectural design, and 3 levels of dedicated parking.',
  },
  {
    id: 'prop-3',
    slug: 'atari-residences',
    title: 'Atari Residences',
    location: 'South-West Ikoyi, Lagos',
    price: 'Price on Request',
    image: '/properties/property-3.jpg',
    area: '145sqm – 770sqm',
    type: 'Apartments & Maisonettes',
    floors: '12 Floors',
    description:
      'Situated on Maduike Street off Raymond Njoku, offering private mid-density waterfront living, infinity pool, and lush green spaces.',
  },
  {
    id: 'prop-4',
    slug: 'the-lavender',
    title: 'The Lavender',
    location: 'Victoria Island, Lagos',
    price: 'Price on Request',
    image: '/properties/property-4.jpg',
    area: '132sqm – 410sqm',
    type: 'Apartments & Maisonettes',
    floors: '10 Floors',
    description:
      'Elevated living on Idejo Street, featuring studio to 4-bedroom maisonette penthouses with outdoor lounge, spa, and panoramic views.',
  },
  {
    id: 'prop-5',
    slug: 'the-sirius',
    title: 'The Sirius',
    location: 'South-West Ikoyi, Lagos',
    price: 'Price on Request',
    image: '/properties/sirius-property-main.jpg',
    area: '158sqm – 420sqm',
    type: 'Apartments & Maisonettes',
    floors: '11 Floors',
    description:
      'Refined living on Manuwa Street off Awolowo Road, offering spectacular views of the Lagos Lagoon and Atlantic Ocean.',
  },
  {
    id: 'prop-6',
    slug: 'elyth-apartments',
    title: 'Elyth Apartments',
    location: 'Lekki Phase 1, Lagos',
    price: 'Price on Request',
    image: '/properties/elyth-property-main.jpeg',
    area: '110sqm – 285sqm',
    type: 'Apartments',
    floors: '8 Floors',
    description:
      'Contemporary apartments located off Freedom Way in Lekki Phase 1, designed with rooftop open lounge, gym, and dual elevator access.',
  },
];

export const featuredProperties = properties.slice(0, 4)


// // constants/properties.ts

// export interface Property {
//   id: string
//   title: string
//   location: string
//   price: string
//   image: string
//   beds: number
//   baths: number
//   area: string // e.g. "450 sqm"
//   description: string
// }

// export const properties: Property[] = [
//   {
//     id: 'prop-1',
//     title: 'The Lekki Waterfront Residence',
//     location: 'Lekki Phase 1, Lagos',
//     price: '₦450,000,000',
//     image: '/properties/property-1.jpg',
//     beds: 5,
//     baths: 6,
//     area: '620 sqm',
//     description:
//       'An exceptional contemporary residence offering sweeping panoramic waterfront views, private jetty access, automated smart-home systems, and custom infinity pool design.',
//   },
//   {
//     id: 'prop-2',
//     title: 'Ikoyi Skyline Penthouse',
//     location: 'Ikoyi, Lagos',
//     price: '₦680,000,000',
//     image: '/properties/property-2.jpg',
//     beds: 4,
//     baths: 5,
//     area: '480 sqm',
//     description:
//       'Ultra-luxury high-rise penthouse boasting double-height floor-to-ceiling glass wrapping, expansive terrace lounge, private elevator lobby, and custom marble finishes.',
//   },
//   {
//     id: 'prop-3',
//     title: 'Banana Island Estate',
//     location: 'Banana Island, Lagos',
//     price: '₦1,200,000,000',
//     image: '/properties/property-3.jpg',
//     beds: 6,
//     baths: 7,
//     area: '900 sqm',
//     description:
//       'Pinnacle architectural estate nestled in Nigeria’s most elite enclave. Features lush landscaped gardens, subterranean wine cellar, private spa, and 8-car basement garage.',
//   },
//   {
//     id: 'prop-4',
//     title: 'Victoria Island Modern Villa',
//     location: 'Victoria Island, Lagos',
//     price: '₦520,000,000',
//     image: '/properties/property-4.jpg',
//     beds: 5,
//     baths: 5,
//     area: '550 sqm',
//     description:
//       'Sleek minimalist design tailored for executive comfort. Includes open-plan gourmet kitchen, secluded outdoor plunge pool, cinema room, and round-the-clock integrated perimeter security.',
//   },
//   {
//     id: 'prop-5',
//     title: 'Chevron Drive Family Home',
//     location: 'Lekki, Lagos',
//     price: '₦310,000,000',
//     image: '/properties/property-5.jpg',
//     beds: 4,
//     baths: 4,
//     area: '400 sqm',
//     description:
//       'Thoughtfully planned contemporary residence featuring expansive open-concept living quarters, private BQ, family lounge, and serene gated community privacy.',
//   },
//   {
//     id: 'prop-6',
//     title: 'Parkview Estate Townhouse',
//     location: 'Ikoyi, Lagos',
//     price: '₦395,000,000',
//     image: '/properties/property-6.jpg',
//     beds: 4,
//     baths: 4,
//     area: '380 sqm',
//     description:
//       'Elegant multi-level townhouse boasting bespoke architectural woodwork, private roof terrace with city views, and seamless access to Ikoyi commercial hubs.',
//   },
// ]

// export const featuredProperties = properties.slice(0, 4)