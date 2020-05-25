import React from 'react';
import PortfolioList from './portfolio-list/portfolio-list';

const PortfolioPage = () => {

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <PortfolioList />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
