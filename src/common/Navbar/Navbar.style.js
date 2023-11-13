import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { NavDropdown } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { BLACK_COLOR } from "../../constants/colors";


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
  color: #f0fff0;
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
`;

export const NavbarWrapper = styled(Navbar)`
  // Styles for the Navbar
  display: flex;
  justify-content: space-around;
  // vertical-align: top;
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // z-index: 1;
  height: 100vh;
  // height: 300px;
  background-image: url(${NavbarBackground});
  background-size: cover;
`;

// AICI SE REZOLVA CA NAVBARUL SA FIE SUS CU 'top: 0;'
export const NavbarContainer = styled(Container)`
  position: fixed;
  top: 0;
  max-width: 100vw;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(255, 215, 0, 0.8) 100%
  );
  z-index: 999;
  border-radius: 0 0 30px 30px;
  /* backdrop-filter: grayscale(100%); */
  // backdrop-filter: opacity(20%);
`;

// Am incercat sa fac butonul acela de meniu (3 liniute) alb, dar nu am reusit..
export const NavbarMenuIcon = styled.img`
  background-color: white;
  color: white;
`;

export const LinkAdmin = styled(Nav.Link)`
  padding: 0px 4px;
  color: #211d06;
  font-size: 1.25em;
  margin: 0px 7px 0px 7px;
  text-decoration: none;
  border: solid 1px ${BLACK_COLOR};
  background: #8b750e;
  border-radius: 4px;
  &:hover {
    color: #440000;
  }
`;

export const LogoutButton = styled(Button)`
  margin: 7px;
  background: #211d06;
  border: solid 1px ${BLACK_COLOR};

  &:hover {
    background: #440000;
    /* #a30000; */
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
    transition: background-color 0.5s ease, color 1s ease;
  }
`;

export const AdminWellcome = styled.span`
  color: ${BLACK_COLOR};
`;

export const AdminContainer = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;
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


export const NavbarCollapse = styled(Navbar.Collapse)`
  // display: flex;
  // flex-direction: column;
`

export const NavDropdown2 = styled(NavDropdown)`
  &.dropdown-menu.show {
    position: fixed;
    left: -50px;
  }
`