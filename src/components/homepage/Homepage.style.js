import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import BackgroundStaticImage from "../../media/images/navbar-restaurant-lights.jpg"
import { BLACK_COLOR, GOLD_COLOR_HEX, GOLD_COLOR_SECONDARY_HEX } from "../../constants/colors";

// de unde iau valoarea lui isGuest??
export const Container = styled.div`
  // background: ${(props) => (props.isAdmin ? "#2f718b" : "#a19f9f")};
  // position: relative;
  // height: 100vh;

`;

export const Logo = styled.img``;

export const Test = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    display: none;
  }
`;

export const LinkCostum = styled(Link)`
  padding: 8px;
`;


export const HomeContainer = styled.div`
  background-image: url(${BackgroundStaticImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  // height: 100vh;
  overflow: hidden;
  // position: relative;
`;

export const Section = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  margin: 20px;
  border-radius: 8px;
`;

export const FirstSection = styled(Section)`
  // margin-top: 100vh;
  height: auto;
`;

export const SecondSection = styled(Section)`
  // margin-top: 100vh;
  padding: 0;
  margin: 100px;
  height: auto;
  width: auto;
  background: white;
`;

export const ThirdSection = styled(Section)`
  // margin-top: 100vh;
  height: 50vh;
`;

export const SpaceSection = styled.div`
  height: 20vh;
`

export const StyledH1 = styled.h1`
  font-family: 'Monotype Corsiva';
  font-size: 3rem;
  color: ${BLACK_COLOR};
  font-weight: bold;
  text-align: center;
  margin: 20px;
  // display: inline;
  &:hover {color: ${GOLD_COLOR_SECONDARY_HEX}};
`;