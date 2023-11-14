import styled, { css } from "styled-components";

export const Section = styled.div`
  // padding: 70px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  -webkit-text-stroke-width: thin;
    text-align-last: end;
`;

export const AboutInfoContent = styled.div`
  padding: 20px 0;
`;

const filterProps = (props) => {
  const allowedProps = ["background", "isVisible"]; // Add other allowed props here
  const filteredProps = Object.keys(props).reduce((obj, prop) => {
    if (allowedProps.includes(prop)) {
      obj[prop] = props[prop];
    }
    return obj;
  }, {});
  return filteredProps;
};

export const HeadingSecondary = styled.h2.attrs((props) => ({
  style: {
    background: props.background, // Add the background prop here
  },
  isVisible: props.isVisible,
  // Add other allowed props here
}))`
  position: relative;
  font-size: 28px;
  font-weight: 300;
  line-height: 1.1;
  text-align: center;
  padding: 150px;
  color: white;
  background: url("https://www.pub18.ro/static/img/studenti.jpg") center/cover;
`;

export const SpecialWord = styled.span`
  color: rgb(255, 98, 0);
  font-weight: 700;
`;

export const H4 = styled.h4`
  margin-top: 20px; /* Adjust as needed */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

export const Blockquote = styled.blockquote`
  color: black;
  border-left: 7px solid rgb(0, 255, 47);
  padding-left: 20px;
`;

export const DynamicH4 = styled.div`
  margin-top: 20px;

  h4 {
    /* Styles for h4 element */
  }

  img {
    width: 100%; /* Use width instead of max-width for better compatibility */
    height: auto;
    border-radius: 8px;
    display: block; /* Ensure the image is treated as a block element */
  }
`;

export const ContainerInfo = styled.div.attrs((props) => ({
  isVisible: props.isVisible,
  ...filterProps(props),
}))`
  margin-top: 100px;
  transition: margin-top 0.5s ease;

  ${(props) =>
    props.isVisible &&
    css`
      margin-top: 0;
    `}
`;

export const FirstContainerText = styled.div`
  max-width: 1200px;
  margin: 50px;
  text-align: justify;
  border-top-style: outset;
  font-size: larger;
  padding-bottom: 100px;
`;

export const ContainerParagraphs = styled.div`
  background-image: url("https://static.vecteezy.com/system/resources/previews/005/592/482/original/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg");
  background-position: bottom;
  color: dimgrey;
  padding: 200px;
  text-align: justify;
  font-style: italic;
  font-size: larger;
`;

export const SpanP = styled.div`
text-align-last: center;
margin-top: 100px;
font-size: xx-large;
margin-bottom: 50px;
font-style: oblique;
`;
