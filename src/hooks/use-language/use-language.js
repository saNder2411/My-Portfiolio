import {useEffect, useContext} from 'react';
import useService from '../use-service/use-service';
import {LanguageContext} from '../../contexts/language-context/language-context';
import {languageRequest, languageLoaded, languageHasError} from '../../contexts/language-context/language-action-creator';

const useLanguage = (lang) => {
  const [{data, error}, doRequest] = useService(lang);
  const [languageState, dispatch] = useContext(LanguageContext);


  useEffect(() => {
    dispatch(languageRequest());
    doRequest();
  }, [doRequest, dispatch]);

  useEffect(() => {
    if (!data) return;

    dispatch(languageLoaded(data));
  }, [data, dispatch]);

  useEffect(() => {
    if (!error) return;

    dispatch(languageHasError(error));
  }, [error, dispatch]);

  return [languageState];

};

export default useLanguage;
