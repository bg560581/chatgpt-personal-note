import React from "react";

function SubName({ handleChange }) {
  function handleNameChange(e) {
    const nameValue = e.target.value;
    handleChange(nameValue);
  }
  return (
    <div className="row">
      <div className="col-25">
        <label>Recipient's Name</label>
      </div>
      <div className="col-75">
        <input
          type="name"
          placeholder="Recipient's Name..."
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}
export default SubName;
