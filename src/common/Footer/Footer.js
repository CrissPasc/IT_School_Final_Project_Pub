import styled from "styled-components";
import React from "react";
import Newsletter from "./Newsletter";
// import MyMap from './Map';

function Footer() {
  return (

    // Aici trebuiesc puse link-urile la href
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <ul className="first-list">
                <li className="list-href">
                <a className="noDecoration" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="noDecoration" href="#">
                    Order Online
                  </a>
                </li>
                <li>
                  <a className="noDecoration" href="#">
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

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li {
    color: white;
  }

  ulli a: hover {
    color: green;
  }

  .noDecoration,
  a:link,
  a:visited {
    text-decoration: none;
  }

  .noDecoration {
    color: white;
  }

  .list-href {
    color: white;
  }

  .list-unstyled {
    margin-top: 50px;
    text-align: -webkit-right;
  }

h4{
color: white;
}

.list-styled{
  margin-left: 250px;
  text-wrap: nowrap;
  margin-top: 100px;
}

.row{
  // margin-top: 100px;
}

.first-list{
  margin-top: 100px;
  list-style: none;
}

.text-xs-center{
  text-align: center;
  color: #edededd1;
  font-variant-caps: petite-caps;
}
`;

export default Footer;
