import React, { useEffect } from "react";
import { Container, MenuContainer } from "./Menu.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import CardMenus from "../../common/Card/CardMenus";

const Menus = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer>
        <CardMenus />
      </MenuContainer>
    </Container>
  );
};

export default Menus;
