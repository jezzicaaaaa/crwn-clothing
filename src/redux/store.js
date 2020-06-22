import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
//debugger for redux code
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware that the store is expecting from redux will be an array
const middlewares = [ logger ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persisted version of the store

export default { store, persistor };
