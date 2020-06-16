import { createReducer, completeState, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { books: [], querySearch: '' };
const initialState = completeState(initialStateDescription, ['querySearch']);

const reducerDescription = {
  [actions.SET_QUERY_SEARCH]: onReadValue()
};

export default createReducer(initialState, reducerDescription);
