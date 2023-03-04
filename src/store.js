import { createStore } from 'redux';
import movieReducer from './reducers';

const store = createStore(movieReducer);

export default store;
