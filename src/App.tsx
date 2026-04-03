import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MusicPlayerPage from './pages/MusicPlayerPage';
import MasonryPage from './pages/MasonryPage';
import HardwarePage from './pages/HardwarePage';
import OpenSourcePage from './pages/OpenSourcePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/music-player" element={<MusicPlayerPage />} />
        <Route path="/project/masonry" element={<MasonryPage />} />
        <Route path="/case-study/programmable-hardware" element={<HardwarePage />} />
        <Route path="/projects" element={<OpenSourcePage />} />
      </Routes>
      <Footer />
    </>
  );
}
