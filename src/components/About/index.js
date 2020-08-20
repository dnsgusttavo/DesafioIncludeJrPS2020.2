import React from 'react';

import ProfilePic from '../../assets/images/gustavo.png'
import { Container } from '../../styles';
import { AboutBox, Infos } from './styles';

const About = () => {
    return(
        <Container type="light" id="about">
            <AboutBox>        
                <img src={ProfilePic} alt="Gustavo Profile Photo"/>
                <Infos>
                    <h1>Sobre Mim</h1>
                    <p>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Natural da Bahia, fui pela primeira vez para o Ceará aos 18 anos para cursar a faculdade dos meus sonhos: Engenharia de Software. Sempre fui apaixonado por tecnologia, eletrônica e computadores. Comecei a programar aos 14 anos, iniciei criando servidores e editando plugins de Minecraft, sempre gostei muito do jogo e decidi que iria criar meu próprio servidor, e para isso era necessário saber programar, foi ai que tudo começou.
                    <br/>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Aos 16 anos conheci o Arduino em uma oficina de robótica na escola e aprendi a programar em c++, desenvolvendo projetos de automação residencial. Aos 17 anos surgiu a necessidade de integrar um dos projetos com um aplicativo de celular, e então eu conheci o ReactNative e toda a stack javascript, a qual desenvolvo atualmente e é a minha paixão. No momento meu foco é a stack MERN, mais voltado para o desenvolvimento de aplicativos. Ao longo desses anos desenvolvi alguns projetos, que estão disponíveis no final dessa página.
                   </p>    
                </Infos>
            </AboutBox>
        </Container>
    )
}

export default About;