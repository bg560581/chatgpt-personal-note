import React, { useState, useEffect } from "react";

// INPUTS
import Age from "./settings/Age";
import Gender from "./settings/Gender";
import Occasion from "./settings/Occasion";
import Relationship from "./settings/Relationship";
import Name from "./settings/Name";
import Tone from "./Tone";
import Navigation from "./Navigation";
import "./settings/styles.css"

function Interface() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [relationship, setRelationship] = useState("");
  const [tone, setTone] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      age: age,
      gender: gender,
      occasion: occasion,
      relationship: relationship,
      tone: tone,
      name:name
    };
    fetch("http://localhost:3000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dataresponse) => {
        setNote(dataresponse.content);
      });

    setAge("");
    setGender("");
    setOccasion("");
    setRelationship("");
    setTone("");
    setName("")
  };
  useEffect(() => {}, [note]);
  function handleReset() {
    window.location.reload(true)
  };
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div id="create">
        <h1>Create your own personal note</h1>
        <p>
          using me you can create a personal note for any Occasion, for anyone,
          of any age, and in any Style
        </p>
        <div id="yourNote">
          {note}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <Age handleChange={setAge} />
            <Gender handleChange={setGender} />
            <Occasion handleChange={setOccasion} />
            <Relationship handleChange={setRelationship} />
            <Tone handleChange={setTone} />
            <Name handleChange={setName}/>
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Interface;
