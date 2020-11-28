import React from "react";
import { Link } from "react-router-dom";

interface NavbarInterface {
  active: string;
}

const Navbar: React.FC<NavbarInterface> = ({ active }) => {
  return (
    <nav>
      <ul>
        <Link
          to="/"
          className={`nav-item ${active === "about" && "nav-item-focused"}`}
        >
          About Me
        </Link>
        <Link
          to="/skills"
          className={`nav-item ${active === "skills" && "nav-item-focused"}`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={`nav-item ${active === "projects" && "nav-item-focused"}`}
        >
          Projects
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
