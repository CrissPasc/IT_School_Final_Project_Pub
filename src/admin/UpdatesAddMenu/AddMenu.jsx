import React, { useState, useContext } from "react";
import { ruteAdmin } from "../../constants/rute";
import { AddButton, ContainerAdd, ContainerButton } from "./AddMenu.style";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { MenuContext } from "../../store/Udates/contextUpdates";
import { addToMenu, closeMessage } from "../../store/Udates/actionsUpdates";
import Footer from "../../common/Footer/Footer";

const AddMenu = () => {
  const { stateGlobalMenu, dispatchMenu } = useContext(MenuContext);

  const [form, setForm] = useState({
    name: "",
    section: "",
    sectiondescription: "",
    image: "",
    description: "",
    price: "",
    quantity: "",
    details: "",
  });

  const changeFormData = (name, value) => {
    const localForm = { ...form };
    localForm[name] = value;

    setForm(localForm);
  };

  const submit = () => {
    const actionAdd = addToMenu(form, dispatchMenu);
    dispatchMenu(actionAdd);
  };

  const closeSubmit = () => {
    const functionOfClose = closeMessage();
    dispatchMenu(functionOfClose);
  };

  console.log(stateGlobalMenu);
  return (
    <>
      <ContainerAdd rute={ruteAdmin}>
        {/* pun aici rute admin?? */}
        <h1>ADD</h1>
        <div>
          <Alert
            show={stateGlobalMenu?.displayAddMenuMessage}
            variant={
              stateGlobalMenu?.addMenuMessage === "POST request failed"
                ? "danger"
                : "success"
            }
          >
            <Alert.Heading>My Alert</Alert.Heading>
            <p style={{ width: "300px" }}>{stateGlobalMenu?.addMenuMessage}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={closeSubmit} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        </div>
        <div>
          {stateGlobalMenu.isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Form style={{ width: "100%" }}>
              {Object.keys(form).map((key, index) => (
                <Form.Group key={key} controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                  </Form.Label>
                  <Form.Control
                    onBlur={(e) => {
                      changeFormData(key, e.target.value);
                    }}
                    placeholder={
                      key.charAt(0).toUpperCase() + key.substring(1, key.length)
                    }
                  />
                </Form.Group>
              ))}
            </Form>
          )}
        </div>
        <ContainerButton>
          {!stateGlobalMenu.isLoading && (
            <AddButton onClick={submit}>Add Menu</AddButton>
          )}
        </ContainerButton>
      </ContainerAdd>
      <Footer />
    </>
  );
};
export default AddMenu;
