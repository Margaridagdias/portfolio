import React from "react";
import "../css/App.css";
import "../css/normalize.css";

const Hero = () => {
  return (
    <div>
      <div>
        <header className="main-header">
          <a href="/" className="brand-logo">
            <img src="/images/grayM.png" alt="/" width="40px" height="40px" />
          </a>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="about.html">About me</a>
              </li>
              <li>
                <a href="skills.html">Skills</a>
              </li>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="home-main-section">
          <div className="call-to-action">
            <h1 className="title">Margarida Dias</h1>
            <span className="subtitle">Front end Developer</span>
            {/* <a href="about.html" className="hero-btn">Get to know me</a> */}
          </div>

          <div className="circular-text">
            <img
              src="/images/scrolldown.png"
              alt=""
              width="58px"
              height="58px"
            />
          </div>
        </section>
      </div>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Hero;
