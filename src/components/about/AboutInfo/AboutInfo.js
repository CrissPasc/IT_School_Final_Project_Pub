import React, { useEffect, useRef, useState } from "react";
import {
  Section,
  FirstContainerText,
  ContainerParagraphs,
  Container,
  AboutInfoContent,
  HeadingSecondary,
  SpecialWord,
  DynamicH4,
  ContainerInfo,
  SpanP
} from "./AboutInfoStyled";
import { StyleSheetManager } from "styled-components"; // Import StyleSheetManager
import isPropValid from "@emotion/is-prop-valid";

const AboutInfo = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on your needs
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Section is visible");
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Section ref={sectionRef}>
        <Container>
          {isVisible && (
            <ContainerInfo className="visible">
              <AboutInfoContent>
                <FirstContainerText>
                  {" "}
                  Welcome to The Phoenix Pub Nestled in the heart of Orlando,
                  The Phoenix Pub is not just a restaurant; it's an experience.
                  As you step through our doors, you embark on a culinary
                  journey where tradition and innovation collide to create a
                  dining destination like no other.
                </FirstContainerText>
                <HeadingSecondary>
                  The Phoenix Pub: A Culinary Haven Reborn Nestled in the heart
                  of Orlando <SpecialWord>The Phoenix Pub</SpecialWord> is a
                  dining destination like no other, where the warmth of
                  tradition meets the fiery spirit of reinvention. Our
                  establishment takes its name from the mythical bird, the
                  phoenix, symbolizing rebirth and renewal, and that's exactly
                  what you'll experience when you step inside.
                </HeadingSecondary>
                <SpanP>Discover us</SpanP>
                <ContainerParagraphs>
                  <p>
                    Our Story The Phoenix Pub takes its name from the mythical
                    bird, the phoenix, symbolizing rebirth and renewal. We
                    embrace these concepts in every aspect of our establishment,
                    from our warm and inviting ambiance to our carefully curated
                    menu.
                  </p>

                  <p>
                    Culinary Excellence Our mission is to redefine the culinary
                    landscape by pushing the boundaries of gastronomy. We are
                    dedicated to creativity, quality ingredients, and impeccable
                    service. Each dish on our menu is a testament to our
                    commitment to providing a dining experience that leaves a
                    lasting impression on every guest.
                  </p>

                  <p>
                    A Fusion of Flavors Explore our diverse menu that seamlessly
                    blends traditional and contemporary flavors. From hearty pub
                    classics to innovative culinary creations, our dishes are
                    crafted with passion and precision. Whether you're here for
                    a casual meal, a special celebration, or one of our vibrant
                    events, there's something for every palate at The Phoenix
                    Pub.
                  </p>

                  <p>
                    Vibrant Atmosphere The Phoenix Pub is not just a place to
                    eat; it's a hub of entertainment and excitement. Join us for
                    live music performances, trivia nights, and other engaging
                    events. Our vibrant atmosphere ensures that every visit is a
                    celebration.
                  </p>

                  <p>
                    Join Us Step inside The Phoenix Pub and experience the
                    rebirth of culinary excellence. Let the warmth of tradition
                    and the fiery spirit of reinvention guide your dining
                    adventure. We look forward to serving you and creating
                    memorable moments at The Phoenix Pub. Cheers to good food,
                    good times, and the spirit of renewal!
                  </p>
                </ContainerParagraphs>
              </AboutInfoContent>
            </ContainerInfo>
          )}
        </Container>
      </Section>
                
    </StyleSheetManager>
    
  );
};

export default AboutInfo;
