import React, { useState } from 'react'

function Tone({ handleChange}) {
  // const [tone, setTone] = useState('');
  function handleToneChange(e) {
    const toneValue = e.target.value;
    handleChange(toneValue)
  }
  return (
    <div>
      <form>
        <select
          type='text'
          // value={tone}
          id='tone'
          onChange={handleToneChange}>
            <option value=''>empty</option>
            <option value='cute'>Cute</option>
            <option value='edgy'>Edgy</option>
            <option value='funny'>Funny</option>
            <option value='heartfelt'>Heartfelt</option>
            <option value='inspirational'>Inspirational</option>
            <option value='religious'>Religious</option>
            <option value='thoughtful'>Thoughtful</option>
            <option value='nice'>Nice</option>
          </select>
          <div className='underline'></div>
          <label for='tone'>Tone</label>

      </form>


    </div>
  )
}

export default Tone