import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Graph from "./pages/Graph";
import "./style/App.css"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:city/:day" component={Graph} />
      </Switch>
    </Router>
  );
};

export default App;
