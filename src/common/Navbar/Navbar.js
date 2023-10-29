import {
  Logo,
  BrandContainer,
  Title,
  NavLinkContainer,
  NavbarContainer,
  NavbarWrapper,
  NavbarLink,
  UserInfo,
} from "./Navbar.style";
import LogoPic from "./../../media/logo/logo-no-background.png"; // "./logo.png";
import UserInfoPic from "./../../media/icons/user-icon-black.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useParams } from "react-router-dom";

// folosim parametrul logo?
function NavbarBootstrap({ isAdmin, logo }) {
  const params = useParams();
  console.log(isAdmin, logo);
  return (
    <NavbarWrapper
      expand="lg"
      className={isAdmin ? "bg-body-tertiary" : "bg-body-tertiary green-class"}
    >
      <NavbarContainer>
        {/* nu reusesc sa aduc sus NavbarContainer */}
        <Navbar.Brand href="/homepage">
          <BrandContainer>
            <Logo src={LogoPic} alt="Logo" />
            <Title>The Phoenix Pub</Title>
          </BrandContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* nu merge sa le aliniez de la dreapta */}
          {/* <NavLinkContainer className="nav-link-container"> */}
          <Nav className="me-auto" style={{ marginRight: "0px" }}>
            <NavbarLink href="/homepage">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/menu">Menu</NavbarLink>
            <NavbarLink href="/orderonline">Order online</NavbarLink>
            <NavbarLink href="/bookatable">Book a table</NavbarLink>
            <NavDropdown
              // title="User info"
              // style={{ color: "#f0fff0", fontSize: "1.5em" }} //  nu imi ia culoara si fontul
              title={
                <img
                  src={UserInfoPic}
                  alt="User"
                  style={{
                    width: "28px",
                    marginRight: "5px",
                  }}
                />
              }
              id="basic-nav-dropdown"
              // cum sa facem sagetica alba + burger menu icon alba??
              // se
            >
              <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* </NavLinkContainer> */}
        </Navbar.Collapse>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavbarBootstrap;
