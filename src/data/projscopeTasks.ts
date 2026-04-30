import { CaseStudyData } from './types';

export const projscopeTasksData: CaseStudyData = {
  meta: {
    title: 'Projscope Tasks',
    subtitle: 'A clean, offline-first Kanban board for teams and individuals who want visual workflow management — no subscriptions, no cloud lock-in, no distractions.',
    tags: [
      { label: 'Open Source', accent: false },
      { label: 'Productivity', accent: true },
    ],
    backLabel: 'Back to Projects',
    backTo: '/projects',
    image: '/projscope-tasks-dark.png',
    imageAlt: 'Projscope Tasks — Kanban board dark theme',
  },
  highlights: [
    { value: '100%', label: 'Offline' },
    { value: 'Free', label: 'Forever' },
    { value: 'Open Source', label: 'MIT License' },
    { value: 'TypeScript', label: 'Codebase' },
  ],
  sidebar: {
    details: [
      { label: 'Type', value: 'Desktop Application' },
      { label: 'Platform', value: 'Cross-Platform' },
      { label: 'License', value: 'Open Source (MIT)' },
      { label: 'Status', value: 'Active Development' },
      { label: 'Category', value: 'Productivity' },
    ],
    technologies: ['TypeScript', 'Electron', 'Angular', 'SCSS', 'Node.js', 'LocalStorage'],
    skills: [],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/jviaches/projscope-tasks-source', type: 'tag' },
      { label: 'Latest Release (v2.0.9)', url: 'https://github.com/jviaches/projscope-tasks-source/releases/tag/v2.0.9', type: 'tag' },
    ],
  },
  blocks: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
      title: 'About the Project',
      paragraphs: [
        'Projscope Tasks is a lightweight, offline-first Kanban task manager built for people who want to stay organized without handing their data to a cloud service. Everything lives on your machine — fast, private, and always available.',
        'The app offers smooth drag-and-drop Kanban boards, a clean distraction-free interface, and both light and dark themes. It was built as an open-source showcase of our ability to rapidly prototype and ship production-ready productivity tools.',
      ],
      callout: 'Philosophy: Your tasks, your machine — zero subscriptions, zero tracking, zero friction.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
      title: 'Why We Built It',
      paragraphs: [
        'Most task management tools today are over-engineered SaaS products that require an account, an internet connection, and a monthly fee just to move a sticky note. We wanted to prove it could be simpler.',
        'Projscope Tasks was designed with one goal: give you a Kanban board that just works, entirely offline, with zero setup beyond downloading the app. It\'s also a live demonstration of our rapid prototyping and MVP delivery capabilities — from idea to working desktop app in record time.',
      ],
    },
  ],
  timeline: [
    {
      number: 1,
      title: 'Ideation & Design',
      duration: 'Phase 1',
      description: 'Defined the core value proposition: a Kanban board that works 100% offline with no account required. Designed the UI with a focus on reducing cognitive load — clean cards, minimal chrome, intuitive drag-and-drop.',
      bullets: [
        'Competitive analysis of Trello, Notion, Linear and other tools',
        'Identified the "offline gap" as the key differentiator',
        'Created wireframes and finalized the light/dark theme palette',
      ],
    },
    {
      number: 2,
      title: 'MVP Build',
      duration: 'Phase 2',
      description: 'Built the core Kanban engine with drag-and-drop board management, local data persistence, and smooth animations. Used Electron to package the web app as a cross-platform desktop binary.',
      bullets: [
        'Drag-and-drop between columns with smooth CSS transitions',
        'LocalStorage persistence — no database setup required',
        'Electron packaging for Windows, macOS, and Linux',
      ],
    },
    {
      number: 3,
      title: 'Polish & Open Source Release',
      duration: 'Phase 3',
      description: 'Refined the UI, added light and dark themes, fixed edge cases in drag-and-drop interactions, and published the full source code on GitHub as an open-source MIT project.',
      bullets: [
        'Light and dark mode with smooth theme transitions',
        'Keyboard accessibility and touch-friendly targets',
        'Full source release on GitHub with MIT license',
      ],
    },
  ],
  resultsIntro: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
    title: 'Key Features',
    paragraphs: ['Everything you need to stay organized — nothing you don\'t.'],
  },
  results: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
      title: 'Kanban Boards',
      description: 'Visual drag-and-drop boards with customizable columns. Move tasks between To Do, In Progress, and Done with a single drag.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18.36 6.64A9 9 0 115.64 18.36M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/></svg>`,
      title: 'Fully Offline',
      description: 'All data is stored locally on your machine. No internet connection required — ever. Works on a plane, in a basement, anywhere.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z"/></svg>`,
      title: 'Light & Dark Mode',
      description: 'Carefully crafted light and dark themes so the app looks great whether you prefer a bright workspace or a dark environment.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
      title: 'Open Source',
      description: 'Fully open source under the MIT license. Use it, fork it, contribute to it — or just learn from the codebase on GitHub.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v5M9.5 14.5l2.5-2.5 2.5 2.5"/></svg>`,
      title: 'Multiple Boards',
      description: 'Create as many boards as you need — one per project, team, or life area. Switch instantly, keep everything organized.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
      title: 'Custom Columns',
      description: 'Add, rename, and reorder columns to match your workflow exactly — not the other way around.',
    },
  ],
  outcomeBlock: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    title: 'Built to Prove a Point',
    paragraphs: [
      'Projscope Tasks was never meant to compete with Jira or Notion. It was built to demonstrate that a focused, well-crafted tool can solve a real problem better than a bloated all-in-one platform.',
      'The result is an app people actually enjoy using — because it does one thing well, respects your privacy, and gets out of your way.',
    ],
  },
  downloads: {
    version: 'v2.0.9',
    releaseUrl: 'https://github.com/jviaches/projscope-tasks-source/releases/tag/v2.0.9',
    assets: [
      {
        label: 'Download for Windows',
        url: 'https://github.com/jviaches/projscope-tasks-source/releases/download/v2.0.9/Projscope-Tasks-Setup-2.0.9.exe',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`,
      },
      {
        label: 'Download for Linux',
        url: 'https://github.com/jviaches/projscope-tasks-source/releases/download/v2.0.9/Projscope-Tasks-2.0.9.AppImage',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 100 14A7 7 0 0012 5zm0 2a5 5 0 110 10A5 5 0 0112 7z"/></svg>`,
      },
    ],
  },
  contributing: {
    title: 'Get Involved',
    description: 'Projscope Tasks is built in the open and we welcome contributions of all kinds — whether that\'s fixing a bug, suggesting a feature, improving the docs, or just spreading the word.',
    steps: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
        title: 'Report a Bug',
        description: 'Found something broken? Open an issue on GitHub and help us make the app better for everyone.',
        url: 'https://github.com/jviaches/projscope-tasks-source/issues/new',
        urlLabel: 'Open an issue',
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
        title: 'Submit a Pull Request',
        description: 'Have a fix or feature ready? Fork the repo, make your changes, and send a PR. All skill levels welcome.',
        url: 'https://github.com/jviaches/projscope-tasks-source/fork',
        urlLabel: 'Fork the repo',
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        title: 'Star on GitHub',
        description: 'Starring the repo helps others discover the project and shows your support for open-source software.',
        url: 'https://github.com/jviaches/projscope-tasks-source',
        urlLabel: 'Star the repo',
      },
    ],
  },
  cta: {
    title: 'Need a custom productivity tool for your team?',
    description: "We build focused, fast, and user-friendly software tailored to your exact workflow — no unnecessary features, no fluff.",
    buttonText: 'Let\'s Talk',
    buttonLink: '/#contact',
  },
};
