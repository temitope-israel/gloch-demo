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
    phoneNumber: '+234 916 985 5031',
  },
  {
    id: 'support',
    label: 'Customer Support',
    role: 'Get help with an existing booking or account',
    phoneNumber: '+234 809 301 1119',
  },
]