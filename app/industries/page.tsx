'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Factory, ShoppingBag, Utensils, Heart, GraduationCap, Plane, Home } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      name: 'Real Estate & Construction',
      description: 'Complete PRO services for real estate developers and construction companies',
      services: ['Company setup', 'Labor compliance', 'Visa processing']
    },
    {
      icon: Factory,
      name: 'Manufacturing & Industrial',
      description: 'Specialized services for manufacturing and industrial businesses',
      services: ['Factory licensing', 'Worker visas', 'GOSI compliance']
    },
    {
      icon: ShoppingBag,
      name: 'Retail & E-commerce',
      description: 'PRO solutions for retail stores and online businesses',
      services: ['Commercial registration', 'E-commerce licenses', 'VAT registration']
    },
    {
      icon: Utensils,
      name: 'Hospitality & Food Services',
      description: 'Complete support for restaurants, hotels, and catering businesses',
      services: ['Municipality licenses', 'Health permits', 'Staff visas']
    },
    {
      icon: Heart,
      name: 'Healthcare & Medical',
      description: 'Specialized services for clinics, hospitals, and medical centers',
      services: ['Medical licenses', 'Professional visas', 'MOH compliance']
    },
    {
      icon: GraduationCap,
      name: 'Education & Training',
      description: 'PRO services for schools, training centers, and educational institutions',
      services: ['Educational licenses', 'Teacher visas', 'Ministry approvals']
    },
    {
      icon: Plane,
      name: 'Travel & Tourism',
      description: 'Complete solutions for travel agencies and tourism companies',
      services: ['Tourism licenses', 'Umrah permits', 'Travel agent registration']
    },
    {
      icon: Home,
      name: 'Professional Services',
      description: 'Support for consulting firms, law offices, and professional service providers',
      services: ['Professional licenses', 'Partnership setup', 'Branch registration']
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Industries We <span className="text-gradient">Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized PRO services tailored to your industry's unique requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{industry.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            We serve businesses across all sectors. Contact us to discuss your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#3B82F6] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
