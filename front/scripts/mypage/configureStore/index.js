import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import rootEpic from '../epics';
import reducers from '../reducers';

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    applyMiddleware(
      epicMiddleware,
      createLogger(),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
