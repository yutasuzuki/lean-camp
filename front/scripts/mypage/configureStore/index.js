import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    applyMiddleware(
      createLogger()
    )
  )
  return store
}