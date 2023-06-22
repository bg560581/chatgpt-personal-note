import React from 'react'

function Login() {

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
            } else {
                setErrorMessage(data.message)
            }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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