import React, {useContext} from 'react';
import PortfolioList from './portfolio-list/portfolio-list';
import {LanguageContext} from '../../../contexts/language-context/language-context';

const PortfolioPage = () => {

  const [{data: {portfolioPage}}] = useContext(LanguageContext);
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

export default PortfolioPage;
