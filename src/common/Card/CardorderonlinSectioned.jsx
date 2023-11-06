import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import {
  CardContainer,
  CardBody,
  CardImage,
  OrderonlineButton,
  CardsContainer,
} from "./Card.style";
import { Link, useParams } from "react-router-dom";

const CardOrderonlineSectioned = () => {
  const [menuSections, setMenuSections] = useState([]);
  const [menuItems, setmenuItems] = useState([]);
  const { usesection } = useParams();
  const [error, setError] = useState(false);

  console.log(usesection);

  useEffect(() => {
    fetch(`http://localhost:3002/menusections`)
      .then((response) => response.json())
      .then((menu) => {
        setMenuSections(menu);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3002/menu`)
      .then((response) => response.json())
      .then((menus) => {
        setmenuItems(menus);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  return (
    <CardsContainer>
      <Alert show={error} variant="danger">
        <Alert.Heading>Failed to load Menu</Alert.Heading>
        <p style={{ width: "300px" }}>Failed to load Menu</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setError(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>

      {menuSections.map((sectionbd) => (
        <div key={sectionbd.id}>
          <h1>{sectionbd.section}</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {menuItems
              .filter((item) => item.section === sectionbd.section)
              .map((menu, index) => (
                <CardContainer key={index}>
                  <CardImage variant="top" src={menu.image} />
                  <CardBody>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text>{menu.quantity}</Card.Text>
                    <Card.Text>{menu.details}</Card.Text>
                    <Card.Text>{menu.price}</Card.Text>
                    <Link to={`/orderonline}`}>
                      <OrderonlineButton>
                        Add {menu.name} to cart
                      </OrderonlineButton>
                    </Link>
                  </CardBody>
                </CardContainer>
              ))}
          </div>
        </div>
      ))}
    </CardsContainer>
  );
};

export default CardOrderonlineSectioned;
