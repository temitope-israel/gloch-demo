'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  MapPin,
  Building2,
  Sparkles,
  ArrowUpRight,
  Check,
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
  ChevronLeft,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { Property } from '@/constants/portfolio/types';

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

export function PropertyPageTemplate({
  property,
  otherProperties = [],
}: {
  property: Property;
  otherProperties?: Property[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [amenitiesActiveIndex, setAmenitiesActiveIndex] = useState(0);

  const amenitiesScrollRef = useRef<HTMLDivElement>(null);
  const exteriorScrollRef = useRef<HTMLDivElement>(null);
  const interiorScrollRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/2349169855031?text=${encodeURIComponent(
    `Hi Gloch Stylistics, I'd like to enquire about ${property?.name || 'this property'}.`
  )}`;

  // Safe fallbacks
  const descriptionList = property?.description || [];
  const rawAmenitiesList = property?.amenities || [];
  const keyAdvantagesList = property?.keyAdvantages || [];
  const safeOtherProperties = otherProperties || [];

  // Triple the list for seamless infinite loop (Original -> Duplicate -> Duplicate)
  const amenitiesList = [...rawAmenitiesList, ...rawAmenitiesList, ...rawAmenitiesList];

  // Gallery extractions
  const exteriorImages = property?.gallery?.exterior || [];
  const interiorImages = property?.gallery?.interior || [];

  // Pagination calculation (3 items visible per view)
  const itemsPerPage = 3;
  const totalAmenityPages = Math.ceil((rawAmenitiesList.length || 1) / itemsPerPage);

  // Handle seamless infinite manual scroll
  const handleAmenitiesScroll = () => {
    if (!amenitiesScrollRef.current || rawAmenitiesList.length === 0) return;

    const el = amenitiesScrollRef.current;
    const singleSetWidth = el.scrollWidth / 3;

    // Infinite Loop reset logic during manual drag/scroll
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth;
    }

    // Update active pagination indicator relative to original set
    const normalizedScroll = el.scrollLeft % singleSetWidth;
    const scrollPercentage = normalizedScroll / singleSetWidth;
    const index = Math.min(Math.floor(scrollPercentage * totalAmenityPages), totalAmenityPages - 1);
    setAmenitiesActiveIndex(index);
  };

  // Initial scroll positioning (starts at set #2)
  useEffect(() => {
    if (amenitiesScrollRef.current && rawAmenitiesList.length > 0) {
      const el = amenitiesScrollRef.current;
      const singleSetWidth = el.scrollWidth / 3;
      el.scrollLeft = singleSetWidth;
    }
  }, [rawAmenitiesList.length]);

  const scrollToAmenityPage = (pageIndex: number) => {
    if (!amenitiesScrollRef.current) return;
    const el = amenitiesScrollRef.current;
    const containerWidth = el.clientWidth;
    const singleSetWidth = el.scrollWidth / 3;

    el.scrollTo({
      left: singleSetWidth + pageIndex * containerWidth,
      behavior: 'smooth',
    });
    setAmenitiesActiveIndex(pageIndex);
  };

  const scrollContainer = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: 'left' | 'right'
  ) => {
    if (ref.current) {
      const containerWidth = ref.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="text-ink selection:bg-gold/20 selection:text-ink relative min-h-screen overflow-hidden bg-white">
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                            */}
      {/* ============================================================ */}

      <section className="relative isolate flex h-[90vh] w-full flex-col justify-center overflow-hidden bg-black pb-16 text-white sm:h-[100vh] md:pb-20">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/25" />
        </div>

        <Container className="relative z-10 flex h-full flex-col justify-center">
          {/* Main Content Column */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest text-white uppercase shadow-sm backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-white" />
                {property?.location}
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
              className="mt-4 max-w-2xl text-base leading-relaxed font-light text-white sm:text-lg"
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

          {/* Status Badge - Fixed to Bottom Right inside Container */}
          <div className="mt-8 md:absolute md:right-8 md:bottom-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black px-3.5 py-1 font-mono text-xs font-medium tracking-widest text-white uppercase backdrop-blur-md">
                <Building2 className="h-3.5 w-3.5 text-white" />
                {property?.stats?.status}
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. OVERVIEW & DESCRIPTION IMAGE (SIDE BY SIDE) + AMENITIES */}
      {/* ========================================================= */}
      <Section className="relative z-20 bg-white pt-16 pb-16 lg:pt-24 lg:pb-20">
        <Container>
          {/* TOP BLOCK: DESCRIPTION IMAGE & OVERVIEW SIDE-BY-SIDE */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* RIGHT COLUMN: PROPERTY OVERVIEW (7 COLUMNS) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="space-y-6 lg:col-span-7"
            >
              <div>
                <span className="text-gold flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase">
                  <Sparkles className="h-4 w-4" /> Property Overview
                </span>
                <h2 className="text-ink mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  {property?.overviewTitle || property?.name}
                </h2>
              </div>

              <div className="text-warm-gray-700 space-y-4 text-base leading-relaxed font-light">
                {descriptionList.slice(0, 2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Downloads / Action Buttons */}
              {property?.brochures && property.brochures.length > 0 && (
                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
                  {property.brochures.map((b) => (
                    <a
                      key={b.href}
                      href={b.href}
                      download
                      className="border-warm-gray-400 hover:border-gold hover:bg-gold/10 text-ink inline-flex items-center justify-center gap-2.5 rounded-none border bg-white px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                    >
                      <Download className="text-gold h-4 w-4" aria-hidden />
                      {b.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>

            {/* LEFT COLUMN: DESCRIPTION IMAGE (5 COLUMNS) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:col-span-5"
            >
              <Image
                src={
                  property?.descriptionImage ||
                  exteriorImages[0] ||
                  property?.heroImage ||
                  '/placeholder.jpg'
                }
                alt={property?.name || 'Property Description'}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>

          {/* BOTTOM BLOCK: AMENITIES (FULL WIDTH - 1 ROW, 5 COLUMNS ON LARGE SCREENS) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="border-warm-gray-200/80 mt-16 w-full min-w-0 border-t pt-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-ink font-serif text-2xl font-semibold tracking-wider uppercase">
                AMENITIES
              </h3>
            </div>

            {/* Clean Full-Width Container */}
            <div className="relative py-2">
              <div
                ref={amenitiesScrollRef}
                onScroll={handleAmenitiesScroll}
                className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {amenitiesList.map((amenity, i) => {
                  const IconComponent = amenityIconMap[amenity.key] || Layers;
                  const isPageStart = i % 5 === 0;

                  return (
                    <div
                      key={`${amenity.key}-${i}`}
                      className={`w-1/2 max-w-[180px] min-w-[50%] shrink-0 px-1 sm:w-1/3 sm:min-w-[33.333%] lg:w-1/5 lg:min-w-[20%] ${
                        isPageStart ? 'snap-start' : ''
                      }`}
                    >
                      <div className="group border-warm-gray-200 hover:border-gold flex h-[100px] w-full flex-col items-center justify-center rounded-xl border bg-white p-2.5 shadow-xs transition-all duration-300 hover:shadow-md sm:h-[130px]">
                        <div className="text-warm-gray-700 group-hover:text-gold mb-1.5 transition-colors duration-300">
                          <IconComponent className="h-5 w-5 stroke-[1.25] sm:h-6 sm:w-6" />
                        </div>
                        <span className="text-ink text-center font-sans text-[11px] leading-tight font-medium sm:text-xs">
                          {amenity.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Indicators */}
              {totalAmenityPages > 1 && (
                <div className="mt-6 flex items-center justify-center gap-2">
                  {Array.from({ length: totalAmenityPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToAmenityPage(idx)}
                      aria-label={`Go to amenities slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        amenitiesActiveIndex === idx
                          ? 'bg-gold w-5'
                          : 'bg-warm-gray-300 hover:bg-warm-gray-400 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </Container>
      </Section>
      {/* <section className="relative isolate flex h-[90vh] w-full flex-col justify-center overflow-hidden bg-black pb-16 text-white sm:h-[720px] md:pb-20">
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
          ?{' '}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/25" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest text-white uppercase shadow-sm backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-white" />
                  {property?.location}
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
                className="mt-4 max-w-2xl text-base leading-relaxed font-light text-white sm:text-lg"
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

            <div className="flex justify-start md:justify-end md:pb-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black px-3.5 py-1 font-mono text-xs font-medium tracking-widest text-white uppercase backdrop-blur-md">
                  <Building2 className="h-3.5 w-3.5 text-white" />
                  {property?.stats?.status}
                </span>
              </motion.div>
            </div>
          </div>
        </Container>


      </section> */}

      {/* ========================================================= */}
      {/* 2. OVERVIEW (65% COL) & AMENITIES (35% COL)              */}
      {/* ========================================================= */}
      {/* <Section className="relative z-20 bg-white pt-16 pb-16 lg:pt-24 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="space-y-6 lg:col-span-7"
            >
              <div>
                <span className="text-gold flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase">
                  <Sparkles className="h-4 w-4" /> Property Overview
                </span>
                <h2 className="text-ink mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  {property?.overviewTitle || property?.name}
                </h2>
              </div>

              <div className="text-warm-gray-700 space-y-4 text-base leading-relaxed font-light">
                {descriptionList.slice(0, 2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {property?.brochures && property.brochures.length > 0 && (
                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
                  {property.brochures.map((b) => (
                    <a
                      key={b.href}
                      href={b.href}
                      download
                      className="border-warm-gray-400 hover:border-gold hover:bg-gold/10 text-ink inline-flex items-center justify-center gap-2.5 rounded-none border bg-white px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                    >
                      <Download className="text-gold h-4 w-4" aria-hidden />
                      {b.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="w-full min-w-0 lg:col-span-5"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-ink font-serif text-2xl font-semibold tracking-wider uppercase">
                  AMENITIES
                </h3>
              </div>

              <div className="relative py-2">
                <div
                  ref={amenitiesScrollRef}
                  onScroll={handleAmenitiesScroll}
                  className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {amenitiesList.map((amenity, i) => {
                    const IconComponent = amenityIconMap[amenity.key] || Layers;
                    const isPageStart = i % 3 === 0;

                    return (
                      <div
                        key={`${amenity.key}-${i}`}
                        className={`w-1/3 min-w-[33.333333%] shrink-0 px-1.5 ${
                          isPageStart ? 'snap-start' : ''
                        }`}
                      >
                        <div className="group border-warm-gray-200 hover:border-gold flex h-[88px] w-full flex-col items-center justify-center rounded-xl border bg-white p-2 shadow-xs transition-all duration-300 hover:shadow-md sm:h-[195px]">
                          <div className="text-warm-gray-700 group-hover:text-gold mb-1.5 transition-colors duration-300">
                            <IconComponent className="h-5 w-5 stroke-[1.25] sm:h-5 sm:w-5" />
                          </div>
                          <span className="text-ink text-center font-sans text-[10px] leading-tight font-medium sm:text-[11px]">
                            {amenity.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {totalAmenityPages > 1 && (
                  <div className="mt-5 flex items-center justify-center gap-2">
                    {Array.from({ length: totalAmenityPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToAmenityPage(idx)}
                        aria-label={`Go to amenities slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          amenitiesActiveIndex === idx
                            ? 'bg-gold w-5'
                            : 'bg-warm-gray-300 hover:bg-warm-gray-400 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section> */}

      {/* ========================================================= */}
      {/* 3. VISUAL EXHIBIT (EXTERIOR & INTERIOR GALLERIES)          */}
      {/* ========================================================= */}
      <Section className="border-warm-gray-200/80 border-t bg-white/40 py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {/* ---------------- EXTERIOR GALLERY ---------------- */}
            {exteriorImages.length > 0 && (
              <div className="w-full space-y-6">
                <div>
                  <span className="text-gold font-mono text-xs tracking-widest uppercase">
                    VISUAL EXHIBIT
                  </span>
                  <h3 className="text-ink font-serif text-3xl font-medium">
                    Exterior Architecture
                  </h3>
                </div>

                {/* Gallery Wrapper with Side Arrows */}
                <div className="group/gallery relative w-full">
                  {/* Left Scroll Button */}
                  <button
                    onClick={() => scrollContainer(exteriorScrollRef, 'left')}
                    className="hover:bg-gold hover:border-gold absolute top-1/2 left-4 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-90 backdrop-blur-md transition-all duration-300 hover:text-black sm:opacity-0 sm:group-hover/gallery:opacity-100"
                    aria-label="Scroll left exterior images"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Right Scroll Button */}
                  <button
                    onClick={() => scrollContainer(exteriorScrollRef, 'right')}
                    className="hover:bg-gold hover:border-gold absolute top-1/2 right-4 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-90 backdrop-blur-md transition-all duration-300 hover:text-black sm:opacity-0 sm:group-hover/gallery:opacity-100"
                    aria-label="Scroll right exterior images"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Scrollable Container (~70vh max height) */}
                  <div
                    ref={exteriorScrollRef}
                    className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {exteriorImages.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(src)}
                        className="group relative h-[70vh] max-h-[650px] min-h-[580px] w-full min-w-full shrink-0 cursor-pointer snap-center overflow-hidden shadow-sm"
                      >
                        <Image
                          src={src}
                          alt={`${property.name} Exterior ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute right-6 bottom-6 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                          <Maximize2 className="h-5 w-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- INTERIOR GALLERY ---------------- */}
            {interiorImages.length > 0 && (
              <div className="w-full space-y-6">
                <div>
                  <span className="text-gold font-mono text-xs tracking-widest uppercase">
                    INTERIOR SPACES
                  </span>
                  <h3 className="text-ink font-serif text-3xl font-medium">Living & Finishes</h3>
                </div>

                {/* Gallery Wrapper with Side Arrows */}
                <div className="group/gallery relative w-full">
                  {/* Left Scroll Button */}
                  <button
                    onClick={() => scrollContainer(interiorScrollRef, 'left')}
                    className="hover:bg-gold hover:border-gold absolute top-1/2 left-4 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-90 backdrop-blur-md transition-all duration-300 hover:text-black sm:opacity-0 sm:group-hover/gallery:opacity-100"
                    aria-label="Scroll left interior images"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Right Scroll Button */}
                  <button
                    onClick={() => scrollContainer(interiorScrollRef, 'right')}
                    className="hover:bg-gold hover:border-gold absolute top-1/2 right-4 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-90 backdrop-blur-md transition-all duration-300 hover:text-black sm:opacity-0 sm:group-hover/gallery:opacity-100"
                    aria-label="Scroll right interior images"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Scrollable Container (~70vh max height) */}
                  <div
                    ref={interiorScrollRef}
                    className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {interiorImages.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(src)}
                        className="group relative h-[80vh] max-h-[650px] min-h-[580px] w-full min-w-full shrink-0 cursor-pointer snap-center overflow-hidden shadow-sm"
                      >
                        <Image
                          src={src}
                          alt={`${property.name} Interior ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute right-6 bottom-6 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                          <Maximize2 className="h-5 w-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 4. CINEMATIC VIDEO SECTION                                */}
      {/* ========================================================= */}
      {property?.videoUrl && (
        <Section className="relative z-20 bg-white py-16 lg:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-5xl"
            >
              <span className="text-gold font-mono text-xs tracking-widest uppercase">
                CINEMATIC TOUR
              </span>
              <h2 className="text-ink mt-1 mb-6 font-serif text-2xl font-medium sm:text-3xl">
                {property.videoTitle || `Experience ${property.name}`}
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-3xl border border-[#C9A227]/30 bg-black shadow-2xl">
                <iframe
                  src={property.videoUrl}
                  title={property.videoTitle || `${property.name} video`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* ========================================================= */}
      {/* 5. LOCATION & MAP SECTION                                 */}
      {/* ========================================================= */}
      {property?.address && (
        <Section className="relative z-20 bg-transparent py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <span className="text-gold mb-2 block font-mono text-xs font-semibold tracking-widest uppercase">
                  LOCATION & DIRECTIONS
                </span>
                <h2 className="text-foreground font-serif text-2xl font-medium sm:text-3xl">
                  Visit {property.name}
                </h2>
              </div>

              <div className="border-warm-gray-200 bg-background relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl border shadow-sm sm:min-h-[480px]">
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

                <div className="border-warm-gray-200 bg-surface flex flex-col gap-2.5 border-t px-6 py-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="text-gold mt-0.5 h-4 w-4 shrink-0" />
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
                    className="text-warm-gray-700 hover:text-gold inline-flex items-center gap-1.5 self-start font-sans text-xs transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* ========================================================= */}
      {/* 6. INVESTMENT ADVANTAGES & CALL TO ACTION                */}
      {/* ========================================================= */}
      <Section className="relative z-20 bg-transparent py-20">
        <Container>
          <div className="bg-ink relative overflow-hidden rounded-3xl border border-[#C9A227]/30 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <span className="text-gold inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest uppercase">
                  <Sparkles className="h-3.5 w-3.5" /> Competitive Edge
                </span>
                <h2 className="font-serif text-3xl leading-tight font-medium sm:text-5xl">
                  Why Invest in {property?.name}?
                </h2>

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  {keyAdvantagesList.map((adv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs"
                    >
                      <Check className="text-gold mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-warm-gray-200 text-sm leading-relaxed font-light">
                        {adv}
                      </span>
                    </div>
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
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 7. OTHER PORTFOLIO PROJECTS                               */}
      {/* ========================================================= */}
      {safeOtherProperties.length > 0 && (
        <Section className="border-warm-gray-200/80 relative z-20 border-t bg-white/40 py-20 backdrop-blur-xs">
          <Container>
            <div className="mb-12 flex items-center justify-between">
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
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {safeOtherProperties.map((p) => (
                <div key={p.slug} className="flex flex-col">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="group block overflow-hidden rounded-xl"
                  >
                    <div className="bg-warm-gray-100 relative aspect-[4/3] w-full overflow-hidden">
                      {p.heroImage && (
                        <Image
                          src={p.heroImage}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                    </div>
                  </Link>

                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-ink font-serif text-2xl font-medium tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-warm-gray-600 mt-2 line-clamp-2 text-sm font-light">
                        {p.overviewTitle || p.location}
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="border-gold/80 hover:bg-gold text-ink flex w-full items-center justify-center border px-6 py-3 font-mono text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:text-white"
                      >
                        <span>Discover More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Lightbox Modal */}
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
              <Image src={selectedImage} alt="Enlarged view" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
