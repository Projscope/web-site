import { Link, useNavigate } from 'react-router-dom';
import { CaseStudyData } from '../../data/types';

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(data.meta.backTo);
  };

  return (
    <>
      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero__bg">
          <div className="cs-hero__glow"></div>
        </div>
        <div className="container">
          <a href={data.meta.backTo} className="cs-hero__back" onClick={handleBackClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            {data.meta.backLabel}
          </a>
          <div className="cs-hero__meta">
            {data.meta.tags.map((tag, i) => (
              <span key={i} className={`cs-hero__tag${tag.accent ? ' cs-hero__tag--accent' : ''}`}>{tag.label}</span>
            ))}
          </div>
          <h1 className="cs-hero__title" dangerouslySetInnerHTML={{ __html: data.meta.title.replace(/\n/g, '<br/>') }} />
          <p className="cs-hero__subtitle">{data.meta.subtitle}</p>
          <div className="cs-hero__highlights">
            {data.highlights.map((h, i) => (
              <div className="cs-highlight" key={i}>
                <span className="cs-highlight__value">{h.value}</span>
                <span className="cs-highlight__label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      {data.meta.image && (
        <div className="cs-screenshot-wrap">
          <div className="container">
            <div className="cs-screenshot">
              <img src={data.meta.image} alt={data.meta.imageAlt ?? data.meta.title} />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-layout">
            {/* Sidebar */}
            <aside className="cs-sidebar">
              <div className="cs-info-card">
                <h4>Project Details</h4>
                {data.sidebar.details.map((d, i) => (
                  <div className="cs-info-row" key={i}>
                    <span className="cs-info-label">{d.label}</span>
                    <span className="cs-info-value">{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="cs-info-card">
                <h4>Technologies</h4>
                <div className="cs-tech-tags">
                  {data.sidebar.technologies.map((t, i) => <span key={i}>{t}</span>)}
                </div>
              </div>
              {data.sidebar.skills.length > 0 && (
                <div className="cs-info-card">
                  <h4>Skills Demonstrated</h4>
                  <div className="cs-skills">
                    {data.sidebar.skills.map((s, i) => (
                      <div className="cs-skill" key={i}>
                        <div className="cs-skill__bar" style={{ '--w': s.width } as React.CSSProperties} />
                        <span className="cs-skill__name">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {data.sidebar.links.length > 0 && (
                <div className="cs-info-card">
                  <h4>Links</h4>
                  {data.sidebar.links[0].type === 'tag' ? (
                    <div className="cs-tech-tags">
                      {data.sidebar.links.map((l, i) => (
                        <a key={i} href={l.url} target="_blank" rel="noopener" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>{l.label}</a>
                      ))}
                    </div>
                  ) : (
                    <div className="cs-links">
                      {data.sidebar.links.map((l, i) => (
                        <a key={i} href={l.url} target="_blank" rel="noopener" className="cs-link">
                          {l.icon && <span dangerouslySetInnerHTML={{ __html: l.icon }} />}
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </aside>

            {/* Main Content */}
            <div className="cs-content">
              {data.blocks.map((block, i) => (
                <div className="cs-block" key={i}>
                  <div className="cs-block__icon" dangerouslySetInnerHTML={{ __html: block.icon }} />
                  <h2>{block.title}</h2>
                  {block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                  {block.callout && (
                    <div className="cs-callout" dangerouslySetInnerHTML={{ __html: `<strong>${block.callout.split(':')[0]}:</strong>${block.callout.substring(block.callout.indexOf(':') + 1)}` }} />
                  )}
                </div>
              ))}

              {/* Timeline */}
              <div className="cs-timeline">
                {data.timeline.map((item, i) => (
                  <div className="cs-timeline__item" key={i}>
                    <div className="cs-timeline__marker"><span>{item.number}</span></div>
                    <div className="cs-timeline__content">
                      <div className="cs-timeline__header">
                        <h3>{item.title}</h3>
                        <span className="cs-timeline__duration">{item.duration}</span>
                      </div>
                      <p>{item.description}</p>
                      {item.bullets && (
                        <ul>
                          {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Results Intro */}
              <div className="cs-block">
                <div className="cs-block__icon" dangerouslySetInnerHTML={{ __html: data.resultsIntro.icon }} />
                <h2>{data.resultsIntro.title}</h2>
                {data.resultsIntro.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* Results Grid */}
              <div className="cs-results-grid">
                {data.results.map((r, i) => (
                  <div className="cs-result-card" key={i}>
                    <div className="cs-result-card__icon" dangerouslySetInnerHTML={{ __html: r.icon }} />
                    <h4>{r.title}</h4>
                    <p>{r.description}</p>
                  </div>
                ))}
              </div>

              {/* Outcome Block (optional) */}
              {data.outcomeBlock && (
                <div className="cs-block">
                  <div className="cs-block__icon" dangerouslySetInnerHTML={{ __html: data.outcomeBlock.icon }} />
                  <h2>{data.outcomeBlock.title}</h2>
                  {data.outcomeBlock.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}

              {/* CTA */}
              <div className="cs-cta">
                <h3>{data.cta.title}</h3>
                <p>{data.cta.description}</p>
                <Link to={data.cta.buttonLink} className="btn btn--primary btn--lg">{data.cta.buttonText}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
