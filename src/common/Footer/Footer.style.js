import React from "react";
import styled from "styled-components";
import { BLACK_COLOR, GOLD_COLOR_SECONDARY_HEX, WHITE_COLOR } from "../../constants/colors";
import { Link } from "react-router-dom";
import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants/breakpoints";

export const FooterContainer = styled.footer`
    
    // position: absolute;
    // border: none;
    // bottom: 0;
    
    // background-image: linear-gradient(
    //     0deg, 
    //     rgba(205,173,0,1) 0%, 
    //     rgba(0,0,0,1) 80%
    // );
    background-color: ${GOLD_COLOR_SECONDARY_HEX};
    
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    
    padding: 0 10vw;
    // margin: 0 5vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // justify-items: center;

    @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
      grid-template-columns: 1fr;
    };

`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0;
`

export const FooterH1 = styled.h1`
    font-family: "Lucida Handwriting", cursive;
    margin: 0;
    padding-bottom: 10px;
    color: ${BLACK_COLOR};

    &:hover {color: ${WHITE_COLOR};}
`

export const FooterH4 = styled.h4`
  font-family: "Lucida Handwriting", cursive;
  margin: 0;
  padding: 5px 0 2px;
  color: ${BLACK_COLOR};
`

export const FooterP = styled.p`
    font-family: "Lucida Handwriting", cursive;
    margin: 0;
    padding: 5px 0;
    color: ${WHITE_COLOR};
`

export const LocationIcon = styled.img`
    height: 20px;
    width: 20px;
    background: transparent;
`

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding-top: 5%;
`

export const FooterSocialIcon = styled.img`
  height: 40px;
  width: 40px;

  &:hover {
    height: 38px;
    width: 38px;
  }
`

export const FooterLink = styled(Link)`
  color: ${WHITE_COLOR};
  &:hover {
    font-weight: bold;
  }
`



{/* <div className="footer-middle">
<div className="container">
  <div className="row">
    <div className="col-md-3 col-sm-6">
      <ul className="first-list">
        <li className="list-href">
        <a class="noDecoration" href="#">
            About us
          </a>
        </li>
        <li>
          <a class="noDecoration" href="#">
            Order Online
          </a>
        </li>
        <li>
          <a class="noDecoration" href="#">
            Book a table here
          </a>
        </li>
      </ul>
    </div>

    <div className="col-md-3 col-sm-6">
      <ul className="list-unstyled"></ul>
      <Newsletter></Newsletter>
    </div>

    <div className="col-md-3 col-sm-6">
      
      <ul className="list-styled">
      <h4>Open:</h4>
        <li>Monday - Thursday: 10:00 am - 00:00 am</li>
        <li>Friday - Saturday: 10:00 am - 01:00 am</li>
        <li>Sunday: 10:00 am - 11:00 pm</li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p className="text-xs-center">
      &copy;{new Date().getFullYear()} Copyright © The Phoenix Pub &
      Restaurant - All Rights Reserved
    </p>

    {/* <MyMap></MyMap> */}
 