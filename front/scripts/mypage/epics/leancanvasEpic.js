import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  FETCH_LEAN_CANVAS, fetchLeanCanvasFulfilled, fetchLeanCanvasFailed,
} from '../actions/leanCanvas';

const fetchLeanCanvasEpic = action$ => action$.pipe(
  ofType(FETCH_LEAN_CANVAS),
  mergeMap(({ payload }) => ajax.getJSON(`/api/lean_canvas/${payload.id}`)
    .pipe(
      map(data => fetchLeanCanvasFulfilled(data)),
      catchError(err => of(fetchLeanCanvasFailed(err)))
    ),
  ),
);

export default combineEpics(
  fetchLeanCanvasEpic,
);