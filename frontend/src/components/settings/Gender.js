import React, { useState } from 'react'

function Gender({ handleChange }) {
  // const [gender, setGender] = useState("")
  function handleGenderChange(e){
      const genderValue = e.target.value
      handleChange(genderValue)
  }
  return (
    <div>
        <form>
          <select type='text'
            id='gender'
            onChange={handleGenderChange}>
              <option value="">empty</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Non-Binary">Female</option>
              <option value="any">None</option>
          </select>
          <div className='underline'></div>
          <label for="">Gender of Recipient</label>
        </form>
    </div>
  )
}

export default Gender