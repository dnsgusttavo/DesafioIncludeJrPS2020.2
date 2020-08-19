import React from 'react';

import './App.css';

import Home from './components/Home';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  
  return(
     <>
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
      <Footer/>
     </>
     )
}

export default App;
