import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation.js'
import './App.css'

import * as routes from '../constants/routes.js'
import Login from './Login/login.js'
import Signup from './Signup/signup.js'
import Landing from './Landing/landing.js'
import Reset from './Reset/reset.js'
import Home from './Home/home.js'

import { firebase } from '../firebase'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount(){
    console.log(firebase.auth())
    firebase.auth().onAuthStateChanged(authUser => {
      authUser ? this.setState({authUser}) : this.setState({authUser: null})
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation authUser={this.state.authUser}/>
            <hr />
            <Route exact path={routes.LOG_IN} component={Login}/>
            <Route exact path={routes.SIGN_UP} component={Signup}/>
            <Route exact path={routes.LANDING} component={Landing}/>
            <Route exact path={routes.HOME} component={Home}/>
            <Route exact path={routes.ACCOUNT} component={Reset}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
