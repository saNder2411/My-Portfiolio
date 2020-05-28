import React, {useContext} from 'react';
import {LanguageContext} from '../../contexts/language-context/language-context';


const withLanguageState = (Component) => (props) => {

  const [{isLoadingLang, langData, langError}] = useContext(LanguageContext);

  const hasData = !(isLoadingLang || langError) && langData;

  if (langError) {
    return (
      <div className="loader">
        <h2>Something is wrong!</h2>
      </div>
    );
  }

  if (isLoadingLang) {
    return (
      <div className="loader">
        <img src="images/loader.gif" alt="" />
      </div>
    );
  }

  return !hasData ? null : <Component {...props} languageState={langData} />;


};

export default withLanguageState;
