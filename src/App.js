import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Signin from "./Signin";
import Signup from "./Signup";
import './style/index.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
