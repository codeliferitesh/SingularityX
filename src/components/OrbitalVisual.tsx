import React from 'react';

/**
 * Handcrafted minimal geometric / orbital diagram for SingularityX.
 * Features 5 orbital nodes representing the 5 team members revolving around
 * a central singularity point with coordinate markings and technical typography.
 */
export const OrbitalVisual: React.FC = () => {
  return (
    <div className="orbital-visual-container" aria-hidden="true">
      <svg
        className="orbital-svg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle background coordinate grid lines */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 4" />

        {/* Concentric orbital rings */}
        <circle cx="200" cy="200" r="170" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" stroke="var(--border-medium)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="80" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="200" cy="200" r="35" stroke="var(--border-medium)" strokeWidth="1.2" />

        {/* Outer compass tick marks */}
        <circle cx="200" cy="30" r="2" fill="var(--text-muted)" />
        <circle cx="370" cy="200" r="2" fill="var(--text-muted)" />
        <circle cx="200" cy="370" r="2" fill="var(--text-muted)" />
        <circle cx="30" cy="200" r="2" fill="var(--text-muted)" />

        {/* Central Singularity Core */}
        <circle cx="200" cy="200" r="6" fill="var(--text-primary)" />
        <circle cx="200" cy="200" r="12" stroke="var(--text-primary)" strokeWidth="1" strokeDasharray="2 2" className="rotating-ring-inner" />

        {/* Rotating ring with 5 team nodes */}
        <g className="orbit-group-outer">
          {/* Node 1: RKV (Angle: 0°) */}
          <circle cx="330" cy="200" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <text x="330" y="185" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">01</text>

          {/* Node 2: AS (Angle: 72°) -> x = 200 + 130*cos(72°) = 240, y = 200 + 130*sin(72°) = 324 */}
          <circle cx="240" cy="324" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <text x="255" y="338" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">02</text>

          {/* Node 3: TM (Angle: 144°) -> x = 200 + 130*cos(144°) = 95, y = 200 + 130*sin(144°) = 276 */}
          <circle cx="95" cy="276" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <text x="75" y="285" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">03</text>

          {/* Node 4: RR (Angle: 216°) -> x = 200 + 130*cos(216°) = 95, y = 200 + 130*sin(216°) = 124 */}
          <circle cx="95" cy="124" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <text x="75" y="125" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">04</text>

          {/* Node 5: AA (Angle: 288°) -> x = 200 + 130*cos(288°) = 240, y = 200 + 130*sin(288°) = 76 */}
          <circle cx="240" cy="76" r="5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <text x="255" y="75" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">05</text>
        </g>

        {/* Technical Corner Labels */}
        <text x="28" y="38" fill="var(--text-muted)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">
          SX://SYS.ORBIT
        </text>
        <text x="372" y="38" fill="var(--text-muted)" fontSize="8.5" fontFamily="var(--font-mono)" textAnchor="end" letterSpacing="0.08em">
          N=5
        </text>
        <text x="28" y="375" fill="var(--text-muted)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">
          28.6139° N, 77.2090° E
        </text>
        <text x="372" y="375" fill="var(--text-muted)" fontSize="8.5" fontFamily="var(--font-mono)" textAnchor="end" letterSpacing="0.08em">
          READY_STATE: OK
        </text>
      </svg>
    </div>
  );
};
