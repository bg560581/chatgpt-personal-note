import React, { useState } from "react";

function Relationship({ handleChange }) {
  function handleRelationshipChange(e) {
    const relationshipValue = e.target.value;
    handleChange(relationshipValue);
  }
  return (
    <div>
      <form id="relationship">
        <select
          type="text"
          name="relation"
          placeholder="Select One"
          id="relationship"
          onChange={handleRelationshipChange}
        >
          <option value="">empty</option>
          <option value="father">Father</option>
          <option value="brother">Brother</option>
          <option value="sister">Sister</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="aunt">Aunt</option>
          <option value="uncle">Uncle</option>
          <option value="grandmother">Grandmother</option>
          <option value="grandfather">Grandfather</option>
          <option value="stepbrother">Step-Brother</option>
          <option value="stepsister">Step-Sister</option>
          <option value="motherinlaw">Mother-In-Law</option>
          <option value="fatherinlaw">Father-In-Law</option>
          <option value="brotherinlaw">Brother-In-Law</option>
          <option value="sisterinlaw">Sister-In-Law</option>
          <option value="granddaughter">Granddaughter</option>
          <option value="grandson">Grandson</option>
          <option value="niece">Niece</option>
          <option value="nephew">Nephew</option>
          <option value="halfbrother">Half-Brother</option>
          <option value="halfsister">Half-Sister</option>
          <option value="husband">Husband</option>
          <option value="wife">Wife</option>
          <option value="spouse">Spouse</option>
          <option value="partner">Partner</option>
        </select>
        <div className="underline"></div>
        <label for="">Relationship</label>
      </form>
    </div>
  );
}

export default Relationship;
