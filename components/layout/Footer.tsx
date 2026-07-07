// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Container } from '@/components/ui/Container';
import { footerQuickLinks, footerServices, contactInfo, socialLinks } from '@/constants/footer';

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-[--color-border] font-sans text-white/90 transition-colors duration-300">
      <Container>
        {/* Main Footer Matrix */}
        {/* UPGRADE: Shifted to an asymmetrical 5-column layout configuration on desktop for high-end spacing */}
        <div className="grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-5 lg:py-24">
          {/* Column 1: Brand Identifier Panel (Spans 2 columns for comfortable type layouts) */}
          <div className="pr-0 lg:col-span-2 lg:pr-12">
            <Link
              href="#home"
              className="relative block h-10 w-[76px] transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt="Gloch Stylistic Limited"
                fill
                className="object-contain brightness-100 filter"
              />
            </Link>
            <p className="text-small text-warm-gray-400 mt-6 max-w-sm leading-relaxed font-light tracking-wide">
              Trusted real estate management and development, built on transparency, timeless
              architecture, and definitive precision.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation Group */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase drop-shadow-sm">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-small text-warm-gray-400 relative inline-flex font-light transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                    {/* UPGRADE: Ultra-clean baseline reveal line */}
                    <span className="bg-gold absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services Panel */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase drop-shadow-sm">
              Services
            </h3>
            <ul className="mt-6 space-y-3.5">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group text-small text-warm-gray-400 relative inline-flex font-light transition-colors duration-300 hover:text-white"
                  >
                    {service.label}
                    <span className="bg-gold absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational Headquarters Information */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase drop-shadow-sm">
              Headquarters
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="text-small text-warm-gray-400 flex items-start gap-3.5 leading-relaxed font-light">
                <MapPin className="text-gold mt-0.5 h-4 w-4 shrink-0 stroke-[1.5]" aria-hidden />
                <span>{contactInfo.address}</span>
              </li>

              <li className="text-small text-warm-gray-400 flex items-center gap-3.5 font-light">
                <Mail className="text-gold h-4 w-4 shrink-0 stroke-[1.5]" aria-hidden />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="tracking-wide break-all transition-colors duration-300 hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>

              <li className="text-small text-warm-gray-400 flex items-center gap-3.5 font-light">
                <Phone className="text-gold h-4 w-4 shrink-0 stroke-[1.5]" aria-hidden />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="tracking-wide transition-colors duration-300 hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Base Banner Panel */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-white/[0.08] py-8 md:flex-row">
          {/* Copyright Copy */}
          <p className="text-warm-gray-500 text-xs font-light tracking-wide">
            © {currentYear} Gloch Stylistic Limited. All rights reserved.
          </p>

          {/* Minimalist Social Icon Matrix Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              if (!Icon) return null;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group text-warm-gray-400 hover:border-gold hover:text-gold flex h-10 w-10 items-center justify-center rounded-xs border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

// // components/layout/Footer.tsx
// import Link from 'next/link';
// import Image from 'next/image';
// import { MapPin, Mail, Phone } from 'lucide-react';
// import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
// import { Container } from '@/components/ui/Container';
// import { footerQuickLinks, footerServices, contactInfo, socialLinks } from '@/constants/footer';

// // Maps the plain string from our constants file to an actual icon component.
// // This lookup lives here (in the component), not in constants/footer.ts,
// // keeping data and presentation cleanly separated.
// const socialIcons = {
//   instagram: FaInstagram,
//   facebook: FaFacebookF,
//   linkedin: FaLinkedinIn,
//   x: FaXTwitter,
// };

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#0A0A0A] text-white">
//       <Container>
//         <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-4 md:py-24">
//           {/* Column 1: Logo + short description */}
//           <div className="md:col-span-1">
//             <Link href="#home" className="relative block h-12 w-[70px]">
//               <Image
//                 src="/logo.png"
//                 alt="Gloch Stylistic Limited"
//                 fill
//                 className="object-contain"
//               />
//             </Link>
//             <p className="mt-4 text-sm leading-relaxed text-white/60">
//               Trusted real estate management and development, built on transparency and precision.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">
//               Quick Links
//             </h3>
//             <ul className="mt-4 space-y-3">
//               {footerQuickLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="group relative text-sm text-white/70 transition-colors hover:text-white"
//                   >
//                     {link.label}
//                     <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">Services</h3>
//             <ul className="mt-4 space-y-3">
//               {footerServices.map((service) => (
//                 <li key={service.label}>
//                   <Link
//                     href={service.href}
//                     className="group relative text-sm text-white/70 transition-colors hover:text-white"
//                   >
//                     {service.label}
//                     <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact */}
//           <div>
//             <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">Contact</h3>
//             <ul className="mt-4 space-y-4">
//               <li className="flex gap-3 text-sm text-white/70">
//                 <MapPin className="text-gold h-5 w-5 shrink-0" aria-hidden />
//                 <span className="break-words">{contactInfo.address}</span>
//               </li>
//               <li className="flex gap-3 text-sm text-white/70">
//                 <Mail className="text-gold h-5 w-5 shrink-0" aria-hidden />
//                 <a href={`mailto:${contactInfo.email}`} className="break-all hover:text-white">
//                   {contactInfo.email}
//                 </a>
//               </li>
//               <li className="flex gap-3 text-sm text-white/70">
//                 <Phone className="text-gold h-5 w-5 shrink-0" aria-hidden />
//                 <a
//                   href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
//                   className="hover:text-white break-all"
//                 >
//                   {contactInfo.phone}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar: social links + copyright */}
//         <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
//           <p className="text-sm text-white/50">
//             © {currentYear} Gloch Stylistic Limited. All rights reserved.
//           </p>

//           <div className="flex items-center gap-4">
//             {socialLinks.map((social) => {
//               const Icon = socialIcons[social.icon];
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="hover:border-gold hover:text-gold flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// }
