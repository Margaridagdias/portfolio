import React from 'react'
import "../components/Footer.css";


const Footer = () => {
    
        return (
            <footer className="footer">
              <div className="footer__bg">
                <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Margarida</h1>
            <span className="footer__subtitle">UX Researcher</span>
          </div>
          <ul className="footer__links">
           <li>
              <a href="#home" className="footer__link">Home</a>
            </li>
          <li>
              <a href="#about" className="footer__link">About Me</a>
            </li>
            <li>
              <a href="#projects" className="footer__link">Projects</a>
            </li>        
          </ul>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/margaridagdias/" className="footer__social">
                  <i class="fab fa-linkedin-in"></i>
            </a>
             <a href="https://github.com/Margaridagdias" className="footer__social"> 
                  <i class="fab fa-github"></i>
            </a>
          </div>
                </div>
                <p className="footer__copy">&#169; by Margarida Dias</p>
              </div>
            </footer>
          
        );
    }



export default Footer