import axios from 'axios';
import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { flatMap, mergeMap, map, catchError } from 'rxjs/operators';
import {
  CREATE_PROJECT, createProjectFulfilled,
  FETCH_PROJECT, fetchProjectFulfilled,
  UPDATE_PROJECT, updateProjectFulfilled, updateProjectFailed,
  FETCH_PROJECTS, fetchProjectsFulfilled, fetchProjectFailed,
} from '../actions/project';

const createProjectEpic = action$ => action$.pipe(
  ofType(CREATE_PROJECT),
  flatMap(({ payload }) => axios.post('/api/project', payload)),
  map(res => createProjectFulfilled(res.data)),
);

const fetchProjectEpic = action$ => action$.pipe(
  ofType(FETCH_PROJECT),
  mergeMap(({ payload }) => ajax.getJSON(`/api/project/${payload.id}`)
    .pipe(
      map(data => fetchProjectFulfilled(data)),
      catchError(err => of(fetchProjectFailed(err)))
    ),
  ),
);

const updateProjectEpic = action$ => action$.pipe(
  ofType(UPDATE_PROJECT),
  mergeMap(({ payload }) => ajax.patch(`/api/project/${payload.id}`, payload)
    .pipe(
      map(data => updateProjectFulfilled(data.response)),
      catchError(err => of(updateProjectFailed(err)))
    ),
  ),
);

const fetchProjectsEpic = action$ => action$.pipe(
  ofType(FETCH_PROJECTS),
  flatMap(() => axios.get('/api/project')),
  map(res => fetchProjectsFulfilled(res.data)),
);

export default combineEpics(
  createProjectEpic,
  fetchProjectEpic,
  updateProjectEpic,
  fetchProjectsEpic,
);
