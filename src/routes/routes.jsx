import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../components/pages/home-page/home-page';
import AboutPage from '../components/pages/about-page/about-page';
import ResumePage from '../components/pages/resume-page/resume-page';
import PortfolioPage from '../components/pages/portfolio-page/portfolio-page';
import Footer from '../components/footer/footer';


const Routes = () => (
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
);

export default Routes;
