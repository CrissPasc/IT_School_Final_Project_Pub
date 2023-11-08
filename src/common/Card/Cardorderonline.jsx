import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import {
  CardsContainer,
  CardContainer,
  CardBody,
  CardImage,
  OrderonlineButton,
} from "./Card.style";
import { Link } from "react-router-dom";
import PicBrugerMenu from "../../media/images/burgers-three-mini.jpg";
import PicPizzaMenu from "../../media/images/pizza-table.jpg";

const CardOrderonline = () => {
  const [menuscard, setMenuscard] = useState(undefined);
  const [menucard, setMenucard] = useState(undefined);
  const [error, setError] = useState(false);

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

      {menucard?.map((menu, index) => (
        <CardContainer key={index}>
          <CardImage variant="top" src={menu?.image} />
          <CardBody>
            <Card.Title>{menu?.name}</Card.Title>
            <Card.Text>{menu?.quantity}</Card.Text>
            <Card.Text>{menu?.details}</Card.Text>
            <Card.Text>{menu?.price}</Card.Text>
            <Link to={`/orderonline}`}>
              {/* // ADD MODAL!!! */}
              <OrderonlineButton>Add {menu?.name} to cart</OrderonlineButton>
            </Link>
          </CardBody>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CardOrderonline;
