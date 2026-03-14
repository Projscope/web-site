import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = useCallback((hash: string) => (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate('/' + hash);
    }
  }, [isHome, navigate]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="header__logo">
              <svg className="header__logo-icon" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#logo-grad2)" />
                <path d="M8 16L14 10L20 16L14 22Z" fill="white" opacity="0.9" />
                <path d="M14 16L20 10L26 16L20 22Z" fill="white" opacity="0.6" />
                <defs><linearGradient id="logo-grad2" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#1a1a2e" /><stop offset="1" stopColor="#0d9488" /></linearGradient></defs>
              </svg>
              <span className="header__logo-text">Projscope</span>
            </Link>
            <p className="footer__tagline">Engineering software that scales. Architecture, development, prototyping, and AI solutions for modern businesses.</p>
          </div>
          <div className="footer__col">
            <h4>Solutions</h4>
            <a href="#services" onClick={handleNavClick('#services')}>Software Architecture</a>
            <a href="#services" onClick={handleNavClick('#services')}>Full-Stack Development</a>
            <a href="#services" onClick={handleNavClick('#services')}>Rapid Prototyping</a>
            <a href="#services" onClick={handleNavClick('#services')}>Cloud &amp; DevOps</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#process" onClick={handleNavClick('#process')}>Our Process</a>
            <a href="#insights" onClick={handleNavClick('#insights')}>Insights</a>
            <a href="#contact" onClick={handleNavClick('#contact')}>Contact</a>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/company/projscope/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/Projscope" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 Projscope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
