import React from 'react';
import { siteConfig } from '../teamConfig';

export const IdentityStrip: React.FC = () => {
  return (
    <div className="identity-strip" aria-label="Team characteristics">
      <div className="container identity-strip-inner">
        {siteConfig.identityStrip.map((item, index) => (
          <React.Fragment key={item}>
            <span className="strip-item">{item}</span>
            {index < siteConfig.identityStrip.length - 1 && (
              <span className="strip-divider" aria-hidden="true">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
