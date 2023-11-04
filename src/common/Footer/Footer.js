import styled from "styled-components";
import React from "react";
import Newsletter from "./Newsletter";
// import MyMap from './Map';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Order Online</a>
                </li>
                <li>
                  <a href="/">Book a table here</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled"></ul>
              <Newsletter></Newsletter>
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Open:</h4>
              <ul className="list-unstyled">
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
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

// Partea asta de styling ar trebui sa fie in Footer.style.js :)
// De asemenea am schimbat culoarea, deoarece prima data am folosit un galben urat pentru Navbar,
// iar ulterior am schimbat in acest Gold frumos :)
const FooterContainer = styled.footer`
  .footer-middle {
    background: linear-gradient(
      145deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(255, 215, 0, 0.8) 100%
    );
  }
`;

export default Footer;
