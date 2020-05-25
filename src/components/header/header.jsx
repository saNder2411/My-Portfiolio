import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {

  return (
    <header>
      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#/" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current">
            <NavLink className="smoothscroll" to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/portfolio">Works</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
