import React, {useContext} from 'react';
import {LanguageContext} from '../../../contexts/language-context/language-context';

const HomePage = () => {

  const [{data: {homePage}}] = useContext(LanguageContext);
  const {title, aboutMe} = homePage;

  return (
    <section id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{title}</h1>
          <h3>
            <span>{aboutMe}</span>
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="/">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
