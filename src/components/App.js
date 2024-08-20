import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Actors from "./Actors";
import Directors from "../pages/Directors";
import Movies from "./Movie";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;