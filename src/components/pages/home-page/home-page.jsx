import React from 'react';
import withLanguageState from '../../../hocs/with-language-state/with-language-state';

const HomePage = ({languageState: {homePage}}) => {
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
              <a href="https://www.facebook.com/profile.php?id=100023636915177">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://github.com/saNder2411">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://t.me/Alexandr_Olshanskiy">
                <i className="fa fa-telegram" />
              </a>
            </li>
            <li>
              <a href="live:27e73c79fb62325b">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default withLanguageState(HomePage);
