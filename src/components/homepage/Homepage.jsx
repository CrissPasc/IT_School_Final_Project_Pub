import React, { useEffect } from "react";
import { Container } from "./Homepage.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
// import LogoPic from "./../../media/logo/logo.png";

// avem dublat din rute -->> voi pune acolo doar poza sa schimbe in Navbar
const Homepage = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <NavbarBootstrap rute={ruteAdmin}></NavbarBootstrap>
    </Container>
  );
};

export default Homepage;
