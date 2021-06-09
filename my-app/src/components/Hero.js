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
            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  <image
                    className="home__blob-img"
                    x="12"
                    y="-40"
                    xlinkHref="/images/margarida.png"
                  />
                </g>
              </svg>
            </div>
            <div className="home__data">
              <h1 className="home__title">Hi, I'm Margarida!</h1>
              <h3 className="home__subtitle">Front-end Developer</h3>
              <p className="home__description">
                I enjoy building clean, responsive and beautiful designs, which
                is where my passion for interface design, user experience and
                development converge.
              </p>
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/margaridagdias/"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="home__social">
                <a
                  href="https://github.com/Margaridagdias"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-square"></i>
                </a>
              </div>
              <div className="home__social">
                <a
                  href="mailto:margaridagdias3@gmail.com"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="far fa-envelope"></i>
                </a>
              </div>
              <div>
                <a href="#resume" className="button button--flex">
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>

          <div className="scrolldown">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
      </section>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </main>
  );
};

export default Hero;
