import React, { useEffect } from "react";
import { Container, FirstSection, HomeContainer, SecondSection, Section, SpaceSection, StyledH1, ThirdSection } from "./Homepage.style";
import { Button, Card, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";

import CarouselSlides from "../../common/Carousel/CarouselSlides";
import Logo from "./Logo";
import CardContainer, { PngImage, PngWrapper } from "./ContainerFirstSection";
import AboutUs from "./ContainerSecondSection";
import Footer from "../../common/Footer/Footer";


// de unde stie sa se lege cu pagina de /homepage

// avem dublat din rute ??
const Homepage = () => {
  useLog("Salut", "err");
  return (
    <HomeContainer>

      {/* <NavbarBootstrap rute={ruteAdmin}></NavbarBootstrap> */}
      
      <SpaceSection></SpaceSection>

      <FirstSection>
        <PngWrapper>
          <PngImage src='https://cdn-icons-png.flaticon.com/512/7688/7688781.png' />
          <StyledH1>Our Favorites</StyledH1>
          <PngImage src='https://cdn-icons-png.flaticon.com/512/920/920707.png' />
        </PngWrapper>
        <CardContainer></CardContainer>
      </FirstSection>
      <SpaceSection></SpaceSection>

      <CarouselSlides></CarouselSlides>
      <SpaceSection></SpaceSection>

      <SecondSection>
        <AboutUs></AboutUs>
      </SecondSection>
      <SpaceSection></SpaceSection>
      
      <ThirdSection></ThirdSection>
      <SpaceSection></SpaceSection>
      
      <Footer />
    </HomeContainer>
  );
};

export default Homepage;
