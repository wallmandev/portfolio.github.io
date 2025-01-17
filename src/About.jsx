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
          Hi, I’m Christoffer Wallman, a passionate web developer who thrives on creating innovative and efficient digital solutions. My journey into web development began after a career in the industrial and welding fields, where I honed skills in precision, problem-solving, and attention to detail. These qualities now fuel my approach to coding and project development.

          I specialize in modern web technologies such as React, TypeScript, Node.js, and SASS, focusing on building responsive, scalable, and user-friendly applications. My recent projects include:<br></br><br></br>

          CropCollect: A web application designed to connect local farmers with buyers, streamlining transactions while promoting sustainability. This project challenged me to integrate real-time features using React.<br></br><br></br>

          Azure IoT Solutions: Developing secure and reliable integrations for industrial IoT systems, ensuring seamless data flow and enhanced operational efficiency.<br></br><br></br>

          C#, .NET and MAUI app development.<br></br><br></br>

          Beyond my professional work, I enjoy diving into side projects that challenge my creativity and technical skills. Whether it’s designing interactive interfaces, optimizing database structures, or implementing cutting-edge security features, I’m always eager to push the boundaries of what’s possible.

          When I’m not coding, you can find me strategizing in my favorite games, exploring new technologies, or brainstorming the next big idea.<br></br><br></br>

          Let’s build something amazing together! 🚀
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