import React, { useEffect, useState } from "react";
import { Container, MenuContainer } from "./Menu.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import CardMenus from "../../common/Card/CardMenus";
import { useParams } from "react-router";


const Menus = () => {
  useLog("Salut", "err");
  const [menucard, setMenucard] = useState(undefined);
  const [menucardfiltered, setMenucardfiltered] = useState(undefined);
  const [error, setError] = useState(false);
  const { section } = useParams();
  console.log(section);

  useEffect(() => {
    fetch(`http://localhost:3002/menu`)
      .then((response) => response.json())
      .then((menu) => {
        setMenucard(menu);
        console.log(menu);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  console.log(menucard);

  useEffect(() => {
    if (section) {
      const filteredMenu = menucard?.filter((item) => item.section === section); // facem lifter

      setMenucardfiltered(filteredMenu);
      console.log(filteredMenu);
    }
  }, [section, menucard]);

  console.log(menucardfiltered);

  return (
    <Container>
      <MenuContainer>
        <CardMenus />
      </MenuContainer>
    </Container>
  );
};

export default Menus;
