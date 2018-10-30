import React, { Component } from 'react'
// import './signup.css'

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="signup-container">
          <h2>Sign up page</h2>
          <form class="signup-form">
            <div class="name-container">
              <input type="text" placeholder="Enter name"/>
            </div>
            <div class="email-container">
              <input type="email" placeholder="Enter email"/>
            </div>
            <div class="password-container">
              <input type="password" placeholder="Enter password"/>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      </div>
    )
  }
}

export default Signup