import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <Link to="/" className="nav-item nav-item-focused">
          About Me
        </Link>
        <Link to="/projects" className="nav-item">
          Projects
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
