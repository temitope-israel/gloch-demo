// app/layout.tsx
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'], // only the weights we actually use
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'], // only the weights we actually use
});

// This constant lets us reuse the same base URL across metadata fields
// below, rather than hardcoding it in multiple places (title template,
// Open Graph URL, canonical, etc). Update this once when the real
// domain is live.
const siteUrl = 'https://glochstylistic.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // %s is replaced by each page's own title — since this is a single-page
  // demo, only the homepage's title matters right now, but this pattern
  // scales cleanly if the site ever grows additional pages.
  title: {
    default: 'Gloch Stylistic Limited | Luxury Real Estate, Lagos',
    template: '%s | Gloch Stylistic Limited',
  },

  description:
    'Gloch Stylistic Limited offers trusted luxury real estate management and development services in Lagos, Nigeria. Verified listings, transparent transactions, prime locations.',

  keywords: [
    'luxury real estate Lagos',
    'property management Nigeria',
    'property development Lagos',
    'Lekki real estate',
    'Ikoyi property',
    'Gloch Stylistic',
  ],

  authors: [{ name: 'Gloch Stylistic Limited' }],

  // Open Graph — controls how the link looks when shared on WhatsApp,
  // Facebook, LinkedIn, iMessage, etc. Given your audience research
  // (WhatsApp-first communication), this is genuinely high-value —
  // a rich preview card when someone shares the link in a chat.
  openGraph: {
    title: 'Gloch Stylistic Limited | Luxury Real Estate, Lagos',
    description:
      'Trusted luxury real estate management and development services in Lagos, Nigeria.',
    url: siteUrl,
    siteName: 'Gloch Stylistic Limited',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px, created below
        width: 1200,
        height: 630,
        alt: 'Gloch Stylistic Limited',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },

  // Twitter/X card — separate from Open Graph since X doesn't always
  // respect OG tags fully; this ensures a good preview there too.
  twitter: {
    card: 'summary_large_image',
    title: 'Gloch Stylistic Limited | Luxury Real Estate, Lagos',
    description:
      'Trusted luxury real estate management and development services in Lagos, Nigeria.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Tells search engines this is the canonical/preferred URL for this
  // content — useful even for a single-page site, prevents any accidental
  // duplicate-content confusion if the site is ever accessed via multiple URLs.
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} bg-background text-foreground font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
