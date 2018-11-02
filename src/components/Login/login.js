import React, { Component } from 'react'
// import './login.css'

import { withRouter } from 'react-router-dom'
import { SignupLink } from '../Signup/signup'
import { auth } from '../../firebase'

import * as routes from '../../constants/routes'

const Login = ({ history }) => 
  <div>
    <h2>Login Page</h2>
    <LoginForm history={history} />
    <SignupLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

const INIT_STATE = {
  email: '',
  password: '',
  error: ''
}

class LoginForm extends Component {
  constructor(props){
    super(props)

    this.state = {...INIT_STATE}
  }

  onSubmit = (event) => {
    const{
      email, 
      password
    } = this.state

    const{
      history
    } = this.props

    auth.signInUser(email, password).then(
      () => {
        this.setState({ ...INIT_STATE })
        history.push(routes.HOME);
      }).catch(
        error => {
        this.setState(byPropKey('error', error))
      });

    event.preventDefault()
  }

  render() {
    const{
      email,
      password,
      error
    } = this.state

    const invalid = email === '' || password === ''

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <div className="email-container">
          <input type="email" placeholder="Enter email" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}/>
        </div>
        <div class="password-container">
          <input type="password" placeholder="Enter password" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}/>
        </div>
        <input type="submit" value="Log In" disabled={invalid}/>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default withRouter(Login)

export{ LoginForm}