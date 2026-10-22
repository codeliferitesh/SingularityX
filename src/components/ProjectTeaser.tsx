import React from 'react';
import { siteConfig } from '../teamConfig';

export const ProjectTeaser: React.FC = () => {
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-pre-label">PORTFOLIO // IN PROGRESS</div>
          <h2 id="projects-heading" className="section-title">
            Things we've been building.
          </h2>
        </div>

        {hasProjects ? (
          <div className="projects-grid">
            {siteConfig.projects.map((proj) => (
              <div key={proj.id} className="project-card">
                <div className="project-category">{proj.category}</div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View project ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="project-teaser-box">
            <div className="teaser-indicator">
              <span className="teaser-dot"></span>
              <span className="teaser-status">ACTIVE_WORKFLOW // REPOS IN FLIGHT</span>
            </div>
            <p className="teaser-headline">
              Small experiments. Bigger ideas. More soon.
            </p>
            <p className="teaser-sub">
              We're currently focused on hackathon prototypes and hardware builds.
              Check back soon or drop us an email to hear about what we're cooking up.
            </p>
            <div className="teaser-action">
              <a href="#contact" className="teaser-link">
                <span>More projects coming soon</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
