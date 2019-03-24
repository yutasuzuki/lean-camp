import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Top from './containers/Top'
import LeanCanvas from './containers/LeanCanvas'
import OKR from './containers/OKR'
import Company from './containers/Company'
import Project from './containers/Project'

const router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Top}/>
      <Route path='/project/:id?' component={Project}/>
      <Route path='/lean_canvas/:id?' component={LeanCanvas}/>
      <Route path='/okr/:id?' component={OKR}/>
      <Route path='/company/:id?' component={Company}/>
    </Switch>
  )
}

export default router