import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setToken }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginMessage, setLoginMessage] = useState(null);

  const history = useHistory();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/authentication/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (response.status === 200) {
      setToken(data.token);
      setIsLoggedIn(true);
      setLoginMessage("You have logged in successfully!");
      localStorage.setItem("token", data.token);
      console.log(data);
      history.push("/");
    } else {
      setErrorMessage(data.message);
    }
  }

  if (isLoggedIn) {
    return <Link to="/" />;
  }

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [signupMessage, setSignupMessage] = useState(null);

  const { email, password, username } = inputValue;

  const handleSignupError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSignupSuccess = () =>
    toast.success("You have signed up successfully!", {
      position: "bottom-right",
    });

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          handleSignupSuccess();
          setSignupMessage("You have signed up successfully!");
        } else {
          handleSignupError(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        handleSignupError("An error occurred while signing up.");
      });

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div>
      <div className="signUp">
        <h1>Please Login</h1>
        {errorMessage !== null ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
        {loginMessage !== null ? (
          <div className="alert" role="alert">
            {loginMessage}
          </div>
        ) : null}
        <form onSubmit={handleLoginSubmit}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                name="username"
              />
            </div>
            <div className="flex-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                name="password"
              />
            </div>
          </div>
         <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="">
          {/* ----------------------SIGN-UP---PAGE---------------------- */}
          <h1>Sign Up</h1>
          {signupMessage !== null ? (
            <div className="alert" role="alert">
              {signupMessage}
            </div>
          ) : null}
          <h3>
            Fill out the form below and click submit to create an account with
            us.
          </h3>
          <form onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email..."
                onChange={handleChangeSignup}
                id="signup-email"

              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username..."
                id="signup-username"
                onChange={handleChangeSignup}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password..."
                onChange={handleChangeSignup}
                id="signup-password"

              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
