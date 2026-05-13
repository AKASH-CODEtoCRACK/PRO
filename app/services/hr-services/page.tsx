'use client';

import ServiceTemplate from '../ServiceTemplate';
import { Users } from 'lucide-react';
import { FaUserPlus, FaFileContract, FaMoneyCheckAlt, FaCalendarAlt } from 'react-icons/fa';
import { MdPeople, MdAssignment, MdPayment, MdExitToApp } from 'react-icons/md';
import type { ImageKey } from '@/lib/images';

export default function HRServicesPage() {
  const data = {
    title: 'HR Services',
    description: 'Complete HR management and employee lifecycle services',
    icon: Users,
    image: 'hrServices' as ImageKey,
    stats: {
      time: 'Ongoing',
      compliance: '100% Compliant',
      support: 'Dedicated HR Team'
    },
    overview: ["Comprehensive HR services covering the complete employee lifecycle from onboarding to exit",
      "We handle payroll processing, contract management, leave administration, and end-of-service settlements, ensuring full compliance with Saudi labor laws"
    ],
    features: [
      {
        icon: <FaUserPlus className="text-[#3B82F6]" size={24} />,
        title: 'HR recruitment services',
        description: '"End-to-end HR recruitment solutions to build the right team'
      },
      {
        icon: <FaFileContract className="text-[#3B82F6]" size={24} />,
        title: 'Employee file and data management',
        description: 'Efficient data management for organized HR operations '
      },
      {
        icon: <FaMoneyCheckAlt className="text-[#3B82F6]" size={24} />,
        title: 'Offer letter and contract preparation',
        description: 'Professional letter drafting for compliant business operations '
      },
      {
        icon: <FaCalendarAlt className="text-[#3B82F6]" size={24} />,
        title: 'Onboarding and offboarding support',
        description: 'Seamless support for smooth employee transitions'
      },
      // {
      //   icon: <MdExitToApp className="text-[#3B82F6]" size={24} />,
      //   title: 'End of Service',
      //   description: 'Final settlement and exit procedures'
      // },
      // {
      //   icon: <MdPeople className="text-[#3B82F6]" size={24} />,
      //   title: 'Employee Records',
      //   description: 'Digital HR file management'
      // },
      // {
      //   icon: <MdAssignment className="text-[#3B82F6]" size={24} />,
      //   title: 'Performance Management',
      //   description: 'Performance review and evaluation support'
      // },
      // {
      //   icon: <MdPayment className="text-[#3B82F6]" size={24} />,
      //   title: 'Benefits Administration',
      //   description: 'Employee benefits and insurance management'
      // },
    ],
    process: [
      { step: '1', title: 'Setup', description: 'Configure HR systems and processes' },
      { step: '2', title: 'Onboarding', description: 'Process new employee documentation' },
      { step: '3', title: 'Management', description: 'Ongoing HR administration' },
      { step: '4', title: 'Reporting', description: 'Monthly HR reports and compliance' },
    ],
    portals: ['Qiwa', 'GOSI', 'Mudad', 'Ministry of Labor', 'WPS System'],
    documents: [
      'Employee personal information',
      'Employment contracts',
      'Salary structure',
      'Bank account details',
      'Leave policies',
      'Company HR policies',
    ]
  };

  return <ServiceTemplate data={data} />;
}
