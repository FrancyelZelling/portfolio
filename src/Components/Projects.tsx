import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";

//import ProjectItemInterface from "./ProjectItem";

interface ProjectsInterface {
  setActive(arg0: string): void;
}

const portfolio = {
  title: "Portfolio Website",
  description: "Simple portfolio made using React.js",
  tools: "React.js Typescript & Sass",
  live: "https://francyel-zelling.netlify.app",
  source: "https://github.com/FrancyelZelling/portfolio",
};

const Projects: React.FC<ProjectsInterface> = ({ setActive }) => {
  useEffect(() => setActive("projects"), [setActive]);
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectItem item={portfolio} />
      </div>
    </div>
  );
};

export default Projects;
