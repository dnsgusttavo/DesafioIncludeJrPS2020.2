import React from 'react';

import { FooterBox } from './styles';

import Logo from '../../assets/images/logo.png';
import GitHubLogo from '../../assets/images/github-icon.png'
import LinkedInLogo from '../../assets/images/linkedin-icon.png'
const Footer = () => {
    return(
        <FooterBox>
        <img src={Logo} alt="logo"/>
        <p>Copyright © 2020 Gustavo Moraes Maltez</p>

        <ul>
          <li><a href="https://github.com/dnsgusttavo"><img src={GitHubLogo} alt="GitHub Logo"/></a></li>
          <li><a href="https://www.linkedin.com/in/gustavommaltez/"><img src={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
        </ul>
      </FooterBox>
    )
}

export default Footer;