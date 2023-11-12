import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FooterH4 } from "./Footer.style";
import { BLACK_COLOR } from "../../constants/colors";
import { CardButton } from "../Card/Card.style";

const NewsletterContainer = styled.div`
  font-family: "Lucida Handwriting", cursive;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid ${BLACK_COLOR};
  border-radius: 15px;
  margin: 10px 0;
`;

const Button = styled(CardButton)`
  margin: 5px 0;
  padding: 0;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
`;

const ConfirmationMessage = styled.p`
  display: inline;
  color: darkGreen;
  padding-left: 20px;
`;

const ButtonContainer = styled.div``

function Newsletter() {
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    setConfirmation(`Thank you for subscribing to our newsletter!`);
    setEmail("");
  };

  return (
    <NewsletterContainer>
      <FooterH4>Email (required)</FooterH4>
      <NewsletterForm onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Your Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit">Subscribe</Button>
          <ConfirmationMessage>{confirmation}</ConfirmationMessage>
        </ButtonContainer>
      </NewsletterForm>
    </NewsletterContainer>
  );
}

export default Newsletter;
