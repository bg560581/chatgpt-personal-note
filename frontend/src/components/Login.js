import React, { useContext, useState } from 'react'
import { CurrentUser } from '../CurrentUser'


function Login() {

    const { setCurrentUser } = useContext(CurrentUser)

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    })
    const [ errorMessage, setErrorMessage ] = useState(null)

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

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            console.log(data.token)
            } else {
                setErrorMessage(data.message)
            }
    }
  return (
    <div>
        <h1>Login</h1>
        {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
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

export default Login