import { styled } from "styled-components";
import CarouselImg from "../../media/images/bar-drinks-bartender.jpg"
import { Carousel } from "react-bootstrap";
import { GOLD_COLOR_HEX, WHITE_COLOR } from "../../constants/colors";
import { BREAKPOINT_LARGE, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL, BREAKPOINT_XLARGE } from "../../constants/breakpoints";

export const CarouselImage = styled.img`
    // background-image: url(${CarouselImg});
    // background-size: cover;
    height: auto;
    width: 100%;
`

export const CarouselContainer = styled(Carousel)`

`

export const CarouselH1 = styled.h1`
    font-family: 'Monotype Corsiva';
    font-size: 3rem;
    color: ${WHITE_COLOR};
    font-weight: bold;
    text-align: center;
    margin: 20px 20px 200px;
    // display: inline;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    
    &:hover {color: ${GOLD_COLOR_HEX}};

    @media screen and (max-width: ${BREAKPOINT_XLARGE}) {
        font-size: 2rem;
        margin: 20px 20px 150px;
    }

    @media screen and (max-width: ${BREAKPOINT_LARGE}) {
        font-size: 1.5rem;
        margin: 20px 20px 75px;
    }

    @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
        font-size: 1.25rem;
        margin: 0 0 25px;
    }

    @media screen and (max-width: ${BREAKPOINT_SMALL}) {
        font-size: 1rem;
        margin: 0 0 10px;
    }
`

export const CarouselP = styled.p`
    font-family: 'Monotype Corsiva';
    font-size: 1.5rem;
    color: ${WHITE_COLOR};
    font-weight: bold;
    text-align: center;
    margin: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;

    @media screen and (max-width: ${BREAKPOINT_XLARGE}) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: ${BREAKPOINT_LARGE}) {
        font-size: 1rem;
    }

    @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
        font-size: 0.75rem;
        margin: 10px;
    }

    @media screen and (max-width: ${BREAKPOINT_SMALL}) {
        font-size: 0.5rem;
        margin: 0;
    }
`