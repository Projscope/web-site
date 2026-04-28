const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const categories = [
  {
    title: 'Open Source',
    subtitle: 'Free tools we\'ve built and released to the community. Open to use, open to contribute.',
    projects: [
      {
        name: 'Projscope Music Player',
        description: 'A polished cross-platform desktop media player that demonstrates our expertise in Electron-based application development. Built as a modern alternative to legacy players like Winamp, it delivers a native desktop experience on Windows, macOS, and Linux from a single TypeScript codebase.',
        highlights: [
          'Cross-platform desktop app — single codebase, three operating systems',
          'Offline-first architecture with zero cloud dependency',
          'Custom audio engine with playlist management and library indexing',
          'Responsive UI built with Angular, showcasing component-driven design',
        ],
        language: 'TypeScript',
        tags: ['Electron', 'Angular', 'Cross-Platform', 'MP3', 'Desktop'],
        url: 'https://github.com/jviaches/projscope-music-player',
        image: 'https://raw.githubusercontent.com/jviaches/projscope-music-player/main/images/player.PNG',
      },
      {
        name: 'Projscope Tasks',
        description: 'A lightweight Kanban-style task management tool designed for teams and individuals who need visual workflow organization without the overhead of cloud subscriptions. This project showcases our ability to build intuitive, production-ready productivity tools from the ground up.',
        highlights: [
          'Drag-and-drop Kanban boards with smooth animations',
          'Fully offline — all data stays on the user\'s machine',
          'Clean, distraction-free interface focused on usability',
          'Built to demonstrate rapid prototyping and MVP delivery',
        ],
        language: 'TypeScript',
        tags: ['Kanban', 'Task Management', 'Offline', 'Productivity'],
        url: 'https://github.com/jviaches/projscope-tasks-source',
        image: 'https://raw.githubusercontent.com/jviaches/projscope-tasks-source/main/images/dashboard-dark.png',
      },
    ],
  },
  {
    title: 'SaaS',
    subtitle: 'Live products and platforms we\'ve designed, built, and shipped to real users.',
    projects: [
      {
        name: 'myhinge',
        description: 'A goal-focused daily habit tracker built around one powerful question: "What one thing, if done today, makes your day?" This progressive web app showcases modern full-stack development with real-time data sync, offline support, and a mobile-first design that works seamlessly across all devices.',
        highlights: [
          'PWA with offline support — installable on any device, no app store needed',
          'Real-time data sync powered by Supabase (PostgreSQL + Auth)',
          '16-week streak heatmap for visual progress tracking',
          'Server-side rendering with Next.js for fast load times and SEO',
        ],
        language: 'Next.js',
        tags: ['React', 'PWA', 'Supabase', 'Habit Tracking', 'Productivity'],
        url: 'https://myhinge.app/',
        image: 'https://myhinge.app/og-image.png',
        isLive: true,
        isLogo: true,
      },
    ],
  },
];

export default function OpenSourcePage() {
  return (
    <main className="oss-page">
      <section className="oss-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Projects</span>
            <h1 className="section-title">Work We've Built &amp; Share</h1>
            <p className="section-subtitle">
              A mix of client work, internal tools, and open source projects we've released to the world. Free to use, open to contribute.
            </p>
          </div>
          {categories.map(category => (
            <div key={category.title} className="oss-category">
              <div className="oss-category__header">
                <h2 className="oss-category__title">{category.title}</h2>
                <p className="oss-category__subtitle">{category.subtitle}</p>
              </div>
              <ul className="oss-grid">
                {category.projects.map(project => (
                  <li key={project.url} className="oss-card">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="oss-card__image-link">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className={`oss-card__image${(project as { isLogo?: boolean }).isLogo ? ' oss-card__image--logo' : ''}`}
                        />
                      ) : (
                        <div className="oss-card__image oss-card__image--placeholder">
                          <span>{project.name}</span>
                        </div>
                      )}
                    </a>
                    <div className="oss-card__body">
                      <h3 className="oss-card__name">{project.name}</h3>
                      <p className="oss-card__desc">{project.description}</p>
                      {project.highlights && (
                        <ul className="oss-card__highlights">
                          {project.highlights.map(h => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      )}
                      <ul className="service-card__tags oss-card__tags">
                        {project.tags.map(tag => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="oss-card__footer">
                      <span className="oss-card__lang">
                        <span className="oss-card__lang-dot" />
                        {project.language}
                      </span>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--secondary oss-card__btn">
                        {(project as { isLive?: boolean }).isLive ? <ExternalLinkIcon /> : <GithubIcon />}
                        {(project as { isLive?: boolean }).isLive ? 'View Live App' : 'View on GitHub'}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
