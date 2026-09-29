// constants/hero.ts

export interface HeroSlide {
  id: string;
  eyebrow?: string;
  headline: string;
  subheading?: string;
  video: string;
  poster?: string;
  colPosition: 1 | 2 | 3; // 1 = Left, 2 = Center, 3 = Right
  cta: { label: string; href: string };
  tabTitle: string; // Bottom label (e.g. "Palm Jebel Ali")
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'Palm Central Private Residences',
    headline: 'A Calm Called Home',
    video: '/videos/hero-1.mp4',
    poster: '/images/hero-1-poster.jpg',
    colPosition: 1,
    tabTitle: 'Atari Residences',
    cta: { label: 'DISCOVER MORE', href: '/' },
  },
  {
    id: 'slide-2',
    eyebrow: 'Exclusive Beachfront Living',
    headline: 'Unrivaled Coastal Serenity',
    video: '/videos/hero-2.mp4',
    poster: '/images/hero-2-poster.jpg',
    colPosition: 2,
    tabTitle: 'The Galilee',
    cta: { label: 'EXPLORE RESIDENCES', href: '/' },
  },
  {
    id: 'slide-3',
    eyebrow: 'Architectural Masterpiece',
    headline: 'Elevated Above The Skyline',
    video: '/videos/hero-3.mp4',
    poster: '/images/hero-3-poster.jpg',
    colPosition: 3,
    tabTitle: 'Gloch Tower',
    cta: { label: 'VIEW MASTERPLAN', href: '/' },
  },
];

