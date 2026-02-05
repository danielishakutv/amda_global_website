import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BrandPillars from './components/BrandPillars';
import Services from './components/Services';
import HowWeWork from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className='min-h-screen bg-white text-primary font-sans antialiased overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <BrandPillars />
      <Services />
      <HowWeWork />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
