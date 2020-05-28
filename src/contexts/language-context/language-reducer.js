import LanguageActionTypes from './language-action-types';


const languageReducer = (state, action) => {

  switch (action.type) {
    case LanguageActionTypes.FETCH_LANG_REQUEST:
      return {
        isLoadingLang: true,
        langData: null,
        langError: null,
      };

    case LanguageActionTypes.FETCH_LANG_SUCCESS:
      return {
        isLoadingLang: false,
        langData: action.payload,
        langError: null,
      };

    case LanguageActionTypes.FETCH_LANG_FAILURE:
      return {
        isLoadingLang: false,
        langData: null,
        langError: action.payload,
      };
    default:
      return state;
  }


};

export default languageReducer;
