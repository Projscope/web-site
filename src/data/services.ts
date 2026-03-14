export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="2"/><path d="M4 16H44" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="12" r="1.5" fill="currentColor"/><circle cx="15" cy="12" r="1.5" fill="currentColor"/><circle cx="20" cy="12" r="1.5" fill="currentColor"/><path d="M14 24L20 28L14 32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    title: 'Software Architecture',
    description: 'Scalable system design with microservices, event-driven patterns, and cloud-native architectures. We design systems that grow with your business.',
    tags: ['Microservices', 'Cloud-Native', 'Event-Driven', 'Legacy', 'Modern'],
  },
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" stroke-width="2"/><path d="M24 4V44" stroke="currentColor" stroke-width="2"/><path d="M4 14L24 24L44 14" stroke="currentColor" stroke-width="2"/></svg>`,
    title: 'Full-Stack Development',
    description: 'Modern web and mobile applications built with React, .NET, Node.js, and cloud platforms. Robust, tested, and production-ready code.',
    tags: ['React', '.NET', 'Node.js'],
  },
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><path d="M8 38V18L24 8L40 18V38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 38V26H32V38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="18" r="3" stroke="currentColor" stroke-width="2"/></svg>`,
    title: 'Rapid Prototyping',
    description: 'From idea to working prototype fast. Validate concepts, reduce risk, and accelerate time-to-market with our proof-of-concept expertise.',
    tags: ['MVP', 'Proof of Concept', 'Validation'],
  },
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2"/><path d="M16 24h16M24 16v16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 14l4 4M30 14l-4 4M14 34l4-4M30 34l-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2"/></svg>`,
    title: 'IT Consulting',
    description: 'Strategic technology advisory guiding businesses through technology decisions, system modernization, and digital transformation with proven results.',
    tags: ['Strategy', 'Digital Transformation', 'Advisory'],
  },
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><path d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M32 8H40V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 20L40 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 24H28M24 20V28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    title: 'Cloud & DevOps',
    description: 'Azure, AWS, and hybrid cloud infrastructure. CI/CD pipelines, containerization, and infrastructure-as-code for reliable deployments.',
    tags: ['Azure', 'AWS', 'Docker'],
  },
  {
    icon: `<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" stroke-width="2"/><path d="M16 6V2M32 6V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 18H32M16 26H28M16 34H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="36" cy="36" r="8" fill="var(--color-bg)" stroke="currentColor" stroke-width="2"/><path d="M33 36L35 38L39 34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'IT Consulting',
    description: 'Strategic technology advisory for digital transformation. We help organizations make informed decisions about their technology investments.',
    tags: ['Strategy', 'Digital Transformation', 'Advisory'],
  },
];
