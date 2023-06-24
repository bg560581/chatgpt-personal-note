import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Modal } from "react-modal";

function Home() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const openLogin = () => {
    setLoginIsOpen(true);
  };
  const closeLogin = () => {
    setLoginIsOpen(false);
  };
  return (
    <div>
      <h1>Home</h1>
      <div className="desc-container">
        <h2>Welcome to Fat Farm Notes!</h2>
        <p className="description">
          Here you will be able to create a note for any occasion with any style
          in mind. Come Sign up to try it out or if you already have an account
          with us, you can log in.
        </p>
        <div className="link">
          <Link to="/Login">
            <button className="btn btn-login">Login</button>
          </Link>
        </div>
        <div>
          <Link to="/SignUp">
            <button className="btn btn-signup">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
