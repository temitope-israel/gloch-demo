'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowDown, Play, CheckCircle2, Target, Eye, Compass } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { whoWeArePage } from '@/constants/who-we-are';

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

export default function WhoWeArePage() {
  const {
    intro = '',
    bridge = '',
    bridgePoints = [],
    closing = '',
    videoUrl = '',
    videoTitle = 'Who We Are Video',
    purpose = {
      title: 'Our Purpose',
      statement: '',
      servesTitle: '',
      servesIntro: '',
      serves: [],
      servesClosing: '',
    },
    approach = { title: 'Our Approach', intro: '', pillars: [] },
    mission = '',
    vision = '',
    title = 'Who We Are',
    eyebrow = 'About Our Craft',
  } = whoWeArePage || {};

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
      {/* 1. HERO BANNER SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative flex h-screen max-h-[900px] min-h-[600px] w-full flex-col justify-between overflow-hidden bg-black pt-28 pb-12 text-white">
        {/* Layer 0: Background Photo with Slow Zoom Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="relative h-full w-full transform transition-transform duration-10000 ease-out hover:scale-105">
            <Image
              src="/images/hero-who-we-are.jpg"
              alt={title || 'Who We Are'}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 z-10 bg-black/55" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        {/* Layer 20: Centered Content */}
        <Container className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
          <div className="animate-fade-up max-w-3xl px-4">
            {/* Eyebrow Label */}
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>{eyebrow || 'ABOUT OUR CRAFT'}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl leading-tight font-medium tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              {title || 'Who We Are'}
            </h1>

            {/* Subtext Line */}
            <div className="mt-6 flex items-center justify-center gap-3 font-mono text-xs tracking-wider text-slate-200 sm:text-sm">
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
              <span className="shrink-0 font-medium text-slate-100">
                EST. REAL ESTATE & ARCHITECTURAL CRAFT
              </span>
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <Container className="relative z-20">
          <div className="animate-fade-up flex items-center justify-between border-t border-white/20 pt-5 font-mono text-xs text-slate-300">
            <span className="hidden tracking-widest uppercase sm:inline-block">
              SCROLL TO EXPLORE OUR STORY
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
      {/* 2. INTRO + VIDEO SECTION                                 */}
      {/* ========================================================= */}
      <Section className="bg-background relative z-20 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <FadeInView delay={100}>
                <span className="text-gold mb-3 block font-mono text-xs font-semibold tracking-widest uppercase">
                  OUR ORIGIN
                </span>
                <p className="text-body-lg text-warm-gray-900 font-serif text-2xl leading-relaxed sm:text-3xl">
                  {intro}
                </p>
              </FadeInView>

              {bridge && (
                <FadeInView delay={200}>
                  <p className="text-body-lg text-warm-gray-700 mt-5 leading-relaxed font-light">
                    {bridge}
                  </p>
                </FadeInView>
              )}

              {bridgePoints && bridgePoints.length > 0 && (
                <div className="border-gold/30 mt-6 space-y-3 border-l-2 pl-4">
                  {bridgePoints.map((point, i) => (
                    <FadeInView key={point} delay={300 + i * 100}>
                      <div className="text-warm-gray-800 flex items-start gap-3 text-sm font-medium">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span>{point}</span>
                      </div>
                    </FadeInView>
                  ))}
                </div>
              )}

              {closing && (
                <FadeInView delay={600}>
                  <p className="text-body-lg text-warm-gray-700 mt-6 leading-relaxed font-light">
                    {closing}
                  </p>
                </FadeInView>
              )}
            </div>

            {/* Video Frame */}
            <div className="lg:col-span-5">
              <FadeInView delay={250} animation="animate-scale-up">
                <div className="border-warm-gray-200 bg-surface group relative overflow-hidden rounded-3xl border p-3 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                    {videoUrl ? (
                      <iframe
                        src={videoUrl}
                        title={videoTitle}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="text-warm-gray-400 flex h-full w-full items-center justify-center font-mono text-xs">
                        [VIDEO PLAYER PLACEHOLDER]
                      </div>
                    )}
                  </div>
                  <div className="text-warm-gray-500 mt-3 flex items-center justify-between px-2 font-mono text-[10px]">
                    <span className="text-gold flex items-center gap-1.5 font-semibold">
                      <Play className="fill-gold text-gold h-3 w-3 transition-transform group-hover:scale-125" />
                      {videoTitle}
                    </span>
                    <span>FEATURE FILM</span>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 3. OUR PURPOSE SECTION                                   */}
      {/* ========================================================= */}
      <Section className="bg-surface border-warm-gray-200/80 relative z-20 border-y py-20 md:py-28">
        <Container>
          <FadeInView>
            <span className="text-gold mb-2 block font-mono text-xs font-semibold tracking-widest uppercase">
              FOUNDATIONAL PHILOSOPHY
            </span>
            <h2 className="text-h1 text-foreground font-serif text-3xl sm:text-4xl md:text-5xl">
              {purpose.title}
            </h2>
            {purpose.statement && (
              <p className="text-warm-gray-700 mt-4 max-w-2xl text-base leading-relaxed font-light sm:text-lg">
                {purpose.statement}
              </p>
            )}
          </FadeInView>

          <FadeInView delay={200} animation="animate-scale-up">
            <div className="border-warm-gray-200/80 bg-background hover:border-gold/50 mt-12 max-w-3xl rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10">
              {purpose.servesTitle && (
                <h3 className="text-h3 text-foreground flex items-center gap-3 font-serif text-2xl sm:text-3xl">
                  <Compass className="h-6 w-6 text-amber-500" />
                  <span>{purpose.servesTitle}</span>
                </h3>
              )}
              {purpose.servesIntro && (
                <p className="text-warm-gray-600 mt-3 text-sm leading-relaxed">
                  {purpose.servesIntro}
                </p>
              )}

              {purpose.serves && purpose.serves.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {purpose.serves.map((item, idx) => (
                    <FadeInView key={item} delay={300 + idx * 80}>
                      <div className="border-warm-gray-200/60 bg-surface/80 text-warm-gray-800 hover:border-gold/40 flex items-center gap-3 rounded-xl border p-3 font-mono text-xs transition-colors">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        {item}
                      </div>
                    </FadeInView>
                  ))}
                </div>
              )}

              {purpose.servesClosing && (
                <p className="text-warm-gray-600 mt-6 text-xs leading-relaxed italic">
                  {purpose.servesClosing}
                </p>
              )}
            </div>
          </FadeInView>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 4. OUR APPROACH (PILLARS) SECTION                        */}
      {/* ========================================================= */}
      <Section className="bg-background relative z-20 py-20 md:py-28">
        <Container>
          <FadeInView>
            <span className="text-gold mb-2 block font-mono text-xs font-semibold tracking-widest uppercase">
              METHODOLOGY
            </span>
            <h2 className="text-h1 text-foreground font-serif text-3xl sm:text-4xl md:text-5xl">
              {approach.title}
            </h2>
            {approach.intro && (
              <p className="text-body-lg text-warm-gray-700 mt-4 max-w-xl text-base font-light">
                {approach.intro}
              </p>
            )}
          </FadeInView>

          {approach.pillars && approach.pillars.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approach.pillars.map((pillar, i) => (
                <FadeInView key={pillar.title || i} delay={i * 120} animation="animate-scale-up">
                  <Card className="hover:border-gold border-warm-gray-200/80 bg-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <span className="text-warm-gray-100/80 pointer-events-none absolute top-4 right-6 font-serif text-6xl font-bold transition-colors duration-300 select-none group-hover:text-amber-500/10">
                      0{i + 1}
                    </span>
                    <div className="relative z-10">
                      <span className="text-gold font-mono text-[10px] font-semibold tracking-widest uppercase">
                        PILLAR 0{i + 1}
                      </span>
                      <h3 className="text-h3 text-foreground mt-2 font-serif text-2xl transition-colors group-hover:text-amber-600">
                        {pillar.title}
                      </h3>
                      <p className="text-warm-gray-600 mt-4 text-xs leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                </FadeInView>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 5. MISSION & VISION SECTION                              */}
      {/* ========================================================= */}
      <Section className="bg-ink relative z-20 py-20 text-white md:py-28">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {/* Mission Card */}
            <FadeInView delay={100} animation="animate-scale-up">
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/40 hover:bg-white/[0.08] sm:p-10">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-amber-400 transition-transform group-hover:rotate-12" />
                  <h3 className="text-h3 font-serif text-2xl text-white sm:text-3xl">
                    Our Mission
                  </h3>
                </div>
                <p className="text-warm-gray-300 mt-4 text-sm leading-relaxed font-light">
                  {mission}
                </p>
              </div>
            </FadeInView>

            {/* Vision Card */}
            <FadeInView delay={250} animation="animate-scale-up">
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/40 hover:bg-white/[0.08] sm:p-10">
                <div className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-amber-400 transition-transform group-hover:scale-110" />
                  <h3 className="text-h3 font-serif text-2xl text-white sm:text-3xl">Our Vision</h3>
                </div>
                <p className="text-warm-gray-300 mt-4 text-sm leading-relaxed font-light">
                  {vision}
                </p>
              </div>
            </FadeInView>
          </div>
        </Container>
      </Section>
    </main>
  );
}
