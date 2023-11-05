import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  // padding: 20px;
  // background-color: #f0f0f0;
`;

const Card = styled.div`
  width: 400px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 23%;

  box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.4);
    transition: transform 1s ease-in-out;
  }
  
`;

const CardImage = styled.img`
  max-width: 100%;
  border-radius: 50px;
`;

const CardContainer = () => {
  return (
    <Container>
      <Card>
        <div>
          <h5>Delicious Burgers!</h5>
        </div>
        <CardImage src="https://image.slidesdocs.com/responsive-images/background/fast-food-burger-fried-chicken-advertising-powerpoint-background_5af65095f9__960_540.jpg" alt="burgers image" />
      </Card>
      <Card>
        <div>
          <h5>Fantastic Pizza!</h5>
        </div>
        <CardImage src="https://img.mensxp.com/media/content/2015/Apr/typespizzathatwilltakeeveryfoodieonagastronomicjourney0a_1429983961.jpg" alt="pizza image" />
      </Card>
      <Card>
        <div>
          <h5>Amazing Desserts!</h5>
        </div>
        <CardImage src="https://wallpapersmug.com/download/2560x1440/f98bf6/dessert-bokeh-docorations.jpg" alt="desserts image" />
      </Card>
      <Card>
        <div>
          <h5>Our complete selection of Drinks!</h5>
        </div>
        <CardImage src="https://www.mashed.com/img/gallery/mixed-drinks-you-shouldnt-be-drinking/intro-1559222519.jpg" alt="drinks image" />
      </Card>
    </Container>
  );
};

export default CardContainer;
