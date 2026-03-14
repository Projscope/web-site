import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const elements = el.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (parent) {
              const siblings = Array.from(parent.querySelectorAll('[data-animate]'));
              const siblingIndex = siblings.indexOf(entry.target as Element);
              const delay = siblingIndex * 100;
              setTimeout(() => {
                entry.target.classList.add('is-visible');
              }, delay);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
