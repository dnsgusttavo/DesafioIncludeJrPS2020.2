import React from 'react';
import './App.css';
import { Container, Header, Main } from './styles';

import Logo from './assets/images/logo.png'
const App = () => {
  return(
     <>
      <Container type="dark" id="main">
        <Header>
          <img src={Logo} alt="logo"/>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#tools">Tecnologias</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="https://www.linkedin.com/in/gustavommaltez/">Linkedin</a></li>
            <li><a href="https://github.com/dnsgusttavo">Github</a></li>
          </ul>
        </Header>
        <Main>
            <h1>Olá! Meu nome é {'\u00A0'}<p>Gustavo Maltez</p>.</h1>
            <h1>Eu sou desenolvedor de software.</h1>
            <a href="#about">ME CONHEÇA MAIS</a>
        </Main>
        
      </Container>
      <Container type="light" id="about"/>
      <Container type="dark" id="tools"/>
      <Container type="light" id="projects"/>
     </>
     )
}

export default App;
