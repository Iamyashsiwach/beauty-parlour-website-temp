import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="booking"><Booking /></div>
        <div id="gallery"><Gallery /></div>
        <div id="blog"><Blog /></div>
        <div id="contact"><Contact /></div>
      </div>
    </Router>
  );
}

export default App;