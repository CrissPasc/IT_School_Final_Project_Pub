import { styled } from "styled-components";
import CarouselImg from "../../media/images/bar-drinks-bartender.jpg"
import { Carousel } from "react-bootstrap";

export const CarouselImage = styled.div`
    background-image: url(${CarouselImg});
    background-size: cover;
    height: 50vh;
`

export const CarouselContainer = styled(Carousel)`

`