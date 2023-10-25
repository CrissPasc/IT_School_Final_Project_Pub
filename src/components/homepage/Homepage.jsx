import React, { useEffect } from "react";
import { Container } from "./Homepage.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import Navbar from "../../common/Navbar/Navbar";
import NavbarBootstrap from "../../common/Navbar/Navbar";

const Homepage = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <NavbarBootstrap logo="./../../media/logo/logo.jpg" rute={ruteAdmin} />
      <Image src="./../../media/logo/logo.jpg" alt="Logo" />
      TEST HOMEPAGE
      <Button> TEST</Button>
    </Container>
  );
};

export default Homepage;
