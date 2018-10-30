import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation.js'
import './App.css'

import * as routes from '../constants/routes.js'
import Login from './Login/login.js'
import Signup from './Signup/signup.js'
import Landing from './Landing/landing.js'
import Reset from './Reset/reset.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <hr />
            <Route exact path={routes.LOG_IN} component={Login}/>
            <Route exact path={routes.SIGN_UP} component={Signup}/>
            <Route exact path={routes.LANDING} component={Landing}/>
            <Route exact path={routes.ACCOUNT} component={Reset}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
