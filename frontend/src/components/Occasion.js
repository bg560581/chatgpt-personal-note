import React, { useState } from 'react'

function Occasion({ handleChange }) {
    // const [occasion, setOccasion] = useState('');
    function handleOccasionChange(e) {
        const occasionValue = (e.target.value);
        handleChange(occasionValue);
    }
  return (
    <div>
        <form>
            <label for='occasion'>Occasion</label>
            <select  type='occasion'
            // value={occasion}
            id='occasion'
            onChange={handleOccasionChange}>
                <option value=''>empty</option>
                <option value='fathers day'>Father's Day</option>
                <option value='mothers day'>Mother's Day</option>
                <option value='halloween'>Halloween</option>
                <option value='veterans day'>Veteran's Day</option>
                <option value='thanksgiving'>Thanksgiving</option>
                <option value='christmas'>Christmas</option>
                <option value='news years'>New Years</option>
                <option value='valentine day'>Valentine's Day</option>
                <option value='st patricks day'>Saint Patrick's Day</option>
                <option value='easter'>Easter</option>
            </select>
        </form>
    </div>
  )
}

export default Occasion