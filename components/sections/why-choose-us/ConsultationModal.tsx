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
  ChevronDown,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Property Acquisition',
    preferredDate: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (submissionMethod === 'whatsapp') {
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
      setIsSubmitting(false);
      setIsSubmitted(true);
    } else {
      try {
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
          console.error('Missing WEB3FORMS_ACCESS_KEY in environment variables.');
          alert('Email service is not configured properly. Please use WhatsApp.');
          setIsSubmitting(false);
          return;
        }

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `🏛️ Consultation Request: ${formData.fullName}`,
            from_name: `${formData.fullName} (Gloch Website)`,
            replyto: formData.email,
            // Generic labeled fields (Web3Forms auto-formats these cleanly into a structured email table)
            'Client Name': formData.fullName,
            'Email Address': formData.email,
            'Phone / WhatsApp': formData.phone,
            'Requested Service': formData.serviceType,
            'Preferred Date': formData.preferredDate || 'Not specified',
            'Property Requirements & Notes': formData.notes?.trim() || 'None provided',
          }),
        });

        const result = await response.json();

        if (!result.success) {
          console.error('Web3Forms rejection:', result);
          throw new Error(result.message || 'Form submission failed');
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Submission Error:', error);
        alert('Failed to send email. Please try WhatsApp instead.');
        setIsSubmitting(false);
      }
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: 'Property Acquisition',
      preferredDate: '',
      notes: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
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
            className="text-foreground relative z-10 max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[--color-border] bg-white p-4 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              disabled={isSubmitting}
              className="text-warm-gray-500 hover:bg-warm-gray-100 hover:text-foreground absolute top-3 right-3 rounded-full p-2 transition-colors disabled:opacity-50 sm:top-5 sm:right-5"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center sm:py-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 sm:h-16 sm:w-16">
                  <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-foreground font-serif text-xl font-light sm:text-3xl">
                  Consultation Initiated
                </h3>
                <p className="text-warm-gray-700 mt-3 font-sans text-xs leading-relaxed sm:text-sm">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. Your
                  request details have been prepared for{' '}
                  {submissionMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}. Our advisory team will
                  review your requirements and reach out shortly.
                </p>
                <div className="mt-6 flex justify-center sm:mt-8">
                  <Button
                    variant="primary"
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="pt-2 text-center sm:pt-0">
                  <span className="inline-block rounded-lg bg-[--color-gold] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white uppercase sm:text-xs">
                    Gloch Stylistics Limited
                  </span>
                  <h2 className="text-foreground mt-3 font-serif text-lg font-light sm:text-2xl">
                    Book a Private Consultation
                  </h2>
                  <p className="text-warm-gray-600 mt-1 font-sans text-xs sm:text-sm">
                    Connect with our luxury real estate specialists at Gloch Stylistics.
                  </p>
                </div>

                {/* Submission Channel Toggle */}
                <div className="bg-warm-gray-100/80 mt-5 grid grid-cols-2 gap-1 rounded-xl p-1 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => setSubmissionMethod('whatsapp')}
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all sm:gap-2 sm:py-2.5 ${
                      submissionMethod === 'whatsapp'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-warm-gray-600 hover:text-foreground'
                    }`}
                  >
                    <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmissionMethod('email')}
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all sm:gap-2 sm:py-2.5 ${
                      submissionMethod === 'email'
                        ? 'bg-[--color-gold] text-white shadow-sm'
                        : 'text-warm-gray-600 hover:text-foreground'
                    }`}
                  >
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Email</span>
                  </button>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-5 space-y-3.5 font-sans sm:mt-6 sm:space-y-4"
                >
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
                        disabled={isSubmitting}
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
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
                          disabled={isSubmitting}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
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
                          disabled={isSubmitting}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Needed & Preferred Date */}
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                    <div>
                      <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
                        Interest / Service
                      </label>
                      <div className="relative">
                        <Home className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <select
                          name="serviceType"
                          disabled={isSubmitting}
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="border-warm-gray-300 text-foreground w-full appearance-none rounded-xl border bg-white py-2.5 pr-8 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
                        >
                          <option value="Property Acquisition">Property Acquisition</option>
                          <option value="Investment Advisory">Investment Advisory</option>
                          <option value="Commercial Space">Commercial Leasing</option>
                          <option value="Property Valuation">Property Valuation</option>
                        </select>
                        <ChevronDown className="text-warm-gray-500 pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
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
                          disabled={isSubmitting}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
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
                      disabled={isSubmitting}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about the property type, location, or budget you have in mind..."
                      className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white p-3 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none disabled:opacity-60 sm:text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {submissionMethod === 'whatsapp'
                              ? 'Book via WhatsApp'
                              : 'Send Email Request'}
                          </span>
                        </>
                      )}
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

// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   X,
//   Send,
//   MessageSquare,
//   CheckCircle,
//   Calendar,
//   User,
//   Mail,
//   Phone,
//   Home,
//   ChevronDown,
// } from 'lucide-react';
// import { Button } from '@/components/ui/Button';

// interface ConsultationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   whatsappNumber?: string;
//   contactEmail?: string;
// }

// export function ConsultationModal({
//   isOpen,
//   onClose,
//   whatsappNumber = '2349169855031',
//   contactEmail = 'omoniyitemitopeisrael@gmail.com',
// }: ConsultationModalProps) {
//   const [submissionMethod, setSubmissionMethod] = useState<'whatsapp' | 'email'>('whatsapp');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     serviceType: 'Property Acquisition',
//     preferredDate: '',
//     notes: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//  const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (submissionMethod === 'whatsapp') {
//     const cleanPhone = whatsappNumber.replace(/\D/g, '');
//     const formattedDate = formData.preferredDate || 'Not specified';
//     const formattedNotes = formData.notes?.trim() || 'None provided';

//     const waText = `🏛️ *GLOCH STYLISTICS*
// *Private Consultation Booking*
// ───────────────

// 👤 *Client:* ${formData.fullName}
// 📧 *Email:* ${formData.email}
// 📞 *Phone:* ${formData.phone}

// 📍 *Service:* ${formData.serviceType}
// 📅 *Preferred Date:* ${formattedDate}

// 📝 *Requirements & Notes:*
// ${formattedNotes}

// ───────────────
// _Sent via Gloch Stylistics Website_`;

//     const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;
//     window.open(whatsappUrl, '_blank');
//   } else {
//     try {
//       const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

//       if (!accessKey) {
//         console.error('Missing WEB3FORMS_ACCESS_KEY in environment variables.');
//         alert('Email service is not configured properly. Please use WhatsApp.');
//         return;
//       }

//       // Inline CSS Styled HTML Template
//       const customHtmlEmail = `
//         <div style="background-color: #F5F4F2; padding: 20px; font-family: 'Inter', system-ui, -apple-system, sans-serif; color: #2B2925;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E8E6E1; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

//             <!-- Header -->
//             <div style="background-color: #0A0A0A; padding: 32px 24px; text-align: center; border-bottom: 3px solid #C9A227;">
//               <span style="display: inline-block; background-color: #C9A227; color: #FFFFFF; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; border-radius: 6px; margin-bottom: 12px;">Gloch Stylistics Limited</span>
//               <h1 style="color: #FFFFFF; font-family: 'Playfair Display', Georgia, serif; font-size: 22px; margin: 0; font-weight: 300; letter-spacing: 0.5px;">Private Consultation Request</h1>
//             </div>

//             <!-- Content -->
//             <div style="padding: 32px 28px; background-color: #FAFAF8;">

//               <!-- Section 1 -->
//               <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #8C6D15; margin-bottom: 12px; font-weight: 700; border-bottom: 1px solid #E8E6E1; padding-bottom: 6px;">Client Details</div>

//               <div style="margin-bottom: 16px;">
//                 <div style="font-size: 11px; color: #8A867C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Full Name</div>
//                 <div style="font-size: 15px; color: #0A0A0A; font-weight: 500;">${formData.fullName}</div>
//               </div>

//               <div style="margin-bottom: 16px;">
//                 <div style="font-size: 11px; color: #8A867C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Email Address</div>
//                 <div style="font-size: 15px; color: #0A0A0A; font-weight: 500;"><a href="mailto:${formData.email}" style="color: #8C6D15; text-decoration: none;">${formData.email}</a></div>
//               </div>

//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 11px; color: #8A867C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Phone / WhatsApp</div>
//                 <div style="font-size: 15px; color: #0A0A0A; font-weight: 500;"><a href="tel:${formData.phone}" style="color: #0A0A0A; text-decoration: none;">${formData.phone}</a></div>
//               </div>

//               <!-- Section 2 -->
//               <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #8C6D15; margin-bottom: 12px; font-weight: 700; border-bottom: 1px solid #E8E6E1; padding-bottom: 6px;">Appointment Details</div>

//               <div style="margin-bottom: 16px;">
//                 <div style="font-size: 11px; color: #8A867C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Requested Service</div>
//                 <div style="font-size: 15px; color: #8C6D15; font-weight: 600;">${formData.serviceType}</div>
//               </div>

//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 11px; color: #8A867C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Preferred Date</div>
//                 <div style="font-size: 15px; color: #0A0A0A; font-weight: 500;">${formData.preferredDate || 'Not specified'}</div>
//               </div>

//               <!-- Section 3 -->
//               <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #8C6D15; margin-bottom: 12px; font-weight: 700; border-bottom: 1px solid #E8E6E1; padding-bottom: 6px;">Requirements & Notes</div>
//               <div style="background-color: #FFFFFF; border: 1px solid #E8E6E1; padding: 16px; border-radius: 8px; color: #57544C; font-size: 14px; line-height: 1.6;">
//                 ${formData.notes?.trim() || 'No additional requirements provided.'}
//               </div>

//             </div>

//             <!-- Footer -->
//             <div style="background-color: #F5F4F2; padding: 20px; text-align: center; font-size: 12px; color: #8A867C; border-top: 1px solid #E8E6E1;">
//               Automated consultation notification from <strong>Gloch Stylistics Website</strong>
//             </div>

//           </div>
//         </div>
//       `;

//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: accessKey,
//           subject: `🏛️ Consultation Request: ${formData.fullName}`,
//           from_name: `${formData.fullName} (Gloch Website)`,
//           replyto: formData.email,
//           message: customHtmlEmail,
//         }),
//       });

//       const result = await response.json();

//       if (!result.success) {
//         console.error('Web3Forms rejection:', result);
//         throw new Error(result.message || 'Form submission failed');
//       }
//     } catch (error) {
//       console.error('Submission Error:', error);
//       alert('Failed to send email. Please try WhatsApp instead.');
//       return;
//     }
//   }

//   setIsSubmitted(true);
// };

//   const handleResetAndClose = () => {
//     setIsSubmitted(false);
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       serviceType: 'Property Acquisition',
//       preferredDate: '',
//       notes: '',
//     });
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
//           {/* Backdrop Blur Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleResetAndClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-md"
//           />

//           {/* Modal Content Box */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
//             className="text-foreground relative z-10 max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[--color-border] bg-white p-4 shadow-2xl sm:p-8"
//           >
//             {/* Close Button */}
//             <button
//               onClick={handleResetAndClose}
//               className="text-warm-gray-500 hover:bg-warm-gray-100 hover:text-foreground absolute top-3 right-3 rounded-full p-2 transition-colors sm:top-5 sm:right-5"
//               aria-label="Close Modal"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             {isSubmitted ? (
//               <div className="py-8 text-center sm:py-10">
//                 <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 sm:h-16 sm:w-16">
//                   <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
//                 </div>
//                 <h3 className="text-foreground font-serif text-xl font-light sm:text-3xl">
//                   Consultation Initiated
//                 </h3>
//                 <p className="text-warm-gray-700 mt-3 font-sans text-xs leading-relaxed sm:text-sm">
//                   Thank you, <span className="font-semibold">{formData.fullName}</span>. Your
//                   request details have been prepared for{' '}
//                   {submissionMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}. Our advisory team will
//                   review your requirements and reach out shortly.
//                 </p>
//                 <div className="mt-6 flex justify-center sm:mt-8">
//                   <Button
//                     variant="primary"
//                     onClick={handleResetAndClose}
//                     className="w-full sm:w-auto"
//                   >
//                     Done
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 {/* Header */}
//                 <div className="pt-2 text-center sm:pt-0">
//                   <span className="inline-block rounded-lg bg-[--color-gold] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white uppercase sm:text-xs">
//                     Gloch Stylistics Limited
//                   </span>
//                   <h2 className="text-foreground mt-3 font-serif text-lg font-light sm:text-2xl">
//                     Book a Private Consultation
//                   </h2>
//                   <p className="text-warm-gray-600 mt-1 font-sans text-xs sm:text-sm">
//                     Connect with our luxury real estate specialists at Gloch Stylistics.
//                   </p>
//                 </div>

//                 {/* Submission Channel Toggle */}
//                 <div className="bg-warm-gray-100/80 mt-5 grid grid-cols-2 gap-1 rounded-xl p-1 sm:mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setSubmissionMethod('whatsapp')}
//                     className={`flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all sm:gap-2 sm:py-2.5 ${
//                       submissionMethod === 'whatsapp'
//                         ? 'bg-emerald-600 text-white shadow-sm'
//                         : 'text-warm-gray-600 hover:text-foreground'
//                     }`}
//                   >
//                     <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                     <span>WhatsApp</span>
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setSubmissionMethod('email')}
//                     className={`flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all sm:gap-2 sm:py-2.5 ${
//                       submissionMethod === 'email'
//                         ? 'bg-[--color-gold] text-white shadow-sm'
//                         : 'text-warm-gray-600 hover:text-foreground'
//                     }`}
//                   >
//                     <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                     <span>Email</span>
//                   </button>
//                 </div>

//                 {/* Form */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-5 space-y-3.5 font-sans sm:mt-6 sm:space-y-4"
//                 >
//                   {/* Full Name */}
//                   <div>
//                     <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <User className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//                       <input
//                         type="text"
//                         name="fullName"
//                         required
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="e.g. John Doe"
//                         className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                       />
//                     </div>
//                   </div>

//                   {/* Email & Phone */}
//                   <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
//                     <div>
//                       <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="john@example.com"
//                           className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                         Phone / WhatsApp Number *
//                       </label>
//                       <div className="relative">
//                         <Phone className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+234 800 000 0000"
//                           className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Service Needed & Preferred Date */}
//                   <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
//                     <div>
//                       <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                         Interest / Service
//                       </label>
//                       <div className="relative">
//                         <Home className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//                         <select
//                           name="serviceType"
//                           value={formData.serviceType}
//                           onChange={handleChange}
//                           className="border-warm-gray-300 text-foreground w-full appearance-none rounded-xl border bg-white py-2.5 pr-8 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                         >
//                           <option value="Property Acquisition">Property Acquisition</option>
//                           <option value="Investment Advisory">Investment Advisory</option>
//                           <option value="Commercial Space">Commercial Leasing</option>
//                           <option value="Property Valuation">Property Valuation</option>
//                         </select>
//                         <ChevronDown className="text-warm-gray-500 pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                         Preferred Date
//                       </label>
//                       <div className="relative">
//                         <Calendar className="text-warm-gray-500 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//                         <input
//                           type="date"
//                           name="preferredDate"
//                           value={formData.preferredDate}
//                           onChange={handleChange}
//                           className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white py-2.5 pr-4 pl-10 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Notes / Special Request */}
//                   <div>
//                     <label className="text-warm-gray-900 mb-1 block text-xs font-medium">
//                       Brief Message or Property Requirements
//                     </label>
//                     <textarea
//                       name="notes"
//                       rows={3}
//                       value={formData.notes}
//                       onChange={handleChange}
//                       placeholder="Tell us about the property type, location, or budget you have in mind..."
//                       className="border-warm-gray-300 text-foreground w-full rounded-xl border bg-white p-3 text-base transition-all focus:border-[--color-gold] focus:ring-1 focus:ring-[--color-gold] focus:outline-none sm:text-sm"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <div className="pt-2">
//                     <Button
//                       type="submit"
//                       variant="primary"
//                       className="flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold"
//                     >
//                       <Send className="h-4 w-4" />
//                       {submissionMethod === 'whatsapp' ? 'Book via WhatsApp' : 'Send Email Request'}
//                     </Button>
//                   </div>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }
