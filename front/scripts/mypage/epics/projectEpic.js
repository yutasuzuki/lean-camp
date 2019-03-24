import axios from 'axios';
import { combineEpics, ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';
import { FETCH_PROJECTS, fetchProjectsFulfilled } from '../actions/project';

const fetchProjectsEpic = action$ => action$.pipe(
  ofType(FETCH_PROJECTS),
  flatMap(() => axios.get('/api/project')),
  map(res => fetchProjectsFulfilled(res.data)),
);

export default combineEpics(fetchProjectsEpic);
