import React, { Component } from 'react'
// import './login.css'

class Forgot extends Component {
  render() {
    return (
      <div>
        <div className="login-container">
          <h2>Forgot password</h2>
          <form class="login-form">
            <div class="email-container">
              <input type="email" placeholder="Enter email"/>
            </div>
            <input type="submit" value="Reset password" />
          </form>
        </div>
      </div>
    )
  }
}

export default Forgot