import React from 'react';

import timeline from '../Data/timeline';

function Timeline() {

  return (

    <section className="timeline">

      <h2>Our Journey Together</h2>

      <p className="timeline-subtitle">

        Every chapter with you has been my favorite one.

      </p>

      <div className="timeline-container">

        {timeline.map((memory, index) => (

          <div className="timeline-card" key={index}>

            <span className="timeline-date">{memory.date}</span>

            <h3>{memory.title}</h3>

            <p>{memory.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Timeline;