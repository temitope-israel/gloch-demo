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
          className="nav-link hover:text-gold text-sm font-medium text-white/80 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
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
//           className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
//         >
//           {item.label}
//           <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
//         </Link>
//       ))}
//     </div>
//   );
// }
