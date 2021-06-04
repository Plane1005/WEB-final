import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavWrapper from './component/NavWrapper/index.js'
// import Login from './app/login/index.js'
import Home from './app/home/index.js'
import Album from './app/album/index.js'
import Play from './app/play/index.js'
import Pers from './app/pers/index.js'

import  './App.less'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <NavWrapper>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/album' component={Album}/>
              <Route exact path='/play' component={Play}/>
              <Route exact path='/pers' component={Pers}/>
            </Switch>
          </NavWrapper>
        </Switch>  
      </Router>
    )
  }
}
