import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h4>Languages</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-section">
          <h4>Tools</h4>
          <ul>
            <li>Node.js</li>
            <li>Sass</li>
            <li>Express</li>
            <li>TypeORM</li>
            <li>PostgreSQL</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skill-section">
          <h4>Soft Skills</h4>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork & Collaboration</li>
            <li>Patience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
