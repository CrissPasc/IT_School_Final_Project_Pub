import styled from "styled-components";
import { Link } from "react-router-dom";

import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import MenuBackground from "../../media/images/menu-background.png";

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
