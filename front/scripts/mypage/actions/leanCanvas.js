import { createAction } from 'redux-actions';

export const FETCH_LEAN_CANVAS = 'FETCH_LEAN_CANVAS';
export const fetchLeanCanvas = createAction(FETCH_LEAN_CANVAS);
export const FETCH_LEAN_CANVAS_FULFILLED = 'FETCH_LEAN_CANVAS_FULFILLED';
export const fetchLeanCanvasFulfilled = createAction(FETCH_LEAN_CANVAS_FULFILLED);
export const FETCH_LEAN_CANVAS_FAILED = 'FETCH_LEAN_CANVAS_FAILED';
export const fetchLeanCanvasFailed = createAction(FETCH_LEAN_CANVAS_FAILED);
