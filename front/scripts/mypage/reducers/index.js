import { combineReducers } from 'redux'
import { AWESOME_EVENT } from '../actions/'

const sampleReducer = (state = false, action) => {
  switch (action.type) {
    case AWESOME_EVENT:
      return state = !state
      break;
    default:
      return state
  }
};

const reducers = combineReducers({
  sampleReducer
});

export default reducers