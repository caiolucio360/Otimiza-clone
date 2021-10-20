import React from 'react';
import { ImageDiv, LinksDiv, Container } from './style';
import LogoOtimiza from '../../assets/Logo-Otimiza.png';

export default function NavBar() {
  return (
    <Container>
      <ImageDiv>
        <img src={LogoOtimiza} alt="" />
      </ImageDiv>
      <LinksDiv>
        <a href="aa">INÍCIO</a>
        <a href="aa">QUEM SOMOS</a>
        <a href="aa">SOLUÇÕES</a>
        <a href="aa">LEGISLAÇÃO</a>
      </LinksDiv>
      <a href="aa">ENTRE EM CONTATO</a>
    </Container>
  );
}
