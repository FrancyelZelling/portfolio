import React from "react";
import "./css/master.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
    </div>
  );
};
export default App;
