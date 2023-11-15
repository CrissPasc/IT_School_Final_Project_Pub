import { useContext, useEffect, useState } from "react";
import { Card, Button, Alert, Modal } from "react-bootstrap";
import {
  CardsContainer,
  CardContainer,
  CardBody,
  CardImage,
  EditButton,
  DeleteButton,
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
  const [menucardfiltered, setMenucardfiltered] = useState(undefined);
  const [mealcard, setMealcard] = useState(undefined);
  const [error, setError] = useState(false);

  const { name } = useParams();

  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  const { stateGlobalMenu, dispatchMenu } = useContext(MenuContext);

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

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:3002/menu/${name}`) // id??
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
    const actionOfDelete = deleteMenuAction(name, dispatchMenu); // id??
    dispatchMenu(actionOfDelete);
  };

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
            <Card.Title>{menu?.name}</Card.Title>
            <Card.Text>{menu?.quantity}</Card.Text>
            <Card.Text>{menu?.details}</Card.Text>
            <Card.Text>{menu?.price}</Card.Text>
            <Link to={`/admin/edit/${menu?.id}`}>
              {/* AICI ERA MAREA BUBA!!! AM SCHIMBAT IN ID */}
              <EditButton>Edit {menu?.name}</EditButton>
            </Link>

            <DeleteButton onClick={() => setShowModal(true)} variant="danger">
              Delete {menu?.name}
            </DeleteButton>
          </CardBody>
        </CardContainer>
      ))}

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
    </CardsContainer>
  );
};

export default UpdateCardAdmin;
