'use client';

import { motion } from 'framer-motion';
import { images } from '@/lib/images';
import { CheckCircle, ArrowRight, Clock, Shield, Award, FileText, Building2 } from 'lucide-react';
import { FaBuilding, FaFileContract, FaStamp, FaHandshake, FaCertificate } from 'react-icons/fa';
import { MdBusinessCenter, MdVerifiedUser, MdAccountBalance } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function CompanySetupPage() {
  const features = [
    {
      icon: <FaBuilding className="text-[#3B82F6]" size={24} />,
      title: 'Commercial Registration (CR)',
      description: 'Complete CR registration with Ministry of Commerce, including name reservation and license issuance'
    },
    {
      icon: <MdBusinessCenter className="text-[#3B82F6]" size={24} />,
      title: 'MISA Registration',
      description: 'Full MISA portal setup and compliance management for your business entity'
    },
    {
      icon: <MdAccountBalance className="text-[#3B82F6]" size={24} />,
      title: 'GOSI Employer Registration',
      description: 'Register your company with GOSI for social insurance and employee benefits'
    },
    {
      icon: <FaStamp className="text-[#3B82F6]" size={24} />,
      title: 'Municipality Licenses',
      description: 'Obtain all necessary municipal permits and licenses for your business location'
    },
    {
      icon: <FaCertificate className="text-[#3B82F6]" size={24} />,
      title: 'Chamber of Commerce Membership',
      description: 'Register with the local Chamber of Commerce for business networking and support'
    },
    {
      icon: <FaFileContract className="text-[#3B82F6]" size={24} />,
      title: 'Business License Processing',
      description: 'Handle all business licensing requirements specific to your industry'
    },
    {
      icon: <MdVerifiedUser className="text-[#3B82F6]" size={24} />,
      title: 'Zakat & Tax Registration',
      description: 'Register with ZATCA for tax purposes and ensure compliance'
    },
    {
      icon: <FaHandshake className="text-[#3B82F6]" size={24} />,
      title: 'Bank Account Setup Support',
      description: 'Assistance with corporate bank account opening and documentation'
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your business type, activities, and requirements',
      duration: '1 day'
    },
    {
      step: '2',
      title: 'Document Preparation',
      description: 'We prepare and verify all necessary documents and applications',
      duration: '2-3 days'
    },
    {
      step: '3',
      title: 'Name Reservation',
      description: 'Reserve your company name with the Ministry of Commerce',
      duration: '1-2 days'
    },
    {
      step: '4',
      title: 'CR Registration',
      description: 'Submit and process Commercial Registration application',
      duration: '3-5 days'
    },
    {
      step: '5',
      title: 'Portal Registrations',
      description: 'Register with MISA, GOSI, and other required portals',
      duration: '2-3 days'
    },
    {
      step: '6',
      title: 'License Issuance',
      description: 'Obtain all licenses and complete final registrations',
      duration: '2-4 days'
    },
  ];

  const portals = [
    { name: 'Ministry of Commerce (MOCI)', url: '#' },
    { name: 'MISA Portal', url: '#' },
    { name: 'GOSI', url: '#' },
    { name: 'Balady (Municipality)', url: '#' },
    { name: 'ZATCA', url: '#' },
    { name: 'Chamber of Commerce', url: '#' },
  ];

  const benefits = [
    'Fast-track processing with expert knowledge',
    'Avoid common mistakes and delays',
    'Complete documentation support',
    'Direct liaison with government entities',
    'Post-setup compliance guidance',
    'Transparent pricing with no hidden fees',
  ];

  return (
    <main className="min-h-screen pt-16 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.companySetup}
          alt="Company Setup Services"
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
            <Building2 className="text-white" size={48} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Company Setup Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Complete business registration and establishment services in Saudi Arabia
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
            <h3 className="text-2xl font-bold mb-2 text-gray-900">10-15 Days</h3>
            <p className="text-gray-600">Average completion time</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Shield className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">100% Compliant</h3>
            <p className="text-gray-600">Full regulatory compliance</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Award className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Expert Support</h3>
            <p className="text-gray-600">Dedicated account manager</p>
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
            Starting a business in Saudi Arabia requires navigating multiple government entities and portals. 
            Our comprehensive company setup service handles everything from name reservation to final license 
            issuance, ensuring your business is established correctly and efficiently.
          </p>
          <p className="text-lg text-gray-700">
            We specialize in all business structures including LLCs, branches of foreign companies, 
            sole proprietorships, and partnerships. Our team has extensive experience with Saudi regulations 
            and maintains direct relationships with government entities to expedite your setup process.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">What's Included</h2>
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

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Setup Process</h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 text-white shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-[#3B82F6] font-semibold">{item.duration}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-center text-lg text-gray-900">
              <span className="font-bold text-[#3B82F6]">Total Timeline:</span> 10-15 business days 
              (may vary based on business type and documentation completeness)
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Government Portals */}
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all border border-blue-100 group cursor-pointer"
                  >
                    <span className="font-semibold text-sm text-gray-900">{portal.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Our Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Required Documents</h2>
              <ul className="space-y-3">
                {[
                  'Passport copies of all shareholders/partners',
                  'Proof of address for shareholders',
                  'Business activity description',
                  'Proposed company name (3 options)',
                  'Capital amount and shareholding structure',
                  'Office lease agreement or ownership deed',
                  'Power of Attorney (if applicable)',
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="text-[#3B82F6] flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
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
              Ready to Start Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let our experts handle your company setup while you focus on your business strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#60A5FA] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all group shadow-xl"
              >
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/30"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
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
