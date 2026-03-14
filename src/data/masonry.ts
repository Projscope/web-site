import { CaseStudyData } from './types';

export const masonryData: CaseStudyData = {
  meta: {
    title: 'Offline Kanban Dashboard',
    subtitle: 'A clean, simple, and fully offline desktop task management tool built on Kanban methodology — born from the real need to manage diverse software projects without relying on cloud services.',
    tags: [
      { label: 'Project Showcase', accent: false },
      { label: 'Desktop App', accent: true },
      { label: 'Open Source', accent: true },
    ],
    backLabel: 'Back to Insights',
    backTo: '/#insights',
  },
  highlights: [
    { value: '2 Months', label: 'Development Time' },
    { value: 'Open Source', label: 'Project Type' },
    { value: 'Win / Linux', label: 'Platforms' },
    { value: 'Angular + Electron', label: 'Tech Stack' },
  ],
  sidebar: {
    details: [
      { label: 'Type', value: 'Open Source Product' },
      { label: 'Duration', value: '2 Months' },
      { label: 'Platform', value: 'Windows, Linux' },
      { label: 'Architecture', value: 'Desktop (Electron)' },
      { label: 'License', value: 'Open Source' },
    ],
    technologies: ['Angular', 'Electron', 'TypeScript', 'HTML5 / CSS3', 'Node.js', 'Local Storage', 'Drag & Drop API', 'Cross-Platform'],
    skills: [
      { name: 'Angular Development', width: '95%' },
      { name: 'Electron / Desktop Apps', width: '90%' },
      { name: 'UX / Interaction Design', width: '88%' },
      { name: 'Offline-First Architecture', width: '85%' },
      { name: 'Open Source Delivery', width: '92%' },
    ],
    links: [
      { label: 'Project Link', url: 'https://tasks.projscope.com', type: 'link', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>` },
      { label: 'Open Source', url: 'https://github.com/jviaches/projscope-tasks-source', type: 'link', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>` },
    ],
  },
  blocks: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
      title: 'The Context',
      paragraphs: [
        "Managing multiple software projects simultaneously demands a tool that's fast, reliable, and always available — even without an internet connection. Existing cloud-based solutions introduced latency, required accounts, and added complexity that got in the way of simply organizing work.",
        "We built this tool out of our own necessity: a streamlined, offline-first Kanban board that launches instantly, requires zero configuration, and stays out of the way while you focus on what matters.",
      ],
      callout: 'Design Goal: Create a distraction-free, drag-and-drop task manager that works on any desktop OS without needing a network connection, login, or subscription.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: 'Our Approach',
      paragraphs: ['We followed a lean, three-phase development process — moving from research to a deployed product in 2 months while maintaining high code quality and a focus on user experience.'],
    },
  ],
  timeline: [
    { number: 1, title: 'Research & Product Design', duration: 'Weeks 1 – 2', description: 'Conducted thorough market research to understand existing Kanban tools, user expectations, and gaps in the offline-first space. Defined core features, designed the interaction model, and planned the technical architecture.', bullets: ['Analyzed competing tools (Trello, Notion, Jira boards) for UX patterns', 'Designed a minimal, keyboard-friendly interface', 'Selected Angular + Electron for cross-platform desktop delivery'] },
    { number: 2, title: 'Development & Iteration', duration: 'Weeks 3 – 6', description: "Built the application using agile sprints, leveraging Angular's component architecture and Electron's native desktop capabilities. Implemented the core Kanban board with drag-and-drop, local data persistence, and cross-platform builds.", bullets: ['Implemented intuitive drag-and-drop between columns', 'Built local storage layer for fully offline data persistence', 'Created task creation, editing, and organization workflows', 'Developed cross-platform build pipeline for Windows and Linux'] },
    { number: 3, title: 'Deployment & Open Source Release', duration: 'Weeks 7 – 8', description: 'Polished the application, optimized performance, and prepared for public release. Published the app along with complete source code on GitHub, and deployed a live web demo for instant access.', bullets: ['Published desktop builds and a live web version at tasks.projscope.com', 'Released full source code on GitHub for community contribution', 'Documented setup, architecture, and contribution guidelines'] },
  ],
  resultsIntro: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
    title: 'Key Features',
    paragraphs: ['The application delivers a focused, no-frills task management experience designed for speed and simplicity.'],
  },
  results: [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`, title: 'Kanban Boards', description: 'Visual columns for organizing tasks into stages — To Do, In Progress, Done, or any custom workflow that fits your process.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 9l4 4L19 3"/><path d="M5 19h14"/></svg>`, title: 'Drag & Drop', description: 'Intuitive drag-and-drop interface for moving tasks between columns, reordering priorities, and managing workflow with zero friction.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`, title: '100% Offline', description: 'All data stored locally on your machine. No accounts, no subscriptions, no cloud dependency. Your data never leaves your computer.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, title: 'Cross-Platform', description: 'Runs natively on Windows and Linux via Electron, with a web version available for instant browser-based access.' },
  ],
  outcomeBlock: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    title: 'Outcome & Impact',
    paragraphs: [
      'What started as an internal productivity tool evolved into a fully open-source product that demonstrates our ability to ship polished desktop applications. The project showcases end-to-end product development — from identifying a real need through design, development, and public release — all within a focused 2-month timeline.',
      "The tool remains actively used for managing our own project workflows and is available to the community as both a desktop app and a live web demo.",
    ],
  },
  cta: {
    title: 'Need a custom desktop or offline-first app?',
    description: "We build cross-platform applications with Angular, Electron, and modern web technologies. Let's talk about your project.",
    buttonText: 'Start a Conversation',
    buttonLink: '/#contact',
  },
};
