import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';
import logger from 'redux-logger'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {

};

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger)
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

export default store;