// constants/nav.ts

export interface NavItem {
  label: string
  href: string
}

export interface NavGroup {
  label: string
  href?: string // <-- Added optional href for parent group links
  items: NavItem[]
}

export type NavEntry = NavItem | NavGroup

function isGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry && Array.isArray(entry.items) && entry.items.length > 0
}

export const navItems: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    // href: "/about", // <-- Direct route
    items: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "CEO", href: "/about/ceo" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio", // <-- Added direct route
    items: [
      { label: "The Galilee", href: "/portfolio/the-galilee" },
      { label: "Gloch Tower", href: "/portfolio/gloch-tower" },
      { label: "Atari Residences", href: "/portfolio/atari-residences" },
      { label: "The Lavender", href: "/portfolio/the-lavender" },
      { label: "The Sirius", href: "/portfolio/the-sirius" },
      { label: "Elyth Apartments", href: "/portfolio/elyth-apartments" },
      { label: "Quadrant Mall", href: "/portfolio/quadrant-mall" },
      { label: "Sarrie Apartments", href: "/portfolio/sarrie-apartments" },
    ],
  },
  {label: "Media", href: "/media"},
  { label: "Contact", href: "/contact" },
]

export { isGroup }