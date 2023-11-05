import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../media/logo/logo-no-background.png';
import image2 from '../../media/logo/logo-leafs.png';

const LogoContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  // cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const Image1 = styled.img`
  position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-in-out;
  height: 125px;
  width: 125px;
  // z-index: 9999999999999;
`;

const Image2 = styled.img`
  position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-in-out;
  height: 200px;
  width: 200px;
  // z-index: 9999999999999;
`;

// let resetTimeout;

const Logo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const maxDistance = 10; // Adjust this value to control the maximum distance
    const deltaX = mouseX - containerRect.width / 2;
    const deltaY = mouseY - containerRect.height / 2;
    const distance = Math.min(
      Math.sqrt(deltaX * deltaX + deltaY * deltaY),
      maxDistance
    );

    const angle = Math.atan2(deltaY, deltaX);
    const newX = distance * Math.cos(angle);
    const newY = distance * Math.sin(angle);

    setMousePosition({ x: mouseX, y: mouseY });
    setImagePosition({ x: newX, y: newY });

    // Clear any previous resetTimeout
    // if (resetTimeout) {
    //   clearTimeout(resetTimeout);
    // }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseLeave = () => {
      // When the cursor leaves the container, reset the images
      setImagePosition({ x: 0, y: 0 });
    };

    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Remove the event listener when the component unmounts
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <LogoContainer ref={containerRef} onMouseMove={handleMouseMove}>
      <Image1
        src={image1}
        style={{
          transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
        }}
      />
      <Image2
        src={image2}
        style={{
          transform: `translate(${-imagePosition.x}px, ${-imagePosition.y}px)`,
        }}
      />
    </LogoContainer>
  );
};

export default Logo;
