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
            {/* <label for="age">Age</label> */}
           <input 
              type='number'
              placeholder='Recipients Age...'
              // value={age}
              id='age'
              onChange={handleAgeChange}
           />

        </form>




    </div>
  )
}
