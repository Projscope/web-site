import { useState, useCallback, useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';

const posts = [
  '7386038510887161856',
  '7211141998626394113',
  '7202126560722640896',
  '7386038510887161856',
  '7211141998626394113',
  '7202126560722640896',
];

const VISIBLE = 2;
const totalPages = Math.ceil(posts.length / VISIBLE);
const DEFAULT_HEIGHT = 800;

export default function LinkedInFeed() {
  const [page, setPage] = useState(0);
  const [iframeHeights, setIframeHeights] = useState<Record<number, number>>({});
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const goPrev = useCallback(() => setPage(p => Math.max(0, p - 1)), []);
  const goNext = useCallback(() => setPage(p => Math.min(totalPages - 1, p + 1)), []);

  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  // Listen for LinkedIn embed resize messages
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // LinkedIn embeds post height via postMessage
      if (event.origin !== 'https://www.linkedin.com') return;

      let height: number | undefined;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        height = data?.height || data?.['embed-height'] || data?.size?.height;
      } catch {
        // not JSON, ignore
      }

      if (!height || height < 100) return;

      // Match the message source to the correct iframe
      iframeRefs.current.forEach((iframe, idx) => {
        if (iframe && iframe.contentWindow === event.source) {
          setIframeHeights(prev => ({ ...prev, [idx]: height! }));
        }
      });
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Compute the tallest iframe height for the current page pair
  const currentPairStart = page * VISIBLE;
  const pairHeights = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = currentPairStart + i;
    return iframeHeights[idx] || DEFAULT_HEIGHT;
  });
  const rowHeight = Math.max(...pairHeights);

  return (
    <section className="linkedin-feed" id="insights">
      <div className="container">
        <SectionHeader
          tag="Insights"
          title="Latest from LinkedIn"
          description="Thoughts on technology leadership, software architecture, and building products that matter."
        />

        <div className="linkedin-carousel">
          {/* Left Arrow */}
          <button
            className={`linkedin-carousel__arrow linkedin-carousel__arrow--left${isFirst ? ' linkedin-carousel__arrow--disabled' : ''}`}
            onClick={goPrev}
            disabled={isFirst}
            aria-label="Previous posts"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Track */}
          <div className="linkedin-carousel__viewport">
            <div
              className="linkedin-carousel__track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {posts.map((id, i) => (
                <div
                  className="linkedin-carousel__slide"
                  key={i}
                  style={{ height: `${rowHeight}px` }}
                >
                  <iframe
                    ref={el => { iframeRefs.current[i] = el; }}
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn post ${i + 1}`}
                    style={{ height: `${iframeHeights[i] || DEFAULT_HEIGHT}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className={`linkedin-carousel__arrow linkedin-carousel__arrow--right${isLast ? ' linkedin-carousel__arrow--disabled' : ''}`}
            onClick={goNext}
            disabled={isLast}
            aria-label="Next posts"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="linkedin-carousel__dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`linkedin-carousel__dot${i === page ? ' linkedin-carousel__dot--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <div className="linkedin-feed__cta">
          <a href="https://www.linkedin.com/in/viacheslav-blinder/" target="_blank" rel="noopener" className="btn btn--outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View All Posts on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
