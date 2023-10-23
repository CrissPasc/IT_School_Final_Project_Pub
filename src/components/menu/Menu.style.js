import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE_COLORF } from "../../constants/colors";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";

export const Container = styled.div`
  background: ${(props) => (props.isGuest ? "#2f718b" : "#a19f9f")};
  color: ${WHITE_COLORF};
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
