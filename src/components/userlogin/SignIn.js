import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../common/Footer/Footer";

const Signin = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:3002/user/" + username)
        .then((res) => {
          console.log(res); // {}
          console.log(res.status); // undef
          return res.json();
        })
        .then((resp) => {
          console.log(resp); // {}

          console.log(resp.name); // undef
          console.log(username); // Cristina

          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp?.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              usenavigate("/admin");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    console.log(result);
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [username, usernameupdate] = useState("");
//   const [password, passwordupdate] = useState("");

//   const usenavigate = useNavigate();

//   useEffect(() => {
//     sessionStorage.clear();
//   }, []);

//   const ProceedLogin = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       ///implentation
//       // console.log('proceed');
//       fetch("http://localhost:3002/user/" + username)
//         .then((res) => {
//           return res.json();
//         })
//         .then((resp) => {
//           //console.log(resp)
//           if (Object.keys(resp).length === 0) {
//             toast.error("Please Enter valid username");
//           } else {
//             if (resp.password === password) {
//               toast.success("Success");
//               sessionStorage.setItem("username", username);
//               sessionStorage.setItem("userrole", resp.role);
//               usenavigate("/");
//             } else {
//               toast.error("Please Enter valid credentials");
//             }
//           }
//         })
//         .catch((err) => {
//           toast.error("Login Failed due to :" + err.message);
//         });
//     }
//   };

//   const ProceedLoginusingAPI = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       ///implentation
//       // console.log('proceed');
//       let inputobj = { username: username, password: password };
//       fetch("https://localhost:44308/User/Authenticate", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(inputobj),
//       })
//         .then((res) => {
//           return res.json();
//         })
//         .then((resp) => {
//           console.log(resp);
//           if (Object.keys(resp).length === 0) {
//             toast.error("Login failed, invalid credentials");
//           } else {
//             toast.success("Success");
//             sessionStorage.setItem("username", username);
//             sessionStorage.setItem("jwttoken", resp.jwtToken);
//             usenavigate("/");
//           }
//           // if (Object.keys(resp).length === 0) {
//           //     toast.error('Please Enter valid username');
//           // } else {
//           //     if (resp.password === password) {
//           //         toast.success('Success');
//           //         sessionStorage.setItem('username',username);
//           //         usenavigate('/')
//           //     }else{
//           //         toast.error('Please Enter valid credentials');
//           //     }
//           // }
//         })
//         .catch((err) => {
//           toast.error("Login Failed due to :" + err.message);
//         });
//     }
//   };
//   const validate = () => {
//     let result = true;
//     if (username === "" || username === null) {
//       result = false;
//       toast.warning("Please Enter Username");
//     }
//     if (password === "" || password === null) {
//       result = false;
//       toast.warning("Please Enter Password");
//     }
//     return result;
//   };
//   return (
//     <div className="row">
//       <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
//         <form onSubmit={ProceedLogin} className="container">
//           <div className="card">
//             <div className="card-header">
//               <h2>User Login</h2>
//             </div>
//             <div className="card-body">
//               <div className="form-group">
//                 <label>
//                   User Name <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={username}
//                   onChange={(e) => usernameupdate(e.target.value)}
//                   className="form-control"
//                 ></input>
//               </div>
//               <div className="form-group">
//                 <label>
//                   Password <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => passwordupdate(e.target.value)}
//                   className="form-control"
//                 ></input>
//               </div>
//             </div>
//             <div className="card-footer">
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>{" "}
//               |
//               <Link className="btn btn-success" to={"/register"}>
//                 New User
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // ===============  VARIANT 1 ====================

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   FormGroup,
//   Input,
//   Label,
//   SignInButton,
//   SignUpLink,
//   SigninContainer,
// } from "./SignIn.style";

// const Signin = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [userinfo, setUserinfo] = useState({});
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const { email } = useParams();
//   // const { password } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3002/user`)
//       .then((response) => response.json())
//       .then((userinfo) => {
//         setUserinfo(userinfo);
//         console.log(userinfo);
//         console.log(userinfo[0].password);
//       })
//       .catch((error) => {
//         setError(true);
//         console.log("Error", error);
//       });
//   }, []);

//   console.log(userinfo, userinfo?.email, userinfo?.password);

//   useEffect(() => {
//     fetch(`http://localhost:3002/user/${email}`)
//       .then((response) => response.json())
//       .then((emaillogin) => {
//         setEmail(emaillogin);
//         console.log(email);
//       })
//       .catch((error) => {
//         setError(true);
//         console.log("Error", error);
//       });
//   }, []);

//   useEffect(() => {
//     fetch(`http://localhost:3002/user/${password}`)
//       .then((response) => response.json())
//       .then((passwordlogin) => {
//         setPassword(passwordlogin);
//         console.log(passwordlogin);
//       })
//       .catch((error) => {
//         setError(true);
//         console.log("Error", error);
//       });
//   }, []);

//   // if (userinfo.length > 0) {
//   //   const user = userinfo[0];
//   //   console.log("User signed in:", user);
//   //   // Check if the user is an admin
//   //   if (user.type === "admin") {
//   //     // Set a flag in localStorage to indicate admin status
//   //     localStorage.setItem("isAdmin", true);
//   //     // Redirect to the admin home page
//   //     navigate("/admin");
//   //     // Redirect to the regular home page
//   //   }
//   //   // else {
//   //   //   navigate("/homepage");
//   //   // }

//   //   // // Display success message
//   //   // alert("Sign in successful!");
//   // }

//   // else {
//   //   alert("Unknown user. Please register.");
//   //   navigate("/register");
//   // }

//   return (
//     <SigninContainer>
//       <h1>Sign In</h1>
//       <form>
//         {/* <form onSubmit={handleSignIn}> */}
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

// // ===============  VARIANT 2 ====================
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   FormGroup,
//   Input,
//   Label,
//   SignInButton,
//   SignUpLink,
//   SigninContainer,
// } from "./SignIn.style";

// const Signin = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [userinfo, setUserinfo] = useState({});
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const { email } = useParams();

//   const { password } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3002/user`)
//       .then((response) => response.json())
//       .then((userinfo) => {
//         setUserinfo(userinfo);
//         console.log(userinfo);
//       })
//       .catch((error) => {
//         setError(true);
//         console.log("Error", error);
//       });
//   }, []);

//   if (userinfo.length > 0) {
//     const user = userinfo[0];
//     console.log("User signed in:", user);
//     // Check if the user is an admin
//     if (user.type === "admin") {
//       // Set a flag in localStorage to indicate admin status
//       localStorage.setItem("isAdmin", true);
//       // Redirect to the admin home page
//       navigate("/admin");
//       // Redirect to the regular home page
//     }
//     // else {
//     //   navigate("/homepage");
//     // }

//     // // Display success message
//     // alert("Sign in successful!");
//   } else {
//     alert("Unknown user. Please register.");
//     navigate("/register");
//   }
//   //  ma ducedirect in pagina de  admin.. ca si cum m-am logat cu un admin user..
//   return (
//     <SigninContainer>
//       <h1>Sign In</h1>
//       <form>
//         {/* <form onSubmit={handleSignIn}> */}
//         <FormGroup>
//           <Label>Email:</Label>
//           <Input
//             type="email"
//             value={email}
//             // onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Password:</Label>
//           <Input
//             type="password"
//             value={password}
//             // onChange={(e) => setPassword(e.target.value)}
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
// // ===============  VARIANT 3 ====================

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

//     try {
//       const response = await fetch(
//         `http://localhost:3000/user?email=${email}&password=${password}`
//       );

//       // Check if the response status is OK (status code 200)
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const users = await response.json();

//       if (users.length > 0) {
//         const user = users[0];
//         console.log("User signed in:", user);
//         // Check if the user is an admin
//         if (user.type === "admin") {
//           // Set a flag in localStorage to indicate admin status
//           localStorage.setItem("isAdmin", true);
//           // Redirect to the admin home page
//           navigate("/admin");
//           // Redirect to the regular home page
//           // } else if (user.type === "guest") {
//         } else {
//           navigate("/homepage");
//         }
//         // Display success message
//         alert("Sign in successful!");
//       } else {
//         alert("Unknown user. Please register.");
//         navigate("/register");
//       }
//     } catch (error) {
//       console.error("Error during sign-in:", error);

//       // Log the entire response for debugging purposes
//       if (error instanceof Response) {
//         const responseBody = await error.text();
//         console.error("Response body:", responseBody);
//       }

//       // Check if the error is a network error
//       if (error.message === "Failed to fetch") {
//         alert(
//           "Network error. Please check your internet connection and try again."
//         );
//       } else {
//         alert("An error occurred. Please try again later.");
//       }
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
