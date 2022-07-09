import './App.scss';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='mainApp'>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    
    </div>
  );
}

export default App;
