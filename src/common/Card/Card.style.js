import { Card, Button } from "react-bootstrap";
import { styled } from "styled-components";
import { BLACK_COLOR, GOLD_COLOR_HEX, WHITE_COLOR } from "../../constants/colors";

export const CardsContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  display: grid;
  grid-template-columns: 1fr 1fr;

  
  padding: 48px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
`

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  //// NU-MI PLACE, AS VREA SA SCHIMB, DAR FOR NOW MERGE
`

export const CardButton = styled(Button)`
  background: linear-gradient(0deg, rgba(255,215,0,1) 0%, rgba(126,106,0,1) 100%);

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
`