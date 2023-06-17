import React from 'react'
import Login from './authenication/Login'
import Home from './Home'
import SignUp from './authenication/SignUp'
import Pastnotes from './settings/Pastnotes'

function Navigation() {
    
  return (
    <div>
        <ul>
            <li><a href={"./Login"}>Login</a></li>
            <li><a href={"./SignUp"}>Sign Up</a></li>
            <li><a href={"./Home"}>Home</a></li>
            <li>Past Notes</li>
        </ul>
    </div>
  )
}

export default Navigation