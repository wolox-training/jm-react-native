import { createReducer, completeState, onSetValue, onReadValue, onSuccess } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { user: null };
const initialState = completeState(initialStateDescription);

const reducerDescription = {
  [actions.LOGOUT]: onSetValue(null),
  [actions.REHYDRATE_AUTH]: onReadValue(),
  [actions.LOGIN_SUCCESS]: onSuccess()
};

export default createReducer(initialState, reducerDescription);
