import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import "./About";

// de unde iau valoarea lui isGuest??
export const Container = styled.div`
  background: ${(props) => (props.isAdmin ? "#2f718b" : "#a19f9f")};
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

