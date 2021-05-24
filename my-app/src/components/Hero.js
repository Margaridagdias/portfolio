import React, { useState } from "react";
import "../css/App.css";
import "../css/normalize.css";

const Hero = () => {
  return (


    <div className="hero-container">

        <section className="hero-main-section">
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

      
      

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>

      </div>
  );
};

export default Hero;
