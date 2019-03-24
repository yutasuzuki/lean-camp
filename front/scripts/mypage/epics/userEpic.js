import axios from 'axios';
import { ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';
import { FETCH_USER, fetchUserFulfilled } from '../actions/user'

const userEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  flatMap(() => axios.get('/api/user')),
  map(res => (fetchUserFulfilled(res.data))),
);

export default userEpic;
