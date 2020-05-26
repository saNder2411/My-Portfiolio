import React from 'react';
import State from '../../../database/database';

const HomePage = () => {

  return (
    <section id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{State.EN.homePage.title}</h1>
          <h3>
            <span>{State.EN.homePage.aboutMe}</span>
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
