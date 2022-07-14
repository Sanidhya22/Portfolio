import './App.scss';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Particle from './Particles/Particles';

function App() {
  return (
  <>
  <Particle/>
    <div className='mainApp'>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
      </div>
    
    </>
  );
}

export default App;
