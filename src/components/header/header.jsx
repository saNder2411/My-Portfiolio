import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';


const Header = ({location}) => {
  const navClassName = location.pathname === `/` ? `` : `opaque`;

  return (
    <header>
      <nav id="nav-wrap" className={navClassName}>

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
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
