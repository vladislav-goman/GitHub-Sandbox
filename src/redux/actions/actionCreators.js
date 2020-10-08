import {
  SET_REPOSITORIES_ARRAY,
  SET_OWNER_DATA,
  SET_LANGUAGES_ARRAY,
  SET_SELECTED_LANGUAGES,
  SET_ORDERING_TYPE,
} from './actionTypes';

export const setRepositoriesArray = (repoArray) => ({
  type: SET_REPOSITORIES_ARRAY,
  payload: repoArray,
});

export const setOwnerData = (owner) => ({
  type: SET_OWNER_DATA,
  payload: owner,
});

export const setLanguagesArray = (langArray) => ({
  type: SET_LANGUAGES_ARRAY,
  payload: langArray,
});

export const setSelectedLanguages = (selectedArray) => ({
  type: SET_SELECTED_LANGUAGES,
  payload: selectedArray,
});

export const setOrderingType = (orderingType) => ({
  type: SET_ORDERING_TYPE,
  payload: orderingType,
});
