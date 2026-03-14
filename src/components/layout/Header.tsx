import { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

export default function Header() {
  const { toggleTheme } = useTheme();
  const scrolled = useHeaderScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const handleNavClick = useCallback((hash: string) => (e: React.MouseEvent) => {
    closeMenu();
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate('/' + hash);
    }
  }, [isHome, closeMenu, navigate]);

  const navLinks = [
    { hash: '#services', label: 'Services' },
    { hash: '#insights', label: 'Insights' },
    { hash: '#process', label: 'Process' },
    { hash: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header${scrolled || !isHome ? ' header--scrolled' : ''}`} id="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <svg className="header__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
            <path d="M8 16L14 10L20 16L14 22Z" fill="white" opacity="0.9" />
            <path d="M14 16L20 10L26 16L20 22Z" fill="white" opacity="0.6" />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#1a1a2e" />
                <stop offset="1" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>
          <span className="header__logo-text">Projscope</span>
        </Link>
        <nav className={`header__nav${menuOpen ? ' is-open' : ''}`} id="nav">
          {navLinks.map(link => (
            <a
              key={link.hash}
              href={isHome ? link.hash : `/${link.hash}`}
              className="header__nav-link"
              onClick={handleNavClick(link.hash)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color scheme">
          <svg className="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
          <svg className="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
        </button>
        <a href={isHome ? '#contact' : '/#contact'} className="btn btn--primary header__cta" onClick={handleNavClick('#contact')}>Get Started</a>
        <button className={`header__burger${menuOpen ? ' is-active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
