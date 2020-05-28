import React from 'react';
import PortfolioList from './portfolio-list/portfolio-list';
import withLanguageState from '../../../hocs/with-language-state/with-language-state';


const PortfolioPage = ({languageState: {portfolioPage}}) => {

  const {title, projects} = portfolioPage;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{title}</h1>
          <PortfolioList projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default withLanguageState(PortfolioPage);
