import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotron';

import auth from './auth/reducer';

const rootReducer = combineReducers({ auth });
const store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;
