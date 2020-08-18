import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import PokemonPlant from "../pages/pokemonplant";
import PokemonWater from "../pages/pokemonwater";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/store1">
          <PokemonPlant />
        </Route>
        <Route exact path="/store2">
          <PokemonWater />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
