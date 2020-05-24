import React from 'react';


const App = () => {

  return (
    <div id="main">
      <div className="nav-holder">
        {/* <!--logo--> */}
        <div className="logo-holder">
          <img src="images/logo.png" alt="" />
        </div>
        {/* <!--template navigation--> */}
        <nav className="vis">
          <a href="/" className="active swp"><span className="transition" />Home</a>
          <a href="/" className=" swp"><span className="transition" />About</a>
          <a href="/" className="swp"><span className="transition" />Work</a>
          <a href="/" className="swp"><span className="transition" />Contact</a>
        </nav>
      </div>
      {/* <!--start content--> */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* <!--================= Home start ================--> */}
          <div className="swiper-slide">
            <div id="slides">
              <ul className="slides-container">
                {/* <!-- Slide 1 --> */}
                <li>
                  <div style={{backgroundImage: `url(images/bg/1.jpg)`}} className="slides-fullscreen-img" />
                </li>
                {/* <!-- Slide 2 --> */}
                <li>
                  <div style={{backgroundImage: `url(images/bg/2.jpg)`}} className="slides-fullscreen-img" />
                </li>
                {/* <!-- Slide 3 --> */}
                <li>
                  <div style={{backgroundImage: `url(images/bg/3.jpg)`}} className="slides-fullscreen-img" />
                </li>
              </ul>
            </div>
            {/* <!-- Slider end --> */}
            <div className="overlay" />
            <div className="container">
              <section className="homeholder no-bg">
                <div className="content" id="home">
                  <h2 className="elem">Hi ! I am    Matthew   Kowalsky</h2>
                  <div className="home-separator"><span /></div>
                  <div className="tetx-rotator">
                    <div className="tlt">
                      <ul className="texts">
                        <li>Creative Designer</li>
                        <li>Talented Illustrator</li>
                        <li>Good man :)</li>
                      </ul>
                    </div>
                  </div>
                  <a href="/" className="button start-button  transition hide-icon">
                    <i className="fa fa-angle-right transition2" />
                    <span className="text transition color-bg">
                      Lets Start
                    </span>
                  </a>
                </div>
                <div className="clearfix" />
              </section>
              <footer>
                <div className="row-fluid">
                  <div className="span6">
                    <div className="contact-info">
                      <ul>
                        <li>
                          <i className="fa fa-phone" />
                          <a href="/" className="transition">+7(111)123456789</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o" />
                          <a href="/" className="transition">yourmail@domain.com</a>
                        </li>
                        <li>
                          <i className="fa fa-home" />
                          <a href="/" className="transition">27th Brooklyn NY</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="span6">
                    <div className="social-list">
                      <ul>
                        <li>
                          <a href="/" target="_blank" className="transition elem">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank" className="transition elem">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank" className="transition elem">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank" className="transition elem">
                            <i className="fa fa-pinterest-square" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/* <!--home end-->
                  <!--============= about start =============--> */}
        </div>
      </div>
    </div>
  );
};

export default App;
