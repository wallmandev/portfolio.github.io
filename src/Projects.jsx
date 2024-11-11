import React from "react";
import './Projects.scss';

function Projects() {
    return (
      <section id="projects" className="projects">
        <div className="projects__inner">
          <header className="projects__header">
            <h2 className="projects__title">Projects</h2>
            <a href="mailto:wallmandev@gmail.com" className="project__link arrow-link--white">
              Work with me?
              <svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="16.828" viewBox="0 0 22.414 16.828">
              <g id="Group_9" data-name="Group 9" transform="translate(-797.5 -1156.101)">
                <line id="Line_4" data-name="Line 4" x2="20" transform="translate(798.5 1164.5)" fill="none" stroke="#f1f1f1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_5" data-name="Line 5" x2="7" y2="6.985" transform="translate(811.5 1157.515)" fill="none" stroke="#f1f1f1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_6" data-name="Line 6" y1="7.015" x2="7" transform="translate(811.5 1164.5)" fill="none" stroke="#f1f1f1" strokeLinecap="round" strokeWidth="2"/>
              </g>
              </svg>
            </a>
          </header>
          <div className="projects__content">

            {/* Example Projects */}
            <article className="project">

              <header className="project__header">
                <h3 className="project__title">Project 1</h3>
              </header>

              <div className="project__details">
                <figure className="project__image">
                  <img src="./src/assets/images/solsystemet.png" alt="Project description" />
                </figure>
                <div className="project__meta">2023</div>
              </div>

              <div className="project__content">
                <p>I developed an interactive solar system model as a creative project aimed at visualizing the planets distance to the sun. This project involved:
                  <ul>
                    <li>
                     <strong>Planetary Information:</strong> By clicking on a planet, users could access detailed information about its size, distance from the sun, and other unique characteristics.
                    </li><br></br>

                    <li>
                    <strong>Responsive Design:</strong> The project was built to be fully responsive, ensuring that the model could be viewed and interacted with on both desktops and mobile devices.
                    </li><br></br>

                    <li>
                      <strong>Technologies Used:</strong> HTML, CSS, JavaScript, and some basic 3D rendering techniques.
                    </li><br></br>
                  </ul>
                  
                  
                </p>
              </div>

              <div className="project__footer">
                <a href="https://github.com/wallmandev/Examination-Solaris" target="_blank" className="project__permalink">Link to project</a>
              </div>

            </article>

            <article className="project">

              <header className="project__header">
                <h3 className="project__title">Project 2</h3>
              </header>

              <div className="project__details">
                <figure className="project__image">
                  <img src="./src/assets/images/RonjaAndPatrik@2x.jpg" alt="Project description" />
                </figure>
                <div className="project__meta">2024</div>
              </div>

              <div className="project__content">
                <p>I created a custom wedding website for a couple, designed to provide a seamless experience for their guests. The site features:<br>

                  </br>
                  <ul>

                    <li>
                      <strong>RSVP Form:</strong> Integrated with Google Sheets, the RSVP form collects guest responses and meal preferences in real time, making it easy for the couple to manage their guest list.
                    </li><br></br>

                    <li>
                      <strong>Bridal Party Section:</strong> This section introduces key people involved in the wedding with personalized bios and contact information for event-related questions.
                    </li><br></br>

                    <li>
                    <strong>Responsive Design:</strong> The site is fully responsive, ensuring a smooth and consistent experience across all devices, from desktops to mobile phones.
                    </li><br></br>                 

                    <li>
                    <strong>Stylish Aesthetic:</strong> I used a clean, modern wedding theme with elegant typography and custom CSS to create a visually appealing and functional design.
                    </li><br></br>

                    <li>
                    <strong>Interactive FAQ Section:</strong> Categorized and animated FAQ sections help guests find important information quickly.
                    </li>
                  </ul>

                  
                </p>
              </div>

              <div className="project__footer">
                <a href="https://github.com/wallmandev/RonjaAndPatrik" target="_blank" className="project__permalink">Link to project</a>
              </div>

            </article>

          </div>
        </div>
      </section>
    );
}

export default Projects;