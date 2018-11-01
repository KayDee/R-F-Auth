import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'

// import './signup.css'

const INIT_STATE = {
  username: '',
  email: '',
  passone: '',
  passtwo: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

const Signup = () => {
  <div class="signup-container">
    <h2>Sign up page</h2>
    <SignupForm />
  </div>
}

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {...INIT_STATE}
  }

  onSubmit = (event) => {

  }
  render(){
    const {
      username,
      email,
      passone,
      passtwo,
      error
    } = this.state
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" value={username} onChange={event => this.setState(byPropKey('username', event.target.value))} placeholder="Full name" />
        <input type="email" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} placeholder="Email Address" />
        <input type="password" value={passone} onChange={event => this.setState(byPropKey('passone', event.target.value))} placeholder="Enter password" />
        <input type="password" value={passtwo} onChange={event => this.setState(byPropKey('passtwo', event.target.value))} placeholder="Re Type password" />
        <button type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
  // render() {
  //   return (
  //     <div>
  //       <div className="signup-container">
  //         <h2>Sign up page</h2>
  //         <form class="signup-form">
  //           <div class="name-container">
  //             <input type="text" placeholder="Enter name"/>
  //           </div>
  //           <div class="email-container">
  //             <input type="email" placeholder="Enter email"/>
  //           </div>
  //           <div class="password-container">
  //             <input type="password" placeholder="Enter password"/>
  //           </div>
  //           <input type="submit" value="Signup" />
  //         </form>
  //       </div>
  //     </div>
  //   )
  // }
}

const SignupLink = () => {
  <p>
    Don\'t have an account ?{' '}
    <Link to={routes.SIGN_UP}></Link>
  </p>
}

export default Signup

export{
  SignupForm,
  SignupLink
}