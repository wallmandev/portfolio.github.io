import React, { useState, useEffect, useRef } from "react";
import './About.scss';
import portrait from '../src/assets/images/Christoffer.png'
import linkedin from '../src/assets/icons/linkedin.svg'

function About() {
  const [showMore, setShowMore] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (showMore) {
      document.body.classList.add('no-scroll');
      document.querySelector('header').classList.add('no-show');
    } else {
      document.body.classList.remove('no-scroll');
      document.querySelector('header').classList.remove('no-show');
    }
  }, [showMore]);

  useEffect(() => {
    if (showFullText && textRef.current) {
      textRef.current.style.maxHeight = `${textRef.current.scrollHeight}px`;
    }
  }, [showFullText]);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    setShowMore(true);
    setAnimateOut(false);
  };

  const handleCloseClick = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMore(false);
    }, 500); // Matcha med transition-tiden i CSS
  };

  const handleShowFullTextClick = () => {
    setShowFullText(true);
  };

  return (
    <section id="about" className={`about ${showMore ? 'no-interaction' : ''}`}>
      <div className="about__inner">
        <div className="about__social">
          <ul className="social">
            <li className="social__item"><a href="#" className="social__link"><img src={linkedin} alt="linkedin Logo" /></a></li>
          </ul>
        </div>
        <div className="about__content">
          <h2 className="about__title">So, what about me?</h2>
          <p className="about__text">There are loads of information I could write down about me, but what could be interesting to know about a nerd stuck with code as his best friend. As it turns out, a lot!</p>
          <a href="#" className="about__link arrow-link" onClick={handleReadMoreClick}>
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="16.828" viewBox="0 0 22.414 16.828">
              <g id="Group_9" data-name="Group 9" transform="translate(-797.5 -1156.101)">
                <line id="Line_4" data-name="Line 4" x2="20" transform="translate(798.5 1164.5)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_5" data-name="Line 5" x2="7" y2="6.985" transform="translate(811.5 1157.515)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_6" y1="7.015" x2="7" transform="translate(811.5 1164.5)" fill="none" stroke="#b1ada1" strokeLinecap="round" strokeWidth="2"/>
              </g>
            </svg>
          </a>
        </div>
        <div className={`about__more ${showMore ? 'show' : ''} ${animateOut ? 'hide' : ''}`}>
          <button onClick={handleCloseClick} className="about__close">X</button>
          <img className="about__image" src={portrait} alt=""></img>
          <p ref={textRef} className={`about__text ${showFullText ? 'about__text--hidden' : ''}`}>
            Hi, I'm Christoffer Wallman – a web developer with a strong passion for programming, technology, and gaming. My journey into web development started after years of working in the industrial and welding fields. The experience taught me the value of precision, problem-solving, and attention to detail, which I now bring into my development projects.

            Today, I'm dedicated to creating clean, efficient, and user-friendly digital experiences. My work focuses on providing secure and innovative IT solutions, with an emphasis on Azure IoT, Microsoft 365 security, and WordPress development tailored for the industrial sector. When I’m not coding, you’ll probably find me exploring new technologies or strategizing in my favorite games.
          </p>
          {!showFullText && (
            <span className="about__read-more" onClick={handleShowFullTextClick}>
              Read more
            </span>
          )}
          <button onClick={handleCloseClick} className="about__more--button">Close</button>
        </div>
      </div>
    </section>
  );
}

export default About;