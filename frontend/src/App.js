import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Interface from "./components/Interface";
import Home from "./components/Home";
import Login from "./components/Login";
import Delete from "./components/Delete";
import CurrentUserProvider from "./CurrentUser";
import Pastnotes from "./components/settings/Pastnotes";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <CurrentUserProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/signUp" component={SignUp} /> */}
            <Route exact path="/" component={Interface} />
            {/* <Route path="/Interface" component={Interface} /> */}
            <Route path="/Pastnotes" component={Pastnotes} />
          </Switch>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
