import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Top from './containers/top'
import LeanCanvas from './containers/LeanCanvas'
import OKR from './containers/OKR'
import Company from './containers/Company'

const router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Top}/>
      <Route path='/lean_canvas/:id?' component={LeanCanvas}/>
      <Route path='/okr/:id?' component={OKR}/>
      <Route path='/company/:id?' component={Company}/>
    </Switch>
  )
}

export default router