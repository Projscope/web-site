export interface CaseStudyTag {
  label: string;
  accent: boolean;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SidebarDetail {
  label: string;
  value: string;
}

export interface SidebarLink {
  label: string;
  url: string;
  type: 'tag' | 'link';
  icon?: string;
}

export interface Skill {
  name: string;
  width: string;
}

export interface ContentBlock {
  icon: string;
  title: string;
  paragraphs: string[];
  callout?: string;
}

export interface TimelineItem {
  number: number;
  title: string;
  duration: string;
  description: string;
  bullets?: string[];
}

export interface ResultCard {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyData {
  meta: {
    title: string;
    subtitle: string;
    tags: CaseStudyTag[];
    backLabel: string;
    backTo: string;
    image?: string;   // optional hero screenshot path (relative to public/)
    imageAlt?: string;
  };
  highlights: Highlight[];
  sidebar: {
    details: SidebarDetail[];
    technologies: string[];
    skills: Skill[];
    links: SidebarLink[];
  };
  blocks: ContentBlock[];
  timeline: TimelineItem[];
  resultsIntro: {
    icon: string;
    title: string;
    paragraphs?: string[];
  };
  results: ResultCard[];
  outcomeBlock?: ContentBlock;
  downloads?: {
    version: string;
    releaseUrl: string;
    assets: Array<{ label: string; url: string; icon?: string }>;
  };
  contributing?: {
    title: string;
    description: string;
    steps: Array<{ icon: string; title: string; description: string; url: string; urlLabel: string }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
