import React from 'react'
import { Route } from 'react-router-dom'
import Top from './containers/top'
import LeanCanvas from './containers/LeanCanvas'
import OKR from './containers/OKR'

const router = () => {
  return (
    <div>
      <Route exact path='/' component={Top}/>
      <Route path='/lean_canvas/:id?' component={LeanCanvas}/>
      <Route path='/okr/:id?' component={OKR}/>
    </div>
  )
}

export default router