
// import React from 'react';
// import styled from 'styled-components';
// import MenuBackground from "../../../../media/bckgrd/delivery-bckgrd.png";

// const dataItems = [
//   { count: 17, label: 'years of experience' },
//   { count: 34, label: 'Team members' },
//   { count: 13000, label: 'Happy customers' },
//   { count: 60, label: 'Dishes' },
// ];

// const Container = styled.div`
// background-image: url(${MenuBackground});
//   margin: 20px;
//   background-color: red;
//   cursor: pointer;
// `;

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   margin-top: 100px;
// `;

// const DataItem = styled.div`
//   text-align: center;
// `;



// export const LocationInfo = styled.div`
//   text-align: center;
//   margin-top: 20px;
//   padding-bottom: 100px;
// `;

// const OurData = () => {
//   return (
//     <Container>
//       <GridContainer>
//         {dataItems.map((item, index) => (
//           <DataItem key={index}>
//             <h1>{item.count}</h1>
//             <p>{item.label}</p>
//           </DataItem>
//         ))}
//       </GridContainer>
//       <LocationInfo>
//                   <h3>Visit Us</h3>
//                   <p>123 Main Street, Orlando, FL 32801</p>
//                 </LocationInfo>
//     </Container>
//   );
// };

// export default OurData;




import React from 'react';
import styled from 'styled-components';
import MenuBackground from "../../../../media/bckgrd/delivery-bckgrd.png";

import LocationIcon from 'file:///C:/Users/Daiana/Downloads/location-sign-svgrepo-com.svg';

const dataItems = [
  { count: 17, label: 'years of experience' },
  { count: 34, label: 'Team members' },
  { count: 13000, label: 'Happy customers' },
  { count: 60, label: 'Dishes' },
];

const Container = styled.div`
  background-image: url(${MenuBackground});
  margin: 20px;
  background-color: red;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 100px;
`;

const DataItem = styled.div`
  text-align: center;
`;

const LocationInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-bottom: 100px;
`;

const LocationIconStyled = styled.img`
  width: 20px; // Adjust the size as needed
  height: 20px;
  margin-right: 5px; // Adjust the spacing as needed
`;

const LocationText = styled.p`
font-family: cursive;
font-size: larger;
  color: #333; // Adjust the font color as needed
`;


const OurData = () => {
  return (
    <Container>
      <GridContainer>
        {dataItems.map((item, index) => (
          <DataItem key={index}>
            <h1>{item.count}</h1>
            <p>{item.label}</p>
          </DataItem>
        ))}
      </GridContainer>
      <LocationInfo>
        <h3>
          <LocationIconStyled src={LocationIcon} alt="Location Icon" />
          Visit Us
        </h3>
        <LocationText>Park Lane 123, Orlando, FL 32801</LocationText>
      </LocationInfo>
    </Container>
  );
};

export default OurData;