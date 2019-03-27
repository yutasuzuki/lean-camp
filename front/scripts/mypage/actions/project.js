import { createAction } from 'redux-actions';


export const GET_PROJECT = 'GET_PROJECT';
export const getProject = createAction(GET_PROJECT);

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const createProject = createAction(CREATE_PROJECT);
export const CREATE_PROJECT_FULFILLED = 'CREATE_PROJECT_FULFILLED';
export const createProjectFulfilled = createAction(CREATE_PROJECT_FULFILLED);
export const CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED';
export const createProjectFailed = createAction(CREATE_PROJECT_FAILED);

export const SELECT_PROJECT = 'SELECT_PROJECT';
export const selectProject = createAction(SELECT_PROJECT);

export const EDIT_PROJECT_NAME = 'EDIT_PROJECT_NAME';
export const editProjectName = createAction(EDIT_PROJECT_NAME);

export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const updateProject = createAction(UPDATE_PROJECT);
export const UPDATE_PROJECT_FULFILLED = 'UPDATE_PROJECT_FULFILLED';
export const updateProjectFulfilled = createAction(UPDATE_PROJECT_FULFILLED);
export const UPDATE_PROJECT_FAILED = 'UPDATE_PROJECT_FAILED';
export const updateProjectFailed = createAction(UPDATE_PROJECT_FAILED);

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const fetchProjects = createAction(FETCH_PROJECTS);
export const FETCH_PROJECTS_FULFILLED = 'FETCH_PROJECTS_FULFILLED';
export const fetchProjectsFulfilled = createAction(FETCH_PROJECTS_FULFILLED);
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED';
export const fetchProjectsFailed = createAction(FETCH_PROJECTS_FAILED);
