import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import View1 from "./views/01";
import View2 from "./views/02";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/01" exact component={View1} />
      <Route path="/02" exact component={View2} />
    </Router>
  );
}

export default App;
