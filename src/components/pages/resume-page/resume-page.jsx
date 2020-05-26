import React from 'react';
import State from '../../../database/database';

const ResumePage = () => {
  const educationDescription = State.EN.resumePage.education.description.map((item) => (
    <span key={item}>
      <span>{item}</span><br />
    </span>
  ));

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>{State.EN.resumePage.education.title}</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>{State.EN.resumePage.education.university}</h3>
              <p className="info">
                {State.EN.resumePage.education.department}
                <span>&bull;</span>
                <em className="date">{State.EN.resumePage.education.yearEnding}</em>
              </p>
              <p>
                {educationDescription}
              </p>
              <p>
                <span>
                  <a href="https://htmlacademy.ru/profile/id880751/certificates">
                    {State.EN.resumePage.education.labelLinkCertificates}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row achievements">
        <div className="three columns header-col">
          <h1><span>{State.EN.resumePage.personalAchievements.title}</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>{State.EN.resumePage.personalAchievements.titleAchievements}</h3>
              <p>
                {State.EN.resumePage.personalAchievements.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
              <li><span className="bar-expand typescript" /><em>TypeScript</em></li>
              <li><span className="bar-expand react" /><em>React</em></li>
              <li><span className="bar-expand react-hooks" /><em>React/Hooks</em></li>
              <li><span className="bar-expand redux" /><em>Redux</em></li>
              <li><span className="bar-expand html5" /><em>HTML5</em></li>
              <li><span className="bar-expand css" /><em>CSS</em></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
