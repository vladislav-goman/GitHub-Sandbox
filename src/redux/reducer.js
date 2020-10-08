import {
  SET_REPOSITORIES_ARRAY,
  SET_OWNER_DATA,
  SET_LANGUAGES_ARRAY,
  SET_SELECTED_LANGUAGES,
  SET_ORDERING_TYPE,
} from './actions/actionTypes';

const initialState = {
  repositories: [],
  languagesArray: [],
  owner: {},
  searchAreaControls: {
    selectedLanguages: [],
    orderingType: '',
  },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES_ARRAY:
      return { ...state, repositories: action.payload };
    case SET_OWNER_DATA:
      return { ...state, owner: action.payload };
    case SET_LANGUAGES_ARRAY:
      return { ...state, languagesArray: action.payload };
    case SET_SELECTED_LANGUAGES:
      return { ...state, searchAreaControls: { ...state.searchAreaControls, selectedLanguages: action.payload } };
    case SET_ORDERING_TYPE:
      return { ...state, searchAreaControls: { ...state.searchAreaControls, orderingType: action.payload } };
    default:
      return state;
  }
};
