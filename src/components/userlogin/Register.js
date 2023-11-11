import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  Input,
  Label,
  LoginLink,
  RegisterButton,
  RegisterContainer,
} from "./Register.style";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Add registration logic here
    console.log("Name:", name, "Email:", email, "Password:", password);

    // Display success message and redirect to sign in
    alert("Registration successful! Please sign in.");
    // You can use history.push("/signin") here to redirect to the sign-in page
  };

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <RegisterButton type="submit">Register</RegisterButton>
      </form>
      <LoginLink>
        Already have an account? <Link to="/signin">Sign In</Link>
      </LoginLink>
    </RegisterContainer>
  );
};

export default Register;
