import React from 'react';
import { siteConfig } from '../teamConfig';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="exploring-section" aria-labelledby="exploring-heading">
      <div className="container">
        <div className="exploring-inner">
          <div className="exploring-header">
            <div className="section-pre-label">INTERESTS // ACTIVE</div>
            <h2 id="exploring-heading" className="section-title">
              Things we're exploring.
            </h2>
          </div>

          <div className="exploring-grid">
            {siteConfig.currentlyExploring.map((item, idx) => (
              <div key={item} className="exploring-item">
                <span className="exploring-index">0{idx + 1}</span>
                <span className="exploring-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
