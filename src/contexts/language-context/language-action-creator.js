import LanguageActionTypes from './language-action-types';


export const languageRequest = () => ({type: LanguageActionTypes.FETCH_LANG_REQUEST});

export const languageLoaded = (data) => ({type: LanguageActionTypes.FETCH_LANG_SUCCESS, payload: data});

export const languageHasError = (error) => ({type: LanguageActionTypes.FETCH_LANG_SUCCESS, payload: error});
