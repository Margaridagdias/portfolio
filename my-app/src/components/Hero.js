import React from "react";
import "../css/App.css";
import "../css/normalize.css";
import "../components/hero.css";

const Hero = () => {
  return (
    <main>
      <section className="home-section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/margaridagdias/"
                className="home__social-icon"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="home__social">
              <a
                href="https://github.com/Margaridagdias"
                className="home__social-icon"
              >
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="circular-text">
          <img src="/images/scrolldown.png" alt="" width="58px" height="58px" />
        </div>
      </section>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </main>
  );
};

export default Hero;
