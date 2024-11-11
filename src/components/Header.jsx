import React, { useState } from 'react';
import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__branding">
          <svg xmlns="http://www.w3.org/2000/svg" width="211" height="22" viewBox="0 0 211 22"></svg>
        </a>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item menu__item--current"><a href="#home" className="menu__link"><strong>Home</strong></a></li>
            <li className="menu__item"><a href="#work" className="menu__link">Work</a></li>
            <li className="menu__item"><a href="#projects" className="menu__link">Projects</a></li>
            <li className="menu__item menu__item--button"><a href="mailto:wallmandev@gmail.com" className="menu__link">Hire me!</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Menyn overlay */}
      <div className={`menu-overlay ${menuOpen ? 'menu-show' : ''}`}>
        <ul className="hamburger-list">
          <li className="menu__item"><a href="#home" className="menu__link" onClick={closeMenu}>Home</a></li>
          <li className="menu__item"><a href="#work" className="menu__link" onClick={closeMenu}>Work</a></li>
          <li className="menu__item"><a href="#projects" className="menu__link" onClick={closeMenu}>Projects</a></li>
          <li className="menu__item"><a href="#about" className="menu__link" onClick={closeMenu}>About</a></li>
          <li className="menu__item"><a href="mailto:wallmandev@gmail.com" className="menu__link menu__item--hire">Hire me!</a></li>
        </ul>
        {/* Pilknapp för att stänga menyn */}
        <button className="menu-close-arrow" onClick={toggleMenu}>{menuOpen ? (
            <>
              C<br />L<br />O<br />S<br />E
            </>
          ) : (
            <>
              O<br />P<br />E<br />N
            </>
          )}</button>
      </div>
    </header>
  );
}

export default Header;