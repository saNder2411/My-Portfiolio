import React, {useState, useEffect, useContext} from 'react';
import {withRouter} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import {LanguageContext} from '../../contexts/language-context/language-context';
import {languageRequest, languageLoaded, languageHasError} from '../../contexts/language-context/language-action-creator';

import Header from '../../components/header/header';


const DEFAULT_LANG = `EN`;

const HeaderContainer = ({location}) => {

  const navClassName = location.pathname === `/` ? `` : `opaque`;

  const [{isLoadingLang, langData, langError}, dispatch] = useContext(LanguageContext);
  const [langState, setLangState] = useState(DEFAULT_LANG);
  const [{data, error}, doRequest] = useService(langState);

  useEffect(() => {
    dispatch(languageRequest());
    doRequest();
  }, [doRequest, dispatch, langState]);

  useEffect(() => {
    if (!data) return;

    dispatch(languageLoaded(data));
  }, [data, dispatch]);

  useEffect(() => {
    if (!error) return;

    dispatch(languageHasError(error));
  }, [error, dispatch]);


  const onLanguageChange = (evt) => setLangState(evt.target.value);

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

  return !hasData ? null : (
    <Header
      navClassName={navClassName}
      languageState={langData}
      onLanguageChange={onLanguageChange} />
  );
};

export default withRouter(HeaderContainer);
