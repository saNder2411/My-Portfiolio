import React from 'react';


const Footer = () => {

  return (
    <footer>

      <div className="row">

        <div className="twelve columns">

          <ul className="social-links">
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

          <ul className="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
