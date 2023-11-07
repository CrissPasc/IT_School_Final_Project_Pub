import React, { useContext, useEffect, useState } from "react";
import {
  AccountContainer,
  Container,
  MenuContainer,
  MinusImage,
  OrderContainer,
  PlusImage,
  YourOrderContainer,
  Total,
  OrderCalculator,
  CheckoutButton,
  OrderonlineSections,
  OrderonlineSectionsContainer,
  Delivery,
} from "./Orderonline.style";
import { Alert, Button, NavDropdown, Navbar } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";

import CardOrderonline from "../../common/Card/Cardorderonline";
import { Link } from "react-router-dom";
import { CardTitle, LinkCustom } from "../../common/Card/Card.style";
import CardOrderonlineSectioned from "../../common/Card/CardorderonlinSectioned";
import CartImg from "../../media/icons/add-to-cart.png";
import DeliveryImg from "../../media/icons/delivery.png";
import PickupImg from "../../media/icons/pickup.png";
import PlusImg from "../../media/icons/plus-sign.png";
import MinusImg from "../../media/icons/minus-signg.png";

import { contorMinus, contorPlus } from "../../store/Contor/actionsContor";
import { ContorContext } from "../../store/Contor/contextContor";

const Orderonline = () => {
  const [menucard, setMenucard] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/menusections`)
      .then((response) => response.json())
      .then((menu) => {
        setMenucard(menu);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  const { stateGlobalContor, dispatch } = useContext(ContorContext);
  console.log(stateGlobalContor);

  // Handle cases where stateGlobalContor might be undefined
  if (!stateGlobalContor) {
    return <div>Loading...</div>; // Or handle the loading state here
  }

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handlePlus = (itemId) => {
    dispatch({ type: "INCREMENT_ITEM", payload: itemId });
    // const actionPlus = contorPlus();
    // dispatchContor(actionPlus); // dispatchContor(contorPlus());
    // console.log("plus");
  };
  const handleMinus = (itemId) => {
    dispatch({ type: "DECREMENT_ITEM", payload: itemId });
    // const actionMinus = contorMinus();
    // dispatchContor(actionMinus);
    // console.log("minus");
  };

  const { contorValue, cartItems } = stateGlobalContor;

  return (
    <Container>
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

      <OrderonlineSectionsContainer>
        {menucard?.map((menu, index) => (
          <OrderonlineSections key={index}>
            <LinkCustom to={`/menus`}>
              <CheckoutButton>{menu?.section}</CheckoutButton>
            </LinkCustom>
          </OrderonlineSections>
        ))}
      </OrderonlineSectionsContainer>

      <MenuContainer>
        {/* <CardOrderonline /> */}
        <CardOrderonlineSectioned />
        <OrderContainer>
          <AccountContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Account"
              menuVariant="light"
            >
              <NavDropdown.Item as={Link} to="/signin">
                Sign in
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <h3>The Phoenix Pub</h3>
            <p>Park Lane 123</p>
            <p>Orlando</p>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Open"
              menuVariant="light"
            >
              <NavDropdown.Item>
                Monday - Thursday: 10:00 am - 00:00 am
              </NavDropdown.Item>
              <NavDropdown.Item>
                Friday - Saturday: 10:00 am - 01:00 am
              </NavDropdown.Item>
              <NavDropdown.Item>Sunday: 10:00 am - 11:00 pm</NavDropdown.Item>
            </NavDropdown>
          </AccountContainer>

          <Delivery>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<h4>Delivery method</h4>}
              menuVariant="light"
            >
              <NavDropdown.Item>
                <div style={{ display: "flex", flexdirection: "row" }}>
                  <h5>Delivery</h5>
                  <img
                    src={DeliveryImg}
                    alt="DeliveryImg"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "5px",
                    }}
                  />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <div style={{ display: "flex", flexdirection: "row" }}>
                  <h5>Pickup</h5>
                  <img
                    src={PickupImg}
                    alt="User"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "5px",
                    }}
                  />
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Delivery>

          <YourOrderContainer>
            <div style={{ display: "flex", flexdirection: "row" }}>
              <h4>Your order</h4>
              <img
                src={CartImg}
                alt="CartImg"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "5px",
                }}
              />
            </div>
            <OrderCalculator>
              {cartItems} {contorValue}
              {/* <PlusImage /> */}
              <Button onClick={handleMinus}>
                <img
                  src={PlusImg}
                  alt="PlusImg"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "5px",
                  }}
                />
              </Button>
              {/* <MinusImage /> */}
              <Button onClick={handlePlus}>
                <img
                  src={MinusImg}
                  alt="MinusImg"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "5px",
                  }}
                />
              </Button>
            </OrderCalculator>
            <Total>
              <h4>Total</h4>
            </Total>
            <CardTitle></CardTitle>

            <LinkCustom to={`/menus`}>
              <CheckoutButton>Go to checkout </CheckoutButton>
            </LinkCustom>
            <p>Minimum order for delivery is $30.00</p>

            <p>Orders over $50.00 have FREE delivery</p>
          </YourOrderContainer>
        </OrderContainer>
      </MenuContainer>
    </Container>
  );
};

export default Orderonline;
