// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  ChevronDown,
  Send,
  MessageSquare,
  Users,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactPage } from '@/constants/contact';

// Replace with your company WhatsApp number in international format without spaces or '+'
const WHATSAPP_NUMBER = '+2349169855031';

// Animation Variants for reuse
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
} as any;

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-border border-b">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:opacity-80"
      >
        <span className="text-foreground font-serif text-lg">{question}</span>
        <ChevronDown
          className={`text-gold-accessible h-5 w-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-warm-gray-700 pb-5 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. WhatsApp Handler
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const whatsappMessage = encodeURIComponent(
      `*New Contact Inquiry*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email || 'N/A'}\n` +
        `*Phone:* ${formData.phone || 'N/A'}\n` +
        `*Subject:* ${formData.subject || 'General Inquiry'}\n\n` +
        `*Message:*\n${formData.message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
  };

  // 2. Email Client Handler
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const mailtoUrl = `mailto:${contactPage.email}?subject=${encodeURIComponent(
      formData.subject || 'Inquiry from Website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail:${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="bg-paper text-ink selection:bg-gold/20 selection:text-ink relative min-h-screen overflow-hidden">
      {/* Background Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between px-4 opacity-40 sm:px-8 lg:px-12">
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <div className="via-warm-gray-200/60 hidden h-full w-[1px] bg-gradient-to-b from-transparent to-transparent lg:block" />
        <div className="via-warm-gray-200/60 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 1. HERO BANNER SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative flex h-screen max-h-[850px] min-h-[600px] w-full flex-col justify-between overflow-hidden bg-black pt-28 pb-12 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="relative h-full w-full animate-[pulse-zoom_12s_ease-in-out_infinite_alternate]">
            <Image
              src="/images/hero-contact.jpg"
              alt="Our Team and Location"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-50 brightness-90 contrast-125 filter"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-black/25" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
        </div>

        <Container className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
          <div className="animate-fade-up max-w-2xl px-4">
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>{contactPage.eyebrow || 'GET IN TOUCH'}</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-medium tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              {contactPage.title || 'Who We Are & How to Reach Us'}
            </h1>

            <p className="mt-6 font-mono text-xs tracking-wider text-slate-200 sm:text-sm md:text-base">
              {contactPage.intro ||
                'Our team and leadership are ready to assist with your operational and service inquiries.'}
            </p>
          </div>
        </Container>

        <Container className="relative z-20">
          <div className="animate-fade-up flex items-center justify-between border-t border-white/20 pt-5 font-mono text-xs text-slate-300">
            <span className="hidden tracking-widest uppercase sm:inline-block">
              DIRECT MESSAGING & TEAM DIRECTORY
            </span>
            <div className="mx-auto flex items-center gap-3 sm:mx-0">
              <span className="text-white/80">REACH OUT</span>
              <div className="animate-bounce-subtle flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-400 backdrop-blur-sm">
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. DIRECTORY & DUAL SUBMISSION FORM                       */}
      {/* ========================================================= */}
      <Section className="bg-background relative z-20 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Left Side: Directory Details */}
            <div className="space-y-8 lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
                custom={0}
              >
                <span className="text-gold mb-2 block font-mono text-xs font-semibold tracking-widest uppercase">
                  OUR DIRECTORY
                </span>
                <h2 className="text-foreground font-serif text-2xl font-medium sm:text-3xl">
                  Connect With Our Team
                </h2>
                <p className="text-warm-gray-700 mt-3 text-sm leading-relaxed">
                  Our management and executive staff are accessible through direct channels. Select
                  your preferred contact option or send us a message directly.
                </p>
              </motion.div>

              <div className="border-warm-gray-200/80 space-y-6 border-t pt-6">
                {/* Office Address Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariants}
                  custom={1}
                  className="flex items-start gap-4"
                >
                  <div className="border-gold/30 text-gold-accessible flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-amber-400/10">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-serif text-base font-medium">
                      Head Office Location
                    </h3>
                    <p className="text-warm-gray-700 mt-1 text-sm">{contactPage.address}</p>
                  </div>
                </motion.div>

                {/* Email Item */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariants}
                  custom={2}
                  className="flex items-start gap-4"
                >
                  <div className="border-gold/30 text-gold-accessible flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-amber-400/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-serif text-base font-medium">
                      Direct Email
                    </h3>
                    <a
                      href={`mailto:${contactPage.email}`}
                      className="text-warm-gray-700 hover:text-gold-accessible mt-1 block text-sm transition-colors"
                    >
                      {contactPage.email}
                    </a>
                  </div>
                </motion.div>

                {/* Phone Numbers Item */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariants}
                  custom={3}
                  className="flex items-start gap-4"
                >
                  <div className="border-gold/30 text-gold-accessible flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-amber-400/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-serif text-base font-medium">
                      Direct Lines
                    </h3>
                    {contactPage.phones?.map((phone) => (
                      <p key={phone.number} className="text-warm-gray-700 mt-1 text-sm">
                        <span className="text-warm-gray-500">{phone.label}: </span>
                        <a
                          href={`tel:${phone.number.replace(/\s/g, '')}`}
                          className="hover:text-gold-accessible transition-colors"
                        >
                          {phone.number}
                        </a>
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Contact Form with Staggered Field Animations */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUpVariants}
                custom={1}
                className="border-warm-gray-200 bg-surface rounded-3xl border p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-foreground font-serif text-2xl font-medium">
                  Send Us a Direct Message
                </h3>
                <p className="text-warm-gray-600 mt-1 text-xs sm:text-sm">
                  Fill out your info and choose whether to send instantly via WhatsApp or open your
                  standard Mail client.
                </p>

                <form className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUpVariants}
                      custom={2}
                    >
                      <label className="text-foreground mb-1 block font-mono text-xs font-medium uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Emmanuel Johnson"
                        className="border-warm-gray-200 bg-background focus:border-gold focus:ring-gold/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                      />
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUpVariants}
                      custom={3}
                    >
                      <label className="text-foreground mb-1 block font-mono text-xs font-medium uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Emmanuel@example.com"
                        className="border-warm-gray-200 bg-background focus:border-gold focus:ring-gold/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUpVariants}
                      custom={4}
                    >
                      <label className="text-foreground mb-1 block font-mono text-xs font-medium uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="border-warm-gray-200 bg-background focus:border-gold focus:ring-gold/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                      />
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUpVariants}
                      custom={5}
                    >
                      <label className="text-foreground mb-1 block font-mono text-xs font-medium uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Service Inquiry"
                        className="border-warm-gray-200 bg-background focus:border-gold focus:ring-gold/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    custom={6}
                  >
                    <label className="text-foreground mb-1 block font-mono text-xs font-medium uppercase">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can our team assist you?"
                      className="border-warm-gray-200 bg-background focus:border-gold focus:ring-gold/20 w-full resize-none rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-2"
                    />
                  </motion.div>

                  {/* Animated Submission Buttons */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    custom={7}
                    className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
                  >
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-[0.99]"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="bg-ink flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-black hover:shadow-lg active:scale-[0.99]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Open Mail Client</span>
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* 3. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <Section className="bg-surface relative z-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUpVariants}
              custom={0}
              className="text-h1 text-foreground text-center font-serif"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="mt-10">
              {contactPage.faq?.map((item, i) => (
                <motion.div
                  key={item.question}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUpVariants}
                  custom={i + 1}
                >
                  <FaqItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
