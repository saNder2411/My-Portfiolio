import LanguageActionTypes from './language-action-types';


const languageReducer = (state, action) => {

  switch (action.type) {
    case LanguageActionTypes.FETCH_LANG_REQUEST:
      return {
        isLoading: true,
        data: null,
        error: null,
      };

    case LanguageActionTypes.FETCH_LANG_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case LanguageActionTypes.FETCH_LANG_FAILURE:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }


};

export default languageReducer;
