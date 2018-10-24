import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <form class="login-form">
          <div class="email-container">
            <input type="email" placeholder="Enter email"/>
          </div>
          <div class="password-container">
            <input type="password" placeholder="Enter password"/>
          </div>
          <input type="submit" value="Log In" />
          <a href="" class="forgot-but">Forgot Password</a>
        </form>
      </div>
      <p>Don't have an account ? <a href="">Sign Up</a></p>
    )
  }
}

export default Login
