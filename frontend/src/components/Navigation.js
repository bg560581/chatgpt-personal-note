import React from 'react'
import { Link } from "react-router-dom"
// import Login from './authenication/Login'
import Home from './Home'
// import SignUp from './authenication/SignUp'
// import Pastnotes from './settings/Pastnotes'
import Interface from './Interface'
import "../App.css"
import { CurrentUser } from '../CurrentUser'

function Navigation() {

    const { currentUser } = useContext(CurrentUser)

    // let loggedIn = (

    // )

    if (currentUser) {
        loggedIn = (
            <li>
                Logged in as {currentUser.username}
            </li>
        )
    }

  return (
    <div>
        <ul className='navBar'>
            <li> <Link to = "/">Home</Link></li>
            <li> <Link to = "/Interface">Interface</Link></li>
            <li> <Link to = "/PastNotes">PastNotes</Link></li>
            <li> <Link to = "/Login">Login</Link></li>
            <li> <Link to = "/SignUp">SignUp</Link></li>
        </ul>
    </div>
  )
}

export default Navigation