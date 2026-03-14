import { CaseStudyData } from './types';

export const hardwareData: CaseStudyData = {
  meta: {
    title: 'Programmable IoT Hardware\nwith GPS Tracking',
    subtitle: 'Delivering production-ready GPS positioning on Blues.io embedded hardware — from initial research to a fully tested, deployed solution that exceeded client expectations.',
    tags: [
      { label: 'Case Study', accent: false },
      { label: 'IoT & Embedded', accent: true },
    ],
    backLabel: 'Back to Insights',
    backTo: '/#insights',
  },
  highlights: [
    { value: '4 Weeks', label: 'Delivery Time' },
    { value: '99.2%', label: 'GPS Accuracy' },
    { value: 'Blues.io', label: 'Hardware Platform' },
    { value: 'Exceeded', label: 'Client Expectations' },
  ],
  sidebar: {
    details: [
      { label: 'Client', value: 'Confidential (IoT Startup)' },
      { label: 'Industry', value: 'Fleet Management / Logistics' },
      { label: 'Duration', value: '4 Weeks' },
      { label: 'Team Size', value: '2 Engineers' },
      { label: 'Deliverable', value: 'Production Firmware + API' },
    ],
    technologies: ['Blues.io Notecard', 'C / C++', 'GPS / GNSS', 'Cellular IoT', 'Python', 'REST API', 'MQTT', 'JSON'],
    skills: [
      { name: 'Hardware Integration', width: '92%' },
      { name: 'GPS / Location Services', width: '88%' },
      { name: 'IoT Protocols', width: '85%' },
      { name: 'Client Communication', width: '92%' },
    ],
    links: [],
  },
  blocks: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
      title: 'The Challenge',
      paragraphs: [
        'Our client, an emerging IoT startup in the logistics space, needed to add reliable GPS tracking capabilities to their programmable hardware devices built on the Blues.io Notecard platform. The core challenge was achieving consistent, accurate GPS positioning across highly variable real-world conditions.',
        'The device needed to report GPS coordinates reliably whether operating indoors near windows, outdoors in open fields, or in dense urban environments with signal interference. Additionally, the solution had to be power-efficient for battery-operated deployments, maintain connectivity over cellular networks, and provide an intuitive data interface for end users.',
      ],
      callout: 'Key Constraints: Variable signal environments, battery-powered operation, cellular-only connectivity, and a tight 4-week delivery timeline.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: 'Our Approach',
      paragraphs: ['We structured the engagement around a four-phase methodology designed to minimize risk and maximize client visibility throughout the process.'],
    },
  ],
  timeline: [
    { number: 1, title: 'Research & Proof of Concept', duration: 'Week 1', description: 'Conducted deep-dive analysis of the Blues.io Notecard hardware capabilities, GPS/GNSS module specifications, and manufacturer documentation. Built an initial proof-of-concept to validate that the hardware could meet accuracy requirements before committing to full development.', bullets: ['Evaluated GPS module cold-start and warm-start performance', 'Benchmarked positioning accuracy across test scenarios', 'Aligned PoC results with client expectations and success criteria'] },
    { number: 2, title: 'SDK Integration & Environment Setup', duration: 'Week 1', description: "In parallel with research, acquired and integrated the manufacturer's SDKs, APIs, and development tools. Established the firmware development environment, configured cellular connectivity, and set up the cloud-side data pipeline for receiving and processing GPS reports.", bullets: ['Configured Blues.io Notehub cloud backend', 'Set up CI pipeline for firmware builds', 'Established secure device-to-cloud communication'] },
    { number: 3, title: 'Development & Rigorous Testing', duration: 'Weeks 2 – 3', description: 'Built the core GPS tracking firmware following manufacturer best practices, with extensive testing across diverse real-world scenarios. Maintained transparent, ongoing communication with the client through weekly demos and progress reports.', bullets: ['Tested across variable signal strengths (strong, weak, intermittent)', 'Validated indoor, outdoor, and urban canyon environments', 'Implemented power management for extended battery life', 'Built REST API for coordinate retrieval and device management'] },
    { number: 4, title: 'Delivery & Client Feedback', duration: 'Week 4', description: 'Delivered the finalized firmware, API documentation, and deployment guide. Conducted hands-on walkthrough sessions with the client team, actively gathered feedback, and made final refinements to ensure complete satisfaction.', bullets: ['Delivered comprehensive technical documentation', 'Conducted knowledge transfer sessions', 'Incorporated client feedback for final polish'] },
  ],
  resultsIntro: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
    title: 'Results & Impact',
    paragraphs: ['The project was delivered on time within the 4-week window, meeting every specification outlined in the original requirements. The final solution exceeded the client\'s expectations in both accuracy and usability.'],
  },
  results: [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M22 4L12 14.01l-3-3"/></svg>`, title: 'Accurate & Reliable', description: 'GPS positioning achieved 99.2% accuracy across all tested environments, including challenging indoor and urban scenarios.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, title: 'Intuitive Interface', description: "Clean REST API and user-friendly data dashboard enabled the client's team to start monitoring devices immediately with no training." },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`, title: 'On-Time Delivery', description: 'Every milestone hit within the agreed 4-week timeline, with weekly demos keeping the client informed at every stage.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`, title: 'Client Exceeded', description: "The client reported that the delivered solution surpassed their original specifications in both performance and code quality." },
  ],
  cta: {
    title: 'Have a similar project in mind?',
    description: "Whether it's IoT, embedded systems, or any hardware-software integration challenge — we'd love to help.",
    buttonText: 'Start a Conversation',
    buttonLink: '/#contact',
  },
};
