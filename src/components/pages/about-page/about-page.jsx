import React from 'react';
import withLanguageState from '../../../hocs/with-language-state/with-language-state';

const AboutPage = ({languageState: {aboutMePage}}) => {

  const {contactDetails, title, description, contactTitle, resumePath} = aboutMePage;

  const contacts = contactDetails.map((item) => (
    <span key={item}>
      <span>{item}</span><br />
    </span>
  ));

  return (
    <section id="about" style={{height: `100%`}}>
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>{title}</h2>

          <p>{description}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>{contactTitle}</h2>
              <p className="address">
                {contacts}
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={`my-resume/${resumePath}`} download className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withLanguageState(AboutPage);
