import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import {
  CardsContainer,
  CardContainer,
  CardBody,
  CardImage,
  CardButton,
} from "./Card.style";
import { Link } from "react-router-dom";

const CardMenu = () => {
  const [menuscard, setMenuscard] = useState(undefined);
  const [menucard, setMenucard] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/menusections`)
      .then((response) => response.json())
      .then((menus) => {
        setMenuscard(menus);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3002/menu`)
      .then((response) => response.json())
      .then((menu) => {
        setMenucard(menu);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

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

      {menuscard?.map((menus, menu, index) => (
        <CardContainer key={index}>
          <CardImage variant="top" src={menus?.image} />
          <CardBody>
            <Card.Title>{menus?.section}</Card.Title>
            <Card.Text>{menus?.description}</Card.Text>
            <Link to={`/menus/${menus.section}`}>
              <CardButton>See {menus?.section} Menu</CardButton>
            </Link>
          </CardBody>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CardMenu;
