import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import LeanCanvasReducer from './leanCanvasReducer';
import CompanyReducer from './CompanyReducer';
import ProjectReducer from './ProjectReducer';

export const reducers = combineReducers({
  user: UserReducer,
  projects: ProjectReducer,
  leanCanvas: LeanCanvasReducer,
  company: CompanyReducer,
});

export default reducers;
