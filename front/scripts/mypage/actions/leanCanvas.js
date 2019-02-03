import { createAction } from 'redux-actions';

export const GET_LEAN_CANVAS_LIST = 'GET_LEAN_CANVAS_LIST';
export const getLeanCanvasList = createAction(GET_LEAN_CANVAS_LIST);

export const GET_LEAN_CANVAS = 'GET_LEAN_CANVAS';
export const getLeanCanvas = createAction(GET_LEAN_CANVAS);
