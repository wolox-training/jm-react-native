import { createStore, combineReducers as CR, applyMiddleware, compose } from 'redux';
import { wrapCombineReducers, fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';

import Reactotron from '@config/reactotron';

import auth from './auth/reducer';
import book from './books/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = combineReducers({
  auth,
  book
});

const enhancers = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  enhancers.push(Reactotron.createEnhancer());
}

const store = createStore(rootReducer, compose(...enhancers));

export default store;
