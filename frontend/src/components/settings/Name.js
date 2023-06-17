import React from 'react'

function Name( { handleChange }) {
  function handleNameChange(e) {
    const nameValue = (e.target.value)
    handleChange(nameValue)
  }
  
  return (
    <div>
       <input 
              type="name"
              placeholder="Your Name..."
              onChange={handleNameChange}
              ></input>

    </div>
  )
}

export default Name