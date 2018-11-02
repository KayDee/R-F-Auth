import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../constants/routes'

import SignoutButton from './Signout/signout'

const Navigation = ({ authUser }) =>
  <div>
    {authUser ? <NavigUser /> : <NavigNonUser />}
  </div>

const NavigUser = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignoutButton /></li>
  </ul>

const NavigNonUser = () =>
<ul>
  <li><Link to={routes.LOG_IN}>Sign In</Link></li>
  <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
</ul>

export default Navigation