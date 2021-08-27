import React from 'react';
import {
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import './style/index.css'

function Nav(props) {
  return (
    <div className="nav">
       <Switch>
          <Route exact path="/">
            <Link style={{ marginRight: "30px" }} to="/signin">
              Вход
            </Link>
            <Link style={{ marginRight: "30px" }} to="/signup">
              Регистрация
            </Link>
          </Route>
          <Route exact path="/signin">
            <Link style={{ marginRight: "30px" }} to="/signup">
              Регистрация
            </Link>
          </Route>
          <Route exact path="/signup">
            <Link style={{ marginRight: "30px" }} to="/signin">
              Вход
            </Link>
          </Route>
        </Switch>
    </div>
  );
}

export default Nav;
