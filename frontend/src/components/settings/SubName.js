import React from 'react'

function SubName({ handleChange }) {
    function handleNameChange(e) {
       const nameValue = (e.target.value)
       handleChange(nameValue)
     }
  return (
    <div>
       <input 
              type="name"
              placeholder="Recipients Name..."
              onChange={handleNameChange}
              ></input>

    </div>
  )
}
export default SubName