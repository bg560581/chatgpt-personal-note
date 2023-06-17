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
          <label for="age">Gender</label>
          <select type='text'
            // value={gender}
            id='gender'
            onChange={handleGenderChange}>
              <option value="">empty</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="none">None</option>
          </select>
        </form>
    </div>
  )
}

export default Gender