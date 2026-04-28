import { CaseStudyData } from './types';


export const musicPlayerData: CaseStudyData = {
  meta: {
    title: 'Projscope Music Player',
    subtitle: 'A polished cross-platform desktop MP3 player inspired by Winamp — combining nostalgic design with modern TypeScript engineering for a seamless offline listening experience.',
    tags: [
      { label: 'Open Source', accent: false },
      { label: 'Desktop App', accent: true },
    ],
    backLabel: 'Back to Projects',
    backTo: '/projects',
    image: '/music-player-screenshot.png',
    imageAlt: 'Projscope Music Player — desktop application',
  },
  highlights: [
    { value: '1 Month', label: 'Build Time' },
    { value: 'Cross-Platform', label: 'Windows & Linux' },
    { value: 'Open Source', label: 'Free to Use' },
    { value: 'Angular + Electron', label: 'Tech Stack' },
  ],
  sidebar: {
    details: [
      { label: 'Type', value: 'Desktop Application' },
      { label: 'Platforms', value: 'Windows, Linux' },
      { label: 'Duration', value: '1 Month' },
      { label: 'License', value: 'Open Source (MIT)' },
      { label: 'Status', value: 'Released (v0.0.1)' },
    ],
    technologies: ['Angular v13', 'Electron v17', 'TypeScript', 'SCSS', 'HTML5', 'Node.js'],
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
        'Projscope Music Player is a heartfelt tribute to the iconic Winamp player — evoking the nostalgia of an era when music software felt personal and fun. It combines the design language of classic media players with a fully modern TypeScript codebase built on Angular and Electron.',
        'The player runs natively on Windows and Linux from a single codebase, delivering smooth offline audio playback, playlist management, and a polished UI — all without a browser or cloud account.',
      ],
      callout: 'Goal: Prove that a small, focused team can build a polished native desktop app in a single month.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: 'Engineering Approach',
      paragraphs: [
        'The project was built with a strict one-month deadline, which forced disciplined scope management. Angular was chosen for its component architecture, strong typing, and built-in dependency injection — making the UI layer predictable and testable.',
        'Electron bridges the web stack to the native OS, giving the app access to the file system for local library scanning and playback while still shipping a single codebase to multiple platforms. The build pipeline produces native installers for both Windows and Linux.',
      ],
    },
  ],
  timeline: [
    {
      number: 1,
      title: 'Research & Design',
      duration: 'Phase 1',
      description: 'Studied the original Winamp design language to understand which elements to preserve and which to modernize. Defined the MVP feature set and visual direction.',
      bullets: [
        'Reviewed Winamp UX patterns and modern media player conventions',
        'Defined MVP scope: playback, playlist, library scan, track navigation',
        'Designed component hierarchy and Angular module structure',
      ],
    },
    {
      number: 2,
      title: 'Proof of Concept',
      duration: 'Phase 2',
      description: 'Validated the core technical foundation — cross-platform audio playback via Electron, Angular rendering inside the Electron shell, and the automated build pipeline.',
      bullets: [
        'Electron + Angular integration with live reload in development',
        'Local file system access for MP3 scanning and library indexing',
        'Cross-platform build pipeline tested on Windows and Linux',
      ],
    },
    {
      number: 3,
      title: 'Development & Release',
      duration: 'Phase 3',
      description: 'Iterative UI build-out, playlist management, track controls, and final polish. Published v0.0.1 as an open-source release with prebuilt installers.',
      bullets: [
        'Playlist creation, reordering, and persistence',
        'Track progress bar, volume control, and shuffle/repeat',
        'Open-source release with GitHub Actions CI build',
      ],
    },
  ],
  resultsIntro: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
    title: 'Key Features',
    paragraphs: ['Everything a music lover needs — nothing they don\'t.'],
  },
  results: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'Cross-Platform',
      description: 'A single TypeScript codebase builds native installers for Windows and Linux via automated GitHub Actions pipelines.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
      title: 'MP3 Playback',
      description: 'Full-featured audio playback with track navigation, progress scrubbing, volume control, shuffle, and repeat modes.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
      title: 'Playlist Management',
      description: 'Create, edit, and persist playlists. Drag to reorder tracks, scan local folders to build a library, and pick up where you left off.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
      title: 'Open Source',
      description: 'MIT licensed and fully open. Download the source, customize the UI, or use it as a template for your own Electron + Angular app.',
    },
  ],
  outcomeBlock: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    title: 'What This Demonstrates',
    paragraphs: [
      'Shipping a cross-platform desktop app in one month is a statement about process as much as technology. Tight scope definition, the right tool choices (Angular + Electron), and disciplined iteration are what make it possible.',
      'Projscope Music Player is a live reference for clients asking "how fast can you actually ship?" — the answer is: a polished, installable, open-source desktop app in 30 days.',
    ],
  },
  cta: {
    title: 'Need a custom desktop or cross-platform app?',
    description: 'From Electron apps to native tools — we design and build software that feels fast, looks great, and ships on time.',
    buttonText: 'Start a Conversation',
    buttonLink: '/#contact',
  },
};
