

import React, { useEffect, useState } from 'react';

const Countdown = () => {
  // Change this to the date you both started dating.
  const anniversaryDate = new Date('2025-08-02T00:00:00');

  const calculateTime = () => {
    const now = new Date();
    const diff = now - anniversaryDate;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor(diff / (1000 * 60)),
      seconds: Math.floor(diff / 1000),
    };
  };

  const [timeTogether, setTimeTogether] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <h2>Together For ❤️</h2>

      <div className="countdown-grid">
        <div className="card">
          <h1>{timeTogether.days}</h1>
          <p>Days</p>
        </div>

        <div className="card">
          <h1>{timeTogether.hours}</h1>
          <p>Hours</p>
        </div>

        <div className="card">
          <h1>{timeTogether.minutes}</h1>
          <p>Minutes</p>
        </div>

        <div className="card">
          <h1>{timeTogether.seconds}</h1>
          <p>Seconds</p>
        </div>
      </div>

      <p className="countdown-text">
        Every second with you has become one of my favorite memories.
      </p>
    </section>
  );
};

export default Countdown;