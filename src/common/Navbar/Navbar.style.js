import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  
  height: 100%;
  border-radius: 50%;
  margin-left: 24px;
  background: black;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  background: green;
  font-size: 24px;
  font-weight: 500;
  position: relative;
  height: 60px;
  padding: 4px 24px;
`;
