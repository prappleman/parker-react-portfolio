import React from "react";
import "./about.css";
import meAbout from "../../assets/cave.png";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
{/* TODO: change cards */}
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <icon className="about__icon">
              <FaAward />
            </icon>
            <h5>Experience</h5>
            <small>?+ Years Working</small>
          </article>
          <article className="about__card">
            <icon className="about__icon">
              <FaUsers />
            </icon>
            <h5>Clients</h5>
            <small>?+ Worldwide</small>
          </article>
          <article className="about__card">
            <icon className="about__icon">
              <FaTasks />
            </icon>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Creator in About Section" />
          </div>
        </div>

        <div className="about__content">
          <p>
            <h3>Experience and Knowledge:</h3>
            I kickstarted my coding journey at the University of Utah's boot camp, focusing on front-end essentials such as HTML, CSS, and JavaScript. This foundation empowered me to explore advanced tools like jQuery and React, refining my skills in developing intuitive and user-friendly web interfaces. On the back end, I gained proficiency in Node.js, Express.js, MySQL, and MongoDB, honing my abilities in database management and server-side programming. These experiences, coupled with my problem-solving expertise and continuous learning mindset, fuel my passion for coding and drive my pursuit of innovative solutions.
            <br/> <br/>
            <h3>About Me:</h3>
            Hailing from Utah, I immerse myself in the wonders of the outdoors, whether it's camping under the stars or simply exploring nature's beauty. Music also plays a significant role in my life, where I enjoy playing with my band and expressing myself through art. This love for creativity seamlessly merges with my work in front-end development, where I channel my passion for visual art into crafting immersive digital experiences.
          </p>

          <a href="#contact" className="btn btn-primary about__btn">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
