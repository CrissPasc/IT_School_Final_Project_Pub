import React, { useEffect, useState } from "react";

import { Card, Button, Alert, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import {
  CardImage,
  CardContainer,
  CardsContainer,
  CardBody,
  CardButton,
} from "./Card.style";
import { ruteAdmin } from "../../constants/rute";
import { Link, useParams } from "react-router-dom";

const CardMeals = () => {
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
        <CardContainer key={index}>
          <CardImage variant="top" src={menu?.image} />
          <CardBody>
            <Card.Title>{menu.name}</Card.Title>
            <Card.Text>{menu.description}</Card.Text>
            <Card.Text>Ingredients: {menu.details}</Card.Text>
            <Card.Text>{menu.quantity}</Card.Text>
            <Link to={`/orderonline`}>
              {/* de adaugat sa ma duca exact in sectiune!! */}
              <CardButton variant="primary">
                Click here to order online our {menu.name}
              </CardButton>
            </Link>
          </CardBody>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CardMeals;
