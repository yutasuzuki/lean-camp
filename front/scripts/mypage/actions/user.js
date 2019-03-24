import { createAction } from 'redux-actions';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = createAction(FETCH_USER);

export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const fetchUserFulfilled = createAction(FETCH_USER_FULFILLED);
