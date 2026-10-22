import React from 'react';
import { siteConfig } from '../teamConfig';

export const About: React.FC = () => {
  return (
    <section className="about-section" aria-label="About SingularityX">
      <div className="container">
        <div className="about-card">
          <div className="about-label">Note // Philosophy</div>
          <p className="about-paragraph">
            {siteConfig.aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};
