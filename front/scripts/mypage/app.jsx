import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './configureStore'

const preloadedState = {}
const store = configureStore(preloadedState)

render(
  <Provider store={store}>
    <BrowserRouter basename='/mypage' >
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)