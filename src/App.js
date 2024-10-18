import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Services />
      <Testimonials />
      <Footer /> {}
    </div>
  );
}

export default App;
