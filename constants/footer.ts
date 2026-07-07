// constants/footer.ts

// Reusing the same links as the navbar for "Quick Links" — but note this is
// a DIFFERENT concern from constants/nav.ts, so we keep them separate even
// though the values overlap right now. If the footer's link list ever needs
// to diverge from the navbar (e.g., footer adds a "Careers" link the nav
// doesn't have), they won't fight each other.
export const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Contact', href: '#contact' },
] as const

export const footerServices = [
  { label: 'Property Management', href: '#services' },
  { label: 'Property Development', href: '#services' },
  { label: 'Property Maintenance', href: '#services' },
] as const

export const contactInfo = {
  address: '11a, Prince Alaba Abiodun Oniru Way, Victoria Island, Lagos, Nigeria.',
  email: 'info@glochstylistic.com',
  phone1: '+234 809 301 1119',
  phone2: '+234 916 985 5031',
} as const

// href values are placeholders — swap with real profile URLs later
export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
] as const