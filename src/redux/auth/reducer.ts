import { actions } from './actions';

const initalState = {
  user: null,
  userLoading: false,
  userError: null
};

const authReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, userLoading: true };
    case actions.LOGIN_SUCCESS:
      return { ...state, user: action.payload, userLoading: false };
    case actions.LOGIN_FAILURE:
      return { ...state, userError: action.payload, userLoading: false };
    default:
      return state;
  }
};

export default authReducer;
