import React from 'react';
import './App.css';

import Hero from './Components/Hero';
import Countdown from './Components/Countdown';
import Timeline from './Components/Timeline';
import Gallery from './Components/Gallery';
import LoveLetter from './Components/LoveLetter';
import Reasons from './Components/Reasons';
import Quiz from './Components/Quiz';
import Footer from './Components/Footer';
import FloatingHearts from './Components/FloatingHearts';

const App = () => {
  return (
    <main className="app">
      <FloatingHearts />

      <Hero />

      <section id="countdown" className="section">
        <Countdown />
      </section>

      <section id="timeline" className="section">
        <Timeline />
      </section>

      <section id="gallery" className="section">
        <Gallery />
      </section>

      <section id="letter" className="section">
        <LoveLetter />
      </section>

      <section id="reasons" className="section">
        <Reasons />
      </section>

      <section id="quiz" className="section">
        <Quiz />
      </section>

      <Footer />
    </main>
  );
};

export default App;