'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { branding } from '@/lib/branding';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      dropdown: [
        { href: '/services/company-setup', label: 'Company Setup' },
        { href: '/services/visa-immigration', label: 'Visa & Immigration' },
        { href: '/services/labor-compliance', label: 'Labor Compliance' },
        { href: '/services/document-services', label: 'Document Services' },
        { href: '/services/hr-services', label: 'HR Services' },
        { href: '/services/business-consulting', label: 'Business Consulting' },
      ]
    },
    { href: '/about', label: 'About Us' },
    { href: '/industries', label: 'Industries' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`mailto:${branding.contact.email}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Mail size={14} />
                {branding.contact.email}
              </a>
              <a href={`tel:${branding.contact.phone}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone size={14} />
                {branding.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>{branding.hours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">
                        {link.label}
                        <ChevronDown size={16} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between text-gray-700 hover:text-[#3B82F6] transition-colors font-medium py-2"
                        >
                          {link.label}
                          <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === link.label && (
                          <div className="pl-4 space-y-2 mt-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-600 hover:text-[#3B82F6] transition-colors py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-700 hover:text-[#3B82F6] transition-colors font-medium py-2"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-6 py-3 rounded-lg text-center font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
