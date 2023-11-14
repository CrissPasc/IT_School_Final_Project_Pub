import React from "react";
import Newsletter from "./Newsletter";
import { FooterContainer, FooterH1, FooterH4, FooterLink, FooterP, FooterSection, FooterSocialContainer, FooterSocialIcon, LocationIcon } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterH1>Find Us</FooterH1>
        <FooterP><FooterLink to="/about">The Phoenix Locator</FooterLink></FooterP>
        <FooterP>The Phoenix Restaurant & Pub</FooterP>
        <FooterH4>Restaurant Hours:</FooterH4>
        <FooterP>Monday - Thursday: 10:00 am - 00:00 am</FooterP>
        <FooterP>Friday - Saturday: 10:00 am - 01:00 am</FooterP>
        <FooterP>Sunday: 10:00 am - 11:00 pm</FooterP>
        <FooterP><LocationIcon src="https://png2.cleanpng.com/sh/a0eb019e07e844d43e6c6a425c762cbd/L0KzQYm3U8E6N5NoiZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfxwa5J5gdH3LXHvPcS0lPltbV5yeeRrbHWwdrr1j71qa15xh9VqdHnyfn76mf1jd50yiNDwLXPsgrTzhb1td5RmjNt4bj3sc7F1TcViamE7fKo7MEK0QYq8Tsk0PGQATaoBMUW1QYa4UcgyOGE1UKc3cH7q/kisspng-computer-icons-location-al-s-tile-marble-fino-ic-location-symbol-png-circle-location-icon-5ab06d82021195.9343958615215118100085.png" />Strada Victoriei 10, Bucharest, Romania, 050711</FooterP>
      </FooterSection>

      <FooterSection>
        <FooterH1>Contact Us</FooterH1>
        <FooterP><FooterLink to="/about">Email</FooterLink></FooterP>
        <FooterP>(857) 250-4959 (text or call us!)</FooterP>
        <FooterP>Office days: Tuesday-Saturday</FooterP>
        <FooterSocialContainer>
          <a href="https://www.instagram.com/"><FooterSocialIcon src="https://cdn3.iconfinder.com/data/icons/social-media-2527/24/glyph_instagram_logo_logotype_social_network_social_media_social_media-512.png" /></a>
          <a href="https://www.facebook.com/"><FooterSocialIcon src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/facebook-square-512.png" /></a>
          <a href="https://twitter.com/?lang=en"><FooterSocialIcon src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/twitter-square-512.png" /></a>
          <a href="https://www.pinterest.com/"><FooterSocialIcon src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/pinterest-square-512.png" /></a>
          <a href="https://www.whatsapp.com/"><FooterSocialIcon src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/whatsapp-square-512.png" /></a>
        </FooterSocialContainer>
      </FooterSection>

      <FooterSection>
        <FooterH1>Subscribe</FooterH1>
        <FooterP>Keep up with the good news! Sign up for our newsletter and 
        get the latest on where to find us, recipes, & more!</FooterP>
        <Newsletter />
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;