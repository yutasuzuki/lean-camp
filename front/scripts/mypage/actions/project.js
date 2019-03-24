import { createAction } from 'redux-actions';


export const GET_PROJECT = 'GET_PROJECT';
export const getProject = createAction(GET_PROJECT);

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const fetchProjects = createAction(FETCH_PROJECTS);

export const FETCH_PROJECTS_FULFILLED = 'FETCH_PROJECTS_FULFILLED';
export const fetchProjectsFulfilled = createAction(FETCH_PROJECTS_FULFILLED);
