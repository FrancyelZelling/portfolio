import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li className="nav-item nav-item-focused">About Me</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
