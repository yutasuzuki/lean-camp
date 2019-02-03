import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import LeanCanvasReducer from './leanCanvasReducer';
import CompanyReducer from './CompanyReducer';


const reducers = combineReducers({
  user: UserReducer,
  leanCanvas: LeanCanvasReducer,
  company: CompanyReducer,
});

export default reducers;
