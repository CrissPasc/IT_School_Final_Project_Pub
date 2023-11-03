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
import { useLocation } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import NavbarHome from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import NavbarMenu from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import NavbarMenuBurgers from "./../../media/images/burgers-three-mini.jpg";
import NavbarOrderonline from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";

// folosim parametrul logo? => pe viitor DA!
function NavbarBootstrap({ isAdmin, logo }) {
  const params = useParams();
  console.log(isAdmin, logo);

  // Define a function to dynamically render different image URLs based on location
  const getImageForLocation = (pathname) => {
    switch (pathname) {
      case "/homepage":
        return NavbarHome;
      case "/menu":
        return NavbarMenu;
      case "/menus/Burgers":
        return NavbarMenuBurgers;
      case "/orderonline":
        return NavbarOrderonline;
      // Add more cases as needed for different routes
      default:
        return "https://img.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_23-2148872451.jpg?w=1800&t=st=1698907507~exp=1698908107~hmac=71ed74e301bba47568bb4e56f418f4c85b1c162f61cd71648f96dddd1046f35d";
    }
  };

  const location = useLocation();
  console.log(location.pathname);
  const backgroundImage = getImageForLocation(location.pathname);
  console.log(location.pathname);

  return (
    <NavbarWrapper
      expand="lg"
      className={isAdmin ? "bg-body-tertiary" : "green-class"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavbarContainer>
        <NavLinkContainer>
          <Navbar.Brand as={Link} to="/homepage">
            <BrandContainer>
              <Logo src={LogoPic} alt="Logo" />
              <Title>The Phoenix Pub</Title>
            </BrandContainer>
          </Navbar.Brand>
        </NavLinkContainer>

        <NavLinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ NavbarMenuIcon }}
          />
          <Navbar.Collapse id="basic-navbar-nav" style={{ NavbarMenuIcon }}>
            {/* pt a alinia la dreapta => am folosit 2 containere NavLinkContainer pentru a incapsula cele 2 parti din navbar, 
            dupa care am dat space-around in style.js pe containerul parinte NavbarWrapper */}

            {/* <Nav className="me-auto" style={{ marginRight: "0px" }}> */}

            {/* AM INLOCUIT TOATE LINK-URILE DIN 'href=' => 'as={Link} to=' 
              PENTRU A NE FOLOSI DE REACT-ROUTER-DOM SI NU DE LINK-URI CLASICE <a> */}
            <NavbarLink as={Link} to="/homepage">
              Home
            </NavbarLink>
            <NavbarLink as={Link} to="/about">
              About
            </NavbarLink>
            <NavbarLink as={Link} to="/menu">
              Menu
            </NavbarLink>
            <NavbarLink as={Link} to="/orderonline">
              Order online
            </NavbarLink>
            <NavbarLink as={Link} to="/bookatable">
              Book a table
            </NavbarLink>
            {/* {rute?.map((ruta, index) => (
              <NavbarLink to={ruta.ruta} key={ruta + index}>
                {ruta.name}
              </NavbarLink> */}
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
              // => PROBLEMA ERA componenta de <Nav> care dadea overwrite la alte proprietati de CSS (nu e necesara)
            >
              <NavDropdown.Item as={Link} to="/signin">
                Sign in
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            {/* </Nav> */}
          </Navbar.Collapse>
        </NavLinkContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavbarBootstrap;

// DE LA RAZVAN
// const imageRender = () => {
//   const location = useLocation();

//   switch (location.pathname) {
//     case "/menu":
//       return "Https//imagine";
//     default:
//       break;
//   }
// };

// <img src={imageRender}></img>;
