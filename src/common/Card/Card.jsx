import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { CardsContainer, CardContainer } from "./Card.style";
import { Link } from "react-router-dom";
import PicBrugerMenu from "../../media/images/burgers-three-mini.jpg";
import PicPizzaMenu from "../../media/images/pizza-table.jpg";

const Cardmenu = () => {
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
        <CardContainer key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menus?.image} />
          <Card.Body>
            <Card.Title>{menus?.section}</Card.Title>
            <Card.Text>{menus?.description}</Card.Text>
            <Link to={`/menus/${menus.section}`}>
              <Button variant="primary">See {menus?.section} Menu</Button>
            </Link>
          </Card.Body>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default Cardmenu;
