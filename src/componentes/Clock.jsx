import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => 
        setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-card">
      <h2>{time.toLocaleTimeString()}</h2>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default Clock;