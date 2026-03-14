import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import LinkedInFeed from '../components/home/LinkedInFeed';
import Process from '../components/home/Process';
import TechStack from '../components/home/TechStack';
import Contact from '../components/home/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const { hash } = useLocation();

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
