import React from 'react';
import { siteConfig } from '../teamConfig';
import { OrbitalVisual } from './OrbitalVisual';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-intro-badge">
            <span className="hero-pulse" aria-hidden="true"></span>
            <span>{siteConfig.introBadge}</span>
          </div>

          <h1 id="hero-title" className="hero-heading">
            {siteConfig.heroHeading}
          </h1>

          <p className="hero-text">
            {siteConfig.heroText}
          </p>

          <div className="hero-links">
            <a href="#team" className="hero-link">
              <span>Meet the team</span>
              <span className="hero-link-arrow" aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="hero-link">
              <span>Get in touch</span>
              <span className="hero-link-arrow external" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <OrbitalVisual />
        </div>
      </div>
    </section>
  );
};
