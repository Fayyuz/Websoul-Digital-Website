import { Shield, Globe, Briefcase } from 'lucide-react';
import React from 'react';

export const services = [
  {
    id: 'trust-services',
    title: 'Trust Services',
    href: '/trust-services',
    description: 'Trusted screening, identity verification, and document trust services for secure workforce integrity and onboarding.',
    actionLabel: 'Verify Capability',
    icon: Shield,
    accent: false
  },
  {
    id: 'digital-consultancy',
    title: 'Digital Consultancy',
    href: '/digital-consultancy',
    description: 'ICT strategy, cloud transformation, and cyber-aware consulting tailored for government and regulated sectors.',
    actionLabel: 'View Strategy',
    icon: Globe,
    accent: true
  },
  {
    id: 'disp-advisory',
    title: 'DISP Advisory',
    href: '/disp-advisory',
    description: 'Practical security maturity, governance uplift, and readiness support for organisations in secure operating contexts.',
    actionLabel: 'Audit Readiness',
    icon: Briefcase,
    accent: false
  }
];
