import { createAction } from 'redux-actions';

export const GET_PROJECTS = 'GET_PROJECTS';
export const getProjects = createAction(GET_PROJECTS);

export const GET_PROJECT = 'GET_PROJECT';
export const getProject = createAction(GET_PROJECT);
