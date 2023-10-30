import React, { useEffect } from "react";
import { Container, MenuContainer } from "./Menu.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import CardMenu from "../../common/Card/Card";

const Menu = () => {
  useLog("Salut", "err");
  return (
    <Container>
      {/* <NavbarBootstrap rute={ruteAdmin} /> */}
      <MenuContainer>unde sunt???</MenuContainer>
      <CardMenu></CardMenu>
    </Container>
  );
};

export default Menu;
