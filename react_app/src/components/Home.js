import React from 'react';
import Footer from './Footer';
import Hero from './home/Hero';
import Slideshow from './home/Slideshow';

function Home() {
  return (
    <div>
      <h1>This is Homepage</h1>
      <Slideshow />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
