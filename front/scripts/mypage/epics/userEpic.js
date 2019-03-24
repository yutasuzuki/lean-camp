import axios from 'axios';
import { combineEpics, ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';
import { FETCH_USER, fetchUserFulfilled } from '../actions/user'

const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  flatMap(() => axios.get('/api/user')),
  map(res => fetchUserFulfilled(res.data)),
);

export default combineEpics(fetchUserEpic);
