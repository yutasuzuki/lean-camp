import { combineEpics } from 'redux-observable';
import userEpic from './userEpic';
import projectEpic from './projectEpic';

const rootEpic = combineEpics(
  userEpic,
  projectEpic,
);

export default rootEpic;