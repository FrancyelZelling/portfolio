import React from "react";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="description">
        <h2>Francyel Zelling</h2>
        <h3>Full Stack Developer & Web Designer</h3>
        <p>
          "Lorem ipsum dolor sit amet. Vel deleniti sequi qui eveniet quod non
          vero ratione? At praesentium deserunt ab provident commodi 33
          molestiae quaerat. Quo quod blanditiis in enim animi sed quos
          deleniti. Aut voluptatem veniam non nesciunt voluptas cum quia
          repellendus ea molestias perspiciatis. Aut ipsa aliquid ut quod
          distinctio et corporis repudiandae. Aut architecto consequatur ea
          praesentium voluptatem ab consequatur soluta ut voluptatem omnis et
          necessitatibus dolor qui dolore perspiciatis! Aut molestiae nemo ad
          quae asperiores id quos obcaecati! Et enim ipsam eum accusantium dolor
          ad consequatur dolor aut impedit natus."
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
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
        </div>
        <div className="soft-skills-section">
          <h4>Soft Skills</h4>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork & Collaboration</li>
            <li>Patience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
