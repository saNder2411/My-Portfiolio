import React from 'react';
import {Switch, Route} from 'react-router-dom';

import useLanguage from '../../hooks/use-language/use-language';

import Header from '../header/header';
import HomePage from '../pages/home-page/home-page';
import AboutPage from '../pages/about-page/about-page';
import ResumePage from '../pages/resume-page/resume-page';
import PortfolioPage from '../pages/portfolio-page/portfolio-page';
import Footer from '../footer/footer';


const App = () => {

  const [{isLoading, data, error}] = useLanguage(`EN`);

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (isLoading) {
    return (
      <div className="loader">
        <img src="images/loader.gif" alt="" />
      </div>
    );
  }


  return !data ? null : (
    <>
      <Header />
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
};


export default App;
