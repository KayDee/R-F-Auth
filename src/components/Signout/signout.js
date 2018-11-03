import React from 'react'

import { auth } from '../../firebase'

const SignoutButton = () => 
  <div className="">
    <button type="button" onClick={auth.signOut}>Sign Out</button>
  </div>

export default SignoutButton