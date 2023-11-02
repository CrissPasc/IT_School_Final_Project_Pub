import { Card, Button } from "react-bootstrap";
import { styled } from "styled-components";

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
  border-radius: 50px;
`;

export const CardImage = styled(Card.Img)`
  border-radius: 20px;
  height: 200px;
  width: 400px;
  background: cover;
`

export const CardBody = styled(Card.Body)`
  display: flex;
  /////////////////justify-content: flex-end; AICI AM RAMAS
`

export const CardButton = styled(Button)`
  background: linear-gradient(0deg, rgba(255,215,0,1) 0%, rgba(126,106,0,1) 100%);

  border: solid 1px black;
  transition: background-color 0.5s ease;

  color: #FFFFFF;
  font-weight: 700;

  &:hover {
    background: #FFD700;
    color: black;
    font-weight: 700;
    border: solid 1px black;
  }
`