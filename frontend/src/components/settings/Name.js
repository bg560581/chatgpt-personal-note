import React from 'react'

function Name( { handleChange }) {
  function handleNameChange(e) {
    const nameValue = (e.target.value)
    handleChange(nameValue)
  }
  
  return (
    <div>
      <div className='input-data'>
          <input 
            type="name"
            placeholder="Your Name..."
            onChange={handleNameChange}/>
        <div className='underline'></div>
        <label for=''>Your Name</label>
        </div>
      </div>
  )
}

export default Name