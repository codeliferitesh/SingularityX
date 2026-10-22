import React from 'react';
import { siteConfig } from '../teamConfig';
import { LiveClock } from './LiveClock';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-badge" aria-hidden="true"></span>
              <span className="footer-title">SingularityX</span>
            </div>
            <p className="footer-tagline">
              Built by five friends, with curiosity and code.
            </p>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-nav-col">
              <span className="footer-col-header">SITEMAP</span>
              <a href="#top" className="footer-link">Home</a>
              <a href="#team" className="footer-link">The Team</a>
              <a href="#what-we-build" className="footer-link">What We Build</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-header">DISPATCH</span>
              {siteConfig.footerContacts.map((contact) => (
                <a
                  key={contact.email}
                  href={`mailto:${contact.email}`}
                  className="footer-link footer-contact-direct"
                  title={contact.email}
                >
                  <span>{contact.label}</span>
                  <span className="footer-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
              <div className="footer-clock-wrap">
                <span className="footer-sub-text">India //</span>
                <LiveClock variant="status" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {currentYear} SingularityX. All rights reserved.
          </div>

          <a
            href="#top"
            onClick={handleScrollToTop}
            className="back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
