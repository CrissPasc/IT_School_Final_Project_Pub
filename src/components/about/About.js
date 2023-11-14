import React from 'react'; 
import AboutInfo from "../about/AboutInfo/AboutInfo";
import OurData from './AboutInfo/OurData/OurData';
import { Card } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import CarouselSlides from "../../common/Carousel/CarouselSlides";
import {SpaceSection } from '../homepage/Homepage.style';
import Logo from '../homepage/Logo';

const About = () => {
  return (
    <Container>
      <Logo></Logo>
      <Card></Card>
      <AboutInfo></AboutInfo>
     
      
      <SpaceSection></SpaceSection>

      <CarouselSlides></CarouselSlides>
      <OurData></OurData>
      <SpaceSection></SpaceSection>
    </Container>
    
  );
};



export default About;
