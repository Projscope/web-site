import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import LinkedInFeed from '../components/home/LinkedInFeed';
import Process from '../components/home/Process';
import TechStack from '../components/home/TechStack';
import Contact from '../components/home/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function HomePage() {
  const { hash } = useLocation();
  useSEO({
    title: 'Software Architecture & Development',
    description: 'Projscope delivers expert software architecture, full-stack development, rapid prototyping, and AI-powered solutions. 15+ years experience, 150+ projects shipped.',
    path: '/',
  });

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Services />
      <LinkedInFeed />
      <Process />
      <TechStack />
      <Contact />
    </>
  );
}
