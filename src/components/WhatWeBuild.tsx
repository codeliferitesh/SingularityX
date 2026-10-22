import React from 'react';
import { siteConfig } from '../teamConfig';

export const WhatWeBuild: React.FC = () => {
  return (
    <section id="what-we-build" className="build-section" aria-labelledby="build-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-pre-label">DISCIPLINES // FOCUS</div>
          <h2 id="build-heading" className="section-title">
            We like making things work.
          </h2>
        </div>

        <div className="build-list">
          {siteConfig.whatWeBuild.map((item) => (
            <div key={item.number} className="build-item">
              <div className="build-meta">
                <span className="build-number">{item.number}</span>
                <span className="build-code">{item.code}</span>
              </div>
              <div className="build-content">
                <h3 className="build-item-title">{item.title}</h3>
                <p className="build-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
