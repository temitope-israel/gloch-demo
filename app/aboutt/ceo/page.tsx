'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowDown, Quote, Award, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ceoPage } from '@/constants/ceo';

/**
 * Reusable Scroll In View Wrapper Component
 */
function FadeInView({
  children,
  className = '',
  delay = 0,
  animation = 'animate-fade-up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  animation?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ animationDelay: `${delay}ms` }}
      className={`${className} ${
        isVisible ? animation : 'translate-y-6 opacity-0 transition-all duration-700'
      }`}
    >
      {children}
    </div>
  );
}

export default function CeoPage() {
  const {
    name = 'Executive Leadership',
    role = 'Chief Executive Officer',
    eyebrow = 'LEADERSHIP & VISION',
    title = 'A Message from Our CEO',
    quote = '',
    image = '/images/ceo.jpg', // Profile photo for the address section
    heroImage = '/images/hero-ceo.jpg', // Dedicated Hero Banner image
    message = [],
  } = ceoPage || {};

  return (
    <main className="bg-paper text-ink selection:bg-gold/20 selection:text-ink relative min-h-screen overflow-hidden">
      {/* Global Architectural Grid Background Lines */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between px-4 opacity-40 sm:px-8 lg:px-12">
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent lg:block" />
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 1. HERO BANNER SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative flex h-screen max-h-[900px] min-h-[600px] w-full flex-col justify-between overflow-hidden bg-black pt-28 pb-12 text-white">
        {/* Layer 0: Background Photo with Slow Zoom Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <FadeInView className="h-full w-full" animation="animate-scale-up">
            <div className="relative h-full w-full">
              <Image
                src={heroImage}
                alt={name}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top opacity-60 brightness-90 contrast-125 filter transition-transform duration-1000 ease-out"
              />
            </div>
          </FadeInView>

          {/* Overlays */}
          <div className="absolute inset-0 z-10 bg-black/55" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Layer 20: Centered Content */}
        <Container className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
          <div className="animate-fade-up max-w-3xl px-4">
            {/* Eyebrow Label */}
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>{eyebrow}</span>
            </div>

            {/* Main Name / Title */}
            <h1 className="font-serif text-3xl leading-tight font-medium tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              {name}
            </h1>

            {/* Subtext Line */}
            <div className="mt-6 flex items-center justify-center gap-3 font-mono text-xs tracking-wider text-slate-200 sm:text-sm">
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
              <span className="shrink-0 font-medium tracking-widest text-slate-100 uppercase">
                {role}
              </span>
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <Container className="relative z-20">
          <div className="animate-fade-up flex items-center justify-between border-t border-white/20 pt-5 font-mono text-xs text-slate-300">
            <span className="hidden tracking-widest uppercase sm:inline-block">
              READ EXECUTIVE ADDRESS
            </span>
            <div className="mx-auto flex items-center gap-3 sm:mx-0">
              <span className="text-white/80">DISCOVER</span>
              <div className="animate-bounce-subtle flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-400 backdrop-blur-sm">
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. EXECUTIVE PROFILE & ADDRESS SECTION                    */}
      {/* ========================================================= */}
      <Section className="bg-background relative z-20 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Left Side: Portrait Card & Key Details */}
            <div className="lg:col-span-5">
              <FadeInView delay={100} animation="animate-scale-up">
                <div className="border-warm-gray-200 bg-surface group relative overflow-hidden rounded-3xl border p-3 shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 35vw, 90vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="border-gold/40 bg-surface/80 text-gold-accessible absolute top-4 left-4 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-widest uppercase backdrop-blur-md">
                      EXECUTIVE OFFICE
                    </div>
                  </div>

                  {/* Profile info footer inside frame */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-foreground font-serif text-2xl font-medium">{name}</h3>
                        <p className="text-warm-gray-500 mt-0.5 font-mono text-xs tracking-wider uppercase">
                          {role}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-500">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>

                    {quote && (
                      <div className="border-warm-gray-100 mt-5 border-t pt-4">
                        <Quote className="mb-2 h-5 w-5 text-amber-500/60" />
                        <p className="text-gold-accessible font-serif text-sm leading-relaxed italic">
                          &ldquo;{quote}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInView>
            </div>

            {/* Right Side: Address Title & Message Content */}
            <div className="lg:col-span-7 lg:pt-2">
              <FadeInView delay={150}>
                <span className="text-gold mb-3 block font-mono text-xs font-semibold tracking-widest uppercase">
                  EXECUTIVE ADDRESS
                </span>
                <h2 className="text-foreground font-serif text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              </FadeInView>

              {/* Dynamic Paragraphs */}
              <div className="mt-8 space-y-6">
                {message.map((paragraph, index) => (
                  <FadeInView key={index} delay={250 + index * 100}>
                    <p className="text-warm-gray-700 text-base leading-relaxed font-light sm:text-lg">
                      {paragraph}
                    </p>
                  </FadeInView>
                ))}
              </div>

              {/* Signature / Closing Block */}
              <FadeInView delay={300 + message.length * 100}>
                <div className="border-warm-gray-200/80 mt-12 border-t pt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-500">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground font-serif text-lg font-medium">{name}</p>
                      <p className="text-warm-gray-500 font-mono text-xs tracking-wider uppercase">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
