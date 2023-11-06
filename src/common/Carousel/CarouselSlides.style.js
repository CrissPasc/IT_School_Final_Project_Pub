import { styled } from "styled-components";
import CarouselImg from "../../media/images/bar-drinks-bartender.jpg"
import { Carousel } from "react-bootstrap";
import { GOLD_COLOR_HEX, WHITE_COLOR } from "../../constants/colors";

export const CarouselImage = styled.img`
    // background-image: url(${CarouselImg});
    // background-size: cover;
    height: 50vh;
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
    border-radius: 20px;
    
    &:hover {color: ${GOLD_COLOR_HEX}};
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
`