import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/master.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar active={active} />
        <Route exact path="/" render={() => <About setActive={setActive} />} />
        <Route
          path="/projects"
          render={() => <Projects setActive={setActive} />}
        />
        <Route path="/skills" render={() => <Skills setActive={setActive} />} />
      </div>
    </Router>
  );
};

export default App;
