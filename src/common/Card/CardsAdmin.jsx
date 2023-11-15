import { useContext, useEffect, useState } from "react";
import { Card, Button, Alert, Modal } from "react-bootstrap";
import {
  CardsContainer,
  CardContainer,
  CardBody,
  CardImage,
  EditButton,
  DeleteButton,
  AddButton,
} from "./Card.style";
import { Link, useParams } from "react-router-dom";
import PicBrugerMenu from "../../media/images/burgers-three-mini.jpg";
import PicPizzaMenu from "../../media/images/pizza-table.jpg";
import { MenuContext } from "../../store/Udates/contextUpdates";
import {
  deleteMenuAction,
  deleteReset,
} from "../../store/Udates/actionsUpdates";

const CardsAdmin = () => {
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

      <Link to={`/admin/add`}>
        <AddButton>Add a new meal</AddButton>
      </Link>

      {menucard?.map((menu, index) => (
        <CardContainer key={index}>
          <CardImage variant="top" src={menu?.image} />
          <CardBody>
            <Card.Title>{menu?.name}</Card.Title>
            <Card.Text>{menu?.quantity}</Card.Text>
            <Card.Text>{menu?.details}</Card.Text>
            <Card.Text>$ {menu?.price}</Card.Text>
            <Link to={`/admin/update/${menu?.name}`}>
              <EditButton>Update {menu?.name}</EditButton>
            </Link>
          </CardBody>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CardsAdmin;
