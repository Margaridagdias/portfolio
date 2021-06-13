import React from "react";
import "../components/Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container">
        <div>
          <div className="projects__content grid">
            <img
              src="/images/moshifypic.png"
              alt=""
              className="projects__img"
            />
            <div className="projects__data">
              <h3 className="projects__title">
                <p className="portfolio__description">Website that does this</p>
                <a
                  href="https://mdmoshify.netlify.app"
                  className="button button-flex button--small project__button"
                >
                  Demo<i class="fas fa-arrow-right button-icon-1"></i>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
