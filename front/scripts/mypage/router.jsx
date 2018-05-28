import React from 'react'
import { Route } from 'react-router-dom'
import Top from './containers/top'
import LeanCanvas from './containers/lean-canvas'


const router = () => {
  return (
    <div>
      <Route exact path='/' component={Top}/>
      <Route path='/lean_canvas' component={LeanCanvas}/>
    </div>
  )
}

export default router