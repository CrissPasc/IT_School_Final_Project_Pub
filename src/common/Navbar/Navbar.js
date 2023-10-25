import { Logo, NavbarContainer, Title } from "./Navbar.style";

// function Navbar({ logo }) {
//   return (
//     <NavbarContainer>
//       <Logo src={logo} alt="Logo" />

//       <Title>The Phoenix Pub</Title>
//     </NavbarContainer>
//   );
// }

// export default Navbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useParams } from "react-router-dom";




function NavbarBootstrap({isAdmin, logo}) {
  const params = useParams();
  console.log(isAdmin, logo);
  return (
    <Navbar expand="lg" className={isAdmin ? "bg-body-tertiary" : "bg-body-tertiary green-class"}>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />The Phoenix Pub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Order online</Nav.Link>
            <Nav.Link href="#link">Book a table</Nav.Link>
            <NavDropdown title="User info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;
