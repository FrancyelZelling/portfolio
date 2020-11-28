import React from "react";

interface PropsInterface {
  item: ProjectItemInterface;
}

export interface ProjectItemInterface {
  title: string;
  description: string;
  tools: string;
}

const ProjectItem: React.FC<PropsInterface> = ({ item }) => {
  return (
    <div className="project">
      <div className="img-blank">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <h5>Tools</h5>
        <p>{item.tools}</p>
      </div>
      <div className="buttons">
        <button className="main">View Live</button>
        <button className="secondary">View Code</button>
      </div>
    </div>
  );
};

export default ProjectItem;
