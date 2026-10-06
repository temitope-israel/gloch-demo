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


