'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Award, Users, Building2, FileText, Briefcase, Target, Building, Plane, Smartphone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { images } from '@/lib/images';
import Image from 'next/image';
import { branding } from '@/lib/branding';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ImageShowcaseSection />
      <KeyHighlightsSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GovernmentEntitiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Clear Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="ProVision UAE"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Improved gradient overlay - Left dark to right light for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/75 via-[#3B82F6]/50 to-transparent" />
      </motion.div>
      
      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full"
          >
            <span className="text-white font-semibold text-sm">Premium Business Services in UAE</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            <span className="block">Build Your Business.</span>
            <span className="block mt-3">We Handle the Rest.</span>
            <span className="block mt-4 text-[#FCD34D] text-4xl md:text-6xl">
              PRO Services in UAE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Save time, avoid penalties, and launch faster with our experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA - More Prominent with Blur Gradient */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] text-white px-10 py-5 rounded-xl text-xl font-bold hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Blur effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content */}
              <span className="relative flex items-center gap-3">
                <Award size={24} />
                GET FREE CONSULTATION
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </Link>
            
            {/* Secondary CTA - White Background */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#3B82F6] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl group"
            >
              <Briefcase size={20} />
              Explore Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-1" size={18} />
            </Link>
          </div>

          {/* Trust Indicators with Professional Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={24} className="text-[#FCD34D]" />
              <span className="font-semibold">Fast Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle size={24} className="text-[#FCD34D]" />
              <span className="font-semibold">100% Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users size={24} className="text-[#FCD34D]" />
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ImageShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#3B82F6] font-semibold text-sm">Our Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Professional <span className="text-gradient">PRO Services</span> in UAE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From company setup to visa processing, we handle all your government relations needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dubai Skyline - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={images.dubaiCityscape}
              alt="Dubai Business Hub"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#3B82F6]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Dubai Business Hub</h3>
              <p className="text-white/90">Your gateway to business success in the UAE</p>
            </div>
          </motion.div>

          {/* Business Meeting Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={images.businessMeeting}
              alt="Professional Consultation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#3B82F6]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Expert Consultation</h3>
              <p className="text-white/90">Personalized guidance for your business needs</p>
            </div>
          </motion.div>
        </div>

        {/* Additional Image Row - PRO Services Specific */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-64 rounded-xl overflow-hidden shadow-xl group"
          >
            <Image
              src={images.documentProcessing}
              alt="Document Processing"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold">Document Services</h4>
              <p className="text-sm text-white/90 mt-1">Fast & accurate processing</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-64 rounded-xl overflow-hidden shadow-xl group"
          >
            <Image
              src={images.officeTeam}
              alt="Professional Team"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold">Dedicated Team</h4>
              <p className="text-sm text-white/90 mt-1">Expert professionals at your service</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-64 rounded-xl overflow-hidden shadow-xl group"
          >
            <Image
              src={images.businessGrowth}
              alt="Business Growth"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold">Business Growth</h4>
              <p className="text-sm text-white/90 mt-1">Strategic solutions for success</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, number: '500+', label: 'Clients Served', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, number: '10+', label: 'Years Experience', color: 'from-purple-500 to-purple-600' },
    { icon: Award, number: '98%', label: 'Success Rate', color: 'from-green-500 to-green-600' },
    { icon: Shield, number: '100%', label: 'Compliance', color: 'from-amber-500 to-amber-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featuredServices = [
    {
      icon: Building2,
      title: 'Company Setup',
      description: 'Complete business registration, licensing, and company formation services in UAE',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      image: images.companySetup,
      link: '/services/company-setup',
      features: ['Business Registration', 'Trade License', 'Free Zone Setup']
    },
    {
      icon: Users,
      title: 'Visa & Immigration',
      description: 'Work permits, residence visas, and complete immigration support for your team',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      image: images.visaImmigration,
      link: '/services/visa-immigration',
      features: ['Work Permits', 'Residence Visa', 'Family Sponsorship']
    },
    {
      icon: FileText,
      title: 'Document Services',
      description: 'Professional attestation, translation, and notarization services',
      gradient: 'from-amber-500 via-amber-600 to-amber-700',
      image: images.documentServices,
      link: '/services/document-services',
      features: ['Attestation', 'Translation', 'Notarization']
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#3B82F6] font-semibold text-sm">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured <span className="text-gradient">PRO Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs in the UAE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.link}>
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Background Image with Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        quality={90}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-80 transition-opacity`} />
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white" size={40} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#3B82F6] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Learn More Link */}
                      <div className="flex items-center text-[#3B82F6] font-semibold group-hover:gap-3 gap-2 transition-all">
                        Learn More
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-10 py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all group"
          >
            View All Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </Link>
          <p className="text-gray-600 mt-4 text-sm">
            Explore our complete range of PRO services including HR, Labor Compliance, and Business Consulting
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: '100% Compliance',
      description: 'Full regulatory compliance with UAE laws and regulations'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times with efficient service delivery'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced professionals with deep market knowledge'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Save up to 50% compared to in-house PRO staff'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-gradient">{branding.name}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for government relations in the UAE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { 
      number: '01', 
      title: 'Consultation', 
      description: 'We understand your business needs and provide expert guidance',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      number: '02', 
      title: 'Documentation', 
      description: 'Prepare all required documents with precision and accuracy',
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      number: '03', 
      title: 'Processing', 
      description: 'Handle government interactions and approvals efficiently',
      icon: Clock,
      color: 'from-green-500 to-green-600'
    },
    { 
      number: '04', 
      title: 'Delivery', 
      description: 'Complete service delivery with full compliance',
      icon: CheckCircle,
      color: 'from-amber-500 to-amber-600'
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.modernOffice}
          alt="Process Background"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/95 via-[#3B82F6]/90 to-[#60A5FA]/85" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-semibold text-sm">Our Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How We <span className="text-[#FCD34D]">Work</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Simple, efficient, and transparent process from start to finish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-white/30 z-0" />
                )}

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FCD34D] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center text-[#FCD34D] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#3B82F6] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl group"
          >
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Tech Solutions UAE',
      role: 'CEO',
      text: 'Excellent service! They handled our company setup and visa processing efficiently. The team was professional and responsive throughout the entire process.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Consulting',
      role: 'Managing Director',
      text: 'Professional team with deep knowledge of UAE regulations. Made our expansion to Dubai seamless and stress-free. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Mohammed Al-Qahtani',
      company: 'Retail Group',
      role: 'Operations Manager',
      text: 'Fast, reliable, and transparent. They saved us time and money on compliance matters. Best PRO service provider in UAE.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=33',
    },
    {
      name: 'Emily Chen',
      company: 'Digital Marketing Agency',
      role: 'Founder',
      text: 'Outstanding support from start to finish. They handled all our documentation and licensing with expertise. Could not be happier!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      name: 'Khalid Rahman',
      company: 'Construction LLC',
      role: 'Director',
      text: 'Very professional and efficient service. They made the complex process of company formation simple and straightforward.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=51',
    },
    {
      name: 'Lisa Anderson',
      company: 'Healthcare Services',
      role: 'HR Manager',
      text: 'Exceptional visa processing services. Quick turnaround time and excellent communication. Truly a reliable partner for our business.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=20',
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#3B82F6] font-semibold text-sm">Testimonials</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses across the UAE
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#F59E0B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full ring-4 ring-blue-50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={14} />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#3B82F6] font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src={images.businessHandshake}
        alt="Get Started"
        fill
        className="object-cover"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#1E3A5F]/90 to-[#2C5282]/85" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Get Started with Professional PRO Services
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Partnering with seasoned PRO services ensures your business operates smoothly and compliantly. 
          Whether you're launching a new venture or expanding, our tailored solutions streamline every step, 
          saving you time and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#D97706] transition-all shadow-xl"
          >
            FREE CONSULTATION →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function KeyHighlightsSection() {
  const highlights = [
    {
      text: 'Expert PRO services streamline business setup, compliance, and government approvals for entrepreneurs and established companies.',
      icon: CheckCircle
    },
    {
      text: 'Outsourcing PRO solutions ensures faster licensing, visa application processing, and stress-free adherence to local regulations.',
      icon: TrendingUp
    },
    {
      text: 'Tailored business services allow companies to focus on growth while experts manage documentation and approvals.',
      icon: Target
    },
    {
      text: 'Choosing the right provider means evaluating experience, transparency, and support for your unique business needs.',
      icon: Award
    },
    {
      text: 'Comprehensive resources and expert guidance help business owners confidently navigate the UAE business landscape.',
      icon: Briefcase
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
            >
              <span className="text-[#60A5FA] font-semibold text-sm">Why Choose Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Key <span className="text-gradient">Highlights</span>
            </h2>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={20} />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">{highlight.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all group"
              >
                Learn More About Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.dubaiCityscape}
                alt="Dubai Business Hub"
                fill
                className="object-cover"
                quality={95}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/50 to-transparent" />
              
              {/* Stats card with icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Users className="text-[#3B82F6] mx-auto mb-2" size={28} />
                    <div className="text-3xl font-bold text-gradient">500+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div>
                    <TrendingUp className="text-[#3B82F6] mx-auto mb-2" size={28} />
                    <div className="text-3xl font-bold text-gradient">98%</div>
                    <div className="text-sm text-gray-600">Success</div>
                  </div>
                  <div>
                    <Award className="text-[#3B82F6] mx-auto mb-2" size={28} />
                    <div className="text-3xl font-bold text-gradient">10+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GovernmentEntitiesSection() {
  const entities = [
    { name: 'Ministry of Commerce', icon: Building2 },
    { name: 'MISA Portal', icon: FileText },
    { name: 'GOSI', icon: Shield },
    { name: 'Ministry of Interior', icon: Building },
    { name: 'ZATCA', icon: Briefcase },
    { name: 'Qiwa Platform', icon: Users },
    { name: 'Muqeem Portal', icon: Plane },
    { name: 'Absher Services', icon: Smartphone },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#60A5FA] font-semibold text-sm">Our Partners</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            We Work Closely With <span className="text-gradient">Government Entities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building strong partnerships with government bodies to simplify processes and ensure full compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {entities.map((entity, index) => {
            const Icon = entity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#3B82F6]/30 transition-all text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{entity.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are Corporate PRO services, and why do I need them?',
      answer: 'Corporate PRO services handle all government-related documentation, licensing, and compliance requirements for your business in the UAE. They ensure smooth operations by managing complex bureaucratic processes, saving you time and preventing costly mistakes.'
    },
    {
      question: 'Who needs PRO services?',
      answer: 'Any business operating in the UAE needs PRO services - from startups and SMEs to large corporations. Whether you\'re setting up a new company, hiring employees, or managing ongoing compliance, PRO services are essential for navigating UAE regulations.'
    },
    {
      question: 'What does a PRO do?',
      answer: 'A PRO (Public Relations Officer) handles all interactions with government entities including company registration, visa processing, license renewals, labor compliance, document attestation, and ensuring your business meets all regulatory requirements.'
    },
    {
      question: 'What makes our PRO Services different?',
      answer: 'Our PRO services stand out through deep expertise in UAE regulations, direct relationships with government entities, transparent pricing, fast processing times, and dedicated support. We provide end-to-end solutions tailored to your specific business needs.'
    },
    {
      question: 'What is the value of PRO services?',
      answer: 'PRO services save you significant time and money by preventing errors, ensuring compliance, expediting approvals, and allowing you to focus on core business activities. The cost of PRO services is far less than the potential penalties and delays from non-compliance.'
    },
    {
      question: 'Is there transparency with PRO services?',
      answer: 'Yes, we maintain complete transparency with clear pricing, regular updates on application status, detailed documentation of all processes, and open communication throughout our engagement. You always know what\'s happening with your applications.'
    },
    {
      question: 'What are the benefits of choosing our PRO Services?',
      answer: 'Benefits include faster processing times, expert guidance, reduced stress, cost savings, compliance assurance, access to government portals, multilingual support, and the ability to focus on growing your business while we handle the bureaucracy.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#60A5FA] font-semibold text-sm">FAQs</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're new to the region or looking to streamline your operations, we're here to provide 
            clarity and guidance on your queries about collaborating with a corporate PRO Services agency.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-[#3B82F6]" size={24} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
