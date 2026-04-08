'use client';

import { motion } from 'framer-motion';
import { images } from '@/lib/images';
import { CheckCircle, ArrowRight, Clock, Shield, Award, Plane } from 'lucide-react';
import { FaPassport, FaPlane, FaUserTie, FaIdCard, FaGlobe } from 'react-icons/fa';
import { MdFamilyRestroom, MdWork, MdFlightTakeoff } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function VisaImmigrationPage() {
  const features = [
    {
      icon: <MdWork className="text-[#3B82F6]" size={24} />,
      title: 'Work Visa Processing',
      description: 'Complete work visa applications for all nationalities and professions'
    },
    {
      icon: <FaIdCard className="text-[#3B82F6]" size={24} />,
      title: 'Iqama Issuance & Renewal',
      description: 'Residence permit (Iqama) processing, renewal, and status updates'
    },
    {
      icon: <FaPassport className="text-[#3B82F6]" size={24} />,
      title: 'Muqeem Portal Management',
      description: 'Complete management of Muqeem portal for all visa-related services'
    },
    {
      icon: <FaGlobe className="text-[#3B82F6]" size={24} />,
      title: 'Absher Services',
      description: 'Full Absher platform management for visa and immigration services'
    },
    {
      icon: <MdFlightTakeoff className="text-[#3B82F6]" size={24} />,
      title: 'Exit/Re-entry Permits',
      description: 'Single and multiple exit/re-entry visa processing'
    },
    {
      icon: <MdFamilyRestroom className="text-[#3B82F6]" size={24} />,
      title: 'Family Visa Processing',
      description: 'Dependent visas for spouse, children, and parents'
    },
    {
      icon: <FaUserTie className="text-[#3B82F6]" size={24} />,
      title: 'Visa Transfer Services',
      description: 'Sponsorship transfer and visa change services'
    },
    {
      icon: <FaPlane className="text-[#3B82F6]" size={24} />,
      title: 'Final Exit Processing',
      description: 'Complete final exit visa processing and clearance'
    },
  ];

  const visaTypes = [
    {
      type: 'Work Visa',
      duration: '5-7 days',
      description: 'For employees joining Saudi companies'
    },
    {
      type: 'Family Visa',
      duration: '7-10 days',
      description: 'For dependents of Saudi residents'
    },
    {
      type: 'Visit Visa',
      duration: '3-5 days',
      description: 'For business or family visits'
    },
    {
      type: 'Iqama Renewal',
      duration: '2-3 days',
      description: 'Residence permit renewal'
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Document Collection',
      description: 'Gather all required documents and verify completeness'
    },
    {
      step: '2',
      title: 'Portal Submission',
      description: 'Submit applications through Muqeem/Absher portals'
    },
    {
      step: '3',
      title: 'Medical & Biometrics',
      description: 'Coordinate medical examinations and biometric appointments'
    },
    {
      step: '4',
      title: 'Visa Issuance',
      description: 'Receive visa approval and complete final processing'
    },
  ];

  const portals = [
    'Muqeem Portal',
    'Absher Platform',
    'Enjaz Services',
    'Ministry of Interior (MOI)',
    'GOSI',
    'Ministry of Foreign Affairs',
  ];

  return (
    <main className="min-h-screen pt-16 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.visaImmigration}
          alt="Visa & Immigration Services"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/90 via-[#60A5FA]/85 to-[#3B82F6]/80" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
            <Plane className="text-white" size={48} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Visa & Immigration Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive visa processing and immigration support for Saudi Arabia
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Clock className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">3-10 Days</h3>
            <p className="text-gray-600">Processing time</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Shield className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">100% Success</h3>
            <p className="text-gray-600">Approval rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Award className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">24/7 Support</h3>
            <p className="text-gray-600">Always available</p>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-10 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Navigating Saudi Arabia's visa and immigration system can be complex. Our comprehensive 
            visa services cover everything from work permits to family visas, ensuring smooth processing 
            and compliance with all immigration regulations.
          </p>
          <p className="text-lg text-gray-700">
            We handle all interactions with Muqeem, Absher, and other government portals, coordinate 
            medical examinations, and ensure your visa applications are processed efficiently and correctly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Visa Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visa Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Visa Types & Processing Times</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100"
              >
                <h3 className="text-xl font-bold mb-2 text-[#3B82F6]">{visa.type}</h3>
                <p className="text-2xl font-bold mb-3 text-gray-900">{visa.duration}</p>
                <p className="text-sm text-gray-600">{visa.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Processing Steps</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Portals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-2xl sticky top-24 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Government Portals</h2>
              <div className="space-y-3">
                {portals.map((portal, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all border border-blue-100"
                  >
                    <span className="font-semibold text-sm text-gray-900">{portal}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Required Documents</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#3B82F6] mb-3">For Work Visa:</h3>
                  <ul className="space-y-2">
                    {[
                      'Valid passport (minimum 6 months validity)',
                      'Passport-size photographs',
                      'Educational certificates (attested)',
                      'Experience certificates',
                      'Medical fitness certificate',
                      'Police clearance certificate',
                    ].map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#3B82F6] mb-3">For Family Visa:</h3>
                  <ul className="space-y-2">
                    {[
                      'Sponsor\'s Iqama copy',
                      'Marriage certificate (for spouse)',
                      'Birth certificates (for children)',
                      'Passport copies of dependents',
                      'Proof of relationship',
                      'Minimum salary requirement proof',
                    ].map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src={images.businessHandshake}
            alt="Contact Us"
            width={1200}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/95 to-[#60A5FA]/90" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Visa Assistance?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let our immigration experts handle your visa processing
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#60A5FA] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all group shadow-xl"
            >
              Contact Us Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-semibold"
          >
            ← Back to All Services
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
