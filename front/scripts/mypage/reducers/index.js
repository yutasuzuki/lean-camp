import { combineReducers } from 'redux'
import UserReducer from './userReducer'
import LeanCanvasReducer from './leanCanvasReducer'


const reducers = combineReducers({
  user: UserReducer,
  leanCanvas: LeanCanvasReducer,
});

export default reducers