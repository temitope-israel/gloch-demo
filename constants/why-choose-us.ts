// constants/why-choose-us.ts
import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, Users, MapPin, FileCheck } from 'lucide-react'

export interface WhyChooseUsItem {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Every property is thoroughly vetted before it reaches you, so you can move forward with full confidence.',
  },
  {
    icon: Users,
    title: 'Trusted Experts',
    description: 'Our team brings deep local market knowledge to every transaction, guiding you at each step.',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'We focus on properties in locations with strong long-term value and growth potential.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Transactions',
    description: 'Clear documentation and honest communication, from first inquiry to final handover.',
  },
]