import React from 'react';


const App = () => {

  return (
    <div id="main">
      <div className="nav-holder">
        {/* <!--logo--> */}
        <div className="logo-holder">
          <img src="images/logo.png" alt="" />
        </div>
        {/* <!--nav button--> */}
        <div className="btn-menu-wrapper elem call-menu transition2">
          <div id="btn-menu">
            <span className="icon-container">
              <span className="line line01" />
              <span className="line line02" />
              <span className="line line03" />
              <span className="line line04" />
            </span>
          </div>
        </div>
        {/* <!--template navigation--> */}
        <nav className="vis">
          <a href="/" className="active swp"><span className="transition" />Home</a>
          <a href="/" className=" swp"><span className="transition" />About</a>
          <a href="/" className="swp"><span className="transition" />Work</a>
          <a href="/" className="swp"><span className="transition" />Contact</a>
          <a href="blog.html"><span className="transition" />Blog</a>
        </nav>
        <div className="arrow-nav">
          <a href="/" className="arrow-right transition2">
            <i className="fa fa-angle-right" />
          </a>
          <a href="/" className="arrow-left transition2">
            <i className="fa fa-angle-left" />
          </a>
        </div>
      </div>
      {/* <!--about slide navigation--> */}
      <div className="scroll-nav">
        <a href="/about"><i className="fa fa-smile-o" /><span>About</span></a>
        <a href="/facts"><i className="fa fa-trophy" /><span>Facts</span></a>
        <a href="/twitteritem"><i className="fa fa-twitter" /><span>Twitter</span></a>
        <a href="/resume"><i className="fa fa-briefcase" /><span>Resume</span></a>
        <a href="/testimonials"><i className="fa fa-comments-o" /><span>Testomonials</span></a>
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
