import React from "react";
import "./about.css";
// TODO: change about me photo
import meAbout from "../../assets/IMG_0337.jpg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Creator in About Section" />
          </div>
        </div>

        <div className="about__content">
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
          {/* TODO: change  get to know me*/}
          <p>
            I graduated from the University of Georgia (Go Dawgs!) in May 2019 with a Bachelor of Science and a minor in Studio Art. At the moment, I am part of the Home Depot BA Analytics team, specifically dealing with finance, strategy and e-commerce performance. I have a deep knowledge in Data Analytics, which I used to strengthen my career as a Retail Planner and now as a Financial Analyst. I am an inquisitive and deep thinker, who loves efficiency and cross-functionality. 
            <br/> <br/>
            My strong need for organization mixed with my relentless attention to detail opened my eyes to gaps in automation across the field, inspiring me to think beyond Information Systems. Coming from the retail world allows me to find unique solutions when coding databases and backend frameworks. I am a strong believer in continued education and am currently enrolled in Georgia Institute of Technology's Full Stack Web Development Bootcamp. My most current career goal is entering the Computer Science realm, challenging myself to pivot, and following my passions of Automation/Systems Engineering in Retail.
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
