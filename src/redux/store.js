import { createStore } from 'redux';
import { mainReducer } from './reducer';

const store = createStore(mainReducer);

// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));

export default store;
