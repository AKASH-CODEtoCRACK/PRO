'use client';

import ServiceTemplate from '../ServiceTemplate';
import { Shield } from 'lucide-react';
import { FaBalanceScale, FaFileInvoiceDollar, FaUserCheck, FaClipboardCheck } from 'react-icons/fa';
import { MdSecurity, MdVerified, MdGavel, MdAssignment } from 'react-icons/md';
import type { ImageKey } from '@/lib/images';

export default function LaborCompliancePage() {
  const data = {
    title: 'Labor Compliance Services',
    description: 'Complete labor law compliance and government reporting for Saudi Arabia',
    icon: Shield,
    image: 'laborCompliance' as ImageKey,
    stats: {
      time: '2-5 Days',
      compliance: '100% Compliant',
      support: 'Ongoing Support'
    },
    overview: ["Ensure your business remains fully compliant with UAE labour laws and regulations. Our comprehensive services cover work permit and contract management, wage protection system (WPS) compliance, and support with Ministry of Human Resources and Emiratisation requirements.",
    
    "We assist with employee records, inspections, and ongoing compliance to help you avoid penalties and maintain a strong standing with UAE authorities."],
    features: [
      {
        icon: <FaBalanceScale className="text-[#3B82F6]" size={24} />,
        title: 'WPS (Wage Protection System) management',
        description: 'Comprehensive WPS management to ensure timely and compliant salary processing'
      },
      {
        icon: <FaFileInvoiceDollar className="text-[#3B82F6]" size={24} />,
        title: 'Payroll assistance',
        description: 'Reliable payroll assistance to ensure accurate and timely salary management'
      },
      {
        icon: <FaUserCheck className="text-[#3B82F6]" size={24} />,
        title: 'Emiratisation solutions',
        description: 'Tailored Emiratisation solutions to meet compliance and empower local workforce integration'
      },
      // {
      //   icon: <MdVerified className="text-[#3B82F6]" size={24} />,
      //   title: 'ZATCA Tax Registration',
      //   description: 'VAT registration and tax compliance services'
      // },
      {
        icon: <FaClipboardCheck className="text-[#3B82F6]" size={24} />,
        title: 'Pension registration',
        description: 'Streamlined pension registration services to ensure compliance and secure employee benefits'
      },
      // {
      //   icon: <MdSecurity className="text-[#3B82F6]" size={24} />,
      //   title: 'GOSI Compliance',
      //   description: 'Social insurance registration and monthly reporting'
      // },
      {
        icon: <MdGavel className="text-[#3B82F6]" size={24} />,
        title: 'Labor Law Advisory',
        description: 'Expert guidance on Saudi labor regulations'
      },
      {
        icon: <MdAssignment className="text-[#3B82F6]" size={24} />,
        title: 'All types of work permits',
        description: 'Comprehensive support for all categories of work permits'
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
