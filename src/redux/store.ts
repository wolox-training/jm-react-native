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

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, fetchMiddleware), Reactotron.createEnhancer())
);

export default store;
