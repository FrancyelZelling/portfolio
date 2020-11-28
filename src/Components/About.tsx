import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface AboutInterface {
  setActive(arg0: string): void;
}

const About: React.FC<AboutInterface> = ({ setActive }) => {
  useEffect(() => setActive("about"), [setActive]);

  return (
    <section className="about">
      <div className="description">
        <h2>Francyel Zelling</h2>
        <h3>Full Stack Developer & Web Designer</h3>
        <p>
          Amante de Tecnologia, estudo sobre programação desde 2017, porém,
          brinco desde meus 15 anos, quando cursei brevemente um curso de
          desenvolvimento em games.
        </p>

        <p>
          Atualmente meu maior objetivo é trabalhar na área de desenvolvimento
          web. Já desenvolvi vários sites simples usando HTML, CSS e Javascript,
          mas quando descobri o React.js me apaixonei com o conceito de SPA, e
          de quão facil é costruir sites ultilizando ele.
        </p>

        <p>
          No momento ultilizo junto do React o Typescript, que ao meu ver
          facilita muito o desenvolvimento, e ajuda a previnir erros "bobos".
          Também tenho conhecimento sobre Python, pois desenvolvi um backend
          simples para um ecommerce ultilizando o flask, e também sei um
          pouquinho de PHP, mas realmente Typescript & React.js são muito minhas
          tecnologias favoritas no momento.
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
          <button>
            <a href="https://www.linkedin.com/in/francyel-zelling-57aaa0192/">
              LinkedIn
            </a>
          </button>
          <button>
            <a href="https://www.github.com/FrancyelZelling">Github</a>
          </button>
          <button>
            <a href="https://www.twitter.com/francyelzelling">Twitter</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
