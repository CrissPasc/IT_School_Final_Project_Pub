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

const UpdateCardAdmin = () => {
  const [menucard, setMenucard] = useState(undefined);
  const [mealcard, setMealcard] = useState(undefined);
  const [error, setError] = useState(false);

  const { name } = useParams();

  const [showModal, setShowModal] = useState(false);

  const { stateGlobalMenu, dispatchMenu } = useContext(MenuContext);

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

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:3002/menu/${name}`)
        .then((response) => response.json())
        .then((meal) => {
          setMealcard(meal);
        })
        .catch((error) => {
          setError(true);
          console.log("Error", error);
        });
    }
    const actionOfreset = deleteReset(name, dispatchMenu);
    dispatchMenu(actionOfreset);
  }, [name, dispatchMenu]);

  const deleteMenu = () => {
    const actionOfDelete = deleteMenuAction(name, dispatchMenu);
    dispatchMenu(actionOfDelete);
  };

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
            <Card.Text>{menu?.price}</Card.Text>
            <Link to={`/admin/edit/${menu?.name}`}>
              <EditButton>Edit {menu?.name}</EditButton>
            </Link>

            <DeleteButton onClick={() => setShowModal(true)} variant="danger">
              Delete {menu?.name}
            </DeleteButton>
            <Modal
              show={showModal && !stateGlobalMenu.isDeleted}
              onHide={() => setShowModal(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure?!</Modal.Body>
              {stateGlobalMenu?.deleteMessageFail && (
                <Modal.Body>{stateGlobalMenu?.deleteMessageFail}</Modal.Body>
              )}
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={deleteMenu}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </CardBody>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default UpdateCardAdmin;
