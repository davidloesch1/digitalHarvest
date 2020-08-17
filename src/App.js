import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reflections from "./components/Reflections";

import PublicMap from "./components/PublicMap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <HashRouter basename="/">
        <Router>
          <Switch>
            <Route path="/mapper/">
              <Nav />
              <PublicMap />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Nav />
              <Header />
              <Reflections />
            </Route>
          </Switch>
        </Router>
      </HashRouter>
    </div>
  );
}

export default App;
