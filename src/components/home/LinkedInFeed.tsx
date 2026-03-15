import SectionHeader from '../ui/SectionHeader';
import linkedinPosts from '../../data/linkedinPosts';

const PROFILE_URL = 'https://www.linkedin.com/in/viacheslav-blinder/';
const AUTHOR_NAME = 'Viacheslav Blinder';
const AUTHOR_TITLE = 'Lead Software Engineer · Founder at Projscope · CTO at CxTrack';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
  </svg>
);

export default function LinkedInFeed() {
  return (
    <section className="linkedin-feed" id="insights">
      <div className="container">
        <SectionHeader
          tag="Insights"
          title="Latest from LinkedIn"
          description="Thoughts on technology leadership, software architecture, and building products that matter."
        />

        <div className="linkedin-posts">
          {linkedinPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-post"
            >
              <div className="linkedin-post__header">
                <div className="linkedin-post__author">
                  <div className="linkedin-post__avatar">
                    <span>VB</span>
                  </div>
                  <div className="linkedin-post__meta">
                    <strong className="linkedin-post__name">{AUTHOR_NAME}</strong>
                    <span className="linkedin-post__title">{AUTHOR_TITLE}</span>
                    <span className="linkedin-post__date">{post.date}</span>
                  </div>
                </div>
                <div className="linkedin-post__logo">
                  <LinkedInIcon />
                </div>
              </div>

              <div className="linkedin-post__body">
                <p>{post.text}</p>
              </div>

              {post.hashtags && post.hashtags.length > 0 && (
                <div className="linkedin-post__tags">
                  {post.hashtags.map((tag) => (
                    <span key={tag} className="linkedin-post__tag">#{tag}</span>
                  ))}
                </div>
              )}

              <div className="linkedin-post__footer">
                <span className="linkedin-post__read-more">
                  Read on LinkedIn <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="linkedin-feed__cta">
          <a href={PROFILE_URL} target="_blank" rel="noopener" className="btn btn--outline">
            <LinkedInIcon />
            <span style={{ marginLeft: '8px' }}>View All Posts on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
