import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const Logo = styled.img`
  height: 70px;
  width: 70px;
  margin: 0px 0px 0px 0px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Lucida Handwriting", cursive;
  color: #f0fff0; // #fffafa; // #16395c;
  margin: 10px;
`;

export const NavbarLink = styled(Nav.Link)`
  color: #f0fff0;
  font-size: 1.5em;
  padding: 0px 20px; // nu  reusesc sa le departez mai mult de 8px..
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: center;
  margin: 0px, 0px, 0px, 100px;
`;

export const NavbarWrapper = styled(Navbar)`
  // Styles for the Navbar
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  max-height: 70vh;
  background-image: url(${NavbarBackground}); /* Replace 'your_image_url.jpg' with your actual image URL */
  background-size: cover;
`;

export const NavbarContainer = styled(Container)`
  position: fixed;
`;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   vertical-align: middle;
//   align-items: center;
//   background: green;
//   font-size: 24px;
//   font-weight: 500;
//   position: relative;
//   height: 60px;
//   padding: 4px 24px;
// `;
