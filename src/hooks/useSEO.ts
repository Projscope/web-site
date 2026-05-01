import { useEffect } from 'react';

const SITE_NAME = 'Projscope';
const SITE_URL = 'https://projscope.com';
const DEFAULT_TITLE = 'Projscope — Software Architecture & Development';
const DEFAULT_DESC = 'Projscope delivers expert software architecture, full-stack development, rapid prototyping, and AI-powered solutions for modern businesses.';
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

interface SEOProps {
  title?: string;           // page-specific title (will be appended with " | Projscope")
  description?: string;
  image?: string;           // absolute URL or /public-relative path
  path?: string;            // e.g. '/project/projscope-tasks'
  type?: 'website' | 'article' | 'software';
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

export function useSEO({ title, description, image, path, type = 'website' }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESC;
    const imgUrl = image
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
      : DEFAULT_IMAGE;
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

    // Page title
    document.title = fullTitle;

    // Basic meta
    setMeta('name', 'description', desc);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image', imgUrl);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE_NAME);

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', imgUrl);

    // Canonical
    setCanonical(canonical);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, image, path, type]);
}
