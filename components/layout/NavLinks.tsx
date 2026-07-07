// components/layout/NavLinks.tsx
import Link from 'next/link';
import { navItems } from '@/constants/nav';

export function NavLinks() {
  return (
    <nav className="flex items-center gap-8" aria-label="Main Navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          // UPGRADE: Uses font-sans, text-small, and provides a stable left padding
          // so your gold dot animation doesn't cause text layout jitter.
          className="nav-link text-small hover:text-gold relative pl-3 font-sans font-medium text-white/85 transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

// // components/layout/NavLinks.tsx
// import Link from 'next/link';
// import { navItems } from '@/constants/nav';

// export function NavLinks() {
//   return (
//     <div className="flex items-center gap-8">
//       {navItems.map((item) => (
//         <Link
//           key={item.href}
//           href={item.href}
//           className="nav-link hover:text-gold text-sm font-medium text-white/80 transition-colors"
//         >
//           {item.label}
//         </Link>
//       ))}
//     </div>
//   );
// }
