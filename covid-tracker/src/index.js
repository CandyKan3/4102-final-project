import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/home";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
