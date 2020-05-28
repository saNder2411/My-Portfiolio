import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import StyledSelectLang from './styled-header';


const Header = ({navClassName, languageState, onLanguageChange}) => {

  const {lang, home, about, resume, works} = languageState.navMenu;

  return (
    <header>
      <nav id="nav-wrap" className={navClassName}>
        <StyledSelectLang name="lang" onChange={onLanguageChange} defaultValue={lang}>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </StyledSelectLang>

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#/" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current">
            <NavLink className="smoothscroll" to="/" exact>{home}</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/about">{about}</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/resume">{resume}</NavLink>
          </li>
          <li>
            <NavLink className="smoothscroll" to="/portfolio">{works}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
