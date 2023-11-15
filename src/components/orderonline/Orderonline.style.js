import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINT_LARGE, BREAKPOINT_MEDIUM, BREAKPOINT_MOBILE, BREAKPOINT_SMALL } from "../../constants/breakpoints";
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

export const ParagrafOrder = styled.div`
  margin-right: 5px;
`;

export const OrderContainer = styled.div`
  margin: 20px;
  padding: 25px;
  background: white;
  border-radius: 20px;
  // min-height: auto;
  height: 85vh;
  // max-height: 100%;
  min-width: 275px;

  display: flex;
  flex-direction: column;
  // flex: 1;
  overflow: auto;
  

  @media only screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    height: 78vh;
    margin-bottom: 40px;
  }

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
  }
`;

export const MenuContainer = styled.div`
  // margin: 0px 48px;
 // display: flex;
  /* justify-self: center; */
  /* align-self: center; */
  ////
  //flex-direction: row;
  /* align-items: center; */
  // height: auto;
  display: grid;
  grid-template-columns: 5fr 1fr;

  @media only screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    grid-template-columns: 1fr;
  }
  //width: 100vw;
`;

export const AccountContainer = styled.div`
  // margin: 40px;
  padding: 20px 0;
`;

export const YourOrderContainer = styled.div``;

export const Delivery = styled.div`
  padding: 20px 0 40px;;
`;

export const OrderCalculator = styled.div``;

export const PlusImage = styled.img``;

export const MinusImage = styled.img``;

export const Total = styled.div``;

export const Test = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    display: none;
  }
`;

export const OrderonlineSectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px 0;
  background: rgba(0,0,0,0.6);
  border-radius: 0 0 30px 30px;

  @media only screen and (max-width: ${BREAKPOINT_LARGE}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: ${BREAKPOINT_MOBILE}) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const OrderonlineSections = styled.div`
  padding: 20px 0;
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
