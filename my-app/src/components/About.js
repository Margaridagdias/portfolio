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
            Hi! I'm a Front-end developer with a background in Web Development,
            Design & UX Testing and Digital production & communication.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">MERN stack</span>
            </div>

            <div>
              <span className="about__info-title">IELTS C1</span>
            </div>
          </div>

          <div>
            <a href="MargaridaDiasCV.pdf" download="Margarida Dias Front-end Developer CV" className="button button--flex">
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
