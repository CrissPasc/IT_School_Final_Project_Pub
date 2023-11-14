import React from "react";
import { ruteAdmin } from "../constants/rute";
import { useState } from "react";
import useLog from "../hooks/useLog";
import { Container, MenuContainer } from "../components/menu/Menu.style";
import CardsAdmin from "../common/Card/CardsAdmin";
import Footer from "../common/Footer/Footer";

const HomeAdmin = () => {
  const [numeUser, setNumeUser] = useState("Cristina");
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer />

      <CardsAdmin
        numeUser={numeUser}
        setNumeUser={setNumeUser}
        rute={ruteAdmin}
      />

      <Footer />
    </Container>
  );
};

export default HomeAdmin;
