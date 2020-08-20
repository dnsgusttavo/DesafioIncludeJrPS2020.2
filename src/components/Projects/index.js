import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import app01 from '../../assets/images/app01.png';
import app02a from '../../assets/images/app02a.png';
import app02b from '../../assets/images/app02b.png';
import app03a from '../../assets/images/app03a.png';
import app03b from '../../assets/images/app03b.png';
import app04 from '../../assets/images/app04.png';
import app05 from '../../assets/images/app05.png';
import web01 from '../../assets/images/web01.png';
import web02 from '../../assets/images/web02.png';

import chevronL from '../../assets/images/chevronL.png';
import chevronR from '../../assets/images/chevronR.png';

import { Container } from '../../styles';
import { CarouselItem, Chevron, ProjectsBox } from './styles';

const Projects = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return(
      <Container type="light" id="projects">
          <ProjectsBox>
          <h1 id="title">Meus Projetos</h1>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={200}
            leftChevron={<Chevron src={chevronL}/>}
            rightChevron={<Chevron src={chevronR}/>}
            chevronWidth={100}
            infiniteLoop={true}
          >

            <CarouselItem>
              <img src={app02a} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={web01} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app01} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={web02} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app03a} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app03b} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app05} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app04} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>
            
            <CarouselItem>
              <img src={app02b} alt="App Image"/>
              <h1>Sample Text</h1>
            </CarouselItem>

            
          
          </ItemsCarousel>
          </ProjectsBox>
      </Container>
    )
}

export default Projects;