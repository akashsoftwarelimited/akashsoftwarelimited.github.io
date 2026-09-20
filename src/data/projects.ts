export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning System',
    category: 'Enterprise',
    description: 'A comprehensive ERP solution unifying business processes across manufacturing, finance, and human resources.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['.NET', 'React', 'SQL Server'],
    featured: true,
  },
  {
    slug: 'fintech-mobile-wallet',
    title: 'FinTech Mobile Wallet',
    category: 'Mobile',
    description: 'A secure, high-performance mobile payment application with real-time analytics and biometric authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    featured: true,
  },
  {
    slug: 'healthcare-portal',
    title: 'Patient Care Portal',
    category: 'Web',
    description: 'A HIPAA-compliant web portal for patients to manage appointments, view records, and communicate with healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    featured: true,
  }
];
