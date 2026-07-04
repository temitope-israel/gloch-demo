// components/layout/NavLinks.tsx
import Link from 'next/link';
import { navItems } from '@/constants/nav';

export function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-gold text-sm font-medium text-white/80 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
