import "../css/App.css";
import "../css/normalize.css";
import React from 'react'

const Skills = () => {
    return (
      <div className="inner">
        <div className="skills-header skills-title">
          <h1>My Skills</h1>
        </div>

        <div className="skills-container">
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="/images/js.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Javascript</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/react.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>React</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/html.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Html 5</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/css.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Css 3</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/nodejs.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>NodeJs</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/express.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>ExpressJs</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/api.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>RestAPI</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/mongodb.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>MongoDB</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/responsive.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Responsive Design</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/github.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Github</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-image">
                <img
                  src="images/figma.png"
                  alt="javascript"
                  className="skills-icon"
                />
              </div>
              <h3>Figma</h3>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-image">
                  <img
                    src="images/canva.png"
                    alt="javascript"
                    className="skills-icon"
                  />
                </div>
                <h3>Canva</h3>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-image">
                  <img
                    src="images/premiere.png"
                    alt="javascript"
                    className="skills-icon"
                  />
                </div>
                <h3>Premiere</h3>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-image">
                  <img
                    src="images/ps.png"
                    alt="javascript"
                    className="skills-icon"
                  />
                </div>
                <h3>Photoshop</h3>
              </div>

              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-image">
                    <img
                      src="images/ga.png"
                      alt="javascript"
                      className="skills-icon"
                    />
                  </div>
                  <h3>Google Analytics</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills 