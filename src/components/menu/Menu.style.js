import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE_COLORF } from "../../constants/colors";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import MenuBackground from "../../media/images/menu-background.png";

// de unde iau valoarea lui isGuest??
export const Container = styled.div`
  background: ${(props) => (props.isGuest ? "#2f718b" : "#a19f9f")};
  color: ${WHITE_COLORF};
  display: flex;
  /* vertical-align: top; */
  position: absolute;
`;

export const MenuContainer = styled.div`
  display: flex;
  /* vertical-align: top; */
  position: absolute;
  z-index: 0;
  background-image: url(${MenuBackground});
  background-size: cover;
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
