import { Card, Button } from "react-bootstrap";
import { styled } from "styled-components";
import {
  BLACK_COLOR,
  GOLD_COLOR_HEX,
  WHITE_COLOR,
} from "../../constants/colors";
import { Link } from "react-router-dom";
import {
  BREAKPOINT_LARGE,
  BREAKPOINT_XLARGE,
} from "../../constants/breakpoints";

export const CardsContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 0px 48px 24px 48px;

  @media only screen and (max-width: ${BREAKPOINT_LARGE}) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled(Card)`
  margin: 48px;
  display: flex;
  justify-self: center;
  align-self: center;
  ////
  flex-direction: row;
  align-items: center;
  ////
  border-radius: 50px;
  ////
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
  }
`;

export const CardImage = styled(Card.Img)`
  border-radius: 20px;
  height: 200px;
  width: 400px;
  position: relative;
  right: 50px;
  filter: grayscale(30%);
  transition: filter 1s ease-out;
  &:hover {
    border: solid 1px ${BLACK_COLOR};
    height: 201px;
    width: 401px;
    transform: scale(1.1);
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: grayscale(0%);
  }
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  //// NU-MI PLACE, AS VREA SA SCHIMB, DAR FOR NOW MERGE
`;

export const CardTitle = styled(Card.Title)`
  margin: 48px;
`;
export const LinkCustom = styled(Link)`
  margin: 48px;
`;

export const CardButton = styled(Button)`
  background: linear-gradient(
    0deg,
    rgba(255, 215, 0, 1) 0%,
    rgba(126, 106, 0, 1) 100%
  );

  border: solid 1px ${BLACK_COLOR};
  transition: background-color 0.5s ease, color 0.5s ease;

  color: ${WHITE_COLOR};
  font-weight: 700;

  width: 12rem;
  height: 4rem;

  border-radius: 50px;

  &:hover {
    background: ${GOLD_COLOR_HEX};
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;

export const OrderonlineButton = styled(Button)`
  margin: 12px;
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

export const EditButton = styled(Button)`
  margin: 12px;
  background: #0c6efd;

  border: solid 1px ${BLACK_COLOR};
  transition: background-color 0.5s ease, color 0.5s ease;

  color: ${WHITE_COLOR};
  font-weight: 700;

  width: 12rem;
  height: 4rem;

  border-radius: 50px;

  &:hover {
    background: #5499fd;
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;

export const DeleteButton = styled(Button)`
  margin: 12px;
  background: #cc0000;

  border: solid 1px ${BLACK_COLOR};
  transition: background-color 0.5s ease, color 0.5s ease;

  color: ${WHITE_COLOR};
  font-weight: 700;

  width: 12rem;
  height: 4rem;

  border-radius: 50px;

  &:hover {
    background: #db4c4c;
    /* #a30000; */
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;

export const AddButton = styled(Button)`
  margin: 12px;
  background: #fd9b0c;

  border: solid 1px ${BLACK_COLOR};
  transition: background-color 0.5s ease, color 0.5s ease;

  color: ${WHITE_COLOR};
  font-weight: 700;

  width: 12rem;
  height: 4rem;

  border-radius: 50px;

  &:hover {
    background: #fdb954;
    /* #a30000; */
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;
