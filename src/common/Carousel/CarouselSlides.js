import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselContainer, CarouselH1, CarouselImage, CarouselP } from './CarouselSlides.style';
import { Container, StyledH1 } from '../../components/homepage/Homepage.style';


function CarouselSlides() {
  return (
    <CarouselContainer fade>
      <Carousel.Item>
        <CarouselImage src='https://shorebread.com/wp-content/uploads/2016/07/PhotoOC360-2000x500.jpg' text="First slide" />
        <Carousel.Caption>
          <CarouselH1>Professionalism</CarouselH1>
          <CarouselP>Experience the epitome of professionalism at our restaurant, 
            where every detail is meticulously crafted to ensure your dining 
            experience is nothing short of exceptional. From our well-trained 
            staff to our impeccable service and attention to every culinary masterpiece, 
            we take pride in delivering a dining experience that radiates sophistication and excellence.</CarouselP>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='https://www.downtowndurango.org/assets/hero-images/dining2.jpg' text="Second slide" />
        <Carousel.Caption>
          <CarouselH1>Great Atmosphere</CarouselH1>
          <CarouselP>Step into our restaurant and be transported to a world of enchanting ambiance. 
            Our meticulously curated atmosphere blends elegance, warmth, and a touch of magic 
            to create the perfect backdrop for your dining pleasure. Immerse yourself in the cozy, 
            inviting surroundings and let your senses be captivated by the harmonious symphony of 
            aesthetics, lighting, and decor, all designed to elevate your dining experience to a 
            higher level of enjoyment.</CarouselP>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='https://trivecgroup.com/wp/uploads/2022/12/organisation-restaurant-2000x500.jpg' text="Third slide" />
        <Carousel.Caption>
          <CarouselH1>Impeccable Service</CarouselH1>
          <CarouselP>Experience service like no other at our restaurant. Our dedicated team is committed 
            to providing you with an exceptional dining journey, where every need and desire is 
            anticipated and fulfilled with a genuine smile. From the moment you walk through our 
            doors until the final farewell, expect nothing but the highest standard of care, attentiveness, 
            and a commitment to making your visit truly memorable.</CarouselP>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='https://www.galleriapark.com/site/assets/files/10730/san-francisco-restaurants.2000x500.jpg?lndp8' text="Fourth slide" />
        <Carousel.Caption>
          <CarouselH1>Amazing Food</CarouselH1>
          <CarouselP>Indulge your senses in a culinary symphony at our restaurant. Our passionate chefs 
            craft each dish with precision, using the finest ingredients to create a symphony of 
            flavors that will tantalize your taste buds. Every bite is a journey through taste and 
            creativity, delivering a dining experience that transcends the ordinary and leaves an 
            unforgettable impression on your palate.</CarouselP>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='https://cdn-hbcpj.nitrocdn.com/iatloObKlsbcvIqUFYLdrVDEyuANIlJz/assets/images/optimized/rev-c1089a7/ivycollection.com/wp-content/uploads/2023/10/2000-x-500-1-1.png' text="Fifth slide" />
        <Carousel.Caption>
          <CarouselH1>GOOD Times!</CarouselH1>
          <CarouselP>At our restaurant, having a great time is not just an option; it's the essence of the 
            experience. We've carefully curated an environment where joy and laughter flow effortlessly. 
            Whether you're celebrating a special occasion or simply savoring a delightful meal, our goal 
            is to ensure that every moment is filled with happiness, camaraderie, and the kind of memories 
            that keep you coming back for more.</CarouselP>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselContainer>
  );
}

export default CarouselSlides;