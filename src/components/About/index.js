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
                    <p>It is a long hat it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>    
                </Infos>
            </AboutBox>
        </Container>
    )
}

export default About;