import React from "react";
import { Link } from "react-router-dom";

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
        <div className="btn-container">
          <button className="skills-btn">
            <Link to="/skills">Skills</Link>
          </button>
          <button className="project-btn">
            <Link to="/projects">Projects</Link>
          </button>
        </div>
      </div>
      <div className="contact">
        <img src="https://i.imgur.com/YgnzBbR.jpg" alt="profile-pic" />
        <div className="email">
          <h4>email</h4>
          <button>zellingf@gmail.com</button>
        </div>
        <div className="socials">
          <h4>socials</h4>
          <button>LinkedIn</button>
          <button>Github</button>
          <button>Twitter</button>
        </div>
      </div>
    </section>
  );
};

export default About;
