import React from 'react';


const HomePage = () => {

  return (
    <section id="home">
      <div className="row banner">
        <div className="banner-text">
          <h2 className="responsive-headline">I&apos;m Alexander Olshansky.</h2>
          <h3>
            I&apos;m a Manila based <span>graphic designer</span>,
            <span>illustrator</span> and <span>webdesigner</span> creating awesome and
            effective visual identities for companies of all sizes around the globe. Let&apos;s
            <a className="smoothscroll" href="#about">start scrolling</a>
            and learn more <a className="smoothscroll" href="#about">about me</a>.
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
