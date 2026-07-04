// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Container } from '@/components/ui/Container';
import { footerQuickLinks, footerServices, contactInfo, socialLinks } from '@/constants/footer';

// Maps the plain string from our constants file to an actual icon component.
// This lookup lives here (in the component), not in constants/footer.ts,
// keeping data and presentation cleanly separated.
const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <Container>
        <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-4 md:py-24">
          {/* Column 1: Logo + short description */}
          <div className="md:col-span-1">
            <Link href="#home" className="relative block h-12 w-[70px]">
              <Image
                src="/logo.png"
                alt="Gloch Stylistic Limited"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Trusted real estate management and development, built on transparency and precision.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-gold text-sm font-semibold tracking-widest uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="text-gold h-5 w-5 shrink-0" aria-hidden />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Mail className="text-gold h-5 w-5 shrink-0" aria-hidden />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Phone className="text-gold h-5 w-5 shrink-0" aria-hidden />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: social links + copyright */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {currentYear} Gloch Stylistic Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:border-gold hover:text-gold flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
