import React from "react";
import "../components/Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container">
        <div>
          {/* Project 1 */}
          <div className="projects__content grid">
            <img
              src="/images/moshifypic.png"
              alt=""
              className="projects__img"
            />
            <div className="projects__data">
              <h3 className="projects__title">
                <p className="portfolio__description">
                  Cloud hosting website using HTML5 & CSS3.
                </p>
                <a
                  href="https://mdmoshify.netlify.app"
                  className="button button-flex button--small project__button"
                >
                  Demo<i class="fas fa-arrow-right button-icon-1"></i>
                </a>
              </h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="projects__content grid">
            <img
              src="/images/tours__img.png"
              alt=""
              className="projects__img"
            />
            <div className="projects__data">
              <h3 className="projects__title">
                <p className="portfolio__description">
                  Fetching data in React.
                </p>
                <a
                  href="https://mdmoshify.netlify.app"
                  className="button button-flex button--small project__button"
                >
                  Demo<i class="fas fa-arrow-right button-icon-1"></i>
                </a>
              </h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects__content grid">
            <img
              src="/images/birthdays__img.png"
              alt=""
              className="projects__img"
            />
            <div className="projects__data">
              <h3 className="projects__title">
                <p className="portfolio__description">
                  Recreation of <a className="a-links" href="https://uidesigndaily.com">uidesigndaily </a>
                  Fetching data in React
                </p>
                <a
                  href="https://iconicbirthdays.netlify.app"
                  className="button button-flex button--small project__button"
                >
                  Demo<i class="fas fa-arrow-right button-icon-1"></i>
                </a>
              </h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects__content grid">
            <img
              src="/images/5SecondRule__img.png"
              alt=""
              className="projects__img"
            />
            <div className="projects__data">
              <h3 className="projects__title">
                <p className="portfolio__description">
                  Catch the biggest number of black squares in 5 seconds!
                </p>
                <a
                  href="https://five-second-rule.herokuapp.com/"
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
