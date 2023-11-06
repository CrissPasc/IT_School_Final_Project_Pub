import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import MenuBackground from "../../media/images/menu-background.png";
import { Card, Button } from "react-bootstrap";
import {
  BLACK_COLOR,
  GOLD_COLOR_HEX,
  WHITE_COLOR,
} from "../../constants/colors";

// de facut un background de comanda!!

export const Container = styled.div`
  background: url(${MenuBackground});
  // color: black;
  // display: flex;

  // height: 100vh;
  // position: relative;
  background-repeat: round;
`;

export const OrderContainer = styled.div`
  margin: 48px;
  display: flex;
  justify-self: center;
  /* align-self: center; */
  ////
  flex-direction: row;
  /* align-items: center; */
  ////
  border-radius: 50px;
  ////
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
  }
`;

export const MenuContainer = styled.div`
  margin: 0px 48px;
  display: flex;
  /* justify-self: center; */
  /* align-self: center; */
  ////
  flex-direction: row;
  /* align-items: center; */
`;

export const AccountContainer = styled.div``;

export const YourOrderContainer = styled.div``;

export const OrderCalculator = styled.div``;

export const PlusImg = styled.img``;

export const MinusImg = styled.img``;

export const Total = styled.div``;

export const Test = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    display: none;
  }
`;

export const OrderonlineSectionsContainer = styled.div`
  display: flex;
  padding: 50px 15px 30px 15px;
  flex-direction: row;
  background: ${WHITE_COLOR};
`;

export const OrderonlineSections = styled.div`
  padding: 8px;
`;

export const LinkCostum = styled(Link)`
  padding: 8px;
`;

export const CheckoutButton = styled(Button)`
  background: #cf3e02;

  border: solid 1px ${BLACK_COLOR};
  transition: background-color 0.5s ease, color 0.5s ease;

  color: ${WHITE_COLOR};
  font-weight: 700;

  width: 12rem;
  height: 4rem;

  border-radius: 50px;

  &:hover {
    background: #e05216;
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;
