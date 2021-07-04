import React from 'react';
import "../components/Background.css";


const Background = () => {

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" id="education">
                        <i class="fas fa-graduation-cap qualification__icon">
                            Education
                        </i>
                    </div>
                </div>

                <div className="qualification__sections">
                   <div className="qualification__content">
                              
                              
                                 {/* qualification 1 */}
                       <div className="qualification__data">
                           <div>
                               <h3 className="qualification__title">Communication and Media</h3>
                               <span className="qualification__subtitle">Lisbon - Universidade Lusíada de Lisboa</span>
                            <div className="qualification__calendar">
                                <i class="far fa-calendar-alt"></i>
                                    2017-2020
                            </div>
                           </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                       </div>

                          {/* qualification 2 */}
                       <div className="qualification__data">
                                <div></div>
                       <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                           <div>
                               <h3 className="qualification__title">Full Stack Web Development</h3>
                               <span className="qualification__subtitle">Lisbon - Ironhack</span>
                            <div className="qualification__calendar">
                                <i class="far fa-calendar-alt"></i>
                                   2020
                            </div>
                           </div>
                                


                       </div>

                        {/* qualification 3 */}
                       <div className="qualification__data">

                      
                           <div>
                               <h3 className="qualification__title">UX Research and Qualitative Analysis</h3>
                               <span className="qualification__subtitle">remote - Udemy</span>
                            <div className="qualification__calendar">
                                <i class="far fa-calendar-alt"></i>
                                   2021
                            </div>
                           </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>


                       </div>

                       {/* qualification 4 */}
                       <div className="qualification__data">
            <div></div>
                       <div>
                                        <span className="qualification__rounder"></span>
                                       
                                    </div>

                           <div>
                               <h3 className="qualification__title">The Complete Figma Course – Designing Mobile & Web App UI/UX</h3>
                               <span className="qualification__subtitle">remote - Udemy</span>
                            <div className="qualification__calendar">
                                <i class="far fa-calendar-alt"></i>
                                   2021
                            </div>
                           </div>
                       </div>
                   </div> 
                </div>
            </div>
        </section>
    )
}

export default Background