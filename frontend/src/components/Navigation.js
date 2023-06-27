import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import "../styles/styles.css"
import { CurrentUser } from '../CurrentUser'

function Navigation() {
    const { currentUser } = useContext(CurrentUser)

    // let loggedIn = (

        // if (!setLoggedIn) {
        //     loggedIn = (
        //         <li>
        //             Logged in as {currentUser.username}
        //         </li>
        //     )
        // }
    // )


  return (
    <div className='container-navBar'>
        {currentUser && (
            <div>
                Logged in as {currentUser.username}
            </div>
        )}
        {/* <div>{loggedIn}</div> */}
        <ul className='navBar'>
            <li> <Link to = "/" className="navBar">Home</Link></li>
            <li> <Link to = "/Pastnotes" className="navBar">Past Notes</Link></li>
            {/* <li> <Link to = "/SignUp" className="navBar">SignUp </Link></li> */}
        </ul>
    </div>
  )
}

export default Navigation