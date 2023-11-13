import React from 'react'; 
import AboutInfo from "../about/AboutInfo/AboutInfo";
import OurData from './AboutInfo/OurData/OurData';
import { Card } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Footer from '../../common/Footer/Footer';

const About = () => {
  return (
    <>
      <Container>
        <Card />
        <AboutInfo />
        <OurData />
      </Container>
      <Footer />
    </>
  );
};

export default About;
