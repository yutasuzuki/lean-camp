import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Top from './containers/Top';
import Company from './containers/Company';
import Project from './containers/Project';
import NotFound from './components/NotFound';
const notfoundPage = () => <div><h1>404</h1>ページが見つかりませんでした</div>

const router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Top}/>
      <Route path='/project/:id?' component={Project}/>
      <Route path='/company/:id?' component={Company}/>
      <Route component={NotFound} />
    </Switch>
  )
}

export default router