import React, { useEffect, useState } from "react";
import { Container, MenuContainer } from "./Menu.style";
import { Card, Button, Alert, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import Cardmenu from "../../common/Card/Card";
import { Link, useParams } from "react-router-dom";
import { CardContainer, CardsContainer } from "../../common/Card/Card.style";

const Meals = () => {
  useLog("Salut", "err");
  const [menucard, setMenucard] = useState(undefined);
  const [menucardfiltered, setMenucardfiltered] = useState(undefined);
  const [error, setError] = useState(false);
  const { name } = useParams();
  console.log(name);

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
    if (name) {
      const filteredMenu = menucard?.filter((item) => item.name === name); // facem filter

      setMenucardfiltered(filteredMenu);
      console.log(filteredMenu);
    }
  }, [name, menucard]);

  console.log(menucardfiltered);

  return (
    // ar cam trebui mutat cumva in cards si facuta maparea ca acolo unde e comentat
    // pt a simplifica codul
    <CardsContainer>
      <Alert show={error} variant="danger">
        <Alert.Heading>My Alert</Alert.Heading>
        <p style={{ width: "300px" }}>Failed to load Menu</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setError(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>

      {menucardfiltered?.map((menu, index) => (
        <CardContainer key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menu?.image} />
          <Card.Body>
            <Card.Title>{menu.name}</Card.Title>
            <Card.Text>{menu.description}</Card.Text>
            {/* <Link to={`/meals/${menu.section}`}>
              <Button variant="primary">See {menu.name} details</Button>
            </Link> */}
            {/* asta ramane de vazut daca vrem sa mai deschidem o alta pagina pt 
fiecare fel u=in parte cu o poza mai mare si cu si mai multe detalii*/}
          </Card.Body>
        </CardContainer>
      ))}
    </CardsContainer>

    // <Container>
    //   {/* <NavbarBootstrap rute={ruteAdmin} /> */}
    //   <MenuContainer>
    //     {/* Iterate through filtered menu items to display */}
    //     {menucardfiltered.map((item) => (
    //       <Cardmenu key={item.id} item={item} />
    //     ))}
    //   </MenuContainer>
    // </Container>
  );
};

export default Meals;
