import { FETCH_USER_FULFILLED } from '../actions/user';

const countReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export default countReducer;
