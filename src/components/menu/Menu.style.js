import styled from "styled-components";
import { Link } from "react-router-dom";

import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import MenuBackground from "../../media/images/menu-background.png";
import { CarouselH1 } from "../../common/Carousel/CarouselSlides.style";

export const Container = styled.div`
  background: url(${MenuBackground});
  // color: black;
  // display: flex;

  // height: 100vh;
  // position: relative;
  background-repeat: round;
`;

export const MenuContainer = styled.div`
  // position: absolute;
  // z-index: 999;
  // background-image: url(${MenuBackground});
  // background-size: cover;
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

export const MenuH1 = styled(CarouselH1)`
  margin: 0 10vw;
  padding: 40px;
  border-radius: 0 0 30px 30px;
  transition: color 0.2s ease-in-out;
`