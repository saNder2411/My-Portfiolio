import React, {createContext, useReducer} from 'react';
import languageReducer from './language-reducer';


const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const LanguageContext = createContext();


const LanguageProvider = ({children}) => {

  const value = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageContext, LanguageProvider};
