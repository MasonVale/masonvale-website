import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSlideshow from '../components/ServicesSlideshow';
import Assurance from '../components/Assurance';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <About />
      <div id="services">
        <ServicesSlideshow />
      </div>
      <Assurance />
      <Contact />
    </div>
  );
};

export default HomePage;