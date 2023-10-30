import {
  Logo,
  BrandContainer,
  Title,
  NavLinkContainer,
  NavbarContainer,
  NavbarWrapper,
  NavbarLink,
} from "./Navbar.style";
import LogoPic from "./../../media/logo/logo-no-background.png"; // "./logo.png";
import UserInfoPic from "./../../media/icons/user-icon-black.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useParams } from "react-router-dom";

// cum folosim parametrul logo?
// cum folosim parametrul isAdmin?
function NavbarBootstrap({ isAdmin, logo, rute }) {
  const params = useParams();
  console.log(isAdmin, logo);
  return (
    <NavbarWrapper
      expand="lg"
      // de unde este clasa "bg-body-tertiary" ?
      className={isAdmin ? "bg-body-tertiary" : "bg-body-tertiary green-class"}
    >
      <NavbarContainer>
        {/* PAAASSS nu reusesc sa aduc sus NavbarContainer */}
        <Navbar.Brand href="/homepage">
          {/* --> pus pt a ne duce pe homepage la click pe logo+title */}
          <BrandContainer>
            <Logo src={LogoPic} alt="Logo" />
            <Title>The Phoenix Pub</Title>
          </BrandContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* PAAASSS nu merge sa le aliniez de la dreapta */}
          {/* <NavLinkContainer className="nav-link-container"> */}
          {/* PAAASSS pus pt aranjare nu a mers */}
          <Nav className="me-auto" style={{ marginRight: "0px" }}>
            {/* cand va afisa in Homepage va lua din ruteAdmin pt ca asa am setat acolo */}
            {rute?.map((ruta, index) => (
              <NavbarLink to={ruta.ruta} key={ruta + index}>
                {ruta.name}
              </NavbarLink>
              // mi le aduce dinamic din rute.js dar.. nu pot merge pe link la click spre deosebire daca as pune asta:
              // index mai am nevoie?

              // <NavbarLink href="/homepage">Home</NavbarLink>
            ))}
            <NavDropdown
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
            >
              {/* cum aduc rutele de mai jos dinamic? */}
              <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* </NavLinkContainer> */}
        </Navbar.Collapse>
        {/* burger menu arata nasol cum il facem sa arate ok? sau mai bine il recream cu RuteMobile?? */}
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavbarBootstrap;
