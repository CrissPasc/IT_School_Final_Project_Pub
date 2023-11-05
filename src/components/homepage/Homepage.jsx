import React, { useEffect } from "react";
import { Container, FirstSection, HomeContainer, SecondSection, Section, SpaceSection, StyledH1 } from "./Homepage.style";
import { Button, Card, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";

import CarouselSlides from "../../common/Carousel/CarouselSlides";
import Logo from "./Logo";
import ImageContainer from "./ContainerFirstSection";

// de unde stie sa se lege cu pagina de /homepage

// avem dublat din rute ??
const Homepage = () => {
  useLog("Salut", "err");
  return (
    <HomeContainer>

      {/* <NavbarBootstrap rute={ruteAdmin}></NavbarBootstrap> */}
      <Logo></Logo>
      <SpaceSection></SpaceSection>
      <FirstSection>
        <Image src="https://c0.klipartz.com/pngpicture/982/938/gratis-png-ilustracion-de-pizza-logotipo-de-entrega-de-pizza-cocina-italiana-logotipo-de-conjunto-de-pizza-logotipo-thumbnail.png"></Image>
        <StyledH1>Our Favorites</StyledH1>
        <ImageContainer></ImageContainer>
      </FirstSection>
      <SpaceSection></SpaceSection>
      <CarouselSlides></CarouselSlides>
      <SpaceSection></SpaceSection>
      <SecondSection></SecondSection>
      <SpaceSection></SpaceSection>
      
    </HomeContainer>
  );
};

export default Homepage;
