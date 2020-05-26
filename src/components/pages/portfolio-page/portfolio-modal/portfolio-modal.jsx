import React, {useEffect} from 'react';


const PortfolioModal = ({title, imageUrl, hostUrl, description, technologies, setIsShowModal}) => {

  const onCloseClick = (evt) => {
    evt.preventDefault();
    setIsShowModal(false);
  };

  const onModalClick = (evt) => {
    if (evt.target.closest(`.popup-modal`)) return;

    setIsShowModal(false);
  };

  useEffect(() => {
    if (!setIsShowModal) return;

    const onEscKeyDown = ({key}) => {
      if (key === `Escape` || key === `Esc`) {
        setIsShowModal(false);
      }
    };

    document.addEventListener(`keydown`, onEscKeyDown);

    return () => document.removeEventListener(`keydown`, onEscKeyDown);
  }, [setIsShowModal]);

  return (
    <>
      <div className="mfp-bg mfp-fade mfp-ready" />
      <div
        onClick={onModalClick}
        onKeyDown={onModalClick}
        role="button"
        label="close"
        className="mfp-wrap mfp-auto-cursor mfp-fade mfp-ready"
        tabIndex="-1">

        <div
          className="mfp-container mfp-s-ready mfp-inline-holder">
          <div className="mfp-content">

            <div className="popup-modal">
              <a href={hostUrl}>
                <img className="scale-with-grid" src={imageUrl} alt="" />
              </a>

              <div className="description-box">
                <h4>{title}</h4>
                <p>{description}</p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  {technologies}
                </span>
              </div>

              <div className="link-box">
                <a href={hostUrl}>
                  Details
                </a>
                <a
                  onClick={onCloseClick}
                  className="popup-modal-dismiss"
                  href="#/">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
