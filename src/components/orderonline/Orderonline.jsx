import React, { useEffect, useState } from "react";
import {
  AccountContainer,
  Container,
  MenuContainer,
  MinusImg,
  OrderContainer,
  PlusImg,
  YourOrderContainer,
  Total,
  OrderCalculator,
  CheckoutButton,
  OrderonlineSections,
  OrderonlineSectionsContainer,
} from "./Orderonline.style";
import { Alert, Button, Card, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import NavbarBootstrap from "../../common/Navbar/Navbar";
import CardMenu from "../../common/Card/Card";
import CardOrderonline from "../../common/Card/Cardorderonline";
import { Link } from "react-router-dom";
import { CardTitle, LinkCustom } from "../../common/Card/Card.style";
import CardOrderonlineSectioned from "../../common/Card/CardorderonlinSectioned";

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
          <AccountContainer></AccountContainer>
          <YourOrderContainer>
            <OrderCalculator>
              <PlusImg />
              <MinusImg />
            </OrderCalculator>
            <Total></Total>
            <CardTitle>Minimum order for delivery is $30.00</CardTitle>
            <CardTitle>Orders over $50.00 have FREE delivery</CardTitle>
            <LinkCustom to={`/menus`}>
              <CheckoutButton>Go to checkout </CheckoutButton>
            </LinkCustom>
          </YourOrderContainer>
        </OrderContainer>
      </MenuContainer>
    </Container>
  );
};

export default Orderonline;
