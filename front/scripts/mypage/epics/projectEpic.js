import axios from 'axios';
import { combineEpics, ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';
import {
  CREATE_PROJECT, createProjectFulfilled,
  UPDATE_PROJECT, updateProjectFulfilled,
  FETCH_PROJECTS, fetchProjectsFulfilled,
} from '../actions/project';

const createProjectEpic = action$ => action$.pipe(
  ofType(CREATE_PROJECT),
  flatMap(({ payload }) => axios.post('/api/project', payload)),
  map(res => createProjectFulfilled(res.data)),
);

const updateProjectEpic = action$ => action$.pipe(
  ofType(UPDATE_PROJECT),
  flatMap(({ payload }) => axios.patch(`/api/project/${payload.id}`, payload)),
  map(res => updateProjectFulfilled(res.data)),
);

const fetchProjectsEpic = action$ => action$.pipe(
  ofType(FETCH_PROJECTS),
  flatMap(() => axios.get('/api/project')),
  map(res => fetchProjectsFulfilled(res.data)),
);

export default combineEpics(
  createProjectEpic,
  updateProjectEpic,
  fetchProjectsEpic,
);