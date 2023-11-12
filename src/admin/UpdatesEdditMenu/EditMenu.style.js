import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ContainerEdit = styled.div`
  padding: 48px;
  margin: 48px auto;
  background: #b4a664;
  width: 800px;
  height: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 48px auto;
  background: #b4a664;
  width: 100%;
  height: 100%;
`;

export const EditButton = styled(Button)`
  background: #6f5d0b;
  border: none;

  &:hover {
    background: #f2d34a;
    border: none;
    color: #211d06;
  }
`;
