import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, logger)
);

export default store;