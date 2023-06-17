import "./App.css";
import Interface from "./components/Interface";
import Navigation from "./components/Navigation";
import Login from "./components/authenication/Login";

function App() {
  return (
    <div>
      <Navigation />
      {/* <Interface /> */}
      <Login />
    </div>
  )
}

export default App;
