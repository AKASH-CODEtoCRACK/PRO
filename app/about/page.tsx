'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { images } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Shield, value: '100%', label: 'Compliance' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'Deep knowledge of UAE government systems and regulations with years of hands-on experience',
    },
    {
      icon: TrendingUp,
      title: 'Efficiency',
      description: 'Fast turnaround times with minimal hassle, streamlining your business operations',
    },
    {
      icon: Lightbulb,
      title: 'Transparency',
      description: 'Clear communication and honest pricing with no hidden fees or surprises',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Confidential handling of all your business documents and sensitive data',
    },
  ];

  const team = [
    {
      name: 'Abdullah Al-Saud',
      role: 'Founder & CEO',
      description: '15+ years in government relations',
      icon: Users,
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Head of Compliance',
      description: 'Expert in Saudi labor laws',
      icon: Shield,
    },
    {
      name: 'Omar Hassan',
      role: 'Visa Services Director',
      description: 'Specialist in immigration processes',
      icon: Award,
    },
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded', desc: 'Started with a vision to simplify PRO services' },
    { year: '2017', event: '100+ Clients', desc: 'Reached our first major milestone' },
    { year: '2020', event: 'Digital Transformation', desc: 'Launched online portal for clients' },
    { year: '2024', event: '500+ Clients', desc: 'Serving businesses across Saudi Arabia' },
  ];

  return (
    <main className="min-h-screen pt-16 pb-16 bg-white">
      {/* Hero Section with Background */}
      <div className="relative mb-16 py-32 overflow-hidden">
        <Image
          src={images.saudiArchitecture}
          alt="About Us"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/90 via-[#60A5FA]/85 to-[#3B82F6]/80" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            About <span className="text-[#FCD34D]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for navigating Saudi Arabia's government relations landscape
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-2xl mb-16 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2014, we are a leading PRO and government relations agency specializing in helping businesses
                navigate the complex landscape of UAE regulations and government services.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With over a decade of experience, our team of experts has successfully assisted hundreds
                of companies in establishing and maintaining their operations in the Emirates. From startups
                to multinational corporations, we provide tailored solutions that ensure full compliance
                while optimizing operational efficiency.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Our deep understanding of government portals and regulatory requirements,
                combined with our commitment to excellence, makes us the preferred choice for businesses
                seeking reliable PRO services in the UAE.
              </p>
              <p className="text-lg text-gray-700">
                We pride ourselves on building long-term relationships with our clients, providing not just
                services, but strategic partnerships that contribute to their success in the UAE market.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#3B82F6]" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#3B82F6]">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-4">
              To simplify government relations for businesses in the UAE by providing expert,
              efficient, and transparent PRO services that enable our clients to focus on their core
              business operations.
            </p>
            <p className="text-lg text-gray-700">
              We strive to be the bridge between businesses and government entities, ensuring seamless
              compliance and fostering growth in the UAE market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#3B82F6]">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-4">
              To be the most trusted and innovative PRO services provider in the UAE, recognized
              for our excellence, integrity, and contribution to the Emirates' economic development.
            </p>
            <p className="text-lg text-gray-700">
              We envision a future where every business, regardless of size, can easily navigate
              government processes and thrive in the UAE market.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[#3B82F6]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#3B82F6]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-3xl font-bold text-[#3B82F6] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-[#3B82F6] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] p-12 rounded-2xl text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their government relations needs in the UAE
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#60A5FA] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
