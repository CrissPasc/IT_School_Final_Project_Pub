import React from "react";
import styled from "styled-components";
import { StyledH1 } from "./Homepage.style";
import { CardButton } from "../../common/Card/Card.style";
import { Link } from "react-router-dom";
import { BREAKPOINT_LARGE } from "../../constants/breakpoints";

const ContainerAbout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media screen and (max-width: ${BREAKPOINT_LARGE}) {
        grid-template-columns: 1fr; 
    }
`

const ImageAbout = styled.img`
    heigth: 100%;
    width: 100%;
`

const DescriptionAbout = styled.div`
    heigth: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AboutUsH1 = styled(StyledH1)`
    font-size: 2rem;
    margin: 0;
    padding: 10px;
`

const AboutUsP = styled.p`
    font-family: Cursive;
    padding: 10px;
    text-align: center;
`

const AboutUsButton = styled(CardButton)`
    margin: 0 0 20px 0;
    padding: 0;
    width: 8rem;
    height: 2rem;
`

const AboutUs = () => {
    return (
        <ContainerAbout>
            <ImageAbout src='https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/220b102480004af14aa4aeafac6e5612?fallback=true&format=&size=900x400%23&version=3&webp_fallback=png'></ImageAbout>
            <DescriptionAbout>
                
                    <AboutUsH1>It's our commitement you'll have a great time!</AboutUsH1>
                    <AboutUsP>At our restaurant, it's our unwavering commitment to ensure that you'll have an exceptional time! 
                    Come join us and experience the commitment to excellence that makes our restaurant the perfect destination for any type of event you'd want to celebrate!
                    </AboutUsP>
                    <Link to="/bookatable"><AboutUsButton>Book a Table!</AboutUsButton></Link>
                
            </DescriptionAbout>
            <DescriptionAbout>
                
                    <AboutUsH1>Come and try our delightful food!</AboutUsH1>
                    <AboutUsP>Our passionate team of chefs crafts a diverse menu that caters to a wide range of tastes and preferences. 
                    From delectable appetizers to mouthwatering entrees and indulgent desserts, we offer a culinary journey that is sure to tantalize your taste buds.
                    </AboutUsP>
                    <Link to="/menu"><AboutUsButton>See our Menu!</AboutUsButton></Link>
                
            </DescriptionAbout>
            <ImageAbout src='https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/af0e22a9f70dfc0931956f90c9e4d057?fallback=true&format=&size=900x400%23&version=3&webp_fallback=png'></ImageAbout>
        </ContainerAbout>
    )
}

export default AboutUs;