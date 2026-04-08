'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { services } from '@/lib/services';
import { images } from '@/lib/images';
import { ArrowRight, CheckCircle, Clock, Award, Sparkles } from 'lucide-react';

// Custom hook for animated counter
function useCounter(end: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { count, ref, suffix };
}

const serviceImages: Record<string, string> = {
  'company-setup': images.companySetup,
  'visa-immigration': images.visaImmigration,
  'labor-compliance': images.laborCompliance,
  'document-services': images.documentServices,
  'hr-services': images.hrServices,
  'business-consulting': images.businessConsulting,
};

// Upcoming Services
const upcomingServices = [
  {
    title: 'Tax Consultation',
    description: 'Expert VAT and corporate tax advisory services',
    icon: '📊',
    status: 'Coming Soon'
  },
  {
    title: 'Legal Advisory',
    description: 'Comprehensive legal support for businesses',
    icon: '⚖️',
    status: 'Coming Soon'
  },
  {
    title: 'Accounting Services',
    description: 'Professional bookkeeping and financial management',
    icon: '💼',
    status: 'Coming Soon'
  },
  {
    title: 'Real Estate Services',
    description: 'Commercial property and office space solutions',
    icon: '🏢',
    status: 'Coming Soon'
  },
];

export default function ServicesPage() {
  // Animated counters
  const clientsCounter = useCounter(500, 2000, '+');
  const successCounter = useCounter(98, 2000, '%');
  const supportCounter = useCounter(24, 1500, '/7');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.dubaiCityscape}
            alt="Services Background"
            fill
            className="object-cover opacity-10"
            quality={90}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-3 bg-blue-50 rounded-full border border-blue-100"
            >
              <span className="text-[#3B82F6] font-semibold text-sm">Complete PRO Solutions</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive PRO and government relations services designed to streamline your business operations in the UAE. From company formation to ongoing compliance, we've got you covered.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
              <div ref={clientsCounter.ref} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {clientsCounter.count}{clientsCounter.suffix}
                </div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div ref={successCounter.ref} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {successCounter.count}{successCounter.suffix}
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div ref={supportCounter.ref} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {supportCounter.count}{supportCounter.suffix}
                </div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Core <span className="text-gradient">PRO Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services tailored to meet your business needs in the UAE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceImage = serviceImages[service.id as keyof typeof serviceImages] || images.officeSpace;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                      {/* Image Section with Gradient Overlay */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={serviceImage}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#3B82F6]/60 to-transparent" />
                        
                        {/* Floating Icon */}
                        <div className="absolute top-6 right-6">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/30">
                            <Icon className="text-white" size={28} />
                          </div>
                        </div>

                        {/* Service Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <span className="text-white font-semibold text-sm">Professional Service</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#3B82F6] transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={16} />
                            <span>Fast Processing</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={16} />
                            <span>Expert Guidance</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={16} />
                            <span>100% Compliance</span>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-[#3B82F6] font-bold group-hover:gap-2 transition-all flex items-center">
                            View Details
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </span>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock size={14} />
                            <span>2-5 days</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/10 to-transparent" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="text-[#FCD34D]" size={20} />
              <span className="text-white font-semibold text-sm">Expanding Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Coming <span className="text-[#FCD34D]">Soon</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're constantly expanding our service offerings to better serve your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-[#FCD34D]/20 rounded-full border border-[#FCD34D]/30">
                    <span className="text-[#FCD34D] text-xs font-semibold">{service.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notify Me CTA */}
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
              Get Notified When Available
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine expertise, efficiency, and dedication to deliver exceptional PRO services that help your business thrive in the UAE.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: 'Expert Team', desc: 'Experienced professionals with deep market knowledge' },
                  { icon: Clock, title: 'Fast Processing', desc: 'Quick turnaround times without compromising quality' },
                  { icon: CheckCircle, title: '100% Compliance', desc: 'Full regulatory compliance guaranteed' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images.businessMeeting}
                alt="Professional Services"
                fill
                className="object-cover"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts handle your PRO services while you focus on growing your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-10 py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all group"
            >
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
