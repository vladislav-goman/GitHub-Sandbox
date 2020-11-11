import { atom } from 'recoil';

export const repositoriesArray = atom({
  key: 'repositoriesArray',
  default: [],
});

export const ownerData = atom({
  key: 'ownerData',
  default: {},
});

export const languagesArray = atom({
  key: 'languagesArray',
  default: [],
});

export const searchAreaControls = atom({
  key: 'searchAreaControls',
  default: {
    selectedLanguages: [],
    orderingType: '',
  },
});
