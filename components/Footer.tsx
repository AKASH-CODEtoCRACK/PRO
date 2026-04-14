import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';
import { branding } from '@/lib/branding';
import { images } from '@/lib/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Company Setup', href: '/services/company-setup' },
    { name: 'Visa & Immigration', href: '/services/visa-immigration' },
    { name: 'Labor Compliance', href: '/services/labor-compliance' },
    { name: 'Document Services', href: '/services/document-services' },
    { name: 'HR Services', href: '/services/hr-services' },
    { name: 'Business Consulting', href: '/services/business-consulting' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={images.logo}
                    alt={`${branding.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{branding.name}</div>
                  <div className="text-xs text-gray-400">{branding.description}</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              {branding.tagline}
            </p>
            <div className="flex gap-4">
              <a href={branding.social.linkedin} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href={branding.social.twitter} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href={branding.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href={branding.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3B82F6] flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <div>{branding.contact.address}</div>
                  <div>{branding.contact.city}, {branding.contact.country}</div>
                  <div className="mt-1 text-xs">{branding.contact.poBox}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#3B82F6] flex-shrink-0" />
                <a href={`tel:${branding.contact.phone}`} className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
                  {branding.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#3B82F6] flex-shrink-0" />
                <a href={`mailto:${branding.contact.email}`} className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
                  {branding.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#3B82F6] flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <div>{branding.hours.weekdays}</div>
                  <div>{branding.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {branding.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#3B82F6] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#3B82F6] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-[#3B82F6] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
