import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import ex1 from '../../assets/images/ex1.png';
import ex2 from '../../assets/images/ex2.png';
import ex3 from '../../assets/images/ex3.png';

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
          </ProjectsBox>
      </Container>
    )
}

export default Projects;