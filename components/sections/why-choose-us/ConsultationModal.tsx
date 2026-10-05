// components/sections/why-choose-us/ConsultationModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  MessageSquare,
  CheckCircle,
  Calendar,
  User,
  Mail,
  Phone,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Replace with your actual WhatsApp business number with country code (e.g. "2348012345678")
  whatsappNumber?: string;
  // Replace with your business receiving email
  contactEmail?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  whatsappNumber = '2349169855031',
  contactEmail = 'info@glochstylistic.com',
}: ConsultationModalProps) {
  const [submissionMethod, setSubmissionMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Acquisitions & Advisory',
    preferredDate: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (submissionMethod === 'whatsapp') {
      // WhatsApp formatting with bold syntax (*)
      const cleanPhone = whatsappNumber.replace(/\D/g, '');
      const formattedDate = formData.preferredDate || 'Not specified';
      const formattedNotes = formData.notes?.trim() || 'None provided';

      const waText = `🏛️ *GLOCH STYLISTICS*
*Private Consultation Booking*
───────────────

👤 *Client:* ${formData.fullName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}

📍 *Service:* ${formData.serviceType}
📅 *Preferred Date:* ${formattedDate}

📝 *Requirements & Notes:*
${formattedNotes}

───────────────
_Sent via Gloch Stylistics Website_`;

      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Plain text formatting for email clients with standard line breaks
      const emailSubject = `Consultation Request: ${formData.fullName}`;

      const emailBody =
        `GLOCH STYLISTICS LIMITED - CONSULTATION REQUEST\r\n` +
        `==================================================\r\n\r\n` +
        `CLIENT DETAILS\r\n` +
        `-------------\r\n` +
        `Full Name:      ${formData.fullName}\r\n` +
        `Email Address:  ${formData.email}\r\n` +
        `Phone / WhatsApp: ${formData.phone}\r\n\r\n` +
        `APPOINTMENT DETAILS\r\n` +
        `-------------------\r\n` +
        `Service Needed: ${formData.serviceType}\r\n` +
        `Preferred Date: ${formData.preferredDate || 'Not specified'}\r\n\r\n` +
        `ADDITIONAL REQUIREMENTS / NOTES\r\n` +
        `---------------------------------\r\n` +
        `${formData.notes || 'No additional notes provided.'}\r\n\r\n` +
        `---\r\n` +
        `Sent via Gloch Stylistics Website`;

      const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: 'Acquisitions & Advisory',
      preferredDate: '',
      notes: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="text-foreground relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[--color-border] bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="text-warm-gray-500 hover:bg-warm-gray-50 hover:text-foreground absolute top-5 right-5 rounded-full p-2 transition-colors"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-foreground font-serif text-2xl font-light sm:text-3xl">
                  Consultation Initiated
                </h3>
                <p className="text-warm-gray-700 mt-3 font-sans text-sm leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. Your
                  request details have been prepared for{' '}
                  {submissionMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}. Our advisory team will
                  review your requirements and reach out shortly.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button variant="primary" onClick={handleResetAndClose}>
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="pr-6 text-center sm:text-left">
                  <div className="inline- bg-gold items-center justify-center gap-2 rounded-xl border border-[--color-gold]/30 px-3 py-3 text-center text-xs font-semibold tracking-widest text-white uppercase">
                    Gloch Stylistics Limited
                  </div>
                  <h2 className="text-foreground mt-3 text-center font-serif text-xl font-light sm:text-xl">
                    Book a Private Consultation
                  </h2>
                  <p className="text-warm-gray-700 text- mt-1 text-center font-sans sm:text-sm">
                    Connect with our luxury real estate specialists at Gloch Stylistics.
                  </p>
                </div>

                {/* Submission Channel Toggle */}
                <div className="bg-warm-gray-50 border-warm-gray-100 mt-6 grid grid-cols-2 gap-2 rounded-xl border p-1">
                  <button
                    type="button"
                    onClick={() => setSubmissionMethod('whatsapp')}
                    className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                      submissionMethod === 'whatsapp'
                        ? 'w-xl bg-emerald-600 text-white shadow-md'
                        : 'text-warm-gray-700 hover:text-foreground hidden'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Submit via WhatsApp
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => setSubmissionMethod('email')}
                    className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                      submissionMethod === 'email'
                        ? 'bg-[--color-gold] text-white shadow-md'
                        : 'text-warm-gray-700 hover:text-foreground'
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    Submit via Email
                  </button> */}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-sans">
                  {/* Full Name */}
                  <div>
                    <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Needed & Preferred Date */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                        Interest / Service
                      </label>
                      <div className="relative">
                        <Home className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="border-warm-gray-300 text-foreground w-full appearance-none rounded-xl border bg-white py-2.5 pr-4 pl-10 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                        >
                          <option value="Property Acquisition">Property Acquisition</option>
                          <option value="Investment Advisory">Investment Advisory</option>
                          <option value="Commercial Space">Commercial Leasing</option>
                          <option value="Property Valuation">Property Valuation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special Request */}
                  <div>
                    <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                      Brief Message or Property Requirements
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about the property type, location, or budget you have in mind..."
                      className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white p-3 text-sm transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold"
                    >
                      <Send className="h-4 w-4" />
                      {submissionMethod === 'whatsapp' ? 'Book via WhatsApp' : 'Send Email Request'}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
