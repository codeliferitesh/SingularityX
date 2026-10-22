import React from 'react';
import { LiveClock } from './LiveClock';

export const RetroStatusBar: React.FC = () => {
  return (
    <div className="retro-status-bar" aria-hidden="true">
      <div className="container retro-status-inner">
        <div className="retro-tag">
          <span className="retro-status-dot"></span>
          <span>SYS_STATUS: ONLINE</span>
        </div>
        <div className="retro-tag">
          <span>LOC: INDIA // </span>
          <LiveClock variant="status" />
        </div>
      </div>
    </div>
  );
};
