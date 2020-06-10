import { createReducer, completeState } from 'redux-recompose';

const initialStateDescription = { books: [] };
const initialState = completeState(initialStateDescription);

export default createReducer(initialState, {});
