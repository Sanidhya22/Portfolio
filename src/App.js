import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <div className='mainApp'>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
