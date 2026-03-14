import { CaseStudyData } from './types';

export const musicPlayerData: CaseStudyData = {
  meta: {
    title: 'Projscope Music Player',
    subtitle: 'A cross-platform desktop MP3 player inspired by Winamp, combining nostalgic design with modern functionality for a seamless listening experience.',
    tags: [
      { label: 'Open Source', accent: false },
      { label: 'Desktop App', accent: true },
    ],
    backLabel: 'Back to Insights',
    backTo: '/#insights',
  },
  highlights: [
    { value: '1 Month', label: 'Development' },
    { value: 'Cross-Platform', label: 'Windows & Linux' },
    { value: 'Open Source', label: 'Free to Use' },
    { value: 'Angular', label: '+ Electron' },
  ],
  sidebar: {
    details: [
      { label: 'Type', value: 'Desktop Application' },
      { label: 'Platforms', value: 'Windows, Linux' },
      { label: 'Duration', value: '1 Month' },
      { label: 'License', value: 'Open Source' },
      { label: 'Status', value: 'Released (v0.0.1)' },
    ],
    technologies: ['Angular v13', 'Electron v17', 'TypeScript', 'SCSS', 'HTML', 'Node.js'],
    skills: [],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/jviaches/projscope-music-player', type: 'tag' },
      { label: 'Download Release', url: 'https://github.com/jviaches/projscope-music-player/releases/tag/v0.0.1', type: 'tag' },
    ],
  },
  blocks: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
      title: 'About the Project',
      paragraphs: [
        'The Projscope Music Player is a heartfelt tribute to the iconic Winamp player, evoking fond memories of the revolutionary music experience that defined an era. This desktop application combines nostalgic design elements with modern functionality, offering users a fresh approach to digital audio playback.',
        'Built with Angular and Electron, the player runs natively on Windows and Linux, delivering a smooth, offline-capable music experience without the need for a browser.',
      ],
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: 'Development Process',
      paragraphs: ['The project followed a structured three-phase approach to ensure quality and a polished end product.'],
    },
  ],
  timeline: [
    { number: 1, title: 'Research', duration: 'Phase 1', description: 'Comprehensive market analysis and user expectation assessment to guide product strategy and ideation. Studied the original Winamp design language and identified which elements to preserve and which to modernize.' },
    { number: 2, title: 'Proof of Concept', duration: 'Phase 2', description: 'Implementation utilizing Angular and Electron with agile methodologies to create a robust, scalable foundation. Validated cross-platform audio playback, playlist management, and the desktop application packaging pipeline.' },
    { number: 3, title: 'Development', duration: 'Phase 3', description: 'Continuous improvement through iterative development and user feedback integration. Polished the UI, implemented playlist features, and set up automated build workflows for Windows, Linux, and macOS.' },
  ],
  resultsIntro: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
    title: 'Key Features',
  },
  results: [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, title: 'Cross-Platform', description: 'Runs natively on Windows and Linux with automated build pipelines for consistent releases across platforms.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`, title: 'MP3 Playback', description: 'Full-featured audio playback with playlist management, track navigation, and a clean, intuitive interface.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`, title: 'Winamp-Inspired', description: 'Nostalgic design paying tribute to the iconic Winamp player, reimagined with modern UI principles and aesthetics.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, title: 'Open Source', description: 'Fully open source and free to use. Contribute, customize, or learn from the codebase on GitHub.' },
  ],
  cta: {
    title: 'Want to build something similar?',
    description: "Whether it's a desktop application, cross-platform tool, or any custom software project — we'd love to help.",
    buttonText: 'Start a Conversation',
    buttonLink: '/#contact',
  },
};
