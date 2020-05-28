import React from 'react';
import PortfolioItem from '../portfolio-item/portfolio-item';


const PortfolioList = ({projects}) => {

  const items = projects
    .map((item) => <PortfolioItem {...item} key={item.id} />);

  return (
    <ul id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      {items}
    </ul>
  );
};

export default PortfolioList;
