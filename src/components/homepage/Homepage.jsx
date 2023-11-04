import React, { useEffect } from "react";
import { Container } from "./Homepage.style";
import { Button, Card, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";

// de unde stie sa se lege cu pagina de /homepage

// avem dublat din rute ??
const Homepage = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <Card></Card>
      {/* <NavbarBootstrap rute={ruteAdmin}></NavbarBootstrap> */}
    </Container>
  );
};

export default Homepage;
