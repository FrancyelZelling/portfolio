import React from "react";

interface PropsInterface {
  item: ProjectItemInterface;
}

export interface ProjectItemInterface {
  title: string;
  description: string;
  tools: string;
  live: string;
  source: string;
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
        <button className="main">
          <a href={item.live}>View Live</a>
        </button>
        <button className="secondary">
          <a href={item.source}>View Source</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
