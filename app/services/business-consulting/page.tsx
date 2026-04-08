'use client';

import ServiceTemplate from '../ServiceTemplate';
import { Briefcase } from 'lucide-react';
import { FaChartLine, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { MdBusiness, MdTrendingUp, MdAssessment, MdSecurity } from 'react-icons/md';

export default function BusinessConsultingPage() {
  const data = {
    title: 'Business Consulting',
    description: 'Strategic guidance for Saudi market entry and business operations',
    icon: Briefcase,
    image: 'businessConsulting',
    stats: {
      time: 'Customized',
      compliance: 'Strategic Advice',
      support: 'Expert Consultants'
    },
    overview: `Expert business consulting services to help you navigate the Saudi Arabian market. We provide 
    strategic guidance on market entry, regulatory compliance, business structure optimization, and risk 
    management to ensure your business success in the Kingdom.`,
    features: [
      {
        icon: <FaChartLine className="text-[#3B82F6]" size={24} />,
        title: 'Market Entry Strategy',
        description: 'Comprehensive market analysis and entry planning'
      },
      {
        icon: <MdBusiness className="text-[#3B82F6]" size={24} />,
        title: 'Business Structure',
        description: 'Optimal business structure recommendations'
      },
      {
        icon: <FaShieldAlt className="text-[#3B82F6]" size={24} />,
        title: 'Regulatory Compliance',
        description: 'Compliance advisory and risk mitigation'
      },
      {
        icon: <FaHandshake className="text-[#3B82F6]" size={24} />,
        title: 'Government Relations',
        description: 'Liaison with government entities'
      },
      {
        icon: <MdAssessment className="text-[#3B82F6]" size={24} />,
        title: 'Risk Assessment',
        description: 'Comprehensive business risk analysis'
      },
      {
        icon: <FaLightbulb className="text-[#3B82F6]" size={24} />,
        title: 'Business Planning',
        description: 'Strategic business plan development'
      },
      {
        icon: <MdTrendingUp className="text-[#3B82F6]" size={24} />,
        title: 'Growth Strategy',
        description: 'Expansion and growth planning'
      },
      {
        icon: <MdSecurity className="text-[#3B82F6]" size={24} />,
        title: 'Compliance Audits',
        description: 'Regular compliance reviews and audits'
      },
    ],
    process: [
      { step: '1', title: 'Assessment', description: 'Analyze your business needs and goals' },
      { step: '2', title: 'Strategy', description: 'Develop customized business strategy' },
      { step: '3', title: 'Implementation', description: 'Execute strategic recommendations' },
      { step: '4', title: 'Monitoring', description: 'Ongoing support and optimization' },
    ],
    portals: ['MISA', 'MOCI', 'SAGIA', 'ZATCA', 'Ministry of Investment'],
    documents: [
      'Business plan',
      'Financial projections',
      'Market research data',
      'Company profile',
      'Shareholder information',
      'Investment documents',
    ]
  };

  return <ServiceTemplate data={data} />;
}
