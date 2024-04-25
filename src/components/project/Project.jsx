import React from "react";
import "./project.css";

// TODO: change project photos
import cover1 from "../../assets/portfolio1.jpg";
import cover2 from "../../assets/portfolio2.jpg";
import cover3 from "../../assets/portfolio3.jpg";
import cover4 from "../../assets/DFQ2.gif";
import cover5 from "../../assets/portfolio5.png";
import cover6 from "../../assets/portfolio6.jpg";

// IMAGES FOR PRIVATE USE ONLY (NO CREATIVE COMMONS)

// TODO: change project links to mine

const data = [
  {
    id: 1,
    image: cover1,
    title: "Dev-Loop",
    github: "https://github.com/prappleman/dev-loop",
    demo: "https://dev-loop-f0cb37ae8bd9.herokuapp.com",
  },
  {
    id: 2,
    image: cover2,
    title: "Mix & Match",
    github: "https://github.com/isayani/cocktail-music-generator",
    demo: "https://isayani.github.io/cocktail-music-generator/",
  },
  {
    id: 3,
    image: cover3,
    title: "URB+SAGE Apothecary",
    github: "https://github.com/isayani",
    demo: "https://urbnsage.com",
  },
  {
    id: 4,
    image: cover4,
    title: "Dhul-Faqar Label",
    github: "https://github.com/isayani",
    demo: "https://dhulfaqar.com",
  },
  {
    id: 5,
    image: cover5,
    title: "Veriti",
    github: "https://github.com/veriti-app/veriti",
    demo: "https://veriti-app.herokuapp.com/",
  },
  {
    id: 6,
    image: cover6,
    title: "Daily Planner",
    github: "https://github.com/isayani/third-party-api-day-planner",
    demo: "https://isayani.github.io/third-party-api-day-planner/",
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
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
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
