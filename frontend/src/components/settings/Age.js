import React, { useState } from 'react'
import axios from 'axios'




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
          <div className='flex-container'>

            <label for="age">Age</label>
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
