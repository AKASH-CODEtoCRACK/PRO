import { Shield, FileText, Users, Building2, Briefcase, Globe } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  portals: string[];
}

export const services: Service[] = [
  {
    id: 'company-setup',
    title: 'Company Setup',
    description: 'Complete business registration and establishment services',
    icon: Building2,
    features: [
      'Commercial Registration (CR)',
      'MISA registration and compliance',
      'GOSI employer registration',
      'Municipality licenses',
      'Chamber of Commerce membership',
    ],
    portals: ['MISA', 'GOSI', 'Ministry of Commerce', 'Balady'],
  },
  {
    id: 'visa-immigration',
    title: 'Visa & Immigration',
    description: 'Comprehensive visa processing and Iqama services',
    icon: Globe,
    features: [
      'Work visa applications',
      'Iqama issuance and renewal',
      'Muqeem portal management',
      'Absher services',
      'Exit/Re-entry permits',
      'Family visa processing',
    ],
    portals: ['Muqeem', 'Absher', 'Enjaz', 'MOI'],
  },
  {
    id: 'labor-compliance',
    title: 'Labor Compliance',
    description: 'Full labor law compliance and government reporting',
    icon: Shield,
    features: [
      'Qiwa compliance management',
      'Mudad wage protection',
      'ZATCA tax registration',
      'Nitaqat (Saudization) support',
      'Labor contract registration',
      'WPS salary processing',
    ],
    portals: ['Qiwa', 'Mudad', 'ZATCA', 'GOSI'],
  },
  {
    id: 'document-services',
    title: 'Document Services',
    description: 'Attestation, translation, and document processing',
    icon: FileText,
    features: [
      'Document attestation',
      'Arabic translation services',
      'Notarization',
      'Embassy services',
      'Certificate verification',
    ],
    portals: ['MOFA', 'Chamber of Commerce', 'Saudi Embassies'],
  },
  {
    id: 'hr-services',
    title: 'HR Services',
    description: 'Complete HR management and employee lifecycle',
    icon: Users,
    features: [
      'Employee onboarding',
      'Contract management',
      'Payroll processing',
      'Leave management',
      'End of service settlements',
    ],
    portals: ['Qiwa', 'GOSI', 'Mudad'],
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Strategic guidance for Saudi market entry and operations',
    icon: Briefcase,
    features: [
      'Market entry strategy',
      'Regulatory compliance advisory',
      'Business structure optimization',
      'Government relations',
      'Risk assessment',
    ],
    portals: ['MISA', 'MOCI', 'SAGIA'],
  },
];
