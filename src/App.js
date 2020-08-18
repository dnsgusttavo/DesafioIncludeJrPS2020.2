import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';

import './App.css';
import { Container, Header, Main, Footer, CarouselItem, Chevron, Projects } from './styles';

import Logo from './assets/images/logo.png';
import GitHubLogo from './assets/images/github-icon.png'
import LinkedInLogo from './assets/images/linkedin-icon.png'

import ex1 from './assets/images/ex1.png';
import ex2 from './assets/images/ex2.png';
import ex3 from './assets/images/ex3.png';

import chevronL from './assets/images/chevronL.png';
import chevronR from './assets/images/chevronR.png';

const App = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
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

      <Container type="light" id="projects">
          <Projects>
          <h1 id="title">Meus Projetos</h1>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={100}
            leftChevron={<Chevron src={chevronL}/>}
            rightChevron={<Chevron src={chevronR}/>}
            chevronWidth={100}
            infiniteLoop={true}
          >

            <CarouselItem>
              <img src={ex1} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={ex3} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={ex2} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={ex3} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>
          
          </ItemsCarousel>
          </Projects>
      </Container>

      <Footer>
        <img src={Logo} alt="logo"/>
        <p>Copyright © 2020 Gustavo Moraes Maltez</p>

        <ul>
          <li><a href="https://github.com/dnsgusttavo"><img src={GitHubLogo} alt="GitHub Logo"/></a></li>
          <li><a href="https://www.linkedin.com/in/gustavommaltez/"><img src={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
        </ul>
      </Footer>
     </>
     )
}

export default App;
