import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [ signupMessage, setsignupMessage ] = useState(null)

  const { email, password, username } = inputValue;

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/signup/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputValue),
//         credentials: "include",
//       });
//       const data = await response.json();
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
  
//     setInputValue({
//       email: "",
//       password: "",
//       username: "",
//     });
//   };

  const handleSubmit =  (e) => {
    e.preventDefault();
        fetch("http://localhost:5000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
    })
    .then((response) => response.json() )      
    const { message } = inputValue;
    console.log(inputValue);
    if (inputValue) {
        handleSuccess();
        setsignupMessage('You have signed up successfully!')
    } else {
      handleError(message);
    } 
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div>
      <h1>SignUp</h1>
      {{signupMessage} !== null ? (
        <div className="alert" role="alert">
          {signupMessage}
          
        </div>
      ) : null}
      <h3>
        fill out the form below and click submit to create anaccount with us
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
