import {
  Logo,
  BrandContainer,
  Title,
  NavLinkContainer,
  NavbarContainer,
  NavbarWrapper,
  NavbarLink,
  UserInfo,
  NavbarMenuIcon,
} from "./Navbar.style";
import LogoPic from "./../../media/logo/logo-no-background.png"; // "./logo.png";
import UserInfoPic from "./../../media/icons/user-icon-black.jpg";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// folosim parametrul logo? => pe viitor DA!
function NavbarBootstrap({ isAdmin, logo }) {
  const params = useParams();
  console.log(isAdmin, logo);
  return (
    <NavbarWrapper
      expand="lg"
      // de unde este clasa "bg-body-tertiary" ?
      className={isAdmin ? "bg-body-tertiary" : "bg-body-tertiary green-class"}
    >
      <NavbarContainer>
        {/* nu reusesc sa aduc sus NavbarContainer => REZOLVARE IN Navbar.style.js*/}
        <NavLinkContainer>
          <Navbar.Brand  as={Link} to='/homepage'>
            <BrandContainer>
              <Logo src={LogoPic} alt="Logo" />
              <Title>The Phoenix Pub</Title>
            </BrandContainer>
          </Navbar.Brand>
        </NavLinkContainer>

        <NavLinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{NavbarMenuIcon}}/>
          <Navbar.Collapse id="basic-navbar-nav" style={{NavbarMenuIcon}}>
            {/* nu merge sa le aliniez de la dreapta */}
            {/* => am folosit 2 containere NavLinkContainer pentru a incapsula cele 2 parti din navbar, 
            dupa care am dat space-around in style.js pe containerul parinte NavbarWrapper */}
            
            {/* <Nav className="me-auto" style={{ marginRight: "0px" }}> */}

              {/* AM INLOCUIT TOATE LINK-URILE DIN 'href=' => 'as={Link} to=' 
              PENTRU A NE FOLOSI DE REACT-ROUTER-DOM SI NU DE LINK-URI CLASICE <a> */}
              <NavbarLink as={Link} to="/homepage">Home</NavbarLink>
              <NavbarLink as={Link} to="/about">About</NavbarLink>
              <NavbarLink as={Link} to="/menu">Menu</NavbarLink>
              <NavbarLink as={Link} to="/orderonline">Order online</NavbarLink>
              <NavbarLink as={Link} to="/bookatable">Book a table</NavbarLink>
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
                // => PROBLEMA ERA componenta de <Nav> care dadea overwrite la alte proprietati de CSS (nu e necesara)
              >
                <NavDropdown.Item as={Link} to="/signin">Sign in</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
              </NavDropdown>
            {/* </Nav> */}
            
          </Navbar.Collapse>
        </NavLinkContainer>

      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavbarBootstrap;
