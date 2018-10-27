import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation.js'
import './App.css'

import * as routes from '../constants/routes.js'
import Login from './Login/login.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <hr />
            <Route exact path={routes.LOG_IN} component={Login}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
