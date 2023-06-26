import React, { useState } from 'react'


export default function Words({ handleChange }) {
    // const [age, setAge] = useState([])
    function handleWordChange(e){
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
            <select type='text'
            id='words'
            onChange={handleWordChange}>
              <option value="">empty</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="any">Any</option>
          </select>
          
           {/* <input 
              type='number'
              placeholder='Number of Words'
              id='wordCount'
              onChange={handleAgeChange}
              /> */}

          </div>
        </form>




    </div>
  )
}