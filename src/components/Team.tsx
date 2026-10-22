import React, { useState } from 'react';
import { siteConfig, type TeamMember } from '../teamConfig';

interface MemberItemProps {
  member: TeamMember;
  index: number;
}

const MemberCard: React.FC<MemberItemProps> = ({ member, index }) => {
  const [imageError, setImageError] = useState(false);
  const hasPhoto = Boolean(member.photoUrl) && !imageError;

  return (
    <article className="member-card">
      <div className="member-index-tag" aria-hidden="true">
        <span>0{index + 1}</span>
      </div>

      <div className="member-photo-wrapper">
        {hasPhoto ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="member-photo"
            style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="member-avatar-placeholder" aria-label={`Photo placeholder for ${member.name}`}>
            <div className="placeholder-crosshair" aria-hidden="true"></div>
            <span className="placeholder-initials">{member.initials}</span>
            <span className="placeholder-note">PHOTO READY</span>
          </div>
        )}
      </div>

      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <a
          href={member.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="member-linkedin"
          aria-label={`${member.name}'s LinkedIn profile`}
        >
          <span>LinkedIn</span>
          <svg
            className="member-linkedin-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </article>
  );
};

export const Team: React.FC = () => {
  return (
    <section id="team" className="team-section" aria-labelledby="team-heading">
      <div className="container">
        <div className="section-header team-section-header">
          <div className="section-pre-label">FOUNDERS & CREATORS // 05</div>
          <h2 id="team-heading" className="section-title">
            The people behind it.
          </h2>
          <p className="section-subtitle">
            Five friends. Different perspectives. A lot of things to build.
          </p>
        </div>

        <div className="team-grid">
          {siteConfig.members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
