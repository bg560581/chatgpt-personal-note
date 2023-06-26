import React from "react";

function SubName({ handleChange }) {
  function handleNameChange(e) {
    const nameValue = e.target.value;
    handleChange(nameValue);
  }
  return (
    <div>
      <div className="input-data">
        <input
          type="name"
          placeholder="Recipient's Name..."
          onChange={handleNameChange}/>
        <div className="underline"></div>
        <label for="">Recipient's Name</label>
      </div>
    </div>
  );
}
export default SubName;
