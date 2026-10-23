import React, { useState, useEffect } from 'react';

interface LiveClockProps {
  showSeconds?: boolean;
  className?: string;
  variant?: 'header' | 'status' | 'badge';
  use24Hour?: boolean;
}

export const LiveClock: React.FC<LiveClockProps> = ({
  showSeconds = true,
  className = '',
  variant = 'header',
  use24Hour = true,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Specifically format in India Standard Time (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        ...(showSeconds ? { second: '2-digit' } : {}),
        hour12: !use24Hour,
        ...(use24Hour ? { hourCycle: 'h23' } : {}),
      };
      
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setTimeStr(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [showSeconds, use24Hour]);

  if (variant === 'status') {
    return (
      <span className={`live-clock-status ${className}`} title="Indian Standard Time (IST / UTC+05:30)">
        <span>IST {timeStr || '--:--:--'}</span>
      </span>
    );
  }

  return (
    <div
      className={`live-clock-pill ${className}`}
      title="Live Indian Standard Time (IST / UTC+05:30)"
      aria-label={`Current time in India: ${timeStr} IST`}
    >
      <span className="live-clock-indicator" aria-hidden="true"></span>
      <span className="live-clock-label">IST</span>
      <span className="live-clock-digits">{timeStr || '--:--:--'}</span>
    </div>
  );
};
