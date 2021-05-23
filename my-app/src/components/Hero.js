import React from "react";
import "../css/App.css";
import "../css/normalize.css";

const Hero = () => {
  return (
    <div>
      <div>
        <header class="main-header">
          <a href="/" class="brand-logo">
            <img src="/images/grayM.png" alt="/" width="40px" height="40px" />
          </a>
          <nav class="main-nav">
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

        <section class="home-main-section">
          <div class="call-to-action">
            <h1 class="title">Margarida Dias</h1>
            <span class="subtitle">Front end Developer</span>
            {/* <a href="about.html" class="hero-btn">Get to know me</a> */}
          </div>

          <div class="circular-text">
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
