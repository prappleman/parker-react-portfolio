import React from "react";
import "./project.css";
import cover1 from "../../assets/LOOP.png";
import cover2 from "../../assets/JATE.png";
import cover3 from "../../assets/NOTE.png";
import cover4 from "../../assets/MINE.png";
import cover5 from "../../assets/WEATHER.png";
import cover6 from "../../assets/SCHEDULE.png";

// IMAGES FOR PRIVATE USE ONLY

const data = [
  {
    id: 1,
    image: cover4,
    title: "Mine-Sweep",
    github: "https://github.com/prappleman/mine-sweep",
    demo: "https://mine-sweep.onrender.com",
  },
  {
    id: 2,
    image: cover1,
    title: "Dev-Loop",
    github: "https://github.com/prappleman/dev-loop",
    demo: "https://dev-loop-f0cb37ae8bd9.herokuapp.com",
  },
  {
    id: 3,
    image: cover5,
    title: "5-Day Weather",
    github: "https://github.com/prappleman/5-day-Weather",
    demo: "https://prappleman.github.io/5-day-Weather/",
  },
  {
    id: 4,
    image: cover2,
    title: "J.A.T.E.",
    github: "https://github.com/prappleman/PWA-Text-Editor",
    demo: "https://text-editor-pwa12-ed67e7c236f3.herokuapp.com",
  },
  {
    id: 5,
    image: cover3,
    title: "Note-Taker",
    github: "https://github.com/prappleman/Note-Taker",
    demo: "https://note-taker-brry.onrender.com/notes",
  },
  {
    id: 6,
    image: cover6,
    title: "Schedule Planner",
    github: "https://github.com/prappleman/Schedule-Planner",
    demo: "https://prappleman.github.io/Schedule-Planner/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank" 
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
