import { Card } from "react-bootstrap";
import { styled } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px;
`;

export const CardContainer = styled(Card)`
  margin: 48px;
`;
