import React, { useEffect } from "react";
import { Container } from "./Homepage.style";
import { Button, Card, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";

import CarouselSlides from "../../common/Carousel/CarouselSlides";
import Logo from "./Logo";

// de unde stie sa se lege cu pagina de /homepage

// avem dublat din rute ??
const Homepage = () => {
  useLog("Salut", "err");
  return (
    <Container>
      {/* <NavbarBootstrap rute={ruteAdmin}></NavbarBootstrap> */}
      <CarouselSlides></CarouselSlides>
      <Logo></Logo>
    </Container>
  );
};

export default Homepage;
