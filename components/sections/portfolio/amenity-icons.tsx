// components/sections/portfolio/amenity-icons.tsx
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Waves,
  ArrowUpDown,
  BellRing,
  Car,
  Dumbbell,
  Droplet,
  Armchair,
  Wrench,
  Camera,
} from 'lucide-react';

export const amenityIcons: Record<string, typeof Zap> = {
  power: Zap,
  security: ShieldCheck,
  spa: Sparkles,
  pool: Waves,
  elevator: ArrowUpDown,
  concierge: BellRing,
  parking: Car,
  gym: Dumbbell,
  water: Droplet,
  lounge: Armchair,
  facility: Wrench,
  cctv: Camera,
};
