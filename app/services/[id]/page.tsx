'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import { images } from '@/lib/images';
import { CheckCircle, ExternalLink, ArrowRight, Shield, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const serviceImages: Record<string, string> = {
  'company-setup': images.companySetup,
  'visa-immigration': images.visaImmigration,
  'labor-compliance': images.laborCompliance,
  'document-services': images.documentServices,
  'hr-services': images.hrServices,
  'business-consulting': images.businessConsulting,
};

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const serviceImage = serviceImages[params.id] || images.officeSpace;

  return (
    <main className="min-h-screen pt-16 pb-16">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={serviceImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/85 to-[#0A1628]/75" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <div className="w-24 h-24 bg-[#006C35]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#006C35]/30">
            <Icon className="text-[#006C35]" size={48} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {service.description}
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
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Clock className="text-[#006C35] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2">Fast Processing</h3>
            <p className="text-gray-400">Quick turnaround times</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Shield className="text-[#006C35] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2">100% Compliant</h3>
            <p className="text-gray-400">Full regulatory compliance</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Award className="text-[#006C35] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-400">Experienced professionals</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="glassmorphism p-8 md:p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#006C35]/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-[#006C35]" size={24} />
                </div>
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle className="text-[#006C35] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Government Portals - Takes 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glassmorphism p-8 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#006C35]/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="text-[#006C35]" size={20} />
                </div>
                Government Portals
              </h2>
              <div className="space-y-3">
                {service.portals.map((portal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="glassmorphism p-4 rounded-lg flex items-center justify-between hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <span className="font-semibold">{portal}</span>
                    <ExternalLink className="text-[#006C35] group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glassmorphism p-8 md:p-10 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Consultation', 'Documentation', 'Processing', 'Delivery'].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#006C35]/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-[#006C35]/30">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm text-gray-400">
                    {index === 0 && 'We understand your needs'}
                    {index === 1 && 'Prepare all documents'}
                    {index === 2 && 'Handle government portals'}
                    {index === 3 && 'Deliver completed service'}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-[#006C35]/30" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Expert knowledge of Saudi regulations',
                'Fast and efficient processing',
                'Transparent pricing with no hidden fees',
                'Dedicated account manager',
                'Real-time status updates',
                '24/7 customer support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="text-[#006C35] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>
            <ul className="space-y-4">
              {[
                'Complete documentation support',
                'Government portal management',
                'Compliance verification',
                'Follow-up services',
                'Document delivery',
                'Post-service support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#006C35] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <Image
            src={images.businessHandshake}
            alt="Contact Us"
            width={1200}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006C35]/95 to-emerald-600/90" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let our experts handle your {service.title.toLowerCase()} needs. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#006C35] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all group"
              >
                Contact Us Now
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

        {/* Back to Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#006C35] hover:text-emerald-400 transition-colors font-semibold"
          >
            ← Back to All Services
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
