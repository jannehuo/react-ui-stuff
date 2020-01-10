import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import View1 from "./views/01";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/01" exact component={View1} />
    </Router>
  );
}

export default App;
