import React, { useEffect } from "react";
import { Container } from "./Menu.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";
import "./../../media/logo/logo.jpg";
import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";

const Menu = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <NavbarBootstrap logo="src/common/pictures/logo.jpg" rute={ruteAdmin} />
      TEST HOMEPAGE
      <Button> TEST</Button>
    </Container>
  );
};

export default Menu;
