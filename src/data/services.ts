export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'We build high-performance, cross-platform and native mobile applications for iOS and Android.',
    icon: '📱',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    featured: true,
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    description: 'Scalable, secure, and responsive web applications built with modern frontend and backend technologies.',
    icon: '💻',
    technologies: ['React', 'Next.js', 'Vue', 'Astro'],
    featured: true,
  },
  {
    slug: 'backend-api-development',
    title: 'Backend & API Development',
    description: 'Robust server-side architectures, RESTful APIs, and GraphQL endpoints to power your digital products.',
    icon: '⚙️',
    technologies: ['Node.js', 'Python', 'Go', '.NET'],
    featured: true,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed to provide seamless experiences.',
    icon: '🎨',
    technologies: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud-native applications, serverless architectures, and scalable infrastructure on AWS, GCP, or Azure.',
    icon: '☁️',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker'],
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    description: 'Comprehensive manual and automated testing to ensure the highest quality standards.',
    icon: '🧪',
    technologies: ['Jest', 'Cypress', 'Selenium'],
  }
];
