'use client';

import ServiceTemplate from '../ServiceTemplate';
import { Shield } from 'lucide-react';
import { FaBalanceScale, FaFileInvoiceDollar, FaUserCheck, FaClipboardCheck } from 'react-icons/fa';
import { MdSecurity, MdVerified, MdGavel, MdAssignment } from 'react-icons/md';

export default function LaborCompliancePage() {
  const data = {
    title: 'Labor Compliance Services',
    description: 'Complete labor law compliance and government reporting for Saudi Arabia',
    icon: Shield,
    image: 'laborCompliance',
    stats: {
      time: '2-5 Days',
      compliance: '100% Compliant',
      support: 'Ongoing Support'
    },
    overview: `Ensure your business stays compliant with Saudi labor laws and regulations. Our comprehensive 
    compliance services cover Qiwa management, Mudad wage protection, ZATCA registration, and Nitaqat support. 
    We help you avoid penalties and maintain good standing with government authorities.`,
    features: [
      {
        icon: <FaBalanceScale className="text-[#3B82F6]" size={24} />,
        title: 'Qiwa Compliance Management',
        description: 'Complete Qiwa portal management and compliance monitoring'
      },
      {
        icon: <FaFileInvoiceDollar className="text-[#3B82F6]" size={24} />,
        title: 'Mudad Wage Protection',
        description: 'WPS registration and monthly salary file processing'
      },
      {
        icon: <MdVerified className="text-[#3B82F6]" size={24} />,
        title: 'ZATCA Tax Registration',
        description: 'VAT registration and tax compliance services'
      },
      {
        icon: <FaUserCheck className="text-[#3B82F6]" size={24} />,
        title: 'Nitaqat Support',
        description: 'Saudization compliance and green/platinum status maintenance'
      },
      {
        icon: <FaClipboardCheck className="text-[#3B82F6]" size={24} />,
        title: 'Labor Contract Registration',
        description: 'Register and manage employment contracts on Qiwa'
      },
      {
        icon: <MdSecurity className="text-[#3B82F6]" size={24} />,
        title: 'GOSI Compliance',
        description: 'Social insurance registration and monthly reporting'
      },
      {
        icon: <MdGavel className="text-[#3B82F6]" size={24} />,
        title: 'Labor Law Advisory',
        description: 'Expert guidance on Saudi labor regulations'
      },
      {
        icon: <MdAssignment className="text-[#3B82F6]" size={24} />,
        title: 'Compliance Audits',
        description: 'Regular audits to ensure ongoing compliance'
      },
    ],
    process: [
      { step: '1', title: 'Compliance Assessment', description: 'Review current compliance status' },
      { step: '2', title: 'Portal Setup', description: 'Configure all required government portals' },
      { step: '3', title: 'Documentation', description: 'Prepare and submit required documents' },
      { step: '4', title: 'Ongoing Management', description: 'Monthly compliance monitoring and reporting' },
    ],
    portals: ['Qiwa', 'Mudad', 'ZATCA', 'GOSI', 'Ministry of Labor', 'Nitaqat System'],
    documents: [
      'Company CR and licenses',
      'Employee contracts',
      'Salary structure',
      'GOSI registration',
      'Bank account details',
      'Authorized signatory documents',
    ]
  };

  return <ServiceTemplate data={data} />;
}
