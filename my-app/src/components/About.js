import React from "react";
import "../components/About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Hi! I'm a UX Researcher with a background in User Testing, Web Development and Communication & Media.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">UX</span>
              <span className="about__info-name">Research</span>
            </div>

            <div>
              <span className="about__info-title">UI</span>
              <span className="about__info-name">Design</span>
            </div>

            <div>
              <span className="about__info-title">Frontend</span>
              <span className="about__info-name">Development</span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              href="MargaridaDiasCV.pdf"
              download="Margarida Dias UX Researcher CV"
              className="button button--flex"
            >
              Download CV
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
