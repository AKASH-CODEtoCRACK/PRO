'use client';

import { motion } from 'framer-motion';
import { images } from '@/lib/images';
import { CheckCircle, ArrowRight, Clock, Shield, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceData {
  title: string;
  description: string;
  icon: any;
  image: keyof typeof images;
  stats: {
    time: string;
    compliance: string;
    support: string;
  };
  overview: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  portals: string[];
  documents: string[];
}

export default function ServiceTemplate({ data }: { data: ServiceData }) {
  const Icon = data.icon;
  const imageUrl = images[data.image];

  return (
    <main className="min-h-screen pt-16 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl}
          alt={data.title}
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
            <Icon className="text-white" size={48} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{data.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {data.description}
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
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{data.stats.time}</h3>
            <p className="text-gray-600">Processing time</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Shield className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{data.stats.compliance}</h3>
            <p className="text-gray-600">Compliance rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100">
            <Award className="text-[#3B82F6] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{data.stats.support}</h3>
            <p className="text-gray-600">Expert assistance</p>
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
          <p className="text-lg text-gray-700">{data.overview}</p>
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
            {data.features.map((feature, index) => (
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

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data.process.map((item, index) => (
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
                {data.portals.map((portal, index) => (
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

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Required Documents</h2>
              <ul className="space-y-3">
                {data.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let our experts handle your {data.title.toLowerCase()}
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
