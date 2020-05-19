import { createStore, applyMiddleware } from 'redux';
//debugger for redux code
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware that the store is expecting from redux will be an array
const middlewares = [ logger ];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
