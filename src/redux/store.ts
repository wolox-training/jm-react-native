import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '@config/reactotron';

import authReducer from './auth/reducer';
import bookReducer from './books/reducer';
import { AUTH_REDUCER, BOOK_REDUCER } from './constants';

const rootReducer = combineReducers({
  [AUTH_REDUCER]: authReducer,
  [BOOK_REDUCER]: bookReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;
