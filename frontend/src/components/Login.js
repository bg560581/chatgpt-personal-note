import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { CurrentUser } from '../CurrentUser'
import Interface from './Interface';

function Login({ setToken }) {

    // const { setCurrentUser } = useContext(CurrentUser)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    })
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ LoginMessage, setLoginMessage ] = useState(null)
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/authentication/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        // const token = await loginUser({
        //     username,
        //     password
        // })
        // setToken(token)
        if (response.status === 200) {
            setToken(data.token)
            // setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            setIsLoggedIn(true)
            setLoginMessage('You have logged in Successfully')

            console.log(data)
            } else {
                setErrorMessage(data.message)
            }
            
    }
if (isLoggedIn) {
       return <Interface />
        
}

  return (
    <div>
        <h1>Please Login</h1>
        {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
          
        </div>
      ) : null}
        {{LoginMessage} !== null ? (
        <div className="alert" role="alert">
          {LoginMessage}
          
        </div>
      ) : null}
        <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              value={credentials.username}
              onChange={(e) => 
                setCredentials({ ...credentials, username: e.target.value })
                // setUserName(e.target.value)
              }   
              name="username"
            />
          </div>
          <div className='flex-container'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => 
                setCredentials({ ...credentials, password: e.target.value })
                // setPassword(e.target.value)
              }   
              name="password"
            />
          </div>
        </div>
        <input type="submit" value="Login" />
      </form>



    </div>
  )
}
Login.prototypes = {
    setToken: PropTypes.func.isRequired
}
export default Login