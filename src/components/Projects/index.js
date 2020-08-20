import React, { useState, useEffect } from 'react';
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
import web03 from '../../assets/images/web03.png';
import web04 from '../../assets/images/web04.png';

import chevronL from '../../assets/images/chevronL.png';
import chevronR from '../../assets/images/chevronR.png';

import { Container } from '../../styles';
import { CarouselItem, Chevron, ProjectsBox } from './styles';

const Projects = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(9);
    const [numberOfCards, setNumberOfCards] = useState(1);

    const handleCarouselCards = () =>{
      if(window.innerWidth < 950)
        setNumberOfCards(1)
      else if(window.innerWidth < 1400)
        setNumberOfCards(2)
      else
        setNumberOfCards(3);
    }

    useEffect(() => {
      handleCarouselCards();
    },[])

    window.addEventListener('resize', handleCarouselCards)

    return(
      <Container type="light" id="projects">
          <ProjectsBox>
          <h1 id="title">Meus Projetos</h1>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={numberOfCards}
            gutter={200}
            leftChevron={<Chevron src={chevronL}/>}
            rightChevron={<Chevron src={chevronR}/>}
            chevronWidth={100}
            infiniteLoop={true}
          >
            
            <CarouselItem>
              <img src={app02a} alt="PurpleDisplay APP"/>
              <h1>App de estatísticas p/ instagram</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={web04} alt="Instagram Script"/>
              <h1>Script de obtenção e tratamento de dados do instagram</h1>
            </CarouselItem>
            
            <CarouselItem>
              <img src={app02b} alt="PurpleDisplay APP"/>
              <h1>App de estatísticas p/ instagram</h1>
            </CarouselItem>
            
            <CarouselItem>
              <img src={app03a} alt="SocialApp"/>
              <h1>App rede social</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app03b} alt="SocialApp"/>
              <h1>App rede social</h1>
            </CarouselItem>
            
            <CarouselItem>
              <img src={web03} alt="Online Class App"/>
              <h1>Versão o web do do app de aulas</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app04} alt="Online Class App"/>
              <h1>App de aulas</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app05} alt="Dev Radar"/>
              <h1>Dev Radar</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={web02} alt="Marketplace App"/>
              <h1>Marketplace de coleta de resíduos</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={app01} alt="IMC App"/>
              <h1>APP de monitoramento de IMC</h1>
            </CarouselItem>

            <CarouselItem>
              <img src={web01} alt="Lib APP"/>
              <h1>Sistema de gestão de biblioteca online</h1>
            </CarouselItem>

          </ItemsCarousel>
          </ProjectsBox>
      </Container>
    )
}

export default Projects;