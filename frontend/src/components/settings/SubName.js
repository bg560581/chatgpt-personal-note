import React from 'react'

function SubName({ handleChange }) {
    function handleNameChange(e) {
       const nameValue = (e.target.value)
       handleChange(nameValue)
     }
  return (
    <div className='flex-container'>
        <div className='flex-name'>
        <label>Recipient's Name</label>
        </div>

        
       <input 
              type="name"
              placeholder="Recipient's Name..."
              onChange={handleNameChange} 
              />
              <div className='underline'></div>

    </div>
  )
}
export default SubName