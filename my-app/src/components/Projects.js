import "../components/Projects.css";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../css/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

const Projects = () => {
  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container">
        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* Project 1 */}
              <div className="projects__content grid">
                <img
                  src="/images/moshifypic.png"
                  alt=""
                  className="projects__img"
                />
                <div className="projects__data">
                  <a
                    href="https://mdmoshify.netlify.app"
                    className="projects__title"
                  >
                    Moshify
                  </a>
                  <p className="projects__description">
                    Cloud hosting website using HTML5 & CSS3!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Project 2 */}
              <div className="projects__content grid">
                <img
                  src="/images/tours__img.png"
                  alt=""
                  className="projects__img"
                />
                <div className="projects__data">
                  <a
                    href="https://tours-react-project-2021.netlify.app"
                    className="projects__title"
                  >
                    Fecthing Tours
                  </a>
                  <p className="projects__description">
                    Fetching data in React!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Project 3 */}
              <div className="projects__content grid">
                <img
                  src="/images/birthdays__img.png"
                  alt=""
                  className="projects__img"
                />
                <div className="projects__data">
                  <a
                    href="https://iconicbirthdays.netlify.app"
                    className="projects__title"
                  >
                    Iconic Birthdays
                  </a>
                  <p className="projects__description">
                    Editing data with React!
                    <br />
                    Recreation of
                    <a className="a-links" href="https://uidesigndaily.com">
                      uidesigndaily
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Project 4 */}
              <div className="projects__content grid">
                <img
                  src="/images/5SecondRule__img.png"
                  alt=""
                  className="projects__img"
                />
                <div className="projects__data">
                  <a
                    href="https://five-second-rule.herokuapp.com/"
                    className="projects__title"
                  >
                    5 Second Rule
                  </a>
                  <p className="projects__description">
                    Catch the biggest number of black squares in 5 seconds!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
