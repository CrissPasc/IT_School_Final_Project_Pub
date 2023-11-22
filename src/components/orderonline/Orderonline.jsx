import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, NavDropdown } from "react-bootstrap";
import {
  AccountContainer,
  CheckoutButton,
  Container,
  Delivery,
  MenuContainer,
  OrderCalculator,
  OrderContainer,
  OrderonlineSections,
  OrderonlineSectionsContainer,
  ParagrafOrder,
  Total,
  YourOrderContainer,
} from "./Orderonline.style";

import { Link } from "react-router-dom";
import { CardTitle, LinkCustom } from "../../common/Card/Card.style";
import CardOrderonlineSectioned from "../../common/Card/CardorderonlinSectioned";
import CartImg from "../../media/icons/add-to-cart.png";
import DeliveryImg from "../../media/icons/delivery.png";
import MinusImg from "../../media/icons/minus-signg.png";
import PickupImg from "../../media/icons/pickup.png";
import PlusImg from "../../media/icons/plus-sign.png";

import { ContorContext } from "../../store/Contor/contextContor";
import Footer from "../../common/Footer/Footer";

const Orderonline = () => {
  const [menucard, setMenucard] = useState(undefined);
  const [total, setTotal] = useState(undefined);
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

  const { stateGlobal, dispatch } = useContext(ContorContext);
  console.log("STATE", stateGlobal);

  // Handle cases where stateGlobalContor might be undefined
  if (!stateGlobal) {
    return <div>Loading...</div>; // Or handle the loading state here
  }

  const { contorValue, cartItems } = stateGlobal;

  const handleAddToCart = (menu) => {
    const existingItem = cartItems.find((item) => item.id === menu.id);

    if (existingItem) {
      existingItem.contorValue += 1;

      dispatch({ type: "UPDATE_CART", payload: cartItems });
      // dispatch({ type: "ADD_TO_CART", payload: item }); // 6Nov
    } else {
      // dispatch({ type: "ADD_TO_CART", payload: { ...menu, contorValue: 1 } }); // 8Nov
    }
  };

  // the contorValue should be accessible as stateGlobal.contorValue

  const handlePlus = (name) => {
    dispatch({ type: "INCREMENT_ITEM", payload: name }); // SCHIMBAT DIN 1!!
    // const actionPlus = contorPlus();
    // dispatchContor(actionPlus); // dispatchContor(contorPlus());
    // console.log("plus");
  };
  const handleMinus = (name) => {
    dispatch({ type: "DECREMENT_ITEM", payload: name });
    // const actionMinus = contorMinus();
    // dispatchContor(actionMinus);
    // console.log("minus");
  };

  // ADUCEM ALTFEL TOTAL
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let x = 0;
    cartItems.forEach((el) => (x += el.price * contorValue));
    setTotal(x);
  }, [cartItems]);

  const cartItemCounts = {}; // Object to store counts for each item
  let totalfinal = 0; // Total price

  // Calculate total and count for each cart item
  cartItems.forEach((item) => {
    cartItemCounts[item.name] = cartItemCounts[item.name] + 1 || 1; // Increment count for the item
    totalfinal += Number(item.price); // Accumulate the total price by converting item.price to a number
  });

  const placeOrder = () => {
    alert(
      `Your order of $${totalfinal.toFixed(2)} has been placed successfully!`
    );
    // Add any additional logic or API calls related to placing the order here
  };

  return (
    <>
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
              <Link to={`/orderonline`}>
                <CheckoutButton>{menu?.section}</CheckoutButton>
              </Link>
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
              <h3 style={{ paddingTop: "40px" }}>The Phoenix Pub</h3>
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
                    marginRight: "15px",
                    marginLeft: "15px",
                  }}
                />
              </div>
              <OrderCalculator>
                {cartItems.map((el) => (
                  <div key={el.id}>
                    <div
                      style={{
                        display: "flex",
                        flexdirection: "row",
                      }}
                    >
                      {" "}
                      {/* TREBUIE PUS CEVA PT A ARATA NR -- DA EROARE CU CE ESTE:*/}
                      {/* <ParagrafOrder>{contorValue}x</ParagrafOrder> */}
                      <ParagrafOrder>{cartItemCounts[el.name]}x</ParagrafOrder>
                      <ParagrafOrder>{el.name}</ParagrafOrder>
                      <ParagrafOrder>= ${el.price}</ParagrafOrder>
                    </div>

                    <img
                      onClick={handlePlus}
                      src={PlusImg}
                      alt="PlusImg"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      onClick={() => handleMinus(el.name)}
                      src={MinusImg}
                      alt="MinusImg"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ))}{" "}
              </OrderCalculator>
              <Total style={{ paddingTop: "20px" }}>
                <h4>Total</h4>$ {totalfinal.toFixed(2)}{" "}
                {/* function to add decimal numbers */}
              </Total>
              <CardTitle></CardTitle>

              <div style={{ textAlign: "center", marginTop: "-20px" }}>
                <CheckoutButton onClick={placeOrder}>
                  Place order!
                </CheckoutButton>
              </div>

              <div
                style={{
                  textAlign: "center",
                  paddingTop: "30px",
                  fontWeight: "bold",
                }}
              >
                <p>Minimum order for delivery is $30.00!</p>
                <p>Orders over $50.00 have FREE delivery!</p>
              </div>
            </YourOrderContainer>
          </OrderContainer>
        </MenuContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Orderonline;

// The provided code consists of two React components related to an online ordering system: Orderonline and CardOrderonlineSectioned. Let's break down each component:

// Orderonline Component:
// State Management:

// Utilizes the useState hook to manage the state of variables like menucard, total, and error.
// Fetches menu sections from the server using the useEffect hook.
// Context Usage:

// Consumes a context (ContorContext) to access and modify global state related to the shopping cart (stateGlobal, dispatch).
// Fetching Data:

// Fetches menu sections from http://localhost:3002/menusections.
// Fetches menu items from http://localhost:3002/menu.
// Cart Handling:

// Implements functions like handleAddToCart, handlePlus, and handleMinus to manage cart items and quantities.
// Calculates and displays the total price of the items in the cart.
// User Interface:

// Displays a list of menu sections as buttons, allowing users to navigate between different sections.
// Renders menu items using the CardOrderonlineSectioned component.
// Provides delivery method options and restaurant information.
// Displays the user's current order with item quantities, prices, and a total.
// Includes buttons to increment/decrement item quantities and place an order.
// CardOrderonlineSectioned Component:
// State and Fetching Data:

// Manages local state variables such as menuSections, menuItems, error, and totalfinal.
// Fetches menu sections and items similar to the Orderonline component.
// Context Interaction:

// Uses the ContorContext to access and update global state related to the shopping cart.
// Card Rendering:

// Maps through menu sections and renders a list of cards for each section.
// Each card represents a menu item and includes an image, name, quantity, details, and price.
// Error Handling:

// Displays an alert if there is an error fetching menu data.
// Event Handling:

// Implements event handlers for adding items to the cart (handleAddToCart and combinedHandle).
// Updates the total price when adding items.
// Common Themes:
// Both components handle errors with an alert.
// They interact with a shared context to manage and synchronize the state of the shopping cart across components.
// The components fetch menu-related data from a server.
// Improvements:
// It appears that some functionality related to incrementing and decrementing quantities may need further refinement, especially in the Orderonline component.
// Ensure proper handling of asynchronous operations, such as data fetching.
// The combinedHandle function in CardOrderonlineSectioned doesn't seem to be functioning as expected; it might need further debugging.
