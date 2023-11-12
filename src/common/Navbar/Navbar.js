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
import UserInfoPic from "./../../media/icons/user-icon-white.png";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import NavbarHome from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import NavbarMenu from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import NavbarMenuBurgers from "./../../media/images/burgers-three-mini.jpg";
import NavbarMenuPizzas from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import NavbarOrderonline from "./../../media/images/navbar-happy-friends-with-beer-mugs.jpg";
import { useEffect, useState } from "react";

// folosim parametrul logo? => pe viitor DA!
function NavbarBootstrap({ isAdmin, logo }) {
  const params = useParams();
  // console.log(isAdmin, logo);

  const location = useLocation();

  // // adaugat 12Nov
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();

  // console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/signin");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);

  // Define a function to dynamically render different image URLs based on location
  const getImageForLocation = (pathname) => {
    switch (pathname) {
      case "/homepage":
        return NavbarHome;
      case "/menu":
        return NavbarMenu;
      case "/menus/Burgers":
        return NavbarMenuBurgers;
      case "/meals/Beef%20burger":
        return NavbarMenuBurgers;
      case "/meals/Chichen%20burger":
        return NavbarMenuBurgers;
      case "/meals/Vegan%20burger":
        return NavbarMenuBurgers;
      case "/menus/Pizzas":
        return "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
      case "/meals/Pizza%20beef":
        return "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
      case "/meals/Pizza%20chichen":
        return "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
      case "/meals/Pizza%20vegan":
        return "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
      case "/orderonline":
        return "https://media.timeout.com/images/105491872/image.jpg";
      // Add more cases as needed for different routes
      default:
        return "https://img.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_23-2148872451.jpg?w=1800&t=st=1698907507~exp=1698908107~hmac=71ed74e301bba47568bb4e56f418f4c85b1c162f61cd71648f96dddd1046f35d";
    }
  };

  const backgroundImage = getImageForLocation(location.pathname);
  // console.log(location.pathname);

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
            {/* // adaugat 12Nov */}
            {showmenu && (
              <div>
                <NavbarLink as={Link} to="/customer">
                  Customer
                </NavbarLink>
                <span
                // style={{ marginLeft: "70%" }}
                >
                  Welcome <b>{displayusername}</b>
                </span>
                <Link
                  to={"/signin"}
                  // style={{ float: "right" }}
                >
                  Logout
                </Link>
              </div>
            )}
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
