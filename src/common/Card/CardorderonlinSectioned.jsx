import { useContext, useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import {
  CardContainer,
  CardBody,
  CardImage,
  OrderonlineButton,
} from "./Card.style";
import { Link, useParams } from "react-router-dom";
import { ContorContext } from "../../store/Contor/contextContor";
import { styled } from "styled-components";
import { BREAKPOINT_XLARGE } from "../../constants/breakpoints";
import { StyledH1 } from "../../components/homepage/Homepage.style";
import { GOLD_COLOR_HEX } from "../../constants/colors";

const CardsContainer = styled.div`
  padding: 0 30px;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // justify-content: center;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  
  @media only screen and (max-width: ${BREAKPOINT_XLARGE}) {
    grid-template-columns: 1fr;
  }
`

const StyledOrderH1 = styled(StyledH1)`
  background: rgba(0,0,0,0.5);
  transition: color 0.2s ease-in-out;
  border-radius: 30px;
  &:hover {color: ${GOLD_COLOR_HEX}; transition: color 0.2s ease-in-out;}
`

const CardOrderonlineSectioned = (usemenu) => {
  const [menuSections, setMenuSections] = useState([]);
  const [menuItems, setmenuItems] = useState([]);
  const { usesection } = useParams();
  const [error, setError] = useState(false);
  const [totalfinal, setTotalfinal] = useState();

  // console.log(usesection);

  useEffect(() => {
    fetch(`http://localhost:3002/menusections`)
      .then((response) => response.json())
      .then((menu) => {
        setMenuSections(menu);
      })
      .catch((error) => {
        setError(true);
        // console.log("Error", error);
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
        // console.log("Error", error);
      });
  }, []);

  const { stateGlobal, dispatch } = useContext(ContorContext);
  const { contorValue, cartItems } = stateGlobal;

  const handleAddToCart = (menu) => {
    const existingItem = cartItems.find((item) => item.name === menu.name);

    if (existingItem) {
      // If item already exists, update its quantity and total
      existingItem.contorValue += 1;
      dispatch({ type: "UPDATE_CART", payload: cartItems });
    } else {
      // If it's a new item, add it to cartItems
      dispatch({ type: "ADD_TO_CART", payload: { ...menu, contorValue: 1 } });
    }
    // Update total
    let updatedTotal = totalfinal + Number(menu.price);
    setTotalfinal(updatedTotal);

    // dispatch({ type: "ADD_TO_CART", payload: menu });
  };

  const handlePlus = (name) => {
    dispatch({ type: "INCREMENT_ITEM", payload: name });

    let updatedTotal =
      totalfinal + Number(cartItems.find((item) => item.name === name).price);
    setTotalfinal(updatedTotal);

    // const actionPlus = contorPlus();
    // dispatchContor(actionPlus); // dispatchContor(contorPlus());
    // console.log("plus");
  };

  const combinedHandle = (menu) => {
    // Calling both functions
    handleAddToCart(menu);
    handlePlus(menu.name);
  };

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
          <StyledOrderH1>{sectionbd.section}</StyledOrderH1>
          <Cards>
            {menuItems
              .filter((item) => item.section === sectionbd.section)
              .map((menu, index, name) => (
                <CardContainer key={index}>
                  <CardImage variant="top" src={menu.image} />
                  <CardBody>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text>{menu.quantity}</Card.Text>
                    <Card.Text>{menu.details}</Card.Text>
                    <Card.Text>$ {menu.price}</Card.Text>

                    {/* <OrderonlineButton onClick={() => handleAddToCart(menu)}> */}
                    <OrderonlineButton onClick={() => combinedHandle(menu)}>
                      {/* nu functioneaza combinedHandle !! ar trebui.. */}
                      Add {menu.name} to cart
                    </OrderonlineButton>
                  </CardBody>
                </CardContainer>
              ))}
          </Cards>
        </div>
      ))}
    </CardsContainer>
  );
};

export default CardOrderonlineSectioned;
