import React, { useState, useEffect } from 'react';
import { LiveClock } from './LiveClock';

export type Theme = 'dark' | 'light' | 'retro';

interface HeaderProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();

    if (targetId === 'home' || targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <a
          href="#home"
          className="logo-link"
          aria-label="SingularityX Home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="logo-badge" aria-hidden="true"></span>
          <span className="logo-text">SingularityX</span>
        </a>

        {/* Desktop & Mobile Navigation */}
        <div className={`nav-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a
                  href="#home"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'team')}
                >
                  The Team
                </a>
              </li>
              <li>
                <a
                  href="#what-we-build"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'what-we-build')}
                >
                  What We Build
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Live India Standard Time Clock */}
          <LiveClock variant="header" />

          {/* Theme switcher with 3 modes */}
          <div className="theme-switcher" role="radiogroup" aria-label="Visual Theme Switcher">
            <button
              type="button"
              role="radio"
              aria-checked={currentTheme === 'dark'}
              className={`theme-btn ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => onThemeChange('dark')}
              title="Dark Mode"
            >
              Dark
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentTheme === 'light'}
              className={`theme-btn ${currentTheme === 'light' ? 'active' : ''}`}
              onClick={() => onThemeChange('light')}
              title="Light Mode"
            >
              Light
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentTheme === 'retro'}
              className={`theme-btn ${currentTheme === 'retro' ? 'active' : ''}`}
              onClick={() => onThemeChange('retro')}
              title="Retro Mode (90s developer aesthetic)"
            >
              Retro
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
