'use client';

import ServiceTemplate from '../ServiceTemplate';
import { Users } from 'lucide-react';
import { FaUserPlus, FaFileContract, FaMoneyCheckAlt, FaCalendarAlt } from 'react-icons/fa';
import { MdPeople, MdAssignment, MdPayment, MdExitToApp } from 'react-icons/md';

export default function HRServicesPage() {
  const data = {
    title: 'HR Services',
    description: 'Complete HR management and employee lifecycle services',
    icon: Users,
    image: 'hrServices',
    stats: {
      time: 'Ongoing',
      compliance: '100% Compliant',
      support: 'Dedicated HR Team'
    },
    overview: `Comprehensive HR services covering the complete employee lifecycle from onboarding to exit. 
    We handle payroll processing, contract management, leave administration, and end-of-service settlements, 
    ensuring full compliance with Saudi labor laws.`,
    features: [
      {
        icon: <FaUserPlus className="text-[#3B82F6]" size={24} />,
        title: 'Employee Onboarding',
        description: 'Complete onboarding process and documentation'
      },
      {
        icon: <FaFileContract className="text-[#3B82F6]" size={24} />,
        title: 'Contract Management',
        description: 'Employment contract preparation and registration'
      },
      {
        icon: <FaMoneyCheckAlt className="text-[#3B82F6]" size={24} />,
        title: 'Payroll Processing',
        description: 'Monthly payroll and WPS management'
      },
      {
        icon: <FaCalendarAlt className="text-[#3B82F6]" size={24} />,
        title: 'Leave Management',
        description: 'Annual leave, sick leave, and absence tracking'
      },
      {
        icon: <MdExitToApp className="text-[#3B82F6]" size={24} />,
        title: 'End of Service',
        description: 'Final settlement and exit procedures'
      },
      {
        icon: <MdPeople className="text-[#3B82F6]" size={24} />,
        title: 'Employee Records',
        description: 'Digital HR file management'
      },
      {
        icon: <MdAssignment className="text-[#3B82F6]" size={24} />,
        title: 'Performance Management',
        description: 'Performance review and evaluation support'
      },
      {
        icon: <MdPayment className="text-[#3B82F6]" size={24} />,
        title: 'Benefits Administration',
        description: 'Employee benefits and insurance management'
      },
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
