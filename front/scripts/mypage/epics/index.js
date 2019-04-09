import { combineEpics } from 'redux-observable';
import userEpic from './userEpic';
import projectEpic from './projectEpic';
import leancanvasEpic from './leancanvasEpic';

const rootEpic = combineEpics(
  userEpic,
  projectEpic,
  leancanvasEpic,
);

export default rootEpic;
