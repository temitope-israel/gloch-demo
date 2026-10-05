'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  MapPin,
  Building2,
  Sparkles,
  ArrowUpRight,
  Check,
  Compass,
  ShieldCheck,
  Phone,
  Maximize2,
  X,
  Zap,
  Shield,
  Flame,
  Waves,
  ArrowUp,
  UserCheck,
  Car,
  Dumbbell,
  Droplet,
  Coffee,
  Wrench,
  ChevronRight,
  Layers,
  Download,
  Briefcase,
  Camera,
  ExternalLink,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { Property } from '@/constants/portfolio/types';
import { PropertyGallery } from './PropertyGallery';

// Icon mapping dictionary for amenities
const amenityIconMap: Record<string, React.ElementType> = {
  power: Zap,
  security: Shield,
  spa: Flame,
  pool: Waves,
  elevator: ArrowUp,
  concierge: UserCheck,
  parking: Car,
  gym: Dumbbell,
  water: Droplet,
  lounge: Coffee,
  facility: Wrench,
  conference: Briefcase,
  cctv: Camera,
};

// Reusable Animation Variants
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const statLabels: { key: keyof Property['stats']; label: string }[] = [
  { key: 'status', label: 'Status' },
  { key: 'area', label: 'Land Mass' },
  { key: 'type', label: 'Building Type' },
  { key: 'apartments', label: 'Residences' },
  { key: 'totalFloors', label: 'Total Floors' },
  { key: 'flatSize', label: 'Flat Size' },
];

export function PropertyPageTemplate({
  property,
  otherProperties = [],
}: {
  property: Property;
  otherProperties?: Property[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/2349169855031?text=${encodeURIComponent(
    `Hi Gloch Stylistic, I'd like to enquire about ${property?.name || 'this property'}.`
  )}`;

  // Safe fallbacks to prevent undefined .map() runtime crashes
  const descriptionList = property?.description || [];
  const descriptionImage = property?.descriptionImage || property?.heroImage;
  const featuresList = property?.features || [];
  const amenitiesList = property?.amenities || [];
  const keyAdvantagesList = property?.keyAdvantages || [];
  const safeOtherProperties = otherProperties || [];

  return (
    <main className="bg-paper text-ink selection:bg-gold/20 selection:text-ink relative min-h-screen overflow-hidden">
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="relative isolate flex h-[90vh] w-full flex-col justify-center overflow-hidden bg-black pb-16 text-white sm:h-[720px] md:pb-20">
        {/* LAYER 1: Background & Overlays (Lower Stacking Context) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            {property?.heroImage && (
              <Image
                src={property.heroImage}
                alt={property?.name || 'Property'}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            )}
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/25" />
        </div>

        {/* LAYER 2: Text & Interactive Content (Higher Stacking Context) */}
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 flex flex-wrap items-center gap-3"
            >
              {/* Hanging & Swinging Location Badge */}
              <motion.span
                // style={{ transformOrigin: 'top center' }} // Pivots from the top like a dangling sign
                // animate={{
                //   rotate: [0, 4, -3, 2, -1, 0], // Gentle, natural wind sway
                // }}
                // transition={{
                //   duration: 4, // Full cycle duration
                //   repeat: Infinity, // Loops forever
                //   repeatType: 'loop',
                //   ease: 'easeInOut', // Smooth pendulum-like movement
                // }}
                className="text-gold inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest uppercase shadow-sm backdrop-blur-md"
              >
                <MapPin className="text-gold h-3.5 w-3.5" />
                {property?.location}
              </motion.span>

              {/* Status Badge */}
              <span className="text-warm-gray-300 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1 font-mono text-xs font-medium tracking-widest uppercase backdrop-blur-md">
                <Building2 className="text-gold h-3.5 w-3.5" />
                {property?.stats?.status}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl leading-[1.1] font-medium tracking-tight text-white drop-shadow-md sm:text-6xl lg:text-7xl"
            >
              {property?.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg"
            >
              {property?.overviewTitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gold hover:bg-gold/90 inline-flex items-center gap-2.5 rounded-xl px-7 py-4 font-mono text-xs font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/20 active:scale-[0.98]"
              >
                <span>Schedule Inspection</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. VISUAL BENTO SPECIFICATION CARDS                      */}
      {/* ========================================================= */}
      <Section className="relative z-20 bg-transparent py-16 lg:py-24">
        <Container>
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="mb-12 text-center"
          >
            <span className="text-gold flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Architectural Matrix
            </span>
            <h2 className="text-ink mt-2 font-serif text-3xl font-medium tracking-tight sm:text-5xl">
              Crafted For Distinction
            </h2>
          </motion.div>

          {/* Bento Matrix */}
          <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {statLabels.map(({ key, label }, i) => (
              <motion.div
                key={key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUpVariants}
                custom={i * 0.5}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group border-warm-gray-200/80 hover:border-gold relative overflow-hidden rounded-2xl border bg-white/70 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A227]/10"
              >
                {/* Corner Cad Registration Accent Marks */}
                <span className="border-gold/60 absolute top-1.5 left-1.5 h-2 w-2 border-t border-l" />
                <span className="border-gold/60 absolute top-1.5 right-1.5 h-2 w-2 border-t border-r" />

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-warm-gray-400 group-hover:text-gold font-mono text-[10px] font-semibold tracking-widest uppercase transition-colors">
                    0{i + 1}
                  </span>
                  <motion.span
                    whileHover={{ rotate: 180 }}
                    className="text-gold flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/10 font-mono text-[10px] font-bold"
                  >
                    ✦
                  </motion.span>
                </div>

                <span className="text-warm-gray-500 block font-mono text-[10px] tracking-wider uppercase">
                  {label}
                </span>

                <span className="text-ink group-hover:text-gold mt-1 block font-serif text-base leading-snug font-semibold transition-colors sm:text-lg">
                  {property?.stats?.[key] || 'N/A'}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Feature Showcase: Split Visual Hero Card */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleUpVariants}
              className="group border-warm-gray-200/80 relative flex aspect-[4/5] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border bg-black/5 shadow-2xl sm:aspect-[4/3] lg:col-span-6 lg:aspect-[4/5]"
              onClick={() => setSelectedImage(property?.descriptionImage || null)}
            >
              {property?.descriptionImage && (
                <Image
                  src={property.descriptionImage}
                  alt={property?.name || 'Hero'}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}

              <button
                className="hover:bg-gold absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:text-black"
                aria-label="Expand image view"
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-black/50 p-6 text-white backdrop-blur-md">
                <span className="text-gold mb-1 block font-mono text-xs tracking-widest uppercase">
                  Location Focus
                </span>
                <p className="font-serif text-xl font-medium">{property?.location}</p>
                <p className="text-warm-gray-300 mt-1 text-xs font-light">
                  Prime access & strategic urban connectivity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              custom={1}
              className="space-y-8 lg:col-span-6"
            >
              <div>
                <span className="text-gold flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase">
                  <Compass className="h-4 w-4" /> Concept & Vision
                </span>
                <h3 className="text-ink mt-3 font-serif text-3xl leading-tight font-medium sm:text-4xl">
                  {property?.overviewTitle}
                </h3>
              </div>

              <div className="text-warm-gray-700 space-y-4 text-base leading-relaxed font-light sm:text-lg">
                {descriptionList.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    custom={index}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {property?.brochures && property.brochures.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {property.brochures.map((b) => (
                    <a
                      key={b.href}
                      href={b.href}
                      download
                      className="hover:bg-gold text-ink inline-flex items-center gap-2 rounded-xl border border-[#C9A227]/40 px-5 py-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors hover:text-black"
                    >
                      <Download className="h-4 w-4" aria-hidden />
                      {b.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="pt-6">
                <h4 className="text-warm-gray-500 mb-4 flex items-center justify-between font-mono text-xs tracking-widest uppercase">
                  <span>Featured Residence Key Details</span>
                  <span className="text-gold text-[10px]">SPECIFICATIONS</span>
                </h4>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {featuresList.map((feat, index) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="group border-warm-gray-200/80 hover:border-gold/60 flex items-center justify-between rounded-xl border bg-white/70 p-3.5 backdrop-blur-md transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gold font-mono text-[10px] font-semibold">
                          0{index + 1}
                        </span>
                        <span className="text-ink group-hover:text-gold text-xs font-medium transition-colors">
                          {feat}
                        </span>
                      </div>
                      <Check className="text-warm-gray-300 group-hover:text-gold h-3.5 w-3.5 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 2b. PROPERTY VIDEO (only renders when the property has one) */}
      {/* ========================================================= */}
      {property?.videoUrl && (
        <Section className="relative z-20 bg-transparent py-16 lg:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl"
            >
              <span className="text-gold font-mono text-xs tracking-widest uppercase">
                SEE IT IN MOTION
              </span>
              <h2 className="text-ink mt-1 mb-6 font-serif text-2xl font-medium sm:text-3xl">
                {property.videoTitle || `Take a look at ${property.name}`}
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#C9A227]/30 shadow-xl">
                <iframe
                  src={property.videoUrl}
                  title={property.videoTitle || `${property.name} video`}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* ========================================================= */}
      {/* 3. VISUAL AMENITIES BENTO GRID WITH GLASS EFFECT         */}
      {/* ========================================================= */}
      <Section className="border-warm-gray-200/80 relative z-20 border-t bg-white/40 py-20 backdrop-blur-xs">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-gold font-mono text-xs font-semibold tracking-widest uppercase">
              RESIDENTIAL LUXURY
            </span>
            <h2 className="text-ink mt-2 font-serif text-3xl font-medium sm:text-4xl">
              Curated Building Amenities
            </h2>
            <p className="text-warm-gray-600 mt-3 text-sm font-light">
              Designed to elevate daily living with uncompromised comfort, security, and prestige.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenitiesList.map((amenity, i) => {
              const IconComponent = amenityIconMap[amenity.key] || Layers;
              return (
                <motion.div
                  key={amenity.key || i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeInUpVariants}
                  custom={i * 0.5}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group border-warm-gray-200/80 hover:border-gold relative overflow-hidden rounded-3xl border bg-white/70 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gold group-hover:border-gold group-hover:bg-gold relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/10 transition-all duration-300 group-hover:scale-105 group-hover:text-black">
                      <IconComponent className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-warm-gray-400 group-hover:text-gold font-mono text-[9px] font-semibold tracking-widest uppercase transition-colors">
                        Feature 0{i + 1}
                      </span>
                      <h3 className="text-ink group-hover:text-gold font-serif text-lg font-semibold transition-colors">
                        {amenity.label}
                      </h3>
                      <p className="text-warm-gray-500 mt-0.5 font-mono text-[10px] tracking-wider uppercase">
                        Integrated Luxury
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3b. GALLERY + ADDRESS */}
      {/* ========================================================= */}
{/* ========================================================= */}
      {/* 3b. GALLERY & INTERACTIVE LOCATION MAP                    */}
      {/* ========================================================= */}
      {(property?.gallery || property?.address) && (
        <Section className="relative z-20 bg-transparent py-16 lg:py-24">
          <Container>
            {/* Gallery Section */}
            {property.gallery && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-gold font-mono text-xs tracking-widest uppercase">
                  GALLERY
                </span>
                <h2 className="text-ink mt-1 mb-8 font-serif text-2xl font-medium sm:text-3xl">
                  {property.name} in Pictures
                </h2>
                <PropertyGallery
                  gallery={property.gallery}
                  name={property.name}
                  onSelect={setSelectedImage}
                />
              </motion.div>
            )}

            {/* Location & Map Section */}
            {property.address && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-warm-gray-200/80 mt-16 flex flex-col border-t pt-12"
              >
                <div className="mb-6">
                  <span className="text-gold mb-2 block font-mono text-xs font-semibold tracking-widest uppercase">
                    LOCATION & DIRECTIONS
                  </span>
                  <h2 className="text-foreground font-serif text-2xl font-medium sm:text-3xl">
                    Visit {property.name}
                  </h2>
                  <p className="text-warm-gray-700 mt-2 text-sm">
                    Locate the property or open the location directly in Google Maps.
                  </p>
                </div>

                <div className="border-warm-gray-200 bg-background relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl border shadow-sm sm:min-h-[480px]">
                  {/* Map Embed Frame with top-left address card */}
                  <iframe
                    title={`${property.name} Location Map`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      `${property.name},${property.address}`
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    className="min-h-[340px] flex-1 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Bottom Address & Direct Link Bar */}
                  <div className="border-warm-gray-200 bg-surface flex flex-col gap-2.5 border-t px-6 py-4">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="text-gold-accessible mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-foreground font-serif text-sm leading-relaxed">
                        {property.address}
                      </span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${property.name},${property.address}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-gray-700 hover:text-gold-accessible inline-flex items-center gap-1.5 self-start font-sans text-xs transition-colors"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </Container>
        </Section>

      )}
      {/* {(property?.gallery || property?.address) && (
        <Section className="relative z-20 bg-transparent py-16 lg:py-24">
          <Container>
            {property.gallery && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-gold font-mono text-xs tracking-widest uppercase">
                  {' '}
                  GALLERY
                </span>
                <h2 className="text-ink mt-1 mb-8 font-serif text-2xl font-medium sm:text-3xl">
                  {property.name} in Pictures
                </h2>
                <PropertyGallery
                  gallery={property.gallery}
                  name={property.name}
                  onSelect={setSelectedImage}
                />
              </motion.div>
            )}

            {property.address && (
              <div className="border-border mt-16 flex items-start gap-4 border-t pt-10">
                <MapPin className="text-gold mt-1 h-5 w-5 shrink-0" aria-hidden />
                <div>
                  <h3 className="text-ink font-serif text-lg font-medium">Address</h3>
                  <p className="text-warm-gray-700 mt-1 text-sm">{property.address}</p>
                </div>
              </div>
            )}
          </Container>
        </Section>
      )} */}

      {/* ========================================================= */}
      {/* 4. INVESTMENT ADVANTAGES HERO BANNER                      */}
      {/* ========================================================= */}
      <Section className="relative z-20 bg-transparent py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleUpVariants}
            className="bg-ink relative overflow-hidden rounded-3xl border border-[#C9A227]/30 p-8 text-white shadow-2xl sm:p-12 lg:p-16"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <span className="text-gold inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest uppercase">
                  <ShieldCheck className="h-3.5 w-3.5" /> Competitive Edge
                </span>
                <h2 className="font-serif text-3xl leading-tight font-medium sm:text-5xl">
                  Why Invest in {property?.name}?
                </h2>

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  {keyAdvantagesList.map((adv, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs"
                    >
                      <Check className="text-gold mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-warm-gray-200 text-sm leading-relaxed font-light">
                        {adv}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-md lg:col-span-5">
                <h3 className="font-serif text-2xl font-medium">Private Site Inspection</h3>
                <p className="text-warm-gray-300 text-xs leading-relaxed font-light">
                  Experience {property?.name} firsthand. Connect directly with our team to request
                  detailed floor plans and current availability.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold hover:bg-gold/90 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-mono text-xs font-semibold tracking-wider text-black uppercase transition-all hover:shadow-lg hover:shadow-[#C9A227]/20"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+2349169855031"
                    className="hover:border-gold flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-4 font-mono text-xs font-semibold tracking-wider text-white uppercase transition-all"
                  >
                    <Phone className="text-gold h-4 w-4" />
                    <span>Call Sales Representative</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 5. OTHER PORTFOLIO PROJECTS                               */}
      {/* ========================================================= */}

      {/* ========================================================= */}
      {/* 5. OTHER PORTFOLIO PROJECTS                               */}
      {/* ========================================================= */}
      {safeOtherProperties.length > 0 && (
        <Section className="border-warm-gray-200/80 relative z-20 border-t bg-white/40 py-20 backdrop-blur-xs">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <span className="text-gold font-mono text-xs tracking-widest uppercase">
                  EXPLORE MORE
                </span>
                <h2 className="text-ink mt-1 font-serif text-2xl font-medium sm:text-3xl">
                  Other Portfolio Projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-gold flex items-center gap-1 font-mono text-xs tracking-wider uppercase hover:underline"
              >
                <span>View All Projects</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {safeOtherProperties.map((p, idx) => (
                <motion.div
                  key={p.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUpVariants}
                  custom={idx * 0.5}
                  className="flex flex-col"
                >
                  {/* Full Height/Aspect Image Container */}
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="group block overflow-hidden rounded-xl"
                  >
                    <div className="bg-warm-gray-100 relative aspect-[4/3] h-[80vh] w-full overflow-hidden">
                      {p.heroImage && (
                        <Image
                          src={p.heroImage}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                  </Link>

                  {/* Property Info Outside Container */}
                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-ink font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="text-warm-gray-600 mt-3 line-clamp-3 text-sm leading-relaxed font-light">
                        {p.overviewTitle || p.location}
                      </p>
                    </div>

                    {/* Discover More Outlined Button */}
                    <div className="mt-6 pt-2">
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="group/btn border-gold/80 hover:bg-gold text-ink flex w-full items-center justify-center border px-6 py-3.5 font-mono text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:text-white active:scale-[0.99]"
                      >
                        <span>Discover More</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}
      {/* {safeOtherProperties.length > 0 && (
        <Section className="border-warm-gray-200/80 relative z-20 border-t bg-white/40 py-20 backdrop-blur-xs">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="mb-10 flex items-center justify-between"
            >
              <div>
                <span className="text-gold font-mono text-xs tracking-widest uppercase">
                  EXPLORE MORE
                </span>
                <h2 className="text-ink mt-1 font-serif text-2xl font-medium sm:text-3xl">
                  Other Portfolio Projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-gold flex items-center gap-1 font-mono text-xs tracking-wider uppercase hover:underline"
              >
                <span>View All Projects</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {safeOtherProperties.map((p, idx) => (
                <motion.div
                  key={p.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUpVariants}
                  custom={idx * 0.5}
                >
                  <Link href={`/portfolio/${p.slug}`} className="group block">
                    <div className="border-warm-gray-200/80 hover:border-gold/40 overflow-hidden rounded-2xl border bg-white/80 transition-all duration-300 hover:shadow-lg">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        {p.heroImage && (
                          <Image
                            src={p.heroImage}
                            alt={p.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <div className="p-5">
                        <p className="text-ink group-hover:text-gold font-serif text-lg font-medium transition-colors">
                          {p.name}
                        </p>
                        <p className="text-warm-gray-500 mt-1 font-mono text-xs tracking-wider uppercase">
                          {p.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )} */}

      {/* Lightbox Image View Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="hover:bg-gold absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative aspect-[16/9] h-full max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl">
              <Image
                src={selectedImage}
                alt="Enlarged visual rendering"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
