import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavWrapper from './component/NavWrapper/index.js'
// import Login from './app/login/index.js'
import Home from './app/home/index.js'
import Album from './app/album/index.js'
import Play from './app/play/index.js'
import Pers from './app/pers/index.js'
import Login from './app/login/index.js'
import Regi from './app/regi/index.js'
import Board from './app/board/index.js'
import Avat from './app/avat/index.js'
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
              <Route exact path='/login' component={Login}/>
              <Route exact path='/regi' component={Regi}/>
              <Route exact path='/board' component={Board}/>
              <Route exact path='/avat' component={Avat}/>
            </Switch>
          </NavWrapper>
        </Switch>  
      </Router>
    )
  }
}
