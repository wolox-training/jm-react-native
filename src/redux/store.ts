import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

import Reactotron from '@config/reactotron';

const rootReducer = combineReducers({ auth });
const store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;
