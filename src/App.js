import React from 'react';


import './App.css';
import { Container} from './styles';

import Logo from './assets/images/logo.png';
import GitHubLogo from './assets/images/github-icon.png'
import LinkedInLogo from './assets/images/linkedin-icon.png'

import Home from './components/Home';

import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  

  return(
     <>
      <Home/>
      <Container type="light" id="about"/>
      <Technologies/>
      <Projects/>
      
      <Footer/>
     </>
     )
}

export default App;
