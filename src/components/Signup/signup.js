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
    return(
      <form onSubmit={this.onSubmit}></form>
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