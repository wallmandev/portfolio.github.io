import React from "react";
import './Footer.scss';

function Footer() {

  const currentYear = new Date().getFullYear();


    return (
      <footer className="footer">

        <div className="footer__content">

          &copy; <span>Copyright {currentYear}</span> Christoffer Wallman

        </div>
        <a href="#home" className="scroll-up">

          <svg xmlns="http://www.w3.org/2000/svg" width="15.99" height="21.216" viewBox="0 0 15.99 21.216">
            <g id="Group_13" data-name="Group 13" transform="translate(1.414 20.216) rotate(-90)">
                <line id="Line_4" data-name="Line 4" x2="18.802" transform="translate(0 6.566)" fill="none" stroke="#222" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_5" data-name="Line 5" x2="6.581" y2="6.566" transform="translate(12.221 0)" fill="none" stroke="#222" strokeLinecap="round" strokeWidth="2"/>
                <line id="Line_6" data-name="Line 6" y1="6.595" x2="6.581" transform="translate(12.221 6.566)" fill="none" stroke="#222" strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
          
        </a>
      </footer>
    );
  }

  export default Footer;