import React from "react";
import "./about.css";
import meAbout from "../../assets/GUITAR.jpg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <icon className="about__icon">
              <FaAward />
            </icon>
            <h5>Languages</h5>
            <small>3+ learned</small>
          </article>
          <article className="about__card">
            <icon className="about__icon">
              <FaUsers />
            </icon>
            <h5>Team Projects</h5>
            <small>5+ Completed</small>
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
            Aspiring software developer with a solid foundation in full-stack development, built through the University of Utah’s coding bootcamp and further strengthened by personal projects. My focus is on building intuitive, efficient user experiences through modern tech stacks, including JavaScript, React, Node.js, and database management.
            <br></br>
            <br></br>
            In addition to technical skills, I bring a strong work ethic and adaptability from years of performing in a band, where collaboration, timing, and resilience are essential. These experiences have enhanced my ability to work well under pressure, communicate effectively, and approach problem-solving creatively. I’m eager to bring these skills, along with my enthusiasm for new technologies, to a software development role that allows me to continue learning and making a positive impact on users' experiences.
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
