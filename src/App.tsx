import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/master.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};
export default App;
