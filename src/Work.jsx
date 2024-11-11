import React from "react";
import './Work.scss';

function Work() {
    return (
      <section id="work" className="work">
        <div className="work__inner">
          <header className="work__header">
            <h2 className="work__title">A collection of my work.</h2>
            <p className="work__text">I’m a consultant, freelancing designer and web developer trying to make the web a more beautiful place.</p>
            <a href="https://github.com/wallmandev" target="_blank" className="work__link arrow-link">
              See all work
              <svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="16.828" viewBox="0 0 22.414 16.828">
              <g id="Group_9" data-name="Group 9" transform="translate(-797.5 -1156.101)">
                <line id="Line_4" data-name="Line 4" x2="20" transform="translate(798.5 1164.5)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_5" data-name="Line 5" x2="7" y2="6.985" transform="translate(811.5 1157.515)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_6" data-name="Line 6" y1="7.015" x2="7" transform="translate(811.5 1164.5)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
              </g>
              </svg>
            </a>
          </header>
          <div className="gallery">
            {/* Replace with dynamic content later */}
            <figure className="gallery__item"><a href="https://github.com/wallmandev/Project-4/tree/main" target="_blank"><img src="./src/assets/images/Restaurant.png" alt="" className="gallery__image" /></a></figure>
            <figure className="gallery__item"><a href="https://github.com/wallmandev/project-3-school-2022/tree/main" target="_blank"><img src="./src/assets/images/Hike.png" alt="" className="gallery__image" /></a></figure>
            <figure className="gallery__item"><a href="https://github.com/wallmandev/bdocs---theme/tree/main" target="_blank"><img src="./src/assets/images/Bdocs.png" alt="" className="gallery__image" /></a></figure>
            <figure className="gallery__item"><img src="./src/assets/images/Training.png" alt="" className="gallery__image" /></figure>
            <figure className="gallery__item"><img src="./src/assets/images/Portfolio.png" alt="" className="gallery__image" /></figure>
            {/* <figure className="gallery__item"><img src="./src/assets/images/work5@2x.jpg" alt="" className="gallery__image" /></figure> */}
          </div>
        </div>
      </section>
    );
}

export default Work;