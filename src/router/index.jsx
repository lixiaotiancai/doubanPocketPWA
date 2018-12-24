import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import IndexPage from '../containers/indexPage'
import SearchPage from '../containers/searchPage'
import DetailPage from '../containers/detailPage'

class Router extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route path='/book/search' component={SearchPage} />
          <Route path='/movie/search' component={SearchPage} />
          <Route path='/music/search' component={SearchPage} />
          <Route path='/book/detail' component={DetailPage} />
          <Route path='/movie/detail' component={DetailPage} />
          <Route path='/music/detail' component={DetailPage} />
        </Switch>
      </div>
    )
  }
}

export default Router
