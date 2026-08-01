import React from 'react';
import reasons from '../Data/reasons';

function Reasons() {
  return (
    <section className="reasons">
      <h2>20 Reasons I Love You ❤️</h2>

      <p className="reasons-subtitle">
        A few of the countless reasons you're so special to me.
      </p>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <h3>#{index + 1}</h3>
            <p>{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reasons;