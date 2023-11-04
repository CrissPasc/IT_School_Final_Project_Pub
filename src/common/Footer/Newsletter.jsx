import styled from "styled-components";
import React, { useEffect, useState } from "react";

const NewsletterContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 0;
`;

const Button = styled.button`
  // background-color: #007bff;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ConfirmationMessage = styled.p`
  margin-top: 10px;
`;



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
      <h2 style={{color: "#fffefef5", textwrap: "nowrap"}}>Subscribe to our Newsletter</h2>
      <NewsletterForm onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Your Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Subscribe</Button>
      </NewsletterForm>
      <ConfirmationMessage>{confirmation}</ConfirmationMessage>
    </NewsletterContainer>
  );
}

export default Newsletter;
