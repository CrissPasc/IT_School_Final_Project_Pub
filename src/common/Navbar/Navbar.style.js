import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const Logo = styled.img`
  height: 35px;
  width: 53px;
  margin: 0px 0px 0px 0px;
`;

export const UserInfo = styled.img`
  height: 28px;
  width: 28px;
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
  font-size: 1.25em;
  margin: 0px 10px;

  text-decoration: none;
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
`;

// Aici nu e necesar decat 'display: flex'
export const NavLinkContainer = styled.div`
  display: flex;
  // justify-content: flex-end;
  // vertical-align: middle;
  // align-items: center;
  // margin: 0px, 0px, 0px, 100px;
`;

export const NavbarWrapper = styled(Navbar)`
  // Styles for the Navbar
  display: flex;
  justify-content: space-around;
  // vertical-align: top;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  max-height: 70vh;
  background-image: url(${NavbarBackground});
  background-size: cover;
`;

// AICI SE REZOLVA CA NAVBARUL SA FIE SUS CU 'top: 0;'
export const NavbarContainer = styled(Container)`
  position: fixed;
  top: 0;

  backdrop-filter: blur(20px);
  backdrop-filter: grayscale(100%);
  // backdrop-filter: opacity(20%);
`;

// Am incercat sa fac butonul acela de meniu (3 liniute) alb, dar nu am reusit.
// Trebuie gasita o solutie din Bootstrap...
export const NavbarMenuIcon = styled.span`
  background-color: white;
  color: white;
`

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
