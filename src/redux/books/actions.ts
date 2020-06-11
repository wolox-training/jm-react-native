import { createTypes } from 'redux-recompose';

export const actions = createTypes(['SET_VALUE'], '@@BOOKS');

const actionCreators = {
  setValue: (target: string, value: any) => ({
    type: actions.SET_VALUE,
    target,
    payload: value
  })
};

export default actionCreators;
