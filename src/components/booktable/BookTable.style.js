import React from "react";
import { styled } from "styled-components";
import { BLACK_COLOR, GOLD_COLOR_SECONDARY_HEX } from "../../constants/colors";
import { CardButton } from "../../common/Card/Card.style";

export const BookTableContainer = styled.div`
  background: radial-gradient(circle, rgba(87, 15, 138, 0.6) 0%, rgba(255,255,255,1) 100%);
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BookTableH1 = styled.h1`
  font-family: 'Monotype Corsiva';
  font-size: 3rem;
  color: ${BLACK_COLOR};
  font-weight: bold;
  text-align: center;
  margin: 0 15%;
  padding: 50px 20px;
  width: 80vw;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0 0 30px 30px;
  &:hover {color: ${GOLD_COLOR_SECONDARY_HEX}};
`

export const FormContainer = styled.form`
  position: relative;
  font-family: Cursive;
  width: 50vw;
  margin: 50px 0;
  background: #ff7777;
  padding: 20px;
  padding-bottom: 90px;
  border-radius: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
  }
`;

export const FormImg = styled.img`
  height: auto;
  width: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  margin: -20px 0;
  border-radius: 50px;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

export const SubmitButton = styled(CardButton)`
  position: absolute;
  right: 20px;
  padding: 12px;
  background: #ff4242;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50px;
  transition: background 0.3s;
  &:hover {
    background: #ff2020;
  }
`;