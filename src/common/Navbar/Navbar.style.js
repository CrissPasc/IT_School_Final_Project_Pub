import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarBackground from "./../../media/images/navbar-friends-chatting-pub.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

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
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // z-index: 1;
  max-height: 50vh;
  height: 300px;
  background-image: url(${NavbarBackground});
  background-size: cover;
  margin-bottom: 300px;
`;

// AICI SE REZOLVA CA NAVBARUL SA FIE SUS CU 'top: 0;'
export const NavbarContainer = styled(Container)`
  //position: fixed;
  // top: 0;

  backdrop-filter: blur(20px);
  backdrop-filter: grayscale(100%);
  // backdrop-filter: opacity(20%);
`;

// Am incercat sa fac butonul acela de meniu (3 liniute) alb, dar nu am reusit.
// Trebuie gasita o solutie din Bootstrap...
export const NavbarMenuIcon = styled.span`
  background-color: white;
  color: white;
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

// background-image: url("https://img.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_23-2148872451.jpg?w=1800&t=st=1698907507~exp=1698908107~hmac=71ed74e301bba47568bb4e56f418f4c85b1c162f61cd71648f96dddd1046f35d");
// background-image: url(${NavbarBackground}); // IMG ADUSA DIN LOCAL
// https://www.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_12806237.htm#&position=1&from_view=collections

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

// // Define a function to dynamically render different image URLs based on location
// const getImageForLocation = (pathname) => {
//   switch (pathname) {
//     case "/homepage":
//       return "https://img.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_23-2148872451.jpg?w=1800&t=st=1698907507~exp=1698908107~hmac=71ed74e301bba47568bb4e56f418f4c85b1c162f61cd71648f96dddd1046f35d";
//     case "/menu":
//       return "https://www.crushpixel.com/big-static12/preview4/group-couples-with-friends-drinking-798836.jpg";
//     // Add more cases as needed for different routes
//     default:
//       return "https://img.freepik.com/free-photo/medium-shot-happy-friends-with-beer-mugs_23-2148872451.jpg?w=1800&t=st=1698907507~exp=1698908107~hmac=71ed74e301bba47568bb4e56f418f4c85b1c162f61cd71648f96dddd1046f35d";
//   }
// };

// const NavbarComponent = () => {
//   const location = useLocation();
//   const backgroundImage = getImageForLocation(location.pathname);

//   return (
//     <NavbarWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <Container>{/* Rest of your Navbar content */}</Container>
//     </NavbarWrapper>
//   );
// };

// export default NavbarComponent;
