import React, { useEffect, useState } from "react";

import { Card, Button, Alert, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import {
  CardImage,
  CardButton,
  CardBody,
  CardContainer,
  CardsContainer,
} from "./Card.style";
import { ruteAdmin } from "../../constants/rute";
import { Link, useParams } from "react-router-dom";

const CardMenus = () => {
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
          <CardImage variant="top" src={menu?.image} />
          <CardBody>
            <Card.Title>{menu.name}</Card.Title>
            <Card.Text>{menu.description}</Card.Text>
            <Link to={`/meals/${menu.name}`}>
              <CardButton variant="primary">See {menu.name} details</CardButton>
            </Link>
          </CardBody>
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

export default CardMenus;
