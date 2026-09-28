// constants/whatsapp.ts

export interface WhatsAppContact {
  id: string
  label: string
  role: string
  phoneNumber: string // digits only, country code, no leading zero
}

export const whatsappContacts: WhatsAppContact[] = [
  {
    id: 'sales',
    label: 'Sales Enquiries',
    role: 'Speak with our sales team about properties',
    phoneNumber: '+2349169855031',
  },
  {
    id: 'support',
    label: 'Customer Support',
    role: 'Get help with an existing booking or account',
    phoneNumber: '+2348093011119',
  },
]