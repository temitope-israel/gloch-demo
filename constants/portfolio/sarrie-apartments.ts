import type { Property } from './types'
import { sarrieApartmentsAssets } from './sarrie-apartments-assets'

export const sarrieApartments: Property = {
  slug: 'sarrie-apartments',
  name: 'Sarrie Apartments',
  location: 'Onitana Road, Ikoyi, Lagos',
  stats: {
    status: '100% Completed',
    area: '1178sqm',
    type: 'Luxury Apartments',
    apartments: '11',
    totalFloors: '6 suspended floors',
    flatSize: '3-bedroom & 4-bedroom penthouses',
  },
  overviewTitle: 'Sarrie Apartments — Serene Luxury Living in Old Ikoyi',
  description: [
    'Sarrie Apartments is an exquisitely designed project sitting on six suspended floors, comprising ten units of well-finished 3-bedroom apartments with a maid’s room/BQ and laundry, and one 4-bedroom luxury penthouse with maid’s room/BQ and laundry.',
    'Our contemporary building design contributes to the urban landscape that defines the taste, quality and lifestyle that is well appointed for the serene environment old Ikoyi provides.',
    'The deployment of modern technologies plays an essential role in all its components, from substructure to the finishing. It ensures a sense of belonging; the feeling of coming to a place of pure warmth and tranquility.',
    'Sarrie Apartments is also classified as prime real estate, whose value will continue to guarantee an upward trajectory on return on investment (ROI).',
  ],
  keyAdvantages: [
    'Prime location in the tranquil and highly sought-after Old Ikoyi neighborhood',
    'High ROI potential driven by strong demand for luxury rentals in Ikoyi',
    'Developed by Gloch Stylistics Limited, ensuring structural excellence and premium finishes',
    'Proximity to exclusive social destinations like the Ikoyi Club and major commercial hubs',
    'Modern building automation and smart infrastructure throughout',
  ],
  features: [
    'Well-finished 3-bedroom apartments with maid’s room/BQ and laundry',
    'Exclusive 4-bedroom luxury penthouse with maid’s room/BQ and laundry',
    'Contemporary architectural design integrated with high-tech substructures',
    'Spacious living areas with premium interior finishing',
    'Modern kitchen fittings and elegantly appointed bathrooms',
  ],
  amenities: [
    { key: 'cctv', label: 'Surveillance System' },
    { key: 'security', label: '24-Hour Security' },
    { key: 'fire', label: 'Firefighting System' },
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'water', label: 'Water Treatment Plant' },
    { key: 'elevator', label: 'Elevator Access' },
    { key: 'gym', label: 'Gymnasium' },
    { key: 'lighting', label: 'Day and Night Light Sensors' },
  ],
  heroImage: '/properties/sarrie-property-main.jpg',
  address: '8 Onitana Road, off Mobolaji Johnson Avenue, by Ikoyi Club Road, Ikoyi',
  ...sarrieApartmentsAssets,
  descriptionImage: '/portfolio/sarrie-apartments/exterior/sarrie-1.jpg',
}