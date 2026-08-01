import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Happy 1 Year Anniversary ❤️</p>

        <h1>
          Piyush <span className="heart">❤</span> &amp;  Chetna
        </h1>

        <h2>365 Days. Countless Memories.</h2>

        <p className="hero-text">
          Every day with you has been another page in my favorite story.
          Thank you for filling this year with laughter, love, comfort,
          adventures, and memories I'll cherish forever.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById('timeline')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Our Journey ❤️
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById('letter')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Read My Letter 💌
          </button>
        </div>

        <div className="scroll-indicator">
          <p>Scroll to relive our memories ↓</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
