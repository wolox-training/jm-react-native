import { createTypes } from 'redux-recompose';

export const actions = createTypes(['SET_QUERY_SEARCH'], '@@BOOKS');

const actionCreators = {
  setQuerySearch: (value: any) => ({
    type: actions.SET_QUERY_SEARCH,
    target: 'querySearch',
    payload: value
  })
};

export default actionCreators;
