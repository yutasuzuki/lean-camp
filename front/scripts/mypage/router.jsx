import React from 'react'
import { Route } from 'react-router-dom'
import Top from './containers/top'
import LeanCanvas from './containers/LeanCanvas'

const router = () => {
  return (
    <div>
      <Route exact path='/' component={Top}/>
      <Route path='/lean_canvas/:id?' component={LeanCanvas}/>
    </div>
  )
}

export default router