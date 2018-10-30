import React, { Component } from 'react'
import Forgot from '../Forgot/forgot.js'
// import './login.css'

class Reset extends Component {
  render() {
    return (
      <div>
        <div className="reset-container">
          <h2>Account page</h2>
          <form class="reset-form">
            <div class="password-container">
              <input type="password" placeholder="Enter password"/>
            </div>
            <div class="password-container confirm-password">
              <input type="password" placeholder="Confirm password"/>
            </div>
            <input type="submit" value="Change Password" />
          </form>
        </div>
        <Forgot />
      </div>
    )
  }
}

export default Reset