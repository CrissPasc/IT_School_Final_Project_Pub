import React from "react";
import { ruteAdmin } from "../constants/rute";
import { useState } from "react";
import CardAdmin from "../common/Card/CardAdmin";
import useLog from "../hooks/useLog";
import { Container, MenuContainer } from "../components/menu/Menu.style";

const HomeAdmin = () => {
  const [numeUser, setNumeUser] = useState("Cristina");
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer />

      <CardAdmin
        numeUser={numeUser}
        setNumeUser={setNumeUser}
        rute={ruteAdmin}
      />
    </Container>
  );
};

export default HomeAdmin;
