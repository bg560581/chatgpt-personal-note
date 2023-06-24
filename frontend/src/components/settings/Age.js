import React, { useState } from 'react'


export default function Age({ handleChange }) {
    // const [age, setAge] = useState([])
    function handleAgeChange(e){
        // setAge(e.target.value)
        const ageValue = e.target.value;
        handleChange(ageValue)
      }
  return (
    <div>
        <form>
          <div className='row'>
          <div className='col-25'>
            <label for="age">Age</label>
            </div>

           <input 
              type='number'
              placeholder='Recipients Age...'
              id='age'
              onChange={handleAgeChange}
              />

          </div>
        </form>




    </div>
  )
}
