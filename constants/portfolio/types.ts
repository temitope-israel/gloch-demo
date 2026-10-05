// constants/properties/types.ts
export interface PropertyBrochure { label: string; href: string }
export interface PropertyGallery { exterior: string[]; interior: string[]; siteUpdate: string[] }




export interface PropertyStats {
  status?: string
  area: string
  type: string
  apartments?: string
  totalFloors: string
  flatSize?: string
}

export interface PropertyAmenity {
  key: string
  label: string
}

export interface Property {
  slug: string
  name: string
  location: string
  stats: PropertyStats
  overviewTitle: string
  description: string[]
  keyAdvantages: string[]
  features: string[]
  amenities: PropertyAmenity[]
  heroImage: string
  videoUrl?: string
  videoTitle?: string
   descriptionImage?: string
  brochures?: PropertyBrochure[]
  gallery?: PropertyGallery
  address?: string
}


export type PropertyAssets = Pick<Property, 'descriptionImage' | 'brochures' | 'gallery'>