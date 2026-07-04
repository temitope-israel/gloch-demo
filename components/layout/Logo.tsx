// components/layout/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="#home" className="relative block h-12 w-[70px] shrink-0">
      <Image
        src="/logo.png"
        alt="Gloch Stylistic Limited"
        fill
        sizes="70px"
        className="object-contain"
        priority
      />
    </Link>
  );
}
