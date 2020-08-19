import React from 'react';

import node from '../../assets/images/node.png'
import react from '../../assets/images/react.png'
import git from '../../assets/images/git.png'
import figma from '../../assets/images/figma.png'
import firebase from '../../assets/images/firebase.png'
import mongo from '../../assets/images/mongo.png'

import {Container } from '../../styles';
import { Tools, ToolsGrid } from './styles';

const Technologies = () => {
    return(
        <Container type="dark" id="tools">
        <Tools>
          <h1>Ferramentas/Tecnologias</h1>
          <ToolsGrid>
            <img src={node} alt="Image"/>
            <img src={react} alt="Image"/>
            <img src={git} alt="Image"/>
            <img src={figma} alt="Image"/>
            <img src={firebase} alt="Image"/>
            <img src={mongo} alt="Image"/>
          </ToolsGrid>
        </Tools>
      </Container>
    )
}

export default Technologies;