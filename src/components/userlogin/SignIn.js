import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FormGroup,
  Input,
  Label,
  SignInButton,
  SignUpLink,
  SigninContainer,
} from "./SignIn.style";

const Signin = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [userinfo, setUserinfo] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { email } = useParams();

  const { password } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/user`)
      .then((response) => response.json())
      .then((userinfo) => {
        setUserinfo(userinfo);
        console.log(userinfo);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  if (userinfo.length > 0) {
    const user = userinfo[0];
    console.log("User signed in:", user);
    // Check if the user is an admin
    if (user.type === "admin") {
      // Set a flag in localStorage to indicate admin status
      localStorage.setItem("isAdmin", true);
      // Redirect to the admin home page
      navigate("/admin");
      // Redirect to the regular home page
    }
    // else {
    //   navigate("/homepage");
    // }

    // // Display success message
    // alert("Sign in successful!");
  }

  // else {
  //   alert("Unknown user. Please register.");
  //   navigate("/register");
  // }

  return (
    <SigninContainer>
      <h1>Sign In</h1>
      <form>
        {/* <form onSubmit={handleSignIn}> */}
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SignInButton type="submit">Sign In</SignInButton>
      </form>
      <SignUpLink>
        Don't have an account? <Link to="/register">Register</Link>
      </SignUpLink>
    </SigninContainer>
  );
};

export default Signin;

// initial try

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FormGroup,
//   Input,
//   Label,
//   SignInButton,
//   SignUpLink,
//   SigninContainer,
// } from "./SignIn.style";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     // Fetch user from the database based on email and password
//     const response = await fetch(
//       `http://localhost:3000/user?email=${email}&password=${password}`
//     );
//     const users = await response.json();

//     if (users.length > 0) {
//       const user = users[0];
//       console.log("User signed in:", user);
//       // Check if the user is an admin
//       if (user.type === "admin") {
//         // Set a flag in localStorage to indicate admin status
//         localStorage.setItem("isAdmin", true);
//         // Redirect to the admin home page
//         navigate("/admin");
//         // Redirect to the regular home page
//       } else if (user.type === "guest") {
//         navigate("/homepage");
//       }

//       // Display success message
//       alert("Sign in successful!");
//     } else {
//       alert("Unknown user. Please register.");
//       navigate("/register");
//     }
//   };

//   return (
//     <SigninContainer>
//       <h1>Sign In</h1>
//       <form onSubmit={handleSignIn}>
//         <FormGroup>
//           <Label>Email:</Label>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Password:</Label>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <SignInButton type="submit">Sign In</SignInButton>
//       </form>
//       <SignUpLink>
//         Don't have an account? <Link to="/register">Register</Link>
//       </SignUpLink>
//     </SigninContainer>
//   );
// };

// export default Signin;
