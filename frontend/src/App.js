import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Interface from "./components/Interface";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CurrentUserProvider from "./CurrentUser";
import Pastnotes from "./components/settings/Pastnotes";

function App() {
  const [token, setToken] = useState()
  if(!token){
    return (
      <Login setToken={setToken} />
    )
  }
  return (
    <CurrentUserProvider>
    <div>

       <Router>
          <Navigation />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/signUp" component={SignUp} />
          <Route path="/Interface" component={Interface} />
          <Route path="/Pastnotes" component={Pastnotes} />
        </Switch>
      </Router>
    </div>
    </CurrentUserProvider>
  )
}

export default App;
