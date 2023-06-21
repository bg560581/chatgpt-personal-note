import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Interface from "./components/Interface";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {

  return (
    <div>
       <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/Interface" component={Interface} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
