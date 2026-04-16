import { useState, useEffect } from 'react';

function Clock({ timezoneOffset }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (timezoneOffset !== null) {
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const cityTime = new Date(utc + (3600000 * (timezoneOffset / 3600)));
        setTime(cityTime);
      } else {
        setTime(now);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timezoneOffset]);

  return (
    <div className="clock-card">
      <h2>{time.toLocaleTimeString()}</h2>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default Clock;