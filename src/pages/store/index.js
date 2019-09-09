import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers';

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk, logger, promiseMiddleware)
);
//监听器
store.subscribe(() => {
    console.log('state change',store.getState())
})

export default store;