import { GET_ME } from '../actions/user'

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ME:
      return state = action.payload;
      break;
    default:
      return state
  }
};

export default UserReducer