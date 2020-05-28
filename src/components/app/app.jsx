import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HeaderContainer from '../../containers/header-container/header-container';
import HomePage from '../pages/home-page/home-page';
import AboutPage from '../pages/about-page/about-page';
import ResumePage from '../pages/resume-page/resume-page';
import PortfolioPage from '../pages/portfolio-page/portfolio-page';
import Footer from '../footer/footer';


const App = () => (
  <>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about">
        <AboutPage />
        <Footer />
      </Route>
      <Route path="/resume">
        <ResumePage />
        <Footer />
      </Route>
      <Route path="/portfolio">
        <PortfolioPage />
        <Footer />
      </Route>
    </Switch>
  </>
);

export default App;
