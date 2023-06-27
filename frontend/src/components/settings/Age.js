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
          <div className='input-data'>
           <input 
              type='number'
              placeholder='Recipients Age...'
              id='age'
              onChange={handleAgeChange}/>
          <div className='underline'></div>
            <label for="">Age</label>
          </div>
        </form>




    </div>
  )
}
