'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';

type ResourceItem = {
  title: string;
  type?: string;
  size?: string;
  url?: string;
  link?: string;
  external?: boolean;
};

type ResourceSection = {
  category: string;
  items: ResourceItem[];
};

export default function ResourcesPage() {
  const resources: ResourceSection[] = [
    {
      category: 'Guides & Checklists',
      items: [
        { title: 'Company Setup Checklist', type: 'PDF', size: '2.5 MB' },
        { title: 'Visa Application Guide', type: 'PDF', size: '1.8 MB' },
        { title: 'Labor Law Compliance Guide', type: 'PDF', size: '3.2 MB' },
      ]
    },
    {
      category: 'Government Portals',
      items: [
        { title: 'MISA Portal', url: '#', external: true },
        { title: 'Qiwa Platform', url: '#', external: true },
        { title: 'Muqeem Portal', url: '#', external: true },
        { title: 'Absher Services', url: '#', external: true },
      ]
    },
    {
      category: 'FAQs',
      items: [
        { title: 'Company Setup FAQs', link: '/faq/company-setup' },
        { title: 'Visa Processing FAQs', link: '/faq/visa' },
        { title: 'Labor Compliance FAQs', link: '/faq/compliance' },
      ]
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
            Resources & <span className="text-gradient">Downloads</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helpful guides, checklists, and links to government portals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.category}</h2>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url || item.link || '#'}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        {item.external ? <ExternalLink size={18} className="text-[#3B82F6]" /> : 
                         item.type ? <FileText size={18} className="text-[#3B82F6]" /> :
                         <BookOpen size={18} className="text-[#3B82F6]" />}
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-[#3B82F6] transition-colors">
                            {item.title}
                          </div>
                          {item.size && <div className="text-xs text-gray-500">{item.type} • {item.size}</div>}
                        </div>
                      </div>
                      {item.type && <Download size={18} className="text-gray-400 group-hover:text-[#3B82F6] transition-colors" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
