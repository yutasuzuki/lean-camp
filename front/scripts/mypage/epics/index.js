import userEpic from './userEpic';
import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics(
  userEpic,
);

export default rootEpic;