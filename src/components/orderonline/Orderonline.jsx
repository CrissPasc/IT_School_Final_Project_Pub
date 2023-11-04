import React, { useEffect } from "react";
import { Container, MenuContainer } from "./Orderonline.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import CardMenu from "../../common/Card/Card";
import CardOrderonline from "../../common/Card/Cardorderonline";

const Orderonline = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer>
        <CardOrderonline />
      </MenuContainer>
    </Container>
  );
};

export default Orderonline;
