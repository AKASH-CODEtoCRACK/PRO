'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, meetingFormSchema, type ContactFormData, type MeetingFormData } from '@/lib/validations';
import { Mail, Phone, MapPin, Calendar, Send, Clock, MessageSquare, Building2 } from 'lucide-react';
import { services } from '@/lib/services';
import { images } from '@/lib/images';
import Image from 'next/image';
import { branding } from '@/lib/branding';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_COMPANY_TEMPLATE_ID || '', // For company emails
  meetingTemplateId: process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID || '', // For user acknowledgment
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactSubmitStatus, setContactSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [meetingSubmitStatus, setMeetingSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    console.log('EmailJS Config:', {
      serviceId: EMAILJS_CONFIG.serviceId,
      contactTemplateId: EMAILJS_CONFIG.contactTemplateId,
      meetingTemplateId: EMAILJS_CONFIG.meetingTemplateId,
      publicKey: EMAILJS_CONFIG.publicKey ? 'Set' : 'Not Set',
    });

    if (EMAILJS_CONFIG.publicKey) {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS Public Key is missing!');
    }
  }, []);

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Hero Section with Background */}
      <div className="relative py-24 overflow-hidden">
        <Image
          src={images.officeSpace}
          alt="Contact Us"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#60A5FA]/85 to-[#3B82F6]/75" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full"
          >
            <span className="text-white font-semibold text-sm">Let's Connect</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Get in <span className="text-[#FCD34D]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to streamline your business operations? We're here to help you succeed.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="lg:col-span-1 space-y-8">
            <ContactInfo />
            
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] p-8 rounded-2xl shadow-xl text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-medium">Sunday - Thursday</span>
                  <span className="text-white/90">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Friday - Saturday</span>
                  <span className="text-white/90">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Why Contact Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">✓</span>
                  <span>Free consultation for new clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">✓</span>
                  <span>Fast response within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">✓</span>
                  <span>Expert guidance on all services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Send Us a Message</h2>
                </div>
                <p className="text-white/90">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="p-8">
                <ContactForm
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  submitStatus={contactSubmitStatus}
                  setSubmitStatus={setContactSubmitStatus}
                />
              </div>
            </motion.div>

            {/* Schedule Meeting Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Schedule a Meeting</h2>
                </div>
                <p className="text-white/90">
                  Prefer a face-to-face consultation? Book a meeting with our experts.
                </p>
              </div>

              <div className="p-8">
                <MeetingForm
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  submitStatus={meetingSubmitStatus}
                  setSubmitStatus={setMeetingSubmitStatus}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="p-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
            </div>
            <p className="text-gray-600 ml-15">
              Business Bay, Dubai, United Arab Emirates
            </p>
          </div>
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85bf%3A0x4a1b4b1b4b1b4b1b!2sBusiness%20Bay%20Dubai!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ContactInfo() {
  const info = [
    {
      icon: Mail,
      title: 'Email Us',
      value: branding.contact.email,
      link: `mailto:${branding.contact.email}`,
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: branding.contact.phone,
      link: `tel:${branding.contact.phone.replace(/\s/g, '')}`,
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: `${branding.contact.city}, ${branding.contact.country}`,
      link: null,
      description: branding.contact.address
    },
  ];

  return (
    <>
      {info.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <Icon className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.description}</p>
            {item.link ? (
              <a 
                href={item.link} 
                className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-semibold text-lg"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-gray-700 font-semibold text-lg">{item.value}</p>
            )}
          </motion.div>
        );
      })}
    </>
  );
}

function ContactForm({
  isSubmitting,
  setIsSubmitting,
  submitStatus,
  setSubmitStatus,
}: {
  isSubmitting: boolean;
  setIsSubmitting: (val: boolean) => void;
  submitStatus: 'idle' | 'success' | 'error';
  setSubmitStatus: (val: 'idle' | 'success' | 'error') => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('Contact form data:', data);
    console.log('Using templates:', {
      company: EMAILJS_CONFIG.contactTemplateId,
      user: EMAILJS_CONFIG.meetingTemplateId,
    });

    try {
      // Validate configuration
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.contactTemplateId || !EMAILJS_CONFIG.meetingTemplateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your .env.local file.');
      }

      // Send email to company
      console.log('Sending email to company...');
      const companyResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplateId,
        {
          form_type: 'Contact Form',
          to_name: 'PRO Agency Team',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          service: '',
          meeting_date: '',
          meeting_time: '',
          reply_to: data.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      console.log('Company email sent:', companyResponse);

      // Send acknowledgment email to user
      console.log('Sending acknowledgment to user...');
      const userResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.meetingTemplateId,
        {
          form_type: 'Contact Form',
          to_name: data.name,
          user_email: data.email, // Changed from to_email
          from_name: 'PRO Agency',
          user_message: `Dear ${data.name},\n\nThank you for reaching out to us. We have received your message and will get back to you within 24 hours.\n\nYour message:\n${data.message}\n\nBest regards,\nPRO Agency Team`,
          service: '',
          meeting_date: '',
          meeting_time: '',
          reply_to: branding.contact.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      console.log('User email sent:', userResponse);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Full Name</label>
          <input
            {...register('name')}
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Email Address</label>
          <input
            {...register('email')}
            type="email"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
          placeholder="+971 50 123 4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900">Your Message</label>
        <textarea
          {...register('message')}
          rows={6}
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all resize-none text-gray-900"
          placeholder="Tell us about your business needs and how we can help..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3"
        >
          <span className="text-2xl">✓</span>
          <span className="font-semibold">Thank you! We'll get back to you within 24 hours.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-500 text-red-600 px-6 py-4 rounded-xl flex items-center gap-3"
        >
          <span className="text-2xl">✕</span>
          <span className="font-semibold">Something went wrong. Please try again or call us directly.</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:shadow-xl text-white py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function MeetingForm({
  isSubmitting,
  setIsSubmitting,
  submitStatus,
  setSubmitStatus,
}: {
  isSubmitting: boolean;
  setIsSubmitting: (val: boolean) => void;
  submitStatus: 'idle' | 'success' | 'error';
  setSubmitStatus: (val: 'idle' | 'success' | 'error') => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MeetingFormData>({
    resolver: zodResolver(meetingFormSchema),
  });

  const onSubmit = async (data: MeetingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('Meeting form data:', data);
    console.log('Using templates:', {
      company: EMAILJS_CONFIG.contactTemplateId,
      user: EMAILJS_CONFIG.meetingTemplateId,
    });

    try {
      // Validate configuration
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.contactTemplateId || !EMAILJS_CONFIG.meetingTemplateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your .env.local file.');
      }

      // Send meeting request to company
      console.log('Sending email to company...');
      const companyResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplateId,
        {
          form_type: 'Meeting Request',
          to_name: 'PRO Agency Team',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: `Meeting request for ${data.service}`,
          service: data.service,
          meeting_date: data.date,
          meeting_time: data.time,
          reply_to: data.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      console.log('Company email sent:', companyResponse);

      // Send confirmation email to user
      console.log('Sending confirmation to user...');
      const userResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.meetingTemplateId,
        {
          form_type: 'Meeting Request',
          to_name: data.name,
          user_email: data.email, // Changed from to_email
          from_name: 'PRO Agency',
          user_message: `Dear ${data.name},\n\nYour meeting has been scheduled successfully!\n\nDetails:\n- Service: ${data.service}\n- Date: ${data.date}\n- Time: ${data.time}\n\nWe will send you a calendar invite shortly. If you need to reschedule, please contact us.\n\nBest regards,\nPRO Agency Team`,
          service: data.service,
          meeting_date: data.date,
          meeting_time: data.time,
          reply_to: branding.contact.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      console.log('User email sent:', userResponse);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Meeting email sending failed:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Full Name</label>
          <input
            {...register('name')}
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Email Address</label>
          <input
            {...register('email')}
            type="email"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
          placeholder="+971 50 123 4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900">Service of Interest</label>
        <select
          {...register('service')}
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Preferred Date</label>
          <input
            {...register('date')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900">Preferred Time</label>
          <select
            {...register('time')}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-gray-900"
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
        </div>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3"
        >
          <span className="text-2xl">✓</span>
          <span className="font-semibold">Meeting scheduled! We'll send you a confirmation email shortly.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-500 text-red-600 px-6 py-4 rounded-xl flex items-center gap-3"
        >
          <span className="text-2xl">✕</span>
          <span className="font-semibold">Something went wrong. Please try again or call us directly.</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:shadow-xl text-white py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Scheduling...
          </>
        ) : (
          <>
            <Calendar size={20} />
            Schedule Meeting
          </>
        )}
      </button>
    </form>
  );
}
