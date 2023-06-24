import React, { useState } from 'react'


export default function Words({ handleChange }) {
    // const [age, setAge] = useState([])
    function handleAgeChange(e){
        // setAge(e.target.value)
        const wordValue = e.target.value;
        handleChange(wordValue)
      }
  return (
    <div>
        <form>
          <div className='row'>
          <div className='col-25'>
            <label for="words">Word Count</label>
            </div>

           <input 
              type='number'
              placeholder='Number of Words'
              id='wordCount'
              onChange={handleAgeChange}
              />

          </div>
        </form>




    </div>
  )
}