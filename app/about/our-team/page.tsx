'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ourTeamPage } from '@/constants/our-team';

type Member = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  quote?: string;
};

export default function OurTeamPage() {
  const members: Member[] = ourTeamPage.members.map((m) => ({
    ...m,
    bio:
      'bio' in m
        ? (m.bio as string)
        : 'Guiding brand philosophy, architectural consistency, and high-impact digital delivery.',
    quote:
      'quote' in m
        ? (m.quote as string)
        : 'Architecture and digital craft are two sides of the same spatial language.',
  }));

  const featuredMember = members[0];
  const executiveRoster = members.slice(1);

  return (
    <main className="bg-paper text-ink selection:bg-gold-light selection:text-ink relative min-h-screen overflow-hidden">
      {/* 1. Architectural Grid Background Lines */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between px-4 opacity-40 sm:px-8 lg:px-12">
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent lg:block" />
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 1. HERO BANNER SECTION (PURE CSS ANIMATIONS)              */}
      {/* ========================================================= */}
      <section className="relative flex h-screen max-h-[900px] min-h-[600px] w-full flex-col justify-between overflow-hidden bg-black pt-28 pb-12 text-white">
        {/* Background Photo Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="relative h-full w-full transform transition-transform duration-10000 ease-out hover:scale-105">
            <Image
              src="/images/hero-our-team.jpg"
              alt={ourTeamPage.title || 'Our Leadership'}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dark Architectural Gradients */}
          <div className="absolute inset-0 z-10 bg-black/10" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/20 to-black/20" />
        </div>

        {/* Centered Main Hero Title Block */}
        <Container className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
          <div className="animate-fade-up max-w-3xl px-4">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>{ourTeamPage.eyebrow || 'THE MINDS BEHIND THE CRAFT'}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl leading-tight font-medium tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              {ourTeamPage.title || 'Our Team'}
            </h1>

            {/* Subtext Paragraph / Tagline */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed font-light text-slate-200 sm:text-base">
              {ourTeamPage.intro}
            </p>

            {/* Aesthetic Divider Line */}
            <div className="mt-6 flex items-center justify-center gap-3 font-mono text-xs tracking-wider text-slate-300 sm:text-sm">
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
              <span className="shrink-0 font-medium text-slate-100">
                LEADERSHIP & CREATIVE DIRECTION
              </span>
              <span className="h-[1px] w-8 shrink-0 bg-amber-400" />
            </div>
          </div>
        </Container>

        {/* Hero Scroll Indicator */}
        <Container className="relative z-20">
          <div className="animate-fade-up flex items-center justify-between border-t border-white/20 pt-5 font-mono text-xs text-slate-300">
            <span className="hidden tracking-widest uppercase sm:inline-block">
              MEET THE LEADERSHIP ROSTER
            </span>
            <div className="mx-auto flex items-center gap-3 sm:mx-0">
              <span className="text-white/80">EXPLORE</span>
              <div className="animate-bounce-subtle flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-400 backdrop-blur-sm">
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ambient Soft Glow Behind Content */}
      <div className="bg-gold-light/10 pointer-events-none absolute top-1/2 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      {/* ========================================================= */}
      {/* 2. MAIN TEAM ROSTER SECTION (FRAMER MOTION)              */}
      {/* ========================================================= */}
      <Section className="relative z-10 py-16 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Sticky CEO Monograph Spotlight */}
            {featuredMember && (
              <div className="space-y-6 lg:sticky lg:top-28 lg:col-span-5">
                <div className="border-warm-gray-300 border-b pb-3">
                  <span className="text-gold font-mono text-xs font-bold tracking-widest uppercase">
                    Executive Spotlight
                  </span>
                </div>

                <div className="border-warm-gray-200 relative aspect-[3/4] w-full overflow-hidden rounded-2xl border shadow-xl">
                  <Image
                    src={featuredMember.image}
                    alt={featuredMember.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-gold font-mono text-xs tracking-widest uppercase">
                    {featuredMember.role}
                  </span>
                  <h2 className="text-ink font-serif text-4xl font-medium">
                    {featuredMember.name}
                  </h2>
                  <blockquote className="text-warm-gray-800 border-gold border-l-2 pl-4 font-serif text-base italic">
                    &ldquo;{featuredMember.quote}&rdquo;
                  </blockquote>
                  <p className="text-warm-gray-600 text-xs leading-relaxed font-light sm:text-sm">
                    {featuredMember.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Right Column: Scrolling Executive Roster */}
            <div className="space-y-12 lg:col-span-7">
              <div className="border-warm-gray-300 border-b pb-3">
                <span className="text-warm-gray-400 font-mono text-xs font-bold tracking-widest uppercase">
                  Executive Directory
                </span>
              </div>

              <div className="space-y-10">
                {executiveRoster.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group border-warm-gray-200 grid grid-cols-1 items-center gap-6 border-b pb-8 sm:grid-cols-12"
                  >
                    <div className="bg-warm-gray-100 border-warm-gray-200 relative aspect-[3/4] w-full overflow-hidden rounded-xl border sm:col-span-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="200px"
                      />
                    </div>

                    <div className="space-y-2 sm:col-span-8">
                      <span className="text-gold font-mono text-[10px] font-bold tracking-wider uppercase">
                        {member.role}
                      </span>
                      <h3 className="text-ink group-hover:text-gold font-serif text-2xl font-medium transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-warm-gray-600 text-xs leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
