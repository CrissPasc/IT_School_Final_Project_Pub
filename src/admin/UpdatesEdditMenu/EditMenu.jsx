import React, { useEffect, useState } from "react";
import { ruteAdmin } from "../../constants/rute";
import { ContainerButton, ContainerEdit, EditButton } from "./EditMenu.style";
import { Button, Form, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../common/Footer/Footer";

const EditMenu = () => {
  const [form, setForm] = useState({
    name: "",
    section: "",
    sectiondescription: "",
    image: "",
    description: "",
    price: "",
    quantity: "",
    details: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3002/menu/${id}`)
        .then((response) => response.json())
        .then((menu) => {
          setForm(menu);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [id]);

  const [post, setPost] = useState("");
  const [error, setError] = useState(false);

  console.log("menu", form);

  const changeFormData = (name, value) => {
    const localForm = { ...form };
    localForm[name] = value;

    setForm(localForm);
  };

  const submit = () => {
    fetch(`http://localhost:3002/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then(() => {
        setError(true);
        setPost("POST request successful");
      })
      .catch((error) => {
        setError(true);
        setPost("PUT request failed");
      });
  };

  return (
    <>
      <ContainerEdit rute={ruteAdmin}>
        <h1>EDIT</h1>
        <div>
          <Alert
            show={error}
            variant={post === "PUT request failed" ? "danger" : "success"}
          >
            <Alert.Heading>My Alert</Alert.Heading>
            <p style={{ width: "300px" }}>{post}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setError(false)} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        </div>
        <div>
          <Form style={{ width: "100%" }}>
            {Object.keys(form).map((key, index) =>
              key !== "id" ? (
                <Form.Group key={index} controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                  </Form.Label>
                  <Form.Control
                    defaultValue={form?.[key] || ""}
                    onBlur={(e) => {
                      changeFormData(key, e.target.value);
                    }}
                    placeholder={
                      key.charAt(0).toUpperCase() + key.substring(1, key.length)
                    }
                  />
                </Form.Group>
              ) : null
            )}
          </Form>
        </div>
        <ContainerButton>
          <EditButton onClick={submit}>Edit Menu</EditButton>
        </ContainerButton>
      </ContainerEdit>
      <Footer />
    </>
  );
};
export default EditMenu;

// // initial

// import React, { useEffect, useState } from "react";
// import { ruteAdmin } from "../../constants/rute";
// import { ContainerButton, ContainerEdit } from "./EditMenu.style";
// import { Button, Form, Alert } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";

// const EditMenu = () => {
//   const [form, setForm] = useState({
//     name: "",
//     section: "",
//     sectiondescription: "",
//     image: "",
//     description: "",
//     price: "",
//     quantity: "",
//     details: "",
//   });

//   const { id } = useParams();
//   const navigate = useNavigate(); // Initialize useHistory

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3002/menu/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu data");
//         }
//         const menu = await response.json();
//         setForm(menu);
//       } catch (error) {
//         console.log("Error", error);
//         navigate("/error"); // Use navigate instead of history.push
//       }
//     };

//     if (id) {
//       fetchMenuData();
//     }
//   }, [id, navigate]);

//   const [post, setPost] = useState("");
//   const [error, setError] = useState(false);

//   const changeFormData = (name, value) => {
//     const localForm = { ...form };
//     localForm[name] = value;

//     setForm(localForm);
//   };

//   const submit = () => {
//     fetch(`http://localhost:3002/menu/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//     ;

//     if (!response.ok) {
//       throw new Error("PUT request failed");
//     }

//     navigate("/success");
//   } catch (error) {
//     console.log("Error", error);
//     navigate("/error");
//   }
// };

//   return (
//     <>
//       <ContainerEdit rute={ruteAdmin}>
//         <h1>EDIT</h1>
//         <div>
//           <Alert
//             show={error}
//             variant={post === "PUT request failed" ? "danger" : "success"}
//           >
//             <Alert.Heading>My Alert</Alert.Heading>
//             <p style={{ width: "300px" }}>{post}</p>
//             <hr />
//             <div className="d-flex justify-content-end">
//               <Button onClick={() => setError(false)} variant="outline-danger">
//                 Close
//               </Button>
//             </div>
//           </Alert>
//         </div>
//         <div>
//           <Form style={{ width: "100%" }}>
//             {Object.keys(form).map((key, index) =>
//               key !== "id" ? (
//                 <Form.Group key={index} controlId="exampleForm.ControlInput1">
//                   <Form.Label>
//                     {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
//                   </Form.Label>
//                   <Form.Control
//                     defaultValue={form?.[key] || ""}
//                     onBlur={(e) => {
//                       changeFormData(key, e.target.value);
//                     }}
//                     placeholder={
//                       key.charAt(0).toUpperCase() + key.substring(1, key.length)
//                     }
//                   />
//                 </Form.Group>
//               ) : null
//             )}
//           </Form>
//         </div>
//         <ContainerButton>
//           <Button onClick={submit}>Edit Menu</Button>
//         </ContainerButton>
//       </ContainerEdit>
//     </>
//   );
// };
// export default EditMenu;
