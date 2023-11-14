import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import "./About";
import { GOLD_COLOR_HEX } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GOLD_COLOR_HEX};
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
