import React, {useState} from 'react';
import PortfolioModal from '../portfolio-modal/portfolio-modal';


const PortfolioItem = ({title, imageUrl, hostUrl, description, technologies}) => {

  const [isShowModal, setIsShowModal] = useState(false);

  const onLinkClick = (evt) => {
    evt.preventDefault();
    setIsShowModal(true);
  };

  return (
    <li className="columns portfolio-item">
      <div className="item-wrap">
        <a
          onClick={onLinkClick}
          href="#modal-01"
          title="">
          <img alt="" src={imageUrl} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{title}</h5>
              <p>{technologies}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="icon-plus" />
          </div>
        </a>
      </div>
      {isShowModal
        ? (
          <PortfolioModal
            title={title}
            imageUrl={imageUrl}
            hostUrl={hostUrl}
            description={description}
            technologies={technologies}
            setIsShowModal={setIsShowModal} />
        )
        : null}
    </li>
  );
};

export default PortfolioItem;
