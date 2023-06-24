import React from "react";
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
  const backgroundStyle = {
    backgroundImage: 'url("./components/public/grass.png")'
  }
  return (
    <CurrentUserProvider>
    <div>
       <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/Interface" component={Interface} />
          <Route path="/Pastnotes" component={Pastnotes} />
        </Switch>
      </Router>
    </div>
    </CurrentUserProvider>
  )
}

export default App;
