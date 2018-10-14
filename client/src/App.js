import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/BrowserRouter"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path = "/" component={Search} />
        <Route exact path = "/saved" component= {Saved} />
        <Route exact path = { NoMatch } />
      </Switch>
    </div>
  </Router>

export default App;
