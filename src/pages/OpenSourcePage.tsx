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

const projects = [
  {
    name: 'Projscope Music Player',
    description: 'Cross-platform offline media player inspired by Winamp. A free desktop tool built with Electron and Angular for playing MP3s and managing your local music library.',
    language: 'TypeScript',
    tags: ['Open Source', 'Electron', 'Angular', 'Cross-Platform', 'MP3', 'Desktop'],
    url: 'https://github.com/jviaches/projscope-music-player',
    image: 'https://raw.githubusercontent.com/jviaches/projscope-music-player/main/images/player.PNG',
  },
  {
    name: 'Projscope Tasks',
    description: 'Free, offline, clean and simple task management tool built with the Kanban methodology in mind. Manage your work visually with drag-and-drop boards and zero cloud dependency.',
    language: 'TypeScript',
    tags: ['Open Source', 'Kanban', 'Task Management', 'Offline', 'Productivity'],
    url: 'https://github.com/jviaches/projscope-tasks-source',
    image: 'https://raw.githubusercontent.com/jviaches/projscope-tasks-source/main/images/dashboard.PNG',
  },
  {
    name: 'myhinge',
    description: 'Goal-focused daily habit app built around one simple question: "What one thing, if done today, makes your day?" Pick one goal, add two supporting tasks, and track your streaks with a 16-week heatmap.',
    language: 'Next.js',
    tags: ['React', 'PWA', 'Supabase', 'Habit Tracking', 'Productivity', 'Offline'],
    url: 'https://my-hinge.netlify.app/',
    image: '',
    isLive: true,
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
          <ul className="oss-list">
            {projects.map(project => (
              <li key={project.url} className="oss-item">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="oss-item__image-link">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="oss-item__image"
                    />
                  ) : (
                    <div className="oss-item__image oss-item__image--placeholder">
                      <span>{project.name}</span>
                    </div>
                  )}
                </a>
                <div className="oss-item__body">
                  <h2 className="oss-item__name">{project.name}</h2>
                  <p className="oss-item__desc">{project.description}</p>
                  <ul className="service-card__tags oss-item__tags">
                    {project.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="oss-item__actions">
                  <span className="oss-item__lang">
                    <span className="oss-item__lang-dot" />
                    {project.language}
                  </span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--secondary oss-item__btn">
                    {(project as { isLive?: boolean }).isLive ? <ExternalLinkIcon /> : <GithubIcon />}
                    {(project as { isLive?: boolean }).isLive ? 'View Live App' : 'View on GitHub'}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
