'use client';

import ServiceTemplate from '../ServiceTemplate';
import { FileText } from 'lucide-react';
import { FaFileSignature, FaLanguage, FaStamp, FaCertificate } from 'react-icons/fa';
import { MdTranslate, MdVerifiedUser, MdGavel, MdDescription } from 'react-icons/md';
import type { ImageKey } from '@/lib/images';

export default function DocumentServicesPage() {
  const data = {
    title: 'Document Services',
    description: 'Professional document attestation, translation, and processing services',
    icon: FileText,
    image: 'documentServices' as ImageKey,
    stats: {
      time: '3-7 Days',
      compliance: '100% Accurate',
      support: 'Expert Team'
    },
    overview:["Professional document services including attestation, certified translation, and notarization for all your business and personal needs in the UAE. We manage end-to-end processing with embassies, the Ministry of Foreign Affairs, and other relevant authorities.",
      "Professional document services including attestation, certified translation, and notarization for all your business and personal needs in the UAE. We manage end-to-end processing with embassies, the Ministry of Foreign Affairs, and other relevant authorities."]
    ,
    features: [
      {
        icon: <FaStamp className="text-[#3B82F6]" size={24} />,
        title: 'MOFA attestation',
        description: 'MOFA and embassy attestation services'
      },
      {
        icon: <FaLanguage className="text-[#3B82F6]" size={24} />,
        title: 'Legal translation',
        description: 'Certified translation services'
      },
      {
        icon: <FaFileSignature className="text-[#3B82F6]" size={24} />,
        title: 'Certification and notarization',
        description: 'Official document notarization'
      },
      {
        icon: <MdVerifiedUser className="text-[#3B82F6]" size={24} />,
        title: 'Document clearance services',
        description: 'Swift and reliable document clearance to keep your business compliant'
      },
      // {
      //   icon: <FaCertificate className="text-[#3B82F6]" size={24} />,
      //   title: 'Equivalency',
      //   description: 'Educational and professional certificate verification'
      // },
      // {
      //   icon: <MdTranslate className="text-[#3B82F6]" size={24} />,
      //   title: 'Multi-language Translation',
      //   description: 'Translation in 20+ languages'
      // },
      // {
      //   icon: <MdGavel className="text-[#3B82F6]" size={24} />,
      //   title: 'Legal Document Processing',
      //   description: 'Contracts, agreements, and legal papers'
      // },
      // {
      //   icon: <MdDescription className="text-[#3B82F6]" size={24} />,
      //   title: 'Document Legalization',
      //   description: 'Complete legalization services'
      // },
    ],
    process: [
      { step: '1', title: 'Document Submission', description: 'Submit original documents for processing' },
      { step: '2', title: 'Verification', description: 'Verify authenticity and completeness' },
      { step: '3', title: 'Processing', description: 'Attestation, translation, or notarization' },
      { step: '4', title: 'Delivery', description: 'Receive processed documents' },
    ],
    portals: ['MOFA', 'Chamber of Commerce', 'Saudi Embassies', 'Ministry of Justice', 'Notary Public'],
    documents: [
      'Original documents to be processed',
      'Passport copies',
      'Authorization letter (if applicable)',
      'Previous attestations (if any)',
      'Translation requirements specification',
    ]
  };

  return <ServiceTemplate data={data} />;
}
