import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/master.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </div>
    </Router>
  );
};

export default App;
